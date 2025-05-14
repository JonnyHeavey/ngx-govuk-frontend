import {
  ChangeDetectionStrategy,
  Component,
  input,
  output,
} from '@angular/core';
import {
  GovUKButtonComponent,
  GovUKButtonGroupComponent,
} from 'ngx-govuk-frontend/button';

@Component({
  selector: 'ngx-govuk-cookie-banner',
  imports: [GovUKButtonComponent, GovUKButtonGroupComponent],
  templateUrl: './cookie-banner.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GovUKCookieBannerComponent {
  readonly appName = input.required<string>();

  readonly accept = output<void>();
  readonly reject = output<void>();
  readonly view = output<void>();
}
