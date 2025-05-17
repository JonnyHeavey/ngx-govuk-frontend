import {
  argsToTemplate,
  moduleMetadata,
  type Meta,
  type StoryFn,
  type StoryObj,
} from '@storybook/angular';
import { GovUKPaginationComponent } from './pagination.component';

const meta: Meta<GovUKPaginationComponent> = {
  component: GovUKPaginationComponent,
  title: 'Navigation/GovUKPaginationComponent',
  decorators: [
    moduleMetadata({
      imports: [GovUKPaginationComponent],
    }),
  ],
  argTypes: {
    mode: {
      control: 'radio',
      options: ['list', 'block'],
      description: 'Display mode for pagination',
    },
    itemCount: {
      control: { type: 'number', min: 0 },
      description: 'Total number of items to paginate',
    },
    itemsPerPage: {
      control: { type: 'number', min: 1 },
      description: 'Number of items to display per page',
    },
    currentPage: {
      control: { type: 'number', min: 1 },
      description: 'Current active page',
    },
    previousTitle: {
      control: 'text',
      description: 'Text for the previous button',
    },
    previousLabel: {
      control: 'text',
      description:
        'Additional context label for previous button (displayed in block mode)',
    },
    nextTitle: {
      control: 'text',
      description: 'Text for the next button',
    },
    nextLabel: {
      control: 'text',
      description:
        'Additional context label for next button (displayed in block mode)',
    },
    pageChange: { action: 'pageChange' },
    previousClick: { action: 'previousClick' },
    nextClick: { action: 'nextClick' },
  },
};

export default meta;
type Story = StoryObj<GovUKPaginationComponent>;

const Template: StoryFn<GovUKPaginationComponent> = (args) => ({
  props: { ...args },
  template: `
  <div class="govuk-frontend-supported">
    <ngx-govuk-pagination ${argsToTemplate(args)}></ngx-govuk-pagination>
  </div>
  `,
});

export const Primary: Story = {
  render: Template,
  args: {
    itemCount: 100,
    itemsPerPage: 10,
    currentPage: 5,
  },
};

export const FirstPage: Story = {
  render: Template,
  args: {
    itemCount: 100,
    itemsPerPage: 10,
    currentPage: 1,
  },
};

export const LastPage: Story = {
  render: Template,
  args: {
    itemCount: 100,
    itemsPerPage: 10,
    currentPage: 10,
  },
};

export const FewPages: Story = {
  render: Template,
  args: {
    itemCount: 35,
    itemsPerPage: 10,
    currentPage: 2,
  },
};

export const BlockMode: Story = {
  render: Template,
  args: {
    itemCount: 30,
    itemsPerPage: 10,
    currentPage: 2,
    mode: 'block',
    previousTitle: 'Previous',
    previousLabel: 'Application details',
    nextTitle: 'Next',
    nextLabel: 'Check your answers',
  },
};

export const CustomLabels: Story = {
  render: Template,
  args: {
    itemCount: 30,
    itemsPerPage: 10,
    currentPage: 2,
    previousTitle: 'Previous step',
    nextTitle: 'Next step',
  },
};
