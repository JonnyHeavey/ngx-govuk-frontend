import { type Meta, type StoryFn, type StoryObj } from '@storybook/angular';
import { GovUKTextInputComponent } from './text-input.component';

const meta: Meta<GovUKTextInputComponent> = {
  component: GovUKTextInputComponent,
  title: 'Inputs/GovUKTextInputComponent',
};

export default meta;
type Story = StoryObj<GovUKTextInputComponent>;

const Template: StoryFn<GovUKTextInputComponent> = (args) => ({
  props: { ...args },
  template: `<ngx-govuk-text-input>
  [prefix]="prefix"
  [suffix]="suffix"
  </ngx-govuk-text-input>`,
});

export const Primary: Story = {
  render: Template,
};
