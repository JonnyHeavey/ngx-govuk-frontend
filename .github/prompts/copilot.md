# GitHub Copilot Context for ngx-govuk-frontend

This is an Angular library that provides components implementing the GOV.UK Design System. When suggesting code:

## Project Structure

- Components are organized in individual directories under `libs/ngx-govuk-frontend/`
- Each component follows the pattern:
  - `src/lib/component.component.ts` - Component implementation
  - `src/lib/component.component.spec.ts` - Unit tests
  - `src/lib/component.component.html` - Template
  - `src/lib/component.component.stories.ts` - Component storybook
  - `src/index.ts` - Exports
  - `src/README.md` - Entrypoint documentation
  - `src/ng-package.ts` - Packaging information
- Each component entrypoint should be referenced within `tsconfig.base.json`

## Coding Standards

- Use Angular best practices and conventions
- Use standalone Angular components only
- Use Angular signal inputs and outputs only
- Follow GOV.UK Design System guidelines
- Implement strong typing with TypeScript
- Write comprehensive unit tests using Jest
- Do not create custom CSS or SCSS, use classes from the design system only
- Follow accessibility (WCAG 2.1 Level AA) guidelines
- Include component documentation in README.md files

## Component Requirements

- Components should be self-contained and reusable
- Support template-driven and reactive forms where applicable
- Include proper aria attributes and roles for accessibility
- Follow GOV.UK Frontend class naming conventions
- Support all standard GOV.UK Design System parameters
- Include error handling and validation states

## Testing

- Write unit tests for all component features
- Include accessibility testing considerations
- Test both template-driven and reactive form scenarios
- Test error states and edge cases

## Documentation

- Document all inputs, outputs, and configuration options
- Include usage examples in component README files
- Document accessibility features and considerations
- Provide form integration examples where applicable
