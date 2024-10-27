import {
  argsToTemplate,
  type Meta,
  type StoryFn,
  type StoryObj,
} from '@storybook/angular';
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

const Template: StoryFn<GovUKTagComponent> = (args) => ({
  props: { ...args },
  template: `<ngx-govuk-tag ${argsToTemplate(args)}>
    Completed
  </ngx-govuk-tag>`,
});

export const Primary: Story = {
  render: Template,
  args: {
    color: 'red',
  },
};
