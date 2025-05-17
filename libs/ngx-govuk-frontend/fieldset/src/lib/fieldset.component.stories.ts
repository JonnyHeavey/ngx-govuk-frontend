import {
  argsToTemplate,
  moduleMetadata,
  type Meta,
  type StoryFn,
  type StoryObj,
} from '@storybook/angular';
import { GovUKFieldsetComponent } from './fieldset.component';

const meta: Meta<GovUKFieldsetComponent> = {
  component: GovUKFieldsetComponent,
  title: 'Forms/GovUKFieldsetComponent',
  decorators: [
    moduleMetadata({
      imports: [GovUKFieldsetComponent],
    }),
  ],
  parameters: {
    layout: 'padded',
  },
  argTypes: {
    legend: {
      control: 'text',
      description: 'The legend text for the fieldset',
    },
    hint: {
      control: 'text',
      description: 'Optional hint text to provide further context',
    },
    errorMessage: {
      control: 'text',
      description: 'Optional error message when validation fails',
    },
    isPageTitle: {
      control: 'boolean',
      description: 'Whether the legend should be styled as a page heading (h1)',
    },
  },
};

export default meta;
type Story = StoryObj<GovUKFieldsetComponent>;

const Template: StoryFn<GovUKFieldsetComponent> = (args) => ({
  props: { ...args },
  template: `<ngx-govuk-fieldset ${argsToTemplate(args)}>
    <div class="govuk-form-group">
      <label class="govuk-label" for="event-name">
        Event name
      </label>
      <input class="govuk-input" id="event-name" name="event-name" type="text">
    </div>
    <div class="govuk-form-group">
      <label class="govuk-label" for="event-description">
        Event description
      </label>
      <textarea class="govuk-textarea" id="event-description" name="event-description" rows="5"></textarea>
    </div>
  </ngx-govuk-fieldset>`,
});

export const Primary: Story = {
  render: Template,
  args: {
    legend: 'What is the name of the event?',
    isPageTitle: true,
    hint: "The name you'll use on promotional material",
    errorMessage: '',
  },
};

export const WithError: Story = {
  render: Template,
  args: {
    legend: 'What is the name of the event?',
    isPageTitle: false,
    hint: "The name you'll use on promotional material",
    errorMessage: 'Enter an event name',
  },
};

export const WithoutPageHeading: Story = {
  render: Template,
  args: {
    legend: 'Event details',
    isPageTitle: false,
    hint: 'Please provide information about your event',
    errorMessage: '',
  },
};

export const WithDateInputs: StoryObj<GovUKFieldsetComponent> = {
  render: (args) => ({
    props: { ...args },
    template: `<ngx-govuk-fieldset ${argsToTemplate(args)}>
      <div class="govuk-date-input" id="date-of-birth">
        <div class="govuk-date-input__item">
          <div class="govuk-form-group">
            <label class="govuk-label govuk-date-input__label" for="date-of-birth-day">
              Day
            </label>
            <input class="govuk-input govuk-date-input__input govuk-input--width-2" id="date-of-birth-day" name="date-of-birth-day" type="text" pattern="[0-9]*" inputmode="numeric">
          </div>
        </div>
        <div class="govuk-date-input__item">
          <div class="govuk-form-group">
            <label class="govuk-label govuk-date-input__label" for="date-of-birth-month">
              Month
            </label>
            <input class="govuk-input govuk-date-input__input govuk-input--width-2" id="date-of-birth-month" name="date-of-birth-month" type="text" pattern="[0-9]*" inputmode="numeric">
          </div>
        </div>
        <div class="govuk-date-input__item">
          <div class="govuk-form-group">
            <label class="govuk-label govuk-date-input__label" for="date-of-birth-year">
              Year
            </label>
            <input class="govuk-input govuk-date-input__input govuk-input--width-4" id="date-of-birth-year" name="date-of-birth-year" type="text" pattern="[0-9]*" inputmode="numeric">
          </div>
        </div>
      </div>
    </ngx-govuk-fieldset>`,
  }),
  args: {
    legend: 'What is your date of birth?',
    hint: 'For example, 31 3 1980',
    isPageTitle: false,
  },
};

export const WithCheckboxes: StoryObj<GovUKFieldsetComponent> = {
  render: (args) => ({
    props: { ...args },
    template: `<ngx-govuk-fieldset ${argsToTemplate(args)}>
      <div class="govuk-checkboxes" data-module="govuk-checkboxes">
        <div class="govuk-checkboxes__item">
          <input class="govuk-checkboxes__input" id="waste-1" name="waste" type="checkbox" value="carcasses">
          <label class="govuk-label govuk-checkboxes__label" for="waste-1">
            Waste from animal carcasses
          </label>
        </div>
        <div class="govuk-checkboxes__item">
          <input class="govuk-checkboxes__input" id="waste-2" name="waste" type="checkbox" value="mines">
          <label class="govuk-label govuk-checkboxes__label" for="waste-2">
            Waste from mines or quarries
          </label>
        </div>
        <div class="govuk-checkboxes__item">
          <input class="govuk-checkboxes__input" id="waste-3" name="waste" type="checkbox" value="farm">
          <label class="govuk-label govuk-checkboxes__label" for="waste-3">
            Farm or agricultural waste
          </label>
        </div>
      </div>
    </ngx-govuk-fieldset>`,
  }),
  args: {
    legend: 'Which types of waste do you transport?',
    hint: 'Select all that apply',
    isPageTitle: false,
  },
};
