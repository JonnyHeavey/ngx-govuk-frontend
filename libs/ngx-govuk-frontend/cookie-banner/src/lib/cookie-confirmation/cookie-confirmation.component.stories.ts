import { type Meta, type StoryFn, type StoryObj } from '@storybook/angular';
import { GovUKCookieConfirmationComponent } from './cookie-confirmation.component';

const meta: Meta<GovUKCookieConfirmationComponent> = {
  component: GovUKCookieConfirmationComponent,
  title: 'Cookies/GovUKCookieConfirmationComponent',
};
export default meta;
type Story = StoryObj<GovUKCookieConfirmationComponent>;

const Template: StoryFn<GovUKCookieConfirmationComponent> = (args) => ({
  props: { ...args },
  template: `<ngx-govuk-cookie-confirmation />`,
});

export const Primary: Story = {
  render: Template,
};
