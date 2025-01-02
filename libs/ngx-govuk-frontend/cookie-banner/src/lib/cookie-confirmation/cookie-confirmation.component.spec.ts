import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GovUKCookieConfirmationComponent } from './cookie-confirmation.component';

describe('CookieConfirmationComponent', () => {
  let component: GovUKCookieConfirmationComponent;
  let fixture: ComponentFixture<GovUKCookieConfirmationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GovUKCookieConfirmationComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(GovUKCookieConfirmationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render cookie confirmation banner with default class', () => {
    const bannerElement = fixture.nativeElement.querySelector('.govuk-cookie-banner');
    expect(bannerElement).toBeTruthy();
    expect(bannerElement.classList.contains('govuk-cookie-banner')).toBeTruthy();
  });

  it('should render cookie confirmation banner with role="region"', () => {
    const bannerElement = fixture.nativeElement.querySelector('.govuk-cookie-banner');
    expect(bannerElement.getAttribute('role')).toBe('region');
  });

  it('should render cookie confirmation banner with aria-label', () => {
    const bannerElement = fixture.nativeElement.querySelector('.govuk-cookie-banner');
    expect(bannerElement.getAttribute('aria-label')).toBe('Cookies on [name of service]');
  });

  it('should display acceptance message when cookies are accepted', () => {
    const messageElement = fixture.nativeElement.querySelector('.govuk-body');
    expect(messageElement.textContent.trim()).toBe("You've accepted additional cookies. You can change your cookie settings at any time.");
  });

  it('should emit hide event when hide button is clicked', () => {
    const hideSpy = jest.spyOn(component.hide, 'emit');
    const hideButton = fixture.nativeElement.querySelector('button');
    
    hideButton.click();
    expect(hideSpy).toHaveBeenCalled();
  });
});
