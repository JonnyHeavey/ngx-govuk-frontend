import {
  ChangeDetectionStrategy,
  Component,
  TemplateRef,
  input,
  viewChild,
} from '@angular/core';

/**
 * This component implements a navigation item in the GOV.UK Design System footer component.
 * It provides a link within a footer navigation section.
 *
 * @see {@link https://design-system.service.gov.uk/components/footer/ GOV.UK Footer}
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
