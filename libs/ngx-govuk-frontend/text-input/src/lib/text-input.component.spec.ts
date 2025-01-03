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
        [label]="label"
        [isPageTitle]="isPageTitle"
        [autocomplete]="autocomplete"
        [extraClasses]="extraClasses"
        [hint]="hint"
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
  label = '';
  isPageTitle = false;
  autocomplete = 'off';
  extraClasses = '';
  hint = '';
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
    hostComponent.label = 'Test Input';

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

  it('should have required inputs', () => {
    TestBed.runInInjectionContext(() => {
      expect(component.inputId()).toBe('test-input');
      expect(component.label()).toBe('Test Input');
    });
  });

  it('should have isPageTitle input', () => {
    TestBed.runInInjectionContext(() => {
      hostComponent.isPageTitle = true;
      fixture.detectChanges();
      expect(component.isPageTitle()).toBe(true);
    });
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
    expect(labelElement?.textContent?.trim()).toBe('Test Input');
  });

  it('should render as regular label when isPageTitle is false', () => {
    hostComponent.isPageTitle = false;
    fixture.detectChanges();

    const headingElement = fixture.nativeElement.querySelector(
      'h1.govuk-label-wrapper',
    );
    const labelElement = fixture.nativeElement.querySelector(
      '.govuk-label:not(.govuk-label--l)',
    );

    expect(headingElement).toBeFalsy();
    expect(labelElement).toBeTruthy();
    expect(labelElement?.textContent?.trim()).toBe('Test Input');
  });

  it('should have hint input', () => {
    TestBed.runInInjectionContext(() => {
      const hostComponent = fixture.componentInstance;
      hostComponent.hint = 'This is a helpful hint';
      fixture.detectChanges();
      expect(component.hint()).toBe('This is a helpful hint');
    });
  });

  it('should render hint element in DOM when hint is set', () => {
    const hostComponent = fixture.componentInstance;
    hostComponent.hint = 'This is a helpful hint';
    fixture.detectChanges();

    const hintElement = fixture.nativeElement.querySelector('.govuk-hint');
    expect(hintElement).toBeTruthy();
    expect(hintElement.textContent.trim()).toBe('This is a helpful hint');
  });

  it('should have autocomplete input', () => {
    TestBed.runInInjectionContext(() => {
      const hostComponent = fixture.componentInstance;
      hostComponent.autocomplete = 'given-name';
      fixture.detectChanges();
      expect(component.autocomplete()).toBe('given-name');
    });
  });

  it('should render autocomplete attribute in DOM when autocomplete is set', () => {
    const hostComponent = fixture.componentInstance;
    hostComponent.autocomplete = 'given-name';
    fixture.detectChanges();

    const inputElement = fixture.nativeElement.querySelector('.govuk-input');
    expect(inputElement.getAttribute('autocomplete')).toBe('given-name');
  });

  it('should default autocomplete to "off"', () => {
    const inputElement = fixture.nativeElement.querySelector('.govuk-input');
    expect(inputElement.getAttribute('autocomplete')).toBe('off');
  });

  it('should have extraClasses input', () => {
    TestBed.runInInjectionContext(() => {
      const hostComponent = fixture.componentInstance;
      hostComponent.extraClasses = 'custom-class another-class';
      fixture.detectChanges();
      expect(component.extraClasses()).toBe('custom-class another-class');
    });
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
});
