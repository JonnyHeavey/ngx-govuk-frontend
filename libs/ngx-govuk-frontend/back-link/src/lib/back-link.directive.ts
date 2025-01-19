/* eslint-disable @angular-eslint/no-host-metadata-property */
import { booleanAttribute, Directive, input } from '@angular/core';
import { RouterLink } from '@angular/router';

/**
 * A directive that adds GOV.UK back link styling to an anchor element.
 * This directive extends the functionality of RouterLink to create a styled back navigation link.
 *
 * @example
 * ```html
 * <!-- Basic usage -->
 * <a ngxGovUkBackLink routerLink="/previous-page">Back</a>
 *
 * <!-- With inverse styling -->
 * <a ngxGovUkBackLink [inverse]="true" routerLink="/previous-page">Back</a>
 * ```
 *
 * @inputBindings
 * @param inverse - When true, applies inverse styling suitable for dark backgrounds. Defaults to false.
 * @param routerLink - Inherited from RouterLink directive, specifies the target route.
 *
 * @usageNotes
 * - Must be applied to an anchor (`<a>`) element
 * - Automatically applies the GOV.UK back link styling
 * - Integrates with Angular Router for navigation
 */
@Directive({
  selector: 'a[ngxGovUkBackLink]',
  standalone: true,
  host: {
    class: 'govuk-back-link',
    '[class.govuk-back-link--inverse]': 'inverse()',
  },
  hostDirectives: [{ directive: RouterLink, inputs: ['routerLink'] }],
})
export class GovUKBackLinkDirective {
  readonly inverse = input(false, { transform: booleanAttribute });
}
