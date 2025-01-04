import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import {
  GovUKFormGroupDirective,
  formGroupDirectiveInputs,
} from './form-group.directive';

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
  standalone: true,
  templateUrl: './form-group.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  hostDirectives: [
    {
      directive: GovUKFormGroupDirective,
      inputs: formGroupDirectiveInputs,
    },
  ],
})
export class GovUKFormGroupComponent {
  readonly formGroup = inject(GovUKFormGroupDirective);
}
