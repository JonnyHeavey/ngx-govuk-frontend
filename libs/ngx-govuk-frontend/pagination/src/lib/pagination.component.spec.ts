import { Component, viewChild } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GovUKPaginationComponent } from './pagination.component';

@Component({
  template: `
    <ngx-govuk-pagination
      [itemCount]="itemCount"
      [itemsPerPage]="itemsPerPage"
      [currentPage]="currentPage"
      [mode]="mode"
      [previousTitle]="previousTitle"
      [previousLabel]="previousLabel"
      [nextTitle]="nextTitle"
      [nextLabel]="nextLabel"
      (pageChange)="onPageChange($event)"
      (previousClick)="onPreviousClick()"
      (nextClick)="onNextClick()"
    ></ngx-govuk-pagination>
  `,
  standalone: true,
  imports: [GovUKPaginationComponent],
})
class TestHostComponent {
  itemCount = 100;
  itemsPerPage = 10;
  currentPage = 5;
  mode: 'list' | 'block' = 'list';
  previousTitle = 'Previous';
  previousLabel: string | null = null;
  nextTitle = 'Next';
  nextLabel: string | null = null;

  pageChangeEvent: number | null = null;
  previousClickCalled = false;
  nextClickCalled = false;

  component = viewChild.required(GovUKPaginationComponent);

  onPageChange(page: number): void {
    this.pageChangeEvent = page;
  }

  onPreviousClick(): void {
    this.previousClickCalled = true;
  }

  onNextClick(): void {
    this.nextClickCalled = true;
  }
}

