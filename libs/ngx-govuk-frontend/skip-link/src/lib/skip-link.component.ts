import { ChangeDetectionStrategy, Component, input } from '@angular/core';

/**
 * A component that renders a GOV.UK skip link.
 *
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
 * @property {string} href - The target ID to skip to. Defaults to "#content" if not provided.
 *
 * @see {@link https://design-system.service.gov.uk/components/skip-link/ GOV.UK Skip link}
 */
@Component({
  selector: 'ngx-govuk-skip-link',
  templateUrl: './skip-link.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GovUKSkipLinkComponent {
  readonly href = input<string>('#content');
}
