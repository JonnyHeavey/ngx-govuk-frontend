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
 * @property {string} inputId - Required. The ID attribute for the input element.
 * @property {string} label - Required. The label text for the input field.
 * @property {string} hint - Optional. Help text displayed below the label.
 * @property {boolean} isPageTitle - Optional. When true, renders the label as a page heading (h1). Defaults to false.
 */
@Component({
  selector: 'ngx-govuk-form-group',
  templateUrl: './form-group.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GovUKFormGroupComponent {
  readonly label = input<string>();
  readonly labelFor = input<string>();

  readonly errorMessage = input<string>();
  readonly hint = input<string>();
  readonly isPageTitle = input(false, { transform: booleanAttribute });
}
