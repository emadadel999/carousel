(function(S,r){typeof exports=="object"&&typeof module<"u"?r(exports,require("vue")):typeof define=="function"&&define.amd?define(["exports","vue"],r):(S=typeof globalThis<"u"?globalThis:S||self,r(S["carousel-vue3-ts"]={},S.Vue))})(this,function(S,r){"use strict";function x(s,i){let e=s%i;return e<0&&(e+=i),e}function I(s){return s&&s.__esModule&&Object.prototype.hasOwnProperty.call(s,"default")?s.default:s}var O={exports:{}},L,z;function T(){if(z)return L;z=1;var s=1e3,i=s*60,e=i*60,f=e*24,u=f*7,d=f*365.25;L=function(t,n){n=n||{};var o=typeof t;if(o==="string"&&t.length>0)return v(t);if(o==="number"&&isFinite(t))return n.long?l(t):g(t);throw new Error("val is not a non-empty string or a valid number. val="+JSON.stringify(t))};function v(t){if(t=String(t),!(t.length>100)){var n=/^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(t);if(n){var o=parseFloat(n[1]),F=(n[2]||"ms").toLowerCase();switch(F){case"years":case"year":case"yrs":case"yr":case"y":return o*d;case"weeks":case"week":case"w":return o*u;case"days":case"day":case"d":return o*f;case"hours":case"hour":case"hrs":case"hr":case"h":return o*e;case"minutes":case"minute":case"mins":case"min":case"m":return o*i;case"seconds":case"second":case"secs":case"sec":case"s":return o*s;case"milliseconds":case"millisecond":case"msecs":case"msec":case"ms":return o;default:return}}}}function g(t){var n=Math.abs(t);return n>=f?Math.round(t/f)+"d":n>=e?Math.round(t/e)+"h":n>=i?Math.round(t/i)+"m":n>=s?Math.round(t/s)+"s":t+"ms"}function l(t){var n=Math.abs(t);return n>=f?C(t,n,f,"day"):n>=e?C(t,n,e,"hour"):n>=i?C(t,n,i,"minute"):n>=s?C(t,n,s,"second"):t+" ms"}function C(t,n,o,F){var w=n>=o*1.5;return Math.round(t/o)+" "+F+(w?"s":"")}return L}function V(s){e.debug=e,e.default=e,e.coerce=l,e.disable=d,e.enable=u,e.enabled=v,e.humanize=T(),e.destroy=C,Object.keys(s).forEach(t=>{e[t]=s[t]}),e.names=[],e.skips=[],e.formatters={};function i(t){let n=0;for(let o=0;o<t.length;o++)n=(n<<5)-n+t.charCodeAt(o),n|=0;return e.colors[Math.abs(n)%e.colors.length]}e.selectColor=i;function e(t){let n,o=null,F,w;function h(...p){if(!h.enabled)return;const b=h,k=Number(new Date),j=k-(n||k);b.diff=j,b.prev=n,b.curr=k,n=k,p[0]=e.coerce(p[0]),typeof p[0]!="string"&&p.unshift("%O");let A=0;p[0]=p[0].replace(/%([a-zA-Z%])/g,(E,B)=>{if(E==="%%")return"%";A++;const _=e.formatters[B];if(typeof _=="function"){const $=p[A];E=_.call(b,$),p.splice(A,1),A--}return E}),e.formatArgs.call(b,p),(b.log||e.log).apply(b,p)}return h.namespace=t,h.useColors=e.useColors(),h.color=e.selectColor(t),h.extend=f,h.destroy=e.destroy,Object.defineProperty(h,"enabled",{enumerable:!0,configurable:!1,get:()=>o!==null?o:(F!==e.namespaces&&(F=e.namespaces,w=e.enabled(t)),w),set:p=>{o=p}}),typeof e.init=="function"&&e.init(h),h}function f(t,n){const o=e(this.namespace+(typeof n>"u"?":":n)+t);return o.log=this.log,o}function u(t){e.save(t),e.namespaces=t,e.names=[],e.skips=[];let n;const o=(typeof t=="string"?t:"").split(/[\s,]+/),F=o.length;for(n=0;n<F;n++)o[n]&&(t=o[n].replace(/\*/g,".*?"),t[0]==="-"?e.skips.push(new RegExp("^"+t.slice(1)+"$")):e.names.push(new RegExp("^"+t+"$")))}function d(){const t=[...e.names.map(g),...e.skips.map(g).map(n=>"-"+n)].join(",");return e.enable(""),t}function v(t){if(t[t.length-1]==="*")return!0;let n,o;for(n=0,o=e.skips.length;n<o;n++)if(e.skips[n].test(t))return!1;for(n=0,o=e.names.length;n<o;n++)if(e.names[n].test(t))return!0;return!1}function g(t){return t.toString().substring(2,t.toString().length-2).replace(/\.\*\?$/,"*")}function l(t){return t instanceof Error?t.stack||t.message:t}function C(){console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.")}return e.enable(e.load()),e}var q=V;(function(s,i){i.formatArgs=f,i.save=u,i.load=d,i.useColors=e,i.storage=v(),i.destroy=(()=>{let l=!1;return()=>{l||(l=!0,console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`."))}})(),i.colors=["#0000CC","#0000FF","#0033CC","#0033FF","#0066CC","#0066FF","#0099CC","#0099FF","#00CC00","#00CC33","#00CC66","#00CC99","#00CCCC","#00CCFF","#3300CC","#3300FF","#3333CC","#3333FF","#3366CC","#3366FF","#3399CC","#3399FF","#33CC00","#33CC33","#33CC66","#33CC99","#33CCCC","#33CCFF","#6600CC","#6600FF","#6633CC","#6633FF","#66CC00","#66CC33","#9900CC","#9900FF","#9933CC","#9933FF","#99CC00","#99CC33","#CC0000","#CC0033","#CC0066","#CC0099","#CC00CC","#CC00FF","#CC3300","#CC3333","#CC3366","#CC3399","#CC33CC","#CC33FF","#CC6600","#CC6633","#CC9900","#CC9933","#CCCC00","#CCCC33","#FF0000","#FF0033","#FF0066","#FF0099","#FF00CC","#FF00FF","#FF3300","#FF3333","#FF3366","#FF3399","#FF33CC","#FF33FF","#FF6600","#FF6633","#FF9900","#FF9933","#FFCC00","#FFCC33"];function e(){return typeof window<"u"&&window.process&&(window.process.type==="renderer"||window.process.__nwjs)?!0:typeof navigator<"u"&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/)?!1:typeof document<"u"&&document.documentElement&&document.documentElement.style&&document.documentElement.style.WebkitAppearance||typeof window<"u"&&window.console&&(window.console.firebug||window.console.exception&&window.console.table)||typeof navigator<"u"&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/)&&parseInt(RegExp.$1,10)>=31||typeof navigator<"u"&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/)}function f(l){if(l[0]=(this.useColors?"%c":"")+this.namespace+(this.useColors?" %c":" ")+l[0]+(this.useColors?"%c ":" ")+"+"+s.exports.humanize(this.diff),!this.useColors)return;const C="color: "+this.color;l.splice(1,0,C,"color: inherit");let t=0,n=0;l[0].replace(/%[a-zA-Z%]/g,o=>{o!=="%%"&&(t++,o==="%c"&&(n=t))}),l.splice(n,0,C)}i.log=console.debug||console.log||(()=>{});function u(l){try{l?i.storage.setItem("debug",l):i.storage.removeItem("debug")}catch{}}function d(){let l;try{l=i.storage.getItem("debug")}catch{}return!l&&typeof process<"u"&&"env"in process&&(l=process.env.DEBUG),l}function v(){try{return localStorage}catch{}}s.exports=q(i);const{formatters:g}=s.exports;g.j=function(l){try{return JSON.stringify(l)}catch(C){return"[UnexpectedJSONParseError]: "+C.message}}})(O,O.exports);var D=O.exports;const R=I(D),U=["id"],W=r.defineComponent({__name:"carousel",props:{slidesArray:{type:Array,required:!0},itemsToShow:{type:Number,default:4},transitionSpeed:{type:Number,default:5},timingFunction:{type:String,default:"linear"},stopOnHover:{type:Boolean,default:!1},stopOnHoverType:{type:String,default:"immediate",validator(s){return["immediate","wait"].includes(s)}},autoSlide:{type:Boolean,default:!1},nextBtnClass:{type:String,default:"next-btn"},prevBtnClass:{type:String,default:"prev-btn"},nextBtnStyle:{type:Object},prevBtnStyle:{type:Object},breakpoints:{type:Array,default:null}},setup(s){const i=R("wave:cmpnt:carousel"),e=s,f=r.ref(),u=r.ref(),d=r.ref(0),v=r.inject("windowWidth");let g,l=!1,C,t,n;const o=r.computed(()=>{let a=e.itemsToShow;if(e.breakpoints&&e.breakpoints.length>0){const c=e.breakpoints.find(y=>y.size<=(v==null?void 0:v.value));c&&(a=c.itemsToShow)}return a}),F=r.computed(()=>{let a=[];const c=o.value*e.slidesArray.length+o.value;let y=0,m=0;for(;y<=c-1;)a.push(e.slidesArray[m]),y++,m++,m===e.slidesArray.length&&(m=0);return a}),w=r.computed(()=>Math.ceil(F.value.length/o.value)),h=r.computed(()=>`${100/o.value}%`);r.onMounted(()=>{i("onMounted() - "),e.autoSlide&&(document.addEventListener("visibilitychange",p),b())}),r.onBeforeUnmount(()=>{i("onBeforeUnmount() - "),document.removeEventListener("visibilitychange",p)}),r.onUnmounted(()=>{i("onUnmounted() - "),window.cancelAnimationFrame(g)});function p(){i("onPageVisibilityChange() - ",document.hidden),document.hidden?j():b()}function b(){l=!1,C=e.transitionSpeed*1e3,t=0,B(),g=window.requestAnimationFrame(k)}function k(a){l||(t===0&&(t=a),n=a-t,n>=C&&(t=a,B()),g=window.requestAnimationFrame(k))}function j(){var a,c,y,m,M;l=!0,window.cancelAnimationFrame(g),(a=u.value)==null||a.classList.add("carousel__disable-transition"),d.value=0,(c=f.value)==null||c.style.setProperty("--current-slide",`${d.value}`),(y=u.value)==null||y.offsetHeight,(m=u.value)==null||m.classList.remove("carousel__disable-transition"),(M=u.value)==null||M.offsetHeight}function A(a){var c,y,m,M;(c=u.value)==null||c.classList.add(a),(y=u.value)==null||y.offsetHeight,window.cancelAnimationFrame(g),(m=u.value)==null||m.classList.remove(a),(M=u.value)==null||M.offsetHeight}function H(){i("onMouseEnter() - "),e.autoSlide&&e.stopOnHover&&(e.stopOnHoverType==="wait"?A("carousel__pause-transition"):A("carousel__disable-transition"))}function E(){i("onMouseLeave() - "),e.autoSlide&&e.stopOnHover&&b()}function B(){console.log("currentSlide.value",d.value),console.log("numOfViews.value",w.value),d.value===w.value-1?$(P):P()}function _(){d.value===0?$(N):N()}function $(a){var c,y,m;(c=u.value)==null||c.classList.add("carousel__disable-transition"),a(),(y=u.value)==null||y.offsetHeight,(m=u.value)==null||m.classList.remove("carousel__disable-transition"),a()}function P(){var a,c;d.value=x(d.value+1,w.value),d.value<=1&&((a=u.value)==null||a.offsetHeight),(c=f.value)==null||c.style.setProperty("--current-slide",`${d.value}`)}function N(){var a,c;d.value=x(d.value-1,w.value),d.value<=1&&((a=u.value)==null||a.offsetHeight),(c=f.value)==null||c.style.setProperty("--current-slide",`${d.value}`)}return(a,c)=>(r.openBlock(),r.createElementBlock(r.Fragment,null,[s.autoSlide?r.createCommentVNode("",!0):(r.openBlock(),r.createElementBlock("button",{key:0,type:"button",style:r.normalizeStyle(s.prevBtnStyle),class:r.normalizeClass(`carousel__btn ${s.prevBtnClass}`),onClick:_},[r.renderSlot(a.$slots,"prev")],6)),r.createElementVNode("div",{class:"carousel-slides__wrapper",ref_key:"slidesWrapper",ref:f,style:r.normalizeStyle({transition:`all ${e.transitionSpeed}s ${s.timingFunction}`})},[r.createElementVNode("ul",{class:"carousel-slides__wrapper-inner",ref_key:"slidesWrapperInner",ref:u,style:r.normalizeStyle({transition:`all ${e.transitionSpeed}s ${s.timingFunction}`}),onMouseenter:H,onMouseleave:E},[(r.openBlock(!0),r.createElementBlock(r.Fragment,null,r.renderList(F.value,(y,m)=>(r.openBlock(),r.createElementBlock("li",{key:m,id:`${m+1}`,style:r.normalizeStyle({flex:`0 0 ${h.value}`}),class:"slide"},[r.renderSlot(a.$slots,"slide",r.normalizeProps(r.guardReactiveProps(y)))],12,U))),128))],36)],4),s.autoSlide?r.createCommentVNode("",!0):(r.openBlock(),r.createElementBlock("button",{key:1,type:"button",style:r.normalizeStyle(s.nextBtnStyle),class:r.normalizeClass(`carousel__btn ${s.nextBtnClass}`),onClick:B},[r.renderSlot(a.$slots,"next")],6))],64))}}),J="";S.Carousel=W,Object.defineProperty(S,Symbol.toStringTag,{value:"Module"})});
