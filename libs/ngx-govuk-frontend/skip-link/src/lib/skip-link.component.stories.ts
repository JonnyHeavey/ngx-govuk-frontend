import { Meta, StoryObj, moduleMetadata } from '@storybook/angular';
import { GovUKSkipLinkComponent } from './skip-link.component';

const meta: Meta<GovUKSkipLinkComponent> = {
  title: 'Skip Link/GovUKSkipLinkComponent',
  component: GovUKSkipLinkComponent,
  decorators: [
    moduleMetadata({
      imports: [GovUKSkipLinkComponent],
    }),
  ],
  parameters: {
    layout: 'padded',
  },
  argTypes: {
    href: {
      control: 'text',
      description: 'The target ID to skip to',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '#content' },
      },
    },
  },
};

export default meta;
type Story = StoryObj<GovUKSkipLinkComponent>;

export const Primary: Story = {
  args: {},
  parameters: {
    docs: {
      description: {
        story:
          'The default skip link component. Tab to this example to see the skip link.',
      },
    },
  },
};

export const CustomTarget: Story = {
  args: {
    href: '#main-content',
  },
  parameters: {
    docs: {
      description: {
        story:
          'A skip link with a custom target. Tab to this example to see the skip link.',
      },
    },
  },
};
