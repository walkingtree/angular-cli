import { Component } from '@angular/core';

@Component({
  selector: '<%= prefix %>-root',<% if (inlineTemplate) { %>
  template: `
  <% if(!skipMaterial){ %>
<md-card class="example-card">

  <img md-card-image src="https://cli.angular.io/node_modules/microsite-ui/images/angular-logo-with-text.svg">
  <md-card-title>{{appName}}</md-card-title>
  <md-card-content>
    <p>
      The Angular CLI makes it easy to create an application that already works, right out of the box. It already follows our best practices!
    </p>
  </md-card-content>

</md-card>
<% } else {%>
<h1>
  {{title}}
</h1>
  <% } %>

<% if (routing) { %>
<router-outlet></router-outlet><% } %>`,<% } else { %>
  templateUrl: './app.component.html',<% } %><% if (inlineStyle) { %>
  styles: []<% } else { %>
  styleUrls: ['./app.component.<%= styleExt %>']<% } %>
})
export class AppComponent {

<% if ( !skipMaterial ){ %>
  appName = '<%= fullAppName %> works!';
  <% } else{%>
   title ='<%= prefix %> works!';
  <% }%>
}
