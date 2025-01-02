import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { GovUKHeaderComponent } from './header.component';

describe('HeaderComponent', () => {
  let component: GovUKHeaderComponent;
  let fixture: ComponentFixture<GovUKHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GovUKHeaderComponent, RouterTestingModule],
    }).compileComponents();

    fixture = TestBed.createComponent(GovUKHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render header with default class', () => {
    const headerElement = fixture.nativeElement.querySelector('.govuk-header');
    expect(headerElement).toBeTruthy();
    expect(headerElement.classList.contains('govuk-header')).toBeTruthy();
  });

  it('should render GOV.UK logo', () => {
    const logoElement = fixture.nativeElement.querySelector('.govuk-header__logotype');
    expect(logoElement).toBeTruthy();
    expect(logoElement.getAttribute('aria-label')).toBe('GOV.UK');
  });

  it('should not render service name when appName is not provided', () => {
    const serviceNameElement = fixture.nativeElement.querySelector('.govuk-header__service-name');
    expect(serviceNameElement).toBeFalsy();
  });

  it('should render service name when appName is provided', () => {
    const testAppName = 'Test Service';
    fixture.componentRef.setInput('appName', testAppName);
    fixture.detectChanges();

    const serviceNameElement = fixture.nativeElement.querySelector('.govuk-header__service-name');
    expect(serviceNameElement).toBeTruthy();
    expect(serviceNameElement.textContent.trim()).toBe(testAppName);
  });

  it('should set router link when appLink is provided', () => {
    const testAppName = 'Test Service';
    const testAppLink = '/test-link';
    fixture.componentRef.setInput('appName', testAppName);
    fixture.componentRef.setInput('appLink', testAppLink);
    fixture.detectChanges();

    const serviceNameElement = fixture.nativeElement.querySelector('.govuk-header__service-name');
    expect(serviceNameElement.getAttribute('href')).toBe('/test-link');
  });

  it('should not set router link when appLink is not provided', () => {
    const testAppName = 'Test Service';
    fixture.componentRef.setInput('appName', testAppName);
    fixture.detectChanges();

    const serviceNameElement = fixture.nativeElement.querySelector('.govuk-header__service-name');
    expect(serviceNameElement.getAttribute('href')).toBe('/');
  });
});
