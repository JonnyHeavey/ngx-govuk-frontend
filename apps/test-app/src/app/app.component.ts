import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {
  GovUKBreadcrumbComponent,
  GovUKBreadcrumbsComponent,
} from 'ngx-govuk-frontend/breadcrumbs';
import { GovUKFooterComponent } from 'ngx-govuk-frontend/footer';
import { GovUKHeaderComponent } from 'ngx-govuk-frontend/header';
import { GovUKPhaseBannerComponent } from 'ngx-govuk-frontend/phase-banner';

@Component({
  standalone: true,
  imports: [
    RouterOutlet,
    GovUKHeaderComponent,
    GovUKFooterComponent,
    GovUKPhaseBannerComponent,
    GovUKBreadcrumbsComponent,
    GovUKBreadcrumbComponent,
  ],
  selector: 'ngx-govuk-frontend-root',
  templateUrl: './app.component.html',
})
export class AppComponent {}
