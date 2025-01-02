import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GovUKButtonComponent } from './button.component';

describe('ButtonComponent', () => {
  let component: GovUKButtonComponent;
  let fixture: ComponentFixture<GovUKButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GovUKButtonComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(GovUKButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render button with default class', () => {
    const buttonElement = fixture.nativeElement.querySelector('button');
    expect(buttonElement).toBeTruthy();
    expect(buttonElement.classList.contains('govuk-button')).toBeTruthy();
  });

  it('should add secondary class when color is secondary', () => {
    fixture.componentRef.setInput('color', 'secondary');
    fixture.detectChanges();
    const buttonElement = fixture.nativeElement.querySelector('button');
    expect(buttonElement.classList.contains('govuk-button--secondary')).toBeTruthy();
  });

  it('should add warning class when color is warning', () => {
    fixture.componentRef.setInput('color', 'warning');
    fixture.detectChanges();
    const buttonElement = fixture.nativeElement.querySelector('button');
    expect(buttonElement.classList.contains('govuk-button--warning')).toBeTruthy();
  });

  it('should add inverse class when color is inverse', () => {
    fixture.componentRef.setInput('color', 'inverse');
    fixture.detectChanges();
    const buttonElement = fixture.nativeElement.querySelector('button');
    expect(buttonElement.classList.contains('govuk-button--inverse')).toBeTruthy();
  });

  it('should set disabled attribute when disabled is true', () => {
    fixture.componentRef.setInput('disabled', true);
    fixture.detectChanges();
    const buttonElement = fixture.nativeElement.querySelector('button');
    expect(buttonElement.disabled).toBeTruthy();
  });

  it('should show start icon when start is true', () => {
    fixture.componentRef.setInput('start', true);
    fixture.detectChanges();
    const iconElement = fixture.nativeElement.querySelector('.govuk-button__start-icon');
    expect(iconElement).toBeTruthy();
  });

  it('should not show start icon when start is false', () => {
    fixture.componentRef.setInput('start', false);
    fixture.detectChanges();
    const iconElement = fixture.nativeElement.querySelector('.govuk-button__start-icon');
    expect(iconElement).toBeFalsy();
  });
});

