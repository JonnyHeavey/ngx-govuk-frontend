import {
  ChangeDetectionStrategy,
  Component,
  contentChildren,
} from '@angular/core';
import { GovUKFooterNavigationSectionComponent } from './footer-navigation-section.component';

/**
 * Footer navigation component for use within the GOV.UK footer
 * Provides a container for navigation sections
 *
 * @example
 * ```html
 * <ngx-govuk-footer-navigation>
 *   <ngx-govuk-footer-navigation-section title="Services and information" columns="2" width="two-thirds">
 *     <ngx-govuk-footer-navigation-item href="/benefits">Benefits</ngx-govuk-footer-navigation-item>
 *     <ngx-govuk-footer-navigation-item href="/business">Business and self-employed</ngx-govuk-footer-navigation-item>
 *   </ngx-govuk-footer-navigation-section>
 * </ngx-govuk-footer-navigation>
 * ```
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
  navigationSections = contentChildren(GovUKFooterNavigationSectionComponent);
}
