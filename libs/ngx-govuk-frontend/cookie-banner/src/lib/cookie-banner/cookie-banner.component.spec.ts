import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GovUKCookieBannerComponent } from './cookie-banner.component';

describe('CookieBannerComponent', () => {
  let component: GovUKCookieBannerComponent;
  let fixture: ComponentFixture<GovUKCookieBannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GovUKCookieBannerComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(GovUKCookieBannerComponent);
    component = fixture.componentInstance;
    fixture.componentRef.setInput('appName', 'test service');
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render cookie banner with default class', () => {
    const bannerElement = fixture.nativeElement.querySelector('.govuk-cookie-banner');
    expect(bannerElement).toBeTruthy();
    expect(bannerElement.classList.contains('govuk-cookie-banner')).toBeTruthy();
  });

  it('should render cookie banner with role="region"', () => {
    const bannerElement = fixture.nativeElement.querySelector('.govuk-cookie-banner');
    expect(bannerElement.getAttribute('role')).toBe('region');
  });

  it('should render cookie banner with aria-label', () => {
    const bannerElement = fixture.nativeElement.querySelector('.govuk-cookie-banner');
    expect(bannerElement.getAttribute('aria-label')).toBe('Cookies on test service');
  });

  it('should project content correctly', () => {
    const testContent = '<div>Test Content</div>';
    fixture.nativeElement.innerHTML = testContent;
    fixture.detectChanges();
    
    const contentElement = fixture.nativeElement.querySelector('div');
    expect(contentElement).toBeTruthy();
    expect(contentElement.textContent).toBe('Test Content');
  });
});

