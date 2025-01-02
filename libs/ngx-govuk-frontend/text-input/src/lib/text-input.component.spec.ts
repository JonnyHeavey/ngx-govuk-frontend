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
        [prefix]="prefix"
        [suffix]="suffix"
      ></ngx-govuk-text-input>
    </form>
  `,
  standalone: true,
  imports: [GovUKTextInputComponent, ReactiveFormsModule],
})
class TestHostComponent {
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

  it('should handle empty prefix and suffix', () => {
    TestBed.runInInjectionContext(() => {
      expect(component.prefix()).toBe('');
      expect(component.suffix()).toBe('');
    });
  });

  it('should have prefix input', () => {
    TestBed.runInInjectionContext(() => {
      const hostComponent = fixture.componentInstance;
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
});
