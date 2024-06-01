import { type Meta, type StoryFn, type StoryObj } from '@storybook/angular';
import { GovUKInsetTextComponent } from './inset-text.component';

const meta: Meta<GovUKInsetTextComponent> = {
  component: GovUKInsetTextComponent,
  title: 'Inset Text/GovUKInsetTextComponent',
};

export default meta;
type Story = StoryObj<GovUKInsetTextComponent>;

const Template: StoryFn<GovUKInsetTextComponent> = (
  args: GovUKInsetTextComponent
) => ({
  props: { ...args },
  template: `<ngx-govuk-inset-text>
  It can take up to 8 weeks to register a lasting power of attorney if there are no mistakes in the application.
  </ngx-govuk-inset-text>`,
});

export const Primary: Story = {
  render: Template,
};
