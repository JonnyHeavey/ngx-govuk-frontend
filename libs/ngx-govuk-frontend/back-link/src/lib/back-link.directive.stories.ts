import { RouterTestingModule } from '@angular/router/testing';
import {
  argsToTemplate,
  moduleMetadata,
  type Meta,
  type StoryFn,
  type StoryObj,
} from '@storybook/angular';
import { GovUKBackLinkDirective } from './back-link.directive';

const meta: Meta<GovUKBackLinkDirective> = {
  component: GovUKBackLinkDirective,
  title: 'Back Link/GovUKBackLinkDirective',
  decorators: [
    moduleMetadata({
      imports: [RouterTestingModule],
    }),
  ],
};
export default meta;
type Story = StoryObj<GovUKBackLinkDirective>;

const Template: StoryFn<GovUKBackLinkDirective> = (args) => ({
  props: { ...args },
  template: `<a ngxGovUkBackLink ${argsToTemplate(args)}>Back</a>`,
});

export const Primary: Story = {
  render: Template,
  args: {
    inverse: false,
  },
};
