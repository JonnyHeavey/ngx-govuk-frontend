import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { provideAnimations } from '@angular/platform-browser/animations';
import { Meta, StoryObj, applicationConfig } from '@storybook/angular';
import { GovUKDateInputComponent } from './date-input.component';

const meta: Meta<GovUKDateInputComponent> = {
  title: 'Forms/GovUKDateInputComponent',
  component: GovUKDateInputComponent,
  decorators: [
    applicationConfig({
      providers: [provideAnimations()],
    }),
  ],
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<GovUKDateInputComponent>;

// Create a form group for the stories
const setupForm = () => {
  return new FormGroup({
    dateField: new FormControl<string>('', Validators.required),
  });
};

// Basic date input
export const Default: Story = {
  render: () => ({
    props: {
      form: setupForm(),
    },
    template: `
        <form [formGroup]="form">
          <ngx-govuk-date-input
            formControlName="dateField"
            inputId="passport-issued"
          ></ngx-govuk-date-input>
        </form>
    `,
    moduleMetadata: {
      imports: [ReactiveFormsModule, GovUKDateInputComponent],
    },
  }),
};
