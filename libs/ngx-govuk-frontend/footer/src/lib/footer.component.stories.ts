import { provideAnimations } from '@angular/platform-browser/animations';
import {
  applicationConfig,
  type Meta,
  moduleMetadata,
  type StoryObj,
} from '@storybook/angular';
import { GovUKFooterLinkComponent } from './footer-link.component';
import { GovUKFooterLinksComponent } from './footer-links.component';
import { GovUKFooterMetaComponent } from './footer-meta.component';
import { GovUKFooterComponent } from './footer.component';

const meta: Meta<GovUKFooterComponent> = {
  component: GovUKFooterComponent,
  title: 'Footer/GovUKFooterComponent',
  decorators: [
    moduleMetadata({
      imports: [
        GovUKFooterLinkComponent,
        GovUKFooterLinksComponent,
        GovUKFooterMetaComponent,
      ],
    }),
    applicationConfig({
      providers: [provideAnimations()],
    }),
  ],
};

export default meta;
type Story = StoryObj<GovUKFooterComponent>;

export const Primary: Story = {
  args: {},
  render: (args) => ({
    props: args,
    template: `<ngx-govuk-footer></ngx-govuk-footer>`,
  }),
};

export const WithLinksAndMeta: Story = {
  render: (args) => ({
    props: args,
    template: `<ngx-govuk-footer>
      <ngx-govuk-footer-links>
        <ngx-govuk-footer-link href="#">Help</ngx-govuk-footer-link>
        <ngx-govuk-footer-link href="#">Cookies</ngx-govuk-footer-link>
        <ngx-govuk-footer-link href="#">Contact</ngx-govuk-footer-link>
        <ngx-govuk-footer-link href="#">Terms and conditions</ngx-govuk-footer-link>
        <ngx-govuk-footer-link href="#">Rhestr o Wasanaethau Cymraeg</ngx-govuk-footer-link>
      </ngx-govuk-footer-links>
      <ngx-govuk-footer-meta>
        Built by the <a href="#" class="govuk-footer__link">Government Digital Service</a>
      </ngx-govuk-footer-meta>
    </ngx-govuk-footer>`,
  }),
};

export const WithLinksOnly: Story = {
  render: (args) => ({
    props: args,
    template: `<ngx-govuk-footer>
      <ngx-govuk-footer-links>
        <ngx-govuk-footer-link href="#">Help</ngx-govuk-footer-link>
        <ngx-govuk-footer-link href="#">Cookies</ngx-govuk-footer-link>
        <ngx-govuk-footer-link href="#">Contact</ngx-govuk-footer-link>
      </ngx-govuk-footer-links>
    </ngx-govuk-footer>`,
  }),
};

export const WithMetaOnly: Story = {
  render: (args) => ({
    props: args,
    template: `<ngx-govuk-footer>
      <ngx-govuk-footer-meta>
        Built by the <a href="#" class="govuk-footer__link">Government Digital Service</a>
      </ngx-govuk-footer-meta>
    </ngx-govuk-footer>`,
  }),
};
