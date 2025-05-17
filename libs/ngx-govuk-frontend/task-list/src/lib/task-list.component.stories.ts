import { ActivatedRoute } from '@angular/router';
import { Meta, StoryObj, moduleMetadata } from '@storybook/angular';
import { GovUKTagComponent } from 'ngx-govuk-frontend/tag';
import { GovUKTaskListItemDirective } from './task-list-item.directive';
import { GovUKTaskListComponent } from './task-list.component';

const meta: Meta<GovUKTaskListComponent> = {
  component: GovUKTaskListComponent,
  title: 'Task List/GovUKTaskListComponent',
  decorators: [
    moduleMetadata({
      imports: [
        GovUKTaskListComponent,
        GovUKTaskListItemDirective,
        GovUKTagComponent,
      ],
      providers: [{ provide: ActivatedRoute, useValue: {} }],
    }),
  ],
  parameters: {
    layout: 'padded',
  },
};

export default meta;
type Story = StoryObj<GovUKTaskListComponent>;

// Default example
export const Primary: Story = {
  render: () => ({
    component: GovUKTaskListComponent,
    props: {},
    template: `
      <ngx-govuk-task-list>
        <ngx-govuk-task-list-item
          [title]="'Company Directors'"
          [href]="'#'"
          [statusText]="'Completed'"
        ></ngx-govuk-task-list-item>
        <ngx-govuk-task-list-item
          [title]="'Registered company details'"
          [href]="'#'"
          [statusText]="'Incomplete'"
          [tagColor]="'blue'"
        ></ngx-govuk-task-list-item>
        <ngx-govuk-task-list-item
          [title]="'Financial history'"
          [hint]="'Include 5 years of the company\\'s relevant financial information'"
          [href]="'#'"
          [statusText]="'Incomplete'"
          [tagColor]="'blue'"
        ></ngx-govuk-task-list-item>
        <ngx-govuk-task-list-item
          [title]="'Business plan'"
          [href]="'#'"
          [statusText]="'Incomplete'"
          [tagColor]="'blue'"
        ></ngx-govuk-task-list-item>
        <ngx-govuk-task-list-item
          [title]="'References'"
          [href]="'#'"
          [statusText]="'Incomplete'"
          [tagColor]="'blue'"
        ></ngx-govuk-task-list-item>
      </ngx-govuk-task-list>
    `,
  }),
};

// Example with different statuses
export const WithDifferentStatuses: Story = {
  render: () => ({
    component: GovUKTaskListComponent,
    props: {},
    template: `
      <ngx-govuk-task-list>
        <ngx-govuk-task-list-item
          [title]="'Personal details'"
          [href]="'#'"
          [statusText]="'Completed'"
        ></ngx-govuk-task-list-item>
        <ngx-govuk-task-list-item
          [title]="'Contact information'"
          [href]="'#'"
          [statusText]="'In progress'"
          [tagColor]="'light-blue'"
        ></ngx-govuk-task-list-item>
        <ngx-govuk-task-list-item
          [title]="'Upload documents'"
          [hint]="'Upload identity documents and proof of address'"
          [href]="'#'"
          [statusText]="'Cannot start yet'"
          [tagColor]="'grey'"
        ></ngx-govuk-task-list-item>
        <ngx-govuk-task-list-item
          [title]="'Review and submit'"
          [href]="'#'"
          [statusText]="'Not started'"
          [tagColor]="'grey'"
        ></ngx-govuk-task-list-item>
      </ngx-govuk-task-list>
    `,
  }),
};

// Example with no links
export const WithoutLinks: Story = {
  render: () => ({
    component: GovUKTaskListComponent,
    props: {},
    template: `
      <ngx-govuk-task-list>
        <ngx-govuk-task-list-item
          [title]="'Personal details'"
          [statusText]="'Completed'"
        ></ngx-govuk-task-list-item>
        <ngx-govuk-task-list-item
          [title]="'Contact information'"
          [statusText]="'In progress'"
          [tagColor]="'light-blue'"
        ></ngx-govuk-task-list-item>
        <ngx-govuk-task-list-item
          [title]="'Upload documents'"
          [hint]="'Upload identity documents and proof of address'"
          [statusText]="'Cannot start yet'"
          [tagColor]="'grey'"
        ></ngx-govuk-task-list-item>
      </ngx-govuk-task-list>
    `,
  }),
};

// Example with noLink property
export const WithNoLinkProperty: Story = {
  render: () => ({
    component: GovUKTaskListComponent,
    props: {},
    template: `
      <ngx-govuk-task-list>
        <ngx-govuk-task-list-item
          [title]="'Available task'"
          [href]="'#'"
          [statusText]="'Available'"
          [tagColor]="'green'"
        ></ngx-govuk-task-list-item>
        <ngx-govuk-task-list-item
          [title]="'Unavailable task'"
          [href]="'#'"
          [noLink]="true"
          [hint]="'This task is not yet available'"
          [statusText]="'Cannot start yet'"
          [tagColor]="'grey'"
        ></ngx-govuk-task-list-item>
        <ngx-govuk-task-list-item
          [title]="'In progress task'"
          [href]="'#'"
          [statusText]="'In progress'"
          [tagColor]="'blue'"
        ></ngx-govuk-task-list-item>
      </ngx-govuk-task-list>
    `,
  }),
};
