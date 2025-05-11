import { ChangeDetectionStrategy, Component } from '@angular/core';

/**
 * Footer component that displays standard GOV.UK footer
 *
 * @example
 * ```html
 * <ngx-govuk-footer>
 *   <ngx-govuk-footer-navigation>
 *     <ngx-govuk-footer-navigation-section title="Services and information" [columns]="2" width="two-thirds">
 *       <ngx-govuk-footer-navigation-item href="/benefits">Benefits</ngx-govuk-footer-navigation-item>
 *       <ngx-govuk-footer-navigation-item href="/business">Business and self-employed</ngx-govuk-footer-navigation-item>
 *     </ngx-govuk-footer-navigation-section>
 *     <ngx-govuk-footer-navigation-section title="Departments and policy" width="one-third">
 *       <ngx-govuk-footer-navigation-item href="/how-government-works">How government works</ngx-govuk-footer-navigation-item>
 *       <ngx-govuk-footer-navigation-item href="/departments">Departments</ngx-govuk-footer-navigation-item>
 *     </ngx-govuk-footer-navigation-section>
 *   </ngx-govuk-footer-navigation>
 *   <ngx-govuk-footer-links>
 *     <ngx-govuk-footer-link href="/help">Help</ngx-govuk-footer-link>
 *     <ngx-govuk-footer-link href="/cookies">Cookies</ngx-govuk-footer-link>
 *   </ngx-govuk-footer-links>
 *   <ngx-govuk-footer-meta>Built by the Government Digital Service</ngx-govuk-footer-meta>
 * </ngx-govuk-footer>
 * ```
 */
@Component({
  selector: 'ngx-govuk-footer',
  standalone: true,
  templateUrl: './footer.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GovUKFooterComponent {}
