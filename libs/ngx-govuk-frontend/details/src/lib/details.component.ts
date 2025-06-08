import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DetailsDirective } from '@ngx-uk-frontend/core/details';

/**
 * This component implements the GOV.UK Design System details component.
 * It makes a page easier to scan by letting users reveal more detailed information only if they need it.
 *
 * @see https://design-system.service.gov.uk/components/details/
 */
@Component({
  selector: 'ngx-govuk-details',
  templateUrl: './details.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GovUKDetailsComponent extends DetailsDirective {}
