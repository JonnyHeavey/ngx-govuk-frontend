import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { GovUKBackLinkComponent } from 'ngx-govuk-frontend/back-link';
import {
  GovUKButtonComponent,
  GovUKButtonGroupComponent,
} from 'ngx-govuk-frontend/button';
import { GovUKCheckboxComponent } from 'ngx-govuk-frontend/checkbox';
import { GovUKCookieBannerComponent } from 'ngx-govuk-frontend/cookie-banner';
import { GovUKDetailsComponent } from 'ngx-govuk-frontend/details';
import { GovUKFooterComponent } from 'ngx-govuk-frontend/footer';
import { GovUKHeaderComponent } from 'ngx-govuk-frontend/header';
import { GovUKInsetTextComponent } from 'ngx-govuk-frontend/inset-text';
import { GovUKNotificationBannerComponent } from 'ngx-govuk-frontend/notification-banner';
import { GovUKPanelComponent } from 'ngx-govuk-frontend/panel';
import { GovUKPasswordInputComponent } from 'ngx-govuk-frontend/password-input';
import { GovUKPhaseBannerComponent } from 'ngx-govuk-frontend/phase-banner';
import {
  GovUKRadioGroupComponent,
  GovUKRadioOption,
} from 'ngx-govuk-frontend/radio';
import { GovUKTagComponent } from 'ngx-govuk-frontend/tag';
import { GovUKTextInputComponent } from 'ngx-govuk-frontend/text-input';
import { GovUKTextareaComponent } from 'ngx-govuk-frontend/textarea';
import { GovUKWarningTextComponent } from 'ngx-govuk-frontend/warning-text';
@Component({
  standalone: true,
  imports: [
    RouterModule,
    ReactiveFormsModule,
    GovUKPhaseBannerComponent,
    GovUKHeaderComponent,
    GovUKFooterComponent,
    GovUKBackLinkComponent,
    GovUKButtonGroupComponent,
    GovUKButtonComponent,
    GovUKCookieBannerComponent,
    GovUKDetailsComponent,
    GovUKInsetTextComponent,
    GovUKNotificationBannerComponent,
    GovUKPanelComponent,
    GovUKTextInputComponent,
    GovUKTextareaComponent,
    GovUKPasswordInputComponent,
    GovUKCheckboxComponent,
    GovUKRadioGroupComponent,
    GovUKTagComponent,
    GovUKWarningTextComponent,
  ],
  selector: 'ngx-govuk-frontend-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  readonly form = inject(FormBuilder).nonNullable.group({
    colour: 'blue',
    earning: '',
    weight: '',
    detail: '',
    price: '',
    password: '',
    rememberMe: false,
    choice: 'B',
  });

  options: GovUKRadioOption[] = [
    { label: 'Option A', value: 'A' },
    { label: 'Option B', value: 'B' },
    { label: 'Option C', value: 'C' },
  ];

  constructor() {
    this.form.valueChanges.subscribe((changes) =>
      console.log('Form Model Update', changes),
    );
  }
}
