import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule, Validators } from '@angular/forms';
import { GovUKPasswordInputComponent } from './password-input.component';

import { Component, viewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { GovUKBaseInputDirective } from '../../../form-utils/src';

@Component({
  template: `
    <form [formGroup]="form">
      <ngx-govuk-password-input
        formControlName="testInput"
        [inputId]="inputId"
        [label]="label"
        [isPageTitle]="isPageTitle"
        [autocomplete]="autocomplete"
        [extraClasses]="extraClasses"
        [hint]="hint"
      ></ngx-govuk-password-input>
    </form>
  `,
  standalone: true,
  imports: [
    GovUKPasswordInputComponent,
    GovUKBaseInputDirective,
    ReactiveFormsModule,
  ],
})
class TestHostComponent {
  inputId = '';
  label = '';
  isPageTitle = false;
  autocomplete = 'off';
  extraClasses = '';
  hint = '';
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

    hostComponent.inputId = 'test-password';
    hostComponent.label = 'Test Password';

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

  it('should have matching id on input and for attribute on label', () => {
    const inputElement = fixture.nativeElement.querySelector('.govuk-input');
    const labelElement = fixture.nativeElement.querySelector('.govuk-label');

    expect(inputElement.getAttribute('id')).toBe('test-password');
    expect(labelElement.getAttribute('for')).toBe('test-password');
  });

  it('should render as page heading when isPageTitle is true', () => {
    hostComponent.isPageTitle = true;
    fixture.detectChanges();

    const headingElement = fixture.nativeElement.querySelector(
      'h1.govuk-label-wrapper',
    );
    const labelElement = headingElement?.querySelector('.govuk-label--l');

    expect(headingElement).toBeTruthy();
    expect(labelElement).toBeTruthy();
    expect(labelElement?.textContent?.trim()).toBe('Test Password');
  });

  it('should render hint element in DOM when hint is set', () => {
    hostComponent.hint = 'Must be at least 8 characters';
    fixture.detectChanges();

    const hintElement = fixture.nativeElement.querySelector('.govuk-hint');
    expect(hintElement).toBeTruthy();
    expect(hintElement.textContent.trim()).toBe(
      'Must be at least 8 characters',
    );
  });

  it('should render autocomplete attribute in DOM when autocomplete is set', () => {
    hostComponent.autocomplete = 'new-password';
    fixture.detectChanges();

    const inputElement = fixture.nativeElement.querySelector('.govuk-input');
    expect(inputElement.getAttribute('autocomplete')).toBe('new-password');
  });

  it('should default autocomplete to "off"', () => {
    const inputElement = fixture.nativeElement.querySelector('.govuk-input');
    expect(inputElement.getAttribute('autocomplete')).toBe('off');
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
});
