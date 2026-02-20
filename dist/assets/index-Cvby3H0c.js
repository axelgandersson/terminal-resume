var Rd = (e) => {
	throw TypeError(e);
};
var ra = (e, t, n) => t.has(e) || Rd("Cannot " + n);
var R = (e, t, n) => (
		ra(e, t, "read from private field"),
		n ? n.call(e) : t.get(e)
	),
	ne = (e, t, n) =>
		t.has(e)
			? Rd("Cannot add the same private member more than once")
			: t instanceof WeakSet
				? t.add(e)
				: t.set(e, n),
	G = (e, t, n, r) => (
		ra(e, t, "write to private field"),
		r ? r.call(e, n) : t.set(e, n),
		n
	),
	Le = (e, t, n) => (ra(e, t, "access private method"), n);
var Xi = (e, t, n, r) => ({
	set _(o) {
		G(e, t, o, n);
	},
	get _() {
		return R(e, t, r);
	},
});
function wy(e, t) {
	for (var n = 0; n < t.length; n++) {
		const r = t[n];
		if (typeof r != "string" && !Array.isArray(r)) {
			for (const o in r)
				if (o !== "default" && !(o in e)) {
					const i = Object.getOwnPropertyDescriptor(r, o);
					i &&
						Object.defineProperty(
							e,
							o,
							i.get ? i : { enumerable: !0, get: () => r[o] },
						);
				}
		}
	}
	return Object.freeze(
		Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
	);
}
(function () {
	const t = document.createElement("link").relList;
	if (t && t.supports && t.supports("modulepreload")) return;
	for (const o of document.querySelectorAll('link[rel="modulepreload"]')) r(o);
	new MutationObserver((o) => {
		for (const i of o)
			if (i.type === "childList")
				for (const s of i.addedNodes)
					s.tagName === "LINK" && s.rel === "modulepreload" && r(s);
	}).observe(document, { childList: !0, subtree: !0 });
	function n(o) {
		const i = {};
		return (
			o.integrity && (i.integrity = o.integrity),
			o.referrerPolicy && (i.referrerPolicy = o.referrerPolicy),
			o.crossOrigin === "use-credentials"
				? (i.credentials = "include")
				: o.crossOrigin === "anonymous"
					? (i.credentials = "omit")
					: (i.credentials = "same-origin"),
			i
		);
	}
	function r(o) {
		if (o.ep) return;
		o.ep = !0;
		const i = n(o);
		fetch(o.href, i);
	}
})();
function Kp(e) {
	return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default")
		? e.default
		: e;
}
var Gp = { exports: {} },
	wl = {},
	Yp = { exports: {} },
	ee = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var ji = Symbol.for("react.element"),
	xy = Symbol.for("react.portal"),
	Sy = Symbol.for("react.fragment"),
	Ey = Symbol.for("react.strict_mode"),
	Cy = Symbol.for("react.profiler"),
	ky = Symbol.for("react.provider"),
	by = Symbol.for("react.context"),
	Py = Symbol.for("react.forward_ref"),
	Ty = Symbol.for("react.suspense"),
	Ry = Symbol.for("react.memo"),
	Ny = Symbol.for("react.lazy"),
	Nd = Symbol.iterator;
function Ay(e) {
	return e === null || typeof e != "object"
		? null
		: ((e = (Nd && e[Nd]) || e["@@iterator"]),
			typeof e == "function" ? e : null);
}
var Xp = {
		isMounted: function () {
			return !1;
		},
		enqueueForceUpdate: function () {},
		enqueueReplaceState: function () {},
		enqueueSetState: function () {},
	},
	qp = Object.assign,
	Zp = {};
function Ao(e, t, n) {
	((this.props = e),
		(this.context = t),
		(this.refs = Zp),
		(this.updater = n || Xp));
}
Ao.prototype.isReactComponent = {};
Ao.prototype.setState = function (e, t) {
	if (typeof e != "object" && typeof e != "function" && e != null)
		throw Error(
			"setState(...): takes an object of state variables to update or a function which returns an object of state variables.",
		);
	this.updater.enqueueSetState(this, e, t, "setState");
};
Ao.prototype.forceUpdate = function (e) {
	this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function Jp() {}
Jp.prototype = Ao.prototype;
function oc(e, t, n) {
	((this.props = e),
		(this.context = t),
		(this.refs = Zp),
		(this.updater = n || Xp));
}
var ic = (oc.prototype = new Jp());
ic.constructor = oc;
qp(ic, Ao.prototype);
ic.isPureReactComponent = !0;
var Ad = Array.isArray,
	eh = Object.prototype.hasOwnProperty,
	sc = { current: null },
	th = { key: !0, ref: !0, __self: !0, __source: !0 };
function nh(e, t, n) {
	var r,
		o = {},
		i = null,
		s = null;
	if (t != null)
		for (r in (t.ref !== void 0 && (s = t.ref),
		t.key !== void 0 && (i = "" + t.key),
		t))
			eh.call(t, r) && !th.hasOwnProperty(r) && (o[r] = t[r]);
	var l = arguments.length - 2;
	if (l === 1) o.children = n;
	else if (1 < l) {
		for (var a = Array(l), u = 0; u < l; u++) a[u] = arguments[u + 2];
		o.children = a;
	}
	if (e && e.defaultProps)
		for (r in ((l = e.defaultProps), l)) o[r] === void 0 && (o[r] = l[r]);
	return {
		$$typeof: ji,
		type: e,
		key: i,
		ref: s,
		props: o,
		_owner: sc.current,
	};
}
function Oy(e, t) {
	return {
		$$typeof: ji,
		type: e.type,
		key: t,
		ref: e.ref,
		props: e.props,
		_owner: e._owner,
	};
}
function lc(e) {
	return typeof e == "object" && e !== null && e.$$typeof === ji;
}
function _y(e) {
	var t = { "=": "=0", ":": "=2" };
	return (
		"$" +
		e.replace(/[=:]/g, function (n) {
			return t[n];
		})
	);
}
var Od = /\/+/g;
function oa(e, t) {
	return typeof e == "object" && e !== null && e.key != null
		? _y("" + e.key)
		: t.toString(36);
}
function ws(e, t, n, r, o) {
	var i = typeof e;
	(i === "undefined" || i === "boolean") && (e = null);
	var s = !1;
	if (e === null) s = !0;
	else
		switch (i) {
			case "string":
			case "number":
				s = !0;
				break;
			case "object":
				switch (e.$$typeof) {
					case ji:
					case xy:
						s = !0;
				}
		}
	if (s)
		return (
			(s = e),
			(o = o(s)),
			(e = r === "" ? "." + oa(s, 0) : r),
			Ad(o)
				? ((n = ""),
					e != null && (n = e.replace(Od, "$&/") + "/"),
					ws(o, t, n, "", function (u) {
						return u;
					}))
				: o != null &&
					(lc(o) &&
						(o = Oy(
							o,
							n +
								(!o.key || (s && s.key === o.key)
									? ""
									: ("" + o.key).replace(Od, "$&/") + "/") +
								e,
						)),
					t.push(o)),
			1
		);
	if (((s = 0), (r = r === "" ? "." : r + ":"), Ad(e)))
		for (var l = 0; l < e.length; l++) {
			i = e[l];
			var a = r + oa(i, l);
			s += ws(i, t, n, a, o);
		}
	else if (((a = Ay(e)), typeof a == "function"))
		for (e = a.call(e), l = 0; !(i = e.next()).done; )
			((i = i.value), (a = r + oa(i, l++)), (s += ws(i, t, n, a, o)));
	else if (i === "object")
		throw (
			(t = String(e)),
			Error(
				"Objects are not valid as a React child (found: " +
					(t === "[object Object]"
						? "object with keys {" + Object.keys(e).join(", ") + "}"
						: t) +
					"). If you meant to render a collection of children, use an array instead.",
			)
		);
	return s;
}
function qi(e, t, n) {
	if (e == null) return e;
	var r = [],
		o = 0;
	return (
		ws(e, r, "", "", function (i) {
			return t.call(n, i, o++);
		}),
		r
	);
}
function Iy(e) {
	if (e._status === -1) {
		var t = e._result;
		((t = t()),
			t.then(
				function (n) {
					(e._status === 0 || e._status === -1) &&
						((e._status = 1), (e._result = n));
				},
				function (n) {
					(e._status === 0 || e._status === -1) &&
						((e._status = 2), (e._result = n));
				},
			),
			e._status === -1 && ((e._status = 0), (e._result = t)));
	}
	if (e._status === 1) return e._result.default;
	throw e._result;
}
var He = { current: null },
	xs = { transition: null },
	Ly = {
		ReactCurrentDispatcher: He,
		ReactCurrentBatchConfig: xs,
		ReactCurrentOwner: sc,
	};
function rh() {
	throw Error("act(...) is not supported in production builds of React.");
}
ee.Children = {
	map: qi,
	forEach: function (e, t, n) {
		qi(
			e,
			function () {
				t.apply(this, arguments);
			},
			n,
		);
	},
	count: function (e) {
		var t = 0;
		return (
			qi(e, function () {
				t++;
			}),
			t
		);
	},
	toArray: function (e) {
		return (
			qi(e, function (t) {
				return t;
			}) || []
		);
	},
	only: function (e) {
		if (!lc(e))
			throw Error(
				"React.Children.only expected to receive a single React element child.",
			);
		return e;
	},
};
ee.Component = Ao;
ee.Fragment = Sy;
ee.Profiler = Cy;
ee.PureComponent = oc;
ee.StrictMode = Ey;
ee.Suspense = Ty;
ee.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Ly;
ee.act = rh;
ee.cloneElement = function (e, t, n) {
	if (e == null)
		throw Error(
			"React.cloneElement(...): The argument must be a React element, but you passed " +
				e +
				".",
		);
	var r = qp({}, e.props),
		o = e.key,
		i = e.ref,
		s = e._owner;
	if (t != null) {
		if (
			(t.ref !== void 0 && ((i = t.ref), (s = sc.current)),
			t.key !== void 0 && (o = "" + t.key),
			e.type && e.type.defaultProps)
		)
			var l = e.type.defaultProps;
		for (a in t)
			eh.call(t, a) &&
				!th.hasOwnProperty(a) &&
				(r[a] = t[a] === void 0 && l !== void 0 ? l[a] : t[a]);
	}
	var a = arguments.length - 2;
	if (a === 1) r.children = n;
	else if (1 < a) {
		l = Array(a);
		for (var u = 0; u < a; u++) l[u] = arguments[u + 2];
		r.children = l;
	}
	return { $$typeof: ji, type: e.type, key: o, ref: i, props: r, _owner: s };
};
ee.createContext = function (e) {
	return (
		(e = {
			$$typeof: by,
			_currentValue: e,
			_currentValue2: e,
			_threadCount: 0,
			Provider: null,
			Consumer: null,
			_defaultValue: null,
			_globalName: null,
		}),
		(e.Provider = { $$typeof: ky, _context: e }),
		(e.Consumer = e)
	);
};
ee.createElement = nh;
ee.createFactory = function (e) {
	var t = nh.bind(null, e);
	return ((t.type = e), t);
};
ee.createRef = function () {
	return { current: null };
};
ee.forwardRef = function (e) {
	return { $$typeof: Py, render: e };
};
ee.isValidElement = lc;
ee.lazy = function (e) {
	return { $$typeof: Ny, _payload: { _status: -1, _result: e }, _init: Iy };
};
ee.memo = function (e, t) {
	return { $$typeof: Ry, type: e, compare: t === void 0 ? null : t };
};
ee.startTransition = function (e) {
	var t = xs.transition;
	xs.transition = {};
	try {
		e();
	} finally {
		xs.transition = t;
	}
};
ee.unstable_act = rh;
ee.useCallback = function (e, t) {
	return He.current.useCallback(e, t);
};
ee.useContext = function (e) {
	return He.current.useContext(e);
};
ee.useDebugValue = function () {};
ee.useDeferredValue = function (e) {
	return He.current.useDeferredValue(e);
};
ee.useEffect = function (e, t) {
	return He.current.useEffect(e, t);
};
ee.useId = function () {
	return He.current.useId();
};
ee.useImperativeHandle = function (e, t, n) {
	return He.current.useImperativeHandle(e, t, n);
};
ee.useInsertionEffect = function (e, t) {
	return He.current.useInsertionEffect(e, t);
};
ee.useLayoutEffect = function (e, t) {
	return He.current.useLayoutEffect(e, t);
};
ee.useMemo = function (e, t) {
	return He.current.useMemo(e, t);
};
ee.useReducer = function (e, t, n) {
	return He.current.useReducer(e, t, n);
};
ee.useRef = function (e) {
	return He.current.useRef(e);
};
ee.useState = function (e) {
	return He.current.useState(e);
};
ee.useSyncExternalStore = function (e, t, n) {
	return He.current.useSyncExternalStore(e, t, n);
};
ee.useTransition = function () {
	return He.current.useTransition();
};
ee.version = "18.3.1";
Yp.exports = ee;
var S = Yp.exports;
const $ = Kp(S),
	oh = wy({ __proto__: null, default: $ }, [S]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var $y = S,
	My = Symbol.for("react.element"),
	Dy = Symbol.for("react.fragment"),
	jy = Object.prototype.hasOwnProperty,
	Fy = $y.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
	zy = { key: !0, ref: !0, __self: !0, __source: !0 };
function ih(e, t, n) {
	var r,
		o = {},
		i = null,
		s = null;
	(n !== void 0 && (i = "" + n),
		t.key !== void 0 && (i = "" + t.key),
		t.ref !== void 0 && (s = t.ref));
	for (r in t) jy.call(t, r) && !zy.hasOwnProperty(r) && (o[r] = t[r]);
	if (e && e.defaultProps)
		for (r in ((t = e.defaultProps), t)) o[r] === void 0 && (o[r] = t[r]);
	return {
		$$typeof: My,
		type: e,
		key: i,
		ref: s,
		props: o,
		_owner: Fy.current,
	};
}
wl.Fragment = Dy;
wl.jsx = ih;
wl.jsxs = ih;
Gp.exports = wl;
var P = Gp.exports,
	sh = { exports: {} },
	dt = {},
	lh = { exports: {} },
	ah = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
	function t(T, N) {
		var F = T.length;
		T.push(N);
		e: for (; 0 < F; ) {
			var H = (F - 1) >>> 1,
				U = T[H];
			if (0 < o(U, N)) ((T[H] = N), (T[F] = U), (F = H));
			else break e;
		}
	}
	function n(T) {
		return T.length === 0 ? null : T[0];
	}
	function r(T) {
		if (T.length === 0) return null;
		var N = T[0],
			F = T.pop();
		if (F !== N) {
			T[0] = F;
			e: for (var H = 0, U = T.length, q = U >>> 1; H < q; ) {
				var Z = 2 * (H + 1) - 1,
					fe = T[Z],
					xe = Z + 1,
					J = T[xe];
				if (0 > o(fe, F))
					xe < U && 0 > o(J, fe)
						? ((T[H] = J), (T[xe] = F), (H = xe))
						: ((T[H] = fe), (T[Z] = F), (H = Z));
				else if (xe < U && 0 > o(J, F)) ((T[H] = J), (T[xe] = F), (H = xe));
				else break e;
			}
		}
		return N;
	}
	function o(T, N) {
		var F = T.sortIndex - N.sortIndex;
		return F !== 0 ? F : T.id - N.id;
	}
	if (typeof performance == "object" && typeof performance.now == "function") {
		var i = performance;
		e.unstable_now = function () {
			return i.now();
		};
	} else {
		var s = Date,
			l = s.now();
		e.unstable_now = function () {
			return s.now() - l;
		};
	}
	var a = [],
		u = [],
		c = 1,
		f = null,
		h = 3,
		d = !1,
		w = !1,
		v = !1,
		y = typeof setTimeout == "function" ? setTimeout : null,
		m = typeof clearTimeout == "function" ? clearTimeout : null,
		p = typeof setImmediate < "u" ? setImmediate : null;
	typeof navigator < "u" &&
		navigator.scheduling !== void 0 &&
		navigator.scheduling.isInputPending !== void 0 &&
		navigator.scheduling.isInputPending.bind(navigator.scheduling);
	function g(T) {
		for (var N = n(u); N !== null; ) {
			if (N.callback === null) r(u);
			else if (N.startTime <= T)
				(r(u), (N.sortIndex = N.expirationTime), t(a, N));
			else break;
			N = n(u);
		}
	}
	function x(T) {
		if (((v = !1), g(T), !w))
			if (n(a) !== null) ((w = !0), B(C));
			else {
				var N = n(u);
				N !== null && V(x, N.startTime - T);
			}
	}
	function C(T, N) {
		((w = !1), v && ((v = !1), m(b), (b = -1)), (d = !0));
		var F = h;
		try {
			for (
				g(N), f = n(a);
				f !== null && (!(f.expirationTime > N) || (T && !j()));
			) {
				var H = f.callback;
				if (typeof H == "function") {
					((f.callback = null), (h = f.priorityLevel));
					var U = H(f.expirationTime <= N);
					((N = e.unstable_now()),
						typeof U == "function" ? (f.callback = U) : f === n(a) && r(a),
						g(N));
				} else r(a);
				f = n(a);
			}
			if (f !== null) var q = !0;
			else {
				var Z = n(u);
				(Z !== null && V(x, Z.startTime - N), (q = !1));
			}
			return q;
		} finally {
			((f = null), (h = F), (d = !1));
		}
	}
	var k = !1,
		E = null,
		b = -1,
		_ = 5,
		L = -1;
	function j() {
		return !(e.unstable_now() - L < _);
	}
	function D() {
		if (E !== null) {
			var T = e.unstable_now();
			L = T;
			var N = !0;
			try {
				N = E(!0, T);
			} finally {
				N ? M() : ((k = !1), (E = null));
			}
		} else k = !1;
	}
	var M;
	if (typeof p == "function")
		M = function () {
			p(D);
		};
	else if (typeof MessageChannel < "u") {
		var A = new MessageChannel(),
			Q = A.port2;
		((A.port1.onmessage = D),
			(M = function () {
				Q.postMessage(null);
			}));
	} else
		M = function () {
			y(D, 0);
		};
	function B(T) {
		((E = T), k || ((k = !0), M()));
	}
	function V(T, N) {
		b = y(function () {
			T(e.unstable_now());
		}, N);
	}
	((e.unstable_IdlePriority = 5),
		(e.unstable_ImmediatePriority = 1),
		(e.unstable_LowPriority = 4),
		(e.unstable_NormalPriority = 3),
		(e.unstable_Profiling = null),
		(e.unstable_UserBlockingPriority = 2),
		(e.unstable_cancelCallback = function (T) {
			T.callback = null;
		}),
		(e.unstable_continueExecution = function () {
			w || d || ((w = !0), B(C));
		}),
		(e.unstable_forceFrameRate = function (T) {
			0 > T || 125 < T
				? console.error(
						"forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported",
					)
				: (_ = 0 < T ? Math.floor(1e3 / T) : 5);
		}),
		(e.unstable_getCurrentPriorityLevel = function () {
			return h;
		}),
		(e.unstable_getFirstCallbackNode = function () {
			return n(a);
		}),
		(e.unstable_next = function (T) {
			switch (h) {
				case 1:
				case 2:
				case 3:
					var N = 3;
					break;
				default:
					N = h;
			}
			var F = h;
			h = N;
			try {
				return T();
			} finally {
				h = F;
			}
		}),
		(e.unstable_pauseExecution = function () {}),
		(e.unstable_requestPaint = function () {}),
		(e.unstable_runWithPriority = function (T, N) {
			switch (T) {
				case 1:
				case 2:
				case 3:
				case 4:
				case 5:
					break;
				default:
					T = 3;
			}
			var F = h;
			h = T;
			try {
				return N();
			} finally {
				h = F;
			}
		}),
		(e.unstable_scheduleCallback = function (T, N, F) {
			var H = e.unstable_now();
			switch (
				(typeof F == "object" && F !== null
					? ((F = F.delay), (F = typeof F == "number" && 0 < F ? H + F : H))
					: (F = H),
				T)
			) {
				case 1:
					var U = -1;
					break;
				case 2:
					U = 250;
					break;
				case 5:
					U = 1073741823;
					break;
				case 4:
					U = 1e4;
					break;
				default:
					U = 5e3;
			}
			return (
				(U = F + U),
				(T = {
					id: c++,
					callback: N,
					priorityLevel: T,
					startTime: F,
					expirationTime: U,
					sortIndex: -1,
				}),
				F > H
					? ((T.sortIndex = F),
						t(u, T),
						n(a) === null &&
							T === n(u) &&
							(v ? (m(b), (b = -1)) : (v = !0), V(x, F - H)))
					: ((T.sortIndex = U), t(a, T), w || d || ((w = !0), B(C))),
				T
			);
		}),
		(e.unstable_shouldYield = j),
		(e.unstable_wrapCallback = function (T) {
			var N = h;
			return function () {
				var F = h;
				h = N;
				try {
					return T.apply(this, arguments);
				} finally {
					h = F;
				}
			};
		}));
})(ah);
lh.exports = ah;
var By = lh.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Uy = S,
	ct = By;
function I(e) {
	for (
		var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1;
		n < arguments.length;
		n++
	)
		t += "&args[]=" + encodeURIComponent(arguments[n]);
	return (
		"Minified React error #" +
		e +
		"; visit " +
		t +
		" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
	);
}
var uh = new Set(),
	pi = {};
function Ar(e, t) {
	(vo(e, t), vo(e + "Capture", t));
}
function vo(e, t) {
	for (pi[e] = t, e = 0; e < t.length; e++) uh.add(t[e]);
}
var pn = !(
		typeof window > "u" ||
		typeof window.document > "u" ||
		typeof window.document.createElement > "u"
	),
	Ua = Object.prototype.hasOwnProperty,
	Wy =
		/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
	_d = {},
	Id = {};
function Vy(e) {
	return Ua.call(Id, e)
		? !0
		: Ua.call(_d, e)
			? !1
			: Wy.test(e)
				? (Id[e] = !0)
				: ((_d[e] = !0), !1);
}
function Hy(e, t, n, r) {
	if (n !== null && n.type === 0) return !1;
	switch (typeof t) {
		case "function":
		case "symbol":
			return !0;
		case "boolean":
			return r
				? !1
				: n !== null
					? !n.acceptsBooleans
					: ((e = e.toLowerCase().slice(0, 5)), e !== "data-" && e !== "aria-");
		default:
			return !1;
	}
}
function Qy(e, t, n, r) {
	if (t === null || typeof t > "u" || Hy(e, t, n, r)) return !0;
	if (r) return !1;
	if (n !== null)
		switch (n.type) {
			case 3:
				return !t;
			case 4:
				return t === !1;
			case 5:
				return isNaN(t);
			case 6:
				return isNaN(t) || 1 > t;
		}
	return !1;
}
function Qe(e, t, n, r, o, i, s) {
	((this.acceptsBooleans = t === 2 || t === 3 || t === 4),
		(this.attributeName = r),
		(this.attributeNamespace = o),
		(this.mustUseProperty = n),
		(this.propertyName = e),
		(this.type = t),
		(this.sanitizeURL = i),
		(this.removeEmptyString = s));
}
var Ie = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
	.split(" ")
	.forEach(function (e) {
		Ie[e] = new Qe(e, 0, !1, e, null, !1, !1);
	});
[
	["acceptCharset", "accept-charset"],
	["className", "class"],
	["htmlFor", "for"],
	["httpEquiv", "http-equiv"],
].forEach(function (e) {
	var t = e[0];
	Ie[t] = new Qe(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
	Ie[e] = new Qe(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
	"autoReverse",
	"externalResourcesRequired",
	"focusable",
	"preserveAlpha",
].forEach(function (e) {
	Ie[e] = new Qe(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
	.split(" ")
	.forEach(function (e) {
		Ie[e] = new Qe(e, 3, !1, e.toLowerCase(), null, !1, !1);
	});
["checked", "multiple", "muted", "selected"].forEach(function (e) {
	Ie[e] = new Qe(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function (e) {
	Ie[e] = new Qe(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (e) {
	Ie[e] = new Qe(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function (e) {
	Ie[e] = new Qe(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var ac = /[\-:]([a-z])/g;
function uc(e) {
	return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
	.split(" ")
	.forEach(function (e) {
		var t = e.replace(ac, uc);
		Ie[t] = new Qe(t, 1, !1, e, null, !1, !1);
	});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
	.split(" ")
	.forEach(function (e) {
		var t = e.replace(ac, uc);
		Ie[t] = new Qe(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
	});
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
	var t = e.replace(ac, uc);
	Ie[t] = new Qe(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (e) {
	Ie[e] = new Qe(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
Ie.xlinkHref = new Qe(
	"xlinkHref",
	1,
	!1,
	"xlink:href",
	"http://www.w3.org/1999/xlink",
	!0,
	!1,
);
["src", "href", "action", "formAction"].forEach(function (e) {
	Ie[e] = new Qe(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function cc(e, t, n, r) {
	var o = Ie.hasOwnProperty(t) ? Ie[t] : null;
	(o !== null
		? o.type !== 0
		: r ||
			!(2 < t.length) ||
			(t[0] !== "o" && t[0] !== "O") ||
			(t[1] !== "n" && t[1] !== "N")) &&
		(Qy(t, n, o, r) && (n = null),
		r || o === null
			? Vy(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
			: o.mustUseProperty
				? (e[o.propertyName] = n === null ? (o.type === 3 ? !1 : "") : n)
				: ((t = o.attributeName),
					(r = o.attributeNamespace),
					n === null
						? e.removeAttribute(t)
						: ((o = o.type),
							(n = o === 3 || (o === 4 && n === !0) ? "" : "" + n),
							r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var wn = Uy.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
	Zi = Symbol.for("react.element"),
	Br = Symbol.for("react.portal"),
	Ur = Symbol.for("react.fragment"),
	dc = Symbol.for("react.strict_mode"),
	Wa = Symbol.for("react.profiler"),
	ch = Symbol.for("react.provider"),
	dh = Symbol.for("react.context"),
	fc = Symbol.for("react.forward_ref"),
	Va = Symbol.for("react.suspense"),
	Ha = Symbol.for("react.suspense_list"),
	pc = Symbol.for("react.memo"),
	Rn = Symbol.for("react.lazy"),
	fh = Symbol.for("react.offscreen"),
	Ld = Symbol.iterator;
function Fo(e) {
	return e === null || typeof e != "object"
		? null
		: ((e = (Ld && e[Ld]) || e["@@iterator"]),
			typeof e == "function" ? e : null);
}
var ve = Object.assign,
	ia;
function Yo(e) {
	if (ia === void 0)
		try {
			throw Error();
		} catch (n) {
			var t = n.stack.trim().match(/\n( *(at )?)/);
			ia = (t && t[1]) || "";
		}
	return (
		`
` +
		ia +
		e
	);
}
var sa = !1;
function la(e, t) {
	if (!e || sa) return "";
	sa = !0;
	var n = Error.prepareStackTrace;
	Error.prepareStackTrace = void 0;
	try {
		if (t)
			if (
				((t = function () {
					throw Error();
				}),
				Object.defineProperty(t.prototype, "props", {
					set: function () {
						throw Error();
					},
				}),
				typeof Reflect == "object" && Reflect.construct)
			) {
				try {
					Reflect.construct(t, []);
				} catch (u) {
					var r = u;
				}
				Reflect.construct(e, [], t);
			} else {
				try {
					t.call();
				} catch (u) {
					r = u;
				}
				e.call(t.prototype);
			}
		else {
			try {
				throw Error();
			} catch (u) {
				r = u;
			}
			e();
		}
	} catch (u) {
		if (u && r && typeof u.stack == "string") {
			for (
				var o = u.stack.split(`
`),
					i = r.stack.split(`
`),
					s = o.length - 1,
					l = i.length - 1;
				1 <= s && 0 <= l && o[s] !== i[l];
			)
				l--;
			for (; 1 <= s && 0 <= l; s--, l--)
				if (o[s] !== i[l]) {
					if (s !== 1 || l !== 1)
						do
							if ((s--, l--, 0 > l || o[s] !== i[l])) {
								var a =
									`
` + o[s].replace(" at new ", " at ");
								return (
									e.displayName &&
										a.includes("<anonymous>") &&
										(a = a.replace("<anonymous>", e.displayName)),
									a
								);
							}
						while (1 <= s && 0 <= l);
					break;
				}
		}
	} finally {
		((sa = !1), (Error.prepareStackTrace = n));
	}
	return (e = e ? e.displayName || e.name : "") ? Yo(e) : "";
}
function Ky(e) {
	switch (e.tag) {
		case 5:
			return Yo(e.type);
		case 16:
			return Yo("Lazy");
		case 13:
			return Yo("Suspense");
		case 19:
			return Yo("SuspenseList");
		case 0:
		case 2:
		case 15:
			return ((e = la(e.type, !1)), e);
		case 11:
			return ((e = la(e.type.render, !1)), e);
		case 1:
			return ((e = la(e.type, !0)), e);
		default:
			return "";
	}
}
function Qa(e) {
	if (e == null) return null;
	if (typeof e == "function") return e.displayName || e.name || null;
	if (typeof e == "string") return e;
	switch (e) {
		case Ur:
			return "Fragment";
		case Br:
			return "Portal";
		case Wa:
			return "Profiler";
		case dc:
			return "StrictMode";
		case Va:
			return "Suspense";
		case Ha:
			return "SuspenseList";
	}
	if (typeof e == "object")
		switch (e.$$typeof) {
			case dh:
				return (e.displayName || "Context") + ".Consumer";
			case ch:
				return (e._context.displayName || "Context") + ".Provider";
			case fc:
				var t = e.render;
				return (
					(e = e.displayName),
					e ||
						((e = t.displayName || t.name || ""),
						(e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
					e
				);
			case pc:
				return (
					(t = e.displayName || null),
					t !== null ? t : Qa(e.type) || "Memo"
				);
			case Rn:
				((t = e._payload), (e = e._init));
				try {
					return Qa(e(t));
				} catch {}
		}
	return null;
}
function Gy(e) {
	var t = e.type;
	switch (e.tag) {
		case 24:
			return "Cache";
		case 9:
			return (t.displayName || "Context") + ".Consumer";
		case 10:
			return (t._context.displayName || "Context") + ".Provider";
		case 18:
			return "DehydratedFragment";
		case 11:
			return (
				(e = t.render),
				(e = e.displayName || e.name || ""),
				t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")
			);
		case 7:
			return "Fragment";
		case 5:
			return t;
		case 4:
			return "Portal";
		case 3:
			return "Root";
		case 6:
			return "Text";
		case 16:
			return Qa(t);
		case 8:
			return t === dc ? "StrictMode" : "Mode";
		case 22:
			return "Offscreen";
		case 12:
			return "Profiler";
		case 21:
			return "Scope";
		case 13:
			return "Suspense";
		case 19:
			return "SuspenseList";
		case 25:
			return "TracingMarker";
		case 1:
		case 0:
		case 17:
		case 2:
		case 14:
		case 15:
			if (typeof t == "function") return t.displayName || t.name || null;
			if (typeof t == "string") return t;
	}
	return null;
}
function Yn(e) {
	switch (typeof e) {
		case "boolean":
		case "number":
		case "string":
		case "undefined":
			return e;
		case "object":
			return e;
		default:
			return "";
	}
}
function ph(e) {
	var t = e.type;
	return (
		(e = e.nodeName) &&
		e.toLowerCase() === "input" &&
		(t === "checkbox" || t === "radio")
	);
}
function Yy(e) {
	var t = ph(e) ? "checked" : "value",
		n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
		r = "" + e[t];
	if (
		!e.hasOwnProperty(t) &&
		typeof n < "u" &&
		typeof n.get == "function" &&
		typeof n.set == "function"
	) {
		var o = n.get,
			i = n.set;
		return (
			Object.defineProperty(e, t, {
				configurable: !0,
				get: function () {
					return o.call(this);
				},
				set: function (s) {
					((r = "" + s), i.call(this, s));
				},
			}),
			Object.defineProperty(e, t, { enumerable: n.enumerable }),
			{
				getValue: function () {
					return r;
				},
				setValue: function (s) {
					r = "" + s;
				},
				stopTracking: function () {
					((e._valueTracker = null), delete e[t]);
				},
			}
		);
	}
}
function Ji(e) {
	e._valueTracker || (e._valueTracker = Yy(e));
}
function hh(e) {
	if (!e) return !1;
	var t = e._valueTracker;
	if (!t) return !0;
	var n = t.getValue(),
		r = "";
	return (
		e && (r = ph(e) ? (e.checked ? "true" : "false") : e.value),
		(e = r),
		e !== n ? (t.setValue(e), !0) : !1
	);
}
function Fs(e) {
	if (((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u"))
		return null;
	try {
		return e.activeElement || e.body;
	} catch {
		return e.body;
	}
}
function Ka(e, t) {
	var n = t.checked;
	return ve({}, t, {
		defaultChecked: void 0,
		defaultValue: void 0,
		value: void 0,
		checked: n ?? e._wrapperState.initialChecked,
	});
}
function $d(e, t) {
	var n = t.defaultValue == null ? "" : t.defaultValue,
		r = t.checked != null ? t.checked : t.defaultChecked;
	((n = Yn(t.value != null ? t.value : n)),
		(e._wrapperState = {
			initialChecked: r,
			initialValue: n,
			controlled:
				t.type === "checkbox" || t.type === "radio"
					? t.checked != null
					: t.value != null,
		}));
}
function mh(e, t) {
	((t = t.checked), t != null && cc(e, "checked", t, !1));
}
function Ga(e, t) {
	mh(e, t);
	var n = Yn(t.value),
		r = t.type;
	if (n != null)
		r === "number"
			? ((n === 0 && e.value === "") || e.value != n) && (e.value = "" + n)
			: e.value !== "" + n && (e.value = "" + n);
	else if (r === "submit" || r === "reset") {
		e.removeAttribute("value");
		return;
	}
	(t.hasOwnProperty("value")
		? Ya(e, t.type, n)
		: t.hasOwnProperty("defaultValue") && Ya(e, t.type, Yn(t.defaultValue)),
		t.checked == null &&
			t.defaultChecked != null &&
			(e.defaultChecked = !!t.defaultChecked));
}
function Md(e, t, n) {
	if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
		var r = t.type;
		if (
			!(
				(r !== "submit" && r !== "reset") ||
				(t.value !== void 0 && t.value !== null)
			)
		)
			return;
		((t = "" + e._wrapperState.initialValue),
			n || t === e.value || (e.value = t),
			(e.defaultValue = t));
	}
	((n = e.name),
		n !== "" && (e.name = ""),
		(e.defaultChecked = !!e._wrapperState.initialChecked),
		n !== "" && (e.name = n));
}
function Ya(e, t, n) {
	(t !== "number" || Fs(e.ownerDocument) !== e) &&
		(n == null
			? (e.defaultValue = "" + e._wrapperState.initialValue)
			: e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var Xo = Array.isArray;
function Jr(e, t, n, r) {
	if (((e = e.options), t)) {
		t = {};
		for (var o = 0; o < n.length; o++) t["$" + n[o]] = !0;
		for (n = 0; n < e.length; n++)
			((o = t.hasOwnProperty("$" + e[n].value)),
				e[n].selected !== o && (e[n].selected = o),
				o && r && (e[n].defaultSelected = !0));
	} else {
		for (n = "" + Yn(n), t = null, o = 0; o < e.length; o++) {
			if (e[o].value === n) {
				((e[o].selected = !0), r && (e[o].defaultSelected = !0));
				return;
			}
			t !== null || e[o].disabled || (t = e[o]);
		}
		t !== null && (t.selected = !0);
	}
}
function Xa(e, t) {
	if (t.dangerouslySetInnerHTML != null) throw Error(I(91));
	return ve({}, t, {
		value: void 0,
		defaultValue: void 0,
		children: "" + e._wrapperState.initialValue,
	});
}
function Dd(e, t) {
	var n = t.value;
	if (n == null) {
		if (((n = t.children), (t = t.defaultValue), n != null)) {
			if (t != null) throw Error(I(92));
			if (Xo(n)) {
				if (1 < n.length) throw Error(I(93));
				n = n[0];
			}
			t = n;
		}
		(t == null && (t = ""), (n = t));
	}
	e._wrapperState = { initialValue: Yn(n) };
}
function gh(e, t) {
	var n = Yn(t.value),
		r = Yn(t.defaultValue);
	(n != null &&
		((n = "" + n),
		n !== e.value && (e.value = n),
		t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
		r != null && (e.defaultValue = "" + r));
}
function jd(e) {
	var t = e.textContent;
	t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function vh(e) {
	switch (e) {
		case "svg":
			return "http://www.w3.org/2000/svg";
		case "math":
			return "http://www.w3.org/1998/Math/MathML";
		default:
			return "http://www.w3.org/1999/xhtml";
	}
}
function qa(e, t) {
	return e == null || e === "http://www.w3.org/1999/xhtml"
		? vh(t)
		: e === "http://www.w3.org/2000/svg" && t === "foreignObject"
			? "http://www.w3.org/1999/xhtml"
			: e;
}
var es,
	yh = (function (e) {
		return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
			? function (t, n, r, o) {
					MSApp.execUnsafeLocalFunction(function () {
						return e(t, n, r, o);
					});
				}
			: e;
	})(function (e, t) {
		if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
			e.innerHTML = t;
		else {
			for (
				es = es || document.createElement("div"),
					es.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
					t = es.firstChild;
				e.firstChild;
			)
				e.removeChild(e.firstChild);
			for (; t.firstChild; ) e.appendChild(t.firstChild);
		}
	});
function hi(e, t) {
	if (t) {
		var n = e.firstChild;
		if (n && n === e.lastChild && n.nodeType === 3) {
			n.nodeValue = t;
			return;
		}
	}
	e.textContent = t;
}
var ti = {
		animationIterationCount: !0,
		aspectRatio: !0,
		borderImageOutset: !0,
		borderImageSlice: !0,
		borderImageWidth: !0,
		boxFlex: !0,
		boxFlexGroup: !0,
		boxOrdinalGroup: !0,
		columnCount: !0,
		columns: !0,
		flex: !0,
		flexGrow: !0,
		flexPositive: !0,
		flexShrink: !0,
		flexNegative: !0,
		flexOrder: !0,
		gridArea: !0,
		gridRow: !0,
		gridRowEnd: !0,
		gridRowSpan: !0,
		gridRowStart: !0,
		gridColumn: !0,
		gridColumnEnd: !0,
		gridColumnSpan: !0,
		gridColumnStart: !0,
		fontWeight: !0,
		lineClamp: !0,
		lineHeight: !0,
		opacity: !0,
		order: !0,
		orphans: !0,
		tabSize: !0,
		widows: !0,
		zIndex: !0,
		zoom: !0,
		fillOpacity: !0,
		floodOpacity: !0,
		stopOpacity: !0,
		strokeDasharray: !0,
		strokeDashoffset: !0,
		strokeMiterlimit: !0,
		strokeOpacity: !0,
		strokeWidth: !0,
	},
	Xy = ["Webkit", "ms", "Moz", "O"];
Object.keys(ti).forEach(function (e) {
	Xy.forEach(function (t) {
		((t = t + e.charAt(0).toUpperCase() + e.substring(1)), (ti[t] = ti[e]));
	});
});
function wh(e, t, n) {
	return t == null || typeof t == "boolean" || t === ""
		? ""
		: n || typeof t != "number" || t === 0 || (ti.hasOwnProperty(e) && ti[e])
			? ("" + t).trim()
			: t + "px";
}
function xh(e, t) {
	e = e.style;
	for (var n in t)
		if (t.hasOwnProperty(n)) {
			var r = n.indexOf("--") === 0,
				o = wh(n, t[n], r);
			(n === "float" && (n = "cssFloat"), r ? e.setProperty(n, o) : (e[n] = o));
		}
}
var qy = ve(
	{ menuitem: !0 },
	{
		area: !0,
		base: !0,
		br: !0,
		col: !0,
		embed: !0,
		hr: !0,
		img: !0,
		input: !0,
		keygen: !0,
		link: !0,
		meta: !0,
		param: !0,
		source: !0,
		track: !0,
		wbr: !0,
	},
);
function Za(e, t) {
	if (t) {
		if (qy[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
			throw Error(I(137, e));
		if (t.dangerouslySetInnerHTML != null) {
			if (t.children != null) throw Error(I(60));
			if (
				typeof t.dangerouslySetInnerHTML != "object" ||
				!("__html" in t.dangerouslySetInnerHTML)
			)
				throw Error(I(61));
		}
		if (t.style != null && typeof t.style != "object") throw Error(I(62));
	}
}
function Ja(e, t) {
	if (e.indexOf("-") === -1) return typeof t.is == "string";
	switch (e) {
		case "annotation-xml":
		case "color-profile":
		case "font-face":
		case "font-face-src":
		case "font-face-uri":
		case "font-face-format":
		case "font-face-name":
		case "missing-glyph":
			return !1;
		default:
			return !0;
	}
}
var eu = null;
function hc(e) {
	return (
		(e = e.target || e.srcElement || window),
		e.correspondingUseElement && (e = e.correspondingUseElement),
		e.nodeType === 3 ? e.parentNode : e
	);
}
var tu = null,
	eo = null,
	to = null;
function Fd(e) {
	if ((e = Bi(e))) {
		if (typeof tu != "function") throw Error(I(280));
		var t = e.stateNode;
		t && ((t = kl(t)), tu(e.stateNode, e.type, t));
	}
}
function Sh(e) {
	eo ? (to ? to.push(e) : (to = [e])) : (eo = e);
}
function Eh() {
	if (eo) {
		var e = eo,
			t = to;
		if (((to = eo = null), Fd(e), t)) for (e = 0; e < t.length; e++) Fd(t[e]);
	}
}
function Ch(e, t) {
	return e(t);
}
function kh() {}
var aa = !1;
function bh(e, t, n) {
	if (aa) return e(t, n);
	aa = !0;
	try {
		return Ch(e, t, n);
	} finally {
		((aa = !1), (eo !== null || to !== null) && (kh(), Eh()));
	}
}
function mi(e, t) {
	var n = e.stateNode;
	if (n === null) return null;
	var r = kl(n);
	if (r === null) return null;
	n = r[t];
	e: switch (t) {
		case "onClick":
		case "onClickCapture":
		case "onDoubleClick":
		case "onDoubleClickCapture":
		case "onMouseDown":
		case "onMouseDownCapture":
		case "onMouseMove":
		case "onMouseMoveCapture":
		case "onMouseUp":
		case "onMouseUpCapture":
		case "onMouseEnter":
			((r = !r.disabled) ||
				((e = e.type),
				(r = !(
					e === "button" ||
					e === "input" ||
					e === "select" ||
					e === "textarea"
				))),
				(e = !r));
			break e;
		default:
			e = !1;
	}
	if (e) return null;
	if (n && typeof n != "function") throw Error(I(231, t, typeof n));
	return n;
}
var nu = !1;
if (pn)
	try {
		var zo = {};
		(Object.defineProperty(zo, "passive", {
			get: function () {
				nu = !0;
			},
		}),
			window.addEventListener("test", zo, zo),
			window.removeEventListener("test", zo, zo));
	} catch {
		nu = !1;
	}
function Zy(e, t, n, r, o, i, s, l, a) {
	var u = Array.prototype.slice.call(arguments, 3);
	try {
		t.apply(n, u);
	} catch (c) {
		this.onError(c);
	}
}
var ni = !1,
	zs = null,
	Bs = !1,
	ru = null,
	Jy = {
		onError: function (e) {
			((ni = !0), (zs = e));
		},
	};
function e0(e, t, n, r, o, i, s, l, a) {
	((ni = !1), (zs = null), Zy.apply(Jy, arguments));
}
function t0(e, t, n, r, o, i, s, l, a) {
	if ((e0.apply(this, arguments), ni)) {
		if (ni) {
			var u = zs;
			((ni = !1), (zs = null));
		} else throw Error(I(198));
		Bs || ((Bs = !0), (ru = u));
	}
}
function Or(e) {
	var t = e,
		n = e;
	if (e.alternate) for (; t.return; ) t = t.return;
	else {
		e = t;
		do ((t = e), t.flags & 4098 && (n = t.return), (e = t.return));
		while (e);
	}
	return t.tag === 3 ? n : null;
}
function Ph(e) {
	if (e.tag === 13) {
		var t = e.memoizedState;
		if (
			(t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
			t !== null)
		)
			return t.dehydrated;
	}
	return null;
}
function zd(e) {
	if (Or(e) !== e) throw Error(I(188));
}
function n0(e) {
	var t = e.alternate;
	if (!t) {
		if (((t = Or(e)), t === null)) throw Error(I(188));
		return t !== e ? null : e;
	}
	for (var n = e, r = t; ; ) {
		var o = n.return;
		if (o === null) break;
		var i = o.alternate;
		if (i === null) {
			if (((r = o.return), r !== null)) {
				n = r;
				continue;
			}
			break;
		}
		if (o.child === i.child) {
			for (i = o.child; i; ) {
				if (i === n) return (zd(o), e);
				if (i === r) return (zd(o), t);
				i = i.sibling;
			}
			throw Error(I(188));
		}
		if (n.return !== r.return) ((n = o), (r = i));
		else {
			for (var s = !1, l = o.child; l; ) {
				if (l === n) {
					((s = !0), (n = o), (r = i));
					break;
				}
				if (l === r) {
					((s = !0), (r = o), (n = i));
					break;
				}
				l = l.sibling;
			}
			if (!s) {
				for (l = i.child; l; ) {
					if (l === n) {
						((s = !0), (n = i), (r = o));
						break;
					}
					if (l === r) {
						((s = !0), (r = i), (n = o));
						break;
					}
					l = l.sibling;
				}
				if (!s) throw Error(I(189));
			}
		}
		if (n.alternate !== r) throw Error(I(190));
	}
	if (n.tag !== 3) throw Error(I(188));
	return n.stateNode.current === n ? e : t;
}
function Th(e) {
	return ((e = n0(e)), e !== null ? Rh(e) : null);
}
function Rh(e) {
	if (e.tag === 5 || e.tag === 6) return e;
	for (e = e.child; e !== null; ) {
		var t = Rh(e);
		if (t !== null) return t;
		e = e.sibling;
	}
	return null;
}
var Nh = ct.unstable_scheduleCallback,
	Bd = ct.unstable_cancelCallback,
	r0 = ct.unstable_shouldYield,
	o0 = ct.unstable_requestPaint,
	Se = ct.unstable_now,
	i0 = ct.unstable_getCurrentPriorityLevel,
	mc = ct.unstable_ImmediatePriority,
	Ah = ct.unstable_UserBlockingPriority,
	Us = ct.unstable_NormalPriority,
	s0 = ct.unstable_LowPriority,
	Oh = ct.unstable_IdlePriority,
	xl = null,
	qt = null;
function l0(e) {
	if (qt && typeof qt.onCommitFiberRoot == "function")
		try {
			qt.onCommitFiberRoot(xl, e, void 0, (e.current.flags & 128) === 128);
		} catch {}
}
var Dt = Math.clz32 ? Math.clz32 : c0,
	a0 = Math.log,
	u0 = Math.LN2;
function c0(e) {
	return ((e >>>= 0), e === 0 ? 32 : (31 - ((a0(e) / u0) | 0)) | 0);
}
var ts = 64,
	ns = 4194304;
function qo(e) {
	switch (e & -e) {
		case 1:
			return 1;
		case 2:
			return 2;
		case 4:
			return 4;
		case 8:
			return 8;
		case 16:
			return 16;
		case 32:
			return 32;
		case 64:
		case 128:
		case 256:
		case 512:
		case 1024:
		case 2048:
		case 4096:
		case 8192:
		case 16384:
		case 32768:
		case 65536:
		case 131072:
		case 262144:
		case 524288:
		case 1048576:
		case 2097152:
			return e & 4194240;
		case 4194304:
		case 8388608:
		case 16777216:
		case 33554432:
		case 67108864:
			return e & 130023424;
		case 134217728:
			return 134217728;
		case 268435456:
			return 268435456;
		case 536870912:
			return 536870912;
		case 1073741824:
			return 1073741824;
		default:
			return e;
	}
}
function Ws(e, t) {
	var n = e.pendingLanes;
	if (n === 0) return 0;
	var r = 0,
		o = e.suspendedLanes,
		i = e.pingedLanes,
		s = n & 268435455;
	if (s !== 0) {
		var l = s & ~o;
		l !== 0 ? (r = qo(l)) : ((i &= s), i !== 0 && (r = qo(i)));
	} else ((s = n & ~o), s !== 0 ? (r = qo(s)) : i !== 0 && (r = qo(i)));
	if (r === 0) return 0;
	if (
		t !== 0 &&
		t !== r &&
		!(t & o) &&
		((o = r & -r), (i = t & -t), o >= i || (o === 16 && (i & 4194240) !== 0))
	)
		return t;
	if ((r & 4 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
		for (e = e.entanglements, t &= r; 0 < t; )
			((n = 31 - Dt(t)), (o = 1 << n), (r |= e[n]), (t &= ~o));
	return r;
}
function d0(e, t) {
	switch (e) {
		case 1:
		case 2:
		case 4:
			return t + 250;
		case 8:
		case 16:
		case 32:
		case 64:
		case 128:
		case 256:
		case 512:
		case 1024:
		case 2048:
		case 4096:
		case 8192:
		case 16384:
		case 32768:
		case 65536:
		case 131072:
		case 262144:
		case 524288:
		case 1048576:
		case 2097152:
			return t + 5e3;
		case 4194304:
		case 8388608:
		case 16777216:
		case 33554432:
		case 67108864:
			return -1;
		case 134217728:
		case 268435456:
		case 536870912:
		case 1073741824:
			return -1;
		default:
			return -1;
	}
}
function f0(e, t) {
	for (
		var n = e.suspendedLanes,
			r = e.pingedLanes,
			o = e.expirationTimes,
			i = e.pendingLanes;
		0 < i;
	) {
		var s = 31 - Dt(i),
			l = 1 << s,
			a = o[s];
		(a === -1
			? (!(l & n) || l & r) && (o[s] = d0(l, t))
			: a <= t && (e.expiredLanes |= l),
			(i &= ~l));
	}
}
function ou(e) {
	return (
		(e = e.pendingLanes & -1073741825),
		e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
	);
}
function _h() {
	var e = ts;
	return ((ts <<= 1), !(ts & 4194240) && (ts = 64), e);
}
function ua(e) {
	for (var t = [], n = 0; 31 > n; n++) t.push(e);
	return t;
}
function Fi(e, t, n) {
	((e.pendingLanes |= t),
		t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
		(e = e.eventTimes),
		(t = 31 - Dt(t)),
		(e[t] = n));
}
function p0(e, t) {
	var n = e.pendingLanes & ~t;
	((e.pendingLanes = t),
		(e.suspendedLanes = 0),
		(e.pingedLanes = 0),
		(e.expiredLanes &= t),
		(e.mutableReadLanes &= t),
		(e.entangledLanes &= t),
		(t = e.entanglements));
	var r = e.eventTimes;
	for (e = e.expirationTimes; 0 < n; ) {
		var o = 31 - Dt(n),
			i = 1 << o;
		((t[o] = 0), (r[o] = -1), (e[o] = -1), (n &= ~i));
	}
}
function gc(e, t) {
	var n = (e.entangledLanes |= t);
	for (e = e.entanglements; n; ) {
		var r = 31 - Dt(n),
			o = 1 << r;
		((o & t) | (e[r] & t) && (e[r] |= t), (n &= ~o));
	}
}
var oe = 0;
function Ih(e) {
	return (
		(e &= -e),
		1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1
	);
}
var Lh,
	vc,
	$h,
	Mh,
	Dh,
	iu = !1,
	rs = [],
	Bn = null,
	Un = null,
	Wn = null,
	gi = new Map(),
	vi = new Map(),
	An = [],
	h0 =
		"mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
			" ",
		);
function Ud(e, t) {
	switch (e) {
		case "focusin":
		case "focusout":
			Bn = null;
			break;
		case "dragenter":
		case "dragleave":
			Un = null;
			break;
		case "mouseover":
		case "mouseout":
			Wn = null;
			break;
		case "pointerover":
		case "pointerout":
			gi.delete(t.pointerId);
			break;
		case "gotpointercapture":
		case "lostpointercapture":
			vi.delete(t.pointerId);
	}
}
function Bo(e, t, n, r, o, i) {
	return e === null || e.nativeEvent !== i
		? ((e = {
				blockedOn: t,
				domEventName: n,
				eventSystemFlags: r,
				nativeEvent: i,
				targetContainers: [o],
			}),
			t !== null && ((t = Bi(t)), t !== null && vc(t)),
			e)
		: ((e.eventSystemFlags |= r),
			(t = e.targetContainers),
			o !== null && t.indexOf(o) === -1 && t.push(o),
			e);
}
function m0(e, t, n, r, o) {
	switch (t) {
		case "focusin":
			return ((Bn = Bo(Bn, e, t, n, r, o)), !0);
		case "dragenter":
			return ((Un = Bo(Un, e, t, n, r, o)), !0);
		case "mouseover":
			return ((Wn = Bo(Wn, e, t, n, r, o)), !0);
		case "pointerover":
			var i = o.pointerId;
			return (gi.set(i, Bo(gi.get(i) || null, e, t, n, r, o)), !0);
		case "gotpointercapture":
			return (
				(i = o.pointerId),
				vi.set(i, Bo(vi.get(i) || null, e, t, n, r, o)),
				!0
			);
	}
	return !1;
}
function jh(e) {
	var t = cr(e.target);
	if (t !== null) {
		var n = Or(t);
		if (n !== null) {
			if (((t = n.tag), t === 13)) {
				if (((t = Ph(n)), t !== null)) {
					((e.blockedOn = t),
						Dh(e.priority, function () {
							$h(n);
						}));
					return;
				}
			} else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
				e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
				return;
			}
		}
	}
	e.blockedOn = null;
}
function Ss(e) {
	if (e.blockedOn !== null) return !1;
	for (var t = e.targetContainers; 0 < t.length; ) {
		var n = su(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
		if (n === null) {
			n = e.nativeEvent;
			var r = new n.constructor(n.type, n);
			((eu = r), n.target.dispatchEvent(r), (eu = null));
		} else return ((t = Bi(n)), t !== null && vc(t), (e.blockedOn = n), !1);
		t.shift();
	}
	return !0;
}
function Wd(e, t, n) {
	Ss(e) && n.delete(t);
}
function g0() {
	((iu = !1),
		Bn !== null && Ss(Bn) && (Bn = null),
		Un !== null && Ss(Un) && (Un = null),
		Wn !== null && Ss(Wn) && (Wn = null),
		gi.forEach(Wd),
		vi.forEach(Wd));
}
function Uo(e, t) {
	e.blockedOn === t &&
		((e.blockedOn = null),
		iu ||
			((iu = !0),
			ct.unstable_scheduleCallback(ct.unstable_NormalPriority, g0)));
}
function yi(e) {
	function t(o) {
		return Uo(o, e);
	}
	if (0 < rs.length) {
		Uo(rs[0], e);
		for (var n = 1; n < rs.length; n++) {
			var r = rs[n];
			r.blockedOn === e && (r.blockedOn = null);
		}
	}
	for (
		Bn !== null && Uo(Bn, e),
			Un !== null && Uo(Un, e),
			Wn !== null && Uo(Wn, e),
			gi.forEach(t),
			vi.forEach(t),
			n = 0;
		n < An.length;
		n++
	)
		((r = An[n]), r.blockedOn === e && (r.blockedOn = null));
	for (; 0 < An.length && ((n = An[0]), n.blockedOn === null); )
		(jh(n), n.blockedOn === null && An.shift());
}
var no = wn.ReactCurrentBatchConfig,
	Vs = !0;
function v0(e, t, n, r) {
	var o = oe,
		i = no.transition;
	no.transition = null;
	try {
		((oe = 1), yc(e, t, n, r));
	} finally {
		((oe = o), (no.transition = i));
	}
}
function y0(e, t, n, r) {
	var o = oe,
		i = no.transition;
	no.transition = null;
	try {
		((oe = 4), yc(e, t, n, r));
	} finally {
		((oe = o), (no.transition = i));
	}
}
function yc(e, t, n, r) {
	if (Vs) {
		var o = su(e, t, n, r);
		if (o === null) (wa(e, t, r, Hs, n), Ud(e, r));
		else if (m0(o, e, t, n, r)) r.stopPropagation();
		else if ((Ud(e, r), t & 4 && -1 < h0.indexOf(e))) {
			for (; o !== null; ) {
				var i = Bi(o);
				if (
					(i !== null && Lh(i),
					(i = su(e, t, n, r)),
					i === null && wa(e, t, r, Hs, n),
					i === o)
				)
					break;
				o = i;
			}
			o !== null && r.stopPropagation();
		} else wa(e, t, r, null, n);
	}
}
var Hs = null;
function su(e, t, n, r) {
	if (((Hs = null), (e = hc(r)), (e = cr(e)), e !== null))
		if (((t = Or(e)), t === null)) e = null;
		else if (((n = t.tag), n === 13)) {
			if (((e = Ph(t)), e !== null)) return e;
			e = null;
		} else if (n === 3) {
			if (t.stateNode.current.memoizedState.isDehydrated)
				return t.tag === 3 ? t.stateNode.containerInfo : null;
			e = null;
		} else t !== e && (e = null);
	return ((Hs = e), null);
}
function Fh(e) {
	switch (e) {
		case "cancel":
		case "click":
		case "close":
		case "contextmenu":
		case "copy":
		case "cut":
		case "auxclick":
		case "dblclick":
		case "dragend":
		case "dragstart":
		case "drop":
		case "focusin":
		case "focusout":
		case "input":
		case "invalid":
		case "keydown":
		case "keypress":
		case "keyup":
		case "mousedown":
		case "mouseup":
		case "paste":
		case "pause":
		case "play":
		case "pointercancel":
		case "pointerdown":
		case "pointerup":
		case "ratechange":
		case "reset":
		case "resize":
		case "seeked":
		case "submit":
		case "touchcancel":
		case "touchend":
		case "touchstart":
		case "volumechange":
		case "change":
		case "selectionchange":
		case "textInput":
		case "compositionstart":
		case "compositionend":
		case "compositionupdate":
		case "beforeblur":
		case "afterblur":
		case "beforeinput":
		case "blur":
		case "fullscreenchange":
		case "focus":
		case "hashchange":
		case "popstate":
		case "select":
		case "selectstart":
			return 1;
		case "drag":
		case "dragenter":
		case "dragexit":
		case "dragleave":
		case "dragover":
		case "mousemove":
		case "mouseout":
		case "mouseover":
		case "pointermove":
		case "pointerout":
		case "pointerover":
		case "scroll":
		case "toggle":
		case "touchmove":
		case "wheel":
		case "mouseenter":
		case "mouseleave":
		case "pointerenter":
		case "pointerleave":
			return 4;
		case "message":
			switch (i0()) {
				case mc:
					return 1;
				case Ah:
					return 4;
				case Us:
				case s0:
					return 16;
				case Oh:
					return 536870912;
				default:
					return 16;
			}
		default:
			return 16;
	}
}
var Dn = null,
	wc = null,
	Es = null;
function zh() {
	if (Es) return Es;
	var e,
		t = wc,
		n = t.length,
		r,
		o = "value" in Dn ? Dn.value : Dn.textContent,
		i = o.length;
	for (e = 0; e < n && t[e] === o[e]; e++);
	var s = n - e;
	for (r = 1; r <= s && t[n - r] === o[i - r]; r++);
	return (Es = o.slice(e, 1 < r ? 1 - r : void 0));
}
function Cs(e) {
	var t = e.keyCode;
	return (
		"charCode" in e
			? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
			: (e = t),
		e === 10 && (e = 13),
		32 <= e || e === 13 ? e : 0
	);
}
function os() {
	return !0;
}
function Vd() {
	return !1;
}
function ft(e) {
	function t(n, r, o, i, s) {
		((this._reactName = n),
			(this._targetInst = o),
			(this.type = r),
			(this.nativeEvent = i),
			(this.target = s),
			(this.currentTarget = null));
		for (var l in e)
			e.hasOwnProperty(l) && ((n = e[l]), (this[l] = n ? n(i) : i[l]));
		return (
			(this.isDefaultPrevented = (
				i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1
			)
				? os
				: Vd),
			(this.isPropagationStopped = Vd),
			this
		);
	}
	return (
		ve(t.prototype, {
			preventDefault: function () {
				this.defaultPrevented = !0;
				var n = this.nativeEvent;
				n &&
					(n.preventDefault
						? n.preventDefault()
						: typeof n.returnValue != "unknown" && (n.returnValue = !1),
					(this.isDefaultPrevented = os));
			},
			stopPropagation: function () {
				var n = this.nativeEvent;
				n &&
					(n.stopPropagation
						? n.stopPropagation()
						: typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
					(this.isPropagationStopped = os));
			},
			persist: function () {},
			isPersistent: os,
		}),
		t
	);
}
var Oo = {
		eventPhase: 0,
		bubbles: 0,
		cancelable: 0,
		timeStamp: function (e) {
			return e.timeStamp || Date.now();
		},
		defaultPrevented: 0,
		isTrusted: 0,
	},
	xc = ft(Oo),
	zi = ve({}, Oo, { view: 0, detail: 0 }),
	w0 = ft(zi),
	ca,
	da,
	Wo,
	Sl = ve({}, zi, {
		screenX: 0,
		screenY: 0,
		clientX: 0,
		clientY: 0,
		pageX: 0,
		pageY: 0,
		ctrlKey: 0,
		shiftKey: 0,
		altKey: 0,
		metaKey: 0,
		getModifierState: Sc,
		button: 0,
		buttons: 0,
		relatedTarget: function (e) {
			return e.relatedTarget === void 0
				? e.fromElement === e.srcElement
					? e.toElement
					: e.fromElement
				: e.relatedTarget;
		},
		movementX: function (e) {
			return "movementX" in e
				? e.movementX
				: (e !== Wo &&
						(Wo && e.type === "mousemove"
							? ((ca = e.screenX - Wo.screenX), (da = e.screenY - Wo.screenY))
							: (da = ca = 0),
						(Wo = e)),
					ca);
		},
		movementY: function (e) {
			return "movementY" in e ? e.movementY : da;
		},
	}),
	Hd = ft(Sl),
	x0 = ve({}, Sl, { dataTransfer: 0 }),
	S0 = ft(x0),
	E0 = ve({}, zi, { relatedTarget: 0 }),
	fa = ft(E0),
	C0 = ve({}, Oo, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
	k0 = ft(C0),
	b0 = ve({}, Oo, {
		clipboardData: function (e) {
			return "clipboardData" in e ? e.clipboardData : window.clipboardData;
		},
	}),
	P0 = ft(b0),
	T0 = ve({}, Oo, { data: 0 }),
	Qd = ft(T0),
	R0 = {
		Esc: "Escape",
		Spacebar: " ",
		Left: "ArrowLeft",
		Up: "ArrowUp",
		Right: "ArrowRight",
		Down: "ArrowDown",
		Del: "Delete",
		Win: "OS",
		Menu: "ContextMenu",
		Apps: "ContextMenu",
		Scroll: "ScrollLock",
		MozPrintableKey: "Unidentified",
	},
	N0 = {
		8: "Backspace",
		9: "Tab",
		12: "Clear",
		13: "Enter",
		16: "Shift",
		17: "Control",
		18: "Alt",
		19: "Pause",
		20: "CapsLock",
		27: "Escape",
		32: " ",
		33: "PageUp",
		34: "PageDown",
		35: "End",
		36: "Home",
		37: "ArrowLeft",
		38: "ArrowUp",
		39: "ArrowRight",
		40: "ArrowDown",
		45: "Insert",
		46: "Delete",
		112: "F1",
		113: "F2",
		114: "F3",
		115: "F4",
		116: "F5",
		117: "F6",
		118: "F7",
		119: "F8",
		120: "F9",
		121: "F10",
		122: "F11",
		123: "F12",
		144: "NumLock",
		145: "ScrollLock",
		224: "Meta",
	},
	A0 = {
		Alt: "altKey",
		Control: "ctrlKey",
		Meta: "metaKey",
		Shift: "shiftKey",
	};
function O0(e) {
	var t = this.nativeEvent;
	return t.getModifierState ? t.getModifierState(e) : (e = A0[e]) ? !!t[e] : !1;
}
function Sc() {
	return O0;
}
var _0 = ve({}, zi, {
		key: function (e) {
			if (e.key) {
				var t = R0[e.key] || e.key;
				if (t !== "Unidentified") return t;
			}
			return e.type === "keypress"
				? ((e = Cs(e)), e === 13 ? "Enter" : String.fromCharCode(e))
				: e.type === "keydown" || e.type === "keyup"
					? N0[e.keyCode] || "Unidentified"
					: "";
		},
		code: 0,
		location: 0,
		ctrlKey: 0,
		shiftKey: 0,
		altKey: 0,
		metaKey: 0,
		repeat: 0,
		locale: 0,
		getModifierState: Sc,
		charCode: function (e) {
			return e.type === "keypress" ? Cs(e) : 0;
		},
		keyCode: function (e) {
			return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
		},
		which: function (e) {
			return e.type === "keypress"
				? Cs(e)
				: e.type === "keydown" || e.type === "keyup"
					? e.keyCode
					: 0;
		},
	}),
	I0 = ft(_0),
	L0 = ve({}, Sl, {
		pointerId: 0,
		width: 0,
		height: 0,
		pressure: 0,
		tangentialPressure: 0,
		tiltX: 0,
		tiltY: 0,
		twist: 0,
		pointerType: 0,
		isPrimary: 0,
	}),
	Kd = ft(L0),
	$0 = ve({}, zi, {
		touches: 0,
		targetTouches: 0,
		changedTouches: 0,
		altKey: 0,
		metaKey: 0,
		ctrlKey: 0,
		shiftKey: 0,
		getModifierState: Sc,
	}),
	M0 = ft($0),
	D0 = ve({}, Oo, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
	j0 = ft(D0),
	F0 = ve({}, Sl, {
		deltaX: function (e) {
			return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
		},
		deltaY: function (e) {
			return "deltaY" in e
				? e.deltaY
				: "wheelDeltaY" in e
					? -e.wheelDeltaY
					: "wheelDelta" in e
						? -e.wheelDelta
						: 0;
		},
		deltaZ: 0,
		deltaMode: 0,
	}),
	z0 = ft(F0),
	B0 = [9, 13, 27, 32],
	Ec = pn && "CompositionEvent" in window,
	ri = null;
pn && "documentMode" in document && (ri = document.documentMode);
var U0 = pn && "TextEvent" in window && !ri,
	Bh = pn && (!Ec || (ri && 8 < ri && 11 >= ri)),
	Gd = " ",
	Yd = !1;
function Uh(e, t) {
	switch (e) {
		case "keyup":
			return B0.indexOf(t.keyCode) !== -1;
		case "keydown":
			return t.keyCode !== 229;
		case "keypress":
		case "mousedown":
		case "focusout":
			return !0;
		default:
			return !1;
	}
}
function Wh(e) {
	return ((e = e.detail), typeof e == "object" && "data" in e ? e.data : null);
}
var Wr = !1;
function W0(e, t) {
	switch (e) {
		case "compositionend":
			return Wh(t);
		case "keypress":
			return t.which !== 32 ? null : ((Yd = !0), Gd);
		case "textInput":
			return ((e = t.data), e === Gd && Yd ? null : e);
		default:
			return null;
	}
}
function V0(e, t) {
	if (Wr)
		return e === "compositionend" || (!Ec && Uh(e, t))
			? ((e = zh()), (Es = wc = Dn = null), (Wr = !1), e)
			: null;
	switch (e) {
		case "paste":
			return null;
		case "keypress":
			if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
				if (t.char && 1 < t.char.length) return t.char;
				if (t.which) return String.fromCharCode(t.which);
			}
			return null;
		case "compositionend":
			return Bh && t.locale !== "ko" ? null : t.data;
		default:
			return null;
	}
}
var H0 = {
	color: !0,
	date: !0,
	datetime: !0,
	"datetime-local": !0,
	email: !0,
	month: !0,
	number: !0,
	password: !0,
	range: !0,
	search: !0,
	tel: !0,
	text: !0,
	time: !0,
	url: !0,
	week: !0,
};
function Xd(e) {
	var t = e && e.nodeName && e.nodeName.toLowerCase();
	return t === "input" ? !!H0[e.type] : t === "textarea";
}
function Vh(e, t, n, r) {
	(Sh(r),
		(t = Qs(t, "onChange")),
		0 < t.length &&
			((n = new xc("onChange", "change", null, n, r)),
			e.push({ event: n, listeners: t })));
}
var oi = null,
	wi = null;
function Q0(e) {
	tm(e, 0);
}
function El(e) {
	var t = Qr(e);
	if (hh(t)) return e;
}
function K0(e, t) {
	if (e === "change") return t;
}
var Hh = !1;
if (pn) {
	var pa;
	if (pn) {
		var ha = "oninput" in document;
		if (!ha) {
			var qd = document.createElement("div");
			(qd.setAttribute("oninput", "return;"),
				(ha = typeof qd.oninput == "function"));
		}
		pa = ha;
	} else pa = !1;
	Hh = pa && (!document.documentMode || 9 < document.documentMode);
}
function Zd() {
	oi && (oi.detachEvent("onpropertychange", Qh), (wi = oi = null));
}
function Qh(e) {
	if (e.propertyName === "value" && El(wi)) {
		var t = [];
		(Vh(t, wi, e, hc(e)), bh(Q0, t));
	}
}
function G0(e, t, n) {
	e === "focusin"
		? (Zd(), (oi = t), (wi = n), oi.attachEvent("onpropertychange", Qh))
		: e === "focusout" && Zd();
}
function Y0(e) {
	if (e === "selectionchange" || e === "keyup" || e === "keydown")
		return El(wi);
}
function X0(e, t) {
	if (e === "click") return El(t);
}
function q0(e, t) {
	if (e === "input" || e === "change") return El(t);
}
function Z0(e, t) {
	return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var zt = typeof Object.is == "function" ? Object.is : Z0;
function xi(e, t) {
	if (zt(e, t)) return !0;
	if (typeof e != "object" || e === null || typeof t != "object" || t === null)
		return !1;
	var n = Object.keys(e),
		r = Object.keys(t);
	if (n.length !== r.length) return !1;
	for (r = 0; r < n.length; r++) {
		var o = n[r];
		if (!Ua.call(t, o) || !zt(e[o], t[o])) return !1;
	}
	return !0;
}
function Jd(e) {
	for (; e && e.firstChild; ) e = e.firstChild;
	return e;
}
function ef(e, t) {
	var n = Jd(e);
	e = 0;
	for (var r; n; ) {
		if (n.nodeType === 3) {
			if (((r = e + n.textContent.length), e <= t && r >= t))
				return { node: n, offset: t - e };
			e = r;
		}
		e: {
			for (; n; ) {
				if (n.nextSibling) {
					n = n.nextSibling;
					break e;
				}
				n = n.parentNode;
			}
			n = void 0;
		}
		n = Jd(n);
	}
}
function Kh(e, t) {
	return e && t
		? e === t
			? !0
			: e && e.nodeType === 3
				? !1
				: t && t.nodeType === 3
					? Kh(e, t.parentNode)
					: "contains" in e
						? e.contains(t)
						: e.compareDocumentPosition
							? !!(e.compareDocumentPosition(t) & 16)
							: !1
		: !1;
}
function Gh() {
	for (var e = window, t = Fs(); t instanceof e.HTMLIFrameElement; ) {
		try {
			var n = typeof t.contentWindow.location.href == "string";
		} catch {
			n = !1;
		}
		if (n) e = t.contentWindow;
		else break;
		t = Fs(e.document);
	}
	return t;
}
function Cc(e) {
	var t = e && e.nodeName && e.nodeName.toLowerCase();
	return (
		t &&
		((t === "input" &&
			(e.type === "text" ||
				e.type === "search" ||
				e.type === "tel" ||
				e.type === "url" ||
				e.type === "password")) ||
			t === "textarea" ||
			e.contentEditable === "true")
	);
}
function J0(e) {
	var t = Gh(),
		n = e.focusedElem,
		r = e.selectionRange;
	if (
		t !== n &&
		n &&
		n.ownerDocument &&
		Kh(n.ownerDocument.documentElement, n)
	) {
		if (r !== null && Cc(n)) {
			if (
				((t = r.start),
				(e = r.end),
				e === void 0 && (e = t),
				"selectionStart" in n)
			)
				((n.selectionStart = t),
					(n.selectionEnd = Math.min(e, n.value.length)));
			else if (
				((e = ((t = n.ownerDocument || document) && t.defaultView) || window),
				e.getSelection)
			) {
				e = e.getSelection();
				var o = n.textContent.length,
					i = Math.min(r.start, o);
				((r = r.end === void 0 ? i : Math.min(r.end, o)),
					!e.extend && i > r && ((o = r), (r = i), (i = o)),
					(o = ef(n, i)));
				var s = ef(n, r);
				o &&
					s &&
					(e.rangeCount !== 1 ||
						e.anchorNode !== o.node ||
						e.anchorOffset !== o.offset ||
						e.focusNode !== s.node ||
						e.focusOffset !== s.offset) &&
					((t = t.createRange()),
					t.setStart(o.node, o.offset),
					e.removeAllRanges(),
					i > r
						? (e.addRange(t), e.extend(s.node, s.offset))
						: (t.setEnd(s.node, s.offset), e.addRange(t)));
			}
		}
		for (t = [], e = n; (e = e.parentNode); )
			e.nodeType === 1 &&
				t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
		for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++)
			((e = t[n]),
				(e.element.scrollLeft = e.left),
				(e.element.scrollTop = e.top));
	}
}
var e1 = pn && "documentMode" in document && 11 >= document.documentMode,
	Vr = null,
	lu = null,
	ii = null,
	au = !1;
function tf(e, t, n) {
	var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
	au ||
		Vr == null ||
		Vr !== Fs(r) ||
		((r = Vr),
		"selectionStart" in r && Cc(r)
			? (r = { start: r.selectionStart, end: r.selectionEnd })
			: ((r = (
					(r.ownerDocument && r.ownerDocument.defaultView) ||
					window
				).getSelection()),
				(r = {
					anchorNode: r.anchorNode,
					anchorOffset: r.anchorOffset,
					focusNode: r.focusNode,
					focusOffset: r.focusOffset,
				})),
		(ii && xi(ii, r)) ||
			((ii = r),
			(r = Qs(lu, "onSelect")),
			0 < r.length &&
				((t = new xc("onSelect", "select", null, t, n)),
				e.push({ event: t, listeners: r }),
				(t.target = Vr))));
}
function is(e, t) {
	var n = {};
	return (
		(n[e.toLowerCase()] = t.toLowerCase()),
		(n["Webkit" + e] = "webkit" + t),
		(n["Moz" + e] = "moz" + t),
		n
	);
}
var Hr = {
		animationend: is("Animation", "AnimationEnd"),
		animationiteration: is("Animation", "AnimationIteration"),
		animationstart: is("Animation", "AnimationStart"),
		transitionend: is("Transition", "TransitionEnd"),
	},
	ma = {},
	Yh = {};
pn &&
	((Yh = document.createElement("div").style),
	"AnimationEvent" in window ||
		(delete Hr.animationend.animation,
		delete Hr.animationiteration.animation,
		delete Hr.animationstart.animation),
	"TransitionEvent" in window || delete Hr.transitionend.transition);
function Cl(e) {
	if (ma[e]) return ma[e];
	if (!Hr[e]) return e;
	var t = Hr[e],
		n;
	for (n in t) if (t.hasOwnProperty(n) && n in Yh) return (ma[e] = t[n]);
	return e;
}
var Xh = Cl("animationend"),
	qh = Cl("animationiteration"),
	Zh = Cl("animationstart"),
	Jh = Cl("transitionend"),
	em = new Map(),
	nf =
		"abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
			" ",
		);
function tr(e, t) {
	(em.set(e, t), Ar(t, [e]));
}
for (var ga = 0; ga < nf.length; ga++) {
	var va = nf[ga],
		t1 = va.toLowerCase(),
		n1 = va[0].toUpperCase() + va.slice(1);
	tr(t1, "on" + n1);
}
tr(Xh, "onAnimationEnd");
tr(qh, "onAnimationIteration");
tr(Zh, "onAnimationStart");
tr("dblclick", "onDoubleClick");
tr("focusin", "onFocus");
tr("focusout", "onBlur");
tr(Jh, "onTransitionEnd");
vo("onMouseEnter", ["mouseout", "mouseover"]);
vo("onMouseLeave", ["mouseout", "mouseover"]);
vo("onPointerEnter", ["pointerout", "pointerover"]);
vo("onPointerLeave", ["pointerout", "pointerover"]);
Ar(
	"onChange",
	"change click focusin focusout input keydown keyup selectionchange".split(
		" ",
	),
);
Ar(
	"onSelect",
	"focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
		" ",
	),
);
Ar("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
Ar(
	"onCompositionEnd",
	"compositionend focusout keydown keypress keyup mousedown".split(" "),
);
Ar(
	"onCompositionStart",
	"compositionstart focusout keydown keypress keyup mousedown".split(" "),
);
Ar(
	"onCompositionUpdate",
	"compositionupdate focusout keydown keypress keyup mousedown".split(" "),
);
var Zo =
		"abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
			" ",
		),
	r1 = new Set("cancel close invalid load scroll toggle".split(" ").concat(Zo));
function rf(e, t, n) {
	var r = e.type || "unknown-event";
	((e.currentTarget = n), t0(r, t, void 0, e), (e.currentTarget = null));
}
function tm(e, t) {
	t = (t & 4) !== 0;
	for (var n = 0; n < e.length; n++) {
		var r = e[n],
			o = r.event;
		r = r.listeners;
		e: {
			var i = void 0;
			if (t)
				for (var s = r.length - 1; 0 <= s; s--) {
					var l = r[s],
						a = l.instance,
						u = l.currentTarget;
					if (((l = l.listener), a !== i && o.isPropagationStopped())) break e;
					(rf(o, l, u), (i = a));
				}
			else
				for (s = 0; s < r.length; s++) {
					if (
						((l = r[s]),
						(a = l.instance),
						(u = l.currentTarget),
						(l = l.listener),
						a !== i && o.isPropagationStopped())
					)
						break e;
					(rf(o, l, u), (i = a));
				}
		}
	}
	if (Bs) throw ((e = ru), (Bs = !1), (ru = null), e);
}
function ue(e, t) {
	var n = t[pu];
	n === void 0 && (n = t[pu] = new Set());
	var r = e + "__bubble";
	n.has(r) || (nm(t, e, 2, !1), n.add(r));
}
function ya(e, t, n) {
	var r = 0;
	(t && (r |= 4), nm(n, e, r, t));
}
var ss = "_reactListening" + Math.random().toString(36).slice(2);
function Si(e) {
	if (!e[ss]) {
		((e[ss] = !0),
			uh.forEach(function (n) {
				n !== "selectionchange" && (r1.has(n) || ya(n, !1, e), ya(n, !0, e));
			}));
		var t = e.nodeType === 9 ? e : e.ownerDocument;
		t === null || t[ss] || ((t[ss] = !0), ya("selectionchange", !1, t));
	}
}
function nm(e, t, n, r) {
	switch (Fh(t)) {
		case 1:
			var o = v0;
			break;
		case 4:
			o = y0;
			break;
		default:
			o = yc;
	}
	((n = o.bind(null, t, n, e)),
		(o = void 0),
		!nu ||
			(t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
			(o = !0),
		r
			? o !== void 0
				? e.addEventListener(t, n, { capture: !0, passive: o })
				: e.addEventListener(t, n, !0)
			: o !== void 0
				? e.addEventListener(t, n, { passive: o })
				: e.addEventListener(t, n, !1));
}
function wa(e, t, n, r, o) {
	var i = r;
	if (!(t & 1) && !(t & 2) && r !== null)
		e: for (;;) {
			if (r === null) return;
			var s = r.tag;
			if (s === 3 || s === 4) {
				var l = r.stateNode.containerInfo;
				if (l === o || (l.nodeType === 8 && l.parentNode === o)) break;
				if (s === 4)
					for (s = r.return; s !== null; ) {
						var a = s.tag;
						if (
							(a === 3 || a === 4) &&
							((a = s.stateNode.containerInfo),
							a === o || (a.nodeType === 8 && a.parentNode === o))
						)
							return;
						s = s.return;
					}
				for (; l !== null; ) {
					if (((s = cr(l)), s === null)) return;
					if (((a = s.tag), a === 5 || a === 6)) {
						r = i = s;
						continue e;
					}
					l = l.parentNode;
				}
			}
			r = r.return;
		}
	bh(function () {
		var u = i,
			c = hc(n),
			f = [];
		e: {
			var h = em.get(e);
			if (h !== void 0) {
				var d = xc,
					w = e;
				switch (e) {
					case "keypress":
						if (Cs(n) === 0) break e;
					case "keydown":
					case "keyup":
						d = I0;
						break;
					case "focusin":
						((w = "focus"), (d = fa));
						break;
					case "focusout":
						((w = "blur"), (d = fa));
						break;
					case "beforeblur":
					case "afterblur":
						d = fa;
						break;
					case "click":
						if (n.button === 2) break e;
					case "auxclick":
					case "dblclick":
					case "mousedown":
					case "mousemove":
					case "mouseup":
					case "mouseout":
					case "mouseover":
					case "contextmenu":
						d = Hd;
						break;
					case "drag":
					case "dragend":
					case "dragenter":
					case "dragexit":
					case "dragleave":
					case "dragover":
					case "dragstart":
					case "drop":
						d = S0;
						break;
					case "touchcancel":
					case "touchend":
					case "touchmove":
					case "touchstart":
						d = M0;
						break;
					case Xh:
					case qh:
					case Zh:
						d = k0;
						break;
					case Jh:
						d = j0;
						break;
					case "scroll":
						d = w0;
						break;
					case "wheel":
						d = z0;
						break;
					case "copy":
					case "cut":
					case "paste":
						d = P0;
						break;
					case "gotpointercapture":
					case "lostpointercapture":
					case "pointercancel":
					case "pointerdown":
					case "pointermove":
					case "pointerout":
					case "pointerover":
					case "pointerup":
						d = Kd;
				}
				var v = (t & 4) !== 0,
					y = !v && e === "scroll",
					m = v ? (h !== null ? h + "Capture" : null) : h;
				v = [];
				for (var p = u, g; p !== null; ) {
					g = p;
					var x = g.stateNode;
					if (
						(g.tag === 5 &&
							x !== null &&
							((g = x),
							m !== null && ((x = mi(p, m)), x != null && v.push(Ei(p, x, g)))),
						y)
					)
						break;
					p = p.return;
				}
				0 < v.length &&
					((h = new d(h, w, null, n, c)), f.push({ event: h, listeners: v }));
			}
		}
		if (!(t & 7)) {
			e: {
				if (
					((h = e === "mouseover" || e === "pointerover"),
					(d = e === "mouseout" || e === "pointerout"),
					h &&
						n !== eu &&
						(w = n.relatedTarget || n.fromElement) &&
						(cr(w) || w[hn]))
				)
					break e;
				if (
					(d || h) &&
					((h =
						c.window === c
							? c
							: (h = c.ownerDocument)
								? h.defaultView || h.parentWindow
								: window),
					d
						? ((w = n.relatedTarget || n.toElement),
							(d = u),
							(w = w ? cr(w) : null),
							w !== null &&
								((y = Or(w)), w !== y || (w.tag !== 5 && w.tag !== 6)) &&
								(w = null))
						: ((d = null), (w = u)),
					d !== w)
				) {
					if (
						((v = Hd),
						(x = "onMouseLeave"),
						(m = "onMouseEnter"),
						(p = "mouse"),
						(e === "pointerout" || e === "pointerover") &&
							((v = Kd),
							(x = "onPointerLeave"),
							(m = "onPointerEnter"),
							(p = "pointer")),
						(y = d == null ? h : Qr(d)),
						(g = w == null ? h : Qr(w)),
						(h = new v(x, p + "leave", d, n, c)),
						(h.target = y),
						(h.relatedTarget = g),
						(x = null),
						cr(c) === u &&
							((v = new v(m, p + "enter", w, n, c)),
							(v.target = g),
							(v.relatedTarget = y),
							(x = v)),
						(y = x),
						d && w)
					)
						t: {
							for (v = d, m = w, p = 0, g = v; g; g = Dr(g)) p++;
							for (g = 0, x = m; x; x = Dr(x)) g++;
							for (; 0 < p - g; ) ((v = Dr(v)), p--);
							for (; 0 < g - p; ) ((m = Dr(m)), g--);
							for (; p--; ) {
								if (v === m || (m !== null && v === m.alternate)) break t;
								((v = Dr(v)), (m = Dr(m)));
							}
							v = null;
						}
					else v = null;
					(d !== null && of(f, h, d, v, !1),
						w !== null && y !== null && of(f, y, w, v, !0));
				}
			}
			e: {
				if (
					((h = u ? Qr(u) : window),
					(d = h.nodeName && h.nodeName.toLowerCase()),
					d === "select" || (d === "input" && h.type === "file"))
				)
					var C = K0;
				else if (Xd(h))
					if (Hh) C = q0;
					else {
						C = Y0;
						var k = G0;
					}
				else
					(d = h.nodeName) &&
						d.toLowerCase() === "input" &&
						(h.type === "checkbox" || h.type === "radio") &&
						(C = X0);
				if (C && (C = C(e, u))) {
					Vh(f, C, n, c);
					break e;
				}
				(k && k(e, h, u),
					e === "focusout" &&
						(k = h._wrapperState) &&
						k.controlled &&
						h.type === "number" &&
						Ya(h, "number", h.value));
			}
			switch (((k = u ? Qr(u) : window), e)) {
				case "focusin":
					(Xd(k) || k.contentEditable === "true") &&
						((Vr = k), (lu = u), (ii = null));
					break;
				case "focusout":
					ii = lu = Vr = null;
					break;
				case "mousedown":
					au = !0;
					break;
				case "contextmenu":
				case "mouseup":
				case "dragend":
					((au = !1), tf(f, n, c));
					break;
				case "selectionchange":
					if (e1) break;
				case "keydown":
				case "keyup":
					tf(f, n, c);
			}
			var E;
			if (Ec)
				e: {
					switch (e) {
						case "compositionstart":
							var b = "onCompositionStart";
							break e;
						case "compositionend":
							b = "onCompositionEnd";
							break e;
						case "compositionupdate":
							b = "onCompositionUpdate";
							break e;
					}
					b = void 0;
				}
			else
				Wr
					? Uh(e, n) && (b = "onCompositionEnd")
					: e === "keydown" && n.keyCode === 229 && (b = "onCompositionStart");
			(b &&
				(Bh &&
					n.locale !== "ko" &&
					(Wr || b !== "onCompositionStart"
						? b === "onCompositionEnd" && Wr && (E = zh())
						: ((Dn = c),
							(wc = "value" in Dn ? Dn.value : Dn.textContent),
							(Wr = !0))),
				(k = Qs(u, b)),
				0 < k.length &&
					((b = new Qd(b, e, null, n, c)),
					f.push({ event: b, listeners: k }),
					E ? (b.data = E) : ((E = Wh(n)), E !== null && (b.data = E)))),
				(E = U0 ? W0(e, n) : V0(e, n)) &&
					((u = Qs(u, "onBeforeInput")),
					0 < u.length &&
						((c = new Qd("onBeforeInput", "beforeinput", null, n, c)),
						f.push({ event: c, listeners: u }),
						(c.data = E))));
		}
		tm(f, t);
	});
}
function Ei(e, t, n) {
	return { instance: e, listener: t, currentTarget: n };
}
function Qs(e, t) {
	for (var n = t + "Capture", r = []; e !== null; ) {
		var o = e,
			i = o.stateNode;
		(o.tag === 5 &&
			i !== null &&
			((o = i),
			(i = mi(e, n)),
			i != null && r.unshift(Ei(e, i, o)),
			(i = mi(e, t)),
			i != null && r.push(Ei(e, i, o))),
			(e = e.return));
	}
	return r;
}
function Dr(e) {
	if (e === null) return null;
	do e = e.return;
	while (e && e.tag !== 5);
	return e || null;
}
function of(e, t, n, r, o) {
	for (var i = t._reactName, s = []; n !== null && n !== r; ) {
		var l = n,
			a = l.alternate,
			u = l.stateNode;
		if (a !== null && a === r) break;
		(l.tag === 5 &&
			u !== null &&
			((l = u),
			o
				? ((a = mi(n, i)), a != null && s.unshift(Ei(n, a, l)))
				: o || ((a = mi(n, i)), a != null && s.push(Ei(n, a, l)))),
			(n = n.return));
	}
	s.length !== 0 && e.push({ event: t, listeners: s });
}
var o1 = /\r\n?/g,
	i1 = /\u0000|\uFFFD/g;
function sf(e) {
	return (typeof e == "string" ? e : "" + e)
		.replace(
			o1,
			`
`,
		)
		.replace(i1, "");
}
function ls(e, t, n) {
	if (((t = sf(t)), sf(e) !== t && n)) throw Error(I(425));
}
function Ks() {}
var uu = null,
	cu = null;
function du(e, t) {
	return (
		e === "textarea" ||
		e === "noscript" ||
		typeof t.children == "string" ||
		typeof t.children == "number" ||
		(typeof t.dangerouslySetInnerHTML == "object" &&
			t.dangerouslySetInnerHTML !== null &&
			t.dangerouslySetInnerHTML.__html != null)
	);
}
var fu = typeof setTimeout == "function" ? setTimeout : void 0,
	s1 = typeof clearTimeout == "function" ? clearTimeout : void 0,
	lf = typeof Promise == "function" ? Promise : void 0,
	l1 =
		typeof queueMicrotask == "function"
			? queueMicrotask
			: typeof lf < "u"
				? function (e) {
						return lf.resolve(null).then(e).catch(a1);
					}
				: fu;
function a1(e) {
	setTimeout(function () {
		throw e;
	});
}
function xa(e, t) {
	var n = t,
		r = 0;
	do {
		var o = n.nextSibling;
		if ((e.removeChild(n), o && o.nodeType === 8))
			if (((n = o.data), n === "/$")) {
				if (r === 0) {
					(e.removeChild(o), yi(t));
					return;
				}
				r--;
			} else (n !== "$" && n !== "$?" && n !== "$!") || r++;
		n = o;
	} while (n);
	yi(t);
}
function Vn(e) {
	for (; e != null; e = e.nextSibling) {
		var t = e.nodeType;
		if (t === 1 || t === 3) break;
		if (t === 8) {
			if (((t = e.data), t === "$" || t === "$!" || t === "$?")) break;
			if (t === "/$") return null;
		}
	}
	return e;
}
function af(e) {
	e = e.previousSibling;
	for (var t = 0; e; ) {
		if (e.nodeType === 8) {
			var n = e.data;
			if (n === "$" || n === "$!" || n === "$?") {
				if (t === 0) return e;
				t--;
			} else n === "/$" && t++;
		}
		e = e.previousSibling;
	}
	return null;
}
var _o = Math.random().toString(36).slice(2),
	Yt = "__reactFiber$" + _o,
	Ci = "__reactProps$" + _o,
	hn = "__reactContainer$" + _o,
	pu = "__reactEvents$" + _o,
	u1 = "__reactListeners$" + _o,
	c1 = "__reactHandles$" + _o;
function cr(e) {
	var t = e[Yt];
	if (t) return t;
	for (var n = e.parentNode; n; ) {
		if ((t = n[hn] || n[Yt])) {
			if (
				((n = t.alternate),
				t.child !== null || (n !== null && n.child !== null))
			)
				for (e = af(e); e !== null; ) {
					if ((n = e[Yt])) return n;
					e = af(e);
				}
			return t;
		}
		((e = n), (n = e.parentNode));
	}
	return null;
}
function Bi(e) {
	return (
		(e = e[Yt] || e[hn]),
		!e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
	);
}
function Qr(e) {
	if (e.tag === 5 || e.tag === 6) return e.stateNode;
	throw Error(I(33));
}
function kl(e) {
	return e[Ci] || null;
}
var hu = [],
	Kr = -1;
function nr(e) {
	return { current: e };
}
function de(e) {
	0 > Kr || ((e.current = hu[Kr]), (hu[Kr] = null), Kr--);
}
function le(e, t) {
	(Kr++, (hu[Kr] = e.current), (e.current = t));
}
var Xn = {},
	Fe = nr(Xn),
	Je = nr(!1),
	Cr = Xn;
function yo(e, t) {
	var n = e.type.contextTypes;
	if (!n) return Xn;
	var r = e.stateNode;
	if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
		return r.__reactInternalMemoizedMaskedChildContext;
	var o = {},
		i;
	for (i in n) o[i] = t[i];
	return (
		r &&
			((e = e.stateNode),
			(e.__reactInternalMemoizedUnmaskedChildContext = t),
			(e.__reactInternalMemoizedMaskedChildContext = o)),
		o
	);
}
function et(e) {
	return ((e = e.childContextTypes), e != null);
}
function Gs() {
	(de(Je), de(Fe));
}
function uf(e, t, n) {
	if (Fe.current !== Xn) throw Error(I(168));
	(le(Fe, t), le(Je, n));
}
function rm(e, t, n) {
	var r = e.stateNode;
	if (((t = t.childContextTypes), typeof r.getChildContext != "function"))
		return n;
	r = r.getChildContext();
	for (var o in r) if (!(o in t)) throw Error(I(108, Gy(e) || "Unknown", o));
	return ve({}, n, r);
}
function Ys(e) {
	return (
		(e =
			((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || Xn),
		(Cr = Fe.current),
		le(Fe, e),
		le(Je, Je.current),
		!0
	);
}
function cf(e, t, n) {
	var r = e.stateNode;
	if (!r) throw Error(I(169));
	(n
		? ((e = rm(e, t, Cr)),
			(r.__reactInternalMemoizedMergedChildContext = e),
			de(Je),
			de(Fe),
			le(Fe, e))
		: de(Je),
		le(Je, n));
}
var an = null,
	bl = !1,
	Sa = !1;
function om(e) {
	an === null ? (an = [e]) : an.push(e);
}
function d1(e) {
	((bl = !0), om(e));
}
function rr() {
	if (!Sa && an !== null) {
		Sa = !0;
		var e = 0,
			t = oe;
		try {
			var n = an;
			for (oe = 1; e < n.length; e++) {
				var r = n[e];
				do r = r(!0);
				while (r !== null);
			}
			((an = null), (bl = !1));
		} catch (o) {
			throw (an !== null && (an = an.slice(e + 1)), Nh(mc, rr), o);
		} finally {
			((oe = t), (Sa = !1));
		}
	}
	return null;
}
var Gr = [],
	Yr = 0,
	Xs = null,
	qs = 0,
	gt = [],
	vt = 0,
	kr = null,
	cn = 1,
	dn = "";
function sr(e, t) {
	((Gr[Yr++] = qs), (Gr[Yr++] = Xs), (Xs = e), (qs = t));
}
function im(e, t, n) {
	((gt[vt++] = cn), (gt[vt++] = dn), (gt[vt++] = kr), (kr = e));
	var r = cn;
	e = dn;
	var o = 32 - Dt(r) - 1;
	((r &= ~(1 << o)), (n += 1));
	var i = 32 - Dt(t) + o;
	if (30 < i) {
		var s = o - (o % 5);
		((i = (r & ((1 << s) - 1)).toString(32)),
			(r >>= s),
			(o -= s),
			(cn = (1 << (32 - Dt(t) + o)) | (n << o) | r),
			(dn = i + e));
	} else ((cn = (1 << i) | (n << o) | r), (dn = e));
}
function kc(e) {
	e.return !== null && (sr(e, 1), im(e, 1, 0));
}
function bc(e) {
	for (; e === Xs; )
		((Xs = Gr[--Yr]), (Gr[Yr] = null), (qs = Gr[--Yr]), (Gr[Yr] = null));
	for (; e === kr; )
		((kr = gt[--vt]),
			(gt[vt] = null),
			(dn = gt[--vt]),
			(gt[vt] = null),
			(cn = gt[--vt]),
			(gt[vt] = null));
}
var at = null,
	lt = null,
	he = !1,
	Mt = null;
function sm(e, t) {
	var n = yt(5, null, null, 0);
	((n.elementType = "DELETED"),
		(n.stateNode = t),
		(n.return = e),
		(t = e.deletions),
		t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n));
}
function df(e, t) {
	switch (e.tag) {
		case 5:
			var n = e.type;
			return (
				(t =
					t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
						? null
						: t),
				t !== null
					? ((e.stateNode = t), (at = e), (lt = Vn(t.firstChild)), !0)
					: !1
			);
		case 6:
			return (
				(t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
				t !== null ? ((e.stateNode = t), (at = e), (lt = null), !0) : !1
			);
		case 13:
			return (
				(t = t.nodeType !== 8 ? null : t),
				t !== null
					? ((n = kr !== null ? { id: cn, overflow: dn } : null),
						(e.memoizedState = {
							dehydrated: t,
							treeContext: n,
							retryLane: 1073741824,
						}),
						(n = yt(18, null, null, 0)),
						(n.stateNode = t),
						(n.return = e),
						(e.child = n),
						(at = e),
						(lt = null),
						!0)
					: !1
			);
		default:
			return !1;
	}
}
function mu(e) {
	return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function gu(e) {
	if (he) {
		var t = lt;
		if (t) {
			var n = t;
			if (!df(e, t)) {
				if (mu(e)) throw Error(I(418));
				t = Vn(n.nextSibling);
				var r = at;
				t && df(e, t)
					? sm(r, n)
					: ((e.flags = (e.flags & -4097) | 2), (he = !1), (at = e));
			}
		} else {
			if (mu(e)) throw Error(I(418));
			((e.flags = (e.flags & -4097) | 2), (he = !1), (at = e));
		}
	}
}
function ff(e) {
	for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
		e = e.return;
	at = e;
}
function as(e) {
	if (e !== at) return !1;
	if (!he) return (ff(e), (he = !0), !1);
	var t;
	if (
		((t = e.tag !== 3) &&
			!(t = e.tag !== 5) &&
			((t = e.type),
			(t = t !== "head" && t !== "body" && !du(e.type, e.memoizedProps))),
		t && (t = lt))
	) {
		if (mu(e)) throw (lm(), Error(I(418)));
		for (; t; ) (sm(e, t), (t = Vn(t.nextSibling)));
	}
	if ((ff(e), e.tag === 13)) {
		if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
			throw Error(I(317));
		e: {
			for (e = e.nextSibling, t = 0; e; ) {
				if (e.nodeType === 8) {
					var n = e.data;
					if (n === "/$") {
						if (t === 0) {
							lt = Vn(e.nextSibling);
							break e;
						}
						t--;
					} else (n !== "$" && n !== "$!" && n !== "$?") || t++;
				}
				e = e.nextSibling;
			}
			lt = null;
		}
	} else lt = at ? Vn(e.stateNode.nextSibling) : null;
	return !0;
}
function lm() {
	for (var e = lt; e; ) e = Vn(e.nextSibling);
}
function wo() {
	((lt = at = null), (he = !1));
}
function Pc(e) {
	Mt === null ? (Mt = [e]) : Mt.push(e);
}
var f1 = wn.ReactCurrentBatchConfig;
function Vo(e, t, n) {
	if (
		((e = n.ref), e !== null && typeof e != "function" && typeof e != "object")
	) {
		if (n._owner) {
			if (((n = n._owner), n)) {
				if (n.tag !== 1) throw Error(I(309));
				var r = n.stateNode;
			}
			if (!r) throw Error(I(147, e));
			var o = r,
				i = "" + e;
			return t !== null &&
				t.ref !== null &&
				typeof t.ref == "function" &&
				t.ref._stringRef === i
				? t.ref
				: ((t = function (s) {
						var l = o.refs;
						s === null ? delete l[i] : (l[i] = s);
					}),
					(t._stringRef = i),
					t);
		}
		if (typeof e != "string") throw Error(I(284));
		if (!n._owner) throw Error(I(290, e));
	}
	return e;
}
function us(e, t) {
	throw (
		(e = Object.prototype.toString.call(t)),
		Error(
			I(
				31,
				e === "[object Object]"
					? "object with keys {" + Object.keys(t).join(", ") + "}"
					: e,
			),
		)
	);
}
function pf(e) {
	var t = e._init;
	return t(e._payload);
}
function am(e) {
	function t(m, p) {
		if (e) {
			var g = m.deletions;
			g === null ? ((m.deletions = [p]), (m.flags |= 16)) : g.push(p);
		}
	}
	function n(m, p) {
		if (!e) return null;
		for (; p !== null; ) (t(m, p), (p = p.sibling));
		return null;
	}
	function r(m, p) {
		for (m = new Map(); p !== null; )
			(p.key !== null ? m.set(p.key, p) : m.set(p.index, p), (p = p.sibling));
		return m;
	}
	function o(m, p) {
		return ((m = Gn(m, p)), (m.index = 0), (m.sibling = null), m);
	}
	function i(m, p, g) {
		return (
			(m.index = g),
			e
				? ((g = m.alternate),
					g !== null
						? ((g = g.index), g < p ? ((m.flags |= 2), p) : g)
						: ((m.flags |= 2), p))
				: ((m.flags |= 1048576), p)
		);
	}
	function s(m) {
		return (e && m.alternate === null && (m.flags |= 2), m);
	}
	function l(m, p, g, x) {
		return p === null || p.tag !== 6
			? ((p = Ra(g, m.mode, x)), (p.return = m), p)
			: ((p = o(p, g)), (p.return = m), p);
	}
	function a(m, p, g, x) {
		var C = g.type;
		return C === Ur
			? c(m, p, g.props.children, x, g.key)
			: p !== null &&
				  (p.elementType === C ||
						(typeof C == "object" &&
							C !== null &&
							C.$$typeof === Rn &&
							pf(C) === p.type))
				? ((x = o(p, g.props)), (x.ref = Vo(m, p, g)), (x.return = m), x)
				: ((x = As(g.type, g.key, g.props, null, m.mode, x)),
					(x.ref = Vo(m, p, g)),
					(x.return = m),
					x);
	}
	function u(m, p, g, x) {
		return p === null ||
			p.tag !== 4 ||
			p.stateNode.containerInfo !== g.containerInfo ||
			p.stateNode.implementation !== g.implementation
			? ((p = Na(g, m.mode, x)), (p.return = m), p)
			: ((p = o(p, g.children || [])), (p.return = m), p);
	}
	function c(m, p, g, x, C) {
		return p === null || p.tag !== 7
			? ((p = Sr(g, m.mode, x, C)), (p.return = m), p)
			: ((p = o(p, g)), (p.return = m), p);
	}
	function f(m, p, g) {
		if ((typeof p == "string" && p !== "") || typeof p == "number")
			return ((p = Ra("" + p, m.mode, g)), (p.return = m), p);
		if (typeof p == "object" && p !== null) {
			switch (p.$$typeof) {
				case Zi:
					return (
						(g = As(p.type, p.key, p.props, null, m.mode, g)),
						(g.ref = Vo(m, null, p)),
						(g.return = m),
						g
					);
				case Br:
					return ((p = Na(p, m.mode, g)), (p.return = m), p);
				case Rn:
					var x = p._init;
					return f(m, x(p._payload), g);
			}
			if (Xo(p) || Fo(p))
				return ((p = Sr(p, m.mode, g, null)), (p.return = m), p);
			us(m, p);
		}
		return null;
	}
	function h(m, p, g, x) {
		var C = p !== null ? p.key : null;
		if ((typeof g == "string" && g !== "") || typeof g == "number")
			return C !== null ? null : l(m, p, "" + g, x);
		if (typeof g == "object" && g !== null) {
			switch (g.$$typeof) {
				case Zi:
					return g.key === C ? a(m, p, g, x) : null;
				case Br:
					return g.key === C ? u(m, p, g, x) : null;
				case Rn:
					return ((C = g._init), h(m, p, C(g._payload), x));
			}
			if (Xo(g) || Fo(g)) return C !== null ? null : c(m, p, g, x, null);
			us(m, g);
		}
		return null;
	}
	function d(m, p, g, x, C) {
		if ((typeof x == "string" && x !== "") || typeof x == "number")
			return ((m = m.get(g) || null), l(p, m, "" + x, C));
		if (typeof x == "object" && x !== null) {
			switch (x.$$typeof) {
				case Zi:
					return (
						(m = m.get(x.key === null ? g : x.key) || null),
						a(p, m, x, C)
					);
				case Br:
					return (
						(m = m.get(x.key === null ? g : x.key) || null),
						u(p, m, x, C)
					);
				case Rn:
					var k = x._init;
					return d(m, p, g, k(x._payload), C);
			}
			if (Xo(x) || Fo(x)) return ((m = m.get(g) || null), c(p, m, x, C, null));
			us(p, x);
		}
		return null;
	}
	function w(m, p, g, x) {
		for (
			var C = null, k = null, E = p, b = (p = 0), _ = null;
			E !== null && b < g.length;
			b++
		) {
			E.index > b ? ((_ = E), (E = null)) : (_ = E.sibling);
			var L = h(m, E, g[b], x);
			if (L === null) {
				E === null && (E = _);
				break;
			}
			(e && E && L.alternate === null && t(m, E),
				(p = i(L, p, b)),
				k === null ? (C = L) : (k.sibling = L),
				(k = L),
				(E = _));
		}
		if (b === g.length) return (n(m, E), he && sr(m, b), C);
		if (E === null) {
			for (; b < g.length; b++)
				((E = f(m, g[b], x)),
					E !== null &&
						((p = i(E, p, b)),
						k === null ? (C = E) : (k.sibling = E),
						(k = E)));
			return (he && sr(m, b), C);
		}
		for (E = r(m, E); b < g.length; b++)
			((_ = d(E, m, b, g[b], x)),
				_ !== null &&
					(e && _.alternate !== null && E.delete(_.key === null ? b : _.key),
					(p = i(_, p, b)),
					k === null ? (C = _) : (k.sibling = _),
					(k = _)));
		return (
			e &&
				E.forEach(function (j) {
					return t(m, j);
				}),
			he && sr(m, b),
			C
		);
	}
	function v(m, p, g, x) {
		var C = Fo(g);
		if (typeof C != "function") throw Error(I(150));
		if (((g = C.call(g)), g == null)) throw Error(I(151));
		for (
			var k = (C = null), E = p, b = (p = 0), _ = null, L = g.next();
			E !== null && !L.done;
			b++, L = g.next()
		) {
			E.index > b ? ((_ = E), (E = null)) : (_ = E.sibling);
			var j = h(m, E, L.value, x);
			if (j === null) {
				E === null && (E = _);
				break;
			}
			(e && E && j.alternate === null && t(m, E),
				(p = i(j, p, b)),
				k === null ? (C = j) : (k.sibling = j),
				(k = j),
				(E = _));
		}
		if (L.done) return (n(m, E), he && sr(m, b), C);
		if (E === null) {
			for (; !L.done; b++, L = g.next())
				((L = f(m, L.value, x)),
					L !== null &&
						((p = i(L, p, b)),
						k === null ? (C = L) : (k.sibling = L),
						(k = L)));
			return (he && sr(m, b), C);
		}
		for (E = r(m, E); !L.done; b++, L = g.next())
			((L = d(E, m, b, L.value, x)),
				L !== null &&
					(e && L.alternate !== null && E.delete(L.key === null ? b : L.key),
					(p = i(L, p, b)),
					k === null ? (C = L) : (k.sibling = L),
					(k = L)));
		return (
			e &&
				E.forEach(function (D) {
					return t(m, D);
				}),
			he && sr(m, b),
			C
		);
	}
	function y(m, p, g, x) {
		if (
			(typeof g == "object" &&
				g !== null &&
				g.type === Ur &&
				g.key === null &&
				(g = g.props.children),
			typeof g == "object" && g !== null)
		) {
			switch (g.$$typeof) {
				case Zi:
					e: {
						for (var C = g.key, k = p; k !== null; ) {
							if (k.key === C) {
								if (((C = g.type), C === Ur)) {
									if (k.tag === 7) {
										(n(m, k.sibling),
											(p = o(k, g.props.children)),
											(p.return = m),
											(m = p));
										break e;
									}
								} else if (
									k.elementType === C ||
									(typeof C == "object" &&
										C !== null &&
										C.$$typeof === Rn &&
										pf(C) === k.type)
								) {
									(n(m, k.sibling),
										(p = o(k, g.props)),
										(p.ref = Vo(m, k, g)),
										(p.return = m),
										(m = p));
									break e;
								}
								n(m, k);
								break;
							} else t(m, k);
							k = k.sibling;
						}
						g.type === Ur
							? ((p = Sr(g.props.children, m.mode, x, g.key)),
								(p.return = m),
								(m = p))
							: ((x = As(g.type, g.key, g.props, null, m.mode, x)),
								(x.ref = Vo(m, p, g)),
								(x.return = m),
								(m = x));
					}
					return s(m);
				case Br:
					e: {
						for (k = g.key; p !== null; ) {
							if (p.key === k)
								if (
									p.tag === 4 &&
									p.stateNode.containerInfo === g.containerInfo &&
									p.stateNode.implementation === g.implementation
								) {
									(n(m, p.sibling),
										(p = o(p, g.children || [])),
										(p.return = m),
										(m = p));
									break e;
								} else {
									n(m, p);
									break;
								}
							else t(m, p);
							p = p.sibling;
						}
						((p = Na(g, m.mode, x)), (p.return = m), (m = p));
					}
					return s(m);
				case Rn:
					return ((k = g._init), y(m, p, k(g._payload), x));
			}
			if (Xo(g)) return w(m, p, g, x);
			if (Fo(g)) return v(m, p, g, x);
			us(m, g);
		}
		return (typeof g == "string" && g !== "") || typeof g == "number"
			? ((g = "" + g),
				p !== null && p.tag === 6
					? (n(m, p.sibling), (p = o(p, g)), (p.return = m), (m = p))
					: (n(m, p), (p = Ra(g, m.mode, x)), (p.return = m), (m = p)),
				s(m))
			: n(m, p);
	}
	return y;
}
var xo = am(!0),
	um = am(!1),
	Zs = nr(null),
	Js = null,
	Xr = null,
	Tc = null;
function Rc() {
	Tc = Xr = Js = null;
}
function Nc(e) {
	var t = Zs.current;
	(de(Zs), (e._currentValue = t));
}
function vu(e, t, n) {
	for (; e !== null; ) {
		var r = e.alternate;
		if (
			((e.childLanes & t) !== t
				? ((e.childLanes |= t), r !== null && (r.childLanes |= t))
				: r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
			e === n)
		)
			break;
		e = e.return;
	}
}
function ro(e, t) {
	((Js = e),
		(Tc = Xr = null),
		(e = e.dependencies),
		e !== null &&
			e.firstContext !== null &&
			(e.lanes & t && (qe = !0), (e.firstContext = null)));
}
function xt(e) {
	var t = e._currentValue;
	if (Tc !== e)
		if (((e = { context: e, memoizedValue: t, next: null }), Xr === null)) {
			if (Js === null) throw Error(I(308));
			((Xr = e), (Js.dependencies = { lanes: 0, firstContext: e }));
		} else Xr = Xr.next = e;
	return t;
}
var dr = null;
function Ac(e) {
	dr === null ? (dr = [e]) : dr.push(e);
}
function cm(e, t, n, r) {
	var o = t.interleaved;
	return (
		o === null ? ((n.next = n), Ac(t)) : ((n.next = o.next), (o.next = n)),
		(t.interleaved = n),
		mn(e, r)
	);
}
function mn(e, t) {
	e.lanes |= t;
	var n = e.alternate;
	for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
		((e.childLanes |= t),
			(n = e.alternate),
			n !== null && (n.childLanes |= t),
			(n = e),
			(e = e.return));
	return n.tag === 3 ? n.stateNode : null;
}
var Nn = !1;
function Oc(e) {
	e.updateQueue = {
		baseState: e.memoizedState,
		firstBaseUpdate: null,
		lastBaseUpdate: null,
		shared: { pending: null, interleaved: null, lanes: 0 },
		effects: null,
	};
}
function dm(e, t) {
	((e = e.updateQueue),
		t.updateQueue === e &&
			(t.updateQueue = {
				baseState: e.baseState,
				firstBaseUpdate: e.firstBaseUpdate,
				lastBaseUpdate: e.lastBaseUpdate,
				shared: e.shared,
				effects: e.effects,
			}));
}
function fn(e, t) {
	return {
		eventTime: e,
		lane: t,
		tag: 0,
		payload: null,
		callback: null,
		next: null,
	};
}
function Hn(e, t, n) {
	var r = e.updateQueue;
	if (r === null) return null;
	if (((r = r.shared), te & 2)) {
		var o = r.pending;
		return (
			o === null ? (t.next = t) : ((t.next = o.next), (o.next = t)),
			(r.pending = t),
			mn(e, n)
		);
	}
	return (
		(o = r.interleaved),
		o === null ? ((t.next = t), Ac(r)) : ((t.next = o.next), (o.next = t)),
		(r.interleaved = t),
		mn(e, n)
	);
}
function ks(e, t, n) {
	if (
		((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
	) {
		var r = t.lanes;
		((r &= e.pendingLanes), (n |= r), (t.lanes = n), gc(e, n));
	}
}
function hf(e, t) {
	var n = e.updateQueue,
		r = e.alternate;
	if (r !== null && ((r = r.updateQueue), n === r)) {
		var o = null,
			i = null;
		if (((n = n.firstBaseUpdate), n !== null)) {
			do {
				var s = {
					eventTime: n.eventTime,
					lane: n.lane,
					tag: n.tag,
					payload: n.payload,
					callback: n.callback,
					next: null,
				};
				(i === null ? (o = i = s) : (i = i.next = s), (n = n.next));
			} while (n !== null);
			i === null ? (o = i = t) : (i = i.next = t);
		} else o = i = t;
		((n = {
			baseState: r.baseState,
			firstBaseUpdate: o,
			lastBaseUpdate: i,
			shared: r.shared,
			effects: r.effects,
		}),
			(e.updateQueue = n));
		return;
	}
	((e = n.lastBaseUpdate),
		e === null ? (n.firstBaseUpdate = t) : (e.next = t),
		(n.lastBaseUpdate = t));
}
function el(e, t, n, r) {
	var o = e.updateQueue;
	Nn = !1;
	var i = o.firstBaseUpdate,
		s = o.lastBaseUpdate,
		l = o.shared.pending;
	if (l !== null) {
		o.shared.pending = null;
		var a = l,
			u = a.next;
		((a.next = null), s === null ? (i = u) : (s.next = u), (s = a));
		var c = e.alternate;
		c !== null &&
			((c = c.updateQueue),
			(l = c.lastBaseUpdate),
			l !== s &&
				(l === null ? (c.firstBaseUpdate = u) : (l.next = u),
				(c.lastBaseUpdate = a)));
	}
	if (i !== null) {
		var f = o.baseState;
		((s = 0), (c = u = a = null), (l = i));
		do {
			var h = l.lane,
				d = l.eventTime;
			if ((r & h) === h) {
				c !== null &&
					(c = c.next =
						{
							eventTime: d,
							lane: 0,
							tag: l.tag,
							payload: l.payload,
							callback: l.callback,
							next: null,
						});
				e: {
					var w = e,
						v = l;
					switch (((h = t), (d = n), v.tag)) {
						case 1:
							if (((w = v.payload), typeof w == "function")) {
								f = w.call(d, f, h);
								break e;
							}
							f = w;
							break e;
						case 3:
							w.flags = (w.flags & -65537) | 128;
						case 0:
							if (
								((w = v.payload),
								(h = typeof w == "function" ? w.call(d, f, h) : w),
								h == null)
							)
								break e;
							f = ve({}, f, h);
							break e;
						case 2:
							Nn = !0;
					}
				}
				l.callback !== null &&
					l.lane !== 0 &&
					((e.flags |= 64),
					(h = o.effects),
					h === null ? (o.effects = [l]) : h.push(l));
			} else
				((d = {
					eventTime: d,
					lane: h,
					tag: l.tag,
					payload: l.payload,
					callback: l.callback,
					next: null,
				}),
					c === null ? ((u = c = d), (a = f)) : (c = c.next = d),
					(s |= h));
			if (((l = l.next), l === null)) {
				if (((l = o.shared.pending), l === null)) break;
				((h = l),
					(l = h.next),
					(h.next = null),
					(o.lastBaseUpdate = h),
					(o.shared.pending = null));
			}
		} while (!0);
		if (
			(c === null && (a = f),
			(o.baseState = a),
			(o.firstBaseUpdate = u),
			(o.lastBaseUpdate = c),
			(t = o.shared.interleaved),
			t !== null)
		) {
			o = t;
			do ((s |= o.lane), (o = o.next));
			while (o !== t);
		} else i === null && (o.shared.lanes = 0);
		((Pr |= s), (e.lanes = s), (e.memoizedState = f));
	}
}
function mf(e, t, n) {
	if (((e = t.effects), (t.effects = null), e !== null))
		for (t = 0; t < e.length; t++) {
			var r = e[t],
				o = r.callback;
			if (o !== null) {
				if (((r.callback = null), (r = n), typeof o != "function"))
					throw Error(I(191, o));
				o.call(r);
			}
		}
}
var Ui = {},
	Zt = nr(Ui),
	ki = nr(Ui),
	bi = nr(Ui);
function fr(e) {
	if (e === Ui) throw Error(I(174));
	return e;
}
function _c(e, t) {
	switch ((le(bi, t), le(ki, e), le(Zt, Ui), (e = t.nodeType), e)) {
		case 9:
		case 11:
			t = (t = t.documentElement) ? t.namespaceURI : qa(null, "");
			break;
		default:
			((e = e === 8 ? t.parentNode : t),
				(t = e.namespaceURI || null),
				(e = e.tagName),
				(t = qa(t, e)));
	}
	(de(Zt), le(Zt, t));
}
function So() {
	(de(Zt), de(ki), de(bi));
}
function fm(e) {
	fr(bi.current);
	var t = fr(Zt.current),
		n = qa(t, e.type);
	t !== n && (le(ki, e), le(Zt, n));
}
function Ic(e) {
	ki.current === e && (de(Zt), de(ki));
}
var me = nr(0);
function tl(e) {
	for (var t = e; t !== null; ) {
		if (t.tag === 13) {
			var n = t.memoizedState;
			if (
				n !== null &&
				((n = n.dehydrated), n === null || n.data === "$?" || n.data === "$!")
			)
				return t;
		} else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
			if (t.flags & 128) return t;
		} else if (t.child !== null) {
			((t.child.return = t), (t = t.child));
			continue;
		}
		if (t === e) break;
		for (; t.sibling === null; ) {
			if (t.return === null || t.return === e) return null;
			t = t.return;
		}
		((t.sibling.return = t.return), (t = t.sibling));
	}
	return null;
}
var Ea = [];
function Lc() {
	for (var e = 0; e < Ea.length; e++)
		Ea[e]._workInProgressVersionPrimary = null;
	Ea.length = 0;
}
var bs = wn.ReactCurrentDispatcher,
	Ca = wn.ReactCurrentBatchConfig,
	br = 0,
	ge = null,
	ke = null,
	Re = null,
	nl = !1,
	si = !1,
	Pi = 0,
	p1 = 0;
function $e() {
	throw Error(I(321));
}
function $c(e, t) {
	if (t === null) return !1;
	for (var n = 0; n < t.length && n < e.length; n++)
		if (!zt(e[n], t[n])) return !1;
	return !0;
}
function Mc(e, t, n, r, o, i) {
	if (
		((br = i),
		(ge = t),
		(t.memoizedState = null),
		(t.updateQueue = null),
		(t.lanes = 0),
		(bs.current = e === null || e.memoizedState === null ? v1 : y1),
		(e = n(r, o)),
		si)
	) {
		i = 0;
		do {
			if (((si = !1), (Pi = 0), 25 <= i)) throw Error(I(301));
			((i += 1),
				(Re = ke = null),
				(t.updateQueue = null),
				(bs.current = w1),
				(e = n(r, o)));
		} while (si);
	}
	if (
		((bs.current = rl),
		(t = ke !== null && ke.next !== null),
		(br = 0),
		(Re = ke = ge = null),
		(nl = !1),
		t)
	)
		throw Error(I(300));
	return e;
}
function Dc() {
	var e = Pi !== 0;
	return ((Pi = 0), e);
}
function Ht() {
	var e = {
		memoizedState: null,
		baseState: null,
		baseQueue: null,
		queue: null,
		next: null,
	};
	return (Re === null ? (ge.memoizedState = Re = e) : (Re = Re.next = e), Re);
}
function St() {
	if (ke === null) {
		var e = ge.alternate;
		e = e !== null ? e.memoizedState : null;
	} else e = ke.next;
	var t = Re === null ? ge.memoizedState : Re.next;
	if (t !== null) ((Re = t), (ke = e));
	else {
		if (e === null) throw Error(I(310));
		((ke = e),
			(e = {
				memoizedState: ke.memoizedState,
				baseState: ke.baseState,
				baseQueue: ke.baseQueue,
				queue: ke.queue,
				next: null,
			}),
			Re === null ? (ge.memoizedState = Re = e) : (Re = Re.next = e));
	}
	return Re;
}
function Ti(e, t) {
	return typeof t == "function" ? t(e) : t;
}
function ka(e) {
	var t = St(),
		n = t.queue;
	if (n === null) throw Error(I(311));
	n.lastRenderedReducer = e;
	var r = ke,
		o = r.baseQueue,
		i = n.pending;
	if (i !== null) {
		if (o !== null) {
			var s = o.next;
			((o.next = i.next), (i.next = s));
		}
		((r.baseQueue = o = i), (n.pending = null));
	}
	if (o !== null) {
		((i = o.next), (r = r.baseState));
		var l = (s = null),
			a = null,
			u = i;
		do {
			var c = u.lane;
			if ((br & c) === c)
				(a !== null &&
					(a = a.next =
						{
							lane: 0,
							action: u.action,
							hasEagerState: u.hasEagerState,
							eagerState: u.eagerState,
							next: null,
						}),
					(r = u.hasEagerState ? u.eagerState : e(r, u.action)));
			else {
				var f = {
					lane: c,
					action: u.action,
					hasEagerState: u.hasEagerState,
					eagerState: u.eagerState,
					next: null,
				};
				(a === null ? ((l = a = f), (s = r)) : (a = a.next = f),
					(ge.lanes |= c),
					(Pr |= c));
			}
			u = u.next;
		} while (u !== null && u !== i);
		(a === null ? (s = r) : (a.next = l),
			zt(r, t.memoizedState) || (qe = !0),
			(t.memoizedState = r),
			(t.baseState = s),
			(t.baseQueue = a),
			(n.lastRenderedState = r));
	}
	if (((e = n.interleaved), e !== null)) {
		o = e;
		do ((i = o.lane), (ge.lanes |= i), (Pr |= i), (o = o.next));
		while (o !== e);
	} else o === null && (n.lanes = 0);
	return [t.memoizedState, n.dispatch];
}
function ba(e) {
	var t = St(),
		n = t.queue;
	if (n === null) throw Error(I(311));
	n.lastRenderedReducer = e;
	var r = n.dispatch,
		o = n.pending,
		i = t.memoizedState;
	if (o !== null) {
		n.pending = null;
		var s = (o = o.next);
		do ((i = e(i, s.action)), (s = s.next));
		while (s !== o);
		(zt(i, t.memoizedState) || (qe = !0),
			(t.memoizedState = i),
			t.baseQueue === null && (t.baseState = i),
			(n.lastRenderedState = i));
	}
	return [i, r];
}
function pm() {}
function hm(e, t) {
	var n = ge,
		r = St(),
		o = t(),
		i = !zt(r.memoizedState, o);
	if (
		(i && ((r.memoizedState = o), (qe = !0)),
		(r = r.queue),
		jc(vm.bind(null, n, r, e), [e]),
		r.getSnapshot !== t || i || (Re !== null && Re.memoizedState.tag & 1))
	) {
		if (
			((n.flags |= 2048),
			Ri(9, gm.bind(null, n, r, o, t), void 0, null),
			Ne === null)
		)
			throw Error(I(349));
		br & 30 || mm(n, t, o);
	}
	return o;
}
function mm(e, t, n) {
	((e.flags |= 16384),
		(e = { getSnapshot: t, value: n }),
		(t = ge.updateQueue),
		t === null
			? ((t = { lastEffect: null, stores: null }),
				(ge.updateQueue = t),
				(t.stores = [e]))
			: ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e)));
}
function gm(e, t, n, r) {
	((t.value = n), (t.getSnapshot = r), ym(t) && wm(e));
}
function vm(e, t, n) {
	return n(function () {
		ym(t) && wm(e);
	});
}
function ym(e) {
	var t = e.getSnapshot;
	e = e.value;
	try {
		var n = t();
		return !zt(e, n);
	} catch {
		return !0;
	}
}
function wm(e) {
	var t = mn(e, 1);
	t !== null && jt(t, e, 1, -1);
}
function gf(e) {
	var t = Ht();
	return (
		typeof e == "function" && (e = e()),
		(t.memoizedState = t.baseState = e),
		(e = {
			pending: null,
			interleaved: null,
			lanes: 0,
			dispatch: null,
			lastRenderedReducer: Ti,
			lastRenderedState: e,
		}),
		(t.queue = e),
		(e = e.dispatch = g1.bind(null, ge, e)),
		[t.memoizedState, e]
	);
}
function Ri(e, t, n, r) {
	return (
		(e = { tag: e, create: t, destroy: n, deps: r, next: null }),
		(t = ge.updateQueue),
		t === null
			? ((t = { lastEffect: null, stores: null }),
				(ge.updateQueue = t),
				(t.lastEffect = e.next = e))
			: ((n = t.lastEffect),
				n === null
					? (t.lastEffect = e.next = e)
					: ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
		e
	);
}
function xm() {
	return St().memoizedState;
}
function Ps(e, t, n, r) {
	var o = Ht();
	((ge.flags |= e),
		(o.memoizedState = Ri(1 | t, n, void 0, r === void 0 ? null : r)));
}
function Pl(e, t, n, r) {
	var o = St();
	r = r === void 0 ? null : r;
	var i = void 0;
	if (ke !== null) {
		var s = ke.memoizedState;
		if (((i = s.destroy), r !== null && $c(r, s.deps))) {
			o.memoizedState = Ri(t, n, i, r);
			return;
		}
	}
	((ge.flags |= e), (o.memoizedState = Ri(1 | t, n, i, r)));
}
function vf(e, t) {
	return Ps(8390656, 8, e, t);
}
function jc(e, t) {
	return Pl(2048, 8, e, t);
}
function Sm(e, t) {
	return Pl(4, 2, e, t);
}
function Em(e, t) {
	return Pl(4, 4, e, t);
}
function Cm(e, t) {
	if (typeof t == "function")
		return (
			(e = e()),
			t(e),
			function () {
				t(null);
			}
		);
	if (t != null)
		return (
			(e = e()),
			(t.current = e),
			function () {
				t.current = null;
			}
		);
}
function km(e, t, n) {
	return (
		(n = n != null ? n.concat([e]) : null),
		Pl(4, 4, Cm.bind(null, t, e), n)
	);
}
function Fc() {}
function bm(e, t) {
	var n = St();
	t = t === void 0 ? null : t;
	var r = n.memoizedState;
	return r !== null && t !== null && $c(t, r[1])
		? r[0]
		: ((n.memoizedState = [e, t]), e);
}
function Pm(e, t) {
	var n = St();
	t = t === void 0 ? null : t;
	var r = n.memoizedState;
	return r !== null && t !== null && $c(t, r[1])
		? r[0]
		: ((e = e()), (n.memoizedState = [e, t]), e);
}
function Tm(e, t, n) {
	return br & 21
		? (zt(n, t) || ((n = _h()), (ge.lanes |= n), (Pr |= n), (e.baseState = !0)),
			t)
		: (e.baseState && ((e.baseState = !1), (qe = !0)), (e.memoizedState = n));
}
function h1(e, t) {
	var n = oe;
	((oe = n !== 0 && 4 > n ? n : 4), e(!0));
	var r = Ca.transition;
	Ca.transition = {};
	try {
		(e(!1), t());
	} finally {
		((oe = n), (Ca.transition = r));
	}
}
function Rm() {
	return St().memoizedState;
}
function m1(e, t, n) {
	var r = Kn(e);
	if (
		((n = {
			lane: r,
			action: n,
			hasEagerState: !1,
			eagerState: null,
			next: null,
		}),
		Nm(e))
	)
		Am(t, n);
	else if (((n = cm(e, t, n, r)), n !== null)) {
		var o = Ve();
		(jt(n, e, r, o), Om(n, t, r));
	}
}
function g1(e, t, n) {
	var r = Kn(e),
		o = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
	if (Nm(e)) Am(t, o);
	else {
		var i = e.alternate;
		if (
			e.lanes === 0 &&
			(i === null || i.lanes === 0) &&
			((i = t.lastRenderedReducer), i !== null)
		)
			try {
				var s = t.lastRenderedState,
					l = i(s, n);
				if (((o.hasEagerState = !0), (o.eagerState = l), zt(l, s))) {
					var a = t.interleaved;
					(a === null
						? ((o.next = o), Ac(t))
						: ((o.next = a.next), (a.next = o)),
						(t.interleaved = o));
					return;
				}
			} catch {
			} finally {
			}
		((n = cm(e, t, o, r)),
			n !== null && ((o = Ve()), jt(n, e, r, o), Om(n, t, r)));
	}
}
function Nm(e) {
	var t = e.alternate;
	return e === ge || (t !== null && t === ge);
}
function Am(e, t) {
	si = nl = !0;
	var n = e.pending;
	(n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
		(e.pending = t));
}
function Om(e, t, n) {
	if (n & 4194240) {
		var r = t.lanes;
		((r &= e.pendingLanes), (n |= r), (t.lanes = n), gc(e, n));
	}
}
var rl = {
		readContext: xt,
		useCallback: $e,
		useContext: $e,
		useEffect: $e,
		useImperativeHandle: $e,
		useInsertionEffect: $e,
		useLayoutEffect: $e,
		useMemo: $e,
		useReducer: $e,
		useRef: $e,
		useState: $e,
		useDebugValue: $e,
		useDeferredValue: $e,
		useTransition: $e,
		useMutableSource: $e,
		useSyncExternalStore: $e,
		useId: $e,
		unstable_isNewReconciler: !1,
	},
	v1 = {
		readContext: xt,
		useCallback: function (e, t) {
			return ((Ht().memoizedState = [e, t === void 0 ? null : t]), e);
		},
		useContext: xt,
		useEffect: vf,
		useImperativeHandle: function (e, t, n) {
			return (
				(n = n != null ? n.concat([e]) : null),
				Ps(4194308, 4, Cm.bind(null, t, e), n)
			);
		},
		useLayoutEffect: function (e, t) {
			return Ps(4194308, 4, e, t);
		},
		useInsertionEffect: function (e, t) {
			return Ps(4, 2, e, t);
		},
		useMemo: function (e, t) {
			var n = Ht();
			return (
				(t = t === void 0 ? null : t),
				(e = e()),
				(n.memoizedState = [e, t]),
				e
			);
		},
		useReducer: function (e, t, n) {
			var r = Ht();
			return (
				(t = n !== void 0 ? n(t) : t),
				(r.memoizedState = r.baseState = t),
				(e = {
					pending: null,
					interleaved: null,
					lanes: 0,
					dispatch: null,
					lastRenderedReducer: e,
					lastRenderedState: t,
				}),
				(r.queue = e),
				(e = e.dispatch = m1.bind(null, ge, e)),
				[r.memoizedState, e]
			);
		},
		useRef: function (e) {
			var t = Ht();
			return ((e = { current: e }), (t.memoizedState = e));
		},
		useState: gf,
		useDebugValue: Fc,
		useDeferredValue: function (e) {
			return (Ht().memoizedState = e);
		},
		useTransition: function () {
			var e = gf(!1),
				t = e[0];
			return ((e = h1.bind(null, e[1])), (Ht().memoizedState = e), [t, e]);
		},
		useMutableSource: function () {},
		useSyncExternalStore: function (e, t, n) {
			var r = ge,
				o = Ht();
			if (he) {
				if (n === void 0) throw Error(I(407));
				n = n();
			} else {
				if (((n = t()), Ne === null)) throw Error(I(349));
				br & 30 || mm(r, t, n);
			}
			o.memoizedState = n;
			var i = { value: n, getSnapshot: t };
			return (
				(o.queue = i),
				vf(vm.bind(null, r, i, e), [e]),
				(r.flags |= 2048),
				Ri(9, gm.bind(null, r, i, n, t), void 0, null),
				n
			);
		},
		useId: function () {
			var e = Ht(),
				t = Ne.identifierPrefix;
			if (he) {
				var n = dn,
					r = cn;
				((n = (r & ~(1 << (32 - Dt(r) - 1))).toString(32) + n),
					(t = ":" + t + "R" + n),
					(n = Pi++),
					0 < n && (t += "H" + n.toString(32)),
					(t += ":"));
			} else ((n = p1++), (t = ":" + t + "r" + n.toString(32) + ":"));
			return (e.memoizedState = t);
		},
		unstable_isNewReconciler: !1,
	},
	y1 = {
		readContext: xt,
		useCallback: bm,
		useContext: xt,
		useEffect: jc,
		useImperativeHandle: km,
		useInsertionEffect: Sm,
		useLayoutEffect: Em,
		useMemo: Pm,
		useReducer: ka,
		useRef: xm,
		useState: function () {
			return ka(Ti);
		},
		useDebugValue: Fc,
		useDeferredValue: function (e) {
			var t = St();
			return Tm(t, ke.memoizedState, e);
		},
		useTransition: function () {
			var e = ka(Ti)[0],
				t = St().memoizedState;
			return [e, t];
		},
		useMutableSource: pm,
		useSyncExternalStore: hm,
		useId: Rm,
		unstable_isNewReconciler: !1,
	},
	w1 = {
		readContext: xt,
		useCallback: bm,
		useContext: xt,
		useEffect: jc,
		useImperativeHandle: km,
		useInsertionEffect: Sm,
		useLayoutEffect: Em,
		useMemo: Pm,
		useReducer: ba,
		useRef: xm,
		useState: function () {
			return ba(Ti);
		},
		useDebugValue: Fc,
		useDeferredValue: function (e) {
			var t = St();
			return ke === null ? (t.memoizedState = e) : Tm(t, ke.memoizedState, e);
		},
		useTransition: function () {
			var e = ba(Ti)[0],
				t = St().memoizedState;
			return [e, t];
		},
		useMutableSource: pm,
		useSyncExternalStore: hm,
		useId: Rm,
		unstable_isNewReconciler: !1,
	};
function At(e, t) {
	if (e && e.defaultProps) {
		((t = ve({}, t)), (e = e.defaultProps));
		for (var n in e) t[n] === void 0 && (t[n] = e[n]);
		return t;
	}
	return t;
}
function yu(e, t, n, r) {
	((t = e.memoizedState),
		(n = n(r, t)),
		(n = n == null ? t : ve({}, t, n)),
		(e.memoizedState = n),
		e.lanes === 0 && (e.updateQueue.baseState = n));
}
var Tl = {
	isMounted: function (e) {
		return (e = e._reactInternals) ? Or(e) === e : !1;
	},
	enqueueSetState: function (e, t, n) {
		e = e._reactInternals;
		var r = Ve(),
			o = Kn(e),
			i = fn(r, o);
		((i.payload = t),
			n != null && (i.callback = n),
			(t = Hn(e, i, o)),
			t !== null && (jt(t, e, o, r), ks(t, e, o)));
	},
	enqueueReplaceState: function (e, t, n) {
		e = e._reactInternals;
		var r = Ve(),
			o = Kn(e),
			i = fn(r, o);
		((i.tag = 1),
			(i.payload = t),
			n != null && (i.callback = n),
			(t = Hn(e, i, o)),
			t !== null && (jt(t, e, o, r), ks(t, e, o)));
	},
	enqueueForceUpdate: function (e, t) {
		e = e._reactInternals;
		var n = Ve(),
			r = Kn(e),
			o = fn(n, r);
		((o.tag = 2),
			t != null && (o.callback = t),
			(t = Hn(e, o, r)),
			t !== null && (jt(t, e, r, n), ks(t, e, r)));
	},
};
function yf(e, t, n, r, o, i, s) {
	return (
		(e = e.stateNode),
		typeof e.shouldComponentUpdate == "function"
			? e.shouldComponentUpdate(r, i, s)
			: t.prototype && t.prototype.isPureReactComponent
				? !xi(n, r) || !xi(o, i)
				: !0
	);
}
function _m(e, t, n) {
	var r = !1,
		o = Xn,
		i = t.contextType;
	return (
		typeof i == "object" && i !== null
			? (i = xt(i))
			: ((o = et(t) ? Cr : Fe.current),
				(r = t.contextTypes),
				(i = (r = r != null) ? yo(e, o) : Xn)),
		(t = new t(n, i)),
		(e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
		(t.updater = Tl),
		(e.stateNode = t),
		(t._reactInternals = e),
		r &&
			((e = e.stateNode),
			(e.__reactInternalMemoizedUnmaskedChildContext = o),
			(e.__reactInternalMemoizedMaskedChildContext = i)),
		t
	);
}
function wf(e, t, n, r) {
	((e = t.state),
		typeof t.componentWillReceiveProps == "function" &&
			t.componentWillReceiveProps(n, r),
		typeof t.UNSAFE_componentWillReceiveProps == "function" &&
			t.UNSAFE_componentWillReceiveProps(n, r),
		t.state !== e && Tl.enqueueReplaceState(t, t.state, null));
}
function wu(e, t, n, r) {
	var o = e.stateNode;
	((o.props = n), (o.state = e.memoizedState), (o.refs = {}), Oc(e));
	var i = t.contextType;
	(typeof i == "object" && i !== null
		? (o.context = xt(i))
		: ((i = et(t) ? Cr : Fe.current), (o.context = yo(e, i))),
		(o.state = e.memoizedState),
		(i = t.getDerivedStateFromProps),
		typeof i == "function" && (yu(e, t, i, n), (o.state = e.memoizedState)),
		typeof t.getDerivedStateFromProps == "function" ||
			typeof o.getSnapshotBeforeUpdate == "function" ||
			(typeof o.UNSAFE_componentWillMount != "function" &&
				typeof o.componentWillMount != "function") ||
			((t = o.state),
			typeof o.componentWillMount == "function" && o.componentWillMount(),
			typeof o.UNSAFE_componentWillMount == "function" &&
				o.UNSAFE_componentWillMount(),
			t !== o.state && Tl.enqueueReplaceState(o, o.state, null),
			el(e, n, o, r),
			(o.state = e.memoizedState)),
		typeof o.componentDidMount == "function" && (e.flags |= 4194308));
}
function Eo(e, t) {
	try {
		var n = "",
			r = t;
		do ((n += Ky(r)), (r = r.return));
		while (r);
		var o = n;
	} catch (i) {
		o =
			`
Error generating stack: ` +
			i.message +
			`
` +
			i.stack;
	}
	return { value: e, source: t, stack: o, digest: null };
}
function Pa(e, t, n) {
	return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function xu(e, t) {
	try {
		console.error(t.value);
	} catch (n) {
		setTimeout(function () {
			throw n;
		});
	}
}
var x1 = typeof WeakMap == "function" ? WeakMap : Map;
function Im(e, t, n) {
	((n = fn(-1, n)), (n.tag = 3), (n.payload = { element: null }));
	var r = t.value;
	return (
		(n.callback = function () {
			(il || ((il = !0), (Au = r)), xu(e, t));
		}),
		n
	);
}
function Lm(e, t, n) {
	((n = fn(-1, n)), (n.tag = 3));
	var r = e.type.getDerivedStateFromError;
	if (typeof r == "function") {
		var o = t.value;
		((n.payload = function () {
			return r(o);
		}),
			(n.callback = function () {
				xu(e, t);
			}));
	}
	var i = e.stateNode;
	return (
		i !== null &&
			typeof i.componentDidCatch == "function" &&
			(n.callback = function () {
				(xu(e, t),
					typeof r != "function" &&
						(Qn === null ? (Qn = new Set([this])) : Qn.add(this)));
				var s = t.stack;
				this.componentDidCatch(t.value, {
					componentStack: s !== null ? s : "",
				});
			}),
		n
	);
}
function xf(e, t, n) {
	var r = e.pingCache;
	if (r === null) {
		r = e.pingCache = new x1();
		var o = new Set();
		r.set(t, o);
	} else ((o = r.get(t)), o === void 0 && ((o = new Set()), r.set(t, o)));
	o.has(n) || (o.add(n), (e = L1.bind(null, e, t, n)), t.then(e, e));
}
function Sf(e) {
	do {
		var t;
		if (
			((t = e.tag === 13) &&
				((t = e.memoizedState), (t = t !== null ? t.dehydrated !== null : !0)),
			t)
		)
			return e;
		e = e.return;
	} while (e !== null);
	return null;
}
function Ef(e, t, n, r, o) {
	return e.mode & 1
		? ((e.flags |= 65536), (e.lanes = o), e)
		: (e === t
				? (e.flags |= 65536)
				: ((e.flags |= 128),
					(n.flags |= 131072),
					(n.flags &= -52805),
					n.tag === 1 &&
						(n.alternate === null
							? (n.tag = 17)
							: ((t = fn(-1, 1)), (t.tag = 2), Hn(n, t, 1))),
					(n.lanes |= 1)),
			e);
}
var S1 = wn.ReactCurrentOwner,
	qe = !1;
function Ue(e, t, n, r) {
	t.child = e === null ? um(t, null, n, r) : xo(t, e.child, n, r);
}
function Cf(e, t, n, r, o) {
	n = n.render;
	var i = t.ref;
	return (
		ro(t, o),
		(r = Mc(e, t, n, r, i, o)),
		(n = Dc()),
		e !== null && !qe
			? ((t.updateQueue = e.updateQueue),
				(t.flags &= -2053),
				(e.lanes &= ~o),
				gn(e, t, o))
			: (he && n && kc(t), (t.flags |= 1), Ue(e, t, r, o), t.child)
	);
}
function kf(e, t, n, r, o) {
	if (e === null) {
		var i = n.type;
		return typeof i == "function" &&
			!Kc(i) &&
			i.defaultProps === void 0 &&
			n.compare === null &&
			n.defaultProps === void 0
			? ((t.tag = 15), (t.type = i), $m(e, t, i, r, o))
			: ((e = As(n.type, null, r, t, t.mode, o)),
				(e.ref = t.ref),
				(e.return = t),
				(t.child = e));
	}
	if (((i = e.child), !(e.lanes & o))) {
		var s = i.memoizedProps;
		if (
			((n = n.compare), (n = n !== null ? n : xi), n(s, r) && e.ref === t.ref)
		)
			return gn(e, t, o);
	}
	return (
		(t.flags |= 1),
		(e = Gn(i, r)),
		(e.ref = t.ref),
		(e.return = t),
		(t.child = e)
	);
}
function $m(e, t, n, r, o) {
	if (e !== null) {
		var i = e.memoizedProps;
		if (xi(i, r) && e.ref === t.ref)
			if (((qe = !1), (t.pendingProps = r = i), (e.lanes & o) !== 0))
				e.flags & 131072 && (qe = !0);
			else return ((t.lanes = e.lanes), gn(e, t, o));
	}
	return Su(e, t, n, r, o);
}
function Mm(e, t, n) {
	var r = t.pendingProps,
		o = r.children,
		i = e !== null ? e.memoizedState : null;
	if (r.mode === "hidden")
		if (!(t.mode & 1))
			((t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
				le(Zr, it),
				(it |= n));
		else {
			if (!(n & 1073741824))
				return (
					(e = i !== null ? i.baseLanes | n : n),
					(t.lanes = t.childLanes = 1073741824),
					(t.memoizedState = {
						baseLanes: e,
						cachePool: null,
						transitions: null,
					}),
					(t.updateQueue = null),
					le(Zr, it),
					(it |= e),
					null
				);
			((t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
				(r = i !== null ? i.baseLanes : n),
				le(Zr, it),
				(it |= r));
		}
	else
		(i !== null ? ((r = i.baseLanes | n), (t.memoizedState = null)) : (r = n),
			le(Zr, it),
			(it |= r));
	return (Ue(e, t, o, n), t.child);
}
function Dm(e, t) {
	var n = t.ref;
	((e === null && n !== null) || (e !== null && e.ref !== n)) &&
		((t.flags |= 512), (t.flags |= 2097152));
}
function Su(e, t, n, r, o) {
	var i = et(n) ? Cr : Fe.current;
	return (
		(i = yo(t, i)),
		ro(t, o),
		(n = Mc(e, t, n, r, i, o)),
		(r = Dc()),
		e !== null && !qe
			? ((t.updateQueue = e.updateQueue),
				(t.flags &= -2053),
				(e.lanes &= ~o),
				gn(e, t, o))
			: (he && r && kc(t), (t.flags |= 1), Ue(e, t, n, o), t.child)
	);
}
function bf(e, t, n, r, o) {
	if (et(n)) {
		var i = !0;
		Ys(t);
	} else i = !1;
	if ((ro(t, o), t.stateNode === null))
		(Ts(e, t), _m(t, n, r), wu(t, n, r, o), (r = !0));
	else if (e === null) {
		var s = t.stateNode,
			l = t.memoizedProps;
		s.props = l;
		var a = s.context,
			u = n.contextType;
		typeof u == "object" && u !== null
			? (u = xt(u))
			: ((u = et(n) ? Cr : Fe.current), (u = yo(t, u)));
		var c = n.getDerivedStateFromProps,
			f =
				typeof c == "function" ||
				typeof s.getSnapshotBeforeUpdate == "function";
		(f ||
			(typeof s.UNSAFE_componentWillReceiveProps != "function" &&
				typeof s.componentWillReceiveProps != "function") ||
			((l !== r || a !== u) && wf(t, s, r, u)),
			(Nn = !1));
		var h = t.memoizedState;
		((s.state = h),
			el(t, r, s, o),
			(a = t.memoizedState),
			l !== r || h !== a || Je.current || Nn
				? (typeof c == "function" && (yu(t, n, c, r), (a = t.memoizedState)),
					(l = Nn || yf(t, n, l, r, h, a, u))
						? (f ||
								(typeof s.UNSAFE_componentWillMount != "function" &&
									typeof s.componentWillMount != "function") ||
								(typeof s.componentWillMount == "function" &&
									s.componentWillMount(),
								typeof s.UNSAFE_componentWillMount == "function" &&
									s.UNSAFE_componentWillMount()),
							typeof s.componentDidMount == "function" && (t.flags |= 4194308))
						: (typeof s.componentDidMount == "function" && (t.flags |= 4194308),
							(t.memoizedProps = r),
							(t.memoizedState = a)),
					(s.props = r),
					(s.state = a),
					(s.context = u),
					(r = l))
				: (typeof s.componentDidMount == "function" && (t.flags |= 4194308),
					(r = !1)));
	} else {
		((s = t.stateNode),
			dm(e, t),
			(l = t.memoizedProps),
			(u = t.type === t.elementType ? l : At(t.type, l)),
			(s.props = u),
			(f = t.pendingProps),
			(h = s.context),
			(a = n.contextType),
			typeof a == "object" && a !== null
				? (a = xt(a))
				: ((a = et(n) ? Cr : Fe.current), (a = yo(t, a))));
		var d = n.getDerivedStateFromProps;
		((c =
			typeof d == "function" ||
			typeof s.getSnapshotBeforeUpdate == "function") ||
			(typeof s.UNSAFE_componentWillReceiveProps != "function" &&
				typeof s.componentWillReceiveProps != "function") ||
			((l !== f || h !== a) && wf(t, s, r, a)),
			(Nn = !1),
			(h = t.memoizedState),
			(s.state = h),
			el(t, r, s, o));
		var w = t.memoizedState;
		l !== f || h !== w || Je.current || Nn
			? (typeof d == "function" && (yu(t, n, d, r), (w = t.memoizedState)),
				(u = Nn || yf(t, n, u, r, h, w, a) || !1)
					? (c ||
							(typeof s.UNSAFE_componentWillUpdate != "function" &&
								typeof s.componentWillUpdate != "function") ||
							(typeof s.componentWillUpdate == "function" &&
								s.componentWillUpdate(r, w, a),
							typeof s.UNSAFE_componentWillUpdate == "function" &&
								s.UNSAFE_componentWillUpdate(r, w, a)),
						typeof s.componentDidUpdate == "function" && (t.flags |= 4),
						typeof s.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024))
					: (typeof s.componentDidUpdate != "function" ||
							(l === e.memoizedProps && h === e.memoizedState) ||
							(t.flags |= 4),
						typeof s.getSnapshotBeforeUpdate != "function" ||
							(l === e.memoizedProps && h === e.memoizedState) ||
							(t.flags |= 1024),
						(t.memoizedProps = r),
						(t.memoizedState = w)),
				(s.props = r),
				(s.state = w),
				(s.context = a),
				(r = u))
			: (typeof s.componentDidUpdate != "function" ||
					(l === e.memoizedProps && h === e.memoizedState) ||
					(t.flags |= 4),
				typeof s.getSnapshotBeforeUpdate != "function" ||
					(l === e.memoizedProps && h === e.memoizedState) ||
					(t.flags |= 1024),
				(r = !1));
	}
	return Eu(e, t, n, r, i, o);
}
function Eu(e, t, n, r, o, i) {
	Dm(e, t);
	var s = (t.flags & 128) !== 0;
	if (!r && !s) return (o && cf(t, n, !1), gn(e, t, i));
	((r = t.stateNode), (S1.current = t));
	var l =
		s && typeof n.getDerivedStateFromError != "function" ? null : r.render();
	return (
		(t.flags |= 1),
		e !== null && s
			? ((t.child = xo(t, e.child, null, i)), (t.child = xo(t, null, l, i)))
			: Ue(e, t, l, i),
		(t.memoizedState = r.state),
		o && cf(t, n, !0),
		t.child
	);
}
function jm(e) {
	var t = e.stateNode;
	(t.pendingContext
		? uf(e, t.pendingContext, t.pendingContext !== t.context)
		: t.context && uf(e, t.context, !1),
		_c(e, t.containerInfo));
}
function Pf(e, t, n, r, o) {
	return (wo(), Pc(o), (t.flags |= 256), Ue(e, t, n, r), t.child);
}
var Cu = { dehydrated: null, treeContext: null, retryLane: 0 };
function ku(e) {
	return { baseLanes: e, cachePool: null, transitions: null };
}
function Fm(e, t, n) {
	var r = t.pendingProps,
		o = me.current,
		i = !1,
		s = (t.flags & 128) !== 0,
		l;
	if (
		((l = s) ||
			(l = e !== null && e.memoizedState === null ? !1 : (o & 2) !== 0),
		l
			? ((i = !0), (t.flags &= -129))
			: (e === null || e.memoizedState !== null) && (o |= 1),
		le(me, o & 1),
		e === null)
	)
		return (
			gu(t),
			(e = t.memoizedState),
			e !== null && ((e = e.dehydrated), e !== null)
				? (t.mode & 1
						? e.data === "$!"
							? (t.lanes = 8)
							: (t.lanes = 1073741824)
						: (t.lanes = 1),
					null)
				: ((s = r.children),
					(e = r.fallback),
					i
						? ((r = t.mode),
							(i = t.child),
							(s = { mode: "hidden", children: s }),
							!(r & 1) && i !== null
								? ((i.childLanes = 0), (i.pendingProps = s))
								: (i = Al(s, r, 0, null)),
							(e = Sr(e, r, n, null)),
							(i.return = t),
							(e.return = t),
							(i.sibling = e),
							(t.child = i),
							(t.child.memoizedState = ku(n)),
							(t.memoizedState = Cu),
							e)
						: zc(t, s))
		);
	if (((o = e.memoizedState), o !== null && ((l = o.dehydrated), l !== null)))
		return E1(e, t, s, r, l, o, n);
	if (i) {
		((i = r.fallback), (s = t.mode), (o = e.child), (l = o.sibling));
		var a = { mode: "hidden", children: r.children };
		return (
			!(s & 1) && t.child !== o
				? ((r = t.child),
					(r.childLanes = 0),
					(r.pendingProps = a),
					(t.deletions = null))
				: ((r = Gn(o, a)), (r.subtreeFlags = o.subtreeFlags & 14680064)),
			l !== null ? (i = Gn(l, i)) : ((i = Sr(i, s, n, null)), (i.flags |= 2)),
			(i.return = t),
			(r.return = t),
			(r.sibling = i),
			(t.child = r),
			(r = i),
			(i = t.child),
			(s = e.child.memoizedState),
			(s =
				s === null
					? ku(n)
					: {
							baseLanes: s.baseLanes | n,
							cachePool: null,
							transitions: s.transitions,
						}),
			(i.memoizedState = s),
			(i.childLanes = e.childLanes & ~n),
			(t.memoizedState = Cu),
			r
		);
	}
	return (
		(i = e.child),
		(e = i.sibling),
		(r = Gn(i, { mode: "visible", children: r.children })),
		!(t.mode & 1) && (r.lanes = n),
		(r.return = t),
		(r.sibling = null),
		e !== null &&
			((n = t.deletions),
			n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
		(t.child = r),
		(t.memoizedState = null),
		r
	);
}
function zc(e, t) {
	return (
		(t = Al({ mode: "visible", children: t }, e.mode, 0, null)),
		(t.return = e),
		(e.child = t)
	);
}
function cs(e, t, n, r) {
	return (
		r !== null && Pc(r),
		xo(t, e.child, null, n),
		(e = zc(t, t.pendingProps.children)),
		(e.flags |= 2),
		(t.memoizedState = null),
		e
	);
}
function E1(e, t, n, r, o, i, s) {
	if (n)
		return t.flags & 256
			? ((t.flags &= -257), (r = Pa(Error(I(422)))), cs(e, t, s, r))
			: t.memoizedState !== null
				? ((t.child = e.child), (t.flags |= 128), null)
				: ((i = r.fallback),
					(o = t.mode),
					(r = Al({ mode: "visible", children: r.children }, o, 0, null)),
					(i = Sr(i, o, s, null)),
					(i.flags |= 2),
					(r.return = t),
					(i.return = t),
					(r.sibling = i),
					(t.child = r),
					t.mode & 1 && xo(t, e.child, null, s),
					(t.child.memoizedState = ku(s)),
					(t.memoizedState = Cu),
					i);
	if (!(t.mode & 1)) return cs(e, t, s, null);
	if (o.data === "$!") {
		if (((r = o.nextSibling && o.nextSibling.dataset), r)) var l = r.dgst;
		return (
			(r = l),
			(i = Error(I(419))),
			(r = Pa(i, r, void 0)),
			cs(e, t, s, r)
		);
	}
	if (((l = (s & e.childLanes) !== 0), qe || l)) {
		if (((r = Ne), r !== null)) {
			switch (s & -s) {
				case 4:
					o = 2;
					break;
				case 16:
					o = 8;
					break;
				case 64:
				case 128:
				case 256:
				case 512:
				case 1024:
				case 2048:
				case 4096:
				case 8192:
				case 16384:
				case 32768:
				case 65536:
				case 131072:
				case 262144:
				case 524288:
				case 1048576:
				case 2097152:
				case 4194304:
				case 8388608:
				case 16777216:
				case 33554432:
				case 67108864:
					o = 32;
					break;
				case 536870912:
					o = 268435456;
					break;
				default:
					o = 0;
			}
			((o = o & (r.suspendedLanes | s) ? 0 : o),
				o !== 0 &&
					o !== i.retryLane &&
					((i.retryLane = o), mn(e, o), jt(r, e, o, -1)));
		}
		return (Qc(), (r = Pa(Error(I(421)))), cs(e, t, s, r));
	}
	return o.data === "$?"
		? ((t.flags |= 128),
			(t.child = e.child),
			(t = $1.bind(null, e)),
			(o._reactRetry = t),
			null)
		: ((e = i.treeContext),
			(lt = Vn(o.nextSibling)),
			(at = t),
			(he = !0),
			(Mt = null),
			e !== null &&
				((gt[vt++] = cn),
				(gt[vt++] = dn),
				(gt[vt++] = kr),
				(cn = e.id),
				(dn = e.overflow),
				(kr = t)),
			(t = zc(t, r.children)),
			(t.flags |= 4096),
			t);
}
function Tf(e, t, n) {
	e.lanes |= t;
	var r = e.alternate;
	(r !== null && (r.lanes |= t), vu(e.return, t, n));
}
function Ta(e, t, n, r, o) {
	var i = e.memoizedState;
	i === null
		? (e.memoizedState = {
				isBackwards: t,
				rendering: null,
				renderingStartTime: 0,
				last: r,
				tail: n,
				tailMode: o,
			})
		: ((i.isBackwards = t),
			(i.rendering = null),
			(i.renderingStartTime = 0),
			(i.last = r),
			(i.tail = n),
			(i.tailMode = o));
}
function zm(e, t, n) {
	var r = t.pendingProps,
		o = r.revealOrder,
		i = r.tail;
	if ((Ue(e, t, r.children, n), (r = me.current), r & 2))
		((r = (r & 1) | 2), (t.flags |= 128));
	else {
		if (e !== null && e.flags & 128)
			e: for (e = t.child; e !== null; ) {
				if (e.tag === 13) e.memoizedState !== null && Tf(e, n, t);
				else if (e.tag === 19) Tf(e, n, t);
				else if (e.child !== null) {
					((e.child.return = e), (e = e.child));
					continue;
				}
				if (e === t) break e;
				for (; e.sibling === null; ) {
					if (e.return === null || e.return === t) break e;
					e = e.return;
				}
				((e.sibling.return = e.return), (e = e.sibling));
			}
		r &= 1;
	}
	if ((le(me, r), !(t.mode & 1))) t.memoizedState = null;
	else
		switch (o) {
			case "forwards":
				for (n = t.child, o = null; n !== null; )
					((e = n.alternate),
						e !== null && tl(e) === null && (o = n),
						(n = n.sibling));
				((n = o),
					n === null
						? ((o = t.child), (t.child = null))
						: ((o = n.sibling), (n.sibling = null)),
					Ta(t, !1, o, n, i));
				break;
			case "backwards":
				for (n = null, o = t.child, t.child = null; o !== null; ) {
					if (((e = o.alternate), e !== null && tl(e) === null)) {
						t.child = o;
						break;
					}
					((e = o.sibling), (o.sibling = n), (n = o), (o = e));
				}
				Ta(t, !0, n, null, i);
				break;
			case "together":
				Ta(t, !1, null, null, void 0);
				break;
			default:
				t.memoizedState = null;
		}
	return t.child;
}
function Ts(e, t) {
	!(t.mode & 1) &&
		e !== null &&
		((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function gn(e, t, n) {
	if (
		(e !== null && (t.dependencies = e.dependencies),
		(Pr |= t.lanes),
		!(n & t.childLanes))
	)
		return null;
	if (e !== null && t.child !== e.child) throw Error(I(153));
	if (t.child !== null) {
		for (
			e = t.child, n = Gn(e, e.pendingProps), t.child = n, n.return = t;
			e.sibling !== null;
		)
			((e = e.sibling),
				(n = n.sibling = Gn(e, e.pendingProps)),
				(n.return = t));
		n.sibling = null;
	}
	return t.child;
}
function C1(e, t, n) {
	switch (t.tag) {
		case 3:
			(jm(t), wo());
			break;
		case 5:
			fm(t);
			break;
		case 1:
			et(t.type) && Ys(t);
			break;
		case 4:
			_c(t, t.stateNode.containerInfo);
			break;
		case 10:
			var r = t.type._context,
				o = t.memoizedProps.value;
			(le(Zs, r._currentValue), (r._currentValue = o));
			break;
		case 13:
			if (((r = t.memoizedState), r !== null))
				return r.dehydrated !== null
					? (le(me, me.current & 1), (t.flags |= 128), null)
					: n & t.child.childLanes
						? Fm(e, t, n)
						: (le(me, me.current & 1),
							(e = gn(e, t, n)),
							e !== null ? e.sibling : null);
			le(me, me.current & 1);
			break;
		case 19:
			if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
				if (r) return zm(e, t, n);
				t.flags |= 128;
			}
			if (
				((o = t.memoizedState),
				o !== null &&
					((o.rendering = null), (o.tail = null), (o.lastEffect = null)),
				le(me, me.current),
				r)
			)
				break;
			return null;
		case 22:
		case 23:
			return ((t.lanes = 0), Mm(e, t, n));
	}
	return gn(e, t, n);
}
var Bm, bu, Um, Wm;
Bm = function (e, t) {
	for (var n = t.child; n !== null; ) {
		if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
		else if (n.tag !== 4 && n.child !== null) {
			((n.child.return = n), (n = n.child));
			continue;
		}
		if (n === t) break;
		for (; n.sibling === null; ) {
			if (n.return === null || n.return === t) return;
			n = n.return;
		}
		((n.sibling.return = n.return), (n = n.sibling));
	}
};
bu = function () {};
Um = function (e, t, n, r) {
	var o = e.memoizedProps;
	if (o !== r) {
		((e = t.stateNode), fr(Zt.current));
		var i = null;
		switch (n) {
			case "input":
				((o = Ka(e, o)), (r = Ka(e, r)), (i = []));
				break;
			case "select":
				((o = ve({}, o, { value: void 0 })),
					(r = ve({}, r, { value: void 0 })),
					(i = []));
				break;
			case "textarea":
				((o = Xa(e, o)), (r = Xa(e, r)), (i = []));
				break;
			default:
				typeof o.onClick != "function" &&
					typeof r.onClick == "function" &&
					(e.onclick = Ks);
		}
		Za(n, r);
		var s;
		n = null;
		for (u in o)
			if (!r.hasOwnProperty(u) && o.hasOwnProperty(u) && o[u] != null)
				if (u === "style") {
					var l = o[u];
					for (s in l) l.hasOwnProperty(s) && (n || (n = {}), (n[s] = ""));
				} else
					u !== "dangerouslySetInnerHTML" &&
						u !== "children" &&
						u !== "suppressContentEditableWarning" &&
						u !== "suppressHydrationWarning" &&
						u !== "autoFocus" &&
						(pi.hasOwnProperty(u)
							? i || (i = [])
							: (i = i || []).push(u, null));
		for (u in r) {
			var a = r[u];
			if (
				((l = o != null ? o[u] : void 0),
				r.hasOwnProperty(u) && a !== l && (a != null || l != null))
			)
				if (u === "style")
					if (l) {
						for (s in l)
							!l.hasOwnProperty(s) ||
								(a && a.hasOwnProperty(s)) ||
								(n || (n = {}), (n[s] = ""));
						for (s in a)
							a.hasOwnProperty(s) &&
								l[s] !== a[s] &&
								(n || (n = {}), (n[s] = a[s]));
					} else (n || (i || (i = []), i.push(u, n)), (n = a));
				else
					u === "dangerouslySetInnerHTML"
						? ((a = a ? a.__html : void 0),
							(l = l ? l.__html : void 0),
							a != null && l !== a && (i = i || []).push(u, a))
						: u === "children"
							? (typeof a != "string" && typeof a != "number") ||
								(i = i || []).push(u, "" + a)
							: u !== "suppressContentEditableWarning" &&
								u !== "suppressHydrationWarning" &&
								(pi.hasOwnProperty(u)
									? (a != null && u === "onScroll" && ue("scroll", e),
										i || l === a || (i = []))
									: (i = i || []).push(u, a));
		}
		n && (i = i || []).push("style", n);
		var u = i;
		(t.updateQueue = u) && (t.flags |= 4);
	}
};
Wm = function (e, t, n, r) {
	n !== r && (t.flags |= 4);
};
function Ho(e, t) {
	if (!he)
		switch (e.tailMode) {
			case "hidden":
				t = e.tail;
				for (var n = null; t !== null; )
					(t.alternate !== null && (n = t), (t = t.sibling));
				n === null ? (e.tail = null) : (n.sibling = null);
				break;
			case "collapsed":
				n = e.tail;
				for (var r = null; n !== null; )
					(n.alternate !== null && (r = n), (n = n.sibling));
				r === null
					? t || e.tail === null
						? (e.tail = null)
						: (e.tail.sibling = null)
					: (r.sibling = null);
		}
}
function Me(e) {
	var t = e.alternate !== null && e.alternate.child === e.child,
		n = 0,
		r = 0;
	if (t)
		for (var o = e.child; o !== null; )
			((n |= o.lanes | o.childLanes),
				(r |= o.subtreeFlags & 14680064),
				(r |= o.flags & 14680064),
				(o.return = e),
				(o = o.sibling));
	else
		for (o = e.child; o !== null; )
			((n |= o.lanes | o.childLanes),
				(r |= o.subtreeFlags),
				(r |= o.flags),
				(o.return = e),
				(o = o.sibling));
	return ((e.subtreeFlags |= r), (e.childLanes = n), t);
}
function k1(e, t, n) {
	var r = t.pendingProps;
	switch ((bc(t), t.tag)) {
		case 2:
		case 16:
		case 15:
		case 0:
		case 11:
		case 7:
		case 8:
		case 12:
		case 9:
		case 14:
			return (Me(t), null);
		case 1:
			return (et(t.type) && Gs(), Me(t), null);
		case 3:
			return (
				(r = t.stateNode),
				So(),
				de(Je),
				de(Fe),
				Lc(),
				r.pendingContext &&
					((r.context = r.pendingContext), (r.pendingContext = null)),
				(e === null || e.child === null) &&
					(as(t)
						? (t.flags |= 4)
						: e === null ||
							(e.memoizedState.isDehydrated && !(t.flags & 256)) ||
							((t.flags |= 1024), Mt !== null && (Iu(Mt), (Mt = null)))),
				bu(e, t),
				Me(t),
				null
			);
		case 5:
			Ic(t);
			var o = fr(bi.current);
			if (((n = t.type), e !== null && t.stateNode != null))
				(Um(e, t, n, r, o),
					e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152)));
			else {
				if (!r) {
					if (t.stateNode === null) throw Error(I(166));
					return (Me(t), null);
				}
				if (((e = fr(Zt.current)), as(t))) {
					((r = t.stateNode), (n = t.type));
					var i = t.memoizedProps;
					switch (((r[Yt] = t), (r[Ci] = i), (e = (t.mode & 1) !== 0), n)) {
						case "dialog":
							(ue("cancel", r), ue("close", r));
							break;
						case "iframe":
						case "object":
						case "embed":
							ue("load", r);
							break;
						case "video":
						case "audio":
							for (o = 0; o < Zo.length; o++) ue(Zo[o], r);
							break;
						case "source":
							ue("error", r);
							break;
						case "img":
						case "image":
						case "link":
							(ue("error", r), ue("load", r));
							break;
						case "details":
							ue("toggle", r);
							break;
						case "input":
							($d(r, i), ue("invalid", r));
							break;
						case "select":
							((r._wrapperState = { wasMultiple: !!i.multiple }),
								ue("invalid", r));
							break;
						case "textarea":
							(Dd(r, i), ue("invalid", r));
					}
					(Za(n, i), (o = null));
					for (var s in i)
						if (i.hasOwnProperty(s)) {
							var l = i[s];
							s === "children"
								? typeof l == "string"
									? r.textContent !== l &&
										(i.suppressHydrationWarning !== !0 &&
											ls(r.textContent, l, e),
										(o = ["children", l]))
									: typeof l == "number" &&
										r.textContent !== "" + l &&
										(i.suppressHydrationWarning !== !0 &&
											ls(r.textContent, l, e),
										(o = ["children", "" + l]))
								: pi.hasOwnProperty(s) &&
									l != null &&
									s === "onScroll" &&
									ue("scroll", r);
						}
					switch (n) {
						case "input":
							(Ji(r), Md(r, i, !0));
							break;
						case "textarea":
							(Ji(r), jd(r));
							break;
						case "select":
						case "option":
							break;
						default:
							typeof i.onClick == "function" && (r.onclick = Ks);
					}
					((r = o), (t.updateQueue = r), r !== null && (t.flags |= 4));
				} else {
					((s = o.nodeType === 9 ? o : o.ownerDocument),
						e === "http://www.w3.org/1999/xhtml" && (e = vh(n)),
						e === "http://www.w3.org/1999/xhtml"
							? n === "script"
								? ((e = s.createElement("div")),
									(e.innerHTML = "<script><\/script>"),
									(e = e.removeChild(e.firstChild)))
								: typeof r.is == "string"
									? (e = s.createElement(n, { is: r.is }))
									: ((e = s.createElement(n)),
										n === "select" &&
											((s = e),
											r.multiple
												? (s.multiple = !0)
												: r.size && (s.size = r.size)))
							: (e = s.createElementNS(e, n)),
						(e[Yt] = t),
						(e[Ci] = r),
						Bm(e, t, !1, !1),
						(t.stateNode = e));
					e: {
						switch (((s = Ja(n, r)), n)) {
							case "dialog":
								(ue("cancel", e), ue("close", e), (o = r));
								break;
							case "iframe":
							case "object":
							case "embed":
								(ue("load", e), (o = r));
								break;
							case "video":
							case "audio":
								for (o = 0; o < Zo.length; o++) ue(Zo[o], e);
								o = r;
								break;
							case "source":
								(ue("error", e), (o = r));
								break;
							case "img":
							case "image":
							case "link":
								(ue("error", e), ue("load", e), (o = r));
								break;
							case "details":
								(ue("toggle", e), (o = r));
								break;
							case "input":
								($d(e, r), (o = Ka(e, r)), ue("invalid", e));
								break;
							case "option":
								o = r;
								break;
							case "select":
								((e._wrapperState = { wasMultiple: !!r.multiple }),
									(o = ve({}, r, { value: void 0 })),
									ue("invalid", e));
								break;
							case "textarea":
								(Dd(e, r), (o = Xa(e, r)), ue("invalid", e));
								break;
							default:
								o = r;
						}
						(Za(n, o), (l = o));
						for (i in l)
							if (l.hasOwnProperty(i)) {
								var a = l[i];
								i === "style"
									? xh(e, a)
									: i === "dangerouslySetInnerHTML"
										? ((a = a ? a.__html : void 0), a != null && yh(e, a))
										: i === "children"
											? typeof a == "string"
												? (n !== "textarea" || a !== "") && hi(e, a)
												: typeof a == "number" && hi(e, "" + a)
											: i !== "suppressContentEditableWarning" &&
												i !== "suppressHydrationWarning" &&
												i !== "autoFocus" &&
												(pi.hasOwnProperty(i)
													? a != null && i === "onScroll" && ue("scroll", e)
													: a != null && cc(e, i, a, s));
							}
						switch (n) {
							case "input":
								(Ji(e), Md(e, r, !1));
								break;
							case "textarea":
								(Ji(e), jd(e));
								break;
							case "option":
								r.value != null && e.setAttribute("value", "" + Yn(r.value));
								break;
							case "select":
								((e.multiple = !!r.multiple),
									(i = r.value),
									i != null
										? Jr(e, !!r.multiple, i, !1)
										: r.defaultValue != null &&
											Jr(e, !!r.multiple, r.defaultValue, !0));
								break;
							default:
								typeof o.onClick == "function" && (e.onclick = Ks);
						}
						switch (n) {
							case "button":
							case "input":
							case "select":
							case "textarea":
								r = !!r.autoFocus;
								break e;
							case "img":
								r = !0;
								break e;
							default:
								r = !1;
						}
					}
					r && (t.flags |= 4);
				}
				t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
			}
			return (Me(t), null);
		case 6:
			if (e && t.stateNode != null) Wm(e, t, e.memoizedProps, r);
			else {
				if (typeof r != "string" && t.stateNode === null) throw Error(I(166));
				if (((n = fr(bi.current)), fr(Zt.current), as(t))) {
					if (
						((r = t.stateNode),
						(n = t.memoizedProps),
						(r[Yt] = t),
						(i = r.nodeValue !== n) && ((e = at), e !== null))
					)
						switch (e.tag) {
							case 3:
								ls(r.nodeValue, n, (e.mode & 1) !== 0);
								break;
							case 5:
								e.memoizedProps.suppressHydrationWarning !== !0 &&
									ls(r.nodeValue, n, (e.mode & 1) !== 0);
						}
					i && (t.flags |= 4);
				} else
					((r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
						(r[Yt] = t),
						(t.stateNode = r));
			}
			return (Me(t), null);
		case 13:
			if (
				(de(me),
				(r = t.memoizedState),
				e === null ||
					(e.memoizedState !== null && e.memoizedState.dehydrated !== null))
			) {
				if (he && lt !== null && t.mode & 1 && !(t.flags & 128))
					(lm(), wo(), (t.flags |= 98560), (i = !1));
				else if (((i = as(t)), r !== null && r.dehydrated !== null)) {
					if (e === null) {
						if (!i) throw Error(I(318));
						if (
							((i = t.memoizedState),
							(i = i !== null ? i.dehydrated : null),
							!i)
						)
							throw Error(I(317));
						i[Yt] = t;
					} else
						(wo(),
							!(t.flags & 128) && (t.memoizedState = null),
							(t.flags |= 4));
					(Me(t), (i = !1));
				} else (Mt !== null && (Iu(Mt), (Mt = null)), (i = !0));
				if (!i) return t.flags & 65536 ? t : null;
			}
			return t.flags & 128
				? ((t.lanes = n), t)
				: ((r = r !== null),
					r !== (e !== null && e.memoizedState !== null) &&
						r &&
						((t.child.flags |= 8192),
						t.mode & 1 &&
							(e === null || me.current & 1 ? Te === 0 && (Te = 3) : Qc())),
					t.updateQueue !== null && (t.flags |= 4),
					Me(t),
					null);
		case 4:
			return (
				So(),
				bu(e, t),
				e === null && Si(t.stateNode.containerInfo),
				Me(t),
				null
			);
		case 10:
			return (Nc(t.type._context), Me(t), null);
		case 17:
			return (et(t.type) && Gs(), Me(t), null);
		case 19:
			if ((de(me), (i = t.memoizedState), i === null)) return (Me(t), null);
			if (((r = (t.flags & 128) !== 0), (s = i.rendering), s === null))
				if (r) Ho(i, !1);
				else {
					if (Te !== 0 || (e !== null && e.flags & 128))
						for (e = t.child; e !== null; ) {
							if (((s = tl(e)), s !== null)) {
								for (
									t.flags |= 128,
										Ho(i, !1),
										r = s.updateQueue,
										r !== null && ((t.updateQueue = r), (t.flags |= 4)),
										t.subtreeFlags = 0,
										r = n,
										n = t.child;
									n !== null;
								)
									((i = n),
										(e = r),
										(i.flags &= 14680066),
										(s = i.alternate),
										s === null
											? ((i.childLanes = 0),
												(i.lanes = e),
												(i.child = null),
												(i.subtreeFlags = 0),
												(i.memoizedProps = null),
												(i.memoizedState = null),
												(i.updateQueue = null),
												(i.dependencies = null),
												(i.stateNode = null))
											: ((i.childLanes = s.childLanes),
												(i.lanes = s.lanes),
												(i.child = s.child),
												(i.subtreeFlags = 0),
												(i.deletions = null),
												(i.memoizedProps = s.memoizedProps),
												(i.memoizedState = s.memoizedState),
												(i.updateQueue = s.updateQueue),
												(i.type = s.type),
												(e = s.dependencies),
												(i.dependencies =
													e === null
														? null
														: {
																lanes: e.lanes,
																firstContext: e.firstContext,
															})),
										(n = n.sibling));
								return (le(me, (me.current & 1) | 2), t.child);
							}
							e = e.sibling;
						}
					i.tail !== null &&
						Se() > Co &&
						((t.flags |= 128), (r = !0), Ho(i, !1), (t.lanes = 4194304));
				}
			else {
				if (!r)
					if (((e = tl(s)), e !== null)) {
						if (
							((t.flags |= 128),
							(r = !0),
							(n = e.updateQueue),
							n !== null && ((t.updateQueue = n), (t.flags |= 4)),
							Ho(i, !0),
							i.tail === null && i.tailMode === "hidden" && !s.alternate && !he)
						)
							return (Me(t), null);
					} else
						2 * Se() - i.renderingStartTime > Co &&
							n !== 1073741824 &&
							((t.flags |= 128), (r = !0), Ho(i, !1), (t.lanes = 4194304));
				i.isBackwards
					? ((s.sibling = t.child), (t.child = s))
					: ((n = i.last),
						n !== null ? (n.sibling = s) : (t.child = s),
						(i.last = s));
			}
			return i.tail !== null
				? ((t = i.tail),
					(i.rendering = t),
					(i.tail = t.sibling),
					(i.renderingStartTime = Se()),
					(t.sibling = null),
					(n = me.current),
					le(me, r ? (n & 1) | 2 : n & 1),
					t)
				: (Me(t), null);
		case 22:
		case 23:
			return (
				Hc(),
				(r = t.memoizedState !== null),
				e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
				r && t.mode & 1
					? it & 1073741824 && (Me(t), t.subtreeFlags & 6 && (t.flags |= 8192))
					: Me(t),
				null
			);
		case 24:
			return null;
		case 25:
			return null;
	}
	throw Error(I(156, t.tag));
}
function b1(e, t) {
	switch ((bc(t), t.tag)) {
		case 1:
			return (
				et(t.type) && Gs(),
				(e = t.flags),
				e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
			);
		case 3:
			return (
				So(),
				de(Je),
				de(Fe),
				Lc(),
				(e = t.flags),
				e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
			);
		case 5:
			return (Ic(t), null);
		case 13:
			if (
				(de(me), (e = t.memoizedState), e !== null && e.dehydrated !== null)
			) {
				if (t.alternate === null) throw Error(I(340));
				wo();
			}
			return (
				(e = t.flags),
				e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
			);
		case 19:
			return (de(me), null);
		case 4:
			return (So(), null);
		case 10:
			return (Nc(t.type._context), null);
		case 22:
		case 23:
			return (Hc(), null);
		case 24:
			return null;
		default:
			return null;
	}
}
var ds = !1,
	je = !1,
	P1 = typeof WeakSet == "function" ? WeakSet : Set,
	z = null;
function qr(e, t) {
	var n = e.ref;
	if (n !== null)
		if (typeof n == "function")
			try {
				n(null);
			} catch (r) {
				we(e, t, r);
			}
		else n.current = null;
}
function Pu(e, t, n) {
	try {
		n();
	} catch (r) {
		we(e, t, r);
	}
}
var Rf = !1;
function T1(e, t) {
	if (((uu = Vs), (e = Gh()), Cc(e))) {
		if ("selectionStart" in e)
			var n = { start: e.selectionStart, end: e.selectionEnd };
		else
			e: {
				n = ((n = e.ownerDocument) && n.defaultView) || window;
				var r = n.getSelection && n.getSelection();
				if (r && r.rangeCount !== 0) {
					n = r.anchorNode;
					var o = r.anchorOffset,
						i = r.focusNode;
					r = r.focusOffset;
					try {
						(n.nodeType, i.nodeType);
					} catch {
						n = null;
						break e;
					}
					var s = 0,
						l = -1,
						a = -1,
						u = 0,
						c = 0,
						f = e,
						h = null;
					t: for (;;) {
						for (
							var d;
							f !== n || (o !== 0 && f.nodeType !== 3) || (l = s + o),
								f !== i || (r !== 0 && f.nodeType !== 3) || (a = s + r),
								f.nodeType === 3 && (s += f.nodeValue.length),
								(d = f.firstChild) !== null;
						)
							((h = f), (f = d));
						for (;;) {
							if (f === e) break t;
							if (
								(h === n && ++u === o && (l = s),
								h === i && ++c === r && (a = s),
								(d = f.nextSibling) !== null)
							)
								break;
							((f = h), (h = f.parentNode));
						}
						f = d;
					}
					n = l === -1 || a === -1 ? null : { start: l, end: a };
				} else n = null;
			}
		n = n || { start: 0, end: 0 };
	} else n = null;
	for (cu = { focusedElem: e, selectionRange: n }, Vs = !1, z = t; z !== null; )
		if (((t = z), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
			((e.return = t), (z = e));
		else
			for (; z !== null; ) {
				t = z;
				try {
					var w = t.alternate;
					if (t.flags & 1024)
						switch (t.tag) {
							case 0:
							case 11:
							case 15:
								break;
							case 1:
								if (w !== null) {
									var v = w.memoizedProps,
										y = w.memoizedState,
										m = t.stateNode,
										p = m.getSnapshotBeforeUpdate(
											t.elementType === t.type ? v : At(t.type, v),
											y,
										);
									m.__reactInternalSnapshotBeforeUpdate = p;
								}
								break;
							case 3:
								var g = t.stateNode.containerInfo;
								g.nodeType === 1
									? (g.textContent = "")
									: g.nodeType === 9 &&
										g.documentElement &&
										g.removeChild(g.documentElement);
								break;
							case 5:
							case 6:
							case 4:
							case 17:
								break;
							default:
								throw Error(I(163));
						}
				} catch (x) {
					we(t, t.return, x);
				}
				if (((e = t.sibling), e !== null)) {
					((e.return = t.return), (z = e));
					break;
				}
				z = t.return;
			}
	return ((w = Rf), (Rf = !1), w);
}
function li(e, t, n) {
	var r = t.updateQueue;
	if (((r = r !== null ? r.lastEffect : null), r !== null)) {
		var o = (r = r.next);
		do {
			if ((o.tag & e) === e) {
				var i = o.destroy;
				((o.destroy = void 0), i !== void 0 && Pu(t, n, i));
			}
			o = o.next;
		} while (o !== r);
	}
}
function Rl(e, t) {
	if (
		((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)
	) {
		var n = (t = t.next);
		do {
			if ((n.tag & e) === e) {
				var r = n.create;
				n.destroy = r();
			}
			n = n.next;
		} while (n !== t);
	}
}
function Tu(e) {
	var t = e.ref;
	if (t !== null) {
		var n = e.stateNode;
		switch (e.tag) {
			case 5:
				e = n;
				break;
			default:
				e = n;
		}
		typeof t == "function" ? t(e) : (t.current = e);
	}
}
function Vm(e) {
	var t = e.alternate;
	(t !== null && ((e.alternate = null), Vm(t)),
		(e.child = null),
		(e.deletions = null),
		(e.sibling = null),
		e.tag === 5 &&
			((t = e.stateNode),
			t !== null &&
				(delete t[Yt], delete t[Ci], delete t[pu], delete t[u1], delete t[c1])),
		(e.stateNode = null),
		(e.return = null),
		(e.dependencies = null),
		(e.memoizedProps = null),
		(e.memoizedState = null),
		(e.pendingProps = null),
		(e.stateNode = null),
		(e.updateQueue = null));
}
function Hm(e) {
	return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function Nf(e) {
	e: for (;;) {
		for (; e.sibling === null; ) {
			if (e.return === null || Hm(e.return)) return null;
			e = e.return;
		}
		for (
			e.sibling.return = e.return, e = e.sibling;
			e.tag !== 5 && e.tag !== 6 && e.tag !== 18;
		) {
			if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
			((e.child.return = e), (e = e.child));
		}
		if (!(e.flags & 2)) return e.stateNode;
	}
}
function Ru(e, t, n) {
	var r = e.tag;
	if (r === 5 || r === 6)
		((e = e.stateNode),
			t
				? n.nodeType === 8
					? n.parentNode.insertBefore(e, t)
					: n.insertBefore(e, t)
				: (n.nodeType === 8
						? ((t = n.parentNode), t.insertBefore(e, n))
						: ((t = n), t.appendChild(e)),
					(n = n._reactRootContainer),
					n != null || t.onclick !== null || (t.onclick = Ks)));
	else if (r !== 4 && ((e = e.child), e !== null))
		for (Ru(e, t, n), e = e.sibling; e !== null; )
			(Ru(e, t, n), (e = e.sibling));
}
function Nu(e, t, n) {
	var r = e.tag;
	if (r === 5 || r === 6)
		((e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e));
	else if (r !== 4 && ((e = e.child), e !== null))
		for (Nu(e, t, n), e = e.sibling; e !== null; )
			(Nu(e, t, n), (e = e.sibling));
}
var Oe = null,
	Lt = !1;
function Cn(e, t, n) {
	for (n = n.child; n !== null; ) (Qm(e, t, n), (n = n.sibling));
}
function Qm(e, t, n) {
	if (qt && typeof qt.onCommitFiberUnmount == "function")
		try {
			qt.onCommitFiberUnmount(xl, n);
		} catch {}
	switch (n.tag) {
		case 5:
			je || qr(n, t);
		case 6:
			var r = Oe,
				o = Lt;
			((Oe = null),
				Cn(e, t, n),
				(Oe = r),
				(Lt = o),
				Oe !== null &&
					(Lt
						? ((e = Oe),
							(n = n.stateNode),
							e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
						: Oe.removeChild(n.stateNode)));
			break;
		case 18:
			Oe !== null &&
				(Lt
					? ((e = Oe),
						(n = n.stateNode),
						e.nodeType === 8
							? xa(e.parentNode, n)
							: e.nodeType === 1 && xa(e, n),
						yi(e))
					: xa(Oe, n.stateNode));
			break;
		case 4:
			((r = Oe),
				(o = Lt),
				(Oe = n.stateNode.containerInfo),
				(Lt = !0),
				Cn(e, t, n),
				(Oe = r),
				(Lt = o));
			break;
		case 0:
		case 11:
		case 14:
		case 15:
			if (
				!je &&
				((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
			) {
				o = r = r.next;
				do {
					var i = o,
						s = i.destroy;
					((i = i.tag),
						s !== void 0 && (i & 2 || i & 4) && Pu(n, t, s),
						(o = o.next));
				} while (o !== r);
			}
			Cn(e, t, n);
			break;
		case 1:
			if (
				!je &&
				(qr(n, t),
				(r = n.stateNode),
				typeof r.componentWillUnmount == "function")
			)
				try {
					((r.props = n.memoizedProps),
						(r.state = n.memoizedState),
						r.componentWillUnmount());
				} catch (l) {
					we(n, t, l);
				}
			Cn(e, t, n);
			break;
		case 21:
			Cn(e, t, n);
			break;
		case 22:
			n.mode & 1
				? ((je = (r = je) || n.memoizedState !== null), Cn(e, t, n), (je = r))
				: Cn(e, t, n);
			break;
		default:
			Cn(e, t, n);
	}
}
function Af(e) {
	var t = e.updateQueue;
	if (t !== null) {
		e.updateQueue = null;
		var n = e.stateNode;
		(n === null && (n = e.stateNode = new P1()),
			t.forEach(function (r) {
				var o = M1.bind(null, e, r);
				n.has(r) || (n.add(r), r.then(o, o));
			}));
	}
}
function Rt(e, t) {
	var n = t.deletions;
	if (n !== null)
		for (var r = 0; r < n.length; r++) {
			var o = n[r];
			try {
				var i = e,
					s = t,
					l = s;
				e: for (; l !== null; ) {
					switch (l.tag) {
						case 5:
							((Oe = l.stateNode), (Lt = !1));
							break e;
						case 3:
							((Oe = l.stateNode.containerInfo), (Lt = !0));
							break e;
						case 4:
							((Oe = l.stateNode.containerInfo), (Lt = !0));
							break e;
					}
					l = l.return;
				}
				if (Oe === null) throw Error(I(160));
				(Qm(i, s, o), (Oe = null), (Lt = !1));
				var a = o.alternate;
				(a !== null && (a.return = null), (o.return = null));
			} catch (u) {
				we(o, t, u);
			}
		}
	if (t.subtreeFlags & 12854)
		for (t = t.child; t !== null; ) (Km(t, e), (t = t.sibling));
}
function Km(e, t) {
	var n = e.alternate,
		r = e.flags;
	switch (e.tag) {
		case 0:
		case 11:
		case 14:
		case 15:
			if ((Rt(t, e), Vt(e), r & 4)) {
				try {
					(li(3, e, e.return), Rl(3, e));
				} catch (v) {
					we(e, e.return, v);
				}
				try {
					li(5, e, e.return);
				} catch (v) {
					we(e, e.return, v);
				}
			}
			break;
		case 1:
			(Rt(t, e), Vt(e), r & 512 && n !== null && qr(n, n.return));
			break;
		case 5:
			if (
				(Rt(t, e),
				Vt(e),
				r & 512 && n !== null && qr(n, n.return),
				e.flags & 32)
			) {
				var o = e.stateNode;
				try {
					hi(o, "");
				} catch (v) {
					we(e, e.return, v);
				}
			}
			if (r & 4 && ((o = e.stateNode), o != null)) {
				var i = e.memoizedProps,
					s = n !== null ? n.memoizedProps : i,
					l = e.type,
					a = e.updateQueue;
				if (((e.updateQueue = null), a !== null))
					try {
						(l === "input" && i.type === "radio" && i.name != null && mh(o, i),
							Ja(l, s));
						var u = Ja(l, i);
						for (s = 0; s < a.length; s += 2) {
							var c = a[s],
								f = a[s + 1];
							c === "style"
								? xh(o, f)
								: c === "dangerouslySetInnerHTML"
									? yh(o, f)
									: c === "children"
										? hi(o, f)
										: cc(o, c, f, u);
						}
						switch (l) {
							case "input":
								Ga(o, i);
								break;
							case "textarea":
								gh(o, i);
								break;
							case "select":
								var h = o._wrapperState.wasMultiple;
								o._wrapperState.wasMultiple = !!i.multiple;
								var d = i.value;
								d != null
									? Jr(o, !!i.multiple, d, !1)
									: h !== !!i.multiple &&
										(i.defaultValue != null
											? Jr(o, !!i.multiple, i.defaultValue, !0)
											: Jr(o, !!i.multiple, i.multiple ? [] : "", !1));
						}
						o[Ci] = i;
					} catch (v) {
						we(e, e.return, v);
					}
			}
			break;
		case 6:
			if ((Rt(t, e), Vt(e), r & 4)) {
				if (e.stateNode === null) throw Error(I(162));
				((o = e.stateNode), (i = e.memoizedProps));
				try {
					o.nodeValue = i;
				} catch (v) {
					we(e, e.return, v);
				}
			}
			break;
		case 3:
			if (
				(Rt(t, e), Vt(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
			)
				try {
					yi(t.containerInfo);
				} catch (v) {
					we(e, e.return, v);
				}
			break;
		case 4:
			(Rt(t, e), Vt(e));
			break;
		case 13:
			(Rt(t, e),
				Vt(e),
				(o = e.child),
				o.flags & 8192 &&
					((i = o.memoizedState !== null),
					(o.stateNode.isHidden = i),
					!i ||
						(o.alternate !== null && o.alternate.memoizedState !== null) ||
						(Wc = Se())),
				r & 4 && Af(e));
			break;
		case 22:
			if (
				((c = n !== null && n.memoizedState !== null),
				e.mode & 1 ? ((je = (u = je) || c), Rt(t, e), (je = u)) : Rt(t, e),
				Vt(e),
				r & 8192)
			) {
				if (
					((u = e.memoizedState !== null),
					(e.stateNode.isHidden = u) && !c && e.mode & 1)
				)
					for (z = e, c = e.child; c !== null; ) {
						for (f = z = c; z !== null; ) {
							switch (((h = z), (d = h.child), h.tag)) {
								case 0:
								case 11:
								case 14:
								case 15:
									li(4, h, h.return);
									break;
								case 1:
									qr(h, h.return);
									var w = h.stateNode;
									if (typeof w.componentWillUnmount == "function") {
										((r = h), (n = h.return));
										try {
											((t = r),
												(w.props = t.memoizedProps),
												(w.state = t.memoizedState),
												w.componentWillUnmount());
										} catch (v) {
											we(r, n, v);
										}
									}
									break;
								case 5:
									qr(h, h.return);
									break;
								case 22:
									if (h.memoizedState !== null) {
										_f(f);
										continue;
									}
							}
							d !== null ? ((d.return = h), (z = d)) : _f(f);
						}
						c = c.sibling;
					}
				e: for (c = null, f = e; ; ) {
					if (f.tag === 5) {
						if (c === null) {
							c = f;
							try {
								((o = f.stateNode),
									u
										? ((i = o.style),
											typeof i.setProperty == "function"
												? i.setProperty("display", "none", "important")
												: (i.display = "none"))
										: ((l = f.stateNode),
											(a = f.memoizedProps.style),
											(s =
												a != null && a.hasOwnProperty("display")
													? a.display
													: null),
											(l.style.display = wh("display", s))));
							} catch (v) {
								we(e, e.return, v);
							}
						}
					} else if (f.tag === 6) {
						if (c === null)
							try {
								f.stateNode.nodeValue = u ? "" : f.memoizedProps;
							} catch (v) {
								we(e, e.return, v);
							}
					} else if (
						((f.tag !== 22 && f.tag !== 23) ||
							f.memoizedState === null ||
							f === e) &&
						f.child !== null
					) {
						((f.child.return = f), (f = f.child));
						continue;
					}
					if (f === e) break e;
					for (; f.sibling === null; ) {
						if (f.return === null || f.return === e) break e;
						(c === f && (c = null), (f = f.return));
					}
					(c === f && (c = null),
						(f.sibling.return = f.return),
						(f = f.sibling));
				}
			}
			break;
		case 19:
			(Rt(t, e), Vt(e), r & 4 && Af(e));
			break;
		case 21:
			break;
		default:
			(Rt(t, e), Vt(e));
	}
}
function Vt(e) {
	var t = e.flags;
	if (t & 2) {
		try {
			e: {
				for (var n = e.return; n !== null; ) {
					if (Hm(n)) {
						var r = n;
						break e;
					}
					n = n.return;
				}
				throw Error(I(160));
			}
			switch (r.tag) {
				case 5:
					var o = r.stateNode;
					r.flags & 32 && (hi(o, ""), (r.flags &= -33));
					var i = Nf(e);
					Nu(e, i, o);
					break;
				case 3:
				case 4:
					var s = r.stateNode.containerInfo,
						l = Nf(e);
					Ru(e, l, s);
					break;
				default:
					throw Error(I(161));
			}
		} catch (a) {
			we(e, e.return, a);
		}
		e.flags &= -3;
	}
	t & 4096 && (e.flags &= -4097);
}
function R1(e, t, n) {
	((z = e), Gm(e));
}
function Gm(e, t, n) {
	for (var r = (e.mode & 1) !== 0; z !== null; ) {
		var o = z,
			i = o.child;
		if (o.tag === 22 && r) {
			var s = o.memoizedState !== null || ds;
			if (!s) {
				var l = o.alternate,
					a = (l !== null && l.memoizedState !== null) || je;
				l = ds;
				var u = je;
				if (((ds = s), (je = a) && !u))
					for (z = o; z !== null; )
						((s = z),
							(a = s.child),
							s.tag === 22 && s.memoizedState !== null
								? If(o)
								: a !== null
									? ((a.return = s), (z = a))
									: If(o));
				for (; i !== null; ) ((z = i), Gm(i), (i = i.sibling));
				((z = o), (ds = l), (je = u));
			}
			Of(e);
		} else
			o.subtreeFlags & 8772 && i !== null ? ((i.return = o), (z = i)) : Of(e);
	}
}
function Of(e) {
	for (; z !== null; ) {
		var t = z;
		if (t.flags & 8772) {
			var n = t.alternate;
			try {
				if (t.flags & 8772)
					switch (t.tag) {
						case 0:
						case 11:
						case 15:
							je || Rl(5, t);
							break;
						case 1:
							var r = t.stateNode;
							if (t.flags & 4 && !je)
								if (n === null) r.componentDidMount();
								else {
									var o =
										t.elementType === t.type
											? n.memoizedProps
											: At(t.type, n.memoizedProps);
									r.componentDidUpdate(
										o,
										n.memoizedState,
										r.__reactInternalSnapshotBeforeUpdate,
									);
								}
							var i = t.updateQueue;
							i !== null && mf(t, i, r);
							break;
						case 3:
							var s = t.updateQueue;
							if (s !== null) {
								if (((n = null), t.child !== null))
									switch (t.child.tag) {
										case 5:
											n = t.child.stateNode;
											break;
										case 1:
											n = t.child.stateNode;
									}
								mf(t, s, n);
							}
							break;
						case 5:
							var l = t.stateNode;
							if (n === null && t.flags & 4) {
								n = l;
								var a = t.memoizedProps;
								switch (t.type) {
									case "button":
									case "input":
									case "select":
									case "textarea":
										a.autoFocus && n.focus();
										break;
									case "img":
										a.src && (n.src = a.src);
								}
							}
							break;
						case 6:
							break;
						case 4:
							break;
						case 12:
							break;
						case 13:
							if (t.memoizedState === null) {
								var u = t.alternate;
								if (u !== null) {
									var c = u.memoizedState;
									if (c !== null) {
										var f = c.dehydrated;
										f !== null && yi(f);
									}
								}
							}
							break;
						case 19:
						case 17:
						case 21:
						case 22:
						case 23:
						case 25:
							break;
						default:
							throw Error(I(163));
					}
				je || (t.flags & 512 && Tu(t));
			} catch (h) {
				we(t, t.return, h);
			}
		}
		if (t === e) {
			z = null;
			break;
		}
		if (((n = t.sibling), n !== null)) {
			((n.return = t.return), (z = n));
			break;
		}
		z = t.return;
	}
}
function _f(e) {
	for (; z !== null; ) {
		var t = z;
		if (t === e) {
			z = null;
			break;
		}
		var n = t.sibling;
		if (n !== null) {
			((n.return = t.return), (z = n));
			break;
		}
		z = t.return;
	}
}
function If(e) {
	for (; z !== null; ) {
		var t = z;
		try {
			switch (t.tag) {
				case 0:
				case 11:
				case 15:
					var n = t.return;
					try {
						Rl(4, t);
					} catch (a) {
						we(t, n, a);
					}
					break;
				case 1:
					var r = t.stateNode;
					if (typeof r.componentDidMount == "function") {
						var o = t.return;
						try {
							r.componentDidMount();
						} catch (a) {
							we(t, o, a);
						}
					}
					var i = t.return;
					try {
						Tu(t);
					} catch (a) {
						we(t, i, a);
					}
					break;
				case 5:
					var s = t.return;
					try {
						Tu(t);
					} catch (a) {
						we(t, s, a);
					}
			}
		} catch (a) {
			we(t, t.return, a);
		}
		if (t === e) {
			z = null;
			break;
		}
		var l = t.sibling;
		if (l !== null) {
			((l.return = t.return), (z = l));
			break;
		}
		z = t.return;
	}
}
var N1 = Math.ceil,
	ol = wn.ReactCurrentDispatcher,
	Bc = wn.ReactCurrentOwner,
	wt = wn.ReactCurrentBatchConfig,
	te = 0,
	Ne = null,
	Ce = null,
	_e = 0,
	it = 0,
	Zr = nr(0),
	Te = 0,
	Ni = null,
	Pr = 0,
	Nl = 0,
	Uc = 0,
	ai = null,
	Xe = null,
	Wc = 0,
	Co = 1 / 0,
	on = null,
	il = !1,
	Au = null,
	Qn = null,
	fs = !1,
	jn = null,
	sl = 0,
	ui = 0,
	Ou = null,
	Rs = -1,
	Ns = 0;
function Ve() {
	return te & 6 ? Se() : Rs !== -1 ? Rs : (Rs = Se());
}
function Kn(e) {
	return e.mode & 1
		? te & 2 && _e !== 0
			? _e & -_e
			: f1.transition !== null
				? (Ns === 0 && (Ns = _h()), Ns)
				: ((e = oe),
					e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : Fh(e.type))),
					e)
		: 1;
}
function jt(e, t, n, r) {
	if (50 < ui) throw ((ui = 0), (Ou = null), Error(I(185)));
	(Fi(e, n, r),
		(!(te & 2) || e !== Ne) &&
			(e === Ne && (!(te & 2) && (Nl |= n), Te === 4 && On(e, _e)),
			tt(e, r),
			n === 1 && te === 0 && !(t.mode & 1) && ((Co = Se() + 500), bl && rr())));
}
function tt(e, t) {
	var n = e.callbackNode;
	f0(e, t);
	var r = Ws(e, e === Ne ? _e : 0);
	if (r === 0)
		(n !== null && Bd(n), (e.callbackNode = null), (e.callbackPriority = 0));
	else if (((t = r & -r), e.callbackPriority !== t)) {
		if ((n != null && Bd(n), t === 1))
			(e.tag === 0 ? d1(Lf.bind(null, e)) : om(Lf.bind(null, e)),
				l1(function () {
					!(te & 6) && rr();
				}),
				(n = null));
		else {
			switch (Ih(r)) {
				case 1:
					n = mc;
					break;
				case 4:
					n = Ah;
					break;
				case 16:
					n = Us;
					break;
				case 536870912:
					n = Oh;
					break;
				default:
					n = Us;
			}
			n = ng(n, Ym.bind(null, e));
		}
		((e.callbackPriority = t), (e.callbackNode = n));
	}
}
function Ym(e, t) {
	if (((Rs = -1), (Ns = 0), te & 6)) throw Error(I(327));
	var n = e.callbackNode;
	if (oo() && e.callbackNode !== n) return null;
	var r = Ws(e, e === Ne ? _e : 0);
	if (r === 0) return null;
	if (r & 30 || r & e.expiredLanes || t) t = ll(e, r);
	else {
		t = r;
		var o = te;
		te |= 2;
		var i = qm();
		(Ne !== e || _e !== t) && ((on = null), (Co = Se() + 500), xr(e, t));
		do
			try {
				_1();
				break;
			} catch (l) {
				Xm(e, l);
			}
		while (!0);
		(Rc(),
			(ol.current = i),
			(te = o),
			Ce !== null ? (t = 0) : ((Ne = null), (_e = 0), (t = Te)));
	}
	if (t !== 0) {
		if (
			(t === 2 && ((o = ou(e)), o !== 0 && ((r = o), (t = _u(e, o)))), t === 1)
		)
			throw ((n = Ni), xr(e, 0), On(e, r), tt(e, Se()), n);
		if (t === 6) On(e, r);
		else {
			if (
				((o = e.current.alternate),
				!(r & 30) &&
					!A1(o) &&
					((t = ll(e, r)),
					t === 2 && ((i = ou(e)), i !== 0 && ((r = i), (t = _u(e, i)))),
					t === 1))
			)
				throw ((n = Ni), xr(e, 0), On(e, r), tt(e, Se()), n);
			switch (((e.finishedWork = o), (e.finishedLanes = r), t)) {
				case 0:
				case 1:
					throw Error(I(345));
				case 2:
					lr(e, Xe, on);
					break;
				case 3:
					if (
						(On(e, r), (r & 130023424) === r && ((t = Wc + 500 - Se()), 10 < t))
					) {
						if (Ws(e, 0) !== 0) break;
						if (((o = e.suspendedLanes), (o & r) !== r)) {
							(Ve(), (e.pingedLanes |= e.suspendedLanes & o));
							break;
						}
						e.timeoutHandle = fu(lr.bind(null, e, Xe, on), t);
						break;
					}
					lr(e, Xe, on);
					break;
				case 4:
					if ((On(e, r), (r & 4194240) === r)) break;
					for (t = e.eventTimes, o = -1; 0 < r; ) {
						var s = 31 - Dt(r);
						((i = 1 << s), (s = t[s]), s > o && (o = s), (r &= ~i));
					}
					if (
						((r = o),
						(r = Se() - r),
						(r =
							(120 > r
								? 120
								: 480 > r
									? 480
									: 1080 > r
										? 1080
										: 1920 > r
											? 1920
											: 3e3 > r
												? 3e3
												: 4320 > r
													? 4320
													: 1960 * N1(r / 1960)) - r),
						10 < r)
					) {
						e.timeoutHandle = fu(lr.bind(null, e, Xe, on), r);
						break;
					}
					lr(e, Xe, on);
					break;
				case 5:
					lr(e, Xe, on);
					break;
				default:
					throw Error(I(329));
			}
		}
	}
	return (tt(e, Se()), e.callbackNode === n ? Ym.bind(null, e) : null);
}
function _u(e, t) {
	var n = ai;
	return (
		e.current.memoizedState.isDehydrated && (xr(e, t).flags |= 256),
		(e = ll(e, t)),
		e !== 2 && ((t = Xe), (Xe = n), t !== null && Iu(t)),
		e
	);
}
function Iu(e) {
	Xe === null ? (Xe = e) : Xe.push.apply(Xe, e);
}
function A1(e) {
	for (var t = e; ; ) {
		if (t.flags & 16384) {
			var n = t.updateQueue;
			if (n !== null && ((n = n.stores), n !== null))
				for (var r = 0; r < n.length; r++) {
					var o = n[r],
						i = o.getSnapshot;
					o = o.value;
					try {
						if (!zt(i(), o)) return !1;
					} catch {
						return !1;
					}
				}
		}
		if (((n = t.child), t.subtreeFlags & 16384 && n !== null))
			((n.return = t), (t = n));
		else {
			if (t === e) break;
			for (; t.sibling === null; ) {
				if (t.return === null || t.return === e) return !0;
				t = t.return;
			}
			((t.sibling.return = t.return), (t = t.sibling));
		}
	}
	return !0;
}
function On(e, t) {
	for (
		t &= ~Uc,
			t &= ~Nl,
			e.suspendedLanes |= t,
			e.pingedLanes &= ~t,
			e = e.expirationTimes;
		0 < t;
	) {
		var n = 31 - Dt(t),
			r = 1 << n;
		((e[n] = -1), (t &= ~r));
	}
}
function Lf(e) {
	if (te & 6) throw Error(I(327));
	oo();
	var t = Ws(e, 0);
	if (!(t & 1)) return (tt(e, Se()), null);
	var n = ll(e, t);
	if (e.tag !== 0 && n === 2) {
		var r = ou(e);
		r !== 0 && ((t = r), (n = _u(e, r)));
	}
	if (n === 1) throw ((n = Ni), xr(e, 0), On(e, t), tt(e, Se()), n);
	if (n === 6) throw Error(I(345));
	return (
		(e.finishedWork = e.current.alternate),
		(e.finishedLanes = t),
		lr(e, Xe, on),
		tt(e, Se()),
		null
	);
}
function Vc(e, t) {
	var n = te;
	te |= 1;
	try {
		return e(t);
	} finally {
		((te = n), te === 0 && ((Co = Se() + 500), bl && rr()));
	}
}
function Tr(e) {
	jn !== null && jn.tag === 0 && !(te & 6) && oo();
	var t = te;
	te |= 1;
	var n = wt.transition,
		r = oe;
	try {
		if (((wt.transition = null), (oe = 1), e)) return e();
	} finally {
		((oe = r), (wt.transition = n), (te = t), !(te & 6) && rr());
	}
}
function Hc() {
	((it = Zr.current), de(Zr));
}
function xr(e, t) {
	((e.finishedWork = null), (e.finishedLanes = 0));
	var n = e.timeoutHandle;
	if ((n !== -1 && ((e.timeoutHandle = -1), s1(n)), Ce !== null))
		for (n = Ce.return; n !== null; ) {
			var r = n;
			switch ((bc(r), r.tag)) {
				case 1:
					((r = r.type.childContextTypes), r != null && Gs());
					break;
				case 3:
					(So(), de(Je), de(Fe), Lc());
					break;
				case 5:
					Ic(r);
					break;
				case 4:
					So();
					break;
				case 13:
					de(me);
					break;
				case 19:
					de(me);
					break;
				case 10:
					Nc(r.type._context);
					break;
				case 22:
				case 23:
					Hc();
			}
			n = n.return;
		}
	if (
		((Ne = e),
		(Ce = e = Gn(e.current, null)),
		(_e = it = t),
		(Te = 0),
		(Ni = null),
		(Uc = Nl = Pr = 0),
		(Xe = ai = null),
		dr !== null)
	) {
		for (t = 0; t < dr.length; t++)
			if (((n = dr[t]), (r = n.interleaved), r !== null)) {
				n.interleaved = null;
				var o = r.next,
					i = n.pending;
				if (i !== null) {
					var s = i.next;
					((i.next = o), (r.next = s));
				}
				n.pending = r;
			}
		dr = null;
	}
	return e;
}
function Xm(e, t) {
	do {
		var n = Ce;
		try {
			if ((Rc(), (bs.current = rl), nl)) {
				for (var r = ge.memoizedState; r !== null; ) {
					var o = r.queue;
					(o !== null && (o.pending = null), (r = r.next));
				}
				nl = !1;
			}
			if (
				((br = 0),
				(Re = ke = ge = null),
				(si = !1),
				(Pi = 0),
				(Bc.current = null),
				n === null || n.return === null)
			) {
				((Te = 1), (Ni = t), (Ce = null));
				break;
			}
			e: {
				var i = e,
					s = n.return,
					l = n,
					a = t;
				if (
					((t = _e),
					(l.flags |= 32768),
					a !== null && typeof a == "object" && typeof a.then == "function")
				) {
					var u = a,
						c = l,
						f = c.tag;
					if (!(c.mode & 1) && (f === 0 || f === 11 || f === 15)) {
						var h = c.alternate;
						h
							? ((c.updateQueue = h.updateQueue),
								(c.memoizedState = h.memoizedState),
								(c.lanes = h.lanes))
							: ((c.updateQueue = null), (c.memoizedState = null));
					}
					var d = Sf(s);
					if (d !== null) {
						((d.flags &= -257),
							Ef(d, s, l, i, t),
							d.mode & 1 && xf(i, u, t),
							(t = d),
							(a = u));
						var w = t.updateQueue;
						if (w === null) {
							var v = new Set();
							(v.add(a), (t.updateQueue = v));
						} else w.add(a);
						break e;
					} else {
						if (!(t & 1)) {
							(xf(i, u, t), Qc());
							break e;
						}
						a = Error(I(426));
					}
				} else if (he && l.mode & 1) {
					var y = Sf(s);
					if (y !== null) {
						(!(y.flags & 65536) && (y.flags |= 256),
							Ef(y, s, l, i, t),
							Pc(Eo(a, l)));
						break e;
					}
				}
				((i = a = Eo(a, l)),
					Te !== 4 && (Te = 2),
					ai === null ? (ai = [i]) : ai.push(i),
					(i = s));
				do {
					switch (i.tag) {
						case 3:
							((i.flags |= 65536), (t &= -t), (i.lanes |= t));
							var m = Im(i, a, t);
							hf(i, m);
							break e;
						case 1:
							l = a;
							var p = i.type,
								g = i.stateNode;
							if (
								!(i.flags & 128) &&
								(typeof p.getDerivedStateFromError == "function" ||
									(g !== null &&
										typeof g.componentDidCatch == "function" &&
										(Qn === null || !Qn.has(g))))
							) {
								((i.flags |= 65536), (t &= -t), (i.lanes |= t));
								var x = Lm(i, l, t);
								hf(i, x);
								break e;
							}
					}
					i = i.return;
				} while (i !== null);
			}
			Jm(n);
		} catch (C) {
			((t = C), Ce === n && n !== null && (Ce = n = n.return));
			continue;
		}
		break;
	} while (!0);
}
function qm() {
	var e = ol.current;
	return ((ol.current = rl), e === null ? rl : e);
}
function Qc() {
	((Te === 0 || Te === 3 || Te === 2) && (Te = 4),
		Ne === null || (!(Pr & 268435455) && !(Nl & 268435455)) || On(Ne, _e));
}
function ll(e, t) {
	var n = te;
	te |= 2;
	var r = qm();
	(Ne !== e || _e !== t) && ((on = null), xr(e, t));
	do
		try {
			O1();
			break;
		} catch (o) {
			Xm(e, o);
		}
	while (!0);
	if ((Rc(), (te = n), (ol.current = r), Ce !== null)) throw Error(I(261));
	return ((Ne = null), (_e = 0), Te);
}
function O1() {
	for (; Ce !== null; ) Zm(Ce);
}
function _1() {
	for (; Ce !== null && !r0(); ) Zm(Ce);
}
function Zm(e) {
	var t = tg(e.alternate, e, it);
	((e.memoizedProps = e.pendingProps),
		t === null ? Jm(e) : (Ce = t),
		(Bc.current = null));
}
function Jm(e) {
	var t = e;
	do {
		var n = t.alternate;
		if (((e = t.return), t.flags & 32768)) {
			if (((n = b1(n, t)), n !== null)) {
				((n.flags &= 32767), (Ce = n));
				return;
			}
			if (e !== null)
				((e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null));
			else {
				((Te = 6), (Ce = null));
				return;
			}
		} else if (((n = k1(n, t, it)), n !== null)) {
			Ce = n;
			return;
		}
		if (((t = t.sibling), t !== null)) {
			Ce = t;
			return;
		}
		Ce = t = e;
	} while (t !== null);
	Te === 0 && (Te = 5);
}
function lr(e, t, n) {
	var r = oe,
		o = wt.transition;
	try {
		((wt.transition = null), (oe = 1), I1(e, t, n, r));
	} finally {
		((wt.transition = o), (oe = r));
	}
	return null;
}
function I1(e, t, n, r) {
	do oo();
	while (jn !== null);
	if (te & 6) throw Error(I(327));
	n = e.finishedWork;
	var o = e.finishedLanes;
	if (n === null) return null;
	if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
		throw Error(I(177));
	((e.callbackNode = null), (e.callbackPriority = 0));
	var i = n.lanes | n.childLanes;
	if (
		(p0(e, i),
		e === Ne && ((Ce = Ne = null), (_e = 0)),
		(!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
			fs ||
			((fs = !0),
			ng(Us, function () {
				return (oo(), null);
			})),
		(i = (n.flags & 15990) !== 0),
		n.subtreeFlags & 15990 || i)
	) {
		((i = wt.transition), (wt.transition = null));
		var s = oe;
		oe = 1;
		var l = te;
		((te |= 4),
			(Bc.current = null),
			T1(e, n),
			Km(n, e),
			J0(cu),
			(Vs = !!uu),
			(cu = uu = null),
			(e.current = n),
			R1(n),
			o0(),
			(te = l),
			(oe = s),
			(wt.transition = i));
	} else e.current = n;
	if (
		(fs && ((fs = !1), (jn = e), (sl = o)),
		(i = e.pendingLanes),
		i === 0 && (Qn = null),
		l0(n.stateNode),
		tt(e, Se()),
		t !== null)
	)
		for (r = e.onRecoverableError, n = 0; n < t.length; n++)
			((o = t[n]), r(o.value, { componentStack: o.stack, digest: o.digest }));
	if (il) throw ((il = !1), (e = Au), (Au = null), e);
	return (
		sl & 1 && e.tag !== 0 && oo(),
		(i = e.pendingLanes),
		i & 1 ? (e === Ou ? ui++ : ((ui = 0), (Ou = e))) : (ui = 0),
		rr(),
		null
	);
}
function oo() {
	if (jn !== null) {
		var e = Ih(sl),
			t = wt.transition,
			n = oe;
		try {
			if (((wt.transition = null), (oe = 16 > e ? 16 : e), jn === null))
				var r = !1;
			else {
				if (((e = jn), (jn = null), (sl = 0), te & 6)) throw Error(I(331));
				var o = te;
				for (te |= 4, z = e.current; z !== null; ) {
					var i = z,
						s = i.child;
					if (z.flags & 16) {
						var l = i.deletions;
						if (l !== null) {
							for (var a = 0; a < l.length; a++) {
								var u = l[a];
								for (z = u; z !== null; ) {
									var c = z;
									switch (c.tag) {
										case 0:
										case 11:
										case 15:
											li(8, c, i);
									}
									var f = c.child;
									if (f !== null) ((f.return = c), (z = f));
									else
										for (; z !== null; ) {
											c = z;
											var h = c.sibling,
												d = c.return;
											if ((Vm(c), c === u)) {
												z = null;
												break;
											}
											if (h !== null) {
												((h.return = d), (z = h));
												break;
											}
											z = d;
										}
								}
							}
							var w = i.alternate;
							if (w !== null) {
								var v = w.child;
								if (v !== null) {
									w.child = null;
									do {
										var y = v.sibling;
										((v.sibling = null), (v = y));
									} while (v !== null);
								}
							}
							z = i;
						}
					}
					if (i.subtreeFlags & 2064 && s !== null) ((s.return = i), (z = s));
					else
						e: for (; z !== null; ) {
							if (((i = z), i.flags & 2048))
								switch (i.tag) {
									case 0:
									case 11:
									case 15:
										li(9, i, i.return);
								}
							var m = i.sibling;
							if (m !== null) {
								((m.return = i.return), (z = m));
								break e;
							}
							z = i.return;
						}
				}
				var p = e.current;
				for (z = p; z !== null; ) {
					s = z;
					var g = s.child;
					if (s.subtreeFlags & 2064 && g !== null) ((g.return = s), (z = g));
					else
						e: for (s = p; z !== null; ) {
							if (((l = z), l.flags & 2048))
								try {
									switch (l.tag) {
										case 0:
										case 11:
										case 15:
											Rl(9, l);
									}
								} catch (C) {
									we(l, l.return, C);
								}
							if (l === s) {
								z = null;
								break e;
							}
							var x = l.sibling;
							if (x !== null) {
								((x.return = l.return), (z = x));
								break e;
							}
							z = l.return;
						}
				}
				if (
					((te = o), rr(), qt && typeof qt.onPostCommitFiberRoot == "function")
				)
					try {
						qt.onPostCommitFiberRoot(xl, e);
					} catch {}
				r = !0;
			}
			return r;
		} finally {
			((oe = n), (wt.transition = t));
		}
	}
	return !1;
}
function $f(e, t, n) {
	((t = Eo(n, t)),
		(t = Im(e, t, 1)),
		(e = Hn(e, t, 1)),
		(t = Ve()),
		e !== null && (Fi(e, 1, t), tt(e, t)));
}
function we(e, t, n) {
	if (e.tag === 3) $f(e, e, n);
	else
		for (; t !== null; ) {
			if (t.tag === 3) {
				$f(t, e, n);
				break;
			} else if (t.tag === 1) {
				var r = t.stateNode;
				if (
					typeof t.type.getDerivedStateFromError == "function" ||
					(typeof r.componentDidCatch == "function" &&
						(Qn === null || !Qn.has(r)))
				) {
					((e = Eo(n, e)),
						(e = Lm(t, e, 1)),
						(t = Hn(t, e, 1)),
						(e = Ve()),
						t !== null && (Fi(t, 1, e), tt(t, e)));
					break;
				}
			}
			t = t.return;
		}
}
function L1(e, t, n) {
	var r = e.pingCache;
	(r !== null && r.delete(t),
		(t = Ve()),
		(e.pingedLanes |= e.suspendedLanes & n),
		Ne === e &&
			(_e & n) === n &&
			(Te === 4 || (Te === 3 && (_e & 130023424) === _e && 500 > Se() - Wc)
				? xr(e, 0)
				: (Uc |= n)),
		tt(e, t));
}
function eg(e, t) {
	t === 0 &&
		(e.mode & 1
			? ((t = ns), (ns <<= 1), !(ns & 130023424) && (ns = 4194304))
			: (t = 1));
	var n = Ve();
	((e = mn(e, t)), e !== null && (Fi(e, t, n), tt(e, n)));
}
function $1(e) {
	var t = e.memoizedState,
		n = 0;
	(t !== null && (n = t.retryLane), eg(e, n));
}
function M1(e, t) {
	var n = 0;
	switch (e.tag) {
		case 13:
			var r = e.stateNode,
				o = e.memoizedState;
			o !== null && (n = o.retryLane);
			break;
		case 19:
			r = e.stateNode;
			break;
		default:
			throw Error(I(314));
	}
	(r !== null && r.delete(t), eg(e, n));
}
var tg;
tg = function (e, t, n) {
	if (e !== null)
		if (e.memoizedProps !== t.pendingProps || Je.current) qe = !0;
		else {
			if (!(e.lanes & n) && !(t.flags & 128)) return ((qe = !1), C1(e, t, n));
			qe = !!(e.flags & 131072);
		}
	else ((qe = !1), he && t.flags & 1048576 && im(t, qs, t.index));
	switch (((t.lanes = 0), t.tag)) {
		case 2:
			var r = t.type;
			(Ts(e, t), (e = t.pendingProps));
			var o = yo(t, Fe.current);
			(ro(t, n), (o = Mc(null, t, r, e, o, n)));
			var i = Dc();
			return (
				(t.flags |= 1),
				typeof o == "object" &&
				o !== null &&
				typeof o.render == "function" &&
				o.$$typeof === void 0
					? ((t.tag = 1),
						(t.memoizedState = null),
						(t.updateQueue = null),
						et(r) ? ((i = !0), Ys(t)) : (i = !1),
						(t.memoizedState =
							o.state !== null && o.state !== void 0 ? o.state : null),
						Oc(t),
						(o.updater = Tl),
						(t.stateNode = o),
						(o._reactInternals = t),
						wu(t, r, e, n),
						(t = Eu(null, t, r, !0, i, n)))
					: ((t.tag = 0), he && i && kc(t), Ue(null, t, o, n), (t = t.child)),
				t
			);
		case 16:
			r = t.elementType;
			e: {
				switch (
					(Ts(e, t),
					(e = t.pendingProps),
					(o = r._init),
					(r = o(r._payload)),
					(t.type = r),
					(o = t.tag = j1(r)),
					(e = At(r, e)),
					o)
				) {
					case 0:
						t = Su(null, t, r, e, n);
						break e;
					case 1:
						t = bf(null, t, r, e, n);
						break e;
					case 11:
						t = Cf(null, t, r, e, n);
						break e;
					case 14:
						t = kf(null, t, r, At(r.type, e), n);
						break e;
				}
				throw Error(I(306, r, ""));
			}
			return t;
		case 0:
			return (
				(r = t.type),
				(o = t.pendingProps),
				(o = t.elementType === r ? o : At(r, o)),
				Su(e, t, r, o, n)
			);
		case 1:
			return (
				(r = t.type),
				(o = t.pendingProps),
				(o = t.elementType === r ? o : At(r, o)),
				bf(e, t, r, o, n)
			);
		case 3:
			e: {
				if ((jm(t), e === null)) throw Error(I(387));
				((r = t.pendingProps),
					(i = t.memoizedState),
					(o = i.element),
					dm(e, t),
					el(t, r, null, n));
				var s = t.memoizedState;
				if (((r = s.element), i.isDehydrated))
					if (
						((i = {
							element: r,
							isDehydrated: !1,
							cache: s.cache,
							pendingSuspenseBoundaries: s.pendingSuspenseBoundaries,
							transitions: s.transitions,
						}),
						(t.updateQueue.baseState = i),
						(t.memoizedState = i),
						t.flags & 256)
					) {
						((o = Eo(Error(I(423)), t)), (t = Pf(e, t, r, n, o)));
						break e;
					} else if (r !== o) {
						((o = Eo(Error(I(424)), t)), (t = Pf(e, t, r, n, o)));
						break e;
					} else
						for (
							lt = Vn(t.stateNode.containerInfo.firstChild),
								at = t,
								he = !0,
								Mt = null,
								n = um(t, null, r, n),
								t.child = n;
							n;
						)
							((n.flags = (n.flags & -3) | 4096), (n = n.sibling));
				else {
					if ((wo(), r === o)) {
						t = gn(e, t, n);
						break e;
					}
					Ue(e, t, r, n);
				}
				t = t.child;
			}
			return t;
		case 5:
			return (
				fm(t),
				e === null && gu(t),
				(r = t.type),
				(o = t.pendingProps),
				(i = e !== null ? e.memoizedProps : null),
				(s = o.children),
				du(r, o) ? (s = null) : i !== null && du(r, i) && (t.flags |= 32),
				Dm(e, t),
				Ue(e, t, s, n),
				t.child
			);
		case 6:
			return (e === null && gu(t), null);
		case 13:
			return Fm(e, t, n);
		case 4:
			return (
				_c(t, t.stateNode.containerInfo),
				(r = t.pendingProps),
				e === null ? (t.child = xo(t, null, r, n)) : Ue(e, t, r, n),
				t.child
			);
		case 11:
			return (
				(r = t.type),
				(o = t.pendingProps),
				(o = t.elementType === r ? o : At(r, o)),
				Cf(e, t, r, o, n)
			);
		case 7:
			return (Ue(e, t, t.pendingProps, n), t.child);
		case 8:
			return (Ue(e, t, t.pendingProps.children, n), t.child);
		case 12:
			return (Ue(e, t, t.pendingProps.children, n), t.child);
		case 10:
			e: {
				if (
					((r = t.type._context),
					(o = t.pendingProps),
					(i = t.memoizedProps),
					(s = o.value),
					le(Zs, r._currentValue),
					(r._currentValue = s),
					i !== null)
				)
					if (zt(i.value, s)) {
						if (i.children === o.children && !Je.current) {
							t = gn(e, t, n);
							break e;
						}
					} else
						for (i = t.child, i !== null && (i.return = t); i !== null; ) {
							var l = i.dependencies;
							if (l !== null) {
								s = i.child;
								for (var a = l.firstContext; a !== null; ) {
									if (a.context === r) {
										if (i.tag === 1) {
											((a = fn(-1, n & -n)), (a.tag = 2));
											var u = i.updateQueue;
											if (u !== null) {
												u = u.shared;
												var c = u.pending;
												(c === null
													? (a.next = a)
													: ((a.next = c.next), (c.next = a)),
													(u.pending = a));
											}
										}
										((i.lanes |= n),
											(a = i.alternate),
											a !== null && (a.lanes |= n),
											vu(i.return, n, t),
											(l.lanes |= n));
										break;
									}
									a = a.next;
								}
							} else if (i.tag === 10) s = i.type === t.type ? null : i.child;
							else if (i.tag === 18) {
								if (((s = i.return), s === null)) throw Error(I(341));
								((s.lanes |= n),
									(l = s.alternate),
									l !== null && (l.lanes |= n),
									vu(s, n, t),
									(s = i.sibling));
							} else s = i.child;
							if (s !== null) s.return = i;
							else
								for (s = i; s !== null; ) {
									if (s === t) {
										s = null;
										break;
									}
									if (((i = s.sibling), i !== null)) {
										((i.return = s.return), (s = i));
										break;
									}
									s = s.return;
								}
							i = s;
						}
				(Ue(e, t, o.children, n), (t = t.child));
			}
			return t;
		case 9:
			return (
				(o = t.type),
				(r = t.pendingProps.children),
				ro(t, n),
				(o = xt(o)),
				(r = r(o)),
				(t.flags |= 1),
				Ue(e, t, r, n),
				t.child
			);
		case 14:
			return (
				(r = t.type),
				(o = At(r, t.pendingProps)),
				(o = At(r.type, o)),
				kf(e, t, r, o, n)
			);
		case 15:
			return $m(e, t, t.type, t.pendingProps, n);
		case 17:
			return (
				(r = t.type),
				(o = t.pendingProps),
				(o = t.elementType === r ? o : At(r, o)),
				Ts(e, t),
				(t.tag = 1),
				et(r) ? ((e = !0), Ys(t)) : (e = !1),
				ro(t, n),
				_m(t, r, o),
				wu(t, r, o, n),
				Eu(null, t, r, !0, e, n)
			);
		case 19:
			return zm(e, t, n);
		case 22:
			return Mm(e, t, n);
	}
	throw Error(I(156, t.tag));
};
function ng(e, t) {
	return Nh(e, t);
}
function D1(e, t, n, r) {
	((this.tag = e),
		(this.key = n),
		(this.sibling =
			this.child =
			this.return =
			this.stateNode =
			this.type =
			this.elementType =
				null),
		(this.index = 0),
		(this.ref = null),
		(this.pendingProps = t),
		(this.dependencies =
			this.memoizedState =
			this.updateQueue =
			this.memoizedProps =
				null),
		(this.mode = r),
		(this.subtreeFlags = this.flags = 0),
		(this.deletions = null),
		(this.childLanes = this.lanes = 0),
		(this.alternate = null));
}
function yt(e, t, n, r) {
	return new D1(e, t, n, r);
}
function Kc(e) {
	return ((e = e.prototype), !(!e || !e.isReactComponent));
}
function j1(e) {
	if (typeof e == "function") return Kc(e) ? 1 : 0;
	if (e != null) {
		if (((e = e.$$typeof), e === fc)) return 11;
		if (e === pc) return 14;
	}
	return 2;
}
function Gn(e, t) {
	var n = e.alternate;
	return (
		n === null
			? ((n = yt(e.tag, t, e.key, e.mode)),
				(n.elementType = e.elementType),
				(n.type = e.type),
				(n.stateNode = e.stateNode),
				(n.alternate = e),
				(e.alternate = n))
			: ((n.pendingProps = t),
				(n.type = e.type),
				(n.flags = 0),
				(n.subtreeFlags = 0),
				(n.deletions = null)),
		(n.flags = e.flags & 14680064),
		(n.childLanes = e.childLanes),
		(n.lanes = e.lanes),
		(n.child = e.child),
		(n.memoizedProps = e.memoizedProps),
		(n.memoizedState = e.memoizedState),
		(n.updateQueue = e.updateQueue),
		(t = e.dependencies),
		(n.dependencies =
			t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
		(n.sibling = e.sibling),
		(n.index = e.index),
		(n.ref = e.ref),
		n
	);
}
function As(e, t, n, r, o, i) {
	var s = 2;
	if (((r = e), typeof e == "function")) Kc(e) && (s = 1);
	else if (typeof e == "string") s = 5;
	else
		e: switch (e) {
			case Ur:
				return Sr(n.children, o, i, t);
			case dc:
				((s = 8), (o |= 8));
				break;
			case Wa:
				return (
					(e = yt(12, n, t, o | 2)),
					(e.elementType = Wa),
					(e.lanes = i),
					e
				);
			case Va:
				return ((e = yt(13, n, t, o)), (e.elementType = Va), (e.lanes = i), e);
			case Ha:
				return ((e = yt(19, n, t, o)), (e.elementType = Ha), (e.lanes = i), e);
			case fh:
				return Al(n, o, i, t);
			default:
				if (typeof e == "object" && e !== null)
					switch (e.$$typeof) {
						case ch:
							s = 10;
							break e;
						case dh:
							s = 9;
							break e;
						case fc:
							s = 11;
							break e;
						case pc:
							s = 14;
							break e;
						case Rn:
							((s = 16), (r = null));
							break e;
					}
				throw Error(I(130, e == null ? e : typeof e, ""));
		}
	return (
		(t = yt(s, n, t, o)),
		(t.elementType = e),
		(t.type = r),
		(t.lanes = i),
		t
	);
}
function Sr(e, t, n, r) {
	return ((e = yt(7, e, r, t)), (e.lanes = n), e);
}
function Al(e, t, n, r) {
	return (
		(e = yt(22, e, r, t)),
		(e.elementType = fh),
		(e.lanes = n),
		(e.stateNode = { isHidden: !1 }),
		e
	);
}
function Ra(e, t, n) {
	return ((e = yt(6, e, null, t)), (e.lanes = n), e);
}
function Na(e, t, n) {
	return (
		(t = yt(4, e.children !== null ? e.children : [], e.key, t)),
		(t.lanes = n),
		(t.stateNode = {
			containerInfo: e.containerInfo,
			pendingChildren: null,
			implementation: e.implementation,
		}),
		t
	);
}
function F1(e, t, n, r, o) {
	((this.tag = t),
		(this.containerInfo = e),
		(this.finishedWork =
			this.pingCache =
			this.current =
			this.pendingChildren =
				null),
		(this.timeoutHandle = -1),
		(this.callbackNode = this.pendingContext = this.context = null),
		(this.callbackPriority = 0),
		(this.eventTimes = ua(0)),
		(this.expirationTimes = ua(-1)),
		(this.entangledLanes =
			this.finishedLanes =
			this.mutableReadLanes =
			this.expiredLanes =
			this.pingedLanes =
			this.suspendedLanes =
			this.pendingLanes =
				0),
		(this.entanglements = ua(0)),
		(this.identifierPrefix = r),
		(this.onRecoverableError = o),
		(this.mutableSourceEagerHydrationData = null));
}
function Gc(e, t, n, r, o, i, s, l, a) {
	return (
		(e = new F1(e, t, n, l, a)),
		t === 1 ? ((t = 1), i === !0 && (t |= 8)) : (t = 0),
		(i = yt(3, null, null, t)),
		(e.current = i),
		(i.stateNode = e),
		(i.memoizedState = {
			element: r,
			isDehydrated: n,
			cache: null,
			transitions: null,
			pendingSuspenseBoundaries: null,
		}),
		Oc(i),
		e
	);
}
function z1(e, t, n) {
	var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
	return {
		$$typeof: Br,
		key: r == null ? null : "" + r,
		children: e,
		containerInfo: t,
		implementation: n,
	};
}
function rg(e) {
	if (!e) return Xn;
	e = e._reactInternals;
	e: {
		if (Or(e) !== e || e.tag !== 1) throw Error(I(170));
		var t = e;
		do {
			switch (t.tag) {
				case 3:
					t = t.stateNode.context;
					break e;
				case 1:
					if (et(t.type)) {
						t = t.stateNode.__reactInternalMemoizedMergedChildContext;
						break e;
					}
			}
			t = t.return;
		} while (t !== null);
		throw Error(I(171));
	}
	if (e.tag === 1) {
		var n = e.type;
		if (et(n)) return rm(e, n, t);
	}
	return t;
}
function og(e, t, n, r, o, i, s, l, a) {
	return (
		(e = Gc(n, r, !0, e, o, i, s, l, a)),
		(e.context = rg(null)),
		(n = e.current),
		(r = Ve()),
		(o = Kn(n)),
		(i = fn(r, o)),
		(i.callback = t ?? null),
		Hn(n, i, o),
		(e.current.lanes = o),
		Fi(e, o, r),
		tt(e, r),
		e
	);
}
function Ol(e, t, n, r) {
	var o = t.current,
		i = Ve(),
		s = Kn(o);
	return (
		(n = rg(n)),
		t.context === null ? (t.context = n) : (t.pendingContext = n),
		(t = fn(i, s)),
		(t.payload = { element: e }),
		(r = r === void 0 ? null : r),
		r !== null && (t.callback = r),
		(e = Hn(o, t, s)),
		e !== null && (jt(e, o, s, i), ks(e, o, s)),
		s
	);
}
function al(e) {
	if (((e = e.current), !e.child)) return null;
	switch (e.child.tag) {
		case 5:
			return e.child.stateNode;
		default:
			return e.child.stateNode;
	}
}
function Mf(e, t) {
	if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
		var n = e.retryLane;
		e.retryLane = n !== 0 && n < t ? n : t;
	}
}
function Yc(e, t) {
	(Mf(e, t), (e = e.alternate) && Mf(e, t));
}
function B1() {
	return null;
}
var ig =
	typeof reportError == "function"
		? reportError
		: function (e) {
				console.error(e);
			};
function Xc(e) {
	this._internalRoot = e;
}
_l.prototype.render = Xc.prototype.render = function (e) {
	var t = this._internalRoot;
	if (t === null) throw Error(I(409));
	Ol(e, t, null, null);
};
_l.prototype.unmount = Xc.prototype.unmount = function () {
	var e = this._internalRoot;
	if (e !== null) {
		this._internalRoot = null;
		var t = e.containerInfo;
		(Tr(function () {
			Ol(null, e, null, null);
		}),
			(t[hn] = null));
	}
};
function _l(e) {
	this._internalRoot = e;
}
_l.prototype.unstable_scheduleHydration = function (e) {
	if (e) {
		var t = Mh();
		e = { blockedOn: null, target: e, priority: t };
		for (var n = 0; n < An.length && t !== 0 && t < An[n].priority; n++);
		(An.splice(n, 0, e), n === 0 && jh(e));
	}
};
function qc(e) {
	return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function Il(e) {
	return !(
		!e ||
		(e.nodeType !== 1 &&
			e.nodeType !== 9 &&
			e.nodeType !== 11 &&
			(e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
	);
}
function Df() {}
function U1(e, t, n, r, o) {
	if (o) {
		if (typeof r == "function") {
			var i = r;
			r = function () {
				var u = al(s);
				i.call(u);
			};
		}
		var s = og(t, r, e, 0, null, !1, !1, "", Df);
		return (
			(e._reactRootContainer = s),
			(e[hn] = s.current),
			Si(e.nodeType === 8 ? e.parentNode : e),
			Tr(),
			s
		);
	}
	for (; (o = e.lastChild); ) e.removeChild(o);
	if (typeof r == "function") {
		var l = r;
		r = function () {
			var u = al(a);
			l.call(u);
		};
	}
	var a = Gc(e, 0, !1, null, null, !1, !1, "", Df);
	return (
		(e._reactRootContainer = a),
		(e[hn] = a.current),
		Si(e.nodeType === 8 ? e.parentNode : e),
		Tr(function () {
			Ol(t, a, n, r);
		}),
		a
	);
}
function Ll(e, t, n, r, o) {
	var i = n._reactRootContainer;
	if (i) {
		var s = i;
		if (typeof o == "function") {
			var l = o;
			o = function () {
				var a = al(s);
				l.call(a);
			};
		}
		Ol(t, s, e, o);
	} else s = U1(n, t, e, o, r);
	return al(s);
}
Lh = function (e) {
	switch (e.tag) {
		case 3:
			var t = e.stateNode;
			if (t.current.memoizedState.isDehydrated) {
				var n = qo(t.pendingLanes);
				n !== 0 &&
					(gc(t, n | 1), tt(t, Se()), !(te & 6) && ((Co = Se() + 500), rr()));
			}
			break;
		case 13:
			(Tr(function () {
				var r = mn(e, 1);
				if (r !== null) {
					var o = Ve();
					jt(r, e, 1, o);
				}
			}),
				Yc(e, 1));
	}
};
vc = function (e) {
	if (e.tag === 13) {
		var t = mn(e, 134217728);
		if (t !== null) {
			var n = Ve();
			jt(t, e, 134217728, n);
		}
		Yc(e, 134217728);
	}
};
$h = function (e) {
	if (e.tag === 13) {
		var t = Kn(e),
			n = mn(e, t);
		if (n !== null) {
			var r = Ve();
			jt(n, e, t, r);
		}
		Yc(e, t);
	}
};
Mh = function () {
	return oe;
};
Dh = function (e, t) {
	var n = oe;
	try {
		return ((oe = e), t());
	} finally {
		oe = n;
	}
};
tu = function (e, t, n) {
	switch (t) {
		case "input":
			if ((Ga(e, n), (t = n.name), n.type === "radio" && t != null)) {
				for (n = e; n.parentNode; ) n = n.parentNode;
				for (
					n = n.querySelectorAll(
						"input[name=" + JSON.stringify("" + t) + '][type="radio"]',
					),
						t = 0;
					t < n.length;
					t++
				) {
					var r = n[t];
					if (r !== e && r.form === e.form) {
						var o = kl(r);
						if (!o) throw Error(I(90));
						(hh(r), Ga(r, o));
					}
				}
			}
			break;
		case "textarea":
			gh(e, n);
			break;
		case "select":
			((t = n.value), t != null && Jr(e, !!n.multiple, t, !1));
	}
};
Ch = Vc;
kh = Tr;
var W1 = { usingClientEntryPoint: !1, Events: [Bi, Qr, kl, Sh, Eh, Vc] },
	Qo = {
		findFiberByHostInstance: cr,
		bundleType: 0,
		version: "18.3.1",
		rendererPackageName: "react-dom",
	},
	V1 = {
		bundleType: Qo.bundleType,
		version: Qo.version,
		rendererPackageName: Qo.rendererPackageName,
		rendererConfig: Qo.rendererConfig,
		overrideHookState: null,
		overrideHookStateDeletePath: null,
		overrideHookStateRenamePath: null,
		overrideProps: null,
		overridePropsDeletePath: null,
		overridePropsRenamePath: null,
		setErrorHandler: null,
		setSuspenseHandler: null,
		scheduleUpdate: null,
		currentDispatcherRef: wn.ReactCurrentDispatcher,
		findHostInstanceByFiber: function (e) {
			return ((e = Th(e)), e === null ? null : e.stateNode);
		},
		findFiberByHostInstance: Qo.findFiberByHostInstance || B1,
		findHostInstancesForRefresh: null,
		scheduleRefresh: null,
		scheduleRoot: null,
		setRefreshHandler: null,
		getCurrentFiber: null,
		reconcilerVersion: "18.3.1-next-f1338f8080-20240426",
	};
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
	var ps = __REACT_DEVTOOLS_GLOBAL_HOOK__;
	if (!ps.isDisabled && ps.supportsFiber)
		try {
			((xl = ps.inject(V1)), (qt = ps));
		} catch {}
}
dt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = W1;
dt.createPortal = function (e, t) {
	var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
	if (!qc(t)) throw Error(I(200));
	return z1(e, t, null, n);
};
dt.createRoot = function (e, t) {
	if (!qc(e)) throw Error(I(299));
	var n = !1,
		r = "",
		o = ig;
	return (
		t != null &&
			(t.unstable_strictMode === !0 && (n = !0),
			t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
			t.onRecoverableError !== void 0 && (o = t.onRecoverableError)),
		(t = Gc(e, 1, !1, null, null, n, !1, r, o)),
		(e[hn] = t.current),
		Si(e.nodeType === 8 ? e.parentNode : e),
		new Xc(t)
	);
};
dt.findDOMNode = function (e) {
	if (e == null) return null;
	if (e.nodeType === 1) return e;
	var t = e._reactInternals;
	if (t === void 0)
		throw typeof e.render == "function"
			? Error(I(188))
			: ((e = Object.keys(e).join(",")), Error(I(268, e)));
	return ((e = Th(t)), (e = e === null ? null : e.stateNode), e);
};
dt.flushSync = function (e) {
	return Tr(e);
};
dt.hydrate = function (e, t, n) {
	if (!Il(t)) throw Error(I(200));
	return Ll(null, e, t, !0, n);
};
dt.hydrateRoot = function (e, t, n) {
	if (!qc(e)) throw Error(I(405));
	var r = (n != null && n.hydratedSources) || null,
		o = !1,
		i = "",
		s = ig;
	if (
		(n != null &&
			(n.unstable_strictMode === !0 && (o = !0),
			n.identifierPrefix !== void 0 && (i = n.identifierPrefix),
			n.onRecoverableError !== void 0 && (s = n.onRecoverableError)),
		(t = og(t, null, e, 1, n ?? null, o, !1, i, s)),
		(e[hn] = t.current),
		Si(e),
		r)
	)
		for (e = 0; e < r.length; e++)
			((n = r[e]),
				(o = n._getVersion),
				(o = o(n._source)),
				t.mutableSourceEagerHydrationData == null
					? (t.mutableSourceEagerHydrationData = [n, o])
					: t.mutableSourceEagerHydrationData.push(n, o));
	return new _l(t);
};
dt.render = function (e, t, n) {
	if (!Il(t)) throw Error(I(200));
	return Ll(null, e, t, !1, n);
};
dt.unmountComponentAtNode = function (e) {
	if (!Il(e)) throw Error(I(40));
	return e._reactRootContainer
		? (Tr(function () {
				Ll(null, null, e, !1, function () {
					((e._reactRootContainer = null), (e[hn] = null));
				});
			}),
			!0)
		: !1;
};
dt.unstable_batchedUpdates = Vc;
dt.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
	if (!Il(n)) throw Error(I(200));
	if (e == null || e._reactInternals === void 0) throw Error(I(38));
	return Ll(e, t, n, !1, r);
};
dt.version = "18.3.1-next-f1338f8080-20240426";
function sg() {
	if (
		!(
			typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
			typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
		)
	)
		try {
			__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(sg);
		} catch (e) {
			console.error(e);
		}
}
(sg(), (sh.exports = dt));
var Wi = sh.exports;
const lg = Kp(Wi);
var ag,
	jf = Wi;
((ag = jf.createRoot), jf.hydrateRoot);
const H1 = 1,
	Q1 = 1e6;
let Aa = 0;
function K1() {
	return ((Aa = (Aa + 1) % Number.MAX_SAFE_INTEGER), Aa.toString());
}
const Oa = new Map(),
	Ff = (e) => {
		if (Oa.has(e)) return;
		const t = setTimeout(() => {
			(Oa.delete(e), ci({ type: "REMOVE_TOAST", toastId: e }));
		}, Q1);
		Oa.set(e, t);
	},
	G1 = (e, t) => {
		switch (t.type) {
			case "ADD_TOAST":
				return { ...e, toasts: [t.toast, ...e.toasts].slice(0, H1) };
			case "UPDATE_TOAST":
				return {
					...e,
					toasts: e.toasts.map((n) =>
						n.id === t.toast.id ? { ...n, ...t.toast } : n,
					),
				};
			case "DISMISS_TOAST": {
				const { toastId: n } = t;
				return (
					n
						? Ff(n)
						: e.toasts.forEach((r) => {
								Ff(r.id);
							}),
					{
						...e,
						toasts: e.toasts.map((r) =>
							r.id === n || n === void 0 ? { ...r, open: !1 } : r,
						),
					}
				);
			}
			case "REMOVE_TOAST":
				return t.toastId === void 0
					? { ...e, toasts: [] }
					: { ...e, toasts: e.toasts.filter((n) => n.id !== t.toastId) };
		}
	},
	Os = [];
let _s = { toasts: [] };
function ci(e) {
	((_s = G1(_s, e)),
		Os.forEach((t) => {
			t(_s);
		}));
}
function Y1({ ...e }) {
	const t = K1(),
		n = (o) => ci({ type: "UPDATE_TOAST", toast: { ...o, id: t } }),
		r = () => ci({ type: "DISMISS_TOAST", toastId: t });
	return (
		ci({
			type: "ADD_TOAST",
			toast: {
				...e,
				id: t,
				open: !0,
				onOpenChange: (o) => {
					o || r();
				},
			},
		}),
		{ id: t, dismiss: r, update: n }
	);
}
function X1() {
	const [e, t] = S.useState(_s);
	return (
		S.useEffect(
			() => (
				Os.push(t),
				() => {
					const n = Os.indexOf(t);
					n > -1 && Os.splice(n, 1);
				}
			),
			[e],
		),
		{
			...e,
			toast: Y1,
			dismiss: (n) => ci({ type: "DISMISS_TOAST", toastId: n }),
		}
	);
}
function Pe(e, t, { checkForDefaultPrevented: n = !0 } = {}) {
	return function (o) {
		if ((e == null || e(o), n === !1 || !o.defaultPrevented))
			return t == null ? void 0 : t(o);
	};
}
function zf(e, t) {
	if (typeof e == "function") return e(t);
	e != null && (e.current = t);
}
function ug(...e) {
	return (t) => {
		let n = !1;
		const r = e.map((o) => {
			const i = zf(o, t);
			return (!n && typeof i == "function" && (n = !0), i);
		});
		if (n)
			return () => {
				for (let o = 0; o < r.length; o++) {
					const i = r[o];
					typeof i == "function" ? i() : zf(e[o], null);
				}
			};
	};
}
function Bt(...e) {
	return S.useCallback(ug(...e), e);
}
function $l(e, t = []) {
	let n = [];
	function r(i, s) {
		const l = S.createContext(s),
			a = n.length;
		n = [...n, s];
		const u = (f) => {
			var m;
			const { scope: h, children: d, ...w } = f,
				v = ((m = h == null ? void 0 : h[e]) == null ? void 0 : m[a]) || l,
				y = S.useMemo(() => w, Object.values(w));
			return P.jsx(v.Provider, { value: y, children: d });
		};
		u.displayName = i + "Provider";
		function c(f, h) {
			var v;
			const d = ((v = h == null ? void 0 : h[e]) == null ? void 0 : v[a]) || l,
				w = S.useContext(d);
			if (w) return w;
			if (s !== void 0) return s;
			throw new Error(`\`${f}\` must be used within \`${i}\``);
		}
		return [u, c];
	}
	const o = () => {
		const i = n.map((s) => S.createContext(s));
		return function (l) {
			const a = (l == null ? void 0 : l[e]) || i;
			return S.useMemo(() => ({ [`__scope${e}`]: { ...l, [e]: a } }), [l, a]);
		};
	};
	return ((o.scopeName = e), [r, q1(o, ...t)]);
}
function q1(...e) {
	const t = e[0];
	if (e.length === 1) return t;
	const n = () => {
		const r = e.map((o) => ({ useScope: o(), scopeName: o.scopeName }));
		return function (i) {
			const s = r.reduce((l, { useScope: a, scopeName: u }) => {
				const f = a(i)[`__scope${u}`];
				return { ...l, ...f };
			}, {});
			return S.useMemo(() => ({ [`__scope${t.scopeName}`]: s }), [s]);
		};
	};
	return ((n.scopeName = t.scopeName), n);
}
function Lu(e) {
	const t = Z1(e),
		n = S.forwardRef((r, o) => {
			const { children: i, ...s } = r,
				l = S.Children.toArray(i),
				a = l.find(ew);
			if (a) {
				const u = a.props.children,
					c = l.map((f) =>
						f === a
							? S.Children.count(u) > 1
								? S.Children.only(null)
								: S.isValidElement(u)
									? u.props.children
									: null
							: f,
					);
				return P.jsx(t, {
					...s,
					ref: o,
					children: S.isValidElement(u) ? S.cloneElement(u, void 0, c) : null,
				});
			}
			return P.jsx(t, { ...s, ref: o, children: i });
		});
	return ((n.displayName = `${e}.Slot`), n);
}
function Z1(e) {
	const t = S.forwardRef((n, r) => {
		const { children: o, ...i } = n;
		if (S.isValidElement(o)) {
			const s = nw(o),
				l = tw(i, o.props);
			return (
				o.type !== S.Fragment && (l.ref = r ? ug(r, s) : s),
				S.cloneElement(o, l)
			);
		}
		return S.Children.count(o) > 1 ? S.Children.only(null) : null;
	});
	return ((t.displayName = `${e}.SlotClone`), t);
}
var cg = Symbol("radix.slottable");
function J1(e) {
	const t = ({ children: n }) => P.jsx(P.Fragment, { children: n });
	return ((t.displayName = `${e}.Slottable`), (t.__radixId = cg), t);
}
function ew(e) {
	return (
		S.isValidElement(e) &&
		typeof e.type == "function" &&
		"__radixId" in e.type &&
		e.type.__radixId === cg
	);
}
function tw(e, t) {
	const n = { ...t };
	for (const r in t) {
		const o = e[r],
			i = t[r];
		/^on[A-Z]/.test(r)
			? o && i
				? (n[r] = (...l) => {
						const a = i(...l);
						return (o(...l), a);
					})
				: o && (n[r] = o)
			: r === "style"
				? (n[r] = { ...o, ...i })
				: r === "className" && (n[r] = [o, i].filter(Boolean).join(" "));
	}
	return { ...e, ...n };
}
function nw(e) {
	var r, o;
	let t =
			(r = Object.getOwnPropertyDescriptor(e.props, "ref")) == null
				? void 0
				: r.get,
		n = t && "isReactWarning" in t && t.isReactWarning;
	return n
		? e.ref
		: ((t =
				(o = Object.getOwnPropertyDescriptor(e, "ref")) == null
					? void 0
					: o.get),
			(n = t && "isReactWarning" in t && t.isReactWarning),
			n ? e.props.ref : e.props.ref || e.ref);
}
function rw(e) {
	const t = e + "CollectionProvider",
		[n, r] = $l(t),
		[o, i] = n(t, { collectionRef: { current: null }, itemMap: new Map() }),
		s = (v) => {
			const { scope: y, children: m } = v,
				p = $.useRef(null),
				g = $.useRef(new Map()).current;
			return P.jsx(o, { scope: y, itemMap: g, collectionRef: p, children: m });
		};
	s.displayName = t;
	const l = e + "CollectionSlot",
		a = Lu(l),
		u = $.forwardRef((v, y) => {
			const { scope: m, children: p } = v,
				g = i(l, m),
				x = Bt(y, g.collectionRef);
			return P.jsx(a, { ref: x, children: p });
		});
	u.displayName = l;
	const c = e + "CollectionItemSlot",
		f = "data-radix-collection-item",
		h = Lu(c),
		d = $.forwardRef((v, y) => {
			const { scope: m, children: p, ...g } = v,
				x = $.useRef(null),
				C = Bt(y, x),
				k = i(c, m);
			return (
				$.useEffect(
					() => (
						k.itemMap.set(x, { ref: x, ...g }),
						() => void k.itemMap.delete(x)
					),
				),
				P.jsx(h, { [f]: "", ref: C, children: p })
			);
		});
	d.displayName = c;
	function w(v) {
		const y = i(e + "CollectionConsumer", v);
		return $.useCallback(() => {
			const p = y.collectionRef.current;
			if (!p) return [];
			const g = Array.from(p.querySelectorAll(`[${f}]`));
			return Array.from(y.itemMap.values()).sort(
				(k, E) => g.indexOf(k.ref.current) - g.indexOf(E.ref.current),
			);
		}, [y.collectionRef, y.itemMap]);
	}
	return [{ Provider: s, Slot: u, ItemSlot: d }, w, r];
}
var ow = [
		"a",
		"button",
		"div",
		"form",
		"h2",
		"h3",
		"img",
		"input",
		"label",
		"li",
		"nav",
		"ol",
		"p",
		"select",
		"span",
		"svg",
		"ul",
	],
	rt = ow.reduce((e, t) => {
		const n = Lu(`Primitive.${t}`),
			r = S.forwardRef((o, i) => {
				const { asChild: s, ...l } = o,
					a = s ? n : t;
				return (
					typeof window < "u" && (window[Symbol.for("radix-ui")] = !0),
					P.jsx(a, { ...l, ref: i })
				);
			});
		return ((r.displayName = `Primitive.${t}`), { ...e, [t]: r });
	}, {});
function dg(e, t) {
	e && Wi.flushSync(() => e.dispatchEvent(t));
}
function qn(e) {
	const t = S.useRef(e);
	return (
		S.useEffect(() => {
			t.current = e;
		}),
		S.useMemo(
			() =>
				(...n) => {
					var r;
					return (r = t.current) == null ? void 0 : r.call(t, ...n);
				},
			[],
		)
	);
}
function iw(e, t = globalThis == null ? void 0 : globalThis.document) {
	const n = qn(e);
	S.useEffect(() => {
		const r = (o) => {
			o.key === "Escape" && n(o);
		};
		return (
			t.addEventListener("keydown", r, { capture: !0 }),
			() => t.removeEventListener("keydown", r, { capture: !0 })
		);
	}, [n, t]);
}
var sw = "DismissableLayer",
	$u = "dismissableLayer.update",
	lw = "dismissableLayer.pointerDownOutside",
	aw = "dismissableLayer.focusOutside",
	Bf,
	fg = S.createContext({
		layers: new Set(),
		layersWithOutsidePointerEventsDisabled: new Set(),
		branches: new Set(),
	}),
	Zc = S.forwardRef((e, t) => {
		const {
				disableOutsidePointerEvents: n = !1,
				onEscapeKeyDown: r,
				onPointerDownOutside: o,
				onFocusOutside: i,
				onInteractOutside: s,
				onDismiss: l,
				...a
			} = e,
			u = S.useContext(fg),
			[c, f] = S.useState(null),
			h =
				(c == null ? void 0 : c.ownerDocument) ??
				(globalThis == null ? void 0 : globalThis.document),
			[, d] = S.useState({}),
			w = Bt(t, (E) => f(E)),
			v = Array.from(u.layers),
			[y] = [...u.layersWithOutsidePointerEventsDisabled].slice(-1),
			m = v.indexOf(y),
			p = c ? v.indexOf(c) : -1,
			g = u.layersWithOutsidePointerEventsDisabled.size > 0,
			x = p >= m,
			C = cw((E) => {
				const b = E.target,
					_ = [...u.branches].some((L) => L.contains(b));
				!x ||
					_ ||
					(o == null || o(E),
					s == null || s(E),
					E.defaultPrevented || l == null || l());
			}, h),
			k = dw((E) => {
				const b = E.target;
				[...u.branches].some((L) => L.contains(b)) ||
					(i == null || i(E),
					s == null || s(E),
					E.defaultPrevented || l == null || l());
			}, h);
		return (
			iw((E) => {
				p === u.layers.size - 1 &&
					(r == null || r(E),
					!E.defaultPrevented && l && (E.preventDefault(), l()));
			}, h),
			S.useEffect(() => {
				if (c)
					return (
						n &&
							(u.layersWithOutsidePointerEventsDisabled.size === 0 &&
								((Bf = h.body.style.pointerEvents),
								(h.body.style.pointerEvents = "none")),
							u.layersWithOutsidePointerEventsDisabled.add(c)),
						u.layers.add(c),
						Uf(),
						() => {
							n &&
								u.layersWithOutsidePointerEventsDisabled.size === 1 &&
								(h.body.style.pointerEvents = Bf);
						}
					);
			}, [c, h, n, u]),
			S.useEffect(
				() => () => {
					c &&
						(u.layers.delete(c),
						u.layersWithOutsidePointerEventsDisabled.delete(c),
						Uf());
				},
				[c, u],
			),
			S.useEffect(() => {
				const E = () => d({});
				return (
					document.addEventListener($u, E),
					() => document.removeEventListener($u, E)
				);
			}, []),
			P.jsx(rt.div, {
				...a,
				ref: w,
				style: {
					pointerEvents: g ? (x ? "auto" : "none") : void 0,
					...e.style,
				},
				onFocusCapture: Pe(e.onFocusCapture, k.onFocusCapture),
				onBlurCapture: Pe(e.onBlurCapture, k.onBlurCapture),
				onPointerDownCapture: Pe(
					e.onPointerDownCapture,
					C.onPointerDownCapture,
				),
			})
		);
	});
Zc.displayName = sw;
var uw = "DismissableLayerBranch",
	pg = S.forwardRef((e, t) => {
		const n = S.useContext(fg),
			r = S.useRef(null),
			o = Bt(t, r);
		return (
			S.useEffect(() => {
				const i = r.current;
				if (i)
					return (
						n.branches.add(i),
						() => {
							n.branches.delete(i);
						}
					);
			}, [n.branches]),
			P.jsx(rt.div, { ...e, ref: o })
		);
	});
pg.displayName = uw;
function cw(e, t = globalThis == null ? void 0 : globalThis.document) {
	const n = qn(e),
		r = S.useRef(!1),
		o = S.useRef(() => {});
	return (
		S.useEffect(() => {
			const i = (l) => {
					if (l.target && !r.current) {
						let a = function () {
							hg(lw, n, u, { discrete: !0 });
						};
						const u = { originalEvent: l };
						l.pointerType === "touch"
							? (t.removeEventListener("click", o.current),
								(o.current = a),
								t.addEventListener("click", o.current, { once: !0 }))
							: a();
					} else t.removeEventListener("click", o.current);
					r.current = !1;
				},
				s = window.setTimeout(() => {
					t.addEventListener("pointerdown", i);
				}, 0);
			return () => {
				(window.clearTimeout(s),
					t.removeEventListener("pointerdown", i),
					t.removeEventListener("click", o.current));
			};
		}, [t, n]),
		{ onPointerDownCapture: () => (r.current = !0) }
	);
}
function dw(e, t = globalThis == null ? void 0 : globalThis.document) {
	const n = qn(e),
		r = S.useRef(!1);
	return (
		S.useEffect(() => {
			const o = (i) => {
				i.target &&
					!r.current &&
					hg(aw, n, { originalEvent: i }, { discrete: !1 });
			};
			return (
				t.addEventListener("focusin", o),
				() => t.removeEventListener("focusin", o)
			);
		}, [t, n]),
		{
			onFocusCapture: () => (r.current = !0),
			onBlurCapture: () => (r.current = !1),
		}
	);
}
function Uf() {
	const e = new CustomEvent($u);
	document.dispatchEvent(e);
}
function hg(e, t, n, { discrete: r }) {
	const o = n.originalEvent.target,
		i = new CustomEvent(e, { bubbles: !1, cancelable: !0, detail: n });
	(t && o.addEventListener(e, t, { once: !0 }),
		r ? dg(o, i) : o.dispatchEvent(i));
}
var fw = Zc,
	pw = pg,
	Zn = globalThis != null && globalThis.document ? S.useLayoutEffect : () => {},
	hw = "Portal",
	mg = S.forwardRef((e, t) => {
		var l;
		const { container: n, ...r } = e,
			[o, i] = S.useState(!1);
		Zn(() => i(!0), []);
		const s =
			n ||
			(o &&
				((l = globalThis == null ? void 0 : globalThis.document) == null
					? void 0
					: l.body));
		return s ? lg.createPortal(P.jsx(rt.div, { ...r, ref: t }), s) : null;
	});
mg.displayName = hw;
function mw(e, t) {
	return S.useReducer((n, r) => t[n][r] ?? n, e);
}
var Jc = (e) => {
	const { present: t, children: n } = e,
		r = gw(t),
		o =
			typeof n == "function" ? n({ present: r.isPresent }) : S.Children.only(n),
		i = Bt(r.ref, vw(o));
	return typeof n == "function" || r.isPresent
		? S.cloneElement(o, { ref: i })
		: null;
};
Jc.displayName = "Presence";
function gw(e) {
	const [t, n] = S.useState(),
		r = S.useRef(null),
		o = S.useRef(e),
		i = S.useRef("none"),
		s = e ? "mounted" : "unmounted",
		[l, a] = mw(s, {
			mounted: { UNMOUNT: "unmounted", ANIMATION_OUT: "unmountSuspended" },
			unmountSuspended: { MOUNT: "mounted", ANIMATION_END: "unmounted" },
			unmounted: { MOUNT: "mounted" },
		});
	return (
		S.useEffect(() => {
			const u = hs(r.current);
			i.current = l === "mounted" ? u : "none";
		}, [l]),
		Zn(() => {
			const u = r.current,
				c = o.current;
			if (c !== e) {
				const h = i.current,
					d = hs(u);
				(e
					? a("MOUNT")
					: d === "none" || (u == null ? void 0 : u.display) === "none"
						? a("UNMOUNT")
						: a(c && h !== d ? "ANIMATION_OUT" : "UNMOUNT"),
					(o.current = e));
			}
		}, [e, a]),
		Zn(() => {
			if (t) {
				let u;
				const c = t.ownerDocument.defaultView ?? window,
					f = (d) => {
						const v = hs(r.current).includes(d.animationName);
						if (d.target === t && v && (a("ANIMATION_END"), !o.current)) {
							const y = t.style.animationFillMode;
							((t.style.animationFillMode = "forwards"),
								(u = c.setTimeout(() => {
									t.style.animationFillMode === "forwards" &&
										(t.style.animationFillMode = y);
								})));
						}
					},
					h = (d) => {
						d.target === t && (i.current = hs(r.current));
					};
				return (
					t.addEventListener("animationstart", h),
					t.addEventListener("animationcancel", f),
					t.addEventListener("animationend", f),
					() => {
						(c.clearTimeout(u),
							t.removeEventListener("animationstart", h),
							t.removeEventListener("animationcancel", f),
							t.removeEventListener("animationend", f));
					}
				);
			} else a("ANIMATION_END");
		}, [t, a]),
		{
			isPresent: ["mounted", "unmountSuspended"].includes(l),
			ref: S.useCallback((u) => {
				((r.current = u ? getComputedStyle(u) : null), n(u));
			}, []),
		}
	);
}
function hs(e) {
	return (e == null ? void 0 : e.animationName) || "none";
}
function vw(e) {
	var r, o;
	let t =
			(r = Object.getOwnPropertyDescriptor(e.props, "ref")) == null
				? void 0
				: r.get,
		n = t && "isReactWarning" in t && t.isReactWarning;
	return n
		? e.ref
		: ((t =
				(o = Object.getOwnPropertyDescriptor(e, "ref")) == null
					? void 0
					: o.get),
			(n = t && "isReactWarning" in t && t.isReactWarning),
			n ? e.props.ref : e.props.ref || e.ref);
}
var yw = oh[" useInsertionEffect ".trim().toString()] || Zn;
function ww({ prop: e, defaultProp: t, onChange: n = () => {}, caller: r }) {
	const [o, i, s] = xw({ defaultProp: t, onChange: n }),
		l = e !== void 0,
		a = l ? e : o;
	{
		const c = S.useRef(e !== void 0);
		S.useEffect(() => {
			const f = c.current;
			(f !== l &&
				console.warn(
					`${r} is changing from ${f ? "controlled" : "uncontrolled"} to ${l ? "controlled" : "uncontrolled"}. Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.`,
				),
				(c.current = l));
		}, [l, r]);
	}
	const u = S.useCallback(
		(c) => {
			var f;
			if (l) {
				const h = Sw(c) ? c(e) : c;
				h !== e && ((f = s.current) == null || f.call(s, h));
			} else i(c);
		},
		[l, e, i, s],
	);
	return [a, u];
}
function xw({ defaultProp: e, onChange: t }) {
	const [n, r] = S.useState(e),
		o = S.useRef(n),
		i = S.useRef(t);
	return (
		yw(() => {
			i.current = t;
		}, [t]),
		S.useEffect(() => {
			var s;
			o.current !== n &&
				((s = i.current) == null || s.call(i, n), (o.current = n));
		}, [n, o]),
		[n, r, i]
	);
}
function Sw(e) {
	return typeof e == "function";
}
var Ew = Object.freeze({
		position: "absolute",
		border: 0,
		width: 1,
		height: 1,
		padding: 0,
		margin: -1,
		overflow: "hidden",
		clip: "rect(0, 0, 0, 0)",
		whiteSpace: "nowrap",
		wordWrap: "normal",
	}),
	Cw = "VisuallyHidden",
	Ml = S.forwardRef((e, t) =>
		P.jsx(rt.span, { ...e, ref: t, style: { ...Ew, ...e.style } }),
	);
Ml.displayName = Cw;
var kw = Ml,
	ed = "ToastProvider",
	[td, bw, Pw] = rw("Toast"),
	[gg, Kb] = $l("Toast", [Pw]),
	[Tw, Dl] = gg(ed),
	vg = (e) => {
		const {
				__scopeToast: t,
				label: n = "Notification",
				duration: r = 5e3,
				swipeDirection: o = "right",
				swipeThreshold: i = 50,
				children: s,
			} = e,
			[l, a] = S.useState(null),
			[u, c] = S.useState(0),
			f = S.useRef(!1),
			h = S.useRef(!1);
		return (
			n.trim() ||
				console.error(
					`Invalid prop \`label\` supplied to \`${ed}\`. Expected non-empty \`string\`.`,
				),
			P.jsx(td.Provider, {
				scope: t,
				children: P.jsx(Tw, {
					scope: t,
					label: n,
					duration: r,
					swipeDirection: o,
					swipeThreshold: i,
					toastCount: u,
					viewport: l,
					onViewportChange: a,
					onToastAdd: S.useCallback(() => c((d) => d + 1), []),
					onToastRemove: S.useCallback(() => c((d) => d - 1), []),
					isFocusedToastEscapeKeyDownRef: f,
					isClosePausedRef: h,
					children: s,
				}),
			})
		);
	};
vg.displayName = ed;
var yg = "ToastViewport",
	Rw = ["F8"],
	Mu = "toast.viewportPause",
	Du = "toast.viewportResume",
	wg = S.forwardRef((e, t) => {
		const {
				__scopeToast: n,
				hotkey: r = Rw,
				label: o = "Notifications ({hotkey})",
				...i
			} = e,
			s = Dl(yg, n),
			l = bw(n),
			a = S.useRef(null),
			u = S.useRef(null),
			c = S.useRef(null),
			f = S.useRef(null),
			h = Bt(t, f, s.onViewportChange),
			d = r.join("+").replace(/Key/g, "").replace(/Digit/g, ""),
			w = s.toastCount > 0;
		(S.useEffect(() => {
			const y = (m) => {
				var g;
				r.length !== 0 &&
					r.every((x) => m[x] || m.code === x) &&
					((g = f.current) == null || g.focus());
			};
			return (
				document.addEventListener("keydown", y),
				() => document.removeEventListener("keydown", y)
			);
		}, [r]),
			S.useEffect(() => {
				const y = a.current,
					m = f.current;
				if (w && y && m) {
					const p = () => {
							if (!s.isClosePausedRef.current) {
								const k = new CustomEvent(Mu);
								(m.dispatchEvent(k), (s.isClosePausedRef.current = !0));
							}
						},
						g = () => {
							if (s.isClosePausedRef.current) {
								const k = new CustomEvent(Du);
								(m.dispatchEvent(k), (s.isClosePausedRef.current = !1));
							}
						},
						x = (k) => {
							!y.contains(k.relatedTarget) && g();
						},
						C = () => {
							y.contains(document.activeElement) || g();
						};
					return (
						y.addEventListener("focusin", p),
						y.addEventListener("focusout", x),
						y.addEventListener("pointermove", p),
						y.addEventListener("pointerleave", C),
						window.addEventListener("blur", p),
						window.addEventListener("focus", g),
						() => {
							(y.removeEventListener("focusin", p),
								y.removeEventListener("focusout", x),
								y.removeEventListener("pointermove", p),
								y.removeEventListener("pointerleave", C),
								window.removeEventListener("blur", p),
								window.removeEventListener("focus", g));
						}
					);
				}
			}, [w, s.isClosePausedRef]));
		const v = S.useCallback(
			({ tabbingDirection: y }) => {
				const p = l().map((g) => {
					const x = g.ref.current,
						C = [x, ...Bw(x)];
					return y === "forwards" ? C : C.reverse();
				});
				return (y === "forwards" ? p.reverse() : p).flat();
			},
			[l],
		);
		return (
			S.useEffect(() => {
				const y = f.current;
				if (y) {
					const m = (p) => {
						var C, k, E;
						const g = p.altKey || p.ctrlKey || p.metaKey;
						if (p.key === "Tab" && !g) {
							const b = document.activeElement,
								_ = p.shiftKey;
							if (p.target === y && _) {
								(C = u.current) == null || C.focus();
								return;
							}
							const D = v({ tabbingDirection: _ ? "backwards" : "forwards" }),
								M = D.findIndex((A) => A === b);
							_a(D.slice(M + 1))
								? p.preventDefault()
								: _
									? (k = u.current) == null || k.focus()
									: (E = c.current) == null || E.focus();
						}
					};
					return (
						y.addEventListener("keydown", m),
						() => y.removeEventListener("keydown", m)
					);
				}
			}, [l, v]),
			P.jsxs(pw, {
				ref: a,
				role: "region",
				"aria-label": o.replace("{hotkey}", d),
				tabIndex: -1,
				style: { pointerEvents: w ? void 0 : "none" },
				children: [
					w &&
						P.jsx(ju, {
							ref: u,
							onFocusFromOutsideViewport: () => {
								const y = v({ tabbingDirection: "forwards" });
								_a(y);
							},
						}),
					P.jsx(td.Slot, {
						scope: n,
						children: P.jsx(rt.ol, { tabIndex: -1, ...i, ref: h }),
					}),
					w &&
						P.jsx(ju, {
							ref: c,
							onFocusFromOutsideViewport: () => {
								const y = v({ tabbingDirection: "backwards" });
								_a(y);
							},
						}),
				],
			})
		);
	});
wg.displayName = yg;
var xg = "ToastFocusProxy",
	ju = S.forwardRef((e, t) => {
		const { __scopeToast: n, onFocusFromOutsideViewport: r, ...o } = e,
			i = Dl(xg, n);
		return P.jsx(Ml, {
			"aria-hidden": !0,
			tabIndex: 0,
			...o,
			ref: t,
			style: { position: "fixed" },
			onFocus: (s) => {
				var u;
				const l = s.relatedTarget;
				!((u = i.viewport) != null && u.contains(l)) && r();
			},
		});
	});
ju.displayName = xg;
var Vi = "Toast",
	Nw = "toast.swipeStart",
	Aw = "toast.swipeMove",
	Ow = "toast.swipeCancel",
	_w = "toast.swipeEnd",
	Sg = S.forwardRef((e, t) => {
		const { forceMount: n, open: r, defaultOpen: o, onOpenChange: i, ...s } = e,
			[l, a] = ww({ prop: r, defaultProp: o ?? !0, onChange: i, caller: Vi });
		return P.jsx(Jc, {
			present: n || l,
			children: P.jsx($w, {
				open: l,
				...s,
				ref: t,
				onClose: () => a(!1),
				onPause: qn(e.onPause),
				onResume: qn(e.onResume),
				onSwipeStart: Pe(e.onSwipeStart, (u) => {
					u.currentTarget.setAttribute("data-swipe", "start");
				}),
				onSwipeMove: Pe(e.onSwipeMove, (u) => {
					const { x: c, y: f } = u.detail.delta;
					(u.currentTarget.setAttribute("data-swipe", "move"),
						u.currentTarget.style.setProperty(
							"--radix-toast-swipe-move-x",
							`${c}px`,
						),
						u.currentTarget.style.setProperty(
							"--radix-toast-swipe-move-y",
							`${f}px`,
						));
				}),
				onSwipeCancel: Pe(e.onSwipeCancel, (u) => {
					(u.currentTarget.setAttribute("data-swipe", "cancel"),
						u.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"),
						u.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"),
						u.currentTarget.style.removeProperty("--radix-toast-swipe-end-x"),
						u.currentTarget.style.removeProperty("--radix-toast-swipe-end-y"));
				}),
				onSwipeEnd: Pe(e.onSwipeEnd, (u) => {
					const { x: c, y: f } = u.detail.delta;
					(u.currentTarget.setAttribute("data-swipe", "end"),
						u.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"),
						u.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"),
						u.currentTarget.style.setProperty(
							"--radix-toast-swipe-end-x",
							`${c}px`,
						),
						u.currentTarget.style.setProperty(
							"--radix-toast-swipe-end-y",
							`${f}px`,
						),
						a(!1));
				}),
			}),
		});
	});
Sg.displayName = Vi;
var [Iw, Lw] = gg(Vi, { onClose() {} }),
	$w = S.forwardRef((e, t) => {
		const {
				__scopeToast: n,
				type: r = "foreground",
				duration: o,
				open: i,
				onClose: s,
				onEscapeKeyDown: l,
				onPause: a,
				onResume: u,
				onSwipeStart: c,
				onSwipeMove: f,
				onSwipeCancel: h,
				onSwipeEnd: d,
				...w
			} = e,
			v = Dl(Vi, n),
			[y, m] = S.useState(null),
			p = Bt(t, (A) => m(A)),
			g = S.useRef(null),
			x = S.useRef(null),
			C = o || v.duration,
			k = S.useRef(0),
			E = S.useRef(C),
			b = S.useRef(0),
			{ onToastAdd: _, onToastRemove: L } = v,
			j = qn(() => {
				var Q;
				((y == null ? void 0 : y.contains(document.activeElement)) &&
					((Q = v.viewport) == null || Q.focus()),
					s());
			}),
			D = S.useCallback(
				(A) => {
					!A ||
						A === 1 / 0 ||
						(window.clearTimeout(b.current),
						(k.current = new Date().getTime()),
						(b.current = window.setTimeout(j, A)));
				},
				[j],
			);
		(S.useEffect(() => {
			const A = v.viewport;
			if (A) {
				const Q = () => {
						(D(E.current), u == null || u());
					},
					B = () => {
						const V = new Date().getTime() - k.current;
						((E.current = E.current - V),
							window.clearTimeout(b.current),
							a == null || a());
					};
				return (
					A.addEventListener(Mu, B),
					A.addEventListener(Du, Q),
					() => {
						(A.removeEventListener(Mu, B), A.removeEventListener(Du, Q));
					}
				);
			}
		}, [v.viewport, C, a, u, D]),
			S.useEffect(() => {
				i && !v.isClosePausedRef.current && D(C);
			}, [i, C, v.isClosePausedRef, D]),
			S.useEffect(() => (_(), () => L()), [_, L]));
		const M = S.useMemo(() => (y ? Rg(y) : null), [y]);
		return v.viewport
			? P.jsxs(P.Fragment, {
					children: [
						M &&
							P.jsx(Mw, {
								__scopeToast: n,
								role: "status",
								"aria-live": r === "foreground" ? "assertive" : "polite",
								"aria-atomic": !0,
								children: M,
							}),
						P.jsx(Iw, {
							scope: n,
							onClose: j,
							children: Wi.createPortal(
								P.jsx(td.ItemSlot, {
									scope: n,
									children: P.jsx(fw, {
										asChild: !0,
										onEscapeKeyDown: Pe(l, () => {
											(v.isFocusedToastEscapeKeyDownRef.current || j(),
												(v.isFocusedToastEscapeKeyDownRef.current = !1));
										}),
										children: P.jsx(rt.li, {
											role: "status",
											"aria-live": "off",
											"aria-atomic": !0,
											tabIndex: 0,
											"data-state": i ? "open" : "closed",
											"data-swipe-direction": v.swipeDirection,
											...w,
											ref: p,
											style: {
												userSelect: "none",
												touchAction: "none",
												...e.style,
											},
											onKeyDown: Pe(e.onKeyDown, (A) => {
												A.key === "Escape" &&
													(l == null || l(A.nativeEvent),
													A.nativeEvent.defaultPrevented ||
														((v.isFocusedToastEscapeKeyDownRef.current = !0),
														j()));
											}),
											onPointerDown: Pe(e.onPointerDown, (A) => {
												A.button === 0 &&
													(g.current = { x: A.clientX, y: A.clientY });
											}),
											onPointerMove: Pe(e.onPointerMove, (A) => {
												if (!g.current) return;
												const Q = A.clientX - g.current.x,
													B = A.clientY - g.current.y,
													V = !!x.current,
													T = ["left", "right"].includes(v.swipeDirection),
													N = ["left", "up"].includes(v.swipeDirection)
														? Math.min
														: Math.max,
													F = T ? N(0, Q) : 0,
													H = T ? 0 : N(0, B),
													U = A.pointerType === "touch" ? 10 : 2,
													q = { x: F, y: H },
													Z = { originalEvent: A, delta: q };
												V
													? ((x.current = q), ms(Aw, f, Z, { discrete: !1 }))
													: Wf(q, v.swipeDirection, U)
														? ((x.current = q),
															ms(Nw, c, Z, { discrete: !1 }),
															A.target.setPointerCapture(A.pointerId))
														: (Math.abs(Q) > U || Math.abs(B) > U) &&
															(g.current = null);
											}),
											onPointerUp: Pe(e.onPointerUp, (A) => {
												const Q = x.current,
													B = A.target;
												if (
													(B.hasPointerCapture(A.pointerId) &&
														B.releasePointerCapture(A.pointerId),
													(x.current = null),
													(g.current = null),
													Q)
												) {
													const V = A.currentTarget,
														T = { originalEvent: A, delta: Q };
													(Wf(Q, v.swipeDirection, v.swipeThreshold)
														? ms(_w, d, T, { discrete: !0 })
														: ms(Ow, h, T, { discrete: !0 }),
														V.addEventListener(
															"click",
															(N) => N.preventDefault(),
															{ once: !0 },
														));
												}
											}),
										}),
									}),
								}),
								v.viewport,
							),
						}),
					],
				})
			: null;
	}),
	Mw = (e) => {
		const { __scopeToast: t, children: n, ...r } = e,
			o = Dl(Vi, t),
			[i, s] = S.useState(!1),
			[l, a] = S.useState(!1);
		return (
			Fw(() => s(!0)),
			S.useEffect(() => {
				const u = window.setTimeout(() => a(!0), 1e3);
				return () => window.clearTimeout(u);
			}, []),
			l
				? null
				: P.jsx(mg, {
						asChild: !0,
						children: P.jsx(Ml, {
							...r,
							children:
								i && P.jsxs(P.Fragment, { children: [o.label, " ", n] }),
						}),
					})
		);
	},
	Dw = "ToastTitle",
	Eg = S.forwardRef((e, t) => {
		const { __scopeToast: n, ...r } = e;
		return P.jsx(rt.div, { ...r, ref: t });
	});
Eg.displayName = Dw;
var jw = "ToastDescription",
	Cg = S.forwardRef((e, t) => {
		const { __scopeToast: n, ...r } = e;
		return P.jsx(rt.div, { ...r, ref: t });
	});
Cg.displayName = jw;
var kg = "ToastAction",
	bg = S.forwardRef((e, t) => {
		const { altText: n, ...r } = e;
		return n.trim()
			? P.jsx(Tg, {
					altText: n,
					asChild: !0,
					children: P.jsx(nd, { ...r, ref: t }),
				})
			: (console.error(
					`Invalid prop \`altText\` supplied to \`${kg}\`. Expected non-empty \`string\`.`,
				),
				null);
	});
bg.displayName = kg;
var Pg = "ToastClose",
	nd = S.forwardRef((e, t) => {
		const { __scopeToast: n, ...r } = e,
			o = Lw(Pg, n);
		return P.jsx(Tg, {
			asChild: !0,
			children: P.jsx(rt.button, {
				type: "button",
				...r,
				ref: t,
				onClick: Pe(e.onClick, o.onClose),
			}),
		});
	});
nd.displayName = Pg;
var Tg = S.forwardRef((e, t) => {
	const { __scopeToast: n, altText: r, ...o } = e;
	return P.jsx(rt.div, {
		"data-radix-toast-announce-exclude": "",
		"data-radix-toast-announce-alt": r || void 0,
		...o,
		ref: t,
	});
});
function Rg(e) {
	const t = [];
	return (
		Array.from(e.childNodes).forEach((r) => {
			if (
				(r.nodeType === r.TEXT_NODE && r.textContent && t.push(r.textContent),
				zw(r))
			) {
				const o = r.ariaHidden || r.hidden || r.style.display === "none",
					i = r.dataset.radixToastAnnounceExclude === "";
				if (!o)
					if (i) {
						const s = r.dataset.radixToastAnnounceAlt;
						s && t.push(s);
					} else t.push(...Rg(r));
			}
		}),
		t
	);
}
function ms(e, t, n, { discrete: r }) {
	const o = n.originalEvent.currentTarget,
		i = new CustomEvent(e, { bubbles: !0, cancelable: !0, detail: n });
	(t && o.addEventListener(e, t, { once: !0 }),
		r ? dg(o, i) : o.dispatchEvent(i));
}
var Wf = (e, t, n = 0) => {
	const r = Math.abs(e.x),
		o = Math.abs(e.y),
		i = r > o;
	return t === "left" || t === "right" ? i && r > n : !i && o > n;
};
function Fw(e = () => {}) {
	const t = qn(e);
	Zn(() => {
		let n = 0,
			r = 0;
		return (
			(n = window.requestAnimationFrame(
				() => (r = window.requestAnimationFrame(t)),
			)),
			() => {
				(window.cancelAnimationFrame(n), window.cancelAnimationFrame(r));
			}
		);
	}, [t]);
}
function zw(e) {
	return e.nodeType === e.ELEMENT_NODE;
}
function Bw(e) {
	const t = [],
		n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
			acceptNode: (r) => {
				const o = r.tagName === "INPUT" && r.type === "hidden";
				return r.disabled || r.hidden || o
					? NodeFilter.FILTER_SKIP
					: r.tabIndex >= 0
						? NodeFilter.FILTER_ACCEPT
						: NodeFilter.FILTER_SKIP;
			},
		});
	for (; n.nextNode(); ) t.push(n.currentNode);
	return t;
}
function _a(e) {
	const t = document.activeElement;
	return e.some((n) =>
		n === t ? !0 : (n.focus(), document.activeElement !== t),
	);
}
var Uw = vg,
	Ng = wg,
	Ag = Sg,
	Og = Eg,
	_g = Cg,
	Ig = bg,
	Lg = nd;
function $g(e) {
	var t,
		n,
		r = "";
	if (typeof e == "string" || typeof e == "number") r += e;
	else if (typeof e == "object")
		if (Array.isArray(e)) {
			var o = e.length;
			for (t = 0; t < o; t++)
				e[t] && (n = $g(e[t])) && (r && (r += " "), (r += n));
		} else for (n in e) e[n] && (r && (r += " "), (r += n));
	return r;
}
function Mg() {
	for (var e, t, n = 0, r = "", o = arguments.length; n < o; n++)
		(e = arguments[n]) && (t = $g(e)) && (r && (r += " "), (r += t));
	return r;
}
const Vf = (e) => (typeof e == "boolean" ? `${e}` : e === 0 ? "0" : e),
	Hf = Mg,
	Ww = (e, t) => (n) => {
		var r;
		if ((t == null ? void 0 : t.variants) == null)
			return Hf(
				e,
				n == null ? void 0 : n.class,
				n == null ? void 0 : n.className,
			);
		const { variants: o, defaultVariants: i } = t,
			s = Object.keys(o).map((u) => {
				const c = n == null ? void 0 : n[u],
					f = i == null ? void 0 : i[u];
				if (c === null) return null;
				const h = Vf(c) || Vf(f);
				return o[u][h];
			}),
			l =
				n &&
				Object.entries(n).reduce((u, c) => {
					let [f, h] = c;
					return (h === void 0 || (u[f] = h), u);
				}, {}),
			a =
				t == null || (r = t.compoundVariants) === null || r === void 0
					? void 0
					: r.reduce((u, c) => {
							let { class: f, className: h, ...d } = c;
							return Object.entries(d).every((w) => {
								let [v, y] = w;
								return Array.isArray(y)
									? y.includes({ ...i, ...l }[v])
									: { ...i, ...l }[v] === y;
							})
								? [...u, f, h]
								: u;
						}, []);
		return Hf(
			e,
			s,
			a,
			n == null ? void 0 : n.class,
			n == null ? void 0 : n.className,
		);
	};
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Vw = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(),
	Dg = (...e) =>
		e
			.filter((t, n, r) => !!t && t.trim() !== "" && r.indexOf(t) === n)
			.join(" ")
			.trim();
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var Hw = {
	xmlns: "http://www.w3.org/2000/svg",
	width: 24,
	height: 24,
	viewBox: "0 0 24 24",
	fill: "none",
	stroke: "currentColor",
	strokeWidth: 2,
	strokeLinecap: "round",
	strokeLinejoin: "round",
};
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Qw = S.forwardRef(
	(
		{
			color: e = "currentColor",
			size: t = 24,
			strokeWidth: n = 2,
			absoluteStrokeWidth: r,
			className: o = "",
			children: i,
			iconNode: s,
			...l
		},
		a,
	) =>
		S.createElement(
			"svg",
			{
				ref: a,
				...Hw,
				width: t,
				height: t,
				stroke: e,
				strokeWidth: r ? (Number(n) * 24) / Number(t) : n,
				className: Dg("lucide", o),
				...l,
			},
			[
				...s.map(([u, c]) => S.createElement(u, c)),
				...(Array.isArray(i) ? i : [i]),
			],
		),
);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Kw = (e, t) => {
	const n = S.forwardRef(({ className: r, ...o }, i) =>
		S.createElement(Qw, {
			ref: i,
			iconNode: t,
			className: Dg(`lucide-${Vw(e)}`, r),
			...o,
		}),
	);
	return ((n.displayName = `${e}`), n);
};
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Gw = Kw("X", [
		["path", { d: "M18 6 6 18", key: "1bl5f8" }],
		["path", { d: "m6 6 12 12", key: "d8bk6v" }],
	]),
	rd = "-",
	Yw = (e) => {
		const t = qw(e),
			{ conflictingClassGroups: n, conflictingClassGroupModifiers: r } = e;
		return {
			getClassGroupId: (s) => {
				const l = s.split(rd);
				return (l[0] === "" && l.length !== 1 && l.shift(), jg(l, t) || Xw(s));
			},
			getConflictingClassGroupIds: (s, l) => {
				const a = n[s] || [];
				return l && r[s] ? [...a, ...r[s]] : a;
			},
		};
	},
	jg = (e, t) => {
		var s;
		if (e.length === 0) return t.classGroupId;
		const n = e[0],
			r = t.nextPart.get(n),
			o = r ? jg(e.slice(1), r) : void 0;
		if (o) return o;
		if (t.validators.length === 0) return;
		const i = e.join(rd);
		return (s = t.validators.find(({ validator: l }) => l(i))) == null
			? void 0
			: s.classGroupId;
	},
	Qf = /^\[(.+)\]$/,
	Xw = (e) => {
		if (Qf.test(e)) {
			const t = Qf.exec(e)[1],
				n = t == null ? void 0 : t.substring(0, t.indexOf(":"));
			if (n) return "arbitrary.." + n;
		}
	},
	qw = (e) => {
		const { theme: t, prefix: n } = e,
			r = { nextPart: new Map(), validators: [] };
		return (
			Jw(Object.entries(e.classGroups), n).forEach(([i, s]) => {
				Fu(s, r, i, t);
			}),
			r
		);
	},
	Fu = (e, t, n, r) => {
		e.forEach((o) => {
			if (typeof o == "string") {
				const i = o === "" ? t : Kf(t, o);
				i.classGroupId = n;
				return;
			}
			if (typeof o == "function") {
				if (Zw(o)) {
					Fu(o(r), t, n, r);
					return;
				}
				t.validators.push({ validator: o, classGroupId: n });
				return;
			}
			Object.entries(o).forEach(([i, s]) => {
				Fu(s, Kf(t, i), n, r);
			});
		});
	},
	Kf = (e, t) => {
		let n = e;
		return (
			t.split(rd).forEach((r) => {
				(n.nextPart.has(r) ||
					n.nextPart.set(r, { nextPart: new Map(), validators: [] }),
					(n = n.nextPart.get(r)));
			}),
			n
		);
	},
	Zw = (e) => e.isThemeGetter,
	Jw = (e, t) =>
		t
			? e.map(([n, r]) => {
					const o = r.map((i) =>
						typeof i == "string"
							? t + i
							: typeof i == "object"
								? Object.fromEntries(
										Object.entries(i).map(([s, l]) => [t + s, l]),
									)
								: i,
					);
					return [n, o];
				})
			: e,
	ex = (e) => {
		if (e < 1) return { get: () => {}, set: () => {} };
		let t = 0,
			n = new Map(),
			r = new Map();
		const o = (i, s) => {
			(n.set(i, s), t++, t > e && ((t = 0), (r = n), (n = new Map())));
		};
		return {
			get(i) {
				let s = n.get(i);
				if (s !== void 0) return s;
				if ((s = r.get(i)) !== void 0) return (o(i, s), s);
			},
			set(i, s) {
				n.has(i) ? n.set(i, s) : o(i, s);
			},
		};
	},
	Fg = "!",
	tx = (e) => {
		const { separator: t, experimentalParseClassName: n } = e,
			r = t.length === 1,
			o = t[0],
			i = t.length,
			s = (l) => {
				const a = [];
				let u = 0,
					c = 0,
					f;
				for (let y = 0; y < l.length; y++) {
					let m = l[y];
					if (u === 0) {
						if (m === o && (r || l.slice(y, y + i) === t)) {
							(a.push(l.slice(c, y)), (c = y + i));
							continue;
						}
						if (m === "/") {
							f = y;
							continue;
						}
					}
					m === "[" ? u++ : m === "]" && u--;
				}
				const h = a.length === 0 ? l : l.substring(c),
					d = h.startsWith(Fg),
					w = d ? h.substring(1) : h,
					v = f && f > c ? f - c : void 0;
				return {
					modifiers: a,
					hasImportantModifier: d,
					baseClassName: w,
					maybePostfixModifierPosition: v,
				};
			};
		return n ? (l) => n({ className: l, parseClassName: s }) : s;
	},
	nx = (e) => {
		if (e.length <= 1) return e;
		const t = [];
		let n = [];
		return (
			e.forEach((r) => {
				r[0] === "[" ? (t.push(...n.sort(), r), (n = [])) : n.push(r);
			}),
			t.push(...n.sort()),
			t
		);
	},
	rx = (e) => ({ cache: ex(e.cacheSize), parseClassName: tx(e), ...Yw(e) }),
	ox = /\s+/,
	ix = (e, t) => {
		const {
				parseClassName: n,
				getClassGroupId: r,
				getConflictingClassGroupIds: o,
			} = t,
			i = [],
			s = e.trim().split(ox);
		let l = "";
		for (let a = s.length - 1; a >= 0; a -= 1) {
			const u = s[a],
				{
					modifiers: c,
					hasImportantModifier: f,
					baseClassName: h,
					maybePostfixModifierPosition: d,
				} = n(u);
			let w = !!d,
				v = r(w ? h.substring(0, d) : h);
			if (!v) {
				if (!w) {
					l = u + (l.length > 0 ? " " + l : l);
					continue;
				}
				if (((v = r(h)), !v)) {
					l = u + (l.length > 0 ? " " + l : l);
					continue;
				}
				w = !1;
			}
			const y = nx(c).join(":"),
				m = f ? y + Fg : y,
				p = m + v;
			if (i.includes(p)) continue;
			i.push(p);
			const g = o(v, w);
			for (let x = 0; x < g.length; ++x) {
				const C = g[x];
				i.push(m + C);
			}
			l = u + (l.length > 0 ? " " + l : l);
		}
		return l;
	};
function sx() {
	let e = 0,
		t,
		n,
		r = "";
	for (; e < arguments.length; )
		(t = arguments[e++]) && (n = zg(t)) && (r && (r += " "), (r += n));
	return r;
}
const zg = (e) => {
	if (typeof e == "string") return e;
	let t,
		n = "";
	for (let r = 0; r < e.length; r++)
		e[r] && (t = zg(e[r])) && (n && (n += " "), (n += t));
	return n;
};
function lx(e, ...t) {
	let n,
		r,
		o,
		i = s;
	function s(a) {
		const u = t.reduce((c, f) => f(c), e());
		return ((n = rx(u)), (r = n.cache.get), (o = n.cache.set), (i = l), l(a));
	}
	function l(a) {
		const u = r(a);
		if (u) return u;
		const c = ix(a, n);
		return (o(a, c), c);
	}
	return function () {
		return i(sx.apply(null, arguments));
	};
}
const ae = (e) => {
		const t = (n) => n[e] || [];
		return ((t.isThemeGetter = !0), t);
	},
	Bg = /^\[(?:([a-z-]+):)?(.+)\]$/i,
	ax = /^\d+\/\d+$/,
	ux = new Set(["px", "full", "screen"]),
	cx = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,
	dx =
		/\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,
	fx = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/,
	px = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,
	hx =
		/^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,
	nn = (e) => io(e) || ux.has(e) || ax.test(e),
	kn = (e) => Io(e, "length", Ex),
	io = (e) => !!e && !Number.isNaN(Number(e)),
	Ia = (e) => Io(e, "number", io),
	Ko = (e) => !!e && Number.isInteger(Number(e)),
	mx = (e) => e.endsWith("%") && io(e.slice(0, -1)),
	Y = (e) => Bg.test(e),
	bn = (e) => cx.test(e),
	gx = new Set(["length", "size", "percentage"]),
	vx = (e) => Io(e, gx, Ug),
	yx = (e) => Io(e, "position", Ug),
	wx = new Set(["image", "url"]),
	xx = (e) => Io(e, wx, kx),
	Sx = (e) => Io(e, "", Cx),
	Go = () => !0,
	Io = (e, t, n) => {
		const r = Bg.exec(e);
		return r
			? r[1]
				? typeof t == "string"
					? r[1] === t
					: t.has(r[1])
				: n(r[2])
			: !1;
	},
	Ex = (e) => dx.test(e) && !fx.test(e),
	Ug = () => !1,
	Cx = (e) => px.test(e),
	kx = (e) => hx.test(e),
	bx = () => {
		const e = ae("colors"),
			t = ae("spacing"),
			n = ae("blur"),
			r = ae("brightness"),
			o = ae("borderColor"),
			i = ae("borderRadius"),
			s = ae("borderSpacing"),
			l = ae("borderWidth"),
			a = ae("contrast"),
			u = ae("grayscale"),
			c = ae("hueRotate"),
			f = ae("invert"),
			h = ae("gap"),
			d = ae("gradientColorStops"),
			w = ae("gradientColorStopPositions"),
			v = ae("inset"),
			y = ae("margin"),
			m = ae("opacity"),
			p = ae("padding"),
			g = ae("saturate"),
			x = ae("scale"),
			C = ae("sepia"),
			k = ae("skew"),
			E = ae("space"),
			b = ae("translate"),
			_ = () => ["auto", "contain", "none"],
			L = () => ["auto", "hidden", "clip", "visible", "scroll"],
			j = () => ["auto", Y, t],
			D = () => [Y, t],
			M = () => ["", nn, kn],
			A = () => ["auto", io, Y],
			Q = () => [
				"bottom",
				"center",
				"left",
				"left-bottom",
				"left-top",
				"right",
				"right-bottom",
				"right-top",
				"top",
			],
			B = () => ["solid", "dashed", "dotted", "double", "none"],
			V = () => [
				"normal",
				"multiply",
				"screen",
				"overlay",
				"darken",
				"lighten",
				"color-dodge",
				"color-burn",
				"hard-light",
				"soft-light",
				"difference",
				"exclusion",
				"hue",
				"saturation",
				"color",
				"luminosity",
			],
			T = () => [
				"start",
				"end",
				"center",
				"between",
				"around",
				"evenly",
				"stretch",
			],
			N = () => ["", "0", Y],
			F = () => [
				"auto",
				"avoid",
				"all",
				"avoid-page",
				"page",
				"left",
				"right",
				"column",
			],
			H = () => [io, Y];
		return {
			cacheSize: 500,
			separator: ":",
			theme: {
				colors: [Go],
				spacing: [nn, kn],
				blur: ["none", "", bn, Y],
				brightness: H(),
				borderColor: [e],
				borderRadius: ["none", "", "full", bn, Y],
				borderSpacing: D(),
				borderWidth: M(),
				contrast: H(),
				grayscale: N(),
				hueRotate: H(),
				invert: N(),
				gap: D(),
				gradientColorStops: [e],
				gradientColorStopPositions: [mx, kn],
				inset: j(),
				margin: j(),
				opacity: H(),
				padding: D(),
				saturate: H(),
				scale: H(),
				sepia: N(),
				skew: H(),
				space: D(),
				translate: D(),
			},
			classGroups: {
				aspect: [{ aspect: ["auto", "square", "video", Y] }],
				container: ["container"],
				columns: [{ columns: [bn] }],
				"break-after": [{ "break-after": F() }],
				"break-before": [{ "break-before": F() }],
				"break-inside": [
					{ "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"] },
				],
				"box-decoration": [{ "box-decoration": ["slice", "clone"] }],
				box: [{ box: ["border", "content"] }],
				display: [
					"block",
					"inline-block",
					"inline",
					"flex",
					"inline-flex",
					"table",
					"inline-table",
					"table-caption",
					"table-cell",
					"table-column",
					"table-column-group",
					"table-footer-group",
					"table-header-group",
					"table-row-group",
					"table-row",
					"flow-root",
					"grid",
					"inline-grid",
					"contents",
					"list-item",
					"hidden",
				],
				float: [{ float: ["right", "left", "none", "start", "end"] }],
				clear: [{ clear: ["left", "right", "both", "none", "start", "end"] }],
				isolation: ["isolate", "isolation-auto"],
				"object-fit": [
					{ object: ["contain", "cover", "fill", "none", "scale-down"] },
				],
				"object-position": [{ object: [...Q(), Y] }],
				overflow: [{ overflow: L() }],
				"overflow-x": [{ "overflow-x": L() }],
				"overflow-y": [{ "overflow-y": L() }],
				overscroll: [{ overscroll: _() }],
				"overscroll-x": [{ "overscroll-x": _() }],
				"overscroll-y": [{ "overscroll-y": _() }],
				position: ["static", "fixed", "absolute", "relative", "sticky"],
				inset: [{ inset: [v] }],
				"inset-x": [{ "inset-x": [v] }],
				"inset-y": [{ "inset-y": [v] }],
				start: [{ start: [v] }],
				end: [{ end: [v] }],
				top: [{ top: [v] }],
				right: [{ right: [v] }],
				bottom: [{ bottom: [v] }],
				left: [{ left: [v] }],
				visibility: ["visible", "invisible", "collapse"],
				z: [{ z: ["auto", Ko, Y] }],
				basis: [{ basis: j() }],
				"flex-direction": [
					{ flex: ["row", "row-reverse", "col", "col-reverse"] },
				],
				"flex-wrap": [{ flex: ["wrap", "wrap-reverse", "nowrap"] }],
				flex: [{ flex: ["1", "auto", "initial", "none", Y] }],
				grow: [{ grow: N() }],
				shrink: [{ shrink: N() }],
				order: [{ order: ["first", "last", "none", Ko, Y] }],
				"grid-cols": [{ "grid-cols": [Go] }],
				"col-start-end": [{ col: ["auto", { span: ["full", Ko, Y] }, Y] }],
				"col-start": [{ "col-start": A() }],
				"col-end": [{ "col-end": A() }],
				"grid-rows": [{ "grid-rows": [Go] }],
				"row-start-end": [{ row: ["auto", { span: [Ko, Y] }, Y] }],
				"row-start": [{ "row-start": A() }],
				"row-end": [{ "row-end": A() }],
				"grid-flow": [
					{ "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"] },
				],
				"auto-cols": [{ "auto-cols": ["auto", "min", "max", "fr", Y] }],
				"auto-rows": [{ "auto-rows": ["auto", "min", "max", "fr", Y] }],
				gap: [{ gap: [h] }],
				"gap-x": [{ "gap-x": [h] }],
				"gap-y": [{ "gap-y": [h] }],
				"justify-content": [{ justify: ["normal", ...T()] }],
				"justify-items": [
					{ "justify-items": ["start", "end", "center", "stretch"] },
				],
				"justify-self": [
					{ "justify-self": ["auto", "start", "end", "center", "stretch"] },
				],
				"align-content": [{ content: ["normal", ...T(), "baseline"] }],
				"align-items": [
					{ items: ["start", "end", "center", "baseline", "stretch"] },
				],
				"align-self": [
					{ self: ["auto", "start", "end", "center", "stretch", "baseline"] },
				],
				"place-content": [{ "place-content": [...T(), "baseline"] }],
				"place-items": [
					{ "place-items": ["start", "end", "center", "baseline", "stretch"] },
				],
				"place-self": [
					{ "place-self": ["auto", "start", "end", "center", "stretch"] },
				],
				p: [{ p: [p] }],
				px: [{ px: [p] }],
				py: [{ py: [p] }],
				ps: [{ ps: [p] }],
				pe: [{ pe: [p] }],
				pt: [{ pt: [p] }],
				pr: [{ pr: [p] }],
				pb: [{ pb: [p] }],
				pl: [{ pl: [p] }],
				m: [{ m: [y] }],
				mx: [{ mx: [y] }],
				my: [{ my: [y] }],
				ms: [{ ms: [y] }],
				me: [{ me: [y] }],
				mt: [{ mt: [y] }],
				mr: [{ mr: [y] }],
				mb: [{ mb: [y] }],
				ml: [{ ml: [y] }],
				"space-x": [{ "space-x": [E] }],
				"space-x-reverse": ["space-x-reverse"],
				"space-y": [{ "space-y": [E] }],
				"space-y-reverse": ["space-y-reverse"],
				w: [{ w: ["auto", "min", "max", "fit", "svw", "lvw", "dvw", Y, t] }],
				"min-w": [{ "min-w": [Y, t, "min", "max", "fit"] }],
				"max-w": [
					{
						"max-w": [
							Y,
							t,
							"none",
							"full",
							"min",
							"max",
							"fit",
							"prose",
							{ screen: [bn] },
							bn,
						],
					},
				],
				h: [{ h: [Y, t, "auto", "min", "max", "fit", "svh", "lvh", "dvh"] }],
				"min-h": [
					{ "min-h": [Y, t, "min", "max", "fit", "svh", "lvh", "dvh"] },
				],
				"max-h": [
					{ "max-h": [Y, t, "min", "max", "fit", "svh", "lvh", "dvh"] },
				],
				size: [{ size: [Y, t, "auto", "min", "max", "fit"] }],
				"font-size": [{ text: ["base", bn, kn] }],
				"font-smoothing": ["antialiased", "subpixel-antialiased"],
				"font-style": ["italic", "not-italic"],
				"font-weight": [
					{
						font: [
							"thin",
							"extralight",
							"light",
							"normal",
							"medium",
							"semibold",
							"bold",
							"extrabold",
							"black",
							Ia,
						],
					},
				],
				"font-family": [{ font: [Go] }],
				"fvn-normal": ["normal-nums"],
				"fvn-ordinal": ["ordinal"],
				"fvn-slashed-zero": ["slashed-zero"],
				"fvn-figure": ["lining-nums", "oldstyle-nums"],
				"fvn-spacing": ["proportional-nums", "tabular-nums"],
				"fvn-fraction": ["diagonal-fractions", "stacked-fractions"],
				tracking: [
					{
						tracking: [
							"tighter",
							"tight",
							"normal",
							"wide",
							"wider",
							"widest",
							Y,
						],
					},
				],
				"line-clamp": [{ "line-clamp": ["none", io, Ia] }],
				leading: [
					{
						leading: [
							"none",
							"tight",
							"snug",
							"normal",
							"relaxed",
							"loose",
							nn,
							Y,
						],
					},
				],
				"list-image": [{ "list-image": ["none", Y] }],
				"list-style-type": [{ list: ["none", "disc", "decimal", Y] }],
				"list-style-position": [{ list: ["inside", "outside"] }],
				"placeholder-color": [{ placeholder: [e] }],
				"placeholder-opacity": [{ "placeholder-opacity": [m] }],
				"text-alignment": [
					{ text: ["left", "center", "right", "justify", "start", "end"] },
				],
				"text-color": [{ text: [e] }],
				"text-opacity": [{ "text-opacity": [m] }],
				"text-decoration": [
					"underline",
					"overline",
					"line-through",
					"no-underline",
				],
				"text-decoration-style": [{ decoration: [...B(), "wavy"] }],
				"text-decoration-thickness": [
					{ decoration: ["auto", "from-font", nn, kn] },
				],
				"underline-offset": [{ "underline-offset": ["auto", nn, Y] }],
				"text-decoration-color": [{ decoration: [e] }],
				"text-transform": [
					"uppercase",
					"lowercase",
					"capitalize",
					"normal-case",
				],
				"text-overflow": ["truncate", "text-ellipsis", "text-clip"],
				"text-wrap": [{ text: ["wrap", "nowrap", "balance", "pretty"] }],
				indent: [{ indent: D() }],
				"vertical-align": [
					{
						align: [
							"baseline",
							"top",
							"middle",
							"bottom",
							"text-top",
							"text-bottom",
							"sub",
							"super",
							Y,
						],
					},
				],
				whitespace: [
					{
						whitespace: [
							"normal",
							"nowrap",
							"pre",
							"pre-line",
							"pre-wrap",
							"break-spaces",
						],
					},
				],
				break: [{ break: ["normal", "words", "all", "keep"] }],
				hyphens: [{ hyphens: ["none", "manual", "auto"] }],
				content: [{ content: ["none", Y] }],
				"bg-attachment": [{ bg: ["fixed", "local", "scroll"] }],
				"bg-clip": [{ "bg-clip": ["border", "padding", "content", "text"] }],
				"bg-opacity": [{ "bg-opacity": [m] }],
				"bg-origin": [{ "bg-origin": ["border", "padding", "content"] }],
				"bg-position": [{ bg: [...Q(), yx] }],
				"bg-repeat": [
					{ bg: ["no-repeat", { repeat: ["", "x", "y", "round", "space"] }] },
				],
				"bg-size": [{ bg: ["auto", "cover", "contain", vx] }],
				"bg-image": [
					{
						bg: [
							"none",
							{ "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"] },
							xx,
						],
					},
				],
				"bg-color": [{ bg: [e] }],
				"gradient-from-pos": [{ from: [w] }],
				"gradient-via-pos": [{ via: [w] }],
				"gradient-to-pos": [{ to: [w] }],
				"gradient-from": [{ from: [d] }],
				"gradient-via": [{ via: [d] }],
				"gradient-to": [{ to: [d] }],
				rounded: [{ rounded: [i] }],
				"rounded-s": [{ "rounded-s": [i] }],
				"rounded-e": [{ "rounded-e": [i] }],
				"rounded-t": [{ "rounded-t": [i] }],
				"rounded-r": [{ "rounded-r": [i] }],
				"rounded-b": [{ "rounded-b": [i] }],
				"rounded-l": [{ "rounded-l": [i] }],
				"rounded-ss": [{ "rounded-ss": [i] }],
				"rounded-se": [{ "rounded-se": [i] }],
				"rounded-ee": [{ "rounded-ee": [i] }],
				"rounded-es": [{ "rounded-es": [i] }],
				"rounded-tl": [{ "rounded-tl": [i] }],
				"rounded-tr": [{ "rounded-tr": [i] }],
				"rounded-br": [{ "rounded-br": [i] }],
				"rounded-bl": [{ "rounded-bl": [i] }],
				"border-w": [{ border: [l] }],
				"border-w-x": [{ "border-x": [l] }],
				"border-w-y": [{ "border-y": [l] }],
				"border-w-s": [{ "border-s": [l] }],
				"border-w-e": [{ "border-e": [l] }],
				"border-w-t": [{ "border-t": [l] }],
				"border-w-r": [{ "border-r": [l] }],
				"border-w-b": [{ "border-b": [l] }],
				"border-w-l": [{ "border-l": [l] }],
				"border-opacity": [{ "border-opacity": [m] }],
				"border-style": [{ border: [...B(), "hidden"] }],
				"divide-x": [{ "divide-x": [l] }],
				"divide-x-reverse": ["divide-x-reverse"],
				"divide-y": [{ "divide-y": [l] }],
				"divide-y-reverse": ["divide-y-reverse"],
				"divide-opacity": [{ "divide-opacity": [m] }],
				"divide-style": [{ divide: B() }],
				"border-color": [{ border: [o] }],
				"border-color-x": [{ "border-x": [o] }],
				"border-color-y": [{ "border-y": [o] }],
				"border-color-s": [{ "border-s": [o] }],
				"border-color-e": [{ "border-e": [o] }],
				"border-color-t": [{ "border-t": [o] }],
				"border-color-r": [{ "border-r": [o] }],
				"border-color-b": [{ "border-b": [o] }],
				"border-color-l": [{ "border-l": [o] }],
				"divide-color": [{ divide: [o] }],
				"outline-style": [{ outline: ["", ...B()] }],
				"outline-offset": [{ "outline-offset": [nn, Y] }],
				"outline-w": [{ outline: [nn, kn] }],
				"outline-color": [{ outline: [e] }],
				"ring-w": [{ ring: M() }],
				"ring-w-inset": ["ring-inset"],
				"ring-color": [{ ring: [e] }],
				"ring-opacity": [{ "ring-opacity": [m] }],
				"ring-offset-w": [{ "ring-offset": [nn, kn] }],
				"ring-offset-color": [{ "ring-offset": [e] }],
				shadow: [{ shadow: ["", "inner", "none", bn, Sx] }],
				"shadow-color": [{ shadow: [Go] }],
				opacity: [{ opacity: [m] }],
				"mix-blend": [{ "mix-blend": [...V(), "plus-lighter", "plus-darker"] }],
				"bg-blend": [{ "bg-blend": V() }],
				filter: [{ filter: ["", "none"] }],
				blur: [{ blur: [n] }],
				brightness: [{ brightness: [r] }],
				contrast: [{ contrast: [a] }],
				"drop-shadow": [{ "drop-shadow": ["", "none", bn, Y] }],
				grayscale: [{ grayscale: [u] }],
				"hue-rotate": [{ "hue-rotate": [c] }],
				invert: [{ invert: [f] }],
				saturate: [{ saturate: [g] }],
				sepia: [{ sepia: [C] }],
				"backdrop-filter": [{ "backdrop-filter": ["", "none"] }],
				"backdrop-blur": [{ "backdrop-blur": [n] }],
				"backdrop-brightness": [{ "backdrop-brightness": [r] }],
				"backdrop-contrast": [{ "backdrop-contrast": [a] }],
				"backdrop-grayscale": [{ "backdrop-grayscale": [u] }],
				"backdrop-hue-rotate": [{ "backdrop-hue-rotate": [c] }],
				"backdrop-invert": [{ "backdrop-invert": [f] }],
				"backdrop-opacity": [{ "backdrop-opacity": [m] }],
				"backdrop-saturate": [{ "backdrop-saturate": [g] }],
				"backdrop-sepia": [{ "backdrop-sepia": [C] }],
				"border-collapse": [{ border: ["collapse", "separate"] }],
				"border-spacing": [{ "border-spacing": [s] }],
				"border-spacing-x": [{ "border-spacing-x": [s] }],
				"border-spacing-y": [{ "border-spacing-y": [s] }],
				"table-layout": [{ table: ["auto", "fixed"] }],
				caption: [{ caption: ["top", "bottom"] }],
				transition: [
					{
						transition: [
							"none",
							"all",
							"",
							"colors",
							"opacity",
							"shadow",
							"transform",
							Y,
						],
					},
				],
				duration: [{ duration: H() }],
				ease: [{ ease: ["linear", "in", "out", "in-out", Y] }],
				delay: [{ delay: H() }],
				animate: [{ animate: ["none", "spin", "ping", "pulse", "bounce", Y] }],
				transform: [{ transform: ["", "gpu", "none"] }],
				scale: [{ scale: [x] }],
				"scale-x": [{ "scale-x": [x] }],
				"scale-y": [{ "scale-y": [x] }],
				rotate: [{ rotate: [Ko, Y] }],
				"translate-x": [{ "translate-x": [b] }],
				"translate-y": [{ "translate-y": [b] }],
				"skew-x": [{ "skew-x": [k] }],
				"skew-y": [{ "skew-y": [k] }],
				"transform-origin": [
					{
						origin: [
							"center",
							"top",
							"top-right",
							"right",
							"bottom-right",
							"bottom",
							"bottom-left",
							"left",
							"top-left",
							Y,
						],
					},
				],
				accent: [{ accent: ["auto", e] }],
				appearance: [{ appearance: ["none", "auto"] }],
				cursor: [
					{
						cursor: [
							"auto",
							"default",
							"pointer",
							"wait",
							"text",
							"move",
							"help",
							"not-allowed",
							"none",
							"context-menu",
							"progress",
							"cell",
							"crosshair",
							"vertical-text",
							"alias",
							"copy",
							"no-drop",
							"grab",
							"grabbing",
							"all-scroll",
							"col-resize",
							"row-resize",
							"n-resize",
							"e-resize",
							"s-resize",
							"w-resize",
							"ne-resize",
							"nw-resize",
							"se-resize",
							"sw-resize",
							"ew-resize",
							"ns-resize",
							"nesw-resize",
							"nwse-resize",
							"zoom-in",
							"zoom-out",
							Y,
						],
					},
				],
				"caret-color": [{ caret: [e] }],
				"pointer-events": [{ "pointer-events": ["none", "auto"] }],
				resize: [{ resize: ["none", "y", "x", ""] }],
				"scroll-behavior": [{ scroll: ["auto", "smooth"] }],
				"scroll-m": [{ "scroll-m": D() }],
				"scroll-mx": [{ "scroll-mx": D() }],
				"scroll-my": [{ "scroll-my": D() }],
				"scroll-ms": [{ "scroll-ms": D() }],
				"scroll-me": [{ "scroll-me": D() }],
				"scroll-mt": [{ "scroll-mt": D() }],
				"scroll-mr": [{ "scroll-mr": D() }],
				"scroll-mb": [{ "scroll-mb": D() }],
				"scroll-ml": [{ "scroll-ml": D() }],
				"scroll-p": [{ "scroll-p": D() }],
				"scroll-px": [{ "scroll-px": D() }],
				"scroll-py": [{ "scroll-py": D() }],
				"scroll-ps": [{ "scroll-ps": D() }],
				"scroll-pe": [{ "scroll-pe": D() }],
				"scroll-pt": [{ "scroll-pt": D() }],
				"scroll-pr": [{ "scroll-pr": D() }],
				"scroll-pb": [{ "scroll-pb": D() }],
				"scroll-pl": [{ "scroll-pl": D() }],
				"snap-align": [{ snap: ["start", "end", "center", "align-none"] }],
				"snap-stop": [{ snap: ["normal", "always"] }],
				"snap-type": [{ snap: ["none", "x", "y", "both"] }],
				"snap-strictness": [{ snap: ["mandatory", "proximity"] }],
				touch: [{ touch: ["auto", "none", "manipulation"] }],
				"touch-x": [{ "touch-pan": ["x", "left", "right"] }],
				"touch-y": [{ "touch-pan": ["y", "up", "down"] }],
				"touch-pz": ["touch-pinch-zoom"],
				select: [{ select: ["none", "text", "all", "auto"] }],
				"will-change": [
					{ "will-change": ["auto", "scroll", "contents", "transform", Y] },
				],
				fill: [{ fill: [e, "none"] }],
				"stroke-w": [{ stroke: [nn, kn, Ia] }],
				stroke: [{ stroke: [e, "none"] }],
				sr: ["sr-only", "not-sr-only"],
				"forced-color-adjust": [{ "forced-color-adjust": ["auto", "none"] }],
			},
			conflictingClassGroups: {
				overflow: ["overflow-x", "overflow-y"],
				overscroll: ["overscroll-x", "overscroll-y"],
				inset: [
					"inset-x",
					"inset-y",
					"start",
					"end",
					"top",
					"right",
					"bottom",
					"left",
				],
				"inset-x": ["right", "left"],
				"inset-y": ["top", "bottom"],
				flex: ["basis", "grow", "shrink"],
				gap: ["gap-x", "gap-y"],
				p: ["px", "py", "ps", "pe", "pt", "pr", "pb", "pl"],
				px: ["pr", "pl"],
				py: ["pt", "pb"],
				m: ["mx", "my", "ms", "me", "mt", "mr", "mb", "ml"],
				mx: ["mr", "ml"],
				my: ["mt", "mb"],
				size: ["w", "h"],
				"font-size": ["leading"],
				"fvn-normal": [
					"fvn-ordinal",
					"fvn-slashed-zero",
					"fvn-figure",
					"fvn-spacing",
					"fvn-fraction",
				],
				"fvn-ordinal": ["fvn-normal"],
				"fvn-slashed-zero": ["fvn-normal"],
				"fvn-figure": ["fvn-normal"],
				"fvn-spacing": ["fvn-normal"],
				"fvn-fraction": ["fvn-normal"],
				"line-clamp": ["display", "overflow"],
				rounded: [
					"rounded-s",
					"rounded-e",
					"rounded-t",
					"rounded-r",
					"rounded-b",
					"rounded-l",
					"rounded-ss",
					"rounded-se",
					"rounded-ee",
					"rounded-es",
					"rounded-tl",
					"rounded-tr",
					"rounded-br",
					"rounded-bl",
				],
				"rounded-s": ["rounded-ss", "rounded-es"],
				"rounded-e": ["rounded-se", "rounded-ee"],
				"rounded-t": ["rounded-tl", "rounded-tr"],
				"rounded-r": ["rounded-tr", "rounded-br"],
				"rounded-b": ["rounded-br", "rounded-bl"],
				"rounded-l": ["rounded-tl", "rounded-bl"],
				"border-spacing": ["border-spacing-x", "border-spacing-y"],
				"border-w": [
					"border-w-s",
					"border-w-e",
					"border-w-t",
					"border-w-r",
					"border-w-b",
					"border-w-l",
				],
				"border-w-x": ["border-w-r", "border-w-l"],
				"border-w-y": ["border-w-t", "border-w-b"],
				"border-color": [
					"border-color-s",
					"border-color-e",
					"border-color-t",
					"border-color-r",
					"border-color-b",
					"border-color-l",
				],
				"border-color-x": ["border-color-r", "border-color-l"],
				"border-color-y": ["border-color-t", "border-color-b"],
				"scroll-m": [
					"scroll-mx",
					"scroll-my",
					"scroll-ms",
					"scroll-me",
					"scroll-mt",
					"scroll-mr",
					"scroll-mb",
					"scroll-ml",
				],
				"scroll-mx": ["scroll-mr", "scroll-ml"],
				"scroll-my": ["scroll-mt", "scroll-mb"],
				"scroll-p": [
					"scroll-px",
					"scroll-py",
					"scroll-ps",
					"scroll-pe",
					"scroll-pt",
					"scroll-pr",
					"scroll-pb",
					"scroll-pl",
				],
				"scroll-px": ["scroll-pr", "scroll-pl"],
				"scroll-py": ["scroll-pt", "scroll-pb"],
				touch: ["touch-x", "touch-y", "touch-pz"],
				"touch-x": ["touch"],
				"touch-y": ["touch"],
				"touch-pz": ["touch"],
			},
			conflictingClassGroupModifiers: { "font-size": ["leading"] },
		};
	},
	Px = lx(bx);
function _r(...e) {
	return Px(Mg(e));
}
const Tx = Uw,
	Wg = S.forwardRef(({ className: e, ...t }, n) =>
		P.jsx(Ng, {
			ref: n,
			className: _r(
				"fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]",
				e,
			),
			...t,
		}),
	);
Wg.displayName = Ng.displayName;
const Rx = Ww(
		"group pointer-events-auto relative flex w-full items-center justify-between space-x-4 overflow-hidden rounded-md border p-6 pr-8 shadow-lg transition-all data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:transition-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-80 data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-top-full data-[state=open]:sm:slide-in-from-bottom-full",
		{
			variants: {
				variant: {
					default: "border bg-background text-foreground",
					destructive:
						"destructive group border-destructive bg-destructive text-destructive-foreground",
				},
			},
			defaultVariants: { variant: "default" },
		},
	),
	Vg = S.forwardRef(({ className: e, variant: t, ...n }, r) =>
		P.jsx(Ag, { ref: r, className: _r(Rx({ variant: t }), e), ...n }),
	);
Vg.displayName = Ag.displayName;
const Nx = S.forwardRef(({ className: e, ...t }, n) =>
	P.jsx(Ig, {
		ref: n,
		className: _r(
			"inline-flex h-8 shrink-0 items-center justify-center rounded-md border bg-transparent px-3 text-sm font-medium ring-offset-background transition-colors group-[.destructive]:border-muted/40 hover:bg-secondary group-[.destructive]:hover:border-destructive/30 group-[.destructive]:hover:bg-destructive group-[.destructive]:hover:text-destructive-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 group-[.destructive]:focus:ring-destructive disabled:pointer-events-none disabled:opacity-50",
			e,
		),
		...t,
	}),
);
Nx.displayName = Ig.displayName;
const Hg = S.forwardRef(({ className: e, ...t }, n) =>
	P.jsx(Lg, {
		ref: n,
		className: _r(
			"absolute right-2 top-2 rounded-md p-1 text-foreground/50 opacity-0 transition-opacity group-hover:opacity-100 group-[.destructive]:text-red-300 hover:text-foreground group-[.destructive]:hover:text-red-50 focus:opacity-100 focus:outline-none focus:ring-2 group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600",
			e,
		),
		"toast-close": "",
		...t,
		children: P.jsx(Gw, { className: "h-4 w-4" }),
	}),
);
Hg.displayName = Lg.displayName;
const Qg = S.forwardRef(({ className: e, ...t }, n) =>
	P.jsx(Og, { ref: n, className: _r("text-sm font-semibold", e), ...t }),
);
Qg.displayName = Og.displayName;
const Kg = S.forwardRef(({ className: e, ...t }, n) =>
	P.jsx(_g, { ref: n, className: _r("text-sm opacity-90", e), ...t }),
);
Kg.displayName = _g.displayName;
function Ax() {
	const { toasts: e } = X1();
	return P.jsxs(Tx, {
		children: [
			e.map(function ({ id: t, title: n, description: r, action: o, ...i }) {
				return P.jsxs(
					Vg,
					{
						...i,
						children: [
							P.jsxs("div", {
								className: "grid gap-1",
								children: [
									n && P.jsx(Qg, { children: n }),
									r && P.jsx(Kg, { children: r }),
								],
							}),
							o,
							P.jsx(Hg, {}),
						],
					},
					t,
				);
			}),
			P.jsx(Wg, {}),
		],
	});
}
var Gf = ["light", "dark"],
	Ox = "(prefers-color-scheme: dark)",
	_x = S.createContext(void 0),
	Ix = { setTheme: (e) => {}, themes: [] },
	Lx = () => {
		var e;
		return (e = S.useContext(_x)) != null ? e : Ix;
	};
S.memo(
	({
		forcedTheme: e,
		storageKey: t,
		attribute: n,
		enableSystem: r,
		enableColorScheme: o,
		defaultTheme: i,
		value: s,
		attrs: l,
		nonce: a,
	}) => {
		let u = i === "system",
			c =
				n === "class"
					? `var d=document.documentElement,c=d.classList;${`c.remove(${l.map((w) => `'${w}'`).join(",")})`};`
					: `var d=document.documentElement,n='${n}',s='setAttribute';`,
			f = o
				? Gf.includes(i) && i
					? `if(e==='light'||e==='dark'||!e)d.style.colorScheme=e||'${i}'`
					: "if(e==='light'||e==='dark')d.style.colorScheme=e"
				: "",
			h = (w, v = !1, y = !0) => {
				let m = s ? s[w] : w,
					p = v ? w + "|| ''" : `'${m}'`,
					g = "";
				return (
					o &&
						y &&
						!v &&
						Gf.includes(w) &&
						(g += `d.style.colorScheme = '${w}';`),
					n === "class"
						? v || m
							? (g += `c.add(${p})`)
							: (g += "null")
						: m && (g += `d[s](n,${p})`),
					g
				);
			},
			d = e
				? `!function(){${c}${h(e)}}()`
				: r
					? `!function(){try{${c}var e=localStorage.getItem('${t}');if('system'===e||(!e&&${u})){var t='${Ox}',m=window.matchMedia(t);if(m.media!==t||m.matches){${h("dark")}}else{${h("light")}}}else if(e){${s ? `var x=${JSON.stringify(s)};` : ""}${h(s ? "x[e]" : "e", !0)}}${u ? "" : "else{" + h(i, !1, !1) + "}"}${f}}catch(e){}}()`
					: `!function(){try{${c}var e=localStorage.getItem('${t}');if(e){${s ? `var x=${JSON.stringify(s)};` : ""}${h(s ? "x[e]" : "e", !0)}}else{${h(i, !1, !1)};}${f}}catch(t){}}();`;
		return S.createElement("script", {
			nonce: a,
			dangerouslySetInnerHTML: { __html: d },
		});
	},
);
var $x = (e) => {
		switch (e) {
			case "success":
				return jx;
			case "info":
				return zx;
			case "warning":
				return Fx;
			case "error":
				return Bx;
			default:
				return null;
		}
	},
	Mx = Array(12).fill(0),
	Dx = ({ visible: e, className: t }) =>
		$.createElement(
			"div",
			{
				className: ["sonner-loading-wrapper", t].filter(Boolean).join(" "),
				"data-visible": e,
			},
			$.createElement(
				"div",
				{ className: "sonner-spinner" },
				Mx.map((n, r) =>
					$.createElement("div", {
						className: "sonner-loading-bar",
						key: `spinner-bar-${r}`,
					}),
				),
			),
		),
	jx = $.createElement(
		"svg",
		{
			xmlns: "http://www.w3.org/2000/svg",
			viewBox: "0 0 20 20",
			fill: "currentColor",
			height: "20",
			width: "20",
		},
		$.createElement("path", {
			fillRule: "evenodd",
			d: "M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z",
			clipRule: "evenodd",
		}),
	),
	Fx = $.createElement(
		"svg",
		{
			xmlns: "http://www.w3.org/2000/svg",
			viewBox: "0 0 24 24",
			fill: "currentColor",
			height: "20",
			width: "20",
		},
		$.createElement("path", {
			fillRule: "evenodd",
			d: "M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z",
			clipRule: "evenodd",
		}),
	),
	zx = $.createElement(
		"svg",
		{
			xmlns: "http://www.w3.org/2000/svg",
			viewBox: "0 0 20 20",
			fill: "currentColor",
			height: "20",
			width: "20",
		},
		$.createElement("path", {
			fillRule: "evenodd",
			d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a.75.75 0 000 1.5h.253a.25.25 0 01.244.304l-.459 2.066A1.75 1.75 0 0010.747 15H11a.75.75 0 000-1.5h-.253a.25.25 0 01-.244-.304l.459-2.066A1.75 1.75 0 009.253 9H9z",
			clipRule: "evenodd",
		}),
	),
	Bx = $.createElement(
		"svg",
		{
			xmlns: "http://www.w3.org/2000/svg",
			viewBox: "0 0 20 20",
			fill: "currentColor",
			height: "20",
			width: "20",
		},
		$.createElement("path", {
			fillRule: "evenodd",
			d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-5a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0v-4.5A.75.75 0 0110 5zm0 10a1 1 0 100-2 1 1 0 000 2z",
			clipRule: "evenodd",
		}),
	),
	Ux = $.createElement(
		"svg",
		{
			xmlns: "http://www.w3.org/2000/svg",
			width: "12",
			height: "12",
			viewBox: "0 0 24 24",
			fill: "none",
			stroke: "currentColor",
			strokeWidth: "1.5",
			strokeLinecap: "round",
			strokeLinejoin: "round",
		},
		$.createElement("line", { x1: "18", y1: "6", x2: "6", y2: "18" }),
		$.createElement("line", { x1: "6", y1: "6", x2: "18", y2: "18" }),
	),
	Wx = () => {
		let [e, t] = $.useState(document.hidden);
		return (
			$.useEffect(() => {
				let n = () => {
					t(document.hidden);
				};
				return (
					document.addEventListener("visibilitychange", n),
					() => window.removeEventListener("visibilitychange", n)
				);
			}, []),
			e
		);
	},
	zu = 1,
	Vx = class {
		constructor() {
			((this.subscribe = (e) => (
				this.subscribers.push(e),
				() => {
					let t = this.subscribers.indexOf(e);
					this.subscribers.splice(t, 1);
				}
			)),
				(this.publish = (e) => {
					this.subscribers.forEach((t) => t(e));
				}),
				(this.addToast = (e) => {
					(this.publish(e), (this.toasts = [...this.toasts, e]));
				}),
				(this.create = (e) => {
					var t;
					let { message: n, ...r } = e,
						o =
							typeof (e == null ? void 0 : e.id) == "number" ||
							((t = e.id) == null ? void 0 : t.length) > 0
								? e.id
								: zu++,
						i = this.toasts.find((l) => l.id === o),
						s = e.dismissible === void 0 ? !0 : e.dismissible;
					return (
						this.dismissedToasts.has(o) && this.dismissedToasts.delete(o),
						i
							? (this.toasts = this.toasts.map((l) =>
									l.id === o
										? (this.publish({ ...l, ...e, id: o, title: n }),
											{ ...l, ...e, id: o, dismissible: s, title: n })
										: l,
								))
							: this.addToast({ title: n, ...r, dismissible: s, id: o }),
						o
					);
				}),
				(this.dismiss = (e) => (
					this.dismissedToasts.add(e),
					e ||
						this.toasts.forEach((t) => {
							this.subscribers.forEach((n) => n({ id: t.id, dismiss: !0 }));
						}),
					this.subscribers.forEach((t) => t({ id: e, dismiss: !0 })),
					e
				)),
				(this.message = (e, t) => this.create({ ...t, message: e })),
				(this.error = (e, t) =>
					this.create({ ...t, message: e, type: "error" })),
				(this.success = (e, t) =>
					this.create({ ...t, type: "success", message: e })),
				(this.info = (e, t) => this.create({ ...t, type: "info", message: e })),
				(this.warning = (e, t) =>
					this.create({ ...t, type: "warning", message: e })),
				(this.loading = (e, t) =>
					this.create({ ...t, type: "loading", message: e })),
				(this.promise = (e, t) => {
					if (!t) return;
					let n;
					t.loading !== void 0 &&
						(n = this.create({
							...t,
							promise: e,
							type: "loading",
							message: t.loading,
							description:
								typeof t.description != "function" ? t.description : void 0,
						}));
					let r = e instanceof Promise ? e : e(),
						o = n !== void 0,
						i,
						s = r
							.then(async (a) => {
								if (((i = ["resolve", a]), $.isValidElement(a)))
									((o = !1),
										this.create({ id: n, type: "default", message: a }));
								else if (Qx(a) && !a.ok) {
									o = !1;
									let u =
											typeof t.error == "function"
												? await t.error(`HTTP error! status: ${a.status}`)
												: t.error,
										c =
											typeof t.description == "function"
												? await t.description(`HTTP error! status: ${a.status}`)
												: t.description;
									this.create({
										id: n,
										type: "error",
										message: u,
										description: c,
									});
								} else if (t.success !== void 0) {
									o = !1;
									let u =
											typeof t.success == "function"
												? await t.success(a)
												: t.success,
										c =
											typeof t.description == "function"
												? await t.description(a)
												: t.description;
									this.create({
										id: n,
										type: "success",
										message: u,
										description: c,
									});
								}
							})
							.catch(async (a) => {
								if (((i = ["reject", a]), t.error !== void 0)) {
									o = !1;
									let u =
											typeof t.error == "function" ? await t.error(a) : t.error,
										c =
											typeof t.description == "function"
												? await t.description(a)
												: t.description;
									this.create({
										id: n,
										type: "error",
										message: u,
										description: c,
									});
								}
							})
							.finally(() => {
								var a;
								(o && (this.dismiss(n), (n = void 0)),
									(a = t.finally) == null || a.call(t));
							}),
						l = () =>
							new Promise((a, u) =>
								s.then(() => (i[0] === "reject" ? u(i[1]) : a(i[1]))).catch(u),
							);
					return typeof n != "string" && typeof n != "number"
						? { unwrap: l }
						: Object.assign(n, { unwrap: l });
				}),
				(this.custom = (e, t) => {
					let n = (t == null ? void 0 : t.id) || zu++;
					return (this.create({ jsx: e(n), id: n, ...t }), n);
				}),
				(this.getActiveToasts = () =>
					this.toasts.filter((e) => !this.dismissedToasts.has(e.id))),
				(this.subscribers = []),
				(this.toasts = []),
				(this.dismissedToasts = new Set()));
		}
	},
	Ye = new Vx(),
	Hx = (e, t) => {
		let n = (t == null ? void 0 : t.id) || zu++;
		return (Ye.addToast({ title: e, ...t, id: n }), n);
	},
	Qx = (e) =>
		e &&
		typeof e == "object" &&
		"ok" in e &&
		typeof e.ok == "boolean" &&
		"status" in e &&
		typeof e.status == "number",
	Kx = Hx,
	Gx = () => Ye.toasts,
	Yx = () => Ye.getActiveToasts();
Object.assign(
	Kx,
	{
		success: Ye.success,
		info: Ye.info,
		warning: Ye.warning,
		error: Ye.error,
		custom: Ye.custom,
		message: Ye.message,
		promise: Ye.promise,
		dismiss: Ye.dismiss,
		loading: Ye.loading,
	},
	{ getHistory: Gx, getToasts: Yx },
);
function Xx(e, { insertAt: t } = {}) {
	if (typeof document > "u") return;
	let n = document.head || document.getElementsByTagName("head")[0],
		r = document.createElement("style");
	((r.type = "text/css"),
		t === "top" && n.firstChild
			? n.insertBefore(r, n.firstChild)
			: n.appendChild(r),
		r.styleSheet
			? (r.styleSheet.cssText = e)
			: r.appendChild(document.createTextNode(e)));
}
Xx(`:where(html[dir="ltr"]),:where([data-sonner-toaster][dir="ltr"]){--toast-icon-margin-start: -3px;--toast-icon-margin-end: 4px;--toast-svg-margin-start: -1px;--toast-svg-margin-end: 0px;--toast-button-margin-start: auto;--toast-button-margin-end: 0;--toast-close-button-start: 0;--toast-close-button-end: unset;--toast-close-button-transform: translate(-35%, -35%)}:where(html[dir="rtl"]),:where([data-sonner-toaster][dir="rtl"]){--toast-icon-margin-start: 4px;--toast-icon-margin-end: -3px;--toast-svg-margin-start: 0px;--toast-svg-margin-end: -1px;--toast-button-margin-start: 0;--toast-button-margin-end: auto;--toast-close-button-start: unset;--toast-close-button-end: 0;--toast-close-button-transform: translate(35%, -35%)}:where([data-sonner-toaster]){position:fixed;width:var(--width);font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;--gray1: hsl(0, 0%, 99%);--gray2: hsl(0, 0%, 97.3%);--gray3: hsl(0, 0%, 95.1%);--gray4: hsl(0, 0%, 93%);--gray5: hsl(0, 0%, 90.9%);--gray6: hsl(0, 0%, 88.7%);--gray7: hsl(0, 0%, 85.8%);--gray8: hsl(0, 0%, 78%);--gray9: hsl(0, 0%, 56.1%);--gray10: hsl(0, 0%, 52.3%);--gray11: hsl(0, 0%, 43.5%);--gray12: hsl(0, 0%, 9%);--border-radius: 8px;box-sizing:border-box;padding:0;margin:0;list-style:none;outline:none;z-index:999999999;transition:transform .4s ease}:where([data-sonner-toaster][data-lifted="true"]){transform:translateY(-10px)}@media (hover: none) and (pointer: coarse){:where([data-sonner-toaster][data-lifted="true"]){transform:none}}:where([data-sonner-toaster][data-x-position="right"]){right:var(--offset-right)}:where([data-sonner-toaster][data-x-position="left"]){left:var(--offset-left)}:where([data-sonner-toaster][data-x-position="center"]){left:50%;transform:translate(-50%)}:where([data-sonner-toaster][data-y-position="top"]){top:var(--offset-top)}:where([data-sonner-toaster][data-y-position="bottom"]){bottom:var(--offset-bottom)}:where([data-sonner-toast]){--y: translateY(100%);--lift-amount: calc(var(--lift) * var(--gap));z-index:var(--z-index);position:absolute;opacity:0;transform:var(--y);filter:blur(0);touch-action:none;transition:transform .4s,opacity .4s,height .4s,box-shadow .2s;box-sizing:border-box;outline:none;overflow-wrap:anywhere}:where([data-sonner-toast][data-styled="true"]){padding:16px;background:var(--normal-bg);border:1px solid var(--normal-border);color:var(--normal-text);border-radius:var(--border-radius);box-shadow:0 4px 12px #0000001a;width:var(--width);font-size:13px;display:flex;align-items:center;gap:6px}:where([data-sonner-toast]:focus-visible){box-shadow:0 4px 12px #0000001a,0 0 0 2px #0003}:where([data-sonner-toast][data-y-position="top"]){top:0;--y: translateY(-100%);--lift: 1;--lift-amount: calc(1 * var(--gap))}:where([data-sonner-toast][data-y-position="bottom"]){bottom:0;--y: translateY(100%);--lift: -1;--lift-amount: calc(var(--lift) * var(--gap))}:where([data-sonner-toast]) :where([data-description]){font-weight:400;line-height:1.4;color:inherit}:where([data-sonner-toast]) :where([data-title]){font-weight:500;line-height:1.5;color:inherit}:where([data-sonner-toast]) :where([data-icon]){display:flex;height:16px;width:16px;position:relative;justify-content:flex-start;align-items:center;flex-shrink:0;margin-left:var(--toast-icon-margin-start);margin-right:var(--toast-icon-margin-end)}:where([data-sonner-toast][data-promise="true"]) :where([data-icon])>svg{opacity:0;transform:scale(.8);transform-origin:center;animation:sonner-fade-in .3s ease forwards}:where([data-sonner-toast]) :where([data-icon])>*{flex-shrink:0}:where([data-sonner-toast]) :where([data-icon]) svg{margin-left:var(--toast-svg-margin-start);margin-right:var(--toast-svg-margin-end)}:where([data-sonner-toast]) :where([data-content]){display:flex;flex-direction:column;gap:2px}[data-sonner-toast][data-styled=true] [data-button]{border-radius:4px;padding-left:8px;padding-right:8px;height:24px;font-size:12px;color:var(--normal-bg);background:var(--normal-text);margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end);border:none;cursor:pointer;outline:none;display:flex;align-items:center;flex-shrink:0;transition:opacity .4s,box-shadow .2s}:where([data-sonner-toast]) :where([data-button]):focus-visible{box-shadow:0 0 0 2px #0006}:where([data-sonner-toast]) :where([data-button]):first-of-type{margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end)}:where([data-sonner-toast]) :where([data-cancel]){color:var(--normal-text);background:rgba(0,0,0,.08)}:where([data-sonner-toast][data-theme="dark"]) :where([data-cancel]){background:rgba(255,255,255,.3)}:where([data-sonner-toast]) :where([data-close-button]){position:absolute;left:var(--toast-close-button-start);right:var(--toast-close-button-end);top:0;height:20px;width:20px;display:flex;justify-content:center;align-items:center;padding:0;color:var(--gray12);border:1px solid var(--gray4);transform:var(--toast-close-button-transform);border-radius:50%;cursor:pointer;z-index:1;transition:opacity .1s,background .2s,border-color .2s}[data-sonner-toast] [data-close-button]{background:var(--gray1)}:where([data-sonner-toast]) :where([data-close-button]):focus-visible{box-shadow:0 4px 12px #0000001a,0 0 0 2px #0003}:where([data-sonner-toast]) :where([data-disabled="true"]){cursor:not-allowed}:where([data-sonner-toast]):hover :where([data-close-button]):hover{background:var(--gray2);border-color:var(--gray5)}:where([data-sonner-toast][data-swiping="true"]):before{content:"";position:absolute;left:-50%;right:-50%;height:100%;z-index:-1}:where([data-sonner-toast][data-y-position="top"][data-swiping="true"]):before{bottom:50%;transform:scaleY(3) translateY(50%)}:where([data-sonner-toast][data-y-position="bottom"][data-swiping="true"]):before{top:50%;transform:scaleY(3) translateY(-50%)}:where([data-sonner-toast][data-swiping="false"][data-removed="true"]):before{content:"";position:absolute;inset:0;transform:scaleY(2)}:where([data-sonner-toast]):after{content:"";position:absolute;left:0;height:calc(var(--gap) + 1px);bottom:100%;width:100%}:where([data-sonner-toast][data-mounted="true"]){--y: translateY(0);opacity:1}:where([data-sonner-toast][data-expanded="false"][data-front="false"]){--scale: var(--toasts-before) * .05 + 1;--y: translateY(calc(var(--lift-amount) * var(--toasts-before))) scale(calc(-1 * var(--scale)));height:var(--front-toast-height)}:where([data-sonner-toast])>*{transition:opacity .4s}:where([data-sonner-toast][data-expanded="false"][data-front="false"][data-styled="true"])>*{opacity:0}:where([data-sonner-toast][data-visible="false"]){opacity:0;pointer-events:none}:where([data-sonner-toast][data-mounted="true"][data-expanded="true"]){--y: translateY(calc(var(--lift) * var(--offset)));height:var(--initial-height)}:where([data-sonner-toast][data-removed="true"][data-front="true"][data-swipe-out="false"]){--y: translateY(calc(var(--lift) * -100%));opacity:0}:where([data-sonner-toast][data-removed="true"][data-front="false"][data-swipe-out="false"][data-expanded="true"]){--y: translateY(calc(var(--lift) * var(--offset) + var(--lift) * -100%));opacity:0}:where([data-sonner-toast][data-removed="true"][data-front="false"][data-swipe-out="false"][data-expanded="false"]){--y: translateY(40%);opacity:0;transition:transform .5s,opacity .2s}:where([data-sonner-toast][data-removed="true"][data-front="false"]):before{height:calc(var(--initial-height) + 20%)}[data-sonner-toast][data-swiping=true]{transform:var(--y) translateY(var(--swipe-amount-y, 0px)) translate(var(--swipe-amount-x, 0px));transition:none}[data-sonner-toast][data-swiped=true]{user-select:none}[data-sonner-toast][data-swipe-out=true][data-y-position=bottom],[data-sonner-toast][data-swipe-out=true][data-y-position=top]{animation-duration:.2s;animation-timing-function:ease-out;animation-fill-mode:forwards}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=left]{animation-name:swipe-out-left}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=right]{animation-name:swipe-out-right}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=up]{animation-name:swipe-out-up}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=down]{animation-name:swipe-out-down}@keyframes swipe-out-left{0%{transform:var(--y) translate(var(--swipe-amount-x));opacity:1}to{transform:var(--y) translate(calc(var(--swipe-amount-x) - 100%));opacity:0}}@keyframes swipe-out-right{0%{transform:var(--y) translate(var(--swipe-amount-x));opacity:1}to{transform:var(--y) translate(calc(var(--swipe-amount-x) + 100%));opacity:0}}@keyframes swipe-out-up{0%{transform:var(--y) translateY(var(--swipe-amount-y));opacity:1}to{transform:var(--y) translateY(calc(var(--swipe-amount-y) - 100%));opacity:0}}@keyframes swipe-out-down{0%{transform:var(--y) translateY(var(--swipe-amount-y));opacity:1}to{transform:var(--y) translateY(calc(var(--swipe-amount-y) + 100%));opacity:0}}@media (max-width: 600px){[data-sonner-toaster]{position:fixed;right:var(--mobile-offset-right);left:var(--mobile-offset-left);width:100%}[data-sonner-toaster][dir=rtl]{left:calc(var(--mobile-offset-left) * -1)}[data-sonner-toaster] [data-sonner-toast]{left:0;right:0;width:calc(100% - var(--mobile-offset-left) * 2)}[data-sonner-toaster][data-x-position=left]{left:var(--mobile-offset-left)}[data-sonner-toaster][data-y-position=bottom]{bottom:var(--mobile-offset-bottom)}[data-sonner-toaster][data-y-position=top]{top:var(--mobile-offset-top)}[data-sonner-toaster][data-x-position=center]{left:var(--mobile-offset-left);right:var(--mobile-offset-right);transform:none}}[data-sonner-toaster][data-theme=light]{--normal-bg: #fff;--normal-border: var(--gray4);--normal-text: var(--gray12);--success-bg: hsl(143, 85%, 96%);--success-border: hsl(145, 92%, 91%);--success-text: hsl(140, 100%, 27%);--info-bg: hsl(208, 100%, 97%);--info-border: hsl(221, 91%, 91%);--info-text: hsl(210, 92%, 45%);--warning-bg: hsl(49, 100%, 97%);--warning-border: hsl(49, 91%, 91%);--warning-text: hsl(31, 92%, 45%);--error-bg: hsl(359, 100%, 97%);--error-border: hsl(359, 100%, 94%);--error-text: hsl(360, 100%, 45%)}[data-sonner-toaster][data-theme=light] [data-sonner-toast][data-invert=true]{--normal-bg: #000;--normal-border: hsl(0, 0%, 20%);--normal-text: var(--gray1)}[data-sonner-toaster][data-theme=dark] [data-sonner-toast][data-invert=true]{--normal-bg: #fff;--normal-border: var(--gray3);--normal-text: var(--gray12)}[data-sonner-toaster][data-theme=dark]{--normal-bg: #000;--normal-bg-hover: hsl(0, 0%, 12%);--normal-border: hsl(0, 0%, 20%);--normal-border-hover: hsl(0, 0%, 25%);--normal-text: var(--gray1);--success-bg: hsl(150, 100%, 6%);--success-border: hsl(147, 100%, 12%);--success-text: hsl(150, 86%, 65%);--info-bg: hsl(215, 100%, 6%);--info-border: hsl(223, 100%, 12%);--info-text: hsl(216, 87%, 65%);--warning-bg: hsl(64, 100%, 6%);--warning-border: hsl(60, 100%, 12%);--warning-text: hsl(46, 87%, 65%);--error-bg: hsl(358, 76%, 10%);--error-border: hsl(357, 89%, 16%);--error-text: hsl(358, 100%, 81%)}[data-sonner-toaster][data-theme=dark] [data-sonner-toast] [data-close-button]{background:var(--normal-bg);border-color:var(--normal-border);color:var(--normal-text)}[data-sonner-toaster][data-theme=dark] [data-sonner-toast] [data-close-button]:hover{background:var(--normal-bg-hover);border-color:var(--normal-border-hover)}[data-rich-colors=true][data-sonner-toast][data-type=success],[data-rich-colors=true][data-sonner-toast][data-type=success] [data-close-button]{background:var(--success-bg);border-color:var(--success-border);color:var(--success-text)}[data-rich-colors=true][data-sonner-toast][data-type=info],[data-rich-colors=true][data-sonner-toast][data-type=info] [data-close-button]{background:var(--info-bg);border-color:var(--info-border);color:var(--info-text)}[data-rich-colors=true][data-sonner-toast][data-type=warning],[data-rich-colors=true][data-sonner-toast][data-type=warning] [data-close-button]{background:var(--warning-bg);border-color:var(--warning-border);color:var(--warning-text)}[data-rich-colors=true][data-sonner-toast][data-type=error],[data-rich-colors=true][data-sonner-toast][data-type=error] [data-close-button]{background:var(--error-bg);border-color:var(--error-border);color:var(--error-text)}.sonner-loading-wrapper{--size: 16px;height:var(--size);width:var(--size);position:absolute;inset:0;z-index:10}.sonner-loading-wrapper[data-visible=false]{transform-origin:center;animation:sonner-fade-out .2s ease forwards}.sonner-spinner{position:relative;top:50%;left:50%;height:var(--size);width:var(--size)}.sonner-loading-bar{animation:sonner-spin 1.2s linear infinite;background:var(--gray11);border-radius:6px;height:8%;left:-10%;position:absolute;top:-3.9%;width:24%}.sonner-loading-bar:nth-child(1){animation-delay:-1.2s;transform:rotate(.0001deg) translate(146%)}.sonner-loading-bar:nth-child(2){animation-delay:-1.1s;transform:rotate(30deg) translate(146%)}.sonner-loading-bar:nth-child(3){animation-delay:-1s;transform:rotate(60deg) translate(146%)}.sonner-loading-bar:nth-child(4){animation-delay:-.9s;transform:rotate(90deg) translate(146%)}.sonner-loading-bar:nth-child(5){animation-delay:-.8s;transform:rotate(120deg) translate(146%)}.sonner-loading-bar:nth-child(6){animation-delay:-.7s;transform:rotate(150deg) translate(146%)}.sonner-loading-bar:nth-child(7){animation-delay:-.6s;transform:rotate(180deg) translate(146%)}.sonner-loading-bar:nth-child(8){animation-delay:-.5s;transform:rotate(210deg) translate(146%)}.sonner-loading-bar:nth-child(9){animation-delay:-.4s;transform:rotate(240deg) translate(146%)}.sonner-loading-bar:nth-child(10){animation-delay:-.3s;transform:rotate(270deg) translate(146%)}.sonner-loading-bar:nth-child(11){animation-delay:-.2s;transform:rotate(300deg) translate(146%)}.sonner-loading-bar:nth-child(12){animation-delay:-.1s;transform:rotate(330deg) translate(146%)}@keyframes sonner-fade-in{0%{opacity:0;transform:scale(.8)}to{opacity:1;transform:scale(1)}}@keyframes sonner-fade-out{0%{opacity:1;transform:scale(1)}to{opacity:0;transform:scale(.8)}}@keyframes sonner-spin{0%{opacity:1}to{opacity:.15}}@media (prefers-reduced-motion){[data-sonner-toast],[data-sonner-toast]>*,.sonner-loading-bar{transition:none!important;animation:none!important}}.sonner-loader{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);transform-origin:center;transition:opacity .2s,transform .2s}.sonner-loader[data-visible=false]{opacity:0;transform:scale(.8) translate(-50%,-50%)}
`);
function gs(e) {
	return e.label !== void 0;
}
var qx = 3,
	Zx = "32px",
	Jx = "16px",
	Yf = 4e3,
	eS = 356,
	tS = 14,
	nS = 20,
	rS = 200;
function Nt(...e) {
	return e.filter(Boolean).join(" ");
}
function oS(e) {
	let [t, n] = e.split("-"),
		r = [];
	return (t && r.push(t), n && r.push(n), r);
}
var iS = (e) => {
	var t, n, r, o, i, s, l, a, u, c, f;
	let {
			invert: h,
			toast: d,
			unstyled: w,
			interacting: v,
			setHeights: y,
			visibleToasts: m,
			heights: p,
			index: g,
			toasts: x,
			expanded: C,
			removeToast: k,
			defaultRichColors: E,
			closeButton: b,
			style: _,
			cancelButtonStyle: L,
			actionButtonStyle: j,
			className: D = "",
			descriptionClassName: M = "",
			duration: A,
			position: Q,
			gap: B,
			loadingIcon: V,
			expandByDefault: T,
			classNames: N,
			icons: F,
			closeButtonAriaLabel: H = "Close toast",
			pauseWhenPageIsHidden: U,
		} = e,
		[q, Z] = $.useState(null),
		[fe, xe] = $.useState(null),
		[J, Ct] = $.useState(!1),
		[Ke, Ae] = $.useState(!1),
		[pt, kt] = $.useState(!1),
		[ze, Ki] = $.useState(!1),
		[Jl, Gi] = $.useState(!1),
		[ea, Do] = $.useState(0),
		[Ir, Ed] = $.useState(0),
		jo = $.useRef(d.duration || A || Yf),
		Cd = $.useRef(null),
		or = $.useRef(null),
		cy = g === 0,
		dy = g + 1 <= m,
		ht = d.type,
		Lr = d.dismissible !== !1,
		fy = d.className || "",
		py = d.descriptionClassName || "",
		Yi = $.useMemo(
			() => p.findIndex((K) => K.toastId === d.id) || 0,
			[p, d.id],
		),
		hy = $.useMemo(() => {
			var K;
			return (K = d.closeButton) != null ? K : b;
		}, [d.closeButton, b]),
		kd = $.useMemo(() => d.duration || A || Yf, [d.duration, A]),
		ta = $.useRef(0),
		$r = $.useRef(0),
		bd = $.useRef(0),
		Mr = $.useRef(null),
		[my, gy] = Q.split("-"),
		Pd = $.useMemo(
			() => p.reduce((K, ie, pe) => (pe >= Yi ? K : K + ie.height), 0),
			[p, Yi],
		),
		Td = Wx(),
		vy = d.invert || h,
		na = ht === "loading";
	(($r.current = $.useMemo(() => Yi * B + Pd, [Yi, Pd])),
		$.useEffect(() => {
			jo.current = kd;
		}, [kd]),
		$.useEffect(() => {
			Ct(!0);
		}, []),
		$.useEffect(() => {
			let K = or.current;
			if (K) {
				let ie = K.getBoundingClientRect().height;
				return (
					Ed(ie),
					y((pe) => [
						{ toastId: d.id, height: ie, position: d.position },
						...pe,
					]),
					() => y((pe) => pe.filter((bt) => bt.toastId !== d.id))
				);
			}
		}, [y, d.id]),
		$.useLayoutEffect(() => {
			if (!J) return;
			let K = or.current,
				ie = K.style.height;
			K.style.height = "auto";
			let pe = K.getBoundingClientRect().height;
			((K.style.height = ie),
				Ed(pe),
				y((bt) =>
					bt.find((Pt) => Pt.toastId === d.id)
						? bt.map((Pt) => (Pt.toastId === d.id ? { ...Pt, height: pe } : Pt))
						: [{ toastId: d.id, height: pe, position: d.position }, ...bt],
				));
		}, [J, d.title, d.description, y, d.id]));
	let xn = $.useCallback(() => {
		(Ae(!0),
			Do($r.current),
			y((K) => K.filter((ie) => ie.toastId !== d.id)),
			setTimeout(() => {
				k(d);
			}, rS));
	}, [d, k, y, $r]);
	($.useEffect(() => {
		if (
			(d.promise && ht === "loading") ||
			d.duration === 1 / 0 ||
			d.type === "loading"
		)
			return;
		let K;
		return (
			C || v || (U && Td)
				? (() => {
						if (bd.current < ta.current) {
							let ie = new Date().getTime() - ta.current;
							jo.current = jo.current - ie;
						}
						bd.current = new Date().getTime();
					})()
				: jo.current !== 1 / 0 &&
					((ta.current = new Date().getTime()),
					(K = setTimeout(() => {
						var ie;
						((ie = d.onAutoClose) == null || ie.call(d, d), xn());
					}, jo.current))),
			() => clearTimeout(K)
		);
	}, [C, v, d, ht, U, Td, xn]),
		$.useEffect(() => {
			d.delete && xn();
		}, [xn, d.delete]));
	function yy() {
		var K, ie, pe;
		return F != null && F.loading
			? $.createElement(
					"div",
					{
						className: Nt(
							N == null ? void 0 : N.loader,
							(K = d == null ? void 0 : d.classNames) == null
								? void 0
								: K.loader,
							"sonner-loader",
						),
						"data-visible": ht === "loading",
					},
					F.loading,
				)
			: V
				? $.createElement(
						"div",
						{
							className: Nt(
								N == null ? void 0 : N.loader,
								(ie = d == null ? void 0 : d.classNames) == null
									? void 0
									: ie.loader,
								"sonner-loader",
							),
							"data-visible": ht === "loading",
						},
						V,
					)
				: $.createElement(Dx, {
						className: Nt(
							N == null ? void 0 : N.loader,
							(pe = d == null ? void 0 : d.classNames) == null
								? void 0
								: pe.loader,
						),
						visible: ht === "loading",
					});
	}
	return $.createElement(
		"li",
		{
			tabIndex: 0,
			ref: or,
			className: Nt(
				D,
				fy,
				N == null ? void 0 : N.toast,
				(t = d == null ? void 0 : d.classNames) == null ? void 0 : t.toast,
				N == null ? void 0 : N.default,
				N == null ? void 0 : N[ht],
				(n = d == null ? void 0 : d.classNames) == null ? void 0 : n[ht],
			),
			"data-sonner-toast": "",
			"data-rich-colors": (r = d.richColors) != null ? r : E,
			"data-styled": !(d.jsx || d.unstyled || w),
			"data-mounted": J,
			"data-promise": !!d.promise,
			"data-swiped": Jl,
			"data-removed": Ke,
			"data-visible": dy,
			"data-y-position": my,
			"data-x-position": gy,
			"data-index": g,
			"data-front": cy,
			"data-swiping": pt,
			"data-dismissible": Lr,
			"data-type": ht,
			"data-invert": vy,
			"data-swipe-out": ze,
			"data-swipe-direction": fe,
			"data-expanded": !!(C || (T && J)),
			style: {
				"--index": g,
				"--toasts-before": g,
				"--z-index": x.length - g,
				"--offset": `${Ke ? ea : $r.current}px`,
				"--initial-height": T ? "auto" : `${Ir}px`,
				..._,
				...d.style,
			},
			onDragEnd: () => {
				(kt(!1), Z(null), (Mr.current = null));
			},
			onPointerDown: (K) => {
				na ||
					!Lr ||
					((Cd.current = new Date()),
					Do($r.current),
					K.target.setPointerCapture(K.pointerId),
					K.target.tagName !== "BUTTON" &&
						(kt(!0), (Mr.current = { x: K.clientX, y: K.clientY })));
			},
			onPointerUp: () => {
				var K, ie, pe, bt;
				if (ze || !Lr) return;
				Mr.current = null;
				let Pt = Number(
						((K = or.current) == null
							? void 0
							: K.style
									.getPropertyValue("--swipe-amount-x")
									.replace("px", "")) || 0,
					),
					Sn = Number(
						((ie = or.current) == null
							? void 0
							: ie.style
									.getPropertyValue("--swipe-amount-y")
									.replace("px", "")) || 0,
					),
					ir =
						new Date().getTime() -
						((pe = Cd.current) == null ? void 0 : pe.getTime()),
					Tt = q === "x" ? Pt : Sn,
					En = Math.abs(Tt) / ir;
				if (Math.abs(Tt) >= nS || En > 0.11) {
					(Do($r.current),
						(bt = d.onDismiss) == null || bt.call(d, d),
						xe(
							q === "x" ? (Pt > 0 ? "right" : "left") : Sn > 0 ? "down" : "up",
						),
						xn(),
						Ki(!0),
						Gi(!1));
					return;
				}
				(kt(!1), Z(null));
			},
			onPointerMove: (K) => {
				var ie, pe, bt, Pt;
				if (
					!Mr.current ||
					!Lr ||
					((ie = window.getSelection()) == null
						? void 0
						: ie.toString().length) > 0
				)
					return;
				let Sn = K.clientY - Mr.current.y,
					ir = K.clientX - Mr.current.x,
					Tt = (pe = e.swipeDirections) != null ? pe : oS(Q);
				!q &&
					(Math.abs(ir) > 1 || Math.abs(Sn) > 1) &&
					Z(Math.abs(ir) > Math.abs(Sn) ? "x" : "y");
				let En = { x: 0, y: 0 };
				(q === "y"
					? (Tt.includes("top") || Tt.includes("bottom")) &&
						((Tt.includes("top") && Sn < 0) ||
							(Tt.includes("bottom") && Sn > 0)) &&
						(En.y = Sn)
					: q === "x" &&
						(Tt.includes("left") || Tt.includes("right")) &&
						((Tt.includes("left") && ir < 0) ||
							(Tt.includes("right") && ir > 0)) &&
						(En.x = ir),
					(Math.abs(En.x) > 0 || Math.abs(En.y) > 0) && Gi(!0),
					(bt = or.current) == null ||
						bt.style.setProperty("--swipe-amount-x", `${En.x}px`),
					(Pt = or.current) == null ||
						Pt.style.setProperty("--swipe-amount-y", `${En.y}px`));
			},
		},
		hy && !d.jsx
			? $.createElement(
					"button",
					{
						"aria-label": H,
						"data-disabled": na,
						"data-close-button": !0,
						onClick:
							na || !Lr
								? () => {}
								: () => {
										var K;
										(xn(), (K = d.onDismiss) == null || K.call(d, d));
									},
						className: Nt(
							N == null ? void 0 : N.closeButton,
							(o = d == null ? void 0 : d.classNames) == null
								? void 0
								: o.closeButton,
						),
					},
					(i = F == null ? void 0 : F.close) != null ? i : Ux,
				)
			: null,
		d.jsx || S.isValidElement(d.title)
			? d.jsx
				? d.jsx
				: typeof d.title == "function"
					? d.title()
					: d.title
			: $.createElement(
					$.Fragment,
					null,
					ht || d.icon || d.promise
						? $.createElement(
								"div",
								{
									"data-icon": "",
									className: Nt(
										N == null ? void 0 : N.icon,
										(s = d == null ? void 0 : d.classNames) == null
											? void 0
											: s.icon,
									),
								},
								d.promise || (d.type === "loading" && !d.icon)
									? d.icon || yy()
									: null,
								d.type !== "loading"
									? d.icon || (F == null ? void 0 : F[ht]) || $x(ht)
									: null,
							)
						: null,
					$.createElement(
						"div",
						{
							"data-content": "",
							className: Nt(
								N == null ? void 0 : N.content,
								(l = d == null ? void 0 : d.classNames) == null
									? void 0
									: l.content,
							),
						},
						$.createElement(
							"div",
							{
								"data-title": "",
								className: Nt(
									N == null ? void 0 : N.title,
									(a = d == null ? void 0 : d.classNames) == null
										? void 0
										: a.title,
								),
							},
							typeof d.title == "function" ? d.title() : d.title,
						),
						d.description
							? $.createElement(
									"div",
									{
										"data-description": "",
										className: Nt(
											M,
											py,
											N == null ? void 0 : N.description,
											(u = d == null ? void 0 : d.classNames) == null
												? void 0
												: u.description,
										),
									},
									typeof d.description == "function"
										? d.description()
										: d.description,
								)
							: null,
					),
					S.isValidElement(d.cancel)
						? d.cancel
						: d.cancel && gs(d.cancel)
							? $.createElement(
									"button",
									{
										"data-button": !0,
										"data-cancel": !0,
										style: d.cancelButtonStyle || L,
										onClick: (K) => {
											var ie, pe;
											gs(d.cancel) &&
												Lr &&
												((pe = (ie = d.cancel).onClick) == null ||
													pe.call(ie, K),
												xn());
										},
										className: Nt(
											N == null ? void 0 : N.cancelButton,
											(c = d == null ? void 0 : d.classNames) == null
												? void 0
												: c.cancelButton,
										),
									},
									d.cancel.label,
								)
							: null,
					S.isValidElement(d.action)
						? d.action
						: d.action && gs(d.action)
							? $.createElement(
									"button",
									{
										"data-button": !0,
										"data-action": !0,
										style: d.actionButtonStyle || j,
										onClick: (K) => {
											var ie, pe;
											gs(d.action) &&
												((pe = (ie = d.action).onClick) == null ||
													pe.call(ie, K),
												!K.defaultPrevented && xn());
										},
										className: Nt(
											N == null ? void 0 : N.actionButton,
											(f = d == null ? void 0 : d.classNames) == null
												? void 0
												: f.actionButton,
										),
									},
									d.action.label,
								)
							: null,
				),
	);
};
function Xf() {
	if (typeof window > "u" || typeof document > "u") return "ltr";
	let e = document.documentElement.getAttribute("dir");
	return e === "auto" || !e
		? window.getComputedStyle(document.documentElement).direction
		: e;
}
function sS(e, t) {
	let n = {};
	return (
		[e, t].forEach((r, o) => {
			let i = o === 1,
				s = i ? "--mobile-offset" : "--offset",
				l = i ? Jx : Zx;
			function a(u) {
				["top", "right", "bottom", "left"].forEach((c) => {
					n[`${s}-${c}`] = typeof u == "number" ? `${u}px` : u;
				});
			}
			typeof r == "number" || typeof r == "string"
				? a(r)
				: typeof r == "object"
					? ["top", "right", "bottom", "left"].forEach((u) => {
							r[u] === void 0
								? (n[`${s}-${u}`] = l)
								: (n[`${s}-${u}`] =
										typeof r[u] == "number" ? `${r[u]}px` : r[u]);
						})
					: a(l);
		}),
		n
	);
}
var lS = S.forwardRef(function (e, t) {
	let {
			invert: n,
			position: r = "bottom-right",
			hotkey: o = ["altKey", "KeyT"],
			expand: i,
			closeButton: s,
			className: l,
			offset: a,
			mobileOffset: u,
			theme: c = "light",
			richColors: f,
			duration: h,
			style: d,
			visibleToasts: w = qx,
			toastOptions: v,
			dir: y = Xf(),
			gap: m = tS,
			loadingIcon: p,
			icons: g,
			containerAriaLabel: x = "Notifications",
			pauseWhenPageIsHidden: C,
		} = e,
		[k, E] = $.useState([]),
		b = $.useMemo(
			() =>
				Array.from(
					new Set(
						[r].concat(k.filter((U) => U.position).map((U) => U.position)),
					),
				),
			[k, r],
		),
		[_, L] = $.useState([]),
		[j, D] = $.useState(!1),
		[M, A] = $.useState(!1),
		[Q, B] = $.useState(
			c !== "system"
				? c
				: typeof window < "u" &&
					  window.matchMedia &&
					  window.matchMedia("(prefers-color-scheme: dark)").matches
					? "dark"
					: "light",
		),
		V = $.useRef(null),
		T = o.join("+").replace(/Key/g, "").replace(/Digit/g, ""),
		N = $.useRef(null),
		F = $.useRef(!1),
		H = $.useCallback((U) => {
			E((q) => {
				var Z;
				return (
					((Z = q.find((fe) => fe.id === U.id)) != null && Z.delete) ||
						Ye.dismiss(U.id),
					q.filter(({ id: fe }) => fe !== U.id)
				);
			});
		}, []);
	return (
		$.useEffect(
			() =>
				Ye.subscribe((U) => {
					if (U.dismiss) {
						E((q) => q.map((Z) => (Z.id === U.id ? { ...Z, delete: !0 } : Z)));
						return;
					}
					setTimeout(() => {
						lg.flushSync(() => {
							E((q) => {
								let Z = q.findIndex((fe) => fe.id === U.id);
								return Z !== -1
									? [...q.slice(0, Z), { ...q[Z], ...U }, ...q.slice(Z + 1)]
									: [U, ...q];
							});
						});
					});
				}),
			[],
		),
		$.useEffect(() => {
			if (c !== "system") {
				B(c);
				return;
			}
			if (
				(c === "system" &&
					(window.matchMedia &&
					window.matchMedia("(prefers-color-scheme: dark)").matches
						? B("dark")
						: B("light")),
				typeof window > "u")
			)
				return;
			let U = window.matchMedia("(prefers-color-scheme: dark)");
			try {
				U.addEventListener("change", ({ matches: q }) => {
					B(q ? "dark" : "light");
				});
			} catch {
				U.addListener(({ matches: Z }) => {
					try {
						B(Z ? "dark" : "light");
					} catch (fe) {
						console.error(fe);
					}
				});
			}
		}, [c]),
		$.useEffect(() => {
			k.length <= 1 && D(!1);
		}, [k]),
		$.useEffect(() => {
			let U = (q) => {
				var Z, fe;
				(o.every((xe) => q[xe] || q.code === xe) &&
					(D(!0), (Z = V.current) == null || Z.focus()),
					q.code === "Escape" &&
						(document.activeElement === V.current ||
							((fe = V.current) != null &&
								fe.contains(document.activeElement))) &&
						D(!1));
			};
			return (
				document.addEventListener("keydown", U),
				() => document.removeEventListener("keydown", U)
			);
		}, [o]),
		$.useEffect(() => {
			if (V.current)
				return () => {
					N.current &&
						(N.current.focus({ preventScroll: !0 }),
						(N.current = null),
						(F.current = !1));
				};
		}, [V.current]),
		$.createElement(
			"section",
			{
				ref: t,
				"aria-label": `${x} ${T}`,
				tabIndex: -1,
				"aria-live": "polite",
				"aria-relevant": "additions text",
				"aria-atomic": "false",
				suppressHydrationWarning: !0,
			},
			b.map((U, q) => {
				var Z;
				let [fe, xe] = U.split("-");
				return k.length
					? $.createElement(
							"ol",
							{
								key: U,
								dir: y === "auto" ? Xf() : y,
								tabIndex: -1,
								ref: V,
								className: l,
								"data-sonner-toaster": !0,
								"data-theme": Q,
								"data-y-position": fe,
								"data-lifted": j && k.length > 1 && !i,
								"data-x-position": xe,
								style: {
									"--front-toast-height": `${((Z = _[0]) == null ? void 0 : Z.height) || 0}px`,
									"--width": `${eS}px`,
									"--gap": `${m}px`,
									...d,
									...sS(a, u),
								},
								onBlur: (J) => {
									F.current &&
										!J.currentTarget.contains(J.relatedTarget) &&
										((F.current = !1),
										N.current &&
											(N.current.focus({ preventScroll: !0 }),
											(N.current = null)));
								},
								onFocus: (J) => {
									(J.target instanceof HTMLElement &&
										J.target.dataset.dismissible === "false") ||
										F.current ||
										((F.current = !0), (N.current = J.relatedTarget));
								},
								onMouseEnter: () => D(!0),
								onMouseMove: () => D(!0),
								onMouseLeave: () => {
									M || D(!1);
								},
								onDragEnd: () => D(!1),
								onPointerDown: (J) => {
									(J.target instanceof HTMLElement &&
										J.target.dataset.dismissible === "false") ||
										A(!0);
								},
								onPointerUp: () => A(!1),
							},
							k
								.filter((J) => (!J.position && q === 0) || J.position === U)
								.map((J, Ct) => {
									var Ke, Ae;
									return $.createElement(iS, {
										key: J.id,
										icons: g,
										index: Ct,
										toast: J,
										defaultRichColors: f,
										duration:
											(Ke = v == null ? void 0 : v.duration) != null ? Ke : h,
										className: v == null ? void 0 : v.className,
										descriptionClassName:
											v == null ? void 0 : v.descriptionClassName,
										invert: n,
										visibleToasts: w,
										closeButton:
											(Ae = v == null ? void 0 : v.closeButton) != null
												? Ae
												: s,
										interacting: M,
										position: U,
										style: v == null ? void 0 : v.style,
										unstyled: v == null ? void 0 : v.unstyled,
										classNames: v == null ? void 0 : v.classNames,
										cancelButtonStyle: v == null ? void 0 : v.cancelButtonStyle,
										actionButtonStyle: v == null ? void 0 : v.actionButtonStyle,
										removeToast: H,
										toasts: k.filter((pt) => pt.position == J.position),
										heights: _.filter((pt) => pt.position == J.position),
										setHeights: L,
										expandByDefault: i,
										gap: m,
										loadingIcon: p,
										expanded: j,
										pauseWhenPageIsHidden: C,
										swipeDirections: e.swipeDirections,
									});
								}),
						)
					: null;
			}),
		)
	);
});
const aS = ({ ...e }) => {
		const { theme: t = "system" } = Lx();
		return P.jsx(lS, {
			theme: t,
			className: "toaster group",
			toastOptions: {
				classNames: {
					toast:
						"group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg",
					description: "group-[.toast]:text-muted-foreground",
					actionButton:
						"group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",
					cancelButton:
						"group-[.toast]:bg-muted group-[.toast]:text-muted-foreground",
				},
			},
			...e,
		});
	},
	uS = ["top", "right", "bottom", "left"],
	Jn = Math.min,
	st = Math.max,
	ul = Math.round,
	vs = Math.floor,
	Jt = (e) => ({ x: e, y: e }),
	cS = { left: "right", right: "left", bottom: "top", top: "bottom" },
	dS = { start: "end", end: "start" };
function Bu(e, t, n) {
	return st(e, Jn(t, n));
}
function vn(e, t) {
	return typeof e == "function" ? e(t) : e;
}
function yn(e) {
	return e.split("-")[0];
}
function Lo(e) {
	return e.split("-")[1];
}
function od(e) {
	return e === "x" ? "y" : "x";
}
function id(e) {
	return e === "y" ? "height" : "width";
}
const fS = new Set(["top", "bottom"]);
function Xt(e) {
	return fS.has(yn(e)) ? "y" : "x";
}
function sd(e) {
	return od(Xt(e));
}
function pS(e, t, n) {
	n === void 0 && (n = !1);
	const r = Lo(e),
		o = sd(e),
		i = id(o);
	let s =
		o === "x"
			? r === (n ? "end" : "start")
				? "right"
				: "left"
			: r === "start"
				? "bottom"
				: "top";
	return (t.reference[i] > t.floating[i] && (s = cl(s)), [s, cl(s)]);
}
function hS(e) {
	const t = cl(e);
	return [Uu(e), t, Uu(t)];
}
function Uu(e) {
	return e.replace(/start|end/g, (t) => dS[t]);
}
const qf = ["left", "right"],
	Zf = ["right", "left"],
	mS = ["top", "bottom"],
	gS = ["bottom", "top"];
function vS(e, t, n) {
	switch (e) {
		case "top":
		case "bottom":
			return n ? (t ? Zf : qf) : t ? qf : Zf;
		case "left":
		case "right":
			return t ? mS : gS;
		default:
			return [];
	}
}
function yS(e, t, n, r) {
	const o = Lo(e);
	let i = vS(yn(e), n === "start", r);
	return (
		o && ((i = i.map((s) => s + "-" + o)), t && (i = i.concat(i.map(Uu)))),
		i
	);
}
function cl(e) {
	return e.replace(/left|right|bottom|top/g, (t) => cS[t]);
}
function wS(e) {
	return { top: 0, right: 0, bottom: 0, left: 0, ...e };
}
function Gg(e) {
	return typeof e != "number"
		? wS(e)
		: { top: e, right: e, bottom: e, left: e };
}
function dl(e) {
	const { x: t, y: n, width: r, height: o } = e;
	return {
		width: r,
		height: o,
		top: n,
		left: t,
		right: t + r,
		bottom: n + o,
		x: t,
		y: n,
	};
}
function Jf(e, t, n) {
	let { reference: r, floating: o } = e;
	const i = Xt(t),
		s = sd(t),
		l = id(s),
		a = yn(t),
		u = i === "y",
		c = r.x + r.width / 2 - o.width / 2,
		f = r.y + r.height / 2 - o.height / 2,
		h = r[l] / 2 - o[l] / 2;
	let d;
	switch (a) {
		case "top":
			d = { x: c, y: r.y - o.height };
			break;
		case "bottom":
			d = { x: c, y: r.y + r.height };
			break;
		case "right":
			d = { x: r.x + r.width, y: f };
			break;
		case "left":
			d = { x: r.x - o.width, y: f };
			break;
		default:
			d = { x: r.x, y: r.y };
	}
	switch (Lo(t)) {
		case "start":
			d[s] -= h * (n && u ? -1 : 1);
			break;
		case "end":
			d[s] += h * (n && u ? -1 : 1);
			break;
	}
	return d;
}
const xS = async (e, t, n) => {
	const {
			placement: r = "bottom",
			strategy: o = "absolute",
			middleware: i = [],
			platform: s,
		} = n,
		l = i.filter(Boolean),
		a = await (s.isRTL == null ? void 0 : s.isRTL(t));
	let u = await s.getElementRects({ reference: e, floating: t, strategy: o }),
		{ x: c, y: f } = Jf(u, r, a),
		h = r,
		d = {},
		w = 0;
	for (let v = 0; v < l.length; v++) {
		const { name: y, fn: m } = l[v],
			{
				x: p,
				y: g,
				data: x,
				reset: C,
			} = await m({
				x: c,
				y: f,
				initialPlacement: r,
				placement: h,
				strategy: o,
				middlewareData: d,
				rects: u,
				platform: s,
				elements: { reference: e, floating: t },
			});
		((c = p ?? c),
			(f = g ?? f),
			(d = { ...d, [y]: { ...d[y], ...x } }),
			C &&
				w <= 50 &&
				(w++,
				typeof C == "object" &&
					(C.placement && (h = C.placement),
					C.rects &&
						(u =
							C.rects === !0
								? await s.getElementRects({
										reference: e,
										floating: t,
										strategy: o,
									})
								: C.rects),
					({ x: c, y: f } = Jf(u, h, a))),
				(v = -1)));
	}
	return { x: c, y: f, placement: h, strategy: o, middlewareData: d };
};
async function Ai(e, t) {
	var n;
	t === void 0 && (t = {});
	const { x: r, y: o, platform: i, rects: s, elements: l, strategy: a } = e,
		{
			boundary: u = "clippingAncestors",
			rootBoundary: c = "viewport",
			elementContext: f = "floating",
			altBoundary: h = !1,
			padding: d = 0,
		} = vn(t, e),
		w = Gg(d),
		y = l[h ? (f === "floating" ? "reference" : "floating") : f],
		m = dl(
			await i.getClippingRect({
				element:
					(n = await (i.isElement == null ? void 0 : i.isElement(y))) == null ||
					n
						? y
						: y.contextElement ||
							(await (i.getDocumentElement == null
								? void 0
								: i.getDocumentElement(l.floating))),
				boundary: u,
				rootBoundary: c,
				strategy: a,
			}),
		),
		p =
			f === "floating"
				? { x: r, y: o, width: s.floating.width, height: s.floating.height }
				: s.reference,
		g = await (i.getOffsetParent == null
			? void 0
			: i.getOffsetParent(l.floating)),
		x = (await (i.isElement == null ? void 0 : i.isElement(g)))
			? (await (i.getScale == null ? void 0 : i.getScale(g))) || { x: 1, y: 1 }
			: { x: 1, y: 1 },
		C = dl(
			i.convertOffsetParentRelativeRectToViewportRelativeRect
				? await i.convertOffsetParentRelativeRectToViewportRelativeRect({
						elements: l,
						rect: p,
						offsetParent: g,
						strategy: a,
					})
				: p,
		);
	return {
		top: (m.top - C.top + w.top) / x.y,
		bottom: (C.bottom - m.bottom + w.bottom) / x.y,
		left: (m.left - C.left + w.left) / x.x,
		right: (C.right - m.right + w.right) / x.x,
	};
}
const SS = (e) => ({
		name: "arrow",
		options: e,
		async fn(t) {
			const {
					x: n,
					y: r,
					placement: o,
					rects: i,
					platform: s,
					elements: l,
					middlewareData: a,
				} = t,
				{ element: u, padding: c = 0 } = vn(e, t) || {};
			if (u == null) return {};
			const f = Gg(c),
				h = { x: n, y: r },
				d = sd(o),
				w = id(d),
				v = await s.getDimensions(u),
				y = d === "y",
				m = y ? "top" : "left",
				p = y ? "bottom" : "right",
				g = y ? "clientHeight" : "clientWidth",
				x = i.reference[w] + i.reference[d] - h[d] - i.floating[w],
				C = h[d] - i.reference[d],
				k = await (s.getOffsetParent == null ? void 0 : s.getOffsetParent(u));
			let E = k ? k[g] : 0;
			(!E || !(await (s.isElement == null ? void 0 : s.isElement(k)))) &&
				(E = l.floating[g] || i.floating[w]);
			const b = x / 2 - C / 2,
				_ = E / 2 - v[w] / 2 - 1,
				L = Jn(f[m], _),
				j = Jn(f[p], _),
				D = L,
				M = E - v[w] - j,
				A = E / 2 - v[w] / 2 + b,
				Q = Bu(D, A, M),
				B =
					!a.arrow &&
					Lo(o) != null &&
					A !== Q &&
					i.reference[w] / 2 - (A < D ? L : j) - v[w] / 2 < 0,
				V = B ? (A < D ? A - D : A - M) : 0;
			return {
				[d]: h[d] + V,
				data: {
					[d]: Q,
					centerOffset: A - Q - V,
					...(B && { alignmentOffset: V }),
				},
				reset: B,
			};
		},
	}),
	ES = function (e) {
		return (
			e === void 0 && (e = {}),
			{
				name: "flip",
				options: e,
				async fn(t) {
					var n, r;
					const {
							placement: o,
							middlewareData: i,
							rects: s,
							initialPlacement: l,
							platform: a,
							elements: u,
						} = t,
						{
							mainAxis: c = !0,
							crossAxis: f = !0,
							fallbackPlacements: h,
							fallbackStrategy: d = "bestFit",
							fallbackAxisSideDirection: w = "none",
							flipAlignment: v = !0,
							...y
						} = vn(e, t);
					if ((n = i.arrow) != null && n.alignmentOffset) return {};
					const m = yn(o),
						p = Xt(l),
						g = yn(l) === l,
						x = await (a.isRTL == null ? void 0 : a.isRTL(u.floating)),
						C = h || (g || !v ? [cl(l)] : hS(l)),
						k = w !== "none";
					!h && k && C.push(...yS(l, v, w, x));
					const E = [l, ...C],
						b = await Ai(t, y),
						_ = [];
					let L = ((r = i.flip) == null ? void 0 : r.overflows) || [];
					if ((c && _.push(b[m]), f)) {
						const A = pS(o, s, x);
						_.push(b[A[0]], b[A[1]]);
					}
					if (
						((L = [...L, { placement: o, overflows: _ }]),
						!_.every((A) => A <= 0))
					) {
						var j, D;
						const A = (((j = i.flip) == null ? void 0 : j.index) || 0) + 1,
							Q = E[A];
						if (
							Q &&
							(!(f === "alignment" ? p !== Xt(Q) : !1) ||
								L.every((T) => T.overflows[0] > 0 && Xt(T.placement) === p))
						)
							return {
								data: { index: A, overflows: L },
								reset: { placement: Q },
							};
						let B =
							(D = L.filter((V) => V.overflows[0] <= 0).sort(
								(V, T) => V.overflows[1] - T.overflows[1],
							)[0]) == null
								? void 0
								: D.placement;
						if (!B)
							switch (d) {
								case "bestFit": {
									var M;
									const V =
										(M = L.filter((T) => {
											if (k) {
												const N = Xt(T.placement);
												return N === p || N === "y";
											}
											return !0;
										})
											.map((T) => [
												T.placement,
												T.overflows
													.filter((N) => N > 0)
													.reduce((N, F) => N + F, 0),
											])
											.sort((T, N) => T[1] - N[1])[0]) == null
											? void 0
											: M[0];
									V && (B = V);
									break;
								}
								case "initialPlacement":
									B = l;
									break;
							}
						if (o !== B) return { reset: { placement: B } };
					}
					return {};
				},
			}
		);
	};
function ep(e, t) {
	return {
		top: e.top - t.height,
		right: e.right - t.width,
		bottom: e.bottom - t.height,
		left: e.left - t.width,
	};
}
function tp(e) {
	return uS.some((t) => e[t] >= 0);
}
const CS = function (e) {
		return (
			e === void 0 && (e = {}),
			{
				name: "hide",
				options: e,
				async fn(t) {
					const { rects: n } = t,
						{ strategy: r = "referenceHidden", ...o } = vn(e, t);
					switch (r) {
						case "referenceHidden": {
							const i = await Ai(t, { ...o, elementContext: "reference" }),
								s = ep(i, n.reference);
							return {
								data: { referenceHiddenOffsets: s, referenceHidden: tp(s) },
							};
						}
						case "escaped": {
							const i = await Ai(t, { ...o, altBoundary: !0 }),
								s = ep(i, n.floating);
							return { data: { escapedOffsets: s, escaped: tp(s) } };
						}
						default:
							return {};
					}
				},
			}
		);
	},
	Yg = new Set(["left", "top"]);
async function kS(e, t) {
	const { placement: n, platform: r, elements: o } = e,
		i = await (r.isRTL == null ? void 0 : r.isRTL(o.floating)),
		s = yn(n),
		l = Lo(n),
		a = Xt(n) === "y",
		u = Yg.has(s) ? -1 : 1,
		c = i && a ? -1 : 1,
		f = vn(t, e);
	let {
		mainAxis: h,
		crossAxis: d,
		alignmentAxis: w,
	} = typeof f == "number"
		? { mainAxis: f, crossAxis: 0, alignmentAxis: null }
		: {
				mainAxis: f.mainAxis || 0,
				crossAxis: f.crossAxis || 0,
				alignmentAxis: f.alignmentAxis,
			};
	return (
		l && typeof w == "number" && (d = l === "end" ? w * -1 : w),
		a ? { x: d * c, y: h * u } : { x: h * u, y: d * c }
	);
}
const bS = function (e) {
		return (
			e === void 0 && (e = 0),
			{
				name: "offset",
				options: e,
				async fn(t) {
					var n, r;
					const { x: o, y: i, placement: s, middlewareData: l } = t,
						a = await kS(t, e);
					return s === ((n = l.offset) == null ? void 0 : n.placement) &&
						(r = l.arrow) != null &&
						r.alignmentOffset
						? {}
						: { x: o + a.x, y: i + a.y, data: { ...a, placement: s } };
				},
			}
		);
	},
	PS = function (e) {
		return (
			e === void 0 && (e = {}),
			{
				name: "shift",
				options: e,
				async fn(t) {
					const { x: n, y: r, placement: o } = t,
						{
							mainAxis: i = !0,
							crossAxis: s = !1,
							limiter: l = {
								fn: (y) => {
									let { x: m, y: p } = y;
									return { x: m, y: p };
								},
							},
							...a
						} = vn(e, t),
						u = { x: n, y: r },
						c = await Ai(t, a),
						f = Xt(yn(o)),
						h = od(f);
					let d = u[h],
						w = u[f];
					if (i) {
						const y = h === "y" ? "top" : "left",
							m = h === "y" ? "bottom" : "right",
							p = d + c[y],
							g = d - c[m];
						d = Bu(p, d, g);
					}
					if (s) {
						const y = f === "y" ? "top" : "left",
							m = f === "y" ? "bottom" : "right",
							p = w + c[y],
							g = w - c[m];
						w = Bu(p, w, g);
					}
					const v = l.fn({ ...t, [h]: d, [f]: w });
					return {
						...v,
						data: { x: v.x - n, y: v.y - r, enabled: { [h]: i, [f]: s } },
					};
				},
			}
		);
	},
	TS = function (e) {
		return (
			e === void 0 && (e = {}),
			{
				options: e,
				fn(t) {
					const { x: n, y: r, placement: o, rects: i, middlewareData: s } = t,
						{ offset: l = 0, mainAxis: a = !0, crossAxis: u = !0 } = vn(e, t),
						c = { x: n, y: r },
						f = Xt(o),
						h = od(f);
					let d = c[h],
						w = c[f];
					const v = vn(l, t),
						y =
							typeof v == "number"
								? { mainAxis: v, crossAxis: 0 }
								: { mainAxis: 0, crossAxis: 0, ...v };
					if (a) {
						const g = h === "y" ? "height" : "width",
							x = i.reference[h] - i.floating[g] + y.mainAxis,
							C = i.reference[h] + i.reference[g] - y.mainAxis;
						d < x ? (d = x) : d > C && (d = C);
					}
					if (u) {
						var m, p;
						const g = h === "y" ? "width" : "height",
							x = Yg.has(yn(o)),
							C =
								i.reference[f] -
								i.floating[g] +
								((x && ((m = s.offset) == null ? void 0 : m[f])) || 0) +
								(x ? 0 : y.crossAxis),
							k =
								i.reference[f] +
								i.reference[g] +
								(x ? 0 : ((p = s.offset) == null ? void 0 : p[f]) || 0) -
								(x ? y.crossAxis : 0);
						w < C ? (w = C) : w > k && (w = k);
					}
					return { [h]: d, [f]: w };
				},
			}
		);
	},
	RS = function (e) {
		return (
			e === void 0 && (e = {}),
			{
				name: "size",
				options: e,
				async fn(t) {
					var n, r;
					const { placement: o, rects: i, platform: s, elements: l } = t,
						{ apply: a = () => {}, ...u } = vn(e, t),
						c = await Ai(t, u),
						f = yn(o),
						h = Lo(o),
						d = Xt(o) === "y",
						{ width: w, height: v } = i.floating;
					let y, m;
					f === "top" || f === "bottom"
						? ((y = f),
							(m =
								h ===
								((await (s.isRTL == null ? void 0 : s.isRTL(l.floating)))
									? "start"
									: "end")
									? "left"
									: "right"))
						: ((m = f), (y = h === "end" ? "top" : "bottom"));
					const p = v - c.top - c.bottom,
						g = w - c.left - c.right,
						x = Jn(v - c[y], p),
						C = Jn(w - c[m], g),
						k = !t.middlewareData.shift;
					let E = x,
						b = C;
					if (
						((n = t.middlewareData.shift) != null && n.enabled.x && (b = g),
						(r = t.middlewareData.shift) != null && r.enabled.y && (E = p),
						k && !h)
					) {
						const L = st(c.left, 0),
							j = st(c.right, 0),
							D = st(c.top, 0),
							M = st(c.bottom, 0);
						d
							? (b = w - 2 * (L !== 0 || j !== 0 ? L + j : st(c.left, c.right)))
							: (E =
									v - 2 * (D !== 0 || M !== 0 ? D + M : st(c.top, c.bottom)));
					}
					await a({ ...t, availableWidth: b, availableHeight: E });
					const _ = await s.getDimensions(l.floating);
					return w !== _.width || v !== _.height
						? { reset: { rects: !0 } }
						: {};
				},
			}
		);
	};
function jl() {
	return typeof window < "u";
}
function $o(e) {
	return Xg(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function ut(e) {
	var t;
	return (
		(e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) ||
		window
	);
}
function tn(e) {
	var t;
	return (t = (Xg(e) ? e.ownerDocument : e.document) || window.document) == null
		? void 0
		: t.documentElement;
}
function Xg(e) {
	return jl() ? e instanceof Node || e instanceof ut(e).Node : !1;
}
function Ut(e) {
	return jl() ? e instanceof Element || e instanceof ut(e).Element : !1;
}
function en(e) {
	return jl() ? e instanceof HTMLElement || e instanceof ut(e).HTMLElement : !1;
}
function np(e) {
	return !jl() || typeof ShadowRoot > "u"
		? !1
		: e instanceof ShadowRoot || e instanceof ut(e).ShadowRoot;
}
const NS = new Set(["inline", "contents"]);
function Hi(e) {
	const { overflow: t, overflowX: n, overflowY: r, display: o } = Wt(e);
	return /auto|scroll|overlay|hidden|clip/.test(t + r + n) && !NS.has(o);
}
const AS = new Set(["table", "td", "th"]);
function OS(e) {
	return AS.has($o(e));
}
const _S = [":popover-open", ":modal"];
function Fl(e) {
	return _S.some((t) => {
		try {
			return e.matches(t);
		} catch {
			return !1;
		}
	});
}
const IS = ["transform", "translate", "scale", "rotate", "perspective"],
	LS = ["transform", "translate", "scale", "rotate", "perspective", "filter"],
	$S = ["paint", "layout", "strict", "content"];
function ld(e) {
	const t = ad(),
		n = Ut(e) ? Wt(e) : e;
	return (
		IS.some((r) => (n[r] ? n[r] !== "none" : !1)) ||
		(n.containerType ? n.containerType !== "normal" : !1) ||
		(!t && (n.backdropFilter ? n.backdropFilter !== "none" : !1)) ||
		(!t && (n.filter ? n.filter !== "none" : !1)) ||
		LS.some((r) => (n.willChange || "").includes(r)) ||
		$S.some((r) => (n.contain || "").includes(r))
	);
}
function MS(e) {
	let t = er(e);
	for (; en(t) && !ko(t); ) {
		if (ld(t)) return t;
		if (Fl(t)) return null;
		t = er(t);
	}
	return null;
}
function ad() {
	return typeof CSS > "u" || !CSS.supports
		? !1
		: CSS.supports("-webkit-backdrop-filter", "none");
}
const DS = new Set(["html", "body", "#document"]);
function ko(e) {
	return DS.has($o(e));
}
function Wt(e) {
	return ut(e).getComputedStyle(e);
}
function zl(e) {
	return Ut(e)
		? { scrollLeft: e.scrollLeft, scrollTop: e.scrollTop }
		: { scrollLeft: e.scrollX, scrollTop: e.scrollY };
}
function er(e) {
	if ($o(e) === "html") return e;
	const t = e.assignedSlot || e.parentNode || (np(e) && e.host) || tn(e);
	return np(t) ? t.host : t;
}
function qg(e) {
	const t = er(e);
	return ko(t)
		? e.ownerDocument
			? e.ownerDocument.body
			: e.body
		: en(t) && Hi(t)
			? t
			: qg(t);
}
function Oi(e, t, n) {
	var r;
	(t === void 0 && (t = []), n === void 0 && (n = !0));
	const o = qg(e),
		i = o === ((r = e.ownerDocument) == null ? void 0 : r.body),
		s = ut(o);
	if (i) {
		const l = Wu(s);
		return t.concat(
			s,
			s.visualViewport || [],
			Hi(o) ? o : [],
			l && n ? Oi(l) : [],
		);
	}
	return t.concat(o, Oi(o, [], n));
}
function Wu(e) {
	return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null;
}
function Zg(e) {
	const t = Wt(e);
	let n = parseFloat(t.width) || 0,
		r = parseFloat(t.height) || 0;
	const o = en(e),
		i = o ? e.offsetWidth : n,
		s = o ? e.offsetHeight : r,
		l = ul(n) !== i || ul(r) !== s;
	return (l && ((n = i), (r = s)), { width: n, height: r, $: l });
}
function ud(e) {
	return Ut(e) ? e : e.contextElement;
}
function so(e) {
	const t = ud(e);
	if (!en(t)) return Jt(1);
	const n = t.getBoundingClientRect(),
		{ width: r, height: o, $: i } = Zg(t);
	let s = (i ? ul(n.width) : n.width) / r,
		l = (i ? ul(n.height) : n.height) / o;
	return (
		(!s || !Number.isFinite(s)) && (s = 1),
		(!l || !Number.isFinite(l)) && (l = 1),
		{ x: s, y: l }
	);
}
const jS = Jt(0);
function Jg(e) {
	const t = ut(e);
	return !ad() || !t.visualViewport
		? jS
		: { x: t.visualViewport.offsetLeft, y: t.visualViewport.offsetTop };
}
function FS(e, t, n) {
	return (t === void 0 && (t = !1), !n || (t && n !== ut(e)) ? !1 : t);
}
function Rr(e, t, n, r) {
	(t === void 0 && (t = !1), n === void 0 && (n = !1));
	const o = e.getBoundingClientRect(),
		i = ud(e);
	let s = Jt(1);
	t && (r ? Ut(r) && (s = so(r)) : (s = so(e)));
	const l = FS(i, n, r) ? Jg(i) : Jt(0);
	let a = (o.left + l.x) / s.x,
		u = (o.top + l.y) / s.y,
		c = o.width / s.x,
		f = o.height / s.y;
	if (i) {
		const h = ut(i),
			d = r && Ut(r) ? ut(r) : r;
		let w = h,
			v = Wu(w);
		for (; v && r && d !== w; ) {
			const y = so(v),
				m = v.getBoundingClientRect(),
				p = Wt(v),
				g = m.left + (v.clientLeft + parseFloat(p.paddingLeft)) * y.x,
				x = m.top + (v.clientTop + parseFloat(p.paddingTop)) * y.y;
			((a *= y.x),
				(u *= y.y),
				(c *= y.x),
				(f *= y.y),
				(a += g),
				(u += x),
				(w = ut(v)),
				(v = Wu(w)));
		}
	}
	return dl({ width: c, height: f, x: a, y: u });
}
function cd(e, t) {
	const n = zl(e).scrollLeft;
	return t ? t.left + n : Rr(tn(e)).left + n;
}
function ev(e, t, n) {
	n === void 0 && (n = !1);
	const r = e.getBoundingClientRect(),
		o = r.left + t.scrollLeft - (n ? 0 : cd(e, r)),
		i = r.top + t.scrollTop;
	return { x: o, y: i };
}
function zS(e) {
	let { elements: t, rect: n, offsetParent: r, strategy: o } = e;
	const i = o === "fixed",
		s = tn(r),
		l = t ? Fl(t.floating) : !1;
	if (r === s || (l && i)) return n;
	let a = { scrollLeft: 0, scrollTop: 0 },
		u = Jt(1);
	const c = Jt(0),
		f = en(r);
	if (
		(f || (!f && !i)) &&
		(($o(r) !== "body" || Hi(s)) && (a = zl(r)), en(r))
	) {
		const d = Rr(r);
		((u = so(r)), (c.x = d.x + r.clientLeft), (c.y = d.y + r.clientTop));
	}
	const h = s && !f && !i ? ev(s, a, !0) : Jt(0);
	return {
		width: n.width * u.x,
		height: n.height * u.y,
		x: n.x * u.x - a.scrollLeft * u.x + c.x + h.x,
		y: n.y * u.y - a.scrollTop * u.y + c.y + h.y,
	};
}
function BS(e) {
	return Array.from(e.getClientRects());
}
function US(e) {
	const t = tn(e),
		n = zl(e),
		r = e.ownerDocument.body,
		o = st(t.scrollWidth, t.clientWidth, r.scrollWidth, r.clientWidth),
		i = st(t.scrollHeight, t.clientHeight, r.scrollHeight, r.clientHeight);
	let s = -n.scrollLeft + cd(e);
	const l = -n.scrollTop;
	return (
		Wt(r).direction === "rtl" && (s += st(t.clientWidth, r.clientWidth) - o),
		{ width: o, height: i, x: s, y: l }
	);
}
function WS(e, t) {
	const n = ut(e),
		r = tn(e),
		o = n.visualViewport;
	let i = r.clientWidth,
		s = r.clientHeight,
		l = 0,
		a = 0;
	if (o) {
		((i = o.width), (s = o.height));
		const u = ad();
		(!u || (u && t === "fixed")) && ((l = o.offsetLeft), (a = o.offsetTop));
	}
	return { width: i, height: s, x: l, y: a };
}
const VS = new Set(["absolute", "fixed"]);
function HS(e, t) {
	const n = Rr(e, !0, t === "fixed"),
		r = n.top + e.clientTop,
		o = n.left + e.clientLeft,
		i = en(e) ? so(e) : Jt(1),
		s = e.clientWidth * i.x,
		l = e.clientHeight * i.y,
		a = o * i.x,
		u = r * i.y;
	return { width: s, height: l, x: a, y: u };
}
function rp(e, t, n) {
	let r;
	if (t === "viewport") r = WS(e, n);
	else if (t === "document") r = US(tn(e));
	else if (Ut(t)) r = HS(t, n);
	else {
		const o = Jg(e);
		r = { x: t.x - o.x, y: t.y - o.y, width: t.width, height: t.height };
	}
	return dl(r);
}
function tv(e, t) {
	const n = er(e);
	return n === t || !Ut(n) || ko(n)
		? !1
		: Wt(n).position === "fixed" || tv(n, t);
}
function QS(e, t) {
	const n = t.get(e);
	if (n) return n;
	let r = Oi(e, [], !1).filter((l) => Ut(l) && $o(l) !== "body"),
		o = null;
	const i = Wt(e).position === "fixed";
	let s = i ? er(e) : e;
	for (; Ut(s) && !ko(s); ) {
		const l = Wt(s),
			a = ld(s);
		(!a && l.position === "fixed" && (o = null),
			(
				i
					? !a && !o
					: (!a && l.position === "static" && !!o && VS.has(o.position)) ||
						(Hi(s) && !a && tv(e, s))
			)
				? (r = r.filter((c) => c !== s))
				: (o = l),
			(s = er(s)));
	}
	return (t.set(e, r), r);
}
function KS(e) {
	let { element: t, boundary: n, rootBoundary: r, strategy: o } = e;
	const s = [
			...(n === "clippingAncestors"
				? Fl(t)
					? []
					: QS(t, this._c)
				: [].concat(n)),
			r,
		],
		l = s[0],
		a = s.reduce(
			(u, c) => {
				const f = rp(t, c, o);
				return (
					(u.top = st(f.top, u.top)),
					(u.right = Jn(f.right, u.right)),
					(u.bottom = Jn(f.bottom, u.bottom)),
					(u.left = st(f.left, u.left)),
					u
				);
			},
			rp(t, l, o),
		);
	return {
		width: a.right - a.left,
		height: a.bottom - a.top,
		x: a.left,
		y: a.top,
	};
}
function GS(e) {
	const { width: t, height: n } = Zg(e);
	return { width: t, height: n };
}
function YS(e, t, n) {
	const r = en(t),
		o = tn(t),
		i = n === "fixed",
		s = Rr(e, !0, i, t);
	let l = { scrollLeft: 0, scrollTop: 0 };
	const a = Jt(0);
	function u() {
		a.x = cd(o);
	}
	if (r || (!r && !i))
		if ((($o(t) !== "body" || Hi(o)) && (l = zl(t)), r)) {
			const d = Rr(t, !0, i, t);
			((a.x = d.x + t.clientLeft), (a.y = d.y + t.clientTop));
		} else o && u();
	i && !r && o && u();
	const c = o && !r && !i ? ev(o, l) : Jt(0),
		f = s.left + l.scrollLeft - a.x - c.x,
		h = s.top + l.scrollTop - a.y - c.y;
	return { x: f, y: h, width: s.width, height: s.height };
}
function La(e) {
	return Wt(e).position === "static";
}
function op(e, t) {
	if (!en(e) || Wt(e).position === "fixed") return null;
	if (t) return t(e);
	let n = e.offsetParent;
	return (tn(e) === n && (n = n.ownerDocument.body), n);
}
function nv(e, t) {
	const n = ut(e);
	if (Fl(e)) return n;
	if (!en(e)) {
		let o = er(e);
		for (; o && !ko(o); ) {
			if (Ut(o) && !La(o)) return o;
			o = er(o);
		}
		return n;
	}
	let r = op(e, t);
	for (; r && OS(r) && La(r); ) r = op(r, t);
	return r && ko(r) && La(r) && !ld(r) ? n : r || MS(e) || n;
}
const XS = async function (e) {
	const t = this.getOffsetParent || nv,
		n = this.getDimensions,
		r = await n(e.floating);
	return {
		reference: YS(e.reference, await t(e.floating), e.strategy),
		floating: { x: 0, y: 0, width: r.width, height: r.height },
	};
};
function qS(e) {
	return Wt(e).direction === "rtl";
}
const ZS = {
	convertOffsetParentRelativeRectToViewportRelativeRect: zS,
	getDocumentElement: tn,
	getClippingRect: KS,
	getOffsetParent: nv,
	getElementRects: XS,
	getClientRects: BS,
	getDimensions: GS,
	getScale: so,
	isElement: Ut,
	isRTL: qS,
};
function rv(e, t) {
	return (
		e.x === t.x && e.y === t.y && e.width === t.width && e.height === t.height
	);
}
function JS(e, t) {
	let n = null,
		r;
	const o = tn(e);
	function i() {
		var l;
		(clearTimeout(r), (l = n) == null || l.disconnect(), (n = null));
	}
	function s(l, a) {
		(l === void 0 && (l = !1), a === void 0 && (a = 1), i());
		const u = e.getBoundingClientRect(),
			{ left: c, top: f, width: h, height: d } = u;
		if ((l || t(), !h || !d)) return;
		const w = vs(f),
			v = vs(o.clientWidth - (c + h)),
			y = vs(o.clientHeight - (f + d)),
			m = vs(c),
			g = {
				rootMargin: -w + "px " + -v + "px " + -y + "px " + -m + "px",
				threshold: st(0, Jn(1, a)) || 1,
			};
		let x = !0;
		function C(k) {
			const E = k[0].intersectionRatio;
			if (E !== a) {
				if (!x) return s();
				E
					? s(!1, E)
					: (r = setTimeout(() => {
							s(!1, 1e-7);
						}, 1e3));
			}
			(E === 1 && !rv(u, e.getBoundingClientRect()) && s(), (x = !1));
		}
		try {
			n = new IntersectionObserver(C, { ...g, root: o.ownerDocument });
		} catch {
			n = new IntersectionObserver(C, g);
		}
		n.observe(e);
	}
	return (s(!0), i);
}
function eE(e, t, n, r) {
	r === void 0 && (r = {});
	const {
			ancestorScroll: o = !0,
			ancestorResize: i = !0,
			elementResize: s = typeof ResizeObserver == "function",
			layoutShift: l = typeof IntersectionObserver == "function",
			animationFrame: a = !1,
		} = r,
		u = ud(e),
		c = o || i ? [...(u ? Oi(u) : []), ...Oi(t)] : [];
	c.forEach((m) => {
		(o && m.addEventListener("scroll", n, { passive: !0 }),
			i && m.addEventListener("resize", n));
	});
	const f = u && l ? JS(u, n) : null;
	let h = -1,
		d = null;
	s &&
		((d = new ResizeObserver((m) => {
			let [p] = m;
			(p &&
				p.target === u &&
				d &&
				(d.unobserve(t),
				cancelAnimationFrame(h),
				(h = requestAnimationFrame(() => {
					var g;
					(g = d) == null || g.observe(t);
				}))),
				n());
		})),
		u && !a && d.observe(u),
		d.observe(t));
	let w,
		v = a ? Rr(e) : null;
	a && y();
	function y() {
		const m = Rr(e);
		(v && !rv(v, m) && n(), (v = m), (w = requestAnimationFrame(y)));
	}
	return (
		n(),
		() => {
			var m;
			(c.forEach((p) => {
				(o && p.removeEventListener("scroll", n),
					i && p.removeEventListener("resize", n));
			}),
				f == null || f(),
				(m = d) == null || m.disconnect(),
				(d = null),
				a && cancelAnimationFrame(w));
		}
	);
}
const tE = bS,
	nE = PS,
	rE = ES,
	oE = RS,
	iE = CS,
	ip = SS,
	sE = TS,
	lE = (e, t, n) => {
		const r = new Map(),
			o = { platform: ZS, ...n },
			i = { ...o.platform, _c: r };
		return xS(e, t, { ...o, platform: i });
	};
var aE = typeof document < "u",
	uE = function () {},
	Is = aE ? S.useLayoutEffect : uE;
function fl(e, t) {
	if (e === t) return !0;
	if (typeof e != typeof t) return !1;
	if (typeof e == "function" && e.toString() === t.toString()) return !0;
	let n, r, o;
	if (e && t && typeof e == "object") {
		if (Array.isArray(e)) {
			if (((n = e.length), n !== t.length)) return !1;
			for (r = n; r-- !== 0; ) if (!fl(e[r], t[r])) return !1;
			return !0;
		}
		if (((o = Object.keys(e)), (n = o.length), n !== Object.keys(t).length))
			return !1;
		for (r = n; r-- !== 0; ) if (!{}.hasOwnProperty.call(t, o[r])) return !1;
		for (r = n; r-- !== 0; ) {
			const i = o[r];
			if (!(i === "_owner" && e.$$typeof) && !fl(e[i], t[i])) return !1;
		}
		return !0;
	}
	return e !== e && t !== t;
}
function ov(e) {
	return typeof window > "u"
		? 1
		: (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function sp(e, t) {
	const n = ov(e);
	return Math.round(t * n) / n;
}
function $a(e) {
	const t = S.useRef(e);
	return (
		Is(() => {
			t.current = e;
		}),
		t
	);
}
function cE(e) {
	e === void 0 && (e = {});
	const {
			placement: t = "bottom",
			strategy: n = "absolute",
			middleware: r = [],
			platform: o,
			elements: { reference: i, floating: s } = {},
			transform: l = !0,
			whileElementsMounted: a,
			open: u,
		} = e,
		[c, f] = S.useState({
			x: 0,
			y: 0,
			strategy: n,
			placement: t,
			middlewareData: {},
			isPositioned: !1,
		}),
		[h, d] = S.useState(r);
	fl(h, r) || d(r);
	const [w, v] = S.useState(null),
		[y, m] = S.useState(null),
		p = S.useCallback((T) => {
			T !== k.current && ((k.current = T), v(T));
		}, []),
		g = S.useCallback((T) => {
			T !== E.current && ((E.current = T), m(T));
		}, []),
		x = i || w,
		C = s || y,
		k = S.useRef(null),
		E = S.useRef(null),
		b = S.useRef(c),
		_ = a != null,
		L = $a(a),
		j = $a(o),
		D = $a(u),
		M = S.useCallback(() => {
			if (!k.current || !E.current) return;
			const T = { placement: t, strategy: n, middleware: h };
			(j.current && (T.platform = j.current),
				lE(k.current, E.current, T).then((N) => {
					const F = { ...N, isPositioned: D.current !== !1 };
					A.current &&
						!fl(b.current, F) &&
						((b.current = F),
						Wi.flushSync(() => {
							f(F);
						}));
				}));
		}, [h, t, n, j, D]);
	Is(() => {
		u === !1 &&
			b.current.isPositioned &&
			((b.current.isPositioned = !1), f((T) => ({ ...T, isPositioned: !1 })));
	}, [u]);
	const A = S.useRef(!1);
	(Is(
		() => (
			(A.current = !0),
			() => {
				A.current = !1;
			}
		),
		[],
	),
		Is(() => {
			if ((x && (k.current = x), C && (E.current = C), x && C)) {
				if (L.current) return L.current(x, C, M);
				M();
			}
		}, [x, C, M, L, _]));
	const Q = S.useMemo(
			() => ({ reference: k, floating: E, setReference: p, setFloating: g }),
			[p, g],
		),
		B = S.useMemo(() => ({ reference: x, floating: C }), [x, C]),
		V = S.useMemo(() => {
			const T = { position: n, left: 0, top: 0 };
			if (!B.floating) return T;
			const N = sp(B.floating, c.x),
				F = sp(B.floating, c.y);
			return l
				? {
						...T,
						transform: "translate(" + N + "px, " + F + "px)",
						...(ov(B.floating) >= 1.5 && { willChange: "transform" }),
					}
				: { position: n, left: N, top: F };
		}, [n, l, B.floating, c.x, c.y]);
	return S.useMemo(
		() => ({ ...c, update: M, refs: Q, elements: B, floatingStyles: V }),
		[c, M, Q, B, V],
	);
}
const dE = (e) => {
		function t(n) {
			return {}.hasOwnProperty.call(n, "current");
		}
		return {
			name: "arrow",
			options: e,
			fn(n) {
				const { element: r, padding: o } = typeof e == "function" ? e(n) : e;
				return r && t(r)
					? r.current != null
						? ip({ element: r.current, padding: o }).fn(n)
						: {}
					: r
						? ip({ element: r, padding: o }).fn(n)
						: {};
			},
		};
	},
	fE = (e, t) => ({ ...tE(e), options: [e, t] }),
	pE = (e, t) => ({ ...nE(e), options: [e, t] }),
	hE = (e, t) => ({ ...sE(e), options: [e, t] }),
	mE = (e, t) => ({ ...rE(e), options: [e, t] }),
	gE = (e, t) => ({ ...oE(e), options: [e, t] }),
	vE = (e, t) => ({ ...iE(e), options: [e, t] }),
	yE = (e, t) => ({ ...dE(e), options: [e, t] });
var wE = "Arrow",
	iv = S.forwardRef((e, t) => {
		const { children: n, width: r = 10, height: o = 5, ...i } = e;
		return P.jsx(rt.svg, {
			...i,
			ref: t,
			width: r,
			height: o,
			viewBox: "0 0 30 10",
			preserveAspectRatio: "none",
			children: e.asChild ? n : P.jsx("polygon", { points: "0,0 30,0 15,10" }),
		});
	});
iv.displayName = wE;
var xE = iv;
function SE(e) {
	const [t, n] = S.useState(void 0);
	return (
		Zn(() => {
			if (e) {
				n({ width: e.offsetWidth, height: e.offsetHeight });
				const r = new ResizeObserver((o) => {
					if (!Array.isArray(o) || !o.length) return;
					const i = o[0];
					let s, l;
					if ("borderBoxSize" in i) {
						const a = i.borderBoxSize,
							u = Array.isArray(a) ? a[0] : a;
						((s = u.inlineSize), (l = u.blockSize));
					} else ((s = e.offsetWidth), (l = e.offsetHeight));
					n({ width: s, height: l });
				});
				return (r.observe(e, { box: "border-box" }), () => r.unobserve(e));
			} else n(void 0);
		}, [e]),
		t
	);
}
var sv = "Popper",
	[lv, av] = $l(sv),
	[Gb, uv] = lv(sv),
	cv = "PopperAnchor",
	dv = S.forwardRef((e, t) => {
		const { __scopePopper: n, virtualRef: r, ...o } = e,
			i = uv(cv, n),
			s = S.useRef(null),
			l = Bt(t, s);
		return (
			S.useEffect(() => {
				i.onAnchorChange((r == null ? void 0 : r.current) || s.current);
			}),
			r ? null : P.jsx(rt.div, { ...o, ref: l })
		);
	});
dv.displayName = cv;
var dd = "PopperContent",
	[EE, CE] = lv(dd),
	fv = S.forwardRef((e, t) => {
		var J, Ct, Ke, Ae, pt, kt;
		const {
				__scopePopper: n,
				side: r = "bottom",
				sideOffset: o = 0,
				align: i = "center",
				alignOffset: s = 0,
				arrowPadding: l = 0,
				avoidCollisions: a = !0,
				collisionBoundary: u = [],
				collisionPadding: c = 0,
				sticky: f = "partial",
				hideWhenDetached: h = !1,
				updatePositionStrategy: d = "optimized",
				onPlaced: w,
				...v
			} = e,
			y = uv(dd, n),
			[m, p] = S.useState(null),
			g = Bt(t, (ze) => p(ze)),
			[x, C] = S.useState(null),
			k = SE(x),
			E = (k == null ? void 0 : k.width) ?? 0,
			b = (k == null ? void 0 : k.height) ?? 0,
			_ = r + (i !== "center" ? "-" + i : ""),
			L =
				typeof c == "number"
					? c
					: { top: 0, right: 0, bottom: 0, left: 0, ...c },
			j = Array.isArray(u) ? u : [u],
			D = j.length > 0,
			M = { padding: L, boundary: j.filter(bE), altBoundary: D },
			{
				refs: A,
				floatingStyles: Q,
				placement: B,
				isPositioned: V,
				middlewareData: T,
			} = cE({
				strategy: "fixed",
				placement: _,
				whileElementsMounted: (...ze) =>
					eE(...ze, { animationFrame: d === "always" }),
				elements: { reference: y.anchor },
				middleware: [
					fE({ mainAxis: o + b, alignmentAxis: s }),
					a &&
						pE({
							mainAxis: !0,
							crossAxis: !1,
							limiter: f === "partial" ? hE() : void 0,
							...M,
						}),
					a && mE({ ...M }),
					gE({
						...M,
						apply: ({
							elements: ze,
							rects: Ki,
							availableWidth: Jl,
							availableHeight: Gi,
						}) => {
							const { width: ea, height: Do } = Ki.reference,
								Ir = ze.floating.style;
							(Ir.setProperty("--radix-popper-available-width", `${Jl}px`),
								Ir.setProperty("--radix-popper-available-height", `${Gi}px`),
								Ir.setProperty("--radix-popper-anchor-width", `${ea}px`),
								Ir.setProperty("--radix-popper-anchor-height", `${Do}px`));
						},
					}),
					x && yE({ element: x, padding: l }),
					PE({ arrowWidth: E, arrowHeight: b }),
					h && vE({ strategy: "referenceHidden", ...M }),
				],
			}),
			[N, F] = mv(B),
			H = qn(w);
		Zn(() => {
			V && (H == null || H());
		}, [V, H]);
		const U = (J = T.arrow) == null ? void 0 : J.x,
			q = (Ct = T.arrow) == null ? void 0 : Ct.y,
			Z = ((Ke = T.arrow) == null ? void 0 : Ke.centerOffset) !== 0,
			[fe, xe] = S.useState();
		return (
			Zn(() => {
				m && xe(window.getComputedStyle(m).zIndex);
			}, [m]),
			P.jsx("div", {
				ref: A.setFloating,
				"data-radix-popper-content-wrapper": "",
				style: {
					...Q,
					transform: V ? Q.transform : "translate(0, -200%)",
					minWidth: "max-content",
					zIndex: fe,
					"--radix-popper-transform-origin": [
						(Ae = T.transformOrigin) == null ? void 0 : Ae.x,
						(pt = T.transformOrigin) == null ? void 0 : pt.y,
					].join(" "),
					...(((kt = T.hide) == null ? void 0 : kt.referenceHidden) && {
						visibility: "hidden",
						pointerEvents: "none",
					}),
				},
				dir: e.dir,
				children: P.jsx(EE, {
					scope: n,
					placedSide: N,
					onArrowChange: C,
					arrowX: U,
					arrowY: q,
					shouldHideArrow: Z,
					children: P.jsx(rt.div, {
						"data-side": N,
						"data-align": F,
						...v,
						ref: g,
						style: { ...v.style, animation: V ? void 0 : "none" },
					}),
				}),
			})
		);
	});
fv.displayName = dd;
var pv = "PopperArrow",
	kE = { top: "bottom", right: "left", bottom: "top", left: "right" },
	hv = S.forwardRef(function (t, n) {
		const { __scopePopper: r, ...o } = t,
			i = CE(pv, r),
			s = kE[i.placedSide];
		return P.jsx("span", {
			ref: i.onArrowChange,
			style: {
				position: "absolute",
				left: i.arrowX,
				top: i.arrowY,
				[s]: 0,
				transformOrigin: {
					top: "",
					right: "0 0",
					bottom: "center 0",
					left: "100% 0",
				}[i.placedSide],
				transform: {
					top: "translateY(100%)",
					right: "translateY(50%) rotate(90deg) translateX(-50%)",
					bottom: "rotate(180deg)",
					left: "translateY(50%) rotate(-90deg) translateX(50%)",
				}[i.placedSide],
				visibility: i.shouldHideArrow ? "hidden" : void 0,
			},
			children: P.jsx(xE, {
				...o,
				ref: n,
				style: { ...o.style, display: "block" },
			}),
		});
	});
hv.displayName = pv;
function bE(e) {
	return e !== null;
}
var PE = (e) => ({
	name: "transformOrigin",
	options: e,
	fn(t) {
		var y, m, p;
		const { placement: n, rects: r, middlewareData: o } = t,
			s = ((y = o.arrow) == null ? void 0 : y.centerOffset) !== 0,
			l = s ? 0 : e.arrowWidth,
			a = s ? 0 : e.arrowHeight,
			[u, c] = mv(n),
			f = { start: "0%", center: "50%", end: "100%" }[c],
			h = (((m = o.arrow) == null ? void 0 : m.x) ?? 0) + l / 2,
			d = (((p = o.arrow) == null ? void 0 : p.y) ?? 0) + a / 2;
		let w = "",
			v = "";
		return (
			u === "bottom"
				? ((w = s ? f : `${h}px`), (v = `${-a}px`))
				: u === "top"
					? ((w = s ? f : `${h}px`), (v = `${r.floating.height + a}px`))
					: u === "right"
						? ((w = `${-a}px`), (v = s ? f : `${d}px`))
						: u === "left" &&
							((w = `${r.floating.width + a}px`), (v = s ? f : `${d}px`)),
			{ data: { x: w, y: v } }
		);
	},
});
function mv(e) {
	const [t, n = "center"] = e.split("-");
	return [t, n];
}
var TE = dv,
	RE = fv,
	NE = hv,
	[Bl, Yb] = $l("Tooltip", [av]),
	fd = av(),
	gv = "TooltipProvider",
	AE = 700,
	lp = "tooltip.open",
	[OE, vv] = Bl(gv),
	yv = (e) => {
		const {
				__scopeTooltip: t,
				delayDuration: n = AE,
				skipDelayDuration: r = 300,
				disableHoverableContent: o = !1,
				children: i,
			} = e,
			s = S.useRef(!0),
			l = S.useRef(!1),
			a = S.useRef(0);
		return (
			S.useEffect(() => {
				const u = a.current;
				return () => window.clearTimeout(u);
			}, []),
			P.jsx(OE, {
				scope: t,
				isOpenDelayedRef: s,
				delayDuration: n,
				onOpen: S.useCallback(() => {
					(window.clearTimeout(a.current), (s.current = !1));
				}, []),
				onClose: S.useCallback(() => {
					(window.clearTimeout(a.current),
						(a.current = window.setTimeout(() => (s.current = !0), r)));
				}, [r]),
				isPointerInTransitRef: l,
				onPointerInTransitChange: S.useCallback((u) => {
					l.current = u;
				}, []),
				disableHoverableContent: o,
				children: i,
			})
		);
	};
yv.displayName = gv;
var wv = "Tooltip",
	[Xb, Ul] = Bl(wv),
	Vu = "TooltipTrigger",
	_E = S.forwardRef((e, t) => {
		const { __scopeTooltip: n, ...r } = e,
			o = Ul(Vu, n),
			i = vv(Vu, n),
			s = fd(n),
			l = S.useRef(null),
			a = Bt(t, l, o.onTriggerChange),
			u = S.useRef(!1),
			c = S.useRef(!1),
			f = S.useCallback(() => (u.current = !1), []);
		return (
			S.useEffect(
				() => () => document.removeEventListener("pointerup", f),
				[f],
			),
			P.jsx(TE, {
				asChild: !0,
				...s,
				children: P.jsx(rt.button, {
					"aria-describedby": o.open ? o.contentId : void 0,
					"data-state": o.stateAttribute,
					...r,
					ref: a,
					onPointerMove: Pe(e.onPointerMove, (h) => {
						h.pointerType !== "touch" &&
							!c.current &&
							!i.isPointerInTransitRef.current &&
							(o.onTriggerEnter(), (c.current = !0));
					}),
					onPointerLeave: Pe(e.onPointerLeave, () => {
						(o.onTriggerLeave(), (c.current = !1));
					}),
					onPointerDown: Pe(e.onPointerDown, () => {
						(o.open && o.onClose(),
							(u.current = !0),
							document.addEventListener("pointerup", f, { once: !0 }));
					}),
					onFocus: Pe(e.onFocus, () => {
						u.current || o.onOpen();
					}),
					onBlur: Pe(e.onBlur, o.onClose),
					onClick: Pe(e.onClick, o.onClose),
				}),
			})
		);
	});
_E.displayName = Vu;
var IE = "TooltipPortal",
	[qb, LE] = Bl(IE, { forceMount: void 0 }),
	bo = "TooltipContent",
	xv = S.forwardRef((e, t) => {
		const n = LE(bo, e.__scopeTooltip),
			{ forceMount: r = n.forceMount, side: o = "top", ...i } = e,
			s = Ul(bo, e.__scopeTooltip);
		return P.jsx(Jc, {
			present: r || s.open,
			children: s.disableHoverableContent
				? P.jsx(Sv, { side: o, ...i, ref: t })
				: P.jsx($E, { side: o, ...i, ref: t }),
		});
	}),
	$E = S.forwardRef((e, t) => {
		const n = Ul(bo, e.__scopeTooltip),
			r = vv(bo, e.__scopeTooltip),
			o = S.useRef(null),
			i = Bt(t, o),
			[s, l] = S.useState(null),
			{ trigger: a, onClose: u } = n,
			c = o.current,
			{ onPointerInTransitChange: f } = r,
			h = S.useCallback(() => {
				(l(null), f(!1));
			}, [f]),
			d = S.useCallback(
				(w, v) => {
					const y = w.currentTarget,
						m = { x: w.clientX, y: w.clientY },
						p = zE(m, y.getBoundingClientRect()),
						g = BE(m, p),
						x = UE(v.getBoundingClientRect()),
						C = VE([...g, ...x]);
					(l(C), f(!0));
				},
				[f],
			);
		return (
			S.useEffect(() => () => h(), [h]),
			S.useEffect(() => {
				if (a && c) {
					const w = (y) => d(y, c),
						v = (y) => d(y, a);
					return (
						a.addEventListener("pointerleave", w),
						c.addEventListener("pointerleave", v),
						() => {
							(a.removeEventListener("pointerleave", w),
								c.removeEventListener("pointerleave", v));
						}
					);
				}
			}, [a, c, d, h]),
			S.useEffect(() => {
				if (s) {
					const w = (v) => {
						const y = v.target,
							m = { x: v.clientX, y: v.clientY },
							p =
								(a == null ? void 0 : a.contains(y)) ||
								(c == null ? void 0 : c.contains(y)),
							g = !WE(m, s);
						p ? h() : g && (h(), u());
					};
					return (
						document.addEventListener("pointermove", w),
						() => document.removeEventListener("pointermove", w)
					);
				}
			}, [a, c, s, u, h]),
			P.jsx(Sv, { ...e, ref: i })
		);
	}),
	[ME, DE] = Bl(wv, { isInside: !1 }),
	jE = J1("TooltipContent"),
	Sv = S.forwardRef((e, t) => {
		const {
				__scopeTooltip: n,
				children: r,
				"aria-label": o,
				onEscapeKeyDown: i,
				onPointerDownOutside: s,
				...l
			} = e,
			a = Ul(bo, n),
			u = fd(n),
			{ onClose: c } = a;
		return (
			S.useEffect(
				() => (
					document.addEventListener(lp, c),
					() => document.removeEventListener(lp, c)
				),
				[c],
			),
			S.useEffect(() => {
				if (a.trigger) {
					const f = (h) => {
						const d = h.target;
						d != null && d.contains(a.trigger) && c();
					};
					return (
						window.addEventListener("scroll", f, { capture: !0 }),
						() => window.removeEventListener("scroll", f, { capture: !0 })
					);
				}
			}, [a.trigger, c]),
			P.jsx(Zc, {
				asChild: !0,
				disableOutsidePointerEvents: !1,
				onEscapeKeyDown: i,
				onPointerDownOutside: s,
				onFocusOutside: (f) => f.preventDefault(),
				onDismiss: c,
				children: P.jsxs(RE, {
					"data-state": a.stateAttribute,
					...u,
					...l,
					ref: t,
					style: {
						...l.style,
						"--radix-tooltip-content-transform-origin":
							"var(--radix-popper-transform-origin)",
						"--radix-tooltip-content-available-width":
							"var(--radix-popper-available-width)",
						"--radix-tooltip-content-available-height":
							"var(--radix-popper-available-height)",
						"--radix-tooltip-trigger-width": "var(--radix-popper-anchor-width)",
						"--radix-tooltip-trigger-height":
							"var(--radix-popper-anchor-height)",
					},
					children: [
						P.jsx(jE, { children: r }),
						P.jsx(ME, {
							scope: n,
							isInside: !0,
							children: P.jsx(kw, {
								id: a.contentId,
								role: "tooltip",
								children: o || r,
							}),
						}),
					],
				}),
			})
		);
	});
xv.displayName = bo;
var Ev = "TooltipArrow",
	FE = S.forwardRef((e, t) => {
		const { __scopeTooltip: n, ...r } = e,
			o = fd(n);
		return DE(Ev, n).isInside ? null : P.jsx(NE, { ...o, ...r, ref: t });
	});
FE.displayName = Ev;
function zE(e, t) {
	const n = Math.abs(t.top - e.y),
		r = Math.abs(t.bottom - e.y),
		o = Math.abs(t.right - e.x),
		i = Math.abs(t.left - e.x);
	switch (Math.min(n, r, o, i)) {
		case i:
			return "left";
		case o:
			return "right";
		case n:
			return "top";
		case r:
			return "bottom";
		default:
			throw new Error("unreachable");
	}
}
function BE(e, t, n = 5) {
	const r = [];
	switch (t) {
		case "top":
			r.push({ x: e.x - n, y: e.y + n }, { x: e.x + n, y: e.y + n });
			break;
		case "bottom":
			r.push({ x: e.x - n, y: e.y - n }, { x: e.x + n, y: e.y - n });
			break;
		case "left":
			r.push({ x: e.x + n, y: e.y - n }, { x: e.x + n, y: e.y + n });
			break;
		case "right":
			r.push({ x: e.x - n, y: e.y - n }, { x: e.x - n, y: e.y + n });
			break;
	}
	return r;
}
function UE(e) {
	const { top: t, right: n, bottom: r, left: o } = e;
	return [
		{ x: o, y: t },
		{ x: n, y: t },
		{ x: n, y: r },
		{ x: o, y: r },
	];
}
function WE(e, t) {
	const { x: n, y: r } = e;
	let o = !1;
	for (let i = 0, s = t.length - 1; i < t.length; s = i++) {
		const l = t[i],
			a = t[s],
			u = l.x,
			c = l.y,
			f = a.x,
			h = a.y;
		c > r != h > r && n < ((f - u) * (r - c)) / (h - c) + u && (o = !o);
	}
	return o;
}
function VE(e) {
	const t = e.slice();
	return (
		t.sort((n, r) =>
			n.x < r.x ? -1 : n.x > r.x ? 1 : n.y < r.y ? -1 : n.y > r.y ? 1 : 0,
		),
		HE(t)
	);
}
function HE(e) {
	if (e.length <= 1) return e.slice();
	const t = [];
	for (let r = 0; r < e.length; r++) {
		const o = e[r];
		for (; t.length >= 2; ) {
			const i = t[t.length - 1],
				s = t[t.length - 2];
			if ((i.x - s.x) * (o.y - s.y) >= (i.y - s.y) * (o.x - s.x)) t.pop();
			else break;
		}
		t.push(o);
	}
	t.pop();
	const n = [];
	for (let r = e.length - 1; r >= 0; r--) {
		const o = e[r];
		for (; n.length >= 2; ) {
			const i = n[n.length - 1],
				s = n[n.length - 2];
			if ((i.x - s.x) * (o.y - s.y) >= (i.y - s.y) * (o.x - s.x)) n.pop();
			else break;
		}
		n.push(o);
	}
	return (
		n.pop(),
		t.length === 1 && n.length === 1 && t[0].x === n[0].x && t[0].y === n[0].y
			? t
			: t.concat(n)
	);
}
var QE = yv,
	Cv = xv;
const KE = QE,
	GE = S.forwardRef(({ className: e, sideOffset: t = 4, ...n }, r) =>
		P.jsx(Cv, {
			ref: r,
			sideOffset: t,
			className: _r(
				"z-50 overflow-hidden rounded-md border bg-popover px-3 py-1.5 text-sm text-popover-foreground shadow-md animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
				e,
			),
			...n,
		}),
	);
GE.displayName = Cv.displayName;
var Wl = class {
		constructor() {
			((this.listeners = new Set()),
				(this.subscribe = this.subscribe.bind(this)));
		}
		subscribe(e) {
			return (
				this.listeners.add(e),
				this.onSubscribe(),
				() => {
					(this.listeners.delete(e), this.onUnsubscribe());
				}
			);
		}
		hasListeners() {
			return this.listeners.size > 0;
		}
		onSubscribe() {}
		onUnsubscribe() {}
	},
	Vl = typeof window > "u" || "Deno" in globalThis;
function Ot() {}
function YE(e, t) {
	return typeof e == "function" ? e(t) : e;
}
function XE(e) {
	return typeof e == "number" && e >= 0 && e !== 1 / 0;
}
function qE(e, t) {
	return Math.max(e + (t || 0) - Date.now(), 0);
}
function Hu(e, t) {
	return typeof e == "function" ? e(t) : e;
}
function ZE(e, t) {
	return typeof e == "function" ? e(t) : e;
}
function ap(e, t) {
	const {
		type: n = "all",
		exact: r,
		fetchStatus: o,
		predicate: i,
		queryKey: s,
		stale: l,
	} = e;
	if (s) {
		if (r) {
			if (t.queryHash !== pd(s, t.options)) return !1;
		} else if (!Ii(t.queryKey, s)) return !1;
	}
	if (n !== "all") {
		const a = t.isActive();
		if ((n === "active" && !a) || (n === "inactive" && a)) return !1;
	}
	return !(
		(typeof l == "boolean" && t.isStale() !== l) ||
		(o && o !== t.state.fetchStatus) ||
		(i && !i(t))
	);
}
function up(e, t) {
	const { exact: n, status: r, predicate: o, mutationKey: i } = e;
	if (i) {
		if (!t.options.mutationKey) return !1;
		if (n) {
			if (_i(t.options.mutationKey) !== _i(i)) return !1;
		} else if (!Ii(t.options.mutationKey, i)) return !1;
	}
	return !((r && t.state.status !== r) || (o && !o(t)));
}
function pd(e, t) {
	return ((t == null ? void 0 : t.queryKeyHashFn) || _i)(e);
}
function _i(e) {
	return JSON.stringify(e, (t, n) =>
		Qu(n)
			? Object.keys(n)
					.sort()
					.reduce((r, o) => ((r[o] = n[o]), r), {})
			: n,
	);
}
function Ii(e, t) {
	return e === t
		? !0
		: typeof e != typeof t
			? !1
			: e && t && typeof e == "object" && typeof t == "object"
				? Object.keys(t).every((n) => Ii(e[n], t[n]))
				: !1;
}
function kv(e, t) {
	if (e === t) return e;
	const n = cp(e) && cp(t);
	if (n || (Qu(e) && Qu(t))) {
		const r = n ? e : Object.keys(e),
			o = r.length,
			i = n ? t : Object.keys(t),
			s = i.length,
			l = n ? [] : {},
			a = new Set(r);
		let u = 0;
		for (let c = 0; c < s; c++) {
			const f = n ? c : i[c];
			((!n && a.has(f)) || n) && e[f] === void 0 && t[f] === void 0
				? ((l[f] = void 0), u++)
				: ((l[f] = kv(e[f], t[f])), l[f] === e[f] && e[f] !== void 0 && u++);
		}
		return o === s && u === o ? e : l;
	}
	return t;
}
function cp(e) {
	return Array.isArray(e) && e.length === Object.keys(e).length;
}
function Qu(e) {
	if (!dp(e)) return !1;
	const t = e.constructor;
	if (t === void 0) return !0;
	const n = t.prototype;
	return !(
		!dp(n) ||
		!n.hasOwnProperty("isPrototypeOf") ||
		Object.getPrototypeOf(e) !== Object.prototype
	);
}
function dp(e) {
	return Object.prototype.toString.call(e) === "[object Object]";
}
function JE(e) {
	return new Promise((t) => {
		setTimeout(t, e);
	});
}
function eC(e, t, n) {
	return typeof n.structuralSharing == "function"
		? n.structuralSharing(e, t)
		: n.structuralSharing !== !1
			? kv(e, t)
			: t;
}
function tC(e, t, n = 0) {
	const r = [...e, t];
	return n && r.length > n ? r.slice(1) : r;
}
function nC(e, t, n = 0) {
	const r = [t, ...e];
	return n && r.length > n ? r.slice(0, -1) : r;
}
var hd = Symbol();
function bv(e, t) {
	return !e.queryFn && t != null && t.initialPromise
		? () => t.initialPromise
		: !e.queryFn || e.queryFn === hd
			? () => Promise.reject(new Error(`Missing queryFn: '${e.queryHash}'`))
			: e.queryFn;
}
var hr,
	_n,
	ao,
	Fp,
	rC =
		((Fp = class extends Wl {
			constructor() {
				super();
				ne(this, hr);
				ne(this, _n);
				ne(this, ao);
				G(this, ao, (t) => {
					if (!Vl && window.addEventListener) {
						const n = () => t();
						return (
							window.addEventListener("visibilitychange", n, !1),
							() => {
								window.removeEventListener("visibilitychange", n);
							}
						);
					}
				});
			}
			onSubscribe() {
				R(this, _n) || this.setEventListener(R(this, ao));
			}
			onUnsubscribe() {
				var t;
				this.hasListeners() ||
					((t = R(this, _n)) == null || t.call(this), G(this, _n, void 0));
			}
			setEventListener(t) {
				var n;
				(G(this, ao, t),
					(n = R(this, _n)) == null || n.call(this),
					G(
						this,
						_n,
						t((r) => {
							typeof r == "boolean" ? this.setFocused(r) : this.onFocus();
						}),
					));
			}
			setFocused(t) {
				R(this, hr) !== t && (G(this, hr, t), this.onFocus());
			}
			onFocus() {
				const t = this.isFocused();
				this.listeners.forEach((n) => {
					n(t);
				});
			}
			isFocused() {
				var t;
				return typeof R(this, hr) == "boolean"
					? R(this, hr)
					: ((t = globalThis.document) == null ? void 0 : t.visibilityState) !==
							"hidden";
			}
		}),
		(hr = new WeakMap()),
		(_n = new WeakMap()),
		(ao = new WeakMap()),
		Fp),
	Pv = new rC(),
	uo,
	In,
	co,
	zp,
	oC =
		((zp = class extends Wl {
			constructor() {
				super();
				ne(this, uo, !0);
				ne(this, In);
				ne(this, co);
				G(this, co, (t) => {
					if (!Vl && window.addEventListener) {
						const n = () => t(!0),
							r = () => t(!1);
						return (
							window.addEventListener("online", n, !1),
							window.addEventListener("offline", r, !1),
							() => {
								(window.removeEventListener("online", n),
									window.removeEventListener("offline", r));
							}
						);
					}
				});
			}
			onSubscribe() {
				R(this, In) || this.setEventListener(R(this, co));
			}
			onUnsubscribe() {
				var t;
				this.hasListeners() ||
					((t = R(this, In)) == null || t.call(this), G(this, In, void 0));
			}
			setEventListener(t) {
				var n;
				(G(this, co, t),
					(n = R(this, In)) == null || n.call(this),
					G(this, In, t(this.setOnline.bind(this))));
			}
			setOnline(t) {
				R(this, uo) !== t &&
					(G(this, uo, t),
					this.listeners.forEach((r) => {
						r(t);
					}));
			}
			isOnline() {
				return R(this, uo);
			}
		}),
		(uo = new WeakMap()),
		(In = new WeakMap()),
		(co = new WeakMap()),
		zp),
	pl = new oC();
function iC() {
	let e, t;
	const n = new Promise((o, i) => {
		((e = o), (t = i));
	});
	((n.status = "pending"), n.catch(() => {}));
	function r(o) {
		(Object.assign(n, o), delete n.resolve, delete n.reject);
	}
	return (
		(n.resolve = (o) => {
			(r({ status: "fulfilled", value: o }), e(o));
		}),
		(n.reject = (o) => {
			(r({ status: "rejected", reason: o }), t(o));
		}),
		n
	);
}
function sC(e) {
	return Math.min(1e3 * 2 ** e, 3e4);
}
function Tv(e) {
	return (e ?? "online") === "online" ? pl.isOnline() : !0;
}
var Rv = class extends Error {
	constructor(e) {
		(super("CancelledError"),
			(this.revert = e == null ? void 0 : e.revert),
			(this.silent = e == null ? void 0 : e.silent));
	}
};
function Ma(e) {
	return e instanceof Rv;
}
function Nv(e) {
	let t = !1,
		n = 0,
		r = !1,
		o;
	const i = iC(),
		s = (v) => {
			var y;
			r || (h(new Rv(v)), (y = e.abort) == null || y.call(e));
		},
		l = () => {
			t = !0;
		},
		a = () => {
			t = !1;
		},
		u = () =>
			Pv.isFocused() &&
			(e.networkMode === "always" || pl.isOnline()) &&
			e.canRun(),
		c = () => Tv(e.networkMode) && e.canRun(),
		f = (v) => {
			var y;
			r ||
				((r = !0),
				(y = e.onSuccess) == null || y.call(e, v),
				o == null || o(),
				i.resolve(v));
		},
		h = (v) => {
			var y;
			r ||
				((r = !0),
				(y = e.onError) == null || y.call(e, v),
				o == null || o(),
				i.reject(v));
		},
		d = () =>
			new Promise((v) => {
				var y;
				((o = (m) => {
					(r || u()) && v(m);
				}),
					(y = e.onPause) == null || y.call(e));
			}).then(() => {
				var v;
				((o = void 0), r || (v = e.onContinue) == null || v.call(e));
			}),
		w = () => {
			if (r) return;
			let v;
			const y = n === 0 ? e.initialPromise : void 0;
			try {
				v = y ?? e.fn();
			} catch (m) {
				v = Promise.reject(m);
			}
			Promise.resolve(v)
				.then(f)
				.catch((m) => {
					var k;
					if (r) return;
					const p = e.retry ?? (Vl ? 0 : 3),
						g = e.retryDelay ?? sC,
						x = typeof g == "function" ? g(n, m) : g,
						C =
							p === !0 ||
							(typeof p == "number" && n < p) ||
							(typeof p == "function" && p(n, m));
					if (t || !C) {
						h(m);
						return;
					}
					(n++,
						(k = e.onFail) == null || k.call(e, n, m),
						JE(x)
							.then(() => (u() ? void 0 : d()))
							.then(() => {
								t ? h(m) : w();
							}));
				});
		};
	return {
		promise: i,
		cancel: s,
		continue: () => (o == null || o(), i),
		cancelRetry: l,
		continueRetry: a,
		canStart: c,
		start: () => (c() ? w() : d().then(w), i),
	};
}
var lC = (e) => setTimeout(e, 0);
function aC() {
	let e = [],
		t = 0,
		n = (l) => {
			l();
		},
		r = (l) => {
			l();
		},
		o = lC;
	const i = (l) => {
			t
				? e.push(l)
				: o(() => {
						n(l);
					});
		},
		s = () => {
			const l = e;
			((e = []),
				l.length &&
					o(() => {
						r(() => {
							l.forEach((a) => {
								n(a);
							});
						});
					}));
		};
	return {
		batch: (l) => {
			let a;
			t++;
			try {
				a = l();
			} finally {
				(t--, t || s());
			}
			return a;
		},
		batchCalls:
			(l) =>
			(...a) => {
				i(() => {
					l(...a);
				});
			},
		schedule: i,
		setNotifyFunction: (l) => {
			n = l;
		},
		setBatchNotifyFunction: (l) => {
			r = l;
		},
		setScheduler: (l) => {
			o = l;
		},
	};
}
var We = aC(),
	mr,
	Bp,
	Av =
		((Bp = class {
			constructor() {
				ne(this, mr);
			}
			destroy() {
				this.clearGcTimeout();
			}
			scheduleGc() {
				(this.clearGcTimeout(),
					XE(this.gcTime) &&
						G(
							this,
							mr,
							setTimeout(() => {
								this.optionalRemove();
							}, this.gcTime),
						));
			}
			updateGcTime(e) {
				this.gcTime = Math.max(
					this.gcTime || 0,
					e ?? (Vl ? 1 / 0 : 5 * 60 * 1e3),
				);
			}
			clearGcTimeout() {
				R(this, mr) && (clearTimeout(R(this, mr)), G(this, mr, void 0));
			}
		}),
		(mr = new WeakMap()),
		Bp),
	fo,
	gr,
	mt,
	vr,
	De,
	Mi,
	yr,
	_t,
	rn,
	Up,
	uC =
		((Up = class extends Av {
			constructor(t) {
				super();
				ne(this, _t);
				ne(this, fo);
				ne(this, gr);
				ne(this, mt);
				ne(this, vr);
				ne(this, De);
				ne(this, Mi);
				ne(this, yr);
				(G(this, yr, !1),
					G(this, Mi, t.defaultOptions),
					this.setOptions(t.options),
					(this.observers = []),
					G(this, vr, t.client),
					G(this, mt, R(this, vr).getQueryCache()),
					(this.queryKey = t.queryKey),
					(this.queryHash = t.queryHash),
					G(this, fo, dC(this.options)),
					(this.state = t.state ?? R(this, fo)),
					this.scheduleGc());
			}
			get meta() {
				return this.options.meta;
			}
			get promise() {
				var t;
				return (t = R(this, De)) == null ? void 0 : t.promise;
			}
			setOptions(t) {
				((this.options = { ...R(this, Mi), ...t }),
					this.updateGcTime(this.options.gcTime));
			}
			optionalRemove() {
				!this.observers.length &&
					this.state.fetchStatus === "idle" &&
					R(this, mt).remove(this);
			}
			setData(t, n) {
				const r = eC(this.state.data, t, this.options);
				return (
					Le(this, _t, rn).call(this, {
						data: r,
						type: "success",
						dataUpdatedAt: n == null ? void 0 : n.updatedAt,
						manual: n == null ? void 0 : n.manual,
					}),
					r
				);
			}
			setState(t, n) {
				Le(this, _t, rn).call(this, {
					type: "setState",
					state: t,
					setStateOptions: n,
				});
			}
			cancel(t) {
				var r, o;
				const n = (r = R(this, De)) == null ? void 0 : r.promise;
				return (
					(o = R(this, De)) == null || o.cancel(t),
					n ? n.then(Ot).catch(Ot) : Promise.resolve()
				);
			}
			destroy() {
				(super.destroy(), this.cancel({ silent: !0 }));
			}
			reset() {
				(this.destroy(), this.setState(R(this, fo)));
			}
			isActive() {
				return this.observers.some((t) => ZE(t.options.enabled, this) !== !1);
			}
			isDisabled() {
				return this.getObserversCount() > 0
					? !this.isActive()
					: this.options.queryFn === hd ||
							this.state.dataUpdateCount + this.state.errorUpdateCount === 0;
			}
			isStatic() {
				return this.getObserversCount() > 0
					? this.observers.some(
							(t) => Hu(t.options.staleTime, this) === "static",
						)
					: !1;
			}
			isStale() {
				return this.getObserversCount() > 0
					? this.observers.some((t) => t.getCurrentResult().isStale)
					: this.state.data === void 0 || this.state.isInvalidated;
			}
			isStaleByTime(t = 0) {
				return this.state.data === void 0
					? !0
					: t === "static"
						? !1
						: this.state.isInvalidated
							? !0
							: !qE(this.state.dataUpdatedAt, t);
			}
			onFocus() {
				var n;
				const t = this.observers.find((r) => r.shouldFetchOnWindowFocus());
				(t == null || t.refetch({ cancelRefetch: !1 }),
					(n = R(this, De)) == null || n.continue());
			}
			onOnline() {
				var n;
				const t = this.observers.find((r) => r.shouldFetchOnReconnect());
				(t == null || t.refetch({ cancelRefetch: !1 }),
					(n = R(this, De)) == null || n.continue());
			}
			addObserver(t) {
				this.observers.includes(t) ||
					(this.observers.push(t),
					this.clearGcTimeout(),
					R(this, mt).notify({
						type: "observerAdded",
						query: this,
						observer: t,
					}));
			}
			removeObserver(t) {
				this.observers.includes(t) &&
					((this.observers = this.observers.filter((n) => n !== t)),
					this.observers.length ||
						(R(this, De) &&
							(R(this, yr)
								? R(this, De).cancel({ revert: !0 })
								: R(this, De).cancelRetry()),
						this.scheduleGc()),
					R(this, mt).notify({
						type: "observerRemoved",
						query: this,
						observer: t,
					}));
			}
			getObserversCount() {
				return this.observers.length;
			}
			invalidate() {
				this.state.isInvalidated ||
					Le(this, _t, rn).call(this, { type: "invalidate" });
			}
			fetch(t, n) {
				var u, c, f;
				if (this.state.fetchStatus !== "idle") {
					if (this.state.data !== void 0 && n != null && n.cancelRefetch)
						this.cancel({ silent: !0 });
					else if (R(this, De))
						return (R(this, De).continueRetry(), R(this, De).promise);
				}
				if ((t && this.setOptions(t), !this.options.queryFn)) {
					const h = this.observers.find((d) => d.options.queryFn);
					h && this.setOptions(h.options);
				}
				const r = new AbortController(),
					o = (h) => {
						Object.defineProperty(h, "signal", {
							enumerable: !0,
							get: () => (G(this, yr, !0), r.signal),
						});
					},
					i = () => {
						const h = bv(this.options, n),
							w = (() => {
								const v = {
									client: R(this, vr),
									queryKey: this.queryKey,
									meta: this.meta,
								};
								return (o(v), v);
							})();
						return (
							G(this, yr, !1),
							this.options.persister ? this.options.persister(h, w, this) : h(w)
						);
					},
					l = (() => {
						const h = {
							fetchOptions: n,
							options: this.options,
							queryKey: this.queryKey,
							client: R(this, vr),
							state: this.state,
							fetchFn: i,
						};
						return (o(h), h);
					})();
				((u = this.options.behavior) == null || u.onFetch(l, this),
					G(this, gr, this.state),
					(this.state.fetchStatus === "idle" ||
						this.state.fetchMeta !==
							((c = l.fetchOptions) == null ? void 0 : c.meta)) &&
						Le(this, _t, rn).call(this, {
							type: "fetch",
							meta: (f = l.fetchOptions) == null ? void 0 : f.meta,
						}));
				const a = (h) => {
					var d, w, v, y;
					((Ma(h) && h.silent) ||
						Le(this, _t, rn).call(this, { type: "error", error: h }),
						Ma(h) ||
							((w = (d = R(this, mt).config).onError) == null ||
								w.call(d, h, this),
							(y = (v = R(this, mt).config).onSettled) == null ||
								y.call(v, this.state.data, h, this)),
						this.scheduleGc());
				};
				return (
					G(
						this,
						De,
						Nv({
							initialPromise: n == null ? void 0 : n.initialPromise,
							fn: l.fetchFn,
							abort: r.abort.bind(r),
							onSuccess: (h) => {
								var d, w, v, y;
								if (h === void 0) {
									a(new Error(`${this.queryHash} data is undefined`));
									return;
								}
								try {
									this.setData(h);
								} catch (m) {
									a(m);
									return;
								}
								((w = (d = R(this, mt).config).onSuccess) == null ||
									w.call(d, h, this),
									(y = (v = R(this, mt).config).onSettled) == null ||
										y.call(v, h, this.state.error, this),
									this.scheduleGc());
							},
							onError: a,
							onFail: (h, d) => {
								Le(this, _t, rn).call(this, {
									type: "failed",
									failureCount: h,
									error: d,
								});
							},
							onPause: () => {
								Le(this, _t, rn).call(this, { type: "pause" });
							},
							onContinue: () => {
								Le(this, _t, rn).call(this, { type: "continue" });
							},
							retry: l.options.retry,
							retryDelay: l.options.retryDelay,
							networkMode: l.options.networkMode,
							canRun: () => !0,
						}),
					),
					R(this, De).start()
				);
			}
		}),
		(fo = new WeakMap()),
		(gr = new WeakMap()),
		(mt = new WeakMap()),
		(vr = new WeakMap()),
		(De = new WeakMap()),
		(Mi = new WeakMap()),
		(yr = new WeakMap()),
		(_t = new WeakSet()),
		(rn = function (t) {
			const n = (r) => {
				switch (t.type) {
					case "failed":
						return {
							...r,
							fetchFailureCount: t.failureCount,
							fetchFailureReason: t.error,
						};
					case "pause":
						return { ...r, fetchStatus: "paused" };
					case "continue":
						return { ...r, fetchStatus: "fetching" };
					case "fetch":
						return {
							...r,
							...cC(r.data, this.options),
							fetchMeta: t.meta ?? null,
						};
					case "success":
						return (
							G(this, gr, void 0),
							{
								...r,
								data: t.data,
								dataUpdateCount: r.dataUpdateCount + 1,
								dataUpdatedAt: t.dataUpdatedAt ?? Date.now(),
								error: null,
								isInvalidated: !1,
								status: "success",
								...(!t.manual && {
									fetchStatus: "idle",
									fetchFailureCount: 0,
									fetchFailureReason: null,
								}),
							}
						);
					case "error":
						const o = t.error;
						return Ma(o) && o.revert && R(this, gr)
							? { ...R(this, gr), fetchStatus: "idle" }
							: {
									...r,
									error: o,
									errorUpdateCount: r.errorUpdateCount + 1,
									errorUpdatedAt: Date.now(),
									fetchFailureCount: r.fetchFailureCount + 1,
									fetchFailureReason: o,
									fetchStatus: "idle",
									status: "error",
								};
					case "invalidate":
						return { ...r, isInvalidated: !0 };
					case "setState":
						return { ...r, ...t.state };
				}
			};
			((this.state = n(this.state)),
				We.batch(() => {
					(this.observers.forEach((r) => {
						r.onQueryUpdate();
					}),
						R(this, mt).notify({ query: this, type: "updated", action: t }));
				}));
		}),
		Up);
function cC(e, t) {
	return {
		fetchFailureCount: 0,
		fetchFailureReason: null,
		fetchStatus: Tv(t.networkMode) ? "fetching" : "paused",
		...(e === void 0 && { error: null, status: "pending" }),
	};
}
function dC(e) {
	const t =
			typeof e.initialData == "function" ? e.initialData() : e.initialData,
		n = t !== void 0,
		r = n
			? typeof e.initialDataUpdatedAt == "function"
				? e.initialDataUpdatedAt()
				: e.initialDataUpdatedAt
			: 0;
	return {
		data: t,
		dataUpdateCount: 0,
		dataUpdatedAt: n ? (r ?? Date.now()) : 0,
		error: null,
		errorUpdateCount: 0,
		errorUpdatedAt: 0,
		fetchFailureCount: 0,
		fetchFailureReason: null,
		fetchMeta: null,
		isInvalidated: !1,
		status: n ? "success" : "pending",
		fetchStatus: "idle",
	};
}
var Qt,
	Wp,
	fC =
		((Wp = class extends Wl {
			constructor(t = {}) {
				super();
				ne(this, Qt);
				((this.config = t), G(this, Qt, new Map()));
			}
			build(t, n, r) {
				const o = n.queryKey,
					i = n.queryHash ?? pd(o, n);
				let s = this.get(i);
				return (
					s ||
						((s = new uC({
							client: t,
							queryKey: o,
							queryHash: i,
							options: t.defaultQueryOptions(n),
							state: r,
							defaultOptions: t.getQueryDefaults(o),
						})),
						this.add(s)),
					s
				);
			}
			add(t) {
				R(this, Qt).has(t.queryHash) ||
					(R(this, Qt).set(t.queryHash, t),
					this.notify({ type: "added", query: t }));
			}
			remove(t) {
				const n = R(this, Qt).get(t.queryHash);
				n &&
					(t.destroy(),
					n === t && R(this, Qt).delete(t.queryHash),
					this.notify({ type: "removed", query: t }));
			}
			clear() {
				We.batch(() => {
					this.getAll().forEach((t) => {
						this.remove(t);
					});
				});
			}
			get(t) {
				return R(this, Qt).get(t);
			}
			getAll() {
				return [...R(this, Qt).values()];
			}
			find(t) {
				const n = { exact: !0, ...t };
				return this.getAll().find((r) => ap(n, r));
			}
			findAll(t = {}) {
				const n = this.getAll();
				return Object.keys(t).length > 0 ? n.filter((r) => ap(t, r)) : n;
			}
			notify(t) {
				We.batch(() => {
					this.listeners.forEach((n) => {
						n(t);
					});
				});
			}
			onFocus() {
				We.batch(() => {
					this.getAll().forEach((t) => {
						t.onFocus();
					});
				});
			}
			onOnline() {
				We.batch(() => {
					this.getAll().forEach((t) => {
						t.onOnline();
					});
				});
			}
		}),
		(Qt = new WeakMap()),
		Wp),
	Kt,
	Be,
	wr,
	Gt,
	Pn,
	Vp,
	pC =
		((Vp = class extends Av {
			constructor(t) {
				super();
				ne(this, Gt);
				ne(this, Kt);
				ne(this, Be);
				ne(this, wr);
				((this.mutationId = t.mutationId),
					G(this, Be, t.mutationCache),
					G(this, Kt, []),
					(this.state = t.state || hC()),
					this.setOptions(t.options),
					this.scheduleGc());
			}
			setOptions(t) {
				((this.options = t), this.updateGcTime(this.options.gcTime));
			}
			get meta() {
				return this.options.meta;
			}
			addObserver(t) {
				R(this, Kt).includes(t) ||
					(R(this, Kt).push(t),
					this.clearGcTimeout(),
					R(this, Be).notify({
						type: "observerAdded",
						mutation: this,
						observer: t,
					}));
			}
			removeObserver(t) {
				(G(
					this,
					Kt,
					R(this, Kt).filter((n) => n !== t),
				),
					this.scheduleGc(),
					R(this, Be).notify({
						type: "observerRemoved",
						mutation: this,
						observer: t,
					}));
			}
			optionalRemove() {
				R(this, Kt).length ||
					(this.state.status === "pending"
						? this.scheduleGc()
						: R(this, Be).remove(this));
			}
			continue() {
				var t;
				return (
					((t = R(this, wr)) == null ? void 0 : t.continue()) ??
					this.execute(this.state.variables)
				);
			}
			async execute(t) {
				var i, s, l, a, u, c, f, h, d, w, v, y, m, p, g, x, C, k, E, b;
				const n = () => {
					Le(this, Gt, Pn).call(this, { type: "continue" });
				};
				G(
					this,
					wr,
					Nv({
						fn: () =>
							this.options.mutationFn
								? this.options.mutationFn(t)
								: Promise.reject(new Error("No mutationFn found")),
						onFail: (_, L) => {
							Le(this, Gt, Pn).call(this, {
								type: "failed",
								failureCount: _,
								error: L,
							});
						},
						onPause: () => {
							Le(this, Gt, Pn).call(this, { type: "pause" });
						},
						onContinue: n,
						retry: this.options.retry ?? 0,
						retryDelay: this.options.retryDelay,
						networkMode: this.options.networkMode,
						canRun: () => R(this, Be).canRun(this),
					}),
				);
				const r = this.state.status === "pending",
					o = !R(this, wr).canStart();
				try {
					if (r) n();
					else {
						(Le(this, Gt, Pn).call(this, {
							type: "pending",
							variables: t,
							isPaused: o,
						}),
							await ((s = (i = R(this, Be).config).onMutate) == null
								? void 0
								: s.call(i, t, this)));
						const L = await ((a = (l = this.options).onMutate) == null
							? void 0
							: a.call(l, t));
						L !== this.state.context &&
							Le(this, Gt, Pn).call(this, {
								type: "pending",
								context: L,
								variables: t,
								isPaused: o,
							});
					}
					const _ = await R(this, wr).start();
					return (
						await ((c = (u = R(this, Be).config).onSuccess) == null
							? void 0
							: c.call(u, _, t, this.state.context, this)),
						await ((h = (f = this.options).onSuccess) == null
							? void 0
							: h.call(f, _, t, this.state.context)),
						await ((w = (d = R(this, Be).config).onSettled) == null
							? void 0
							: w.call(
									d,
									_,
									null,
									this.state.variables,
									this.state.context,
									this,
								)),
						await ((y = (v = this.options).onSettled) == null
							? void 0
							: y.call(v, _, null, t, this.state.context)),
						Le(this, Gt, Pn).call(this, { type: "success", data: _ }),
						_
					);
				} catch (_) {
					try {
						throw (
							await ((p = (m = R(this, Be).config).onError) == null
								? void 0
								: p.call(m, _, t, this.state.context, this)),
							await ((x = (g = this.options).onError) == null
								? void 0
								: x.call(g, _, t, this.state.context)),
							await ((k = (C = R(this, Be).config).onSettled) == null
								? void 0
								: k.call(
										C,
										void 0,
										_,
										this.state.variables,
										this.state.context,
										this,
									)),
							await ((b = (E = this.options).onSettled) == null
								? void 0
								: b.call(E, void 0, _, t, this.state.context)),
							_
						);
					} finally {
						Le(this, Gt, Pn).call(this, { type: "error", error: _ });
					}
				} finally {
					R(this, Be).runNext(this);
				}
			}
		}),
		(Kt = new WeakMap()),
		(Be = new WeakMap()),
		(wr = new WeakMap()),
		(Gt = new WeakSet()),
		(Pn = function (t) {
			const n = (r) => {
				switch (t.type) {
					case "failed":
						return {
							...r,
							failureCount: t.failureCount,
							failureReason: t.error,
						};
					case "pause":
						return { ...r, isPaused: !0 };
					case "continue":
						return { ...r, isPaused: !1 };
					case "pending":
						return {
							...r,
							context: t.context,
							data: void 0,
							failureCount: 0,
							failureReason: null,
							error: null,
							isPaused: t.isPaused,
							status: "pending",
							variables: t.variables,
							submittedAt: Date.now(),
						};
					case "success":
						return {
							...r,
							data: t.data,
							failureCount: 0,
							failureReason: null,
							error: null,
							status: "success",
							isPaused: !1,
						};
					case "error":
						return {
							...r,
							data: void 0,
							error: t.error,
							failureCount: r.failureCount + 1,
							failureReason: t.error,
							isPaused: !1,
							status: "error",
						};
				}
			};
			((this.state = n(this.state)),
				We.batch(() => {
					(R(this, Kt).forEach((r) => {
						r.onMutationUpdate(t);
					}),
						R(this, Be).notify({ mutation: this, type: "updated", action: t }));
				}));
		}),
		Vp);
function hC() {
	return {
		context: void 0,
		data: void 0,
		error: null,
		failureCount: 0,
		failureReason: null,
		isPaused: !1,
		status: "idle",
		variables: void 0,
		submittedAt: 0,
	};
}
var un,
	It,
	Di,
	Hp,
	mC =
		((Hp = class extends Wl {
			constructor(t = {}) {
				super();
				ne(this, un);
				ne(this, It);
				ne(this, Di);
				((this.config = t),
					G(this, un, new Set()),
					G(this, It, new Map()),
					G(this, Di, 0));
			}
			build(t, n, r) {
				const o = new pC({
					mutationCache: this,
					mutationId: ++Xi(this, Di)._,
					options: t.defaultMutationOptions(n),
					state: r,
				});
				return (this.add(o), o);
			}
			add(t) {
				R(this, un).add(t);
				const n = ys(t);
				if (typeof n == "string") {
					const r = R(this, It).get(n);
					r ? r.push(t) : R(this, It).set(n, [t]);
				}
				this.notify({ type: "added", mutation: t });
			}
			remove(t) {
				if (R(this, un).delete(t)) {
					const n = ys(t);
					if (typeof n == "string") {
						const r = R(this, It).get(n);
						if (r)
							if (r.length > 1) {
								const o = r.indexOf(t);
								o !== -1 && r.splice(o, 1);
							} else r[0] === t && R(this, It).delete(n);
					}
				}
				this.notify({ type: "removed", mutation: t });
			}
			canRun(t) {
				const n = ys(t);
				if (typeof n == "string") {
					const r = R(this, It).get(n),
						o =
							r == null ? void 0 : r.find((i) => i.state.status === "pending");
					return !o || o === t;
				} else return !0;
			}
			runNext(t) {
				var r;
				const n = ys(t);
				if (typeof n == "string") {
					const o =
						(r = R(this, It).get(n)) == null
							? void 0
							: r.find((i) => i !== t && i.state.isPaused);
					return (o == null ? void 0 : o.continue()) ?? Promise.resolve();
				} else return Promise.resolve();
			}
			clear() {
				We.batch(() => {
					(R(this, un).forEach((t) => {
						this.notify({ type: "removed", mutation: t });
					}),
						R(this, un).clear(),
						R(this, It).clear());
				});
			}
			getAll() {
				return Array.from(R(this, un));
			}
			find(t) {
				const n = { exact: !0, ...t };
				return this.getAll().find((r) => up(n, r));
			}
			findAll(t = {}) {
				return this.getAll().filter((n) => up(t, n));
			}
			notify(t) {
				We.batch(() => {
					this.listeners.forEach((n) => {
						n(t);
					});
				});
			}
			resumePausedMutations() {
				const t = this.getAll().filter((n) => n.state.isPaused);
				return We.batch(() =>
					Promise.all(t.map((n) => n.continue().catch(Ot))),
				);
			}
		}),
		(un = new WeakMap()),
		(It = new WeakMap()),
		(Di = new WeakMap()),
		Hp);
function ys(e) {
	var t;
	return (t = e.options.scope) == null ? void 0 : t.id;
}
function fp(e) {
	return {
		onFetch: (t, n) => {
			var c, f, h, d, w;
			const r = t.options,
				o =
					(h =
						(f = (c = t.fetchOptions) == null ? void 0 : c.meta) == null
							? void 0
							: f.fetchMore) == null
						? void 0
						: h.direction,
				i = ((d = t.state.data) == null ? void 0 : d.pages) || [],
				s = ((w = t.state.data) == null ? void 0 : w.pageParams) || [];
			let l = { pages: [], pageParams: [] },
				a = 0;
			const u = async () => {
				let v = !1;
				const y = (g) => {
						Object.defineProperty(g, "signal", {
							enumerable: !0,
							get: () => (
								t.signal.aborted
									? (v = !0)
									: t.signal.addEventListener("abort", () => {
											v = !0;
										}),
								t.signal
							),
						});
					},
					m = bv(t.options, t.fetchOptions),
					p = async (g, x, C) => {
						if (v) return Promise.reject();
						if (x == null && g.pages.length) return Promise.resolve(g);
						const E = (() => {
								const j = {
									client: t.client,
									queryKey: t.queryKey,
									pageParam: x,
									direction: C ? "backward" : "forward",
									meta: t.options.meta,
								};
								return (y(j), j);
							})(),
							b = await m(E),
							{ maxPages: _ } = t.options,
							L = C ? nC : tC;
						return {
							pages: L(g.pages, b, _),
							pageParams: L(g.pageParams, x, _),
						};
					};
				if (o && i.length) {
					const g = o === "backward",
						x = g ? gC : pp,
						C = { pages: i, pageParams: s },
						k = x(r, C);
					l = await p(C, k, g);
				} else {
					const g = e ?? i.length;
					do {
						const x = a === 0 ? (s[0] ?? r.initialPageParam) : pp(r, l);
						if (a > 0 && x == null) break;
						((l = await p(l, x)), a++);
					} while (a < g);
				}
				return l;
			};
			t.options.persister
				? (t.fetchFn = () => {
						var v, y;
						return (y = (v = t.options).persister) == null
							? void 0
							: y.call(
									v,
									u,
									{
										client: t.client,
										queryKey: t.queryKey,
										meta: t.options.meta,
										signal: t.signal,
									},
									n,
								);
					})
				: (t.fetchFn = u);
		},
	};
}
function pp(e, { pages: t, pageParams: n }) {
	const r = t.length - 1;
	return t.length > 0 ? e.getNextPageParam(t[r], t, n[r], n) : void 0;
}
function gC(e, { pages: t, pageParams: n }) {
	var r;
	return t.length > 0
		? (r = e.getPreviousPageParam) == null
			? void 0
			: r.call(e, t[0], t, n[0], n)
		: void 0;
}
var ye,
	Ln,
	$n,
	po,
	ho,
	Mn,
	mo,
	go,
	Qp,
	vC =
		((Qp = class {
			constructor(e = {}) {
				ne(this, ye);
				ne(this, Ln);
				ne(this, $n);
				ne(this, po);
				ne(this, ho);
				ne(this, Mn);
				ne(this, mo);
				ne(this, go);
				(G(this, ye, e.queryCache || new fC()),
					G(this, Ln, e.mutationCache || new mC()),
					G(this, $n, e.defaultOptions || {}),
					G(this, po, new Map()),
					G(this, ho, new Map()),
					G(this, Mn, 0));
			}
			mount() {
				(Xi(this, Mn)._++,
					R(this, Mn) === 1 &&
						(G(
							this,
							mo,
							Pv.subscribe(async (e) => {
								e &&
									(await this.resumePausedMutations(), R(this, ye).onFocus());
							}),
						),
						G(
							this,
							go,
							pl.subscribe(async (e) => {
								e &&
									(await this.resumePausedMutations(), R(this, ye).onOnline());
							}),
						)));
			}
			unmount() {
				var e, t;
				(Xi(this, Mn)._--,
					R(this, Mn) === 0 &&
						((e = R(this, mo)) == null || e.call(this),
						G(this, mo, void 0),
						(t = R(this, go)) == null || t.call(this),
						G(this, go, void 0)));
			}
			isFetching(e) {
				return R(this, ye).findAll({ ...e, fetchStatus: "fetching" }).length;
			}
			isMutating(e) {
				return R(this, Ln).findAll({ ...e, status: "pending" }).length;
			}
			getQueryData(e) {
				var n;
				const t = this.defaultQueryOptions({ queryKey: e });
				return (n = R(this, ye).get(t.queryHash)) == null
					? void 0
					: n.state.data;
			}
			ensureQueryData(e) {
				const t = this.defaultQueryOptions(e),
					n = R(this, ye).build(this, t),
					r = n.state.data;
				return r === void 0
					? this.fetchQuery(e)
					: (e.revalidateIfStale &&
							n.isStaleByTime(Hu(t.staleTime, n)) &&
							this.prefetchQuery(t),
						Promise.resolve(r));
			}
			getQueriesData(e) {
				return R(this, ye)
					.findAll(e)
					.map(({ queryKey: t, state: n }) => {
						const r = n.data;
						return [t, r];
					});
			}
			setQueryData(e, t, n) {
				const r = this.defaultQueryOptions({ queryKey: e }),
					o = R(this, ye).get(r.queryHash),
					i = o == null ? void 0 : o.state.data,
					s = YE(t, i);
				if (s !== void 0)
					return R(this, ye)
						.build(this, r)
						.setData(s, { ...n, manual: !0 });
			}
			setQueriesData(e, t, n) {
				return We.batch(() =>
					R(this, ye)
						.findAll(e)
						.map(({ queryKey: r }) => [r, this.setQueryData(r, t, n)]),
				);
			}
			getQueryState(e) {
				var n;
				const t = this.defaultQueryOptions({ queryKey: e });
				return (n = R(this, ye).get(t.queryHash)) == null ? void 0 : n.state;
			}
			removeQueries(e) {
				const t = R(this, ye);
				We.batch(() => {
					t.findAll(e).forEach((n) => {
						t.remove(n);
					});
				});
			}
			resetQueries(e, t) {
				const n = R(this, ye);
				return We.batch(
					() => (
						n.findAll(e).forEach((r) => {
							r.reset();
						}),
						this.refetchQueries({ type: "active", ...e }, t)
					),
				);
			}
			cancelQueries(e, t = {}) {
				const n = { revert: !0, ...t },
					r = We.batch(() =>
						R(this, ye)
							.findAll(e)
							.map((o) => o.cancel(n)),
					);
				return Promise.all(r).then(Ot).catch(Ot);
			}
			invalidateQueries(e, t = {}) {
				return We.batch(
					() => (
						R(this, ye)
							.findAll(e)
							.forEach((n) => {
								n.invalidate();
							}),
						(e == null ? void 0 : e.refetchType) === "none"
							? Promise.resolve()
							: this.refetchQueries(
									{
										...e,
										type:
											(e == null ? void 0 : e.refetchType) ??
											(e == null ? void 0 : e.type) ??
											"active",
									},
									t,
								)
					),
				);
			}
			refetchQueries(e, t = {}) {
				const n = { ...t, cancelRefetch: t.cancelRefetch ?? !0 },
					r = We.batch(() =>
						R(this, ye)
							.findAll(e)
							.filter((o) => !o.isDisabled() && !o.isStatic())
							.map((o) => {
								let i = o.fetch(void 0, n);
								return (
									n.throwOnError || (i = i.catch(Ot)),
									o.state.fetchStatus === "paused" ? Promise.resolve() : i
								);
							}),
					);
				return Promise.all(r).then(Ot);
			}
			fetchQuery(e) {
				const t = this.defaultQueryOptions(e);
				t.retry === void 0 && (t.retry = !1);
				const n = R(this, ye).build(this, t);
				return n.isStaleByTime(Hu(t.staleTime, n))
					? n.fetch(t)
					: Promise.resolve(n.state.data);
			}
			prefetchQuery(e) {
				return this.fetchQuery(e).then(Ot).catch(Ot);
			}
			fetchInfiniteQuery(e) {
				return ((e.behavior = fp(e.pages)), this.fetchQuery(e));
			}
			prefetchInfiniteQuery(e) {
				return this.fetchInfiniteQuery(e).then(Ot).catch(Ot);
			}
			ensureInfiniteQueryData(e) {
				return ((e.behavior = fp(e.pages)), this.ensureQueryData(e));
			}
			resumePausedMutations() {
				return pl.isOnline()
					? R(this, Ln).resumePausedMutations()
					: Promise.resolve();
			}
			getQueryCache() {
				return R(this, ye);
			}
			getMutationCache() {
				return R(this, Ln);
			}
			getDefaultOptions() {
				return R(this, $n);
			}
			setDefaultOptions(e) {
				G(this, $n, e);
			}
			setQueryDefaults(e, t) {
				R(this, po).set(_i(e), { queryKey: e, defaultOptions: t });
			}
			getQueryDefaults(e) {
				const t = [...R(this, po).values()],
					n = {};
				return (
					t.forEach((r) => {
						Ii(e, r.queryKey) && Object.assign(n, r.defaultOptions);
					}),
					n
				);
			}
			setMutationDefaults(e, t) {
				R(this, ho).set(_i(e), { mutationKey: e, defaultOptions: t });
			}
			getMutationDefaults(e) {
				const t = [...R(this, ho).values()],
					n = {};
				return (
					t.forEach((r) => {
						Ii(e, r.mutationKey) && Object.assign(n, r.defaultOptions);
					}),
					n
				);
			}
			defaultQueryOptions(e) {
				if (e._defaulted) return e;
				const t = {
					...R(this, $n).queries,
					...this.getQueryDefaults(e.queryKey),
					...e,
					_defaulted: !0,
				};
				return (
					t.queryHash || (t.queryHash = pd(t.queryKey, t)),
					t.refetchOnReconnect === void 0 &&
						(t.refetchOnReconnect = t.networkMode !== "always"),
					t.throwOnError === void 0 && (t.throwOnError = !!t.suspense),
					!t.networkMode && t.persister && (t.networkMode = "offlineFirst"),
					t.queryFn === hd && (t.enabled = !1),
					t
				);
			}
			defaultMutationOptions(e) {
				return e != null && e._defaulted
					? e
					: {
							...R(this, $n).mutations,
							...((e == null ? void 0 : e.mutationKey) &&
								this.getMutationDefaults(e.mutationKey)),
							...e,
							_defaulted: !0,
						};
			}
			clear() {
				(R(this, ye).clear(), R(this, Ln).clear());
			}
		}),
		(ye = new WeakMap()),
		(Ln = new WeakMap()),
		($n = new WeakMap()),
		(po = new WeakMap()),
		(ho = new WeakMap()),
		(Mn = new WeakMap()),
		(mo = new WeakMap()),
		(go = new WeakMap()),
		Qp),
	yC = S.createContext(void 0),
	wC = ({ client: e, children: t }) => (
		S.useEffect(
			() => (
				e.mount(),
				() => {
					e.unmount();
				}
			),
			[e],
		),
		P.jsx(yC.Provider, { value: e, children: t })
	);
/**
 * @remix-run/router v1.23.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function hl() {
	return (
		(hl = Object.assign
			? Object.assign.bind()
			: function (e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n)
							Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
					}
					return e;
				}),
		hl.apply(this, arguments)
	);
}
var Fn;
(function (e) {
	((e.Pop = "POP"), (e.Push = "PUSH"), (e.Replace = "REPLACE"));
})(Fn || (Fn = {}));
const hp = "popstate";
function xC(e) {
	e === void 0 && (e = {});
	function t(r, o) {
		let { pathname: i, search: s, hash: l } = r.location;
		return Ku(
			"",
			{ pathname: i, search: s, hash: l },
			(o.state && o.state.usr) || null,
			(o.state && o.state.key) || "default",
		);
	}
	function n(r, o) {
		return typeof o == "string" ? o : _v(o);
	}
	return EC(t, n, null, e);
}
function nt(e, t) {
	if (e === !1 || e === null || typeof e > "u") throw new Error(t);
}
function Ov(e, t) {
	if (!e) {
		typeof console < "u" && console.warn(t);
		try {
			throw new Error(t);
		} catch {}
	}
}
function SC() {
	return Math.random().toString(36).substr(2, 8);
}
function mp(e, t) {
	return { usr: e.state, key: e.key, idx: t };
}
function Ku(e, t, n, r) {
	return (
		n === void 0 && (n = null),
		hl(
			{ pathname: typeof e == "string" ? e : e.pathname, search: "", hash: "" },
			typeof t == "string" ? Hl(t) : t,
			{ state: n, key: (t && t.key) || r || SC() },
		)
	);
}
function _v(e) {
	let { pathname: t = "/", search: n = "", hash: r = "" } = e;
	return (
		n && n !== "?" && (t += n.charAt(0) === "?" ? n : "?" + n),
		r && r !== "#" && (t += r.charAt(0) === "#" ? r : "#" + r),
		t
	);
}
function Hl(e) {
	let t = {};
	if (e) {
		let n = e.indexOf("#");
		n >= 0 && ((t.hash = e.substr(n)), (e = e.substr(0, n)));
		let r = e.indexOf("?");
		(r >= 0 && ((t.search = e.substr(r)), (e = e.substr(0, r))),
			e && (t.pathname = e));
	}
	return t;
}
function EC(e, t, n, r) {
	r === void 0 && (r = {});
	let { window: o = document.defaultView, v5Compat: i = !1 } = r,
		s = o.history,
		l = Fn.Pop,
		a = null,
		u = c();
	u == null && ((u = 0), s.replaceState(hl({}, s.state, { idx: u }), ""));
	function c() {
		return (s.state || { idx: null }).idx;
	}
	function f() {
		l = Fn.Pop;
		let y = c(),
			m = y == null ? null : y - u;
		((u = y), a && a({ action: l, location: v.location, delta: m }));
	}
	function h(y, m) {
		l = Fn.Push;
		let p = Ku(v.location, y, m);
		u = c() + 1;
		let g = mp(p, u),
			x = v.createHref(p);
		try {
			s.pushState(g, "", x);
		} catch (C) {
			if (C instanceof DOMException && C.name === "DataCloneError") throw C;
			o.location.assign(x);
		}
		i && a && a({ action: l, location: v.location, delta: 1 });
	}
	function d(y, m) {
		l = Fn.Replace;
		let p = Ku(v.location, y, m);
		u = c();
		let g = mp(p, u),
			x = v.createHref(p);
		(s.replaceState(g, "", x),
			i && a && a({ action: l, location: v.location, delta: 0 }));
	}
	function w(y) {
		let m = o.location.origin !== "null" ? o.location.origin : o.location.href,
			p = typeof y == "string" ? y : _v(y);
		return (
			(p = p.replace(/ $/, "%20")),
			nt(
				m,
				"No window.location.(origin|href) available to create URL for href: " +
					p,
			),
			new URL(p, m)
		);
	}
	let v = {
		get action() {
			return l;
		},
		get location() {
			return e(o, s);
		},
		listen(y) {
			if (a) throw new Error("A history only accepts one active listener");
			return (
				o.addEventListener(hp, f),
				(a = y),
				() => {
					(o.removeEventListener(hp, f), (a = null));
				}
			);
		},
		createHref(y) {
			return t(o, y);
		},
		createURL: w,
		encodeLocation(y) {
			let m = w(y);
			return { pathname: m.pathname, search: m.search, hash: m.hash };
		},
		push: h,
		replace: d,
		go(y) {
			return s.go(y);
		},
	};
	return v;
}
var gp;
(function (e) {
	((e.data = "data"),
		(e.deferred = "deferred"),
		(e.redirect = "redirect"),
		(e.error = "error"));
})(gp || (gp = {}));
function CC(e, t, n) {
	return (n === void 0 && (n = "/"), kC(e, t, n, !1));
}
function kC(e, t, n, r) {
	let o = typeof t == "string" ? Hl(t) : t,
		i = $v(o.pathname || "/", n);
	if (i == null) return null;
	let s = Iv(e);
	bC(s);
	let l = null;
	for (let a = 0; l == null && a < s.length; ++a) {
		let u = MC(i);
		l = LC(s[a], u, r);
	}
	return l;
}
function Iv(e, t, n, r) {
	(t === void 0 && (t = []),
		n === void 0 && (n = []),
		r === void 0 && (r = ""));
	let o = (i, s, l) => {
		let a = {
			relativePath: l === void 0 ? i.path || "" : l,
			caseSensitive: i.caseSensitive === !0,
			childrenIndex: s,
			route: i,
		};
		a.relativePath.startsWith("/") &&
			(nt(
				a.relativePath.startsWith(r),
				'Absolute route path "' +
					a.relativePath +
					'" nested under path ' +
					('"' + r + '" is not valid. An absolute child route path ') +
					"must start with the combined path of all its parent routes.",
			),
			(a.relativePath = a.relativePath.slice(r.length)));
		let u = lo([r, a.relativePath]),
			c = n.concat(a);
		(i.children &&
			i.children.length > 0 &&
			(nt(
				i.index !== !0,
				"Index routes must not have child routes. Please remove " +
					('all child routes from route path "' + u + '".'),
			),
			Iv(i.children, t, c, u)),
			!(i.path == null && !i.index) &&
				t.push({ path: u, score: _C(u, i.index), routesMeta: c }));
	};
	return (
		e.forEach((i, s) => {
			var l;
			if (i.path === "" || !((l = i.path) != null && l.includes("?"))) o(i, s);
			else for (let a of Lv(i.path)) o(i, s, a);
		}),
		t
	);
}
function Lv(e) {
	let t = e.split("/");
	if (t.length === 0) return [];
	let [n, ...r] = t,
		o = n.endsWith("?"),
		i = n.replace(/\?$/, "");
	if (r.length === 0) return o ? [i, ""] : [i];
	let s = Lv(r.join("/")),
		l = [];
	return (
		l.push(...s.map((a) => (a === "" ? i : [i, a].join("/")))),
		o && l.push(...s),
		l.map((a) => (e.startsWith("/") && a === "" ? "/" : a))
	);
}
function bC(e) {
	e.sort((t, n) =>
		t.score !== n.score
			? n.score - t.score
			: IC(
					t.routesMeta.map((r) => r.childrenIndex),
					n.routesMeta.map((r) => r.childrenIndex),
				),
	);
}
const PC = /^:[\w-]+$/,
	TC = 3,
	RC = 2,
	NC = 1,
	AC = 10,
	OC = -2,
	vp = (e) => e === "*";
function _C(e, t) {
	let n = e.split("/"),
		r = n.length;
	return (
		n.some(vp) && (r += OC),
		t && (r += RC),
		n
			.filter((o) => !vp(o))
			.reduce((o, i) => o + (PC.test(i) ? TC : i === "" ? NC : AC), r)
	);
}
function IC(e, t) {
	return e.length === t.length && e.slice(0, -1).every((r, o) => r === t[o])
		? e[e.length - 1] - t[t.length - 1]
		: 0;
}
function LC(e, t, n) {
	let { routesMeta: r } = e,
		o = {},
		i = "/",
		s = [];
	for (let l = 0; l < r.length; ++l) {
		let a = r[l],
			u = l === r.length - 1,
			c = i === "/" ? t : t.slice(i.length) || "/",
			f = yp(
				{ path: a.relativePath, caseSensitive: a.caseSensitive, end: u },
				c,
			),
			h = a.route;
		if (
			(!f &&
				u &&
				n &&
				!r[r.length - 1].route.index &&
				(f = yp(
					{ path: a.relativePath, caseSensitive: a.caseSensitive, end: !1 },
					c,
				)),
			!f)
		)
			return null;
		(Object.assign(o, f.params),
			s.push({
				params: o,
				pathname: lo([i, f.pathname]),
				pathnameBase: DC(lo([i, f.pathnameBase])),
				route: h,
			}),
			f.pathnameBase !== "/" && (i = lo([i, f.pathnameBase])));
	}
	return s;
}
function yp(e, t) {
	typeof e == "string" && (e = { path: e, caseSensitive: !1, end: !0 });
	let [n, r] = $C(e.path, e.caseSensitive, e.end),
		o = t.match(n);
	if (!o) return null;
	let i = o[0],
		s = i.replace(/(.)\/+$/, "$1"),
		l = o.slice(1);
	return {
		params: r.reduce((u, c, f) => {
			let { paramName: h, isOptional: d } = c;
			if (h === "*") {
				let v = l[f] || "";
				s = i.slice(0, i.length - v.length).replace(/(.)\/+$/, "$1");
			}
			const w = l[f];
			return (
				d && !w ? (u[h] = void 0) : (u[h] = (w || "").replace(/%2F/g, "/")),
				u
			);
		}, {}),
		pathname: i,
		pathnameBase: s,
		pattern: e,
	};
}
function $C(e, t, n) {
	(t === void 0 && (t = !1),
		n === void 0 && (n = !0),
		Ov(
			e === "*" || !e.endsWith("*") || e.endsWith("/*"),
			'Route path "' +
				e +
				'" will be treated as if it were ' +
				('"' + e.replace(/\*$/, "/*") + '" because the `*` character must ') +
				"always follow a `/` in the pattern. To get rid of this warning, " +
				('please change the route path to "' + e.replace(/\*$/, "/*") + '".'),
		));
	let r = [],
		o =
			"^" +
			e
				.replace(/\/*\*?$/, "")
				.replace(/^\/*/, "/")
				.replace(/[\\.*+^${}|()[\]]/g, "\\$&")
				.replace(
					/\/:([\w-]+)(\?)?/g,
					(s, l, a) => (
						r.push({ paramName: l, isOptional: a != null }),
						a ? "/?([^\\/]+)?" : "/([^\\/]+)"
					),
				);
	return (
		e.endsWith("*")
			? (r.push({ paramName: "*" }),
				(o += e === "*" || e === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$"))
			: n
				? (o += "\\/*$")
				: e !== "" && e !== "/" && (o += "(?:(?=\\/|$))"),
		[new RegExp(o, t ? void 0 : "i"), r]
	);
}
function MC(e) {
	try {
		return e
			.split("/")
			.map((t) => decodeURIComponent(t).replace(/\//g, "%2F"))
			.join("/");
	} catch (t) {
		return (
			Ov(
				!1,
				'The URL path "' +
					e +
					'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' +
					("encoding (" + t + ")."),
			),
			e
		);
	}
}
function $v(e, t) {
	if (t === "/") return e;
	if (!e.toLowerCase().startsWith(t.toLowerCase())) return null;
	let n = t.endsWith("/") ? t.length - 1 : t.length,
		r = e.charAt(n);
	return r && r !== "/" ? null : e.slice(n) || "/";
}
const lo = (e) => e.join("/").replace(/\/\/+/g, "/"),
	DC = (e) => e.replace(/\/+$/, "").replace(/^\/*/, "/");
function jC(e) {
	return (
		e != null &&
		typeof e.status == "number" &&
		typeof e.statusText == "string" &&
		typeof e.internal == "boolean" &&
		"data" in e
	);
}
const Mv = ["post", "put", "patch", "delete"];
new Set(Mv);
const FC = ["get", ...Mv];
new Set(FC);
/**
 * React Router v6.30.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function ml() {
	return (
		(ml = Object.assign
			? Object.assign.bind()
			: function (e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n)
							Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
					}
					return e;
				}),
		ml.apply(this, arguments)
	);
}
const zC = S.createContext(null),
	BC = S.createContext(null),
	Dv = S.createContext(null),
	Ql = S.createContext(null),
	Kl = S.createContext({ outlet: null, matches: [], isDataRoute: !1 }),
	jv = S.createContext(null);
function md() {
	return S.useContext(Ql) != null;
}
function Fv() {
	return (md() || nt(!1), S.useContext(Ql).location);
}
function UC(e, t) {
	return WC(e, t);
}
function WC(e, t, n, r) {
	md() || nt(!1);
	let { navigator: o } = S.useContext(Dv),
		{ matches: i } = S.useContext(Kl),
		s = i[i.length - 1],
		l = s ? s.params : {};
	s && s.pathname;
	let a = s ? s.pathnameBase : "/";
	s && s.route;
	let u = Fv(),
		c;
	if (t) {
		var f;
		let y = typeof t == "string" ? Hl(t) : t;
		(a === "/" || ((f = y.pathname) != null && f.startsWith(a)) || nt(!1),
			(c = y));
	} else c = u;
	let h = c.pathname || "/",
		d = h;
	if (a !== "/") {
		let y = a.replace(/^\//, "").split("/");
		d = "/" + h.replace(/^\//, "").split("/").slice(y.length).join("/");
	}
	let w = CC(e, { pathname: d }),
		v = GC(
			w &&
				w.map((y) =>
					Object.assign({}, y, {
						params: Object.assign({}, l, y.params),
						pathname: lo([
							a,
							o.encodeLocation
								? o.encodeLocation(y.pathname).pathname
								: y.pathname,
						]),
						pathnameBase:
							y.pathnameBase === "/"
								? a
								: lo([
										a,
										o.encodeLocation
											? o.encodeLocation(y.pathnameBase).pathname
											: y.pathnameBase,
									]),
					}),
				),
			i,
			n,
			r,
		);
	return t && v
		? S.createElement(
				Ql.Provider,
				{
					value: {
						location: ml(
							{
								pathname: "/",
								search: "",
								hash: "",
								state: null,
								key: "default",
							},
							c,
						),
						navigationType: Fn.Pop,
					},
				},
				v,
			)
		: v;
}
function VC() {
	let e = ZC(),
		t = jC(e)
			? e.status + " " + e.statusText
			: e instanceof Error
				? e.message
				: JSON.stringify(e),
		n = e instanceof Error ? e.stack : null,
		o = { padding: "0.5rem", backgroundColor: "rgba(200,200,200, 0.5)" };
	return S.createElement(
		S.Fragment,
		null,
		S.createElement("h2", null, "Unexpected Application Error!"),
		S.createElement("h3", { style: { fontStyle: "italic" } }, t),
		n ? S.createElement("pre", { style: o }, n) : null,
		null,
	);
}
const HC = S.createElement(VC, null);
class QC extends S.Component {
	constructor(t) {
		(super(t),
			(this.state = {
				location: t.location,
				revalidation: t.revalidation,
				error: t.error,
			}));
	}
	static getDerivedStateFromError(t) {
		return { error: t };
	}
	static getDerivedStateFromProps(t, n) {
		return n.location !== t.location ||
			(n.revalidation !== "idle" && t.revalidation === "idle")
			? { error: t.error, location: t.location, revalidation: t.revalidation }
			: {
					error: t.error !== void 0 ? t.error : n.error,
					location: n.location,
					revalidation: t.revalidation || n.revalidation,
				};
	}
	componentDidCatch(t, n) {
		console.error(
			"React Router caught the following error during render",
			t,
			n,
		);
	}
	render() {
		return this.state.error !== void 0
			? S.createElement(
					Kl.Provider,
					{ value: this.props.routeContext },
					S.createElement(jv.Provider, {
						value: this.state.error,
						children: this.props.component,
					}),
				)
			: this.props.children;
	}
}
function KC(e) {
	let { routeContext: t, match: n, children: r } = e,
		o = S.useContext(zC);
	return (
		o &&
			o.static &&
			o.staticContext &&
			(n.route.errorElement || n.route.ErrorBoundary) &&
			(o.staticContext._deepestRenderedBoundaryId = n.route.id),
		S.createElement(Kl.Provider, { value: t }, r)
	);
}
function GC(e, t, n, r) {
	var o;
	if (
		(t === void 0 && (t = []),
		n === void 0 && (n = null),
		r === void 0 && (r = null),
		e == null)
	) {
		var i;
		if (!n) return null;
		if (n.errors) e = n.matches;
		else if (
			(i = r) != null &&
			i.v7_partialHydration &&
			t.length === 0 &&
			!n.initialized &&
			n.matches.length > 0
		)
			e = n.matches;
		else return null;
	}
	let s = e,
		l = (o = n) == null ? void 0 : o.errors;
	if (l != null) {
		let c = s.findIndex(
			(f) => f.route.id && (l == null ? void 0 : l[f.route.id]) !== void 0,
		);
		(c >= 0 || nt(!1), (s = s.slice(0, Math.min(s.length, c + 1))));
	}
	let a = !1,
		u = -1;
	if (n && r && r.v7_partialHydration)
		for (let c = 0; c < s.length; c++) {
			let f = s[c];
			if (
				((f.route.HydrateFallback || f.route.hydrateFallbackElement) && (u = c),
				f.route.id)
			) {
				let { loaderData: h, errors: d } = n,
					w =
						f.route.loader &&
						h[f.route.id] === void 0 &&
						(!d || d[f.route.id] === void 0);
				if (f.route.lazy || w) {
					((a = !0), u >= 0 ? (s = s.slice(0, u + 1)) : (s = [s[0]]));
					break;
				}
			}
		}
	return s.reduceRight((c, f, h) => {
		let d,
			w = !1,
			v = null,
			y = null;
		n &&
			((d = l && f.route.id ? l[f.route.id] : void 0),
			(v = f.route.errorElement || HC),
			a &&
				(u < 0 && h === 0
					? ((w = !0), (y = null))
					: u === h &&
						((w = !0), (y = f.route.hydrateFallbackElement || null))));
		let m = t.concat(s.slice(0, h + 1)),
			p = () => {
				let g;
				return (
					d
						? (g = v)
						: w
							? (g = y)
							: f.route.Component
								? (g = S.createElement(f.route.Component, null))
								: f.route.element
									? (g = f.route.element)
									: (g = c),
					S.createElement(KC, {
						match: f,
						routeContext: { outlet: c, matches: m, isDataRoute: n != null },
						children: g,
					})
				);
			};
		return n && (f.route.ErrorBoundary || f.route.errorElement || h === 0)
			? S.createElement(QC, {
					location: n.location,
					revalidation: n.revalidation,
					component: v,
					error: d,
					children: p(),
					routeContext: { outlet: null, matches: m, isDataRoute: !0 },
				})
			: p();
	}, null);
}
var Gu = (function (e) {
	return (
		(e.UseBlocker = "useBlocker"),
		(e.UseLoaderData = "useLoaderData"),
		(e.UseActionData = "useActionData"),
		(e.UseRouteError = "useRouteError"),
		(e.UseNavigation = "useNavigation"),
		(e.UseRouteLoaderData = "useRouteLoaderData"),
		(e.UseMatches = "useMatches"),
		(e.UseRevalidator = "useRevalidator"),
		(e.UseNavigateStable = "useNavigate"),
		(e.UseRouteId = "useRouteId"),
		e
	);
})(Gu || {});
function YC(e) {
	let t = S.useContext(BC);
	return (t || nt(!1), t);
}
function XC(e) {
	let t = S.useContext(Kl);
	return (t || nt(!1), t);
}
function qC(e) {
	let t = XC(),
		n = t.matches[t.matches.length - 1];
	return (n.route.id || nt(!1), n.route.id);
}
function ZC() {
	var e;
	let t = S.useContext(jv),
		n = YC(Gu.UseRouteError),
		r = qC(Gu.UseRouteError);
	return t !== void 0 ? t : (e = n.errors) == null ? void 0 : e[r];
}
function JC(e, t) {
	(e == null || e.v7_startTransition, e == null || e.v7_relativeSplatPath);
}
function Yu(e) {
	nt(!1);
}
function ek(e) {
	let {
		basename: t = "/",
		children: n = null,
		location: r,
		navigationType: o = Fn.Pop,
		navigator: i,
		static: s = !1,
		future: l,
	} = e;
	md() && nt(!1);
	let a = t.replace(/^\/*/, "/"),
		u = S.useMemo(
			() => ({
				basename: a,
				navigator: i,
				static: s,
				future: ml({ v7_relativeSplatPath: !1 }, l),
			}),
			[a, l, i, s],
		);
	typeof r == "string" && (r = Hl(r));
	let {
			pathname: c = "/",
			search: f = "",
			hash: h = "",
			state: d = null,
			key: w = "default",
		} = r,
		v = S.useMemo(() => {
			let y = $v(c, a);
			return y == null
				? null
				: {
						location: { pathname: y, search: f, hash: h, state: d, key: w },
						navigationType: o,
					};
		}, [a, c, f, h, d, w, o]);
	return v == null
		? null
		: S.createElement(
				Dv.Provider,
				{ value: u },
				S.createElement(Ql.Provider, { children: n, value: v }),
			);
}
function tk(e) {
	let { children: t, location: n } = e;
	return UC(Xu(t), n);
}
new Promise(() => {});
function Xu(e, t) {
	t === void 0 && (t = []);
	let n = [];
	return (
		S.Children.forEach(e, (r, o) => {
			if (!S.isValidElement(r)) return;
			let i = [...t, o];
			if (r.type === S.Fragment) {
				n.push.apply(n, Xu(r.props.children, i));
				return;
			}
			(r.type !== Yu && nt(!1), !r.props.index || !r.props.children || nt(!1));
			let s = {
				id: r.props.id || i.join("-"),
				caseSensitive: r.props.caseSensitive,
				element: r.props.element,
				Component: r.props.Component,
				index: r.props.index,
				path: r.props.path,
				loader: r.props.loader,
				action: r.props.action,
				errorElement: r.props.errorElement,
				ErrorBoundary: r.props.ErrorBoundary,
				hasErrorBoundary:
					r.props.ErrorBoundary != null || r.props.errorElement != null,
				shouldRevalidate: r.props.shouldRevalidate,
				handle: r.props.handle,
				lazy: r.props.lazy,
			};
			(r.props.children && (s.children = Xu(r.props.children, i)), n.push(s));
		}),
		n
	);
}
/**
 * React Router DOM v6.30.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ const nk = "6";
try {
	window.__reactRouterVersion = nk;
} catch {}
const rk = "startTransition",
	wp = oh[rk];
function ok(e) {
	let { basename: t, children: n, future: r, window: o } = e,
		i = S.useRef();
	i.current == null && (i.current = xC({ window: o, v5Compat: !0 }));
	let s = i.current,
		[l, a] = S.useState({ action: s.action, location: s.location }),
		{ v7_startTransition: u } = r || {},
		c = S.useCallback(
			(f) => {
				u && wp ? wp(() => a(f)) : a(f);
			},
			[a, u],
		);
	return (
		S.useLayoutEffect(() => s.listen(c), [s, c]),
		S.useEffect(() => JC(r), [r]),
		S.createElement(ek, {
			basename: t,
			children: n,
			location: l.location,
			navigationType: l.action,
			navigator: s,
			future: r,
		})
	);
}
var xp;
(function (e) {
	((e.UseScrollRestoration = "useScrollRestoration"),
		(e.UseSubmit = "useSubmit"),
		(e.UseSubmitFetcher = "useSubmitFetcher"),
		(e.UseFetcher = "useFetcher"),
		(e.useViewTransitionState = "useViewTransitionState"));
})(xp || (xp = {}));
var Sp;
(function (e) {
	((e.UseFetcher = "useFetcher"),
		(e.UseFetchers = "useFetchers"),
		(e.UseScrollRestoration = "useScrollRestoration"));
})(Sp || (Sp = {}));
var Ze = function () {
	return (
		(Ze =
			Object.assign ||
			function (t) {
				for (var n, r = 1, o = arguments.length; r < o; r++) {
					n = arguments[r];
					for (var i in n)
						Object.prototype.hasOwnProperty.call(n, i) && (t[i] = n[i]);
				}
				return t;
			}),
		Ze.apply(this, arguments)
	);
};
function gl(e, t, n) {
	if (n || arguments.length === 2)
		for (var r = 0, o = t.length, i; r < o; r++)
			(i || !(r in t)) &&
				(i || (i = Array.prototype.slice.call(t, 0, r)), (i[r] = t[r]));
	return e.concat(i || Array.prototype.slice.call(t));
}
var ce = "-ms-",
	di = "-moz-",
	re = "-webkit-",
	zv = "comm",
	Gl = "rule",
	gd = "decl",
	ik = "@import",
	sk = "@namespace",
	Bv = "@keyframes",
	lk = "@layer",
	Uv = Math.abs,
	vd = String.fromCharCode,
	qu = Object.assign;
function ak(e, t) {
	return be(e, 0) ^ 45
		? (((((((t << 2) ^ be(e, 0)) << 2) ^ be(e, 1)) << 2) ^ be(e, 2)) << 2) ^
				be(e, 3)
		: 0;
}
function Wv(e) {
	return e.trim();
}
function sn(e, t) {
	return (e = t.exec(e)) ? e[0] : e;
}
function X(e, t, n) {
	return e.replace(t, n);
}
function Ls(e, t, n) {
	return e.indexOf(t, n);
}
function be(e, t) {
	return e.charCodeAt(t) | 0;
}
function Nr(e, t, n) {
	return e.slice(t, n);
}
function $t(e) {
	return e.length;
}
function Vv(e) {
	return e.length;
}
function Jo(e, t) {
	return (t.push(e), e);
}
function uk(e, t) {
	return e.map(t).join("");
}
function Ep(e, t) {
	return e.filter(function (n) {
		return !sn(n, t);
	});
}
var Yl = 1,
	Po = 1,
	Hv = 0,
	Et = 0,
	Ee = 0,
	Mo = "";
function Xl(e, t, n, r, o, i, s, l) {
	return {
		value: e,
		root: t,
		parent: n,
		type: r,
		props: o,
		children: i,
		line: Yl,
		column: Po,
		length: s,
		return: "",
		siblings: l,
	};
}
function Tn(e, t) {
	return qu(
		Xl("", null, null, "", null, null, 0, e.siblings),
		e,
		{ length: -e.length },
		t,
	);
}
function jr(e) {
	for (; e.root; ) e = Tn(e.root, { children: [e] });
	Jo(e, e.siblings);
}
function ck() {
	return Ee;
}
function dk() {
	return (
		(Ee = Et > 0 ? be(Mo, --Et) : 0),
		Po--,
		Ee === 10 && ((Po = 1), Yl--),
		Ee
	);
}
function Ft() {
	return (
		(Ee = Et < Hv ? be(Mo, Et++) : 0),
		Po++,
		Ee === 10 && ((Po = 1), Yl++),
		Ee
	);
}
function zn() {
	return be(Mo, Et);
}
function $s() {
	return Et;
}
function ql(e, t) {
	return Nr(Mo, e, t);
}
function Li(e) {
	switch (e) {
		case 0:
		case 9:
		case 10:
		case 13:
		case 32:
			return 5;
		case 33:
		case 43:
		case 44:
		case 47:
		case 62:
		case 64:
		case 126:
		case 59:
		case 123:
		case 125:
			return 4;
		case 58:
			return 3;
		case 34:
		case 39:
		case 40:
		case 91:
			return 2;
		case 41:
		case 93:
			return 1;
	}
	return 0;
}
function fk(e) {
	return ((Yl = Po = 1), (Hv = $t((Mo = e))), (Et = 0), []);
}
function pk(e) {
	return ((Mo = ""), e);
}
function Da(e) {
	return Wv(ql(Et - 1, Zu(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function hk(e) {
	for (; (Ee = zn()) && Ee < 33; ) Ft();
	return Li(e) > 2 || Li(Ee) > 3 ? "" : " ";
}
function mk(e, t) {
	for (
		;
		--t &&
		Ft() &&
		!(Ee < 48 || Ee > 102 || (Ee > 57 && Ee < 65) || (Ee > 70 && Ee < 97));
	);
	return ql(e, $s() + (t < 6 && zn() == 32 && Ft() == 32));
}
function Zu(e) {
	for (; Ft(); )
		switch (Ee) {
			case e:
				return Et;
			case 34:
			case 39:
				e !== 34 && e !== 39 && Zu(Ee);
				break;
			case 40:
				e === 41 && Zu(e);
				break;
			case 92:
				Ft();
				break;
		}
	return Et;
}
function gk(e, t) {
	for (; Ft() && e + Ee !== 57; ) if (e + Ee === 84 && zn() === 47) break;
	return "/*" + ql(t, Et - 1) + "*" + vd(e === 47 ? e : Ft());
}
function vk(e) {
	for (; !Li(zn()); ) Ft();
	return ql(e, Et);
}
function yk(e) {
	return pk(Ms("", null, null, null, [""], (e = fk(e)), 0, [0], e));
}
function Ms(e, t, n, r, o, i, s, l, a) {
	for (
		var u = 0,
			c = 0,
			f = s,
			h = 0,
			d = 0,
			w = 0,
			v = 1,
			y = 1,
			m = 1,
			p = 0,
			g = "",
			x = o,
			C = i,
			k = r,
			E = g;
		y;
	)
		switch (((w = p), (p = Ft()))) {
			case 40:
				if (w != 108 && be(E, f - 1) == 58) {
					Ls((E += X(Da(p), "&", "&\f")), "&\f", Uv(u ? l[u - 1] : 0)) != -1 &&
						(m = -1);
					break;
				}
			case 34:
			case 39:
			case 91:
				E += Da(p);
				break;
			case 9:
			case 10:
			case 13:
			case 32:
				E += hk(w);
				break;
			case 92:
				E += mk($s() - 1, 7);
				continue;
			case 47:
				switch (zn()) {
					case 42:
					case 47:
						(Jo(wk(gk(Ft(), $s()), t, n, a), a),
							(Li(w || 1) == 5 || Li(zn() || 1) == 5) &&
								$t(E) &&
								Nr(E, -1, void 0) !== " " &&
								(E += " "));
						break;
					default:
						E += "/";
				}
				break;
			case 123 * v:
				l[u++] = $t(E) * m;
			case 125 * v:
			case 59:
			case 0:
				switch (p) {
					case 0:
					case 125:
						y = 0;
					case 59 + c:
						(m == -1 && (E = X(E, /\f/g, "")),
							d > 0 &&
								($t(E) - f || (v === 0 && w === 47)) &&
								Jo(
									d > 32
										? kp(E + ";", r, n, f - 1, a)
										: kp(X(E, " ", "") + ";", r, n, f - 2, a),
									a,
								));
						break;
					case 59:
						E += ";";
					default:
						if (
							(Jo(
								(k = Cp(E, t, n, u, c, o, l, g, (x = []), (C = []), f, i)),
								i,
							),
							p === 123)
						)
							if (c === 0) Ms(E, t, k, k, x, i, f, l, C);
							else {
								switch (h) {
									case 99:
										if (be(E, 3) === 110) break;
									case 108:
										if (be(E, 2) === 97) break;
									default:
										c = 0;
									case 100:
									case 109:
									case 115:
								}
								c
									? Ms(
											e,
											k,
											k,
											r && Jo(Cp(e, k, k, 0, 0, o, l, g, o, (x = []), f, C), C),
											o,
											C,
											f,
											l,
											r ? x : C,
										)
									: Ms(E, k, k, k, [""], C, 0, l, C);
							}
				}
				((u = c = d = 0), (v = m = 1), (g = E = ""), (f = s));
				break;
			case 58:
				((f = 1 + $t(E)), (d = w));
			default:
				if (v < 1) {
					if (p == 123) --v;
					else if (p == 125 && v++ == 0 && dk() == 125) continue;
				}
				switch (((E += vd(p)), p * v)) {
					case 38:
						m = c > 0 ? 1 : ((E += "\f"), -1);
						break;
					case 44:
						((l[u++] = ($t(E) - 1) * m), (m = 1));
						break;
					case 64:
						(zn() === 45 && (E += Da(Ft())),
							(h = zn()),
							(c = f = $t((g = E += vk($s())))),
							p++);
						break;
					case 45:
						w === 45 && $t(E) == 2 && (v = 0);
				}
		}
	return i;
}
function Cp(e, t, n, r, o, i, s, l, a, u, c, f) {
	for (
		var h = o - 1, d = o === 0 ? i : [""], w = Vv(d), v = 0, y = 0, m = 0;
		v < r;
		++v
	)
		for (var p = 0, g = Nr(e, h + 1, (h = Uv((y = s[v])))), x = e; p < w; ++p)
			(x = Wv(y > 0 ? d[p] + " " + g : X(g, /&\f/g, d[p]))) && (a[m++] = x);
	return Xl(e, t, n, o === 0 ? Gl : l, a, u, c, f);
}
function wk(e, t, n, r) {
	return Xl(e, t, n, zv, vd(ck()), Nr(e, 2, -2), 0, r);
}
function kp(e, t, n, r, o) {
	return Xl(e, t, n, gd, Nr(e, 0, r), Nr(e, r + 1, -1), r, o);
}
function Qv(e, t, n) {
	switch (ak(e, t)) {
		case 5103:
			return re + "print-" + e + e;
		case 5737:
		case 4201:
		case 3177:
		case 3433:
		case 1641:
		case 4457:
		case 2921:
		case 5572:
		case 6356:
		case 5844:
		case 3191:
		case 6645:
		case 3005:
		case 4215:
		case 6389:
		case 5109:
		case 5365:
		case 5621:
		case 3829:
		case 6391:
		case 5879:
		case 5623:
		case 6135:
		case 4599:
			return re + e + e;
		case 4855:
			return (
				re +
				e
					.replace("add", "source-over")
					.replace("substract", "source-out")
					.replace("intersect", "source-in")
					.replace("exclude", "xor") +
				e
			);
		case 4789:
			return di + e + e;
		case 5349:
		case 4246:
		case 4810:
		case 6968:
		case 2756:
			return re + e + di + e + ce + e + e;
		case 5936:
			switch (be(e, t + 11)) {
				case 114:
					return re + e + ce + X(e, /[svh]\w+-[tblr]{2}/, "tb") + e;
				case 108:
					return re + e + ce + X(e, /[svh]\w+-[tblr]{2}/, "tb-rl") + e;
				case 45:
					return re + e + ce + X(e, /[svh]\w+-[tblr]{2}/, "lr") + e;
			}
		case 6828:
		case 4268:
		case 2903:
			return re + e + ce + e + e;
		case 6165:
			return re + e + ce + "flex-" + e + e;
		case 5187:
			return (
				re + e + X(e, /(\w+).+(:[^]+)/, re + "box-$1$2" + ce + "flex-$1$2") + e
			);
		case 5443:
			return (
				re +
				e +
				ce +
				"flex-item-" +
				X(e, /flex-|-self/g, "") +
				(sn(e, /flex-|baseline/)
					? ""
					: ce + "grid-row-" + X(e, /flex-|-self/g, "")) +
				e
			);
		case 4675:
			return (
				re +
				e +
				ce +
				"flex-line-pack" +
				X(e, /align-content|flex-|-self/g, "") +
				e
			);
		case 5548:
			return re + e + ce + X(e, "shrink", "negative") + e;
		case 5292:
			return re + e + ce + X(e, "basis", "preferred-size") + e;
		case 6060:
			return (
				re +
				"box-" +
				X(e, "-grow", "") +
				re +
				e +
				ce +
				X(e, "grow", "positive") +
				e
			);
		case 4554:
			return re + X(e, /([^-])(transform)/g, "$1" + re + "$2") + e;
		case 6187:
			return (
				X(X(X(e, /(zoom-|grab)/, re + "$1"), /(image-set)/, re + "$1"), e, "") +
				e
			);
		case 5495:
		case 3959:
			return X(e, /(image-set\([^]*)/, re + "$1$`$1");
		case 4968:
			return (
				X(
					X(e, /(.+:)(flex-)?(.*)/, re + "box-pack:$3" + ce + "flex-pack:$3"),
					/space-between/,
					"justify",
				) +
				re +
				e +
				e
			);
		case 4200:
			if (!sn(e, /flex-|baseline/))
				return ce + "grid-column-align" + Nr(e, t) + e;
			break;
		case 2592:
		case 3360:
			return ce + X(e, "template-", "") + e;
		case 4384:
		case 3616:
			return n &&
				n.some(function (r, o) {
					return ((t = o), sn(r.props, /grid-\w+-end/));
				})
				? ~Ls(e + (n = n[t].value), "span", 0)
					? e
					: ce +
						X(e, "-start", "") +
						e +
						ce +
						"grid-row-span:" +
						(~Ls(n, "span", 0) ? sn(n, /\d+/) : +sn(n, /\d+/) - +sn(e, /\d+/)) +
						";"
				: ce + X(e, "-start", "") + e;
		case 4896:
		case 4128:
			return n &&
				n.some(function (r) {
					return sn(r.props, /grid-\w+-start/);
				})
				? e
				: ce + X(X(e, "-end", "-span"), "span ", "") + e;
		case 4095:
		case 3583:
		case 4068:
		case 2532:
			return X(e, /(.+)-inline(.+)/, re + "$1$2") + e;
		case 8116:
		case 7059:
		case 5753:
		case 5535:
		case 5445:
		case 5701:
		case 4933:
		case 4677:
		case 5533:
		case 5789:
		case 5021:
		case 4765:
			if ($t(e) - 1 - t > 6)
				switch (be(e, t + 1)) {
					case 109:
						if (be(e, t + 4) !== 45) break;
					case 102:
						return (
							X(
								e,
								/(.+:)(.+)-([^]+)/,
								"$1" +
									re +
									"$2-$3$1" +
									di +
									(be(e, t + 3) == 108 ? "$3" : "$2-$3"),
							) + e
						);
					case 115:
						return ~Ls(e, "stretch", 0)
							? Qv(X(e, "stretch", "fill-available"), t, n) + e
							: e;
				}
			break;
		case 5152:
		case 5920:
			return X(
				e,
				/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,
				function (r, o, i, s, l, a, u) {
					return (
						ce +
						o +
						":" +
						i +
						u +
						(s ? ce + o + "-span:" + (l ? a : +a - +i) + u : "") +
						e
					);
				},
			);
		case 4949:
			if (be(e, t + 6) === 121) return X(e, ":", ":" + re) + e;
			break;
		case 6444:
			switch (be(e, be(e, 14) === 45 ? 18 : 11)) {
				case 120:
					return (
						X(
							e,
							/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,
							"$1" +
								re +
								(be(e, 14) === 45 ? "inline-" : "") +
								"box$3$1" +
								re +
								"$2$3$1" +
								ce +
								"$2box$3",
						) + e
					);
				case 100:
					return X(e, ":", ":" + ce) + e;
			}
			break;
		case 5719:
		case 2647:
		case 2135:
		case 3927:
		case 2391:
			return X(e, "scroll-", "scroll-snap-") + e;
	}
	return e;
}
function vl(e, t) {
	for (var n = "", r = 0; r < e.length; r++) n += t(e[r], r, e, t) || "";
	return n;
}
function xk(e, t, n, r) {
	switch (e.type) {
		case lk:
			if (e.children.length) break;
		case ik:
		case sk:
		case gd:
			return (e.return = e.return || e.value);
		case zv:
			return "";
		case Bv:
			return (e.return = e.value + "{" + vl(e.children, r) + "}");
		case Gl:
			if (!$t((e.value = e.props.join(",")))) return "";
	}
	return $t((n = vl(e.children, r)))
		? (e.return = e.value + "{" + n + "}")
		: "";
}
function Sk(e) {
	var t = Vv(e);
	return function (n, r, o, i) {
		for (var s = "", l = 0; l < t; l++) s += e[l](n, r, o, i) || "";
		return s;
	};
}
function Ek(e) {
	return function (t) {
		t.root || ((t = t.return) && e(t));
	};
}
function Ck(e, t, n, r) {
	if (e.length > -1 && !e.return)
		switch (e.type) {
			case gd:
				e.return = Qv(e.value, e.length, n);
				return;
			case Bv:
				return vl([Tn(e, { value: X(e.value, "@", "@" + re) })], r);
			case Gl:
				if (e.length)
					return uk((n = e.props), function (o) {
						switch (sn(o, (r = /(::plac\w+|:read-\w+)/))) {
							case ":read-only":
							case ":read-write":
								(jr(Tn(e, { props: [X(o, /:(read-\w+)/, ":" + di + "$1")] })),
									jr(Tn(e, { props: [o] })),
									qu(e, { props: Ep(n, r) }));
								break;
							case "::placeholder":
								(jr(
									Tn(e, { props: [X(o, /:(plac\w+)/, ":" + re + "input-$1")] }),
								),
									jr(Tn(e, { props: [X(o, /:(plac\w+)/, ":" + di + "$1")] })),
									jr(Tn(e, { props: [X(o, /:(plac\w+)/, ce + "input-$1")] })),
									jr(Tn(e, { props: [o] })),
									qu(e, { props: Ep(n, r) }));
								break;
						}
						return "";
					});
		}
}
var kk = {
		animationIterationCount: 1,
		aspectRatio: 1,
		borderImageOutset: 1,
		borderImageSlice: 1,
		borderImageWidth: 1,
		boxFlex: 1,
		boxFlexGroup: 1,
		boxOrdinalGroup: 1,
		columnCount: 1,
		columns: 1,
		flex: 1,
		flexGrow: 1,
		flexPositive: 1,
		flexShrink: 1,
		flexNegative: 1,
		flexOrder: 1,
		gridRow: 1,
		gridRowEnd: 1,
		gridRowSpan: 1,
		gridRowStart: 1,
		gridColumn: 1,
		gridColumnEnd: 1,
		gridColumnSpan: 1,
		gridColumnStart: 1,
		msGridRow: 1,
		msGridRowSpan: 1,
		msGridColumn: 1,
		msGridColumnSpan: 1,
		fontWeight: 1,
		lineHeight: 1,
		opacity: 1,
		order: 1,
		orphans: 1,
		scale: 1,
		tabSize: 1,
		widows: 1,
		zIndex: 1,
		zoom: 1,
		WebkitLineClamp: 1,
		fillOpacity: 1,
		floodOpacity: 1,
		stopOpacity: 1,
		strokeDasharray: 1,
		strokeDashoffset: 1,
		strokeMiterlimit: 1,
		strokeOpacity: 1,
		strokeWidth: 1,
	},
	ot = {},
	To =
		(typeof process < "u" &&
			ot !== void 0 &&
			(ot.REACT_APP_SC_ATTR || ot.SC_ATTR)) ||
		"data-styled",
	Kv = "active",
	Gv = "data-styled-version",
	Zl = "6.3.11",
	yd = `/*!sc*/
`,
	fi = typeof window < "u" && typeof document < "u",
	bk = !!(typeof SC_DISABLE_SPEEDY == "boolean"
		? SC_DISABLE_SPEEDY
		: typeof process < "u" &&
			  ot !== void 0 &&
			  ot.REACT_APP_SC_DISABLE_SPEEDY !== void 0 &&
			  ot.REACT_APP_SC_DISABLE_SPEEDY !== ""
			? ot.REACT_APP_SC_DISABLE_SPEEDY !== "false" &&
				ot.REACT_APP_SC_DISABLE_SPEEDY
			: typeof process < "u" &&
				ot !== void 0 &&
				ot.SC_DISABLE_SPEEDY !== void 0 &&
				ot.SC_DISABLE_SPEEDY !== "" &&
				ot.SC_DISABLE_SPEEDY !== "false" &&
				ot.SC_DISABLE_SPEEDY);
function Qi(e) {
	for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
	return new Error(
		"An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#"
			.concat(e, " for more information.")
			.concat(t.length > 0 ? " Args: ".concat(t.join(", ")) : ""),
	);
}
var Ds = new Map(),
	yl = new Map(),
	js = 1,
	ei = function (e) {
		if (Ds.has(e)) return Ds.get(e);
		for (; yl.has(js); ) js++;
		var t = js++;
		return (Ds.set(e, t), yl.set(t, e), t);
	},
	Pk = function (e, t) {
		((js = t + 1), Ds.set(e, t), yl.set(t, e));
	},
	wd = Object.freeze([]),
	Ro = Object.freeze({});
function Tk(e, t, n) {
	return (
		n === void 0 && (n = Ro),
		(e.theme !== n.theme && e.theme) || t || n.theme
	);
}
var Yv = new Set([
		"a",
		"abbr",
		"address",
		"area",
		"article",
		"aside",
		"audio",
		"b",
		"bdi",
		"bdo",
		"blockquote",
		"body",
		"button",
		"br",
		"canvas",
		"caption",
		"cite",
		"code",
		"col",
		"colgroup",
		"data",
		"datalist",
		"dd",
		"del",
		"details",
		"dfn",
		"dialog",
		"div",
		"dl",
		"dt",
		"em",
		"embed",
		"fieldset",
		"figcaption",
		"figure",
		"footer",
		"form",
		"h1",
		"h2",
		"h3",
		"h4",
		"h5",
		"h6",
		"header",
		"hgroup",
		"hr",
		"html",
		"i",
		"iframe",
		"img",
		"input",
		"ins",
		"kbd",
		"label",
		"legend",
		"li",
		"main",
		"map",
		"mark",
		"menu",
		"meter",
		"nav",
		"object",
		"ol",
		"optgroup",
		"option",
		"output",
		"p",
		"picture",
		"pre",
		"progress",
		"q",
		"rp",
		"rt",
		"ruby",
		"s",
		"samp",
		"search",
		"section",
		"select",
		"slot",
		"small",
		"span",
		"strong",
		"sub",
		"summary",
		"sup",
		"table",
		"tbody",
		"td",
		"template",
		"textarea",
		"tfoot",
		"th",
		"thead",
		"time",
		"tr",
		"u",
		"ul",
		"var",
		"video",
		"wbr",
		"circle",
		"clipPath",
		"defs",
		"ellipse",
		"feBlend",
		"feColorMatrix",
		"feComponentTransfer",
		"feComposite",
		"feConvolveMatrix",
		"feDiffuseLighting",
		"feDisplacementMap",
		"feDistantLight",
		"feDropShadow",
		"feFlood",
		"feFuncA",
		"feFuncB",
		"feFuncG",
		"feFuncR",
		"feGaussianBlur",
		"feImage",
		"feMerge",
		"feMergeNode",
		"feMorphology",
		"feOffset",
		"fePointLight",
		"feSpecularLighting",
		"feSpotLight",
		"feTile",
		"feTurbulence",
		"filter",
		"foreignObject",
		"g",
		"image",
		"line",
		"linearGradient",
		"marker",
		"mask",
		"path",
		"pattern",
		"polygon",
		"polyline",
		"radialGradient",
		"rect",
		"stop",
		"svg",
		"switch",
		"symbol",
		"text",
		"textPath",
		"tspan",
		"use",
	]),
	Rk = /[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,
	Nk = /(^-|-$)/g;
function bp(e) {
	return e.replace(Rk, "-").replace(Nk, "");
}
var Ak = /(a)(d)/gi,
	Pp = function (e) {
		return String.fromCharCode(e + (e > 25 ? 39 : 97));
	};
function Ju(e) {
	var t,
		n = "";
	for (t = Math.abs(e); t > 52; t = (t / 52) | 0) n = Pp(t % 52) + n;
	return (Pp(t % 52) + n).replace(Ak, "$1-$2");
}
var ja,
	ar = function (e, t) {
		for (var n = t.length; n; ) e = (33 * e) ^ t.charCodeAt(--n);
		return e;
	},
	Xv = function (e) {
		return ar(5381, e);
	};
function Ok(e) {
	return Ju(Xv(e) >>> 0);
}
function _k(e) {
	return e.displayName || e.name || "Component";
}
function Fa(e) {
	return typeof e == "string" && !0;
}
var qv = typeof Symbol == "function" && Symbol.for,
	Zv = qv ? Symbol.for("react.memo") : 60115,
	Ik = qv ? Symbol.for("react.forward_ref") : 60112,
	Lk = {
		childContextTypes: !0,
		contextType: !0,
		contextTypes: !0,
		defaultProps: !0,
		displayName: !0,
		getDefaultProps: !0,
		getDerivedStateFromError: !0,
		getDerivedStateFromProps: !0,
		mixins: !0,
		propTypes: !0,
		type: !0,
	},
	$k = {
		name: !0,
		length: !0,
		prototype: !0,
		caller: !0,
		callee: !0,
		arguments: !0,
		arity: !0,
	},
	Jv = {
		$$typeof: !0,
		compare: !0,
		defaultProps: !0,
		displayName: !0,
		propTypes: !0,
		type: !0,
	},
	Mk =
		(((ja = {})[Ik] = {
			$$typeof: !0,
			render: !0,
			defaultProps: !0,
			displayName: !0,
			propTypes: !0,
		}),
		(ja[Zv] = Jv),
		ja);
function Tp(e) {
	return ("type" in (t = e) && t.type.$$typeof) === Zv
		? Jv
		: "$$typeof" in e
			? Mk[e.$$typeof]
			: Lk;
	var t;
}
var Dk = Object.defineProperty,
	jk = Object.getOwnPropertyNames,
	Rp = Object.getOwnPropertySymbols,
	Fk = Object.getOwnPropertyDescriptor,
	zk = Object.getPrototypeOf,
	Np = Object.prototype;
function ey(e, t, n) {
	if (typeof t != "string") {
		if (Np) {
			var r = zk(t);
			r && r !== Np && ey(e, r, n);
		}
		var o = jk(t);
		Rp && (o = o.concat(Rp(t)));
		for (var i = Tp(e), s = Tp(t), l = 0; l < o.length; ++l) {
			var a = o[l];
			if (!(a in $k || (n && n[a]) || (s && a in s) || (i && a in i))) {
				var u = Fk(t, a);
				try {
					Dk(e, a, u);
				} catch {}
			}
		}
	}
	return e;
}
function No(e) {
	return typeof e == "function";
}
function xd(e) {
	return typeof e == "object" && "styledComponentId" in e;
}
function pr(e, t) {
	return e && t ? "".concat(e, " ").concat(t) : e || t || "";
}
function Ap(e, t) {
	return e.join("");
}
function $i(e) {
	return (
		e !== null &&
		typeof e == "object" &&
		e.constructor.name === Object.name &&
		!("props" in e && e.$$typeof)
	);
}
function ec(e, t, n) {
	if ((n === void 0 && (n = !1), !n && !$i(e) && !Array.isArray(e))) return t;
	if (Array.isArray(t))
		for (var r = 0; r < t.length; r++) e[r] = ec(e[r], t[r]);
	else if ($i(t)) for (var r in t) e[r] = ec(e[r], t[r]);
	return e;
}
function Sd(e, t) {
	Object.defineProperty(e, "toString", { value: t });
}
var Bk = (function () {
		function e(t) {
			((this.groupSizes = new Uint32Array(512)),
				(this.length = 512),
				(this.tag = t),
				(this._cGroup = 0),
				(this._cIndex = 0));
		}
		return (
			(e.prototype.indexOfGroup = function (t) {
				if (t === this._cGroup) return this._cIndex;
				var n = this._cIndex;
				if (t > this._cGroup)
					for (var r = this._cGroup; r < t; r++) n += this.groupSizes[r];
				else for (r = this._cGroup - 1; r >= t; r--) n -= this.groupSizes[r];
				return ((this._cGroup = t), (this._cIndex = n), n);
			}),
			(e.prototype.insertRules = function (t, n) {
				if (t >= this.groupSizes.length) {
					for (var r = this.groupSizes, o = r.length, i = o; t >= i; )
						if ((i <<= 1) < 0) throw Qi(16, "".concat(t));
					((this.groupSizes = new Uint32Array(i)),
						this.groupSizes.set(r),
						(this.length = i));
					for (var s = o; s < i; s++) this.groupSizes[s] = 0;
				}
				for (
					var l = this.indexOfGroup(t + 1), a = 0, u = ((s = 0), n.length);
					s < u;
					s++
				)
					this.tag.insertRule(l, n[s]) && (this.groupSizes[t]++, l++, a++);
				a > 0 && this._cGroup > t && (this._cIndex += a);
			}),
			(e.prototype.clearGroup = function (t) {
				if (t < this.length) {
					var n = this.groupSizes[t],
						r = this.indexOfGroup(t),
						o = r + n;
					this.groupSizes[t] = 0;
					for (var i = r; i < o; i++) this.tag.deleteRule(r);
					n > 0 && this._cGroup > t && (this._cIndex -= n);
				}
			}),
			(e.prototype.getGroup = function (t) {
				var n = "";
				if (t >= this.length || this.groupSizes[t] === 0) return n;
				for (
					var r = this.groupSizes[t],
						o = this.indexOfGroup(t),
						i = o + r,
						s = o;
					s < i;
					s++
				)
					n += this.tag.getRule(s) + yd;
				return n;
			}),
			e
		);
	})(),
	Uk = "style[".concat(To, "][").concat(Gv, '="').concat(Zl, '"]'),
	Wk = new RegExp(
		"^".concat(To, '\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)'),
	),
	Op = function (e) {
		return (
			(typeof ShadowRoot < "u" && e instanceof ShadowRoot) ||
			("host" in e && e.nodeType === 11)
		);
	},
	tc = function (e) {
		if (!e) return document;
		if (Op(e)) return e;
		if ("getRootNode" in e) {
			var t = e.getRootNode();
			if (Op(t)) return t;
		}
		return document;
	},
	Vk = function (e, t, n) {
		for (var r, o = n.split(","), i = 0, s = o.length; i < s; i++)
			(r = o[i]) && e.registerName(t, r);
	},
	Hk = function (e, t) {
		for (
			var n,
				r = ((n = t.textContent) !== null && n !== void 0 ? n : "").split(yd),
				o = [],
				i = 0,
				s = r.length;
			i < s;
			i++
		) {
			var l = r[i].trim();
			if (l) {
				var a = l.match(Wk);
				if (a) {
					var u = 0 | parseInt(a[1], 10),
						c = a[2];
					(u !== 0 && (Pk(c, u), Vk(e, c, a[3]), e.getTag().insertRules(u, o)),
						(o.length = 0));
				} else o.push(l);
			}
		}
	},
	za = function (e) {
		for (
			var t = tc(e.options.target).querySelectorAll(Uk), n = 0, r = t.length;
			n < r;
			n++
		) {
			var o = t[n];
			o &&
				o.getAttribute(To) !== Kv &&
				(Hk(e, o), o.parentNode && o.parentNode.removeChild(o));
		}
	};
function Qk() {
	return typeof __webpack_nonce__ < "u" ? __webpack_nonce__ : null;
}
var ty = function (e) {
		var t = document.head,
			n = e || t,
			r = document.createElement("style"),
			o = (function (l) {
				var a = Array.from(l.querySelectorAll("style[".concat(To, "]")));
				return a[a.length - 1];
			})(n),
			i = o !== void 0 ? o.nextSibling : null;
		(r.setAttribute(To, Kv), r.setAttribute(Gv, Zl));
		var s = Qk();
		return (s && r.setAttribute("nonce", s), n.insertBefore(r, i), r);
	},
	Kk = (function () {
		function e(t) {
			((this.element = ty(t)),
				this.element.appendChild(document.createTextNode("")),
				(this.sheet = (function (n) {
					var r;
					if (n.sheet) return n.sheet;
					for (
						var o =
								(r = n.getRootNode().styleSheets) !== null && r !== void 0
									? r
									: document.styleSheets,
							i = 0,
							s = o.length;
						i < s;
						i++
					) {
						var l = o[i];
						if (l.ownerNode === n) return l;
					}
					throw Qi(17);
				})(this.element)),
				(this.length = 0));
		}
		return (
			(e.prototype.insertRule = function (t, n) {
				try {
					return (this.sheet.insertRule(n, t), this.length++, !0);
				} catch {
					return !1;
				}
			}),
			(e.prototype.deleteRule = function (t) {
				(this.sheet.deleteRule(t), this.length--);
			}),
			(e.prototype.getRule = function (t) {
				var n = this.sheet.cssRules[t];
				return n && n.cssText ? n.cssText : "";
			}),
			e
		);
	})(),
	Gk = (function () {
		function e(t) {
			((this.element = ty(t)),
				(this.nodes = this.element.childNodes),
				(this.length = 0));
		}
		return (
			(e.prototype.insertRule = function (t, n) {
				if (t <= this.length && t >= 0) {
					var r = document.createTextNode(n);
					return (
						this.element.insertBefore(r, this.nodes[t] || null),
						this.length++,
						!0
					);
				}
				return !1;
			}),
			(e.prototype.deleteRule = function (t) {
				(this.element.removeChild(this.nodes[t]), this.length--);
			}),
			(e.prototype.getRule = function (t) {
				return t < this.length ? this.nodes[t].textContent : "";
			}),
			e
		);
	})(),
	Yk = (function () {
		function e(t) {
			((this.rules = []), (this.length = 0));
		}
		return (
			(e.prototype.insertRule = function (t, n) {
				return (
					t <= this.length &&
					(t === this.length ? this.rules.push(n) : this.rules.splice(t, 0, n),
					this.length++,
					!0)
				);
			}),
			(e.prototype.deleteRule = function (t) {
				(this.rules.splice(t, 1), this.length--);
			}),
			(e.prototype.getRule = function (t) {
				return t < this.length ? this.rules[t] : "";
			}),
			e
		);
	})(),
	_p = fi,
	Xk = { isServer: !fi, useCSSOMInjection: !bk },
	ny = (function () {
		function e(t, n, r) {
			(t === void 0 && (t = Ro), n === void 0 && (n = {}));
			var o = this;
			((this.options = Ze(Ze({}, Xk), t)),
				(this.gs = n),
				(this.names = new Map(r)),
				(this.server = !!t.isServer),
				!this.server && fi && _p && ((_p = !1), za(this)),
				Sd(this, function () {
					return (function (i) {
						for (
							var s = i.getTag(),
								l = s.length,
								a = "",
								u = function (f) {
									var h = (function (m) {
										return yl.get(m);
									})(f);
									if (h === void 0) return "continue";
									var d = i.names.get(h);
									if (d === void 0 || !d.size) return "continue";
									var w = s.getGroup(f);
									if (w.length === 0) return "continue";
									var v = To + ".g" + f + '[id="' + h + '"]',
										y = "";
									(d.forEach(function (m) {
										m.length > 0 && (y += m + ",");
									}),
										(a += w + v + '{content:"' + y + '"}' + yd));
								},
								c = 0;
							c < l;
							c++
						)
							u(c);
						return a;
					})(o);
				}));
		}
		return (
			(e.registerId = function (t) {
				return ei(t);
			}),
			(e.prototype.rehydrate = function () {
				!this.server && fi && za(this);
			}),
			(e.prototype.reconstructWithOptions = function (t, n) {
				n === void 0 && (n = !0);
				var r = new e(
					Ze(Ze({}, this.options), t),
					this.gs,
					(n && this.names) || void 0,
				);
				return (
					!this.server &&
						fi &&
						t.target !== this.options.target &&
						tc(this.options.target) !== tc(t.target) &&
						za(r),
					r
				);
			}),
			(e.prototype.allocateGSInstance = function (t) {
				return (this.gs[t] = (this.gs[t] || 0) + 1);
			}),
			(e.prototype.getTag = function () {
				return (
					this.tag ||
					(this.tag =
						((t = (function (n) {
							var r = n.useCSSOMInjection,
								o = n.target;
							return n.isServer ? new Yk(o) : r ? new Kk(o) : new Gk(o);
						})(this.options)),
						new Bk(t)))
				);
				var t;
			}),
			(e.prototype.hasNameForId = function (t, n) {
				var r, o;
				return (
					(o =
						(r = this.names.get(t)) === null || r === void 0
							? void 0
							: r.has(n)) !== null &&
					o !== void 0 &&
					o
				);
			}),
			(e.prototype.registerName = function (t, n) {
				ei(t);
				var r = this.names.get(t);
				r ? r.add(n) : this.names.set(t, new Set([n]));
			}),
			(e.prototype.insertRules = function (t, n, r) {
				(this.registerName(t, n), this.getTag().insertRules(ei(t), r));
			}),
			(e.prototype.clearNames = function (t) {
				this.names.has(t) && this.names.get(t).clear();
			}),
			(e.prototype.clearRules = function (t) {
				(this.getTag().clearGroup(ei(t)), this.clearNames(t));
			}),
			(e.prototype.clearTag = function () {
				this.tag = void 0;
			}),
			e
		);
	})(),
	qk = /&/g,
	ln = 47,
	ur = 42;
function Ip(e) {
	if (e.indexOf("}") === -1) return !1;
	for (var t = e.length, n = 0, r = 0, o = !1, i = 0; i < t; i++) {
		var s = e.charCodeAt(i);
		if (r !== 0 || o || s !== ln || e.charCodeAt(i + 1) !== ur)
			if (o) s === ur && e.charCodeAt(i + 1) === ln && ((o = !1), i++);
			else if (
				(s !== 34 && s !== 39) ||
				(i !== 0 && e.charCodeAt(i - 1) === 92)
			) {
				if (r === 0) {
					if (s === 123) n++;
					else if (s === 125 && --n < 0) return !0;
				}
			} else r === 0 ? (r = s) : r === s && (r = 0);
		else ((o = !0), i++);
	}
	return n !== 0 || r !== 0;
}
function ry(e, t) {
	return e.map(function (n) {
		return (
			n.type === "rule" &&
				((n.value = "".concat(t, " ").concat(n.value)),
				(n.value = n.value.replaceAll(",", ",".concat(t, " "))),
				(n.props = n.props.map(function (r) {
					return "".concat(t, " ").concat(r);
				}))),
			Array.isArray(n.children) &&
				n.type !== "@keyframes" &&
				(n.children = ry(n.children, t)),
			n
		);
	});
}
function Zk(e) {
	var t,
		n,
		r,
		o = Ro,
		i = o.options,
		s = i === void 0 ? Ro : i,
		l = o.plugins,
		a = l === void 0 ? wd : l,
		u = function (w, v, y) {
			return y.startsWith(n) && y.endsWith(n) && y.replaceAll(n, "").length > 0
				? ".".concat(t)
				: w;
		},
		c = a.slice();
	(c.push(function (w) {
		w.type === Gl &&
			w.value.includes("&") &&
			(r || (r = new RegExp("\\".concat(n, "\\b"), "g")),
			(w.props[0] = w.props[0].replace(qk, n).replace(r, u)));
	}),
		s.prefix && c.push(Ck),
		c.push(xk));
	var f = [],
		h = Sk(
			c.concat(
				Ek(function (w) {
					return f.push(w);
				}),
			),
		),
		d = function (w, v, y, m) {
			(v === void 0 && (v = ""),
				y === void 0 && (y = ""),
				m === void 0 && (m = "&"),
				(t = m),
				(n = v),
				(r = void 0));
			var p = (function (x) {
					if (!Ip(x)) return x;
					for (
						var C = x.length, k = "", E = 0, b = 0, _ = 0, L = !1, j = 0;
						j < C;
						j++
					) {
						var D = x.charCodeAt(j);
						if (_ !== 0 || L || D !== ln || x.charCodeAt(j + 1) !== ur)
							if (L) D === ur && x.charCodeAt(j + 1) === ln && ((L = !1), j++);
							else if (
								(D !== 34 && D !== 39) ||
								(j !== 0 && x.charCodeAt(j - 1) === 92)
							) {
								if (_ === 0)
									if (D === 123) b++;
									else if (D === 125) {
										if (--b < 0) {
											for (var M = j + 1; M < C; ) {
												var A = x.charCodeAt(M);
												if (A === 59 || A === 10) break;
												M++;
											}
											(M < C && x.charCodeAt(M) === 59 && M++,
												(b = 0),
												(j = M - 1),
												(E = M));
											continue;
										}
										b === 0 && ((k += x.substring(E, j + 1)), (E = j + 1));
									} else
										D === 59 &&
											b === 0 &&
											((k += x.substring(E, j + 1)), (E = j + 1));
							} else _ === 0 ? (_ = D) : _ === D && (_ = 0);
						else ((L = !0), j++);
					}
					if (E < C) {
						var Q = x.substring(E);
						Ip(Q) || (k += Q);
					}
					return k;
				})(
					(function (x) {
						if (x.indexOf("//") === -1) return x;
						for (
							var C = x.length, k = [], E = 0, b = 0, _ = 0, L = 0;
							b < C;
						) {
							var j = x.charCodeAt(b);
							if (
								(j !== 34 && j !== 39) ||
								(b !== 0 && x.charCodeAt(b - 1) === 92)
							)
								if (_ === 0)
									if (j === ln && b + 1 < C && x.charCodeAt(b + 1) === ur) {
										for (
											b += 2;
											b + 1 < C &&
											(x.charCodeAt(b) !== ur || x.charCodeAt(b + 1) !== ln);
										)
											b++;
										b += 2;
									} else if (
										j === 40 &&
										b >= 3 &&
										(32 | x.charCodeAt(b - 1)) == 108 &&
										(32 | x.charCodeAt(b - 2)) == 114 &&
										(32 | x.charCodeAt(b - 3)) == 117
									)
										((L = 1), b++);
									else if (L > 0) (j === 41 ? L-- : j === 40 && L++, b++);
									else if (j === ur && b + 1 < C && x.charCodeAt(b + 1) === ln)
										(b > E && k.push(x.substring(E, b)), (E = b += 2));
									else if (
										j === ln &&
										b + 1 < C &&
										x.charCodeAt(b + 1) === ln
									) {
										for (
											b > E && k.push(x.substring(E, b));
											b < C && x.charCodeAt(b) !== 10;
										)
											b++;
										E = b;
									} else b++;
								else b++;
							else (_ === 0 ? (_ = j) : _ === j && (_ = 0), b++);
						}
						return E === 0 ? x : (E < C && k.push(x.substring(E)), k.join(""));
					})(w),
				),
				g = yk(y || v ? "".concat(y, " ").concat(v, " { ").concat(p, " }") : p);
			return (s.namespace && (g = ry(g, s.namespace)), (f = []), vl(g, h), f);
		};
	return (
		(d.hash = a.length
			? a
					.reduce(function (w, v) {
						return (v.name || Qi(15), ar(w, v.name));
					}, 5381)
					.toString()
			: ""),
		d
	);
}
var Jk = new ny(),
	nc = Zk(),
	oy = $.createContext({
		shouldForwardProp: void 0,
		styleSheet: Jk,
		stylis: nc,
	});
oy.Consumer;
$.createContext(void 0);
function Lp() {
	return $.useContext(oy);
}
var eb = (function () {
	function e(t, n) {
		var r = this;
		((this.inject = function (o, i) {
			i === void 0 && (i = nc);
			var s = r.name + i.hash;
			o.hasNameForId(r.id, s) ||
				o.insertRules(r.id, s, i(r.rules, s, "@keyframes"));
		}),
			(this.name = t),
			(this.id = "sc-keyframes-".concat(t)),
			(this.rules = n),
			Sd(this, function () {
				throw Qi(12, String(r.name));
			}));
	}
	return (
		(e.prototype.getName = function (t) {
			return (t === void 0 && (t = nc), this.name + t.hash);
		}),
		e
	);
})();
function tb(e, t) {
	return t == null || typeof t == "boolean" || t === ""
		? ""
		: typeof t != "number" || t === 0 || e in kk || e.startsWith("--")
			? String(t).trim()
			: "".concat(t, "px");
}
var nb = function (e) {
	return e >= "A" && e <= "Z";
};
function $p(e) {
	for (var t = "", n = 0; n < e.length; n++) {
		var r = e[n];
		if (n === 1 && r === "-" && e[0] === "-") return e;
		nb(r) ? (t += "-" + r.toLowerCase()) : (t += r);
	}
	return t.startsWith("ms-") ? "-" + t : t;
}
var iy = function (e) {
		return e == null || e === !1 || e === "";
	},
	sy = function (e) {
		var t = [];
		for (var n in e) {
			var r = e[n];
			e.hasOwnProperty(n) &&
				!iy(r) &&
				((Array.isArray(r) && r.isCss) || No(r)
					? t.push("".concat($p(n), ":"), r, ";")
					: $i(r)
						? t.push.apply(
								t,
								gl(gl(["".concat(n, " {")], sy(r), !1), ["}"], !1),
							)
						: t.push("".concat($p(n), ": ").concat(tb(n, r), ";")));
		}
		return t;
	};
function Er(e, t, n, r, o) {
	if ((o === void 0 && (o = []), typeof e == "string"))
		return (e && o.push(e), o);
	if (iy(e)) return o;
	if (xd(e)) return (o.push(".".concat(e.styledComponentId)), o);
	if (No(e)) {
		if (!No((s = e)) || (s.prototype && s.prototype.isReactComponent) || !t)
			return (o.push(e), o);
		var i = e(t);
		return Er(i, t, n, r, o);
	}
	var s;
	if (e instanceof eb)
		return (n ? (e.inject(n, r), o.push(e.getName(r))) : o.push(e), o);
	if ($i(e)) {
		for (var l = sy(e), a = 0; a < l.length; a++) o.push(l[a]);
		return o;
	}
	if (!Array.isArray(e)) return (o.push(e.toString()), o);
	for (a = 0; a < e.length; a++) Er(e[a], t, n, r, o);
	return o;
}
function rb(e) {
	for (var t = 0; t < e.length; t += 1) {
		var n = e[t];
		if (No(n) && !xd(n)) return !1;
	}
	return !0;
}
var ob = Xv(Zl),
	ib = (function () {
		function e(t, n, r) {
			((this.rules = t),
				(this.staticRulesId = ""),
				(this.isStatic = (r === void 0 || r.isStatic) && rb(t)),
				(this.componentId = n),
				(this.baseHash = ar(ob, n)),
				(this.baseStyle = r),
				ny.registerId(n));
		}
		return (
			(e.prototype.generateAndInjectStyles = function (t, n, r) {
				var o = this.baseStyle
					? this.baseStyle.generateAndInjectStyles(t, n, r).className
					: "";
				if (this.isStatic && !r.hash)
					if (
						this.staticRulesId &&
						n.hasNameForId(this.componentId, this.staticRulesId)
					)
						o = pr(o, this.staticRulesId);
					else {
						var i = Ap(Er(this.rules, t, n, r)),
							s = Ju(ar(this.baseHash, i) >>> 0);
						if (!n.hasNameForId(this.componentId, s)) {
							var l = r(i, ".".concat(s), void 0, this.componentId);
							n.insertRules(this.componentId, s, l);
						}
						((o = pr(o, s)), (this.staticRulesId = s));
					}
				else {
					for (
						var a = ar(this.baseHash, r.hash), u = "", c = 0;
						c < this.rules.length;
						c++
					) {
						var f = this.rules[c];
						if (typeof f == "string") u += f;
						else if (f) {
							var h = Ap(Er(f, t, n, r));
							((a = ar(ar(a, String(c)), h)), (u += h));
						}
					}
					if (u) {
						var d = Ju(a >>> 0);
						if (!n.hasNameForId(this.componentId, d)) {
							var w = r(u, ".".concat(d), void 0, this.componentId);
							n.insertRules(this.componentId, d, w);
						}
						o = pr(o, d);
					}
				}
				return {
					className: o,
					css:
						typeof window > "u"
							? n.getTag().getGroup(ei(this.componentId))
							: "",
				};
			}),
			e
		);
	})(),
	ly = $.createContext(void 0);
ly.Consumer;
var Ba = {};
function sb(e, t, n) {
	var r = xd(e),
		o = e,
		i = !Fa(e),
		s = t.attrs,
		l = s === void 0 ? wd : s,
		a = t.componentId,
		u =
			a === void 0
				? (function (x, C) {
						var k = typeof x != "string" ? "sc" : bp(x);
						Ba[k] = (Ba[k] || 0) + 1;
						var E = "".concat(k, "-").concat(Ok(Zl + k + Ba[k]));
						return C ? "".concat(C, "-").concat(E) : E;
					})(t.displayName, t.parentComponentId)
				: a,
		c = t.displayName,
		f =
			c === void 0
				? (function (x) {
						return Fa(x) ? "styled.".concat(x) : "Styled(".concat(_k(x), ")");
					})(e)
				: c,
		h =
			t.displayName && t.componentId
				? "".concat(bp(t.displayName), "-").concat(t.componentId)
				: t.componentId || u,
		d = r && o.attrs ? o.attrs.concat(l).filter(Boolean) : l,
		w = t.shouldForwardProp;
	if (r && o.shouldForwardProp) {
		var v = o.shouldForwardProp;
		if (t.shouldForwardProp) {
			var y = t.shouldForwardProp;
			w = function (x, C) {
				return v(x, C) && y(x, C);
			};
		} else w = v;
	}
	var m = new ib(n, h, r ? o.componentStyle : void 0);
	function p(x, C) {
		return (function (k, E, b) {
			var _ = k.attrs,
				L = k.componentStyle,
				j = k.defaultProps,
				D = k.foldedComponentIds,
				M = k.styledComponentId,
				A = k.target,
				Q = $.useContext(ly),
				B = Lp(),
				V = k.shouldForwardProp || B.shouldForwardProp,
				T = Tk(E, Q, j) || Ro,
				N = (function (xe, J, Ct) {
					for (
						var Ke,
							Ae = Ze(Ze({}, J), { className: void 0, theme: Ct }),
							pt = 0;
						pt < xe.length;
						pt += 1
					) {
						var kt = No((Ke = xe[pt])) ? Ke(Ae) : Ke;
						for (var ze in kt)
							ze === "className"
								? (Ae.className = pr(Ae.className, kt[ze]))
								: ze === "style"
									? (Ae.style = Ze(Ze({}, Ae.style), kt[ze]))
									: (Ae[ze] = kt[ze]);
					}
					return (
						"className" in J &&
							typeof J.className == "string" &&
							(Ae.className = pr(Ae.className, J.className)),
						Ae
					);
				})(_, E, T),
				F = N.as || A,
				H = {};
			for (var U in N)
				N[U] === void 0 ||
					U[0] === "$" ||
					U === "as" ||
					(U === "theme" && N.theme === T) ||
					(U === "forwardedAs"
						? (H.as = N.forwardedAs)
						: (V && !V(U, F)) || (H[U] = N[U]));
			var q = (function (xe, J) {
					var Ct = Lp(),
						Ke = xe.generateAndInjectStyles(J, Ct.styleSheet, Ct.stylis);
					return Ke;
				})(L, N),
				Z = q.className,
				fe = pr(D, M);
			return (
				Z && (fe += " " + Z),
				N.className && (fe += " " + N.className),
				(H[Fa(F) && !Yv.has(F) ? "class" : "className"] = fe),
				b && (H.ref = b),
				S.createElement(F, H)
			);
		})(g, x, C);
	}
	p.displayName = f;
	var g = $.forwardRef(p);
	return (
		(g.attrs = d),
		(g.componentStyle = m),
		(g.displayName = f),
		(g.shouldForwardProp = w),
		(g.foldedComponentIds = r
			? pr(o.foldedComponentIds, o.styledComponentId)
			: ""),
		(g.styledComponentId = h),
		(g.target = r ? o.target : e),
		Object.defineProperty(g, "defaultProps", {
			get: function () {
				return this._foldedDefaultProps;
			},
			set: function (x) {
				this._foldedDefaultProps = r
					? (function (C) {
							for (var k = [], E = 1; E < arguments.length; E++)
								k[E - 1] = arguments[E];
							for (var b = 0, _ = k; b < _.length; b++) ec(C, _[b], !0);
							return C;
						})({}, o.defaultProps, x)
					: x;
			},
		}),
		Sd(g, function () {
			return ".".concat(g.styledComponentId);
		}),
		i &&
			ey(g, e, {
				attrs: !0,
				componentStyle: !0,
				displayName: !0,
				foldedComponentIds: !0,
				shouldForwardProp: !0,
				styledComponentId: !0,
				target: !0,
			}),
		g
	);
}
function Mp(e, t) {
	for (var n = [e[0]], r = 0, o = t.length; r < o; r += 1)
		n.push(t[r], e[r + 1]);
	return n;
}
var Dp = function (e) {
	return Object.assign(e, { isCss: !0 });
};
function lb(e) {
	for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
	if (No(e) || $i(e)) return Dp(Er(Mp(wd, gl([e], t, !0))));
	var r = e;
	return t.length === 0 && r.length === 1 && typeof r[0] == "string"
		? Er(r)
		: Dp(Er(Mp(r, t)));
}
function rc(e, t, n) {
	if ((n === void 0 && (n = Ro), !t)) throw Qi(1, t);
	var r = function (o) {
		for (var i = [], s = 1; s < arguments.length; s++) i[s - 1] = arguments[s];
		return e(t, n, lb.apply(void 0, gl([o], i, !1)));
	};
	return (
		(r.attrs = function (o) {
			return rc(
				e,
				t,
				Ze(Ze({}, n), {
					attrs: Array.prototype.concat(n.attrs, o).filter(Boolean),
				}),
			);
		}),
		(r.withConfig = function (o) {
			return rc(e, t, Ze(Ze({}, n), o));
		}),
		r
	);
}
var ay = function (e) {
		return rc(sb, e);
	},
	se = ay;
Yv.forEach(function (e) {
	se[e] = ay(e);
});
const Ge = {
	name: "Axel Santana",
	title: "Jr Software Engineer",
	location: "Malmö, Sweden",
	email: "axel@santana.se",
	about: [
		"I've always been drawn to understanding how things work — especially",
		"digital tools and technology. That curiosity eventually led me to",
		"web development, where I enjoy combining logic, creativity, and",
		"problem-solving.",
		"",
		"Before moving into tech, I spent ten years working in professional",
		"kitchens. That experience shaped how I approach challenges: staying",
		"calm under pressure, paying attention to details, and working closely",
		"with others. Over time, I also had the opportunity to build and",
		"support teams, which taught me a lot about collaboration,",
		"responsibility, and communication.",
		"",
		"I prefer learning by doing, which is why I spend much of my time",
		"building projects, experimenting with ideas, and continuously",
		"improving what I create. I enjoy the process of refining things —",
		"whether it's code, workflows, or systems.",
		"",
		"Outside of work, I enjoy cooking, rock climbing, traveling to new",
		"places, and seeking out small adventures. I spend a lot of my free",
		"time exploring with my dog and my wife, which keeps me curious,",
		"active, and inspired.",
		"",
		"I'm motivated by learning, progress, and the satisfaction of making",
		"things work better than they did before.",
	],
	experience: [
		{
			company: "Tetra Pak",
			role: "Intern",
			period: "Autum/Winter 2025",
			location: "Lund, Sweden",
			bullets: [
				"Implemented new changes to internal systems used by technicians",
				"Solved front end bugs and improved code for faster front end response times",
				"Worked with a mixed local and remote team in Scrum methodology",
			],
		},
		{
			company: "TechCorp",
			role: "Software Engineer",
			period: "",
			location: "",
			bullets: ["Placeholder for my next internship / job"],
		},
	],
	education: [
		{
			institution: "YH Borås",
			degree: "FrontEndDev-React",
			period: "2024-2026",
			details: [""],
		},
		{
			institution: "Hack The Box & TryHackMe",
			degree: "Self-directed Cybersecurity Training",
			period: "2025 — Ongoing",
			details: [
				"Top 1% global ranking on Hack The Box",
				"CEH (Certified Ethical Hacker) — 2022",
			],
		},
	],
	skills: {
		languages: ["TypeScript", "React", "Python", "C", "Bash", "SQL"],
		frontend: ["React", "Next.js", "Tailwind CSS", "WebAssembly"],
		backend: ["Node.js", "Go Fiber", "FastAPI", "PostgreSQL", "Redis", "Kafka"],
		devops: [
			"Docker",
			"Kubernetes",
			"Terraform",
			"AWS",
			"GCP",
			"GitHub Actions",
		],
		tools: ["Neovim", "tmux", "Git", "Wireshark", "Nmap", "Burp Suite"],
	},
	links: [
		{ label: "GitHub", url: "https://github.com/alexmercer", icon: "gh" },
		{
			label: "LinkedIn",
			url: "https://linkedin.com/in/alexmercer",
			icon: "li",
		},
		{ label: "Blog", url: "https://alexmercer.dev/blog", icon: "bl" },
		{ label: "Email", url: "mailto:alex.mercer@dev.io", icon: "em" },
		{ label: "Twitter / X", url: "https://x.com/alexmercer_dev", icon: "tw" },
	],
};
let ab = 0;
const ub = () => `line-${++ab}`,
	O = (e, t = "normal") => ({ id: ub(), text: e, type: t }),
	W = () => O("", "blank"),
	jp = [
		"help",
		"about",
		"experience",
		"education",
		"skills",
		"links",
		"contact",
		"ls",
		"clear",
		"banner",
		"echo",
		"date",
		"uname",
	];
function cb(e, t, n, r) {
	const o = e.trim(),
		[i] = o.toLowerCase().split(" ");
	if (!t && i !== "login")
		return [W(), O("Access denied. Authentication required.", "error"), W()];
	switch (i) {
		case "admin": {
			const s = Date.now() - n.sessionStartTime,
				l = Math.floor(s / 6e4),
				a = Math.floor((s % 6e4) / 1e3),
				u = `${String(l).padStart(2, "0")}:${String(a).padStart(2, "0")}`,
				c = new Date(n.sessionStartTime).toLocaleTimeString();
			return [
				W(),
				O(
					"╔══════════════════════════════════════════════════════════╗",
					"success",
				),
				O(
					"║                     ADMIN PANEL                          ║",
					"success",
				),
				O(
					"╠══════════════════════════════════════════════════════════╣",
					"success",
				),
				O(
					"║                                                          ║",
					"dim",
				),
				O(
					"║  SESSION STATISTICS                                      ║",
					"header",
				),
				O(
					"║                                                          ║",
					"dim",
				),
				O(`║  Session Duration:  ${u.padEnd(37)}║`, "normal"),
				O(
					`║  Commands Run:      ${String(n.commandCount).padEnd(37)}║`,
					"normal",
				),
				O(`║  Auth Status:       ${"AUTHENTICATED".padEnd(37)}║`, "cyan"),
				O(`║  Session Start:     ${c.padEnd(37)}║`, "normal"),
				O(
					"║                                                          ║",
					"dim",
				),
				O(
					"║  AVAILABLE ADMIN COMMANDS                                ║",
					"header",
				),
				O(
					"║                                                          ║",
					"dim",
				),
				O(
					"║  stats    →  View detailed session statistics            ║",
					"normal",
				),
				O(
					"║  logout   →  Exit admin mode                             ║",
					"normal",
				),
				O(
					"║                                                          ║",
					"dim",
				),
				O(
					"╚══════════════════════════════════════════════════════════╝",
					"success",
				),
				W(),
			];
		}
		case "stats": {
			const s = Date.now() - n.sessionStartTime,
				l = Math.floor(s / 36e5),
				a = Math.floor((s % 36e5) / 6e4),
				u = Math.floor((s % 6e4) / 1e3),
				c = n.commandCount > 0 ? Math.round(s / n.commandCount / 1e3) : 0;
			return [
				W(),
				O("[ SESSION STATISTICS ]", "header"),
				W(),
				O(
					`  Session Start Time:  ${new Date(n.sessionStartTime).toLocaleString()}`,
					"cyan",
				),
				O(`  Current Time:        ${new Date().toLocaleString()}`, "cyan"),
				O(`  Session Duration:    ${l}h ${a}m ${u}s`, "cyan"),
				W(),
				O(`  Total Commands:      ${n.commandCount}`, "amber"),
				O(`  Avg Time/Command:    ${c}s`, "amber"),
				W(),
				O("  Browser Info:", "header"),
				O(`    User Agent: ${navigator.userAgent.substring(0, 80)}`, "dim"),
				O(`    Platform:   ${navigator.platform}`, "dim"),
				O(`    Language:   ${navigator.language}`, "dim"),
				W(),
			];
		}
		case "logout":
			return (
				r(),
				[
					W(),
					O("✓ Logged out successfully", "success"),
					O("Admin mode deactivated.", "dim"),
					W(),
				]
			);
		default:
			return [W(), O(`Admin command not found: ${i}`, "error"), W()];
	}
}
function uy() {
	return [
		W(),
		O(
			" █████╗ ██╗  ██╗███████╗██╗         ███████╗ █████╗ ███╗   ██╗████████╗ █████╗ ███╗   ██╗ █████╗ ",
			"header",
		),
		O(
			"██╔══██╗╚██╗██╔╝██╔════╝██║         ██╔════╝██╔══██╗████╗  ██║╚═ ██╔══╝██╔══██╗████╗  ██║██╔══██╗",
			"header",
		),
		O(
			"███████║ ╚███╔╝ █████╗  ██║         ███████╗███████║██╔██╗ ██║   ██║   ███████║██╔██╗ ██║███████║",
			"header",
		),
		O(
			"██╔══██║ ██╔██╗ ██╔══╝  ██║         ╚════██║██╔══██║██║╚██╗██║   ██║   ██╔══██║██║╚██╗██║██╔══██║",
			"header",
		),
		O(
			"██║  ██║██╔╝ ██╗███████╗███████╗    ███████║██║  ██║██║ ╚████║   ██║   ██║  ██║██║ ╚████║██║  ██║",
			"header",
		),
		O(
			"╚═╝  ╚═╝╚═╝  ╚═╝╚══════╝╚══════╝    ╚══════╝╚═╝  ╚═╝╚═╝  ╚═══╝   ╚═╝   ╚═╝  ╚═╝╚═╝  ╚═══╝╚═╝  ╚═╝",
			"header",
		),
		W(),
		O(`${Ge.name} — ${Ge.title}`, "cyan"),
		O(`${Ge.location}`, "dim"),
		W(),
		O("Type 'help' to see the list of available commands.", "normal"),
		O("Type 'about' to learn more about me.", "normal"),
		W(),
	];
}
function db(e) {
	const t = e.trim(),
		[n, ...r] = t.toLowerCase().split(" ");
	switch (n) {
		case "clear":
			return "clear";
		case "help":
			return [
				W(),
				O(
					"┌─ AVAILABLE COMMANDS ───────────────────────────────────────────┐",
					"success",
				),
				O(
					"│                                                                │",
					"dim",
				),
				O(
					"│  about            →  Personal introduction                     │",
					"normal",
				),
				O(
					"│  experience       →  Work history & roles                      │",
					"normal",
				),
				O(
					"│  education        →  Academic background                       │",
					"normal",
				),
				O(
					"│  skills           →  Technical skill set                       │",
					"normal",
				),
				O(
					"│  links            →  Social profiles & websites                │",
					"normal",
				),
				O(
					"│  contact          →  How to reach me                           │",
					"normal",
				),
				O(
					"│  ls               →  List all resume sections                  │",
					"normal",
				),
				O(
					"│  banner           →  Show ASCII banner                         │",
					"normal",
				),
				O(
					"│  date             →  Current timestamp                         │",
					"normal",
				),
				O(
					"│  uname            →  System info                               │",
					"normal",
				),
				O(
					"│  clear            →  Clear the terminal                        │",
					"normal",
				),
				O(
					"│  echo <text>      →  Echo text back                            │",
					"normal",
				),
				O(
					"│                                                                │",
					"dim",
				),
				O(
					"└────────────────────────────────────────────────────────────────┘",
					"success",
				),
				W(),
				O("TIP: Use ↑ / ↓ arrow keys to navigate command history.", "dim"),
				W(),
			];
		case "about":
			return [
				W(),
				O(`[ ABOUT: ${Ge.name} ]`, "header"),
				W(),
				...Ge.about.map((o) => (o === "" ? W() : O(o))),
				W(),
			];
		case "experience":
		case "work": {
			const o = [W(), O("[ WORK EXPERIENCE ]", "header"), W()];
			return (
				Ge.experience.forEach((i, s) => {
					(o.push(O(`${i.company}`, "cyan")),
						o.push(O(`${i.role}  ·  ${i.period}  ·  ${i.location}`, "amber")),
						i.bullets.forEach((l) => o.push(O(`  › ${l}`))),
						s < Ge.experience.length - 1 && o.push(W()));
				}),
				o.push(W()),
				o
			);
		}
		case "education":
		case "edu": {
			const o = [W(), O("[ EDUCATION ]", "header"), W()];
			return (
				Ge.education.forEach((i, s) => {
					(o.push(O(i.institution, "cyan")),
						o.push(O(`${i.degree}  ·  ${i.period}`, "amber")),
						i.details.forEach((l) => o.push(O(`  › ${l}`))),
						s < Ge.education.length - 1 && o.push(W()));
				}),
				o.push(W()),
				o
			);
		}
		case "skills": {
			const { skills: o } = Ge;
			return [
				W(),
				O("[ TECHNICAL SKILLS ]", "header"),
				W(),
				O("  LANGUAGES", "cyan"),
				O(`    ${o.languages.join("  ·  ")}`),
				W(),
				O("  FRONTEND", "cyan"),
				O(`    ${o.frontend.join("  ·  ")}`),
				W(),
				O("  BACKEND & DATA", "cyan"),
				O(`    ${o.backend.join("  ·  ")}`),
				W(),
				O("  DEVOPS & CLOUD", "cyan"),
				O(`    ${o.devops.join("  ·  ")}`),
				W(),
				O("  TOOLS", "cyan"),
				O(`    ${o.tools.join("  ·  ")}`),
				W(),
			];
		}
		case "links":
		case "social":
			return [
				W(),
				O("[ LINKS & PROFILES ]", "header"),
				W(),
				...Ge.links.map((o) =>
					O(
						`  [${o.icon.toUpperCase()}]  ${o.label.padEnd(16)} →  ${o.url}`,
						"cyan",
					),
				),
				W(),
				O("  Click any URL to open it in a new tab.", "dim"),
				W(),
			];
		case "contact":
			return [
				W(),
				O("[ CONTACT ]", "header"),
				W(),
				O(`  Email      →  ${Ge.email}`, "cyan"),
				...Ge.links.map((o) =>
					O(`  ${o.label.padEnd(10)} →  ${o.url}`, "cyan"),
				),
				W(),
				O("  I respond within 24h — let's build something great.", "dim"),
				W(),
			];
		case "ls":
			return [
				W(),
				O("drwxr-xr-x   about/", "success"),
				O("drwxr-xr-x   experience/", "success"),
				O("drwxr-xr-x   education/", "success"),
				O("drwxr-xr-x   skills/", "success"),
				O("drwxr-xr-x   links/", "success"),
				O("drwxr-xr-x   contact/", "success"),
				W(),
				O("  Run any directory name as a command to view contents.", "dim"),
				W(),
			];
		case "banner":
			return uy();
		case "date":
			return [W(), O(new Date().toUTCString(), "amber"), W()];
		case "uname":
			return [
				W(),
				O(
					`ResumeOS 2.0.26 ${Ge.name.replace(" ", "")} GNU/Linux x86_64`,
					"amber",
				),
				W(),
			];
		case "echo":
			return [W(), O(r.join(" ") || "", "normal"), W()];
		case "":
			return [];
		default:
			return [
				W(),
				O(`bash: ${n}: command not found`, "error"),
				O("Type 'help' for available commands.", "dim"),
				W(),
			];
	}
}
const fb = se.div`
	display: flex;
	flex-direction: column;
	gap: 0;
`,
	pb = se.div`
	font-family: "JetBrains Mono", "Courier New", monospace;
	font-size: 0.875rem;
	line-height: 1.5;
	white-space: pre;
	overflow-x: auto;
	font-variant-ligatures: none;
	font-feature-settings: normal;
	letter-spacing: 0;

	${(e) => {
		switch (e.lineType) {
			case "normal":
				return "color: hsl(var(--foreground));";
			case "success":
				return `
					color: hsl(var(--prompt-user));
					text-shadow: 0 0 8px hsl(var(--terminal-green) / 0.7),
					             0 0 16px hsl(var(--terminal-green) / 0.3);
				`;
			case "error":
				return "color: hsl(var(--destructive));";
			case "accent":
				return `
					color: hsl(var(--accent));
					text-shadow: 0 0 8px hsl(var(--terminal-amber) / 0.7),
					             0 0 16px hsl(var(--terminal-amber) / 0.3);
				`;
			case "dim":
				return "color: hsl(var(--muted-foreground));";
			case "amber":
				return `
					color: hsl(var(--accent));
					text-shadow: 0 0 8px hsl(var(--terminal-amber) / 0.7),
					             0 0 16px hsl(var(--terminal-amber) / 0.3);
				`;
			case "cyan":
				return `
					color: hsl(var(--terminal-cyan));
					text-shadow: 0 0 8px hsl(var(--terminal-cyan) / 0.7),
					             0 0 16px hsl(var(--terminal-cyan) / 0.3);
				`;
			case "header":
				return `
					color: hsl(var(--prompt-user));
					text-shadow: 0 0 8px hsl(var(--terminal-green) / 0.7),
					             0 0 16px hsl(var(--terminal-green) / 0.3);
					font-weight: normal;
				`;
			case "blank":
				return "";
			default:
				return "color: hsl(var(--foreground));";
		}
	}}
`,
	hb = se.a`
	text-decoration: underline;
	text-underline-offset: 2px;
	transition: color 0.2s;
	cursor: pointer;

	&:hover {
		color: hsl(var(--primary));
	}
`;
function mb(e) {
	const t = /(https?:\/\/[^\s]+|mailto:[^\s]+)/g;
	return e
		.split(t)
		.map((r, o) =>
			t.test(r)
				? ((t.lastIndex = 0),
					P.jsx(
						hb,
						{
							href: r,
							target: "_blank",
							rel: "noopener noreferrer",
							onClick: (i) => i.stopPropagation(),
							children: r,
						},
						o,
					))
				: P.jsx("span", { children: r }, o),
		);
}
const gb = ({ lines: e }) =>
		P.jsx(fb, {
			children: e.map((t) =>
				P.jsx(
					pb,
					{
						lineType: t.type,
						className: "line-appear",
						children: t.type === "blank" ? " " : mb(t.text),
					},
					t.id,
				),
			),
		}),
	vb = "axel2026",
	Fr = "Santana.com",
	yb = se.div`
	height: 100vh;
	width: 100vw;
	background: hsl(var(--terminal-bg));
	display: flex;
	padding: 1rem;
	overflow: hidden;
`,
	wb = se.div`
	flex: 1;
	display: flex;
	flex-direction: column;
	border: 2px solid hsl(var(--border));
	border-radius: 0.5rem;
	overflow: hidden;
	box-shadow: 0 0 30px hsl(var(--primary) / 0.15);
`,
	xb = se.div`
	display: flex;
	align-items: center;
	justify-content: center;
	padding: 0.75rem 1rem;
	background: hsl(var(--card));
	border-bottom: 2px solid hsl(var(--primary));
	flex-shrink: 0;
`,
	Sb = se.span`
	font-size: 0.875rem;
	color: hsl(var(--primary));
	font-weight: 600;
	letter-spacing: 0.1em;
	font-family: "JetBrains Mono";
`,
	Eb = se.div`
	flex: 1;
	padding: 1rem;
	overflow-y: auto;
	font-family: "JetBrains Mono", "Courier New", monospace;
	font-size: 0.875rem;
	background: hsl(var(--terminal-bg));
	font-variant-ligatures: none;
	font-feature-settings: normal;
	letter-spacing: 0;

	@media (min-width: 768px) {
		padding: 1.5rem;
	}
`,
	Cb = se.div`
	display: flex;
	flex-direction: column;
	gap: 0.125rem;
`,
	kb = se.div`
	font-size: 0.875rem;
	line-height: 1.625;

	${(e) =>
		e.isOk &&
		`
		color: hsl(var(--primary));
	`}

	${(e) =>
		e.isEmpty &&
		`
		opacity: 0;
		user-select: none;
	`}
	
	${(e) =>
		!e.isOk &&
		!e.isEmpty &&
		`
		color: hsl(var(--muted-foreground));
	`}
`,
	bb = se.div`
	color: hsl(var(--muted-foreground));
	font-size: 0.875rem;
`,
	Pb = se.form`
	display: flex;
	align-items: center;
	margin-top: 0.25rem;
	position: relative;
`,
	zr = se.span`
	color: ${(e) => e.color};
	flex-shrink: 0;
	user-select: none;

	${(e) =>
		e.glow &&
		`
		text-shadow: 0 0 8px ${e.glow};
	`}
`,
	Tb = se.div`
	position: relative;
	flex: 1;
	display: flex;
	align-items: center;
`,
	Rb = se.span`
	position: absolute;
	left: 0;
	top: 0;
	color: hsl(var(--muted-foreground));
	opacity: 0.3;
	pointer-events: none;
	user-select: none;
`,
	Nb = se.input`
	background: transparent;
	color: hsl(var(--foreground));
	caret-color: transparent;
	outline: none;
	border: none;
	width: 100%;
	font-family: "JetBrains Mono", monospace;
	font-size: 0.875rem;
`,
	Ab = se.span`
	position: absolute;
	left: ${(e) => e.offset}ch;
	color: hsl(var(--prompt-user));
	user-select: none;
	pointer-events: none;
`,
	Ob = se.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 0.5rem 1rem;
	background: hsl(var(--card));
	border-top: 2px solid hsl(var(--primary));
	font-size: 0.75rem;
	flex-shrink: 0;
`,
	_b = se.span`
	color: hsl(var(--prompt-user));
	font-weight: bold;
	letter-spacing: 0.05em;
`,
	Ib = se.span`
	color: hsl(var(--muted-foreground));
`,
	Lb = se.span`
	color: hsl(var(--muted-foreground));
`,
	$b = [
		{ text: "BIOS v2.0.26 — Press DEL to enter setup", delay: 0 },
		{ text: "Detecting hardware...", delay: 400 },
		{
			text: "CPU: ResumeCore™ i9 — 6.0 GHz — 6 cores / 12 threads",
			delay: 700,
		},
		{ text: "RAM: 32 GB DDR5 — OK", delay: 900 },
		{ text: "Storage: /dev/sda — 1 TB NVMe SSD — OK", delay: 1100 },
		{ text: "", delay: 1300 },
		{ text: "Booting ResumeOS 2.0.26 (GNU/Linux x86_64)...", delay: 1400 },
		{ text: "[ OK ] Started System Logger", delay: 1700 },
		{ text: "[ OK ] Mounted /home/resume", delay: 1900 },
		{ text: "[ OK ] Loaded professional.profile", delay: 2100 },
		{ text: "[ OK ] Started terminal.service", delay: 2300 },
		{ text: "", delay: 2500 },
	],
	Mb = () => {
		const [e, t] = S.useState([]),
			[n, r] = S.useState(""),
			[o, i] = S.useState([]),
			[s, l] = S.useState(-1),
			[a, u] = S.useState(!0),
			[c, f] = S.useState([]),
			[h, d] = S.useState(""),
			[w, v] = S.useState(!1),
			[y, m] = S.useState(!1),
			[p] = S.useState(Date.now()),
			[g, x] = S.useState(0),
			C = S.useRef(null),
			k = S.useRef(null),
			E = w ? "Admin" : "Recruiter";
		(S.useEffect(() => {
			($b.forEach(({ text: M, delay: A }) => {
				setTimeout(() => {
					f((Q) => [...Q, M]);
				}, A);
			}),
				setTimeout(() => {
					(u(!1), t(uy()));
				}, 2800));
		}, []),
			S.useEffect(() => {
				var M;
				(M = k.current) == null || M.scrollIntoView({ behavior: "smooth" });
			}, [e, c, a]));
		const b = S.useCallback(() => {
				var M;
				(M = C.current) == null || M.focus();
			}, []),
			_ = S.useCallback(() => {
				if (!n.trim()) return;
				const M = jp.find((A) => A.startsWith(n.toLowerCase()));
				M && r(M);
			}, [n]),
			L = (M) => {
				if ((r(M), M.trim())) {
					const A = jp.find((Q) => Q.startsWith(M.toLowerCase()));
					d(A && A !== M ? A : "");
				} else d("");
			},
			j = (M) => {
				if ((M.preventDefault(), y)) {
					m(!1);
					const B = "*".repeat(n.length);
					(t((V) => [
						...V,
						{ id: `cmd-${Date.now()}`, text: `Password: ${B}`, type: "dim" },
					]),
						n === vb
							? (v(!0),
								t((V) => [
									...V,
									{ id: `auth-${Date.now()}`, text: "", type: "blank" },
									{
										id: `auth-${Date.now()}-1`,
										text: "✓ Authentication successful",
										type: "success",
									},
									{
										id: `auth-${Date.now()}-2`,
										text: "Admin mode activated. Type 'admin' to access admin panel.",
										type: "dim",
									},
									{ id: `auth-${Date.now()}-3`, text: "", type: "blank" },
								]))
							: t((V) => [
									...V,
									{ id: `auth-${Date.now()}`, text: "", type: "blank" },
									{
										id: `auth-${Date.now()}-1`,
										text: "✗ Authentication failed",
										type: "error",
									},
									{ id: `auth-${Date.now()}-2`, text: "", type: "blank" },
								]),
						r(""));
					return;
				}
				if (!n.trim() && n !== "") {
					(t((B) => [
						...B,
						{ id: `cmd-${Date.now()}`, text: `${E}@${Fr}:~$ `, type: "dim" },
					]),
						r(""));
					return;
				}
				const A = n;
				if (A.trim().toLowerCase() === "login") {
					(t((B) => [
						...B,
						{
							id: `cmd-${Date.now()}`,
							text: `${E}@${Fr}:~$ ${A}`,
							type: "dim",
						},
						{ id: `login-${Date.now()}`, text: "", type: "blank" },
					]),
						m(!0),
						r(""));
					return;
				}
				(t((B) => [
					...B,
					{ id: `cmd-${Date.now()}`, text: `${E}@${Fr}:~$ ${A}`, type: "dim" },
				]),
					A.trim() && x((B) => B + 1));
				const [Q] = A.trim().toLowerCase().split(" ");
				if (["admin", "logout", "stats"].includes(Q)) {
					const B = cb(A, w, { sessionStartTime: p, commandCount: g + 1 }, () =>
						v(!1),
					);
					B !== "clear" && t((V) => [...V, ...B]);
				} else {
					const B = db(A);
					t(B === "clear" ? [] : (V) => [...V, ...B]);
				}
				(A.trim() && i((B) => [A, ...B.slice(0, 99)]), l(-1), r(""), d(""));
			},
			D = (M) => {
				if (M.key === "Tab") (M.preventDefault(), _());
				else if (M.key === "ArrowUp") {
					M.preventDefault();
					const A = Math.min(s + 1, o.length - 1);
					(l(A), r(o[A] ?? ""), d(""));
				} else if (M.key === "ArrowDown") {
					M.preventDefault();
					const A = Math.max(s - 1, -1);
					(l(A), r(A === -1 ? "" : (o[A] ?? "")), d(""));
				}
			};
		return P.jsx(yb, {
			children: P.jsxs(wb, {
				className: "scanlines crt-vignette terminal-flicker",
				children: [
					P.jsx(xb, { children: P.jsxs(Sb, { children: [E, "@", Fr] }) }),
					P.jsxs(Eb, {
						onClick: b,
						children: [
							a
								? P.jsxs(Cb, {
										children: [
											c.map((M, A) =>
												P.jsx(
													kb,
													{
														isOk: M.startsWith("[ OK ]"),
														isEmpty: M === "",
														className: M.startsWith("[ OK ]")
															? "text-glow line-appear"
															: "line-appear",
														children: M || " ",
													},
													A,
												),
											),
											P.jsx(bb, {
												children: P.jsx("span", {
													className: "cursor-blink text-glow",
													children: "█",
												}),
											}),
										],
									})
								: P.jsxs(P.Fragment, {
										children: [
											P.jsx(gb, { lines: e }),
											P.jsxs(Pb, {
												onSubmit: j,
												children: [
													y
														? P.jsx(zr, {
																color: "hsl(var(--prompt-user))",
																children: "Password: ",
															})
														: P.jsxs(P.Fragment, {
																children: [
																	P.jsx(zr, {
																		color: "hsl(var(--prompt-user))",
																		glow: "0 0 8px hsl(var(--terminal-green) / 0.7)",
																		className: "text-glow",
																		children: E,
																	}),
																	P.jsx(zr, {
																		color: "hsl(var(--muted-foreground))",
																		children: "@",
																	}),
																	P.jsx(zr, {
																		color: "hsl(var(--prompt-host))",
																		className: "text-glow-amber",
																		children: Fr,
																	}),
																	P.jsx(zr, {
																		color: "hsl(var(--prompt-path))",
																		className: "text-glow-cyan",
																		children: ":~",
																	}),
																	P.jsx(zr, {
																		color: "hsl(var(--foreground))",
																		children: "$ ",
																	}),
																],
															}),
													P.jsxs(Tb, {
														children: [
															!y &&
																h &&
																P.jsx(Rb, { "aria-hidden": !0, children: h }),
															P.jsx(Nb, {
																ref: C,
																type: y ? "password" : "text",
																value: n,
																onChange: (M) => L(M.target.value),
																onKeyDown: D,
																autoFocus: !0,
																autoComplete: "off",
																autoCapitalize: "off",
																spellCheck: !1,
																"aria-label": "Terminal input",
															}),
															P.jsx(Ab, {
																offset: n.length,
																className: "cursor-blink text-glow",
																"aria-hidden": !0,
																children: "█",
															}),
														],
													}),
												],
											}),
										],
									}),
							P.jsx("div", { ref: k }),
						],
					}),
					!a &&
						P.jsxs(Ob, {
							children: [
								P.jsx(_b, { children: "NORMAL" }),
								P.jsxs(Ib, { children: [E, "@", Fr, " — ResumeOS 2.0.26"] }),
								P.jsx(Lb, { children: "TAB: autocomplete · ↑↓: history" }),
							],
						}),
				],
			}),
		});
	},
	Db = () => P.jsx(Mb, {}),
	jb = se.div`
	display: flex;
	min-height: 100vh;
	align-items: center;
	justify-content: center;
	background: hsl(var(--muted));
`,
	Fb = se.div`
	text-align: center;
`,
	zb = se.h1`
	margin-bottom: 1rem;
	font-size: 2.25rem;
	font-weight: bold;
`,
	Bb = se.p`
	margin-bottom: 1rem;
	font-size: 1.25rem;
	color: hsl(var(--muted-foreground));
`,
	Ub = se.a`
	color: hsl(var(--primary));
	text-decoration: underline;

	&:hover {
		color: hsl(var(--primary) / 0.9);
	}
`,
	Wb = () => {
		const e = Fv();
		return (
			S.useEffect(() => {
				console.error(
					"404 Error: User attempted to access non-existent route:",
					e.pathname,
				);
			}, [e.pathname]),
			P.jsx(jb, {
				children: P.jsxs(Fb, {
					children: [
						P.jsx(zb, { children: "404" }),
						P.jsx(Bb, { children: "Oops! Page not found" }),
						P.jsx(Ub, { href: "/", children: "Return to Home" }),
					],
				}),
			})
		);
	},
	Vb = new vC(),
	Hb = () =>
		P.jsx(wC, {
			client: Vb,
			children: P.jsxs(KE, {
				children: [
					P.jsx(Ax, {}),
					P.jsx(aS, {}),
					P.jsx(ok, {
						children: P.jsxs(tk, {
							children: [
								P.jsx(Yu, { path: "/", element: P.jsx(Db, {}) }),
								P.jsx(Yu, { path: "*", element: P.jsx(Wb, {}) }),
							],
						}),
					}),
				],
			}),
		});
ag(document.getElementById("root")).render(P.jsx(Hb, {}));
