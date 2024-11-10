import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import {
  ValueAccessorDirective,
  injectNgControl,
} from 'ngx-govuk-frontend/form-utils';
/**
 * @name GovUKTextareaComponent
 *
 * @description
 * A component that represents a GOV.UK styled textarea input.
 *
 * This component provides a textarea input that integrates with Angular's form control system.
 * It can be used within forms to capture multi-line text input.
 *
 * @example
 * ```html
 * <form [formGroup]="form">
 *   <ngx-govuk-textarea
 *     formControlName="description"
 *   ></ngx-govuk-textarea>
 * </form>
 * ```
 */
@Component({
  selector: 'ngx-govuk-textarea',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './textarea.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  hostDirectives: [ValueAccessorDirective],
})
export class GovUKTextareaComponent {
  readonly ngControl = injectNgControl();
}
