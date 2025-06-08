import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { ButtonDirective } from '@ngx-uk-frontend/core/button';

export type GovScotButtonColorType =
  | 'primary'
  | 'secondary'
  | 'cancel'
  | 'link';

@Component({
  selector: 'ngx-govscot-button',
  templateUrl: './button.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GovScotButtonComponent extends ButtonDirective {
  readonly color = input<GovScotButtonColorType>('primary');
}
