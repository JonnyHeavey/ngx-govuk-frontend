import { Component, viewChild } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { GovUKFormGroupComponent } from './form-group.component';

@Component({
  template: `
    <form [formGroup]="form">
      <ngx-govuk-form-group
        [inputId]="inputId"
        [label]="label"
        [isPageTitle]="isPageTitle"
        [hint]="hint"
      >
        <input formControlName="testInput" type="text" />
      </ngx-govuk-form-group>
    </form>
  `,
  standalone: true,
  imports: [GovUKFormGroupComponent, ReactiveFormsModule],
})
class TestHostComponent {
  inputId = '';
  label = '';
  isPageTitle = false;
  hint = '';
  form: FormGroup;
  component = viewChild.required(GovUKFormGroupComponent);

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      testInput: ['', Validators.required],
    });
  }
}

describe('GovUKFormGroupComponent', () => {
  let component: GovUKFormGroupComponent;
  let fixture: ComponentFixture<TestHostComponent>;
  let hostComponent: TestHostComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({}).compileComponents();

    fixture = TestBed.createComponent(TestHostComponent);
    hostComponent = fixture.componentInstance;
    component = fixture.componentInstance.component();

    hostComponent.inputId = 'test-group';
    hostComponent.label = 'Test Group';

    fixture.detectChanges();
  });

  it('should create', () => {
    TestBed.runInInjectionContext(() => {
      expect(component).toBeTruthy();
    });
  });

  it('should set the label "for" attribute to match inputId', () => {
    const labelElement = fixture.nativeElement.querySelector('.govuk-label');
    expect(labelElement.getAttribute('for')).toBe('test-group');
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
    expect(labelElement?.textContent?.trim()).toBe('Test Group');
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
    expect(labelElement?.textContent?.trim()).toBe('Test Group');
  });

  it('should render hint element in DOM when hint is set', () => {
    hostComponent.hint = 'This is a helpful hint';
    fixture.detectChanges();

    const hintElement = fixture.nativeElement.querySelector('.govuk-hint');
    expect(hintElement).toBeTruthy();
    expect(hintElement.textContent.trim()).toBe('This is a helpful hint');
  });
});
