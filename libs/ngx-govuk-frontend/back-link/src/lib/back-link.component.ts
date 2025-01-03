import { NgClass } from '@angular/common';
import { ChangeDetectionStrategy, Component, input } from '@angular/core';

/**
 * A component that renders a GOV.UK back link.
 *
 * This component implements the GOV.UK Design System back link component.
 * It provides a consistent way to help users navigate back to the previous page.
 *
 * @example
 * ```html
 * <ngx-govuk-back-link></ngx-govuk-back-link>
 * ```
 *
 * @example With inverse color scheme
 * ```html
 * <ngx-govuk-back-link [inverse]="true"></ngx-govuk-back-link>
 * ```
 *
 * @property {boolean} inverse - When true, displays the back link in inverse colors
 *                              for use on darker backgrounds. Defaults to false.
 *
 * @see {@link https://design-system.service.gov.uk/components/back-link/ GOV.UK Back link}
 */
@Component({
  selector: 'ngx-govuk-back-link',
  standalone: true,
  imports: [NgClass],
  templateUrl: './back-link.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GovUKBackLinkComponent {
  readonly inverse = input(false);
}
