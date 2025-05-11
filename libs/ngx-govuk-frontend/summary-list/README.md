# Summary List Component

A component for displaying a GOV.UK summary list. A summary list is used to summarize information, for example, a user's responses at the end of a form.

This is an Angular implementation of the [GOV.UK Summary List component](https://design-system.service.gov.uk/components/summary-list/).

## Usage

### Basic Summary List

```html
<ngx-govuk-summary-list>
  <ngx-govuk-summary-list-item key="Name">
    <ng-template ngxGovUkSummaryListValue> Sarah Philips </ng-template>
    <ngx-govuk-summary-list-actions>
      <ngx-govuk-summary-list-action href="#" text="Change" visuallyHiddenText="name"></ngx-govuk-summary-list-action>
    </ngx-govuk-summary-list-actions>
  </ngx-govuk-summary-list-item>
  <ngx-govuk-summary-list-item key="Date of birth" value="5 January 1978">
    <ngx-govuk-summary-list-actions>
      <ngx-govuk-summary-list-action href="#" text="Change" visuallyHiddenText="date of birth"></ngx-govuk-summary-list-action>
    </ngx-govuk-summary-list-actions>
  </ngx-govuk-summary-list-item>
</ngx-govuk-summary-list>
```

### With Multiple Actions

```html
<ngx-govuk-summary-list-item key="Contact details">
  <ng-template ngxGovUkSummaryListValue>
    <p class="govuk-body">Email: <a href="mailto:sarah.phillips@example.com">sarah.phillips@example.com</a></p>
    <p class="govuk-body">Phone: 07700 900457</p>
  </ng-template>
  <ngx-govuk-summary-list-actions>
    <ngx-govuk-summary-list-action href="#" text="Change" visuallyHiddenText="contact details"></ngx-govuk-summary-list-action>
    <ngx-govuk-summary-list-action href="#" text="Remove" visuallyHiddenText="contact details"></ngx-govuk-summary-list-action>
  </ngx-govuk-summary-list-actions>
</ngx-govuk-summary-list-item>
```

### Summary Card

```html
<ngx-govuk-summary-list-card title="University of Gloucestershire">
  <ngx-govuk-summary-list-card-actions>
    <ngx-govuk-summary-list-action href="#" text="Delete choice" visuallyHiddenText="of University of Gloucestershire"></ngx-govuk-summary-list-action>
  </ngx-govuk-summary-list-card-actions>
  <ngx-govuk-summary-list>
    <ngx-govuk-summary-list-item key="Course" value="English (3DMD)"></ngx-govuk-summary-list-item>
    <ngx-govuk-summary-list-item key="Location" value="School name, Road, City, SW1 1AA"></ngx-govuk-summary-list-item>
  </ngx-govuk-summary-list>
</ngx-govuk-summary-list-card>
```

## Inputs

### Summary List Component

| Name     | Type    | Description                                                                     |
| -------- | ------- | ------------------------------------------------------------------------------- |
| noBorder | boolean | Optional. Whether to render the summary list without a border. Default is false |

### Summary List Card Component

| Name  | Type   | Description                              |
| ----- | ------ | ---------------------------------------- |
| title | string | Required. The title for the summary card |

### Summary List Item Component

| Name  | Type   | Description                                                      |
| ----- | ------ | ---------------------------------------------------------------- |
| key   | string | Required. The key to display for this summary list item          |
| value | string | Optional. Simple text value to display (if not using a template) |

### Summary List Action Component

| Name               | Type   | Description                                                              |
| ------------------ | ------ | ------------------------------------------------------------------------ |
| href               | string | Required. URL for the action link                                        |
| text               | string | Required. Text to display for the action (e.g., "Change" or "Remove")    |
| visuallyHiddenText | string | Optional. Additional text only shown to screen readers for accessibility |

## Components and Directives

### ngxGovUkSummaryListValue (Directive)

Use this directive with `<ng-template>` to provide complex HTML content for a summary list item's value:

```html
<ng-template ngxGovUkSummaryListValue>
  <p>72 Guild Street<br />London<br />SE23 6FH</p>
</ng-template>
```

### ngx-govuk-summary-list-actions (Component)

Use this component as a container for action links. When multiple actions are used, they will be rendered as an unordered list according to the GOV.UK Design System:

```html
<ngx-govuk-summary-list-actions>
  <ngx-govuk-summary-list-action href="#" text="Change" visuallyHiddenText="name"></ngx-govuk-summary-list-action>
  <ngx-govuk-summary-list-action href="#" text="Remove" visuallyHiddenText="name"></ngx-govuk-summary-list-action>
</ngx-govuk-summary-list-actions>
```

### ngx-govuk-summary-list-card-actions (Component)

Use this component as a container for action links in a summary card. These actions will appear in the card header:

```html
<ngx-govuk-summary-list-card-actions>
  <ngx-govuk-summary-list-action href="#" text="Delete choice" visuallyHiddenText="of University of Gloucestershire"></ngx-govuk-summary-list-action>
</ngx-govuk-summary-list-card-actions>
```
