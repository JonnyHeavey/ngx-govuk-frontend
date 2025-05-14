/* eslint-disable @angular-eslint/directive-selector */
import { Directive, input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Directive({
  selector: 'ngx-govuk-service-navigaiton-item',
})
export class GovUKServiceNavigationItemDirective {
  readonly label = input.required<string>();
  readonly link = input<RouterLink['routerLink']>();
}
