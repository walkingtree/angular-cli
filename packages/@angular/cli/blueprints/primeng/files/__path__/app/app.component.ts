import { Component } from '@angular/core';

@Component({
  selector: '<%= prefix %>-root',<% if (inlineTemplate) { %>
  template: `
    <p-panel>
    <p-header>
        <div class="ui-helper-clearfix">
            <span class="ui-panel-title" style="font-size:16px;display:inline-block;margin-top:2px">Welcome to {{title}}!!</span>
            
            <button pButton type="button"  style="float:right;"  label="PrimeNG" href="https://www.primefaces.org/primeng" icon="fa-check" ></button>
        </div>
    </p-header>
   <div class="card-content">
      <div class="img" style="background-color:black; background-image: url(https://www.primefaces.org/primeng/assets/showcase/images/logo.png);"></div>
      <div class="content">
        <div>This app has been generated using <span class="command">angular-cli</span> and <span class="command"> PrimeNG</span> application blueprint. This uses the newly added option <span class="command">--app-blueprint</span> of angular-cli. Here is a sample example to generate application using primeNG blueprint:</div>
        <p class="command">ng new -ab primeng foo</p>
        <p>or</p>
        <p class="command">ng new --app-blueprint primeng foo</p>
      </div>
    </div>
    <p-footer>
        
        <button pButton type="button" icon="fa-list" label="View" class="ui-button-success"></button>
    </p-footer>
</p-panel>
<% if (routing) { %>
<router-outlet></router-outlet><% } %>
  `,<% } else { %>
  templateUrl: './app.component.html',<% } %><% if (inlineStyle) { %>
  styles: [`
  .card-content {
    width: 100%;
    padding: 15px;
}

.card-content .img {
       background-size: 100% 100%;
    background-repeat: no-repeat;
    display: inline-block;
    width: 200px;
    height: 50px;
    background-position: 50%;
    float: left;
    border: 1px solid white;
    margin: 0px 10px 0px 0px;
    border-radius: 6px;
    padding: 5px;
}

.card-content .content {
    vertical-align: top;
    margin-left: 200px;
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
export class AppComponent  {
  title = '<%= prefix %>';

    
}
