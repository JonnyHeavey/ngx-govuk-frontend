import { InputSignal } from '@angular/core';
import {
  argsToTemplate,
  type Meta,
  type StoryFn,
  type StoryObj,
} from '@storybook/angular';
import { GovUKCookieBannerComponent } from './cookie-banner.component';

const meta: Meta<GovUKCookieBannerComponent> = {
  component: GovUKCookieBannerComponent,
  title: 'Cookie Banner/GovUKCookieBannerComponent',
};
export default meta;
type Story = StoryObj<GovUKCookieBannerComponent>;

const Template: StoryFn<GovUKCookieBannerComponent> = (
  args: GovUKCookieBannerComponent
) => ({
  props: { ...args },
  template: `<ngx-govuk-cookie-banner ${argsToTemplate(args)}>
    
  </ngx-govuk-cookie-banner>`,
});

export const Primary: Story = {
  render: Template,
  args: {
    appName: 'Test Application' as unknown as InputSignal<string>,
  },
};
