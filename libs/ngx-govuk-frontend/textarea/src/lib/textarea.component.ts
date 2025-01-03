import { NgClass } from '@angular/common';
import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import {
  GovUKBaseInputDirective,
  ValueAccessorDirective,
} from 'ngx-govuk-frontend/form-utils';

/**
 * A textarea component that follows the GOV.UK Design System guidelines.
 * This component extends GovUKBaseInputDirective to provide common form input functionality.
 *
 * @example
 * ```html
 * <ngx-govuk-textarea
 *   formControlName="detail"
 *   label="Can you provide more detail?"
 *   inputId="detail"
 *   hint="Do not include personal information"
 *   [rows]="5"
 * ></ngx-govuk-textarea>
 * ```
 *
 * @implements {ValueAccessorDirective} Provides form control value accessor functionality
 * @extends {GovUKBaseInputDirective} Inherits common form input properties and methods
 *
 * Required inputs:
 * @property {string} label - The label text for the textarea
 * @property {string} inputId - Unique identifier for the textarea element
 *
 * Optional inputs:
 * @property {number} rows - Number of visible text rows for the textarea. Defaults to 2.
 * @property {string} hint - Hint text providing additional context
 * @property {boolean} isPageTitle - Whether the label should be styled as a page heading. Defaults to false.
 * @property {string} autocomplete - HTML autocomplete attribute value
 * @property {string} extraClasses - Additional CSS classes to apply to the textarea
 */
@Component({
  selector: 'ngx-govuk-textarea',
  standalone: true,
  imports: [NgClass, ReactiveFormsModule],
  templateUrl: './textarea.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  hostDirectives: [ValueAccessorDirective],
})
export class GovUKTextareaComponent extends GovUKBaseInputDirective {
  readonly rows = input(2);
}
