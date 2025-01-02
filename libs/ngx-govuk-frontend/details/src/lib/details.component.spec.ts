import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GovUKDetailsComponent } from './details.component';

describe('GovUKDetailsComponent', () => {
  let component: GovUKDetailsComponent;
  let fixture: ComponentFixture<GovUKDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GovUKDetailsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(GovUKDetailsComponent);
    component = fixture.componentInstance;
  });

  beforeEach(() => {
    fixture.componentRef.setInput('summary', 'Default Summary');
    fixture.detectChanges();
  });

  it('should create', () => {
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });

  it('should render details with default class', () => {
    fixture.detectChanges();
    const detailsElement = fixture.nativeElement.querySelector('.govuk-details');
    expect(detailsElement).toBeTruthy();
  });

  it('should render details summary', () => {
    const summary = 'Test Summary';
    fixture.componentRef.setInput('summary', summary);
    fixture.detectChanges();

    const element = fixture.nativeElement.querySelector('.govuk-details__summary-text');
    expect(element.textContent).toBe(summary);
  });

  it('should render details content', () => {
    const content = 'Test Content';
    const element = fixture.nativeElement.querySelector('.govuk-details__text');
    element.textContent = content;
    fixture.detectChanges();

    expect(element.textContent).toBe(content);
  });

  it('should toggle open state when clicked', () => {
    fixture.detectChanges();
    const detailsElement = fixture.nativeElement.querySelector('.govuk-details');
    const summaryElement = fixture.nativeElement.querySelector('.govuk-details__summary');
    
    expect(detailsElement.hasAttribute('open')).toBeFalsy();
    
    summaryElement.click();
    fixture.detectChanges();
    expect(detailsElement.hasAttribute('open')).toBeTruthy();
    
    summaryElement.click();
    fixture.detectChanges();
    expect(detailsElement.hasAttribute('open')).toBeFalsy();
  });
});
