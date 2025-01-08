import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import {
  argsToTemplate,
  moduleMetadata,
  type Meta,
  type StoryFn,
  type StoryObj,
} from '@storybook/angular';
import { GovUKCommonFormInputDirective } from 'ngx-govuk-frontend/form-utils';
import { GovUKFileUploadComponent } from './file-upload.component';

const meta: Meta<GovUKFileUploadComponent> = {
  component: GovUKFileUploadComponent,
  title: 'Forms/GovUKFileUploadComponent',
  decorators: [
    moduleMetadata({
      imports: [ReactiveFormsModule],
    }),
  ],
};

export default meta;
type Story = StoryObj<GovUKCommonFormInputDirective & GovUKFileUploadComponent>;

const Template: StoryFn<GovUKFileUploadComponent> = (args) => ({
  props: { ...args, form: new FormGroup({ input: new FormControl('') }) },
  template: `<form [formGroup]="form">
      <ngx-govuk-file-upload
        formControlName="input"
         ${argsToTemplate(args)}
      ></ngx-govuk-file-upload>
    </form>`,
});

export const Primary: Story = {
  render: Template,
  args: {
    inputId: 'story1',
    extraClasses: '',
  },
};
