import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule, Validators } from '@angular/forms';
import { GovUKTextInputComponent } from './text-input.component';

import { Component, viewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  template: `
    <form [formGroup]="form">
      <ngx-govuk-text-input
        formControlName="testInput"
        [inputId]="inputId"
        [autocomplete]="autocomplete"
        [extraClasses]="extraClasses"
        [prefix]="prefix"
        [suffix]="suffix"
      ></ngx-govuk-text-input>
    </form>
  `,
  standalone: true,
  imports: [GovUKTextInputComponent, ReactiveFormsModule],
})
class TestHostComponent {
  inputId = '';
  autocomplete = 'off';
  extraClasses = '';
  prefix = '';
  suffix = '';
  form: FormGroup;
  component = viewChild.required(GovUKTextInputComponent);

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      testInput: ['', Validators.required],
    });
  }
}

describe('GovUKTextInputComponent', () => {
  let component: GovUKTextInputComponent;
  let fixture: ComponentFixture<TestHostComponent>;
  let hostComponent: TestHostComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({}).compileComponents();

    fixture = TestBed.createComponent(TestHostComponent);
    hostComponent = fixture.componentInstance;
    component = fixture.componentInstance.component();

    hostComponent.inputId = 'test-input';

    fixture.detectChanges();
  });

  it('should create', () => {
    TestBed.runInInjectionContext(() => {
      expect(component).toBeTruthy();
    });
  });

  it('should update form control value', () => {
    const testValue = 'test input';
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

    control?.setValue('testing');
    expect(control?.valid).toBeTruthy();
  });
  
  it('should render id attribute in DOM when inputId is set', () => {
    const hostComponent = fixture.componentInstance;
    hostComponent.inputId = 'test-input-id';
    fixture.detectChanges();

    const inputElement = fixture.nativeElement.querySelector('.govuk-input');
    expect(inputElement.getAttribute('id')).toBe('test-input-id');
  });

  it('should render autocomplete attribute in DOM when autocomplete is set', () => {
    const hostComponent = fixture.componentInstance;
    hostComponent.autocomplete = 'given-name';
    fixture.detectChanges();

    const inputElement = fixture.nativeElement.querySelector('.govuk-input');
    expect(inputElement.getAttribute('autocomplete')).toBe('given-name');
  });

  it('should render extraClasses in DOM when set', () => {
    const hostComponent = fixture.componentInstance;
    hostComponent.extraClasses = 'custom-class another-class';
    fixture.detectChanges();

    const inputElement = fixture.nativeElement.querySelector('.govuk-input');
    expect(inputElement.classList.contains('custom-class')).toBeTruthy();
    expect(inputElement.classList.contains('another-class')).toBeTruthy();
  });

  it('should have prefix input', () => {
    TestBed.runInInjectionContext(() => {
      hostComponent.prefix = '£';
      fixture.detectChanges();
      expect(component.prefix()).toBe('£');
    });
  });

  it('should render prefix element in DOM when prefix is set', () => {
    const hostComponent = fixture.componentInstance;
    hostComponent.prefix = '£';
    fixture.detectChanges();

    const prefixElement = fixture.nativeElement.querySelector(
      '.govuk-input__prefix',
    );
    expect(prefixElement).toBeTruthy();
    expect(prefixElement.textContent).toBe('£');
  });

  it('should have suffix input', () => {
    TestBed.runInInjectionContext(() => {
      const hostComponent = fixture.componentInstance;
      hostComponent.suffix = 'per day';
      fixture.detectChanges();
      expect(component.suffix()).toBe('per day');
    });
  });

  it('should render suffix element in DOM when suffix is set', () => {
    const hostComponent = fixture.componentInstance;
    hostComponent.suffix = 'per day';
    fixture.detectChanges();

    const suffixElement = fixture.nativeElement.querySelector(
      '.govuk-input__suffix',
    );
    expect(suffixElement).toBeTruthy();
    expect(suffixElement.textContent).toBe('per day');
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
