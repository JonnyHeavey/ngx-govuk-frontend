import {
  booleanAttribute,
  ChangeDetectionStrategy,
  Component,
  input,
} from '@angular/core';

/**
 * A form group component that wraps form controls with a label and optional hint text.
 * Follows the GOV.UK Design System form group pattern.
 *
 * @example
 * ```html
 * <ngx-govuk-form-group
 *   inputId="example-input"
 *   label="Enter your name"
 *   hint="As shown on your passport"
 *   [isPageTitle]="true"
 * >
 *   <input type="text" />
 * </ngx-govuk-form-group>
 * ```
 *
 * @input inputId - Required. The ID to be applied to the form control element. This is used to associate the label with the form control.
 * @input label - Required. The text label to display above the form control.
 * @input hint - Optional. Additional hint text to display below the label. Defaults to an empty string.
 * @input isPageTitle - Optional. When true, the label will be styled as a page heading. Defaults to false.
 */
@Component({
  selector: 'ngx-govuk-form-group',
  standalone: true,
  templateUrl: './form-group.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GovUKFormGroupComponent {
  readonly inputId = input.required<string>();
  readonly label = input.required<string>();

  readonly hint = input('');
  readonly isPageTitle = input(false, { transform: booleanAttribute });

  // TODO try including this in the parent components via composition, or make this be defined in a directive and use as composition in both...
}
