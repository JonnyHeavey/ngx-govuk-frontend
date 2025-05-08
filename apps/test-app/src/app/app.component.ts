import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import {
  GovUKBreadcrumbDirective,
  GovUKBreadcrumbsComponent,
} from 'ngx-govuk-frontend/breadcrumbs';
import {
  GovUKFooterComponent,
  GovUKFooterLinkComponent,
  GovUKFooterLinksComponent,
  GovUKFooterMetaComponent,
} from 'ngx-govuk-frontend/footer';
import { GovUKHeaderComponent } from 'ngx-govuk-frontend/header';
import { GovUKPhaseBannerComponent } from 'ngx-govuk-frontend/phase-banner';
import {
  GovUKServiceNavigationComponent,
  GovUKServiceNavigationItemDirective,
} from 'ngx-govuk-frontend/service-navigation';
import { GovUKSkipLinkComponent } from 'ngx-govuk-frontend/skip-link';

@Component({
  imports: [
    RouterOutlet,
    RouterLink,
    GovUKHeaderComponent,
    GovUKFooterComponent,
    GovUKFooterLinkComponent,
    GovUKFooterLinksComponent,
    GovUKFooterMetaComponent,
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
