import {
  ChangeDetectionStrategy,
  Component,
  contentChildren,
} from '@angular/core';
import { RouterLink } from '@angular/router';
import { GovUKBreadcrumbDirective } from './breadcrumb/breadcrumb.directive';

/**
 * This component implements the GOV.UK Design System breadcrumbs component.
 * It helps users understand where they are in a website's structure and navigate back to previous pages.
 *
 * @see https://design-system.service.gov.uk/components/breadcrumbs/
 */
@Component({
  selector: 'ngx-govuk-breadcrumbs',
  imports: [RouterLink],
  templateUrl: './breadcrumbs.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GovUKBreadcrumbsComponent {
  /** Collection of breadcrumb items that are children of this component. */
  readonly items = contentChildren(GovUKBreadcrumbDirective);
}
