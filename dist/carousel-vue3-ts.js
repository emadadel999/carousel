import { defineComponent as q, ref as O, computed as H, onMounted as J, onBeforeUnmount as Z, onUnmounted as G, openBlock as M, createElementBlock as E, normalizeStyle as B, normalizeClass as I, renderSlot as P, createCommentVNode as R, createElementVNode as j, Fragment as K, renderList as Q, normalizeProps as X, guardReactiveProps as Y } from "vue";
const ee = "/arrow-left.svg", te = "/arrow-right.svg";
function U(s, o) {
  let e = s % o;
  return e < 0 && (e += o), e;
}
function ne(s) {
  return s && s.__esModule && Object.prototype.hasOwnProperty.call(s, "default") ? s.default : s;
}
var N = { exports: {} }, z, V;
function re() {
  if (V)
    return z;
  V = 1;
  var s = 1e3, o = s * 60, e = o * 60, f = e * 24, l = f * 7, c = f * 365.25;
  z = function(t, n) {
    n = n || {};
    var r = typeof t;
    if (r === "string" && t.length > 0)
      return h(t);
    if (r === "number" && isFinite(t))
      return n.long ? a(t) : F(t);
    throw new Error(
      "val is not a non-empty string or a valid number. val=" + JSON.stringify(t)
    );
  };
  function h(t) {
    if (t = String(t), !(t.length > 100)) {
      var n = /^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(
        t
      );
      if (n) {
        var r = parseFloat(n[1]), v = (n[2] || "ms").toLowerCase();
        switch (v) {
          case "years":
          case "year":
          case "yrs":
          case "yr":
          case "y":
            return r * c;
          case "weeks":
          case "week":
          case "w":
            return r * l;
          case "days":
          case "day":
          case "d":
            return r * f;
          case "hours":
          case "hour":
          case "hrs":
          case "hr":
          case "h":
            return r * e;
          case "minutes":
          case "minute":
          case "mins":
          case "min":
          case "m":
            return r * o;
          case "seconds":
          case "second":
          case "secs":
          case "sec":
          case "s":
            return r * s;
          case "milliseconds":
          case "millisecond":
          case "msecs":
          case "msec":
          case "ms":
            return r;
          default:
            return;
        }
      }
    }
  }
  function F(t) {
    var n = Math.abs(t);
    return n >= f ? Math.round(t / f) + "d" : n >= e ? Math.round(t / e) + "h" : n >= o ? Math.round(t / o) + "m" : n >= s ? Math.round(t / s) + "s" : t + "ms";
  }
  function a(t) {
    var n = Math.abs(t);
    return n >= f ? d(t, n, f, "day") : n >= e ? d(t, n, e, "hour") : n >= o ? d(t, n, o, "minute") : n >= s ? d(t, n, s, "second") : t + " ms";
  }
  function d(t, n, r, v) {
    var S = n >= r * 1.5;
    return Math.round(t / r) + " " + v + (S ? "s" : "");
  }
  return z;
}
function se(s) {
  e.debug = e, e.default = e, e.coerce = a, e.disable = c, e.enable = l, e.enabled = h, e.humanize = re(), e.destroy = d, Object.keys(s).forEach((t) => {
    e[t] = s[t];
  }), e.names = [], e.skips = [], e.formatters = {};
  function o(t) {
    let n = 0;
    for (let r = 0; r < t.length; r++)
      n = (n << 5) - n + t.charCodeAt(r), n |= 0;
    return e.colors[Math.abs(n) % e.colors.length];
  }
  e.selectColor = o;
  function e(t) {
    let n, r = null, v, S;
    function g(...m) {
      if (!g.enabled)
        return;
      const y = g, b = Number(/* @__PURE__ */ new Date()), x = b - (n || b);
      y.diff = x, y.prev = n, y.curr = b, n = b, m[0] = e.coerce(m[0]), typeof m[0] != "string" && m.unshift("%O");
      let w = 0;
      m[0] = m[0].replace(/%([a-zA-Z%])/g, (_, A) => {
        if (_ === "%%")
          return "%";
        w++;
        const L = e.formatters[A];
        if (typeof L == "function") {
          const $ = m[w];
          _ = L.call(y, $), m.splice(w, 1), w--;
        }
        return _;
      }), e.formatArgs.call(y, m), (y.log || e.log).apply(y, m);
    }
    return g.namespace = t, g.useColors = e.useColors(), g.color = e.selectColor(t), g.extend = f, g.destroy = e.destroy, Object.defineProperty(g, "enabled", {
      enumerable: !0,
      configurable: !1,
      get: () => r !== null ? r : (v !== e.namespaces && (v = e.namespaces, S = e.enabled(t)), S),
      set: (m) => {
        r = m;
      }
    }), typeof e.init == "function" && e.init(g), g;
  }
  function f(t, n) {
    const r = e(this.namespace + (typeof n > "u" ? ":" : n) + t);
    return r.log = this.log, r;
  }
  function l(t) {
    e.save(t), e.namespaces = t, e.names = [], e.skips = [];
    let n;
    const r = (typeof t == "string" ? t : "").split(/[\s,]+/), v = r.length;
    for (n = 0; n < v; n++)
      r[n] && (t = r[n].replace(/\*/g, ".*?"), t[0] === "-" ? e.skips.push(new RegExp("^" + t.slice(1) + "$")) : e.names.push(new RegExp("^" + t + "$")));
  }
  function c() {
    const t = [
      ...e.names.map(F),
      ...e.skips.map(F).map((n) => "-" + n)
    ].join(",");
    return e.enable(""), t;
  }
  function h(t) {
    if (t[t.length - 1] === "*")
      return !0;
    let n, r;
    for (n = 0, r = e.skips.length; n < r; n++)
      if (e.skips[n].test(t))
        return !1;
    for (n = 0, r = e.names.length; n < r; n++)
      if (e.names[n].test(t))
        return !0;
    return !1;
  }
  function F(t) {
    return t.toString().substring(2, t.toString().length - 2).replace(/\.\*\?$/, "*");
  }
  function a(t) {
    return t instanceof Error ? t.stack || t.message : t;
  }
  function d() {
    console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.");
  }
  return e.enable(e.load()), e;
}
var oe = se;
(function(s, o) {
  o.formatArgs = f, o.save = l, o.load = c, o.useColors = e, o.storage = h(), o.destroy = (() => {
    let a = !1;
    return () => {
      a || (a = !0, console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`."));
    };
  })(), o.colors = [
    "#0000CC",
    "#0000FF",
    "#0033CC",
    "#0033FF",
    "#0066CC",
    "#0066FF",
    "#0099CC",
    "#0099FF",
    "#00CC00",
    "#00CC33",
    "#00CC66",
    "#00CC99",
    "#00CCCC",
    "#00CCFF",
    "#3300CC",
    "#3300FF",
    "#3333CC",
    "#3333FF",
    "#3366CC",
    "#3366FF",
    "#3399CC",
    "#3399FF",
    "#33CC00",
    "#33CC33",
    "#33CC66",
    "#33CC99",
    "#33CCCC",
    "#33CCFF",
    "#6600CC",
    "#6600FF",
    "#6633CC",
    "#6633FF",
    "#66CC00",
    "#66CC33",
    "#9900CC",
    "#9900FF",
    "#9933CC",
    "#9933FF",
    "#99CC00",
    "#99CC33",
    "#CC0000",
    "#CC0033",
    "#CC0066",
    "#CC0099",
    "#CC00CC",
    "#CC00FF",
    "#CC3300",
    "#CC3333",
    "#CC3366",
    "#CC3399",
    "#CC33CC",
    "#CC33FF",
    "#CC6600",
    "#CC6633",
    "#CC9900",
    "#CC9933",
    "#CCCC00",
    "#CCCC33",
    "#FF0000",
    "#FF0033",
    "#FF0066",
    "#FF0099",
    "#FF00CC",
    "#FF00FF",
    "#FF3300",
    "#FF3333",
    "#FF3366",
    "#FF3399",
    "#FF33CC",
    "#FF33FF",
    "#FF6600",
    "#FF6633",
    "#FF9900",
    "#FF9933",
    "#FFCC00",
    "#FFCC33"
  ];
  function e() {
    return typeof window < "u" && window.process && (window.process.type === "renderer" || window.process.__nwjs) ? !0 : typeof navigator < "u" && navigator.userAgent && navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/) ? !1 : typeof document < "u" && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance || // Is firebug? http://stackoverflow.com/a/398120/376773
    typeof window < "u" && window.console && (window.console.firebug || window.console.exception && window.console.table) || // Is firefox >= v31?
    // https://developer.mozilla.org/en-US/docs/Tools/Web_Console#Styling_messages
    typeof navigator < "u" && navigator.userAgent && navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31 || // Double check webkit in userAgent just in case we are in a worker
    typeof navigator < "u" && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/);
  }
  function f(a) {
    if (a[0] = (this.useColors ? "%c" : "") + this.namespace + (this.useColors ? " %c" : " ") + a[0] + (this.useColors ? "%c " : " ") + "+" + s.exports.humanize(this.diff), !this.useColors)
      return;
    const d = "color: " + this.color;
    a.splice(1, 0, d, "color: inherit");
    let t = 0, n = 0;
    a[0].replace(/%[a-zA-Z%]/g, (r) => {
      r !== "%%" && (t++, r === "%c" && (n = t));
    }), a.splice(n, 0, d);
  }
  o.log = console.debug || console.log || (() => {
  });
  function l(a) {
    try {
      a ? o.storage.setItem("debug", a) : o.storage.removeItem("debug");
    } catch {
    }
  }
  function c() {
    let a;
    try {
      a = o.storage.getItem("debug");
    } catch {
    }
    return !a && typeof process < "u" && "env" in process && (a = process.env.DEBUG), a;
  }
  function h() {
    try {
      return localStorage;
    } catch {
    }
  }
  s.exports = oe(o);
  const { formatters: F } = s.exports;
  F.j = function(a) {
    try {
      return JSON.stringify(a);
    } catch (d) {
      return "[UnexpectedJSONParseError]: " + d.message;
    }
  };
})(N, N.exports);
var ie = N.exports;
const ae = /* @__PURE__ */ ne(ie), le = { class: "carousel__container" }, ue = /* @__PURE__ */ j("img", {
  src: ee,
  alt: "arrow left"
}, null, -1), ce = ["id"], de = /* @__PURE__ */ j("img", {
  src: te,
  alt: "arrow right"
}, null, -1), Ce = /* @__PURE__ */ q({
  __name: "carousel",
  props: {
    /**
     * an array of slides to be shown.
     * you can define how its value is shown inside the component's tags.
     *  * @example
     * // [
     *  {
     *      src: 1
     *  },
     *  {
     *      src: 2
     *  },
     *  {
     *      src: 3
     *  }
     * ]
     */
    slidesArray: {
      type: Array,
      required: !0
    },
    /**
     * how many slides to show.
     */
    itemsToShow: {
      type: Number,
      default: 4
    },
    /**
     * how fast your slides move.
     */
    transitionSpeed: {
      type: Number,
      default: 5
    },
    /**
     * the way your slides move.
     */
    timingFunction: {
      type: String,
      default: "linear"
    },
    /**
     * if it's true, and autoSlide is true, the slides will stop when you hover over them.
     */
    stopOnHover: {
      type: Boolean,
      default: !1
    },
    /**
     * the way the slides should stop after hovering
     * * @values "immediate", "wait"
     */
    stopOnHoverType: {
      type: String,
      default: "immediate",
      validator(s) {
        return ["immediate", "wait"].includes(s);
      }
    },
    /**
     * whether to automatically slide infinitely or no.
     */
    autoSlide: {
      type: Boolean,
      default: !1
    },
    /**
     * when autoSlide is false, define next arrow button class
     */
    nextBtnClass: {
      type: String,
      default: "next-btn"
    },
    /**
     * when autoSlide is false, define prev arrow button class
     */
    prevBtnClass: {
      type: String,
      default: "prev-btn"
    },
    /**
     * when autoSlide is false, define next arrow button inline style object
     */
    nextBtnStyle: {
      type: Object
    },
    /**
     * when autoSlide is false, define prev arrow button inline style object
     */
    prevBtnStyle: {
      type: Object
    },
    slideContainerClass: {
      type: String
    },
    /**
     * breakpoints to change itemsToShow based on the screensize
     * @example
     * [
     *     {
     *         size: 800,
     *         itemsToShow: 3,
     *     },
     *     {
     *         size: 740,
     *         itemsToShow: 2,
     *     },
     *     {
     *         size: 0,
     *         itemsToShow: 1,
     *     },
     * ];
     */
    breakpoints: {
      type: Array,
      default: null
    }
  },
  setup(s) {
    const o = ae("wave:cmpnt:carousel"), e = s, f = O(), l = O(), c = O(0);
    let h, F = !1, a, d, t;
    const n = O(g()), r = H(() => {
      let i = [];
      const u = n.value * e.slidesArray.length + n.value;
      let p = 0, C = 0;
      for (; p <= u - 1; )
        i.push(e.slidesArray[C]), p++, C++, C === e.slidesArray.length && (C = 0);
      return i;
    }), v = H(() => Math.ceil(r.value.length / n.value)), S = H(() => `${100 / n.value}%`);
    function g() {
      let i = e.itemsToShow;
      if (e.breakpoints && e.breakpoints.length > 0) {
        const u = e.breakpoints.find((p) => p.size <= window.innerWidth);
        u && (i = u.itemsToShow);
      }
      return i;
    }
    J(() => {
      n.value = g(), o("onMounted() - "), window.addEventListener("resize", () => n.value = g()), e.autoSlide && (document.addEventListener("visibilitychange", m), y());
    }), Z(() => {
      o("onBeforeUnmount() - "), document.removeEventListener("visibilitychange", m);
    }), G(() => {
      o("onUnmounted() - "), window.cancelAnimationFrame(h);
    });
    function m() {
      o("onPageVisibilityChange() - ", document.hidden), document.hidden ? x() : y();
    }
    function y() {
      F = !1, a = e.transitionSpeed * 1e3, d = 0, A(), h = window.requestAnimationFrame(b);
    }
    function b(i) {
      F || (d === 0 && (d = i), t = i - d, t >= a && (d = i, A()), h = window.requestAnimationFrame(b));
    }
    function x() {
      var i, u, p, C, k;
      F = !0, window.cancelAnimationFrame(h), (i = l.value) == null || i.classList.add("carousel__disable-transition"), c.value = 0, (u = f.value) == null || u.style.setProperty("--current-slide", `${c.value}`), (p = l.value) == null || p.offsetHeight, (C = l.value) == null || C.classList.remove("carousel__disable-transition"), (k = l.value) == null || k.offsetHeight;
    }
    function w(i) {
      var u, p, C, k;
      (u = l.value) == null || u.classList.add(i), (p = l.value) == null || p.offsetHeight, window.cancelAnimationFrame(h), (C = l.value) == null || C.classList.remove(i), (k = l.value) == null || k.offsetHeight;
    }
    function T() {
      o("onMouseEnter() - "), e.autoSlide && e.stopOnHover && (e.stopOnHoverType === "wait" ? w("carousel__pause-transition") : w("carousel__disable-transition"));
    }
    function _() {
      o("onMouseLeave() - "), e.autoSlide && e.stopOnHover && y();
    }
    function A() {
      console.log("currentSlide.value", c.value), console.log("numOfViews.value", v.value), c.value === v.value - 1 ? $(W) : W();
    }
    function L() {
      c.value === 0 ? $(D) : D();
    }
    function $(i) {
      var u, p, C;
      (u = l.value) == null || u.classList.add("carousel__disable-transition"), i(), (p = l.value) == null || p.offsetHeight, (C = l.value) == null || C.classList.remove("carousel__disable-transition"), i();
    }
    function W() {
      var i, u;
      c.value = U(c.value + 1, v.value), c.value <= 1 && ((i = l.value) == null || i.offsetHeight), (u = f.value) == null || u.style.setProperty("--current-slide", `${c.value}`);
    }
    function D() {
      var i, u;
      c.value = U(c.value - 1, v.value), c.value <= 1 && ((i = l.value) == null || i.offsetHeight), (u = f.value) == null || u.style.setProperty("--current-slide", `${c.value}`);
    }
    return (i, u) => (M(), E("div", le, [
      s.autoSlide ? R("", !0) : (M(), E("button", {
        key: 0,
        type: "button",
        style: B(s.prevBtnStyle),
        class: I(`carousel__btn ${s.prevBtnClass}`),
        onClick: L
      }, [
        P(i.$slots, "prev", {}, () => [
          ue
        ])
      ], 6)),
      j("div", {
        class: "carousel-slides__wrapper",
        ref_key: "slidesWrapper",
        ref: f
      }, [
        j("ul", {
          class: "carousel-slides__wrapper-inner",
          ref_key: "slidesWrapperInner",
          ref: l,
          style: B({ transition: `all ${e.transitionSpeed}s ${s.timingFunction}` }),
          onMouseenter: T,
          onMouseleave: _
        }, [
          (M(!0), E(K, null, Q(r.value, (p, C) => (M(), E("li", {
            key: C,
            id: `${C + 1}`,
            style: B({ flex: `0 0 ${S.value}` }),
            class: I(`slide ${s.slideContainerClass}`)
          }, [
            P(i.$slots, "slide", X(Y(p)))
          ], 14, ce))), 128))
        ], 36)
      ], 512),
      s.autoSlide ? R("", !0) : (M(), E("button", {
        key: 1,
        type: "button",
        style: B(s.nextBtnStyle),
        class: I(`carousel__btn ${s.nextBtnClass}`),
        onClick: A
      }, [
        P(i.$slots, "next", {}, () => [
          de
        ])
      ], 6))
    ]));
  }
});
export {
  Ce as Carousel
};
