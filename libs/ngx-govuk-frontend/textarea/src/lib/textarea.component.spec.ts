import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule, Validators } from '@angular/forms';
import { GovUKTextareaComponent } from './textarea.component';

import { Component, viewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  template: `
    <form [formGroup]="form">
      <ngx-govuk-textarea
        formControlName="testInput"
        [inputId]="inputId"
        [autocomplete]="autocomplete"
        [extraClasses]="extraClasses"
        [rows]="rows"
      ></ngx-govuk-textarea>
    </form>
  `,
  standalone: true,
  imports: [GovUKTextareaComponent, ReactiveFormsModule],
})
class TestHostComponent {
  inputId = '';
  autocomplete = '';
  extraClasses = '';
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

  it('should render id attribute in DOM when inputId is set', () => {
    const hostComponent = fixture.componentInstance;
    hostComponent.inputId = 'test-textarea-id';
    fixture.detectChanges();

    const textareaElement = fixture.nativeElement.querySelector('.govuk-textarea');
    expect(textareaElement.getAttribute('id')).toBe('test-textarea-id');
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
