import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
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
import { GovUKFormGroupComponent } from 'ngx-govuk-frontend/form-group';
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
import {
  GovUKSelectComponent,
  GovUKSelectOption,
} from 'ngx-govuk-frontend/select';
import { GovUKTagComponent } from 'ngx-govuk-frontend/tag';
import { GovUKTextInputComponent } from 'ngx-govuk-frontend/text-input';
import { GovUKTextareaComponent } from 'ngx-govuk-frontend/textarea';
import { GovUKWarningTextComponent } from 'ngx-govuk-frontend/warning-text';
@Component({
  standalone: true,
  imports: [
    RouterModule,
    ReactiveFormsModule,
    GovUKFormGroupComponent,
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
    GovUKSelectComponent,
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
    colour: [
      'blue',
      Validators.compose([Validators.required, Validators.minLength(2)]),
    ],
    earning: '',
    weight: '',
    detail: ['', Validators.required],
    price: '',
    password: ['', Validators.required],
    rememberMe: false,
    choice: 'B',
    selection: '',
  });

  options: GovUKRadioOption[] = [
    { label: 'Option A', value: 'A' },
    { label: 'Option B', value: 'B' },
    { label: 'Option C', value: 'C' },
  ];

  colours: GovUKSelectOption[] = [
    { label: 'Red', value: 'red' },
    { label: 'Blue', value: 'blue' },
    { label: 'Green', value: 'green' },
  ];

  constructor() {
    this.form.valueChanges.subscribe((changes) =>
      console.log('Form Model Update', changes),
    );
  }
}
