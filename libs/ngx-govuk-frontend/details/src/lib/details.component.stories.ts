import {
  argsToTemplate,
  type Meta,
  type StoryFn,
  type StoryObj,
} from '@storybook/angular';
import { GovUKDetailsComponent } from './details.component';

const meta: Meta<GovUKDetailsComponent> = {
  component: GovUKDetailsComponent,
  title: 'Details/GovUKDetailsComponent',
};

export default meta;
type Story = StoryObj<GovUKDetailsComponent>;

const Template: StoryFn<GovUKDetailsComponent> = (args) => ({
  props: { ...args },
  template: `<ngx-govuk-details ${argsToTemplate(args)}>
  We need to know your nationality so we can work out which elections you’re entitled to vote in. If you cannot provide your nationality, you’ll have to send copies of identity documents through the post.
  </ngx-govuk-details>`,
});

export const Primary: Story = {
  render: Template,
  args: {
    summary: 'Help with nationality',
  },
};
