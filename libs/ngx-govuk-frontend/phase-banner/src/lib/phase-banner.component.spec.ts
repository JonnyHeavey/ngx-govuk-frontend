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
  });

  it('should create', () => {
    fixture.componentRef.setInput('phase', 'alpha');
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });

  it('should render phase banner with phase text', () => {
    const testPhase = 'beta';
    fixture.componentRef.setInput('phase', testPhase);
    fixture.detectChanges();

    const phaseElement = fixture.nativeElement.querySelector('.govuk-phase-banner__content__tag');
    expect(phaseElement).toBeTruthy();
    expect(phaseElement.textContent.trim()).toBe('Beta');
  });

  it('should render phase banner with default class', () => {
    fixture.componentRef.setInput('phase', 'alpha');
    fixture.detectChanges();

    const bannerElement = fixture.nativeElement.querySelector('.govuk-phase-banner');
    expect(bannerElement).toBeTruthy();
    expect(bannerElement.classList.contains('govuk-phase-banner')).toBeTruthy();
  });

  it('should update phase when input changes', () => {
    const initialPhase = 'alpha';
    const updatedPhase = 'beta';
    
    fixture.componentRef.setInput('phase', initialPhase);
    fixture.detectChanges();
    
    let phaseElement = fixture.nativeElement.querySelector('.govuk-phase-banner__content__tag');
    expect(phaseElement.textContent.trim()).toBe('Alpha');

    fixture.componentRef.setInput('phase', updatedPhase);
    fixture.detectChanges();
    
    phaseElement = fixture.nativeElement.querySelector('.govuk-phase-banner__content__tag');
    expect(phaseElement.textContent.trim()).toBe('Beta');
  });
});
