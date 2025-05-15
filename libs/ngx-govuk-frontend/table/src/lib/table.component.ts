import { CdkTableModule } from '@angular/cdk/table';
import {
  booleanAttribute,
  ChangeDetectionStrategy,
  Component,
  computed,
  input,
} from '@angular/core';

export type GovUKTableColumn = {
  header: string;
  key: string;
  isRowHeader?: boolean;
  isNumeric?: boolean;
  customClass?: string;
};

/**
 * This component implements the GOV.UK Design System table component.
 * It makes information easier to compare and scan for users.
 *
 * @see {@link https://design-system.service.gov.uk/components/table/ GOV.UK Table}
 */
@Component({
  selector: 'ngx-govuk-table',
  imports: [CdkTableModule],
  templateUrl: './table.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GovUKTableComponent {
  /** The columns configuration for the table. This input is required. */
  readonly columns = input.required<GovUKTableColumn[]>();

  /** The data to display in the table. This input is required. */
  readonly dataSource = input.required<unknown[]>();

  /** Optional caption for the table to describe its contents. */
  readonly caption = input<string>();

  /** Whether to use a smaller font size for the table. Defaults to false. */
  readonly small = input(false, { transform: booleanAttribute });

  /**
   * Computed array of column keys used to access data from the data source.
   * Created from the keys in the columns array.
   */
  readonly columnKeys = computed(() =>
    this.columns().map((column) => column.key),
  );
}
