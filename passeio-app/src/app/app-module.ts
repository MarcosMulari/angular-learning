import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';

import {provideHttpClient, withFetch} from '@angular/common/http';
import { LandingpageComponent } from './landingpage-component/landingpage-component'

@NgModule({
  declarations: [
    App,
    LandingpageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideHttpClient(withFetch())
  ],
  bootstrap: [App]
})
export class AppModule { }
