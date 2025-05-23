# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.0.0] - 2025-05-23

### Added

**Initial library implementation** - Complete Angular component library implementing the GOV.UK Design System

#### Features

- **Reactive Forms Integration** - Seamless integration with Angular reactive forms
- **Router Integration** - Built-in support for Angular Router navigation
- **Signal-based APIs** - Modern Angular signal inputs and outputs
- **Standalone components** - All components are standalone and can be imported individually for optimal bundle size
- **Customizable Styling** - Follows GOV.UK Design System CSS classes
- **Full accessibility compliance** - Components follow GOV.UK Design System accessibility standards
- **Tree-shakable** - Import only the components you need
- **SSR Compatible** - Works with Angular Universal server-side rendering

#### Included Components

**Navigation & Layout:**

- `GovUKHeaderComponent` - Service header with logo and navigation
- `GovUKFooterComponent` - Service footer with links and meta information
- `GovUKBreadcrumbsComponent` - Breadcrumb navigation trail
- `GovUKServiceNavigationComponent` - Service-level navigation menu
- `GovUKSkipLinkComponent` - Skip to main content accessibility link
- `GovUKPhaseBannerComponent` - Alpha/Beta phase indicator banner

**Content & Information:**

- `GovUKPanelComponent` - Highlighted content panel for confirmations
- `GovUKDetailsComponent` - Collapsible content disclosure widget
- `GovUKInsetTextComponent` - Highlighted text content
- `GovUKWarningTextComponent` - Important warning messages
- `GovUKNotificationBannerComponent` - Important notifications and alerts
- `GovUKTagComponent` - Status and category tags
- `GovUKAccordionComponent` - Collapsible content sections
- `GovUKTabsComponent` - Tabbed content navigation

**Forms & Input:**

- `GovUKButtonComponent` - Primary, secondary, and warning buttons
- `GovUKTextInputComponent` - Single-line text input with prefix/suffix support
- `GovUKTextareaComponent` - Multi-line text input
- `GovUKPasswordInputComponent` - Password input with show/hide toggle
- `GovUKSelectComponent` - Dropdown selection input
- `GovUKRadioComponent` - Radio button selection
- `GovUKCheckboxComponent` - Checkbox selection
- `GovUKFileUploadComponent` - File upload input
- `GovUKDateInputComponent` - Date input with day/month/year fields
- `GovUKFieldsetComponent` - Form field grouping
- `GovUKFormGroupComponent` - Form control wrapper with labels and hints

**Data Display:**

- `GovUKTableComponent` - Data tables with sorting and formatting
- `GovUKSummaryListComponent` - Key-value pair summaries
- `GovUKTaskListComponent` - Task progress tracking lists
- `GovUKPaginationComponent` - Page navigation controls

**Error Handling:**

- `GovUKErrorSummaryComponent` - Form error summary at page top
- Integrated error messaging for all form components

**Utilities:**

- `GovUKCookieBannerComponent` - Cookie consent management
- Form utilities and validation helpers
- Value accessor directives for reactive forms integration
