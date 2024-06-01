import { type Meta, type StoryFn, type StoryObj } from '@storybook/angular';
import { GovUKWarningTextComponent } from './warning-text.component';

const meta: Meta<GovUKWarningTextComponent> = {
  component: GovUKWarningTextComponent,
  title: 'Warning Text/GovUKWarningTextComponent',
};
export default meta;
type Story = StoryObj<GovUKWarningTextComponent>;

const Template: StoryFn<GovUKWarningTextComponent> = (
  args: GovUKWarningTextComponent
) => ({
  props: { ...args },
  template: `<ngx-govuk-warning-text>
    You can be fined up to £5,000 if you do not register.
  </ngx-govuk-warning-text>`,
});

export const Primary: Story = {
  render: Template,
};
