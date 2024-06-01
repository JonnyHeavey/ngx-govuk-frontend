import { Component, input } from '@angular/core';

@Component({
  selector: 'ngx-govuk-notification-banner',
  standalone: true,
  templateUrl: './notification-banner.component.html',
})
export class GovUKNotificationBannerComponent {
  title = input.required<string>();
}
