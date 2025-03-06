(() => {
    "use strict";
    var t = {
        857: t => {
            var e = function (t) {
                var e;
                return !!t && "object" == typeof t && "[object RegExp]" !== (e = Object.prototype.toString.call(t)) && "[object Date]" !== e && t.$$typeof !== i
            }, i = "function" == typeof Symbol && Symbol.for ? Symbol.for("react.element") : 60103;

            function r(t, e) {
                return !1 !== e.clone && e.isMergeableObject(t) ? a(Array.isArray(t) ? [] : {}, t, e) : t
            }

            function s(t, e, i) {
                return t.concat(e).map(function (t) {
                    return r(t, i)
                })
            }

            function o(t) {
                return Object.keys(t).concat(Object.getOwnPropertySymbols ? Object.getOwnPropertySymbols(t).filter(function (e) {
                    return Object.propertyIsEnumerable.call(t, e)
                }) : [])
            }

            function n(t, e) {
                try {
                    return e in t
                } catch (t) {
                    return !1
                }
            }

            function a(t, i, l) {
                (l = l || {}).arrayMerge = l.arrayMerge || s, l.isMergeableObject = l.isMergeableObject || e, l.cloneUnlessOtherwiseSpecified = r;
                var c, u, h = Array.isArray(i);
                return h !== Array.isArray(t) ? r(i, l) : h ? l.arrayMerge(t, i, l) : (u = {}, (c = l).isMergeableObject(t) && o(t).forEach(function (e) {
                    u[e] = r(t[e], c)
                }), o(i).forEach(function (e) {
                    (!n(t, e) || Object.hasOwnProperty.call(t, e) && Object.propertyIsEnumerable.call(t, e)) && (n(t, e) && c.isMergeableObject(i[e]) ? u[e] = (function (t, e) {
                        if (!e.customMerge) return a;
                        var i = e.customMerge(t);
                        return "function" == typeof i ? i : a
                    })(e, c)(t[e], i[e], c) : u[e] = r(i[e], c))
                }), u)
            }

            a.all = function (t, e) {
                if (!Array.isArray(t)) throw Error("first argument should be an array");
                return t.reduce(function (t, i) {
                    return a(t, i, e)
                }, {})
            }, t.exports = a
        }, 375: (t, e, i) => {
            i.r(e), i.d(e, {default: () => d});
            var r = i(857), s = i.n(r);

            class o {
                static ucFirst(t) {
                    return t.charAt(0).toUpperCase() + t.slice(1)
                }

                static lcFirst(t) {
                    return t.charAt(0).toLowerCase() + t.slice(1)
                }

                static toDashCase(t) {
                    return t.replace(/([A-Z])/g, "-$1").replace(/^-/, "").toLowerCase()
                }

                static toLowerCamelCase(t, e) {
                    let i = o.toUpperCamelCase(t, e);
                    return o.lcFirst(i)
                }

                static toUpperCamelCase(t, e) {
                    return e ? t.split(e).map(t => o.ucFirst(t.toLowerCase())).join("") : o.ucFirst(t.toLowerCase())
                }

                static parsePrimitive(t) {
                    try {
                        return /^\d+(.|,)\d+$/.test(t) && (t = t.replace(",", ".")), JSON.parse(t)
                    } catch (e) {
                        return t.toString()
                    }
                }
            }

            class n {
                static isNode(t) {
                    return "object" == typeof t && null !== t && (t === document || t === window || t instanceof Node)
                }

                static hasAttribute(t, e) {
                    if (!n.isNode(t)) throw Error("The element must be a valid HTML Node!");
                    return "function" == typeof t.hasAttribute && t.hasAttribute(e)
                }

                static getAttribute(t, e) {
                    let i = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2];
                    if (i && !1 === n.hasAttribute(t, e)) throw Error('The required property "'.concat(e, '" does not exist!'));
                    if ("function" != typeof t.getAttribute) {
                        if (i) throw Error("This node doesn't support the getAttribute function!");
                        return
                    }
                    return t.getAttribute(e)
                }

                static getDataAttribute(t, e) {
                    let i = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
                        r = e.replace(/^data(|-)/, ""), s = o.toLowerCamelCase(r, "-");
                    if (!n.isNode(t)) {
                        if (i) throw Error("The passed node is not a valid HTML Node!");
                        return
                    }
                    if (void 0 === t.dataset) {
                        if (i) throw Error("This node doesn't support the dataset attribute!");
                        return
                    }
                    let a = t.dataset[s];
                    if (void 0 === a) {
                        if (i) throw Error('The required data attribute "'.concat(e, '" does not exist on ').concat(t, "!"));
                        return a
                    }
                    return o.parsePrimitive(a)
                }

                static querySelector(t, e) {
                    let i = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2];
                    if (i && !n.isNode(t)) throw Error("The parent node is not a valid HTML Node!");
                    let r = t.querySelector(e) || !1;
                    if (i && !1 === r) throw Error('The required element "'.concat(e, '" does not exist in parent node!'));
                    return r
                }

                static querySelectorAll(t, e) {
                    let i = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2];
                    if (i && !n.isNode(t)) throw Error("The parent node is not a valid HTML Node!");
                    let r = t.querySelectorAll(e);
                    if (0 === r.length && (r = !1), i && !1 === r) throw Error('At least one item of "'.concat(e, '" must exist in parent node!'));
                    return r
                }
            }

            class a {
                publish(t) {
                    let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        i = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                        r = new CustomEvent(t, {detail: e, cancelable: i});
                    return this.el.dispatchEvent(r), r
                }

                subscribe(t, e) {
                    let i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}, r = this,
                        s = t.split("."), o = i.scope ? e.bind(i.scope) : e;
                    if (i.once && !0 === i.once) {
                        let e = o;
                        o = function (i) {
                            r.unsubscribe(t), e(i)
                        }
                    }
                    return this.el.addEventListener(s[0], o), this.listeners.push({
                        splitEventName: s,
                        opts: i,
                        cb: o
                    }), !0
                }

                unsubscribe(t) {
                    let e = t.split(".");
                    return this.listeners = this.listeners.reduce((t, i) => ([...i.splitEventName].sort().toString() === e.sort().toString() ? this.el.removeEventListener(i.splitEventName[0], i.cb) : t.push(i), t), []), !0
                }

                reset() {
                    return this.listeners.forEach(t => {
                        this.el.removeEventListener(t.splitEventName[0], t.cb)
                    }), this.listeners = [], !0
                }

                get el() {
                    return this._el
                }

                set el(t) {
                    this._el = t
                }

                get listeners() {
                    return this._listeners
                }

                set listeners(t) {
                    this._listeners = t
                }

                constructor(t = document) {
                    this._el = t, t.$emitter = this, this._listeners = []
                }
            }

            class l {
                init() {
                    throw Error('The "init" method for the plugin "'.concat(this._pluginName, '" is not defined.'))
                }

                update() {
                }

                _init() {
                    this._initialized || (this.init(), this._initialized = !0)
                }

                _update() {
                    this._initialized && this.update()
                }

                _mergeOptions(t) {
                    let e = o.toDashCase(this._pluginName),
                        i = n.getDataAttribute(this.el, "data-".concat(e, "-config"), !1),
                        r = n.getAttribute(this.el, "data-".concat(e, "-options"), !1),
                        a = [this.constructor.options, this.options, t];
                    i && a.push(window.PluginConfigManager.get(this._pluginName, i));
                    try {
                        r && a.push(JSON.parse(r))
                    } catch (t) {
                        throw console.error(this.el), Error('The data attribute "data-'.concat(e, '-options" could not be parsed to json: ').concat(t.message))
                    }
                    return s().all(a.filter(t => t instanceof Object && !(t instanceof Array)).map(t => t || {}))
                }

                _registerInstance() {
                    window.PluginManager.getPluginInstancesFromElement(this.el).set(this._pluginName, this), window.PluginManager.getPlugin(this._pluginName, !1).get("instances").push(this)
                }

                _getPluginName(t) {
                    return t || (t = this.constructor.name), t
                }

                constructor(t, e = {}, i = !1) {
                    if (!n.isNode(t)) throw Error("There is no valid element given.");
                    this.el = t, this.$emitter = new a(this.el), this._pluginName = this._getPluginName(i), this.options = this._mergeOptions(e), this._initialized = !1, this._registerInstance(), this._init()
                }
            }

            class c {
                static isTouchDevice() {
                    return "ontouchstart" in document.documentElement
                }

                static isIOSDevice() {
                    return c.isIPhoneDevice() || c.isIPadDevice()
                }

                static isNativeWindowsBrowser() {
                    return c.isIEBrowser() || c.isEdgeBrowser()
                }

                static isIPhoneDevice() {
                    return !!navigator.userAgent.match(/iPhone/i)
                }

                static isIPadDevice() {
                    return !!navigator.userAgent.match(/iPad/i)
                }

                static isIEBrowser() {
                    return -1 !== navigator.userAgent.toLowerCase().indexOf("msie") || !!navigator.userAgent.match(/Trident.*rv:\d+\./)
                }

                static isEdgeBrowser() {
                    return !!navigator.userAgent.match(/Edge\/\d+/i)
                }

                static getList() {
                    return {
                        "is-touch": c.isTouchDevice(),
                        "is-ios": c.isIOSDevice(),
                        "is-native-windows": c.isNativeWindowsBrowser(),
                        "is-iphone": c.isIPhoneDevice(),
                        "is-ipad": c.isIPadDevice(),
                        "is-ie": c.isIEBrowser(),
                        "is-edge": c.isEdgeBrowser()
                    }
                }
            }

            class u {
                static iterate(t, e) {
                    if (t instanceof Map || Array.isArray(t)) return t.forEach(e);
                    if (t instanceof FormData) {
                        for (var i of t.entries()) e(i[1], i[0]);
                        return
                    }
                    if (t instanceof NodeList) return t.forEach(e);
                    if (t instanceof HTMLCollection) return Array.from(t).forEach(e);
                    if (t instanceof Object) return Object.keys(t).forEach(i => {
                        e(t[i], i)
                    });
                    throw Error("The element type ".concat(typeof t, " is not iterable!"))
                }
            }

            class h extends l {
                init() {
                    this._debouncer = null, this._triggerEls = this.el.querySelectorAll("[".concat(this.options.triggerDataAttribute, "]")), this._closeEls = this.el.querySelectorAll(this.options.closeSelector), this._flyoutEls = this.el.querySelectorAll("[".concat(this.options.flyoutIdDataAttribute, "]")), this._registerEvents()
                }

                _registerEvents() {
                    let t = c.isTouchDevice() ? "touchstart" : "click",
                        e = c.isTouchDevice() ? "touchstart" : "mouseenter",
                        i = c.isTouchDevice() ? "touchstart" : "mouseleave";
                    u.iterate(this._triggerEls, t => {
                        let r = n.getDataAttribute(t, this.options.triggerDataAttribute);
                        t.addEventListener(e, this._openFlyoutById.bind(this, r, t)), t.addEventListener(i, () => this._debounce(this._closeAllFlyouts))
                    }), u.iterate(this._closeEls, e => {
                        e.addEventListener(t, this._closeAllFlyouts.bind(this))
                    }), c.isTouchDevice() || u.iterate(this._flyoutEls, t => {
                        t.addEventListener("mousemove", () => this._clearDebounce()), t.addEventListener("mouseleave", () => this._debounce(this._closeAllFlyouts))
                    })
                }

                _openFlyout(t, e) {
                    this._isOpen(e) || (this._closeAllFlyouts(), t.classList.add(this.options.activeCls), e.classList.add(this.options.activeCls)), this.$emitter.publish("openFlyout")
                }

                _closeFlyout(t, e) {
                    this._isOpen(e) && (t.classList.remove(this.options.activeCls), e.classList.remove(this.options.activeCls)), this.$emitter.publish("closeFlyout")
                }

                _openFlyoutById(t, e, i) {
                    let r = this.el.querySelector("[".concat(this.options.flyoutIdDataAttribute, "='").concat(t, "']"));
                    r && this._debounce(this._openFlyout, r, e), this._isOpen(e) || h._stopEvent(i), this.$emitter.publish("openFlyoutById")
                }

                _closeAllFlyouts() {
                    let t = this.el.querySelectorAll("[".concat(this.options.flyoutIdDataAttribute, "]"));
                    u.iterate(t, t => {
                        let e = this._retrieveTriggerEl(t);
                        this._closeFlyout(t, e)
                    }), this.$emitter.publish("closeAllFlyouts")
                }

                _retrieveTriggerEl(t) {
                    let e = n.getDataAttribute(t, this.options.flyoutIdDataAttribute, !1);
                    return this.el.querySelector("[".concat(this.options.triggerDataAttribute, "='").concat(e, "']"))
                }

                _isOpen(t) {
                    return t.classList.contains(this.options.activeCls)
                }

                _debounce(t) {
                    for (var e = arguments.length, i = Array(e > 1 ? e - 1 : 0), r = 1; r < e; r++) i[r - 1] = arguments[r];
                    this._clearDebounce(), this._debouncer = setTimeout(t.bind(this, ...i), this.options.debounceTime)
                }

                _clearDebounce() {
                    clearTimeout(this._debouncer)
                }

                static _stopEvent(t) {
                    t && t.cancelable && (t.preventDefault(), t.stopImmediatePropagation())
                }
            }

            h.options = {
                debounceTime: 125,
                activeCls: "is-open",
                closeSelector: ".js-close-flyout-menu",
                flyoutIdDataAttribute: "data-flyout-menu-id",
                triggerDataAttribute: "data-flyout-menu-trigger"
            };

            class d extends h {
                init() {
                    super.init()
                }

                _openFlyout(t, e) {
                    let i = this._getCoords(e);
                    t.style.left = i.left + "px", t.style.minWidth = e.clientWidth + "px", super._openFlyout(t, e)
                }

                _getCoords(t) {
                    let e = t.getBoundingClientRect();
                    return {top: e.top + pageYOffset, left: e.left + pageXOffset}
                }
            }
        }
    }, e = {};

    function i(r) {
        var s = e[r];
        if (void 0 !== s) return s.exports;
        var o = e[r] = {exports: {}};
        return t[r](o, o.exports, i), o.exports
    }

    (() => {
        i.n = t => {
            var e = t && t.__esModule ? () => t.default : () => t;
            return i.d(e, {a: e}), e
        }
    })(), (() => {
        i.d = (t, e) => {
            for (var r in e) i.o(e, r) && !i.o(t, r) && Object.defineProperty(t, r, {enumerable: !0, get: e[r]})
        }
    })(), (() => {
        i.o = (t, e) => Object.prototype.hasOwnProperty.call(t, e)
    })(), (() => {
        i.r = t => {
            "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {value: "Module"}), Object.defineProperty(t, "__esModule", {value: !0})
        }
    })(), (() => {
        var t = i(375);
        let e = window.PluginManager;
        window.features.V6_6_0_0 ? e.override("FlyoutMenu", () => Promise.resolve().then(i.bind(i, 375)), "[data-flyout-menu]") : e.override("FlyoutMenu", t.default, "[data-flyout-menu]")
    })()
})();