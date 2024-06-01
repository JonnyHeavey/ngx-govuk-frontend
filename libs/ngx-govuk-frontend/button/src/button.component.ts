import { NgClass } from '@angular/common';
import { Component, input } from '@angular/core';

export type GovUKButtonColorType =
  | 'primary'
  | 'secondary'
  | 'warning'
  | 'inverse';

@Component({
  selector: 'ngx-govuk-button',
  standalone: true,
  imports: [NgClass],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss',
})
export class GovUKButtonComponent {
  disabled = input(false);
  start = input(false);
  color = input<GovUKButtonColorType>('primary');
}
