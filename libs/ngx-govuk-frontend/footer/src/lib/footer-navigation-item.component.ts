import {
  ChangeDetectionStrategy,
  Component,
  TemplateRef,
  input,
  viewChild,
} from '@angular/core';

/**
 * Footer navigation item component for use within the GOV.UK footer navigation section
 * Provides a navigation link within a section
 *
 * @example
 * ```html
 * <ngx-govuk-footer-navigation-item href="/benefits">Benefits</ngx-govuk-footer-navigation-item>
 * ```
 */
@Component({
  selector: 'ngx-govuk-footer-navigation-item',
  template: `<ng-template #content><ng-content /></ng-template>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GovUKFooterNavigationItemComponent {
  /**
   * The URL of the navigation link
   */
  readonly href = input<string>();

  /**
   * The content of the navigation item
   */
  readonly content = viewChild.required<TemplateRef<unknown>>('content');
}
