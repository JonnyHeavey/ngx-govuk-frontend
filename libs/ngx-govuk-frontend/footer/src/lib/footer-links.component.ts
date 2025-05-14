import { ChangeDetectionStrategy, Component } from '@angular/core';

/**
 * Footer links component for use within the GOV.UK footer
 * Provides a container for footer link components
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
  selector: 'ngx-govuk-footer-links',
  template: `<ul class="govuk-footer__inline-list">
    <ng-content />
  </ul>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GovUKFooterLinksComponent {}
