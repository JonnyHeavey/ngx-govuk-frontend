import { ActivatedRoute } from '@angular/router';
import {
  argsToTemplate,
  moduleMetadata,
  type Meta,
  type StoryFn,
  type StoryObj,
} from '@storybook/angular';
import { GovUKBackLinkComponent } from './back-link.component';

const meta: Meta<GovUKBackLinkComponent> = {
  component: GovUKBackLinkComponent,
  title: 'Back Link/GovUKBackLinkComponent',
  decorators: [
    moduleMetadata({
      providers: [{ provide: ActivatedRoute, useValue: {} }],
    }),
  ],
};
export default meta;
type Story = StoryObj<GovUKBackLinkComponent>;

const Template: StoryFn<GovUKBackLinkComponent> = (args) => ({
  props: { ...args },
  template: `<ngx-govuk-back-link ${argsToTemplate(args)} />`,
});

export const Primary: Story = {
  render: Template,
  args: {
    inverse: false,
    link: '/back',
  },
};
