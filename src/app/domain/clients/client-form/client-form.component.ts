import { Component, ViewChild, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators, NgForm } from '@angular/forms';

import { Client } from '../client.model';
import { FormState } from '../client.constant';

@Component({
  selector: 'app-client-form',
  templateUrl: 'client-form.component.html'
})
export class ClientFormComponent {
  @ViewChild('form') form: NgForm;

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

  constructor(private formBuilder: FormBuilder) {
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

    console.log('-> saving client: ', this.formGroup, this.client);
  }
}
