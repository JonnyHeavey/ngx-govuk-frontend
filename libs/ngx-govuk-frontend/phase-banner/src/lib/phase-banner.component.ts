import { TitleCasePipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { GovUKTagComponent } from 'ngx-govuk-frontend/tag';

export type GovUKPhase = 'alpha' | 'beta';

@Component({
  selector: 'ngx-govuk-phase-banner',
  imports: [TitleCasePipe, GovUKTagComponent],
  templateUrl: './phase-banner.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GovUKPhaseBannerComponent {
  readonly phase = input<GovUKPhase>('beta');
}
