import {
  ChangeDetectionStrategy,
  Component,
  contentChildren,
} from '@angular/core';
import { GovUKFooterNavigationSectionComponent } from './footer-navigation-section.component';

/**
 * This component implements the navigation section of the GOV.UK Design System footer component.
 * It provides structured navigation for the footer.
 *
 * @see https://design-system.service.gov.uk/components/footer/
 */
@Component({
  selector: 'ngx-govuk-footer-navigation',
  template: `<div class="govuk-footer__navigation">
    <ng-content select="ngx-govuk-footer-navigation-section" />
  </div>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GovUKFooterNavigationComponent {
  /**
   * Query for all navigation section components using signal-based query
   */
  readonly navigationSections = contentChildren(
    GovUKFooterNavigationSectionComponent,
  );
}
