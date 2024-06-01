import { ChangeDetectionStrategy, Component } from '@angular/core';
import { GovUKButtonComponent } from '../button/button.component';

@Component({
  selector: 'ngx-govuk-button-group',
  standalone: true,
  imports: [GovUKButtonComponent],
  templateUrl: './button-group.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GovUKButtonGroupComponent {}
