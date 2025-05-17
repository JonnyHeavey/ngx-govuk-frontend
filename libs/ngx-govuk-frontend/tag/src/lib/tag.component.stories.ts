import { argsToTemplate, type Meta, type StoryObj } from '@storybook/angular';
import { GovUKTagComponent } from './tag.component';

const meta: Meta<GovUKTagComponent> = {
  component: GovUKTagComponent,
  title: 'Tag/GovUKTagComponent',
  argTypes: {
    color: {
      options: [
        'grey',
        'green',
        'turquoise',
        'blue',
        'light-blue',
        'purple',
        'pink',
        'red',
        'orange',
        'yellow',
      ],
      control: { type: 'select' },
    },
  },
};

export default meta;
type Story = StoryObj<GovUKTagComponent>;

export const Primary: Story = {
  render: (args) => ({
    props: args,
    template: `<ngx-govuk-tag ${argsToTemplate(args)}>Active</ngx-govuk-tag>`,
  }),
  args: {
    color: 'blue',
  },
  parameters: {
    docs: {
      description: {
        story: 'The default tag with blue color (default).',
      },
    },
  },
};

// Create stories for all available colors
export const Grey: Story = {
  render: (args) => ({
    props: args,
    template: `<ngx-govuk-tag ${argsToTemplate(args)}>Inactive</ngx-govuk-tag>`,
  }),
  args: {
    color: 'grey',
  },
};

export const Green: Story = {
  render: (args) => ({
    props: args,
    template: `<ngx-govuk-tag ${argsToTemplate(args)}>Completed</ngx-govuk-tag>`,
  }),
  args: {
    color: 'green',
  },
};

export const Turquoise: Story = {
  render: (args) => ({
    props: args,
    template: `<ngx-govuk-tag ${argsToTemplate(args)}>New</ngx-govuk-tag>`,
  }),
  args: {
    color: 'turquoise',
  },
};

export const Blue: Story = {
  render: (args) => ({
    props: args,
    template: `<ngx-govuk-tag ${argsToTemplate(args)}>Active</ngx-govuk-tag>`,
  }),
  args: {
    color: 'blue',
  },
};

export const LightBlue: Story = {
  render: (args) => ({
    props: args,
    template: `<ngx-govuk-tag ${argsToTemplate(args)}>Pending</ngx-govuk-tag>`,
  }),
  args: {
    color: 'light-blue',
  },
};

export const Purple: Story = {
  render: (args) => ({
    props: args,
    template: `<ngx-govuk-tag ${argsToTemplate(args)}>Draft</ngx-govuk-tag>`,
  }),
  args: {
    color: 'purple',
  },
};

export const Pink: Story = {
  render: (args) => ({
    props: args,
    template: `<ngx-govuk-tag ${argsToTemplate(args)}>Processing</ngx-govuk-tag>`,
  }),
  args: {
    color: 'pink',
  },
};

export const Red: Story = {
  render: (args) => ({
    props: args,
    template: `<ngx-govuk-tag ${argsToTemplate(args)}>Rejected</ngx-govuk-tag>`,
  }),
  args: {
    color: 'red',
  },
};

export const Orange: Story = {
  render: (args) => ({
    props: args,
    template: `<ngx-govuk-tag ${argsToTemplate(args)}>Expiring</ngx-govuk-tag>`,
  }),
  args: {
    color: 'orange',
  },
};

export const Yellow: Story = {
  render: (args) => ({
    props: args,
    template: `<ngx-govuk-tag ${argsToTemplate(args)}>Pending review</ngx-govuk-tag>`,
  }),
  args: {
    color: 'yellow',
  },
};

export const WithExtraClasses: Story = {
  render: (args) => ({
    props: args,
    template: `<ngx-govuk-tag ${argsToTemplate(args)}>Custom Tag</ngx-govuk-tag>`,
  }),
  args: {
    color: 'blue',
    extraClasses: 'custom-class-1 custom-class-2',
  },
  parameters: {
    docs: {
      description: {
        story: 'A tag with custom CSS classes applied.',
      },
    },
  },
};

// Example showing multiple tags together for status comparison
export const TagCollection: Story = {
  render: () => ({
    template: `
      <h4 class="govuk-heading-s">Application statuses:</h4>
      <div style="display: flex; gap: 10px;">
        <ngx-govuk-tag color="green">Approved</ngx-govuk-tag>
        <ngx-govuk-tag color="blue">In progress</ngx-govuk-tag>
        <ngx-govuk-tag color="yellow">Awaiting review</ngx-govuk-tag>
        <ngx-govuk-tag color="red">Rejected</ngx-govuk-tag>
        <ngx-govuk-tag color="grey">Withdrawn</ngx-govuk-tag>
      </div>
    `,
  }),
  parameters: {
    docs: {
      description: {
        story: 'A collection of tags showing different statuses together.',
      },
    },
  },
};
