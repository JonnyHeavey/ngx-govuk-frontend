import { Component, ViewChild } from '@angular/core';
import {
  ComponentFixture,
  TestBed,
  fakeAsync,
  tick,
} from '@angular/core/testing';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { GovUKDateInputComponent } from './date-input.component';

describe('GovUKDateInputComponent', () => {
  describe('Component in a form', () => {
    let hostComponent: TestHostComponent;
    let fixture: ComponentFixture<TestHostComponent>;

    beforeEach(async () => {
      await TestBed.configureTestingModule({
        imports: [
          ReactiveFormsModule,
          FormsModule,
          GovUKDateInputComponent,
          TestHostComponent,
        ],
      }).compileComponents();

      fixture = TestBed.createComponent(TestHostComponent);
      hostComponent = fixture.componentInstance;
      fixture.detectChanges();
    });

    it('should create', () => {
      expect(hostComponent).toBeTruthy();
    });

    it('should set inputId on date inputs when provided', () => {
      hostComponent.inputId = 'test-date';
      fixture.detectChanges();

      const dayInput = fixture.nativeElement.querySelector('#test-date-day');
      const monthInput =
        fixture.nativeElement.querySelector('#test-date-month');
      const yearInput = fixture.nativeElement.querySelector('#test-date-year');

      expect(dayInput).toBeTruthy();
      expect(monthInput).toBeTruthy();
      expect(yearInput).toBeTruthy();
    });

    it('should update parent form control when date input values change', fakeAsync(() => {
      // Set input values
      const dayInput = fixture.nativeElement.querySelector(
        'input.govuk-date-input__input[id$="-day"]',
      );
      const monthInput = fixture.nativeElement.querySelector(
        'input.govuk-date-input__input[id$="-month"]',
      );
      const yearInput = fixture.nativeElement.querySelector(
        'input.govuk-date-input__input[id$="-year"]',
      );

      dayInput.value = '15';
      dayInput.dispatchEvent(new Event('input'));

      monthInput.value = '6';
      monthInput.dispatchEvent(new Event('input'));

      yearInput.value = '2023';
      yearInput.dispatchEvent(new Event('input'));

      tick(100); // Give time for async operations
      fixture.detectChanges();

      // Parent form control should have the ISO date format
      expect(hostComponent.form.get('date')?.value).toBe('2023-06-15');
    }));

    it('should handle partial date entry', fakeAsync(() => {
      // Set only day and month
      const dayInput = fixture.nativeElement.querySelector(
        'input.govuk-date-input__input[id$="-day"]',
      );
      const monthInput = fixture.nativeElement.querySelector(
        'input.govuk-date-input__input[id$="-month"]',
      );

      dayInput.value = '15';
      dayInput.dispatchEvent(new Event('input'));

      monthInput.value = '6';
      monthInput.dispatchEvent(new Event('input'));

      tick(100); // Give time for async operations
      fixture.detectChanges();

      // Parent form control should have an object with parts
      const value = hostComponent.form.get('date')?.value;
      expect(value).toEqual(
        expect.objectContaining({ day: '15', month: '06', year: '' }),
      );
    }));
  });
});

@Component({
  imports: [ReactiveFormsModule, GovUKDateInputComponent],
  template: `
    <div class="govuk-form-group">
      <form [formGroup]="form">
        <ngx-govuk-date-input
          #dateInput
          formControlName="date"
          [inputId]="inputId"
        ></ngx-govuk-date-input>
      </form>
    </div>
  `,
})
class TestHostComponent {
  @ViewChild('dateInput') dateInputComponent!: GovUKDateInputComponent;

  form = new FormGroup({ date: new FormControl<string>('') });

  inputId = 'test-date';
}
