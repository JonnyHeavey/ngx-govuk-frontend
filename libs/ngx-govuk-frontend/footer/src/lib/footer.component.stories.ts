import {
  argsToTemplate,
  type Meta,
  type StoryFn,
  type StoryObj,
} from '@storybook/angular';
import { GovUKFooterComponent } from './footer.component';

const meta: Meta<GovUKFooterComponent> = {
  component: GovUKFooterComponent,
  title: 'Footer/GovUKFooterComponent',
};

export default meta;
type Story = StoryObj<GovUKFooterComponent>;

const Template: StoryFn<GovUKFooterComponent> = (
  args: GovUKFooterComponent
) => ({
  props: { ...args },
  template: `<ngx-govuk-footer ${argsToTemplate(args)}>
  </ngx-govuk-footer>`,
});

export const Primary: Story = {
  render: Template,
};
