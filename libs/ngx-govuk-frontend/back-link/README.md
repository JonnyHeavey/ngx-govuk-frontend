# Back Link Component

The back link component helps users navigate back to the previous page in a multi-page transaction or service flow. It provides a simple way to improve the user experience by helping them navigate through a service.

## GOV.UK Design System

This component follows the [GOV.UK Design System Back link component](https://design-system.service.gov.uk/components/back-link/).

## Usage

### Import

```typescript
import { Component } from '@angular/core';
import { GovUKBackLinkComponent } from 'ngx-govuk-frontend/back-link';

@Component({
  selector: 'app-example',
  standalone: true,
  imports: [GovUKBackLinkComponent],
  template: ` <ngx-govuk-back-link [link]="'/previous-page'">Back</ngx-govuk-back-link> `,
})
export class ExampleComponent {}
```

### Example

```html
<!-- Basic back link -->
<ngx-govuk-back-link [link]="'/previous-page'">Back</ngx-govuk-back-link>

<!-- With inverse color scheme for use on dark backgrounds -->
<div style="background-color: #0b0c0c; padding: 15px;">
  <ngx-govuk-back-link [link]="'/previous-page'" [inverse]="true">Back</ngx-govuk-back-link>
</div>
```
