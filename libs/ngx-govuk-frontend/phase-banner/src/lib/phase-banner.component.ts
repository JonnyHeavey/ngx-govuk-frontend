import { TitleCasePipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { GovUKTagComponent } from 'ngx-govuk-frontend/tag';

export type GovUKPhase = 'alpha' | 'beta';

@Component({
  selector: 'ngx-govuk-phase-banner',
  standalone: true,
  imports: [TitleCasePipe, GovUKTagComponent],
  templateUrl: './phase-banner.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GovUKPhaseBannerComponent {
  phase = input<GovUKPhase>('beta');
}
