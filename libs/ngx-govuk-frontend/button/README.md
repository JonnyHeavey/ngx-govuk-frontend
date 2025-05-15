# Button Component

The button component allows users to take actions, submit forms, or navigate to a new page. It's an essential interactive element for helping users complete tasks and move through a service.

## GOV.UK Design System

This component follows the [GOV.UK Design System Button component](https://design-system.service.gov.uk/components/button/).

## Usage

### Import

```typescript
import { Component } from '@angular/core';
import { GovUKButtonComponent, GovUKButtonGroupComponent } from 'ngx-govuk-frontend/button';

@Component({
  selector: 'app-example',
  standalone: true,
  imports: [GovUKButtonComponent, GovUKButtonGroupComponent],
  template: `
    <ngx-govuk-button>Save and continue</ngx-govuk-button>

    <ngx-govuk-button-group>
      <ngx-govuk-button>Save and continue</ngx-govuk-button>
      <ngx-govuk-button color="secondary">Cancel</ngx-govuk-button>
    </ngx-govuk-button-group>
  `,
})
export class ExampleComponent {}
```

### Example

```html
<!-- Default primary button -->
<ngx-govuk-button>Save and continue</ngx-govuk-button>

<!-- Secondary button -->
<ngx-govuk-button color="secondary">Cancel</ngx-govuk-button>

<!-- Warning button -->
<ngx-govuk-button color="warning">Delete account</ngx-govuk-button>

<!-- Disabled button -->
<ngx-govuk-button [disabled]="true">Disabled button</ngx-govuk-button>

<!-- Start button with forward arrow icon -->
<ngx-govuk-button [start]="true">Start now</ngx-govuk-button>

<!-- Button group for related actions -->
<ngx-govuk-button-group>
  <ngx-govuk-button>Save and continue</ngx-govuk-button>
  <ngx-govuk-button color="secondary">Cancel</ngx-govuk-button>
</ngx-govuk-button-group>
```

### Available colors

The button component supports the following color variants:

- primary (default)
- secondary
- warning
- inverse (for use on dark backgrounds)
