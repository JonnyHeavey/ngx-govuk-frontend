import { NgClass } from '@angular/common';
import {
  booleanAttribute,
  ChangeDetectionStrategy,
  Component,
  input,
} from '@angular/core';

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
 * This component implements the GOV.UK Design System button component.
 * It allows users to take actions, submit forms, or navigate to a new page.
 *
 * @see https://design-system.service.gov.uk/components/button/
 */
@Component({
  selector: 'ngx-govuk-button',
  imports: [NgClass],
  templateUrl: './button.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GovUKButtonComponent {
  /** Whether the button is disabled. Defaults to false. */
  readonly disabled = input(false, { transform: booleanAttribute });

  /** Whether to show the start icon (forward arrow). Defaults to false. */
  readonly start = input(false, { transform: booleanAttribute });

  /**
   * The color variant of the button. Defaults to 'primary'.
   * Can be 'primary', 'secondary', 'warning', or 'inverse'.
   */
  readonly color = input<GovUKButtonColorType>('primary');
}
