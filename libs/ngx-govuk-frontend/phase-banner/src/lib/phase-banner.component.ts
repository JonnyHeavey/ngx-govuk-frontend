import { TitleCasePipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { GovUKTagComponent } from 'ngx-govuk-frontend/tag';

export type GovUKPhase = 'alpha' | 'beta';

/**
 * This component implements the GOV.UK Design System phase banner component.
 * It helps users understand when a service is new and likely to change.
 *
 * @example
 * ```html
 * <ngx-govuk-phase-banner phase="alpha">
 *   This is a new service – your <a href="#">feedback</a> will help us improve it.
 * </ngx-govuk-phase-banner>
 * ```
 *
 * @see {@link https://design-system.service.gov.uk/components/phase-banner/ GOV.UK Phase banner}
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
