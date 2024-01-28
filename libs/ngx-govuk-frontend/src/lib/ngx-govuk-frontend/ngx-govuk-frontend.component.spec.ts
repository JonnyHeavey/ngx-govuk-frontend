import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NgxGovukFrontendComponent } from './ngx-govuk-frontend.component';

describe('NgxGovukFrontendComponent', () => {
  let component: NgxGovukFrontendComponent;
  let fixture: ComponentFixture<NgxGovukFrontendComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgxGovukFrontendComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(NgxGovukFrontendComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
