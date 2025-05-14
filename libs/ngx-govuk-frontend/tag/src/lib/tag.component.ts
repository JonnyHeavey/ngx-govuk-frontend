import { NgClass } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  computed,
  input,
} from '@angular/core';

export type GovUKTagColor =
  | 'grey'
  | 'green'
  | 'turquoise'
  | 'blue'
  | 'light-blue'
  | 'purple'
  | 'pink'
  | 'red'
  | 'orange'
  | 'yellow';

@Component({
  selector: 'ngx-govuk-tag',
  imports: [NgClass],
  templateUrl: './tag.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GovUKTagComponent {
  readonly color = input<GovUKTagColor>('blue');
  readonly extraClasses = input<string>();

  readonly classes = computed(
    () => `${this.colorClasses[this.color()]} ${this.extraClasses()}`,
  );

  private readonly colorClasses: Record<GovUKTagColor, string> = {
    grey: 'govuk-tag--grey',
    green: 'govuk-tag--green',
    turquoise: 'govuk-tag--turquoise',
    blue: 'govuk-tag--blue',
    'light-blue': 'govuk-tag--light-blue',
    purple: 'govuk-tag--purple',
    pink: 'govuk-tag--pink',
    red: 'govuk-tag--red',
    orange: 'govuk-tag--orange',
    yellow: 'govuk-tag--yellow',
  };
}
