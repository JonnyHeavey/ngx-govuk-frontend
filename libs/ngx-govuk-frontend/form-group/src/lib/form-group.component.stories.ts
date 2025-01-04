import {
  argsToTemplate,
  type Meta,
  type StoryFn,
  type StoryObj,
} from '@storybook/angular';
import { GovUKFormGroupComponent } from './form-group.component';
import { GovUKFormGroupDirective } from './form-group.directive';

const meta: Meta<GovUKFormGroupComponent> = {
  component: GovUKFormGroupComponent,
  title: 'Forms/GovUKFormGroupComponent',
};

export default meta;
type Story = StoryObj<GovUKFormGroupDirective & GovUKFormGroupComponent>;

const Template: StoryFn<GovUKFormGroupComponent> = (args) => ({
  props: { ...args },
  template: `<ngx-govuk-form-group ${argsToTemplate(args)}>[INPUT PLACEHOLDER]</ngx-govuk-form-group>`,
});

export const Primary: Story = {
  render: Template,
  args: {
    inputId: 'story1',
    label: 'What is the name of the event?',
    isPageTitle: true,
    hint: "The name you'll use on promotional material",
  },
};
