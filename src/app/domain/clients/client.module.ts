import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NglModule } from 'ng-lightning';

import { ClientListComponent } from './client-list/client-list.component';
import { ClientService } from './client.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NglModule
  ],
  declarations: [
    ClientListComponent
  ],
  exports: [
    ClientListComponent
  ],
  entryComponents: [],
  providers: [
    ClientService
  ],
})
export class ClientModule { }
