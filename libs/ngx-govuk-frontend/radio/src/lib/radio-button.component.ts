import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import {
  ValueAccessorDirective,
  injectNgControl,
} from 'ngx-govuk-frontend/form-utils';

@Component({
  selector: 'ngx-govuk-radio-button',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './radio-button.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  hostDirectives: [ValueAccessorDirective],
})
export class GovUKRadioButtonComponent {
  readonly ngControl = injectNgControl();

  readonly id = input.required<string>();
  readonly label = input.required<string>();
  readonly value = input.required<string>();

  setValue(value: string) {
    if (this.ngControl.control.value !== value) {
      this.ngControl.control.setValue(value);
    }
  }
}
