import { ChangeDetectionStrategy, Component } from '@angular/core';

/**
 * This component implements the GOV.UK Design System warning text component.
 * It helps make users aware of important information that could affect their application or actions.
 *
 * @see https://design-system.service.gov.uk/components/warning-text/
 */
@Component({
  selector: 'ngx-govuk-warning-text',
  templateUrl: './warning-text.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GovUKWarningTextComponent {}
