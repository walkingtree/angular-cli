import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
<% if (routing) { %>
import { AppRoutingModule } from './app-routing.module';<% } %>
<% if ( !skipMaterial ) { %>
  // import {NoopAnimationsModule} from '@angular/platform-browser/animations';
  import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
  import {MaterialModule} from '@angular/material';
<% } %>

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule<% if (routing) { %>,
    AppRoutingModule<% } %> <% if ( !skipMaterial ) { %>,
    BrowserAnimationsModule,
    MaterialModule/*,
     NoopAnimationsModule*/ <% } %>

],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
