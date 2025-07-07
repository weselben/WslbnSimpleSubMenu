"use strict";
(self.webpackChunk = self.webpackChunk || []).push([["wslbn-simple-sub-menu"], {
    1117: (t, e, i) => {
        var s = i(6883);
        const o = window.PluginManager;
        window.features.V6_6_0_0 ? o.override("FlyoutMenu", (() => Promise.resolve().then(i.bind(i, 6883))), "[data-flyout-menu]") : o.override("FlyoutMenu", s.default, "[data-flyout-menu]")
    }, 6883: (t, e, i) => {
        i.r(e), i.d(e, {default: () => o});
        var s = i(1787);

        class o extends s.Z {
            init() {
                super.init()
            }

            _openFlyout(t, e) {
                const i = this._getCoords(e);
                t.style.left = i.left + "px", t.style.minWidth = e.clientWidth + "px", super._openFlyout(t, e)
            }

            _getCoords(t) {
                const e = t.getBoundingClientRect();
                return {top: e.top + pageYOffset, left: e.left + pageXOffset}
            }
        }
    }, 1787: (t, e, i) => {
        i.d(e, {Z: () => c});
        var s, o, l, r = i(6285), n = i(9658), u = i(3206), a = i(1966);

        class c extends r.Z {
            init() {
                this._debouncer = null, this._triggerEls = this.el.querySelectorAll(`[${this.options.triggerDataAttribute}]`), this._closeEls = this.el.querySelectorAll(this.options.closeSelector), this._flyoutEls = this.el.querySelectorAll(`[${this.options.flyoutIdDataAttribute}]`), this._registerEvents()
            }

            _registerEvents() {
                const t = n.Z.isTouchDevice() ? "touchstart" : "click",
                    e = n.Z.isTouchDevice() ? "touchstart" : "mouseenter",
                    i = n.Z.isTouchDevice() ? "touchstart" : "mouseleave";
                a.Z.iterate(this._triggerEls, (t => {
                    const s = u.Z.getDataAttribute(t, this.options.triggerDataAttribute);
                    t.addEventListener(e, this._openFlyoutById.bind(this, s, t)), t.addEventListener(i, (() => this._debounce(this._closeAllFlyouts)))
                })), a.Z.iterate(this._closeEls, (e => {
                    e.addEventListener(t, this._closeAllFlyouts.bind(this))
                })), n.Z.isTouchDevice() || a.Z.iterate(this._flyoutEls, (t => {
                    t.addEventListener("mousemove", (() => this._clearDebounce())), t.addEventListener("mouseleave", (() => this._debounce(this._closeAllFlyouts)))
                }))
            }

            _openFlyout(t, e) {
                this._isOpen(e) || (this._closeAllFlyouts(), t.classList.add(this.options.activeCls), e.classList.add(this.options.activeCls)), this.$emitter.publish("openFlyout")
            }

            _closeFlyout(t, e) {
                this._isOpen(e) && (t.classList.remove(this.options.activeCls), e.classList.remove(this.options.activeCls)), this.$emitter.publish("closeFlyout")
            }

            _openFlyoutById(t, e, i) {
                const s = this.el.querySelector(`[${this.options.flyoutIdDataAttribute}='${t}']`);
                s && this._debounce(this._openFlyout, s, e), this._isOpen(e) || c._stopEvent(i), this.$emitter.publish("openFlyoutById")
            }

            _closeAllFlyouts() {
                const t = this.el.querySelectorAll(`[${this.options.flyoutIdDataAttribute}]`);
                a.Z.iterate(t, (t => {
                    const e = this._retrieveTriggerEl(t);
                    this._closeFlyout(t, e)
                })), this.$emitter.publish("closeAllFlyouts")
            }

            _retrieveTriggerEl(t) {
                const e = u.Z.getDataAttribute(t, this.options.flyoutIdDataAttribute, !1);
                return this.el.querySelector(`[${this.options.triggerDataAttribute}='${e}']`)
            }

            _isOpen(t) {
                return t.classList.contains(this.options.activeCls)
            }

            _debounce(t, ...e) {
                this._clearDebounce(), this._debouncer = setTimeout(t.bind(this, ...e), this.options.debounceTime)
            }

            _clearDebounce() {
                clearTimeout(this._debouncer)
            }

            static _stopEvent(t) {
                t && t.cancelable && (t.preventDefault(), t.stopImmediatePropagation())
            }
        }

        s = c, l = {
            debounceTime: 125,
            activeCls: "is-open",
            closeSelector: ".js-close-flyout-menu",
            flyoutIdDataAttribute: "data-flyout-menu-id",
            triggerDataAttribute: "data-flyout-menu-trigger"
        }, (o = function (t) {
            var e = function (t, e) {
                if ("object" != typeof t || null === t) return t;
                var i = t[Symbol.toPrimitive];
                if (void 0 !== i) {
                    var s = i.call(t, e || "default");
                    if ("object" != typeof s) return s;
                    throw new TypeError("@@toPrimitive must return a primitive value.")
                }
                return ("string" === e ? String : Number)(t)
            }(t, "string");
            return "symbol" == typeof e ? e : String(e)
        }(o = "options")) in s ? Object.defineProperty(s, o, {
            value: l,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : s[o] = l
    }
}, t => {
    t.O(0, ["vendor-node", "vendor-shared"], (() => {
        return e = 1117, t(t.s = e);
        var e
    }));
    t.O()
}]);