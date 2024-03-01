import { defineComponent as J, ref as B, computed as j, onMounted as Z, onBeforeUnmount as G, onUnmounted as K, openBlock as M, createElementBlock as E, normalizeStyle as I, normalizeClass as H, renderSlot as P, createCommentVNode as U, createElementVNode as L, Fragment as Q, renderList as X, mergeProps as Y, pushScopeId as ee, popScopeId as te } from "vue";
const ne = "/arrow-left.svg", re = "/arrow-right.svg";
function q(r, o) {
  let e = r % o;
  return e < 0 && (e += o), e;
}
function se(r) {
  return r && r.__esModule && Object.prototype.hasOwnProperty.call(r, "default") ? r.default : r;
}
var z = { exports: {} }, N, R;
function oe() {
  if (R)
    return N;
  R = 1;
  var r = 1e3, o = r * 60, e = o * 60, d = e * 24, l = d * 7, f = d * 365.25;
  N = function(t, n) {
    n = n || {};
    var s = typeof t;
    if (s === "string" && t.length > 0)
      return h(t);
    if (s === "number" && isFinite(t))
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
        var s = parseFloat(n[1]), v = (n[2] || "ms").toLowerCase();
        switch (v) {
          case "years":
          case "year":
          case "yrs":
          case "yr":
          case "y":
            return s * f;
          case "weeks":
          case "week":
          case "w":
            return s * l;
          case "days":
          case "day":
          case "d":
            return s * d;
          case "hours":
          case "hour":
          case "hrs":
          case "hr":
          case "h":
            return s * e;
          case "minutes":
          case "minute":
          case "mins":
          case "min":
          case "m":
            return s * o;
          case "seconds":
          case "second":
          case "secs":
          case "sec":
          case "s":
            return s * r;
          case "milliseconds":
          case "millisecond":
          case "msecs":
          case "msec":
          case "ms":
            return s;
          default:
            return;
        }
      }
    }
  }
  function F(t) {
    var n = Math.abs(t);
    return n >= d ? Math.round(t / d) + "d" : n >= e ? Math.round(t / e) + "h" : n >= o ? Math.round(t / o) + "m" : n >= r ? Math.round(t / r) + "s" : t + "ms";
  }
  function a(t) {
    var n = Math.abs(t);
    return n >= d ? c(t, n, d, "day") : n >= e ? c(t, n, e, "hour") : n >= o ? c(t, n, o, "minute") : n >= r ? c(t, n, r, "second") : t + " ms";
  }
  function c(t, n, s, v) {
    var _ = n >= s * 1.5;
    return Math.round(t / s) + " " + v + (_ ? "s" : "");
  }
  return N;
}
function ie(r) {
  e.debug = e, e.default = e, e.coerce = a, e.disable = f, e.enable = l, e.enabled = h, e.humanize = oe(), e.destroy = c, Object.keys(r).forEach((t) => {
    e[t] = r[t];
  }), e.names = [], e.skips = [], e.formatters = {};
  function o(t) {
    let n = 0;
    for (let s = 0; s < t.length; s++)
      n = (n << 5) - n + t.charCodeAt(s), n |= 0;
    return e.colors[Math.abs(n) % e.colors.length];
  }
  e.selectColor = o;
  function e(t) {
    let n, s = null, v, _;
    function g(...m) {
      if (!g.enabled)
        return;
      const y = g, b = Number(/* @__PURE__ */ new Date()), x = b - (n || b);
      y.diff = x, y.prev = n, y.curr = b, n = b, m[0] = e.coerce(m[0]), typeof m[0] != "string" && m.unshift("%O");
      let w = 0;
      m[0] = m[0].replace(/%([a-zA-Z%])/g, (S, A) => {
        if (S === "%%")
          return "%";
        w++;
        const $ = e.formatters[A];
        if (typeof $ == "function") {
          const O = m[w];
          S = $.call(y, O), m.splice(w, 1), w--;
        }
        return S;
      }), e.formatArgs.call(y, m), (y.log || e.log).apply(y, m);
    }
    return g.namespace = t, g.useColors = e.useColors(), g.color = e.selectColor(t), g.extend = d, g.destroy = e.destroy, Object.defineProperty(g, "enabled", {
      enumerable: !0,
      configurable: !1,
      get: () => s !== null ? s : (v !== e.namespaces && (v = e.namespaces, _ = e.enabled(t)), _),
      set: (m) => {
        s = m;
      }
    }), typeof e.init == "function" && e.init(g), g;
  }
  function d(t, n) {
    const s = e(this.namespace + (typeof n > "u" ? ":" : n) + t);
    return s.log = this.log, s;
  }
  function l(t) {
    e.save(t), e.namespaces = t, e.names = [], e.skips = [];
    let n;
    const s = (typeof t == "string" ? t : "").split(/[\s,]+/), v = s.length;
    for (n = 0; n < v; n++)
      s[n] && (t = s[n].replace(/\*/g, ".*?"), t[0] === "-" ? e.skips.push(new RegExp("^" + t.slice(1) + "$")) : e.names.push(new RegExp("^" + t + "$")));
  }
  function f() {
    const t = [
      ...e.names.map(F),
      ...e.skips.map(F).map((n) => "-" + n)
    ].join(",");
    return e.enable(""), t;
  }
  function h(t) {
    if (t[t.length - 1] === "*")
      return !0;
    let n, s;
    for (n = 0, s = e.skips.length; n < s; n++)
      if (e.skips[n].test(t))
        return !1;
    for (n = 0, s = e.names.length; n < s; n++)
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
  function c() {
    console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.");
  }
  return e.enable(e.load()), e;
}
var ae = ie;
(function(r, o) {
  o.formatArgs = d, o.save = l, o.load = f, o.useColors = e, o.storage = h(), o.destroy = (() => {
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
  function d(a) {
    if (a[0] = (this.useColors ? "%c" : "") + this.namespace + (this.useColors ? " %c" : " ") + a[0] + (this.useColors ? "%c " : " ") + "+" + r.exports.humanize(this.diff), !this.useColors)
      return;
    const c = "color: " + this.color;
    a.splice(1, 0, c, "color: inherit");
    let t = 0, n = 0;
    a[0].replace(/%[a-zA-Z%]/g, (s) => {
      s !== "%%" && (t++, s === "%c" && (n = t));
    }), a.splice(n, 0, c);
  }
  o.log = console.debug || console.log || (() => {
  });
  function l(a) {
    try {
      a ? o.storage.setItem("debug", a) : o.storage.removeItem("debug");
    } catch {
    }
  }
  function f() {
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
  r.exports = ae(o);
  const { formatters: F } = r.exports;
  F.j = function(a) {
    try {
      return JSON.stringify(a);
    } catch (c) {
      return "[UnexpectedJSONParseError]: " + c.message;
    }
  };
})(z, z.exports);
var le = z.exports;
const ue = /* @__PURE__ */ se(le), V = (r) => (ee("data-v-daa75785"), r = r(), te(), r), ce = { class: "carousel__container" }, de = /* @__PURE__ */ V(() => /* @__PURE__ */ L("img", {
  src: ne,
  class: "__icon",
  alt: "arrow left"
}, null, -1)), fe = ["id"], Ce = ["src"], pe = /* @__PURE__ */ V(() => /* @__PURE__ */ L("img", {
  src: re,
  class: "__icon",
  alt: "arrow right"
}, null, -1)), me = /* @__PURE__ */ J({
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
      validator(r) {
        return ["immediate", "wait"].includes(r);
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
  setup(r) {
    const o = ue("wave:cmpnt:carousel"), e = r, d = B(), l = B(), f = B(0);
    let h, F = !1, a, c, t;
    const n = B(g()), s = j(() => {
      let i = [];
      const u = n.value * e.slidesArray.length + n.value;
      let C = 0, p = 0;
      for (; C <= u - 1; )
        i.push(e.slidesArray[p]), C++, p++, p === e.slidesArray.length && (p = 0);
      return i;
    }), v = j(() => Math.ceil(s.value.length / n.value)), _ = j(() => `${100 / n.value}%`);
    function g() {
      let i = e.itemsToShow;
      if (e.breakpoints && e.breakpoints.length > 0) {
        const u = e.breakpoints.find((C) => C.size <= window.innerWidth);
        u && (i = u.itemsToShow);
      }
      return i;
    }
    Z(() => {
      n.value = g(), o("onMounted() - "), window.addEventListener("resize", () => n.value = g()), e.autoSlide && (document.addEventListener("visibilitychange", m), y());
    }), G(() => {
      o("onBeforeUnmount() - "), document.removeEventListener("visibilitychange", m);
    }), K(() => {
      o("onUnmounted() - "), window.cancelAnimationFrame(h);
    });
    function m() {
      o("onPageVisibilityChange() - ", document.hidden), document.hidden ? x() : y();
    }
    function y() {
      F = !1, a = e.transitionSpeed * 1e3, c = 0, A(), h = window.requestAnimationFrame(b);
    }
    function b(i) {
      F || (c === 0 && (c = i), t = i - c, t >= a && (c = i, A()), h = window.requestAnimationFrame(b));
    }
    function x() {
      var i, u, C, p, k;
      F = !0, window.cancelAnimationFrame(h), (i = l.value) == null || i.classList.add("carousel__disable-transition"), f.value = 0, (u = d.value) == null || u.style.setProperty("--current-slide", `${f.value}`), (C = l.value) == null || C.offsetHeight, (p = l.value) == null || p.classList.remove("carousel__disable-transition"), (k = l.value) == null || k.offsetHeight;
    }
    function w(i) {
      var u, C, p, k;
      (u = l.value) == null || u.classList.add(i), (C = l.value) == null || C.offsetHeight, window.cancelAnimationFrame(h), (p = l.value) == null || p.classList.remove(i), (k = l.value) == null || k.offsetHeight;
    }
    function T() {
      o("onMouseEnter() - "), e.autoSlide && e.stopOnHover && (e.stopOnHoverType === "wait" ? w("carousel__pause-transition") : w("carousel__disable-transition"));
    }
    function S() {
      o("onMouseLeave() - "), e.autoSlide && e.stopOnHover && y();
    }
    function A() {
      f.value === v.value - 1 ? O(W) : W();
    }
    function $() {
      f.value === 0 ? O(D) : D();
    }
    function O(i) {
      var u, C, p;
      (u = l.value) == null || u.classList.add("carousel__disable-transition"), i(), (C = l.value) == null || C.offsetHeight, (p = l.value) == null || p.classList.remove("carousel__disable-transition"), i();
    }
    function W() {
      var i, u;
      f.value = q(f.value + 1, v.value), f.value <= 1 && ((i = l.value) == null || i.offsetHeight), (u = d.value) == null || u.style.setProperty("--current-slide", `${f.value}`);
    }
    function D() {
      var i, u;
      f.value = q(f.value - 1, v.value), f.value <= 1 && ((i = l.value) == null || i.offsetHeight), (u = d.value) == null || u.style.setProperty("--current-slide", `${f.value}`);
    }
    return (i, u) => (M(), E("div", ce, [
      r.autoSlide ? U("", !0) : (M(), E("button", {
        key: 0,
        type: "button",
        style: I(r.prevBtnStyle),
        class: H(`carousel__btn ${r.prevBtnClass}`),
        onClick: $
      }, [
        P(i.$slots, "prev", { _class: ["__icon"] }, () => [
          de
        ], !0)
      ], 6)),
      L("div", {
        class: "carousel-slides__wrapper",
        ref_key: "slidesWrapper",
        ref: d
      }, [
        L("ul", {
          class: "carousel-slides__wrapper-inner",
          ref_key: "slidesWrapperInner",
          ref: l,
          style: I({ transition: `all ${e.transitionSpeed}s ${r.timingFunction}` }),
          onMouseenter: T,
          onMouseleave: S
        }, [
          (M(!0), E(Q, null, X(s.value, (C, p) => (M(), E("li", {
            key: p,
            id: `${p + 1}`,
            style: I({ flex: `0 0 ${_.value}` }),
            class: H(r.slideContainerClass ? `slide ${r.slideContainerClass}` : "slide")
          }, [
            P(i.$slots, "slide", Y(C, { _class: ["__img"] }), () => [
              L("img", {
                src: C.src,
                class: "__img"
              }, null, 8, Ce)
            ], !0)
          ], 14, fe))), 128))
        ], 36)
      ], 512),
      r.autoSlide ? U("", !0) : (M(), E("button", {
        key: 1,
        type: "button",
        style: I(r.nextBtnStyle),
        class: H(`carousel__btn ${r.nextBtnClass}`),
        onClick: A
      }, [
        P(i.$slots, "next", { _class: ["__icon"] }, () => [
          pe
        ], !0)
      ], 6))
    ]));
  }
});
const ge = (r, o) => {
  const e = r.__vccOpts || r;
  for (const [d, l] of o)
    e[d] = l;
  return e;
}, he = /* @__PURE__ */ ge(me, [["__scopeId", "data-v-daa75785"]]);
export {
  he as Carousel
};
