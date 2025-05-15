import { ChangeDetectionStrategy, Component, input } from '@angular/core';

/**
 * This component implements the GOV.UK Design System skip link component.
 * It provides a link at the top of the page that helps keyboard users skip to the main content.
 *
 * @see https://design-system.service.gov.uk/components/skip-link/
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
