# Date Input

A date input component that follows the GOV.UK Design System pattern.

## Usage

The date input component provides just the input fields for day, month, and year. You will typically wrap this in a form-group with appropriate labels, hints, and error messages.

```html
<div class="govuk-form-group">
  <h1 class="govuk-heading-l">What is your date of birth?</h1>
  <div class="govuk-hint">For example, 27 3 2007</div>
  <ngx-govuk-date-input formControlName="dateOfBirth" inputId="date-of-birth"></ngx-govuk-date-input>
</div>
```

## API Reference

### Inputs

- `inputId` - Optional. The ID prefix for the input elements.
- `extraClasses` - Optional. Additional CSS classes to apply to the input elements.

### Form Integration

The component implements `ControlValueAccessor` and can be used with Angular reactive forms.

#### Value Formats

The component accepts and outputs dates in the following formats:

- ISO date string format (YYYY-MM-DD)
- Object format with `day`, `month`, and `year` properties

When all three date parts are filled in, the component will output an ISO date string.
For partial dates (when not all parts are filled in), it will output an object with the available parts.
