import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatButtonModule } from '@angular/material/button';
import { By } from '@angular/platform-browser';
import { PaginatorComponent } from './paginator.component';

describe('PaginatorComponent', () => {
  let component: PaginatorComponent;
  let fixture: ComponentFixture<PaginatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PaginatorComponent],
      imports: [
        MatButtonModule
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaginatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit next page', (done) => {
    component.pageIndex = 1;
    const buttonNext = fixture.debugElement.queryAll(By.css('.container > button'))[1].nativeElement;
    component.page.subscribe((page: number) => {
      expect(page).toEqual(2);
      done();
    });

    buttonNext.click();

    expect(component).toBeTruthy();
  });

  it('should emit previous page', (done) => {
    component.pageIndex = 1;
    const buttonNext = fixture.debugElement.queryAll(By.css('.container > button'))[0].nativeElement;
    component.page.subscribe((page: number) => {
      expect(page).toEqual(0);
      done();
    });

    buttonNext.click();

    expect(component).toBeTruthy();
  });

  it('should emit page number', (done) => {
    component.numPages = 5;
    component.updatePageLinks();
    fixture.detectChanges();

    component.page.subscribe((page: number) => {
      expect(page).toEqual(2);
      done();
    });
    fixture.debugElement.queryAll(By.css('.center > button'))[2].nativeElement.click();
  });
});
