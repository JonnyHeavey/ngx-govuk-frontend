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
 * @see https://design-system.service.gov.uk/components/back-link/
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
