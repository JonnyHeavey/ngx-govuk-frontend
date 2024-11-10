import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { GovUKButtonComponent } from 'ngx-govuk-frontend/button';
import { GovUKTextInputComponent } from 'ngx-govuk-frontend/text-input';
import { GovUKTextareaComponent } from 'ngx-govuk-frontend/textarea';

@Component({
  standalone: true,
  imports: [
    RouterModule,
    GovUKButtonComponent,
    ReactiveFormsModule,
    GovUKTextInputComponent,
    GovUKTextareaComponent,
  ],
  selector: 'ngx-govuk-frontend-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  form = inject(FormBuilder).nonNullable.group({
    price: '',
    description: '',
  });

  constructor() {
    this.form.valueChanges.subscribe((changes) => {
      console.log('changes', changes);
    });
  }
}
