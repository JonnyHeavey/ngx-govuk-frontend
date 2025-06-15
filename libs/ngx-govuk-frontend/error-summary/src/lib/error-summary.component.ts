import {
  afterNextRender,
  ChangeDetectionStrategy,
  Component,
  contentChildren,
  ElementRef,
  inject,
  input,
} from '@angular/core';
import { RouterLink } from '@angular/router';
import { GovUKErrorSummaryItemDirective } from './error-summary-item.directive';

/**
 * Component for displaying a GOV.UK error summary
 *
 * Use this component at the top of a page to summarise any errors a user has made.
 * When a user makes an error, you should show both an error summary and an error message
 * next to each answer that contains an error.
 *
 * This component implements the GOV.UK Design System error summary component.
 * It helps users understand what went wrong and how to fix it.
 *
 * @see https://design-system.service.gov.uk/components/error-summary/
 *
 * ## Router Configuration
 *
 * The component uses Angular Router's fragment navigation for scrolling to error elements.
 * You must enable anchor scrolling in your application's router configuration for proper
 * scrolling behavior when users click on error links.
 */
@Component({
  selector: 'ngx-govuk-error-summary',
  templateUrl: './error-summary.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterLink],
})
export class GovUKErrorSummaryComponent {
  private elementRef = inject(ElementRef);

  /**
   * Query for all error summary item directives using signal-based query
   * This allows the component to iterate through the child error items
   */
  readonly errorItems = contentChildren(GovUKErrorSummaryItemDirective);

  /**
   * Text to use for the heading of the error summary block
   */
  readonly title = input<string>('There is a problem');

  constructor() {
    // Focus on the error summary when it's rendered
    afterNextRender(() => {
      const element = this.elementRef.nativeElement as HTMLElement;
      element.focus();
    });
  }
}
