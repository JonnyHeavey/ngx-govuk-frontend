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
import { GovUKFooterNavigationItemComponent } from './footer-navigation-item.component';
import { GovUKFooterNavigationSectionComponent } from './footer-navigation-section.component';
import { GovUKFooterNavigationComponent } from './footer-navigation.component';
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
        GovUKFooterNavigationComponent,
        GovUKFooterNavigationSectionComponent,
        GovUKFooterNavigationItemComponent,
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

export const WithSecondaryNavigation: Story = {
  render: (args) => ({
    props: args,
    template: `<ngx-govuk-footer>
      <ngx-govuk-footer-navigation>
        <ngx-govuk-footer-navigation-section title="Services and information" width="two-thirds" [columns]="2">
          <ngx-govuk-footer-navigation-item href="#">Benefits</ngx-govuk-footer-navigation-item>
          <ngx-govuk-footer-navigation-item href="#">Births, deaths, marriages and care</ngx-govuk-footer-navigation-item>
          <ngx-govuk-footer-navigation-item href="#">Business and self-employed</ngx-govuk-footer-navigation-item>
          <ngx-govuk-footer-navigation-item href="#">Childcare and parenting</ngx-govuk-footer-navigation-item>
          <ngx-govuk-footer-navigation-item href="#">Citizenship and living in the UK</ngx-govuk-footer-navigation-item>
          <ngx-govuk-footer-navigation-item href="#">Crime, justice and the law</ngx-govuk-footer-navigation-item>
          <ngx-govuk-footer-navigation-item href="#">Disabled people</ngx-govuk-footer-navigation-item>
          <ngx-govuk-footer-navigation-item href="#">Driving and transport</ngx-govuk-footer-navigation-item>
        </ngx-govuk-footer-navigation-section>
        <ngx-govuk-footer-navigation-section title="Government departments" width="one-third">
          <ngx-govuk-footer-navigation-item href="#">How government works</ngx-govuk-footer-navigation-item>
          <ngx-govuk-footer-navigation-item href="#">Departments</ngx-govuk-footer-navigation-item>
          <ngx-govuk-footer-navigation-item href="#">Worldwide</ngx-govuk-footer-navigation-item>
          <ngx-govuk-footer-navigation-item href="#">Policies</ngx-govuk-footer-navigation-item>
        </ngx-govuk-footer-navigation-section>
      </ngx-govuk-footer-navigation>
      <ngx-govuk-footer-links>
        <ngx-govuk-footer-link href="#">Help</ngx-govuk-footer-link>
        <ngx-govuk-footer-link href="#">Cookies</ngx-govuk-footer-link>
        <ngx-govuk-footer-link href="#">Contact</ngx-govuk-footer-link>
        <ngx-govuk-footer-link href="#">Terms and conditions</ngx-govuk-footer-link>
      </ngx-govuk-footer-links>
      <ngx-govuk-footer-meta>
        Built by the <a href="#" class="govuk-footer__link">Government Digital Service</a>
      </ngx-govuk-footer-meta>
    </ngx-govuk-footer>`,
  }),
};

export const WithFullSecondaryNavigation: Story = {
  render: (args) => ({
    props: args,
    template: `<ngx-govuk-footer>
      <ngx-govuk-footer-navigation>
        <ngx-govuk-footer-navigation-section title="Services and information" width="two-thirds" [columns]="2">
          <ngx-govuk-footer-navigation-item href="#">Benefits</ngx-govuk-footer-navigation-item>
          <ngx-govuk-footer-navigation-item href="#">Births, deaths, marriages and care</ngx-govuk-footer-navigation-item>
          <ngx-govuk-footer-navigation-item href="#">Business and self-employed</ngx-govuk-footer-navigation-item>
          <ngx-govuk-footer-navigation-item href="#">Childcare and parenting</ngx-govuk-footer-navigation-item>
          <ngx-govuk-footer-navigation-item href="#">Citizenship and living in the UK</ngx-govuk-footer-navigation-item>
          <ngx-govuk-footer-navigation-item href="#">Crime, justice and the law</ngx-govuk-footer-navigation-item>
          <ngx-govuk-footer-navigation-item href="#">Disabled people</ngx-govuk-footer-navigation-item>
          <ngx-govuk-footer-navigation-item href="#">Driving and transport</ngx-govuk-footer-navigation-item>
          <ngx-govuk-footer-navigation-item href="#">Education and learning</ngx-govuk-footer-navigation-item>
          <ngx-govuk-footer-navigation-item href="#">Employing people</ngx-govuk-footer-navigation-item>
          <ngx-govuk-footer-navigation-item href="#">Environment and countryside</ngx-govuk-footer-navigation-item>
          <ngx-govuk-footer-navigation-item href="#">Housing and local services</ngx-govuk-footer-navigation-item>
          <ngx-govuk-footer-navigation-item href="#">Money and tax</ngx-govuk-footer-navigation-item>
          <ngx-govuk-footer-navigation-item href="#">Passports, travel and living abroad</ngx-govuk-footer-navigation-item>
          <ngx-govuk-footer-navigation-item href="#">Visas and immigration</ngx-govuk-footer-navigation-item>
          <ngx-govuk-footer-navigation-item href="#">Working, jobs and pensions</ngx-govuk-footer-navigation-item>
        </ngx-govuk-footer-navigation-section>
        <ngx-govuk-footer-navigation-section title="Departments and policy" width="one-third">
          <ngx-govuk-footer-navigation-item href="#">How government works</ngx-govuk-footer-navigation-item>
          <ngx-govuk-footer-navigation-item href="#">Departments</ngx-govuk-footer-navigation-item>
          <ngx-govuk-footer-navigation-item href="#">Worldwide</ngx-govuk-footer-navigation-item>
          <ngx-govuk-footer-navigation-item href="#">Policies</ngx-govuk-footer-navigation-item>
          <ngx-govuk-footer-navigation-item href="#">Publications</ngx-govuk-footer-navigation-item>
          <ngx-govuk-footer-navigation-item href="#">Announcements</ngx-govuk-footer-navigation-item>
        </ngx-govuk-footer-navigation-section>
      </ngx-govuk-footer-navigation>
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
