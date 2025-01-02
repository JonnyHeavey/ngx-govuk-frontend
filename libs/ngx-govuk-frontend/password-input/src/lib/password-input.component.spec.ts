import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule, Validators } from '@angular/forms';
import { GovUKPasswordInputComponent } from './password-input.component';

import { Component, viewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  template: `
    <form [formGroup]="form">
      <ngx-govuk-password-input
        formControlName="testPassword"
      ></ngx-govuk-password-input>
    </form>
  `,
  standalone: true,
  imports: [GovUKPasswordInputComponent, ReactiveFormsModule],
})
class TestHostComponent {
  form: FormGroup;
  component = viewChild.required(GovUKPasswordInputComponent);

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      testPassword: ['', Validators.required],
    });
  }
}

describe('GovUKPasswordInputComponent', () => {
  let component: GovUKPasswordInputComponent;
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
    const testValue = 'myPassword123';
    const hostComponent = fixture.componentInstance;

    hostComponent.form.get('testPassword')?.setValue(testValue);
    fixture.detectChanges();

    expect(hostComponent.form.get('testPassword')?.value).toBe(testValue);
  });

  it('should handle form validation', () => {
    const hostComponent = fixture.componentInstance;
    const control = hostComponent.form.get('testPassword');

    control?.setValue('');
    expect(control?.valid).toBeFalsy();

    control?.setValue('validPassword');
    expect(control?.valid).toBeTruthy();
  });

  it('should show "Show" text when password is hidden', () => {
    const button = fixture.nativeElement.querySelector(
      '.govuk-password-input__toggle',
    );
    expect(button.textContent.trim()).toBe('Show');
  });

  it('should show "Hide" text when password is visible', () => {
    const button = fixture.nativeElement.querySelector(
      '.govuk-password-input__toggle',
    );

    button.click();
    fixture.detectChanges();

    expect(button.textContent.trim()).toBe('Hide');
  });

  it('should toggle button text between Show/Hide on clicks', () => {
    const button = fixture.nativeElement.querySelector(
      '.govuk-password-input__toggle',
    );

    button.click();
    fixture.detectChanges();
    expect(button.textContent.trim()).toBe('Hide');

    button.click();
    fixture.detectChanges();
    expect(button.textContent.trim()).toBe('Show');
  });

  it('should have type="password" by default', () => {
    const input = fixture.nativeElement.querySelector(
      '.govuk-password-input__input',
    );
    expect(input.type).toBe('password');
  });

  it('should toggle input type between password/text on button clicks', () => {
    const button = fixture.nativeElement.querySelector(
      '.govuk-password-input__toggle',
    );
    const input = fixture.nativeElement.querySelector(
      '.govuk-password-input__input',
    );

    button.click();
    fixture.detectChanges();
    expect(input.type).toBe('text');

    button.click();
    fixture.detectChanges();
    expect(input.type).toBe('password');
  });
});
