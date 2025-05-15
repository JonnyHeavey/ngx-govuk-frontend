import { ChangeDetectionStrategy, Component } from '@angular/core';

/**
 * This component implements the links section of the GOV.UK Design System footer component.
 * It provides a container for footer links.
 *
 * @see {@link https://design-system.service.gov.uk/components/footer/ GOV.UK Footer}
 */
@Component({
  selector: 'ngx-govuk-footer-links',
  template: `<ul class="govuk-footer__inline-list">
    <ng-content />
  </ul>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GovUKFooterLinksComponent {}
