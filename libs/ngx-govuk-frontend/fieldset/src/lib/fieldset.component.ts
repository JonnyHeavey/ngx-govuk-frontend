import {
  booleanAttribute,
  ChangeDetectionStrategy,
  Component,
  input,
} from '@angular/core';

/**
 * Component for rendering a GOV.UK Design System fieldset.
 *
 * Fieldsets group related form controls together, making forms easier to understand for users.
 * They provide a container for multiple form inputs with an optional legend, hint text, and error message.
 *
 * @see https://design-system.service.gov.uk/components/fieldset/
 */
@Component({
  selector: 'ngx-govuk-fieldset',
  templateUrl: './fieldset.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GovUKFieldsetComponent {
  /**
   * The legend text for the fieldset.
   * This is a required input that provides a heading for the grouped form controls.
   */
  readonly legend = input.required<string>();

  /**
   * Optional error message to display when there's a validation error.
   * When provided, the fieldset will be styled to indicate an error state.
   */
  readonly errorMessage = input<string>();

  /**
   * Optional hint text to provide additional guidance for filling in the form controls within the fieldset.
   */
  readonly hint = input<string>();

  /**
   * When true, renders the legend as an h1 element.
   * Useful for creating accessible forms where the fieldset legend doubles as the page heading.
   */
  readonly isPageTitle = input(false, { transform: booleanAttribute });
}
