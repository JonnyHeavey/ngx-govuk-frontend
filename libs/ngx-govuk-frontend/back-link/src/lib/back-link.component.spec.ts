import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { GovUKBackLinkComponent } from './back-link.component';

describe('BackLinkComponent', () => {
  let component: GovUKBackLinkComponent;
  let fixture: ComponentFixture<GovUKBackLinkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GovUKBackLinkComponent, RouterTestingModule],
    }).compileComponents();

    fixture = TestBed.createComponent(GovUKBackLinkComponent);
    component = fixture.componentInstance;

    fixture.componentRef.setInput('link', '/back');
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render back link with default class', () => {
    const linkElement = fixture.nativeElement.querySelector('a');
    expect(linkElement).toBeTruthy();
    expect(linkElement.classList.contains('govuk-back-link')).toBeTruthy();
  });

  it('should render with default "Back" text', () => {
    const linkElement = fixture.nativeElement.querySelector('a');
    expect(linkElement.textContent.trim()).toBe('Back');
  });
});
