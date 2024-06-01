import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'ngx-govuk-warning-text',
  standalone: true,
  templateUrl: './warning-text.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GovUKWarningTextComponent {}
