import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import {
  argsToTemplate,
  moduleMetadata,
  type Meta,
  type StoryFn,
  type StoryObj,
} from '@storybook/angular';
import { GovUKRadioGroupComponent } from './radio-group.component';
import { GovUKRadioOptionDirective } from './radio-option.directive';

const meta: Meta<GovUKRadioGroupComponent> = {
  component: GovUKRadioGroupComponent,
  title: 'Forms/GovUKRadioGroupComponent',
  decorators: [
    moduleMetadata({
      imports: [ReactiveFormsModule, GovUKRadioOptionDirective],
    }),
  ],
  argTypes: {
    small: {
      control: {
        type: 'boolean',
      },
    },
    inline: {
      control: {
        type: 'boolean',
      },
    },
  },
};

export default meta;
type Story = StoryObj<GovUKRadioGroupComponent>;

const Template: StoryFn<GovUKRadioGroupComponent> = (args) => ({
  props: { ...args, form: new FormGroup({ input: new FormControl(false) }) },
  template: `<form [formGroup]="form">
      <ngx-govuk-radio-group
        formControlName="input"
         ${argsToTemplate(args)}
      >
        <ngx-govuk-radio-option value="red" label="Red" />
        <ngx-govuk-radio-option
          value="blue"
          label="Blue"
          hint="This is the colour of the sky"
        />
        <ngx-govuk-radio-option value="green" label="Green" isDivided="true" />
      </ngx-govuk-radio-group>
    </form>`,
});

export const Primary: Story = {
  render: Template,
  args: {
    small: false,
    inline: false,
  },
};
