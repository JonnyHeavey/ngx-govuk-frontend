import { ChangeDetectionStrategy, Component } from '@angular/core';

/**
 * This component implements the GOV.UK Design System inset text component.
 * It distinguishes a block of text from the surrounding content.
 *
 * @see {@link https://design-system.service.gov.uk/components/inset-text/ GOV.UK Inset Text}
 */
@Component({
  selector: 'ngx-govuk-inset-text',
  templateUrl: './inset-text.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GovUKInsetTextComponent {}
