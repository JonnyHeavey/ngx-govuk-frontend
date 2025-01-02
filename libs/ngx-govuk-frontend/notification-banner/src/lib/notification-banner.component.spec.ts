import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GovUKNotificationBannerComponent } from './notification-banner.component';

describe('GovUKNotificationBannerComponent', () => {
  let component: GovUKNotificationBannerComponent;
  let fixture: ComponentFixture<GovUKNotificationBannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GovUKNotificationBannerComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(GovUKNotificationBannerComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    fixture.componentRef.setInput('title', 'title');
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });

  it('should throw error when title is not provided', () => {
    expect(() => {
      fixture.detectChanges();
    }).toThrow();
  });

  it('should render notification banner with title', () => {
    const testTitle = 'Important notification';
    fixture.componentRef.setInput('title', testTitle);
    fixture.detectChanges();

    const titleElement = fixture.nativeElement.querySelector('.govuk-notification-banner__title');
    expect(titleElement).toBeTruthy();
    expect(titleElement.textContent.trim()).toBe(testTitle);
  });

  it('should render notification banner with default class', () => {
    fixture.componentRef.setInput('title', 'Test title');
    fixture.detectChanges();

    const bannerElement = fixture.nativeElement.querySelector('.govuk-notification-banner');
    expect(bannerElement).toBeTruthy();
    expect(bannerElement.classList.contains('govuk-notification-banner')).toBeTruthy();
  });

  it('should update title when input changes', () => {
    const initialTitle = 'Initial title';
    const updatedTitle = 'Updated title';
    
    fixture.componentRef.setInput('title', initialTitle);
    fixture.detectChanges();
    
    let titleElement = fixture.nativeElement.querySelector('.govuk-notification-banner__title');
    expect(titleElement.textContent.trim()).toBe(initialTitle);

    fixture.componentRef.setInput('title', updatedTitle);
    fixture.detectChanges();
    
    titleElement = fixture.nativeElement.querySelector('.govuk-notification-banner__title');
    expect(titleElement.textContent.trim()).toBe(updatedTitle);
  });

});
