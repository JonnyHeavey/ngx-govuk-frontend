import { NgTemplateOutlet } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  contentChildren,
} from '@angular/core';
import { GovUKBreadcrumbComponent } from './breadcrumb/breadcrumb.component';

@Component({
  selector: 'ngx-govuk-breadcrumbs',
  standalone: true,
  imports: [NgTemplateOutlet, GovUKBreadcrumbComponent],
  templateUrl: './breadcrumbs.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GovUKBreadcrumbsComponent {
  readonly items = contentChildren(GovUKBreadcrumbComponent);
}
