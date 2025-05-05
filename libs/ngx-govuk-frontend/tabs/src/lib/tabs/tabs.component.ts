import { NgTemplateOutlet } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  contentChildren,
  input,
  model,
} from '@angular/core';
import { GovUKTabComponent } from '../tab/tab.component';

@Component({
    selector: 'ngx-govuk-tabs',
    imports: [NgTemplateOutlet],
    templateUrl: './tabs.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class GovUKTabsComponent {
  readonly title = input.required<string>();

  readonly tabs = contentChildren(GovUKTabComponent);

  readonly activeTab = model(0);

  selectTab(index: number, event: Event): void {
    event.preventDefault();
    this.activeTab.set(index);
  }
}
