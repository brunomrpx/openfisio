import { Component, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators, NgForm } from '@angular/forms';

@Component({
  selector: 'app-client-form',
  templateUrl: 'client-form.component.html'
})
export class ClientFormComponent {
  @ViewChild('form') form: NgForm;

  public formGroup: FormGroup;
  public errorMessages = {};
  private submitted = false;

  constructor(private formBuilder: FormBuilder) {
    this.formGroup = this.formBuilder.group({
      name: [null, Validators.required],
      rg: [null, Validators.required],
      cpf: [null, Validators.required],
    });

    this.formGroup.valueChanges.subscribe(changes => {
      console.log('-> changes: ', changes);

      if (this.submitted) {
        this.bindErrorMessages();
      }
    });
  }

  private bindErrorMessages() {
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

  save() {
    this.submitted = true;
    this.bindErrorMessages();

    console.log('-> saving client: ', this.formGroup);
  }
}
