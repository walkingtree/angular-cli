import { TestBed, async } from '@angular/core/testing';<% if (routing) { %>
import { RouterTestingModule } from '@angular/router/testing';<% } %>
import { PanelModule,ButtonModule } from 'primeng/primeng';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({<% if (routing) { %>
      imports: [
        RouterTestingModule
      ],<% } %>
      declarations: [
        AppComponent
      ],
      imports:[
        PanelModule,
        ButtonModule,
        BrowserAnimationsModule
      ]
    }).compileComponents();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it(`should have as title '<%= prefix %>'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('<%= prefix %>');
  }));

  it('should render title panel header', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('.ui-panel-title').textContent).toContain('Welcome to <%= prefix %>!!');
  }));
});
