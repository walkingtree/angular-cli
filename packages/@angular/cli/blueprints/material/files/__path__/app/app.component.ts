import { Component } from '@angular/core';

@Component({
  selector: '<%= prefix %>-root',<% if (inlineTemplate) { %>
  template: `
    <md-toolbar color="primary">
      <h1>{{title | uppercase}}</h1>
    </md-toolbar>
    <md-card>
      <md-card-title>
        Welcome to {{title}}!!
      </md-card-title>
      <md-card-subtitle>
        Starter app generated using angular-cli and Material
      </md-card-subtitle>
      <md-card-content>
        <div class="card-content">
          <div class="img" style="background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAxOS4xLjAsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0iTGF5ZXJfMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMHB4IiB5PSIwcHgiDQoJIHZpZXdCb3g9IjAgMCAyNTAgMjUwIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAyNTAgMjUwOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+DQo8c3R5bGUgdHlwZT0idGV4dC9jc3MiPg0KCS5zdDB7ZmlsbDojREQwMDMxO30NCgkuc3Qxe2ZpbGw6I0MzMDAyRjt9DQoJLnN0MntmaWxsOiNGRkZGRkY7fQ0KPC9zdHlsZT4NCjxnPg0KCTxwb2x5Z29uIGNsYXNzPSJzdDAiIHBvaW50cz0iMTI1LDMwIDEyNSwzMCAxMjUsMzAgMzEuOSw2My4yIDQ2LjEsMTg2LjMgMTI1LDIzMCAxMjUsMjMwIDEyNSwyMzAgMjAzLjksMTg2LjMgMjE4LjEsNjMuMiAJIi8+DQoJPHBvbHlnb24gY2xhc3M9InN0MSIgcG9pbnRzPSIxMjUsMzAgMTI1LDUyLjIgMTI1LDUyLjEgMTI1LDE1My40IDEyNSwxNTMuNCAxMjUsMjMwIDEyNSwyMzAgMjAzLjksMTg2LjMgMjE4LjEsNjMuMiAxMjUsMzAgCSIvPg0KCTxwYXRoIGNsYXNzPSJzdDIiIGQ9Ik0xMjUsNTIuMUw2Ni44LDE4Mi42aDBoMjEuN2gwbDExLjctMjkuMmg0OS40bDExLjcsMjkuMmgwaDIxLjdoMEwxMjUsNTIuMUwxMjUsNTIuMUwxMjUsNTIuMUwxMjUsNTIuMQ0KCQlMMTI1LDUyLjF6IE0xNDIsMTM1LjRIMTA4bDE3LTQwLjlMMTQyLDEzNS40eiIvPg0KPC9nPg0KPC9zdmc+DQo=);"></div>
          <div class="content">
            <div>This app has been generated using <span class="command">angular-cli</span> and <span class="command">material</span> application blueprint. This uses the newly added option <span class="command">--app-blueprint</span> of angular-cli. Here is a sample example to generate application using materal blueprint:</div>
            <p class="command">ng new -ab material foo</p>
            <p>or</p>
            <p class="command">ng new --app-blueprint material foo</p>
          </div>
        </div>
      </md-card-content>
    </md-card><% if (routing) { %>
    <router-outlet></router-outlet><% } %>
  `,<% } else { %>
  templateUrl: './app.component.html',<% } %><% if (inlineStyle) { %>
  styles: [`
  .card-content {
    width: 100%;
    padding: 15px;
}

.card-content .img {
    display: inline-block;
    width: 100px;
    height: 100px;
    background-repeat: no-repeat;
    background-size: 120%;
    background-position: 50%;
    float: left;
}

.card-content .content {
    vertical-align: top;
    margin-left: 100px;
    padding: 10px 0px 0px 20px;
}

.command {
    font-family: "Courier New", Courier, "Lucida Sans Typewriter", "Lucida Typewriter", monospace;
    font-size: 1.1em;
}

.content div {
    line-height: 1.5em;
}
  `]<% } else { %>
  styleUrls: ['./app.component.<%= styleExt %>']<% } %>
})
export class AppComponent {
  title = '<%= prefix %>';
}
