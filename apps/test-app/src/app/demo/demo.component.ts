import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import {
  GovUKButtonComponent,
  GovUKButtonGroupComponent,
} from 'ngx-govuk-frontend/button';
import { GovUKCookieBannerComponent } from 'ngx-govuk-frontend/cookie-banner';
import { GovUKDetailsComponent } from 'ngx-govuk-frontend/details';
import { GovUKInsetTextComponent } from 'ngx-govuk-frontend/inset-text';
import { GovUKNotificationBannerComponent } from 'ngx-govuk-frontend/notification-banner';
import { GovUKPanelComponent } from 'ngx-govuk-frontend/panel';
import { GovUKTabComponent, GovUKTabsComponent } from 'ngx-govuk-frontend/tabs';
import { GovUKTagComponent } from 'ngx-govuk-frontend/tag';
import { GovUKWarningTextComponent } from 'ngx-govuk-frontend/warning-text';

@Component({
  standalone: true,
  imports: [
    RouterModule,
    GovUKButtonGroupComponent,
    GovUKButtonComponent,
    GovUKCookieBannerComponent,
    GovUKDetailsComponent,
    GovUKInsetTextComponent,
    GovUKNotificationBannerComponent,
    GovUKPanelComponent,
    GovUKTagComponent,
    GovUKWarningTextComponent,
    GovUKTabsComponent,
    GovUKTabComponent,
  ],
  selector: 'ngx-govuk-frontend-demo',
  templateUrl: './demo.component.html',
})
export class DemoComponent {}
