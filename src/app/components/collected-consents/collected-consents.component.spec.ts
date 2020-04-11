import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { By } from '@angular/platform-browser';
import { ApiService } from 'src/app/services/api.service';
import { ApiServiceMock } from 'src/mocks/apiMock.service';
import { PaginatorComponent } from '../paginator/paginator.component';
import { FormatPipe } from './../../pipes/format.pipe';
import { CollectedConsentsComponent } from './collected-consents.component';

describe('CollectedConsentsComponent', () => {
  let component: CollectedConsentsComponent;
  let fixture: ComponentFixture<CollectedConsentsComponent>;
  let apiService: ApiService;
  let apiSpy: jasmine.Spy;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        CollectedConsentsComponent,
        FormatPipe,
        PaginatorComponent
      ],
      providers: [
        {
          provide: ApiService,
          useClass: ApiServiceMock
        }
      ],
      imports: [
        MatTableModule,
        MatButtonModule
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CollectedConsentsComponent);
    component = fixture.componentInstance;
    apiService = TestBed.inject(ApiService);
    apiSpy = spyOn(apiService, 'getConsentsList').and.callThrough();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should get data from api', () => {
    expect(apiSpy).toHaveBeenCalled();
  });

  it('should display the right number of rows', async(() => {
    fixture.whenStable().then(() => {
      fixture.detectChanges();
      const rows = fixture.debugElement.queryAll(By.css('tbody tr'));
      expect(rows.length).toBe(2);
    });
    component.ngOnInit();
  }));
});
