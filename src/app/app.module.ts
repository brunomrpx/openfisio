import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NglModule } from 'ng-lightning/ng-lightning';

import { routes } from './app.route';

import { CoreModule } from './core/core.module';
import { PagesModule } from './pages/pages.module';
import { DomainModule } from './domain/domain.module';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    NglModule.forRoot(),
    CoreModule,
    DomainModule,
    PagesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
