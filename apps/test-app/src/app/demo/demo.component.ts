import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import {
  GovUKAccordionComponent,
  GovUKAccordionItemComponent,
} from 'ngx-govuk-frontend/accordion';
import {
  GovUKButtonComponent,
  GovUKButtonGroupComponent,
} from 'ngx-govuk-frontend/button';
import { GovUKCookieBannerComponent } from 'ngx-govuk-frontend/cookie-banner';
import { GovUKDetailsComponent } from 'ngx-govuk-frontend/details';
import { GovUKInsetTextComponent } from 'ngx-govuk-frontend/inset-text';
import { GovUKNotificationBannerComponent } from 'ngx-govuk-frontend/notification-banner';
import { GovUKPaginationComponent } from 'ngx-govuk-frontend/pagination';
import { GovUKPanelComponent } from 'ngx-govuk-frontend/panel';
import {
  GovUKTableColumn,
  GovUKTableComponent,
} from 'ngx-govuk-frontend/table';
import { GovUKTabComponent, GovUKTabsComponent } from 'ngx-govuk-frontend/tabs';
import { GovUKTagComponent } from 'ngx-govuk-frontend/tag';
import { GovUKWarningTextComponent } from 'ngx-govuk-frontend/warning-text';

@Component({
  standalone: true,
  imports: [
    RouterModule,
    GovUKButtonGroupComponent,
    GovUKButtonComponent,
    GovUKCookieBannerComponent,
    GovUKDetailsComponent,
    GovUKInsetTextComponent,
    GovUKNotificationBannerComponent,
    GovUKPaginationComponent,
    GovUKPanelComponent,
    GovUKTagComponent,
    GovUKWarningTextComponent,
    GovUKTabsComponent,
    GovUKTabComponent,
    GovUKTableComponent,
    GovUKAccordionComponent,
    GovUKAccordionItemComponent,
  ],
  selector: 'ngx-govuk-frontend-demo',
  templateUrl: './demo.component.html',
})
export class DemoComponent {
  readonly columns: GovUKTableColumn[] = [
    {
      header: 'Name',
      key: 'name',
      isRowHeader: true,
      customClass: 'govuk-!-width-one-half',
    },
    {
      header: 'Age',
      key: 'age',
      isNumeric: true,
    },
    {
      header: 'Gender',
      key: 'gender',
    },
  ];
  readonly dataSource = [
    { name: 'Alice', age: 25, gender: 'M' },
    { name: 'Bob', age: 30, gender: 'F' },
  ];

  readonly initialExpandedItems = ['1', '3'];

  // Dynamic pagination examples
  currentPage = 1;
  totalItems = 100;
  itemsPerPage = 10;

  // First page example
  firstPageCurrent = 1;

  // Last page example
  lastPageCurrent = 3;
  lastPageTotal = 3;

  onPageChange(pageNumber: number): void {
    console.log('Page changed:', pageNumber);
    this.currentPage = pageNumber;
  }

  onPreviousClick(): void {
    console.log('Previous clicked');
    if (this.currentPage > 1) {
      this.currentPage--;
    }
  }

  onNextClick(): void {
    console.log('Next clicked');
    if (this.currentPage < Math.ceil(this.totalItems / this.itemsPerPage)) {
      this.currentPage++;
    }
  }
}
