import {
  argsToTemplate,
  type Meta,
  type StoryFn,
  type StoryObj,
} from '@storybook/angular';
import { GovUKFormGroupComponent } from './form-group.component';

const meta: Meta<GovUKFormGroupComponent> = {
  component: GovUKFormGroupComponent,
  title: 'Forms/GovUKFormGroupComponent',
};

export default meta;
type Story = StoryObj<GovUKFormGroupComponent>;

const Template: StoryFn<GovUKFormGroupComponent> = (args) => ({
  props: { ...args },
  template: `<ngx-govuk-form-group ${argsToTemplate(args)}></ngx-govuk-form-group>`,
});

export const Primary: Story = {
  render: Template,
  args: {
    inputId: 'story1',
    label: 'Label',
    isPageTitle: true,
    hint: 'hint',
  },
};
