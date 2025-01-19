import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { GovUKFooterComponent } from 'ngx-govuk-frontend/footer';
import { GovUKHeaderComponent } from 'ngx-govuk-frontend/header';
import { GovUKPhaseBannerComponent } from 'ngx-govuk-frontend/phase-banner';

@Component({
  standalone: true,
  imports: [
    RouterModule,
    GovUKHeaderComponent,
    GovUKFooterComponent,
    GovUKPhaseBannerComponent,
  ],
  selector: 'ngx-govuk-frontend-root',
  templateUrl: './app.component.html',
})
export class AppComponent {}
