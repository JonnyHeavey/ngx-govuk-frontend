# UK Public Service Angular Libraries

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Introduction

This monorepo contains a collection of libraries which implement/wrap existing UK public service design systems, making it easier to create compliant public service applications with Angular.

## Available Libraries

### NgxGovUKFrontend

A comprehensive implementation of the [GOV.UK Design System](https://design-system.service.gov.uk/) for Angular applications.

- [Documentation](https://jonnyheavey.github.io/ngx-uk-frontend)
- [README](libs/ngx-govuk-frontend/README.md)

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
   nx serve govuk-service
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
