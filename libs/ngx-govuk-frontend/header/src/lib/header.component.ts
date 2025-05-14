import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'ngx-govuk-header',
  imports: [RouterLink],
  templateUrl: './header.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GovUKHeaderComponent {
  readonly logoLink = input.required<string>();
  readonly appName = input<string>();
  readonly appLink = input<string>();
}
