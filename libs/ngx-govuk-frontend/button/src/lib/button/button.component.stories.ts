import { InputSignal } from '@angular/core';
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

const Template: StoryFn<GovUKButtonComponent> = (
  args: GovUKButtonComponent
) => ({
  props: { ...args },
  template: `<ngx-govuk-button ${argsToTemplate(args)}>
    Save and continue
  </ngx-govuk-button>`,
});

const defaultArgs = {
  color: 'primary' as unknown as InputSignal<GovUKButtonColorType>,
  disabled: false as unknown as InputSignal<boolean>,
  start: false as unknown as InputSignal<boolean>,
};

export const Primary: Story = {
  render: Template,
  args: defaultArgs,
};
