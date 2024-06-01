import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { GovUKButtonComponent } from 'ngx-govuk-frontend/button';

@Component({
  standalone: true,
  imports: [RouterModule, GovUKButtonComponent],
  selector: 'ngx-govuk-frontend-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {}
