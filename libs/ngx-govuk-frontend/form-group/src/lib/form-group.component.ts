import {
  booleanAttribute,
  ChangeDetectionStrategy,
  Component,
  input,
} from '@angular/core';

/**
 * This component implements the GOV.UK Design System form group wrapper.
 * It provides the GOV.UK form group styling and layout for form controls.
 *
 * @see https://design-system.service.gov.uk/components/text-input/
 */
@Component({
  selector: 'ngx-govuk-form-group',
  templateUrl: './form-group.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GovUKFormGroupComponent {
  readonly label = input<string>();
  readonly labelFor = input<string>();

  readonly errorMessage = input<string>();
  readonly hint = input<string>();
  readonly isPageTitle = input(false, { transform: booleanAttribute });
}
