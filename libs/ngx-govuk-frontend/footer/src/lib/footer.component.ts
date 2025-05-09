import { ChangeDetectionStrategy, Component } from '@angular/core';

/**
 * Footer component that displays standard GOV.UK footer
 *
 * @example
 * ```html
 * <ngx-govuk-footer>
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
