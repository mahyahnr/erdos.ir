! function a(b, c, d) {
    function e(g, h) {
        if (!c[g]) {
            if (!b[g]) {
                var i = "function" == typeof require && require;
                if (!h && i) return i(g, !0);
                if (f) return f(g, !0);
                var j = new Error("Cannot find module '" + g + "'");
                throw j.code = "MODULE_NOT_FOUND", j
            }
            var k = c[g] = {
                exports: {}
            };
            b[g][0].call(k.exports, function(a) {
                var c = b[g][1][a];
                return e(c ? c : a)
            }, k, k.exports, a, b, c, d)
        }
        return c[g].exports
    }
    for (var f = "function" == typeof require && require, g = 0; g < d.length; g++) e(d[g]);
    return e
}({
    1: [function(a, b) {
        function c(a, b, c) {
            function d(a) {
                return a >= 200 && 300 > a || 304 === a
            }

            function e() {
                void 0 === h.status || d(h.status) ? b.call(h, null, h) : b.call(h, h, null)
            }
            var f = !1;
            if ("undefined" == typeof window.XMLHttpRequest) return b(Error("Browser not supported"));
            if ("undefined" == typeof c) {
                var g = a.match(/^\s*https?:\/\/[^\/]*/);
                c = g && g[0] !== location.protocol + "//" + location.domain + (location.port ? ":" + location.port : "")
            }
            var h = new window.XMLHttpRequest;
            if (c && !("withCredentials" in h)) {
                h = new window.XDomainRequest;
                var i = b;
                b = function() {
                    if (f) i.apply(this, arguments);
                    else {
                        var a = this,
                            b = arguments;
                        setTimeout(function() {
                            i.apply(a, b)
                        }, 0)
                    }
                }
            }
            return "onload" in h ? h.onload = e : h.onreadystatechange = function() {
                4 === h.readyState && e()
            }, h.onerror = function(a) {
                b.call(this, a || !0, null), b = function() {}
            }, h.onprogress = function() {}, h.ontimeout = function(a) {
                b.call(this, a, null), b = function() {}
            }, h.onabort = function(a) {
                b.call(this, a, null), b = function() {}
            }, h.open("GET", a, !0), h.send(null), f = !0, h
        }
        "undefined" != typeof b && (b.exports = c)
    }, {}],
    2: [function(a, b) {
        b.exports = Array.isArray || function(a) {
            return "[object Array]" == Object.prototype.toString.call(a)
        }
    }, {}],
    3: [function(a, b) {
        ! function(a, c, d) {
            function e() {
                var b = a.L;
                f.noConflict = function() {
                    return a.L = b, this
                }, a.L = f
            }
            var f = {
                version: "1.0.2"
            };
            "object" == typeof b && "object" == typeof b.exports ? b.exports = f : "function" == typeof define && define.amd && define(f), "undefined" != typeof a && e(), f.Util = {
                    extend: function(a) {
                        var b, c, d, e;
                        for (c = 1, d = arguments.length; d > c; c++) {
                            e = arguments[c];
                            for (b in e) a[b] = e[b]
                        }
                        return a
                    },
                    create: Object.create || function() {
                        function a() {}
                        return function(b) {
                            return a.prototype = b, new a
                        }
                    }(),
                    bind: function(a, b) {
                        var c = Array.prototype.slice;
                        if (a.bind) return a.bind.apply(a, c.call(arguments, 1));
                        var d = c.call(arguments, 2);
                        return function() {
                            return a.apply(b, d.length ? d.concat(c.call(arguments)) : arguments)
                        }
                    },
                    stamp: function(a) {
                        return a._leaflet_id = a._leaflet_id || ++f.Util.lastId, a._leaflet_id
                    },
                    lastId: 0,
                    throttle: function(a, b, c) {
                        var d, e, f, g;
                        return g = function() {
                            d = !1, e && (f.apply(c, e), e = !1)
                        }, f = function() {
                            d ? e = arguments : (a.apply(c, arguments), setTimeout(g, b), d = !0)
                        }
                    },
                    wrapNum: function(a, b, c) {
                        var d = b[1],
                            e = b[0],
                            f = d - e;
                        return a === d && c ? a : ((a - e) % f + f) % f + e
                    },
                    falseFn: function() {
                        return !1
                    },
                    formatNum: function(a, b) {
                        var c = Math.pow(10, b || 5);
                        return Math.round(a * c) / c
                    },
                    trim: function(a) {
                        return a.trim ? a.trim() : a.replace(/^\s+|\s+$/g, "")
                    },
                    splitWords: function(a) {
                        return f.Util.trim(a).split(/\s+/)
                    },
                    setOptions: function(a, b) {
                        a.hasOwnProperty("options") || (a.options = a.options ? f.Util.create(a.options) : {});
                        for (var c in b) a.options[c] = b[c];
                        return a.options
                    },
                    getParamString: function(a, b, c) {
                        var d = [];
                        for (var e in a) d.push(encodeURIComponent(c ? e.toUpperCase() : e) + "=" + encodeURIComponent(a[e]));
                        return (b && -1 !== b.indexOf("?") ? "&" : "?") + d.join("&")
                    },
                    template: function(a, b) {
                        return a.replace(f.Util.templateRe, function(a, c) {
                            var e = b[c];
                            if (e === d) throw new Error("No value provided for variable " + a);
                            return "function" == typeof e && (e = e(b)), e
                        })
                    },
                    templateRe: /\{ *([\w_\-]+) *\}/g,
                    isArray: Array.isArray || function(a) {
                        return "[object Array]" === Object.prototype.toString.call(a)
                    },
                    indexOf: function(a, b) {
                        for (var c = 0; c < a.length; c++)
                            if (a[c] === b) return c;
                        return -1
                    },
                    emptyImageUrl: "data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs="
                },
                function() {
                    function b(b) {
                        return a["webkit" + b] || a["moz" + b] || a["ms" + b]
                    }

                    function c(b) {
                        var c = +new Date,
                            e = Math.max(0, 16 - (c - d));
                        return d = c + e, a.setTimeout(b, e)
                    }
                    var d = 0,
                        e = a.requestAnimationFrame || b("RequestAnimationFrame") || c,
                        g = a.cancelAnimationFrame || b("CancelAnimationFrame") || b("CancelRequestAnimationFrame") || function(b) {
                            a.clearTimeout(b)
                        };
                    f.Util.requestAnimFrame = function(b, d, g) {
                        return g && e === c ? (b.call(d), void 0) : e.call(a, f.bind(b, d))
                    }, f.Util.cancelAnimFrame = function(b) {
                        b && g.call(a, b)
                    }
                }(), f.extend = f.Util.extend, f.bind = f.Util.bind, f.stamp = f.Util.stamp, f.setOptions = f.Util.setOptions, f.Class = function() {}, f.Class.extend = function(a) {
                    var b = function() {
                            this.initialize && this.initialize.apply(this, arguments), this.callInitHooks()
                        },
                        c = b.__super__ = this.prototype,
                        d = f.Util.create(c);
                    d.constructor = b, b.prototype = d;
                    for (var e in this) this.hasOwnProperty(e) && "prototype" !== e && (b[e] = this[e]);
                    return a.statics && (f.extend(b, a.statics), delete a.statics), a.includes && (f.Util.extend.apply(null, [d].concat(a.includes)), delete a.includes), d.options && (a.options = f.Util.extend(f.Util.create(d.options), a.options)), f.extend(d, a), d._initHooks = [], d.callInitHooks = function() {
                        if (!this._initHooksCalled) {
                            c.callInitHooks && c.callInitHooks.call(this), this._initHooksCalled = !0;
                            for (var a = 0, b = d._initHooks.length; b > a; a++) d._initHooks[a].call(this)
                        }
                    }, b
                }, f.Class.include = function(a) {
                    return f.extend(this.prototype, a), this
                }, f.Class.mergeOptions = function(a) {
                    return f.extend(this.prototype.options, a), this
                }, f.Class.addInitHook = function(a) {
                    var b = Array.prototype.slice.call(arguments, 1),
                        c = "function" == typeof a ? a : function() {
                            this[a].apply(this, b)
                        };
                    return this.prototype._initHooks = this.prototype._initHooks || [], this.prototype._initHooks.push(c), this
                }, f.Evented = f.Class.extend({
                    on: function(a, b, c) {
                        if ("object" == typeof a)
                            for (var d in a) this._on(d, a[d], b);
                        else {
                            a = f.Util.splitWords(a);
                            for (var e = 0, g = a.length; g > e; e++) this._on(a[e], b, c)
                        }
                        return this
                    },
                    off: function(a, b, c) {
                        if (a)
                            if ("object" == typeof a)
                                for (var d in a) this._off(d, a[d], b);
                            else {
                                a = f.Util.splitWords(a);
                                for (var e = 0, g = a.length; g > e; e++) this._off(a[e], b, c)
                            }
                        else delete this._events;
                        return this
                    },
                    _on: function(a, b, c) {
                        this._events = this._events || {};
                        var e = this._events[a];
                        e || (e = [], this._events[a] = e), c === this && (c = d);
                        for (var f = {
                                fn: b,
                                ctx: c
                            }, g = e, h = 0, i = g.length; i > h; h++)
                            if (g[h].fn === b && g[h].ctx === c) return;
                        g.push(f), e.count++
                    },
                    _off: function(a, b, c) {
                        var e, g, h;
                        if (this._events && (e = this._events[a])) {
                            if (!b) {
                                for (g = 0, h = e.length; h > g; g++) e[g].fn = f.Util.falseFn;
                                return delete this._events[a], void 0
                            }
                            if (c === this && (c = d), e)
                                for (g = 0, h = e.length; h > g; g++) {
                                    var i = e[g];
                                    if (i.ctx === c && i.fn === b) return i.fn = f.Util.falseFn, this._firingCount && (this._events[a] = e = e.slice()), e.splice(g, 1), void 0
                                }
                        }
                    },
                    fire: function(a, b, c) {
                        if (!this.listens(a, c)) return this;
                        var d = f.Util.extend({}, b, {
                            type: a,
                            target: this
                        });
                        if (this._events) {
                            var e = this._events[a];
                            if (e) {
                                this._firingCount = this._firingCount + 1 || 1;
                                for (var g = 0, h = e.length; h > g; g++) {
                                    var i = e[g];
                                    i.fn.call(i.ctx || this, d)
                                }
                                this._firingCount--
                            }
                        }
                        return c && this._propagateEvent(d), this
                    },
                    listens: function(a, b) {
                        var c = this._events && this._events[a];
                        if (c && c.length) return !0;
                        if (b)
                            for (var d in this._eventParents)
                                if (this._eventParents[d].listens(a, b)) return !0;
                        return !1
                    },
                    once: function(a, b, c) {
                        if ("object" == typeof a) {
                            for (var d in a) this.once(d, a[d], b);
                            return this
                        }
                        var e = f.bind(function() {
                            this.off(a, b, c).off(a, e, c)
                        }, this);
                        return this.on(a, b, c).on(a, e, c)
                    },
                    addEventParent: function(a) {
                        return this._eventParents = this._eventParents || {}, this._eventParents[f.stamp(a)] = a, this
                    },
                    removeEventParent: function(a) {
                        return this._eventParents && delete this._eventParents[f.stamp(a)], this
                    },
                    _propagateEvent: function(a) {
                        for (var b in this._eventParents) this._eventParents[b].fire(a.type, f.extend({
                            layer: a.target
                        }, a), !0)
                    }
                });
            var g = f.Evented.prototype;
            g.addEventListener = g.on, g.removeEventListener = g.clearAllEventListeners = g.off, g.addOneTimeEventListener = g.once, g.fireEvent = g.fire, g.hasEventListeners = g.listens, f.Mixin = {
                    Events: g
                },
                function() {
                    var b = navigator.userAgent.toLowerCase(),
                        d = c.documentElement,
                        e = "ActiveXObject" in a,
                        g = -1 !== b.indexOf("webkit"),
                        h = -1 !== b.indexOf("phantom"),
                        i = -1 !== b.search("android [23]"),
                        j = -1 !== b.indexOf("chrome"),
                        k = -1 !== b.indexOf("gecko") && !g && !a.opera && !e,
                        l = 0 === navigator.platform.indexOf("Win"),
                        m = "undefined" != typeof orientation || -1 !== b.indexOf("mobile"),
                        n = !a.PointerEvent && a.MSPointerEvent,
                        o = a.PointerEvent || n,
                        p = e && "transition" in d.style,
                        q = "WebKitCSSMatrix" in a && "m11" in new a.WebKitCSSMatrix && !i,
                        r = "MozPerspective" in d.style,
                        s = "OTransition" in d.style,
                        t = !a.L_NO_TOUCH && (o || "ontouchstart" in a || a.DocumentTouch && c instanceof a.DocumentTouch);
                    f.Browser = {
                        ie: e,
                        ielt9: e && !c.addEventListener,
                        edge: "msLaunchUri" in navigator && !("documentMode" in c),
                        webkit: g,
                        gecko: k,
                        android: -1 !== b.indexOf("android"),
                        android23: i,
                        chrome: j,
                        safari: !j && -1 !== b.indexOf("safari"),
                        win: l,
                        ie3d: p,
                        webkit3d: q,
                        gecko3d: r,
                        opera12: s,
                        any3d: !a.L_DISABLE_3D && (p || q || r) && !s && !h,
                        mobile: m,
                        mobileWebkit: m && g,
                        mobileWebkit3d: m && q,
                        mobileOpera: m && a.opera,
                        mobileGecko: m && k,
                        touch: !!t,
                        msPointer: !!n,
                        pointer: !!o,
                        retina: (a.devicePixelRatio || a.screen.deviceXDPI / a.screen.logicalXDPI) > 1
                    }
                }(), f.Point = function(a, b, c) {
                    this.x = c ? Math.round(a) : a, this.y = c ? Math.round(b) : b
                }, f.Point.prototype = {
                    clone: function() {
                        return new f.Point(this.x, this.y)
                    },
                    add: function(a) {
                        return this.clone()._add(f.point(a))
                    },
                    _add: function(a) {
                        return this.x += a.x, this.y += a.y, this
                    },
                    subtract: function(a) {
                        return this.clone()._subtract(f.point(a))
                    },
                    _subtract: function(a) {
                        return this.x -= a.x, this.y -= a.y, this
                    },
                    divideBy: function(a) {
                        return this.clone()._divideBy(a)
                    },
                    _divideBy: function(a) {
                        return this.x /= a, this.y /= a, this
                    },
                    multiplyBy: function(a) {
                        return this.clone()._multiplyBy(a)
                    },
                    _multiplyBy: function(a) {
                        return this.x *= a, this.y *= a, this
                    },
                    scaleBy: function(a) {
                        return new f.Point(this.x * a.x, this.y * a.y)
                    },
                    unscaleBy: function(a) {
                        return new f.Point(this.x / a.x, this.y / a.y)
                    },
                    round: function() {
                        return this.clone()._round()
                    },
                    _round: function() {
                        return this.x = Math.round(this.x), this.y = Math.round(this.y), this
                    },
                    floor: function() {
                        return this.clone()._floor()
                    },
                    _floor: function() {
                        return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this
                    },
                    ceil: function() {
                        return this.clone()._ceil()
                    },
                    _ceil: function() {
                        return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this
                    },
                    distanceTo: function(a) {
                        a = f.point(a);
                        var b = a.x - this.x,
                            c = a.y - this.y;
                        return Math.sqrt(b * b + c * c)
                    },
                    equals: function(a) {
                        return a = f.point(a), a.x === this.x && a.y === this.y
                    },
                    contains: function(a) {
                        return a = f.point(a), Math.abs(a.x) <= Math.abs(this.x) && Math.abs(a.y) <= Math.abs(this.y)
                    },
                    toString: function() {
                        return "Point(" + f.Util.formatNum(this.x) + ", " + f.Util.formatNum(this.y) + ")"
                    }
                }, f.point = function(a, b, c) {
                    return a instanceof f.Point ? a : f.Util.isArray(a) ? new f.Point(a[0], a[1]) : a === d || null === a ? a : "object" == typeof a && "x" in a && "y" in a ? new f.Point(a.x, a.y) : new f.Point(a, b, c)
                }, f.Bounds = function(a, b) {
                    if (a)
                        for (var c = b ? [a, b] : a, d = 0, e = c.length; e > d; d++) this.extend(c[d])
                }, f.Bounds.prototype = {
                    extend: function(a) {
                        return a = f.point(a), this.min || this.max ? (this.min.x = Math.min(a.x, this.min.x), this.max.x = Math.max(a.x, this.max.x), this.min.y = Math.min(a.y, this.min.y), this.max.y = Math.max(a.y, this.max.y)) : (this.min = a.clone(), this.max = a.clone()), this
                    },
                    getCenter: function(a) {
                        return new f.Point((this.min.x + this.max.x) / 2, (this.min.y + this.max.y) / 2, a)
                    },
                    getBottomLeft: function() {
                        return new f.Point(this.min.x, this.max.y)
                    },
                    getTopRight: function() {
                        return new f.Point(this.max.x, this.min.y)
                    },
                    getSize: function() {
                        return this.max.subtract(this.min)
                    },
                    contains: function(a) {
                        var b, c;
                        return a = "number" == typeof a[0] || a instanceof f.Point ? f.point(a) : f.bounds(a), a instanceof f.Bounds ? (b = a.min, c = a.max) : b = c = a, b.x >= this.min.x && c.x <= this.max.x && b.y >= this.min.y && c.y <= this.max.y
                    },
                    intersects: function(a) {
                        a = f.bounds(a);
                        var b = this.min,
                            c = this.max,
                            d = a.min,
                            e = a.max,
                            g = e.x >= b.x && d.x <= c.x,
                            h = e.y >= b.y && d.y <= c.y;
                        return g && h
                    },
                    overlaps: function(a) {
                        a = f.bounds(a);
                        var b = this.min,
                            c = this.max,
                            d = a.min,
                            e = a.max,
                            g = e.x > b.x && d.x < c.x,
                            h = e.y > b.y && d.y < c.y;
                        return g && h
                    },
                    isValid: function() {
                        return !(!this.min || !this.max)
                    }
                }, f.bounds = function(a, b) {
                    return !a || a instanceof f.Bounds ? a : new f.Bounds(a, b)
                }, f.Transformation = function(a, b, c, d) {
                    this._a = a, this._b = b, this._c = c, this._d = d
                }, f.Transformation.prototype = {
                    transform: function(a, b) {
                        return this._transform(a.clone(), b)
                    },
                    _transform: function(a, b) {
                        return b = b || 1, a.x = b * (this._a * a.x + this._b), a.y = b * (this._c * a.y + this._d), a
                    },
                    untransform: function(a, b) {
                        return b = b || 1, new f.Point((a.x / b - this._b) / this._a, (a.y / b - this._d) / this._c)
                    }
                }, f.DomUtil = {
                    get: function(a) {
                        return "string" == typeof a ? c.getElementById(a) : a
                    },
                    getStyle: function(a, b) {
                        var d = a.style[b] || a.currentStyle && a.currentStyle[b];
                        if ((!d || "auto" === d) && c.defaultView) {
                            var e = c.defaultView.getComputedStyle(a, null);
                            d = e ? e[b] : null
                        }
                        return "auto" === d ? null : d
                    },
                    create: function(a, b, d) {
                        var e = c.createElement(a);
                        return e.className = b || "", d && d.appendChild(e), e
                    },
                    remove: function(a) {
                        var b = a.parentNode;
                        b && b.removeChild(a)
                    },
                    empty: function(a) {
                        for (; a.firstChild;) a.removeChild(a.firstChild)
                    },
                    toFront: function(a) {
                        a.parentNode.appendChild(a)
                    },
                    toBack: function(a) {
                        var b = a.parentNode;
                        b.insertBefore(a, b.firstChild)
                    },
                    hasClass: function(a, b) {
                        if (a.classList !== d) return a.classList.contains(b);
                        var c = f.DomUtil.getClass(a);
                        return c.length > 0 && new RegExp("(^|\\s)" + b + "(\\s|$)").test(c)
                    },
                    addClass: function(a, b) {
                        if (a.classList !== d)
                            for (var c = f.Util.splitWords(b), e = 0, g = c.length; g > e; e++) a.classList.add(c[e]);
                        else if (!f.DomUtil.hasClass(a, b)) {
                            var h = f.DomUtil.getClass(a);
                            f.DomUtil.setClass(a, (h ? h + " " : "") + b)
                        }
                    },
                    removeClass: function(a, b) {
                        a.classList !== d ? a.classList.remove(b) : f.DomUtil.setClass(a, f.Util.trim((" " + f.DomUtil.getClass(a) + " ").replace(" " + b + " ", " ")))
                    },
                    setClass: function(a, b) {
                        a.className.baseVal === d ? a.className = b : a.className.baseVal = b
                    },
                    getClass: function(a) {
                        return a.className.baseVal === d ? a.className : a.className.baseVal
                    },
                    setOpacity: function(a, b) {
                        "opacity" in a.style ? a.style.opacity = b : "filter" in a.style && f.DomUtil._setOpacityIE(a, b)
                    },
                    _setOpacityIE: function(a, b) {
                        var c = !1,
                            d = "DXImageTransform.Microsoft.Alpha";
                        try {
                            c = a.filters.item(d)
                        } catch (e) {
                            if (1 === b) return
                        }
                        b = Math.round(100 * b), c ? (c.Enabled = 100 !== b, c.Opacity = b) : a.style.filter += " progid:" + d + "(opacity=" + b + ")"
                    },
                    testProp: function(a) {
                        for (var b = c.documentElement.style, d = 0; d < a.length; d++)
                            if (a[d] in b) return a[d];
                        return !1
                    },
                    setTransform: function(a, b, c) {
                        var d = b || new f.Point(0, 0);
                        a.style[f.DomUtil.TRANSFORM] = (f.Browser.ie3d ? "translate(" + d.x + "px," + d.y + "px)" : "translate3d(" + d.x + "px," + d.y + "px,0)") + (c ? " scale(" + c + ")" : "")
                    },
                    setPosition: function(a, b) {
                        a._leaflet_pos = b, f.Browser.any3d ? f.DomUtil.setTransform(a, b) : (a.style.left = b.x + "px", a.style.top = b.y + "px")
                    },
                    getPosition: function(a) {
                        return a._leaflet_pos || new f.Point(0, 0)
                    }
                },
                function() {
                    f.DomUtil.TRANSFORM = f.DomUtil.testProp(["transform", "WebkitTransform", "OTransform", "MozTransform", "msTransform"]);
                    var b = f.DomUtil.TRANSITION = f.DomUtil.testProp(["webkitTransition", "transition", "OTransition", "MozTransition", "msTransition"]);
                    if (f.DomUtil.TRANSITION_END = "webkitTransition" === b || "OTransition" === b ? b + "End" : "transitionend", "onselectstart" in c) f.DomUtil.disableTextSelection = function() {
                        f.DomEvent.on(a, "selectstart", f.DomEvent.preventDefault)
                    }, f.DomUtil.enableTextSelection = function() {
                        f.DomEvent.off(a, "selectstart", f.DomEvent.preventDefault)
                    };
                    else {
                        var d = f.DomUtil.testProp(["userSelect", "WebkitUserSelect", "OUserSelect", "MozUserSelect", "msUserSelect"]);
                        f.DomUtil.disableTextSelection = function() {
                            if (d) {
                                var a = c.documentElement.style;
                                this._userSelect = a[d], a[d] = "none"
                            }
                        }, f.DomUtil.enableTextSelection = function() {
                            d && (c.documentElement.style[d] = this._userSelect, delete this._userSelect)
                        }
                    }
                    f.DomUtil.disableImageDrag = function() {
                        f.DomEvent.on(a, "dragstart", f.DomEvent.preventDefault)
                    }, f.DomUtil.enableImageDrag = function() {
                        f.DomEvent.off(a, "dragstart", f.DomEvent.preventDefault)
                    }, f.DomUtil.preventOutline = function(b) {
                        for (; - 1 === b.tabIndex;) b = b.parentNode;
                        b && b.style && (f.DomUtil.restoreOutline(), this._outlineElement = b, this._outlineStyle = b.style.outline, b.style.outline = "none", f.DomEvent.on(a, "keydown", f.DomUtil.restoreOutline, this))
                    }, f.DomUtil.restoreOutline = function() {
                        this._outlineElement && (this._outlineElement.style.outline = this._outlineStyle, delete this._outlineElement, delete this._outlineStyle, f.DomEvent.off(a, "keydown", f.DomUtil.restoreOutline, this))
                    }
                }(), f.LatLng = function(a, b, c) {
                    if (isNaN(a) || isNaN(b)) throw new Error("Invalid LatLng object: (" + a + ", " + b + ")");
                    this.lat = +a, this.lng = +b, c !== d && (this.alt = +c)
                }, f.LatLng.prototype = {
                    equals: function(a, b) {
                        if (!a) return !1;
                        a = f.latLng(a);
                        var c = Math.max(Math.abs(this.lat - a.lat), Math.abs(this.lng - a.lng));
                        return (b === d ? 1e-9 : b) >= c
                    },
                    toString: function(a) {
                        return "LatLng(" + f.Util.formatNum(this.lat, a) + ", " + f.Util.formatNum(this.lng, a) + ")"
                    },
                    distanceTo: function(a) {
                        return f.CRS.Earth.distance(this, f.latLng(a))
                    },
                    wrap: function() {
                        return f.CRS.Earth.wrapLatLng(this)
                    },
                    toBounds: function(a) {
                        var b = 180 * a / 40075017,
                            c = b / Math.cos(Math.PI / 180 * this.lat);
                        return f.latLngBounds([this.lat - b, this.lng - c], [this.lat + b, this.lng + c])
                    },
                    clone: function() {
                        return new f.LatLng(this.lat, this.lng, this.alt)
                    }
                }, f.latLng = function(a, b, c) {
                    return a instanceof f.LatLng ? a : f.Util.isArray(a) && "object" != typeof a[0] ? 3 === a.length ? new f.LatLng(a[0], a[1], a[2]) : 2 === a.length ? new f.LatLng(a[0], a[1]) : null : a === d || null === a ? a : "object" == typeof a && "lat" in a ? new f.LatLng(a.lat, "lng" in a ? a.lng : a.lon, a.alt) : b === d ? null : new f.LatLng(a, b, c)
                }, f.LatLngBounds = function(a, b) {
                    if (a)
                        for (var c = b ? [a, b] : a, d = 0, e = c.length; e > d; d++) this.extend(c[d])
                }, f.LatLngBounds.prototype = {
                    extend: function(a) {
                        var b, c, d = this._southWest,
                            e = this._northEast;
                        if (a instanceof f.LatLng) b = a, c = a;
                        else {
                            if (!(a instanceof f.LatLngBounds)) return a ? this.extend(f.latLng(a) || f.latLngBounds(a)) : this;
                            if (b = a._southWest, c = a._northEast, !b || !c) return this
                        }
                        return d || e ? (d.lat = Math.min(b.lat, d.lat), d.lng = Math.min(b.lng, d.lng), e.lat = Math.max(c.lat, e.lat), e.lng = Math.max(c.lng, e.lng)) : (this._southWest = new f.LatLng(b.lat, b.lng), this._northEast = new f.LatLng(c.lat, c.lng)), this
                    },
                    pad: function(a) {
                        var b = this._southWest,
                            c = this._northEast,
                            d = Math.abs(b.lat - c.lat) * a,
                            e = Math.abs(b.lng - c.lng) * a;
                        return new f.LatLngBounds(new f.LatLng(b.lat - d, b.lng - e), new f.LatLng(c.lat + d, c.lng + e))
                    },
                    getCenter: function() {
                        return new f.LatLng((this._southWest.lat + this._northEast.lat) / 2, (this._southWest.lng + this._northEast.lng) / 2)
                    },
                    getSouthWest: function() {
                        return this._southWest
                    },
                    getNorthEast: function() {
                        return this._northEast
                    },
                    getNorthWest: function() {
                        return new f.LatLng(this.getNorth(), this.getWest())
                    },
                    getSouthEast: function() {
                        return new f.LatLng(this.getSouth(), this.getEast())
                    },
                    getWest: function() {
                        return this._southWest.lng
                    },
                    getSouth: function() {
                        return this._southWest.lat
                    },
                    getEast: function() {
                        return this._northEast.lng
                    },
                    getNorth: function() {
                        return this._northEast.lat
                    },
                    contains: function(a) {
                        a = "number" == typeof a[0] || a instanceof f.LatLng ? f.latLng(a) : f.latLngBounds(a);
                        var b, c, d = this._southWest,
                            e = this._northEast;
                        return a instanceof f.LatLngBounds ? (b = a.getSouthWest(), c = a.getNorthEast()) : b = c = a, b.lat >= d.lat && c.lat <= e.lat && b.lng >= d.lng && c.lng <= e.lng
                    },
                    intersects: function(a) {
                        a = f.latLngBounds(a);
                        var b = this._southWest,
                            c = this._northEast,
                            d = a.getSouthWest(),
                            e = a.getNorthEast(),
                            g = e.lat >= b.lat && d.lat <= c.lat,
                            h = e.lng >= b.lng && d.lng <= c.lng;
                        return g && h
                    },
                    overlaps: function(a) {
                        a = f.latLngBounds(a);
                        var b = this._southWest,
                            c = this._northEast,
                            d = a.getSouthWest(),
                            e = a.getNorthEast(),
                            g = e.lat > b.lat && d.lat < c.lat,
                            h = e.lng > b.lng && d.lng < c.lng;
                        return g && h
                    },
                    toBBoxString: function() {
                        return [this.getWest(), this.getSouth(), this.getEast(), this.getNorth()].join(",")
                    },
                    equals: function(a) {
                        return a ? (a = f.latLngBounds(a), this._southWest.equals(a.getSouthWest()) && this._northEast.equals(a.getNorthEast())) : !1
                    },
                    isValid: function() {
                        return !(!this._southWest || !this._northEast)
                    }
                }, f.latLngBounds = function(a, b) {
                    return a instanceof f.LatLngBounds ? a : new f.LatLngBounds(a, b)
                }, f.Projection = {}, f.Projection.LonLat = {
                    project: function(a) {
                        return new f.Point(a.lng, a.lat)
                    },
                    unproject: function(a) {
                        return new f.LatLng(a.y, a.x)
                    },
                    bounds: f.bounds([-180, -90], [180, 90])
                }, f.Projection.SphericalMercator = {
                    R: 6378137,
                    MAX_LATITUDE: 85.0511287798,
                    project: function(a) {
                        var b = Math.PI / 180,
                            c = this.MAX_LATITUDE,
                            d = Math.max(Math.min(c, a.lat), -c),
                            e = Math.sin(d * b);
                        return new f.Point(this.R * a.lng * b, this.R * Math.log((1 + e) / (1 - e)) / 2)
                    },
                    unproject: function(a) {
                        var b = 180 / Math.PI;
                        return new f.LatLng((2 * Math.atan(Math.exp(a.y / this.R)) - Math.PI / 2) * b, a.x * b / this.R)
                    },
                    bounds: function() {
                        var a = 6378137 * Math.PI;
                        return f.bounds([-a, -a], [a, a])
                    }()
                }, f.CRS = {
                    latLngToPoint: function(a, b) {
                        var c = this.projection.project(a),
                            d = this.scale(b);
                        return this.transformation._transform(c, d)
                    },
                    pointToLatLng: function(a, b) {
                        var c = this.scale(b),
                            d = this.transformation.untransform(a, c);
                        return this.projection.unproject(d)
                    },
                    project: function(a) {
                        return this.projection.project(a)
                    },
                    unproject: function(a) {
                        return this.projection.unproject(a)
                    },
                    scale: function(a) {
                        return 256 * Math.pow(2, a)
                    },
                    zoom: function(a) {
                        return Math.log(a / 256) / Math.LN2
                    },
                    getProjectedBounds: function(a) {
                        if (this.infinite) return null;
                        var b = this.projection.bounds,
                            c = this.scale(a),
                            d = this.transformation.transform(b.min, c),
                            e = this.transformation.transform(b.max, c);
                        return f.bounds(d, e)
                    },
                    infinite: !1,
                    wrapLatLng: function(a) {
                        var b = this.wrapLng ? f.Util.wrapNum(a.lng, this.wrapLng, !0) : a.lng,
                            c = this.wrapLat ? f.Util.wrapNum(a.lat, this.wrapLat, !0) : a.lat,
                            d = a.alt;
                        return f.latLng(c, b, d)
                    }
                }, f.CRS.Simple = f.extend({}, f.CRS, {
                    projection: f.Projection.LonLat,
                    transformation: new f.Transformation(1, 0, -1, 0),
                    scale: function(a) {
                        return Math.pow(2, a)
                    },
                    zoom: function(a) {
                        return Math.log(a) / Math.LN2
                    },
                    distance: function(a, b) {
                        var c = b.lng - a.lng,
                            d = b.lat - a.lat;
                        return Math.sqrt(c * c + d * d)
                    },
                    infinite: !0
                }), f.CRS.Earth = f.extend({}, f.CRS, {
                    wrapLng: [-180, 180],
                    R: 6371e3,
                    distance: function(a, b) {
                        var c = Math.PI / 180,
                            d = a.lat * c,
                            e = b.lat * c,
                            f = Math.sin(d) * Math.sin(e) + Math.cos(d) * Math.cos(e) * Math.cos((b.lng - a.lng) * c);
                        return this.R * Math.acos(Math.min(f, 1))
                    }
                }), f.CRS.EPSG3857 = f.extend({}, f.CRS.Earth, {
                    code: "EPSG:3857",
                    projection: f.Projection.SphericalMercator,
                    transformation: function() {
                        var a = .5 / (Math.PI * f.Projection.SphericalMercator.R);
                        return new f.Transformation(a, .5, -a, .5)
                    }()
                }), f.CRS.EPSG900913 = f.extend({}, f.CRS.EPSG3857, {
                    code: "EPSG:900913"
                }), f.CRS.EPSG4326 = f.extend({}, f.CRS.Earth, {
                    code: "EPSG:4326",
                    projection: f.Projection.LonLat,
                    transformation: new f.Transformation(1 / 180, 1, -1 / 180, .5)
                }), f.Map = f.Evented.extend({
                    options: {
                        crs: f.CRS.EPSG3857,
                        center: d,
                        zoom: d,
                        minZoom: d,
                        maxZoom: d,
                        layers: [],
                        maxBounds: d,
                        renderer: d,
                        zoomAnimation: !0,
                        zoomAnimationThreshold: 4,
                        fadeAnimation: !0,
                        markerZoomAnimation: !0,
                        transform3DLimit: 8388608,
                        zoomSnap: 1,
                        zoomDelta: 1,
                        trackResize: !0
                    },
                    initialize: function(a, b) {
                        b = f.setOptions(this, b), this._initContainer(a), this._initLayout(), this._onResize = f.bind(this._onResize, this), this._initEvents(), b.maxBounds && this.setMaxBounds(b.maxBounds), b.zoom !== d && (this._zoom = this._limitZoom(b.zoom)), b.center && b.zoom !== d && this.setView(f.latLng(b.center), b.zoom, {
                            reset: !0
                        }), this._handlers = [], this._layers = {}, this._zoomBoundLayers = {}, this._sizeChanged = !0, this.callInitHooks(), this._zoomAnimated = f.DomUtil.TRANSITION && f.Browser.any3d && !f.Browser.mobileOpera && this.options.zoomAnimation, this._zoomAnimated && (this._createAnimProxy(), f.DomEvent.on(this._proxy, f.DomUtil.TRANSITION_END, this._catchTransitionEnd, this)), this._addLayers(this.options.layers)
                    },
                    setView: function(a, b, c) {
                        if (b = b === d ? this._zoom : this._limitZoom(b), a = this._limitCenter(f.latLng(a), b, this.options.maxBounds), c = c || {}, this._stop(), this._loaded && !c.reset && c !== !0) {
                            c.animate !== d && (c.zoom = f.extend({
                                animate: c.animate
                            }, c.zoom), c.pan = f.extend({
                                animate: c.animate,
                                duration: c.duration
                            }, c.pan));
                            var e = this._zoom !== b ? this._tryAnimatedZoom && this._tryAnimatedZoom(a, b, c.zoom) : this._tryAnimatedPan(a, c.pan);
                            if (e) return clearTimeout(this._sizeTimer), this
                        }
                        return this._resetView(a, b), this
                    },
                    setZoom: function(a, b) {
                        return this._loaded ? this.setView(this.getCenter(), a, {
                            zoom: b
                        }) : (this._zoom = a, this)
                    },
                    zoomIn: function(a, b) {
                        return a = a || (f.Browser.any3d ? this.options.zoomDelta : 1), this.setZoom(this._zoom + a, b)
                    },
                    zoomOut: function(a, b) {
                        return a = a || (f.Browser.any3d ? this.options.zoomDelta : 1), this.setZoom(this._zoom - a, b)
                    },
                    setZoomAround: function(a, b, c) {
                        var d = this.getZoomScale(b),
                            e = this.getSize().divideBy(2),
                            g = a instanceof f.Point ? a : this.latLngToContainerPoint(a),
                            h = g.subtract(e).multiplyBy(1 - 1 / d),
                            i = this.containerPointToLatLng(e.add(h));
                        return this.setView(i, b, {
                            zoom: c
                        })
                    },
                    _getBoundsCenterZoom: function(a, b) {
                        b = b || {}, a = a.getBounds ? a.getBounds() : f.latLngBounds(a);
                        var c = f.point(b.paddingTopLeft || b.padding || [0, 0]),
                            d = f.point(b.paddingBottomRight || b.padding || [0, 0]),
                            e = this.getBoundsZoom(a, !1, c.add(d));
                        e = "number" == typeof b.maxZoom ? Math.min(b.maxZoom, e) : e;
                        var g = d.subtract(c).divideBy(2),
                            h = this.project(a.getSouthWest(), e),
                            i = this.project(a.getNorthEast(), e),
                            j = this.unproject(h.add(i).divideBy(2).add(g), e);
                        return {
                            center: j,
                            zoom: e
                        }
                    },
                    fitBounds: function(a, b) {
                        if (a = f.latLngBounds(a), !a.isValid()) throw new Error("Bounds are not valid.");
                        var c = this._getBoundsCenterZoom(a, b);
                        return this.setView(c.center, c.zoom, b)
                    },
                    fitWorld: function(a) {
                        return this.fitBounds([
                            [-90, -180],
                            [90, 180]
                        ], a)
                    },
                    panTo: function(a, b) {
                        return this.setView(a, this._zoom, {
                            pan: b
                        })
                    },
                    panBy: function(a, b) {
                        if (a = f.point(a).round(), b = b || {}, !a.x && !a.y) return this.fire("moveend");
                        if (b.animate !== !0 && !this.getSize().contains(a)) return this._resetView(this.unproject(this.project(this.getCenter()).add(a)), this.getZoom()), this;
                        if (this._panAnim || (this._panAnim = new f.PosAnimation, this._panAnim.on({
                                step: this._onPanTransitionStep,
                                end: this._onPanTransitionEnd
                            }, this)), b.noMoveStart || this.fire("movestart"), b.animate !== !1) {
                            f.DomUtil.addClass(this._mapPane, "leaflet-pan-anim");
                            var c = this._getMapPanePos().subtract(a).round();
                            this._panAnim.run(this._mapPane, c, b.duration || .25, b.easeLinearity)
                        } else this._rawPanBy(a), this.fire("move").fire("moveend");
                        return this
                    },
                    flyTo: function(a, b, c) {
                        function e(a) {
                            var b = a ? -1 : 1,
                                c = a ? s : r,
                                d = s * s - r * r + b * v * v * t * t,
                                e = 2 * c * v * t,
                                f = d / e,
                                g = Math.sqrt(f * f + 1) - f,
                                h = 1e-9 > g ? -18 : Math.log(g);
                            return h
                        }

                        function g(a) {
                            return (Math.exp(a) - Math.exp(-a)) / 2
                        }

                        function h(a) {
                            return (Math.exp(a) + Math.exp(-a)) / 2
                        }

                        function i(a) {
                            return g(a) / h(a)
                        }

                        function j(a) {
                            return r * (h(w) / h(w + u * a))
                        }

                        function k(a) {
                            return r * (h(w) * i(w + u * a) - g(w)) / v
                        }

                        function l(a) {
                            return 1 - Math.pow(1 - a, 1.5)
                        }

                        function m() {
                            var c = (Date.now() - x) / z,
                                d = l(c) * y;
                            1 >= c ? (this._flyToFrame = f.Util.requestAnimFrame(m, this), this._move(this.unproject(n.add(o.subtract(n).multiplyBy(k(d) / t)), q), this.getScaleZoom(r / j(d), q), {
                                flyTo: !0
                            })) : this._move(a, b)._moveEnd(!0)
                        }
                        if (c = c || {}, c.animate === !1 || !f.Browser.any3d) return this.setView(a, b, c);
                        this._stop();
                        var n = this.project(this.getCenter()),
                            o = this.project(a),
                            p = this.getSize(),
                            q = this._zoom;
                        a = f.latLng(a), b = b === d ? q : b;
                        var r = Math.max(p.x, p.y),
                            s = r * this.getZoomScale(q, b),
                            t = o.distanceTo(n) || 1,
                            u = 1.42,
                            v = u * u,
                            w = e(0),
                            x = Date.now(),
                            y = (e(1) - w) / u,
                            z = c.duration ? 1e3 * c.duration : 1e3 * y * .8;
                        return this._moveStart(!0), m.call(this), this
                    },
                    flyToBounds: function(a, b) {
                        var c = this._getBoundsCenterZoom(a, b);
                        return this.flyTo(c.center, c.zoom, b)
                    },
                    setMaxBounds: function(a) {
                        return a = f.latLngBounds(a), a.isValid() ? (this.options.maxBounds && this.off("moveend", this._panInsideMaxBounds), this.options.maxBounds = a, this._loaded && this._panInsideMaxBounds(), this.on("moveend", this._panInsideMaxBounds)) : (this.options.maxBounds = null, this.off("moveend", this._panInsideMaxBounds))
                    },
                    setMinZoom: function(a) {
                        return this.options.minZoom = a, this._loaded && this.getZoom() < this.options.minZoom ? this.setZoom(a) : this
                    },
                    setMaxZoom: function(a) {
                        return this.options.maxZoom = a, this._loaded && this.getZoom() > this.options.maxZoom ? this.setZoom(a) : this
                    },
                    panInsideBounds: function(a, b) {
                        this._enforcingBounds = !0;
                        var c = this.getCenter(),
                            d = this._limitCenter(c, this._zoom, f.latLngBounds(a));
                        return c.equals(d) || this.panTo(d, b), this._enforcingBounds = !1, this
                    },
                    invalidateSize: function(a) {
                        if (!this._loaded) return this;
                        a = f.extend({
                            animate: !1,
                            pan: !0
                        }, a === !0 ? {
                            animate: !0
                        } : a);
                        var b = this.getSize();
                        this._sizeChanged = !0, this._lastCenter = null;
                        var c = this.getSize(),
                            d = b.divideBy(2).round(),
                            e = c.divideBy(2).round(),
                            g = d.subtract(e);
                        return g.x || g.y ? (a.animate && a.pan ? this.panBy(g) : (a.pan && this._rawPanBy(g), this.fire("move"), a.debounceMoveend ? (clearTimeout(this._sizeTimer), this._sizeTimer = setTimeout(f.bind(this.fire, this, "moveend"), 200)) : this.fire("moveend")), this.fire("resize", {
                            oldSize: b,
                            newSize: c
                        })) : this
                    },
                    stop: function() {
                        return this.setZoom(this._limitZoom(this._zoom)), this.options.zoomSnap || this.fire("viewreset"), this._stop()
                    },
                    locate: function(a) {
                        if (a = this._locateOptions = f.extend({
                                timeout: 1e4,
                                watch: !1
                            }, a), !("geolocation" in navigator)) return this._handleGeolocationError({
                            code: 0,
                            message: "Geolocation not supported."
                        }), this;
                        var b = f.bind(this._handleGeolocationResponse, this),
                            c = f.bind(this._handleGeolocationError, this);
                        return a.watch ? this._locationWatchId = navigator.geolocation.watchPosition(b, c, a) : navigator.geolocation.getCurrentPosition(b, c, a), this
                    },
                    stopLocate: function() {
                        return navigator.geolocation && navigator.geolocation.clearWatch && navigator.geolocation.clearWatch(this._locationWatchId), this._locateOptions && (this._locateOptions.setView = !1), this
                    },
                    _handleGeolocationError: function(a) {
                        var b = a.code,
                            c = a.message || (1 === b ? "permission denied" : 2 === b ? "position unavailable" : "timeout");
                        this._locateOptions.setView && !this._loaded && this.fitWorld(), this.fire("locationerror", {
                            code: b,
                            message: "Geolocation error: " + c + "."
                        })
                    },
                    _handleGeolocationResponse: function(a) {
                        var b = a.coords.latitude,
                            c = a.coords.longitude,
                            d = new f.LatLng(b, c),
                            e = d.toBounds(a.coords.accuracy),
                            g = this._locateOptions;
                        if (g.setView) {
                            var h = this.getBoundsZoom(e);
                            this.setView(d, g.maxZoom ? Math.min(h, g.maxZoom) : h)
                        }
                        var i = {
                            latlng: d,
                            bounds: e,
                            timestamp: a.timestamp
                        };
                        for (var j in a.coords) "number" == typeof a.coords[j] && (i[j] = a.coords[j]);
                        this.fire("locationfound", i)
                    },
                    addHandler: function(a, b) {
                        if (!b) return this;
                        var c = this[a] = new b(this);
                        return this._handlers.push(c), this.options[a] && c.enable(), this
                    },
                    remove: function() {
                        if (this._initEvents(!0), this._containerId !== this._container._leaflet_id) throw new Error("Map container is being reused by another instance");
                        try {
                            delete this._container._leaflet_id, delete this._containerId
                        } catch (a) {
                            this._container._leaflet_id = d, this._containerId = d
                        }
                        f.DomUtil.remove(this._mapPane), this._clearControlPos && this._clearControlPos(), this._clearHandlers(), this._loaded && this.fire("unload");
                        for (var b in this._layers) this._layers[b].remove();
                        return this
                    },
                    createPane: function(a, b) {
                        var c = "leaflet-pane" + (a ? " leaflet-" + a.replace("Pane", "") + "-pane" : ""),
                            d = f.DomUtil.create("div", c, b || this._mapPane);
                        return a && (this._panes[a] = d), d
                    },
                    getCenter: function() {
                        return this._checkIfLoaded(), this._lastCenter && !this._moved() ? this._lastCenter : this.layerPointToLatLng(this._getCenterLayerPoint())
                    },
                    getZoom: function() {
                        return this._zoom
                    },
                    getBounds: function() {
                        var a = this.getPixelBounds(),
                            b = this.unproject(a.getBottomLeft()),
                            c = this.unproject(a.getTopRight());
                        return new f.LatLngBounds(b, c)
                    },
                    getMinZoom: function() {
                        return this.options.minZoom === d ? this._layersMinZoom || 0 : this.options.minZoom
                    },
                    getMaxZoom: function() {
                        return this.options.maxZoom === d ? this._layersMaxZoom === d ? 1 / 0 : this._layersMaxZoom : this.options.maxZoom
                    },
                    getBoundsZoom: function(a, b, c) {
                        a = f.latLngBounds(a), c = f.point(c || [0, 0]);
                        var d = this.getZoom() || 0,
                            e = this.getMinZoom(),
                            g = this.getMaxZoom(),
                            h = a.getNorthWest(),
                            i = a.getSouthEast(),
                            j = this.getSize().subtract(c),
                            k = this.project(i, d).subtract(this.project(h, d)),
                            l = f.Browser.any3d ? this.options.zoomSnap : 1,
                            m = Math.min(j.x / k.x, j.y / k.y);
                        return d = this.getScaleZoom(m, d), l && (d = Math.round(d / (l / 100)) * (l / 100), d = b ? Math.ceil(d / l) * l : Math.floor(d / l) * l), Math.max(e, Math.min(g, d))
                    },
                    getSize: function() {
                        return (!this._size || this._sizeChanged) && (this._size = new f.Point(this._container.clientWidth, this._container.clientHeight), this._sizeChanged = !1), this._size.clone()
                    },
                    getPixelBounds: function(a, b) {
                        var c = this._getTopLeftPoint(a, b);
                        return new f.Bounds(c, c.add(this.getSize()))
                    },
                    getPixelOrigin: function() {
                        return this._checkIfLoaded(), this._pixelOrigin
                    },
                    getPixelWorldBounds: function(a) {
                        return this.options.crs.getProjectedBounds(a === d ? this.getZoom() : a)
                    },
                    getPane: function(a) {
                        return "string" == typeof a ? this._panes[a] : a
                    },
                    getPanes: function() {
                        return this._panes
                    },
                    getContainer: function() {
                        return this._container
                    },
                    getZoomScale: function(a, b) {
                        var c = this.options.crs;
                        return b = b === d ? this._zoom : b, c.scale(a) / c.scale(b)
                    },
                    getScaleZoom: function(a, b) {
                        var c = this.options.crs;
                        b = b === d ? this._zoom : b;
                        var e = c.zoom(a * c.scale(b));
                        return isNaN(e) ? 1 / 0 : e
                    },
                    project: function(a, b) {
                        return b = b === d ? this._zoom : b, this.options.crs.latLngToPoint(f.latLng(a), b)
                    },
                    unproject: function(a, b) {
                        return b = b === d ? this._zoom : b, this.options.crs.pointToLatLng(f.point(a), b)
                    },
                    layerPointToLatLng: function(a) {
                        var b = f.point(a).add(this.getPixelOrigin());
                        return this.unproject(b)
                    },
                    latLngToLayerPoint: function(a) {
                        var b = this.project(f.latLng(a))._round();
                        return b._subtract(this.getPixelOrigin())
                    },
                    wrapLatLng: function(a) {
                        return this.options.crs.wrapLatLng(f.latLng(a))
                    },
                    distance: function(a, b) {
                        return this.options.crs.distance(f.latLng(a), f.latLng(b))
                    },
                    containerPointToLayerPoint: function(a) {
                        return f.point(a).subtract(this._getMapPanePos())
                    },
                    layerPointToContainerPoint: function(a) {
                        return f.point(a).add(this._getMapPanePos())
                    },
                    containerPointToLatLng: function(a) {
                        var b = this.containerPointToLayerPoint(f.point(a));
                        return this.layerPointToLatLng(b)
                    },
                    latLngToContainerPoint: function(a) {
                        return this.layerPointToContainerPoint(this.latLngToLayerPoint(f.latLng(a)))
                    },
                    mouseEventToContainerPoint: function(a) {
                        return f.DomEvent.getMousePosition(a, this._container)
                    },
                    mouseEventToLayerPoint: function(a) {
                        return this.containerPointToLayerPoint(this.mouseEventToContainerPoint(a))
                    },
                    mouseEventToLatLng: function(a) {
                        return this.layerPointToLatLng(this.mouseEventToLayerPoint(a))
                    },
                    _initContainer: function(a) {
                        var b = this._container = f.DomUtil.get(a);
                        if (!b) throw new Error("Map container not found.");
                        if (b._leaflet_id) throw new Error("Map container is already initialized.");
                        f.DomEvent.addListener(b, "scroll", this._onScroll, this), this._containerId = f.Util.stamp(b)
                    },
                    _initLayout: function() {
                        var a = this._container;
                        this._fadeAnimated = this.options.fadeAnimation && f.Browser.any3d, f.DomUtil.addClass(a, "leaflet-container" + (f.Browser.touch ? " leaflet-touch" : "") + (f.Browser.retina ? " leaflet-retina" : "") + (f.Browser.ielt9 ? " leaflet-oldie" : "") + (f.Browser.safari ? " leaflet-safari" : "") + (this._fadeAnimated ? " leaflet-fade-anim" : ""));
                        var b = f.DomUtil.getStyle(a, "position");
                        "absolute" !== b && "relative" !== b && "fixed" !== b && (a.style.position = "relative"), this._initPanes(), this._initControlPos && this._initControlPos()
                    },
                    _initPanes: function() {
                        var a = this._panes = {};
                        this._paneRenderers = {}, this._mapPane = this.createPane("mapPane", this._container), f.DomUtil.setPosition(this._mapPane, new f.Point(0, 0)), this.createPane("tilePane"), this.createPane("shadowPane"), this.createPane("overlayPane"), this.createPane("markerPane"), this.createPane("tooltipPane"), this.createPane("popupPane"), this.options.markerZoomAnimation || (f.DomUtil.addClass(a.markerPane, "leaflet-zoom-hide"), f.DomUtil.addClass(a.shadowPane, "leaflet-zoom-hide"))
                    },
                    _resetView: function(a, b) {
                        f.DomUtil.setPosition(this._mapPane, new f.Point(0, 0));
                        var c = !this._loaded;
                        this._loaded = !0, b = this._limitZoom(b), this.fire("viewprereset");
                        var d = this._zoom !== b;
                        this._moveStart(d)._move(a, b)._moveEnd(d), this.fire("viewreset"), c && this.fire("load")
                    },
                    _moveStart: function(a) {
                        return a && this.fire("zoomstart"), this.fire("movestart")
                    },
                    _move: function(a, b, c) {
                        b === d && (b = this._zoom);
                        var e = this._zoom !== b;
                        return this._zoom = b, this._lastCenter = a, this._pixelOrigin = this._getNewPixelOrigin(a), (e || c && c.pinch) && this.fire("zoom", c), this.fire("move", c)
                    },
                    _moveEnd: function(a) {
                        return a && this.fire("zoomend"), this.fire("moveend")
                    },
                    _stop: function() {
                        return f.Util.cancelAnimFrame(this._flyToFrame), this._panAnim && this._panAnim.stop(), this
                    },
                    _rawPanBy: function(a) {
                        f.DomUtil.setPosition(this._mapPane, this._getMapPanePos().subtract(a))
                    },
                    _getZoomSpan: function() {
                        return this.getMaxZoom() - this.getMinZoom()
                    },
                    _panInsideMaxBounds: function() {
                        this._enforcingBounds || this.panInsideBounds(this.options.maxBounds)
                    },
                    _checkIfLoaded: function() {
                        if (!this._loaded) throw new Error("Set map center and zoom first.")
                    },
                    _initEvents: function(b) {
                        if (f.DomEvent) {
                            this._targets = {}, this._targets[f.stamp(this._container)] = this;
                            var c = b ? "off" : "on";
                            f.DomEvent[c](this._container, "click dblclick mousedown mouseup mouseover mouseout mousemove contextmenu keypress", this._handleDOMEvent, this), this.options.trackResize && f.DomEvent[c](a, "resize", this._onResize, this), f.Browser.any3d && this.options.transform3DLimit && this[c]("moveend", this._onMoveEnd)
                        }
                    },
                    _onResize: function() {
                        f.Util.cancelAnimFrame(this._resizeRequest), this._resizeRequest = f.Util.requestAnimFrame(function() {
                            this.invalidateSize({
                                debounceMoveend: !0
                            })
                        }, this)
                    },
                    _onScroll: function() {
                        this._container.scrollTop = 0, this._container.scrollLeft = 0
                    },
                    _onMoveEnd: function() {
                        var a = this._getMapPanePos();
                        Math.max(Math.abs(a.x), Math.abs(a.y)) >= this.options.transform3DLimit && this._resetView(this.getCenter(), this.getZoom())
                    },
                    _findEventTargets: function(a, b) {
                        for (var c, d = [], e = "mouseout" === b || "mouseover" === b, g = a.target || a.srcElement, h = !1; g;) {
                            if (c = this._targets[f.stamp(g)], c && ("click" === b || "preclick" === b) && !a._simulated && this._draggableMoved(c)) {
                                h = !0;
                                break
                            }
                            if (c && c.listens(b, !0)) {
                                if (e && !f.DomEvent._isExternalTarget(g, a)) break;
                                if (d.push(c), e) break
                            }
                            if (g === this._container) break;
                            g = g.parentNode
                        }
                        return d.length || h || e || !f.DomEvent._isExternalTarget(g, a) || (d = [this]), d
                    },
                    _handleDOMEvent: function(a) {
                        if (this._loaded && !f.DomEvent._skipped(a)) {
                            var b = "keypress" === a.type && 13 === a.keyCode ? "click" : a.type;
                            "mousedown" === b && f.DomUtil.preventOutline(a.target || a.srcElement), this._fireDOMEvent(a, b)
                        }
                    },
                    _fireDOMEvent: function(a, b, c) {
                        if ("click" === a.type) {
                            var d = f.Util.extend({}, a);
                            d.type = "preclick", this._fireDOMEvent(d, d.type, c)
                        }
                        if (!a._stopped && (c = (c || []).concat(this._findEventTargets(a, b)), c.length)) {
                            var e = c[0];
                            "contextmenu" === b && e.listens(b, !0) && f.DomEvent.preventDefault(a);
                            var g = {
                                originalEvent: a
                            };
                            if ("keypress" !== a.type) {
                                var h = e instanceof f.Marker;
                                g.containerPoint = h ? this.latLngToContainerPoint(e.getLatLng()) : this.mouseEventToContainerPoint(a), g.layerPoint = this.containerPointToLayerPoint(g.containerPoint), g.latlng = h ? e.getLatLng() : this.layerPointToLatLng(g.layerPoint)
                            }
                            for (var i = 0; i < c.length; i++)
                                if (c[i].fire(b, g, !0), g.originalEvent._stopped || c[i].options.nonBubblingEvents && -1 !== f.Util.indexOf(c[i].options.nonBubblingEvents, b)) return
                        }
                    },
                    _draggableMoved: function(a) {
                        return a = a.dragging && a.dragging.enabled() ? a : this, a.dragging && a.dragging.moved() || this.boxZoom && this.boxZoom.moved()
                    },
                    _clearHandlers: function() {
                        for (var a = 0, b = this._handlers.length; b > a; a++) this._handlers[a].disable()
                    },
                    whenReady: function(a, b) {
                        return this._loaded ? a.call(b || this, {
                            target: this
                        }) : this.on("load", a, b), this
                    },
                    _getMapPanePos: function() {
                        return f.DomUtil.getPosition(this._mapPane) || new f.Point(0, 0)
                    },
                    _moved: function() {
                        var a = this._getMapPanePos();
                        return a && !a.equals([0, 0])
                    },
                    _getTopLeftPoint: function(a, b) {
                        var c = a && b !== d ? this._getNewPixelOrigin(a, b) : this.getPixelOrigin();
                        return c.subtract(this._getMapPanePos())
                    },
                    _getNewPixelOrigin: function(a, b) {
                        var c = this.getSize()._divideBy(2);
                        return this.project(a, b)._subtract(c)._add(this._getMapPanePos())._round()
                    },
                    _latLngToNewLayerPoint: function(a, b, c) {
                        var d = this._getNewPixelOrigin(c, b);
                        return this.project(a, b)._subtract(d)
                    },
                    _latLngBoundsToNewLayerBounds: function(a, b, c) {
                        var d = this._getNewPixelOrigin(c, b);
                        return f.bounds([this.project(a.getSouthWest(), b)._subtract(d), this.project(a.getNorthWest(), b)._subtract(d), this.project(a.getSouthEast(), b)._subtract(d), this.project(a.getNorthEast(), b)._subtract(d)])
                    },
                    _getCenterLayerPoint: function() {
                        return this.containerPointToLayerPoint(this.getSize()._divideBy(2))
                    },
                    _getCenterOffset: function(a) {
                        return this.latLngToLayerPoint(a).subtract(this._getCenterLayerPoint())
                    },
                    _limitCenter: function(a, b, c) {
                        if (!c) return a;
                        var d = this.project(a, b),
                            e = this.getSize().divideBy(2),
                            g = new f.Bounds(d.subtract(e), d.add(e)),
                            h = this._getBoundsOffset(g, c, b);
                        return h.round().equals([0, 0]) ? a : this.unproject(d.add(h), b)
                    },
                    _limitOffset: function(a, b) {
                        if (!b) return a;
                        var c = this.getPixelBounds(),
                            d = new f.Bounds(c.min.add(a), c.max.add(a));
                        return a.add(this._getBoundsOffset(d, b))
                    },
                    _getBoundsOffset: function(a, b, c) {
                        var d = f.bounds(this.project(b.getNorthEast(), c), this.project(b.getSouthWest(), c)),
                            e = d.min.subtract(a.min),
                            g = d.max.subtract(a.max),
                            h = this._rebound(e.x, -g.x),
                            i = this._rebound(e.y, -g.y);
                        return new f.Point(h, i)
                    },
                    _rebound: function(a, b) {
                        return a + b > 0 ? Math.round(a - b) / 2 : Math.max(0, Math.ceil(a)) - Math.max(0, Math.floor(b))
                    },
                    _limitZoom: function(a) {
                        var b = this.getMinZoom(),
                            c = this.getMaxZoom(),
                            d = f.Browser.any3d ? this.options.zoomSnap : 1;
                        return d && (a = Math.round(a / d) * d), Math.max(b, Math.min(c, a))
                    },
                    _onPanTransitionStep: function() {
                        this.fire("move")
                    },
                    _onPanTransitionEnd: function() {
                        f.DomUtil.removeClass(this._mapPane, "leaflet-pan-anim"), this.fire("moveend")
                    },
                    _tryAnimatedPan: function(a, b) {
                        var c = this._getCenterOffset(a)._floor();
                        return (b && b.animate) === !0 || this.getSize().contains(c) ? (this.panBy(c, b), !0) : !1
                    },
                    _createAnimProxy: function() {
                        var a = this._proxy = f.DomUtil.create("div", "leaflet-proxy leaflet-zoom-animated");
                        this._panes.mapPane.appendChild(a), this.on("zoomanim", function(b) {
                            var c = f.DomUtil.TRANSFORM,
                                d = a.style[c];
                            f.DomUtil.setTransform(a, this.project(b.center, b.zoom), this.getZoomScale(b.zoom, 1)), d === a.style[c] && this._animatingZoom && this._onZoomTransitionEnd()
                        }, this), this.on("load moveend", function() {
                            var b = this.getCenter(),
                                c = this.getZoom();
                            f.DomUtil.setTransform(a, this.project(b, c), this.getZoomScale(c, 1))
                        }, this)
                    },
                    _catchTransitionEnd: function(a) {
                        this._animatingZoom && a.propertyName.indexOf("transform") >= 0 && this._onZoomTransitionEnd()
                    },
                    _nothingToAnimate: function() {
                        return !this._container.getElementsByClassName("leaflet-zoom-animated").length
                    },
                    _tryAnimatedZoom: function(a, b, c) {
                        if (this._animatingZoom) return !0;
                        if (c = c || {}, !this._zoomAnimated || c.animate === !1 || this._nothingToAnimate() || Math.abs(b - this._zoom) > this.options.zoomAnimationThreshold) return !1;
                        var d = this.getZoomScale(b),
                            e = this._getCenterOffset(a)._divideBy(1 - 1 / d);
                        return c.animate === !0 || this.getSize().contains(e) ? (f.Util.requestAnimFrame(function() {
                            this._moveStart(!0)._animateZoom(a, b, !0)
                        }, this), !0) : !1
                    },
                    _animateZoom: function(a, b, c, d) {
                        c && (this._animatingZoom = !0, this._animateToCenter = a, this._animateToZoom = b, f.DomUtil.addClass(this._mapPane, "leaflet-zoom-anim")), this.fire("zoomanim", {
                            center: a,
                            zoom: b,
                            noUpdate: d
                        }), setTimeout(f.bind(this._onZoomTransitionEnd, this), 250)
                    },
                    _onZoomTransitionEnd: function() {
                        this._animatingZoom && (f.DomUtil.removeClass(this._mapPane, "leaflet-zoom-anim"), this._animatingZoom = !1, this._move(this._animateToCenter, this._animateToZoom), f.Util.requestAnimFrame(function() {
                            this._moveEnd(!0)
                        }, this))
                    }
                }), f.map = function(a, b) {
                    return new f.Map(a, b)
                }, f.Layer = f.Evented.extend({
                    options: {
                        pane: "overlayPane",
                        nonBubblingEvents: [],
                        attribution: null
                    },
                    addTo: function(a) {
                        return a.addLayer(this), this
                    },
                    remove: function() {
                        return this.removeFrom(this._map || this._mapToAdd)
                    },
                    removeFrom: function(a) {
                        return a && a.removeLayer(this), this
                    },
                    getPane: function(a) {
                        return this._map.getPane(a ? this.options[a] || a : this.options.pane)
                    },
                    addInteractiveTarget: function(a) {
                        return this._map._targets[f.stamp(a)] = this, this
                    },
                    removeInteractiveTarget: function(a) {
                        return delete this._map._targets[f.stamp(a)], this
                    },
                    getAttribution: function() {
                        return this.options.attribution
                    },
                    _layerAdd: function(a) {
                        var b = a.target;
                        if (b.hasLayer(this)) {
                            if (this._map = b, this._zoomAnimated = b._zoomAnimated, this.getEvents) {
                                var c = this.getEvents();
                                b.on(c, this), this.once("remove", function() {
                                    b.off(c, this)
                                }, this)
                            }
                            this.onAdd(b), this.getAttribution && this._map.attributionControl && this._map.attributionControl.addAttribution(this.getAttribution()), this.fire("add"), b.fire("layeradd", {
                                layer: this
                            })
                        }
                    }
                }), f.Map.include({
                    addLayer: function(a) {
                        var b = f.stamp(a);
                        return this._layers[b] ? this : (this._layers[b] = a, a._mapToAdd = this, a.beforeAdd && a.beforeAdd(this), this.whenReady(a._layerAdd, a), this)
                    },
                    removeLayer: function(a) {
                        var b = f.stamp(a);
                        return this._layers[b] ? (this._loaded && a.onRemove(this), a.getAttribution && this.attributionControl && this.attributionControl.removeAttribution(a.getAttribution()), delete this._layers[b], this._loaded && (this.fire("layerremove", {
                            layer: a
                        }), a.fire("remove")), a._map = a._mapToAdd = null, this) : this
                    },
                    hasLayer: function(a) {
                        return !!a && f.stamp(a) in this._layers
                    },
                    eachLayer: function(a, b) {
                        for (var c in this._layers) a.call(b, this._layers[c]);
                        return this
                    },
                    _addLayers: function(a) {
                        a = a ? f.Util.isArray(a) ? a : [a] : [];
                        for (var b = 0, c = a.length; c > b; b++) this.addLayer(a[b])
                    },
                    _addZoomLimit: function(a) {
                        (isNaN(a.options.maxZoom) || !isNaN(a.options.minZoom)) && (this._zoomBoundLayers[f.stamp(a)] = a, this._updateZoomLevels())
                    },
                    _removeZoomLimit: function(a) {
                        var b = f.stamp(a);
                        this._zoomBoundLayers[b] && (delete this._zoomBoundLayers[b], this._updateZoomLevels())
                    },
                    _updateZoomLevels: function() {
                        var a = 1 / 0,
                            b = -1 / 0,
                            c = this._getZoomSpan();
                        for (var e in this._zoomBoundLayers) {
                            var f = this._zoomBoundLayers[e].options;
                            a = f.minZoom === d ? a : Math.min(a, f.minZoom), b = f.maxZoom === d ? b : Math.max(b, f.maxZoom)
                        }
                        this._layersMaxZoom = b === -1 / 0 ? d : b, this._layersMinZoom = 1 / 0 === a ? d : a, c !== this._getZoomSpan() && this.fire("zoomlevelschange"), this.options.maxZoom === d && this._layersMaxZoom && this.getZoom() > this._layersMaxZoom && this.setZoom(this._layersMaxZoom), this.options.minZoom === d && this._layersMinZoom && this.getZoom() < this._layersMinZoom && this.setZoom(this._layersMinZoom)
                    }
                });
            var h = "_leaflet_events";
            f.DomEvent = {
                on: function(a, b, c, d) {
                    if ("object" == typeof b)
                        for (var e in b) this._on(a, e, b[e], c);
                    else {
                        b = f.Util.splitWords(b);
                        for (var g = 0, h = b.length; h > g; g++) this._on(a, b[g], c, d)
                    }
                    return this
                },
                off: function(a, b, c, d) {
                    if ("object" == typeof b)
                        for (var e in b) this._off(a, e, b[e], c);
                    else {
                        b = f.Util.splitWords(b);
                        for (var g = 0, h = b.length; h > g; g++) this._off(a, b[g], c, d)
                    }
                    return this
                },
                _on: function(b, c, d, e) {
                    var g = c + f.stamp(d) + (e ? "_" + f.stamp(e) : "");
                    if (b[h] && b[h][g]) return this;
                    var i = function(c) {
                            return d.call(e || b, c || a.event)
                        },
                        j = i;
                    return f.Browser.pointer && 0 === c.indexOf("touch") ? this.addPointerListener(b, c, i, g) : f.Browser.touch && "dblclick" === c && this.addDoubleTapListener ? this.addDoubleTapListener(b, i, g) : "addEventListener" in b ? "mousewheel" === c ? b.addEventListener("onwheel" in b ? "wheel" : "mousewheel", i, !1) : "mouseenter" === c || "mouseleave" === c ? (i = function(c) {
                        c = c || a.event, f.DomEvent._isExternalTarget(b, c) && j(c)
                    }, b.addEventListener("mouseenter" === c ? "mouseover" : "mouseout", i, !1)) : ("click" === c && f.Browser.android && (i = function(a) {
                        return f.DomEvent._filterClick(a, j)
                    }), b.addEventListener(c, i, !1)) : "attachEvent" in b && b.attachEvent("on" + c, i), b[h] = b[h] || {}, b[h][g] = i, this
                },
                _off: function(a, b, c, d) {
                    var e = b + f.stamp(c) + (d ? "_" + f.stamp(d) : ""),
                        g = a[h] && a[h][e];
                    return g ? (f.Browser.pointer && 0 === b.indexOf("touch") ? this.removePointerListener(a, b, e) : f.Browser.touch && "dblclick" === b && this.removeDoubleTapListener ? this.removeDoubleTapListener(a, e) : "removeEventListener" in a ? "mousewheel" === b ? a.removeEventListener("onwheel" in a ? "wheel" : "mousewheel", g, !1) : a.removeEventListener("mouseenter" === b ? "mouseover" : "mouseleave" === b ? "mouseout" : b, g, !1) : "detachEvent" in a && a.detachEvent("on" + b, g), a[h][e] = null, this) : this
                },
                stopPropagation: function(a) {
                    return a.stopPropagation ? a.stopPropagation() : a.originalEvent ? a.originalEvent._stopped = !0 : a.cancelBubble = !0, f.DomEvent._skipped(a), this
                },
                disableScrollPropagation: function(a) {
                    return f.DomEvent.on(a, "mousewheel", f.DomEvent.stopPropagation)
                },
                disableClickPropagation: function(a) {
                    var b = f.DomEvent.stopPropagation;
                    return f.DomEvent.on(a, f.Draggable.START.join(" "), b), f.DomEvent.on(a, {
                        click: f.DomEvent._fakeStop,
                        dblclick: b
                    })
                },
                preventDefault: function(a) {
                    return a.preventDefault ? a.preventDefault() : a.returnValue = !1, this
                },
                stop: function(a) {
                    return f.DomEvent.preventDefault(a).stopPropagation(a)
                },
                getMousePosition: function(a, b) {
                    if (!b) return new f.Point(a.clientX, a.clientY);
                    var c = b.getBoundingClientRect();
                    return new f.Point(a.clientX - c.left - b.clientLeft, a.clientY - c.top - b.clientTop)
                },
                _wheelPxFactor: f.Browser.win && f.Browser.chrome ? 2 : f.Browser.gecko ? a.devicePixelRatio : 1,
                getWheelDelta: function(a) {
                    return f.Browser.edge ? a.wheelDeltaY / 2 : a.deltaY && 0 === a.deltaMode ? -a.deltaY / f.DomEvent._wheelPxFactor : a.deltaY && 1 === a.deltaMode ? 20 * -a.deltaY : a.deltaY && 2 === a.deltaMode ? 60 * -a.deltaY : a.deltaX || a.deltaZ ? 0 : a.wheelDelta ? (a.wheelDeltaY || a.wheelDelta) / 2 : a.detail && Math.abs(a.detail) < 32765 ? 20 * -a.detail : a.detail ? a.detail / -32765 * 60 : 0
                },
                _skipEvents: {},
                _fakeStop: function(a) {
                    f.DomEvent._skipEvents[a.type] = !0
                },
                _skipped: function(a) {
                    var b = this._skipEvents[a.type];
                    return this._skipEvents[a.type] = !1, b
                },
                _isExternalTarget: function(a, b) {
                    var c = b.relatedTarget;
                    if (!c) return !0;
                    try {
                        for (; c && c !== a;) c = c.parentNode
                    } catch (d) {
                        return !1
                    }
                    return c !== a
                },
                _filterClick: function(a, b) {
                    var c = a.timeStamp || a.originalEvent && a.originalEvent.timeStamp,
                        d = f.DomEvent._lastClick && c - f.DomEvent._lastClick;
                    return d && d > 100 && 500 > d || a.target._simulatedClick && !a._simulated ? (f.DomEvent.stop(a), void 0) : (f.DomEvent._lastClick = c, b(a), void 0)
                }
            }, f.DomEvent.addListener = f.DomEvent.on, f.DomEvent.removeListener = f.DomEvent.off, f.PosAnimation = f.Evented.extend({
                run: function(a, b, c, d) {
                    this.stop(), this._el = a, this._inProgress = !0, this._duration = c || .25, this._easeOutPower = 1 / Math.max(d || .5, .2), this._startPos = f.DomUtil.getPosition(a), this._offset = b.subtract(this._startPos), this._startTime = +new Date, this.fire("start"), this._animate()
                },
                stop: function() {
                    this._inProgress && (this._step(!0), this._complete())
                },
                _animate: function() {
                    this._animId = f.Util.requestAnimFrame(this._animate, this), this._step()
                },
                _step: function(a) {
                    var b = +new Date - this._startTime,
                        c = 1e3 * this._duration;
                    c > b ? this._runFrame(this._easeOut(b / c), a) : (this._runFrame(1), this._complete())
                },
                _runFrame: function(a, b) {
                    var c = this._startPos.add(this._offset.multiplyBy(a));
                    b && c._round(), f.DomUtil.setPosition(this._el, c), this.fire("step")
                },
                _complete: function() {
                    f.Util.cancelAnimFrame(this._animId), this._inProgress = !1, this.fire("end")
                },
                _easeOut: function(a) {
                    return 1 - Math.pow(1 - a, this._easeOutPower)
                }
            }), f.Projection.Mercator = {
                R: 6378137,
                R_MINOR: 6356752.314245179,
                bounds: f.bounds([-20037508.34279, -15496570.73972], [20037508.34279, 18764656.23138]),
                project: function(a) {
                    var b = Math.PI / 180,
                        c = this.R,
                        d = a.lat * b,
                        e = this.R_MINOR / c,
                        g = Math.sqrt(1 - e * e),
                        h = g * Math.sin(d),
                        i = Math.tan(Math.PI / 4 - d / 2) / Math.pow((1 - h) / (1 + h), g / 2);
                    return d = -c * Math.log(Math.max(i, 1e-10)), new f.Point(a.lng * b * c, d)
                },
                unproject: function(a) {
                    for (var b, c = 180 / Math.PI, d = this.R, e = this.R_MINOR / d, g = Math.sqrt(1 - e * e), h = Math.exp(-a.y / d), i = Math.PI / 2 - 2 * Math.atan(h), j = 0, k = .1; 15 > j && Math.abs(k) > 1e-7; j++) b = g * Math.sin(i), b = Math.pow((1 - b) / (1 + b), g / 2), k = Math.PI / 2 - 2 * Math.atan(h * b) - i, i += k;
                    return new f.LatLng(i * c, a.x * c / d)
                }
            }, f.CRS.EPSG3395 = f.extend({}, f.CRS.Earth, {
                code: "EPSG:3395",
                projection: f.Projection.Mercator,
                transformation: function() {
                    var a = .5 / (Math.PI * f.Projection.Mercator.R);
                    return new f.Transformation(a, .5, -a, .5)
                }()
            }), f.GridLayer = f.Layer.extend({
                options: {
                    tileSize: 256,
                    opacity: 1,
                    updateWhenIdle: f.Browser.mobile,
                    updateWhenZooming: !0,
                    updateInterval: 200,
                    zIndex: 1,
                    bounds: null,
                    minZoom: 0,
                    maxZoom: d,
                    noWrap: !1,
                    pane: "tilePane",
                    className: "",
                    keepBuffer: 2
                },
                initialize: function(a) {
                    f.setOptions(this, a)
                },
                onAdd: function() {
                    this._initContainer(), this._levels = {}, this._tiles = {}, this._resetView(), this._update()
                },
                beforeAdd: function(a) {
                    a._addZoomLimit(this)
                },
                onRemove: function(a) {
                    this._removeAllTiles(), f.DomUtil.remove(this._container), a._removeZoomLimit(this), this._container = null, this._tileZoom = null
                },
                bringToFront: function() {
                    return this._map && (f.DomUtil.toFront(this._container), this._setAutoZIndex(Math.max)), this
                },
                bringToBack: function() {
                    return this._map && (f.DomUtil.toBack(this._container), this._setAutoZIndex(Math.min)), this
                },
                getContainer: function() {
                    return this._container
                },
                setOpacity: function(a) {
                    return this.options.opacity = a, this._updateOpacity(), this
                },
                setZIndex: function(a) {
                    return this.options.zIndex = a, this._updateZIndex(), this
                },
                isLoading: function() {
                    return this._loading
                },
                redraw: function() {
                    return this._map && (this._removeAllTiles(), this._update()), this
                },
                getEvents: function() {
                    var a = {
                        viewprereset: this._invalidateAll,
                        viewreset: this._resetView,
                        zoom: this._resetView,
                        moveend: this._onMoveEnd
                    };
                    return this.options.updateWhenIdle || (this._onMove || (this._onMove = f.Util.throttle(this._onMoveEnd, this.options.updateInterval, this)), a.move = this._onMove), this._zoomAnimated && (a.zoomanim = this._animateZoom), a
                },
                createTile: function() {
                    return c.createElement("div")
                },
                getTileSize: function() {
                    var a = this.options.tileSize;
                    return a instanceof f.Point ? a : new f.Point(a, a)
                },
                _updateZIndex: function() {
                    this._container && this.options.zIndex !== d && null !== this.options.zIndex && (this._container.style.zIndex = this.options.zIndex)
                },
                _setAutoZIndex: function(a) {
                    for (var b, c = this.getPane().children, d = -a(-1 / 0, 1 / 0), e = 0, f = c.length; f > e; e++) b = c[e].style.zIndex, c[e] !== this._container && b && (d = a(d, +b));
                    isFinite(d) && (this.options.zIndex = d + a(-1, 1), this._updateZIndex())
                },
                _updateOpacity: function() {
                    if (this._map && !f.Browser.ielt9) {
                        f.DomUtil.setOpacity(this._container, this.options.opacity);
                        var a = +new Date,
                            b = !1,
                            c = !1;
                        for (var d in this._tiles) {
                            var e = this._tiles[d];
                            if (e.current && e.loaded) {
                                var g = Math.min(1, (a - e.loaded) / 200);
                                f.DomUtil.setOpacity(e.el, g), 1 > g ? b = !0 : (e.active && (c = !0), e.active = !0)
                            }
                        }
                        c && !this._noPrune && this._pruneTiles(), b && (f.Util.cancelAnimFrame(this._fadeFrame), this._fadeFrame = f.Util.requestAnimFrame(this._updateOpacity, this))
                    }
                },
                _initContainer: function() {
                    this._container || (this._container = f.DomUtil.create("div", "leaflet-layer " + (this.options.className || "")), this._updateZIndex(), this.options.opacity < 1 && this._updateOpacity(), this.getPane().appendChild(this._container))
                },
                _updateLevels: function() {
                    var a = this._tileZoom,
                        b = this.options.maxZoom;
                    if (a === d) return d;
                    for (var c in this._levels) this._levels[c].el.children.length || c === a ? this._levels[c].el.style.zIndex = b - Math.abs(a - c) : (f.DomUtil.remove(this._levels[c].el), this._removeTilesAtZoom(c), delete this._levels[c]);
                    var e = this._levels[a],
                        g = this._map;
                    return e || (e = this._levels[a] = {}, e.el = f.DomUtil.create("div", "leaflet-tile-container leaflet-zoom-animated", this._container), e.el.style.zIndex = b, e.origin = g.project(g.unproject(g.getPixelOrigin()), a).round(), e.zoom = a, this._setZoomTransform(e, g.getCenter(), g.getZoom()), f.Util.falseFn(e.el.offsetWidth)), this._level = e, e
                },
                _pruneTiles: function() {
                    if (this._map) {
                        var a, b, c = this._map.getZoom();
                        if (c > this.options.maxZoom || c < this.options.minZoom) return this._removeAllTiles(), void 0;
                        for (a in this._tiles) b = this._tiles[a], b.retain = b.current;
                        for (a in this._tiles)
                            if (b = this._tiles[a], b.current && !b.active) {
                                var d = b.coords;
                                this._retainParent(d.x, d.y, d.z, d.z - 5) || this._retainChildren(d.x, d.y, d.z, d.z + 2)
                            }
                        for (a in this._tiles) this._tiles[a].retain || this._removeTile(a)
                    }
                },
                _removeTilesAtZoom: function(a) {
                    for (var b in this._tiles) this._tiles[b].coords.z === a && this._removeTile(b)
                },
                _removeAllTiles: function() {
                    for (var a in this._tiles) this._removeTile(a)
                },
                _invalidateAll: function() {
                    for (var a in this._levels) f.DomUtil.remove(this._levels[a].el), delete this._levels[a];
                    this._removeAllTiles(), this._tileZoom = null
                },
                _retainParent: function(a, b, c, d) {
                    var e = Math.floor(a / 2),
                        g = Math.floor(b / 2),
                        h = c - 1,
                        i = new f.Point(+e, +g);
                    i.z = +h;
                    var j = this._tileCoordsToKey(i),
                        k = this._tiles[j];
                    return k && k.active ? (k.retain = !0, !0) : (k && k.loaded && (k.retain = !0), h > d ? this._retainParent(e, g, h, d) : !1)
                },
                _retainChildren: function(a, b, c, d) {
                    for (var e = 2 * a; 2 * a + 2 > e; e++)
                        for (var g = 2 * b; 2 * b + 2 > g; g++) {
                            var h = new f.Point(e, g);
                            h.z = c + 1;
                            var i = this._tileCoordsToKey(h),
                                j = this._tiles[i];
                            j && j.active ? j.retain = !0 : (j && j.loaded && (j.retain = !0), d > c + 1 && this._retainChildren(e, g, c + 1, d))
                        }
                },
                _resetView: function(a) {
                    var b = a && (a.pinch || a.flyTo);
                    this._setView(this._map.getCenter(), this._map.getZoom(), b, b)
                },
                _animateZoom: function(a) {
                    this._setView(a.center, a.zoom, !0, a.noUpdate)
                },
                _setView: function(a, b, c, e) {
                    var f = Math.round(b);
                    (this.options.maxZoom !== d && f > this.options.maxZoom || this.options.minZoom !== d && f < this.options.minZoom) && (f = d);
                    var g = this.options.updateWhenZooming && f !== this._tileZoom;
                    (!e || g) && (this._tileZoom = f, this._abortLoading && this._abortLoading(), this._updateLevels(), this._resetGrid(), f !== d && this._update(a), c || this._pruneTiles(), this._noPrune = !!c), this._setZoomTransforms(a, b)
                },
                _setZoomTransforms: function(a, b) {
                    for (var c in this._levels) this._setZoomTransform(this._levels[c], a, b)
                },
                _setZoomTransform: function(a, b, c) {
                    var d = this._map.getZoomScale(c, a.zoom),
                        e = a.origin.multiplyBy(d).subtract(this._map._getNewPixelOrigin(b, c)).round();
                    f.Browser.any3d ? f.DomUtil.setTransform(a.el, e, d) : f.DomUtil.setPosition(a.el, e)
                },
                _resetGrid: function() {
                    var a = this._map,
                        b = a.options.crs,
                        c = this._tileSize = this.getTileSize(),
                        d = this._tileZoom,
                        e = this._map.getPixelWorldBounds(this._tileZoom);
                    e && (this._globalTileRange = this._pxBoundsToTileRange(e)), this._wrapX = b.wrapLng && !this.options.noWrap && [Math.floor(a.project([0, b.wrapLng[0]], d).x / c.x), Math.ceil(a.project([0, b.wrapLng[1]], d).x / c.y)], this._wrapY = b.wrapLat && !this.options.noWrap && [Math.floor(a.project([b.wrapLat[0], 0], d).y / c.x), Math.ceil(a.project([b.wrapLat[1], 0], d).y / c.y)]
                },
                _onMoveEnd: function() {
                    this._map && !this._map._animatingZoom && this._update()
                },
                _getTiledPixelBounds: function(a) {
                    var b = this._map,
                        c = b._animatingZoom ? Math.max(b._animateToZoom, b.getZoom()) : b.getZoom(),
                        d = b.getZoomScale(c, this._tileZoom),
                        e = b.project(a, this._tileZoom).floor(),
                        g = b.getSize().divideBy(2 * d);
                    return new f.Bounds(e.subtract(g), e.add(g))
                },
                _update: function(a) {
                    var b = this._map;
                    if (b) {
                        var e = b.getZoom();
                        if (a === d && (a = b.getCenter()), this._tileZoom !== d) {
                            var g = this._getTiledPixelBounds(a),
                                h = this._pxBoundsToTileRange(g),
                                i = h.getCenter(),
                                j = [],
                                k = this.options.keepBuffer,
                                l = new f.Bounds(h.getBottomLeft().subtract([k, -k]), h.getTopRight().add([k, -k]));
                            for (var m in this._tiles) {
                                var n = this._tiles[m].coords;
                                n.z === this._tileZoom && l.contains(f.point(n.x, n.y)) || (this._tiles[m].current = !1)
                            }
                            if (Math.abs(e - this._tileZoom) > 1) return this._setView(a, e), void 0;
                            for (var o = h.min.y; o <= h.max.y; o++)
                                for (var p = h.min.x; p <= h.max.x; p++) {
                                    var q = new f.Point(p, o);
                                    if (q.z = this._tileZoom, this._isValidTile(q)) {
                                        var r = this._tiles[this._tileCoordsToKey(q)];
                                        r ? r.current = !0 : j.push(q)
                                    }
                                }
                            if (j.sort(function(a, b) {
                                    return a.distanceTo(i) - b.distanceTo(i)
                                }), 0 !== j.length) {
                                this._loading || (this._loading = !0, this.fire("loading"));
                                var s = c.createDocumentFragment();
                                for (p = 0; p < j.length; p++) this._addTile(j[p], s);
                                this._level.el.appendChild(s)
                            }
                        }
                    }
                },
                _isValidTile: function(a) {
                    var b = this._map.options.crs;
                    if (!b.infinite) {
                        var c = this._globalTileRange;
                        if (!b.wrapLng && (a.x < c.min.x || a.x > c.max.x) || !b.wrapLat && (a.y < c.min.y || a.y > c.max.y)) return !1
                    }
                    if (!this.options.bounds) return !0;
                    var d = this._tileCoordsToBounds(a);
                    return f.latLngBounds(this.options.bounds).overlaps(d)
                },
                _keyToBounds: function(a) {
                    return this._tileCoordsToBounds(this._keyToTileCoords(a))
                },
                _tileCoordsToBounds: function(a) {
                    var b = this._map,
                        c = this.getTileSize(),
                        d = a.scaleBy(c),
                        e = d.add(c),
                        g = b.unproject(d, a.z),
                        h = b.unproject(e, a.z);
                    return this.options.noWrap || (g = b.wrapLatLng(g), h = b.wrapLatLng(h)), new f.LatLngBounds(g, h)
                },
                _tileCoordsToKey: function(a) {
                    return a.x + ":" + a.y + ":" + a.z
                },
                _keyToTileCoords: function(a) {
                    var b = a.split(":"),
                        c = new f.Point(+b[0], +b[1]);
                    return c.z = +b[2], c
                },
                _removeTile: function(a) {
                    var b = this._tiles[a];
                    b && (f.DomUtil.remove(b.el), delete this._tiles[a], this.fire("tileunload", {
                        tile: b.el,
                        coords: this._keyToTileCoords(a)
                    }))
                },
                _initTile: function(a) {
                    f.DomUtil.addClass(a, "leaflet-tile");
                    var b = this.getTileSize();
                    a.style.width = b.x + "px", a.style.height = b.y + "px", a.onselectstart = f.Util.falseFn, a.onmousemove = f.Util.falseFn, f.Browser.ielt9 && this.options.opacity < 1 && f.DomUtil.setOpacity(a, this.options.opacity), f.Browser.android && !f.Browser.android23 && (a.style.WebkitBackfaceVisibility = "hidden")
                },
                _addTile: function(a, b) {
                    var c = this._getTilePos(a),
                        d = this._tileCoordsToKey(a),
                        e = this.createTile(this._wrapCoords(a), f.bind(this._tileReady, this, a));
                    this._initTile(e), this.createTile.length < 2 && f.Util.requestAnimFrame(f.bind(this._tileReady, this, a, null, e)), f.DomUtil.setPosition(e, c), this._tiles[d] = {
                        el: e,
                        coords: a,
                        current: !0
                    }, b.appendChild(e), this.fire("tileloadstart", {
                        tile: e,
                        coords: a
                    })
                },
                _tileReady: function(a, b, c) {
                    if (this._map) {
                        b && this.fire("tileerror", {
                            error: b,
                            tile: c,
                            coords: a
                        });
                        var d = this._tileCoordsToKey(a);
                        c = this._tiles[d], c && (c.loaded = +new Date, this._map._fadeAnimated ? (f.DomUtil.setOpacity(c.el, 0), f.Util.cancelAnimFrame(this._fadeFrame), this._fadeFrame = f.Util.requestAnimFrame(this._updateOpacity, this)) : (c.active = !0, this._pruneTiles()), b || (f.DomUtil.addClass(c.el, "leaflet-tile-loaded"), this.fire("tileload", {
                            tile: c.el,
                            coords: a
                        })), this._noTilesToLoad() && (this._loading = !1, this.fire("load"), f.Browser.ielt9 || !this._map._fadeAnimated ? f.Util.requestAnimFrame(this._pruneTiles, this) : setTimeout(f.bind(this._pruneTiles, this), 250)))
                    }
                },
                _getTilePos: function(a) {
                    return a.scaleBy(this.getTileSize()).subtract(this._level.origin)
                },
                _wrapCoords: function(a) {
                    var b = new f.Point(this._wrapX ? f.Util.wrapNum(a.x, this._wrapX) : a.x, this._wrapY ? f.Util.wrapNum(a.y, this._wrapY) : a.y);
                    return b.z = a.z, b
                },
                _pxBoundsToTileRange: function(a) {
                    var b = this.getTileSize();
                    return new f.Bounds(a.min.unscaleBy(b).floor(), a.max.unscaleBy(b).ceil().subtract([1, 1]))
                },
                _noTilesToLoad: function() {
                    for (var a in this._tiles)
                        if (!this._tiles[a].loaded) return !1;
                    return !0
                }
            }), f.gridLayer = function(a) {
                return new f.GridLayer(a)
            }, f.TileLayer = f.GridLayer.extend({
                options: {
                    minZoom: 0,
                    maxZoom: 18,
                    maxNativeZoom: null,
                    minNativeZoom: null,
                    subdomains: "abc",
                    errorTileUrl: "",
                    zoomOffset: 0,
                    tms: !1,
                    zoomReverse: !1,
                    detectRetina: !1,
                    crossOrigin: !1
                },
                initialize: function(a, b) {
                    this._url = a, b = f.setOptions(this, b), b.detectRetina && f.Browser.retina && b.maxZoom > 0 && (b.tileSize = Math.floor(b.tileSize / 2), b.zoomReverse ? (b.zoomOffset--, b.minZoom++) : (b.zoomOffset++, b.maxZoom--), b.minZoom = Math.max(0, b.minZoom)), "string" == typeof b.subdomains && (b.subdomains = b.subdomains.split("")), f.Browser.android || this.on("tileunload", this._onTileRemove)
                },
                setUrl: function(a, b) {
                    return this._url = a, b || this.redraw(), this
                },
                createTile: function(a, b) {
                    var d = c.createElement("img");
                    return f.DomEvent.on(d, "load", f.bind(this._tileOnLoad, this, b, d)), f.DomEvent.on(d, "error", f.bind(this._tileOnError, this, b, d)), this.options.crossOrigin && (d.crossOrigin = ""), d.alt = "", d.setAttribute("role", "presentation"), d.src = this.getTileUrl(a), d
                },
                getTileUrl: function(a) {
                    var b = {
                        r: f.Browser.retina ? "@2x" : "",
                        s: this._getSubdomain(a),
                        x: a.x,
                        y: a.y,
                        z: this._getZoomForUrl()
                    };
                    if (this._map && !this._map.options.crs.infinite) {
                        var c = this._globalTileRange.max.y - a.y;
                        this.options.tms && (b.y = c), b["-y"] = c
                    }
                    return f.Util.template(this._url, f.extend(b, this.options))
                },
                _tileOnLoad: function(a, b) {
                    f.Browser.ielt9 ? setTimeout(f.bind(a, this, null, b), 0) : a(null, b)
                },
                _tileOnError: function(a, b, c) {
                    var d = this.options.errorTileUrl;
                    d && (b.src = d), a(c, b)
                },
                getTileSize: function() {
                    var a = this._map,
                        b = f.GridLayer.prototype.getTileSize.call(this),
                        c = this._tileZoom + this.options.zoomOffset,
                        d = this.options.minNativeZoom,
                        e = this.options.maxNativeZoom;
                    return null !== d && d > c ? b.divideBy(a.getZoomScale(d, c)).round() : null !== e && c > e ? b.divideBy(a.getZoomScale(e, c)).round() : b
                },
                _onTileRemove: function(a) {
                    a.tile.onload = null
                },
                _getZoomForUrl: function() {
                    var a = this._tileZoom,
                        b = this.options.maxZoom,
                        c = this.options.zoomReverse,
                        d = this.options.zoomOffset,
                        e = this.options.minNativeZoom,
                        f = this.options.maxNativeZoom;
                    return c && (a = b - a), a += d, null !== e && e > a ? e : null !== f && a > f ? f : a
                },
                _getSubdomain: function(a) {
                    var b = Math.abs(a.x + a.y) % this.options.subdomains.length;
                    return this.options.subdomains[b]
                },
                _abortLoading: function() {
                    var a, b;
                    for (a in this._tiles) this._tiles[a].coords.z !== this._tileZoom && (b = this._tiles[a].el, b.onload = f.Util.falseFn, b.onerror = f.Util.falseFn, b.complete || (b.src = f.Util.emptyImageUrl, f.DomUtil.remove(b)))
                }
            }), f.tileLayer = function(a, b) {
                return new f.TileLayer(a, b)
            }, f.TileLayer.WMS = f.TileLayer.extend({
                defaultWmsParams: {
                    service: "WMS",
                    request: "GetMap",
                    layers: "",
                    styles: "",
                    format: "image/jpeg",
                    transparent: !1,
                    version: "1.1.1"
                },
                options: {
                    crs: null,
                    uppercase: !1
                },
                initialize: function(a, b) {
                    this._url = a;
                    var c = f.extend({}, this.defaultWmsParams);
                    for (var d in b) d in this.options || (c[d] = b[d]);
                    b = f.setOptions(this, b), c.width = c.height = b.tileSize * (b.detectRetina && f.Browser.retina ? 2 : 1), this.wmsParams = c
                },
                onAdd: function(a) {
                    this._crs = this.options.crs || a.options.crs, this._wmsVersion = parseFloat(this.wmsParams.version);
                    var b = this._wmsVersion >= 1.3 ? "crs" : "srs";
                    this.wmsParams[b] = this._crs.code, f.TileLayer.prototype.onAdd.call(this, a)
                },
                getTileUrl: function(a) {
                    var b = this._tileCoordsToBounds(a),
                        c = this._crs.project(b.getNorthWest()),
                        d = this._crs.project(b.getSouthEast()),
                        e = (this._wmsVersion >= 1.3 && this._crs === f.CRS.EPSG4326 ? [d.y, c.x, c.y, d.x] : [c.x, d.y, d.x, c.y]).join(","),
                        g = f.TileLayer.prototype.getTileUrl.call(this, a);
                    return g + f.Util.getParamString(this.wmsParams, g, this.options.uppercase) + (this.options.uppercase ? "&BBOX=" : "&bbox=") + e
                },
                setParams: function(a, b) {
                    return f.extend(this.wmsParams, a), b || this.redraw(), this
                }
            }), f.tileLayer.wms = function(a, b) {
                return new f.TileLayer.WMS(a, b)
            }, f.ImageOverlay = f.Layer.extend({
                options: {
                    opacity: 1,
                    alt: "",
                    interactive: !1,
                    crossOrigin: !1
                },
                initialize: function(a, b, c) {
                    this._url = a, this._bounds = f.latLngBounds(b), f.setOptions(this, c)
                },
                onAdd: function() {
                    this._image || (this._initImage(), this.options.opacity < 1 && this._updateOpacity()), this.options.interactive && (f.DomUtil.addClass(this._image, "leaflet-interactive"), this.addInteractiveTarget(this._image)), this.getPane().appendChild(this._image), this._reset()
                },
                onRemove: function() {
                    f.DomUtil.remove(this._image), this.options.interactive && this.removeInteractiveTarget(this._image)
                },
                setOpacity: function(a) {
                    return this.options.opacity = a, this._image && this._updateOpacity(), this
                },
                setStyle: function(a) {
                    return a.opacity && this.setOpacity(a.opacity), this
                },
                bringToFront: function() {
                    return this._map && f.DomUtil.toFront(this._image), this
                },
                bringToBack: function() {
                    return this._map && f.DomUtil.toBack(this._image), this
                },
                setUrl: function(a) {
                    return this._url = a, this._image && (this._image.src = a), this
                },
                setBounds: function(a) {
                    return this._bounds = a, this._map && this._reset(), this
                },
                getEvents: function() {
                    var a = {
                        zoom: this._reset,
                        viewreset: this._reset
                    };
                    return this._zoomAnimated && (a.zoomanim = this._animateZoom), a
                },
                getBounds: function() {
                    return this._bounds
                },
                getElement: function() {
                    return this._image
                },
                _initImage: function() {
                    var a = this._image = f.DomUtil.create("img", "leaflet-image-layer " + (this._zoomAnimated ? "leaflet-zoom-animated" : ""));
                    a.onselectstart = f.Util.falseFn, a.onmousemove = f.Util.falseFn, a.onload = f.bind(this.fire, this, "load"), this.options.crossOrigin && (a.crossOrigin = ""), a.src = this._url, a.alt = this.options.alt
                },
                _animateZoom: function(a) {
                    var b = this._map.getZoomScale(a.zoom),
                        c = this._map._latLngBoundsToNewLayerBounds(this._bounds, a.zoom, a.center).min;
                    f.DomUtil.setTransform(this._image, c, b)
                },
                _reset: function() {
                    var a = this._image,
                        b = new f.Bounds(this._map.latLngToLayerPoint(this._bounds.getNorthWest()), this._map.latLngToLayerPoint(this._bounds.getSouthEast())),
                        c = b.getSize();
                    f.DomUtil.setPosition(a, b.min), a.style.width = c.x + "px", a.style.height = c.y + "px"
                },
                _updateOpacity: function() {
                    f.DomUtil.setOpacity(this._image, this.options.opacity)
                }
            }), f.imageOverlay = function(a, b, c) {
                return new f.ImageOverlay(a, b, c)
            }, f.Icon = f.Class.extend({
                initialize: function(a) {
                    f.setOptions(this, a)
                },
                createIcon: function(a) {
                    return this._createIcon("icon", a)
                },
                createShadow: function(a) {
                    return this._createIcon("shadow", a)
                },
                _createIcon: function(a, b) {
                    var c = this._getIconUrl(a);
                    if (!c) {
                        if ("icon" === a) throw new Error("iconUrl not set in Icon options (see the docs).");
                        return null
                    }
                    var d = this._createImg(c, b && "IMG" === b.tagName ? b : null);
                    return this._setIconStyles(d, a), d
                },
                _setIconStyles: function(a, b) {
                    var c = this.options,
                        d = c[b + "Size"];
                    "number" == typeof d && (d = [d, d]);
                    var e = f.point(d),
                        g = f.point("shadow" === b && c.shadowAnchor || c.iconAnchor || e && e.divideBy(2, !0));
                    a.className = "leaflet-marker-" + b + " " + (c.className || ""), g && (a.style.marginLeft = -g.x + "px", a.style.marginTop = -g.y + "px"), e && (a.style.width = e.x + "px", a.style.height = e.y + "px")
                },
                _createImg: function(a, b) {
                    return b = b || c.createElement("img"), b.src = a, b
                },
                _getIconUrl: function(a) {
                    return f.Browser.retina && this.options[a + "RetinaUrl"] || this.options[a + "Url"]
                }
            }), f.icon = function(a) {
                return new f.Icon(a)
            }, f.Icon.Default = f.Icon.extend({
                options: {
                    iconUrl: "marker-icon.png",
                    iconRetinaUrl: "marker-icon-2x.png",
                    shadowUrl: "marker-shadow.png",
                    iconSize: [25, 41],
                    iconAnchor: [12, 41],
                    popupAnchor: [1, -34],
                    tooltipAnchor: [16, -28],
                    shadowSize: [41, 41]
                },
                _getIconUrl: function(a) {
                    return f.Icon.Default.imagePath || (f.Icon.Default.imagePath = this._detectIconPath()), (this.options.imagePath || f.Icon.Default.imagePath) + f.Icon.prototype._getIconUrl.call(this, a)
                },
                _detectIconPath: function() {
                    var a = f.DomUtil.create("div", "leaflet-default-icon-path", c.body),
                        b = f.DomUtil.getStyle(a, "background-image") || f.DomUtil.getStyle(a, "backgroundImage");
                    return c.body.removeChild(a), 0 === b.indexOf("url") ? b.replace(/^url\([\"\']?/, "").replace(/marker-icon\.png[\"\']?\)$/, "") : ""
                }
            }), f.Marker = f.Layer.extend({
                options: {
                    icon: new f.Icon.Default,
                    interactive: !0,
                    draggable: !1,
                    keyboard: !0,
                    title: "",
                    alt: "",
                    zIndexOffset: 0,
                    opacity: 1,
                    riseOnHover: !1,
                    riseOffset: 250,
                    pane: "markerPane",
                    nonBubblingEvents: ["click", "dblclick", "mouseover", "mouseout", "contextmenu"]
                },
                initialize: function(a, b) {
                    f.setOptions(this, b), this._latlng = f.latLng(a)
                },
                onAdd: function(a) {
                    this._zoomAnimated = this._zoomAnimated && a.options.markerZoomAnimation, this._zoomAnimated && a.on("zoomanim", this._animateZoom, this), this._initIcon(), this.update()
                },
                onRemove: function(a) {
                    this.dragging && this.dragging.enabled() && (this.options.draggable = !0, this.dragging.removeHooks()), this._zoomAnimated && a.off("zoomanim", this._animateZoom, this), this._removeIcon(), this._removeShadow()
                },
                getEvents: function() {
                    return {
                        zoom: this.update,
                        viewreset: this.update
                    }
                },
                getLatLng: function() {
                    return this._latlng
                },
                setLatLng: function(a) {
                    var b = this._latlng;
                    return this._latlng = f.latLng(a), this.update(), this.fire("move", {
                        oldLatLng: b,
                        latlng: this._latlng
                    })
                },
                setZIndexOffset: function(a) {
                    return this.options.zIndexOffset = a, this.update()
                },
                setIcon: function(a) {
                    return this.options.icon = a, this._map && (this._initIcon(), this.update()), this._popup && this.bindPopup(this._popup, this._popup.options), this
                },
                getElement: function() {
                    return this._icon
                },
                update: function() {
                    if (this._icon) {
                        var a = this._map.latLngToLayerPoint(this._latlng).round();
                        this._setPos(a)
                    }
                    return this
                },
                _initIcon: function() {
                    var a = this.options,
                        b = "leaflet-zoom-" + (this._zoomAnimated ? "animated" : "hide"),
                        c = a.icon.createIcon(this._icon),
                        d = !1;
                    c !== this._icon && (this._icon && this._removeIcon(), d = !0, a.title && (c.title = a.title), a.alt && (c.alt = a.alt)), f.DomUtil.addClass(c, b), a.keyboard && (c.tabIndex = "0"), this._icon = c, a.riseOnHover && this.on({
                        mouseover: this._bringToFront,
                        mouseout: this._resetZIndex
                    });
                    var e = a.icon.createShadow(this._shadow),
                        g = !1;
                    e !== this._shadow && (this._removeShadow(), g = !0), e && f.DomUtil.addClass(e, b), this._shadow = e, a.opacity < 1 && this._updateOpacity(), d && this.getPane().appendChild(this._icon), this._initInteraction(), e && g && this.getPane("shadowPane").appendChild(this._shadow)
                },
                _removeIcon: function() {
                    this.options.riseOnHover && this.off({
                        mouseover: this._bringToFront,
                        mouseout: this._resetZIndex
                    }), f.DomUtil.remove(this._icon), this.removeInteractiveTarget(this._icon), this._icon = null
                },
                _removeShadow: function() {
                    this._shadow && f.DomUtil.remove(this._shadow), this._shadow = null
                },
                _setPos: function(a) {
                    f.DomUtil.setPosition(this._icon, a), this._shadow && f.DomUtil.setPosition(this._shadow, a), this._zIndex = a.y + this.options.zIndexOffset, this._resetZIndex()
                },
                _updateZIndex: function(a) {
                    this._icon.style.zIndex = this._zIndex + a
                },
                _animateZoom: function(a) {
                    var b = this._map._latLngToNewLayerPoint(this._latlng, a.zoom, a.center).round();
                    this._setPos(b)
                },
                _initInteraction: function() {
                    if (this.options.interactive && (f.DomUtil.addClass(this._icon, "leaflet-interactive"), this.addInteractiveTarget(this._icon), f.Handler.MarkerDrag)) {
                        var a = this.options.draggable;
                        this.dragging && (a = this.dragging.enabled(), this.dragging.disable()), this.dragging = new f.Handler.MarkerDrag(this), a && this.dragging.enable()
                    }
                },
                setOpacity: function(a) {
                    return this.options.opacity = a, this._map && this._updateOpacity(), this
                },
                _updateOpacity: function() {
                    var a = this.options.opacity;
                    f.DomUtil.setOpacity(this._icon, a), this._shadow && f.DomUtil.setOpacity(this._shadow, a)
                },
                _bringToFront: function() {
                    this._updateZIndex(this.options.riseOffset)
                },
                _resetZIndex: function() {
                    this._updateZIndex(0)
                },
                _getPopupAnchor: function() {
                    return this.options.icon.options.popupAnchor || [0, 0]
                },
                _getTooltipAnchor: function() {
                    return this.options.icon.options.tooltipAnchor || [0, 0]
                }
            }), f.marker = function(a, b) {
                return new f.Marker(a, b)
            }, f.DivIcon = f.Icon.extend({
                options: {
                    iconSize: [12, 12],
                    html: !1,
                    bgPos: null,
                    className: "leaflet-div-icon"
                },
                createIcon: function(a) {
                    var b = a && "DIV" === a.tagName ? a : c.createElement("div"),
                        d = this.options;
                    if (b.innerHTML = d.html !== !1 ? d.html : "", d.bgPos) {
                        var e = f.point(d.bgPos);
                        b.style.backgroundPosition = -e.x + "px " + -e.y + "px"
                    }
                    return this._setIconStyles(b, "icon"), b
                },
                createShadow: function() {
                    return null
                }
            }), f.divIcon = function(a) {
                return new f.DivIcon(a)
            }, f.DivOverlay = f.Layer.extend({
                options: {
                    offset: [0, 7],
                    className: "",
                    pane: "popupPane"
                },
                initialize: function(a, b) {
                    f.setOptions(this, a), this._source = b
                },
                onAdd: function(a) {
                    this._zoomAnimated = a._zoomAnimated, this._container || this._initLayout(), a._fadeAnimated && f.DomUtil.setOpacity(this._container, 0), clearTimeout(this._removeTimeout), this.getPane().appendChild(this._container), this.update(), a._fadeAnimated && f.DomUtil.setOpacity(this._container, 1), this.bringToFront()
                },
                onRemove: function(a) {
                    a._fadeAnimated ? (f.DomUtil.setOpacity(this._container, 0), this._removeTimeout = setTimeout(f.bind(f.DomUtil.remove, f.DomUtil, this._container), 200)) : f.DomUtil.remove(this._container)
                },
                getLatLng: function() {
                    return this._latlng
                },
                setLatLng: function(a) {
                    return this._latlng = f.latLng(a), this._map && (this._updatePosition(), this._adjustPan()), this
                },
                getContent: function() {
                    return this._content
                },
                setContent: function(a) {
                    return this._content = a, this.update(), this
                },
                getElement: function() {
                    return this._container
                },
                update: function() {
                    this._map && (this._container.style.visibility = "hidden", this._updateContent(), this._updateLayout(), this._updatePosition(), this._container.style.visibility = "", this._adjustPan())
                },
                getEvents: function() {
                    var a = {
                        zoom: this._updatePosition,
                        viewreset: this._updatePosition
                    };
                    return this._zoomAnimated && (a.zoomanim = this._animateZoom), a
                },
                isOpen: function() {
                    return !!this._map && this._map.hasLayer(this)
                },
                bringToFront: function() {
                    return this._map && f.DomUtil.toFront(this._container), this
                },
                bringToBack: function() {
                    return this._map && f.DomUtil.toBack(this._container), this
                },
                _updateContent: function() {
                    if (this._content) {
                        var a = this._contentNode,
                            b = "function" == typeof this._content ? this._content(this._source || this) : this._content;
                        if ("string" == typeof b) a.innerHTML = b;
                        else {
                            for (; a.hasChildNodes();) a.removeChild(a.firstChild);
                            a.appendChild(b)
                        }
                        this.fire("contentupdate")
                    }
                },
                _updatePosition: function() {
                    if (this._map) {
                        var a = this._map.latLngToLayerPoint(this._latlng),
                            b = f.point(this.options.offset),
                            c = this._getAnchor();
                        this._zoomAnimated ? f.DomUtil.setPosition(this._container, a.add(c)) : b = b.add(a).add(c);
                        var d = this._containerBottom = -b.y,
                            e = this._containerLeft = -Math.round(this._containerWidth / 2) + b.x;
                        this._container.style.bottom = d + "px", this._container.style.left = e + "px"
                    }
                },
                _getAnchor: function() {
                    return [0, 0]
                }
            }), f.Popup = f.DivOverlay.extend({
                options: {
                    maxWidth: 300,
                    minWidth: 50,
                    maxHeight: null,
                    autoPan: !0,
                    autoPanPaddingTopLeft: null,
                    autoPanPaddingBottomRight: null,
                    autoPanPadding: [5, 5],
                    keepInView: !1,
                    closeButton: !0,
                    autoClose: !0,
                    className: ""
                },
                openOn: function(a) {
                    return a.openPopup(this), this
                },
                onAdd: function(a) {
                    f.DivOverlay.prototype.onAdd.call(this, a), a.fire("popupopen", {
                        popup: this
                    }), this._source && (this._source.fire("popupopen", {
                        popup: this
                    }, !0), this._source instanceof f.Path || this._source.on("preclick", f.DomEvent.stopPropagation))
                },
                onRemove: function(a) {
                    f.DivOverlay.prototype.onRemove.call(this, a), a.fire("popupclose", {
                        popup: this
                    }), this._source && (this._source.fire("popupclose", {
                        popup: this
                    }, !0), this._source instanceof f.Path || this._source.off("preclick", f.DomEvent.stopPropagation))
                },
                getEvents: function() {
                    var a = f.DivOverlay.prototype.getEvents.call(this);
                    return ("closeOnClick" in this.options ? this.options.closeOnClick : this._map.options.closePopupOnClick) && (a.preclick = this._close), this.options.keepInView && (a.moveend = this._adjustPan), a
                },
                _close: function() {
                    this._map && this._map.closePopup(this)
                },
                _initLayout: function() {
                    var a = "leaflet-popup",
                        b = this._container = f.DomUtil.create("div", a + " " + (this.options.className || "") + " leaflet-zoom-animated");
                    if (this.options.closeButton) {
                        var c = this._closeButton = f.DomUtil.create("a", a + "-close-button", b);
                        c.href = "#close", c.innerHTML = "&#215;", f.DomEvent.on(c, "click", this._onCloseButtonClick, this)
                    }
                    var d = this._wrapper = f.DomUtil.create("div", a + "-content-wrapper", b);
                    this._contentNode = f.DomUtil.create("div", a + "-content", d), f.DomEvent.disableClickPropagation(d).disableScrollPropagation(this._contentNode).on(d, "contextmenu", f.DomEvent.stopPropagation), this._tipContainer = f.DomUtil.create("div", a + "-tip-container", b), this._tip = f.DomUtil.create("div", a + "-tip", this._tipContainer)
                },
                _updateLayout: function() {
                    var a = this._contentNode,
                        b = a.style;
                    b.width = "", b.whiteSpace = "nowrap";
                    var c = a.offsetWidth;
                    c = Math.min(c, this.options.maxWidth), c = Math.max(c, this.options.minWidth), b.width = c + 1 + "px", b.whiteSpace = "", b.height = "";
                    var d = a.offsetHeight,
                        e = this.options.maxHeight,
                        g = "leaflet-popup-scrolled";
                    e && d > e ? (b.height = e + "px", f.DomUtil.addClass(a, g)) : f.DomUtil.removeClass(a, g), this._containerWidth = this._container.offsetWidth
                },
                _animateZoom: function(a) {
                    var b = this._map._latLngToNewLayerPoint(this._latlng, a.zoom, a.center),
                        c = this._getAnchor();
                    f.DomUtil.setPosition(this._container, b.add(c))
                },
                _adjustPan: function() {
                    if (!(!this.options.autoPan || this._map._panAnim && this._map._panAnim._inProgress)) {
                        var a = this._map,
                            b = parseInt(f.DomUtil.getStyle(this._container, "marginBottom"), 10) || 0,
                            c = this._container.offsetHeight + b,
                            d = this._containerWidth,
                            e = new f.Point(this._containerLeft, -c - this._containerBottom);
                        e._add(f.DomUtil.getPosition(this._container));
                        var g = a.layerPointToContainerPoint(e),
                            h = f.point(this.options.autoPanPadding),
                            i = f.point(this.options.autoPanPaddingTopLeft || h),
                            j = f.point(this.options.autoPanPaddingBottomRight || h),
                            k = a.getSize(),
                            l = 0,
                            m = 0;
                        g.x + d + j.x > k.x && (l = g.x + d - k.x + j.x), g.x - l - i.x < 0 && (l = g.x - i.x), g.y + c + j.y > k.y && (m = g.y + c - k.y + j.y), g.y - m - i.y < 0 && (m = g.y - i.y), (l || m) && a.fire("autopanstart").panBy([l, m])
                    }
                },
                _onCloseButtonClick: function(a) {
                    this._close(), f.DomEvent.stop(a)
                },
                _getAnchor: function() {
                    return f.point(this._source && this._source._getPopupAnchor ? this._source._getPopupAnchor() : [0, 0])
                }
            }), f.popup = function(a, b) {
                return new f.Popup(a, b)
            }, f.Map.mergeOptions({
                closePopupOnClick: !0
            }), f.Map.include({
                openPopup: function(a, b, c) {
                    return a instanceof f.Popup || (a = new f.Popup(c).setContent(a)), b && a.setLatLng(b), this.hasLayer(a) ? this : (this._popup && this._popup.options.autoClose && this.closePopup(), this._popup = a, this.addLayer(a))
                },
                closePopup: function(a) {
                    return a && a !== this._popup || (a = this._popup, this._popup = null), a && this.removeLayer(a), this
                }
            }), f.Layer.include({
                bindPopup: function(a, b) {
                    return a instanceof f.Popup ? (f.setOptions(a, b), this._popup = a, a._source = this) : ((!this._popup || b) && (this._popup = new f.Popup(b, this)), this._popup.setContent(a)), this._popupHandlersAdded || (this.on({
                        click: this._openPopup,
                        remove: this.closePopup,
                        move: this._movePopup
                    }), this._popupHandlersAdded = !0), this
                },
                unbindPopup: function() {
                    return this._popup && (this.off({
                        click: this._openPopup,
                        remove: this.closePopup,
                        move: this._movePopup
                    }), this._popupHandlersAdded = !1, this._popup = null), this
                },
                openPopup: function(a, b) {
                    if (a instanceof f.Layer || (b = a, a = this), a instanceof f.FeatureGroup)
                        for (var c in this._layers) {
                            a = this._layers[c];
                            break
                        }
                    return b || (b = a.getCenter ? a.getCenter() : a.getLatLng()), this._popup && this._map && (this._popup._source = a, this._popup.update(), this._map.openPopup(this._popup, b)), this
                },
                closePopup: function() {
                    return this._popup && this._popup._close(), this
                },
                togglePopup: function(a) {
                    return this._popup && (this._popup._map ? this.closePopup() : this.openPopup(a)), this
                },
                isPopupOpen: function() {
                    return this._popup.isOpen()
                },
                setPopupContent: function(a) {
                    return this._popup && this._popup.setContent(a), this
                },
                getPopup: function() {
                    return this._popup
                },
                _openPopup: function(a) {
                    var b = a.layer || a.target;
                    if (this._popup && this._map) return f.DomEvent.stop(a), b instanceof f.Path ? (this.openPopup(a.layer || a.target, a.latlng), void 0) : (this._map.hasLayer(this._popup) && this._popup._source === b ? this.closePopup() : this.openPopup(b, a.latlng), void 0)
                },
                _movePopup: function(a) {
                    this._popup.setLatLng(a.latlng)
                }
            }), f.Tooltip = f.DivOverlay.extend({
                options: {
                    pane: "tooltipPane",
                    offset: [0, 0],
                    direction: "auto",
                    permanent: !1,
                    sticky: !1,
                    interactive: !1,
                    opacity: .9
                },
                onAdd: function(a) {
                    f.DivOverlay.prototype.onAdd.call(this, a), this.setOpacity(this.options.opacity), a.fire("tooltipopen", {
                        tooltip: this
                    }), this._source && this._source.fire("tooltipopen", {
                        tooltip: this
                    }, !0)
                },
                onRemove: function(a) {
                    f.DivOverlay.prototype.onRemove.call(this, a), a.fire("tooltipclose", {
                        tooltip: this
                    }), this._source && this._source.fire("tooltipclose", {
                        tooltip: this
                    }, !0)
                },
                getEvents: function() {
                    var a = f.DivOverlay.prototype.getEvents.call(this);
                    return f.Browser.touch && !this.options.permanent && (a.preclick = this._close), a
                },
                _close: function() {
                    this._map && this._map.closeTooltip(this)
                },
                _initLayout: function() {
                    var a = "leaflet-tooltip",
                        b = a + " " + (this.options.className || "") + " leaflet-zoom-" + (this._zoomAnimated ? "animated" : "hide");
                    this._contentNode = this._container = f.DomUtil.create("div", b)
                },
                _updateLayout: function() {},
                _adjustPan: function() {},
                _setPosition: function(a) {
                    var b = this._map,
                        c = this._container,
                        d = b.latLngToContainerPoint(b.getCenter()),
                        e = b.layerPointToContainerPoint(a),
                        g = this.options.direction,
                        h = c.offsetWidth,
                        i = c.offsetHeight,
                        j = f.point(this.options.offset),
                        k = this._getAnchor();
                    "top" === g ? a = a.add(f.point(-h / 2 + j.x, -i + j.y + k.y, !0)) : "bottom" === g ? a = a.subtract(f.point(h / 2 - j.x, -j.y, !0)) : "center" === g ? a = a.subtract(f.point(h / 2 + j.x, i / 2 - k.y + j.y, !0)) : "right" === g || "auto" === g && e.x < d.x ? (g = "right", a = a.add(f.point(j.x + k.x, k.y - i / 2 + j.y, !0))) : (g = "left", a = a.subtract(f.point(h + k.x - j.x, i / 2 - k.y - j.y, !0))), f.DomUtil.removeClass(c, "leaflet-tooltip-right"), f.DomUtil.removeClass(c, "leaflet-tooltip-left"), f.DomUtil.removeClass(c, "leaflet-tooltip-top"), f.DomUtil.removeClass(c, "leaflet-tooltip-bottom"), f.DomUtil.addClass(c, "leaflet-tooltip-" + g), f.DomUtil.setPosition(c, a)
                },
                _updatePosition: function() {
                    var a = this._map.latLngToLayerPoint(this._latlng);
                    this._setPosition(a)
                },
                setOpacity: function(a) {
                    this.options.opacity = a, this._container && f.DomUtil.setOpacity(this._container, a)
                },
                _animateZoom: function(a) {
                    var b = this._map._latLngToNewLayerPoint(this._latlng, a.zoom, a.center);
                    this._setPosition(b)
                },
                _getAnchor: function() {
                    return f.point(this._source && this._source._getTooltipAnchor && !this.options.sticky ? this._source._getTooltipAnchor() : [0, 0])
                }
            }), f.tooltip = function(a, b) {
                return new f.Tooltip(a, b)
            }, f.Map.include({
                openTooltip: function(a, b, c) {
                    return a instanceof f.Tooltip || (a = new f.Tooltip(c).setContent(a)), b && a.setLatLng(b), this.hasLayer(a) ? this : this.addLayer(a)
                },
                closeTooltip: function(a) {
                    return a && this.removeLayer(a), this
                }
            }), f.Layer.include({
                bindTooltip: function(a, b) {
                    return a instanceof f.Tooltip ? (f.setOptions(a, b), this._tooltip = a, a._source = this) : ((!this._tooltip || b) && (this._tooltip = f.tooltip(b, this)), this._tooltip.setContent(a)), this._initTooltipInteractions(), this._tooltip.options.permanent && this._map && this._map.hasLayer(this) && this.openTooltip(), this
                },
                unbindTooltip: function() {
                    return this._tooltip && (this._initTooltipInteractions(!0), this.closeTooltip(), this._tooltip = null), this
                },
                _initTooltipInteractions: function(a) {
                    if (a || !this._tooltipHandlersAdded) {
                        var b = a ? "off" : "on",
                            c = {
                                remove: this.closeTooltip,
                                move: this._moveTooltip
                            };
                        this._tooltip.options.permanent ? c.add = this._openTooltip : (c.mouseover = this._openTooltip, c.mouseout = this.closeTooltip, this._tooltip.options.sticky && (c.mousemove = this._moveTooltip), f.Browser.touch && (c.click = this._openTooltip)), this[b](c), this._tooltipHandlersAdded = !a
                    }
                },
                openTooltip: function(a, b) {
                    if (a instanceof f.Layer || (b = a, a = this), a instanceof f.FeatureGroup)
                        for (var c in this._layers) {
                            a = this._layers[c];
                            break
                        }
                    return b || (b = a.getCenter ? a.getCenter() : a.getLatLng()), this._tooltip && this._map && (this._tooltip._source = a, this._tooltip.update(), this._map.openTooltip(this._tooltip, b), this._tooltip.options.interactive && this._tooltip._container && (f.DomUtil.addClass(this._tooltip._container, "leaflet-clickable"), this.addInteractiveTarget(this._tooltip._container))), this
                },
                closeTooltip: function() {
                    return this._tooltip && (this._tooltip._close(), this._tooltip.options.interactive && this._tooltip._container && (f.DomUtil.removeClass(this._tooltip._container, "leaflet-clickable"), this.removeInteractiveTarget(this._tooltip._container))), this
                },
                toggleTooltip: function(a) {
                    return this._tooltip && (this._tooltip._map ? this.closeTooltip() : this.openTooltip(a)), this
                },
                isTooltipOpen: function() {
                    return this._tooltip.isOpen()
                },
                setTooltipContent: function(a) {
                    return this._tooltip && this._tooltip.setContent(a), this
                },
                getTooltip: function() {
                    return this._tooltip
                },
                _openTooltip: function(a) {
                    var b = a.layer || a.target;
                    this._tooltip && this._map && this.openTooltip(b, this._tooltip.options.sticky ? a.latlng : d)
                },
                _moveTooltip: function(a) {
                    var b, c, d = a.latlng;
                    this._tooltip.options.sticky && a.originalEvent && (b = this._map.mouseEventToContainerPoint(a.originalEvent), c = this._map.containerPointToLayerPoint(b), d = this._map.layerPointToLatLng(c)), this._tooltip.setLatLng(d)
                }
            }), f.LayerGroup = f.Layer.extend({
                initialize: function(a) {
                    this._layers = {};
                    var b, c;
                    if (a)
                        for (b = 0, c = a.length; c > b; b++) this.addLayer(a[b])
                },
                addLayer: function(a) {
                    var b = this.getLayerId(a);
                    return this._layers[b] = a, this._map && this._map.addLayer(a), this
                },
                removeLayer: function(a) {
                    var b = a in this._layers ? a : this.getLayerId(a);
                    return this._map && this._layers[b] && this._map.removeLayer(this._layers[b]), delete this._layers[b], this
                },
                hasLayer: function(a) {
                    return !!a && (a in this._layers || this.getLayerId(a) in this._layers)
                },
                clearLayers: function() {
                    for (var a in this._layers) this.removeLayer(this._layers[a]);
                    return this
                },
                invoke: function(a) {
                    var b, c, d = Array.prototype.slice.call(arguments, 1);
                    for (b in this._layers) c = this._layers[b], c[a] && c[a].apply(c, d);
                    return this
                },
                onAdd: function(a) {
                    for (var b in this._layers) a.addLayer(this._layers[b])
                },
                onRemove: function(a) {
                    for (var b in this._layers) a.removeLayer(this._layers[b])
                },
                eachLayer: function(a, b) {
                    for (var c in this._layers) a.call(b, this._layers[c]);
                    return this
                },
                getLayer: function(a) {
                    return this._layers[a]
                },
                getLayers: function() {
                    var a = [];
                    for (var b in this._layers) a.push(this._layers[b]);
                    return a
                },
                setZIndex: function(a) {
                    return this.invoke("setZIndex", a)
                },
                getLayerId: function(a) {
                    return f.stamp(a)
                }
            }), f.layerGroup = function(a) {
                return new f.LayerGroup(a)
            }, f.FeatureGroup = f.LayerGroup.extend({
                addLayer: function(a) {
                    return this.hasLayer(a) ? this : (a.addEventParent(this), f.LayerGroup.prototype.addLayer.call(this, a), this.fire("layeradd", {
                        layer: a
                    }))
                },
                removeLayer: function(a) {
                    return this.hasLayer(a) ? (a in this._layers && (a = this._layers[a]), a.removeEventParent(this), f.LayerGroup.prototype.removeLayer.call(this, a), this.fire("layerremove", {
                        layer: a
                    })) : this
                },
                setStyle: function(a) {
                    return this.invoke("setStyle", a)
                },
                bringToFront: function() {
                    return this.invoke("bringToFront")
                },
                bringToBack: function() {
                    return this.invoke("bringToBack")
                },
                getBounds: function() {
                    var a = new f.LatLngBounds;
                    for (var b in this._layers) {
                        var c = this._layers[b];
                        a.extend(c.getBounds ? c.getBounds() : c.getLatLng())
                    }
                    return a
                }
            }), f.featureGroup = function(a) {
                return new f.FeatureGroup(a)
            }, f.Renderer = f.Layer.extend({
                options: {
                    padding: .1
                },
                initialize: function(a) {
                    f.setOptions(this, a), f.stamp(this), this._layers = this._layers || {}
                },
                onAdd: function() {
                    this._container || (this._initContainer(), this._zoomAnimated && f.DomUtil.addClass(this._container, "leaflet-zoom-animated")), this.getPane().appendChild(this._container), this._update(), this.on("update", this._updatePaths, this)
                },
                onRemove: function() {
                    f.DomUtil.remove(this._container), this.off("update", this._updatePaths, this)
                },
                getEvents: function() {
                    var a = {
                        viewreset: this._reset,
                        zoom: this._onZoom,
                        moveend: this._update,
                        zoomend: this._onZoomEnd
                    };
                    return this._zoomAnimated && (a.zoomanim = this._onAnimZoom), a
                },
                _onAnimZoom: function(a) {
                    this._updateTransform(a.center, a.zoom)
                },
                _onZoom: function() {
                    this._updateTransform(this._map.getCenter(), this._map.getZoom())
                },
                _updateTransform: function(a, b) {
                    var c = this._map.getZoomScale(b, this._zoom),
                        d = f.DomUtil.getPosition(this._container),
                        e = this._map.getSize().multiplyBy(.5 + this.options.padding),
                        g = this._map.project(this._center, b),
                        h = this._map.project(a, b),
                        i = h.subtract(g),
                        j = e.multiplyBy(-c).add(d).add(e).subtract(i);
                    f.Browser.any3d ? f.DomUtil.setTransform(this._container, j, c) : f.DomUtil.setPosition(this._container, j)
                },
                _reset: function() {
                    this._update(), this._updateTransform(this._center, this._zoom);
                    for (var a in this._layers) this._layers[a]._reset()
                },
                _onZoomEnd: function() {
                    for (var a in this._layers) this._layers[a]._project()
                },
                _updatePaths: function() {
                    for (var a in this._layers) this._layers[a]._update()
                },
                _update: function() {
                    var a = this.options.padding,
                        b = this._map.getSize(),
                        c = this._map.containerPointToLayerPoint(b.multiplyBy(-a)).round();
                    this._bounds = new f.Bounds(c, c.add(b.multiplyBy(1 + 2 * a)).round()), this._center = this._map.getCenter(), this._zoom = this._map.getZoom()
                }
            }), f.Map.include({
                getRenderer: function(a) {
                    var b = a.options.renderer || this._getPaneRenderer(a.options.pane) || this.options.renderer || this._renderer;
                    return b || (b = this._renderer = this.options.preferCanvas && f.canvas() || f.svg()), this.hasLayer(b) || this.addLayer(b), b
                },
                _getPaneRenderer: function(a) {
                    if ("overlayPane" === a || a === d) return !1;
                    var b = this._paneRenderers[a];
                    return b === d && (b = f.SVG && f.svg({
                        pane: a
                    }) || f.Canvas && f.canvas({
                        pane: a
                    }), this._paneRenderers[a] = b), b
                }
            }), f.Path = f.Layer.extend({
                options: {
                    stroke: !0,
                    color: "#3388ff",
                    weight: 3,
                    opacity: 1,
                    lineCap: "round",
                    lineJoin: "round",
                    dashArray: null,
                    dashOffset: null,
                    fill: !1,
                    fillColor: null,
                    fillOpacity: .2,
                    fillRule: "evenodd",
                    interactive: !0
                },
                beforeAdd: function(a) {
                    this._renderer = a.getRenderer(this)
                },
                onAdd: function() {
                    this._renderer._initPath(this), this._reset(), this._renderer._addPath(this)
                },
                onRemove: function() {
                    this._renderer._removePath(this)
                },
                redraw: function() {
                    return this._map && this._renderer._updatePath(this), this
                },
                setStyle: function(a) {
                    return f.setOptions(this, a), this._renderer && this._renderer._updateStyle(this), this
                },
                bringToFront: function() {
                    return this._renderer && this._renderer._bringToFront(this), this
                },
                bringToBack: function() {
                    return this._renderer && this._renderer._bringToBack(this), this
                },
                getElement: function() {
                    return this._path
                },
                _reset: function() {
                    this._project(), this._update()
                },
                _clickTolerance: function() {
                    return (this.options.stroke ? this.options.weight / 2 : 0) + (f.Browser.touch ? 10 : 0)
                }
            }), f.LineUtil = {
                simplify: function(a, b) {
                    if (!b || !a.length) return a.slice();
                    var c = b * b;
                    return a = this._reducePoints(a, c), a = this._simplifyDP(a, c)
                },
                pointToSegmentDistance: function(a, b, c) {
                    return Math.sqrt(this._sqClosestPointOnSegment(a, b, c, !0))
                },
                closestPointOnSegment: function(a, b, c) {
                    return this._sqClosestPointOnSegment(a, b, c)
                },
                _simplifyDP: function(a, b) {
                    var c = a.length,
                        e = typeof Uint8Array != d + "" ? Uint8Array : Array,
                        f = new e(c);
                    f[0] = f[c - 1] = 1, this._simplifyDPStep(a, f, b, 0, c - 1);
                    var g, h = [];
                    for (g = 0; c > g; g++) f[g] && h.push(a[g]);
                    return h
                },
                _simplifyDPStep: function(a, b, c, d, e) {
                    var f, g, h, i = 0;
                    for (g = d + 1; e - 1 >= g; g++) h = this._sqClosestPointOnSegment(a[g], a[d], a[e], !0), h > i && (f = g, i = h);
                    i > c && (b[f] = 1, this._simplifyDPStep(a, b, c, d, f), this._simplifyDPStep(a, b, c, f, e))
                },
                _reducePoints: function(a, b) {
                    for (var c = [a[0]], d = 1, e = 0, f = a.length; f > d; d++) this._sqDist(a[d], a[e]) > b && (c.push(a[d]), e = d);
                    return f - 1 > e && c.push(a[f - 1]), c
                },
                clipSegment: function(a, b, c, d, e) {
                    var f, g, h, i = d ? this._lastCode : this._getBitCode(a, c),
                        j = this._getBitCode(b, c);
                    for (this._lastCode = j;;) {
                        if (!(i | j)) return [a, b];
                        if (i & j) return !1;
                        f = i || j, g = this._getEdgeIntersection(a, b, f, c, e), h = this._getBitCode(g, c), f === i ? (a = g, i = h) : (b = g, j = h)
                    }
                },
                _getEdgeIntersection: function(a, b, c, d, e) {
                    var g, h, i = b.x - a.x,
                        j = b.y - a.y,
                        k = d.min,
                        l = d.max;
                    return 8 & c ? (g = a.x + i * (l.y - a.y) / j, h = l.y) : 4 & c ? (g = a.x + i * (k.y - a.y) / j, h = k.y) : 2 & c ? (g = l.x, h = a.y + j * (l.x - a.x) / i) : 1 & c && (g = k.x, h = a.y + j * (k.x - a.x) / i), new f.Point(g, h, e)
                },
                _getBitCode: function(a, b) {
                    var c = 0;
                    return a.x < b.min.x ? c |= 1 : a.x > b.max.x && (c |= 2), a.y < b.min.y ? c |= 4 : a.y > b.max.y && (c |= 8), c
                },
                _sqDist: function(a, b) {
                    var c = b.x - a.x,
                        d = b.y - a.y;
                    return c * c + d * d
                },
                _sqClosestPointOnSegment: function(a, b, c, d) {
                    var e, g = b.x,
                        h = b.y,
                        i = c.x - g,
                        j = c.y - h,
                        k = i * i + j * j;
                    return k > 0 && (e = ((a.x - g) * i + (a.y - h) * j) / k, e > 1 ? (g = c.x, h = c.y) : e > 0 && (g += i * e, h += j * e)), i = a.x - g, j = a.y - h, d ? i * i + j * j : new f.Point(g, h)
                }
            }, f.Polyline = f.Path.extend({
                options: {
                    smoothFactor: 1,
                    noClip: !1
                },
                initialize: function(a, b) {
                    f.setOptions(this, b), this._setLatLngs(a)
                },
                getLatLngs: function() {
                    return this._latlngs
                },
                setLatLngs: function(a) {
                    return this._setLatLngs(a), this.redraw()
                },
                isEmpty: function() {
                    return !this._latlngs.length
                },
                closestLayerPoint: function(a) {
                    for (var b, c, d = 1 / 0, e = null, g = f.LineUtil._sqClosestPointOnSegment, h = 0, i = this._parts.length; i > h; h++)
                        for (var j = this._parts[h], k = 1, l = j.length; l > k; k++) {
                            b = j[k - 1], c = j[k];
                            var m = g(a, b, c, !0);
                            d > m && (d = m, e = g(a, b, c))
                        }
                    return e && (e.distance = Math.sqrt(d)), e
                },
                getCenter: function() {
                    if (!this._map) throw new Error("Must add layer to map before using getCenter()");
                    var a, b, c, d, e, f, g, h = this._rings[0],
                        i = h.length;
                    if (!i) return null;
                    for (a = 0, b = 0; i - 1 > a; a++) b += h[a].distanceTo(h[a + 1]) / 2;
                    if (0 === b) return this._map.layerPointToLatLng(h[0]);
                    for (a = 0, d = 0; i - 1 > a; a++)
                        if (e = h[a], f = h[a + 1], c = e.distanceTo(f), d += c, d > b) return g = (d - b) / c, this._map.layerPointToLatLng([f.x - g * (f.x - e.x), f.y - g * (f.y - e.y)])
                },
                getBounds: function() {
                    return this._bounds
                },
                addLatLng: function(a, b) {
                    return b = b || this._defaultShape(), a = f.latLng(a), b.push(a), this._bounds.extend(a), this.redraw()
                },
                _setLatLngs: function(a) {
                    this._bounds = new f.LatLngBounds, this._latlngs = this._convertLatLngs(a)
                },
                _defaultShape: function() {
                    return f.Polyline._flat(this._latlngs) ? this._latlngs : this._latlngs[0]
                },
                _convertLatLngs: function(a) {
                    for (var b = [], c = f.Polyline._flat(a), d = 0, e = a.length; e > d; d++) c ? (b[d] = f.latLng(a[d]), this._bounds.extend(b[d])) : b[d] = this._convertLatLngs(a[d]);
                    return b
                },
                _project: function() {
                    var a = new f.Bounds;
                    this._rings = [], this._projectLatlngs(this._latlngs, this._rings, a);
                    var b = this._clickTolerance(),
                        c = new f.Point(b, b);
                    this._bounds.isValid() && a.isValid() && (a.min._subtract(c), a.max._add(c), this._pxBounds = a)
                },
                _projectLatlngs: function(a, b, c) {
                    var d, e, g = a[0] instanceof f.LatLng,
                        h = a.length;
                    if (g) {
                        for (e = [], d = 0; h > d; d++) e[d] = this._map.latLngToLayerPoint(a[d]), c.extend(e[d]);
                        b.push(e)
                    } else
                        for (d = 0; h > d; d++) this._projectLatlngs(a[d], b, c)
                },
                _clipPoints: function() {
                    var a = this._renderer._bounds;
                    if (this._parts = [], this._pxBounds && this._pxBounds.intersects(a)) {
                        if (this.options.noClip) return this._parts = this._rings, void 0;
                        var b, c, d, e, g, h, i, j = this._parts;
                        for (b = 0, d = 0, e = this._rings.length; e > b; b++)
                            for (i = this._rings[b], c = 0, g = i.length; g - 1 > c; c++) h = f.LineUtil.clipSegment(i[c], i[c + 1], a, c, !0), h && (j[d] = j[d] || [], j[d].push(h[0]), (h[1] !== i[c + 1] || c === g - 2) && (j[d].push(h[1]), d++))
                    }
                },
                _simplifyPoints: function() {
                    for (var a = this._parts, b = this.options.smoothFactor, c = 0, d = a.length; d > c; c++) a[c] = f.LineUtil.simplify(a[c], b)
                },
                _update: function() {
                    this._map && (this._clipPoints(), this._simplifyPoints(), this._updatePath())
                },
                _updatePath: function() {
                    this._renderer._updatePoly(this)
                }
            }), f.polyline = function(a, b) {
                return new f.Polyline(a, b)
            }, f.Polyline._flat = function(a) {
                return !f.Util.isArray(a[0]) || "object" != typeof a[0][0] && "undefined" != typeof a[0][0]
            }, f.PolyUtil = {}, f.PolyUtil.clipPolygon = function(a, b, c) {
                var d, e, g, h, i, j, k, l, m, n = [1, 4, 2, 8],
                    o = f.LineUtil;
                for (e = 0, k = a.length; k > e; e++) a[e]._code = o._getBitCode(a[e], b);
                for (h = 0; 4 > h; h++) {
                    for (l = n[h], d = [], e = 0, k = a.length, g = k - 1; k > e; g = e++) i = a[e], j = a[g], i._code & l ? j._code & l || (m = o._getEdgeIntersection(j, i, l, b, c), m._code = o._getBitCode(m, b), d.push(m)) : (j._code & l && (m = o._getEdgeIntersection(j, i, l, b, c), m._code = o._getBitCode(m, b), d.push(m)), d.push(i));
                    a = d
                }
                return a
            }, f.Polygon = f.Polyline.extend({
                options: {
                    fill: !0
                },
                isEmpty: function() {
                    return !this._latlngs.length || !this._latlngs[0].length
                },
                getCenter: function() {
                    if (!this._map) throw new Error("Must add layer to map before using getCenter()");
                    var a, b, c, d, e, f, g, h, i, j = this._rings[0],
                        k = j.length;
                    if (!k) return null;
                    for (f = g = h = 0, a = 0, b = k - 1; k > a; b = a++) c = j[a], d = j[b], e = c.y * d.x - d.y * c.x, g += (c.x + d.x) * e, h += (c.y + d.y) * e, f += 3 * e;
                    return i = 0 === f ? j[0] : [g / f, h / f], this._map.layerPointToLatLng(i)
                },
                _convertLatLngs: function(a) {
                    var b = f.Polyline.prototype._convertLatLngs.call(this, a),
                        c = b.length;
                    return c >= 2 && b[0] instanceof f.LatLng && b[0].equals(b[c - 1]) && b.pop(), b
                },
                _setLatLngs: function(a) {
                    f.Polyline.prototype._setLatLngs.call(this, a), f.Polyline._flat(this._latlngs) && (this._latlngs = [this._latlngs])
                },
                _defaultShape: function() {
                    return f.Polyline._flat(this._latlngs[0]) ? this._latlngs[0] : this._latlngs[0][0]
                },
                _clipPoints: function() {
                    var a = this._renderer._bounds,
                        b = this.options.weight,
                        c = new f.Point(b, b);
                    if (a = new f.Bounds(a.min.subtract(c), a.max.add(c)), this._parts = [], this._pxBounds && this._pxBounds.intersects(a)) {
                        if (this.options.noClip) return this._parts = this._rings, void 0;
                        for (var d, e = 0, g = this._rings.length; g > e; e++) d = f.PolyUtil.clipPolygon(this._rings[e], a, !0), d.length && this._parts.push(d)
                    }
                },
                _updatePath: function() {
                    this._renderer._updatePoly(this, !0)
                }
            }), f.polygon = function(a, b) {
                return new f.Polygon(a, b)
            }, f.Rectangle = f.Polygon.extend({
                initialize: function(a, b) {
                    f.Polygon.prototype.initialize.call(this, this._boundsToLatLngs(a), b)
                },
                setBounds: function(a) {
                    return this.setLatLngs(this._boundsToLatLngs(a))
                },
                _boundsToLatLngs: function(a) {
                    return a = f.latLngBounds(a), [a.getSouthWest(), a.getNorthWest(), a.getNorthEast(), a.getSouthEast()]
                }
            }), f.rectangle = function(a, b) {
                return new f.Rectangle(a, b)
            }, f.CircleMarker = f.Path.extend({
                options: {
                    fill: !0,
                    radius: 10
                },
                initialize: function(a, b) {
                    f.setOptions(this, b), this._latlng = f.latLng(a), this._radius = this.options.radius
                },
                setLatLng: function(a) {
                    return this._latlng = f.latLng(a), this.redraw(), this.fire("move", {
                        latlng: this._latlng
                    })
                },
                getLatLng: function() {
                    return this._latlng
                },
                setRadius: function(a) {
                    return this.options.radius = this._radius = a, this.redraw()
                },
                getRadius: function() {
                    return this._radius
                },
                setStyle: function(a) {
                    var b = a && a.radius || this._radius;
                    return f.Path.prototype.setStyle.call(this, a), this.setRadius(b), this
                },
                _project: function() {
                    this._point = this._map.latLngToLayerPoint(this._latlng), this._updateBounds()
                },
                _updateBounds: function() {
                    var a = this._radius,
                        b = this._radiusY || a,
                        c = this._clickTolerance(),
                        d = [a + c, b + c];
                    this._pxBounds = new f.Bounds(this._point.subtract(d), this._point.add(d))
                },
                _update: function() {
                    this._map && this._updatePath()
                },
                _updatePath: function() {
                    this._renderer._updateCircle(this)
                },
                _empty: function() {
                    return this._radius && !this._renderer._bounds.intersects(this._pxBounds)
                }
            }), f.circleMarker = function(a, b) {
                return new f.CircleMarker(a, b)
            }, f.Circle = f.CircleMarker.extend({
                initialize: function(a, b, c) {
                    if ("number" == typeof b && (b = f.extend({}, c, {
                            radius: b
                        })), f.setOptions(this, b), this._latlng = f.latLng(a), isNaN(this.options.radius)) throw new Error("Circle radius cannot be NaN");
                    this._mRadius = this.options.radius
                },
                setRadius: function(a) {
                    return this._mRadius = a, this.redraw()
                },
                getRadius: function() {
                    return this._mRadius
                },
                getBounds: function() {
                    var a = [this._radius, this._radiusY || this._radius];
                    return new f.LatLngBounds(this._map.layerPointToLatLng(this._point.subtract(a)), this._map.layerPointToLatLng(this._point.add(a)))
                },
                setStyle: f.Path.prototype.setStyle,
                _project: function() {
                    var a = this._latlng.lng,
                        b = this._latlng.lat,
                        c = this._map,
                        d = c.options.crs;
                    if (d.distance === f.CRS.Earth.distance) {
                        var e = Math.PI / 180,
                            g = this._mRadius / f.CRS.Earth.R / e,
                            h = c.project([b + g, a]),
                            i = c.project([b - g, a]),
                            j = h.add(i).divideBy(2),
                            k = c.unproject(j).lat,
                            l = Math.acos((Math.cos(g * e) - Math.sin(b * e) * Math.sin(k * e)) / (Math.cos(b * e) * Math.cos(k * e))) / e;
                        (isNaN(l) || 0 === l) && (l = g / Math.cos(Math.PI / 180 * b)), this._point = j.subtract(c.getPixelOrigin()), this._radius = isNaN(l) ? 0 : Math.max(Math.round(j.x - c.project([k, a - l]).x), 1), this._radiusY = Math.max(Math.round(j.y - h.y), 1)
                    } else {
                        var m = d.unproject(d.project(this._latlng).subtract([this._mRadius, 0]));
                        this._point = c.latLngToLayerPoint(this._latlng), this._radius = this._point.x - c.latLngToLayerPoint(m).x
                    }
                    this._updateBounds()
                }
            }), f.circle = function(a, b, c) {
                return new f.Circle(a, b, c)
            }, f.SVG = f.Renderer.extend({
                getEvents: function() {
                    var a = f.Renderer.prototype.getEvents.call(this);
                    return a.zoomstart = this._onZoomStart, a
                },
                _initContainer: function() {
                    this._container = f.SVG.create("svg"), this._container.setAttribute("pointer-events", "none"), this._rootGroup = f.SVG.create("g"), this._container.appendChild(this._rootGroup)
                },
                _onZoomStart: function() {
                    this._update()
                },
                _update: function() {
                    if (!this._map._animatingZoom || !this._bounds) {
                        f.Renderer.prototype._update.call(this);
                        var a = this._bounds,
                            b = a.getSize(),
                            c = this._container;
                        this._svgSize && this._svgSize.equals(b) || (this._svgSize = b, c.setAttribute("width", b.x), c.setAttribute("height", b.y)), f.DomUtil.setPosition(c, a.min), c.setAttribute("viewBox", [a.min.x, a.min.y, b.x, b.y].join(" ")), this.fire("update")
                    }
                },
                _initPath: function(a) {
                    var b = a._path = f.SVG.create("path");
                    a.options.className && f.DomUtil.addClass(b, a.options.className), a.options.interactive && f.DomUtil.addClass(b, "leaflet-interactive"), this._updateStyle(a), this._layers[f.stamp(a)] = a
                },
                _addPath: function(a) {
                    this._rootGroup.appendChild(a._path), a.addInteractiveTarget(a._path)
                },
                _removePath: function(a) {
                    f.DomUtil.remove(a._path), a.removeInteractiveTarget(a._path), delete this._layers[f.stamp(a)]
                },
                _updatePath: function(a) {
                    a._project(), a._update()
                },
                _updateStyle: function(a) {
                    var b = a._path,
                        c = a.options;
                    b && (c.stroke ? (b.setAttribute("stroke", c.color), b.setAttribute("stroke-opacity", c.opacity), b.setAttribute("stroke-width", c.weight), b.setAttribute("stroke-linecap", c.lineCap), b.setAttribute("stroke-linejoin", c.lineJoin), c.dashArray ? b.setAttribute("stroke-dasharray", c.dashArray) : b.removeAttribute("stroke-dasharray"), c.dashOffset ? b.setAttribute("stroke-dashoffset", c.dashOffset) : b.removeAttribute("stroke-dashoffset")) : b.setAttribute("stroke", "none"), c.fill ? (b.setAttribute("fill", c.fillColor || c.color), b.setAttribute("fill-opacity", c.fillOpacity), b.setAttribute("fill-rule", c.fillRule || "evenodd")) : b.setAttribute("fill", "none"))
                },
                _updatePoly: function(a, b) {
                    this._setPath(a, f.SVG.pointsToPath(a._parts, b))
                },
                _updateCircle: function(a) {
                    var b = a._point,
                        c = a._radius,
                        d = a._radiusY || c,
                        e = "a" + c + "," + d + " 0 1,0 ",
                        f = a._empty() ? "M0 0" : "M" + (b.x - c) + "," + b.y + e + 2 * c + ",0 " + e + 2 * -c + ",0 ";
                    this._setPath(a, f)
                },
                _setPath: function(a, b) {
                    a._path.setAttribute("d", b)
                },
                _bringToFront: function(a) {
                    f.DomUtil.toFront(a._path)
                },
                _bringToBack: function(a) {
                    f.DomUtil.toBack(a._path)
                }
            }), f.extend(f.SVG, {
                create: function(a) {
                    return c.createElementNS("http://www.w3.org/2000/svg", a)
                },
                pointsToPath: function(a, b) {
                    var c, d, e, g, h, i, j = "";
                    for (c = 0, e = a.length; e > c; c++) {
                        for (h = a[c], d = 0, g = h.length; g > d; d++) i = h[d], j += (d ? "L" : "M") + i.x + " " + i.y;
                        j += b ? f.Browser.svg ? "z" : "x" : ""
                    }
                    return j || "M0 0"
                }
            }), f.Browser.svg = !(!c.createElementNS || !f.SVG.create("svg").createSVGRect), f.svg = function(a) {
                return f.Browser.svg || f.Browser.vml ? new f.SVG(a) : null
            }, f.Browser.vml = !f.Browser.svg && function() {
                try {
                    var a = c.createElement("div");
                    a.innerHTML = '<v:shape adj="1"/>';
                    var b = a.firstChild;
                    return b.style.behavior = "url(#default#VML)", b && "object" == typeof b.adj
                } catch (d) {
                    return !1
                }
            }(), f.SVG.include(f.Browser.vml ? {
                _initContainer: function() {
                    this._container = f.DomUtil.create("div", "leaflet-vml-container")
                },
                _update: function() {
                    this._map._animatingZoom || (f.Renderer.prototype._update.call(this), this.fire("update"))
                },
                _initPath: function(a) {
                    var b = a._container = f.SVG.create("shape");
                    f.DomUtil.addClass(b, "leaflet-vml-shape " + (this.options.className || "")), b.coordsize = "1 1", a._path = f.SVG.create("path"), b.appendChild(a._path), this._updateStyle(a)
                },
                _addPath: function(a) {
                    var b = a._container;
                    this._container.appendChild(b), a.options.interactive && a.addInteractiveTarget(b)
                },
                _removePath: function(a) {
                    var b = a._container;
                    f.DomUtil.remove(b), a.removeInteractiveTarget(b)
                },
                _updateStyle: function(a) {
                    var b = a._stroke,
                        c = a._fill,
                        d = a.options,
                        e = a._container;
                    e.stroked = !!d.stroke, e.filled = !!d.fill, d.stroke ? (b || (b = a._stroke = f.SVG.create("stroke")), e.appendChild(b), b.weight = d.weight + "px", b.color = d.color, b.opacity = d.opacity, b.dashStyle = d.dashArray ? f.Util.isArray(d.dashArray) ? d.dashArray.join(" ") : d.dashArray.replace(/( *, *)/g, " ") : "", b.endcap = d.lineCap.replace("butt", "flat"), b.joinstyle = d.lineJoin) : b && (e.removeChild(b), a._stroke = null), d.fill ? (c || (c = a._fill = f.SVG.create("fill")), e.appendChild(c), c.color = d.fillColor || d.color, c.opacity = d.fillOpacity) : c && (e.removeChild(c), a._fill = null)
                },
                _updateCircle: function(a) {
                    var b = a._point.round(),
                        c = Math.round(a._radius),
                        d = Math.round(a._radiusY || c);
                    this._setPath(a, a._empty() ? "M0 0" : "AL " + b.x + "," + b.y + " " + c + "," + d + " 0,23592600")
                },
                _setPath: function(a, b) {
                    a._path.v = b
                },
                _bringToFront: function(a) {
                    f.DomUtil.toFront(a._container)
                },
                _bringToBack: function(a) {
                    f.DomUtil.toBack(a._container)
                }
            } : {}), f.Browser.vml && (f.SVG.create = function() {
                try {
                    return c.namespaces.add("lvml", "urn:schemas-microsoft-com:vml"),
                        function(a) {
                            return c.createElement("<lvml:" + a + ' class="lvml">')
                        }
                } catch (a) {
                    return function(a) {
                        return c.createElement("<" + a + ' xmlns="urn:schemas-microsoft.com:vml" class="lvml">')
                    }
                }
            }()), f.Canvas = f.Renderer.extend({
                onAdd: function() {
                    f.Renderer.prototype.onAdd.call(this), this._draw()
                },
                _initContainer: function() {
                    var a = this._container = c.createElement("canvas");
                    f.DomEvent.on(a, "mousemove", f.Util.throttle(this._onMouseMove, 32, this), this).on(a, "click dblclick mousedown mouseup contextmenu", this._onClick, this).on(a, "mouseout", this._handleMouseOut, this), this._ctx = a.getContext("2d")
                },
                _updatePaths: function() {
                    var a;
                    this._redrawBounds = null;
                    for (var b in this._layers) a = this._layers[b], a._update();
                    this._redraw()
                },
                _update: function() {
                    if (!this._map._animatingZoom || !this._bounds) {
                        this._drawnLayers = {}, f.Renderer.prototype._update.call(this);
                        var a = this._bounds,
                            b = this._container,
                            c = a.getSize(),
                            d = f.Browser.retina ? 2 : 1;
                        f.DomUtil.setPosition(b, a.min), b.width = d * c.x, b.height = d * c.y, b.style.width = c.x + "px", b.style.height = c.y + "px", f.Browser.retina && this._ctx.scale(2, 2), this._ctx.translate(-a.min.x, -a.min.y), this.fire("update")
                    }
                },
                _initPath: function(a) {
                    this._updateDashArray(a), this._layers[f.stamp(a)] = a;
                    var b = a._order = {
                        layer: a,
                        prev: this._drawLast,
                        next: null
                    };
                    this._drawLast && (this._drawLast.next = b), this._drawLast = b, this._drawFirst = this._drawFirst || this._drawLast
                },
                _addPath: function(a) {
                    this._requestRedraw(a)
                },
                _removePath: function(a) {
                    var b = a._order,
                        c = b.next,
                        d = b.prev;
                    c ? c.prev = d : this._drawLast = d, d ? d.next = c : this._drawFirst = c, delete a._order, delete this._layers[f.stamp(a)], this._requestRedraw(a)
                },
                _updatePath: function(a) {
                    this._extendRedrawBounds(a), a._project(), a._update(), this._requestRedraw(a)
                },
                _updateStyle: function(a) {
                    this._updateDashArray(a), this._requestRedraw(a)
                },
                _updateDashArray: function(a) {
                    if (a.options.dashArray) {
                        var b, c = a.options.dashArray.split(","),
                            d = [];
                        for (b = 0; b < c.length; b++) d.push(Number(c[b]));
                        a.options._dashArray = d
                    }
                },
                _requestRedraw: function(a) {
                    this._map && (this._extendRedrawBounds(a), this._redrawRequest = this._redrawRequest || f.Util.requestAnimFrame(this._redraw, this))
                },
                _extendRedrawBounds: function(a) {
                    var b = (a.options.weight || 0) + 1;
                    this._redrawBounds = this._redrawBounds || new f.Bounds, this._redrawBounds.extend(a._pxBounds.min.subtract([b, b])), this._redrawBounds.extend(a._pxBounds.max.add([b, b]))
                },
                _redraw: function() {
                    this._redrawRequest = null, this._clear(), this._draw(), this._redrawBounds = null
                },
                _clear: function() {
                    var a = this._redrawBounds;
                    if (a) {
                        var b = a.getSize();
                        this._ctx.clearRect(a.min.x, a.min.y, b.x, b.y)
                    } else this._ctx.clearRect(0, 0, this._container.width, this._container.height)
                },
                _draw: function() {
                    var a, b = this._redrawBounds;
                    if (this._ctx.save(), b) {
                        var c = b.getSize();
                        this._ctx.beginPath(), this._ctx.rect(b.min.x, b.min.y, c.x, c.y), this._ctx.clip()
                    }
                    this._drawing = !0;
                    for (var d = this._drawFirst; d; d = d.next) a = d.layer, (!b || a._pxBounds && a._pxBounds.intersects(b)) && a._updatePath();
                    this._drawing = !1, this._ctx.restore()
                },
                _updatePoly: function(a, b) {
                    if (this._drawing) {
                        var c, d, e, f, g = a._parts,
                            h = g.length,
                            i = this._ctx;
                        if (h) {
                            for (this._drawnLayers[a._leaflet_id] = a, i.beginPath(), i.setLineDash && i.setLineDash(a.options && a.options._dashArray || []), c = 0; h > c; c++) {
                                for (d = 0, e = g[c].length; e > d; d++) f = g[c][d], i[d ? "lineTo" : "moveTo"](f.x, f.y);
                                b && i.closePath()
                            }
                            this._fillStroke(i, a)
                        }
                    }
                },
                _updateCircle: function(a) {
                    if (this._drawing && !a._empty()) {
                        var b = a._point,
                            c = this._ctx,
                            d = a._radius,
                            e = (a._radiusY || d) / d;
                        this._drawnLayers[a._leaflet_id] = a, 1 !== e && (c.save(), c.scale(1, e)), c.beginPath(), c.arc(b.x, b.y / e, d, 0, 2 * Math.PI, !1), 1 !== e && c.restore(), this._fillStroke(c, a)
                    }
                },
                _fillStroke: function(a, b) {
                    var c = b.options;
                    c.fill && (a.globalAlpha = c.fillOpacity, a.fillStyle = c.fillColor || c.color, a.fill(c.fillRule || "evenodd")), c.stroke && 0 !== c.weight && (a.globalAlpha = c.opacity, a.lineWidth = c.weight, a.strokeStyle = c.color, a.lineCap = c.lineCap, a.lineJoin = c.lineJoin, a.stroke())
                },
                _onClick: function(a) {
                    for (var b, c, d = this._map.mouseEventToLayerPoint(a), e = this._drawFirst; e; e = e.next) b = e.layer, b.options.interactive && b._containsPoint(d) && !this._map._draggableMoved(b) && (c = b);
                    c && (f.DomEvent._fakeStop(a), this._fireEvent([c], a))
                },
                _onMouseMove: function(a) {
                    if (this._map && !this._map.dragging.moving() && !this._map._animatingZoom) {
                        var b = this._map.mouseEventToLayerPoint(a);
                        this._handleMouseHover(a, b)
                    }
                },
                _handleMouseOut: function(a) {
                    var b = this._hoveredLayer;
                    b && (f.DomUtil.removeClass(this._container, "leaflet-interactive"), this._fireEvent([b], a, "mouseout"), this._hoveredLayer = null)
                },
                _handleMouseHover: function(a, b) {
                    for (var c, d, e = this._drawFirst; e; e = e.next) c = e.layer, c.options.interactive && c._containsPoint(b) && (d = c);
                    d !== this._hoveredLayer && (this._handleMouseOut(a), d && (f.DomUtil.addClass(this._container, "leaflet-interactive"), this._fireEvent([d], a, "mouseover"), this._hoveredLayer = d)), this._hoveredLayer && this._fireEvent([this._hoveredLayer], a)
                },
                _fireEvent: function(a, b, c) {
                    this._map._fireDOMEvent(b, c || b.type, a)
                },
                _bringToFront: function(a) {
                    var b = a._order,
                        c = b.next,
                        d = b.prev;
                    c && (c.prev = d, d ? d.next = c : c && (this._drawFirst = c), b.prev = this._drawLast, this._drawLast.next = b, b.next = null, this._drawLast = b, this._requestRedraw(a))
                },
                _bringToBack: function(a) {
                    var b = a._order,
                        c = b.next,
                        d = b.prev;
                    d && (d.next = c, c ? c.prev = d : d && (this._drawLast = d), b.prev = null, b.next = this._drawFirst, this._drawFirst.prev = b, this._drawFirst = b, this._requestRedraw(a))
                }
            }), f.Browser.canvas = function() {
                return !!c.createElement("canvas").getContext
            }(), f.canvas = function(a) {
                return f.Browser.canvas ? new f.Canvas(a) : null
            }, f.Polyline.prototype._containsPoint = function(a, b) {
                var c, d, e, g, h, i, j = this._clickTolerance();
                if (!this._pxBounds.contains(a)) return !1;
                for (c = 0, g = this._parts.length; g > c; c++)
                    for (i = this._parts[c], d = 0, h = i.length, e = h - 1; h > d; e = d++)
                        if ((b || 0 !== d) && f.LineUtil.pointToSegmentDistance(a, i[e], i[d]) <= j) return !0;
                return !1
            }, f.Polygon.prototype._containsPoint = function(a) {
                var b, c, d, e, g, h, i, j, k = !1;
                if (!this._pxBounds.contains(a)) return !1;
                for (e = 0, i = this._parts.length; i > e; e++)
                    for (b = this._parts[e], g = 0, j = b.length, h = j - 1; j > g; h = g++) c = b[g], d = b[h], c.y > a.y != d.y > a.y && a.x < (d.x - c.x) * (a.y - c.y) / (d.y - c.y) + c.x && (k = !k);
                return k || f.Polyline.prototype._containsPoint.call(this, a, !0)
            }, f.CircleMarker.prototype._containsPoint = function(a) {
                return a.distanceTo(this._point) <= this._radius + this._clickTolerance()
            }, f.GeoJSON = f.FeatureGroup.extend({
                initialize: function(a, b) {
                    f.setOptions(this, b), this._layers = {}, a && this.addData(a)
                },
                addData: function(a) {
                    var b, c, d, e = f.Util.isArray(a) ? a : a.features;
                    if (e) {
                        for (b = 0, c = e.length; c > b; b++) d = e[b], (d.geometries || d.geometry || d.features || d.coordinates) && this.addData(d);
                        return this
                    }
                    var g = this.options;
                    if (g.filter && !g.filter(a)) return this;
                    var h = f.GeoJSON.geometryToLayer(a, g);
                    return h ? (h.feature = f.GeoJSON.asFeature(a), h.defaultOptions = h.options, this.resetStyle(h), g.onEachFeature && g.onEachFeature(a, h), this.addLayer(h)) : this
                },
                resetStyle: function(a) {
                    return a.options = f.Util.extend({}, a.defaultOptions), this._setLayerStyle(a, this.options.style), this
                },
                setStyle: function(a) {
                    return this.eachLayer(function(b) {
                        this._setLayerStyle(b, a)
                    }, this)
                },
                _setLayerStyle: function(a, b) {
                    "function" == typeof b && (b = b(a.feature)), a.setStyle && a.setStyle(b)
                }
            }), f.extend(f.GeoJSON, {
                geometryToLayer: function(a, b) {
                    var c, d, e, g, h = "Feature" === a.type ? a.geometry : a,
                        i = h ? h.coordinates : null,
                        j = [],
                        k = b && b.pointToLayer,
                        l = b && b.coordsToLatLng || this.coordsToLatLng;
                    if (!i && !h) return null;
                    switch (h.type) {
                        case "Point":
                            return c = l(i), k ? k(a, c) : new f.Marker(c);
                        case "MultiPoint":
                            for (e = 0, g = i.length; g > e; e++) c = l(i[e]), j.push(k ? k(a, c) : new f.Marker(c));
                            return new f.FeatureGroup(j);
                        case "LineString":
                        case "MultiLineString":
                            return d = this.coordsToLatLngs(i, "LineString" === h.type ? 0 : 1, l), new f.Polyline(d, b);
                        case "Polygon":
                        case "MultiPolygon":
                            return d = this.coordsToLatLngs(i, "Polygon" === h.type ? 1 : 2, l), new f.Polygon(d, b);
                        case "GeometryCollection":
                            for (e = 0, g = h.geometries.length; g > e; e++) {
                                var m = this.geometryToLayer({
                                    geometry: h.geometries[e],
                                    type: "Feature",
                                    properties: a.properties
                                }, b);
                                m && j.push(m)
                            }
                            return new f.FeatureGroup(j);
                        default:
                            throw new Error("Invalid GeoJSON object.")
                    }
                },
                coordsToLatLng: function(a) {
                    return new f.LatLng(a[1], a[0], a[2])
                },
                coordsToLatLngs: function(a, b, c) {
                    for (var d, e = [], f = 0, g = a.length; g > f; f++) d = b ? this.coordsToLatLngs(a[f], b - 1, c) : (c || this.coordsToLatLng)(a[f]), e.push(d);
                    return e
                },
                latLngToCoords: function(a) {
                    return a.alt !== d ? [a.lng, a.lat, a.alt] : [a.lng, a.lat]
                },
                latLngsToCoords: function(a, b, c) {
                    for (var d = [], e = 0, g = a.length; g > e; e++) d.push(b ? f.GeoJSON.latLngsToCoords(a[e], b - 1, c) : f.GeoJSON.latLngToCoords(a[e]));
                    return !b && c && d.push(d[0]), d
                },
                getFeature: function(a, b) {
                    return a.feature ? f.extend({}, a.feature, {
                        geometry: b
                    }) : f.GeoJSON.asFeature(b)
                },
                asFeature: function(a) {
                    return "Feature" === a.type || "FeatureCollection" === a.type ? a : {
                        type: "Feature",
                        properties: {},
                        geometry: a
                    }
                }
            });
            var i = {
                toGeoJSON: function() {
                    return f.GeoJSON.getFeature(this, {
                        type: "Point",
                        coordinates: f.GeoJSON.latLngToCoords(this.getLatLng())
                    })
                }
            };
            f.Marker.include(i), f.Circle.include(i), f.CircleMarker.include(i), f.Polyline.prototype.toGeoJSON = function() {
                var a = !f.Polyline._flat(this._latlngs),
                    b = f.GeoJSON.latLngsToCoords(this._latlngs, a ? 1 : 0);
                return f.GeoJSON.getFeature(this, {
                    type: (a ? "Multi" : "") + "LineString",
                    coordinates: b
                })
            }, f.Polygon.prototype.toGeoJSON = function() {
                var a = !f.Polyline._flat(this._latlngs),
                    b = a && !f.Polyline._flat(this._latlngs[0]),
                    c = f.GeoJSON.latLngsToCoords(this._latlngs, b ? 2 : a ? 1 : 0, !0);
                return a || (c = [c]), f.GeoJSON.getFeature(this, {
                    type: (b ? "Multi" : "") + "Polygon",
                    coordinates: c
                })
            }, f.LayerGroup.include({
                toMultiPoint: function() {
                    var a = [];
                    return this.eachLayer(function(b) {
                        a.push(b.toGeoJSON().geometry.coordinates)
                    }), f.GeoJSON.getFeature(this, {
                        type: "MultiPoint",
                        coordinates: a
                    })
                },
                toGeoJSON: function() {
                    var a = this.feature && this.feature.geometry && this.feature.geometry.type;
                    if ("MultiPoint" === a) return this.toMultiPoint();
                    var b = "GeometryCollection" === a,
                        c = [];
                    return this.eachLayer(function(a) {
                        if (a.toGeoJSON) {
                            var d = a.toGeoJSON();
                            c.push(b ? d.geometry : f.GeoJSON.asFeature(d))
                        }
                    }), b ? f.GeoJSON.getFeature(this, {
                        geometries: c,
                        type: "GeometryCollection"
                    }) : {
                        type: "FeatureCollection",
                        features: c
                    }
                }
            }), f.geoJSON = function(a, b) {
                return new f.GeoJSON(a, b)
            }, f.geoJson = f.geoJSON, f.Draggable = f.Evented.extend({
                options: {
                    clickTolerance: 3
                },
                statics: {
                    START: f.Browser.touch ? ["touchstart", "mousedown"] : ["mousedown"],
                    END: {
                        mousedown: "mouseup",
                        touchstart: "touchend",
                        pointerdown: "touchend",
                        MSPointerDown: "touchend"
                    },
                    MOVE: {
                        mousedown: "mousemove",
                        touchstart: "touchmove",
                        pointerdown: "touchmove",
                        MSPointerDown: "touchmove"
                    }
                },
                initialize: function(a, b, c) {
                    this._element = a, this._dragStartTarget = b || a, this._preventOutline = c
                },
                enable: function() {
                    this._enabled || (f.DomEvent.on(this._dragStartTarget, f.Draggable.START.join(" "), this._onDown, this), this._enabled = !0)
                },
                disable: function() {
                    this._enabled && (f.Draggable._dragging === this && this.finishDrag(), f.DomEvent.off(this._dragStartTarget, f.Draggable.START.join(" "), this._onDown, this), this._enabled = !1, this._moved = !1)
                },
                _onDown: function(a) {
                    if (!a._simulated && this._enabled && (this._moved = !1, !f.DomUtil.hasClass(this._element, "leaflet-zoom-anim") && !(f.Draggable._dragging || a.shiftKey || 1 !== a.which && 1 !== a.button && !a.touches || (f.Draggable._dragging = this, this._preventOutline && f.DomUtil.preventOutline(this._element), f.DomUtil.disableImageDrag(), f.DomUtil.disableTextSelection(), this._moving)))) {
                        this.fire("down");
                        var b = a.touches ? a.touches[0] : a;
                        this._startPoint = new f.Point(b.clientX, b.clientY), f.DomEvent.on(c, f.Draggable.MOVE[a.type], this._onMove, this).on(c, f.Draggable.END[a.type], this._onUp, this)
                    }
                },
                _onMove: function(b) {
                    if (!b._simulated && this._enabled) {
                        if (b.touches && b.touches.length > 1) return this._moved = !0, void 0;
                        var d = b.touches && 1 === b.touches.length ? b.touches[0] : b,
                            e = new f.Point(d.clientX, d.clientY),
                            g = e.subtract(this._startPoint);
                        (g.x || g.y) && (Math.abs(g.x) + Math.abs(g.y) < this.options.clickTolerance || (f.DomEvent.preventDefault(b), this._moved || (this.fire("dragstart"), this._moved = !0, this._startPos = f.DomUtil.getPosition(this._element).subtract(g), f.DomUtil.addClass(c.body, "leaflet-dragging"), this._lastTarget = b.target || b.srcElement, a.SVGElementInstance && this._lastTarget instanceof SVGElementInstance && (this._lastTarget = this._lastTarget.correspondingUseElement), f.DomUtil.addClass(this._lastTarget, "leaflet-drag-target")), this._newPos = this._startPos.add(g), this._moving = !0, f.Util.cancelAnimFrame(this._animRequest), this._lastEvent = b, this._animRequest = f.Util.requestAnimFrame(this._updatePosition, this, !0)))
                    }
                },
                _updatePosition: function() {
                    var a = {
                        originalEvent: this._lastEvent
                    };
                    this.fire("predrag", a), f.DomUtil.setPosition(this._element, this._newPos), this.fire("drag", a)
                },
                _onUp: function(a) {
                    !a._simulated && this._enabled && this.finishDrag()
                },
                finishDrag: function() {
                    f.DomUtil.removeClass(c.body, "leaflet-dragging"), this._lastTarget && (f.DomUtil.removeClass(this._lastTarget, "leaflet-drag-target"), this._lastTarget = null);
                    for (var a in f.Draggable.MOVE) f.DomEvent.off(c, f.Draggable.MOVE[a], this._onMove, this).off(c, f.Draggable.END[a], this._onUp, this);
                    f.DomUtil.enableImageDrag(), f.DomUtil.enableTextSelection(), this._moved && this._moving && (f.Util.cancelAnimFrame(this._animRequest), this.fire("dragend", {
                        distance: this._newPos.distanceTo(this._startPos)
                    })), this._moving = !1, f.Draggable._dragging = !1
                }
            }), f.Handler = f.Class.extend({
                initialize: function(a) {
                    this._map = a
                },
                enable: function() {
                    return this._enabled ? this : (this._enabled = !0, this.addHooks(), this)
                },
                disable: function() {
                    return this._enabled ? (this._enabled = !1, this.removeHooks(), this) : this
                },
                enabled: function() {
                    return !!this._enabled
                }
            }), f.Map.mergeOptions({
                dragging: !0,
                inertia: !f.Browser.android23,
                inertiaDeceleration: 3400,
                inertiaMaxSpeed: 1 / 0,
                easeLinearity: .2,
                worldCopyJump: !1,
                maxBoundsViscosity: 0
            }), f.Map.Drag = f.Handler.extend({
                addHooks: function() {
                    if (!this._draggable) {
                        var a = this._map;
                        this._draggable = new f.Draggable(a._mapPane, a._container), this._draggable.on({
                            down: this._onDown,
                            dragstart: this._onDragStart,
                            drag: this._onDrag,
                            dragend: this._onDragEnd
                        }, this), this._draggable.on("predrag", this._onPreDragLimit, this), a.options.worldCopyJump && (this._draggable.on("predrag", this._onPreDragWrap, this), a.on("zoomend", this._onZoomEnd, this), a.whenReady(this._onZoomEnd, this))
                    }
                    f.DomUtil.addClass(this._map._container, "leaflet-grab leaflet-touch-drag"), this._draggable.enable(), this._positions = [], this._times = []
                },
                removeHooks: function() {
                    f.DomUtil.removeClass(this._map._container, "leaflet-grab"), f.DomUtil.removeClass(this._map._container, "leaflet-touch-drag"), this._draggable.disable()
                },
                moved: function() {
                    return this._draggable && this._draggable._moved
                },
                moving: function() {
                    return this._draggable && this._draggable._moving
                },
                _onDown: function() {
                    this._map._stop()
                },
                _onDragStart: function() {
                    var a = this._map;
                    if (this._map.options.maxBounds && this._map.options.maxBoundsViscosity) {
                        var b = f.latLngBounds(this._map.options.maxBounds);
                        this._offsetLimit = f.bounds(this._map.latLngToContainerPoint(b.getNorthWest()).multiplyBy(-1), this._map.latLngToContainerPoint(b.getSouthEast()).multiplyBy(-1).add(this._map.getSize())), this._viscosity = Math.min(1, Math.max(0, this._map.options.maxBoundsViscosity))
                    } else this._offsetLimit = null;
                    a.fire("movestart").fire("dragstart"), a.options.inertia && (this._positions = [], this._times = [])
                },
                _onDrag: function(a) {
                    if (this._map.options.inertia) {
                        var b = this._lastTime = +new Date,
                            c = this._lastPos = this._draggable._absPos || this._draggable._newPos;
                        this._positions.push(c), this._times.push(b), b - this._times[0] > 50 && (this._positions.shift(), this._times.shift())
                    }
                    this._map.fire("move", a).fire("drag", a)
                },
                _onZoomEnd: function() {
                    var a = this._map.getSize().divideBy(2),
                        b = this._map.latLngToLayerPoint([0, 0]);
                    this._initialWorldOffset = b.subtract(a).x, this._worldWidth = this._map.getPixelWorldBounds().getSize().x
                },
                _viscousLimit: function(a, b) {
                    return a - (a - b) * this._viscosity
                },
                _onPreDragLimit: function() {
                    if (this._viscosity && this._offsetLimit) {
                        var a = this._draggable._newPos.subtract(this._draggable._startPos),
                            b = this._offsetLimit;
                        a.x < b.min.x && (a.x = this._viscousLimit(a.x, b.min.x)), a.y < b.min.y && (a.y = this._viscousLimit(a.y, b.min.y)), a.x > b.max.x && (a.x = this._viscousLimit(a.x, b.max.x)), a.y > b.max.y && (a.y = this._viscousLimit(a.y, b.max.y)), this._draggable._newPos = this._draggable._startPos.add(a)
                    }
                },
                _onPreDragWrap: function() {
                    var a = this._worldWidth,
                        b = Math.round(a / 2),
                        c = this._initialWorldOffset,
                        d = this._draggable._newPos.x,
                        e = (d - b + c) % a + b - c,
                        f = (d + b + c) % a - b - c,
                        g = Math.abs(e + c) < Math.abs(f + c) ? e : f;
                    this._draggable._absPos = this._draggable._newPos.clone(), this._draggable._newPos.x = g
                },
                _onDragEnd: function(a) {
                    var b = this._map,
                        c = b.options,
                        d = !c.inertia || this._times.length < 2;
                    if (b.fire("dragend", a), d) b.fire("moveend");
                    else {
                        var e = this._lastPos.subtract(this._positions[0]),
                            g = (this._lastTime - this._times[0]) / 1e3,
                            h = c.easeLinearity,
                            i = e.multiplyBy(h / g),
                            j = i.distanceTo([0, 0]),
                            k = Math.min(c.inertiaMaxSpeed, j),
                            l = i.multiplyBy(k / j),
                            m = k / (c.inertiaDeceleration * h),
                            n = l.multiplyBy(-m / 2).round();
                        n.x || n.y ? (n = b._limitOffset(n, b.options.maxBounds), f.Util.requestAnimFrame(function() {
                            b.panBy(n, {
                                duration: m,
                                easeLinearity: h,
                                noMoveStart: !0,
                                animate: !0
                            })
                        })) : b.fire("moveend")
                    }
                }
            }), f.Map.addInitHook("addHandler", "dragging", f.Map.Drag), f.Map.mergeOptions({
                doubleClickZoom: !0
            }), f.Map.DoubleClickZoom = f.Handler.extend({
                addHooks: function() {
                    this._map.on("dblclick", this._onDoubleClick, this)
                },
                removeHooks: function() {
                    this._map.off("dblclick", this._onDoubleClick, this)
                },
                _onDoubleClick: function(a) {
                    var b = this._map,
                        c = b.getZoom(),
                        d = b.options.zoomDelta,
                        e = a.originalEvent.shiftKey ? c - d : c + d;
                    "center" === b.options.doubleClickZoom ? b.setZoom(e) : b.setZoomAround(a.containerPoint, e)
                }
            }), f.Map.addInitHook("addHandler", "doubleClickZoom", f.Map.DoubleClickZoom), f.Map.mergeOptions({
                scrollWheelZoom: !0,
                wheelDebounceTime: 40,
                wheelPxPerZoomLevel: 60
            }), f.Map.ScrollWheelZoom = f.Handler.extend({
                addHooks: function() {
                    f.DomEvent.on(this._map._container, "mousewheel", this._onWheelScroll, this), this._delta = 0
                },
                removeHooks: function() {
                    f.DomEvent.off(this._map._container, "mousewheel", this._onWheelScroll, this)
                },
                _onWheelScroll: function(a) {
                    var b = f.DomEvent.getWheelDelta(a),
                        c = this._map.options.wheelDebounceTime;
                    this._delta += b, this._lastMousePos = this._map.mouseEventToContainerPoint(a), this._startTime || (this._startTime = +new Date);
                    var d = Math.max(c - (+new Date - this._startTime), 0);
                    clearTimeout(this._timer), this._timer = setTimeout(f.bind(this._performZoom, this), d), f.DomEvent.stop(a)
                },
                _performZoom: function() {
                    var a = this._map,
                        b = a.getZoom(),
                        c = this._map.options.zoomSnap || 0;
                    a._stop();
                    var d = this._delta / (4 * this._map.options.wheelPxPerZoomLevel),
                        e = 4 * Math.log(2 / (1 + Math.exp(-Math.abs(d)))) / Math.LN2,
                        f = c ? Math.ceil(e / c) * c : e,
                        g = a._limitZoom(b + (this._delta > 0 ? f : -f)) - b;
                    this._delta = 0, this._startTime = null, g && ("center" === a.options.scrollWheelZoom ? a.setZoom(b + g) : a.setZoomAround(this._lastMousePos, b + g))
                }
            }), f.Map.addInitHook("addHandler", "scrollWheelZoom", f.Map.ScrollWheelZoom), f.extend(f.DomEvent, {
                _touchstart: f.Browser.msPointer ? "MSPointerDown" : f.Browser.pointer ? "pointerdown" : "touchstart",
                _touchend: f.Browser.msPointer ? "MSPointerUp" : f.Browser.pointer ? "pointerup" : "touchend",
                addDoubleTapListener: function(a, b, c) {
                    function d(a) {
                        var b;
                        if (b = f.Browser.pointer ? f.DomEvent._pointersCount : a.touches.length, !(b > 1)) {
                            var c = Date.now(),
                                d = c - (g || c);
                            h = a.touches ? a.touches[0] : a, i = d > 0 && j >= d, g = c
                        }
                    }

                    function e() {
                        if (i && !h.cancelBubble) {
                            if (f.Browser.pointer) {
                                var a, c, d = {};
                                for (c in h) a = h[c], d[c] = a && a.bind ? a.bind(h) : a;
                                h = d
                            }
                            h.type = "dblclick", b(h), g = null
                        }
                    }
                    var g, h, i = !1,
                        j = 250,
                        k = "_leaflet_",
                        l = this._touchstart,
                        m = this._touchend;
                    return a[k + l + c] = d, a[k + m + c] = e, a[k + "dblclick" + c] = b, a.addEventListener(l, d, !1), a.addEventListener(m, e, !1), f.Browser.edge || a.addEventListener("dblclick", b, !1), this
                },
                removeDoubleTapListener: function(a, b) {
                    var c = "_leaflet_",
                        d = a[c + this._touchstart + b],
                        e = a[c + this._touchend + b],
                        g = a[c + "dblclick" + b];
                    return a.removeEventListener(this._touchstart, d, !1), a.removeEventListener(this._touchend, e, !1), f.Browser.edge || a.removeEventListener("dblclick", g, !1), this
                }
            }), f.extend(f.DomEvent, {
                POINTER_DOWN: f.Browser.msPointer ? "MSPointerDown" : "pointerdown",
                POINTER_MOVE: f.Browser.msPointer ? "MSPointerMove" : "pointermove",
                POINTER_UP: f.Browser.msPointer ? "MSPointerUp" : "pointerup",
                POINTER_CANCEL: f.Browser.msPointer ? "MSPointerCancel" : "pointercancel",
                TAG_WHITE_LIST: ["INPUT", "SELECT", "OPTION"],
                _pointers: {},
                _pointersCount: 0,
                addPointerListener: function(a, b, c, d) {
                    return "touchstart" === b ? this._addPointerStart(a, c, d) : "touchmove" === b ? this._addPointerMove(a, c, d) : "touchend" === b && this._addPointerEnd(a, c, d), this
                },
                removePointerListener: function(a, b, c) {
                    var d = a["_leaflet_" + b + c];
                    return "touchstart" === b ? a.removeEventListener(this.POINTER_DOWN, d, !1) : "touchmove" === b ? a.removeEventListener(this.POINTER_MOVE, d, !1) : "touchend" === b && (a.removeEventListener(this.POINTER_UP, d, !1), a.removeEventListener(this.POINTER_CANCEL, d, !1)), this
                },
                _addPointerStart: function(a, b, d) {
                    var e = f.bind(function(a) {
                        if ("mouse" !== a.pointerType && a.pointerType !== a.MSPOINTER_TYPE_MOUSE) {
                            if (!(this.TAG_WHITE_LIST.indexOf(a.target.tagName) < 0)) return;
                            f.DomEvent.preventDefault(a)
                        }
                        this._handlePointer(a, b)
                    }, this);
                    if (a["_leaflet_touchstart" + d] = e, a.addEventListener(this.POINTER_DOWN, e, !1), !this._pointerDocListener) {
                        var g = f.bind(this._globalPointerUp, this);
                        c.documentElement.addEventListener(this.POINTER_DOWN, f.bind(this._globalPointerDown, this), !0), c.documentElement.addEventListener(this.POINTER_MOVE, f.bind(this._globalPointerMove, this), !0), c.documentElement.addEventListener(this.POINTER_UP, g, !0), c.documentElement.addEventListener(this.POINTER_CANCEL, g, !0), this._pointerDocListener = !0
                    }
                },
                _globalPointerDown: function(a) {
                    this._pointers[a.pointerId] = a, this._pointersCount++
                },
                _globalPointerMove: function(a) {
                    this._pointers[a.pointerId] && (this._pointers[a.pointerId] = a)
                },
                _globalPointerUp: function(a) {
                    delete this._pointers[a.pointerId], this._pointersCount--
                },
                _handlePointer: function(a, b) {
                    a.touches = [];
                    for (var c in this._pointers) a.touches.push(this._pointers[c]);
                    a.changedTouches = [a], b(a)
                },
                _addPointerMove: function(a, b, c) {
                    var d = f.bind(function(a) {
                        (a.pointerType !== a.MSPOINTER_TYPE_MOUSE && "mouse" !== a.pointerType || 0 !== a.buttons) && this._handlePointer(a, b)
                    }, this);
                    a["_leaflet_touchmove" + c] = d, a.addEventListener(this.POINTER_MOVE, d, !1)
                },
                _addPointerEnd: function(a, b, c) {
                    var d = f.bind(function(a) {
                        this._handlePointer(a, b)
                    }, this);
                    a["_leaflet_touchend" + c] = d, a.addEventListener(this.POINTER_UP, d, !1), a.addEventListener(this.POINTER_CANCEL, d, !1)
                }
            }), f.Map.mergeOptions({
                touchZoom: f.Browser.touch && !f.Browser.android23,
                bounceAtZoomLimits: !0
            }), f.Map.TouchZoom = f.Handler.extend({
                addHooks: function() {
                    f.DomUtil.addClass(this._map._container, "leaflet-touch-zoom"), f.DomEvent.on(this._map._container, "touchstart", this._onTouchStart, this)
                },
                removeHooks: function() {
                    f.DomUtil.removeClass(this._map._container, "leaflet-touch-zoom"), f.DomEvent.off(this._map._container, "touchstart", this._onTouchStart, this)
                },
                _onTouchStart: function(a) {
                    var b = this._map;
                    if (a.touches && 2 === a.touches.length && !b._animatingZoom && !this._zooming) {
                        var d = b.mouseEventToContainerPoint(a.touches[0]),
                            e = b.mouseEventToContainerPoint(a.touches[1]);
                        this._centerPoint = b.getSize()._divideBy(2), this._startLatLng = b.containerPointToLatLng(this._centerPoint), "center" !== b.options.touchZoom && (this._pinchStartLatLng = b.containerPointToLatLng(d.add(e)._divideBy(2))), this._startDist = d.distanceTo(e), this._startZoom = b.getZoom(), this._moved = !1, this._zooming = !0, b._stop(), f.DomEvent.on(c, "touchmove", this._onTouchMove, this).on(c, "touchend", this._onTouchEnd, this), f.DomEvent.preventDefault(a)
                    }
                },
                _onTouchMove: function(a) {
                    if (a.touches && 2 === a.touches.length && this._zooming) {
                        var b = this._map,
                            c = b.mouseEventToContainerPoint(a.touches[0]),
                            d = b.mouseEventToContainerPoint(a.touches[1]),
                            e = c.distanceTo(d) / this._startDist;
                        if (this._zoom = b.getScaleZoom(e, this._startZoom), !b.options.bounceAtZoomLimits && (this._zoom < b.getMinZoom() && 1 > e || this._zoom > b.getMaxZoom() && e > 1) && (this._zoom = b._limitZoom(this._zoom)), "center" === b.options.touchZoom) {
                            if (this._center = this._startLatLng, 1 === e) return
                        } else {
                            var g = c._add(d)._divideBy(2)._subtract(this._centerPoint);
                            if (1 === e && 0 === g.x && 0 === g.y) return;
                            this._center = b.unproject(b.project(this._pinchStartLatLng, this._zoom).subtract(g), this._zoom)
                        }
                        this._moved || (b._moveStart(!0), this._moved = !0), f.Util.cancelAnimFrame(this._animRequest);
                        var h = f.bind(b._move, b, this._center, this._zoom, {
                            pinch: !0,
                            round: !1
                        });
                        this._animRequest = f.Util.requestAnimFrame(h, this, !0), f.DomEvent.preventDefault(a)
                    }
                },
                _onTouchEnd: function() {
                    return this._moved && this._zooming ? (this._zooming = !1, f.Util.cancelAnimFrame(this._animRequest), f.DomEvent.off(c, "touchmove", this._onTouchMove).off(c, "touchend", this._onTouchEnd), this._map.options.zoomAnimation ? this._map._animateZoom(this._center, this._map._limitZoom(this._zoom), !0, this._map.options.zoomSnap) : this._map._resetView(this._center, this._map._limitZoom(this._zoom)), void 0) : (this._zooming = !1, void 0)
                }
            }), f.Map.addInitHook("addHandler", "touchZoom", f.Map.TouchZoom), f.Map.mergeOptions({
                tap: !0,
                tapTolerance: 15
            }), f.Map.Tap = f.Handler.extend({
                addHooks: function() {
                    f.DomEvent.on(this._map._container, "touchstart", this._onDown, this)
                },
                removeHooks: function() {
                    f.DomEvent.off(this._map._container, "touchstart", this._onDown, this)
                },
                _onDown: function(a) {
                    if (a.touches) {
                        if (f.DomEvent.preventDefault(a), this._fireClick = !0, a.touches.length > 1) return this._fireClick = !1, clearTimeout(this._holdTimeout), void 0;
                        var b = a.touches[0],
                            d = b.target;
                        this._startPos = this._newPos = new f.Point(b.clientX, b.clientY), d.tagName && "a" === d.tagName.toLowerCase() && f.DomUtil.addClass(d, "leaflet-active"), this._holdTimeout = setTimeout(f.bind(function() {
                            this._isTapValid() && (this._fireClick = !1, this._onUp(), this._simulateEvent("contextmenu", b))
                        }, this), 1e3), this._simulateEvent("mousedown", b), f.DomEvent.on(c, {
                            touchmove: this._onMove,
                            touchend: this._onUp
                        }, this)
                    }
                },
                _onUp: function(a) {
                    if (clearTimeout(this._holdTimeout), f.DomEvent.off(c, {
                            touchmove: this._onMove,
                            touchend: this._onUp
                        }, this), this._fireClick && a && a.changedTouches) {
                        var b = a.changedTouches[0],
                            d = b.target;
                        d && d.tagName && "a" === d.tagName.toLowerCase() && f.DomUtil.removeClass(d, "leaflet-active"), this._simulateEvent("mouseup", b), this._isTapValid() && this._simulateEvent("click", b)
                    }
                },
                _isTapValid: function() {
                    return this._newPos.distanceTo(this._startPos) <= this._map.options.tapTolerance
                },
                _onMove: function(a) {
                    var b = a.touches[0];
                    this._newPos = new f.Point(b.clientX, b.clientY), this._simulateEvent("mousemove", b)
                },
                _simulateEvent: function(b, d) {
                    var e = c.createEvent("MouseEvents");
                    e._simulated = !0, d.target._simulatedClick = !0, e.initMouseEvent(b, !0, !0, a, 1, d.screenX, d.screenY, d.clientX, d.clientY, !1, !1, !1, !1, 0, null), d.target.dispatchEvent(e)
                }
            }), f.Browser.touch && !f.Browser.pointer && f.Map.addInitHook("addHandler", "tap", f.Map.Tap), f.Map.mergeOptions({
                boxZoom: !0
            }), f.Map.BoxZoom = f.Handler.extend({
                initialize: function(a) {
                    this._map = a, this._container = a._container, this._pane = a._panes.overlayPane
                },
                addHooks: function() {
                    f.DomEvent.on(this._container, "mousedown", this._onMouseDown, this)
                },
                removeHooks: function() {
                    f.DomEvent.off(this._container, "mousedown", this._onMouseDown, this)
                },
                moved: function() {
                    return this._moved
                },
                _resetState: function() {
                    this._moved = !1
                },
                _onMouseDown: function(a) {
                    return !a.shiftKey || 1 !== a.which && 1 !== a.button ? !1 : (this._resetState(), f.DomUtil.disableTextSelection(), f.DomUtil.disableImageDrag(), this._startPoint = this._map.mouseEventToContainerPoint(a), f.DomEvent.on(c, {
                        contextmenu: f.DomEvent.stop,
                        mousemove: this._onMouseMove,
                        mouseup: this._onMouseUp,
                        keydown: this._onKeyDown
                    }, this), void 0)
                },
                _onMouseMove: function(a) {
                    this._moved || (this._moved = !0, this._box = f.DomUtil.create("div", "leaflet-zoom-box", this._container), f.DomUtil.addClass(this._container, "leaflet-crosshair"), this._map.fire("boxzoomstart")), this._point = this._map.mouseEventToContainerPoint(a);
                    var b = new f.Bounds(this._point, this._startPoint),
                        c = b.getSize();
                    f.DomUtil.setPosition(this._box, b.min), this._box.style.width = c.x + "px", this._box.style.height = c.y + "px"
                },
                _finish: function() {
                    this._moved && (f.DomUtil.remove(this._box), f.DomUtil.removeClass(this._container, "leaflet-crosshair")), f.DomUtil.enableTextSelection(), f.DomUtil.enableImageDrag(), f.DomEvent.off(c, {
                        contextmenu: f.DomEvent.stop,
                        mousemove: this._onMouseMove,
                        mouseup: this._onMouseUp,
                        keydown: this._onKeyDown
                    }, this)
                },
                _onMouseUp: function(a) {
                    if ((1 === a.which || 1 === a.button) && (this._finish(), this._moved)) {
                        setTimeout(f.bind(this._resetState, this), 0);
                        var b = new f.LatLngBounds(this._map.containerPointToLatLng(this._startPoint), this._map.containerPointToLatLng(this._point));
                        this._map.fitBounds(b).fire("boxzoomend", {
                            boxZoomBounds: b
                        })
                    }
                },
                _onKeyDown: function(a) {
                    27 === a.keyCode && this._finish()
                }
            }), f.Map.addInitHook("addHandler", "boxZoom", f.Map.BoxZoom), f.Map.mergeOptions({
                keyboard: !0,
                keyboardPanDelta: 80
            }), f.Map.Keyboard = f.Handler.extend({
                keyCodes: {
                    left: [37],
                    right: [39],
                    down: [40],
                    up: [38],
                    zoomIn: [187, 107, 61, 171],
                    zoomOut: [189, 109, 54, 173]
                },
                initialize: function(a) {
                    this._map = a, this._setPanDelta(a.options.keyboardPanDelta), this._setZoomDelta(a.options.zoomDelta)
                },
                addHooks: function() {
                    var a = this._map._container;
                    a.tabIndex <= 0 && (a.tabIndex = "0"), f.DomEvent.on(a, {
                        focus: this._onFocus,
                        blur: this._onBlur,
                        mousedown: this._onMouseDown
                    }, this), this._map.on({
                        focus: this._addHooks,
                        blur: this._removeHooks
                    }, this)
                },
                removeHooks: function() {
                    this._removeHooks(), f.DomEvent.off(this._map._container, {
                        focus: this._onFocus,
                        blur: this._onBlur,
                        mousedown: this._onMouseDown
                    }, this), this._map.off({
                        focus: this._addHooks,
                        blur: this._removeHooks
                    }, this)
                },
                _onMouseDown: function() {
                    if (!this._focused) {
                        var b = c.body,
                            d = c.documentElement,
                            e = b.scrollTop || d.scrollTop,
                            f = b.scrollLeft || d.scrollLeft;
                        this._map._container.focus(), a.scrollTo(f, e)
                    }
                },
                _onFocus: function() {
                    this._focused = !0, this._map.fire("focus")
                },
                _onBlur: function() {
                    this._focused = !1, this._map.fire("blur")
                },
                _setPanDelta: function(a) {
                    var b, c, d = this._panKeys = {},
                        e = this.keyCodes;
                    for (b = 0, c = e.left.length; c > b; b++) d[e.left[b]] = [-1 * a, 0];
                    for (b = 0, c = e.right.length; c > b; b++) d[e.right[b]] = [a, 0];
                    for (b = 0, c = e.down.length; c > b; b++) d[e.down[b]] = [0, a];
                    for (b = 0, c = e.up.length; c > b; b++) d[e.up[b]] = [0, -1 * a]
                },
                _setZoomDelta: function(a) {
                    var b, c, d = this._zoomKeys = {},
                        e = this.keyCodes;
                    for (b = 0, c = e.zoomIn.length; c > b; b++) d[e.zoomIn[b]] = a;
                    for (b = 0, c = e.zoomOut.length; c > b; b++) d[e.zoomOut[b]] = -a
                },
                _addHooks: function() {
                    f.DomEvent.on(c, "keydown", this._onKeyDown, this)
                },
                _removeHooks: function() {
                    f.DomEvent.off(c, "keydown", this._onKeyDown, this)
                },
                _onKeyDown: function(a) {
                    if (!(a.altKey || a.ctrlKey || a.metaKey)) {
                        var b, c = a.keyCode,
                            d = this._map;
                        if (c in this._panKeys) {
                            if (d._panAnim && d._panAnim._inProgress) return;
                            b = this._panKeys[c], a.shiftKey && (b = f.point(b).multiplyBy(3)), d.panBy(b), d.options.maxBounds && d.panInsideBounds(d.options.maxBounds)
                        } else if (c in this._zoomKeys) d.setZoom(d.getZoom() + (a.shiftKey ? 3 : 1) * this._zoomKeys[c]);
                        else {
                            if (27 !== c) return;
                            d.closePopup()
                        }
                        f.DomEvent.stop(a)
                    }
                }
            }), f.Map.addInitHook("addHandler", "keyboard", f.Map.Keyboard), f.Handler.MarkerDrag = f.Handler.extend({
                initialize: function(a) {
                    this._marker = a
                },
                addHooks: function() {
                    var a = this._marker._icon;
                    this._draggable || (this._draggable = new f.Draggable(a, a, !0)), this._draggable.on({
                        dragstart: this._onDragStart,
                        drag: this._onDrag,
                        dragend: this._onDragEnd
                    }, this).enable(), f.DomUtil.addClass(a, "leaflet-marker-draggable")
                },
                removeHooks: function() {
                    this._draggable.off({
                        dragstart: this._onDragStart,
                        drag: this._onDrag,
                        dragend: this._onDragEnd
                    }, this).disable(), this._marker._icon && f.DomUtil.removeClass(this._marker._icon, "leaflet-marker-draggable")
                },
                moved: function() {
                    return this._draggable && this._draggable._moved
                },
                _onDragStart: function() {
                    this._oldLatLng = this._marker.getLatLng(), this._marker.closePopup().fire("movestart").fire("dragstart")
                },
                _onDrag: function(a) {
                    var b = this._marker,
                        c = b._shadow,
                        d = f.DomUtil.getPosition(b._icon),
                        e = b._map.layerPointToLatLng(d);
                    c && f.DomUtil.setPosition(c, d), b._latlng = e, a.latlng = e, a.oldLatLng = this._oldLatLng, b.fire("move", a).fire("drag", a)
                },
                _onDragEnd: function(a) {
                    delete this._oldLatLng, this._marker.fire("moveend").fire("dragend", a)
                }
            }), f.Control = f.Class.extend({
                options: {
                    position: "topright"
                },
                initialize: function(a) {
                    f.setOptions(this, a)
                },
                getPosition: function() {
                    return this.options.position
                },
                setPosition: function(a) {
                    var b = this._map;
                    return b && b.removeControl(this), this.options.position = a, b && b.addControl(this), this
                },
                getContainer: function() {
                    return this._container
                },
                addTo: function(a) {
                    this.remove(), this._map = a;
                    var b = this._container = this.onAdd(a),
                        c = this.getPosition(),
                        d = a._controlCorners[c];
                    return f.DomUtil.addClass(b, "leaflet-control"), -1 !== c.indexOf("bottom") ? d.insertBefore(b, d.firstChild) : d.appendChild(b), this
                },
                remove: function() {
                    return this._map ? (f.DomUtil.remove(this._container), this.onRemove && this.onRemove(this._map), this._map = null, this) : this
                },
                _refocusOnMap: function(a) {
                    this._map && a && a.screenX > 0 && a.screenY > 0 && this._map.getContainer().focus()
                }
            }), f.control = function(a) {
                return new f.Control(a)
            }, f.Map.include({
                addControl: function(a) {
                    return a.addTo(this), this
                },
                removeControl: function(a) {
                    return a.remove(), this
                },
                _initControlPos: function() {
                    function a(a, e) {
                        var g = c + a + " " + c + e;
                        b[a + e] = f.DomUtil.create("div", g, d)
                    }
                    var b = this._controlCorners = {},
                        c = "leaflet-",
                        d = this._controlContainer = f.DomUtil.create("div", c + "control-container", this._container);
                    a("top", "left"), a("top", "right"), a("bottom", "left"), a("bottom", "right")
                },
                _clearControlPos: function() {
                    f.DomUtil.remove(this._controlContainer)
                }
            }), f.Control.Zoom = f.Control.extend({
                options: {
                    position: "topleft",
                    zoomInText: "+",
                    zoomInTitle: "Zoom in",
                    zoomOutText: "-",
                    zoomOutTitle: "Zoom out"
                },
                onAdd: function(a) {
                    var b = "leaflet-control-zoom",
                        c = f.DomUtil.create("div", b + " leaflet-bar"),
                        d = this.options;
                    return this._zoomInButton = this._createButton(d.zoomInText, d.zoomInTitle, b + "-in", c, this._zoomIn), this._zoomOutButton = this._createButton(d.zoomOutText, d.zoomOutTitle, b + "-out", c, this._zoomOut), this._updateDisabled(), a.on("zoomend zoomlevelschange", this._updateDisabled, this), c
                },
                onRemove: function(a) {
                    a.off("zoomend zoomlevelschange", this._updateDisabled, this)
                },
                disable: function() {
                    return this._disabled = !0, this._updateDisabled(), this
                },
                enable: function() {
                    return this._disabled = !1, this._updateDisabled(), this
                },
                _zoomIn: function(a) {
                    !this._disabled && this._map._zoom < this._map.getMaxZoom() && this._map.zoomIn(this._map.options.zoomDelta * (a.shiftKey ? 3 : 1))
                },
                _zoomOut: function(a) {
                    !this._disabled && this._map._zoom > this._map.getMinZoom() && this._map.zoomOut(this._map.options.zoomDelta * (a.shiftKey ? 3 : 1))
                },
                _createButton: function(a, b, c, d, e) {
                    var g = f.DomUtil.create("a", c, d);
                    return g.innerHTML = a, g.href = "#", g.title = b, g.setAttribute("role", "button"), g.setAttribute("aria-label", b), f.DomEvent.on(g, "mousedown dblclick", f.DomEvent.stopPropagation).on(g, "click", f.DomEvent.stop).on(g, "click", e, this).on(g, "click", this._refocusOnMap, this), g
                },
                _updateDisabled: function() {
                    var a = this._map,
                        b = "leaflet-disabled";
                    f.DomUtil.removeClass(this._zoomInButton, b), f.DomUtil.removeClass(this._zoomOutButton, b), (this._disabled || a._zoom === a.getMinZoom()) && f.DomUtil.addClass(this._zoomOutButton, b), (this._disabled || a._zoom === a.getMaxZoom()) && f.DomUtil.addClass(this._zoomInButton, b)
                }
            }), f.Map.mergeOptions({
                zoomControl: !0
            }), f.Map.addInitHook(function() {
                this.options.zoomControl && (this.zoomControl = new f.Control.Zoom, this.addControl(this.zoomControl))
            }), f.control.zoom = function(a) {
                return new f.Control.Zoom(a)
            }, f.Control.Attribution = f.Control.extend({
                options: {
                    position: "bottomright",
                    prefix: '<a href="http://leafletjs.com" title="A JS library for interactive maps">Leaflet</a>'
                },
                initialize: function(a) {
                    f.setOptions(this, a), this._attributions = {}
                },
                onAdd: function(a) {
                    a.attributionControl = this, this._container = f.DomUtil.create("div", "leaflet-control-attribution"), f.DomEvent && f.DomEvent.disableClickPropagation(this._container);
                    for (var b in a._layers) a._layers[b].getAttribution && this.addAttribution(a._layers[b].getAttribution());
                    return this._update(), this._container
                },
                setPrefix: function(a) {
                    return this.options.prefix = a, this._update(), this
                },
                addAttribution: function(a) {
                    return a ? (this._attributions[a] || (this._attributions[a] = 0), this._attributions[a]++, this._update(), this) : this
                },
                removeAttribution: function(a) {
                    return a ? (this._attributions[a] && (this._attributions[a]--, this._update()), this) : this
                },
                _update: function() {
                    if (this._map) {
                        var a = [];
                        for (var b in this._attributions) this._attributions[b] && a.push(b);
                        var c = [];
                        this.options.prefix && c.push(this.options.prefix), a.length && c.push(a.join(", ")), this._container.innerHTML = c.join(" | ")
                    }
                }
            }), f.Map.mergeOptions({
                attributionControl: !0
            }), f.Map.addInitHook(function() {
                this.options.attributionControl && (new f.Control.Attribution).addTo(this)
            }), f.control.attribution = function(a) {
                return new f.Control.Attribution(a)
            }, f.Control.Scale = f.Control.extend({
                options: {
                    position: "bottomleft",
                    maxWidth: 100,
                    metric: !0,
                    imperial: !0
                },
                onAdd: function(a) {
                    var b = "leaflet-control-scale",
                        c = f.DomUtil.create("div", b),
                        d = this.options;
                    return this._addScales(d, b + "-line", c), a.on(d.updateWhenIdle ? "moveend" : "move", this._update, this), a.whenReady(this._update, this), c
                },
                onRemove: function(a) {
                    a.off(this.options.updateWhenIdle ? "moveend" : "move", this._update, this)
                },
                _addScales: function(a, b, c) {
                    a.metric && (this._mScale = f.DomUtil.create("div", b, c)), a.imperial && (this._iScale = f.DomUtil.create("div", b, c))
                },
                _update: function() {
                    var a = this._map,
                        b = a.getSize().y / 2,
                        c = a.distance(a.containerPointToLatLng([0, b]), a.containerPointToLatLng([this.options.maxWidth, b]));
                    this._updateScales(c)
                },
                _updateScales: function(a) {
                    this.options.metric && a && this._updateMetric(a), this.options.imperial && a && this._updateImperial(a)
                },
                _updateMetric: function(a) {
                    var b = this._getRoundNum(a),
                        c = 1e3 > b ? b + " m" : b / 1e3 + " km";
                    this._updateScale(this._mScale, c, b / a)
                },
                _updateImperial: function(a) {
                    var b, c, d, e = 3.2808399 * a;
                    e > 5280 ? (b = e / 5280, c = this._getRoundNum(b), this._updateScale(this._iScale, c + " mi", c / b)) : (d = this._getRoundNum(e), this._updateScale(this._iScale, d + " ft", d / e))
                },
                _updateScale: function(a, b, c) {
                    a.style.width = Math.round(this.options.maxWidth * c) + "px", a.innerHTML = b
                },
                _getRoundNum: function(a) {
                    var b = Math.pow(10, (Math.floor(a) + "").length - 1),
                        c = a / b;
                    return c = c >= 10 ? 10 : c >= 5 ? 5 : c >= 3 ? 3 : c >= 2 ? 2 : 1, b * c
                }
            }), f.control.scale = function(a) {
                return new f.Control.Scale(a)
            }, f.Control.Layers = f.Control.extend({
                options: {
                    collapsed: !0,
                    position: "topright",
                    autoZIndex: !0,
                    hideSingleBase: !1,
                    sortLayers: !1,
                    sortFunction: function(a, b, c, d) {
                        return d > c ? -1 : c > d ? 1 : 0
                    }
                },
                initialize: function(a, b, c) {
                    f.setOptions(this, c), this._layers = [], this._lastZIndex = 0, this._handlingClick = !1;
                    for (var d in a) this._addLayer(a[d], d);
                    for (d in b) this._addLayer(b[d], d, !0)
                },
                onAdd: function(a) {
                    return this._initLayout(), this._update(), this._map = a, a.on("zoomend", this._checkDisabledLayers, this), this._container
                },
                onRemove: function() {
                    this._map.off("zoomend", this._checkDisabledLayers, this);
                    for (var a = 0; a < this._layers.length; a++) this._layers[a].layer.off("add remove", this._onLayerChange, this)
                },
                addBaseLayer: function(a, b) {
                    return this._addLayer(a, b), this._map ? this._update() : this
                },
                addOverlay: function(a, b) {
                    return this._addLayer(a, b, !0), this._map ? this._update() : this
                },
                removeLayer: function(a) {
                    a.off("add remove", this._onLayerChange, this);
                    var b = this._getLayer(f.stamp(a));
                    return b && this._layers.splice(this._layers.indexOf(b), 1), this._map ? this._update() : this
                },
                expand: function() {
                    f.DomUtil.addClass(this._container, "leaflet-control-layers-expanded"), this._form.style.height = null;
                    var a = this._map.getSize().y - (this._container.offsetTop + 50);
                    return a < this._form.clientHeight ? (f.DomUtil.addClass(this._form, "leaflet-control-layers-scrollbar"), this._form.style.height = a + "px") : f.DomUtil.removeClass(this._form, "leaflet-control-layers-scrollbar"), this._checkDisabledLayers(), this
                },
                collapse: function() {
                    return f.DomUtil.removeClass(this._container, "leaflet-control-layers-expanded"), this
                },
                _initLayout: function() {
                    var a = "leaflet-control-layers",
                        b = this._container = f.DomUtil.create("div", a);
                    b.setAttribute("aria-haspopup", !0), f.DomEvent.disableClickPropagation(b), f.Browser.touch || f.DomEvent.disableScrollPropagation(b);
                    var c = this._form = f.DomUtil.create("form", a + "-list");
                    f.Browser.android || f.DomEvent.on(b, {
                        mouseenter: this.expand,
                        mouseleave: this.collapse
                    }, this);
                    var d = this._layersLink = f.DomUtil.create("a", a + "-toggle", b);
                    d.href = "#", d.title = "Layers", f.Browser.touch ? f.DomEvent.on(d, "click", f.DomEvent.stop).on(d, "click", this.expand, this) : f.DomEvent.on(d, "focus", this.expand, this), f.DomEvent.on(c, "click", function() {
                        setTimeout(f.bind(this._onInputClick, this), 0)
                    }, this), this._map.on("click", this.collapse, this), this.options.collapsed || this.expand(), this._baseLayersList = f.DomUtil.create("div", a + "-base", c), this._separator = f.DomUtil.create("div", a + "-separator", c), this._overlaysList = f.DomUtil.create("div", a + "-overlays", c), b.appendChild(c)
                },
                _getLayer: function(a) {
                    for (var b = 0; b < this._layers.length; b++)
                        if (this._layers[b] && f.stamp(this._layers[b].layer) === a) return this._layers[b]
                },
                _addLayer: function(a, b, c) {
                    a.on("add remove", this._onLayerChange, this), this._layers.push({
                        layer: a,
                        name: b,
                        overlay: c
                    }), this.options.sortLayers && this._layers.sort(f.bind(function(a, b) {
                        return this.options.sortFunction(a.layer, b.layer, a.name, b.name)
                    }, this)), this.options.autoZIndex && a.setZIndex && (this._lastZIndex++, a.setZIndex(this._lastZIndex))
                },
                _update: function() {
                    if (!this._container) return this;
                    f.DomUtil.empty(this._baseLayersList), f.DomUtil.empty(this._overlaysList);
                    var a, b, c, d, e = 0;
                    for (c = 0; c < this._layers.length; c++) d = this._layers[c], this._addItem(d), b = b || d.overlay, a = a || !d.overlay, e += d.overlay ? 0 : 1;
                    return this.options.hideSingleBase && (a = a && e > 1, this._baseLayersList.style.display = a ? "" : "none"), this._separator.style.display = b && a ? "" : "none", this
                },
                _onLayerChange: function(a) {
                    this._handlingClick || this._update();
                    var b = this._getLayer(f.stamp(a.target)),
                        c = b.overlay ? "add" === a.type ? "overlayadd" : "overlayremove" : "add" === a.type ? "baselayerchange" : null;
                    c && this._map.fire(c, b)
                },
                _createRadioElement: function(a, b) {
                    var d = '<input type="radio" class="leaflet-control-layers-selector" name="' + a + '"' + (b ? ' checked="checked"' : "") + "/>",
                        e = c.createElement("div");
                    return e.innerHTML = d, e.firstChild
                },
                _addItem: function(a) {
                    var b, d = c.createElement("label"),
                        e = this._map.hasLayer(a.layer);
                    a.overlay ? (b = c.createElement("input"), b.type = "checkbox", b.className = "leaflet-control-layers-selector", b.defaultChecked = e) : b = this._createRadioElement("leaflet-base-layers", e), b.layerId = f.stamp(a.layer), f.DomEvent.on(b, "click", this._onInputClick, this);
                    var g = c.createElement("span");
                    g.innerHTML = " " + a.name;
                    var h = c.createElement("div");
                    d.appendChild(h), h.appendChild(b), h.appendChild(g);
                    var i = a.overlay ? this._overlaysList : this._baseLayersList;
                    return i.appendChild(d), this._checkDisabledLayers(), d
                },
                _onInputClick: function() {
                    var a, b, c, d = this._form.getElementsByTagName("input"),
                        e = [],
                        f = [];
                    this._handlingClick = !0;
                    for (var g = d.length - 1; g >= 0; g--) a = d[g], b = this._getLayer(a.layerId).layer, c = this._map.hasLayer(b), a.checked && !c ? e.push(b) : !a.checked && c && f.push(b);
                    for (g = 0; g < f.length; g++) this._map.removeLayer(f[g]);
                    for (g = 0; g < e.length; g++) this._map.addLayer(e[g]);
                    this._handlingClick = !1, this._refocusOnMap()
                },
                _checkDisabledLayers: function() {
                    for (var a, b, c = this._form.getElementsByTagName("input"), e = this._map.getZoom(), f = c.length - 1; f >= 0; f--) a = c[f], b = this._getLayer(a.layerId).layer, a.disabled = b.options.minZoom !== d && e < b.options.minZoom || b.options.maxZoom !== d && e > b.options.maxZoom
                },
                _expand: function() {
                    return this.expand()
                },
                _collapse: function() {
                    return this.collapse()
                }
            }), f.control.layers = function(a, b, c) {
                return new f.Control.Layers(a, b, c)
            }
        }(window, document)
    }, {}],
    4: [function(a, b, c) {
        ! function(a, b) {
            "object" == typeof c && c && "string" != typeof c.nodeName ? b(c) : "function" == typeof define && define.amd ? define(["exports"], b) : (a.Mustache = {}, b(a.Mustache))
        }(this, function(a) {
            function b(a) {
                return "function" == typeof a
            }

            function c(a) {
                return p(a) ? "array" : typeof a
            }

            function d(a) {
                return a.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&")
            }

            function e(a, b) {
                return null != a && "object" == typeof a && b in a
            }

            function f(a, b) {
                return q.call(a, b)
            }

            function g(a) {
                return !f(r, a)
            }

            function h(a) {
                return String(a).replace(/[&<>"'`=\/]/g, function(a) {
                    return s[a]
                })
            }

            function i(b, c) {
                function e() {
                    if (r && !s)
                        for (; q.length;) delete o[q.pop()];
                    else q = [];
                    r = !1, s = !1
                }

                function f(a) {
                    if ("string" == typeof a && (a = a.split(u, 2)), !p(a) || 2 !== a.length) throw new Error("Invalid tags: " + a);
                    h = new RegExp(d(a[0]) + "\\s*"), i = new RegExp("\\s*" + d(a[1])), m = new RegExp("\\s*" + d("}" + a[1]))
                }
                if (!b) return [];
                var h, i, m, n = [],
                    o = [],
                    q = [],
                    r = !1,
                    s = !1;
                f(c || a.tags);
                for (var y, z, A, B, C, D, E = new l(b); !E.eos();) {
                    if (y = E.pos, A = E.scanUntil(h))
                        for (var F = 0, G = A.length; G > F; ++F) B = A.charAt(F), g(B) ? q.push(o.length) : s = !0, o.push(["text", B, y, y + 1]), y += 1, "\n" === B && e();
                    if (!E.scan(h)) break;
                    if (r = !0, z = E.scan(x) || "name", E.scan(t), "=" === z ? (A = E.scanUntil(v), E.scan(v), E.scanUntil(i)) : "{" === z ? (A = E.scanUntil(m), E.scan(w), E.scanUntil(i), z = "&") : A = E.scanUntil(i), !E.scan(i)) throw new Error("Unclosed tag at " + E.pos);
                    if (C = [z, A, y, E.pos], o.push(C), "#" === z || "^" === z) n.push(C);
                    else if ("/" === z) {
                        if (D = n.pop(), !D) throw new Error('Unopened section "' + A + '" at ' + y);
                        if (D[1] !== A) throw new Error('Unclosed section "' + D[1] + '" at ' + y)
                    } else "name" === z || "{" === z || "&" === z ? s = !0 : "=" === z && f(A)
                }
                if (D = n.pop()) throw new Error('Unclosed section "' + D[1] + '" at ' + E.pos);
                return k(j(o))
            }

            function j(a) {
                for (var b, c, d = [], e = 0, f = a.length; f > e; ++e) b = a[e], b && ("text" === b[0] && c && "text" === c[0] ? (c[1] += b[1], c[3] = b[3]) : (d.push(b), c = b));
                return d
            }

            function k(a) {
                for (var b, c, d = [], e = d, f = [], g = 0, h = a.length; h > g; ++g) switch (b = a[g], b[0]) {
                    case "#":
                    case "^":
                        e.push(b), f.push(b), e = b[4] = [];
                        break;
                    case "/":
                        c = f.pop(), c[5] = b[2], e = f.length > 0 ? f[f.length - 1][4] : d;
                        break;
                    default:
                        e.push(b)
                }
                return d
            }

            function l(a) {
                this.string = a, this.tail = a, this.pos = 0
            }

            function m(a, b) {
                this.view = a, this.cache = {
                    ".": this.view
                }, this.parent = b
            }

            function n() {
                this.cache = {}
            }
            var o = Object.prototype.toString,
                p = Array.isArray || function(a) {
                    return "[object Array]" === o.call(a)
                },
                q = RegExp.prototype.test,
                r = /\S/,
                s = {
                    "&": "&amp;",
                    "<": "&lt;",
                    ">": "&gt;",
                    '"': "&quot;",
                    "'": "&#39;",
                    "/": "&#x2F;",
                    "`": "&#x60;",
                    "=": "&#x3D;"
                },
                t = /\s*/,
                u = /\s+/,
                v = /\s*=/,
                w = /\s*\}/,
                x = /#|\^|\/|>|\{|&|=|!/;
            l.prototype.eos = function() {
                return "" === this.tail
            }, l.prototype.scan = function(a) {
                var b = this.tail.match(a);
                if (!b || 0 !== b.index) return "";
                var c = b[0];
                return this.tail = this.tail.substring(c.length), this.pos += c.length, c
            }, l.prototype.scanUntil = function(a) {
                var b, c = this.tail.search(a);
                switch (c) {
                    case -1:
                        b = this.tail, this.tail = "";
                        break;
                    case 0:
                        b = "";
                        break;
                    default:
                        b = this.tail.substring(0, c), this.tail = this.tail.substring(c)
                }
                return this.pos += b.length, b
            }, m.prototype.push = function(a) {
                return new m(a, this)
            }, m.prototype.lookup = function(a) {
                var c, d = this.cache;
                if (d.hasOwnProperty(a)) c = d[a];
                else {
                    for (var f, g, h = this, i = !1; h;) {
                        if (a.indexOf(".") > 0)
                            for (c = h.view, f = a.split("."), g = 0; null != c && g < f.length;) g === f.length - 1 && (i = e(c, f[g])), c = c[f[g++]];
                        else c = h.view[a], i = e(h.view, a);
                        if (i) break;
                        h = h.parent
                    }
                    d[a] = c
                }
                return b(c) && (c = c.call(this.view)), c
            }, n.prototype.clearCache = function() {
                this.cache = {}
            }, n.prototype.parse = function(a, b) {
                var c = this.cache,
                    d = c[a];
                return null == d && (d = c[a] = i(a, b)), d
            }, n.prototype.render = function(a, b, c) {
                var d = this.parse(a),
                    e = b instanceof m ? b : new m(b);
                return this.renderTokens(d, e, c, a)
            }, n.prototype.renderTokens = function(a, b, c, d) {
                for (var e, f, g, h = "", i = 0, j = a.length; j > i; ++i) g = void 0, e = a[i], f = e[0], "#" === f ? g = this.renderSection(e, b, c, d) : "^" === f ? g = this.renderInverted(e, b, c, d) : ">" === f ? g = this.renderPartial(e, b, c, d) : "&" === f ? g = this.unescapedValue(e, b) : "name" === f ? g = this.escapedValue(e, b) : "text" === f && (g = this.rawValue(e)), void 0 !== g && (h += g);
                return h
            }, n.prototype.renderSection = function(a, c, d, e) {
                function f(a) {
                    return g.render(a, c, d)
                }
                var g = this,
                    h = "",
                    i = c.lookup(a[1]);
                if (i) {
                    if (p(i))
                        for (var j = 0, k = i.length; k > j; ++j) h += this.renderTokens(a[4], c.push(i[j]), d, e);
                    else if ("object" == typeof i || "string" == typeof i || "number" == typeof i) h += this.renderTokens(a[4], c.push(i), d, e);
                    else if (b(i)) {
                        if ("string" != typeof e) throw new Error("Cannot use higher-order sections without the original template");
                        i = i.call(c.view, e.slice(a[3], a[5]), f), null != i && (h += i)
                    } else h += this.renderTokens(a[4], c, d, e);
                    return h
                }
            }, n.prototype.renderInverted = function(a, b, c, d) {
                var e = b.lookup(a[1]);
                return !e || p(e) && 0 === e.length ? this.renderTokens(a[4], b, c, d) : void 0
            }, n.prototype.renderPartial = function(a, c, d) {
                if (d) {
                    var e = b(d) ? d(a[1]) : d[a[1]];
                    return null != e ? this.renderTokens(this.parse(e), c, d, e) : void 0
                }
            }, n.prototype.unescapedValue = function(a, b) {
                var c = b.lookup(a[1]);
                return null != c ? c : void 0
            }, n.prototype.escapedValue = function(b, c) {
                var d = c.lookup(b[1]);
                return null != d ? a.escape(d) : void 0
            }, n.prototype.rawValue = function(a) {
                return a[1]
            }, a.name = "mustache.js", a.version = "2.2.1", a.tags = ["{{", "}}"];
            var y = new n;
            a.clearCache = function() {
                return y.clearCache()
            }, a.parse = function(a, b) {
                return y.parse(a, b)
            }, a.render = function(a, b, d) {
                if ("string" != typeof a) throw new TypeError('Invalid template! Template should be a "string" but "' + c(a) + '" was given as the first argument for mustache#render(template, view, partials)');
                return y.render(a, b, d)
            }, a.to_html = function(c, d, e, f) {
                var g = a.render(c, d, e);
                return b(f) ? (f(g), void 0) : g
            }, a.escape = h, a.Scanner = l, a.Context = m, a.Writer = n
        })
    }, {}],
    5: [function(a, b) {
        function c(a) {
            "use strict";
            return /^https?/.test(a.getScheme()) ? a.toString() : /^mailto?/.test(a.getScheme()) ? a.toString() : "data" == a.getScheme() && /^image/.test(a.getPath()) ? a.toString() : void 0
        }

        function d(a) {
            return a
        }
        var e = a("./sanitizer-bundle.js");
        b.exports = function(a) {
            return a ? e(a, c, d) : ""
        }
    }, {
        "./sanitizer-bundle.js": 6
    }],
    6: [function(a, b) {
        var c = function() {
                function a(a) {
                    var b = ("" + a).match(n);
                    return b ? new i(j(b[1]), j(b[2]), j(b[3]), j(b[4]), j(b[5]), j(b[6]), j(b[7])) : null
                }

                function b(a, b, f, g, h, j, k) {
                    var l = new i(d(a, o), d(b, o), c(f), g > 0 ? g.toString() : null, d(h, p), null, c(k));
                    return j && ("string" == typeof j ? l.setRawQuery(j.replace(/[^?&=0-9A-Za-z_\-~.%]/g, e)) : l.setAllParameters(j)), l
                }

                function c(a) {
                    return "string" == typeof a ? encodeURIComponent(a) : null
                }

                function d(a, b) {
                    return "string" == typeof a ? encodeURI(a).replace(b, e) : null
                }

                function e(a) {
                    var b = a.charCodeAt(0);
                    return "%" + "0123456789ABCDEF".charAt(b >> 4 & 15) + "0123456789ABCDEF".charAt(15 & b)
                }

                function f(a) {
                    return a.replace(/(^|\/)\.(?:\/|$)/g, "$1").replace(/\/{2,}/g, "/")
                }

                function g(a) {
                    if (null === a) return null;
                    for (var b, c = f(a), d = l;
                        (b = c.replace(d, "$1")) != c; c = b);
                    return c
                }

                function h(a, b) {
                    var c = a.clone(),
                        d = b.hasScheme();
                    d ? c.setRawScheme(b.getRawScheme()) : d = b.hasCredentials(), d ? c.setRawCredentials(b.getRawCredentials()) : d = b.hasDomain(), d ? c.setRawDomain(b.getRawDomain()) : d = b.hasPort();
                    var e = b.getRawPath(),
                        f = g(e);
                    if (d) c.setPort(b.getPort()), f = f && f.replace(m, "");
                    else if (d = !!e) {
                        if (47 !== f.charCodeAt(0)) {
                            var h = g(c.getRawPath() || "").replace(m, ""),
                                i = h.lastIndexOf("/") + 1;
                            f = g((i ? h.substring(0, i) : "") + g(e)).replace(m, "")
                        }
                    } else f = f && f.replace(m, ""), f !== e && c.setRawPath(f);
                    return d ? c.setRawPath(f) : d = b.hasQuery(), d ? c.setRawQuery(b.getRawQuery()) : d = b.hasFragment(), d && c.setRawFragment(b.getRawFragment()), c
                }

                function i(a, b, c, d, e, f, g) {
                    this.scheme_ = a, this.credentials_ = b, this.domain_ = c, this.port_ = d, this.path_ = e, this.query_ = f, this.fragment_ = g, this.paramCache_ = null
                }

                function j(a) {
                    return "string" == typeof a && a.length > 0 ? a : null
                }
                var k = new RegExp("(/|^)(?:[^./][^/]*|\\.{2,}(?:[^./][^/]*)|\\.{3,}[^/]*)/\\.\\.(?:/|$)"),
                    l = new RegExp(k),
                    m = /^(?:\.\.\/)*(?:\.\.$)?/;
                i.prototype.toString = function() {
                    var a = [];
                    return null !== this.scheme_ && a.push(this.scheme_, ":"), null !== this.domain_ && (a.push("//"), null !== this.credentials_ && a.push(this.credentials_, "@"), a.push(this.domain_), null !== this.port_ && a.push(":", this.port_.toString())), null !== this.path_ && a.push(this.path_), null !== this.query_ && a.push("?", this.query_), null !== this.fragment_ && a.push("#", this.fragment_), a.join("")
                }, i.prototype.clone = function() {
                    return new i(this.scheme_, this.credentials_, this.domain_, this.port_, this.path_, this.query_, this.fragment_)
                }, i.prototype.getScheme = function() {
                    return this.scheme_ && decodeURIComponent(this.scheme_).toLowerCase()
                }, i.prototype.getRawScheme = function() {
                    return this.scheme_
                }, i.prototype.setScheme = function(a) {
                    return this.scheme_ = d(a, o), this
                }, i.prototype.setRawScheme = function(a) {
                    return this.scheme_ = a ? a : null, this
                }, i.prototype.hasScheme = function() {
                    return null !== this.scheme_
                }, i.prototype.getCredentials = function() {
                    return this.credentials_ && decodeURIComponent(this.credentials_)
                }, i.prototype.getRawCredentials = function() {
                    return this.credentials_
                }, i.prototype.setCredentials = function(a) {
                    return this.credentials_ = d(a, o), this
                }, i.prototype.setRawCredentials = function(a) {
                    return this.credentials_ = a ? a : null, this
                }, i.prototype.hasCredentials = function() {
                    return null !== this.credentials_
                }, i.prototype.getDomain = function() {
                    return this.domain_ && decodeURIComponent(this.domain_)
                }, i.prototype.getRawDomain = function() {
                    return this.domain_
                }, i.prototype.setDomain = function(a) {
                    return this.setRawDomain(a && encodeURIComponent(a))
                }, i.prototype.setRawDomain = function(a) {
                    return this.domain_ = a ? a : null, this.setRawPath(this.path_)
                }, i.prototype.hasDomain = function() {
                    return null !== this.domain_
                }, i.prototype.getPort = function() {
                    return this.port_ && decodeURIComponent(this.port_)
                }, i.prototype.setPort = function(a) {
                    if (a) {
                        if (a = Number(a), a !== (65535 & a)) throw new Error("Bad port number " + a);
                        this.port_ = "" + a
                    } else this.port_ = null;
                    return this
                }, i.prototype.hasPort = function() {
                    return null !== this.port_
                }, i.prototype.getPath = function() {
                    return this.path_ && decodeURIComponent(this.path_)
                }, i.prototype.getRawPath = function() {
                    return this.path_
                }, i.prototype.setPath = function(a) {
                    return this.setRawPath(d(a, p))
                }, i.prototype.setRawPath = function(a) {
                    return a ? (a = String(a), this.path_ = !this.domain_ || /^\//.test(a) ? a : "/" + a) : this.path_ = null, this
                }, i.prototype.hasPath = function() {
                    return null !== this.path_
                }, i.prototype.getQuery = function() {
                    return this.query_ && decodeURIComponent(this.query_).replace(/\+/g, " ")
                }, i.prototype.getRawQuery = function() {
                    return this.query_
                }, i.prototype.setQuery = function(a) {
                    return this.paramCache_ = null, this.query_ = c(a), this
                }, i.prototype.setRawQuery = function(a) {
                    return this.paramCache_ = null, this.query_ = a ? a : null, this
                }, i.prototype.hasQuery = function() {
                    return null !== this.query_
                }, i.prototype.setAllParameters = function(a) {
                    if ("object" == typeof a && !(a instanceof Array) && (a instanceof Object || "[object Array]" !== Object.prototype.toString.call(a))) {
                        var b = [],
                            c = -1;
                        for (var d in a) {
                            var e = a[d];
                            "string" == typeof e && (b[++c] = d, b[++c] = e)
                        }
                        a = b
                    }
                    this.paramCache_ = null;
                    for (var f = [], g = "", h = 0; h < a.length;) {
                        var d = a[h++],
                            e = a[h++];
                        f.push(g, encodeURIComponent(d.toString())), g = "&", e && f.push("=", encodeURIComponent(e.toString()))
                    }
                    return this.query_ = f.join(""), this
                }, i.prototype.checkParameterCache_ = function() {
                    if (!this.paramCache_) {
                        var a = this.query_;
                        if (a) {
                            for (var b = a.split(/[&\?]/), c = [], d = -1, e = 0; e < b.length; ++e) {
                                var f = b[e].match(/^([^=]*)(?:=(.*))?$/);
                                c[++d] = decodeURIComponent(f[1]).replace(/\+/g, " "), c[++d] = decodeURIComponent(f[2] || "").replace(/\+/g, " ")
                            }
                            this.paramCache_ = c
                        } else this.paramCache_ = []
                    }
                }, i.prototype.setParameterValues = function(a, b) {
                    "string" == typeof b && (b = [b]), this.checkParameterCache_();
                    for (var c = 0, d = this.paramCache_, e = [], f = 0; f < d.length; f += 2) a === d[f] ? c < b.length && e.push(a, b[c++]) : e.push(d[f], d[f + 1]);
                    for (; c < b.length;) e.push(a, b[c++]);
                    return this.setAllParameters(e), this
                }, i.prototype.removeParameter = function(a) {
                    return this.setParameterValues(a, [])
                }, i.prototype.getAllParameters = function() {
                    return this.checkParameterCache_(), this.paramCache_.slice(0, this.paramCache_.length)
                }, i.prototype.getParameterValues = function(a) {
                    this.checkParameterCache_();
                    for (var b = [], c = 0; c < this.paramCache_.length; c += 2) a === this.paramCache_[c] && b.push(this.paramCache_[c + 1]);
                    return b
                }, i.prototype.getParameterMap = function() {
                    this.checkParameterCache_();
                    for (var a = {}, b = 0; b < this.paramCache_.length; b += 2) {
                        var c = this.paramCache_[b++],
                            d = this.paramCache_[b++];
                        c in a ? a[c].push(d) : a[c] = [d]
                    }
                    return a
                }, i.prototype.getParameterValue = function(a) {
                    this.checkParameterCache_();
                    for (var b = 0; b < this.paramCache_.length; b += 2)
                        if (a === this.paramCache_[b]) return this.paramCache_[b + 1];
                    return null
                }, i.prototype.getFragment = function() {
                    return this.fragment_ && decodeURIComponent(this.fragment_)
                }, i.prototype.getRawFragment = function() {
                    return this.fragment_
                }, i.prototype.setFragment = function(a) {
                    return this.fragment_ = a ? encodeURIComponent(a) : null, this
                }, i.prototype.setRawFragment = function(a) {
                    return this.fragment_ = a ? a : null, this
                }, i.prototype.hasFragment = function() {
                    return null !== this.fragment_
                };
                var n = new RegExp("^(?:([^:/?#]+):)?(?://(?:([^/?#]*)@)?([^/?#:@]*)(?::([0-9]+))?)?([^?#]+)?(?:\\?([^#]*))?(?:#(.*))?$"),
                    o = /[#\/\?@]/g,
                    p = /[\#\?]/g;
                return i.parse = a, i.create = b, i.resolve = h, i.collapse_dots = g, i.utils = {
                    mimeTypeOf: function(b) {
                        var c = a(b);
                        return /\.html$/.test(c.getPath()) ? "text/html" : "application/javascript"
                    },
                    resolve: function(b, c) {
                        return b ? h(a(b), a(c)).toString() : "" + c
                    }
                }, i
            }(),
            d = {};
        if (d.atype = {
                NONE: 0,
                URI: 1,
                URI_FRAGMENT: 11,
                SCRIPT: 2,
                STYLE: 3,
                HTML: 12,
                ID: 4,
                IDREF: 5,
                IDREFS: 6,
                GLOBAL_NAME: 7,
                LOCAL_NAME: 8,
                CLASSES: 9,
                FRAME_TARGET: 10,
                MEDIA_QUERY: 13
            }, d.atype = d.atype, d.ATTRIBS = {
                "*::class": 9,
                "*::dir": 0,
                "*::draggable": 0,
                "*::hidden": 0,
                "*::id": 4,
                "*::inert": 0,
                "*::itemprop": 0,
                "*::itemref": 6,
                "*::itemscope": 0,
                "*::lang": 0,
                "*::onblur": 2,
                "*::onchange": 2,
                "*::onclick": 2,
                "*::ondblclick": 2,
                "*::onfocus": 2,
                "*::onkeydown": 2,
                "*::onkeypress": 2,
                "*::onkeyup": 2,
                "*::onload": 2,
                "*::onmousedown": 2,
                "*::onmousemove": 2,
                "*::onmouseout": 2,
                "*::onmouseover": 2,
                "*::onmouseup": 2,
                "*::onreset": 2,
                "*::onscroll": 2,
                "*::onselect": 2,
                "*::onsubmit": 2,
                "*::onunload": 2,
                "*::spellcheck": 0,
                "*::style": 3,
                "*::title": 0,
                "*::translate": 0,
                "a::accesskey": 0,
                "a::coords": 0,
                "a::href": 1,
                "a::hreflang": 0,
                "a::name": 7,
                "a::onblur": 2,
                "a::onfocus": 2,
                "a::shape": 0,
                "a::tabindex": 0,
                "a::target": 10,
                "a::type": 0,
                "area::accesskey": 0,
                "area::alt": 0,
                "area::coords": 0,
                "area::href": 1,
                "area::nohref": 0,
                "area::onblur": 2,
                "area::onfocus": 2,
                "area::shape": 0,
                "area::tabindex": 0,
                "area::target": 10,
                "audio::controls": 0,
                "audio::loop": 0,
                "audio::mediagroup": 5,
                "audio::muted": 0,
                "audio::preload": 0,
                "bdo::dir": 0,
                "blockquote::cite": 1,
                "br::clear": 0,
                "button::accesskey": 0,
                "button::disabled": 0,
                "button::name": 8,
                "button::onblur": 2,
                "button::onfocus": 2,
                "button::tabindex": 0,
                "button::type": 0,
                "button::value": 0,
                "canvas::height": 0,
                "canvas::width": 0,
                "caption::align": 0,
                "col::align": 0,
                "col::char": 0,
                "col::charoff": 0,
                "col::span": 0,
                "col::valign": 0,
                "col::width": 0,
                "colgroup::align": 0,
                "colgroup::char": 0,
                "colgroup::charoff": 0,
                "colgroup::span": 0,
                "colgroup::valign": 0,
                "colgroup::width": 0,
                "command::checked": 0,
                "command::command": 5,
                "command::disabled": 0,
                "command::icon": 1,
                "command::label": 0,
                "command::radiogroup": 0,
                "command::type": 0,
                "data::value": 0,
                "del::cite": 1,
                "del::datetime": 0,
                "details::open": 0,
                "dir::compact": 0,
                "div::align": 0,
                "dl::compact": 0,
                "fieldset::disabled": 0,
                "font::color": 0,
                "font::face": 0,
                "font::size": 0,
                "form::accept": 0,
                "form::action": 1,
                "form::autocomplete": 0,
                "form::enctype": 0,
                "form::method": 0,
                "form::name": 7,
                "form::novalidate": 0,
                "form::onreset": 2,
                "form::onsubmit": 2,
                "form::target": 10,
                "h1::align": 0,
                "h2::align": 0,
                "h3::align": 0,
                "h4::align": 0,
                "h5::align": 0,
                "h6::align": 0,
                "hr::align": 0,
                "hr::noshade": 0,
                "hr::size": 0,
                "hr::width": 0,
                "iframe::align": 0,
                "iframe::frameborder": 0,
                "iframe::height": 0,
                "iframe::marginheight": 0,
                "iframe::marginwidth": 0,
                "iframe::width": 0,
                "img::align": 0,
                "img::alt": 0,
                "img::border": 0,
                "img::height": 0,
                "img::hspace": 0,
                "img::ismap": 0,
                "img::name": 7,
                "img::src": 1,
                "img::usemap": 11,
                "img::vspace": 0,
                "img::width": 0,
                "input::accept": 0,
                "input::accesskey": 0,
                "input::align": 0,
                "input::alt": 0,
                "input::autocomplete": 0,
                "input::checked": 0,
                "input::disabled": 0,
                "input::inputmode": 0,
                "input::ismap": 0,
                "input::list": 5,
                "input::max": 0,
                "input::maxlength": 0,
                "input::min": 0,
                "input::multiple": 0,
                "input::name": 8,
                "input::onblur": 2,
                "input::onchange": 2,
                "input::onfocus": 2,
                "input::onselect": 2,
                "input::placeholder": 0,
                "input::readonly": 0,
                "input::required": 0,
                "input::size": 0,
                "input::src": 1,
                "input::step": 0,
                "input::tabindex": 0,
                "input::type": 0,
                "input::usemap": 11,
                "input::value": 0,
                "ins::cite": 1,
                "ins::datetime": 0,
                "label::accesskey": 0,
                "label::for": 5,
                "label::onblur": 2,
                "label::onfocus": 2,
                "legend::accesskey": 0,
                "legend::align": 0,
                "li::type": 0,
                "li::value": 0,
                "map::name": 7,
                "menu::compact": 0,
                "menu::label": 0,
                "menu::type": 0,
                "meter::high": 0,
                "meter::low": 0,
                "meter::max": 0,
                "meter::min": 0,
                "meter::value": 0,
                "ol::compact": 0,
                "ol::reversed": 0,
                "ol::start": 0,
                "ol::type": 0,
                "optgroup::disabled": 0,
                "optgroup::label": 0,
                "option::disabled": 0,
                "option::label": 0,
                "option::selected": 0,
                "option::value": 0,
                "output::for": 6,
                "output::name": 8,
                "p::align": 0,
                "pre::width": 0,
                "progress::max": 0,
                "progress::min": 0,
                "progress::value": 0,
                "q::cite": 1,
                "select::autocomplete": 0,
                "select::disabled": 0,
                "select::multiple": 0,
                "select::name": 8,
                "select::onblur": 2,
                "select::onchange": 2,
                "select::onfocus": 2,
                "select::required": 0,
                "select::size": 0,
                "select::tabindex": 0,
                "source::type": 0,
                "table::align": 0,
                "table::bgcolor": 0,
                "table::border": 0,
                "table::cellpadding": 0,
                "table::cellspacing": 0,
                "table::frame": 0,
                "table::rules": 0,
                "table::summary": 0,
                "table::width": 0,
                "tbody::align": 0,
                "tbody::char": 0,
                "tbody::charoff": 0,
                "tbody::valign": 0,
                "td::abbr": 0,
                "td::align": 0,
                "td::axis": 0,
                "td::bgcolor": 0,
                "td::char": 0,
                "td::charoff": 0,
                "td::colspan": 0,
                "td::headers": 6,
                "td::height": 0,
                "td::nowrap": 0,
                "td::rowspan": 0,
                "td::scope": 0,
                "td::valign": 0,
                "td::width": 0,
                "textarea::accesskey": 0,
                "textarea::autocomplete": 0,
                "textarea::cols": 0,
                "textarea::disabled": 0,
                "textarea::inputmode": 0,
                "textarea::name": 8,
                "textarea::onblur": 2,
                "textarea::onchange": 2,
                "textarea::onfocus": 2,
                "textarea::onselect": 2,
                "textarea::placeholder": 0,
                "textarea::readonly": 0,
                "textarea::required": 0,
                "textarea::rows": 0,
                "textarea::tabindex": 0,
                "textarea::wrap": 0,
                "tfoot::align": 0,
                "tfoot::char": 0,
                "tfoot::charoff": 0,
                "tfoot::valign": 0,
                "th::abbr": 0,
                "th::align": 0,
                "th::axis": 0,
                "th::bgcolor": 0,
                "th::char": 0,
                "th::charoff": 0,
                "th::colspan": 0,
                "th::headers": 6,
                "th::height": 0,
                "th::nowrap": 0,
                "th::rowspan": 0,
                "th::scope": 0,
                "th::valign": 0,
                "th::width": 0,
                "thead::align": 0,
                "thead::char": 0,
                "thead::charoff": 0,
                "thead::valign": 0,
                "tr::align": 0,
                "tr::bgcolor": 0,
                "tr::char": 0,
                "tr::charoff": 0,
                "tr::valign": 0,
                "track::default": 0,
                "track::kind": 0,
                "track::label": 0,
                "track::srclang": 0,
                "ul::compact": 0,
                "ul::type": 0,
                "video::controls": 0,
                "video::height": 0,
                "video::loop": 0,
                "video::mediagroup": 5,
                "video::muted": 0,
                "video::poster": 1,
                "video::preload": 0,
                "video::width": 0
            }, d.ATTRIBS = d.ATTRIBS, d.eflags = {
                OPTIONAL_ENDTAG: 1,
                EMPTY: 2,
                CDATA: 4,
                RCDATA: 8,
                UNSAFE: 16,
                FOLDABLE: 32,
                SCRIPT: 64,
                STYLE: 128,
                VIRTUALIZED: 256
            }, d.eflags = d.eflags, d.ELEMENTS = {
                a: 0,
                abbr: 0,
                acronym: 0,
                address: 0,
                applet: 272,
                area: 2,
                article: 0,
                aside: 0,
                audio: 0,
                b: 0,
                base: 274,
                basefont: 274,
                bdi: 0,
                bdo: 0,
                big: 0,
                blockquote: 0,
                body: 305,
                br: 2,
                button: 0,
                canvas: 0,
                caption: 0,
                center: 0,
                cite: 0,
                code: 0,
                col: 2,
                colgroup: 1,
                command: 2,
                data: 0,
                datalist: 0,
                dd: 1,
                del: 0,
                details: 0,
                dfn: 0,
                dialog: 272,
                dir: 0,
                div: 0,
                dl: 0,
                dt: 1,
                em: 0,
                fieldset: 0,
                figcaption: 0,
                figure: 0,
                font: 0,
                footer: 0,
                form: 0,
                frame: 274,
                frameset: 272,
                h1: 0,
                h2: 0,
                h3: 0,
                h4: 0,
                h5: 0,
                h6: 0,
                head: 305,
                header: 0,
                hgroup: 0,
                hr: 2,
                html: 305,
                i: 0,
                iframe: 16,
                img: 2,
                input: 2,
                ins: 0,
                isindex: 274,
                kbd: 0,
                keygen: 274,
                label: 0,
                legend: 0,
                li: 1,
                link: 274,
                map: 0,
                mark: 0,
                menu: 0,
                meta: 274,
                meter: 0,
                nav: 0,
                nobr: 0,
                noembed: 276,
                noframes: 276,
                noscript: 276,
                object: 272,
                ol: 0,
                optgroup: 0,
                option: 1,
                output: 0,
                p: 1,
                param: 274,
                pre: 0,
                progress: 0,
                q: 0,
                s: 0,
                samp: 0,
                script: 84,
                section: 0,
                select: 0,
                small: 0,
                source: 2,
                span: 0,
                strike: 0,
                strong: 0,
                style: 148,
                sub: 0,
                summary: 0,
                sup: 0,
                table: 0,
                tbody: 1,
                td: 1,
                textarea: 8,
                tfoot: 1,
                th: 1,
                thead: 1,
                time: 0,
                title: 280,
                tr: 1,
                track: 2,
                tt: 0,
                u: 0,
                ul: 0,
                "var": 0,
                video: 0,
                wbr: 2
            }, d.ELEMENTS = d.ELEMENTS, d.ELEMENT_DOM_INTERFACES = {
                a: "HTMLAnchorElement",
                abbr: "HTMLElement",
                acronym: "HTMLElement",
                address: "HTMLElement",
                applet: "HTMLAppletElement",
                area: "HTMLAreaElement",
                article: "HTMLElement",
                aside: "HTMLElement",
                audio: "HTMLAudioElement",
                b: "HTMLElement",
                base: "HTMLBaseElement",
                basefont: "HTMLBaseFontElement",
                bdi: "HTMLElement",
                bdo: "HTMLElement",
                big: "HTMLElement",
                blockquote: "HTMLQuoteElement",
                body: "HTMLBodyElement",
                br: "HTMLBRElement",
                button: "HTMLButtonElement",
                canvas: "HTMLCanvasElement",
                caption: "HTMLTableCaptionElement",
                center: "HTMLElement",
                cite: "HTMLElement",
                code: "HTMLElement",
                col: "HTMLTableColElement",
                colgroup: "HTMLTableColElement",
                command: "HTMLCommandElement",
                data: "HTMLElement",
                datalist: "HTMLDataListElement",
                dd: "HTMLElement",
                del: "HTMLModElement",
                details: "HTMLDetailsElement",
                dfn: "HTMLElement",
                dialog: "HTMLDialogElement",
                dir: "HTMLDirectoryElement",
                div: "HTMLDivElement",
                dl: "HTMLDListElement",
                dt: "HTMLElement",
                em: "HTMLElement",
                fieldset: "HTMLFieldSetElement",
                figcaption: "HTMLElement",
                figure: "HTMLElement",
                font: "HTMLFontElement",
                footer: "HTMLElement",
                form: "HTMLFormElement",
                frame: "HTMLFrameElement",
                frameset: "HTMLFrameSetElement",
                h1: "HTMLHeadingElement",
                h2: "HTMLHeadingElement",
                h3: "HTMLHeadingElement",
                h4: "HTMLHeadingElement",
                h5: "HTMLHeadingElement",
                h6: "HTMLHeadingElement",
                head: "HTMLHeadElement",
                header: "HTMLElement",
                hgroup: "HTMLElement",
                hr: "HTMLHRElement",
                html: "HTMLHtmlElement",
                i: "HTMLElement",
                iframe: "HTMLIFrameElement",
                img: "HTMLImageElement",
                input: "HTMLInputElement",
                ins: "HTMLModElement",
                isindex: "HTMLUnknownElement",
                kbd: "HTMLElement",
                keygen: "HTMLKeygenElement",
                label: "HTMLLabelElement",
                legend: "HTMLLegendElement",
                li: "HTMLLIElement",
                link: "HTMLLinkElement",
                map: "HTMLMapElement",
                mark: "HTMLElement",
                menu: "HTMLMenuElement",
                meta: "HTMLMetaElement",
                meter: "HTMLMeterElement",
                nav: "HTMLElement",
                nobr: "HTMLElement",
                noembed: "HTMLElement",
                noframes: "HTMLElement",
                noscript: "HTMLElement",
                object: "HTMLObjectElement",
                ol: "HTMLOListElement",
                optgroup: "HTMLOptGroupElement",
                option: "HTMLOptionElement",
                output: "HTMLOutputElement",
                p: "HTMLParagraphElement",
                param: "HTMLParamElement",
                pre: "HTMLPreElement",
                progress: "HTMLProgressElement",
                q: "HTMLQuoteElement",
                s: "HTMLElement",
                samp: "HTMLElement",
                script: "HTMLScriptElement",
                section: "HTMLElement",
                select: "HTMLSelectElement",
                small: "HTMLElement",
                source: "HTMLSourceElement",
                span: "HTMLSpanElement",
                strike: "HTMLElement",
                strong: "HTMLElement",
                style: "HTMLStyleElement",
                sub: "HTMLElement",
                summary: "HTMLElement",
                sup: "HTMLElement",
                table: "HTMLTableElement",
                tbody: "HTMLTableSectionElement",
                td: "HTMLTableDataCellElement",
                textarea: "HTMLTextAreaElement",
                tfoot: "HTMLTableSectionElement",
                th: "HTMLTableHeaderCellElement",
                thead: "HTMLTableSectionElement",
                time: "HTMLTimeElement",
                title: "HTMLTitleElement",
                tr: "HTMLTableRowElement",
                track: "HTMLTrackElement",
                tt: "HTMLElement",
                u: "HTMLElement",
                ul: "HTMLUListElement",
                "var": "HTMLElement",
                video: "HTMLVideoElement",
                wbr: "HTMLElement"
            }, d.ELEMENT_DOM_INTERFACES = d.ELEMENT_DOM_INTERFACES, d.ueffects = {
                NOT_LOADED: 0,
                SAME_DOCUMENT: 1,
                NEW_DOCUMENT: 2
            }, d.ueffects = d.ueffects, d.URIEFFECTS = {
                "a::href": 2,
                "area::href": 2,
                "blockquote::cite": 0,
                "command::icon": 1,
                "del::cite": 0,
                "form::action": 2,
                "img::src": 1,
                "input::src": 1,
                "ins::cite": 0,
                "q::cite": 0,
                "video::poster": 1
            }, d.URIEFFECTS = d.URIEFFECTS, d.ltypes = {
                UNSANDBOXED: 2,
                SANDBOXED: 1,
                DATA: 0
            }, d.ltypes = d.ltypes, d.LOADERTYPES = {
                "a::href": 2,
                "area::href": 2,
                "blockquote::cite": 2,
                "command::icon": 1,
                "del::cite": 2,
                "form::action": 2,
                "img::src": 1,
                "input::src": 1,
                "ins::cite": 2,
                "q::cite": 2,
                "video::poster": 1
            }, d.LOADERTYPES = d.LOADERTYPES, "i" !== "I".toLowerCase()) throw "I/i problem";
        var e = function(a) {
                function b(a) {
                    if (F.hasOwnProperty(a)) return F[a];
                    var b = a.match(G);
                    if (b) return String.fromCharCode(parseInt(b[1], 10));
                    if (b = a.match(H)) return String.fromCharCode(parseInt(b[1], 16));
                    if (J && I.test(a)) {
                        J.innerHTML = "&" + a + ";";
                        var c = J.textContent;
                        return F[a] = c, c
                    }
                    return "&" + a + ";"
                }

                function d(a, c) {
                    return b(c)
                }

                function e(a) {
                    return a.replace(K, "")
                }

                function f(a) {
                    return a.replace(L, d)
                }

                function g(a) {
                    return ("" + a).replace(N, "&amp;").replace(P, "&lt;").replace(Q, "&gt;").replace(R, "&#34;")
                }

                function h(a) {
                    return a.replace(O, "&amp;$1").replace(P, "&lt;").replace(Q, "&gt;")
                }

                function i(a) {
                    var b = {
                        cdata: a.cdata || a.cdata,
                        comment: a.comment || a.comment,
                        endDoc: a.endDoc || a.endDoc,
                        endTag: a.endTag || a.endTag,
                        pcdata: a.pcdata || a.pcdata,
                        rcdata: a.rcdata || a.rcdata,
                        startDoc: a.startDoc || a.startDoc,
                        startTag: a.startTag || a.startTag
                    };
                    return function(a, c) {
                        return j(a, b, c)
                    }
                }

                function j(a, b, c) {
                    var d = m(a),
                        e = {
                            noMoreGT: !1,
                            noMoreEndComments: !1
                        };
                    l(b, d, 0, e, c)
                }

                function k(a, b, c, d, e) {
                    return function() {
                        l(a, b, c, d, e)
                    }
                }

                function l(b, c, d, e, f) {
                    try {
                        b.startDoc && 0 == d && b.startDoc(f);
                        for (var g, h, i, j = d, l = c.length; l > j;) {
                            var m = c[j++],
                                q = c[j];
                            switch (m) {
                                case "&":
                                    M.test(q) ? (b.pcdata && b.pcdata("&" + q, f, V, k(b, c, j, e, f)), j++) : b.pcdata && b.pcdata("&amp;", f, V, k(b, c, j, e, f));
                                    break;
                                case "</":
                                    (g = /^([-\w:]+)[^\'\"]*/.exec(q)) ? g[0].length === q.length && ">" === c[j + 1] ? (j += 2, i = g[1].toLowerCase(), b.endTag && b.endTag(i, f, V, k(b, c, j, e, f))) : j = n(c, j, b, f, V, e): b.pcdata && b.pcdata("&lt;/", f, V, k(b, c, j, e, f));
                                    break;
                                case "<":
                                    if (g = /^([-\w:]+)\s*\/?/.exec(q))
                                        if (g[0].length === q.length && ">" === c[j + 1]) {
                                            j += 2, i = g[1].toLowerCase(), b.startTag && b.startTag(i, [], f, V, k(b, c, j, e, f));
                                            var r = a.ELEMENTS[i];
                                            if (r & U) {
                                                var s = {
                                                    name: i,
                                                    next: j,
                                                    eflags: r
                                                };
                                                j = p(c, s, b, f, V, e)
                                            }
                                        } else j = o(c, j, b, f, V, e);
                                    else b.pcdata && b.pcdata("&lt;", f, V, k(b, c, j, e, f));
                                    break;
                                case "<!--":
                                    if (!e.noMoreEndComments) {
                                        for (h = j + 1; l > h && (">" !== c[h] || !/--$/.test(c[h - 1])); h++);
                                        if (l > h) {
                                            if (b.comment) {
                                                var t = c.slice(j, h).join("");
                                                b.comment(t.substr(0, t.length - 2), f, V, k(b, c, h + 1, e, f))
                                            }
                                            j = h + 1
                                        } else e.noMoreEndComments = !0
                                    }
                                    e.noMoreEndComments && b.pcdata && b.pcdata("&lt;!--", f, V, k(b, c, j, e, f));
                                    break;
                                case "<!":
                                    if (/^\w/.test(q)) {
                                        if (!e.noMoreGT) {
                                            for (h = j + 1; l > h && ">" !== c[h]; h++);
                                            l > h ? j = h + 1 : e.noMoreGT = !0
                                        }
                                        e.noMoreGT && b.pcdata && b.pcdata("&lt;!", f, V, k(b, c, j, e, f))
                                    } else b.pcdata && b.pcdata("&lt;!", f, V, k(b, c, j, e, f));
                                    break;
                                case "<?":
                                    if (!e.noMoreGT) {
                                        for (h = j + 1; l > h && ">" !== c[h]; h++);
                                        l > h ? j = h + 1 : e.noMoreGT = !0
                                    }
                                    e.noMoreGT && b.pcdata && b.pcdata("&lt;?", f, V, k(b, c, j, e, f));
                                    break;
                                case ">":
                                    b.pcdata && b.pcdata("&gt;", f, V, k(b, c, j, e, f));
                                    break;
                                case "":
                                    break;
                                default:
                                    b.pcdata && b.pcdata(m, f, V, k(b, c, j, e, f))
                            }
                        }
                        b.endDoc && b.endDoc(f)
                    } catch (u) {
                        if (u !== V) throw u
                    }
                }

                function m(a) {
                    var b = /(<\/|<\!--|<[!?]|[&<>])/g;
                    if (a += "", T) return a.split(b);
                    for (var c, d = [], e = 0; null !== (c = b.exec(a));) d.push(a.substring(e, c.index)), d.push(c[0]), e = c.index + c[0].length;
                    return d.push(a.substring(e)), d
                }

                function n(a, b, c, d, e, f) {
                    var g = q(a, b);
                    return g ? (c.endTag && c.endTag(g.name, d, e, k(c, a, b, f, d)), g.next) : a.length
                }

                function o(a, b, c, d, e, f) {
                    var g = q(a, b);
                    return g ? (c.startTag && c.startTag(g.name, g.attrs, d, e, k(c, a, g.next, f, d)), g.eflags & U ? p(a, g, c, d, e, f) : g.next) : a.length
                }

                function p(b, c, d, e, f, g) {
                    var i = b.length;
                    W.hasOwnProperty(c.name) || (W[c.name] = new RegExp("^" + c.name + "(?:[\\s\\/]|$)", "i"));
                    for (var j = W[c.name], l = c.next, m = c.next + 1; i > m && ("</" !== b[m - 1] || !j.test(b[m])); m++);
                    i > m && (m -= 1);
                    var n = b.slice(l, m).join("");
                    if (c.eflags & a.eflags.CDATA) d.cdata && d.cdata(n, e, f, k(d, b, m, g, e));
                    else {
                        if (!(c.eflags & a.eflags.RCDATA)) throw new Error("bug");
                        d.rcdata && d.rcdata(h(n), e, f, k(d, b, m, g, e))
                    }
                    return m
                }

                function q(b, c) {
                    var d = /^([-\w:]+)/.exec(b[c]),
                        e = {};
                    e.name = d[1].toLowerCase(), e.eflags = a.ELEMENTS[e.name];
                    for (var f = b[c].substr(d[0].length), g = c + 1, h = b.length; h > g && ">" !== b[g]; g++) f += b[g];
                    if (g >= h) return void 0;
                    for (var i = [];
                        "" !== f;)
                        if (d = S.exec(f)) {
                            if (d[4] && !d[5] || d[6] && !d[7]) {
                                for (var j = d[4] || d[6], k = !1, l = [f, b[g++]]; h > g; g++) {
                                    if (k) {
                                        if (">" === b[g]) break
                                    } else 0 <= b[g].indexOf(j) && (k = !0);
                                    l.push(b[g])
                                }
                                if (g >= h) break;
                                f = l.join("");
                                continue
                            }
                            var m = d[1].toLowerCase(),
                                n = d[2] ? r(d[3]) : "";
                            i.push(m, n), f = f.substr(d[0].length)
                        } else f = f.replace(/^[\s\S][^a-z\s]*/, "");
                    return e.attrs = i, e.next = g + 1, e
                }

                function r(a) {
                    var b = a.charCodeAt(0);
                    return (34 === b || 39 === b) && (a = a.substr(1, a.length - 2)), f(e(a))
                }

                function s(b) {
                    var c, d, e = function(a, b) {
                        d || b.push(a)
                    };
                    return i({
                        startDoc: function() {
                            c = [], d = !1
                        },
                        startTag: function(e, f, h) {
                            if (!d && a.ELEMENTS.hasOwnProperty(e)) {
                                var i = a.ELEMENTS[e];
                                if (!(i & a.eflags.FOLDABLE)) {
                                    var j = b(e, f);
                                    if (!j) return d = !(i & a.eflags.EMPTY), void 0;
                                    if ("object" != typeof j) throw new Error("tagPolicy did not return object (old API?)");
                                    if (!("attribs" in j)) throw new Error("tagPolicy gave no attribs");
                                    f = j.attribs;
                                    var k, l;
                                    if ("tagName" in j ? (l = j.tagName, k = a.ELEMENTS[l]) : (l = e, k = i), i & a.eflags.OPTIONAL_ENDTAG) {
                                        var m = c[c.length - 1];
                                        !m || m.orig !== e || m.rep === l && e === l || h.push("</", m.rep, ">")
                                    }
                                    i & a.eflags.EMPTY || c.push({
                                        orig: e,
                                        rep: l
                                    }), h.push("<", l);
                                    for (var n = 0, o = f.length; o > n; n += 2) {
                                        var p = f[n],
                                            q = f[n + 1];
                                        null !== q && void 0 !== q && h.push(" ", p, '="', g(q), '"')
                                    }
                                    h.push(">"), i & a.eflags.EMPTY && !(k & a.eflags.EMPTY) && h.push("</", l, ">")
                                }
                            }
                        },
                        endTag: function(b, e) {
                            if (d) return d = !1, void 0;
                            if (a.ELEMENTS.hasOwnProperty(b)) {
                                var f = a.ELEMENTS[b];
                                if (!(f & (a.eflags.EMPTY | a.eflags.FOLDABLE))) {
                                    var g;
                                    if (f & a.eflags.OPTIONAL_ENDTAG)
                                        for (g = c.length; --g >= 0;) {
                                            var h = c[g].orig;
                                            if (h === b) break;
                                            if (!(a.ELEMENTS[h] & a.eflags.OPTIONAL_ENDTAG)) return
                                        } else
                                            for (g = c.length; --g >= 0 && c[g].orig !== b;);
                                    if (0 > g) return;
                                    for (var i = c.length; --i > g;) {
                                        var j = c[i].rep;
                                        a.ELEMENTS[j] & a.eflags.OPTIONAL_ENDTAG || e.push("</", j, ">")
                                    }
                                    g < c.length && (b = c[g].rep), c.length = g, e.push("</", b, ">")
                                }
                            }
                        },
                        pcdata: e,
                        rcdata: e,
                        cdata: e,
                        endDoc: function(a) {
                            for (; c.length; c.length--) a.push("</", c[c.length - 1].rep, ">")
                        }
                    })
                }

                function t(a, b, d, e, f) {
                    if (!f) return null;
                    try {
                        var g = c.parse("" + a);
                        if (g && (!g.hasScheme() || X.test(g.getScheme()))) {
                            var h = f(g, b, d, e);
                            return h ? h.toString() : null
                        }
                    } catch (i) {
                        return null
                    }
                    return null
                }

                function u(a, b, c, d, e) {
                    if (c || a(b + " removed", {
                            change: "removed",
                            tagName: b
                        }), d !== e) {
                        var f = "changed";
                        d && !e ? f = "removed" : !d && e && (f = "added"), a(b + "." + c + " " + f, {
                            change: f,
                            tagName: b,
                            attribName: c,
                            oldValue: d,
                            newValue: e
                        })
                    }
                }

                function v(a, b, c) {
                    var d;
                    return d = b + "::" + c, a.hasOwnProperty(d) ? a[d] : (d = "*::" + c, a.hasOwnProperty(d) ? a[d] : void 0)
                }

                function w(b, c) {
                    return v(a.LOADERTYPES, b, c)
                }

                function x(b, c) {
                    return v(a.URIEFFECTS, b, c)
                }

                function y(b, c, d, e, f) {
                    for (var g = 0; g < c.length; g += 2) {
                        var h, i = c[g],
                            j = c[g + 1],
                            k = j,
                            l = null;
                        if (h = b + "::" + i, (a.ATTRIBS.hasOwnProperty(h) || (h = "*::" + i, a.ATTRIBS.hasOwnProperty(h))) && (l = a.ATTRIBS[h]), null !== l) switch (l) {
                            case a.atype.NONE:
                                break;
                            case a.atype.SCRIPT:
                                j = null, f && u(f, b, i, k, j);
                                break;
                            case a.atype.STYLE:
                                if ("undefined" == typeof C) {
                                    j = null, f && u(f, b, i, k, j);
                                    break
                                }
                                var m = [];
                                C(j, {
                                    declaration: function(b, c) {
                                        var e = b.toLowerCase(),
                                            f = E[e];
                                        f && (D(e, f, c, d ? function(b) {
                                            return t(b, a.ueffects.SAME_DOCUMENT, a.ltypes.SANDBOXED, {
                                                TYPE: "CSS",
                                                CSS_PROP: e
                                            }, d)
                                        } : null), m.push(b + ": " + c.join(" ")))
                                    }
                                }), j = m.length > 0 ? m.join(" ; ") : null, f && u(f, b, i, k, j);
                                break;
                            case a.atype.ID:
                            case a.atype.IDREF:
                            case a.atype.IDREFS:
                            case a.atype.GLOBAL_NAME:
                            case a.atype.LOCAL_NAME:
                            case a.atype.CLASSES:
                                j = e ? e(j) : j, f && u(f, b, i, k, j);
                                break;
                            case a.atype.URI:
                                j = t(j, x(b, i), w(b, i), {
                                    TYPE: "MARKUP",
                                    XML_ATTR: i,
                                    XML_TAG: b
                                }, d), f && u(f, b, i, k, j);
                                break;
                            case a.atype.URI_FRAGMENT:
                                j && "#" === j.charAt(0) ? (j = j.substring(1), j = e ? e(j) : j, null !== j && void 0 !== j && (j = "#" + j)) : j = null, f && u(f, b, i, k, j);
                                break;
                            default:
                                j = null, f && u(f, b, i, k, j)
                        } else j = null, f && u(f, b, i, k, j);
                        c[g + 1] = j
                    }
                    return c
                }

                function z(b, c, d) {
                    return function(e, f) {
                        return a.ELEMENTS[e] & a.eflags.UNSAFE ? (d && u(d, e, void 0, void 0, void 0), void 0) : {
                            attribs: y(e, f, b, c, d)
                        }
                    }
                }

                function A(a, b) {
                    var c = [];
                    return s(b)(a, c), c.join("")
                }

                function B(a, b, c, d) {
                    var e = z(b, c, d);
                    return A(a, e)
                }
                var C, D, E;
                "undefined" != typeof window && (C = window.parseCssDeclarations, D = window.sanitizeCssProperty, E = window.cssSchema);
                var F = {
                        lt: "<",
                        LT: "<",
                        gt: ">",
                        GT: ">",
                        amp: "&",
                        AMP: "&",
                        quot: '"',
                        apos: "'",
                        nbsp: " "
                    },
                    G = /^#(\d+)$/,
                    H = /^#x([0-9A-Fa-f]+)$/,
                    I = /^[A-Za-z][A-za-z0-9]+$/,
                    J = "undefined" != typeof window && window.document ? window.document.createElement("textarea") : null,
                    K = /\0/g,
                    L = /&(#[0-9]+|#[xX][0-9A-Fa-f]+|\w+);/g,
                    M = /^(#[0-9]+|#[xX][0-9A-Fa-f]+|\w+);/,
                    N = /&/g,
                    O = /&([^a-z#]|#(?:[^0-9x]|x(?:[^0-9a-f]|$)|$)|$)/gi,
                    P = /[<]/g,
                    Q = />/g,
                    R = /\"/g,
                    S = new RegExp("^\\s*([-.:\\w]+)(?:\\s*(=)\\s*((\")[^\"]*(\"|$)|(')[^']*('|$)|(?=[a-z][-\\w]*\\s*=)|[^\"'\\s]*))?", "i"),
                    T = 3 === "a,b".split(/(,)/).length,
                    U = a.eflags.CDATA | a.eflags.RCDATA,
                    V = {},
                    W = {},
                    X = /^(?:https?|mailto|data)$/i,
                    Y = {};
                return Y.escapeAttrib = Y.escapeAttrib = g, Y.makeHtmlSanitizer = Y.makeHtmlSanitizer = s, Y.makeSaxParser = Y.makeSaxParser = i, Y.makeTagPolicy = Y.makeTagPolicy = z, Y.normalizeRCData = Y.normalizeRCData = h, Y.sanitize = Y.sanitize = B, Y.sanitizeAttribs = Y.sanitizeAttribs = y, Y.sanitizeWithPolicy = Y.sanitizeWithPolicy = A, Y.unescapeEntities = Y.unescapeEntities = f, Y
            }(d),
            f = e.sanitize;
        d.ATTRIBS["*::style"] = 0, d.ELEMENTS.style = 0, d.ATTRIBS["a::target"] = 0, d.ELEMENTS.video = 0, d.ATTRIBS["video::src"] = 0, d.ATTRIBS["video::poster"] = 0, d.ATTRIBS["video::controls"] = 0, d.ELEMENTS.audio = 0, d.ATTRIBS["audio::src"] = 0, d.ATTRIBS["video::autoplay"] = 0, d.ATTRIBS["video::controls"] = 0, "undefined" != typeof b && (b.exports = f)
    }, {}],
    7: [function(a, b) {
        b.exports = {
            author: {
                name: "Mapbox"
            },
            name: "mapbox.js",
            description: "mapbox javascript api",
            version: "3.1.1",
            homepage: "http://mapbox.com/",
            repository: {
                type: "git",
                url: "git://github.com/mapbox/mapbox.js.git"
            },
            main: "src/index.js",
            dependencies: {
                corslite: "0.0.6",
                isarray: "0.0.1",
                leaflet: "1.0.2",
                mustache: "2.2.1",
                "sanitize-caja": "0.1.4"
            },
            scripts: {
                test: "eslint --no-eslintrc -c .eslintrc src && phantomjs node_modules/mocha-phantomjs-core/mocha-phantomjs-core.js test/index.html"
            },
            license: "BSD-3-Clause",
            devDependencies: {
                browserify: "^13.0.0",
                "clean-css": "~2.0.7",
                "cz-conventional-changelog": "1.2.0",
                eslint: "^0.23.0",
                "expect.js": "0.3.1",
                happen: "0.1.3",
                "leaflet-fullscreen": "0.0.4",
                "leaflet-hash": "0.2.1",
                marked: "~0.3.0",
                minifyify: "^6.1.0",
                minimist: "0.0.5",
                mocha: "2.4.5",
                "mocha-phantomjs-core": "2.0.1",
                "phantomjs-prebuilt": "2.1.12",
                sinon: "1.10.2"
            },
            optionalDependencies: {},
            engines: {
                node: "*"
            },
            config: {
                commitizen: {
                    path: "./node_modules/cz-conventional-changelog"
                }
            },
            gitHead: "8a52b388a21e7de418c2a61448bf33107c5db766",
            bugs: {
                url: "https://github.com/mapbox/mapbox.js/issues"
            },
            _id: "mapbox.js@3.1.1",
            _shasum: "4ebe41bd89b533f507fb3455f4f490e417ea1e8f",
            _from: "mapbox.js@^3.1.1",
            _npmVersion: "4.1.2",
            _nodeVersion: "7.7.1",
            _npmUser: {
                name: "tristen",
                email: "tristen.brown@gmail.com"
            },
            dist: {
                shasum: "4ebe41bd89b533f507fb3455f4f490e417ea1e8f",
                tarball: "https://registry.npmjs.org/mapbox.js/-/mapbox.js-3.1.1.tgz"
            },
            maintainers: [{
                email: "mollylloyd@gmail.com",
                name: "mollymerp"
            }, {
                email: "aruna@mapbox.com",
                name: "arunasank"
            }, {
                email: "amyleewalton@gmail.com",
                name: "amyleew"
            }, {
                email: "accounts@mapbox.com",
                name: "mapbox-admin"
            }, {
                email: "irwin@mapbox.com",
                name: "mtirwin"
            }, {
                email: "mxn@1ec5.org",
                name: "1ec5"
            }, {
                email: "andrew@mapbox.com",
                name: "apendleton"
            }, {
                email: "ulsh@mapbox.com",
                name: "alulsh"
            }, {
                email: "karen@mapbox.com",
                name: "karenzshea"
            }, {
                email: "spam@freenerd.de",
                name: "freenerd"
            }, {
                email: "flippmoke@gmail.com",
                name: "flippmoke"
            }, {
                email: "wb@bergwerk-gis.at",
                name: "bergwerkgis"
            }, {
                email: "patrick@mapbox.com",
                name: "themarex"
            }, {
                email: "emily@mapbox.com",
                name: "emilymcafee"
            }, {
                email: "jake@jakepruitt.com",
                name: "jrpruit1"
            }, {
                email: "tlee@mapbox.com",
                name: "sbma44"
            }, {
                email: "scothis@gmail.com",
                name: "scothis"
            }, {
                email: "lyzi@mapbox.com",
                name: "lyzidiamond"
            }, {
                email: "bryan@mapbox.com",
                name: "bhousel"
            }, {
                email: "mcwhittemore@gmail.com",
                name: "mcwhittemore"
            }, {
                email: "tristen.brown@gmail.com",
                name: "tristen"
            }, {
                email: "ansis.brammanis@gmail.com",
                name: "ansis"
            }, {
                email: "young@mapbox.com",
                name: "yhahn"
            }, {
                email: "will@mapbox.com",
                name: "willwhite"
            }, {
                email: "john.firebaugh@gmail.com",
                name: "jfirebaugh"
            }, {
                email: "agafonkin@gmail.com",
                name: "mourner"
            }, {
                email: "sean@mapbox.com",
                name: "sgillies"
            }, {
                email: "lauren@mapbox.com",
                name: "lbud"
            }, {
                email: "bobby@mapbox.com",
                name: "bsudekum"
            }, {
                email: "damon@mapbox.com",
                name: "dnomadb"
            }, {
                email: "ian.villeda@gmail.com",
                name: "ian29"
            }, {
                email: "nicki@mapbox.com",
                name: "nickidlugash"
            }, {
                email: "saman@mapbox.com",
                name: "samanbb"
            }, {
                email: "aj@mapbox.com",
                name: "ajashton"
            }, {
                email: "alex@mapbox.com",
                name: "lxbarth"
            }, {
                email: "ian@mapbox.com",
                name: "ianshward"
            }, {
                email: "nicholas.ingalls@gmail.com",
                name: "ingalls"
            }, {
                email: "jeff@miccolis.net",
                name: "miccolis"
            }, {
                email: "carol@mapbox.com",
                name: "gretacb"
            }, {
                email: "morgan.herlocker@gmail.com",
                name: "morganherlocker"
            }, {
                email: "ryan.clark.j@gmail.com",
                name: "rclark"
            }, {
                email: "dane@mapbox.com",
                name: "springmeyer"
            }, {
                email: "mail@kkaefer.com",
                name: "kkaefer"
            }],
            _npmOperationalInternal: {
                host: "s3://npm-registry-packages",
                tmp: "tmp/mapbox.js-3.1.1.tgz_1495570579259_0.4753663376905024"
            },
            directories: {},
            _resolved: "https://registry.npmjs.org/mapbox.js/-/mapbox.js-3.1.1.tgz"
        }
    }, {}],
    8: [function(a, b) {
        "use strict";
        b.exports = {
            HTTP_URL: "http://a.tiles.mapbox.com/v4",
            HTTPS_URL: "https://a.tiles.mapbox.com/v4",
            FORCE_HTTPS: !1,
            REQUIRE_ACCESS_TOKEN: !0
        }
    }, {}],
    9: [function(a, b) {
        "use strict";
        var c = a("./util"),
            d = a("./format_url"),
            e = a("./request"),
            f = a("./marker"),
            g = a("./simplestyle"),
            h = L.FeatureGroup.extend({
                options: {
                    filter: function() {
                        return !0
                    },
                    sanitizer: a("sanitize-caja"),
                    style: g.style,
                    popupOptions: {
                        closeButton: !1
                    }
                },
                initialize: function(a, b) {
                    L.setOptions(this, b), this._layers = {}, "string" == typeof a ? c.idUrl(a, this) : a && "object" == typeof a && this.setGeoJSON(a)
                },
                setGeoJSON: function(a) {
                    return this._geojson = a, this.clearLayers(), this._initialize(a), this
                },
                getGeoJSON: function() {
                    return this._geojson
                },
                loadURL: function(a) {
                    return this._request && "abort" in this._request && this._request.abort(), this._request = e(a, L.bind(function(b, d) {
                        this._request = null, b && "abort" !== b.type ? (c.log("could not load features at " + a), this.fire("error", {
                            error: b
                        })) : d && (this.setGeoJSON(d), this.fire("ready"))
                    }, this)), this
                },
                loadID: function(a) {
                    return this.loadURL(d("/v4/" + a + "/features.json", this.options.accessToken))
                },
                setFilter: function(a) {
                    return this.options.filter = a, this._geojson && (this.clearLayers(), this._initialize(this._geojson)), this
                },
                getFilter: function() {
                    return this.options.filter
                },
                _initialize: function(a) {
                    var b, c, d = L.Util.isArray(a) ? a : a.features;
                    if (d)
                        for (b = 0, c = d.length; c > b; b++)(d[b].geometries || d[b].geometry || d[b].features) && this._initialize(d[b]);
                    else if (this.options.filter(a)) {
                        var e = {
                                accessToken: this.options.accessToken
                            },
                            h = this.options.pointToLayer || function(a, b) {
                                return f.style(a, b, e)
                            },
                            i = L.GeoJSON.geometryToLayer(a, {
                                pointToLayer: h
                            }),
                            j = f.createPopup(a, this.options.sanitizer),
                            k = this.options.style,
                            l = k === g.style;
                        !(k && "setStyle" in i) || l && (i instanceof L.Circle || i instanceof L.CircleMarker) || ("function" == typeof k && (k = k(a)), i.setStyle(k)), i.feature = a, j && i.bindPopup(j, this.options.popupOptions), this.addLayer(i)
                    }
                }
            });
        b.exports.FeatureLayer = h, b.exports.featureLayer = function(a, b) {
            return new h(a, b)
        }
    }, {
        "./format_url": 11,
        "./marker": 24,
        "./request": 25,
        "./simplestyle": 27,
        "./util": 30,
        "sanitize-caja": 5
    }],
    10: [function(a, b) {
        "use strict";
        var c = L.Class.extend({
            includes: L.Mixin.Events,
            data: {},
            record: function(a) {
                L.extend(this.data, a), this.fire("change")
            }
        });
        b.exports = new c
    }, {}],
    11: [function(a, b) {
        "use strict";
        var c = a("./config"),
            d = a("../package.json").version;
        b.exports = function(a, b) {
            if (b = b || L.mapbox.accessToken, !b && c.REQUIRE_ACCESS_TOKEN) throw new Error("An API access token is required to use Mapbox.js. See https://www.mapbox.com/mapbox.js/api/v" + d + "/api-access-tokens/");
            var e = "https:" === document.location.protocol || c.FORCE_HTTPS ? c.HTTPS_URL : c.HTTP_URL;
            if (e = e.replace(/\/v4$/, ""), e += a, c.REQUIRE_ACCESS_TOKEN) {
                if ("s" === b[0]) throw new Error("Use a public access token (pk.*) with Mapbox.js, not a secret access token (sk.*). See https://www.mapbox.com/mapbox.js/api/v" + d + "/api-access-tokens/");
                e += -1 !== e.indexOf("?") ? "&access_token=" : "?access_token=", e += b
            }
            return e
        }, b.exports.tileJSON = function(a, c) {
            if (0 === a.indexOf("mapbox://styles")) throw new Error("Styles created with Mapbox Studio need to be used with L.mapbox.styleLayer, not L.mapbox.tileLayer");
            if (-1 !== a.indexOf("/")) return a;
            var d = b.exports("/v4/" + a + ".json", c);
            return 0 === d.indexOf("https") && (d += "&secure"), d
        }, b.exports.style = function(a, c) {
            if (-1 === a.indexOf("mapbox://styles/")) throw new Error("Incorrectly formatted Mapbox style at " + a);
            var d = a.split("mapbox://styles/")[1],
                e = b.exports("/styles/v1/" + d, c).replace("http://", "https://");
            return e
        }
    }, {
        "../package.json": 7,
        "./config": 8
    }],
    12: [function(a, b) {
        "use strict";
        var c = a("isarray"),
            d = a("./util"),
            e = a("./format_url"),
            f = a("./feedback"),
            g = a("./request");
        b.exports = function(a, b) {
            function h(a, b) {
                var c = Math.pow(10, b);
                return a.lat = Math.round(a.lat * c) / c, a.lng = Math.round(a.lng * c) / c, a
            }
            b || (b = {});
            var i = {};
            return d.strict(a, "string"), -1 === a.indexOf("/") && (a = e("/geocoding/v5/" + a + "/{query}.json", b.accessToken, 5)), i.getURL = function() {
                return a
            }, i.queryURL = function(a) {
                var b = !(c(a) || "string" == typeof a),
                    d = b ? a.query : a;
                if (c(d)) {
                    for (var e = [], g = 0; g < d.length; g++) e[g] = encodeURIComponent(d[g]);
                    d = e.join(";")
                } else d = encodeURIComponent(d);
                f.record({
                    geocoding: d
                });
                var j = L.Util.template(i.getURL(), {
                    query: d
                });
                if (b) {
                    if (a.types && (j += c(a.types) ? "&types=" + a.types.join() : "&types=" + a.types), a.country && (j += c(a.country) ? "&country=" + a.country.join() : "&country=" + a.country), a.bbox && (j += c(a.bbox) ? "&bbox=" + a.bbox.join() : "&bbox=" + a.bbox), a.proximity) {
                        var k = h(L.latLng(a.proximity), 3);
                        j += "&proximity=" + k.lng + "," + k.lat
                    }
                    "boolean" == typeof a.autocomplete && (j += "&autocomplete=" + a.autocomplete)
                }
                return j
            }, i.query = function(a, b) {
                return d.strict(b, "function"), g(i.queryURL(a), function(a, c) {
                    if (c && (c.length || c.features)) {
                        var e = {
                            results: c
                        };
                        c.features && c.features.length && (e.latlng = [c.features[0].center[1], c.features[0].center[0]], c.features[0].bbox && (e.bounds = c.features[0].bbox, e.lbounds = d.lbounds(e.bounds))), b(null, e)
                    } else b(a || !0)
                }), i
            }, i.reverseQuery = function(a, b) {
                function c(a) {
                    var b;
                    return b = void 0 !== a.lat && void 0 !== a.lng ? L.latLng(a.lat, a.lng) : void 0 !== a.lat && void 0 !== a.lon ? L.latLng(a.lat, a.lon) : L.latLng(a[1], a[0]), b = h(b, 5), b.lng + "," + b.lat
                }
                var d = "";
                if (a.length && a[0].length) {
                    for (var e = 0, f = []; e < a.length; e++) f.push(c(a[e]));
                    d = f.join(";")
                } else d = c(a);
                return g(i.queryURL(d), function(a, c) {
                    b(a, c)
                }), i
            }, i
        }
    }, {
        "./feedback": 10,
        "./format_url": 11,
        "./request": 25,
        "./util": 30,
        isarray: 2
    }],
    13: [function(a, b) {
        "use strict";
        var c = a("./geocoder"),
            d = a("./util"),
            e = L.Control.extend({
                includes: L.Mixin.Events,
                options: {
                    proximity: !0,
                    position: "topleft",
                    pointZoom: 16,
                    keepOpen: !1,
                    autocomplete: !1,
                    queryOptions: {}
                },
                initialize: function(a, b) {
                    L.Util.setOptions(this, b), this.setURL(a), this._updateSubmit = L.bind(this._updateSubmit, this), this._updateAutocomplete = L.bind(this._updateAutocomplete, this), this._chooseResult = L.bind(this._chooseResult, this)
                },
                setURL: function(a) {
                    return this.geocoder = c(a, {
                        accessToken: this.options.accessToken
                    }), this
                },
                getURL: function() {
                    return this.geocoder.getURL()
                },
                setID: function(a) {
                    return this.setURL(a)
                },
                setTileJSON: function(a) {
                    return this.setURL(a.geocoder)
                },
                _toggle: function(a) {
                    a && L.DomEvent.stop(a), L.DomUtil.hasClass(this._container, "active") ? (L.DomUtil.removeClass(this._container, "active"), this._results.innerHTML = "", this._input.blur()) : (L.DomUtil.addClass(this._container, "active"), this._input.focus(), this._input.select())
                },
                _closeIfOpen: function() {
                    L.DomUtil.hasClass(this._container, "active") && !this.options.keepOpen && (L.DomUtil.removeClass(this._container, "active"), this._results.innerHTML = "", this._input.blur())
                },
                onAdd: function(a) {
                    var b = L.DomUtil.create("div", "leaflet-control-mapbox-geocoder leaflet-bar leaflet-control"),
                        c = L.DomUtil.create("a", "leaflet-control-mapbox-geocoder-toggle mapbox-icon mapbox-icon-geocoder", b),
                        d = L.DomUtil.create("div", "leaflet-control-mapbox-geocoder-results", b),
                        e = L.DomUtil.create("div", "leaflet-control-mapbox-geocoder-wrap", b),
                        f = L.DomUtil.create("form", "leaflet-control-mapbox-geocoder-form", e),
                        g = L.DomUtil.create("input", "", f);
                    return c.href = "#", c.innerHTML = "&nbsp;", g.type = "text", g.setAttribute("placeholder", "Search"), L.DomEvent.addListener(f, "submit", this._geocode, this), L.DomEvent.addListener(g, "keyup", this._autocomplete, this), L.DomEvent.disableClickPropagation(b), this._map = a, this._results = d, this._input = g, this._form = f, this.options.keepOpen ? L.DomUtil.addClass(b, "active") : (this._map.on("click", this._closeIfOpen, this), L.DomEvent.addListener(c, "click", this._toggle, this)), b
                },
                _updateSubmit: function(a, b) {
                    if (L.DomUtil.removeClass(this._container, "searching"), this._results.innerHTML = "", a || !b) this.fire("error", {
                        error: a
                    });
                    else {
                        var c = [];
                        b.results && b.results.features && (c = b.results.features), 1 === c.length ? (this.fire("autoselect", {
                            feature: c[0]
                        }), this.fire("found", {
                            results: b.results
                        }), this._chooseResult(c[0]), this._closeIfOpen()) : c.length > 1 ? (this.fire("found", {
                            results: b.results
                        }), this._displayResults(c)) : (this.fire("notfound"), this._displayResults(c))
                    }
                },
                _updateAutocomplete: function(a, b) {
                    if (this._results.innerHTML = "", a || !b) this.fire("error", {
                        error: a
                    });
                    else {
                        var c = [];
                        b.results && b.results.features && (c = b.results.features), c.length ? this.fire("found", {
                            results: b.results
                        }) : this.fire("notfound"), this._displayResults(c)
                    }
                },
                _displayResults: function(a) {
                    for (var b = 0, c = Math.min(a.length, 5); c > b; b++) {
                        var d = a[b],
                            e = d.place_name;
                        if (e.length) {
                            var f = L.DomUtil.create("a", "", this._results),
                                g = "innerText" in f ? "innerText" : "textContent";
                            f[g] = e, f.setAttribute("title", e), f.href = "#", L.bind(function(a) {
                                L.DomEvent.addListener(f, "click", function(b) {
                                    this._chooseResult(a), L.DomEvent.stop(b), this.fire("select", {
                                        feature: a
                                    })
                                }, this)
                            }, this)(d)
                        }
                    }
                    if (a.length > 5) {
                        var h = L.DomUtil.create("span", "", this._results);
                        h.innerHTML = "Top 5 of " + a.length + "  results"
                    }
                },
                _chooseResult: function(a) {
                    a.bbox ? this._map.fitBounds(d.lbounds(a.bbox)) : a.center && this._map.setView([a.center[1], a.center[0]], void 0 === this._map.getZoom() ? this.options.pointZoom : Math.max(this._map.getZoom(), this.options.pointZoom))
                },
                _geocode: function(a) {
                    return L.DomEvent.preventDefault(a), "" === this._input.value ? this._updateSubmit() : (L.DomUtil.addClass(this._container, "searching"), this.geocoder.query(L.Util.extend({
                        query: this._input.value,
                        proximity: this.options.proximity ? this._map.getCenter() : !1
                    }, this.options.queryOptions), this._updateSubmit), void 0)
                },
                _autocomplete: function() {
                    return this.options.autocomplete ? "" === this._input.value ? this._updateAutocomplete() : (this.geocoder.query(L.Util.extend({
                        query: this._input.value,
                        proximity: this.options.proximity ? this._map.getCenter() : !1
                    }, this.options.queryOptions), this._updateAutocomplete), void 0) : void 0
                }
            });
        b.exports.GeocoderControl = e, b.exports.geocoderControl = function(a, b) {
            return new e(a, b)
        }
    }, {
        "./geocoder": 12,
        "./util": 30
    }],
    14: [function(a, b) {
        "use strict";

        function c(a) {
            return a >= 93 && a--, a >= 35 && a--, a - 32
        }
        b.exports = function(a) {
            return function(b, d) {
                if (a) {
                    var e = c(a.grid[d].charCodeAt(b)),
                        f = a.keys[e];
                    return a.data[f]
                }
            }
        }
    }, {}],
    15: [function(a, b) {
        "use strict";
        var c = a("./util"),
            d = a("mustache"),
            e = L.Control.extend({
                options: {
                    pinnable: !0,
                    follow: !1,
                    sanitizer: a("sanitize-caja"),
                    touchTeaser: !0,
                    location: !0
                },
                _currentContent: "",
                _pinned: !1,
                initialize: function(a, b) {
                    L.Util.setOptions(this, b), c.strict_instance(a, L.Class, "L.mapbox.gridLayer"), this._layer = a
                },
                setTemplate: function(a) {
                    return c.strict(a, "string"), this.options.template = a, this
                },
                _template: function(a, b) {
                    if (b) {
                        var c = this.options.template || this._layer.getTileJSON().template;
                        if (c) {
                            var e = {};
                            return e["__" + a + "__"] = !0, this.options.sanitizer(d.to_html(c, L.extend(e, b)))
                        }
                    }
                },
                _show: function(a, b) {
                    a !== this._currentContent && (this._currentContent = a, this.options.follow ? (this._popup.setContent(a).setLatLng(b.latLng), this._map._popup !== this._popup && this._popup.openOn(this._map)) : (this._container.style.display = "block", this._contentWrapper.innerHTML = a))
                },
                hide: function() {
                    return this._pinned = !1, this._currentContent = "", this._map.closePopup(), this._container.style.display = "none", this._contentWrapper.innerHTML = "", L.DomUtil.removeClass(this._container, "closable"), this
                },
                _mouseover: function(a) {
                    if (a.data ? L.DomUtil.addClass(this._map._container, "map-clickable") : L.DomUtil.removeClass(this._map._container, "map-clickable"), !this._pinned) {
                        var b = this._template("teaser", a.data);
                        b ? this._show(b, a) : this.hide()
                    }
                },
                _mousemove: function(a) {
                    this._pinned || this.options.follow && this._popup.setLatLng(a.latLng)
                },
                _navigateTo: function(a) {
                    window.top.location.href = a
                },
                _click: function(a) {
                    var b = this._template("location", a.data);
                    if (this.options.location && b && 0 === b.search(/^https?:/)) return this._navigateTo(this._template("location", a.data));
                    if (this.options.pinnable) {
                        var c = this._template("full", a.data);
                        !c && this.options.touchTeaser && L.Browser.touch && (c = this._template("teaser", a.data)), c ? (L.DomUtil.addClass(this._container, "closable"), this._pinned = !0, this._show(c, a)) : this._pinned && (L.DomUtil.removeClass(this._container, "closable"), this._pinned = !1, this.hide())
                    }
                },
                _onPopupClose: function() {
                    this._currentContent = null, this._pinned = !1
                },
                _createClosebutton: function(a, b) {
                    var c = L.DomUtil.create("a", "close", a);
                    return c.innerHTML = "close", c.href = "#", c.title = "close", L.DomEvent.on(c, "click", L.DomEvent.stopPropagation).on(c, "mousedown", L.DomEvent.stopPropagation).on(c, "dblclick", L.DomEvent.stopPropagation).on(c, "click", L.DomEvent.preventDefault).on(c, "click", b, this), c
                },
                onAdd: function(a) {
                    this._map = a;
                    var b = "leaflet-control-grid map-tooltip",
                        c = L.DomUtil.create("div", b),
                        d = L.DomUtil.create("div", "map-tooltip-content");
                    return c.style.display = "none", this._createClosebutton(c, this.hide), c.appendChild(d), this._contentWrapper = d, this._popup = new L.Popup({
                        autoPan: !1,
                        closeOnClick: !1
                    }), a.on("popupclose", this._onPopupClose, this), L.DomEvent.disableClickPropagation(c).addListener(c, "mousewheel", L.DomEvent.stopPropagation), this._layer.on("mouseover", this._mouseover, this).on("mousemove", this._mousemove, this).on("click", this._click, this), c
                },
                onRemove: function(a) {
                    a.off("popupclose", this._onPopupClose, this), this._layer.off("mouseover", this._mouseover, this).off("mousemove", this._mousemove, this).off("click", this._click, this)
                }
            });
        b.exports.GridControl = e, b.exports.gridControl = function(a, b) {
            return new e(a, b)
        }
    }, {
        "./util": 30,
        mustache: 4,
        "sanitize-caja": 5
    }],
    16: [function(a, b) {
        "use strict";
        var c = a("./util"),
            d = a("./request"),
            e = a("./grid"),
            f = L.Layer.extend({
                includes: [a("./load_tilejson")],
                options: {
                    template: function() {
                        return ""
                    }
                },
                _mouseOn: null,
                _tilejson: {},
                _cache: {},
                initialize: function(a, b) {
                    L.Util.setOptions(this, b), this._loadTileJSON(a)
                },
                _setTileJSON: function(a) {
                    return c.strict(a, "object"), L.extend(this.options, {
                        grids: a.grids,
                        minZoom: a.minzoom,
                        maxZoom: a.maxzoom,
                        bounds: a.bounds && c.lbounds(a.bounds)
                    }), this._tilejson = a, this._cache = {}, this._update(), this
                },
                getTileJSON: function() {
                    return this._tilejson
                },
                active: function() {
                    return !!(this._map && this.options.grids && this.options.grids.length)
                },
                onAdd: function(a) {
                    this._map = a, this._update(), this._map.on("click", this._click, this).on("mousemove", this._move, this).on("moveend", this._update, this)
                },
                onRemove: function() {
                    this._map.off("click", this._click, this).off("mousemove", this._move, this).off("moveend", this._update, this)
                },
                getData: function(a, b) {
                    if (this.active()) {
                        var c = this._map,
                            d = c.project(a.wrap()),
                            e = 256,
                            f = 4,
                            g = Math.floor(d.x / e),
                            h = Math.floor(d.y / e),
                            i = c.options.crs.scale(c.getZoom()) / e;
                        return g = (g + i) % i, h = (h + i) % i, this._getTile(c.getZoom(), g, h, function(a) {
                            var c = Math.floor((d.x - g * e) / f),
                                i = Math.floor((d.y - h * e) / f);
                            b(a(c, i))
                        }), this
                    }
                },
                _click: function(a) {
                    this.getData(a.latlng, L.bind(function(b) {
                        this.fire("click", {
                            latLng: a.latlng,
                            data: b
                        })
                    }, this))
                },
                _move: function(a) {
                    this.getData(a.latlng, L.bind(function(b) {
                        b !== this._mouseOn ? (this._mouseOn && this.fire("mouseout", {
                            latLng: a.latlng,
                            data: this._mouseOn
                        }), this.fire("mouseover", {
                            latLng: a.latlng,
                            data: b
                        }), this._mouseOn = b) : this.fire("mousemove", {
                            latLng: a.latlng,
                            data: b
                        })
                    }, this))
                },
                _getTileURL: function(a) {
                    var b = this.options.grids,
                        c = (a.x + a.y) % b.length,
                        d = b[c];
                    return L.Util.template(d, a)
                },
                _update: function() {
                    if (this.active()) {
                        var a = this._map.getPixelBounds(),
                            b = this._map.getZoom(),
                            c = 256;
                        if (!(b > this.options.maxZoom || b < this.options.minZoom))
                            for (var d = L.bounds(a.min.divideBy(c)._floor(), a.max.divideBy(c)._floor()), e = this._map.options.crs.scale(b) / c, f = d.min.x; f <= d.max.x; f++)
                                for (var g = d.min.y; g <= d.max.y; g++) this._getTile(b, (f % e + e) % e, (g % e + e) % e)
                    }
                },
                _getTile: function(a, b, c, f) {
                    var g = a + "_" + b + "_" + c,
                        h = L.point(b, c);
                    if (h.z = a, this._tileShouldBeLoaded(h)) {
                        if (g in this._cache) {
                            if (!f) return;
                            return "function" == typeof this._cache[g] ? f(this._cache[g]) : this._cache[g].push(f), void 0
                        }
                        this._cache[g] = [], f && this._cache[g].push(f), d(this._getTileURL(h), L.bind(function(a, b) {
                            var c = this._cache[g];
                            this._cache[g] = e(b);
                            for (var d = 0; d < c.length; ++d) c[d](this._cache[g])
                        }, this))
                    }
                },
                _tileShouldBeLoaded: function(a) {
                    if (a.z > this.options.maxZoom || a.z < this.options.minZoom) return !1;
                    if (this.options.bounds) {
                        var b = 256,
                            c = a.multiplyBy(b),
                            d = c.add(new L.Point(b, b)),
                            e = this._map.unproject(c),
                            f = this._map.unproject(d),
                            g = new L.LatLngBounds([e, f]);
                        if (!this.options.bounds.intersects(g)) return !1
                    }
                    return !0
                }
            });
        b.exports.GridLayer = f, b.exports.gridLayer = function(a, b) {
            return new f(a, b)
        }
    }, {
        "./grid": 14,
        "./load_tilejson": 20,
        "./request": 25,
        "./util": 30
    }],
    17: [function(a, b) {
        "use strict";
        var c = a("./leaflet");
        a("./mapbox"), b.exports = c
    }, {
        "./leaflet": 18,
        "./mapbox": 22
    }],
    18: [function(a, b) {
        b.exports = window.L = a("leaflet/dist/leaflet-src")
    }, {
        "leaflet/dist/leaflet-src": 3
    }],
    19: [function(a, b) {
        "use strict";
        var c = L.Control.extend({
            options: {
                position: "bottomright",
                sanitizer: a("sanitize-caja")
            },
            initialize: function(a) {
                L.setOptions(this, a), this._legends = {}
            },
            onAdd: function() {
                return this._container = L.DomUtil.create("div", "map-legends wax-legends"), L.DomEvent.disableClickPropagation(this._container), this._update(), this._container
            },
            addLegend: function(a) {
                return a ? (this._legends[a] || (this._legends[a] = 0), this._legends[a]++, this._update()) : this
            },
            removeLegend: function(a) {
                return a ? (this._legends[a] && this._legends[a]--, this._update()) : this
            },
            _update: function() {
                if (!this._map) return this;
                this._container.innerHTML = "";
                var a = "none";
                for (var b in this._legends)
                    if (this._legends.hasOwnProperty(b) && this._legends[b]) {
                        var c = L.DomUtil.create("div", "map-legend wax-legend", this._container);
                        c.innerHTML = this.options.sanitizer(b), a = "block"
                    }
                return this._container.style.display = a, this
            }
        });
        b.exports.LegendControl = c, b.exports.legendControl = function(a) {
            return new c(a)
        }
    }, {
        "sanitize-caja": 5
    }],
    20: [function(a, b) {
        "use strict";
        var c = a("./request"),
            d = a("./format_url"),
            e = a("./util");
        b.exports = {
            _loadTileJSON: function(a) {
                "string" == typeof a ? (a = d.tileJSON(a, this.options && this.options.accessToken), c(a, L.bind(function(b, c) {
                    b ? (e.log("could not load TileJSON at " + a), this.fire("error", {
                        error: b
                    })) : c && (this._setTileJSON(c), this.fire("ready"))
                }, this))) : a && "object" == typeof a && this._setTileJSON(a)
            }
        }
    }, {
        "./format_url": 11,
        "./request": 25,
        "./util": 30
    }],
    21: [function(a, b) {
        "use strict";

        function c(a, b) {
            return !b || a.accessToken ? a : L.extend({
                accessToken: b
            }, a)
        }
        var d = a("./tile_layer").tileLayer,
            e = a("./feature_layer").featureLayer,
            f = a("./grid_layer").gridLayer,
            g = a("./grid_control").gridControl,
            h = a("./share_control").shareControl,
            i = a("./legend_control").legendControl,
            j = a("./mapbox_logo").mapboxLogoControl,
            k = a("./feedback"),
            l = L.Map.extend({
                includes: [a("./load_tilejson")],
                options: {
                    tileLayer: {},
                    featureLayer: {},
                    gridLayer: {},
                    legendControl: {},
                    gridControl: {},
                    shareControl: !1,
                    sanitizer: a("sanitize-caja")
                },
                _tilejson: {},
                initialize: function(a, b, l) {
                    if (L.Map.prototype.initialize.call(this, a, L.extend({}, L.Map.prototype.options, l)), this.attributionControl) {
                        this.attributionControl.setPrefix("");
                        var m = this.options.attributionControl.compact;
                        (m || m !== !1 && this._container.offsetWidth <= 640) && L.DomUtil.addClass(this.attributionControl._container, "leaflet-compact-attribution"), void 0 === m && this.on("resize", function() {
                            this._container.offsetWidth > 640 ? L.DomUtil.removeClass(this.attributionControl._container, "leaflet-compact-attribution") : L.DomUtil.addClass(this.attributionControl._container, "leaflet-compact-attribution")
                        })
                    }
                    this.options.tileLayer && (this.tileLayer = d(void 0, c(this.options.tileLayer, this.options.accessToken)), this.addLayer(this.tileLayer)), this.options.featureLayer && (this.featureLayer = e(void 0, c(this.options.featureLayer, this.options.accessToken)), this.addLayer(this.featureLayer)), this.options.gridLayer && (this.gridLayer = f(void 0, c(this.options.gridLayer, this.options.accessToken)), this.addLayer(this.gridLayer)), this.options.gridLayer && this.options.gridControl && (this.gridControl = g(this.gridLayer, this.options.gridControl), this.addControl(this.gridControl)), this.options.legendControl && (this.legendControl = i(this.options.legendControl), this.addControl(this.legendControl)), this.options.shareControl && (this.shareControl = h(void 0, c(this.options.shareControl, this.options.accessToken)), this.addControl(this.shareControl)), this._mapboxLogoControl = j(this.options.mapboxLogoControl), this.addControl(this._mapboxLogoControl), this._loadTileJSON(b), this.on("layeradd", this._onLayerAdd, this).on("layerremove", this._onLayerRemove, this).on("moveend", this._updateMapFeedbackLink, this), this.whenReady(function() {
                        k.on("change", this._updateMapFeedbackLink, this)
                    }), this.on("unload", function() {
                        k.off("change", this._updateMapFeedbackLink, this)
                    })
                },
                _setTileJSON: function(a) {
                    return this._tilejson = a, this._initialize(a), this
                },
                getTileJSON: function() {
                    return this._tilejson
                },
                _initialize: function(a) {
                    if (this.tileLayer && (this.tileLayer._setTileJSON(a), this._updateLayer(this.tileLayer)), this.featureLayer && !this.featureLayer.getGeoJSON() && a.data && a.data[0] && this.featureLayer.loadURL(a.data[0]), this.gridLayer && (this.gridLayer._setTileJSON(a), this._updateLayer(this.gridLayer)), this.legendControl && a.legend && this.legendControl.addLegend(a.legend), this.shareControl && this.shareControl._setTileJSON(a), this._mapboxLogoControl._setTileJSON(a), !this._loaded && a.center) {
                        var b = void 0 !== this.getZoom() ? this.getZoom() : a.center[2],
                            c = L.latLng(a.center[1], a.center[0]);
                        this.setView(c, b)
                    }
                },
                _updateMapFeedbackLink: function() {
                    if (this._controlContainer.getElementsByClassName) {
                        var a = this._controlContainer.getElementsByClassName("mapbox-improve-map");
                        if (a.length && this._loaded) {
                            var b = this.getCenter().wrap(),
                                c = this._tilejson || {},
                                d = c.id || "",
                                e = "#" + d + "/" + b.lng.toFixed(3) + "/" + b.lat.toFixed(3) + "/" + this.getZoom();
                            for (var f in k.data) e += "/" + f + "=" + k.data[f];
                            for (var g = 0; g < a.length; g++) a[g].hash = e
                        }
                    }
                },
                _onLayerAdd: function(a) {
                    "on" in a.layer && a.layer.on("ready", this._onLayerReady, this), window.setTimeout(L.bind(this._updateMapFeedbackLink, this), 0)
                },
                _onLayerRemove: function(a) {
                    "on" in a.layer && a.layer.off("ready", this._onLayerReady, this), window.setTimeout(L.bind(this._updateMapFeedbackLink, this), 0)
                },
                _onLayerReady: function(a) {
                    this._updateLayer(a.target)
                },
                _updateLayer: function(a) {
                    a.options && (this.attributionControl && this._loaded && a.getAttribution && this.attributionControl.addAttribution(a.getAttribution()), L.stamp(a) in this._zoomBoundLayers || !a.options.maxZoom && !a.options.minZoom || (this._zoomBoundLayers[L.stamp(a)] = a), this._updateMapFeedbackLink(), this._updateZoomLevels())
                }
            });
        b.exports.Map = l, b.exports.map = function(a, b, c) {
            return new l(a, b, c)
        }
    }, {
        "./feature_layer": 9,
        "./feedback": 10,
        "./grid_control": 15,
        "./grid_layer": 16,
        "./legend_control": 19,
        "./load_tilejson": 20,
        "./mapbox_logo": 23,
        "./share_control": 26,
        "./tile_layer": 29,
        "sanitize-caja": 5
    }],
    22: [function(a, b) {
        "use strict";
        var c = a("./geocoder_control"),
            d = a("./grid_control"),
            e = a("./feature_layer"),
            f = a("./legend_control"),
            g = a("./share_control"),
            h = a("./tile_layer"),
            i = a("./map"),
            j = a("./grid_layer"),
            k = a("./style_layer");
        L.mapbox = b.exports = {
            VERSION: a("../package.json").version,
            geocoder: a("./geocoder"),
            marker: a("./marker"),
            simplestyle: a("./simplestyle"),
            tileLayer: h.tileLayer,
            TileLayer: h.TileLayer,
            styleLayer: k.styleLayer,
            StyleLayer: k.StyleLayer,
            shareControl: g.shareControl,
            ShareControl: g.ShareControl,
            legendControl: f.legendControl,
            LegendControl: f.LegendControl,
            geocoderControl: c.geocoderControl,
            GeocoderControl: c.GeocoderControl,
            gridControl: d.gridControl,
            GridControl: d.GridControl,
            gridLayer: j.gridLayer,
            GridLayer: j.GridLayer,
            featureLayer: e.featureLayer,
            FeatureLayer: e.FeatureLayer,
            map: i.map,
            Map: i.Map,
            config: a("./config"),
            sanitize: a("sanitize-caja"),
            template: a("mustache").to_html,
            feedback: a("./feedback")
        }, window.L.Icon.Default.imagePath = ("https:" === document.location.protocol || "http:" === document.location.protocol ? "" : "https:") + "//api.tiles.mapbox.com/mapbox.js/v" + a("../package.json").version + "/images/"
    }, {
        "../package.json": 7,
        "./config": 8,
        "./feature_layer": 9,
        "./feedback": 10,
        "./geocoder": 12,
        "./geocoder_control": 13,
        "./grid_control": 15,
        "./grid_layer": 16,
        "./legend_control": 19,
        "./map": 21,
        "./marker": 24,
        "./share_control": 26,
        "./simplestyle": 27,
        "./style_layer": 28,
        "./tile_layer": 29,
        mustache: 4,
        "sanitize-caja": 5
    }],
    23: [function(a, b) {
        "use strict";
        var c = L.Control.extend({
            options: {
                position: "bottomleft"
            },
            initialize: function(a) {
                L.setOptions(this, a)
            },
            onAdd: function() {
                return this._container = L.DomUtil.create("div", "mapbox-logo"), this._container
            },
            _setTileJSON: function(a) {
                a.mapbox_logo && L.DomUtil.addClass(this._container, "mapbox-logo-true")
            }
        });
        b.exports.MapboxLogoControl = c, b.exports.mapboxLogoControl = function(a) {
            return new c(a)
        }
    }, {}],
    24: [function(a, b) {
        "use strict";

        function c(a, b) {
            a = a || {};
            var c = {
                    small: [20, 50],
                    medium: [30, 70],
                    large: [35, 90]
                },
                d = a["marker-size"] || "medium",
                e = "marker-symbol" in a && "" !== a["marker-symbol"] ? "-" + a["marker-symbol"] : "",
                g = (a["marker-color"] || "7e7e7e").replace("#", "");
            return L.icon({
                iconUrl: f("/v4/marker/pin-" + d.charAt(0) + e + "+" + g + (L.Browser.retina ? "@2x" : "") + ".png", b && b.accessToken),
                iconSize: c[d],
                iconAnchor: [c[d][0] / 2, c[d][1] / 2],
                popupAnchor: [0, -c[d][1] / 2]
            })
        }

        function d(a, b, d) {
            return L.marker(b, {
                icon: c(a.properties, d),
                title: g.strip_tags(h(a.properties && a.properties.title || ""))
            })
        }

        function e(a, b) {
            if (!a || !a.properties) return "";
            var c = "";
            return a.properties.title && (c += '<div class="marker-title">' + a.properties.title + "</div>"), a.properties.description && (c += '<div class="marker-description">' + a.properties.description + "</div>"), (b || h)(c)
        }
        var f = a("./format_url"),
            g = a("./util"),
            h = a("sanitize-caja");
        b.exports = {
            icon: c,
            style: d,
            createPopup: e
        }
    }, {
        "./format_url": 11,
        "./util": 30,
        "sanitize-caja": 5
    }],
    25: [function(a, b) {
        "use strict";
        var c = a("corslite"),
            d = a("./util").strict,
            e = a("./config"),
            f = /^(https?:)?(?=\/\/(.|api)\.tiles\.mapbox\.com\/)/;
        b.exports = function(a, b) {
            function g(a, c) {
                !a && c && (c = JSON.parse(c.responseText)), b(a, c)
            }
            return d(a, "string"), d(b, "function"), a = a.replace(f, function(a, b) {
                return "withCredentials" in new window.XMLHttpRequest ? "https:" === b || "https:" === document.location.protocol || e.FORCE_HTTPS ? "https:" : "http:" : document.location.protocol
            }), c(a, g)
        }
    }, {
        "./config": 8,
        "./util": 30,
        corslite: 1
    }],
    26: [function(a, b) {
        "use strict";
        var c = a("./format_url"),
            d = L.Control.extend({
                includes: [a("./load_tilejson")],
                options: {
                    position: "topleft",
                    url: ""
                },
                initialize: function(a, b) {
                    L.setOptions(this, b), this._loadTileJSON(a)
                },
                _setTileJSON: function(a) {
                    this._tilejson = a
                },
                onAdd: function(a) {
                    this._map = a;
                    var b = L.DomUtil.create("div", "leaflet-control-mapbox-share leaflet-bar"),
                        c = L.DomUtil.create("a", "mapbox-share mapbox-icon mapbox-icon-share", b);
                    return c.href = "#", this._modal = L.DomUtil.create("div", "mapbox-modal", this._map._container), this._mask = L.DomUtil.create("div", "mapbox-modal-mask", this._modal), this._content = L.DomUtil.create("div", "mapbox-modal-content", this._modal), L.DomEvent.addListener(c, "click", this._shareClick, this), L.DomEvent.disableClickPropagation(b), this._map.on("mousedown", this._clickOut, this), b
                },
                _clickOut: function(a) {
                    return this._sharing ? (L.DomEvent.preventDefault(a), L.DomUtil.removeClass(this._modal, "active"), this._content.innerHTML = "", this._sharing = null, void 0) : void 0
                },
                _shareClick: function(a) {
                    function b(a, b, c) {
                        var d = document.createElement("a");
                        return d.setAttribute("class", a), d.setAttribute("href", b), d.setAttribute("target", "_blank"), c = document.createTextNode(c), d.appendChild(c), d
                    }
                    if (L.DomEvent.stop(a), this._sharing) return this._clickOut(a);
                    var d = this._tilejson || this._map._tilejson || {},
                        e = encodeURIComponent(this.options.url || d.webpage || window.location),
                        f = encodeURIComponent(d.name),
                        g = c("/v4/" + d.id + "/" + this._map.getCenter().lng + "," + this._map.getCenter().lat + "," + this._map.getZoom() + "/600x600.png", this.options.accessToken),
                        h = c("/v4/" + d.id + ".html", this.options.accessToken),
                        i = "//twitter.com/intent/tweet?status=" + f + " " + e,
                        j = "//www.facebook.com/sharer.php?u=" + e + "&t=" + f,
                        k = "//www.pinterest.com/pin/create/button/?url=" + e + "&media=" + g + "&description=" + f,
                        l = '<iframe width="100%" height="500px" frameBorder="0" src="' + h + '"></iframe>',
                        m = "Copy and paste this <strong>HTML code</strong> into documents to embed this map on web pages.";
                    L.DomUtil.addClass(this._modal, "active"), this._sharing = L.DomUtil.create("div", "mapbox-modal-body", this._content);
                    var n = b("mapbox-button mapbox-button-icon mapbox-icon-twitter", i, "Twitter"),
                        o = b("mapbox-button mapbox-button-icon mapbox-icon-facebook", j, "Facebook"),
                        p = b("mapbox-button mapbox-button-icon mapbox-icon-pinterest", k, "Pinterest"),
                        q = document.createElement("h3"),
                        r = document.createTextNode("Share this map");
                    q.appendChild(r);
                    var s = document.createElement("div");
                    s.setAttribute("class", "mapbox-share-buttons"), s.appendChild(o), s.appendChild(n), s.appendChild(p), this._sharing.appendChild(q), this._sharing.appendChild(s);
                    var t = L.DomUtil.create("input", "mapbox-embed", this._sharing);
                    t.type = "text", t.value = l;
                    var u = L.DomUtil.create("label", "mapbox-embed-description", this._sharing);
                    u.innerHTML = m;
                    var v = L.DomUtil.create("a", "leaflet-popup-close-button", this._sharing);
                    v.href = "#", L.DomEvent.disableClickPropagation(this._sharing), L.DomEvent.addListener(v, "click", this._clickOut, this), L.DomEvent.addListener(t, "click", function(a) {
                        a.target.focus(), a.target.select()
                    })
                }
            });
        b.exports.ShareControl = d, b.exports.shareControl = function(a, b) {
            return new d(a, b)
        }
    }, {
        "./format_url": 11,
        "./load_tilejson": 20
    }],
    27: [function(a, b) {
        "use strict";

        function c(a, b) {
            var c = {};
            for (var d in b) c[d] = void 0 === a[d] ? b[d] : a[d];
            return c
        }

        function d(a) {
            for (var b = {}, c = 0; c < g.length; c++) b[g[c][1]] = a[g[c][0]];
            return b
        }

        function e(a) {
            return d(c(a.properties || {}, f))
        }
        var f = {
                stroke: "#555555",
                "stroke-width": 2,
                "stroke-opacity": 1,
                fill: "#555555",
                "fill-opacity": .5
            },
            g = [
                ["stroke", "color"],
                ["stroke-width", "weight"],
                ["stroke-opacity", "opacity"],
                ["fill", "fillColor"],
                ["fill-opacity", "fillOpacity"]
            ];
        b.exports = {
            style: e,
            defaults: f
        }
    }, {}],
    28: [function(a, b) {
        "use strict";
        var c = a("./util"),
            d = a("./format_url"),
            e = a("./request"),
            f = L.TileLayer.extend({
                options: {
                    sanitizer: a("sanitize-caja")
                },
                initialize: function(a, b) {
                    L.TileLayer.prototype.initialize.call(this, void 0, L.extend({}, b, {
                        tileSize: 512,
                        zoomOffset: -1,
                        minNativeZoom: 0,
                        tms: !1
                    })), this._url = this._formatTileURL(a), this._getAttribution(a)
                },
                _getAttribution: function(a) {
                    var b = d.style(a, this.options && this.options.accessToken);
                    e(b, L.bind(function(f, g) {
                        f && (c.log("could not load Mapbox style at " + b), this.fire("error", {
                            error: f
                        }));
                        var h = [];
                        for (var i in g.sources) {
                            var j = g.sources[i].url.split("mapbox://")[1];
                            h.push(j)
                        }
                        e(d.tileJSON(h.join(), this.options.accessToken), L.bind(function(b, d) {
                            b ? (c.log("could not load TileJSON at " + a), this.fire("error", {
                                error: b
                            })) : d && (c.strict(d, "object"), this.options.attribution = this.options.sanitizer(d.attribution), this._tilejson = d, this.fire("ready"))
                        }, this))
                    }, this))
                },
                setUrl: null,
                _formatTileURL: function(a) {
                    if ("string" == typeof a) {
                        -1 === a.indexOf("mapbox://styles/") && (c.log("Incorrectly formatted Mapbox style at " + a), this.fire("error"));
                        var b = a.split("mapbox://styles/")[1];
                        return d("/styles/v1/" + b + "/tiles/{z}/{x}/{y}{r}", this.options.accessToken)
                    }
                    return "object" == typeof a ? d("/styles/v1/" + a.owner + "/" + a.id + "/tiles/{z}/{x}/{y}{r}", this.options.accessToken) : void 0
                }
            });
        b.exports.StyleLayer = f, b.exports.styleLayer = function(a, b) {
            return new f(a, b)
        }
    }, {
        "./format_url": 11,
        "./request": 25,
        "./util": 30,
        "sanitize-caja": 5
    }],
    29: [function(a, b) {
        "use strict";
        var c = a("./util"),
            d = /\.((?:png|jpg)\d*)(?=$|\?)/,
            e = L.TileLayer.extend({
                includes: [a("./load_tilejson")],
                options: {
                    sanitizer: a("sanitize-caja")
                },
                formats: ["png", "jpg", "png32", "png64", "png128", "png256", "jpg70", "jpg80", "jpg90"],
                scalePrefix: "@2x.",
                initialize: function(a, b) {
                    L.TileLayer.prototype.initialize.call(this, void 0, b), this._tilejson = {}, b && b.format && c.strict_oneof(b.format, this.formats), this._loadTileJSON(a)
                },
                setFormat: function(a) {
                    return c.strict(a, "string"), this.options.format = a, this.redraw(), this
                },
                setUrl: null,
                _setTileJSON: function(a) {
                    if (c.strict(a, "object"), !this.options.format) {
                        var b = a.tiles[0].match(d);
                        b && (this.options.format = b[1])
                    }
                    return L.extend(this.options, {
                        tiles: a.tiles,
                        attribution: this.options.sanitizer(a.attribution),
                        minZoom: a.minzoom || 0,
                        maxZoom: a.maxzoom || 18,
                        tms: "tms" === a.scheme,
                        bounds: a.bounds && c.lbounds(a.bounds)
                    }), this._tilejson = a, this.redraw(), this
                },
                getTileJSON: function() {
                    return this._tilejson
                },
                getTileUrl: function(a) {
                    var b = this.options.tiles,
                        c = Math.floor(Math.abs(a.x + a.y) % b.length),
                        e = b[c],
                        f = L.Util.template(e, a);
                    return f && this.options.format ? f.replace(d, (L.Browser.retina ? this.scalePrefix : ".") + this.options.format) : f
                },
                _update: function() {
                    this.options.tiles && L.TileLayer.prototype._update.call(this)
                }
            });
        b.exports.TileLayer = e, b.exports.tileLayer = function(a, b) {
            return new e(a, b)
        }
    }, {
        "./load_tilejson": 20,
        "./util": 30,
        "sanitize-caja": 5
    }],
    30: [function(a, b) {
        "use strict";

        function c(a, b) {
            if (!b || !b.length) return !1;
            for (var c = 0; c < b.length; c++)
                if (b[c] === a) return !0;
            return !1
        }
        b.exports = {
            idUrl: function(a, b) {
                -1 === a.indexOf("/") ? b.loadID(a) : b.loadURL(a)
            },
            log: function(a) {
                "object" == typeof console && "function" == typeof console.error && console.error(a)
            },
            strict: function(a, b) {
                if (typeof a !== b) throw new Error("Invalid argument: " + b + " expected")
            },
            strict_instance: function(a, b, c) {
                if (!(a instanceof b)) throw new Error("Invalid argument: " + c + " expected")
            },
            strict_oneof: function(a, b) {
                if (!c(a, b)) throw new Error("Invalid argument: " + a + " given, valid values are " + b.join(", "))
            },
            strip_tags: function(a) {
                return a.replace(/<[^<]+>/g, "")
            },
            lbounds: function(a) {
                return new L.LatLngBounds([
                    [a[1], a[0]],
                    [a[3], a[2]]
                ])
            }
        }
    }, {}],
    31: [function(a, b) {
        b.exports = {
            author: "CedarStudios",
            name: "cedarmaps.js",
            description: "CedarMaps javascript API built on top of mapbox.js",
            version: "1.8.0",
            homepage: "http://www.cedarmaps.com/",
            repository: {
                type: "git",
                url: "http://gitlab.kikojas.com/cedar.studios/cedarmaps-sdk-web.git"
            },
            main: "src/index.js",
            dependencies: {
                corslite: "0.0.6",
                isarray: "0.0.1",
                "mapbox.js": "^3.1.1",
                mustache: "0.7.3",
                "sanitize-caja": "0.1.3"
            },
            devDependencies: {
                browserify: "^6.3.2",
                "clean-css": "~2.0.7",
                "expect.js": "0.3.1",
                grunt: "^0.4.5",
                "grunt-browserify": "^3.8.0",
                "grunt-contrib-concat": "^0.5.0",
                "grunt-contrib-copy": "^0.7.0",
                "grunt-contrib-cssmin": "^2.2.1",
                "grunt-contrib-uglify": "^0.7.0",
                happen: "0.1.3",
                jshint: "2.4.4",
                "leaflet-fullscreen": "0.0.0",
                "leaflet-hash": "0.2.1",
                marked: "~0.3.0",
                minimist: "0.0.5",
                mocha: "1.17.1",
                "mocha-phantomjs": "3.1.6",
                sinon: "1.10.2",
                "uglify-js": "2.4.8"
            },
            optionalDependencies: {},
            engines: {
                node: "*"
            }
        }
    }, {}],
    32: [function(a, b) {
        "use strict";
        var c = (a("isarray"), a("mapbox.js/src/util")),
            d = a("./format_url"),
            e = a("./request");
        b.exports = function(a) {
            a || (a = {});
            var b = {};
            return b.getURL = function(b) {
                return "province" == b ? d("/" + b, a.accessToken) : d("/" + b + "/{query}.json", a.accessToken)
            }, b.queryURL = function(a, c) {
                var d = L.Util.template(b.getURL(a), {
                    query: c
                });
                return d
            }, b.query = function(a, d, f) {
                return c.strict(f, "function"), e(b.queryURL(a, d), function(a, b) {
                    b && (b.length || b.results) ? f(null, b) : f(a || !0)
                }), b
            }, b
        }
    }, {
        "./format_url": 38,
        "./request": 44,
        isarray: 2,
        "mapbox.js/src/util": 30
    }],
    33: [function(a, b) {
        "use strict";
        var c = a("./map"),
            d = a("./tile_layer"),
            e = a("./geocoder_control");
        L.cedarmaps = L.mapbox, L.cedarmaps.VERSION = a("../package.json").version, L.cedarmaps.geocoder = a("./geocoder"), L.cedarmaps.staticMap = a("./static_map"), L.cedarmaps.nearby = a("./nearby"), L.cedarmaps.distance = a("./distance"), L.cedarmaps.administrativeBoundaries = a("./administrative_boundaries"), L.cedarmaps.direction = a("./direction"), L.cedarmaps.map = c.map, L.cedarmaps.Map = c.Map, L.cedarmaps.tileLayer = d.tileLayer, L.cedarmaps.TileLayer = d.TileLayer, L.cedarmaps.geocoderControl = e.geocoderControl, L.cedarmaps.GeocoderControl = e.GeocoderControl, b.exports = L.cedarmaps, window.L.Icon.Default.imagePath = ("https:" === document.location.protocol || "http:" === document.location.protocol ? "" : "https:") + "//api.cedarmaps.com/cedarmaps.js/v" + a("../package.json").version + "/images/"
    }, {
        "../package.json": 31,
        "./administrative_boundaries": 32,
        "./direction": 36,
        "./distance": 37,
        "./geocoder": 39,
        "./geocoder_control": 40,
        "./map": 42,
        "./nearby": 43,
        "./static_map": 45,
        "./tile_layer": 46
    }],
    34: [function(a, b) {
        "use strict";
        var c = L.Control.extend({
            options: {
                position: "bottomright"
            },
            initialize: function(a) {
                L.setOptions(this, a)
            },
            onAdd: function() {
                return this._container = L.DomUtil.create("a", "cedarmaps-logo"), this._container.href = "https://www.cedarmaps.com", this._container.target = "_blank", this._container
            },
            _setTileJSON: function() {
                L.DomUtil.addClass(this._container, "cedarmaps-logo-true")
            }
        });
        b.exports.CedarmapsLogoControl = c, b.exports.cedarmapsLogoControl = function(a) {
            return new c(a)
        }
    }, {}],
    35: [function(a, b) {
        "use strict";
        b.exports = {
            HTTP_URL: window.apiBaseUrlHttp || "http://api.cedarmaps.com/v1",
            HTTPS_URL: window.apiBaseUrlHttps || "https://api.cedarmaps.com/v1",
            FORCE_HTTPS: !0,
            REQUIRE_ACCESS_TOKEN: !0
        }
    }, {}],
    36: [function(a, b) {
        "use strict";
        var c = (a("isarray"), a("mapbox.js/src/util")),
            d = a("./format_url"),
            e = a("./request");
        b.exports = function(a) {
            a || (a = {});
            var b = {};
            return b.getURL = function(b) {
                var b = b || "cedarmaps.driving";
                return d("/direction/" + b + "/{points}", a.accessToken)
            }, b.queryURL = function(a, c) {
                var d = L.Util.template(b.getURL(a), {
                    points: c
                });
                return d
            }, b.route = function(a, d, f) {
                return c.strict(f, "function"), e(b.queryURL(a, d), function(a, b) {
                    b && (b.length || b.result) ? f(null, b) : f(a || !0)
                }), b
            }, b
        }
    }, {
        "./format_url": 38,
        "./request": 44,
        isarray: 2,
        "mapbox.js/src/util": 30
    }],
    37: [function(a, b) {
        "use strict";
        var c = a("./config"),
            d = a("isarray"),
            e = a("./request");
        b.exports = function(a, b) {
            if (a.profile || (a.profile = "cedarmaps.driving"), !a.points || !d(a.points)) throw "Cedarmaps: Bad input.";
            for (var f = "", g = 0, h = a.points.length; h > g; g++) f += a.points[g].from.lat + "," + a.points[g].from.lng + ";", f += a.points[g].to.lat + "," + a.points[g].to.lng, f += "/";
            var i = "https:" === document.location.protocol || c.FORCE_HTTPS ? c.HTTPS_URL : c.HTTP_URL,
                j = i + "/distance/" + a.profile + "/" + f + "?access_token=" + L.cedarmaps.accessToken;
            e(j, function(a, c) {
                b(a, c)
            })
        }
    }, {
        "./config": 35,
        "./request": 44,
        isarray: 2
    }],
    38: [function(a, b) {
        "use strict";
        var c = a("./config"),
            d = a("../package.json").version;
        b.exports = function(a, b) {
            if (b = b || L.cedarmaps.accessToken, !b && c.REQUIRE_ACCESS_TOKEN) throw new Error("An API access token is required to use cedarmaps.js. See https://www.mapbox.com/mapbox.js/api/v" + d + "/api-access-tokens/");
            var e = "https:" === document.location.protocol || c.FORCE_HTTPS ? c.HTTPS_URL : c.HTTP_URL;
            if (e = e.replace(/\/v4$/, ""), e += a, e += -1 !== e.indexOf("?") ? "&access_token=" : "?access_token=", c.REQUIRE_ACCESS_TOKEN) {
                if ("s" === b[0]) throw new Error("Use a public access token (pk.*) with Mapbox.js, not a secret access token (sk.*). See https://www.mapbox.com/mapbox.js/api/v" + d + "/api-access-tokens/");
                e += b
            }
            return e
        }, b.exports.tileJSON = function(a, c) {
            if (-1 !== a.indexOf("/")) return a;
            var d = b.exports("/" + a + ".json", c);
            return 0 === d.indexOf("https") && (d += "&secure"), d
        }
    }, {
        "../package.json": 31,
        "./config": 35
    }],
    39: [function(a, b) {
        "use strict";
        var c = a("isarray"),
            d = a("mapbox.js/src/util"),
            e = a("./format_url"),
            f = a("./request");
        b.exports = function(a, b) {
            b || (b = {});
            var g = {};
            return d.strict(a, "string"), -1 === a.indexOf("/") && (a = e("/geocode/" + a + "/{query}.json", b.accessToken, 5)), g.getURL = function() {
                return a
            }, g.queryURL = function(a) {
                var b = !(c(a) || "string" == typeof a),
                    d = b ? a.query : a;
                if (c(d)) {
                    for (var e = [], f = 0; f < d.length; f++) e[f] = encodeURIComponent(d[f]);
                    d = e.join(";")
                } else d = encodeURIComponent(d);
                var h = L.Util.template(g.getURL(), {
                    query: d
                });
                return b && a.limit && (h += "&limit=" + a.limit), b && a.distance && (h += "&distance=" + a.distance), b && a.ne && a.sw && (h += "&ne=" + a.ne + "&sw=" + a.sw), b && a.type && (h += c(a.type) ? "&type=" + a.type.join(",") : "&type=" + a.type), h
            }, g.query = function(a, b) {
                return d.strict(b, "function"), f(g.queryURL(a), function(a, c) {
                    c && (c.length || c.results) ? b(null, c) : b(a || !0)
                }), g
            }, g.reverseQuery = function(a, b) {
                function c(a) {
                    return void 0 !== a.lat && void 0 !== a.lng ? a.lat + "," + a.lng : void 0 !== a.lat && void 0 !== a.lon ? a.lon + "," + a.lat : a[0] + "," + a[1]
                }
                var d = "";
                if (a.length && a[0].length) {
                    for (var e = 0, h = []; e < a.length; e++) h.push(c(a[e]));
                    d = h.join(";")
                } else d = c(a);
                return f(g.queryURL(d), function(a, c) {
                    b(a, c)
                }), g
            }, g
        }
    }, {
        "./format_url": 38,
        "./request": 44,
        isarray: 2,
        "mapbox.js/src/util": 30
    }],
    40: [function(a, b) {
        "use strict";
        var c = a("./geocoder"),
            d = (a("mapbox.js/src/util"), L.Control.extend({
                includes: L.Mixin.Events,
                options: {
                    position: "topright",
                    pointZoom: 16,
                    keepOpen: !1,
                    autocomplete: !1
                },
                initialize: function(a, b) {
                    L.Util.setOptions(this, b), this.setURL(a), this._updateSubmit = L.bind(this._updateSubmit, this), this._updateAutocomplete = L.bind(this._updateAutocomplete, this), this._chooseResult = L.bind(this._chooseResult, this)
                },
                setURL: function(a) {
                    return this.geocoder = c(a, {
                        accessToken: this.options.accessToken
                    }), this
                },
                getURL: function() {
                    return this.geocoder.getURL()
                },
                setID: function(a) {
                    return this.setURL(a)
                },
                setTileJSON: function(a) {
                    return this.setURL(a.geocoder)
                },
                _toggle: function(a) {
                    a && L.DomEvent.stop(a), L.DomUtil.hasClass(this._container, "active") ? (L.DomUtil.removeClass(this._container, "active"), this._results.innerHTML = "", this._input.blur()) : (L.DomUtil.addClass(this._container, "active"), this._input.focus(), this._input.select())
                },
                _closeIfOpen: function() {
                    L.DomUtil.hasClass(this._container, "active") && !this.options.keepOpen && (L.DomUtil.removeClass(this._container, "active"), this._results.innerHTML = "", this._input.blur())
                },
                onAdd: function(a) {
                    var b = L.DomUtil.create("div", "leaflet-control-mapbox-geocoder leaflet-bar leaflet-control"),
                        c = L.DomUtil.create("a", "leaflet-control-mapbox-geocoder-toggle mapbox-icon mapbox-icon-geocoder", b),
                        d = L.DomUtil.create("div", "leaflet-control-mapbox-geocoder-results", b),
                        e = L.DomUtil.create("div", "leaflet-control-mapbox-geocoder-wrap", b),
                        f = L.DomUtil.create("form", "leaflet-control-mapbox-geocoder-form", e),
                        g = L.DomUtil.create("input", "", f);
                    return c.href = "#", c.innerHTML = "&nbsp;", g.type = "text", g.setAttribute("placeholder", "Search"), L.DomEvent.addListener(f, "submit", this._geocode, this), L.DomEvent.addListener(g, "keyup", this._autocomplete, this), L.DomEvent.disableClickPropagation(b), this._map = a, this._results = d, this._input = g, this._form = f, this.options.keepOpen ? L.DomUtil.addClass(b, "active") : (this._map.on("click", this._closeIfOpen, this), L.DomEvent.addListener(c, "click", this._toggle, this)), b
                },
                _updateSubmit: function(a, b) {
                    if (L.DomUtil.removeClass(this._container, "searching"), this._results.innerHTML = "", a || !b) this.fire("error", {
                        error: a
                    });
                    else {
                        var c = [];
                        b.results && b.results.length && (c = b.results), 1 === c.length ? (this.fire("autoselect", {
                            feature: c[0]
                        }), this.fire("found", {
                            results: b.results
                        }), this._chooseResult(c[0]), this._closeIfOpen()) : c.length > 1 ? (this.fire("found", {
                            results: b.results
                        }), this._displayResults(c)) : this._displayResults(c)
                    }
                },
                _updateAutocomplete: function(a, b) {
                    if (this._results.innerHTML = "", a || !b) this.fire("error", {
                        error: a
                    });
                    else {
                        var c = [];
                        b.results && b.results.length && (c = b.results), c.length && this.fire("found", {
                            results: b.results
                        }), this._displayResults(c)
                    }
                },
                _displayResults: function(a) {
                    for (var b = 0, c = Math.min(a.length, 10); c > b; b++) {
                        var d = a[b],
                            e = d.name,
                            f = [];
                        d.components.city && f.push(d.components.city), d.components.districts[0] && f.push(d.components.districts[0]), d.components.localities[0] && f.push(d.components.localities[0]);
                        var g = f.join("، ");
                        if (e.length) {
                            var h = L.DomUtil.create("a", "", this._results),
                                i = L.DomUtil.create("span", "meta"),
                                j = "innerText" in h ? "innerText" : "textContent",
                                k = "innerText" in i ? "innerText" : "textContent";
                            i[k] = g, h[j] = e, h.appendChild(i), h.href = "#", L.bind(function(a) {
                                L.DomEvent.addListener(h, "click", function(b) {
                                    this._chooseResult(a), L.DomEvent.stop(b), this.fire("select", {
                                        feature: a
                                    })
                                }, this)
                            }, this)(d)
                        }
                    }
                    if (a.length > 10) {
                        var l = L.DomUtil.create("span", "", this._results);
                        l.innerHTML = "Top 10 of " + a.length + "  results"
                    }
                },
                _chooseResult: function(a) {
                    a.location.bb ? this._map.fitBounds(L.latLngBounds([a.location.bb.ne.split(",")[0], a.location.bb.ne.split(",")[1]], [a.location.bb.sw.split(",")[0], a.location.bb.sw.split(",")[1]])) : a.location.center && this._map.setView([a.location.center[1], a.location.center[0]], void 0 === this._map.getZoom() ? this.options.pointZoom : Math.max(this._map.getZoom(), this.options.pointZoom))
                },
                _geocode: function(a) {
                    return L.DomEvent.preventDefault(a), "" === this._input.value ? this._updateSubmit() : (L.DomUtil.addClass(this._container, "searching"), this.geocoder.query({
                        query: this._input.value,
                        proximity: this.options.proximity ? this._map.getCenter() : !1
                    }, this._updateSubmit), void 0)
                },
                _autocomplete: function() {
                    return this.options.autocomplete ? "" === this._input.value ? this._updateAutocomplete() : (this.geocoder.query({
                        query: this._input.value,
                        proximity: this.options.proximity ? this._map.getCenter() : !1
                    }, this._updateAutocomplete), void 0) : void 0
                }
            }));
        b.exports.GeocoderControl = d, b.exports.geocoderControl = function(a, b) {
            return new d(a, b)
        }
    }, {
        "./geocoder": 39,
        "mapbox.js/src/util": 30
    }],
    41: [function(a) {
        "use strict";
        a("mapbox.js"), a("./cedarmaps")
    }, {
        "./cedarmaps": 33,
        "mapbox.js": 17
    }],
    42: [function(a, b) {
        "use strict";

        function c(a, b) {
            return !b || a.accessToken ? a : L.extend({
                accessToken: b
            }, a)
        }
        var d = a("mapbox.js/src/map"),
            e = a("./tile_layer").tileLayer,
            f = a("./cedarmaps_logo").cedarmapsLogoControl,
            g = d.Map.extend({
                initialize: function(a, b, g) {
                    d.Map.prototype.initialize.call(this, a, b, L.extend({}, d.Map.prototype.options, g)), this.options.tileLayer && 0 !== Object.keys(this.options.tileLayer).length && (this.tileLayer = e(void 0, c(this.options.tileLayer, this.options.accessToken)), this.addLayer(this.tileLayer)), this._cedarmapsLogoControl = f(this.options.cedarmapsLogoControl), this.addControl(this._cedarmapsLogoControl)
                },
                _initialize: function(a) {
                    d.Map.prototype._initialize.call(this, a), this._cedarmapsLogoControl._setTileJSON(a)
                }
            });
        b.exports.Map = g, b.exports.map = function(a, b, c) {
            return c = c || {}, c.legendControl = !1, c.attributionControl = !1, new g(a, b, c)
        }
    }, {
        "./cedarmaps_logo": 34,
        "./tile_layer": 46,
        "mapbox.js/src/map": 21
    }],
    43: [function(a, b) {
        "use strict";
        var c = (a("./config"), a("corslite"));
        b.exports = function(a, b, d) {
            var e = {
                    toFarsi: function(a) {
                        if (a) {
                            for (var b = ["ي", "ك", "‍", "دِ", "بِ", "زِ", "ذِ", "ِشِ", "ِسِ", "‌", "ى", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0"], c = ["ی", "ک", "", "د", "ب", "ز", "ذ", "ش", "س", "", "ی", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹", "۰"], d = 0, e = b.length; e > d; d++) a = a.replace(new RegExp(b[d], "g"), c[d]);
                            return a
                        }
                    },
                    digitSeperator: function(a) {
                        return a.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
                    }
                },
                f = function(a) {
                    for (var b in m) p.removeLayer(m[b]);
                    if (d.categories)
                        for (var e = 0, f = d.categories.length; f > e; e++) ! function(b) {
                            var e = d.categories[b];
                            if (i[e]) {
                                var f = new L.FeatureGroup;
                                c("https://www.kikojas.com/api/search?cat=" + i[e].name + "&latlng=" + a.lat + "," + a.lng + "&limit=" + (d.poiLimit ? d.poiLimit : 3) + "&distance=" + (d.seachDistance ? d.seachDistance : 2), function(b, c) {
                                    if (b) throw b;
                                    var h = JSON.parse(c.response);
                                    if (200 === h.meta.code) {
                                        var j = h.response.items;
                                        j.forEach(function(b) {
                                            var c = '<div class="tooltip-wrapper">                                                <div class="basic-info">                                                    <div class="icon"><img width="32" height="32" alt="' + i[e].name + '" src="https://www.kikojas.com' + b.categories[0].icon + '"></div>                                                    <div class="details">';
                                            c += d.noPoiLink && 1 == d.noPoiLink ? '<div class="title">' + b.full_name + "</div>" : '<div class="title"><a href="https://www.kikojas.com' + b.url + '" target="_blank">' + b.full_name + "</a></div>", c += '<div class="category">' + b.categories[0].name + '</div>                                                        <div class="address">' + b.address + '</div>                                                    </div>                                                </div>                                                <div class="routing" data-from="' + a.lat + "," + a.lng + '" data-to="' + b.latlng + '" onclick="routing(this)")">                                                    <span class="distance">در حال محاسبه فاصله <img src="https://tools.kikojas.com/images/loading-14-blue.gif"/></span>                                                    <div class="route">مسیریابی <img src="https://tools.kikojas.com/images/route-icon.png"/></div>                                                </div>                                                <div class="clear"></div>                                            </div>';
                                            var h = L.marker({
                                                    lon: b.lng,
                                                    lat: b.lat
                                                }, {
                                                    icon: L.divIcon({
                                                        html: "bus" == e ? "" : '<img style="width:27px; margin:2px;" src="https://www.kikojas.com/img/categories/red/64/' + i[e].slug + '.png"/>',
                                                        iconSize: [34, 44],
                                                        className: "kikojas-map-marker",
                                                        iconAnchor: [31, 41],
                                                        shadowUrl: "https://www.kikojas.com/img/marker-shadow.png",
                                                        shadowSize: [61, 20],
                                                        shadowAnchor: [59, 5],
                                                        bgPos: {
                                                            x: "bus" == e ? 1188 : 1080,
                                                            y: 0
                                                        }
                                                    })
                                                }).bindPopup(c, {
                                                    offset: new L.Point(-15, -33),
                                                    closeButton: !1,
                                                    maxWidth: 420,
                                                    autoPan: !0
                                                }),
                                                k = new g(h);
                                            h.on("mouseover", k.onMarkerMouseOver).on("mouseout", k.onMarkerMouseOut), f.addLayer(h), j.push(h)
                                        }, this)
                                    }
                                }, !0), m[e] = f, p.addLayer(f)
                            }
                        }(e)
                },
                g = function(a) {
                    function b(b) {
                        var c, d = a._icon,
                            e = d.style.backgroundPosition,
                            f = e.split(" ");
                        switch (b) {
                            case "hover":
                                var g = parseInt(d.style.zIndex);
                                d.style.zIndex = g + 1e4, c = f[0] + " -53px";
                                break;
                            case "normal":
                                var g = parseInt(d.style.zIndex);
                                d.style.zIndex = g - 1e4, c = f[0] + " 0px";
                                break;
                            case "active":
                                c = f[0] + " -53px", a.isActive = !0;
                                break;
                            case "inactive":
                                c = f[0] + " 0px", a.isActive = !1
                        }
                        d.style.backgroundPosition = c
                    }
                    return this.activeMarker = null, {
                        onMarkerMouseOver: function() {
                            a.isActive || (null !== self.activeMarker && b("inactive"), b("hover"))
                        },
                        onMarkerMouseOut: function() {
                            a.isActive || b("normal")
                        }
                    }
                };
            d.lockScroll || (d.lockScroll = !1);
            var h, i = {
                    park: {
                        slug: "park",
                        id: 11,
                        parentId: 1,
                        name: "پارک و بوستان",
                        short_name: "پارک"
                    },
                    bus: {
                        slug: "bus-stop",
                        id: 3,
                        parentId: 1,
                        name: "ایستگاه اتوبوس",
                        short_name: "اتوبوس"
                    },
                    shopping: {
                        slug: "shopping-center",
                        id: 208,
                        parentId: 160,
                        name: "پاساژ و مرکز خرید",
                        short_name: "خرید"
                    },
                    hospital: {
                        slug: "hospital",
                        id: 59,
                        parentId: 55,
                        name: "بیمارستان",
                        short_name: "درمانی"
                    },
                    school: {
                        slug: "school",
                        id: 36,
                        parentId: 28,
                        name: "مدرسه",
                        short_name: "مدرسه"
                    }
                },
                j = new L.LatLng(35.393, 51.0219),
                k = new L.LatLng(35.8267, 51.6426),
                l = new L.LatLngBounds(j, k),
                m = {},
                n = "https://api.cedarmaps.com/v1/tiles/cedarmaps.streets.json?access_token=" + L.cedarmaps.accessToken,
                o = document.getElementById(a);
            o.className += " kikojas-nearby-widget";
            var p = L.cedarmaps.map(a, n, {
                maxBounds: l,
                minZoom: 12,
                maxZoom: 17,
                zoomControl: d.lockScroll,
                scrollWheelZoom: !d.lockScroll
            }).setView(b, d.defaultZoom ? d.defaultZoom : 15);
            p.on("popupopen", function(a) {
                window.distance(a.popup._contentNode.getElementsByClassName("routing")[0])
            }), f({
                lat: b[0],
                lng: b[1]
            });
            var q = L.marker({
                    lon: b[1],
                    lat: b[0]
                }, {
                    zIndexOffset: 1e3,
                    icon: d.centerMarkerIcon ? d.centerMarkerIcon : L.divIcon({
                        iconSize: [34, 44],
                        className: "kikojas-map-marker",
                        iconAnchor: [31, 41],
                        shadowUrl: "https://www.kikojas.com/img/marker-shadow.png",
                        shadowSize: [61, 20],
                        shadowAnchor: [59, 5],
                        bgPos: {
                            x: 1224,
                            y: 0
                        }
                    })
                }).addTo(p),
                r = new g(q);
            q.on("mouseover", r.onMarkerMouseOver).on("mouseout", r.onMarkerMouseOut).on("move", function(a) {
                f(a.latlng)
            }), d.popupContent && q.bindPopup('<div class="basic-info">' + d.popupContent + "</div>", {
                offset: new L.Point(-15, -33),
                closeButton: !1,
                className: "leaflet-popup-poi",
                maxWidth: document.getElementById(a).offsetWidth - 20
            }).on("popupopen", function(a) {
                a.popup.update()
            }), L.Control.CategoryToggle = L.Control.extend({
                onAdd: function(b) {
                    var c = L.DomUtil.create("div");
                    L.DomUtil.addClass(c, "category-panel slider js_slider");
                    var e = (document.getElementById(a).offsetWidth, L.DomUtil.create("ul"));
                    if (L.DomUtil.addClass(e, "tg-list"), d.categories)
                        for (var f = 0, g = d.categories.length; g > f; f++) {
                            var h = d.categories[f];
                            if (i[h]) {
                                var j = i[h],
                                    k = L.DomUtil.create("li", "tg-list-item"),
                                    l = L.DomUtil.create("input", "tgl tgl-flip");
                                l.setAttribute("type", "checkbox"), l.setAttribute("id", j.slug);
                                var n = L.DomUtil.create("label", "tgl-btn");
                                n.setAttribute("data-tg-off", j.short_name), n.setAttribute("data-tg-on", j.short_name), n.setAttribute("data-toggle", "on"), n.setAttribute("data-cat", d.categories[f]), n.setAttribute("for", j.slug), k.appendChild(l), k.appendChild(n), k.onclick = function(a) {
                                    if (a.target.getAttribute("data-cat")) {
                                        "on" == a.target.getAttribute("data-toggle") ? (b.removeLayer(m[a.target.getAttribute("data-cat")]), a.target.setAttribute("data-toggle", "off")) : (b.addLayer(m[a.target.getAttribute("data-cat")]), a.target.setAttribute("data-toggle", "on"));
                                        var c = [];
                                        for (var d in m) m[d].getBounds().isValid() && c.push(m[d].getBounds());
                                        c.length > 0 && b.fitBounds(c)
                                    }
                                }, e.appendChild(k)
                            }
                        }
                    return c.appendChild(e), c
                },
                onRemove: function() {}
            }), L.control.categoryToggle = function(a) {
                return new L.Control.CategoryToggle(a)
            };
            var s = L.control.categoryToggle({
                position: "topright"
            });
            return s.addTo(p), window.routing = function(a) {
                a && a.getAttribute("data-from") && a.getAttribute("data-to") && c("https://api.cedarmaps.com/v1/direction/cedarmaps.driving/" + a.getAttribute("data-from") + ";" + a.getAttribute("data-to") + "?access_token=" + L.cedarmaps.accessToken, function(a, b) {
                    if (a) throw a;
                    var c = JSON.parse(b.response).result;
                    c.routes && c.routes.length > 0 && (h && p.removeLayer(h), h = L.geoJson(c.routes[0].geometry), h.addTo(p))
                })
            }, window.distance = function(a) {
                if (a && a.getAttribute("data-from") && a.getAttribute("data-to")) {
                    var b = "https://api.cedarmaps.com/v1/direction/cedarmaps.driving/" + a.getAttribute("data-from") + ";" + a.getAttribute("data-to") + "?access_token=" + L.cedarmaps.accessToken,
                        d = document.getElementById("to-replace");
                    d && d.removeAttribute("id"), a.getElementsByClassName("distance")[0].setAttribute("id", "to-replace"), c(b, function(a, b) {
                        if (a) throw a;
                        var c = JSON.parse(b.response).result,
                            d = document.getElementById("to-replace");
                        if (d) {
                            if (c.routes && c.routes.length > 0) {
                                var f = c.routes[0].distance,
                                    g = "متر";
                                f > 1e3 && (f /= 1e3, g = "کیلومتر"), d.innerHTML = "فاصله رانندگی تا مکان مورد نظر شما: " + e.toFarsi(e.digitSeperator(Math.round(f))) + " " + g
                            }
                            d.removeAttribute("id")
                        }
                    })
                }
            }, {
                updateCategories: function(a) {
                    d.categories = a, f(q.getLatLng()), p.removeControl(s), s = L.control.categoryToggle({
                        position: "topright"
                    }), s.addTo(p)
                },
                updateSearchDistance: function(a) {
                    d.seachDistance = a, f(q.getLatLng())
                },
                map: p,
                centerMarker: q
            }
        }
    }, {
        "./config": 35,
        corslite: 1
    }],
    44: [function(a, b) {
        "use strict";
        var c = a("corslite"),
            d = a("mapbox.js/src/util").strict,
            e = a("./config"),
            f = /^(https?:)?(?=\/\/(.|api)\.cedarmaps\.com\/)/;
        b.exports = function(a, b) {
            function g(a, c) {
                !a && c && (c = JSON.parse(c.responseText)), b(a, c)
            }
            return d(a, "string"), d(b, "function"), a = a.replace(f, function(a, b) {
                return "withCredentials" in new window.XMLHttpRequest ? "https:" === b || "https:" === document.location.protocol || e.FORCE_HTTPS ? "https:" : "http:" : document.location.protocol
            }), c(a, g)
        }
    }, {
        "./config": 35,
        corslite: 1,
        "mapbox.js/src/util": 30
    }],
    45: [function(a, b) {
        "use strict";
        var c = a("./config");
        b.exports = function(a) {
            if (a.maptype || (a.maptype = "light"), a.alttext || (a.alttext = "Cedarmaps static image."), a.position) {
                if ("object" != typeof a.position) throw "Unknown value for position."
            } else a.position = "auto";
            if (!a.dimensions) throw "Cedarmaps: No dimensions specified.";
            if ("object" != typeof a.dimensions) throw "Unknown value for position.";
            var b = a.position.lat ? a.position.lat + "," + a.position.lng + "," + a.position.zoom : a.position,
                d = "https:" === document.location.protocol || c.FORCE_HTTPS ? c.HTTPS_URL : c.HTTP_URL,
                e = d + "/static/" + a.maptype + "/" + b + "/" + a.dimensions.width + "x" + a.dimensions.height + (a.scale ? "@2x" : "") + "?access_token=" + L.cedarmaps.accessToken;
            if (a.qs && a.qs.length > 0) {
                for (var f = [], g = 0, h = a.qs.length; h > g; g++) a.qs[g].marker_url || (a.qs[g].marker_url = "marker-default"), f.push(a.qs[g].marker_url), f.push(a.qs[g].lat + "," + a.qs[g].lng);
                e += "&markers=" + f.join("|")
            }
            var i = function() {
                    return e
                },
                j = function(b) {
                    if (!b) throw "Cedarmaps: No container selector specified.";
                    if (!document.querySelector(b)) throw "Cedarmaps: Could not find element " + b;
                    var c = document.createElement("img");
                    c.setAttribute("src", e), c.setAttribute("alt", a.alttext);
                    var d = document.querySelector(b);
                    d.appendChild(c)
                };
            return {
                getUrl: i,
                createImage: j
            }
        }
    }, {
        "./config": 35
    }],
    46: [function(a, b) {
        "use strict";
        var c = (a("mapbox.js/src/util"), a("mapbox.js/src/tile_layer")),
            d = c.TileLayer.extend({
                getTileUrl: function(a) {
                    var b = this.options.tiles,
                        c = Math.floor(Math.abs(a.x + a.y) % b.length),
                        d = b[c],
                        e = L.Util.template(d, a);
                    return e ? e.replace(".png", (L.Browser.retina ? this.scalePrefix : ".") + this.options.format) : e
                }
            });
        b.exports.TileLayer = d, b.exports.tileLayer = function(a, b) {
            return new d(a, b)
        }
    }, {
        "mapbox.js/src/tile_layer": 29,
        "mapbox.js/src/util": 30
    }]
}, {}, [41]);