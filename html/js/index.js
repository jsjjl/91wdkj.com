! function(t, e) {
	"object" == typeof module && "object" == typeof module.exports ? module.exports = t.document ? e(t, !0) : function(t) {
		if (!t.document) throw new Error("jQuery requires a window with a document");
		return e(t)
	} : e(t)
}("undefined" != typeof window ? window : this, function(t, e) {
	function i(t) {
		var e = t.length,
			i = Q.type(t);
		return "function" === i || Q.isWindow(t) ? !1 : 1 === t.nodeType && e ? !0 : "array" === i || 0 === e || "number" == typeof e && e > 0 && e - 1 in t
	}

	function n(t, e, i) {
		if (Q.isFunction(e)) return Q.grep(t, function(t, n) {
			return !!e.call(t, n, t) !== i
		});
		if (e.nodeType) return Q.grep(t, function(t) {
			return t === e !== i
		});
		if ("string" == typeof e) {
			if (ae.test(e)) return Q.filter(e, t, i);
			e = Q.filter(e, t)
		}
		return Q.grep(t, function(t) {
			return Z.call(e, t) >= 0 !== i
		})
	}

	function o(t, e) {
		for (;
			(t = t[e]) && 1 !== t.nodeType;);
		return t
	}

	function s(t) {
		var e = fe[t] = {};
		return Q.each(t.match(de) || [], function(t, i) {
			e[i] = !0
		}), e
	}

	function r() {
		Y.removeEventListener("DOMContentLoaded", r, !1), t.removeEventListener("load", r, !1), Q.ready()
	}

	function a() {
		Object.defineProperty(this.cache = {}, 0, {
			get: function() {
				return {}
			}
		}), this.expando = Q.expando + a.uid++
	}

	function l(t, e, i) {
		var n;
		if (void 0 === i && 1 === t.nodeType)
			if (n = "data-" + e.replace(Te, "-$1").toLowerCase(), i = t.getAttribute(n), "string" == typeof i) {
				try {
					i = "true" === i ? !0 : "false" === i ? !1 : "null" === i ? null : +i + "" === i ? +i : ye.test(i) ? Q.parseJSON(i) : i
				} catch (o) {}
				_e.set(t, e, i)
			} else i = void 0;
		return i
	}

	function u() {
		return !0
	}

	function c() {
		return !1
	}

	function h() {
		try {
			return Y.activeElement
		} catch (t) {}
	}

	function p(t, e) {
		return Q.nodeName(t, "table") && Q.nodeName(11 !== e.nodeType ? e : e.firstChild, "tr") ? t.getElementsByTagName("tbody")[0] || t.appendChild(t.ownerDocument.createElement("tbody")) : t
	}

	function d(t) {
		return t.type = (null !== t.getAttribute("type")) + "/" + t.type, t
	}

	function f(t) {
		var e = Re.exec(t.type);
		return e ? t.type = e[1] : t.removeAttribute("type"), t
	}

	function m(t, e) {
		for (var i = 0, n = t.length; n > i; i++) ve.set(t[i], "globalEval", !e || ve.get(e[i], "globalEval"))
	}

	function g(t, e) {
		var i, n, o, s, r, a, l, u;
		if (1 === e.nodeType) {
			if (ve.hasData(t) && (s = ve.access(t), r = ve.set(e, s), u = s.events)) {
				delete r.handle, r.events = {};
				for (o in u)
					for (i = 0, n = u[o].length; n > i; i++) Q.event.add(e, o, u[o][i])
			}
			_e.hasData(t) && (a = _e.access(t), l = Q.extend({}, a), _e.set(e, l))
		}
	}

	function v(t, e) {
		var i = t.getElementsByTagName ? t.getElementsByTagName(e || "*") : t.querySelectorAll ? t.querySelectorAll(e || "*") : [];
		return void 0 === e || e && Q.nodeName(t, e) ? Q.merge([t], i) : i
	}

	function _(t, e) {
		var i = e.nodeName.toLowerCase();
		"input" === i && xe.test(t.type) ? e.checked = t.checked : ("input" === i || "textarea" === i) && (e.defaultValue = t.defaultValue)
	}

	function y(e, i) {
		var n, o = Q(i.createElement(e)).appendTo(i.body),
			s = t.getDefaultComputedStyle && (n = t.getDefaultComputedStyle(o[0])) ? n.display : Q.css(o[0], "display");
		return o.detach(), s
	}

	function T(t) {
		var e = Y,
			i = Be[t];
		return i || (i = y(t, e), "none" !== i && i || (He = (He || Q("<iframe frameborder='0' width='0' height='0'/>")).appendTo(e.documentElement), e = He[0].contentDocument, e.write(), e.close(), i = y(t, e), He.detach()), Be[t] = i), i
	}

	function b(t, e, i) {
		var n, o, s, r, a = t.style;
		return i = i || Fe(t), i && (r = i.getPropertyValue(e) || i[e]), i && ("" !== r || Q.contains(t.ownerDocument, t) || (r = Q.style(t, e)), $e.test(r) && je.test(e) && (n = a.width, o = a.minWidth, s = a.maxWidth, a.minWidth = a.maxWidth = a.width = r, r = i.width, a.width = n, a.minWidth = o, a.maxWidth = s)), void 0 !== r ? r + "" : r
	}

	function L(t, e) {
		return {
			get: function() {
				return t() ? void delete this.get : (this.get = e).apply(this, arguments)
			}
		}
	}

	function w(t, e) {
		if (e in t) return e;
		for (var i = e[0].toUpperCase() + e.slice(1), n = e, o = Xe.length; o--;)
			if (e = Xe[o] + i, e in t) return e;
		return n
	}

	function x(t, e, i) {
		var n = We.exec(e);
		return n ? Math.max(0, n[1] - (i || 0)) + (n[2] || "px") : e
	}

	function C(t, e, i, n, o) {
		for (var s = i === (n ? "border" : "content") ? 4 : "width" === e ? 1 : 0, r = 0; 4 > s; s += 2) "margin" === i && (r += Q.css(t, i + Le[s], !0, o)), n ? ("content" === i && (r -= Q.css(t, "padding" + Le[s], !0, o)), "margin" !== i && (r -= Q.css(t, "border" + Le[s] + "Width", !0, o))) : (r += Q.css(t, "padding" + Le[s], !0, o), "padding" !== i && (r += Q.css(t, "border" + Le[s] + "Width", !0, o)));
		return r
	}

	function E(t, e, i) {
		var n = !0,
			o = "width" === e ? t.offsetWidth : t.offsetHeight,
			s = Fe(t),
			r = "border-box" === Q.css(t, "boxSizing", !1, s);
		if (0 >= o || null == o) {
			if (o = b(t, e, s), (0 > o || null == o) && (o = t.style[e]), $e.test(o)) return o;
			n = r && (J.boxSizingReliable() || o === t.style[e]), o = parseFloat(o) || 0
		}
		return o + C(t, e, i || (r ? "border" : "content"), n, s) + "px"
	}

	function P(t, e) {
		for (var i, n, o, s = [], r = 0, a = t.length; a > r; r++) n = t[r], n.style && (s[r] = ve.get(n, "olddisplay"), i = n.style.display, e ? (s[r] || "none" !== i || (n.style.display = ""), "" === n.style.display && we(n) && (s[r] = ve.access(n, "olddisplay", T(n.nodeName)))) : (o = we(n), "none" === i && o || ve.set(n, "olddisplay", o ? i : Q.css(n, "display"))));
		for (r = 0; a > r; r++) n = t[r], n.style && (e && "none" !== n.style.display && "" !== n.style.display || (n.style.display = e ? s[r] || "" : "none"));
		return t
	}

	function S(t, e, i, n, o) {
		return new S.prototype.init(t, e, i, n, o)
	}

	function k() {
		return setTimeout(function() {
			Je = void 0
		}), Je = Q.now()
	}

	function D(t, e) {
		var i, n = 0,
			o = {
				height: t
			};
		for (e = e ? 1 : 0; 4 > n; n += 2 - e) i = Le[n], o["margin" + i] = o["padding" + i] = t;
		return e && (o.opacity = o.width = t), o
	}

	function M(t, e, i) {
		for (var n, o = (ii[e] || []).concat(ii["*"]), s = 0, r = o.length; r > s; s++)
			if (n = o[s].call(i, e, t)) return n
	}

	function A(t, e, i) {
		var n, o, s, r, a, l, u, c, h = this,
			p = {},
			d = t.style,
			f = t.nodeType && we(t),
			m = ve.get(t, "fxshow");
		i.queue || (a = Q._queueHooks(t, "fx"), null == a.unqueued && (a.unqueued = 0, l = a.empty.fire, a.empty.fire = function() {
			a.unqueued || l()
		}), a.unqueued++, h.always(function() {
			h.always(function() {
				a.unqueued--, Q.queue(t, "fx").length || a.empty.fire()
			})
		})), 1 === t.nodeType && ("height" in e || "width" in e) && (i.overflow = [d.overflow, d.overflowX, d.overflowY], u = Q.css(t, "display"), c = "none" === u ? ve.get(t, "olddisplay") || T(t.nodeName) : u, "inline" === c && "none" === Q.css(t, "float") && (d.display = "inline-block")), i.overflow && (d.overflow = "hidden", h.always(function() {
			d.overflow = i.overflow[0], d.overflowX = i.overflow[1], d.overflowY = i.overflow[2]
		}));
		for (n in e)
			if (o = e[n], Ke.exec(o)) {
				if (delete e[n], s = s || "toggle" === o, o === (f ? "hide" : "show")) {
					if ("show" !== o || !m || void 0 === m[n]) continue;
					f = !0
				}
				p[n] = m && m[n] || Q.style(t, n)
			} else u = void 0;
		if (Q.isEmptyObject(p)) "inline" === ("none" === u ? T(t.nodeName) : u) && (d.display = u);
		else {
			m ? "hidden" in m && (f = m.hidden) : m = ve.access(t, "fxshow", {}), s && (m.hidden = !f), f ? Q(t).show() : h.done(function() {
				Q(t).hide()
			}), h.done(function() {
				var e;
				ve.remove(t, "fxshow");
				for (e in p) Q.style(t, e, p[e])
			});
			for (n in p) r = M(f ? m[n] : 0, n, h), n in m || (m[n] = r.start, f && (r.end = r.start, r.start = "width" === n || "height" === n ? 1 : 0))
		}
	}

	function O(t, e) {
		var i, n, o, s, r;
		for (i in t)
			if (n = Q.camelCase(i), o = e[n], s = t[i], Q.isArray(s) && (o = s[1], s = t[i] = s[0]), i !== n && (t[n] = s, delete t[i]), r = Q.cssHooks[n], r && "expand" in r) {
				s = r.expand(s), delete t[n];
				for (i in s) i in t || (t[i] = s[i], e[i] = o)
			} else e[n] = o
	}

	function N(t, e, i) {
		var n, o, s = 0,
			r = ei.length,
			a = Q.Deferred().always(function() {
				delete l.elem
			}),
			l = function() {
				if (o) return !1;
				for (var e = Je || k(), i = Math.max(0, u.startTime + u.duration - e), n = i / u.duration || 0, s = 1 - n, r = 0, l = u.tweens.length; l > r; r++) u.tweens[r].run(s);
				return a.notifyWith(t, [u, s, i]), 1 > s && l ? i : (a.resolveWith(t, [u]), !1)
			},
			u = a.promise({
				elem: t,
				props: Q.extend({}, e),
				opts: Q.extend(!0, {
					specialEasing: {}
				}, i),
				originalProperties: e,
				originalOptions: i,
				startTime: Je || k(),
				duration: i.duration,
				tweens: [],
				createTween: function(e, i) {
					var n = Q.Tween(t, u.opts, e, i, u.opts.specialEasing[e] || u.opts.easing);
					return u.tweens.push(n), n
				},
				stop: function(e) {
					var i = 0,
						n = e ? u.tweens.length : 0;
					if (o) return this;
					for (o = !0; n > i; i++) u.tweens[i].run(1);
					return e ? a.resolveWith(t, [u, e]) : a.rejectWith(t, [u, e]), this
				}
			}),
			c = u.props;
		for (O(c, u.opts.specialEasing); r > s; s++)
			if (n = ei[s].call(u, t, c, u.opts)) return n;
		return Q.map(c, M, u), Q.isFunction(u.opts.start) && u.opts.start.call(t, u), Q.fx.timer(Q.extend(l, {
			elem: t,
			anim: u,
			queue: u.opts.queue
		})), u.progress(u.opts.progress).done(u.opts.done, u.opts.complete).fail(u.opts.fail).always(u.opts.always)
	}

	function I(t) {
		return function(e, i) {
			"string" != typeof e && (i = e, e = "*");
			var n, o = 0,
				s = e.toLowerCase().match(de) || [];
			if (Q.isFunction(i))
				for (; n = s[o++];) "+" === n[0] ? (n = n.slice(1) || "*", (t[n] = t[n] || []).unshift(i)) : (t[n] = t[n] || []).push(i)
		}
	}

	function R(t, e, i, n) {
		function o(a) {
			var l;
			return s[a] = !0, Q.each(t[a] || [], function(t, a) {
				var u = a(e, i, n);
				return "string" != typeof u || r || s[u] ? r ? !(l = u) : void 0 : (e.dataTypes.unshift(u), o(u), !1)
			}), l
		}
		var s = {},
			r = t === yi;
		return o(e.dataTypes[0]) || !s["*"] && o("*")
	}

	function U(t, e) {
		var i, n, o = Q.ajaxSettings.flatOptions || {};
		for (i in e) void 0 !== e[i] && ((o[i] ? t : n || (n = {}))[i] = e[i]);
		return n && Q.extend(!0, t, n), t
	}

	function z(t, e, i) {
		for (var n, o, s, r, a = t.contents, l = t.dataTypes;
			"*" === l[0];) l.shift(), void 0 === n && (n = t.mimeType || e.getResponseHeader("Content-Type"));
		if (n)
			for (o in a)
				if (a[o] && a[o].test(n)) {
					l.unshift(o);
					break
				}
		if (l[0] in i) s = l[0];
		else {
			for (o in i) {
				if (!l[0] || t.converters[o + " " + l[0]]) {
					s = o;
					break
				}
				r || (r = o)
			}
			s = s || r
		}
		return s ? (s !== l[0] && l.unshift(s), i[s]) : void 0
	}

	function H(t, e, i, n) {
		var o, s, r, a, l, u = {},
			c = t.dataTypes.slice();
		if (c[1])
			for (r in t.converters) u[r.toLowerCase()] = t.converters[r];
		for (s = c.shift(); s;)
			if (t.responseFields[s] && (i[t.responseFields[s]] = e), !l && n && t.dataFilter && (e = t.dataFilter(e, t.dataType)), l = s, s = c.shift())
				if ("*" === s) s = l;
				else if ("*" !== l && l !== s) {
			if (r = u[l + " " + s] || u["* " + s], !r)
				for (o in u)
					if (a = o.split(" "), a[1] === s && (r = u[l + " " + a[0]] || u["* " + a[0]])) {
						r === !0 ? r = u[o] : u[o] !== !0 && (s = a[0], c.unshift(a[1]));
						break
					}
			if (r !== !0)
				if (r && t["throws"]) e = r(e);
				else try {
					e = r(e)
				} catch (h) {
					return {
						state: "parsererror",
						error: r ? h : "No conversion from " + l + " to " + s
					}
				}
		}
		return {
			state: "success",
			data: e
		}
	}

	function B(t, e, i, n) {
		var o;
		if (Q.isArray(e)) Q.each(e, function(e, o) {
			i || xi.test(t) ? n(t, o) : B(t + "[" + ("object" == typeof o ? e : "") + "]", o, i, n)
		});
		else if (i || "object" !== Q.type(e)) n(t, e);
		else
			for (o in e) B(t + "[" + o + "]", e[o], i, n)
	}

	function j(t) {
		return Q.isWindow(t) ? t : 9 === t.nodeType && t.defaultView
	}
	var $ = [],
		F = $.slice,
		q = $.concat,
		W = $.push,
		Z = $.indexOf,
		G = {},
		V = G.toString,
		X = G.hasOwnProperty,
		J = {},
		Y = t.document,
		K = "2.1.3",
		Q = function(t, e) {
			return new Q.fn.init(t, e)
		},
		te = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
		ee = /^-ms-/,
		ie = /-([\da-z])/gi,
		ne = function(t, e) {
			return e.toUpperCase()
		};
	Q.fn = Q.prototype = {
		jquery: K,
		constructor: Q,
		selector: "",
		length: 0,
		toArray: function() {
			return F.call(this)
		},
		get: function(t) {
			return null != t ? 0 > t ? this[t + this.length] : this[t] : F.call(this)
		},
		pushStack: function(t) {
			var e = Q.merge(this.constructor(), t);
			return e.prevObject = this, e.context = this.context, e
		},
		each: function(t, e) {
			return Q.each(this, t, e)
		},
		map: function(t) {
			return this.pushStack(Q.map(this, function(e, i) {
				return t.call(e, i, e)
			}))
		},
		slice: function() {
			return this.pushStack(F.apply(this, arguments))
		},
		first: function() {
			return this.eq(0)
		},
		last: function() {
			return this.eq(-1)
		},
		eq: function(t) {
			var e = this.length,
				i = +t + (0 > t ? e : 0);
			return this.pushStack(i >= 0 && e > i ? [this[i]] : [])
		},
		end: function() {
			return this.prevObject || this.constructor(null)
		},
		push: W,
		sort: $.sort,
		splice: $.splice
	}, Q.extend = Q.fn.extend = function() {
		var t, e, i, n, o, s, r = arguments[0] || {},
			a = 1,
			l = arguments.length,
			u = !1;
		for ("boolean" == typeof r && (u = r, r = arguments[a] || {}, a++), "object" == typeof r || Q.isFunction(r) || (r = {}), a === l && (r = this, a--); l > a; a++)
			if (null != (t = arguments[a]))
				for (e in t) i = r[e], n = t[e], r !== n && (u && n && (Q.isPlainObject(n) || (o = Q.isArray(n))) ? (o ? (o = !1, s = i && Q.isArray(i) ? i : []) : s = i && Q.isPlainObject(i) ? i : {}, r[e] = Q.extend(u, s, n)) : void 0 !== n && (r[e] = n));
		return r
	}, Q.extend({
		expando: "jQuery" + (K + Math.random()).replace(/\D/g, ""),
		isReady: !0,
		error: function(t) {
			throw new Error(t)
		},
		noop: function() {},
		isFunction: function(t) {
			return "function" === Q.type(t)
		},
		isArray: Array.isArray,
		isWindow: function(t) {
			return null != t && t === t.window
		},
		isNumeric: function(t) {
			return !Q.isArray(t) && t - parseFloat(t) + 1 >= 0
		},
		isPlainObject: function(t) {
			return "object" !== Q.type(t) || t.nodeType || Q.isWindow(t) ? !1 : t.constructor && !X.call(t.constructor.prototype, "isPrototypeOf") ? !1 : !0
		},
		isEmptyObject: function(t) {
			var e;
			for (e in t) return !1;
			return !0
		},
		type: function(t) {
			return null == t ? t + "" : "object" == typeof t || "function" == typeof t ? G[V.call(t)] || "object" : typeof t
		},
		globalEval: function(t) {
			var e, i = eval;
			t = Q.trim(t), t && (1 === t.indexOf("use strict") ? (e = Y.createElement("script"), e.text = t, Y.head.appendChild(e).parentNode.removeChild(e)) : i(t))
		},
		camelCase: function(t) {
			return t.replace(ee, "ms-").replace(ie, ne)
		},
		nodeName: function(t, e) {
			return t.nodeName && t.nodeName.toLowerCase() === e.toLowerCase()
		},
		each: function(t, e, n) {
			var o, s = 0,
				r = t.length,
				a = i(t);
			if (n) {
				if (a)
					for (; r > s && (o = e.apply(t[s], n), o !== !1); s++);
				else
					for (s in t)
						if (o = e.apply(t[s], n), o === !1) break
			} else if (a)
				for (; r > s && (o = e.call(t[s], s, t[s]), o !== !1); s++);
			else
				for (s in t)
					if (o = e.call(t[s], s, t[s]), o === !1) break; return t
		},
		trim: function(t) {
			return null == t ? "" : (t + "").replace(te, "")
		},
		makeArray: function(t, e) {
			var n = e || [];
			return null != t && (i(Object(t)) ? Q.merge(n, "string" == typeof t ? [t] : t) : W.call(n, t)), n
		},
		inArray: function(t, e, i) {
			return null == e ? -1 : Z.call(e, t, i)
		},
		merge: function(t, e) {
			for (var i = +e.length, n = 0, o = t.length; i > n; n++) t[o++] = e[n];
			return t.length = o, t
		},
		grep: function(t, e, i) {
			for (var n, o = [], s = 0, r = t.length, a = !i; r > s; s++) n = !e(t[s], s), n !== a && o.push(t[s]);
			return o
		},
		map: function(t, e, n) {
			var o, s = 0,
				r = t.length,
				a = i(t),
				l = [];
			if (a)
				for (; r > s; s++) o = e(t[s], s, n), null != o && l.push(o);
			else
				for (s in t) o = e(t[s], s, n), null != o && l.push(o);
			return q.apply([], l)
		},
		guid: 1,
		proxy: function(t, e) {
			var i, n, o;
			return "string" == typeof e && (i = t[e], e = t, t = i), Q.isFunction(t) ? (n = F.call(arguments, 2), o = function() {
				return t.apply(e || this, n.concat(F.call(arguments)))
			}, o.guid = t.guid = t.guid || Q.guid++, o) : void 0
		},
		now: Date.now,
		support: J
	}), Q.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(t, e) {
		G["[object " + e + "]"] = e.toLowerCase()
	});
	var oe = function(t) {
		function e(t, e, i, n) {
			var o, s, r, a, l, u, h, d, f, m;
			if ((e ? e.ownerDocument || e : B) !== A && M(e), e = e || A, i = i || [], a = e.nodeType, "string" != typeof t || !t || 1 !== a && 9 !== a && 11 !== a) return i;
			if (!n && N) {
				if (11 !== a && (o = _e.exec(t)))
					if (r = o[1]) {
						if (9 === a) {
							if (s = e.getElementById(r), !s || !s.parentNode) return i;
							if (s.id === r) return i.push(s), i
						} else if (e.ownerDocument && (s = e.ownerDocument.getElementById(r)) && z(e, s) && s.id === r) return i.push(s), i
					} else {
						if (o[2]) return K.apply(i, e.getElementsByTagName(t)), i;
						if ((r = o[3]) && b.getElementsByClassName) return K.apply(i, e.getElementsByClassName(r)), i
					}
				if (b.qsa && (!I || !I.test(t))) {
					if (d = h = H, f = e, m = 1 !== a && t, 1 === a && "object" !== e.nodeName.toLowerCase()) {
						for (u = C(t), (h = e.getAttribute("id")) ? d = h.replace(Te, "\\$&") : e.setAttribute("id", d), d = "[id='" + d + "'] ", l = u.length; l--;) u[l] = d + p(u[l]);
						f = ye.test(t) && c(e.parentNode) || e, m = u.join(",")
					}
					if (m) try {
						return K.apply(i, f.querySelectorAll(m)), i
					} catch (g) {} finally {
						h || e.removeAttribute("id")
					}
				}
			}
			return P(t.replace(le, "$1"), e, i, n)
		}

		function i() {
			function t(i, n) {
				return e.push(i + " ") > L.cacheLength && delete t[e.shift()], t[i + " "] = n
			}
			var e = [];
			return t
		}

		function n(t) {
			return t[H] = !0, t
		}

		function o(t) {
			var e = A.createElement("div");
			try {
				return !!t(e)
			} catch (i) {
				return !1
			} finally {
				e.parentNode && e.parentNode.removeChild(e), e = null
			}
		}

		function s(t, e) {
			for (var i = t.split("|"), n = t.length; n--;) L.attrHandle[i[n]] = e
		}

		function r(t, e) {
			var i = e && t,
				n = i && 1 === t.nodeType && 1 === e.nodeType && (~e.sourceIndex || G) - (~t.sourceIndex || G);
			if (n) return n;
			if (i)
				for (; i = i.nextSibling;)
					if (i === e) return -1;
			return t ? 1 : -1
		}

		function a(t) {
			return function(e) {
				var i = e.nodeName.toLowerCase();
				return "input" === i && e.type === t
			}
		}

		function l(t) {
			return function(e) {
				var i = e.nodeName.toLowerCase();
				return ("input" === i || "button" === i) && e.type === t
			}
		}

		function u(t) {
			return n(function(e) {
				return e = +e, n(function(i, n) {
					for (var o, s = t([], i.length, e), r = s.length; r--;) i[o = s[r]] && (i[o] = !(n[o] = i[o]))
				})
			})
		}

		function c(t) {
			return t && "undefined" != typeof t.getElementsByTagName && t
		}

		function h() {}

		function p(t) {
			for (var e = 0, i = t.length, n = ""; i > e; e++) n += t[e].value;
			return n
		}

		function d(t, e, i) {
			var n = e.dir,
				o = i && "parentNode" === n,
				s = $++;
			return e.first ? function(e, i, s) {
				for (; e = e[n];)
					if (1 === e.nodeType || o) return t(e, i, s)
			} : function(e, i, r) {
				var a, l, u = [j, s];
				if (r) {
					for (; e = e[n];)
						if ((1 === e.nodeType || o) && t(e, i, r)) return !0
				} else
					for (; e = e[n];)
						if (1 === e.nodeType || o) {
							if (l = e[H] || (e[H] = {}), (a = l[n]) && a[0] === j && a[1] === s) return u[2] = a[2];
							if (l[n] = u, u[2] = t(e, i, r)) return !0
						}
			}
		}

		function f(t) {
			return t.length > 1 ? function(e, i, n) {
				for (var o = t.length; o--;)
					if (!t[o](e, i, n)) return !1;
				return !0
			} : t[0]
		}

		function m(t, i, n) {
			for (var o = 0, s = i.length; s > o; o++) e(t, i[o], n);
			return n
		}

		function g(t, e, i, n, o) {
			for (var s, r = [], a = 0, l = t.length, u = null != e; l > a; a++)(s = t[a]) && (!i || i(s, n, o)) && (r.push(s), u && e.push(a));
			return r
		}

		function v(t, e, i, o, s, r) {
			return o && !o[H] && (o = v(o)), s && !s[H] && (s = v(s, r)), n(function(n, r, a, l) {
				var u, c, h, p = [],
					d = [],
					f = r.length,
					v = n || m(e || "*", a.nodeType ? [a] : a, []),
					_ = !t || !n && e ? v : g(v, p, t, a, l),
					y = i ? s || (n ? t : f || o) ? [] : r : _;
				if (i && i(_, y, a, l), o)
					for (u = g(y, d), o(u, [], a, l), c = u.length; c--;)(h = u[c]) && (y[d[c]] = !(_[d[c]] = h));
				if (n) {
					if (s || t) {
						if (s) {
							for (u = [], c = y.length; c--;)(h = y[c]) && u.push(_[c] = h);
							s(null, y = [], u, l)
						}
						for (c = y.length; c--;)(h = y[c]) && (u = s ? te(n, h) : p[c]) > -1 && (n[u] = !(r[u] = h))
					}
				} else y = g(y === r ? y.splice(f, y.length) : y), s ? s(null, r, y, l) : K.apply(r, y)
			})
		}

		function _(t) {
			for (var e, i, n, o = t.length, s = L.relative[t[0].type], r = s || L.relative[" "], a = s ? 1 : 0, l = d(function(t) {
				return t === e
			}, r, !0), u = d(function(t) {
				return te(e, t) > -1
			}, r, !0), c = [
				function(t, i, n) {
					var o = !s && (n || i !== S) || ((e = i).nodeType ? l(t, i, n) : u(t, i, n));
					return e = null, o
				}
			]; o > a; a++)
				if (i = L.relative[t[a].type]) c = [d(f(c), i)];
				else {
					if (i = L.filter[t[a].type].apply(null, t[a].matches), i[H]) {
						for (n = ++a; o > n && !L.relative[t[n].type]; n++);
						return v(a > 1 && f(c), a > 1 && p(t.slice(0, a - 1).concat({
							value: " " === t[a - 2].type ? "*" : ""
						})).replace(le, "$1"), i, n > a && _(t.slice(a, n)), o > n && _(t = t.slice(n)), o > n && p(t))
					}
					c.push(i)
				}
			return f(c)
		}

		function y(t, i) {
			var o = i.length > 0,
				s = t.length > 0,
				r = function(n, r, a, l, u) {
					var c, h, p, d = 0,
						f = "0",
						m = n && [],
						v = [],
						_ = S,
						y = n || s && L.find.TAG("*", u),
						T = j += null == _ ? 1 : Math.random() || .1,
						b = y.length;
					for (u && (S = r !== A && r); f !== b && null != (c = y[f]); f++) {
						if (s && c) {
							for (h = 0; p = t[h++];)
								if (p(c, r, a)) {
									l.push(c);
									break
								}
							u && (j = T)
						}
						o && ((c = !p && c) && d--, n && m.push(c))
					}
					if (d += f, o && f !== d) {
						for (h = 0; p = i[h++];) p(m, v, r, a);
						if (n) {
							if (d > 0)
								for (; f--;) m[f] || v[f] || (v[f] = J.call(l));
							v = g(v)
						}
						K.apply(l, v), u && !n && v.length > 0 && d + i.length > 1 && e.uniqueSort(l)
					}
					return u && (j = T, S = _), m
				};
			return o ? n(r) : r
		}
		var T, b, L, w, x, C, E, P, S, k, D, M, A, O, N, I, R, U, z, H = "sizzle" + 1 * new Date,
			B = t.document,
			j = 0,
			$ = 0,
			F = i(),
			q = i(),
			W = i(),
			Z = function(t, e) {
				return t === e && (D = !0), 0
			},
			G = 1 << 31,
			V = {}.hasOwnProperty,
			X = [],
			J = X.pop,
			Y = X.push,
			K = X.push,
			Q = X.slice,
			te = function(t, e) {
				for (var i = 0, n = t.length; n > i; i++)
					if (t[i] === e) return i;
				return -1
			},
			ee = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
			ie = "[\\x20\\t\\r\\n\\f]",
			ne = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
			oe = ne.replace("w", "w#"),
			se = "\\[" + ie + "*(" + ne + ")(?:" + ie + "*([*^$|!~]?=)" + ie + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + oe + "))|)" + ie + "*\\]",
			re = ":(" + ne + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + se + ")*)|.*)\\)|)",
			ae = new RegExp(ie + "+", "g"),
			le = new RegExp("^" + ie + "+|((?:^|[^\\\\])(?:\\\\.)*)" + ie + "+$", "g"),
			ue = new RegExp("^" + ie + "*," + ie + "*"),
			ce = new RegExp("^" + ie + "*([>+~]|" + ie + ")" + ie + "*"),
			he = new RegExp("=" + ie + "*([^\\]'\"]*?)" + ie + "*\\]", "g"),
			pe = new RegExp(re),
			de = new RegExp("^" + oe + "$"),
			fe = {
				ID: new RegExp("^#(" + ne + ")"),
				CLASS: new RegExp("^\\.(" + ne + ")"),
				TAG: new RegExp("^(" + ne.replace("w", "w*") + ")"),
				ATTR: new RegExp("^" + se),
				PSEUDO: new RegExp("^" + re),
				CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + ie + "*(even|odd|(([+-]|)(\\d*)n|)" + ie + "*(?:([+-]|)" + ie + "*(\\d+)|))" + ie + "*\\)|)", "i"),
				bool: new RegExp("^(?:" + ee + ")$", "i"),
				needsContext: new RegExp("^" + ie + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + ie + "*((?:-\\d)?\\d*)" + ie + "*\\)|)(?=[^-]|$)", "i")
			},
			me = /^(?:input|select|textarea|button)$/i,
			ge = /^h\d$/i,
			ve = /^[^{]+\{\s*\[native \w/,
			_e = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
			ye = /[+~]/,
			Te = /'|\\/g,
			be = new RegExp("\\\\([\\da-f]{1,6}" + ie + "?|(" + ie + ")|.)", "ig"),
			Le = function(t, e, i) {
				var n = "0x" + e - 65536;
				return n !== n || i ? e : 0 > n ? String.fromCharCode(n + 65536) : String.fromCharCode(n >> 10 | 55296, 1023 & n | 56320)
			},
			we = function() {
				M()
			};
		try {
			K.apply(X = Q.call(B.childNodes), B.childNodes), X[B.childNodes.length].nodeType
		} catch (xe) {
			K = {
				apply: X.length ? function(t, e) {
					Y.apply(t, Q.call(e))
				} : function(t, e) {
					for (var i = t.length, n = 0; t[i++] = e[n++];);
					t.length = i - 1
				}
			}
		}
		b = e.support = {}, x = e.isXML = function(t) {
			var e = t && (t.ownerDocument || t).documentElement;
			return e ? "HTML" !== e.nodeName : !1
		}, M = e.setDocument = function(t) {
			var e, i, n = t ? t.ownerDocument || t : B;
			return n !== A && 9 === n.nodeType && n.documentElement ? (A = n, O = n.documentElement, i = n.defaultView, i && i !== i.top && (i.addEventListener ? i.addEventListener("unload", we, !1) : i.attachEvent && i.attachEvent("onunload", we)), N = !x(n), b.attributes = o(function(t) {
				return t.className = "i", !t.getAttribute("className")
			}), b.getElementsByTagName = o(function(t) {
				return t.appendChild(n.createComment("")), !t.getElementsByTagName("*").length
			}), b.getElementsByClassName = ve.test(n.getElementsByClassName), b.getById = o(function(t) {
				return O.appendChild(t).id = H, !n.getElementsByName || !n.getElementsByName(H).length
			}), b.getById ? (L.find.ID = function(t, e) {
				if ("undefined" != typeof e.getElementById && N) {
					var i = e.getElementById(t);
					return i && i.parentNode ? [i] : []
				}
			}, L.filter.ID = function(t) {
				var e = t.replace(be, Le);
				return function(t) {
					return t.getAttribute("id") === e
				}
			}) : (delete L.find.ID, L.filter.ID = function(t) {
				var e = t.replace(be, Le);
				return function(t) {
					var i = "undefined" != typeof t.getAttributeNode && t.getAttributeNode("id");
					return i && i.value === e
				}
			}), L.find.TAG = b.getElementsByTagName ? function(t, e) {
				return "undefined" != typeof e.getElementsByTagName ? e.getElementsByTagName(t) : b.qsa ? e.querySelectorAll(t) : void 0
			} : function(t, e) {
				var i, n = [],
					o = 0,
					s = e.getElementsByTagName(t);
				if ("*" === t) {
					for (; i = s[o++];) 1 === i.nodeType && n.push(i);
					return n
				}
				return s
			}, L.find.CLASS = b.getElementsByClassName && function(t, e) {
				return N ? e.getElementsByClassName(t) : void 0
			}, R = [], I = [], (b.qsa = ve.test(n.querySelectorAll)) && (o(function(t) {
				O.appendChild(t).innerHTML = "<a id='" + H + "'></a><select id='" + H + "-\f]' msallowcapture=''><option selected=''></option></select>", t.querySelectorAll("[msallowcapture^='']").length && I.push("[*^$]=" + ie + "*(?:''|\"\")"), t.querySelectorAll("[selected]").length || I.push("\\[" + ie + "*(?:value|" + ee + ")"), t.querySelectorAll("[id~=" + H + "-]").length || I.push("~="), t.querySelectorAll(":checked").length || I.push(":checked"), t.querySelectorAll("a#" + H + "+*").length || I.push(".#.+[+~]")
			}), o(function(t) {
				var e = n.createElement("input");
				e.setAttribute("type", "hidden"), t.appendChild(e).setAttribute("name", "D"), t.querySelectorAll("[name=d]").length && I.push("name" + ie + "*[*^$|!~]?="), t.querySelectorAll(":enabled").length || I.push(":enabled", ":disabled"), t.querySelectorAll("*,:x"), I.push(",.*:")
			})), (b.matchesSelector = ve.test(U = O.matches || O.webkitMatchesSelector || O.mozMatchesSelector || O.oMatchesSelector || O.msMatchesSelector)) && o(function(t) {
				b.disconnectedMatch = U.call(t, "div"), U.call(t, "[s!='']:x"), R.push("!=", re)
			}), I = I.length && new RegExp(I.join("|")), R = R.length && new RegExp(R.join("|")), e = ve.test(O.compareDocumentPosition), z = e || ve.test(O.contains) ? function(t, e) {
				var i = 9 === t.nodeType ? t.documentElement : t,
					n = e && e.parentNode;
				return t === n || !(!n || 1 !== n.nodeType || !(i.contains ? i.contains(n) : t.compareDocumentPosition && 16 & t.compareDocumentPosition(n)))
			} : function(t, e) {
				if (e)
					for (; e = e.parentNode;)
						if (e === t) return !0;
				return !1
			}, Z = e ? function(t, e) {
				if (t === e) return D = !0, 0;
				var i = !t.compareDocumentPosition - !e.compareDocumentPosition;
				return i ? i : (i = (t.ownerDocument || t) === (e.ownerDocument || e) ? t.compareDocumentPosition(e) : 1, 1 & i || !b.sortDetached && e.compareDocumentPosition(t) === i ? t === n || t.ownerDocument === B && z(B, t) ? -1 : e === n || e.ownerDocument === B && z(B, e) ? 1 : k ? te(k, t) - te(k, e) : 0 : 4 & i ? -1 : 1)
			} : function(t, e) {
				if (t === e) return D = !0, 0;
				var i, o = 0,
					s = t.parentNode,
					a = e.parentNode,
					l = [t],
					u = [e];
				if (!s || !a) return t === n ? -1 : e === n ? 1 : s ? -1 : a ? 1 : k ? te(k, t) - te(k, e) : 0;
				if (s === a) return r(t, e);
				for (i = t; i = i.parentNode;) l.unshift(i);
				for (i = e; i = i.parentNode;) u.unshift(i);
				for (; l[o] === u[o];) o++;
				return o ? r(l[o], u[o]) : l[o] === B ? -1 : u[o] === B ? 1 : 0
			}, n) : A
		}, e.matches = function(t, i) {
			return e(t, null, null, i)
		}, e.matchesSelector = function(t, i) {
			if ((t.ownerDocument || t) !== A && M(t), i = i.replace(he, "='$1']"), !(!b.matchesSelector || !N || R && R.test(i) || I && I.test(i))) try {
				var n = U.call(t, i);
				if (n || b.disconnectedMatch || t.document && 11 !== t.document.nodeType) return n
			} catch (o) {}
			return e(i, A, null, [t]).length > 0
		}, e.contains = function(t, e) {
			return (t.ownerDocument || t) !== A && M(t), z(t, e)
		}, e.attr = function(t, e) {
			(t.ownerDocument || t) !== A && M(t);
			var i = L.attrHandle[e.toLowerCase()],
				n = i && V.call(L.attrHandle, e.toLowerCase()) ? i(t, e, !N) : void 0;
			return void 0 !== n ? n : b.attributes || !N ? t.getAttribute(e) : (n = t.getAttributeNode(e)) && n.specified ? n.value : null
		}, e.error = function(t) {
			throw new Error("Syntax error, unrecognized expression: " + t)
		}, e.uniqueSort = function(t) {
			var e, i = [],
				n = 0,
				o = 0;
			if (D = !b.detectDuplicates, k = !b.sortStable && t.slice(0), t.sort(Z), D) {
				for (; e = t[o++];) e === t[o] && (n = i.push(o));
				for (; n--;) t.splice(i[n], 1)
			}
			return k = null, t
		}, w = e.getText = function(t) {
			var e, i = "",
				n = 0,
				o = t.nodeType;
			if (o) {
				if (1 === o || 9 === o || 11 === o) {
					if ("string" == typeof t.textContent) return t.textContent;
					for (t = t.firstChild; t; t = t.nextSibling) i += w(t)
				} else if (3 === o || 4 === o) return t.nodeValue
			} else
				for (; e = t[n++];) i += w(e);
			return i
		}, L = e.selectors = {
			cacheLength: 50,
			createPseudo: n,
			match: fe,
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
				ATTR: function(t) {
					return t[1] = t[1].replace(be, Le), t[3] = (t[3] || t[4] || t[5] || "").replace(be, Le), "~=" === t[2] && (t[3] = " " + t[3] + " "), t.slice(0, 4)
				},
				CHILD: function(t) {
					return t[1] = t[1].toLowerCase(), "nth" === t[1].slice(0, 3) ? (t[3] || e.error(t[0]), t[4] = +(t[4] ? t[5] + (t[6] || 1) : 2 * ("even" === t[3] || "odd" === t[3])), t[5] = +(t[7] + t[8] || "odd" === t[3])) : t[3] && e.error(t[0]), t
				},
				PSEUDO: function(t) {
					var e, i = !t[6] && t[2];
					return fe.CHILD.test(t[0]) ? null : (t[3] ? t[2] = t[4] || t[5] || "" : i && pe.test(i) && (e = C(i, !0)) && (e = i.indexOf(")", i.length - e) - i.length) && (t[0] = t[0].slice(0, e), t[2] = i.slice(0, e)), t.slice(0, 3))
				}
			},
			filter: {
				TAG: function(t) {
					var e = t.replace(be, Le).toLowerCase();
					return "*" === t ? function() {
						return !0
					} : function(t) {
						return t.nodeName && t.nodeName.toLowerCase() === e
					}
				},
				CLASS: function(t) {
					var e = F[t + " "];
					return e || (e = new RegExp("(^|" + ie + ")" + t + "(" + ie + "|$)")) && F(t, function(t) {
						return e.test("string" == typeof t.className && t.className || "undefined" != typeof t.getAttribute && t.getAttribute("class") || "")
					})
				},
				ATTR: function(t, i, n) {
					return function(o) {
						var s = e.attr(o, t);
						return null == s ? "!=" === i : i ? (s += "", "=" === i ? s === n : "!=" === i ? s !== n : "^=" === i ? n && 0 === s.indexOf(n) : "*=" === i ? n && s.indexOf(n) > -1 : "$=" === i ? n && s.slice(-n.length) === n : "~=" === i ? (" " + s.replace(ae, " ") + " ").indexOf(n) > -1 : "|=" === i ? s === n || s.slice(0, n.length + 1) === n + "-" : !1) : !0
					}
				},
				CHILD: function(t, e, i, n, o) {
					var s = "nth" !== t.slice(0, 3),
						r = "last" !== t.slice(-4),
						a = "of-type" === e;
					return 1 === n && 0 === o ? function(t) {
						return !!t.parentNode
					} : function(e, i, l) {
						var u, c, h, p, d, f, m = s !== r ? "nextSibling" : "previousSibling",
							g = e.parentNode,
							v = a && e.nodeName.toLowerCase(),
							_ = !l && !a;
						if (g) {
							if (s) {
								for (; m;) {
									for (h = e; h = h[m];)
										if (a ? h.nodeName.toLowerCase() === v : 1 === h.nodeType) return !1;
									f = m = "only" === t && !f && "nextSibling"
								}
								return !0
							}
							if (f = [r ? g.firstChild : g.lastChild], r && _) {
								for (c = g[H] || (g[H] = {}), u = c[t] || [], d = u[0] === j && u[1], p = u[0] === j && u[2], h = d && g.childNodes[d]; h = ++d && h && h[m] || (p = d = 0) || f.pop();)
									if (1 === h.nodeType && ++p && h === e) {
										c[t] = [j, d, p];
										break
									}
							} else if (_ && (u = (e[H] || (e[H] = {}))[t]) && u[0] === j) p = u[1];
							else
								for (;
									(h = ++d && h && h[m] || (p = d = 0) || f.pop()) && ((a ? h.nodeName.toLowerCase() !== v : 1 !== h.nodeType) || !++p || (_ && ((h[H] || (h[H] = {}))[t] = [j, p]), h !== e)););
							return p -= o, p === n || p % n === 0 && p / n >= 0
						}
					}
				},
				PSEUDO: function(t, i) {
					var o, s = L.pseudos[t] || L.setFilters[t.toLowerCase()] || e.error("unsupported pseudo: " + t);
					return s[H] ? s(i) : s.length > 1 ? (o = [t, t, "", i], L.setFilters.hasOwnProperty(t.toLowerCase()) ? n(function(t, e) {
						for (var n, o = s(t, i), r = o.length; r--;) n = te(t, o[r]), t[n] = !(e[n] = o[r])
					}) : function(t) {
						return s(t, 0, o)
					}) : s
				}
			},
			pseudos: {
				not: n(function(t) {
					var e = [],
						i = [],
						o = E(t.replace(le, "$1"));
					return o[H] ? n(function(t, e, i, n) {
						for (var s, r = o(t, null, n, []), a = t.length; a--;)(s = r[a]) && (t[a] = !(e[a] = s))
					}) : function(t, n, s) {
						return e[0] = t, o(e, null, s, i), e[0] = null, !i.pop()
					}
				}),
				has: n(function(t) {
					return function(i) {
						return e(t, i).length > 0
					}
				}),
				contains: n(function(t) {
					return t = t.replace(be, Le),
						function(e) {
							return (e.textContent || e.innerText || w(e)).indexOf(t) > -1
						}
				}),
				lang: n(function(t) {
					return de.test(t || "") || e.error("unsupported lang: " + t), t = t.replace(be, Le).toLowerCase(),
						function(e) {
							var i;
							do
								if (i = N ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang")) return i = i.toLowerCase(), i === t || 0 === i.indexOf(t + "-");
							while ((e = e.parentNode) && 1 === e.nodeType);
							return !1
						}
				}),
				target: function(e) {
					var i = t.location && t.location.hash;
					return i && i.slice(1) === e.id
				},
				root: function(t) {
					return t === O
				},
				focus: function(t) {
					return t === A.activeElement && (!A.hasFocus || A.hasFocus()) && !!(t.type || t.href || ~t.tabIndex)
				},
				enabled: function(t) {
					return t.disabled === !1
				},
				disabled: function(t) {
					return t.disabled === !0
				},
				checked: function(t) {
					var e = t.nodeName.toLowerCase();
					return "input" === e && !!t.checked || "option" === e && !!t.selected
				},
				selected: function(t) {
					return t.parentNode && t.parentNode.selectedIndex, t.selected === !0
				},
				empty: function(t) {
					for (t = t.firstChild; t; t = t.nextSibling)
						if (t.nodeType < 6) return !1;
					return !0
				},
				parent: function(t) {
					return !L.pseudos.empty(t)
				},
				header: function(t) {
					return ge.test(t.nodeName)
				},
				input: function(t) {
					return me.test(t.nodeName)
				},
				button: function(t) {
					var e = t.nodeName.toLowerCase();
					return "input" === e && "button" === t.type || "button" === e
				},
				text: function(t) {
					var e;
					return "input" === t.nodeName.toLowerCase() && "text" === t.type && (null == (e = t.getAttribute("type")) || "text" === e.toLowerCase())
				},
				first: u(function() {
					return [0]
				}),
				last: u(function(t, e) {
					return [e - 1]
				}),
				eq: u(function(t, e, i) {
					return [0 > i ? i + e : i]
				}),
				even: u(function(t, e) {
					for (var i = 0; e > i; i += 2) t.push(i);
					return t
				}),
				odd: u(function(t, e) {
					for (var i = 1; e > i; i += 2) t.push(i);
					return t
				}),
				lt: u(function(t, e, i) {
					for (var n = 0 > i ? i + e : i; --n >= 0;) t.push(n);
					return t
				}),
				gt: u(function(t, e, i) {
					for (var n = 0 > i ? i + e : i; ++n < e;) t.push(n);
					return t
				})
			}
		}, L.pseudos.nth = L.pseudos.eq;
		for (T in {
			radio: !0,
			checkbox: !0,
			file: !0,
			password: !0,
			image: !0
		}) L.pseudos[T] = a(T);
		for (T in {
			submit: !0,
			reset: !0
		}) L.pseudos[T] = l(T);
		return h.prototype = L.filters = L.pseudos, L.setFilters = new h, C = e.tokenize = function(t, i) {
			var n, o, s, r, a, l, u, c = q[t + " "];
			if (c) return i ? 0 : c.slice(0);
			for (a = t, l = [], u = L.preFilter; a;) {
				(!n || (o = ue.exec(a))) && (o && (a = a.slice(o[0].length) || a), l.push(s = [])), n = !1, (o = ce.exec(a)) && (n = o.shift(), s.push({
					value: n,
					type: o[0].replace(le, " ")
				}), a = a.slice(n.length));
				for (r in L.filter) !(o = fe[r].exec(a)) || u[r] && !(o = u[r](o)) || (n = o.shift(), s.push({
					value: n,
					type: r,
					matches: o
				}), a = a.slice(n.length));
				if (!n) break
			}
			return i ? a.length : a ? e.error(t) : q(t, l).slice(0)
		}, E = e.compile = function(t, e) {
			var i, n = [],
				o = [],
				s = W[t + " "];
			if (!s) {
				for (e || (e = C(t)), i = e.length; i--;) s = _(e[i]), s[H] ? n.push(s) : o.push(s);
				s = W(t, y(o, n)), s.selector = t
			}
			return s
		}, P = e.select = function(t, e, i, n) {
			var o, s, r, a, l, u = "function" == typeof t && t,
				h = !n && C(t = u.selector || t);
			if (i = i || [], 1 === h.length) {
				if (s = h[0] = h[0].slice(0), s.length > 2 && "ID" === (r = s[0]).type && b.getById && 9 === e.nodeType && N && L.relative[s[1].type]) {
					if (e = (L.find.ID(r.matches[0].replace(be, Le), e) || [])[0], !e) return i;
					u && (e = e.parentNode), t = t.slice(s.shift().value.length)
				}
				for (o = fe.needsContext.test(t) ? 0 : s.length; o-- && (r = s[o], !L.relative[a = r.type]);)
					if ((l = L.find[a]) && (n = l(r.matches[0].replace(be, Le), ye.test(s[0].type) && c(e.parentNode) || e))) {
						if (s.splice(o, 1), t = n.length && p(s), !t) return K.apply(i, n), i;
						break
					}
			}
			return (u || E(t, h))(n, e, !N, i, ye.test(t) && c(e.parentNode) || e), i
		}, b.sortStable = H.split("").sort(Z).join("") === H, b.detectDuplicates = !!D, M(), b.sortDetached = o(function(t) {
			return 1 & t.compareDocumentPosition(A.createElement("div"))
		}), o(function(t) {
			return t.innerHTML = "<a href='#'></a>", "#" === t.firstChild.getAttribute("href")
		}) || s("type|href|height|width", function(t, e, i) {
			return i ? void 0 : t.getAttribute(e, "type" === e.toLowerCase() ? 1 : 2)
		}), b.attributes && o(function(t) {
			return t.innerHTML = "<input/>", t.firstChild.setAttribute("value", ""), "" === t.firstChild.getAttribute("value")
		}) || s("value", function(t, e, i) {
			return i || "input" !== t.nodeName.toLowerCase() ? void 0 : t.defaultValue
		}), o(function(t) {
			return null == t.getAttribute("disabled")
		}) || s(ee, function(t, e, i) {
			var n;
			return i ? void 0 : t[e] === !0 ? e.toLowerCase() : (n = t.getAttributeNode(e)) && n.specified ? n.value : null
		}), e
	}(t);
	Q.find = oe, Q.expr = oe.selectors, Q.expr[":"] = Q.expr.pseudos, Q.unique = oe.uniqueSort, Q.text = oe.getText, Q.isXMLDoc = oe.isXML, Q.contains = oe.contains;
	var se = Q.expr.match.needsContext,
		re = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
		ae = /^.[^:#\[\.,]*$/;
	Q.filter = function(t, e, i) {
		var n = e[0];
		return i && (t = ":not(" + t + ")"), 1 === e.length && 1 === n.nodeType ? Q.find.matchesSelector(n, t) ? [n] : [] : Q.find.matches(t, Q.grep(e, function(t) {
			return 1 === t.nodeType
		}))
	}, Q.fn.extend({
		find: function(t) {
			var e, i = this.length,
				n = [],
				o = this;
			if ("string" != typeof t) return this.pushStack(Q(t).filter(function() {
				for (e = 0; i > e; e++)
					if (Q.contains(o[e], this)) return !0
			}));
			for (e = 0; i > e; e++) Q.find(t, o[e], n);
			return n = this.pushStack(i > 1 ? Q.unique(n) : n), n.selector = this.selector ? this.selector + " " + t : t, n
		},
		filter: function(t) {
			return this.pushStack(n(this, t || [], !1))
		},
		not: function(t) {
			return this.pushStack(n(this, t || [], !0))
		},
		is: function(t) {
			return !!n(this, "string" == typeof t && se.test(t) ? Q(t) : t || [], !1).length
		}
	});
	var le, ue = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
		ce = Q.fn.init = function(t, e) {
			var i, n;
			if (!t) return this;
			if ("string" == typeof t) {
				if (i = "<" === t[0] && ">" === t[t.length - 1] && t.length >= 3 ? [null, t, null] : ue.exec(t), !i || !i[1] && e) return !e || e.jquery ? (e || le).find(t) : this.constructor(e).find(t);
				if (i[1]) {
					if (e = e instanceof Q ? e[0] : e, Q.merge(this, Q.parseHTML(i[1], e && e.nodeType ? e.ownerDocument || e : Y, !0)), re.test(i[1]) && Q.isPlainObject(e))
						for (i in e) Q.isFunction(this[i]) ? this[i](e[i]) : this.attr(i, e[i]);
					return this
				}
				return n = Y.getElementById(i[2]), n && n.parentNode && (this.length = 1, this[0] = n), this.context = Y, this.selector = t, this
			}
			return t.nodeType ? (this.context = this[0] = t, this.length = 1, this) : Q.isFunction(t) ? "undefined" != typeof le.ready ? le.ready(t) : t(Q) : (void 0 !== t.selector && (this.selector = t.selector, this.context = t.context), Q.makeArray(t, this))
		};
	ce.prototype = Q.fn, le = Q(Y);
	var he = /^(?:parents|prev(?:Until|All))/,
		pe = {
			children: !0,
			contents: !0,
			next: !0,
			prev: !0
		};
	Q.extend({
		dir: function(t, e, i) {
			for (var n = [], o = void 0 !== i;
				(t = t[e]) && 9 !== t.nodeType;)
				if (1 === t.nodeType) {
					if (o && Q(t).is(i)) break;
					n.push(t)
				}
			return n
		},
		sibling: function(t, e) {
			for (var i = []; t; t = t.nextSibling) 1 === t.nodeType && t !== e && i.push(t);
			return i
		}
	}), Q.fn.extend({
		has: function(t) {
			var e = Q(t, this),
				i = e.length;
			return this.filter(function() {
				for (var t = 0; i > t; t++)
					if (Q.contains(this, e[t])) return !0
			})
		},
		closest: function(t, e) {
			for (var i, n = 0, o = this.length, s = [], r = se.test(t) || "string" != typeof t ? Q(t, e || this.context) : 0; o > n; n++)
				for (i = this[n]; i && i !== e; i = i.parentNode)
					if (i.nodeType < 11 && (r ? r.index(i) > -1 : 1 === i.nodeType && Q.find.matchesSelector(i, t))) {
						s.push(i);
						break
					}
			return this.pushStack(s.length > 1 ? Q.unique(s) : s)
		},
		index: function(t) {
			return t ? "string" == typeof t ? Z.call(Q(t), this[0]) : Z.call(this, t.jquery ? t[0] : t) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
		},
		add: function(t, e) {
			return this.pushStack(Q.unique(Q.merge(this.get(), Q(t, e))))
		},
		addBack: function(t) {
			return this.add(null == t ? this.prevObject : this.prevObject.filter(t))
		}
	}), Q.each({
		parent: function(t) {
			var e = t.parentNode;
			return e && 11 !== e.nodeType ? e : null
		},
		parents: function(t) {
			return Q.dir(t, "parentNode")
		},
		parentsUntil: function(t, e, i) {
			return Q.dir(t, "parentNode", i)
		},
		next: function(t) {
			return o(t, "nextSibling")
		},
		prev: function(t) {
			return o(t, "previousSibling")
		},
		nextAll: function(t) {
			return Q.dir(t, "nextSibling")
		},
		prevAll: function(t) {
			return Q.dir(t, "previousSibling")
		},
		nextUntil: function(t, e, i) {
			return Q.dir(t, "nextSibling", i)
		},
		prevUntil: function(t, e, i) {
			return Q.dir(t, "previousSibling", i)
		},
		siblings: function(t) {
			return Q.sibling((t.parentNode || {}).firstChild, t)
		},
		children: function(t) {
			return Q.sibling(t.firstChild)
		},
		contents: function(t) {
			return t.contentDocument || Q.merge([], t.childNodes)
		}
	}, function(t, e) {
		Q.fn[t] = function(i, n) {
			var o = Q.map(this, e, i);
			return "Until" !== t.slice(-5) && (n = i), n && "string" == typeof n && (o = Q.filter(n, o)), this.length > 1 && (pe[t] || Q.unique(o), he.test(t) && o.reverse()), this.pushStack(o)
		}
	});
	var de = /\S+/g,
		fe = {};
	Q.Callbacks = function(t) {
		t = "string" == typeof t ? fe[t] || s(t) : Q.extend({}, t);
		var e, i, n, o, r, a, l = [],
			u = !t.once && [],
			c = function(s) {
				for (e = t.memory && s, i = !0, a = o || 0, o = 0, r = l.length, n = !0; l && r > a; a++)
					if (l[a].apply(s[0], s[1]) === !1 && t.stopOnFalse) {
						e = !1;
						break
					}
				n = !1, l && (u ? u.length && c(u.shift()) : e ? l = [] : h.disable())
			},
			h = {
				add: function() {
					if (l) {
						var i = l.length;
						! function s(e) {
							Q.each(e, function(e, i) {
								var n = Q.type(i);
								"function" === n ? t.unique && h.has(i) || l.push(i) : i && i.length && "string" !== n && s(i)
							})
						}(arguments), n ? r = l.length : e && (o = i, c(e))
					}
					return this
				},
				remove: function() {
					return l && Q.each(arguments, function(t, e) {
						for (var i;
							(i = Q.inArray(e, l, i)) > -1;) l.splice(i, 1), n && (r >= i && r--, a >= i && a--)
					}), this
				},
				has: function(t) {
					return t ? Q.inArray(t, l) > -1 : !(!l || !l.length)
				},
				empty: function() {
					return l = [], r = 0, this
				},
				disable: function() {
					return l = u = e = void 0, this
				},
				disabled: function() {
					return !l
				},
				lock: function() {
					return u = void 0, e || h.disable(), this
				},
				locked: function() {
					return !u
				},
				fireWith: function(t, e) {
					return !l || i && !u || (e = e || [], e = [t, e.slice ? e.slice() : e], n ? u.push(e) : c(e)), this
				},
				fire: function() {
					return h.fireWith(this, arguments), this
				},
				fired: function() {
					return !!i
				}
			};
		return h
	}, Q.extend({
		Deferred: function(t) {
			var e = [
					["resolve", "done", Q.Callbacks("once memory"), "resolved"],
					["reject", "fail", Q.Callbacks("once memory"), "rejected"],
					["notify", "progress", Q.Callbacks("memory")]
				],
				i = "pending",
				n = {
					state: function() {
						return i
					},
					always: function() {
						return o.done(arguments).fail(arguments), this
					},
					then: function() {
						var t = arguments;
						return Q.Deferred(function(i) {
							Q.each(e, function(e, s) {
								var r = Q.isFunction(t[e]) && t[e];
								o[s[1]](function() {
									var t = r && r.apply(this, arguments);
									t && Q.isFunction(t.promise) ? t.promise().done(i.resolve).fail(i.reject).progress(i.notify) : i[s[0] + "With"](this === n ? i.promise() : this, r ? [t] : arguments)
								})
							}), t = null
						}).promise()
					},
					promise: function(t) {
						return null != t ? Q.extend(t, n) : n
					}
				},
				o = {};
			return n.pipe = n.then, Q.each(e, function(t, s) {
				var r = s[2],
					a = s[3];
				n[s[1]] = r.add, a && r.add(function() {
					i = a
				}, e[1 ^ t][2].disable, e[2][2].lock), o[s[0]] = function() {
					return o[s[0] + "With"](this === o ? n : this, arguments), this
				}, o[s[0] + "With"] = r.fireWith
			}), n.promise(o), t && t.call(o, o), o
		},
		when: function(t) {
			var e, i, n, o = 0,
				s = F.call(arguments),
				r = s.length,
				a = 1 !== r || t && Q.isFunction(t.promise) ? r : 0,
				l = 1 === a ? t : Q.Deferred(),
				u = function(t, i, n) {
					return function(o) {
						i[t] = this, n[t] = arguments.length > 1 ? F.call(arguments) : o, n === e ? l.notifyWith(i, n) : --a || l.resolveWith(i, n)
					}
				};
			if (r > 1)
				for (e = new Array(r), i = new Array(r), n = new Array(r); r > o; o++) s[o] && Q.isFunction(s[o].promise) ? s[o].promise().done(u(o, n, s)).fail(l.reject).progress(u(o, i, e)) : --a;
			return a || l.resolveWith(n, s), l.promise()
		}
	});
	var me;
	Q.fn.ready = function(t) {
		return Q.ready.promise().done(t), this
	}, Q.extend({
		isReady: !1,
		readyWait: 1,
		holdReady: function(t) {
			t ? Q.readyWait++ : Q.ready(!0)
		},
		ready: function(t) {
			(t === !0 ? --Q.readyWait : Q.isReady) || (Q.isReady = !0, t !== !0 && --Q.readyWait > 0 || (me.resolveWith(Y, [Q]), Q.fn.triggerHandler && (Q(Y).triggerHandler("ready"), Q(Y).off("ready"))))
		}
	}), Q.ready.promise = function(e) {
		return me || (me = Q.Deferred(), "complete" === Y.readyState ? setTimeout(Q.ready) : (Y.addEventListener("DOMContentLoaded", r, !1), t.addEventListener("load", r, !1))), me.promise(e)
	}, Q.ready.promise();
	var ge = Q.access = function(t, e, i, n, o, s, r) {
		var a = 0,
			l = t.length,
			u = null == i;
		if ("object" === Q.type(i)) {
			o = !0;
			for (a in i) Q.access(t, e, a, i[a], !0, s, r)
		} else if (void 0 !== n && (o = !0, Q.isFunction(n) || (r = !0), u && (r ? (e.call(t, n), e = null) : (u = e, e = function(t, e, i) {
			return u.call(Q(t), i)
		})), e))
			for (; l > a; a++) e(t[a], i, r ? n : n.call(t[a], a, e(t[a], i)));
		return o ? t : u ? e.call(t) : l ? e(t[0], i) : s
	};
	Q.acceptData = function(t) {
		return 1 === t.nodeType || 9 === t.nodeType || !+t.nodeType
	}, a.uid = 1, a.accepts = Q.acceptData, a.prototype = {
		key: function(t) {
			if (!a.accepts(t)) return 0;
			var e = {},
				i = t[this.expando];
			if (!i) {
				i = a.uid++;
				try {
					e[this.expando] = {
						value: i
					}, Object.defineProperties(t, e)
				} catch (n) {
					e[this.expando] = i, Q.extend(t, e)
				}
			}
			return this.cache[i] || (this.cache[i] = {}), i
		},
		set: function(t, e, i) {
			var n, o = this.key(t),
				s = this.cache[o];
			if ("string" == typeof e) s[e] = i;
			else if (Q.isEmptyObject(s)) Q.extend(this.cache[o], e);
			else
				for (n in e) s[n] = e[n];
			return s
		},
		get: function(t, e) {
			var i = this.cache[this.key(t)];
			return void 0 === e ? i : i[e]
		},
		access: function(t, e, i) {
			var n;
			return void 0 === e || e && "string" == typeof e && void 0 === i ? (n = this.get(t, e), void 0 !== n ? n : this.get(t, Q.camelCase(e))) : (this.set(t, e, i), void 0 !== i ? i : e)
		},
		remove: function(t, e) {
			var i, n, o, s = this.key(t),
				r = this.cache[s];
			if (void 0 === e) this.cache[s] = {};
			else {
				Q.isArray(e) ? n = e.concat(e.map(Q.camelCase)) : (o = Q.camelCase(e), e in r ? n = [e, o] : (n = o, n = n in r ? [n] : n.match(de) || [])), i = n.length;
				for (; i--;) delete r[n[i]]
			}
		},
		hasData: function(t) {
			return !Q.isEmptyObject(this.cache[t[this.expando]] || {})
		},
		discard: function(t) {
			t[this.expando] && delete this.cache[t[this.expando]]
		}
	};
	var ve = new a,
		_e = new a,
		ye = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
		Te = /([A-Z])/g;
	Q.extend({
		hasData: function(t) {
			return _e.hasData(t) || ve.hasData(t)
		},
		data: function(t, e, i) {
			return _e.access(t, e, i)
		},
		removeData: function(t, e) {
			_e.remove(t, e)
		},
		_data: function(t, e, i) {
			return ve.access(t, e, i)
		},
		_removeData: function(t, e) {
			ve.remove(t, e)
		}
	}), Q.fn.extend({
		data: function(t, e) {
			var i, n, o, s = this[0],
				r = s && s.attributes;
			if (void 0 === t) {
				if (this.length && (o = _e.get(s), 1 === s.nodeType && !ve.get(s, "hasDataAttrs"))) {
					for (i = r.length; i--;) r[i] && (n = r[i].name, 0 === n.indexOf("data-") && (n = Q.camelCase(n.slice(5)), l(s, n, o[n])));
					ve.set(s, "hasDataAttrs", !0)
				}
				return o
			}
			return "object" == typeof t ? this.each(function() {
				_e.set(this, t)
			}) : ge(this, function(e) {
				var i, n = Q.camelCase(t);
				if (s && void 0 === e) {
					if (i = _e.get(s, t), void 0 !== i) return i;
					if (i = _e.get(s, n), void 0 !== i) return i;
					if (i = l(s, n, void 0), void 0 !== i) return i
				} else this.each(function() {
					var i = _e.get(this, n);
					_e.set(this, n, e), -1 !== t.indexOf("-") && void 0 !== i && _e.set(this, t, e)
				})
			}, null, e, arguments.length > 1, null, !0)
		},
		removeData: function(t) {
			return this.each(function() {
				_e.remove(this, t)
			})
		}
	}), Q.extend({
		queue: function(t, e, i) {
			var n;
			return t ? (e = (e || "fx") + "queue", n = ve.get(t, e), i && (!n || Q.isArray(i) ? n = ve.access(t, e, Q.makeArray(i)) : n.push(i)), n || []) : void 0
		},
		dequeue: function(t, e) {
			e = e || "fx";
			var i = Q.queue(t, e),
				n = i.length,
				o = i.shift(),
				s = Q._queueHooks(t, e),
				r = function() {
					Q.dequeue(t, e)
				};
			"inprogress" === o && (o = i.shift(), n--), o && ("fx" === e && i.unshift("inprogress"), delete s.stop, o.call(t, r, s)), !n && s && s.empty.fire()
		},
		_queueHooks: function(t, e) {
			var i = e + "queueHooks";
			return ve.get(t, i) || ve.access(t, i, {
				empty: Q.Callbacks("once memory").add(function() {
					ve.remove(t, [e + "queue", i])
				})
			})
		}
	}), Q.fn.extend({
		queue: function(t, e) {
			var i = 2;
			return "string" != typeof t && (e = t, t = "fx", i--), arguments.length < i ? Q.queue(this[0], t) : void 0 === e ? this : this.each(function() {
				var i = Q.queue(this, t, e);
				Q._queueHooks(this, t), "fx" === t && "inprogress" !== i[0] && Q.dequeue(this, t)
			})
		},
		dequeue: function(t) {
			return this.each(function() {
				Q.dequeue(this, t)
			})
		},
		clearQueue: function(t) {
			return this.queue(t || "fx", [])
		},
		promise: function(t, e) {
			var i, n = 1,
				o = Q.Deferred(),
				s = this,
				r = this.length,
				a = function() {
					--n || o.resolveWith(s, [s])
				};
			for ("string" != typeof t && (e = t, t = void 0), t = t || "fx"; r--;) i = ve.get(s[r], t + "queueHooks"), i && i.empty && (n++, i.empty.add(a));
			return a(), o.promise(e)
		}
	});
	var be = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
		Le = ["Top", "Right", "Bottom", "Left"],
		we = function(t, e) {
			return t = e || t, "none" === Q.css(t, "display") || !Q.contains(t.ownerDocument, t)
		},
		xe = /^(?:checkbox|radio)$/i;
	! function() {
		var t = Y.createDocumentFragment(),
			e = t.appendChild(Y.createElement("div")),
			i = Y.createElement("input");
		i.setAttribute("type", "radio"), i.setAttribute("checked", "checked"), i.setAttribute("name", "t"), e.appendChild(i), J.checkClone = e.cloneNode(!0).cloneNode(!0).lastChild.checked, e.innerHTML = "<textarea>x</textarea>", J.noCloneChecked = !!e.cloneNode(!0).lastChild.defaultValue
	}();
	var Ce = "undefined";
	J.focusinBubbles = "onfocusin" in t;
	var Ee = /^key/,
		Pe = /^(?:mouse|pointer|contextmenu)|click/,
		Se = /^(?:focusinfocus|focusoutblur)$/,
		ke = /^([^.]*)(?:\.(.+)|)$/;
	Q.event = {
		global: {},
		add: function(t, e, i, n, o) {
			var s, r, a, l, u, c, h, p, d, f, m, g = ve.get(t);
			if (g)
				for (i.handler && (s = i, i = s.handler, o = s.selector), i.guid || (i.guid = Q.guid++), (l = g.events) || (l = g.events = {}), (r = g.handle) || (r = g.handle = function(e) {
					return typeof Q !== Ce && Q.event.triggered !== e.type ? Q.event.dispatch.apply(t, arguments) : void 0
				}), e = (e || "").match(de) || [""], u = e.length; u--;) a = ke.exec(e[u]) || [], d = m = a[1], f = (a[2] || "").split(".").sort(), d && (h = Q.event.special[d] || {}, d = (o ? h.delegateType : h.bindType) || d, h = Q.event.special[d] || {}, c = Q.extend({
					type: d,
					origType: m,
					data: n,
					handler: i,
					guid: i.guid,
					selector: o,
					needsContext: o && Q.expr.match.needsContext.test(o),
					namespace: f.join(".")
				}, s), (p = l[d]) || (p = l[d] = [], p.delegateCount = 0, h.setup && h.setup.call(t, n, f, r) !== !1 || t.addEventListener && t.addEventListener(d, r, !1)), h.add && (h.add.call(t, c), c.handler.guid || (c.handler.guid = i.guid)), o ? p.splice(p.delegateCount++, 0, c) : p.push(c), Q.event.global[d] = !0)
		},
		remove: function(t, e, i, n, o) {
			var s, r, a, l, u, c, h, p, d, f, m, g = ve.hasData(t) && ve.get(t);
			if (g && (l = g.events)) {
				for (e = (e || "").match(de) || [""], u = e.length; u--;)
					if (a = ke.exec(e[u]) || [], d = m = a[1], f = (a[2] || "").split(".").sort(), d) {
						for (h = Q.event.special[d] || {}, d = (n ? h.delegateType : h.bindType) || d, p = l[d] || [], a = a[2] && new RegExp("(^|\\.)" + f.join("\\.(?:.*\\.|)") + "(\\.|$)"), r = s = p.length; s--;) c = p[s], !o && m !== c.origType || i && i.guid !== c.guid || a && !a.test(c.namespace) || n && n !== c.selector && ("**" !== n || !c.selector) || (p.splice(s, 1), c.selector && p.delegateCount--, h.remove && h.remove.call(t, c));
						r && !p.length && (h.teardown && h.teardown.call(t, f, g.handle) !== !1 || Q.removeEvent(t, d, g.handle), delete l[d])
					} else
						for (d in l) Q.event.remove(t, d + e[u], i, n, !0);
				Q.isEmptyObject(l) && (delete g.handle, ve.remove(t, "events"))
			}
		},
		trigger: function(e, i, n, o) {
			var s, r, a, l, u, c, h, p = [n || Y],
				d = X.call(e, "type") ? e.type : e,
				f = X.call(e, "namespace") ? e.namespace.split(".") : [];
			if (r = a = n = n || Y, 3 !== n.nodeType && 8 !== n.nodeType && !Se.test(d + Q.event.triggered) && (d.indexOf(".") >= 0 && (f = d.split("."), d = f.shift(), f.sort()), u = d.indexOf(":") < 0 && "on" + d, e = e[Q.expando] ? e : new Q.Event(d, "object" == typeof e && e), e.isTrigger = o ? 2 : 3, e.namespace = f.join("."), e.namespace_re = e.namespace ? new RegExp("(^|\\.)" + f.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, e.result = void 0, e.target || (e.target = n), i = null == i ? [e] : Q.makeArray(i, [e]), h = Q.event.special[d] || {}, o || !h.trigger || h.trigger.apply(n, i) !== !1)) {
				if (!o && !h.noBubble && !Q.isWindow(n)) {
					for (l = h.delegateType || d, Se.test(l + d) || (r = r.parentNode); r; r = r.parentNode) p.push(r), a = r;
					a === (n.ownerDocument || Y) && p.push(a.defaultView || a.parentWindow || t)
				}
				for (s = 0;
					(r = p[s++]) && !e.isPropagationStopped();) e.type = s > 1 ? l : h.bindType || d, c = (ve.get(r, "events") || {})[e.type] && ve.get(r, "handle"), c && c.apply(r, i), c = u && r[u], c && c.apply && Q.acceptData(r) && (e.result = c.apply(r, i), e.result === !1 && e.preventDefault());
				return e.type = d, o || e.isDefaultPrevented() || h._default && h._default.apply(p.pop(), i) !== !1 || !Q.acceptData(n) || u && Q.isFunction(n[d]) && !Q.isWindow(n) && (a = n[u], a && (n[u] = null), Q.event.triggered = d, n[d](), Q.event.triggered = void 0, a && (n[u] = a)), e.result
			}
		},
		dispatch: function(t) {
			t = Q.event.fix(t);
			var e, i, n, o, s, r = [],
				a = F.call(arguments),
				l = (ve.get(this, "events") || {})[t.type] || [],
				u = Q.event.special[t.type] || {};
			if (a[0] = t, t.delegateTarget = this, !u.preDispatch || u.preDispatch.call(this, t) !== !1) {
				for (r = Q.event.handlers.call(this, t, l), e = 0;
					(o = r[e++]) && !t.isPropagationStopped();)
					for (t.currentTarget = o.elem, i = 0;
						(s = o.handlers[i++]) && !t.isImmediatePropagationStopped();)(!t.namespace_re || t.namespace_re.test(s.namespace)) && (t.handleObj = s, t.data = s.data, n = ((Q.event.special[s.origType] || {}).handle || s.handler).apply(o.elem, a), void 0 !== n && (t.result = n) === !1 && (t.preventDefault(), t.stopPropagation()));
				return u.postDispatch && u.postDispatch.call(this, t), t.result
			}
		},
		handlers: function(t, e) {
			var i, n, o, s, r = [],
				a = e.delegateCount,
				l = t.target;
			if (a && l.nodeType && (!t.button || "click" !== t.type))
				for (; l !== this; l = l.parentNode || this)
					if (l.disabled !== !0 || "click" !== t.type) {
						for (n = [], i = 0; a > i; i++) s = e[i], o = s.selector + " ", void 0 === n[o] && (n[o] = s.needsContext ? Q(o, this).index(l) >= 0 : Q.find(o, this, null, [l]).length), n[o] && n.push(s);
						n.length && r.push({
							elem: l,
							handlers: n
						})
					}
			return a < e.length && r.push({
				elem: this,
				handlers: e.slice(a)
			}), r
		},
		props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
		fixHooks: {},
		keyHooks: {
			props: "char charCode key keyCode".split(" "),
			filter: function(t, e) {
				return null == t.which && (t.which = null != e.charCode ? e.charCode : e.keyCode), t
			}
		},
		mouseHooks: {
			props: "button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
			filter: function(t, e) {
				var i, n, o, s = e.button;
				return null == t.pageX && null != e.clientX && (i = t.target.ownerDocument || Y, n = i.documentElement, o = i.body, t.pageX = e.clientX + (n && n.scrollLeft || o && o.scrollLeft || 0) - (n && n.clientLeft || o && o.clientLeft || 0), t.pageY = e.clientY + (n && n.scrollTop || o && o.scrollTop || 0) - (n && n.clientTop || o && o.clientTop || 0)), t.which || void 0 === s || (t.which = 1 & s ? 1 : 2 & s ? 3 : 4 & s ? 2 : 0), t
			}
		},
		fix: function(t) {
			if (t[Q.expando]) return t;
			var e, i, n, o = t.type,
				s = t,
				r = this.fixHooks[o];
			for (r || (this.fixHooks[o] = r = Pe.test(o) ? this.mouseHooks : Ee.test(o) ? this.keyHooks : {}), n = r.props ? this.props.concat(r.props) : this.props, t = new Q.Event(s), e = n.length; e--;) i = n[e], t[i] = s[i];
			return t.target || (t.target = Y), 3 === t.target.nodeType && (t.target = t.target.parentNode), r.filter ? r.filter(t, s) : t
		},
		special: {
			load: {
				noBubble: !0
			},
			focus: {
				trigger: function() {
					return this !== h() && this.focus ? (this.focus(), !1) : void 0
				},
				delegateType: "focusin"
			},
			blur: {
				trigger: function() {
					return this === h() && this.blur ? (this.blur(), !1) : void 0
				},
				delegateType: "focusout"
			},
			click: {
				trigger: function() {
					return "checkbox" === this.type && this.click && Q.nodeName(this, "input") ? (this.click(), !1) : void 0
				},
				_default: function(t) {
					return Q.nodeName(t.target, "a")
				}
			},
			beforeunload: {
				postDispatch: function(t) {
					void 0 !== t.result && t.originalEvent && (t.originalEvent.returnValue = t.result)
				}
			}
		},
		simulate: function(t, e, i, n) {
			var o = Q.extend(new Q.Event, i, {
				type: t,
				isSimulated: !0,
				originalEvent: {}
			});
			n ? Q.event.trigger(o, null, e) : Q.event.dispatch.call(e, o), o.isDefaultPrevented() && i.preventDefault()
		}
	}, Q.removeEvent = function(t, e, i) {
		t.removeEventListener && t.removeEventListener(e, i, !1)
	}, Q.Event = function(t, e) {
		return this instanceof Q.Event ? (t && t.type ? (this.originalEvent = t, this.type = t.type, this.isDefaultPrevented = t.defaultPrevented || void 0 === t.defaultPrevented && t.returnValue === !1 ? u : c) : this.type = t, e && Q.extend(this, e), this.timeStamp = t && t.timeStamp || Q.now(), void(this[Q.expando] = !0)) : new Q.Event(t, e)
	}, Q.Event.prototype = {
		isDefaultPrevented: c,
		isPropagationStopped: c,
		isImmediatePropagationStopped: c,
		preventDefault: function() {
			var t = this.originalEvent;
			this.isDefaultPrevented = u, t && t.preventDefault && t.preventDefault()
		},
		stopPropagation: function() {
			var t = this.originalEvent;
			this.isPropagationStopped = u, t && t.stopPropagation && t.stopPropagation()
		},
		stopImmediatePropagation: function() {
			var t = this.originalEvent;
			this.isImmediatePropagationStopped = u, t && t.stopImmediatePropagation && t.stopImmediatePropagation(), this.stopPropagation()
		}
	}, Q.each({
		mouseenter: "mouseover",
		mouseleave: "mouseout",
		pointerenter: "pointerover",
		pointerleave: "pointerout"
	}, function(t, e) {
		Q.event.special[t] = {
			delegateType: e,
			bindType: e,
			handle: function(t) {
				var i, n = this,
					o = t.relatedTarget,
					s = t.handleObj;
				return (!o || o !== n && !Q.contains(n, o)) && (t.type = s.origType, i = s.handler.apply(this, arguments), t.type = e), i
			}
		}
	}), J.focusinBubbles || Q.each({
		focus: "focusin",
		blur: "focusout"
	}, function(t, e) {
		var i = function(t) {
			Q.event.simulate(e, t.target, Q.event.fix(t), !0)
		};
		Q.event.special[e] = {
			setup: function() {
				var n = this.ownerDocument || this,
					o = ve.access(n, e);
				o || n.addEventListener(t, i, !0), ve.access(n, e, (o || 0) + 1)
			},
			teardown: function() {
				var n = this.ownerDocument || this,
					o = ve.access(n, e) - 1;
				o ? ve.access(n, e, o) : (n.removeEventListener(t, i, !0), ve.remove(n, e))
			}
		}
	}), Q.fn.extend({
		on: function(t, e, i, n, o) {
			var s, r;
			if ("object" == typeof t) {
				"string" != typeof e && (i = i || e, e = void 0);
				for (r in t) this.on(r, e, i, t[r], o);
				return this
			}
			if (null == i && null == n ? (n = e, i = e = void 0) : null == n && ("string" == typeof e ? (n = i, i = void 0) : (n = i, i = e, e = void 0)), n === !1) n = c;
			else if (!n) return this;
			return 1 === o && (s = n, n = function(t) {
				return Q().off(t), s.apply(this, arguments)
			}, n.guid = s.guid || (s.guid = Q.guid++)), this.each(function() {
				Q.event.add(this, t, n, i, e)
			})
		},
		one: function(t, e, i, n) {
			return this.on(t, e, i, n, 1)
		},
		off: function(t, e, i) {
			var n, o;
			if (t && t.preventDefault && t.handleObj) return n = t.handleObj, Q(t.delegateTarget).off(n.namespace ? n.origType + "." + n.namespace : n.origType, n.selector, n.handler), this;
			if ("object" == typeof t) {
				for (o in t) this.off(o, e, t[o]);
				return this
			}
			return (e === !1 || "function" == typeof e) && (i = e, e = void 0), i === !1 && (i = c), this.each(function() {
				Q.event.remove(this, t, i, e)
			})
		},
		trigger: function(t, e) {
			return this.each(function() {
				Q.event.trigger(t, e, this)
			})
		},
		triggerHandler: function(t, e) {
			var i = this[0];
			return i ? Q.event.trigger(t, e, i, !0) : void 0
		}
	});
	var De = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
		Me = /<([\w:]+)/,
		Ae = /<|&#?\w+;/,
		Oe = /<(?:script|style|link)/i,
		Ne = /checked\s*(?:[^=]|=\s*.checked.)/i,
		Ie = /^$|\/(?:java|ecma)script/i,
		Re = /^true\/(.*)/,
		Ue = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
		ze = {
			option: [1, "<select multiple='multiple'>", "</select>"],
			thead: [1, "<table>", "</table>"],
			col: [2, "<table><colgroup>", "</colgroup></table>"],
			tr: [2, "<table><tbody>", "</tbody></table>"],
			td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
			_default: [0, "", ""]
		};
	ze.optgroup = ze.option, ze.tbody = ze.tfoot = ze.colgroup = ze.caption = ze.thead, ze.th = ze.td, Q.extend({
		clone: function(t, e, i) {
			var n, o, s, r, a = t.cloneNode(!0),
				l = Q.contains(t.ownerDocument, t);
			if (!(J.noCloneChecked || 1 !== t.nodeType && 11 !== t.nodeType || Q.isXMLDoc(t)))
				for (r = v(a), s = v(t), n = 0, o = s.length; o > n; n++) _(s[n], r[n]);
			if (e)
				if (i)
					for (s = s || v(t), r = r || v(a), n = 0, o = s.length; o > n; n++) g(s[n], r[n]);
				else g(t, a);
			return r = v(a, "script"), r.length > 0 && m(r, !l && v(t, "script")), a
		},
		buildFragment: function(t, e, i, n) {
			for (var o, s, r, a, l, u, c = e.createDocumentFragment(), h = [], p = 0, d = t.length; d > p; p++)
				if (o = t[p], o || 0 === o)
					if ("object" === Q.type(o)) Q.merge(h, o.nodeType ? [o] : o);
					else if (Ae.test(o)) {
				for (s = s || c.appendChild(e.createElement("div")), r = (Me.exec(o) || ["", ""])[1].toLowerCase(), a = ze[r] || ze._default, s.innerHTML = a[1] + o.replace(De, "<$1></$2>") + a[2], u = a[0]; u--;) s = s.lastChild;
				Q.merge(h, s.childNodes), s = c.firstChild, s.textContent = ""
			} else h.push(e.createTextNode(o));
			for (c.textContent = "", p = 0; o = h[p++];)
				if ((!n || -1 === Q.inArray(o, n)) && (l = Q.contains(o.ownerDocument, o), s = v(c.appendChild(o), "script"), l && m(s), i))
					for (u = 0; o = s[u++];) Ie.test(o.type || "") && i.push(o);
			return c
		},
		cleanData: function(t) {
			for (var e, i, n, o, s = Q.event.special, r = 0; void 0 !== (i = t[r]); r++) {
				if (Q.acceptData(i) && (o = i[ve.expando], o && (e = ve.cache[o]))) {
					if (e.events)
						for (n in e.events) s[n] ? Q.event.remove(i, n) : Q.removeEvent(i, n, e.handle);
					ve.cache[o] && delete ve.cache[o]
				}
				delete _e.cache[i[_e.expando]]
			}
		}
	}), Q.fn.extend({
		text: function(t) {
			return ge(this, function(t) {
				return void 0 === t ? Q.text(this) : this.empty().each(function() {
					(1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) && (this.textContent = t)
				})
			}, null, t, arguments.length)
		},
		append: function() {
			return this.domManip(arguments, function(t) {
				if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
					var e = p(this, t);
					e.appendChild(t)
				}
			})
		},
		prepend: function() {
			return this.domManip(arguments, function(t) {
				if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
					var e = p(this, t);
					e.insertBefore(t, e.firstChild)
				}
			})
		},
		before: function() {
			return this.domManip(arguments, function(t) {
				this.parentNode && this.parentNode.insertBefore(t, this)
			})
		},
		after: function() {
			return this.domManip(arguments, function(t) {
				this.parentNode && this.parentNode.insertBefore(t, this.nextSibling)
			})
		},
		remove: function(t, e) {
			for (var i, n = t ? Q.filter(t, this) : this, o = 0; null != (i = n[o]); o++) e || 1 !== i.nodeType || Q.cleanData(v(i)), i.parentNode && (e && Q.contains(i.ownerDocument, i) && m(v(i, "script")), i.parentNode.removeChild(i));
			return this
		},
		empty: function() {
			for (var t, e = 0; null != (t = this[e]); e++) 1 === t.nodeType && (Q.cleanData(v(t, !1)), t.textContent = "");
			return this
		},
		clone: function(t, e) {
			return t = null == t ? !1 : t, e = null == e ? t : e, this.map(function() {
				return Q.clone(this, t, e)
			})
		},
		html: function(t) {
			return ge(this, function(t) {
				var e = this[0] || {},
					i = 0,
					n = this.length;
				if (void 0 === t && 1 === e.nodeType) return e.innerHTML;
				if ("string" == typeof t && !Oe.test(t) && !ze[(Me.exec(t) || ["", ""])[1].toLowerCase()]) {
					t = t.replace(De, "<$1></$2>");
					try {
						for (; n > i; i++) e = this[i] || {}, 1 === e.nodeType && (Q.cleanData(v(e, !1)), e.innerHTML = t);
						e = 0
					} catch (o) {}
				}
				e && this.empty().append(t)
			}, null, t, arguments.length)
		},
		replaceWith: function() {
			var t = arguments[0];
			return this.domManip(arguments, function(e) {
				t = this.parentNode, Q.cleanData(v(this)), t && t.replaceChild(e, this)
			}), t && (t.length || t.nodeType) ? this : this.remove()
		},
		detach: function(t) {
			return this.remove(t, !0)
		},
		domManip: function(t, e) {
			t = q.apply([], t);
			var i, n, o, s, r, a, l = 0,
				u = this.length,
				c = this,
				h = u - 1,
				p = t[0],
				m = Q.isFunction(p);
			if (m || u > 1 && "string" == typeof p && !J.checkClone && Ne.test(p)) return this.each(function(i) {
				var n = c.eq(i);
				m && (t[0] = p.call(this, i, n.html())), n.domManip(t, e)
			});
			if (u && (i = Q.buildFragment(t, this[0].ownerDocument, !1, this), n = i.firstChild, 1 === i.childNodes.length && (i = n), n)) {
				for (o = Q.map(v(i, "script"), d), s = o.length; u > l; l++) r = i, l !== h && (r = Q.clone(r, !0, !0), s && Q.merge(o, v(r, "script"))), e.call(this[l], r, l);
				if (s)
					for (a = o[o.length - 1].ownerDocument, Q.map(o, f), l = 0; s > l; l++) r = o[l], Ie.test(r.type || "") && !ve.access(r, "globalEval") && Q.contains(a, r) && (r.src ? Q._evalUrl && Q._evalUrl(r.src) : Q.globalEval(r.textContent.replace(Ue, "")))
			}
			return this
		}
	}), Q.each({
		appendTo: "append",
		prependTo: "prepend",
		insertBefore: "before",
		insertAfter: "after",
		replaceAll: "replaceWith"
	}, function(t, e) {
		Q.fn[t] = function(t) {
			for (var i, n = [], o = Q(t), s = o.length - 1, r = 0; s >= r; r++) i = r === s ? this : this.clone(!0), Q(o[r])[e](i), W.apply(n, i.get());
			return this.pushStack(n)
		}
	});
	var He, Be = {},
		je = /^margin/,
		$e = new RegExp("^(" + be + ")(?!px)[a-z%]+$", "i"),
		Fe = function(e) {
			return e.ownerDocument.defaultView.opener ? e.ownerDocument.defaultView.getComputedStyle(e, null) : t.getComputedStyle(e, null)
		};
	! function() {
		function e() {
			r.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute", r.innerHTML = "", o.appendChild(s);
			var e = t.getComputedStyle(r, null);
			i = "1%" !== e.top, n = "4px" === e.width, o.removeChild(s)
		}
		var i, n, o = Y.documentElement,
			s = Y.createElement("div"),
			r = Y.createElement("div");
		r.style && (r.style.backgroundClip = "content-box", r.cloneNode(!0).style.backgroundClip = "", J.clearCloneStyle = "content-box" === r.style.backgroundClip, s.style.cssText = "border:0;width:0;height:0;top:0;left:-9999px;margin-top:1px;position:absolute", s.appendChild(r), t.getComputedStyle && Q.extend(J, {
			pixelPosition: function() {
				return e(), i
			},
			boxSizingReliable: function() {
				return null == n && e(), n
			},
			reliableMarginRight: function() {
				var e, i = r.appendChild(Y.createElement("div"));
				return i.style.cssText = r.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", i.style.marginRight = i.style.width = "0", r.style.width = "1px", o.appendChild(s), e = !parseFloat(t.getComputedStyle(i, null).marginRight), o.removeChild(s), r.removeChild(i), e
			}
		}))
	}(), Q.swap = function(t, e, i, n) {
		var o, s, r = {};
		for (s in e) r[s] = t.style[s], t.style[s] = e[s];
		o = i.apply(t, n || []);
		for (s in e) t.style[s] = r[s];
		return o
	};
	var qe = /^(none|table(?!-c[ea]).+)/,
		We = new RegExp("^(" + be + ")(.*)$", "i"),
		Ze = new RegExp("^([+-])=(" + be + ")", "i"),
		Ge = {
			position: "absolute",
			visibility: "hidden",
			display: "block"
		},
		Ve = {
			letterSpacing: "0",
			fontWeight: "400"
		},
		Xe = ["Webkit", "O", "Moz", "ms"];
	Q.extend({
		cssHooks: {
			opacity: {
				get: function(t, e) {
					if (e) {
						var i = b(t, "opacity");
						return "" === i ? "1" : i
					}
				}
			}
		},
		cssNumber: {
			columnCount: !0,
			fillOpacity: !0,
			flexGrow: !0,
			flexShrink: !0,
			fontWeight: !0,
			lineHeight: !0,
			opacity: !0,
			order: !0,
			orphans: !0,
			widows: !0,
			zIndex: !0,
			zoom: !0
		},
		cssProps: {
			"float": "cssFloat"
		},
		style: function(t, e, i, n) {
			if (t && 3 !== t.nodeType && 8 !== t.nodeType && t.style) {
				var o, s, r, a = Q.camelCase(e),
					l = t.style;
				return e = Q.cssProps[a] || (Q.cssProps[a] = w(l, a)), r = Q.cssHooks[e] || Q.cssHooks[a], void 0 === i ? r && "get" in r && void 0 !== (o = r.get(t, !1, n)) ? o : l[e] : (s = typeof i, "string" === s && (o = Ze.exec(i)) && (i = (o[1] + 1) * o[2] + parseFloat(Q.css(t, e)), s = "number"), void(null != i && i === i && ("number" !== s || Q.cssNumber[a] || (i += "px"), J.clearCloneStyle || "" !== i || 0 !== e.indexOf("background") || (l[e] = "inherit"), r && "set" in r && void 0 === (i = r.set(t, i, n)) || (l[e] = i))))
			}
		},
		css: function(t, e, i, n) {
			var o, s, r, a = Q.camelCase(e);
			return e = Q.cssProps[a] || (Q.cssProps[a] = w(t.style, a)), r = Q.cssHooks[e] || Q.cssHooks[a], r && "get" in r && (o = r.get(t, !0, i)), void 0 === o && (o = b(t, e, n)), "normal" === o && e in Ve && (o = Ve[e]), "" === i || i ? (s = parseFloat(o), i === !0 || Q.isNumeric(s) ? s || 0 : o) : o
		}
	}), Q.each(["height", "width"], function(t, e) {
		Q.cssHooks[e] = {
			get: function(t, i, n) {
				return i ? qe.test(Q.css(t, "display")) && 0 === t.offsetWidth ? Q.swap(t, Ge, function() {
					return E(t, e, n)
				}) : E(t, e, n) : void 0
			},
			set: function(t, i, n) {
				var o = n && Fe(t);
				return x(t, i, n ? C(t, e, n, "border-box" === Q.css(t, "boxSizing", !1, o), o) : 0)
			}
		}
	}), Q.cssHooks.marginRight = L(J.reliableMarginRight, function(t, e) {
		return e ? Q.swap(t, {
			display: "inline-block"
		}, b, [t, "marginRight"]) : void 0
	}), Q.each({
		margin: "",
		padding: "",
		border: "Width"
	}, function(t, e) {
		Q.cssHooks[t + e] = {
			expand: function(i) {
				for (var n = 0, o = {}, s = "string" == typeof i ? i.split(" ") : [i]; 4 > n; n++) o[t + Le[n] + e] = s[n] || s[n - 2] || s[0];
				return o
			}
		}, je.test(t) || (Q.cssHooks[t + e].set = x)
	}), Q.fn.extend({
		css: function(t, e) {
			return ge(this, function(t, e, i) {
				var n, o, s = {},
					r = 0;
				if (Q.isArray(e)) {
					for (n = Fe(t), o = e.length; o > r; r++) s[e[r]] = Q.css(t, e[r], !1, n);
					return s
				}
				return void 0 !== i ? Q.style(t, e, i) : Q.css(t, e)
			}, t, e, arguments.length > 1)
		},
		show: function() {
			return P(this, !0)
		},
		hide: function() {
			return P(this)
		},
		toggle: function(t) {
			return "boolean" == typeof t ? t ? this.show() : this.hide() : this.each(function() {
				we(this) ? Q(this).show() : Q(this).hide()
			})
		}
	}), Q.Tween = S, S.prototype = {
		constructor: S,
		init: function(t, e, i, n, o, s) {
			this.elem = t, this.prop = i, this.easing = o || "swing", this.options = e, this.start = this.now = this.cur(), this.end = n, this.unit = s || (Q.cssNumber[i] ? "" : "px")
		},
		cur: function() {
			var t = S.propHooks[this.prop];
			return t && t.get ? t.get(this) : S.propHooks._default.get(this)
		},
		run: function(t) {
			var e, i = S.propHooks[this.prop];
			return this.pos = e = this.options.duration ? Q.easing[this.easing](t, this.options.duration * t, 0, 1, this.options.duration) : t, this.now = (this.end - this.start) * e + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), i && i.set ? i.set(this) : S.propHooks._default.set(this), this
		}
	}, S.prototype.init.prototype = S.prototype, S.propHooks = {
		_default: {
			get: function(t) {
				var e;
				return null == t.elem[t.prop] || t.elem.style && null != t.elem.style[t.prop] ? (e = Q.css(t.elem, t.prop, ""), e && "auto" !== e ? e : 0) : t.elem[t.prop]
			},
			set: function(t) {
				Q.fx.step[t.prop] ? Q.fx.step[t.prop](t) : t.elem.style && (null != t.elem.style[Q.cssProps[t.prop]] || Q.cssHooks[t.prop]) ? Q.style(t.elem, t.prop, t.now + t.unit) : t.elem[t.prop] = t.now
			}
		}
	}, S.propHooks.scrollTop = S.propHooks.scrollLeft = {
		set: function(t) {
			t.elem.nodeType && t.elem.parentNode && (t.elem[t.prop] = t.now)
		}
	}, Q.easing = {
		linear: function(t) {
			return t
		},
		swing: function(t) {
			return .5 - Math.cos(t * Math.PI) / 2
		}
	}, Q.fx = S.prototype.init, Q.fx.step = {};
	var Je, Ye, Ke = /^(?:toggle|show|hide)$/,
		Qe = new RegExp("^(?:([+-])=|)(" + be + ")([a-z%]*)$", "i"),
		ti = /queueHooks$/,
		ei = [A],
		ii = {
			"*": [
				function(t, e) {
					var i = this.createTween(t, e),
						n = i.cur(),
						o = Qe.exec(e),
						s = o && o[3] || (Q.cssNumber[t] ? "" : "px"),
						r = (Q.cssNumber[t] || "px" !== s && +n) && Qe.exec(Q.css(i.elem, t)),
						a = 1,
						l = 20;
					if (r && r[3] !== s) {
						s = s || r[3], o = o || [], r = +n || 1;
						do a = a || ".5", r /= a, Q.style(i.elem, t, r + s); while (a !== (a = i.cur() / n) && 1 !== a && --l)
					}
					return o && (r = i.start = +r || +n || 0, i.unit = s, i.end = o[1] ? r + (o[1] + 1) * o[2] : +o[2]), i
				}
			]
		};
	Q.Animation = Q.extend(N, {
			tweener: function(t, e) {
				Q.isFunction(t) ? (e = t, t = ["*"]) : t = t.split(" ");
				for (var i, n = 0, o = t.length; o > n; n++) i = t[n], ii[i] = ii[i] || [], ii[i].unshift(e)
			},
			prefilter: function(t, e) {
				e ? ei.unshift(t) : ei.push(t)
			}
		}), Q.speed = function(t, e, i) {
			var n = t && "object" == typeof t ? Q.extend({}, t) : {
				complete: i || !i && e || Q.isFunction(t) && t,
				duration: t,
				easing: i && e || e && !Q.isFunction(e) && e
			};
			return n.duration = Q.fx.off ? 0 : "number" == typeof n.duration ? n.duration : n.duration in Q.fx.speeds ? Q.fx.speeds[n.duration] : Q.fx.speeds._default, (null == n.queue || n.queue === !0) && (n.queue = "fx"), n.old = n.complete, n.complete = function() {
				Q.isFunction(n.old) && n.old.call(this), n.queue && Q.dequeue(this, n.queue)
			}, n
		}, Q.fn.extend({
			fadeTo: function(t, e, i, n) {
				return this.filter(we).css("opacity", 0).show().end().animate({
					opacity: e
				}, t, i, n)
			},
			animate: function(t, e, i, n) {
				var o = Q.isEmptyObject(t),
					s = Q.speed(e, i, n),
					r = function() {
						var e = N(this, Q.extend({}, t), s);
						(o || ve.get(this, "finish")) && e.stop(!0)
					};
				return r.finish = r, o || s.queue === !1 ? this.each(r) : this.queue(s.queue, r)
			},
			stop: function(t, e, i) {
				var n = function(t) {
					var e = t.stop;
					delete t.stop, e(i)
				};
				return "string" != typeof t && (i = e, e = t, t = void 0), e && t !== !1 && this.queue(t || "fx", []), this.each(function() {
					var e = !0,
						o = null != t && t + "queueHooks",
						s = Q.timers,
						r = ve.get(this);
					if (o) r[o] && r[o].stop && n(r[o]);
					else
						for (o in r) r[o] && r[o].stop && ti.test(o) && n(r[o]);
					for (o = s.length; o--;) s[o].elem !== this || null != t && s[o].queue !== t || (s[o].anim.stop(i), e = !1, s.splice(o, 1));
					(e || !i) && Q.dequeue(this, t)
				})
			},
			finish: function(t) {
				return t !== !1 && (t = t || "fx"), this.each(function() {
					var e, i = ve.get(this),
						n = i[t + "queue"],
						o = i[t + "queueHooks"],
						s = Q.timers,
						r = n ? n.length : 0;
					for (i.finish = !0, Q.queue(this, t, []), o && o.stop && o.stop.call(this, !0), e = s.length; e--;) s[e].elem === this && s[e].queue === t && (s[e].anim.stop(!0), s.splice(e, 1));
					for (e = 0; r > e; e++) n[e] && n[e].finish && n[e].finish.call(this);
					delete i.finish
				})
			}
		}), Q.each(["toggle", "show", "hide"], function(t, e) {
			var i = Q.fn[e];
			Q.fn[e] = function(t, n, o) {
				return null == t || "boolean" == typeof t ? i.apply(this, arguments) : this.animate(D(e, !0), t, n, o)
			}
		}), Q.each({
			slideDown: D("show"),
			slideUp: D("hide"),
			slideToggle: D("toggle"),
			fadeIn: {
				opacity: "show"
			},
			fadeOut: {
				opacity: "hide"
			},
			fadeToggle: {
				opacity: "toggle"
			}
		}, function(t, e) {
			Q.fn[t] = function(t, i, n) {
				return this.animate(e, t, i, n)
			}
		}), Q.timers = [], Q.fx.tick = function() {
			var t, e = 0,
				i = Q.timers;
			for (Je = Q.now(); e < i.length; e++) t = i[e], t() || i[e] !== t || i.splice(e--, 1);
			i.length || Q.fx.stop(), Je = void 0
		}, Q.fx.timer = function(t) {
			Q.timers.push(t), t() ? Q.fx.start() : Q.timers.pop()
		}, Q.fx.interval = 13, Q.fx.start = function() {
			Ye || (Ye = setInterval(Q.fx.tick, Q.fx.interval))
		}, Q.fx.stop = function() {
			clearInterval(Ye), Ye = null
		}, Q.fx.speeds = {
			slow: 600,
			fast: 200,
			_default: 400
		}, Q.fn.delay = function(t, e) {
			return t = Q.fx ? Q.fx.speeds[t] || t : t, e = e || "fx", this.queue(e, function(e, i) {
				var n = setTimeout(e, t);
				i.stop = function() {
					clearTimeout(n)
				}
			})
		},
		function() {
			var t = Y.createElement("input"),
				e = Y.createElement("select"),
				i = e.appendChild(Y.createElement("option"));
			t.type = "checkbox", J.checkOn = "" !== t.value, J.optSelected = i.selected, e.disabled = !0, J.optDisabled = !i.disabled, t = Y.createElement("input"), t.value = "t", t.type = "radio", J.radioValue = "t" === t.value
		}();
	var ni, oi, si = Q.expr.attrHandle;
	Q.fn.extend({
		attr: function(t, e) {
			return ge(this, Q.attr, t, e, arguments.length > 1)
		},
		removeAttr: function(t) {
			return this.each(function() {
				Q.removeAttr(this, t)
			})
		}
	}), Q.extend({
		attr: function(t, e, i) {
			var n, o, s = t.nodeType;
			return t && 3 !== s && 8 !== s && 2 !== s ? typeof t.getAttribute === Ce ? Q.prop(t, e, i) : (1 === s && Q.isXMLDoc(t) || (e = e.toLowerCase(), n = Q.attrHooks[e] || (Q.expr.match.bool.test(e) ? oi : ni)), void 0 === i ? n && "get" in n && null !== (o = n.get(t, e)) ? o : (o = Q.find.attr(t, e), null == o ? void 0 : o) : null !== i ? n && "set" in n && void 0 !== (o = n.set(t, i, e)) ? o : (t.setAttribute(e, i + ""), i) : void Q.removeAttr(t, e)) : void 0
		},
		removeAttr: function(t, e) {
			var i, n, o = 0,
				s = e && e.match(de);
			if (s && 1 === t.nodeType)
				for (; i = s[o++];) n = Q.propFix[i] || i, Q.expr.match.bool.test(i) && (t[n] = !1), t.removeAttribute(i)
		},
		attrHooks: {
			type: {
				set: function(t, e) {
					if (!J.radioValue && "radio" === e && Q.nodeName(t, "input")) {
						var i = t.value;
						return t.setAttribute("type", e), i && (t.value = i), e
					}
				}
			}
		}
	}), oi = {
		set: function(t, e, i) {
			return e === !1 ? Q.removeAttr(t, i) : t.setAttribute(i, i), i
		}
	}, Q.each(Q.expr.match.bool.source.match(/\w+/g), function(t, e) {
		var i = si[e] || Q.find.attr;
		si[e] = function(t, e, n) {
			var o, s;
			return n || (s = si[e], si[e] = o, o = null != i(t, e, n) ? e.toLowerCase() : null, si[e] = s), o
		}
	});
	var ri = /^(?:input|select|textarea|button)$/i;
	Q.fn.extend({
		prop: function(t, e) {
			return ge(this, Q.prop, t, e, arguments.length > 1)
		},
		removeProp: function(t) {
			return this.each(function() {
				delete this[Q.propFix[t] || t]
			})
		}
	}), Q.extend({
		propFix: {
			"for": "htmlFor",
			"class": "className"
		},
		prop: function(t, e, i) {
			var n, o, s, r = t.nodeType;
			return t && 3 !== r && 8 !== r && 2 !== r ? (s = 1 !== r || !Q.isXMLDoc(t), s && (e = Q.propFix[e] || e, o = Q.propHooks[e]), void 0 !== i ? o && "set" in o && void 0 !== (n = o.set(t, i, e)) ? n : t[e] = i : o && "get" in o && null !== (n = o.get(t, e)) ? n : t[e]) : void 0
		},
		propHooks: {
			tabIndex: {
				get: function(t) {
					return t.hasAttribute("tabindex") || ri.test(t.nodeName) || t.href ? t.tabIndex : -1
				}
			}
		}
	}), J.optSelected || (Q.propHooks.selected = {
		get: function(t) {
			var e = t.parentNode;
			return e && e.parentNode && e.parentNode.selectedIndex, null
		}
	}), Q.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
		Q.propFix[this.toLowerCase()] = this
	});
	var ai = /[\t\r\n\f]/g;
	Q.fn.extend({
		addClass: function(t) {
			var e, i, n, o, s, r, a = "string" == typeof t && t,
				l = 0,
				u = this.length;
			if (Q.isFunction(t)) return this.each(function(e) {
				Q(this).addClass(t.call(this, e, this.className))
			});
			if (a)
				for (e = (t || "").match(de) || []; u > l; l++)
					if (i = this[l], n = 1 === i.nodeType && (i.className ? (" " + i.className + " ").replace(ai, " ") : " ")) {
						for (s = 0; o = e[s++];) n.indexOf(" " + o + " ") < 0 && (n += o + " ");
						r = Q.trim(n), i.className !== r && (i.className = r)
					}
			return this
		},
		removeClass: function(t) {
			var e, i, n, o, s, r, a = 0 === arguments.length || "string" == typeof t && t,
				l = 0,
				u = this.length;
			if (Q.isFunction(t)) return this.each(function(e) {
				Q(this).removeClass(t.call(this, e, this.className))
			});
			if (a)
				for (e = (t || "").match(de) || []; u > l; l++)
					if (i = this[l], n = 1 === i.nodeType && (i.className ? (" " + i.className + " ").replace(ai, " ") : "")) {
						for (s = 0; o = e[s++];)
							for (; n.indexOf(" " + o + " ") >= 0;) n = n.replace(" " + o + " ", " ");
						r = t ? Q.trim(n) : "", i.className !== r && (i.className = r)
					}
			return this
		},
		toggleClass: function(t, e) {
			var i = typeof t;
			return "boolean" == typeof e && "string" === i ? e ? this.addClass(t) : this.removeClass(t) : this.each(Q.isFunction(t) ? function(i) {
				Q(this).toggleClass(t.call(this, i, this.className, e), e)
			} : function() {
				if ("string" === i)
					for (var e, n = 0, o = Q(this), s = t.match(de) || []; e = s[n++];) o.hasClass(e) ? o.removeClass(e) : o.addClass(e);
				else(i === Ce || "boolean" === i) && (this.className && ve.set(this, "__className__", this.className), this.className = this.className || t === !1 ? "" : ve.get(this, "__className__") || "")
			})
		},
		hasClass: function(t) {
			for (var e = " " + t + " ", i = 0, n = this.length; n > i; i++)
				if (1 === this[i].nodeType && (" " + this[i].className + " ").replace(ai, " ").indexOf(e) >= 0) return !0;
			return !1
		}
	});
	var li = /\r/g;
	Q.fn.extend({
		val: function(t) {
			var e, i, n, o = this[0];
			return arguments.length ? (n = Q.isFunction(t), this.each(function(i) {
				var o;
				1 === this.nodeType && (o = n ? t.call(this, i, Q(this).val()) : t, null == o ? o = "" : "number" == typeof o ? o += "" : Q.isArray(o) && (o = Q.map(o, function(t) {
					return null == t ? "" : t + ""
				})), e = Q.valHooks[this.type] || Q.valHooks[this.nodeName.toLowerCase()], e && "set" in e && void 0 !== e.set(this, o, "value") || (this.value = o))
			})) : o ? (e = Q.valHooks[o.type] || Q.valHooks[o.nodeName.toLowerCase()], e && "get" in e && void 0 !== (i = e.get(o, "value")) ? i : (i = o.value, "string" == typeof i ? i.replace(li, "") : null == i ? "" : i)) : void 0
		}
	}), Q.extend({
		valHooks: {
			option: {
				get: function(t) {
					var e = Q.find.attr(t, "value");
					return null != e ? e : Q.trim(Q.text(t))
				}
			},
			select: {
				get: function(t) {
					for (var e, i, n = t.options, o = t.selectedIndex, s = "select-one" === t.type || 0 > o, r = s ? null : [], a = s ? o + 1 : n.length, l = 0 > o ? a : s ? o : 0; a > l; l++)
						if (i = n[l], !(!i.selected && l !== o || (J.optDisabled ? i.disabled : null !== i.getAttribute("disabled")) || i.parentNode.disabled && Q.nodeName(i.parentNode, "optgroup"))) {
							if (e = Q(i).val(), s) return e;
							r.push(e)
						}
					return r
				},
				set: function(t, e) {
					for (var i, n, o = t.options, s = Q.makeArray(e), r = o.length; r--;) n = o[r], (n.selected = Q.inArray(n.value, s) >= 0) && (i = !0);
					return i || (t.selectedIndex = -1), s
				}
			}
		}
	}), Q.each(["radio", "checkbox"], function() {
		Q.valHooks[this] = {
			set: function(t, e) {
				return Q.isArray(e) ? t.checked = Q.inArray(Q(t).val(), e) >= 0 : void 0
			}
		}, J.checkOn || (Q.valHooks[this].get = function(t) {
			return null === t.getAttribute("value") ? "on" : t.value
		})
	}), Q.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(t, e) {
		Q.fn[e] = function(t, i) {
			return arguments.length > 0 ? this.on(e, null, t, i) : this.trigger(e)
		}
	}), Q.fn.extend({
		hover: function(t, e) {
			return this.mouseenter(t).mouseleave(e || t)
		},
		bind: function(t, e, i) {
			return this.on(t, null, e, i)
		},
		unbind: function(t, e) {
			return this.off(t, null, e)
		},
		delegate: function(t, e, i, n) {
			return this.on(e, t, i, n)
		},
		undelegate: function(t, e, i) {
			return 1 === arguments.length ? this.off(t, "**") : this.off(e, t || "**", i)
		}
	});
	var ui = Q.now(),
		ci = /\?/;
	Q.parseJSON = function(t) {
		return JSON.parse(t + "")
	}, Q.parseXML = function(t) {
		var e, i;
		if (!t || "string" != typeof t) return null;
		try {
			i = new DOMParser, e = i.parseFromString(t, "text/xml")
		} catch (n) {
			e = void 0
		}
		return (!e || e.getElementsByTagName("parsererror").length) && Q.error("Invalid XML: " + t), e
	};
	var hi = /#.*$/,
		pi = /([?&])_=[^&]*/,
		di = /^(.*?):[ \t]*([^\r\n]*)$/gm,
		fi = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
		mi = /^(?:GET|HEAD)$/,
		gi = /^\/\//,
		vi = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,
		_i = {},
		yi = {},
		Ti = "*/".concat("*"),
		bi = t.location.href,
		Li = vi.exec(bi.toLowerCase()) || [];
	Q.extend({
		active: 0,
		lastModified: {},
		etag: {},
		ajaxSettings: {
			url: bi,
			type: "GET",
			isLocal: fi.test(Li[1]),
			global: !0,
			processData: !0,
			async: !0,
			contentType: "application/x-www-form-urlencoded; charset=UTF-8",
			accepts: {
				"*": Ti,
				text: "text/plain",
				html: "text/html",
				xml: "application/xml, text/xml",
				json: "application/json, text/javascript"
			},
			contents: {
				xml: /xml/,
				html: /html/,
				json: /json/
			},
			responseFields: {
				xml: "responseXML",
				text: "responseText",
				json: "responseJSON"
			},
			converters: {
				"* text": String,
				"text html": !0,
				"text json": Q.parseJSON,
				"text xml": Q.parseXML
			},
			flatOptions: {
				url: !0,
				context: !0
			}
		},
		ajaxSetup: function(t, e) {
			return e ? U(U(t, Q.ajaxSettings), e) : U(Q.ajaxSettings, t)
		},
		ajaxPrefilter: I(_i),
		ajaxTransport: I(yi),
		ajax: function(t, e) {
			function i(t, e, i, r) {
				var l, c, v, _, T, L = e;
				2 !== y && (y = 2, a && clearTimeout(a), n = void 0, s = r || "", b.readyState = t > 0 ? 4 : 0, l = t >= 200 && 300 > t || 304 === t, i && (_ = z(h, b, i)), _ = H(h, _, b, l), l ? (h.ifModified && (T = b.getResponseHeader("Last-Modified"), T && (Q.lastModified[o] = T), T = b.getResponseHeader("etag"), T && (Q.etag[o] = T)), 204 === t || "HEAD" === h.type ? L = "nocontent" : 304 === t ? L = "notmodified" : (L = _.state, c = _.data, v = _.error, l = !v)) : (v = L, (t || !L) && (L = "error", 0 > t && (t = 0))), b.status = t, b.statusText = (e || L) + "", l ? f.resolveWith(p, [c, L, b]) : f.rejectWith(p, [b, L, v]), b.statusCode(g), g = void 0, u && d.trigger(l ? "ajaxSuccess" : "ajaxError", [b, h, l ? c : v]), m.fireWith(p, [b, L]), u && (d.trigger("ajaxComplete", [b, h]), --Q.active || Q.event.trigger("ajaxStop")))
			}
			"object" == typeof t && (e = t, t = void 0), e = e || {};
			var n, o, s, r, a, l, u, c, h = Q.ajaxSetup({}, e),
				p = h.context || h,
				d = h.context && (p.nodeType || p.jquery) ? Q(p) : Q.event,
				f = Q.Deferred(),
				m = Q.Callbacks("once memory"),
				g = h.statusCode || {},
				v = {},
				_ = {},
				y = 0,
				T = "canceled",
				b = {
					readyState: 0,
					getResponseHeader: function(t) {
						var e;
						if (2 === y) {
							if (!r)
								for (r = {}; e = di.exec(s);) r[e[1].toLowerCase()] = e[2];
							e = r[t.toLowerCase()]
						}
						return null == e ? null : e
					},
					getAllResponseHeaders: function() {
						return 2 === y ? s : null
					},
					setRequestHeader: function(t, e) {
						var i = t.toLowerCase();
						return y || (t = _[i] = _[i] || t, v[t] = e), this
					},
					overrideMimeType: function(t) {
						return y || (h.mimeType = t), this
					},
					statusCode: function(t) {
						var e;
						if (t)
							if (2 > y)
								for (e in t) g[e] = [g[e], t[e]];
							else b.always(t[b.status]);
						return this
					},
					abort: function(t) {
						var e = t || T;
						return n && n.abort(e), i(0, e), this
					}
				};
			if (f.promise(b).complete = m.add, b.success = b.done, b.error = b.fail, h.url = ((t || h.url || bi) + "").replace(hi, "").replace(gi, Li[1] + "//"), h.type = e.method || e.type || h.method || h.type, h.dataTypes = Q.trim(h.dataType || "*").toLowerCase().match(de) || [""], null == h.crossDomain && (l = vi.exec(h.url.toLowerCase()), h.crossDomain = !(!l || l[1] === Li[1] && l[2] === Li[2] && (l[3] || ("http:" === l[1] ? "80" : "443")) === (Li[3] || ("http:" === Li[1] ? "80" : "443")))), h.data && h.processData && "string" != typeof h.data && (h.data = Q.param(h.data, h.traditional)), R(_i, h, e, b), 2 === y) return b;
			u = Q.event && h.global, u && 0 === Q.active++ && Q.event.trigger("ajaxStart"), h.type = h.type.toUpperCase(), h.hasContent = !mi.test(h.type), o = h.url, h.hasContent || (h.data && (o = h.url += (ci.test(o) ? "&" : "?") + h.data, delete h.data), h.cache === !1 && (h.url = pi.test(o) ? o.replace(pi, "$1_=" + ui++) : o + (ci.test(o) ? "&" : "?") + "_=" + ui++)), h.ifModified && (Q.lastModified[o] && b.setRequestHeader("If-Modified-Since", Q.lastModified[o]), Q.etag[o] && b.setRequestHeader("If-None-Match", Q.etag[o])), (h.data && h.hasContent && h.contentType !== !1 || e.contentType) && b.setRequestHeader("Content-Type", h.contentType), b.setRequestHeader("Accept", h.dataTypes[0] && h.accepts[h.dataTypes[0]] ? h.accepts[h.dataTypes[0]] + ("*" !== h.dataTypes[0] ? ", " + Ti + "; q=0.01" : "") : h.accepts["*"]);
			for (c in h.headers) b.setRequestHeader(c, h.headers[c]);
			if (h.beforeSend && (h.beforeSend.call(p, b, h) === !1 || 2 === y)) return b.abort();
			T = "abort";
			for (c in {
				success: 1,
				error: 1,
				complete: 1
			}) b[c](h[c]);
			if (n = R(yi, h, e, b)) {
				b.readyState = 1, u && d.trigger("ajaxSend", [b, h]), h.async && h.timeout > 0 && (a = setTimeout(function() {
					b.abort("timeout")
				}, h.timeout));
				try {
					y = 1, n.send(v, i)
				} catch (L) {
					if (!(2 > y)) throw L;
					i(-1, L)
				}
			} else i(-1, "No Transport");
			return b
		},
		getJSON: function(t, e, i) {
			return Q.get(t, e, i, "json")
		},
		getScript: function(t, e) {
			return Q.get(t, void 0, e, "script")
		}
	}), Q.each(["get", "post"], function(t, e) {
		Q[e] = function(t, i, n, o) {
			return Q.isFunction(i) && (o = o || n, n = i, i = void 0), Q.ajax({
				url: t,
				type: e,
				dataType: o,
				data: i,
				success: n
			})
		}
	}), Q._evalUrl = function(t) {
		return Q.ajax({
			url: t,
			type: "GET",
			dataType: "script",
			async: !1,
			global: !1,
			"throws": !0
		})
	}, Q.fn.extend({
		wrapAll: function(t) {
			var e;
			return Q.isFunction(t) ? this.each(function(e) {
				Q(this).wrapAll(t.call(this, e))
			}) : (this[0] && (e = Q(t, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && e.insertBefore(this[0]), e.map(function() {
				for (var t = this; t.firstElementChild;) t = t.firstElementChild;
				return t
			}).append(this)), this)
		},
		wrapInner: function(t) {
			return this.each(Q.isFunction(t) ? function(e) {
				Q(this).wrapInner(t.call(this, e))
			} : function() {
				var e = Q(this),
					i = e.contents();
				i.length ? i.wrapAll(t) : e.append(t)
			})
		},
		wrap: function(t) {
			var e = Q.isFunction(t);
			return this.each(function(i) {
				Q(this).wrapAll(e ? t.call(this, i) : t)
			})
		},
		unwrap: function() {
			return this.parent().each(function() {
				Q.nodeName(this, "body") || Q(this).replaceWith(this.childNodes)
			}).end()
		}
	}), Q.expr.filters.hidden = function(t) {
		return t.offsetWidth <= 0 && t.offsetHeight <= 0
	}, Q.expr.filters.visible = function(t) {
		return !Q.expr.filters.hidden(t)
	};
	var wi = /%20/g,
		xi = /\[\]$/,
		Ci = /\r?\n/g,
		Ei = /^(?:submit|button|image|reset|file)$/i,
		Pi = /^(?:input|select|textarea|keygen)/i;
	Q.param = function(t, e) {
		var i, n = [],
			o = function(t, e) {
				e = Q.isFunction(e) ? e() : null == e ? "" : e, n[n.length] = encodeURIComponent(t) + "=" + encodeURIComponent(e)
			};
		if (void 0 === e && (e = Q.ajaxSettings && Q.ajaxSettings.traditional), Q.isArray(t) || t.jquery && !Q.isPlainObject(t)) Q.each(t, function() {
			o(this.name, this.value)
		});
		else
			for (i in t) B(i, t[i], e, o);
		return n.join("&").replace(wi, "+")
	}, Q.fn.extend({
		serialize: function() {
			return Q.param(this.serializeArray())
		},
		serializeArray: function() {
			return this.map(function() {
				var t = Q.prop(this, "elements");
				return t ? Q.makeArray(t) : this
			}).filter(function() {
				var t = this.type;
				return this.name && !Q(this).is(":disabled") && Pi.test(this.nodeName) && !Ei.test(t) && (this.checked || !xe.test(t))
			}).map(function(t, e) {
				var i = Q(this).val();
				return null == i ? null : Q.isArray(i) ? Q.map(i, function(t) {
					return {
						name: e.name,
						value: t.replace(Ci, "\r\n")
					}
				}) : {
					name: e.name,
					value: i.replace(Ci, "\r\n")
				}
			}).get()
		}
	}), Q.ajaxSettings.xhr = function() {
		try {
			return new XMLHttpRequest
		} catch (t) {}
	};
	var Si = 0,
		ki = {},
		Di = {
			0: 200,
			1223: 204
		},
		Mi = Q.ajaxSettings.xhr();
	t.attachEvent && t.attachEvent("onunload", function() {
		for (var t in ki) ki[t]()
	}), J.cors = !!Mi && "withCredentials" in Mi, J.ajax = Mi = !!Mi, Q.ajaxTransport(function(t) {
		var e;
		return J.cors || Mi && !t.crossDomain ? {
			send: function(i, n) {
				var o, s = t.xhr(),
					r = ++Si;
				if (s.open(t.type, t.url, t.async, t.username, t.password), t.xhrFields)
					for (o in t.xhrFields) s[o] = t.xhrFields[o];
				t.mimeType && s.overrideMimeType && s.overrideMimeType(t.mimeType), t.crossDomain || i["X-Requested-With"] || (i["X-Requested-With"] = "XMLHttpRequest");
				for (o in i) s.setRequestHeader(o, i[o]);
				e = function(t) {
					return function() {
						e && (delete ki[r], e = s.onload = s.onerror = null, "abort" === t ? s.abort() : "error" === t ? n(s.status, s.statusText) : n(Di[s.status] || s.status, s.statusText, "string" == typeof s.responseText ? {
							text: s.responseText
						} : void 0, s.getAllResponseHeaders()))
					}
				}, s.onload = e(), s.onerror = e("error"), e = ki[r] = e("abort");
				try {
					s.send(t.hasContent && t.data || null)
				} catch (a) {
					if (e) throw a
				}
			},
			abort: function() {
				e && e()
			}
		} : void 0
	}), Q.ajaxSetup({
		accepts: {
			script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
		},
		contents: {
			script: /(?:java|ecma)script/
		},
		converters: {
			"text script": function(t) {
				return Q.globalEval(t), t
			}
		}
	}), Q.ajaxPrefilter("script", function(t) {
		void 0 === t.cache && (t.cache = !1), t.crossDomain && (t.type = "GET")
	}), Q.ajaxTransport("script", function(t) {
		if (t.crossDomain) {
			var e, i;
			return {
				send: function(n, o) {
					e = Q("<script>").prop({
						async: !0,
						charset: t.scriptCharset,
						src: t.url
					}).on("load error", i = function(t) {
						e.remove(), i = null, t && o("error" === t.type ? 404 : 200, t.type)
					}), Y.head.appendChild(e[0])
				},
				abort: function() {
					i && i()
				}
			}
		}
	});
	var Ai = [],
		Oi = /(=)\?(?=&|$)|\?\?/;
	Q.ajaxSetup({
		jsonp: "callback",
		jsonpCallback: function() {
			var t = Ai.pop() || Q.expando + "_" + ui++;
			return this[t] = !0, t
		}
	}), Q.ajaxPrefilter("json jsonp", function(e, i, n) {
		var o, s, r, a = e.jsonp !== !1 && (Oi.test(e.url) ? "url" : "string" == typeof e.data && !(e.contentType || "").indexOf("application/x-www-form-urlencoded") && Oi.test(e.data) && "data");
		return a || "jsonp" === e.dataTypes[0] ? (o = e.jsonpCallback = Q.isFunction(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback, a ? e[a] = e[a].replace(Oi, "$1" + o) : e.jsonp !== !1 && (e.url += (ci.test(e.url) ? "&" : "?") + e.jsonp + "=" + o), e.converters["script json"] = function() {
			return r || Q.error(o + " was not called"), r[0]
		}, e.dataTypes[0] = "json", s = t[o], t[o] = function() {
			r = arguments
		}, n.always(function() {
			t[o] = s, e[o] && (e.jsonpCallback = i.jsonpCallback, Ai.push(o)), r && Q.isFunction(s) && s(r[0]), r = s = void 0
		}), "script") : void 0
	}), Q.parseHTML = function(t, e, i) {
		if (!t || "string" != typeof t) return null;
		"boolean" == typeof e && (i = e, e = !1), e = e || Y;
		var n = re.exec(t),
			o = !i && [];
		return n ? [e.createElement(n[1])] : (n = Q.buildFragment([t], e, o), o && o.length && Q(o).remove(), Q.merge([], n.childNodes))
	};
	var Ni = Q.fn.load;
	Q.fn.load = function(t, e, i) {
		if ("string" != typeof t && Ni) return Ni.apply(this, arguments);
		var n, o, s, r = this,
			a = t.indexOf(" ");
		return a >= 0 && (n = Q.trim(t.slice(a)), t = t.slice(0, a)), Q.isFunction(e) ? (i = e, e = void 0) : e && "object" == typeof e && (o = "POST"), r.length > 0 && Q.ajax({
			url: t,
			type: o,
			dataType: "html",
			data: e
		}).done(function(t) {
			s = arguments, r.html(n ? Q("<div>").append(Q.parseHTML(t)).find(n) : t)
		}).complete(i && function(t, e) {
			r.each(i, s || [t.responseText, e, t])
		}), this
	}, Q.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(t, e) {
		Q.fn[e] = function(t) {
			return this.on(e, t)
		}
	}), Q.expr.filters.animated = function(t) {
		return Q.grep(Q.timers, function(e) {
			return t === e.elem
		}).length
	};
	var Ii = t.document.documentElement;
	Q.offset = {
		setOffset: function(t, e, i) {
			var n, o, s, r, a, l, u, c = Q.css(t, "position"),
				h = Q(t),
				p = {};
			"static" === c && (t.style.position = "relative"), a = h.offset(), s = Q.css(t, "top"), l = Q.css(t, "left"), u = ("absolute" === c || "fixed" === c) && (s + l).indexOf("auto") > -1, u ? (n = h.position(), r = n.top, o = n.left) : (r = parseFloat(s) || 0, o = parseFloat(l) || 0), Q.isFunction(e) && (e = e.call(t, i, a)), null != e.top && (p.top = e.top - a.top + r), null != e.left && (p.left = e.left - a.left + o), "using" in e ? e.using.call(t, p) : h.css(p)
		}
	}, Q.fn.extend({
		offset: function(t) {
			if (arguments.length) return void 0 === t ? this : this.each(function(e) {
				Q.offset.setOffset(this, t, e)
			});
			var e, i, n = this[0],
				o = {
					top: 0,
					left: 0
				},
				s = n && n.ownerDocument;
			return s ? (e = s.documentElement, Q.contains(e, n) ? (typeof n.getBoundingClientRect !== Ce && (o = n.getBoundingClientRect()), i = j(s), {
				top: o.top + i.pageYOffset - e.clientTop,
				left: o.left + i.pageXOffset - e.clientLeft
			}) : o) : void 0
		},
		position: function() {
			if (this[0]) {
				var t, e, i = this[0],
					n = {
						top: 0,
						left: 0
					};
				return "fixed" === Q.css(i, "position") ? e = i.getBoundingClientRect() : (t = this.offsetParent(), e = this.offset(), Q.nodeName(t[0], "html") || (n = t.offset()), n.top += Q.css(t[0], "borderTopWidth", !0), n.left += Q.css(t[0], "borderLeftWidth", !0)), {
					top: e.top - n.top - Q.css(i, "marginTop", !0),
					left: e.left - n.left - Q.css(i, "marginLeft", !0)
				}
			}
		},
		offsetParent: function() {
			return this.map(function() {
				for (var t = this.offsetParent || Ii; t && !Q.nodeName(t, "html") && "static" === Q.css(t, "position");) t = t.offsetParent;
				return t || Ii
			})
		}
	}), Q.each({
		scrollLeft: "pageXOffset",
		scrollTop: "pageYOffset"
	}, function(e, i) {
		var n = "pageYOffset" === i;
		Q.fn[e] = function(o) {
			return ge(this, function(e, o, s) {
				var r = j(e);
				return void 0 === s ? r ? r[i] : e[o] : void(r ? r.scrollTo(n ? t.pageXOffset : s, n ? s : t.pageYOffset) : e[o] = s)
			}, e, o, arguments.length, null)
		}
	}), Q.each(["top", "left"], function(t, e) {
		Q.cssHooks[e] = L(J.pixelPosition, function(t, i) {
			return i ? (i = b(t, e), $e.test(i) ? Q(t).position()[e] + "px" : i) : void 0
		})
	}), Q.each({
		Height: "height",
		Width: "width"
	}, function(t, e) {
		Q.each({
			padding: "inner" + t,
			content: e,
			"": "outer" + t
		}, function(i, n) {
			Q.fn[n] = function(n, o) {
				var s = arguments.length && (i || "boolean" != typeof n),
					r = i || (n === !0 || o === !0 ? "margin" : "border");
				return ge(this, function(e, i, n) {
					var o;
					return Q.isWindow(e) ? e.document.documentElement["client" + t] : 9 === e.nodeType ? (o = e.documentElement, Math.max(e.body["scroll" + t], o["scroll" + t], e.body["offset" + t], o["offset" + t], o["client" + t])) : void 0 === n ? Q.css(e, i, r) : Q.style(e, i, n, r)
				}, e, s ? n : void 0, s, null)
			}
		})
	}), Q.fn.size = function() {
		return this.length
	}, Q.fn.andSelf = Q.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function() {
		return Q
	});
	var Ri = t.jQuery,
		Ui = t.$;
	return Q.noConflict = function(e) {
		return t.$ === Q && (t.$ = Ui), e && t.jQuery === Q && (t.jQuery = Ri), Q
	}, typeof e === Ce && (t.jQuery = t.$ = Q), Q
}), ! function(t, e, i, n) {
	"use strict";

	function o(t, e, i) {
		return setTimeout(c(t, i), e)
	}

	function s(t, e, i) {
		return Array.isArray(t) ? (r(t, i[e], i), !0) : !1
	}

	function r(t, e, i) {
		var o;
		if (t)
			if (t.forEach) t.forEach(e, i);
			else if (t.length !== n)
			for (o = 0; o < t.length;) e.call(i, t[o], o, t), o++;
		else
			for (o in t) t.hasOwnProperty(o) && e.call(i, t[o], o, t)
	}

	function a(t, e, i) {
		for (var o = Object.keys(e), s = 0; s < o.length;)(!i || i && t[o[s]] === n) && (t[o[s]] = e[o[s]]), s++;
		return t
	}

	function l(t, e) {
		return a(t, e, !0)
	}

	function u(t, e, i) {
		var n, o = e.prototype;
		n = t.prototype = Object.create(o), n.constructor = t, n._super = o, i && a(n, i)
	}

	function c(t, e) {
		return function() {
			return t.apply(e, arguments)
		}
	}

	function h(t, e) {
		return typeof t == ce ? t.apply(e ? e[0] || n : n, e) : t
	}

	function p(t, e) {
		return t === n ? e : t
	}

	function d(t, e, i) {
		r(v(e), function(e) {
			//t.addEventListener(e, i, !1)
		})
	}

	function f(t, e, i) {
		r(v(e), function(e) {
			t.removeEventListener(e, i, !1)
		})
	}

	function m(t, e) {
		for (; t;) {
			if (t == e) return !0;
			t = t.parentNode
		}
		return !1
	}

	function g(t, e) {
		return t.indexOf(e) > -1
	}

	function v(t) {
		return t.trim().split(/\s+/g)
	}

	function _(t, e, i) {
		if (t.indexOf && !i) return t.indexOf(e);
		for (var n = 0; n < t.length;) {
			if (i && t[n][i] == e || !i && t[n] === e) return n;
			n++
		}
		return -1
	}

	function y(t) {
		return Array.prototype.slice.call(t, 0)
	}

	function T(t, e, i) {
		for (var n = [], o = [], s = 0; s < t.length;) {
			var r = e ? t[s][e] : t[s];
			_(o, r) < 0 && n.push(t[s]), o[s] = r, s++
		}
		return i && (n = e ? n.sort(function(t, i) {
			return t[e] > i[e]
		}) : n.sort()), n
	}

	function b(t, e) {
		for (var i, o, s = e[0].toUpperCase() + e.slice(1), r = 0; r < le.length;) {
			if (i = le[r], o = i ? i + s : e, o in t) return o;
			r++
		}
		return n
	}

	function L() {
		return fe++
	}

	function w(t) {
		/*var e = t.ownerDocument;
		return e.defaultView || e.parentWindow*/
	}

	function x(t, e) {
		var i = this;
		this.manager = t, this.callback = e, this.element = t.element, this.target = t.options.inputTarget, this.domHandler = function(e) {
			h(t.options.enable, [t]) && i.handler(e)
		}, this.init()
	}

	function C(t) {
		var e, i = t.options.inputClass;
		return new(e = i ? i : ve ? H : _e ? $ : ge ? q : z)(t, E)
	}

	function E(t, e, i) {
		var n = i.pointers.length,
			o = i.changedPointers.length,
			s = e & xe && n - o === 0,
			r = e & (Ee | Pe) && n - o === 0;
		i.isFirst = !!s, i.isFinal = !!r, s && (t.session = {}), i.eventType = e, P(t, i), t.emit("hammer.input", i), t.recognize(i), t.session.prevInput = i
	}

	function P(t, e) {
		var i = t.session,
			n = e.pointers,
			o = n.length;
		i.firstInput || (i.firstInput = D(e)), o > 1 && !i.firstMultiple ? i.firstMultiple = D(e) : 1 === o && (i.firstMultiple = !1);
		var s = i.firstInput,
			r = i.firstMultiple,
			a = r ? r.center : s.center,
			l = e.center = M(n);
		e.timeStamp = de(), e.deltaTime = e.timeStamp - s.timeStamp, e.angle = I(a, l), e.distance = N(a, l), S(i, e), e.offsetDirection = O(e.deltaX, e.deltaY), e.scale = r ? U(r.pointers, n) : 1, e.rotation = r ? R(r.pointers, n) : 0, k(i, e);
		var u = t.element;
		m(e.srcEvent.target, u) && (u = e.srcEvent.target), e.target = u
	}

	function S(t, e) {
		var i = e.center,
			n = t.offsetDelta || {},
			o = t.prevDelta || {},
			s = t.prevInput || {};
		(e.eventType === xe || s.eventType === Ee) && (o = t.prevDelta = {
			x: s.deltaX || 0,
			y: s.deltaY || 0
		}, n = t.offsetDelta = {
			x: i.x,
			y: i.y
		}), e.deltaX = o.x + (i.x - n.x), e.deltaY = o.y + (i.y - n.y)
	}

	function k(t, e) {
		var i, o, s, r, a = t.lastInterval || e,
			l = e.timeStamp - a.timeStamp;
		if (e.eventType != Pe && (l > we || a.velocity === n)) {
			var u = a.deltaX - e.deltaX,
				c = a.deltaY - e.deltaY,
				h = A(l, u, c);
			o = h.x, s = h.y, i = pe(h.x) > pe(h.y) ? h.x : h.y, r = O(u, c), t.lastInterval = e
		} else i = a.velocity, o = a.velocityX, s = a.velocityY, r = a.direction;
		e.velocity = i, e.velocityX = o, e.velocityY = s, e.direction = r
	}

	function D(t) {
		for (var e = [], i = 0; i < t.pointers.length;) e[i] = {
			clientX: he(t.pointers[i].clientX),
			clientY: he(t.pointers[i].clientY)
		}, i++;
		return {
			timeStamp: de(),
			pointers: e,
			center: M(e),
			deltaX: t.deltaX,
			deltaY: t.deltaY
		}
	}

	function M(t) {
		var e = t.length;
		if (1 === e) return {
			x: he(t[0].clientX),
			y: he(t[0].clientY)
		};
		for (var i = 0, n = 0, o = 0; e > o;) i += t[o].clientX, n += t[o].clientY, o++;
		return {
			x: he(i / e),
			y: he(n / e)
		}
	}

	function A(t, e, i) {
		return {
			x: e / t || 0,
			y: i / t || 0
		}
	}

	function O(t, e) {
		return t === e ? Se : pe(t) >= pe(e) ? t > 0 ? ke : De : e > 0 ? Me : Ae
	}

	function N(t, e, i) {
		i || (i = Re);
		var n = e[i[0]] - t[i[0]],
			o = e[i[1]] - t[i[1]];
		return Math.sqrt(n * n + o * o)
	}

	function I(t, e, i) {
		i || (i = Re);
		var n = e[i[0]] - t[i[0]],
			o = e[i[1]] - t[i[1]];
		return 180 * Math.atan2(o, n) / Math.PI
	}

	function R(t, e) {
		return I(e[1], e[0], Ue) - I(t[1], t[0], Ue)
	}

	function U(t, e) {
		return N(e[0], e[1], Ue) / N(t[0], t[1], Ue)
	}

	function z() {
		this.evEl = He, this.evWin = Be, this.allow = !0, this.pressed = !1, x.apply(this, arguments)
	}

	function H() {
		this.evEl = Fe, this.evWin = qe, x.apply(this, arguments), this.store = this.manager.session.pointerEvents = []
	}

	function B() {
		this.evTarget = Ze, this.evWin = Ge, this.started = !1, x.apply(this, arguments)
	}

	function j(t, e) {
		var i = y(t.touches),
			n = y(t.changedTouches);
		return e & (Ee | Pe) && (i = T(i.concat(n), "identifier", !0)), [i, n]
	}

	function $() {
		this.evTarget = Xe, this.targetIds = {}, x.apply(this, arguments)
	}

	function F(t, e) {
		var i = y(t.touches),
			n = this.targetIds;
		if (e & (xe | Ce) && 1 === i.length) return n[i[0].identifier] = !0, [i, i];
		var o, s, r = y(t.changedTouches),
			a = [],
			l = this.target;
		if (s = i.filter(function(t) {
			return m(t.target, l)
		}), e === xe)
			for (o = 0; o < s.length;) n[s[o].identifier] = !0, o++;
		for (o = 0; o < r.length;) n[r[o].identifier] && a.push(r[o]), e & (Ee | Pe) && delete n[r[o].identifier], o++;
		return a.length ? [T(s.concat(a), "identifier", !0), a] : void 0
	}

	function q() {
		x.apply(this, arguments);
		var t = c(this.handler, this);
		this.touch = new $(this.manager, t), this.mouse = new z(this.manager, t)
	}

	function W(t, e) {
		this.manager = t, this.set(e)
	}

	function Z(t) {
		if (g(t, ei)) return ei;
		var e = g(t, ii),
			i = g(t, ni);
		return e && i ? ii + " " + ni : e || i ? e ? ii : ni : g(t, ti) ? ti : Qe
	}

	function G(t) {
		this.id = L(), this.manager = null, this.options = l(t || {}, this.defaults), this.options.enable = p(this.options.enable, !0), this.state = oi, this.simultaneous = {}, this.requireFail = []
	}

	function V(t) {
		return t & ui ? "cancel" : t & ai ? "end" : t & ri ? "move" : t & si ? "start" : ""
	}

	function X(t) {
		return t == Ae ? "down" : t == Me ? "up" : t == ke ? "left" : t == De ? "right" : ""
	}

	function J(t, e) {
		var i = e.manager;
		return i ? i.get(t) : t
	}

	function Y() {
		G.apply(this, arguments)
	}

	function K() {
		Y.apply(this, arguments), this.pX = null, this.pY = null
	}

	function Q() {
		Y.apply(this, arguments)
	}

	function te() {
		G.apply(this, arguments), this._timer = null, this._input = null
	}

	function ee() {
		Y.apply(this, arguments)
	}

	function ie() {
		Y.apply(this, arguments)
	}

	function ne() {
		G.apply(this, arguments), this.pTime = !1, this.pCenter = !1, this._timer = null, this._input = null, this.count = 0
	}

	function oe(t, e) {
		return e = e || {}, e.recognizers = p(e.recognizers, oe.defaults.preset), new se(t, e)
	}

	function se(t, e) {
		e = e || {}, this.options = l(e, oe.defaults), this.options.inputTarget = this.options.inputTarget || t, this.handlers = {}, this.session = {}, this.recognizers = [], this.element = t, this.input = C(this), this.touchAction = new W(this, this.options.touchAction), re(this, !0), r(e.recognizers, function(t) {
			var e = this.add(new t[0](t[1]));
			t[2] && e.recognizeWith(t[2]), t[3] && e.requireFailure(t[3])
		}, this)
	}

	function re(t, e) {
		var i = t.element;
		r(t.options.cssProps, function(t, n) {/*
			i.style[b(i.style, n)] = e ? t : ""
		*/})
	}

	function ae(t, i) {
		var n = e.createEvent("Event");
		n.initEvent(t, !0, !0), n.gesture = i, i.target.dispatchEvent(n)
	}
	var le = ["", "webkit", "moz", "MS", "ms", "o"],
		ue = e.createElement("div"),
		ce = "function",
		he = Math.round,
		pe = Math.abs,
		de = Date.now,
		fe = 1,
		me = /mobile|tablet|ip(ad|hone|od)|android/i,
		ge = "ontouchstart" in t,
		ve = b(t, "PointerEvent") !== n,
		_e = ge && me.test(navigator.userAgent),
		ye = "touch",
		Te = "pen",
		be = "mouse",
		Le = "kinect",
		we = 25,
		xe = 1,
		Ce = 2,
		Ee = 4,
		Pe = 8,
		Se = 1,
		ke = 2,
		De = 4,
		Me = 8,
		Ae = 16,
		Oe = ke | De,
		Ne = Me | Ae,
		Ie = Oe | Ne,
		Re = ["x", "y"],
		Ue = ["clientX", "clientY"];
	x.prototype = {
		handler: function() {},
		init: function() {
			this.evEl && d(this.element, this.evEl, this.domHandler), this.evTarget && d(this.target, this.evTarget, this.domHandler), this.evWin && d(w(this.element), this.evWin, this.domHandler)
		},
		destroy: function() {
			this.evEl && f(this.element, this.evEl, this.domHandler), this.evTarget && f(this.target, this.evTarget, this.domHandler), this.evWin && f(w(this.element), this.evWin, this.domHandler)
		}
	};
	var ze = {
			mousedown: xe,
			mousemove: Ce,
			mouseup: Ee
		},
		He = "mousedown",
		Be = "mousemove mouseup";
	u(z, x, {
		handler: function(t) {
			var e = ze[t.type];
			e & xe && 0 === t.button && (this.pressed = !0), e & Ce && 1 !== t.which && (e = Ee), this.pressed && this.allow && (e & Ee && (this.pressed = !1), this.callback(this.manager, e, {
				pointers: [t],
				changedPointers: [t],
				pointerType: be,
				srcEvent: t
			}))
		}
	});
	var je = {
			pointerdown: xe,
			pointermove: Ce,
			pointerup: Ee,
			pointercancel: Pe,
			pointerout: Pe
		},
		$e = {
			2: ye,
			3: Te,
			4: be,
			5: Le
		},
		Fe = "pointerdown",
		qe = "pointermove pointerup pointercancel";
	t.MSPointerEvent && (Fe = "MSPointerDown", qe = "MSPointerMove MSPointerUp MSPointerCancel"), u(H, x, {
		handler: function(t) {
			var e = this.store,
				i = !1,
				n = t.type.toLowerCase().replace("ms", ""),
				o = je[n],
				s = $e[t.pointerType] || t.pointerType,
				r = s == ye,
				a = _(e, t.pointerId, "pointerId");
			o & xe && (0 === t.button || r) ? 0 > a && (e.push(t), a = e.length - 1) : o & (Ee | Pe) && (i = !0), 0 > a || (e[a] = t, this.callback(this.manager, o, {
				pointers: e,
				changedPointers: [t],
				pointerType: s,
				srcEvent: t
			}), i && e.splice(a, 1))
		}
	});
	var We = {
			touchstart: xe,
			touchmove: Ce,
			touchend: Ee,
			touchcancel: Pe
		},
		Ze = "touchstart",
		Ge = "touchstart touchmove touchend touchcancel";
	u(B, x, {
		handler: function(t) {
			var e = We[t.type];
			if (e === xe && (this.started = !0), this.started) {
				var i = j.call(this, t, e);
				e & (Ee | Pe) && i[0].length - i[1].length === 0 && (this.started = !1), this.callback(this.manager, e, {
					pointers: i[0],
					changedPointers: i[1],
					pointerType: ye,
					srcEvent: t
				})
			}
		}
	});
	var Ve = {
			touchstart: xe,
			touchmove: Ce,
			touchend: Ee,
			touchcancel: Pe
		},
		Xe = "touchstart touchmove touchend touchcancel";
	u($, x, {
		handler: function(t) {
			var e = Ve[t.type],
				i = F.call(this, t, e);
			i && this.callback(this.manager, e, {
				pointers: i[0],
				changedPointers: i[1],
				pointerType: ye,
				srcEvent: t
			})
		}
	}), u(q, x, {
		handler: function(t, e, i) {
			var n = i.pointerType == ye,
				o = i.pointerType == be;
			if (n) this.mouse.allow = !1;
			else if (o && !this.mouse.allow) return;
			e & (Ee | Pe) && (this.mouse.allow = !0), this.callback(t, e, i)
		},
		destroy: function() {
			this.touch.destroy(), this.mouse.destroy()
		}
	});
	var Je = b(ue.style, "touchAction"),
		Ye = Je !== n,
		Ke = "compute",
		Qe = "auto",
		ti = "manipulation",
		ei = "none",
		ii = "pan-x",
		ni = "pan-y";
	W.prototype = {
		set: function(t) {/*
			t == Ke && (t = this.compute()), Ye && (this.manager.element.style[Je] = t), this.actions = t.toLowerCase().trim()
		*/},
		update: function() {
			this.set(this.manager.options.touchAction)
		},
		compute: function() {
			var t = [];
			return r(this.manager.recognizers, function(e) {
				h(e.options.enable, [e]) && (t = t.concat(e.getTouchAction()))
			}), Z(t.join(" "))
		},
		preventDefaults: function(t) {
			if (!Ye) {
				var e = t.srcEvent,
					i = t.offsetDirection;
				if (this.manager.session.prevented) return void e.preventDefault();
				var n = this.actions,
					o = g(n, ei),
					s = g(n, ni),
					r = g(n, ii);
				return o || s && i & Oe || r && i & Ne ? this.preventSrc(e) : void 0
			}
		},
		preventSrc: function(t) {
			this.manager.session.prevented = !0, t.preventDefault()
		}
	};
	var oi = 1,
		si = 2,
		ri = 4,
		ai = 8,
		li = ai,
		ui = 16,
		ci = 32;
	G.prototype = {
		defaults: {},
		set: function(t) {
			return a(this.options, t), this.manager && this.manager.touchAction.update(), this
		},
		recognizeWith: function(t) {
			if (s(t, "recognizeWith", this)) return this;
			var e = this.simultaneous;
			return t = J(t, this), e[t.id] || (e[t.id] = t, t.recognizeWith(this)), this
		},
		dropRecognizeWith: function(t) {
			return s(t, "dropRecognizeWith", this) ? this : (t = J(t, this), delete this.simultaneous[t.id], this)
		},
		requireFailure: function(t) {
			if (s(t, "requireFailure", this)) return this;
			var e = this.requireFail;
			return t = J(t, this), -1 === _(e, t) && (e.push(t), t.requireFailure(this)), this
		},
		dropRequireFailure: function(t) {
			if (s(t, "dropRequireFailure", this)) return this;
			t = J(t, this);
			var e = _(this.requireFail, t);
			return e > -1 && this.requireFail.splice(e, 1), this
		},
		hasRequireFailures: function() {
			return this.requireFail.length > 0
		},
		canRecognizeWith: function(t) {
			return !!this.simultaneous[t.id]
		},
		emit: function(t) {
			function e(e) {
				i.manager.emit(i.options.event + (e ? V(n) : ""), t)
			}
			var i = this,
				n = this.state;
			ai > n && e(!0), e(), n >= ai && e(!0)
		},
		tryEmit: function(t) {
			return this.canEmit() ? this.emit(t) : void(this.state = ci)
		},
		canEmit: function() {
			for (var t = 0; t < this.requireFail.length;) {
				if (!(this.requireFail[t].state & (ci | oi))) return !1;
				t++
			}
			return !0
		},
		recognize: function(t) {
			var e = a({}, t);
			return h(this.options.enable, [this, e]) ? (this.state & (li | ui | ci) && (this.state = oi), this.state = this.process(e), void(this.state & (si | ri | ai | ui) && this.tryEmit(e))) : (this.reset(), void(this.state = ci))
		},
		process: function() {},
		getTouchAction: function() {},
		reset: function() {}
	}, u(Y, G, {
		defaults: {
			pointers: 1
		},
		attrTest: function(t) {
			var e = this.options.pointers;
			return 0 === e || t.pointers.length === e
		},
		process: function(t) {
			var e = this.state,
				i = t.eventType,
				n = e & (si | ri),
				o = this.attrTest(t);
			return n && (i & Pe || !o) ? e | ui : n || o ? i & Ee ? e | ai : e & si ? e | ri : si : ci
		}
	}), u(K, Y, {
		defaults: {
			event: "pan",
			threshold: 10,
			pointers: 1,
			direction: Ie
		},
		getTouchAction: function() {
			var t = this.options.direction,
				e = [];
			return t & Oe && e.push(ni), t & Ne && e.push(ii), e
		},
		directionTest: function(t) {
			var e = this.options,
				i = !0,
				n = t.distance,
				o = t.direction,
				s = t.deltaX,
				r = t.deltaY;
			return o & e.direction || (e.direction & Oe ? (o = 0 === s ? Se : 0 > s ? ke : De, i = s != this.pX, n = Math.abs(t.deltaX)) : (o = 0 === r ? Se : 0 > r ? Me : Ae, i = r != this.pY, n = Math.abs(t.deltaY))), t.direction = o, i && n > e.threshold && o & e.direction
		},
		attrTest: function(t) {
			return Y.prototype.attrTest.call(this, t) && (this.state & si || !(this.state & si) && this.directionTest(t))
		},
		emit: function(t) {
			this.pX = t.deltaX, this.pY = t.deltaY;
			var e = X(t.direction);
			e && this.manager.emit(this.options.event + e, t), this._super.emit.call(this, t)
		}
	}), u(Q, Y, {
		defaults: {
			event: "pinch",
			threshold: 0,
			pointers: 2
		},
		getTouchAction: function() {
			return [ei]
		},
		attrTest: function(t) {
			return this._super.attrTest.call(this, t) && (Math.abs(t.scale - 1) > this.options.threshold || this.state & si)
		},
		emit: function(t) {
			if (this._super.emit.call(this, t), 1 !== t.scale) {
				var e = t.scale < 1 ? "in" : "out";
				this.manager.emit(this.options.event + e, t)
			}
		}
	}), u(te, G, {
		defaults: {
			event: "press",
			pointers: 1,
			time: 500,
			threshold: 5
		},
		getTouchAction: function() {
			return [Qe]
		},
		process: function(t) {
			var e = this.options,
				i = t.pointers.length === e.pointers,
				n = t.distance < e.threshold,
				s = t.deltaTime > e.time;
			if (this._input = t, !n || !i || t.eventType & (Ee | Pe) && !s) this.reset();
			else if (t.eventType & xe) this.reset(), this._timer = o(function() {
				this.state = li, this.tryEmit()
			}, e.time, this);
			else if (t.eventType & Ee) return li;
			return ci
		},
		reset: function() {
			clearTimeout(this._timer)
		},
		emit: function(t) {
			this.state === li && (t && t.eventType & Ee ? this.manager.emit(this.options.event + "up", t) : (this._input.timeStamp = de(), this.manager.emit(this.options.event, this._input)))
		}
	}), u(ee, Y, {
		defaults: {
			event: "rotate",
			threshold: 0,
			pointers: 2
		},
		getTouchAction: function() {
			return [ei]
		},
		attrTest: function(t) {
			return this._super.attrTest.call(this, t) && (Math.abs(t.rotation) > this.options.threshold || this.state & si)
		}
	}), u(ie, Y, {
		defaults: {
			event: "swipe",
			threshold: 10,
			velocity: .65,
			direction: Oe | Ne,
			pointers: 1
		},
		getTouchAction: function() {
			return K.prototype.getTouchAction.call(this)
		},
		attrTest: function(t) {
			var e, i = this.options.direction;
			return i & (Oe | Ne) ? e = t.velocity : i & Oe ? e = t.velocityX : i & Ne && (e = t.velocityY), this._super.attrTest.call(this, t) && i & t.direction && t.distance > this.options.threshold && pe(e) > this.options.velocity && t.eventType & Ee
		},
		emit: function(t) {
			var e = X(t.direction);
			e && this.manager.emit(this.options.event + e, t), this.manager.emit(this.options.event, t)
		}
	}), u(ne, G, {
		defaults: {
			event: "tap",
			pointers: 1,
			taps: 1,
			interval: 300,
			time: 250,
			threshold: 2,
			posThreshold: 10
		},
		getTouchAction: function() {
			return [ti]
		},
		process: function(t) {
			var e = this.options,
				i = t.pointers.length === e.pointers,
				n = t.distance < e.threshold,
				s = t.deltaTime < e.time;
			if (this.reset(), t.eventType & xe && 0 === this.count) return this.failTimeout();
			if (n && s && i) {
				if (t.eventType != Ee) return this.failTimeout();
				var r = this.pTime ? t.timeStamp - this.pTime < e.interval : !0,
					a = !this.pCenter || N(this.pCenter, t.center) < e.posThreshold;
				this.pTime = t.timeStamp, this.pCenter = t.center, a && r ? this.count += 1 : this.count = 1, this._input = t;
				var l = this.count % e.taps;
				if (0 === l) return this.hasRequireFailures() ? (this._timer = o(function() {
					this.state = li, this.tryEmit()
				}, e.interval, this), si) : li
			}
			return ci
		},
		failTimeout: function() {
			return this._timer = o(function() {
				this.state = ci
			}, this.options.interval, this), ci
		},
		reset: function() {
			clearTimeout(this._timer)
		},
		emit: function() {
			this.state == li && (this._input.tapCount = this.count, this.manager.emit(this.options.event, this._input))
		}
	}), oe.VERSION = "2.0.4", oe.defaults = {
		domEvents: !1,
		touchAction: Ke,
		enable: !0,
		inputTarget: null,
		inputClass: null,
		preset: [
			[ee, {
				enable: !1
			}],
			[Q, {
					enable: !1
				},
				["rotate"]
			],
			[ie, {
				direction: Oe
			}],
			[K, {
					direction: Oe
				},
				["swipe"]
			],
			[ne],
			[ne, {
					event: "doubletap",
					taps: 2
				},
				["tap"]
			],
			[te]
		],
		cssProps: {
			userSelect: "none",
			touchSelect: "none",
			touchCallout: "none",
			contentZooming: "none",
			userDrag: "none",
			tapHighlightColor: "rgba(0,0,0,0)"
		}
	};
	var hi = 1,
		pi = 2;
	se.prototype = {
		set: function(t) {
			return a(this.options, t), t.touchAction && this.touchAction.update(), t.inputTarget && (this.input.destroy(), this.input.target = t.inputTarget, this.input.init()), this
		},
		stop: function(t) {
			this.session.stopped = t ? pi : hi
		},
		recognize: function(t) {
			var e = this.session;
			if (!e.stopped) {
				this.touchAction.preventDefaults(t);
				var i, n = this.recognizers,
					o = e.curRecognizer;
				(!o || o && o.state & li) && (o = e.curRecognizer = null);
				for (var s = 0; s < n.length;) i = n[s], e.stopped === pi || o && i != o && !i.canRecognizeWith(o) ? i.reset() : i.recognize(t), !o && i.state & (si | ri | ai) && (o = e.curRecognizer = i), s++
			}
		},
		get: function(t) {
			if (t instanceof G) return t;
			for (var e = this.recognizers, i = 0; i < e.length; i++)
				if (e[i].options.event == t) return e[i];
			return null
		},
		add: function(t) {
			if (s(t, "add", this)) return this;
			var e = this.get(t.options.event);
			return e && this.remove(e), this.recognizers.push(t), t.manager = this, this.touchAction.update(), t
		},
		remove: function(t) {
			if (s(t, "remove", this)) return this;
			var e = this.recognizers;
			return t = this.get(t), e.splice(_(e, t), 1), this.touchAction.update(), this
		},
		on: function(t, e) {
			var i = this.handlers;
			return r(v(t), function(t) {
				i[t] = i[t] || [], i[t].push(e)
			}), this
		},
		off: function(t, e) {
			var i = this.handlers;
			return r(v(t), function(t) {
				e ? i[t].splice(_(i[t], e), 1) : delete i[t]
			}), this
		},
		emit: function(t, e) {
			this.options.domEvents && ae(t, e);
			var i = this.handlers[t] && this.handlers[t].slice();
			if (i && i.length) {
				e.type = t, e.preventDefault = function() {
					e.srcEvent.preventDefault()
				};
				for (var n = 0; n < i.length;) i[n](e), n++
			}
		},
		destroy: function() {
			this.element && re(this, !1), this.handlers = {}, this.session = {}, this.input.destroy(), this.element = null
		}
	}, a(oe, {
		INPUT_START: xe,
		INPUT_MOVE: Ce,
		INPUT_END: Ee,
		INPUT_CANCEL: Pe,
		STATE_POSSIBLE: oi,
		STATE_BEGAN: si,
		STATE_CHANGED: ri,
		STATE_ENDED: ai,
		STATE_RECOGNIZED: li,
		STATE_CANCELLED: ui,
		STATE_FAILED: ci,
		DIRECTION_NONE: Se,
		DIRECTION_LEFT: ke,
		DIRECTION_RIGHT: De,
		DIRECTION_UP: Me,
		DIRECTION_DOWN: Ae,
		DIRECTION_HORIZONTAL: Oe,
		DIRECTION_VERTICAL: Ne,
		DIRECTION_ALL: Ie,
		Manager: se,
		Input: x,
		TouchAction: W,
		TouchInput: $,
		MouseInput: z,
		PointerEventInput: H,
		TouchMouseInput: q,
		SingleTouchInput: B,
		Recognizer: G,
		AttrRecognizer: Y,
		Tap: ne,
		Pan: K,
		Swipe: ie,
		Pinch: Q,
		Rotate: ee,
		Press: te,
		on: d,
		off: f,
		each: r,
		merge: l,
		extend: a,
		inherit: u,
		bindFn: c,
		prefixed: b
	}), typeof define == ce && define.amd ? define(function() {
		return oe
	}) : "undefined" != typeof module && module.exports ? module.exports = oe : t[i] = oe
}(window, document, "Hammer"), $(function() {
	function t(e, i) {
		return e === document ? !1 : $(e).hasClass(i) ? !0 : e.parentNode && t(e.parentNode, i)
	}

	function e(t, e, i) {
		var n;
		return function() {
			var o = this,
				s = arguments,
				r = function() {
					n = null, i || t.apply(o, s)
				},
				a = i && !n;
			clearTimeout(n), n = setTimeout(r, e), a && t.apply(o, s)
		}
	}
	var i = $(window),
		n = $(".mobile-fixed-nav");
	$(".icon-wechat", ".social-links").on("click", function() {
		$(".wechat-dialog").addClass("dialog-open").find(".dialog-content").css("opacity", 1)
	}), $("[data-dialog-close]").on("click", function() {
		$(".dialog").removeClass("dialog-open").find(".dialog-content").css("opacity", 0)
	}), $(".mobile-drawer, .mobile-fixed-nav").on("click", function(e) {
		e.stopPropagation(), $("body, main, .mobile-nav").addClass("open"), $(document).on("touchend", function(e) {
			return $(".mobile-nav").hasClass("open") && !t(e.target, "mobile-nav") ? ($("body, main, .mobile-nav").removeClass("open"), !1) : void 0
		})
	});
	var o = new Hammer(document.querySelector(".mobile-nav"));
	o.on("swipeleft", function() {
		$("body, main, .mobile-nav").removeClass("open")
	});
	var s = e(function() {
		i.scrollTop() > 37 ? n.addClass("show") : n.removeClass("show")
	}, 50);
	i.on("scroll", s)
}), ! function t(e, i, n) {
	function o(r, a) {
		if (!i[r]) {
			if (!e[r]) {
				var l = "function" == typeof require && require;
				if (!a && l) return l(r, !0);
				if (s) return s(r, !0);
				throw new Error("Cannot find module '" + r + "'")
			}
			var u = i[r] = {
				exports: {}
			};
			e[r][0].call(u.exports, function(t) {
				var i = e[r][1][t];
				return o(i ? i : t)
			}, u, u.exports, t, e, i, n)
		}
		return i[r].exports
	}
	for (var s = "function" == typeof require && require, r = 0; r < n.length; r++) o(n[r]);
	return o
}({
	1: [
		function(t, e) {
			function i(t, e, i) {
				function n(t) {
					return t >= 200 && 300 > t || 304 === t
				}

				function o() {
					void 0 === a.status || n(a.status) ? e.call(a, null, a) : e.call(a, a, null)
				}
				var s = !1;
				if ("undefined" == typeof window.XMLHttpRequest) return e(Error("Browser not supported"));
				if ("undefined" == typeof i) {
					var r = t.match(/^\s*https?:\/\/[^\/]*/);
					i = r && r[0] !== location.protocol + "//" + location.domain + (location.port ? ":" + location.port : "")
				}
				var a = new window.XMLHttpRequest;
				if (i && !("withCredentials" in a)) {
					a = new window.XDomainRequest;
					var l = e;
					e = function() {
						if (s) l.apply(this, arguments);
						else {
							var t = this,
								e = arguments;
							setTimeout(function() {
								l.apply(t, e)
							}, 0)
						}
					}
				}
				return "onload" in a ? a.onload = o : a.onreadystatechange = function() {
					4 === a.readyState && o()
				}, a.onerror = function(t) {
					e.call(this, t || !0, null), e = function() {}
				}, a.onprogress = function() {}, a.ontimeout = function(t) {
					e.call(this, t, null), e = function() {}
				}, a.onabort = function(t) {
					e.call(this, t, null), e = function() {}
				}, a.open("GET", t, !0), a.send(null), s = !0, a
			}
			"undefined" != typeof e && (e.exports = i)
		}, {}
	],
	2: [
		function(t, e) {
			! function(t, i, n) {
				var o = t.L,
					s = {};
				s.version = "0.7.2", "object" == typeof e && "object" == typeof e.exports ? e.exports = s : "function" == typeof define && define.amd && define(s), s.noConflict = function() {
						return t.L = o, this
					}, t.L = s, s.Util = {
						extend: function(t) {
							var e, i, n, o, s = Array.prototype.slice.call(arguments, 1);
							for (i = 0, n = s.length; n > i; i++) {
								o = s[i] || {};
								for (e in o) o.hasOwnProperty(e) && (t[e] = o[e])
							}
							return t
						},
						bind: function(t, e) {
							var i = arguments.length > 2 ? Array.prototype.slice.call(arguments, 2) : null;
							return function() {
								return t.apply(e, i || arguments)
							}
						},
						stamp: function() {
							var t = 0,
								e = "_leaflet_id";
							return function(i) {
								return i[e] = i[e] || ++t, i[e]
							}
						}(),
						invokeEach: function(t, e, i) {
							var n, o;
							if ("object" == typeof t) {
								o = Array.prototype.slice.call(arguments, 3);
								for (n in t) e.apply(i, [n, t[n]].concat(o));
								return !0
							}
							return !1
						},
						limitExecByInterval: function(t, e, i) {
							var n, o;
							return function s() {
								var r = arguments;
								return n ? void(o = !0) : (n = !0, setTimeout(function() {
									n = !1, o && (s.apply(i, r), o = !1)
								}, e), void t.apply(i, r))
							}
						},
						falseFn: function() {
							return !1
						},
						formatNum: function(t, e) {
							var i = Math.pow(10, e || 5);
							return Math.round(t * i) / i
						},
						trim: function(t) {
							return t.trim ? t.trim() : t.replace(/^\s+|\s+$/g, "")
						},
						splitWords: function(t) {
							return s.Util.trim(t).split(/\s+/)
						},
						setOptions: function(t, e) {
							return t.options = s.extend({}, t.options, e), t.options
						},
						getParamString: function(t, e, i) {
							var n = [];
							for (var o in t) n.push(encodeURIComponent(i ? o.toUpperCase() : o) + "=" + encodeURIComponent(t[o]));
							return (e && -1 !== e.indexOf("?") ? "&" : "?") + n.join("&")
						},
						template: function(t, e) {
							return t.replace(/\{ *([\w_]+) *\}/g, function(t, i) {
								var o = e[i];
								if (o === n) throw new Error("No value provided for variable " + t);
								return "function" == typeof o && (o = o(e)), o
							})
						},
						isArray: Array.isArray || function(t) {
							return "[object Array]" === Object.prototype.toString.call(t)
						},
						emptyImageUrl: "data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs="
					},
					function() {
						function e(e) {
							var i, n, o = ["webkit", "moz", "o", "ms"];
							for (i = 0; i < o.length && !n; i++) n = t[o[i] + e];
							return n
						}

						function i(e) {
							var i = +new Date,
								o = Math.max(0, 16 - (i - n));
							return n = i + o, t.setTimeout(e, o)
						}
						var n = 0,
							o = t.requestAnimationFrame || e("RequestAnimationFrame") || i,
							r = t.cancelAnimationFrame || e("CancelAnimationFrame") || e("CancelRequestAnimationFrame") || function(e) {
								t.clearTimeout(e)
							};
						s.Util.requestAnimFrame = function(e, n, r, a) {
							return e = s.bind(e, n), r && o === i ? void e() : o.call(t, e, a)
						}, s.Util.cancelAnimFrame = function(e) {
							e && r.call(t, e)
						}
					}(), s.extend = s.Util.extend, s.bind = s.Util.bind, s.stamp = s.Util.stamp, s.setOptions = s.Util.setOptions, s.Class = function() {}, s.Class.extend = function(t) {
						var e = function() {
								this.initialize && this.initialize.apply(this, arguments), this._initHooks && this.callInitHooks()
							},
							i = function() {};
						i.prototype = this.prototype;
						var n = new i;
						n.constructor = e, e.prototype = n;
						for (var o in this) this.hasOwnProperty(o) && "prototype" !== o && (e[o] = this[o]);
						t.statics && (s.extend(e, t.statics), delete t.statics), t.includes && (s.Util.extend.apply(null, [n].concat(t.includes)), delete t.includes), t.options && n.options && (t.options = s.extend({}, n.options, t.options)), s.extend(n, t), n._initHooks = [];
						var r = this;
						return e.__super__ = r.prototype, n.callInitHooks = function() {
							if (!this._initHooksCalled) {
								r.prototype.callInitHooks && r.prototype.callInitHooks.call(this), this._initHooksCalled = !0;
								for (var t = 0, e = n._initHooks.length; e > t; t++) n._initHooks[t].call(this)
							}
						}, e
					}, s.Class.include = function(t) {
						s.extend(this.prototype, t)
					}, s.Class.mergeOptions = function(t) {
						s.extend(this.prototype.options, t)
					}, s.Class.addInitHook = function(t) {
						var e = Array.prototype.slice.call(arguments, 1),
							i = "function" == typeof t ? t : function() {
								this[t].apply(this, e)
							};
						this.prototype._initHooks = this.prototype._initHooks || [], this.prototype._initHooks.push(i)
					};
				var r = "_leaflet_events";
				s.Mixin = {}, s.Mixin.Events = {
						addEventListener: function(t, e, i) {
							if (s.Util.invokeEach(t, this.addEventListener, this, e, i)) return this;
							var n, o, a, l, u, c, h, p = this[r] = this[r] || {},
								d = i && i !== this && s.stamp(i);
							for (t = s.Util.splitWords(t), n = 0, o = t.length; o > n; n++) a = {
								action: e,
								context: i || this
							}, l = t[n], d ? (u = l + "_idx", c = u + "_len", h = p[u] = p[u] || {}, h[d] || (h[d] = [], p[c] = (p[c] || 0) + 1), h[d].push(a)) : (p[l] = p[l] || [], p[l].push(a));
							return this
						},
						hasEventListeners: function(t) {
							var e = this[r];
							return !!e && (t in e && e[t].length > 0 || t + "_idx" in e && e[t + "_idx_len"] > 0)
						},
						removeEventListener: function(t, e, i) {
							if (!this[r]) return this;
							if (!t) return this.clearAllEventListeners();
							if (s.Util.invokeEach(t, this.removeEventListener, this, e, i)) return this;
							var n, o, a, l, u, c, h, p, d, f = this[r],
								m = i && i !== this && s.stamp(i);
							for (t = s.Util.splitWords(t), n = 0, o = t.length; o > n; n++)
								if (a = t[n], c = a + "_idx", h = c + "_len", p = f[c], e) {
									if (l = m && p ? p[m] : f[a]) {
										for (u = l.length - 1; u >= 0; u--) l[u].action !== e || i && l[u].context !== i || (d = l.splice(u, 1), d[0].action = s.Util.falseFn);
										i && p && 0 === l.length && (delete p[m], f[h] --)
									}
								} else delete f[a], delete f[c], delete f[h];
							return this
						},
						clearAllEventListeners: function() {
							return delete this[r], this
						},
						fireEvent: function(t, e) {
							if (!this.hasEventListeners(t)) return this;
							var i, n, o, a, l, u = s.Util.extend({}, e, {
									type: t,
									target: this
								}),
								c = this[r];
							if (c[t])
								for (i = c[t].slice(), n = 0, o = i.length; o > n; n++) i[n].action.call(i[n].context, u);
							a = c[t + "_idx"];
							for (l in a)
								if (i = a[l].slice())
									for (n = 0, o = i.length; o > n; n++) i[n].action.call(i[n].context, u);
							return this
						},
						addOneTimeEventListener: function(t, e, i) {
							if (s.Util.invokeEach(t, this.addOneTimeEventListener, this, e, i)) return this;
							var n = s.bind(function() {
								this.removeEventListener(t, e, i).removeEventListener(t, n, i)
							}, this);
							return this.addEventListener(t, e, i).addEventListener(t, n, i)
						}
					}, s.Mixin.Events.on = s.Mixin.Events.addEventListener, s.Mixin.Events.off = s.Mixin.Events.removeEventListener, s.Mixin.Events.once = s.Mixin.Events.addOneTimeEventListener, s.Mixin.Events.fire = s.Mixin.Events.fireEvent,
					function() {
						var e = "ActiveXObject" in t,
							o = e && !i.addEventListener,
							r = navigator.userAgent.toLowerCase(),
							a = -1 !== r.indexOf("webkit"),
							l = -1 !== r.indexOf("chrome"),
							u = -1 !== r.indexOf("phantom"),
							c = -1 !== r.indexOf("android"),
							h = -1 !== r.search("android [23]"),
							p = -1 !== r.indexOf("gecko"),
							d = typeof orientation != n + "",
							f = t.navigator && t.navigator.msPointerEnabled && t.navigator.msMaxTouchPoints && !t.PointerEvent,
							m = t.PointerEvent && t.navigator.pointerEnabled && t.navigator.maxTouchPoints || f,
							g = "devicePixelRatio" in t && t.devicePixelRatio > 1 || "matchMedia" in t && t.matchMedia("(min-resolution:144dpi)") && t.matchMedia("(min-resolution:144dpi)").matches,
							v = i.documentElement,
							_ = e && "transition" in v.style,
							y = "WebKitCSSMatrix" in t && "m11" in new t.WebKitCSSMatrix && !h,
							T = "MozPerspective" in v.style,
							b = "OTransition" in v.style,
							L = !t.L_DISABLE_3D && (_ || y || T || b) && !u,
							w = !t.L_NO_TOUCH && !u && function() {
								var t = "ontouchstart";
								if (m || t in v) return !0;
								var e = i.createElement("div"),
									n = !1;
								return e.setAttribute ? (e.setAttribute(t, "return;"), "function" == typeof e[t] && (n = !0), e.removeAttribute(t), e = null, n) : !1
							}();
						s.Browser = {
							ie: e,
							ielt9: o,
							webkit: a,
							gecko: p && !a && !t.opera && !e,
							android: c,
							android23: h,
							chrome: l,
							ie3d: _,
							webkit3d: y,
							gecko3d: T,
							opera3d: b,
							any3d: L,
							mobile: d,
							mobileWebkit: d && a,
							mobileWebkit3d: d && y,
							mobileOpera: d && t.opera,
							touch: w,
							msPointer: f,
							pointer: m,
							retina: g
						}
					}(), s.Point = function(t, e, i) {
						this.x = i ? Math.round(t) : t, this.y = i ? Math.round(e) : e
					}, s.Point.prototype = {
						clone: function() {
							return new s.Point(this.x, this.y)
						},
						add: function(t) {
							return this.clone()._add(s.point(t))
						},
						_add: function(t) {
							return this.x += t.x, this.y += t.y, this
						},
						subtract: function(t) {
							return this.clone()._subtract(s.point(t))
						},
						_subtract: function(t) {
							return this.x -= t.x, this.y -= t.y, this
						},
						divideBy: function(t) {
							return this.clone()._divideBy(t)
						},
						_divideBy: function(t) {
							return this.x /= t, this.y /= t, this
						},
						multiplyBy: function(t) {
							return this.clone()._multiplyBy(t)
						},
						_multiplyBy: function(t) {
							return this.x *= t, this.y *= t, this
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
						distanceTo: function(t) {
							t = s.point(t);
							var e = t.x - this.x,
								i = t.y - this.y;
							return Math.sqrt(e * e + i * i)
						},
						equals: function(t) {
							return t = s.point(t), t.x === this.x && t.y === this.y
						},
						contains: function(t) {
							return t = s.point(t), Math.abs(t.x) <= Math.abs(this.x) && Math.abs(t.y) <= Math.abs(this.y)
						},
						toString: function() {
							return "Point(" + s.Util.formatNum(this.x) + ", " + s.Util.formatNum(this.y) + ")"
						}
					}, s.point = function(t, e, i) {
						return t instanceof s.Point ? t : s.Util.isArray(t) ? new s.Point(t[0], t[1]) : t === n || null === t ? t : new s.Point(t, e, i)
					}, s.Bounds = function(t, e) {
						if (t)
							for (var i = e ? [t, e] : t, n = 0, o = i.length; o > n; n++) this.extend(i[n])
					}, s.Bounds.prototype = {
						extend: function(t) {
							return t = s.point(t), this.min || this.max ? (this.min.x = Math.min(t.x, this.min.x), this.max.x = Math.max(t.x, this.max.x), this.min.y = Math.min(t.y, this.min.y), this.max.y = Math.max(t.y, this.max.y)) : (this.min = t.clone(), this.max = t.clone()), this
						},
						getCenter: function(t) {
							return new s.Point((this.min.x + this.max.x) / 2, (this.min.y + this.max.y) / 2, t)
						},
						getBottomLeft: function() {
							return new s.Point(this.min.x, this.max.y)
						},
						getTopRight: function() {
							return new s.Point(this.max.x, this.min.y)
						},
						getSize: function() {
							return this.max.subtract(this.min)
						},
						contains: function(t) {
							var e, i;
							return t = "number" == typeof t[0] || t instanceof s.Point ? s.point(t) : s.bounds(t), t instanceof s.Bounds ? (e = t.min, i = t.max) : e = i = t, e.x >= this.min.x && i.x <= this.max.x && e.y >= this.min.y && i.y <= this.max.y
						},
						intersects: function(t) {
							t = s.bounds(t);
							var e = this.min,
								i = this.max,
								n = t.min,
								o = t.max,
								r = o.x >= e.x && n.x <= i.x,
								a = o.y >= e.y && n.y <= i.y;
							return r && a
						},
						isValid: function() {
							return !(!this.min || !this.max)
						}
					}, s.bounds = function(t, e) {
						return !t || t instanceof s.Bounds ? t : new s.Bounds(t, e)
					}, s.Transformation = function(t, e, i, n) {
						this._a = t, this._b = e, this._c = i, this._d = n
					}, s.Transformation.prototype = {
						transform: function(t, e) {
							return this._transform(t.clone(), e)
						},
						_transform: function(t, e) {
							return e = e || 1, t.x = e * (this._a * t.x + this._b), t.y = e * (this._c * t.y + this._d), t
						},
						untransform: function(t, e) {
							return e = e || 1, new s.Point((t.x / e - this._b) / this._a, (t.y / e - this._d) / this._c)
						}
					}, s.DomUtil = {
						get: function(t) {
							return "string" == typeof t ? i.getElementById(t) : t
						},
						getStyle: function(t, e) {
							var n = t.style[e];
							if (!n && t.currentStyle && (n = t.currentStyle[e]), (!n || "auto" === n) && i.defaultView) {
								var o = i.defaultView.getComputedStyle(t, null);
								n = o ? o[e] : null
							}
							return "auto" === n ? null : n
						},
						getViewportOffset: function(t) {
							var e, n = 0,
								o = 0,
								r = t,
								a = i.body,
								l = i.documentElement;
							do {
								if (n += r.offsetTop || 0, o += r.offsetLeft || 0, n += parseInt(s.DomUtil.getStyle(r, "borderTopWidth"), 10) || 0, o += parseInt(s.DomUtil.getStyle(r, "borderLeftWidth"), 10) || 0, e = s.DomUtil.getStyle(r, "position"), r.offsetParent === a && "absolute" === e) break;
								if ("fixed" === e) {
									n += a.scrollTop || l.scrollTop || 0, o += a.scrollLeft || l.scrollLeft || 0;
									break
								}
								if ("relative" === e && !r.offsetLeft) {
									var u = s.DomUtil.getStyle(r, "width"),
										c = s.DomUtil.getStyle(r, "max-width"),
										h = r.getBoundingClientRect();
									("none" !== u || "none" !== c) && (o += h.left + r.clientLeft), n += h.top + (a.scrollTop || l.scrollTop || 0);
									break
								}
								r = r.offsetParent
							} while (r);
							r = t;
							do {
								if (r === a) break;
								n -= r.scrollTop || 0, o -= r.scrollLeft || 0, r = r.parentNode
							} while (r);
							return new s.Point(o, n)
						},
						documentIsLtr: function() {
							return s.DomUtil._docIsLtrCached || (s.DomUtil._docIsLtrCached = !0, s.DomUtil._docIsLtr = "ltr" === s.DomUtil.getStyle(i.body, "direction")), s.DomUtil._docIsLtr
						},
						create: function(t, e, n) {
							var o = i.createElement(t);
							return o.className = e, n && n.appendChild(o), o
						},
						hasClass: function(t, e) {
							if (t.classList !== n) return t.classList.contains(e);
							var i = s.DomUtil._getClass(t);
							return i.length > 0 && new RegExp("(^|\\s)" + e + "(\\s|$)").test(i)
						},
						addClass: function(t, e) {
							if (t.classList !== n)
								for (var i = s.Util.splitWords(e), o = 0, r = i.length; r > o; o++) t.classList.add(i[o]);
							else if (!s.DomUtil.hasClass(t, e)) {
								var a = s.DomUtil._getClass(t);
								s.DomUtil._setClass(t, (a ? a + " " : "") + e)
							}
						},
						removeClass: function(t, e) {
							t.classList !== n ? t.classList.remove(e) : s.DomUtil._setClass(t, s.Util.trim((" " + s.DomUtil._getClass(t) + " ").replace(" " + e + " ", " ")))
						},
						_setClass: function(t, e) {
							t.className.baseVal === n ? t.className = e : t.className.baseVal = e
						},
						_getClass: function(t) {
							return t.className.baseVal === n ? t.className : t.className.baseVal
						},
						setOpacity: function(t, e) {
							if ("opacity" in t.style) t.style.opacity = e;
							else if ("filter" in t.style) {
								var i = !1,
									n = "DXImageTransform.Microsoft.Alpha";
								try {
									i = t.filters.item(n)
								} catch (o) {
									if (1 === e) return
								}
								e = Math.round(100 * e), i ? (i.Enabled = 100 !== e, i.Opacity = e) : t.style.filter += " progid:" + n + "(opacity=" + e + ")"
							}
						},
						testProp: function(t) {
							for (var e = i.documentElement.style, n = 0; n < t.length; n++)
								if (t[n] in e) return t[n];
							return !1
						},
						getTranslateString: function(t) {
							var e = s.Browser.webkit3d,
								i = "translate" + (e ? "3d" : "") + "(",
								n = (e ? ",0" : "") + ")";
							return i + t.x + "px," + t.y + "px" + n
						},
						getScaleString: function(t, e) {
							var i = s.DomUtil.getTranslateString(e.add(e.multiplyBy(-1 * t))),
								n = " scale(" + t + ") ";
							return i + n
						},
						setPosition: function(t, e, i) {
							t._leaflet_pos = e, !i && s.Browser.any3d ? t.style[s.DomUtil.TRANSFORM] = s.DomUtil.getTranslateString(e) : (t.style.left = e.x + "px", t.style.top = e.y + "px")
						},
						getPosition: function(t) {
							return t._leaflet_pos
						}
					}, s.DomUtil.TRANSFORM = s.DomUtil.testProp(["transform", "WebkitTransform", "OTransform", "MozTransform", "msTransform"]), s.DomUtil.TRANSITION = s.DomUtil.testProp(["webkitTransition", "transition", "OTransition", "MozTransition", "msTransition"]), s.DomUtil.TRANSITION_END = "webkitTransition" === s.DomUtil.TRANSITION || "OTransition" === s.DomUtil.TRANSITION ? s.DomUtil.TRANSITION + "End" : "transitionend",
					function() {
						if ("onselectstart" in i) s.extend(s.DomUtil, {
							disableTextSelection: function() {
								s.DomEvent.on(t, "selectstart", s.DomEvent.preventDefault)
							},
							enableTextSelection: function() {
								s.DomEvent.off(t, "selectstart", s.DomEvent.preventDefault)
							}
						});
						else {
							var e = s.DomUtil.testProp(["userSelect", "WebkitUserSelect", "OUserSelect", "MozUserSelect", "msUserSelect"]);
							s.extend(s.DomUtil, {
								disableTextSelection: function() {
									if (e) {
										var t = i.documentElement.style;
										this._userSelect = t[e], t[e] = "none"
									}
								},
								enableTextSelection: function() {
									e && (i.documentElement.style[e] = this._userSelect, delete this._userSelect)
								}
							})
						}
						s.extend(s.DomUtil, {
							disableImageDrag: function() {
								s.DomEvent.on(t, "dragstart", s.DomEvent.preventDefault)
							},
							enableImageDrag: function() {
								s.DomEvent.off(t, "dragstart", s.DomEvent.preventDefault)
							}
						})
					}(), s.LatLng = function(t, e, i) {
						if (t = parseFloat(t), e = parseFloat(e), isNaN(t) || isNaN(e)) throw new Error("Invalid LatLng object: (" + t + ", " + e + ")");
						this.lat = t, this.lng = e, i !== n && (this.alt = parseFloat(i))
					}, s.extend(s.LatLng, {
						DEG_TO_RAD: Math.PI / 180,
						RAD_TO_DEG: 180 / Math.PI,
						MAX_MARGIN: 1e-9
					}), s.LatLng.prototype = {
						equals: function(t) {
							if (!t) return !1;
							t = s.latLng(t);
							var e = Math.max(Math.abs(this.lat - t.lat), Math.abs(this.lng - t.lng));
							return e <= s.LatLng.MAX_MARGIN
						},
						toString: function(t) {
							return "LatLng(" + s.Util.formatNum(this.lat, t) + ", " + s.Util.formatNum(this.lng, t) + ")"
						},
						distanceTo: function(t) {
							t = s.latLng(t);
							var e = 6378137,
								i = s.LatLng.DEG_TO_RAD,
								n = (t.lat - this.lat) * i,
								o = (t.lng - this.lng) * i,
								r = this.lat * i,
								a = t.lat * i,
								l = Math.sin(n / 2),
								u = Math.sin(o / 2),
								c = l * l + u * u * Math.cos(r) * Math.cos(a);
							return 2 * e * Math.atan2(Math.sqrt(c), Math.sqrt(1 - c))
						},
						wrap: function(t, e) {
							var i = this.lng;
							return t = t || -180, e = e || 180, i = (i + e) % (e - t) + (t > i || i === e ? e : t), new s.LatLng(this.lat, i)
						}
					}, s.latLng = function(t, e) {
						return t instanceof s.LatLng ? t : s.Util.isArray(t) ? "number" == typeof t[0] || "string" == typeof t[0] ? new s.LatLng(t[0], t[1], t[2]) : null : t === n || null === t ? t : "object" == typeof t && "lat" in t ? new s.LatLng(t.lat, "lng" in t ? t.lng : t.lon) : e === n ? null : new s.LatLng(t, e)
					}, s.LatLngBounds = function(t, e) {
						if (t)
							for (var i = e ? [t, e] : t, n = 0, o = i.length; o > n; n++) this.extend(i[n])
					}, s.LatLngBounds.prototype = {
						extend: function(t) {
							if (!t) return this;
							var e = s.latLng(t);
							return t = null !== e ? e : s.latLngBounds(t), t instanceof s.LatLng ? this._southWest || this._northEast ? (this._southWest.lat = Math.min(t.lat, this._southWest.lat), this._southWest.lng = Math.min(t.lng, this._southWest.lng), this._northEast.lat = Math.max(t.lat, this._northEast.lat), this._northEast.lng = Math.max(t.lng, this._northEast.lng)) : (this._southWest = new s.LatLng(t.lat, t.lng), this._northEast = new s.LatLng(t.lat, t.lng)) : t instanceof s.LatLngBounds && (this.extend(t._southWest), this.extend(t._northEast)), this
						},
						pad: function(t) {
							var e = this._southWest,
								i = this._northEast,
								n = Math.abs(e.lat - i.lat) * t,
								o = Math.abs(e.lng - i.lng) * t;
							return new s.LatLngBounds(new s.LatLng(e.lat - n, e.lng - o), new s.LatLng(i.lat + n, i.lng + o))
						},
						getCenter: function() {
							return new s.LatLng((this._southWest.lat + this._northEast.lat) / 2, (this._southWest.lng + this._northEast.lng) / 2)
						},
						getSouthWest: function() {
							return this._southWest
						},
						getNorthEast: function() {
							return this._northEast
						},
						getNorthWest: function() {
							return new s.LatLng(this.getNorth(), this.getWest())
						},
						getSouthEast: function() {
							return new s.LatLng(this.getSouth(), this.getEast())
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
						contains: function(t) {
							t = "number" == typeof t[0] || t instanceof s.LatLng ? s.latLng(t) : s.latLngBounds(t);
							var e, i, n = this._southWest,
								o = this._northEast;
							return t instanceof s.LatLngBounds ? (e = t.getSouthWest(), i = t.getNorthEast()) : e = i = t, e.lat >= n.lat && i.lat <= o.lat && e.lng >= n.lng && i.lng <= o.lng
						},
						intersects: function(t) {
							t = s.latLngBounds(t);
							var e = this._southWest,
								i = this._northEast,
								n = t.getSouthWest(),
								o = t.getNorthEast(),
								r = o.lat >= e.lat && n.lat <= i.lat,
								a = o.lng >= e.lng && n.lng <= i.lng;
							return r && a
						},
						toBBoxString: function() {
							return [this.getWest(), this.getSouth(), this.getEast(), this.getNorth()].join(",")
						},
						equals: function(t) {
							return t ? (t = s.latLngBounds(t), this._southWest.equals(t.getSouthWest()) && this._northEast.equals(t.getNorthEast())) : !1
						},
						isValid: function() {
							return !(!this._southWest || !this._northEast)
						}
					}, s.latLngBounds = function(t, e) {
						return !t || t instanceof s.LatLngBounds ? t : new s.LatLngBounds(t, e)
					}, s.Projection = {}, s.Projection.SphericalMercator = {
						MAX_LATITUDE: 85.0511287798,
						project: function(t) {
							var e = s.LatLng.DEG_TO_RAD,
								i = this.MAX_LATITUDE,
								n = Math.max(Math.min(i, t.lat), -i),
								o = t.lng * e,
								r = n * e;
							return r = Math.log(Math.tan(Math.PI / 4 + r / 2)), new s.Point(o, r)
						},
						unproject: function(t) {
							var e = s.LatLng.RAD_TO_DEG,
								i = t.x * e,
								n = (2 * Math.atan(Math.exp(t.y)) - Math.PI / 2) * e;
							return new s.LatLng(n, i)
						}
					}, s.Projection.LonLat = {
						project: function(t) {
							return new s.Point(t.lng, t.lat)
						},
						unproject: function(t) {
							return new s.LatLng(t.y, t.x)
						}
					}, s.CRS = {
						latLngToPoint: function(t, e) {
							var i = this.projection.project(t),
								n = this.scale(e);
							return this.transformation._transform(i, n)
						},
						pointToLatLng: function(t, e) {
							var i = this.scale(e),
								n = this.transformation.untransform(t, i);
							return this.projection.unproject(n)
						},
						project: function(t) {
							return this.projection.project(t)
						},
						scale: function(t) {
							return 256 * Math.pow(2, t)
						},
						getSize: function(t) {
							var e = this.scale(t);
							return s.point(e, e)
						}
					}, s.CRS.Simple = s.extend({}, s.CRS, {
						projection: s.Projection.LonLat,
						transformation: new s.Transformation(1, 0, -1, 0),
						scale: function(t) {
							return Math.pow(2, t)
						}
					}), s.CRS.EPSG3857 = s.extend({}, s.CRS, {
						code: "EPSG:3857",
						projection: s.Projection.SphericalMercator,
						transformation: new s.Transformation(.5 / Math.PI, .5, -.5 / Math.PI, .5),
						project: function(t) {
							var e = this.projection.project(t),
								i = 6378137;
							return e.multiplyBy(i)
						}
					}), s.CRS.EPSG900913 = s.extend({}, s.CRS.EPSG3857, {
						code: "EPSG:900913"
					}), s.CRS.EPSG4326 = s.extend({}, s.CRS, {
						code: "EPSG:4326",
						projection: s.Projection.LonLat,
						transformation: new s.Transformation(1 / 360, .5, -1 / 360, .5)
					}), s.Map = s.Class.extend({
						includes: s.Mixin.Events,
						options: {
							crs: s.CRS.EPSG3857,
							fadeAnimation: s.DomUtil.TRANSITION && !s.Browser.android23,
							trackResize: !0,
							markerZoomAnimation: s.DomUtil.TRANSITION && s.Browser.any3d
						},
						initialize: function(t, e) {
							e = s.setOptions(this, e), this._initContainer(t), this._initLayout(), this._onResize = s.bind(this._onResize, this), this._initEvents(), e.maxBounds && this.setMaxBounds(e.maxBounds), e.center && e.zoom !== n && this.setView(s.latLng(e.center), e.zoom, {
								reset: !0
							}), this._handlers = [], this._layers = {}, this._zoomBoundLayers = {}, this._tileLayersNum = 0, this.callInitHooks(), this._addLayers(e.layers)
						},
						setView: function(t, e) {
							return e = e === n ? this.getZoom() : e, this._resetView(s.latLng(t), this._limitZoom(e)), this
						},
						setZoom: function(t, e) {
							return this._loaded ? this.setView(this.getCenter(), t, {
								zoom: e
							}) : (this._zoom = this._limitZoom(t), this)
						},
						zoomIn: function(t, e) {
							return this.setZoom(this._zoom + (t || 1), e)
						},
						zoomOut: function(t, e) {
							return this.setZoom(this._zoom - (t || 1), e)
						},
						setZoomAround: function(t, e, i) {
							var n = this.getZoomScale(e),
								o = this.getSize().divideBy(2),
								r = t instanceof s.Point ? t : this.latLngToContainerPoint(t),
								a = r.subtract(o).multiplyBy(1 - 1 / n),
								l = this.containerPointToLatLng(o.add(a));
							return this.setView(l, e, {
								zoom: i
							})
						},
						fitBounds: function(t, e) {
							e = e || {}, t = t.getBounds ? t.getBounds() : s.latLngBounds(t);
							var i = s.point(e.paddingTopLeft || e.padding || [0, 0]),
								n = s.point(e.paddingBottomRight || e.padding || [0, 0]),
								o = this.getBoundsZoom(t, !1, i.add(n)),
								r = n.subtract(i).divideBy(2),
								a = this.project(t.getSouthWest(), o),
								l = this.project(t.getNorthEast(), o),
								u = this.unproject(a.add(l).divideBy(2).add(r), o);
							return o = e && e.maxZoom ? Math.min(e.maxZoom, o) : o, this.setView(u, o, e)
						},
						fitWorld: function(t) {
							return this.fitBounds([
								[-90, -180],
								[90, 180]
							], t)
						},
						panTo: function(t, e) {
							return this.setView(t, this._zoom, {
								pan: e
							})
						},
						panBy: function(t) {
							return this.fire("movestart"), this._rawPanBy(s.point(t)), this.fire("move"), this.fire("moveend")
						},
						setMaxBounds: function(t) {
							return t = s.latLngBounds(t), this.options.maxBounds = t, t ? (this._loaded && this._panInsideMaxBounds(), this.on("moveend", this._panInsideMaxBounds, this)) : this.off("moveend", this._panInsideMaxBounds, this)
						},
						panInsideBounds: function(t, e) {
							var i = this.getCenter(),
								n = this._limitCenter(i, this._zoom, t);
							return i.equals(n) ? this : this.panTo(n, e)
						},
						addLayer: function(t) {
							var e = s.stamp(t);
							return this._layers[e] ? this : (this._layers[e] = t, !t.options || isNaN(t.options.maxZoom) && isNaN(t.options.minZoom) || (this._zoomBoundLayers[e] = t, this._updateZoomLevels()), this.options.zoomAnimation && s.TileLayer && t instanceof s.TileLayer && (this._tileLayersNum++, this._tileLayersToLoad++, t.on("load", this._onTileLayerLoad, this)), this._loaded && this._layerAdd(t), this)
						},
						removeLayer: function(t) {
							var e = s.stamp(t);
							return this._layers[e] ? (this._loaded && t.onRemove(this), delete this._layers[e], this._loaded && this.fire("layerremove", {
								layer: t
							}), this._zoomBoundLayers[e] && (delete this._zoomBoundLayers[e], this._updateZoomLevels()), this.options.zoomAnimation && s.TileLayer && t instanceof s.TileLayer && (this._tileLayersNum--, this._tileLayersToLoad--, t.off("load", this._onTileLayerLoad, this)), this) : this
						},
						hasLayer: function(t) {
							return t ? s.stamp(t) in this._layers : !1
						},
						eachLayer: function(t, e) {
							for (var i in this._layers) t.call(e, this._layers[i]);
							return this
						},
						invalidateSize: function(t) {
							if (!this._loaded) return this;
							t = s.extend({
								animate: !1,
								pan: !0
							}, t === !0 ? {
								animate: !0
							} : t);
							var e = this.getSize();
							this._sizeChanged = !0, this._initialCenter = null;
							var i = this.getSize(),
								n = e.divideBy(2).round(),
								o = i.divideBy(2).round(),
								r = n.subtract(o);
							return r.x || r.y ? (t.animate && t.pan ? this.panBy(r) : (t.pan && this._rawPanBy(r), this.fire("move"), t.debounceMoveend ? (clearTimeout(this._sizeTimer), this._sizeTimer = setTimeout(s.bind(this.fire, this, "moveend"), 200)) : this.fire("moveend")), this.fire("resize", {
								oldSize: e,
								newSize: i
							})) : this
						},
						addHandler: function(t, e) {
							if (!e) return this;
							var i = this[t] = new e(this);
							return this._handlers.push(i), this.options[t] && i.enable(), this
						},
						remove: function() {
							this._loaded && this.fire("unload"), this._initEvents("off");
							try {
								delete this._container._leaflet
							} catch (t) {
								this._container._leaflet = n
							}
							return this._clearPanes(), this._clearControlPos && this._clearControlPos(), this._clearHandlers(), this
						},
						getCenter: function() {
							return this._checkIfLoaded(), this._initialCenter && !this._moved() ? this._initialCenter : this.layerPointToLatLng(this._getCenterLayerPoint())
						},
						getZoom: function() {
							return this._zoom
						},
						getBounds: function() {
							var t = this.getPixelBounds(),
								e = this.unproject(t.getBottomLeft()),
								i = this.unproject(t.getTopRight());
							return new s.LatLngBounds(e, i)
						},
						getMinZoom: function() {
							return this.options.minZoom === n ? this._layersMinZoom === n ? 0 : this._layersMinZoom : this.options.minZoom
						},
						getMaxZoom: function() {
							return this.options.maxZoom === n ? this._layersMaxZoom === n ? 1 / 0 : this._layersMaxZoom : this.options.maxZoom
						},
						getBoundsZoom: function(t, e, i) {
							t = s.latLngBounds(t);
							var n, o = this.getMinZoom() - (e ? 1 : 0),
								r = this.getMaxZoom(),
								a = this.getSize(),
								l = t.getNorthWest(),
								u = t.getSouthEast(),
								c = !0;
							i = s.point(i || [0, 0]);
							do o++, n = this.project(u, o).subtract(this.project(l, o)).add(i), c = e ? n.x < a.x || n.y < a.y : a.contains(n); while (c && r >= o);
							return c && e ? null : e ? o : o - 1
						},
						getSize: function() {
							return (!this._size || this._sizeChanged) && (this._size = new s.Point(this._container.clientWidth, this._container.clientHeight), this._sizeChanged = !1), this._size.clone()
						},
						getPixelBounds: function() {
							var t = this._getTopLeftPoint();
							return new s.Bounds(t, t.add(this.getSize()))
						},
						getPixelOrigin: function() {
							return this._checkIfLoaded(), this._initialTopLeftPoint
						},
						getPanes: function() {
							return this._panes
						},
						getContainer: function() {
							return this._container
						},
						getZoomScale: function(t) {
							var e = this.options.crs;
							return e.scale(t) / e.scale(this._zoom)
						},
						getScaleZoom: function(t) {
							return this._zoom + Math.log(t) / Math.LN2
						},
						project: function(t, e) {
							return e = e === n ? this._zoom : e, this.options.crs.latLngToPoint(s.latLng(t), e)
						},
						unproject: function(t, e) {
							return e = e === n ? this._zoom : e, this.options.crs.pointToLatLng(s.point(t), e)
						},
						layerPointToLatLng: function(t) {
							var e = s.point(t).add(this.getPixelOrigin());
							return this.unproject(e)
						},
						latLngToLayerPoint: function(t) {
							var e = this.project(s.latLng(t))._round();
							return e._subtract(this.getPixelOrigin())
						},
						containerPointToLayerPoint: function(t) {
							return s.point(t).subtract(this._getMapPanePos())
						},
						layerPointToContainerPoint: function(t) {
							return s.point(t).add(this._getMapPanePos())
						},
						containerPointToLatLng: function(t) {
							var e = this.containerPointToLayerPoint(s.point(t));
							return this.layerPointToLatLng(e)
						},
						latLngToContainerPoint: function(t) {
							return this.layerPointToContainerPoint(this.latLngToLayerPoint(s.latLng(t)))
						},
						mouseEventToContainerPoint: function(t) {
							return s.DomEvent.getMousePosition(t, this._container)
						},
						mouseEventToLayerPoint: function(t) {
							return this.containerPointToLayerPoint(this.mouseEventToContainerPoint(t))
						},
						mouseEventToLatLng: function(t) {
							return this.layerPointToLatLng(this.mouseEventToLayerPoint(t))
						},
						_initContainer: function(t) {
							var e = this._container = s.DomUtil.get(t);
							if (!e) throw new Error("Map container not found.");
							if (e._leaflet) throw new Error("Map container is already initialized.");
							e._leaflet = !0
						},
						_initLayout: function() {
							var t = this._container;
							s.DomUtil.addClass(t, "leaflet-container" + (s.Browser.touch ? " leaflet-touch" : "") + (s.Browser.retina ? " leaflet-retina" : "") + (s.Browser.ielt9 ? " leaflet-oldie" : "") + (this.options.fadeAnimation ? " leaflet-fade-anim" : ""));
							var e = s.DomUtil.getStyle(t, "position");
							"absolute" !== e && "relative" !== e && "fixed" !== e && (t.style.position = "relative"), this._initPanes(), this._initControlPos && this._initControlPos()
						},
						_initPanes: function() {
							var t = this._panes = {};
							this._mapPane = t.mapPane = this._createPane("leaflet-map-pane", this._container), this._tilePane = t.tilePane = this._createPane("leaflet-tile-pane", this._mapPane), t.objectsPane = this._createPane("leaflet-objects-pane", this._mapPane), t.shadowPane = this._createPane("leaflet-shadow-pane"), t.overlayPane = this._createPane("leaflet-overlay-pane"), t.markerPane = this._createPane("leaflet-marker-pane"), t.popupPane = this._createPane("leaflet-popup-pane");
							var e = " leaflet-zoom-hide";
							this.options.markerZoomAnimation || (s.DomUtil.addClass(t.markerPane, e), s.DomUtil.addClass(t.shadowPane, e), s.DomUtil.addClass(t.popupPane, e))
						},
						_createPane: function(t, e) {
							return s.DomUtil.create("div", t, e || this._panes.objectsPane)
						},
						_clearPanes: function() {
							this._container.removeChild(this._mapPane)
						},
						_addLayers: function(t) {
							t = t ? s.Util.isArray(t) ? t : [t] : [];
							for (var e = 0, i = t.length; i > e; e++) this.addLayer(t[e])
						},
						_resetView: function(t, e, i, n) {
							var o = this._zoom !== e;
							n || (this.fire("movestart"), o && this.fire("zoomstart")), this._zoom = e, this._initialCenter = t, this._initialTopLeftPoint = this._getNewTopLeftPoint(t), i ? this._initialTopLeftPoint._add(this._getMapPanePos()) : s.DomUtil.setPosition(this._mapPane, new s.Point(0, 0)), this._tileLayersToLoad = this._tileLayersNum;
							var r = !this._loaded;
							this._loaded = !0, this.fire("viewreset", {
								hard: !i
							}), r && (this.fire("load"), this.eachLayer(this._layerAdd, this)), this.fire("move"), (o || n) && this.fire("zoomend"), this.fire("moveend", {
								hard: !i
							})
						},
						_rawPanBy: function(t) {
							s.DomUtil.setPosition(this._mapPane, this._getMapPanePos().subtract(t))
						},
						_getZoomSpan: function() {
							return this.getMaxZoom() - this.getMinZoom()
						},
						_updateZoomLevels: function() {
							var t, e = 1 / 0,
								i = -1 / 0,
								o = this._getZoomSpan();
							for (t in this._zoomBoundLayers) {
								var s = this._zoomBoundLayers[t];
								isNaN(s.options.minZoom) || (e = Math.min(e, s.options.minZoom)), isNaN(s.options.maxZoom) || (i = Math.max(i, s.options.maxZoom))
							}
							t === n ? this._layersMaxZoom = this._layersMinZoom = n : (this._layersMaxZoom = i, this._layersMinZoom = e), o !== this._getZoomSpan() && this.fire("zoomlevelschange")
						},
						_panInsideMaxBounds: function() {
							this.panInsideBounds(this.options.maxBounds)
						},
						_checkIfLoaded: function() {
							if (!this._loaded) throw new Error("Set map center and zoom first.")
						},
						_initEvents: function(e) {
							if (s.DomEvent) {
								e = e || "on", s.DomEvent[e](this._container, "click", this._onMouseClick, this);
								var i, n, o = ["dblclick", "mousedown", "mouseup", "mouseenter", "mouseleave", "mousemove", "contextmenu"];
								for (i = 0, n = o.length; n > i; i++) s.DomEvent[e](this._container, o[i], this._fireMouseEvent, this);
								this.options.trackResize && s.DomEvent[e](t, "resize", this._onResize, this)
							}
						},
						_onResize: function() {
							s.Util.cancelAnimFrame(this._resizeRequest), this._resizeRequest = s.Util.requestAnimFrame(function() {
								this.invalidateSize({
									debounceMoveend: !0
								})
							}, this, !1, this._container)
						},
						_onMouseClick: function(t) {
							!this._loaded || !t._simulated && (this.dragging && this.dragging.moved() || this.boxZoom && this.boxZoom.moved()) || s.DomEvent._skipped(t) || (this.fire("preclick"), this._fireMouseEvent(t))
						},
						_fireMouseEvent: function(t) {
							if (this._loaded && !s.DomEvent._skipped(t)) {
								var e = t.type;
								if (e = "mouseenter" === e ? "mouseover" : "mouseleave" === e ? "mouseout" : e, this.hasEventListeners(e)) {
									"contextmenu" === e && s.DomEvent.preventDefault(t);
									var i = this.mouseEventToContainerPoint(t),
										n = this.containerPointToLayerPoint(i),
										o = this.layerPointToLatLng(n);
									this.fire(e, {
										latlng: o,
										layerPoint: n,
										containerPoint: i,
										originalEvent: t
									})
								}
							}
						},
						_onTileLayerLoad: function() {
							this._tileLayersToLoad--, this._tileLayersNum && !this._tileLayersToLoad && this.fire("tilelayersload")
						},
						_clearHandlers: function() {
							for (var t = 0, e = this._handlers.length; e > t; t++) this._handlers[t].disable()
						},
						whenReady: function(t, e) {
							return this._loaded ? t.call(e || this, this) : this.on("load", t, e), this
						},
						_layerAdd: function(t) {
							t.onAdd(this), this.fire("layeradd", {
								layer: t
							})
						},
						_getMapPanePos: function() {
							return s.DomUtil.getPosition(this._mapPane)
						},
						_moved: function() {
							var t = this._getMapPanePos();
							return t && !t.equals([0, 0])
						},
						_getTopLeftPoint: function() {
							return this.getPixelOrigin().subtract(this._getMapPanePos())
						},
						_getNewTopLeftPoint: function(t, e) {
							var i = this.getSize()._divideBy(2);
							return this.project(t, e)._subtract(i)._round()
						},
						_latLngToNewLayerPoint: function(t, e, i) {
							var n = this._getNewTopLeftPoint(i, e).add(this._getMapPanePos());
							return this.project(t, e)._subtract(n)
						},
						_getCenterLayerPoint: function() {
							return this.containerPointToLayerPoint(this.getSize()._divideBy(2))
						},
						_getCenterOffset: function(t) {
							return this.latLngToLayerPoint(t).subtract(this._getCenterLayerPoint())
						},
						_limitCenter: function(t, e, i) {
							if (!i) return t;
							var n = this.project(t, e),
								o = this.getSize().divideBy(2),
								r = new s.Bounds(n.subtract(o), n.add(o)),
								a = this._getBoundsOffset(r, i, e);
							return this.unproject(n.add(a), e)
						},
						_limitOffset: function(t, e) {
							if (!e) return t;
							var i = this.getPixelBounds(),
								n = new s.Bounds(i.min.add(t), i.max.add(t));
							return t.add(this._getBoundsOffset(n, e))
						},
						_getBoundsOffset: function(t, e, i) {
							var n = this.project(e.getNorthWest(), i).subtract(t.min),
								o = this.project(e.getSouthEast(), i).subtract(t.max),
								r = this._rebound(n.x, -o.x),
								a = this._rebound(n.y, -o.y);
							return new s.Point(r, a)
						},
						_rebound: function(t, e) {
							return t + e > 0 ? Math.round(t - e) / 2 : Math.max(0, Math.ceil(t)) - Math.max(0, Math.floor(e))
						},
						_limitZoom: function(t) {
							var e = this.getMinZoom(),
								i = this.getMaxZoom();
							return Math.max(e, Math.min(i, t))
						}
					}), s.map = function(t, e) {
						return new s.Map(t, e)
					}, s.Projection.Mercator = {
						MAX_LATITUDE: 85.0840591556,
						R_MINOR: 6356752.314245179,
						R_MAJOR: 6378137,
						project: function(t) {
							var e = s.LatLng.DEG_TO_RAD,
								i = this.MAX_LATITUDE,
								n = Math.max(Math.min(i, t.lat), -i),
								o = this.R_MAJOR,
								r = this.R_MINOR,
								a = t.lng * e * o,
								l = n * e,
								u = r / o,
								c = Math.sqrt(1 - u * u),
								h = c * Math.sin(l);
							h = Math.pow((1 - h) / (1 + h), .5 * c);
							var p = Math.tan(.5 * (.5 * Math.PI - l)) / h;
							return l = -o * Math.log(p), new s.Point(a, l)
						},
						unproject: function(t) {
							for (var e, i = s.LatLng.RAD_TO_DEG, n = this.R_MAJOR, o = this.R_MINOR, r = t.x * i / n, a = o / n, l = Math.sqrt(1 - a * a), u = Math.exp(-t.y / n), c = Math.PI / 2 - 2 * Math.atan(u), h = 15, p = 1e-7, d = h, f = .1; Math.abs(f) > p && --d > 0;) e = l * Math.sin(c), f = Math.PI / 2 - 2 * Math.atan(u * Math.pow((1 - e) / (1 + e), .5 * l)) - c, c += f;
							return new s.LatLng(c * i, r)
						}
					}, s.CRS.EPSG3395 = s.extend({}, s.CRS, {
						code: "EPSG:3395",
						projection: s.Projection.Mercator,
						transformation: function() {
							var t = s.Projection.Mercator,
								e = t.R_MAJOR,
								i = .5 / (Math.PI * e);
							return new s.Transformation(i, .5, -i, .5)
						}()
					}), s.TileLayer = s.Class.extend({
						includes: s.Mixin.Events,
						options: {
							minZoom: 0,
							maxZoom: 18,
							tileSize: 256,
							subdomains: "abc",
							errorTileUrl: "",
							attribution: "",
							zoomOffset: 0,
							opacity: 1,
							unloadInvisibleTiles: s.Browser.mobile,
							updateWhenIdle: s.Browser.mobile
						},
						initialize: function(t, e) {
							e = s.setOptions(this, e), e.detectRetina && s.Browser.retina && e.maxZoom > 0 && (e.tileSize = Math.floor(e.tileSize / 2), e.zoomOffset++, e.minZoom > 0 && e.minZoom--, this.options.maxZoom--), e.bounds && (e.bounds = s.latLngBounds(e.bounds)), this._url = t;
							var i = this.options.subdomains;
							"string" == typeof i && (this.options.subdomains = i.split(""))
						},
						onAdd: function(t) {
							this._map = t, this._animated = t._zoomAnimated, this._initContainer(), t.on({
								viewreset: this._reset,
								moveend: this._update
							}, this), this._animated && t.on({
								zoomanim: this._animateZoom,
								zoomend: this._endZoomAnim
							}, this), this.options.updateWhenIdle || (this._limitedUpdate = s.Util.limitExecByInterval(this._update, 150, this), t.on("move", this._limitedUpdate, this)), this._reset(), this._update()
						},
						addTo: function(t) {
							return t.addLayer(this), this
						},
						onRemove: function(t) {
							this._container.parentNode.removeChild(this._container), t.off({
								viewreset: this._reset,
								moveend: this._update
							}, this), this._animated && t.off({
								zoomanim: this._animateZoom,
								zoomend: this._endZoomAnim
							}, this), this.options.updateWhenIdle || t.off("move", this._limitedUpdate, this), this._container = null, this._map = null
						},
						bringToFront: function() {
							var t = this._map._panes.tilePane;
							return this._container && (t.appendChild(this._container), this._setAutoZIndex(t, Math.max)), this
						},
						bringToBack: function() {
							var t = this._map._panes.tilePane;
							return this._container && (t.insertBefore(this._container, t.firstChild), this._setAutoZIndex(t, Math.min)), this
						},
						getAttribution: function() {
							return this.options.attribution
						},
						getContainer: function() {
							return this._container
						},
						setOpacity: function(t) {
							return this.options.opacity = t, this._map && this._updateOpacity(), this
						},
						setZIndex: function(t) {
							return this.options.zIndex = t, this._updateZIndex(), this
						},
						setUrl: function(t, e) {
							return this._url = t, e || this.redraw(), this
						},
						redraw: function() {
							return this._map && (this._reset({
								hard: !0
							}), this._update()), this
						},
						_updateZIndex: function() {
							this._container && this.options.zIndex !== n && (this._container.style.zIndex = this.options.zIndex)
						},
						_setAutoZIndex: function(t, e) {
							var i, n, o, s = t.children,
								r = -e(1 / 0, -1 / 0);
							for (n = 0, o = s.length; o > n; n++) s[n] !== this._container && (i = parseInt(s[n].style.zIndex, 10), isNaN(i) || (r = e(r, i)));
							this.options.zIndex = this._container.style.zIndex = (isFinite(r) ? r : 0) + e(1, -1)
						},
						_updateOpacity: function() {
							var t, e = this._tiles;
							if (s.Browser.ielt9)
								for (t in e) s.DomUtil.setOpacity(e[t], this.options.opacity);
							else s.DomUtil.setOpacity(this._container, this.options.opacity)
						},
						_initContainer: function() {
							var t = this._map._panes.tilePane;
							if (!this._container) {
								if (this._container = s.DomUtil.create("div", "leaflet-layer"), this._updateZIndex(), this._animated) {
									var e = "leaflet-tile-container";
									this._bgBuffer = s.DomUtil.create("div", e, this._container), this._tileContainer = s.DomUtil.create("div", e, this._container)
								} else this._tileContainer = this._container;
								t.appendChild(this._container), this.options.opacity < 1 && this._updateOpacity()
							}
						},
						_reset: function(t) {
							for (var e in this._tiles) this.fire("tileunload", {
								tile: this._tiles[e]
							});
							this._tiles = {}, this._tilesToLoad = 0, this.options.reuseTiles && (this._unusedTiles = []), this._tileContainer.innerHTML = "", this._animated && t && t.hard && this._clearBgBuffer(), this._initContainer()
						},
						_getTileSize: function() {
							var t = this._map,
								e = t.getZoom() + this.options.zoomOffset,
								i = this.options.maxNativeZoom,
								n = this.options.tileSize;
							return i && e > i && (n = Math.round(t.getZoomScale(e) / t.getZoomScale(i) * n)), n
						},
						_update: function() {
							if (this._map) {
								var t = this._map,
									e = t.getPixelBounds(),
									i = t.getZoom(),
									n = this._getTileSize();
								if (!(i > this.options.maxZoom || i < this.options.minZoom)) {
									var o = s.bounds(e.min.divideBy(n)._floor(), e.max.divideBy(n)._floor());
									this._addTilesFromCenterOut(o), (this.options.unloadInvisibleTiles || this.options.reuseTiles) && this._removeOtherTiles(o)
								}
							}
						},
						_addTilesFromCenterOut: function(t) {
							var e, n, o, r = [],
								a = t.getCenter();
							for (e = t.min.y; e <= t.max.y; e++)
								for (n = t.min.x; n <= t.max.x; n++) o = new s.Point(n, e), this._tileShouldBeLoaded(o) && r.push(o);
							var l = r.length;
							if (0 !== l) {
								r.sort(function(t, e) {
									return t.distanceTo(a) - e.distanceTo(a)
								});
								var u = i.createDocumentFragment();
								for (this._tilesToLoad || this.fire("loading"), this._tilesToLoad += l, n = 0; l > n; n++) this._addTile(r[n], u);
								this._tileContainer.appendChild(u)
							}
						},
						_tileShouldBeLoaded: function(t) {
							if (t.x + ":" + t.y in this._tiles) return !1;
							var e = this.options;
							if (!e.continuousWorld) {
								var i = this._getWrapTileNum();
								if (e.noWrap && (t.x < 0 || t.x >= i.x) || t.y < 0 || t.y >= i.y) return !1
							}
							if (e.bounds) {
								var n = e.tileSize,
									o = t.multiplyBy(n),
									s = o.add([n, n]),
									r = this._map.unproject(o),
									a = this._map.unproject(s);
								if (e.continuousWorld || e.noWrap || (r = r.wrap(), a = a.wrap()), !e.bounds.intersects([r, a])) return !1
							}
							return !0
						},
						_removeOtherTiles: function(t) {
							var e, i, n, o;
							for (o in this._tiles) e = o.split(":"), i = parseInt(e[0], 10), n = parseInt(e[1], 10), (i < t.min.x || i > t.max.x || n < t.min.y || n > t.max.y) && this._removeTile(o)
						},
						_removeTile: function(t) {
							var e = this._tiles[t];
							this.fire("tileunload", {
								tile: e,
								url: e.src
							}), this.options.reuseTiles ? (s.DomUtil.removeClass(e, "leaflet-tile-loaded"), this._unusedTiles.push(e)) : e.parentNode === this._tileContainer && this._tileContainer.removeChild(e), s.Browser.android || (e.onload = null, e.src = s.Util.emptyImageUrl), delete this._tiles[t]
						},
						_addTile: function(t, e) {
							var i = this._getTilePos(t),
								n = this._getTile();
							s.DomUtil.setPosition(n, i, s.Browser.chrome), this._tiles[t.x + ":" + t.y] = n, this._loadTile(n, t), n.parentNode !== this._tileContainer && e.appendChild(n)
						},
						_getZoomForUrl: function() {
							var t = this.options,
								e = this._map.getZoom();
							return t.zoomReverse && (e = t.maxZoom - e), e += t.zoomOffset, t.maxNativeZoom ? Math.min(e, t.maxNativeZoom) : e
						},
						_getTilePos: function(t) {
							var e = this._map.getPixelOrigin(),
								i = this._getTileSize();
							return t.multiplyBy(i).subtract(e)
						},
						getTileUrl: function(t) {
							return s.Util.template(this._url, s.extend({
								s: this._getSubdomain(t),
								z: t.z,
								x: t.x,
								y: t.y
							}, this.options))
						},
						_getWrapTileNum: function() {
							var t = this._map.options.crs,
								e = t.getSize(this._map.getZoom());
							return e.divideBy(this._getTileSize())._floor()
						},
						_adjustTilePoint: function(t) {
							var e = this._getWrapTileNum();
							this.options.continuousWorld || this.options.noWrap || (t.x = (t.x % e.x + e.x) % e.x), this.options.tms && (t.y = e.y - t.y - 1), t.z = this._getZoomForUrl()
						},
						_getSubdomain: function(t) {
							var e = Math.abs(t.x + t.y) % this.options.subdomains.length;
							return this.options.subdomains[e]
						},
						_getTile: function() {
							if (this.options.reuseTiles && this._unusedTiles.length > 0) {
								var t = this._unusedTiles.pop();
								return this._resetTile(t), t
							}
							return this._createTile()
						},
						_resetTile: function() {},
						_createTile: function() {
							var t = s.DomUtil.create("img", "leaflet-tile");
							return t.style.width = t.style.height = this._getTileSize() + "px", t.galleryimg = "no", t.onselectstart = t.onmousemove = s.Util.falseFn, s.Browser.ielt9 && this.options.opacity !== n && s.DomUtil.setOpacity(t, this.options.opacity), s.Browser.mobileWebkit3d && (t.style.WebkitBackfaceVisibility = "hidden"), t
						},
						_loadTile: function(t, e) {
							t._layer = this, t.onload = this._tileOnLoad, t.onerror = this._tileOnError, this._adjustTilePoint(e), t.src = this.getTileUrl(e), this.fire("tileloadstart", {
								tile: t,
								url: t.src
							})
						},
						_tileLoaded: function() {
							this._tilesToLoad--, this._animated && s.DomUtil.addClass(this._tileContainer, "leaflet-zoom-animated"), this._tilesToLoad || (this.fire("load"), this._animated && (clearTimeout(this._clearBgBufferTimer), this._clearBgBufferTimer = setTimeout(s.bind(this._clearBgBuffer, this), 500)))
						},
						_tileOnLoad: function() {
							var t = this._layer;
							this.src !== s.Util.emptyImageUrl && (s.DomUtil.addClass(this, "leaflet-tile-loaded"), t.fire("tileload", {
								tile: this,
								url: this.src
							})), t._tileLoaded()
						},
						_tileOnError: function() {
							var t = this._layer;
							t.fire("tileerror", {
								tile: this,
								url: this.src
							});
							var e = t.options.errorTileUrl;
							e && (this.src = e), t._tileLoaded()
						}
					}), s.tileLayer = function(t, e) {
						return new s.TileLayer(t, e)
					}, s.TileLayer.WMS = s.TileLayer.extend({
						defaultWmsParams: {
							service: "WMS",
							request: "GetMap",
							version: "1.1.1",
							layers: "",
							styles: "",
							format: "image/jpeg",
							transparent: !1
						},
						initialize: function(t, e) {
							this._url = t;
							var i = s.extend({}, this.defaultWmsParams),
								n = e.tileSize || this.options.tileSize;
							i.width = i.height = e.detectRetina && s.Browser.retina ? 2 * n : n;
							for (var o in e) this.options.hasOwnProperty(o) || "crs" === o || (i[o] = e[o]);
							this.wmsParams = i, s.setOptions(this, e)
						},
						onAdd: function(t) {
							this._crs = this.options.crs || t.options.crs, this._wmsVersion = parseFloat(this.wmsParams.version);
							var e = this._wmsVersion >= 1.3 ? "crs" : "srs";
							this.wmsParams[e] = this._crs.code, s.TileLayer.prototype.onAdd.call(this, t)
						},
						getTileUrl: function(t) {
							var e = this._map,
								i = this.options.tileSize,
								n = t.multiplyBy(i),
								o = n.add([i, i]),
								r = this._crs.project(e.unproject(n, t.z)),
								a = this._crs.project(e.unproject(o, t.z)),
								l = this._wmsVersion >= 1.3 && this._crs === s.CRS.EPSG4326 ? [a.y, r.x, r.y, a.x].join(",") : [r.x, a.y, a.x, r.y].join(","),
								u = s.Util.template(this._url, {
									s: this._getSubdomain(t)
								});
							return u + s.Util.getParamString(this.wmsParams, u, !0) + "&BBOX=" + l
						},
						setParams: function(t, e) {
							return s.extend(this.wmsParams, t), e || this.redraw(), this
						}
					}), s.tileLayer.wms = function(t, e) {
						return new s.TileLayer.WMS(t, e)
					}, s.TileLayer.Canvas = s.TileLayer.extend({
						options: {
							async: !1
						},
						initialize: function(t) {
							s.setOptions(this, t)
						},
						redraw: function() {
							this._map && (this._reset({
								hard: !0
							}), this._update());
							for (var t in this._tiles) this._redrawTile(this._tiles[t]);
							return this
						},
						_redrawTile: function(t) {
							this.drawTile(t, t._tilePoint, this._map._zoom)
						},
						_createTile: function() {
							var t = s.DomUtil.create("canvas", "leaflet-tile");
							return t.width = t.height = this.options.tileSize, t.onselectstart = t.onmousemove = s.Util.falseFn, t
						},
						_loadTile: function(t, e) {
							t._layer = this, t._tilePoint = e, this._redrawTile(t), this.options.async || this.tileDrawn(t)
						},
						drawTile: function() {},
						tileDrawn: function(t) {
							this._tileOnLoad.call(t)
						}
					}), s.tileLayer.canvas = function(t) {
						return new s.TileLayer.Canvas(t)
					}, s.ImageOverlay = s.Class.extend({
						includes: s.Mixin.Events,
						options: {
							opacity: 1
						},
						initialize: function(t, e, i) {
							this._url = t, this._bounds = s.latLngBounds(e), s.setOptions(this, i)
						},
						onAdd: function(t) {
							this._map = t, this._image || this._initImage(), t._panes.overlayPane.appendChild(this._image), t.on("viewreset", this._reset, this), t.options.zoomAnimation && s.Browser.any3d && t.on("zoomanim", this._animateZoom, this), this._reset()
						},
						onRemove: function(t) {
							t.getPanes().overlayPane.removeChild(this._image), t.off("viewreset", this._reset, this), t.options.zoomAnimation && t.off("zoomanim", this._animateZoom, this)
						},
						addTo: function(t) {
							return t.addLayer(this), this
						},
						setOpacity: function(t) {
							return this.options.opacity = t, this._updateOpacity(), this
						},
						bringToFront: function() {
							return this._image && this._map._panes.overlayPane.appendChild(this._image), this
						},
						bringToBack: function() {
							var t = this._map._panes.overlayPane;
							return this._image && t.insertBefore(this._image, t.firstChild), this
						},
						setUrl: function(t) {
							this._url = t, this._image.src = this._url
						},
						getAttribution: function() {
							return this.options.attribution
						},
						_initImage: function() {
							this._image = s.DomUtil.create("img", "leaflet-image-layer"), this._map.options.zoomAnimation && s.Browser.any3d ? s.DomUtil.addClass(this._image, "leaflet-zoom-animated") : s.DomUtil.addClass(this._image, "leaflet-zoom-hide"), this._updateOpacity(), s.extend(this._image, {
								galleryimg: "no",
								onselectstart: s.Util.falseFn,
								onmousemove: s.Util.falseFn,
								onload: s.bind(this._onImageLoad, this),
								src: this._url
							})
						},
						_animateZoom: function(t) {
							var e = this._map,
								i = this._image,
								n = e.getZoomScale(t.zoom),
								o = this._bounds.getNorthWest(),
								r = this._bounds.getSouthEast(),
								a = e._latLngToNewLayerPoint(o, t.zoom, t.center),
								l = e._latLngToNewLayerPoint(r, t.zoom, t.center)._subtract(a),
								u = a._add(l._multiplyBy(.5 * (1 - 1 / n)));
							i.style[s.DomUtil.TRANSFORM] = s.DomUtil.getTranslateString(u) + " scale(" + n + ") "
						},
						_reset: function() {
							var t = this._image,
								e = this._map.latLngToLayerPoint(this._bounds.getNorthWest()),
								i = this._map.latLngToLayerPoint(this._bounds.getSouthEast())._subtract(e);
							s.DomUtil.setPosition(t, e), t.style.width = i.x + "px", t.style.height = i.y + "px"
						},
						_onImageLoad: function() {
							this.fire("load")
						},
						_updateOpacity: function() {
							s.DomUtil.setOpacity(this._image, this.options.opacity)
						}
					}), s.imageOverlay = function(t, e, i) {
						return new s.ImageOverlay(t, e, i)
					}, s.Icon = s.Class.extend({
						options: {
							className: ""
						},
						initialize: function(t) {
							s.setOptions(this, t)
						},
						createIcon: function(t) {
							return this._createIcon("icon", t)
						},
						createShadow: function(t) {
							return this._createIcon("shadow", t)
						},
						_createIcon: function(t, e) {
							var i = this._getIconUrl(t);
							if (!i) {
								if ("icon" === t) throw new Error("iconUrl not set in Icon options (see the docs).");
								return null
							}
							var n;
							return n = e && "IMG" === e.tagName ? this._createImg(i, e) : this._createImg(i), this._setIconStyles(n, t), n
						},
						_setIconStyles: function(t, e) {
							var i, n = this.options,
								o = s.point(n[e + "Size"]);
							i = s.point("shadow" === e ? n.shadowAnchor || n.iconAnchor : n.iconAnchor), !i && o && (i = o.divideBy(2, !0)), t.className = "leaflet-marker-" + e + " " + n.className, i && (t.style.marginLeft = -i.x + "px", t.style.marginTop = -i.y + "px"), o && (t.style.width = o.x + "px", t.style.height = o.y + "px")
						},
						_createImg: function(t, e) {
							return e = e || i.createElement("img"), e.src = t, e
						},
						_getIconUrl: function(t) {
							return s.Browser.retina && this.options[t + "RetinaUrl"] ? this.options[t + "RetinaUrl"] : this.options[t + "Url"]
						}
					}), s.icon = function(t) {
						return new s.Icon(t)
					}, s.Icon.Default = s.Icon.extend({
						options: {
							iconSize: [25, 41],
							iconAnchor: [12, 41],
							popupAnchor: [1, -34],
							shadowSize: [41, 41]
						},
						_getIconUrl: function(t) {
							var e = t + "Url";
							if (this.options[e]) return this.options[e];
							s.Browser.retina && "icon" === t && (t += "-2x");
							var i = s.Icon.Default.imagePath;
							if (!i) throw new Error("Couldn't autodetect L.Icon.Default.imagePath, set it manually.");
							return i + "/marker-" + t + ".png"
						}
					}), s.Icon.Default.imagePath = function() {
						var t, e, n, o, s, r = i.getElementsByTagName("script"),
							a = /[\/^]leaflet[\-\._]?([\w\-\._]*)\.js\??/;
						for (t = 0, e = r.length; e > t; t++)
							if (n = r[t].src, o = n.match(a)) return s = n.split(a)[0], (s ? s + "/" : "") + "images"
					}(), s.Marker = s.Class.extend({
						includes: s.Mixin.Events,
						options: {
							icon: new s.Icon.Default,
							title: "",
							alt: "",
							clickable: !0,
							draggable: !1,
							keyboard: !0,
							zIndexOffset: 0,
							opacity: 1,
							riseOnHover: !1,
							riseOffset: 250
						},
						initialize: function(t, e) {
							s.setOptions(this, e), this._latlng = s.latLng(t)
						},
						onAdd: function(t) {
							this._map = t, t.on("viewreset", this.update, this), this._initIcon(), this.update(), this.fire("add"), t.options.zoomAnimation && t.options.markerZoomAnimation && t.on("zoomanim", this._animateZoom, this)
						},
						addTo: function(t) {
							return t.addLayer(this), this
						},
						onRemove: function(t) {
							this.dragging && this.dragging.disable(), this._removeIcon(), this._removeShadow(), this.fire("remove"), t.off({
								viewreset: this.update,
								zoomanim: this._animateZoom
							}, this), this._map = null
						},
						getLatLng: function() {
							return this._latlng
						},
						setLatLng: function(t) {
							return this._latlng = s.latLng(t), this.update(), this.fire("move", {
								latlng: this._latlng
							})
						},
						setZIndexOffset: function(t) {
							return this.options.zIndexOffset = t, this.update(), this
						},
						setIcon: function(t) {
							return this.options.icon = t, this._map && (this._initIcon(), this.update()), this._popup && this.bindPopup(this._popup), this
						},
						update: function() {
							if (this._icon) {
								var t = this._map.latLngToLayerPoint(this._latlng).round();
								this._setPos(t)
							}
							return this
						},
						_initIcon: function() {
							var t = this.options,
								e = this._map,
								i = e.options.zoomAnimation && e.options.markerZoomAnimation,
								n = i ? "leaflet-zoom-animated" : "leaflet-zoom-hide",
								o = t.icon.createIcon(this._icon),
								r = !1;
							o !== this._icon && (this._icon && this._removeIcon(), r = !0, t.title && (o.title = t.title), t.alt && (o.alt = t.alt)), s.DomUtil.addClass(o, n), t.keyboard && (o.tabIndex = "0"), this._icon = o, this._initInteraction(), t.riseOnHover && s.DomEvent.on(o, "mouseover", this._bringToFront, this).on(o, "mouseout", this._resetZIndex, this);
							var a = t.icon.createShadow(this._shadow),
								l = !1;
							a !== this._shadow && (this._removeShadow(), l = !0), a && s.DomUtil.addClass(a, n), this._shadow = a, t.opacity < 1 && this._updateOpacity();
							var u = this._map._panes;
							r && u.markerPane.appendChild(this._icon), a && l && u.shadowPane.appendChild(this._shadow)
						},
						_removeIcon: function() {
							this.options.riseOnHover && s.DomEvent.off(this._icon, "mouseover", this._bringToFront).off(this._icon, "mouseout", this._resetZIndex), this._map._panes.markerPane.removeChild(this._icon), this._icon = null
						},
						_removeShadow: function() {
							this._shadow && this._map._panes.shadowPane.removeChild(this._shadow), this._shadow = null
						},
						_setPos: function(t) {
							s.DomUtil.setPosition(this._icon, t), this._shadow && s.DomUtil.setPosition(this._shadow, t), this._zIndex = t.y + this.options.zIndexOffset, this._resetZIndex()
						},
						_updateZIndex: function(t) {
							this._icon.style.zIndex = this._zIndex + t
						},
						_animateZoom: function(t) {
							var e = this._map._latLngToNewLayerPoint(this._latlng, t.zoom, t.center).round();
							this._setPos(e)
						},
						_initInteraction: function() {
							if (this.options.clickable) {
								var t = this._icon,
									e = ["dblclick", "mousedown", "mouseover", "mouseout", "contextmenu"];
								s.DomUtil.addClass(t, "leaflet-clickable"), s.DomEvent.on(t, "click", this._onMouseClick, this), s.DomEvent.on(t, "keypress", this._onKeyPress, this);
								for (var i = 0; i < e.length; i++) s.DomEvent.on(t, e[i], this._fireMouseEvent, this);
								s.Handler.MarkerDrag && (this.dragging = new s.Handler.MarkerDrag(this), this.options.draggable && this.dragging.enable())
							}
						},
						_onMouseClick: function(t) {
							var e = this.dragging && this.dragging.moved();
							(this.hasEventListeners(t.type) || e) && s.DomEvent.stopPropagation(t), e || (this.dragging && this.dragging._enabled || !this._map.dragging || !this._map.dragging.moved()) && this.fire(t.type, {
								originalEvent: t,
								latlng: this._latlng
							})
						},
						_onKeyPress: function(t) {
							13 === t.keyCode && this.fire("click", {
								originalEvent: t,
								latlng: this._latlng
							})
						},
						_fireMouseEvent: function(t) {
							this.fire(t.type, {
								originalEvent: t,
								latlng: this._latlng
							}), "contextmenu" === t.type && this.hasEventListeners(t.type) && s.DomEvent.preventDefault(t), "mousedown" !== t.type ? s.DomEvent.stopPropagation(t) : s.DomEvent.preventDefault(t)
						},
						setOpacity: function(t) {
							return this.options.opacity = t, this._map && this._updateOpacity(), this
						},
						_updateOpacity: function() {
							s.DomUtil.setOpacity(this._icon, this.options.opacity), this._shadow && s.DomUtil.setOpacity(this._shadow, this.options.opacity)
						},
						_bringToFront: function() {
							this._updateZIndex(this.options.riseOffset)
						},
						_resetZIndex: function() {
							this._updateZIndex(0)
						}
					}), s.marker = function(t, e) {
						return new s.Marker(t, e)
					}, s.DivIcon = s.Icon.extend({
						options: {
							iconSize: [12, 12],
							className: "leaflet-div-icon",
							html: !1
						},
						createIcon: function(t) {
							var e = t && "DIV" === t.tagName ? t : i.createElement("div"),
								n = this.options;
							return e.innerHTML = n.html !== !1 ? n.html : "", n.bgPos && (e.style.backgroundPosition = -n.bgPos.x + "px " + -n.bgPos.y + "px"), this._setIconStyles(e, "icon"), e
						},
						createShadow: function() {
							return null
						}
					}), s.divIcon = function(t) {
						return new s.DivIcon(t)
					}, s.Map.mergeOptions({
						closePopupOnClick: !0
					}), s.Popup = s.Class.extend({
						includes: s.Mixin.Events,
						options: {
							minWidth: 50,
							maxWidth: 300,
							autoPan: !0,
							closeButton: !0,
							offset: [0, 7],
							autoPanPadding: [5, 5],
							keepInView: !1,
							className: "",
							zoomAnimation: !0
						},
						initialize: function(t, e) {
							s.setOptions(this, t), this._source = e, this._animated = s.Browser.any3d && this.options.zoomAnimation, this._isOpen = !1
						},
						onAdd: function(t) {
							this._map = t, this._container || this._initLayout();
							var e = t.options.fadeAnimation;
							e && s.DomUtil.setOpacity(this._container, 0), t._panes.popupPane.appendChild(this._container), t.on(this._getEvents(), this), this.update(), e && s.DomUtil.setOpacity(this._container, 1), this.fire("open"), t.fire("popupopen", {
								popup: this
							}), this._source && this._source.fire("popupopen", {
								popup: this
							})
						},
						addTo: function(t) {
							return t.addLayer(this), this
						},
						openOn: function(t) {
							return t.openPopup(this), this
						},
						onRemove: function(t) {
							t._panes.popupPane.removeChild(this._container), s.Util.falseFn(this._container.offsetWidth), t.off(this._getEvents(), this), t.options.fadeAnimation && s.DomUtil.setOpacity(this._container, 0), this._map = null, this.fire("close"), t.fire("popupclose", {
								popup: this
							}), this._source && this._source.fire("popupclose", {
								popup: this
							})
						},
						getLatLng: function() {
							return this._latlng
						},
						setLatLng: function(t) {
							return this._latlng = s.latLng(t), this._map && (this._updatePosition(), this._adjustPan()), this
						},
						getContent: function() {
							return this._content
						},
						setContent: function(t) {
							return this._content = t, this.update(), this
						},
						update: function() {
							this._map && (this._container.style.visibility = "hidden", this._updateContent(), this._updateLayout(), this._updatePosition(), this._container.style.visibility = "", this._adjustPan())
						},
						_getEvents: function() {
							var t = {
								viewreset: this._updatePosition
							};
							return this._animated && (t.zoomanim = this._zoomAnimation), ("closeOnClick" in this.options ? this.options.closeOnClick : this._map.options.closePopupOnClick) && (t.preclick = this._close), this.options.keepInView && (t.moveend = this._adjustPan), t
						},
						_close: function() {
							this._map && this._map.closePopup(this)
						},
						_initLayout: function() {
							var t, e = "leaflet-popup",
								i = e + " " + this.options.className + " leaflet-zoom-" + (this._animated ? "animated" : "hide"),
								n = this._container = s.DomUtil.create("div", i);
							this.options.closeButton && (t = this._closeButton = s.DomUtil.create("a", e + "-close-button", n), t.href = "#close", t.innerHTML = "&#215;", s.DomEvent.disableClickPropagation(t), s.DomEvent.on(t, "click", this._onCloseButtonClick, this));
							var o = this._wrapper = s.DomUtil.create("div", e + "-content-wrapper", n);
							s.DomEvent.disableClickPropagation(o), this._contentNode = s.DomUtil.create("div", e + "-content", o), s.DomEvent.disableScrollPropagation(this._contentNode), s.DomEvent.on(o, "contextmenu", s.DomEvent.stopPropagation), this._tipContainer = s.DomUtil.create("div", e + "-tip-container", n), this._tip = s.DomUtil.create("div", e + "-tip", this._tipContainer)
						},
						_updateContent: function() {
							if (this._content) {
								if ("string" == typeof this._content) this._contentNode.innerHTML = this._content;
								else {
									for (; this._contentNode.hasChildNodes();) this._contentNode.removeChild(this._contentNode.firstChild);
									this._contentNode.appendChild(this._content)
								}
								this.fire("contentupdate")
							}
						},
						_updateLayout: function() {
							var t = this._contentNode,
								e = t.style;
							e.width = "", e.whiteSpace = "nowrap";
							var i = t.offsetWidth;
							i = Math.min(i, this.options.maxWidth), i = Math.max(i, this.options.minWidth), e.width = i + 1 + "px", e.whiteSpace = "", e.height = "";
							var n = t.offsetHeight,
								o = this.options.maxHeight,
								r = "leaflet-popup-scrolled";
							o && n > o ? (e.height = o + "px", s.DomUtil.addClass(t, r)) : s.DomUtil.removeClass(t, r), this._containerWidth = this._container.offsetWidth
						},
						_updatePosition: function() {
							if (this._map) {
								var t = this._map.latLngToLayerPoint(this._latlng),
									e = this._animated,
									i = s.point(this.options.offset);
								e && s.DomUtil.setPosition(this._container, t), this._containerBottom = -i.y - (e ? 0 : t.y), this._containerLeft = -Math.round(this._containerWidth / 2) + i.x + (e ? 0 : t.x), this._container.style.bottom = this._containerBottom + "px", this._container.style.left = this._containerLeft + "px"
							}
						},
						_zoomAnimation: function(t) {
							var e = this._map._latLngToNewLayerPoint(this._latlng, t.zoom, t.center);
							s.DomUtil.setPosition(this._container, e)
						},
						_adjustPan: function() {
							if (this.options.autoPan) {
								var t = this._map,
									e = this._container.offsetHeight,
									i = this._containerWidth,
									n = new s.Point(this._containerLeft, -e - this._containerBottom);
								this._animated && n._add(s.DomUtil.getPosition(this._container));
								var o = t.layerPointToContainerPoint(n),
									r = s.point(this.options.autoPanPadding),
									a = s.point(this.options.autoPanPaddingTopLeft || r),
									l = s.point(this.options.autoPanPaddingBottomRight || r),
									u = t.getSize(),
									c = 0,
									h = 0;
								o.x + i + l.x > u.x && (c = o.x + i - u.x + l.x), o.x - c - a.x < 0 && (c = o.x - a.x), o.y + e + l.y > u.y && (h = o.y + e - u.y + l.y), o.y - h - a.y < 0 && (h = o.y - a.y), (c || h) && t.fire("autopanstart").panBy([c, h])
							}
						},
						_onCloseButtonClick: function(t) {
							this._close(), s.DomEvent.stop(t)
						}
					}), s.popup = function(t, e) {
						return new s.Popup(t, e)
					}, s.Map.include({
						openPopup: function(t, e, i) {
							if (this.closePopup(), !(t instanceof s.Popup)) {
								var n = t;
								t = new s.Popup(i).setLatLng(e).setContent(n)
							}
							return t._isOpen = !0, this._popup = t, this.addLayer(t)
						},
						closePopup: function(t) {
							return t && t !== this._popup || (t = this._popup, this._popup = null), t && (this.removeLayer(t), t._isOpen = !1), this
						}
					}), s.Marker.include({
						openPopup: function() {
							return this._popup && this._map && !this._map.hasLayer(this._popup) && (this._popup.setLatLng(this._latlng), this._map.openPopup(this._popup)), this
						},
						closePopup: function() {
							return this._popup && this._popup._close(), this
						},
						togglePopup: function() {
							return this._popup && (this._popup._isOpen ? this.closePopup() : this.openPopup()), this
						},
						bindPopup: function(t, e) {
							var i = s.point(this.options.icon.options.popupAnchor || [0, 0]);
							return i = i.add(s.Popup.prototype.options.offset), e && e.offset && (i = i.add(e.offset)), e = s.extend({
								offset: i
							}, e), this._popupHandlersAdded || (this.on("click", this.togglePopup, this).on("remove", this.closePopup, this).on("move", this._movePopup, this), this._popupHandlersAdded = !0), t instanceof s.Popup ? (s.setOptions(t, e), this._popup = t) : this._popup = new s.Popup(e, this).setContent(t), this
						},
						setPopupContent: function(t) {
							return this._popup && this._popup.setContent(t), this
						},
						unbindPopup: function() {
							return this._popup && (this._popup = null, this.off("click", this.togglePopup, this).off("remove", this.closePopup, this).off("move", this._movePopup, this), this._popupHandlersAdded = !1), this
						},
						getPopup: function() {
							return this._popup
						},
						_movePopup: function(t) {
							this._popup.setLatLng(t.latlng)
						}
					}), s.LayerGroup = s.Class.extend({
						initialize: function(t) {
							this._layers = {};
							var e, i;
							if (t)
								for (e = 0, i = t.length; i > e; e++) this.addLayer(t[e])
						},
						addLayer: function(t) {
							var e = this.getLayerId(t);
							return this._layers[e] = t, this._map && this._map.addLayer(t), this
						},
						removeLayer: function(t) {
							var e = t in this._layers ? t : this.getLayerId(t);
							return this._map && this._layers[e] && this._map.removeLayer(this._layers[e]), delete this._layers[e], this
						},
						hasLayer: function(t) {
							return t ? t in this._layers || this.getLayerId(t) in this._layers : !1
						},
						clearLayers: function() {
							return this.eachLayer(this.removeLayer, this), this
						},
						invoke: function(t) {
							var e, i, n = Array.prototype.slice.call(arguments, 1);
							for (e in this._layers) i = this._layers[e], i[t] && i[t].apply(i, n);
							return this
						},
						onAdd: function(t) {
							this._map = t, this.eachLayer(t.addLayer, t)
						},
						onRemove: function(t) {
							this.eachLayer(t.removeLayer, t), this._map = null
						},
						addTo: function(t) {
							return t.addLayer(this), this
						},
						eachLayer: function(t, e) {
							for (var i in this._layers) t.call(e, this._layers[i]);
							return this
						},
						getLayer: function(t) {
							return this._layers[t]
						},
						getLayers: function() {
							var t = [];
							for (var e in this._layers) t.push(this._layers[e]);
							return t
						},
						setZIndex: function(t) {
							return this.invoke("setZIndex", t)
						},
						getLayerId: function(t) {
							return s.stamp(t)
						}
					}), s.layerGroup = function(t) {
						return new s.LayerGroup(t)
					}, s.FeatureGroup = s.LayerGroup.extend({
						includes: s.Mixin.Events,
						statics: {
							EVENTS: "click dblclick mouseover mouseout mousemove contextmenu popupopen popupclose"
						},
						addLayer: function(t) {
							return this.hasLayer(t) ? this : ("on" in t && t.on(s.FeatureGroup.EVENTS, this._propagateEvent, this), s.LayerGroup.prototype.addLayer.call(this, t), this._popupContent && t.bindPopup && t.bindPopup(this._popupContent, this._popupOptions), this.fire("layeradd", {
								layer: t
							}))
						},
						removeLayer: function(t) {
							return this.hasLayer(t) ? (t in this._layers && (t = this._layers[t]), t.off(s.FeatureGroup.EVENTS, this._propagateEvent, this), s.LayerGroup.prototype.removeLayer.call(this, t), this._popupContent && this.invoke("unbindPopup"), this.fire("layerremove", {
								layer: t
							})) : this
						},
						bindPopup: function(t, e) {
							return this._popupContent = t, this._popupOptions = e, this.invoke("bindPopup", t, e)
						},
						openPopup: function(t) {
							for (var e in this._layers) {
								this._layers[e].openPopup(t);
								break
							}
							return this
						},
						setStyle: function(t) {
							return this.invoke("setStyle", t)
						},
						bringToFront: function() {
							return this.invoke("bringToFront")
						},
						bringToBack: function() {
							return this.invoke("bringToBack")
						},
						getBounds: function() {
							var t = new s.LatLngBounds;
							return this.eachLayer(function(e) {
								t.extend(e instanceof s.Marker ? e.getLatLng() : e.getBounds())
							}), t
						},
						_propagateEvent: function(t) {
							t = s.extend({
								layer: t.target,
								target: this
							}, t), this.fire(t.type, t)
						}
					}), s.featureGroup = function(t) {
						return new s.FeatureGroup(t)
					}, s.Path = s.Class.extend({
						includes: [s.Mixin.Events],
						statics: {
							CLIP_PADDING: function() {
								var e = s.Browser.mobile ? 1280 : 2e3,
									i = (e / Math.max(t.outerWidth, t.outerHeight) - 1) / 2;
								return Math.max(0, Math.min(.5, i))
							}()
						},
						options: {
							stroke: !0,
							color: "#0033ff",
							dashArray: null,
							lineCap: null,
							lineJoin: null,
							weight: 5,
							opacity: .5,
							fill: !1,
							fillColor: null,
							fillOpacity: .2,
							clickable: !0
						},
						initialize: function(t) {
							s.setOptions(this, t)
						},
						onAdd: function(t) {
							this._map = t, this._container || (this._initElements(), this._initEvents()), this.projectLatlngs(), this._updatePath(), this._container && this._map._pathRoot.appendChild(this._container), this.fire("add"), t.on({
								viewreset: this.projectLatlngs,
								moveend: this._updatePath
							}, this)
						},
						addTo: function(t) {
							return t.addLayer(this), this
						},
						onRemove: function(t) {
							t._pathRoot.removeChild(this._container), this.fire("remove"), this._map = null, s.Browser.vml && (this._container = null, this._stroke = null, this._fill = null), t.off({
								viewreset: this.projectLatlngs,
								moveend: this._updatePath
							}, this)
						},
						projectLatlngs: function() {},
						setStyle: function(t) {
							return s.setOptions(this, t), this._container && this._updateStyle(), this
						},
						redraw: function() {
							return this._map && (this.projectLatlngs(), this._updatePath()), this
						}
					}), s.Map.include({
						_updatePathViewport: function() {
							var t = s.Path.CLIP_PADDING,
								e = this.getSize(),
								i = s.DomUtil.getPosition(this._mapPane),
								n = i.multiplyBy(-1)._subtract(e.multiplyBy(t)._round()),
								o = n.add(e.multiplyBy(1 + 2 * t)._round());
							this._pathViewport = new s.Bounds(n, o)
						}
					}), s.Path.SVG_NS = "http://www.w3.org/2000/svg", s.Browser.svg = !(!i.createElementNS || !i.createElementNS(s.Path.SVG_NS, "svg").createSVGRect), s.Path = s.Path.extend({
						statics: {
							SVG: s.Browser.svg
						},
						bringToFront: function() {
							var t = this._map._pathRoot,
								e = this._container;
							return e && t.lastChild !== e && t.appendChild(e), this
						},
						bringToBack: function() {
							var t = this._map._pathRoot,
								e = this._container,
								i = t.firstChild;
							return e && i !== e && t.insertBefore(e, i), this
						},
						getPathString: function() {},
						_createElement: function(t) {
							return i.createElementNS(s.Path.SVG_NS, t)
						},
						_initElements: function() {
							this._map._initPathRoot(), this._initPath(), this._initStyle()
						},
						_initPath: function() {
							this._container = this._createElement("g"), this._path = this._createElement("path"), this.options.className && s.DomUtil.addClass(this._path, this.options.className), this._container.appendChild(this._path)
						},
						_initStyle: function() {
							this.options.stroke && (this._path.setAttribute("stroke-linejoin", "round"), this._path.setAttribute("stroke-linecap", "round")), this.options.fill && this._path.setAttribute("fill-rule", "evenodd"), this.options.pointerEvents && this._path.setAttribute("pointer-events", this.options.pointerEvents), this.options.clickable || this.options.pointerEvents || this._path.setAttribute("pointer-events", "none"), this._updateStyle()
						},
						_updateStyle: function() {
							this.options.stroke ? (this._path.setAttribute("stroke", this.options.color), this._path.setAttribute("stroke-opacity", this.options.opacity), this._path.setAttribute("stroke-width", this.options.weight), this.options.dashArray ? this._path.setAttribute("stroke-dasharray", this.options.dashArray) : this._path.removeAttribute("stroke-dasharray"), this.options.lineCap && this._path.setAttribute("stroke-linecap", this.options.lineCap), this.options.lineJoin && this._path.setAttribute("stroke-linejoin", this.options.lineJoin)) : this._path.setAttribute("stroke", "none"), this.options.fill ? (this._path.setAttribute("fill", this.options.fillColor || this.options.color), this._path.setAttribute("fill-opacity", this.options.fillOpacity)) : this._path.setAttribute("fill", "none")
						},
						_updatePath: function() {
							var t = this.getPathString();
							t || (t = "M0 0"), this._path.setAttribute("d", t)
						},
						_initEvents: function() {
							if (this.options.clickable) {
								(s.Browser.svg || !s.Browser.vml) && s.DomUtil.addClass(this._path, "leaflet-clickable"), s.DomEvent.on(this._container, "click", this._onMouseClick, this);
								for (var t = ["dblclick", "mousedown", "mouseover", "mouseout", "mousemove", "contextmenu"], e = 0; e < t.length; e++) s.DomEvent.on(this._container, t[e], this._fireMouseEvent, this)
							}
						},
						_onMouseClick: function(t) {
							this._map.dragging && this._map.dragging.moved() || this._fireMouseEvent(t)
						},
						_fireMouseEvent: function(t) {
							if (this.hasEventListeners(t.type)) {
								var e = this._map,
									i = e.mouseEventToContainerPoint(t),
									n = e.containerPointToLayerPoint(i),
									o = e.layerPointToLatLng(n);
								this.fire(t.type, {
									latlng: o,
									layerPoint: n,
									containerPoint: i,
									originalEvent: t
								}), "contextmenu" === t.type && s.DomEvent.preventDefault(t), "mousemove" !== t.type && s.DomEvent.stopPropagation(t)
							}
						}
					}), s.Map.include({
						_initPathRoot: function() {
							this._pathRoot || (this._pathRoot = s.Path.prototype._createElement("svg"), this._panes.overlayPane.appendChild(this._pathRoot), this.options.zoomAnimation && s.Browser.any3d ? (s.DomUtil.addClass(this._pathRoot, "leaflet-zoom-animated"), this.on({
								zoomanim: this._animatePathZoom,
								zoomend: this._endPathZoom
							})) : s.DomUtil.addClass(this._pathRoot, "leaflet-zoom-hide"), this.on("moveend", this._updateSvgViewport), this._updateSvgViewport())
						},
						_animatePathZoom: function(t) {
							var e = this.getZoomScale(t.zoom),
								i = this._getCenterOffset(t.center)._multiplyBy(-e)._add(this._pathViewport.min);
							this._pathRoot.style[s.DomUtil.TRANSFORM] = s.DomUtil.getTranslateString(i) + " scale(" + e + ") ", this._pathZooming = !0
						},
						_endPathZoom: function() {
							this._pathZooming = !1
						},
						_updateSvgViewport: function() {
							if (!this._pathZooming) {
								this._updatePathViewport();
								var t = this._pathViewport,
									e = t.min,
									i = t.max,
									n = i.x - e.x,
									o = i.y - e.y,
									r = this._pathRoot,
									a = this._panes.overlayPane;
								s.Browser.mobileWebkit && a.removeChild(r), s.DomUtil.setPosition(r, e), r.setAttribute("width", n), r.setAttribute("height", o), r.setAttribute("viewBox", [e.x, e.y, n, o].join(" ")), s.Browser.mobileWebkit && a.appendChild(r)
							}
						}
					}), s.Path.include({
						bindPopup: function(t, e) {
							return t instanceof s.Popup ? this._popup = t : ((!this._popup || e) && (this._popup = new s.Popup(e, this)), this._popup.setContent(t)), this._popupHandlersAdded || (this.on("click", this._openPopup, this).on("remove", this.closePopup, this), this._popupHandlersAdded = !0), this
						},
						unbindPopup: function() {
							return this._popup && (this._popup = null, this.off("click", this._openPopup).off("remove", this.closePopup), this._popupHandlersAdded = !1), this
						},
						openPopup: function(t) {
							return this._popup && (t = t || this._latlng || this._latlngs[Math.floor(this._latlngs.length / 2)], this._openPopup({
								latlng: t
							})), this
						},
						closePopup: function() {
							return this._popup && this._popup._close(), this
						},
						_openPopup: function(t) {
							this._popup.setLatLng(t.latlng), this._map.openPopup(this._popup)
						}
					}), s.Browser.vml = !s.Browser.svg && function() {
						try {
							var t = i.createElement("div");
							t.innerHTML = '<v:shape adj="1"/>';
							var e = t.firstChild;
							return e.style.behavior = "url(#default#VML)", e && "object" == typeof e.adj
						} catch (n) {
							return !1
						}
					}(), s.Path = s.Browser.svg || !s.Browser.vml ? s.Path : s.Path.extend({
						statics: {
							VML: !0,
							CLIP_PADDING: .02
						},
						_createElement: function() {
							try {
								return i.namespaces.add("lvml", "urn:schemas-microsoft-com:vml"),
									function(t) {
										return i.createElement("<lvml:" + t + ' class="lvml">')
									}
							} catch (t) {
								return function(t) {
									return i.createElement("<" + t + ' xmlns="urn:schemas-microsoft.com:vml" class="lvml">')
								}
							}
						}(),
						_initPath: function() {
							var t = this._container = this._createElement("shape");
							s.DomUtil.addClass(t, "leaflet-vml-shape" + (this.options.className ? " " + this.options.className : "")), this.options.clickable && s.DomUtil.addClass(t, "leaflet-clickable"), t.coordsize = "1 1", this._path = this._createElement("path"), t.appendChild(this._path), this._map._pathRoot.appendChild(t)
						},
						_initStyle: function() {
							this._updateStyle()
						},
						_updateStyle: function() {
							var t = this._stroke,
								e = this._fill,
								i = this.options,
								n = this._container;
							n.stroked = i.stroke, n.filled = i.fill, i.stroke ? (t || (t = this._stroke = this._createElement("stroke"), t.endcap = "round", n.appendChild(t)), t.weight = i.weight + "px", t.color = i.color, t.opacity = i.opacity, t.dashStyle = i.dashArray ? s.Util.isArray(i.dashArray) ? i.dashArray.join(" ") : i.dashArray.replace(/( *, *)/g, " ") : "", i.lineCap && (t.endcap = i.lineCap.replace("butt", "flat")), i.lineJoin && (t.joinstyle = i.lineJoin)) : t && (n.removeChild(t), this._stroke = null), i.fill ? (e || (e = this._fill = this._createElement("fill"), n.appendChild(e)), e.color = i.fillColor || i.color, e.opacity = i.fillOpacity) : e && (n.removeChild(e), this._fill = null)
						},
						_updatePath: function() {
							var t = this._container.style;
							t.display = "none", this._path.v = this.getPathString() + " ", t.display = ""
						}
					}), s.Map.include(s.Browser.svg || !s.Browser.vml ? {} : {
						_initPathRoot: function() {
							if (!this._pathRoot) {
								var t = this._pathRoot = i.createElement("div");
								t.className = "leaflet-vml-container", this._panes.overlayPane.appendChild(t), this.on("moveend", this._updatePathViewport), this._updatePathViewport()
							}
						}
					}), s.Browser.canvas = function() {
						return !!i.createElement("canvas").getContext
					}(), s.Path = s.Path.SVG && !t.L_PREFER_CANVAS || !s.Browser.canvas ? s.Path : s.Path.extend({
						statics: {
							CANVAS: !0,
							SVG: !1
						},
						redraw: function() {
							return this._map && (this.projectLatlngs(), this._requestUpdate()), this
						},
						setStyle: function(t) {
							return s.setOptions(this, t), this._map && (this._updateStyle(), this._requestUpdate()), this
						},
						onRemove: function(t) {
							t.off("viewreset", this.projectLatlngs, this).off("moveend", this._updatePath, this), this.options.clickable && (this._map.off("click", this._onClick, this), this._map.off("mousemove", this._onMouseMove, this)), this._requestUpdate(), this.fire("remove"), this._map = null
						},
						_requestUpdate: function() {
							this._map && !s.Path._updateRequest && (s.Path._updateRequest = s.Util.requestAnimFrame(this._fireMapMoveEnd, this._map))
						},
						_fireMapMoveEnd: function() {
							s.Path._updateRequest = null, this.fire("moveend")
						},
						_initElements: function() {
							this._map._initPathRoot(), this._ctx = this._map._canvasCtx
						},
						_updateStyle: function() {
							var t = this.options;
							t.stroke && (this._ctx.lineWidth = t.weight, this._ctx.strokeStyle = t.color), t.fill && (this._ctx.fillStyle = t.fillColor || t.color)
						},
						_drawPath: function() {
							var t, e, i, n, o, r;
							for (this._ctx.beginPath(), t = 0, i = this._parts.length; i > t; t++) {
								for (e = 0, n = this._parts[t].length; n > e; e++) o = this._parts[t][e], r = (0 === e ? "move" : "line") + "To", this._ctx[r](o.x, o.y);
								this instanceof s.Polygon && this._ctx.closePath()
							}
						},
						_checkIfEmpty: function() {
							return !this._parts.length
						},
						_updatePath: function() {
							if (!this._checkIfEmpty()) {
								var t = this._ctx,
									e = this.options;
								this._drawPath(), t.save(), this._updateStyle(), e.fill && (t.globalAlpha = e.fillOpacity, t.fill()), e.stroke && (t.globalAlpha = e.opacity, t.stroke()), t.restore()
							}
						},
						_initEvents: function() {
							this.options.clickable && (this._map.on("mousemove", this._onMouseMove, this), this._map.on("click", this._onClick, this))
						},
						_onClick: function(t) {
							this._containsPoint(t.layerPoint) && this.fire("click", t)
						},
						_onMouseMove: function(t) {
							this._map && !this._map._animatingZoom && (this._containsPoint(t.layerPoint) ? (this._ctx.canvas.style.cursor = "pointer", this._mouseInside = !0, this.fire("mouseover", t)) : this._mouseInside && (this._ctx.canvas.style.cursor = "", this._mouseInside = !1, this.fire("mouseout", t)))
						}
					}), s.Map.include(s.Path.SVG && !t.L_PREFER_CANVAS || !s.Browser.canvas ? {} : {
						_initPathRoot: function() {
							var t, e = this._pathRoot;
							e || (e = this._pathRoot = i.createElement("canvas"), e.style.position = "absolute", t = this._canvasCtx = e.getContext("2d"), t.lineCap = "round", t.lineJoin = "round", this._panes.overlayPane.appendChild(e), this.options.zoomAnimation && (this._pathRoot.className = "leaflet-zoom-animated", this.on("zoomanim", this._animatePathZoom), this.on("zoomend", this._endPathZoom)), this.on("moveend", this._updateCanvasViewport), this._updateCanvasViewport())
						},
						_updateCanvasViewport: function() {
							if (!this._pathZooming) {
								this._updatePathViewport();
								var t = this._pathViewport,
									e = t.min,
									i = t.max.subtract(e),
									n = this._pathRoot;
								s.DomUtil.setPosition(n, e), n.width = i.x, n.height = i.y, n.getContext("2d").translate(-e.x, -e.y)
							}
						}
					}), s.LineUtil = {
						simplify: function(t, e) {
							if (!e || !t.length) return t.slice();
							var i = e * e;
							return t = this._reducePoints(t, i), t = this._simplifyDP(t, i)
						},
						pointToSegmentDistance: function(t, e, i) {
							return Math.sqrt(this._sqClosestPointOnSegment(t, e, i, !0))
						},
						closestPointOnSegment: function(t, e, i) {
							return this._sqClosestPointOnSegment(t, e, i)
						},
						_simplifyDP: function(t, e) {
							var i = t.length,
								o = typeof Uint8Array != n + "" ? Uint8Array : Array,
								s = new o(i);
							s[0] = s[i - 1] = 1, this._simplifyDPStep(t, s, e, 0, i - 1);
							var r, a = [];
							for (r = 0; i > r; r++) s[r] && a.push(t[r]);
							return a
						},
						_simplifyDPStep: function(t, e, i, n, o) {
							var s, r, a, l = 0;
							for (r = n + 1; o - 1 >= r; r++) a = this._sqClosestPointOnSegment(t[r], t[n], t[o], !0), a > l && (s = r, l = a);
							l > i && (e[s] = 1, this._simplifyDPStep(t, e, i, n, s), this._simplifyDPStep(t, e, i, s, o))
						},
						_reducePoints: function(t, e) {
							for (var i = [t[0]], n = 1, o = 0, s = t.length; s > n; n++) this._sqDist(t[n], t[o]) > e && (i.push(t[n]), o = n);
							return s - 1 > o && i.push(t[s - 1]), i
						},
						clipSegment: function(t, e, i, n) {
							var o, s, r, a = n ? this._lastCode : this._getBitCode(t, i),
								l = this._getBitCode(e, i);
							for (this._lastCode = l;;) {
								if (!(a | l)) return [t, e];
								if (a & l) return !1;
								o = a || l, s = this._getEdgeIntersection(t, e, o, i), r = this._getBitCode(s, i), o === a ? (t = s, a = r) : (e = s, l = r)
							}
						},
						_getEdgeIntersection: function(t, e, i, n) {
							var o = e.x - t.x,
								r = e.y - t.y,
								a = n.min,
								l = n.max;
							return 8 & i ? new s.Point(t.x + o * (l.y - t.y) / r, l.y) : 4 & i ? new s.Point(t.x + o * (a.y - t.y) / r, a.y) : 2 & i ? new s.Point(l.x, t.y + r * (l.x - t.x) / o) : 1 & i ? new s.Point(a.x, t.y + r * (a.x - t.x) / o) : void 0
						},
						_getBitCode: function(t, e) {
							var i = 0;
							return t.x < e.min.x ? i |= 1 : t.x > e.max.x && (i |= 2), t.y < e.min.y ? i |= 4 : t.y > e.max.y && (i |= 8), i
						},
						_sqDist: function(t, e) {
							var i = e.x - t.x,
								n = e.y - t.y;
							return i * i + n * n
						},
						_sqClosestPointOnSegment: function(t, e, i, n) {
							var o, r = e.x,
								a = e.y,
								l = i.x - r,
								u = i.y - a,
								c = l * l + u * u;
							return c > 0 && (o = ((t.x - r) * l + (t.y - a) * u) / c, o > 1 ? (r = i.x, a = i.y) : o > 0 && (r += l * o, a += u * o)), l = t.x - r, u = t.y - a, n ? l * l + u * u : new s.Point(r, a)
						}
					}, s.Polyline = s.Path.extend({
						initialize: function(t, e) {
							s.Path.prototype.initialize.call(this, e), this._latlngs = this._convertLatLngs(t)
						},
						options: {
							smoothFactor: 1,
							noClip: !1
						},
						projectLatlngs: function() {
							this._originalPoints = [];
							for (var t = 0, e = this._latlngs.length; e > t; t++) this._originalPoints[t] = this._map.latLngToLayerPoint(this._latlngs[t])
						},
						getPathString: function() {
							for (var t = 0, e = this._parts.length, i = ""; e > t; t++) i += this._getPathPartStr(this._parts[t]);
							return i
						},
						getLatLngs: function() {
							return this._latlngs
						},
						setLatLngs: function(t) {
							return this._latlngs = this._convertLatLngs(t), this.redraw()
						},
						addLatLng: function(t) {
							return this._latlngs.push(s.latLng(t)), this.redraw()
						},
						spliceLatLngs: function() {
							var t = [].splice.apply(this._latlngs, arguments);
							return this._convertLatLngs(this._latlngs, !0), this.redraw(), t
						},
						closestLayerPoint: function(t) {
							for (var e, i, n = 1 / 0, o = this._parts, r = null, a = 0, l = o.length; l > a; a++)
								for (var u = o[a], c = 1, h = u.length; h > c; c++) {
									e = u[c - 1], i = u[c];
									var p = s.LineUtil._sqClosestPointOnSegment(t, e, i, !0);
									n > p && (n = p, r = s.LineUtil._sqClosestPointOnSegment(t, e, i))
								}
							return r && (r.distance = Math.sqrt(n)), r
						},
						getBounds: function() {
							return new s.LatLngBounds(this.getLatLngs())
						},
						_convertLatLngs: function(t, e) {
							var i, n, o = e ? t : [];
							for (i = 0, n = t.length; n > i; i++) {
								if (s.Util.isArray(t[i]) && "number" != typeof t[i][0]) return;
								o[i] = s.latLng(t[i])
							}
							return o
						},
						_initEvents: function() {
							s.Path.prototype._initEvents.call(this)
						},
						_getPathPartStr: function(t) {
							for (var e, i = s.Path.VML, n = 0, o = t.length, r = ""; o > n; n++) e = t[n], i && e._round(), r += (n ? "L" : "M") + e.x + " " + e.y;
							return r
						},
						_clipPoints: function() {
							var t, e, i, n = this._originalPoints,
								o = n.length;
							if (this.options.noClip) return void(this._parts = [n]);
							this._parts = [];
							var r = this._parts,
								a = this._map._pathViewport,
								l = s.LineUtil;
							for (t = 0, e = 0; o - 1 > t; t++) i = l.clipSegment(n[t], n[t + 1], a, t), i && (r[e] = r[e] || [], r[e].push(i[0]), (i[1] !== n[t + 1] || t === o - 2) && (r[e].push(i[1]), e++))
						},
						_simplifyPoints: function() {
							for (var t = this._parts, e = s.LineUtil, i = 0, n = t.length; n > i; i++) t[i] = e.simplify(t[i], this.options.smoothFactor)
						},
						_updatePath: function() {
							this._map && (this._clipPoints(), this._simplifyPoints(), s.Path.prototype._updatePath.call(this))
						}
					}), s.polyline = function(t, e) {
						return new s.Polyline(t, e)
					}, s.PolyUtil = {}, s.PolyUtil.clipPolygon = function(t, e) {
						var i, n, o, r, a, l, u, c, h, p = [1, 4, 2, 8],
							d = s.LineUtil;
						for (n = 0, u = t.length; u > n; n++) t[n]._code = d._getBitCode(t[n], e);
						for (r = 0; 4 > r; r++) {
							for (c = p[r], i = [], n = 0, u = t.length, o = u - 1; u > n; o = n++) a = t[n], l = t[o], a._code & c ? l._code & c || (h = d._getEdgeIntersection(l, a, c, e), h._code = d._getBitCode(h, e), i.push(h)) : (l._code & c && (h = d._getEdgeIntersection(l, a, c, e), h._code = d._getBitCode(h, e), i.push(h)), i.push(a));
							t = i
						}
						return t
					}, s.Polygon = s.Polyline.extend({
						options: {
							fill: !0
						},
						initialize: function(t, e) {
							s.Polyline.prototype.initialize.call(this, t, e), this._initWithHoles(t)
						},
						_initWithHoles: function(t) {
							var e, i, n;
							if (t && s.Util.isArray(t[0]) && "number" != typeof t[0][0])
								for (this._latlngs = this._convertLatLngs(t[0]), this._holes = t.slice(1), e = 0, i = this._holes.length; i > e; e++) n = this._holes[e] = this._convertLatLngs(this._holes[e]), n[0].equals(n[n.length - 1]) && n.pop();
							t = this._latlngs, t.length >= 2 && t[0].equals(t[t.length - 1]) && t.pop()
						},
						projectLatlngs: function() {
							if (s.Polyline.prototype.projectLatlngs.call(this), this._holePoints = [], this._holes) {
								var t, e, i, n;
								for (t = 0, i = this._holes.length; i > t; t++)
									for (this._holePoints[t] = [], e = 0, n = this._holes[t].length; n > e; e++) this._holePoints[t][e] = this._map.latLngToLayerPoint(this._holes[t][e])
							}
						},
						setLatLngs: function(t) {
							return t && s.Util.isArray(t[0]) && "number" != typeof t[0][0] ? (this._initWithHoles(t), this.redraw()) : s.Polyline.prototype.setLatLngs.call(this, t)
						},
						_clipPoints: function() {
							var t = this._originalPoints,
								e = [];
							if (this._parts = [t].concat(this._holePoints), !this.options.noClip) {
								for (var i = 0, n = this._parts.length; n > i; i++) {
									var o = s.PolyUtil.clipPolygon(this._parts[i], this._map._pathViewport);
									o.length && e.push(o)
								}
								this._parts = e
							}
						},
						_getPathPartStr: function(t) {
							var e = s.Polyline.prototype._getPathPartStr.call(this, t);
							return e + (s.Browser.svg ? "z" : "x")
						}
					}), s.polygon = function(t, e) {
						return new s.Polygon(t, e)
					},
					function() {
						function t(t) {
							return s.FeatureGroup.extend({
								initialize: function(t, e) {
									this._layers = {}, this._options = e, this.setLatLngs(t)
								},
								setLatLngs: function(e) {
									var i = 0,
										n = e.length;
									for (this.eachLayer(function(t) {
										n > i ? t.setLatLngs(e[i++]) : this.removeLayer(t)
									}, this); n > i;) this.addLayer(new t(e[i++], this._options));
									return this
								},
								getLatLngs: function() {
									var t = [];
									return this.eachLayer(function(e) {
										t.push(e.getLatLngs())
									}), t
								}
							})
						}
						s.MultiPolyline = t(s.Polyline), s.MultiPolygon = t(s.Polygon), s.multiPolyline = function(t, e) {
							return new s.MultiPolyline(t, e)
						}, s.multiPolygon = function(t, e) {
							return new s.MultiPolygon(t, e)
						}
					}(), s.Rectangle = s.Polygon.extend({
						initialize: function(t, e) {
							s.Polygon.prototype.initialize.call(this, this._boundsToLatLngs(t), e)
						},
						setBounds: function(t) {
							this.setLatLngs(this._boundsToLatLngs(t))
						},
						_boundsToLatLngs: function(t) {
							return t = s.latLngBounds(t), [t.getSouthWest(), t.getNorthWest(), t.getNorthEast(), t.getSouthEast()]
						}
					}), s.rectangle = function(t, e) {
						return new s.Rectangle(t, e)
					}, s.Circle = s.Path.extend({
						initialize: function(t, e, i) {
							s.Path.prototype.initialize.call(this, i), this._latlng = s.latLng(t), this._mRadius = e
						},
						options: {
							fill: !0
						},
						setLatLng: function(t) {
							return this._latlng = s.latLng(t), this.redraw()
						},
						setRadius: function(t) {
							return this._mRadius = t, this.redraw()
						},
						projectLatlngs: function() {
							var t = this._getLngRadius(),
								e = this._latlng,
								i = this._map.latLngToLayerPoint([e.lat, e.lng - t]);
							this._point = this._map.latLngToLayerPoint(e), this._radius = Math.max(this._point.x - i.x, 1)
						},
						getBounds: function() {
							var t = this._getLngRadius(),
								e = this._mRadius / 40075017 * 360,
								i = this._latlng;
							return new s.LatLngBounds([i.lat - e, i.lng - t], [i.lat + e, i.lng + t])
						},
						getLatLng: function() {
							return this._latlng
						},
						getPathString: function() {
							var t = this._point,
								e = this._radius;
							return this._checkIfEmpty() ? "" : s.Browser.svg ? "M" + t.x + "," + (t.y - e) + "A" + e + "," + e + ",0,1,1," + (t.x - .1) + "," + (t.y - e) + " z" : (t._round(), e = Math.round(e), "AL " + t.x + "," + t.y + " " + e + "," + e + " 0,23592600")
						},
						getRadius: function() {
							return this._mRadius
						},
						_getLatRadius: function() {
							return this._mRadius / 40075017 * 360
						},
						_getLngRadius: function() {
							return this._getLatRadius() / Math.cos(s.LatLng.DEG_TO_RAD * this._latlng.lat)
						},
						_checkIfEmpty: function() {
							if (!this._map) return !1;
							var t = this._map._pathViewport,
								e = this._radius,
								i = this._point;
							return i.x - e > t.max.x || i.y - e > t.max.y || i.x + e < t.min.x || i.y + e < t.min.y
						}
					}), s.circle = function(t, e, i) {
						return new s.Circle(t, e, i)
					}, s.CircleMarker = s.Circle.extend({
						options: {
							radius: 10,
							weight: 2
						},
						initialize: function(t, e) {
							s.Circle.prototype.initialize.call(this, t, null, e), this._radius = this.options.radius
						},
						projectLatlngs: function() {
							this._point = this._map.latLngToLayerPoint(this._latlng)
						},
						_updateStyle: function() {
							s.Circle.prototype._updateStyle.call(this), this.setRadius(this.options.radius)
						},
						setLatLng: function(t) {
							return s.Circle.prototype.setLatLng.call(this, t), this._popup && this._popup._isOpen && this._popup.setLatLng(t), this
						},
						setRadius: function(t) {
							return this.options.radius = this._radius = t, this.redraw()
						},
						getRadius: function() {
							return this._radius
						}
					}), s.circleMarker = function(t, e) {
						return new s.CircleMarker(t, e)
					}, s.Polyline.include(s.Path.CANVAS ? {
						_containsPoint: function(t, e) {
							var i, n, o, r, a, l, u, c = this.options.weight / 2;
							for (s.Browser.touch && (c += 10), i = 0, r = this._parts.length; r > i; i++)
								for (u = this._parts[i], n = 0, a = u.length, o = a - 1; a > n; o = n++)
									if ((e || 0 !== n) && (l = s.LineUtil.pointToSegmentDistance(t, u[o], u[n]), c >= l)) return !0;
							return !1
						}
					} : {}), s.Polygon.include(s.Path.CANVAS ? {
						_containsPoint: function(t) {
							var e, i, n, o, r, a, l, u, c = !1;
							if (s.Polyline.prototype._containsPoint.call(this, t, !0)) return !0;
							for (o = 0, l = this._parts.length; l > o; o++)
								for (e = this._parts[o], r = 0, u = e.length, a = u - 1; u > r; a = r++) i = e[r], n = e[a], i.y > t.y != n.y > t.y && t.x < (n.x - i.x) * (t.y - i.y) / (n.y - i.y) + i.x && (c = !c);
							return c
						}
					} : {}), s.Circle.include(s.Path.CANVAS ? {
						_drawPath: function() {
							var t = this._point;
							this._ctx.beginPath(), this._ctx.arc(t.x, t.y, this._radius, 0, 2 * Math.PI, !1)
						},
						_containsPoint: function(t) {
							var e = this._point,
								i = this.options.stroke ? this.options.weight / 2 : 0;
							return t.distanceTo(e) <= this._radius + i
						}
					} : {}), s.CircleMarker.include(s.Path.CANVAS ? {
						_updateStyle: function() {
							s.Path.prototype._updateStyle.call(this)
						}
					} : {}), s.GeoJSON = s.FeatureGroup.extend({
						initialize: function(t, e) {
							s.setOptions(this, e), this._layers = {}, t && this.addData(t)
						},
						addData: function(t) {
							var e, i, n, o = s.Util.isArray(t) ? t : t.features;
							if (o) {
								for (e = 0, i = o.length; i > e; e++) n = o[e], (n.geometries || n.geometry || n.features || n.coordinates) && this.addData(o[e]);
								return this
							}
							var r = this.options;
							if (!r.filter || r.filter(t)) {
								var a = s.GeoJSON.geometryToLayer(t, r.pointToLayer, r.coordsToLatLng, r);
								return a.feature = s.GeoJSON.asFeature(t), a.defaultOptions = a.options, this.resetStyle(a), r.onEachFeature && r.onEachFeature(t, a), this.addLayer(a)
							}
						},
						resetStyle: function(t) {
							var e = this.options.style;
							e && (s.Util.extend(t.options, t.defaultOptions), this._setLayerStyle(t, e))
						},
						setStyle: function(t) {
							this.eachLayer(function(e) {
								this._setLayerStyle(e, t)
							}, this)
						},
						_setLayerStyle: function(t, e) {
							"function" == typeof e && (e = e(t.feature)), t.setStyle && t.setStyle(e)
						}
					}), s.extend(s.GeoJSON, {
						geometryToLayer: function(t, e, i, n) {
							var o, r, a, l, u = "Feature" === t.type ? t.geometry : t,
								c = u.coordinates,
								h = [];
							switch (i = i || this.coordsToLatLng, u.type) {
								case "Point":
									return o = i(c), e ? e(t, o) : new s.Marker(o);
								case "MultiPoint":
									for (a = 0, l = c.length; l > a; a++) o = i(c[a]), h.push(e ? e(t, o) : new s.Marker(o));
									return new s.FeatureGroup(h);
								case "LineString":
									return r = this.coordsToLatLngs(c, 0, i), new s.Polyline(r, n);
								case "Polygon":
									if (2 === c.length && !c[1].length) throw new Error("Invalid GeoJSON object.");
									return r = this.coordsToLatLngs(c, 1, i), new s.Polygon(r, n);
								case "MultiLineString":
									return r = this.coordsToLatLngs(c, 1, i), new s.MultiPolyline(r, n);
								case "MultiPolygon":
									return r = this.coordsToLatLngs(c, 2, i), new s.MultiPolygon(r, n);
								case "GeometryCollection":
									for (a = 0, l = u.geometries.length; l > a; a++) h.push(this.geometryToLayer({
										geometry: u.geometries[a],
										type: "Feature",
										properties: t.properties
									}, e, i, n));
									return new s.FeatureGroup(h);
								default:
									throw new Error("Invalid GeoJSON object.")
							}
						},
						coordsToLatLng: function(t) {
							return new s.LatLng(t[1], t[0], t[2])
						},
						coordsToLatLngs: function(t, e, i) {
							var n, o, s, r = [];
							for (o = 0, s = t.length; s > o; o++) n = e ? this.coordsToLatLngs(t[o], e - 1, i) : (i || this.coordsToLatLng)(t[o]), r.push(n);
							return r
						},
						latLngToCoords: function(t) {
							var e = [t.lng, t.lat];
							return t.alt !== n && e.push(t.alt), e
						},
						latLngsToCoords: function(t) {
							for (var e = [], i = 0, n = t.length; n > i; i++) e.push(s.GeoJSON.latLngToCoords(t[i]));
							return e
						},
						getFeature: function(t, e) {
							return t.feature ? s.extend({}, t.feature, {
								geometry: e
							}) : s.GeoJSON.asFeature(e)
						},
						asFeature: function(t) {
							return "Feature" === t.type ? t : {
								type: "Feature",
								properties: {},
								geometry: t
							}
						}
					});
				var a = {
					toGeoJSON: function() {
						return s.GeoJSON.getFeature(this, {
							type: "Point",
							coordinates: s.GeoJSON.latLngToCoords(this.getLatLng())
						})
					}
				};
				s.Marker.include(a), s.Circle.include(a), s.CircleMarker.include(a), s.Polyline.include({
						toGeoJSON: function() {
							return s.GeoJSON.getFeature(this, {
								type: "LineString",
								coordinates: s.GeoJSON.latLngsToCoords(this.getLatLngs())
							})
						}
					}), s.Polygon.include({
						toGeoJSON: function() {
							var t, e, i, n = [s.GeoJSON.latLngsToCoords(this.getLatLngs())];
							if (n[0].push(n[0][0]), this._holes)
								for (t = 0, e = this._holes.length; e > t; t++) i = s.GeoJSON.latLngsToCoords(this._holes[t]), i.push(i[0]), n.push(i);
							return s.GeoJSON.getFeature(this, {
								type: "Polygon",
								coordinates: n
							})
						}
					}),
					function() {
						function t(t) {
							return function() {
								var e = [];
								return this.eachLayer(function(t) {
									e.push(t.toGeoJSON().geometry.coordinates)
								}), s.GeoJSON.getFeature(this, {
									type: t,
									coordinates: e
								})
							}
						}
						s.MultiPolyline.include({
							toGeoJSON: t("MultiLineString")
						}), s.MultiPolygon.include({
							toGeoJSON: t("MultiPolygon")
						}), s.LayerGroup.include({
							toGeoJSON: function() {
								var e, i = this.feature && this.feature.geometry,
									n = [];
								if (i && "MultiPoint" === i.type) return t("MultiPoint").call(this);
								var o = i && "GeometryCollection" === i.type;
								return this.eachLayer(function(t) {
									t.toGeoJSON && (e = t.toGeoJSON(), n.push(o ? e.geometry : s.GeoJSON.asFeature(e)))
								}), o ? s.GeoJSON.getFeature(this, {
									geometries: n,
									type: "GeometryCollection"
								}) : {
									type: "FeatureCollection",
									features: n
								}
							}
						})
					}(), s.geoJson = function(t, e) {
						return new s.GeoJSON(t, e)
					}, s.DomEvent = {
						addListener: function(t, e, i, n) {
							var o, r, a, l = s.stamp(i),
								u = "_leaflet_" + e + l;
							return t[u] ? this : (o = function(e) {
								return i.call(n || t, e || s.DomEvent._getEvent())
							}, s.Browser.pointer && 0 === e.indexOf("touch") ? this.addPointerListener(t, e, o, l) : (s.Browser.touch && "dblclick" === e && this.addDoubleTapListener && this.addDoubleTapListener(t, o, l), "addEventListener" in t ? "mousewheel" === e ? (t.addEventListener("DOMMouseScroll", o, !1), t.addEventListener(e, o, !1)) : "mouseenter" === e || "mouseleave" === e ? (r = o, a = "mouseenter" === e ? "mouseover" : "mouseout", o = function(e) {
								return s.DomEvent._checkMouse(t, e) ? r(e) : void 0
							}, t.addEventListener(a, o, !1)) : "click" === e && s.Browser.android ? (r = o, o = function(t) {
								return s.DomEvent._filterClick(t, r)
							}, t.addEventListener(e, o, !1)) : t.addEventListener(e, o, !1) : "attachEvent" in t && t.attachEvent("on" + e, o), t[u] = o, this))
						},
						removeListener: function(t, e, i) {
							var n = s.stamp(i),
								o = "_leaflet_" + e + n,
								r = t[o];
							return r ? (s.Browser.pointer && 0 === e.indexOf("touch") ? this.removePointerListener(t, e, n) : s.Browser.touch && "dblclick" === e && this.removeDoubleTapListener ? this.removeDoubleTapListener(t, n) : "removeEventListener" in t ? "mousewheel" === e ? (t.removeEventListener("DOMMouseScroll", r, !1), t.removeEventListener(e, r, !1)) : "mouseenter" === e || "mouseleave" === e ? t.removeEventListener("mouseenter" === e ? "mouseover" : "mouseout", r, !1) : t.removeEventListener(e, r, !1) : "detachEvent" in t && t.detachEvent("on" + e, r), t[o] = null, this) : this
						},
						stopPropagation: function(t) {
							return t.stopPropagation ? t.stopPropagation() : t.cancelBubble = !0, s.DomEvent._skipped(t), this
						},
						disableScrollPropagation: function(t) {
							var e = s.DomEvent.stopPropagation;
							return s.DomEvent.on(t, "mousewheel", e).on(t, "MozMousePixelScroll", e)
						},
						disableClickPropagation: function(t) {
							for (var e = s.DomEvent.stopPropagation, i = s.Draggable.START.length - 1; i >= 0; i--) s.DomEvent.on(t, s.Draggable.START[i], e);
							return s.DomEvent.on(t, "click", s.DomEvent._fakeStop).on(t, "dblclick", e)
						},
						preventDefault: function(t) {
							return t.preventDefault ? t.preventDefault() : t.returnValue = !1, this
						},
						stop: function(t) {
							return s.DomEvent.preventDefault(t).stopPropagation(t)
						},
						getMousePosition: function(t, e) {
							if (!e) return new s.Point(t.clientX, t.clientY);
							var i = e.getBoundingClientRect();
							return new s.Point(t.clientX - i.left - e.clientLeft, t.clientY - i.top - e.clientTop)
						},
						getWheelDelta: function(t) {
							var e = 0;
							return t.wheelDelta && (e = t.wheelDelta / 120), t.detail && (e = -t.detail / 3), e
						},
						_skipEvents: {},
						_fakeStop: function(t) {
							s.DomEvent._skipEvents[t.type] = !0
						},
						_skipped: function(t) {
							var e = this._skipEvents[t.type];
							return this._skipEvents[t.type] = !1, e
						},
						_checkMouse: function(t, e) {
							var i = e.relatedTarget;
							if (!i) return !0;
							try {
								for (; i && i !== t;) i = i.parentNode
							} catch (n) {
								return !1
							}
							return i !== t
						},
						_getEvent: function() {
							var e = t.event;
							if (!e)
								for (var i = arguments.callee.caller; i && (e = i.arguments[0], !e || t.Event !== e.constructor);) i = i.caller;
							return e
						},
						_filterClick: function(t, e) {
							var i = t.timeStamp || t.originalEvent.timeStamp,
								n = s.DomEvent._lastClick && i - s.DomEvent._lastClick;
							return n && n > 100 && 500 > n || t.target._simulatedClick && !t._simulated ? void s.DomEvent.stop(t) : (s.DomEvent._lastClick = i, e(t))
						}
					}, s.DomEvent.on = s.DomEvent.addListener, s.DomEvent.off = s.DomEvent.removeListener, s.Draggable = s.Class.extend({
						includes: s.Mixin.Events,
						statics: {
							START: s.Browser.touch ? ["touchstart", "mousedown"] : ["mousedown"],
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
						initialize: function(t, e) {
							this._element = t, this._dragStartTarget = e || t
						},
						enable: function() {
							if (!this._enabled) {
								for (var t = s.Draggable.START.length - 1; t >= 0; t--) s.DomEvent.on(this._dragStartTarget, s.Draggable.START[t], this._onDown, this);
								this._enabled = !0
							}
						},
						disable: function() {
							if (this._enabled) {
								for (var t = s.Draggable.START.length - 1; t >= 0; t--) s.DomEvent.off(this._dragStartTarget, s.Draggable.START[t], this._onDown, this);
								this._enabled = !1, this._moved = !1
							}
						},
						_onDown: function(t) {
							if (this._moved = !1, !(t.shiftKey || 1 !== t.which && 1 !== t.button && !t.touches || (s.DomEvent.stopPropagation(t), s.Draggable._disabled || (s.DomUtil.disableImageDrag(), s.DomUtil.disableTextSelection(), this._moving)))) {
								var e = t.touches ? t.touches[0] : t;
								this._startPoint = new s.Point(e.clientX, e.clientY), this._startPos = this._newPos = s.DomUtil.getPosition(this._element), s.DomEvent.on(i, s.Draggable.MOVE[t.type], this._onMove, this).on(i, s.Draggable.END[t.type], this._onUp, this)
							}
						},
						_onMove: function(t) {
							if (t.touches && t.touches.length > 1) return void(this._moved = !0);
							var e = t.touches && 1 === t.touches.length ? t.touches[0] : t,
								n = new s.Point(e.clientX, e.clientY),
								o = n.subtract(this._startPoint);
							(o.x || o.y) && (s.Browser.touch && Math.abs(o.x) + Math.abs(o.y) < 3 || (s.DomEvent.preventDefault(t), this._moved || (this.fire("dragstart"), this._moved = !0, this._startPos = s.DomUtil.getPosition(this._element).subtract(o), s.DomUtil.addClass(i.body, "leaflet-dragging"), this._lastTarget = t.target || t.srcElement, s.DomUtil.addClass(this._lastTarget, "leaflet-drag-target")), this._newPos = this._startPos.add(o), this._moving = !0, s.Util.cancelAnimFrame(this._animRequest), this._animRequest = s.Util.requestAnimFrame(this._updatePosition, this, !0, this._dragStartTarget)))
						},
						_updatePosition: function() {
							this.fire("predrag"), s.DomUtil.setPosition(this._element, this._newPos), this.fire("drag")
						},
						_onUp: function() {
							s.DomUtil.removeClass(i.body, "leaflet-dragging"), this._lastTarget && (s.DomUtil.removeClass(this._lastTarget, "leaflet-drag-target"), this._lastTarget = null);
							for (var t in s.Draggable.MOVE) s.DomEvent.off(i, s.Draggable.MOVE[t], this._onMove).off(i, s.Draggable.END[t], this._onUp);
							s.DomUtil.enableImageDrag(), s.DomUtil.enableTextSelection(), this._moved && this._moving && (s.Util.cancelAnimFrame(this._animRequest), this.fire("dragend", {
								distance: this._newPos.distanceTo(this._startPos)
							})), this._moving = !1
						}
					}), s.Handler = s.Class.extend({
						initialize: function(t) {
							this._map = t
						},
						enable: function() {
							this._enabled || (this._enabled = !0, this.addHooks())
						},
						disable: function() {
							this._enabled && (this._enabled = !1, this.removeHooks())
						},
						enabled: function() {
							return !!this._enabled
						}
					}), s.Map.mergeOptions({
						dragging: !0,
						inertia: !s.Browser.android23,
						inertiaDeceleration: 3400,
						inertiaMaxSpeed: 1 / 0,
						inertiaThreshold: s.Browser.touch ? 32 : 18,
						easeLinearity: .25,
						worldCopyJump: !1
					}), s.Map.Drag = s.Handler.extend({
						addHooks: function() {
							if (!this._draggable) {
								var t = this._map;
								this._draggable = new s.Draggable(t._mapPane, t._container), this._draggable.on({
									dragstart: this._onDragStart,
									drag: this._onDrag,
									dragend: this._onDragEnd
								}, this), t.options.worldCopyJump && (this._draggable.on("predrag", this._onPreDrag, this), t.on("viewreset", this._onViewReset, this), t.whenReady(this._onViewReset, this))
							}
							this._draggable.enable()
						},
						removeHooks: function() {
							this._draggable.disable()
						},
						moved: function() {
							return this._draggable && this._draggable._moved
						},
						_onDragStart: function() {
							var t = this._map;
							t._panAnim && t._panAnim.stop(), t.fire("movestart").fire("dragstart"), t.options.inertia && (this._positions = [], this._times = [])
						},
						_onDrag: function() {
							if (this._map.options.inertia) {
								var t = this._lastTime = +new Date,
									e = this._lastPos = this._draggable._newPos;
								this._positions.push(e), this._times.push(t), t - this._times[0] > 200 && (this._positions.shift(), this._times.shift())
							}
							this._map.fire("move").fire("drag")
						},
						_onViewReset: function() {
							var t = this._map.getSize()._divideBy(2),
								e = this._map.latLngToLayerPoint([0, 0]);
							this._initialWorldOffset = e.subtract(t).x, this._worldWidth = this._map.project([0, 180]).x
						},
						_onPreDrag: function() {
							var t = this._worldWidth,
								e = Math.round(t / 2),
								i = this._initialWorldOffset,
								n = this._draggable._newPos.x,
								o = (n - e + i) % t + e - i,
								s = (n + e + i) % t - e - i,
								r = Math.abs(o + i) < Math.abs(s + i) ? o : s;
							this._draggable._newPos.x = r
						},
						_onDragEnd: function(t) {
							var e = this._map,
								i = e.options,
								n = +new Date - this._lastTime,
								o = !i.inertia || n > i.inertiaThreshold || !this._positions[0];
							if (e.fire("dragend", t), o) e.fire("moveend");
							else {
								var r = this._lastPos.subtract(this._positions[0]),
									a = (this._lastTime + n - this._times[0]) / 1e3,
									l = i.easeLinearity,
									u = r.multiplyBy(l / a),
									c = u.distanceTo([0, 0]),
									h = Math.min(i.inertiaMaxSpeed, c),
									p = u.multiplyBy(h / c),
									d = h / (i.inertiaDeceleration * l),
									f = p.multiplyBy(-d / 2).round();
								f.x && f.y ? (f = e._limitOffset(f, e.options.maxBounds), s.Util.requestAnimFrame(function() {
									e.panBy(f, {
										duration: d,
										easeLinearity: l,
										noMoveStart: !0
									})
								})) : e.fire("moveend")
							}
						}
					}), s.Map.addInitHook("addHandler", "dragging", s.Map.Drag), s.Map.mergeOptions({
						doubleClickZoom: !0
					}), s.Map.DoubleClickZoom = s.Handler.extend({
						addHooks: function() {
							this._map.on("dblclick", this._onDoubleClick, this)
						},
						removeHooks: function() {
							this._map.off("dblclick", this._onDoubleClick, this)
						},
						_onDoubleClick: function(t) {
							var e = this._map,
								i = e.getZoom() + (t.originalEvent.shiftKey ? -1 : 1);
							"center" === e.options.doubleClickZoom ? e.setZoom(i) : e.setZoomAround(t.containerPoint, i)
						}
					}), s.Map.addInitHook("addHandler", "doubleClickZoom", s.Map.DoubleClickZoom), s.Map.mergeOptions({
						scrollWheelZoom: !0
					}), s.Map.ScrollWheelZoom = s.Handler.extend({
						addHooks: function() {
							s.DomEvent.on(this._map._container, "mousewheel", this._onWheelScroll, this), s.DomEvent.on(this._map._container, "MozMousePixelScroll", s.DomEvent.preventDefault), this._delta = 0
						},
						removeHooks: function() {
							s.DomEvent.off(this._map._container, "mousewheel", this._onWheelScroll), s.DomEvent.off(this._map._container, "MozMousePixelScroll", s.DomEvent.preventDefault)
						},
						_onWheelScroll: function(t) {
							var e = s.DomEvent.getWheelDelta(t);
							this._delta += e, this._lastMousePos = this._map.mouseEventToContainerPoint(t), this._startTime || (this._startTime = +new Date);
							var i = Math.max(40 - (+new Date - this._startTime), 0);
							clearTimeout(this._timer), this._timer = setTimeout(s.bind(this._performZoom, this), i), s.DomEvent.preventDefault(t), s.DomEvent.stopPropagation(t)
						},
						_performZoom: function() {
							var t = this._map,
								e = this._delta,
								i = t.getZoom();
							e = e > 0 ? Math.ceil(e) : Math.floor(e), e = Math.max(Math.min(e, 4), -4), e = t._limitZoom(i + e) - i, this._delta = 0, this._startTime = null, e && ("center" === t.options.scrollWheelZoom ? t.setZoom(i + e) : t.setZoomAround(this._lastMousePos, i + e))
						}
					}), s.Map.addInitHook("addHandler", "scrollWheelZoom", s.Map.ScrollWheelZoom), s.extend(s.DomEvent, {
						_touchstart: s.Browser.msPointer ? "MSPointerDown" : s.Browser.pointer ? "pointerdown" : "touchstart",
						_touchend: s.Browser.msPointer ? "MSPointerUp" : s.Browser.pointer ? "pointerup" : "touchend",
						addDoubleTapListener: function(t, e, n) {
							function o(t) {
								var e;
								if (s.Browser.pointer ? (f.push(t.pointerId), e = f.length) : e = t.touches.length, !(e > 1)) {
									var i = Date.now(),
										n = i - (a || i);
									l = t.touches ? t.touches[0] : t, u = n > 0 && c >= n, a = i
								}
							}

							function r(t) {
								if (s.Browser.pointer) {
									var i = f.indexOf(t.pointerId);
									if (-1 === i) return;
									f.splice(i, 1)
								}
								if (u) {
									if (s.Browser.pointer) {
										var n, o = {};
										for (var r in l) n = l[r], o[r] = "function" == typeof n ? n.bind(l) : n;
										l = o
									}
									l.type = "dblclick", e(l), a = null
								}
							}
							var a, l, u = !1,
								c = 250,
								h = "_leaflet_",
								p = this._touchstart,
								d = this._touchend,
								f = [];
							t[h + p + n] = o, t[h + d + n] = r;
							var m = s.Browser.pointer ? i.documentElement : t;
							return t.addEventListener(p, o, !1), m.addEventListener(d, r, !1), s.Browser.pointer && m.addEventListener(s.DomEvent.POINTER_CANCEL, r, !1), this
						},
						removeDoubleTapListener: function(t, e) {
							var n = "_leaflet_";
							return t.removeEventListener(this._touchstart, t[n + this._touchstart + e], !1), (s.Browser.pointer ? i.documentElement : t).removeEventListener(this._touchend, t[n + this._touchend + e], !1), s.Browser.pointer && i.documentElement.removeEventListener(s.DomEvent.POINTER_CANCEL, t[n + this._touchend + e], !1), this
						}
					}), s.extend(s.DomEvent, {
						POINTER_DOWN: s.Browser.msPointer ? "MSPointerDown" : "pointerdown",
						POINTER_MOVE: s.Browser.msPointer ? "MSPointerMove" : "pointermove",
						POINTER_UP: s.Browser.msPointer ? "MSPointerUp" : "pointerup",
						POINTER_CANCEL: s.Browser.msPointer ? "MSPointerCancel" : "pointercancel",
						_pointers: [],
						_pointerDocumentListener: !1,
						addPointerListener: function(t, e, i, n) {
							switch (e) {
								case "touchstart":
									return this.addPointerListenerStart(t, e, i, n);
								case "touchend":
									return this.addPointerListenerEnd(t, e, i, n);
								case "touchmove":
									return this.addPointerListenerMove(t, e, i, n);
								default:
									throw "Unknown touch event type"
							}
						},
						addPointerListenerStart: function(t, e, n, o) {
							var r = "_leaflet_",
								a = this._pointers,
								l = function(t) {
									s.DomEvent.preventDefault(t);
									for (var e = !1, i = 0; i < a.length; i++)
										if (a[i].pointerId === t.pointerId) {
											e = !0;
											break
										}
									e || a.push(t), t.touches = a.slice(), t.changedTouches = [t], n(t)
								};
							if (t[r + "touchstart" + o] = l, t.addEventListener(this.POINTER_DOWN, l, !1), !this._pointerDocumentListener) {
								var u = function(t) {
									for (var e = 0; e < a.length; e++)
										if (a[e].pointerId === t.pointerId) {
											a.splice(e, 1);
											break
										}
								};
								i.documentElement.addEventListener(this.POINTER_UP, u, !1), i.documentElement.addEventListener(this.POINTER_CANCEL, u, !1), this._pointerDocumentListener = !0
							}
							return this
						},
						addPointerListenerMove: function(t, e, i, n) {
							function o(t) {
								if (t.pointerType !== t.MSPOINTER_TYPE_MOUSE && "mouse" !== t.pointerType || 0 !== t.buttons) {
									for (var e = 0; e < r.length; e++)
										if (r[e].pointerId === t.pointerId) {
											r[e] = t;
											break
										}
									t.touches = r.slice(), t.changedTouches = [t], i(t)
								}
							}
							var s = "_leaflet_",
								r = this._pointers;
							return t[s + "touchmove" + n] = o, t.addEventListener(this.POINTER_MOVE, o, !1), this
						},
						addPointerListenerEnd: function(t, e, i, n) {
							var o = "_leaflet_",
								s = this._pointers,
								r = function(t) {
									for (var e = 0; e < s.length; e++)
										if (s[e].pointerId === t.pointerId) {
											s.splice(e, 1);
											break
										}
									t.touches = s.slice(), t.changedTouches = [t], i(t)
								};
							return t[o + "touchend" + n] = r, t.addEventListener(this.POINTER_UP, r, !1), t.addEventListener(this.POINTER_CANCEL, r, !1), this
						},
						removePointerListener: function(t, e, i) {
							var n = "_leaflet_",
								o = t[n + e + i];
							switch (e) {
								case "touchstart":
									t.removeEventListener(this.POINTER_DOWN, o, !1);
									break;
								case "touchmove":
									t.removeEventListener(this.POINTER_MOVE, o, !1);
									break;
								case "touchend":
									t.removeEventListener(this.POINTER_UP, o, !1), t.removeEventListener(this.POINTER_CANCEL, o, !1)
							}
							return this
						}
					}), s.Map.mergeOptions({
						touchZoom: s.Browser.touch && !s.Browser.android23,
						bounceAtZoomLimits: !0
					}), s.Map.TouchZoom = s.Handler.extend({
						addHooks: function() {
							s.DomEvent.on(this._map._container, "touchstart", this._onTouchStart, this)
						},
						removeHooks: function() {
							s.DomEvent.off(this._map._container, "touchstart", this._onTouchStart, this)
						},
						_onTouchStart: function(t) {
							var e = this._map;
							if (t.touches && 2 === t.touches.length && !e._animatingZoom && !this._zooming) {
								var n = e.mouseEventToLayerPoint(t.touches[0]),
									o = e.mouseEventToLayerPoint(t.touches[1]),
									r = e._getCenterLayerPoint();
								this._startCenter = n.add(o)._divideBy(2), this._startDist = n.distanceTo(o), this._moved = !1, this._zooming = !0, this._centerOffset = r.subtract(this._startCenter), e._panAnim && e._panAnim.stop(), s.DomEvent.on(i, "touchmove", this._onTouchMove, this).on(i, "touchend", this._onTouchEnd, this), s.DomEvent.preventDefault(t)
							}
						},
						_onTouchMove: function(t) {
							var e = this._map;
							if (t.touches && 2 === t.touches.length && this._zooming) {
								var i = e.mouseEventToLayerPoint(t.touches[0]),
									n = e.mouseEventToLayerPoint(t.touches[1]);
								this._scale = i.distanceTo(n) / this._startDist, this._delta = i._add(n)._divideBy(2)._subtract(this._startCenter), 1 !== this._scale && (e.options.bounceAtZoomLimits || !(e.getZoom() === e.getMinZoom() && this._scale < 1 || e.getZoom() === e.getMaxZoom() && this._scale > 1)) && (this._moved || (s.DomUtil.addClass(e._mapPane, "leaflet-touching"), e.fire("movestart").fire("zoomstart"), this._moved = !0), s.Util.cancelAnimFrame(this._animRequest), this._animRequest = s.Util.requestAnimFrame(this._updateOnMove, this, !0, this._map._container), s.DomEvent.preventDefault(t))
							}
						},
						_updateOnMove: function() {
							var t = this._map,
								e = this._getScaleOrigin(),
								i = t.layerPointToLatLng(e),
								n = t.getScaleZoom(this._scale);
							t._animateZoom(i, n, this._startCenter, this._scale, this._delta, !1, !0)
						},
						_onTouchEnd: function() {
							if (!this._moved || !this._zooming) return void(this._zooming = !1);
							var t = this._map;
							this._zooming = !1, s.DomUtil.removeClass(t._mapPane, "leaflet-touching"), s.Util.cancelAnimFrame(this._animRequest), s.DomEvent.off(i, "touchmove", this._onTouchMove).off(i, "touchend", this._onTouchEnd);
							var e = this._getScaleOrigin(),
								n = t.layerPointToLatLng(e),
								o = t.getZoom(),
								r = t.getScaleZoom(this._scale) - o,
								a = r > 0 ? Math.ceil(r) : Math.floor(r),
								l = t._limitZoom(o + a),
								u = t.getZoomScale(l) / this._scale;
							t._animateZoom(n, l, e, u)
						},
						_getScaleOrigin: function() {
							var t = this._centerOffset.subtract(this._delta).divideBy(this._scale);
							return this._startCenter.add(t)
						}
					}), s.Map.addInitHook("addHandler", "touchZoom", s.Map.TouchZoom), s.Map.mergeOptions({
						tap: !0,
						tapTolerance: 15
					}), s.Map.Tap = s.Handler.extend({
						addHooks: function() {
							s.DomEvent.on(this._map._container, "touchstart", this._onDown, this)
						},
						removeHooks: function() {
							s.DomEvent.off(this._map._container, "touchstart", this._onDown, this)
						},
						_onDown: function(t) {
							if (t.touches) {
								if (s.DomEvent.preventDefault(t), this._fireClick = !0, t.touches.length > 1) return this._fireClick = !1, void clearTimeout(this._holdTimeout);
								var e = t.touches[0],
									n = e.target;
								this._startPos = this._newPos = new s.Point(e.clientX, e.clientY), n.tagName && "a" === n.tagName.toLowerCase() && s.DomUtil.addClass(n, "leaflet-active"), this._holdTimeout = setTimeout(s.bind(function() {
									this._isTapValid() && (this._fireClick = !1, this._onUp(), this._simulateEvent("contextmenu", e))
								}, this), 1e3), s.DomEvent.on(i, "touchmove", this._onMove, this).on(i, "touchend", this._onUp, this)
							}
						},
						_onUp: function(t) {
							if (clearTimeout(this._holdTimeout), s.DomEvent.off(i, "touchmove", this._onMove, this).off(i, "touchend", this._onUp, this), this._fireClick && t && t.changedTouches) {
								var e = t.changedTouches[0],
									n = e.target;
								n && n.tagName && "a" === n.tagName.toLowerCase() && s.DomUtil.removeClass(n, "leaflet-active"), this._isTapValid() && this._simulateEvent("click", e)
							}
						},
						_isTapValid: function() {
							return this._newPos.distanceTo(this._startPos) <= this._map.options.tapTolerance
						},
						_onMove: function(t) {
							var e = t.touches[0];
							this._newPos = new s.Point(e.clientX, e.clientY)
						},
						_simulateEvent: function(e, n) {
							var o = i.createEvent("MouseEvents");
							o._simulated = !0, n.target._simulatedClick = !0, o.initMouseEvent(e, !0, !0, t, 1, n.screenX, n.screenY, n.clientX, n.clientY, !1, !1, !1, !1, 0, null), n.target.dispatchEvent(o)
						}
					}), s.Browser.touch && !s.Browser.pointer && s.Map.addInitHook("addHandler", "tap", s.Map.Tap), s.Map.mergeOptions({
						boxZoom: !0
					}), s.Map.BoxZoom = s.Handler.extend({
						initialize: function(t) {
							this._map = t, this._container = t._container, this._pane = t._panes.overlayPane, this._moved = !1
						},
						addHooks: function() {
							s.DomEvent.on(this._container, "mousedown", this._onMouseDown, this)
						},
						removeHooks: function() {
							s.DomEvent.off(this._container, "mousedown", this._onMouseDown), this._moved = !1
						},
						moved: function() {
							return this._moved
						},
						_onMouseDown: function(t) {
							return this._moved = !1, !t.shiftKey || 1 !== t.which && 1 !== t.button ? !1 : (s.DomUtil.disableTextSelection(), s.DomUtil.disableImageDrag(), this._startLayerPoint = this._map.mouseEventToLayerPoint(t), void s.DomEvent.on(i, "mousemove", this._onMouseMove, this).on(i, "mouseup", this._onMouseUp, this).on(i, "keydown", this._onKeyDown, this))
						},
						_onMouseMove: function(t) {
							this._moved || (this._box = s.DomUtil.create("div", "leaflet-zoom-box", this._pane), s.DomUtil.setPosition(this._box, this._startLayerPoint), this._container.style.cursor = "crosshair", this._map.fire("boxzoomstart"));
							var e = this._startLayerPoint,
								i = this._box,
								n = this._map.mouseEventToLayerPoint(t),
								o = n.subtract(e),
								r = new s.Point(Math.min(n.x, e.x), Math.min(n.y, e.y));
							s.DomUtil.setPosition(i, r), this._moved = !0, i.style.width = Math.max(0, Math.abs(o.x) - 4) + "px", i.style.height = Math.max(0, Math.abs(o.y) - 4) + "px"
						},
						_finish: function() {
							this._moved && (this._pane.removeChild(this._box), this._container.style.cursor = ""), s.DomUtil.enableTextSelection(), s.DomUtil.enableImageDrag(), s.DomEvent.off(i, "mousemove", this._onMouseMove).off(i, "mouseup", this._onMouseUp).off(i, "keydown", this._onKeyDown)
						},
						_onMouseUp: function(t) {
							this._finish();
							var e = this._map,
								i = e.mouseEventToLayerPoint(t);
							if (!this._startLayerPoint.equals(i)) {
								var n = new s.LatLngBounds(e.layerPointToLatLng(this._startLayerPoint), e.layerPointToLatLng(i));
								e.fitBounds(n), e.fire("boxzoomend", {
									boxZoomBounds: n
								})
							}
						},
						_onKeyDown: function(t) {
							27 === t.keyCode && this._finish()
						}
					}), s.Map.addInitHook("addHandler", "boxZoom", s.Map.BoxZoom), s.Map.mergeOptions({
						keyboard: !0,
						keyboardPanOffset: 80,
						keyboardZoomOffset: 1
					}), s.Map.Keyboard = s.Handler.extend({
						keyCodes: {
							left: [37],
							right: [39],
							down: [40],
							up: [38],
							zoomIn: [187, 107, 61, 171],
							zoomOut: [189, 109, 173]
						},
						initialize: function(t) {
							this._map = t, this._setPanOffset(t.options.keyboardPanOffset), this._setZoomOffset(t.options.keyboardZoomOffset)
						},
						addHooks: function() {
							var t = this._map._container; - 1 === t.tabIndex && (t.tabIndex = "0"), s.DomEvent.on(t, "focus", this._onFocus, this).on(t, "blur", this._onBlur, this).on(t, "mousedown", this._onMouseDown, this), this._map.on("focus", this._addHooks, this).on("blur", this._removeHooks, this)
						},
						removeHooks: function() {
							this._removeHooks();
							var t = this._map._container;
							s.DomEvent.off(t, "focus", this._onFocus, this).off(t, "blur", this._onBlur, this).off(t, "mousedown", this._onMouseDown, this), this._map.off("focus", this._addHooks, this).off("blur", this._removeHooks, this)
						},
						_onMouseDown: function() {
							if (!this._focused) {
								var e = i.body,
									n = i.documentElement,
									o = e.scrollTop || n.scrollTop,
									s = e.scrollLeft || n.scrollLeft;
								this._map._container.focus(), t.scrollTo(s, o)
							}
						},
						_onFocus: function() {
							this._focused = !0, this._map.fire("focus")
						},
						_onBlur: function() {
							this._focused = !1, this._map.fire("blur")
						},
						_setPanOffset: function(t) {
							var e, i, n = this._panKeys = {},
								o = this.keyCodes;
							for (e = 0, i = o.left.length; i > e; e++) n[o.left[e]] = [-1 * t, 0];
							for (e = 0, i = o.right.length; i > e; e++) n[o.right[e]] = [t, 0];
							for (e = 0, i = o.down.length; i > e; e++) n[o.down[e]] = [0, t];
							for (e = 0, i = o.up.length; i > e; e++) n[o.up[e]] = [0, -1 * t]
						},
						_setZoomOffset: function(t) {
							var e, i, n = this._zoomKeys = {},
								o = this.keyCodes;
							for (e = 0, i = o.zoomIn.length; i > e; e++) n[o.zoomIn[e]] = t;
							for (e = 0, i = o.zoomOut.length; i > e; e++) n[o.zoomOut[e]] = -t
						},
						_addHooks: function() {
							s.DomEvent.on(i, "keydown", this._onKeyDown, this)
						},
						_removeHooks: function() {
							s.DomEvent.off(i, "keydown", this._onKeyDown, this)
						},
						_onKeyDown: function(t) {
							var e = t.keyCode,
								i = this._map;
							if (e in this._panKeys) {
								if (i._panAnim && i._panAnim._inProgress) return;
								i.panBy(this._panKeys[e]), i.options.maxBounds && i.panInsideBounds(i.options.maxBounds)
							} else {
								if (!(e in this._zoomKeys)) return;
								i.setZoom(i.getZoom() + this._zoomKeys[e])
							}
							s.DomEvent.stop(t)
						}
					}), s.Map.addInitHook("addHandler", "keyboard", s.Map.Keyboard), s.Handler.MarkerDrag = s.Handler.extend({
						initialize: function(t) {
							this._marker = t
						},
						addHooks: function() {
							var t = this._marker._icon;
							this._draggable || (this._draggable = new s.Draggable(t, t)), this._draggable.on("dragstart", this._onDragStart, this).on("drag", this._onDrag, this).on("dragend", this._onDragEnd, this), this._draggable.enable(), s.DomUtil.addClass(this._marker._icon, "leaflet-marker-draggable")
						},
						removeHooks: function() {
							this._draggable.off("dragstart", this._onDragStart, this).off("drag", this._onDrag, this).off("dragend", this._onDragEnd, this), this._draggable.disable(), s.DomUtil.removeClass(this._marker._icon, "leaflet-marker-draggable")
						},
						moved: function() {
							return this._draggable && this._draggable._moved
						},
						_onDragStart: function() {
							this._marker.closePopup().fire("movestart").fire("dragstart")
						},
						_onDrag: function() {
							var t = this._marker,
								e = t._shadow,
								i = s.DomUtil.getPosition(t._icon),
								n = t._map.layerPointToLatLng(i);
							e && s.DomUtil.setPosition(e, i), t._latlng = n, t.fire("move", {
								latlng: n
							}).fire("drag")
						},
						_onDragEnd: function(t) {
							this._marker.fire("moveend").fire("dragend", t)
						}
					}), s.Control = s.Class.extend({
						options: {
							position: "topright"
						},
						initialize: function(t) {
							s.setOptions(this, t)
						},
						getPosition: function() {
							return this.options.position
						},
						setPosition: function(t) {
							var e = this._map;
							return e && e.removeControl(this), this.options.position = t, e && e.addControl(this), this
						},
						getContainer: function() {
							return this._container
						},
						addTo: function(t) {
							this._map = t;
							var e = this._container = this.onAdd(t),
								i = this.getPosition(),
								n = t._controlCorners[i];
							return s.DomUtil.addClass(e, "leaflet-control"), -1 !== i.indexOf("bottom") ? n.insertBefore(e, n.firstChild) : n.appendChild(e), this
						},
						removeFrom: function(t) {
							var e = this.getPosition(),
								i = t._controlCorners[e];
							return i.removeChild(this._container), this._map = null, this.onRemove && this.onRemove(t), this
						},
						_refocusOnMap: function() {
							this._map && this._map.getContainer().focus()
						}
					}), s.control = function(t) {
						return new s.Control(t)
					}, s.Map.include({
						addControl: function(t) {
							return t.addTo(this), this
						},
						removeControl: function(t) {
							return t.removeFrom(this), this
						},
						_initControlPos: function() {
							function t(t, o) {
								var r = i + t + " " + i + o;
								e[t + o] = s.DomUtil.create("div", r, n)
							}
							var e = this._controlCorners = {},
								i = "leaflet-",
								n = this._controlContainer = s.DomUtil.create("div", i + "control-container", this._container);
							t("top", "left"), t("top", "right"), t("bottom", "left"), t("bottom", "right")
						},
						_clearControlPos: function() {
							this._container.removeChild(this._controlContainer)
						}
					}), s.Control.Zoom = s.Control.extend({
						options: {
							position: "topleft",
							zoomInText: "+",
							zoomInTitle: "Zoom in",
							zoomOutText: "-",
							zoomOutTitle: "Zoom out"
						},
						onAdd: function(t) {
							var e = "leaflet-control-zoom",
								i = s.DomUtil.create("div", e + " leaflet-bar");
							return this._map = t, this._zoomInButton = this._createButton(this.options.zoomInText, this.options.zoomInTitle, e + "-in", i, this._zoomIn, this), this._zoomOutButton = this._createButton(this.options.zoomOutText, this.options.zoomOutTitle, e + "-out", i, this._zoomOut, this), this._updateDisabled(), t.on("zoomend zoomlevelschange", this._updateDisabled, this), i
						},
						onRemove: function(t) {
							t.off("zoomend zoomlevelschange", this._updateDisabled, this)
						},
						_zoomIn: function(t) {
							this._map.zoomIn(t.shiftKey ? 3 : 1)
						},
						_zoomOut: function(t) {
							this._map.zoomOut(t.shiftKey ? 3 : 1)
						},
						_createButton: function(t, e, i, n, o, r) {
							var a = s.DomUtil.create("a", i, n);
							a.innerHTML = t, a.href = "#", a.title = e;
							var l = s.DomEvent.stopPropagation;
							return s.DomEvent.on(a, "click", l).on(a, "mousedown", l).on(a, "dblclick", l).on(a, "click", s.DomEvent.preventDefault).on(a, "click", o, r).on(a, "click", this._refocusOnMap, r), a
						},
						_updateDisabled: function() {
							var t = this._map,
								e = "leaflet-disabled";
							s.DomUtil.removeClass(this._zoomInButton, e), s.DomUtil.removeClass(this._zoomOutButton, e), t._zoom === t.getMinZoom() && s.DomUtil.addClass(this._zoomOutButton, e), t._zoom === t.getMaxZoom() && s.DomUtil.addClass(this._zoomInButton, e)
						}
					}), s.Map.mergeOptions({
						zoomControl: !0
					}), s.Map.addInitHook(function() {
						this.options.zoomControl && (this.zoomControl = new s.Control.Zoom, this.addControl(this.zoomControl))
					}), s.control.zoom = function(t) {
						return new s.Control.Zoom(t)
					}, s.Control.Attribution = s.Control.extend({
						options: {
							position: "bottomright",
							prefix: '<a href="http://leafletjs.com" title="A JS library for interactive maps">Leaflet</a>'
						},
						initialize: function(t) {
							s.setOptions(this, t), this._attributions = {}
						},
						onAdd: function(t) {
							this._container = s.DomUtil.create("div", "leaflet-control-attribution"), s.DomEvent.disableClickPropagation(this._container);
							for (var e in t._layers) t._layers[e].getAttribution && this.addAttribution(t._layers[e].getAttribution());
							return t.on("layeradd", this._onLayerAdd, this).on("layerremove", this._onLayerRemove, this), this._update(), this._container
						},
						onRemove: function(t) {
							t.off("layeradd", this._onLayerAdd).off("layerremove", this._onLayerRemove)
						},
						setPrefix: function(t) {
							return this.options.prefix = t, this._update(), this
						},
						addAttribution: function(t) {
							return t ? (this._attributions[t] || (this._attributions[t] = 0), this._attributions[t] ++, this._update(), this) : void 0
						},
						removeAttribution: function(t) {
							return t ? (this._attributions[t] && (this._attributions[t] --, this._update()), this) : void 0
						},
						_update: function() {
							if (this._map) {
								var t = [];
								for (var e in this._attributions) this._attributions[e] && t.push(e);
								var i = [];
								this.options.prefix && i.push(this.options.prefix), t.length && i.push(t.join(", ")), this._container.innerHTML = i.join(" | ")
							}
						},
						_onLayerAdd: function(t) {
							t.layer.getAttribution && this.addAttribution(t.layer.getAttribution())
						},
						_onLayerRemove: function(t) {
							t.layer.getAttribution && this.removeAttribution(t.layer.getAttribution())
						}
					}), s.Map.mergeOptions({
						attributionControl: !0
					}), s.Map.addInitHook(function() {
						this.options.attributionControl && (this.attributionControl = (new s.Control.Attribution).addTo(this))
					}), s.control.attribution = function(t) {
						return new s.Control.Attribution(t)
					}, s.Control.Scale = s.Control.extend({
						options: {
							position: "bottomleft",
							maxWidth: 100,
							metric: !0,
							imperial: !0,
							updateWhenIdle: !1
						},
						onAdd: function(t) {
							this._map = t;
							var e = "leaflet-control-scale",
								i = s.DomUtil.create("div", e),
								n = this.options;
							return this._addScales(n, e, i), t.on(n.updateWhenIdle ? "moveend" : "move", this._update, this), t.whenReady(this._update, this), i
						},
						onRemove: function(t) {
							t.off(this.options.updateWhenIdle ? "moveend" : "move", this._update, this)
						},
						_addScales: function(t, e, i) {
							t.metric && (this._mScale = s.DomUtil.create("div", e + "-line", i)), t.imperial && (this._iScale = s.DomUtil.create("div", e + "-line", i))
						},
						_update: function() {
							var t = this._map.getBounds(),
								e = t.getCenter().lat,
								i = 6378137 * Math.PI * Math.cos(e * Math.PI / 180),
								n = i * (t.getNorthEast().lng - t.getSouthWest().lng) / 180,
								o = this._map.getSize(),
								s = this.options,
								r = 0;
							o.x > 0 && (r = n * (s.maxWidth / o.x)), this._updateScales(s, r)
						},
						_updateScales: function(t, e) {
							t.metric && e && this._updateMetric(e), t.imperial && e && this._updateImperial(e)
						},
						_updateMetric: function(t) {
							var e = this._getRoundNum(t);
							this._mScale.style.width = this._getScaleWidth(e / t) + "px", this._mScale.innerHTML = 1e3 > e ? e + " m" : e / 1e3 + " km"
						},
						_updateImperial: function(t) {
							var e, i, n, o = 3.2808399 * t,
								s = this._iScale;
							o > 5280 ? (e = o / 5280, i = this._getRoundNum(e), s.style.width = this._getScaleWidth(i / e) + "px", s.innerHTML = i + " mi") : (n = this._getRoundNum(o), s.style.width = this._getScaleWidth(n / o) + "px", s.innerHTML = n + " ft")
						},
						_getScaleWidth: function(t) {
							return Math.round(this.options.maxWidth * t) - 10
						},
						_getRoundNum: function(t) {
							var e = Math.pow(10, (Math.floor(t) + "").length - 1),
								i = t / e;
							return i = i >= 10 ? 10 : i >= 5 ? 5 : i >= 3 ? 3 : i >= 2 ? 2 : 1, e * i
						}
					}), s.control.scale = function(t) {
						return new s.Control.Scale(t)
					}, s.Control.Layers = s.Control.extend({
						options: {
							collapsed: !0,
							position: "topright",
							autoZIndex: !0
						},
						initialize: function(t, e, i) {
							s.setOptions(this, i), this._layers = {}, this._lastZIndex = 0, this._handlingClick = !1;
							for (var n in t) this._addLayer(t[n], n);
							for (n in e) this._addLayer(e[n], n, !0)
						},
						onAdd: function(t) {
							return this._initLayout(), this._update(), t.on("layeradd", this._onLayerChange, this).on("layerremove", this._onLayerChange, this), this._container
						},
						onRemove: function(t) {
							t.off("layeradd", this._onLayerChange, this).off("layerremove", this._onLayerChange, this)
						},
						addBaseLayer: function(t, e) {
							return this._addLayer(t, e), this._update(), this
						},
						addOverlay: function(t, e) {
							return this._addLayer(t, e, !0), this._update(), this
						},
						removeLayer: function(t) {
							var e = s.stamp(t);
							return delete this._layers[e], this._update(), this
						},
						_initLayout: function() {
							var t = "leaflet-control-layers",
								e = this._container = s.DomUtil.create("div", t);
							e.setAttribute("aria-haspopup", !0), s.Browser.touch ? s.DomEvent.on(e, "click", s.DomEvent.stopPropagation) : s.DomEvent.disableClickPropagation(e).disableScrollPropagation(e);
							var i = this._form = s.DomUtil.create("form", t + "-list");
							if (this.options.collapsed) {
								s.Browser.android || s.DomEvent.on(e, "mouseover", this._expand, this).on(e, "mouseout", this._collapse, this);
								var n = this._layersLink = s.DomUtil.create("a", t + "-toggle", e);
								n.href = "#", n.title = "Layers", s.Browser.touch ? s.DomEvent.on(n, "click", s.DomEvent.stop).on(n, "click", this._expand, this) : s.DomEvent.on(n, "focus", this._expand, this), s.DomEvent.on(i, "click", function() {
									setTimeout(s.bind(this._onInputClick, this), 0)
								}, this), this._map.on("click", this._collapse, this)
							} else this._expand();
							this._baseLayersList = s.DomUtil.create("div", t + "-base", i), this._separator = s.DomUtil.create("div", t + "-separator", i), this._overlaysList = s.DomUtil.create("div", t + "-overlays", i), e.appendChild(i)
						},
						_addLayer: function(t, e, i) {
							var n = s.stamp(t);
							this._layers[n] = {
								layer: t,
								name: e,
								overlay: i
							}, this.options.autoZIndex && t.setZIndex && (this._lastZIndex++, t.setZIndex(this._lastZIndex))
						},
						_update: function() {
							if (this._container) {
								this._baseLayersList.innerHTML = "", this._overlaysList.innerHTML = "";
								var t, e, i = !1,
									n = !1;
								for (t in this._layers) e = this._layers[t], this._addItem(e), n = n || e.overlay, i = i || !e.overlay;
								this._separator.style.display = n && i ? "" : "none"
							}
						},
						_onLayerChange: function(t) {
							var e = this._layers[s.stamp(t.layer)];
							if (e) {
								this._handlingClick || this._update();
								var i = e.overlay ? "layeradd" === t.type ? "overlayadd" : "overlayremove" : "layeradd" === t.type ? "baselayerchange" : null;
								i && this._map.fire(i, e)
							}
						},
						_createRadioElement: function(t, e) {
							var n = '<input type="radio" class="leaflet-control-layers-selector" name="' + t + '"';
							e && (n += ' checked="checked"'), n += "/>";
							var o = i.createElement("div");
							return o.innerHTML = n, o.firstChild
						},
						_addItem: function(t) {
							var e, n = i.createElement("label"),
								o = this._map.hasLayer(t.layer);
							t.overlay ? (e = i.createElement("input"), e.type = "checkbox", e.className = "leaflet-control-layers-selector", e.defaultChecked = o) : e = this._createRadioElement("leaflet-base-layers", o), e.layerId = s.stamp(t.layer), s.DomEvent.on(e, "click", this._onInputClick, this);
							var r = i.createElement("span");
							r.innerHTML = " " + t.name, n.appendChild(e), n.appendChild(r);
							var a = t.overlay ? this._overlaysList : this._baseLayersList;
							return a.appendChild(n), n
						},
						_onInputClick: function() {
							var t, e, i, n = this._form.getElementsByTagName("input"),
								o = n.length;
							for (this._handlingClick = !0, t = 0; o > t; t++) e = n[t], i = this._layers[e.layerId], e.checked && !this._map.hasLayer(i.layer) ? this._map.addLayer(i.layer) : !e.checked && this._map.hasLayer(i.layer) && this._map.removeLayer(i.layer);
							this._handlingClick = !1, this._refocusOnMap()
						},
						_expand: function() {
							s.DomUtil.addClass(this._container, "leaflet-control-layers-expanded")
						},
						_collapse: function() {
							this._container.className = this._container.className.replace(" leaflet-control-layers-expanded", "")
						}
					}), s.control.layers = function(t, e, i) {
						return new s.Control.Layers(t, e, i)
					}, s.PosAnimation = s.Class.extend({
						includes: s.Mixin.Events,
						run: function(t, e, i, n) {
							this.stop(), this._el = t, this._inProgress = !0, this._newPos = e, this.fire("start"), t.style[s.DomUtil.TRANSITION] = "all " + (i || .25) + "s cubic-bezier(0,0," + (n || .5) + ",1)", s.DomEvent.on(t, s.DomUtil.TRANSITION_END, this._onTransitionEnd, this), s.DomUtil.setPosition(t, e), s.Util.falseFn(t.offsetWidth), this._stepTimer = setInterval(s.bind(this._onStep, this), 50)
						},
						stop: function() {
							this._inProgress && (s.DomUtil.setPosition(this._el, this._getPos()), this._onTransitionEnd(), s.Util.falseFn(this._el.offsetWidth))
						},
						_onStep: function() {
							var t = this._getPos();
							return t ? (this._el._leaflet_pos = t, void this.fire("step")) : void this._onTransitionEnd()
						},
						_transformRe: /([-+]?(?:\d*\.)?\d+)\D*, ([-+]?(?:\d*\.)?\d+)\D*\)/,
						_getPos: function() {
							var e, i, n, o = this._el,
								r = t.getComputedStyle(o);
							if (s.Browser.any3d) {
								if (n = r[s.DomUtil.TRANSFORM].match(this._transformRe), !n) return;
								e = parseFloat(n[1]), i = parseFloat(n[2])
							} else e = parseFloat(r.left), i = parseFloat(r.top);
							return new s.Point(e, i, !0)
						},
						_onTransitionEnd: function() {
							s.DomEvent.off(this._el, s.DomUtil.TRANSITION_END, this._onTransitionEnd, this), this._inProgress && (this._inProgress = !1, this._el.style[s.DomUtil.TRANSITION] = "", this._el._leaflet_pos = this._newPos, clearInterval(this._stepTimer), this.fire("step").fire("end"))
						}
					}), s.Map.include({
						setView: function(t, e, i) {
							if (e = e === n ? this._zoom : this._limitZoom(e), t = this._limitCenter(s.latLng(t), e, this.options.maxBounds), i = i || {}, this._panAnim && this._panAnim.stop(), this._loaded && !i.reset && i !== !0) {
								i.animate !== n && (i.zoom = s.extend({
									animate: i.animate
								}, i.zoom), i.pan = s.extend({
									animate: i.animate
								}, i.pan));
								var o = this._zoom !== e ? this._tryAnimatedZoom && this._tryAnimatedZoom(t, e, i.zoom) : this._tryAnimatedPan(t, i.pan);
								if (o) return clearTimeout(this._sizeTimer), this
							}
							return this._resetView(t, e), this
						},
						panBy: function(t, e) {
							if (t = s.point(t).round(), e = e || {}, !t.x && !t.y) return this;
							if (this._panAnim || (this._panAnim = new s.PosAnimation, this._panAnim.on({
								step: this._onPanTransitionStep,
								end: this._onPanTransitionEnd
							}, this)), e.noMoveStart || this.fire("movestart"), e.animate !== !1) {
								s.DomUtil.addClass(this._mapPane, "leaflet-pan-anim");
								var i = this._getMapPanePos().subtract(t);
								this._panAnim.run(this._mapPane, i, e.duration || .25, e.easeLinearity)
							} else this._rawPanBy(t), this.fire("move").fire("moveend");
							return this
						},
						_onPanTransitionStep: function() {
							this.fire("move")
						},
						_onPanTransitionEnd: function() {
							s.DomUtil.removeClass(this._mapPane, "leaflet-pan-anim"), this.fire("moveend")
						},
						_tryAnimatedPan: function(t, e) {
							var i = this._getCenterOffset(t)._floor();
							return (e && e.animate) === !0 || this.getSize().contains(i) ? (this.panBy(i, e), !0) : !1
						}
					}), s.PosAnimation = s.DomUtil.TRANSITION ? s.PosAnimation : s.PosAnimation.extend({
						run: function(t, e, i, n) {
							this.stop(), this._el = t, this._inProgress = !0, this._duration = i || .25, this._easeOutPower = 1 / Math.max(n || .5, .2), this._startPos = s.DomUtil.getPosition(t), this._offset = e.subtract(this._startPos), this._startTime = +new Date, this.fire("start"), this._animate()
						},
						stop: function() {
							this._inProgress && (this._step(), this._complete())
						},
						_animate: function() {
							this._animId = s.Util.requestAnimFrame(this._animate, this), this._step()
						},
						_step: function() {
							var t = +new Date - this._startTime,
								e = 1e3 * this._duration;
							e > t ? this._runFrame(this._easeOut(t / e)) : (this._runFrame(1), this._complete())
						},
						_runFrame: function(t) {
							var e = this._startPos.add(this._offset.multiplyBy(t));
							s.DomUtil.setPosition(this._el, e), this.fire("step")
						},
						_complete: function() {
							s.Util.cancelAnimFrame(this._animId), this._inProgress = !1, this.fire("end")
						},
						_easeOut: function(t) {
							return 1 - Math.pow(1 - t, this._easeOutPower)
						}
					}), s.Map.mergeOptions({
						zoomAnimation: !0,
						zoomAnimationThreshold: 4
					}), s.DomUtil.TRANSITION && s.Map.addInitHook(function() {
						this._zoomAnimated = this.options.zoomAnimation && s.DomUtil.TRANSITION && s.Browser.any3d && !s.Browser.android23 && !s.Browser.mobileOpera, this._zoomAnimated && s.DomEvent.on(this._mapPane, s.DomUtil.TRANSITION_END, this._catchTransitionEnd, this)
					}), s.Map.include(s.DomUtil.TRANSITION ? {
						_catchTransitionEnd: function(t) {
							this._animatingZoom && t.propertyName.indexOf("transform") >= 0 && this._onZoomTransitionEnd()
						},
						_nothingToAnimate: function() {
							return !this._container.getElementsByClassName("leaflet-zoom-animated").length
						},
						_tryAnimatedZoom: function(t, e, i) {
							if (this._animatingZoom) return !0;
							if (i = i || {}, !this._zoomAnimated || i.animate === !1 || this._nothingToAnimate() || Math.abs(e - this._zoom) > this.options.zoomAnimationThreshold) return !1;
							var n = this.getZoomScale(e),
								o = this._getCenterOffset(t)._divideBy(1 - 1 / n),
								s = this._getCenterLayerPoint()._add(o);
							return i.animate === !0 || this.getSize().contains(o) ? (this.fire("movestart").fire("zoomstart"), this._animateZoom(t, e, s, n, null, !0), !0) : !1
						},
						_animateZoom: function(t, e, i, n, o, r, a) {
							a || (this._animatingZoom = !0), s.DomUtil.addClass(this._mapPane, "leaflet-zoom-anim"), this._animateToCenter = t, this._animateToZoom = e, s.Draggable && (s.Draggable._disabled = !0), s.Util.requestAnimFrame(function() {
								this.fire("zoomanim", {
									center: t,
									zoom: e,
									origin: i,
									scale: n,
									delta: o,
									backwards: r
								})
							}, this)
						},
						_onZoomTransitionEnd: function() {
							this._animatingZoom = !1, s.DomUtil.removeClass(this._mapPane, "leaflet-zoom-anim"), this._resetView(this._animateToCenter, this._animateToZoom, !0, !0), s.Draggable && (s.Draggable._disabled = !1)
						}
					} : {}), s.TileLayer.include({
						_animateZoom: function(t) {
							this._animating || (this._animating = !0, this._prepareBgBuffer());
							var e = this._bgBuffer,
								i = s.DomUtil.TRANSFORM,
								n = t.delta ? s.DomUtil.getTranslateString(t.delta) : e.style[i],
								o = s.DomUtil.getScaleString(t.scale, t.origin);
							e.style[i] = t.backwards ? o + " " + n : n + " " + o
						},
						_endZoomAnim: function() {
							var t = this._tileContainer,
								e = this._bgBuffer;
							t.style.visibility = "", t.parentNode.appendChild(t), s.Util.falseFn(e.offsetWidth), this._animating = !1
						},
						_clearBgBuffer: function() {
							var t = this._map;
							!t || t._animatingZoom || t.touchZoom._zooming || (this._bgBuffer.innerHTML = "", this._bgBuffer.style[s.DomUtil.TRANSFORM] = "")
						},
						_prepareBgBuffer: function() {
							var t = this._tileContainer,
								e = this._bgBuffer,
								i = this._getLoadedTilesPercentage(e),
								n = this._getLoadedTilesPercentage(t);
							return e && i > .5 && .5 > n ? (t.style.visibility = "hidden", void this._stopLoadingImages(t)) : (e.style.visibility = "hidden", e.style[s.DomUtil.TRANSFORM] = "", this._tileContainer = e, e = this._bgBuffer = t, this._stopLoadingImages(e), void clearTimeout(this._clearBgBufferTimer))
						},
						_getLoadedTilesPercentage: function(t) {
							var e, i, n = t.getElementsByTagName("img"),
								o = 0;
							for (e = 0, i = n.length; i > e; e++) n[e].complete && o++;
							return o / i
						},
						_stopLoadingImages: function(t) {
							var e, i, n, o = Array.prototype.slice.call(t.getElementsByTagName("img"));
							for (e = 0, i = o.length; i > e; e++) n = o[e], n.complete || (n.onload = s.Util.falseFn, n.onerror = s.Util.falseFn, n.src = s.Util.emptyImageUrl, n.parentNode.removeChild(n))
						}
					}), s.Map.include({
						_defaultLocateOptions: {
							watch: !1,
							setView: !1,
							maxZoom: 1 / 0,
							timeout: 1e4,
							maximumAge: 0,
							enableHighAccuracy: !1
						},
						locate: function(t) {
							if (t = this._locateOptions = s.extend(this._defaultLocateOptions, t), !navigator.geolocation) return this._handleGeolocationError({
								code: 0,
								message: "Geolocation not supported."
							}), this;
							var e = s.bind(this._handleGeolocationResponse, this),
								i = s.bind(this._handleGeolocationError, this);
							return t.watch ? this._locationWatchId = navigator.geolocation.watchPosition(e, i, t) : navigator.geolocation.getCurrentPosition(e, i, t), this
						},
						stopLocate: function() {
							return navigator.geolocation && navigator.geolocation.clearWatch(this._locationWatchId), this._locateOptions && (this._locateOptions.setView = !1), this
						},
						_handleGeolocationError: function(t) {
							var e = t.code,
								i = t.message || (1 === e ? "permission denied" : 2 === e ? "position unavailable" : "timeout");
							this._locateOptions.setView && !this._loaded && this.fitWorld(), this.fire("locationerror", {
								code: e,
								message: "Geolocation error: " + i + "."
							})
						},
						_handleGeolocationResponse: function(t) {
							var e = t.coords.latitude,
								i = t.coords.longitude,
								n = new s.LatLng(e, i),
								o = 180 * t.coords.accuracy / 40075017,
								r = o / Math.cos(s.LatLng.DEG_TO_RAD * e),
								a = s.latLngBounds([e - o, i - r], [e + o, i + r]),
								l = this._locateOptions;
							if (l.setView) {
								var u = Math.min(this.getBoundsZoom(a), l.maxZoom);
								this.setView(n, u)
							}
							var c = {
								latlng: n,
								bounds: a,
								timestamp: t.timestamp
							};
							for (var h in t.coords) "number" == typeof t.coords[h] && (c[h] = t.coords[h]);
							this.fire("locationfound", c)
						}
					})
			}(window, document)
		}, {}
	],
	3: [
		function(t, e, i) {
			! function(t, e) {
				if ("object" == typeof i && i) e(i);
				else {
					var n = {};
					e(n), "function" == typeof define && define.amd ? define(n) : t.Mustache = n
				}
			}(this, function(t) {
				function e(t, e) {
					return T.call(t, e)
				}

				function i(t) {
					return !e(g, t)
				}

				function n(t) {
					return "function" == typeof t
				}

				function o(t) {
					return t.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&")
				}

				function s(t) {
					return String(t).replace(/[&<>"'\/]/g, function(t) {
						return w[t]
					})
				}

				function r(t) {
					this.string = t, this.tail = t, this.pos = 0
				}

				function a(t, e) {
					this.view = null == t ? {} : t, this.parent = e, this._cache = {
						".": this.view
					}
				}

				function l() {
					this.clearCache()
				}

				function u(e, i, o, s) {
					function r(t) {
						return i.render(t, o)
					}
					for (var a, l, c, h = "", p = 0, d = e.length; d > p; ++p) switch (a = e[p], l = a[1], a[0]) {
						case "#":
							if (c = o.lookup(l), "object" == typeof c || "string" == typeof c)
								if (L(c))
									for (var f = 0, m = c.length; m > f; ++f) h += u(a[4], i, o.push(c[f]), s);
								else c && (h += u(a[4], i, o.push(c), s));
							else if (n(c)) {
								var g = null == s ? null : s.slice(a[3], a[5]);
								c = c.call(o.view, g, r), null != c && (h += c)
							} else c && (h += u(a[4], i, o, s));
							break;
						case "^":
							c = o.lookup(l), (!c || L(c) && 0 === c.length) && (h += u(a[4], i, o, s));
							break;
						case ">":
							c = i.getPartial(l), n(c) && (h += c(o));
							break;
						case "&":
							c = o.lookup(l), null != c && (h += c);
							break;
						case "name":
							c = o.lookup(l), null != c && (h += t.escape(c));
							break;
						case "text":
							h += l
					}
					return h
				}

				function c(t) {
					for (var e, i = [], n = i, o = [], s = 0, r = t.length; r > s; ++s) switch (e = t[s], e[0]) {
						case "#":
						case "^":
							o.push(e), n.push(e), n = e[4] = [];
							break;
						case "/":
							var a = o.pop();
							a[5] = e[2], n = o.length > 0 ? o[o.length - 1][4] : i;
							break;
						default:
							n.push(e)
					}
					return i
				}

				function h(t) {
					for (var e, i, n = [], o = 0, s = t.length; s > o; ++o) e = t[o], e && ("text" === e[0] && i && "text" === i[0] ? (i[1] += e[1], i[3] = e[3]) : (i = e, n.push(e)));
					return n
				}

				function p(t) {
					return [new RegExp(o(t[0]) + "\\s*"), new RegExp("\\s*" + o(t[1]))]
				}

				function d(e, n) {
					function s() {
						if (E && !P)
							for (; C.length;) delete x[C.pop()];
						else C = [];
						E = !1, P = !1
					}
					if (e = e || "", n = n || t.tags, "string" == typeof n && (n = n.split(m)), 2 !== n.length) throw new Error("Invalid tags: " + n.join(", "));
					for (var a, l, u, d, g, T, b = p(n), L = new r(e), w = [], x = [], C = [], E = !1, P = !1; !L.eos();) {
						if (a = L.pos, u = L.scanUntil(b[0]))
							for (var S = 0, k = u.length; k > S; ++S) d = u.charAt(S), i(d) ? C.push(x.length) : P = !0, x.push(["text", d, a, a + 1]), a += 1, "\n" == d && s();
						if (!L.scan(b[0])) break;
						if (E = !0, l = L.scan(y) || "name", L.scan(f), "=" === l ? (u = L.scanUntil(v), L.scan(v), L.scanUntil(b[1])) : "{" === l ? (u = L.scanUntil(new RegExp("\\s*" + o("}" + n[1]))), L.scan(_), L.scanUntil(b[1]), l = "&") : u = L.scanUntil(b[1]), !L.scan(b[1])) throw new Error("Unclosed tag at " + L.pos);
						if (g = [l, u, a, L.pos], x.push(g), "#" === l || "^" === l) w.push(g);
						else if ("/" === l) {
							if (T = w.pop(), !T) throw new Error('Unopened section "' + u + '" at ' + a);
							if (T[1] !== u) throw new Error('Unclosed section "' + T[1] + '" at ' + a)
						} else if ("name" === l || "{" === l || "&" === l) P = !0;
						else if ("=" === l) {
							if (n = u.split(m), 2 !== n.length) throw new Error("Invalid tags at " + a + ": " + n.join(", "));
							b = p(n)
						}
					}
					if (T = w.pop()) throw new Error('Unclosed section "' + T[1] + '" at ' + L.pos);
					return c(h(x))
				}
				var f = /\s*/,
					m = /\s+/,
					g = /\S/,
					v = /\s*=/,
					_ = /\s*\}/,
					y = /#|\^|\/|>|\{|&|=|!/,
					T = RegExp.prototype.test,
					b = Object.prototype.toString,
					L = Array.isArray || function(t) {
						return "[object Array]" === b.call(t)
					},
					w = {
						"&": "&amp;",
						"<": "&lt;",
						">": "&gt;",
						'"': "&quot;",
						"'": "&#39;",
						"/": "&#x2F;"
					};
				r.prototype.eos = function() {
					return "" === this.tail
				}, r.prototype.scan = function(t) {
					var e = this.tail.match(t);
					if (e && 0 === e.index) {
						var i = e[0];
						return this.tail = this.tail.substring(i.length), this.pos += i.length, i
					}
					return ""
				}, r.prototype.scanUntil = function(t) {
					var e, i = this.tail.search(t);
					switch (i) {
						case -1:
							e = this.tail, this.tail = "";
							break;
						case 0:
							e = "";
							break;
						default:
							e = this.tail.substring(0, i), this.tail = this.tail.substring(i)
					}
					return this.pos += e.length, e
				}, a.make = function(t) {
					return t instanceof a ? t : new a(t)
				}, a.prototype.push = function(t) {
					return new a(t, this)
				}, a.prototype.lookup = function(t) {
					var e;
					if (t in this._cache) e = this._cache[t];
					else {
						for (var i = this; i;) {
							if (t.indexOf(".") > 0) {
								e = i.view;
								for (var o = t.split("."), s = 0; null != e && s < o.length;) e = e[o[s++]]
							} else e = i.view[t]; if (null != e) break;
							i = i.parent
						}
						this._cache[t] = e
					}
					return n(e) && (e = e.call(this.view)), e
				}, l.prototype.clearCache = function() {
					this._cache = {}, this._partialCache = {}
				}, l.prototype.compile = function(e, i) {
					var n = this._cache[e];
					if (!n) {
						var o = t.parse(e, i);
						n = this._cache[e] = this.compileTokens(o, e)
					}
					return n
				}, l.prototype.compilePartial = function(t, e, i) {
					var n = this.compile(e, i);
					return this._partialCache[t] = n, n
				}, l.prototype.getPartial = function(t) {
					return t in this._partialCache || !this._loadPartial || this.compilePartial(t, this._loadPartial(t)), this._partialCache[t]
				}, l.prototype.compileTokens = function(t, e) {
					var i = this;
					return function(o, s) {
						if (s)
							if (n(s)) i._loadPartial = s;
							else
								for (var r in s) i.compilePartial(r, s[r]);
						return u(t, i, a.make(o), e)
					}
				}, l.prototype.render = function(t, e, i) {
					return this.compile(t)(e, i)
				}, t.name = "mustache.js", t.version = "0.7.3", t.tags = ["{{", "}}"], t.Scanner = r, t.Context = a, t.Writer = l, t.parse = d, t.escape = s;
				var x = new l;
				t.clearCache = function() {
					return x.clearCache()
				}, t.compile = function(t, e) {
					return x.compile(t, e)
				}, t.compilePartial = function(t, e, i) {
					return x.compilePartial(t, e, i)
				}, t.compileTokens = function(t, e) {
					return x.compileTokens(t, e)
				}, t.render = function(t, e, i) {
					return x.render(t, e, i)
				}, t.to_html = function(e, i, o, s) {
					var r = t.render(e, i, o);
					return n(s) ? void s(r) : r
				}
			})
		}, {}
	],
	4: [
		function(t, e) {
			function i(t) {
				"use strict";
				return /^https?/.test(t.getScheme()) ? t.toString() : /^mailto?/.test(t.getScheme()) ? t.toString() : "data" == t.getScheme() && /^image/.test(t.getPath()) ? t.toString() : void 0
			}

			function n(t) {
				return t
			}
			var o = t("./sanitizer-bundle.js");
			e.exports = function(t) {
				return t ? o(t, i, n) : ""
			}
		}, {
			"./sanitizer-bundle.js": 5
		}
	],
	5: [
		function(t, e) {
			var i = function() {
					function t(t) {
						var e = ("" + t).match(d);
						return e ? new l(u(e[1]), u(e[2]), u(e[3]), u(e[4]), u(e[5]), u(e[6]), u(e[7])) : null
					}

					function e(t, e, s, r, a, u, c) {
						var h = new l(n(t, f), n(e, f), i(s), r > 0 ? r.toString() : null, n(a, m), null, i(c));
						return u && ("string" == typeof u ? h.setRawQuery(u.replace(/[^?&=0-9A-Za-z_\-~.%]/g, o)) : h.setAllParameters(u)), h
					}

					function i(t) {
						return "string" == typeof t ? encodeURIComponent(t) : null
					}

					function n(t, e) {
						return "string" == typeof t ? encodeURI(t).replace(e, o) : null
					}

					function o(t) {
						var e = t.charCodeAt(0);
						return "%" + "0123456789ABCDEF".charAt(e >> 4 & 15) + "0123456789ABCDEF".charAt(15 & e)
					}

					function s(t) {
						return t.replace(/(^|\/)\.(?:\/|$)/g, "$1").replace(/\/{2,}/g, "/")
					}

					function r(t) {
						if (null === t) return null;
						for (var e, i = s(t), n = h;
							(e = i.replace(n, "$1")) != i; i = e);
						return i
					}

					function a(t, e) {
						var i = t.clone(),
							n = e.hasScheme();
						n ? i.setRawScheme(e.getRawScheme()) : n = e.hasCredentials(), n ? i.setRawCredentials(e.getRawCredentials()) : n = e.hasDomain(), n ? i.setRawDomain(e.getRawDomain()) : n = e.hasPort();
						var o = e.getRawPath(),
							s = r(o);
						if (n) i.setPort(e.getPort()), s = s && s.replace(p, "");
						else if (n = !!o) {
							if (47 !== s.charCodeAt(0)) {
								var a = r(i.getRawPath() || "").replace(p, ""),
									l = a.lastIndexOf("/") + 1;
								s = r((l ? a.substring(0, l) : "") + r(o)).replace(p, "")
							}
						} else s = s && s.replace(p, ""), s !== o && i.setRawPath(s);
						return n ? i.setRawPath(s) : n = e.hasQuery(), n ? i.setRawQuery(e.getRawQuery()) : n = e.hasFragment(), n && i.setRawFragment(e.getRawFragment()), i
					}

					function l(t, e, i, n, o, s, r) {
						this.scheme_ = t, this.credentials_ = e, this.domain_ = i, this.port_ = n, this.path_ = o, this.query_ = s, this.fragment_ = r, this.paramCache_ = null
					}

					function u(t) {
						return "string" == typeof t && t.length > 0 ? t : null
					}
					var c = new RegExp("(/|^)(?:[^./][^/]*|\\.{2,}(?:[^./][^/]*)|\\.{3,}[^/]*)/\\.\\.(?:/|$)"),
						h = new RegExp(c),
						p = /^(?:\.\.\/)*(?:\.\.$)?/;
					l.prototype.toString = function() {
						var t = [];
						return null !== this.scheme_ && t.push(this.scheme_, ":"), null !== this.domain_ && (t.push("//"), null !== this.credentials_ && t.push(this.credentials_, "@"), t.push(this.domain_), null !== this.port_ && t.push(":", this.port_.toString())), null !== this.path_ && t.push(this.path_), null !== this.query_ && t.push("?", this.query_), null !== this.fragment_ && t.push("#", this.fragment_), t.join("")
					}, l.prototype.clone = function() {
						return new l(this.scheme_, this.credentials_, this.domain_, this.port_, this.path_, this.query_, this.fragment_)
					}, l.prototype.getScheme = function() {
						return this.scheme_ && decodeURIComponent(this.scheme_).toLowerCase()
					}, l.prototype.getRawScheme = function() {
						return this.scheme_
					}, l.prototype.setScheme = function(t) {
						return this.scheme_ = n(t, f), this
					}, l.prototype.setRawScheme = function(t) {
						return this.scheme_ = t ? t : null, this
					}, l.prototype.hasScheme = function() {
						return null !== this.scheme_
					}, l.prototype.getCredentials = function() {
						return this.credentials_ && decodeURIComponent(this.credentials_)
					}, l.prototype.getRawCredentials = function() {
						return this.credentials_
					}, l.prototype.setCredentials = function(t) {
						return this.credentials_ = n(t, f), this
					}, l.prototype.setRawCredentials = function(t) {
						return this.credentials_ = t ? t : null, this
					}, l.prototype.hasCredentials = function() {
						return null !== this.credentials_
					}, l.prototype.getDomain = function() {
						return this.domain_ && decodeURIComponent(this.domain_)
					}, l.prototype.getRawDomain = function() {
						return this.domain_
					}, l.prototype.setDomain = function(t) {
						return this.setRawDomain(t && encodeURIComponent(t))
					}, l.prototype.setRawDomain = function(t) {
						return this.domain_ = t ? t : null, this.setRawPath(this.path_)
					}, l.prototype.hasDomain = function() {
						return null !== this.domain_
					}, l.prototype.getPort = function() {
						return this.port_ && decodeURIComponent(this.port_)
					}, l.prototype.setPort = function(t) {
						if (t) {
							if (t = Number(t), t !== (65535 & t)) throw new Error("Bad port number " + t);
							this.port_ = "" + t
						} else this.port_ = null;
						return this
					}, l.prototype.hasPort = function() {
						return null !== this.port_
					}, l.prototype.getPath = function() {
						return this.path_ && decodeURIComponent(this.path_)
					}, l.prototype.getRawPath = function() {
						return this.path_
					}, l.prototype.setPath = function(t) {
						return this.setRawPath(n(t, m))
					}, l.prototype.setRawPath = function(t) {
						return t ? (t = String(t), this.path_ = !this.domain_ || /^\//.test(t) ? t : "/" + t) : this.path_ = null, this
					}, l.prototype.hasPath = function() {
						return null !== this.path_
					}, l.prototype.getQuery = function() {
						return this.query_ && decodeURIComponent(this.query_).replace(/\+/g, " ")
					}, l.prototype.getRawQuery = function() {
						return this.query_
					}, l.prototype.setQuery = function(t) {
						return this.paramCache_ = null, this.query_ = i(t), this
					}, l.prototype.setRawQuery = function(t) {
						return this.paramCache_ = null, this.query_ = t ? t : null, this
					}, l.prototype.hasQuery = function() {
						return null !== this.query_
					}, l.prototype.setAllParameters = function(t) {
						if ("object" == typeof t && !(t instanceof Array) && (t instanceof Object || "[object Array]" !== Object.prototype.toString.call(t))) {
							var e = [],
								i = -1;
							for (var n in t) {
								var o = t[n];
								"string" == typeof o && (e[++i] = n, e[++i] = o)
							}
							t = e
						}
						this.paramCache_ = null;
						for (var s = [], r = "", a = 0; a < t.length;) {
							var n = t[a++],
								o = t[a++];
							s.push(r, encodeURIComponent(n.toString())), r = "&", o && s.push("=", encodeURIComponent(o.toString()))
						}
						return this.query_ = s.join(""), this
					}, l.prototype.checkParameterCache_ = function() {
						if (!this.paramCache_) {
							var t = this.query_;
							if (t) {
								for (var e = t.split(/[&\?]/), i = [], n = -1, o = 0; o < e.length; ++o) {
									var s = e[o].match(/^([^=]*)(?:=(.*))?$/);
									i[++n] = decodeURIComponent(s[1]).replace(/\+/g, " "), i[++n] = decodeURIComponent(s[2] || "").replace(/\+/g, " ")
								}
								this.paramCache_ = i
							} else this.paramCache_ = []
						}
					}, l.prototype.setParameterValues = function(t, e) {
						"string" == typeof e && (e = [e]), this.checkParameterCache_();
						for (var i = 0, n = this.paramCache_, o = [], s = 0; s < n.length; s += 2) t === n[s] ? i < e.length && o.push(t, e[i++]) : o.push(n[s], n[s + 1]);
						for (; i < e.length;) o.push(t, e[i++]);
						return this.setAllParameters(o), this
					}, l.prototype.removeParameter = function(t) {
						return this.setParameterValues(t, [])
					}, l.prototype.getAllParameters = function() {
						return this.checkParameterCache_(), this.paramCache_.slice(0, this.paramCache_.length)
					}, l.prototype.getParameterValues = function(t) {
						this.checkParameterCache_();
						for (var e = [], i = 0; i < this.paramCache_.length; i += 2) t === this.paramCache_[i] && e.push(this.paramCache_[i + 1]);
						return e
					}, l.prototype.getParameterMap = function() {
						this.checkParameterCache_();
						for (var t = {}, e = 0; e < this.paramCache_.length; e += 2) {
							var i = this.paramCache_[e++],
								n = this.paramCache_[e++];
							i in t ? t[i].push(n) : t[i] = [n]
						}
						return t
					}, l.prototype.getParameterValue = function(t) {
						this.checkParameterCache_();
						for (var e = 0; e < this.paramCache_.length; e += 2)
							if (t === this.paramCache_[e]) return this.paramCache_[e + 1];
						return null
					}, l.prototype.getFragment = function() {
						return this.fragment_ && decodeURIComponent(this.fragment_)
					}, l.prototype.getRawFragment = function() {
						return this.fragment_
					}, l.prototype.setFragment = function(t) {
						return this.fragment_ = t ? encodeURIComponent(t) : null, this
					}, l.prototype.setRawFragment = function(t) {
						return this.fragment_ = t ? t : null, this
					}, l.prototype.hasFragment = function() {
						return null !== this.fragment_
					};
					var d = new RegExp("^(?:([^:/?#]+):)?(?://(?:([^/?#]*)@)?([^/?#:@]*)(?::([0-9]+))?)?([^?#]+)?(?:\\?([^#]*))?(?:#(.*))?$"),
						f = /[#\/\?@]/g,
						m = /[\#\?]/g;
					return l.parse = t, l.create = e, l.resolve = a, l.collapse_dots = r, l.utils = {
						mimeTypeOf: function(e) {
							var i = t(e);
							return /\.html$/.test(i.getPath()) ? "text/html" : "application/javascript"
						},
						resolve: function(e, i) {
							return e ? a(t(e), t(i)).toString() : "" + i
						}
					}, l
				}(),
				n = {};
			if (n.atype = {
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
			}, n.atype = n.atype, n.ATTRIBS = {
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
			}, n.ATTRIBS = n.ATTRIBS, n.eflags = {
				OPTIONAL_ENDTAG: 1,
				EMPTY: 2,
				CDATA: 4,
				RCDATA: 8,
				UNSAFE: 16,
				FOLDABLE: 32,
				SCRIPT: 64,
				STYLE: 128,
				VIRTUALIZED: 256
			}, n.eflags = n.eflags, n.ELEMENTS = {
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
				iframe: 4,
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
			}, n.ELEMENTS = n.ELEMENTS, n.ELEMENT_DOM_INTERFACES = {
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
			}, n.ELEMENT_DOM_INTERFACES = n.ELEMENT_DOM_INTERFACES, n.ueffects = {
				NOT_LOADED: 0,
				SAME_DOCUMENT: 1,
				NEW_DOCUMENT: 2
			}, n.ueffects = n.ueffects, n.URIEFFECTS = {
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
			}, n.URIEFFECTS = n.URIEFFECTS, n.ltypes = {
				UNSANDBOXED: 2,
				SANDBOXED: 1,
				DATA: 0
			}, n.ltypes = n.ltypes, n.LOADERTYPES = {
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
			}, n.LOADERTYPES = n.LOADERTYPES, "i" !== "I".toLowerCase()) throw "I/i problem";
			var o = function(t) {
					function e(t) {
						if (M.hasOwnProperty(t)) return M[t];
						var e = t.match(A);
						if (e) return String.fromCharCode(parseInt(e[1], 10));
						if (e = t.match(O)) return String.fromCharCode(parseInt(e[1], 16));
						if (I && N.test(t)) {
							I.innerHTML = "&" + t + ";";
							var i = I.textContent;
							return M[t] = i, i
						}
						return "&" + t + ";"
					}

					function n(t, i) {
						return e(i)
					}

					function o(t) {
						return t.replace(R, "")
					}

					function s(t) {
						return t.replace(U, n)
					}

					function r(t) {
						return ("" + t).replace(H, "&amp;").replace(j, "&lt;").replace($, "&gt;").replace(F, "&#34;")
					}

					function a(t) {
						return t.replace(B, "&amp;$1").replace(j, "&lt;").replace($, "&gt;")
					}

					function l(t) {
						var e = {
							cdata: t.cdata || t.cdata,
							comment: t.comment || t.comment,
							endDoc: t.endDoc || t.endDoc,
							endTag: t.endTag || t.endTag,
							pcdata: t.pcdata || t.pcdata,
							rcdata: t.rcdata || t.rcdata,
							startDoc: t.startDoc || t.startDoc,
							startTag: t.startTag || t.startTag
						};
						return function(t, i) {
							return u(t, e, i)
						}
					}

					function u(t, e, i) {
						var n = p(t),
							o = {
								noMoreGT: !1,
								noMoreEndComments: !1
							};
						h(e, n, 0, o, i)
					}

					function c(t, e, i, n, o) {
						return function() {
							h(t, e, i, n, o)
						}
					}

					function h(e, i, n, o, s) {
						try {
							e.startDoc && 0 == n && e.startDoc(s);
							for (var r, a, l, u = n, h = i.length; h > u;) {
								var p = i[u++],
									g = i[u];
								switch (p) {
									case "&":
										z.test(g) ? (e.pcdata && e.pcdata("&" + g, s, G, c(e, i, u, o, s)), u++) : e.pcdata && e.pcdata("&amp;", s, G, c(e, i, u, o, s));
										break;
									case "</":
										(r = /^([-\w:]+)[^\'\"]*/.exec(g)) ? r[0].length === g.length && ">" === i[u + 1] ? (u += 2, l = r[1].toLowerCase(), e.endTag && e.endTag(l, s, G, c(e, i, u, o, s))) : u = d(i, u, e, s, G, o): e.pcdata && e.pcdata("&lt;/", s, G, c(e, i, u, o, s));
										break;
									case "<":
										if (r = /^([-\w:]+)\s*\/?/.exec(g))
											if (r[0].length === g.length && ">" === i[u + 1]) {
												u += 2, l = r[1].toLowerCase(), e.startTag && e.startTag(l, [], s, G, c(e, i, u, o, s));
												var v = t.ELEMENTS[l];
												if (v & Z) {
													var _ = {
														name: l,
														next: u,
														eflags: v
													};
													u = m(i, _, e, s, G, o)
												}
											} else u = f(i, u, e, s, G, o);
										else e.pcdata && e.pcdata("&lt;", s, G, c(e, i, u, o, s));
										break;
									case "<!--":
										if (!o.noMoreEndComments) {
											for (a = u + 1; h > a && (">" !== i[a] || !/--$/.test(i[a - 1])); a++);
											if (h > a) {
												if (e.comment) {
													var y = i.slice(u, a).join("");
													e.comment(y.substr(0, y.length - 2), s, G, c(e, i, a + 1, o, s))
												}
												u = a + 1
											} else o.noMoreEndComments = !0
										}
										o.noMoreEndComments && e.pcdata && e.pcdata("&lt;!--", s, G, c(e, i, u, o, s));
										break;
									case "<!":
										if (/^\w/.test(g)) {
											if (!o.noMoreGT) {
												for (a = u + 1; h > a && ">" !== i[a]; a++);
												h > a ? u = a + 1 : o.noMoreGT = !0
											}
											o.noMoreGT && e.pcdata && e.pcdata("&lt;!", s, G, c(e, i, u, o, s))
										} else e.pcdata && e.pcdata("&lt;!", s, G, c(e, i, u, o, s));
										break;
									case "<?":
										if (!o.noMoreGT) {
											for (a = u + 1; h > a && ">" !== i[a]; a++);
											h > a ? u = a + 1 : o.noMoreGT = !0
										}
										o.noMoreGT && e.pcdata && e.pcdata("&lt;?", s, G, c(e, i, u, o, s));
										break;
									case ">":
										e.pcdata && e.pcdata("&gt;", s, G, c(e, i, u, o, s));
										break;
									case "":
										break;
									default:
										e.pcdata && e.pcdata(p, s, G, c(e, i, u, o, s))
								}
							}
							e.endDoc && e.endDoc(s)
						} catch (T) {
							if (T !== G) throw T
						}
					}

					function p(t) {
						var e = /(<\/|<\!--|<[!?]|[&<>])/g;
						if (t += "", W) return t.split(e);
						for (var i, n = [], o = 0; null !== (i = e.exec(t));) n.push(t.substring(o, i.index)), n.push(i[0]), o = i.index + i[0].length;
						return n.push(t.substring(o)), n
					}

					function d(t, e, i, n, o, s) {
						var r = g(t, e);
						return r ? (i.endTag && i.endTag(r.name, n, o, c(i, t, e, s, n)), r.next) : t.length
					}

					function f(t, e, i, n, o, s) {
						var r = g(t, e);
						return r ? (i.startTag && i.startTag(r.name, r.attrs, n, o, c(i, t, r.next, s, n)), r.eflags & Z ? m(t, r, i, n, o, s) : r.next) : t.length
					}

					function m(e, i, n, o, s, r) {
						var l = e.length;
						V.hasOwnProperty(i.name) || (V[i.name] = new RegExp("^" + i.name + "(?:[\\s\\/]|$)", "i"));
						for (var u = V[i.name], h = i.next, p = i.next + 1; l > p && ("</" !== e[p - 1] || !u.test(e[p])); p++);
						l > p && (p -= 1);
						var d = e.slice(h, p).join("");
						if (i.eflags & t.eflags.CDATA) n.cdata && n.cdata(d, o, s, c(n, e, p, r, o));
						else {
							if (!(i.eflags & t.eflags.RCDATA)) throw new Error("bug");
							n.rcdata && n.rcdata(a(d), o, s, c(n, e, p, r, o))
						}
						return p
					}

					function g(e, i) {
						var n = /^([-\w:]+)/.exec(e[i]),
							o = {};
						o.name = n[1].toLowerCase(), o.eflags = t.ELEMENTS[o.name];
						for (var s = e[i].substr(n[0].length), r = i + 1, a = e.length; a > r && ">" !== e[r]; r++) s += e[r];
						if (r >= a) return void 0;
						for (var l = [];
							"" !== s;)
							if (n = q.exec(s)) {
								if (n[4] && !n[5] || n[6] && !n[7]) {
									for (var u = n[4] || n[6], c = !1, h = [s, e[r++]]; a > r; r++) {
										if (c) {
											if (">" === e[r]) break
										} else 0 <= e[r].indexOf(u) && (c = !0);
										h.push(e[r])
									}
									if (r >= a) break;
									s = h.join("");
									continue
								}
								var p = n[1].toLowerCase(),
									d = n[2] ? v(n[3]) : "";
								l.push(p, d), s = s.substr(n[0].length)
							} else s = s.replace(/^[\s\S][^a-z\s]*/, "");
						return o.attrs = l, o.next = r + 1, o
					}

					function v(t) {
						var e = t.charCodeAt(0);
						return (34 === e || 39 === e) && (t = t.substr(1, t.length - 2)), s(o(t))
					}

					function _(e) {
						var i, n, o = function(t, e) {
							n || e.push(t)
						};
						return l({
							startDoc: function() {
								i = [], n = !1
							},
							startTag: function(o, s, a) {
								if (!n && t.ELEMENTS.hasOwnProperty(o)) {
									var l = t.ELEMENTS[o];
									if (!(l & t.eflags.FOLDABLE)) {
										var u = e(o, s);
										if (!u) return void(n = !(l & t.eflags.EMPTY));
										if ("object" != typeof u) throw new Error("tagPolicy did not return object (old API?)");
										if (!("attribs" in u)) throw new Error("tagPolicy gave no attribs");
										s = u.attribs;
										var c, h;
										if ("tagName" in u ? (h = u.tagName, c = t.ELEMENTS[h]) : (h = o, c = l), l & t.eflags.OPTIONAL_ENDTAG) {
											var p = i[i.length - 1];
											!p || p.orig !== o || p.rep === h && o === h || a.push("</", p.rep, ">")
										}
										l & t.eflags.EMPTY || i.push({
											orig: o,
											rep: h
										}), a.push("<", h);
										for (var d = 0, f = s.length; f > d; d += 2) {
											var m = s[d],
												g = s[d + 1];
											null !== g && void 0 !== g && a.push(" ", m, '="', r(g), '"')
										}
										a.push(">"), l & t.eflags.EMPTY && !(c & t.eflags.EMPTY) && a.push("</", h, ">")
									}
								}
							},
							endTag: function(e, o) {
								if (n) return void(n = !1);
								if (t.ELEMENTS.hasOwnProperty(e)) {
									var s = t.ELEMENTS[e];
									if (!(s & (t.eflags.EMPTY | t.eflags.FOLDABLE))) {
										var r;
										if (s & t.eflags.OPTIONAL_ENDTAG)
											for (r = i.length; --r >= 0;) {
												var a = i[r].orig;
												if (a === e) break;
												if (!(t.ELEMENTS[a] & t.eflags.OPTIONAL_ENDTAG)) return
											} else
												for (r = i.length; --r >= 0 && i[r].orig !== e;);
										if (0 > r) return;
										for (var l = i.length; --l > r;) {
											var u = i[l].rep;
											t.ELEMENTS[u] & t.eflags.OPTIONAL_ENDTAG || o.push("</", u, ">")
										}
										r < i.length && (e = i[r].rep), i.length = r, o.push("</", e, ">")
									}
								}
							},
							pcdata: o,
							rcdata: o,
							cdata: o,
							endDoc: function(t) {
								for (; i.length; i.length--) t.push("</", i[i.length - 1].rep, ">")
							}
						})
					}

					function y(t, e, n, o, s) {
						if (!s) return null;
						try {
							var r = i.parse("" + t);
							if (r && (!r.hasScheme() || X.test(r.getScheme()))) {
								var a = s(r, e, n, o);
								return a ? a.toString() : null
							}
						} catch (l) {
							return null
						}
						return null
					}

					function T(t, e, i, n, o) {
						if (i || t(e + " removed", {
							change: "removed",
							tagName: e
						}), n !== o) {
							var s = "changed";
							n && !o ? s = "removed" : !n && o && (s = "added"), t(e + "." + i + " " + s, {
								change: s,
								tagName: e,
								attribName: i,
								oldValue: n,
								newValue: o
							})
						}
					}

					function b(t, e, i) {
						var n;
						return n = e + "::" + i, t.hasOwnProperty(n) ? t[n] : (n = "*::" + i, t.hasOwnProperty(n) ? t[n] : void 0)
					}

					function L(e, i) {
						return b(t.LOADERTYPES, e, i)
					}

					function w(e, i) {
						return b(t.URIEFFECTS, e, i)
					}

					function x(e, i, n, o, s) {
						for (var r = 0; r < i.length; r += 2) {
							var a, l = i[r],
								u = i[r + 1],
								c = u,
								h = null;
							if (a = e + "::" + l, (t.ATTRIBS.hasOwnProperty(a) || (a = "*::" + l, t.ATTRIBS.hasOwnProperty(a))) && (h = t.ATTRIBS[a]), null !== h) switch (h) {
								case t.atype.NONE:
									break;
								case t.atype.SCRIPT:
									u = null, s && T(s, e, l, c, u);
									break;
								case t.atype.STYLE:
									if ("undefined" == typeof S) {
										u = null, s && T(s, e, l, c, u);
										break
									}
									var p = [];
									S(u, {
										declaration: function(e, i) {
											var o = e.toLowerCase(),
												s = D[o];
											s && (k(o, s, i, n ? function(e) {
												return y(e, t.ueffects.SAME_DOCUMENT, t.ltypes.SANDBOXED, {
													TYPE: "CSS",
													CSS_PROP: o
												}, n)
											} : null), p.push(e + ": " + i.join(" ")))
										}
									}), u = p.length > 0 ? p.join(" ; ") : null, s && T(s, e, l, c, u);
									break;
								case t.atype.ID:
								case t.atype.IDREF:
								case t.atype.IDREFS:
								case t.atype.GLOBAL_NAME:
								case t.atype.LOCAL_NAME:
								case t.atype.CLASSES:
									u = o ? o(u) : u, s && T(s, e, l, c, u);
									break;
								case t.atype.URI:
									u = y(u, w(e, l), L(e, l), {
										TYPE: "MARKUP",
										XML_ATTR: l,
										XML_TAG: e
									}, n), s && T(s, e, l, c, u);
									break;
								case t.atype.URI_FRAGMENT:
									u && "#" === u.charAt(0) ? (u = u.substring(1), u = o ? o(u) : u, null !== u && void 0 !== u && (u = "#" + u)) : u = null, s && T(s, e, l, c, u);
									break;
								default:
									u = null, s && T(s, e, l, c, u)
							} else u = null, s && T(s, e, l, c, u);
							i[r + 1] = u
						}
						return i
					}

					function C(e, i, n) {
						return function(o, s) {
							return t.ELEMENTS[o] & t.eflags.UNSAFE ? void(n && T(n, o, void 0, void 0, void 0)) : {
								attribs: x(o, s, e, i, n)
							}
						}
					}

					function E(t, e) {
						var i = [];
						return _(e)(t, i), i.join("")
					}

					function P(t, e, i, n) {
						var o = C(e, i, n);
						return E(t, o)
					}
					var S, k, D;
					"undefined" != typeof window && (S = window.parseCssDeclarations, k = window.sanitizeCssProperty, D = window.cssSchema);
					var M = {
							lt: "<",
							LT: "<",
							gt: ">",
							GT: ">",
							amp: "&",
							AMP: "&",
							quot: '"',
							apos: "'",
							nbsp: "鑱�"
						},
						A = /^#(\d+)$/,
						O = /^#x([0-9A-Fa-f]+)$/,
						N = /^[A-Za-z][A-za-z0-9]+$/,
						I = "undefined" != typeof window && window.document ? window.document.createElement("textarea") : null,
						R = /\0/g,
						U = /&(#[0-9]+|#[xX][0-9A-Fa-f]+|\w+);/g,
						z = /^(#[0-9]+|#[xX][0-9A-Fa-f]+|\w+);/,
						H = /&/g,
						B = /&([^a-z#]|#(?:[^0-9x]|x(?:[^0-9a-f]|$)|$)|$)/gi,
						j = /[<]/g,
						$ = />/g,
						F = /\"/g,
						q = new RegExp("^\\s*([-.:\\w]+)(?:\\s*(=)\\s*((\")[^\"]*(\"|$)|(')[^']*('|$)|(?=[a-z][-\\w]*\\s*=)|[^\"'\\s]*))?", "i"),
						W = 3 === "a,b".split(/(,)/).length,
						Z = t.eflags.CDATA | t.eflags.RCDATA,
						G = {},
						V = {},
						X = /^(?:https?|mailto|data)$/i,
						J = {};
					return J.escapeAttrib = J.escapeAttrib = r, J.makeHtmlSanitizer = J.makeHtmlSanitizer = _, J.makeSaxParser = J.makeSaxParser = l, J.makeTagPolicy = J.makeTagPolicy = C, J.normalizeRCData = J.normalizeRCData = a, J.sanitize = J.sanitize = P, J.sanitizeAttribs = J.sanitizeAttribs = x, J.sanitizeWithPolicy = J.sanitizeWithPolicy = E, J.unescapeEntities = J.unescapeEntities = s, J
				}(n),
				s = o.sanitize;
			n.ATTRIBS["*::style"] = 0, n.ELEMENTS.style = 0, n.ATTRIBS["a::target"] = 0, n.ELEMENTS.video = 0, n.ATTRIBS["video::src"] = 0, n.ATTRIBS["video::poster"] = 0, n.ATTRIBS["video::controls"] = 0, n.ELEMENTS.audio = 0, n.ATTRIBS["audio::src"] = 0, n.ATTRIBS["video::autoplay"] = 0, n.ATTRIBS["video::controls"] = 0, "undefined" != typeof e && (e.exports = s)
		}, {}
	],
	6: [
		function(t, e) {
			e.exports = {
				author: "Mapbox",
				name: "mapbox.js",
				description: "mapbox javascript api",
				version: "2.1.2",
				homepage: "http://mapbox.com/",
				repository: {
					type: "git",
					url: "git://github.com/mapbox/mapbox.js.git"
				},
				main: "src/index.js",
				dependencies: {
					leaflet: "0.7.3",
					mustache: "0.7.3",
					corslite: "0.0.6",
					"sanitize-caja": "0.1.2"
				},
				scripts: {
					test: "jshint src/*.js && mocha-phantomjs test/index.html"
				},
				devDependencies: {
					"leaflet-hash": "0.2.1",
					"leaflet-fullscreen": "0.0.0",
					"uglify-js": "2.4.8",
					mocha: "1.17.1",
					"expect.js": "0.3.1",
					sinon: "1.10.2",
					"mocha-phantomjs": "3.1.6",
					happen: "0.1.3",
					browserify: "3.23.1",
					jshint: "2.4.4",
					"clean-css": "~2.0.7",
					minimist: "0.0.5",
					marked: "~0.3.0"
				},
				optionalDependencies: {},
				engines: {
					node: "*"
				}
			}
		}, {}
	],
	7: [
		function(t, e) {
			"use strict";
			e.exports = {
				HTTP_URL: "http://a.tiles.mapbox.com/v4",
				HTTPS_URL: "https://a.tiles.mapbox.com/v4",
				FORCE_HTTPS: !1,
				REQUIRE_ACCESS_TOKEN: !0
			}
		}, {}
	],
	8: [
		function(t, e) {
			"use strict";
			var i = t("./util"),
				n = t("./url"),
				o = t("./request"),
				s = t("./marker"),
				r = t("./simplestyle"),
				a = L.FeatureGroup.extend({
					options: {
						filter: function() {
							return !0
						},
						sanitizer: t("sanitize-caja"),
						style: r.style,
						popupOptions: {
							closeButton: !1
						}
					},
					initialize: function(t, e) {
						L.setOptions(this, e), this._layers = {}, "string" == typeof t ? i.idUrl(t, this) : t && "object" == typeof t && this.setGeoJSON(t)
					},
					setGeoJSON: function(t) {
						return this._geojson = t, this.clearLayers(), this._initialize(t), this
					},
					getGeoJSON: function() {
						return this._geojson
					},
					loadURL: function(t) {
						return this._request && "abort" in this._request && this._request.abort(), this._request = o(t, L.bind(function(e, n) {
							this._request = null, e && "abort" !== e.type ? (i.log("could not load features at " + t), this.fire("error", {
								error: e
							})) : n && (this.setGeoJSON(n), this.fire("ready"))
						}, this)), this
					},
					loadID: function(t) {
						return this.loadURL(n("/" + t + "/features.json", this.options.accessToken))
					},
					setFilter: function(t) {
						return this.options.filter = t, this._geojson && (this.clearLayers(), this._initialize(this._geojson)), this
					},
					getFilter: function() {
						return this.options.filter
					},
					_initialize: function(t) {
						var e, i, n = L.Util.isArray(t) ? t : t.features;
						if (n)
							for (e = 0, i = n.length; i > e; e++)(n[e].geometries || n[e].geometry || n[e].features) && this._initialize(n[e]);
						else if (this.options.filter(t)) {
							var o = {
									accessToken: this.options.accessToken
								},
								a = L.GeoJSON.geometryToLayer(t, function(t, e) {
									return s.style(t, e, o)
								}),
								l = s.createPopup(t, this.options.sanitizer);
							"setStyle" in a && a.setStyle(r.style(t)), a.feature = t, l && a.bindPopup(l, this.options.popupOptions), this.addLayer(a)
						}
					}
				});
			e.exports.FeatureLayer = a, e.exports.featureLayer = function(t, e) {
				return new a(t, e)
			}
		}, {
			"./marker": 21,
			"./request": 22,
			"./simplestyle": 24,
			"./url": 26,
			"./util": 27,
			"sanitize-caja": 4
		}
	],
	9: [
		function(t, e) {
			"use strict";
			var i = t("./util"),
				n = t("./url"),
				o = t("./request");
			e.exports = function(t, e) {
				var s = {};
				return i.strict(t, "string"), -1 === t.indexOf("/") && (t = n("/geocode/" + t + "/{query}.json", e && e.accessToken)), s.getURL = function() {
					return t
				}, s.queryURL = function(t) {
					if ("string" != typeof t) {
						for (var e = [], i = 0; i < t.length; i++) e[i] = encodeURIComponent(t[i]);
						return L.Util.template(s.getURL(), {
							query: e.join(";")
						})
					}
					return L.Util.template(s.getURL(), {
						query: encodeURIComponent(t)
					})
				}, s.query = function(t, e) {
					return i.strict(e, "function"), o(s.queryURL(t), function(t, n) {
						if (n && (n.length || n.features)) {
							var o = {
								results: n
							};
							n.features && n.features.length && (o.latlng = [n.features[0].center[1], n.features[0].center[0]], n.features[0].bbox && (o.bounds = n.features[0].bbox, o.lbounds = i.lbounds(o.bounds))), e(null, o)
						} else e(t || !0)
					}), s
				}, s.reverseQuery = function(t, e) {
					function i(t) {
						return void 0 !== t.lat && void 0 !== t.lng ? t.lng + "," + t.lat : void 0 !== t.lat && void 0 !== t.lon ? t.lon + "," + t.lat : t[0] + "," + t[1]
					}
					var n = "";
					if (t.length && t[0].length) {
						for (var r = 0, a = []; r < t.length; r++) a.push(i(t[r]));
						n = a.join(";")
					} else n = i(t);
					return o(s.queryURL(n), function(t, i) {
						e(t, i)
					}), s
				}, s
			}
		}, {
			"./request": 22,
			"./url": 26,
			"./util": 27
		}
	],
	10: [
		function(t, e) {
			"use strict";
			var i = t("./geocoder"),
				n = t("./util"),
				o = L.Control.extend({
					includes: L.Mixin.Events,
					options: {
						position: "topleft",
						pointZoom: 16,
						keepOpen: !1,
						autocomplete: !1
					},
					initialize: function(t, e) {
						L.Util.setOptions(this, e), this.setURL(t), this._updateSubmit = L.bind(this._updateSubmit, this), this._updateAutocomplete = L.bind(this._updateAutocomplete, this), this._chooseResult = L.bind(this._chooseResult, this)
					},
					setURL: function(t) {
						return this.geocoder = i(t, {
							accessToken: this.options.accessToken
						}), this
					},
					getURL: function() {
						return this.geocoder.getURL()
					},
					setID: function(t) {
						return this.setURL(t)
					},
					setTileJSON: function(t) {
						return this.setURL(t.geocoder)
					},
					_toggle: function(t) {
						t && L.DomEvent.stop(t), L.DomUtil.hasClass(this._container, "active") ? (L.DomUtil.removeClass(this._container, "active"), this._results.innerHTML = "", this._input.blur()) : (L.DomUtil.addClass(this._container, "active"), this._input.focus(), this._input.select())
					},
					_closeIfOpen: function() {
						L.DomUtil.hasClass(this._container, "active") && !this.options.keepOpen && (L.DomUtil.removeClass(this._container, "active"), this._results.innerHTML = "", this._input.blur())
					},
					onAdd: function(t) {
						var e = L.DomUtil.create("div", "leaflet-control-mapbox-geocoder leaflet-bar leaflet-control"),
							i = L.DomUtil.create("a", "leaflet-control-mapbox-geocoder-toggle mapbox-icon mapbox-icon-geocoder", e),
							n = L.DomUtil.create("div", "leaflet-control-mapbox-geocoder-results", e),
							o = L.DomUtil.create("div", "leaflet-control-mapbox-geocoder-wrap", e),
							s = L.DomUtil.create("form", "leaflet-control-mapbox-geocoder-form", o),
							r = L.DomUtil.create("input", "", s);
						return i.href = "#", i.innerHTML = "&nbsp;", r.type = "text", r.setAttribute("placeholder", "Search"), L.DomEvent.addListener(s, "submit", this._geocode, this), L.DomEvent.addListener(r, "keyup", this._autocomplete, this), L.DomEvent.disableClickPropagation(e), this._map = t, this._results = n, this._input = r, this._form = s, this.options.keepOpen ? L.DomUtil.addClass(e, "active") : (this._map.on("click", this._closeIfOpen, this), L.DomEvent.addListener(i, "click", this._toggle, this)), e
					},
					_updateSubmit: function(t, e) {
						if (L.DomUtil.removeClass(this._container, "searching"), this._results.innerHTML = "", t || !e) this.fire("error", {
							error: t
						});
						else {
							var i = [];
							e.results && e.results.features && (i = e.results.features), 1 === i.length ? (this.fire("autoselect", {
								feature: i[0]
							}), this.fire("found", {
								results: e.results
							}), this._chooseResult(i[0]), this._closeIfOpen()) : i.length > 1 ? (this.fire("found", {
								results: e.results
							}), this._displayResults(i)) : this._displayResults(i)
						}
					},
					_updateAutocomplete: function(t, e) {
						if (this._results.innerHTML = "", t || !e) this.fire("error", {
							error: t
						});
						else {
							var i = [];
							e.results && e.results.features && (i = e.results.features), this._displayResults(i)
						}
					},
					_displayResults: function(t) {
						for (var e = 0, i = Math.min(t.length, 5); i > e; e++) {
							var n = t[e],
								o = n.place_name;
							if (o.length) {
								var s = L.DomUtil.create("a", "", this._results),
									r = "innerText" in s ? "innerText" : "textContent";
								s[r] = o, s.href = "#", L.bind(function(t) {
									L.DomEvent.addListener(s, "click", function(e) {
										this._chooseResult(t), L.DomEvent.stop(e), this.fire("select", {
											feature: t
										})
									}, this)
								}, this)(n)
							}
						}
						if (t.length > 5) {
							var a = L.DomUtil.create("span", "", this._results);
							a.innerHTML = "Top 5 of " + t.length + "  results"
						}
					},
					_chooseResult: function(t) {
						t.bbox ? this._map.fitBounds(n.lbounds(t.bbox)) : t.center && this._map.setView([t.center[1], t.center[0]], void 0 === this._map.getZoom() ? this.options.pointZoom : Math.max(this._map.getZoom(), this.options.pointZoom))
					},
					_geocode: function(t) {
						return L.DomEvent.preventDefault(t), "" === this._input.value ? this._updateSubmit() : (L.DomUtil.addClass(this._container, "searching"), void this.geocoder.query(this._input.value, this._updateSubmit))
					},
					_autocomplete: function() {
						return this.options.autocomplete ? "" === this._input.value ? this._updateAutocomplete() : void this.geocoder.query(this._input.value, this._updateAutocomplete) : void 0
					}
				});
			e.exports.GeocoderControl = o, e.exports.geocoderControl = function(t, e) {
				return new o(t, e)
			}
		}, {
			"./geocoder": 9,
			"./util": 27
		}
	],
	11: [
		function(t, e) {
			"use strict";

			function i(t) {
				return t >= 93 && t--, t >= 35 && t--, t - 32
			}
			e.exports = function(t) {
				return function(e, n) {
					if (t) {
						var o = i(t.grid[n].charCodeAt(e)),
							s = t.keys[o];
						return t.data[s]
					}
				}
			}
		}, {}
	],
	12: [
		function(t, e) {
			"use strict";
			var i = t("./util"),
				n = t("mustache"),
				o = L.Control.extend({
					options: {
						pinnable: !0,
						follow: !1,
						sanitizer: t("sanitize-caja"),
						touchTeaser: !0,
						location: !0
					},
					_currentContent: "",
					_pinned: !1,
					initialize: function(t, e) {
						L.Util.setOptions(this, e), i.strict_instance(t, L.Class, "L.mapbox.gridLayer"), this._layer = t
					},
					setTemplate: function(t) {
						return i.strict(t, "string"), this.options.template = t, this
					},
					_template: function(t, e) {
						if (e) {
							var i = this.options.template || this._layer.getTileJSON().template;
							if (i) {
								var o = {};
								return o["__" + t + "__"] = !0, this.options.sanitizer(n.to_html(i, L.extend(o, e)))
							}
						}
					},
					_show: function(t, e) {
						t !== this._currentContent && (this._currentContent = t, this.options.follow ? (this._popup.setContent(t).setLatLng(e.latLng), this._map._popup !== this._popup && this._popup.openOn(this._map)) : (this._container.style.display = "block", this._contentWrapper.innerHTML = t))
					},
					hide: function() {
						return this._pinned = !1, this._currentContent = "", this._map.closePopup(), this._container.style.display = "none", this._contentWrapper.innerHTML = "", L.DomUtil.removeClass(this._container, "closable"), this
					},
					_mouseover: function(t) {
						if (t.data ? L.DomUtil.addClass(this._map._container, "map-clickable") : L.DomUtil.removeClass(this._map._container, "map-clickable"), !this._pinned) {
							var e = this._template("teaser", t.data);
							e ? this._show(e, t) : this.hide()
						}
					},
					_mousemove: function(t) {
						this._pinned || this.options.follow && this._popup.setLatLng(t.latLng)
					},
					_navigateTo: function(t) {
						window.top.location.href = t
					},
					_click: function(t) {
						var e = this._template("location", t.data);
						if (this.options.location && e && 0 === e.search(/^https?:/)) return this._navigateTo(this._template("location", t.data));
						if (this.options.pinnable) {
							var i = this._template("full", t.data);
							!i && this.options.touchTeaser && L.Browser.touch && (i = this._template("teaser", t.data)), i ? (L.DomUtil.addClass(this._container, "closable"), this._pinned = !0, this._show(i, t)) : this._pinned && (L.DomUtil.removeClass(this._container, "closable"), this._pinned = !1, this.hide())
						}
					},
					_onPopupClose: function() {
						this._currentContent = null, this._pinned = !1
					},
					_createClosebutton: function(t, e) {
						var i = L.DomUtil.create("a", "close", t);
						return i.innerHTML = "close", i.href = "#", i.title = "close", L.DomEvent.on(i, "click", L.DomEvent.stopPropagation).on(i, "mousedown", L.DomEvent.stopPropagation).on(i, "dblclick", L.DomEvent.stopPropagation).on(i, "click", L.DomEvent.preventDefault).on(i, "click", e, this), i
					},
					onAdd: function(t) {
						this._map = t;
						var e = "leaflet-control-grid map-tooltip",
							i = L.DomUtil.create("div", e),
							n = L.DomUtil.create("div", "map-tooltip-content");
						return i.style.display = "none", this._createClosebutton(i, this.hide), i.appendChild(n), this._contentWrapper = n, this._popup = new L.Popup({
							autoPan: !1,
							closeOnClick: !1
						}), t.on("popupclose", this._onPopupClose, this), L.DomEvent.disableClickPropagation(i).addListener(i, "mousewheel", L.DomEvent.stopPropagation), this._layer.on("mouseover", this._mouseover, this).on("mousemove", this._mousemove, this).on("click", this._click, this), i
					},
					onRemove: function(t) {
						t.off("popupclose", this._onPopupClose, this), this._layer.off("mouseover", this._mouseover, this).off("mousemove", this._mousemove, this).off("click", this._click, this)
					}
				});
			e.exports.GridControl = o, e.exports.gridControl = function(t, e) {
				return new o(t, e)
			}
		}, {
			"./util": 27,
			mustache: 3,
			"sanitize-caja": 4
		}
	],
	13: [
		function(t, e) {
			"use strict";
			var i = t("./util"),
				n = t("./request"),
				o = t("./grid"),
				s = L.Class.extend({
					includes: [L.Mixin.Events, t("./load_tilejson")],
					options: {
						template: function() {
							return ""
						}
					},
					_mouseOn: null,
					_tilejson: {},
					_cache: {},
					initialize: function(t, e) {
						L.Util.setOptions(this, e), this._loadTileJSON(t)
					},
					_setTileJSON: function(t) {
						return i.strict(t, "object"), L.extend(this.options, {
							grids: t.grids,
							minZoom: t.minzoom,
							maxZoom: t.maxzoom,
							bounds: t.bounds && i.lbounds(t.bounds)
						}), this._tilejson = t, this._cache = {}, this._update(), this
					},
					getTileJSON: function() {
						return this._tilejson
					},
					active: function() {
						return !!(this._map && this.options.grids && this.options.grids.length)
					},
					addTo: function(t) {
						return t.addLayer(this), this
					},
					onAdd: function(t) {
						this._map = t, this._update(), this._map.on("click", this._click, this).on("mousemove", this._move, this).on("moveend", this._update, this)
					},
					onRemove: function() {
						this._map.off("click", this._click, this).off("mousemove", this._move, this).off("moveend", this._update, this)
					},
					getData: function(t, e) {
						if (this.active()) {
							var i = this._map,
								n = i.project(t.wrap()),
								o = 256,
								s = 4,
								r = Math.floor(n.x / o),
								a = Math.floor(n.y / o),
								l = i.options.crs.scale(i.getZoom()) / o;
							return r = (r + l) % l, a = (a + l) % l, this._getTile(i.getZoom(), r, a, function(t) {
								var i = Math.floor((n.x - r * o) / s),
									l = Math.floor((n.y - a * o) / s);
								e(t(i, l))
							}), this
						}
					},
					_click: function(t) {
						this.getData(t.latlng, L.bind(function(e) {
							this.fire("click", {
								latLng: t.latlng,
								data: e
							})
						}, this))
					},
					_move: function(t) {
						this.getData(t.latlng, L.bind(function(e) {
							e !== this._mouseOn ? (this._mouseOn && this.fire("mouseout", {
								latLng: t.latlng,
								data: this._mouseOn
							}), this.fire("mouseover", {
								latLng: t.latlng,
								data: e
							}), this._mouseOn = e) : this.fire("mousemove", {
								latLng: t.latlng,
								data: e
							})
						}, this))
					},
					_getTileURL: function(t) {
						var e = this.options.grids,
							i = (t.x + t.y) % e.length,
							n = e[i];
						return L.Util.template(n, t)
					},
					_update: function() {
						if (this.active()) {
							var t = this._map.getPixelBounds(),
								e = this._map.getZoom(),
								i = 256;
							if (!(e > this.options.maxZoom || e < this.options.minZoom))
								for (var n = L.bounds(t.min.divideBy(i)._floor(), t.max.divideBy(i)._floor()), o = this._map.options.crs.scale(e) / i, s = n.min.x; s <= n.max.x; s++)
									for (var r = n.min.y; r <= n.max.y; r++) this._getTile(e, (s % o + o) % o, (r % o + o) % o)
						}
					},
					_getTile: function(t, e, i, s) {
						var r = t + "_" + e + "_" + i,
							a = L.point(e, i);
						if (a.z = t, this._tileShouldBeLoaded(a)) {
							if (r in this._cache) {
								if (!s) return;
								return void("function" == typeof this._cache[r] ? s(this._cache[r]) : this._cache[r].push(s))
							}
							this._cache[r] = [], s && this._cache[r].push(s), n(this._getTileURL(a), L.bind(function(t, e) {
								var i = this._cache[r];
								this._cache[r] = o(e);
								for (var n = 0; n < i.length; ++n) i[n](this._cache[r])
							}, this))
						}
					},
					_tileShouldBeLoaded: function(t) {
						if (t.z > this.options.maxZoom || t.z < this.options.minZoom) return !1;
						if (this.options.bounds) {
							var e = 256,
								i = t.multiplyBy(e),
								n = i.add(new L.Point(e, e)),
								o = this._map.unproject(i),
								s = this._map.unproject(n),
								r = new L.LatLngBounds([o, s]);
							if (!this.options.bounds.intersects(r)) return !1
						}
						return !0
					}
				});
			e.exports.GridLayer = s, e.exports.gridLayer = function(t, e) {
				return new s(t, e)
			}
		}, {
			"./grid": 11,
			"./load_tilejson": 18,
			"./request": 22,
			"./util": 27
		}
	],
	14: [
		function(t) {
			t("./leaflet"), t("./mapbox")
		}, {
			"./leaflet": 16,
			"./mapbox": 20
		}
	],
	15: [
		function(t, e) {
			"use strict";
			var i = L.Control.extend({
				options: {
					position: "bottomright",
					sanitizer: t("sanitize-caja")
				},
				initialize: function(t) {
					L.setOptions(this, t), this._info = {}
				},
				onAdd: function(t) {
					this._container = L.DomUtil.create("div", "mapbox-control-info mapbox-small"), this._content = L.DomUtil.create("div", "map-info-container", this._container);
					var e = L.DomUtil.create("a", "mapbox-info-toggle mapbox-icon mapbox-icon-info", this._container);
					e.href = "#", L.DomEvent.addListener(e, "click", this._showInfo, this), L.DomEvent.disableClickPropagation(this._container);
					for (var i in t._layers) t._layers[i].getAttribution && this.addInfo(t._layers[i].getAttribution());
					return t.on("layeradd", this._onLayerAdd, this).on("layerremove", this._onLayerRemove, this), this._update(), this._container
				},
				onRemove: function(t) {
					t.off("layeradd", this._onLayerAdd, this).off("layerremove", this._onLayerRemove, this)
				},
				addInfo: function(t) {
					return t ? (this._info[t] || (this._info[t] = 0), this._info[t] = !0, this._update()) : this
				},
				removeInfo: function(t) {
					return t ? (this._info[t] && (this._info[t] = !1), this._update()) : this
				},
				_showInfo: function(t) {
					return L.DomEvent.preventDefault(t), this._active === !0 ? this._hidecontent() : (L.DomUtil.addClass(this._container, "active"), this._active = !0, void this._update())
				},
				_hidecontent: function() {
					this._content.innerHTML = "", this._active = !1, L.DomUtil.removeClass(this._container, "active")
				},
				_update: function() {
					if (!this._map) return this;
					this._content.innerHTML = "";
					var t = "none",
						e = [];
					for (var i in this._info) this._info.hasOwnProperty(i) && this._info[i] && (e.push(this.options.sanitizer(i)), t = "block");
					return this._content.innerHTML += e.join(" | "), this._container.style.display = t, this
				},
				_onLayerAdd: function(t) {
					t.layer.getAttribution && t.layer.getAttribution() ? this.addInfo(t.layer.getAttribution()) : "on" in t.layer && t.layer.getAttribution && t.layer.on("ready", L.bind(function() {
						this.addInfo(t.layer.getAttribution())
					}, this))
				},
				_onLayerRemove: function(t) {
					t.layer.getAttribution && this.removeInfo(t.layer.getAttribution())
				}
			});
			e.exports.InfoControl = i, e.exports.infoControl = function(t) {
				return new i(t)
			}
		}, {
			"sanitize-caja": 4
		}
	],
	16: [
		function(t) {
			window.L = t("leaflet/dist/leaflet-src")
		}, {
			"leaflet/dist/leaflet-src": 2
		}
	],
	17: [
		function(t, e) {
			"use strict";
			var i = L.Control.extend({
				options: {
					position: "bottomright",
					sanitizer: t("sanitize-caja")
				},
				initialize: function(t) {
					L.setOptions(this, t), this._legends = {}
				},
				onAdd: function() {
					return this._container = L.DomUtil.create("div", "map-legends wax-legends"), L.DomEvent.disableClickPropagation(this._container), this._update(), this._container
				},
				addLegend: function(t) {
					return t ? (this._legends[t] || (this._legends[t] = 0), this._legends[t] ++, this._update()) : this
				},
				removeLegend: function(t) {
					return t ? (this._legends[t] && this._legends[t] --, this._update()) : this
				},
				_update: function() {
					if (!this._map) return this;
					this._container.innerHTML = "";
					var t = "none";
					for (var e in this._legends)
						if (this._legends.hasOwnProperty(e) && this._legends[e]) {
							var i = L.DomUtil.create("div", "map-legend wax-legend", this._container);
							i.innerHTML = this.options.sanitizer(e), t = "block"
						}
					return this._container.style.display = t, this
				}
			});
			e.exports.LegendControl = i, e.exports.legendControl = function(t) {
				return new i(t)
			}
		}, {
			"sanitize-caja": 4
		}
	],
	18: [
		function(t, e) {
			"use strict";
			var i = t("./request"),
				n = t("./url"),
				o = t("./util");
			e.exports = {
				_loadTileJSON: function(t) {
					"string" == typeof t ? (t = n.tileJSON(t, this.options && this.options.accessToken), i(t, L.bind(function(e, i) {
						e ? (o.log("could not load TileJSON at " + t), this.fire("error", {
							error: e
						})) : i && (this._setTileJSON(i), this.fire("ready"))
					}, this))) : t && "object" == typeof t && this._setTileJSON(t)
				}
			}
		}, {
			"./request": 22,
			"./url": 26,
			"./util": 27
		}
	],
	19: [
		function(t, e) {
			"use strict";

			function i(t, e) {
				return !e || t.accessToken ? t : L.extend({
					accessToken: e
				}, t)
			}
			var n = (t("./util"), t("./tile_layer").tileLayer),
				o = t("./feature_layer").featureLayer,
				s = t("./grid_layer").gridLayer,
				r = t("./grid_control").gridControl,
				a = t("./info_control").infoControl,
				l = t("./share_control").shareControl,
				u = t("./legend_control").legendControl,
				c = L.Map.extend({
					includes: [t("./load_tilejson")],
					options: {
						tileLayer: {},
						featureLayer: {},
						gridLayer: {},
						legendControl: {},
						gridControl: {},
						infoControl: !1,
						shareControl: !1
					},
					_tilejson: {},
					initialize: function(t, e, c) {
						L.Map.prototype.initialize.call(this, t, L.extend({}, L.Map.prototype.options, c)), this.attributionControl && this.attributionControl.setPrefix(""), this.options.tileLayer && (this.tileLayer = n(void 0, i(this.options.tileLayer, this.options.accessToken)), this.addLayer(this.tileLayer)), this.options.featureLayer && (this.featureLayer = o(void 0, i(this.options.featureLayer, this.options.accessToken)), this.addLayer(this.featureLayer)), this.options.gridLayer && (this.gridLayer = s(void 0, i(this.options.gridLayer, this.options.accessToken)), this.addLayer(this.gridLayer)), this.options.gridLayer && this.options.gridControl && (this.gridControl = r(this.gridLayer, this.options.gridControl), this.addControl(this.gridControl)), this.options.infoControl && (this.infoControl = a(this.options.infoControl), this.addControl(this.infoControl)), this.options.legendControl && (this.legendControl = u(this.options.legendControl), this.addControl(this.legendControl)), this.options.shareControl && (this.shareControl = l(void 0, i(this.options.shareControl, this.options.accessToken)), this.addControl(this.shareControl)), this._loadTileJSON(e)
					},
					addLayer: function(t) {
						return "on" in t && t.on("ready", L.bind(function() {
							this._updateLayer(t)
						}, this)), L.Map.prototype.addLayer.call(this, t)
					},
					_setTileJSON: function(t) {
						return this._tilejson = t, this._initialize(t), this
					},
					getTileJSON: function() {
						return this._tilejson
					},
					_initialize: function(t) {
						if (this.tileLayer && (this.tileLayer._setTileJSON(t), this._updateLayer(this.tileLayer)), this.featureLayer && !this.featureLayer.getGeoJSON() && t.data && t.data[0] && this.featureLayer.loadURL(t.data[0]), this.gridLayer && (this.gridLayer._setTileJSON(t), this._updateLayer(this.gridLayer)), this.infoControl && t.attribution && this.infoControl.addInfo(t.attribution), this.legendControl && t.legend && this.legendControl.addLegend(t.legend), this.shareControl && this.shareControl._setTileJSON(t), !this._loaded && t.center) {
							var e = void 0 !== this.getZoom() ? this.getZoom() : t.center[2],
								i = L.latLng(t.center[1], t.center[0]);
							this.setView(i, e)
						}
					},
					_editLink: function() {
						if (this._controlContainer.getElementsByClassName) {
							var t = this._controlContainer.getElementsByClassName("mapbox-improve-map");
							if (t.length && this._loaded)
								for (var e = this.getCenter().wrap(), i = this._tilejson || {}, n = i.id || "", o = 0; o < t.length; o++) t[o].href = t[o].href.split("#")[0] + "#" + n + "/" + e.lng.toFixed(3) + "/" + e.lat.toFixed(3) + "/" + this.getZoom()
						}
					},
					_updateLayer: function(t) {
						t.options && (this.infoControl && this._loaded && this.infoControl.addInfo(t.options.infoControl), this.attributionControl && this._loaded && t.getAttribution && this.attributionControl.addAttribution(t.getAttribution()), this.on("moveend", this._editLink, this), L.stamp(t) in this._zoomBoundLayers || !t.options.maxZoom && !t.options.minZoom || (this._zoomBoundLayers[L.stamp(t)] = t), this._editLink(), this._updateZoomLevels())
					}
				});
			e.exports.Map = c, e.exports.map = function(t, e, i) {
				return new c(t, e, i)
			}
		}, {
			"./feature_layer": 8,
			"./grid_control": 12,
			"./grid_layer": 13,
			"./info_control": 15,
			"./legend_control": 17,
			"./load_tilejson": 18,
			"./share_control": 23,
			"./tile_layer": 25,
			"./util": 27
		}
	],
	20: [
		function(t, e) {
			"use strict";
			var i = t("./geocoder_control"),
				n = t("./grid_control"),
				o = t("./feature_layer"),
				s = t("./legend_control"),
				r = t("./share_control"),
				a = t("./tile_layer"),
				l = t("./info_control"),
				u = t("./map"),
				c = t("./grid_layer");
			L.mapbox = e.exports = {
				VERSION: t("../package.json").version,
				geocoder: t("./geocoder"),
				marker: t("./marker"),
				simplestyle: t("./simplestyle"),
				tileLayer: a.tileLayer,
				TileLayer: a.TileLayer,
				infoControl: l.infoControl,
				InfoControl: l.InfoControl,
				shareControl: r.shareControl,
				ShareControl: r.ShareControl,
				legendControl: s.legendControl,
				LegendControl: s.LegendControl,
				geocoderControl: i.geocoderControl,
				GeocoderControl: i.GeocoderControl,
				gridControl: n.gridControl,
				GridControl: n.GridControl,
				gridLayer: c.gridLayer,
				GridLayer: c.GridLayer,
				featureLayer: o.featureLayer,
				FeatureLayer: o.FeatureLayer,
				map: u.map,
				Map: u.Map,
				config: t("./config"),
				sanitize: t("sanitize-caja"),
				template: t("mustache").to_html
			}, window.L.Icon.Default.imagePath = ("https:" == document.location.protocol || "http:" == document.location.protocol ? "" : "https:") + "//api.tiles.mapbox.com/mapbox.js/v" + t("../package.json").version + "/images"
		}, {
			"../package.json": 6,
			"./config": 7,
			"./feature_layer": 8,
			"./geocoder": 9,
			"./geocoder_control": 10,
			"./grid_control": 12,
			"./grid_layer": 13,
			"./info_control": 15,
			"./legend_control": 17,
			"./map": 19,
			"./marker": 21,
			"./share_control": 23,
			"./simplestyle": 24,
			"./tile_layer": 25,
			mustache: 3,
			"sanitize-caja": 4
		}
	],
	21: [
		function(t, e) {
			"use strict";

			function i(t, e) {
				t = t || {};
				var i = {
						small: [20, 50],
						medium: [30, 70],
						large: [35, 90]
					},
					n = t["marker-size"] || "medium",
					o = "marker-symbol" in t && "" !== t["marker-symbol"] ? "-" + t["marker-symbol"] : "",
					r = (t["marker-color"] || "7e7e7e").replace("#", "");
				return L.icon({
					iconUrl: s("/marker/pin-" + n.charAt(0) + o + "+" + r + (L.Browser.retina ? "@2x" : "") + ".png", e && e.accessToken),
					iconSize: i[n],
					iconAnchor: [i[n][0] / 2, i[n][1] / 2],
					popupAnchor: [0, -i[n][1] / 2]
				})
			}

			function n(t, e, n) {
				return L.marker(e, {
					icon: i(t.properties, n),
					title: r.strip_tags(a(t.properties && t.properties.title || ""))
				})
			}

			function o(t, e) {
				if (!t || !t.properties) return "";
				var i = "";
				return t.properties.title && (i += '<div class="marker-title">' + t.properties.title + "</div>"), t.properties.description && (i += '<div class="marker-description">' + t.properties.description + "</div>"), (e || a)(i)
			}
			var s = t("./url"),
				r = t("./util"),
				a = t("sanitize-caja");
			e.exports = {
				icon: i,
				style: n,
				createPopup: o
			}
		}, {
			"./url": 26,
			"./util": 27,
			"sanitize-caja": 4
		}
	],
	22: [
		function(t, e) {
			"use strict";
			var i = t("corslite"),
				n = t("./util").strict,
				o = t("./config"),
				s = /^(https?:)?(?=\/\/(.|api)\.tiles\.mapbox\.com\/)/;
			e.exports = function(t, e) {
				function r(t, i) {
					!t && i && (i = JSON.parse(i.responseText)), e(t, i)
				}
				return n(t, "string"), n(e, "function"), t = t.replace(s, function(t, e) {
					return "withCredentials" in new window.XMLHttpRequest ? "https:" === e || "https:" === document.location.protocol || o.FORCE_HTTPS ? "https:" : "http:" : document.location.protocol
				}), i(t, r)
			}
		}, {
			"./config": 7,
			"./util": 27,
			corslite: 1
		}
	],
	23: [
		function(t, e) {
			"use strict";
			var i = t("./url"),
				n = L.Control.extend({
					includes: [t("./load_tilejson")],
					options: {
						position: "topleft",
						url: ""
					},
					initialize: function(t, e) {
						L.setOptions(this, e), this._loadTileJSON(t)
					},
					_setTileJSON: function(t) {
						this._tilejson = t
					},
					onAdd: function(t) {
						this._map = t;
						var e = L.DomUtil.create("div", "leaflet-control-mapbox-share leaflet-bar"),
							i = L.DomUtil.create("a", "mapbox-share mapbox-icon mapbox-icon-share", e);
						return i.href = "#", this._modal = L.DomUtil.create("div", "mapbox-modal", this._map._container), this._mask = L.DomUtil.create("div", "mapbox-modal-mask", this._modal), this._content = L.DomUtil.create("div", "mapbox-modal-content", this._modal), L.DomEvent.addListener(i, "click", this._shareClick, this), L.DomEvent.disableClickPropagation(e), this._map.on("mousedown", this._clickOut, this), e
					},
					_clickOut: function(t) {
						return this._sharing ? (L.DomEvent.preventDefault(t), L.DomUtil.removeClass(this._modal, "active"), this._content.innerHTML = "", void(this._sharing = null)) : void 0
					},
					_shareClick: function(t) {
						if (L.DomEvent.stop(t), this._sharing) return this._clickOut(t);
						var e = this._tilejson || this._map._tilejson || {},
							n = encodeURIComponent(this.options.url || e.webpage || window.location),
							o = encodeURIComponent(e.name),
							s = i("/" + e.id + "/" + this._map.getCenter().lng + "," + this._map.getCenter().lat + "," + this._map.getZoom() + "/600x600.png", this.options.accessToken),
							r = i("/" + e.id + ".html", this.options.accessToken),
							a = "//twitter.com/intent/tweet?status=" + o + " " + n,
							l = "//www.facebook.com/sharer.php?u=" + n + "&t=" + encodeURIComponent(e.name),
							u = "//www.pinterest.com/pin/create/button/?url=" + n + "&media=" + s + "&description=" + e.name,
							c = "<h3>Share this map</h3><div class='mapbox-share-buttons'><a class='mapbox-button mapbox-button-icon mapbox-icon-facebook' target='_blank' href='{{facebook}}'>Facebook</a><a class='mapbox-button mapbox-button-icon mapbox-icon-twitter' target='_blank' href='{{twitter}}'>Twitter</a><a class='mapbox-button mapbox-button-icon mapbox-icon-pinterest' target='_blank' href='{{pinterest}}'>Pinterest</a></div>".replace("{{twitter}}", a).replace("{{facebook}}", l).replace("{{pinterest}}", u),
							h = '<iframe width="100%" height="500px" frameBorder="0" src="{{embed}}"></iframe>'.replace("{{embed}}", r),
							p = "Copy and paste this <strong>HTML code</strong> into documents to embed this map on web pages.";
						L.DomUtil.addClass(this._modal, "active"), this._sharing = L.DomUtil.create("div", "mapbox-modal-body", this._content), this._sharing.innerHTML = c;
						var d = L.DomUtil.create("input", "mapbox-embed", this._sharing);
						d.type = "text", d.value = h;
						var f = L.DomUtil.create("label", "mapbox-embed-description", this._sharing);
						f.innerHTML = p;
						var m = L.DomUtil.create("a", "leaflet-popup-close-button", this._sharing);
						m.href = "#", L.DomEvent.disableClickPropagation(this._sharing), L.DomEvent.addListener(m, "click", this._clickOut, this), L.DomEvent.addListener(d, "click", function(t) {
							t.target.focus(), t.target.select()
						})
					}
				});
			e.exports.ShareControl = n, e.exports.shareControl = function(t, e) {
				return new n(t, e)
			}
		}, {
			"./load_tilejson": 18,
			"./url": 26
		}
	],
	24: [
		function(t, e) {
			"use strict";

			function i(t, e) {
				var i = {};
				for (var n in e) i[n] = void 0 === t[n] ? e[n] : t[n];
				return i
			}

			function n(t) {
				for (var e = {}, i = 0; i < r.length; i++) e[r[i][1]] = t[r[i][0]];
				return e
			}

			function o(t) {
				return n(i(t.properties || {}, s))
			}
			var s = {
					stroke: "#555555",
					"stroke-width": 2,
					"stroke-opacity": 1,
					fill: "#555555",
					"fill-opacity": .5
				},
				r = [
					["stroke", "color"],
					["stroke-width", "weight"],
					["stroke-opacity", "opacity"],
					["fill", "fillColor"],
					["fill-opacity", "fillOpacity"]
				];
			e.exports = {
				style: o,
				defaults: s
			}
		}, {}
	],
	25: [
		function(t, e) {
			"use strict";
			var i = t("./util"),
				n = L.TileLayer.extend({
					includes: [t("./load_tilejson")],
					options: {
						format: "png"
					},
					formats: ["png", "png32", "png64", "png128", "png256", "jpg70", "jpg80", "jpg90"],
					scalePrefix: "@2x.",
					initialize: function(t, e) {
						L.TileLayer.prototype.initialize.call(this, void 0, e), this._tilejson = {}, e && e.format && i.strict_oneof(e.format, this.formats), this._loadTileJSON(t)
					},
					setFormat: function(t) {
						return i.strict(t, "string"), this.options.format = t, this.redraw(), this
					},
					setUrl: null,
					_setTileJSON: function(t) {
						return i.strict(t, "object"), L.extend(this.options, {
							tiles: t.tiles,
							attribution: t.attribution,
							minZoom: t.minzoom || 0,
							maxZoom: t.maxzoom || 18,
							tms: "tms" === t.scheme,
							bounds: t.bounds && i.lbounds(t.bounds)
						}), this._tilejson = t, this.redraw(), this
					},
					getTileJSON: function() {
						return this._tilejson
					},
					getTileUrl: function(t) {
						var e = this.options.tiles,
							i = Math.floor(Math.abs(t.x + t.y) % e.length),
							n = e[i],
							o = L.Util.template(n, t);
						return o ? o.replace(".png", (L.Browser.retina ? this.scalePrefix : ".") + this.options.format) : o
					},
					_update: function() {
						this.options.tiles && L.TileLayer.prototype._update.call(this)
					}
				});
			e.exports.TileLayer = n, e.exports.tileLayer = function(t, e) {
				return new n(t, e)
			}
		}, {
			"./load_tilejson": 18,
			"./util": 27
		}
	],
	26: [
		function(t, e) {
			"use strict";
			var i = t("./config"),
				n = t("../package.json").version;
			e.exports = function(t, e) {
				if (e = e || L.mapbox.accessToken, !e && i.REQUIRE_ACCESS_TOKEN) throw new Error("An API access token is required to use Mapbox.js. See https://www.mapbox.com/mapbox.js/api/v" + n + "/api-access-tokens/");
				var o = "https:" === document.location.protocol || i.FORCE_HTTPS ? i.HTTPS_URL : i.HTTP_URL;
				if (o += t, o += -1 !== o.indexOf("?") ? "&access_token=" : "?access_token=", i.REQUIRE_ACCESS_TOKEN) {
					if ("s" === e[0]) throw new Error("Use a public access token (pk.*) with Mapbox.js, not a secret access token (sk.*). See https://www.mapbox.com/mapbox.js/api/v" + n + "/api-access-tokens/");
					o += e
				}
				return o
			}, e.exports.tileJSON = function(t, i) {
				if (-1 !== t.indexOf("/")) return t;
				var n = e.exports("/" + t + ".json", i);
				return 0 === n.indexOf("https") && (n += "&secure"), n
			}
		}, {
			"../package.json": 6,
			"./config": 7
		}
	],
	27: [
		function(t, e) {
			"use strict";

			function i(t, e) {
				if (!e || !e.length) return !1;
				for (var i = 0; i < e.length; i++)
					if (e[i] == t) return !0;
				return !1
			}
			e.exports = {
				idUrl: function(t, e) {
					-1 == t.indexOf("/") ? e.loadID(t) : e.loadURL(t)
				},
				log: function(t) {
					"object" == typeof console && "function" == typeof console.error && console.error(t)
				},
				strict: function(t, e) {
					if (typeof t !== e) throw new Error("Invalid argument: " + e + " expected")
				},
				strict_instance: function(t, e, i) {
					if (!(t instanceof e)) throw new Error("Invalid argument: " + i + " expected")
				},
				strict_oneof: function(t, e) {
					if (!i(t, e)) throw new Error("Invalid argument: " + t + " given, valid values are " + e.join(", "))
				},
				strip_tags: function(t) {
					return t.replace(/<[^<]+>/g, "")
				},
				lbounds: function(t) {
					return new L.LatLngBounds([
						[t[1], t[0]],
						[t[3], t[2]]
					])
				}
			}
		}, {}
	]
}, {}, [14]), ! function(t) {
	"use strict";
	"function" == typeof define && define.amd ? define(["jquery"], t) : "undefined" != typeof exports ? module.exports = t(require("jquery")) : t(jQuery)
}(function(t) {
	"use strict";
	var e = window.Slick || {};
	e = function() {
		function e(e, n) {
			var o, s, r = this;
			if (r.defaults = {
				accessibility: !0,
				adaptiveHeight: !1,
				appendArrows: t(e),
				appendDots: t(e),
				arrows: !0,
				asNavFor: null,
				prevArrow: '<button type="button" data-role="none" class="slick-prev">Previous</button>',
				nextArrow: '<button type="button" data-role="none" class="slick-next">Next</button>',
				autoplay: !1,
				autoplaySpeed: 3e3,
				centerMode: !1,
				centerPadding: "50px",
				cssEase: "ease",
				customPaging: function(t, e) {
					return '<button type="button" data-role="none">' + (e + 1) + "</button>"
				},
				dots: !1,
				dotsClass: "slick-dots",
				draggable: !0,
				easing: "linear",
				fade: !1,
				focusOnSelect: !1,
				infinite: !0,
				initialSlide: 0,
				lazyLoad: "ondemand",
				onBeforeChange: null,
				onAfterChange: null,
				onInit: null,
				onReInit: null,
				onSetPosition: null,
				pauseOnHover: !0,
				pauseOnDotsHover: !1,
				respondTo: "window",
				responsive: null,
				rtl: !1,
				slide: "div",
				slidesToShow: 1,
				slidesToScroll: 1,
				speed: 500,
				swipe: !0,
				swipeToSlide: !1,
				touchMove: !0,
				touchThreshold: 5,
				useCSS: !0,
				variableWidth: !1,
				vertical: !1,
				waitForAnimate: !0
			}, r.initials = {
				animating: !1,
				dragging: !1,
				autoPlayTimer: null,
				currentDirection: 0,
				currentLeft: null,
				currentSlide: 0,
				direction: 1,
				$dots: null,
				listWidth: null,
				listHeight: null,
				loadIndex: 0,
				$nextArrow: null,
				$prevArrow: null,
				slideCount: null,
				slideWidth: null,
				$slideTrack: null,
				$slides: null,
				sliding: !1,
				slideOffset: 0,
				swipeLeft: null,
				$list: null,
				touchObject: {},
				transformsEnabled: !1
			}, t.extend(r, r.initials), r.activeBreakpoint = null, r.animType = null, r.animProp = null, r.breakpoints = [], r.breakpointSettings = [], r.cssTransitions = !1, r.paused = !1, r.positionProp = null, r.respondTo = null, r.shouldClick = !0, r.$slider = t(e), r.$slidesCache = null, r.transformType = null, r.transitionType = null, r.windowWidth = 0, r.windowTimer = null, r.options = t.extend({}, r.defaults, n), r.currentSlide = r.options.initialSlide, r.originalSettings = r.options, o = r.options.responsive || null, o && o.length > -1) {
				r.respondTo = r.options.respondTo || "window";
				for (s in o) o.hasOwnProperty(s) && (r.breakpoints.push(o[s].breakpoint), r.breakpointSettings[o[s].breakpoint] = o[s].settings);
				r.breakpoints.sort(function(t, e) {
					return e - t
				})
			}
			r.autoPlay = t.proxy(r.autoPlay, r), r.autoPlayClear = t.proxy(r.autoPlayClear, r), r.changeSlide = t.proxy(r.changeSlide, r), r.clickHandler = t.proxy(r.clickHandler, r), r.selectHandler = t.proxy(r.selectHandler, r), r.setPosition = t.proxy(r.setPosition, r), r.swipeHandler = t.proxy(r.swipeHandler, r), r.dragHandler = t.proxy(r.dragHandler, r), r.keyHandler = t.proxy(r.keyHandler, r), r.autoPlayIterator = t.proxy(r.autoPlayIterator, r), r.instanceUid = i++, r.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/, r.init(), r.checkResponsive()
		}
		var i = 0;
		return e
	}(), e.prototype.addSlide = function(e, i, n) {
		var o = this;
		if ("boolean" == typeof i) n = i, i = null;
		else if (0 > i || i >= o.slideCount) return !1;
		o.unload(), "number" == typeof i ? 0 === i && 0 === o.$slides.length ? t(e).appendTo(o.$slideTrack) : n ? t(e).insertBefore(o.$slides.eq(i)) : t(e).insertAfter(o.$slides.eq(i)) : n === !0 ? t(e).prependTo(o.$slideTrack) : t(e).appendTo(o.$slideTrack), o.$slides = o.$slideTrack.children(this.options.slide), o.$slideTrack.children(this.options.slide).detach(), o.$slideTrack.append(o.$slides), o.$slides.each(function(e, i) {
			t(i).attr("index", e)
		}), o.$slidesCache = o.$slides, o.reinit()
	}, e.prototype.animateSlide = function(e, i) {
		var n = {},
			o = this;
		if (1 === o.options.slidesToShow && o.options.adaptiveHeight === !0 && o.options.vertical === !1) {
			var s = o.$slides.eq(o.currentSlide).outerHeight(!0);
			o.$list.animate({
				height: s
			}, o.options.speed)
		}
		o.options.rtl === !0 && o.options.vertical === !1 && (e = -e), o.transformsEnabled === !1 ? o.options.vertical === !1 ? o.$slideTrack.animate({
			left: e
		}, o.options.speed, o.options.easing, i) : o.$slideTrack.animate({
			top: e
		}, o.options.speed, o.options.easing, i) : o.cssTransitions === !1 ? t({
			animStart: o.currentLeft
		}).animate({
			animStart: e
		}, {
			duration: o.options.speed,
			easing: o.options.easing,
			step: function(t) {
				o.options.vertical === !1 ? (n[o.animType] = "translate(" + t + "px, 0px)", o.$slideTrack.css(n)) : (n[o.animType] = "translate(0px," + t + "px)", o.$slideTrack.css(n))
			},
			complete: function() {
				i && i.call()
			}
		}) : (o.applyTransition(), n[o.animType] = o.options.vertical === !1 ? "translate3d(" + e + "px, 0px, 0px)" : "translate3d(0px," + e + "px, 0px)", o.$slideTrack.css(n), i && setTimeout(function() {
			o.disableTransition(), i.call()
		}, o.options.speed))
	}, e.prototype.asNavFor = function(e) {
		var i = this,
			n = null != i.options.asNavFor ? t(i.options.asNavFor).getSlick() : null;
		null != n && n.slideHandler(e, !0)
	}, e.prototype.applyTransition = function(t) {
		var e = this,
			i = {};
		i[e.transitionType] = e.options.fade === !1 ? e.transformType + " " + e.options.speed + "ms " + e.options.cssEase : "opacity " + e.options.speed + "ms " + e.options.cssEase, e.options.fade === !1 ? e.$slideTrack.css(i) : e.$slides.eq(t).css(i)
	}, e.prototype.autoPlay = function() {
		var t = this;
		t.autoPlayTimer && clearInterval(t.autoPlayTimer), t.slideCount > t.options.slidesToShow && t.paused !== !0 && (t.autoPlayTimer = setInterval(t.autoPlayIterator, t.options.autoplaySpeed))
	}, e.prototype.autoPlayClear = function() {
		var t = this;
		t.autoPlayTimer && clearInterval(t.autoPlayTimer)
	}, e.prototype.autoPlayIterator = function() {
		var t = this;
		t.options.infinite === !1 ? 1 === t.direction ? (t.currentSlide + 1 === t.slideCount - 1 && (t.direction = 0), t.slideHandler(t.currentSlide + t.options.slidesToScroll)) : (0 === t.currentSlide - 1 && (t.direction = 1), t.slideHandler(t.currentSlide - t.options.slidesToScroll)) : t.slideHandler(t.currentSlide + t.options.slidesToScroll)
	}, e.prototype.buildArrows = function() {
		var e = this;
		e.options.arrows === !0 && e.slideCount > e.options.slidesToShow && (e.$prevArrow = t(e.options.prevArrow), e.$nextArrow = t(e.options.nextArrow), e.htmlExpr.test(e.options.prevArrow) && e.$prevArrow.appendTo(e.options.appendArrows), e.htmlExpr.test(e.options.nextArrow) && e.$nextArrow.appendTo(e.options.appendArrows), e.options.infinite !== !0 && e.$prevArrow.addClass("slick-disabled"))
	}, e.prototype.buildDots = function() {
		var e, i, n = this;
		if (n.options.dots === !0 && n.slideCount > n.options.slidesToShow) {
			for (i = '<ul class="' + n.options.dotsClass + '">', e = 0; e <= n.getDotCount(); e += 1) i += "<li>" + n.options.customPaging.call(this, n, e) + "</li>";
			i += "</ul>", n.$dots = t(i).appendTo(n.options.appendDots), n.$dots.find("li").first().addClass("slick-active")
		}
	}, e.prototype.buildOut = function() {
		var e = this;
		e.$slides = e.$slider.children(e.options.slide + ":not(.slick-cloned)").addClass("slick-slide"), e.slideCount = e.$slides.length, e.$slides.each(function(e, i) {
			t(i).attr("index", e)
		}), e.$slidesCache = e.$slides, e.$slider.addClass("slick-slider"), e.$slideTrack = 0 === e.slideCount ? t('<div class="slick-track"/>').appendTo(e.$slider) : e.$slides.wrapAll('<div class="slick-track"/>').parent(), e.$list = e.$slideTrack.wrap('<div class="slick-list"/>').parent(), e.$slideTrack.css("opacity", 0), e.options.centerMode === !0 && (e.options.slidesToScroll = 1), t("img[data-lazy]", e.$slider).not("[src]").addClass("slick-loading"), e.setupInfinite(), e.buildArrows(), e.buildDots(), e.updateDots(), e.options.accessibility === !0 && e.$list.prop("tabIndex", 0), e.setSlideClasses("number" == typeof this.currentSlide ? this.currentSlide : 0), e.options.draggable === !0 && e.$list.addClass("draggable")
	}, e.prototype.checkResponsive = function() {
		var e, i, n, o = this,
			s = o.$slider.width(),
			r = window.innerWidth || t(window).width();
		if ("window" === o.respondTo ? n = r : "slider" === o.respondTo ? n = s : "min" === o.respondTo && (n = Math.min(r, s)), o.originalSettings.responsive && o.originalSettings.responsive.length > -1 && null !== o.originalSettings.responsive) {
			i = null;
			for (e in o.breakpoints) o.breakpoints.hasOwnProperty(e) && n < o.breakpoints[e] && (i = o.breakpoints[e]);
			null !== i ? null !== o.activeBreakpoint ? i !== o.activeBreakpoint && (o.activeBreakpoint = i, o.options = t.extend({}, o.originalSettings, o.breakpointSettings[i]), o.refresh()) : (o.activeBreakpoint = i, o.options = t.extend({}, o.originalSettings, o.breakpointSettings[i]), o.refresh()) : null !== o.activeBreakpoint && (o.activeBreakpoint = null, o.options = o.originalSettings, o.refresh())
		}
	}, e.prototype.changeSlide = function(e, i) {
		var n, o, s, r, a, l = this,
			u = t(e.target);
		switch (u.is("a") && e.preventDefault(), s = 0 !== l.slideCount % l.options.slidesToScroll, n = s ? 0 : (l.slideCount - l.currentSlide) % l.options.slidesToScroll, e.data.message) {
			case "previous":
				o = 0 === n ? l.options.slidesToScroll : l.options.slidesToShow - n, l.slideCount > l.options.slidesToShow && l.slideHandler(l.currentSlide - o, !1, i);
				break;
			case "next":
				o = 0 === n ? l.options.slidesToScroll : n, l.slideCount > l.options.slidesToShow && l.slideHandler(l.currentSlide + o, !1, i);
				break;
			case "index":
				var c = 0 === e.data.index ? 0 : e.data.index || t(e.target).parent().index() * l.options.slidesToScroll;
				if (r = l.getNavigableIndexes(), a = 0, r[c] && r[c] === c)
					if (c > r[r.length - 1]) c = r[r.length - 1];
					else
						for (var h in r) {
							if (c < r[h]) {
								c = a;
								break
							}
							a = r[h]
						}
					l.slideHandler(c, !1, i);
			default:
				return
		}
	}, e.prototype.clickHandler = function(t) {
		var e = this;
		e.shouldClick === !1 && (t.stopImmediatePropagation(), t.stopPropagation(), t.preventDefault())
	}, e.prototype.destroy = function() {
		var e = this;
		e.autoPlayClear(), e.touchObject = {}, t(".slick-cloned", e.$slider).remove(), e.$dots && e.$dots.remove(), e.$prevArrow && "object" != typeof e.options.prevArrow && e.$prevArrow.remove(), e.$nextArrow && "object" != typeof e.options.nextArrow && e.$nextArrow.remove(), e.$slides.parent().hasClass("slick-track") && e.$slides.unwrap().unwrap(), e.$slides.removeClass("slick-slide slick-active slick-center slick-visible").removeAttr("index").css({
			position: "",
			left: "",
			top: "",
			zIndex: "",
			opacity: "",
			width: ""
		}), e.$slider.removeClass("slick-slider"), e.$slider.removeClass("slick-initialized"), e.$list.off(".slick"), t(window).off(".slick-" + e.instanceUid), t(document).off(".slick-" + e.instanceUid)
	}, e.prototype.disableTransition = function(t) {
		var e = this,
			i = {};
		i[e.transitionType] = "", e.options.fade === !1 ? e.$slideTrack.css(i) : e.$slides.eq(t).css(i)
	}, e.prototype.fadeSlide = function(t, e, i) {
		var n = this;
		n.cssTransitions === !1 ? (n.$slides.eq(e).css({
			zIndex: 1e3
		}), n.$slides.eq(e).animate({
			opacity: 1
		}, n.options.speed, n.options.easing, i), n.$slides.eq(t).animate({
			opacity: 0
		}, n.options.speed, n.options.easing)) : (n.applyTransition(e), n.applyTransition(t), n.$slides.eq(e).css({
			opacity: 1,
			zIndex: 1e3
		}), n.$slides.eq(t).css({
			opacity: 0
		}), i && setTimeout(function() {
			n.disableTransition(e), n.disableTransition(t), i.call()
		}, n.options.speed))
	}, e.prototype.filterSlides = function(t) {
		var e = this;
		null !== t && (e.unload(), e.$slideTrack.children(this.options.slide).detach(), e.$slidesCache.filter(t).appendTo(e.$slideTrack), e.reinit())
	}, e.prototype.getCurrent = function() {
		var t = this;
		return t.currentSlide
	}, e.prototype.getDotCount = function() {
		var t = this,
			e = 0,
			i = 0,
			n = 0;
		if (t.options.infinite === !0) n = Math.ceil(t.slideCount / t.options.slidesToScroll);
		else
			for (; e < t.slideCount;) ++n, e = i + t.options.slidesToShow, i += t.options.slidesToScroll <= t.options.slidesToShow ? t.options.slidesToScroll : t.options.slidesToShow;
		return n - 1
	}, e.prototype.getLeft = function(t) {
		var e, i, n, o = this,
			s = 0;
		return o.slideOffset = 0, i = o.$slides.first().outerHeight(), o.options.infinite === !0 ? (o.slideCount > o.options.slidesToShow && (o.slideOffset = -1 * o.slideWidth * o.options.slidesToShow, s = -1 * i * o.options.slidesToShow), 0 !== o.slideCount % o.options.slidesToScroll && t + o.options.slidesToScroll > o.slideCount && o.slideCount > o.options.slidesToShow && (t > o.slideCount ? (o.slideOffset = -1 * (o.options.slidesToShow - (t - o.slideCount)) * o.slideWidth, s = -1 * (o.options.slidesToShow - (t - o.slideCount)) * i) : (o.slideOffset = -1 * o.slideCount % o.options.slidesToScroll * o.slideWidth, s = -1 * o.slideCount % o.options.slidesToScroll * i))) : t + o.options.slidesToShow > o.slideCount && (o.slideOffset = (t + o.options.slidesToShow - o.slideCount) * o.slideWidth, s = (t + o.options.slidesToShow - o.slideCount) * i), o.slideCount <= o.options.slidesToShow && (o.slideOffset = 0, s = 0), o.options.centerMode === !0 && o.options.infinite === !0 ? o.slideOffset += o.slideWidth * Math.floor(o.options.slidesToShow / 2) - o.slideWidth : o.options.centerMode === !0 && (o.slideOffset = 0, o.slideOffset += o.slideWidth * Math.floor(o.options.slidesToShow / 2)), e = o.options.vertical === !1 ? -1 * t * o.slideWidth + o.slideOffset : -1 * t * i + s, o.options.variableWidth === !0 && (n = o.$slideTrack.children(".slick-slide").eq(o.slideCount <= o.options.slidesToShow || o.options.infinite === !1 ? t : t + o.options.slidesToShow), e = n[0] ? -1 * n[0].offsetLeft : 0, o.options.centerMode === !0 && (n = o.$slideTrack.children(".slick-slide").eq(o.options.infinite === !1 ? t : t + o.options.slidesToShow + 1), e = n[0] ? -1 * n[0].offsetLeft : 0, e += (o.$list.width() - n.outerWidth()) / 2)), e
	}, e.prototype.getNavigableIndexes = function() {
		for (var t = this, e = 0, i = 0, n = []; e < t.slideCount;) n.push(e), e = i + t.options.slidesToScroll, i += t.options.slidesToScroll <= t.options.slidesToShow ? t.options.slidesToScroll : t.options.slidesToShow;
		return n
	}, e.prototype.getSlideCount = function() {
		var e, i = this;
		if (i.options.swipeToSlide === !0) {
			var n = null;
			return i.$slideTrack.find(".slick-slide").each(function(e, o) {
				return o.offsetLeft + t(o).outerWidth() / 2 > -1 * i.swipeLeft ? (n = o, !1) : void 0
			}), e = Math.abs(t(n).attr("index") - i.currentSlide)
		}
		return i.options.slidesToScroll
	}, e.prototype.init = function() {
		var e = this;
		t(e.$slider).hasClass("slick-initialized") || (t(e.$slider).addClass("slick-initialized"), e.buildOut(), e.setProps(), e.startLoad(), e.loadSlider(), e.initializeEvents(), e.updateArrows(), e.updateDots()), null !== e.options.onInit && e.options.onInit.call(this, e)
	}, e.prototype.initArrowEvents = function() {
		var t = this;
		t.options.arrows === !0 && t.slideCount > t.options.slidesToShow && (t.$prevArrow.on("click.slick", {
			message: "previous"
		}, t.changeSlide), t.$nextArrow.on("click.slick", {
			message: "next"
		}, t.changeSlide))
	}, e.prototype.initDotEvents = function() {
		var e = this;
		e.options.dots === !0 && e.slideCount > e.options.slidesToShow && t("li", e.$dots).on("click.slick", {
			message: "index"
		}, e.changeSlide), e.options.dots === !0 && e.options.pauseOnDotsHover === !0 && e.options.autoplay === !0 && t("li", e.$dots).on("mouseenter.slick", function() {
			e.paused = !0, e.autoPlayClear()
		}).on("mouseleave.slick", function() {
			e.paused = !1, e.autoPlay()
		})
	}, e.prototype.initializeEvents = function() {
		var e = this;
		e.initArrowEvents(), e.initDotEvents(), e.$list.on("touchstart.slick mousedown.slick", {
			action: "start"
		}, e.swipeHandler), e.$list.on("touchmove.slick mousemove.slick", {
			action: "move"
		}, e.swipeHandler), e.$list.on("touchend.slick mouseup.slick", {
			action: "end"
		}, e.swipeHandler), e.$list.on("touchcancel.slick mouseleave.slick", {
			action: "end"
		}, e.swipeHandler), e.$list.on("click.slick", e.clickHandler), e.options.pauseOnHover === !0 && e.options.autoplay === !0 && (e.$list.on("mouseenter.slick", function() {
			e.paused = !0, e.autoPlayClear()
		}), e.$list.on("mouseleave.slick", function() {
			e.paused = !1, e.autoPlay()
		})), e.options.accessibility === !0 && e.$list.on("keydown.slick", e.keyHandler), e.options.focusOnSelect === !0 && t(e.options.slide, e.$slideTrack).on("click.slick", e.selectHandler), t(window).on("orientationchange.slick.slick-" + e.instanceUid, function() {
			e.checkResponsive(), e.setPosition()
		}), t(window).on("resize.slick.slick-" + e.instanceUid, function() {
			t(window).width() !== e.windowWidth && (clearTimeout(e.windowDelay), e.windowDelay = window.setTimeout(function() {
				e.windowWidth = t(window).width(), e.checkResponsive(), e.setPosition()
			}, 50))
		}), t("*[draggable!=true]", e.$slideTrack).on("dragstart", function(t) {
			t.preventDefault()
		}), t(window).on("load.slick.slick-" + e.instanceUid, e.setPosition), t(document).on("ready.slick.slick-" + e.instanceUid, e.setPosition)
	}, e.prototype.initUI = function() {
		var t = this;
		t.options.arrows === !0 && t.slideCount > t.options.slidesToShow && (t.$prevArrow.show(), t.$nextArrow.show()), t.options.dots === !0 && t.slideCount > t.options.slidesToShow && t.$dots.show(), t.options.autoplay === !0 && t.autoPlay()
	}, e.prototype.keyHandler = function(t) {
		var e = this;
		37 === t.keyCode && e.options.accessibility === !0 ? e.changeSlide({
			data: {
				message: "previous"
			}
		}) : 39 === t.keyCode && e.options.accessibility === !0 && e.changeSlide({
			data: {
				message: "next"
			}
		})
	}, e.prototype.lazyLoad = function() {
		function e(e) {
			t("img[data-lazy]", e).each(function() {
				var e = t(this),
					i = t(this).attr("data-lazy");
				e.load(function() {
					e.animate({
						opacity: 1
					}, 200)
				}).css({
					opacity: 0
				}).attr("src", i).removeAttr("data-lazy").removeClass("slick-loading")
			})
		}
		var i, n, o, s, r = this;
		r.options.centerMode === !0 ? r.options.infinite === !0 ? (o = r.currentSlide + (r.options.slidesToShow / 2 + 1), s = o + r.options.slidesToShow + 2) : (o = Math.max(0, r.currentSlide - (r.options.slidesToShow / 2 + 1)), s = 2 + (r.options.slidesToShow / 2 + 1) + r.currentSlide) : (o = r.options.infinite ? r.options.slidesToShow + r.currentSlide : r.currentSlide, s = o + r.options.slidesToShow, r.options.fade === !0 && (o > 0 && o--, s <= r.slideCount && s++)), i = r.$slider.find(".slick-slide").slice(o, s), e(i), r.slideCount <= r.options.slidesToShow ? (n = r.$slider.find(".slick-slide"), e(n)) : r.currentSlide >= r.slideCount - r.options.slidesToShow ? (n = r.$slider.find(".slick-cloned").slice(0, r.options.slidesToShow), e(n)) : 0 === r.currentSlide && (n = r.$slider.find(".slick-cloned").slice(-1 * r.options.slidesToShow), e(n))
	}, e.prototype.loadSlider = function() {
		var t = this;
		t.setPosition(), t.$slideTrack.css({
			opacity: 1
		}), t.$slider.removeClass("slick-loading"), t.initUI(), "progressive" === t.options.lazyLoad && t.progressiveLazyLoad()
	}, e.prototype.postSlide = function(t) {
		var e = this;
		null !== e.options.onAfterChange && e.options.onAfterChange.call(this, e, t), e.animating = !1, e.setPosition(), e.swipeLeft = null, e.options.autoplay === !0 && e.paused === !1 && e.autoPlay()
	}, e.prototype.progressiveLazyLoad = function() {
		var e, i, n = this;
		e = t("img[data-lazy]", n.$slider).length, e > 0 && (i = t("img[data-lazy]", n.$slider).first(), i.attr("src", i.attr("data-lazy")).removeClass("slick-loading").load(function() {
			i.removeAttr("data-lazy"), n.progressiveLazyLoad()
		}).error(function() {
			i.removeAttr("data-lazy"), n.progressiveLazyLoad()
		}))
	}, e.prototype.refresh = function() {
		var e = this,
			i = e.currentSlide;
		e.destroy(), t.extend(e, e.initials), e.init(), e.changeSlide({
			data: {
				message: "index",
				index: i
			}
		}, !0)
	}, e.prototype.reinit = function() {
		var e = this;
		e.$slides = e.$slideTrack.children(e.options.slide).addClass("slick-slide"), e.slideCount = e.$slides.length, e.currentSlide >= e.slideCount && 0 !== e.currentSlide && (e.currentSlide = e.currentSlide - e.options.slidesToScroll), e.slideCount <= e.options.slidesToShow && (e.currentSlide = 0), e.setProps(), e.setupInfinite(), e.buildArrows(), e.updateArrows(), e.initArrowEvents(), e.buildDots(), e.updateDots(), e.initDotEvents(), e.options.focusOnSelect === !0 && t(e.options.slide, e.$slideTrack).on("click.slick", e.selectHandler), e.setSlideClasses(0), e.setPosition(), null !== e.options.onReInit && e.options.onReInit.call(this, e)
	}, e.prototype.removeSlide = function(t, e, i) {
		var n = this;
		return "boolean" == typeof t ? (e = t, t = e === !0 ? 0 : n.slideCount - 1) : t = e === !0 ? --t : t, n.slideCount < 1 || 0 > t || t > n.slideCount - 1 ? !1 : (n.unload(), i === !0 ? n.$slideTrack.children().remove() : n.$slideTrack.children(this.options.slide).eq(t).remove(), n.$slides = n.$slideTrack.children(this.options.slide), n.$slideTrack.children(this.options.slide).detach(), n.$slideTrack.append(n.$slides), n.$slidesCache = n.$slides, void n.reinit())
	}, e.prototype.setCSS = function(t) {
		var e, i, n = this,
			o = {};
		n.options.rtl === !0 && (t = -t), e = "left" == n.positionProp ? t + "px" : "0px", i = "top" == n.positionProp ? t + "px" : "0px", o[n.positionProp] = t, n.transformsEnabled === !1 ? n.$slideTrack.css(o) : (o = {}, n.cssTransitions === !1 ? (o[n.animType] = "translate(" + e + ", " + i + ")", n.$slideTrack.css(o)) : (o[n.animType] = "translate3d(" + e + ", " + i + ", 0px)", n.$slideTrack.css(o)))
	}, e.prototype.setDimensions = function() {
		var e = this;
		if (e.options.vertical === !1 ? e.options.centerMode === !0 && e.$list.css({
			padding: "0px " + e.options.centerPadding
		}) : (e.$list.height(e.$slides.first().outerHeight(!0) * e.options.slidesToShow), e.options.centerMode === !0 && e.$list.css({
			padding: e.options.centerPadding + " 0px"
		})), e.listWidth = e.$list.width(), e.listHeight = e.$list.height(), e.options.vertical === !1 && e.options.variableWidth === !1) e.slideWidth = Math.ceil(e.listWidth / e.options.slidesToShow), e.$slideTrack.width(Math.ceil(e.slideWidth * e.$slideTrack.children(".slick-slide").length));
		else if (e.options.variableWidth === !0) {
			var i = 0;
			e.slideWidth = Math.ceil(e.listWidth / e.options.slidesToShow), e.$slideTrack.children(".slick-slide").each(function() {
				i += Math.ceil(t(this).outerWidth(!0))
			}), e.$slideTrack.width(Math.ceil(i) + 1)
		} else e.slideWidth = Math.ceil(e.listWidth), e.$slideTrack.height(Math.ceil(e.$slides.first().outerHeight(!0) * e.$slideTrack.children(".slick-slide").length));
		var n = e.$slides.first().outerWidth(!0) - e.$slides.first().width();
		e.options.variableWidth === !1 && e.$slideTrack.children(".slick-slide").width(e.slideWidth - n)
	}, e.prototype.setFade = function() {
		var e, i = this;
		i.$slides.each(function(n, o) {
			e = -1 * i.slideWidth * n, t(o).css(i.options.rtl === !0 ? {
				position: "relative",
				right: e,
				top: 0,
				zIndex: 800,
				opacity: 0
			} : {
				position: "relative",
				left: e,
				top: 0,
				zIndex: 800,
				opacity: 0
			})
		}), i.$slides.eq(i.currentSlide).css({
			zIndex: 900,
			opacity: 1
		})
	}, e.prototype.setHeight = function() {
		var t = this;
		if (1 === t.options.slidesToShow && t.options.adaptiveHeight === !0 && t.options.vertical === !1) {
			var e = t.$slides.eq(t.currentSlide).outerHeight(!0);
			t.$list.css("height", e)
		}
	}, e.prototype.setPosition = function() {
		var t = this;
		t.setDimensions(), t.setHeight(), t.options.fade === !1 ? t.setCSS(t.getLeft(t.currentSlide)) : t.setFade(), null !== t.options.onSetPosition && t.options.onSetPosition.call(this, t)
	}, e.prototype.setProps = function() {
		var t = this,
			e = document.body.style;
		t.positionProp = t.options.vertical === !0 ? "top" : "left", "top" === t.positionProp ? t.$slider.addClass("slick-vertical") : t.$slider.removeClass("slick-vertical"), (void 0 !== e.WebkitTransition || void 0 !== e.MozTransition || void 0 !== e.msTransition) && t.options.useCSS === !0 && (t.cssTransitions = !0), void 0 !== e.OTransform && (t.animType = "OTransform", t.transformType = "-o-transform", t.transitionType = "OTransition", void 0 === e.perspectiveProperty && void 0 === e.webkitPerspective && (t.animType = !1)), void 0 !== e.MozTransform && (t.animType = "MozTransform", t.transformType = "-moz-transform", t.transitionType = "MozTransition", void 0 === e.perspectiveProperty && void 0 === e.MozPerspective && (t.animType = !1)), void 0 !== e.webkitTransform && (t.animType = "webkitTransform", t.transformType = "-webkit-transform", t.transitionType = "webkitTransition", void 0 === e.perspectiveProperty && void 0 === e.webkitPerspective && (t.animType = !1)), void 0 !== e.msTransform && (t.animType = "msTransform", t.transformType = "-ms-transform", t.transitionType = "msTransition", void 0 === e.msTransform && (t.animType = !1)), void 0 !== e.transform && t.animType !== !1 && (t.animType = "transform", t.transformType = "transform", t.transitionType = "transition"), t.transformsEnabled = null !== t.animType && t.animType !== !1
	}, e.prototype.setSlideClasses = function(t) {
		var e, i, n, o, s = this;
		s.$slider.find(".slick-slide").removeClass("slick-active").removeClass("slick-center"), i = s.$slider.find(".slick-slide"), s.options.centerMode === !0 ? (e = Math.floor(s.options.slidesToShow / 2), s.options.infinite === !0 && (t >= e && t <= s.slideCount - 1 - e ? s.$slides.slice(t - e, t + e + 1).addClass("slick-active") : (n = s.options.slidesToShow + t, i.slice(n - e + 1, n + e + 2).addClass("slick-active")), 0 === t ? i.eq(i.length - 1 - s.options.slidesToShow).addClass("slick-center") : t === s.slideCount - 1 && i.eq(s.options.slidesToShow).addClass("slick-center")), s.$slides.eq(t).addClass("slick-center")) : t >= 0 && t <= s.slideCount - s.options.slidesToShow ? s.$slides.slice(t, t + s.options.slidesToShow).addClass("slick-active") : i.length <= s.options.slidesToShow ? i.addClass("slick-active") : (o = s.slideCount % s.options.slidesToShow, n = s.options.infinite === !0 ? s.options.slidesToShow + t : t, s.options.slidesToShow == s.options.slidesToScroll && s.slideCount - t < s.options.slidesToShow ? i.slice(n - (s.options.slidesToShow - o), n + o).addClass("slick-active") : i.slice(n, n + s.options.slidesToShow).addClass("slick-active")), "ondemand" === s.options.lazyLoad && s.lazyLoad()
	}, e.prototype.setupInfinite = function() {
		var e, i, n, o = this;
		if (o.options.fade === !0 && (o.options.centerMode = !1), o.options.infinite === !0 && o.options.fade === !1 && (i = null, o.slideCount > o.options.slidesToShow)) {
			for (n = o.options.centerMode === !0 ? o.options.slidesToShow + 1 : o.options.slidesToShow, e = o.slideCount; e > o.slideCount - n; e -= 1) i = e - 1, t(o.$slides[i]).clone(!0).attr("id", "").attr("index", i - o.slideCount).prependTo(o.$slideTrack).addClass("slick-cloned");
			for (e = 0; n > e; e += 1) i = e, t(o.$slides[i]).clone(!0).attr("id", "").attr("index", i + o.slideCount).appendTo(o.$slideTrack).addClass("slick-cloned");
			o.$slideTrack.find(".slick-cloned").find("[id]").each(function() {
				t(this).attr("id", "")
			})
		}
	}, e.prototype.selectHandler = function(e) {
		var i = this,
			n = parseInt(t(e.target).parents(".slick-slide").attr("index"));
		return n || (n = 0), i.slideCount <= i.options.slidesToShow ? (i.$slider.find(".slick-slide").removeClass("slick-active"), i.$slides.eq(n).addClass("slick-active"), i.options.centerMode === !0 && (i.$slider.find(".slick-slide").removeClass("slick-center"), i.$slides.eq(n).addClass("slick-center")), void i.asNavFor(n)) : void i.slideHandler(n)
	}, e.prototype.slideHandler = function(t, e, i) {
		var n, o, s, r, a = null,
			l = this;
		return e = e || !1, l.animating === !0 && l.options.waitForAnimate === !0 || l.options.fade === !0 && l.currentSlide === t || l.slideCount <= l.options.slidesToShow ? void 0 : (e === !1 && l.asNavFor(t), n = t, a = l.getLeft(n), r = l.getLeft(l.currentSlide), l.currentLeft = null === l.swipeLeft ? r : l.swipeLeft, l.options.infinite === !1 && l.options.centerMode === !1 && (0 > t || t > l.getDotCount() * l.options.slidesToScroll) ? void(l.options.fade === !1 && (n = l.currentSlide, i !== !0 ? l.animateSlide(r, function() {
			l.postSlide(n)
		}) : l.postSlide(n))) : l.options.infinite === !1 && l.options.centerMode === !0 && (0 > t || t > l.slideCount - l.options.slidesToScroll) ? void(l.options.fade === !1 && (n = l.currentSlide, i !== !0 ? l.animateSlide(r, function() {
			l.postSlide(n)
		}) : l.postSlide(n))) : (l.options.autoplay === !0 && clearInterval(l.autoPlayTimer), o = 0 > n ? 0 !== l.slideCount % l.options.slidesToScroll ? l.slideCount - l.slideCount % l.options.slidesToScroll : l.slideCount + n : n >= l.slideCount ? 0 !== l.slideCount % l.options.slidesToScroll ? 0 : n - l.slideCount : n, l.animating = !0, null !== l.options.onBeforeChange && t !== l.currentSlide && l.options.onBeforeChange.call(this, l, l.currentSlide, o), s = l.currentSlide, l.currentSlide = o, l.setSlideClasses(l.currentSlide), l.updateDots(), l.updateArrows(), l.options.fade === !0 ? void(i !== !0 ? l.fadeSlide(s, o, function() {
			l.postSlide(o)
		}) : l.postSlide(o)) : void(i !== !0 ? l.animateSlide(a, function() {
			l.postSlide(o)
		}) : l.postSlide(o))))
	}, e.prototype.startLoad = function() {
		var t = this;
		t.options.arrows === !0 && t.slideCount > t.options.slidesToShow && (t.$prevArrow.hide(), t.$nextArrow.hide()), t.options.dots === !0 && t.slideCount > t.options.slidesToShow && t.$dots.hide(), t.$slider.addClass("slick-loading")
	}, e.prototype.swipeDirection = function() {
		var t, e, i, n, o = this;
		return t = o.touchObject.startX - o.touchObject.curX, e = o.touchObject.startY - o.touchObject.curY, i = Math.atan2(e, t), n = Math.round(180 * i / Math.PI), 0 > n && (n = 360 - Math.abs(n)), 45 >= n && n >= 0 ? o.options.rtl === !1 ? "left" : "right" : 360 >= n && n >= 315 ? o.options.rtl === !1 ? "left" : "right" : n >= 135 && 225 >= n ? o.options.rtl === !1 ? "right" : "left" : "vertical"
	}, e.prototype.swipeEnd = function() {
		var t = this;
		if (t.dragging = !1, t.shouldClick = t.touchObject.swipeLength > 10 ? !1 : !0, void 0 === t.touchObject.curX) return !1;
		if (t.touchObject.swipeLength >= t.touchObject.minSwipe) switch (t.swipeDirection()) {
			case "left":
				t.slideHandler(t.currentSlide + t.getSlideCount()), t.currentDirection = 0, t.touchObject = {};
				break;
			case "right":
				t.slideHandler(t.currentSlide - t.getSlideCount()), t.currentDirection = 1, t.touchObject = {}
		} else t.touchObject.startX !== t.touchObject.curX && (t.slideHandler(t.currentSlide), t.touchObject = {})
	}, e.prototype.swipeHandler = function(t) {
		var e = this;
		if (!(e.options.swipe === !1 || "ontouchend" in document && e.options.swipe === !1 || e.options.draggable === !1 && -1 !== t.type.indexOf("mouse"))) switch (e.touchObject.fingerCount = t.originalEvent && void 0 !== t.originalEvent.touches ? t.originalEvent.touches.length : 1, e.touchObject.minSwipe = e.listWidth / e.options.touchThreshold, t.data.action) {
			case "start":
				e.swipeStart(t);
				break;
			case "move":
				e.swipeMove(t);
				break;
			case "end":
				e.swipeEnd(t)
		}
	}, e.prototype.swipeMove = function(t) {
		var e, i, n, o, s = this;
		return o = void 0 !== t.originalEvent ? t.originalEvent.touches : null, !s.dragging || o && 1 !== o.length ? !1 : (e = s.getLeft(s.currentSlide), s.touchObject.curX = void 0 !== o ? o[0].pageX : t.clientX, s.touchObject.curY = void 0 !== o ? o[0].pageY : t.clientY, s.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(s.touchObject.curX - s.touchObject.startX, 2))), i = s.swipeDirection(), "vertical" !== i ? (void 0 !== t.originalEvent && s.touchObject.swipeLength > 4 && t.preventDefault(), n = (s.options.rtl === !1 ? 1 : -1) * (s.touchObject.curX > s.touchObject.startX ? 1 : -1), s.swipeLeft = s.options.vertical === !1 ? e + s.touchObject.swipeLength * n : e + s.touchObject.swipeLength * (s.$list.height() / s.listWidth) * n, s.options.fade === !0 || s.options.touchMove === !1 ? !1 : s.animating === !0 ? (s.swipeLeft = null, !1) : void s.setCSS(s.swipeLeft)) : void 0)
	}, e.prototype.swipeStart = function(t) {
		var e, i = this;
		return 1 !== i.touchObject.fingerCount || i.slideCount <= i.options.slidesToShow ? (i.touchObject = {}, !1) : (void 0 !== t.originalEvent && void 0 !== t.originalEvent.touches && (e = t.originalEvent.touches[0]), i.touchObject.startX = i.touchObject.curX = void 0 !== e ? e.pageX : t.clientX, i.touchObject.startY = i.touchObject.curY = void 0 !== e ? e.pageY : t.clientY, void(i.dragging = !0))
	}, e.prototype.unfilterSlides = function() {
		var t = this;
		null !== t.$slidesCache && (t.unload(), t.$slideTrack.children(this.options.slide).detach(), t.$slidesCache.appendTo(t.$slideTrack), t.reinit())
	}, e.prototype.unload = function() {
		var e = this;
		t(".slick-cloned", e.$slider).remove(), e.$dots && e.$dots.remove(), e.$prevArrow && "object" != typeof e.options.prevArrow && e.$prevArrow.remove(), e.$nextArrow && "object" != typeof e.options.nextArrow && e.$nextArrow.remove(), e.$slides.removeClass("slick-slide slick-active slick-visible").css("width", "")
	}, e.prototype.updateArrows = function() {
		var t, e = this;
		t = Math.floor(e.options.slidesToShow / 2), e.options.arrows === !0 && e.options.infinite !== !0 && e.slideCount > e.options.slidesToShow && (e.$prevArrow.removeClass("slick-disabled"), e.$nextArrow.removeClass("slick-disabled"), 0 === e.currentSlide ? (e.$prevArrow.addClass("slick-disabled"), e.$nextArrow.removeClass("slick-disabled")) : e.currentSlide >= e.slideCount - e.options.slidesToShow && e.options.centerMode === !1 ? (e.$nextArrow.addClass("slick-disabled"), e.$prevArrow.removeClass("slick-disabled")) : e.currentSlide > e.slideCount - e.options.slidesToShow + t && e.options.centerMode === !0 && (e.$nextArrow.addClass("slick-disabled"), e.$prevArrow.removeClass("slick-disabled")))
	}, e.prototype.updateDots = function() {
		var t = this;
		null !== t.$dots && (t.$dots.find("li").removeClass("slick-active"), t.$dots.find("li").eq(Math.floor(t.currentSlide / t.options.slidesToScroll)).addClass("slick-active"))
	}, t.fn.slick = function(t) {
		var i = this;
		return i.each(function(i, n) {
			n.slick = new e(n, t)
		})
	}, t.fn.slickAdd = function(t, e, i) {
		var n = this;
		return n.each(function(n, o) {
			o.slick.addSlide(t, e, i)
		})
	}, t.fn.slickCurrentSlide = function() {
		var t = this;
		return t.get(0).slick.getCurrent()
	}, t.fn.slickFilter = function(t) {
		var e = this;
		return e.each(function(e, i) {
			i.slick.filterSlides(t)
		})
	}, t.fn.slickGoTo = function(t, e) {
		var i = this;
		return i.each(function(i, n) {
			n.slick.changeSlide({
				data: {
					message: "index",
					index: parseInt(t)
				}
			}, e)
		})
	}, t.fn.slickNext = function() {
		var t = this;
		return t.each(function(t, e) {
			e.slick.changeSlide({
				data: {
					message: "next"
				}
			})
		})
	}, t.fn.slickPause = function() {
		var t = this;
		return t.each(function(t, e) {
			e.slick.autoPlayClear(), e.slick.paused = !0
		})
	}, t.fn.slickPlay = function() {
		var t = this;
		return t.each(function(t, e) {
			e.slick.paused = !1, e.slick.autoPlay()
		})
	}, t.fn.slickPrev = function() {
		var t = this;
		return t.each(function(t, e) {
			e.slick.changeSlide({
				data: {
					message: "previous"
				}
			})
		})
	}, t.fn.slickRemove = function(t, e) {
		var i = this;
		return i.each(function(i, n) {
			n.slick.removeSlide(t, e)
		})
	}, t.fn.slickRemoveAll = function() {
		var t = this;
		return t.each(function(t, e) {
			e.slick.removeSlide(null, null, !0)
		})
	}, t.fn.slickGetOption = function(t) {
		var e = this;
		return e.get(0).slick.options[t]
	}, t.fn.slickSetOption = function(t, e, i) {
		var n = this;
		return n.each(function(n, o) {
			o.slick.options[t] = e, i === !0 && (o.slick.unload(), o.slick.reinit())
		})
	}, t.fn.slickUnfilter = function() {
		var t = this;
		return t.each(function(t, e) {
			e.slick.unfilterSlides()
		})
	}, t.fn.unslick = function() {
		var t = this;
		return t.each(function(t, e) {
			e.slick && e.slick.destroy()
		})
	}, t.fn.getSlick = function() {
		var t = null,
			e = this;
		return e.each(function(e, i) {
			t = i.slick
		}), t
	}
}), $(function() {
	function t(t, e, o) {
		var s = t.hasClass("current");
		return $(".poi").removeClass("current").find("p").slideUp("fast"), s ? (n.setView([33, 110], i), !1) : (t.addClass("current").find("p").slideDown("fast"), void n.setView(e, o))
	}
	var e = window.innerWidth < 1e3,
		i = e ? 4 : 5;
	$(".banner").slick({
		autoplay: !0,
		autoplaySpeed: 2e3,
		dots: !0,
		prevArrow: "<span class='slick-prev'><i class='iconfont'>&#xe622</i></span>",
		nextArrow: "<span class='slick-next'><i class='iconfont'>&#xe649</i></span>"
	}), L.mapbox.accessToken = "pk.eyJ1IjoiaWNla290ciIsImEiOiJjaWczbDd6ODExeGxvdDRreGFuMnR5ZjR6In0.-pzQRAeFP-G6hvz1pQIYjg";
	var n = L.mapbox.map("map", "eico.mj5b6lo1", {
		scrollWheelZoom: !1,
		zoomControl: !1
	}).setView([33, 110], i);
	L.circleMarker([26.607, 106.717], {
		className: "city-marker-gy",
		radius: 15
	}).addTo(n), L.circleMarker([31.327, 121.338], {
		className: "city-marker-sh",
		radius: 15
	}).addTo(n), L.circleMarker([30.189, 120.167], {
		className: "city-marker-hz",
		radius: 15
	}).addTo(n), $(".poi-guiyang").on("click", function() {
		t($(this), [26.607, 106.717], 14)
	}), $(".poi-shanghai").on("click", function() {
		t($(this), [31.327, 121.338], 14)
	}), $(".poi-hangzhou").on("click", function() {
		t($(this), [30.189, 120.167], 14)
	}), $(".city-marker-gy").on("click", function() {
		return e ? void $(".poi-box-gy").toggle() : !1
	}), $(".city-marker-sh").on("click", function() {
		return e ? void $(".poi-box-sh").toggle() : !1
	}), $(".city-marker-hz").on("click", function() {
		return e ? void $(".poi-box-hz").toggle() : !1
	}), $(".poi-box-close").on("click", function() {
		$(".poi-box").hide()
	})
}());