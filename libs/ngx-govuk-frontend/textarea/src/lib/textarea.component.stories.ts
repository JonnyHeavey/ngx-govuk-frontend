import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import {
  argsToTemplate,
  moduleMetadata,
  type Meta,
  type StoryFn,
  type StoryObj,
} from '@storybook/angular';
import { GovUKCommonFormInputDirective } from 'ngx-govuk-frontend/form-utils';
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
type Story = StoryObj<GovUKCommonFormInputDirective & GovUKTextareaComponent>;

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
  args: {
    inputId: 'story1',
    autocomplete: 'off',
    extraClasses: '',
    rows: 2,
  },
};
