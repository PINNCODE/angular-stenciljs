import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {WebComponentsLibraryModule} from "../libs/web-components-library/web-components-library.module";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    WebComponentsLibraryModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
