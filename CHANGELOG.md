# Changelog

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