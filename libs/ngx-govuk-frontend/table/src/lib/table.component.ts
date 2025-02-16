import { CdkTableModule } from '@angular/cdk/table';
import {
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

@Component({
  selector: 'ngx-govuk-table',
  standalone: true,
  imports: [CdkTableModule],
  templateUrl: './table.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GovUKTableComponent {
  readonly columns = input.required<GovUKTableColumn[]>();
  readonly dataSource = input.required<unknown[]>();

  readonly caption = input<string>();
  readonly small = input(false);

  readonly columnKeys = computed(() =>
    this.columns().map((column) => column.key),
  );
}
