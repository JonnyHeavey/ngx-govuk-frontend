import { ChangeDetectionStrategy, Component, input } from '@angular/core';

/**
 * This component implements a link in the GOV.UK Design System footer component.
 * It provides a link within the footer links section.
 *
 * @see {@link https://design-system.service.gov.uk/components/footer/ GOV.UK Footer}
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
})
export class GovUKFooterLinkComponent {
  readonly href = input<string>();
}
