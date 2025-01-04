import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import {
  argsToTemplate,
  moduleMetadata,
  type Meta,
  type StoryFn,
  type StoryObj,
} from '@storybook/angular';
import { GovUKFormGroupDirective } from 'ngx-govuk-frontend/form-group';
import { GovUKPasswordInputComponent } from './password-input.component';

const meta: Meta<GovUKPasswordInputComponent> = {
  component: GovUKPasswordInputComponent,
  title: 'Forms/GovUKPasswordInputComponent',
  decorators: [
    moduleMetadata({
      imports: [ReactiveFormsModule],
    }),
  ],
};

export default meta;
type Story = StoryObj<GovUKFormGroupDirective & GovUKPasswordInputComponent>;

const Template: StoryFn<GovUKPasswordInputComponent> = (args) => ({
  props: { ...args, form: new FormGroup({ input: new FormControl('') }) },
  template: `<form [formGroup]="form">
      <ngx-govuk-password-input
        formControlName="input"
         ${argsToTemplate(args)}
      ></ngx-govuk-password-input>
    </form>`,
});

export const Primary: Story = {
  render: Template,
  args: {
    inputId: 'story1',
    label: 'Password',
    isPageTitle: true,
    autocomplete: 'off',
    extraClasses: '',
    hint: '',
  },
};
