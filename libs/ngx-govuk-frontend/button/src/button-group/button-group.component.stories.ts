import {
  moduleMetadata,
  type Meta,
  type StoryFn,
  type StoryObj,
} from '@storybook/angular';
import { GovUKButtonComponent } from '../button/button.component';
import { GovUKButtonGroupComponent } from './button-group.component';

const meta: Meta<GovUKButtonGroupComponent> = {
  component: GovUKButtonGroupComponent,
  title: 'Button/GovUKButtonGroupComponent',
  decorators: [
    moduleMetadata({
      imports: [GovUKButtonComponent],
    }),
  ],
};
export default meta;
type Story = StoryObj<GovUKButtonGroupComponent>;

const ButtonGroupTemplate: StoryFn<GovUKButtonGroupComponent> = (
  args: GovUKButtonGroupComponent
) => ({
  props: { ...args },
  template: `<ngx-govuk-button-group>
    <ngx-govuk-button>Submit</ngx-govuk-button>
    <ngx-govuk-button color="secondary">Cancel</ngx-govuk-button>
  </ngx-govuk-button-group>`,
});

export const Primary: Story = {
  render: ButtonGroupTemplate,
  args: {},
};
