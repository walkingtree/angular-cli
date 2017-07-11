import { PanelModule,ButtonModule } from 'primeng/primeng';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
<% if (routing) { %>
import { AppRoutingModule } from './app-routing.module';<% } %>
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    PanelModule,
    ButtonModule,
    BrowserAnimationsModule,
    BrowserModule<% if (routing) { %>,
    AppRoutingModule<% } %>
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
