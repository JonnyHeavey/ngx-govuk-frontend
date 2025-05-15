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

/**
 * This component implements the GOV.UK Design System tag component.
 * It provides a way to highlight the status of something, such as a project phase or content status.
 *
 * @see https://design-system.service.gov.uk/components/tag/
 */
@Component({
  selector: 'ngx-govuk-tag',
  imports: [NgClass],
  templateUrl: './tag.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GovUKTagComponent {
  /** The color of the tag. Defaults to 'blue'. */
  readonly color = input<GovUKTagColor>('blue');

  /** Additional CSS classes to apply to the tag. */
  readonly extraClasses = input<string>();

  /** Computed CSS classes based on the color and any extra classes provided. */
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
