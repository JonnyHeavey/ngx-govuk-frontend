/* eslint-disable @angular-eslint/directive-selector */
import { Directive, input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Directive({
  selector: 'ngx-govuk-breadcrumb',
})
export class GovUKBreadcrumbDirective {
  readonly label = input.required<string>();
  readonly link = input<RouterLink['routerLink']>();
}
