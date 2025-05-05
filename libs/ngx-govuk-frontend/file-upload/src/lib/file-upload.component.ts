import { NgClass } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import {
  GovUKCommonFormInputDirective,
  ValueAccessorDirective,
  injectNgControl,
  inputCommonInputs,
} from 'ngx-govuk-frontend/form-utils';

/**
 * A form file upload input component that follows the GOV.UK Design System styling and behavior.
 *
 * This component provides a file upload input field.
 * It integrates with Angular's form controls.
 *
 * @example
 * ```html
 * <ngx-govuk-file-upload formControlName="photo" inputId="photo-upload" />
 * ```
 *
 * @property {string} autocomplete - Optional. The HTML autocomplete attribute value. Defaults to 'off'.
 * @property {string} extraClasses - Optional. Additional CSS classes to apply to the input element.
 * @property {string} inputId - Optional. The ID attribute for the input element.
 */
@Component({
    selector: 'ngx-govuk-file-upload',
    imports: [NgClass, ReactiveFormsModule],
    templateUrl: './file-upload.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    hostDirectives: [
        ValueAccessorDirective,
        { directive: GovUKCommonFormInputDirective, inputs: inputCommonInputs },
    ]
})
export class GovUKFileUploadComponent {
  readonly ngControl = injectNgControl();
  readonly commonFormInput = inject(GovUKCommonFormInputDirective);
}
