import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NglModule } from 'ng-lightning';

import { ClientListComponent } from './client-list/client-list.component';
import { ClientService } from './client.service';
import { ClientCrudComponent } from './client-crud/client-crud.component';
import { ClientFormComponent } from './client-form/client-form.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NglModule,
    ReactiveFormsModule
  ],
  declarations: [
    ClientListComponent,
    ClientCrudComponent,
    ClientFormComponent
  ],
  exports: [
    ClientListComponent,
    ClientCrudComponent,
    ClientFormComponent
  ],
  entryComponents: [],
  providers: [
    ClientService
  ],
})
export class ClientModule { }
