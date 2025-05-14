import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule, Validators } from '@angular/forms';
import { GovUKPasswordInputComponent } from './password-input.component';

import { Component, viewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  template: `
    <form [formGroup]="form">
      <ngx-govuk-password-input
        formControlName="testInput"
        [inputId]="inputId"
        [autocomplete]="autocomplete"
        [extraClasses]="extraClasses"
      ></ngx-govuk-password-input>
    </form>
  `,
  imports: [GovUKPasswordInputComponent, ReactiveFormsModule],
})
class TestHostComponent {
  inputId = '';
  autocomplete = 'off';
  extraClasses = '';
  form: FormGroup;
  component = viewChild.required(GovUKPasswordInputComponent);

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      testInput: ['', Validators.required],
    });
  }
}

describe('GovUKPasswordInputComponent', () => {
  let component: GovUKPasswordInputComponent;
  let fixture: ComponentFixture<TestHostComponent>;
  let hostComponent: TestHostComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({}).compileComponents();

    fixture = TestBed.createComponent(TestHostComponent);
    hostComponent = fixture.componentInstance;
    component = fixture.componentInstance.component();

    fixture.detectChanges();
  });

  it('should create', () => {
    TestBed.runInInjectionContext(() => {
      expect(component).toBeTruthy();
    });
  });

  it('should update form control value', () => {
    const testValue = 'test password';
    const hostComponent = fixture.componentInstance;

    hostComponent.form.get('testInput')?.setValue(testValue);
    fixture.detectChanges();

    expect(hostComponent.form.get('testInput')?.value).toBe(testValue);
  });

  it('should handle form validation', () => {
    const hostComponent = fixture.componentInstance;
    const control = hostComponent.form.get('testInput');

    control?.setValue('');
    expect(control?.valid).toBeFalsy();

    control?.setValue('password123');
    expect(control?.valid).toBeTruthy();
  });

  it('should render id attribute in DOM when inputId is set', () => {
    const hostComponent = fixture.componentInstance;
    hostComponent.inputId = 'test-password-id';
    fixture.detectChanges();

    const inputElement = fixture.nativeElement.querySelector('.govuk-input');
    expect(inputElement.getAttribute('id')).toBe('test-password-id');
  });

  it('should render autocomplete attribute in DOM when autocomplete is set', () => {
    hostComponent.autocomplete = 'new-password';
    fixture.detectChanges();

    const inputElement = fixture.nativeElement.querySelector('.govuk-input');
    expect(inputElement.getAttribute('autocomplete')).toBe('new-password');
  });

  it('should render extraClasses in DOM when set', () => {
    hostComponent.extraClasses = 'custom-class another-class';
    fixture.detectChanges();

    const inputElement = fixture.nativeElement.querySelector('.govuk-input');
    expect(inputElement.classList.contains('custom-class')).toBeTruthy();
    expect(inputElement.classList.contains('another-class')).toBeTruthy();
  });

  it('should toggle password visibility when show/hide button is clicked', () => {
    const button = fixture.nativeElement.querySelector(
      '.govuk-password-input__toggle',
    );
    const input = fixture.nativeElement.querySelector('.govuk-input');

    expect(input.getAttribute('type')).toBe('password');
    expect(button.textContent.trim()).toBe('Show');

    button.click();
    fixture.detectChanges();

    expect(input.getAttribute('type')).toBe('text');
    expect(button.textContent.trim()).toBe('Hide');

    button.click();
    fixture.detectChanges();

    expect(input.getAttribute('type')).toBe('password');
    expect(button.textContent.trim()).toBe('Show');
  });

  it('should add error class when form control has validation error', () => {
    const control = hostComponent.form.get('testInput');
    control?.setValue('');
    control?.markAsTouched();
    fixture.detectChanges();

    const inputElement = fixture.nativeElement.querySelector('.govuk-input');
    expect(inputElement.classList.contains('govuk-input--error')).toBeTruthy();
  });

  it('should not have error class when form control has no validation errors', () => {
    const control = hostComponent.form.get('testInput');
    control?.setValue('valid value');
    control?.markAsTouched();
    fixture.detectChanges();

    const inputElement = fixture.nativeElement.querySelector('.govuk-input');
    expect(inputElement.classList.contains('govuk-input--error')).toBeFalsy();
  });

  it('should not have error class when form control has not been touched', () => {
    const control = hostComponent.form.get('testInput');
    control?.setValue('');
    fixture.detectChanges();

    const inputElement = fixture.nativeElement.querySelector('.govuk-input');
    expect(inputElement.classList.contains('govuk-input--error')).toBeFalsy();
  });
});
