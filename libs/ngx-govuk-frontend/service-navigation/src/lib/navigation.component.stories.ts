import { ActivatedRoute } from '@angular/router';
import {
  moduleMetadata,
  type Meta,
  type StoryFn,
  type StoryObj,
} from '@storybook/angular';
import { GovUKServiceNavigationItemDirective } from './item/navigation-item.directive';
import { GovUKServiceNavigationComponent } from './navigation.component';

const meta: Meta<GovUKServiceNavigationComponent> = {
  component: GovUKServiceNavigationComponent,
  title: 'Service Navigation/GovUKServiceNavigationComponent',
  decorators: [
    moduleMetadata({
      imports: [
        GovUKServiceNavigationComponent,
        GovUKServiceNavigationItemDirective,
      ],
      providers: [{ provide: ActivatedRoute, useValue: {} }],
    }),
  ],
};
export default meta;
type Story = StoryObj<GovUKServiceNavigationComponent>;

const Template: StoryFn<GovUKServiceNavigationComponent> = (args) => ({
  props: { ...args },
  template: `
    <ngx-govuk-service-navigation>
      <ngx-govuk-service-navigaiton-item link="page-one" label="Page One" />
      <ngx-govuk-service-navigaiton-item link="page-two" label="Page Two" />
      <ngx-govuk-service-navigaiton-item link="page-three" label="Page Three" />
    </ngx-govuk-service-navigation>
  `,
});

export const Primary: Story = {
  render: Template,
  args: {},
};
