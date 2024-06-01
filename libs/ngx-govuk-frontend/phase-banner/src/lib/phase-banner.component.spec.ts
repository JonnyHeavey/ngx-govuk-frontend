import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GovUKPhaseBannerComponent } from './phase-banner.component';

describe('GovUKPhaseBannerComponent', () => {
  let component: GovUKPhaseBannerComponent;
  let fixture: ComponentFixture<GovUKPhaseBannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GovUKPhaseBannerComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(GovUKPhaseBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
