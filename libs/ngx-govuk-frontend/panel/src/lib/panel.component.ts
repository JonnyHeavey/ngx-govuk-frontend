import { Component, input } from '@angular/core';

@Component({
  selector: 'ngx-govuk-panel',
  standalone: true,
  templateUrl: './panel.component.html',
})
export class GovUKPanelComponent {
  title = input.required<string>();
}
