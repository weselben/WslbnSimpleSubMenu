# TODO List for WslbnSimpleSubMenu

## Completed Features

*   **Plugin Activation Switch:** Added a configuration switch (`active`) to enable/disable the plugin per sales channel in `config.xml`.
*   **Customizable CSS via Plugin Configuration:** Implemented fields in `config.xml` for `submenuBackgroundColor`, `submenuTextColor`, `submenuFontSize`, and `submenuLinkHoverColor`. These values are retrieved by the `NavigationSubscriber` and applied dynamically in `flyout.html.twig`.
*   **Basic Template for Sub-Navigation:** Created a dedicated Twig template (`simple-sub-menu.html.twig`) for rendering the actual sub-navigation structure and integrated it into `flyout.html.twig`.
*   **Default Styling:** Added basic SCSS/CSS to provide a default visual appearance for the sub-navigation that aligns with Shopware's default theme, while still allowing overrides via the customizable CSS options.
*   **Customizable Depth:** Implemented a configuration option (`submenuDepth`) to control how many levels of subcategories are displayed in the sub-menu.
*   **Selective Display:** Added a configuration option (`selectiveCategoryIds`) to choose which main categories will trigger the display of the sub-menu.

## Planned Features

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
