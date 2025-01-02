import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GovUKTagComponent } from './tag.component';

describe('GovUKTagComponent', () => {
  let component: GovUKTagComponent;
  let fixture: ComponentFixture<GovUKTagComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GovUKTagComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(GovUKTagComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });

  it('should render tag with default class', () => {
    fixture.detectChanges();
    const tagElement = fixture.nativeElement.querySelector('.govuk-tag');
    expect(tagElement).toBeTruthy();
  });

  it('should render tag with extra classes when provided', () => {
    const extraClasses = 'extra-class-1 extra-class-2';
    fixture.componentRef.setInput('extraClasses', extraClasses);
    fixture.detectChanges();

    const tagElement = fixture.nativeElement.querySelector('.govuk-tag');
    expect(tagElement.classList.contains('extra-class-1')).toBeTruthy();
    expect(tagElement.classList.contains('extra-class-2')).toBeTruthy();
  });

  it('should render tag content', () => {
    const content = 'Test Content';
    const element = fixture.nativeElement.querySelector('.govuk-tag');
    element.textContent = content;
    fixture.detectChanges();

    expect(element.textContent).toBe(content);
  });

  it('should update extra classes when input changes', () => {
    const initialClasses = 'initial-class';
    const updatedClasses = 'updated-class';
    
    fixture.componentRef.setInput('extraClasses', initialClasses);
    fixture.detectChanges();
    
    const tagElement = fixture.nativeElement.querySelector('.govuk-tag');
    expect(tagElement.classList.contains('initial-class')).toBeTruthy();

    fixture.componentRef.setInput('extraClasses', updatedClasses);
    fixture.detectChanges();
    
    expect(tagElement.classList.contains('updated-class')).toBeTruthy();
    expect(tagElement.classList.contains('initial-class')).toBeFalsy();
  });
});
