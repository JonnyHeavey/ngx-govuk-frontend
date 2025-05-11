import { ChangeDetectionStrategy, Component } from '@angular/core';

/**
 * Footer meta component for use within the GOV.UK footer
 * Provides a way to add custom content to the meta section
 *
 * @example
 * ```html
 * <ngx-govuk-footer-meta>Built by the Government Digital Service</ngx-govuk-footer-meta>
 * ```
 */
@Component({
  selector: 'ngx-govuk-footer-meta',
  template: `<div class="govuk-footer__meta-custom">
    <ng-content />
  </div>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GovUKFooterMetaComponent {}
