import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {
  GovUKBreadcrumbDirective,
  GovUKBreadcrumbsComponent,
} from 'ngx-govuk-frontend/breadcrumbs';
import { GovUKFooterComponent } from 'ngx-govuk-frontend/footer';
import { GovUKHeaderComponent } from 'ngx-govuk-frontend/header';
import { GovUKPhaseBannerComponent } from 'ngx-govuk-frontend/phase-banner';
import {
  GovUKServiceNavigationComponent,
  GovUKServiceNavigationItemDirective,
} from 'ngx-govuk-frontend/service-navigation';
import { GovUKSkipLinkComponent } from 'ngx-govuk-frontend/skip-link';

@Component({
  standalone: true,
  imports: [
    RouterOutlet,
    GovUKHeaderComponent,
    GovUKFooterComponent,
    GovUKPhaseBannerComponent,
    GovUKBreadcrumbsComponent,
    GovUKBreadcrumbDirective,
    GovUKServiceNavigationComponent,
    GovUKServiceNavigationItemDirective,
    GovUKSkipLinkComponent,
  ],
  selector: 'ngx-govuk-frontend-root',
  templateUrl: './app.component.html',
})
export class AppComponent {}
