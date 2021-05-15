/*! jQuery v3.4.1 | (c) JS Foundation and other contributors | jquery.org/license */
!function(e, t) {
    "use strict";
    "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function(e) {
        if (!e.document)
            throw new Error("jQuery requires a window with a document");
        return t(e)
    }
    : t(e)
}("undefined" != typeof window ? window : this, function(C, e) {
    "use strict";
    var t = []
      , E = C.document
      , r = Object.getPrototypeOf
      , s = t.slice
      , g = t.concat
      , u = t.push
      , i = t.indexOf
      , n = {}
      , o = n.toString
      , v = n.hasOwnProperty
      , a = v.toString
      , l = a.call(Object)
      , y = {}
      , m = function(e) {
        return "function" == typeof e && "number" != typeof e.nodeType
    }
      , x = function(e) {
        return null != e && e === e.window
    }
      , c = {
        type: !0,
        src: !0,
        nonce: !0,
        noModule: !0
    };
    function b(e, t, n) {
        var r, i, o = (n = n || E).createElement("script");
        if (o.text = e,
        t)
            for (r in c)
                (i = t[r] || t.getAttribute && t.getAttribute(r)) && o.setAttribute(r, i);
        n.head.appendChild(o).parentNode.removeChild(o)
    }
    function w(e) {
        return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? n[o.call(e)] || "object" : typeof e
    }
    var f = "3.4.1"
      , k = function(e, t) {
        return new k.fn.init(e,t)
    }
      , p = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
    function d(e) {
        var t = !!e && "length"in e && e.length
          , n = w(e);
        return !m(e) && !x(e) && ("array" === n || 0 === t || "number" == typeof t && 0 < t && t - 1 in e)
    }
    k.fn = k.prototype = {
        jquery: f,
        constructor: k,
        length: 0,
        toArray: function() {
            return s.call(this)
        },
        get: function(e) {
            return null == e ? s.call(this) : e < 0 ? this[e + this.length] : this[e]
        },
        pushStack: function(e) {
            var t = k.merge(this.constructor(), e);
            return t.prevObject = this,
            t
        },
        each: function(e) {
            return k.each(this, e)
        },
        map: function(n) {
            return this.pushStack(k.map(this, function(e, t) {
                return n.call(e, t, e)
            }))
        },
        slice: function() {
            return this.pushStack(s.apply(this, arguments))
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq(-1)
        },
        eq: function(e) {
            var t = this.length
              , n = +e + (e < 0 ? t : 0);
            return this.pushStack(0 <= n && n < t ? [this[n]] : [])
        },
        end: function() {
            return this.prevObject || this.constructor()
        },
        push: u,
        sort: t.sort,
        splice: t.splice
    },
    k.extend = k.fn.extend = function() {
        var e, t, n, r, i, o, a = arguments[0] || {}, s = 1, u = arguments.length, l = !1;
        for ("boolean" == typeof a && (l = a,
        a = arguments[s] || {},
        s++),
        "object" == typeof a || m(a) || (a = {}),
        s === u && (a = this,
        s--); s < u; s++)
            if (null != (e = arguments[s]))
                for (t in e)
                    r = e[t],
                    "__proto__" !== t && a !== r && (l && r && (k.isPlainObject(r) || (i = Array.isArray(r))) ? (n = a[t],
                    o = i && !Array.isArray(n) ? [] : i || k.isPlainObject(n) ? n : {},
                    i = !1,
                    a[t] = k.extend(l, o, r)) : void 0 !== r && (a[t] = r));
        return a
    }
    ,
    k.extend({
        expando: "jQuery" + (f + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(e) {
            throw new Error(e)
        },
        noop: function() {},
        isPlainObject: function(e) {
            var t, n;
            return !(!e || "[object Object]" !== o.call(e)) && (!(t = r(e)) || "function" == typeof (n = v.call(t, "constructor") && t.constructor) && a.call(n) === l)
        },
        isEmptyObject: function(e) {
            var t;
            for (t in e)
                return !1;
            return !0
        },
        globalEval: function(e, t) {
            b(e, {
                nonce: t && t.nonce
            })
        },
        each: function(e, t) {
            var n, r = 0;
            if (d(e)) {
                for (n = e.length; r < n; r++)
                    if (!1 === t.call(e[r], r, e[r]))
                        break
            } else
                for (r in e)
                    if (!1 === t.call(e[r], r, e[r]))
                        break;
            return e
        },
        trim: function(e) {
            return null == e ? "" : (e + "").replace(p, "")
        },
        makeArray: function(e, t) {
            var n = t || [];
            return null != e && (d(Object(e)) ? k.merge(n, "string" == typeof e ? [e] : e) : u.call(n, e)),
            n
        },
        inArray: function(e, t, n) {
            return null == t ? -1 : i.call(t, e, n)
        },
        merge: function(e, t) {
            for (var n = +t.length, r = 0, i = e.length; r < n; r++)
                e[i++] = t[r];
            return e.length = i,
            e
        },
        grep: function(e, t, n) {
            for (var r = [], i = 0, o = e.length, a = !n; i < o; i++)
                !t(e[i], i) !== a && r.push(e[i]);
            return r
        },
        map: function(e, t, n) {
            var r, i, o = 0, a = [];
            if (d(e))
                for (r = e.length; o < r; o++)
                    null != (i = t(e[o], o, n)) && a.push(i);
            else
                for (o in e)
                    null != (i = t(e[o], o, n)) && a.push(i);
            return g.apply([], a)
        },
        guid: 1,
        support: y
    }),
    "function" == typeof Symbol && (k.fn[Symbol.iterator] = t[Symbol.iterator]),
    k.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(e, t) {
        n["[object " + t + "]"] = t.toLowerCase()
    });
    var h = function(n) {
        var e, d, b, o, i, h, f, g, w, u, l, T, C, a, E, v, s, c, y, k = "sizzle" + 1 * new Date, m = n.document, S = 0, r = 0, p = ue(), x = ue(), N = ue(), A = ue(), D = function(e, t) {
            return e === t && (l = !0),
            0
        }, j = {}.hasOwnProperty, t = [], q = t.pop, L = t.push, H = t.push, O = t.slice, P = function(e, t) {
            for (var n = 0, r = e.length; n < r; n++)
                if (e[n] === t)
                    return n;
            return -1
        }, R = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", M = "[\\x20\\t\\r\\n\\f]", I = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+", W = "\\[" + M + "*(" + I + ")(?:" + M + "*([*^$|!~]?=)" + M + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + I + "))|)" + M + "*\\]", $ = ":(" + I + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + W + ")*)|.*)\\)|)", F = new RegExp(M + "+","g"), B = new RegExp("^" + M + "+|((?:^|[^\\\\])(?:\\\\.)*)" + M + "+$","g"), _ = new RegExp("^" + M + "*," + M + "*"), z = new RegExp("^" + M + "*([>+~]|" + M + ")" + M + "*"), U = new RegExp(M + "|>"), X = new RegExp($), V = new RegExp("^" + I + "$"), G = {
            ID: new RegExp("^#(" + I + ")"),
            CLASS: new RegExp("^\\.(" + I + ")"),
            TAG: new RegExp("^(" + I + "|[*])"),
            ATTR: new RegExp("^" + W),
            PSEUDO: new RegExp("^" + $),
            CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + M + "*(even|odd|(([+-]|)(\\d*)n|)" + M + "*(?:([+-]|)" + M + "*(\\d+)|))" + M + "*\\)|)","i"),
            bool: new RegExp("^(?:" + R + ")$","i"),
            needsContext: new RegExp("^" + M + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + M + "*((?:-\\d)?\\d*)" + M + "*\\)|)(?=[^-]|$)","i")
        }, Y = /HTML$/i, Q = /^(?:input|select|textarea|button)$/i, J = /^h\d$/i, K = /^[^{]+\{\s*\[native \w/, Z = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, ee = /[+~]/, te = new RegExp("\\\\([\\da-f]{1,6}" + M + "?|(" + M + ")|.)","ig"), ne = function(e, t, n) {
            var r = "0x" + t - 65536;
            return r != r || n ? t : r < 0 ? String.fromCharCode(r + 65536) : String.fromCharCode(r >> 10 | 55296, 1023 & r | 56320)
        }, re = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g, ie = function(e, t) {
            return t ? "\0" === e ? "\ufffd" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e
        }, oe = function() {
            T()
        }, ae = be(function(e) {
            return !0 === e.disabled && "fieldset" === e.nodeName.toLowerCase()
        }, {
            dir: "parentNode",
            next: "legend"
        });
        try {
            H.apply(t = O.call(m.childNodes), m.childNodes),
            t[m.childNodes.length].nodeType
        } catch (e) {
            H = {
                apply: t.length ? function(e, t) {
                    L.apply(e, O.call(t))
                }
                : function(e, t) {
                    var n = e.length
                      , r = 0;
                    while (e[n++] = t[r++])
                        ;
                    e.length = n - 1
                }
            }
        }
        function se(t, e, n, r) {
            var i, o, a, s, u, l, c, f = e && e.ownerDocument, p = e ? e.nodeType : 9;
            if (n = n || [],
            "string" != typeof t || !t || 1 !== p && 9 !== p && 11 !== p)
                return n;
            if (!r && ((e ? e.ownerDocument || e : m) !== C && T(e),
            e = e || C,
            E)) {
                if (11 !== p && (u = Z.exec(t)))
                    if (i = u[1]) {
                        if (9 === p) {
                            if (!(a = e.getElementById(i)))
                                return n;
                            if (a.id === i)
                                return n.push(a),
                                n
                        } else if (f && (a = f.getElementById(i)) && y(e, a) && a.id === i)
                            return n.push(a),
                            n
                    } else {
                        if (u[2])
                            return H.apply(n, e.getElementsByTagName(t)),
                            n;
                        if ((i = u[3]) && d.getElementsByClassName && e.getElementsByClassName)
                            return H.apply(n, e.getElementsByClassName(i)),
                            n
                    }
                if (d.qsa && !A[t + " "] && (!v || !v.test(t)) && (1 !== p || "object" !== e.nodeName.toLowerCase())) {
                    if (c = t,
                    f = e,
                    1 === p && U.test(t)) {
                        (s = e.getAttribute("id")) ? s = s.replace(re, ie) : e.setAttribute("id", s = k),
                        o = (l = h(t)).length;
                        while (o--)
                            l[o] = "#" + s + " " + xe(l[o]);
                        c = l.join(","),
                        f = ee.test(t) && ye(e.parentNode) || e
                    }
                    try {
                        return H.apply(n, f.querySelectorAll(c)),
                        n
                    } catch (e) {
                        A(t, !0)
                    } finally {
                        s === k && e.removeAttribute("id")
                    }
                }
            }
            return g(t.replace(B, "$1"), e, n, r)
        }
        function ue() {
            var r = [];
            return function e(t, n) {
                return r.push(t + " ") > b.cacheLength && delete e[r.shift()],
                e[t + " "] = n
            }
        }
        function le(e) {
            return e[k] = !0,
            e
        }
        function ce(e) {
            var t = C.createElement("fieldset");
            try {
                return !!e(t)
            } catch (e) {
                return !1
            } finally {
                t.parentNode && t.parentNode.removeChild(t),
                t = null
            }
        }
        function fe(e, t) {
            var n = e.split("|")
              , r = n.length;
            while (r--)
                b.attrHandle[n[r]] = t
        }
        function pe(e, t) {
            var n = t && e
              , r = n && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex;
            if (r)
                return r;
            if (n)
                while (n = n.nextSibling)
                    if (n === t)
                        return -1;
            return e ? 1 : -1
        }
        function de(t) {
            return function(e) {
                return "input" === e.nodeName.toLowerCase() && e.type === t
            }
        }
        function he(n) {
            return function(e) {
                var t = e.nodeName.toLowerCase();
                return ("input" === t || "button" === t) && e.type === n
            }
        }
        function ge(t) {
            return function(e) {
                return "form"in e ? e.parentNode && !1 === e.disabled ? "label"in e ? "label"in e.parentNode ? e.parentNode.disabled === t : e.disabled === t : e.isDisabled === t || e.isDisabled !== !t && ae(e) === t : e.disabled === t : "label"in e && e.disabled === t
            }
        }
        function ve(a) {
            return le(function(o) {
                return o = +o,
                le(function(e, t) {
                    var n, r = a([], e.length, o), i = r.length;
                    while (i--)
                        e[n = r[i]] && (e[n] = !(t[n] = e[n]))
                })
            })
        }
        function ye(e) {
            return e && "undefined" != typeof e.getElementsByTagName && e
        }
        for (e in d = se.support = {},
        i = se.isXML = function(e) {
            var t = e.namespaceURI
              , n = (e.ownerDocument || e).documentElement;
            return !Y.test(t || n && n.nodeName || "HTML")
        }
        ,
        T = se.setDocument = function(e) {
            var t, n, r = e ? e.ownerDocument || e : m;
            return r !== C && 9 === r.nodeType && r.documentElement && (a = (C = r).documentElement,
            E = !i(C),
            m !== C && (n = C.defaultView) && n.top !== n && (n.addEventListener ? n.addEventListener("unload", oe, !1) : n.attachEvent && n.attachEvent("onunload", oe)),
            d.attributes = ce(function(e) {
                return e.className = "i",
                !e.getAttribute("className")
            }),
            d.getElementsByTagName = ce(function(e) {
                return e.appendChild(C.createComment("")),
                !e.getElementsByTagName("*").length
            }),
            d.getElementsByClassName = K.test(C.getElementsByClassName),
            d.getById = ce(function(e) {
                return a.appendChild(e).id = k,
                !C.getElementsByName || !C.getElementsByName(k).length
            }),
            d.getById ? (b.filter.ID = function(e) {
                var t = e.replace(te, ne);
                return function(e) {
                    return e.getAttribute("id") === t
                }
            }
            ,
            b.find.ID = function(e, t) {
                if ("undefined" != typeof t.getElementById && E) {
                    var n = t.getElementById(e);
                    return n ? [n] : []
                }
            }
            ) : (b.filter.ID = function(e) {
                var n = e.replace(te, ne);
                return function(e) {
                    var t = "undefined" != typeof e.getAttributeNode && e.getAttributeNode("id");
                    return t && t.value === n
                }
            }
            ,
            b.find.ID = function(e, t) {
                if ("undefined" != typeof t.getElementById && E) {
                    var n, r, i, o = t.getElementById(e);
                    if (o) {
                        if ((n = o.getAttributeNode("id")) && n.value === e)
                            return [o];
                        i = t.getElementsByName(e),
                        r = 0;
                        while (o = i[r++])
                            if ((n = o.getAttributeNode("id")) && n.value === e)
                                return [o]
                    }
                    return []
                }
            }
            ),
            b.find.TAG = d.getElementsByTagName ? function(e, t) {
                return "undefined" != typeof t.getElementsByTagName ? t.getElementsByTagName(e) : d.qsa ? t.querySelectorAll(e) : void 0
            }
            : function(e, t) {
                var n, r = [], i = 0, o = t.getElementsByTagName(e);
                if ("*" === e) {
                    while (n = o[i++])
                        1 === n.nodeType && r.push(n);
                    return r
                }
                return o
            }
            ,
            b.find.CLASS = d.getElementsByClassName && function(e, t) {
                if ("undefined" != typeof t.getElementsByClassName && E)
                    return t.getElementsByClassName(e)
            }
            ,
            s = [],
            v = [],
            (d.qsa = K.test(C.querySelectorAll)) && (ce(function(e) {
                a.appendChild(e).innerHTML = "<a id='" + k + "'></a><select id='" + k + "-\r\\' msallowcapture=''><option selected=''></option></select>",
                e.querySelectorAll("[msallowcapture^='']").length && v.push("[*^$]=" + M + "*(?:''|\"\")"),
                e.querySelectorAll("[selected]").length || v.push("\\[" + M + "*(?:value|" + R + ")"),
                e.querySelectorAll("[id~=" + k + "-]").length || v.push("~="),
                e.querySelectorAll(":checked").length || v.push(":checked"),
                e.querySelectorAll("a#" + k + "+*").length || v.push(".#.+[+~]")
            }),
            ce(function(e) {
                e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                var t = C.createElement("input");
                t.setAttribute("type", "hidden"),
                e.appendChild(t).setAttribute("name", "D"),
                e.querySelectorAll("[name=d]").length && v.push("name" + M + "*[*^$|!~]?="),
                2 !== e.querySelectorAll(":enabled").length && v.push(":enabled", ":disabled"),
                a.appendChild(e).disabled = !0,
                2 !== e.querySelectorAll(":disabled").length && v.push(":enabled", ":disabled"),
                e.querySelectorAll("*,:x"),
                v.push(",.*:")
            })),
            (d.matchesSelector = K.test(c = a.matches || a.webkitMatchesSelector || a.mozMatchesSelector || a.oMatchesSelector || a.msMatchesSelector)) && ce(function(e) {
                d.disconnectedMatch = c.call(e, "*"),
                c.call(e, "[s!='']:x"),
                s.push("!=", $)
            }),
            v = v.length && new RegExp(v.join("|")),
            s = s.length && new RegExp(s.join("|")),
            t = K.test(a.compareDocumentPosition),
            y = t || K.test(a.contains) ? function(e, t) {
                var n = 9 === e.nodeType ? e.documentElement : e
                  , r = t && t.parentNode;
                return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)))
            }
            : function(e, t) {
                if (t)
                    while (t = t.parentNode)
                        if (t === e)
                            return !0;
                return !1
            }
            ,
            D = t ? function(e, t) {
                if (e === t)
                    return l = !0,
                    0;
                var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
                return n || (1 & (n = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !d.sortDetached && t.compareDocumentPosition(e) === n ? e === C || e.ownerDocument === m && y(m, e) ? -1 : t === C || t.ownerDocument === m && y(m, t) ? 1 : u ? P(u, e) - P(u, t) : 0 : 4 & n ? -1 : 1)
            }
            : function(e, t) {
                if (e === t)
                    return l = !0,
                    0;
                var n, r = 0, i = e.parentNode, o = t.parentNode, a = [e], s = [t];
                if (!i || !o)
                    return e === C ? -1 : t === C ? 1 : i ? -1 : o ? 1 : u ? P(u, e) - P(u, t) : 0;
                if (i === o)
                    return pe(e, t);
                n = e;
                while (n = n.parentNode)
                    a.unshift(n);
                n = t;
                while (n = n.parentNode)
                    s.unshift(n);
                while (a[r] === s[r])
                    r++;
                return r ? pe(a[r], s[r]) : a[r] === m ? -1 : s[r] === m ? 1 : 0
            }
            ),
            C
        }
        ,
        se.matches = function(e, t) {
            return se(e, null, null, t)
        }
        ,
        se.matchesSelector = function(e, t) {
            if ((e.ownerDocument || e) !== C && T(e),
            d.matchesSelector && E && !A[t + " "] && (!s || !s.test(t)) && (!v || !v.test(t)))
                try {
                    var n = c.call(e, t);
                    if (n || d.disconnectedMatch || e.document && 11 !== e.document.nodeType)
                        return n
                } catch (e) {
                    A(t, !0)
                }
            return 0 < se(t, C, null, [e]).length
        }
        ,
        se.contains = function(e, t) {
            return (e.ownerDocument || e) !== C && T(e),
            y(e, t)
        }
        ,
        se.attr = function(e, t) {
            (e.ownerDocument || e) !== C && T(e);
            var n = b.attrHandle[t.toLowerCase()]
              , r = n && j.call(b.attrHandle, t.toLowerCase()) ? n(e, t, !E) : void 0;
            return void 0 !== r ? r : d.attributes || !E ? e.getAttribute(t) : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
        }
        ,
        se.escape = function(e) {
            return (e + "").replace(re, ie)
        }
        ,
        se.error = function(e) {
            throw new Error("Syntax error, unrecognized expression: " + e)
        }
        ,
        se.uniqueSort = function(e) {
            var t, n = [], r = 0, i = 0;
            if (l = !d.detectDuplicates,
            u = !d.sortStable && e.slice(0),
            e.sort(D),
            l) {
                while (t = e[i++])
                    t === e[i] && (r = n.push(i));
                while (r--)
                    e.splice(n[r], 1)
            }
            return u = null,
            e
        }
        ,
        o = se.getText = function(e) {
            var t, n = "", r = 0, i = e.nodeType;
            if (i) {
                if (1 === i || 9 === i || 11 === i) {
                    if ("string" == typeof e.textContent)
                        return e.textContent;
                    for (e = e.firstChild; e; e = e.nextSibling)
                        n += o(e)
                } else if (3 === i || 4 === i)
                    return e.nodeValue
            } else
                while (t = e[r++])
                    n += o(t);
            return n
        }
        ,
        (b = se.selectors = {
            cacheLength: 50,
            createPseudo: le,
            match: G,
            attrHandle: {},
            find: {},
            relative: {
                ">": {
                    dir: "parentNode",
                    first: !0
                },
                " ": {
                    dir: "parentNode"
                },
                "+": {
                    dir: "previousSibling",
                    first: !0
                },
                "~": {
                    dir: "previousSibling"
                }
            },
            preFilter: {
                ATTR: function(e) {
                    return e[1] = e[1].replace(te, ne),
                    e[3] = (e[3] || e[4] || e[5] || "").replace(te, ne),
                    "~=" === e[2] && (e[3] = " " + e[3] + " "),
                    e.slice(0, 4)
                },
                CHILD: function(e) {
                    return e[1] = e[1].toLowerCase(),
                    "nth" === e[1].slice(0, 3) ? (e[3] || se.error(e[0]),
                    e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])),
                    e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && se.error(e[0]),
                    e
                },
                PSEUDO: function(e) {
                    var t, n = !e[6] && e[2];
                    return G.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && X.test(n) && (t = h(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t),
                    e[2] = n.slice(0, t)),
                    e.slice(0, 3))
                }
            },
            filter: {
                TAG: function(e) {
                    var t = e.replace(te, ne).toLowerCase();
                    return "*" === e ? function() {
                        return !0
                    }
                    : function(e) {
                        return e.nodeName && e.nodeName.toLowerCase() === t
                    }
                },
                CLASS: function(e) {
                    var t = p[e + " "];
                    return t || (t = new RegExp("(^|" + M + ")" + e + "(" + M + "|$)")) && p(e, function(e) {
                        return t.test("string" == typeof e.className && e.className || "undefined" != typeof e.getAttribute && e.getAttribute("class") || "")
                    })
                },
                ATTR: function(n, r, i) {
                    return function(e) {
                        var t = se.attr(e, n);
                        return null == t ? "!=" === r : !r || (t += "",
                        "=" === r ? t === i : "!=" === r ? t !== i : "^=" === r ? i && 0 === t.indexOf(i) : "*=" === r ? i && -1 < t.indexOf(i) : "$=" === r ? i && t.slice(-i.length) === i : "~=" === r ? -1 < (" " + t.replace(F, " ") + " ").indexOf(i) : "|=" === r && (t === i || t.slice(0, i.length + 1) === i + "-"))
                    }
                },
                CHILD: function(h, e, t, g, v) {
                    var y = "nth" !== h.slice(0, 3)
                      , m = "last" !== h.slice(-4)
                      , x = "of-type" === e;
                    return 1 === g && 0 === v ? function(e) {
                        return !!e.parentNode
                    }
                    : function(e, t, n) {
                        var r, i, o, a, s, u, l = y !== m ? "nextSibling" : "previousSibling", c = e.parentNode, f = x && e.nodeName.toLowerCase(), p = !n && !x, d = !1;
                        if (c) {
                            if (y) {
                                while (l) {
                                    a = e;
                                    while (a = a[l])
                                        if (x ? a.nodeName.toLowerCase() === f : 1 === a.nodeType)
                                            return !1;
                                    u = l = "only" === h && !u && "nextSibling"
                                }
                                return !0
                            }
                            if (u = [m ? c.firstChild : c.lastChild],
                            m && p) {
                                d = (s = (r = (i = (o = (a = c)[k] || (a[k] = {}))[a.uniqueID] || (o[a.uniqueID] = {}))[h] || [])[0] === S && r[1]) && r[2],
                                a = s && c.childNodes[s];
                                while (a = ++s && a && a[l] || (d = s = 0) || u.pop())
                                    if (1 === a.nodeType && ++d && a === e) {
                                        i[h] = [S, s, d];
                                        break
                                    }
                            } else if (p && (d = s = (r = (i = (o = (a = e)[k] || (a[k] = {}))[a.uniqueID] || (o[a.uniqueID] = {}))[h] || [])[0] === S && r[1]),
                            !1 === d)
                                while (a = ++s && a && a[l] || (d = s = 0) || u.pop())
                                    if ((x ? a.nodeName.toLowerCase() === f : 1 === a.nodeType) && ++d && (p && ((i = (o = a[k] || (a[k] = {}))[a.uniqueID] || (o[a.uniqueID] = {}))[h] = [S, d]),
                                    a === e))
                                        break;
                            return (d -= v) === g || d % g == 0 && 0 <= d / g
                        }
                    }
                },
                PSEUDO: function(e, o) {
                    var t, a = b.pseudos[e] || b.setFilters[e.toLowerCase()] || se.error("unsupported pseudo: " + e);
                    return a[k] ? a(o) : 1 < a.length ? (t = [e, e, "", o],
                    b.setFilters.hasOwnProperty(e.toLowerCase()) ? le(function(e, t) {
                        var n, r = a(e, o), i = r.length;
                        while (i--)
                            e[n = P(e, r[i])] = !(t[n] = r[i])
                    }) : function(e) {
                        return a(e, 0, t)
                    }
                    ) : a
                }
            },
            pseudos: {
                not: le(function(e) {
                    var r = []
                      , i = []
                      , s = f(e.replace(B, "$1"));
                    return s[k] ? le(function(e, t, n, r) {
                        var i, o = s(e, null, r, []), a = e.length;
                        while (a--)
                            (i = o[a]) && (e[a] = !(t[a] = i))
                    }) : function(e, t, n) {
                        return r[0] = e,
                        s(r, null, n, i),
                        r[0] = null,
                        !i.pop()
                    }
                }),
                has: le(function(t) {
                    return function(e) {
                        return 0 < se(t, e).length
                    }
                }),
                contains: le(function(t) {
                    return t = t.replace(te, ne),
                    function(e) {
                        return -1 < (e.textContent || o(e)).indexOf(t)
                    }
                }),
                lang: le(function(n) {
                    return V.test(n || "") || se.error("unsupported lang: " + n),
                    n = n.replace(te, ne).toLowerCase(),
                    function(e) {
                        var t;
                        do {
                            if (t = E ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang"))
                                return (t = t.toLowerCase()) === n || 0 === t.indexOf(n + "-")
                        } while ((e = e.parentNode) && 1 === e.nodeType);
                        return !1
                    }
                }),
                target: function(e) {
                    var t = n.location && n.location.hash;
                    return t && t.slice(1) === e.id
                },
                root: function(e) {
                    return e === a
                },
                focus: function(e) {
                    return e === C.activeElement && (!C.hasFocus || C.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                },
                enabled: ge(!1),
                disabled: ge(!0),
                checked: function(e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && !!e.checked || "option" === t && !!e.selected
                },
                selected: function(e) {
                    return e.parentNode && e.parentNode.selectedIndex,
                    !0 === e.selected
                },
                empty: function(e) {
                    for (e = e.firstChild; e; e = e.nextSibling)
                        if (e.nodeType < 6)
                            return !1;
                    return !0
                },
                parent: function(e) {
                    return !b.pseudos.empty(e)
                },
                header: function(e) {
                    return J.test(e.nodeName)
                },
                input: function(e) {
                    return Q.test(e.nodeName)
                },
                button: function(e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && "button" === e.type || "button" === t
                },
                text: function(e) {
                    var t;
                    return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
                },
                first: ve(function() {
                    return [0]
                }),
                last: ve(function(e, t) {
                    return [t - 1]
                }),
                eq: ve(function(e, t, n) {
                    return [n < 0 ? n + t : n]
                }),
                even: ve(function(e, t) {
                    for (var n = 0; n < t; n += 2)
                        e.push(n);
                    return e
                }),
                odd: ve(function(e, t) {
                    for (var n = 1; n < t; n += 2)
                        e.push(n);
                    return e
                }),
                lt: ve(function(e, t, n) {
                    for (var r = n < 0 ? n + t : t < n ? t : n; 0 <= --r; )
                        e.push(r);
                    return e
                }),
                gt: ve(function(e, t, n) {
                    for (var r = n < 0 ? n + t : n; ++r < t; )
                        e.push(r);
                    return e
                })
            }
        }).pseudos.nth = b.pseudos.eq,
        {
            radio: !0,
            checkbox: !0,
            file: !0,
            password: !0,
            image: !0
        })
            b.pseudos[e] = de(e);
        for (e in {
            submit: !0,
            reset: !0
        })
            b.pseudos[e] = he(e);
        function me() {}
        function xe(e) {
            for (var t = 0, n = e.length, r = ""; t < n; t++)
                r += e[t].value;
            return r
        }
        function be(s, e, t) {
            var u = e.dir
              , l = e.next
              , c = l || u
              , f = t && "parentNode" === c
              , p = r++;
            return e.first ? function(e, t, n) {
                while (e = e[u])
                    if (1 === e.nodeType || f)
                        return s(e, t, n);
                return !1
            }
            : function(e, t, n) {
                var r, i, o, a = [S, p];
                if (n) {
                    while (e = e[u])
                        if ((1 === e.nodeType || f) && s(e, t, n))
                            return !0
                } else
                    while (e = e[u])
                        if (1 === e.nodeType || f)
                            if (i = (o = e[k] || (e[k] = {}))[e.uniqueID] || (o[e.uniqueID] = {}),
                            l && l === e.nodeName.toLowerCase())
                                e = e[u] || e;
                            else {
                                if ((r = i[c]) && r[0] === S && r[1] === p)
                                    return a[2] = r[2];
                                if ((i[c] = a)[2] = s(e, t, n))
                                    return !0
                            }
                return !1
            }
        }
        function we(i) {
            return 1 < i.length ? function(e, t, n) {
                var r = i.length;
                while (r--)
                    if (!i[r](e, t, n))
                        return !1;
                return !0
            }
            : i[0]
        }
        function Te(e, t, n, r, i) {
            for (var o, a = [], s = 0, u = e.length, l = null != t; s < u; s++)
                (o = e[s]) && (n && !n(o, r, i) || (a.push(o),
                l && t.push(s)));
            return a
        }
        function Ce(d, h, g, v, y, e) {
            return v && !v[k] && (v = Ce(v)),
            y && !y[k] && (y = Ce(y, e)),
            le(function(e, t, n, r) {
                var i, o, a, s = [], u = [], l = t.length, c = e || function(e, t, n) {
                    for (var r = 0, i = t.length; r < i; r++)
                        se(e, t[r], n);
                    return n
                }(h || "*", n.nodeType ? [n] : n, []), f = !d || !e && h ? c : Te(c, s, d, n, r), p = g ? y || (e ? d : l || v) ? [] : t : f;
                if (g && g(f, p, n, r),
                v) {
                    i = Te(p, u),
                    v(i, [], n, r),
                    o = i.length;
                    while (o--)
                        (a = i[o]) && (p[u[o]] = !(f[u[o]] = a))
                }
                if (e) {
                    if (y || d) {
                        if (y) {
                            i = [],
                            o = p.length;
                            while (o--)
                                (a = p[o]) && i.push(f[o] = a);
                            y(null, p = [], i, r)
                        }
                        o = p.length;
                        while (o--)
                            (a = p[o]) && -1 < (i = y ? P(e, a) : s[o]) && (e[i] = !(t[i] = a))
                    }
                } else
                    p = Te(p === t ? p.splice(l, p.length) : p),
                    y ? y(null, t, p, r) : H.apply(t, p)
            })
        }
        function Ee(e) {
            for (var i, t, n, r = e.length, o = b.relative[e[0].type], a = o || b.relative[" "], s = o ? 1 : 0, u = be(function(e) {
                return e === i
            }, a, !0), l = be(function(e) {
                return -1 < P(i, e)
            }, a, !0), c = [function(e, t, n) {
                var r = !o && (n || t !== w) || ((i = t).nodeType ? u(e, t, n) : l(e, t, n));
                return i = null,
                r
            }
            ]; s < r; s++)
                if (t = b.relative[e[s].type])
                    c = [be(we(c), t)];
                else {
                    if ((t = b.filter[e[s].type].apply(null, e[s].matches))[k]) {
                        for (n = ++s; n < r; n++)
                            if (b.relative[e[n].type])
                                break;
                        return Ce(1 < s && we(c), 1 < s && xe(e.slice(0, s - 1).concat({
                            value: " " === e[s - 2].type ? "*" : ""
                        })).replace(B, "$1"), t, s < n && Ee(e.slice(s, n)), n < r && Ee(e = e.slice(n)), n < r && xe(e))
                    }
                    c.push(t)
                }
            return we(c)
        }
        return me.prototype = b.filters = b.pseudos,
        b.setFilters = new me,
        h = se.tokenize = function(e, t) {
            var n, r, i, o, a, s, u, l = x[e + " "];
            if (l)
                return t ? 0 : l.slice(0);
            a = e,
            s = [],
            u = b.preFilter;
            while (a) {
                for (o in n && !(r = _.exec(a)) || (r && (a = a.slice(r[0].length) || a),
                s.push(i = [])),
                n = !1,
                (r = z.exec(a)) && (n = r.shift(),
                i.push({
                    value: n,
                    type: r[0].replace(B, " ")
                }),
                a = a.slice(n.length)),
                b.filter)
                    !(r = G[o].exec(a)) || u[o] && !(r = u[o](r)) || (n = r.shift(),
                    i.push({
                        value: n,
                        type: o,
                        matches: r
                    }),
                    a = a.slice(n.length));
                if (!n)
                    break
            }
            return t ? a.length : a ? se.error(e) : x(e, s).slice(0)
        }
        ,
        f = se.compile = function(e, t) {
            var n, v, y, m, x, r, i = [], o = [], a = N[e + " "];
            if (!a) {
                t || (t = h(e)),
                n = t.length;
                while (n--)
                    (a = Ee(t[n]))[k] ? i.push(a) : o.push(a);
                (a = N(e, (v = o,
                m = 0 < (y = i).length,
                x = 0 < v.length,
                r = function(e, t, n, r, i) {
                    var o, a, s, u = 0, l = "0", c = e && [], f = [], p = w, d = e || x && b.find.TAG("*", i), h = S += null == p ? 1 : Math.random() || .1, g = d.length;
                    for (i && (w = t === C || t || i); l !== g && null != (o = d[l]); l++) {
                        if (x && o) {
                            a = 0,
                            t || o.ownerDocument === C || (T(o),
                            n = !E);
                            while (s = v[a++])
                                if (s(o, t || C, n)) {
                                    r.push(o);
                                    break
                                }
                            i && (S = h)
                        }
                        m && ((o = !s && o) && u--,
                        e && c.push(o))
                    }
                    if (u += l,
                    m && l !== u) {
                        a = 0;
                        while (s = y[a++])
                            s(c, f, t, n);
                        if (e) {
                            if (0 < u)
                                while (l--)
                                    c[l] || f[l] || (f[l] = q.call(r));
                            f = Te(f)
                        }
                        H.apply(r, f),
                        i && !e && 0 < f.length && 1 < u + y.length && se.uniqueSort(r)
                    }
                    return i && (S = h,
                    w = p),
                    c
                }
                ,
                m ? le(r) : r))).selector = e
            }
            return a
        }
        ,
        g = se.select = function(e, t, n, r) {
            var i, o, a, s, u, l = "function" == typeof e && e, c = !r && h(e = l.selector || e);
            if (n = n || [],
            1 === c.length) {
                if (2 < (o = c[0] = c[0].slice(0)).length && "ID" === (a = o[0]).type && 9 === t.nodeType && E && b.relative[o[1].type]) {
                    if (!(t = (b.find.ID(a.matches[0].replace(te, ne), t) || [])[0]))
                        return n;
                    l && (t = t.parentNode),
                    e = e.slice(o.shift().value.length)
                }
                i = G.needsContext.test(e) ? 0 : o.length;
                while (i--) {
                    if (a = o[i],
                    b.relative[s = a.type])
                        break;
                    if ((u = b.find[s]) && (r = u(a.matches[0].replace(te, ne), ee.test(o[0].type) && ye(t.parentNode) || t))) {
                        if (o.splice(i, 1),
                        !(e = r.length && xe(o)))
                            return H.apply(n, r),
                            n;
                        break
                    }
                }
            }
            return (l || f(e, c))(r, t, !E, n, !t || ee.test(e) && ye(t.parentNode) || t),
            n
        }
        ,
        d.sortStable = k.split("").sort(D).join("") === k,
        d.detectDuplicates = !!l,
        T(),
        d.sortDetached = ce(function(e) {
            return 1 & e.compareDocumentPosition(C.createElement("fieldset"))
        }),
        ce(function(e) {
            return e.innerHTML = "<a href='#'></a>",
            "#" === e.firstChild.getAttribute("href")
        }) || fe("type|href|height|width", function(e, t, n) {
            if (!n)
                return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
        }),
        d.attributes && ce(function(e) {
            return e.innerHTML = "<input/>",
            e.firstChild.setAttribute("value", ""),
            "" === e.firstChild.getAttribute("value")
        }) || fe("value", function(e, t, n) {
            if (!n && "input" === e.nodeName.toLowerCase())
                return e.defaultValue
        }),
        ce(function(e) {
            return null == e.getAttribute("disabled")
        }) || fe(R, function(e, t, n) {
            var r;
            if (!n)
                return !0 === e[t] ? t.toLowerCase() : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
        }),
        se
    }(C);
    k.find = h,
    k.expr = h.selectors,
    k.expr[":"] = k.expr.pseudos,
    k.uniqueSort = k.unique = h.uniqueSort,
    k.text = h.getText,
    k.isXMLDoc = h.isXML,
    k.contains = h.contains,
    k.escapeSelector = h.escape;
    var T = function(e, t, n) {
        var r = []
          , i = void 0 !== n;
        while ((e = e[t]) && 9 !== e.nodeType)
            if (1 === e.nodeType) {
                if (i && k(e).is(n))
                    break;
                r.push(e)
            }
        return r
    }
      , S = function(e, t) {
        for (var n = []; e; e = e.nextSibling)
            1 === e.nodeType && e !== t && n.push(e);
        return n
    }
      , N = k.expr.match.needsContext;
    function A(e, t) {
        return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
    }
    var D = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
    function j(e, n, r) {
        return m(n) ? k.grep(e, function(e, t) {
            return !!n.call(e, t, e) !== r
        }) : n.nodeType ? k.grep(e, function(e) {
            return e === n !== r
        }) : "string" != typeof n ? k.grep(e, function(e) {
            return -1 < i.call(n, e) !== r
        }) : k.filter(n, e, r)
    }
    k.filter = function(e, t, n) {
        var r = t[0];
        return n && (e = ":not(" + e + ")"),
        1 === t.length && 1 === r.nodeType ? k.find.matchesSelector(r, e) ? [r] : [] : k.find.matches(e, k.grep(t, function(e) {
            return 1 === e.nodeType
        }))
    }
    ,
    k.fn.extend({
        find: function(e) {
            var t, n, r = this.length, i = this;
            if ("string" != typeof e)
                return this.pushStack(k(e).filter(function() {
                    for (t = 0; t < r; t++)
                        if (k.contains(i[t], this))
                            return !0
                }));
            for (n = this.pushStack([]),
            t = 0; t < r; t++)
                k.find(e, i[t], n);
            return 1 < r ? k.uniqueSort(n) : n
        },
        filter: function(e) {
            return this.pushStack(j(this, e || [], !1))
        },
        not: function(e) {
            return this.pushStack(j(this, e || [], !0))
        },
        is: function(e) {
            return !!j(this, "string" == typeof e && N.test(e) ? k(e) : e || [], !1).length
        }
    });
    var q, L = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
    (k.fn.init = function(e, t, n) {
        var r, i;
        if (!e)
            return this;
        if (n = n || q,
        "string" == typeof e) {
            if (!(r = "<" === e[0] && ">" === e[e.length - 1] && 3 <= e.length ? [null, e, null] : L.exec(e)) || !r[1] && t)
                return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
            if (r[1]) {
                if (t = t instanceof k ? t[0] : t,
                k.merge(this, k.parseHTML(r[1], t && t.nodeType ? t.ownerDocument || t : E, !0)),
                D.test(r[1]) && k.isPlainObject(t))
                    for (r in t)
                        m(this[r]) ? this[r](t[r]) : this.attr(r, t[r]);
                return this
            }
            return (i = E.getElementById(r[2])) && (this[0] = i,
            this.length = 1),
            this
        }
        return e.nodeType ? (this[0] = e,
        this.length = 1,
        this) : m(e) ? void 0 !== n.ready ? n.ready(e) : e(k) : k.makeArray(e, this)
    }
    ).prototype = k.fn,
    q = k(E);
    var H = /^(?:parents|prev(?:Until|All))/
      , O = {
        children: !0,
        contents: !0,
        next: !0,
        prev: !0
    };
    function P(e, t) {
        while ((e = e[t]) && 1 !== e.nodeType)
            ;
        return e
    }
    k.fn.extend({
        has: function(e) {
            var t = k(e, this)
              , n = t.length;
            return this.filter(function() {
                for (var e = 0; e < n; e++)
                    if (k.contains(this, t[e]))
                        return !0
            })
        },
        closest: function(e, t) {
            var n, r = 0, i = this.length, o = [], a = "string" != typeof e && k(e);
            if (!N.test(e))
                for (; r < i; r++)
                    for (n = this[r]; n && n !== t; n = n.parentNode)
                        if (n.nodeType < 11 && (a ? -1 < a.index(n) : 1 === n.nodeType && k.find.matchesSelector(n, e))) {
                            o.push(n);
                            break
                        }
            return this.pushStack(1 < o.length ? k.uniqueSort(o) : o)
        },
        index: function(e) {
            return e ? "string" == typeof e ? i.call(k(e), this[0]) : i.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function(e, t) {
            return this.pushStack(k.uniqueSort(k.merge(this.get(), k(e, t))))
        },
        addBack: function(e) {
            return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
        }
    }),
    k.each({
        parent: function(e) {
            var t = e.parentNode;
            return t && 11 !== t.nodeType ? t : null
        },
        parents: function(e) {
            return T(e, "parentNode")
        },
        parentsUntil: function(e, t, n) {
            return T(e, "parentNode", n)
        },
        next: function(e) {
            return P(e, "nextSibling")
        },
        prev: function(e) {
            return P(e, "previousSibling")
        },
        nextAll: function(e) {
            return T(e, "nextSibling")
        },
        prevAll: function(e) {
            return T(e, "previousSibling")
        },
        nextUntil: function(e, t, n) {
            return T(e, "nextSibling", n)
        },
        prevUntil: function(e, t, n) {
            return T(e, "previousSibling", n)
        },
        siblings: function(e) {
            return S((e.parentNode || {}).firstChild, e)
        },
        children: function(e) {
            return S(e.firstChild)
        },
        contents: function(e) {
            return "undefined" != typeof e.contentDocument ? e.contentDocument : (A(e, "template") && (e = e.content || e),
            k.merge([], e.childNodes))
        }
    }, function(r, i) {
        k.fn[r] = function(e, t) {
            var n = k.map(this, i, e);
            return "Until" !== r.slice(-5) && (t = e),
            t && "string" == typeof t && (n = k.filter(t, n)),
            1 < this.length && (O[r] || k.uniqueSort(n),
            H.test(r) && n.reverse()),
            this.pushStack(n)
        }
    });
    var R = /[^\x20\t\r\n\f]+/g;
    function M(e) {
        return e
    }
    function I(e) {
        throw e
    }
    function W(e, t, n, r) {
        var i;
        try {
            e && m(i = e.promise) ? i.call(e).done(t).fail(n) : e && m(i = e.then) ? i.call(e, t, n) : t.apply(void 0, [e].slice(r))
        } catch (e) {
            n.apply(void 0, [e])
        }
    }
    k.Callbacks = function(r) {
        var e, n;
        r = "string" == typeof r ? (e = r,
        n = {},
        k.each(e.match(R) || [], function(e, t) {
            n[t] = !0
        }),
        n) : k.extend({}, r);
        var i, t, o, a, s = [], u = [], l = -1, c = function() {
            for (a = a || r.once,
            o = i = !0; u.length; l = -1) {
                t = u.shift();
                while (++l < s.length)
                    !1 === s[l].apply(t[0], t[1]) && r.stopOnFalse && (l = s.length,
                    t = !1)
            }
            r.memory || (t = !1),
            i = !1,
            a && (s = t ? [] : "")
        }, f = {
            add: function() {
                return s && (t && !i && (l = s.length - 1,
                u.push(t)),
                function n(e) {
                    k.each(e, function(e, t) {
                        m(t) ? r.unique && f.has(t) || s.push(t) : t && t.length && "string" !== w(t) && n(t)
                    })
                }(arguments),
                t && !i && c()),
                this
            },
            remove: function() {
                return k.each(arguments, function(e, t) {
                    var n;
                    while (-1 < (n = k.inArray(t, s, n)))
                        s.splice(n, 1),
                        n <= l && l--
                }),
                this
            },
            has: function(e) {
                return e ? -1 < k.inArray(e, s) : 0 < s.length
            },
            empty: function() {
                return s && (s = []),
                this
            },
            disable: function() {
                return a = u = [],
                s = t = "",
                this
            },
            disabled: function() {
                return !s
            },
            lock: function() {
                return a = u = [],
                t || i || (s = t = ""),
                this
            },
            locked: function() {
                return !!a
            },
            fireWith: function(e, t) {
                return a || (t = [e, (t = t || []).slice ? t.slice() : t],
                u.push(t),
                i || c()),
                this
            },
            fire: function() {
                return f.fireWith(this, arguments),
                this
            },
            fired: function() {
                return !!o
            }
        };
        return f
    }
    ,
    k.extend({
        Deferred: function(e) {
            var o = [["notify", "progress", k.Callbacks("memory"), k.Callbacks("memory"), 2], ["resolve", "done", k.Callbacks("once memory"), k.Callbacks("once memory"), 0, "resolved"], ["reject", "fail", k.Callbacks("once memory"), k.Callbacks("once memory"), 1, "rejected"]]
              , i = "pending"
              , a = {
                state: function() {
                    return i
                },
                always: function() {
                    return s.done(arguments).fail(arguments),
                    this
                },
                "catch": function(e) {
                    return a.then(null, e)
                },
                pipe: function() {
                    var i = arguments;
                    return k.Deferred(function(r) {
                        k.each(o, function(e, t) {
                            var n = m(i[t[4]]) && i[t[4]];
                            s[t[1]](function() {
                                var e = n && n.apply(this, arguments);
                                e && m(e.promise) ? e.promise().progress(r.notify).done(r.resolve).fail(r.reject) : r[t[0] + "With"](this, n ? [e] : arguments)
                            })
                        }),
                        i = null
                    }).promise()
                },
                then: function(t, n, r) {
                    var u = 0;
                    function l(i, o, a, s) {
                        return function() {
                            var n = this
                              , r = arguments
                              , e = function() {
                                var e, t;
                                if (!(i < u)) {
                                    if ((e = a.apply(n, r)) === o.promise())
                                        throw new TypeError("Thenable self-resolution");
                                    t = e && ("object" == typeof e || "function" == typeof e) && e.then,
                                    m(t) ? s ? t.call(e, l(u, o, M, s), l(u, o, I, s)) : (u++,
                                    t.call(e, l(u, o, M, s), l(u, o, I, s), l(u, o, M, o.notifyWith))) : (a !== M && (n = void 0,
                                    r = [e]),
                                    (s || o.resolveWith)(n, r))
                                }
                            }
                              , t = s ? e : function() {
                                try {
                                    e()
                                } catch (e) {
                                    k.Deferred.exceptionHook && k.Deferred.exceptionHook(e, t.stackTrace),
                                    u <= i + 1 && (a !== I && (n = void 0,
                                    r = [e]),
                                    o.rejectWith(n, r))
                                }
                            }
                            ;
                            i ? t() : (k.Deferred.getStackHook && (t.stackTrace = k.Deferred.getStackHook()),
                            C.setTimeout(t))
                        }
                    }
                    return k.Deferred(function(e) {
                        o[0][3].add(l(0, e, m(r) ? r : M, e.notifyWith)),
                        o[1][3].add(l(0, e, m(t) ? t : M)),
                        o[2][3].add(l(0, e, m(n) ? n : I))
                    }).promise()
                },
                promise: function(e) {
                    return null != e ? k.extend(e, a) : a
                }
            }
              , s = {};
            return k.each(o, function(e, t) {
                var n = t[2]
                  , r = t[5];
                a[t[1]] = n.add,
                r && n.add(function() {
                    i = r
                }, o[3 - e][2].disable, o[3 - e][3].disable, o[0][2].lock, o[0][3].lock),
                n.add(t[3].fire),
                s[t[0]] = function() {
                    return s[t[0] + "With"](this === s ? void 0 : this, arguments),
                    this
                }
                ,
                s[t[0] + "With"] = n.fireWith
            }),
            a.promise(s),
            e && e.call(s, s),
            s
        },
        when: function(e) {
            var n = arguments.length
              , t = n
              , r = Array(t)
              , i = s.call(arguments)
              , o = k.Deferred()
              , a = function(t) {
                return function(e) {
                    r[t] = this,
                    i[t] = 1 < arguments.length ? s.call(arguments) : e,
                    --n || o.resolveWith(r, i)
                }
            };
            if (n <= 1 && (W(e, o.done(a(t)).resolve, o.reject, !n),
            "pending" === o.state() || m(i[t] && i[t].then)))
                return o.then();
            while (t--)
                W(i[t], a(t), o.reject);
            return o.promise()
        }
    });
    var $ = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
    k.Deferred.exceptionHook = function(e, t) {
        C.console && C.console.warn && e && $.test(e.name) && C.console.warn("jQuery.Deferred exception: " + e.message, e.stack, t)
    }
    ,
    k.readyException = function(e) {
        C.setTimeout(function() {
            throw e
        })
    }
    ;
    var F = k.Deferred();
    function B() {
        E.removeEventListener("DOMContentLoaded", B),
        C.removeEventListener("load", B),
        k.ready()
    }
    k.fn.ready = function(e) {
        return F.then(e)["catch"](function(e) {
            k.readyException(e)
        }),
        this
    }
    ,
    k.extend({
        isReady: !1,
        readyWait: 1,
        ready: function(e) {
            (!0 === e ? --k.readyWait : k.isReady) || (k.isReady = !0) !== e && 0 < --k.readyWait || F.resolveWith(E, [k])
        }
    }),
    k.ready.then = F.then,
    "complete" === E.readyState || "loading" !== E.readyState && !E.documentElement.doScroll ? C.setTimeout(k.ready) : (E.addEventListener("DOMContentLoaded", B),
    C.addEventListener("load", B));
    var _ = function(e, t, n, r, i, o, a) {
        var s = 0
          , u = e.length
          , l = null == n;
        if ("object" === w(n))
            for (s in i = !0,
            n)
                _(e, t, s, n[s], !0, o, a);
        else if (void 0 !== r && (i = !0,
        m(r) || (a = !0),
        l && (a ? (t.call(e, r),
        t = null) : (l = t,
        t = function(e, t, n) {
            return l.call(k(e), n)
        }
        )),
        t))
            for (; s < u; s++)
                t(e[s], n, a ? r : r.call(e[s], s, t(e[s], n)));
        return i ? e : l ? t.call(e) : u ? t(e[0], n) : o
    }
      , z = /^-ms-/
      , U = /-([a-z])/g;
    function X(e, t) {
        return t.toUpperCase()
    }
    function V(e) {
        return e.replace(z, "ms-").replace(U, X)
    }
    var G = function(e) {
        return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
    };
    function Y() {
        this.expando = k.expando + Y.uid++
    }
    Y.uid = 1,
    Y.prototype = {
        cache: function(e) {
            var t = e[this.expando];
            return t || (t = {},
            G(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {
                value: t,
                configurable: !0
            }))),
            t
        },
        set: function(e, t, n) {
            var r, i = this.cache(e);
            if ("string" == typeof t)
                i[V(t)] = n;
            else
                for (r in t)
                    i[V(r)] = t[r];
            return i
        },
        get: function(e, t) {
            return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][V(t)]
        },
        access: function(e, t, n) {
            return void 0 === t || t && "string" == typeof t && void 0 === n ? this.get(e, t) : (this.set(e, t, n),
            void 0 !== n ? n : t)
        },
        remove: function(e, t) {
            var n, r = e[this.expando];
            if (void 0 !== r) {
                if (void 0 !== t) {
                    n = (t = Array.isArray(t) ? t.map(V) : (t = V(t))in r ? [t] : t.match(R) || []).length;
                    while (n--)
                        delete r[t[n]]
                }
                (void 0 === t || k.isEmptyObject(r)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando])
            }
        },
        hasData: function(e) {
            var t = e[this.expando];
            return void 0 !== t && !k.isEmptyObject(t)
        }
    };
    var Q = new Y
      , J = new Y
      , K = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/
      , Z = /[A-Z]/g;
    function ee(e, t, n) {
        var r, i;
        if (void 0 === n && 1 === e.nodeType)
            if (r = "data-" + t.replace(Z, "-$&").toLowerCase(),
            "string" == typeof (n = e.getAttribute(r))) {
                try {
                    n = "true" === (i = n) || "false" !== i && ("null" === i ? null : i === +i + "" ? +i : K.test(i) ? JSON.parse(i) : i)
                } catch (e) {}
                J.set(e, t, n)
            } else
                n = void 0;
        return n
    }
    k.extend({
        hasData: function(e) {
            return J.hasData(e) || Q.hasData(e)
        },
        data: function(e, t, n) {
            return J.access(e, t, n)
        },
        removeData: function(e, t) {
            J.remove(e, t)
        },
        _data: function(e, t, n) {
            return Q.access(e, t, n)
        },
        _removeData: function(e, t) {
            Q.remove(e, t)
        }
    }),
    k.fn.extend({
        data: function(n, e) {
            var t, r, i, o = this[0], a = o && o.attributes;
            if (void 0 === n) {
                if (this.length && (i = J.get(o),
                1 === o.nodeType && !Q.get(o, "hasDataAttrs"))) {
                    t = a.length;
                    while (t--)
                        a[t] && 0 === (r = a[t].name).indexOf("data-") && (r = V(r.slice(5)),
                        ee(o, r, i[r]));
                    Q.set(o, "hasDataAttrs", !0)
                }
                return i
            }
            return "object" == typeof n ? this.each(function() {
                J.set(this, n)
            }) : _(this, function(e) {
                var t;
                if (o && void 0 === e)
                    return void 0 !== (t = J.get(o, n)) ? t : void 0 !== (t = ee(o, n)) ? t : void 0;
                this.each(function() {
                    J.set(this, n, e)
                })
            }, null, e, 1 < arguments.length, null, !0)
        },
        removeData: function(e) {
            return this.each(function() {
                J.remove(this, e)
            })
        }
    }),
    k.extend({
        queue: function(e, t, n) {
            var r;
            if (e)
                return t = (t || "fx") + "queue",
                r = Q.get(e, t),
                n && (!r || Array.isArray(n) ? r = Q.access(e, t, k.makeArray(n)) : r.push(n)),
                r || []
        },
        dequeue: function(e, t) {
            t = t || "fx";
            var n = k.queue(e, t)
              , r = n.length
              , i = n.shift()
              , o = k._queueHooks(e, t);
            "inprogress" === i && (i = n.shift(),
            r--),
            i && ("fx" === t && n.unshift("inprogress"),
            delete o.stop,
            i.call(e, function() {
                k.dequeue(e, t)
            }, o)),
            !r && o && o.empty.fire()
        },
        _queueHooks: function(e, t) {
            var n = t + "queueHooks";
            return Q.get(e, n) || Q.access(e, n, {
                empty: k.Callbacks("once memory").add(function() {
                    Q.remove(e, [t + "queue", n])
                })
            })
        }
    }),
    k.fn.extend({
        queue: function(t, n) {
            var e = 2;
            return "string" != typeof t && (n = t,
            t = "fx",
            e--),
            arguments.length < e ? k.queue(this[0], t) : void 0 === n ? this : this.each(function() {
                var e = k.queue(this, t, n);
                k._queueHooks(this, t),
                "fx" === t && "inprogress" !== e[0] && k.dequeue(this, t)
            })
        },
        dequeue: function(e) {
            return this.each(function() {
                k.dequeue(this, e)
            })
        },
        clearQueue: function(e) {
            return this.queue(e || "fx", [])
        },
        promise: function(e, t) {
            var n, r = 1, i = k.Deferred(), o = this, a = this.length, s = function() {
                --r || i.resolveWith(o, [o])
            };
            "string" != typeof e && (t = e,
            e = void 0),
            e = e || "fx";
            while (a--)
                (n = Q.get(o[a], e + "queueHooks")) && n.empty && (r++,
                n.empty.add(s));
            return s(),
            i.promise(t)
        }
    });
    var te = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source
      , ne = new RegExp("^(?:([+-])=|)(" + te + ")([a-z%]*)$","i")
      , re = ["Top", "Right", "Bottom", "Left"]
      , ie = E.documentElement
      , oe = function(e) {
        return k.contains(e.ownerDocument, e)
    }
      , ae = {
        composed: !0
    };
    ie.getRootNode && (oe = function(e) {
        return k.contains(e.ownerDocument, e) || e.getRootNode(ae) === e.ownerDocument
    }
    );
    var se = function(e, t) {
        return "none" === (e = t || e).style.display || "" === e.style.display && oe(e) && "none" === k.css(e, "display")
    }
      , ue = function(e, t, n, r) {
        var i, o, a = {};
        for (o in t)
            a[o] = e.style[o],
            e.style[o] = t[o];
        for (o in i = n.apply(e, r || []),
        t)
            e.style[o] = a[o];
        return i
    };
    function le(e, t, n, r) {
        var i, o, a = 20, s = r ? function() {
            return r.cur()
        }
        : function() {
            return k.css(e, t, "")
        }
        , u = s(), l = n && n[3] || (k.cssNumber[t] ? "" : "px"), c = e.nodeType && (k.cssNumber[t] || "px" !== l && +u) && ne.exec(k.css(e, t));
        if (c && c[3] !== l) {
            u /= 2,
            l = l || c[3],
            c = +u || 1;
            while (a--)
                k.style(e, t, c + l),
                (1 - o) * (1 - (o = s() / u || .5)) <= 0 && (a = 0),
                c /= o;
            c *= 2,
            k.style(e, t, c + l),
            n = n || []
        }
        return n && (c = +c || +u || 0,
        i = n[1] ? c + (n[1] + 1) * n[2] : +n[2],
        r && (r.unit = l,
        r.start = c,
        r.end = i)),
        i
    }
    var ce = {};
    function fe(e, t) {
        for (var n, r, i, o, a, s, u, l = [], c = 0, f = e.length; c < f; c++)
            (r = e[c]).style && (n = r.style.display,
            t ? ("none" === n && (l[c] = Q.get(r, "display") || null,
            l[c] || (r.style.display = "")),
            "" === r.style.display && se(r) && (l[c] = (u = a = o = void 0,
            a = (i = r).ownerDocument,
            s = i.nodeName,
            (u = ce[s]) || (o = a.body.appendChild(a.createElement(s)),
            u = k.css(o, "display"),
            o.parentNode.removeChild(o),
            "none" === u && (u = "block"),
            ce[s] = u)))) : "none" !== n && (l[c] = "none",
            Q.set(r, "display", n)));
        for (c = 0; c < f; c++)
            null != l[c] && (e[c].style.display = l[c]);
        return e
    }
    k.fn.extend({
        show: function() {
            return fe(this, !0)
        },
        hide: function() {
            return fe(this)
        },
        toggle: function(e) {
            return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function() {
                se(this) ? k(this).show() : k(this).hide()
            })
        }
    });
    var pe = /^(?:checkbox|radio)$/i
      , de = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i
      , he = /^$|^module$|\/(?:java|ecma)script/i
      , ge = {
        option: [1, "<select multiple='multiple'>", "</select>"],
        thead: [1, "<table>", "</table>"],
        col: [2, "<table><colgroup>", "</colgroup></table>"],
        tr: [2, "<table><tbody>", "</tbody></table>"],
        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        _default: [0, "", ""]
    };
    function ve(e, t) {
        var n;
        return n = "undefined" != typeof e.getElementsByTagName ? e.getElementsByTagName(t || "*") : "undefined" != typeof e.querySelectorAll ? e.querySelectorAll(t || "*") : [],
        void 0 === t || t && A(e, t) ? k.merge([e], n) : n
    }
    function ye(e, t) {
        for (var n = 0, r = e.length; n < r; n++)
            Q.set(e[n], "globalEval", !t || Q.get(t[n], "globalEval"))
    }
    ge.optgroup = ge.option,
    ge.tbody = ge.tfoot = ge.colgroup = ge.caption = ge.thead,
    ge.th = ge.td;
    var me, xe, be = /<|&#?\w+;/;
    function we(e, t, n, r, i) {
        for (var o, a, s, u, l, c, f = t.createDocumentFragment(), p = [], d = 0, h = e.length; d < h; d++)
            if ((o = e[d]) || 0 === o)
                if ("object" === w(o))
                    k.merge(p, o.nodeType ? [o] : o);
                else if (be.test(o)) {
                    a = a || f.appendChild(t.createElement("div")),
                    s = (de.exec(o) || ["", ""])[1].toLowerCase(),
                    u = ge[s] || ge._default,
                    a.innerHTML = u[1] + k.htmlPrefilter(o) + u[2],
                    c = u[0];
                    while (c--)
                        a = a.lastChild;
                    k.merge(p, a.childNodes),
                    (a = f.firstChild).textContent = ""
                } else
                    p.push(t.createTextNode(o));
        f.textContent = "",
        d = 0;
        while (o = p[d++])
            if (r && -1 < k.inArray(o, r))
                i && i.push(o);
            else if (l = oe(o),
            a = ve(f.appendChild(o), "script"),
            l && ye(a),
            n) {
                c = 0;
                while (o = a[c++])
                    he.test(o.type || "") && n.push(o)
            }
        return f
    }
    me = E.createDocumentFragment().appendChild(E.createElement("div")),
    (xe = E.createElement("input")).setAttribute("type", "radio"),
    xe.setAttribute("checked", "checked"),
    xe.setAttribute("name", "t"),
    me.appendChild(xe),
    y.checkClone = me.cloneNode(!0).cloneNode(!0).lastChild.checked,
    me.innerHTML = "<textarea>x</textarea>",
    y.noCloneChecked = !!me.cloneNode(!0).lastChild.defaultValue;
    var Te = /^key/
      , Ce = /^(?:mouse|pointer|contextmenu|drag|drop)|click/
      , Ee = /^([^.]*)(?:\.(.+)|)/;
    function ke() {
        return !0
    }
    function Se() {
        return !1
    }
    function Ne(e, t) {
        return e === function() {
            try {
                return E.activeElement
            } catch (e) {}
        }() == ("focus" === t)
    }
    function Ae(e, t, n, r, i, o) {
        var a, s;
        if ("object" == typeof t) {
            for (s in "string" != typeof n && (r = r || n,
            n = void 0),
            t)
                Ae(e, s, n, r, t[s], o);
            return e
        }
        if (null == r && null == i ? (i = n,
        r = n = void 0) : null == i && ("string" == typeof n ? (i = r,
        r = void 0) : (i = r,
        r = n,
        n = void 0)),
        !1 === i)
            i = Se;
        else if (!i)
            return e;
        return 1 === o && (a = i,
        (i = function(e) {
            return k().off(e),
            a.apply(this, arguments)
        }
        ).guid = a.guid || (a.guid = k.guid++)),
        e.each(function() {
            k.event.add(this, t, i, r, n)
        })
    }
    function De(e, i, o) {
        o ? (Q.set(e, i, !1),
        k.event.add(e, i, {
            namespace: !1,
            handler: function(e) {
                var t, n, r = Q.get(this, i);
                if (1 & e.isTrigger && this[i]) {
                    if (r.length)
                        (k.event.special[i] || {}).delegateType && e.stopPropagation();
                    else if (r = s.call(arguments),
                    Q.set(this, i, r),
                    t = o(this, i),
                    this[i](),
                    r !== (n = Q.get(this, i)) || t ? Q.set(this, i, !1) : n = {},
                    r !== n)
                        return e.stopImmediatePropagation(),
                        e.preventDefault(),
                        n.value
                } else
                    r.length && (Q.set(this, i, {
                        value: k.event.trigger(k.extend(r[0], k.Event.prototype), r.slice(1), this)
                    }),
                    e.stopImmediatePropagation())
            }
        })) : void 0 === Q.get(e, i) && k.event.add(e, i, ke)
    }
    k.event = {
        global: {},
        add: function(t, e, n, r, i) {
            var o, a, s, u, l, c, f, p, d, h, g, v = Q.get(t);
            if (v) {
                n.handler && (n = (o = n).handler,
                i = o.selector),
                i && k.find.matchesSelector(ie, i),
                n.guid || (n.guid = k.guid++),
                (u = v.events) || (u = v.events = {}),
                (a = v.handle) || (a = v.handle = function(e) {
                    return "undefined" != typeof k && k.event.triggered !== e.type ? k.event.dispatch.apply(t, arguments) : void 0
                }
                ),
                l = (e = (e || "").match(R) || [""]).length;
                while (l--)
                    d = g = (s = Ee.exec(e[l]) || [])[1],
                    h = (s[2] || "").split(".").sort(),
                    d && (f = k.event.special[d] || {},
                    d = (i ? f.delegateType : f.bindType) || d,
                    f = k.event.special[d] || {},
                    c = k.extend({
                        type: d,
                        origType: g,
                        data: r,
                        handler: n,
                        guid: n.guid,
                        selector: i,
                        needsContext: i && k.expr.match.needsContext.test(i),
                        namespace: h.join(".")
                    }, o),
                    (p = u[d]) || ((p = u[d] = []).delegateCount = 0,
                    f.setup && !1 !== f.setup.call(t, r, h, a) || t.addEventListener && t.addEventListener(d, a)),
                    f.add && (f.add.call(t, c),
                    c.handler.guid || (c.handler.guid = n.guid)),
                    i ? p.splice(p.delegateCount++, 0, c) : p.push(c),
                    k.event.global[d] = !0)
            }
        },
        remove: function(e, t, n, r, i) {
            var o, a, s, u, l, c, f, p, d, h, g, v = Q.hasData(e) && Q.get(e);
            if (v && (u = v.events)) {
                l = (t = (t || "").match(R) || [""]).length;
                while (l--)
                    if (d = g = (s = Ee.exec(t[l]) || [])[1],
                    h = (s[2] || "").split(".").sort(),
                    d) {
                        f = k.event.special[d] || {},
                        p = u[d = (r ? f.delegateType : f.bindType) || d] || [],
                        s = s[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"),
                        a = o = p.length;
                        while (o--)
                            c = p[o],
                            !i && g !== c.origType || n && n.guid !== c.guid || s && !s.test(c.namespace) || r && r !== c.selector && ("**" !== r || !c.selector) || (p.splice(o, 1),
                            c.selector && p.delegateCount--,
                            f.remove && f.remove.call(e, c));
                        a && !p.length && (f.teardown && !1 !== f.teardown.call(e, h, v.handle) || k.removeEvent(e, d, v.handle),
                        delete u[d])
                    } else
                        for (d in u)
                            k.event.remove(e, d + t[l], n, r, !0);
                k.isEmptyObject(u) && Q.remove(e, "handle events")
            }
        },
        dispatch: function(e) {
            var t, n, r, i, o, a, s = k.event.fix(e), u = new Array(arguments.length), l = (Q.get(this, "events") || {})[s.type] || [], c = k.event.special[s.type] || {};
            for (u[0] = s,
            t = 1; t < arguments.length; t++)
                u[t] = arguments[t];
            if (s.delegateTarget = this,
            !c.preDispatch || !1 !== c.preDispatch.call(this, s)) {
                a = k.event.handlers.call(this, s, l),
                t = 0;
                while ((i = a[t++]) && !s.isPropagationStopped()) {
                    s.currentTarget = i.elem,
                    n = 0;
                    while ((o = i.handlers[n++]) && !s.isImmediatePropagationStopped())
                        s.rnamespace && !1 !== o.namespace && !s.rnamespace.test(o.namespace) || (s.handleObj = o,
                        s.data = o.data,
                        void 0 !== (r = ((k.event.special[o.origType] || {}).handle || o.handler).apply(i.elem, u)) && !1 === (s.result = r) && (s.preventDefault(),
                        s.stopPropagation()))
                }
                return c.postDispatch && c.postDispatch.call(this, s),
                s.result
            }
        },
        handlers: function(e, t) {
            var n, r, i, o, a, s = [], u = t.delegateCount, l = e.target;
            if (u && l.nodeType && !("click" === e.type && 1 <= e.button))
                for (; l !== this; l = l.parentNode || this)
                    if (1 === l.nodeType && ("click" !== e.type || !0 !== l.disabled)) {
                        for (o = [],
                        a = {},
                        n = 0; n < u; n++)
                            void 0 === a[i = (r = t[n]).selector + " "] && (a[i] = r.needsContext ? -1 < k(i, this).index(l) : k.find(i, this, null, [l]).length),
                            a[i] && o.push(r);
                        o.length && s.push({
                            elem: l,
                            handlers: o
                        })
                    }
            return l = this,
            u < t.length && s.push({
                elem: l,
                handlers: t.slice(u)
            }),
            s
        },
        addProp: function(t, e) {
            Object.defineProperty(k.Event.prototype, t, {
                enumerable: !0,
                configurable: !0,
                get: m(e) ? function() {
                    if (this.originalEvent)
                        return e(this.originalEvent)
                }
                : function() {
                    if (this.originalEvent)
                        return this.originalEvent[t]
                }
                ,
                set: function(e) {
                    Object.defineProperty(this, t, {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: e
                    })
                }
            })
        },
        fix: function(e) {
            return e[k.expando] ? e : new k.Event(e)
        },
        special: {
            load: {
                noBubble: !0
            },
            click: {
                setup: function(e) {
                    var t = this || e;
                    return pe.test(t.type) && t.click && A(t, "input") && De(t, "click", ke),
                    !1
                },
                trigger: function(e) {
                    var t = this || e;
                    return pe.test(t.type) && t.click && A(t, "input") && De(t, "click"),
                    !0
                },
                _default: function(e) {
                    var t = e.target;
                    return pe.test(t.type) && t.click && A(t, "input") && Q.get(t, "click") || A(t, "a")
                }
            },
            beforeunload: {
                postDispatch: function(e) {
                    void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
                }
            }
        }
    },
    k.removeEvent = function(e, t, n) {
        e.removeEventListener && e.removeEventListener(t, n)
    }
    ,
    k.Event = function(e, t) {
        if (!(this instanceof k.Event))
            return new k.Event(e,t);
        e && e.type ? (this.originalEvent = e,
        this.type = e.type,
        this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? ke : Se,
        this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target,
        this.currentTarget = e.currentTarget,
        this.relatedTarget = e.relatedTarget) : this.type = e,
        t && k.extend(this, t),
        this.timeStamp = e && e.timeStamp || Date.now(),
        this[k.expando] = !0
    }
    ,
    k.Event.prototype = {
        constructor: k.Event,
        isDefaultPrevented: Se,
        isPropagationStopped: Se,
        isImmediatePropagationStopped: Se,
        isSimulated: !1,
        preventDefault: function() {
            var e = this.originalEvent;
            this.isDefaultPrevented = ke,
            e && !this.isSimulated && e.preventDefault()
        },
        stopPropagation: function() {
            var e = this.originalEvent;
            this.isPropagationStopped = ke,
            e && !this.isSimulated && e.stopPropagation()
        },
        stopImmediatePropagation: function() {
            var e = this.originalEvent;
            this.isImmediatePropagationStopped = ke,
            e && !this.isSimulated && e.stopImmediatePropagation(),
            this.stopPropagation()
        }
    },
    k.each({
        altKey: !0,
        bubbles: !0,
        cancelable: !0,
        changedTouches: !0,
        ctrlKey: !0,
        detail: !0,
        eventPhase: !0,
        metaKey: !0,
        pageX: !0,
        pageY: !0,
        shiftKey: !0,
        view: !0,
        "char": !0,
        code: !0,
        charCode: !0,
        key: !0,
        keyCode: !0,
        button: !0,
        buttons: !0,
        clientX: !0,
        clientY: !0,
        offsetX: !0,
        offsetY: !0,
        pointerId: !0,
        pointerType: !0,
        screenX: !0,
        screenY: !0,
        targetTouches: !0,
        toElement: !0,
        touches: !0,
        which: function(e) {
            var t = e.button;
            return null == e.which && Te.test(e.type) ? null != e.charCode ? e.charCode : e.keyCode : !e.which && void 0 !== t && Ce.test(e.type) ? 1 & t ? 1 : 2 & t ? 3 : 4 & t ? 2 : 0 : e.which
        }
    }, k.event.addProp),
    k.each({
        focus: "focusin",
        blur: "focusout"
    }, function(e, t) {
        k.event.special[e] = {
            setup: function() {
                return De(this, e, Ne),
                !1
            },
            trigger: function() {
                return De(this, e),
                !0
            },
            delegateType: t
        }
    }),
    k.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function(e, i) {
        k.event.special[e] = {
            delegateType: i,
            bindType: i,
            handle: function(e) {
                var t, n = e.relatedTarget, r = e.handleObj;
                return n && (n === this || k.contains(this, n)) || (e.type = r.origType,
                t = r.handler.apply(this, arguments),
                e.type = i),
                t
            }
        }
    }),
    k.fn.extend({
        on: function(e, t, n, r) {
            return Ae(this, e, t, n, r)
        },
        one: function(e, t, n, r) {
            return Ae(this, e, t, n, r, 1)
        },
        off: function(e, t, n) {
            var r, i;
            if (e && e.preventDefault && e.handleObj)
                return r = e.handleObj,
                k(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler),
                this;
            if ("object" == typeof e) {
                for (i in e)
                    this.off(i, t, e[i]);
                return this
            }
            return !1 !== t && "function" != typeof t || (n = t,
            t = void 0),
            !1 === n && (n = Se),
            this.each(function() {
                k.event.remove(this, e, n, t)
            })
        }
    });
    var je = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi
      , qe = /<script|<style|<link/i
      , Le = /checked\s*(?:[^=]|=\s*.checked.)/i
      , He = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
    function Oe(e, t) {
        return A(e, "table") && A(11 !== t.nodeType ? t : t.firstChild, "tr") && k(e).children("tbody")[0] || e
    }
    function Pe(e) {
        return e.type = (null !== e.getAttribute("type")) + "/" + e.type,
        e
    }
    function Re(e) {
        return "true/" === (e.type || "").slice(0, 5) ? e.type = e.type.slice(5) : e.removeAttribute("type"),
        e
    }
    function Me(e, t) {
        var n, r, i, o, a, s, u, l;
        if (1 === t.nodeType) {
            if (Q.hasData(e) && (o = Q.access(e),
            a = Q.set(t, o),
            l = o.events))
                for (i in delete a.handle,
                a.events = {},
                l)
                    for (n = 0,
                    r = l[i].length; n < r; n++)
                        k.event.add(t, i, l[i][n]);
            J.hasData(e) && (s = J.access(e),
            u = k.extend({}, s),
            J.set(t, u))
        }
    }
    function Ie(n, r, i, o) {
        r = g.apply([], r);
        var e, t, a, s, u, l, c = 0, f = n.length, p = f - 1, d = r[0], h = m(d);
        if (h || 1 < f && "string" == typeof d && !y.checkClone && Le.test(d))
            return n.each(function(e) {
                var t = n.eq(e);
                h && (r[0] = d.call(this, e, t.html())),
                Ie(t, r, i, o)
            });
        if (f && (t = (e = we(r, n[0].ownerDocument, !1, n, o)).firstChild,
        1 === e.childNodes.length && (e = t),
        t || o)) {
            for (s = (a = k.map(ve(e, "script"), Pe)).length; c < f; c++)
                u = e,
                c !== p && (u = k.clone(u, !0, !0),
                s && k.merge(a, ve(u, "script"))),
                i.call(n[c], u, c);
            if (s)
                for (l = a[a.length - 1].ownerDocument,
                k.map(a, Re),
                c = 0; c < s; c++)
                    u = a[c],
                    he.test(u.type || "") && !Q.access(u, "globalEval") && k.contains(l, u) && (u.src && "module" !== (u.type || "").toLowerCase() ? k._evalUrl && !u.noModule && k._evalUrl(u.src, {
                        nonce: u.nonce || u.getAttribute("nonce")
                    }) : b(u.textContent.replace(He, ""), u, l))
        }
        return n
    }
    function We(e, t, n) {
        for (var r, i = t ? k.filter(t, e) : e, o = 0; null != (r = i[o]); o++)
            n || 1 !== r.nodeType || k.cleanData(ve(r)),
            r.parentNode && (n && oe(r) && ye(ve(r, "script")),
            r.parentNode.removeChild(r));
        return e
    }
    k.extend({
        htmlPrefilter: function(e) {
            return e.replace(je, "<$1></$2>")
        },
        clone: function(e, t, n) {
            var r, i, o, a, s, u, l, c = e.cloneNode(!0), f = oe(e);
            if (!(y.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || k.isXMLDoc(e)))
                for (a = ve(c),
                r = 0,
                i = (o = ve(e)).length; r < i; r++)
                    s = o[r],
                    u = a[r],
                    void 0,
                    "input" === (l = u.nodeName.toLowerCase()) && pe.test(s.type) ? u.checked = s.checked : "input" !== l && "textarea" !== l || (u.defaultValue = s.defaultValue);
            if (t)
                if (n)
                    for (o = o || ve(e),
                    a = a || ve(c),
                    r = 0,
                    i = o.length; r < i; r++)
                        Me(o[r], a[r]);
                else
                    Me(e, c);
            return 0 < (a = ve(c, "script")).length && ye(a, !f && ve(e, "script")),
            c
        },
        cleanData: function(e) {
            for (var t, n, r, i = k.event.special, o = 0; void 0 !== (n = e[o]); o++)
                if (G(n)) {
                    if (t = n[Q.expando]) {
                        if (t.events)
                            for (r in t.events)
                                i[r] ? k.event.remove(n, r) : k.removeEvent(n, r, t.handle);
                        n[Q.expando] = void 0
                    }
                    n[J.expando] && (n[J.expando] = void 0)
                }
        }
    }),
    k.fn.extend({
        detach: function(e) {
            return We(this, e, !0)
        },
        remove: function(e) {
            return We(this, e)
        },
        text: function(e) {
            return _(this, function(e) {
                return void 0 === e ? k.text(this) : this.empty().each(function() {
                    1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e)
                })
            }, null, e, arguments.length)
        },
        append: function() {
            return Ie(this, arguments, function(e) {
                1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || Oe(this, e).appendChild(e)
            })
        },
        prepend: function() {
            return Ie(this, arguments, function(e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = Oe(this, e);
                    t.insertBefore(e, t.firstChild)
                }
            })
        },
        before: function() {
            return Ie(this, arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this)
            })
        },
        after: function() {
            return Ie(this, arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
            })
        },
        empty: function() {
            for (var e, t = 0; null != (e = this[t]); t++)
                1 === e.nodeType && (k.cleanData(ve(e, !1)),
                e.textContent = "");
            return this
        },
        clone: function(e, t) {
            return e = null != e && e,
            t = null == t ? e : t,
            this.map(function() {
                return k.clone(this, e, t)
            })
        },
        html: function(e) {
            return _(this, function(e) {
                var t = this[0] || {}
                  , n = 0
                  , r = this.length;
                if (void 0 === e && 1 === t.nodeType)
                    return t.innerHTML;
                if ("string" == typeof e && !qe.test(e) && !ge[(de.exec(e) || ["", ""])[1].toLowerCase()]) {
                    e = k.htmlPrefilter(e);
                    try {
                        for (; n < r; n++)
                            1 === (t = this[n] || {}).nodeType && (k.cleanData(ve(t, !1)),
                            t.innerHTML = e);
                        t = 0
                    } catch (e) {}
                }
                t && this.empty().append(e)
            }, null, e, arguments.length)
        },
        replaceWith: function() {
            var n = [];
            return Ie(this, arguments, function(e) {
                var t = this.parentNode;
                k.inArray(this, n) < 0 && (k.cleanData(ve(this)),
                t && t.replaceChild(e, this))
            }, n)
        }
    }),
    k.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(e, a) {
        k.fn[e] = function(e) {
            for (var t, n = [], r = k(e), i = r.length - 1, o = 0; o <= i; o++)
                t = o === i ? this : this.clone(!0),
                k(r[o])[a](t),
                u.apply(n, t.get());
            return this.pushStack(n)
        }
    });
    var $e = new RegExp("^(" + te + ")(?!px)[a-z%]+$","i")
      , Fe = function(e) {
        var t = e.ownerDocument.defaultView;
        return t && t.opener || (t = C),
        t.getComputedStyle(e)
    }
      , Be = new RegExp(re.join("|"),"i");
    function _e(e, t, n) {
        var r, i, o, a, s = e.style;
        return (n = n || Fe(e)) && ("" !== (a = n.getPropertyValue(t) || n[t]) || oe(e) || (a = k.style(e, t)),
        !y.pixelBoxStyles() && $e.test(a) && Be.test(t) && (r = s.width,
        i = s.minWidth,
        o = s.maxWidth,
        s.minWidth = s.maxWidth = s.width = a,
        a = n.width,
        s.width = r,
        s.minWidth = i,
        s.maxWidth = o)),
        void 0 !== a ? a + "" : a
    }
    function ze(e, t) {
        return {
            get: function() {
                if (!e())
                    return (this.get = t).apply(this, arguments);
                delete this.get
            }
        }
    }
    !function() {
        function e() {
            if (u) {
                s.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0",
                u.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%",
                ie.appendChild(s).appendChild(u);
                var e = C.getComputedStyle(u);
                n = "1%" !== e.top,
                a = 12 === t(e.marginLeft),
                u.style.right = "60%",
                o = 36 === t(e.right),
                r = 36 === t(e.width),
                u.style.position = "absolute",
                i = 12 === t(u.offsetWidth / 3),
                ie.removeChild(s),
                u = null
            }
        }
        function t(e) {
            return Math.round(parseFloat(e))
        }
        var n, r, i, o, a, s = E.createElement("div"), u = E.createElement("div");
        u.style && (u.style.backgroundClip = "content-box",
        u.cloneNode(!0).style.backgroundClip = "",
        y.clearCloneStyle = "content-box" === u.style.backgroundClip,
        k.extend(y, {
            boxSizingReliable: function() {
                return e(),
                r
            },
            pixelBoxStyles: function() {
                return e(),
                o
            },
            pixelPosition: function() {
                return e(),
                n
            },
            reliableMarginLeft: function() {
                return e(),
                a
            },
            scrollboxSize: function() {
                return e(),
                i
            }
        }))
    }();
    var Ue = ["Webkit", "Moz", "ms"]
      , Xe = E.createElement("div").style
      , Ve = {};
    function Ge(e) {
        var t = k.cssProps[e] || Ve[e];
        return t || (e in Xe ? e : Ve[e] = function(e) {
            var t = e[0].toUpperCase() + e.slice(1)
              , n = Ue.length;
            while (n--)
                if ((e = Ue[n] + t)in Xe)
                    return e
        }(e) || e)
    }
    var Ye = /^(none|table(?!-c[ea]).+)/
      , Qe = /^--/
      , Je = {
        position: "absolute",
        visibility: "hidden",
        display: "block"
    }
      , Ke = {
        letterSpacing: "0",
        fontWeight: "400"
    };
    function Ze(e, t, n) {
        var r = ne.exec(t);
        return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || "px") : t
    }
    function et(e, t, n, r, i, o) {
        var a = "width" === t ? 1 : 0
          , s = 0
          , u = 0;
        if (n === (r ? "border" : "content"))
            return 0;
        for (; a < 4; a += 2)
            "margin" === n && (u += k.css(e, n + re[a], !0, i)),
            r ? ("content" === n && (u -= k.css(e, "padding" + re[a], !0, i)),
            "margin" !== n && (u -= k.css(e, "border" + re[a] + "Width", !0, i))) : (u += k.css(e, "padding" + re[a], !0, i),
            "padding" !== n ? u += k.css(e, "border" + re[a] + "Width", !0, i) : s += k.css(e, "border" + re[a] + "Width", !0, i));
        return !r && 0 <= o && (u += Math.max(0, Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - o - u - s - .5)) || 0),
        u
    }
    function tt(e, t, n) {
        var r = Fe(e)
          , i = (!y.boxSizingReliable() || n) && "border-box" === k.css(e, "boxSizing", !1, r)
          , o = i
          , a = _e(e, t, r)
          , s = "offset" + t[0].toUpperCase() + t.slice(1);
        if ($e.test(a)) {
            if (!n)
                return a;
            a = "auto"
        }
        return (!y.boxSizingReliable() && i || "auto" === a || !parseFloat(a) && "inline" === k.css(e, "display", !1, r)) && e.getClientRects().length && (i = "border-box" === k.css(e, "boxSizing", !1, r),
        (o = s in e) && (a = e[s])),
        (a = parseFloat(a) || 0) + et(e, t, n || (i ? "border" : "content"), o, r, a) + "px"
    }
    function nt(e, t, n, r, i) {
        return new nt.prototype.init(e,t,n,r,i)
    }
    k.extend({
        cssHooks: {
            opacity: {
                get: function(e, t) {
                    if (t) {
                        var n = _e(e, "opacity");
                        return "" === n ? "1" : n
                    }
                }
            }
        },
        cssNumber: {
            animationIterationCount: !0,
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            gridArea: !0,
            gridColumn: !0,
            gridColumnEnd: !0,
            gridColumnStart: !0,
            gridRow: !0,
            gridRowEnd: !0,
            gridRowStart: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {},
        style: function(e, t, n, r) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var i, o, a, s = V(t), u = Qe.test(t), l = e.style;
                if (u || (t = Ge(s)),
                a = k.cssHooks[t] || k.cssHooks[s],
                void 0 === n)
                    return a && "get"in a && void 0 !== (i = a.get(e, !1, r)) ? i : l[t];
                "string" === (o = typeof n) && (i = ne.exec(n)) && i[1] && (n = le(e, t, i),
                o = "number"),
                null != n && n == n && ("number" !== o || u || (n += i && i[3] || (k.cssNumber[s] ? "" : "px")),
                y.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (l[t] = "inherit"),
                a && "set"in a && void 0 === (n = a.set(e, n, r)) || (u ? l.setProperty(t, n) : l[t] = n))
            }
        },
        css: function(e, t, n, r) {
            var i, o, a, s = V(t);
            return Qe.test(t) || (t = Ge(s)),
            (a = k.cssHooks[t] || k.cssHooks[s]) && "get"in a && (i = a.get(e, !0, n)),
            void 0 === i && (i = _e(e, t, r)),
            "normal" === i && t in Ke && (i = Ke[t]),
            "" === n || n ? (o = parseFloat(i),
            !0 === n || isFinite(o) ? o || 0 : i) : i
        }
    }),
    k.each(["height", "width"], function(e, u) {
        k.cssHooks[u] = {
            get: function(e, t, n) {
                if (t)
                    return !Ye.test(k.css(e, "display")) || e.getClientRects().length && e.getBoundingClientRect().width ? tt(e, u, n) : ue(e, Je, function() {
                        return tt(e, u, n)
                    })
            },
            set: function(e, t, n) {
                var r, i = Fe(e), o = !y.scrollboxSize() && "absolute" === i.position, a = (o || n) && "border-box" === k.css(e, "boxSizing", !1, i), s = n ? et(e, u, n, a, i) : 0;
                return a && o && (s -= Math.ceil(e["offset" + u[0].toUpperCase() + u.slice(1)] - parseFloat(i[u]) - et(e, u, "border", !1, i) - .5)),
                s && (r = ne.exec(t)) && "px" !== (r[3] || "px") && (e.style[u] = t,
                t = k.css(e, u)),
                Ze(0, t, s)
            }
        }
    }),
    k.cssHooks.marginLeft = ze(y.reliableMarginLeft, function(e, t) {
        if (t)
            return (parseFloat(_e(e, "marginLeft")) || e.getBoundingClientRect().left - ue(e, {
                marginLeft: 0
            }, function() {
                return e.getBoundingClientRect().left
            })) + "px"
    }),
    k.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(i, o) {
        k.cssHooks[i + o] = {
            expand: function(e) {
                for (var t = 0, n = {}, r = "string" == typeof e ? e.split(" ") : [e]; t < 4; t++)
                    n[i + re[t] + o] = r[t] || r[t - 2] || r[0];
                return n
            }
        },
        "margin" !== i && (k.cssHooks[i + o].set = Ze)
    }),
    k.fn.extend({
        css: function(e, t) {
            return _(this, function(e, t, n) {
                var r, i, o = {}, a = 0;
                if (Array.isArray(t)) {
                    for (r = Fe(e),
                    i = t.length; a < i; a++)
                        o[t[a]] = k.css(e, t[a], !1, r);
                    return o
                }
                return void 0 !== n ? k.style(e, t, n) : k.css(e, t)
            }, e, t, 1 < arguments.length)
        }
    }),
    ((k.Tween = nt).prototype = {
        constructor: nt,
        init: function(e, t, n, r, i, o) {
            this.elem = e,
            this.prop = n,
            this.easing = i || k.easing._default,
            this.options = t,
            this.start = this.now = this.cur(),
            this.end = r,
            this.unit = o || (k.cssNumber[n] ? "" : "px")
        },
        cur: function() {
            var e = nt.propHooks[this.prop];
            return e && e.get ? e.get(this) : nt.propHooks._default.get(this)
        },
        run: function(e) {
            var t, n = nt.propHooks[this.prop];
            return this.options.duration ? this.pos = t = k.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e,
            this.now = (this.end - this.start) * t + this.start,
            this.options.step && this.options.step.call(this.elem, this.now, this),
            n && n.set ? n.set(this) : nt.propHooks._default.set(this),
            this
        }
    }).init.prototype = nt.prototype,
    (nt.propHooks = {
        _default: {
            get: function(e) {
                var t;
                return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = k.css(e.elem, e.prop, "")) && "auto" !== t ? t : 0
            },
            set: function(e) {
                k.fx.step[e.prop] ? k.fx.step[e.prop](e) : 1 !== e.elem.nodeType || !k.cssHooks[e.prop] && null == e.elem.style[Ge(e.prop)] ? e.elem[e.prop] = e.now : k.style(e.elem, e.prop, e.now + e.unit)
            }
        }
    }).scrollTop = nt.propHooks.scrollLeft = {
        set: function(e) {
            e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
        }
    },
    k.easing = {
        linear: function(e) {
            return e
        },
        swing: function(e) {
            return .5 - Math.cos(e * Math.PI) / 2
        },
        _default: "swing"
    },
    k.fx = nt.prototype.init,
    k.fx.step = {};
    var rt, it, ot, at, st = /^(?:toggle|show|hide)$/, ut = /queueHooks$/;
    function lt() {
        it && (!1 === E.hidden && C.requestAnimationFrame ? C.requestAnimationFrame(lt) : C.setTimeout(lt, k.fx.interval),
        k.fx.tick())
    }
    function ct() {
        return C.setTimeout(function() {
            rt = void 0
        }),
        rt = Date.now()
    }
    function ft(e, t) {
        var n, r = 0, i = {
            height: e
        };
        for (t = t ? 1 : 0; r < 4; r += 2 - t)
            i["margin" + (n = re[r])] = i["padding" + n] = e;
        return t && (i.opacity = i.width = e),
        i
    }
    function pt(e, t, n) {
        for (var r, i = (dt.tweeners[t] || []).concat(dt.tweeners["*"]), o = 0, a = i.length; o < a; o++)
            if (r = i[o].call(n, t, e))
                return r
    }
    function dt(o, e, t) {
        var n, a, r = 0, i = dt.prefilters.length, s = k.Deferred().always(function() {
            delete u.elem
        }), u = function() {
            if (a)
                return !1;
            for (var e = rt || ct(), t = Math.max(0, l.startTime + l.duration - e), n = 1 - (t / l.duration || 0), r = 0, i = l.tweens.length; r < i; r++)
                l.tweens[r].run(n);
            return s.notifyWith(o, [l, n, t]),
            n < 1 && i ? t : (i || s.notifyWith(o, [l, 1, 0]),
            s.resolveWith(o, [l]),
            !1)
        }, l = s.promise({
            elem: o,
            props: k.extend({}, e),
            opts: k.extend(!0, {
                specialEasing: {},
                easing: k.easing._default
            }, t),
            originalProperties: e,
            originalOptions: t,
            startTime: rt || ct(),
            duration: t.duration,
            tweens: [],
            createTween: function(e, t) {
                var n = k.Tween(o, l.opts, e, t, l.opts.specialEasing[e] || l.opts.easing);
                return l.tweens.push(n),
                n
            },
            stop: function(e) {
                var t = 0
                  , n = e ? l.tweens.length : 0;
                if (a)
                    return this;
                for (a = !0; t < n; t++)
                    l.tweens[t].run(1);
                return e ? (s.notifyWith(o, [l, 1, 0]),
                s.resolveWith(o, [l, e])) : s.rejectWith(o, [l, e]),
                this
            }
        }), c = l.props;
        for (!function(e, t) {
            var n, r, i, o, a;
            for (n in e)
                if (i = t[r = V(n)],
                o = e[n],
                Array.isArray(o) && (i = o[1],
                o = e[n] = o[0]),
                n !== r && (e[r] = o,
                delete e[n]),
                (a = k.cssHooks[r]) && "expand"in a)
                    for (n in o = a.expand(o),
                    delete e[r],
                    o)
                        n in e || (e[n] = o[n],
                        t[n] = i);
                else
                    t[r] = i
        }(c, l.opts.specialEasing); r < i; r++)
            if (n = dt.prefilters[r].call(l, o, c, l.opts))
                return m(n.stop) && (k._queueHooks(l.elem, l.opts.queue).stop = n.stop.bind(n)),
                n;
        return k.map(c, pt, l),
        m(l.opts.start) && l.opts.start.call(o, l),
        l.progress(l.opts.progress).done(l.opts.done, l.opts.complete).fail(l.opts.fail).always(l.opts.always),
        k.fx.timer(k.extend(u, {
            elem: o,
            anim: l,
            queue: l.opts.queue
        })),
        l
    }
    k.Animation = k.extend(dt, {
        tweeners: {
            "*": [function(e, t) {
                var n = this.createTween(e, t);
                return le(n.elem, e, ne.exec(t), n),
                n
            }
            ]
        },
        tweener: function(e, t) {
            m(e) ? (t = e,
            e = ["*"]) : e = e.match(R);
            for (var n, r = 0, i = e.length; r < i; r++)
                n = e[r],
                dt.tweeners[n] = dt.tweeners[n] || [],
                dt.tweeners[n].unshift(t)
        },
        prefilters: [function(e, t, n) {
            var r, i, o, a, s, u, l, c, f = "width"in t || "height"in t, p = this, d = {}, h = e.style, g = e.nodeType && se(e), v = Q.get(e, "fxshow");
            for (r in n.queue || (null == (a = k._queueHooks(e, "fx")).unqueued && (a.unqueued = 0,
            s = a.empty.fire,
            a.empty.fire = function() {
                a.unqueued || s()
            }
            ),
            a.unqueued++,
            p.always(function() {
                p.always(function() {
                    a.unqueued--,
                    k.queue(e, "fx").length || a.empty.fire()
                })
            })),
            t)
                if (i = t[r],
                st.test(i)) {
                    if (delete t[r],
                    o = o || "toggle" === i,
                    i === (g ? "hide" : "show")) {
                        if ("show" !== i || !v || void 0 === v[r])
                            continue;
                        g = !0
                    }
                    d[r] = v && v[r] || k.style(e, r)
                }
            if ((u = !k.isEmptyObject(t)) || !k.isEmptyObject(d))
                for (r in f && 1 === e.nodeType && (n.overflow = [h.overflow, h.overflowX, h.overflowY],
                null == (l = v && v.display) && (l = Q.get(e, "display")),
                "none" === (c = k.css(e, "display")) && (l ? c = l : (fe([e], !0),
                l = e.style.display || l,
                c = k.css(e, "display"),
                fe([e]))),
                ("inline" === c || "inline-block" === c && null != l) && "none" === k.css(e, "float") && (u || (p.done(function() {
                    h.display = l
                }),
                null == l && (c = h.display,
                l = "none" === c ? "" : c)),
                h.display = "inline-block")),
                n.overflow && (h.overflow = "hidden",
                p.always(function() {
                    h.overflow = n.overflow[0],
                    h.overflowX = n.overflow[1],
                    h.overflowY = n.overflow[2]
                })),
                u = !1,
                d)
                    u || (v ? "hidden"in v && (g = v.hidden) : v = Q.access(e, "fxshow", {
                        display: l
                    }),
                    o && (v.hidden = !g),
                    g && fe([e], !0),
                    p.done(function() {
                        for (r in g || fe([e]),
                        Q.remove(e, "fxshow"),
                        d)
                            k.style(e, r, d[r])
                    })),
                    u = pt(g ? v[r] : 0, r, p),
                    r in v || (v[r] = u.start,
                    g && (u.end = u.start,
                    u.start = 0))
        }
        ],
        prefilter: function(e, t) {
            t ? dt.prefilters.unshift(e) : dt.prefilters.push(e)
        }
    }),
    k.speed = function(e, t, n) {
        var r = e && "object" == typeof e ? k.extend({}, e) : {
            complete: n || !n && t || m(e) && e,
            duration: e,
            easing: n && t || t && !m(t) && t
        };
        return k.fx.off ? r.duration = 0 : "number" != typeof r.duration && (r.duration in k.fx.speeds ? r.duration = k.fx.speeds[r.duration] : r.duration = k.fx.speeds._default),
        null != r.queue && !0 !== r.queue || (r.queue = "fx"),
        r.old = r.complete,
        r.complete = function() {
            m(r.old) && r.old.call(this),
            r.queue && k.dequeue(this, r.queue)
        }
        ,
        r
    }
    ,
    k.fn.extend({
        fadeTo: function(e, t, n, r) {
            return this.filter(se).css("opacity", 0).show().end().animate({
                opacity: t
            }, e, n, r)
        },
        animate: function(t, e, n, r) {
            var i = k.isEmptyObject(t)
              , o = k.speed(e, n, r)
              , a = function() {
                var e = dt(this, k.extend({}, t), o);
                (i || Q.get(this, "finish")) && e.stop(!0)
            };
            return a.finish = a,
            i || !1 === o.queue ? this.each(a) : this.queue(o.queue, a)
        },
        stop: function(i, e, o) {
            var a = function(e) {
                var t = e.stop;
                delete e.stop,
                t(o)
            };
            return "string" != typeof i && (o = e,
            e = i,
            i = void 0),
            e && !1 !== i && this.queue(i || "fx", []),
            this.each(function() {
                var e = !0
                  , t = null != i && i + "queueHooks"
                  , n = k.timers
                  , r = Q.get(this);
                if (t)
                    r[t] && r[t].stop && a(r[t]);
                else
                    for (t in r)
                        r[t] && r[t].stop && ut.test(t) && a(r[t]);
                for (t = n.length; t--; )
                    n[t].elem !== this || null != i && n[t].queue !== i || (n[t].anim.stop(o),
                    e = !1,
                    n.splice(t, 1));
                !e && o || k.dequeue(this, i)
            })
        },
        finish: function(a) {
            return !1 !== a && (a = a || "fx"),
            this.each(function() {
                var e, t = Q.get(this), n = t[a + "queue"], r = t[a + "queueHooks"], i = k.timers, o = n ? n.length : 0;
                for (t.finish = !0,
                k.queue(this, a, []),
                r && r.stop && r.stop.call(this, !0),
                e = i.length; e--; )
                    i[e].elem === this && i[e].queue === a && (i[e].anim.stop(!0),
                    i.splice(e, 1));
                for (e = 0; e < o; e++)
                    n[e] && n[e].finish && n[e].finish.call(this);
                delete t.finish
            })
        }
    }),
    k.each(["toggle", "show", "hide"], function(e, r) {
        var i = k.fn[r];
        k.fn[r] = function(e, t, n) {
            return null == e || "boolean" == typeof e ? i.apply(this, arguments) : this.animate(ft(r, !0), e, t, n)
        }
    }),
    k.each({
        slideDown: ft("show"),
        slideUp: ft("hide"),
        slideToggle: ft("toggle"),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, function(e, r) {
        k.fn[e] = function(e, t, n) {
            return this.animate(r, e, t, n)
        }
    }),
    k.timers = [],
    k.fx.tick = function() {
        var e, t = 0, n = k.timers;
        for (rt = Date.now(); t < n.length; t++)
            (e = n[t])() || n[t] !== e || n.splice(t--, 1);
        n.length || k.fx.stop(),
        rt = void 0
    }
    ,
    k.fx.timer = function(e) {
        k.timers.push(e),
        k.fx.start()
    }
    ,
    k.fx.interval = 13,
    k.fx.start = function() {
        it || (it = !0,
        lt())
    }
    ,
    k.fx.stop = function() {
        it = null
    }
    ,
    k.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    },
    k.fn.delay = function(r, e) {
        return r = k.fx && k.fx.speeds[r] || r,
        e = e || "fx",
        this.queue(e, function(e, t) {
            var n = C.setTimeout(e, r);
            t.stop = function() {
                C.clearTimeout(n)
            }
        })
    }
    ,
    ot = E.createElement("input"),
    at = E.createElement("select").appendChild(E.createElement("option")),
    ot.type = "checkbox",
    y.checkOn = "" !== ot.value,
    y.optSelected = at.selected,
    (ot = E.createElement("input")).value = "t",
    ot.type = "radio",
    y.radioValue = "t" === ot.value;
    var ht, gt = k.expr.attrHandle;
    k.fn.extend({
        attr: function(e, t) {
            return _(this, k.attr, e, t, 1 < arguments.length)
        },
        removeAttr: function(e) {
            return this.each(function() {
                k.removeAttr(this, e)
            })
        }
    }),
    k.extend({
        attr: function(e, t, n) {
            var r, i, o = e.nodeType;
            if (3 !== o && 8 !== o && 2 !== o)
                return "undefined" == typeof e.getAttribute ? k.prop(e, t, n) : (1 === o && k.isXMLDoc(e) || (i = k.attrHooks[t.toLowerCase()] || (k.expr.match.bool.test(t) ? ht : void 0)),
                void 0 !== n ? null === n ? void k.removeAttr(e, t) : i && "set"in i && void 0 !== (r = i.set(e, n, t)) ? r : (e.setAttribute(t, n + ""),
                n) : i && "get"in i && null !== (r = i.get(e, t)) ? r : null == (r = k.find.attr(e, t)) ? void 0 : r)
        },
        attrHooks: {
            type: {
                set: function(e, t) {
                    if (!y.radioValue && "radio" === t && A(e, "input")) {
                        var n = e.value;
                        return e.setAttribute("type", t),
                        n && (e.value = n),
                        t
                    }
                }
            }
        },
        removeAttr: function(e, t) {
            var n, r = 0, i = t && t.match(R);
            if (i && 1 === e.nodeType)
                while (n = i[r++])
                    e.removeAttribute(n)
        }
    }),
    ht = {
        set: function(e, t, n) {
            return !1 === t ? k.removeAttr(e, n) : e.setAttribute(n, n),
            n
        }
    },
    k.each(k.expr.match.bool.source.match(/\w+/g), function(e, t) {
        var a = gt[t] || k.find.attr;
        gt[t] = function(e, t, n) {
            var r, i, o = t.toLowerCase();
            return n || (i = gt[o],
            gt[o] = r,
            r = null != a(e, t, n) ? o : null,
            gt[o] = i),
            r
        }
    });
    var vt = /^(?:input|select|textarea|button)$/i
      , yt = /^(?:a|area)$/i;
    function mt(e) {
        return (e.match(R) || []).join(" ")
    }
    function xt(e) {
        return e.getAttribute && e.getAttribute("class") || ""
    }
    function bt(e) {
        return Array.isArray(e) ? e : "string" == typeof e && e.match(R) || []
    }
    k.fn.extend({
        prop: function(e, t) {
            return _(this, k.prop, e, t, 1 < arguments.length)
        },
        removeProp: function(e) {
            return this.each(function() {
                delete this[k.propFix[e] || e]
            })
        }
    }),
    k.extend({
        prop: function(e, t, n) {
            var r, i, o = e.nodeType;
            if (3 !== o && 8 !== o && 2 !== o)
                return 1 === o && k.isXMLDoc(e) || (t = k.propFix[t] || t,
                i = k.propHooks[t]),
                void 0 !== n ? i && "set"in i && void 0 !== (r = i.set(e, n, t)) ? r : e[t] = n : i && "get"in i && null !== (r = i.get(e, t)) ? r : e[t]
        },
        propHooks: {
            tabIndex: {
                get: function(e) {
                    var t = k.find.attr(e, "tabindex");
                    return t ? parseInt(t, 10) : vt.test(e.nodeName) || yt.test(e.nodeName) && e.href ? 0 : -1
                }
            }
        },
        propFix: {
            "for": "htmlFor",
            "class": "className"
        }
    }),
    y.optSelected || (k.propHooks.selected = {
        get: function(e) {
            var t = e.parentNode;
            return t && t.parentNode && t.parentNode.selectedIndex,
            null
        },
        set: function(e) {
            var t = e.parentNode;
            t && (t.selectedIndex,
            t.parentNode && t.parentNode.selectedIndex)
        }
    }),
    k.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
        k.propFix[this.toLowerCase()] = this
    }),
    k.fn.extend({
        addClass: function(t) {
            var e, n, r, i, o, a, s, u = 0;
            if (m(t))
                return this.each(function(e) {
                    k(this).addClass(t.call(this, e, xt(this)))
                });
            if ((e = bt(t)).length)
                while (n = this[u++])
                    if (i = xt(n),
                    r = 1 === n.nodeType && " " + mt(i) + " ") {
                        a = 0;
                        while (o = e[a++])
                            r.indexOf(" " + o + " ") < 0 && (r += o + " ");
                        i !== (s = mt(r)) && n.setAttribute("class", s)
                    }
            return this
        },
        removeClass: function(t) {
            var e, n, r, i, o, a, s, u = 0;
            if (m(t))
                return this.each(function(e) {
                    k(this).removeClass(t.call(this, e, xt(this)))
                });
            if (!arguments.length)
                return this.attr("class", "");
            if ((e = bt(t)).length)
                while (n = this[u++])
                    if (i = xt(n),
                    r = 1 === n.nodeType && " " + mt(i) + " ") {
                        a = 0;
                        while (o = e[a++])
                            while (-1 < r.indexOf(" " + o + " "))
                                r = r.replace(" " + o + " ", " ");
                        i !== (s = mt(r)) && n.setAttribute("class", s)
                    }
            return this
        },
        toggleClass: function(i, t) {
            var o = typeof i
              , a = "string" === o || Array.isArray(i);
            return "boolean" == typeof t && a ? t ? this.addClass(i) : this.removeClass(i) : m(i) ? this.each(function(e) {
                k(this).toggleClass(i.call(this, e, xt(this), t), t)
            }) : this.each(function() {
                var e, t, n, r;
                if (a) {
                    t = 0,
                    n = k(this),
                    r = bt(i);
                    while (e = r[t++])
                        n.hasClass(e) ? n.removeClass(e) : n.addClass(e)
                } else
                    void 0 !== i && "boolean" !== o || ((e = xt(this)) && Q.set(this, "__className__", e),
                    this.setAttribute && this.setAttribute("class", e || !1 === i ? "" : Q.get(this, "__className__") || ""))
            })
        },
        hasClass: function(e) {
            var t, n, r = 0;
            t = " " + e + " ";
            while (n = this[r++])
                if (1 === n.nodeType && -1 < (" " + mt(xt(n)) + " ").indexOf(t))
                    return !0;
            return !1
        }
    });
    var wt = /\r/g;
    k.fn.extend({
        val: function(n) {
            var r, e, i, t = this[0];
            return arguments.length ? (i = m(n),
            this.each(function(e) {
                var t;
                1 === this.nodeType && (null == (t = i ? n.call(this, e, k(this).val()) : n) ? t = "" : "number" == typeof t ? t += "" : Array.isArray(t) && (t = k.map(t, function(e) {
                    return null == e ? "" : e + ""
                })),
                (r = k.valHooks[this.type] || k.valHooks[this.nodeName.toLowerCase()]) && "set"in r && void 0 !== r.set(this, t, "value") || (this.value = t))
            })) : t ? (r = k.valHooks[t.type] || k.valHooks[t.nodeName.toLowerCase()]) && "get"in r && void 0 !== (e = r.get(t, "value")) ? e : "string" == typeof (e = t.value) ? e.replace(wt, "") : null == e ? "" : e : void 0
        }
    }),
    k.extend({
        valHooks: {
            option: {
                get: function(e) {
                    var t = k.find.attr(e, "value");
                    return null != t ? t : mt(k.text(e))
                }
            },
            select: {
                get: function(e) {
                    var t, n, r, i = e.options, o = e.selectedIndex, a = "select-one" === e.type, s = a ? null : [], u = a ? o + 1 : i.length;
                    for (r = o < 0 ? u : a ? o : 0; r < u; r++)
                        if (((n = i[r]).selected || r === o) && !n.disabled && (!n.parentNode.disabled || !A(n.parentNode, "optgroup"))) {
                            if (t = k(n).val(),
                            a)
                                return t;
                            s.push(t)
                        }
                    return s
                },
                set: function(e, t) {
                    var n, r, i = e.options, o = k.makeArray(t), a = i.length;
                    while (a--)
                        ((r = i[a]).selected = -1 < k.inArray(k.valHooks.option.get(r), o)) && (n = !0);
                    return n || (e.selectedIndex = -1),
                    o
                }
            }
        }
    }),
    k.each(["radio", "checkbox"], function() {
        k.valHooks[this] = {
            set: function(e, t) {
                if (Array.isArray(t))
                    return e.checked = -1 < k.inArray(k(e).val(), t)
            }
        },
        y.checkOn || (k.valHooks[this].get = function(e) {
            return null === e.getAttribute("value") ? "on" : e.value
        }
        )
    }),
    y.focusin = "onfocusin"in C;
    var Tt = /^(?:focusinfocus|focusoutblur)$/
      , Ct = function(e) {
        e.stopPropagation()
    };
    k.extend(k.event, {
        trigger: function(e, t, n, r) {
            var i, o, a, s, u, l, c, f, p = [n || E], d = v.call(e, "type") ? e.type : e, h = v.call(e, "namespace") ? e.namespace.split(".") : [];
            if (o = f = a = n = n || E,
            3 !== n.nodeType && 8 !== n.nodeType && !Tt.test(d + k.event.triggered) && (-1 < d.indexOf(".") && (d = (h = d.split(".")).shift(),
            h.sort()),
            u = d.indexOf(":") < 0 && "on" + d,
            (e = e[k.expando] ? e : new k.Event(d,"object" == typeof e && e)).isTrigger = r ? 2 : 3,
            e.namespace = h.join("."),
            e.rnamespace = e.namespace ? new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)") : null,
            e.result = void 0,
            e.target || (e.target = n),
            t = null == t ? [e] : k.makeArray(t, [e]),
            c = k.event.special[d] || {},
            r || !c.trigger || !1 !== c.trigger.apply(n, t))) {
                if (!r && !c.noBubble && !x(n)) {
                    for (s = c.delegateType || d,
                    Tt.test(s + d) || (o = o.parentNode); o; o = o.parentNode)
                        p.push(o),
                        a = o;
                    a === (n.ownerDocument || E) && p.push(a.defaultView || a.parentWindow || C)
                }
                i = 0;
                while ((o = p[i++]) && !e.isPropagationStopped())
                    f = o,
                    e.type = 1 < i ? s : c.bindType || d,
                    (l = (Q.get(o, "events") || {})[e.type] && Q.get(o, "handle")) && l.apply(o, t),
                    (l = u && o[u]) && l.apply && G(o) && (e.result = l.apply(o, t),
                    !1 === e.result && e.preventDefault());
                return e.type = d,
                r || e.isDefaultPrevented() || c._default && !1 !== c._default.apply(p.pop(), t) || !G(n) || u && m(n[d]) && !x(n) && ((a = n[u]) && (n[u] = null),
                k.event.triggered = d,
                e.isPropagationStopped() && f.addEventListener(d, Ct),
                n[d](),
                e.isPropagationStopped() && f.removeEventListener(d, Ct),
                k.event.triggered = void 0,
                a && (n[u] = a)),
                e.result
            }
        },
        simulate: function(e, t, n) {
            var r = k.extend(new k.Event, n, {
                type: e,
                isSimulated: !0
            });
            k.event.trigger(r, null, t)
        }
    }),
    k.fn.extend({
        trigger: function(e, t) {
            return this.each(function() {
                k.event.trigger(e, t, this)
            })
        },
        triggerHandler: function(e, t) {
            var n = this[0];
            if (n)
                return k.event.trigger(e, t, n, !0)
        }
    }),
    y.focusin || k.each({
        focus: "focusin",
        blur: "focusout"
    }, function(n, r) {
        var i = function(e) {
            k.event.simulate(r, e.target, k.event.fix(e))
        };
        k.event.special[r] = {
            setup: function() {
                var e = this.ownerDocument || this
                  , t = Q.access(e, r);
                t || e.addEventListener(n, i, !0),
                Q.access(e, r, (t || 0) + 1)
            },
            teardown: function() {
                var e = this.ownerDocument || this
                  , t = Q.access(e, r) - 1;
                t ? Q.access(e, r, t) : (e.removeEventListener(n, i, !0),
                Q.remove(e, r))
            }
        }
    });
    var Et = C.location
      , kt = Date.now()
      , St = /\?/;
    k.parseXML = function(e) {
        var t;
        if (!e || "string" != typeof e)
            return null;
        try {
            t = (new C.DOMParser).parseFromString(e, "text/xml")
        } catch (e) {
            t = void 0
        }
        return t && !t.getElementsByTagName("parsererror").length || k.error("Invalid XML: " + e),
        t
    }
    ;
    var Nt = /\[\]$/
      , At = /\r?\n/g
      , Dt = /^(?:submit|button|image|reset|file)$/i
      , jt = /^(?:input|select|textarea|keygen)/i;
    function qt(n, e, r, i) {
        var t;
        if (Array.isArray(e))
            k.each(e, function(e, t) {
                r || Nt.test(n) ? i(n, t) : qt(n + "[" + ("object" == typeof t && null != t ? e : "") + "]", t, r, i)
            });
        else if (r || "object" !== w(e))
            i(n, e);
        else
            for (t in e)
                qt(n + "[" + t + "]", e[t], r, i)
    }
    k.param = function(e, t) {
        var n, r = [], i = function(e, t) {
            var n = m(t) ? t() : t;
            r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n)
        };
        if (null == e)
            return "";
        if (Array.isArray(e) || e.jquery && !k.isPlainObject(e))
            k.each(e, function() {
                i(this.name, this.value)
            });
        else
            for (n in e)
                qt(n, e[n], t, i);
        return r.join("&")
    }
    ,
    k.fn.extend({
        serialize: function() {
            return k.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                var e = k.prop(this, "elements");
                return e ? k.makeArray(e) : this
            }).filter(function() {
                var e = this.type;
                return this.name && !k(this).is(":disabled") && jt.test(this.nodeName) && !Dt.test(e) && (this.checked || !pe.test(e))
            }).map(function(e, t) {
                var n = k(this).val();
                return null == n ? null : Array.isArray(n) ? k.map(n, function(e) {
                    return {
                        name: t.name,
                        value: e.replace(At, "\r\n")
                    }
                }) : {
                    name: t.name,
                    value: n.replace(At, "\r\n")
                }
            }).get()
        }
    });
    var Lt = /%20/g
      , Ht = /#.*$/
      , Ot = /([?&])_=[^&]*/
      , Pt = /^(.*?):[ \t]*([^\r\n]*)$/gm
      , Rt = /^(?:GET|HEAD)$/
      , Mt = /^\/\//
      , It = {}
      , Wt = {}
      , $t = "*/".concat("*")
      , Ft = E.createElement("a");
    function Bt(o) {
        return function(e, t) {
            "string" != typeof e && (t = e,
            e = "*");
            var n, r = 0, i = e.toLowerCase().match(R) || [];
            if (m(t))
                while (n = i[r++])
                    "+" === n[0] ? (n = n.slice(1) || "*",
                    (o[n] = o[n] || []).unshift(t)) : (o[n] = o[n] || []).push(t)
        }
    }
    function _t(t, i, o, a) {
        var s = {}
          , u = t === Wt;
        function l(e) {
            var r;
            return s[e] = !0,
            k.each(t[e] || [], function(e, t) {
                var n = t(i, o, a);
                return "string" != typeof n || u || s[n] ? u ? !(r = n) : void 0 : (i.dataTypes.unshift(n),
                l(n),
                !1)
            }),
            r
        }
        return l(i.dataTypes[0]) || !s["*"] && l("*")
    }
    function zt(e, t) {
        var n, r, i = k.ajaxSettings.flatOptions || {};
        for (n in t)
            void 0 !== t[n] && ((i[n] ? e : r || (r = {}))[n] = t[n]);
        return r && k.extend(!0, e, r),
        e
    }
    Ft.href = Et.href,
    k.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: Et.href,
            type: "GET",
            isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(Et.protocol),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": $t,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /\bxml\b/,
                html: /\bhtml/,
                json: /\bjson\b/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": JSON.parse,
                "text xml": k.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(e, t) {
            return t ? zt(zt(e, k.ajaxSettings), t) : zt(k.ajaxSettings, e)
        },
        ajaxPrefilter: Bt(It),
        ajaxTransport: Bt(Wt),
        ajax: function(e, t) {
            "object" == typeof e && (t = e,
            e = void 0),
            t = t || {};
            var c, f, p, n, d, r, h, g, i, o, v = k.ajaxSetup({}, t), y = v.context || v, m = v.context && (y.nodeType || y.jquery) ? k(y) : k.event, x = k.Deferred(), b = k.Callbacks("once memory"), w = v.statusCode || {}, a = {}, s = {}, u = "canceled", T = {
                readyState: 0,
                getResponseHeader: function(e) {
                    var t;
                    if (h) {
                        if (!n) {
                            n = {};
                            while (t = Pt.exec(p))
                                n[t[1].toLowerCase() + " "] = (n[t[1].toLowerCase() + " "] || []).concat(t[2])
                        }
                        t = n[e.toLowerCase() + " "]
                    }
                    return null == t ? null : t.join(", ")
                },
                getAllResponseHeaders: function() {
                    return h ? p : null
                },
                setRequestHeader: function(e, t) {
                    return null == h && (e = s[e.toLowerCase()] = s[e.toLowerCase()] || e,
                    a[e] = t),
                    this
                },
                overrideMimeType: function(e) {
                    return null == h && (v.mimeType = e),
                    this
                },
                statusCode: function(e) {
                    var t;
                    if (e)
                        if (h)
                            T.always(e[T.status]);
                        else
                            for (t in e)
                                w[t] = [w[t], e[t]];
                    return this
                },
                abort: function(e) {
                    var t = e || u;
                    return c && c.abort(t),
                    l(0, t),
                    this
                }
            };
            if (x.promise(T),
            v.url = ((e || v.url || Et.href) + "").replace(Mt, Et.protocol + "//"),
            v.type = t.method || t.type || v.method || v.type,
            v.dataTypes = (v.dataType || "*").toLowerCase().match(R) || [""],
            null == v.crossDomain) {
                r = E.createElement("a");
                try {
                    r.href = v.url,
                    r.href = r.href,
                    v.crossDomain = Ft.protocol + "//" + Ft.host != r.protocol + "//" + r.host
                } catch (e) {
                    v.crossDomain = !0
                }
            }
            if (v.data && v.processData && "string" != typeof v.data && (v.data = k.param(v.data, v.traditional)),
            _t(It, v, t, T),
            h)
                return T;
            for (i in (g = k.event && v.global) && 0 == k.active++ && k.event.trigger("ajaxStart"),
            v.type = v.type.toUpperCase(),
            v.hasContent = !Rt.test(v.type),
            f = v.url.replace(Ht, ""),
            v.hasContent ? v.data && v.processData && 0 === (v.contentType || "").indexOf("application/x-www-form-urlencoded") && (v.data = v.data.replace(Lt, "+")) : (o = v.url.slice(f.length),
            v.data && (v.processData || "string" == typeof v.data) && (f += (St.test(f) ? "&" : "?") + v.data,
            delete v.data),
            !1 === v.cache && (f = f.replace(Ot, "$1"),
            o = (St.test(f) ? "&" : "?") + "_=" + kt++ + o),
            v.url = f + o),
            v.ifModified && (k.lastModified[f] && T.setRequestHeader("If-Modified-Since", k.lastModified[f]),
            k.etag[f] && T.setRequestHeader("If-None-Match", k.etag[f])),
            (v.data && v.hasContent && !1 !== v.contentType || t.contentType) && T.setRequestHeader("Content-Type", v.contentType),
            T.setRequestHeader("Accept", v.dataTypes[0] && v.accepts[v.dataTypes[0]] ? v.accepts[v.dataTypes[0]] + ("*" !== v.dataTypes[0] ? ", " + $t + "; q=0.01" : "") : v.accepts["*"]),
            v.headers)
                T.setRequestHeader(i, v.headers[i]);
            if (v.beforeSend && (!1 === v.beforeSend.call(y, T, v) || h))
                return T.abort();
            if (u = "abort",
            b.add(v.complete),
            T.done(v.success),
            T.fail(v.error),
            c = _t(Wt, v, t, T)) {
                if (T.readyState = 1,
                g && m.trigger("ajaxSend", [T, v]),
                h)
                    return T;
                v.async && 0 < v.timeout && (d = C.setTimeout(function() {
                    T.abort("timeout")
                }, v.timeout));
                try {
                    h = !1,
                    c.send(a, l)
                } catch (e) {
                    if (h)
                        throw e;
                    l(-1, e)
                }
            } else
                l(-1, "No Transport");
            function l(e, t, n, r) {
                var i, o, a, s, u, l = t;
                h || (h = !0,
                d && C.clearTimeout(d),
                c = void 0,
                p = r || "",
                T.readyState = 0 < e ? 4 : 0,
                i = 200 <= e && e < 300 || 304 === e,
                n && (s = function(e, t, n) {
                    var r, i, o, a, s = e.contents, u = e.dataTypes;
                    while ("*" === u[0])
                        u.shift(),
                        void 0 === r && (r = e.mimeType || t.getResponseHeader("Content-Type"));
                    if (r)
                        for (i in s)
                            if (s[i] && s[i].test(r)) {
                                u.unshift(i);
                                break
                            }
                    if (u[0]in n)
                        o = u[0];
                    else {
                        for (i in n) {
                            if (!u[0] || e.converters[i + " " + u[0]]) {
                                o = i;
                                break
                            }
                            a || (a = i)
                        }
                        o = o || a
                    }
                    if (o)
                        return o !== u[0] && u.unshift(o),
                        n[o]
                }(v, T, n)),
                s = function(e, t, n, r) {
                    var i, o, a, s, u, l = {}, c = e.dataTypes.slice();
                    if (c[1])
                        for (a in e.converters)
                            l[a.toLowerCase()] = e.converters[a];
                    o = c.shift();
                    while (o)
                        if (e.responseFields[o] && (n[e.responseFields[o]] = t),
                        !u && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)),
                        u = o,
                        o = c.shift())
                            if ("*" === o)
                                o = u;
                            else if ("*" !== u && u !== o) {
                                if (!(a = l[u + " " + o] || l["* " + o]))
                                    for (i in l)
                                        if ((s = i.split(" "))[1] === o && (a = l[u + " " + s[0]] || l["* " + s[0]])) {
                                            !0 === a ? a = l[i] : !0 !== l[i] && (o = s[0],
                                            c.unshift(s[1]));
                                            break
                                        }
                                if (!0 !== a)
                                    if (a && e["throws"])
                                        t = a(t);
                                    else
                                        try {
                                            t = a(t)
                                        } catch (e) {
                                            return {
                                                state: "parsererror",
                                                error: a ? e : "No conversion from " + u + " to " + o
                                            }
                                        }
                            }
                    return {
                        state: "success",
                        data: t
                    }
                }(v, s, T, i),
                i ? (v.ifModified && ((u = T.getResponseHeader("Last-Modified")) && (k.lastModified[f] = u),
                (u = T.getResponseHeader("etag")) && (k.etag[f] = u)),
                204 === e || "HEAD" === v.type ? l = "nocontent" : 304 === e ? l = "notmodified" : (l = s.state,
                o = s.data,
                i = !(a = s.error))) : (a = l,
                !e && l || (l = "error",
                e < 0 && (e = 0))),
                T.status = e,
                T.statusText = (t || l) + "",
                i ? x.resolveWith(y, [o, l, T]) : x.rejectWith(y, [T, l, a]),
                T.statusCode(w),
                w = void 0,
                g && m.trigger(i ? "ajaxSuccess" : "ajaxError", [T, v, i ? o : a]),
                b.fireWith(y, [T, l]),
                g && (m.trigger("ajaxComplete", [T, v]),
                --k.active || k.event.trigger("ajaxStop")))
            }
            return T
        },
        getJSON: function(e, t, n) {
            return k.get(e, t, n, "json")
        },
        getScript: function(e, t) {
            return k.get(e, void 0, t, "script")
        }
    }),
    k.each(["get", "post"], function(e, i) {
        k[i] = function(e, t, n, r) {
            return m(t) && (r = r || n,
            n = t,
            t = void 0),
            k.ajax(k.extend({
                url: e,
                type: i,
                dataType: r,
                data: t,
                success: n
            }, k.isPlainObject(e) && e))
        }
    }),
    k._evalUrl = function(e, t) {
        return k.ajax({
            url: e,
            type: "GET",
            dataType: "script",
            cache: !0,
            async: !1,
            global: !1,
            converters: {
                "text script": function() {}
            },
            dataFilter: function(e) {
                k.globalEval(e, t)
            }
        })
    }
    ,
    k.fn.extend({
        wrapAll: function(e) {
            var t;
            return this[0] && (m(e) && (e = e.call(this[0])),
            t = k(e, this[0].ownerDocument).eq(0).clone(!0),
            this[0].parentNode && t.insertBefore(this[0]),
            t.map(function() {
                var e = this;
                while (e.firstElementChild)
                    e = e.firstElementChild;
                return e
            }).append(this)),
            this
        },
        wrapInner: function(n) {
            return m(n) ? this.each(function(e) {
                k(this).wrapInner(n.call(this, e))
            }) : this.each(function() {
                var e = k(this)
                  , t = e.contents();
                t.length ? t.wrapAll(n) : e.append(n)
            })
        },
        wrap: function(t) {
            var n = m(t);
            return this.each(function(e) {
                k(this).wrapAll(n ? t.call(this, e) : t)
            })
        },
        unwrap: function(e) {
            return this.parent(e).not("body").each(function() {
                k(this).replaceWith(this.childNodes)
            }),
            this
        }
    }),
    k.expr.pseudos.hidden = function(e) {
        return !k.expr.pseudos.visible(e)
    }
    ,
    k.expr.pseudos.visible = function(e) {
        return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length)
    }
    ,
    k.ajaxSettings.xhr = function() {
        try {
            return new C.XMLHttpRequest
        } catch (e) {}
    }
    ;
    var Ut = {
        0: 200,
        1223: 204
    }
      , Xt = k.ajaxSettings.xhr();
    y.cors = !!Xt && "withCredentials"in Xt,
    y.ajax = Xt = !!Xt,
    k.ajaxTransport(function(i) {
        var o, a;
        if (y.cors || Xt && !i.crossDomain)
            return {
                send: function(e, t) {
                    var n, r = i.xhr();
                    if (r.open(i.type, i.url, i.async, i.username, i.password),
                    i.xhrFields)
                        for (n in i.xhrFields)
                            r[n] = i.xhrFields[n];
                    for (n in i.mimeType && r.overrideMimeType && r.overrideMimeType(i.mimeType),
                    i.crossDomain || e["X-Requested-With"] || (e["X-Requested-With"] = "XMLHttpRequest"),
                    e)
                        r.setRequestHeader(n, e[n]);
                    o = function(e) {
                        return function() {
                            o && (o = a = r.onload = r.onerror = r.onabort = r.ontimeout = r.onreadystatechange = null,
                            "abort" === e ? r.abort() : "error" === e ? "number" != typeof r.status ? t(0, "error") : t(r.status, r.statusText) : t(Ut[r.status] || r.status, r.statusText, "text" !== (r.responseType || "text") || "string" != typeof r.responseText ? {
                                binary: r.response
                            } : {
                                text: r.responseText
                            }, r.getAllResponseHeaders()))
                        }
                    }
                    ,
                    r.onload = o(),
                    a = r.onerror = r.ontimeout = o("error"),
                    void 0 !== r.onabort ? r.onabort = a : r.onreadystatechange = function() {
                        4 === r.readyState && C.setTimeout(function() {
                            o && a()
                        })
                    }
                    ,
                    o = o("abort");
                    try {
                        r.send(i.hasContent && i.data || null)
                    } catch (e) {
                        if (o)
                            throw e
                    }
                },
                abort: function() {
                    o && o()
                }
            }
    }),
    k.ajaxPrefilter(function(e) {
        e.crossDomain && (e.contents.script = !1)
    }),
    k.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /\b(?:java|ecma)script\b/
        },
        converters: {
            "text script": function(e) {
                return k.globalEval(e),
                e
            }
        }
    }),
    k.ajaxPrefilter("script", function(e) {
        void 0 === e.cache && (e.cache = !1),
        e.crossDomain && (e.type = "GET")
    }),
    k.ajaxTransport("script", function(n) {
        var r, i;
        if (n.crossDomain || n.scriptAttrs)
            return {
                send: function(e, t) {
                    r = k("<script>").attr(n.scriptAttrs || {}).prop({
                        charset: n.scriptCharset,
                        src: n.url
                    }).on("load error", i = function(e) {
                        r.remove(),
                        i = null,
                        e && t("error" === e.type ? 404 : 200, e.type)
                    }
                    ),
                    E.head.appendChild(r[0])
                },
                abort: function() {
                    i && i()
                }
            }
    });
    var Vt, Gt = [], Yt = /(=)\?(?=&|$)|\?\?/;
    k.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var e = Gt.pop() || k.expando + "_" + kt++;
            return this[e] = !0,
            e
        }
    }),
    k.ajaxPrefilter("json jsonp", function(e, t, n) {
        var r, i, o, a = !1 !== e.jsonp && (Yt.test(e.url) ? "url" : "string" == typeof e.data && 0 === (e.contentType || "").indexOf("application/x-www-form-urlencoded") && Yt.test(e.data) && "data");
        if (a || "jsonp" === e.dataTypes[0])
            return r = e.jsonpCallback = m(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback,
            a ? e[a] = e[a].replace(Yt, "$1" + r) : !1 !== e.jsonp && (e.url += (St.test(e.url) ? "&" : "?") + e.jsonp + "=" + r),
            e.converters["script json"] = function() {
                return o || k.error(r + " was not called"),
                o[0]
            }
            ,
            e.dataTypes[0] = "json",
            i = C[r],
            C[r] = function() {
                o = arguments
            }
            ,
            n.always(function() {
                void 0 === i ? k(C).removeProp(r) : C[r] = i,
                e[r] && (e.jsonpCallback = t.jsonpCallback,
                Gt.push(r)),
                o && m(i) && i(o[0]),
                o = i = void 0
            }),
            "script"
    }),
    y.createHTMLDocument = ((Vt = E.implementation.createHTMLDocument("").body).innerHTML = "<form></form><form></form>",
    2 === Vt.childNodes.length),
    k.parseHTML = function(e, t, n) {
        return "string" != typeof e ? [] : ("boolean" == typeof t && (n = t,
        t = !1),
        t || (y.createHTMLDocument ? ((r = (t = E.implementation.createHTMLDocument("")).createElement("base")).href = E.location.href,
        t.head.appendChild(r)) : t = E),
        o = !n && [],
        (i = D.exec(e)) ? [t.createElement(i[1])] : (i = we([e], t, o),
        o && o.length && k(o).remove(),
        k.merge([], i.childNodes)));
        var r, i, o
    }
    ,
    k.fn.load = function(e, t, n) {
        var r, i, o, a = this, s = e.indexOf(" ");
        return -1 < s && (r = mt(e.slice(s)),
        e = e.slice(0, s)),
        m(t) ? (n = t,
        t = void 0) : t && "object" == typeof t && (i = "POST"),
        0 < a.length && k.ajax({
            url: e,
            type: i || "GET",
            dataType: "html",
            data: t
        }).done(function(e) {
            o = arguments,
            a.html(r ? k("<div>").append(k.parseHTML(e)).find(r) : e)
        }).always(n && function(e, t) {
            a.each(function() {
                n.apply(this, o || [e.responseText, t, e])
            })
        }
        ),
        this
    }
    ,
    k.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e, t) {
        k.fn[t] = function(e) {
            return this.on(t, e)
        }
    }),
    k.expr.pseudos.animated = function(t) {
        return k.grep(k.timers, function(e) {
            return t === e.elem
        }).length
    }
    ,
    k.offset = {
        setOffset: function(e, t, n) {
            var r, i, o, a, s, u, l = k.css(e, "position"), c = k(e), f = {};
            "static" === l && (e.style.position = "relative"),
            s = c.offset(),
            o = k.css(e, "top"),
            u = k.css(e, "left"),
            ("absolute" === l || "fixed" === l) && -1 < (o + u).indexOf("auto") ? (a = (r = c.position()).top,
            i = r.left) : (a = parseFloat(o) || 0,
            i = parseFloat(u) || 0),
            m(t) && (t = t.call(e, n, k.extend({}, s))),
            null != t.top && (f.top = t.top - s.top + a),
            null != t.left && (f.left = t.left - s.left + i),
            "using"in t ? t.using.call(e, f) : c.css(f)
        }
    },
    k.fn.extend({
        offset: function(t) {
            if (arguments.length)
                return void 0 === t ? this : this.each(function(e) {
                    k.offset.setOffset(this, t, e)
                });
            var e, n, r = this[0];
            return r ? r.getClientRects().length ? (e = r.getBoundingClientRect(),
            n = r.ownerDocument.defaultView,
            {
                top: e.top + n.pageYOffset,
                left: e.left + n.pageXOffset
            }) : {
                top: 0,
                left: 0
            } : void 0
        },
        position: function() {
            if (this[0]) {
                var e, t, n, r = this[0], i = {
                    top: 0,
                    left: 0
                };
                if ("fixed" === k.css(r, "position"))
                    t = r.getBoundingClientRect();
                else {
                    t = this.offset(),
                    n = r.ownerDocument,
                    e = r.offsetParent || n.documentElement;
                    while (e && (e === n.body || e === n.documentElement) && "static" === k.css(e, "position"))
                        e = e.parentNode;
                    e && e !== r && 1 === e.nodeType && ((i = k(e).offset()).top += k.css(e, "borderTopWidth", !0),
                    i.left += k.css(e, "borderLeftWidth", !0))
                }
                return {
                    top: t.top - i.top - k.css(r, "marginTop", !0),
                    left: t.left - i.left - k.css(r, "marginLeft", !0)
                }
            }
        },
        offsetParent: function() {
            return this.map(function() {
                var e = this.offsetParent;
                while (e && "static" === k.css(e, "position"))
                    e = e.offsetParent;
                return e || ie
            })
        }
    }),
    k.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(t, i) {
        var o = "pageYOffset" === i;
        k.fn[t] = function(e) {
            return _(this, function(e, t, n) {
                var r;
                if (x(e) ? r = e : 9 === e.nodeType && (r = e.defaultView),
                void 0 === n)
                    return r ? r[i] : e[t];
                r ? r.scrollTo(o ? r.pageXOffset : n, o ? n : r.pageYOffset) : e[t] = n
            }, t, e, arguments.length)
        }
    }),
    k.each(["top", "left"], function(e, n) {
        k.cssHooks[n] = ze(y.pixelPosition, function(e, t) {
            if (t)
                return t = _e(e, n),
                $e.test(t) ? k(e).position()[n] + "px" : t
        })
    }),
    k.each({
        Height: "height",
        Width: "width"
    }, function(a, s) {
        k.each({
            padding: "inner" + a,
            content: s,
            "": "outer" + a
        }, function(r, o) {
            k.fn[o] = function(e, t) {
                var n = arguments.length && (r || "boolean" != typeof e)
                  , i = r || (!0 === e || !0 === t ? "margin" : "border");
                return _(this, function(e, t, n) {
                    var r;
                    return x(e) ? 0 === o.indexOf("outer") ? e["inner" + a] : e.document.documentElement["client" + a] : 9 === e.nodeType ? (r = e.documentElement,
                    Math.max(e.body["scroll" + a], r["scroll" + a], e.body["offset" + a], r["offset" + a], r["client" + a])) : void 0 === n ? k.css(e, t, i) : k.style(e, t, n, i)
                }, s, n ? e : void 0, n)
            }
        })
    }),
    k.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function(e, n) {
        k.fn[n] = function(e, t) {
            return 0 < arguments.length ? this.on(n, null, e, t) : this.trigger(n)
        }
    }),
    k.fn.extend({
        hover: function(e, t) {
            return this.mouseenter(e).mouseleave(t || e)
        }
    }),
    k.fn.extend({
        bind: function(e, t, n) {
            return this.on(e, null, t, n)
        },
        unbind: function(e, t) {
            return this.off(e, null, t)
        },
        delegate: function(e, t, n, r) {
            return this.on(t, e, n, r)
        },
        undelegate: function(e, t, n) {
            return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
        }
    }),
    k.proxy = function(e, t) {
        var n, r, i;
        if ("string" == typeof t && (n = e[t],
        t = e,
        e = n),
        m(e))
            return r = s.call(arguments, 2),
            (i = function() {
                return e.apply(t || this, r.concat(s.call(arguments)))
            }
            ).guid = e.guid = e.guid || k.guid++,
            i
    }
    ,
    k.holdReady = function(e) {
        e ? k.readyWait++ : k.ready(!0)
    }
    ,
    k.isArray = Array.isArray,
    k.parseJSON = JSON.parse,
    k.nodeName = A,
    k.isFunction = m,
    k.isWindow = x,
    k.camelCase = V,
    k.type = w,
    k.now = Date.now,
    k.isNumeric = function(e) {
        var t = k.type(e);
        return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e))
    }
    ,
    "function" == typeof define && define.amd && define("jquery", [], function() {
        return k
    });
    var Qt = C.jQuery
      , Jt = C.$;
    return k.noConflict = function(e) {
        return C.$ === k && (C.$ = Jt),
        e && C.jQuery === k && (C.jQuery = Qt),
        k
    }
    ,
    e || (C.jQuery = C.$ = k),
    k
});

/*! jQuery Migrate v3.1.0 | (c) OpenJS Foundation and other contributors | jquery.org/license */
"undefined" == typeof jQuery.migrateMute && (jQuery.migrateMute = !0),
function(t) {
    "function" == typeof define && define.amd ? define(["jquery"], function(e) {
        return t(e, window)
    }) : "object" == typeof module && module.exports ? module.exports = t(require("jquery"), window) : t(jQuery, window)
}(function(s, n) {
    "use strict";
    function e(e) {
        return 0 <= function(e, t) {
            for (var r = /^(\d+)\.(\d+)\.(\d+)/, n = r.exec(e) || [], o = r.exec(t) || [], i = 1; i <= 3; i++) {
                if (+n[i] > +o[i])
                    return 1;
                if (+n[i] < +o[i])
                    return -1
            }
            return 0
        }(s.fn.jquery, e)
    }
    s.migrateVersion = "3.1.0",
    n.console && n.console.log && (s && e("3.0.0") || n.console.log("JQMIGRATE: jQuery 3.0.0+ REQUIRED"),
    s.migrateWarnings && n.console.log("JQMIGRATE: Migrate plugin loaded multiple times"),
    n.console.log("JQMIGRATE: Migrate is installed" + (s.migrateMute ? "" : " with logging active") + ", version " + s.migrateVersion));
    var r = {};
    function u(e) {
        var t = n.console;
        r[e] || (r[e] = !0,
        s.migrateWarnings.push(e),
        t && t.warn && !s.migrateMute && (t.warn("JQMIGRATE: " + e),
        s.migrateTrace && t.trace && t.trace()))
    }
    function t(e, t, r, n) {
        Object.defineProperty(e, t, {
            configurable: !0,
            enumerable: !0,
            get: function() {
                return u(n),
                r
            },
            set: function(e) {
                u(n),
                r = e
            }
        })
    }
    function o(e, t, r, n) {
        e[t] = function() {
            return u(n),
            r.apply(this, arguments)
        }
    }
    s.migrateWarnings = [],
    void 0 === s.migrateTrace && (s.migrateTrace = !0),
    s.migrateReset = function() {
        r = {},
        s.migrateWarnings.length = 0
    }
    ,
    "BackCompat" === n.document.compatMode && u("jQuery is not compatible with Quirks Mode");
    var i, a = s.fn.init, c = s.isNumeric, d = s.find, l = /\[(\s*[-\w]+\s*)([~|^$*]?=)\s*([-\w#]*?#[-\w#]*)\s*\]/, p = /\[(\s*[-\w]+\s*)([~|^$*]?=)\s*([-\w#]*?#[-\w#]*)\s*\]/g;
    for (i in s.fn.init = function(e) {
        var t = Array.prototype.slice.call(arguments);
        return "string" == typeof e && "#" === e && (u("jQuery( '#' ) is not a valid selector"),
        t[0] = []),
        a.apply(this, t)
    }
    ,
    s.fn.init.prototype = s.fn,
    s.find = function(t) {
        var r = Array.prototype.slice.call(arguments);
        if ("string" == typeof t && l.test(t))
            try {
                n.document.querySelector(t)
            } catch (e) {
                t = t.replace(p, function(e, t, r, n) {
                    return "[" + t + r + '"' + n + '"]'
                });
                try {
                    n.document.querySelector(t),
                    u("Attribute selector with '#' must be quoted: " + r[0]),
                    r[0] = t
                } catch (e) {
                    u("Attribute selector with '#' was not fixed: " + r[0])
                }
            }
        return d.apply(this, r)
    }
    ,
    d)
        Object.prototype.hasOwnProperty.call(d, i) && (s.find[i] = d[i]);
    s.fn.size = function() {
        return u("jQuery.fn.size() is deprecated and removed; use the .length property"),
        this.length
    }
    ,
    s.parseJSON = function() {
        return u("jQuery.parseJSON is deprecated; use JSON.parse"),
        JSON.parse.apply(null, arguments)
    }
    ,
    s.isNumeric = function(e) {
        var t, r, n = c(e), o = (r = (t = e) && t.toString(),
        !s.isArray(t) && 0 <= r - parseFloat(r) + 1);
        return n !== o && u("jQuery.isNumeric() should not be called on constructed objects"),
        o
    }
    ,
    e("3.3.0") && o(s, "isWindow", function(e) {
        return null != e && e === e.window
    }, "jQuery.isWindow() is deprecated"),
    o(s, "holdReady", s.holdReady, "jQuery.holdReady is deprecated"),
    o(s, "unique", s.uniqueSort, "jQuery.unique is deprecated; use jQuery.uniqueSort"),
    t(s.expr, "filters", s.expr.pseudos, "jQuery.expr.filters is deprecated; use jQuery.expr.pseudos"),
    t(s.expr, ":", s.expr.pseudos, "jQuery.expr[':'] is deprecated; use jQuery.expr.pseudos"),
    e("3.2.0") && o(s, "nodeName", s.nodeName, "jQuery.nodeName is deprecated");
    var f = s.ajax;
    s.ajax = function() {
        var e = f.apply(this, arguments);
        return e.promise && (o(e, "success", e.done, "jQXHR.success is deprecated and removed"),
        o(e, "error", e.fail, "jQXHR.error is deprecated and removed"),
        o(e, "complete", e.always, "jQXHR.complete is deprecated and removed")),
        e
    }
    ;
    var y = s.fn.removeAttr
      , m = s.fn.toggleClass
      , h = /\S+/g;
    s.fn.removeAttr = function(e) {
        var r = this;
        return s.each(e.match(h), function(e, t) {
            s.expr.match.bool.test(t) && (u("jQuery.fn.removeAttr no longer sets boolean properties: " + t),
            r.prop(t, !1))
        }),
        y.apply(this, arguments)
    }
    ;
    var g = !(s.fn.toggleClass = function(t) {
        return void 0 !== t && "boolean" != typeof t ? m.apply(this, arguments) : (u("jQuery.fn.toggleClass( boolean ) is deprecated"),
        this.each(function() {
            var e = this.getAttribute && this.getAttribute("class") || "";
            e && s.data(this, "__className__", e),
            this.setAttribute && this.setAttribute("class", e || !1 === t ? "" : s.data(this, "__className__") || "")
        }))
    }
    );
    s.swap && s.each(["height", "width", "reliableMarginRight"], function(e, t) {
        var r = s.cssHooks[t] && s.cssHooks[t].get;
        r && (s.cssHooks[t].get = function() {
            var e;
            return g = !0,
            e = r.apply(this, arguments),
            g = !1,
            e
        }
        )
    }),
    s.swap = function(e, t, r, n) {
        var o, i, a = {};
        for (i in g || u("jQuery.swap() is undocumented and deprecated"),
        t)
            a[i] = e.style[i],
            e.style[i] = t[i];
        for (i in o = r.apply(e, n || []),
        t)
            e.style[i] = a[i];
        return o
    }
    ;
    var v = s.data;
    s.data = function(e, t, r) {
        var n;
        if (t && "object" == typeof t && 2 === arguments.length) {
            n = s.hasData(e) && v.call(this, e);
            var o = {};
            for (var i in t)
                i !== s.camelCase(i) ? (u("jQuery.data() always sets/gets camelCased names: " + i),
                n[i] = t[i]) : o[i] = t[i];
            return v.call(this, e, o),
            t
        }
        return t && "string" == typeof t && t !== s.camelCase(t) && (n = s.hasData(e) && v.call(this, e)) && t in n ? (u("jQuery.data() always sets/gets camelCased names: " + t),
        2 < arguments.length && (n[t] = r),
        n[t]) : v.apply(this, arguments)
    }
    ;
    function j(e) {
        return e
    }
    var Q = s.Tween.prototype.run;
    s.Tween.prototype.run = function() {
        1 < s.easing[this.easing].length && (u("'jQuery.easing." + this.easing.toString() + "' should use only one argument"),
        s.easing[this.easing] = j),
        Q.apply(this, arguments)
    }
    ;
    var w = s.fx.interval || 13
      , b = "jQuery.fx.interval is deprecated";
    n.requestAnimationFrame && Object.defineProperty(s.fx, "interval", {
        configurable: !0,
        enumerable: !0,
        get: function() {
            return n.document.hidden || u(b),
            w
        },
        set: function(e) {
            u(b),
            w = e
        }
    });
    var x = s.fn.load
      , k = s.event.add
      , A = s.event.fix;
    s.event.props = [],
    s.event.fixHooks = {},
    t(s.event.props, "concat", s.event.props.concat, "jQuery.event.props.concat() is deprecated and removed"),
    s.event.fix = function(e) {
        var t, r = e.type, n = this.fixHooks[r], o = s.event.props;
        if (o.length) {
            u("jQuery.event.props are deprecated and removed: " + o.join());
            while (o.length)
                s.event.addProp(o.pop())
        }
        if (n && !n._migrated_ && (n._migrated_ = !0,
        u("jQuery.event.fixHooks are deprecated and removed: " + r),
        (o = n.props) && o.length))
            while (o.length)
                s.event.addProp(o.pop());
        return t = A.call(this, e),
        n && n.filter ? n.filter(t, e) : t
    }
    ,
    s.event.add = function(e, t) {
        return e === n && "load" === t && "complete" === n.document.readyState && u("jQuery(window).on('load'...) called after load event occurred"),
        k.apply(this, arguments)
    }
    ,
    s.each(["load", "unload", "error"], function(e, t) {
        s.fn[t] = function() {
            var e = Array.prototype.slice.call(arguments, 0);
            return "load" === t && "string" == typeof e[0] ? x.apply(this, e) : (u("jQuery.fn." + t + "() is deprecated"),
            e.splice(0, 0, t),
            arguments.length ? this.on.apply(this, e) : (this.triggerHandler.apply(this, e),
            this))
        }
    }),
    s.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function(e, r) {
        s.fn[r] = function(e, t) {
            return u("jQuery.fn." + r + "() event shorthand is deprecated"),
            0 < arguments.length ? this.on(r, null, e, t) : this.trigger(r)
        }
    }),
    s(function() {
        s(n.document).triggerHandler("ready")
    }),
    s.event.special.ready = {
        setup: function() {
            this === n.document && u("'ready' event is deprecated")
        }
    },
    s.fn.extend({
        bind: function(e, t, r) {
            return u("jQuery.fn.bind() is deprecated"),
            this.on(e, null, t, r)
        },
        unbind: function(e, t) {
            return u("jQuery.fn.unbind() is deprecated"),
            this.off(e, null, t)
        },
        delegate: function(e, t, r, n) {
            return u("jQuery.fn.delegate() is deprecated"),
            this.on(t, e, r, n)
        },
        undelegate: function(e, t, r) {
            return u("jQuery.fn.undelegate() is deprecated"),
            1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", r)
        },
        hover: function(e, t) {
            return u("jQuery.fn.hover() is deprecated"),
            this.on("mouseenter", e).on("mouseleave", t || e)
        }
    });
    var S = s.fn.offset;
    s.fn.offset = function() {
        var e, t = this[0], r = {
            top: 0,
            left: 0
        };
        return t && t.nodeType ? (e = (t.ownerDocument || n.document).documentElement,
        s.contains(e, t) ? S.apply(this, arguments) : (u("jQuery.fn.offset() requires an element connected to a document"),
        r)) : (u("jQuery.fn.offset() requires a valid DOM element"),
        r)
    }
    ;
    var q = s.param;
    s.param = function(e, t) {
        var r = s.ajaxSettings && s.ajaxSettings.traditional;
        return void 0 === t && r && (u("jQuery.param() no longer uses jQuery.ajaxSettings.traditional"),
        t = r),
        q.call(this, e, t)
    }
    ;
    var C = s.fn.andSelf || s.fn.addBack;
    s.fn.andSelf = function() {
        return u("jQuery.fn.andSelf() is deprecated and removed, use jQuery.fn.addBack()"),
        C.apply(this, arguments)
    }
    ;
    var M = s.Deferred
      , R = [["resolve", "done", s.Callbacks("once memory"), s.Callbacks("once memory"), "resolved"], ["reject", "fail", s.Callbacks("once memory"), s.Callbacks("once memory"), "rejected"], ["notify", "progress", s.Callbacks("memory"), s.Callbacks("memory")]];
    return s.Deferred = function(e) {
        var i = M()
          , a = i.promise();
        return i.pipe = a.pipe = function() {
            var o = arguments;
            return u("deferred.pipe() is deprecated"),
            s.Deferred(function(n) {
                s.each(R, function(e, t) {
                    var r = s.isFunction(o[e]) && o[e];
                    i[t[1]](function() {
                        var e = r && r.apply(this, arguments);
                        e && s.isFunction(e.promise) ? e.promise().done(n.resolve).fail(n.reject).progress(n.notify) : n[t[0] + "With"](this === a ? n.promise() : this, r ? [e] : arguments)
                    })
                }),
                o = null
            }).promise()
        }
        ,
        e && e.call(i, i),
        i
    }
    ,
    s.Deferred.exceptionHook = M.exceptionHook,
    s
});
jQuery.cookie = function(name, value, options) {
    if (typeof value != 'undefined') {
        options = options || {};
        if (value === null) {
            value = '';
            options.expires = -1;
        }
        var expires = '';
        if (options.expires && (typeof options.expires == 'number' || options.expires.toUTCString)) {
            var date;
            if (typeof options.expires == 'number') {
                date = new Date();
                date.setTime(date.getTime() + (options.expires * 24 * 60 * 60 * 1000));
            } else {
                date = options.expires;
            }
            expires = '; expires=' + date.toUTCString();
        }
        var path = options.path ? '; path=' + (options.path) : '';
        var domain = options.domain ? '; domain=' + (options.domain) : '';
        var secure = options.secure ? '; secure' : '';
        document.cookie = [name, '=', encodeURIComponent(value), expires, path, domain, secure].join('');
    } else {
        var cookieValue = null;
        if (document.cookie && document.cookie != '') {
            var cookies = document.cookie.split(';');
            for (var i = 0; i < cookies.length; i++) {
                var cookie = jQuery.trim(cookies[i]);
                if (cookie.substring(0, name.length + 1) == (name + '=')) {
                    cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                    break;
                }
            }
        }
        return cookieValue;
    }
}
;
;jQuery.fn.pagination = function(maxentries, opts) {
    opts = jQuery.extend({
        items_per_page: 15,
        num_display_entries: 8,
        current_page: 0,
        num_edge_entries: 0,
        link_to: "#",
        prev_text: "<<",
        next_text: ">>",
        ellipse_text: "...",
        prev_show_always: true,
        next_show_always: true,
        dis_pageEnd: false,
        start_text: "<<",
        end_text: ">>",
        callback: function() {
            return false;
        }
    }, opts || {});
    return this.each(function() {
        function numPages() {
            return Math.ceil(maxentries / opts.items_per_page);
        }
        function getInterval() {
            var ne_half = Math.ceil(opts.num_display_entries / 2);
            var np = numPages();
            var upper_limit = np - opts.num_display_entries;
            var start = current_page > ne_half ? Math.max(Math.min(current_page - ne_half, upper_limit), 0) : 0;
            var end = current_page > ne_half ? Math.min(current_page + ne_half, np) : Math.min(opts.num_display_entries, np);
            return [start, end];
        }
        function pageSelected(page_id, evt) {
            current_page = page_id;
            drawLinks();
            var continuePropagation = opts.callback(page_id, panel);
            if (!continuePropagation) {
                if (evt.stopPropagation) {
                    evt.stopPropagation();
                } else {
                    evt.cancelBubble = true;
                }
            }
            return continuePropagation;
        }
        function drawLinks() {
            panel.empty();
            var interval = getInterval();
            var np = numPages();
            var getClickHandler = function(page_id) {
                return function(evt) {
                    return pageSelected(page_id, evt);
                }
            }
            var appendItem = function(page_id, appendopts) {
                page_id = page_id < 0 ? 0 : (page_id < np ? page_id : np - 1);
                appendopts = jQuery.extend({
                    text: page_id + 1,
                    classes: ""
                }, appendopts || {});
                if (page_id == current_page) {
                    var lnk = $("<span class='current'>" + (appendopts.text) + "</span>");
                } else {
                    var lnk = $("<a>" + (appendopts.text) + "</a>").bind("click", getClickHandler(page_id)).attr('href', opts.link_to.replace(/__id__/, page_id));
                }
                if (appendopts.classes) {
                    lnk.addClass(appendopts.classes);
                }
                panel.append(lnk);
            }
            if (current_page >= 0) {
                appendItem(0, {
                    text: opts.start_text ? opts.start_text : "&nbsp;",
                    classes: "first"
                });
            }
            if (opts.prev_text && (current_page > 0 || opts.prev_show_always)) {
                if (opts.dis_pageEnd) {
                    appendItem(0, {
                        text: opts.start_text,
                        classes: "prev"
                    });
                }
                appendItem(current_page - 1, {
                    text: opts.prev_text,
                    classes: "prev"
                });
            }
            if (interval[0] > 0 && opts.num_edge_entries > 0) {
                var end = Math.min(opts.num_edge_entries, interval[0]);
                for (var i = 0; i < end; i++) {
                    appendItem(i);
                }
                if (opts.num_edge_entries < interval[0] && opts.ellipse_text) {
                    jQuery("<span>" + opts.ellipse_text + "</span>").appendTo(panel);
                }
            }
            for (var i = interval[0]; i < interval[1]; i++) {
                appendItem(i);
            }
            if (interval[1] < np && opts.num_edge_entries > 0) {
                if (np - opts.num_edge_entries > interval[1] && opts.ellipse_text) {
                    jQuery("<span>" + opts.ellipse_text + "</span>").appendTo(panel);
                }
                var begin = Math.max(np - opts.num_edge_entries, interval[1]);
                for (var i = begin; i < np; i++) {
                    appendItem(i);
                }
            }
            if (opts.next_text && (current_page < np - 1 || opts.next_show_always)) {
                appendItem(current_page + 1, {
                    text: opts.next_text,
                    classes: "next"
                });
                if (opts.dis_pageEnd) {
                    appendItem(np, {
                        text: opts.end_text,
                        classes: "next"
                    });
                }
            }
            if (np >= 1) {
                appendItem(end, {
                    text: opts.end_text ? opts.end_text : "&nbsp;",
                    classes: "last"
                });
            }
        }
        var current_page = opts.current_page;
        maxentries = (!maxentries || maxentries < 0) ? 1 : maxentries;
        opts.items_per_page = (!opts.items_per_page || opts.items_per_page < 0) ? 1 : opts.items_per_page;
        var panel = jQuery(this);
        this.selectPage = function(page_id) {
            pageSelected(page_id);
        }
        this.prevPage = function() {
            if (current_page > 0) {
                pageSelected(current_page - 1);
                return true;
            } else {
                return false;
            }
        }
        this.nextPage = function() {
            if (current_page < numPages() - 1) {
                pageSelected(current_page + 1);
                return true;
            } else {
                return false;
            }
        }
        drawLinks();
    });
}
;
$.ie6 = false;
window.ReadyObject = {
    isReady: false,
    init: function() {
        this.isReady = true;
    },
    ready: function(func) {
        VHV.ExecQueue.add(func, function() {
            return this.isReady;
        }, this);
    }
};
window.VHV = $.extend({
    cache: {},
    debug: 1,
    readyFlags: {},
    async: true,
    allLinks: {},
    xmlCache: {},
    domain: location.host,
    home: location.protocol + '//' + location.host,
    version: 1.21,
    rootURL: rootURL,
    staticURL: staticURL,
    innerText: $.msie ? ($.browser.ie6 ? 'nodeValue' : 'innerText') : 'textContent',
    allOrderedLinks: [],
    reload: function() {
        if (VHV.app) {
            VHV.app.reloadCurrentScreen();
            ;
        } else {
            location.reload();
        }
    },
    redirect: function(url, base64) {
        if (typeof (url) == 'object') {
            url = VHV.buildURL(url);
        }
        if (base64) {
            url = decodeURIComponent(escape(decode64(url)));
        }
        if (typeof (url) == 'string' && /^([A-Z]\w*\.)?[\w\.]+$/.test(url)) {
            url = VHV.buildURL({
                page: url
            });
        }
        if ((url.toLowerCase().indexOf('http') == -1) && (url.toLowerCase().indexOf('https') == -1) && (url.indexOf('/') != 0)) {
            url = location.protocol + '//' + url;
        }
        if (VHV.app) {
            VHV.app.redirect(url);
        } else {
            location = url;
        }
    },
    request: function(param, defaultValue) {
        if (typeof (defaultValue) == 'undefined') {
            defaultValue = '';
        }
        var regex = '[?&]' + param + '=([^&#]*)';
        var results = (new RegExp(regex)).exec(VHV.location ? VHV.location : location.href);
        if (results) {
            return decodeURIComponent(results[1]);
        } else {
            var regex = '[?&]' + param + '\\[(\\w*)\\]=([^&#]*)'
              , regExpObj = new RegExp(regex,'g');
            var matches = location.href.toString().replace(/\%5B/g, '[').replace(/\%5D/g, ']').match(regExpObj);
            if (matches) {
                var items = {};
                for (var i = 0; i < matches.length; i++) {
                    var results = (new RegExp(regex)).exec(matches[i]);
                    if (results) {
                        if (results[1] !== '') {
                            items[results[1]] = decodeURIComponent(results[2]);
                        } else {
                            items[VHV.sizeof(items)] = decodeURIComponent(results[2]);
                        }
                    }
                }
                return items;
            }
        }
        return defaultValue;
    },
    buildURL: function(options, urlMode) {
        var url = (VHV.domainRoot ? VHV.domainRoot : VHV.staticURL) + ((options.page && options.page.indexOf('Mobile.') == 0) ? 'm/' : '') + '?'
          , hasPortal = false;
        for (var i in options) {
            if (i == 'site') {
                hasPortal = true;
            }
            url += '&' + i + '=' + encodeURIComponent(options[i]);
        }
        if (!hasPortal) {
            url += '&site=' + VHV.App.site;
        }
        if (VHV.request('colomboDebug2')) {
            url += '&colomboDebug2=1';
        }
        return url;
    },
    number: function(value) {
        if (VHV.defaultNumberFormat == 'US') {
            return VHV.numberFormat(value, 2, '.', ',').replace('.00', '');
        }
        return VHV.numberFormat(value, 2, ',', '.').replace(',00', '');
    },
    notag: function(value) {
        if (value && typeof (value) == 'string') {
            value = value.replace(/&/g, '&amp;').replace(/'/g, '&#x27;').replace(/\"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/\//g, '&#x2F;');
        }
        return value;
    },
    numberDecode: function(value) {
        if (VHV.defaultNumberFormat == 'US') {
            return parseFloat(value.replace(',', ''));
        }
        return parseFloat(value.replace('.', '').replace(',', '.'));
    },
    currency: function() {
        if (VHV.defaultCurrency) {
            return VHV.defaultCurrency;
        }
        return 'VND';
    },
    setAllLinks: function(fileName, value) {
        if (fileName.indexOf('/') == 0) {
            fileName = location.protocol + '//' + location.hostname + fileName;
        }
        VHV.allLinks[fileName] = value;
    },
    read: function(fileName, options, func) {
        if (!fileName)
            return;
        if (typeof (options) == 'function') {
            func = options;
            options = {};
        }
        if (VHV.allLinks[fileName] == 2) {
            if (func)
                func.call(this, VHV.cache[fileName] ? VHV.cache[fileName] : '');
            else
                return VHV.cache[fileName] ? VHV.cache[fileName] : '';
            return;
        } else if (parseInt(VHV.allLinks[fileName]) == 1 && (!options || typeof (options.async) == 'undefined' || options.async)) {
            VHV.ExecQueue.add(func, function() {
                return VHV.allLinks[fileName] == 2
            }, null, {
                fileName: fileName
            });
            return;
        }
        VHV.setAllLinks(fileName, 1);
        if ((fileName.indexOf('.js') != -1) && (fileName.indexOf('3rdparty/') != -1)) {
            var fn = fileName;
            fileName = fileName.replace(VHV.rootURL, VHV.staticURL);
            if ((fileName.indexOf('http://') == -1) && (fileName.indexOf('https://') == -1)) {
                fileName = ((fileName.substr(0, 1) == '/') ? '' : (VHV.staticURL ? VHV.staticURL : '/')) + fileName;
            }
            var that = this;
            $.ajax($.extend({
                url: fileName + '?' + (VHV.clientVersion ? VHV.clientVersion : 1),
                dataType: "script",
                cache: true,
                success: function(data) {
                    VHV.setAllLinks(fn, 2);
                    VHV.allOrderedLinks.push(fn);
                    if (func) {
                        func.call(that, data);
                    }
                }
            }, options ? options : {}));
            return;
        }
        if (!options) {
            options = {};
        }
        if (!options.dataType) {
            options.dataType = 'html';
        }
        if (typeof (options.async) == 'undefined') {
            options.async = VHV.async;
        }
        if (fileName.indexOf('.css') != -1) {
            var fn = fileName;
            if ((fn.indexOf('http://') == -1) && (fn.indexOf('https://') == -1)) {
                if (fn.indexOf(staticURL) != 0) {
                    if (fn.charAt(0) == '/') {
                        fn = VHV.staticURL + fn;
                    } else if ((fn.indexOf('http://') == -1) && (fn.indexOf('https://') == -1)) {
                        fn = VHV.staticURL + fn;
                    }
                }
                if (fn.indexOf('3rdparty/') != -1) {
                    fn = fn.replace(VHV.rootURL, VHV.staticURL);
                    fn = ((fn.substr(0, 1) == '/') ? '' : VHV.staticURL) + fn;
                }
            }
            if (fileName.substr(1).indexOf('/') != -1) {
                var fileref = document.createElement("link");
                fileref.setAttribute("rel", "stylesheet");
                fileref.setAttribute("type", "text/css");
                fileref.setAttribute("href", fn + '?' + (VHV.clientVersion ? VHV.clientVersion : 1));
                document.getElementsByTagName("head")[0].appendChild(fileref);
            }
            VHV.setAllLinks(fileName, 2);
            VHV.allOrderedLinks.push(fileName);
            return;
        }
        if (fileName.indexOf('.js') != -1) {
            $.ajax({
                url: ((((fileName.indexOf('http://') == -1) && (fileName.indexOf('https://') == -1)) || (fileName.indexOf(rootURL) == 0)) ? staticURL : '') + fileName.replace(rootURL, '') + '?' + (VHV.clientVersion ? VHV.clientVersion : 1),
                dataType: "script",
                cache: true,
                success: function() {
                    VHV.setAllLinks(fileName, 2);
                    VHV.allOrderedLinks.push(fileName);
                }
            });
        } else {
            var realFileName = (staticURL + fileName.replace(rootURL, ''));
            if (fileName.indexOf('.js') != -1 && navigator.userAgent.toLowerCase().indexOf('chrome') == -1) {
                var node = document.createElement('SCRIPT');
                node.src = realFileName;
                if ($.msie) {
                    node.onreadystatechange = function() {
                        if ((this.readyState == 'complete' || this.readyState == 'loaded') && (VHV.allLinks[realFileName] != 2)) {
                            setTimeout(function() {
                                VHV.setAllLinks(fileName, 2);
                                VHV.allOrderedLinks.push(fileName);
                            }, 10);
                        }
                    }
                } else {
                    node.onload = function() {
                        setTimeout(function() {
                            VHV.setAllLinks(fileName, 2);
                            VHV.allOrderedLinks.push(fileName);
                        }, 10);
                    }
                    ;
                }
                document.body.appendChild(node);
                return;
            }
            var returnValue = '';
            var success = function(data) {
                if (fileName.indexOf('.js') == -1 && fileName.indexOf('.css') == -1) {
                    if (data)
                        VHV.cache[fileName] = data;
                }
                if (options.dataType == 'html') {
                    if (fileName.indexOf('.css') != -1) {
                        var parts = fileName.split('/');
                        parts.splice(parts.length - 1, 1);
                        parts = parts.join('/') + '/';
                        data = data.replace(/url\s*\(\s*(["']?)/gi, 'url($1' + parts);
                        $('body').append('<style>' + data + '</style>');
                    } else if (fileName.indexOf('.js') != -1) {
                        eval(data);
                    }
                } else {
                    returnValue = data;
                }
                VHV.setAllLinks(fileName, 2);
                VHV.allOrderedLinks.push(fileName);
                if (func) {
                    func.call(this, data);
                }
            };
            $.ajax($.extend({
                url: realFileName + (/\?/.test(fileName) ? '&' : '?') + 'v=' + VHV.version + (VHV.clientVersion ? VHV.clientVersion : 1),
                cache: true,
                success: success
            }, options));
            return returnValue;
        }
    },
    getComponentURL: function(url) {
        var values = {
            name: url,
            path: '',
            type: ''
        };
        if ((url.indexOf('http://') != -1) || (url.indexOf('https://') != -1)) {
            values.path = url;
        } else if (url.indexOf('3rdparty') != -1 || url.indexOf('languages') != -1 || url.indexOf('.js') != -1 || url.indexOf('.css') != -1) {
            values.path = ((url.indexOf(staticURL) != 0) ? rootURL : '') + url;
            values.type = '3rdparty';
        } else if (url.indexOf('.') != -1) {
            var parts = url.split('.')
              , module = parts.splice(parts.length - 1, 1);
            values.package = parts.join('.');
            if (module && module != '') {
                values.path = rootURL + 'publish/js/modules/' + ((VHV.language != 'vi') ? VHV.language + '_' : '') + parts.join('.') + '.' + module + '.js';
                values.type = 'module';
            }
        }
        return values;
    },
    load: function() {
        var args = [];
        if (arguments.length > 0) {
            if (typeof (arguments[0]) == 'function') {
                arguments[0].call(this);
            } else {
                var length = arguments.length;
                if (typeof (arguments[arguments.length - 1]) == 'function') {
                    length--;
                }
                if (typeof (arguments[0]) == 'object' && arguments[0].length && typeof (arguments[0][0]) == 'object' && arguments[0][0].length) {
                    var newArgs = args[0].splice(0, 1)[0];
                    if (args[0].length > 0) {
                        newArgs.push(function() {
                            VHV.load(args[0], args[1]);
                        });
                    } else {
                        newArgs.push(args[1]);
                    }
                    VHV.load.apply(this, newArgs);
                    return;
                }
                for (var i = 0; i < length; i++) {
                    if (typeof (arguments[i]) == 'string' && arguments[i]) {
                        args[i] = VHV.getComponentURL(arguments[i]);
                        if (!VHV.allLinks[args[i].path]) {
                            var parts = arguments[i].split('.')
                              , currentArg = args[i];
                            if (args[i].type == 'module') {
                                var files = [];
                                for (var j = 0; j < parts.length - 1; j++) {
                                    var file = 'VHV.' + parts.slice(0, j + 1).join('.');
                                    if (file && file != 'VHV.') {
                                        eval('var model = ' + file + ';');
                                        if (typeof (model) == 'undefined') {
                                            eval(file + ' = {};');
                                        }
                                    }
                                }
                            }
                            if (args[i].path)
                                VHV.read(args[i].path);
                        }
                    }
                }
                if (typeof (arguments[length]) == 'function') {
                    var oldArgs = arguments;
                    VHV.ExecQueue.add(function() {
                        oldArgs[length].call(this);
                    }, function() {
                        for (var i = 0; i < length; i++) {
                            if (args[i]) {
                                if (args[i].type == 'module' && (!VHV.allLinks[args[i].path] || VHV.allLinks[args[i].path] < 2)) {
                                    return false;
                                } else if (args[i].type == 'module') {
                                    var ok = true;
                                    try {
                                        eval('ok = (typeof(VHV.' + args[i].name + ') != "undefined");');
                                    } catch (e) {
                                        ok = false;
                                    }
                                    ;if (!ok) {
                                        return false;
                                    }
                                } else if (VHV.allLinks[args[i].path] < 2) {
                                    return false;
                                }
                            }
                        }
                        return true;
                    }, arguments, {
                        caller: 'load',
                        args: args
                    });
                }
            }
        }
    },
    using: function(moduleInfo, options, success, success2) {
        var moduleName = moduleInfo.module
          , currentModule = VHV.App.currentModule
          , moduleId = moduleInfo.id ? moduleInfo.id : ++VHV.App.maxModuleId;
        if ((typeof (options) == 'string') && options) {
            moduleName = options;
            options = success;
            if (!options)
                options = {};
            options.phpModuleName = moduleInfo.module;
            options.module = moduleName;
            success = success2;
        }
        if (VHV.App.maxModuleId < moduleId)
            VHV.App.maxModuleId = moduleId;
        VHV.load(moduleName, function() {
            VHV.runModule(moduleName, moduleId, $.extend(moduleInfo, options), success, currentModule);
        });
    },
    runModule: function(moduleName, moduleId, options, success, currentModule) {
        var lastModule = VHV.App.currentModule, module, proto, oldModule = VHV.App.modules[moduleId];
        if (!oldModule || (oldModule.module != moduleName)) {
            VHV.App.currentModule = currentModule;
            module = {};
            eval('module = new VHV.' + moduleName + '(' + moduleId + '); proto = VHV.' + moduleName + '.prototype;');
            for (var i in proto) {
                if (typeof (proto[i]) == 'object') {
                    module[i] = $.extend(true, $.isArray(proto[i]) ? [] : {}, proto[i]);
                }
            }
            $.extend(module, options);
            if (oldModule) {
                for (var i in {
                    moduleParentId: 1,
                    children: 1
                }) {
                    if (oldModule[i]) {
                        module[i] = options[i] = oldModule[i];
                    }
                }
            } else {
                for (var i in VHV.App.modules) {
                    if (VHV.App.modules[i].moduleParentId == moduleId) {
                        VHV.App.modules[i].parent = module;
                        module.addChildren(VHV.App.modules[i]);
                    }
                }
            }
            if (module.moduleParentId && VHV.App.modules[module.moduleParentId]) {
                VHV.App.modules[module.moduleParentId].addChildren(module);
            }
            VHV.App.currentModule = lastModule;
            module.module = moduleName;
            module.id = moduleId;
            if (module.modules) {
                var modules = {};
                module.applyFunction(function() {
                    for (var i in this.modules) {
                        if (this.modules[i] && this.modules[i].module) {
                            VHV.using(this.modules[i].module, $.extend({
                                position: i
                            }, this.modules[i]), function() {
                                modules[this.position] = 1;
                            });
                        }
                    }
                });
                VHV.ExecQueue.add(function() {
                    module.init(success);
                }, function() {
                    for (var i in module.modules) {
                        if (i != '#comment' && !modules[i] && module.modules[i].module) {
                            return false;
                        }
                    }
                    return true;
                }, null, {
                    caller: 'runModule ' + moduleName
                });
                return;
            }
            module.init(success);
        } else {
            module = VHV.App.modules[moduleId];
            if (options.moduleParentId) {
                delete options.moduleParentId;
            }
            $.extend(module, options);
            module.id = moduleId;
            module.ready(function() {
                module.initEvents();
            });
        }
    },
    extend: function(oldClass, properties, extra) {
        if ((typeof (properties) == 'string') && properties) {
            VHV.load(properties, function() {
                eval('VHV.' + oldClass + ' = VHV.extend(VHV.' + properties + ', extra);');
            });
            return;
        }
        var newClass = function() {
            if (typeof (oldClass) != 'undefined') {
                oldClass.apply(this, arguments);
            }
        }
        if (typeof (oldClass) != 'undefined') {
            $.extend(true, newClass.prototype, oldClass.prototype, properties);
        }
        newClass.parentClass = oldClass;
        return newClass;
    },
    sizeof: function(obj) {
        if (typeof (obj) == 'object') {
            var size = 0;
            for (var i in obj) {
                if (typeof (obj[i]) != 'function') {
                    size++;
                }
            }
            return parseInt(size);
        } else if (typeof (obj) != 'undefined' && typeof (obj.length) != 'undefined') {
            return obj.length;
        }
        return 0;
    },
    updateDisplay: function() {
        $('[data-x-display]').each(function() {
            eval('var ok = ' + $(this).data('xDisplay') + ';');
            if (ok) {
                $(this).show().find('select, input, textarea').removeAttr('disabled');
            } else {
                $(this).hide().find('select, input, textarea').attr('disabled', 'disabled');
            }
        });
    },
    changeTail: function(name, tail) {
        var p = name.lastIndexOf('.');
        if (p) {
            return name.substr(0, p + 1) + tail;
        }
    },
    ExecQueue: {
        queue: [],
        isRunning: false,
        interval: false,
        run: function() {
            if (!this.interval) {
                this.interval = setInterval(this.intervalFunction, 10);
            }
        },
        intervalFunction: function() {
            var that = VHV.ExecQueue;
            if (!that.isRunning) {
                that.isRunning = true;
                for (var i = 0; i < that.queue.length; i++) {
                    try {
                        if ((!that.queue[i].isCalled) && that.queue[i].condition.call(that.queue[i].context)) {
                            that.queue[i].isCalled = true;
                            that.queue[i].callback.call(that.queue[i].context);
                        }
                    } catch (e) {}
                }
                var i = 0;
                while (i < that.queue.length) {
                    if (that.queue[i].isCalled) {
                        that.queue.splice(i, 1);
                    } else {
                        i++;
                    }
                }
                if (that.queue.length == 0) {
                    clearInterval(that.interval);
                    that.interval = false;
                }
                that.isRunning = false;
            }
        },
        add: function(callback, condition, context, data) {
            if (condition.call(context)) {
                callback.call(context);
            } else {
                this.queue.push($.extend({
                    callback: callback,
                    condition: condition,
                    context: context,
                    isCalled: false
                }, data));
                if (!this.interval) {
                    this.run();
                }
            }
        }
    },
    App: $.extend({
        portal: '',
        layout: '',
        skin: '',
        version: '1.0',
        modules: {},
        currentPage: false,
        maxModuleId: 0,
        currentModule: undefined,
        isChild: function(childId, parentId) {
            while (childId != -1) {
                if (childId == parentId) {
                    return true;
                }
                if (VHV.App.modules[childId] && VHV.App.modules[childId].parent) {
                    childId = VHV.App.modules[childId].parent.id;
                } else {
                    return false;
                }
            }
            return false;
        },
        removeModule: function(id) {
            if (this.modules[id]) {
                for (var i in this.modules) {
                    if (this.modules[i] && this.modules[i].parent && this.modules[i].parent.id == id) {
                        this.removeModule(this.modules[i].id);
                    }
                }
                if (this.modules[id].destructor) {
                    this.modules[id].destructor();
                }
                delete this.modules[id];
            }
        }
    }, ReadyObject),
    Module: function(id) {
        if (!VHV.App.modules[this.id]) {
            this.id = id ? id : ++VHV.App.maxModuleId;
            VHV.App.modules[this.id] = this;
            this.parent = ((this.moduleParentId && VHV.App.modules[this.moduleParentId]) ? VHV.App.modules[this.moduleParentId] : VHV.App.currentModule);
        } else {
            return VHV.App.modules[this.id];
        }
    }
}, ReadyObject, {
    init: function() {
        if (VHV.inited || window.vhvInited) {
            return;
        }
        window.vhvInited = VHV.inited = true;
        VHV.allLinks[rootURL + '3rdparty/jQuery/jquery-1.7.2.min.js'] = 2;
        VHV.allLinks[rootURL + '3rdparty/jQuery/jquery.mobile-1.2.0/jquery.mobile-1.2.0.min.js'] = 2;
        VHV.allLinks[rootURL + 'VHV.js'] = 2;
        VHV.allOrderedLinks.push(rootURL + '3rdparty/jQuery/jquery-1.7.2.min.js');
        VHV.allOrderedLinks.push(rootURL + '3rdparty/jQuery/jquery.mobile-1.2.0/jquery.mobile-1.2.0.min.js');
        VHV.allOrderedLinks.push(rootURL + 'VHV.js');
        VHV.allLinks[rootURL + '3rdparty/jQuery/jquery.cookie.js'] = 2;
        VHV.allOrderedLinks.push(rootURL + '3rdparty/jQuery/jquery.cookie.js');
        VHV.allLinks[rootURL + '3rdparty/jQuery/jquery.json/jquery.json.min.js'] = 2;
        VHV.allOrderedLinks.push(rootURL + '3rdparty/jQuery/jquery.json/jquery.json.min.js');
        VHV.allLinks[rootURL + '3rdparty/jQuery/jquery.pagination/jquery.pagination.js'] = 2;
        VHV.allOrderedLinks.push(rootURL + '3rdparty/jQuery/jquery.pagination/jquery.pagination.js');
        VHV.allLinks[rootURL + 'Content/Listing.js'] = 2;
        VHV.allLinks[rootURL + 'publish/js/modules/' + ((VHV.language != 'vi') ? VHV.language + '_' : '') + 'Content.Listing.js'] = 2;
        VHV.allOrderedLinks.push(rootURL + 'Content/Listing.js');
        VHV.allOrderedLinks.push(rootURL + 'publish/js/modules/' + ((VHV.language != 'vi') ? VHV.language + '_' : '') + 'Content.Listing.js');
        VHV.allLinks[rootURL + 'Content/HTML.js'] = 2;
        VHV.allLinks[rootURL + 'publish/js/modules/' + ((VHV.language != 'vi') ? VHV.language + '_' : '') + 'Content.HTML.js'] = 2;
        VHV.allOrderedLinks.push(rootURL + 'Content/HTML.js');
        VHV.allOrderedLinks.push(rootURL + 'publish/js/modules/' + ((VHV.language != 'vi') ? VHV.language + '_' : '') + 'Content.HTML.js');
        setTimeout(function() {
            var loader = jQuery('<div id="loader"><img src="' + staticURL + 'App/images/loading.gif" alt="loading..." width="50" height="50"/></div>').css({
                position: "fixed",
                top: "1em",
                left: "1em",
                'z-index': 10000
            }).appendTo("body").hide()
              , loaderTimeout = false;
            $(document).ajaxStart(function() {
                if (loaderTimeout) {
                    clearTimeout(loaderTimeout);
                    loaderTimeout = false;
                }
                loader.show();
                loaderTimeout = setTimeout(function() {
                    loader.hide();
                }, 10000);
            }).ajaxStop(function() {
                if (loaderTimeout) {
                    clearTimeout(loaderTimeout);
                    loaderTimeout = false;
                }
                loader.hide();
            }).ajaxError(function(a, b, e) {
                if (loaderTimeout) {
                    clearTimeout(loaderTimeout);
                    loaderTimeout = false;
                }
                loader.hide();
            });
        }, 10);
        $('.hover-module-block').each(function() {
            var that = $(this)
              , moduleDiv = that.parents('.ModuleWrapper:first');
            moduleDiv.hover(function() {
                that.stop().fadeIn();
            }, function() {
                that.stop().fadeOut();
            });
        });
        var updateImageRatio = function() {
            var that = $(this)
              , ratio = that.attr('data-size-ratio')
              , src = that.attr('src');
            if (src && src.indexOf('images/lazyload_') == -1) {
                if (!ratio || typeof (ratio) != 'string' || ratio.indexOf(':') == -1)
                    ratio = '1:1';
                ratio = ratio.split(':');
                var tmpImg = new Image();
                tmpImg.lastWidth = that.data('lastElementWidth');
                tmpImg.that = that;
                tmpImg.ratio = ratio;
                tmpImg.onload = imageLoaded;
                tmpImg.src = that.attr('src');
            }
        }
          , imageLoaded = function() {
            var width = parseInt(this.that.attr('width'));
            if (!width)
                width = this.that.width();
            if ((width > 10) && (parseInt(this.ratio[0]) > 0) && (this.lastWidth != width)) {
                this.that.data('lastElementWidth', width);
                this.that.height(Math.round(Math.min((width * parseInt(this.ratio[1])) / parseInt(this.ratio[0]), 1200)));
            }
        };
        $(window).resize(function() {
            if (VHV.ratioResizeTimeout) {
                clearTimeout(VHV.ratioResizeTimeout);
            }
            VHV.ratioResizeTimeout = setTimeout(function() {
                VHV.ratioResizeTimeout = false;
                $('.relative-height').each(updateImageRatio);
            }, 300);
        });
        setTimeout(function() {
            $(window).resize();
        }, 3000);
        $(document).on('focus', '[data-x-suggest]', function() {
            VHV.initSuggest(this, true);
        });
        $(document).on('change', 'input,textarea,select', function() {
            var groupId = $(this).data('xGroup');
            if (groupId) {
                $('input:checkbox[data-x-group="' + groupId + '"]:not([value])').each(function() {
                    this.value = $(this).parents('[data-id]:first').data('id');
                });
                if ($(this).hasClass('x-check-all')) {
                    $('input[data-x-group="' + groupId + '"][value!=""],input.x-check-all[data-x-group="' + groupId + '"]').prop('checked', $(this).prop('checked'));
                } else {
                    $('input.x-check-all[data-x-group="' + groupId + '"]').prop('checked', $('input[data-x-group="' + groupId + '"]:not(.x-check-all):not(:checked)').length ? '' : 'checked');
                }
            }
            VHV.updateDisplay();
            if (this.name) {
                var that = this
                  , $m = $(this).parents('.ModuleWrapper:first')
                  , cascade = $m.find(((this.name.indexOf('[') == -1) ? '[data-x-cascade*="fields[' + this.name + ']"],' : '') + '[data-x-cascade*="' + this.name + '"]');
                if (cascade.length) {
                    var cascadeTos = [];
                    cascade.each(function() {
                        cascadeTos.push(this.name);
                    });
                    VHV.load('Content.Form', function() {
                        cascade.each(function() {
                            var that2 = this
                              , cascadeParams = $(this).data('xCascade').split(',')
                              , data = $(this).data('serviceData')
                              , lastTime = $(this).data('lastCascadeTime')
                              , time = (new Date()).getTime();
                            if (!lastTime || (lastTime + 500 < time)) {
                                if (data && data.service && (this.name != that.name)) {
                                    for (var i in cascadeParams) {
                                        var cascadeParam = $.trim(cascadeParams[i])
                                          , p = cascadeParam.indexOf(':')
                                          , name = ((p != -1) ? cascadeParam.substr(0, p) : cascadeParam)
                                          , code = ((p != -1) ? cascadeParam.substr(p + 1) : name.replace('fields[', '').replace(']', ''));
                                        if ((name != that.name) && ((cascadeTos.indexOf(name) != -1) || (cascadeTos.indexOf('fields[' + name + ']') != -1))) {
                                            return;
                                        }
                                        if (code) {
                                            data[code] = ((name == that.name) ? that.value : $m.find(((name.indexOf('[') == -1) ? '[name="fields[' + name + ']"],' : '') + '[name="' + name + '"]').val());
                                        }
                                    }
                                    $(this).data('lastCascadeTime', time);
                                    VHV.Content.Form._cascadeUpdateInput(this, data);
                                    setTimeout(function() {
                                        $(that2).change();
                                    }, 200);
                                }
                            }
                        });
                    });
                }
            }
            if ($(this).data('xService') && !$(this).data('xSuggest')) {
                if ($(this).data('xConfirm')) {
                    var that = this, confirmOptions;
                    VHV.confirm($(this).attr('title'), $(this).data('xConfirm'), function() {
                        VHV.doAction(that);
                    });
                } else {
                    VHV.doAction(this);
                }
                return false;
            }
        });
        $(document).on('click', '[data-x-service],[data-x-modal]', function() {
            if (this.tagName == 'SELECT' || (this.tagName == 'INPUT' && this.type != 'checkbox' && this.type != 'radio'))
                return;
            var xmodal = $(this).data('xModal');
            if (xmodal) {
                var modal = $(this).data('xModalObject')
                  , data = VHV.getActionParams(this)
                  , params = data
                  , moduleId = '';
                if (params.require) {
                    var msg = eval(params.require);
                    if (msg) {
                        VHV.alert(msg);
                        return;
                    }
                    delete params.require;
                }
                params.gridModuleParentId = moduleId = $(this).parents('.ModuleWrapper:first').attr('id').replace('module', '');
                params.layout = params.xModal;
                delete params.xModal;
                if (!modal) {
                    var title = $(this).data('title')
                      , modalFooter = '<div class="modal-footer"></div>';
                    if (!title)
                        title = $(this).attr('title');
                    $(this).data('xModalObject', modal = $('<div class="modal fade" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"><div class="modal-dialog' + (params.modalClass ? ' ' + params.modalClass : '') + '" role="document"><div class="modal-content"><div class="modal-header"><button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>' + (title ? '<h4 class="modal-title">' + (VHV.notag ? VHV.notag(title) : title) + '</h4>' : '') + '</div><div class="modal-body"></div>' + (params.modalFooter ? modalFooter : '') + '</div></div></div>'));
                    modal.find('.modal-body').loadModule('Content.Form', params);
                    modal.modal({
                        backdrop: $(this).data('backdrop')
                    });
                } else {
                    modal.find('.modal-body').loadModule('Content.Form', params);
                    modal.modal('toggle');
                }
                return false;
            } else if ($(this).data('xConfirm')) {
                var that = this;
                VHV.confirm($(this).attr('title'), $(this).data('xConfirm'), function() {
                    VHV.doAction(that);
                });
                return false;
            } else {
                VHV.doAction(this);
                return false;
            }
        });
        VHV.updateDisplay();
    },
    initSuggest: function(that, autoFocus) {
        if (!$(that).data('select2')) {
            var hidden, value = $(that).data('value') ? $(that).data('value') : that.value;
            if (that.name) {
                hidden = $('<input name="' + that.name + '" type="hidden">');
                if (value) {
                    hidden.val(value);
                    hidden.data('value', value);
                }
                $(that).before(hidden);
                that.name = '';
            } else {
                if (that.previousSibling && that.previousSibling.type == 'hidden') {
                    hidden = $(that.previousSibling);
                    value = $(hidden).data('value') ? $(hidden).data('value') : hidden.val();
                }
            }
            var service = $(that).attr('data-x-suggest')
              , params = VHV.getActionParams(that);
            if ($(that).attr('allowNewValue')) {
                params.createSearchChoice = function(term, data) {
                    if ($(data).filter(function() {
                        return this.text.localeCompare(term) === 0;
                    }).length === 0) {
                        return {
                            id: term,
                            text: term
                        };
                    }
                }
                ;
                params.selectOnClose = true;
                params.tags = true;
                params.allowClear = true;
            }
            if (value && typeof (value) == 'string' && (that.multiple || $(that).data('multiple')))
                value = value.split(',');
            if (that.tagName == 'INPUT') {
                var select = $('<select class="' + that.className + '"' + ((that.multiple || $(that).data('multiple')) ? ' multiple' : '') + '></select>');
                if (value) {
                    if (typeof (value) == 'object') {
                        var labels = that.value ? that.value : value;
                        if (typeof (labels) != 'object')
                            labels = labels.split(',');
                        for (var k in value) {
                            var option = $('<option></option>');
                            option.attr('value', value[k]).text(labels[k]);
                            select.append(option);
                        }
                        select.find('option').attr('selected', 'selected');
                    } else {
                        var option = $('<option selected="selected"></option>');
                        option.attr('value', value).text(that.value);
                        select.append(option);
                    }
                }
                $(that).replaceWith(select);
                that = select;
            }
            VHV.load('3rdparty/jQuery/select2-4.0.3/dist/css/select2.min.css');
            VHV.load('3rdparty/jQuery/select2-4.0.3/dist/js/select2.full.min.js', function() {
                $(that).select2($.extend({
                    templateResult: function(state) {
                        return $(state.html ? state.html : ('<span>' + (state.image ? '<img src="' + state.image + '" width="30" height="30" hspace="5"/>' : '') + (VHV.notag ? VHV.notag(state.text) : '') + '</span>'));
                    },
                    placeholder: $(that).attr('placeholder') ? $(that).attr('placeholder') : (params.placeholder ? params.placeholder : ''),
                    ajax: {
                        url: VHV.Model(service).url(params),
                        dataType: 'json',
                        quietMillis: 100,
                        data: function(params) {
                            params.pageNo = params.page || 1;
                            var extraParams = $(this).data('extraParams');
                            if (extraParams && (typeof (extraParams) == 'object')) {
                                params = $.extend(params, extraParams);
                            }
                            return params;
                        },
                        processResults: function(data) {
                            var tmpResults = [];
                            $.each(data, function(index, item) {
                                tmpResults.push({
                                    id: item.id,
                                    text: item.label ? item.label : item.title,
                                    html: (item.html ? item.html : ''),
                                    image: item.image ? ((((item.image.indexOf('http') == 0) || (item.image.indexOf('/') == 0) || (item.image.indexOf('data:image') == 0)) ? '' : ('/' + ((item.image.indexOf('upload/') == 0) ? 'publish/thumbnail/' + VHV.site + '/30x30xdefault/' : ''))) + (VHV.notag ? VHV.notag(item.image) : item.image)) : ''
                                });
                            });
                            return {
                                results: tmpResults,
                                pagination: {
                                    "more": tmpResults.length == 20
                                }
                            };
                        }
                    },
                    dropdownAutoWidth: true
                }, params)).change(function() {
                    if (hidden && hidden.length) {
                        var value = $(this).val();
                        if (typeof (value) == 'object') {
                            value = value.join(',');
                        }
                        hidden[0].value = value;
                        hidden.change();
                    }
                });
                if (autoFocus) {
                    setTimeout(function() {
                        $(that).select2('open');
                    }, 100);
                }
            });
        }
    },
    data: function(obj) {
        var data = $(obj).data()
          , newData = new Object();
        if (data) {
            for (var i in data) {
                i = i + '';
                if (i[0] == 'x' && i[1] == (i[1] + '').toUpperCase()) {} else if (i.length > 7 && ['filters', 'options'].indexOf(i.substr(0, 7)) != -1) {
                    var key = i.substr(0, 7);
                    if (!newData[key])
                        newData[key] = new Object();
                    newData[key][i[7].toLowerCase() + i.substr(8)] = data[i];
                } else {
                    newData[i] = data[i];
                }
            }
        }
        return newData;
    },
    getActionParams: function(that) {
        var thatData = $(that).data()
          , params = new Object();
        for (var i in thatData) {
            if (typeof (thatData[i]) != 'object') {
                var j = i;
                for (var k in {
                    'options': 1,
                    'filters': 1
                }) {
                    if ((i.indexOf(k) == 0) && (i != k)) {
                        j = i.substr(k.length);
                        j = k + '[' + j[0].toLowerCase() + j.substr(1) + ']';
                    }
                }
                params[j] = thatData[i];
            }
        }
        if (thatData.getFilters || (thatData.xService && (thatData.xService.indexOf('.export') != -1 || thatData.xExport))) {
            var m = $(that).parents('.ModuleWrapper:first');
            if (m.length) {
                var mid = m.attr('id').replace('module', '');
                m = VHV.App.modules[mid];
                if (m) {
                    if (m.filters && VHV.sizeof(m.filters)) {
                        var filters = $.extend({}, m.filters);
                        for (var i in {
                            groupId: 1,
                            accountId: 1
                        }) {
                            if (typeof (filters[i]) != "undefined") {
                                delete (filters[i]);
                            }
                        }
                        params.filters = $.extend(params.filters ? params.filters : {}, filters);
                    }
                    if (m.orderBy && typeof (m.orderBy) == 'string' && !params.orderBy) {
                        params.orderBy = m.orderBy;
                    }
                }
            }
        }
        if (that.value && that.name) {
            var value = $(that).val();
            if (typeof (value) == 'object') {
                value = value.join(',');
            }
            params[that.name] = value;
        }
        if (that.tagName == 'SELECT') {
            var currentOption = $('option[value="' + that.value + '"]', that);
            if (currentOption.length) {
                var optionData = $(currentOption).data();
                for (var i in optionData) {
                    if (typeof (optionData[i]) == 'object') {
                        delete optionData[i];
                    }
                }
                if (optionData) {
                    $.extend(params, optionData);
                }
            }
        }
        return params;
    },
    doAction: function(that, extra) {
        var action = $(that).data('xService'), params = VHV.getActionParams(that), moduleId = $(that).parents('.ModuleWrapper:first').attr('id'), module, isMulti = params.xMultiActions;
        if (extra) {
            params = $.extend(extra, params);
        }
        if (moduleId && moduleId.match(/^module(\d+)$/)) {
            moduleId = parseInt(RegExp.$1);
            module = VHV.App.modules[moduleId];
        }
        if (!module || !action)
            return;
        if (module.targetForm)
            module = module.targetForm;
        var reloadDelay = (module && module.reloadDelay) ? module.reloadDelay : ((module && module.parent && module.parent.reloadDelay) ? module.parent.reloadDelay : 2000);
        if (isMulti) {
            if (!params.ids) {
                params.ids = [];
                $('input[data-x-group="' + moduleId + '"]:checkbox:checked:not(.x-select-all)').each(function() {
                    params.ids.push(this.value);
                });
            }
            if (!params.ids.length) {
                VHV.alert(params.message ? params.message : '' + "Bạn chưa chọn" + '', {
                    type: "error"
                });
                return;
            }
            if (action.indexOf('.') != -1 && !action.match(/[^\w\.]/)) {
                if (typeof (params.ids) != 'string') {
                    params.ids = params.ids.join(',');
                }
                params.doMultiActions = 1;
                if (action.indexOf('.export') != -1 || $(that).data('xExport')) {
                    location = VHV.Model(action).url(params);
                } else {
                    VHV.Model(action)(params, function(response) {
                        if (response) {
                            response = JSON.parse(response);
                            var success = true
                              , totalSuccess = 0
                              , totalFail = 0
                              , messages = {}
                              , messageText = ''
                              , title = '';
                            if (response.items) {
                                for (var i in response.items) {
                                    var item = response.items[i];
                                    if (item.status != 'SUCCESS') {
                                        success = false;
                                        totalFail++;
                                    } else {
                                        totalSuccess++;
                                    }
                                    if (item.message) {
                                        if (!messages[item.message]) {
                                            messages[item.message] = [];
                                        }
                                        messages[item.message].push(item.title ? item.title : '');
                                    }
                                }
                            }
                            if (!totalSuccess && !totalFail && response.message) {
                                messageText = response.message;
                                success = (response.status == 'SUCCESS');
                                title = (success ? '' + "Thành công" + '' : '' + "Thất bại" + '');
                            } else {
                                messageText = '<div style="max-height:300px; overflow:auto;">';
                                title = totalSuccess + ' ' + "thành công" + ', ' + totalFail + ' ' + "thất bại" + '';
                                if (VHV.sizeof(messages)) {
                                    for (var i in messages) {
                                        messageText += i + ': ' + (messages[i][0] ? messages[i].join(', ') : messages[i].length) + '<br>';
                                    }
                                } else {
                                    messageText += title;
                                }
                                messageText += '</div>';
                            }
                            if (!response.notAlert) {
                                VHV.alert(messageText, {
                                    messageType: 'alert',
                                    title: title,
                                    type: success ? 'success' : 'error'
                                });
                            }
                            if (totalSuccess) {
                                setTimeout(function() {
                                    module.reload('current');
                                    if ($(that).data('xSuccess'))
                                        (function() {
                                            eval($(that).data('xSuccess'));
                                        }
                                        ).call(that);
                                }, reloadDelay);
                            }
                        }
                    });
                }
            } else if (!action.match(/[^\w]/)) {
                if (typeof (module[action]) == 'function') {
                    for (var i in params.ids) {
                        params.id = params.ids[i];
                        module[action](params, $(that));
                    }
                    if ($(that).data('xSuccess'))
                        (function() {
                            eval($(that).data('xSuccess'));
                        }
                        ).call(that);
                }
            } else {
                try {
                    eval(action);
                } catch (e) {}
            }
            return;
        }
        if (typeof (params.id) == 'undefined') {
            params.itemId = '';
            var item = $(that).parents('[data-id]:first');
            if (module.$().has(item)) {
                var itemData = item.data();
                if (itemData) {
                    for (var i in itemData) {
                        if (typeof (itemData[i]) != 'object') {
                            params[i] = itemData[i];
                        }
                    }
                }
            }
        } else if (!params.itemId) {
            params.itemId = params.id;
        }
        if (params.xPopup) {
            params.xPopupTitle = params.title;
            if (!params.xPopupTitle) {
                params.xPopupTitle = $(that).attr('title');
                if (!params.xPopupTitle && $(that).is('a')) {
                    params.xPopupTitle = $.trim($(that).text());
                }
            }
        }
        if (action.indexOf('.') != -1 && !action.match(/[^\w\.]/)) {
            if (action.indexOf('.export') != -1 || $(that).data('xExport')) {
                location = VHV.Model(action).url(params);
            } else {
                VHV.Model(action)(params, function(response) {
                    if (response) {
                        response = JSON.parse(response);
                        var alertOptions = response.alert ? response.alert : {};
                        if (response.status == 'SUCCESS') {
                            alertOptions.type = 'success';
                            if (!response.notAlert) {
                                VHV.alert(response.message, alertOptions);
                            }
                            setTimeout(function() {
                                if ((params['xServiceReload'] !== '0') && (params['xServiceReload'] !== 0)) {
                                    module.reload('current');
                                }
                                if (params['xSuccess'])
                                    (function() {
                                        eval(params['xSuccess']);
                                    }
                                    ).call(that);
                            }, ((params['xServiceReload'] !== '0') && (params['xServiceReload'] !== 0)) ? reloadDelay : 100);
                        } else {
                            alertOptions.type = 'error';
                            VHV.alert(response.message, alertOptions);
                        }
                    }
                });
            }
        } else if (!action.match(/[^\w]/)) {
            if (typeof (module[action]) == 'function') {
                module[action](params, $(that));
                if ($(that).data('xSuccess'))
                    (function() {
                        eval($(that).data('xSuccess'));
                    }
                    ).call(that);
            }
        } else {
            try {
                eval(action);
            } catch (e) {}
        }
    },
    isInherited: function(childName, parentName) {
        var childInstance, parentInstance;
        try {
            eval('childInstance = VHV.' + childName + ';');
        } catch (e) {
            return false;
        }
        try {
            eval('parentInstance = VHV.' + parentName + ';');
        } catch (e) {
            return false;
        }
        if (childInstance && parentInstance) {
            while (childInstance.parentClass) {
                if (childInstance.parentClass === parentInstance) {
                    return true;
                }
                childInstance = childInstance.parentClass;
            }
            return false;
        }
    }
});
window.elem = VHV.elem;
window.$L = window.Lang = VHV.Lang;
window.$VHV = function(name, context) {
    var modules = VHV.App.modules
      , parentId = -1
      , path = name.split(' ');
    if (path.length > 1) {
        var obj = $VHV(path.splice(0, 1), context);
        if (obj)
            return $VHV(path.join(' '), obj);
        return null;
    }
    if (typeof (context) == 'object') {
        if (context.length && context.find) {
            modules = [];
            context.find('.ModuleWrapper').each(function() {
                if (this.id) {
                    var id = this.id.replace('module', '');
                    if (VHV.App.modules[id]) {
                        modules.push(VHV.App.modules[id]);
                    }
                }
            });
        } else {
            parentId = context.id;
        }
    } else if (typeof (context) == 'number') {
        parentId = context;
    }
    for (var i in modules) {
        if (modules[i] && ((modules[i].module == name) || VHV.isInherited(modules[i].module, name))) {
            if (parentId == -1 || VHV.App.isChild(modules[i].id, parentId)) {
                if (typeof (context) == 'function') {
                    if (context.call(modules[i])) {
                        return modules[i];
                    }
                } else {
                    return modules[i];
                }
            }
        }
    }
    return null;
}
;
$.extend(VHV.Module.prototype, {
    layout: '',
    children: [],
    me: function() {
        return 'VHV.App.modules[' + this.id + ']';
    },
    addChildren: function(m) {
        m.parent = this;
        m.moduleParentId = this.id;
        for (var i in this.children) {
            if ((this.children[i].id == m.id) || (this.children[i].index == m.id)) {
                return;
            }
        }
        this.children.push(m);
    },
    applyFunction: function(func) {
        var oldModule = VHV.App.currentModule;
        module = VHV.App.currentModule = this;
        if (typeof (func) == 'function') {
            var returnValue = func.call(this);
        } else {
            var returnValue = this[func]();
        }
        module = VHV.App.currentModule = oldModule;
        return returnValue;
    },
    object: function() {
        return 'VHV.App.modules[' + this.id + ']';
    },
    $id: function(id, index) {
        return $('#' + id + ((typeof (index) != 'undefined') ? '-' + index : '') + '-' + this.id);
    },
    each: function(f) {
        for (var i in VHV.App.modules) {
            var module = VHV.App.modules[i];
            if (module && module.parent && module.parent.id == this.id) {
                if (f.call(module) === false) {
                    return;
                }
            }
        }
    },
    params: function() {
        var options = {};
        for (var i in this) {
            if (i != 'pagingSelector' && i != 'beginTitle' && i != 'class' && i != 'endText' && i != 'endTitle' && i != 'hasController' && i != 'hasPagination' && i != 'index' && i != 'linkTo' && i != 'nextText' && i != 'numDisplayEntries' && i != 'path' && i != 'prevText' && i != 'startText' && i != 'submitFormId' && i != 'totalItems' && i != 'url_mode' && i != 'module' && i != 'id' && (typeof (this[i]) == 'number' || typeof (this[i]) == 'string')) {
                options[i] = this[i];
            } else if ((i == 'filters' || i == 'options') && (typeof (this[i]) == 'object')) {
                for (var j in this[i]) {
                    if ((typeof (this[i][j]) != 'function') && this[i][j]) {
                        if (typeof (this[i][j]) == 'object') {
                            for (var k in this[i][j]) {
                                if ((typeof (this[i][j][k]) != 'function') && (typeof (this[i][j][k]) != 'object') && this[i][j][k]) {
                                    options[i + '[' + j + ']' + '[' + k + ']'] = this[i][j][k];
                                }
                            }
                        } else if (i != 'options' || ['sortOrder', 'itemsPerPage', 'pageNo', 'orderBy', 'type', 'childType'].indexOf(j) == -1) {
                            options[i + '[' + j + ']'] = this[i][j];
                        }
                    }
                }
            }
        }
        return options;
    },
    reload: function(options, success) {
        if (options != 'current') {
            this.pageNo = 1;
            if (options) {
                var id = this.id;
                if (options && options.id) {
                    this.itemId = options.id;
                }
                $.extend(this, options);
                this.id = id;
            }
        }
        var module = $('#module' + this.id)
          , that = this;
        if (module.length > 0) {
            var params = this.params()
              , submitURL = this.submitURL({
                cmd: 'redraw'
            });
            if (typeof (params.__proto__) != 'undefined') {
                delete params.__proto__;
            }
            if (submitURL.accountId) {
                if (!params.accountId) {
                    params.accountId = submitURL.accountId;
                }
                delete submitURL.accountId;
            }
            params._t = new Date().getTime();
            $.post(submitURL, params, function(response) {
                module.html(response);
                $(window).resize();
                $(document).trigger('VHV.Module.show', {
                    module: that,
                    options: options
                });
                VHV.updateDisplay();
                if (success && (typeof (success) == 'function')) {
                    success.call(that);
                }
            });
        }
    },
    loadModule: function(name, options, success) {
        var that = this;
        if (this[name] && this[name].$().length) {
            this[name].$().show();
            $('#form' + this[name].id + ' input[name^=fields],#form' + this[name].id + ' select[name^=fields],#form' + this[name].id + ' textarea[name^=fields]').each(function() {
                var fieldname = this.name.replace('fields[', '').replace(']', '');
                if (['moduleId', 'id', 'itemId', 'module', 'moduleName', 'isReady', 'parent', 'children', 'clearForm', 'phpModuleName', 'submitService', 'type', 'name'].indexOf(fieldname) == -1 && that[name][fieldname]) {
                    delete (that[name][fieldname]);
                }
            });
            this[name].$().html('<div style="height:200px;"><img src="/App/images/loader.gif"/></div>');
            this[name].reload(options, function() {
                if (options.xPopup) {
                    that[name].$('form input:submit').hide();
                }
            });
            var modal = this[name].$().parents('.modal:first');
            if (modal.length) {
                modal.modal('show');
                if (options.xPopupTitle) {
                    modal.find('.modal-title:first').html('<i class="fa fa-cog"></i>&nbsp;' + options.xPopupTitle ? VHV.notag(options.xPopupTitle) : '');
                }
            }
            if (success && (typeof (success) == 'function')) {
                success.call(this);
            }
        } else {
            var obj = $('#' + name + this.id);
            if (!obj.length) {
                obj = $('<div id="' + name + this.id + '"></div>');
                this.$().append(obj);
            }
            if (options.xPopup) {
                var xPopup = {};
                if ((typeof (options.xPopup) == 'string') && options.xPopup.indexOf(':')) {
                    try {
                        eval("xPopup = {" + options.xPopup + '};');
                    } catch (e) {}
                }
                xPopup.title = (options.xPopupTitle ? options.xPopupTitle : '' + "Hộp thoại" + '');
                xPopup.success = function() {
                    that.addChildren(this);
                    that[name] = this;
                    if (success && (typeof (success) == 'function')) {
                        success.call(that);
                    }
                }
                ;
                VHV.dialog(options.module ? options.module : 'Content.Listing', options, xPopup);
            } else {
                obj.loadModule(options.module ? options.module : 'Content.Listing', options, function() {
                    that.addChildren(this);
                    that[name] = this;
                    if (success && (typeof (success) == 'function')) {
                        success.call(that);
                    }
                    $(document).trigger('VHV.Module.show', {
                        module: this,
                        options: options
                    });
                    VHV.updateDisplay();
                });
            }
        }
    },
    initEvents: function() {},
    $: function(selector) {
        return $('#module' + this.id + (selector ? ' ' + selector : ''));
    },
    html: function(code) {
        return this.$().html(code);
    },
    append: function(code) {
        return this.$().append(code);
    },
    buildURL: function(options) {
        if (!options) {
            options = {};
        }
        options.url_mode = VHV.urlMode;
        var url = (VHV.domainRoot ? VHV.domainRoot : VHV.rootURL) + '?' + ((options && options['module']) ? '' : 'module=' + (this.phpModuleName ? this.phpModuleName : this.module)) + '&moduleId=' + this.id;
        if (options) {
            for (var i in options) {
                if (['module', 'phpModuleName'].indexOf(i) == -1) {
                    url += '&' + i + '=' + encodeURIComponent(options[i]);
                }
            }
        }
        return url;
    },
    submitURL: function(options) {
        options = VHV.Model.engine.initOptions(options, VHV.app ? this.$().parents('.swap-screen:first') : false, true);
        return this.buildURL(options) + '&submitFormId=' + this.id + '&moduleId=' + this.id + '&page=' + this.page + '&site=' + VHV.site;
    },
    formSignature: function() {
        return '<input type="hidden" value="' + this.id + '" name="submitFormId">';
    },
    jm: function() {
        return 'VHV.App.modules[' + this.id + ']';
    },
    closeTab: function(obj) {
        currentWorkspace.closeTab(obj);
    }
}, ReadyObject, {
    init: function(success) {
        this.isReady = true;
        this.initEvents();
        if (success && typeof (success) == 'function') {
            success.call(this);
        }
    },
    ready: function(callback) {
        VHV.ExecQueue.add(function() {
            this.applyFunction(callback);
        }, function() {
            return this.isReady && this.$().length;
        }, this, {
            caller: 'ready'
        });
    }
});
VHV.Model = function(method) {
    return VHV.Model.register(method);
}
$.extend(VHV.Model, {
    engine: {
        register: function(serviceModule, methods) {
            var model = {};
            for (var i in methods) {
                model[i] = this.registerMethod(serviceModule, i);
                model[i].url = this.registerURLMethod(serviceModule, i);
            }
            return model;
        },
        registerMethod: function(serviceModule, method) {
            var engine = this;
            return function(options, success) {
                return engine.call(serviceModule, method, options, success);
            }
            ;
            ;
        },
        registerURLMethod: function(serviceModule, method) {
            var engine = this;
            return function(options, noSecurityToken) {
                return engine.url(serviceModule, method, options, noSecurityToken);
            }
            ;
            ;
        },
        initOptions: function(options, swapScreen, noSecurityToken) {
            if (!options) {
                options = new Object();
            }
            if (!options.site) {
                options.site = VHV.App.site;
            }
            if (VHV.app) {
                var pageUrl = (swapScreen ? swapScreen : $('.swap-screen:visible')).data('url');
                if (pageUrl && typeof (options.accountId) == 'undefined' && (/\&accountId=(\w+)/.test(pageUrl) || /^\/u\/(\w+)/.test(pageUrl))) {
                    options.accountId = RegExp.$1;
                }
                if (pageUrl && typeof (options.groupId) == 'undefined' && (/\&groupId=(\w+)/.test(pageUrl) || /^\/g\/(\w+)/.test(pageUrl))) {
                    options.groupId = RegExp.$1;
                }
            }
            if (VHV.groupId && typeof (options.groupId) == 'undefined') {
                options.groupId = VHV.groupId;
            } else if (VHV.accountId && typeof (options.accountId) == 'undefined') {
                options.accountId = VHV.accountId;
            }
            if (!noSecurityToken && !options.securityToken && VHV.securityToken) {
                options.securityToken = VHV.securityToken;
            }
            return options;
        },
        call: function(serviceModule, serviceMethod, options, success) {
            options = VHV.Model.engine.initOptions(options);
            if (serviceModule == 'Member.Device' && serviceMethod == 'log') {
                var saveLoginToken = localStorage.getItem('saveLoginToken');
                if (saveLoginToken) {
                    options.saveLoginToken = saveLoginToken;
                }
            }
            var data;
            $.ajax({
                url: '/api/' + serviceModule.replace(/\./g, '/') + '/' + serviceMethod,
                data: options,
                async: options.async,
                type: 'POST',
                success: function(response) {
                    if (serviceModule == 'Member.Device' && serviceMethod == 'log') {
                        var res = JSON.parse(response);
                        if (res.saveLoginToken) {
                            localStorage.setItem('saveLoginToken', res.saveLoginToken);
                        }
                        if (res.autoLoggedIn) {
                            var href = VHV.request('href');
                            if (href) {
                                location = href;
                            } else {
                                location.reload();
                            }
                        }
                    }
                    if (success) {
                        success.call(this, response);
                    }
                    data = response;
                },
                error: function() {
                    success.call(this, 'ERROR');
                }
            });
            return data;
        },
        url: function(serviceModule, serviceMethod, options, noSecurityToken) {
            options = VHV.Model.engine.initOptions(options, false, noSecurityToken);
            return '/api/' + serviceModule.replace(/\./g, '/') + '/' + serviceMethod + '?' + $.param(options);
        }
    },
    register: function(serviceModule, methods, engine) {
        if (!engine)
            engine = VHV.Model.engine;
        var names = serviceModule.split('.')
          , methodName = '';
        names[names.length - 1] = names[names.length - 1];
        if (!methods) {
            methods = {};
            methodName = names.pop();
            methods[methodName] = [];
        }
        var obj = VHV.Model;
        for (var i = 0; i < names.length; i++) {
            if (!obj[names[i]]) {
                obj[names[i]] = {};
            }
            obj = obj[names[i]];
        }
        for (var i in methods) {
            if (obj[methods[i]]) {
                delete methods[i];
            }
        }
        var model = VHV.Model.engine.register(names.join('.'), methods);
        $.extend(obj, model);
        if (methodName) {
            return obj[methodName];
        }
        return obj;
    },
    call: function(serviceModule, serviceMethod, options, success) {
        return VHV.Model.engine.call(serviceModule, serviceMethod, options, success);
    }
});
module = undefined;
$.extend(VHV, {
    elems: {},
    serializeForm: function(form, options) {
        var defaults = {
            'returnType': '',
            'returnName': 'fields',
            'dateReturn': 'date'
        };
        if (typeof (options) != 'object') {
            options = defaults;
        } else {
            options = $.extend(defaults, options);
        }
        var values = $(form).serializeArray()
          , fields = {};
        var formId = $(form).attr('id');
        for (var i = 0; i < values.length; i++) {
            if (['moduleId', 'securityToken', 'submitFormId'].indexOf(values[i].name) == -1) {
                var name = 'fields.' + values[i].name;
                if (options.dateReturn == 'number') {
                    var dp = $('#' + formId + ' input[name=' + values[i].name + '].hasDatepicker');
                    if (dp.length != 0) {
                        try {
                            var value = '';
                            var date = dp.datepicker('getDate');
                            if (date) {
                                value = date.getUTCTime() / 1000;
                            }
                            values[i].value = value;
                        } catch (ex) {
                            values[i].value = '';
                        }
                    }
                }
                name = name.replace(/\[([\w\-]+)\]/g, '[\'$1\']').replace(/\.([\w\-]+)/g, '[\'$1\']');
                var path = name.split('[');
                for (var j = 1; j < path.length - 1; j++) {
                    var subName = path.slice(0, j + 1).join('['), value;
                    try {
                        eval('value = ' + subName + ';');
                    } catch (e) {}
                    if (!value) {
                        eval(subName + ' = {};');
                    }
                }
                eval(name + '=$.trim(values[i].value);');
            }
        }
        if (options['returnType'] == 'submitArray') {
            var params = {};
            for (var i in fields) {
                params[options.returnName + '[' + i + ']'] = fields[i];
            }
            return params;
        } else {
            return fields;
        }
    },
    elem: function(id) {
        var elem = VHV.elems[id];
        if (!elem) {
            return (VHV.elems[id] = document.getElementById(id));
        }
        return elem;
    },
    prompt: function(title, message, callback, options) {
        if ($.fn.button) {
            VHV.load('3rdparty/jQuery/lobibox/css/lobibox.min.css');
            VHV.load('3rdparty/jQuery/lobibox/js/lobibox.min.js', function() {
                VHV.load('3rdparty/jQuery/lobibox/js/messageboxes.min.js', function() {
                    if (!options)
                        options = {};
                    options.title = title ? title : '' + "Xác nhận" + '';
                    options.callback = function(obj, button) {
                        if (button == 'ok') {
                            callback.call(obj, $(obj.$input).val());
                        }
                    }
                    if (!options.showClass) {
                        options.showClass = 'fadeInDown';
                    }
                    if (!options.hideClass) {
                        options.hideClass = 'fadeUpDown';
                    }
                    if (typeof (options.sound) == 'undefined') {
                        options.sound = false;
                    }
                    Lobibox.prompt(message ? message : '', options);
                    setTimeout(function() {
                        $(window).resize();
                    }, 200);
                });
            });
        } else {
            var w = window
              , value = w.prompt(message ? message : title);
            if (value) {
                callback.call(this, value);
            }
        }
    },
    confirm: function(title, message, callback, options) {
        if (navigator.notification && navigator.notification.confirm) {
            navigator.notification.confirm(message, function(button) {
                if (button == 1) {
                    callback.call(this, button);
                }
            }, title, (VHV.language == 'vi') ? 'Đồng ý,Hủy bỏ' : "OK,Hủy bỏ");
            return;
        }
        if ($.fn.button) {
            VHV.load('3rdparty/jQuery/lobibox/css/lobibox.min.css');
            VHV.load('3rdparty/jQuery/lobibox/js/lobibox.min.js', function() {
                VHV.load('3rdparty/jQuery/lobibox/js/messageboxes.min.js', function() {
                    if (VHV.language != 'vi') {
                        Lobibox.base.OPTIONS.buttons.ok.text = "OK";
                        Lobibox.base.OPTIONS.buttons.cancel.text = "Hủy bỏ";
                        Lobibox.base.OPTIONS.buttons.yes.text = "Có";
                        Lobibox.base.OPTIONS.buttons.no.text = "không";
                    }
                    if (typeof (callback) == 'object') {
                        options = callback;
                    }
                    if (!options) {
                        options = {};
                    }
                    options.msg = message ? message : '' + "Bạn có chắc chắn?" + '';
                    options.title = title ? title : '' + "Xác nhận" + '';
                    if (!options.callback) {
                        options.callback = function(obj, answer) {
                            if (answer == 'yes') {
                                callback.call(this, obj);
                            } else if (options.onCancel) {
                                options.onCancel.call(this, obj);
                            }
                        }
                        ;
                    }
                    if (!options.showClass) {
                        options.showClass = 'fadeInDown';
                    }
                    if (!options.hideClass) {
                        options.hideClass = 'fadeUpDown';
                    }
                    if (typeof (options.sound) == 'undefined') {
                        options.sound = false;
                    }
                    Lobibox.confirm(options);
                });
            });
        } else {
            var f = confirm;
            if (f.call(window, message ? message : title)) {
                callback.call(this);
            }
        }
    },
    alert: function(message, options) {
        if (window.plugins && window.plugins.toast) {
            var opts = {
                message: (message ? message : (options.content ? options.content : options.title)).replace(/<br>/g, "\n"),
                duration: options.delay ? options.delay : "short",
                position: options.position ? options.position : "top",
                styling: {
                    opacity: 0.8,
                    backgroundColor: '#333333',
                    textColor: '#FFFFFF',
                    textSize: 13,
                    cornerRadius: 20,
                    horizontalPadding: 20,
                    verticalPadding: 16
                }
            };
            if (options.type) {
                switch (options.type) {
                case 'success':
                    opts.styling.backgroundColor = '#68a581';
                    break;
                case 'warning':
                    opts.styling.backgroundColor = '#ffc439';
                    break;
                case 'error':
                    opts.styling.backgroundColor = '#e13a36';
                    break;
                default:
                    break;
                }
            }
            window.plugins.toast.showWithOptions(opts);
            return;
        }
        if (navigator.notification && window.Notification) {
            new Notification((options && options.title) ? options.title : 'Notification',{
                body: message ? message : (options.content ? options.content : options.title)
            });
            return;
        }
        if ($.fn.button) {
            VHV.load('3rdparty/jQuery/lobibox/css/lobibox.min.css');
            VHV.load('3rdparty/jQuery/lobibox/js/lobibox.min.js', function() {
                VHV.load('3rdparty/jQuery/lobibox/js/' + ((options && options.messageType && ((options.messageType == 'prompt') || (options.messageType == 'confirm') || (options.messageType == 'alert'))) ? 'messageboxes' : 'notifications') + '.min.js', function() {
                    if (!options)
                        options = {
                            closeOnClick: true,
                            closable: true,
                        };
                    if (!options.title) {
                        switch (options.type) {
                        case 'success':
                            options.title = '' + "Thành công" + '';
                            break;
                        case 'warning':
                            options.title = '' + "Cảnh báo" + '';
                            break;
                        case 'error':
                            options.title = '' + "Có lỗi" + '';
                            break;
                        default:
                            options.title = '' + "Thông báo" + '';
                            break;
                        }
                    }
                    if (!options.msg) {
                        options.msg = message ? message : (options.content ? options.content : options.title);
                    }
                    if (!options.showClass) {
                        options.showClass = 'fadeInDown';
                    }
                    if (!options.hideClass) {
                        options.hideClass = 'fadeUpDown';
                    }
                    if (!options.delay) {
                        if (!options.type || (options.type == 'success')) {
                            options.delay = 1500;
                        }
                    }
                    if (!options.position) {
                        options.position = 'top right';
                    }
                    if (typeof (options.sound) == 'undefined') {
                        options.sound = false;
                    }
                    Lobibox[(options && options.messageType) ? options.messageType : 'notify'](options.type ? options.type : 'info', options);
                });
            });
        } else {
            VHV.load('3rdparty/jQuery/jGrowl/jquery.jgrowl.css');
            VHV.load('3rdparty/jQuery/jGrowl/jquery.jgrowl_minimized.js', function() {
                if (!options)
                    options = {};
                if (VHV.language == 'vi') {
                    options.closerTemplate = '<div>[ ' + "Đóng lại" + ' ]</div>';
                }
                $.jGrowl(message, options);
            });
        }
    },
    dialog: function(moduleName, data, options, onClose, onOpen) {
        var _default = {
            title: '',
            onClose: '',
            onOpen: '',
            height: 200,
            width: 960,
            zIndex: 2000
        };
        if (moduleName.indexOf('<') != -1) {
            options = data ? data : {};
        }
        if (typeof (options) == 'function') {
            options = {
                success: options
            }
        }
        if (typeof (options) != 'undefined') {
            options = $.extend(_default, options);
        } else {
            options = _default;
        }
        if (typeof (onClose) == 'function') {
            options.onClose = onClose;
        }
        if (typeof (onOpen) == 'function') {
            options.onOpen = onOpen;
        }
        var div;
        var inc = 0;
        while (VHV.App.modules[parseInt(VHV.App.maxModuleId) + 10 + inc]) {
            inc++;
        }
        var moduleId = parseInt(VHV.App.maxModuleId) + 10 + inc
          , bodyDiv = null;
        if (options.isPopup) {
            div = $('<div><a id="animatedModalButton' + moduleId + '" style="display:none" href="#animatedModal' + moduleId + '"></a><div id="animatedModal' + moduleId + '"><div style="padding:5px;clear:both;background-color:#39BEB9; height:62px;"><div style="float:left;font-size: 18px;line-height: 50px;color: white;">' + (options.title ? VHV.notag(options.title) : '') + '</div><div class="close-animatedModal close-animatedModal' + moduleId + '" style="float:right"><img class="closebt" src="/3rdparty/jQuery/animatedModal/closebt.svg" alt="' + "Đóng lại" + '"></div></div><div class="animatedModal-content" style="background-color:white; clear:both; padding: 5px;"></div></div></div>');
            $('body').append(div);
            VHV.load('3rdparty/jQuery/animatedModal/animate.min.css');
            VHV.load('3rdparty/jQuery/animatedModal/animatedModal.min.js', function() {
                $('div.modal').css('visibility', 'hidden');
                $('#animatedModalButton' + moduleId).animatedModal({
                    modalTarget: 'animatedModal' + moduleId,
                    color: '#FFF',
                    animatedIn: 'slideInUp',
                    animatedOut: 'slideOutDown',
                    afterClose: function() {
                        $('#animatedModalButton' + moduleId).parent().remove();
                        if (typeof (options.onClose) == 'function') {
                            options.onClose.call(div);
                        }
                        if (moduleId) {
                            VHV.App.removeModule(moduleId);
                        }
                    },
                    beforeClose: function() {
                        $('div.modal').css('visibility', 'inherit');
                    }
                });
                $('#animatedModalButton' + moduleId).click();
                div = $('#animatedModal' + moduleId + ' .animatedModal-content');
                if (moduleName.indexOf('<') != -1) {
                    div.html(moduleName);
                } else {
                    var mId = div.loadModule(moduleName, data, function() {
                        if (!options.title) {
                            $('.ui-dialog-title', div.parent().parent()).html($('.frontEndForm h2:first').html());
                            $('.frontEndForm h2:first').remove();
                        }
                        if (options.mId) {
                            options.success.call(VHV.App.modules[mId]);
                        }
                        var submitButton = $('#animatedModal' + moduleId + ' input[type=submit]');
                        if (submitButton.length) {
                            $('#animatedModal' + moduleId + ' div.close-animatedModal').after('<div class="save-animatedModal save-animatedModal' + moduleId + '" style="float:right"><img class="savebt" src="/3rdparty/jQuery/animatedModal/savebt.svg" alt="Lưu lại" width="52" height="52" style="margin-right:5px;" onclick="$(\'#animatedModal' + moduleId + ' input[type=submit]\').click();"></div>');
                        }
                    });
                }
                if (typeof (options.onOpen) == 'function') {
                    setTimeout(function() {
                        options.onOpen.call(div);
                    }, 1);
                }
            });
        } else if ($.fn.modal) {
            div = $('<div class="modal fade" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true"><div class="modal-dialog modal-lg" style="width:' + (options.width ? options.width + 'px' : '900px') + '; height: ' + (options.height ? options.height + 'px' : '400px') + '; z-index: ' + (options.zIndex ? options.zIndex : '2700') + '"><div class="modal-content"><div class="modal-header"><button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button><h4 class="modal-title"><i class="fa fa-cog"></i>&nbsp;' + (options.title ? VHV.notag(options.title) : '' + "Hộp thoại" + '') + '</h4></div><div class="modal-body"></div><div class="modal-footer"><button type="button" class="btn btn-default" data-dismiss="modal">' + "Đóng lại" + '</button></div></div>');
            $('body').append(div);
            bodyDiv = div.find('.modal-body');
            if (moduleName.indexOf('<') != -1) {
                bodyDiv.html(moduleName);
                div.modal(options);
                if (typeof (options.onOpen) == 'function') {
                    setTimeout(function() {
                        options.onOpen.call(div);
                    }, 1);
                }
            } else {
                var mId = bodyDiv.loadModule(moduleName, data, function() {
                    if (!options.title) {
                        $('.modal-title', div).html('<i class="fa fa-cog"></i>&nbsp;' + $('.frontEndForm h2:first, h2.formSummaryTitle:first').html());
                    }
                    $('.frontEndForm form > h2:first, h2.formSummaryTitle:first', bodyDiv).remove();
                    if ($('input:submit', div).length > 0) {
                        $('input:submit', div).hide();
                        $('.modal-footer', div).append('<button type="button" class="btn btn-success" onclick="VHV.App.modules[' + mId + '].submit();">' + ($('input:submit:first', div).val() ? $('input:submit:first', div).val() : 'Lưu lại') + '</button>');
                    }
                    if (mId && VHV.App.modules[mId]) {
                        VHV.App.modules[mId].dialog = div;
                    }
                    div.modal(options);
                    if (options.success) {
                        options.success.call(VHV.App.modules[mId]);
                    }
                });
            }
        } else {
            div = $('<div></div>');
            $('body').append(div);
            VHV.load('3rdparty/jQuery/jqueryui/themes/smoothness/jquery-ui.css');
            VHV.load('3rdparty/jQuery/jqueryui/jquery-ui.min.js', function() {
                div.dialog(options);
                if (moduleName.indexOf('<') != -1) {
                    div.html(moduleName);
                    options = data;
                } else {
                    moduleId = div.loadModule(moduleName, data, function() {
                        if (!options.title) {
                            $('.ui-dialog-title', div.parent().parent()).html($('.frontEndForm h2:first').html());
                            $('.frontEndForm h2:first').remove();
                        }
                        if (moduleId && VHV.App.modules[moduleId]) {
                            VHV.App.modules[moduleId].dialog = div;
                        }
                        if (options.success) {
                            options.success.call(VHV.App.modules[moduleId]);
                        }
                    });
                }
                if (typeof (options.onOpen) == 'function') {
                    setTimeout(function() {
                        options.onOpen.call(div);
                    }, 1);
                }
                div.bind('dialogclose', function() {
                    if (typeof (options.onClose) == 'function') {
                        options.onClose.call(div);
                    }
                    if (moduleId) {
                        VHV.App.removeModule(moduleId);
                    }
                });
            });
        }
        if (typeof (onCLose) == 'object') {
            if (typeof (onClose.onOpen) == 'function') {
                onClose.onOpen.call(this);
            }
        }
        return div;
    },
    popup: function(moduleName, data, options, onClose, onOpen) {
        if (typeof (options) == 'function') {
            options = {
                success: options
            }
        }
        if (!options) {
            options = {};
        }
        options.isPopup = 1;
        return VHV.dialog(moduleName, data, options, onClose, onOpen);
    },
    cookie: function(name, value, expires) {
        if ($.cookie) {
            if (typeof (value) == 'undefined') {
                return $.cookie(name);
            } else {
                var parts = VHV.domain.split('.');
                $.cookie(name, value, {
                    path: '/'
                });
            }
        }
    },
    url: function(item) {
        if (item && item.rewriteURL) {
            return item.rewriteURL;
        }
        return item ? '/?id=' + item['id'] : '/';
    },
    image: function(url, size, type) {
        if ((url.indexOf('http://') == -1) && (url.indexOf('https://') == -1) && (url.indexOf('data:image') != 0)) {
            if (size) {
                if (!type)
                    type = 'default';
                return VHV.staticURL + 'publish/thumbnail/' + VHV.site + '/' + size + 'x' + type + ('/' + url).replace('//', '/');
            }
            return ((url[0] != '/') ? VHV.staticURL : '') + url.replace('//', '/');
        }
        return url;
    },
    addToCart: function(params, redirect, moduleId) {
        VHV.load('POS.Cart', function() {
            VHV.POS.Cart.add(params, redirect, moduleId);
        });
    },
    numberFormat: function(number, decimals, dec_point, thousands_sep) {
        decimals = decimals ? decimals : 2;
        thousands_sep = thousands_sep ? thousands_sep : '.';
        dec_point = dec_point ? dec_point : ',';
        if (number && number != 'ATC' && number != 'ATO') {
            var abs = Math.abs(number);
            if (!(abs >= 0))
                return '0';
            var round = Math.floor(abs)
              , frac = Math.abs(Math.round(abs * 100) - round * 100) / 100;
            if (frac) {
                frac = frac.toString().substr(1, 3);
                if (frac[2] == '0') {
                    frac = frac.substr(0, 2);
                }
            }
            var st = ''
              , lastRound = -1;
            do {
                if (lastRound != -1) {
                    if (lastRound < 10)
                        st = '00' + st;
                    else if (parseInt(lastRound) < 100)
                        st = '0' + st.toString();
                }
                lastRound = round % 1000;
                st = lastRound + (st ? thousands_sep + st : frac);
                round = Math.floor(round / 1000);
            } while (round > 0);
            if (number < 0)
                return '-' + st;
            return st;
        }
        if (number == 0) {
            return '0';
        }
        if (typeof (number) == 'undefined') {
            return '0';
        }
        return number + '';
    },
    textToSpeech: function(text, audio) {
        if (!audio) {
            audio = $('#hiddenAudio');
            if (!audio.length) {
                audio = $('<div style="height:0;overflow:hidden;"><audio id="hiddenAudio"></audio></div>');
                audio.appendTo(document.body);
                audio = audio.find('audio');
            }
        }
        audio = $(audio)[0];
        text = unescape(text);
        var i = 0
          , f = function() {
            if (i < text.length) {
                var p = text.indexOf(',', i + 50);
                for (var j in {
                    '.': 1,
                    ':': 1,
                    '(': 1,
                    ')': 1,
                    '"': 1,
                    ' ': 1
                }) {
                    if ((p > i + 100) || (p == -1))
                        p = text.indexOf(j, i + 50);
                    else
                        break;
                }
                if (p == -1) {
                    p = Math.min(i + 100, text.length);
                }
                if (VHV.language == 'lo') {
                    audio.src = 'https://support.lsdsoftware.com/read-aloud/speak/lo/Whisper?q=' + encodeURIComponent(text.substr(i, p - i));
                } else if (VHV.language == 'kh') {
                    audio.src = 'https://support.lsdsoftware.com/read-aloud/speak/kh/Whisper?q=' + encodeURIComponent(text.substr(i, p - i));
                } else if (VHV.language == 'vi') {

                    audio.src = 'https://colombo.vn/api/CMS/Article/speech?text=' + encodeURIComponent(text.substr(i, p - i));

                    //'https://support.lsdsoftware.com/read-aloud/speak/vi/Whisper?q='+encodeURIComponent(text.substr(i,p-i));

                } else {
                    audio.src = 'https://support.lsdsoftware.com/read-aloud/speak/en/Whisper?q=' + encodeURIComponent(text.substr(i, p - i));
                }
                i = p + 1;
                audio.play();
            }
        };
        f();
        audio.addEventListener('ended', f);
        audio.addEventListener('error', f);
    }
});
String.prototype.ucfirst = function() {
    var st = this.toString();
    if (st.length > 0) {
        return st.charAt(0).toUpperCase() + st.substr(1).toLowerCase();
    } else {
        return '';
    }
}
;
String.prototype.ucwords = function() {
    var st = this.toString().replace(/\_/g, ' ');
    var sts = st.split(' ');
    for (var i = 0; i < sts.length; i++) {
        sts[i] = sts[i].ucfirst();
    }
    return sts.join('');
}
;
$.fn.loadModule = function(moduleName, settings, onComplete) {
    var inc = 0;
    while (VHV.App.modules[parseInt(VHV.App.maxModuleId) + 1000 + inc]) {
        inc++;
    }
    var moduleId = parseInt(VHV.App.maxModuleId) + 1000 + inc;
    VHV.App.maxModuleId = moduleId;
    $(this).each(function() {
        var that = $(this), options = $.extend({
            module: moduleName,
            moduleId: moduleId
        }, settings), swapScreen;
        if (VHV.app) {
            swapScreen = $(this).parents('.swap-screen:first');
            if (!swapScreen.length) {
                swapScreen = $('.swap-screen:visible');
            }
        }
        VHV.Model.engine.initOptions(options, swapScreen, true);
        var url = VHV.buildURL(options)
          , data = {}
          , success = ((typeof (onComplete) == 'function') ? function() {
            VHV.ExecQueue.add(function() {
                onComplete.call(VHV.App.modules[moduleId], moduleId);
            }, function() {
                return VHV.App.modules[moduleId];
            });
        }
        : null);
        if (/\&accountId=(\w+)/.test(url)) {
            data.accountId = RegExp.$1;
            url = url.replace(/\&accountId=(\w+)/, '');
            that.load(url, data, success);
        } else {
            that.load(url, success);
        }
    });
    return moduleId;
}
;
Date.prototype.format = function(format) {
    var returnStr = '';
    var replace = Date.replaceChars;
    for (var i = 0; i < format.length; i++) {
        var curChar = format.charAt(i);
        if (replace[curChar]) {
            returnStr += replace[curChar].call(this);
        } else {
            returnStr += curChar;
        }
    }
    return returnStr;
}
;
Date.prototype.getUTCTime = function() {
    return this.getTime() - 60000 * Date.getTimezoneOffset();
}
Date.getTimezoneOffset = function() {
    if (!this.defaultTimezoneOffset) {
        this.defaultTimezoneOffset = (new Date()).getTimezoneOffset();
    }
    return this.defaultTimezoneOffset;
}
Date.replaceChars = {
    shortMonths: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    longMonths: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
    shortDays: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
    longDays: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
    d: function() {
        return (this.getDate() < 10 ? '0' : '') + this.getDate();
    },
    D: function() {
        return Date.replaceChars.shortDays[this.getDay()];
    },
    j: function() {
        return this.getDate();
    },
    l: function() {
        return Date.replaceChars.longDays[this.getDay()];
    },
    N: function() {
        return this.getDay() + 1;
    },
    S: function() {
        return (this.getDate() % 10 == 1 && this.getDate() != 11 ? 'st' : (this.getDate() % 10 == 2 && this.getDate() != 12 ? 'nd' : (this.getDate() % 10 == 3 && this.getDate() != 13 ? 'rd' : 'th')));
    },
    w: function() {
        return Date.replaceChars.shortDays[this.getDay()];
    },
    z: function() {
        return "Not Yet Supported";
    },
    W: function() {
        return "Not Yet Supported";
    },
    F: function() {
        return Date.replaceChars.longMonths[this.getMonth()];
    },
    m: function() {
        return (this.getMonth() < 9 ? '0' : '') + (this.getMonth() + 1);
    },
    M: function() {
        return Date.replaceChars.shortMonths[this.getMonth()];
    },
    n: function() {
        return this.getMonth() + 1;
    },
    t: function() {
        return "Not Yet Supported";
    },
    L: function() {
        return (((this.getFullYear() % 4 == 0) && (this.getFullYear() % 100 != 0)) || (this.getFullYear() % 400 == 0)) ? '1' : '0';
    },
    o: function() {
        return "Not Supported";
    },
    Y: function() {
        return this.getFullYear();
    },
    y: function() {
        return ('' + this.getFullYear()).substr(2);
    },
    a: function() {
        return this.getHours() < 12 ? 'am' : 'pm';
    },
    A: function() {
        return this.getHours() < 12 ? 'AM' : 'PM';
    },
    B: function() {
        return "Not Yet Supported";
    },
    g: function() {
        return this.getHours() % 12 || 12;
    },
    G: function() {
        return this.getHours();
    },
    h: function() {
        return ((this.getHours() % 12 || 12) < 10 ? '0' : '') + (this.getHours() % 12 || 12);
    },
    H: function() {
        return (this.getHours() < 10 ? '0' : '') + this.getHours();
    },
    i: function() {
        return (this.getMinutes() < 10 ? '0' : '') + this.getMinutes();
    },
    s: function() {
        return (this.getSeconds() < 10 ? '0' : '') + this.getSeconds();
    },
    e: function() {
        return "Not Yet Supported";
    },
    I: function() {
        return "Not Supported";
    },
    O: function() {
        return (-this.getTimezoneOffset() < 0 ? '-' : '+') + (Math.abs(this.getTimezoneOffset() / 60) < 10 ? '0' : '') + (Math.abs(this.getTimezoneOffset() / 60)) + '00';
    },
    P: function() {
        return (-this.getTimezoneOffset() < 0 ? '-' : '+') + (Math.abs(this.getTimezoneOffset() / 60) < 10 ? '0' : '') + (Math.abs(this.getTimezoneOffset() / 60)) + ':' + (Math.abs(this.getTimezoneOffset() % 60) < 10 ? '0' : '') + (Math.abs(this.getTimezoneOffset() % 60));
    },
    T: function() {
        var m = this.getMonth();
        this.setMonth(0);
        var result = this.toTimeString().replace(/^.+ \(?([^\)]+)\)?$/, '$1');
        this.setMonth(m);
        return result;
    },
    Z: function() {
        return -this.getTimezoneOffset() * 60;
    },
    c: function() {
        return this.format("Y-m-d") + "T" + this.format("H:i:sP");
    },
    r: function() {
        return this.toString();
    },
    U: function() {
        return this.getTime() / 1000;
    }
};
if (!window.console) {
    window.console = {
        log: function(st) {}
    };
}
function decode64(input) {
    if (!input)
        return '';
    var keyStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
    var output = "";
    var chr1, chr2, chr3 = "";
    var enc1, enc2, enc3, enc4 = "";
    var i = 0;
    var base64test = /[^A-Za-z0-9\+\/\=]/g;
    if (base64test.exec(input)) {
        console.log("There were invalid base64 characters in the input text.\n" + "Valid base64 characters are A-Z, a-z, 0-9, '+', '/',and '='\n" + "Expect errors in decoding.");
    }
    input = input.replace(/[^A-Za-z0-9\+\/\=]/g, "");
    do {
        enc1 = keyStr.indexOf(input.charAt(i++));
        enc2 = keyStr.indexOf(input.charAt(i++));
        enc3 = keyStr.indexOf(input.charAt(i++));
        enc4 = keyStr.indexOf(input.charAt(i++));
        chr1 = (enc1 << 2) | (enc2 >> 4);
        chr2 = ((enc2 & 15) << 4) | (enc3 >> 2);
        chr3 = ((enc3 & 3) << 6) | enc4;
        output = output + String.fromCharCode(chr1);
        if (enc3 != 64) {
            output = output + String.fromCharCode(chr2);
        }
        if (enc4 != 64) {
            output = output + String.fromCharCode(chr3);
        }
        chr1 = chr2 = chr3 = "";
        enc1 = enc2 = enc3 = enc4 = "";
    } while (i < input.length);
    return unescape(output);
}
;if ($('img[usemap]').length) {
    VHV.load('3rdparty/jQuery/fancybox/fancybox-v2.0/jquery.fancybox.css', '3rdparty/jQuery/fancybox/fancybox-v2.0/jquery.fancybox-buttons.css');
    VHV.load('3rdparty/jQuery/jquery.imagemapster.min.js', '3rdparty/jQuery/fancybox/fancybox-v2.0/jquery.fancybox.js', function() {
        VHV.load('3rdparty/jQuery/fancybox/fancybox-v2.0/jquery.fancybox-buttons.js', function() {
            setTimeout(function() {
                $('img[usemap]').each(function() {
                    $(this).mapster({
                        fillOpacity: 0.8,
                        isSelectable: false,
                        stroke: true,
                        strokeWeight: 1,
                        strokeColor: 'DDDDDD',
                        scaleMap: true,
                        showToolTip: true,
                        clickNavigate: $(this).attr('data-click-navigate') ? true : false
                    });
                });
                $('img[usemap]').parent().css('max-width', '100%');
                $(window).resize(function() {
                    var curWidth = $(window).width()
                      , curHeight = $(window).height()
                      , checking = false;
                    if (checking) {
                        return;
                    }
                    checking = true;
                    window.setTimeout(function() {
                        var newWidth = $(window).width()
                          , newHeight = $(window).height();
                        if (newWidth === curWidth && newHeight === curHeight) {
                            $('img[usemap]').each(function() {
                                var image = $(this);
                                image.parent().css('width', 'auto').css('height', 'auto');
                                image.width(image.parent().width()).css('height', 'auto').mapster('resize', image.width(), image.height(), 100);
                            });
                        }
                        checking = false;
                    }, 100);
                });
                $('area:not(.no-popup)').addClass('fancybox').attr('rel', 'image').click(function(e) {
                    e.preventDefault();
                    var url = $(this).attr('href');
                    var title = $(this).attr('title');
                    var type = $(this).attr('rel');
                    if (type == 'redirect') {
                        location = url;
                    } else {
                        $.fancybox({
                            'title': title,
                            'titlePosition': 'inside',
                            'href': url
                        });
                    }
                });
            }, 500);
        });
    });
}
(function() {
    if (jQuery.ajaxPrefilter) {
        var rURL = /^([^\/]+)/
          , rEsc = /(\-|\.)/
          , protocol = rURL.exec(document.location.href)[1].replace(rEsc, "\\$1")
          , rDomains = {};
        jQuery.ajaxPrefilter(function(options) {
            var strip = options.stripDomain, rDomain, sDomain;
            if (strip) {
                rDomain = rDomains[strip];
                if (!rDomain) {
                    sDomain = "^(?:" + protocol + ")?\\/\\/" + strip.replace(rEsc, "\\$1");
                    rDomains[strip] = rDomain = new RegExp(sDomain,"i")
                }
                options.url = options.url.replace(rDomain, "");
            }
        });
    }
}
)();
if (/MSIE [56].*Windows/.test(navigator.userAgent))
    (function() {
        var blank = new Image;
        blank.src = "/App/images/blank.gif";
        var imgs = document.getElementsByTagName("img");
        for (var i = 0; i < imgs.length; i++) {
            var img = document.images[i];
            var src = img.src;
            if (!/\.png$/.test(src))
                continue;
            var s = img.runtimeStyle;
            s.width = img.offsetWidth + "px";
            s.height = img.offsetHeight + "px";
            s.filter = "progid:DXImageTransform.Microsoft.AlphaImageLoader(src=\'" + src + "\',sizingMethod=\'scale\')";
            img.src = blank.src;
        }
    }
    )();
VHV.getTime = function() {
    return Math.round(new Date().getTime() / 1000) - VHV.localTime + VHV.serverTime;
}
;
VHV.ready = true;
window.initVHV = true;
VHV.CMS = {};
VHV.Content = {};
jQuery.ajaxSetup({
    stripDomain: rootURL.replace('http://', '').replace('https://', '').replace(/\//g, '')
});
$.extend(VHV, {
    rootURL: rootURL,
    staticURL: staticURL,
    isDebug: 0,
    urlMode: 'rewrite',
    defaultPortalId: 'App',
    exportUser: 0
});
VHV.localTime = Math.round(new Date().getTime() / 1000);
if ($('.animated').length) {
    VHV.load('3rdparty/animate.min.css');
    VHV.load('3rdparty/jQuery/jquery.waypoints.min.js', function() {
        $('.animated').each(function() {
            $(this).waypoint(function() {
                $(this.element).toggleClass($(this.element).data('animated'));
            }, {
                offset: $(this).data('waypointOffset') ? $(this).data('waypointOffset') : '80%'
            });
        });
    });
}
if ($('[class^="hvr-"]').length) {
    VHV.load('3rdparty/hover-min.css');
}
if ($('div.fb-like,div.fb-comments,div.fb-page,div.fan-page,div.fb-comment').length) {
    window.fbAsyncInit = function() {
        var appId = $('meta[property="fb:app_id"]').attr('content');
        FB.init({
            appId: appId ? appId : '1396997063955601',
            cookie: true,
            xfbml: true,
            version: 'v2.8'
        });
        FB.AppEvents.logPageView();
        $(document).ajaxComplete(function() {
            try {
                if (window.FB)
                    FB.XFBML.parse();
                if (window.gapi && window.gapi.plusone)
                    gapi.plusone.go();
            } catch (ex) {}
        });
    }
    ;
    (function(d, s, id) {
        var js, fjs = d.getElementsByTagName(s)[0];
        if (d.getElementById(id)) {
            return;
        }
        js = d.createElement(s);
        js.id = id;
        js.src = "https://connect.facebook.net/" + ((VHV.language == 'vi') ? 'vi_VN' : 'en_US') + "/sdk.js";
        fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));
}
if ($('div.g-plusone').length) {
    window.___gcfg = {
        lang: ((VHV.language == 'vi') ? 'vi' : 'en')
    };
    (function() {
        var po = document.createElement('script');
        po.type = 'text/javascript';
        po.async = true;
        po.src = 'https://apis.google.com/js/platform.js';
        var s = document.getElementsByTagName('script')[0];
        s.parentNode.insertBefore(po, s);
    }
    )();
}
if ($('a.twitter-share-button').length) {
    !function(d, s, id) {
        var js, fjs = d.getElementsByTagName(s)[0];
        if (!d.getElementById(id)) {
            js = d.createElement(s);
            js.id = id;
            js.src = "https://platform.twitter.com/widgets.js";
            fjs.parentNode.insertBefore(js, fjs);
        }
    }(document, "script", "twitter-wjs");
}
$('#backtotop ').click(function() {
    $('html, body').animate({
        scrollTop: 0
    }, 1000);
});
$(window).scroll(function() {
    if ($(window).scrollTop() > 0) {
        $('#backtotop ').fadeIn();
    } else {
        $('#backtotop ').fadeOut();
    }
});
$(document).on('keydown', 'input[type=number]', function(e) {
    if (e.which == 69) {
        return false;
    }
});
;VHV.Content.Listing = VHV.extend(VHV.Module, {
    filters: {},
    orderBy: '',
    type: '',
    pagingSelector: false,
    pageNo: 1,
    itemsPerPage: 12,
    numDisplayEntries: 5,
    totalItems: 0,
    nextText: '&raquo;',
    prevText: '&laquo;',
    startText: '&laquo;&laquo;',
    endText: '&raquo;&raquo;',
    linkTo: 'javascript:void(0);',
    dontGoTop: false,
    fields: [],
    comboboxes: {},
    showControl: true,
    init: function(success) {
        var that = this;
        if (this.linkTo == 'javascript:void(0);') {
            this.linkTo = '#module' + this.id;
        }
        if (!this.pagingSelector) {
            this.pagingSelector = '.pagination' + this.id + ',#pagination' + this.id;
        }
        VHV.load('3rdparty/jQuery/jquery.pagination/jquery.pagination.js', function() {
            VHV.Module.prototype.init.call(that, success);
        });
    },
    initEvents: function() {
        var that = this;
        VHV.updateDisplay();
        if (this.pagingSelector) {
            var pager = $(this.pagingSelector);
            if (pager.length > 0) {
                this.itemsPerPage = parseInt(this.itemsPerPage);
                this.totalItems = parseInt(this.totalItems);
                if (this.itemsPerPage < this.totalItems) {
                    var options = {
                        callback: function(currentPage, obj) {
                            that.reload({
                                pageNo: currentPage + 1
                            });
                            if (!that.dontGoTop) {
                                location = '#module' + that.id;
                            }
                            setTimeout(function() {
                                $(window).scroll();
                            }, 100);
                        },
                        current_page: this.pageNo - 1,
                        items_per_page: this.itemsPerPage,
                        num_display_entries: this.numDisplayEntries,
                        next_text: this.nextText,
                        prev_text: this.prevText,
                        start_text: this.startText,
                        end_text: this.endText,
                        link_to: 'javascript:void(0);',
                        prev_show_always: this.showControl ? true : false,
                        next_show_always: this.showControl ? true : false
                    };
                    pager.show();
                    VHV.load('3rdparty/jQuery/jquery.pagination/jquery.pagination.js', function() {
                        pager.pagination(that.totalItems, options);
                    });
                } else {
                    pager.hide();
                }
            }
        }
        var cookieId = 'List' + VHV.pageId.replace(/\./g, '') + that.id;
        localStorage.removeItem(cookieId + '.bs.table.sortOrder');
        if (that.$(".scroll-bar").length) {
            $(window).resize(function() {
                if ($(window).width() <= 768) {
                    VHV.load('3rdparty/jQuery/malihu-scrollbar/jquery.mCustomScrollbar.css');
                    VHV.load('3rdparty/jQuery/malihu-scrollbar/jquery.mCustomScrollbar.concat.min.js', function() {
                        that.$('.scroll-bar').mCustomScrollbar({
                            theme: 'minimal-dark',
                            axis: 'yx'
                        });
                    });
                } else {
                    VHV.load('3rdparty/jQuery/malihu-scrollbar/jquery.mCustomScrollbar.css');
                    VHV.load('3rdparty/jQuery/malihu-scrollbar/jquery.mCustomScrollbar.concat.min.js', function() {
                        that.$('.scroll-bar').mCustomScrollbar({
                            theme: 'minimal-dark'
                        });
                    });
                }
            });
        }
        this.$('.total-items' + this.id).text(VHV.numberFormat(this.totalItems));
        if (this.parent && this.parent.targetForm && this.parent.targetForm.id == this.id) {
            this.parent.$('.total-items' + this.parent.id).text(VHV.numberFormat(this.totalItems));
        }
        if (that.$(".bootstrap-table").length) {
            VHV.load('3rdparty/bootstrap-table/dist/bootstrap-table.min.css', '3rdparty/bootstrap-table/dist/extensions/sticky-header/bootstrap-table-sticky-header.min.css', '3rdparty/bootstrap-table/dist/extensions/fixed-columns/bootstrap-table-fixed-columns.css', '3rdparty/bootstrap-table/dist/extensions/dragtable/dragtable.css', '3rdparty/jQuery/jqueryui/themes/smoothness/jquery-ui.css', '3rdparty/bootstrap-table/dist/extensions/jquery-resizable-columns/jquery.resizableColumns.css');
            VHV.load('3rdparty/bootstrap-table/dist/bootstrap-table.min.js', '3rdparty/jQuery/jqueryui/jquery-ui.min.js', function() {
                VHV.load('3rdparty/bootstrap-table/dist/locale/bootstrap-table-vi-VN.min.js', '3rdparty/bootstrap-table/dist/locale/bootstrap-table-en-US.min.js', '3rdparty/bootstrap-table/dist/extensions/jquery-resizable-columns/jquery.resizableColumns.min.js', '3rdparty/bootstrap-table/dist/extensions/sticky-header/bootstrap-table-sticky-header.min.js', '3rdparty/bootstrap-table/dist/extensions/cookie/bootstrap-table-cookie.min.js', '3rdparty/bootstrap-table/dist/extensions/reorder-columns/bootstrap-table-reorder-columns.min.js', '3rdparty/bootstrap-table/dist/extensions/dragtable/jquery.dragtable.js', '3rdparty/bootstrap-table/dist/extensions/fixed-columns/bootstrap-table-fixed-columns.js', '3rdparty/bootstrap-table/dist/extensions/resizable/bootstrap-table-resizable.min.js', '3rdparty/bootstrap-table/dist/extensions/key-events/bootstrap-table-key-events.min.js', '3rdparty/bootstrap-table/dist/extensions/editable/bootstrap-table-editable.min.js', '3rdparty/bootstrap-table/dist/extensions/mobile/bootstrap-table-mobile.min.js', '3rdparty/bootstrap-table/dist/extensions/tableExport.jquery.plugin/tableExport.min.js', '3rdparty/bootstrap-table/dist/extensions/export/bootstrap-table-export.min.js', function() {
                    that.$("table.bootstrap-table").each(function() {
                        var table = $(this)
                          , sortname = (that.orderBy && that.orderBy.split) ? that.orderBy.split(' ') : []
                          , cookieId = 'List' + VHV.pageId.replace(/\./g, '') + that.id
                          , height = table.data('stickyHeaderOffsetY');
                        table.removeClass('bootstrap-table');
                        if (table.data('bootstrap.table'))
                            return;
                        if (!height)
                            height = $('.app-header').height();
                        if (!height)
                            height = $('.cms-header').parent().height();
                        if (!height)
                            height = $('.ant-layout-header-wrapper').height();
                        if (!height)
                            height = $('.navbar-fixed-top').height();
                        if (!height)
                            height = 113;
                        localStorage.removeItem(cookieId + '.bs.table.sortOrder');
                        localStorage.removeItem(cookieId + '.bs.table.sortName');
                        try {
                            var tableHeight = table.data('height') ? table.data('height') : '';
                            if (tableHeight) {
                                if (tableHeight == 'auto') {
                                    tableHeight = window.innerHeight - table.offset().top - 50;
                                }
                            } else {
                                tableHeight = null;
                            }
                            table.attr('id', 'bootstrap-table' + that.id).bootstrapTable({
                                sidePagination: (table.data('pagination') == 'true' || table.data('pagination') === true) ? 'client' : 'server',
                                sortName: sortname[0] ? sortname[0] : undefined,
                                stickyHeader: (table.data('stickyHeader') == 'false') ? false : true,
                                stickyHeaderOffsetY: height + 'px',
                                mobileResponsive: table.data('noMobile') ? false : true,
                                checkOnInit: (table.data('checkOnInit') == 'false') ? false : true,
                                search: false,
                                height: tableHeight ? tableHeight : '',
                                pagination: (table.data('pagination') == 'true' || table.data('pagination') === true) ? true : false,
                                showColumns: (table.data('showColumns') == 'false' || table.data('showColumns') === false) ? false : true,
                                showExport: (table.data('showExport') == 'true' || table.data('showExport') === true) ? true : false,
                                resizable: table.data('resizable') == 'true' ? true : false,
                                fixedColumns: table.data('fixedNumber') ? true : false,
                                fixedNumber: table.data('fixedNumber') ? table.data('fixedNumber') : '',
                                cookieStorage: 'localStorage',
                                cookie: true,
                                cookieIdTable: cookieId,
                                sortOrder: sortname[1] ? sortname[1].toLowerCase() : 'asc',
                                onSort: function(name, order) {
                                    if (!(table.data('pagination') == 'true' || table.data('pagination') === true)) {
                                        that.orderBy = name + ' ' + order.toUpperCase();
                                        that.reload();
                                    }
                                    return true;
                                },
                            });
                            if (table.data('fixedNumber')) {
                                table.parents('.fixed-table-body:first').css('overflow-x', 'auto').css('overflow-y', 'auto');
                            }
                            table.addClass('bootstrap-table');
                        } catch (e) {
                            console.log(e);
                        }
                        if (that.$('.box-body-controls:first').length && !that.$('.box-body-controls:first .fixed-table-toolbar').length) {
                            table.parents('.bootstrap-table:first').find('.fixed-table-toolbar:first').addClass('pull-right').appendTo(that.$('.box-body-controls:first')).find('>div').css('margin-top', 0)
                        }
                    });
                });
            });
        }
    },
    sort: function(column) {
        var that = this;
        if (typeof (this.fields[column]) == 'undefined') {
            this.fields[column] = 0;
        } else {
            this.fields[column] = 1 - this.fields[column];
        }
        if (this.fields[column] == 1)
            this.orderBy = column + ' asc';
        else
            this.orderBy = column + ' desc';
        this.reload({}, function() {
            that.afterReload();
            if (that.fields[column] == 1)
                $('#sort-icon-' + column + that.id).attr('src', 'App/images/asc.gif');
            else
                $('#sort-icon-' + column + that.id).attr('src', 'App/images/desc.gif');
        });
    },
    afterReload: function() {
        $(window).scroll();
    },
    initFilters: function() {
        var that = this;
        for (var i in this.comboboxes) {
            $('#filter_' + i + this.id + ',.filter_' + i).each(function() {
                for (var j in that.comboboxes[i]) {
                    this.add(new Option(that.comboboxes[i][j].name,that.comboboxes[i][j].id,false,false), null);
                }
            }).val(VHV.request(i)).change(function() {
                that.addCondition(i, $(this).val());
                that.reload();
            });
        }
    },
    addFilter: function(name, value, multi, filterName) {
        this.pageNo = 1;
        if (typeof (filterName) == 'undefined') {
            filterName = 'filters';
        }
        if (multi) {
            if (this.filters[filterName + '[' + name + ']']) {
                if (this.filters[filterName + '[' + name + ']'].indexOf(value) != -1) {
                    return;
                }
                this.filters[filterName + '[' + name + ']'] += '||' + value;
                return;
            }
        }
        if (typeof (this.filters) != 'undefined') {
            this.filters[filterName + '[' + name + ']'] = value;
        }
    },
    removeFilter: function(name, multi, value, filterName) {
        if (typeof (filterName) == 'undefined') {
            filterName = 'filters';
        }
        if (multi) {
            this.filters[filterName + '[' + name + ']'] = this.filters[filterName + '[' + name + ']'].replace('||' + value, '').replace(value + '||', '');
            if (this.filters[filterName + '[' + name + ']'] != value) {
                return;
            }
        }
        delete this.filters[filterName + '[' + name + ']'];
    },
    addCondition: function(name, value, multi) {
        this.addFilter(name, value, multi, 'condition');
    },
    removeCondition: function(name, multi, value) {
        this.removeFilter(name, value, multi, 'condition');
    },
    orderFillter: function(value) {
        $('.content-order' + this.id).load(this.submitURL({
            cmd: 'redrawList',
            status: value
        }))
    },
    success: function() {
        this.initEvents();
    },
    sortBy: function(field, defaultDir) {
        if (typeof (defaultDir) == 'undefined') {
            defaultDir = 'asc';
        }
        if (this.orderBy == (field + ' ' + defaultDir)) {
            defaultDir = (defaultDir == 'asc') ? 'desc' : 'asc';
        }
        this.orderBy = field + ' ' + ((defaultDir == 'asc') ? 'asc' : 'desc');
        this.reload();
    },
    importExcel: function(options) {
        if (!options.layout) {
            options.layout = 'CMS.importExcel';
        }
        options.xPopup = 'backdrop:\'static\',  width:540';
        if (!options.submitService) {
            options.submitService = VHV.changeTail(this.service, 'importExcel');
        }
        options.parentModuleId = this.id;
        return this.editForm(options);
    },
    exportExcel: function(options) {
        var that = this;
        if (this.filters && VHV.sizeof(this.filters)) {
            options.filters = $.extend(options.filters ? options.filters : {}, this.filters);
        }
        if (this.orderBy && typeof (this.orderBy) == 'string') {
            options.orderBy = this.orderBy;
        }
        if (this.type) {
            options.type = this.type;
        }
        location = VHV.Model(options.exportMethod ? options.exportMethod : VHV.changeTail(this.service, 'exportExcel')).url(options);
    },
    exportWord: function(options) {
        var that = this;
        $('#module' + that.id).append('<div class="export-popup' + that.id + '"></div>');
        VHV.Model('Software.Office.ExportWord.export')({
            objectId: options.objectId ? options.objectId : '""',
            templateId: options.templateId ? options.templateId : '""'
        }, function(response) {
            if (typeof (response) === 'string') {
                response = JSON.parse(response);
            }
            if (response.layout) {
                $('.export-popup' + that.id).html(response.layout);
            } else {
                if (response.url) {
                    location = VHV.Model(response.url).url(response.params ? response.params : {});
                }
            }
        });
    },
    editForm: function(options) {
        var that = this;
        options.module = 'Content.Form';
        if (!options.layout || this.notLayout) {
            if (options.type && (options.type.indexOf('Article') !== -1 || options.type.indexOf('Product') !== -1)) {
                options.layout = (this.editLayout ? this.editLayout : this.layout.replace('.list', '').concat(options.type.replace('Article', '').replace('Product', '').replace('Account', ''), '.edit'));
            } else {
                options.layout = (this.editLayout ? this.editLayout : VHV.changeTail(this.layout, 'edit'));
            }
        }
        if (!options.submitService) {
            options.submitService = (this.submitService ? this.submitService : VHV.changeTail(this.service, 'edit'));
        }
        if (!options.service) {
            options.service = VHV.changeTail(this.service, 'select');
        }
        if (!options.type && (this.type || this.itemType)) {
            options.type = (this.type ? this.type : this.itemType);
        }
        if (options.id) {
            options.itemId = options.id;
        }
        if (this.filters) {
            for (var i in this.filters) {
                var v = this.filters[i];
                if ((typeof (v) == 'string') && !options[i] && ['accountId', 'groupId', 'type', 'site', 'page', 'module', 'pageNo', 'itemsPerPage', 'orderBy'].indexOf(i) == -1) {
                    options[i] = v;
                }
            }
        }
        VHV.ExecQueue.add(function() {
            if (!options.xPopup) {
                that.parent.loadModule('editModule', options);
                if ($('#commentModule' + that.parent.id).length || $('#historyModule' + that.parent.id).length) {
                    if (that.parent.isMobile) {
                        $('#detailModule' + that.parent.id).hide();
                        $('#editModule' + that.parent.id).show();
                        $('body').addClass('overhidden');
                    } else {
                        if (options.itemId) {
                            $('#editModule' + that.parent.id).next().show();
                            if ($('#commentModule' + that.parent.id).length) {
                                that.parent.loadModule('commentModule', {
                                    layout: 'CMS.Article.Comment.commentDetail',
                                    service: 'Content.Comment.selectAll',
                                    objectId: options.id ? options.id : 0,
                                    orderBy: "updateTime DESC",
                                    itemsPerPage: 8,
                                    parentType: options.type
                                });
                            }
                            if ($('#historyModule' + that.parent.id).length) {
                                that.parent.loadModule('historyModule', {
                                    layout: 'CMS.reviewHistory',
                                    service: 'CMS.ObjectLog.selectAll',
                                    'filters[objectId]': options.id ? options.id : 0,
                                    'filters[objectType]': options.type,
                                    orderBy: "createdTime DESC",
                                    itemsPerPage: 8
                                });
                            }
                        } else {
                            $('#editModule' + that.parent.id).next().hide();
                        }
                    }
                }
            } else {
                that.parent.loadModule('popupModule', options);
            }
            if (options.itemId) {
                options.id = options.itemId;
            }
        }, function() {
            return that.parent;
        });
    },
    viewDetail: function(options) {
        var that = this;
        options.module = 'Content.Form';
        if (!options.layout || this.notLayout) {
            if (options.type && (options.type.indexOf('Article') !== -1 || options.type.indexOf('Product') !== -1)) {
                options.layout = (this.detailLayout ? this.detailLayout : this.layout.replace('.list', '').concat(options.type.replace('Article', '').replace('Product', '').replace('Account', ''), '.detail'));
            } else {
                options.layout = (this.detailLayout ? this.detailLayout : this.layout.replace('.list', '.detail'));
            }
        }
        if (!options.service) {
            options.service = VHV.changeTail(this.service, 'select');
        }
        if (!options.type && (this.type || this.itemType)) {
            options.type = (this.type ? this.type : this.itemType);
        }
        if (options.id) {
            options.itemId = options.id;
        }
        VHV.ExecQueue.add(function() {
            if (!options.xPopup) {
                that.parent.loadModule('detailModule', options);
                if (that.parent.isMobile) {
                    $('#detailModule' + that.parent.id).show();
                    $('#editModule' + that.parent.id).hide();
                    $('body').addClass('overhidden');
                } else {
                    if (options.itemId) {
                        options.id = options.itemId;
                        $('#detailModule' + that.parent.id).next().show();
                    } else {
                        $('#detailModule' + that.parent.id).next().hide();
                    }
                }
            } else {
                that.parent.loadModule('popupModule', options);
            }
        }, function() {
            return that.parent;
        });
    }
});
;VHV.Content.HTML = VHV.extend(VHV.Module, {});
;/*!
 * Bootstrap v3.3.4 (http://getbootstrap.com)
 * Copyright 2011-2015 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 */
if ("undefined" == typeof jQuery)
    throw new Error("Bootstrap's JavaScript requires jQuery");
+function(a) {
    "use strict";
    var b = a.fn.jquery.split(" ")[0].split(".");
    if (b[0] < 2 && b[1] < 9 || 1 == b[0] && 9 == b[1] && b[2] < 1)
        throw new Error("Bootstrap's JavaScript requires jQuery version 1.9.1 or higher")
}(jQuery),
+function(a) {
    "use strict";
    function b() {
        var a = document.createElement("bootstrap")
          , b = {
            WebkitTransition: "webkitTransitionEnd",
            MozTransition: "transitionend",
            OTransition: "oTransitionEnd otransitionend",
            transition: "transitionend"
        };
        for (var c in b)
            if (void 0 !== a.style[c])
                return {
                    end: b[c]
                };
        return !1
    }
    a.fn.emulateTransitionEnd = function(b) {
        var c = !1
          , d = this;
        a(this).one("bsTransitionEnd", function() {
            c = !0
        });
        var e = function() {
            c || a(d).trigger(a.support.transition.end)
        };
        return setTimeout(e, b),
        this
    }
    ,
    a(function() {
        a.support.transition = b(),
        a.support.transition && (a.event.special.bsTransitionEnd = {
            bindType: a.support.transition.end,
            delegateType: a.support.transition.end,
            handle: function(b) {
                return a(b.target).is(this) ? b.handleObj.handler.apply(this, arguments) : void 0
            }
        })
    })
}(jQuery),
+function(a) {
    "use strict";
    function b(b) {
        return this.each(function() {
            var c = a(this)
              , e = c.data("bs.alert");
            e || c.data("bs.alert", e = new d(this)),
            "string" == typeof b && e[b].call(c)
        })
    }
    var c = '[data-dismiss="alert"]'
      , d = function(b) {
        a(b).on("click", c, this.close)
    };
    d.VERSION = "3.3.4",
    d.TRANSITION_DURATION = 150,
    d.prototype.close = function(b) {
        function c() {
            g.detach().trigger("closed.bs.alert").remove()
        }
        var e = a(this)
          , f = e.attr("data-target");
        f || (f = e.attr("href"),
        f = f && f.replace(/.*(?=#[^\s]*$)/, ""));
        var g = a(f);
        b && b.preventDefault(),
        g.length || (g = e.closest(".alert")),
        g.trigger(b = a.Event("close.bs.alert")),
        b.isDefaultPrevented() || (g.removeClass("in"),
        a.support.transition && g.hasClass("fade") ? g.one("bsTransitionEnd", c).emulateTransitionEnd(d.TRANSITION_DURATION) : c())
    }
    ;
    var e = a.fn.alert;
    a.fn.alert = b,
    a.fn.alert.Constructor = d,
    a.fn.alert.noConflict = function() {
        return a.fn.alert = e,
        this
    }
    ,
    a(document).on("click.bs.alert.data-api", c, d.prototype.close)
}(jQuery),
+function(a) {
    "use strict";
    function b(b) {
        return this.each(function() {
            var d = a(this)
              , e = d.data("bs.button")
              , f = "object" == typeof b && b;
            e || d.data("bs.button", e = new c(this,f)),
            "toggle" == b ? e.toggle() : b && e.setState(b)
        })
    }
    var c = function(b, d) {
        this.$element = a(b),
        this.options = a.extend({}, c.DEFAULTS, d),
        this.isLoading = !1
    };
    c.VERSION = "3.3.4",
    c.DEFAULTS = {
        loadingText: "loading..."
    },
    c.prototype.setState = function(b) {
        var c = "disabled"
          , d = this.$element
          , e = d.is("input") ? "val" : "html"
          , f = d.data();
        b += "Text",
        null == f.resetText && d.data("resetText", d[e]()),
        setTimeout(a.proxy(function() {
            d[e](null == f[b] ? this.options[b] : f[b]),
            "loadingText" == b ? (this.isLoading = !0,
            d.addClass(c).attr(c, c)) : this.isLoading && (this.isLoading = !1,
            d.removeClass(c).removeAttr(c))
        }, this), 0)
    }
    ,
    c.prototype.toggle = function() {
        var a = !0
          , b = this.$element.closest('[data-toggle="buttons"]');
        if (b.length) {
            var c = this.$element.find("input");
            "radio" == c.prop("type") && (c.prop("checked") && this.$element.hasClass("active") ? a = !1 : b.find(".active").removeClass("active")),
            a && c.prop("checked", !this.$element.hasClass("active")).trigger("change")
        } else
            this.$element.attr("aria-pressed", !this.$element.hasClass("active"));
        a && this.$element.toggleClass("active")
    }
    ;
    var d = a.fn.button;
    a.fn.button = b,
    a.fn.button.Constructor = c,
    a.fn.button.noConflict = function() {
        return a.fn.button = d,
        this
    }
    ,
    a(document).on("click.bs.button.data-api", '[data-toggle^="button"]', function(c) {
        var d = a(c.target);
        d.hasClass("btn") || (d = d.closest(".btn")),
        b.call(d, "toggle"),
        c.preventDefault()
    }).on("focus.bs.button.data-api blur.bs.button.data-api", '[data-toggle^="button"]', function(b) {
        a(b.target).closest(".btn").toggleClass("focus", /^focus(in)?$/.test(b.type))
    })
}(jQuery),
+function(a) {
    "use strict";
    function b(b) {
        return this.each(function() {
            var d = a(this)
              , e = d.data("bs.carousel")
              , f = a.extend({}, c.DEFAULTS, d.data(), "object" == typeof b && b)
              , g = "string" == typeof b ? b : f.slide;
            e || d.data("bs.carousel", e = new c(this,f)),
            "number" == typeof b ? e.to(b) : g ? e[g]() : f.interval && e.pause().cycle()
        })
    }
    var c = function(b, c) {
        this.$element = a(b),
        this.$indicators = this.$element.find(".carousel-indicators"),
        this.options = c,
        this.paused = null,
        this.sliding = null,
        this.interval = null,
        this.$active = null,
        this.$items = null,
        this.options.keyboard && this.$element.on("keydown.bs.carousel", a.proxy(this.keydown, this)),
        "hover" == this.options.pause && !("ontouchstart"in document.documentElement) && this.$element.on("mouseenter.bs.carousel", a.proxy(this.pause, this)).on("mouseleave.bs.carousel", a.proxy(this.cycle, this))
    };
    c.VERSION = "3.3.4",
    c.TRANSITION_DURATION = 600,
    c.DEFAULTS = {
        interval: 5e3,
        pause: "hover",
        wrap: !0,
        keyboard: !0
    },
    c.prototype.keydown = function(a) {
        if (!/input|textarea/i.test(a.target.tagName)) {
            switch (a.which) {
            case 37:
                this.prev();
                break;
            case 39:
                this.next();
                break;
            default:
                return
            }
            a.preventDefault()
        }
    }
    ,
    c.prototype.cycle = function(b) {
        return b || (this.paused = !1),
        this.interval && clearInterval(this.interval),
        this.options.interval && !this.paused && (this.interval = setInterval(a.proxy(this.next, this), this.options.interval)),
        this
    }
    ,
    c.prototype.getItemIndex = function(a) {
        return this.$items = a.parent().children(".item"),
        this.$items.index(a || this.$active)
    }
    ,
    c.prototype.getItemForDirection = function(a, b) {
        var c = this.getItemIndex(b)
          , d = "prev" == a && 0 === c || "next" == a && c == this.$items.length - 1;
        if (d && !this.options.wrap)
            return b;
        var e = "prev" == a ? -1 : 1
          , f = (c + e) % this.$items.length;
        return this.$items.eq(f)
    }
    ,
    c.prototype.to = function(a) {
        var b = this
          , c = this.getItemIndex(this.$active = this.$element.find(".item.active"));
        return a > this.$items.length - 1 || 0 > a ? void 0 : this.sliding ? this.$element.one("slid.bs.carousel", function() {
            b.to(a)
        }) : c == a ? this.pause().cycle() : this.slide(a > c ? "next" : "prev", this.$items.eq(a))
    }
    ,
    c.prototype.pause = function(b) {
        return b || (this.paused = !0),
        this.$element.find(".next, .prev").length && a.support.transition && (this.$element.trigger(a.support.transition.end),
        this.cycle(!0)),
        this.interval = clearInterval(this.interval),
        this
    }
    ,
    c.prototype.next = function() {
        return this.sliding ? void 0 : this.slide("next")
    }
    ,
    c.prototype.prev = function() {
        return this.sliding ? void 0 : this.slide("prev")
    }
    ,
    c.prototype.slide = function(b, d) {
        var e = this.$element.find(".item.active")
          , f = d || this.getItemForDirection(b, e)
          , g = this.interval
          , h = "next" == b ? "left" : "right"
          , i = this;
        if (f.hasClass("active"))
            return this.sliding = !1;
        var j = f[0]
          , k = a.Event("slide.bs.carousel", {
            relatedTarget: j,
            direction: h
        });
        if (this.$element.trigger(k),
        !k.isDefaultPrevented()) {
            if (this.sliding = !0,
            g && this.pause(),
            this.$indicators.length) {
                this.$indicators.find(".active").removeClass("active");
                var l = a(this.$indicators.children()[this.getItemIndex(f)]);
                l && l.addClass("active")
            }
            var m = a.Event("slid.bs.carousel", {
                relatedTarget: j,
                direction: h
            });
            return a.support.transition && this.$element.hasClass("slide") ? (f.addClass(b),
            f[0].offsetWidth,
            e.addClass(h),
            f.addClass(h),
            e.one("bsTransitionEnd", function() {
                f.removeClass([b, h].join(" ")).addClass("active"),
                e.removeClass(["active", h].join(" ")),
                i.sliding = !1,
                setTimeout(function() {
                    i.$element.trigger(m)
                }, 0)
            }).emulateTransitionEnd(c.TRANSITION_DURATION)) : (e.removeClass("active"),
            f.addClass("active"),
            this.sliding = !1,
            this.$element.trigger(m)),
            g && this.cycle(),
            this
        }
    }
    ;
    var d = a.fn.carousel;
    a.fn.carousel = b,
    a.fn.carousel.Constructor = c,
    a.fn.carousel.noConflict = function() {
        return a.fn.carousel = d,
        this
    }
    ;
    var e = function(c) {
        var d, e = a(this), f = a(e.attr("data-target") || (d = e.attr("href")) && d.replace(/.*(?=#[^\s]+$)/, ""));
        if (f.hasClass("carousel")) {
            var g = a.extend({}, f.data(), e.data())
              , h = e.attr("data-slide-to");
            h && (g.interval = !1),
            b.call(f, g),
            h && f.data("bs.carousel").to(h),
            c.preventDefault()
        }
    };
    a(document).on("click.bs.carousel.data-api", "[data-slide]", e).on("click.bs.carousel.data-api", "[data-slide-to]", e),
    a(window).on("load", function() {
        a('[data-ride="carousel"]').each(function() {
            var c = a(this);
            b.call(c, c.data())
        })
    })
}(jQuery),
+function(a) {
    "use strict";
    function b(b) {
        var c, d = b.attr("data-target") || (c = b.attr("href")) && c.replace(/.*(?=#[^\s]+$)/, "");
        return a(d)
    }
    function c(b) {
        return this.each(function() {
            var c = a(this)
              , e = c.data("bs.collapse")
              , f = a.extend({}, d.DEFAULTS, c.data(), "object" == typeof b && b);
            !e && f.toggle && /show|hide/.test(b) && (f.toggle = !1),
            e || c.data("bs.collapse", e = new d(this,f)),
            "string" == typeof b && e[b]()
        })
    }
    var d = function(b, c) {
        this.$element = a(b),
        this.options = a.extend({}, d.DEFAULTS, c),
        this.$trigger = a('[data-toggle="collapse"][href="#' + b.id + '"],[data-toggle="collapse"][data-target="#' + b.id + '"]'),
        this.transitioning = null,
        this.options.parent ? this.$parent = this.getParent() : this.addAriaAndCollapsedClass(this.$element, this.$trigger),
        this.options.toggle && this.toggle()
    };
    d.VERSION = "3.3.4",
    d.TRANSITION_DURATION = 350,
    d.DEFAULTS = {
        toggle: !0
    },
    d.prototype.dimension = function() {
        var a = this.$element.hasClass("width");
        return a ? "width" : "height"
    }
    ,
    d.prototype.show = function() {
        if (!this.transitioning && !this.$element.hasClass("in")) {
            var b, e = this.$parent && this.$parent.children(".panel").children(".in, .collapsing");
            if (!(e && e.length && (b = e.data("bs.collapse"),
            b && b.transitioning))) {
                var f = a.Event("show.bs.collapse");
                if (this.$element.trigger(f),
                !f.isDefaultPrevented()) {
                    e && e.length && (c.call(e, "hide"),
                    b || e.data("bs.collapse", null));
                    var g = this.dimension();
                    this.$element.removeClass("collapse").addClass("collapsing")[g](0).attr("aria-expanded", !0),
                    this.$trigger.removeClass("collapsed").attr("aria-expanded", !0),
                    this.transitioning = 1;
                    var h = function() {
                        this.$element.removeClass("collapsing").addClass("collapse in")[g](""),
                        this.transitioning = 0,
                        this.$element.trigger("shown.bs.collapse")
                    };
                    if (!a.support.transition)
                        return h.call(this);
                    var i = a.camelCase(["scroll", g].join("-"));
                    this.$element.one("bsTransitionEnd", a.proxy(h, this)).emulateTransitionEnd(d.TRANSITION_DURATION)[g](this.$element[0][i])
                }
            }
        }
    }
    ,
    d.prototype.hide = function() {
        if (!this.transitioning && this.$element.hasClass("in")) {
            var b = a.Event("hide.bs.collapse");
            if (this.$element.trigger(b),
            !b.isDefaultPrevented()) {
                var c = this.dimension();
                this.$element[c](this.$element[c]())[0].offsetHeight,
                this.$element.addClass("collapsing").removeClass("collapse in").attr("aria-expanded", !1),
                this.$trigger.addClass("collapsed").attr("aria-expanded", !1),
                this.transitioning = 1;
                var e = function() {
                    this.transitioning = 0,
                    this.$element.removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse")
                };
                return a.support.transition ? void this.$element[c](0).one("bsTransitionEnd", a.proxy(e, this)).emulateTransitionEnd(d.TRANSITION_DURATION) : e.call(this)
            }
        }
    }
    ,
    d.prototype.toggle = function() {
        this[this.$element.hasClass("in") ? "hide" : "show"]()
    }
    ,
    d.prototype.getParent = function() {
        return a(this.options.parent).find('[data-toggle="collapse"][data-parent="' + this.options.parent + '"]').each(a.proxy(function(c, d) {
            var e = a(d);
            this.addAriaAndCollapsedClass(b(e), e)
        }, this)).end()
    }
    ,
    d.prototype.addAriaAndCollapsedClass = function(a, b) {
        var c = a.hasClass("in");
        a.attr("aria-expanded", c),
        b.toggleClass("collapsed", !c).attr("aria-expanded", c)
    }
    ;
    var e = a.fn.collapse;
    a.fn.collapse = c,
    a.fn.collapse.Constructor = d,
    a.fn.collapse.noConflict = function() {
        return a.fn.collapse = e,
        this
    }
    ,
    a(document).on("click.bs.collapse.data-api", '[data-toggle="collapse"]', function(d) {
        var e = a(this);
        e.attr("data-target") || d.preventDefault();
        var f = b(e)
          , g = f.data("bs.collapse")
          , h = g ? "toggle" : e.data();
        c.call(f, h)
    })
}(jQuery),
+function(a) {
    "use strict";
    function b(b) {
        b && 3 === b.which || (a(e).remove(),
        a(f).each(function() {
            var d = a(this)
              , e = c(d)
              , f = {
                relatedTarget: this
            };
            e.hasClass("open") && (e.trigger(b = a.Event("hide.bs.dropdown", f)),
            b.isDefaultPrevented() || (d.attr("aria-expanded", "false"),
            e.removeClass("open").trigger("hidden.bs.dropdown", f)))
        }))
    }
    function c(b) {
        var c = b.attr("data-target");
        c || (c = b.attr("href"),
        c = c && /#[A-Za-z]/.test(c) && c.replace(/.*(?=#[^\s]*$)/, ""));
        var d = c && a(c);
        return d && d.length ? d : b.parent()
    }
    function d(b) {
        return this.each(function() {
            var c = a(this)
              , d = c.data("bs.dropdown");
            d || c.data("bs.dropdown", d = new g(this)),
            "string" == typeof b && d[b].call(c)
        })
    }
    var e = ".dropdown-backdrop"
      , f = '[data-toggle="dropdown"]'
      , g = function(b) {
        a(b).on("click.bs.dropdown", this.toggle)
    };
    g.VERSION = "3.3.4",
    g.prototype.toggle = function(d) {
        var e = a(this);
        if (!e.is(".disabled, :disabled")) {
            var f = c(e)
              , g = f.hasClass("open");
            if (b(),
            !g) {
                "ontouchstart"in document.documentElement && !f.closest(".navbar-nav").length && a('<div class="dropdown-backdrop"/>').insertAfter(a(this)).on("click", b);
                var h = {
                    relatedTarget: this
                };
                if (f.trigger(d = a.Event("show.bs.dropdown", h)),
                d.isDefaultPrevented())
                    return;
                e.trigger("focus").attr("aria-expanded", "true"),
                f.toggleClass("open").trigger("shown.bs.dropdown", h)
            }
            return !1
        }
    }
    ,
    g.prototype.keydown = function(b) {
        if (/(38|40|27|32)/.test(b.which) && !/input|textarea/i.test(b.target.tagName)) {
            var d = a(this);
            if (b.preventDefault(),
            b.stopPropagation(),
            !d.is(".disabled, :disabled")) {
                var e = c(d)
                  , g = e.hasClass("open");
                if (!g && 27 != b.which || g && 27 == b.which)
                    return 27 == b.which && e.find(f).trigger("focus"),
                    d.trigger("click");
                var h = " li:not(.disabled):visible a"
                  , i = e.find('[role="menu"]' + h + ', [role="listbox"]' + h);
                if (i.length) {
                    var j = i.index(b.target);
                    38 == b.which && j > 0 && j--,
                    40 == b.which && j < i.length - 1 && j++,
                    ~j || (j = 0),
                    i.eq(j).trigger("focus")
                }
            }
        }
    }
    ;
    var h = a.fn.dropdown;
    a.fn.dropdown = d,
    a.fn.dropdown.Constructor = g,
    a.fn.dropdown.noConflict = function() {
        return a.fn.dropdown = h,
        this
    }
    ,
    a(document).on("click.bs.dropdown.data-api", b).on("click.bs.dropdown.data-api", ".dropdown form", function(a) {
        a.stopPropagation()
    }).on("click.bs.dropdown.data-api", f, g.prototype.toggle).on("keydown.bs.dropdown.data-api", f, g.prototype.keydown).on("keydown.bs.dropdown.data-api", '[role="menu"]', g.prototype.keydown).on("keydown.bs.dropdown.data-api", '[role="listbox"]', g.prototype.keydown)
}(jQuery),
+function(a) {
    "use strict";
    function b(b, d) {
        return this.each(function() {
            var e = a(this)
              , f = e.data("bs.modal")
              , g = a.extend({}, c.DEFAULTS, e.data(), "object" == typeof b && b);
            f || e.data("bs.modal", f = new c(this,g)),
            "string" == typeof b ? f[b](d) : g.show && f.show(d)
        })
    }
    var c = function(b, c) {
        this.options = c,
        this.$body = a(document.body),
        this.$element = a(b),
        this.$dialog = this.$element.find(".modal-dialog"),
        this.$backdrop = null,
        this.isShown = null,
        this.originalBodyPad = null,
        this.scrollbarWidth = 0,
        this.ignoreBackdropClick = !1,
        this.options.remote && this.$element.find(".modal-content").load(this.options.remote, a.proxy(function() {
            this.$element.trigger("loaded.bs.modal")
        }, this))
    };
    c.VERSION = "3.3.4",
    c.TRANSITION_DURATION = 300,
    c.BACKDROP_TRANSITION_DURATION = 150,
    c.DEFAULTS = {
        backdrop: !0,
        keyboard: !0,
        show: !0
    },
    c.prototype.toggle = function(a) {
        return this.isShown ? this.hide() : this.show(a)
    }
    ,
    c.prototype.show = function(b) {
        var d = this
          , e = a.Event("show.bs.modal", {
            relatedTarget: b
        });
        this.$element.trigger(e),
        this.isShown || e.isDefaultPrevented() || (this.isShown = !0,
        this.checkScrollbar(),
        this.setScrollbar(),
        this.$body.addClass("modal-open"),
        this.escape(),
        this.resize(),
        this.$element.on("click.dismiss.bs.modal", '[data-dismiss="modal"]', a.proxy(this.hide, this)),
        this.$dialog.on("mousedown.dismiss.bs.modal", function() {
            d.$element.one("mouseup.dismiss.bs.modal", function(b) {
                a(b.target).is(d.$element) && (d.ignoreBackdropClick = !0)
            })
        }),
        this.backdrop(function() {
            var e = a.support.transition && d.$element.hasClass("fade");
            d.$element.parent().length || d.$element.appendTo(d.$body),
            d.$element.show().scrollTop(0),
            d.adjustDialog(),
            e && d.$element[0].offsetWidth,
            d.$element.addClass("in").attr("aria-hidden", !1),
            d.enforceFocus();
            var f = a.Event("shown.bs.modal", {
                relatedTarget: b
            });
            e ? d.$dialog.one("bsTransitionEnd", function() {
                d.$element.trigger("focus").trigger(f)
            }).emulateTransitionEnd(c.TRANSITION_DURATION) : d.$element.trigger("focus").trigger(f)
        }))
    }
    ,
    c.prototype.hide = function(b) {
        b && b.preventDefault(),
        b = a.Event("hide.bs.modal"),
        this.$element.trigger(b),
        this.isShown && !b.isDefaultPrevented() && (this.isShown = !1,
        this.escape(),
        this.resize(),
        a(document).off("focusin.bs.modal"),
        this.$element.removeClass("in").attr("aria-hidden", !0).off("click.dismiss.bs.modal").off("mouseup.dismiss.bs.modal"),
        this.$dialog.off("mousedown.dismiss.bs.modal"),
        a.support.transition && this.$element.hasClass("fade") ? this.$element.one("bsTransitionEnd", a.proxy(this.hideModal, this)).emulateTransitionEnd(c.TRANSITION_DURATION) : this.hideModal())
    }
    ,
    c.prototype.enforceFocus = function() {/*var that = this
        $(document).on('focusin.modal', function (e) {
          if (that.$element[0] !== e.target && !that.$element.has(e.target).length) {
            that.$element.focus()
          }
        })*/
    }
    ,
    c.prototype.escape = function() {
        this.isShown && this.options.keyboard ? this.$element.on("keydown.dismiss.bs.modal", a.proxy(function(a) {
            27 == a.which && this.hide()
        }, this)) : this.isShown || this.$element.off("keydown.dismiss.bs.modal")
    }
    ,
    c.prototype.resize = function() {
        this.isShown ? a(window).on("resize.bs.modal", a.proxy(this.handleUpdate, this)) : a(window).off("resize.bs.modal")
    }
    ,
    c.prototype.hideModal = function() {
        var a = this;
        this.$element.hide(),
        this.backdrop(function() {
            a.$body.removeClass("modal-open"),
            a.resetAdjustments(),
            a.resetScrollbar(),
            a.$element.trigger("hidden.bs.modal")
        })
    }
    ,
    c.prototype.removeBackdrop = function() {
        this.$backdrop && this.$backdrop.remove(),
        this.$backdrop = null
    }
    ,
    c.prototype.backdrop = function(b) {
        var d = this
          , e = this.$element.hasClass("fade") ? "fade" : "";
        if (this.isShown && this.options.backdrop) {
            var f = a.support.transition && e;
            if (this.$backdrop = a('<div class="modal-backdrop ' + e + '" />').appendTo(this.$body),
            this.$element.on("click.dismiss.bs.modal", a.proxy(function(a) {
                return this.ignoreBackdropClick ? void (this.ignoreBackdropClick = !1) : void (a.target === a.currentTarget && ("static" == this.options.backdrop ? this.$element[0].focus() : this.hide()))
            }, this)),
            f && this.$backdrop[0].offsetWidth,
            this.$backdrop.addClass("in"),
            !b)
                return;
            f ? this.$backdrop.one("bsTransitionEnd", b).emulateTransitionEnd(c.BACKDROP_TRANSITION_DURATION) : b()
        } else if (!this.isShown && this.$backdrop) {
            this.$backdrop.removeClass("in");
            var g = function() {
                d.removeBackdrop(),
                b && b()
            };
            a.support.transition && this.$element.hasClass("fade") ? this.$backdrop.one("bsTransitionEnd", g).emulateTransitionEnd(c.BACKDROP_TRANSITION_DURATION) : g()
        } else
            b && b()
    }
    ,
    c.prototype.handleUpdate = function() {
        this.adjustDialog()
    }
    ,
    c.prototype.adjustDialog = function() {
        var a = this.$element[0].scrollHeight > document.documentElement.clientHeight;
        this.$element.css({
            paddingLeft: !this.bodyIsOverflowing && a ? this.scrollbarWidth : "",
            paddingRight: this.bodyIsOverflowing && !a ? this.scrollbarWidth : ""
        })
    }
    ,
    c.prototype.resetAdjustments = function() {
        this.$element.css({
            paddingLeft: "",
            paddingRight: ""
        })
    }
    ,
    c.prototype.checkScrollbar = function() {
        var a = window.innerWidth;
        if (!a) {
            var b = document.documentElement.getBoundingClientRect();
            a = b.right - Math.abs(b.left)
        }
        this.bodyIsOverflowing = document.body.clientWidth < a,
        this.scrollbarWidth = this.measureScrollbar()
    }
    ,
    c.prototype.setScrollbar = function() {
        var a = parseInt(this.$body.css("padding-right") || 0, 10);
        this.originalBodyPad = document.body.style.paddingRight || "",
        this.bodyIsOverflowing && this.$body.css("padding-right", a + this.scrollbarWidth)
    }
    ,
    c.prototype.resetScrollbar = function() {
        this.$body.css("padding-right", this.originalBodyPad)
    }
    ,
    c.prototype.measureScrollbar = function() {
        var a = document.createElement("div");
        a.className = "modal-scrollbar-measure",
        this.$body.append(a);
        var b = a.offsetWidth - a.clientWidth;
        return this.$body[0].removeChild(a),
        b
    }
    ;
    var d = a.fn.modal;
    a.fn.modal = b,
    a.fn.modal.Constructor = c,
    a.fn.modal.noConflict = function() {
        return a.fn.modal = d,
        this
    }
    ,
    a(document).on("click.bs.modal.data-api", '[data-toggle="modal"]', function(c) {
        var d = a(this)
          , e = d.attr("href")
          , f = a(d.attr("data-target") || e && e.replace(/.*(?=#[^\s]+$)/, ""))
          , g = f.data("bs.modal") ? "toggle" : a.extend({
            remote: !/#/.test(e) && e
        }, f.data(), d.data());
        d.is("a") && c.preventDefault(),
        f.one("show.bs.modal", function(a) {
            a.isDefaultPrevented() || f.one("hidden.bs.modal", function() {
                d.is(":visible") && d.trigger("focus")
            })
        }),
        b.call(f, g, this)
    })
}(jQuery),
+function(a) {
    "use strict";
    function b(b) {
        return this.each(function() {
            var d = a(this)
              , e = d.data("bs.tooltip")
              , f = "object" == typeof b && b;
            (e || !/destroy|hide/.test(b)) && (e || d.data("bs.tooltip", e = new c(this,f)),
            "string" == typeof b && e[b]())
        })
    }
    var c = function(a, b) {
        this.type = null,
        this.options = null,
        this.enabled = null,
        this.timeout = null,
        this.hoverState = null,
        this.$element = null,
        this.init("tooltip", a, b)
    };
    c.VERSION = "3.3.4",
    c.TRANSITION_DURATION = 150,
    c.DEFAULTS = {
        animation: !0,
        placement: "top",
        selector: !1,
        template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
        trigger: "hover focus",
        title: "",
        delay: 0,
        html: !1,
        container: !1,
        viewport: {
            selector: "body",
            padding: 0
        }
    },
    c.prototype.init = function(b, c, d) {
        if (this.enabled = !0,
        this.type = b,
        this.$element = a(c),
        this.options = this.getOptions(d),
        this.$viewport = this.options.viewport && a(this.options.viewport.selector || this.options.viewport),
        this.$element[0]instanceof document.constructor && !this.options.selector)
            throw new Error("`selector` option must be specified when initializing " + this.type + " on the window.document object!");
        for (var e = this.options.trigger.split(" "), f = e.length; f--; ) {
            var g = e[f];
            if ("click" == g)
                this.$element.on("click." + this.type, this.options.selector, a.proxy(this.toggle, this));
            else if ("manual" != g) {
                var h = "hover" == g ? "mouseenter" : "focusin"
                  , i = "hover" == g ? "mouseleave" : "focusout";
                this.$element.on(h + "." + this.type, this.options.selector, a.proxy(this.enter, this)),
                this.$element.on(i + "." + this.type, this.options.selector, a.proxy(this.leave, this))
            }
        }
        this.options.selector ? this._options = a.extend({}, this.options, {
            trigger: "manual",
            selector: ""
        }) : this.fixTitle()
    }
    ,
    c.prototype.getDefaults = function() {
        return c.DEFAULTS
    }
    ,
    c.prototype.getOptions = function(b) {
        return b = a.extend({}, this.getDefaults(), this.$element.data(), b),
        b.delay && "number" == typeof b.delay && (b.delay = {
            show: b.delay,
            hide: b.delay
        }),
        b
    }
    ,
    c.prototype.getDelegateOptions = function() {
        var b = {}
          , c = this.getDefaults();
        return this._options && a.each(this._options, function(a, d) {
            c[a] != d && (b[a] = d)
        }),
        b
    }
    ,
    c.prototype.enter = function(b) {
        var c = b instanceof this.constructor ? b : a(b.currentTarget).data("bs." + this.type);
        return c && c.$tip && c.$tip.is(":visible") ? void (c.hoverState = "in") : (c || (c = new this.constructor(b.currentTarget,this.getDelegateOptions()),
        a(b.currentTarget).data("bs." + this.type, c)),
        clearTimeout(c.timeout),
        c.hoverState = "in",
        c.options.delay && c.options.delay.show ? void (c.timeout = setTimeout(function() {
            "in" == c.hoverState && c.show()
        }, c.options.delay.show)) : c.show())
    }
    ,
    c.prototype.leave = function(b) {
        var c = b instanceof this.constructor ? b : a(b.currentTarget).data("bs." + this.type);
        return c || (c = new this.constructor(b.currentTarget,this.getDelegateOptions()),
        a(b.currentTarget).data("bs." + this.type, c)),
        clearTimeout(c.timeout),
        c.hoverState = "out",
        c.options.delay && c.options.delay.hide ? void (c.timeout = setTimeout(function() {
            "out" == c.hoverState && c.hide()
        }, c.options.delay.hide)) : c.hide()
    }
    ,
    c.prototype.show = function() {
        var b = a.Event("show.bs." + this.type);
        if (this.hasContent() && this.enabled) {
            this.$element.trigger(b);
            var d = a.contains(this.$element[0].ownerDocument.documentElement, this.$element[0]);
            if (b.isDefaultPrevented() || !d)
                return;
            var e = this
              , f = this.tip()
              , g = this.getUID(this.type);
            this.setContent(),
            f.attr("id", g),
            this.$element.attr("aria-describedby", g),
            this.options.animation && f.addClass("fade");
            var h = "function" == typeof this.options.placement ? this.options.placement.call(this, f[0], this.$element[0]) : this.options.placement
              , i = /\s?auto?\s?/i
              , j = i.test(h);
            j && (h = h.replace(i, "") || "top"),
            f.detach().css({
                top: 0,
                left: 0,
                display: "block"
            }).addClass(h).data("bs." + this.type, this),
            this.options.container ? f.appendTo(this.options.container) : f.insertAfter(this.$element);
            var k = this.getPosition()
              , l = f[0].offsetWidth
              , m = f[0].offsetHeight;
            if (j) {
                var n = h
                  , o = this.options.container ? a(this.options.container) : this.$element.parent()
                  , p = this.getPosition(o);
                h = "bottom" == h && k.bottom + m > p.bottom ? "top" : "top" == h && k.top - m < p.top ? "bottom" : "right" == h && k.right + l > p.width ? "left" : "left" == h && k.left - l < p.left ? "right" : h,
                f.removeClass(n).addClass(h)
            }
            var q = this.getCalculatedOffset(h, k, l, m);
            this.applyPlacement(q, h);
            var r = function() {
                var a = e.hoverState;
                e.$element.trigger("shown.bs." + e.type),
                e.hoverState = null,
                "out" == a && e.leave(e)
            };
            a.support.transition && this.$tip.hasClass("fade") ? f.one("bsTransitionEnd", r).emulateTransitionEnd(c.TRANSITION_DURATION) : r()
        }
    }
    ,
    c.prototype.applyPlacement = function(b, c) {
        var d = this.tip()
          , e = d[0].offsetWidth
          , f = d[0].offsetHeight
          , g = parseInt(d.css("margin-top"), 10)
          , h = parseInt(d.css("margin-left"), 10);
        isNaN(g) && (g = 0),
        isNaN(h) && (h = 0),
        b.top = b.top + g,
        b.left = b.left + h,
        a.offset.setOffset(d[0], a.extend({
            using: function(a) {
                d.css({
                    top: Math.round(a.top),
                    left: Math.round(a.left)
                })
            }
        }, b), 0),
        d.addClass("in");
        var i = d[0].offsetWidth
          , j = d[0].offsetHeight;
        "top" == c && j != f && (b.top = b.top + f - j);
        var k = this.getViewportAdjustedDelta(c, b, i, j);
        k.left ? b.left += k.left : b.top += k.top;
        var l = /top|bottom/.test(c)
          , m = l ? 2 * k.left - e + i : 2 * k.top - f + j
          , n = l ? "offsetWidth" : "offsetHeight";
        d.offset(b),
        this.replaceArrow(m, d[0][n], l)
    }
    ,
    c.prototype.replaceArrow = function(a, b, c) {
        this.arrow().css(c ? "left" : "top", 50 * (1 - a / b) + "%").css(c ? "top" : "left", "")
    }
    ,
    c.prototype.setContent = function() {
        var a = this.tip()
          , b = this.getTitle();
        a.find(".tooltip-inner")[this.options.html ? "html" : "text"](b),
        a.removeClass("fade in top bottom left right")
    }
    ,
    c.prototype.hide = function(b) {
        function d() {
            "in" != e.hoverState && f.detach(),
            e.$element.removeAttr("aria-describedby").trigger("hidden.bs." + e.type),
            b && b()
        }
        var e = this
          , f = a(this.$tip)
          , g = a.Event("hide.bs." + this.type);
        return this.$element.trigger(g),
        g.isDefaultPrevented() ? void 0 : (f.removeClass("in"),
        a.support.transition && f.hasClass("fade") ? f.one("bsTransitionEnd", d).emulateTransitionEnd(c.TRANSITION_DURATION) : d(),
        this.hoverState = null,
        this)
    }
    ,
    c.prototype.fixTitle = function() {
        var a = this.$element;
        (a.attr("title") || "string" != typeof a.attr("data-original-title")) && a.attr("data-original-title", a.attr("title") || "").attr("title", "")
    }
    ,
    c.prototype.hasContent = function() {
        return this.getTitle()
    }
    ,
    c.prototype.getPosition = function(b) {
        b = b || this.$element;
        var c = b[0]
          , d = "BODY" == c.tagName
          , e = c.getBoundingClientRect();
        null == e.width && (e = a.extend({}, e, {
            width: e.right - e.left,
            height: e.bottom - e.top
        }));
        var f = d ? {
            top: 0,
            left: 0
        } : b.offset()
          , g = {
            scroll: d ? document.documentElement.scrollTop || document.body.scrollTop : b.scrollTop()
        }
          , h = d ? {
            width: a(window).width(),
            height: a(window).height()
        } : null;
        return a.extend({}, e, g, h, f)
    }
    ,
    c.prototype.getCalculatedOffset = function(a, b, c, d) {
        return "bottom" == a ? {
            top: b.top + b.height,
            left: b.left + b.width / 2 - c / 2
        } : "top" == a ? {
            top: b.top - d,
            left: b.left + b.width / 2 - c / 2
        } : "left" == a ? {
            top: b.top + b.height / 2 - d / 2,
            left: b.left - c
        } : {
            top: b.top + b.height / 2 - d / 2,
            left: b.left + b.width
        }
    }
    ,
    c.prototype.getViewportAdjustedDelta = function(a, b, c, d) {
        var e = {
            top: 0,
            left: 0
        };
        if (!this.$viewport)
            return e;
        var f = this.options.viewport && this.options.viewport.padding || 0
          , g = this.getPosition(this.$viewport);
        if (/right|left/.test(a)) {
            var h = b.top - f - g.scroll
              , i = b.top + f - g.scroll + d;
            h < g.top ? e.top = g.top - h : i > g.top + g.height && (e.top = g.top + g.height - i)
        } else {
            var j = b.left - f
              , k = b.left + f + c;
            j < g.left ? e.left = g.left - j : k > g.width && (e.left = g.left + g.width - k)
        }
        return e
    }
    ,
    c.prototype.getTitle = function() {
        var a, b = this.$element, c = this.options;
        return a = b.attr("data-original-title") || ("function" == typeof c.title ? c.title.call(b[0]) : c.title)
    }
    ,
    c.prototype.getUID = function(a) {
        do
            a += ~~(1e6 * Math.random());
        while (document.getElementById(a));
        return a
    }
    ,
    c.prototype.tip = function() {
        return this.$tip = this.$tip || a(this.options.template)
    }
    ,
    c.prototype.arrow = function() {
        return this.$arrow = this.$arrow || this.tip().find(".tooltip-arrow")
    }
    ,
    c.prototype.enable = function() {
        this.enabled = !0
    }
    ,
    c.prototype.disable = function() {
        this.enabled = !1
    }
    ,
    c.prototype.toggleEnabled = function() {
        this.enabled = !this.enabled
    }
    ,
    c.prototype.toggle = function(b) {
        var c = this;
        b && (c = a(b.currentTarget).data("bs." + this.type),
        c || (c = new this.constructor(b.currentTarget,this.getDelegateOptions()),
        a(b.currentTarget).data("bs." + this.type, c))),
        c.tip().hasClass("in") ? c.leave(c) : c.enter(c)
    }
    ,
    c.prototype.destroy = function() {
        var a = this;
        clearTimeout(this.timeout),
        this.hide(function() {
            a.$element.off("." + a.type).removeData("bs." + a.type)
        })
    }
    ;
    var d = a.fn.tooltip;
    a.fn.tooltip = b,
    a.fn.tooltip.Constructor = c,
    a.fn.tooltip.noConflict = function() {
        return a.fn.tooltip = d,
        this
    }
}(jQuery),
+function(a) {
    "use strict";
    function b(b) {
        return this.each(function() {
            var d = a(this)
              , e = d.data("bs.popover")
              , f = "object" == typeof b && b;
            (e || !/destroy|hide/.test(b)) && (e || d.data("bs.popover", e = new c(this,f)),
            "string" == typeof b && e[b]())
        })
    }
    var c = function(a, b) {
        this.init("popover", a, b)
    };
    if (!a.fn.tooltip)
        throw new Error("Popover requires tooltip.js");
    c.VERSION = "3.3.4",
    c.DEFAULTS = a.extend({}, a.fn.tooltip.Constructor.DEFAULTS, {
        placement: "right",
        trigger: "click",
        content: "",
        template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'
    }),
    c.prototype = a.extend({}, a.fn.tooltip.Constructor.prototype),
    c.prototype.constructor = c,
    c.prototype.getDefaults = function() {
        return c.DEFAULTS
    }
    ,
    c.prototype.setContent = function() {
        var a = this.tip()
          , b = this.getTitle()
          , c = this.getContent();
        a.find(".popover-title")[this.options.html ? "html" : "text"](b),
        a.find(".popover-content").children().detach().end()[this.options.html ? "string" == typeof c ? "html" : "append" : "text"](c),
        a.removeClass("fade top bottom left right in"),
        a.find(".popover-title").html() || a.find(".popover-title").hide()
    }
    ,
    c.prototype.hasContent = function() {
        return this.getTitle() || this.getContent()
    }
    ,
    c.prototype.getContent = function() {
        var a = this.$element
          , b = this.options;
        return a.attr("data-content") || ("function" == typeof b.content ? b.content.call(a[0]) : b.content)
    }
    ,
    c.prototype.arrow = function() {
        return this.$arrow = this.$arrow || this.tip().find(".arrow")
    }
    ;
    var d = a.fn.popover;
    a.fn.popover = b,
    a.fn.popover.Constructor = c,
    a.fn.popover.noConflict = function() {
        return a.fn.popover = d,
        this
    }
}(jQuery),
+function(a) {
    "use strict";
    function b(c, d) {
        this.$body = a(document.body),
        this.$scrollElement = a(a(c).is(document.body) ? window : c),
        this.options = a.extend({}, b.DEFAULTS, d),
        this.selector = (this.options.target || "") + " .nav li > a",
        this.offsets = [],
        this.targets = [],
        this.activeTarget = null,
        this.scrollHeight = 0,
        this.$scrollElement.on("scroll.bs.scrollspy", a.proxy(this.process, this)),
        this.refresh(),
        this.process()
    }
    function c(c) {
        return this.each(function() {
            var d = a(this)
              , e = d.data("bs.scrollspy")
              , f = "object" == typeof c && c;
            e || d.data("bs.scrollspy", e = new b(this,f)),
            "string" == typeof c && e[c]()
        })
    }
    b.VERSION = "3.3.4",
    b.DEFAULTS = {
        offset: 10
    },
    b.prototype.getScrollHeight = function() {
        return this.$scrollElement[0].scrollHeight || Math.max(this.$body[0].scrollHeight, document.documentElement.scrollHeight)
    }
    ,
    b.prototype.refresh = function() {
        var b = this
          , c = "offset"
          , d = 0;
        this.offsets = [],
        this.targets = [],
        this.scrollHeight = this.getScrollHeight(),
        a.isWindow(this.$scrollElement[0]) || (c = "position",
        d = this.$scrollElement.scrollTop()),
        this.$body.find(this.selector).map(function() {
            var b = a(this)
              , e = b.data("target") || b.attr("href")
              , f = /^#./.test(e) && a(e);
            return f && f.length && f.is(":visible") && [[f[c]().top + d, e]] || null
        }).sort(function(a, b) {
            return a[0] - b[0]
        }).each(function() {
            b.offsets.push(this[0]),
            b.targets.push(this[1])
        })
    }
    ,
    b.prototype.process = function() {
        var a, b = this.$scrollElement.scrollTop() + this.options.offset, c = this.getScrollHeight(), d = this.options.offset + c - this.$scrollElement.height(), e = this.offsets, f = this.targets, g = this.activeTarget;
        if (this.scrollHeight != c && this.refresh(),
        b >= d)
            return g != (a = f[f.length - 1]) && this.activate(a);
        if (g && b < e[0])
            return this.activeTarget = null,
            this.clear();
        for (a = e.length; a--; )
            g != f[a] && b >= e[a] && (void 0 === e[a + 1] || b < e[a + 1]) && this.activate(f[a])
    }
    ,
    b.prototype.activate = function(b) {
        this.activeTarget = b,
        this.clear();
        var c = this.selector + '[data-target="' + b + '"],' + this.selector + '[href="' + b + '"]'
          , d = a(c).parents("li").addClass("active");
        d.parent(".dropdown-menu").length && (d = d.closest("li.dropdown").addClass("active")),
        d.trigger("activate.bs.scrollspy")
    }
    ,
    b.prototype.clear = function() {
        a(this.selector).parentsUntil(this.options.target, ".active").removeClass("active")
    }
    ;
    var d = a.fn.scrollspy;
    a.fn.scrollspy = c,
    a.fn.scrollspy.Constructor = b,
    a.fn.scrollspy.noConflict = function() {
        return a.fn.scrollspy = d,
        this
    }
    ,
    a(window).on("load.bs.scrollspy.data-api", function() {
        a('[data-spy="scroll"]').each(function() {
            var b = a(this);
            c.call(b, b.data())
        })
    })
}(jQuery),
+function(a) {
    "use strict";
    function b(b) {
        return this.each(function() {
            var d = a(this)
              , e = d.data("bs.tab");
            e || d.data("bs.tab", e = new c(this)),
            "string" == typeof b && e[b]()
        })
    }
    var c = function(b) {
        this.element = a(b)
    };
    c.VERSION = "3.3.4",
    c.TRANSITION_DURATION = 150,
    c.prototype.show = function() {
        var b = this.element
          , c = b.closest("ul:not(.dropdown-menu)")
          , d = b.data("target");
        if (d || (d = b.attr("href"),
        d = d && d.replace(/.*(?=#[^\s]*$)/, "")),
        !b.parent("li").hasClass("active")) {
            var e = c.find(".active:last a")
              , f = a.Event("hide.bs.tab", {
                relatedTarget: b[0]
            })
              , g = a.Event("show.bs.tab", {
                relatedTarget: e[0]
            });
            if (e.trigger(f),
            b.trigger(g),
            !g.isDefaultPrevented() && !f.isDefaultPrevented()) {
                var h = a(d);
                this.activate(b.closest("li"), c),
                this.activate(h, h.parent(), function() {
                    e.trigger({
                        type: "hidden.bs.tab",
                        relatedTarget: b[0]
                    }),
                    b.trigger({
                        type: "shown.bs.tab",
                        relatedTarget: e[0]
                    })
                })
            }
        }
    }
    ,
    c.prototype.activate = function(b, d, e) {
        function f() {
            g.removeClass("active").find("> .dropdown-menu > .active").removeClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !1),
            b.addClass("active").find('[data-toggle="tab"]').attr("aria-expanded", !0),
            h ? (b[0].offsetWidth,
            b.addClass("in")) : b.removeClass("fade"),
            b.parent(".dropdown-menu").length && b.closest("li.dropdown").addClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !0),
            e && e()
        }
        var g = d.find("> .active")
          , h = e && a.support.transition && (g.length && g.hasClass("fade") || !!d.find("> .fade").length);
        g.length && h ? g.one("bsTransitionEnd", f).emulateTransitionEnd(c.TRANSITION_DURATION) : f(),
        g.removeClass("in")
    }
    ;
    var d = a.fn.tab;
    a.fn.tab = b,
    a.fn.tab.Constructor = c,
    a.fn.tab.noConflict = function() {
        return a.fn.tab = d,
        this
    }
    ;
    var e = function(c) {
        c.preventDefault(),
        b.call(a(this), "show")
    };
    a(document).on("click.bs.tab.data-api", '[data-toggle="tab"]', e).on("click.bs.tab.data-api", '[data-toggle="pill"]', e)
}(jQuery),
+function(a) {
    "use strict";
    function b(b) {
        return this.each(function() {
            var d = a(this)
              , e = d.data("bs.affix")
              , f = "object" == typeof b && b;
            e || d.data("bs.affix", e = new c(this,f)),
            "string" == typeof b && e[b]()
        })
    }
    var c = function(b, d) {
        this.options = a.extend({}, c.DEFAULTS, d),
        this.$target = a(this.options.target).on("scroll.bs.affix.data-api", a.proxy(this.checkPosition, this)).on("click.bs.affix.data-api", a.proxy(this.checkPositionWithEventLoop, this)),
        this.$element = a(b),
        this.affixed = null,
        this.unpin = null,
        this.pinnedOffset = null,
        this.checkPosition()
    };
    c.VERSION = "3.3.4",
    c.RESET = "affix affix-top affix-bottom",
    c.DEFAULTS = {
        offset: 0,
        target: window
    },
    c.prototype.getState = function(a, b, c, d) {
        var e = this.$target.scrollTop()
          , f = this.$element.offset()
          , g = this.$target.height();
        if (null != c && "top" == this.affixed)
            return c > e ? "top" : !1;
        if ("bottom" == this.affixed)
            return null != c ? e + this.unpin <= f.top ? !1 : "bottom" : a - d >= e + g ? !1 : "bottom";
        var h = null == this.affixed
          , i = h ? e : f.top
          , j = h ? g : b;
        return null != c && c >= e ? "top" : null != d && i + j >= a - d ? "bottom" : !1
    }
    ,
    c.prototype.getPinnedOffset = function() {
        if (this.pinnedOffset)
            return this.pinnedOffset;
        this.$element.removeClass(c.RESET).addClass("affix");
        var a = this.$target.scrollTop()
          , b = this.$element.offset();
        return this.pinnedOffset = b.top - a
    }
    ,
    c.prototype.checkPositionWithEventLoop = function() {
        setTimeout(a.proxy(this.checkPosition, this), 1)
    }
    ,
    c.prototype.checkPosition = function() {
        if (this.$element.is(":visible")) {
            var b = this.$element.height()
              , d = this.options.offset
              , e = d.top
              , f = d.bottom
              , g = a(document.body).height();
            "object" != typeof d && (f = e = d),
            "function" == typeof e && (e = d.top(this.$element)),
            "function" == typeof f && (f = d.bottom(this.$element));
            var h = this.getState(g, b, e, f);
            if (this.affixed != h) {
                null != this.unpin && this.$element.css("top", "");
                var i = "affix" + (h ? "-" + h : "")
                  , j = a.Event(i + ".bs.affix");
                if (this.$element.trigger(j),
                j.isDefaultPrevented())
                    return;
                this.affixed = h,
                this.unpin = "bottom" == h ? this.getPinnedOffset() : null,
                this.$element.removeClass(c.RESET).addClass(i).trigger(i.replace("affix", "affixed") + ".bs.affix")
            }
            "bottom" == h && this.$element.offset({
                top: g - b - f
            })
        }
    }
    ;
    var d = a.fn.affix;
    a.fn.affix = b,
    a.fn.affix.Constructor = c,
    a.fn.affix.noConflict = function() {
        return a.fn.affix = d,
        this
    }
    ,
    a(window).on("load", function() {
        a('[data-spy="affix"]').each(function() {
            var c = a(this)
              , d = c.data();
            d.offset = d.offset || {},
            null != d.offsetBottom && (d.offset.bottom = d.offsetBottom),
            null != d.offsetTop && (d.offset.top = d.offsetTop),
            b.call(c, d)
        })
    })
}(jQuery);
;/*!
 * jQuery Mobile Events
 * by Ben Major
 *
 * Copyright 2011-2015, Ben Major
 * Licensed under the MIT License:
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 * 
 */
"use strict";
(function($) {
    $.attrFn = $.attrFn || {};
    var agent = navigator.userAgent.toLowerCase()
      , isChromeDesktop = (agent.indexOf('chrome') > -1 && ((agent.indexOf('windows') > -1) || (agent.indexOf('macintosh') > -1) || (agent.indexOf('linux') > -1)) && agent.indexOf('mobile') < 0 && agent.indexOf('android') < 0)
      , settings = {
        tap_pixel_range: 5,
        swipe_h_threshold: 100,
        swipe_v_threshold: 50,
        taphold_threshold: 750,
        doubletap_int: 500,
        touch_capable: ('ontouchstart'in window && !isChromeDesktop),
        orientation_support: ('orientation'in window && 'onorientationchange'in window),
        startevent: (('ontouchstart'in window && !isChromeDesktop) ? 'touchstart' : 'mousedown'),
        endevent: (('ontouchstart'in window && !isChromeDesktop) ? 'touchend' : 'mouseup'),
        moveevent: (('ontouchstart'in window && !isChromeDesktop) ? 'touchmove' : 'mousemove'),
        tapevent: ('ontouchstart'in window && !isChromeDesktop) ? 'tap' : 'click',
        scrollevent: ('ontouchstart'in window && !isChromeDesktop) ? 'touchmove' : 'scroll',
        hold_timer: null,
        tap_timer: null
    };
    $.isTouchCapable = function() {
        return settings.touch_capable;
    }
    ;
    $.getStartEvent = function() {
        return settings.startevent;
    }
    ;
    $.getEndEvent = function() {
        return settings.endevent;
    }
    ;
    $.getMoveEvent = function() {
        return settings.moveevent;
    }
    ;
    $.getTapEvent = function() {
        return settings.tapevent;
    }
    ;
    $.getScrollEvent = function() {
        return settings.scrollevent;
    }
    ;
    $.each(['tapstart', 'tapend', 'tapmove', 'tap', 'tap2', 'tap3', 'tap4', 'singletap', 'doubletap', 'taphold', 'swipe', 'swipeup', 'swiperight', 'swipedown', 'swipeleft', 'swipeend', 'scrollstart', 'scrollend', 'orientationchange'], function(i, name) {
        $.fn[name] = function(fn) {
            return fn ? this.on(name, fn) : this.trigger(name);
        }
        ;
        $.attrFn[name] = true;
    });
    $.event.special.tapstart = {
        setup: function() {
            var thisObject = this
              , $this = $(thisObject);
            $this.on(settings.startevent, function tapStartFunc(e) {
                $this.data('callee', tapStartFunc);
                if (e.which && e.which !== 1) {
                    return false;
                }
                var origEvent = e.originalEvent
                  , touchData = {
                    'position': {
                        'x': ((settings.touch_capable) ? origEvent.touches[0].screenX : e.screenX),
                        'y': (settings.touch_capable) ? origEvent.touches[0].screenY : e.screenY
                    },
                    'offset': {
                        'x': (settings.touch_capable) ? Math.round(origEvent.changedTouches[0].pageX - ($this.offset() ? $this.offset().left : 0)) : Math.round(e.pageX - ($this.offset() ? $this.offset().left : 0)),
                        'y': (settings.touch_capable) ? Math.round(origEvent.changedTouches[0].pageY - ($this.offset() ? $this.offset().top : 0)) : Math.round(e.pageY - ($this.offset() ? $this.offset().top : 0))
                    },
                    'time': Date.now(),
                    'target': e.target
                };
                triggerCustomEvent(thisObject, 'tapstart', e, touchData);
                return true;
            });
        },
        remove: function() {
            $(this).off(settings.startevent, $(this).data.callee);
        }
    };
    $.event.special.tapmove = {
        setup: function() {
            var thisObject = this
              , $this = $(thisObject);
            $this.on(settings.moveevent, function tapMoveFunc(e) {
                $this.data('callee', tapMoveFunc);
                var origEvent = e.originalEvent
                  , touchData = {
                    'position': {
                        'x': ((settings.touch_capable) ? origEvent.touches[0].screenX : e.screenX),
                        'y': (settings.touch_capable) ? origEvent.touches[0].screenY : e.screenY
                    },
                    'offset': {
                        'x': (settings.touch_capable) ? Math.round(origEvent.changedTouches[0].pageX - ($this.offset() ? $this.offset().left : 0)) : Math.round(e.pageX - ($this.offset() ? $this.offset().left : 0)),
                        'y': (settings.touch_capable) ? Math.round(origEvent.changedTouches[0].pageY - ($this.offset() ? $this.offset().top : 0)) : Math.round(e.pageY - ($this.offset() ? $this.offset().top : 0))
                    },
                    'time': Date.now(),
                    'target': e.target
                };
                triggerCustomEvent(thisObject, 'tapmove', e, touchData);
                return true;
            });
        },
        remove: function() {
            $(this).off(settings.moveevent, $(this).data.callee);
        }
    };
    $.event.special.tapend = {
        setup: function() {
            var thisObject = this
              , $this = $(thisObject);
            $this.on(settings.endevent, function tapEndFunc(e) {
                $this.data('callee', tapEndFunc);
                var origEvent = e.originalEvent;
                var touchData = {
                    'position': {
                        'x': (settings.touch_capable) ? origEvent.changedTouches[0].screenX : e.screenX,
                        'y': (settings.touch_capable) ? origEvent.changedTouches[0].screenY : e.screenY
                    },
                    'offset': {
                        'x': (settings.touch_capable) ? Math.round(origEvent.changedTouches[0].pageX - ($this.offset() ? $this.offset().left : 0)) : Math.round(e.pageX - ($this.offset() ? $this.offset().left : 0)),
                        'y': (settings.touch_capable) ? Math.round(origEvent.changedTouches[0].pageY - ($this.offset() ? $this.offset().top : 0)) : Math.round(e.pageY - ($this.offset() ? $this.offset().top : 0))
                    },
                    'time': Date.now(),
                    'target': e.target
                };
                triggerCustomEvent(thisObject, 'tapend', e, touchData);
                return true;
            });
        },
        remove: function() {
            $(this).off(settings.endevent, $(this).data.callee);
        }
    };
    $.event.special.taphold = {
        setup: function() {
            var thisObject = this, $this = $(thisObject), origTarget, start_pos = {
                x: 0,
                y: 0
            }, end_x = 0, end_y = 0;
            $this.on(settings.startevent, function tapHoldFunc1(e) {
                if (e.which && e.which !== 1) {
                    return false;
                } else {
                    $this.data('tapheld', false);
                    origTarget = e.target;
                    var origEvent = e.originalEvent;
                    var start_time = Date.now()
                      , startPosition = {
                        'x': (settings.touch_capable) ? origEvent.touches[0].screenX : e.screenX,
                        'y': (settings.touch_capable) ? origEvent.touches[0].screenY : e.screenY
                    }
                      , startOffset = {
                        'x': (settings.touch_capable) ? origEvent.touches[0].pageX - origEvent.touches[0].target.offsetLeft : e.offsetX,
                        'y': (settings.touch_capable) ? origEvent.touches[0].pageY - origEvent.touches[0].target.offsetTop : e.offsetY
                    };
                    start_pos.x = (e.originalEvent.targetTouches) ? e.originalEvent.targetTouches[0].pageX : e.pageX;
                    start_pos.y = (e.originalEvent.targetTouches) ? e.originalEvent.targetTouches[0].pageY : e.pageY;
                    end_x = start_pos.x;
                    end_y = start_pos.y;
                    settings.hold_timer = window.setTimeout(function() {
                        var diff_x = (start_pos.x - end_x)
                          , diff_y = (start_pos.y - end_y);
                        if (e.target == origTarget && ((start_pos.x == end_x && start_pos.y == end_y) || (diff_x >= -(settings.tap_pixel_range) && diff_x <= settings.tap_pixel_range && diff_y >= -(settings.tap_pixel_range) && diff_y <= settings.tap_pixel_range))) {
                            $this.data('tapheld', true);
                            var end_time = Date.now()
                              , endPosition = {
                                'x': (settings.touch_capable) ? origEvent.touches[0].screenX : e.screenX,
                                'y': (settings.touch_capable) ? origEvent.touches[0].screenY : e.screenY
                            }
                              , endOffset = {
                                'x': (settings.touch_capable) ? Math.round(origEvent.changedTouches[0].pageX - ($this.offset() ? $this.offset().left : 0)) : Math.round(e.pageX - ($this.offset() ? $this.offset().left : 0)),
                                'y': (settings.touch_capable) ? Math.round(origEvent.changedTouches[0].pageY - ($this.offset() ? $this.offset().top : 0)) : Math.round(e.pageY - ($this.offset() ? $this.offset().top : 0))
                            };
                            var duration = end_time - start_time;
                            var touchData = {
                                'startTime': start_time,
                                'endTime': end_time,
                                'startPosition': startPosition,
                                'startOffset': startOffset,
                                'endPosition': endPosition,
                                'endOffset': endOffset,
                                'duration': duration,
                                'target': e.target
                            };
                            $this.data('callee1', tapHoldFunc1);
                            triggerCustomEvent(thisObject, 'taphold', e, touchData);
                        }
                    }, settings.taphold_threshold);
                    return true;
                }
            }).on(settings.endevent, function tapHoldFunc2() {
                $this.data('callee2', tapHoldFunc2);
                $this.data('tapheld', false);
                window.clearTimeout(settings.hold_timer);
            }).on(settings.moveevent, function tapHoldFunc3(e) {
                $this.data('callee3', tapHoldFunc3);
                end_x = (e.originalEvent.targetTouches) ? e.originalEvent.targetTouches[0].pageX : e.pageX;
                end_y = (e.originalEvent.targetTouches) ? e.originalEvent.targetTouches[0].pageY : e.pageY;
            });
        },
        remove: function() {
            $(this).off(settings.startevent, $(this).data.callee1).off(settings.endevent, $(this).data.callee2).off(settings.moveevent, $(this).data.callee3);
        }
    };
    $.event.special.doubletap = {
        setup: function() {
            var thisObject = this, $this = $(thisObject), origTarget, action, firstTap = null, origEvent, cooloff, cooling = false;
            $this.on(settings.startevent, function doubleTapFunc1(e) {
                if (e.which && e.which !== 1) {
                    return false;
                }
                $this.data('doubletapped', false);
                origTarget = e.target;
                $this.data('callee1', doubleTapFunc1);
                origEvent = e.originalEvent;
                if (!firstTap) {
                    firstTap = {
                        'position': {
                            'x': (settings.touch_capable) ? origEvent.touches[0].screenX : e.screenX,
                            'y': (settings.touch_capable) ? origEvent.touches[0].screenY : e.screenY
                        },
                        'offset': {
                            'x': (settings.touch_capable) ? Math.round(origEvent.changedTouches[0].pageX - ($this.offset() ? $this.offset().left : 0)) : Math.round(e.pageX - ($this.offset() ? $this.offset().left : 0)),
                            'y': (settings.touch_capable) ? Math.round(origEvent.changedTouches[0].pageY - ($this.offset() ? $this.offset().top : 0)) : Math.round(e.pageY - ($this.offset() ? $this.offset().top : 0))
                        },
                        'time': Date.now(),
                        'target': e.target
                    };
                }
                return true;
            }).on(settings.endevent, function doubleTapFunc2(e) {
                var now = Date.now();
                var lastTouch = $this.data('lastTouch') || now + 1;
                var delta = now - lastTouch;
                window.clearTimeout(action);
                $this.data('callee2', doubleTapFunc2);
                if (delta < settings.doubletap_int && (e.target == origTarget) && delta > 100) {
                    $this.data('doubletapped', true);
                    window.clearTimeout(settings.tap_timer);
                    var lastTap = {
                        'position': {
                            'x': (settings.touch_capable) ? e.originalEvent.changedTouches[0].screenX : e.screenX,
                            'y': (settings.touch_capable) ? e.originalEvent.changedTouches[0].screenY : e.screenY
                        },
                        'offset': {
                            'x': (settings.touch_capable) ? Math.round(origEvent.changedTouches[0].pageX - ($this.offset() ? $this.offset().left : 0)) : Math.round(e.pageX - ($this.offset() ? $this.offset().left : 0)),
                            'y': (settings.touch_capable) ? Math.round(origEvent.changedTouches[0].pageY - ($this.offset() ? $this.offset().top : 0)) : Math.round(e.pageY - ($this.offset() ? $this.offset().top : 0))
                        },
                        'time': Date.now(),
                        'target': e.target
                    };
                    var touchData = {
                        'firstTap': firstTap,
                        'secondTap': lastTap,
                        'interval': lastTap.time - firstTap.time
                    };
                    if (!cooling) {
                        triggerCustomEvent(thisObject, 'doubletap', e, touchData);
                        firstTap = null;
                    }
                    cooling = true;
                    cooloff = window.setTimeout(function() {
                        cooling = false;
                    }, settings.doubletap_int);
                } else {
                    $this.data('lastTouch', now);
                    action = window.setTimeout(function() {
                        firstTap = null;
                        window.clearTimeout(action);
                    }, settings.doubletap_int, [e]);
                }
                $this.data('lastTouch', now);
            });
        },
        remove: function() {
            $(this).off(settings.startevent, $(this).data.callee1).off(settings.endevent, $(this).data.callee2);
        }
    };
    $.event.special.singletap = {
        setup: function() {
            var thisObject = this
              , $this = $(thisObject)
              , origTarget = null
              , startTime = null
              , start_pos = {
                x: 0,
                y: 0
            };
            $this.on(settings.startevent, function singleTapFunc1(e) {
                if (e.which && e.which !== 1) {
                    return false;
                } else {
                    startTime = Date.now();
                    origTarget = e.target;
                    $this.data('callee1', singleTapFunc1);
                    start_pos.x = (e.originalEvent.targetTouches) ? e.originalEvent.targetTouches[0].pageX : e.pageX;
                    start_pos.y = (e.originalEvent.targetTouches) ? e.originalEvent.targetTouches[0].pageY : e.pageY;
                    return true;
                }
            }).on(settings.endevent, function singleTapFunc2(e) {
                $this.data('callee2', singleTapFunc2);
                if (e.target == origTarget) {
                    var end_pos_x = (e.originalEvent.changedTouches) ? e.originalEvent.changedTouches[0].pageX : e.pageX
                      , end_pos_y = (e.originalEvent.changedTouches) ? e.originalEvent.changedTouches[0].pageY : e.pageY;
                    settings.tap_timer = window.setTimeout(function() {
                        var diff_x = (start_pos.x - end_pos_x)
                          , diff_y = (start_pos.y - end_pos_y);
                        if (!$this.data('doubletapped') && !$this.data('tapheld') && (((start_pos.x == end_pos_x) && (start_pos.y == end_pos_y)) || (diff_x >= -(settings.tap_pixel_range) && diff_x <= settings.tap_pixel_range && diff_y >= -(settings.tap_pixel_range) && diff_y <= settings.tap_pixel_range))) {
                            var origEvent = e.originalEvent;
                            var touchData = {
                                'position': {
                                    'x': (settings.touch_capable) ? origEvent.changedTouches[0].screenX : e.screenX,
                                    'y': (settings.touch_capable) ? origEvent.changedTouches[0].screenY : e.screenY
                                },
                                'offset': {
                                    'x': (settings.touch_capable) ? Math.round(origEvent.changedTouches[0].pageX - ($this.offset() ? $this.offset().left : 0)) : Math.round(e.pageX - ($this.offset() ? $this.offset().left : 0)),
                                    'y': (settings.touch_capable) ? Math.round(origEvent.changedTouches[0].pageY - ($this.offset() ? $this.offset().top : 0)) : Math.round(e.pageY - ($this.offset() ? $this.offset().top : 0))
                                },
                                'time': Date.now(),
                                'target': e.target
                            };
                            if ((touchData.time - startTime) < settings.taphold_threshold) {
                                triggerCustomEvent(thisObject, 'singletap', e, touchData);
                            }
                        }
                    }, settings.doubletap_int);
                }
            });
        },
        remove: function() {
            $(this).off(settings.startevent, $(this).data.callee1).off(settings.endevent, $(this).data.callee2);
        }
    };
    $.event.special.tap = {
        setup: function() {
            var thisObject = this, $this = $(thisObject), started = false, origTarget = null, start_time, start_pos = {
                x: 0,
                y: 0
            }, touches;
            $this.on(settings.startevent, function tapFunc1(e) {
                $this.data('callee1', tapFunc1);
                if (e.which && e.which !== 1) {
                    return false;
                } else {
                    started = true;
                    start_pos.x = (e.originalEvent.targetTouches) ? e.originalEvent.targetTouches[0].pageX : e.pageX;
                    start_pos.y = (e.originalEvent.targetTouches) ? e.originalEvent.targetTouches[0].pageY : e.pageY;
                    start_time = Date.now();
                    origTarget = e.target;
                    touches = (e.originalEvent.targetTouches) ? e.originalEvent.targetTouches : [e];
                    return true;
                }
            }).on(settings.endevent, function tapFunc2(e) {
                $this.data('callee2', tapFunc2);
                var end_x = (e.originalEvent.targetTouches) ? e.originalEvent.changedTouches[0].pageX : e.pageX, end_y = (e.originalEvent.targetTouches) ? e.originalEvent.changedTouches[0].pageY : e.pageY, diff_x = (start_pos.x - end_x), diff_y = (start_pos.y - end_y), eventName;
                if (origTarget == e.target && started && ((Date.now() - start_time) < settings.taphold_threshold) && ((start_pos.x == end_x && start_pos.y == end_y) || (diff_x >= -(settings.tap_pixel_range) && diff_x <= settings.tap_pixel_range && diff_y >= -(settings.tap_pixel_range) && diff_y <= settings.tap_pixel_range))) {
                    var origEvent = e.originalEvent;
                    var touchData = [];
                    for (var i = 0; i < touches.length; i++) {
                        var touch = {
                            'position': {
                                'x': (settings.touch_capable) ? origEvent.changedTouches[i].screenX : e.screenX,
                                'y': (settings.touch_capable) ? origEvent.changedTouches[i].screenY : e.screenY
                            },
                            'offset': {
                                'x': (settings.touch_capable) ? Math.round(origEvent.changedTouches[i].pageX - ($this.offset() ? $this.offset().left : 0)) : Math.round(e.pageX - ($this.offset() ? $this.offset().left : 0)),
                                'y': (settings.touch_capable) ? Math.round(origEvent.changedTouches[i].pageY - ($this.offset() ? $this.offset().top : 0)) : Math.round(e.pageY - ($this.offset() ? $this.offset().top : 0))
                            },
                            'time': Date.now(),
                            'target': e.target
                        };
                        touchData.push(touch);
                    }
                    triggerCustomEvent(thisObject, 'tap', e, touchData);
                }
            });
        },
        remove: function() {
            $(this).off(settings.startevent, $(this).data.callee1).off(settings.endevent, $(this).data.callee2);
        }
    };
    $.event.special.swipe = {
        setup: function() {
            var thisObject = this, $this = $(thisObject), started = false, hasSwiped = false, originalCoord = {
                x: 0,
                y: 0
            }, finalCoord = {
                x: 0,
                y: 0
            }, startEvnt;
            function touchStart(e) {
                $this = $(e.currentTarget);
                $this.data('callee1', touchStart);
                originalCoord.x = (e.originalEvent.targetTouches) ? e.originalEvent.targetTouches[0].pageX : e.pageX;
                originalCoord.y = (e.originalEvent.targetTouches) ? e.originalEvent.targetTouches[0].pageY : e.pageY;
                finalCoord.x = originalCoord.x;
                finalCoord.y = originalCoord.y;
                started = true;
                var origEvent = e.originalEvent;
                startEvnt = {
                    'position': {
                        'x': (settings.touch_capable) ? origEvent.touches[0].screenX : e.screenX,
                        'y': (settings.touch_capable) ? origEvent.touches[0].screenY : e.screenY
                    },
                    'offset': {
                        'x': (settings.touch_capable) ? Math.round(origEvent.changedTouches[0].pageX - ($this.offset() ? $this.offset().left : 0)) : Math.round(e.pageX - ($this.offset() ? $this.offset().left : 0)),
                        'y': (settings.touch_capable) ? Math.round(origEvent.changedTouches[0].pageY - ($this.offset() ? $this.offset().top : 0)) : Math.round(e.pageY - ($this.offset() ? $this.offset().top : 0))
                    },
                    'time': Date.now(),
                    'target': e.target
                };
            }
            function touchMove(e) {
                $this = $(e.currentTarget);
                $this.data('callee2', touchMove);
                finalCoord.x = (e.originalEvent.targetTouches) ? e.originalEvent.targetTouches[0].pageX : e.pageX;
                finalCoord.y = (e.originalEvent.targetTouches) ? e.originalEvent.targetTouches[0].pageY : e.pageY;
                var swipedir;
                var ele_x_threshold = ($this.parent().data('xthreshold')) ? $this.parent().data('xthreshold') : $this.data('xthreshold')
                  , ele_y_threshold = ($this.parent().data('ythreshold')) ? $this.parent().data('ythreshold') : $this.data('ythreshold')
                  , h_threshold = (typeof ele_x_threshold !== 'undefined' && ele_x_threshold !== false && parseInt(ele_x_threshold)) ? parseInt(ele_x_threshold) : settings.swipe_h_threshold
                  , v_threshold = (typeof ele_y_threshold !== 'undefined' && ele_y_threshold !== false && parseInt(ele_y_threshold)) ? parseInt(ele_y_threshold) : settings.swipe_v_threshold;
                if (originalCoord.y > finalCoord.y && (originalCoord.y - finalCoord.y > v_threshold)) {
                    swipedir = 'swipeup';
                }
                if (originalCoord.x < finalCoord.x && (finalCoord.x - originalCoord.x > h_threshold)) {
                    swipedir = 'swiperight';
                }
                if (originalCoord.y < finalCoord.y && (finalCoord.y - originalCoord.y > v_threshold)) {
                    swipedir = 'swipedown';
                }
                if (originalCoord.x > finalCoord.x && (originalCoord.x - finalCoord.x > h_threshold)) {
                    swipedir = 'swipeleft';
                }
                if (swipedir != undefined && started) {
                    originalCoord.x = 0;
                    originalCoord.y = 0;
                    finalCoord.x = 0;
                    finalCoord.y = 0;
                    started = false;
                    var origEvent = e.originalEvent;
                    var endEvnt = {
                        'position': {
                            'x': (settings.touch_capable) ? origEvent.touches[0].screenX : e.screenX,
                            'y': (settings.touch_capable) ? origEvent.touches[0].screenY : e.screenY
                        },
                        'offset': {
                            'x': (settings.touch_capable) ? Math.round(origEvent.changedTouches[0].pageX - ($this.offset() ? $this.offset().left : 0)) : Math.round(e.pageX - ($this.offset() ? $this.offset().left : 0)),
                            'y': (settings.touch_capable) ? Math.round(origEvent.changedTouches[0].pageY - ($this.offset() ? $this.offset().top : 0)) : Math.round(e.pageY - ($this.offset() ? $this.offset().top : 0))
                        },
                        'time': Date.now(),
                        'target': e.target
                    };
                    var xAmount = Math.abs(startEvnt.position.x - endEvnt.position.x)
                      , yAmount = Math.abs(startEvnt.position.y - endEvnt.position.y);
                    var touchData = {
                        'startEvnt': startEvnt,
                        'endEvnt': endEvnt,
                        'direction': swipedir.replace('swipe', ''),
                        'xAmount': xAmount,
                        'yAmount': yAmount,
                        'duration': endEvnt.time - startEvnt.time
                    };
                    hasSwiped = true;
                    $this.trigger('swipe', touchData).trigger(swipedir, touchData);
                }
            }
            function touchEnd(e) {
                $this = $(e.currentTarget);
                var swipedir = "";
                $this.data('callee3', touchEnd);
                if (hasSwiped) {
                    var ele_x_threshold = $this.data('xthreshold')
                      , ele_y_threshold = $this.data('ythreshold')
                      , h_threshold = (typeof ele_x_threshold !== 'undefined' && ele_x_threshold !== false && parseInt(ele_x_threshold)) ? parseInt(ele_x_threshold) : settings.swipe_h_threshold
                      , v_threshold = (typeof ele_y_threshold !== 'undefined' && ele_y_threshold !== false && parseInt(ele_y_threshold)) ? parseInt(ele_y_threshold) : settings.swipe_v_threshold;
                    var origEvent = e.originalEvent;
                    var endEvnt = {
                        'position': {
                            'x': (settings.touch_capable) ? origEvent.changedTouches[0].screenX : e.screenX,
                            'y': (settings.touch_capable) ? origEvent.changedTouches[0].screenY : e.screenY
                        },
                        'offset': {
                            'x': (settings.touch_capable) ? Math.round(origEvent.changedTouches[0].pageX - ($this.offset() ? $this.offset().left : 0)) : Math.round(e.pageX - ($this.offset() ? $this.offset().left : 0)),
                            'y': (settings.touch_capable) ? Math.round(origEvent.changedTouches[0].pageY - ($this.offset() ? $this.offset().top : 0)) : Math.round(e.pageY - ($this.offset() ? $this.offset().top : 0))
                        },
                        'time': Date.now(),
                        'target': e.target
                    };
                    if (startEvnt.position.y > endEvnt.position.y && (startEvnt.position.y - endEvnt.position.y > v_threshold)) {
                        swipedir = 'swipeup';
                    }
                    if (startEvnt.position.x < endEvnt.position.x && (endEvnt.position.x - startEvnt.position.x > h_threshold)) {
                        swipedir = 'swiperight';
                    }
                    if (startEvnt.position.y < endEvnt.position.y && (endEvnt.position.y - startEvnt.position.y > v_threshold)) {
                        swipedir = 'swipedown';
                    }
                    if (startEvnt.position.x > endEvnt.position.x && (startEvnt.position.x - endEvnt.position.x > h_threshold)) {
                        swipedir = 'swipeleft';
                    }
                    var xAmount = Math.abs(startEvnt.position.x - endEvnt.position.x)
                      , yAmount = Math.abs(startEvnt.position.y - endEvnt.position.y);
                    var touchData = {
                        'startEvnt': startEvnt,
                        'endEvnt': endEvnt,
                        'direction': swipedir.replace('swipe', ''),
                        'xAmount': xAmount,
                        'yAmount': yAmount,
                        'duration': endEvnt.time - startEvnt.time
                    };
                    $this.trigger('swipeend', touchData);
                }
                started = false;
                hasSwiped = false;
            }
            $this.on(settings.startevent, touchStart);
            $this.on(settings.moveevent, touchMove);
            $this.on(settings.endevent, touchEnd);
        },
        remove: function() {
            $(this).off(settings.startevent, $(this).data.callee1).off(settings.moveevent, $(this).data.callee2).off(settings.endevent, $(this).data.callee3);
        }
    };
    $.event.special.scrollstart = {
        setup: function() {
            var thisObject = this, $this = $(thisObject), scrolling, timer;
            function trigger(event, state) {
                scrolling = state;
                triggerCustomEvent(thisObject, scrolling ? 'scrollstart' : 'scrollend', event);
            }
            $this.on(settings.scrollevent, function scrollFunc(event) {
                $this.data('callee', scrollFunc);
                if (!scrolling) {
                    trigger(event, true);
                }
                clearTimeout(timer);
                timer = setTimeout(function() {
                    trigger(event, false);
                }, 50);
            });
        },
        remove: function() {
            $(this).off(settings.scrollevent, $(this).data.callee);
        }
    };
    var win = $(window), special_event, get_orientation, last_orientation, initial_orientation_is_landscape, initial_orientation_is_default, portrait_map = {
        '0': true,
        '180': true
    };
    if (settings.orientation_support) {
        var ww = window.innerWidth || win.width()
          , wh = window.innerHeight || win.height()
          , landscape_threshold = 50;
        initial_orientation_is_landscape = ww > wh && (ww - wh) > landscape_threshold;
        initial_orientation_is_default = portrait_map[window.orientation];
        if ((initial_orientation_is_landscape && initial_orientation_is_default) || (!initial_orientation_is_landscape && !initial_orientation_is_default)) {
            portrait_map = {
                '-90': true,
                '90': true
            };
        }
    }
    $.event.special.orientationchange = special_event = {
        setup: function() {
            if (settings.orientation_support) {
                return false;
            }
            last_orientation = get_orientation();
            win.on('throttledresize', handler);
            return true;
        },
        teardown: function() {
            if (settings.orientation_support) {
                return false;
            }
            win.off('throttledresize', handler);
            return true;
        },
        add: function(handleObj) {
            var old_handler = handleObj.handler;
            handleObj.handler = function(event) {
                event.orientation = get_orientation();
                return old_handler.apply(this, arguments);
            }
            ;
        }
    };
    function handler() {
        var orientation = get_orientation();
        if (orientation !== last_orientation) {
            last_orientation = orientation;
            win.trigger("orientationchange");
        }
    }
    $.event.special.orientationchange.orientation = get_orientation = function() {
        var isPortrait = true
          , elem = document.documentElement;
        if (settings.orientation_support) {
            isPortrait = portrait_map[window.orientation];
        } else {
            isPortrait = elem && elem.clientWidth / elem.clientHeight < 1.1;
        }
        return isPortrait ? 'portrait' : 'landscape';
    }
    ;
    $.event.special.throttledresize = {
        setup: function() {
            $(this).on('resize', throttle_handler);
        },
        teardown: function() {
            $(this).off('resize', throttle_handler);
        }
    };
    var throttle = 250, throttle_handler = function() {
        curr = Date.now();
        diff = curr - lastCall;
        if (diff >= throttle) {
            lastCall = curr;
            $(this).trigger('throttledresize');
        } else {
            if (heldCall) {
                window.clearTimeout(heldCall);
            }
            heldCall = window.setTimeout(handler, throttle - diff);
        }
    }, lastCall = 0, heldCall, curr, diff;
    function triggerCustomEvent(obj, eventType, event, touchData) {
        var originalType = event.type;
        event.type = eventType;
        $.event.dispatch.call(obj, event, touchData);
        event.type = originalType;
    }
    $.each({
        scrollend: 'scrollstart',
        swipeup: 'swipe',
        swiperight: 'swipe',
        swipedown: 'swipe',
        swipeleft: 'swipe',
        swipeend: 'swipe',
        tap2: 'tap'
    }, function(e, srcE) {
        $.event.special[e] = {
            setup: function() {
                $(this).on(srcE, $.noop);
            }
        };
    });
}(jQuery));
;;VHV.setAllLinks('/3rdparty/mobility/vendor/jquery.mobile-events.js', 2);
VHV.allOrderedLinks.push(location.protocol + '//' + location.hostname + '/3rdparty/mobility/vendor/jquery.mobile-events.js');
