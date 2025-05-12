import { Meta, StoryObj, moduleMetadata } from '@storybook/angular';
import { GovUKAccordionItemComponent } from '../accordion-item/accordion-item.component';
import { GovUKAccordionComponent } from './accordion.component';

const meta: Meta<GovUKAccordionComponent> = {
  title: 'Accordion/GovUKAccordionComponent',
  component: GovUKAccordionComponent,
  decorators: [
    moduleMetadata({
      imports: [GovUKAccordionComponent, GovUKAccordionItemComponent],
    }),
  ],
  tags: ['autodocs'],
  argTypes: {
    id: { control: 'text' },
  },
  args: {
    id: 'accordion-example',
  },
};

export default meta;
type Story = StoryObj<GovUKAccordionComponent>;

export const Default: Story = {
  render: (args) => ({
    props: args,
    template: `
      <div class="govuk-frontend-supported">
        <ngx-govuk-accordion [id]="id">
          <ngx-govuk-accordion-item itemId="1" heading="Writing well for the web">
            <p class="govuk-body">This is the content for Writing well for the web.</p>
          </ngx-govuk-accordion-item>
          <ngx-govuk-accordion-item itemId="2" heading="Writing well for specialists">
            <p class="govuk-body">This is the content for Writing well for specialists.</p>
          </ngx-govuk-accordion-item>
          <ngx-govuk-accordion-item itemId="3" heading="Know your audience">
            <p class="govuk-body">This is the content for Know your audience.</p>
          </ngx-govuk-accordion-item>
          <ngx-govuk-accordion-item itemId="4" heading="How people read">
            <p class="govuk-body">This is the content for How people read.</p>
          </ngx-govuk-accordion-item>
        </ngx-govuk-accordion>
      </div>
    `,
  }),
};

export const WithSummary: Story = {
  render: (args) => ({
    props: args,
    template: `
      <div class="govuk-frontend-supported">
        <ngx-govuk-accordion [id]="id">
          <ngx-govuk-accordion-item 
            itemId="1" 
            heading="Understanding agile project management"
            summary="Introductions, methods, core features."
          >
            <ul class="govuk-list">
              <li>
                <a class="govuk-link" href="#">Agile and government services: an introduction</a>
              </li>
              <li>
                <a class="govuk-link" href="#">Agile methods: an introduction</a>
              </li>
              <li>
                <a class="govuk-link" href="#">Core principles of agile</a>
              </li>
            </ul>
          </ngx-govuk-accordion-item>
          <ngx-govuk-accordion-item 
            itemId="2" 
            heading="Working with agile methods"
            summary="Workspaces, tools and techniques, user stories, planning."
          >
            <ul class="govuk-list">
              <li>
                <a class="govuk-link" href="#">Creating an agile working environment</a>
              </li>
              <li>
                <a class="govuk-link" href="#">Agile tools and techniques</a>
              </li>
              <li>
                <a class="govuk-link" href="#">Set up a team wall</a>
              </li>
              <li>
                <a class="govuk-link" href="#">Writing user stories</a>
              </li>
              <li>
                <a class="govuk-link" href="#">Planning in agile</a>
              </li>
              <li>
                <a class="govuk-link" href="#">Deciding on priorities</a>
              </li>
              <li>
                <a class="govuk-link" href="#">Developing a roadmap</a>
              </li>
            </ul>
          </ngx-govuk-accordion-item>
        </ngx-govuk-accordion>
      </div>
    `,
  }),
};

export const WithInitiallyExpandedItems: Story = {
  render: (args) => ({
    props: {
      ...args,
      initialExpanded: ['1', '3'],
    },
    template: `
      <div class="govuk-frontend-supported">
        <ngx-govuk-accordion [id]="id" [initialExpanded]="initialExpanded">
          <ngx-govuk-accordion-item itemId="1" heading="Section 1 (Initially expanded)">
            <p class="govuk-body">This is the content for Section 1.</p>
          </ngx-govuk-accordion-item>
          <ngx-govuk-accordion-item itemId="2" heading="Section 2">
            <p class="govuk-body">This is the content for Section 2.</p>
          </ngx-govuk-accordion-item>
          <ngx-govuk-accordion-item itemId="3" heading="Section 3 (Initially expanded)">
            <p class="govuk-body">This is the content for Section 3.</p>
          </ngx-govuk-accordion-item>
          <ngx-govuk-accordion-item itemId="4" heading="Section 4">
            <p class="govuk-body">This is the content for Section 4.</p>
          </ngx-govuk-accordion-item>
        </ngx-govuk-accordion>
      </div>
    `,
  }),
};
