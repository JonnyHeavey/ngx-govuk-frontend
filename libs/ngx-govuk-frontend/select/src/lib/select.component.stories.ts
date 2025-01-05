import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import {
  argsToTemplate,
  moduleMetadata,
  type Meta,
  type StoryFn,
  type StoryObj,
} from '@storybook/angular';
import { GovUKSelectComponent } from './select.component';

const meta: Meta<GovUKSelectComponent> = {
  component: GovUKSelectComponent,
  title: 'Forms/GovUKSelectComponent',
  decorators: [
    moduleMetadata({
      imports: [ReactiveFormsModule],
    }),
  ],
};

export default meta;
type Story = StoryObj<GovUKSelectComponent>;

const Template: StoryFn<GovUKSelectComponent> = (args) => ({
  props: { ...args, form: new FormGroup({ input: new FormControl(false) }) },
  template: `<form [formGroup]="form">
      <ngx-govuk-select
        formControlName="input"
         ${argsToTemplate(args)}
      ></ngx-govuk-radio-group>
    </form>`,
});

export const Primary: Story = {
  render: Template,
  args: {
    options: [
      {
        value: 'a',
        label: 'Option A',
      },
      { value: 'b', label: 'Option B' },
      { value: 'c', label: 'Option C' },
    ],
  },
};
