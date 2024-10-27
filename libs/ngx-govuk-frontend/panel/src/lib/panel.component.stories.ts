import {
  argsToTemplate,
  type Meta,
  type StoryFn,
  type StoryObj,
} from '@storybook/angular';
import { GovUKPanelComponent } from './panel.component';

const meta: Meta<GovUKPanelComponent> = {
  component: GovUKPanelComponent,
  title: 'Panel/GovUKPanelComponent',
};
export default meta;
type Story = StoryObj<GovUKPanelComponent>;

const Template: StoryFn<GovUKPanelComponent> = (args) => ({
  props: { ...args },
  template: `<ngx-govuk-panel ${argsToTemplate(args)}>
    <span>Your reference number<br><strong>HDJ2123F</strong></span>
  </ngx-govuk-panel>`,
});

export const Primary: Story = {
  render: Template,
  args: {
    title: 'Application complete',
  },
};
