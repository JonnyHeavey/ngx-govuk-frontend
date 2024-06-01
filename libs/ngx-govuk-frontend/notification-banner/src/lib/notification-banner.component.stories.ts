import { InputSignal } from '@angular/core';
import {
  argsToTemplate,
  type Meta,
  type StoryFn,
  type StoryObj,
} from '@storybook/angular';
import { GovUKNotificationBannerComponent } from './notification-banner.component';

const meta: Meta<GovUKNotificationBannerComponent> = {
  component: GovUKNotificationBannerComponent,
  title: 'Notification Banner/GovUKNotificationBannerComponent',
};
export default meta;
type Story = StoryObj<GovUKNotificationBannerComponent>;

const Template: StoryFn<GovUKNotificationBannerComponent> = (
  args: GovUKNotificationBannerComponent
) => ({
  props: { ...args },
  template: `<ngx-govuk-notification-banner ${argsToTemplate(args)}>
    <p class="govuk-notification-banner__heading">
      You have 7 days left to send your application.
      <a class="govuk-notification-banner__link" href="#">View application</a>.
    </p>
  </ngx-govuk-notification-banner>`,
});

export const Primary: Story = {
  render: Template,
  args: {
    title: 'Important' as unknown as InputSignal<string>,
  },
};
