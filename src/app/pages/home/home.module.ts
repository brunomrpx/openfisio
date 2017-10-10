import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { routes } from './home.route';
import { HomeComponent } from './home.component';

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  declarations: [
    HomeComponent
  ],
  entryComponents: [
    HomeComponent
  ],
  providers: [],
})
export class HomeModule { }
