import { NgModule } from '@angular/core';

import { ClientModule } from './clients/client.module';

@NgModule({
  imports: [
    ClientModule
  ],
  exports: [
    ClientModule
  ],
  declarations: [],
  providers: [],
})
export class DomainModule { }
