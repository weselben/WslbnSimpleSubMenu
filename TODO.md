# TODO List for WslbnSimpleSubMenu

## Feature: Customizable CSS via Plugin Configuration

**Description:**
Allow users to customize key CSS properties of the sub-menu directly from the Shopware administration panel via `config.xml`. This will provide greater flexibility without requiring theme modifications or custom CSS.

**Implementation Plan:**

1.  **Modify `config.xml`:**
    *   Add new `input-field` entries to `src/Resources/config/config.xml` for desired CSS properties. Examples include:
        *   `submenu_background_color` (type `colorpicker` or `text` for hex/rgba)
        *   `submenu_text_color` (type `colorpicker` or `text`)
        *   `submenu_font_size` (type `text` or `number`)
        *   `submenu_link_hover_color` (type `colorpicker` or `text`)
    *   Ensure proper labels for both `en-GB` and `de-DE`.

2.  **Update `NavigationSubscriber`:**
    *   In `src/Storefront/Subscriber/NavigationSubscriber.php`, retrieve the newly added CSS configuration values using `SystemConfigService`.
    *   Pass these configuration values to the Twig template context (e.g., as part of the `HeaderPageletLoadedEvent` or a custom event).

3.  **Modify Twig Template:**
    *   In the relevant Twig template (e.g., `src/Resources/views/storefront/layout/navigation/categories.html.twig` or a new dedicated sub-menu template), use the passed configuration values to apply inline styles or generate dynamic CSS.
    *   Example for inline style:
        ```twig
        <div class="simple-sub-menu"
             style="background-color: {{ config.submenu_background_color }};
                      color: {{ config.submenu_text_color }};">
            {# ... sub-menu content ... #}
        </div>
        ```
    *   Alternatively, consider generating a `<style>` block dynamically within the template if multiple properties need to be applied or if a more structured CSS approach is preferred.

4.  **Adjust SCSS (if applicable):**
    *   If there are existing SCSS rules, ensure they can be overridden by the inline/dynamic CSS. Consider making the default SCSS values variables that can be easily changed or overridden.

5.  **Testing:**
    *   Verify that changing the values in the plugin configuration updates the sub-menu's appearance correctly in the storefront.
    *   Test on different sales channels to ensure per-channel configuration works as expected.

## Other Planned Features (from previous discussion):

*   **Basic Template:** Create a basic Twig template to render the sub-navigation.
*   **Styling:** Add basic CSS to style the sub-navigation to match the default Shopware theme.
*   **Customizable Depth:** Control how many levels of subcategories are displayed.
*   **Selective Display:** Choose which main categories will display the sub menu.
*   **Flyout/Dropdown Menus:** Implement flyout or dropdown menus.
*   **Mobile Support:** Ensure responsiveness on mobile devices.
*   **Performance Optimization:** Optimize code for speed.
*   **Theme Compatibility:** Test with popular Shopware themes.
*   **Unit Tests:** Write comprehensive unit tests.
*   **Documentation:** Enhance plugin documentation.
*   **Translation:** Add translations for all plugin elements.
