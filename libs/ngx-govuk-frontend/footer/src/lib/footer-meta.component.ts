import { ChangeDetectionStrategy, Component } from '@angular/core';

/**
 * This component implements the meta section of the GOV.UK Design System footer component.
 * It provides a container for additional information in the footer.
 *
 * @see https://design-system.service.gov.uk/components/footer/
 */
@Component({
  selector: 'ngx-govuk-footer-meta',
  template: `<div class="govuk-footer__meta-custom">
    <ng-content />
  </div>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GovUKFooterMetaComponent {}
