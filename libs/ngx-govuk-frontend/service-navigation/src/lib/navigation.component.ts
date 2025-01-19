import {
  ChangeDetectionStrategy,
  Component,
  contentChildren,
} from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { GovUKServiceNavigationItemDirective } from './item/navigation-item.directive';

@Component({
  selector: 'ngx-govuk-service-navigation',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './navigation.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GovUKServiceNavigationComponent {
  readonly items = contentChildren(GovUKServiceNavigationItemDirective);
}
