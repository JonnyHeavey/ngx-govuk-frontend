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

@Component({
  standalone: true,
  imports: [NgTemplateOutlet],
  selector: 'ngx-govuk-accordion',
  templateUrl: './accordion.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  hostDirectives: [CdkAccordion],
})
export class GovUKAccordionComponent {
  readonly id = input.required<string>();
  readonly initialExpanded = input<string[]>([]);

  readonly expandedItems = model<string[]>([]);

  readonly items = contentChildren(GovUKAccordionItemComponent);

  readonly allExpanded = computed(() => {
    const allItems = this.items();
    const expandedItems = this.expandedItems();
    return (
      allItems.length > 0 &&
      allItems.every((item) => expandedItems.includes(item.itemId()))
    );
  });

  constructor() {
    effect(
      () => {
        const initialExpandedItems = this.expandedItems();
        const initialExpanded = this.initialExpanded();

        if (initialExpandedItems.length === 0 && initialExpanded.length > 0) {
          this.expandedItems.set([...initialExpanded]);
        }
      },
      { allowSignalWrites: true },
    );
  }

  isExpanded(itemId: string): boolean {
    return this.expandedItems().includes(itemId);
  }

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

  toggleAll(): void {
    if (this.allExpanded()) {
      this.expandedItems.set([]);
    } else {
      this.expandedItems.set(this.items().map((item) => item.itemId()));
    }
  }
}
