import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'ngx-govuk-frontend-ngx-govuk-frontend',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ngx-govuk-frontend.component.html',
  styleUrls: ['./ngx-govuk-frontend.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NgxGovukFrontendComponent {}
