import {
  booleanAttribute,
  ChangeDetectionStrategy,
  Component,
  contentChildren,
  input,
} from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import {
  injectNgControl,
  ValueAccessorDirective,
} from 'ngx-govuk-frontend/form-utils';
import { GovUKRadioOptionDirective } from './radio-option.directive';

@Component({
    selector: 'ngx-govuk-radio-group',
    imports: [ReactiveFormsModule],
    templateUrl: './radio-group.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    hostDirectives: [ValueAccessorDirective]
})
export class GovUKRadioGroupComponent {
  readonly ngControl = injectNgControl();
  readonly options = contentChildren(GovUKRadioOptionDirective);

  readonly small = input(false, { transform: booleanAttribute });
  readonly inline = input(false, { transform: booleanAttribute });

  setValue(value: string) {
    if (this.ngControl.control.value !== value) {
      this.ngControl.control.setValue(value);
    }
  }
}
