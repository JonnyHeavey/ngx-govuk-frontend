import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule, Validators } from '@angular/forms';
import { GovUKCheckboxComponent } from './checkbox.component';

import { Component, viewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  template: `
    <form [formGroup]="form">
      <ngx-govuk-checkbox
        formControlName="testCheckbox"
        [label]="label"
        [inputId]="inputId"
      ></ngx-govuk-checkbox>
    </form>
  `,
  imports: [GovUKCheckboxComponent, ReactiveFormsModule],
})
class TestHostComponent {
  label = 'Test Label';
  inputId = 'test-checkbox';
  form: FormGroup;
  component = viewChild.required(GovUKCheckboxComponent);

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      testCheckbox: [false, Validators.required],
    });
  }
}

describe('GovUKCheckboxComponent', () => {
  let component: GovUKCheckboxComponent;
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

  it('should have label input', () => {
    TestBed.runInInjectionContext(() => {
      const hostComponent = fixture.componentInstance;
      hostComponent.label = 'Custom Label';
      fixture.detectChanges();
      expect(component.label()).toBe('Custom Label');
    });
  });

  it('should render checkbox with label in DOM', () => {
    TestBed.runInInjectionContext(() => {
      const hostComponent = fixture.componentInstance;
      const labelText = 'Test Label';
      hostComponent.label = labelText;
      fixture.detectChanges();

      const labelElement = fixture.nativeElement.querySelector('.govuk-label');
      expect(labelElement).toBeTruthy();
      expect(labelElement.textContent.trim()).toBe(labelText);
    });
  });

  it('should have id input', () => {
    TestBed.runInInjectionContext(() => {
      const hostComponent = fixture.componentInstance;
      hostComponent.inputId = 'custom-id';
      fixture.detectChanges();
      expect(component.inputId()).toBe('custom-id');
    });
  });

  it('should render checkbox with id in DOM', () => {
    TestBed.runInInjectionContext(() => {
      const hostComponent = fixture.componentInstance;
      const testId = 'test-checkbox-id';
      hostComponent.inputId = testId;
      fixture.detectChanges();

      const checkboxElement = fixture.nativeElement.querySelector(`#${testId}`);
      expect(checkboxElement).toBeTruthy();
      expect(checkboxElement.id).toBe(testId);
    });
  });

  it('should update form control value', () => {
    const hostComponent = fixture.componentInstance;
    const control = hostComponent.form.get('testCheckbox');

    control?.setValue(true);
    fixture.detectChanges();
    expect(control?.value).toBe(true);

    control?.setValue(false);
    fixture.detectChanges();
    expect(control?.value).toBe(false);
  });

  it('should handle form validation', () => {
    const hostComponent = fixture.componentInstance;
    const control = hostComponent.form.get('testCheckbox');

    control?.setValue(null);
    expect(control?.valid).toBeFalsy();

    control?.setValue(true);
    expect(control?.valid).toBeTruthy();
  });
});
