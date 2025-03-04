import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { GovUKSkipLinkComponent } from './skip-link.component';

describe('GovUKSkipLinkComponent', () => {
  let component: GovUKSkipLinkComponent;
  let fixture: ComponentFixture<GovUKSkipLinkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GovUKSkipLinkComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(GovUKSkipLinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have the correct class', () => {
    const skipLinkElement = fixture.debugElement.query(By.css('a'));
    expect(skipLinkElement.nativeElement.classList).toContain(
      'govuk-skip-link',
    );
  });

  it('should have the default href value', () => {
    const skipLinkElement = fixture.debugElement.query(By.css('a'));
    expect(skipLinkElement.nativeElement.getAttribute('href')).toBe('#content');
  });

  it('should have the default content', () => {
    const skipLinkElement = fixture.debugElement.query(By.css('a'));
    expect(skipLinkElement.nativeElement.textContent.trim()).toBe(
      'Skip to main content',
    );
  });
});
