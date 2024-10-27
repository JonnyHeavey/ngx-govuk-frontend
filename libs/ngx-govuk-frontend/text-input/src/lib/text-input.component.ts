import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { injectNgControl, ValueAccessorDirective } from 'ngx-govuk-frontend/form-utils';

/**
 * @name GovUKTextInputComponent
 * 
 * @description
 * A component that represents a GOV.UK styled text input.
 * 
 * This component provides a text input with optional prefix and suffix elements.
 * It integrates with Angular's form control system.
 * 
 * @example
 * ```html
 * <form [formGroup]="form">
 *   <ngx-govuk-text-input
 *     formControlName="cost"
 *     prefix="$"
 *     suffix="per item"
 *   ></ngx-govuk-text-input>
 * </form>
 * ```
 */
@Component({
  selector: 'ngx-govuk-text-input',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './text-input.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  hostDirectives: [ValueAccessorDirective],
})
export class GovUKTextInputComponent {
  readonly ngControl = injectNgControl();

  readonly prefix = input('');
  readonly suffix = input('');
}
