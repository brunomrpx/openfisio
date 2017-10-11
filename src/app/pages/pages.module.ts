import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { routes } from './pages.route';
import { DomainModule } from '../domain/domain.module';

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    DomainModule
  ],
  declarations: [
    HomeComponent
  ],
  providers: []
})
export class PagesModule { }
