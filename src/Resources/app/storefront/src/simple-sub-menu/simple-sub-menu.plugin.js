import Plugin from 'src/plugin-base/plugin.class';
import DomAccess from 'src/helper/dom-access.helper';

export default class WslbnSimpleSubMenuPlugin extends Plugin {
    init() {
        this._registerEvents();
    }

    _registerEvents() {
        const navigationItems = DomAccess.querySelectorAll(this.el, '.navigation-list-item', false);

        if (navigationItems) {
            navigationItems.forEach(item => {
                item.addEventListener('mouseenter', this._onMouseEnter.bind(this));
                item.addEventListener('mouseleave', this._onMouseLeave.bind(this));
            });
        }
    }

    _onMouseEnter(event) {
        const target = event.currentTarget;
        const flyout = DomAccess.querySelector(target, '.simple-sub-menu', false);

        if (flyout) {
            this._openFlyout(flyout, target);
        }
    }

    _onMouseLeave(event) {
        const target = event.currentTarget;
        const flyout = DomAccess.querySelector(target, '.simple-sub-menu', false);

        if (flyout) {
            this._closeFlyout(flyout, target);
        }
    }

    _openFlyout(flyoutEl, triggerEl) {
        flyoutEl.classList.add('is-open');
        triggerEl.classList.add('is-open');
    }

    _closeFlyout(flyoutEl, triggerEl) {
        flyoutEl.classList.remove('is-open');
        triggerEl.classList.remove('is-open');
    }
}