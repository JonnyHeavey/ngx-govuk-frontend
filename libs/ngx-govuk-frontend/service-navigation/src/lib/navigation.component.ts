import {
  ChangeDetectionStrategy,
  Component,
  contentChildren,
} from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { GovUKServiceNavigationItemDirective } from './item/navigation-item.directive';

/**
 * This component implements the GOV.UK Design System service navigation component.
 * It provides a consistent way for users to navigate between different sections of a service.
 *
 * @example
 * ```html
 * <ngx-govuk-service-navigation>
 *   <a govukServiceNavigationItem routerLink="/account" routerLinkActive="active">Your account</a>
 *   <a govukServiceNavigationItem routerLink="/services" routerLinkActive="active">Your services</a>
 *   <a govukServiceNavigationItem routerLink="/signout">Sign out</a>
 * </ngx-govuk-service-navigation>
 * ```
 *
 * @see {@link https://design-system.service.gov.uk/components/service-navigation/ GOV.UK Service Navigation}
 */
@Component({
  selector: 'ngx-govuk-service-navigation',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './navigation.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GovUKServiceNavigationComponent {
  /** Collection of navigation items that are children of this component. */
  readonly items = contentChildren(GovUKServiceNavigationItemDirective);
}
