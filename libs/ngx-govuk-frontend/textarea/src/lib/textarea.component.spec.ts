import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule, Validators } from '@angular/forms';
import { GovUKTextareaComponent } from './textarea.component';

import { Component, viewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  template: `
    <form [formGroup]="form">
      <ngx-govuk-textarea formControlName="testTextarea"></ngx-govuk-textarea>
    </form>
  `,
  standalone: true,
  imports: [GovUKTextareaComponent, ReactiveFormsModule],
})
class TestHostComponent {
  form: FormGroup;
  component = viewChild.required(GovUKTextareaComponent);

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      testTextarea: ['', Validators.required],
    });
  }
}

describe('GovUKTextareaComponent', () => {
  let component: GovUKTextareaComponent;
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

  it('should update form control value', () => {
    const testValue = 'test textarea content';
    const hostComponent = fixture.componentInstance;

    hostComponent.form.get('testTextarea')?.setValue(testValue);
    fixture.detectChanges();

    expect(hostComponent.form.get('testTextarea')?.value).toBe(testValue);
  });

  it('should handle form validation', () => {
    const hostComponent = fixture.componentInstance;
    const control = hostComponent.form.get('testTextarea');

    control?.setValue('');
    expect(control?.valid).toBeFalsy();

    control?.setValue('testing content');
    expect(control?.valid).toBeTruthy();
  });
});
