import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import {
  ValueAccessorDirective,
  injectNgControl,
} from 'ngx-govuk-frontend/form-utils';

@Component({
  selector: 'ngx-govuk-checkbox',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './checkbox.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  hostDirectives: [ValueAccessorDirective],
})
export class GovUKCheckboxComponent {
  readonly ngControl = injectNgControl();

  readonly id = input.required<string>();
  readonly label = input.required<string>();

  toggle() {
    this.ngControl.control?.setValue(!this.ngControl.control?.value);
  }
}