describe('GovUKPaginationComponent', () => {
  let hostComponent: TestHostComponent;
  let component: GovUKPaginationComponent;
  let fixture: ComponentFixture<TestHostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TestHostComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TestHostComponent);
    hostComponent = fixture.componentInstance;
    fixture.detectChanges();
    component = hostComponent.component();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('List mode', () => {
    it('should render pagination with correct number of items', () => {
      const pageItems = fixture.nativeElement.querySelectorAll(
        '.govuk-pagination__item',
      );
      // For page 5 with 100 items (10 pages), we expect 7 items (including ellipses)
      expect(pageItems.length).toBe(7);
    });

    it('should mark current page as active', () => {
      const currentPageItem = fixture.nativeElement.querySelector(
        '.govuk-pagination__item--current a',
      );
      expect(currentPageItem).toBeTruthy();
      expect(currentPageItem.textContent.trim()).toBe('5');
      expect(currentPageItem.getAttribute('aria-current')).toBe('page');
    });

    it('should render ellipsis correctly', () => {
      const ellipsisItems = fixture.nativeElement.querySelectorAll(
        '.govuk-pagination__ellipsis',
      );
      expect(ellipsisItems.length).toBe(2); // Two ellipses in middle view
    });

    it('should emit pageChange event when clicking a page', () => {
      // Find a page item that's not the current page - Page 1 link
      const pageOneLink = fixture.nativeElement.querySelector(
        '.govuk-pagination__item:not(.govuk-pagination__item--current) a',
      );
      expect(pageOneLink).toBeTruthy();
      pageOneLink.click();
      fixture.detectChanges();

      // First page link should be page 1
      expect(hostComponent.pageChangeEvent).toBe(1);
    });

    it('should not emit pageChange for ellipsis items', () => {
      const ellipsisItems = fixture.nativeElement.querySelectorAll(
        '.govuk-pagination__ellipsis',
      );
      if (ellipsisItems[0].parentElement) {
        (ellipsisItems[0].parentElement as HTMLElement).click();
      }
      fixture.detectChanges();

      expect(hostComponent.pageChangeEvent).toBeNull();
    });
  });

  describe('Previous and Next buttons', () => {
    it('should render previous button with correct text', () => {
      const prevButton = fixture.nativeElement.querySelector(
        '.govuk-pagination__prev .govuk-pagination__link-title',
      );
      expect(prevButton).toBeTruthy();
      // Use startsWith to handle the "page" text that follows
      expect(prevButton.textContent.trim().startsWith('Previous')).toBeTruthy();
    });

    it('should render next button with correct text', () => {
      const nextButton = fixture.nativeElement.querySelector(
        '.govuk-pagination__next .govuk-pagination__link-title',
      );
      expect(nextButton).toBeTruthy();
      // Use startsWith to handle the "page" text that follows
      expect(nextButton.textContent.trim().startsWith('Next')).toBeTruthy();
    });

    it('should emit previousClick event when clicking previous button', () => {
      const prevButton = fixture.nativeElement.querySelector(
        '.govuk-pagination__prev .govuk-pagination__link',
      );
      prevButton.click();
      fixture.detectChanges();

      expect(hostComponent.previousClickCalled).toBe(true);
    });

    it('should emit nextClick event when clicking next button', () => {
      const nextButton = fixture.nativeElement.querySelector(
        '.govuk-pagination__next .govuk-pagination__link',
      );
      nextButton.click();
      fixture.detectChanges();

      expect(hostComponent.nextClickCalled).toBe(true);
    });

    it('should hide previous button on first page', () => {
      hostComponent.currentPage = 1;
      fixture.detectChanges();

      const prevButton = fixture.nativeElement.querySelector(
        '.govuk-pagination__prev',
      );
      expect(prevButton).toBeFalsy();
    });

    it('should hide next button on last page', () => {
      hostComponent.currentPage = 10; // Last page (100 items, 10 per page)
      fixture.detectChanges();

      const nextButton = fixture.nativeElement.querySelector(
        '.govuk-pagination__next',
      );
      expect(nextButton).toBeFalsy();
    });

    it('should use custom button text when provided', () => {
      hostComponent.previousTitle = 'Go back';
      hostComponent.nextTitle = 'Continue';
      fixture.detectChanges();

      const prevButton = fixture.nativeElement.querySelector(
        '.govuk-pagination__prev .govuk-pagination__link-title',
      );
      const nextButton = fixture.nativeElement.querySelector(
        '.govuk-pagination__next .govuk-pagination__link-title',
      );

      expect(prevButton.textContent.trim().startsWith('Go back')).toBeTruthy();
      expect(nextButton.textContent.trim().startsWith('Continue')).toBeTruthy();
    });
  });

  describe('Block mode', () => {
    beforeEach(() => {
      hostComponent.mode = 'block';
      hostComponent.previousLabel = 'Application details';
      hostComponent.nextLabel = 'Check your answers';
      fixture.detectChanges();
    });

    it('should add block mode class', () => {
      const paginationElement =
        fixture.nativeElement.querySelector('.govuk-pagination');
      expect(
        paginationElement.classList.contains('govuk-pagination--block'),
      ).toBeTruthy();
    });

    it('should not render page items in block mode', () => {
      const paginationList = fixture.nativeElement.querySelector(
        '.govuk-pagination__list',
      );
      expect(paginationList).toBeFalsy();
    });

    it('should render labels in block mode', () => {
      const prevLabel = fixture.nativeElement.querySelector(
        '.govuk-pagination__prev .govuk-pagination__link-label',
      );
      const nextLabel = fixture.nativeElement.querySelector(
        '.govuk-pagination__next .govuk-pagination__link-label',
      );

      expect(prevLabel).toBeTruthy();
      expect(nextLabel).toBeTruthy();
      expect(prevLabel.textContent.trim()).toBe('Application details');
      expect(nextLabel.textContent.trim()).toBe('Check your answers');
    });
  });

  describe('Edge cases', () => {
    it('should handle zero items correctly', () => {
      hostComponent.itemCount = 0;
      fixture.detectChanges();

      const pageItems = fixture.nativeElement.querySelectorAll(
        '.govuk-pagination__item',
      );
      expect(pageItems.length).toBe(0);
    });

    it('should handle few pages correctly', () => {
      hostComponent.itemCount = 25;
      hostComponent.itemsPerPage = 10;
      hostComponent.currentPage = 2;
      fixture.detectChanges();

      const pageItems = fixture.nativeElement.querySelectorAll(
        '.govuk-pagination__item',
      );
      expect(pageItems.length).toBe(3); // 3 pages, no ellipses
      const ellipsisItems = fixture.nativeElement.querySelectorAll(
        '.govuk-pagination__ellipsis',
      );
      expect(ellipsisItems.length).toBe(0);
    });
  });
});
