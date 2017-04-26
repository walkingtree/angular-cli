import { TestBed, async } from '@angular/core/testing';<% if (routing) { %>
import { RouterTestingModule } from '@angular/router/testing';<% } %>
<% if ( !skipMaterial ) { %>
  // import {NoopAnimationsModule} from '@angular/platform-browser/animations';
  import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
  import {MaterialModule} from '@angular/material';
  <% } %>

import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [<% if (routing) { %>
        RouterTestingModule <% } %> <% if (routing && !skipMaterial ) { %> ,<% } %>
        <% if ( !skipMaterial ) { %>BrowserAnimationsModule,
        MaterialModule/*,
         NoopAnimationsModule*/ <% } %>
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
  <% if ( !skipMaterial ){ %>

    it(`should have as card title as '<%= fullAppName %> works!'`, async(() => {
      const fixture = TestBed.createComponent(AppComponent);
      const app = fixture.debugElement.componentInstance;
      expect(app.appName).toEqual('<%= fullAppName %> works!');
    }));

    it('should render title in a md-card-title tag', async(() => {
      const fixture = TestBed.createComponent(AppComponent);
      fixture.detectChanges();
      const compiled = fixture.debugElement.nativeElement;
      expect(compiled.querySelector('md-card-title').textContent).toContain('<%= fullAppName %> works!');
    }));


    <% } else {%>
        it(`should have as title '<%= prefix %> works!'`, async(() => {
          const fixture = TestBed.createComponent(AppComponent);
          const app = fixture.debugElement.componentInstance;
          expect(app.title).toEqual('<%= prefix %> works!');
        }));

        it('should render title in a h1 tag', async(() => {
          const fixture = TestBed.createComponent(AppComponent);
          fixture.detectChanges();
          const compiled = fixture.debugElement.nativeElement;
          expect(compiled.querySelector('h1').textContent).toContain('<%= prefix %> works!');
        }));
    <% }%>
});
