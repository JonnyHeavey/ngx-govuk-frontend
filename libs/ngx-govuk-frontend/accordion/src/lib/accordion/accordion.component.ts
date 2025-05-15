import { CdkAccordion } from '@angular/cdk/accordion';
import { NgTemplateOutlet } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  computed,
  contentChildren,
  effect,
  input,
  model,
} from '@angular/core';
import { GovUKAccordionItemComponent } from '../accordion-item/accordion-item.component';

/**
 * This component implements the GOV.UK Design System accordion component.
 * It allows users to show and hide sections of related content on a page.
 *
 * @see https://design-system.service.gov.uk/components/accordion/
 */
@Component({
  imports: [NgTemplateOutlet],
  selector: 'ngx-govuk-accordion',
  templateUrl: './accordion.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  hostDirectives: [CdkAccordion],
})
export class GovUKAccordionComponent {
  /** The unique identifier for the accordion. This input is required. */
  readonly id = input.required<string>();

  /**
   * IDs of accordion items that should be expanded when the accordion first renders.
   * Defaults to an empty array (all items collapsed).
   */
  readonly initialExpanded = input<string[]>([]);

  /**
   * Two-way binding model for the currently expanded accordion items.
   * Contains an array of item IDs that are expanded.
   */
  readonly expandedItems = model<string[]>([]);

  /** Collection of accordion item components that are children of this accordion. */
  readonly items = contentChildren(GovUKAccordionItemComponent);

  /**
   * Computed property that determines if all accordion items are currently expanded.
   * Returns true only if there are items and all of them are expanded.
   */
  readonly allExpanded = computed(() => {
    const allItems = this.items();
    const expandedItems = this.expandedItems();
    return (
      allItems.length > 0 &&
      allItems.every((item) => expandedItems.includes(item.itemId()))
    );
  });

  constructor() {
    effect(() => {
      const initialExpandedItems = this.expandedItems();
      const initialExpanded = this.initialExpanded();

      if (initialExpandedItems.length === 0 && initialExpanded.length > 0) {
        this.expandedItems.set([...initialExpanded]);
      }
    });
  }

  /**
   * Checks if a specific accordion item is expanded.
   * @param itemId The ID of the accordion item to check
   * @returns True if the item is expanded, false otherwise
   */
  isExpanded(itemId: string): boolean {
    return this.expandedItems().includes(itemId);
  }

  /**
   * Toggles the expanded state of a specific accordion item.
   * If the item is collapsed, it will be expanded, and vice versa.
   * @param itemId The ID of the accordion item to toggle
   */
  toggleItem(itemId: string): void {
    const currentExpanded = this.expandedItems();
    const index = currentExpanded.indexOf(itemId);

    if (index === -1) {
      this.expandedItems.set([...currentExpanded, itemId]);
    } else {
      const newExpanded = [...currentExpanded];
      newExpanded.splice(index, 1);
      this.expandedItems.set(newExpanded);
    }
  }

  /**
   * Toggles all accordion items between expanded and collapsed states.
   * If all items are currently expanded, collapses all items.
   * If any items are collapsed, expands all items.
   */
  toggleAll(): void {
    if (this.allExpanded()) {
      this.expandedItems.set([]);
    } else {
      this.expandedItems.set(this.items().map((item) => item.itemId()));
    }
  }
}
