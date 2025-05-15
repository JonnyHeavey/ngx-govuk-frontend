import { ChangeDetectionStrategy, Component } from '@angular/core';

/**
 * This component implements the GOV.UK Design System button group component.
 * It provides a way to group buttons together in a form with consistent spacing.
 *
 * @see {@link https://design-system.service.gov.uk/components/button/ GOV.UK Button}
 */
@Component({
  selector: 'ngx-govuk-button-group',
  templateUrl: './button-group.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GovUKButtonGroupComponent {}
