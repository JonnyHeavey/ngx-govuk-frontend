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
 * Footer navigation section component for use within the GOV.UK footer navigation
 * Provides a section for navigation items with a title
 *
 * @example
 * ```html
 * <ngx-govuk-footer-navigation-section title="Services and information" columns="2" width="two-thirds">
 *   <ngx-govuk-footer-navigation-item routerLink="/benefits">Benefits</ngx-govuk-footer-navigation-item>
 *   <ngx-govuk-footer-navigation-item href="/business">Business and self-employed</ngx-govuk-footer-navigation-item>
 * </ngx-govuk-footer-navigation-section>
 * ```
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
