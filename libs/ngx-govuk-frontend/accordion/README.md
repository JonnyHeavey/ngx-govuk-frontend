# Accordion Component

The accordion component lets users show and hide sections of related content on a page. It helps users view only the content they need by dividing information into manageable sections that can be expanded and collapsed.

## GOV.UK Design System

This component follows the [GOV.UK Design System Accordion component](https://design-system.service.gov.uk/components/accordion/).

## Usage

### Import

```typescript
import { Component } from '@angular/core';
import { GovUKAccordionComponent, GovUKAccordionItemComponent } from 'ngx-govuk-frontend/accordion';

@Component({
  selector: 'app-example',
  standalone: true,
  imports: [GovUKAccordionComponent, GovUKAccordionItemComponent],
  template: `
    <ngx-govuk-accordion id="accordion-default">
      <ngx-govuk-accordion-item itemId="section-1" heading="Section 1" summary="This is a summary of section 1">
        <p>This is the content for section 1.</p>
      </ngx-govuk-accordion-item>
      <ngx-govuk-accordion-item itemId="section-2" heading="Section 2">
        <p>This is the content for section 2.</p>
      </ngx-govuk-accordion-item>
    </ngx-govuk-accordion>
  `,
})
export class ExampleComponent {}
```

### Example

```html
<ngx-govuk-accordion id="accordion-default">
  <ngx-govuk-accordion-item itemId="section-1" heading="Section 1" summary="This is a summary of section 1">
    <p>This is the content for section 1.</p>
  </ngx-govuk-accordion-item>
  <ngx-govuk-accordion-item itemId="section-2" heading="Section 2">
    <p>This is the content for section 2.</p>
  </ngx-govuk-accordion-item>
</ngx-govuk-accordion>
```
