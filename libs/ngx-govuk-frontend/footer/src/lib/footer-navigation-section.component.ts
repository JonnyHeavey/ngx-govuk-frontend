import { NgTemplateOutlet } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  computed,
  contentChildren,
  input,
} from '@angular/core';
import { GovUKFooterNavigationItemComponent } from './footer-navigation-item.component';
/**
 * This component implements a navigation section in the GOV.UK Design System footer component.
 * It provides a grouped set of links with a title.
 *
 * @see {@link https://design-system.service.gov.uk/components/footer/ GOV.UK Footer}
 */
@Component({
  selector: 'ngx-govuk-footer-navigation-section',
  imports: [NgTemplateOutlet],
  template: `<div [class]="sectionClasses()">
    <h2 class="govuk-footer__heading govuk-heading-m">{{ title() }}</h2>
    <ul [class]="listClasses()">
      @for (item of navigationItems(); track item) {
        <li class="govuk-footer__list-item">
          <a
            class="govuk-footer__link"
            [attr.href]="item.href() ? item.href() : null"
          >
            <ng-container [ngTemplateOutlet]="item.content()" />
          </a>
        </li>
      }
    </ul>
  </div>`,
  styles: [
    `
      a {
        cursor: pointer;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GovUKFooterNavigationSectionComponent {
  /**
   * The title of the navigation section
   */
  readonly title = input.required<string>();

  /**
   * The number of columns to display navigation items in
   * @default 1
   */
  readonly columns = input<number>(1);

  /**
   * The width of the navigation section
   * Available values: 'full', 'one-half', 'one-third', 'two-thirds', 'one-quarter', 'three-quarters'
   * @default 'full'
   */
  readonly width = input<string>('full');

  /**
   * Query for all navigation item components using signal-based query
   */
  readonly navigationItems = contentChildren(
    GovUKFooterNavigationItemComponent,
  );

  /**
   * Computes CSS classes for the navigation section
   */
  readonly sectionClasses = computed(() => {
    const widthClass = this.width() ? `govuk-grid-column-${this.width()}` : '';
    return `govuk-footer__section ${widthClass}`.trim();
  });

  /**
   * Computes CSS classes for the navigation list
   */
  readonly listClasses = computed(() => {
    const columnsClass =
      this.columns() > 1 ? `govuk-footer__list--columns-${this.columns()}` : '';
    return `govuk-footer__list ${columnsClass}`.trim();
  });
}
