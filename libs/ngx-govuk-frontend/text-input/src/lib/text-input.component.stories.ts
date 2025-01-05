import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import {
  argsToTemplate,
  moduleMetadata,
  type Meta,
  type StoryFn,
  type StoryObj,
} from '@storybook/angular';
import { GovUKCommonFormInputDirective } from 'ngx-govuk-frontend/form-utils';
import { GovUKTextInputComponent } from './text-input.component';

const meta: Meta<GovUKTextInputComponent> = {
  component: GovUKTextInputComponent,
  title: 'Forms/GovUKTextInputComponent',
  decorators: [
    moduleMetadata({
      imports: [ReactiveFormsModule],
    }),
  ],
};

export default meta;
type Story = StoryObj<GovUKCommonFormInputDirective & GovUKTextInputComponent>;

const Template: StoryFn<GovUKTextInputComponent> = (args) => ({
  props: { ...args, form: new FormGroup({ input: new FormControl('') }) },
  template: `<form [formGroup]="form">
      <ngx-govuk-text-input
        formControlName="input"
         ${argsToTemplate(args)}
      ></ngx-govuk-text-input>
    </form>`,
});

export const Primary: Story = {
  render: Template,
  args: {
    inputId: 'story1',
    autocomplete: 'off',
    extraClasses: '',
    prefix: '',
    suffix: '',
  },
};
