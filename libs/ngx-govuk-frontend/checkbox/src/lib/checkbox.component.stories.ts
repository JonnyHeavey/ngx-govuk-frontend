import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import {
  argsToTemplate,
  moduleMetadata,
  type Meta,
  type StoryFn,
  type StoryObj,
} from '@storybook/angular';
import { GovUKCheckboxComponent } from './checkbox.component';

const meta: Meta<GovUKCheckboxComponent> = {
  component: GovUKCheckboxComponent,
  title: 'Forms/GovUKCheckboxComponent',
  decorators: [
    moduleMetadata({
      imports: [ReactiveFormsModule],
    }),
  ],
};

export default meta;
type Story = StoryObj<GovUKCheckboxComponent>;

const Template: StoryFn<GovUKCheckboxComponent> = (args) => ({
  props: { ...args, form: new FormGroup({ input: new FormControl(false) }) },
  template: `<form [formGroup]="form">
      <ngx-govuk-checkbox
        formControlName="input"
         ${argsToTemplate(args)}
      ></ngx-govuk-checkbox>
    </form>`,
});

export const Primary: Story = {
  render: Template,
  args: {
    id: 'checkbox1',
    label: 'Sample',
  },
};
