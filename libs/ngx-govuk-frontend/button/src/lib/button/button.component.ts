import { NgClass } from '@angular/common';
import { ChangeDetectionStrategy, Component, input } from '@angular/core';

/**
 * The color type for GovUK buttons
 * @typedef {('primary'|'secondary'|'warning'|'inverse')} GovUKButtonColorType
 * - 'primary' - Default blue button
 * - 'secondary' - Grey button for secondary actions
 * - 'warning' - Red warning button
 * - 'inverse' - White button on dark background
 */
export type GovUKButtonColorType =
  | 'primary'
  | 'secondary'
  | 'warning'
  | 'inverse';

/**
 * A button component following the GovUK Design System (see: https://design-system.service.gov.uk/components/button/)
 * @component
 *
 * @example
 * <ngx-govuk-button color="primary">Save and continue</ngx-govuk-button>
 *
 * @property {boolean} disabled - Whether the button is disabled
 * @property {boolean} start - Whether to show the start icon (forward arrow)
 * @property {GovUKButtonColorType} color - The color variant of the button
 *   - 'primary' (default) - Green button for primary actions
 *   - 'secondary' - Grey button for secondary actions
 *   - 'warning' - Red button for destructive actions
 *   - 'inverse' - White button for use on dark backgrounds
 */
@Component({
  selector: 'ngx-govuk-button',
  standalone: true,
  imports: [NgClass],
  templateUrl: './button.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GovUKButtonComponent {
  disabled = input(false);
  start = input(false);
  color = input<GovUKButtonColorType>('primary');
}
