import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'ngx-govuk-footer',
  standalone: true,
  templateUrl: './footer.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GovUKFooterComponent {}
