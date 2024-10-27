import {
  argsToTemplate,
  type Meta,
  type StoryFn,
  type StoryObj,
} from '@storybook/angular';
import { GovUKButtonColorType, GovUKButtonComponent } from './button.component';

const meta: Meta<GovUKButtonComponent> = {
  component: GovUKButtonComponent,
  title: 'Button/GovUKButtonComponent',
  argTypes: {
    color: {
      options: ['primary', 'secondary', 'warning', 'inverse'],
      control: { type: 'select' },
    },
  },
};
export default meta;
type Story = StoryObj<GovUKButtonComponent>;

const Template: StoryFn<GovUKButtonComponent> = (args) => ({
  props: { ...args },
  template: `<ngx-govuk-button ${argsToTemplate(args)}>
    Save and continue
  </ngx-govuk-button>`,
});

const defaultArgs = {
  color: 'primary' as GovUKButtonColorType,
  disabled: false,
  start: false,
};

export const Primary: Story = {
  render: Template,
  args: defaultArgs,
};
