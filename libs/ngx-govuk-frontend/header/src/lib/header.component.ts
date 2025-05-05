import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'ngx-govuk-header',
    imports: [RouterLink],
    templateUrl: './header.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class GovUKHeaderComponent {
  logoLink = input.required<string>();
  appName = input<string>();
  appLink = input<string>();
}
