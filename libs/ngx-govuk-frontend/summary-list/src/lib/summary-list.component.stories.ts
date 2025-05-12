import { Meta, moduleMetadata, StoryObj } from '@storybook/angular';
import { GovUKSummaryListActionComponent } from './summary-list-action.component';
import { GovUKSummaryListActionsComponent } from './summary-list-actions.component';
import { GovUKSummaryListCardActionsComponent } from './summary-list-card-actions.component';
import { GovUKSummaryListCardComponent } from './summary-list-card.component';
import { GovUKSummaryListItemComponent } from './summary-list-item.component';
import { GovUKSummaryListValueDirective } from './summary-list-value.directive';
import { GovUKSummaryListComponent } from './summary-list.component';

const meta: Meta<GovUKSummaryListComponent> = {
  title: 'Components/Summary List',
  component: GovUKSummaryListComponent,
  decorators: [
    moduleMetadata({
      imports: [
        GovUKSummaryListComponent,
        GovUKSummaryListItemComponent,
        GovUKSummaryListActionComponent,
        GovUKSummaryListActionsComponent,
        GovUKSummaryListCardComponent,
        GovUKSummaryListCardActionsComponent,
        GovUKSummaryListValueDirective,
      ],
    }),
  ],
  render: (args) => ({
    props: args,
    template: `
      <ngx-govuk-summary-list [noBorder]="noBorder">
        <ngx-govuk-summary-list-item key="Name">
          <ng-template ngxGovUkSummaryListValue>
            Sarah Philips
          </ng-template>
          <ngx-govuk-summary-list-actions>
            <ngx-govuk-summary-list-action href="#" visuallyHiddenText="name">Change</ngx-govuk-summary-list-action>
          </ngx-govuk-summary-list-actions>
        </ngx-govuk-summary-list-item>
        <ngx-govuk-summary-list-item key="Date of birth" value="5 January 1978">
          <ngx-govuk-summary-list-actions>
            <ngx-govuk-summary-list-action href="#" visuallyHiddenText="date of birth">Change</ngx-govuk-summary-list-action>
          </ngx-govuk-summary-list-actions>
        </ngx-govuk-summary-list-item>
        <ngx-govuk-summary-list-item key="Address">
          <ng-template ngxGovUkSummaryListValue>
            <p>72 Guild Street<br>London<br>SE23 6FH</p>
          </ng-template>
          <ngx-govuk-summary-list-actions>
            <ngx-govuk-summary-list-action href="#" visuallyHiddenText="address">Change</ngx-govuk-summary-list-action>
          </ngx-govuk-summary-list-actions>
        </ngx-govuk-summary-list-item>
      </ngx-govuk-summary-list>
    `,
  }),
};

export default meta;
type Story = StoryObj<GovUKSummaryListComponent>;

export const Default: Story = {
  args: {},
};

export const WithNoBorder: Story = {
  args: {
    noBorder: true,
  },
};

export const WithCard: StoryObj<GovUKSummaryListCardComponent> = {
  render: () => ({
    template: `
      <ngx-govuk-summary-list-card title="University of Gloucestershire">
        <ngx-govuk-summary-list-card-actions>
          <ngx-govuk-summary-list-action href="#" visuallyHiddenText="of University of Gloucestershire">Delete choice</ngx-govuk-summary-list-action>
          <ngx-govuk-summary-list-action href="#" visuallyHiddenText="from University of Gloucestershire">Withdraw</ngx-govuk-summary-list-action>
        </ngx-govuk-summary-list-card-actions>
        <ngx-govuk-summary-list>
          <ngx-govuk-summary-list-item key="Course" value="English (3DMD)"></ngx-govuk-summary-list-item>
          <ngx-govuk-summary-list-item key="Location" value="School name, Road, City, SW1 1AA"></ngx-govuk-summary-list-item>
        </ngx-govuk-summary-list>
      </ngx-govuk-summary-list-card>
    `,
  }),
};

export const WithMultipleActions: Story = {
  args: {},
  render: () => ({
    template: `
      <ngx-govuk-summary-list>
        <ngx-govuk-summary-list-item key="Contact details">
          <ng-template ngxGovUkSummaryListValue>
            <p>Email: sarah.phillips@example.com</p>
            <p>Phone: 07700 900457</p>
          </ng-template>
          <ngx-govuk-summary-list-actions>
            <ngx-govuk-summary-list-action href="#" visuallyHiddenText="contact details">Change</ngx-govuk-summary-list-action>
            <ngx-govuk-summary-list-action href="#" visuallyHiddenText="contact details">Remove</ngx-govuk-summary-list-action>
          </ngx-govuk-summary-list-actions>
        </ngx-govuk-summary-list-item>
      </ngx-govuk-summary-list>
    `,
  }),
};
