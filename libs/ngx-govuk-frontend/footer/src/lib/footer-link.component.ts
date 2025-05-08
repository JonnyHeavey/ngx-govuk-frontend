import { ChangeDetectionStrategy, Component, input } from '@angular/core';

/**
 * Footer link component for use within the GOV.UK footer
 * Represents a single link in the footer meta section
 *
 * @example
 * ```html
 * <!-- With href -->
 * <ngx-govuk-footer-link href="https://example.com">Example Link</ngx-govuk-footer-link>
 *
 * <!-- With routerLink -->
 * <ngx-govuk-footer-link routerLink="/help">Help</ngx-govuk-footer-link>
 * ```
 */
@Component({
  selector: 'ngx-govuk-footer-link',
  template: `<li class="govuk-footer__inline-list-item">
    <a class="govuk-footer__link" [attr.href]="href() ?? null"
      ><ng-content
    /></a>
  </li>`,
  styles: [
    `
      :host {
        cursor: pointer;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
})
export class GovUKFooterLinkComponent {
  href = input<string>();
}
