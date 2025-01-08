import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule, Validators } from '@angular/forms';
import { GovUKFileUploadComponent } from './file-upload.component';

import { Component, viewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  template: `
    <form [formGroup]="form">
      <ngx-govuk-file-upload
        formControlName="testInput"
        [inputId]="inputId"
        [extraClasses]="extraClasses"
      />
    </form>
  `,
  standalone: true,
  imports: [GovUKFileUploadComponent, ReactiveFormsModule],
})
class TestHostComponent {
  inputId = '';
  extraClasses = '';
  form: FormGroup;
  component = viewChild.required(GovUKFileUploadComponent);

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      testInput: [null, Validators.required],
    });
  }
}

describe('GovUKFileUploadComponent', () => {
  let component: GovUKFileUploadComponent;
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

    const inputElement =
      fixture.nativeElement.querySelector('.govuk-file-upload');
    expect(inputElement.getAttribute('id')).toBe('test-input-id');
  });

  it('should render extraClasses in DOM when set', () => {
    const hostComponent = fixture.componentInstance;
    hostComponent.extraClasses = 'custom-class another-class';
    fixture.detectChanges();

    const inputElement =
      fixture.nativeElement.querySelector('.govuk-file-upload');
    expect(inputElement.classList.contains('custom-class')).toBeTruthy();
    expect(inputElement.classList.contains('another-class')).toBeTruthy();
  });
});
