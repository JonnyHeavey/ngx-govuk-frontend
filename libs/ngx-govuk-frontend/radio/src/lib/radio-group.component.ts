import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { ValueAccessorDirective } from 'ngx-govuk-frontend/form-utils';

@Component({
  selector: 'ngx-govuk-radio-group',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './radio-group.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  hostDirectives: [ValueAccessorDirective],
})
export class GovUKRadioGroupComponent {}
