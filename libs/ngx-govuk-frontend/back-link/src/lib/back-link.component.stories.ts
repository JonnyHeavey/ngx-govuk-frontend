import { type Meta, type StoryFn, type StoryObj } from '@storybook/angular';
import { GovUKBackLinkComponent } from './back-link.component';

const meta: Meta<GovUKBackLinkComponent> = {
  component: GovUKBackLinkComponent,
  title: 'Back Link/GovUKBackLinkComponent',
};
export default meta;
type Story = StoryObj<GovUKBackLinkComponent>;

const Template: StoryFn<GovUKBackLinkComponent> = (
  args: GovUKBackLinkComponent,
) => ({
  props: { ...args },
  template: `<ngx-govuk-back-link />`,
});

export const Primary: Story = {
  render: Template,
};
