import type { Meta, StoryObj } from '@storybook/angular';
import { moduleMetadata } from '@storybook/angular';
import { GovUKErrorSummaryItemDirective } from './error-summary-item.directive';
import { GovUKErrorSummaryComponent } from './error-summary.component';

const meta: Meta<GovUKErrorSummaryComponent> = {
  title: 'Error Summary/GovUKErrorSummaryComponent',
  component: GovUKErrorSummaryComponent,
  tags: ['autodocs'],
  decorators: [
    moduleMetadata({
      imports: [GovUKErrorSummaryItemDirective],
    }),
  ],
  render: (args) => ({
    props: args,
    template: `
      <ngx-govuk-error-summary
        [title]="title"
      >
        <ngx-govuk-error-summary-item
          text="Enter your full name"
          targetId="fullName"
        ></ngx-govuk-error-summary-item>
        <ngx-govuk-error-summary-item
          text="The date your passport was issued must be in the past"
          targetId="passport-issued-year"
        ></ngx-govuk-error-summary-item>
      </ngx-govuk-error-summary>
    `,
  }),
};

export default meta;
type Story = StoryObj<GovUKErrorSummaryComponent>;

export const Primary: Story = {
  args: {
    title: 'There is a problem',
  },
};

export const CustomTitle: Story = {
  args: {
    title: 'Please fix these errors',
  },
};
