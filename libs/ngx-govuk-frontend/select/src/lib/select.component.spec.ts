import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule, Validators } from '@angular/forms';
import { GovUKSelectComponent } from './select.component';

import { Component, viewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  template: `
    <form [formGroup]="form">
      <ngx-govuk-select
        formControlName="testSelect"
        [options]="options"
      ></ngx-govuk-select>
    </form>
  `,
  standalone: true,
  imports: [GovUKSelectComponent, ReactiveFormsModule],
})
class TestHostComponent {
  options = [
    { value: 'option1', label: 'Option 1' },
    { value: 'option2', label: 'Option 2' },
  ];
  form: FormGroup;
  component = viewChild.required(GovUKSelectComponent);

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      testSelect: [null, Validators.required],
    });
  }
}

describe('GovUKSelectComponent', () => {
  let component: GovUKSelectComponent;
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

  it('should render options with correct labels and values', () => {
    TestBed.runInInjectionContext(() => {
      const options = fixture.nativeElement.querySelectorAll(
        '.govuk-select > option',
      );
      expect(options.length).toBe(2);
      expect(options[0].textContent.trim()).toBe('Option 1');
      expect(options[0].value).toBe('option1');
      expect(options[1].textContent.trim()).toBe('Option 2');
      expect(options[1].value).toBe('option2');
    });
  });
});
