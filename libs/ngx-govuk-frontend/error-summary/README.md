# Error Summary Component

A component that implements the [GOV.UK Error Summary component](https://design-system.service.gov.uk/components/error-summary/).

Use this component at the top of a page to summarise any errors a user has made. When a user makes an error, you should show both an error summary and an error message next to each answer that contains an error.

## Usage

```html
<ngx-govuk-error-summary title="There is a problem">
  <ngx-govuk-error-summary-item text="Enter your full name" targetId="full-name"></ngx-govuk-error-summary-item>
  <ngx-govuk-error-summary-item text="The date your passport was issued must be in the past" targetId="passport-issued-year"></ngx-govuk-error-summary-item>
</ngx-govuk-error-summary>
```

## Configuration

The error summary component uses Angular Router's fragment navigation to scroll to the elements with errors. For this to work correctly, you must enable anchor scrolling in your application.

### Enable Anchor Scrolling

You can enable anchor scrolling in one of two ways:

1. With the Router Module:

```typescript
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      anchorScrolling: 'enabled',
    }),
  ],
})
export class AppModule {}
```

2. With Standalone API using `withInMemoryScrolling`:

```typescript
import { provideRouter, withInMemoryScrolling } from '@angular/router';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes, withInMemoryScrolling({ anchorScrolling: 'enabled' }))],
};
```

Without enabling this option, clicking on error links will navigate to the fragment but may not properly scroll to the element.

## API Documentation

### Error Summary Component

#### Inputs

| Name    | Type     | Default                | Description                                             |
| ------- | -------- | ---------------------- | ------------------------------------------------------- |
| `title` | `string` | `'There is a problem'` | Text to use for the heading of the error summary block. |

### Error Summary Item Directive

#### Inputs

| Name       | Type     | Default | Description                                                                                                                                  |
| ---------- | -------- | ------- | -------------------------------------------------------------------------------------------------------------------------------------------- |
| `text`     | `string` | -       | Text for the error link item. Required.                                                                                                      |
| `targetId` | `string` | -       | ID of the form field with the error. Required. The component will create a link to this fragment using Angular Router's fragment navigation. |
