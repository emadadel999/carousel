import { defineComponent as J, ref as x, inject as Z, computed as $, onMounted as G, onBeforeUnmount as K, onUnmounted as Q, openBlock as M, createElementBlock as E, normalizeStyle as B, normalizeClass as T, renderSlot as H, createCommentVNode as U, createElementVNode as I, Fragment as X, renderList as Y, normalizeProps as ee, guardReactiveProps as te, pushScopeId as ne, popScopeId as re } from "vue";
const oe = "/arrow-left.svg", se = "/arrow-right.svg";
function V(o, s) {
  let e = o % s;
  return e < 0 && (e += s), e;
}
function ie(o) {
  return o && o.__esModule && Object.prototype.hasOwnProperty.call(o, "default") ? o.default : o;
}
var N = { exports: {} }, P, W;
function ae() {
  if (W)
    return P;
  W = 1;
  var o = 1e3, s = o * 60, e = s * 60, d = e * 24, l = d * 7, c = d * 365.25;
  P = function(t, n) {
    n = n || {};
    var r = typeof t;
    if (r === "string" && t.length > 0)
      return F(t);
    if (r === "number" && isFinite(t))
      return n.long ? a(t) : v(t);
    throw new Error(
      "val is not a non-empty string or a valid number. val=" + JSON.stringify(t)
    );
  };
  function F(t) {
    if (t = String(t), !(t.length > 100)) {
      var n = /^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(
        t
      );
      if (n) {
        var r = parseFloat(n[1]), h = (n[2] || "ms").toLowerCase();
        switch (h) {
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
            return r * d;
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
            return r * s;
          case "seconds":
          case "second":
          case "secs":
          case "sec":
          case "s":
            return r * o;
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
  function v(t) {
    var n = Math.abs(t);
    return n >= d ? Math.round(t / d) + "d" : n >= e ? Math.round(t / e) + "h" : n >= s ? Math.round(t / s) + "m" : n >= o ? Math.round(t / o) + "s" : t + "ms";
  }
  function a(t) {
    var n = Math.abs(t);
    return n >= d ? f(t, n, d, "day") : n >= e ? f(t, n, e, "hour") : n >= s ? f(t, n, s, "minute") : n >= o ? f(t, n, o, "second") : t + " ms";
  }
  function f(t, n, r, h) {
    var b = n >= r * 1.5;
    return Math.round(t / r) + " " + h + (b ? "s" : "");
  }
  return P;
}
function le(o) {
  e.debug = e, e.default = e, e.coerce = a, e.disable = c, e.enable = l, e.enabled = F, e.humanize = ae(), e.destroy = f, Object.keys(o).forEach((t) => {
    e[t] = o[t];
  }), e.names = [], e.skips = [], e.formatters = {};
  function s(t) {
    let n = 0;
    for (let r = 0; r < t.length; r++)
      n = (n << 5) - n + t.charCodeAt(r), n |= 0;
    return e.colors[Math.abs(n) % e.colors.length];
  }
  e.selectColor = s;
  function e(t) {
    let n, r = null, h, b;
    function g(...p) {
      if (!g.enabled)
        return;
      const y = g, w = Number(/* @__PURE__ */ new Date()), j = w - (n || w);
      y.diff = j, y.prev = n, y.curr = w, n = w, p[0] = e.coerce(p[0]), typeof p[0] != "string" && p.unshift("%O");
      let _ = 0;
      p[0] = p[0].replace(/%([a-zA-Z%])/g, (S, A) => {
        if (S === "%%")
          return "%";
        _++;
        const O = e.formatters[A];
        if (typeof O == "function") {
          const L = p[_];
          S = O.call(y, L), p.splice(_, 1), _--;
        }
        return S;
      }), e.formatArgs.call(y, p), (y.log || e.log).apply(y, p);
    }
    return g.namespace = t, g.useColors = e.useColors(), g.color = e.selectColor(t), g.extend = d, g.destroy = e.destroy, Object.defineProperty(g, "enabled", {
      enumerable: !0,
      configurable: !1,
      get: () => r !== null ? r : (h !== e.namespaces && (h = e.namespaces, b = e.enabled(t)), b),
      set: (p) => {
        r = p;
      }
    }), typeof e.init == "function" && e.init(g), g;
  }
  function d(t, n) {
    const r = e(this.namespace + (typeof n > "u" ? ":" : n) + t);
    return r.log = this.log, r;
  }
  function l(t) {
    e.save(t), e.namespaces = t, e.names = [], e.skips = [];
    let n;
    const r = (typeof t == "string" ? t : "").split(/[\s,]+/), h = r.length;
    for (n = 0; n < h; n++)
      r[n] && (t = r[n].replace(/\*/g, ".*?"), t[0] === "-" ? e.skips.push(new RegExp("^" + t.slice(1) + "$")) : e.names.push(new RegExp("^" + t + "$")));
  }
  function c() {
    const t = [
      ...e.names.map(v),
      ...e.skips.map(v).map((n) => "-" + n)
    ].join(",");
    return e.enable(""), t;
  }
  function F(t) {
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
  function v(t) {
    return t.toString().substring(2, t.toString().length - 2).replace(/\.\*\?$/, "*");
  }
  function a(t) {
    return t instanceof Error ? t.stack || t.message : t;
  }
  function f() {
    console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.");
  }
  return e.enable(e.load()), e;
}
var ue = le;
(function(o, s) {
  s.formatArgs = d, s.save = l, s.load = c, s.useColors = e, s.storage = F(), s.destroy = (() => {
    let a = !1;
    return () => {
      a || (a = !0, console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`."));
    };
  })(), s.colors = [
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
    if (a[0] = (this.useColors ? "%c" : "") + this.namespace + (this.useColors ? " %c" : " ") + a[0] + (this.useColors ? "%c " : " ") + "+" + o.exports.humanize(this.diff), !this.useColors)
      return;
    const f = "color: " + this.color;
    a.splice(1, 0, f, "color: inherit");
    let t = 0, n = 0;
    a[0].replace(/%[a-zA-Z%]/g, (r) => {
      r !== "%%" && (t++, r === "%c" && (n = t));
    }), a.splice(n, 0, f);
  }
  s.log = console.debug || console.log || (() => {
  });
  function l(a) {
    try {
      a ? s.storage.setItem("debug", a) : s.storage.removeItem("debug");
    } catch {
    }
  }
  function c() {
    let a;
    try {
      a = s.storage.getItem("debug");
    } catch {
    }
    return !a && typeof process < "u" && "env" in process && (a = process.env.DEBUG), a;
  }
  function F() {
    try {
      return localStorage;
    } catch {
    }
  }
  o.exports = ue(s);
  const { formatters: v } = o.exports;
  v.j = function(a) {
    try {
      return JSON.stringify(a);
    } catch (f) {
      return "[UnexpectedJSONParseError]: " + f.message;
    }
  };
})(N, N.exports);
var ce = N.exports;
const de = /* @__PURE__ */ ie(ce), q = (o) => (ne("data-v-91ae6326"), o = o(), re(), o), fe = { class: "carousel__container" }, Ce = /* @__PURE__ */ q(() => /* @__PURE__ */ I("img", {
  src: oe,
  alt: "arrow left"
}, null, -1)), pe = ["id"], me = /* @__PURE__ */ q(() => /* @__PURE__ */ I("img", {
  src: se,
  alt: "arrow right"
}, null, -1)), ve = /* @__PURE__ */ J({
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
      validator(o) {
        return ["immediate", "wait"].includes(o);
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
  setup(o) {
    const s = de("wave:cmpnt:carousel"), e = o, d = x(), l = x(), c = x(0), F = Z("windowWidth");
    let v, a = !1, f, t, n;
    const r = $(() => {
      let i = e.itemsToShow;
      if (e.breakpoints && e.breakpoints.length > 0) {
        const u = e.breakpoints.find((m) => m.size <= (F == null ? void 0 : F.value));
        u && (i = u.itemsToShow);
      }
      return i;
    }), h = $(() => {
      let i = [];
      const u = r.value * e.slidesArray.length + r.value;
      let m = 0, C = 0;
      for (; m <= u - 1; )
        i.push(e.slidesArray[C]), m++, C++, C === e.slidesArray.length && (C = 0);
      return i;
    }), b = $(() => Math.ceil(h.value.length / r.value)), g = $(() => `${100 / r.value}%`);
    G(() => {
      s("onMounted() - "), e.autoSlide && (document.addEventListener("visibilitychange", p), y());
    }), K(() => {
      s("onBeforeUnmount() - "), document.removeEventListener("visibilitychange", p);
    }), Q(() => {
      s("onUnmounted() - "), window.cancelAnimationFrame(v);
    });
    function p() {
      s("onPageVisibilityChange() - ", document.hidden), document.hidden ? j() : y();
    }
    function y() {
      a = !1, f = e.transitionSpeed * 1e3, t = 0, A(), v = window.requestAnimationFrame(w);
    }
    function w(i) {
      a || (t === 0 && (t = i), n = i - t, n >= f && (t = i, A()), v = window.requestAnimationFrame(w));
    }
    function j() {
      var i, u, m, C, k;
      a = !0, window.cancelAnimationFrame(v), (i = l.value) == null || i.classList.add("carousel__disable-transition"), c.value = 0, (u = d.value) == null || u.style.setProperty("--current-slide", `${c.value}`), (m = l.value) == null || m.offsetHeight, (C = l.value) == null || C.classList.remove("carousel__disable-transition"), (k = l.value) == null || k.offsetHeight;
    }
    function _(i) {
      var u, m, C, k;
      (u = l.value) == null || u.classList.add(i), (m = l.value) == null || m.offsetHeight, window.cancelAnimationFrame(v), (C = l.value) == null || C.classList.remove(i), (k = l.value) == null || k.offsetHeight;
    }
    function z() {
      s("onMouseEnter() - "), e.autoSlide && e.stopOnHover && (e.stopOnHoverType === "wait" ? _("carousel__pause-transition") : _("carousel__disable-transition"));
    }
    function S() {
      s("onMouseLeave() - "), e.autoSlide && e.stopOnHover && y();
    }
    function A() {
      console.log("currentSlide.value", c.value), console.log("numOfViews.value", b.value), c.value === b.value - 1 ? L(D) : D();
    }
    function O() {
      c.value === 0 ? L(R) : R();
    }
    function L(i) {
      var u, m, C;
      (u = l.value) == null || u.classList.add("carousel__disable-transition"), i(), (m = l.value) == null || m.offsetHeight, (C = l.value) == null || C.classList.remove("carousel__disable-transition"), i();
    }
    function D() {
      var i, u;
      c.value = V(c.value + 1, b.value), c.value <= 1 && ((i = l.value) == null || i.offsetHeight), (u = d.value) == null || u.style.setProperty("--current-slide", `${c.value}`);
    }
    function R() {
      var i, u;
      c.value = V(c.value - 1, b.value), c.value <= 1 && ((i = l.value) == null || i.offsetHeight), (u = d.value) == null || u.style.setProperty("--current-slide", `${c.value}`);
    }
    return (i, u) => (M(), E("div", fe, [
      o.autoSlide ? U("", !0) : (M(), E("button", {
        key: 0,
        type: "button",
        style: B(o.prevBtnStyle),
        class: T(`carousel__btn ${o.prevBtnClass}`),
        onClick: O
      }, [
        H(i.$slots, "prev", {}, () => [
          Ce
        ], !0)
      ], 6)),
      I("div", {
        class: "carousel-slides__wrapper",
        ref_key: "slidesWrapper",
        ref: d
      }, [
        I("ul", {
          class: "carousel-slides__wrapper-inner",
          ref_key: "slidesWrapperInner",
          ref: l,
          style: B({ transition: `all ${e.transitionSpeed}s ${o.timingFunction}` }),
          onMouseenter: z,
          onMouseleave: S
        }, [
          (M(!0), E(X, null, Y(h.value, (m, C) => (M(), E("li", {
            key: C,
            id: `${C + 1}`,
            style: B({ flex: `0 0 ${g.value}` }),
            class: "slide"
          }, [
            H(i.$slots, "slide", ee(te(m)), void 0, !0)
          ], 12, pe))), 128))
        ], 36)
      ], 512),
      o.autoSlide ? U("", !0) : (M(), E("button", {
        key: 1,
        type: "button",
        style: B(o.nextBtnStyle),
        class: T(`carousel__btn ${o.nextBtnClass}`),
        onClick: A
      }, [
        H(i.$slots, "next", {}, () => [
          me
        ], !0)
      ], 6))
    ]));
  }
});
const ge = (o, s) => {
  const e = o.__vccOpts || o;
  for (const [d, l] of s)
    e[d] = l;
  return e;
}, ye = /* @__PURE__ */ ge(ve, [["__scopeId", "data-v-91ae6326"]]);
export {
  ye as Carousel
};
