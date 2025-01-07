import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import {
  argsToTemplate,
  moduleMetadata,
  type Meta,
  type StoryFn,
  type StoryObj,
} from '@storybook/angular';
import { GovUKRadioGroupComponent } from './radio-group.component';

const meta: Meta<GovUKRadioGroupComponent> = {
  component: GovUKRadioGroupComponent,
  title: 'Forms/GovUKRadioGroupComponent',
  decorators: [
    moduleMetadata({
      imports: [ReactiveFormsModule],
    }),
  ],
};

export default meta;
type Story = StoryObj<GovUKRadioGroupComponent>;

const Template: StoryFn<GovUKRadioGroupComponent> = (args) => ({
  props: { ...args, form: new FormGroup({ input: new FormControl(false) }) },
  template: `<form [formGroup]="form">
      <ngx-govuk-radio-group
        formControlName="input"
         ${argsToTemplate(args)}
      ></ngx-govuk-radio-group>
    </form>`,
});

export const Primary: Story = {
  render: Template,
  args: {
    options: [
      {
        value: 'a',
        label: 'Option A',
        hint: 'This is a hint',
        isDivided: true,
      },
      { value: 'b', label: 'Option B' },
      { value: 'c', label: 'Option C', isDivided: true },
    ],
    small: false,
    inline: false,
  },
};
