import { ChangeDetectionStrategy, Component, input } from '@angular/core';

/**
 * This component implements the GOV.UK Design System skip link component.
 * It provides a way for keyboard users to bypass the top-level navigation links
 * and jump to the main content on a page.
 *
 * The skip link component is visually hidden until a keyboard press activates it.
 *
 * @example
 * ```html
 * <ngx-govuk-skip-link href="#main-content">Skip to main content</ngx-govuk-skip-link>
 * ```
 *
 * @see {@link https://design-system.service.gov.uk/components/skip-link/ GOV.UK Skip link}
 */
@Component({
  selector: 'ngx-govuk-skip-link',
  templateUrl: './skip-link.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GovUKSkipLinkComponent {
  /** The target ID to skip to. Defaults to "#content" if not provided. */
  readonly href = input<string>('#content');
}
