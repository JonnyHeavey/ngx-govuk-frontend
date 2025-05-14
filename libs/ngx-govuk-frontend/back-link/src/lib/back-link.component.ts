import {
  booleanAttribute,
  ChangeDetectionStrategy,
  Component,
  input,
} from '@angular/core';
import { RouterLink } from '@angular/router';

/**
 * This component implements the GOV.UK Design System back link component.
 * It provides a consistent way to help users navigate back to the previous page.
 *
 * @example
 * ```html
 * <ngx-govuk-back-link></ngx-govuk-back-link>
 * ```
 *
 * @example With inverse color scheme
 * ```html
 * <ngx-govuk-back-link [inverse]="true"></ngx-govuk-back-link>
 * ```
 *
 * @see {@link https://design-system.service.gov.uk/components/back-link/ GOV.UK Back link}
 */
@Component({
  selector: 'ngx-govuk-back-link',
  imports: [RouterLink],
  templateUrl: './back-link.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GovUKBackLinkComponent {
  readonly link = input.required<RouterLink['routerLink']>();

  readonly inverse = input(false, { transform: booleanAttribute });
}
