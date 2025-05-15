import { ChangeDetectionStrategy, Component } from '@angular/core';

/**
 * This component implements the GOV.UK Design System footer component.
 * It provides navigation for a website and links to important information.
 *
 * @see https://design-system.service.gov.uk/components/footer/
 */
@Component({
  selector: 'ngx-govuk-footer',
  templateUrl: './footer.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GovUKFooterComponent {}
