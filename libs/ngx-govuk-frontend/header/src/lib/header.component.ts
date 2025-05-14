import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';

/**
 * This component implements the GOV.UK Design System header component.
 * It helps users identify what service they are using and navigate between pages.
 *
 * @example
 * ```html
 * <ngx-govuk-header logoLink="/">
 *   My Service
 * </ngx-govuk-header>
 * ```
 *
 * @example With service name
 * ```html
 * <ngx-govuk-header logoLink="/" appName="Service Name" appLink="/dashboard">
 *   GOV.UK
 * </ngx-govuk-header>
 * ```
 *
 * @see {@link https://design-system.service.gov.uk/components/header/ GOV.UK Header}
 */
@Component({
  selector: 'ngx-govuk-header',
  imports: [RouterLink],
  templateUrl: './header.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GovUKHeaderComponent {
  /** The URL for the GOV.UK logo to link to. This input is required. */
  readonly logoLink = input.required<string>();

  /** The name of the service or application using this header. Optional. */
  readonly appName = input<string>();

  /** The URL that the service name links to. Optional. */
  readonly appLink = input<string>();
}
