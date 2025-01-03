import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule, Validators } from '@angular/forms';
import { GovUKTextareaComponent } from './textarea.component';

import { Component, viewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { GovUKBaseInputDirective } from '../../../form-utils/src';

@Component({
  template: `
    <form [formGroup]="form">
      <ngx-govuk-textarea
        formControlName="testInput"
        [inputId]="inputId"
        [label]="label"
        [isPageTitle]="isPageTitle"
        [autocomplete]="autocomplete"
        [extraClasses]="extraClasses"
        [hint]="hint"
        [rows]="rows"
      ></ngx-govuk-textarea>
    </form>
  `,
  standalone: true,
  imports: [
    GovUKTextareaComponent,
    GovUKBaseInputDirective,
    ReactiveFormsModule,
  ],
})
class TestHostComponent {
  inputId = '';
  label = '';
  isPageTitle = false;
  autocomplete = '';
  extraClasses = '';
  hint = '';
  rows = 2;
  form: FormGroup;
  component = viewChild.required(GovUKTextareaComponent);

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      testInput: ['', Validators.required],
    });
  }
}

describe('GovUKTextareaComponent', () => {
  let component: GovUKTextareaComponent;
  let fixture: ComponentFixture<TestHostComponent>;
  let hostComponent: TestHostComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({}).compileComponents();

    fixture = TestBed.createComponent(TestHostComponent);
    hostComponent = fixture.componentInstance;
    component = fixture.componentInstance.component();

    hostComponent.inputId = 'test-textarea';
    hostComponent.label = 'Test Textarea';

    fixture.detectChanges();
  });

  it('should create', () => {
    TestBed.runInInjectionContext(() => {
      expect(component).toBeTruthy();
    });
  });

  it('should update form control value', () => {
    const testValue = 'test textarea content';
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

  it('should have matching id on textarea and for attribute on label', () => {
    const textareaElement =
      fixture.nativeElement.querySelector('.govuk-textarea');
    const labelElement = fixture.nativeElement.querySelector('.govuk-label');

    expect(textareaElement.getAttribute('id')).toBe('test-textarea');
    expect(labelElement.getAttribute('for')).toBe('test-textarea');
  });

  it('should maintain matching id and for attributes when inputId changes', () => {
    hostComponent.inputId = 'new-test-id';
    fixture.detectChanges();

    const textareaElement =
      fixture.nativeElement.querySelector('.govuk-textarea');
    const labelElement = fixture.nativeElement.querySelector('.govuk-label');

    expect(textareaElement.getAttribute('id')).toBe('new-test-id');
    expect(labelElement.getAttribute('for')).toBe('new-test-id');
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
    expect(labelElement?.textContent?.trim()).toBe('Test Textarea');
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
    expect(labelElement?.textContent?.trim()).toBe('Test Textarea');
  });

  it('should render hint element in DOM when hint is set', () => {
    const hostComponent = fixture.componentInstance;
    hostComponent.hint = 'This is a helpful hint';
    fixture.detectChanges();

    const hintElement = fixture.nativeElement.querySelector('.govuk-hint');
    expect(hintElement).toBeTruthy();
    expect(hintElement.textContent.trim()).toBe('This is a helpful hint');
  });

  it('should render autocomplete attribute in DOM when autocomplete is set', () => {
    const hostComponent = fixture.componentInstance;
    hostComponent.autocomplete = 'given-name';
    fixture.detectChanges();

    const textareaElement =
      fixture.nativeElement.querySelector('.govuk-textarea');
    expect(textareaElement.getAttribute('autocomplete')).toBe('given-name');
  });

  it('should render extraClasses in DOM when set', () => {
    const hostComponent = fixture.componentInstance;
    hostComponent.extraClasses = 'custom-class another-class';
    fixture.detectChanges();

    const textareaElement =
      fixture.nativeElement.querySelector('.govuk-textarea');
    expect(textareaElement.classList.contains('custom-class')).toBeTruthy();
    expect(textareaElement.classList.contains('another-class')).toBeTruthy();
  });

  it('should set default rows to 2', () => {
    const textareaElement =
      fixture.nativeElement.querySelector('.govuk-textarea');
    expect(textareaElement.getAttribute('rows')).toBe('2');
  });

  it('should update rows when input changes', () => {
    hostComponent.rows = 5;
    fixture.detectChanges();

    const textareaElement =
      fixture.nativeElement.querySelector('.govuk-textarea');
    expect(textareaElement.getAttribute('rows')).toBe('5');
  });
});
