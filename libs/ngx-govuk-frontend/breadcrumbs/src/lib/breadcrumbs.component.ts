import {
  ChangeDetectionStrategy,
  Component,
  contentChildren,
} from '@angular/core';
import { RouterLink } from '@angular/router';
import { GovUKBreadcrumbDirective } from './breadcrumb/breadcrumb.directive';

@Component({
  selector: 'ngx-govuk-breadcrumbs',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './breadcrumbs.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GovUKBreadcrumbsComponent {
  readonly items = contentChildren(GovUKBreadcrumbDirective);
}
