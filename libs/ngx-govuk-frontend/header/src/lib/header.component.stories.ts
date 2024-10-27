import { ActivatedRoute } from '@angular/router';
import {
  argsToTemplate,
  moduleMetadata,
  type Meta,
  type StoryFn,
  type StoryObj,
} from '@storybook/angular';
import { GovUKHeaderComponent } from './header.component';

const meta: Meta<GovUKHeaderComponent> = {
  component: GovUKHeaderComponent,
  title: 'Header/GovUKHeaderComponent',
  decorators: [
    moduleMetadata({
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {},
        },
      ],
    }),
  ],
};

export default meta;
type Story = StoryObj<GovUKHeaderComponent>;

const Template: StoryFn<GovUKHeaderComponent> = (args) => ({
  props: { ...args },
  template: `<ngx-govuk-header ${argsToTemplate(args)}>
  </ngx-govuk-header>`,
});

const defaultArgs = {
  logoLink: '/',
};

export const Primary: Story = {
  render: Template,
  args: defaultArgs,
};

export const ServiceName: Story = {
  render: Template,
  args: {
    ...defaultArgs,
    appName: 'Service name',
    appLink: '/',
  },
};
