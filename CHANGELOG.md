# Changelog

## 1.0.5 - 2025-07-07

### Added

- Added a `selectiveCategoryIds` configuration option to `config.xml` to control which main categories display the sub-menu.
- Implemented logic in `NavigationSubscriber` to retrieve and pass `selectiveCategoryIds` to the Twig template.
- Modified `flyout.html.twig` to conditionally display the sub-menu based on the `selectiveCategoryIds` configuration.

## 1.0.4 - 2025-07-07

### Added

- Added a `submenuDepth` configuration option to `config.xml` to control the recursion depth of the sub-menu.
- Implemented logic in `NavigationSubscriber` to retrieve and pass `submenuDepth` to the Twig templates.
- Modified `flyout.html.twig` and `simple-sub-menu.html.twig` to use `submenuDepth` for controlling the display of sub-levels.

## 1.0.3 - 2025-07-07

### Added

- Created a basic Twig template (`simple-sub-menu.html.twig`) for rendering the sub-navigation.
- Integrated the new sub-menu template into `flyout.html.twig`.
- Added basic SCSS styling for the `simple-sub-menu`.

## 1.0.2 - 2025-07-07

### Added

- Added customizable CSS properties to `config.xml` (background color, text color, font size, link hover color).
- Implemented logic in `NavigationSubscriber` to retrieve and pass CSS configuration to the Twig template.
- Applied dynamic CSS styles in `flyout.html.twig` based on plugin configuration.

## 1.0.1 - 2025-07-07

### Added

- Initial project setup and README.md.
- Added a configuration switch (`active`) to enable/disable the plugin per sales channel in `config.xml`.
- Implemented a basic `NavigationSubscriber` to check the plugin's activation status.
- Registered `NavigationSubscriber` in `services.xml`.

### Changed

- Updated `composer.json` with plugin metadata.

### Fixed

- Resolved merge conflicts during `git pull` operation.
