import {
  argsToTemplate,
  moduleMetadata,
  type Meta,
  type StoryFn,
  type StoryObj,
} from '@storybook/angular';
import { GovUKTabComponent } from '../tab/tab.component';
import { GovUKTabsComponent } from './tabs.component';

const meta: Meta<GovUKTabsComponent> = {
  component: GovUKTabsComponent,
  title: 'Tabs/GovUKTabsComponent',
  decorators: [
    moduleMetadata({
      imports: [GovUKTabsComponent, GovUKTabComponent],
    }),
  ],
};
export default meta;
type Story = StoryObj<GovUKTabsComponent>;

const Template: StoryFn<GovUKTabsComponent> = (args) => ({
  props: { ...args },
  template: `
  <div class="govuk-frontend-supported">
    <ngx-govuk-tabs ${argsToTemplate(args)}>
      <ngx-govuk-tab id="tab-one" title="Tab One">
        Tab One Content
      </ngx-govuk-tab>
      <ngx-govuk-tab id="tab-two" title="Tab Two">
        Tab Two Content
      </ngx-govuk-tab>
      <ngx-govuk-tab id="tab-three" title="Tab Three">
        Tab Three Content
      </ngx-govuk-tab>
    </ngx-govuk-tabs>
  </div>
  `,
});

export const Primary: Story = {
  render: Template,
  args: {
    title: 'Tabs title',
  },
};
