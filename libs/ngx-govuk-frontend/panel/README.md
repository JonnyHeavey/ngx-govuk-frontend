# Panel Component

The panel component provides a visual container that highlights important content, typically used for confirmation or transaction end pages.

## GOV.UK Design System

This component follows the [GOV.UK Design System Panel component](https://design-system.service.gov.uk/components/panel/).

## Usage

### Import

```typescript
import { Component } from '@angular/core';
import { GovUKPanelComponent } from 'ngx-govuk-frontend/panel';

@Component({
  selector: 'app-example',
  standalone: true,
  imports: [GovUKPanelComponent],
  template: ` <ngx-govuk-panel title="Application complete"> Your reference number: HDJ2123F </ngx-govuk-panel> `,
})
export class ExampleComponent {}
```

### Example

```html
<ngx-govuk-panel title="Application complete"> Your reference number: HDJ2123F </ngx-govuk-panel>
```
