import {
  argsToTemplate,
  type Meta,
  type StoryFn,
  type StoryObj,
} from '@storybook/angular';
import { GovUKCookieBannerComponent } from './cookie-banner.component';

const meta: Meta<GovUKCookieBannerComponent> = {
  component: GovUKCookieBannerComponent,
  title: 'Cookies/GovUKCookieBannerComponent',
};
export default meta;
type Story = StoryObj<GovUKCookieBannerComponent>;

const Template: StoryFn<GovUKCookieBannerComponent> = (args) => ({
  props: { ...args },
  template: `<ngx-govuk-cookie-banner ${argsToTemplate(args)} />`,
});

export const Primary: Story = {
  render: Template,
  args: {
    appName: 'Test Application',
  },
};
