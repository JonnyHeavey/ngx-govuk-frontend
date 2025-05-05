import {
  ChangeDetectionStrategy,
  Component,
  inject,
  input,
} from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import {
  GovUKCommonFormInputDirective,
  ValueAccessorDirective,
  injectNgControl,
  inputCommonInputs,
} from 'ngx-govuk-frontend/form-utils';

export interface GovUKSelectOption {
  label: string;
  value: string;
}

@Component({
    selector: 'ngx-govuk-select',
    imports: [ReactiveFormsModule],
    templateUrl: './select.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    hostDirectives: [
        ValueAccessorDirective,
        { directive: GovUKCommonFormInputDirective, inputs: inputCommonInputs },
    ]
})
export class GovUKSelectComponent {
  readonly ngControl = injectNgControl();
  readonly commonFormInput = inject(GovUKCommonFormInputDirective);

  readonly options = input.required<GovUKSelectOption[]>();
}
