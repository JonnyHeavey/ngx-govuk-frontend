import { ChangeDetectionStrategy, Component } from '@angular/core';

/**
 * This component implements the GOV.UK Design System button group component.
 * It provides a way to group buttons together in a form with consistent spacing.
 *
 * @see https://design-system.service.gov.uk/components/button/
 */
@Component({
  selector: 'ngx-govuk-button-group',
  templateUrl: './button-group.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GovUKButtonGroupComponent {}
