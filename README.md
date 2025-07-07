# Simple Sub Menu for Shopware 6

![Shopware Version](https://img.shields.io/badge/Shopware-6.5.x%20%7C%206.6.x-blue)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

A simple sub menu extension for Shopware 6, meticulously crafted to elevate your storefront navigation with highly customizable and intuitive sub-menus. This plugin empowers you to create a seamless and engaging browsing experience for your customers.

## ✨ Key Features & Benefits

*   **Granular Plugin Activation Control:** Gain complete command over your storefront. Easily enable or disable the entire plugin functionality on a per-sales-channel basis directly from the Shopware administration. This means you can activate the sub-menu for specific stores or languages, ensuring maximum flexibility.

*   **Effortless Sub-Menu Styling Customization:** Unleash your creativity and perfectly align the sub-menu's aesthetics with your brand identity. Our intuitive configuration options allow you to tailor the appearance with ease:
    *   **Background Color:** Set the perfect backdrop for your sub-menu.
    *   **Text Color:** Ensure readability and visual harmony for your sub-menu items.
    *   **Font Size:** Adjust the text size to fit your design preferences (e.g., `14px`, `1em`, `0.9rem`).
    *   **Link Hover Color:** Define a captivating hover effect for sub-menu links, enhancing user interaction.
    These powerful styling settings can be applied individually to each sales channel, providing you with unparalleled control over your store's visual presentation.

*   **Configurable Sub-Menu Depth:** Take charge of your navigation hierarchy. Control how many levels of subcategories are displayed within your sub-menu, allowing you to present information in a structured and digestible manner. This prevents overwhelming your customers with too many options at once.

## 🚀 Getting Started: Installation Guide

Integrating the Simple Sub Menu plugin into your Shopware 6 store is a straightforward process:

1.  **Download the Plugin:** Always obtain the latest stable version of the plugin from our official [releases page](https://github.com/weselben/WslbnSimpleSubMenu/releases). We recommend downloading the `.zip` file.

2.  **Upload to Shopware:**
    *   Log in to your Shopware 6 administration panel.
    *   Navigate to `Extensions > My Extensions`.
    *   Click the `Upload Extension` button (usually located in the top right corner).
    *   Select the downloaded plugin `.zip` file and confirm the upload.

3.  **Install & Activate:**
    *   Once uploaded, the `WslbnSimpleSubMenu` plugin will appear in your extension list.
    *   Click the `...` (context menu) next to the plugin entry.
    *   Select `Install` from the dropdown menu.
    *   After successful installation, click `...` again and choose `Activate`.

4.  **Clear Shopware Cache:** This is a crucial step to ensure the plugin functions correctly and all changes are reflected on your storefront.
    *   Go to `Settings > System > Caches & Indexes`.
    *   Click the `Clear all caches` button.
    *   Alternatively, you can clear the cache via the command line: `bin/console cache:clear`.

## 🛠️ Comprehensive Configuration Options

After successful installation and activation, you can fine-tune the plugin's behavior and appearance. Access the settings by navigating to `Settings > System > Plugins` in your Shopware administration and locating `WslbnSimpleSubMenu`.

*   **Active (Toggle Switch):** This master switch allows you to enable or disable the entire sub-menu functionality for the currently selected sales channel. If deactivated, the plugin will not render any sub-menus.

*   **Submenu Background Color (Color Picker):** Define the background color of your sub-menu container. Use the integrated color picker or enter a valid CSS color value (e.g., `#FFFFFF`, `rgba(255, 255, 255, 0.9)`).

*   **Submenu Text Color (Color Picker):** Set the default text color for all links and text within the sub-menu. This ensures optimal contrast and readability.

*   **Submenu Font Size (Text Input):** Control the size of the text within your sub-menu. You can use standard CSS font size units (e.g., `14px`, `1em`, `0.9rem`, `small`, `large`).

*   **Submenu Link Hover Color (Color Picker):** Customize the color that sub-menu links change to when a user hovers their mouse over them. This provides visual feedback and enhances user experience.

*   **Submenu Depth (Number Input):** Specify the maximum number of subcategory levels to display. For example:
    *   `0` (or empty): Displays all available sub-levels (unlimited depth).
    *   `1`: Displays only the direct children of the main category.
    *   `2`: Displays direct children and their immediate children.
    This allows you to manage the complexity of your navigation.

## 💡 Usage & Best Practices

Once configured, the sub-menu will seamlessly integrate into your storefront navigation. We encourage you to experiment with the various styling and depth options to create a navigation experience that perfectly complements your store's design and improves user flow. Remember to clear your cache after making any configuration changes to see them reflected on the storefront.

## 🤝 Compatibility

This plugin is rigorously tested and compatible with Shopware versions `6.5.0` and later. We strive to maintain compatibility with future Shopware updates.

## 📄 License

This plugin is proudly licensed under the MIT License. For full details, please refer to the [LICENSE](LICENSE) file within the plugin's repository.

## 🧑‍💻 Authors & Contribution

This plugin is developed and maintained by:

*   **memoryGroup:** A dedicated team of Shopware experts. Explore more of our work and contributions on [GitHub: memorygroup-eu](https://github.com/memorygroup-eu) and visit our official website at [https://memorygroup.net](https://memorygroup.net).
*   **weselben:** An individual contributor. Find more of their projects on [GitHub: weselben](https://github.com/weselben).

## ❓ Support & Feedback

Should you encounter any issues, have questions, or wish to provide feedback, please reach out to us. For direct support, you can contact us via [https://memorygroup.net](https://memorygroup.net). We value your input and are committed to continuously improving this plugin.
