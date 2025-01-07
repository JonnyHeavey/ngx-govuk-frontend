import {
  argsToTemplate,
  type Meta,
  type StoryFn,
  type StoryObj,
} from '@storybook/angular';
import { GovUKFieldsetComponent } from './fieldset.component';

const meta: Meta<GovUKFieldsetComponent> = {
  component: GovUKFieldsetComponent,
  title: 'Forms/GovUKFieldsetComponent',
};

export default meta;
type Story = StoryObj<GovUKFieldsetComponent>;

const Template: StoryFn<GovUKFieldsetComponent> = (args) => ({
  props: { ...args },
  template: `<ngx-govuk-fieldset ${argsToTemplate(args)}>[INPUT PLACEHOLDER]</ngx-govuk-fieldset>`,
});

export const Primary: Story = {
  render: Template,
  args: {
    legend: 'What is the name of the event?',
    isPageTitle: true,
    hint: "The name you'll use on promotional material",
    errorMessage: '',
  },
};
