import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import {
  ValueAccessorDirective,
  injectNgControl,
} from 'ngx-govuk-frontend/form-utils';

/**
 * This component implements the GOV.UK Design System checkbox component.
 * It allows users to select one or more options by ticking a box.
 *
 * @see https://design-system.service.gov.uk/components/checkboxes/
 */
@Component({
  selector: 'ngx-govuk-checkbox',
  imports: [ReactiveFormsModule],
  templateUrl: './checkbox.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  hostDirectives: [ValueAccessorDirective],
})
export class GovUKCheckboxComponent {
  /** The Angular form control associated with this checkbox. */
  readonly ngControl = injectNgControl();

  /** The unique ID for the checkbox input element. This input is required. */
  readonly inputId = input.required<string>();

  /** The text label displayed next to the checkbox. This input is required. */
  readonly label = input.required<string>();

  /**
   * Toggles the checkbox state between checked and unchecked.
   */
  toggle() {
    this.ngControl.control?.setValue(!this.ngControl.control?.value);
  }
}
