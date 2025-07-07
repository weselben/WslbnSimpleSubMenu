# TODO List for WslbnSimpleSubMenu

## Completed Features

*   **Plugin Activation Switch:** Added a configuration switch (`active`) to enable/disable the plugin per sales channel in `config.xml`.
*   **Customizable CSS via Plugin Configuration:** Implemented fields in `config.xml` for `submenuBackgroundColor`, `submenuTextColor`, `submenuFontSize`, and `submenuLinkHoverColor`. These values are retrieved by the `NavigationSubscriber` and applied dynamically in `flyout.html.twig`.

## Planned Features

### Core Functionality & Display

*   **Basic Template for Sub-Navigation:** Create a dedicated Twig template to render the actual sub-navigation structure (e.g., `simple-sub-menu.html.twig`). This will replace the current placeholder and allow for more complex sub-menu layouts.
*   **Default Styling:** Add basic SCSS/CSS to provide a default visual appearance for the sub-navigation that aligns with Shopware's default theme, while still allowing overrides via the customizable CSS options.
*   **Customizable Depth:** Implement a configuration option to control how many levels of subcategories are displayed in the sub-menu.
*   **Selective Display:** Add a configuration option to choose which main categories (e.g., by ID or a custom flag) will trigger the display of the sub-menu.

### Advanced User Experience

*   **Flyout/Dropdown Menus:** Enhance the sub-menu to function as a modern flyout or dropdown menu, improving user interaction and navigation flow.
*   **Mobile Responsiveness:** Ensure the sub-menu is fully responsive and provides an optimal user experience on all mobile devices and screen sizes.
*   **Full Custom CSS Snippet (Advanced):** Explore adding a `textarea` field in `config.xml` to allow users to inject a custom CSS snippet directly. This would provide maximum flexibility for advanced users but requires careful consideration for security and validation.

### Performance & Quality

*   **Performance Optimization:** Analyze and optimize the plugin's code to ensure minimal impact on storefront loading times and overall performance.
*   **Theme Compatibility Testing:** Conduct thorough testing with various popular Shopware themes to ensure broad compatibility and identify any potential conflicts.
*   **Unit & Integration Tests:** Develop comprehensive unit and integration tests to ensure the plugin's stability, reliability, and correct functionality across different Shopware versions and configurations.
*   **Enhanced Documentation:** Expand the plugin documentation with detailed guides on configuration, customization, and troubleshooting.
*   **Translation:** Provide translations for all new configuration options and storefront snippets to support multi-language shops.