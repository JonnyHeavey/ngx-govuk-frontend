import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import {
  argsToTemplate,
  moduleMetadata,
  type Meta,
  type StoryFn,
  type StoryObj,
} from '@storybook/angular';
import { GovUKTextareaComponent } from './textarea.component';

const meta: Meta<GovUKTextareaComponent> = {
  component: GovUKTextareaComponent,
  title: 'Forms/GovUKTextareaComponent',
  decorators: [
    moduleMetadata({
      imports: [ReactiveFormsModule],
    }),
  ],
};

export default meta;
type Story = StoryObj<GovUKTextareaComponent>;

const Template: StoryFn<GovUKTextareaComponent> = (args) => ({
  props: { ...args, form: new FormGroup({ input: new FormControl('') }) },
  template: `<form [formGroup]="form">
      <ngx-govuk-textarea
        formControlName="input"
         ${argsToTemplate(args)}
      ></ngx-govuk-textarea>
    </form>`,
});

export const Primary: Story = {
  render: Template,
  args: {},
};
