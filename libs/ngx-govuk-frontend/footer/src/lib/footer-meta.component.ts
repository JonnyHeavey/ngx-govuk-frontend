import { ChangeDetectionStrategy, Component } from '@angular/core';

/**
 * Footer meta component for use within the GOV.UK footer
 * Provides a container for custom meta content
 *
 * @example
 * ```html
 * <ngx-govuk-footer>
 *   <ngx-govuk-footer-link href="/help">Help</ngx-govuk-footer-link>
 *   <ngx-govuk-footer-meta>Built by the Government Digital Service</ngx-govuk-footer-meta>
 * </ngx-govuk-footer>
 * ```
 */
@Component({
  selector: 'ngx-govuk-footer-meta',
  template: `<div class="govuk-footer__meta-custom"><ng-content /></div>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GovUKFooterMetaComponent {}
