import {
  booleanAttribute,
  ChangeDetectionStrategy,
  Component,
  input,
} from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import {
  injectNgControl,
  ValueAccessorDirective,
} from 'ngx-govuk-frontend/form-utils';

export interface GovUKRadioOption {
  label: string;
  value: string;
  hint?: string;
}

@Component({
  selector: 'ngx-govuk-radio-group',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './radio-group.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  hostDirectives: [ValueAccessorDirective],
})
export class GovUKRadioGroupComponent {
  readonly ngControl = injectNgControl();

  readonly options = input.required<GovUKRadioOption[]>();
  readonly small = input(false, { transform: booleanAttribute });
  readonly inline = input(false, { transform: booleanAttribute });

  setValue(value: string) {
    if (this.ngControl.control.value !== value) {
      this.ngControl.control.setValue(value);
    }
  }
}
