import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'ngx-govuk-back-link',
  standalone: true,
  templateUrl: './back-link.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GovUKBackLinkComponent {}
