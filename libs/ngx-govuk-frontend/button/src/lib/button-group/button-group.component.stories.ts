import {
  moduleMetadata,
  type Meta,
  type StoryFn,
  type StoryObj,
} from '@storybook/angular';
import { GovUKButtonComponent } from '../button/button.component';
import { GovUKButtonGroupComponent } from './button-group.component';

const meta: Meta<GovUKButtonGroupComponent> = {
  component: GovUKButtonGroupComponent,
  title: 'Button/GovUKButtonGroupComponent',
  decorators: [
    moduleMetadata({
      imports: [GovUKButtonComponent],
    }),
  ],
};
export default meta;
type Story = StoryObj<GovUKButtonGroupComponent>;

const Template: StoryFn<GovUKButtonGroupComponent> = (
  args: GovUKButtonGroupComponent,
) => ({
  props: { ...args },
  template: `<ngx-govuk-button-group>
    <ngx-govuk-button>Submit</ngx-govuk-button>
    <ngx-govuk-button color="secondary">Cancel</ngx-govuk-button>
  </ngx-govuk-button-group>`,
});

export const StandardButtonGroup: Story = {
  render: Template,
  args: {},
  parameters: {
    docs: {
      description: {
        story: 'A standard button group with a primary and secondary button.',
      },
    },
  },
};

export const PrimaryAndWarning: Story = {
  render: () => ({
    template: `<ngx-govuk-button-group>
      <ngx-govuk-button>Save and continue</ngx-govuk-button>
      <ngx-govuk-button color="warning">Delete</ngx-govuk-button>
    </ngx-govuk-button-group>`,
  }),
  parameters: {
    docs: {
      description: {
        story:
          'A button group with a primary and warning button, often used for save and delete actions.',
      },
    },
  },
};

export const WithStartButton: Story = {
  render: () => ({
    template: `<ngx-govuk-button-group>
      <ngx-govuk-button [start]="true">Start now</ngx-govuk-button>
      <ngx-govuk-button color="secondary">Back</ngx-govuk-button>
    </ngx-govuk-button-group>`,
  }),
  parameters: {
    docs: {
      description: {
        story: 'A button group with a start button and a secondary button.',
      },
    },
  },
};

export const ThreeButtons: Story = {
  render: () => ({
    template: `<ngx-govuk-button-group>
      <ngx-govuk-button>Save and continue</ngx-govuk-button>
      <ngx-govuk-button color="secondary">Save as draft</ngx-govuk-button>
      <ngx-govuk-button color="secondary">Cancel</ngx-govuk-button>
    </ngx-govuk-button-group>`,
  }),
  parameters: {
    docs: {
      description: {
        story:
          'A button group with three buttons, showing how multiple actions can be presented together.',
      },
    },
  },
};

export const MixedDisabledAndEnabled: Story = {
  render: () => ({
    template: `<ngx-govuk-button-group>
      <ngx-govuk-button>Enabled button</ngx-govuk-button>
      <ngx-govuk-button color="secondary" [disabled]="true">Disabled button</ngx-govuk-button>
    </ngx-govuk-button-group>`,
  }),
  parameters: {
    docs: {
      description: {
        story: 'A button group with one enabled and one disabled button.',
      },
    },
  },
};
