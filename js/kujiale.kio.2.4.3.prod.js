var kio = function() {
    "use strict";
    var t = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
    function e(t) {
        return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t
    }
    function n(t, e) {
        return t(e = {
            exports: {}
        }, e.exports),
        e.exports
    }
    var m = n(function(t) {
        var e = t.exports = "undefined" != typeof window && window.Math == Math ? window : "undefined" != typeof self && self.Math == Math ? self : Function("return this")();
        "number" == typeof __g && (__g = e)
    })
      , h = n(function(t) {
        var e = t.exports = {
            version: "2.5.7"
        };
        "number" == typeof __e && (__e = e)
    })
      , g = (h.version,
    function(r, o, t) {
        if (function(t) {
            if ("function" != typeof t)
                throw TypeError(t + " is not a function!")
        }(r),
        void 0 === o)
            return r;
        switch (t) {
        case 1:
            return function(t) {
                return r.call(o, t)
            }
            ;
        case 2:
            return function(t, e) {
                return r.call(o, t, e)
            }
            ;
        case 3:
            return function(t, e, n) {
                return r.call(o, t, e, n)
            }
        }
        return function() {
            return r.apply(o, arguments)
        }
    }
    )
      , o = function(t) {
        return "object" == typeof t ? null !== t : "function" == typeof t
    }
      , r = function(t) {
        if (!o(t))
            throw TypeError(t + " is not an object!");
        return t
    }
      , i = function(t) {
        try {
            return !!t()
        } catch (t) {
            return !0
        }
    }
      , u = !i(function() {
        return 7 != Object.defineProperty({}, "a", {
            get: function() {
                return 7
            }
        }).a
    })
      , a = m.document
      , c = o(a) && o(a.createElement)
      , f = !u && !i(function() {
        return 7 != Object.defineProperty((t = "div",
        c ? a.createElement(t) : {}), "a", {
            get: function() {
                return 7
            }
        }).a;
        var t
    })
      , s = Object.defineProperty
      , l = {
        f: u ? Object.defineProperty : function(t, e, n) {
            if (r(t),
            e = function(t, e) {
                if (!o(t))
                    return t;
                var n, r;
                if (e && "function" == typeof (n = t.toString) && !o(r = n.call(t)))
                    return r;
                if ("function" == typeof (n = t.valueOf) && !o(r = n.call(t)))
                    return r;
                if (!e && "function" == typeof (n = t.toString) && !o(r = n.call(t)))
                    return r;
                throw TypeError("Can't convert object to primitive value")
            }(e, !0),
            r(n),
            f)
                try {
                    return s(t, e, n)
                } catch (t) {}
            if ("get"in n || "set"in n)
                throw TypeError("Accessors not supported!");
            return "value"in n && (t[e] = n.value),
            t
        }
    }
      , y = u ? function(t, e, n) {
        return l.f(t, e, {
            enumerable: !((r = 1) & r),
            configurable: !(2 & r),
            writable: !(4 & r),
            value: n
        });
        var r
    }
    : function(t, e, n) {
        return t[e] = n,
        t
    }
      , d = {}.hasOwnProperty
      , w = function(t, e) {
        return d.call(t, e)
    }
      , b = "prototype"
      , O = function(t, e, n) {
        var r, o, i, u = t & O.F, a = t & O.G, c = t & O.S, f = t & O.P, s = t & O.B, l = t & O.W, d = a ? h : h[e] || (h[e] = {}), p = d[b], v = a ? m : c ? m[e] : (m[e] || {})[b];
        for (r in a && (n = e),
        n)
            (o = !u && v && void 0 !== v[r]) && w(d, r) || (i = o ? v[r] : n[r],
            d[r] = a && "function" != typeof v[r] ? n[r] : s && o ? g(i, m) : l && v[r] == i ? function(r) {
                var t = function(t, e, n) {
                    if (this instanceof r) {
                        switch (arguments.length) {
                        case 0:
                            return new r;
                        case 1:
                            return new r(t);
                        case 2:
                            return new r(t,e)
                        }
                        return new r(t,e,n)
                    }
                    return r.apply(this, arguments)
                };
                return t[b] = r[b],
                t
            }(i) : f && "function" == typeof i ? g(Function.call, i) : i,
            f && ((d.virtual || (d.virtual = {}))[r] = i,
            t & O.R && p && !p[r] && y(p, r, i)))
    };
    O.F = 1,
    O.G = 2,
    O.S = 4,
    O.P = 8,
    O.B = 16,
    O.W = 32,
    O.U = 64,
    O.R = 128;
    var p, v, I, T = O, j = {}.toString, _ = Object("z").propertyIsEnumerable(0) ? Object : function(t) {
        return "String" == (e = t,
        j.call(e).slice(8, -1)) ? t.split("") : Object(t);
        var e
    }
    , k = function(t) {
        if (null == t)
            throw TypeError("Can't call method on  " + t);
        return t
    }, M = function(t) {
        return _(k(t))
    }, E = Math.ceil, x = Math.floor, S = function(t) {
        return isNaN(t = +t) ? 0 : (0 < t ? x : E)(t)
    }, C = Math.min, P = Math.max, R = Math.min, A = n(function(t) {
        var e = "__core-js_shared__"
          , n = m[e] || (m[e] = {});
        (t.exports = function(t, e) {
            return n[t] || (n[t] = void 0 !== e ? e : {})
        }
        )("versions", []).push({
            version: h.version,
            mode: "pure",
            copyright: "© 2018 Denis Pushkarev (zloirock.ru)"
        })
    }), N = 0, L = Math.random(), U = A("keys"), D = (p = !1,
    function(t, e, n) {
        var r, o, i, u, a = M(t), c = 0 < (r = a.length) ? C(S(r), 9007199254740991) : 0, f = (i = c,
        (o = S(o = n)) < 0 ? P(o + i, 0) : R(o, i));
        if (p && e != e) {
            for (; f < c; )
                if ((u = a[f++]) != u)
                    return !0
        } else
            for (; f < c; f++)
                if ((p || f in a) && a[f] === e)
                    return p || f || 0;
        return !p && -1
    }
    ), H = U[v = "IE_PROTO"] || (U[v] = "Symbol(".concat(void 0 === (I = v) ? "" : I, ")_", (++N + L).toString(36))), q = "constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(","), F = Object.keys || function(t) {
        return function(t, e) {
            var n, r = M(t), o = 0, i = [];
            for (n in r)
                n != H && w(r, n) && i.push(n);
            for (; e.length > o; )
                w(r, n = e[o++]) && (~D(i, n) || i.push(n));
            return i
        }(t, q)
    }
    , z = {
        f: Object.getOwnPropertySymbols
    }, W = {
        f: {}.propertyIsEnumerable
    }, G = function(t) {
        return Object(k(t))
    }, $ = Object.assign, B = !$ || i(function() {
        var t = {}
          , e = {}
          , n = Symbol()
          , r = "abcdefghijklmnopqrst";
        return t[n] = 7,
        r.split("").forEach(function(t) {
            e[t] = t
        }),
        7 != $({}, t)[n] || Object.keys($({}, e)).join("") != r
    }) ? function(t, e) {
        for (var n = G(t), r = arguments.length, o = 1, i = z.f, u = W.f; o < r; )
            for (var a, c = _(arguments[o++]), f = i ? F(c).concat(i(c)) : F(c), s = f.length, l = 0; l < s; )
                u.call(c, a = f[l++]) && (n[a] = c[a]);
        return n
    }
    : $;
    T(T.S + T.F, "Object", {
        assign: B
    });
    var J = h.Object.assign
      , V = e(n(function(t) {
        t.exports = {
            default: J,
            __esModule: !0
        }
    }))
      , K = NaN
      , X = "[object Symbol]"
      , Z = /^\s+|\s+$/g
      , Y = /^[-+]0x[0-9a-f]+$/i
      , Q = /^0b[01]+$/i
      , tt = /^0o[0-7]+$/i
      , et = parseInt
      , nt = "object" == typeof t && t && t.Object === Object && t
      , rt = "object" == typeof self && self && self.Object === Object && self
      , ot = nt || rt || Function("return this")()
      , it = Object.prototype.toString
      , ut = Math.max
      , at = Math.min
      , ct = function() {
        return ot.Date.now()
    };
    function ft(t) {
        var e = typeof t;
        return !!t && ("object" == e || "function" == e)
    }
    function st(t) {
        if ("number" == typeof t)
            return t;
        if ("symbol" == typeof (e = t) || (n = e) && "object" == typeof n && it.call(e) == X)
            return K;
        var e, n;
        if (ft(t)) {
            var r = "function" == typeof t.valueOf ? t.valueOf() : t;
            t = ft(r) ? r + "" : r
        }
        if ("string" != typeof t)
            return 0 === t ? t : +t;
        t = t.replace(Z, "");
        var o = Q.test(t);
        return o || tt.test(t) ? et(t.slice(2), o ? 2 : 8) : Y.test(t) ? K : +t
    }
    var lt, dt, pt, vt, mt = function(r, o, t) {
        var i, u, a, c, f, s, l = 0, d = !1, p = !1, e = !0;
        if ("function" != typeof r)
            throw new TypeError("Expected a function");
        function v(t) {
            var e = i
              , n = u;
            return i = u = void 0,
            l = t,
            c = r.apply(n, e)
        }
        function m(t) {
            var e = t - s;
            return void 0 === s || o <= e || e < 0 || p && a <= t - l
        }
        function h() {
            var t, e, n = ct();
            if (m(n))
                return g(n);
            f = setTimeout(h, (e = o - ((t = n) - s),
            p ? at(e, a - (t - l)) : e))
        }
        function g(t) {
            return f = void 0,
            e && i ? v(t) : (i = u = void 0,
            c)
        }
        function n() {
            var t, e = ct(), n = m(e);
            if (i = arguments,
            u = this,
            s = e,
            n) {
                if (void 0 === f)
                    return l = t = s,
                    f = setTimeout(h, o),
                    d ? v(t) : c;
                if (p)
                    return f = setTimeout(h, o),
                    v(s)
            }
            return void 0 === f && (f = setTimeout(h, o)),
            c
        }
        return o = st(o) || 0,
        ft(t) && (d = !!t.leading,
        a = (p = "maxWait"in t) ? ut(st(t.maxWait) || 0, o) : a,
        e = "trailing"in t ? !!t.trailing : e),
        n.cancel = function() {
            void 0 !== f && clearTimeout(f),
            i = s = u = f = void (l = 0)
        }
        ,
        n.flush = function() {
            return void 0 === f ? c : g(ct())
        }
        ,
        n
    };
    lt = "keys",
    dt = function() {
        return function(t) {
            return F(G(t))
        }
    }
    ,
    pt = (h.Object || {})[lt] || Object[lt],
    (vt = {})[lt] = dt(pt),
    T(T.S + T.F * i(function() {
        pt(1)
    }), "Object", vt);
    var ht = h.Object.keys
      , gt = e(n(function(t) {
        t.exports = {
            default: ht,
            __esModule: !0
        }
    }))
      , yt = h.JSON || (h.JSON = {
        stringify: JSON.stringify
    })
      , wt = function(t) {
        return yt.stringify.apply(yt, arguments)
    }
      , bt = e(n(function(t) {
        t.exports = {
            default: wt,
            __esModule: !0
        }
    }));
    function Ot(t, e, n) {
        var r = new XMLHttpRequest;
        r.open("POST", t, !n),
        r.setRequestHeader("Content-Type", "application/json; charset=utf-8"),
        r.send(bt(e))
    }
    function It(t) {
        window.parent.postMessage(bt(t), "*")
    }
    function Tt(t, e, n) {
        var r = t.trim().split("?")
          , o = r[0]
          , i = r[1];
        if (!i)
            return o + "?" + e + "=" + n;
        var u = i.split("#")[1]
          , a = Et(t)
          , c = a.map(function(t) {
            return t.key
        }).indexOf(e);
        return o + "?" + (-1 < c ? a.slice(0, c).concat([{
            key: e,
            value: n
        }], a.slice(c + 1)) : a.concat([{
            key: e,
            value: n
        }])).map(function(t) {
            return t.key + "=" + t.value
        }).join("&") + (u ? "#" : "") + (u || "")
    }
    function jt(t) {
        return JSON.parse(bt(t))
    }
    function _t(t) {
        for (var e = t.tagName.toLowerCase(), n = arguments.length, r = Array(1 < n ? n - 1 : 0), o = 1; o < n; o++)
            r[o - 1] = arguments[o];
        return -1 < r.indexOf(e)
    }
    function kt(t) {
        return t.split("").reverse().join("")
    }
    function Mt() {
        return function(t) {
            var e = document.cookie;
            if ("" === e)
                return "";
            for (var n = e.split("; "), r = 0; r < n.length; r++) {
                var o = n[r]
                  , i = o.indexOf("=");
                if (decodeURIComponent(o.substring(0, i)) === t)
                    return decodeURIComponent(o.substring(i + 1))
            }
            return ""
        }("qhdi") || "none"
    }
    function Et(t) {
        return ((t.trim().split("?")[1] || "").split("#")[0] || "").replace(/&+/g, "&").split("&").filter(function(t) {
            return t
        }).map(function(t) {
            var e = t.split("=");
            return {
                key: e[0],
                value: e.slice(1).join("=")
            }
        })
    }
    function xt(t) {
        for (var e = Et(t), n = {
            utm_campaign: "",
            utm_content: "",
            utm_medium: "",
            utm_source: ""
        }, r = gt(n), o = 0; o < e.length; o++) {
            var i = e[o];
            -1 < r.indexOf(i.key) && (n[i.key] = i.value)
        }
        return n
    }
    function St(t) {
        var e = window.location.host
          , n = window.location.pathname;
        if (!t || "history" === t.toLowerCase())
            return e + n;
        var r = window.location.hash
          , o = -1 === r.indexOf("?") ? void 0 : r.indexOf("?");
        return "/" === n[n.length - 1] ? e + n + r.slice(2, o) : e + n + r.slice(1, o)
    }
    var Ct = "actionstat.kujiale.com"
      , Pt = function(t, e) {
        var n = 2 < arguments.length && void 0 !== arguments[2] && arguments[2];
        Ot("https://" + Ct + "/api/toolbehaviors/" + t + "/" + (n ? "multilog" : "log"), e)
    }
      , Rt = function(t, e) {
        e ? navigator.sendBeacon ? navigator.sendBeacon("https://" + Ct + "/v2/api/eventtrack/text", bt(t)) : Ot("https://" + Ct + "/v2/api/eventtrack", t, !0) : Ot("https://" + Ct + "/v2/api/eventtrack", t)
    }
      , At = function(t) {
        Ot("https://" + Ct + "/api/toolbehaviors/yuntaiGeneralTargetAction/log", t)
    };
    T(T.S + T.F * !u, "Object", {
        defineProperty: l.f
    });
    var Nt = h.Object
      , Lt = function(t, e, n) {
        return Nt.defineProperty(t, e, n)
    }
      , Ut = n(function(t) {
        t.exports = {
            default: Lt,
            __esModule: !0
        }
    });
    e(Ut);
    var Dt = e(n(function(t, e) {
        e.__esModule = !0;
        var n, r = (n = Ut) && n.__esModule ? n : {
            default: n
        };
        e.default = function(t, e, n) {
            return e in t ? (0,
            r.default)(t, e, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : t[e] = n,
            t
        }
    }))
      , Ht = "data-kioid"
      , qt = "data-kio"
      , Ft = "data-kmetricname"
      , zt = "data-kmetrics"
      , Wt = "data-kiocg";
    function Gt(t, u) {
        return [].reduce.call(t.attributes, function(e, t) {
            if (0 === t.name.indexOf(u + "-") || 0 === t.name.indexOf(u + "_")) {
                var n = t.name.slice(u.length).match(/^_?(\w*)-?(.*)$/)
                  , r = n ? n[1] : ""
                  , o = n ? n[2].split("-").map(function(t, e) {
                    return 0 < e ? t[0].toUpperCase() + t.slice(1) : t
                }).join("") : ""
                  , i = t.value;
                if ("number" === r)
                    return V(e, Dt({}, o, Number(i)));
                if ("string" === r)
                    return V(e, Dt({}, o, String(i)));
                if ("json" === r)
                    try {
                        return V(e, Dt({}, o, JSON.parse(i)))
                    } catch (t) {
                        return V(e, Dt({}, o, i))
                    }
                return V(e, "true" === i || "false" === i ? Dt({}, o, "true" === i) : Dt({}, o, i))
            }
            return e
        }, {})
    }
    var $t = n(function(u) {
        !function(t) {
            function l(t, e) {
                var n = (65535 & t) + (65535 & e);
                return (t >> 16) + (e >> 16) + (n >> 16) << 16 | 65535 & n
            }
            function a(t, e, n, r, o, i) {
                return l((u = l(l(e, t), l(r, i))) << (a = o) | u >>> 32 - a, n);
                var u, a
            }
            function d(t, e, n, r, o, i, u) {
                return a(e & n | ~e & r, t, e, o, i, u)
            }
            function p(t, e, n, r, o, i, u) {
                return a(e & r | n & ~r, t, e, o, i, u)
            }
            function v(t, e, n, r, o, i, u) {
                return a(e ^ n ^ r, t, e, o, i, u)
            }
            function m(t, e, n, r, o, i, u) {
                return a(n ^ (e | ~r), t, e, o, i, u)
            }
            function c(t, e) {
                var n, r, o, i, u;
                t[e >> 5] |= 128 << e % 32,
                t[14 + (e + 64 >>> 9 << 4)] = e;
                var a = 1732584193
                  , c = -271733879
                  , f = -1732584194
                  , s = 271733878;
                for (n = 0; n < t.length; n += 16)
                    c = m(c = m(c = m(c = m(c = v(c = v(c = v(c = v(c = p(c = p(c = p(c = p(c = d(c = d(c = d(c = d(o = c, f = d(i = f, s = d(u = s, a = d(r = a, c, f, s, t[n], 7, -680876936), c, f, t[n + 1], 12, -389564586), a, c, t[n + 2], 17, 606105819), s, a, t[n + 3], 22, -1044525330), f = d(f, s = d(s, a = d(a, c, f, s, t[n + 4], 7, -176418897), c, f, t[n + 5], 12, 1200080426), a, c, t[n + 6], 17, -1473231341), s, a, t[n + 7], 22, -45705983), f = d(f, s = d(s, a = d(a, c, f, s, t[n + 8], 7, 1770035416), c, f, t[n + 9], 12, -1958414417), a, c, t[n + 10], 17, -42063), s, a, t[n + 11], 22, -1990404162), f = d(f, s = d(s, a = d(a, c, f, s, t[n + 12], 7, 1804603682), c, f, t[n + 13], 12, -40341101), a, c, t[n + 14], 17, -1502002290), s, a, t[n + 15], 22, 1236535329), f = p(f, s = p(s, a = p(a, c, f, s, t[n + 1], 5, -165796510), c, f, t[n + 6], 9, -1069501632), a, c, t[n + 11], 14, 643717713), s, a, t[n], 20, -373897302), f = p(f, s = p(s, a = p(a, c, f, s, t[n + 5], 5, -701558691), c, f, t[n + 10], 9, 38016083), a, c, t[n + 15], 14, -660478335), s, a, t[n + 4], 20, -405537848), f = p(f, s = p(s, a = p(a, c, f, s, t[n + 9], 5, 568446438), c, f, t[n + 14], 9, -1019803690), a, c, t[n + 3], 14, -187363961), s, a, t[n + 8], 20, 1163531501), f = p(f, s = p(s, a = p(a, c, f, s, t[n + 13], 5, -1444681467), c, f, t[n + 2], 9, -51403784), a, c, t[n + 7], 14, 1735328473), s, a, t[n + 12], 20, -1926607734), f = v(f, s = v(s, a = v(a, c, f, s, t[n + 5], 4, -378558), c, f, t[n + 8], 11, -2022574463), a, c, t[n + 11], 16, 1839030562), s, a, t[n + 14], 23, -35309556), f = v(f, s = v(s, a = v(a, c, f, s, t[n + 1], 4, -1530992060), c, f, t[n + 4], 11, 1272893353), a, c, t[n + 7], 16, -155497632), s, a, t[n + 10], 23, -1094730640), f = v(f, s = v(s, a = v(a, c, f, s, t[n + 13], 4, 681279174), c, f, t[n], 11, -358537222), a, c, t[n + 3], 16, -722521979), s, a, t[n + 6], 23, 76029189), f = v(f, s = v(s, a = v(a, c, f, s, t[n + 9], 4, -640364487), c, f, t[n + 12], 11, -421815835), a, c, t[n + 15], 16, 530742520), s, a, t[n + 2], 23, -995338651), f = m(f, s = m(s, a = m(a, c, f, s, t[n], 6, -198630844), c, f, t[n + 7], 10, 1126891415), a, c, t[n + 14], 15, -1416354905), s, a, t[n + 5], 21, -57434055), f = m(f, s = m(s, a = m(a, c, f, s, t[n + 12], 6, 1700485571), c, f, t[n + 3], 10, -1894986606), a, c, t[n + 10], 15, -1051523), s, a, t[n + 1], 21, -2054922799), f = m(f, s = m(s, a = m(a, c, f, s, t[n + 8], 6, 1873313359), c, f, t[n + 15], 10, -30611744), a, c, t[n + 6], 15, -1560198380), s, a, t[n + 13], 21, 1309151649), f = m(f, s = m(s, a = m(a, c, f, s, t[n + 4], 6, -145523070), c, f, t[n + 11], 10, -1120210379), a, c, t[n + 2], 15, 718787259), s, a, t[n + 9], 21, -343485551),
                    a = l(a, r),
                    c = l(c, o),
                    f = l(f, i),
                    s = l(s, u);
                return [a, c, f, s]
            }
            function f(t) {
                var e, n = "", r = 32 * t.length;
                for (e = 0; e < r; e += 8)
                    n += String.fromCharCode(t[e >> 5] >>> e % 32 & 255);
                return n
            }
            function s(t) {
                var e, n = [];
                for (n[(t.length >> 2) - 1] = void 0,
                e = 0; e < n.length; e += 1)
                    n[e] = 0;
                var r = 8 * t.length;
                for (e = 0; e < r; e += 8)
                    n[e >> 5] |= (255 & t.charCodeAt(e / 8)) << e % 32;
                return n
            }
            function r(t) {
                var e, n, r = "0123456789abcdef", o = "";
                for (n = 0; n < t.length; n += 1)
                    e = t.charCodeAt(n),
                    o += r.charAt(e >>> 4 & 15) + r.charAt(15 & e);
                return o
            }
            function n(t) {
                return unescape(encodeURIComponent(t))
            }
            function o(t) {
                return f(c(s(e = n(t)), 8 * e.length));
                var e
            }
            function i(t, e) {
                return function(t, e) {
                    var n, r, o = s(t), i = [], u = [];
                    for (i[15] = u[15] = void 0,
                    16 < o.length && (o = c(o, 8 * t.length)),
                    n = 0; n < 16; n += 1)
                        i[n] = 909522486 ^ o[n],
                        u[n] = 1549556828 ^ o[n];
                    return r = c(i.concat(s(e)), 512 + 8 * e.length),
                    f(c(u.concat(r), 640))
                }(n(t), n(e))
            }
            function e(t, e, n) {
                return e ? n ? i(e, t) : r(i(e, t)) : n ? o(t) : r(o(t))
            }
            u.exports ? u.exports = e : t.md5 = e
        }(t)
    });
    function Bt(t, e) {
        for (var n, r, o, i, u, a, c, f, s, l, d = 2 < arguments.length && void 0 !== arguments[2] && arguments[2], p = {}, v = {}, m = {}, h = "", g = "", y = "", w = t, b = null, O = [], I = [], T = []; w && !_t(w, "html"); ) {
            !b && _t(w, "a") && (p = V(p, {
                href: (n = (b = w).getAttribute("href") || "",
                0 === n.indexOf("data:") ? n.slice(0, n.indexOf(",")) : n)
            })),
            "" === h && (h = w.getAttribute(Ft) || "") && (m = Gt(w, zt));
            var j = Gt(w, qt);
            0 !== gt(j).length && (v = V(j, v)),
            "" === g && (g = w.getAttribute(Wt) || "");
            var _ = Vt(w, e.classIdMode)
              , k = _.pathUnit
              , M = _.elementIdUnit
              , E = _.classIdUnit;
            O.unshift(k),
            I.unshift(M),
            e.classIdMode && T.unshift(E),
            w = w.parentElement
        }
        return p = V(p, (i = t.getBoundingClientRect(),
        u = i.top,
        a = i.right,
        c = i.bottom,
        f = i.left,
        s = window.pageYOffset,
        l = window.pageXOffset,
        {
            top: Math.round(u + s),
            right: Math.round(a + l),
            bottom: Math.round(c + s),
            left: Math.round(f + l)
        }), {
            nodeText: function(t) {
                if (_t(t, "a"))
                    return Kt(t.innerText.slice(0, Xt));
                return Kt([].filter.call(t.childNodes, function(t) {
                    return 3 === t.nodeType
                }).map(function(t) {
                    return t.textContent
                }).join(" ").slice(0, Xt))
            }(b || t),
            title: (o = b || t,
            o.getAttribute("title") || ""),
            elementId: (r = I,
            ["html"].concat(r).reverse().reduce(function(t, e) {
                return 0 === t.length ? t.concat(e) : -1 < t[t.length - 1].indexOf("#") ? t : t.concat(e)
            }, []).reverse().join(" > ")),
            path: Jt(O),
            classId: Jt(e.classIdMode ? T : O)
        }),
        (d || b) && (y = function(t, e) {
            var n = [e.namespaceId, $t(e.pageId + ":" + e.urlId).substring(8, 24), $t(e.path).substring(0, 7), e.pageTimestamp].join(".");
            if ("off" === t.getAttribute("kpm"))
                return n;
            if (_t(t, "a")) {
                var r = t.getAttribute("href") || "";
                /^(https?:)?\/\/?/.test(r) && (t.href = Tt(r, "kpm", n))
            }
            return n
        }(d ? t : b, {
            namespaceId: e.namespaceId,
            urlId: St(e.spaRouterMode),
            pageId: e.pageId,
            path: p.path,
            pageTimestamp: e.pageTimestamp
        })),
        {
            element: p,
            autoTrackCustomized: v,
            kpm: y,
            manualTrackName: h,
            manualTrackData: m,
            conversionGoal: g
        }
    }
    function Jt(t) {
        return t.join(">")
    }
    function Vt(t, e) {
        for (var n = t.tagName.toLowerCase(), r = t.getAttribute(Ht) || "" || t.getAttribute("id"), o = t.getAttribute("id"), i = 0, u = 0, a = t.parentElement.children, c = 0; c < a.length; c++)
            a[c].tagName.toLowerCase() === n && (a[c] === t && (u = i),
            i++);
        var f, s = {
            pathUnit: r ? n + ":" + u + "#" + r : n + ":" + u,
            elementIdUnit: o ? n + "#" + o : n + (1 < i ? ":eq(" + u + ")" : "")
        };
        if (e) {
            var l = (f = t,
            [].join.call(f.classList, ",") || r);
            s = V(s, {
                classIdUnit: l ? n + ":" + u + "#" + l : n + ":" + u
            })
        }
        return s
    }
    function Kt(t) {
        return t.replace(/\s+/g, " ").trim()
    }
    var Xt = 100;
    var Zt = void 0
      , Yt = void 0
      , Qt = void 0
      , te = void 0
      , ee = {
        _urlId: "",
        _href: "",
        _status: "",
        getUrl: function() {
            return this._urlId
        },
        getHref: function() {
            return this._href
        },
        setState: function(t) {
            this._urlId = t.urlId || this._urlId,
            this._status = t.status || this._status,
            this._href = t.href || this._href
        },
        eqStatus: function(t) {
            return this._status === t
        }
    }
      , ne = void 0
      , re = Date.now()
      , oe = Date.now();
    return window.addEventListener("load", function() {
        ne = Date.now()
    }),
    function(t, e, n) {
        if (Zt)
            return Yt = V(Yt, t || {}),
            Qt = V(Qt, e || {}),
            te = V(te, n || {}),
            Zt;
        var r, o, a = Yt = jt(t || {}), i = Qt = jt(e || {}), u = te = jt(n || {}), c = !1, f = !1, s = ((o = r = void 0) !== document.hidden ? (r = "hidden",
        o = "visibilitychange") : void 0 !== document.msHidden ? (r = "msHidden",
        o = "msvisibilitychange") : void 0 !== document.webkitHidden && (r = "webkitHidden",
        o = "webkitvisibilitychange"),
        {
            hidden: r,
            visibilityChange: o
        });
        function l() {
            document[s.hidden] ? v() : p()
        }
        function d(t) {
            m(y({
                eventType: "loadEvent",
                triggerTimestamp: t
            }))
        }
        function p(t) {
            var e = St(a.spaRouterMode);
            e === ee.getUrl() && ee.eqStatus("ACTIVE") || (ee.setState({
                urlId: e,
                href: window.location.href,
                status: "ACTIVE"
            }),
            m(y({
                eventType: "activeEvent",
                triggerTimestamp: t
            })))
        }
        function v() {
            St(a.spaRouterMode) === ee.getUrl() && ee.eqStatus("FREEZE") || (ee.setState({
                status: "FREEZE"
            }),
            m(y({
                element: {
                    urlId: ee.getUrl()
                },
                eventProps: {
                    url: ee.getHref()
                },
                eventType: "freezeEvent"
            }), !0))
        }
        function m(t, e) {
            c ? It(t) : Rt(t, e)
        }
        function h(t) {
            var e, n = function() {
                var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : window.location.hostname
                  , e = t.match(/(\w+\.\w+)$/);
                return e ? e[1] : t
            }();
            e = n,
            0 === kt(t.origin).indexOf(kt(e)) && "CIRCLE" === t.data && (document.domain = n,
            c = !0,
            g())
        }
        function g(t) {
            if (f) {
                var e = St(a.spaRouterMode)
                  , n = ee.getUrl();
                n && e !== n && v(),
                p(t),
                m(y({
                    eventType: "pageEvent",
                    triggerTimestamp: t
                }))
            }
        }
        function y(t) {
            return {
                behaviorDescription: "WebEventTrack",
                eventType: t.eventType,
                pageTimestamp: oe,
                triggerTimestamp: t.triggerTimestamp || Date.now(),
                user: {
                    userId: a.userId || "",
                    qhdi: Mt()
                },
                element: V({
                    classIdMode: a.classIdMode,
                    clientVersion: a.clientVersion || "",
                    namespaceId: a.namespaceId,
                    pageId: a.pageName || "",
                    pageDescription: a.pageDescription || "",
                    urlId: St(a.spaRouterMode)
                }, t.element),
                eventProps: V({
                    url: window.location.href
                }, t.eventProps),
                envProps: V({
                    sdkVersion: "2.4.3",
                    screenHeight: window.screen.height,
                    screenWidth: window.screen.width,
                    viewHeight: window.innerHeight,
                    viewWidth: window.innerWidth
                }, xt(window.location.href)),
                customized: V({}, u, t.customized)
            }
        }
        function w(t, e) {
            Pt(t, V({}, i, e))
        }
        function b(t) {
            At(V({
                userId: a.userId || "",
                triggertime: Date.now(),
                qhdi: Mt(),
                url: window.location.href,
                conversionGoal: t,
                urlId: St(a.spaRouterMode)
            }, xt(window.location.href)))
        }
        function O(t) {
            return Bt(t, {
                namespaceId: a.namespaceId,
                pageId: a.pageName || "",
                spaRouterMode: a.spaRouterMode,
                classIdMode: a.classIdMode,
                pageTimestamp: oe
            }, !0).kpm
        }
        return setTimeout(function() {
            f = !0,
            g(re),
            d(ne),
            document.addEventListener(s.visibilityChange, l)
        }, 100),
        document.body.addEventListener("click", function(t) {
            var e = Bt(t.target, {
                namespaceId: a.namespaceId,
                pageId: a.pageName || "",
                spaRouterMode: a.spaRouterMode,
                classIdMode: a.classIdMode,
                pageTimestamp: oe
            })
              , n = e.element
              , r = e.autoTrackCustomized
              , o = e.manualTrackName
              , i = e.manualTrackData
              , u = e.conversionGoal;
            m(y({
                eventType: "clickEvent",
                element: n,
                customized: r
            })),
            o && w(o, i),
            u && b(u)
        }, !0),
        window.addEventListener("scroll", mt(function() {
            m(y({
                eventType: "scrollEvent",
                eventProps: {
                    endPos: document.documentElement.scrollTop || document.body.scrollTop
                }
            }))
        }, 300)),
        window.addEventListener("unload", v),
        window.addEventListener("message", h),
        setTimeout(function() {
            window.removeEventListener("message", h)
        }, 2e4),
        It("KIO"),
        Zt = {
            setManualCommon: function(t, e) {
                "string" == typeof t ? i[t] = jt(e) : i = jt(t)
            },
            setAutoCustomized: function(t, e) {
                "string" == typeof t ? u[t] = jt(e) : u = jt(t)
            },
            log: w,
            multiLog: function(t, e) {
                Pt(t, {
                    common: V({}, i, e.common || {}),
                    list: e.list
                }, !0)
            },
            to: function(t, e) {
                window.location.href = Tt(e, "kpm", O(t))
            },
            getKpm: O,
            open: function(t, e) {
                window.open(Tt(e, "kpm", O(t)))
            },
            getConfig: function(t) {
                return a[t]
            },
            resetConfig: function(t, e) {
                a[t] = e
            },
            pv: function() {
                oe = Date.now(),
                g()
            },
            pl: d,
            logCG: b
        }
    }
}();
