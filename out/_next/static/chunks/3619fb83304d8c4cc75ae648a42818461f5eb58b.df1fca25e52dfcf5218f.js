(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[4],{"3niX":function(e,t,n){"use strict";t.__esModule=!0,t.flush=function(){var e=i.cssRules();return i.flush(),e},t.default=void 0;var r,s=n("q1tI");var i=new(((r=n("SevZ"))&&r.__esModule?r:{default:r}).default),o=function(e){var t,n;function r(t){var n;return(n=e.call(this,t)||this).prevProps={},n}n=e,(t=r).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,r.dynamic=function(e){return e.map((function(e){var t=e[0],n=e[1];return i.computeId(t,n)})).join(" ")};var s=r.prototype;return s.shouldComponentUpdate=function(e){return this.props.id!==e.id||String(this.props.dynamic)!==String(e.dynamic)},s.componentWillUnmount=function(){i.remove(this.props)},s.render=function(){return this.shouldComponentUpdate(this.prevProps)&&(this.prevProps.id&&i.remove(this.prevProps),i.add(this.props),this.prevProps=this.props),null},r}(s.Component);t.default=o},"9At1":function(e,t,n){"use strict"},"9kyW":function(e,t,n){"use strict";e.exports=function(e){for(var t=5381,n=e.length;n;)t=33*t^e.charCodeAt(--n);return t>>>0}},Br1v:function(e,t,n){"use strict";var r=n("q1tI"),s=n.n(r),i=n("/MKj"),o="/Users/makoto/dev/next.js/react-redux/src/components/counter.js",u=s.a.createElement;t.a=function(){var e=function(){var e=Object(i.c)((function(e){return e.count})),t=Object(i.b)();return{count:e,increment:function(){return t({type:"INCREMENT"})},decrement:function(){return t({type:"DECREMENT"})},reset:function(){return t({type:"RESET"})}}}(),t=e.count,n=e.increment,r=e.decrement,s=e.reset;return u("div",{__self:undefined,__source:{fileName:o,lineNumber:24,columnNumber:5}},u("h1",{__self:undefined,__source:{fileName:o,lineNumber:25,columnNumber:7}},"Count: ",u("span",{__self:undefined,__source:{fileName:o,lineNumber:26,columnNumber:16}},t)),u("button",{onClick:n,__self:undefined,__source:{fileName:o,lineNumber:28,columnNumber:7}},"+1"),u("button",{onClick:r,__self:undefined,__source:{fileName:o,lineNumber:29,columnNumber:7}},"-1"),u("button",{onClick:s,__self:undefined,__source:{fileName:o,lineNumber:30,columnNumber:7}},"Reset"))}},MX0m:function(e,t,n){e.exports=n("3niX")},QSOs:function(e,t,n){"use strict";var r=n("MX0m"),s=n.n(r),i=n("q1tI"),o=n.n(i),u=n("YFqc"),c=n.n(u),l="/Users/makoto/dev/next.js/react-redux/src/components/nav.js",a=o.a.createElement;t.a=function(){return a("nav",{className:"jsx-1757602210",__self:undefined,__source:{fileName:l,lineNumber:5,columnNumber:5}},a(c.a,{href:"/",__self:undefined,__source:{fileName:l,lineNumber:6,columnNumber:7}},a("a",{className:"jsx-1757602210",__self:undefined,__source:{fileName:l,lineNumber:7,columnNumber:9}},"Index")),a(c.a,{href:"/ssg",__self:undefined,__source:{fileName:l,lineNumber:9,columnNumber:7}},a("a",{className:"jsx-1757602210",__self:undefined,__source:{fileName:l,lineNumber:10,columnNumber:9}},"SSG")),a(c.a,{href:"/ssr",__self:undefined,__source:{fileName:l,lineNumber:12,columnNumber:7}},a("a",{className:"jsx-1757602210",__self:undefined,__source:{fileName:l,lineNumber:13,columnNumber:9}},"SSR")),a(s.a,{id:"1757602210",__self:undefined},"a.jsx-1757602210{margin-right:25px;}"))}},SevZ:function(e,t,n){"use strict";t.__esModule=!0,t.default=void 0;var r=i(n("9kyW")),s=i(n("bVZc"));function i(e){return e&&e.__esModule?e:{default:e}}var o=function(){function e(e){var t=void 0===e?{}:e,n=t.styleSheet,r=void 0===n?null:n,i=t.optimizeForSpeed,o=void 0!==i&&i,u=t.isBrowser,c=void 0===u?"undefined"!==typeof window:u;this._sheet=r||new s.default({name:"styled-jsx",optimizeForSpeed:o}),this._sheet.inject(),r&&"boolean"===typeof o&&(this._sheet.setOptimizeForSpeed(o),this._optimizeForSpeed=this._sheet.isOptimizeForSpeed()),this._isBrowser=c,this._fromServer=void 0,this._indices={},this._instancesCounts={},this.computeId=this.createComputeId(),this.computeSelector=this.createComputeSelector()}var t=e.prototype;return t.add=function(e){var t=this;void 0===this._optimizeForSpeed&&(this._optimizeForSpeed=Array.isArray(e.children),this._sheet.setOptimizeForSpeed(this._optimizeForSpeed),this._optimizeForSpeed=this._sheet.isOptimizeForSpeed()),this._isBrowser&&!this._fromServer&&(this._fromServer=this.selectFromServer(),this._instancesCounts=Object.keys(this._fromServer).reduce((function(e,t){return e[t]=0,e}),{}));var n=this.getIdAndRules(e),r=n.styleId,s=n.rules;if(r in this._instancesCounts)this._instancesCounts[r]+=1;else{var i=s.map((function(e){return t._sheet.insertRule(e)})).filter((function(e){return-1!==e}));this._indices[r]=i,this._instancesCounts[r]=1}},t.remove=function(e){var t=this,n=this.getIdAndRules(e).styleId;if(function(e,t){if(!e)throw new Error("StyleSheetRegistry: "+t+".")}(n in this._instancesCounts,"styleId: `"+n+"` not found"),this._instancesCounts[n]-=1,this._instancesCounts[n]<1){var r=this._fromServer&&this._fromServer[n];r?(r.parentNode.removeChild(r),delete this._fromServer[n]):(this._indices[n].forEach((function(e){return t._sheet.deleteRule(e)})),delete this._indices[n]),delete this._instancesCounts[n]}},t.update=function(e,t){this.add(t),this.remove(e)},t.flush=function(){this._sheet.flush(),this._sheet.inject(),this._fromServer=void 0,this._indices={},this._instancesCounts={},this.computeId=this.createComputeId(),this.computeSelector=this.createComputeSelector()},t.cssRules=function(){var e=this,t=this._fromServer?Object.keys(this._fromServer).map((function(t){return[t,e._fromServer[t]]})):[],n=this._sheet.cssRules();return t.concat(Object.keys(this._indices).map((function(t){return[t,e._indices[t].map((function(e){return n[e].cssText})).join(e._optimizeForSpeed?"":"\n")]})).filter((function(e){return Boolean(e[1])})))},t.createComputeId=function(){var e={};return function(t,n){if(!n)return"jsx-"+t;var s=String(n),i=t+s;return e[i]||(e[i]="jsx-"+(0,r.default)(t+"-"+s)),e[i]}},t.createComputeSelector=function(e){void 0===e&&(e=/__jsx-style-dynamic-selector/g);var t={};return function(n,r){this._isBrowser||(r=r.replace(/\/style/gi,"\\/style"));var s=n+r;return t[s]||(t[s]=r.replace(e,n)),t[s]}},t.getIdAndRules=function(e){var t=this,n=e.children,r=e.dynamic,s=e.id;if(r){var i=this.computeId(s,r);return{styleId:i,rules:Array.isArray(n)?n.map((function(e){return t.computeSelector(i,e)})):[this.computeSelector(i,n)]}}return{styleId:this.computeId(s),rules:Array.isArray(n)?n:[n]}},t.selectFromServer=function(){return Array.prototype.slice.call(document.querySelectorAll('[id^="__jsx-"]')).reduce((function(e,t){return e[t.id.slice(2)]=t,e}),{})},e}();t.default=o},WGuU:function(e,t,n){"use strict";var r=n("q1tI");t.a=function(e,t){var n=Object(r.useRef)();Object(r.useEffect)((function(){n.current=e}),[e]),Object(r.useEffect)((function(){if(null!==t){var e=setInterval((function(){return n.current.apply(n,arguments)}),t);return function(){return clearInterval(e)}}}),[t])}},YFqc:function(e,t,n){e.exports=n("cTJO")},bVZc:function(e,t,n){"use strict";(function(e){function n(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}t.__esModule=!0,t.default=void 0;var r="undefined"!==typeof e&&e.env&&!0,s=function(e){return"[object String]"===Object.prototype.toString.call(e)},i=function(){function e(e){var t=void 0===e?{}:e,n=t.name,i=void 0===n?"stylesheet":n,u=t.optimizeForSpeed,c=void 0===u?r:u,l=t.isBrowser,a=void 0===l?"undefined"!==typeof window:l;o(s(i),"`name` must be a string"),this._name=i,this._deletedRulePlaceholder="#"+i+"-deleted-rule____{}",o("boolean"===typeof c,"`optimizeForSpeed` must be a boolean"),this._optimizeForSpeed=c,this._isBrowser=a,this._serverSheet=void 0,this._tags=[],this._injected=!1,this._rulesCount=0;var f=this._isBrowser&&document.querySelector('meta[property="csp-nonce"]');this._nonce=f?f.getAttribute("content"):null}var t,i,u,c=e.prototype;return c.setOptimizeForSpeed=function(e){o("boolean"===typeof e,"`setOptimizeForSpeed` accepts a boolean"),o(0===this._rulesCount,"optimizeForSpeed cannot be when rules have already been inserted"),this.flush(),this._optimizeForSpeed=e,this.inject()},c.isOptimizeForSpeed=function(){return this._optimizeForSpeed},c.inject=function(){var e=this;if(o(!this._injected,"sheet already injected"),this._injected=!0,this._isBrowser&&this._optimizeForSpeed)return this._tags[0]=this.makeStyleTag(this._name),this._optimizeForSpeed="insertRule"in this.getSheet(),void(this._optimizeForSpeed||(r||console.warn("StyleSheet: optimizeForSpeed mode not supported falling back to standard mode."),this.flush(),this._injected=!0));this._serverSheet={cssRules:[],insertRule:function(t,n){return"number"===typeof n?e._serverSheet.cssRules[n]={cssText:t}:e._serverSheet.cssRules.push({cssText:t}),n},deleteRule:function(t){e._serverSheet.cssRules[t]=null}}},c.getSheetForTag=function(e){if(e.sheet)return e.sheet;for(var t=0;t<document.styleSheets.length;t++)if(document.styleSheets[t].ownerNode===e)return document.styleSheets[t]},c.getSheet=function(){return this.getSheetForTag(this._tags[this._tags.length-1])},c.insertRule=function(e,t){if(o(s(e),"`insertRule` accepts only strings"),!this._isBrowser)return"number"!==typeof t&&(t=this._serverSheet.cssRules.length),this._serverSheet.insertRule(e,t),this._rulesCount++;if(this._optimizeForSpeed){var n=this.getSheet();"number"!==typeof t&&(t=n.cssRules.length);try{n.insertRule(e,t)}catch(u){return r||console.warn("StyleSheet: illegal rule: \n\n"+e+"\n\nSee https://stackoverflow.com/q/20007992 for more info"),-1}}else{var i=this._tags[t];this._tags.push(this.makeStyleTag(this._name,e,i))}return this._rulesCount++},c.replaceRule=function(e,t){if(this._optimizeForSpeed||!this._isBrowser){var n=this._isBrowser?this.getSheet():this._serverSheet;if(t.trim()||(t=this._deletedRulePlaceholder),!n.cssRules[e])return e;n.deleteRule(e);try{n.insertRule(t,e)}catch(i){r||console.warn("StyleSheet: illegal rule: \n\n"+t+"\n\nSee https://stackoverflow.com/q/20007992 for more info"),n.insertRule(this._deletedRulePlaceholder,e)}}else{var s=this._tags[e];o(s,"old rule at index `"+e+"` not found"),s.textContent=t}return e},c.deleteRule=function(e){if(this._isBrowser)if(this._optimizeForSpeed)this.replaceRule(e,"");else{var t=this._tags[e];o(t,"rule at index `"+e+"` not found"),t.parentNode.removeChild(t),this._tags[e]=null}else this._serverSheet.deleteRule(e)},c.flush=function(){this._injected=!1,this._rulesCount=0,this._isBrowser?(this._tags.forEach((function(e){return e&&e.parentNode.removeChild(e)})),this._tags=[]):this._serverSheet.cssRules=[]},c.cssRules=function(){var e=this;return this._isBrowser?this._tags.reduce((function(t,n){return n?t=t.concat(Array.prototype.map.call(e.getSheetForTag(n).cssRules,(function(t){return t.cssText===e._deletedRulePlaceholder?null:t}))):t.push(null),t}),[]):this._serverSheet.cssRules},c.makeStyleTag=function(e,t,n){t&&o(s(t),"makeStyleTag acceps only strings as second parameter");var r=document.createElement("style");this._nonce&&r.setAttribute("nonce",this._nonce),r.type="text/css",r.setAttribute("data-"+e,""),t&&r.appendChild(document.createTextNode(t));var i=document.head||document.getElementsByTagName("head")[0];return n?i.insertBefore(r,n):i.appendChild(r),r},t=e,(i=[{key:"length",get:function(){return this._rulesCount}}])&&n(t.prototype,i),u&&n(t,u),e}();function o(e,t){if(!e)throw new Error("StyleSheet: "+t+".")}t.default=i}).call(this,n("8oxB"))},cTJO:function(e,t,n){"use strict";var r=n("J4zp"),s=n("284h");t.__esModule=!0,t.default=void 0;var i,o=s(n("q1tI")),u=n("elyg"),c=n("nOHt"),l=new Map,a=window.IntersectionObserver,f={};var d=function(e,t){var n=i||(a?i=new a((function(e){e.forEach((function(e){if(l.has(e.target)){var t=l.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(i.unobserve(e.target),l.delete(e.target),t())}}))}),{rootMargin:"200px"}):void 0);return n?(n.observe(e),l.set(e,t),function(){try{n.unobserve(e)}catch(t){console.error(t)}l.delete(e)}):function(){}};function h(e,t,n,r){(0,u.isLocalURL)(t)&&(e.prefetch(t,n,r).catch((function(e){0})),f[t+"%"+n]=!0)}var p=function(e){var t=!1!==e.prefetch,n=o.default.useState(),s=r(n,2),i=s[0],l=s[1],p=(0,c.useRouter)(),m=p&&p.pathname||"/",_=o.default.useMemo((function(){var t=(0,u.resolveHref)(m,e.href,!0),n=r(t,2),s=n[0],i=n[1];return{href:s,as:e.as?(0,u.resolveHref)(m,e.as):i||s}}),[m,e.href,e.as]),v=_.href,S=_.as;o.default.useEffect((function(){if(t&&a&&i&&i.tagName&&(0,u.isLocalURL)(v)&&!f[v+"%"+S])return d(i,(function(){h(p,v,S)}))}),[t,i,v,S,p]);var y=e.children,b=e.replace,g=e.shallow,N=e.scroll;"string"===typeof y&&(y=o.default.createElement("a",null,y));var R=o.Children.only(y),j={ref:function(e){e&&l(e),R&&"object"===typeof R&&R.ref&&("function"===typeof R.ref?R.ref(e):"object"===typeof R.ref&&(R.ref.current=e))},onClick:function(e){R.props&&"function"===typeof R.props.onClick&&R.props.onClick(e),e.defaultPrevented||function(e,t,n,r,s,i,o){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&(0,u.isLocalURL)(n))&&(e.preventDefault(),null==o&&(o=r.indexOf("#")<0),t[s?"replace":"push"](n,r,{shallow:i}).then((function(e){e&&o&&(window.scrollTo(0,0),document.body.focus())})))}(e,p,v,S,b,g,N)}};return t&&(j.onMouseEnter=function(e){(0,u.isLocalURL)(v)&&(R.props&&"function"===typeof R.props.onMouseEnter&&R.props.onMouseEnter(e),h(p,v,S,{priority:!0}))}),(e.passHref||"a"===R.type&&!("href"in R.props))&&(j.href=(0,u.addBasePath)((0,u.addLocale)(S,p&&p.locale,p&&p.defaultLocale))),o.default.cloneElement(R,j)};t.default=p},"tF+0":function(e,t,n){"use strict";var r=n("MX0m"),s=n.n(r),i=n("q1tI"),o=n.n(i),u=n("/MKj"),c=o.a.createElement;t.a=function(){var e=Object(u.c)((function(e){return{lastUpdate:e.app.lastUpdate,light:e.app.light}})),t=e.lastUpdate,n=e.light;return c("div",{className:"jsx-2814028825 "+((n?"light":"")||""),__self:undefined,__source:{fileName:"/Users/makoto/dev/next.js/react-redux/src/components/clock.js",lineNumber:15,columnNumber:5}},new Date(t).toJSON().slice(11,19),c(s.a,{id:"2814028825",__self:undefined},"div.jsx-2814028825{padding:15px;display:inline-block;color:#82fa58;font:50px menlo,monaco,monospace;background-color:#000;}.light.jsx-2814028825{background-color:#999;}"))}}}]);