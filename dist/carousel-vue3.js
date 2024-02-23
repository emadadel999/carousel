import { defineComponent as Z, ref as x, inject as G, computed as O, onMounted as K, nextTick as D, onBeforeUnmount as Q, onUnmounted as X, openBlock as M, createElementBlock as E, Fragment as R, normalizeStyle as B, normalizeClass as U, renderSlot as P, createCommentVNode as W, createElementVNode as q, renderList as Y, normalizeProps as ee, guardReactiveProps as te } from "vue";
function V(s, o) {
  let e = s % o;
  return e < 0 && (e += o), e;
}
function ne(s) {
  return s && s.__esModule && Object.prototype.hasOwnProperty.call(s, "default") ? s.default : s;
}
var I = { exports: {} }, H, J;
function re() {
  if (J)
    return H;
  J = 1;
  var s = 1e3, o = s * 60, e = o * 60, u = e * 24, l = u * 7, c = u * 365.25;
  H = function(t, n) {
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
            return r * u;
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
    return n >= u ? Math.round(t / u) + "d" : n >= e ? Math.round(t / e) + "h" : n >= o ? Math.round(t / o) + "m" : n >= s ? Math.round(t / s) + "s" : t + "ms";
  }
  function a(t) {
    var n = Math.abs(t);
    return n >= u ? d(t, n, u, "day") : n >= e ? d(t, n, e, "hour") : n >= o ? d(t, n, o, "minute") : n >= s ? d(t, n, s, "second") : t + " ms";
  }
  function d(t, n, r, v) {
    var b = n >= r * 1.5;
    return Math.round(t / r) + " " + v + (b ? "s" : "");
  }
  return H;
}
function se(s) {
  e.debug = e, e.default = e, e.coerce = a, e.disable = c, e.enable = l, e.enabled = F, e.humanize = re(), e.destroy = d, Object.keys(s).forEach((t) => {
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
    let n, r = null, v, b;
    function y(...C) {
      if (!y.enabled)
        return;
      const h = y, w = Number(/* @__PURE__ */ new Date()), j = w - (n || w);
      h.diff = j, h.prev = n, h.curr = w, n = w, C[0] = e.coerce(C[0]), typeof C[0] != "string" && C.unshift("%O");
      let S = 0;
      C[0] = C[0].replace(/%([a-zA-Z%])/g, (A, k) => {
        if (A === "%%")
          return "%";
        S++;
        const L = e.formatters[k];
        if (typeof L == "function") {
          const $ = C[S];
          A = L.call(h, $), C.splice(S, 1), S--;
        }
        return A;
      }), e.formatArgs.call(h, C), (h.log || e.log).apply(h, C);
    }
    return y.namespace = t, y.useColors = e.useColors(), y.color = e.selectColor(t), y.extend = u, y.destroy = e.destroy, Object.defineProperty(y, "enabled", {
      enumerable: !0,
      configurable: !1,
      get: () => r !== null ? r : (v !== e.namespaces && (v = e.namespaces, b = e.enabled(t)), b),
      set: (C) => {
        r = C;
      }
    }), typeof e.init == "function" && e.init(y), y;
  }
  function u(t, n) {
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
  function d() {
    console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.");
  }
  return e.enable(e.load()), e;
}
var oe = se;
(function(s, o) {
  o.formatArgs = u, o.save = l, o.load = c, o.useColors = e, o.storage = F(), o.destroy = (() => {
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
  function u(a) {
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
  function F() {
    try {
      return localStorage;
    } catch {
    }
  }
  s.exports = oe(o);
  const { formatters: g } = s.exports;
  g.j = function(a) {
    try {
      return JSON.stringify(a);
    } catch (d) {
      return "[UnexpectedJSONParseError]: " + d.message;
    }
  };
})(I, I.exports);
var ie = I.exports;
const ae = /* @__PURE__ */ ne(ie), le = ["id"], ce = /* @__PURE__ */ Z({
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
    const o = ae("wave:cmpnt:carousel"), e = s, u = x(), l = x(), c = x(0), F = G("windowWidth");
    let g, a = !1, d, t, n;
    const r = O(() => {
      let i = e.itemsToShow;
      if (e.breakpoints && e.breakpoints.length > 0) {
        const m = e.breakpoints.find((p) => p.size <= (F == null ? void 0 : F.value));
        m && (i = m.itemsToShow);
      }
      return i;
    }), v = O(() => {
      let i = [];
      const m = r.value * e.slidesArray.length + r.value;
      let p = 0, f = 0;
      for (; p <= m - 1; )
        i.push(e.slidesArray[f]), p++, f++, f === e.slidesArray.length && (f = 0);
      return i;
    }), b = O(() => Math.ceil(v.value.length / r.value)), y = O(() => `${100 / r.value}%`);
    K(() => {
      o("onMounted() - "), e.autoSlide && (document.addEventListener("visibilitychange", C), D(() => {
        h();
      }));
    }), Q(() => {
      o("onBeforeUnmount() - "), document.removeEventListener("visibilitychange", C);
    }), X(() => {
      o("onUnmounted() - "), window.cancelAnimationFrame(g);
    });
    function C() {
      o("onPageVisibilityChange() - ", document.hidden), D(() => {
        document.hidden ? j() : h();
      });
    }
    function h() {
      a = !1, d = e.transitionSpeed * 1e3, t = 0, k(), g = window.requestAnimationFrame(w);
    }
    function w(i) {
      a || (t === 0 && (t = i), n = i - t, n >= d && (t = i, k()), g = window.requestAnimationFrame(w));
    }
    function j() {
      var i, m, p, f, _;
      a = !0, window.cancelAnimationFrame(g), (i = l.value) == null || i.classList.add("carousel__disable-transition"), c.value = 0, (m = u.value) == null || m.style.setProperty("--current-slide", `${c.value}`), (p = l.value) == null || p.offsetHeight, (f = l.value) == null || f.classList.remove("carousel__disable-transition"), (_ = l.value) == null || _.offsetHeight;
    }
    function S(i) {
      var m, p, f, _;
      (m = l.value) == null || m.classList.add(i), (p = l.value) == null || p.offsetHeight, window.cancelAnimationFrame(g), (f = l.value) == null || f.classList.remove(i), (_ = l.value) == null || _.offsetHeight;
    }
    function N() {
      o("onMouseEnter() - "), e.autoSlide && e.stopOnHover && (e.stopOnHoverType === "wait" ? S("carousel__pause-transition") : S("carousel__disable-transition"));
    }
    function A() {
      o("onMouseLeave() - "), e.autoSlide && e.stopOnHover && h();
    }
    function k() {
      c.value === b.value - 1 ? $(z) : z();
    }
    function L() {
      c.value === 0 ? $(T) : T();
    }
    function $(i) {
      var m, p, f;
      (m = l.value) == null || m.classList.add("carousel__disable-transition"), i(), (p = l.value) == null || p.offsetHeight, (f = l.value) == null || f.classList.remove("carousel__disable-transition"), i();
    }
    function z() {
      var i;
      c.value = V(c.value + 1, b.value), (i = u.value) == null || i.style.setProperty("--current-slide", `${c.value}`);
    }
    function T() {
      var i;
      c.value = V(c.value - 1, b.value), (i = u.value) == null || i.style.setProperty("--current-slide", `${c.value}`);
    }
    return (i, m) => (M(), E(R, null, [
      s.autoSlide ? W("", !0) : (M(), E("button", {
        key: 0,
        type: "button",
        style: B(s.prevBtnStyle),
        class: U(`carousel__btn ${s.prevBtnClass}`),
        onClick: L
      }, [
        P(i.$slots, "prev")
      ], 6)),
      q("div", {
        class: "carousel-slides__wrapper",
        ref_key: "slidesWrapper",
        ref: u
      }, [
        q("ul", {
          class: "carousel-slides__wrapper-inner",
          ref_key: "slidesWrapperInner",
          ref: l,
          style: B({ transition: `all ${e.transitionSpeed}s ${s.timingFunction}` }),
          onMouseenter: N,
          onMouseleave: A
        }, [
          (M(!0), E(R, null, Y(v.value, (p, f) => (M(), E("li", {
            key: f,
            id: `${f + 1}`,
            style: B({ flex: `0 0 ${y.value}` }),
            class: "slide"
          }, [
            P(i.$slots, "slide", ee(te(p)))
          ], 12, le))), 128))
        ], 36)
      ], 512),
      s.autoSlide ? W("", !0) : (M(), E("button", {
        key: 1,
        type: "button",
        style: B(s.nextBtnStyle),
        class: U(`carousel__btn ${s.nextBtnClass}`),
        onClick: k
      }, [
        P(i.$slots, "next")
      ], 6))
    ], 64));
  }
});
export {
  ce as Carousel
};
