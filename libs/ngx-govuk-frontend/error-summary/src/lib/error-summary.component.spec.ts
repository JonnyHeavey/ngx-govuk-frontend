import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { GovUKErrorSummaryItemDirective } from './error-summary-item.directive';
import { GovUKErrorSummaryComponent } from './error-summary.component';

@Component({
  template: `
    <ngx-govuk-error-summary [title]="title">
      <ngx-govuk-error-summary-item
        [text]="'Error 1'"
        [targetId]="'error-1'"
      ></ngx-govuk-error-summary-item>
      <ngx-govuk-error-summary-item
        [text]="'Error 2'"
        [targetId]="'error-2'"
      ></ngx-govuk-error-summary-item>
    </ngx-govuk-error-summary>
  `,
  imports: [GovUKErrorSummaryComponent, GovUKErrorSummaryItemDirective],
})
class TestHostComponent {
  title = 'There is a problem';
}

describe('GovUKErrorSummaryComponent', () => {
  let component: TestHostComponent;
  let fixture: ComponentFixture<TestHostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [],
      imports: [
        TestHostComponent,
        GovUKErrorSummaryComponent,
        GovUKErrorSummaryItemDirective,
      ],
      providers: [provideRouter([])],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestHostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render with the default title text', () => {
    const title = fixture.debugElement.query(
      By.css('.govuk-error-summary__title'),
    );
    expect(title.nativeElement.textContent.trim()).toBe('There is a problem');
  });

  it('should render with custom title text when provided', () => {
    component.title = 'Custom error title';
    fixture.detectChanges();
    const title = fixture.debugElement.query(
      By.css('.govuk-error-summary__title'),
    );
    expect(title.nativeElement.textContent.trim()).toBe('Custom error title');
  });

  it('should render error items with links', () => {
    const errorItems = fixture.debugElement.queryAll(
      By.css('.govuk-error-summary__list a'),
    );
    expect(errorItems.length).toBe(2);
    expect(errorItems[0].nativeElement.getAttribute('href')).toBe('/#error-1');
    expect(errorItems[0].nativeElement.textContent.trim()).toBe('Error 1');
    expect(errorItems[1].nativeElement.getAttribute('href')).toBe('/#error-2');
    expect(errorItems[1].nativeElement.textContent.trim()).toBe('Error 2');
  });
});
