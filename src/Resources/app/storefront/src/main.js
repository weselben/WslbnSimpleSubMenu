import WslbnSimpleSubMenuPlugin from './simple-sub-menu/simple-sub-menu.plugin';

const PluginManager = window.PluginManager;

if (window.features.V6_6_0_0) {
    PluginManager.override('FlyoutMenu', () => import('./simple-sub-menu/simple-sub-menu.plugin'),  '[data-flyout-menu]');
}
else {
    PluginManager.override('FlyoutMenu', WslbnSimpleSubMenu, '[data-flyout-menu]');
}
