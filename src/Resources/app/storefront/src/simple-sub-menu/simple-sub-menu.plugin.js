import FlyoutMenuPlugin from 'src/plugin/main-menu/flyout-menu.plugin';

export default class WslbnSimpleSubMenuPlugin extends FlyoutMenuPlugin {
    init() {
        super.init();
    }

    _openFlyout(flyoutEl, triggerEl) {
        const linkPos = this._getCoords(triggerEl);

        flyoutEl.style.left = linkPos.left + 'px';
        flyoutEl.style.minWidth = triggerEl.clientWidth + 'px';

        super._openFlyout(flyoutEl, triggerEl)
    }

    _getCoords(elem) {
        const box = elem.getBoundingClientRect();

        return {
            top: box.top + pageYOffset,
            left: box.left + pageXOffset,
        };
    }
}