import { NgTemplateOutlet } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  contentChildren,
  input,
  model,
} from '@angular/core';
import { GovUKTabComponent } from '../tab/tab.component';

/**
 * This component implements the GOV.UK Design System tabs component.
 * It lets users navigate between related sections of content on the same page.
 *
 * @example
 * ```html
 * <ngx-govuk-tabs title="Contents">
 *   <ngx-govuk-tab heading="Past day">
 *     <p>Content for the past day tab panel</p>
 *   </ngx-govuk-tab>
 *   <ngx-govuk-tab heading="Past week">
 *     <p>Content for the past week tab panel</p>
 *   </ngx-govuk-tab>
 * </ngx-govuk-tabs>
 * ```
 *
 * @see {@link https://design-system.service.gov.uk/components/tabs/ GOV.UK Tabs}
 */
@Component({
  selector: 'ngx-govuk-tabs',
  imports: [NgTemplateOutlet],
  templateUrl: './tabs.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GovUKTabsComponent {
  /** The title for the tabs component. This input is required. */
  readonly title = input.required<string>();

  /** Collection of tab components that are children of this tabs component. */
  readonly tabs = contentChildren(GovUKTabComponent);

  /** Two-way binding model for the currently active tab index. Defaults to 0 (first tab). */
  readonly activeTab = model(0);

  /**
   * Selects a tab at the specified index.
   * @param index The index of the tab to select
   * @param event The event that triggered the selection
   */
  selectTab(index: number, event: Event): void {
    event.preventDefault();
    this.activeTab.set(index);
  }
}
