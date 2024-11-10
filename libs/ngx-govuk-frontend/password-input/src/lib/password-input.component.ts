import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import {
  ValueAccessorDirective,
  injectNgControl,
} from 'ngx-govuk-frontend/form-utils';

@Component({
  selector: 'ngx-govuk-password-input',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './password-input.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  hostDirectives: [ValueAccessorDirective],
})
export class GovUKPasswordInputComponent {
  readonly ngControl = injectNgControl();

  readonly isVisible = signal(false);

  toggleVisibility() {
    this.isVisible.set(!this.isVisible());
  }
}
