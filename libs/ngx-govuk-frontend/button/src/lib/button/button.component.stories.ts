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
    Button
  </ngx-govuk-button>`,
});

/**
 * Use a default button for the main call to action on a page.
 */
export const DefaultButton: Story = {
  render: Template,
  args: {
    color: 'primary' as GovUKButtonColorType,
    disabled: false,
    start: false,
  },
  name: 'Default buttons',
};

/**
 * Use a start button for the main call to action on your service’s Start page.
 * Start buttons do not usually submit form data, so use a link tag instead of a button tag.
 */
export const StartButtons: Story = {
  render: Template,
  args: {
    color: 'primary' as GovUKButtonColorType,
    disabled: false,
    start: true,
  },
  name: 'Start Buttons',
};

/**
 * Use secondary buttons for secondary calls to action on a page.
 */
export const SecondaryButtons: Story = {
  render: Template,
  args: {
    color: 'secondary' as GovUKButtonColorType,
    disabled: false,
    start: false,
  },
  name: 'Secondary Buttons',
};

/**
 * Warning buttons are designed to make users think carefully before they use them.
 */
export const WarningButtons: Story = {
  render: Template,
  args: {
    color: 'warning' as GovUKButtonColorType,
    disabled: false,
    start: false,
  },
  name: 'Warning Buttons',
};

/**
 * Inverse shows white buttons on dark backgrounds
 */
export const InverseButtons: Story = {
  render: Template,
  args: {
    color: 'inverse' as GovUKButtonColorType,
    disabled: false,
    start: false,
  },
  name: 'Buttons on dark backgrounds',
};

/**
 * Disabled buttons have poor contrast and can confuse some users, so avoid them if possible.
 */
export const DisabledButtons: Story = {
  render: Template,
  args: {
    color: 'secondary' as GovUKButtonColorType,
    disabled: true,
    start: false,
  },
  name: 'Disabled Buttons',
};
