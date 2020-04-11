import { async, TestBed } from '@angular/core/testing';
import { MatSidenavModule } from '@angular/material/sidenav';
import { By } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        MatSidenavModule,
        BrowserAnimationsModule
      ],
      declarations: [
        AppComponent,
        SidenavComponent
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should show the correct title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const headerText = fixture.debugElement.query(By.css('.header')).nativeElement.textContent;

    expect(headerText).toBe('Consents Collector');
  });
});
