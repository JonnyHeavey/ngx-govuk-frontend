# NgxGovUKFrontend

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Documentation](https://img.shields.io/badge/docs-website-blue)](https://jonnyheavey.github.io/ngx-govuk-frontend)

## Introduction

NgxGovUKFrontend provides a complete set of Angular components that implement the [GOV.UK Design System](https://design-system.service.gov.uk/). This library makes it easier for Angular developers to build web applications that comply with the GOV.UK design standards and accessibility requirements.

The library is designed to:

- Provide accessible components that match the GOV.UK Design System specification
- Be easily integrated into Angular applications
- Follow best practices for performance and accessibility

## Documentation

**[View the full NgxGovUKFrontend documentation](https://jonnyheavey.github.io/ngx-govuk-frontend)**

For documentation on the GOV.UK Design System that this library implements, please visit:

- [GOV.UK Design System](https://design-system.service.gov.uk/)
- [GOV.UK Components](https://design-system.service.gov.uk/components/)
- [GOV.UK Patterns](https://design-system.service.gov.uk/patterns/)
- [GOV.UK Styles](https://design-system.service.gov.uk/styles/)

## Installation

### Prerequisites

- Node.js (LTS version recommended)
- Angular 19+ project

### Install the package

```bash
# Using npm
npm install ngx-govuk-frontend --save

# Using yarn
yarn add ngx-govuk-frontend

# Using pnpm
pnpm add ngx-govuk-frontend
```

### Setup in your Angular project

#### Include design system styles

There are two ways to add the GOV.UK styles to your application:

##### Option 1: Import in your styles.scss

Add the styles to your application by importing them in your `styles.scss`:

```scss
@import 'govuk-frontend/dist/govuk/all';
```

##### Option 2: Configure in project.json

Alternatively, you can add the styles directly in your project's configuration file (`project.json` or `angular.json`):

```json
"styles": [
  "src/styles.scss",
  "node_modules/govuk-frontend/dist/govuk/govuk-frontend.min.css"
],
```

#### Importing Components

All components in NgxGovUKFrontend are standalone, allowing you to import only what you need:

```typescript
// In your component
import { Component } from '@angular/core';
import { GovukButtonComponent } from 'ngx-govuk-frontend/button';
import { GovukPanelComponent } from 'ngx-govuk-frontend/panel';
import { GovukErrorSummaryComponent } from 'ngx-govuk-frontend/error-summary';

@Component({
  selector: 'app-my-component',
  standalone: true,
  imports: [GovukButtonComponent, GovukPanelComponent, GovukErrorSummaryComponent],
  template: `
    <govuk-button>Save and continue</govuk-button>

    <govuk-panel title="Application complete">
      Your reference number is<br />
      <strong>HDJ2123F</strong>
    </govuk-panel>
  `,
})
export class MyComponent {}
```

For NgModule-based applications, you can import components in your module:

```typescript
import { NgModule } from '@angular/core';
import { GovukButtonComponent } from 'ngx-govuk-frontend/button';
import { GovukPanelComponent } from 'ngx-govuk-frontend/panel';

@NgModule({
  imports: [GovukButtonComponent, GovukPanelComponent],
  // ... other module configuration
})
export class MyModule {}
```

#### Assets Configuration

You'll also need to include the GOV.UK assets in your project configuration:

```json
"assets": [
  "src/favicon.ico",
  "src/assets",
  {
    "glob": "**/*",
    "input": "node_modules/govuk-frontend/dist/govuk/assets/images",
    "output": "/assets/images"
  },
  {
    "glob": "**/*",
    "input": "node_modules/govuk-frontend/dist/govuk/assets/fonts",
    "output": "/assets/fonts"
  },
  {
    "glob": "**/*",
    "input": "node_modules/govuk-frontend/dist/govuk/assets",
    "output": "/assets"
  }
]
```

## Usage

After installation, you can use the components in your templates:

```html
<govuk-button>Save and continue</govuk-button>

<govuk-panel title="Application complete">
  Your reference number is<br />
  <strong>HDJ2123F</strong>
</govuk-panel>

<govuk-error-summary>
  <govuk-error-summary-title>There is a problem</govuk-error-summary-title>
  <govuk-error-summary-body>
    <ul class="govuk-list govuk-error-summary__list">
      <li><a href="#name">Enter your full name</a></li>
      <li><a href="#email">Enter an email address</a></li>
    </ul>
  </govuk-error-summary-body>
</govuk-error-summary>
```

## Contributing

We welcome contributions to NgxGovUKFrontend! Please follow these steps to contribute:

1. Check the [issues page](https://github.com/JonnyHeavey/ngx-govuk-frontend/issues) for open issues or create a new one to discuss your proposed changes
2. Fork the repository
3. Create a new branch for your feature or bugfix
4. Make your changes
5. Write tests for your changes
6. Run the tests with `nx test ngx-govuk-frontend`
7. Submit a pull request

### Coding Standards

- Follow the [Angular style guide](https://angular.io/guide/styleguide)
- Write unit tests for all new features
- Ensure all tests pass before submitting PRs
- Keep PRs focused on a single topic
- Use meaningful commit messages

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- [GOV.UK Design System Team](https://design-system.service.gov.uk/get-started/team/) for creating and maintaining the design system
