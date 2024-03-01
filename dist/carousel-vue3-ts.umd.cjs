(function(v,r){typeof exports=="object"&&typeof module<"u"?r(exports,require("vue")):typeof define=="function"&&define.amd?define(["exports","vue"],r):(v=typeof globalThis<"u"?globalThis:v||self,r(v["carousel-vue3-ts"]={},v.Vue))})(this,function(v,r){"use strict";const V="/arrow-left.svg",T="/arrow-right.svg";function I(o,i){let e=o%i;return e<0&&(e+=i),e}function W(o){return o&&o.__esModule&&Object.prototype.hasOwnProperty.call(o,"default")?o.default:o}var O={exports:{}},$,j;function q(){if(j)return $;j=1;var o=1e3,i=o*60,e=i*60,f=e*24,c=f*7,C=f*365.25;$=function(t,n){n=n||{};var s=typeof t;if(s==="string"&&t.length>0)return F(t);if(s==="number"&&isFinite(t))return n.long?l(t):w(t);throw new Error("val is not a non-empty string or a valid number. val="+JSON.stringify(t))};function F(t){if(t=String(t),!(t.length>100)){var n=/^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(t);if(n){var s=parseFloat(n[1]),y=(n[2]||"ms").toLowerCase();switch(y){case"years":case"year":case"yrs":case"yr":case"y":return s*C;case"weeks":case"week":case"w":return s*c;case"days":case"day":case"d":return s*f;case"hours":case"hour":case"hrs":case"hr":case"h":return s*e;case"minutes":case"minute":case"mins":case"min":case"m":return s*i;case"seconds":case"second":case"secs":case"sec":case"s":return s*o;case"milliseconds":case"millisecond":case"msecs":case"msec":case"ms":return s;default:return}}}}function w(t){var n=Math.abs(t);return n>=f?Math.round(t/f)+"d":n>=e?Math.round(t/e)+"h":n>=i?Math.round(t/i)+"m":n>=o?Math.round(t/o)+"s":t+"ms"}function l(t){var n=Math.abs(t);return n>=f?d(t,n,f,"day"):n>=e?d(t,n,e,"hour"):n>=i?d(t,n,i,"minute"):n>=o?d(t,n,o,"second"):t+" ms"}function d(t,n,s,y){var k=n>=s*1.5;return Math.round(t/s)+" "+y+(k?"s":"")}return $}function D(o){e.debug=e,e.default=e,e.coerce=l,e.disable=C,e.enable=c,e.enabled=F,e.humanize=q(),e.destroy=d,Object.keys(o).forEach(t=>{e[t]=o[t]}),e.names=[],e.skips=[],e.formatters={};function i(t){let n=0;for(let s=0;s<t.length;s++)n=(n<<5)-n+t.charCodeAt(s),n|=0;return e.colors[Math.abs(n)%e.colors.length]}e.selectColor=i;function e(t){let n,s=null,y,k;function h(...g){if(!h.enabled)return;const b=h,_=Number(new Date),x=_-(n||_);b.diff=x,b.prev=n,b.curr=_,n=_,g[0]=e.coerce(g[0]),typeof g[0]!="string"&&g.unshift("%O");let S=0;g[0]=g[0].replace(/%([a-zA-Z%])/g,(A,E)=>{if(A==="%%")return"%";S++;const M=e.formatters[E];if(typeof M=="function"){const L=g[S];A=M.call(b,L),g.splice(S,1),S--}return A}),e.formatArgs.call(b,g),(b.log||e.log).apply(b,g)}return h.namespace=t,h.useColors=e.useColors(),h.color=e.selectColor(t),h.extend=f,h.destroy=e.destroy,Object.defineProperty(h,"enabled",{enumerable:!0,configurable:!1,get:()=>s!==null?s:(y!==e.namespaces&&(y=e.namespaces,k=e.enabled(t)),k),set:g=>{s=g}}),typeof e.init=="function"&&e.init(h),h}function f(t,n){const s=e(this.namespace+(typeof n>"u"?":":n)+t);return s.log=this.log,s}function c(t){e.save(t),e.namespaces=t,e.names=[],e.skips=[];let n;const s=(typeof t=="string"?t:"").split(/[\s,]+/),y=s.length;for(n=0;n<y;n++)s[n]&&(t=s[n].replace(/\*/g,".*?"),t[0]==="-"?e.skips.push(new RegExp("^"+t.slice(1)+"$")):e.names.push(new RegExp("^"+t+"$")))}function C(){const t=[...e.names.map(w),...e.skips.map(w).map(n=>"-"+n)].join(",");return e.enable(""),t}function F(t){if(t[t.length-1]==="*")return!0;let n,s;for(n=0,s=e.skips.length;n<s;n++)if(e.skips[n].test(t))return!1;for(n=0,s=e.names.length;n<s;n++)if(e.names[n].test(t))return!0;return!1}function w(t){return t.toString().substring(2,t.toString().length-2).replace(/\.\*\?$/,"*")}function l(t){return t instanceof Error?t.stack||t.message:t}function d(){console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.")}return e.enable(e.load()),e}var U=D;(function(o,i){i.formatArgs=f,i.save=c,i.load=C,i.useColors=e,i.storage=F(),i.destroy=(()=>{let l=!1;return()=>{l||(l=!0,console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`."))}})(),i.colors=["#0000CC","#0000FF","#0033CC","#0033FF","#0066CC","#0066FF","#0099CC","#0099FF","#00CC00","#00CC33","#00CC66","#00CC99","#00CCCC","#00CCFF","#3300CC","#3300FF","#3333CC","#3333FF","#3366CC","#3366FF","#3399CC","#3399FF","#33CC00","#33CC33","#33CC66","#33CC99","#33CCCC","#33CCFF","#6600CC","#6600FF","#6633CC","#6633FF","#66CC00","#66CC33","#9900CC","#9900FF","#9933CC","#9933FF","#99CC00","#99CC33","#CC0000","#CC0033","#CC0066","#CC0099","#CC00CC","#CC00FF","#CC3300","#CC3333","#CC3366","#CC3399","#CC33CC","#CC33FF","#CC6600","#CC6633","#CC9900","#CC9933","#CCCC00","#CCCC33","#FF0000","#FF0033","#FF0066","#FF0099","#FF00CC","#FF00FF","#FF3300","#FF3333","#FF3366","#FF3399","#FF33CC","#FF33FF","#FF6600","#FF6633","#FF9900","#FF9933","#FFCC00","#FFCC33"];function e(){return typeof window<"u"&&window.process&&(window.process.type==="renderer"||window.process.__nwjs)?!0:typeof navigator<"u"&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/)?!1:typeof document<"u"&&document.documentElement&&document.documentElement.style&&document.documentElement.style.WebkitAppearance||typeof window<"u"&&window.console&&(window.console.firebug||window.console.exception&&window.console.table)||typeof navigator<"u"&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/)&&parseInt(RegExp.$1,10)>=31||typeof navigator<"u"&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/)}function f(l){if(l[0]=(this.useColors?"%c":"")+this.namespace+(this.useColors?" %c":" ")+l[0]+(this.useColors?"%c ":" ")+"+"+o.exports.humanize(this.diff),!this.useColors)return;const d="color: "+this.color;l.splice(1,0,d,"color: inherit");let t=0,n=0;l[0].replace(/%[a-zA-Z%]/g,s=>{s!=="%%"&&(t++,s==="%c"&&(n=t))}),l.splice(n,0,d)}i.log=console.debug||console.log||(()=>{});function c(l){try{l?i.storage.setItem("debug",l):i.storage.removeItem("debug")}catch{}}function C(){let l;try{l=i.storage.getItem("debug")}catch{}return!l&&typeof process<"u"&&"env"in process&&(l=process.env.DEBUG),l}function F(){try{return localStorage}catch{}}o.exports=U(i);const{formatters:w}=o.exports;w.j=function(l){try{return JSON.stringify(l)}catch(d){return"[UnexpectedJSONParseError]: "+d.message}}})(O,O.exports);var R=O.exports;const J=W(R),N=o=>(r.pushScopeId("data-v-daa75785"),o=o(),r.popScopeId(),o),Z={class:"carousel__container"},G=N(()=>r.createElementVNode("img",{src:V,class:"__icon",alt:"arrow left"},null,-1)),K=["id"],Q=["src"],X=N(()=>r.createElementVNode("img",{src:T,class:"__icon",alt:"arrow right"},null,-1)),Y=r.defineComponent({__name:"carousel",props:{slidesArray:{type:Array,required:!0},itemsToShow:{type:Number,default:4},transitionSpeed:{type:Number,default:5},timingFunction:{type:String,default:"linear"},stopOnHover:{type:Boolean,default:!1},stopOnHoverType:{type:String,default:"immediate",validator(o){return["immediate","wait"].includes(o)}},autoSlide:{type:Boolean,default:!1},nextBtnClass:{type:String,default:"next-btn"},prevBtnClass:{type:String,default:"prev-btn"},nextBtnStyle:{type:Object},prevBtnStyle:{type:Object},slideContainerClass:{type:String},breakpoints:{type:Array,default:null}},setup(o){const i=J("wave:cmpnt:carousel"),e=o,f=r.ref(),c=r.ref(),C=r.ref(0);let F,w=!1,l,d,t;const n=r.ref(h()),s=r.computed(()=>{let a=[];const u=n.value*e.slidesArray.length+n.value;let m=0,p=0;for(;m<=u-1;)a.push(e.slidesArray[p]),m++,p++,p===e.slidesArray.length&&(p=0);return a}),y=r.computed(()=>Math.ceil(s.value.length/n.value)),k=r.computed(()=>`${100/n.value}%`);function h(){let a=e.itemsToShow;if(e.breakpoints&&e.breakpoints.length>0){const u=e.breakpoints.find(m=>m.size<=window.innerWidth);u&&(a=u.itemsToShow)}return a}r.onMounted(()=>{n.value=h(),i("onMounted() - "),window.addEventListener("resize",()=>n.value=h()),e.autoSlide&&(document.addEventListener("visibilitychange",g),b())}),r.onBeforeUnmount(()=>{i("onBeforeUnmount() - "),document.removeEventListener("visibilitychange",g)}),r.onUnmounted(()=>{i("onUnmounted() - "),window.cancelAnimationFrame(F)});function g(){i("onPageVisibilityChange() - ",document.hidden),document.hidden?x():b()}function b(){w=!1,l=e.transitionSpeed*1e3,d=0,E(),F=window.requestAnimationFrame(_)}function _(a){w||(d===0&&(d=a),t=a-d,t>=l&&(d=a,E()),F=window.requestAnimationFrame(_))}function x(){var a,u,m,p,B;w=!0,window.cancelAnimationFrame(F),(a=c.value)==null||a.classList.add("carousel__disable-transition"),C.value=0,(u=f.value)==null||u.style.setProperty("--current-slide",`${C.value}`),(m=c.value)==null||m.offsetHeight,(p=c.value)==null||p.classList.remove("carousel__disable-transition"),(B=c.value)==null||B.offsetHeight}function S(a){var u,m,p,B;(u=c.value)==null||u.classList.add(a),(m=c.value)==null||m.offsetHeight,window.cancelAnimationFrame(F),(p=c.value)==null||p.classList.remove(a),(B=c.value)==null||B.offsetHeight}function z(){i("onMouseEnter() - "),e.autoSlide&&e.stopOnHover&&(e.stopOnHoverType==="wait"?S("carousel__pause-transition"):S("carousel__disable-transition"))}function A(){i("onMouseLeave() - "),e.autoSlide&&e.stopOnHover&&b()}function E(){C.value===y.value-1?L(H):H()}function M(){C.value===0?L(P):P()}function L(a){var u,m,p;(u=c.value)==null||u.classList.add("carousel__disable-transition"),a(),(m=c.value)==null||m.offsetHeight,(p=c.value)==null||p.classList.remove("carousel__disable-transition"),a()}function H(){var a,u;C.value=I(C.value+1,y.value),C.value<=1&&((a=c.value)==null||a.offsetHeight),(u=f.value)==null||u.style.setProperty("--current-slide",`${C.value}`)}function P(){var a,u;C.value=I(C.value-1,y.value),C.value<=1&&((a=c.value)==null||a.offsetHeight),(u=f.value)==null||u.style.setProperty("--current-slide",`${C.value}`)}return(a,u)=>(r.openBlock(),r.createElementBlock("div",Z,[o.autoSlide?r.createCommentVNode("",!0):(r.openBlock(),r.createElementBlock("button",{key:0,type:"button",style:r.normalizeStyle(o.prevBtnStyle),class:r.normalizeClass(`carousel__btn ${o.prevBtnClass}`),onClick:M},[r.renderSlot(a.$slots,"prev",{_class:["__icon"]},()=>[G],!0)],6)),r.createElementVNode("div",{class:"carousel-slides__wrapper",ref_key:"slidesWrapper",ref:f},[r.createElementVNode("ul",{class:"carousel-slides__wrapper-inner",ref_key:"slidesWrapperInner",ref:c,style:r.normalizeStyle({transition:`all ${e.transitionSpeed}s ${o.timingFunction}`}),onMouseenter:z,onMouseleave:A},[(r.openBlock(!0),r.createElementBlock(r.Fragment,null,r.renderList(s.value,(m,p)=>(r.openBlock(),r.createElementBlock("li",{key:p,id:`${p+1}`,style:r.normalizeStyle({flex:`0 0 ${k.value}`}),class:r.normalizeClass(o.slideContainerClass?`slide ${o.slideContainerClass}`:"slide")},[r.renderSlot(a.$slots,"slide",r.mergeProps(m,{_class:["__img"]}),()=>[r.createElementVNode("img",{src:m.src,class:"__img"},null,8,Q)],!0)],14,K))),128))],36)],512),o.autoSlide?r.createCommentVNode("",!0):(r.openBlock(),r.createElementBlock("button",{key:1,type:"button",style:r.normalizeStyle(o.nextBtnStyle),class:r.normalizeClass(`carousel__btn ${o.nextBtnClass}`),onClick:E},[r.renderSlot(a.$slots,"next",{_class:["__icon"]},()=>[X],!0)],6))]))}}),te="",ee=((o,i)=>{const e=o.__vccOpts||o;for(const[f,c]of i)e[f]=c;return e})(Y,[["__scopeId","data-v-daa75785"]]);v.Carousel=ee,Object.defineProperty(v,Symbol.toStringTag,{value:"Module"})});
