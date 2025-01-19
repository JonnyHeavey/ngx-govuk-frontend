import { ActivatedRoute } from '@angular/router';
import {
  moduleMetadata,
  type Meta,
  type StoryFn,
  type StoryObj,
} from '@storybook/angular';
import { GovUKBreadcrumbDirective } from './breadcrumb/breadcrumb.directive';
import { GovUKBreadcrumbsComponent } from './breadcrumbs.component';

const meta: Meta<GovUKBreadcrumbsComponent> = {
  component: GovUKBreadcrumbsComponent,
  title: 'Breadcrumbs/GovUKBreadcrumbsComponent',
  decorators: [
    moduleMetadata({
      imports: [GovUKBreadcrumbsComponent, GovUKBreadcrumbDirective],
      providers: [{ provide: ActivatedRoute, useValue: {} }],
    }),
  ],
};
export default meta;
type Story = StoryObj<GovUKBreadcrumbsComponent>;

const Template: StoryFn<GovUKBreadcrumbsComponent> = (args) => ({
  props: { ...args },
  template: `
    <ngx-govuk-breadcrumbs>
      <ngx-govuk-breadcrumb link="page-one" label="Page One" />
      <ngx-govuk-breadcrumb link="page-two" label="Page Two" />
      <ngx-govuk-breadcrumb link="page-three" label="Page Three" />
    </ngx-govuk-breadcrumbs>
  `,
});

export const Primary: Story = {
  render: Template,
  args: {},
};
