import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule, Validators } from '@angular/forms';
import {
  GovUKRadioGroupComponent,
  GovUKRadioOption,
} from './radio-group.component';

import { Component, viewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  template: `
    <form [formGroup]="form">
      <ngx-govuk-radio-group
        formControlName="testRadio"
        [options]="options"
        [inline]="inline"
        [small]="small"
      ></ngx-govuk-radio-group>
    </form>
  `,
  standalone: true,
  imports: [GovUKRadioGroupComponent, ReactiveFormsModule],
})
class TestHostComponent {
  options: GovUKRadioOption[] = [
    { value: 'option1', label: 'Option 1' },
    { value: 'option2', label: 'Option 2' },
  ];
  inline = false;
  small = false;
  form: FormGroup;
  component = viewChild.required(GovUKRadioGroupComponent);

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      testRadio: [null, Validators.required],
    });
  }
}

describe('GovUKRadioGroupComponent', () => {
  let component: GovUKRadioGroupComponent;
  let fixture: ComponentFixture<TestHostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({}).compileComponents();

    fixture = TestBed.createComponent(TestHostComponent);
    component = fixture.componentInstance.component();
    fixture.detectChanges();
  });

  it('should create', () => {
    TestBed.runInInjectionContext(() => {
      expect(component).toBeTruthy();
    });
  });

  it('should render radio options with correct labels', () => {
    TestBed.runInInjectionContext(() => {
      const labels = fixture.nativeElement.querySelectorAll(
        '.govuk-radios__label',
      );
      expect(labels.length).toBe(2);
      expect(labels[0].textContent.trim()).toBe('Option 1');
      expect(labels[1].textContent.trim()).toBe('Option 2');
    });
  });

  it('should update form control value', () => {
    const hostComponent = fixture.componentInstance;
    const control = hostComponent.form.get('testRadio');

    control?.setValue('option1');
    fixture.detectChanges();
    expect(control?.value).toBe('option1');

    control?.setValue('option2');
    fixture.detectChanges();
    expect(control?.value).toBe('option2');
  });

  it('should handle form validation', () => {
    const hostComponent = fixture.componentInstance;
    const control = hostComponent.form.get('testRadio');

    control?.setValue(null);
    expect(control?.valid).toBeFalsy();

    control?.setValue('option1');
    expect(control?.valid).toBeTruthy();
  });

  it('should apply inline class when inline input is set', () => {
    TestBed.runInInjectionContext(() => {
      fixture.componentInstance.inline = true;
      fixture.detectChanges();
      const radioGroup = fixture.nativeElement.querySelector('.govuk-radios');
      expect(
        radioGroup.classList.contains('govuk-radios--inline'),
      ).toBeTruthy();
    });
  });

  it('should not apply inline class when inline input is false', () => {
    TestBed.runInInjectionContext(() => {
      fixture.componentInstance.inline = false;
      fixture.detectChanges();
      const radioGroup = fixture.nativeElement.querySelector('.govuk-radios');
      expect(radioGroup.classList.contains('govuk-radios--inline')).toBeFalsy();
    });
  });

  it('should apply small class when small input is set', () => {
    TestBed.runInInjectionContext(() => {
      fixture.componentInstance.small = true;
      fixture.detectChanges();
      const radioGroup = fixture.nativeElement.querySelector('.govuk-radios');
      expect(radioGroup.classList.contains('govuk-radios--small')).toBeTruthy();
    });
  });

  it('should not apply small class when small input is false', () => {
    TestBed.runInInjectionContext(() => {
      fixture.componentInstance.small = false;
      fixture.detectChanges();
      const radioGroup = fixture.nativeElement.querySelector('.govuk-radios');
      expect(radioGroup.classList.contains('govuk-radios--small')).toBeFalsy();
    });
  });

  it('should render hint text when present on an option', () => {
    TestBed.runInInjectionContext(() => {
      const hostComponent = fixture.componentInstance;
      hostComponent.options = [
        { value: 'option1', label: 'Option 1', hint: 'This is a hint' },
        { value: 'option2', label: 'Option 2' },
      ];
      fixture.detectChanges();

      const hint = fixture.nativeElement.querySelector('.govuk-radios__hint');
      expect(hint).toBeTruthy();
      expect(hint.textContent.trim()).toBe('This is a hint');
    });
  });
});
