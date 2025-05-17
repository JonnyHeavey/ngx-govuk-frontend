# Tag Component

The tag component is used to highlight the status of something, such as a project phase, content status, or transaction state. It helps users quickly identify important information using a simple visual indicator.

## GOV.UK Design System

This component follows the [GOV.UK Design System Tag component](https://design-system.service.gov.uk/components/tag/).

## Usage

### Import

```typescript
import { Component } from '@angular/core';
import { GovUKTagComponent } from 'ngx-govuk-frontend/tag';

@Component({
  selector: 'app-example',
  standalone: true,
  imports: [GovUKTagComponent],
  template: `
    <ngx-govuk-tag>Active</ngx-govuk-tag>
    <ngx-govuk-tag color="green">Approved</ngx-govuk-tag>
    <ngx-govuk-tag color="red">Rejected</ngx-govuk-tag>
  `,
})
export class ExampleComponent {}
```

### Example

```html
<!-- Default blue tag -->
<ngx-govuk-tag>Active</ngx-govuk-tag>

<!-- Custom color tags -->
<ngx-govuk-tag color="green">Approved</ngx-govuk-tag>
<ngx-govuk-tag color="red">Rejected</ngx-govuk-tag>
<ngx-govuk-tag color="yellow">Pending</ngx-govuk-tag>
```

### Available colors

The tag component supports the following colors:

- grey
- green
- turquoise
- blue (default)
- light-blue
- purple
- pink
- red
- orange
- yellow
