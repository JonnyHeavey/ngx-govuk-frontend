import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import {
  ValueAccessorDirective,
  injectNgControl,
} from 'ngx-govuk-frontend/form-utils';

export interface GovUKRadioOption {
  label: string;
  value: string;
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

  setValue(value: string) {
    if (this.ngControl.control.value !== value) {
      this.ngControl.control.setValue(value);
    }
  }
}
