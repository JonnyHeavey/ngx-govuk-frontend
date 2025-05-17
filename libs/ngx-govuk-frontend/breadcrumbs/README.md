# ngx-govuk-frontend/breadcrumbs

Secondary entry point of `ngx-govuk-frontend`. It can be used by importing from `ngx-govuk-frontend/breadcrumbs`.

## Overview

The breadcrumbs component helps users understand where they are in a website's structure and navigate back to previous pages. This is an Angular implementation of the [GOV.UK Design System Breadcrumbs component](https://design-system.service.gov.uk/components/breadcrumbs/).

## Components and Directives

- `GovUKBreadcrumbsComponent` - The main container component for breadcrumbs
- `GovUKBreadcrumbDirective` - Applied to individual breadcrumb items

## Usage

```typescript
import {
  GovUKBreadcrumbsComponent,
  GovUKBreadcrumbDirective
} from 'ngx-govuk-frontend/breadcrumbs';

@Component({
  // ...
  imports: [
    GovUKBreadcrumbsComponent,
    GovUKBreadcrumbDirective
  ]
})
```

### Basic example

```html
<ngx-govuk-breadcrumbs>
  <ngx-govuk-breadcrumb link="/" label="Home" />
  <ngx-govuk-breadcrumb link="/section" label="Section" />
  <ngx-govuk-breadcrumb label="Current Page" />
</ngx-govuk-breadcrumbs>
```

### Dynamic example

```html
<ngx-govuk-breadcrumbs>
  @for (item of breadcrumbs; track item.text) {
  <ngx-govuk-breadcrumb [link]="item.link" [label]="item.text" />
  }
</ngx-govuk-breadcrumbs>
```

```typescript
breadcrumbs = [
  { text: 'Home', link: '/' },
  { text: 'Section', link: '/section' },
  { text: 'Current Page', link: '/section/page' },
];
```
