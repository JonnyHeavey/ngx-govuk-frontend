import { TitleCasePipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { GovUKTagComponent } from 'ngx-govuk-frontend/tag';

export type GovUKPhase = 'alpha' | 'beta';

/**
 * This component implements the GOV.UK Design System phase banner component.
 * It shows users that the service is still being worked on and in a particular phase.
 *
 * @see {@link https://design-system.service.gov.uk/components/phase-banner/ GOV.UK Phase Banner}
 */
@Component({
  selector: 'ngx-govuk-phase-banner',
  imports: [TitleCasePipe, GovUKTagComponent],
  templateUrl: './phase-banner.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GovUKPhaseBannerComponent {
  /** The phase of the service. Can be 'alpha' or 'beta'. Defaults to 'beta'. */
  readonly phase = input<GovUKPhase>('beta');
}
