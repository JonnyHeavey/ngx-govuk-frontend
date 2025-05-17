import {
  booleanAttribute,
  ChangeDetectionStrategy,
  Component,
  contentChildren,
  input,
} from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import {
  injectNgControl,
  ValueAccessorDirective,
} from 'ngx-govuk-frontend/form-utils';
import { GovUKRadioOptionDirective } from './radio-option.directive';

/**
 * Component for rendering a GOV.UK Design System radio button group.
 *
 * Radio buttons let users select a single option from a list.
 * This component implements the GOV.UK Design System radio button component,
 * handling form integration and accessibility requirements.
 *
 * @see https://design-system.service.gov.uk/components/radios/
 */
@Component({
  selector: 'ngx-govuk-radio-group',
  imports: [ReactiveFormsModule],
  templateUrl: './radio-group.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  hostDirectives: [ValueAccessorDirective],
})
export class GovUKRadioGroupComponent {
  /**
   * Reference to the Angular form control.
   * Allows the component to read and write values to the form.
   */
  readonly ngControl = injectNgControl();

  /**
   * Query for all radio option directives using signal-based query.
   * This allows the component to iterate through the child radio options.
   */
  readonly options = contentChildren(GovUKRadioOptionDirective);

  /**
   * When true, displays the radio buttons in a smaller size.
   * This is useful for less important options or when space is limited.
   */
  readonly small = input(false, { transform: booleanAttribute });

  /**
   * When true, displays the radio buttons in a horizontal layout.
   * Default is a vertical stack layout.
   */
  readonly inline = input(false, { transform: booleanAttribute });

  /**
   * Sets the selected value of the radio group.
   * Only updates the form control if the value has changed.
   *
   * @param value The value to set for the radio group
   */
  setValue(value: string) {
    if (this.ngControl.control.value !== value) {
      this.ngControl.control.setValue(value);
    }
  }
}
