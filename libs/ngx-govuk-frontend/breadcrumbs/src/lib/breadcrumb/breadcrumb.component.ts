import { JsonPipe } from '@angular/common';
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
  imports: [RouterLink, JsonPipe],
  templateUrl: './breadcrumb.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  hostDirectives: [{ directive: RouterLink, inputs: ['routerLink: link'] }],
})
export class GovUKBreadcrumbComponent {
  readonly link = input<RouterLink['routerLink']>();

  readonly templateRef =
    viewChild.required<TemplateRef<unknown>>('breadcrumbContent');
}
