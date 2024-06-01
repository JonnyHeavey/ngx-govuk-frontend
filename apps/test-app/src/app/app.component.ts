import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgxGovukFrontendComponent } from 'ngx-govuk-frontend';

@Component({
  standalone: true,
  imports: [RouterModule, NgxGovukFrontendComponent],
  selector: 'ngx-govuk-frontend-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {}
