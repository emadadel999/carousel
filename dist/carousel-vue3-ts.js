import { defineComponent as q, ref as H, inject as J, computed as O, onMounted as Z, onBeforeUnmount as G, onUnmounted as K, openBlock as M, createElementBlock as E, normalizeStyle as B, normalizeClass as P, renderSlot as I, createCommentVNode as U, createElementVNode as j, Fragment as Q, renderList as X, normalizeProps as Y, guardReactiveProps as ee } from "vue";
const te = "/arrow-left.svg", ne = "/arrow-right.svg";
function V(s, o) {
  let e = s % o;
  return e < 0 && (e += o), e;
}
function re(s) {
  return s && s.__esModule && Object.prototype.hasOwnProperty.call(s, "default") ? s.default : s;
}
var z = { exports: {} }, N, W;
function se() {
  if (W)
    return N;
  W = 1;
  var s = 1e3, o = s * 60, e = o * 60, d = e * 24, l = d * 7, c = d * 365.25;
  N = function(t, n) {
    n = n || {};
    var r = typeof t;
    if (r === "string" && t.length > 0)
      return F(t);
    if (r === "number" && isFinite(t))
      return n.long ? a(t) : g(t);
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
  function g(t) {
    var n = Math.abs(t);
    return n >= d ? Math.round(t / d) + "d" : n >= e ? Math.round(t / e) + "h" : n >= o ? Math.round(t / o) + "m" : n >= s ? Math.round(t / s) + "s" : t + "ms";
  }
  function a(t) {
    var n = Math.abs(t);
    return n >= d ? f(t, n, d, "day") : n >= e ? f(t, n, e, "hour") : n >= o ? f(t, n, o, "minute") : n >= s ? f(t, n, s, "second") : t + " ms";
  }
  function f(t, n, r, h) {
    var b = n >= r * 1.5;
    return Math.round(t / r) + " " + h + (b ? "s" : "");
  }
  return N;
}
function oe(s) {
  e.debug = e, e.default = e, e.coerce = a, e.disable = c, e.enable = l, e.enabled = F, e.humanize = se(), e.destroy = f, Object.keys(s).forEach((t) => {
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
    let n, r = null, h, b;
    function v(...m) {
      if (!v.enabled)
        return;
      const y = v, w = Number(/* @__PURE__ */ new Date()), x = w - (n || w);
      y.diff = x, y.prev = n, y.curr = w, n = w, m[0] = e.coerce(m[0]), typeof m[0] != "string" && m.unshift("%O");
      let S = 0;
      m[0] = m[0].replace(/%([a-zA-Z%])/g, (_, A) => {
        if (_ === "%%")
          return "%";
        S++;
        const $ = e.formatters[A];
        if (typeof $ == "function") {
          const L = m[S];
          _ = $.call(y, L), m.splice(S, 1), S--;
        }
        return _;
      }), e.formatArgs.call(y, m), (y.log || e.log).apply(y, m);
    }
    return v.namespace = t, v.useColors = e.useColors(), v.color = e.selectColor(t), v.extend = d, v.destroy = e.destroy, Object.defineProperty(v, "enabled", {
      enumerable: !0,
      configurable: !1,
      get: () => r !== null ? r : (h !== e.namespaces && (h = e.namespaces, b = e.enabled(t)), b),
      set: (m) => {
        r = m;
      }
    }), typeof e.init == "function" && e.init(v), v;
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
      ...e.names.map(g),
      ...e.skips.map(g).map((n) => "-" + n)
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
  function g(t) {
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
var ie = oe;
(function(s, o) {
  o.formatArgs = d, o.save = l, o.load = c, o.useColors = e, o.storage = F(), o.destroy = (() => {
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
    if (a[0] = (this.useColors ? "%c" : "") + this.namespace + (this.useColors ? " %c" : " ") + a[0] + (this.useColors ? "%c " : " ") + "+" + s.exports.humanize(this.diff), !this.useColors)
      return;
    const f = "color: " + this.color;
    a.splice(1, 0, f, "color: inherit");
    let t = 0, n = 0;
    a[0].replace(/%[a-zA-Z%]/g, (r) => {
      r !== "%%" && (t++, r === "%c" && (n = t));
    }), a.splice(n, 0, f);
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
  function F() {
    try {
      return localStorage;
    } catch {
    }
  }
  s.exports = ie(o);
  const { formatters: g } = s.exports;
  g.j = function(a) {
    try {
      return JSON.stringify(a);
    } catch (f) {
      return "[UnexpectedJSONParseError]: " + f.message;
    }
  };
})(z, z.exports);
var ae = z.exports;
const le = /* @__PURE__ */ re(ae), ue = { class: "carousel__container" }, ce = /* @__PURE__ */ j("img", {
  src: te,
  alt: "arrow left"
}, null, -1), de = ["id"], fe = /* @__PURE__ */ j("img", {
  src: ne,
  alt: "arrow right"
}, null, -1), me = /* @__PURE__ */ q({
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
    const o = le("wave:cmpnt:carousel"), e = s, d = H(), l = H(), c = H(0), F = J("windowWidth");
    let g, a = !1, f, t, n;
    const r = O(() => {
      let i = e.itemsToShow;
      if (e.breakpoints && e.breakpoints.length > 0) {
        const u = e.breakpoints.find((p) => p.size <= (F == null ? void 0 : F.value));
        u && (i = u.itemsToShow);
      }
      return i;
    }), h = O(() => {
      let i = [];
      const u = r.value * e.slidesArray.length + r.value;
      let p = 0, C = 0;
      for (; p <= u - 1; )
        i.push(e.slidesArray[C]), p++, C++, C === e.slidesArray.length && (C = 0);
      return i;
    }), b = O(() => Math.ceil(h.value.length / r.value)), v = O(() => `${100 / r.value}%`);
    Z(() => {
      o("onMounted() - "), e.autoSlide && (document.addEventListener("visibilitychange", m), y());
    }), G(() => {
      o("onBeforeUnmount() - "), document.removeEventListener("visibilitychange", m);
    }), K(() => {
      o("onUnmounted() - "), window.cancelAnimationFrame(g);
    });
    function m() {
      o("onPageVisibilityChange() - ", document.hidden), document.hidden ? x() : y();
    }
    function y() {
      a = !1, f = e.transitionSpeed * 1e3, t = 0, A(), g = window.requestAnimationFrame(w);
    }
    function w(i) {
      a || (t === 0 && (t = i), n = i - t, n >= f && (t = i, A()), g = window.requestAnimationFrame(w));
    }
    function x() {
      var i, u, p, C, k;
      a = !0, window.cancelAnimationFrame(g), (i = l.value) == null || i.classList.add("carousel__disable-transition"), c.value = 0, (u = d.value) == null || u.style.setProperty("--current-slide", `${c.value}`), (p = l.value) == null || p.offsetHeight, (C = l.value) == null || C.classList.remove("carousel__disable-transition"), (k = l.value) == null || k.offsetHeight;
    }
    function S(i) {
      var u, p, C, k;
      (u = l.value) == null || u.classList.add(i), (p = l.value) == null || p.offsetHeight, window.cancelAnimationFrame(g), (C = l.value) == null || C.classList.remove(i), (k = l.value) == null || k.offsetHeight;
    }
    function D() {
      o("onMouseEnter() - "), e.autoSlide && e.stopOnHover && (e.stopOnHoverType === "wait" ? S("carousel__pause-transition") : S("carousel__disable-transition"));
    }
    function _() {
      o("onMouseLeave() - "), e.autoSlide && e.stopOnHover && y();
    }
    function A() {
      console.log("currentSlide.value", c.value), console.log("numOfViews.value", b.value), c.value === b.value - 1 ? L(R) : R();
    }
    function $() {
      c.value === 0 ? L(T) : T();
    }
    function L(i) {
      var u, p, C;
      (u = l.value) == null || u.classList.add("carousel__disable-transition"), i(), (p = l.value) == null || p.offsetHeight, (C = l.value) == null || C.classList.remove("carousel__disable-transition"), i();
    }
    function R() {
      var i, u;
      c.value = V(c.value + 1, b.value), c.value <= 1 && ((i = l.value) == null || i.offsetHeight), (u = d.value) == null || u.style.setProperty("--current-slide", `${c.value}`);
    }
    function T() {
      var i, u;
      c.value = V(c.value - 1, b.value), c.value <= 1 && ((i = l.value) == null || i.offsetHeight), (u = d.value) == null || u.style.setProperty("--current-slide", `${c.value}`);
    }
    return (i, u) => (M(), E("div", ue, [
      s.autoSlide ? U("", !0) : (M(), E("button", {
        key: 0,
        type: "button",
        style: B(s.prevBtnStyle),
        class: P(`carousel__btn ${s.prevBtnClass}`),
        onClick: $
      }, [
        I(i.$slots, "prev", {}, () => [
          ce
        ])
      ], 6)),
      j("div", {
        class: "carousel-slides__wrapper",
        ref_key: "slidesWrapper",
        ref: d
      }, [
        j("ul", {
          class: "carousel-slides__wrapper-inner",
          ref_key: "slidesWrapperInner",
          ref: l,
          style: B({ transition: `all ${e.transitionSpeed}s ${s.timingFunction}` }),
          onMouseenter: D,
          onMouseleave: _
        }, [
          (M(!0), E(Q, null, X(h.value, (p, C) => (M(), E("li", {
            key: C,
            id: `${C + 1}`,
            style: B({ flex: `0 0 ${v.value}` }),
            class: P(`slide ${s.slideContainerClass}`)
          }, [
            I(i.$slots, "slide", Y(ee(p)))
          ], 14, de))), 128))
        ], 36)
      ], 512),
      s.autoSlide ? U("", !0) : (M(), E("button", {
        key: 1,
        type: "button",
        style: B(s.nextBtnStyle),
        class: P(`carousel__btn ${s.nextBtnClass}`),
        onClick: A
      }, [
        I(i.$slots, "next", {}, () => [
          fe
        ])
      ], 6))
    ]));
  }
});
export {
  me as Carousel
};
