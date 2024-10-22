! function(e) {
    "use strict";

    function t(e) {
        if (!y(e)) return zn;
        v(e.objectMaxDepth) && (zn.objectMaxDepth = n(e.objectMaxDepth) ? e.objectMaxDepth : NaN)
    }

    function n(e) {
        return A(e) && 0 < e
    }

    function r(e, t) {
        return t = t || Error,
            function() {
                var n, r = arguments[0];
                for (n = "[" + (e ? e + ":" : "") + r + "] http://errors.angularjs.org/1.6.8/" + (e ? e + "/" : "") + r, r = 1; r < arguments.length; r++) {
                    var i;
                    n = n + (1 == r ? "?" : "&") + "p" + (r - 1) + "=", n += encodeURIComponent(i = "function" == typeof(i = arguments[r]) ? i.toString().replace(/ \{[\s\S]*$/, "") : void 0 === i ? "undefined" : "string" != typeof i ? JSON.stringify(i) : i)
                }
                return new t(n)
            }
    }

    function i(e) {
        if (null == e || E(e)) return !1;
        if (or(e) || w(e) || Rn && e instanceof Rn) return !0;
        var t = "length" in Object(e) && e.length;
        return A(t) && (0 <= t && (t - 1 in e || e instanceof Array) || "function" == typeof e.item)
    }

    function o(e, t, n) {
        var r, a;
        if (e)
            if (S(e))
                for (r in e) "prototype" !== r && "length" !== r && "name" !== r && e.hasOwnProperty(r) && t.call(n, e[r], r, e);
            else if (or(e) || i(e)) {
            var s = "object" != typeof e;
            for (r = 0, a = e.length; r < a; r++)(s || r in e) && t.call(n, e[r], r, e)
        } else if (e.forEach && e.forEach !== o) e.forEach(t, n, e);
        else if (b(e))
            for (r in e) t.call(n, e[r], r, e);
        else if ("function" == typeof e.hasOwnProperty)
            for (r in e) e.hasOwnProperty(r) && t.call(n, e[r], r, e);
        else
            for (r in e) Hn.call(e, r) && t.call(n, e[r], r, e);
        return e
    }

    function a(e, t, n) {
        for (var r = Object.keys(e).sort(), i = 0; i < r.length; i++) t.call(n, e[r[i]], r[i]);
        return r
    }

    function s(e) {
        return function(t, n) {
            e(n, t)
        }
    }

    function u(e, t, n) {
        for (var r = e.$$hashKey, i = 0, o = t.length; i < o; ++i) {
            var a = t[i];
            if (y(a) || S(a))
                for (var s = Object.keys(a), c = 0, l = s.length; c < l; c++) {
                    var d = s[c],
                        f = a[d];
                    n && y(f) ? x(f) ? e[d] = new Date(f.valueOf()) : k(f) ? e[d] = new RegExp(f) : f.nodeName ? e[d] = f.cloneNode(!0) : O(f) ? e[d] = f.clone() : (y(e[d]) || (e[d] = or(f) ? [] : {}), u(e[d], [f], !0)) : e[d] = f
                }
        }
        return r ? e.$$hashKey = r : delete e.$$hashKey, e
    }

    function c(e) {
        return u(e, Kn.call(arguments, 1), !1)
    }

    function l(e) {
        return u(e, Kn.call(arguments, 1), !0)
    }

    function d(e) {
        return parseInt(e, 10)
    }

    function f(e, t) {
        return c(Object.create(e), t)
    }

    function p() {}

    function h(e) {
        return e
    }

    function g(e) {
        return function() {
            return e
        }
    }

    function m(e) {
        return S(e.toString) && e.toString !== Qn
    }

    function $(e) {
        return void 0 === e
    }

    function v(e) {
        return void 0 !== e
    }

    function y(e) {
        return null !== e && "object" == typeof e
    }

    function b(e) {
        return null !== e && "object" == typeof e && !Yn(e)
    }

    function w(e) {
        return "string" == typeof e
    }

    function A(e) {
        return "number" == typeof e
    }

    function x(e) {
        return "[object Date]" === Qn.call(e)
    }

    function C(e) {
        switch (Qn.call(e)) {
            case "[object Error]":
            case "[object Exception]":
            case "[object DOMException]":
                return !0;
            default:
                return e instanceof Error
        }
    }

    function S(e) {
        return "function" == typeof e
    }

    function k(e) {
        return "[object RegExp]" === Qn.call(e)
    }

    function E(e) {
        return e && e.window === e
    }

    function _(e) {
        return e && e.$evalAsync && e.$watch
    }

    function D(e) {
        return "boolean" == typeof e
    }

    function O(e) {
        return !(!e || !(e.nodeName || e.prop && e.attr && e.find))
    }

    function M(e) {
        return Gn(e.nodeName || e[0] && e[0].nodeName)
    }

    function F(e, t) {
        var n = e.indexOf(t);
        return 0 <= n && e.splice(n, 1), n
    }

    function U(e, t, r) {
        function i(e, t, n) {
            if (0 > --n) return "...";
            var r, i = t.$$hashKey;
            if (or(e)) {
                r = 0;
                for (var o = e.length; r < o; r++) t.push(a(e[r], n))
            } else if (b(e))
                for (r in e) t[r] = a(e[r], n);
            else if (e && "function" == typeof e.hasOwnProperty)
                for (r in e) e.hasOwnProperty(r) && (t[r] = a(e[r], n));
            else
                for (r in e) Hn.call(e, r) && (t[r] = a(e[r], n));
            return i ? t.$$hashKey = i : delete t.$$hashKey, t
        }

        function a(e, t) {
            if (!y(e)) return e;
            if (-1 !== (n = u.indexOf(e))) return c[n];
            if (E(e) || _(e)) throw Xn("cpws");
            var n = !1,
                r = function(e) {
                    switch (Qn.call(e)) {
                        case "[object Int8Array]":
                        case "[object Int16Array]":
                        case "[object Int32Array]":
                        case "[object Float32Array]":
                        case "[object Float64Array]":
                        case "[object Uint8Array]":
                        case "[object Uint8ClampedArray]":
                        case "[object Uint16Array]":
                        case "[object Uint32Array]":
                            return new e.constructor(a(e.buffer), e.byteOffset, e.length);
                        case "[object ArrayBuffer]":
                            if (!e.slice) {
                                var t = new ArrayBuffer(e.byteLength);
                                return new Uint8Array(t).set(new Uint8Array(e)), t
                            }
                            return e.slice(0);
                        case "[object Boolean]":
                        case "[object Number]":
                        case "[object String]":
                        case "[object Date]":
                            return new e.constructor(e.valueOf());
                        case "[object RegExp]":
                            return (t = new RegExp(e.source, e.toString().match(/[^/]*$/)[0])).lastIndex = e.lastIndex, t;
                        case "[object Blob]":
                            return new e.constructor([e], {
                                type: e.type
                            })
                    }
                    if (S(e.cloneNode)) return e.cloneNode(!0)
                }(e);
            return void 0 === r && (r = or(e) ? [] : Object.create(Yn(e)), n = !0), u.push(e), c.push(r), n ? i(e, r, t) : r
        }
        var s, u = [],
            c = [];
        if (r = n(r) ? r : NaN, t) {
            if ((s = t) && A(s.length) && ar.test(Qn.call(s)) || "[object ArrayBuffer]" === Qn.call(t)) throw Xn("cpta");
            if (e === t) throw Xn("cpi");
            return or(t) ? t.length = 0 : o(t, function(e, n) {
                "$$hashKey" !== n && delete t[n]
            }), u.push(e), c.push(t), i(e, t, r)
        }
        return a(e, r)
    }

    function V(e, t) {
        return e === t || e != e && t != t
    }

    function P(e, t) {
        if (e === t) return !0;
        if (null === e || null === t) return !1;
        if (e != e && t != t) return !0;
        var n, r = typeof e;
        if (r === typeof t && "object" === r) {
            if (!or(e)) {
                if (x(e)) return !!x(t) && V(e.getTime(), t.getTime());
                if (k(e)) return !!k(t) && e.toString() === t.toString();
                if (_(e) || _(t) || E(e) || E(t) || or(t) || x(t) || k(t)) return !1;
                for (n in r = oe(), e)
                    if ("$" !== n.charAt(0) && !S(e[n])) {
                        if (!P(e[n], t[n])) return !1;
                        r[n] = !0
                    }
                for (n in t)
                    if (!(n in r) && "$" !== n.charAt(0) && v(t[n]) && !S(t[n])) return !1;
                return !0
            }
            if (!or(t)) return !1;
            if ((r = e.length) === t.length) {
                for (n = 0; n < r; n++)
                    if (!P(e[n], t[n])) return !1;
                return !0
            }
        }
        return !1
    }

    function T(e, t, n) {
        return e.concat(Kn.call(t, n))
    }

    function I(e, t) {
        var n = 2 < arguments.length ? Kn.call(arguments, 2) : [];
        return !S(t) || t instanceof RegExp ? t : n.length ? function() {
            return arguments.length ? t.apply(e, T(n, arguments, 0)) : t.apply(e, n)
        } : function() {
            return arguments.length ? t.apply(e, arguments) : t.call(e)
        }
    }

    function B(t, n) {
        var r = n;
        return "string" == typeof t && "$" === t.charAt(0) && "$" === t.charAt(1) ? r = void 0 : E(n) ? r = "$WINDOW" : n && e.document === n ? r = "$DOCUMENT" : _(n) && (r = "$SCOPE"), r
    }

    function N(e, t) {
        if (!$(e)) return A(t) || (t = t ? 2 : null), JSON.stringify(e, B, t)
    }

    function R(e) {
        return w(e) ? JSON.parse(e) : e
    }

    function j(e, t) {
        e = e.replace(dr, "");
        var n = Date.parse("Jan 01, 1970 00:00:00 " + e) / 6e4;
        return nr(n) ? t : n
    }

    function q(e, t, n) {
        n = n ? -1 : 1;
        var r = e.getTimezoneOffset();
        return n *= (t = j(t, r)) - r, (e = new Date(e.getTime())).setMinutes(e.getMinutes() + n), e
    }

    function z(e) {
        e = Rn(e).clone().empty();
        var t = Rn("<div>").append(e).html();
        try {
            return e[0].nodeType === mr ? Gn(t) : t.match(/^(<[^>]+>)/)[1].replace(/^<([\w-]+)/, function(e, t) {
                return "<" + Gn(t)
            })
        } catch (e) {
            return Gn(t)
        }
    }

    function L(e) {
        try {
            return decodeURIComponent(e)
        } catch (e) {}
    }

    function H(e) {
        var t = {};
        return o((e || "").split("&"), function(e) {
            var n, r, i;
            e && (r = e = e.replace(/\+/g, "%20"), -1 !== (n = e.indexOf("=")) && (r = e.substring(0, n), i = e.substring(n + 1)), v(r = L(r)) && (i = !v(i) || L(i), Hn.call(t, r) ? or(t[r]) ? t[r].push(i) : t[r] = [t[r], i] : t[r] = i))
        }), t
    }

    function G(e) {
        var t = [];
        return o(e, function(e, n) {
            or(e) ? o(e, function(e) {
                t.push(K(n, !0) + (!0 === e ? "" : "=" + K(e, !0)))
            }) : t.push(K(n, !0) + (!0 === e ? "" : "=" + K(e, !0)))
        }), t.length ? t.join("&") : ""
    }

    function W(e) {
        return K(e, !0).replace(/%26/gi, "&").replace(/%3D/gi, "=").replace(/%2B/gi, "+")
    }

    function K(e, t) {
        return encodeURIComponent(e).replace(/%40/gi, "@").replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%3B/gi, ";").replace(/%20/g, t ? "%20" : "+")
    }

    function J(t, n) {
        var r, i, a = {};
        o(fr, function(e) {
            e += "app", !r && t.hasAttribute && t.hasAttribute(e) && (r = t, i = t.getAttribute(e))
        }), o(fr, function(e) {
            var n;
            e += "app", !r && (n = t.querySelector("[" + e.replace(":", "\\:") + "]")) && (r = n, i = n.getAttribute(e))
        }), r && (pr ? (a.strictDi = null !== function(e, t) {
            var n, r, i = fr.length;
            for (r = 0; r < i; ++r)
                if (n = fr[r] + t, w(n = e.getAttribute(n))) return n;
            return null
        }(r, "strict-di"), n(r, i ? [i] : [], a)) : e.console.error("Angular: disabling automatic bootstrap. <script> protocol indicates an extension, document.location.href does not match."))
    }

    function Z(t, n, r) {
        y(r) || (r = {}), r = c({
            strictDi: !1
        }, r);
        var i = function() {
                if ((t = Rn(t)).injector()) {
                    var i = t[0] === e.document ? "document" : z(t);
                    throw Xn("btstrpd", i.replace(/</, "&lt;").replace(/>/, "&gt;"))
                }
                return (n = n || []).unshift(["$provide", function(e) {
                    e.value("$rootElement", t)
                }]), r.debugInfoEnabled && n.push(["$compileProvider", function(e) {
                    e.debugInfoEnabled(!0)
                }]), n.unshift("ng"), (i = Te(n, r.strictDi)).invoke(["$rootScope", "$rootElement", "$compile", "$injector", function(e, t, n, r) {
                    e.$apply(function() {
                        t.data("$injector", r), n(t)(e)
                    })
                }]), i
            },
            a = /^NG_ENABLE_DEBUG_INFO!/,
            s = /^NG_DEFER_BOOTSTRAP!/;
        if (e && a.test(e.name) && (r.debugInfoEnabled = !0, e.name = e.name.replace(a, "")), e && !s.test(e.name)) return i();
        e.name = e.name.replace(s, ""), er.resumeBootstrap = function(e) {
            return o(e, function(e) {
                n.push(e)
            }), i()
        }, S(er.resumeDeferredBootstrap) && er.resumeDeferredBootstrap()
    }

    function Q() {
        e.name = "NG_ENABLE_DEBUG_INFO!" + e.name, e.location.reload()
    }

    function Y(e) {
        if (!(e = er.element(e).injector())) throw Xn("test");
        return e.get("$$testability")
    }

    function X(e, t) {
        return t = t || "_", e.replace(hr, function(e, n) {
            return (n ? t : "") + e.toLowerCase()
        })
    }

    function ee(e, t, n) {
        if (!e) throw Xn("areq", t || "?", n || "required");
        return e
    }

    function te(e, t, n) {
        return n && or(e) && (e = e[e.length - 1]), ee(S(e), t, "not a function, got " + (e && "object" == typeof e ? e.constructor.name || "Object" : typeof e)), e
    }

    function ne(e, t) {
        if ("hasOwnProperty" === e) throw Xn("badname", t)
    }

    function re(e, t, n) {
        if (!t) return e;
        for (var r, i = e, o = (t = t.split(".")).length, a = 0; a < o; a++) r = t[a], e && (e = (i = e)[r]);
        return !n && S(e) ? I(i, e) : e
    }

    function ie(e) {
        for (var t, n = e[0], r = e[e.length - 1], i = 1; n !== r && (n = n.nextSibling); i++)(t || e[i] !== n) && (t || (t = Rn(Kn.call(e, 0, i))), t.push(n));
        return t || e
    }

    function oe() {
        return Object.create(null)
    }

    function ae(e) {
        if (null == e) return "";
        switch (typeof e) {
            case "string":
                break;
            case "number":
                e = "" + e;
                break;
            default:
                e = !m(e) || or(e) || x(e) ? N(e) : e.toString()
        }
        return e
    }

    function se(e, t) {
        if (or(e)) {
            t = t || [];
            for (var n = 0, r = e.length; n < r; n++) t[n] = e[n]
        } else if (y(e))
            for (n in t = t || {}, e) "$" === n.charAt(0) && "$" === n.charAt(1) || (t[n] = e[n]);
        return t || e
    }

    function ue(e, t) {
        var r = [];
        return n(t) && (e = er.copy(e, null, t)), JSON.stringify(e, function(e, t) {
            if (y(t = B(e, t))) {
                if (0 <= r.indexOf(t)) return "...";
                r.push(t)
            }
            return t
        })
    }

    function ce(e, t) {
        return t.toUpperCase()
    }

    function le(e) {
        return e.replace(br, ce)
    }

    function de(e) {
        return 1 === (e = e.nodeType) || !e || 9 === e
    }

    function fe(e, t) {
        var n, r, i = t.createDocumentFragment(),
            a = [];
        if (Sr.test(e)) {
            for (n = i.appendChild(t.createElement("div")), r = (kr.exec(e) || ["", ""])[1].toLowerCase(), r = _r[r] || _r._default, n.innerHTML = r[1] + e.replace(Er, "<$1></$2>") + r[2], r = r[0]; r--;) n = n.lastChild;
            a = T(a, n.childNodes), (n = i.firstChild).textContent = ""
        } else a.push(t.createTextNode(e));
        return i.textContent = "", i.innerHTML = "", o(a, function(e) {
            i.appendChild(e)
        }), i
    }

    function pe(t) {
        if (t instanceof pe) return t;
        var n, r;
        if (w(t) && (t = sr(t), n = !0), !(this instanceof pe)) {
            if (n && "<" !== t.charAt(0)) throw xr("nosel");
            return new pe(t)
        }
        n ? (n = e.document, xe(this, t = (r = Cr.exec(t)) ? [n.createElement(r[1])] : (r = fe(t, n)) ? r.childNodes : [])) : S(t) ? _e(t) : xe(this, t)
    }

    function he(e) {
        return e.cloneNode(!0)
    }

    function ge(e, t) {
        !t && de(e) && Rn.cleanData([e]), e.querySelectorAll && Rn.cleanData(e.querySelectorAll("*"))
    }

    function me(e, t, n, r) {
        if (v(r)) throw xr("offargs");
        var i = (r = ve(e)) && r.events,
            a = r && r.handle;
        if (a)
            if (t) {
                var s = function(t) {
                    var r = i[t];
                    v(n) && F(r || [], n), v(n) && r && 0 < r.length || (e.removeEventListener(t, a), delete i[t])
                };
                o(t.split(" "), function(e) {
                    s(e), Ar[e] && s(Ar[e])
                })
            } else
                for (t in i) "$destroy" !== t && e.removeEventListener(t, a), delete i[t]
    }

    function $e(e, t) {
        var n = e.ng339,
            r = n && vr[n];
        r && (t ? delete r.data[t] : (r.handle && (r.events.$destroy && r.handle({}, "$destroy"), me(e)), delete vr[n], e.ng339 = void 0))
    }

    function ve(e, t) {
        var n = (n = e.ng339) && vr[n];
        return t && !n && (e.ng339 = n = ++yr, n = vr[n] = {
            events: {},
            data: {},
            handle: void 0
        }), n
    }

    function ye(e, t, n) {
        if (de(e)) {
            var r, i = v(n),
                o = !i && t && !y(t),
                a = !t;
            if (e = (e = ve(e, !o)) && e.data, i) e[le(t)] = n;
            else {
                if (a) return e;
                if (o) return e && e[le(t)];
                for (r in t) e[le(r)] = t[r]
            }
        }
    }

    function be(e, t) {
        return !!e.getAttribute && -1 < (" " + (e.getAttribute("class") || "") + " ").replace(/[\n\t]/g, " ").indexOf(" " + t + " ")
    }

    function we(e, t) {
        if (t && e.setAttribute) {
            var n = (" " + (e.getAttribute("class") || "") + " ").replace(/[\n\t]/g, " "),
                r = n;
            o(t.split(" "), function(e) {
                e = sr(e), r = r.replace(" " + e + " ", " ")
            }), r !== n && e.setAttribute("class", sr(r))
        }
    }

    function Ae(e, t) {
        if (t && e.setAttribute) {
            var n = (" " + (e.getAttribute("class") || "") + " ").replace(/[\n\t]/g, " "),
                r = n;
            o(t.split(" "), function(e) {
                e = sr(e), -1 === r.indexOf(" " + e + " ") && (r += e + " ")
            }), r !== n && e.setAttribute("class", sr(r))
        }
    }

    function xe(e, t) {
        if (t)
            if (t.nodeType) e[e.length++] = t;
            else {
                var n = t.length;
                if ("number" == typeof n && t.window !== t) {
                    if (n)
                        for (var r = 0; r < n; r++) e[e.length++] = t[r]
                } else e[e.length++] = t
            }
    }

    function Ce(e, t) {
        return Se(e, "$" + (t || "ngController") + "Controller")
    }

    function Se(e, t, n) {
        for (9 === e.nodeType && (e = e.documentElement), t = or(t) ? t : [t]; e;) {
            for (var r = 0, i = t.length; r < i; r++)
                if (v(n = Rn.data(e, t[r]))) return n;
            e = e.parentNode || 11 === e.nodeType && e.host
        }
    }

    function ke(e) {
        for (ge(e, !0); e.firstChild;) e.removeChild(e.firstChild)
    }

    function Ee(e, t) {
        t || ge(e);
        var n = e.parentNode;
        n && n.removeChild(e)
    }

    function _e(t) {
        function n() {
            e.document.removeEventListener("DOMContentLoaded", n), e.removeEventListener("load", n), t()
        }
        "complete" === e.document.readyState ? e.setTimeout(t) : (e.document.addEventListener("DOMContentLoaded", n), e.addEventListener("load", n))
    }

    function De(e, t) {
        var n = Mr[t.toLowerCase()];
        return n && Fr[M(e)] && n
    }

    function Oe(e, t, n) {
        n.call(e, t)
    }

    function Me(e, t, n) {
        var r = t.relatedTarget;
        r && (r === e || Dr.call(e, r)) || n.call(e, t)
    }

    function Fe() {
        this.$get = function() {
            return c(pe, {
                hasClass: function(e, t) {
                    return e.attr && (e = e[0]), be(e, t)
                },
                addClass: function(e, t) {
                    return e.attr && (e = e[0]), Ae(e, t)
                },
                removeClass: function(e, t) {
                    return e.attr && (e = e[0]), we(e, t)
                }
            })
        }
    }

    function Ue(e, t) {
        var n = e && e.$$hashKey;
        return n ? ("function" == typeof n && (n = e.$$hashKey()), n) : "function" === (n = typeof e) || "object" === n && null !== e ? e.$$hashKey = n + ":" + (t || function() {
            return ++tr
        })() : n + ":" + e
    }

    function Ve() {
        this._keys = [], this._values = [], this._lastKey = NaN, this._lastIndex = -1
    }

    function Pe(e) {
        return (e = Function.prototype.toString.call(e).replace(jr, "")).match(Ir) || e.match(Br)
    }

    function Te(e, t) {
        function n(e) {
            return function(t, n) {
                if (!y(t)) return e(t, n);
                o(t, s(e))
            }
        }

        function r(e, t) {
            if (ne(e, "service"), (S(t) || or(t)) && (t = p.instantiate(t)), !t.$get) throw qr("pget", e);
            return f[e + "Provider"] = t
        }

        function i(e, t, n) {
            return r(e, {
                $get: !1 !== n ? (i = e, o = t, function() {
                    var e = v.invoke(o, this);
                    if ($(e)) throw qr("undef", i);
                    return e
                }) : t
            });
            var i, o
        }

        function a(e) {
            ee($(e) || or(e), "modulesToLoad", "not an array");
            var t, n = [];
            return o(e, function(e) {
                function r(e) {
                    var t, n;
                    for (t = 0, n = e.length; t < n; t++) {
                        var r = e[t],
                            i = p.get(r[0]);
                        i[r[1]].apply(i, r[2])
                    }
                }
                if (!d.get(e)) {
                    d.set(e, !0);
                    try {
                        w(e) ? (t = qn(e), v.modules[e] = t, n = n.concat(a(t.requires)).concat(t._runBlocks), r(t._invokeQueue), r(t._configBlocks)) : S(e) ? n.push(p.invoke(e)) : or(e) ? n.push(p.invoke(e)) : te(e, "module")
                    } catch (t) {
                        throw or(e) && (e = e[e.length - 1]), t.message && t.stack && -1 === t.stack.indexOf(t.message) && (t = t.message + "\n" + t.stack), qr("modulerr", e, t.stack || t.message || t)
                    }
                }
            }), n
        }

        function u(e, n) {
            function r(t, r) {
                if (e.hasOwnProperty(t)) {
                    if (e[t] === c) throw qr("cdep", t + " <- " + l.join(" <- "));
                    return e[t]
                }
                try {
                    return l.unshift(t), e[t] = c, e[t] = n(t, r), e[t]
                } catch (n) {
                    throw e[t] === c && delete e[t], n
                } finally {
                    l.shift()
                }
            }

            function i(e, n, i) {
                for (var o = [], a = 0, s = (e = Te.$$annotate(e, t, i)).length; a < s; a++) {
                    var u = e[a];
                    if ("string" != typeof u) throw qr("itkn", u);
                    o.push(n && n.hasOwnProperty(u) ? n[u] : r(u, i))
                }
                return o
            }
            return {
                invoke: function(e, t, n, r) {
                    if ("string" == typeof n && (r = n, n = null), n = i(e, n, r), or(e) && (e = e[e.length - 1]), r = e, Nn || "function" != typeof r) r = !1;
                    else {
                        var o = r.$$ngIsClass;
                        D(o) || (o = r.$$ngIsClass = /^(?:class\b|constructor\()/.test(Function.prototype.toString.call(r))), r = o
                    }
                    return r ? (n.unshift(null), new(Function.prototype.bind.apply(e, n))) : e.apply(t, n)
                },
                instantiate: function(e, t, n) {
                    var r = or(e) ? e[e.length - 1] : e;
                    return (e = i(e, t, n)).unshift(null), new(Function.prototype.bind.apply(r, e))
                },
                get: r,
                annotate: Te.$$annotate,
                has: function(t) {
                    return f.hasOwnProperty(t + "Provider") || e.hasOwnProperty(t)
                }
            }
        }
        t = !0 === t;
        var c = {},
            l = [],
            d = new Pr,
            f = {
                $provide: {
                    provider: n(r),
                    factory: n(i),
                    service: n(function(e, t) {
                        return i(e, ["$injector", function(e) {
                            return e.instantiate(t)
                        }])
                    }),
                    value: n(function(e, t) {
                        return i(e, g(t), !1)
                    }),
                    constant: n(function(e, t) {
                        ne(e, "constant"), f[e] = t, h[e] = t
                    }),
                    decorator: function(e, t) {
                        var n = p.get(e + "Provider"),
                            r = n.$get;
                        n.$get = function() {
                            var e = v.invoke(r, n);
                            return v.invoke(t, null, {
                                $delegate: e
                            })
                        }
                    }
                }
            },
            p = f.$injector = u(f, function(e, t) {
                throw er.isString(t) && l.push(t), qr("unpr", l.join(" <- "))
            }),
            h = {},
            m = u(h, function(e, t) {
                var n = p.get(e + "Provider", t);
                return v.invoke(n.$get, n, void 0, e)
            }),
            v = m;
        f.$injectorProvider = {
            $get: g(m)
        }, v.modules = p.modules = oe();
        var b = a(e);
        return (v = m.get("$injector")).strictDi = t, o(b, function(e) {
            e && v.invoke(e)
        }), v.loadNewModules = function(e) {
            o(a(e), function(e) {
                e && v.invoke(e)
            })
        }, v
    }

    function Ie() {
        var t = !0;
        this.disableAutoScrolling = function() {
            t = !1
        }, this.$get = ["$window", "$location", "$rootScope", function(n, r, i) {
            function o(e) {
                var t;
                e ? (e.scrollIntoView(), S(t = a.yOffset) ? t = t() : O(t) ? (t = t[0], t = "fixed" !== n.getComputedStyle(t).position ? 0 : t.getBoundingClientRect().bottom) : A(t) || (t = 0), t && (e = e.getBoundingClientRect().top, n.scrollBy(0, e - t))) : n.scrollTo(0, 0)
            }

            function a(e) {
                var t, n, i;
                (e = w(e) ? e : A(e) ? e.toString() : r.hash()) ? (t = s.getElementById(e)) ? o(t): (n = s.getElementsByName(e), i = null, Array.prototype.some.call(n, function(e) {
                    if ("a" === M(e)) return i = e, !0
                }), (t = i) ? o(t) : "top" === e && o(null)): o(null)
            }
            var s = n.document;
            return t && i.$watch(function() {
                return r.hash()
            }, function(t, n) {
                var r, o;
                t === n && "" === t || (r = function() {
                    i.$evalAsync(a)
                }, "complete" === (o = o || e).document.readyState ? o.setTimeout(r) : Rn(o).on("load", r))
            }), a
        }]
    }

    function Be(e, t) {
        return e || t ? e ? t ? (or(e) && (e = e.join(" ")), or(t) && (t = t.join(" ")), e + " " + t) : e : t : ""
    }

    function Ne(e) {
        return y(e) ? e : {}
    }

    function Re() {
        this.$get = ["$window", "$log", "$sniffer", "$document", function(e, t, n, r) {
            return new function(e, t, n, r) {
                function i(e) {
                    try {
                        e.apply(null, Kn.call(arguments, 1))
                    } finally {
                        if (0 == --m)
                            for (; v.length;) try {
                                v.pop()()
                            } catch (e) {
                                n.error(e)
                            }
                    }
                }

                function a() {
                    x = null, u()
                }

                function s() {
                    P(y = $(y = C()) ? null : y, E) && (y = E), b = E = y
                }

                function u() {
                    var e = b;
                    s(), w === c.url() && e === y || (w = c.url(), b = y, o(S, function(e) {
                        e(c.url(), y)
                    }))
                }
                var c = this,
                    l = e.location,
                    d = e.history,
                    f = e.setTimeout,
                    h = e.clearTimeout,
                    g = {};
                c.isMock = !1;
                var m = 0,
                    v = [];
                c.$$completeOutstandingRequest = i, c.$$incOutstandingRequestCount = function() {
                    m++
                }, c.notifyWhenNoOutstandingRequests = function(e) {
                    0 === m ? e() : v.push(e)
                };
                var y, b, w = l.href,
                    A = t.find("base"),
                    x = null,
                    C = r.history ? function() {
                        try {
                            return d.state
                        } catch (e) {}
                    } : p;
                s(), c.url = function(t, n, i) {
                    if ($(i) && (i = null), l !== e.location && (l = e.location), d !== e.history && (d = e.history), t) {
                        var o = b === i;
                        if (w === t && (!r.history || o)) return c;
                        var a = w && gt(w) === gt(t);
                        return w = t, b = i, !r.history || a && o ? (a || (x = t), n ? l.replace(t) : a ? (n = l, i = -1 === (i = t.indexOf("#")) ? "" : t.substr(i), n.hash = i) : l.href = t, l.href !== t && (x = t)) : (d[n ? "replaceState" : "pushState"](i, "", t), s()), x && (x = t), c
                    }
                    return x || l.href.replace(/%27/g, "'")
                }, c.state = function() {
                    return y
                };
                var S = [],
                    k = !1,
                    E = null;
                c.onUrlChange = function(t) {
                    return k || (r.history && Rn(e).on("popstate", a), Rn(e).on("hashchange", a), k = !0), S.push(t), t
                }, c.$$applicationDestroyed = function() {
                    Rn(e).off("hashchange popstate", a)
                }, c.$$checkUrlChange = u, c.baseHref = function() {
                    var e = A.attr("href");
                    return e ? e.replace(/^(https?:)?\/\/[^/]*/, "") : ""
                }, c.defer = function(e, t) {
                    var n;
                    return m++, n = f(function() {
                        delete g[n], i(e)
                    }, t || 0), g[n] = !0, n
                }, c.defer.cancel = function(e) {
                    return !!g[e] && (delete g[e], h(e), i(p), !0)
                }
            }(e, r, t, n)
        }]
    }

    function je() {
        this.$get = function() {
            function e(e, n) {
                function i(e) {
                    e !== f && (p ? p === e && (p = e.n) : p = e, o(e.n, e.p), o(e, f), (f = e).n = null)
                }

                function o(e, t) {
                    e !== t && (e && (e.p = t), t && (t.n = e))
                }
                if (e in t) throw r("$cacheFactory")("iid", e);
                var a = 0,
                    s = c({}, n, {
                        id: e
                    }),
                    u = oe(),
                    l = n && n.capacity || Number.MAX_VALUE,
                    d = oe(),
                    f = null,
                    p = null;
                return t[e] = {
                    put: function(e, t) {
                        if (!$(t)) {
                            if (l < Number.MAX_VALUE) i(d[e] || (d[e] = {
                                key: e
                            }));
                            return e in u || a++, u[e] = t, a > l && this.remove(p.key), t
                        }
                    },
                    get: function(e) {
                        if (l < Number.MAX_VALUE) {
                            var t = d[e];
                            if (!t) return;
                            i(t)
                        }
                        return u[e]
                    },
                    remove: function(e) {
                        if (l < Number.MAX_VALUE) {
                            var t = d[e];
                            if (!t) return;
                            t === f && (f = t.p), t === p && (p = t.n), o(t.n, t.p), delete d[e]
                        }
                        e in u && (delete u[e], a--)
                    },
                    removeAll: function() {
                        u = oe(), a = 0, d = oe(), f = p = null
                    },
                    destroy: function() {
                        d = s = u = null, delete t[e]
                    },
                    info: function() {
                        return c({}, s, {
                            size: a
                        })
                    }
                }
            }
            var t = {};
            return e.info = function() {
                var e = {};
                return o(t, function(t, n) {
                    e[n] = t.info()
                }), e
            }, e.get = function(e) {
                return t[e]
            }, e
        }
    }

    function qe() {
        this.$get = ["$cacheFactory", function(e) {
            return e("templates")
        }]
    }

    function ze(t, n) {
        function r(e, t, n) {
            var r = /^\s*([@&<]|=(\*?))(\??)\s*([\w$]*)\s*$/,
                i = oe();
            return o(e, function(e, o) {
                if (e in b) i[o] = b[e];
                else {
                    var a = e.match(r);
                    if (!a) throw Zr("iscp", t, o, e, n ? "controller bindings definition" : "isolate scope definition");
                    i[o] = {
                        mode: a[1][0],
                        collection: "*" === a[2],
                        optional: "?" === a[3],
                        attrName: a[4] || o
                    }, a[4] && (b[e] = i[o])
                }
            }), i
        }
        var i = {},
            a = /^\s*directive:\s*([\w-]+)\s+(.*)$/,
            u = /(([\w-]+)(?::([^;]+))?;?)/,
            l = function(e) {
                var t, n = {};
                for (e = e.split(","), t = 0; t < e.length; t++) n[e[t]] = !0;
                return n
            }("ngSrc,ngSrcset,src,srcset"),
            d = /^(?:(\^\^?)?(\?)?(\^\^?)?)?/,
            m = /^(on[a-z]+|formaction)$/,
            b = oe();
        this.directive = function e(n, r) {
            return ee(n, "name"), ne(n, "directive"), w(n) ? (function(e) {
                var t = e.charAt(0);
                if (!t || t !== Gn(t)) throw Zr("baddir", e);
                if (e !== e.trim()) throw Zr("baddir", e)
            }(n), ee(r, "directiveFactory"), i.hasOwnProperty(n) || (i[n] = [], t.factory(n + "Directive", ["$injector", "$exceptionHandler", function(e, t) {
                var r = [];
                return o(i[n], function(i, a) {
                    try {
                        var s = e.invoke(i);
                        S(s) ? s = {
                            compile: g(s)
                        } : !s.compile && s.link && (s.compile = g(s.link)), s.priority = s.priority || 0, s.index = a, s.name = s.name || n, s.require = (f = (l = s).require || l.controller && l.name, !or(f) && y(f) && o(f, function(e, t) {
                            var n = e.match(d);
                            e.substring(n[0].length) || (f[t] = n[0] + t)
                        }), f);
                        var u = s,
                            c = s.restrict;
                        if (c && (!w(c) || !/[EACM]/.test(c))) throw Zr("badrestrict", c, n);
                        u.restrict = c || "EA", s.$$moduleName = i.$$moduleName, r.push(s)
                    } catch (e) {
                        t(e)
                    }
                    var l, f
                }), r
            }])), i[n].push(r)) : o(n, s(e)), this
        }, this.component = function e(t, n) {
            function r(e) {
                function t(t) {
                    return S(t) || or(t) ? function(n, r) {
                        return e.invoke(t, this, {
                            $element: n,
                            $attrs: r
                        })
                    } : t
                }
                var r = n.template || n.templateUrl ? n.template : "",
                    a = {
                        controller: i,
                        controllerAs: function(e, t) {
                            if (t && w(t)) return t;
                            if (w(e)) {
                                var n = ti.exec(e);
                                if (n) return n[3]
                            }
                        }(n.controller) || n.controllerAs || "$ctrl",
                        template: t(r),
                        templateUrl: t(n.templateUrl),
                        transclude: n.transclude,
                        scope: {},
                        bindToController: n.bindings || {},
                        restrict: "E",
                        require: n.require
                    };
                return o(n, function(e, t) {
                    "$" === t.charAt(0) && (a[t] = e)
                }), a
            }
            if (!w(t)) return o(t, s(I(this, e))), this;
            var i = n.controller || function() {};
            return o(n, function(e, t) {
                "$" === t.charAt(0) && (r[t] = e, S(i) && (i[t] = e))
            }), r.$inject = ["$injector"], this.directive(t, r)
        }, this.aHrefSanitizationWhitelist = function(e) {
            return v(e) ? (n.aHrefSanitizationWhitelist(e), this) : n.aHrefSanitizationWhitelist()
        }, this.imgSrcSanitizationWhitelist = function(e) {
            return v(e) ? (n.imgSrcSanitizationWhitelist(e), this) : n.imgSrcSanitizationWhitelist()
        };
        var A = !0;
        this.debugInfoEnabled = function(e) {
            return v(e) ? (A = e, this) : A
        };
        var x = !1;
        this.preAssignBindingsEnabled = function(e) {
            return v(e) ? (x = e, this) : x
        };
        var k = !1;
        this.strictComponentBindingsEnabled = function(e) {
            return v(e) ? (k = e, this) : k
        };
        var E = 10;
        this.onChangesTtl = function(e) {
            return arguments.length ? (E = e, this) : E
        };
        var O = !0;
        this.commentDirectivesEnabled = function(e) {
            return arguments.length ? (O = e, this) : O
        };
        var U = !0;
        this.cssClassDirectivesEnabled = function(e) {
            return arguments.length ? (U = e, this) : U
        }, this.$get = ["$injector", "$interpolate", "$exceptionHandler", "$templateRequest", "$parse", "$controller", "$rootScope", "$sce", "$animate", "$$sanitizeUri", function(t, n, s, g, b, T, B, N, R, j) {
            function q() {
                try {
                    if (!--Se) throw be = void 0, Zr("infchng", E);
                    B.$apply(function() {
                        for (var e = [], t = 0, n = be.length; t < n; ++t) try {
                            be[t]()
                        } catch (t) {
                            e.push(t)
                        }
                        if (be = void 0, e.length) throw e
                    })
                } finally {
                    Se++
                }
            }

            function L(e, t) {
                if (t) {
                    var n, r, i, o = Object.keys(t);
                    for (n = 0, r = o.length; n < r; n++) this[i = o[n]] = t[i]
                } else this.$attr = {};
                this.$$element = e
            }

            function H(e, t) {
                try {
                    e.addClass(t)
                } catch (e) {}
            }

            function G(e, t, n, r, i) {
                e instanceof Rn || (e = Rn(e));
                var o = W(e, t, e, n, r, i);
                G.$$addScopeClass(e);
                var a = null;
                return function(t, n, r) {
                    if (!e) throw Zr("multilink");
                    ee(t, "scope"), i && i.needsNewScope && (t = t.$parent.$new());
                    var s = (r = r || {}).parentBoundTranscludeFn,
                        u = r.transcludeControllers;
                    if (r = r.futureParentElement, s && s.$$boundTransclude && (s = s.$$boundTransclude), a || (a = (r = r && r[0]) && "foreignobject" !== M(r) && Qn.call(r).match(/SVG/) ? "svg" : "html"), r = "html" !== a ? Rn(fe(a, Rn("<div>").append(e).html())) : n ? Or.clone.call(e) : e, u)
                        for (var c in u) r.data("$" + c + "Controller", u[c].instance);
                    return G.$$addScopeInfo(r, t), n && n(r, t), o && o(t, r, r, s), n || (e = o = null), r
                }
            }

            function W(e, t, n, r, i, o) {
                for (var a, s, u, c, l, d = [], f = or(e) || e instanceof Rn, p = 0; p < e.length; p++) a = new L, 11 === Nn && K(e, p, f), (o = (s = Z(e[p], [], a, 0 === p ? r : void 0, i)).length ? ne(s, e[p], a, t, n, null, [], [], o) : null) && o.scope && G.$$addScopeClass(a.$$element), a = o && o.terminal || !(u = e[p].childNodes) || !u.length ? null : W(u, o ? (o.transcludeOnThisElement || !o.templateOnThisElement) && o.transclude : t), (o || a) && (d.push(p, o, a), c = !0, l = l || o), o = null;
                return c ? function(e, n, r, i) {
                    var o, a, s, u, c, f;
                    if (l)
                        for (f = Array(n.length), u = 0; u < d.length; u += 3) f[o = d[u]] = n[o];
                    else f = n;
                    for (u = 0, c = d.length; u < c;) a = f[d[u++]], n = d[u++], o = d[u++], n ? (n.scope ? (s = e.$new(), G.$$addScopeInfo(Rn(a), s)) : s = e, n(o, s, a, r, n.transcludeOnThisElement ? J(e, n.transclude, i) : !n.templateOnThisElement && i ? i : !i && t ? J(e, t) : null)) : o && o(e, a.childNodes, void 0, i)
                } : null
            }

            function K(e, t, n) {
                var r, i = e[t],
                    o = i.parentNode;
                if (i.nodeType === mr)
                    for (;
                        (r = o ? i.nextSibling : e[t + 1]) && r.nodeType === mr;) i.nodeValue += r.nodeValue, r.parentNode && r.parentNode.removeChild(r), n && r === e[t + 1] && e.splice(t + 1, 1)
            }

            function J(e, t, n) {
                function r(r, i, o, a, s) {
                    return r || ((r = e.$new(!1, s)).$$transcluded = !0), t(r, i, {
                        parentBoundTranscludeFn: n,
                        transcludeControllers: o,
                        futureParentElement: a
                    })
                }
                var i, o = r.$$slots = oe();
                for (i in t.$$slots) o[i] = t.$$slots[i] ? J(e, t.$$slots[i], n) : null;
                return r
            }

            function Z(e, t, r, i, o) {
                var s, c, l, d, f = r.$attr;
                switch (e.nodeType) {
                    case 1:
                        ae(t, He(s = M(e)), "E", i, o);
                        for (var p, h, g, m, $ = e.attributes, v = 0, b = $ && $.length; v < b; v++) {
                            var A = !1,
                                x = !1;
                            h = (p = $[v]).name, g = p.value, p = He(h), (m = Oe.test(p)) && (h = h.replace(Yr, "").substr(8).replace(/_(.)/g, function(e, t) {
                                return t.toUpperCase()
                            })), (p = p.match(Me)) && se(p[1]) && (A = h, x = h.substr(0, h.length - 5) + "end", h = h.substr(0, h.length - 6)), f[p = He(h.toLowerCase())] = h, !m && r.hasOwnProperty(p) || (r[p] = g, De(e, p) && (r[p] = !0)), pe(e, t, g, p, m), ae(t, p, "A", i, o, A, x)
                        }
                        if ("input" === s && "hidden" === e.getAttribute("type") && e.setAttribute("autocomplete", "off"), !Ce) break;
                        if (y(f = e.className) && (f = f.animVal), w(f) && "" !== f)
                            for (; e = u.exec(f);) ae(t, p = He(e[2]), "C", i, o) && (r[p] = sr(e[3])), f = f.substr(e.index + e[0].length);
                        break;
                    case mr:
                        c = t, l = e.nodeValue, (d = n(l, !0)) && c.push({
                            priority: 0,
                            compile: function(e) {
                                var t = !!(e = e.parent()).length;
                                return t && G.$$addBindingClass(e),
                                    function(e, n) {
                                        var r = n.parent();
                                        t || G.$$addBindingClass(r), G.$$addBindingInfo(r, d.expressions), e.$watch(d, function(e) {
                                            n[0].nodeValue = e
                                        })
                                    }
                            }
                        });
                        break;
                    case 8:
                        if (!xe) break;
                        ! function(e, t, n, r, i) {
                            try {
                                var o = a.exec(e.nodeValue);
                                if (o) {
                                    var s = He(o[1]);
                                    ae(t, s, "M", r, i) && (n[s] = sr(o[2]))
                                }
                            } catch (e) {}
                        }(e, t, r, i, o)
                }
                return t.sort(le), t
            }

            function Q(e, t, n) {
                var r = [],
                    i = 0;
                if (t && e.hasAttribute && e.hasAttribute(t))
                    do {
                        if (!e) throw Zr("uterdir", t, n);
                        1 === e.nodeType && (e.hasAttribute(t) && i++, e.hasAttribute(n) && i--), r.push(e), e = e.nextSibling
                    } while (0 < i);
                else r.push(e);
                return Rn(r)
            }

            function Y(e, t, n) {
                return function(r, i, o, a, s) {
                    return i = Q(i[0], t, n), e(r, i, o, a, s)
                }
            }

            function te(e, t, n, r, i, o) {
                var a;
                return e ? G(t, n, r, i, o) : function() {
                    return a || (a = G(t, n, r, i, o), t = n = o = null), a.apply(this, arguments)
                }
            }

            function ne(e, t, n, r, i, a, u, l, d) {
                function f(e, t, n, r) {
                    e && (n && (e = Y(e, n, r)), e.require = h.require, e.directiveName = g, (k === h || h.$$isolateScope) && (e = me(e, {
                        isolateScope: !0
                    })), u.push(e)), t && (n && (t = Y(t, n, r)), t.require = h.require, t.directiveName = g, (k === h || h.$$isolateScope) && (t = me(t, {
                        isolateScope: !0
                    })), l.push(t))
                }

                function p(e, r, i, a, d) {
                    var f, p, h, g, m, v, b, w;
                    for (f in t === i ? (a = n, w = n.$$element) : a = new L(w = Rn(i), n), m = r, k ? g = r.$new(!0) : A && (m = r.$parent), d && ((b = function(e, t, n, r) {
                            var i;
                            if (_(e) || (r = n, n = t, t = e, e = void 0), U && (i = v), n || (n = U ? w.parent() : w), !r) return d(e, t, i, n, M);
                            var o = d.$$slots[r];
                            if (o) return o(e, t, i, n, M);
                            if ($(o)) throw Zr("noslot", r, z(w))
                        }).$$boundTransclude = d, b.isSlotFilled = function(e) {
                            return !!d.$$slots[e]
                        }), C && (v = function(e, t, n, r, i, o, a) {
                            var s, u = oe();
                            for (s in r) {
                                var c = r[s],
                                    l = {
                                        $scope: c === a || c.$$isolateScope ? i : o,
                                        $element: e,
                                        $attrs: t,
                                        $transclude: n
                                    },
                                    d = c.controller;
                                "@" === d && (d = t[c.name]), l = T(d, l, !0, c.controllerAs), u[c.name] = l, e.data("$" + c.name + "Controller", l.instance)
                            }
                            return u
                        }(w, a, b, C, g, r, k)), k && (G.$$addScopeInfo(w, g, !0, !(E && (E === k || E === k.$$originalDirective))), G.$$addScopeClass(w, !0), g.$$isolateBindings = k.$$isolateBindings, (p = ye(r, a, g, g.$$isolateBindings, k)).removeWatches && g.$on("$destroy", p.removeWatches)), v) {
                        p = C[f], h = v[f];
                        var D = p.$$bindings.bindToController;
                        if (x) {
                            h.bindingInfo = D ? ye(m, a, h.instance, D, p) : {};
                            var O = h();
                            O !== h.instance && (h.instance = O, w.data("$" + p.name + "Controller", O), h.bindingInfo.removeWatches && h.bindingInfo.removeWatches(), h.bindingInfo = ye(m, a, h.instance, D, p))
                        } else h.instance = h(), w.data("$" + p.name + "Controller", h.instance), h.bindingInfo = ye(m, a, h.instance, D, p)
                    }
                    for (o(C, function(e, t) {
                            var n = e.require;
                            e.bindToController && !or(n) && y(n) && c(v[t].instance, re(t, n, w, v))
                        }), o(v, function(e) {
                            var t = e.instance;
                            if (S(t.$onChanges)) try {
                                t.$onChanges(e.bindingInfo.initialChanges)
                            } catch (e) {
                                s(e)
                            }
                            if (S(t.$onInit)) try {
                                t.$onInit()
                            } catch (e) {
                                s(e)
                            }
                            S(t.$doCheck) && (m.$watch(function() {
                                t.$doCheck()
                            }), t.$doCheck()), S(t.$onDestroy) && m.$on("$destroy", function() {
                                t.$onDestroy()
                            })
                        }), f = 0, p = u.length; f < p; f++) $e(h = u[f], h.isolateScope ? g : r, w, a, h.require && re(h.directiveName, h.require, w, v), b);
                    var M = r;
                    for (k && (k.template || null === k.templateUrl) && (M = g), e && e(M, i.childNodes, void 0, d), f = l.length - 1; 0 <= f; f--) $e(h = l[f], h.isolateScope ? g : r, w, a, h.require && re(h.directiveName, h.require, w, v), b);
                    o(v, function(e) {
                        S((e = e.instance).$postLink) && e.$postLink()
                    })
                }
                d = d || {};
                for (var h, g, m, v, b, w = -Number.MAX_VALUE, A = d.newScopeDirective, C = d.controllerDirectives, k = d.newIsolateScopeDirective, E = d.templateDirective, D = d.nonTlbTranscludeDirective, O = !1, F = !1, U = d.hasElementTranscludeDirective, V = n.$$element = Rn(t), P = r, B = !1, N = !1, R = 0, j = e.length; R < j; R++) {
                    var q = (h = e[R]).$$start,
                        H = h.$$end;
                    if (q && (V = Q(t, q, H)), m = void 0, w > h.priority) break;
                    if ((b = h.scope) && (h.templateUrl || (y(b) ? (de("new/isolated scope", k || A, h, V), k = h) : de("new/isolated scope", k, h, V)), A = A || h), g = h.name, !B && (h.replace && (h.templateUrl || h.template) || h.transclude && !h.$$tlb)) {
                        for (b = R + 1; B = e[b++];)
                            if (B.transclude && !B.$$tlb || B.replace && (B.templateUrl || B.template)) {
                                N = !0;
                                break
                            }
                        B = !0
                    }
                    if (!h.templateUrl && h.controller && (C = C || oe(), de("'" + g + "' controller", C[g], h, V), C[g] = h), b = h.transclude)
                        if (O = !0, h.$$tlb || (de("transclusion", D, h, V), D = h), "element" === b) U = !0, w = h.priority, m = V, V = n.$$element = Rn(G.$$createComment(g, n[g])), t = V[0], ge(i, Kn.call(m, 0), t), m[0].$$parentNode = m[0].parentNode, P = te(N, m, r, w, a && a.name, {
                            nonTlbTranscludeDirective: D
                        });
                        else {
                            var W = oe();
                            if (y(b)) {
                                m = [];
                                var K = oe(),
                                    J = oe();
                                for (var X in o(b, function(e, t) {
                                        var n = "?" === e.charAt(0);
                                        e = n ? e.substring(1) : e, K[e] = t, W[t] = null, J[t] = n
                                    }), o(V.contents(), function(e) {
                                        var t = K[He(M(e))];
                                        t ? (J[t] = !0, W[t] = W[t] || [], W[t].push(e)) : m.push(e)
                                    }), o(J, function(e, t) {
                                        if (!e) throw Zr("reqslot", t)
                                    }), W) W[X] && (W[X] = te(N, W[X], r))
                            } else m = Rn(he(t)).contents();
                            V.empty(), (P = te(N, m, r, void 0, void 0, {
                                needsNewScope: h.$$isolateScope || h.$$newScope
                            })).$$slots = W
                        }
                    if (h.template)
                        if (F = !0, de("template", E, h, V), E = h, b = S(h.template) ? h.template(V, n) : h.template, b = _e(b), h.replace) {
                            if (a = h, m = Sr.test(b) ? We(fe(h.templateNamespace, sr(b))) : [], t = m[0], 1 !== m.length || 1 !== t.nodeType) throw Zr("tplrt", g, "");
                            ge(i, V, t), b = Z(t, [], j = {
                                $attr: {}
                            });
                            var ee = e.splice(R + 1, e.length - (R + 1));
                            (k || A) && ie(b, k, A), e = e.concat(b).concat(ee), ue(n, j), j = e.length
                        } else V.html(b);
                    if (h.templateUrl) F = !0, de("template", E, h, V), E = h, h.replace && (a = h), p = ce(e.splice(R, e.length - R), V, n, i, O && P, u, l, {
                        controllerDirectives: C,
                        newScopeDirective: A !== h && A,
                        newIsolateScopeDirective: k,
                        templateDirective: E,
                        nonTlbTranscludeDirective: D
                    }), j = e.length;
                    else if (h.compile) try {
                        v = h.compile(V, n, P);
                        var ne = h.$$originalDirective || h;
                        S(v) ? f(null, I(ne, v), q, H) : v && f(I(ne, v.pre), I(ne, v.post), q, H)
                    } catch (e) {
                        s(e, z(V))
                    }
                    h.terminal && (p.terminal = !0, w = Math.max(w, h.priority))
                }
                return p.scope = A && !0 === A.scope, p.transcludeOnThisElement = O, p.templateOnThisElement = F, p.transclude = P, d.hasElementTranscludeDirective = U, p
            }

            function re(e, t, n, r) {
                var i;
                if (w(t)) {
                    var a = t.match(d);
                    t = t.substring(a[0].length);
                    var s = a[1] || a[3];
                    a = "?" === a[2];
                    if ("^^" === s ? n = n.parent() : i = (i = r && r[t]) && i.instance, !i) {
                        var u = "$" + t + "Controller";
                        i = s ? n.inheritedData(u) : n.data(u)
                    }
                    if (!i && !a) throw Zr("ctreq", t, e)
                } else if (or(t))
                    for (i = [], s = 0, a = t.length; s < a; s++) i[s] = re(e, t[s], n, r);
                else y(t) && (i = {}, o(t, function(t, o) {
                    i[o] = re(e, t, n, r)
                }));
                return i || null
            }

            function ie(e, t, n) {
                for (var r = 0, i = e.length; r < i; r++) e[r] = f(e[r], {
                    $$isolateScope: t,
                    $$newScope: n
                })
            }

            function ae(e, n, o, a, s, u, c) {
                if (n === s) return null;
                var l = null;
                if (i.hasOwnProperty(n))
                    for (var d = 0, p = (s = t.get(n + "Directive")).length; d < p; d++)
                        if (n = s[d], ($(a) || a > n.priority) && -1 !== n.restrict.indexOf(o)) {
                            if (u && (n = f(n, {
                                    $$start: u,
                                    $$end: c
                                })), !n.$$bindings) {
                                var h = l = n,
                                    g = n.name,
                                    m = {
                                        isolateScope: null,
                                        bindToController: null
                                    };
                                if (y(h.scope) && (!0 === h.bindToController ? (m.bindToController = r(h.scope, g, !0), m.isolateScope = {}) : m.isolateScope = r(h.scope, g, !1)), y(h.bindToController) && (m.bindToController = r(h.bindToController, g, !0)), m.bindToController && !h.controller) throw Zr("noctrl", g);
                                y((l = l.$$bindings = m).isolateScope) && (n.$$isolateBindings = l.isolateScope)
                            }
                            e.push(n), l = n
                        }
                return l
            }

            function se(e) {
                if (i.hasOwnProperty(e))
                    for (var n = t.get(e + "Directive"), r = 0, o = n.length; r < o; r++)
                        if ((e = n[r]).multiElement) return !0;
                return !1
            }

            function ue(e, t) {
                var n = t.$attr,
                    r = e.$attr;
                o(e, function(r, i) {
                    "$" !== i.charAt(0) && (t[i] && t[i] !== r && (r = r.length ? r + ("style" === i ? ";" : " ") + t[i] : t[i]), e.$set(i, r, !0, n[i]))
                }), o(t, function(t, i) {
                    e.hasOwnProperty(i) || "$" === i.charAt(0) || (e[i] = t, "class" !== i && "style" !== i && (r[i] = n[i]))
                })
            }

            function ce(e, t, n, r, i, a, u, c) {
                var l, d, p = [],
                    h = t[0],
                    m = e.shift(),
                    $ = f(m, {
                        templateUrl: null,
                        transclude: null,
                        replace: null,
                        $$originalDirective: m
                    }),
                    v = S(m.templateUrl) ? m.templateUrl(t, n) : m.templateUrl,
                    b = m.templateNamespace;
                return t.empty(), g(v).then(function(s) {
                        var f, g;
                        if (s = _e(s), m.replace) {
                            if (s = Sr.test(s) ? We(fe(b, sr(s))) : [], f = s[0], 1 !== s.length || 1 !== f.nodeType) throw Zr("tplrt", m.name, v);
                            s = {
                                $attr: {}
                            }, ge(r, t, f);
                            var w = Z(f, [], s);
                            y(m.scope) && ie(w, !0), e = w.concat(e), ue(n, s)
                        } else f = h, t.html(s);
                        for (e.unshift($), l = ne(e, f, n, i, t, m, a, u, c), o(r, function(e, n) {
                                e === f && (r[n] = t[0])
                            }), d = W(t[0].childNodes, i); p.length;) {
                            s = p.shift(), g = p.shift();
                            var A = p.shift(),
                                x = p.shift();
                            w = t[0];
                            if (!s.$$destroyed) {
                                if (g !== h) {
                                    var C = g.className;
                                    c.hasElementTranscludeDirective && m.replace || (w = he(f)), ge(A, Rn(g), w), H(Rn(w), C)
                                }
                                g = l.transcludeOnThisElement ? J(s, l.transclude, x) : x, l(d, s, w, r, g)
                            }
                        }
                        p = null
                    }).catch(function(e) {
                        C(e) && s(e)
                    }),
                    function(e, t, n, r, i) {
                        e = i, t.$$destroyed || (p ? p.push(t, n, r, e) : (l.transcludeOnThisElement && (e = J(t, l.transclude, i)), l(d, t, n, r, e)))
                    }
            }

            function le(e, t) {
                var n = t.priority - e.priority;
                return 0 !== n ? n : e.name !== t.name ? e.name < t.name ? -1 : 1 : e.index - t.index
            }

            function de(e, t, n, r) {
                function i(e) {
                    return e ? " (module: " + e + ")" : ""
                }
                if (t) throw Zr("multidir", t.name, i(t.$$moduleName), n.name, i(n.$$moduleName), e, z(r))
            }

            function fe(t, n) {
                switch (t = Gn(t || "html")) {
                    case "svg":
                    case "math":
                        var r = e.document.createElement("div");
                        return r.innerHTML = "<" + t + ">" + n + "</" + t + ">", r.childNodes[0].childNodes;
                    default:
                        return n
                }
            }

            function pe(e, t, r, i, o) {
                var a = function(e, t) {
                        if ("srcdoc" === t) return N.HTML;
                        var n = M(e);
                        if ("src" === t || "ngSrc" === t) {
                            if (-1 === ["img", "video", "audio", "source", "track"].indexOf(n)) return N.RESOURCE_URL
                        } else if ("xlinkHref" === t || "form" === n && "action" === t || "link" === n && "href" === t) return N.RESOURCE_URL
                    }(e, i),
                    s = l[i] || o,
                    u = n(r, !o, a, s);
                if (u) {
                    if ("multiple" === i && "select" === M(e)) throw Zr("selmulti", z(e));
                    if (m.test(i)) throw Zr("nodomevents");
                    t.push({
                        priority: 100,
                        compile: function() {
                            return {
                                pre: function(e, t, o) {
                                    t = o.$$observers || (o.$$observers = oe());
                                    var c = o[i];
                                    c !== r && (u = c && n(c, !0, a, s), r = c), u && (o[i] = u(e), (t[i] || (t[i] = [])).$$inter = !0, (o.$$observers && o.$$observers[i].$$scope || e).$watch(u, function(e, t) {
                                        "class" === i && e !== t ? o.$updateClass(e, t) : o.$set(i, e)
                                    }))
                                }
                            }
                        }
                    })
                }
            }

            function ge(t, n, r) {
                var i, o, a = n[0],
                    s = n.length,
                    u = a.parentNode;
                if (t)
                    for (i = 0, o = t.length; i < o; i++)
                        if (t[i] === a) {
                            t[i++] = r, o = i + s - 1;
                            for (var c = t.length; i < c; i++, o++) o < c ? t[i] = t[o] : delete t[i];
                            t.length -= s - 1, t.context === a && (t.context = r);
                            break
                        }
                for (u && u.replaceChild(r, a), t = e.document.createDocumentFragment(), i = 0; i < s; i++) t.appendChild(n[i]);
                for (Rn.hasData(a) && (Rn.data(r, Rn.data(a)), Rn(a).off("$destroy")), Rn.cleanData(t.querySelectorAll("*")), i = 1; i < s; i++) delete n[i];
                n[0] = r, n.length = 1
            }

            function me(e, t) {
                return c(function() {
                    return e.apply(null, arguments)
                }, e, t)
            }

            function $e(e, t, n, r, i, o) {
                try {
                    e(t, n, r, i, o)
                } catch (e) {
                    s(e, z(n))
                }
            }

            function ve(e, t) {
                if (k) throw Zr("missingattr", e, t)
            }

            function ye(e, t, r, i, a) {
                function s(t, n, i) {
                    S(r.$onChanges) && !V(n, i) && (be || (e.$$postDigest(q), be = []), c || (c = {}, be.push(u)), c[t] && (i = c[t].previousValue), c[t] = new Le(i, n))
                }

                function u() {
                    r.$onChanges(c), c = void 0
                }
                var c, l = [],
                    d = {};
                return o(i, function(i, o) {
                    var u, c, f, h, g = i.attrName,
                        m = i.optional;
                    switch (i.mode) {
                        case "@":
                            m || Hn.call(t, g) || (ve(g, a.name), r[o] = t[g] = void 0), m = t.$observe(g, function(e) {
                                (w(e) || D(e)) && (s(o, e, r[o]), r[o] = e)
                            }), t.$$observers[g].$$scope = e, w(u = t[g]) ? r[o] = n(u)(e) : D(u) && (r[o] = u), d[o] = new Le(Qr, r[o]), l.push(m);
                            break;
                        case "=":
                            if (!Hn.call(t, g)) {
                                if (m) break;
                                ve(g, a.name), t[g] = void 0
                            }
                            if (m && !t[g]) break;
                            c = b(t[g]), h = c.literal ? P : V, f = c.assign || function() {
                                throw u = r[o] = c(e), Zr("nonassign", t[g], g, a.name)
                            }, u = r[o] = c(e), (m = function(t) {
                                return h(t, r[o]) || (h(t, u) ? f(e, t = r[o]) : r[o] = t), u = t
                            }).$stateful = !0, m = i.collection ? e.$watchCollection(t[g], m) : e.$watch(b(t[g], m), null, c.literal), l.push(m);
                            break;
                        case "<":
                            if (!Hn.call(t, g)) {
                                if (m) break;
                                ve(g, a.name), t[g] = void 0
                            }
                            if (m && !t[g]) break;
                            var $ = (c = b(t[g])).literal,
                                v = r[o] = c(e);
                            d[o] = new Le(Qr, r[o]), m = e.$watch(c, function(e, t) {
                                if (t === e) {
                                    if (t === v || $ && P(t, v)) return;
                                    t = v
                                }
                                s(o, e, t), r[o] = e
                            }, $), l.push(m);
                            break;
                        case "&":
                            if (m || Hn.call(t, g) || ve(g, a.name), (c = t.hasOwnProperty(g) ? b(t[g]) : p) === p && m) break;
                            r[o] = function(t) {
                                return c(e, t)
                            }
                    }
                }), {
                    initialChanges: d,
                    removeWatches: l.length && function() {
                        for (var e = 0, t = l.length; e < t; ++e) l[e]()
                    }
                }
            }
            var be, we = /^\w/,
                Ae = e.document.createElement("div"),
                xe = O,
                Ce = U,
                Se = E;
            L.prototype = {
                $normalize: He,
                $addClass: function(e) {
                    e && 0 < e.length && R.addClass(this.$$element, e)
                },
                $removeClass: function(e) {
                    e && 0 < e.length && R.removeClass(this.$$element, e)
                },
                $updateClass: function(e, t) {
                    var n = Ge(e, t);
                    n && n.length && R.addClass(this.$$element, n), (n = Ge(t, e)) && n.length && R.removeClass(this.$$element, n)
                },
                $set: function(e, t, n, r) {
                    var i = De(this.$$element[0], e),
                        a = Ur[e],
                        u = e;
                    if (i ? (this.$$element.prop(e, t), r = i) : a && (this[a] = t, u = a), this[e] = t, r ? this.$attr[e] = r : (r = this.$attr[e]) || (this.$attr[e] = r = X(e, "-")), "a" === (i = M(this.$$element)) && ("href" === e || "xlinkHref" === e) || "img" === i && "src" === e) this[e] = t = j(t, "src" === e);
                    else if ("img" === i && "srcset" === e && v(t)) {
                        i = "", a = sr(t);
                        for (var c = /(\s+\d+x\s*,|\s+\d+w\s*,|\s+,|,\s+)/, l = (c = /\s/.test(a) ? c : /(,)/, a = a.split(c), c = Math.floor(a.length / 2), 0); l < c; l++) {
                            var d = 2 * l;
                            i = (i = i + j(sr(a[d]), !0)) + " " + sr(a[d + 1])
                        }
                        a = sr(a[2 * l]).split(/\s/), i += j(sr(a[0]), !0), 2 === a.length && (i += " " + sr(a[1])), this[e] = t = i
                    }!1 !== n && (null === t || $(t) ? this.$$element.removeAttr(r) : we.test(r) ? this.$$element.attr(r, t) : function(e, t, n) {
                        Ae.innerHTML = "<span " + t + ">";
                        var r = (t = Ae.firstChild.attributes)[0];
                        t.removeNamedItem(r.name), r.value = n, e.attributes.setNamedItem(r)
                    }(this.$$element[0], r, t)), (e = this.$$observers) && o(e[u], function(e) {
                        try {
                            e(t)
                        } catch (e) {
                            s(e)
                        }
                    })
                },
                $observe: function(e, t) {
                    var n = this,
                        r = n.$$observers || (n.$$observers = oe()),
                        i = r[e] || (r[e] = []);
                    return i.push(t), B.$evalAsync(function() {
                            i.$$inter || !n.hasOwnProperty(e) || $(n[e]) || t(n[e])
                        }),
                        function() {
                            F(i, t)
                        }
                }
            };
            var ke = n.startSymbol(),
                Ee = n.endSymbol(),
                _e = "{{" === ke && "}}" === Ee ? h : function(e) {
                    return e.replace(/\{\{/g, ke).replace(/}}/g, Ee)
                },
                Oe = /^ngAttr[A-Z]/,
                Me = /^(.+)Start$/;
            return G.$$addBindingInfo = A ? function(e, t) {
                var n = e.data("$binding") || [];
                or(t) ? n = n.concat(t) : n.push(t), e.data("$binding", n)
            } : p, G.$$addBindingClass = A ? function(e) {
                H(e, "ng-binding")
            } : p, G.$$addScopeInfo = A ? function(e, t, n, r) {
                e.data(n ? r ? "$isolateScopeNoTemplate" : "$isolateScope" : "$scope", t)
            } : p, G.$$addScopeClass = A ? function(e, t) {
                H(e, t ? "ng-isolate-scope" : "ng-scope")
            } : p, G.$$createComment = function(t, n) {
                var r = "";
                return A && (r = " " + (t || "") + ": ", n && (r += n + " ")), e.document.createComment(r)
            }, G
        }]
    }

    function Le(e, t) {
        this.previousValue = e, this.currentValue = t
    }

    function He(e) {
        return e.replace(Yr, "").replace(Xr, function(e, t, n) {
            return n ? t.toUpperCase() : t
        })
    }

    function Ge(e, t) {
        var n = "",
            r = e.split(/\s+/),
            i = t.split(/\s+/),
            o = 0;
        e: for (; o < r.length; o++) {
            for (var a = r[o], s = 0; s < i.length; s++)
                if (a === i[s]) continue e;
            n += (0 < n.length ? " " : "") + a
        }
        return n
    }

    function We(e) {
        var t = (e = Rn(e)).length;
        if (1 >= t) return e;
        for (; t--;) {
            var n = e[t];
            (8 === n.nodeType || n.nodeType === mr && "" === n.nodeValue.trim()) && Jn.call(e, t, 1)
        }
        return e
    }

    function Ke() {
        var e = {},
            t = !1;
        this.has = function(t) {
            return e.hasOwnProperty(t)
        }, this.register = function(t, n) {
            ne(t, "controller"), y(t) ? c(e, t) : e[t] = n
        }, this.allowGlobals = function() {
            t = !0
        }, this.$get = ["$injector", "$window", function(n, i) {
            function o(e, t, n, i) {
                if (!e || !y(e.$scope)) throw r("$controller")("noscp", i, t);
                e.$scope[t] = n
            }
            return function(r, a, s, u) {
                var l, d, f;
                if (s = !0 === s, u && w(u) && (f = u), w(r)) {
                    if (!(u = r.match(ti))) throw ei("ctrlfmt", r);
                    if (d = u[1], f = f || u[3], !(r = e.hasOwnProperty(d) ? e[d] : re(a.$scope, d, !0) || (t ? re(i, d, !0) : void 0))) throw ei("ctrlreg", d);
                    te(r, d, !0)
                }
                return s ? (s = (or(r) ? r[r.length - 1] : r).prototype, l = Object.create(s || null), f && o(a, f, l, d || r.name), c(function() {
                    var e = n.invoke(r, l, a, d);
                    return e !== l && (y(e) || S(e)) && (l = e, f && o(a, f, l, d || r.name)), l
                }, {
                    instance: l,
                    identifier: f
                })) : (l = n.instantiate(r, a, d), f && o(a, f, l, d || r.name), l)
            }
        }]
    }

    function Je() {
        this.$get = ["$window", function(e) {
            return Rn(e.document)
        }]
    }

    function Ze() {
        this.$get = ["$document", "$rootScope", function(e, t) {
            function n() {
                i = r.hidden
            }
            var r = e[0],
                i = r && r.hidden;
            return e.on("visibilitychange", n), t.$on("$destroy", function() {
                    e.off("visibilitychange", n)
                }),
                function() {
                    return i
                }
        }]
    }

    function Qe() {
        this.$get = ["$log", function(e) {
            return function(t, n) {
                e.error.apply(e, arguments)
            }
        }]
    }

    function Ye(e) {
        return y(e) ? x(e) ? e.toISOString() : N(e) : e
    }

    function Xe() {
        this.$get = function() {
            return function(e) {
                if (!e) return "";
                var t = [];
                return a(e, function(e, n) {
                    null === e || $(e) || S(e) || (or(e) ? o(e, function(e) {
                        t.push(K(n) + "=" + K(Ye(e)))
                    }) : t.push(K(n) + "=" + K(Ye(e))))
                }), t.join("&")
            }
        }
    }

    function et() {
        this.$get = function() {
            return function(e) {
                if (!e) return "";
                var t = [];
                return function e(n, r, i) {
                    null === n || $(n) || (or(n) ? o(n, function(t, n) {
                        e(t, r + "[" + (y(t) ? n : "") + "]")
                    }) : y(n) && !x(n) ? a(n, function(t, n) {
                        e(t, r + (i ? "" : "[") + n + (i ? "" : "]"))
                    }) : t.push(K(r) + "=" + K(Ye(n))))
                }(e, "", !0), t.join("&")
            }
        }
    }

    function tt(e, t) {
        if (w(e)) {
            var n, r, i = e.replace(si, "").trim();
            if (i)
                if ((r = n = (n = t("Content-Type")) && 0 === n.indexOf(ri)) || (r = (r = i.match(oi)) && ai[r[0]].test(i)), r) try {
                    e = R(i)
                } catch (t) {
                    if (!n) return e;
                    throw ui("baddata", e, t)
                }
        }
        return e
    }

    function nt(e) {
        var t, n = oe();
        return w(e) ? o(e.split("\n"), function(e) {
            t = e.indexOf(":");
            var r = Gn(sr(e.substr(0, t)));
            e = sr(e.substr(t + 1)), r && (n[r] = n[r] ? n[r] + ", " + e : e)
        }) : y(e) && o(e, function(e, t) {
            var r = Gn(t),
                i = sr(e);
            r && (n[r] = n[r] ? n[r] + ", " + i : i)
        }), n
    }

    function rt(e) {
        var t;
        return function(n) {
            return t || (t = nt(e)), n ? (void 0 === (n = t[Gn(n)]) && (n = null), n) : t
        }
    }

    function it(e, t, n, r) {
        return S(r) ? r(e, t, n) : (o(r, function(r) {
            e = r(e, t, n)
        }), e)
    }

    function ot() {
        var e = this.defaults = {
                transformResponse: [tt],
                transformRequest: [function(e) {
                    return y(e) && "[object File]" !== Qn.call(e) && "[object Blob]" !== Qn.call(e) && "[object FormData]" !== Qn.call(e) ? N(e) : e
                }],
                headers: {
                    common: {
                        Accept: "application/json, text/plain, */*"
                    },
                    post: se(ii),
                    put: se(ii),
                    patch: se(ii)
                },
                xsrfCookieName: "XSRF-TOKEN",
                xsrfHeaderName: "X-XSRF-TOKEN",
                paramSerializer: "$httpParamSerializer",
                jsonpCallbackParam: "callback"
            },
            t = !1;
        this.useApplyAsync = function(e) {
            return v(e) ? (t = !!e, this) : t
        };
        var n = this.interceptors = [];
        this.$get = ["$browser", "$httpBackend", "$$cookieReader", "$cacheFactory", "$rootScope", "$q", "$injector", "$sce", function(i, a, s, u, l, d, f, h) {
            function g(n) {
                function u(e, t) {
                    for (var n = 0, r = t.length; n < r;) {
                        var i = t[n++],
                            o = t[n++];
                        e = e.then(i, o)
                    }
                    return t.length = 0, e
                }

                function A(e) {
                    var t = c({}, e);
                    return t.data = it(e.data, e.headers, e.status, x.transformResponse), 200 <= (e = e.status) && 300 > e ? t : d.reject(t)
                }
                if (!y(n)) throw r("$http")("badreq", n);
                if (!w(h.valueOf(n.url))) throw r("$http")("badreq", n.url);
                var x = c({
                    method: "get",
                    transformRequest: e.transformRequest,
                    transformResponse: e.transformResponse,
                    paramSerializer: e.paramSerializer,
                    jsonpCallbackParam: e.jsonpCallbackParam
                }, n);
                x.headers = function(t) {
                    var n, r, i, a, s, u, l, d = e.headers,
                        f = c({}, t.headers);
                    d = c({}, d.common, d[Gn(t.method)]);
                    e: for (n in d) {
                        for (i in r = Gn(n), f)
                            if (Gn(i) === r) continue e;
                        f[n] = d[n]
                    }
                    return a = f, s = se(t), l = {}, o(a, function(e, t) {
                        S(e) ? null != (u = e(s)) && (l[t] = u) : l[t] = e
                    }), l
                }(n), x.method = Wn(x.method), x.paramSerializer = w(x.paramSerializer) ? f.get(x.paramSerializer) : x.paramSerializer, i.$$incOutstandingRequestCount();
                var C = [],
                    k = [];
                return n = d.resolve(x), o(b, function(e) {
                    (e.request || e.requestError) && C.unshift(e.request, e.requestError), (e.response || e.responseError) && k.push(e.response, e.responseError)
                }), (n = u(n = (n = u(n, C)).then(function(n) {
                    var r = n.headers,
                        i = it(n.data, rt(r), void 0, n.transformRequest);
                    return $(i) && o(r, function(e, t) {
                            "content-type" === Gn(t) && delete r[t]
                        }), $(n.withCredentials) && !$(e.withCredentials) && (n.withCredentials = e.withCredentials),
                        function(n, r) {
                            function i(e) {
                                if (e) {
                                    var n = {};
                                    return o(e, function(e, r) {
                                        n[r] = function(n) {
                                            function r() {
                                                e(n)
                                            }
                                            t ? l.$applyAsync(r) : l.$$phase ? r() : l.$apply(r)
                                        }
                                    }), n
                                }
                            }

                            function u(e, t, r, i, o) {
                                (200 <= (t = -1 <= t ? t : 0) && 300 > t ? A.resolve : A.reject)({
                                    data: e,
                                    status: t,
                                    headers: rt(r),
                                    config: n,
                                    statusText: i,
                                    xhrStatus: o
                                })
                            }

                            function c(e) {
                                u(e.data, e.status, se(e.headers()), e.statusText, e.xhrStatus)
                            }

                            function f() {
                                var e = g.pendingRequests.indexOf(n); - 1 !== e && g.pendingRequests.splice(e, 1)
                            }
                            var p, b, A = d.defer(),
                                x = A.promise,
                                C = n.headers,
                                k = "jsonp" === Gn(n.method),
                                E = n.url;
                            return k ? E = h.getTrustedResourceUrl(E) : w(E) || (E = h.valueOf(E)), _ = E, D = n.paramSerializer(n.params), 0 < D.length && (_ += (-1 === _.indexOf("?") ? "?" : "&") + D), E = _, k && (E = function(e, t) {
                                var n = e.split("?");
                                if (2 < n.length) throw ui("badjsonp", e);
                                return o(n = H(n[1]), function(n, r) {
                                    if ("JSON_CALLBACK" === n) throw ui("badjsonp", e);
                                    if (r === t) throw ui("badjsonp", t, e)
                                }), e += (-1 === e.indexOf("?") ? "?" : "&") + t + "=JSON_CALLBACK"
                            }(E, n.jsonpCallbackParam)), g.pendingRequests.push(n), x.then(f, f), !n.cache && !e.cache || !1 === n.cache || "GET" !== n.method && "JSONP" !== n.method || (p = y(n.cache) ? n.cache : y(e.cache) ? e.cache : m), p && (v(b = p.get(E)) ? b && S(b.then) ? b.then(c, c) : or(b) ? u(b[1], b[0], se(b[2]), b[3], b[4]) : u(b, 200, {}, "OK", "complete") : p.put(E, x)), $(b) && ((b = Zt(n.url) ? s()[n.xsrfCookieName || e.xsrfCookieName] : void 0) && (C[n.xsrfHeaderName || e.xsrfHeaderName] = b), a(n.method, E, r, function(e, n, r, i, o) {
                                function a() {
                                    u(n, e, r, i, o)
                                }
                                p && (200 <= e && 300 > e ? p.put(E, [e, n, nt(r), i, o]) : p.remove(E)), t ? l.$applyAsync(a) : (a(), l.$$phase || l.$apply())
                            }, C, n.timeout, n.withCredentials, n.responseType, i(n.eventHandlers), i(n.uploadEventHandlers))), x;
                            var _, D
                        }(n, i).then(A, A)
                }), k)).finally(function() {
                    i.$$completeOutstandingRequest(p)
                })
            }
            var m = u("$http");
            e.paramSerializer = w(e.paramSerializer) ? f.get(e.paramSerializer) : e.paramSerializer;
            var b = [];
            return o(n, function(e) {
                    b.unshift(w(e) ? f.get(e) : f.invoke(e))
                }), g.pendingRequests = [],
                function(e) {
                    o(arguments, function(e) {
                        g[e] = function(t, n) {
                            return g(c({}, n || {}, {
                                method: e,
                                url: t
                            }))
                        }
                    })
                }("get", "delete", "head", "jsonp"),
                function(e) {
                    o(arguments, function(e) {
                        g[e] = function(t, n, r) {
                            return g(c({}, r || {}, {
                                method: e,
                                url: t,
                                data: n
                            }))
                        }
                    })
                }("post", "put", "patch"), g.defaults = e, g
        }]
    }

    function at() {
        this.$get = function() {
            return function() {
                return new e.XMLHttpRequest
            }
        }
    }

    function st() {
        this.$get = ["$browser", "$jsonpCallbacks", "$document", "$xhrFactory", function(e, t, n, r) {
            return function(e, t, n, r, i) {
                return function(a, s, u, c, l, d, f, p, h, g) {
                    function m() {
                        w && w(), A && A.abort()
                    }

                    function y(e, t, r, i, o, a) {
                        v(x) && n.cancel(x), w = A = null, e(t, r, i, o, a)
                    }
                    if (s = s || e.url(), "jsonp" === Gn(a)) var b = r.createCallback(s),
                        w = function(e, t, n) {
                            e = e.replace("JSON_CALLBACK", t);
                            var o = i.createElement("script"),
                                a = null;
                            return o.type = "text/javascript", o.src = e, o.async = !0, a = function(e) {
                                o.removeEventListener("load", a), o.removeEventListener("error", a), i.body.removeChild(o), o = null;
                                var s = -1,
                                    u = "unknown";
                                e && ("load" !== e.type || r.wasCalled(t) || (e = {
                                    type: "error"
                                }), u = e.type, s = "error" === e.type ? 404 : 200), n && n(s, u)
                            }, o.addEventListener("load", a), o.addEventListener("error", a), i.body.appendChild(o), a
                        }(s, b, function(e, t) {
                            var n = 200 === e && r.getResponse(b);
                            y(c, e, n, "", t, "complete"), r.removeCallback(b)
                        });
                    else {
                        var A = t(a, s);
                        if (A.open(a, s, !0), o(l, function(e, t) {
                                v(e) && A.setRequestHeader(t, e)
                            }), A.onload = function() {
                                var e = A.statusText || "",
                                    t = "response" in A ? A.response : A.responseText,
                                    n = 1223 === A.status ? 204 : A.status;
                                0 === n && (n = t ? 200 : "file" === Jt(s).protocol ? 404 : 0), y(c, n, t, A.getAllResponseHeaders(), e, "complete")
                            }, A.onerror = function() {
                                y(c, -1, null, null, "", "error")
                            }, A.onabort = function() {
                                y(c, -1, null, null, "", "abort")
                            }, A.ontimeout = function() {
                                y(c, -1, null, null, "", "timeout")
                            }, o(h, function(e, t) {
                                A.addEventListener(t, e)
                            }), o(g, function(e, t) {
                                A.upload.addEventListener(t, e)
                            }), f && (A.withCredentials = !0), p) try {
                            A.responseType = p
                        } catch (e) {
                            if ("json" !== p) throw e
                        }
                        A.send($(u) ? null : u)
                    }
                    if (0 < d) var x = n(m, d);
                    else d && S(d.then) && d.then(m)
                }
            }(e, r, e.defer, t, n[0])
        }]
    }

    function ut() {
        var e = "{{",
            t = "}}";
        this.startSymbol = function(t) {
            return t ? (e = t, this) : e
        }, this.endSymbol = function(e) {
            return e ? (t = e, this) : t
        }, this.$get = ["$parse", "$exceptionHandler", "$sce", function(n, r, i) {
            function o(e) {
                return "\\\\\\" + e
            }

            function a(n) {
                return n.replace(f, e).replace(p, t)
            }

            function s(e, t, n, r) {
                var i = e.$watch(function(e) {
                    return i(), r(e)
                }, t, n);
                return i
            }

            function u(o, u, f, p) {
                function h(e) {
                    try {
                        var t = e;
                        return e = f ? i.getTrusted(f, t) : i.valueOf(t), p && !v(e) ? e : ae(e)
                    } catch (e) {
                        r(ci.interr(o, e))
                    }
                }
                var m;
                if (!o.length || -1 === o.indexOf(e)) return u || ((m = g(u = a(o))).exp = o, m.expressions = [], m.$$watchDelegate = s), m;
                p = !!p;
                var y, b, w = 0,
                    A = [],
                    x = [];
                m = o.length;
                for (var C = [], S = []; w < m;) {
                    if (-1 === (y = o.indexOf(e, w)) || -1 === (b = o.indexOf(t, y + l))) {
                        w !== m && C.push(a(o.substring(w)));
                        break
                    }
                    w !== y && C.push(a(o.substring(w, y))), w = o.substring(y + l, b), A.push(w), x.push(n(w, h)), w = b + d, S.push(C.length), C.push("")
                }
                if (f && 1 < C.length && ci.throwNoconcat(o), !u || A.length) {
                    var k = function(e) {
                        for (var t = 0, n = A.length; t < n; t++) {
                            if (p && $(e[t])) return;
                            C[S[t]] = e[t]
                        }
                        return C.join("")
                    };
                    return c(function(e) {
                        var t = 0,
                            n = A.length,
                            i = Array(n);
                        try {
                            for (; t < n; t++) i[t] = x[t](e);
                            return k(i)
                        } catch (e) {
                            r(ci.interr(o, e))
                        }
                    }, {
                        exp: o,
                        expressions: A,
                        $$watchDelegate: function(e, t) {
                            var n;
                            return e.$watchGroup(x, function(r, i) {
                                var o = k(r);
                                t.call(this, o, r !== i ? n : o, e), n = o
                            })
                        }
                    })
                }
            }
            var l = e.length,
                d = t.length,
                f = new RegExp(e.replace(/./g, o), "g"),
                p = new RegExp(t.replace(/./g, o), "g");
            return u.startSymbol = function() {
                return e
            }, u.endSymbol = function() {
                return t
            }, u
        }]
    }

    function ct() {
        this.$get = ["$rootScope", "$window", "$q", "$$q", "$browser", function(e, t, n, r, i) {
            function o(o, s, u, c) {
                function l() {
                    d ? o.apply(null, f) : o(g)
                }
                var d = 4 < arguments.length,
                    f = d ? Kn.call(arguments, 4) : [],
                    p = t.setInterval,
                    h = t.clearInterval,
                    g = 0,
                    m = v(c) && !c,
                    $ = (m ? r : n).defer(),
                    y = $.promise;
                return u = v(u) ? u : 0, y.$$intervalId = p(function() {
                    m ? i.defer(l) : e.$evalAsync(l), $.notify(g++), 0 < u && g >= u && ($.resolve(g), h(y.$$intervalId), delete a[y.$$intervalId]), m || e.$apply()
                }, s), a[y.$$intervalId] = $, y
            }
            var a = {};
            return o.cancel = function(e) {
                return !!(e && e.$$intervalId in a) && (a[e.$$intervalId].promise.$$state.pur = !0, a[e.$$intervalId].reject("canceled"), t.clearInterval(e.$$intervalId), delete a[e.$$intervalId], !0)
            }, o
        }]
    }

    function lt(e) {
        for (var t = (e = e.split("/")).length; t--;) e[t] = W(e[t].replace(/%2F/g, "/"));
        return e.join("/")
    }

    function dt(e, t) {
        var n = Jt(e);
        t.$$protocol = n.protocol, t.$$host = n.hostname, t.$$port = d(n.port) || fi[n.protocol] || null
    }

    function ft(e, t, n) {
        if (hi.test(e)) throw pi("badpath", e);
        (r = "/" !== e.charAt(0)) && (e = "/" + e), e = Jt(e);
        for (var r, i = (r = (r && "/" === e.pathname.charAt(0) ? e.pathname.substring(1) : e.pathname).split("/")).length; i--;) r[i] = decodeURIComponent(r[i]), n && (r[i] = r[i].replace(/\//g, "%2F"));
        n = r.join("/"), t.$$path = n, t.$$search = H(e.search), t.$$hash = decodeURIComponent(e.hash), t.$$path && "/" !== t.$$path.charAt(0) && (t.$$path = "/" + t.$$path)
    }

    function pt(e, t) {
        return e.slice(0, t.length) === t
    }

    function ht(e, t) {
        if (pt(t, e)) return t.substr(e.length)
    }

    function gt(e) {
        var t = e.indexOf("#");
        return -1 === t ? e : e.substr(0, t)
    }

    function mt(e) {
        return e.replace(/(#.+)|#$/, "$1")
    }

    function $t(e, t, n) {
        this.$$html5 = !0, n = n || "", dt(e, this), this.$$parse = function(e) {
            var n = ht(t, e);
            if (!w(n)) throw pi("ipthprfx", e, t);
            ft(n, this, !0), this.$$path || (this.$$path = "/"), this.$$compose()
        }, this.$$compose = function() {
            var e = G(this.$$search),
                n = this.$$hash ? "#" + W(this.$$hash) : "";
            this.$$url = lt(this.$$path) + (e ? "?" + e : "") + n, this.$$absUrl = t + this.$$url.substr(1), this.$$urlUpdatedByLocation = !0
        }, this.$$parseLinkUrl = function(r, i) {
            return i && "#" === i[0] ? (this.hash(i.slice(1)), !0) : (v(o = ht(e, r)) ? (a = o, a = n && v(o = ht(n, o)) ? t + (ht("/", o) || o) : e + a) : v(o = ht(t, r)) ? a = t + o : t === r + "/" && (a = t), a && this.$$parse(a), !!a);
            var o, a
        }
    }

    function vt(e, t, n) {
        dt(e, this), this.$$parse = function(r) {
            var i;
            $(o = ht(e, r) || ht(t, r)) || "#" !== o.charAt(0) ? this.$$html5 ? i = o : (i = "", $(o) && (e = r, this.replace())) : $(i = ht(n, o)) && (i = o), ft(i, this, !1), r = this.$$path;
            var o, a = /^\/[A-Z]:(\/.*)/;
            pt(i, o = e) && (i = i.replace(o, "")), a.exec(i) || (r = (i = a.exec(r)) ? i[1] : r), this.$$path = r, this.$$compose()
        }, this.$$compose = function() {
            var t = G(this.$$search),
                r = this.$$hash ? "#" + W(this.$$hash) : "";
            this.$$url = lt(this.$$path) + (t ? "?" + t : "") + r, this.$$absUrl = e + (this.$$url ? n + this.$$url : ""), this.$$urlUpdatedByLocation = !0
        }, this.$$parseLinkUrl = function(t, n) {
            return gt(e) === gt(t) && (this.$$parse(t), !0)
        }
    }

    function yt(e, t, n) {
        this.$$html5 = !0, vt.apply(this, arguments), this.$$parseLinkUrl = function(r, i) {
            return i && "#" === i[0] ? (this.hash(i.slice(1)), !0) : (e === gt(r) ? o = r : (a = ht(t, r)) ? o = e + n + a : t === r + "/" && (o = t), o && this.$$parse(o), !!o);
            var o, a
        }, this.$$compose = function() {
            var t = G(this.$$search),
                r = this.$$hash ? "#" + W(this.$$hash) : "";
            this.$$url = lt(this.$$path) + (t ? "?" + t : "") + r, this.$$absUrl = e + n + this.$$url, this.$$urlUpdatedByLocation = !0
        }
    }

    function bt(e) {
        return function() {
            return this[e]
        }
    }

    function wt(e, t) {
        return function(n) {
            return $(n) ? this[e] : (this[e] = t(n), this.$$compose(), this)
        }
    }

    function At() {
        var e = "!",
            t = {
                enabled: !1,
                requireBase: !0,
                rewriteLinks: !0
            };
        this.hashPrefix = function(t) {
            return v(t) ? (e = t, this) : e
        }, this.html5Mode = function(e) {
            return D(e) ? (t.enabled = e, this) : y(e) ? (D(e.enabled) && (t.enabled = e.enabled), D(e.requireBase) && (t.requireBase = e.requireBase), (D(e.rewriteLinks) || w(e.rewriteLinks)) && (t.rewriteLinks = e.rewriteLinks), this) : t
        }, this.$get = ["$rootScope", "$browser", "$sniffer", "$rootElement", "$window", function(n, r, i, o, a) {
            function s(e, t, n) {
                var i = c.url(),
                    o = c.$$state;
                try {
                    r.url(e, t, n), c.$$state = r.state()
                } catch (e) {
                    throw c.url(i), c.$$state = o, e
                }
            }

            function u(e, t) {
                n.$broadcast("$locationChangeSuccess", c.absUrl(), e, c.$$state, t)
            }
            var c, l;
            l = r.baseHref();
            var d, f = r.url();
            if (t.enabled) {
                if (!l && t.requireBase) throw pi("nobase");
                d = f.substring(0, f.indexOf("/", f.indexOf("//") + 2)) + (l || "/"), l = i.history ? $t : yt
            } else d = gt(f), l = vt;
            var p = d.substr(0, gt(d).lastIndexOf("/") + 1);
            (c = new l(d, p, "#" + e)).$$parseLinkUrl(f, f), c.$$state = r.state();
            var h = /^\s*(javascript|mailto):/i;
            o.on("click", function(e) {
                if ((s = t.rewriteLinks) && !e.ctrlKey && !e.metaKey && !e.shiftKey && 2 !== e.which && 2 !== e.button) {
                    for (var i = Rn(e.target);
                        "a" !== M(i[0]);)
                        if (i[0] === o[0] || !(i = i.parent())[0]) return;
                    if (!w(s) || !$(i.attr(s))) {
                        var s = i.prop("href"),
                            u = i.attr("href") || i.attr("xlink:href");
                        y(s) && "[object SVGAnimatedString]" === s.toString() && (s = Jt(s.animVal).href), h.test(s) || !s || i.attr("target") || e.isDefaultPrevented() || !c.$$parseLinkUrl(s, u) || (e.preventDefault(), c.absUrl() !== r.url() && (n.$apply(), a.angular["ff-684208-preventDefault"] = !0))
                    }
                }
            }), mt(c.absUrl()) !== mt(f) && r.url(c.absUrl(), !0);
            var g = !0;
            return r.onUrlChange(function(e, t) {
                pt(e, p) ? (n.$evalAsync(function() {
                    var r, i = c.absUrl(),
                        o = c.$$state;
                    e = mt(e), c.$$parse(e), c.$$state = t, r = n.$broadcast("$locationChangeStart", e, i, t, o).defaultPrevented, c.absUrl() === e && (r ? (c.$$parse(i), c.$$state = o, s(i, !1, o)) : (g = !1, u(i, o)))
                }), n.$$phase || n.$digest()) : a.location.href = e
            }), n.$watch(function() {
                if (g || c.$$urlUpdatedByLocation) {
                    c.$$urlUpdatedByLocation = !1;
                    var e = mt(r.url()),
                        t = mt(c.absUrl()),
                        o = r.state(),
                        a = c.$$replace,
                        l = e !== t || c.$$html5 && i.history && o !== c.$$state;
                    (g || l) && (g = !1, n.$evalAsync(function() {
                        var t = c.absUrl(),
                            r = n.$broadcast("$locationChangeStart", t, e, c.$$state, o).defaultPrevented;
                        c.absUrl() === t && (r ? (c.$$parse(e), c.$$state = o) : (l && s(t, a, o === c.$$state ? null : c.$$state), u(e, o)))
                    }))
                }
                c.$$replace = !1
            }), c
        }]
    }

    function xt() {
        var e = !0,
            t = this;
        this.debugEnabled = function(t) {
            return v(t) ? (e = t, this) : e
        }, this.$get = ["$window", function(n) {
            function r(e) {
                var t = n.console || {},
                    r = t[e] || t.log || p;
                return function() {
                    var e = [];
                    return o(arguments, function(t) {
                        var n;
                        e.push((C(n = t) && (n.stack && a ? n = n.message && -1 === n.stack.indexOf(n.message) ? "Error: " + n.message + "\n" + n.stack : n.stack : n.sourceURL && (n = n.message + "\n" + n.sourceURL + ":" + n.line)), n))
                    }), Function.prototype.apply.call(r, t, e)
                }
            }
            var i, a = Nn || /\bEdge\//.test(n.navigator && n.navigator.userAgent);
            return {
                log: r("log"),
                info: r("info"),
                warn: r("warn"),
                error: r("error"),
                debug: (i = r("debug"), function() {
                    e && i.apply(t, arguments)
                })
            }
        }]
    }

    function Ct(e) {
        return e + ""
    }

    function St(e, t) {
        return void 0 !== e ? e : t
    }

    function kt(e, t) {
        return void 0 === e ? t : void 0 === t ? e : e + t
    }

    function Et(e, t, n) {
        var r, i, a = e.isPure = function(e, t) {
            switch (e.type) {
                case wi.MemberExpression:
                    if (e.computed) return !1;
                    break;
                case wi.UnaryExpression:
                    return 1;
                case wi.BinaryExpression:
                    return "+" !== e.operator && 1;
                case wi.CallExpression:
                    return !1
            }
            return void 0 === t ? Ai : t
        }(e, n);
        switch (e.type) {
            case wi.Program:
                r = !0, o(e.body, function(e) {
                    Et(e.expression, t, a), r = r && e.expression.constant
                }), e.constant = r;
                break;
            case wi.Literal:
                e.constant = !0, e.toWatch = [];
                break;
            case wi.UnaryExpression:
                Et(e.argument, t, a), e.constant = e.argument.constant, e.toWatch = e.argument.toWatch;
                break;
            case wi.BinaryExpression:
                Et(e.left, t, a), Et(e.right, t, a), e.constant = e.left.constant && e.right.constant, e.toWatch = e.left.toWatch.concat(e.right.toWatch);
                break;
            case wi.LogicalExpression:
                Et(e.left, t, a), Et(e.right, t, a), e.constant = e.left.constant && e.right.constant, e.toWatch = e.constant ? [] : [e];
                break;
            case wi.ConditionalExpression:
                Et(e.test, t, a), Et(e.alternate, t, a), Et(e.consequent, t, a), e.constant = e.test.constant && e.alternate.constant && e.consequent.constant, e.toWatch = e.constant ? [] : [e];
                break;
            case wi.Identifier:
                e.constant = !1, e.toWatch = [e];
                break;
            case wi.MemberExpression:
                Et(e.object, t, a), e.computed && Et(e.property, t, a), e.constant = e.object.constant && (!e.computed || e.property.constant), e.toWatch = e.constant ? [] : [e];
                break;
            case wi.CallExpression:
                r = n = !!e.filter && !t(e.callee.name).$stateful, i = [], o(e.arguments, function(e) {
                    Et(e, t, a), r = r && e.constant, i.push.apply(i, e.toWatch)
                }), e.constant = r, e.toWatch = n ? i : [e];
                break;
            case wi.AssignmentExpression:
                Et(e.left, t, a), Et(e.right, t, a), e.constant = e.left.constant && e.right.constant, e.toWatch = [e];
                break;
            case wi.ArrayExpression:
                r = !0, i = [], o(e.elements, function(e) {
                    Et(e, t, a), r = r && e.constant, i.push.apply(i, e.toWatch)
                }), e.constant = r, e.toWatch = i;
                break;
            case wi.ObjectExpression:
                r = !0, i = [], o(e.properties, function(e) {
                    Et(e.value, t, a), r = r && e.value.constant, i.push.apply(i, e.value.toWatch), e.computed && (Et(e.key, t, !1), r = r && e.key.constant, i.push.apply(i, e.key.toWatch))
                }), e.constant = r, e.toWatch = i;
                break;
            case wi.ThisExpression:
                e.constant = !1, e.toWatch = [];
                break;
            case wi.LocalsExpression:
                e.constant = !1, e.toWatch = []
        }
    }

    function _t(e) {
        if (1 === e.length) {
            var t = (e = e[0].expression).toWatch;
            return 1 !== t.length ? t : t[0] !== e ? t : void 0
        }
    }

    function Dt(e) {
        return e.type === wi.Identifier || e.type === wi.MemberExpression
    }

    function Ot(e) {
        if (1 === e.body.length && Dt(e.body[0].expression)) return {
            type: wi.AssignmentExpression,
            left: e.body[0].expression,
            right: {
                type: wi.NGValueParameter
            },
            operator: "="
        }
    }

    function Mt(e) {
        this.$filter = e
    }

    function Ft(e) {
        this.$filter = e
    }

    function Ut(e, t, n) {
        this.ast = new wi(e, n), this.astCompiler = n.csp ? new Ft(t) : new Mt(t)
    }

    function Vt(e) {
        return S(e.valueOf) ? e.valueOf() : $i.call(e)
    }

    function Pt() {
        var e, t, n = oe(),
            r = {
                true: !0,
                false: !1,
                null: null,
                undefined: void 0
            };
        this.addLiteral = function(e, t) {
            r[e] = t
        }, this.setIdentifierFns = function(n, r) {
            return e = n, t = r, this
        }, this.$get = ["$filter", function(i) {
            function a(e, t) {
                var r, o;
                switch (typeof e) {
                    case "string":
                        return o = e = e.trim(), (r = n[o]) || ((r = new Ut(r = new bi(h), i, h).parse(e)).constant ? r.$$watchDelegate = d : r.oneTime ? r.$$watchDelegate = r.literal ? l : c : r.inputs && (r.$$watchDelegate = u), n[o] = r), f(r, t);
                    case "function":
                        return f(e, t);
                    default:
                        return f(p, t)
                }
            }

            function s(e, t, n) {
                return null == e || null == t ? e === t : !("object" == typeof e && (e = Vt(e), "object" == typeof e && !n)) && (e === t || e != e && t != t)
            }

            function u(e, t, n, r, i) {
                var o;
                if (1 === (u = r.inputs).length) {
                    var a = s,
                        u = u[0];
                    return e.$watch(function(e) {
                        var t = u(e);
                        return s(t, a, u.isPure) || (o = r(e, void 0, void 0, [t]), a = t && Vt(t)), o
                    }, t, n, i)
                }
                for (var c = [], l = [], d = 0, f = u.length; d < f; d++) c[d] = s, l[d] = null;
                return e.$watch(function(e) {
                    for (var t = !1, n = 0, i = u.length; n < i; n++) {
                        var a = u[n](e);
                        (t || (t = !s(a, c[n], u[n].isPure))) && (l[n] = a, c[n] = a && Vt(a))
                    }
                    return t && (o = r(e, void 0, void 0, l)), o
                }, t, n, i)
            }

            function c(e, t, n, r, i) {
                function o(e, n, r) {
                    s = e, S(t) && t(e, n, r), v(e) && r.$$postDigest(function() {
                        v(s) && a()
                    })
                }
                var a, s;
                return a = r.inputs ? u(e, o, n, r, i) : e.$watch(function(e) {
                    return r(e)
                }, o, n)
            }

            function l(e, t, n, r) {
                function i(e) {
                    var t = !0;
                    return o(e, function(e) {
                        v(e) || (t = !1)
                    }), t
                }
                var a, s;
                return a = e.$watch(function(e) {
                    return r(e)
                }, function(e, n, r) {
                    s = e, S(t) && t(e, n, r), i(e) && r.$$postDigest(function() {
                        i(s) && a()
                    })
                }, n)
            }

            function d(e, t, n, r) {
                var i = e.$watch(function(e) {
                    return i(), r(e)
                }, t, n);
                return i
            }

            function f(e, t) {
                if (!t) return e;
                var n = e.$$watchDelegate,
                    r = !1,
                    i = n !== l && n !== c ? function(n, i, o, a) {
                        return o = r && a ? a[0] : e(n, i, o, a), t(o, n, i)
                    } : function(n, r, i, o) {
                        return i = e(n, r, i, o), n = t(i, n, r), v(i) ? n : i
                    };
                r = !e.inputs;
                return n && n !== u ? (i.$$watchDelegate = n, i.inputs = e.inputs) : t.$stateful || (i.$$watchDelegate = u, i.inputs = e.inputs ? e.inputs : [e]), i.inputs && (i.inputs = i.inputs.map(function(e) {
                    return e.isPure === Ai ? function(t) {
                        return e(t)
                    } : e
                })), i
            }
            var h = {
                csp: cr().noUnsafeEval,
                literals: U(r),
                isIdentifierStart: S(e) && e,
                isIdentifierContinue: S(t) && t
            };
            return a.$$getAst = function(e) {
                return new Ut(new bi(h), i, h).getAst(e).ast
            }, a
        }]
    }

    function Tt() {
        var e = !0;
        this.$get = ["$rootScope", "$exceptionHandler", function(t, n) {
            return Bt(function(e) {
                t.$evalAsync(e)
            }, n, e)
        }], this.errorOnUnhandledRejections = function(t) {
            return v(t) ? (e = t, this) : e
        }
    }

    function It() {
        var e = !0;
        this.$get = ["$browser", "$exceptionHandler", function(t, n) {
            return Bt(function(e) {
                t.defer(e)
            }, n, e)
        }], this.errorOnUnhandledRejections = function(t) {
            return v(t) ? (e = t, this) : e
        }
    }

    function Bt(e, t, n) {
        function i() {
            return new function() {
                var e = this.promise = new a;
                this.resolve = function(t) {
                    l(e, t)
                }, this.reject = function(t) {
                    d(e, t)
                }, this.notify = function(t) {
                    p(e, t)
                }
            }
        }

        function a() {
            this.$$state = {
                status: 0
            }
        }

        function s() {
            for (; !w && A.length;) {
                var e = A.shift();
                if (!e.pur) {
                    e.pur = !0;
                    var n = "Possibly unhandled rejection: " + ("function" == typeof(n = e.value) ? n.toString().replace(/ \{[\s\S]*$/, "") : $(n) ? "undefined" : "string" != typeof n ? ue(n, void 0) : n);
                    C(e.value) ? t(e.value, n) : t(n)
                }
            }
        }

        function u(r) {
            !n || r.pending || 2 !== r.status || r.pur || (0 === w && 0 === A.length && e(s), A.push(r)), !r.processScheduled && r.pending && (r.processScheduled = !0, ++w, e(function() {
                var i, o, a;
                a = r.pending, r.processScheduled = !1, r.pending = void 0;
                try {
                    for (var u = 0, c = a.length; u < c; ++u) {
                        r.pur = !0, o = a[u][0], i = a[u][r.status];
                        try {
                            S(i) ? l(o, i(r.value)) : 1 === r.status ? l(o, r.value) : d(o, r.value)
                        } catch (e) {
                            d(o, e), e && !0 === e.$$passToExceptionHandler && t(e)
                        }
                    }
                } finally {
                    --w, n && 0 === w && e(s)
                }
            }))
        }

        function l(e, t) {
            e.$$state.status || (t === e ? f(e, b("qcycle", t)) : function e(t, n) {
                function r(n) {
                    a || (a = !0, e(t, n))
                }

                function i(e) {
                    a || (a = !0, f(t, e))
                }
                var o, a = !1;
                try {
                    (y(n) || S(n)) && (o = n.then), S(o) ? (t.$$state.status = -1, o.call(n, function r(e) {
                        a || (a = !0, function e(t, n) {
                            function r(n) {
                                a || (a = !0, e(t, n))
                            }

                            function i(e) {
                                a || (a = !0, f(t, e))
                            }
                            var o, a = !1;
                            try {
                                (y(n) || S(n)) && (o = n.then), S(o) ? (t.$$state.status = -1, o.call(n, r, i, function(e) {
                                    p(t, e)
                                })) : (t.$$state.value = n, t.$$state.status = 1, u(t.$$state))
                            } catch (e) {
                                i(e)
                            }
                        }(t, e))
                    }, i, function(e) {
                        p(t, e)
                    })) : (t.$$state.value = n, t.$$state.status = 1, u(t.$$state))
                } catch (e) {
                    i(e)
                }
            }(e, t))
        }

        function d(e, t) {
            e.$$state.status || f(e, t)
        }

        function f(e, t) {
            e.$$state.value = t, e.$$state.status = 2, u(e.$$state)
        }

        function p(n, r) {
            var i = n.$$state.pending;
            0 >= n.$$state.status && i && i.length && e(function() {
                for (var e, n, o = 0, a = i.length; o < a; o++) {
                    n = i[o][0], e = i[o][3];
                    try {
                        p(n, S(e) ? e(r) : r)
                    } catch (e) {
                        t(e)
                    }
                }
            })
        }

        function h(e) {
            var t = new a;
            return d(t, e), t
        }

        function g(e, t, n) {
            var r = null;
            try {
                S(n) && (r = n())
            } catch (e) {
                return h(e)
            }
            return r && S(r.then) ? r.then(function() {
                return t(e)
            }, h) : t(e)
        }

        function m(e, t, n, r) {
            var i = new a;
            return l(i, e), i.then(t, n, r)
        }

        function v(e) {
            if (!S(e)) throw b("norslvr", e);
            var t = new a;
            return e(function(e) {
                l(t, e)
            }, function(e) {
                d(t, e)
            }), t
        }
        var b = r("$q", TypeError),
            w = 0,
            A = [];
        c(a.prototype, {
            then: function(e, t, n) {
                if ($(e) && $(t) && $(n)) return this;
                var r = new a;
                return this.$$state.pending = this.$$state.pending || [], this.$$state.pending.push([r, e, t, n]), 0 < this.$$state.status && u(this.$$state), r
            },
            catch: function(e) {
                return this.then(null, e)
            },
            finally: function(e, t) {
                return this.then(function(t) {
                    return g(t, x, e)
                }, function(t) {
                    return g(t, h, e)
                }, t)
            }
        });
        var x = m;
        return v.prototype = a.prototype, v.defer = i, v.reject = h, v.when = m, v.resolve = x, v.all = function(e) {
            var t = new a,
                n = 0,
                r = or(e) ? [] : {};
            return o(e, function(e, i) {
                n++, m(e).then(function(e) {
                    r[i] = e, --n || l(t, r)
                }, function(e) {
                    d(t, e)
                })
            }), 0 === n && l(t, r), t
        }, v.race = function(e) {
            var t = i();
            return o(e, function(e) {
                m(e).then(t.resolve, t.reject)
            }), t.promise
        }, v
    }

    function Nt() {
        this.$get = ["$window", "$timeout", function(e, t) {
            var n = e.requestAnimationFrame || e.webkitRequestAnimationFrame,
                r = e.cancelAnimationFrame || e.webkitCancelAnimationFrame || e.webkitCancelRequestAnimationFrame,
                i = !!n,
                o = i ? function(e) {
                    var t = n(e);
                    return function() {
                        r(t)
                    }
                } : function(e) {
                    var n = t(e, 16.66, !1);
                    return function() {
                        t.cancel(n)
                    }
                };
            return o.supported = i, o
        }]
    }

    function Rt() {
        var e = 10,
            t = r("$rootScope"),
            n = null,
            a = null;
        this.digestTtl = function(t) {
            return arguments.length && (e = t), e
        }, this.$get = ["$exceptionHandler", "$parse", "$browser", function(r, s, u) {
            function c(e) {
                e.currentScope.$$destroyed = !0
            }

            function l() {
                this.$id = ++tr, this.$$phase = this.$parent = this.$$watchers = this.$$nextSibling = this.$$prevSibling = this.$$childHead = this.$$childTail = null, this.$root = this, this.$$destroyed = !1, this.$$listeners = {}, this.$$listenerCount = {}, this.$$watchersCount = 0, this.$$isolateBindings = null
            }

            function d(e) {
                if (v.$$phase) throw t("inprog", v.$$phase);
                v.$$phase = e
            }

            function f(e, t) {
                do {
                    e.$$watchersCount += t
                } while (e = e.$parent)
            }

            function h(e, t, n) {
                do {
                    e.$$listenerCount[n] -= t, 0 === e.$$listenerCount[n] && delete e.$$listenerCount[n]
                } while (e = e.$parent)
            }

            function g() {}

            function m() {
                for (; A.length;) try {
                    A.shift()()
                } catch (e) {
                    r(e)
                }
                a = null
            }
            l.prototype = {
                constructor: l,
                $new: function(e, t) {
                    var n;
                    return t = t || this, e ? (n = new l).$root = this.$root : (this.$$ChildScope || (this.$$ChildScope = function(e) {
                        function t() {
                            this.$$watchers = this.$$nextSibling = this.$$childHead = this.$$childTail = null, this.$$listeners = {}, this.$$listenerCount = {}, this.$$watchersCount = 0, this.$id = ++tr, this.$$ChildScope = null
                        }
                        return t.prototype = e, t
                    }(this)), n = new this.$$ChildScope), n.$parent = t, n.$$prevSibling = t.$$childTail, t.$$childHead ? (t.$$childTail.$$nextSibling = n, t.$$childTail = n) : t.$$childHead = t.$$childTail = n, (e || t !== this) && n.$on("$destroy", c), n
                },
                $watch: function(e, t, r, i) {
                    var o = s(e);
                    if (t = S(t) ? t : p, o.$$watchDelegate) return o.$$watchDelegate(this, t, r, o, e);
                    var a = this,
                        u = a.$$watchers,
                        c = {
                            fn: t,
                            last: g,
                            get: o,
                            exp: i || e,
                            eq: !!r
                        };
                    return n = null, u || ((u = a.$$watchers = []).$$digestWatchIndex = -1), u.unshift(c), u.$$digestWatchIndex++, f(this, 1),
                        function() {
                            var e = F(u, c);
                            0 <= e && (f(a, -1), e < u.$$digestWatchIndex && u.$$digestWatchIndex--), n = null
                        }
                },
                $watchGroup: function(e, t) {
                    function n() {
                        u = !1, c ? (c = !1, t(i, i, s)) : t(i, r, s)
                    }
                    var r = Array(e.length),
                        i = Array(e.length),
                        a = [],
                        s = this,
                        u = !1,
                        c = !0;
                    if (!e.length) {
                        var l = !0;
                        return s.$evalAsync(function() {
                                l && t(i, i, s)
                            }),
                            function() {
                                l = !1
                            }
                    }
                    return 1 === e.length ? this.$watch(e[0], function(e, n, o) {
                        i[0] = e, r[0] = n, t(i, e === n ? i : r, o)
                    }) : (o(e, function(e, t) {
                        var o = s.$watch(e, function(e, o) {
                            i[t] = e, r[t] = o, u || (u = !0, s.$evalAsync(n))
                        });
                        a.push(o)
                    }), function() {
                        for (; a.length;) a.shift()()
                    })
                },
                $watchCollection: function(e, t) {
                    function n(e) {
                        var t, n, a;
                        if (!$(r = e)) {
                            if (y(r))
                                if (i(r))
                                    for (o !== f && (g = (o = f).length = 0, l++), e = r.length, g !== e && (l++, o.length = g = e), t = 0; t < e; t++) a = o[t], n = r[t], a != a && n != n || a === n || (l++, o[t] = n);
                                else {
                                    for (t in o !== p && (o = p = {}, g = 0, l++), e = 0, r) Hn.call(r, t) && (e++, n = r[t], a = o[t], t in o ? a != a && n != n || a === n || (l++, o[t] = n) : (g++, o[t] = n, l++));
                                    if (g > e)
                                        for (t in l++, o) Hn.call(r, t) || (g--, delete o[t])
                                }
                            else o !== r && (o = r, l++);
                            return l
                        }
                    }
                    n.$stateful = !0;
                    var r, o, a, u = this,
                        c = 1 < t.length,
                        l = 0,
                        d = s(e, n),
                        f = [],
                        p = {},
                        h = !0,
                        g = 0;
                    return this.$watch(d, function() {
                        if (h ? (h = !1, t(r, r, u)) : t(r, a, u), c)
                            if (y(r))
                                if (i(r)) {
                                    a = Array(r.length);
                                    for (var e = 0; e < r.length; e++) a[e] = r[e]
                                } else
                                    for (e in a = {}, r) Hn.call(r, e) && (a[e] = r[e]);
                        else a = r
                    })
                },
                $digest: function() {
                    var i, o, s, c, l, f, p, h, $ = e,
                        y = [];
                    d("$digest"), u.$$checkUrlChange(), this === v && null !== a && (u.defer.cancel(a), m()), n = null;
                    do {
                        for (l = !1, f = this, c = 0; c < b.length; c++) {
                            try {
                                (0, (h = b[c]).fn)(h.scope, h.locals)
                            } catch (e) {
                                r(e)
                            }
                            n = null
                        }
                        b.length = 0;
                        e: do {
                            if (c = f.$$watchers)
                                for (c.$$digestWatchIndex = c.length; c.$$digestWatchIndex--;) try {
                                    if (i = c[c.$$digestWatchIndex])
                                        if ((o = (0, i.get)(f)) === (s = i.last) || (i.eq ? P(o, s) : nr(o) && nr(s))) {
                                            if (i === n) {
                                                l = !1;
                                                break e
                                            }
                                        } else l = !0, n = i, i.last = i.eq ? U(o, null) : o, (0, i.fn)(o, s === g ? o : s, f), 5 > $ && (y[p = 4 - $] || (y[p] = []), y[p].push({
                                            msg: S(i.exp) ? "fn: " + (i.exp.name || i.exp.toString()) : i.exp,
                                            newVal: o,
                                            oldVal: s
                                        }))
                                } catch (e) {
                                    r(e)
                                }
                            if (!(c = f.$$watchersCount && f.$$childHead || f !== this && f.$$nextSibling))
                                for (; f !== this && !(c = f.$$nextSibling);) f = f.$parent
                        } while (f = c);
                        if ((l || b.length) && !$--) throw v.$$phase = null, t("infdig", e, y)
                    } while (l || b.length);
                    for (v.$$phase = null; x < w.length;) try {
                        w[x++]()
                    } catch (e) {
                        r(e)
                    }
                    w.length = x = 0, u.$$checkUrlChange()
                },
                $destroy: function() {
                    if (!this.$$destroyed) {
                        var e = this.$parent;
                        for (var t in this.$broadcast("$destroy"), this.$$destroyed = !0, this === v && u.$$applicationDestroyed(), f(this, -this.$$watchersCount), this.$$listenerCount) h(this, this.$$listenerCount[t], t);
                        e && e.$$childHead === this && (e.$$childHead = this.$$nextSibling), e && e.$$childTail === this && (e.$$childTail = this.$$prevSibling), this.$$prevSibling && (this.$$prevSibling.$$nextSibling = this.$$nextSibling), this.$$nextSibling && (this.$$nextSibling.$$prevSibling = this.$$prevSibling), this.$destroy = this.$digest = this.$apply = this.$evalAsync = this.$applyAsync = p, this.$on = this.$watch = this.$watchGroup = function() {
                                return p
                            }, this.$$listeners = {}, this.$$nextSibling = null,
                            function e(t) {
                                9 === Nn && (t.$$childHead && e(t.$$childHead), t.$$nextSibling && e(t.$$nextSibling)), t.$parent = t.$$nextSibling = t.$$prevSibling = t.$$childHead = t.$$childTail = t.$root = t.$$watchers = null
                            }(this)
                    }
                },
                $eval: function(e, t) {
                    return s(e)(this, t)
                },
                $evalAsync: function(e, t) {
                    v.$$phase || b.length || u.defer(function() {
                        b.length && v.$digest()
                    }), b.push({
                        scope: this,
                        fn: s(e),
                        locals: t
                    })
                },
                $$postDigest: function(e) {
                    w.push(e)
                },
                $apply: function(e) {
                    try {
                        d("$apply");
                        try {
                            return this.$eval(e)
                        } finally {
                            v.$$phase = null
                        }
                    } catch (e) {
                        r(e)
                    } finally {
                        try {
                            v.$digest()
                        } catch (e) {
                            throw r(e), e
                        }
                    }
                },
                $applyAsync: function(e) {
                    var t = this;
                    e && A.push(function() {
                        t.$eval(e)
                    }), e = s(e), null === a && (a = u.defer(function() {
                        v.$apply(m)
                    }))
                },
                $on: function(e, t) {
                    var n = this.$$listeners[e];
                    n || (this.$$listeners[e] = n = []), n.push(t);
                    var r = this;
                    do {
                        r.$$listenerCount[e] || (r.$$listenerCount[e] = 0), r.$$listenerCount[e]++
                    } while (r = r.$parent);
                    var i = this;
                    return function() {
                        var r = n.indexOf(t); - 1 !== r && (delete n[r], h(i, 1, e))
                    }
                },
                $emit: function(e, t) {
                    var n, i, o, a = [],
                        s = this,
                        u = !1,
                        c = {
                            name: e,
                            targetScope: s,
                            stopPropagation: function() {
                                u = !0
                            },
                            preventDefault: function() {
                                c.defaultPrevented = !0
                            },
                            defaultPrevented: !1
                        },
                        l = T([c], arguments, 1);
                    do {
                        for (n = s.$$listeners[e] || a, c.currentScope = s, i = 0, o = n.length; i < o; i++)
                            if (n[i]) try {
                                n[i].apply(null, l)
                            } catch (e) {
                                r(e)
                            } else n.splice(i, 1), i--, o--;
                        if (u) break;
                        s = s.$parent
                    } while (s);
                    return c.currentScope = null, c
                },
                $broadcast: function(e, t) {
                    var n = this,
                        i = this,
                        o = {
                            name: e,
                            targetScope: this,
                            preventDefault: function() {
                                o.defaultPrevented = !0
                            },
                            defaultPrevented: !1
                        };
                    if (!this.$$listenerCount[e]) return o;
                    for (var a, s, u = T([o], arguments, 1); n = i;) {
                        for (o.currentScope = n, a = 0, s = (i = n.$$listeners[e] || []).length; a < s; a++)
                            if (i[a]) try {
                                i[a].apply(null, u)
                            } catch (e) {
                                r(e)
                            } else i.splice(a, 1), a--, s--;
                        if (!(i = n.$$listenerCount[e] && n.$$childHead || n !== this && n.$$nextSibling))
                            for (; n !== this && !(i = n.$$nextSibling);) n = n.$parent
                    }
                    return o.currentScope = null, o
                }
            };
            var v = new l,
                b = v.$$asyncQueue = [],
                w = v.$$postDigestQueue = [],
                A = v.$$applyAsyncQueue = [],
                x = 0;
            return v
        }]
    }

    function jt() {
        var e = /^\s*(https?|s?ftp|mailto|tel|file):/,
            t = /^\s*((https?|ftp|file|blob):|data:image\/)/;
        this.aHrefSanitizationWhitelist = function(t) {
            return v(t) ? (e = t, this) : e
        }, this.imgSrcSanitizationWhitelist = function(e) {
            return v(e) ? (t = e, this) : t
        }, this.$get = function() {
            return function(n, r) {
                var i, o = r ? t : e;
                return "" === (i = Jt(n && n.trim()).href) || i.match(o) ? n : "unsafe:" + i
            }
        }
    }

    function qt(e) {
        var t = [];
        return v(e) && o(e, function(e) {
            t.push(function(e) {
                if ("self" === e) return e;
                if (w(e)) {
                    if (-1 < e.indexOf("***")) throw xi("iwcard", e);
                    return e = ur(e).replace(/\\\*\\\*/g, ".*").replace(/\\\*/g, "[^:/.?&;]*"), new RegExp("^" + e + "$")
                }
                if (k(e)) return new RegExp("^" + e.source + "$");
                throw xi("imatcher")
            }(e))
        }), t
    }

    function zt() {
        this.SCE_CONTEXTS = Ci;
        var e = ["self"],
            t = [];
        this.resourceUrlWhitelist = function(t) {
            return arguments.length && (e = qt(t)), e
        }, this.resourceUrlBlacklist = function(e) {
            return arguments.length && (t = qt(e)), t
        }, this.$get = ["$injector", function(n) {
            function r(e, t) {
                return "self" === e ? Zt(t) : !!e.exec(t.href)
            }

            function i(e) {
                var t = function(e) {
                    this.$$unwrapTrustedValue = function() {
                        return e
                    }
                };
                return e && (t.prototype = new e), t.prototype.valueOf = function() {
                    return this.$$unwrapTrustedValue()
                }, t.prototype.toString = function() {
                    return this.$$unwrapTrustedValue().toString()
                }, t
            }
            var o = function(e) {
                throw xi("unsafe")
            };
            n.has("$sanitize") && (o = n.get("$sanitize"));
            var a = i(),
                s = {};
            return s[Ci.HTML] = i(a), s[Ci.CSS] = i(a), s[Ci.URL] = i(a), s[Ci.JS] = i(a), s[Ci.RESOURCE_URL] = i(s[Ci.URL]), {
                trustAs: function(e, t) {
                    var n = s.hasOwnProperty(e) ? s[e] : null;
                    if (!n) throw xi("icontext", e, t);
                    if (null === t || $(t) || "" === t) return t;
                    if ("string" != typeof t) throw xi("itype", e);
                    return new n(t)
                },
                getTrusted: function(n, i) {
                    if (null === i || $(i) || "" === i) return i;
                    if ((c = s.hasOwnProperty(n) ? s[n] : null) && i instanceof c) return i.$$unwrapTrustedValue();
                    if (n === Ci.RESOURCE_URL) {
                        var a, u, c = Jt(i.toString()),
                            l = !1;
                        for (a = 0, u = e.length; a < u; a++)
                            if (r(e[a], c)) {
                                l = !0;
                                break
                            }
                        if (l)
                            for (a = 0, u = t.length; a < u; a++)
                                if (r(t[a], c)) {
                                    l = !1;
                                    break
                                }
                        if (l) return i;
                        throw xi("insecurl", i.toString())
                    }
                    if (n === Ci.HTML) return o(i);
                    throw xi("unsafe")
                },
                valueOf: function(e) {
                    return e instanceof a ? e.$$unwrapTrustedValue() : e
                }
            }
        }]
    }

    function Lt() {
        var e = !0;
        this.enabled = function(t) {
            return arguments.length && (e = !!t), e
        }, this.$get = ["$parse", "$sceDelegate", function(t, n) {
            if (e && 8 > Nn) throw xi("iequirks");
            var r = se(Ci);
            r.isEnabled = function() {
                return e
            }, r.trustAs = n.trustAs, r.getTrusted = n.getTrusted, r.valueOf = n.valueOf, e || (r.trustAs = r.getTrusted = function(e, t) {
                return t
            }, r.valueOf = h), r.parseAs = function(e, n) {
                var i = t(n);
                return i.literal && i.constant ? i : t(n, function(t) {
                    return r.getTrusted(e, t)
                })
            };
            var i = r.parseAs,
                a = r.getTrusted,
                s = r.trustAs;
            return o(Ci, function(e, t) {
                var n = Gn(t);
                r[("parse_as_" + n).replace(Si, ce)] = function(t) {
                    return i(e, t)
                }, r[("get_trusted_" + n).replace(Si, ce)] = function(t) {
                    return a(e, t)
                }, r[("trust_as_" + n).replace(Si, ce)] = function(t) {
                    return s(e, t)
                }
            }), r
        }]
    }

    function Ht() {
        this.$get = ["$window", "$document", function(e, t) {
            var n = {},
                r = !((!e.nw || !e.nw.process) && e.chrome && (e.chrome.app && e.chrome.app.runtime || !e.chrome.app && e.chrome.runtime && e.chrome.runtime.id)) && e.history && e.history.pushState,
                i = d((/android (\d+)/.exec(Gn((e.navigator || {}).userAgent)) || [])[1]),
                o = /Boxee/i.test((e.navigator || {}).userAgent),
                a = t[0] || {},
                s = a.body && a.body.style,
                u = !1,
                c = !1;
            return s && (u = !!("transition" in s || "webkitTransition" in s), c = !!("animation" in s || "webkitAnimation" in s)), {
                history: !(!r || 4 > i || o),
                hasEvent: function(e) {
                    if ("input" === e && Nn) return !1;
                    if ($(n[e])) {
                        var t = a.createElement("div");
                        n[e] = "on" + e in t
                    }
                    return n[e]
                },
                csp: cr(),
                transitions: u,
                animations: c,
                android: i
            }
        }]
    }

    function Gt() {
        var e;
        this.httpOptions = function(t) {
            return t ? (e = t, this) : e
        }, this.$get = ["$exceptionHandler", "$templateCache", "$http", "$q", "$sce", function(t, n, r, i, o) {
            function a(s, u) {
                a.totalPendingRequests++, w(s) && !$(n.get(s)) || (s = o.getTrustedResourceUrl(s));
                var l = r.defaults && r.defaults.transformResponse;
                return or(l) ? l = l.filter(function(e) {
                    return e !== tt
                }) : l === tt && (l = null), r.get(s, c({
                    cache: n,
                    transformResponse: l
                }, e)).finally(function() {
                    a.totalPendingRequests--
                }).then(function(e) {
                    return n.put(s, e.data), e.data
                }, function(e) {
                    return u || (e = ki("tpload", s, e.status, e.statusText), t(e)), i.reject(e)
                })
            }
            return a.totalPendingRequests = 0, a
        }]
    }

    function Wt() {
        this.$get = ["$rootScope", "$browser", "$location", function(e, t, n) {
            return {
                findBindings: function(e, t, n) {
                    var r = [];
                    return o(e = e.getElementsByClassName("ng-binding"), function(e) {
                        var i = er.element(e).data("$binding");
                        i && o(i, function(i) {
                            n ? new RegExp("(^|\\s)" + ur(t) + "(\\s|\\||$)").test(i) && r.push(e) : -1 !== i.indexOf(t) && r.push(e)
                        })
                    }), r
                },
                findModels: function(e, t, n) {
                    for (var r = ["ng-", "data-ng-", "ng\\:"], i = 0; i < r.length; ++i) {
                        var o = e.querySelectorAll("[" + r[i] + "model" + (n ? "=" : "*=") + '"' + t + '"]');
                        if (o.length) return o
                    }
                },
                getLocation: function() {
                    return n.url()
                },
                setLocation: function(t) {
                    t !== n.url() && (n.url(t), e.$digest())
                },
                whenStable: function(e) {
                    t.notifyWhenNoOutstandingRequests(e)
                }
            }
        }]
    }

    function Kt() {
        this.$get = ["$rootScope", "$browser", "$q", "$$q", "$exceptionHandler", function(e, t, n, r, i) {
            function o(o, s, u) {
                S(o) || (u = s, s = o, o = p);
                var c, l = Kn.call(arguments, 3),
                    d = v(u) && !u,
                    f = (d ? r : n).defer(),
                    h = f.promise;
                return c = t.defer(function() {
                    try {
                        f.resolve(o.apply(null, l))
                    } catch (e) {
                        f.reject(e), i(e)
                    } finally {
                        delete a[h.$$timeoutId]
                    }
                    d || e.$apply()
                }, s), h.$$timeoutId = c, a[c] = f, h
            }
            var a = {};
            return o.cancel = function(e) {
                return !!(e && e.$$timeoutId in a) && (a[e.$$timeoutId].promise.$$state.pur = !0, a[e.$$timeoutId].reject("canceled"), delete a[e.$$timeoutId], t.defer.cancel(e.$$timeoutId))
            }, o
        }]
    }

    function Jt(e) {
        return Nn && (Ei.setAttribute("href", e), e = Ei.href), Ei.setAttribute("href", e), {
            href: Ei.href,
            protocol: Ei.protocol ? Ei.protocol.replace(/:$/, "") : "",
            host: Ei.host,
            search: Ei.search ? Ei.search.replace(/^\?/, "") : "",
            hash: Ei.hash ? Ei.hash.replace(/^#/, "") : "",
            hostname: Ei.hostname,
            port: Ei.port,
            pathname: "/" === Ei.pathname.charAt(0) ? Ei.pathname : "/" + Ei.pathname
        }
    }

    function Zt(e) {
        return (e = w(e) ? Jt(e) : e).protocol === _i.protocol && e.host === _i.host
    }

    function Qt() {
        this.$get = g(e)
    }

    function Yt(e) {
        function t(e) {
            try {
                return decodeURIComponent(e)
            } catch (t) {
                return e
            }
        }
        var n = e[0] || {},
            r = {},
            i = "";
        return function() {
            var e, o, a, s, u;
            try {
                e = n.cookie || ""
            } catch (t) {
                e = ""
            }
            if (e !== i)
                for (e = (i = e).split("; "), r = {}, a = 0; a < e.length; a++) 0 < (s = (o = e[a]).indexOf("=")) && (u = t(o.substring(0, s)), $(r[u]) && (r[u] = t(o.substring(s + 1))));
            return r
        }
    }

    function Xt() {
        this.$get = Yt
    }

    function en(e) {
        function t(n, r) {
            if (y(n)) {
                var i = {};
                return o(n, function(e, n) {
                    i[n] = t(n, e)
                }), i
            }
            return e.factory(n + "Filter", r)
        }
        this.register = t, this.$get = ["$injector", function(e) {
            return function(t) {
                return e.get(t + "Filter")
            }
        }], t("currency", on), t("date", hn), t("filter", tn), t("json", gn), t("limitTo", mn), t("lowercase", Pi), t("number", an), t("orderBy", vn), t("uppercase", Ti)
    }

    function tn() {
        return function(e, t, n, o) {
            if (!i(e)) {
                if (null == e) return e;
                throw r("filter")("notarray", e)
            }
            var a, s, u, c, l, d;
            switch (o = o || "$", rn(t)) {
                case "function":
                    break;
                case "boolean":
                case "null":
                case "number":
                case "string":
                    a = !0;
                case "object":
                    u = n, c = o, l = a, d = y(s = t) && c in s, !0 === u ? u = P : S(u) || (u = function(e, t) {
                        return !($(e) || (null === e || null === t ? e !== t : y(t) || y(e) && !m(e) || (e = Gn("" + e), t = Gn("" + t), -1 === e.indexOf(t))))
                    }), t = function(e) {
                        return d && !y(e) ? nn(e, s[c], u, c, !1) : nn(e, s, u, c, l)
                    };
                    break;
                default:
                    return e
            }
            return Array.prototype.filter.call(e, t)
        }
    }

    function nn(e, t, n, r, i, o) {
        var a = rn(e),
            s = rn(t);
        if ("string" === s && "!" === t.charAt(0)) return !nn(e, t.substring(1), n, r, i);
        if (or(e)) return e.some(function(e) {
            return nn(e, t, n, r, i)
        });
        switch (a) {
            case "object":
                var u;
                if (i) {
                    for (u in e)
                        if (u.charAt && "$" !== u.charAt(0) && nn(e[u], t, n, r, !0)) return !0;
                    return !o && nn(e, t, n, r, !1)
                }
                if ("object" === s) {
                    for (u in t)
                        if (!S(o = t[u]) && !$(o) && !nn((a = u === r) ? e : e[u], o, n, r, a, a)) return !1;
                    return !0
                }
                return n(e, t);
            case "function":
                return !1;
            default:
                return n(e, t)
        }
    }

    function rn(e) {
        return null === e ? "null" : typeof e
    }

    function on(e) {
        var t = e.NUMBER_FORMATS;
        return function(e, n, r) {
            return $(n) && (n = t.CURRENCY_SYM), $(r) && (r = t.PATTERNS[1].maxFrac), null == e ? e : sn(e, t.PATTERNS[1], t.GROUP_SEP, t.DECIMAL_SEP, r).replace(/\u00A4/g, n)
        }
    }

    function an(e) {
        var t = e.NUMBER_FORMATS;
        return function(e, n) {
            return null == e ? e : sn(e, t.PATTERNS[0], t.GROUP_SEP, t.DECIMAL_SEP, n)
        }
    }

    function sn(e, t, n, r, i) {
        if (!w(e) && !A(e) || isNaN(e)) return "";
        var o = !isFinite(e),
            a = !1,
            s = Math.abs(e) + "",
            u = "";
        if (o) u = "∞";
        else {
            for (function(e, t, n, r) {
                    var i = e.d,
                        o = i.length - e.i;
                    if (r = i[n = (t = $(t) ? Math.min(Math.max(n, o), r) : +t) + e.i], 0 < n) {
                        i.splice(Math.max(e.i, n));
                        for (var a = n; a < i.length; a++) i[a] = 0
                    } else
                        for (o = Math.max(0, o), e.i = 1, i.length = Math.max(1, n = t + 1), i[0] = 0, a = 1; a < n; a++) i[a] = 0;
                    if (5 <= r)
                        if (0 > n - 1) {
                            for (r = 0; r > n; r--) i.unshift(0), e.i++;
                            i.unshift(1), e.i++
                        } else i[n - 1]++;
                    for (; o < Math.max(0, t); o++) i.push(0);
                    (t = i.reduceRight(function(e, t, n, r) {
                        return t += e, r[n] = t % 10, Math.floor(t / 10)
                    }, 0)) && (i.unshift(t), e.i++)
                }(a = function(e) {
                    var t, n, r, i, o, a = 0;
                    for (-1 < (n = e.indexOf(Oi)) && (e = e.replace(Oi, "")), 0 < (r = e.search(/e/i)) ? (0 > n && (n = r), n += +e.slice(r + 1), e = e.substring(0, r)) : 0 > n && (n = e.length), r = 0; e.charAt(r) === Mi; r++);
                    if (r === (o = e.length)) t = [0], n = 1;
                    else {
                        for (o--; e.charAt(o) === Mi;) o--;
                        for (n -= r, t = [], i = 0; r <= o; r++, i++) t[i] = +e.charAt(r)
                    }
                    return n > Di && (t = t.splice(0, Di - 1), a = n - 1, n = 1), {
                        d: t,
                        e: a,
                        i: n
                    }
                }(s), i, t.minFrac, t.maxFrac), u = a.d, s = a.i, i = a.e, o = [], a = u.reduce(function(e, t) {
                    return e && !t
                }, !0); 0 > s;) u.unshift(0), s++;
            for (0 < s ? o = u.splice(s, u.length) : (o = u, u = [0]), s = [], u.length >= t.lgSize && s.unshift(u.splice(-t.lgSize, u.length).join("")); u.length > t.gSize;) s.unshift(u.splice(-t.gSize, u.length).join(""));
            u.length && s.unshift(u.join("")), u = s.join(n), o.length && (u += r + o.join("")), i && (u += "e+" + i)
        }
        return 0 > e && !a ? t.negPre + u + t.negSuf : t.posPre + u + t.posSuf
    }

    function un(e, t, n, r) {
        var i = "";
        for ((0 > e || r && 0 >= e) && (r ? e = 1 - e : (e = -e, i = "-")), e = "" + e; e.length < t;) e = Mi + e;
        return n && (e = e.substr(e.length - t)), i + e
    }

    function cn(e, t, n, r, i) {
        return n = n || 0,
            function(o) {
                return o = o["get" + e](), (0 < n || o > -n) && (o += n), 0 === o && -12 === n && (o = 12), un(o, t, r, i)
            }
    }

    function ln(e, t, n) {
        return function(r, i) {
            var o = r["get" + e]();
            return i[Wn((n ? "STANDALONE" : "") + (t ? "SHORT" : "") + e)][o]
        }
    }

    function dn(e) {
        var t = new Date(e, 0, 1).getDay();
        return new Date(e, 0, (4 >= t ? 5 : 12) - t)
    }

    function fn(e) {
        return function(t) {
            var n = dn(t.getFullYear());
            return t = +new Date(t.getFullYear(), t.getMonth(), t.getDate() + (4 - t.getDay())) - +n, un(t = 1 + Math.round(t / 6048e5), e)
        }
    }

    function pn(e, t) {
        return 0 >= e.getFullYear() ? t.ERAS[0] : t.ERAS[1]
    }

    function hn(e) {
        var t = /^(\d{4})-?(\d\d)-?(\d\d)(?:T(\d\d)(?::?(\d\d)(?::?(\d\d)(?:\.(\d+))?)?)?(Z|([+-])(\d\d):?(\d\d))?)?$/;
        return function(n, r, i) {
            var a, s, u = "",
                c = [];
            if (r = r || "mediumDate", r = e.DATETIME_FORMATS[r] || r, w(n) && (n = Vi.test(n) ? d(n) : function(e) {
                    var n;
                    if (n = e.match(t)) {
                        e = new Date(0);
                        var r = 0,
                            i = 0,
                            o = n[8] ? e.setUTCFullYear : e.setFullYear,
                            a = n[8] ? e.setUTCHours : e.setHours;
                        n[9] && (r = d(n[9] + n[10]), i = d(n[9] + n[11])), o.call(e, d(n[1]), d(n[2]) - 1, d(n[3])), r = d(n[4] || 0) - r, i = d(n[5] || 0) - i, o = d(n[6] || 0), n = Math.round(1e3 * parseFloat("0." + (n[7] || 0))), a.call(e, r, i, o, n)
                    }
                    return e
                }(n)), A(n) && (n = new Date(n)), !x(n) || !isFinite(n.getTime())) return n;
            for (; r;)(s = Ui.exec(r)) ? r = (c = T(c, s, 1)).pop() : (c.push(r), r = null);
            var l = n.getTimezoneOffset();
            return i && (l = j(i, l), n = q(n, i, !0)), o(c, function(t) {
                a = Fi[t], u += a ? a(n, e.DATETIME_FORMATS, l) : "''" === t ? "'" : t.replace(/(^'|'$)/g, "").replace(/''/g, "'")
            }), u
        }
    }

    function gn() {
        return function(e, t) {
            return $(t) && (t = 2), N(e, t)
        }
    }

    function mn() {
        return function(e, t, n) {
            return t = 1 / 0 === Math.abs(Number(t)) ? Number(t) : d(t), nr(t) ? e : (A(e) && (e = e.toString()), i(e) ? (n = 0 > (n = !n || isNaN(n) ? 0 : d(n)) ? Math.max(0, e.length + n) : n, 0 <= t ? $n(e, n, n + t) : 0 === n ? $n(e, t, e.length) : $n(e, Math.max(0, n + t), n)) : e)
        }
    }

    function $n(e, t, n) {
        return w(e) ? e.slice(t, n) : Kn.call(e, t, n)
    }

    function vn(e) {
        function t(e) {
            switch (typeof e) {
                case "number":
                case "boolean":
                case "string":
                    return !0;
                default:
                    return !1
            }
        }

        function n(e, t) {
            var n = 0,
                r = e.type;
            if (r === (i = t.type)) {
                var i = e.value,
                    o = t.value;
                "string" === r ? (i = i.toLowerCase(), o = o.toLowerCase()) : "object" === r && (y(i) && (i = e.index), y(o) && (o = t.index)), i !== o && (n = i < o ? -1 : 1)
            } else n = r < i ? -1 : 1;
            return n
        }
        return function(o, a, s, u) {
            if (null == o) return o;
            if (!i(o)) throw r("orderBy")("notarray", o);
            or(a) || (a = [a]), 0 === a.length && (a = ["+"]);
            var c = a.map(function(t) {
                    var n = 1,
                        r = h;
                    if (S(t)) r = t;
                    else if (w(t) && ("+" !== t.charAt(0) && "-" !== t.charAt(0) || (n = "-" === t.charAt(0) ? -1 : 1, t = t.substring(1)), "" !== t && (r = e(t)).constant)) {
                        var i = r();
                        r = function(e) {
                            return e[i]
                        }
                    }
                    return {
                        get: r,
                        descending: n
                    }
                }),
                l = s ? -1 : 1,
                d = S(u) ? u : n;
            return (o = Array.prototype.map.call(o, function(e, n) {
                return {
                    value: e,
                    tieBreaker: {
                        value: n,
                        type: "number",
                        index: n
                    },
                    predicateValues: c.map(function(r) {
                        var i = r.get(e);
                        return r = typeof i, null === i ? (r = "string", i = "null") : "object" === r && (S(i.valueOf) && t(i = i.valueOf()) || m(i) && t(i = i.toString())), {
                            value: i,
                            type: r,
                            index: n
                        }
                    })
                }
            })).sort(function(e, t) {
                for (var r = 0, i = c.length; r < i; r++) {
                    var o = d(e.predicateValues[r], t.predicateValues[r]);
                    if (o) return o * c[r].descending * l
                }
                return (d(e.tieBreaker, t.tieBreaker) || n(e.tieBreaker, t.tieBreaker)) * l
            }), o.map(function(e) {
                return e.value
            })
        }
    }

    function yn(e) {
        return S(e) && (e = {
            link: e
        }), e.restrict = e.restrict || "AC", g(e)
    }

    function bn(e, t, n, r, i) {
        this.$$controls = [], this.$error = {}, this.$$success = {}, this.$pending = void 0, this.$name = i(t.name || t.ngForm || "")(n), this.$dirty = !1, this.$valid = this.$pristine = !0, this.$submitted = this.$invalid = !1, this.$$parentForm = Ni, this.$$element = e, this.$$animate = r, wn(this)
    }

    function wn(e) {
        e.$$classCache = {}, e.$$classCache[wo] = !(e.$$classCache[bo] = e.$$element.hasClass(bo))
    }

    function An(e) {
        function t(e, t, n) {
            n && !e.$$classCache[t] ? (e.$$animate.addClass(e.$$element, t), e.$$classCache[t] = !0) : !n && e.$$classCache[t] && (e.$$animate.removeClass(e.$$element, t), e.$$classCache[t] = !1)
        }

        function n(e, n, r) {
            n = n ? "-" + X(n, "-") : "", t(e, bo + n, !0 === r), t(e, wo + n, !1 === r)
        }
        var r = e.set,
            i = e.unset;
        e.clazz.prototype.$setValidity = function(e, o, a) {
            $(o) ? (this.$pending || (this.$pending = {}), r(this.$pending, e, a)) : (this.$pending && i(this.$pending, e, a), xn(this.$pending) && (this.$pending = void 0)), D(o) ? o ? (i(this.$error, e, a), r(this.$$success, e, a)) : (r(this.$error, e, a), i(this.$$success, e, a)) : (i(this.$error, e, a), i(this.$$success, e, a)), this.$pending ? (t(this, "ng-pending", !0), this.$valid = this.$invalid = void 0, n(this, "", null)) : (t(this, "ng-pending", !1), this.$valid = xn(this.$error), this.$invalid = !this.$valid, n(this, "", this.$valid)), n(this, e, o = this.$pending && this.$pending[e] ? void 0 : !this.$error[e] && (!!this.$$success[e] || null)), this.$$parentForm.$setValidity(e, o, this)
        }
    }

    function xn(e) {
        if (e)
            for (var t in e)
                if (e.hasOwnProperty(t)) return !1;
        return !0
    }

    function Cn(e) {
        e.$formatters.push(function(t) {
            return e.$isEmpty(t) ? t : t.toString()
        })
    }

    function Sn(e, t, n, r, i, o) {
        var a = Gn(t[0].type);
        if (!i.android) {
            var s = !1;
            t.on("compositionstart", function() {
                s = !0
            }), t.on("compositionend", function() {
                s = !1, c()
            })
        }
        var u, c = function(e) {
            if (u && (o.defer.cancel(u), u = null), !s) {
                var i = t.val();
                e = e && e.type, "password" === a || n.ngTrim && "false" === n.ngTrim || (i = sr(i)), (r.$viewValue !== i || "" === i && r.$$hasNativeValidators) && r.$setViewValue(i, e)
            }
        };
        if (i.hasEvent("input")) t.on("input", c);
        else {
            var l = function(e, t, n) {
                u || (u = o.defer(function() {
                    u = null, t && t.value === n || c(e)
                }))
            };
            t.on("keydown", function(e) {
                var t = e.keyCode;
                91 === t || 15 < t && 19 > t || 37 <= t && 40 >= t || l(e, this, this.value)
            }), i.hasEvent("paste") && t.on("paste cut", l)
        }
        t.on("change", c), Yi[a] && r.$$hasNativeValidators && a === n.type && t.on("keydown wheel mousedown", function(e) {
            if (!u) {
                var t = this.validity,
                    n = t.badInput,
                    r = t.typeMismatch;
                u = o.defer(function() {
                    u = null, t.badInput === n && t.typeMismatch === r || c(e)
                })
            }
        }), r.$render = function() {
            var e = r.$isEmpty(r.$viewValue) ? "" : r.$viewValue;
            t.val() !== e && t.val(e)
        }
    }

    function kn(e, t) {
        return function(n, r) {
            var i, a;
            if (x(n)) return n;
            if (w(n)) {
                if ('"' === n.charAt(0) && '"' === n.charAt(n.length - 1) && (n = n.substring(1, n.length - 1)), zi.test(n)) return new Date(n);
                if (e.lastIndex = 0, i = e.exec(n)) return i.shift(), a = r ? {
                    yyyy: r.getFullYear(),
                    MM: r.getMonth() + 1,
                    dd: r.getDate(),
                    HH: r.getHours(),
                    mm: r.getMinutes(),
                    ss: r.getSeconds(),
                    sss: r.getMilliseconds() / 1e3
                } : {
                    yyyy: 1970,
                    MM: 1,
                    dd: 1,
                    HH: 0,
                    mm: 0,
                    ss: 0,
                    sss: 0
                }, o(i, function(e, n) {
                    n < t.length && (a[t[n]] = +e)
                }), new Date(a.yyyy, a.MM - 1, a.dd, a.HH, a.mm, a.ss || 0, 1e3 * a.sss || 0)
            }
            return NaN
        }
    }

    function En(e, t, n, r) {
        return function(i, o, a, s, u, c, l) {
            function d(e) {
                return e && !(e.getTime && e.getTime() != e.getTime())
            }

            function f(e) {
                return v(e) && !x(e) ? n(e) || void 0 : e
            }
            _n(i, o, a, s), Sn(0, o, a, s, u, c);
            var p, h, g, m = s && s.$options.getOption("timezone");
            (s.$$parserName = e, s.$parsers.push(function(e) {
                return s.$isEmpty(e) ? null : t.test(e) ? (e = n(e, p), m && (e = q(e, m)), e) : void 0
            }), s.$formatters.push(function(e) {
                if (e && !x(e)) throw Co("datefmt", e);
                return d(e) ? ((p = e) && m && (p = q(p, m, !0)), l("date")(e, r, m)) : (p = null, "")
            }), v(a.min) || a.ngMin) && (s.$validators.min = function(e) {
                return !d(e) || $(h) || n(e) >= h
            }, a.$observe("min", function(e) {
                h = f(e), s.$validate()
            }));
            (v(a.max) || a.ngMax) && (s.$validators.max = function(e) {
                return !d(e) || $(g) || n(e) <= g
            }, a.$observe("max", function(e) {
                g = f(e), s.$validate()
            }))
        }
    }

    function _n(e, t, n, r) {
        (r.$$hasNativeValidators = y(t[0].validity)) && r.$parsers.push(function(e) {
            var n = t.prop("validity") || {};
            return n.badInput || n.typeMismatch ? void 0 : e
        })
    }

    function Dn(e) {
        e.$$parserName = "number", e.$parsers.push(function(t) {
            return e.$isEmpty(t) ? null : Gi.test(t) ? parseFloat(t) : void 0
        }), e.$formatters.push(function(t) {
            if (!e.$isEmpty(t)) {
                if (!A(t)) throw Co("numfmt", t);
                t = t.toString()
            }
            return t
        })
    }

    function On(e) {
        return v(e) && !A(e) && (e = parseFloat(e)), nr(e) ? void 0 : e
    }

    function Mn(e) {
        var t = e.toString(),
            n = t.indexOf(".");
        return -1 === n ? -1 < e && 1 > e && (e = /e-(\d+)$/.exec(t)) ? Number(e[1]) : 0 : t.length - n - 1
    }

    function Fn(e, t, n) {
        var r = (0 | (e = Number(e))) !== e,
            i = (0 | t) !== t,
            o = (0 | n) !== n;
        if (r || i || o) {
            var a = r ? Mn(e) : 0,
                s = i ? Mn(t) : 0,
                u = o ? Mn(n) : 0;
            a = Math.max(a, s, u);
            e *= a = Math.pow(10, a), t *= a, n *= a, r && (e = Math.round(e)), i && (t = Math.round(t)), o && (n = Math.round(n))
        }
        return 0 == (e - t) % n
    }

    function Un(e, t, n, r, i) {
        if (v(r)) {
            if (!(e = e(r)).constant) throw Co("constexpr", n, r);
            return e(t)
        }
        return i
    }

    function Vn(e, t) {
        function n(e, t) {
            if (!e || !e.length) return [];
            if (!t || !t.length) return e;
            var n = [],
                r = 0;
            e: for (; r < e.length; r++) {
                for (var i = e[r], o = 0; o < t.length; o++)
                    if (i === t[o]) continue e;
                n.push(i)
            }
            return n
        }

        function r(e) {
            var t = e;
            return or(e) ? t = e.map(r).join(" ") : y(e) && (t = Object.keys(e).filter(function(t) {
                return e[t]
            }).join(" ")), t
        }

        function i(e) {
            var t = e;
            if (or(e)) t = e.map(i);
            else if (y(e)) {
                var n = !1;
                t = Object.keys(e).filter(function(t) {
                    return t = e[t], !n && $(t) && (n = !0), t
                });
                n && t.push(void 0)
            }
            return t
        }
        var a;
        return e = "ngClass" + e, ["$parse", function(s) {
            return {
                restrict: "AC",
                link: function(u, c, l) {
                    function d(e, t) {
                        var n = [];
                        return o(e, function(e) {
                            (0 < t || $[e]) && ($[e] = ($[e] || 0) + t, $[e] === +(0 < t) && n.push(e))
                        }), n.join(" ")
                    }

                    function f(e) {
                        if (v === t) {
                            var r = p && p.split(" "),
                                i = e && e.split(" "),
                                o = n(r, i);
                            r = n(i, r), o = d(o, -1), r = d(r, 1);
                            l.$addClass(r), l.$removeClass(o)
                        }
                        p = e
                    }
                    var p, h = ":" === (g = l[e].trim()).charAt(0) && ":" === g.charAt(1),
                        g = s(g, h ? i : r),
                        m = h ? function(e) {
                            (e = r(e)) !== p && f(e)
                        } : f,
                        $ = c.data("$classCounts"),
                        v = !0;
                    $ || ($ = oe(), c.data("$classCounts", $)), "ngClass" !== e && (a || (a = s("$index", function(e) {
                        return 1 & e
                    })), u.$watch(a, function(e) {
                        if (e === t) {
                            var n = d((n = p) && n.split(" "), 1);
                            l.$addClass(n)
                        } else n = d((n = p) && n.split(" "), -1), l.$removeClass(n);
                        v = e
                    })), u.$watch(g, m, h)
                }
            }
        }]
    }

    function Pn(e, t, n, r, i, o, a, s, u) {
        var c;
        this.$modelValue = this.$viewValue = Number.NaN, this.$$rawModelValue = void 0, this.$validators = {}, this.$asyncValidators = {}, this.$parsers = [], this.$formatters = [], this.$viewChangeListeners = [], this.$untouched = !0, this.$touched = !1, this.$pristine = !0, this.$dirty = !1, this.$valid = !0, this.$invalid = !1, this.$error = {}, this.$$success = {}, this.$pending = void 0, this.$name = u(n.name || "", !1)(e), this.$$parentForm = Ni, this.$options = So, this.$$updateEvents = "", this.$$updateEventHandler = this.$$updateEventHandler.bind(this), this.$$parsedNgModel = i(n.ngModel), this.$$parsedNgModelAssign = this.$$parsedNgModel.assign, this.$$ngModelGet = this.$$parsedNgModel, this.$$ngModelSet = this.$$parsedNgModelAssign, this.$$pendingDebounce = null, this.$$parserValid = void 0, this.$$currentValidationRunId = 0, Object.defineProperty(this, "$$scope", {
            value: e
        }), this.$$attr = n, this.$$element = r, this.$$animate = o, this.$$timeout = a, this.$$parse = i, this.$$q = s, this.$$exceptionHandler = t, wn(this), (c = this).$$scope.$watch(function(e) {
            return (e = c.$$ngModelGet(e)) === c.$modelValue || c.$modelValue != c.$modelValue && e != e || c.$$setModelValue(e), e
        })
    }

    function Tn(e) {
        this.$$options = e
    }

    function In(e, t) {
        o(t, function(t, n) {
            v(e[n]) || (e[n] = t)
        })
    }

    function Bn(e, t) {
        e.prop("selected", t), e.attr("selected", t)
    }
    var Nn, Rn, jn, qn, zn = {
            objectMaxDepth: 5
        },
        Ln = /^\/(.+)\/([a-z]*)$/,
        Hn = Object.prototype.hasOwnProperty,
        Gn = function(e) {
            return w(e) ? e.toLowerCase() : e
        },
        Wn = function(e) {
            return w(e) ? e.toUpperCase() : e
        },
        Kn = [].slice,
        Jn = [].splice,
        Zn = [].push,
        Qn = Object.prototype.toString,
        Yn = Object.getPrototypeOf,
        Xn = r("ng"),
        er = e.angular || (e.angular = {}),
        tr = 0;
    Nn = e.document.documentMode;
    var nr = Number.isNaN || function(e) {
        return e != e
    };
    p.$inject = [], h.$inject = [];
    var rr, ir, or = Array.isArray,
        ar = /^\[object (?:Uint8|Uint8Clamped|Uint16|Uint32|Int8|Int16|Int32|Float32|Float64)Array]$/,
        sr = function(e) {
            return w(e) ? e.trim() : e
        },
        ur = function(e) {
            return e.replace(/([-()[\]{}+?*.$^|,:#<!\\])/g, "\\$1").replace(/\x08/g, "\\x08")
        },
        cr = function() {
            if (!v(cr.rules)) {
                var t = e.document.querySelector("[ng-csp]") || e.document.querySelector("[data-ng-csp]");
                if (t) {
                    var n = t.getAttribute("ng-csp") || t.getAttribute("data-ng-csp");
                    cr.rules = {
                        noUnsafeEval: !n || -1 !== n.indexOf("no-unsafe-eval"),
                        noInlineStyle: !n || -1 !== n.indexOf("no-inline-style")
                    }
                } else {
                    t = cr;
                    try {
                        new Function(""), n = !1
                    } catch (e) {
                        n = !0
                    }
                    t.rules = {
                        noUnsafeEval: n,
                        noInlineStyle: !1
                    }
                }
            }
            return cr.rules
        },
        lr = function() {
            if (v(lr.name_)) return lr.name_;
            var t, n, r, i, o = fr.length;
            for (n = 0; n < o; ++n)
                if (r = fr[n], t = e.document.querySelector("[" + r.replace(":", "\\:") + "jq]")) {
                    i = t.getAttribute(r + "jq");
                    break
                }
            return lr.name_ = i
        },
        dr = /:/g,
        fr = ["ng-", "data-ng-", "ng:", "x-ng-"],
        pr = (rr = e.document, !(ir = rr.currentScript) || (ir instanceof e.HTMLScriptElement || ir instanceof e.SVGScriptElement) && [(ir = ir.attributes).getNamedItem("src"), ir.getNamedItem("href"), ir.getNamedItem("xlink:href")].every(function(e) {
            if (!e) return !0;
            if (!e.value) return !1;
            var t = rr.createElement("a");
            if (t.href = e.value, rr.location.origin === t.origin) return !0;
            switch (t.protocol) {
                case "http:":
                case "https:":
                case "ftp:":
                case "blob:":
                case "file:":
                case "data:":
                    return !0;
                default:
                    return !1
            }
        })),
        hr = /[A-Z]/g,
        gr = !1,
        mr = 3,
        $r = {
            full: "1.6.8",
            major: 1,
            minor: 6,
            dot: 8,
            codeName: "beneficial-tincture"
        };
    pe.expando = "ng339";
    var vr = pe.cache = {},
        yr = 1;
    pe._data = function(e) {
        return this.cache[e[this.expando]] || {}
    };
    var br = /-([a-z])/g,
        wr = /^-ms-/,
        Ar = {
            mouseleave: "mouseout",
            mouseenter: "mouseover"
        },
        xr = r("jqLite"),
        Cr = /^<([\w-]+)\s*\/?>(?:<\/\1>|)$/,
        Sr = /<|&#?\w+;/,
        kr = /<([\w:-]+)/,
        Er = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,
        _r = {
            option: [1, '<select multiple="multiple">', "</select>"],
            thead: [1, "<table>", "</table>"],
            col: [2, "<table><colgroup>", "</colgroup></table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: [0, "", ""]
        };
    _r.optgroup = _r.option, _r.tbody = _r.tfoot = _r.colgroup = _r.caption = _r.thead, _r.th = _r.td;
    var Dr = e.Node.prototype.contains || function(e) {
            return !!(16 & this.compareDocumentPosition(e))
        },
        Or = pe.prototype = {
            ready: _e,
            toString: function() {
                var e = [];
                return o(this, function(t) {
                    e.push("" + t)
                }), "[" + e.join(", ") + "]"
            },
            eq: function(e) {
                return Rn(0 <= e ? this[e] : this[this.length + e])
            },
            length: 0,
            push: Zn,
            sort: [].sort,
            splice: [].splice
        },
        Mr = {};
    o("multiple selected checked disabled readOnly required open".split(" "), function(e) {
        Mr[Gn(e)] = e
    });
    var Fr = {};
    o("input select option textarea button form details".split(" "), function(e) {
        Fr[e] = !0
    });
    var Ur = {
        ngMinlength: "minlength",
        ngMaxlength: "maxlength",
        ngMin: "min",
        ngMax: "max",
        ngPattern: "pattern",
        ngStep: "step"
    };
    o({
        data: ye,
        removeData: $e,
        hasData: function(e) {
            for (var t in vr[e.ng339]) return !0;
            return !1
        },
        cleanData: function(e) {
            for (var t = 0, n = e.length; t < n; t++) $e(e[t])
        }
    }, function(e, t) {
        pe[t] = e
    }), o({
        data: ye,
        inheritedData: Se,
        scope: function(e) {
            return Rn.data(e, "$scope") || Se(e.parentNode || e, ["$isolateScope", "$scope"])
        },
        isolateScope: function(e) {
            return Rn.data(e, "$isolateScope") || Rn.data(e, "$isolateScopeNoTemplate")
        },
        controller: Ce,
        injector: function(e) {
            return Se(e, "$injector")
        },
        removeAttr: function(e, t) {
            e.removeAttribute(t)
        },
        hasClass: be,
        css: function(e, t, n) {
            if (t = le(t.replace(wr, "ms-")), !v(n)) return e.style[t];
            e.style[t] = n
        },
        attr: function(e, t, n) {
            if ((r = e.nodeType) !== mr && 2 !== r && 8 !== r && e.getAttribute) {
                var r = Gn(t),
                    i = Mr[r];
                if (!v(n)) return e = e.getAttribute(t), i && null !== e && (e = r), null === e ? void 0 : e;
                null === n || !1 === n && i ? e.removeAttribute(t) : e.setAttribute(t, i ? r : n)
            }
        },
        prop: function(e, t, n) {
            if (!v(n)) return e[t];
            e[t] = n
        },
        text: function() {
            function e(e, t) {
                if ($(t)) {
                    var n = e.nodeType;
                    return 1 === n || n === mr ? e.textContent : ""
                }
                e.textContent = t
            }
            return e.$dv = "", e
        }(),
        val: function(e, t) {
            if ($(t)) {
                if (e.multiple && "select" === M(e)) {
                    var n = [];
                    return o(e.options, function(e) {
                        e.selected && n.push(e.value || e.text)
                    }), n
                }
                return e.value
            }
            e.value = t
        },
        html: function(e, t) {
            if ($(t)) return e.innerHTML;
            ge(e, !0), e.innerHTML = t
        },
        empty: ke
    }, function(e, t) {
        pe.prototype[t] = function(t, n) {
            var r, i, o = this.length;
            if (e !== ke && $(2 === e.length && e !== be && e !== Ce ? t : n)) {
                if (y(t)) {
                    for (r = 0; r < o; r++)
                        if (e === ye) e(this[r], t);
                        else
                            for (i in t) e(this[r], i, t[i]);
                    return this
                }
                for (o = $(r = e.$dv) ? Math.min(o, 1) : o, i = 0; i < o; i++) {
                    var a = e(this[i], t, n);
                    r = r ? r + a : a
                }
                return r
            }
            for (r = 0; r < o; r++) e(this[r], t, n);
            return this
        }
    }), o({
        removeData: $e,
        on: function(e, t, n, r) {
            if (v(r)) throw xr("onargs");
            if (de(e)) {
                var i = (r = ve(e, !0)).events,
                    o = r.handle;
                o || (o = r.handle = (c = i, (l = function(e, t) {
                    e.isDefaultPrevented = function() {
                        return e.defaultPrevented
                    };
                    var n = c[t || e.type],
                        r = n ? n.length : 0;
                    if (r) {
                        if ($(e.immediatePropagationStopped)) {
                            var i = e.stopImmediatePropagation;
                            e.stopImmediatePropagation = function() {
                                e.immediatePropagationStopped = !0, e.stopPropagation && e.stopPropagation(), i && i.call(e)
                            }
                        }
                        e.isImmediatePropagationStopped = function() {
                            return !0 === e.immediatePropagationStopped
                        };
                        var o = n.specialHandlerWrapper || Oe;
                        1 < r && (n = se(n));
                        for (var a = 0; a < r; a++) e.isImmediatePropagationStopped() || o(u, e, n[a])
                    }
                }).elem = u = e, l));
                for (var a = (r = 0 <= t.indexOf(" ") ? t.split(" ") : [t]).length, s = function(t, r, a) {
                        var s = i[t];
                        s || ((s = i[t] = []).specialHandlerWrapper = r, "$destroy" === t || a || e.addEventListener(t, o)), s.push(n)
                    }; a--;) t = r[a], Ar[t] ? (s(Ar[t], Me), s(t, void 0, !0)) : s(t)
            }
            var u, c, l
        },
        off: me,
        one: function(e, t, n) {
            (e = Rn(e)).on(t, function r() {
                e.off(t, n), e.off(t, r)
            }), e.on(t, n)
        },
        replaceWith: function(e, t) {
            var n, r = e.parentNode;
            ge(e), o(new pe(t), function(t) {
                n ? r.insertBefore(t, n.nextSibling) : r.replaceChild(t, e), n = t
            })
        },
        children: function(e) {
            var t = [];
            return o(e.childNodes, function(e) {
                1 === e.nodeType && t.push(e)
            }), t
        },
        contents: function(e) {
            return e.contentDocument || e.childNodes || []
        },
        append: function(e, t) {
            if (1 === (n = e.nodeType) || 11 === n)
                for (var n = 0, r = (t = new pe(t)).length; n < r; n++) e.appendChild(t[n])
        },
        prepend: function(e, t) {
            if (1 === e.nodeType) {
                var n = e.firstChild;
                o(new pe(t), function(t) {
                    e.insertBefore(t, n)
                })
            }
        },
        wrap: function(e, t) {
            var n = Rn(t).eq(0).clone()[0],
                r = e.parentNode;
            r && r.replaceChild(n, e), n.appendChild(e)
        },
        remove: Ee,
        detach: function(e) {
            Ee(e, !0)
        },
        after: function(e, t) {
            var n = e,
                r = e.parentNode;
            if (r)
                for (var i = 0, o = (t = new pe(t)).length; i < o; i++) {
                    var a = t[i];
                    r.insertBefore(a, n.nextSibling), n = a
                }
        },
        addClass: Ae,
        removeClass: we,
        toggleClass: function(e, t, n) {
            t && o(t.split(" "), function(t) {
                var r = n;
                $(r) && (r = !be(e, t)), (r ? Ae : we)(e, t)
            })
        },
        parent: function(e) {
            return (e = e.parentNode) && 11 !== e.nodeType ? e : null
        },
        next: function(e) {
            return e.nextElementSibling
        },
        find: function(e, t) {
            return e.getElementsByTagName ? e.getElementsByTagName(t) : []
        },
        clone: he,
        triggerHandler: function(e, t, n) {
            var r, i, a = t.type || t,
                s = ve(e);
            (s = (s = s && s.events) && s[a]) && (r = {
                preventDefault: function() {
                    this.defaultPrevented = !0
                },
                isDefaultPrevented: function() {
                    return !0 === this.defaultPrevented
                },
                stopImmediatePropagation: function() {
                    this.immediatePropagationStopped = !0
                },
                isImmediatePropagationStopped: function() {
                    return !0 === this.immediatePropagationStopped
                },
                stopPropagation: p,
                type: a,
                target: e
            }, t.type && (r = c(r, t)), t = se(s), i = n ? [r].concat(n) : [r], o(t, function(t) {
                r.isImmediatePropagationStopped() || t.apply(e, i)
            }))
        }
    }, function(e, t) {
        pe.prototype[t] = function(t, n, r) {
            for (var i, o = 0, a = this.length; o < a; o++) $(i) ? v(i = e(this[o], t, n, r)) && (i = Rn(i)) : xe(i, e(this[o], t, n, r));
            return v(i) ? i : this
        }
    }), pe.prototype.bind = pe.prototype.on, pe.prototype.unbind = pe.prototype.off;
    var Vr = Object.create(null);
    Ve.prototype = {
        _idx: function(e) {
            return e === this._lastKey ? this._lastIndex : (this._lastKey = e, this._lastIndex = this._keys.indexOf(e))
        },
        _transformKey: function(e) {
            return nr(e) ? Vr : e
        },
        get: function(e) {
            if (e = this._transformKey(e), -1 !== (e = this._idx(e))) return this._values[e]
        },
        set: function(e, t) {
            e = this._transformKey(e);
            var n = this._idx(e); - 1 === n && (n = this._lastIndex = this._keys.length), this._keys[n] = e, this._values[n] = t
        },
        delete: function(e) {
            return e = this._transformKey(e), -1 !== (e = this._idx(e)) && (this._keys.splice(e, 1), this._values.splice(e, 1), this._lastKey = NaN, this._lastIndex = -1, !0)
        }
    };
    var Pr = Ve,
        Tr = [function() {
            this.$get = [function() {
                return Pr
            }]
        }],
        Ir = /^([^(]+?)=>/,
        Br = /^[^(]*\(\s*([^)]*)\)/m,
        Nr = /,/,
        Rr = /^\s*(_?)(\S+?)\1\s*$/,
        jr = /((\/\/.*$)|(\/\*[\s\S]*?\*\/))/gm,
        qr = r("$injector");
    Te.$$annotate = function(e, t, n) {
        var r, i;
        if ("function" == typeof e) {
            if (!(r = e.$inject)) {
                if (r = [], e.length) {
                    if (t) throw w(n) && n || (n = e.name || ((i = Pe(i = e)) ? "function(" + (i[1] || "").replace(/[\s\r\n]+/, " ") + ")" : "fn")), qr("strictdi", n);
                    o((t = Pe(e))[1].split(Nr), function(e) {
                        e.replace(Rr, function(e, t, n) {
                            r.push(n)
                        })
                    })
                }
                e.$inject = r
            }
        } else or(e) ? (te(e[t = e.length - 1], "fn"), r = e.slice(0, t)) : te(e, "fn", !0);
        return r
    };
    var zr = r("$animate"),
        Lr = function() {
            this.$get = p
        },
        Hr = function() {
            var e = new Pr,
                t = [];
            this.$get = ["$$AnimateRunner", "$rootScope", function(n, r) {
                function i(e, t, n) {
                    var r = !1;
                    return t && o(t = w(t) ? t.split(" ") : or(t) ? t : [], function(t) {
                        t && (r = !0, e[t] = n)
                    }), r
                }

                function a() {
                    o(t, function(t) {
                        var n = e.get(t);
                        if (n) {
                            var r = function(e) {
                                    w(e) && (e = e.split(" "));
                                    var t = oe();
                                    return o(e, function(e) {
                                        e.length && (t[e] = !0)
                                    }), t
                                }(t.attr("class")),
                                i = "",
                                a = "";
                            o(n, function(e, t) {
                                e !== !!r[t] && (e ? i += (i.length ? " " : "") + t : a += (a.length ? " " : "") + t)
                            }), o(t, function(e) {
                                i && Ae(e, i), a && we(e, a)
                            }), e.delete(t)
                        }
                    }), t.length = 0
                }
                return {
                    enabled: p,
                    on: p,
                    off: p,
                    pin: p,
                    push: function(o, s, u, c) {
                        return c && c(), (u = u || {}).from && o.css(u.from), u.to && o.css(u.to), (u.addClass || u.removeClass) && (s = u.addClass, c = u.removeClass, s = i(u = e.get(o) || {}, s, !0), c = i(u, c, !1), (s || c) && (e.set(o, u), t.push(o), 1 === t.length && r.$$postDigest(a))), (o = new n).complete(), o
                    }
                }
            }]
        },
        Gr = ["$provide", function(e) {
            var t = this,
                n = null,
                r = null;
            this.$$registeredAnimations = Object.create(null), this.register = function(n, r) {
                if (n && "." !== n.charAt(0)) throw zr("notcsel", n);
                var i = n + "-animation";
                t.$$registeredAnimations[n.substr(1)] = i, e.factory(i, r)
            }, this.customFilter = function(e) {
                return 1 === arguments.length && (r = S(e) ? e : null), r
            }, this.classNameFilter = function(e) {
                if (1 === arguments.length && (n = e instanceof RegExp ? e : null) && /[(\s|\/)]ng-animate[(\s|\/)]/.test(n.toString())) throw n = null, zr("nongcls", "ng-animate");
                return n
            }, this.$get = ["$$animateQueue", function(e) {
                function t(e, t, n) {
                    if (n) {
                        var r;
                        e: {
                            for (r = 0; r < n.length; r++) {
                                var i = n[r];
                                if (1 === i.nodeType) {
                                    r = i;
                                    break e
                                }
                            }
                            r = void 0
                        }!r || r.parentNode || r.previousElementSibling || (n = null)
                    }
                    n ? n.after(e) : t.prepend(e)
                }
                return {
                    on: e.on,
                    off: e.off,
                    pin: e.pin,
                    enabled: e.enabled,
                    cancel: function(e) {
                        e.end && e.end()
                    },
                    enter: function(n, r, i, o) {
                        return r = r && Rn(r), i = i && Rn(i), t(n, r = r || i.parent(), i), e.push(n, "enter", Ne(o))
                    },
                    move: function(n, r, i, o) {
                        return r = r && Rn(r), i = i && Rn(i), t(n, r = r || i.parent(), i), e.push(n, "move", Ne(o))
                    },
                    leave: function(t, n) {
                        return e.push(t, "leave", Ne(n), function() {
                            t.remove()
                        })
                    },
                    addClass: function(t, n, r) {
                        return (r = Ne(r)).addClass = Be(r.addclass, n), e.push(t, "addClass", r)
                    },
                    removeClass: function(t, n, r) {
                        return (r = Ne(r)).removeClass = Be(r.removeClass, n), e.push(t, "removeClass", r)
                    },
                    setClass: function(t, n, r, i) {
                        return (i = Ne(i)).addClass = Be(i.addClass, n), i.removeClass = Be(i.removeClass, r), e.push(t, "setClass", i)
                    },
                    animate: function(t, n, r, i, o) {
                        return (o = Ne(o)).from = o.from ? c(o.from, n) : n, o.to = o.to ? c(o.to, r) : r, o.tempClasses = Be(o.tempClasses, i || "ng-inline-animate"), e.push(t, "animate", o)
                    }
                }
            }]
        }],
        Wr = function() {
            this.$get = ["$$rAF", function(e) {
                function t(t) {
                    n.push(t), 1 < n.length || e(function() {
                        for (var e = 0; e < n.length; e++) n[e]();
                        n = []
                    })
                }
                var n = [];
                return function() {
                    var e = !1;
                    return t(function() {
                            e = !0
                        }),
                        function(n) {
                            e ? n() : t(n)
                        }
                }
            }]
        },
        Kr = function() {
            this.$get = ["$q", "$sniffer", "$$animateAsyncRun", "$$isDocumentHidden", "$timeout", function(e, t, n, r, i) {
                function a(e) {
                    this.setHost(e);
                    var t = n();
                    this._doneCallbacks = [], this._tick = function(e) {
                        r() ? i(e, 0, !1) : t(e)
                    }, this._state = 0
                }
                return a.chain = function(e, t) {
                    var n = 0;
                    ! function r() {
                        n === e.length ? t(!0) : e[n](function(e) {
                            !1 === e ? t(!1) : (n++, r())
                        })
                    }()
                }, a.all = function(e, t) {
                    function n(n) {
                        i = i && n, ++r === e.length && t(i)
                    }
                    var r = 0,
                        i = !0;
                    o(e, function(e) {
                        e.done(n)
                    })
                }, a.prototype = {
                    setHost: function(e) {
                        this.host = e || {}
                    },
                    done: function(e) {
                        2 === this._state ? e() : this._doneCallbacks.push(e)
                    },
                    progress: p,
                    getPromise: function() {
                        if (!this.promise) {
                            var t = this;
                            this.promise = e(function(e, n) {
                                t.done(function(t) {
                                    !1 === t ? n() : e()
                                })
                            })
                        }
                        return this.promise
                    },
                    then: function(e, t) {
                        return this.getPromise().then(e, t)
                    },
                    catch: function(e) {
                        return this.getPromise().catch(e)
                    },
                    finally: function(e) {
                        return this.getPromise().finally(e)
                    },
                    pause: function() {
                        this.host.pause && this.host.pause()
                    },
                    resume: function() {
                        this.host.resume && this.host.resume()
                    },
                    end: function() {
                        this.host.end && this.host.end(), this._resolve(!0)
                    },
                    cancel: function() {
                        this.host.cancel && this.host.cancel(), this._resolve(!1)
                    },
                    complete: function(e) {
                        var t = this;
                        0 === t._state && (t._state = 1, t._tick(function() {
                            t._resolve(e)
                        }))
                    },
                    _resolve: function(e) {
                        2 !== this._state && (o(this._doneCallbacks, function(t) {
                            t(e)
                        }), this._doneCallbacks.length = 0, this._state = 2)
                    }
                }, a
            }]
        },
        Jr = function() {
            this.$get = ["$$rAF", "$q", "$$AnimateRunner", function(e, t, n) {
                return function(t, r) {
                    function i() {
                        return e(function() {
                            o.addClass && (t.addClass(o.addClass), o.addClass = null), o.removeClass && (t.removeClass(o.removeClass), o.removeClass = null), o.to && (t.css(o.to), o.to = null), a || s.complete(), a = !0
                        }), s
                    }
                    var o = r || {};
                    o.$$prepared || (o = U(o)), o.cleanupStyles && (o.from = o.to = null), o.from && (t.css(o.from), o.from = null);
                    var a, s = new n;
                    return {
                        start: i,
                        end: i
                    }
                }
            }]
        },
        Zr = r("$compile"),
        Qr = new function() {};
    ze.$inject = ["$provide", "$$sanitizeUriProvider"], Le.prototype.isFirstChange = function() {
        return this.previousValue === Qr
    };
    var Yr = /^((?:x|data)[:\-_])/i,
        Xr = /[:\-_]+(.)/g,
        ei = r("$controller"),
        ti = /^(\S+)(\s+as\s+([\w$]+))?$/,
        ni = function() {
            this.$get = ["$document", function(e) {
                return function(t) {
                    return t ? !t.nodeType && t instanceof Rn && (t = t[0]) : t = e[0].body, t.offsetWidth + 1
                }
            }]
        },
        ri = "application/json",
        ii = {
            "Content-Type": ri + ";charset=utf-8"
        },
        oi = /^\[|^\{(?!\{)/,
        ai = {
            "[": /]$/,
            "{": /}$/
        },
        si = /^\)]\}',?\n/,
        ui = r("$http"),
        ci = er.$interpolateMinErr = r("$interpolate");
    ci.throwNoconcat = function(e) {
        throw ci("noconcat", e)
    }, ci.interr = function(e, t) {
        return ci("interr", e, t.toString())
    };
    var li = function() {
            this.$get = function() {
                var e = er.callbacks,
                    t = {};
                return {
                    createCallback: function(n) {
                        var r, i = "angular.callbacks." + (n = "_" + (e.$$counter++).toString(36)),
                            o = ((r = function(e) {
                                r.data = e, r.called = !0
                            }).id = n, r);
                        return t[i] = e[n] = o, i
                    },
                    wasCalled: function(e) {
                        return t[e].called
                    },
                    getResponse: function(e) {
                        return t[e].data
                    },
                    removeCallback: function(n) {
                        delete e[t[n].id], delete t[n]
                    }
                }
            }
        },
        di = /^([^?#]*)(\?([^#]*))?(#(.*))?$/,
        fi = {
            http: 80,
            https: 443,
            ftp: 21
        },
        pi = r("$location"),
        hi = /^\s*[\\/]{2,}/,
        gi = {
            $$absUrl: "",
            $$html5: !1,
            $$replace: !1,
            absUrl: bt("$$absUrl"),
            url: function(e) {
                if ($(e)) return this.$$url;
                var t = di.exec(e);
                return (t[1] || "" === e) && this.path(decodeURIComponent(t[1])), (t[2] || t[1] || "" === e) && this.search(t[3] || ""), this.hash(t[5] || ""), this
            },
            protocol: bt("$$protocol"),
            host: bt("$$host"),
            port: bt("$$port"),
            path: wt("$$path", function(e) {
                return "/" === (e = null !== e ? e.toString() : "").charAt(0) ? e : "/" + e
            }),
            search: function(e, t) {
                switch (arguments.length) {
                    case 0:
                        return this.$$search;
                    case 1:
                        if (w(e) || A(e)) e = e.toString(), this.$$search = H(e);
                        else {
                            if (!y(e)) throw pi("isrcharg");
                            o(e = U(e, {}), function(t, n) {
                                null == t && delete e[n]
                            }), this.$$search = e
                        }
                        break;
                    default:
                        $(t) || null === t ? delete this.$$search[e] : this.$$search[e] = t
                }
                return this.$$compose(), this
            },
            hash: wt("$$hash", function(e) {
                return null !== e ? e.toString() : ""
            }),
            replace: function() {
                return this.$$replace = !0, this
            }
        };
    o([yt, vt, $t], function(e) {
        e.prototype = Object.create(gi), e.prototype.state = function(t) {
            if (!arguments.length) return this.$$state;
            if (e !== $t || !this.$$html5) throw pi("nostate");
            return this.$$state = $(t) ? null : t, this.$$urlUpdatedByLocation = !0, this
        }
    });
    var mi = r("$parse"),
        $i = {}.constructor.prototype.valueOf,
        vi = oe();
    o("+ - * / % === !== == != < > <= >= && || ! = |".split(" "), function(e) {
        vi[e] = !0
    });
    var yi = {
            n: "\n",
            f: "\f",
            r: "\r",
            t: "\t",
            v: "\v",
            "'": "'",
            '"': '"'
        },
        bi = function(e) {
            this.options = e
        };
    bi.prototype = {
        constructor: bi,
        lex: function(e) {
            for (this.text = e, this.index = 0, this.tokens = []; this.index < this.text.length;)
                if ('"' === (e = this.text.charAt(this.index)) || "'" === e) this.readString(e);
                else if (this.isNumber(e) || "." === e && this.isNumber(this.peek())) this.readNumber();
            else if (this.isIdentifierStart(this.peekMultichar())) this.readIdent();
            else if (this.is(e, "(){}[].,;:?")) this.tokens.push({
                index: this.index,
                text: e
            }), this.index++;
            else if (this.isWhitespace(e)) this.index++;
            else {
                var t = e + this.peek(),
                    n = t + this.peek(2),
                    r = vi[t],
                    i = vi[n];
                vi[e] || r || i ? (e = i ? n : r ? t : e, this.tokens.push({
                    index: this.index,
                    text: e,
                    operator: !0
                }), this.index += e.length) : this.throwError("Unexpected next character ", this.index, this.index + 1)
            }
            return this.tokens
        },
        is: function(e, t) {
            return -1 !== t.indexOf(e)
        },
        peek: function(e) {
            return e = e || 1, this.index + e < this.text.length && this.text.charAt(this.index + e)
        },
        isNumber: function(e) {
            return "0" <= e && "9" >= e && "string" == typeof e
        },
        isWhitespace: function(e) {
            return " " === e || "\r" === e || "\t" === e || "\n" === e || "\v" === e || " " === e
        },
        isIdentifierStart: function(e) {
            return this.options.isIdentifierStart ? this.options.isIdentifierStart(e, this.codePointAt(e)) : this.isValidIdentifierStart(e)
        },
        isValidIdentifierStart: function(e) {
            return "a" <= e && "z" >= e || "A" <= e && "Z" >= e || "_" === e || "$" === e
        },
        isIdentifierContinue: function(e) {
            return this.options.isIdentifierContinue ? this.options.isIdentifierContinue(e, this.codePointAt(e)) : this.isValidIdentifierContinue(e)
        },
        isValidIdentifierContinue: function(e, t) {
            return this.isValidIdentifierStart(e, t) || this.isNumber(e)
        },
        codePointAt: function(e) {
            return 1 === e.length ? e.charCodeAt(0) : (e.charCodeAt(0) << 10) + e.charCodeAt(1) - 56613888
        },
        peekMultichar: function() {
            var e = this.text.charAt(this.index),
                t = this.peek();
            if (!t) return e;
            var n = e.charCodeAt(0),
                r = t.charCodeAt(0);
            return 55296 <= n && 56319 >= n && 56320 <= r && 57343 >= r ? e + t : e
        },
        isExpOperator: function(e) {
            return "-" === e || "+" === e || this.isNumber(e)
        },
        throwError: function(e, t, n) {
            throw n = n || this.index, t = v(t) ? "s " + t + "-" + this.index + " [" + this.text.substring(t, n) + "]" : " " + n, mi("lexerr", e, t, this.text)
        },
        readNumber: function() {
            for (var e = "", t = this.index; this.index < this.text.length;) {
                var n = Gn(this.text.charAt(this.index));
                if ("." === n || this.isNumber(n)) e += n;
                else {
                    var r = this.peek();
                    if ("e" === n && this.isExpOperator(r)) e += n;
                    else if (this.isExpOperator(n) && r && this.isNumber(r) && "e" === e.charAt(e.length - 1)) e += n;
                    else {
                        if (!this.isExpOperator(n) || r && this.isNumber(r) || "e" !== e.charAt(e.length - 1)) break;
                        this.throwError("Invalid exponent")
                    }
                }
                this.index++
            }
            this.tokens.push({
                index: t,
                text: e,
                constant: !0,
                value: Number(e)
            })
        },
        readIdent: function() {
            var e = this.index;
            for (this.index += this.peekMultichar().length; this.index < this.text.length;) {
                var t = this.peekMultichar();
                if (!this.isIdentifierContinue(t)) break;
                this.index += t.length
            }
            this.tokens.push({
                index: e,
                text: this.text.slice(e, this.index),
                identifier: !0
            })
        },
        readString: function(e) {
            var t = this.index;
            this.index++;
            for (var n = "", r = e, i = !1; this.index < this.text.length;) {
                var o = this.text.charAt(this.index);
                r = r + o;
                if (i) "u" === o ? ((i = this.text.substring(this.index + 1, this.index + 5)).match(/[\da-f]{4}/i) || this.throwError("Invalid unicode escape [\\u" + i + "]"), this.index += 4, n += String.fromCharCode(parseInt(i, 16))) : n += yi[o] || o, i = !1;
                else if ("\\" === o) i = !0;
                else {
                    if (o === e) return this.index++, void this.tokens.push({
                        index: t,
                        text: r,
                        constant: !0,
                        value: n
                    });
                    n += o
                }
                this.index++
            }
            this.throwError("Unterminated quote", t)
        }
    };
    var wi = function(e, t) {
        this.lexer = e, this.options = t
    };
    wi.Program = "Program", wi.ExpressionStatement = "ExpressionStatement", wi.AssignmentExpression = "AssignmentExpression", wi.ConditionalExpression = "ConditionalExpression", wi.LogicalExpression = "LogicalExpression", wi.BinaryExpression = "BinaryExpression", wi.UnaryExpression = "UnaryExpression", wi.CallExpression = "CallExpression", wi.MemberExpression = "MemberExpression", wi.Identifier = "Identifier", wi.Literal = "Literal", wi.ArrayExpression = "ArrayExpression", wi.Property = "Property", wi.ObjectExpression = "ObjectExpression", wi.ThisExpression = "ThisExpression", wi.LocalsExpression = "LocalsExpression", wi.NGValueParameter = "NGValueParameter", wi.prototype = {
        ast: function(e) {
            return this.text = e, this.tokens = this.lexer.lex(e), e = this.program(), 0 !== this.tokens.length && this.throwError("is an unexpected token", this.tokens[0]), e
        },
        program: function() {
            for (var e = [];;)
                if (0 < this.tokens.length && !this.peek("}", ")", ";", "]") && e.push(this.expressionStatement()), !this.expect(";")) return {
                    type: wi.Program,
                    body: e
                }
        },
        expressionStatement: function() {
            return {
                type: wi.ExpressionStatement,
                expression: this.filterChain()
            }
        },
        filterChain: function() {
            for (var e = this.expression(); this.expect("|");) e = this.filter(e);
            return e
        },
        expression: function() {
            return this.assignment()
        },
        assignment: function() {
            var e = this.ternary();
            if (this.expect("=")) {
                if (!Dt(e)) throw mi("lval");
                e = {
                    type: wi.AssignmentExpression,
                    left: e,
                    right: this.assignment(),
                    operator: "="
                }
            }
            return e
        },
        ternary: function() {
            var e, t, n = this.logicalOR();
            return this.expect("?") && (e = this.expression(), this.consume(":")) ? (t = this.expression(), {
                type: wi.ConditionalExpression,
                test: n,
                alternate: e,
                consequent: t
            }) : n
        },
        logicalOR: function() {
            for (var e = this.logicalAND(); this.expect("||");) e = {
                type: wi.LogicalExpression,
                operator: "||",
                left: e,
                right: this.logicalAND()
            };
            return e
        },
        logicalAND: function() {
            for (var e = this.equality(); this.expect("&&");) e = {
                type: wi.LogicalExpression,
                operator: "&&",
                left: e,
                right: this.equality()
            };
            return e
        },
        equality: function() {
            for (var e, t = this.relational(); e = this.expect("==", "!=", "===", "!==");) t = {
                type: wi.BinaryExpression,
                operator: e.text,
                left: t,
                right: this.relational()
            };
            return t
        },
        relational: function() {
            for (var e, t = this.additive(); e = this.expect("<", ">", "<=", ">=");) t = {
                type: wi.BinaryExpression,
                operator: e.text,
                left: t,
                right: this.additive()
            };
            return t
        },
        additive: function() {
            for (var e, t = this.multiplicative(); e = this.expect("+", "-");) t = {
                type: wi.BinaryExpression,
                operator: e.text,
                left: t,
                right: this.multiplicative()
            };
            return t
        },
        multiplicative: function() {
            for (var e, t = this.unary(); e = this.expect("*", "/", "%");) t = {
                type: wi.BinaryExpression,
                operator: e.text,
                left: t,
                right: this.unary()
            };
            return t
        },
        unary: function() {
            var e;
            return (e = this.expect("+", "-", "!")) ? {
                type: wi.UnaryExpression,
                operator: e.text,
                prefix: !0,
                argument: this.unary()
            } : this.primary()
        },
        primary: function() {
            var e, t;
            for (this.expect("(") ? (e = this.filterChain(), this.consume(")")) : this.expect("[") ? e = this.arrayDeclaration() : this.expect("{") ? e = this.object() : this.selfReferential.hasOwnProperty(this.peek().text) ? e = U(this.selfReferential[this.consume().text]) : this.options.literals.hasOwnProperty(this.peek().text) ? e = {
                    type: wi.Literal,
                    value: this.options.literals[this.consume().text]
                } : this.peek().identifier ? e = this.identifier() : this.peek().constant ? e = this.constant() : this.throwError("not a primary expression", this.peek()); t = this.expect("(", "[", ".");) "(" === t.text ? (e = {
                type: wi.CallExpression,
                callee: e,
                arguments: this.parseArguments()
            }, this.consume(")")) : "[" === t.text ? (e = {
                type: wi.MemberExpression,
                object: e,
                property: this.expression(),
                computed: !0
            }, this.consume("]")) : "." === t.text ? e = {
                type: wi.MemberExpression,
                object: e,
                property: this.identifier(),
                computed: !1
            } : this.throwError("IMPOSSIBLE");
            return e
        },
        filter: function(e) {
            e = [e];
            for (var t = {
                    type: wi.CallExpression,
                    callee: this.identifier(),
                    arguments: e,
                    filter: !0
                }; this.expect(":");) e.push(this.expression());
            return t
        },
        parseArguments: function() {
            var e = [];
            if (")" !== this.peekToken().text)
                do {
                    e.push(this.filterChain())
                } while (this.expect(","));
            return e
        },
        identifier: function() {
            var e = this.consume();
            return e.identifier || this.throwError("is not a valid identifier", e), {
                type: wi.Identifier,
                name: e.text
            }
        },
        constant: function() {
            return {
                type: wi.Literal,
                value: this.consume().value
            }
        },
        arrayDeclaration: function() {
            var e = [];
            if ("]" !== this.peekToken().text)
                do {
                    if (this.peek("]")) break;
                    e.push(this.expression())
                } while (this.expect(","));
            return this.consume("]"), {
                type: wi.ArrayExpression,
                elements: e
            }
        },
        object: function() {
            var e, t = [];
            if ("}" !== this.peekToken().text)
                do {
                    if (this.peek("}")) break;
                    e = {
                        type: wi.Property,
                        kind: "init"
                    }, this.peek().constant ? (e.key = this.constant(), e.computed = !1, this.consume(":"), e.value = this.expression()) : this.peek().identifier ? (e.key = this.identifier(), e.computed = !1, this.peek(":") ? (this.consume(":"), e.value = this.expression()) : e.value = e.key) : this.peek("[") ? (this.consume("["), e.key = this.expression(), this.consume("]"), e.computed = !0, this.consume(":"), e.value = this.expression()) : this.throwError("invalid key", this.peek()), t.push(e)
                } while (this.expect(","));
            return this.consume("}"), {
                type: wi.ObjectExpression,
                properties: t
            }
        },
        throwError: function(e, t) {
            throw mi("syntax", t.text, e, t.index + 1, this.text, this.text.substring(t.index))
        },
        consume: function(e) {
            if (0 === this.tokens.length) throw mi("ueoe", this.text);
            var t = this.expect(e);
            return t || this.throwError("is unexpected, expecting [" + e + "]", this.peek()), t
        },
        peekToken: function() {
            if (0 === this.tokens.length) throw mi("ueoe", this.text);
            return this.tokens[0]
        },
        peek: function(e, t, n, r) {
            return this.peekAhead(0, e, t, n, r)
        },
        peekAhead: function(e, t, n, r, i) {
            if (this.tokens.length > e) {
                var o = (e = this.tokens[e]).text;
                if (o === t || o === n || o === r || o === i || !(t || n || r || i)) return e
            }
            return !1
        },
        expect: function(e, t, n, r) {
            return !!(e = this.peek(e, t, n, r)) && (this.tokens.shift(), e)
        },
        selfReferential: {
            this: {
                type: wi.ThisExpression
            },
            $locals: {
                type: wi.LocalsExpression
            }
        }
    };
    var Ai = 2;
    Mt.prototype = {
        compile: function(e) {
            var t = this;
            this.state = {
                nextId: 0,
                filters: {},
                fn: {
                    vars: [],
                    body: [],
                    own: {}
                },
                assign: {
                    vars: [],
                    body: [],
                    own: {}
                },
                inputs: []
            }, Et(e, t.$filter);
            var n, r = "";
            return this.stage = "assign", (n = Ot(e)) && (this.state.computing = "assign", r = this.nextId(), this.recurse(n, r), this.return_(r), r = "fn.assign=" + this.generateFunction("assign", "s,v,l")), n = _t(e.body), t.stage = "inputs", o(n, function(e, n) {
                var r = "fn" + n;
                t.state[r] = {
                    vars: [],
                    body: [],
                    own: {}
                }, t.state.computing = r;
                var i = t.nextId();
                t.recurse(e, i), t.return_(i), t.state.inputs.push({
                    name: r,
                    isPure: e.isPure
                }), e.watchId = n
            }), this.state.computing = "fn", this.stage = "main", this.recurse(e), e = '"' + this.USE + " " + this.STRICT + '";\n' + this.filterPrefix() + "var fn=" + this.generateFunction("fn", "s,l,a,i") + r + this.watchFns() + "return fn;", e = new Function("$filter", "getStringValue", "ifDefined", "plus", e)(this.$filter, Ct, St, kt), this.state = this.stage = void 0, e
        },
        USE: "use",
        STRICT: "strict",
        watchFns: function() {
            var e = [],
                t = this.state.inputs,
                n = this;
            return o(t, function(t) {
                e.push("var " + t.name + "=" + n.generateFunction(t.name, "s")), t.isPure && e.push(t.name, ".isPure=" + JSON.stringify(t.isPure) + ";")
            }), t.length && e.push("fn.inputs=[" + t.map(function(e) {
                return e.name
            }).join(",") + "];"), e.join("")
        },
        generateFunction: function(e, t) {
            return "function(" + t + "){" + this.varsPrefix(e) + this.body(e) + "};"
        },
        filterPrefix: function() {
            var e = [],
                t = this;
            return o(this.state.filters, function(n, r) {
                e.push(n + "=$filter(" + t.escape(r) + ")")
            }), e.length ? "var " + e.join(",") + ";" : ""
        },
        varsPrefix: function(e) {
            return this.state[e].vars.length ? "var " + this.state[e].vars.join(",") + ";" : ""
        },
        body: function(e) {
            return this.state[e].body.join("")
        },
        recurse: function(e, t, n, r, i, a) {
            var s, u, c, l, d, f = this;
            if (r = r || p, !a && v(e.watchId)) t = t || this.nextId(), this.if_("i", this.lazyAssign(t, this.computedMember("i", e.watchId)), this.lazyRecurse(e, t, n, r, i, !0));
            else switch (e.type) {
                case wi.Program:
                    o(e.body, function(t, n) {
                        f.recurse(t.expression, void 0, void 0, function(e) {
                            u = e
                        }), n !== e.body.length - 1 ? f.current().body.push(u, ";") : f.return_(u)
                    });
                    break;
                case wi.Literal:
                    l = this.escape(e.value), this.assign(t, l), r(t || l);
                    break;
                case wi.UnaryExpression:
                    this.recurse(e.argument, void 0, void 0, function(e) {
                        u = e
                    }), l = e.operator + "(" + this.ifDefined(u, 0) + ")", this.assign(t, l), r(l);
                    break;
                case wi.BinaryExpression:
                    this.recurse(e.left, void 0, void 0, function(e) {
                        s = e
                    }), this.recurse(e.right, void 0, void 0, function(e) {
                        u = e
                    }), l = "+" === e.operator ? this.plus(s, u) : "-" === e.operator ? this.ifDefined(s, 0) + e.operator + this.ifDefined(u, 0) : "(" + s + ")" + e.operator + "(" + u + ")", this.assign(t, l), r(l);
                    break;
                case wi.LogicalExpression:
                    t = t || this.nextId(), f.recurse(e.left, t), f.if_("&&" === e.operator ? t : f.not(t), f.lazyRecurse(e.right, t)), r(t);
                    break;
                case wi.ConditionalExpression:
                    t = t || this.nextId(), f.recurse(e.test, t), f.if_(t, f.lazyRecurse(e.alternate, t), f.lazyRecurse(e.consequent, t)), r(t);
                    break;
                case wi.Identifier:
                    t = t || this.nextId(), n && (n.context = "inputs" === f.stage ? "s" : this.assign(this.nextId(), this.getHasOwnProperty("l", e.name) + "?l:s"), n.computed = !1, n.name = e.name), f.if_("inputs" === f.stage || f.not(f.getHasOwnProperty("l", e.name)), function() {
                        f.if_("inputs" === f.stage || "s", function() {
                            i && 1 !== i && f.if_(f.isNull(f.nonComputedMember("s", e.name)), f.lazyAssign(f.nonComputedMember("s", e.name), "{}")), f.assign(t, f.nonComputedMember("s", e.name))
                        })
                    }, t && f.lazyAssign(t, f.nonComputedMember("l", e.name))), r(t);
                    break;
                case wi.MemberExpression:
                    s = n && (n.context = this.nextId()) || this.nextId(), t = t || this.nextId(), f.recurse(e.object, s, void 0, function() {
                        f.if_(f.notNull(s), function() {
                            e.computed ? (u = f.nextId(), f.recurse(e.property, u), f.getStringValue(u), i && 1 !== i && f.if_(f.not(f.computedMember(s, u)), f.lazyAssign(f.computedMember(s, u), "{}")), l = f.computedMember(s, u), f.assign(t, l), n && (n.computed = !0, n.name = u)) : (i && 1 !== i && f.if_(f.isNull(f.nonComputedMember(s, e.property.name)), f.lazyAssign(f.nonComputedMember(s, e.property.name), "{}")), l = f.nonComputedMember(s, e.property.name), f.assign(t, l), n && (n.computed = !1, n.name = e.property.name))
                        }, function() {
                            f.assign(t, "undefined")
                        }), r(t)
                    }, !!i);
                    break;
                case wi.CallExpression:
                    t = t || this.nextId(), e.filter ? (u = f.filter(e.callee.name), c = [], o(e.arguments, function(e) {
                        var t = f.nextId();
                        f.recurse(e, t), c.push(t)
                    }), l = u + "(" + c.join(",") + ")", f.assign(t, l), r(t)) : (u = f.nextId(), s = {}, c = [], f.recurse(e.callee, u, s, function() {
                        f.if_(f.notNull(u), function() {
                            o(e.arguments, function(t) {
                                f.recurse(t, e.constant ? void 0 : f.nextId(), void 0, function(e) {
                                    c.push(e)
                                })
                            }), l = s.name ? f.member(s.context, s.name, s.computed) + "(" + c.join(",") + ")" : u + "(" + c.join(",") + ")", f.assign(t, l)
                        }, function() {
                            f.assign(t, "undefined")
                        }), r(t)
                    }));
                    break;
                case wi.AssignmentExpression:
                    u = this.nextId(), s = {}, this.recurse(e.left, void 0, s, function() {
                        f.if_(f.notNull(s.context), function() {
                            f.recurse(e.right, u), l = f.member(s.context, s.name, s.computed) + e.operator + u, f.assign(t, l), r(t || l)
                        })
                    }, 1);
                    break;
                case wi.ArrayExpression:
                    c = [], o(e.elements, function(t) {
                        f.recurse(t, e.constant ? void 0 : f.nextId(), void 0, function(e) {
                            c.push(e)
                        })
                    }), l = "[" + c.join(",") + "]", this.assign(t, l), r(t || l);
                    break;
                case wi.ObjectExpression:
                    c = [], d = !1, o(e.properties, function(e) {
                        e.computed && (d = !0)
                    }), d ? (t = t || this.nextId(), this.assign(t, "{}"), o(e.properties, function(e) {
                        e.computed ? (s = f.nextId(), f.recurse(e.key, s)) : s = e.key.type === wi.Identifier ? e.key.name : "" + e.key.value, u = f.nextId(), f.recurse(e.value, u), f.assign(f.member(t, s, e.computed), u)
                    })) : (o(e.properties, function(t) {
                        f.recurse(t.value, e.constant ? void 0 : f.nextId(), void 0, function(e) {
                            c.push(f.escape(t.key.type === wi.Identifier ? t.key.name : "" + t.key.value) + ":" + e)
                        })
                    }), l = "{" + c.join(",") + "}", this.assign(t, l)), r(t || l);
                    break;
                case wi.ThisExpression:
                    this.assign(t, "s"), r(t || "s");
                    break;
                case wi.LocalsExpression:
                    this.assign(t, "l"), r(t || "l");
                    break;
                case wi.NGValueParameter:
                    this.assign(t, "v"), r(t || "v")
            }
        },
        getHasOwnProperty: function(e, t) {
            var n = e + "." + t,
                r = this.current().own;
            return r.hasOwnProperty(n) || (r[n] = this.nextId(!1, e + "&&(" + this.escape(t) + " in " + e + ")")), r[n]
        },
        assign: function(e, t) {
            if (e) return this.current().body.push(e, "=", t, ";"), e
        },
        filter: function(e) {
            return this.state.filters.hasOwnProperty(e) || (this.state.filters[e] = this.nextId(!0)), this.state.filters[e]
        },
        ifDefined: function(e, t) {
            return "ifDefined(" + e + "," + this.escape(t) + ")"
        },
        plus: function(e, t) {
            return "plus(" + e + "," + t + ")"
        },
        return_: function(e) {
            this.current().body.push("return ", e, ";")
        },
        if_: function(e, t, n) {
            if (!0 === e) t();
            else {
                var r = this.current().body;
                r.push("if(", e, "){"), t(), r.push("}"), n && (r.push("else{"), n(), r.push("}"))
            }
        },
        not: function(e) {
            return "!(" + e + ")"
        },
        isNull: function(e) {
            return e + "==null"
        },
        notNull: function(e) {
            return e + "!=null"
        },
        nonComputedMember: function(e, t) {
            return /^[$_a-zA-Z][$_a-zA-Z0-9]*$/.test(t) ? e + "." + t : e + '["' + t.replace(/[^$_a-zA-Z0-9]/g, this.stringEscapeFn) + '"]'
        },
        computedMember: function(e, t) {
            return e + "[" + t + "]"
        },
        member: function(e, t, n) {
            return n ? this.computedMember(e, t) : this.nonComputedMember(e, t)
        },
        getStringValue: function(e) {
            this.assign(e, "getStringValue(" + e + ")")
        },
        lazyRecurse: function(e, t, n, r, i, o) {
            var a = this;
            return function() {
                a.recurse(e, t, n, r, i, o)
            }
        },
        lazyAssign: function(e, t) {
            var n = this;
            return function() {
                n.assign(e, t)
            }
        },
        stringEscapeRegex: /[^ a-zA-Z0-9]/g,
        stringEscapeFn: function(e) {
            return "\\u" + ("0000" + e.charCodeAt(0).toString(16)).slice(-4)
        },
        escape: function(e) {
            if (w(e)) return "'" + e.replace(this.stringEscapeRegex, this.stringEscapeFn) + "'";
            if (A(e)) return e.toString();
            if (!0 === e) return "true";
            if (!1 === e) return "false";
            if (null === e) return "null";
            if (void 0 === e) return "undefined";
            throw mi("esc")
        },
        nextId: function(e, t) {
            var n = "v" + this.state.nextId++;
            return e || this.current().vars.push(n + (t ? "=" + t : "")), n
        },
        current: function() {
            return this.state[this.state.computing]
        }
    }, Ft.prototype = {
        compile: function(e) {
            var t, n, r, i = this;
            Et(e, i.$filter), (t = Ot(e)) && (n = this.recurse(t)), (t = _t(e.body)) && (r = [], o(t, function(e, t) {
                var n = i.recurse(e);
                n.isPure = e.isPure, e.input = n, r.push(n), e.watchId = t
            }));
            var a = [];
            return o(e.body, function(e) {
                a.push(i.recurse(e.expression))
            }), e = 0 === e.body.length ? p : 1 === e.body.length ? a[0] : function(e, t) {
                var n;
                return o(a, function(r) {
                    n = r(e, t)
                }), n
            }, n && (e.assign = function(e, t, r) {
                return n(e, r, t)
            }), r && (e.inputs = r), e
        },
        recurse: function(e, t, n) {
            var r, i, a, s = this;
            if (e.input) return this.inputs(e.input, e.watchId);
            switch (e.type) {
                case wi.Literal:
                    return this.value(e.value, t);
                case wi.UnaryExpression:
                    return i = this.recurse(e.argument), this["unary" + e.operator](i, t);
                case wi.BinaryExpression:
                case wi.LogicalExpression:
                    return r = this.recurse(e.left), i = this.recurse(e.right), this["binary" + e.operator](r, i, t);
                case wi.ConditionalExpression:
                    return this["ternary?:"](this.recurse(e.test), this.recurse(e.alternate), this.recurse(e.consequent), t);
                case wi.Identifier:
                    return s.identifier(e.name, t, n);
                case wi.MemberExpression:
                    return r = this.recurse(e.object, !1, !!n), e.computed || (i = e.property.name), e.computed && (i = this.recurse(e.property)), e.computed ? this.computedMember(r, i, t, n) : this.nonComputedMember(r, i, t, n);
                case wi.CallExpression:
                    return a = [], o(e.arguments, function(e) {
                        a.push(s.recurse(e))
                    }), e.filter && (i = this.$filter(e.callee.name)), e.filter || (i = this.recurse(e.callee, !0)), e.filter ? function(e, n, r, o) {
                        for (var s = [], u = 0; u < a.length; ++u) s.push(a[u](e, n, r, o));
                        return e = i.apply(void 0, s, o), t ? {
                            context: void 0,
                            name: void 0,
                            value: e
                        } : e
                    } : function(e, n, r, o) {
                        var s, u = i(e, n, r, o);
                        if (null != u.value) {
                            s = [];
                            for (var c = 0; c < a.length; ++c) s.push(a[c](e, n, r, o));
                            s = u.value.apply(u.context, s)
                        }
                        return t ? {
                            value: s
                        } : s
                    };
                case wi.AssignmentExpression:
                    return r = this.recurse(e.left, !0, 1), i = this.recurse(e.right),
                        function(e, n, o, a) {
                            var s = r(e, n, o, a);
                            return e = i(e, n, o, a), s.context[s.name] = e, t ? {
                                value: e
                            } : e
                        };
                case wi.ArrayExpression:
                    return a = [], o(e.elements, function(e) {
                            a.push(s.recurse(e))
                        }),
                        function(e, n, r, i) {
                            for (var o = [], s = 0; s < a.length; ++s) o.push(a[s](e, n, r, i));
                            return t ? {
                                value: o
                            } : o
                        };
                case wi.ObjectExpression:
                    return a = [], o(e.properties, function(e) {
                            e.computed ? a.push({
                                key: s.recurse(e.key),
                                computed: !0,
                                value: s.recurse(e.value)
                            }) : a.push({
                                key: e.key.type === wi.Identifier ? e.key.name : "" + e.key.value,
                                computed: !1,
                                value: s.recurse(e.value)
                            })
                        }),
                        function(e, n, r, i) {
                            for (var o = {}, s = 0; s < a.length; ++s) a[s].computed ? o[a[s].key(e, n, r, i)] = a[s].value(e, n, r, i) : o[a[s].key] = a[s].value(e, n, r, i);
                            return t ? {
                                value: o
                            } : o
                        };
                case wi.ThisExpression:
                    return function(e) {
                        return t ? {
                            value: e
                        } : e
                    };
                case wi.LocalsExpression:
                    return function(e, n) {
                        return t ? {
                            value: n
                        } : n
                    };
                case wi.NGValueParameter:
                    return function(e, n, r) {
                        return t ? {
                            value: r
                        } : r
                    }
            }
        },
        "unary+": function(e, t) {
            return function(n, r, i, o) {
                return n = v(n = e(n, r, i, o)) ? +n : 0, t ? {
                    value: n
                } : n
            }
        },
        "unary-": function(e, t) {
            return function(n, r, i, o) {
                return n = v(n = e(n, r, i, o)) ? -n : -0, t ? {
                    value: n
                } : n
            }
        },
        "unary!": function(e, t) {
            return function(n, r, i, o) {
                return n = !e(n, r, i, o), t ? {
                    value: n
                } : n
            }
        },
        "binary+": function(e, t, n) {
            return function(r, i, o, a) {
                var s = e(r, i, o, a);
                return s = kt(s, r = t(r, i, o, a)), n ? {
                    value: s
                } : s
            }
        },
        "binary-": function(e, t, n) {
            return function(r, i, o, a) {
                var s = e(r, i, o, a);
                return r = t(r, i, o, a), s = (v(s) ? s : 0) - (v(r) ? r : 0), n ? {
                    value: s
                } : s
            }
        },
        "binary*": function(e, t, n) {
            return function(r, i, o, a) {
                return r = e(r, i, o, a) * t(r, i, o, a), n ? {
                    value: r
                } : r
            }
        },
        "binary/": function(e, t, n) {
            return function(r, i, o, a) {
                return r = e(r, i, o, a) / t(r, i, o, a), n ? {
                    value: r
                } : r
            }
        },
        "binary%": function(e, t, n) {
            return function(r, i, o, a) {
                return r = e(r, i, o, a) % t(r, i, o, a), n ? {
                    value: r
                } : r
            }
        },
        "binary===": function(e, t, n) {
            return function(r, i, o, a) {
                return r = e(r, i, o, a) === t(r, i, o, a), n ? {
                    value: r
                } : r
            }
        },
        "binary!==": function(e, t, n) {
            return function(r, i, o, a) {
                return r = e(r, i, o, a) !== t(r, i, o, a), n ? {
                    value: r
                } : r
            }
        },
        "binary==": function(e, t, n) {
            return function(r, i, o, a) {
                return r = e(r, i, o, a) == t(r, i, o, a), n ? {
                    value: r
                } : r
            }
        },
        "binary!=": function(e, t, n) {
            return function(r, i, o, a) {
                return r = e(r, i, o, a) != t(r, i, o, a), n ? {
                    value: r
                } : r
            }
        },
        "binary<": function(e, t, n) {
            return function(r, i, o, a) {
                return r = e(r, i, o, a) < t(r, i, o, a), n ? {
                    value: r
                } : r
            }
        },
        "binary>": function(e, t, n) {
            return function(r, i, o, a) {
                return r = e(r, i, o, a) > t(r, i, o, a), n ? {
                    value: r
                } : r
            }
        },
        "binary<=": function(e, t, n) {
            return function(r, i, o, a) {
                return r = e(r, i, o, a) <= t(r, i, o, a), n ? {
                    value: r
                } : r
            }
        },
        "binary>=": function(e, t, n) {
            return function(r, i, o, a) {
                return r = e(r, i, o, a) >= t(r, i, o, a), n ? {
                    value: r
                } : r
            }
        },
        "binary&&": function(e, t, n) {
            return function(r, i, o, a) {
                return r = e(r, i, o, a) && t(r, i, o, a), n ? {
                    value: r
                } : r
            }
        },
        "binary||": function(e, t, n) {
            return function(r, i, o, a) {
                return r = e(r, i, o, a) || t(r, i, o, a), n ? {
                    value: r
                } : r
            }
        },
        "ternary?:": function(e, t, n, r) {
            return function(i, o, a, s) {
                return i = e(i, o, a, s) ? t(i, o, a, s) : n(i, o, a, s), r ? {
                    value: i
                } : i
            }
        },
        value: function(e, t) {
            return function() {
                return t ? {
                    context: void 0,
                    name: void 0,
                    value: e
                } : e
            }
        },
        identifier: function(e, t, n) {
            return function(r, i, o, a) {
                return r = i && e in i ? i : r, n && 1 !== n && r && null == r[e] && (r[e] = {}), i = r ? r[e] : void 0, t ? {
                    context: r,
                    name: e,
                    value: i
                } : i
            }
        },
        computedMember: function(e, t, n, r) {
            return function(i, o, a, s) {
                var u, c, l = e(i, o, a, s);
                return null != l && (u = t(i, o, a, s), u += "", r && 1 !== r && l && !l[u] && (l[u] = {}), c = l[u]), n ? {
                    context: l,
                    name: u,
                    value: c
                } : c
            }
        },
        nonComputedMember: function(e, t, n, r) {
            return function(i, o, a, s) {
                return i = e(i, o, a, s), r && 1 !== r && i && null == i[t] && (i[t] = {}), o = null != i ? i[t] : void 0, n ? {
                    context: i,
                    name: t,
                    value: o
                } : o
            }
        },
        inputs: function(e, t) {
            return function(n, r, i, o) {
                return o ? o[t] : e(n, r, i)
            }
        }
    }, Ut.prototype = {
        constructor: Ut,
        parse: function(e) {
            e = this.getAst(e);
            var t = this.astCompiler.compile(e.ast),
                n = e.ast;
            return t.literal = 0 === n.body.length || 1 === n.body.length && (n.body[0].expression.type === wi.Literal || n.body[0].expression.type === wi.ArrayExpression || n.body[0].expression.type === wi.ObjectExpression), t.constant = e.ast.constant, t.oneTime = e.oneTime, t
        },
        getAst: function(e) {
            var t = !1;
            return ":" === (e = e.trim()).charAt(0) && ":" === e.charAt(1) && (t = !0, e = e.substring(2)), {
                ast: this.ast.ast(e),
                oneTime: t
            }
        }
    };
    var xi = r("$sce"),
        Ci = {
            HTML: "html",
            CSS: "css",
            URL: "url",
            RESOURCE_URL: "resourceUrl",
            JS: "js"
        },
        Si = /_([a-z])/g,
        ki = r("$compile"),
        Ei = e.document.createElement("a"),
        _i = Jt(e.location.href);
    Yt.$inject = ["$document"], en.$inject = ["$provide"];
    var Di = 22,
        Oi = ".",
        Mi = "0";
    on.$inject = ["$locale"], an.$inject = ["$locale"];
    var Fi = {
            yyyy: cn("FullYear", 4, 0, !1, !0),
            yy: cn("FullYear", 2, 0, !0, !0),
            y: cn("FullYear", 1, 0, !1, !0),
            MMMM: ln("Month"),
            MMM: ln("Month", !0),
            MM: cn("Month", 2, 1),
            M: cn("Month", 1, 1),
            LLLL: ln("Month", !1, !0),
            dd: cn("Date", 2),
            d: cn("Date", 1),
            HH: cn("Hours", 2),
            H: cn("Hours", 1),
            hh: cn("Hours", 2, -12),
            h: cn("Hours", 1, -12),
            mm: cn("Minutes", 2),
            m: cn("Minutes", 1),
            ss: cn("Seconds", 2),
            s: cn("Seconds", 1),
            sss: cn("Milliseconds", 3),
            EEEE: ln("Day"),
            EEE: ln("Day", !0),
            a: function(e, t) {
                return 12 > e.getHours() ? t.AMPMS[0] : t.AMPMS[1]
            },
            Z: function(e, t, n) {
                return (0 <= (e = -1 * n) ? "+" : "") + (un(Math[0 < e ? "floor" : "ceil"](e / 60), 2) + un(Math.abs(e % 60), 2))
            },
            ww: fn(2),
            w: fn(1),
            G: pn,
            GG: pn,
            GGG: pn,
            GGGG: function(e, t) {
                return 0 >= e.getFullYear() ? t.ERANAMES[0] : t.ERANAMES[1]
            }
        },
        Ui = /((?:[^yMLdHhmsaZEwG']+)|(?:'(?:[^']|'')*')|(?:E+|y+|M+|L+|d+|H+|h+|m+|s+|a|Z|G+|w+))([\s\S]*)/,
        Vi = /^-?\d+$/;
    hn.$inject = ["$locale"];
    var Pi = g(Gn),
        Ti = g(Wn);
    vn.$inject = ["$parse"];
    var Ii = g({
            restrict: "E",
            compile: function(e, t) {
                if (!t.href && !t.xlinkHref) return function(e, t) {
                    if ("a" === t[0].nodeName.toLowerCase()) {
                        var n = "[object SVGAnimatedString]" === Qn.call(t.prop("href")) ? "xlink:href" : "href";
                        t.on("click", function(e) {
                            t.attr(n) || e.preventDefault()
                        })
                    }
                }
            }
        }),
        Bi = {};
    o(Mr, function(e, t) {
        function n(e, n, i) {
            e.$watch(i[r], function(e) {
                i.$set(t, !!e)
            })
        }
        if ("multiple" !== e) {
            var r = He("ng-" + t),
                i = n;
            "checked" === e && (i = function(e, t, i) {
                i.ngModel !== i[r] && n(e, 0, i)
            }), Bi[r] = function() {
                return {
                    restrict: "A",
                    priority: 100,
                    link: i
                }
            }
        }
    }), o(Ur, function(e, t) {
        Bi[t] = function() {
            return {
                priority: 100,
                link: function(e, n, r) {
                    "ngPattern" === t && "/" === r.ngPattern.charAt(0) && (n = r.ngPattern.match(Ln)) ? r.$set("ngPattern", new RegExp(n[1], n[2])) : e.$watch(r[t], function(e) {
                        r.$set(t, e)
                    })
                }
            }
        }
    }), o(["src", "srcset", "href"], function(e) {
        var t = He("ng-" + e);
        Bi[t] = function() {
            return {
                priority: 99,
                link: function(n, r, i) {
                    var o = e,
                        a = e;
                    "href" === e && "[object SVGAnimatedString]" === Qn.call(r.prop("href")) && (a = "xlinkHref", i.$attr[a] = "xlink:href", o = null), i.$observe(t, function(t) {
                        t ? (i.$set(a, t), Nn && o && r.prop(o, i[a])) : "href" === e && i.$set(a, null)
                    })
                }
            }
        }
    });
    var Ni = {
        $addControl: p,
        $$renameControl: function(e, t) {
            e.$name = t
        },
        $removeControl: p,
        $setValidity: p,
        $setDirty: p,
        $setPristine: p,
        $setSubmitted: p
    };
    bn.$inject = ["$element", "$attrs", "$scope", "$animate", "$interpolate"], bn.prototype = {
        $rollbackViewValue: function() {
            o(this.$$controls, function(e) {
                e.$rollbackViewValue()
            })
        },
        $commitViewValue: function() {
            o(this.$$controls, function(e) {
                e.$commitViewValue()
            })
        },
        $addControl: function(e) {
            ne(e.$name, "input"), this.$$controls.push(e), e.$name && (this[e.$name] = e), e.$$parentForm = this
        },
        $$renameControl: function(e, t) {
            var n = e.$name;
            this[n] === e && delete this[n], this[t] = e, e.$name = t
        },
        $removeControl: function(e) {
            e.$name && this[e.$name] === e && delete this[e.$name], o(this.$pending, function(t, n) {
                this.$setValidity(n, null, e)
            }, this), o(this.$error, function(t, n) {
                this.$setValidity(n, null, e)
            }, this), o(this.$$success, function(t, n) {
                this.$setValidity(n, null, e)
            }, this), F(this.$$controls, e), e.$$parentForm = Ni
        },
        $setDirty: function() {
            this.$$animate.removeClass(this.$$element, Ao), this.$$animate.addClass(this.$$element, xo), this.$dirty = !0, this.$pristine = !1, this.$$parentForm.$setDirty()
        },
        $setPristine: function() {
            this.$$animate.setClass(this.$$element, Ao, xo + " ng-submitted"), this.$dirty = !1, this.$pristine = !0, this.$submitted = !1, o(this.$$controls, function(e) {
                e.$setPristine()
            })
        },
        $setUntouched: function() {
            o(this.$$controls, function(e) {
                e.$setUntouched()
            })
        },
        $setSubmitted: function() {
            this.$$animate.addClass(this.$$element, "ng-submitted"), this.$submitted = !0, this.$$parentForm.$setSubmitted()
        }
    }, An({
        clazz: bn,
        set: function(e, t, n) {
            var r = e[t];
            r ? -1 === r.indexOf(n) && r.push(n) : e[t] = [n]
        },
        unset: function(e, t, n) {
            var r = e[t];
            r && (F(r, n), 0 === r.length && delete e[t])
        }
    });
    var Ri = function(e) {
            return ["$timeout", "$parse", function(t, n) {
                function r(e) {
                    return "" === e ? n('this[""]').assign : n(e).assign || p
                }
                return {
                    name: "form",
                    restrict: e ? "EAC" : "E",
                    require: ["form", "^^?form"],
                    controller: bn,
                    compile: function(n, i) {
                        n.addClass(Ao).addClass(bo);
                        var o = i.name ? "name" : !(!e || !i.ngForm) && "ngForm";
                        return {
                            pre: function(e, n, i, a) {
                                var s = a[0];
                                if (!("action" in i)) {
                                    var u = function(t) {
                                        e.$apply(function() {
                                            s.$commitViewValue(), s.$setSubmitted()
                                        }), t.preventDefault()
                                    };
                                    n[0].addEventListener("submit", u), n.on("$destroy", function() {
                                        t(function() {
                                            n[0].removeEventListener("submit", u)
                                        }, 0, !1)
                                    })
                                }(a[1] || s.$$parentForm).$addControl(s);
                                var l = o ? r(s.$name) : p;
                                o && (l(e, s), i.$observe(o, function(t) {
                                    s.$name !== t && (l(e, void 0), s.$$parentForm.$$renameControl(s, t), (l = r(s.$name))(e, s))
                                })), n.on("$destroy", function() {
                                    s.$$parentForm.$removeControl(s), l(e, void 0), c(s, Ni)
                                })
                            }
                        }
                    }
                }
            }]
        },
        ji = Ri(),
        qi = Ri(!0),
        zi = /^\d{4,}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+(?:[+-][0-2]\d:[0-5]\d|Z)$/,
        Li = /^[a-z][a-z\d.+-]*:\/*(?:[^:@]+(?::[^@]+)?@)?(?:[^\s:/?#]+|\[[a-f\d:]+])(?::\d+)?(?:\/[^?#]*)?(?:\?[^#]*)?(?:#.*)?$/i,
        Hi = /^(?=.{1,254}$)(?=.{1,64}@)[-!#$%&'*+/0-9=?A-Z^_`a-z{|}~]+(\.[-!#$%&'*+/0-9=?A-Z^_`a-z{|}~]+)*@[A-Za-z0-9]([A-Za-z0-9-]{0,61}[A-Za-z0-9])?(\.[A-Za-z0-9]([A-Za-z0-9-]{0,61}[A-Za-z0-9])?)*$/,
        Gi = /^\s*(-|\+)?(\d+|(\d*(\.\d*)))([eE][+-]?\d+)?\s*$/,
        Wi = /^(\d{4,})-(\d{2})-(\d{2})$/,
        Ki = /^(\d{4,})-(\d\d)-(\d\d)T(\d\d):(\d\d)(?::(\d\d)(\.\d{1,3})?)?$/,
        Ji = /^(\d{4,})-W(\d\d)$/,
        Zi = /^(\d{4,})-(\d\d)$/,
        Qi = /^(\d\d):(\d\d)(?::(\d\d)(\.\d{1,3})?)?$/,
        Yi = oe();
    o(["date", "datetime-local", "month", "time", "week"], function(e) {
        Yi[e] = !0
    });
    var Xi = {
            text: function(e, t, n, r, i, o) {
                Sn(0, t, n, r, i, o), Cn(r)
            },
            date: En("date", Wi, kn(Wi, ["yyyy", "MM", "dd"]), "yyyy-MM-dd"),
            "datetime-local": En("datetimelocal", Ki, kn(Ki, "yyyy MM dd HH mm ss sss".split(" ")), "yyyy-MM-ddTHH:mm:ss.sss"),
            time: En("time", Qi, kn(Qi, ["HH", "mm", "ss", "sss"]), "HH:mm:ss.sss"),
            week: En("week", Ji, function(e, t) {
                if (x(e)) return e;
                if (w(e)) {
                    Ji.lastIndex = 0;
                    var n = Ji.exec(e);
                    if (n) {
                        var r = +n[1],
                            i = +n[2],
                            o = n = 0,
                            a = 0,
                            s = 0,
                            u = dn(r);
                        i = 7 * (i - 1);
                        return t && (n = t.getHours(), o = t.getMinutes(), a = t.getSeconds(), s = t.getMilliseconds()), new Date(r, 0, u.getDate() + i, n, o, a, s)
                    }
                }
                return NaN
            }, "yyyy-Www"),
            month: En("month", Zi, kn(Zi, ["yyyy", "MM"]), "yyyy-MM"),
            number: function(e, t, n, r, i, o) {
                var a, s, u;
                (_n(0, t, 0, r), Dn(r), Sn(0, t, n, r, i, o), (v(n.min) || n.ngMin) && (r.$validators.min = function(e) {
                    return r.$isEmpty(e) || $(a) || e >= a
                }, n.$observe("min", function(e) {
                    a = On(e), r.$validate()
                })), (v(n.max) || n.ngMax) && (r.$validators.max = function(e) {
                    return r.$isEmpty(e) || $(s) || e <= s
                }, n.$observe("max", function(e) {
                    s = On(e), r.$validate()
                })), v(n.step) || n.ngStep) && (r.$validators.step = function(e, t) {
                    return r.$isEmpty(t) || $(u) || Fn(t, a || 0, u)
                }, n.$observe("step", function(e) {
                    u = On(e), r.$validate()
                }))
            },
            url: function(e, t, n, r, i, o) {
                Sn(0, t, n, r, i, o), Cn(r), r.$$parserName = "url", r.$validators.url = function(e, t) {
                    var n = e || t;
                    return r.$isEmpty(n) || Li.test(n)
                }
            },
            email: function(e, t, n, r, i, o) {
                Sn(0, t, n, r, i, o), Cn(r), r.$$parserName = "email", r.$validators.email = function(e, t) {
                    var n = e || t;
                    return r.$isEmpty(n) || Hi.test(n)
                }
            },
            radio: function(e, t, n, r) {
                var i = !n.ngTrim || "false" !== sr(n.ngTrim);
                $(n.name) && t.attr("name", ++tr), t.on("click", function(e) {
                    var o;
                    t[0].checked && (o = n.value, i && (o = sr(o)), r.$setViewValue(o, e && e.type))
                }), r.$render = function() {
                    var e = n.value;
                    i && (e = sr(e)), t[0].checked = e === r.$viewValue
                }, n.$observe("value", r.$render)
            },
            range: function(e, t, n, r, i, o) {
                function a(e, r) {
                    t.attr(e, n[e]), n.$observe(e, r)
                }
                _n(0, t, 0, r), Dn(r), Sn(0, t, n, r, i, o);
                var s = r.$$hasNativeValidators && "range" === t[0].type,
                    u = s ? 0 : void 0,
                    c = s ? 100 : void 0,
                    l = s ? 1 : void 0,
                    d = t[0].validity;
                e = v(n.min), i = v(n.max), o = v(n.step);
                var f = r.$render;
                r.$render = s && v(d.rangeUnderflow) && v(d.rangeOverflow) ? function() {
                    f(), r.$setViewValue(t.val())
                } : f, e && (r.$validators.min = s ? function() {
                    return !0
                } : function(e, t) {
                    return r.$isEmpty(t) || $(u) || t >= u
                }, a("min", function(e) {
                    u = On(e), nr(r.$modelValue) || (s ? (e = t.val(), u > e && (e = u, t.val(e)), r.$setViewValue(e)) : r.$validate())
                })), i && (r.$validators.max = s ? function() {
                    return !0
                } : function(e, t) {
                    return r.$isEmpty(t) || $(c) || t <= c
                }, a("max", function(e) {
                    c = On(e), nr(r.$modelValue) || (s ? (e = t.val(), c < e && (t.val(c), e = c < u ? u : c), r.$setViewValue(e)) : r.$validate())
                })), o && (r.$validators.step = s ? function() {
                    return !d.stepMismatch
                } : function(e, t) {
                    return r.$isEmpty(t) || $(l) || Fn(t, u || 0, l)
                }, a("step", function(e) {
                    l = On(e), nr(r.$modelValue) || (s && r.$viewValue !== t.val() ? r.$setViewValue(t.val()) : r.$validate())
                }))
            },
            checkbox: function(e, t, n, r, i, o, a, s) {
                var u = Un(s, e, "ngTrueValue", n.ngTrueValue, !0),
                    c = Un(s, e, "ngFalseValue", n.ngFalseValue, !1);
                t.on("click", function(e) {
                    r.$setViewValue(t[0].checked, e && e.type)
                }), r.$render = function() {
                    t[0].checked = r.$viewValue
                }, r.$isEmpty = function(e) {
                    return !1 === e
                }, r.$formatters.push(function(e) {
                    return P(e, u)
                }), r.$parsers.push(function(e) {
                    return e ? u : c
                })
            },
            hidden: p,
            button: p,
            submit: p,
            reset: p,
            file: p
        },
        eo = ["$browser", "$sniffer", "$filter", "$parse", function(e, t, n, r) {
            return {
                restrict: "E",
                require: ["?ngModel"],
                link: {
                    pre: function(i, o, a, s) {
                        s[0] && (Xi[Gn(a.type)] || Xi.text)(i, o, a, s[0], t, e, n, r)
                    }
                }
            }
        }],
        to = /^(true|false|\d+)$/,
        no = function() {
            function e(e, t, n) {
                var r = v(n) ? n : 9 === Nn ? "" : null;
                e.prop("value", r), t.$set("value", n)
            }
            return {
                restrict: "A",
                priority: 100,
                compile: function(t, n) {
                    return to.test(n.ngValue) ? function(t, n, r) {
                        e(n, r, t = t.$eval(r.ngValue))
                    } : function(t, n, r) {
                        t.$watch(r.ngValue, function(t) {
                            e(n, r, t)
                        })
                    }
                }
            }
        },
        ro = ["$compile", function(e) {
            return {
                restrict: "AC",
                compile: function(t) {
                    return e.$$addBindingClass(t),
                        function(t, n, r) {
                            e.$$addBindingInfo(n, r.ngBind), n = n[0], t.$watch(r.ngBind, function(e) {
                                n.textContent = ae(e)
                            })
                        }
                }
            }
        }],
        io = ["$interpolate", "$compile", function(e, t) {
            return {
                compile: function(n) {
                    return t.$$addBindingClass(n),
                        function(n, r, i) {
                            n = e(r.attr(i.$attr.ngBindTemplate)), t.$$addBindingInfo(r, n.expressions), r = r[0], i.$observe("ngBindTemplate", function(e) {
                                r.textContent = $(e) ? "" : e
                            })
                        }
                }
            }
        }],
        oo = ["$sce", "$parse", "$compile", function(e, t, n) {
            return {
                restrict: "A",
                compile: function(r, i) {
                    var o = t(i.ngBindHtml),
                        a = t(i.ngBindHtml, function(t) {
                            return e.valueOf(t)
                        });
                    return n.$$addBindingClass(r),
                        function(t, r, i) {
                            n.$$addBindingInfo(r, i.ngBindHtml), t.$watch(a, function() {
                                var n = o(t);
                                r.html(e.getTrustedHtml(n) || "")
                            })
                        }
                }
            }
        }],
        ao = g({
            restrict: "A",
            require: "ngModel",
            link: function(e, t, n, r) {
                r.$viewChangeListeners.push(function() {
                    e.$eval(n.ngChange)
                })
            }
        }),
        so = Vn("", !0),
        uo = Vn("Odd", 0),
        co = Vn("Even", 1),
        lo = yn({
            compile: function(e, t) {
                t.$set("ngCloak", void 0), e.removeClass("ng-cloak")
            }
        }),
        fo = [function() {
            return {
                restrict: "A",
                scope: !0,
                controller: "@",
                priority: 500
            }
        }],
        po = {},
        ho = {
            blur: !0,
            focus: !0
        };
    o("click dblclick mousedown mouseup mouseover mouseout mousemove mouseenter mouseleave keydown keyup keypress submit focus blur copy cut paste".split(" "), function(e) {
        var t = He("ng-" + e);
        po[t] = ["$parse", "$rootScope", function(n, r) {
            return {
                restrict: "A",
                compile: function(i, o) {
                    var a = n(o[t]);
                    return function(t, n) {
                        n.on(e, function(n) {
                            var i = function() {
                                a(t, {
                                    $event: n
                                })
                            };
                            ho[e] && r.$$phase ? t.$evalAsync(i) : t.$apply(i)
                        })
                    }
                }
            }
        }]
    });
    var go = ["$animate", "$compile", function(e, t) {
            return {
                multiElement: !0,
                transclude: "element",
                priority: 600,
                terminal: !0,
                restrict: "A",
                $$tlb: !0,
                link: function(n, r, i, o, a) {
                    var s, u, c;
                    n.$watch(i.ngIf, function(n) {
                        n ? u || a(function(n, o) {
                            u = o, n[n.length++] = t.$$createComment("end ngIf", i.ngIf), s = {
                                clone: n
                            }, e.enter(n, r.parent(), r)
                        }) : (c && (c.remove(), c = null), u && (u.$destroy(), u = null), s && (c = ie(s.clone), e.leave(c).done(function(e) {
                            !1 !== e && (c = null)
                        }), s = null))
                    })
                }
            }
        }],
        mo = ["$templateRequest", "$anchorScroll", "$animate", function(e, t, n) {
            return {
                restrict: "ECA",
                priority: 400,
                terminal: !0,
                transclude: "element",
                controller: er.noop,
                compile: function(r, i) {
                    var o = i.ngInclude || i.src,
                        a = i.onload || "",
                        s = i.autoscroll;
                    return function(r, i, u, c, l) {
                        var d, f, p, h = 0,
                            g = function() {
                                f && (f.remove(), f = null), d && (d.$destroy(), d = null), p && (n.leave(p).done(function(e) {
                                    !1 !== e && (f = null)
                                }), f = p, p = null)
                            };
                        r.$watch(o, function(o) {
                            var u = function(e) {
                                    !1 === e || !v(s) || s && !r.$eval(s) || t()
                                },
                                f = ++h;
                            o ? (e(o, !0).then(function(e) {
                                if (!r.$$destroyed && f === h) {
                                    var t = r.$new();
                                    c.template = e, e = l(t, function(e) {
                                        g(), n.enter(e, null, i).done(u)
                                    }), p = e, (d = t).$emit("$includeContentLoaded", o), r.$eval(a)
                                }
                            }, function() {
                                r.$$destroyed || f !== h || (g(), r.$emit("$includeContentError", o))
                            }), r.$emit("$includeContentRequested", o)) : (g(), c.template = null)
                        })
                    }
                }
            }
        }],
        $o = ["$compile", function(t) {
            return {
                restrict: "ECA",
                priority: -400,
                require: "ngInclude",
                link: function(n, r, i, o) {
                    Qn.call(r[0]).match(/SVG/) ? (r.empty(), t(fe(o.template, e.document).childNodes)(n, function(e) {
                        r.append(e)
                    }, {
                        futureParentElement: r
                    })) : (r.html(o.template), t(r.contents())(n))
                }
            }
        }],
        vo = yn({
            priority: 450,
            compile: function() {
                return {
                    pre: function(e, t, n) {
                        e.$eval(n.ngInit)
                    }
                }
            }
        }),
        yo = function() {
            return {
                restrict: "A",
                priority: 100,
                require: "ngModel",
                link: function(e, t, n, r) {
                    var i = n.ngList || ", ",
                        a = "false" !== n.ngTrim,
                        s = a ? sr(i) : i;
                    r.$parsers.push(function(e) {
                        if (!$(e)) {
                            var t = [];
                            return e && o(e.split(s), function(e) {
                                e && t.push(a ? sr(e) : e)
                            }), t
                        }
                    }), r.$formatters.push(function(e) {
                        if (or(e)) return e.join(i)
                    }), r.$isEmpty = function(e) {
                        return !e || !e.length
                    }
                }
            }
        },
        bo = "ng-valid",
        wo = "ng-invalid",
        Ao = "ng-pristine",
        xo = "ng-dirty",
        Co = r("ngModel");
    Pn.$inject = "$scope $exceptionHandler $attrs $element $parse $animate $timeout $q $interpolate".split(" "), Pn.prototype = {
        $$initGetterSetters: function() {
            if (this.$options.getOption("getterSetter")) {
                var e = this.$$parse(this.$$attr.ngModel + "()"),
                    t = this.$$parse(this.$$attr.ngModel + "($$$p)");
                this.$$ngModelGet = function(t) {
                    var n = this.$$parsedNgModel(t);
                    return S(n) && (n = e(t)), n
                }, this.$$ngModelSet = function(e, n) {
                    S(this.$$parsedNgModel(e)) ? t(e, {
                        $$$p: n
                    }) : this.$$parsedNgModelAssign(e, n)
                }
            } else if (!this.$$parsedNgModel.assign) throw Co("nonassign", this.$$attr.ngModel, z(this.$$element))
        },
        $render: p,
        $isEmpty: function(e) {
            return $(e) || "" === e || null === e || e != e
        },
        $$updateEmptyClasses: function(e) {
            this.$isEmpty(e) ? (this.$$animate.removeClass(this.$$element, "ng-not-empty"), this.$$animate.addClass(this.$$element, "ng-empty")) : (this.$$animate.removeClass(this.$$element, "ng-empty"), this.$$animate.addClass(this.$$element, "ng-not-empty"))
        },
        $setPristine: function() {
            this.$dirty = !1, this.$pristine = !0, this.$$animate.removeClass(this.$$element, xo), this.$$animate.addClass(this.$$element, Ao)
        },
        $setDirty: function() {
            this.$dirty = !0, this.$pristine = !1, this.$$animate.removeClass(this.$$element, Ao), this.$$animate.addClass(this.$$element, xo), this.$$parentForm.$setDirty()
        },
        $setUntouched: function() {
            this.$touched = !1, this.$untouched = !0, this.$$animate.setClass(this.$$element, "ng-untouched", "ng-touched")
        },
        $setTouched: function() {
            this.$touched = !0, this.$untouched = !1, this.$$animate.setClass(this.$$element, "ng-touched", "ng-untouched")
        },
        $rollbackViewValue: function() {
            this.$$timeout.cancel(this.$$pendingDebounce), this.$viewValue = this.$$lastCommittedViewValue, this.$render()
        },
        $validate: function() {
            if (!nr(this.$modelValue)) {
                var e = this.$$lastCommittedViewValue,
                    t = this.$$rawModelValue,
                    n = this.$valid,
                    r = this.$modelValue,
                    i = this.$options.getOption("allowInvalid"),
                    o = this;
                this.$$runValidators(t, e, function(e) {
                    i || n === e || (o.$modelValue = e ? t : void 0, o.$modelValue !== r && o.$$writeModelToScope())
                })
            }
        },
        $$runValidators: function(e, t, n) {
            function r(e, t) {
                l === d.$$currentValidationRunId && d.$setValidity(e, t)
            }

            function i(e) {
                l === d.$$currentValidationRunId && n(e)
            }
            this.$$currentValidationRunId++;
            var a, s, u, c, l = this.$$currentValidationRunId,
                d = this;
            c = d.$$parserName || "parse", ($(d.$$parserValid) ? (r(c, null), 1) : (d.$$parserValid || (o(d.$validators, function(e, t) {
                r(t, null)
            }), o(d.$asyncValidators, function(e, t) {
                r(t, null)
            })), r(c, d.$$parserValid), d.$$parserValid)) ? (u = !0, o(d.$validators, function(n, i) {
                var o = Boolean(n(e, t));
                u = u && o, r(i, o)
            }), u || (o(d.$asyncValidators, function(e, t) {
                r(t, null)
            }), 0) ? (a = [], s = !0, o(d.$asyncValidators, function(n, i) {
                var o = n(e, t);
                if (!o || !S(o.then)) throw Co("nopromise", o);
                r(i, void 0), a.push(o.then(function() {
                    r(i, !0)
                }, function() {
                    s = !1, r(i, !1)
                }))
            }), a.length ? d.$$q.all(a).then(function() {
                i(s)
            }, p) : i(!0)) : i(!1)) : i(!1)
        },
        $commitViewValue: function() {
            var e = this.$viewValue;
            this.$$timeout.cancel(this.$$pendingDebounce), (this.$$lastCommittedViewValue !== e || "" === e && this.$$hasNativeValidators) && (this.$$updateEmptyClasses(e), this.$$lastCommittedViewValue = e, this.$pristine && this.$setDirty(), this.$$parseAndValidate())
        },
        $$parseAndValidate: function() {
            var e = this.$$lastCommittedViewValue,
                t = this;
            if (this.$$parserValid = !$(e) || void 0)
                for (var n = 0; n < this.$parsers.length; n++)
                    if ($(e = this.$parsers[n](e))) {
                        this.$$parserValid = !1;
                        break
                    }
            nr(this.$modelValue) && (this.$modelValue = this.$$ngModelGet(this.$$scope));
            var r = this.$modelValue,
                i = this.$options.getOption("allowInvalid");
            this.$$rawModelValue = e, i && (this.$modelValue = e, t.$modelValue !== r && t.$$writeModelToScope()), this.$$runValidators(e, this.$$lastCommittedViewValue, function(n) {
                i || (t.$modelValue = n ? e : void 0, t.$modelValue !== r && t.$$writeModelToScope())
            })
        },
        $$writeModelToScope: function() {
            this.$$ngModelSet(this.$$scope, this.$modelValue), o(this.$viewChangeListeners, function(e) {
                try {
                    e()
                } catch (e) {
                    this.$$exceptionHandler(e)
                }
            }, this)
        },
        $setViewValue: function(e, t) {
            this.$viewValue = e, this.$options.getOption("updateOnDefault") && this.$$debounceViewValueCommit(t)
        },
        $$debounceViewValueCommit: function(e) {
            var t = this.$options.getOption("debounce");
            A(t[e]) ? t = t[e] : A(t.default) && (t = t.default), this.$$timeout.cancel(this.$$pendingDebounce);
            var n = this;
            0 < t ? this.$$pendingDebounce = this.$$timeout(function() {
                n.$commitViewValue()
            }, t) : this.$$scope.$root.$$phase ? this.$commitViewValue() : this.$$scope.$apply(function() {
                n.$commitViewValue()
            })
        },
        $overrideModelOptions: function(e) {
            this.$options = this.$options.createChild(e), this.$$setUpdateOnEvents()
        },
        $processModelValue: function() {
            var e = this.$$format();
            this.$viewValue !== e && (this.$$updateEmptyClasses(e), this.$viewValue = this.$$lastCommittedViewValue = e, this.$render(), this.$$runValidators(this.$modelValue, this.$viewValue, p))
        },
        $$format: function() {
            for (var e = this.$formatters, t = e.length, n = this.$modelValue; t--;) n = e[t](n);
            return n
        },
        $$setModelValue: function(e) {
            this.$modelValue = this.$$rawModelValue = e, this.$$parserValid = void 0, this.$processModelValue()
        },
        $$setUpdateOnEvents: function() {
            this.$$updateEvents && this.$$element.off(this.$$updateEvents, this.$$updateEventHandler), (this.$$updateEvents = this.$options.getOption("updateOn")) && this.$$element.on(this.$$updateEvents, this.$$updateEventHandler)
        },
        $$updateEventHandler: function(e) {
            this.$$debounceViewValueCommit(e && e.type)
        }
    }, An({
        clazz: Pn,
        set: function(e, t) {
            e[t] = !0
        },
        unset: function(e, t) {
            delete e[t]
        }
    });
    var So, ko = ["$rootScope", function(e) {
            return {
                restrict: "A",
                require: ["ngModel", "^?form", "^?ngModelOptions"],
                controller: Pn,
                priority: 1,
                compile: function(t) {
                    return t.addClass(Ao).addClass("ng-untouched").addClass(bo), {
                        pre: function(e, t, n, r) {
                            var i = r[0];
                            t = r[1] || i.$$parentForm, (r = r[2]) && (i.$options = r.$options), i.$$initGetterSetters(), t.$addControl(i), n.$observe("name", function(e) {
                                i.$name !== e && i.$$parentForm.$$renameControl(i, e)
                            }), e.$on("$destroy", function() {
                                i.$$parentForm.$removeControl(i)
                            })
                        },
                        post: function(t, n, r, i) {
                            function o() {
                                a.$setTouched()
                            }
                            var a = i[0];
                            a.$$setUpdateOnEvents(), n.on("blur", function() {
                                a.$touched || (e.$$phase ? t.$evalAsync(o) : t.$apply(o))
                            })
                        }
                    }
                }
            }
        }],
        Eo = /(\s+|^)default(\s+|$)/;
    Tn.prototype = {
        getOption: function(e) {
            return this.$$options[e]
        },
        createChild: function(e) {
            var t = !1;
            return o(e = c({}, e), function(n, r) {
                "$inherit" === n ? "*" === r ? t = !0 : (e[r] = this.$$options[r], "updateOn" === r && (e.updateOnDefault = this.$$options.updateOnDefault)) : "updateOn" === r && (e.updateOnDefault = !1, e[r] = sr(n.replace(Eo, function() {
                    return e.updateOnDefault = !0, " "
                })))
            }, this), t && (delete e["*"], In(e, this.$$options)), In(e, So.$$options), new Tn(e)
        }
    }, So = new Tn({
        updateOn: "",
        updateOnDefault: !0,
        debounce: 0,
        getterSetter: !1,
        allowInvalid: !1,
        timezone: null
    });
    var _o = function() {
            function e(e, t) {
                this.$$attrs = e, this.$$scope = t
            }
            return e.$inject = ["$attrs", "$scope"], e.prototype = {
                $onInit: function() {
                    var e = this.parentCtrl ? this.parentCtrl.$options : So,
                        t = this.$$scope.$eval(this.$$attrs.ngModelOptions);
                    this.$options = e.createChild(t)
                }
            }, {
                restrict: "A",
                priority: 10,
                require: {
                    parentCtrl: "?^^ngModelOptions"
                },
                bindToController: !0,
                controller: e
            }
        },
        Do = yn({
            terminal: !0,
            priority: 1e3
        }),
        Oo = r("ngOptions"),
        Mo = /^\s*([\s\S]+?)(?:\s+as\s+([\s\S]+?))?(?:\s+group\s+by\s+([\s\S]+?))?(?:\s+disable\s+when\s+([\s\S]+?))?\s+for\s+(?:([$\w][$\w]*)|(?:\(\s*([$\w][$\w]*)\s*,\s*([$\w][$\w]*)\s*\)))\s+in\s+([\s\S]+?)(?:\s+track\s+by\s+([\s\S]+?))?$/,
        Fo = ["$compile", "$document", "$parse", function(t, n, r) {
            var a = e.document.createElement("option"),
                s = e.document.createElement("optgroup");
            return {
                restrict: "A",
                terminal: !0,
                require: ["select", "ngModel"],
                link: {
                    pre: function(e, t, n, r) {
                        r[0].registerOption = p
                    },
                    post: function(e, u, c, l) {
                        function d(e) {
                            var t = (e = y.getOptionFromViewValue(e)) && e.element;
                            return t && !t.selected && (t.selected = !0), e
                        }

                        function f(e, t) {
                            e.element = t, t.disabled = e.disabled, e.label !== t.label && (t.label = e.label, t.textContent = e.label), t.value = e.selectValue
                        }
                        var p = l[0],
                            h = l[1],
                            g = c.multiple;
                        l = 0;
                        for (var m = u.children(), $ = m.length; l < $; l++)
                            if ("" === m[l].value) {
                                p.hasEmptyOption = !0, p.emptyOption = m.eq(l);
                                break
                            }
                        u.empty(), l = !!p.emptyOption, Rn(a.cloneNode(!1)).val("?");
                        var y, b = function(e, t, n) {
                                function o(e, t, n, r, i) {
                                    this.selectValue = e, this.viewValue = t, this.label = n, this.group = r, this.disabled = i
                                }

                                function a(e) {
                                    var t;
                                    if (!c && i(e)) t = e;
                                    else
                                        for (var n in t = [], e) e.hasOwnProperty(n) && "$" !== n.charAt(0) && t.push(n);
                                    return t
                                }
                                var s = e.match(Mo);
                                if (!s) throw Oo("iexp", e, z(t));
                                var u = s[5] || s[7],
                                    c = s[6];
                                e = / as /.test(s[0]) && s[1];
                                var l = s[9];
                                t = r(s[2] ? s[1] : u);
                                var d = e && r(e) || t,
                                    f = l && r(l),
                                    p = l ? function(e, t) {
                                        return f(n, t)
                                    } : function(e) {
                                        return Ue(e)
                                    },
                                    h = function(e, t) {
                                        return p(e, b(e, t))
                                    },
                                    g = r(s[2] || s[1]),
                                    m = r(s[3] || ""),
                                    $ = r(s[4] || ""),
                                    v = r(s[8]),
                                    y = {},
                                    b = c ? function(e, t) {
                                        return y[c] = t, y[u] = e, y
                                    } : function(e) {
                                        return y[u] = e, y
                                    };
                                return {
                                    trackBy: l,
                                    getTrackByValue: h,
                                    getWatchables: r(v, function(e) {
                                        for (var t = [], r = a(e = e || []), i = r.length, o = 0; o < i; o++) {
                                            var u = e[c = e === r ? o : r[o]],
                                                c = b(u, c);
                                            u = p(u, c), t.push(u), (s[2] || s[1]) && (u = g(n, c), t.push(u)), s[4] && (c = $(n, c), t.push(c))
                                        }
                                        return t
                                    }),
                                    getOptions: function() {
                                        for (var e = [], t = {}, r = v(n) || [], i = a(r), s = i.length, u = 0; u < s; u++) {
                                            var c = r === i ? u : i[u],
                                                f = b(r[c], c),
                                                y = d(n, f);
                                            y = new o(c = p(y, f), y, g(n, f), m(n, f), f = $(n, f)), e.push(y), t[c] = y
                                        }
                                        return {
                                            items: e,
                                            selectValueMap: t,
                                            getOptionFromViewValue: function(e) {
                                                return t[h(e)]
                                            },
                                            getViewValueFromOption: function(e) {
                                                return l ? U(e.viewValue) : e.viewValue
                                            }
                                        }
                                    }
                                }
                            }(c.ngOptions, u, e),
                            w = n[0].createDocumentFragment();
                        p.generateUnknownOptionValue = function(e) {
                            return "?"
                        }, g ? (p.writeValue = function(e) {
                            if (y) {
                                var t = e && e.map(d) || [];
                                y.items.forEach(function(e) {
                                    e.element.selected && -1 === Array.prototype.indexOf.call(t, e) && (e.element.selected = !1)
                                })
                            }
                        }, p.readValue = function() {
                            var e = [];
                            return o(u.val() || [], function(t) {
                                (t = y.selectValueMap[t]) && !t.disabled && e.push(y.getViewValueFromOption(t))
                            }), e
                        }, b.trackBy && e.$watchCollection(function() {
                            if (or(h.$viewValue)) return h.$viewValue.map(function(e) {
                                return b.getTrackByValue(e)
                            })
                        }, function() {
                            h.$render()
                        })) : (p.writeValue = function(e) {
                            if (y) {
                                var t = u[0].options[u[0].selectedIndex],
                                    n = y.getOptionFromViewValue(e);
                                t && t.removeAttribute("selected"), n ? (u[0].value !== n.selectValue && (p.removeUnknownOption(), u[0].value = n.selectValue, n.element.selected = !0), n.element.setAttribute("selected", "selected")) : p.selectUnknownOrEmptyOption(e)
                            }
                        }, p.readValue = function() {
                            var e = y.selectValueMap[u.val()];
                            return e && !e.disabled ? (p.unselectEmptyOption(), p.removeUnknownOption(), y.getViewValueFromOption(e)) : null
                        }, b.trackBy && e.$watch(function() {
                            return b.getTrackByValue(h.$viewValue)
                        }, function() {
                            h.$render()
                        })), l && (t(p.emptyOption)(e), u.prepend(p.emptyOption), 8 === p.emptyOption[0].nodeType ? (p.hasEmptyOption = !1, p.registerOption = function(e, t) {
                            "" === t.val() && (p.hasEmptyOption = !0, p.emptyOption = t, p.emptyOption.removeClass("ng-scope"), h.$render(), t.on("$destroy", function() {
                                var e = p.$isEmptyOptionSelected();
                                p.hasEmptyOption = !1, p.emptyOption = void 0, e && h.$render()
                            }))
                        }) : p.emptyOption.removeClass("ng-scope")), e.$watchCollection(b.getWatchables, function() {
                            var e = y && p.readValue();
                            if (y)
                                for (var t = y.items.length - 1; 0 <= t; t--) {
                                    var n = y.items[t];
                                    v(n.group) ? Ee(n.element.parentNode) : Ee(n.element)
                                }
                            var r = {};
                            (y = b.getOptions()).items.forEach(function(e) {
                                var t;
                                if (v(e.group)) {
                                    (t = r[e.group]) || (t = s.cloneNode(!1), w.appendChild(t), t.label = null === e.group ? "null" : e.group, r[e.group] = t);
                                    var n = a.cloneNode(!1);
                                    t.appendChild(n), f(e, n)
                                } else t = a.cloneNode(!1), w.appendChild(t), f(e, t)
                            }), u[0].appendChild(w), h.$render(), h.$isEmpty(e) || (t = p.readValue(), (b.trackBy || g ? P(e, t) : e === t) || (h.$setViewValue(t), h.$render()))
                        })
                    }
                }
            }
        }],
        Uo = ["$locale", "$interpolate", "$log", function(e, t, n) {
            var r = /{}/g,
                i = /^when(Minus)?(.+)$/;
            return {
                link: function(a, s, u) {
                    function c(e) {
                        s.text(e || "")
                    }
                    var l, d = u.count,
                        f = u.$attr.when && s.attr(u.$attr.when),
                        h = u.offset || 0,
                        g = a.$eval(f) || {},
                        m = {},
                        v = t.startSymbol(),
                        y = t.endSymbol(),
                        b = v + d + "-" + h + y,
                        w = er.noop;
                    o(u, function(e, t) {
                        var n = i.exec(t);
                        n && (n = (n[1] ? "-" : "") + Gn(n[2]), g[n] = s.attr(u.$attr[t]))
                    }), o(g, function(e, n) {
                        m[n] = t(e.replace(r, b))
                    }), a.$watch(d, function(t) {
                        var r = parseFloat(t),
                            i = nr(r);
                        i || r in g || (r = e.pluralCat(r - h)), r === l || i && nr(l) || (w(), $(i = m[r]) ? (null != t && n.debug("ngPluralize: no rule defined for '" + r + "' in " + f), w = p, c()) : w = a.$watch(i, c), l = r)
                    })
                }
            }
        }],
        Vo = ["$parse", "$animate", "$compile", function(e, t, n) {
            var a = r("ngRepeat"),
                s = function(e, t, n, r, i, o, a) {
                    e[n] = r, i && (e[i] = o), e.$index = t, e.$first = 0 === t, e.$last = t === a - 1, e.$middle = !(e.$first || e.$last), e.$odd = !(e.$even = 0 == (1 & t))
                };
            return {
                restrict: "A",
                multiElement: !0,
                transclude: "element",
                priority: 1e3,
                terminal: !0,
                $$tlb: !0,
                compile: function(r, u) {
                    var c = u.ngRepeat,
                        l = n.$$createComment("end ngRepeat", c);
                    if (!(d = c.match(/^\s*([\s\S]+?)\s+in\s+([\s\S]+?)(?:\s+as\s+([\s\S]+?))?(?:\s+track\s+by\s+([\s\S]+?))?\s*$/))) throw a("iexp", c);
                    var d, f = d[1],
                        p = d[2],
                        h = d[3],
                        g = d[4];
                    if (!(d = f.match(/^(?:(\s*[$\w]+)|\(\s*([$\w]+)\s*,\s*([$\w]+)\s*\))$/))) throw a("iidexp", f);
                    var m = d[3] || d[1],
                        $ = d[2];
                    if (h && (!/^[$a-zA-Z_][$a-zA-Z0-9_]*$/.test(h) || /^(null|undefined|this|\$index|\$first|\$middle|\$last|\$even|\$odd|\$parent|\$root|\$id)$/.test(h))) throw a("badident", h);
                    var v, y, b, w, A = {
                        $id: Ue
                    };
                    return g ? v = e(g) : (b = function(e, t) {
                            return Ue(t)
                        }, w = function(e) {
                            return e
                        }),
                        function(e, n, r, u, d) {
                            v && (y = function(t, n, r) {
                                return $ && (A[$] = t), A[m] = n, A.$index = r, v(e, A)
                            });
                            var f = oe();
                            e.$watchCollection(p, function(r) {
                                var u, p, g, v, A, x, C, S, k, E, _ = n[0],
                                    D = oe();
                                if (h && (e[h] = r), i(r)) S = r, p = y || b;
                                else
                                    for (E in p = y || w, S = [], r) Hn.call(r, E) && "$" !== E.charAt(0) && S.push(E);
                                for (v = S.length, E = Array(v), u = 0; u < v; u++)
                                    if (A = r === S ? u : S[u], x = r[A], C = p(A, x, u), f[C]) k = f[C], delete f[C], D[C] = k, E[u] = k;
                                    else {
                                        if (D[C]) throw o(E, function(e) {
                                            e && e.scope && (f[e.id] = e)
                                        }), a("dupes", c, C, x);
                                        E[u] = {
                                            id: C,
                                            scope: void 0,
                                            clone: void 0
                                        }, D[C] = !0
                                    }
                                for (g in f) {
                                    if (C = ie((k = f[g]).clone), t.leave(C), C[0].parentNode)
                                        for (u = 0, p = C.length; u < p; u++) C[u].$$NG_REMOVED = !0;
                                    k.scope.$destroy()
                                }
                                for (u = 0; u < v; u++)
                                    if (A = r === S ? u : S[u], x = r[A], (k = E[u]).scope) {
                                        g = _;
                                        do {
                                            g = g.nextSibling
                                        } while (g && g.$$NG_REMOVED);
                                        k.clone[0] !== g && t.move(ie(k.clone), null, _), _ = k.clone[k.clone.length - 1], s(k.scope, u, m, x, $, A, v)
                                    } else d(function(e, n) {
                                        k.scope = n;
                                        var r = l.cloneNode(!1);
                                        e[e.length++] = r, t.enter(e, null, _), _ = r, k.clone = e, D[k.id] = k, s(k.scope, u, m, x, $, A, v)
                                    });
                                f = D
                            })
                        }
                }
            }
        }],
        Po = ["$animate", function(e) {
            return {
                restrict: "A",
                multiElement: !0,
                link: function(t, n, r) {
                    t.$watch(r.ngShow, function(t) {
                        e[t ? "removeClass" : "addClass"](n, "ng-hide", {
                            tempClasses: "ng-hide-animate"
                        })
                    })
                }
            }
        }],
        To = ["$animate", function(e) {
            return {
                restrict: "A",
                multiElement: !0,
                link: function(t, n, r) {
                    t.$watch(r.ngHide, function(t) {
                        e[t ? "addClass" : "removeClass"](n, "ng-hide", {
                            tempClasses: "ng-hide-animate"
                        })
                    })
                }
            }
        }],
        Io = yn(function(e, t, n) {
            e.$watch(n.ngStyle, function(e, n) {
                n && e !== n && o(n, function(e, n) {
                    t.css(n, "")
                }), e && t.css(e)
            }, !0)
        }),
        Bo = ["$animate", "$compile", function(e, t) {
            return {
                require: "ngSwitch",
                controller: ["$scope", function() {
                    this.cases = {}
                }],
                link: function(n, r, i, a) {
                    var s = [],
                        u = [],
                        c = [],
                        l = [],
                        d = function(e, t) {
                            return function(n) {
                                !1 !== n && e.splice(t, 1)
                            }
                        };
                    n.$watch(i.ngSwitch || i.on, function(n) {
                        for (var r, i; c.length;) e.cancel(c.pop());
                        for (r = 0, i = l.length; r < i; ++r) {
                            var f = ie(u[r].clone);
                            l[r].$destroy(), (c[r] = e.leave(f)).done(d(c, r))
                        }
                        u.length = 0, l.length = 0, (s = a.cases["!" + n] || a.cases["?"]) && o(s, function(n) {
                            n.transclude(function(r, i) {
                                l.push(i);
                                var o = n.element;
                                r[r.length++] = t.$$createComment("end ngSwitchWhen"), u.push({
                                    clone: r
                                }), e.enter(r, o.parent(), o)
                            })
                        })
                    })
                }
            }
        }],
        No = yn({
            transclude: "element",
            priority: 1200,
            require: "^ngSwitch",
            multiElement: !0,
            link: function(e, t, n, r, i) {
                o(n.ngSwitchWhen.split(n.ngSwitchWhenSeparator).sort().filter(function(e, t, n) {
                    return n[t - 1] !== e
                }), function(e) {
                    r.cases["!" + e] = r.cases["!" + e] || [], r.cases["!" + e].push({
                        transclude: i,
                        element: t
                    })
                })
            }
        }),
        Ro = yn({
            transclude: "element",
            priority: 1200,
            require: "^ngSwitch",
            multiElement: !0,
            link: function(e, t, n, r, i) {
                r.cases["?"] = r.cases["?"] || [], r.cases["?"].push({
                    transclude: i,
                    element: t
                })
            }
        }),
        jo = r("ngTransclude"),
        qo = ["$compile", function(e) {
            return {
                restrict: "EAC",
                terminal: !0,
                compile: function(t) {
                    var n = e(t.contents());
                    return t.empty(),
                        function(e, t, r, i, o) {
                            function a() {
                                n(e, function(e) {
                                    t.append(e)
                                })
                            }
                            if (!o) throw jo("orphan", z(t));
                            r.ngTransclude === r.$attr.ngTransclude && (r.ngTransclude = ""), o(function(e, n) {
                                var r;
                                if (r = e.length) e: {
                                    r = 0;
                                    for (var i = e.length; r < i; r++) {
                                        var o = e[r];
                                        if (o.nodeType !== mr || o.nodeValue.trim()) {
                                            r = !0;
                                            break e
                                        }
                                    }
                                    r = void 0
                                }
                                r ? t.append(e) : (a(), n.$destroy())
                            }, null, r = r.ngTransclude || r.ngTranscludeSlot), r && !o.isSlotFilled(r) && a()
                        }
                }
            }
        }],
        zo = ["$templateCache", function(e) {
            return {
                restrict: "E",
                terminal: !0,
                compile: function(t, n) {
                    "text/ng-template" === n.type && e.put(n.id, t[0].text)
                }
            }
        }],
        Lo = {
            $setViewValue: p,
            $render: p
        },
        Ho = ["$element", "$scope", function(t, n) {
            function r() {
                s || (s = !0, n.$$postDigest(function() {
                    s = !1, o.ngModelCtrl.$render()
                }))
            }

            function i(e) {
                u || (u = !0, n.$$postDigest(function() {
                    n.$$destroyed || (u = !1, o.ngModelCtrl.$setViewValue(o.readValue()), e && o.ngModelCtrl.$render())
                }))
            }
            var o = this,
                a = new Pr;
            o.selectValueMap = {}, o.ngModelCtrl = Lo, o.multiple = !1, o.unknownOption = Rn(e.document.createElement("option")), o.hasEmptyOption = !1, o.emptyOption = void 0, o.renderUnknownOption = function(e) {
                e = o.generateUnknownOptionValue(e), o.unknownOption.val(e), t.prepend(o.unknownOption), Bn(o.unknownOption, !0), t.val(e)
            }, o.updateUnknownOption = function(e) {
                e = o.generateUnknownOptionValue(e), o.unknownOption.val(e), Bn(o.unknownOption, !0), t.val(e)
            }, o.generateUnknownOptionValue = function(e) {
                return "? " + Ue(e) + " ?"
            }, o.removeUnknownOption = function() {
                o.unknownOption.parent() && o.unknownOption.remove()
            }, o.selectEmptyOption = function() {
                o.emptyOption && (t.val(""), Bn(o.emptyOption, !0))
            }, o.unselectEmptyOption = function() {
                o.hasEmptyOption && Bn(o.emptyOption, !1)
            }, n.$on("$destroy", function() {
                o.renderUnknownOption = p
            }), o.readValue = function() {
                var e = (e = t.val()) in o.selectValueMap ? o.selectValueMap[e] : e;
                return o.hasOption(e) ? e : null
            }, o.writeValue = function(e) {
                var n = t[0].options[t[0].selectedIndex];
                n && Bn(Rn(n), !1), o.hasOption(e) ? (o.removeUnknownOption(), n = Ue(e), t.val(n in o.selectValueMap ? n : e), Bn(Rn(t[0].options[t[0].selectedIndex]), !0)) : o.selectUnknownOrEmptyOption(e)
            }, o.addOption = function(e, t) {
                if (8 !== t[0].nodeType) {
                    ne(e, '"option value"'), "" === e && (o.hasEmptyOption = !0, o.emptyOption = t);
                    var n = a.get(e) || 0;
                    a.set(e, n + 1), r()
                }
            }, o.removeOption = function(e) {
                var t = a.get(e);
                t && (1 === t ? (a.delete(e), "" === e && (o.hasEmptyOption = !1, o.emptyOption = void 0)) : a.set(e, t - 1))
            }, o.hasOption = function(e) {
                return !!a.get(e)
            }, o.$hasEmptyOption = function() {
                return o.hasEmptyOption
            }, o.$isUnknownOptionSelected = function() {
                return t[0].options[0] === o.unknownOption[0]
            }, o.$isEmptyOptionSelected = function() {
                return o.hasEmptyOption && t[0].options[t[0].selectedIndex] === o.emptyOption[0]
            }, o.selectUnknownOrEmptyOption = function(e) {
                null == e && o.emptyOption ? (o.removeUnknownOption(), o.selectEmptyOption()) : o.unknownOption.parent().length ? o.updateUnknownOption(e) : o.renderUnknownOption(e)
            };
            var s = !1,
                u = !1;
            o.registerOption = function(e, t, n, a, s) {
                if (n.$attr.ngValue) {
                    var u, c = NaN;
                    n.$observe("value", function(e) {
                        var n, r = t.prop("selected");
                        v(c) && (o.removeOption(u), delete o.selectValueMap[c], n = !0), c = Ue(e), u = e, o.selectValueMap[c] = e, o.addOption(e, t), t.attr("value", c), n && r && i()
                    })
                } else a ? n.$observe("value", function(e) {
                    o.readValue();
                    var n, r = t.prop("selected");
                    v(u) && (o.removeOption(u), n = !0), u = e, o.addOption(e, t), n && r && i()
                }) : s ? e.$watch(s, function(e, r) {
                    n.$set("value", e);
                    var a = t.prop("selected");
                    r !== e && o.removeOption(r), o.addOption(e, t), r && a && i()
                }) : o.addOption(n.value, t);
                n.$observe("disabled", function(e) {
                    ("true" === e || e && t.prop("selected")) && (o.multiple ? i(!0) : (o.ngModelCtrl.$setViewValue(null), o.ngModelCtrl.$render()))
                }), t.on("$destroy", function() {
                    var e = o.readValue(),
                        t = n.value;
                    o.removeOption(t), r(), (o.multiple && e && -1 !== e.indexOf(t) || e === t) && i(!0)
                })
            }
        }],
        Go = function() {
            return {
                restrict: "E",
                require: ["select", "?ngModel"],
                controller: Ho,
                priority: 1,
                link: {
                    pre: function(e, t, n, r) {
                        var i = r[0],
                            a = r[1];
                        if (a) {
                            if (i.ngModelCtrl = a, t.on("change", function() {
                                    i.removeUnknownOption(), e.$apply(function() {
                                        a.$setViewValue(i.readValue())
                                    })
                                }), n.multiple) {
                                i.multiple = !0, i.readValue = function() {
                                    var e = [];
                                    return o(t.find("option"), function(t) {
                                        t.selected && !t.disabled && (t = t.value, e.push(t in i.selectValueMap ? i.selectValueMap[t] : t))
                                    }), e
                                }, i.writeValue = function(e) {
                                    o(t.find("option"), function(t) {
                                        var n = !!e && (-1 !== Array.prototype.indexOf.call(e, t.value) || -1 !== Array.prototype.indexOf.call(e, i.selectValueMap[t.value]));
                                        n !== t.selected && Bn(Rn(t), n)
                                    })
                                };
                                var s, u = NaN;
                                e.$watch(function() {
                                    u !== a.$viewValue || P(s, a.$viewValue) || (s = se(a.$viewValue), a.$render()), u = a.$viewValue
                                }), a.$isEmpty = function(e) {
                                    return !e || 0 === e.length
                                }
                            }
                        } else i.registerOption = p
                    },
                    post: function(e, t, n, r) {
                        var i = r[1];
                        if (i) {
                            var o = r[0];
                            i.$render = function() {
                                o.writeValue(i.$viewValue)
                            }
                        }
                    }
                }
            }
        },
        Wo = ["$interpolate", function(e) {
            return {
                restrict: "E",
                priority: 100,
                compile: function(t, n) {
                    var r, i;
                    return v(n.ngValue) || (v(n.value) ? r = e(n.value, !0) : (i = e(t.text(), !0)) || n.$set("value", t.text())),
                        function(e, t, n) {
                            var o = t.parent();
                            (o = o.data("$selectController") || o.parent().data("$selectController")) && o.registerOption(e, t, n, r, i)
                        }
                }
            }
        }],
        Ko = function() {
            return {
                restrict: "A",
                require: "?ngModel",
                link: function(e, t, n, r) {
                    r && (n.required = !0, r.$validators.required = function(e, t) {
                        return !n.required || !r.$isEmpty(t)
                    }, n.$observe("required", function() {
                        r.$validate()
                    }))
                }
            }
        },
        Jo = function() {
            return {
                restrict: "A",
                require: "?ngModel",
                link: function(e, t, n, i) {
                    if (i) {
                        var o, a = n.ngPattern || n.pattern;
                        n.$observe("pattern", function(e) {
                            if (w(e) && 0 < e.length && (e = new RegExp("^" + e + "$")), e && !e.test) throw r("ngPattern")("noregexp", a, e, z(t));
                            o = e || void 0, i.$validate()
                        }), i.$validators.pattern = function(e, t) {
                            return i.$isEmpty(t) || $(o) || o.test(t)
                        }
                    }
                }
            }
        },
        Zo = function() {
            return {
                restrict: "A",
                require: "?ngModel",
                link: function(e, t, n, r) {
                    if (r) {
                        var i = -1;
                        n.$observe("maxlength", function(e) {
                            e = d(e), i = nr(e) ? -1 : e, r.$validate()
                        }), r.$validators.maxlength = function(e, t) {
                            return 0 > i || r.$isEmpty(t) || t.length <= i
                        }
                    }
                }
            }
        },
        Qo = function() {
            return {
                restrict: "A",
                require: "?ngModel",
                link: function(e, t, n, r) {
                    if (r) {
                        var i = 0;
                        n.$observe("minlength", function(e) {
                            i = d(e) || 0, r.$validate()
                        }), r.$validators.minlength = function(e, t) {
                            return r.$isEmpty(t) || t.length >= i
                        }
                    }
                }
            }
        };
    e.angular.bootstrap ? e.console && console.log("WARNING: Tried to load angular more than once.") : (function() {
        var t;
        if (!gr) {
            var n = lr();
            (jn = $(n) ? e.jQuery : n ? e[n] : void 0) && jn.fn.on ? (Rn = jn, c(jn.fn, {
                scope: Or.scope,
                isolateScope: Or.isolateScope,
                controller: Or.controller,
                injector: Or.injector,
                inheritedData: Or.inheritedData
            }), t = jn.cleanData, jn.cleanData = function(e) {
                for (var n, r, i = 0; null != (r = e[i]); i++)(n = jn._data(r, "events")) && n.$destroy && jn(r).triggerHandler("$destroy");
                t(e)
            }) : Rn = pe, er.element = Rn, gr = !0
        }
    }(), c(er, {
        errorHandlingConfig: t,
        bootstrap: Z,
        copy: U,
        extend: c,
        merge: l,
        equals: P,
        element: Rn,
        forEach: o,
        injector: Te,
        noop: p,
        bind: I,
        toJson: N,
        fromJson: R,
        identity: h,
        isUndefined: $,
        isDefined: v,
        isString: w,
        isFunction: S,
        isObject: y,
        isNumber: A,
        isElement: O,
        isArray: or,
        version: $r,
        isDate: x,
        lowercase: Gn,
        uppercase: Wn,
        callbacks: {
            $$counter: 0
        },
        getTestability: Y,
        reloadWithDebugInfo: Q,
        $$minErr: r,
        $$csp: cr,
        $$encodeUriSegment: W,
        $$encodeUriQuery: K,
        $$stringify: ae
    }), (qn = function(e) {
        function t(e, t, n) {
            return e[t] || (e[t] = n())
        }
        var n = r("$injector"),
            i = r("ng");
        return (e = t(e, "angular", Object)).$$minErr = e.$$minErr || r, t(e, "module", function() {
            var e = {};
            return function(r, o, a) {
                var s = {};
                if ("hasOwnProperty" === r) throw i("badname", "module");
                return o && e.hasOwnProperty(r) && (e[r] = null), t(e, r, function() {
                    function e(e, t, n, r) {
                        return r || (r = u),
                            function() {
                                return r[n || "push"]([e, t, arguments]), f
                            }
                    }

                    function t(e, t, n) {
                        return n || (n = u),
                            function(i, o) {
                                return o && S(o) && (o.$$moduleName = r), n.push([e, t, arguments]), f
                            }
                    }
                    if (!o) throw n("nomod", r);
                    var u = [],
                        c = [],
                        l = [],
                        d = e("$injector", "invoke", "push", c),
                        f = {
                            _invokeQueue: u,
                            _configBlocks: c,
                            _runBlocks: l,
                            info: function(e) {
                                if (v(e)) {
                                    if (!y(e)) throw i("aobj", "value");
                                    return s = e, this
                                }
                                return s
                            },
                            requires: o,
                            name: r,
                            provider: t("$provide", "provider"),
                            factory: t("$provide", "factory"),
                            service: t("$provide", "service"),
                            value: e("$provide", "value"),
                            constant: e("$provide", "constant", "unshift"),
                            decorator: t("$provide", "decorator", c),
                            animation: t("$animateProvider", "register"),
                            filter: t("$filterProvider", "register"),
                            controller: t("$controllerProvider", "register"),
                            directive: t("$compileProvider", "directive"),
                            component: t("$compileProvider", "component"),
                            config: d,
                            run: function(e) {
                                return l.push(e), this
                            }
                        };
                    return a && d(a), f
                })
            }
        })
    }(e))("ng", ["ngLocale"], ["$provide", function(e) {
        e.provider({
            $$sanitizeUri: jt
        }), e.provider("$compile", ze).directive({
            a: Ii,
            input: eo,
            textarea: eo,
            form: ji,
            script: zo,
            select: Go,
            option: Wo,
            ngBind: ro,
            ngBindHtml: oo,
            ngBindTemplate: io,
            ngClass: so,
            ngClassEven: co,
            ngClassOdd: uo,
            ngCloak: lo,
            ngController: fo,
            ngForm: qi,
            ngHide: To,
            ngIf: go,
            ngInclude: mo,
            ngInit: vo,
            ngNonBindable: Do,
            ngPluralize: Uo,
            ngRepeat: Vo,
            ngShow: Po,
            ngStyle: Io,
            ngSwitch: Bo,
            ngSwitchWhen: No,
            ngSwitchDefault: Ro,
            ngOptions: Fo,
            ngTransclude: qo,
            ngModel: ko,
            ngList: yo,
            ngChange: ao,
            pattern: Jo,
            ngPattern: Jo,
            required: Ko,
            ngRequired: Ko,
            minlength: Qo,
            ngMinlength: Qo,
            maxlength: Zo,
            ngMaxlength: Zo,
            ngValue: no,
            ngModelOptions: _o
        }).directive({
            ngInclude: $o
        }).directive(Bi).directive(po), e.provider({
            $anchorScroll: Ie,
            $animate: Gr,
            $animateCss: Jr,
            $$animateJs: Lr,
            $$animateQueue: Hr,
            $$AnimateRunner: Kr,
            $$animateAsyncRun: Wr,
            $browser: Re,
            $cacheFactory: je,
            $controller: Ke,
            $document: Je,
            $$isDocumentHidden: Ze,
            $exceptionHandler: Qe,
            $filter: en,
            $$forceReflow: ni,
            $interpolate: ut,
            $interval: ct,
            $http: ot,
            $httpParamSerializer: Xe,
            $httpParamSerializerJQLike: et,
            $httpBackend: st,
            $xhrFactory: at,
            $jsonpCallbacks: li,
            $location: At,
            $log: xt,
            $parse: Pt,
            $rootScope: Rt,
            $q: Tt,
            $$q: It,
            $sce: Lt,
            $sceDelegate: zt,
            $sniffer: Ht,
            $templateCache: qe,
            $templateRequest: Gt,
            $$testability: Wt,
            $timeout: Kt,
            $window: Qt,
            $$rAF: Nt,
            $$jqLite: Fe,
            $$Map: Tr,
            $$cookieReader: Xt
        })
    }]).info({
        angularVersion: "1.6.8"
    }), er.module("ngLocale", [], ["$provide", function(e) {
        e.value("$locale", {
            DATETIME_FORMATS: {
                AMPMS: ["AM", "PM"],
                DAY: "Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),
                ERANAMES: ["Before Christ", "Anno Domini"],
                ERAS: ["BC", "AD"],
                FIRSTDAYOFWEEK: 6,
                MONTH: "January February March April May June July August September October November December".split(" "),
                SHORTDAY: "Sun Mon Tue Wed Thu Fri Sat".split(" "),
                SHORTMONTH: "Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "),
                STANDALONEMONTH: "January February March April May June July August September October November December".split(" "),
                WEEKENDRANGE: [5, 6],
                fullDate: "EEEE, MMMM d, y",
                longDate: "MMMM d, y",
                medium: "MMM d, y h:mm:ss a",
                mediumDate: "MMM d, y",
                mediumTime: "h:mm:ss a",
                short: "M/d/yy h:mm a",
                shortDate: "M/d/yy",
                shortTime: "h:mm a"
            },
            NUMBER_FORMATS: {
                CURRENCY_SYM: "$",
                DECIMAL_SEP: ".",
                GROUP_SEP: ",",
                PATTERNS: [{
                    gSize: 3,
                    lgSize: 3,
                    maxFrac: 3,
                    minFrac: 0,
                    minInt: 1,
                    negPre: "-",
                    negSuf: "",
                    posPre: "",
                    posSuf: ""
                }, {
                    gSize: 3,
                    lgSize: 3,
                    maxFrac: 2,
                    minFrac: 2,
                    minInt: 1,
                    negPre: "-¤",
                    negSuf: "",
                    posPre: "¤",
                    posSuf: ""
                }]
            },
            id: "en-us",
            localeID: "en_US",
            pluralCat: function(e, t) {
                var n, r, i = 0 | e,
                    o = t;
                return void 0 === o && (o = Math.min((n = e, -1 == (r = (n += "").indexOf(".")) ? 0 : n.length - r - 1), 3)), Math.pow(10, o), 1 == i && 0 == o ? "one" : "other"
            }
        })
    }]), Rn(function() {
        J(e.document, Z)
    }))
}(window), !window.angular.$$csp().noInlineStyle && window.angular.element(document.head).prepend('<style type="text/css">@charset "UTF-8";[ng\\:cloak],[ng-cloak],[data-ng-cloak],[x-ng-cloak],.ng-cloak,.x-ng-cloak,.ng-hide:not(.ng-hide-animate){display:none !important;}ng\\:form{display:block;}.ng-animate-shim{visibility:hidden;}.ng-anchor{position:absolute;}</style>'),
    function(e, t) {
        "use strict";

        function n(e, n, r) {
            var i = r.baseHref(),
                o = e[0];
            return function(e, r, a) {
                var s, u;
                u = (a = a || {}).expires, s = t.isDefined(a.path) ? a.path : i, t.isUndefined(r) && (u = "Thu, 01 Jan 1970 00:00:00 GMT", r = ""), t.isString(u) && (u = new Date(u)), r = (r = encodeURIComponent(e) + "=" + encodeURIComponent(r)) + (s ? ";path=" + s : "") + (a.domain ? ";domain=" + a.domain : ""), r += u ? ";expires=" + u.toUTCString() : "", 4096 < (a = (r += a.secure ? ";secure" : "").length + 1) && n.warn("Cookie '" + e + "' possibly not set or overflowed because it was too large (" + a + " > 4096 bytes)!"), o.cookie = r
            }
        }
        t.module("ngCookies", ["ng"]).info({
            angularVersion: "1.6.8"
        }).provider("$cookies", [function() {
            var e = this.defaults = {};
            this.$get = ["$$cookieReader", "$$cookieWriter", function(n, r) {
                return {
                    get: function(e) {
                        return n()[e]
                    },
                    getObject: function(e) {
                        return (e = this.get(e)) ? t.fromJson(e) : e
                    },
                    getAll: function() {
                        return n()
                    },
                    put: function(n, i, o) {
                        r(n, i, o ? t.extend({}, e, o) : e)
                    },
                    putObject: function(e, n, r) {
                        this.put(e, t.toJson(n), r)
                    },
                    remove: function(n, i) {
                        r(n, void 0, i ? t.extend({}, e, i) : e)
                    }
                }
            }]
        }]), t.module("ngCookies").factory("$cookieStore", ["$cookies", function(e) {
            return {
                get: function(t) {
                    return e.getObject(t)
                },
                put: function(t, n) {
                    e.putObject(t, n)
                },
                remove: function(t) {
                    e.remove(t)
                }
            }
        }]), n.$inject = ["$document", "$log", "$browser"], t.module("ngCookies").provider("$$cookieWriter", function() {
            this.$get = n
        })
    }(window, window.angular),
    function(e, t) {
        "use strict";

        function n() {
            return ["$animate", function(e) {
                return {
                    restrict: "AE",
                    transclude: "element",
                    priority: 1,
                    terminal: !0,
                    require: "^^ngMessages",
                    link: function(t, n, r, o, a) {
                        var s, u, c, l = n[0],
                            d = r.ngMessage || r.when,
                            f = function(e) {
                                s = e ? i(e) ? e : e.split(/[\s,]+/) : null, o.reRender()
                            };
                        (r = r.ngMessageExp || r.whenExp) ? (f(t.$eval(r)), t.$watchCollection(r, f)) : f(d), o.register(l, c = {
                            test: function(e) {
                                var t = s;
                                return e = t ? i(t) ? 0 <= t.indexOf(e) : t.hasOwnProperty(e) : void 0
                            },
                            attach: function() {
                                u || a(function(t, r) {
                                    e.enter(t, null, n);
                                    var i = (u = t).$$attachId = o.getAttachId();
                                    u.on("$destroy", function() {
                                        u && u.$$attachId === i && (o.deregister(l), c.detach()), r.$destroy()
                                    })
                                })
                            },
                            detach: function() {
                                if (u) {
                                    var t = u;
                                    u = null, e.leave(t)
                                }
                            }
                        })
                    }
                }
            }]
        }
        var r, i, o, a;
        t.module("ngMessages", [], function() {
            r = t.forEach, i = t.isArray, o = t.isString, a = t.element
        }).info({
            angularVersion: "1.6.8"
        }).directive("ngMessages", ["$animate", function(e) {
            function t(e, t) {
                return o(t) && 0 === t.length || n(e.$eval(t))
            }

            function n(e) {
                return o(e) ? e.length : !!e
            }
            return {
                require: "ngMessages",
                restrict: "AE",
                controller: ["$element", "$scope", "$attrs", function(i, o, a) {
                    function s(e, t) {
                        for (var n = t, r = []; n && n !== e;) {
                            var i = n.$$ngMessageNode;
                            if (i && i.length) return p[i];
                            n.childNodes.length && -1 === r.indexOf(n) ? (r.push(n), n = n.childNodes[n.childNodes.length - 1]) : n.previousSibling ? n = n.previousSibling : (n = n.parentNode, r.push(n))
                        }
                    }
                    var u = this,
                        c = 0,
                        l = 0;
                    this.getAttachId = function() {
                        return l++
                    };
                    var d, f, p = this.messages = {};
                    this.render = function(s) {
                        d = !1, f = s = s || {};
                        for (var c = t(o, a.ngMessagesMultiple) || t(o, a.multiple), l = [], p = {}, h = u.head, g = !1, m = 0; null != h;) {
                            m++;
                            var $ = h.message,
                                v = !1;
                            g || r(s, function(e, t) {
                                !v && n(e) && $.test(t) && !p[t] && (v = p[t] = !0, $.attach())
                            }), v ? g = !c : l.push($), h = h.next
                        }
                        r(l, function(e) {
                            e.detach()
                        }), l.length !== m ? e.setClass(i, "ng-active", "ng-inactive") : e.setClass(i, "ng-inactive", "ng-active")
                    }, o.$watchCollection(a.ngMessages || a.for, u.render), i.on("$destroy", function() {
                        r(p, function(e) {
                            e.message.detach()
                        })
                    }), this.reRender = function() {
                        d || (d = !0, o.$evalAsync(function() {
                            d && f && u.render(f)
                        }))
                    }, this.register = function(e, t) {
                        var n = c.toString();
                        p[n] = {
                            message: t
                        };
                        var r = i[0],
                            o = p[n];
                        u.head ? (r = s(r, e)) ? (o.next = r.next, r.next = o) : (o.next = u.head, u.head = o) : u.head = o, e.$$ngMessageNode = n, c++, u.reRender()
                    }, this.deregister = function(e) {
                        var t = e.$$ngMessageNode;
                        delete e.$$ngMessageNode;
                        var n = p[t];
                        (e = s(i[0], e)) ? e.next = n.next: u.head = n.next, delete p[t], u.reRender()
                    }
                }]
            }
        }]).directive("ngMessagesInclude", ["$templateRequest", "$document", "$compile", function(e, t, n) {
            function r(e, r) {
                var i = n.$$createComment ? n.$$createComment("ngMessagesInclude", r) : t[0].createComment(" ngMessagesInclude: " + r + " ");
                i = a(i);
                e.after(i), e.remove()
            }
            return {
                restrict: "AE",
                require: "^^ngMessages",
                link: function(t, i, a) {
                    var s = a.ngMessagesInclude || a.src;
                    e(s).then(function(e) {
                        t.$$destroyed || (o(e) && !e.trim() ? r(i, s) : n(e)(t, function(e) {
                            i.after(e), r(i, s)
                        }))
                    })
                }
            }
        }]).directive("ngMessage", n()).directive("ngMessageExp", n())
    }(window, window.angular), !window.XMLHttpRequest || window.FileAPI && FileAPI.shouldLoad || (window.XMLHttpRequest.prototype.setRequestHeader = function(e) {
        return function(t, n) {
            if ("__setXHR_" === t) {
                var r = n(this);
                r instanceof Function && r(this)
            } else e.apply(this, arguments)
        }
    }(window.XMLHttpRequest.prototype.setRequestHeader));
var ngFileUpload = angular.module("ngFileUpload", []);
ngFileUpload.version = "12.2.13", ngFileUpload.service("UploadBase", ["$http", "$q", "$timeout", function(e, t, n) {
        function r(r) {
            function i(e) {
                c.notify && c.notify(e), l.progressFunc && n(function() {
                    l.progressFunc(e)
                })
            }

            function s(e) {
                return null != r._start && a ? {
                    loaded: e.loaded + r._start,
                    total: r._file && r._file.size || e.total,
                    type: e.type,
                    config: r,
                    lengthComputable: !0,
                    target: e.target
                } : e
            }

            function u() {
                e(r).then(function(e) {
                    if (a && r._chunkSize && !r._finished && r._file) {
                        var t = r._file && r._file.size || 0;
                        i({
                            loaded: Math.min(r._end, t),
                            total: t,
                            config: r,
                            type: "progress"
                        }), o.upload(r, !0)
                    } else r._finished && delete r._finished, c.resolve(e)
                }, function(e) {
                    c.reject(e)
                }, function(e) {
                    c.notify(e)
                })
            }
            r.method = r.method || "POST", r.headers = r.headers || {};
            var c = r._deferred = r._deferred || t.defer(),
                l = c.promise;
            return r.disableProgress || (r.headers.__setXHR_ = function() {
                return function(e) {
                    e && e.upload && e.upload.addEventListener && (r.__XHR = e, r.xhrFn && r.xhrFn(e), e.upload.addEventListener("progress", function(e) {
                        e.config = r, i(s(e))
                    }, !1), e.upload.addEventListener("load", function(e) {
                        e.lengthComputable && (e.config = r, i(s(e)))
                    }, !1))
                }
            }), a ? r._chunkSize && r._end && !r._finished ? (r._start = r._end, r._end += r._chunkSize, u()) : r.resumeSizeUrl ? e.get(r.resumeSizeUrl).then(function(e) {
                r._start = r.resumeSizeResponseReader ? r.resumeSizeResponseReader(e.data) : parseInt((null == e.data.size ? e.data : e.data.size).toString()), r._chunkSize && (r._end = r._start + r._chunkSize), u()
            }, function(e) {
                throw e
            }) : r.resumeSize ? r.resumeSize().then(function(e) {
                r._start = e, r._chunkSize && (r._end = r._start + r._chunkSize), u()
            }, function(e) {
                throw e
            }) : (r._chunkSize && (r._start = 0, r._end = r._start + r._chunkSize), u()) : u(), l.success = function(e) {
                return l.then(function(t) {
                    e(t.data, t.status, t.headers, r)
                }), l
            }, l.error = function(e) {
                return l.then(null, function(t) {
                    e(t.data, t.status, t.headers, r)
                }), l
            }, l.progress = function(e) {
                return l.progressFunc = e, l.then(null, null, function(t) {
                    e(t)
                }), l
            }, l.abort = l.pause = function() {
                return r.__XHR && n(function() {
                    r.__XHR.abort()
                }), l
            }, l.xhr = function(e) {
                return r.xhrFn = (t = r.xhrFn, function() {
                    t && t.apply(l, arguments), e.apply(l, arguments)
                }), l;
                var t
            }, o.promisesCount++, l.finally && l.finally instanceof Function && l.finally(function() {
                o.promisesCount--
            }), l
        }

        function i(e) {
            var t = {};
            for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
            return t
        }
        var o = this;
        o.promisesCount = 0, this.isResumeSupported = function() {
            return window.Blob && window.Blob.prototype.slice
        };
        var a = this.isResumeSupported();
        this.isUploadInProgress = function() {
            return o.promisesCount > 0
        }, this.rename = function(e, t) {
            return e.ngfName = t, e
        }, this.jsonBlob = function(e) {
            null == e || angular.isString(e) || (e = JSON.stringify(e));
            var t = new window.Blob([e], {
                type: "application/json"
            });
            return t._ngfBlob = !0, t
        }, this.json = function(e) {
            return angular.toJson(e)
        }, this.isFile = function(e) {
            return null != e && (e instanceof window.Blob || e.flashId && e.name && e.size)
        }, this.upload = function(e, t) {
            function n(t, r, i) {
                if (void 0 !== r)
                    if (angular.isDate(r) && (r = r.toISOString()), angular.isString(r)) t.append(i, r);
                    else if (o.isFile(r)) {
                    var s = function(t, n) {
                            if (t._ngfBlob) return t;
                            if (e._file = e._file || t, null != e._start && a) {
                                e._end && e._end >= t.size && (e._finished = !0, e._end = t.size);
                                var r = t.slice(e._start, e._end || t.size);
                                return r.name = t.name, r.ngfName = t.ngfName, e._chunkSize && (n.append("_chunkSize", e._chunkSize), n.append("_currentChunkSize", e._end - e._start), n.append("_chunkNumber", Math.floor(e._start / e._chunkSize)), n.append("_totalSize", e._file.size)), r
                            }
                            return t
                        }(r, t),
                        u = i.split(",");
                    u[1] && (s.ngfName = u[1].replace(/^\s+|\s+$/g, ""), i = u[0]), e._fileKey = e._fileKey || i, t.append(i, s, s.ngfName || s.name)
                } else if (angular.isObject(r)) {
                    if (r.$$ngfCircularDetection) throw "ngFileUpload: Circular reference in config.data. Make sure specified data for Upload.upload() has no circular reference: " + i;
                    r.$$ngfCircularDetection = !0;
                    try {
                        for (var c in r)
                            if (r.hasOwnProperty(c) && "$$ngfCircularDetection" !== c) {
                                var l = null == e.objectKey ? "[i]" : e.objectKey;
                                r.length && parseInt(c) > -1 && (l = null == e.arrayKey ? l : e.arrayKey), n(t, r[c], i + l.replace(/[ik]/g, c))
                            }
                    } finally {
                        delete r.$$ngfCircularDetection
                    }
                } else t.append(i, r)
            }
            return t || (e = i(e)), e._isDigested || (e._isDigested = !0, e._chunkSize = o.translateScalars(e.resumeChunkSize), e._chunkSize = e._chunkSize ? parseInt(e._chunkSize.toString()) : null, e.headers = e.headers || {}, e.headers["Content-Type"] = void 0, e.transformRequest = e.transformRequest ? angular.isArray(e.transformRequest) ? e.transformRequest : [e.transformRequest] : [], e.transformRequest.push(function(t) {
                var r, i = new window.FormData;
                for (r in t = t || e.fields || {}, e.file && (t.file = e.file), t)
                    if (t.hasOwnProperty(r)) {
                        var o = t[r];
                        e.formDataAppender ? e.formDataAppender(i, r, o) : n(i, o, r)
                    }
                return i
            })), r(e)
        }, this.http = function(t) {
            return (t = i(t)).transformRequest = t.transformRequest || function(t) {
                return window.ArrayBuffer && t instanceof window.ArrayBuffer || t instanceof window.Blob ? t : e.defaults.transformRequest[0].apply(this, arguments)
            }, t._chunkSize = o.translateScalars(t.resumeChunkSize), t._chunkSize = t._chunkSize ? parseInt(t._chunkSize.toString()) : null, r(t)
        }, this.translateScalars = function(e) {
            if (angular.isString(e)) {
                if (e.search(/kb/i) === e.length - 2) return parseFloat(1024 * e.substring(0, e.length - 2));
                if (e.search(/mb/i) === e.length - 2) return parseFloat(1048576 * e.substring(0, e.length - 2));
                if (e.search(/gb/i) === e.length - 2) return parseFloat(1073741824 * e.substring(0, e.length - 2));
                if (e.search(/b/i) === e.length - 1) return parseFloat(e.substring(0, e.length - 1));
                if (e.search(/s/i) === e.length - 1) return parseFloat(e.substring(0, e.length - 1));
                if (e.search(/m/i) === e.length - 1) return parseFloat(60 * e.substring(0, e.length - 1));
                if (e.search(/h/i) === e.length - 1) return parseFloat(3600 * e.substring(0, e.length - 1))
            }
            return e
        }, this.urlToBlob = function(n) {
            var r = t.defer();
            return e({
                url: n,
                method: "get",
                responseType: "arraybuffer"
            }).then(function(e) {
                var t = new Uint8Array(e.data),
                    i = e.headers("content-type") || "image/WebP",
                    o = new window.Blob([t], {
                        type: i
                    }),
                    a = n.match(/.*\/(.+?)(\?.*)?$/);
                a.length > 1 && (o.name = a[1]), r.resolve(o)
            }, function(e) {
                r.reject(e)
            }), r.promise
        }, this.setDefaults = function(e) {
            this.defaults = e || {}
        }, this.defaults = {}, this.version = ngFileUpload.version
    }]), ngFileUpload.service("Upload", ["$parse", "$timeout", "$compile", "$q", "UploadExif", function(e, t, n, r, i) {
        function o(e, t, n, i, o) {
            function s(r, s) {
                if (0 === r.type.indexOf("image")) {
                    if (e.pattern && !a.validatePattern(r, e.pattern)) return;
                    e.resizeIf = function(e, t) {
                        return a.attrGetter("ngfResizeIf", n, i, {
                            $width: e,
                            $height: t,
                            $file: r
                        })
                    };
                    var c = a.resize(r, e);
                    u.push(c), c.then(function(e) {
                        t.splice(s, 1, e)
                    }, function(e) {
                        r.$error = "resize", (r.$errorMessages = r.$errorMessages || {}).resize = !0, r.$errorParam = (e ? (e.message ? e.message : e) + ": " : "") + (r && r.name), o.$ngfValidations.push({
                            name: "resize",
                            valid: !1
                        }), a.applyModelValidation(o, t)
                    })
                }
            }
            for (var u = [a.emptyPromise()], c = 0; c < t.length; c++) s(t[c], c);
            return r.all(u)
        }
        var a = i;
        return a.getAttrWithDefaults = function(e, t) {
            if (null != e[t]) return e[t];
            var n = a.defaults[t];
            return null == n ? n : angular.isString(n) ? n : JSON.stringify(n)
        }, a.attrGetter = function(t, n, r, i) {
            var o = this.getAttrWithDefaults(n, t);
            if (!r) return o;
            try {
                return i ? e(o)(r, i) : e(o)(r)
            } catch (e) {
                if (t.search(/min|max|pattern/i)) return o;
                throw e
            }
        }, a.shouldUpdateOn = function(e, t, n) {
            var r = a.attrGetter("ngfModelOptions", t, n);
            return !r || !r.updateOn || r.updateOn.split(" ").indexOf(e) > -1
        }, a.emptyPromise = function() {
            var e = r.defer(),
                n = arguments;
            return t(function() {
                e.resolve.apply(e, n)
            }), e.promise
        }, a.rejectPromise = function() {
            var e = r.defer(),
                n = arguments;
            return t(function() {
                e.reject.apply(e, n)
            }), e.promise
        }, a.happyPromise = function(e, n) {
            var i = r.defer();
            return e.then(function(e) {
                i.resolve(e)
            }, function(e) {
                t(function() {
                    throw e
                }), i.resolve(n)
            }), i.promise
        }, a.updateModel = function(n, i, s, u, c, l, d) {
            function f(r, o, c, d, f) {
                i.$$ngfPrevValidFiles = r, i.$$ngfPrevInvalidFiles = o;
                var p = r && r.length ? r[0] : null,
                    h = o && o.length ? o[0] : null;
                n && (a.applyModelValidation(n, r), n.$setViewValue(f ? p : r)), u && e(u)(s, {
                    $files: r,
                    $file: p,
                    $newFiles: c,
                    $duplicateFiles: d,
                    $invalidFiles: o,
                    $invalidFile: h,
                    $event: l
                });
                var g = a.attrGetter("ngfModelInvalid", i);
                g && t(function() {
                    e(g).assign(s, f ? h : o)
                }), t(function() {})
            }

            function p() {
                function e() {
                    t(function() {
                        f(w ? g.concat(b) : b, w ? m.concat(y) : y, c, v, A)
                    }, C && C.debounce ? C.debounce.change || C.debounce : 0)
                }
                var u = x ? h : b;
                (function(e, t, n, i) {
                    var s = a.attrGetter("ngfResize", t, n);
                    if (!s || !a.isResizeSupported() || !e.length) return a.emptyPromise();
                    if (s instanceof Function) {
                        var u = r.defer();
                        return s(e).then(function(r) {
                            o(r, e, t, n, i).then(function(e) {
                                u.resolve(e)
                            }, function(e) {
                                u.reject(e)
                            })
                        }, function(e) {
                            u.reject(e)
                        })
                    }
                    return o(s, e, t, n, i)
                })(u, i, s, n).then(function() {
                    x ? a.validate(h, w ? g.length : 0, n, i, s).then(function(t) {
                        b = t.validsFiles, y = t.invalidsFiles, e()
                    }) : e()
                }, function() {
                    for (var t = 0; t < u.length; t++) {
                        var n = u[t];
                        if ("resize" === n.$error) {
                            var r = b.indexOf(n);
                            r > -1 && (b.splice(r, 1), y.push(n)), e()
                        }
                    }
                })
            }
            var h, g, m, $, v = [],
                y = [],
                b = [];
            g = i.$$ngfPrevValidFiles || [], m = i.$$ngfPrevInvalidFiles || [], n && n.$modelValue && ($ = n.$modelValue, g = angular.isArray($) ? $ : [$]);
            var w = a.attrGetter("ngfKeep", i, s);
            h = (c || []).slice(0), ("distinct" === w || !0 === a.attrGetter("ngfKeepDistinct", i, s)) && function() {
                function e(e, t) {
                    return e.name === t.name && (e.$ngfOrigSize || e.size) === (t.$ngfOrigSize || t.size) && e.type === t.type
                }

                function t(t) {
                    var n;
                    for (n = 0; n < g.length; n++)
                        if (e(t, g[n])) return !0;
                    for (n = 0; n < m.length; n++)
                        if (e(t, m[n])) return !0;
                    return !1
                }
                if (c) {
                    h = [], v = [];
                    for (var n = 0; n < c.length; n++) t(c[n]) ? v.push(c[n]) : h.push(c[n])
                }
            }();
            var A = !w && !a.attrGetter("ngfMultiple", i, s) && !a.attrGetter("multiple", i);
            if (!w || h.length) {
                a.attrGetter("ngfBeforeModelChange", i, s, {
                    $files: c,
                    $file: c && c.length ? c[0] : null,
                    $newFiles: h,
                    $duplicateFiles: v,
                    $event: l
                });
                var x = a.attrGetter("ngfValidateAfterResize", i, s),
                    C = a.attrGetter("ngfModelOptions", i, s);
                a.validate(h, w ? g.length : 0, n, i, s).then(function(e) {
                    var t, n, o, u;
                    d ? f(h, [], c, v, A) : (C && C.allowInvalid || x ? b = h : (b = e.validFiles, y = e.invalidFiles), a.attrGetter("ngfFixOrientation", i, s) && a.isExifSupported() ? (t = b, n = i, o = s, u = [a.emptyPromise()], angular.forEach(t, function(e, r) {
                        0 === e.type.indexOf("image/jpeg") && a.attrGetter("ngfFixOrientation", n, o, {
                            $file: e
                        }) && u.push(a.happyPromise(a.applyExifRotation(e), e).then(function(e) {
                            t.splice(r, 1, e)
                        }))
                    }), r.all(u)).then(function() {
                        p()
                    }) : p())
                })
            }
        }, a
    }]), ngFileUpload.directive("ngfSelect", ["$parse", "$timeout", "$compile", "Upload", function(e, t, n, r) {
        function i(e, t, n, i, a, s, u, c) {
            function l() {
                return "input" === t[0].tagName.toLowerCase() && n.type && "file" === n.type.toLowerCase()
            }

            function d() {
                return h("ngfChange") || h("ngfSelect")
            }

            function f(t) {
                if (c.shouldUpdateOn("change", n, e)) {
                    var r = t.__files_ || t.target && t.target.files,
                        o = [];
                    if (!r) return;
                    for (var a = 0; a < r.length; a++) o.push(r[a]);
                    c.updateModel(i, n, e, d(), o.length ? o : null, t)
                }
            }

            function p(t) {
                c.shouldUpdateOn("click", n, e) && v.val() && (v.val(null), c.updateModel(i, n, e, d(), null, t, !0))
            }
            var h = function(e, t) {
                return c.attrGetter(e, n, t)
            };
            c.registerModelChangeValidator(i, n, e);
            var g = [];
            h("ngfMultiple") && g.push(e.$watch(h("ngfMultiple"), function() {
                v.attr("multiple", h("ngfMultiple", e))
            })), h("ngfCapture") && g.push(e.$watch(h("ngfCapture"), function() {
                v.attr("capture", h("ngfCapture", e))
            })), h("ngfAccept") && g.push(e.$watch(h("ngfAccept"), function() {
                v.attr("accept", h("ngfAccept", e))
            })), g.push(n.$observe("accept", function() {
                v.attr("accept", h("accept"))
            }));
            var m = 0,
                $ = 0,
                v = t;
            l() || (v = function() {
                if (l()) return t;
                var e = angular.element('<input type="file">'),
                    r = angular.element("<label>upload</label>");
                return r.css("visibility", "hidden").css("position", "absolute").css("overflow", "hidden").css("width", "0px").css("height", "0px").css("border", "none").css("margin", "0px").css("padding", "0px").attr("tabindex", "-1"),
                    function(e, r) {
                        function i(t) {
                            e.attr("id", "ngf-" + t), r.attr("id", "ngf-label-" + t)
                        }
                        for (var o = 0; o < t[0].attributes.length; o++) {
                            var a = t[0].attributes[o];
                            "type" !== a.name && "class" !== a.name && "style" !== a.name && ("id" === a.name ? (i(a.value), g.push(n.$observe("id", i))) : e.attr(a.name, a.value || "required" !== a.name && "multiple" !== a.name ? a.value : a.name))
                        }
                    }(e, r), o.push({
                        el: t,
                        ref: r
                    }), document.body.appendChild(r.append(e)[0]), e
            }()), v.bind("change", f), l() ? t.bind("click", p) : t.bind("click touchstart touchend", function(n) {
                if (t.attr("disabled")) return !1;
                if (!h("ngfSelectDisabled", e)) {
                    var i = function(e) {
                        var t = e.changedTouches || e.originalEvent && e.originalEvent.changedTouches;
                        if (t) {
                            if ("touchstart" === e.type) return $ = t[0].clientX, m = t[0].clientY, !0;
                            if ("touchend" === e.type) {
                                var n = t[0].clientX,
                                    r = t[0].clientY;
                                if (Math.abs(n - $) > 20 || Math.abs(r - m) > 20) return e.stopPropagation(), e.preventDefault(), !1
                            }
                            return !0
                        }
                    }(n);
                    if (null != i) return i;
                    p(n);
                    try {
                        l() || document.body.contains(v[0]) || (o.push({
                            el: t,
                            ref: v.parent()
                        }), document.body.appendChild(v.parent()[0]), v.bind("change", f))
                    } catch (e) {}
                    return function(e) {
                        var t = e.match(/Android[^\d]*(\d+)\.(\d+)/);
                        if (t && t.length > 2) {
                            var n = r.defaults.androidFixMinorVersion || 4;
                            return parseInt(t[1]) < 4 || parseInt(t[1]) === n && parseInt(t[2]) < n
                        }
                        return -1 === e.indexOf("Chrome") && /.*Windows.*Safari.*/.test(e)
                    }(navigator.userAgent) ? setTimeout(function() {
                        v[0].click()
                    }, 0) : v[0].click(), !1
                }
            }), -1 !== navigator.appVersion.indexOf("MSIE 10") && v.bind("click", function e(t) {
                if (v && !v.attr("__ngf_ie10_Fix_")) {
                    if (!v[0].parentNode) return void(v = null);
                    t.preventDefault(), t.stopPropagation(), v.unbind("click");
                    var n = v.clone();
                    return v.replaceWith(n), (v = n).attr("__ngf_ie10_Fix_", "true"), v.bind("change", f), v.bind("click", e), v[0].click(), !1
                }
                v.removeAttr("__ngf_ie10_Fix_")
            }), i && i.$formatters.push(function(e) {
                return (null == e || 0 === e.length) && v.val() && v.val(null), e
            }), e.$on("$destroy", function() {
                l() || v.parent().remove(), angular.forEach(g, function(e) {
                    e()
                })
            }), s(function() {
                for (var e = 0; e < o.length; e++) {
                    var t = o[e];
                    document.body.contains(t.el[0]) || (o.splice(e, 1), t.ref.remove())
                }
            }), window.FileAPI && window.FileAPI.ngfFixIE && window.FileAPI.ngfFixIE(t, v, f)
        }
        var o = [];
        return {
            restrict: "AEC",
            require: "?ngModel",
            link: function(e, n, o, a) {
                i(e, n, o, a, 0, t, 0, r)
            }
        }
    }]),
    function() {
        function e(e, t, n, r, i, o, a, s) {
            function u(o) {
                var a = e.attrGetter("ngfNoObjectUrl", i, n);
                e.dataUrl(o, a).finally(function() {
                    t(function() {
                        var e = (a ? o.$ngfDataUrl : o.$ngfBlobUrl) || o.$ngfDataUrl;
                        s ? r.css("background-image", "url('" + (e || "") + "')") : r.attr("src", e), e ? r.removeClass("ng-hide") : r.addClass("ng-hide")
                    })
                })
            }
            t(function() {
                var t = n.$watch(i[o], function(t) {
                    var c, l = a;
                    if ("ngfThumbnail" === o && (l || (l = {
                            width: r[0].naturalWidth || r[0].clientWidth,
                            height: r[0].naturalHeight || r[0].clientHeight
                        }), 0 === l.width && window.getComputedStyle)) {
                        var d = getComputedStyle(r[0]);
                        d.width && d.width.indexOf("px") > -1 && d.height && d.height.indexOf("px") > -1 && (l = {
                            width: parseInt(d.width.slice(0, -2)),
                            height: parseInt(d.height.slice(0, -2))
                        })
                    }
                    return angular.isString(t) ? (r.removeClass("ng-hide"), s ? r.css("background-image", "url('" + t + "')") : r.attr("src", t)) : void(!t || !t.type || 0 !== t.type.search((c = r[0], "img" === c.tagName.toLowerCase() ? "image" : "audio" === c.tagName.toLowerCase() ? "audio" : "video" === c.tagName.toLowerCase() ? "video" : /./)) || s && 0 !== t.type.indexOf("image") ? r.addClass("ng-hide") : l && e.isResizeSupported() ? (l.resizeIf = function(r, o) {
                        return e.attrGetter("ngfResizeIf", i, n, {
                            $width: r,
                            $height: o,
                            $file: t
                        })
                    }, e.resize(t, l).then(function(e) {
                        u(e)
                    }, function(e) {
                        throw e
                    })) : u(t))
                });
                n.$on("$destroy", function() {
                    t()
                })
            })
        }
        ngFileUpload.service("UploadDataUrl", ["UploadBase", "$timeout", "$q", function(e, t, n) {
            var r = e;
            return r.base64DataUrl = function(e) {
                if (angular.isArray(e)) {
                    var t = n.defer(),
                        i = 0;
                    return angular.forEach(e, function(n) {
                        r.dataUrl(n, !0).finally(function() {
                            if (++i === e.length) {
                                var n = [];
                                angular.forEach(e, function(e) {
                                    n.push(e.$ngfDataUrl)
                                }), t.resolve(n, e)
                            }
                        })
                    }), t.promise
                }
                return r.dataUrl(e, !0)
            }, r.dataUrl = function(e, i) {
                if (!e) return r.emptyPromise(e, e);
                if (i && null != e.$ngfDataUrl || !i && null != e.$ngfBlobUrl) return r.emptyPromise(i ? e.$ngfDataUrl : e.$ngfBlobUrl, e);
                var o = i ? e.$$ngfDataUrlPromise : e.$$ngfBlobUrlPromise;
                if (o) return o;
                var a = n.defer();
                return t(function() {
                    if (window.FileReader && e && (!window.FileAPI || -1 === navigator.userAgent.indexOf("MSIE 8") || e.size < 2e4) && (!window.FileAPI || -1 === navigator.userAgent.indexOf("MSIE 9") || e.size < 4e6)) {
                        var n = window.URL || window.webkitURL;
                        if (n && n.createObjectURL && !i) {
                            var o;
                            try {
                                o = n.createObjectURL(e)
                            } catch (n) {
                                return void t(function() {
                                    e.$ngfBlobUrl = "", a.reject()
                                })
                            }
                            t(function() {
                                if (e.$ngfBlobUrl = o, o) {
                                    a.resolve(o, e), r.blobUrls = r.blobUrls || [], r.blobUrlsTotalSize = r.blobUrlsTotalSize || 0, r.blobUrls.push({
                                        url: o,
                                        size: e.size
                                    }), r.blobUrlsTotalSize += e.size || 0;
                                    for (var t = r.defaults.blobUrlsMaxMemory || 268435456, i = r.defaults.blobUrlsMaxQueueSize || 200;
                                        (r.blobUrlsTotalSize > t || r.blobUrls.length > i) && r.blobUrls.length > 1;) {
                                        var s = r.blobUrls.splice(0, 1)[0];
                                        n.revokeObjectURL(s.url), r.blobUrlsTotalSize -= s.size
                                    }
                                }
                            })
                        } else {
                            var s = new FileReader;
                            s.onload = function(n) {
                                t(function() {
                                    e.$ngfDataUrl = n.target.result, a.resolve(n.target.result, e), t(function() {
                                        delete e.$ngfDataUrl
                                    }, 1e3)
                                })
                            }, s.onerror = function() {
                                t(function() {
                                    e.$ngfDataUrl = "", a.reject()
                                })
                            }, s.readAsDataURL(e)
                        }
                    } else t(function() {
                        e[i ? "$ngfDataUrl" : "$ngfBlobUrl"] = "", a.reject()
                    })
                }), (o = i ? e.$$ngfDataUrlPromise = a.promise : e.$$ngfBlobUrlPromise = a.promise).finally(function() {
                    delete e[i ? "$$ngfDataUrlPromise" : "$$ngfBlobUrlPromise"]
                }), o
            }, r
        }]), ngFileUpload.directive("ngfSrc", ["Upload", "$timeout", function(t, n) {
            return {
                restrict: "AE",
                link: function(r, i, o) {
                    e(t, n, r, i, o, "ngfSrc", t.attrGetter("ngfResize", o, r), !1)
                }
            }
        }]), ngFileUpload.directive("ngfBackground", ["Upload", "$timeout", function(t, n) {
            return {
                restrict: "AE",
                link: function(r, i, o) {
                    e(t, n, r, i, o, "ngfBackground", t.attrGetter("ngfResize", o, r), !0)
                }
            }
        }]), ngFileUpload.directive("ngfThumbnail", ["Upload", "$timeout", function(t, n) {
            return {
                restrict: "AE",
                link: function(r, i, o) {
                    var a = t.attrGetter("ngfSize", o, r);
                    e(t, n, r, i, o, "ngfThumbnail", a, t.attrGetter("ngfAsBackground", o, r))
                }
            }
        }]), ngFileUpload.config(["$compileProvider", function(e) {
            e.imgSrcSanitizationWhitelist && e.imgSrcSanitizationWhitelist(/^\s*(https?|ftp|mailto|tel|webcal|local|file|data|blob):/), e.aHrefSanitizationWhitelist && e.aHrefSanitizationWhitelist(/^\s*(https?|ftp|mailto|tel|webcal|local|file|data|blob):/)
        }]), ngFileUpload.filter("ngfDataUrl", ["UploadDataUrl", "$sce", function(e, t) {
            return function(n, r, i) {
                if (angular.isString(n)) return t.trustAsResourceUrl(n);
                var o = n && ((r ? n.$ngfDataUrl : n.$ngfBlobUrl) || n.$ngfDataUrl);
                return n && !o ? (!n.$ngfDataUrlFilterInProgress && angular.isObject(n) && (n.$ngfDataUrlFilterInProgress = !0, e.dataUrl(n, r)), "") : (n && delete n.$ngfDataUrlFilterInProgress, (n && o ? i ? t.trustAsResourceUrl(o) : o : n) || "")
            }
        }])
    }(), ngFileUpload.service("UploadValidate", ["UploadDataUrl", "$q", "$timeout", function(e, t, n) {
        var r = e;
        return r.validatePattern = function(e, t) {
            if (!t) return !0;
            var n = function e(t) {
                    var n = "",
                        r = [];
                    if (t.length > 2 && "/" === t[0] && "/" === t[t.length - 1]) n = t.substring(1, t.length - 1);
                    else {
                        var i = t.split(",");
                        if (i.length > 1)
                            for (var o = 0; o < i.length; o++) {
                                var a = e(i[o]);
                                a.regexp ? (n += "(" + a.regexp + ")", o < i.length - 1 && (n += "|")) : r = r.concat(a.excludes)
                            } else 0 === t.indexOf("!") ? r.push("^((?!" + e(t.substring(1)).regexp + ").)*$") : (0 === t.indexOf(".") && (t = "*" + t), n = (n = "^" + t.replace(new RegExp("[.\\\\+*?\\[\\^\\]$(){}=!<>|:\\-]", "g"), "\\$&") + "$").replace(/\\\*/g, ".*").replace(/\\\?/g, "."))
                    }
                    return {
                        regexp: n,
                        excludes: r
                    }
                }(t),
                r = !0;
            if (n.regexp && n.regexp.length) {
                var i = new RegExp(n.regexp, "i");
                r = null != e.type && i.test(e.type) || null != e.name && i.test(e.name)
            }
            for (var o = n.excludes.length; o--;) {
                var a = new RegExp(n.excludes[o], "i");
                r = r && (null == e.type || a.test(e.type)) && (null == e.name || a.test(e.name))
            }
            return r
        }, r.ratioToFloat = function(e) {
            var t = e.toString(),
                n = t.search(/[x:]/i);
            return n > -1 ? parseFloat(t.substring(0, n)) / parseFloat(t.substring(n + 1)) : parseFloat(t)
        }, r.registerModelChangeValidator = function(e, t, n) {
            e && e.$formatters.push(function(i) {
                if (e.$dirty) {
                    var o = i;
                    i && !angular.isArray(i) && (o = [i]), r.validate(o, 0, e, t, n).then(function() {
                        r.applyModelValidation(e, o)
                    })
                }
                return i
            })
        }, r.applyModelValidation = function(e, t) {
            var n;
            n = e, null == t || n.$dirty || (n.$setDirty ? n.$setDirty() : n.$dirty = !0), angular.forEach(e.$ngfValidations, function(t) {
                e.$setValidity(t.name, t.valid)
            })
        }, r.getValidationAttr = function(e, t, n, i, o) {
            var a = "ngf" + n[0].toUpperCase() + n.substr(1),
                s = r.attrGetter(a, e, t, {
                    $file: o
                });
            if (null == s && (s = r.attrGetter("ngfValidate", e, t, {
                    $file: o
                }))) {
                var u = (i || n).split(".");
                s = s[u[0]], u.length > 1 && (s = s && s[u[1]])
            }
            return s
        }, r.validate = function(e, n, i, o, a) {
            function s(t, n, s) {
                if (e) {
                    for (var u = e.length, c = null; u--;) {
                        var p = e[u];
                        if (p) {
                            var h = r.getValidationAttr(o, a, t, n, p);
                            null != h && (s(p, h, u) || (-1 === l.indexOf(t) ? (p.$error = t, (p.$errorMessages = p.$errorMessages || {})[t] = !0, p.$errorParam = h, -1 === f.indexOf(p) && f.push(p), d || e.splice(u, 1), c = !1) : e.splice(u, 1)))
                        }
                    }
                    null !== c && i.$ngfValidations.push({
                        name: t,
                        valid: c
                    })
                }
            }

            function u(n, s, u, p, h) {
                function g(t, r, i) {
                    function o(o) {
                        if (o())
                            if (-1 === l.indexOf(n)) {
                                if (r.$error = n, (r.$errorMessages = r.$errorMessages || {})[n] = !0, r.$errorParam = i, -1 === f.indexOf(r) && f.push(r), !d) {
                                    var a = e.indexOf(r);
                                    a > -1 && e.splice(a, 1)
                                }
                                t.resolve(!1)
                            } else {
                                var s = e.indexOf(r);
                                s > -1 && e.splice(s, 1), t.resolve(!0)
                            }
                        else t.resolve(!0)
                    }
                    null != i ? p(r, i).then(function(e) {
                        o(function() {
                            return !h(e, i)
                        })
                    }, function() {
                        o(function() {
                            return c("ngfValidateForce", {
                                $file: r
                            })
                        })
                    }) : t.resolve(!0)
                }
                var m = [r.emptyPromise(!0)];
                e && (e = void 0 === e.length ? [e] : e, angular.forEach(e, function(e) {
                    var i = t.defer();
                    return m.push(i.promise), !u || null != e.type && 0 === e.type.search(u) ? void("dimensions" === n && null != r.attrGetter("ngfDimensions", o) ? r.imageDimensions(e).then(function(t) {
                        g(i, e, c("ngfDimensions", {
                            $file: e,
                            $width: t.width,
                            $height: t.height
                        }))
                    }, function() {
                        i.resolve(!1)
                    }) : "duration" === n && null != r.attrGetter("ngfDuration", o) ? r.mediaDuration(e).then(function(t) {
                        g(i, e, c("ngfDuration", {
                            $file: e,
                            $duration: t
                        }))
                    }, function() {
                        i.resolve(!1)
                    }) : g(i, e, r.getValidationAttr(o, a, n, s, e))) : void i.resolve(!0)
                }));
                var $ = t.defer();
                return t.all(m).then(function(e) {
                    for (var t = !0, r = 0; r < e.length; r++)
                        if (!e[r]) {
                            t = !1;
                            break
                        }
                    i.$ngfValidations.push({
                        name: n,
                        valid: t
                    }), $.resolve(t)
                }), $.promise
            }(i = i || {}).$ngfValidations = i.$ngfValidations || [], angular.forEach(i.$ngfValidations, function(e) {
                e.valid = !0
            });
            var c = function(e, t) {
                    return r.attrGetter(e, o, a, t)
                },
                l = (r.attrGetter("ngfIgnoreInvalid", o, a) || "").split(" "),
                d = r.attrGetter("ngfRunAllValidations", o, a);
            if (null == e || 0 === e.length) return r.emptyPromise({
                validFiles: e,
                invalidFiles: []
            });
            e = void 0 === e.length ? [e] : e.slice(0);
            var f = [];
            s("pattern", null, r.validatePattern), s("minSize", "size.min", function(e, t) {
                return e.size + .1 >= r.translateScalars(t)
            }), s("maxSize", "size.max", function(e, t) {
                return e.size - .1 <= r.translateScalars(t)
            });
            var p = 0;
            if (s("maxTotalSize", null, function(t, n) {
                    return !((p += t.size) > r.translateScalars(n)) || (e.splice(0, e.length), !1)
                }), s("validateFn", null, function(e, t) {
                    return !0 === t || null === t || "" === t
                }), !e.length) return r.emptyPromise({
                validFiles: [],
                invalidFiles: f
            });
            var h = t.defer(),
                g = [];
            return g.push(u("maxHeight", "height.max", /image/, this.imageDimensions, function(e, t) {
                return e.height <= t
            })), g.push(u("minHeight", "height.min", /image/, this.imageDimensions, function(e, t) {
                return e.height >= t
            })), g.push(u("maxWidth", "width.max", /image/, this.imageDimensions, function(e, t) {
                return e.width <= t
            })), g.push(u("minWidth", "width.min", /image/, this.imageDimensions, function(e, t) {
                return e.width >= t
            })), g.push(u("dimensions", null, /image/, function(e, t) {
                return r.emptyPromise(t)
            }, function(e) {
                return e
            })), g.push(u("ratio", null, /image/, this.imageDimensions, function(e, t) {
                for (var n = t.toString().split(","), i = !1, o = 0; o < n.length; o++) Math.abs(e.width / e.height - r.ratioToFloat(n[o])) < .01 && (i = !0);
                return i
            })), g.push(u("maxRatio", "ratio.max", /image/, this.imageDimensions, function(e, t) {
                return e.width / e.height - r.ratioToFloat(t) < 1e-4
            })), g.push(u("minRatio", "ratio.min", /image/, this.imageDimensions, function(e, t) {
                return e.width / e.height - r.ratioToFloat(t) > -1e-4
            })), g.push(u("maxDuration", "duration.max", /audio|video/, this.mediaDuration, function(e, t) {
                return e <= r.translateScalars(t)
            })), g.push(u("minDuration", "duration.min", /audio|video/, this.mediaDuration, function(e, t) {
                return e >= r.translateScalars(t)
            })), g.push(u("duration", null, /audio|video/, function(e, t) {
                return r.emptyPromise(t)
            }, function(e) {
                return e
            })), g.push(u("validateAsyncFn", null, null, function(e, t) {
                return t
            }, function(e) {
                return !0 === e || null === e || "" === e
            })), t.all(g).then(function() {
                if (d)
                    for (var t = 0; t < e.length; t++) {
                        e[t].$error && e.splice(t--, 1)
                    }
                d = !1, s("maxFiles", null, function(e, t, r) {
                    return t > n + r
                }), h.resolve({
                    validFiles: e,
                    invalidFiles: f
                })
            }), h.promise
        }, r.imageDimensions = function(e) {
            if (e.$ngfWidth && e.$ngfHeight) {
                var i = t.defer();
                return n(function() {
                    i.resolve({
                        width: e.$ngfWidth,
                        height: e.$ngfHeight
                    })
                }), i.promise
            }
            if (e.$ngfDimensionPromise) return e.$ngfDimensionPromise;
            var o = t.defer();
            return n(function() {
                return 0 !== e.type.indexOf("image") ? void o.reject("not image") : void r.dataUrl(e).then(function(t) {
                    function r() {
                        var t = a[0].naturalWidth || a[0].clientWidth,
                            n = a[0].naturalHeight || a[0].clientHeight;
                        a.remove(), e.$ngfWidth = t, e.$ngfHeight = n, o.resolve({
                            width: t,
                            height: n
                        })
                    }

                    function i() {
                        a.remove(), o.reject("load error")
                    }
                    var a = angular.element("<img>").attr("src", t).css("visibility", "hidden").css("position", "fixed").css("max-width", "none !important").css("max-height", "none !important");
                    a.on("load", r), a.on("error", i);
                    var s = 0;
                    (function e() {
                        n(function() {
                            a[0].parentNode && (a[0].clientWidth ? r() : s++ > 10 ? i() : e())
                        }, 1e3)
                    })(), angular.element(document.getElementsByTagName("body")[0]).append(a)
                }, function() {
                    o.reject("load error")
                })
            }), e.$ngfDimensionPromise = o.promise, e.$ngfDimensionPromise.finally(function() {
                delete e.$ngfDimensionPromise
            }), e.$ngfDimensionPromise
        }, r.mediaDuration = function(e) {
            if (e.$ngfDuration) {
                var i = t.defer();
                return n(function() {
                    i.resolve(e.$ngfDuration)
                }), i.promise
            }
            if (e.$ngfDurationPromise) return e.$ngfDurationPromise;
            var o = t.defer();
            return n(function() {
                return 0 !== e.type.indexOf("audio") && 0 !== e.type.indexOf("video") ? void o.reject("not media") : void r.dataUrl(e).then(function(t) {
                    function r() {
                        var t = a[0].duration;
                        e.$ngfDuration = t, a.remove(), o.resolve(t)
                    }

                    function i() {
                        a.remove(), o.reject("load error")
                    }
                    var a = angular.element(0 === e.type.indexOf("audio") ? "<audio>" : "<video>").attr("src", t).css("visibility", "none").css("position", "fixed");
                    a.on("loadedmetadata", r), a.on("error", i);
                    var s = 0;
                    (function e() {
                        n(function() {
                            a[0].parentNode && (a[0].duration ? r() : s > 10 ? i() : e())
                        }, 1e3)
                    })(), angular.element(document.body).append(a)
                }, function() {
                    o.reject("load error")
                })
            }), e.$ngfDurationPromise = o.promise, e.$ngfDurationPromise.finally(function() {
                delete e.$ngfDurationPromise
            }), e.$ngfDurationPromise
        }, r
    }]), ngFileUpload.service("UploadResize", ["UploadValidate", "$q", function(e, t) {
        var n = e,
            r = function(e, r, i, o, a, s, u, c) {
                var l = t.defer(),
                    d = document.createElement("canvas"),
                    f = document.createElement("img");
                return f.setAttribute("style", "visibility:hidden;position:fixed;z-index:-100000"), document.body.appendChild(f), f.onload = function() {
                    var e, t, p, h, g, m = f.width,
                        $ = f.height;
                    if (f.parentNode.removeChild(f), null == c || !1 !== c(m, $)) try {
                        if (s) {
                            var v = n.ratioToFloat(s);
                            v > m / $ ? i = (r = m) / v : r = (i = $) * v
                        }
                        r || (r = m), i || (i = $);
                        var y = (e = m, t = $, p = r, h = i, g = u ? Math.max(p / e, h / t) : Math.min(p / e, h / t), {
                            width: e * g,
                            height: t * g,
                            marginX: e * g - p,
                            marginY: t * g - h
                        });
                        d.width = Math.min(y.width, r), d.height = Math.min(y.height, i), d.getContext("2d").drawImage(f, Math.min(0, -y.marginX / 2), Math.min(0, -y.marginY / 2), y.width, y.height), l.resolve(d.toDataURL(a || "image/WebP", o || .934))
                    } catch (e) {
                        l.reject(e)
                    } else l.reject("resizeIf")
                }, f.onerror = function() {
                    f.parentNode.removeChild(f), l.reject()
                }, f.src = e, l.promise
            };
        return n.dataUrltoBlob = function(e, t, n) {
            for (var r = e.split(","), i = r[0].match(/:(.*?);/)[1], o = atob(r[1]), a = o.length, s = new Uint8Array(a); a--;) s[a] = o.charCodeAt(a);
            var u = new window.Blob([s], {
                type: i
            });
            return u.name = t, u.$ngfOrigSize = n, u
        }, n.isResizeSupported = function() {
            var e = document.createElement("canvas");
            return window.atob && e.getContext && e.getContext("2d") && window.Blob
        }, n.isResizeSupported() && Object.defineProperty(window.Blob.prototype, "name", {
            get: function() {
                return this.$ngfName
            },
            set: function(e) {
                this.$ngfName = e
            },
            configurable: !0
        }), n.resize = function(e, i) {
            if (0 !== e.type.indexOf("image")) return n.emptyPromise(e);
            var o = t.defer();
            return n.dataUrl(e, !0).then(function(t) {
                r(t, i.width, i.height, i.quality, i.type || e.type, i.ratio, i.centerCrop, i.resizeIf).then(function(r) {
                    if ("image/jpeg" === e.type && !1 !== i.restoreExif) try {
                        r = n.restoreExif(t, r)
                    } catch (e) {
                        setTimeout(function() {
                            throw e
                        }, 1)
                    }
                    try {
                        var a = n.dataUrltoBlob(r, e.name, e.size);
                        o.resolve(a)
                    } catch (e) {
                        o.reject(e)
                    }
                }, function(t) {
                    "resizeIf" === t && o.resolve(e), o.reject(t)
                })
            }, function(e) {
                o.reject(e)
            }), o.promise
        }, n
    }]),
    function() {
        function e(e, n, r, i, o, a, s, u, c, l) {
            function d() {
                return n.attr("disabled") || g("ngfDropDisabled", e)
            }

            function f(t, n, i) {
                if (t) {
                    var o;
                    try {
                        o = t && t.getData && t.getData("text/html")
                    } catch (e) {}(function(t, n, i, o) {
                        function a(e, t) {
                            var n = l.defer();
                            if (null != e)
                                if (e.isDirectory) {
                                    var r = [u.emptyPromise()];
                                    if (f) {
                                        var i = {
                                            type: "directory"
                                        };
                                        i.name = i.path = (t || "") + e.name, p.push(i)
                                    }
                                    var o = e.createReader(),
                                        s = [],
                                        g = function() {
                                            o.readEntries(function(i) {
                                                try {
                                                    i.length ? (s = s.concat(Array.prototype.slice.call(i || [], 0)), g()) : (angular.forEach(s.slice(0), function(n) {
                                                        p.length <= c && d >= h && r.push(a(n, (t || "") + e.name + "/"))
                                                    }), l.all(r).then(function() {
                                                        n.resolve()
                                                    }, function(e) {
                                                        n.reject(e)
                                                    }))
                                                } catch (e) {
                                                    n.reject(e)
                                                }
                                            }, function(e) {
                                                n.reject(e)
                                            })
                                        };
                                    g()
                                } else e.file(function(e) {
                                    try {
                                        e.path = (t || "") + e.name, f && (e = u.rename(e, e.path)), p.push(e), h += e.size, n.resolve()
                                    } catch (e) {
                                        n.reject(e)
                                    }
                                }, function(e) {
                                    n.reject(e)
                                });
                            return n.promise
                        }
                        var c = u.getValidationAttr(r, e, "maxFiles");
                        null == c && (c = Number.MAX_VALUE);
                        var d = u.getValidationAttr(r, e, "maxTotalSize");
                        null == d && (d = Number.MAX_VALUE);
                        var f = g("ngfIncludeDir", e),
                            p = [],
                            h = 0,
                            m = [u.emptyPromise()];
                        if (t && t.length > 0 && "file:" !== s.location.protocol)
                            for (var $ = 0; $ < t.length; $++) {
                                if (t[$].webkitGetAsEntry && t[$].webkitGetAsEntry() && t[$].webkitGetAsEntry().isDirectory) {
                                    var v = t[$].webkitGetAsEntry();
                                    if (v.isDirectory && !i) continue;
                                    null != v && m.push(a(v))
                                } else {
                                    var y = t[$].getAsFile();
                                    null != y && (p.push(y), h += y.size)
                                }
                                if (p.length > c || h > d || !o && p.length > 0) break
                            } else if (null != n)
                                for (var b = 0; b < n.length; b++) {
                                    var w = n.item(b);
                                    if ((w.type || w.size > 0) && (p.push(w), h += w.size), p.length > c || h > d || !o && p.length > 0) break
                                }
                        var A = l.defer();
                        return l.all(m).then(function() {
                            if (o || f || !p.length) A.resolve(p);
                            else {
                                for (var e = 0; p[e] && "directory" === p[e].type;) e++;
                                A.resolve([p[e]])
                            }
                        }, function(e) {
                            A.reject(e)
                        }), A.promise
                    })(t.items, t.files, !1 !== g("ngfAllowDir", e), g("multiple") || g("ngfMultiple", e)).then(function(t) {
                        t.length ? p(t, n) : function(t, n) {
                            if (!u.shouldUpdateOn(t, r, e) || "string" != typeof n) return u.rejectPromise([]);
                            var i = [];
                            n.replace(/<(img src|img [^>]* src) *=\"([^\"]*)\"/gi, function(e, t, n) {
                                i.push(n)
                            });
                            var o = [],
                                a = [];
                            if (i.length) {
                                angular.forEach(i, function(e) {
                                    o.push(u.urlToBlob(e).then(function(e) {
                                        a.push(e)
                                    }))
                                });
                                var s = l.defer();
                                return l.all(o).then(function() {
                                    s.resolve(a)
                                }, function(e) {
                                    s.reject(e)
                                }), s.promise
                            }
                            return u.emptyPromise()
                        }(i, o).then(function(e) {
                            p(e, n)
                        })
                    })
                }
            }

            function p(t, n) {
                u.updateModel(i, r, e, g("ngfChange") || g("ngfDrop"), t, n)
            }
            var h = t(),
                g = function(e, t, n) {
                    return u.attrGetter(e, r, t, n)
                };
            if (g("dropAvailable") && a(function() {
                    e[g("dropAvailable")] ? e[g("dropAvailable")].value = h : e[g("dropAvailable")] = h
                }), h) {
                null == g("ngfSelect") && u.registerModelChangeValidator(i, r, e);
                var m, $ = null,
                    v = o(g("ngfStopPropagation")),
                    y = 1;
                n[0].addEventListener("dragover", function(t) {
                    if (!d() && u.shouldUpdateOn("drop", r, e)) {
                        if (t.preventDefault(), v(e) && t.stopPropagation(), navigator.userAgent.indexOf("Chrome") > -1) {
                            var i = t.dataTransfer.effectAllowed;
                            t.dataTransfer.dropEffect = "move" === i || "linkMove" === i ? "move" : "copy"
                        }
                        a.cancel($), m || (m = "C", function(e, t, n, r) {
                            var i = g("ngfDragOverClass", e, {
                                    $event: n
                                }),
                                o = "dragover";
                            if (angular.isString(i)) o = i;
                            else if (i && (i.delay && (y = i.delay), i.accept || i.reject)) {
                                var a = n.dataTransfer.items;
                                if (null != a && a.length)
                                    for (var s = i.pattern || g("ngfPattern", e, {
                                            $event: n
                                        }), c = a.length; c--;) {
                                        if (!u.validatePattern(a[c], s)) {
                                            o = i.reject;
                                            break
                                        }
                                        o = i.accept
                                    } else o = i.accept
                            }
                            r(o)
                        }(e, 0, t, function(r) {
                            m = r, n.addClass(m), g("ngfDrag", e, {
                                $isDragging: !0,
                                $class: m,
                                $event: t
                            })
                        }))
                    }
                }, !1), n[0].addEventListener("dragenter", function(t) {
                    !d() && u.shouldUpdateOn("drop", r, e) && (t.preventDefault(), v(e) && t.stopPropagation())
                }, !1), n[0].addEventListener("dragleave", function(t) {
                    !d() && u.shouldUpdateOn("drop", r, e) && (t.preventDefault(), v(e) && t.stopPropagation(), $ = a(function() {
                        m && n.removeClass(m), m = null, g("ngfDrag", e, {
                            $isDragging: !1,
                            $event: t
                        })
                    }, y || 100))
                }, !1), n[0].addEventListener("drop", function(t) {
                    !d() && u.shouldUpdateOn("drop", r, e) && (t.preventDefault(), v(e) && t.stopPropagation(), m && n.removeClass(m), m = null, f(t.dataTransfer, t, "dropUrl"))
                }, !1), n[0].addEventListener("paste", function(t) {
                    navigator.userAgent.toLowerCase().indexOf("firefox") > -1 && g("ngfEnableFirefoxPaste", e) && t.preventDefault(), !d() && u.shouldUpdateOn("paste", r, e) && f(t.clipboardData || t.originalEvent.clipboardData, t, "pasteUrl")
                }, !1), navigator.userAgent.toLowerCase().indexOf("firefox") > -1 && g("ngfEnableFirefoxPaste", e) && (n.attr("contenteditable", !0), n.on("keypress", function(e) {
                    e.metaKey || e.ctrlKey || e.preventDefault()
                }))
            } else !0 === g("ngfHideOnDropNotAvailable", e) && n.css("display", "none")
        }

        function t() {
            var e = document.createElement("div");
            return "draggable" in e && "ondrop" in e && !/Edge\/12./i.test(navigator.userAgent)
        }
        ngFileUpload.directive("ngfDrop", ["$parse", "$timeout", "$window", "Upload", "$http", "$q", function(t, n, r, i, o, a) {
            return {
                restrict: "AEC",
                require: "?ngModel",
                link: function(o, s, u, c) {
                    e(o, s, u, c, t, n, r, i, 0, a)
                }
            }
        }]), ngFileUpload.directive("ngfNoFileDrop", function() {
            return function(e, n) {
                t() && n.css("display", "none")
            }
        }), ngFileUpload.directive("ngfDropAvailable", ["$parse", "$timeout", "Upload", function(e, n, r) {
            return function(i, o, a) {
                if (t()) {
                    var s = e(r.attrGetter("ngfDropAvailable", a));
                    n(function() {
                        s(i), s.assign && s.assign(i, !0)
                    })
                }
            }
        }])
    }(), ngFileUpload.service("UploadExif", ["UploadResize", "$q", function(e, t) {
        var n = e;
        return n.isExifSupported = function() {
            return window.FileReader && (new FileReader).readAsArrayBuffer && n.isResizeSupported()
        }, n.readOrientation = function(e) {
            var n = t.defer(),
                r = new FileReader,
                i = e.slice ? e.slice(0, 65536) : e;
            return r.readAsArrayBuffer(i), r.onerror = function(e) {
                return n.reject(e)
            }, r.onload = function(e) {
                var t = {
                        orientation: 1
                    },
                    r = new DataView(this.result);
                if (65496 !== r.getUint16(0, !1)) return n.resolve(t);
                for (var i = r.byteLength, o = 2; i > o;) {
                    var a = r.getUint16(o, !1);
                    if (o += 2, 65505 === a) {
                        if (1165519206 !== r.getUint32(o += 2, !1)) return n.resolve(t);
                        var s = 18761 === r.getUint16(o += 6, !1);
                        o += r.getUint32(o + 4, s);
                        var u = r.getUint16(o, s);
                        o += 2;
                        for (var c = 0; u > c; c++)
                            if (274 === r.getUint16(o + 12 * c, s)) {
                                var l = r.getUint16(o + 12 * c + 8, s);
                                return l >= 2 && 8 >= l && (r.setUint16(o + 12 * c + 8, 1, s), t.fixedArrayBuffer = e.target.result), t.orientation = l, n.resolve(t)
                            }
                    } else {
                        if (65280 != (65280 & a)) break;
                        o += r.getUint16(o, !1)
                    }
                }
                return n.resolve(t)
            }, n.promise
        }, n.applyExifRotation = function(e) {
            if (0 !== e.type.indexOf("image/jpeg")) return n.emptyPromise(e);
            var r = t.defer();
            return n.readOrientation(e).then(function(t) {
                return t.orientation < 2 || t.orientation > 8 ? r.resolve(e) : void n.dataUrl(e, !0).then(function(i) {
                    var o = document.createElement("canvas"),
                        a = document.createElement("img");
                    a.onload = function() {
                        try {
                            o.width = t.orientation > 4 ? a.height : a.width, o.height = t.orientation > 4 ? a.width : a.height;
                            var i = o.getContext("2d");
                            (function(e, t, n, r) {
                                switch (t) {
                                    case 2:
                                        return e.transform(-1, 0, 0, 1, n, 0);
                                    case 3:
                                        return e.transform(-1, 0, 0, -1, n, r);
                                    case 4:
                                        return e.transform(1, 0, 0, -1, 0, r);
                                    case 5:
                                        return e.transform(0, 1, 1, 0, 0, 0);
                                    case 6:
                                        return e.transform(0, 1, -1, 0, r, 0);
                                    case 7:
                                        return e.transform(0, -1, -1, 0, r, n);
                                    case 8:
                                        e.transform(0, -1, 1, 0, 0, n)
                                }
                            })(i, t.orientation, a.width, a.height), i.drawImage(a, 0, 0);
                            var s = o.toDataURL(e.type || "image/WebP", .934);
                            s = n.restoreExif(function(e) {
                                for (var t = "", n = new Uint8Array(e), r = n.byteLength, i = 0; r > i; i++) t += String.fromCharCode(n[i]);
                                return window.btoa(t)
                            }(t.fixedArrayBuffer), s);
                            var u = n.dataUrltoBlob(s, e.name);
                            r.resolve(u)
                        } catch (e) {
                            return r.reject(e)
                        }
                    }, a.onerror = function() {
                        r.reject()
                    }, a.src = i
                }, function(e) {
                    r.reject(e)
                })
            }, function(e) {
                r.reject(e)
            }), r.promise
        }, n.restoreExif = function(e, t) {
            var n = {
                KEY_STR: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
                encode64: function(e) {
                    var t, n, r, i, o, a = "",
                        s = "",
                        u = "",
                        c = 0;
                    do {
                        r = (t = e[c++]) >> 2, i = (3 & t) << 4 | (n = e[c++]) >> 4, o = (15 & n) << 2 | (s = e[c++]) >> 6, u = 63 & s, isNaN(n) ? o = u = 64 : isNaN(s) && (u = 64), a = a + this.KEY_STR.charAt(r) + this.KEY_STR.charAt(i) + this.KEY_STR.charAt(o) + this.KEY_STR.charAt(u), t = n = s = "", r = i = o = u = ""
                    } while (c < e.length);
                    return a
                },
                restore: function(e, t) {
                    e.match("data:image/jpeg;base64,") && (e = e.replace("data:image/jpeg;base64,", ""));
                    var n = this.decode64(e),
                        r = this.slice2Segments(n),
                        i = this.exifManipulation(t, r);
                    return "data:image/jpeg;base64," + this.encode64(i)
                },
                exifManipulation: function(e, t) {
                    var n = this.getExifArray(t),
                        r = this.insertExif(e, n);
                    return new Uint8Array(r)
                },
                getExifArray: function(e) {
                    for (var t, n = 0; n < e.length; n++)
                        if (255 === (t = e[n])[0] & 225 === t[1]) return t;
                    return []
                },
                insertExif: function(e, t) {
                    var n = e.replace("data:image/jpeg;base64,", ""),
                        r = this.decode64(n),
                        i = r.indexOf(255, 3),
                        o = r.slice(0, i),
                        a = r.slice(i),
                        s = o;
                    return (s = s.concat(t)).concat(a)
                },
                slice2Segments: function(e) {
                    for (var t = 0, n = []; !(255 === e[t] & 218 === e[t + 1]);) {
                        if (255 === e[t] & 216 === e[t + 1]) t += 2;
                        else {
                            var r = t + (256 * e[t + 2] + e[t + 3]) + 2,
                                i = e.slice(t, r);
                            n.push(i), t = r
                        }
                        if (t > e.length) break
                    }
                    return n
                },
                decode64: function(e) {
                    var t, n, r, i, o = "",
                        a = "",
                        s = 0,
                        u = [];
                    /[^A-Za-z0-9\+\/\=]/g.exec(e) && console.log("There were invalid base64 characters in the input text.\nValid base64 characters are A-Z, a-z, 0-9, NaNExpect errors in decoding."), e = e.replace(/[^A-Za-z0-9\+\/\=]/g, "");
                    do {
                        t = this.KEY_STR.indexOf(e.charAt(s++)) << 2 | (r = this.KEY_STR.indexOf(e.charAt(s++))) >> 4, n = (15 & r) << 4 | (i = this.KEY_STR.indexOf(e.charAt(s++))) >> 2, o = (3 & i) << 6 | (a = this.KEY_STR.indexOf(e.charAt(s++))), u.push(t), 64 !== i && u.push(n), 64 !== a && u.push(o), t = n = o = "", r = i = a = ""
                    } while (s < e.length);
                    return u
                }
            };
            return n.restore(e, t)
        }, n
    }]), angular.module("siteBuilder.public", ["ngMessages", "ngCookies", "ngFileUpload"]), angular.module("siteBuilder.public").service("$analytics", [function() {
        var e = this;
        e.event = function(e, t, n, r) {
            "function" == typeof gtag && gtag("event", e, {
                event_category: t,
                event_label: n,
                value: r
            })
        }, e.submitForm = function() {
            e.event("submit-form", "forms")
        }, e.postRating = function() {
            e.event("post-rating", "blog")
        }, e.postCommenting = function() {
            e.event("post-commenting", "blog")
        }, e.postCommentsLike = function() {
            e.event("post-comments-like", "blog")
        }, e.postCommentsDislike = function() {
            e.event("post-comments-dislike", "blog")
        }, e.productQuickView = function(t) {
            e.event("product-quick-view", "store", t)
        }, e.productRating = function() {
            e.event("product-rating", "store")
        }, e.productCommenting = function() {
            e.event("product-commenting", "store")
        }, e.productCommentsLike = function() {
            e.event("product-comments-like", "store")
        }, e.productCommentsDisike = function() {
            e.event("product-comments-dislike", "store")
        }, e.addToWhislist = function(t) {
            e.event("add-to-wishlist", "store", t)
        }, e.addToCart = function(t) {
            e.event("add-to-cart", "store", t)
        }, e.checkout = function(t) {
            e.event("checkout", "store", null, t)
        }, e.search = function(t) {
            e.event("search", "site", t)
        }, e.subscribe = function() {
            e.event("subscribe", "site")
        }, e.contact = function() {
            e.event("contact", "site")
        }, e.createWebsite = function(t, n) {
            e.event("create-website", "site", t), e.event("create-website-succeed", "site", n)
        }, e.whois = function() {
            e.event("whois-domain", "site")
        }, e.signin = function() {
            e.event("signin", "users")
        }, e.signup = function(t) {
            e.event("signup", "users", t)
        }, e.recoveryPassword = function() {
            e.event("recovery-pass", "users")
        }
    }]), angular.module("siteBuilder.public").service("$blog", ["$http", function(e) {
        var t = "/site/api/v1/blog";
        this.rating = function(n, r) {
            return e.post(t + "/posts/" + n + "/rating", {
                rate: r
            })
        }, this.createComment = function(n) {
            return e.post(t + "/comments", n)
        }, this.like = function(n) {
            return e.post(t + "/comments/" + n + "/up", {
                like: !0
            })
        }, this.dislike = function(n) {
            return e.post(t + "/comments/" + n + "/down", {
                dislike: !0
            })
        }
    }]), angular.module("siteBuilder.public").service("$cart", ["$http", function(e) {
        var t = "/site/api/v1/cart";
        this.get = function(n) {
            return e.get(t, {
                params: n
            })
        }, this.getDetails = function(n) {
            return e.get(t + "/details", {
                params: {
                    token: n
                }
            })
        }, this.getShippings = function(n) {
            return e.get(t + "/shippings", {
                params: {
                    token: n
                }
            })
        }, this.getGateways = function(n) {
            return e.get(t + "/gateways", {
                params: n
            })
        }, this.getOnlineGateways = function(n) {
            return e.get(t + "/gateways/online", {
                params: n
            })
        }, this.addProduct = function(n, r) {
            return e.post(t, {
                quantity: r,
                variant_id: n
            })
        }, this.remove = function() {
            return e.delete(t)
        }, this.removeItem = function(n) {
            return e.delete(t + "/" + n)
        }, this.updateItem = function(n, r) {
            return e.put(t + "/" + n, {
                quantity: r
            })
        }, this.addCoupon = function(n) {
            return e.post(t + "/coupons", n)
        }, this.removeCoupon = function(n) {
            return e.delete(t + "/coupons", {
                params: {
                    code: n
                }
            })
        }, this.sync = function() {
            return e.patch(t)
        }, this.update = function(n) {
            return e.put(t, n)
        }, this.checkout = function(n) {
            return e.post(t + "/checkout", n)
        }, this.shipping = function(n) {
            return e.post(t + "/shipping", n)
        }, this.bank = function(n) {
            return e.post(t + "/payment", n)
        }, this.online_payment = function(n) {
            return e.post(t + "/payment/online", n)
        }, this.cash_on_delivery = function(n) {
            return e.post(t + "/payment/cod", n)
        }, this.wallet = function(n) {
            return e.post(t + "/payment/wallet", n)
        }
    }]), angular.module("siteBuilder.public").service("$user.documents", ["$http", "Upload", function(e, t) {
        var n = "/site/api/v1/user/documents";
        this.create = function(t) {
            return e.post(n, t)
        }, this.upload = function(e) {
            return t.upload({
                url: n + "/file",
                data: {
                    file: e
                }
            })
        }
    }]), angular.module("siteBuilder.public").service("$mapping", ["$http", function(e) {
        var t = "/site/api/v1/mapping";
        this.getCountries = function(n, r) {
            return e.get(t + "/countries", {
                params: {
                    include: n,
                    exclude: r
                }
            })
        }, this.getStates = function(n) {
            return e.get(t + "/states", {
                params: {
                    country_id: n
                }
            })
        }, this.getCities = function(n) {
            return e.get(t + "/cities", {
                params: {
                    state_id: n
                }
            })
        }
    }]);
var memoryStorage = {};
angular.module("siteBuilder.public").service("$memory", [function() {
    var e = this;
    e.set = function(t, n) {
        var r = void 0 === n ? e.generateName() : n;
        return memoryStorage[r] = JSON.stringify(t), r
    }, e.get = function(e) {
        return JSON.parse(memoryStorage[void 0 === e ? "none" : e] || "{}")
    }, e.generateName = function() {
        return "obj" + parseInt(1e6 * Math.random())
    }
}]), angular.module("siteBuilder.public").service("$packages", ["$http", function(e) {
    var t = "/site/api/v1/packages";
    this.get = function(n) {
        return e.get(t, n)
    }, this.getSingle = function(n) {
        return e.get(t + "/" + n)
    }
}]), angular.module("siteBuilder.public").service("$search", ["$http", function(e) {
    this.get = function(t) {
        return e.get("/site/api/v1/search", {
            params: t
        })
    }
}]), angular.module("siteBuilder.public").service("$store", ["$http", function(e) {
    var t = "/site/api/v1/store";
    this.getProduct = function(n) {
        return e.get(t + "/products/" + n)
    }, this.rating = function(n, r) {
        return e.post(t + "/products/" + n + "/rating", {
            rate: r
        })
    }, this.createComment = function(n) {
        return e.post(t + "/comments", n)
    }, this.like = function(n) {
        return e.post(t + "/comments/" + n + "/up", {
            like: !0
        })
    }, this.dislike = function(n) {
        return e.post(t + "/comments/" + n + "/down", {
            dislike: !0
        })
    }
}]), angular.module("siteBuilder.public").service("$submissions", ["$http", "Upload", function(e, t) {
    var n = "/site/api/v1/submissions";
    this.submit = function(e, r) {
        return t.upload({
            url: n + "?id=" + e,
            data: r
        })
    }, this.contact = function(e) {
        return t.upload({
            url: n + "/contact",
            data: e
        })
    }, this.subscribe = function(t) {
        return e.post(n + "/subscribe", t)
    }
}]), angular.module("siteBuilder.public").service("$user", ["$http", function(e) {
    var t = "/site/api/v1/user";
    this.get = function(n) {
        return e.get(t, n)
    }, this.getProfile = function(n) {
        return e.get(t + "/profile", n)
    }, this.validate = function(n) {
        return e.post(t + "/validate", n)
    }, this.signin = function(n) {
        return e.post(t + "/signin", n)
    }, this.signup = function(n) {
        return e.post(t + "/signup", n)
    }, this.recoveryPassword = function(n) {
        return e.post(t + "/recoverypass", n)
    }, this.recoveryPassword_confirm = function(n) {
        return e.post(t + "/recoverypass/confirm", n)
    }
}]), angular.module("siteBuilder.public").service("$websites", ["$http", function(e) {
    this.create = function(t) {
        return e.post("/site/api/v1/user/websites", t)
    }
}]), angular.module("siteBuilder.public").service("$whois", ["$http", function(e) {
    this.get = function(t) {
        return e.post("/site/api/v1/whois", t)
    }
}]), angular.module("siteBuilder.public").service("$wishes", ["$http", function(e) {
    this.add = function(t) {
        return e.post("/site/api/v1/user/wishes", t)
    }
}]), angular.module("siteBuilder.public").directive("cedarmaps", ["$timeout", function(e) {
    return {
        restrict: "A",
        scope: {
            ngModel: "="
        },
        link: function(t, n) {
            e(function() {
                if (null != L) {
                    var e = L.cedarmaps.map("map", "https://api.cedarmaps.com/v1/tiles/cedarmaps.streets.json?access_token=ac2e0dec165280a54666bb8e13ebf7f0453340b1", {
                        scrollWheelZoom: !0
                    });
                    e.setView(t.ngModel.latitude && t.ngModel.longitude ? [t.ngModel.latitude, t.ngModel.longitude] : [32.4279099, 53.6880455], t.ngModel.zoom ? t.ngModel.zoom : 5);
                    var r = L.marker(e.getCenter(), {
                        icon: L.icon({
                            iconSize: [32, 32],
                            iconAnchor: [16, 32],
                            iconUrl: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAABRFBMVEUAAADfAADfAADfAADeAADeAADeAADjAADdAADeAADeAADeAADcAADgAADeAADeAADeAADgAADeAADfAADfAADeAADeAADbAAD/AADeAADeAADdAADeAADeAADfAADVAADbAADdAADeAADdAADZAADbAADfAADfAADeAADdAADeAADfAADeAADeAADeAADeAADdAADdAADeAADdAADgAADeAADdAADdAADeAADeAADeAADeAADeAADeAADdAADhAADeAADdAAD/AADeAADeAADeAADeAADdAADeAADcAADeAADfAADfAADdAADeAADcAADdAADeAADcAADdAADeAADfAADeAADgAADdAADmAADeAADoAADfAADeAADeAADfAADeAADdAADjAADdAADfAAC/AADeAADfAADeAADeAADeAAAAAACtwwHMAAAAanRSTlMAGGe12PQXEoj3+ZkWMeLmNkn2Ryjw8isC0M7NXeBXBgdZ4VsUFcwg9R7+YJOVXntKTHqQMoVDRIRlg2Mv6g8R7C0B27K02oHDLC7FfyahJLazMzWxrfopiQrdC0iUkQjS1QlaXwS6EMvK4vvYmwAAAAFiS0dEAIgFHUgAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAAHdElNRQfjCQcHDzUYp1ctAAABP0lEQVQ4y32S51bCQBCFRyAqKBZQxCDGiriKDbH3HlTsvRdA9/0fwMNssi3B+2u/e+/m5MwOgFBDIBgyjFAw0Ah+amoOU0eRllZvHm2jkto79LwzTBXF4mre1U01JXrkPNnr2qaZcI6ppFToY1663wIYGBxiNCwVTHTMEUaj7HsZkY+hkR3nHKsx4QwTWJgUN3JoTHGeRp4RhVk05jjnkaOiMI9GnnMBeUEUFtFY4ryMvALajVXOa8jrGy5vbqGxzQs7u2jsWQytfcQDaVCHbHZHdg2Kx4xOpMKpM3+SKZVS7vlMfq1z6tGF8tyXRM/JlboQ13rhRtso+1bNI3f6zt2rhYKew8OjnKefPAV4lv6TxMFHL6Lw6pfD27ubf3z6FqCYZblhQx19scI31FVO202PyhVKK+V/ClD9+a2qzh+/JaOJWCV6+wAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAxOS0wOS0wN1QwNzoxNTo1MyswMDowMNR0foIAAAAldEVYdGRhdGU6bW9kaWZ5ADIwMTktMDktMDdUMDc6MTU6NTMrMDA6MDClKcY+AAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAAAABJRU5ErkJggg==",
                            shadowUrl: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACkAAAApCAQAAAACach9AAACMUlEQVR4Ae3ShY7jQBAE0Aoz/f9/HTMzhg1zrdKUrJbdx+Kd2nD8VNudfsL/Th///dyQN2TH6f3y/BGpC379rV+S+qqetBOxImNQXL8JCAr2V4iMQXHGNJxeCfZXhSRBcQMfvkOWUdtfzlLgAENmZDcmo2TVmt8OSM2eXxBp3DjHSMFutqS7SbmemzBiR+xpKCNUIRkdkkYxhAkyGoBvyQFEJEefwSmmvBfJuJ6aKqKWnAkvGZOaZXTUgFqYULWNSHUckZuR1HIIimUExutRxwzOLROIG4vKmCKQt364mIlhSyzAf1m9lHZHJZrlAOMMztRRiKimp/rpdJDc9Awry5xTZCte7FHtuS8wJgeYGrex28xNTd086Dik7vUMscQOa8y4DoGtCCSkAKlNwpgNtphjrC6MIHUkR6YWxxs6Sc5xqn222mmCRFzIt8lEdKx+ikCtg91qS2WpwVfBelJCiQJwvzixfI9cxZQWgiSJelKnwBElKYtDOb2MFbhmUigbReQBV0Cg4+qMXSxXSyGUn4UbF8l+7qdSGnTC0XLCmahIgUHLhLOhpVCtw4CzYXvLQWQbJNmxoCsOKAxSgBJno75avolkRw8iIAFcsdc02e9iyCd8tHwmeSSoKTowIgvscSGZUOA7PuCN5b2BX9mQM7S0wYhMNU74zgsPBj3HU7wguAfnxxjFQGBE6pwN+GjME9zHY7zGp8wVxMShYX9NXvEWD3HbwJf4giO4CFIQxXScH1/TM+04kkBiAAAAAElFTkSuQmCC",
                            shadowSize: [41, 41],
                            shadowAnchor: [15, 41]
                        })
                    });
                    r.addTo(e), e.on("move", function() {
                        r.setLatLng(e.getCenter())
                    }), e.on("dragend", function() {
                        t.$apply(function(e) {
                            if (null != e.ngModel) {
                                var t = r.getLatLng();
                                angular.extend(e.ngModel, {
                                    latitude: t.lat,
                                    longitude: t.lng
                                })
                            }
                        })
                    }), t.$on("cart.checkout.location.changed", function() {
                        null != t.ngModel.latitude && null != t.ngModel.longitude && e.flyTo(L.latLng(t.ngModel.latitude, t.ngModel.longitude), t.ngModel.zoom ? t.ngModel.zoom : 13)
                    })
                } else n.hide()
            }, 1e3)
        }
    }
}]), angular.module("siteBuilder.public").directive("mappingCity", ["$mapping", function(e) {
    return {
        require: "ngModel",
        restrict: "A",
        scope: {
            value: "=ngModel",
            state: "=mappingCity"
        },
        link: function(t, n, r, i) {
            function o() {
                if (delete t.$parent.cities, t.state) {
                    var n = e.getCities(t.state);
                    t.$parent.citiesLoading = !0, n.then(function(e) {
                        t.$parent.cities = e.data.cities, t.$parent.citiesLoading = !1
                    })
                }
            }
            o(), t.$watch("state", function() {
                i.$setPristine(!1), o()
            })
        }
    }
}]), angular.module("siteBuilder.public").directive("compare", function() {
    return {
        require: "ngModel",
        restrict: "A",
        scope: {
            compareValue: "=compare"
        },
        link: function(e, t, n, r) {
            r.$validators.compare = function(t) {
                return t == e.compareValue
            }, e.$watch("compareValue", function() {
                r.$validate()
            })
        }
    }
}), angular.module("siteBuilder.public").directive("clickConfirm", function() {
    return {
        priority: -1,
        restrict: "A",
        scope: !1,
        link: function(e, t, n) {
            t.bind("click", function(e) {
                n.clickConfirm && !confirm(n.clickConfirm) && (e.stopImmediatePropagation(), e.preventDefault())
            })
        }
    }
}), angular.module("siteBuilder.public").directive("figureContent", function() {
    return {
        priority: 5e3,
        restrict: "C",
        link: function(e, t, n) {
            t.find("table").each(function(e, t) {
                var r = angular.element(t);
                r.attr("class") || r.addClass(n.tableCss || "table table-bordered table-striped table-hover table-sm")
            })
        }
    }
}), angular.module("siteBuilder.public").directive("countDown", ["$interval", function(e) {
    return {
        priority: 5e3,
        restrict: "CAE",
        scope: !0,
        link: function(t, n, r) {
            var i = parseFloat(r.countDown || r.total) || 0;
            if (!(i < 1)) {
                a();
                var o = e(a, 1e3);
                t.$on("$destroy", function() {
                    e.cancel(o)
                })
            }

            function a() {
                t.days = Math.floor(i / 86400), t.hours = Math.floor(i / 3600 % 24), t.minutes = Math.floor(i / 60 % 60), t.seconds = Math.floor(i % 60), i = i > 0 ? i - 1 : 0
            }
        }
    }
}]), angular.module("siteBuilder.public").directive("mappingCountry", ["$mapping", function(e) {
    return {
        restrict: "A",
        scope: {
            include: "@",
            exclude: "@"
        },
        link: function(t, n, r) {
            delete t.$parent.countries;
            var i = e.getCountries(t.include, t.exclude);
            t.$parent.countriesLoading = !0, i.then(function(e) {
                t.$parent.countries = e.data.countries, t.$parent.countriesLoading = !1
            })
        }
    }
}]), angular.module("siteBuilder.public").directive("invariantCulture", function() {
    return {
        priority: 0,
        restrict: "A",
        require: "ngModel",
        link: function(e, t, n, r) {
            r.$parsers.push(function(e) {
                return null != e && (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = e.replace(/\u06F1/g, "1")).replace(/\u06F2/g, "2")).replace(/\u06F3/g, "3")).replace(/\u06F4/g, "4")).replace(/\u06F5/g, "5")).replace(/\u06F6/g, "6")).replace(/\u06F7/g, "7")).replace(/\u06F8/g, "8")).replace(/\u06F9/g, "9")).replace(/\u06F0/g, "0")).replace(/\u0661/g, "1")).replace(/\u0662/g, "2")).replace(/\u0663/g, "3")).replace(/\u0664/g, "4")).replace(/\u0665/g, "5")).replace(/\u0666/g, "6")).replace(/\u0667/g, "7")).replace(/\u0668/g, "8")).replace(/\u0669/g, "9")).replace(/\u0660/g, "0")), e
            })
        }
    }
}), angular.module("siteBuilder.public").directive("editDialog", function() {
    return {
        priority: 5e3,
        restrict: "A",
        link: function(e, t, n) {
            if ("function" == typeof angular.element().modal && t.hasClass("modal")) {
                var r = "modal-" + Math.floor(1e8 * Math.random() + 1);
                t.attr("id", r), angular.element(document).on("click", ".edit-link", function(e) {
                    angular.element(window).width() <= 991 || (t.find(".modal-content").html('<iframe src="' + angular.element(e.currentTarget).attr("href") + "?modal=true&modal_id=" + r + '" scrolling="no" style="border:0;width:100%;"></iframe>'), e.preventDefault(), t.modal("show"))
                }), t.on("hide.bs.modal", function(e) {
                    t.find(".modal-content").html("")
                })
            }
        }
    }
}), angular.module("siteBuilder.public").directive("eval", ["$timeout", function(e) {
    return {
        priority: -100,
        restrict: "A",
        link: function(t, n, r) {
            e(function() {
                t.$eval(r.eval)
            }, 100)
        }
    }
}]), angular.module("siteBuilder.public").directive("autoFocus", ["$timeout", function(e) {
    return {
        priority: 5e3,
        restrict: "A",
        link: function(t, n, r) {
            e(function() {
                n.focus()
            }, parseInt(r.autoFocus || 500))
        }
    }
}]), angular.module("siteBuilder.public").directive("dynamicForm", ["$timeout", "$memory", "$window", function(e, t, n) {
    function r(t) {
        e(function() {
            t.find(".ng-invalid:input:visible:first").focus()
        }, 50)
    }
    return {
        priority: 5e3,
        restrict: "A",
        link: function(e, t, n) {
            var i = e[n.dynamicForm ? n.dynamicForm : n.name ? n.name : "form"];
            void 0 !== i && (e.validation = null, e.dynamicForm = i, t.bind("submit", function() {
                for (var n in delete e.validation, i) 0 == n.startsWith("$") && i[n].$setValidity("server", !0);
                r(t)
            }), e.focus = r.bind(null, t))
        }
    }
}]), angular.module("siteBuilder.public").directive("imageLoad", function() {
    return {
        restrict: "A",
        link: function(e, t, n) {
            t.bind("load", function() {
                t.addClass("loading-completed"), n.imageLoad && e.$apply(n.imageLoad)
            }), t.bind("error", function() {
                t.addClass("loading-error"), n.imageLoadError ? e.$apply(n.imageLoadError) : n.imageLoad && e.$apply(n.imageLoad)
            })
        }
    }
}), angular.module("siteBuilder.public").directive("magnific", function() {
    return {
        priority: 5e3,
        restrict: "AC",
        link: function(e, t, n) {
            "function" == typeof angular.element().magnificPopup && t.find("[magnific-preview]").filter(function() {
                return /\.(jpg|jpeg|gif|tiff|bmp|png)$/i.test(this.getAttribute("href"))
            }).magnificPopup({
                type: "image",
                gallery: {
                    enabled: !0
                }
            })
        }
    }
}), angular.module("siteBuilder.public").directive("ngModel", function() {
    return {
        priority: 5e4,
        restrict: "A",
        link: function(e, t, n, r) {
            null != n.value && null == r && (0 == t.is("input[type=text]") && 0 == t.is("textarea") || e.$eval(n.ngModel + "='" + n.value.replace(/([\\'])/gi, "\\$1") + "'"))
        }
    }
}), angular.module("siteBuilder.public").directive("navbarMenu", ["$timeout", function(e) {
    return {
        priority: 5e3,
        restrict: "A",
        link: function(t, n, r) {
            var i = 0;

            function o(e) {
                var t = angular.element(e.currentTarget).closest(".nav-item, .nav-subset-item");
                if (t.length > 0) {
                    if (t.find(".nav-subset").length < 1) return;
                    if (t.hasClass("expanded")) return;
                    t.parents(".nav-item, .nav-subset-item").addClass("ignore"), a(), i++, t.addClass("expanded"), e.stopPropagation(), e.preventDefault()
                }
            }

            function a() {
                i && n.find(".nav-item.expanded, .nav-subset-item.expanded").each(function() {
                    var e = angular.element(this);
                    if (0 == e.hasClass("ignore")) return e.removeClass("expanded"), void i--;
                    e.removeClass("ignore")
                })
            }
            n.find(".nav-subset-item.active").parents(".nav-item, .nav-subset-item").addClass("active"), n.on("click", ".nav-link, .nav-subset-link", o), n.find(".nav-item, .nav-subset-item").each(function() {
                var t = angular.element(this);
                t.hover(function(n) {
                    t.addClass("hovered"), e(function() {
                        t.hasClass("hovered") && o(n)
                    }, 100)
                }, function(n) {
                    t.removeClass("hovered"), e(function() {
                        0 == t.hasClass("hovered") && t.removeClass("expanded")
                    }, 1e3)
                })
            }), angular.element(document).on("click", function() {
                a()
            })
        }
    }
}]), angular.module("siteBuilder.public").directive("navbarOffcanvas", ["$timeout", function(e) {
    return {
        priority: 5e3,
        restrict: "A",
        link: function(e, t, n) {
            t.on("click", "[navbar-offcanvas-toggle], .offcanvas-overlay, .offcanvas-close", function() {
                t.toggleClass("offcanvas-expanded")
            }), t.on("click", ".offcanvas-nav-toggle", function(e) {
                angular.element(e.currentTarget).closest(".offcanvas-nav-item").toggleClass("offcanvas-nav-item-expanded")
            })
        }
    }
}]), angular.module("siteBuilder.public").directive("owlCarousel", function() {
    return {
        restrict: "AC",
        scope: {
            options: "="
        },
        link: function(e, t, n) {
            if ("function" == typeof angular.element().owlCarousel) {
                var r = {
                    dots: !1,
                    loop: !0,
                    rtl: !0,
                    margin: 0
                };
                void 0 != e.options && angular.extend(r, e.options);
                var i = t.closest(".owl-container, [owl-container]").first();
                i.on("click", ".owl-next, [owl-next]", function(e) {
                    t.trigger("next.owl.carousel"), e.preventDefault()
                }), i.on("click", ".owl-prev, [owl-prev]", function(e) {
                    t.trigger("prev.owl.carousel"), e.preventDefault()
                }), i.on("click", ".owl-goto, [owl-goto]", function(e) {
                    var n = angular.element(e.currentTarget),
                        r = parseInt(n.data("position")),
                        i = parseInt(n.data("speed") || "500");
                    t.trigger("to.owl.carousel", [r, i]), e.preventDefault()
                }), t.on("changed.owl.carousel", function(e) {
                    var n = t.find(".owl-item").eq(e.item.index).find("[data-position]").data("position");
                    i.find(".owl-goto").removeClass("active").filter('[data-position="' + n + '"]').addClass("active")
                }), t.on("initialized.owl.carousel", function(e) {
                    i.find(".owl-goto:first").addClass("active")
                }), r.mousewheel && t.on("mousewheel", function(e) {
                    t.trigger(e.deltaY > 0 ? "next.owl" : "prev.owl"), e.preventDefault()
                }), t.owlCarousel(r)
            }
        }
    }
}), angular.module("siteBuilder.public").directive("ngPattern", function() {
    return {
        priority: -1e3,
        restrict: "A",
        link: function(e, t, n) {
            if ("//" == n.ngPattern) {
                t.attr("ng-pattern", "/.?/"), n.ngPattern = "/.?/"
            }
        }
    }
}), angular.module("siteBuilder.public").directive("quickBuy", ["$store", "$cart", "$analytics", "$window", function(e, t, n, r) {
    return {
        restrict: "A",
        link: function(i, o, a) {
            var s = !1;
            o.on("click", function(o) {
                if (!s) {
                    s = !0, i.trigger("quickBuy_retrieve");
                    var u = e.getProduct(a.quickBuy);
                    u.then(function(e) {
                        i.trigger("quickBuy_retrieveSucceed", e);
                        var o = e.data.product;
                        if (null != o) {
                            if (o.variants && 1 == o.variants.length && "primary" == o.variants[0].title) {
                                i.trigger("quickBuy_addToCart");
                                var u = t.addProduct(o.variants[0].id, parseFloat(a.quickBuyQuantity ? a.quickBuyQuantity : "1"));
                                return u.then(function(e) {
                                    i.trigger("quickBuy_addToCartSucceed", e), n.addToCart(), a.quickBuyCallback ? r.location = a.quickBuyCallback : (i.$root.$broadcast("cart.refresh"), s = !1)
                                }), void u.catch(function(e) {
                                    i.trigger("quickBuy_addToCartFailed", e), i.toast(e.data.description), s = !1
                                })
                            }
                            r.location = o.url
                        } else i.toast(e.data.description)
                    }), u.catch(function(e) {
                        i.trigger("quickBuy_retrieveFailed", e), i.toast(e.data.description), s = !1
                    }), o.preventDefault()
                }
            })
        }
    }
}]), angular.module("siteBuilder.public").directive("html", ["$window", "$memory", "$analytics", "$timeout", function(e, t, n, r) {
    return {
        priority: -1e5,
        restrict: "E",
        compile: function() {
            return {
                pre: function(i, o, a) {
                    i.log = n.event, i.ensure = function(n, r) {
                        var i = {};
                        if (n) {
                            var o = {};
                            try {
                                for (var a = e.location.search.substring(1).split("&"), s = 0; s < a.length; s++) {
                                    var u = a[s].split("=");
                                    2 == u.length && (o[decodeURIComponent(u[0])] = decodeURIComponent(u[1]))
                                }
                            } catch (e) {}
                            angular.extend(i, o)
                        }
                        r && angular.forEach(r, function(e, t) {
                            null != e && (i[t] = e)
                        }), this.cacheName = t.set(i, this.cacheName), this.model ? angular.extend(this.model, i) : this.model = i
                    }, i.reset = function(e) {
                        if (this.model = e || t.get(this.cacheName), void 0 != this.dynamicForm)
                            for (var n in this.dynamicForm.$setPristine(), this.dynamicForm.$submitted = !1, this.dynamicForm) 0 == n.startsWith("$") && this.dynamicForm[n].$setUntouched()
                    }, i.error = function(e) {
                        var t = {
                            main: "متاسفانه مشکلی در ارتباط با سرور به وجود آمد. لطفا مجدد تلاش کنید."
                        };
                        if (e && e.data && (angular.extend(t, e.data.context), e.data.description && (t.main = e.data.description)), void 0 != this.dynamicForm)
                            for (var n in t) this.dynamicForm.hasOwnProperty(n) && this.dynamicForm[n].$setValidity("server", !1);
                        this.validation = t, void 0 !== this.focus && "function" == typeof this.focus && this.focus()
                    }, i.trigger = function(e, t) {
                        var n = window[e];
                        return n && "function" == typeof n && n.call(t), t
                    }, i.toast = function(e) {
                        null != e && window.alert(e)
                    }, i.scrollTo = function(e) {
                        if (null != e) {
                            var t = angular.element(e);
                            r(function() {
                                $("html, body").animate({
                                    scrollTop: t.length ? t.offset().top : parseInt(e)
                                }, 1e3)
                            }, 50)
                        }
                    }, i.quickview = function(e, t) {
                        if (null != e) {
                            var n = angular.element("#product-quickview-modal, #quickview-modal");
                            n.length < 1 || (n.modal("show"), i.$broadcast("$quickview", {
                                id: e,
                                callback: t
                            }))
                        }
                    }
                }
            }
        }
    }
}]), angular.module("siteBuilder.public").directive("autoShow", ["$timeout", function(e) {
    return {
        priority: 1e3,
        restrict: "A",
        link: function(t, n, r) {
            e(function() {
                n.show()
            }, parseInt(r.autoShow || 0))
        }
    }
}]), angular.module("siteBuilder.public").directive("mappingState", ["$mapping", function(e) {
    return {
        require: "ngModel",
        restrict: "A",
        scope: {
            value: "=ngModel",
            country: "=mappingState"
        },
        link: function(t, n, r, i) {
            function o() {
                if (delete t.$parent.states, t.country) {
                    var n = e.getStates(t.country);
                    t.$parent.statesLoading = !0, n.then(function(e) {
                        t.$parent.states = e.data.states, t.$parent.statesLoading = !1
                    })
                }
            }
            o(), t.$watch("country", function() {
                i.$setPristine(!1), o()
            })
        }
    }
}]), angular.module("siteBuilder.public").directive("strength", function() {
    return {
        require: "ngModel",
        restrict: "A",
        scope: {
            strength: "@strength"
        },
        link: function(e, t, n, r) {
            r.$validators.strength = function(e) {
                return !e || ("none" == n.strength || ("medium" == n.strength ? new RegExp("^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9]))|((?=.*[A-Za-z0-9])(?=.*[^A-Za-z0-9])))(?=.{6,})") : new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8,})")).test(e))
            }, e.$watch("strength", function() {
                r.$validate()
            })
        }
    }
}), angular.module("siteBuilder.public").directive("tabs", ["$timeout", function(e) {
    return {
        priority: 5e3,
        restrict: "A",
        link: function(e, t, n) {
            "auto" == n.tabs && (t.find(".nav-tabs .nav-item:first .nav-link").addClass("active"), t.find(".tab-content .tab-pane:first").addClass("show active"))
        }
    }
}]), angular.module("siteBuilder.public").directive("toggle", function() {
    return {
        priority: 1e3,
        restrict: "A",
        link: function(e, t, n) {
            "tooltip" == n.toggle && t.tooltip()
        }
    }
}), angular.module("siteBuilder.public").directive("productVariant", function() {
    return {
        priority: 2e3,
        restrict: "A",
        require: "^addToCart",
        link: function(e, t, n) {
            var r = {
                id: parseInt(n.value),
                stock: parseFloat(n.stock),
                price: parseFloat(n.price),
                comparePrice: parseFloat(n.comparePrice) || 0,
                discount: parseFloat(n.discount),
                title: t.text().trim()
            };
            e.variants.push(r)
        }
    }
}), angular.module("siteBuilder.public").directive("addToCart", function() {
    return {
        restrict: "A",
        scope: !0,
        controller: "addtocart"
    }
}), angular.module("siteBuilder.public").directive("addToWishlist", function() {
    return {
        restrict: "A",
        scope: !0,
        controller: "addtowishlist"
    }
}), angular.module("siteBuilder.public").directive("cartAuth", function() {
    return {
        restrict: "A",
        scope: !0,
        controller: "cart.auth"
    }
}), angular.module("siteBuilder.public").directive("cartCheckout", function() {
    return {
        restrict: "A",
        scope: !0,
        controller: "cart.checkout"
    }
}), angular.module("siteBuilder.public").directive("cartCoupons", function() {
    return {
        restrict: "A",
        scope: !0,
        controller: "cart.coupons"
    }
}), angular.module("siteBuilder.public").directive("cart", function() {
    return {
        restrict: "A",
        scope: !0,
        controller: "cart"
    }
}), angular.module("siteBuilder.public").directive("cartPayment", function() {
    return {
        restrict: "A",
        scope: !0,
        controller: "cart.payment"
    }
}), angular.module("siteBuilder.public").directive("contact", function() {
    return {
        restrict: "A",
        scope: !0,
        controller: "contact"
    }
}), angular.module("siteBuilder.public").directive("formbuilder", function() {
    return {
        restrict: "A",
        scope: !0,
        controller: "formbuilder"
    }
}), angular.module("siteBuilder.public").directive("gallerySlider", function() {
    return {
        restrict: "A",
        scope: !0,
        controller: "gallery.slider"
    }
}), angular.module("siteBuilder.public").directive("postCommenting", function() {
    return {
        restrict: "A",
        scope: !0,
        controller: "post.commenting"
    }
}), angular.module("siteBuilder.public").directive("postCommentsRating", function() {
    return {
        restrict: "A",
        scope: !0,
        controller: "post.comments.rating"
    }
}), angular.module("siteBuilder.public").directive("post", function() {
    return {
        restrict: "A",
        scope: !0,
        controller: "post"
    }
}), angular.module("siteBuilder.public").directive("postRating", function() {
    return {
        restrict: "A",
        scope: !0,
        controller: "post.rating"
    }
}), angular.module("siteBuilder.public").directive("productCommenting", function() {
    return {
        restrict: "A",
        scope: !0,
        controller: "product.commenting"
    }
}), angular.module("siteBuilder.public").directive("productCommentsRating", function() {
    return {
        restrict: "A",
        scope: !0,
        controller: "product.comments.rating"
    }
}), angular.module("siteBuilder.public").directive("product", function() {
    return {
        restrict: "A",
        scope: !0,
        controller: "product"
    }
}), angular.module("siteBuilder.public").directive("productRating", function() {
    return {
        restrict: "A",
        scope: !0,
        controller: "product.rating"
    }
}), angular.module("siteBuilder.public").directive("quickView", function() {
    return {
        restrict: "A",
        scope: !0,
        controller: "quickview"
    }
}), angular.module("siteBuilder.public").directive("recoverypassConfirm", function() {
    return {
        restrict: "A",
        scope: !0,
        controller: "recoverypass.confirm"
    }
}), angular.module("siteBuilder.public").directive("recoverypass", function() {
    return {
        restrict: "A",
        scope: !0,
        controller: "recoverypass"
    }
}), angular.module("siteBuilder.public").directive("dynamicSearch", function() {
    return {
        restrict: "A",
        scope: !0,
        controller: "search"
    }
}), angular.module("siteBuilder.public").directive("signin", function() {
    return {
        restrict: "A",
        scope: !0,
        controller: "signin"
    }
}), angular.module("siteBuilder.public").directive("signup", function() {
    return {
        restrict: "A",
        scope: !0,
        controller: "signup"
    }
}), angular.module("siteBuilder.public").directive("startup", function() {
    return {
        restrict: "A",
        scope: !0,
        controller: "startup"
    }
}), angular.module("siteBuilder.public").directive("storeAjaxContext", ["$compile", function(e) {
    return {
        restrict: "A",
        scope: !0,
        link: function(t, n, r) {
            t.$on("ajax-content", function(r, i) {
                var o = angular.element(i).find("[store-ajax-context]");
                n.html(o.html()), e(n.contents())(t)
            })
        }
    }
}]), angular.module("siteBuilder.public").directive("store", function() {
    return {
        restrict: "A",
        scope: !0,
        controller: "store"
    }
}), angular.module("siteBuilder.public").directive("subscription", function() {
    return {
        restrict: "A",
        scope: !0,
        controller: "subscription"
    }
}), angular.module("siteBuilder.public").directive("templates", function() {
    return {
        restrict: "A",
        scope: !0,
        controller: "templates"
    }
}), angular.module("siteBuilder.public").directive("whois", function() {
    return {
        restrict: "A",
        scope: !0,
        controller: "whois"
    }
}), angular.module("siteBuilder.public").controller("addtocart", ["$scope", "$rootScope", "$cart", "$timeout", "$analytics", function(e, t, n, r, i) {
    e.variants = [], e.progress = e.succeed = e.failed = !1, e.model = {
        attributes: {},
        quantity: 1,
        price: 0,
        comparePrice: 0,
        discount: 0,
        stock: 0,
        title: null,
        id: null
    }, e.collect = function(t, n, r) {
        e.model.defaultComparePrice = n, e.model.defaultDiscount = r, e.model.defaultPrice = t
    }, e.found = function() {
        return null != e.model.id
    }, e.outofstock = function() {
        return e.found() && 0 == e.available()
    }, e.available = function() {
        var t = e.model;
        return !!(t.id && t.stock > 0 && t.quantity > 0 && t.stock >= t.quantity)
    }, e.getPrice = function() {
        return (e.model.id ? e.model.price : e.model.defaultPrice) * (e.model.quantity ? e.model.quantity : 0)
    }, e.getComparePrice = function() {
        return (e.model.id ? e.model.comparePrice : e.model.defaultComparePrice) * (e.model.quantity ? e.model.quantity : 0)
    }, e.getDiscount = function() {
        return e.model.id ? e.model.discount : e.model.defaultDiscount
    }, e.changeAttribute = function() {
        var t = Object.keys(e.model.attributes),
            n = [];
        t.sort();
        for (var r = 0; r < t.length; r++) n.push(e.model.attributes[t[r]]);
        var i = n.join("، ");
        e.select({
            price: 0,
            comparePrice: 0,
            discount: 0,
            stock: 0,
            title: null,
            id: null
        }), e.variants.forEach(function(t) {
            t.title == i && e.select(t)
        })
    }, e.init = function() {
        if (null != e.variants) {
            var t = e.variants[0];
            "primary" == t.title && e.select(t)
        }
    }, e.select = function(t) {
        e.trigger("addToCart_select", t), angular.extend(e.model, t)
    }, e.submit = function() {
        if (e.dynamicForm.$invalid) alert("لطفا مشخصات محصول را انتخاب کنید.");
        else {
            e.trigger("addToCart_submit", e.model);
            var r = n.addProduct(e.model.id, e.model.quantity);
            e.progress = !0, r.then(function(n) {
                e.trigger("addToCart_submitSucceed", n), i.addToCart(), t.$broadcast("cart.refresh"), angular.element("#success-modal, #product-addtocart-modal").modal(), e.progress = !1, e.succeed = n.data
            }), r.catch(function(t) {
                e.trigger("addToCart_submitFailed", t), e.error(t), e.progress = !1
            })
        }
    }, r(e.init, 50)
}]), angular.module("siteBuilder.public").controller("addtowishlist", ["$scope", "$wishes", "$analytics", function(e, t, n) {
    e.model = {}, e.progress = e.succeed = e.failed = !1, e.collect = function(t) {
        var n = {
            page_id: t
        };
        e.ensure(!1, n)
    }, e.submit = function() {
        e.trigger("addToWhislist_submit", e.model);
        var r = t.add(e.model);
        e.progress = !0, r.then(function(t) {
            t.data && e.toast(t.data.description), e.trigger("addToWhislist_submitSucceed", t), n.addToWhislist(), e.progress = !1, e.succeed = t.data
        }), r.catch(function(t) {
            t.data && e.toast(t.data.description), e.trigger("addToWhislist_submitFailed", t), e.error(t), e.progress = !1
        })
    }
}]), angular.module("siteBuilder.public").controller("cart.auth", ["$scope", "$user", "$user.documents", "$mapping", "$window", "$analytics", function(e, t, n, r, i, o) {
    e.model = {
        mode: "signin"
    }, e.progress = e.succeed = e.failed = !1, e.collect = function(t) {
        var n = {
            return_url: t
        };
        e.ensure(!0, n)
    }, e.submit = function() {
        if (!e.signedup || !e.upload()) {
            e.trigger("cartAuth_submit", e.model);
            var n = t[e.model.mode](e.model);
            e.progress = !0, n.then(function(t) {
                e.trigger("cartAuth_submitSucceed", t), o["signin" == e.model.mode ? "signin" : "signup"]("signin" == e.model.mode ? e.model.username : e.model.name), e.progress = !1, e.signedup = "signup" == e.model.mode, e.upload() || (e.reset(), e.succeed = t.data, null != t.data.redirect && (i.location = t.data.redirect))
            }), n.catch(function(t) {
                e.trigger("cartAuth_submitFailed", t), e.error(t), e.progress = !1
            })
        }
    }, e.upload = function() {
        if (null == e.dynamicForm || null == e.dynamicForm.file) return !1;
        if ("signup" != e.model.mode) return !1;
        if (null == e.document) {
            e.trigger("signup_uploadDocument", e.model.document);
            var t = n.upload(e.model.document);
            return e.progress = !0, t.then(function(t) {
                e.trigger("signup_uploadDocumentSucceed", t), e.progress = !1, e.document = angular.extend(t.data, e.document), e.document.file = e.document.path, e.upload()
            }), t.catch(function(t) {
                e.trigger("signup_uploadDocumentFailed", t), e.error(t), e.progress = !1
            }), !0
        }
        e.trigger("signup_createDocument", e.document);
        t = n.create(e.document);
        return e.progress = !0, t.then(function(t) {
            e.trigger("signup_createDocumentSucceed", t), e.progress = !1, e.succeed = t.data
        }), t.catch(function(t) {
            e.trigger("signup_createDocumentFailed", t), e.error(t), e.progress = !1
        }), !0
    }, e.$watch("model.mode", function(t) {
        if ("signup" == t && null == e.countries) {
            e.trigger("cartAuth_retrieveCountries");
            var n = r.getCountries();
            n.then(function(t) {
                e.trigger("cartAuth_retrieveCountriesSucceed", t), e.countries = t.data.countries
            }), n.catch(function(t) {
                e.trigger("cartAuth_retrieveCountriesFailed", t), e.error(t)
            })
        }
    }), e.$watch("model.country_id", function(t) {
        if (e.trigger("cartAuth_retrieveStates", t), null != t) {
            e.states = e.cities = void 0;
            var n = r.getStates(t);
            e.progress = !0, n.then(function(t) {
                e.trigger("cartAuth_retrieveStatesSucceed", t), e.progress = !1, e.states = t.data.states
            }), n.catch(function(t) {
                e.trigger("cartAuth_retrieveStatesFailed", t), e.error(t), e.progress = !1
            })
        }
    }), e.$watch("model.state_id", function(t) {
        if (e.trigger("cartAuth_retrieveCities", t), null != t) {
            e.cities = void 0;
            var n = r.getCities(t);
            e.progress = !0, n.then(function(t) {
                e.trigger("cartAuth_retrieveCitiesSucceed", t), e.progress = !1, e.cities = t.data.cities
            }), n.catch(function(t) {
                e.trigger("cartAuth_retrieveCitiesFailed", t), e.error(t), e.progress = !1
            })
        }
    })
}]), angular.module("siteBuilder.public").controller("cart.checkout", ["$scope", "$cart", "$user", "$mapping", "$window", "$analytics", function(e, t, n, r, i, o) {
    e.progress = e.succeed = e.failed = !1, e.retrieve = function() {
        e.loading = !0, e.trigger("cartCheckout_retrieve");
        var n = t.get({
            update: !0
        });
        n.then(function(t) {
            e.trigger("cartCheckout_retrieveSucceed", t), e.cart = t.data.cart, e.model = angular.extend({}, e.model, e.cart, e.cart.contact), e.normalize(e.model), e.retrieveCountries(), e.retrieveProfile(), e.locateClient(), e.ready = !0
        }), n.catch(function(t) {
            e.trigger("cartCheckout_retrieveFailed", t), e.error(t), e.loading = !1
        })
    }, e.retrieveCountries = function() {
        if (0 != e.shippingRequired()) {
            e.trigger("cartCheckout_retrieveCountries");
            var t = r.getCountries();
            t.then(function(t) {
                e.trigger("cartCheckout_retrieveCountriesSucceed", t), e.countries = t.data.countries
            }), t.catch(function(t) {
                e.trigger("cartCheckout_retrieveCountriesFailed", t), e.error(t)
            })
        }
    }, e.retrieveProfile = function() {
        e.trigger("cartCheckout_retrieveProfile");
        var t = n.getProfile();
        t.then(function(t) {
            function n(t) {
                e.model[t] = null != e.model[t] ? e.model[t] : e.profile[t]
            }
            e.trigger("cartCheckout_retrieveProfileSucceed", t), e.profile = e.normalize(t.data.profile), n("name"), n("mobile"), n("phone"), n("email"), n("country_id"), n("state_id"), n("city_id"), n("zipcode"), n("address"), e.loading = !1
        }), t.catch(function(t) {
            e.trigger("cartCheckout_retrieveProfileFailed", t), e.loading = !1
        })
    }, e.locateClient = function() {
        0 != e.shippingRequired() && null != navigator && null != navigator.geolocation && "function" == typeof navigator.geolocation.getCurrentPosition && navigator.geolocation.getCurrentPosition(function(t) {
            angular.extend(e.model, {
                latitude: t.coords.latitude,
                longitude: t.coords.longitude,
                zoom: 16
            }), e.$broadcast("cart.checkout.location.changed"), e.lockmap = !0
        })
    }, e.submit = function() {
        var n = angular.copy(e.model);
        e.trigger("cartCheckout_submit", n);
        var r = t.checkout(n);
        e.progress = !0, r.then(function(t) {
            e.trigger("cartCheckout_submitSucceed", t), o.checkout(e.model.price), e.progress = !1, e.succeed = t.data, null != t.data.redirect && (i.location = t.data.redirect)
        }), r.catch(function(t) {
            e.trigger("cartCheckout_submitFailed", t), e.error(t), e.progress = !1
        })
    }, e.$watch("model.country_id", function(t) {
        if (e.trigger("cartCheckout_retrieveStates", t), null != t) {
            e.states = e.cities = void 0;
            var n = r.getStates(t);
            e.progress = !0, n.then(function(n) {
                e.trigger("cartCheckout_retrieveStatesSucceed", n), e.updateLocation(e.countries, t, 5), e.progress = !1, e.states = n.data.states
            }), n.catch(function(t) {
                e.trigger("cartCheckout_retrieveStatesFailed", t), e.error(t), e.progress = !1
            })
        }
    }), e.$watch("model.state_id", function(t) {
        if (e.trigger("cartCheckout_retrieveCities", t), null != t) {
            e.cities = void 0;
            var n = r.getCities(t);
            e.progress = !0, n.then(function(n) {
                e.trigger("cartCheckout_retrieveCitiesSucceed", n), e.updateLocation(e.states, t, 10), e.progress = !1, e.cities = n.data.cities
            }), n.catch(function(t) {
                e.trigger("cartCheckout_retrieveCitiesFailed", t), e.error(t), e.progress = !1
            })
        }
    }), e.$watch("model.city_id", function(t) {
        e.updateLocation(e.cities, t)
    }), e.updateLocation = function(t, n, r) {
        e.lockmap || 0 != Array.isArray(t) && t.forEach(function(t) {
            t.id == n && (angular.extend(e.model, {
                latitude: t.latitude,
                longitude: t.longitude,
                zoom: r
            }), e.$broadcast("cart.checkout.location.changed"))
        })
    }, e.normalize = function(e) {
        return e.country_id = e.country ? e.country.id : null, e.state_id = e.state ? e.state.id : null, e.city_id = e.city ? e.city.id : null, e
    }, e.shippingRequired = function() {
        return e.model && e.model.status && e.model.status.indexOf("shipping_required") > -1
    }, e.getItemsType = function() {
        var t = [];
        return null != e.model && e.model.items.forEach(function(e) {
            t.indexOf(e.product.variant.type) > -1 || t.push(e.product.variant.type)
        }), t
    }, e.retrieve()
}]), angular.module("siteBuilder.public").controller("cart.coupons", ["$scope", "$rootScope", "$cart", function(e, t, n) {
    e.model = {}, e.progress = e.succeed = e.failed = !1, e.collect = function(t) {
        var n = {
            code: t
        };
        e.ensure(!0, n)
    }, e.submit = function() {
        e.trigger("cartCoupons_submit", e.model);
        var r = n.addCoupon(e.model);
        e.progress = !0, r.then(function(n) {
            e.trigger("cartCoupons_submitSucceed", n), e.progress = !1, e.reset(), t.$broadcast("cart.refresh")
        }), r.catch(function(t) {
            e.trigger("cartCoupons_submitFailed", t), e.error(t), e.progress = !1
        })
    }, e.removeCoupon = function(r) {
        e.trigger("cartCoupons_remove", e.model);
        var i = n.removeCoupon(r);
        e.progress = !0, i.then(function(n) {
            e.trigger("cartCoupons_removeSucceed", n), e.progress = !1, t.$broadcast("cart.refresh")
        }), i.catch(function(t) {
            e.trigger("cartCoupons_removeFailed", t), e.error(t), e.progress = !1
        })
    }
}]), angular.module("siteBuilder.public").controller("cart", ["$scope", "$rootScope", "$cart", function(e, t, n) {
    e.retrieve = function() {
        if (!t.cartBusy) {
            t.cartBusy = !0, t.$broadcast("cart.loading", !0), e.trigger("cart_retrieve");
            var r = n.get({
                update: /^\/site\/cart/gi.test(window.location.pathname)
            });
            r.then(function(n) {
                e.trigger("cart_retrieveSucceed", n), t.$broadcast("cart.update", n.data.cart), t.$broadcast("cart.loading", !1), t.cartBusy = !1
            }), r.catch(function(n) {
                e.trigger("cart_retrieveFailed", n), e.error(n), t.$broadcast("cart.loading", !1), t.cartBusy = !1
            })
        }
    }, e.removeItem = function(t) {
        e.trigger("cart_remove", t);
        var r = n.removeItem(t.id);
        t.progress = !0, r.then(function(t) {
            e.trigger("cart_removeSucceed", t), e.retrieve()
        }), r.catch(function(n) {
            e.trigger("cart_removeFailed", n), e.error(n), t.progress = !1, e.retrieve()
        })
    }, e.update = function(t) {
        e.trigger("cart_update", t);
        var r = n.updateItem(t.id, t.quantity);
        t.progress = !0, r.then(function(t) {
            e.trigger("cart_updateSucceed", t), e.retrieve()
        }), r.catch(function(n) {
            e.trigger("cart_updateFailed", n), e.error(n), t.progress = !1, e.retrieve()
        })
    }, e.$on("cart.loading", function(t, n) {
        e.loading = n
    }), e.$on("cart.refresh", function() {
        e.retrieve()
    }), e.$on("cart.update", function(t, n) {
        e.model = angular.copy(n), e.ready = !0
    }), e.retrieve()
}]), angular.module("siteBuilder.public").controller("cart.payment", ["$scope", "$cart", "$user", "$window", "$analytics", "$timeout", function(e, t, n, r, i, o) {
    e.loading = 0, e.progress = e.succeed = e.failed = !1, e.retrieve = function() {
        e.ensure(!0), e.loading++, e.trigger("cartPayment_retrieve", e.model);
        var n = t.getDetails(e.model.token);
        n.then(function(t) {
            e.trigger("cartPayment_retrieveSucceed", t), e.model = angular.extend({}, e.model, t.data.details), e.loading--, e.ready = !0, e.anonymouse = e.model.status && e.model.anonymouse, e.paid = e.model.status && e.model.status.indexOf("paid") > -1, e.downloadable = e.model.status && e.model.status.indexOf("downloadable") > -1, e.model.shipping_id = e.model.shipping_class ? e.model.shipping_class.id : null
        }), n.catch(function(t) {
            e.trigger("cartPayment_retrieveFailed", t), e.error(t), e.loading--
        })
    }, e.retrieveShippings = function() {
        e.loading++, e.trigger("cartPayment_retrieveShippings");
        var n = t.getShippings(e.model.token);
        n.then(function(t) {
            e.trigger("cartPayment_retrieveShippingsSucceed", t), e.shippings = t.data.shippings, e.loading--
        }), n.catch(function(t) {
            e.trigger("cartPayment_retrieveShippingsFailed", t), e.error(t), e.loading--
        })
    }, e.retrieveGateways = function() {
        e.loading++, e.trigger("cartPayment_retrieveGateways");
        var n = t.getGateways();
        n.then(function(t) {
            e.trigger("cartPayment_retrieveGatewaysSucceed", t), e.accounts = t.data.gateways, e.loading--
        }), n.catch(function(t) {
            e.trigger("cartPayment_retrieveGatewaysFailed", t), e.error(t), e.loading--
        })
    }, e.retrieveOnlineGateways = function() {
        e.loading++, e.trigger("cartPayment_retrieveOnlineGateways");
        var n = t.getOnlineGateways();
        n.then(function(t) {
            e.trigger("cartPayment_retrieveOnlineGatewaysSucceed", t), e.gateways = t.data.gateways, e.loading--
        }), n.catch(function(t) {
            e.trigger("cartPayment_retrieveOnlineGatewaysFailed", t), e.error(t), e.loading--
        })
    }, e.retrieveUser = function() {
        e.loading++, e.trigger("cartPayment_retrieveUser");
        var t = n.get();
        t.then(function(t) {
            e.trigger("cartPayment_retrieveUserSucceed", t), e.user = t.data.user, e.loading--
        }), t.catch(function(t) {
            e.trigger("cartPayment_retrieveUserFailed", t), e.loading--
        })
    }, e.map = function() {
        var t = angular.copy(e.model);
        return void 0 != t.gateway_id && (t.gateway_id = t.gateway_id.id), t
    }, e.shipping = function() {
        var n = e.map();
        e.trigger("cartPayment_shipping", n);
        var r = t.shipping(n);
        e.progress = !0, r.then(function(t) {
            e.trigger("cartPayment_shippingSucceed", t), e.progress = !1, angular.extend(e.model, t.data.details)
        }), r.catch(function(t) {
            e.trigger("cartPayment_shippingFailed", t), e.error(t), e.progress = !1
        })
    }, e.submit = function() {
        var n = e.map();
        e.trigger("cartPayment_submit", n);
        var i = t[e.model.mode](n);
        e.progress = !0, i.then(function(t) {
            e.trigger("cartPayment_submitSucceed", t), e.progress = !1, e.succeed = t.data, !1 === e.succeed.paid && e.retrieve(), null != t.data.redirect && (r.location = t.data.redirect)
        }), i.catch(function(t) {
            e.trigger("cartPayment_submitFailed", t), e.error(t), e.progress = !1
        })
    }, e.step = function(t) {
        return null != e.shippings ? t + 1 : t
    }, e.$watch("model.shipping_id", function(t) {
        null != e.shippings && e.shipping()
    }), e.$watch("model.mode", function() {
        e.model.gateway_id = null, e.dynamicForm.$setPristine(), e.validation = null, e.gateways && 1 == e.gateways.length && o(function() {
            e.model.gateway_id = e.gateways[0]
        })
    }), e.retrieve(), e.retrieveUser(), e.retrieveGateways(), e.retrieveOnlineGateways(), e.retrieveShippings()
}]), angular.module("siteBuilder.public").controller("contact", ["$scope", "$submissions", "$analytics", function(e, t, n) {
    e.model = {}, e.progress = e.succeed = e.failed = !1, e.collect = function(t, n) {
        var r = {
            subject: t,
            body: n
        };
        e.ensure(!0, r)
    }, e.submit = function() {
        e.trigger("contact_submit", e.model);
        var r = t.contact(e.model);
        e.progress = !0, r.then(function(t) {
            e.trigger("contact_submitSucceed", t), n.contact(e.model.subject), e.progress = !1, e.reset(), e.succeed = t.data
        }), r.catch(function(t) {
            e.trigger("contact_submitFailed", t), e.error(t), e.progress = !1
        })
    }
}]), angular.module("siteBuilder.public").controller("formbuilder", ["$scope", "$submissions", "$window", "$analytics", function(e, t, n, r) {
    e.model = {}, e.progress = e.succeed = e.failed = !1, e.collect = function(t, n) {
        var r = {
            id: t,
            amount: n
        };
        e.ensure(!0, r)
    }, e.submit = function() {
        e.trigger("formbuilder_submit", e.model);
        var i = t.submit(e.model.id, e.model);
        e.progress = !0, i.then(function(t) {
            e.trigger("formbuilder_submitSucceed", t), r.submitForm(), e.progress = !1, e.reset(), e.succeed = t.data, null != t.data.redirect && (n.location = t.data.redirect)
        }), i.catch(function(t) {
            e.trigger("formbuilder_submitFailed", t), e.error(t), e.progress = !1
        })
    }, e.checklistRequired = function(e, t) {
        if ("required" != t) return !1;
        if (e)
            for (var n in e)
                if (!0 === e[n]) return !1;
        return !0
    }
}]), angular.module("siteBuilder.public").controller("gallery.slider", ["$scope", "$element", function(e, t) {
    e.show = function(n) {
        var r = ".gallery-slider-item",
            i = t.find(r).removeClass("active"),
            o = i.index(this),
            a = i[o + 1],
            s = i[o - 1],
            u = $(this).addClass("active"),
            c = u.find(r + "-title").text(),
            l = u.find(r + "-image img").data("preview"),
            d = u.find(r + "-description").text();
        e.ready = !0, e.image = l, e.title = c, e.description = d, e.item = u, e.nextItem = a, e.previousItem = s, e.loading = !0, n && n.preventDefault()
    }, e.next = function(t) {
        e.next && e.show.call(e.nextItem)
    }, e.previous = function() {
        e.previous && e.show.call(e.previousItem)
    }, e.toggleLoading = function() {
        e.loading = !e.loading
    }, e.select = function(t) {
        e.show.call(angular.element(t.target).closest(".gallery-slider-item"), t)
    }, e.show.call(t.find(".gallery-slider-item:first"))
}]), angular.module("siteBuilder.public").controller("post.commenting", ["$scope", "$element", "$blog", "$analytics", function(e, t, n, r) {
    e.model = {}, e.progress = e.succeed = e.failed = !1, e.collect = function(t) {
        var n = {
            post_id: t
        };
        e.ensure(!1, n)
    }, e.reply = function(n) {
        e.trigger("postCommenting_reply", n), e.model.parent_id = n, e.dynamicForm.$setDirty(), t.find("form :input:visible:first").focus()
    }, e.focusComment = function() {
        e.trigger("postCommenting_focus", e.model.parent_id), angular.element("#comment-" + e.model.parent_id).stop().attr("tabindex", 1).focus().removeAttr("tabindex").fadeIn(150).fadeOut(150).fadeIn(150).fadeOut(150).fadeIn(150).fadeOut(150).fadeIn(150).fadeOut(150).fadeIn(150).fadeOut(150).fadeIn(150)
    }, e.submit = function() {
        e.trigger("postCommenting_submit", e.model);
        var t = n.createComment(e.model);
        e.progress = !0, t.then(function(t) {
            e.trigger("postCommenting_submitSucceed", t), r.postCommenting(), e.progress = !1, e.reset(), e.succeed = t.data
        }), t.catch(function(t) {
            e.trigger("postCommenting_submitFailed", t), e.error(t), e.progress = !1
        })
    }, e.$watch("model.parent_id", function(t) {
        e.isreply = t
    })
}]), angular.module("siteBuilder.public").controller("post.comments.rating", ["$scope", "$blog", "$analytics", function(e, t, n) {
    e.progress = !1, e.collect = function(t, n, r) {
        e.id = t, e.up = n, e.down = r
    }, e.like = function() {
        e.trigger("postCommentsLike_submit", e.model);
        var r = t.like(e.id);
        e.progress = !0, r.then(function(t) {
            e.trigger("postCommentsLike_submitSucceed", t), n.postCommentsLike(), e.progress = !1, angular.extend(e, t.data)
        }), r.catch(function(t) {
            e.trigger("postCommentsLike_submitFailed", t), e.progress = !1
        })
    }, e.dislike = function() {
        e.trigger("postCommentsDislike_submit", e.model);
        var r = t.dislike(e.id);
        e.progress = !0, r.then(function(t) {
            e.trigger("postCommentsDislike_submitSucceed", t), n.postCommentsDislike(), e.progress = !1, angular.extend(e, t.data)
        }), r.catch(function(t) {
            e.trigger("postCommentsDislike_submitFailed", t), e.progress = !1
        })
    }
}]), angular.module("siteBuilder.public").controller("post", ["$scope", function(e) {
    e.ensure(!0)
}]), angular.module("siteBuilder.public").controller("post.rating", ["$scope", "$blog", "$analytics", function(e, t, n) {
    e.model = {}, e.progress = e.succeed = e.failed = !1, e.collect = function(t, n, r) {
        var i = {
            default_rate: n,
            count: r,
            rate: n,
            id: t
        };
        e.ensure(!1, i)
    }, e.submit = function(r) {
        e.trigger("postRating_submit", e.model);
        var i = t.rating(e.model.id, r);
        e.progress = !0, i.then(function(t) {
            t.data && e.toast(t.data.description), e.trigger("postRating_submitSucceed", t), n.postRating(), e.progress = !1, e.succeed = t.data, angular.extend(e.model, t.data), e.model.default_rate = t.data.rate
        }), i.catch(function(t) {
            t.data && e.toast(t.data.description), e.trigger("postRating_submitFailed", t), e.error(t), e.progress = !1
        })
    }, e.changeRate = function(t) {
        e.model.rate = t || e.model.default_rate
    }
}]), angular.module("siteBuilder.public").controller("product.commenting", ["$scope", "$element", "$store", "$analytics", function(e, t, n, r) {
    e.model = {}, e.progress = e.succeed = e.failed = !1, e.collect = function(t) {
        var n = {
            product_id: t
        };
        e.ensure(!1, n)
    }, e.reply = function(n) {
        e.trigger("productCommenting_reply", n), e.model.parent_id = n, e.dynamicForm.$setDirty(), t.find("form :input:visible:first").focus()
    }, e.focusComment = function() {
        e.trigger("productCommenting_focus", e.model.parent_id), angular.element("#comment-" + e.model.parent_id).stop().attr("tabindex", 1).focus().removeAttr("tabindex").fadeIn(150).fadeOut(150).fadeIn(150).fadeOut(150).fadeIn(150).fadeOut(150).fadeIn(150).fadeOut(150).fadeIn(150).fadeOut(150).fadeIn(150)
    }, e.submit = function() {
        e.trigger("productCommenting_submit", e.model);
        var t = n.createComment(e.model);
        e.progress = !0, t.then(function(t) {
            e.trigger("productCommenting_submitSucceed", t), r.productCommenting(), e.progress = !1, e.reset(), e.succeed = t.data
        }), t.catch(function(t) {
            e.trigger("productCommenting_submitFailed", t), e.error(t), e.progress = !1
        })
    }, e.$watch("model.parent_id", function(t) {
        e.isreply = t
    })
}]), angular.module("siteBuilder.public").controller("product.comments.rating", ["$scope", "$store", "$analytics", function(e, t, n) {
    e.progress = !1, e.collect = function(t, n, r) {
        e.id = t, e.up = n, e.down = r
    }, e.like = function() {
        e.trigger("productCommentsLike_submit", e.model);
        var r = t.like(e.id);
        e.progress = !0, r.then(function(t) {
            e.trigger("productCommentsLike_submitSucceed", t), n.productCommentsLike(), e.progress = !1, angular.extend(e, t.data)
        }), r.catch(function(t) {
            e.trigger("productCommentsLike_submitFailed", t), e.progress = !1
        })
    }, e.dislike = function() {
        e.trigger("productCommentsDislike_submit", e.model);
        var r = t.dislike(e.id);
        e.progress = !0, r.then(function(t) {
            e.trigger("productCommentsDislike_submitSucceed", t), n.productCommentsDislike(), e.progress = !1, angular.extend(e, t.data)
        }), r.catch(function(t) {
            e.trigger("productCommentsDislike_submitFailed", t), e.progress = !1
        })
    }
}]), angular.module("siteBuilder.public").controller("product", ["$scope", function(e) {
    e.ensure(!0)
}]), angular.module("siteBuilder.public").controller("product.rating", ["$scope", "$store", "$analytics", function(e, t, n) {
    e.model = {}, e.progress = e.succeed = e.failed = !1, e.collect = function(t, n, r) {
        var i = {
            default_rate: n,
            count: r,
            rate: n,
            id: t
        };
        e.ensure(!1, i)
    }, e.submit = function(r) {
        e.trigger("productRating_submit", e.model);
        var i = t.rating(e.model.id, r);
        e.progress = !0, i.then(function(t) {
            t.data && e.toast(t.data.description), e.trigger("productRating_submitSucceed", t), n.productRating(), e.progress = !1, e.succeed = t.data, angular.extend(e.model, t.data), e.model.default_rate = t.data.rate
        }), i.catch(function(t) {
            t.data && e.toast(t.data.description), e.trigger("productRating_submitFailed", t), e.error(t), e.progress = !1
        })
    }, e.isHalf = function(t) {
        return e.model.rate % 1 > 0 && e.model.rate >= t + .5 && e.model.rate < t + 1
    }, e.changeRate = function(t) {
        e.model.rate = t || e.model.default_rate
    }
}]), angular.module("siteBuilder.public").controller("quickview", ["$scope", "$rootScope", "$store", "$cart", "$window", "$analytics", function(e, t, n, r, i, o) {
    e.loading = e.progress = e.succeed = e.failed = !1, e.model = {}, e.found = function() {
        return null != e.model.id
    }, e.outofstock = function() {
        return e.found() && 0 == e.available()
    }, e.available = function() {
        var t = e.model;
        return !!(t.id && t.stock > 0 && t.quantity > 0 && t.stock >= t.quantity)
    }, e.getPrice = function() {
        return (e.model.id ? e.model.price : e.price) * (e.model.quantity ? e.model.quantity : 0)
    }, e.getComparePrice = function() {
        return (e.model.id ? e.model.compare_price : e.compare_price) * (e.model.quantity ? e.model.quantity : 0)
    }, e.init = function() {
        if (null != e.variants) {
            var t = e.variants[0];
            "primary" == t.title && e.select(t)
        }
    }, e.select = function(t) {
        e.trigger("quickview_select", t), angular.extend(e.model, t)
    }, e.$on("$quickview", function(t, r) {
        angular.extend(e, r), e.trigger("quickview_retrieve", e.id), e.succeed = e.failed = !1, e.dynamicForm.$setPristine(), e.validation = null;
        var a = n.getProduct(e.id);
        e.loading = !0, a.then(function(t) {
            var n = t.data.product;
            n.inquiry ? i.location = n.url : (e.trigger("quickview_retrieveSucceed", t), o.productQuickView(e.id), e.loading = !1, e.model = {
                attributes: {},
                quantity: 1,
                price: 0,
                compare_price: 0,
                discount: 0,
                stock: 0,
                title: null,
                id: null
            }, angular.extend(e, n), e.init())
        }), a.catch(function(t) {
            e.trigger("quickview_retrieveFailed", t), e.error(t), e.loading = !1
        })
    }), e.submit = function() {
        if (e.dynamicForm.$invalid) alert("لطفا مشخصات محصول را انتخاب کنید.");
        else {
            e.trigger("quickview_addToCart", e.model);
            var n = r.addProduct(e.model.id, e.model.quantity);
            e.progress = !0, n.then(function(n) {
                e.trigger("quickview_addToCartSucceed", n), o.addToCart(), e.progress = !1, e.succeed = n.data, e.callback ? i.location = e.callback : t.$broadcast("cart.refresh")
            }), n.catch(function(t) {
                e.trigger("quickview_addToCartFailed", t), e.error(t), e.progress = !1
            })
        }
    }, e.changeAttribute = function() {
        var t = Object.keys(e.model.attributes),
            n = [];
        t.sort();
        for (var r = 0; r < t.length; r++) n.push(e.model.attributes[t[r]]);
        var i = n.join("، ");
        e.select({
            price: 0,
            compare_price: 0,
            discount: 0,
            stock: 0,
            title: null,
            id: null
        }), e.variants.forEach(function(t) {
            t.title == i && e.select(t)
        })
    }
}]), angular.module("siteBuilder.public").controller("recoverypass.confirm", ["$scope", "$rootScope", "$user", function(e, t, n) {
    e.model = {}, e.progress = e.succeed = e.failed = !1, e.back = function() {
        e.trigger("recoveryPass_back"), e.reset(), t.recoveryStep2 = !1
    }, e.submit = function() {
        e.trigger("recoveryPass_confirm", e.model);
        var t = n.recoveryPassword_confirm(e.model);
        e.progress = !0, t.then(function(t) {
            e.trigger("recoveryPass_confirmSucceed", t), e.progress = !1, e.reset(), e.succeed = t.data
        }), t.catch(function(t) {
            e.trigger("recoveryPass_confirmFailed", t), e.error(t), e.progress = !1
        })
    }
}]), angular.module("siteBuilder.public").controller("recoverypass", ["$scope", "$rootScope", "$user", "$analytics", function(e, t, n, r) {
    e.model = {}, e.progress = e.succeed = e.failed = !1, e.collect = function(t) {
        var n = {
            return_url: t
        };
        e.ensure(!0, n)
    }, e.submit = function() {
        e.trigger("recoveryPass_submit", e.model);
        var i = n.recoveryPassword(e.model);
        e.progress = !0, i.then(function(n) {
            e.trigger("recoveryPass_submitSucceed", n), r.recoveryPassword(e.model.contact), e.progress = !1, e.reset(), e.succeed = n.data, t.recoveryStep2 = !0
        }), i.catch(function(t) {
            e.trigger("recoveryPass_submitFailed", t), e.error(t), e.progress = !1
        })
    }
}]), angular.module("siteBuilder.public").controller("search", ["$scope", "$search", "$analytics", "$element", function(e, t, n, r) {
    e.loding = !1, e.$watch("query", function() {
        e.submit()
    }), e.submit = function() {
        if (e.query) {
            var i = {
                type: r.attr("type"),
                status: r.attr("status"),
                size: r.attr("size"),
                q: e.query
            };
            e.trigger("search_submit", i);
            var o = t.get(i);
            e.loading = !0, o.then(function(t) {
                e.trigger("search_submitSucceed", t), n.search(e.query), e.items = t.data.result, e.loading = !1
            }), o.catch(function(t) {
                e.trigger("search_submitFailed", t), e.loading = !1
            })
        } else e.items = null
    }
}]), angular.module("siteBuilder.public").controller("signin", ["$scope", "$rootScope", "$user", "$window", "$analytics", function(e, t, n, r, i) {
    e.model = {}, e.progress = e.succeed = e.failed = !1, e.collect = function(t) {
        var n = {
            return_url: t
        };
        e.ensure(!0, n)
    }, e.submit = function() {
        e.trigger("signin_submit", e.model);
        var o = n.signin(e.model);
        e.progress = !0, o.then(function(n) {
            e.trigger("signin_submitSucceed", n), i.signin(e.model.username), e.progress = !1, e.reset(), e.succeed = n.data, t.$broadcast("users.signin", n), null != n.data.redirect && (r.location = n.data.redirect)
        }), o.catch(function(t) {
            e.trigger("signin_submitFailed", t), e.error(t), e.progress = !1
        })
    }
}]), angular.module("siteBuilder.public").controller("signup", ["$scope", "$user", "$user.documents", "$mapping", "$window", "$analytics", function(e, t, n, r, i, o) {
    e.model = {}, e.progress = e.succeed = e.failed = !1, e.collect = function(t) {
        var n = {
            return_url: t
        };
        e.ensure(!0, n)
    }, e.submit = function() {
        if (!e.signedup || !e.upload()) {
            e.trigger("signup_submit", e.model);
            var n = t.signup(e.model);
            e.progress = !0, n.then(function(t) {
                e.trigger("signup_submitSucceed", t), o.signup(e.model.name), e.progress = !1, e.signedup = !0, e.upload() || (e.reset(), e.succeed = t.data, null != t.data.redirect && (i.location = t.data.redirect))
            }), n.catch(function(t) {
                e.trigger("signup_submitFailed", t), e.error(t), e.progress = !1
            })
        }
    }, e.upload = function() {
        if (null == e.dynamicForm || null == e.dynamicForm.file) return !1;
        if (null == e.document) {
            e.trigger("signup_uploadDocument", e.model.document);
            var t = n.upload(e.model.document);
            return e.progress = !0, t.then(function(t) {
                e.trigger("signup_uploadDocumentSucceed", t), e.progress = !1, e.document = angular.extend(t.data, e.document), e.document.file = e.document.path, e.upload()
            }), t.catch(function(t) {
                e.trigger("signup_uploadDocumentFailed", t), e.error(t), e.progress = !1
            }), !0
        }
        e.trigger("signup_createDocument", e.document);
        t = n.create(e.document);
        return e.progress = !0, t.then(function(t) {
            e.trigger("signup_createDocumentSucceed", t), e.progress = !1, e.succeed = t.data
        }), t.catch(function(t) {
            e.trigger("signup_createDocumentFailed", t), e.error(t), e.progress = !1
        }), !0
    }, e.retrieveCountries = function() {
        e.trigger("signup_retrieveCountries");
        var t = r.getCountries();
        t.then(function(t) {
            e.trigger("signup_retrieveCountriesSucceed", t), e.countries = t.data.countries
        }), t.catch(function(t) {
            e.trigger("signup_retrieveCountriesFailed", t), e.error(t)
        })
    }, e.$watch("model.country_id", function(t) {
        if (e.trigger("signup_retrieveStates", t), null != t) {
            e.states = e.cities = void 0;
            var n = r.getStates(t);
            e.progress = !0, n.then(function(t) {
                e.trigger("signup_retrieveStatesSucceed", t), e.progress = !1, e.states = t.data.states
            }), n.catch(function(t) {
                e.trigger("signup_retrieveStatesFailed", t), e.error(t), e.progress = !1
            })
        }
    }), e.$watch("model.state_id", function(t) {
        if (e.trigger("signup_retrieveCities", t), null != t) {
            e.cities = void 0;
            var n = r.getCities(t);
            e.progress = !0, n.then(function(t) {
                e.trigger("signup_retrieveCitiesSucceed", t), e.progress = !1, e.cities = t.data.cities
            }), n.catch(function(t) {
                e.trigger("signup_retrieveCitiesFailed", t), e.error(t), e.progress = !1
            })
        }
    }), e.retrieveCountries()
}]), angular.module("siteBuilder.public").controller("startup", ["$scope", "$websites", "$user", "$analytics", "$window", function(e, t, n, r, i) {
    e.step = "validate", e.progress = e.succeed = e.failed = !1, e.validate = function() {
        e.trigger("startup_validate", e.model);
        var t = n.validate(e.model ? {
            mobile: e.model.mobile
        } : e.model);
        e.progress = !0, t.then(function(t) {
            e.trigger("startup_validateSucceed", t), e.progress = !1, e.step = t.data.mobile ? "signin" : "signup", e.reset(e.model), "signin" == e.step && (e.model.username = e.model.mobile)
        }), t.catch(function(t) {
            e.trigger("startup_validateFailed", t), e.error(t), e.progress = !1
        })
    }, e.signup = function() {
        e.trigger("startup_signup", e.model);
        var t = n.signup(e.model);
        e.progress = !0, t.then(function(t) {
            e.trigger("startup_signupSucceed", t), r.signup(e.model.mobile), e.progress = !1, e.step = "create", e.reset(e.model)
        }), t.catch(function(t) {
            e.trigger("startup_signupFailed", t), e.error(t), e.progress = !1
        })
    }, e.signin = function() {
        e.trigger("startup_signin", e.model);
        var t = n.signin(e.model);
        e.progress = !0, t.then(function(t) {
            e.trigger("startup_signinSucceed", t), r.signin(e.model.mobile), e.progress = !1, e.step = "create", e.reset(e.model)
        }), t.catch(function(t) {
            e.trigger("startup_signinFailed", t), e.error(t), e.progress = !1
        })
    }, e.create = function() {
        var n = angular.copy(e.model);
        e.trigger("startup_create", n);
        var o = t.create(n);
        e.progress = !0, o.then(function(t) {
            e.trigger("startup_createSucceed", t), r.createWebsite(n.category, t.data.sub_domain), e.progress = !1, e.succeed = t.data, i.location = t.data.signin_url, e.step = "succeed"
        }), o.catch(function(t) {
            e.trigger("startup_createFailed", t), e.error(t), e.progress = !1
        })
    }, e.selectTemplate = function(t) {
        null == e.templateForced && (e.model.template_id = t)
    }, e.submit = function() {
        e[e.step].call()
    }, e.goto = function(t) {
        e.step = t || "validate"
    }, e.$root.startup = function(t) {
        e.model = {
            category: t
        };
        var n = angular.element("[startup].modal");
        n.modal("show"), setTimeout(function() {
            n.find("input:visible:first").focus()
        }, 500)
    }
}]), angular.module("siteBuilder.public").controller("store", ["$scope", "$element", "$window", "$http", "$httpParamSerializer", "$compile", "$timeout", function(e, t, n, r, i, o, a) {
    e.filters = {
        collection: {}
    }, e.loading = !1, e.collect = function() {
        for (var t in e.model = {}, e.ensure(!0), e.filters) e.filters[t] = !0 !== e.filters[t] && e.filters[t];
        if (e.model.filter) {
            var n = e.model.filter.match(/\d+/gi);
            n && n.forEach(function(t) {
                e.filters["filter" + t] = !0
            })
        }
        e.model.available = "true" == e.model.available
    }, e.params = function(t) {
        var n = angular.copy(e.model);
        return n.page = void 0, n.sorting = n.sorting || void 0, n.query = n.query || void 0, n.available = !!n.available || void 0, t && (n.available = n.filter = n.query = void 0), n
    }, e.search = function() {
        var t = "",
            r = [];
        Object.keys(e.filters.collection).forEach(function(n) {
            e.filters.collection[n].forEach(function(i, o, a) {
                a.indexOf(i) == o && !0 === e.filters["filter" + i] && (r.length > 0 && t != n && r.push("&"), r.push(i), t = n)
            })
        }), e.model.filter = r.join(",") || void 0, n.history.pushState(null, null, n.location.pathname + "?" + i(e.params())), e.load()
    }, e.sort = function(t) {
        e.model.sorting = t, e.search()
    }, n.onpopstate = function(t) {
        e.$destroyed || a(function() {
            e.collect(), e.load()
        })
    }, e.load = function() {
        e.trigger("store_load", e.model);
        var t = r.get(n.location.toString(), {
            headers: {
                "Content-Type": "text/html"
            }
        });
        e.loading = !0, t.then(function(t) {
            e.trigger("store_loadSucceed", t), e.loading = !1, e.$broadcast("ajax-content", t.data)
        }), t.catch(function(t) {
            e.trigger("store_loadFailed", t), e.error(t), e.loading = !1
        })
    }, e.remove = function() {
        n.history.pushState(null, null, n.location.pathname + "?" + i(e.params(!0))), e.load()
    }, e.addFilter = function(t, n) {
        var r = t.toString(),
            i = n.toString();
        e.filters.collection[i] = void 0 != e.filters.collection[i] ? e.filters.collection[i] : [], e.filters.collection[i].push(r)
    }, e.collect()
}]), angular.module("siteBuilder.public").controller("subscription", ["$scope", "$submissions", "$analytics", function(e, t, n) {
    e.model = {}, e.progress = e.succeed = e.failed = !1, e.collect = function(t) {
        var n = {
            label: t
        };
        e.ensure(!0, n)
    }, e.submit = function() {
        e.trigger("subscription_submit", e.model);
        var r = t.subscribe(e.model);
        e.progress = !0, r.then(function(t) {
            e.trigger("subscription_submitSucceed", t), n.subscribe(), e.progress = !1, e.reset(), e.succeed = t.data
        }), r.catch(function(t) {
            e.trigger("subscription_submitFailed", t), e.error(t), e.progress = !1
        })
    }
}]), angular.module("siteBuilder.public").controller("templates", ["$scope", "$websites", "$user", "$packages", "$whois", "$analytics", "$window", function(e, t, n, r, i, o, a) {
    e.model = {
        mode: "signup"
    }, e.progress = e.succeed = e.failed = !1, e.ensure(!0), e.filter = function(t) {
        if (!t) return !1;
        if (null != e.package) {
            var n = !1;
            if (t.split(",").forEach(function(t) {
                    e.filterCategory(t) && (n = !0)
                }), 0 == n) return !1
        }
        return null == e.model.category || t.indexOf(e.model.category) > -1
    }, e.filterCategory = function(t) {
        return 0 == /shop|reseller/gi.test(t) || null == e.package || e.package.features.indexOf(t.replace("shop", "store")) > -1
    }, e.selectCategory = function(t, n) {
        e.trigger("templates_selectCategory", t), e.model.category = t, n && n.preventDefault()
    }, e.select = function(t, n) {
        e.trigger("templates_select", t), e.model.template_id = t, e.categories = n ? n.split(",") : null, e.model.category || e.categories && 1 == e.categories.length && (e.model.category = e.categories[0])
    }, e.retrievePackage = function() {
        null != e.model.package && (e.loading = !0, r.getSingle(e.model.package).then(function(t) {
            e.package = t.data.package, e.loading = !1
        }))
    }, e.authenticate = function() {
        if (null == e.auth) return !1;
        e.trigger("templates_authenticate", e.model);
        var t = n[e.model.mode](e.model);
        return e.progress = !0, t.then(function(t) {
            e.trigger("templates_authenticateSucceed", t), o[e.model.mode](e.model.mobile || e.model.username), e.progress = !1, e.authenticated = !0, e.submit()
        }), t.catch(function(t) {
            e.trigger("templates_authenticateFailed", t), e.error(t), e.progress = !1
        }), !0
    }, e.submit = function() {
        if (e.authenticated || !e.authenticate()) {
            var n = angular.copy(e.model);
            null != n.package && (n.package_id = parseInt(n.package) || void 0, delete n.package), e.trigger("templates_submit", n);
            var r = t.create(n);
            e.progress = !0, r.then(function(t) {
                e.trigger("templates_submitSucceed", t), o.createWebsite(n.category, t.data.sub_domain), e.progress = !1, e.succeed = t.data
            }), r.catch(function(t) {
                e.trigger("templates_submitFailed", t), e.error(t), e.progress = !1
            })
        }
    }, e.whois = function(t) {
        e.trigger("templates_whois", e.domain);
        var n = angular.copy(e.domain);
        n.name = t ? n.name + t : n.name;
        var r = i.get(n);
        e.progress = !0, r.then(function(n) {
            e.trigger("templates_whoisSucceed", n), o.whois(), e.progress = !1, angular.extend(e.domain, n.data), t && (e.domain.fullname = e.domain.name, e.domain.name = e.domain.name.replace(t, ""))
        }), r.catch(function(t) {
            e.trigger("templates_whoisFailed", t), e.error(t), e.progress = !1
        })
    }, e.retrievePackage()
}]), angular.module("siteBuilder.public").controller("whois", ["$scope", "$whois", "$analytics", function(e, t, n) {
    e.model = {}, e.progress = e.succeed = e.failed = !1, e.collect = function() {
        e.ensure(!0)
    }, e.submit = function(r) {
        e.trigger("whois_submit", e.model), e.succeed = null;
        var i = angular.copy(e.model);
        i.name = r ? i.name + r : i.name;
        var o = t.get(i);
        e.progress = !0, o.then(function(t) {
            e.trigger("whois_submitSucceed", t), n.whois(), e.progress = !1, e.succeed = t.data
        }), o.catch(function(t) {
            e.trigger("whois_submitFailed", t), e.error(t), e.progress = !1
        })
    }
}]);