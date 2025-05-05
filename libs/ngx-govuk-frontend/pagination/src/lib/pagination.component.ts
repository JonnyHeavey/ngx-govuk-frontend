import {
  ChangeDetectionStrategy,
  Component,
  computed,
  input,
  output,
} from '@angular/core';

/**
 * Internal interface for pagination items
 */
interface PageItem {
  /** The number/text to display for the item */
  number: string;
  /** Whether this is the current active page */
  current?: boolean;
  /** Whether to display this item as an ellipsis */
  ellipsis?: boolean;
  /** Actual page number for this item */
  pageNumber?: number;
  /** Unique identifier for tracking in loops */
  id: string;
}

/**
 * Pagination mode - defines layout and behavior
 */
export type PaginationMode = 'block' | 'list';

/**
 * A pagination component following the GovUK Design System
 * @component
 *
 * @example
 * <ngx-govuk-pagination
 *   [itemCount]="100"
 *   [itemsPerPage]="10"
 *   [currentPage]="1"
 *   (pageChange)="onPageChange($event)"
 * ></ngx-govuk-pagination>
 */
@Component({
  selector: 'ngx-govuk-pagination',
  standalone: true,
  templateUrl: './pagination.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GovUKPaginationComponent {
  /** Total number of items */
  itemCount = input<number>(0);

  /** Number of items per page */
  itemsPerPage = input<number>(10);

  /** Current page number (1-based) */
  currentPage = input<number>(1);

  /** Pagination mode - 'block' or 'list' */
  mode = input<PaginationMode>('list');

  /** Title for the previous button */
  previousTitle = input<string>('Previous');

  /** Label for the previous button (additional context) */
  previousLabel = input<string | null>(null);

  /** Title for the next button */
  nextTitle = input<string>('Next');

  /** Label for the next button (additional context) */
  nextLabel = input<string | null>(null);

  /** Output event when a pagination item is clicked */
  pageChange = output<number>();

  /** Output event when the previous link is clicked */
  previousClick = output<void>();

  /** Output event when the next link is clicked */
  nextClick = output<void>();

  /** Counter for generating unique IDs */
  private ellipsisCounter = 0;

  /** Computed total number of pages */
  totalPages = computed(() =>
    Math.ceil(this.itemCount() / this.itemsPerPage()),
  );

  /** Computed flag for whether previous button should be shown */
  hasPreviousPage = computed(() => this.currentPage() > 1);

  /** Computed flag for whether next button should be shown */
  hasNextPage = computed(() => this.currentPage() < this.totalPages());

  /** Computed check if mode is block */
  isBlockMode = computed(() => this.mode() === 'block');

  /** Computed pagination items */
  computedItems = computed(() => {
    const totalPages = this.totalPages();
    if (totalPages <= 0) {
      return [];
    }

    // Simple case: 7 or fewer pages, show all
    if (totalPages <= 7) {
      return this.createSequentialItems(1, totalPages);
    }

    const currentPage = this.currentPage();
    const items: PageItem[] = [];

    // Always show first page
    items.push(this.createPageItem(1));

    // Complex case: more than 7 pages, show ellipses
    if (currentPage <= 4) {
      // Near the start: show 1 2 3 4 5 ... 100
      items.push(...this.createSequentialItems(2, 5));
      items.push(this.createEllipsisItem());
      items.push(this.createPageItem(totalPages));
    } else if (currentPage >= totalPages - 3) {
      // Near the end: show 1 ... 96 97 98 99 100
      items.push(this.createEllipsisItem());
      items.push(...this.createSequentialItems(totalPages - 4, totalPages));
    } else {
      // In the middle: show 1 ... 49 50 51 ... 100
      items.push(this.createEllipsisItem());
      items.push(
        ...this.createSequentialItems(currentPage - 1, currentPage + 1),
      );
      items.push(this.createEllipsisItem());
      items.push(this.createPageItem(totalPages));
    }

    return items;
  });

  /**
   * Handle page number click
   */
  onPageClick(item: PageItem): void {
    if (!item.ellipsis && item.pageNumber) {
      this.pageChange.emit(item.pageNumber);
    }
  }

  /**
   * Creates a page item for the specified page number
   */
  private createPageItem(pageNumber: number): PageItem {
    return {
      number: String(pageNumber),
      current: pageNumber === this.currentPage(),
      pageNumber: pageNumber,
      id: `page-${pageNumber}`,
    };
  }

  /**
   * Creates an ellipsis item
   */
  private createEllipsisItem(): PageItem {
    return {
      number: '',
      ellipsis: true,
      id: `ellipsis-${++this.ellipsisCounter}`,
    };
  }

  /**
   * Creates an array of sequential page items
   */
  private createSequentialItems(start: number, end: number): PageItem[] {
    const items: PageItem[] = [];
    for (let i = start; i <= end; i++) {
      items.push(this.createPageItem(i));
    }
    return items;
  }
}
