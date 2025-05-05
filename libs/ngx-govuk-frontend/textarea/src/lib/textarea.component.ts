import { NgClass } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  computed,
  DestroyRef,
  inject,
  input,
  OnInit,
  signal,
  WritableSignal,
} from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { ReactiveFormsModule } from '@angular/forms';
import {
  GovUKCommonFormInputDirective,
  injectNgControl,
  inputCommonInputs,
  ValueAccessorDirective,
} from 'ngx-govuk-frontend/form-utils';

/**
 * A textarea component that follows the GOV.UK Design System guidelines.
 *
 * @example
 * ```html
 * <ngx-govuk-textarea
 *   formControlName="detail"
 *   inputId="detail"
 *   [rows]="5"
 * ></ngx-govuk-textarea>
 * ```
 *
 * @example
 * ```html
 * <ngx-govuk-textarea
 *   formControlName="detail"
 *   inputId="detail"
 *   [rows]="5"
 *   [maxLength]="200"
 *   [showCharacterCount]="true"
 * ></ngx-govuk-textarea>
 * ```
 *
 * @property {string} autocomplete - HTML autocomplete attribute value
 * @property {string} extraClasses - Additional CSS classes to apply to the textarea
 * @property {string} inputId - Required. The ID attribute for the input element.
 * @property {number} rows - Number of visible text rows for the textarea. Defaults to 2.
 * @property {number} maxLength - Optional. Maximum number of characters allowed in the textarea.
 * @property {boolean} showCharacterCount - Optional. Whether to show the character count. Defaults to false.
 */
@Component({
    selector: 'ngx-govuk-textarea',
    imports: [NgClass, ReactiveFormsModule],
    templateUrl: './textarea.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    hostDirectives: [
        ValueAccessorDirective,
        { directive: GovUKCommonFormInputDirective, inputs: inputCommonInputs },
    ]
})
export class GovUKTextareaComponent implements OnInit {
  readonly ngControl = injectNgControl();
  readonly commonFormInput = inject(GovUKCommonFormInputDirective);

  private readonly destroyRef = inject(DestroyRef);

  readonly rows = input(2);
  readonly maxLength = input<number | null>(null);
  readonly showCharacterCount = input(false);

  private readonly currentLength: WritableSignal<number> = signal(0);
  private readonly remainingCharacters = computed(() => {
    const maxLength = this.maxLength();
    return maxLength === null ? null : maxLength - this.currentLength();
  });

  readonly characterCountMessage = computed(() => {
    const remaining = this.remainingCharacters();

    if (this.maxLength() === null || remaining === null) {
      return null;
    }

    if (remaining < 0) {
      const overLimit = Math.abs(remaining);
      return `You have ${overLimit} ${overLimit === 1 ? 'character' : 'characters'} too many`;
    }

    return `You have ${remaining} ${remaining === 1 ? 'character' : 'characters'} remaining`;
  });

  ngOnInit(): void {
    this.ngControl.valueChanges
      ?.pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe((value) => this.currentLength.set(value.length));
  }
}
