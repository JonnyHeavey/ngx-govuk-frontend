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

export const Primary: Story = {
  render: Template,
  args: {
    color: 'primary' as GovUKButtonColorType,
    disabled: false,
    start: false,
  },
  parameters: {
    docs: {
      description: {
        story: 'The primary button is used for the main action on a page.',
      },
    },
  },
};

export const Secondary: Story = {
  render: Template,
  args: {
    color: 'secondary' as GovUKButtonColorType,
    disabled: false,
    start: false,
  },
  parameters: {
    docs: {
      description: {
        story: 'The secondary button is used for secondary actions on a page.',
      },
    },
  },
};

export const Warning: Story = {
  render: Template,
  args: {
    color: 'warning' as GovUKButtonColorType,
    disabled: false,
    start: false,
  },
  parameters: {
    docs: {
      description: {
        story:
          'The warning button is used for destructive actions like deleting or canceling.',
      },
    },
  },
};

export const Inverse: Story = {
  render: Template,
  args: {
    color: 'inverse' as GovUKButtonColorType,
    disabled: false,
    start: false,
  },
  parameters: {
    backgrounds: { default: 'dark' },
    docs: {
      description: {
        story:
          'The inverse button is used on dark backgrounds. Usually paired with the header or footer.',
      },
    },
  },
};

export const Disabled: Story = {
  render: Template,
  args: {
    color: 'primary' as GovUKButtonColorType,
    disabled: true,
    start: false,
  },
  parameters: {
    docs: {
      description: {
        story: 'Disabled buttons cannot be clicked and have reduced opacity.',
      },
    },
  },
};

export const StartButton: Story = {
  render: Template,
  args: {
    color: 'primary' as GovUKButtonColorType,
    disabled: false,
    start: true,
  },
  parameters: {
    docs: {
      description: {
        story:
          'The start button includes a forward arrow icon, used typically for starting a service or journey.',
      },
    },
  },
};

export const DisabledStartButton: Story = {
  render: Template,
  args: {
    color: 'primary' as GovUKButtonColorType,
    disabled: true,
    start: true,
  },
  parameters: {
    docs: {
      description: {
        story: 'A disabled start button.',
      },
    },
  },
};
