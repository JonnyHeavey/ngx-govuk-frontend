import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import {
  argsToTemplate,
  moduleMetadata,
  type Meta,
  type StoryFn,
  type StoryObj,
} from '@storybook/angular';
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
type Story = StoryObj<GovUKTextInputComponent>;

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
    label: 'What is the name of the event?',
    isPageTitle: true,
    autocomplete: 'off',
    extraClasses: '',
    hint: "The name you'll use on promotional material",
    prefix: '',
    suffix: '',
  },
};
