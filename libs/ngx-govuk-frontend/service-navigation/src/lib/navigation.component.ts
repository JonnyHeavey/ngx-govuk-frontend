import {
  ChangeDetectionStrategy,
  Component,
  contentChildren,
} from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { GovUKServiceNavigationItemDirective } from './item/navigation-item.directive';

/**
 * This component implements the GOV.UK Design System service navigation component.
 * It provides a way for users to navigate between different sections of a service.
 *
 * @see https://design-system.service.gov.uk/components/header/
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
