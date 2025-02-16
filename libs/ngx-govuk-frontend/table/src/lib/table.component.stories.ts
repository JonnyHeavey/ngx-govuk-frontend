import {
  argsToTemplate,
  type Meta,
  type StoryFn,
  type StoryObj,
} from '@storybook/angular';
import { GovUKTableComponent } from './table.component';

const meta: Meta<GovUKTableComponent> = {
  component: GovUKTableComponent,
  title: 'Table/GovUKTableComponent',
};
export default meta;
type Story = StoryObj<GovUKTableComponent>;

const Template: StoryFn<GovUKTableComponent> = (args) => ({
  props: { ...args },
  template: `
    <ngx-govuk-table ${argsToTemplate(args)} />`,
});

export const Primary: Story = {
  render: Template,
  args: {
    caption: 'Example table',
    small: false,
    columns: [
      {
        header: 'Name',
        key: 'name',
        isRowHeader: true,
        customClass: 'govuk-!-width-one-half',
      },
      { header: 'Gender', key: 'gender' },
      {
        header: 'Age',
        key: 'age',
        isNumeric: true,
      },
    ],
    dataSource: [
      { name: 'Alice', gender: 'F', age: 25 },
      { name: 'Bob', gender: 'M', age: 30 },
    ],
  },
};
