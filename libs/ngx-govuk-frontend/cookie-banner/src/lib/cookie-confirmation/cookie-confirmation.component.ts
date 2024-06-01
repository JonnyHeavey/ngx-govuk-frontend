import { ChangeDetectionStrategy, Component, output } from '@angular/core';
import {
  GovUKButtonComponent,
  GovUKButtonGroupComponent,
} from 'ngx-govuk-frontend/button';

@Component({
  selector: 'ngx-govuk-cookie-confirmation',
  standalone: true,
  imports: [GovUKButtonComponent, GovUKButtonGroupComponent],
  templateUrl: './cookie-confirmation.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GovUKCookieConfirmationComponent {
  changeSettings = output<void>();
  hide = output<void>();
}
