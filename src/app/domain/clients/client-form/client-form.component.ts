import { Component, ViewChild, Input, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators, NgForm } from '@angular/forms';

import { Client } from '../client.model';
import { FormState } from '../client.constant';
import { ClientService } from '../client.service';

@Component({
  selector: 'app-client-form',
  templateUrl: 'client-form.component.html'
})
export class ClientFormComponent {
  @ViewChild('form') form: NgForm;
  @Output() created = new EventEmitter();
  @Output() updated = new EventEmitter();

  public formGroup: FormGroup;
  public errorMessages: { [key: string]: string } = {};
  public formState = FormState.Create;

  private _client: Client = null;
  private submitted = false;

  @Input() set client(client: Client) {
    this._client = client;

    if (this.client !== null) {
      this.bindClientValue();
    }
  }

  get client() {
    return this._client;
  }

  constructor(private formBuilder: FormBuilder, private clientService: ClientService) {
    this.formGroup = this.formBuilder.group({
      name: [null, Validators.required],
      rg: [null, Validators.required],
      cpf: [null, Validators.required],
    });

    this.formGroup.valueChanges.subscribe(changes => {
      if (this.submitted) {
        this.updateErrorMessages();
      }
    });
  }

  private bindClientValue() {
    this.formState = FormState.Update;

    const controls = this.formGroup.controls;

    for (const ctrlName in controls) {
      const control = controls[ctrlName];

      if (this.client[ctrlName]) {
        control.setValue(this.client[ctrlName]);
      }
    }
  }

  private updateErrorMessages() {
    const controls = this.formGroup.controls;

    for (const ctrlName in controls) {
      const control = controls[ctrlName];

      if (control.valid) {
        delete this.errorMessages[ctrlName];
      } else {
        this.errorMessages[ctrlName] = this.getErrorMessage(control.errors);
      }
    }
  }

  private getErrorMessage(errors) {
    let message = 'Invalid field';

    if ('required' in errors) {
      message = 'Required field';
    }

    return message;
  }

  reset() {
    this.formGroup.reset();
    this.errorMessages = {};
    this.submitted = false;
    this.client = null;
    this.formState = FormState.Create;
  }

  save() {
    this.submitted = true;
    this.updateErrorMessages();

    if (this.formGroup.invalid) {
      return;
    }

    const formValue = this.formGroup.value;

    if (this.formState === FormState.Create) {
      this.clientService.create(formValue);
      this.created.emit(formValue);
    } else {
      formValue.id = this.client.id;

      this.clientService.update(formValue);
      this.updated.emit(formValue);
    }
  }
}
