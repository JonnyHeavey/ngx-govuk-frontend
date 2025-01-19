import {
  ChangeDetectionStrategy,
  Component,
  input,
  TemplateRef,
  viewChild,
} from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'ngx-govuk-breadcrumb',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './breadcrumb.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GovUKBreadcrumbComponent {
  readonly link = input<RouterLink['routerLink']>();

  readonly templateRef =
    viewChild.required<TemplateRef<unknown>>('breadcrumbContent');
}
