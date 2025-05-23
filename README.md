# UK Government Angular Libraries

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Introduction

This monorepo contains a collection of Angular libraries designed to help developers build applications for UK government services. Each library is focused on a specific design system or set of requirements, making it easier to create accessible, compliant, and user-friendly government applications.

## Available Libraries

### [NgxGovUKFrontend](libs/ngx-govuk-frontend/README.md)

A comprehensive implementation of the [GOV.UK Design System](https://design-system.service.gov.uk/) for Angular applications. This library provides:

- Complete set of GOV.UK Design System components
- Form controls and validation
- Accessible components following WCAG guidelines
- Responsive layouts and patterns
- Integration with Angular's form system

[View NgxGovUKFrontend Documentation](https://jonnyheavey.github.io/ngx-govuk-frontend)

## Development

### Prerequisites

- Node.js (LTS version recommended)
- Angular 19+
- Nx CLI

### Getting Started

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Run the development server:
   ```bash
   nx serve test-app
   ```

### Running Tests

```bash
# Run all tests
nx run-many --target=test --all

# Run tests for a specific library
nx test ngx-govuk-frontend
```

## Contributing

We welcome contributions to any of the libraries in this repository. Please see the individual library READMEs for specific contribution guidelines.

General contribution guidelines:

1. Check existing issues or create a new one
2. Fork the repository
3. Create a feature branch
4. Make your changes
5. Write tests
6. Submit a pull request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- [GOV.UK Design System Team](https://design-system.service.gov.uk/get-started/team/)
