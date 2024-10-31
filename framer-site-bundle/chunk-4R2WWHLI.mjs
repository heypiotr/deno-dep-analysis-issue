import{N as G,Q as V,T as ve,ia as be}from"./chunk-3QXNLKEC.mjs";import{C as se,E as Q,a as ye}from"./chunk-WFOYFRYZ.mjs";import{c as R,d as ee}from"./chunk-JXOLF6V7.mjs";var me={};var Ne="default"in se?ye:se,l=typeof globalThis<"u"?globalThis:typeof self<"u"?self:ee,ue={},Y=me;(function(_,B){ue=B(Ne)})(typeof self<"u"&&self,_=>(()=>{var B={7403:(t,o,e)=>{e.d(o,{default:()=>te});var r=e(4087),i=e.n(r);let a=function(E){return new RegExp(/<[a-z][\s\S]*>/i).test(E)},n=function(E){var g=document.createElement("div");return g.innerHTML=E,g.childNodes},u=function(E,g){return Math.floor(Math.random()*(g-E+1))+E};var p="TYPE_CHARACTER",c="REMOVE_CHARACTER",v="REMOVE_ALL",f="REMOVE_LAST_VISIBLE_NODE",h="PAUSE_FOR",x="CALL_FUNCTION",A="ADD_HTML_TAG_ELEMENT",y="CHANGE_DELETE_SPEED",d="CHANGE_DELAY",m="CHANGE_CURSOR",w="PASTE_STRING",N="HTML_TAG";function S(E,g){var C=Object.keys(E);if(Object.getOwnPropertySymbols){var T=Object.getOwnPropertySymbols(E);g&&(T=T.filter(function(U){return Object.getOwnPropertyDescriptor(E,U).enumerable})),C.push.apply(C,T)}return C}function L(E){for(var g=1;g<arguments.length;g++){var C=arguments[g]!=null?arguments[g]:{};g%2?S(Object(C),!0).forEach(function(T){P(E,T,C[T])}):Object.getOwnPropertyDescriptors?Object.defineProperties(E,Object.getOwnPropertyDescriptors(C)):S(Object(C)).forEach(function(T){Object.defineProperty(E,T,Object.getOwnPropertyDescriptor(C,T))})}return E}function O(E){return function(g){if(Array.isArray(g))return j(g)}(E)||function(g){if(typeof Symbol<"u"&&g[Symbol.iterator]!=null||g["@@iterator"]!=null)return Array.from(g)}(E)||function(g,C){if(g){if(typeof g=="string")return j(g,C);var T=Object.prototype.toString.call(g).slice(8,-1);return T==="Object"&&g.constructor&&(T=g.constructor.name),T==="Map"||T==="Set"?Array.from(g):T==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(T)?j(g,C):void 0}}(E)||function(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}()}function j(E,g){(g==null||g>E.length)&&(g=E.length);for(var C=0,T=new Array(g);C<g;C++)T[C]=E[C];return T}function k(E,g){for(var C=0;C<g.length;C++){var T=g[C];T.enumerable=T.enumerable||!1,T.configurable=!0,"value"in T&&(T.writable=!0),Object.defineProperty(E,T.key,T)}}function P(E,g,C){return g in E?Object.defineProperty(E,g,{value:C,enumerable:!0,configurable:!0,writable:!0}):E[g]=C,E}let te=function(){function E(T,U){var s=this||l;if(function(b,D){if(!(b instanceof D))throw new TypeError("Cannot call a class as a function")}(this||l,E),P(this||l,"state",{cursorAnimation:null,lastFrameTime:null,pauseUntil:null,eventQueue:[],eventLoop:null,eventLoopPaused:!1,reverseCalledEvents:[],calledEvents:[],visibleNodes:[],initialOptions:null,elements:{container:null,wrapper:document.createElement("span"),cursor:document.createElement("span")}}),P(this||l,"options",{strings:null,cursor:"|",delay:"natural",pauseFor:1500,deleteSpeed:"natural",loop:!1,autoStart:!1,devMode:!1,skipAddStyles:!1,wrapperClassName:"Typewriter__wrapper",cursorClassName:"Typewriter__cursor",stringSplitter:null,onCreateTextNode:null,onRemoveNode:null}),P(this||l,"setupWrapperElement",function(){s.state.elements.container&&(s.state.elements.wrapper.className=s.options.wrapperClassName,s.state.elements.cursor.className=s.options.cursorClassName,s.state.elements.cursor.innerHTML=s.options.cursor,s.state.elements.container.innerHTML="",s.state.elements.container.appendChild(s.state.elements.wrapper),s.state.elements.container.appendChild(s.state.elements.cursor))}),P(this||l,"start",function(){return s.state.eventLoopPaused=!1,s.runEventLoop(),s}),P(this||l,"pause",function(){return s.state.eventLoopPaused=!0,s}),P(this||l,"stop",function(){return s.state.eventLoop&&((0,r.cancel)(s.state.eventLoop),s.state.eventLoop=null),s}),P(this||l,"pauseFor",function(b){return s.addEventToQueue(h,{ms:b}),s}),P(this||l,"typeOutAllStrings",function(){return typeof s.options.strings=="string"?(s.typeString(s.options.strings).pauseFor(s.options.pauseFor),s):(s.options.strings.forEach(function(b){s.typeString(b).pauseFor(s.options.pauseFor).deleteAll(s.options.deleteSpeed)}),s)}),P(this||l,"typeString",function(b){var D=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(a(b))return s.typeOutHTMLString(b,D);if(b){var F=s.options||{},M=F.stringSplitter,H=typeof M=="function"?M(b):b.split("");s.typeCharacters(H,D)}return s}),P(this||l,"pasteString",function(b){var D=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;return a(b)?s.typeOutHTMLString(b,D,!0):(b&&s.addEventToQueue(w,{character:b,node:D}),s)}),P(this||l,"typeOutHTMLString",function(b){var D=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null,F=arguments.length>2?arguments[2]:void 0,M=n(b);if(M.length>0)for(var H=0;H<M.length;H++){var I=M[H],$=I.innerHTML;I&&I.nodeType!==3?(I.innerHTML="",s.addEventToQueue(A,{node:I,parentNode:D}),F?s.pasteString($,I):s.typeString($,I)):I.textContent&&(F?s.pasteString(I.textContent,D):s.typeString(I.textContent,D))}return s}),P(this||l,"deleteAll",function(){var b=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"natural";return s.addEventToQueue(v,{speed:b}),s}),P(this||l,"changeDeleteSpeed",function(b){if(!b)throw new Error("Must provide new delete speed");return s.addEventToQueue(y,{speed:b}),s}),P(this||l,"changeDelay",function(b){if(!b)throw new Error("Must provide new delay");return s.addEventToQueue(d,{delay:b}),s}),P(this||l,"changeCursor",function(b){if(!b)throw new Error("Must provide new cursor");return s.addEventToQueue(m,{cursor:b}),s}),P(this||l,"deleteChars",function(b){if(!b)throw new Error("Must provide amount of characters to delete");for(var D=0;D<b;D++)s.addEventToQueue(c);return s}),P(this||l,"callFunction",function(b,D){if(!b||typeof b!="function")throw new Error("Callbak must be a function");return s.addEventToQueue(x,{cb:b,thisArg:D}),s}),P(this||l,"typeCharacters",function(b){var D=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!b||!Array.isArray(b))throw new Error("Characters must be an array");return b.forEach(function(F){s.addEventToQueue(p,{character:F,node:D})}),s}),P(this||l,"removeCharacters",function(b){if(!b||!Array.isArray(b))throw new Error("Characters must be an array");return b.forEach(function(){s.addEventToQueue(c)}),s}),P(this||l,"addEventToQueue",function(b,D){var F=arguments.length>2&&arguments[2]!==void 0&&arguments[2];return s.addEventToStateProperty(b,D,F,"eventQueue")}),P(this||l,"addReverseCalledEvent",function(b,D){var F=arguments.length>2&&arguments[2]!==void 0&&arguments[2],M=s.options.loop;return M?s.addEventToStateProperty(b,D,F,"reverseCalledEvents"):s}),P(this||l,"addEventToStateProperty",function(b,D){var F=arguments.length>2&&arguments[2]!==void 0&&arguments[2],M=arguments.length>3?arguments[3]:void 0,H={eventName:b,eventArgs:D||{}};return s.state[M]=F?[H].concat(O(s.state[M])):[].concat(O(s.state[M]),[H]),s}),P(this||l,"runEventLoop",function(){s.state.lastFrameTime||(s.state.lastFrameTime=Date.now());var b=Date.now(),D=b-s.state.lastFrameTime;if(!s.state.eventQueue.length){if(!s.options.loop)return;s.state.eventQueue=O(s.state.calledEvents),s.state.calledEvents=[],s.options=L({},s.state.initialOptions)}if(s.state.eventLoop=i()(s.runEventLoop),!s.state.eventLoopPaused){if(s.state.pauseUntil){if(b<s.state.pauseUntil)return;s.state.pauseUntil=null}var F,M=O(s.state.eventQueue),H=M.shift();if(!(D<=(F=H.eventName===f||H.eventName===c?s.options.deleteSpeed==="natural"?u(40,80):s.options.deleteSpeed:s.options.delay==="natural"?u(120,160):s.options.delay))){var I=H.eventName,$=H.eventArgs;switch(s.logInDevMode({currentEvent:H,state:s.state,delay:F}),I){case w:case p:var re=$.character,pe=$.node,ce=document.createTextNode(re),q=ce;s.options.onCreateTextNode&&typeof s.options.onCreateTextNode=="function"&&(q=s.options.onCreateTextNode(re,ce)),q&&(pe?pe.appendChild(q):s.state.elements.wrapper.appendChild(q)),s.state.visibleNodes=[].concat(O(s.state.visibleNodes),[{type:"TEXT_NODE",character:re,node:q}]);break;case c:M.unshift({eventName:f,eventArgs:{removingCharacterNode:!0}});break;case h:var we=H.eventArgs.ms;s.state.pauseUntil=Date.now()+parseInt(we);break;case x:var fe=H.eventArgs,Se=fe.cb,Te=fe.thisArg;Se.call(Te,{elements:s.state.elements});break;case A:var de=H.eventArgs,ne=de.node,oe=de.parentNode;oe?oe.appendChild(ne):s.state.elements.wrapper.appendChild(ne),s.state.visibleNodes=[].concat(O(s.state.visibleNodes),[{type:N,node:ne,parentNode:oe||s.state.elements.wrapper}]);break;case v:var je=s.state.visibleNodes,ae=$.speed,K=[];ae&&K.push({eventName:y,eventArgs:{speed:ae,temp:!0}});for(var he=0,Ee=je.length;he<Ee;he++)K.push({eventName:f,eventArgs:{removingCharacterNode:!1}});ae&&K.push({eventName:y,eventArgs:{speed:s.options.deleteSpeed,temp:!0}}),M.unshift.apply(M,K);break;case f:var Oe=H.eventArgs.removingCharacterNode;if(s.state.visibleNodes.length){var ie=s.state.visibleNodes.pop(),Ae=ie.type,Z=ie.node,Pe=ie.character;s.options.onRemoveNode&&typeof s.options.onRemoveNode=="function"&&s.options.onRemoveNode({node:Z,character:Pe}),Z&&Z.parentNode.removeChild(Z),Ae===N&&Oe&&M.unshift({eventName:f,eventArgs:{}})}break;case y:s.options.deleteSpeed=H.eventArgs.speed;break;case d:s.options.delay=H.eventArgs.delay;break;case m:s.options.cursor=H.eventArgs.cursor,s.state.elements.cursor.innerHTML=H.eventArgs.cursor}s.options.loop&&(H.eventName===f||H.eventArgs&&H.eventArgs.temp||(s.state.calledEvents=[].concat(O(s.state.calledEvents),[H]))),s.state.eventQueue=M,s.state.lastFrameTime=b}}}),T)if(typeof T=="string"){var le=document.querySelector(T);if(!le)throw new Error("Could not find container element");(this||l).state.elements.container=le}else(this||l).state.elements.container=T;U&&((this||l).options=L(L({},(this||l).options),U)),(this||l).state.initialOptions=L({},(this||l).options),this.init()}var g,C;return g=E,(C=[{key:"init",value:function(){var T,U;this.setupWrapperElement(),this.addEventToQueue(m,{cursor:(this||l).options.cursor},!0),this.addEventToQueue(v,null,!0),!R||R.___TYPEWRITER_JS_STYLES_ADDED___||(this||l).options.skipAddStyles||(T=".Typewriter__cursor{-webkit-animation:Typewriter-cursor 1s infinite;animation:Typewriter-cursor 1s infinite;margin-left:1px}@-webkit-keyframes Typewriter-cursor{0%{opacity:0}50%{opacity:1}100%{opacity:0}}@keyframes Typewriter-cursor{0%{opacity:0}50%{opacity:1}100%{opacity:0}}",(U=document.createElement("style")).appendChild(document.createTextNode(T)),document.head.appendChild(U),R.___TYPEWRITER_JS_STYLES_ADDED___=!0),(this||l).options.autoStart===!0&&(this||l).options.strings&&this.typeOutAllStrings().start()}},{key:"logInDevMode",value:function(T){(this||l).options.devMode&&console.log(T)}}])&&k(g.prototype,C),Object.defineProperty(g,"prototype",{writable:!1}),E}()},8552:(t,o,e)=>{var r=e(852)(e(5639),"DataView");t.exports=r},1989:(t,o,e)=>{var r=e(1789),i=e(401),a=e(7667),n=e(1327),u=e(1866);function p(c){var v=-1,f=c==null?0:c.length;for(this.clear();++v<f;){var h=c[v];this.set(h[0],h[1])}}p.prototype.clear=r,p.prototype.delete=i,p.prototype.get=a,p.prototype.has=n,p.prototype.set=u,t.exports=p},8407:(t,o,e)=>{var r=e(7040),i=e(4125),a=e(2117),n=e(7518),u=e(4705);function p(c){var v=-1,f=c==null?0:c.length;for(this.clear();++v<f;){var h=c[v];this.set(h[0],h[1])}}p.prototype.clear=r,p.prototype.delete=i,p.prototype.get=a,p.prototype.has=n,p.prototype.set=u,t.exports=p},7071:(t,o,e)=>{var r=e(852)(e(5639),"Map");t.exports=r},3369:(t,o,e)=>{var r=e(4785),i=e(1285),a=e(6e3),n=e(9916),u=e(5265);function p(c){var v=-1,f=c==null?0:c.length;for(this.clear();++v<f;){var h=c[v];this.set(h[0],h[1])}}p.prototype.clear=r,p.prototype.delete=i,p.prototype.get=a,p.prototype.has=n,p.prototype.set=u,t.exports=p},3818:(t,o,e)=>{var r=e(852)(e(5639),"Promise");t.exports=r},8525:(t,o,e)=>{var r=e(852)(e(5639),"Set");t.exports=r},8668:(t,o,e)=>{var r=e(3369),i=e(619),a=e(2385);function n(u){var p=-1,c=u==null?0:u.length;for((this||l).__data__=new r;++p<c;)this.add(u[p])}n.prototype.add=n.prototype.push=i,n.prototype.has=a,t.exports=n},6384:(t,o,e)=>{var r=e(8407),i=e(7465),a=e(3779),n=e(7599),u=e(4758),p=e(4309);function c(v){var f=(this||l).__data__=new r(v);(this||l).size=f.size}c.prototype.clear=i,c.prototype.delete=a,c.prototype.get=n,c.prototype.has=u,c.prototype.set=p,t.exports=c},2705:(t,o,e)=>{var r=e(5639).Symbol;t.exports=r},1149:(t,o,e)=>{var r=e(5639).Uint8Array;t.exports=r},577:(t,o,e)=>{var r=e(852)(e(5639),"WeakMap");t.exports=r},4963:t=>{t.exports=function(o,e){for(var r=-1,i=o==null?0:o.length,a=0,n=[];++r<i;){var u=o[r];e(u,r,o)&&(n[a++]=u)}return n}},4636:(t,o,e)=>{var r=e(2545),i=e(5694),a=e(1469),n=e(4144),u=e(5776),p=e(6719),c=Object.prototype.hasOwnProperty;t.exports=function(v,f){var h=a(v),x=!h&&i(v),A=!h&&!x&&n(v),y=!h&&!x&&!A&&p(v),d=h||x||A||y,m=d?r(v.length,String):[],w=m.length;for(var N in v)!f&&!c.call(v,N)||d&&(N=="length"||A&&(N=="offset"||N=="parent")||y&&(N=="buffer"||N=="byteLength"||N=="byteOffset")||u(N,w))||m.push(N);return m}},2488:t=>{t.exports=function(o,e){for(var r=-1,i=e.length,a=o.length;++r<i;)o[a+r]=e[r];return o}},2908:t=>{t.exports=function(o,e){for(var r=-1,i=o==null?0:o.length;++r<i;)if(e(o[r],r,o))return!0;return!1}},8470:(t,o,e)=>{var r=e(7813);t.exports=function(i,a){for(var n=i.length;n--;)if(r(i[n][0],a))return n;return-1}},8866:(t,o,e)=>{var r=e(2488),i=e(1469);t.exports=function(a,n,u){var p=n(a);return i(a)?p:r(p,u(a))}},4239:(t,o,e)=>{var r=e(2705),i=e(9607),a=e(2333),n=r?r.toStringTag:void 0;t.exports=function(u){return u==null?u===void 0?"[object Undefined]":"[object Null]":n&&n in Object(u)?i(u):a(u)}},9454:(t,o,e)=>{var r=e(4239),i=e(7005);t.exports=function(a){return i(a)&&r(a)=="[object Arguments]"}},939:(t,o,e)=>{var r=e(2492),i=e(7005);t.exports=function a(n,u,p,c,v){return n===u||(n==null||u==null||!i(n)&&!i(u)?n!=n&&u!=u:r(n,u,p,c,a,v))}},2492:(t,o,e)=>{var r=e(6384),i=e(7114),a=e(8351),n=e(6096),u=e(4160),p=e(1469),c=e(4144),v=e(6719),f="[object Arguments]",h="[object Array]",x="[object Object]",A=Object.prototype.hasOwnProperty;t.exports=function(y,d,m,w,N,S){var L=p(y),O=p(d),j=L?h:u(y),k=O?h:u(d),P=(j=j==f?x:j)==x,te=(k=k==f?x:k)==x,E=j==k;if(E&&c(y)){if(!c(d))return!1;L=!0,P=!1}if(E&&!P)return S||(S=new r),L||v(y)?i(y,d,m,w,N,S):a(y,d,j,m,w,N,S);if(!(1&m)){var g=P&&A.call(y,"__wrapped__"),C=te&&A.call(d,"__wrapped__");if(g||C){var T=g?y.value():y,U=C?d.value():d;return S||(S=new r),N(T,U,m,w,S)}}return!!E&&(S||(S=new r),n(y,d,m,w,N,S))}},8458:(t,o,e)=>{var r=e(3560),i=e(5346),a=e(3218),n=e(346),u=/^\[object .+?Constructor\]$/,p=Function.prototype,c=Object.prototype,v=p.toString,f=c.hasOwnProperty,h=RegExp("^"+v.call(f).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");t.exports=function(x){return!(!a(x)||i(x))&&(r(x)?h:u).test(n(x))}},8749:(t,o,e)=>{var r=e(4239),i=e(1780),a=e(7005),n={};n["[object Float32Array]"]=n["[object Float64Array]"]=n["[object Int8Array]"]=n["[object Int16Array]"]=n["[object Int32Array]"]=n["[object Uint8Array]"]=n["[object Uint8ClampedArray]"]=n["[object Uint16Array]"]=n["[object Uint32Array]"]=!0,n["[object Arguments]"]=n["[object Array]"]=n["[object ArrayBuffer]"]=n["[object Boolean]"]=n["[object DataView]"]=n["[object Date]"]=n["[object Error]"]=n["[object Function]"]=n["[object Map]"]=n["[object Number]"]=n["[object Object]"]=n["[object RegExp]"]=n["[object Set]"]=n["[object String]"]=n["[object WeakMap]"]=!1,t.exports=function(u){return a(u)&&i(u.length)&&!!n[r(u)]}},280:(t,o,e)=>{var r=e(5726),i=e(6916),a=Object.prototype.hasOwnProperty;t.exports=function(n){if(!r(n))return i(n);var u=[];for(var p in Object(n))a.call(n,p)&&p!="constructor"&&u.push(p);return u}},2545:t=>{t.exports=function(o,e){for(var r=-1,i=Array(o);++r<o;)i[r]=e(r);return i}},1717:t=>{t.exports=function(o){return function(e){return o(e)}}},4757:t=>{t.exports=function(o,e){return o.has(e)}},4429:(t,o,e)=>{var r=e(5639)["__core-js_shared__"];t.exports=r},7114:(t,o,e)=>{var r=e(8668),i=e(2908),a=e(4757);t.exports=function(n,u,p,c,v,f){var h=1&p,x=n.length,A=u.length;if(x!=A&&!(h&&A>x))return!1;var y=f.get(n),d=f.get(u);if(y&&d)return y==u&&d==n;var m=-1,w=!0,N=2&p?new r:void 0;for(f.set(n,u),f.set(u,n);++m<x;){var S=n[m],L=u[m];if(c)var O=h?c(L,S,m,u,n,f):c(S,L,m,n,u,f);if(O!==void 0){if(O)continue;w=!1;break}if(N){if(!i(u,function(j,k){if(!a(N,k)&&(S===j||v(S,j,p,c,f)))return N.push(k)})){w=!1;break}}else if(S!==L&&!v(S,L,p,c,f)){w=!1;break}}return f.delete(n),f.delete(u),w}},8351:(t,o,e)=>{var r=e(2705),i=e(1149),a=e(7813),n=e(7114),u=e(8776),p=e(1814),c=r?r.prototype:void 0,v=c?c.valueOf:void 0;t.exports=function(f,h,x,A,y,d,m){switch(x){case"[object DataView]":if(f.byteLength!=h.byteLength||f.byteOffset!=h.byteOffset)return!1;f=f.buffer,h=h.buffer;case"[object ArrayBuffer]":return!(f.byteLength!=h.byteLength||!d(new i(f),new i(h)));case"[object Boolean]":case"[object Date]":case"[object Number]":return a(+f,+h);case"[object Error]":return f.name==h.name&&f.message==h.message;case"[object RegExp]":case"[object String]":return f==h+"";case"[object Map]":var w=u;case"[object Set]":var N=1&A;if(w||(w=p),f.size!=h.size&&!N)return!1;var S=m.get(f);if(S)return S==h;A|=2,m.set(f,h);var L=n(w(f),w(h),A,y,d,m);return m.delete(f),L;case"[object Symbol]":if(v)return v.call(f)==v.call(h)}return!1}},6096:(t,o,e)=>{var r=e(8234),i=Object.prototype.hasOwnProperty;t.exports=function(a,n,u,p,c,v){var f=1&u,h=r(a),x=h.length;if(x!=r(n).length&&!f)return!1;for(var A=x;A--;){var y=h[A];if(!(f?y in n:i.call(n,y)))return!1}var d=v.get(a),m=v.get(n);if(d&&m)return d==n&&m==a;var w=!0;v.set(a,n),v.set(n,a);for(var N=f;++A<x;){var S=a[y=h[A]],L=n[y];if(p)var O=f?p(L,S,y,n,a,v):p(S,L,y,a,n,v);if(!(O===void 0?S===L||c(S,L,u,p,v):O)){w=!1;break}N||(N=y=="constructor")}if(w&&!N){var j=a.constructor,k=n.constructor;j==k||!("constructor"in a)||!("constructor"in n)||typeof j=="function"&&j instanceof j&&typeof k=="function"&&k instanceof k||(w=!1)}return v.delete(a),v.delete(n),w}},1957:(t,o,e)=>{var r=typeof e.g=="object"&&e.g&&e.g.Object===Object&&e.g;t.exports=r},8234:(t,o,e)=>{var r=e(8866),i=e(9551),a=e(3674);t.exports=function(n){return r(n,a,i)}},5050:(t,o,e)=>{var r=e(7019);t.exports=function(i,a){var n=i.__data__;return r(a)?n[typeof a=="string"?"string":"hash"]:n.map}},852:(t,o,e)=>{var r=e(8458),i=e(7801);t.exports=function(a,n){var u=i(a,n);return r(u)?u:void 0}},9607:(t,o,e)=>{var r=e(2705),i=Object.prototype,a=i.hasOwnProperty,n=i.toString,u=r?r.toStringTag:void 0;t.exports=function(p){var c=a.call(p,u),v=p[u];try{p[u]=void 0;var f=!0}catch{}var h=n.call(p);return f&&(c?p[u]=v:delete p[u]),h}},9551:(t,o,e)=>{var r=e(4963),i=e(479),a=Object.prototype.propertyIsEnumerable,n=Object.getOwnPropertySymbols,u=n?function(p){return p==null?[]:(p=Object(p),r(n(p),function(c){return a.call(p,c)}))}:i;t.exports=u},4160:(t,o,e)=>{var r=e(8552),i=e(7071),a=e(3818),n=e(8525),u=e(577),p=e(4239),c=e(346),v="[object Map]",f="[object Promise]",h="[object Set]",x="[object WeakMap]",A="[object DataView]",y=c(r),d=c(i),m=c(a),w=c(n),N=c(u),S=p;(r&&S(new r(new ArrayBuffer(1)))!=A||i&&S(new i)!=v||a&&S(a.resolve())!=f||n&&S(new n)!=h||u&&S(new u)!=x)&&(S=function(L){var O=p(L),j=O=="[object Object]"?L.constructor:void 0,k=j?c(j):"";if(k)switch(k){case y:return A;case d:return v;case m:return f;case w:return h;case N:return x}return O}),t.exports=S},7801:t=>{t.exports=function(o,e){return o?.[e]}},1789:(t,o,e)=>{var r=e(4536);t.exports=function(){(this||l).__data__=r?r(null):{},(this||l).size=0}},401:t=>{t.exports=function(o){var e=this.has(o)&&delete(this||l).__data__[o];return(this||l).size-=e?1:0,e}},7667:(t,o,e)=>{var r=e(4536),i=Object.prototype.hasOwnProperty;t.exports=function(a){var n=(this||l).__data__;if(r){var u=n[a];return u==="__lodash_hash_undefined__"?void 0:u}return i.call(n,a)?n[a]:void 0}},1327:(t,o,e)=>{var r=e(4536),i=Object.prototype.hasOwnProperty;t.exports=function(a){var n=(this||l).__data__;return r?n[a]!==void 0:i.call(n,a)}},1866:(t,o,e)=>{var r=e(4536);t.exports=function(i,a){var n=(this||l).__data__;return(this||l).size+=this.has(i)?0:1,n[i]=r&&a===void 0?"__lodash_hash_undefined__":a,this||l}},5776:t=>{var o=/^(?:0|[1-9]\d*)$/;t.exports=function(e,r){var i=typeof e;return!!(r=r??9007199254740991)&&(i=="number"||i!="symbol"&&o.test(e))&&e>-1&&e%1==0&&e<r}},7019:t=>{t.exports=function(o){var e=typeof o;return e=="string"||e=="number"||e=="symbol"||e=="boolean"?o!=="__proto__":o===null}},5346:(t,o,e)=>{var r,i=e(4429),a=(r=/[^.]+$/.exec(i&&i.keys&&i.keys.IE_PROTO||""))?"Symbol(src)_1."+r:"";t.exports=function(n){return!!a&&a in n}},5726:t=>{var o=Object.prototype;t.exports=function(e){var r=e&&e.constructor;return e===(typeof r=="function"&&r.prototype||o)}},7040:t=>{t.exports=function(){(this||l).__data__=[],(this||l).size=0}},4125:(t,o,e)=>{var r=e(8470),i=Array.prototype.splice;t.exports=function(a){var n=(this||l).__data__,u=r(n,a);return!(u<0||(u==n.length-1?n.pop():i.call(n,u,1),--(this||l).size,0))}},2117:(t,o,e)=>{var r=e(8470);t.exports=function(i){var a=(this||l).__data__,n=r(a,i);return n<0?void 0:a[n][1]}},7518:(t,o,e)=>{var r=e(8470);t.exports=function(i){return r((this||l).__data__,i)>-1}},4705:(t,o,e)=>{var r=e(8470);t.exports=function(i,a){var n=(this||l).__data__,u=r(n,i);return u<0?(++(this||l).size,n.push([i,a])):n[u][1]=a,this||l}},4785:(t,o,e)=>{var r=e(1989),i=e(8407),a=e(7071);t.exports=function(){(this||l).size=0,(this||l).__data__={hash:new r,map:new(a||i),string:new r}}},1285:(t,o,e)=>{var r=e(5050);t.exports=function(i){var a=r(this||l,i).delete(i);return(this||l).size-=a?1:0,a}},6e3:(t,o,e)=>{var r=e(5050);t.exports=function(i){return r(this||l,i).get(i)}},9916:(t,o,e)=>{var r=e(5050);t.exports=function(i){return r(this||l,i).has(i)}},5265:(t,o,e)=>{var r=e(5050);t.exports=function(i,a){var n=r(this||l,i),u=n.size;return n.set(i,a),(this||l).size+=n.size==u?0:1,this||l}},8776:t=>{t.exports=function(o){var e=-1,r=Array(o.size);return o.forEach(function(i,a){r[++e]=[a,i]}),r}},4536:(t,o,e)=>{var r=e(852)(Object,"create");t.exports=r},6916:(t,o,e)=>{var r=e(5569)(Object.keys,Object);t.exports=r},1167:(t,o,e)=>{t=e.nmd(t);var r=e(1957),i=o&&!o.nodeType&&o,a=i&&t&&!t.nodeType&&t,n=a&&a.exports===i&&r.process,u=function(){try{return a&&a.require&&a.require("util").types||n&&n.binding&&n.binding("util")}catch{}}();t.exports=u},2333:t=>{var o=Object.prototype.toString;t.exports=function(e){return o.call(e)}},5569:t=>{t.exports=function(o,e){return function(r){return o(e(r))}}},5639:(t,o,e)=>{var r=e(1957),i=typeof self=="object"&&self&&self.Object===Object&&self,a=r||i||Function("return this")();t.exports=a},619:t=>{t.exports=function(o){return(this||l).__data__.set(o,"__lodash_hash_undefined__"),this||l}},2385:t=>{t.exports=function(o){return(this||l).__data__.has(o)}},1814:t=>{t.exports=function(o){var e=-1,r=Array(o.size);return o.forEach(function(i){r[++e]=i}),r}},7465:(t,o,e)=>{var r=e(8407);t.exports=function(){(this||l).__data__=new r,(this||l).size=0}},3779:t=>{t.exports=function(o){var e=(this||l).__data__,r=e.delete(o);return(this||l).size=e.size,r}},7599:t=>{t.exports=function(o){return(this||l).__data__.get(o)}},4758:t=>{t.exports=function(o){return(this||l).__data__.has(o)}},4309:(t,o,e)=>{var r=e(8407),i=e(7071),a=e(3369);t.exports=function(n,u){var p=(this||l).__data__;if(p instanceof r){var c=p.__data__;if(!i||c.length<199)return c.push([n,u]),(this||l).size=++p.size,this||l;p=(this||l).__data__=new a(c)}return p.set(n,u),(this||l).size=p.size,this||l}},346:t=>{var o=Function.prototype.toString;t.exports=function(e){if(e!=null){try{return o.call(e)}catch{}try{return e+""}catch{}}return""}},7813:t=>{t.exports=function(o,e){return o===e||o!=o&&e!=e}},5694:(t,o,e)=>{var r=e(9454),i=e(7005),a=Object.prototype,n=a.hasOwnProperty,u=a.propertyIsEnumerable,p=r(function(){return arguments}())?r:function(c){return i(c)&&n.call(c,"callee")&&!u.call(c,"callee")};t.exports=p},1469:t=>{var o=Array.isArray;t.exports=o},8612:(t,o,e)=>{var r=e(3560),i=e(1780);t.exports=function(a){return a!=null&&i(a.length)&&!r(a)}},4144:(t,o,e)=>{t=e.nmd(t);var r=e(5639),i=e(5062),a=o&&!o.nodeType&&o,n=a&&t&&!t.nodeType&&t,u=n&&n.exports===a?r.Buffer:void 0,p=(u?u.isBuffer:void 0)||i;t.exports=p},8446:(t,o,e)=>{var r=e(939);t.exports=function(i,a){return r(i,a)}},3560:(t,o,e)=>{var r=e(4239),i=e(3218);t.exports=function(a){if(!i(a))return!1;var n=r(a);return n=="[object Function]"||n=="[object GeneratorFunction]"||n=="[object AsyncFunction]"||n=="[object Proxy]"}},1780:t=>{t.exports=function(o){return typeof o=="number"&&o>-1&&o%1==0&&o<=9007199254740991}},3218:t=>{t.exports=function(o){var e=typeof o;return o!=null&&(e=="object"||e=="function")}},7005:t=>{t.exports=function(o){return o!=null&&typeof o=="object"}},6719:(t,o,e)=>{var r=e(8749),i=e(1717),a=e(1167),n=a&&a.isTypedArray,u=n?i(n):r;t.exports=u},3674:(t,o,e)=>{var r=e(4636),i=e(280),a=e(8612);t.exports=function(n){return a(n)?r(n):i(n)}},479:t=>{t.exports=function(){return[]}},5062:t=>{t.exports=function(){return!1}},75:function(t){(function(){var o,e,r,i,a,n;typeof performance<"u"&&performance!==null&&performance.now?t.exports=function(){return performance.now()}:typeof Y<"u"&&Y!==null&&Y.hrtime?(t.exports=function(){return(o()-a)/1e6},e=Y.hrtime,i=(o=function(){var u;return 1e9*(u=e())[0]+u[1]})(),n=1e9*Y.uptime(),a=i-n):Date.now?(t.exports=function(){return Date.now()-r},r=Date.now()):(t.exports=function(){return new Date().getTime()-r},r=new Date().getTime())}).call(this||l)},4087:(t,o,e)=>{for(var r=e(75),i=typeof R>"u"?e.g:R,a=["moz","webkit"],n="AnimationFrame",u=i["request"+n],p=i["cancel"+n]||i["cancelRequest"+n],c=0;!u&&c<a.length;c++)u=i[a[c]+"Request"+n],p=i[a[c]+"Cancel"+n]||i[a[c]+"CancelRequest"+n];if(!u||!p){var v=0,f=0,h=[];u=function(x){if(h.length===0){var A=r(),y=Math.max(0,16.666666666666668-(A-v));v=y+A,setTimeout(function(){var d=h.slice(0);h.length=0;for(var m=0;m<d.length;m++)if(!d[m].cancelled)try{d[m].callback(v)}catch(w){setTimeout(function(){throw w},0)}},Math.round(y))}return h.push({handle:++f,callback:x,cancelled:!1}),f},p=function(x){for(var A=0;A<h.length;A++)h[A].handle===x&&(h[A].cancelled=!0)}}t.exports=function(x){return u.call(i,x)},t.exports.cancel=function(){p.apply(i,arguments)},t.exports.polyfill=function(x){x||(x=i),x.requestAnimationFrame=u,x.cancelAnimationFrame=p}},8156:t=>{t.exports=_}},X={};function W(t){var o=X[t];if(o!==void 0)return o.exports;var e=X[t]={id:t,loaded:!1,exports:{}};return B[t].call(e.exports,e,e.exports,W),e.loaded=!0,e.exports}W.n=t=>{var o=t&&t.__esModule?()=>t.default:()=>t;return W.d(o,{a:o}),o},W.d=(t,o)=>{for(var e in o)W.o(o,e)&&!W.o(t,e)&&Object.defineProperty(t,e,{enumerable:!0,get:o[e]})},W.g=function(){if(typeof globalThis=="object")return globalThis;try{return this||l||new Function("return this")()}catch{if(typeof R=="object")return R}}(),W.o=(t,o)=>Object.prototype.hasOwnProperty.call(t,o),W.nmd=t=>(t.paths=[],t.children||(t.children=[]),t);var J={};return(()=>{W.d(J,{default:()=>A});var t=W(8156),o=W.n(t),e=W(7403),r=W(8446),i=W.n(r);function a(y){return a=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(d){return typeof d}:function(d){return d&&typeof Symbol=="function"&&d.constructor===Symbol&&d!==Symbol.prototype?"symbol":typeof d},a(y)}function n(y,d){if(!(y instanceof d))throw new TypeError("Cannot call a class as a function")}function u(y,d){for(var m=0;m<d.length;m++){var w=d[m];w.enumerable=w.enumerable||!1,w.configurable=!0,"value"in w&&(w.writable=!0),Object.defineProperty(y,w.key,w)}}function p(y,d){return p=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(m,w){return m.__proto__=w,m},p(y,d)}function c(y,d){if(d&&(a(d)==="object"||typeof d=="function"))return d;if(d!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return v(y)}function v(y){if(y===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return y}function f(y){return f=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(d){return d.__proto__||Object.getPrototypeOf(d)},f(y)}function h(y,d,m){return d in y?Object.defineProperty(y,d,{value:m,enumerable:!0,configurable:!0,writable:!0}):y[d]=m,y}var x=function(y){(function(O,j){if(typeof j!="function"&&j!==null)throw new TypeError("Super expression must either be null or a function");O.prototype=Object.create(j&&j.prototype,{constructor:{value:O,writable:!0,configurable:!0}}),Object.defineProperty(O,"prototype",{writable:!1}),j&&p(O,j)})(L,y);var d,m,w,N,S=(w=L,N=function(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}(),function(){var O,j=f(w);if(N){var k=f(this||l).constructor;O=Reflect.construct(j,arguments,k)}else O=j.apply(this||l,arguments);return c(this||l,O)});function L(){var O;n(this||l,L);for(var j=arguments.length,k=new Array(j),P=0;P<j;P++)k[P]=arguments[P];return h(v(O=S.call.apply(S,[this||l].concat(k))),"state",{instance:null}),O}return d=L,(m=[{key:"componentDidMount",value:function(){var O=this||l,j=new e.default((this||l).typewriter,(this||l).props.options);this.setState({instance:j},function(){var k=O.props.onInit;k&&k(j)})}},{key:"componentDidUpdate",value:function(O){i()((this||l).props.options,O.options)||this.setState({instance:new e.default((this||l).typewriter,(this||l).props.options)})}},{key:"componentWillUnmount",value:function(){(this||l).state.instance&&(this||l).state.instance.stop()}},{key:"render",value:function(){var O=this||l,j=(this||l).props.component;return o().createElement(j,{ref:function(k){return O.typewriter=k},className:"Typewriter","data-testid":"typewriter-wrapper"})}}])&&u(d.prototype,m),Object.defineProperty(d,"prototype",{writable:!1}),L}(t.Component);x.defaultProps={component:"div"};let A=x})(),J.default})());var _e=ue,De=ue.Typewriter;var xe=_=>({width:"100%",height:"100%",position:"relative",overflow:"visible",fontSize:_.font.fontSize,fontFamily:_.font.fontFamily||"Inter",fontWeight:_.font.fontWeight,letterSpacing:_.font.letterSpacing,lineHeight:_.font.lineHeightType?_.font.lineHeight:`${_.font.lineHeightPixels}px`,textAlign:_.font.textAlign,whiteSpace:_.font.whiteSpace,color:_.color,left:`${_.font.offset}%`,margin:0,padding:0});function z(_){let B=G.current()===G.canvas,X=G.current()===G.preview,W=_.text.split(" "),J=_.split?W:_.text,t=_.split?W[0]:_.text,e={paragraph:"p",heading1:"h1",heading2:"h2",heading3:"h3"}[_.tag],r=`.${_.id} .Typewriter { font-size: ${_.font.fontSize}px; font-weight: ${_.font.fontWeight}; margin: 0; padding: 0; } .${_.id} .Typewriter__cursor { color: ${_.cursorColor} !important; }`,i=()=>Q("span",{style:xe(_),children:Q(_e,{options:{strings:J,autoStart:_.autoStart,loop:_.loop,cursor:_.cursor,pauseFor:_.pauseFor*1e3,delay:_.delayType?"natural":_.delayNumber*1e3},component:X?"span":e,onInit:n=>{n.callFunction(u=>{_.loop||_.caretVisibility||(u.elements.cursor.style.display="none")})}})}),a=be(()=>Q("span",{style:{display:"contents"},className:`${_.id}`,children:Q(i,{})}),r);return B?Q("div",{style:xe(_),children:t}):Q(a,{})}z.displayName="Typewriter";z.defaultProps={text:"Hello World",font:{fontFamily:"Inter",fontSize:32,fontWeight:600,textAlign:"center",lineHeight:1.2,lineHeightType:!0,lineHeightPixels:100,letterSpacing:0,offset:0,whiteSpace:"nowrap"},cursor:"|",delayType:!0,delayNumber:.2,pauseFor:1,loop:!0,caretVisibility:!0,split:!1,autoStart:!0,tag:"heading1",color:"#888",cursorColor:"rgba(136, 136, 136, 0.5)"};ve(z,{tag:{title:"Tag",type:V.Enum,options:["heading1","heading2","heading3","paragraph"],optionTitles:["H1","H2","H3","P"],defaultValue:z.defaultProps.tag,displaySegmentedControl:!0},text:{type:V.String,title:"Text",defaultValue:z.defaultProps.text},autoStart:{title:"Autoplay",type:V.Boolean,defaultValue:z.defaultProps.autoStart},split:{title:"Per Word",type:V.Boolean,defaultValue:z.defaultProps.split},loop:{title:"Loop",type:V.Boolean,defaultValue:z.defaultProps.loop},caretVisibility:{title:"Caret",type:V.Boolean,enabledTitle:"Show",disabledTitle:"Hide",defaultValue:z.defaultProps.caretVisibility,hidden:_=>_.loop},delayType:{title:"Delay",type:V.Boolean,enabledTitle:"Natural",disabledTitle:"Number",defaultValue:z.defaultProps.delayType},delayNumber:{title:"Delay",type:V.Number,step:.1,min:0,defaultValue:z.defaultProps.delayNumber,displayStepper:!0,hidden:_=>_.delayType},pauseFor:{title:"Pause",type:V.Number,min:0,defaultValue:z.defaultProps.pauseFor,displayStepper:!0},color:{type:V.Color,defaultValue:z.defaultProps.color},font:{type:V.Object,controls:{fontFamily:{title:"Font",type:V.String,placeholder:"Inter",defaultValue:z.defaultProps.font.fontFamily},fontSize:{title:"Size",type:V.Number,min:0,max:500,step:.5,defaultValue:z.defaultProps.font.fontSize},fontWeight:{type:V.Enum,options:[100,200,300,400,500,600,700,800,900],defaultValue:z.defaultProps.font.fontWeight,title:"Weight"},textAlign:{type:V.Enum,displaySegmentedControl:!0,title:"Align",options:["left","center","right"],optionTitles:["Left","Center","Right"],defaultValue:z.defaultProps.font.textAlign},letterSpacing:{title:"Letter",type:V.Number,defaultValue:z.defaultProps.font.letterSpacing,step:.1,displayStepper:!0},offset:{type:V.Number,title:"Offset",min:-100,max:100,displayStepper:!0,step:.25,defaultValue:z.defaultProps.font.offset,unit:"%"},whiteSpace:{type:V.Enum,title:"Space",options:["normal","nowrap","pre","pre-wrap","preline","break-spaces"],optionTitles:["Normal","No Wrap","Pre","Pre Wrap","Preline","Break Spaces"],defaultValue:z.defaultProps.font.whiteSpace},lineHeight:{type:V.Number,title:"Line",min:-500,max:500,displayStepper:!0,step:.1,defaultValue:z.defaultProps.font.lineHeight,hidden:_=>!_.lineHeightType},lineHeightPixels:{type:V.Number,title:"Line",min:-500,max:500,displayStepper:!0,step:.1,defaultValue:z.defaultProps.font.lineHeightPixels,hidden:_=>_.lineHeightType},lineHeightType:{type:V.Boolean,title:" ",enabledTitle:"em",disabledTitle:"px",defaultValue:z.defaultProps.font.lineHeightType}}},cursor:{title:"Cursor",type:V.String,defaultValue:z.defaultProps.cursor,placeholder:"Character"},cursorColor:{type:V.Color,title:" ",defaultValue:z.defaultProps.cursorColor}});export{z as a};
//# sourceMappingURL=chunk-4R2WWHLI.mjs.map