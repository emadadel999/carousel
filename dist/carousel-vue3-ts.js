import { defineComponent as Z, ref as O, computed as H, onMounted as G, onBeforeUnmount as K, onUnmounted as Q, openBlock as M, createElementBlock as $, normalizeStyle as B, normalizeClass as P, renderSlot as N, createCommentVNode as q, createElementVNode as E, Fragment as X, renderList as Y, mergeProps as ee, pushScopeId as te, popScopeId as ne } from "vue";
const re = "/arrow-left.svg", se = "/arrow-right.svg";
function R(s, a) {
  let t = s % a;
  return t < 0 && (t += a), t;
}
function oe(s) {
  return s && s.__esModule && Object.prototype.hasOwnProperty.call(s, "default") ? s.default : s;
}
var T = { exports: {} }, z, V;
function ie() {
  if (V)
    return z;
  V = 1;
  var s = 1e3, a = s * 60, t = a * 60, i = t * 24, g = i * 7, c = i * 365.25;
  z = function(e, n) {
    n = n || {};
    var r = typeof e;
    if (r === "string" && e.length > 0)
      return d(e);
    if (r === "number" && isFinite(e))
      return n.long ? l(e) : v(e);
    throw new Error(
      "val is not a non-empty string or a valid number. val=" + JSON.stringify(e)
    );
  };
  function d(e) {
    if (e = String(e), !(e.length > 100)) {
      var n = /^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(
        e
      );
      if (n) {
        var r = parseFloat(n[1]), y = (n[2] || "ms").toLowerCase();
        switch (y) {
          case "years":
          case "year":
          case "yrs":
          case "yr":
          case "y":
            return r * c;
          case "weeks":
          case "week":
          case "w":
            return r * g;
          case "days":
          case "day":
          case "d":
            return r * i;
          case "hours":
          case "hour":
          case "hrs":
          case "hr":
          case "h":
            return r * t;
          case "minutes":
          case "minute":
          case "mins":
          case "min":
          case "m":
            return r * a;
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
  function v(e) {
    var n = Math.abs(e);
    return n >= i ? Math.round(e / i) + "d" : n >= t ? Math.round(e / t) + "h" : n >= a ? Math.round(e / a) + "m" : n >= s ? Math.round(e / s) + "s" : e + "ms";
  }
  function l(e) {
    var n = Math.abs(e);
    return n >= i ? f(e, n, i, "day") : n >= t ? f(e, n, t, "hour") : n >= a ? f(e, n, a, "minute") : n >= s ? f(e, n, s, "second") : e + " ms";
  }
  function f(e, n, r, y) {
    var b = n >= r * 1.5;
    return Math.round(e / r) + " " + y + (b ? "s" : "");
  }
  return z;
}
function ae(s) {
  t.debug = t, t.default = t, t.coerce = l, t.disable = c, t.enable = g, t.enabled = d, t.humanize = ie(), t.destroy = f, Object.keys(s).forEach((e) => {
    t[e] = s[e];
  }), t.names = [], t.skips = [], t.formatters = {};
  function a(e) {
    let n = 0;
    for (let r = 0; r < e.length; r++)
      n = (n << 5) - n + e.charCodeAt(r), n |= 0;
    return t.colors[Math.abs(n) % t.colors.length];
  }
  t.selectColor = a;
  function t(e) {
    let n, r = null, y, b;
    function h(...C) {
      if (!h.enabled)
        return;
      const F = h, w = Number(/* @__PURE__ */ new Date()), L = w - (n || w);
      F.diff = L, F.prev = n, F.curr = w, n = w, C[0] = t.coerce(C[0]), typeof C[0] != "string" && C.unshift("%O");
      let _ = 0;
      C[0] = C[0].replace(/%([a-zA-Z%])/g, (A, j) => {
        if (A === "%%")
          return "%";
        _++;
        const S = t.formatters[j];
        if (typeof S == "function") {
          const x = C[_];
          A = S.call(F, x), C.splice(_, 1), _--;
        }
        return A;
      }), t.formatArgs.call(F, C), (F.log || t.log).apply(F, C);
    }
    return h.namespace = e, h.useColors = t.useColors(), h.color = t.selectColor(e), h.extend = i, h.destroy = t.destroy, Object.defineProperty(h, "enabled", {
      enumerable: !0,
      configurable: !1,
      get: () => r !== null ? r : (y !== t.namespaces && (y = t.namespaces, b = t.enabled(e)), b),
      set: (C) => {
        r = C;
      }
    }), typeof t.init == "function" && t.init(h), h;
  }
  function i(e, n) {
    const r = t(this.namespace + (typeof n > "u" ? ":" : n) + e);
    return r.log = this.log, r;
  }
  function g(e) {
    t.save(e), t.namespaces = e, t.names = [], t.skips = [];
    let n;
    const r = (typeof e == "string" ? e : "").split(/[\s,]+/), y = r.length;
    for (n = 0; n < y; n++)
      r[n] && (e = r[n].replace(/\*/g, ".*?"), e[0] === "-" ? t.skips.push(new RegExp("^" + e.slice(1) + "$")) : t.names.push(new RegExp("^" + e + "$")));
  }
  function c() {
    const e = [
      ...t.names.map(v),
      ...t.skips.map(v).map((n) => "-" + n)
    ].join(",");
    return t.enable(""), e;
  }
  function d(e) {
    if (e[e.length - 1] === "*")
      return !0;
    let n, r;
    for (n = 0, r = t.skips.length; n < r; n++)
      if (t.skips[n].test(e))
        return !1;
    for (n = 0, r = t.names.length; n < r; n++)
      if (t.names[n].test(e))
        return !0;
    return !1;
  }
  function v(e) {
    return e.toString().substring(2, e.toString().length - 2).replace(/\.\*\?$/, "*");
  }
  function l(e) {
    return e instanceof Error ? e.stack || e.message : e;
  }
  function f() {
    console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.");
  }
  return t.enable(t.load()), t;
}
var le = ae;
(function(s, a) {
  a.formatArgs = i, a.save = g, a.load = c, a.useColors = t, a.storage = d(), a.destroy = (() => {
    let l = !1;
    return () => {
      l || (l = !0, console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`."));
    };
  })(), a.colors = [
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
  function t() {
    return typeof window < "u" && window.process && (window.process.type === "renderer" || window.process.__nwjs) ? !0 : typeof navigator < "u" && navigator.userAgent && navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/) ? !1 : typeof document < "u" && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance || // Is firebug? http://stackoverflow.com/a/398120/376773
    typeof window < "u" && window.console && (window.console.firebug || window.console.exception && window.console.table) || // Is firefox >= v31?
    // https://developer.mozilla.org/en-US/docs/Tools/Web_Console#Styling_messages
    typeof navigator < "u" && navigator.userAgent && navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31 || // Double check webkit in userAgent just in case we are in a worker
    typeof navigator < "u" && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/);
  }
  function i(l) {
    if (l[0] = (this.useColors ? "%c" : "") + this.namespace + (this.useColors ? " %c" : " ") + l[0] + (this.useColors ? "%c " : " ") + "+" + s.exports.humanize(this.diff), !this.useColors)
      return;
    const f = "color: " + this.color;
    l.splice(1, 0, f, "color: inherit");
    let e = 0, n = 0;
    l[0].replace(/%[a-zA-Z%]/g, (r) => {
      r !== "%%" && (e++, r === "%c" && (n = e));
    }), l.splice(n, 0, f);
  }
  a.log = console.debug || console.log || (() => {
  });
  function g(l) {
    try {
      l ? a.storage.setItem("debug", l) : a.storage.removeItem("debug");
    } catch {
    }
  }
  function c() {
    let l;
    try {
      l = a.storage.getItem("debug");
    } catch {
    }
    return !l && typeof process < "u" && "env" in process && (l = process.env.DEBUG), l;
  }
  function d() {
    try {
      return localStorage;
    } catch {
    }
  }
  s.exports = le(a);
  const { formatters: v } = s.exports;
  v.j = function(l) {
    try {
      return JSON.stringify(l);
    } catch (f) {
      return "[UnexpectedJSONParseError]: " + f.message;
    }
  };
})(T, T.exports);
var ue = T.exports;
const ce = /* @__PURE__ */ oe(ue), J = (s) => (te("data-v-939d40b3"), s = s(), ne(), s), de = { class: "carousel__container" }, fe = /* @__PURE__ */ J(() => /* @__PURE__ */ E("img", {
  src: re,
  class: "__icon",
  alt: "arrow left"
}, null, -1)), Ce = ["id"], me = ["src"], pe = /* @__PURE__ */ J(() => /* @__PURE__ */ E("img", {
  src: se,
  class: "__icon",
  alt: "arrow right"
}, null, -1)), ge = /* @__PURE__ */ Z({
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
  emits: ["imgClicked"],
  setup(s, { emit: a }) {
    const t = ce("wave:cmpnt:carousel"), i = s, g = O(), c = O(), d = O(0);
    let v, l = !1, f, e, n;
    const r = O(C()), y = H(() => {
      let o = [];
      const u = r.value * i.slidesArray.length + r.value;
      let m = 0, p = 0;
      for (; m <= u - 1; )
        o.push(i.slidesArray[p]), m++, p++, p === i.slidesArray.length && (p = 0);
      return o;
    }), b = H(() => Math.ceil(y.value.length / r.value)), h = H(() => `${100 / r.value}%`);
    function C() {
      let o = i.itemsToShow;
      if (i.breakpoints && i.breakpoints.length > 0) {
        const u = i.breakpoints.find((m) => m.size <= window.innerWidth);
        u && (o = u.itemsToShow);
      }
      return o;
    }
    G(() => {
      r.value = C(), t("onMounted() - "), window.addEventListener("resize", () => r.value = C()), i.autoSlide && (document.addEventListener("visibilitychange", F), w());
    }), K(() => {
      t("onBeforeUnmount() - "), document.removeEventListener("visibilitychange", F);
    }), Q(() => {
      t("onUnmounted() - "), window.cancelAnimationFrame(v);
    });
    function F() {
      t("onPageVisibilityChange() - ", document.hidden), document.hidden ? _() : w();
    }
    function w() {
      l = !1, f = i.transitionSpeed * 1e3, e = 0, S(), v = window.requestAnimationFrame(L);
    }
    function L(o) {
      l || (e === 0 && (e = o), n = o - e, n >= f && (e = o, S()), v = window.requestAnimationFrame(L));
    }
    function _() {
      var o, u, m, p, k;
      l = !0, window.cancelAnimationFrame(v), (o = c.value) == null || o.classList.add("carousel__disable-transition"), d.value = 0, (u = g.value) == null || u.style.setProperty("--current-slide", `${d.value}`), (m = c.value) == null || m.offsetHeight, (p = c.value) == null || p.classList.remove("carousel__disable-transition"), (k = c.value) == null || k.offsetHeight;
    }
    function I(o) {
      var u, m, p, k;
      (u = c.value) == null || u.classList.add(o), (m = c.value) == null || m.offsetHeight, window.cancelAnimationFrame(v), (p = c.value) == null || p.classList.remove(o), (k = c.value) == null || k.offsetHeight;
    }
    function A() {
      t("onMouseEnter() - "), i.autoSlide && i.stopOnHover && (i.stopOnHoverType === "wait" ? I("carousel__pause-transition") : I("carousel__disable-transition"));
    }
    function j() {
      t("onMouseLeave() - "), i.autoSlide && i.stopOnHover && w();
    }
    function S() {
      d.value === b.value - 1 ? W(D) : D();
    }
    function x() {
      d.value === 0 ? W(U) : U();
    }
    function W(o) {
      var u, m, p;
      (u = c.value) == null || u.classList.add("carousel__disable-transition"), o(), (m = c.value) == null || m.offsetHeight, (p = c.value) == null || p.classList.remove("carousel__disable-transition"), o();
    }
    function D() {
      var o, u;
      d.value = R(d.value + 1, b.value), d.value <= 1 && ((o = c.value) == null || o.offsetHeight), (u = g.value) == null || u.style.setProperty("--current-slide", `${d.value}`);
    }
    function U() {
      var o, u;
      d.value = R(d.value - 1, b.value), d.value <= 1 && ((o = c.value) == null || o.offsetHeight), (u = g.value) == null || u.style.setProperty("--current-slide", `${d.value}`);
    }
    return (o, u) => (M(), $("div", de, [
      s.autoSlide ? q("", !0) : (M(), $("button", {
        key: 0,
        type: "button",
        style: B(s.prevBtnStyle),
        class: P(`carousel__btn ${s.prevBtnClass}`),
        onClick: x
      }, [
        N(o.$slots, "prev", { _class: ["__icon"] }, () => [
          fe
        ], !0)
      ], 6)),
      E("div", {
        class: "carousel-slides__wrapper",
        ref_key: "slidesWrapper",
        ref: g
      }, [
        E("ul", {
          class: "carousel-slides__wrapper-inner",
          ref_key: "slidesWrapperInner",
          ref: c,
          style: B({ transition: `all ${i.transitionSpeed}s ${s.timingFunction}` }),
          onMouseenter: A,
          onMouseleave: j
        }, [
          (M(!0), $(X, null, Y(y.value, (m, p) => (M(), $("li", {
            key: p,
            id: `${p + 1}`,
            style: B({ flex: `0 0 ${h.value}` }),
            class: P(s.slideContainerClass ? `slide ${s.slideContainerClass}` : "slide"),
            onClick: u[0] || (u[0] = (k) => o.$emit("imgClicked"))
          }, [
            N(o.$slots, "slide", ee(m, { _class: ["__img"] }), () => [
              E("img", {
                src: m.src,
                class: "__img"
              }, null, 8, me)
            ], !0)
          ], 14, Ce))), 128))
        ], 36)
      ], 512),
      s.autoSlide ? q("", !0) : (M(), $("button", {
        key: 1,
        type: "button",
        style: B(s.nextBtnStyle),
        class: P(`carousel__btn ${s.nextBtnClass}`),
        onClick: S
      }, [
        N(o.$slots, "next", { _class: ["__icon"] }, () => [
          pe
        ], !0)
      ], 6))
    ]));
  }
});
const ve = (s, a) => {
  const t = s.__vccOpts || s;
  for (const [i, g] of a)
    t[i] = g;
  return t;
}, ye = /* @__PURE__ */ ve(ge, [["__scopeId", "data-v-939d40b3"]]);
export {
  ye as Carousel
};
