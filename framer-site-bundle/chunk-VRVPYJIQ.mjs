import{G as Wt,H as ct,J as Pt,N as It,Q as s,T as Bt,c as G,ia as Nt,k as J,l as At,u as Et,y as jt}from"./chunk-3QXNLKEC.mjs";import{A as O,E as p,F as M,a as K,j as st,o as X,r as Rt,s as j,u as Dt,w as Lt,x as lt,z as B}from"./chunk-WFOYFRYZ.mjs";import{b as v,c as g}from"./chunk-JXOLF6V7.mjs";function ut(t){return p("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 256 256",width:t.width,height:t.height,style:{...t.style,color:t.color},children:p("path",{d:"M232.49,215.51,185,168a92.12,92.12,0,1,0-17,17l47.53,47.54a12,12,0,0,0,17-17ZM44,112a68,68,0,1,1,68,68A68.07,68.07,0,0,1,44,112Z",fill:"currentColor"})})}function Ht(t){return M("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 256 256",...t,children:[p("rect",{width:"256",height:"256",fill:"none"}),p("path",{d:"M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm37.66,130.34a8,8,0,0,1-11.32,11.32L128,139.31l-26.34,26.35a8,8,0,0,1-11.32-11.32L116.69,128,90.34,101.66a8,8,0,0,1,11.32-11.32L128,116.69l26.34-26.35a8,8,0,0,1,11.32,11.32L139.31,128Z",fill:"currentColor"})]})}function Ut(t){return M("div",{style:{position:"relative",...t.style},children:[p(J.div,{animate:{rotate:360},transition:{ease:"linear",duration:1,repeat:1/0},style:{borderRadius:100,backgroundImage:`conic-gradient(from 270deg, transparent 0%, ${t.color} 100%)`,width:"100%",height:"100%"}}),p("div",{style:{backgroundColor:t.backgroundColor,borderRadius:100,position:"absolute",top:3,left:3,bottom:3,right:3}})]})}function Q(t){this.ready=new Promise((e,n)=>{var i=g.indexedDB.open(location.origin);i.onupgradeneeded=o=>{this.db=o.target.result,this.db.createObjectStore("store")},i.onsuccess=o=>{this.db=o.target.result,e()},i.onerror=o=>{this.db=o.target.result,n(o)}})}Q.prototype.get=function(t){return this.ready.then(()=>new Promise((e,n)=>{var i=this.getStore().get(t);i.onsuccess=o=>e(o.target.result),i.onerror=n}))};Q.prototype.getStore=function(){return this.db.transaction(["store"],"readwrite").objectStore("store")};Q.prototype.set=function(t,e){return this.ready.then(()=>new Promise((n,i)=>{var o=this.getStore().put(e,t);o.onsuccess=n,o.onerror=i}))};Q.prototype.delete=function(t,e){g.indexedDB.deleteDatabase(location.origin)};async function Ft(t,e,n=new Q("cache")){let i=t,o=await n.set(i,e)}async function $t(t,e=new Q("cache")){let n=t,i=await e.get(n);return i||null}var ge=1;function dt(t){return!t||t==="default"}var Kt="searchIndexCache";function Zt(t){return dt(t)?Kt:`${Kt}-${t}`}var Qt="searchCacheMetadata";function xe(t){return dt(t)?Qt:`${Qt}-${t}`}async function Yt(t){let e=Zt(t),n=await $t(e);if(n)return n}function Xt(t,e){let n=Zt(t);Ft(n,e);let i={version:ge,timestamp:Date.now()},o=xe(t);Ft(o,i)}var Gt={"/":{version:1,title:"Example Search Result",description:"Description of search result.",keywords:"",h1:[],h2:[],h3:[],h4:[],h5:[],h6:[],p:[],url:"/example-url/",codeblock:[]},"/example-1":{version:1,title:"Publish your Site to Search",description:"Try Site Search to instantly search your Framer site content.",keywords:"",h1:[],h2:[],h3:[],h4:[],h5:[],h6:[],p:[],url:"/example-url/1/",codeblock:[]},"/example-2":{version:1,title:"Customise your Site Search",description:"Personalize everything from corner radius, to icon weight.",keywords:"",h1:[],h2:[],h3:[],h4:[],h5:[],h6:[],p:[],url:"/example-url/2/",codeblock:[]}};var N=new Uint32Array(65536),be=(t,e)=>{let n=t.length,i=e.length,o=1<<n-1,a=-1,r=0,l=n,u=n;for(;u--;)N[t.charCodeAt(u)]|=1<<u;for(u=0;u<i;u++){let c=N[e.charCodeAt(u)],m=c|r;c|=(c&a)+a^a,r|=~(c|a),a&=c,r&o&&l++,a&o&&l--,r=r<<1|1,a=a<<1|~(m|r),r&=m}for(u=n;u--;)N[t.charCodeAt(u)]=0;return l},Se=(t,e)=>{let n=e.length,i=t.length,o=[],a=[],r=Math.ceil(n/32),l=Math.ceil(i/32);for(let f=0;f<r;f++)a[f]=-1,o[f]=0;let u=0;for(;u<l-1;u++){let f=0,x=-1,S=u*32,w=Math.min(32,i)+S;for(let h=S;h<w;h++)N[t.charCodeAt(h)]|=1<<h;for(let h=0;h<n;h++){let I=N[e.charCodeAt(h)],b=a[h/32|0]>>>h&1,F=o[h/32|0]>>>h&1,k=I|f,A=((I|F)&x)+x^x|I|F,z=f|~(A|x),V=x&A;z>>>31^b&&(a[h/32|0]^=1<<h),V>>>31^F&&(o[h/32|0]^=1<<h),z=z<<1|b,V=V<<1|F,x=V|~(k|z),f=z&k}for(let h=S;h<w;h++)N[t.charCodeAt(h)]=0}let c=0,m=-1,d=u*32,y=Math.min(32,i-d)+d;for(let f=d;f<y;f++)N[t.charCodeAt(f)]|=1<<f;let T=i;for(let f=0;f<n;f++){let x=N[e.charCodeAt(f)],S=a[f/32|0]>>>f&1,w=o[f/32|0]>>>f&1,h=x|c,I=((x|w)&m)+m^m|x|w,b=c|~(I|m),F=m&I;T+=b>>>i-1&1,T-=F>>>i-1&1,b>>>31^S&&(a[f/32|0]^=1<<f),F>>>31^w&&(o[f/32|0]^=1<<f),b=b<<1|S,F=F<<1|w,m=F|~(h|b),c=b&h}for(let f=d;f<y;f++)N[t.charCodeAt(f)]=0;return T},q=(t,e)=>{if(t.length<e.length){let n=e;e=t,t=n}return e.length===0?t.length:t.length<=32?be(t,e):Se(t,e)};var pt=typeof g<"u"&&g.localStorage.getItem("__framerDebugSearch")==="true",ve=/[A-Z]{2,}|[A-Z][a-z]+|[a-z]+|[A-Z]\d*|\d+/gu;function Ce(t){return t.charAt(0).toUpperCase()+t.slice(1)}function H(t){return(t.match(ve)||[]).map(Ce).join(" ")}function Jt(t,e){let n=t.length;if(n<=e)return t;let i=t.slice(0,e);return n>e?i+"\u2026":i}function ft(t){return Object.keys(t).length===0}function qt(t){function e(...a){console.log(Date.now(),...a)}function n(a){console.time(a)}function i(a){console.timeEnd(a)}function o(){}return t?{log:e,time:n,timeEnd:i}:{log:o,time:o,timeEnd:o}}var rt='"Inter", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"';function _t(t){var e,n,i;return!((e=t.inputFont)===null||e===void 0)&&e.fontFamily?t.inputFont.fontFamily:!((n=t.titleFont)===null||n===void 0)&&n.fontFamily?t.titleFont.fontFamily:!((i=t.subtitleFont)===null||i===void 0)&&i.fontFamily?t.subtitleFont.fontFamily:rt}function U(t){return`${t}Animation`}var Z=typeof document<"u"?document:null,ht=typeof g<"u"?g:null,Te='meta[name="framer-search-index"]';function we(){let t=Z?.querySelector(Te);return t?t.getAttribute("content"):void 0}var te=()=>we()==="limit-reached";function mt(t,e){if(!e)return t;let n=`/${e}`;if(t.startsWith(n))return t.slice(n.length)}var{log:W,time:Ie,timeEnd:Fe}=qt(pt);function _e(t){try{return new URL(t),!0}catch{return!1}}function Oe(t){try{return t.split(RegExp("[\\s.,;!?\\p{P}\\p{Z}]+(?<!\\p{L}&)(?!&\\p{L})","u"))}catch{return W("Falling back to regex without lookbehind"),t.split(RegExp("[\\s.,;!?\\p{P}\\p{Z}]+","u"))}}function yt(t){let e=Oe(t).filter(n=>n.trim()&&n.length>0);return new Set(e)}function gt(t){return Array.isArray(t)?t.map(gt):t.normalize("NFD").replace(/[\u0300-\u036f]/g,"").toLowerCase()}function ke(t){let e={};for(let[n,i]of Object.entries(t)){if(typeof i=="string"){e[n]=gt(i);continue}if(Array.isArray(i)){e[n]=gt(i);continue}e[n]=i}return e}function ee(t,e,n){let i={...t};return e<i.start&&(i.start=e),n>i.end&&(i.end=n),i}function Ve(t,e,n,i){let o=0,a={title:{start:1/0,end:0},description:{start:1/0,end:0}},r=yt(t.url);if(r.has(e)&&(o+=10),n.size===1&&r.size===1&&r.values().next().value===e&&(o+=o*5),o>0){let d=t.url.split("/").length;o+=G(10-d,0,d)}let l=yt(t.title);l.has(e)&&(o+=10);let u=t.title.indexOf(e);u!==-1&&(o+=10,a.title=ee(a.title,u,u+e.length)),q(t.title,i)<=2&&(o+=o*10);for(let d of l)q(e,d)<=2&&(o+=10);let c=[...t.h1,...t.h2,...t.h3,...t.h4,...t.h5,...t.h6];for(let d of c){let y=yt(d);q(d,i)<=2&&(o+=o*10),d.startsWith(e)&&(o+=10),y.has(e)&&(o+=10),d.includes(e)&&(o+=1);for(let T of y)q(e,T)<=2&&(o+=1)}let m=t.description.indexOf(e);m!==-1&&(o+=10,a.description=ee(a.description,m,m+e.length));for(let d of t.p)d.includes(e)&&(o+=.5);for(let d of t.codeblock)q(d,i)<=2&&(o*=10),d.includes(i)&&(o+=10),d.includes(e)&&(o+=.5);return{score:o,match:a}}function Me(t,e){let n=ke(t),i=gt(e),o=yt(i),a=0;for(let r of o){let{score:l}=Ve(n,r,o,i);a+=l}return a}function ze(t,e,n){return lt(()=>{if(!e||!t)return[];let o=ht===null||ht===void 0?void 0:ht.location.pathname;Ie("query");let a=Object.values(t).map(r=>{let l=Me(r,e),u=r.h1.length&&r.h1[0],c=n?.titleType===$.Title?r.title:u||r.title;return{url:r.url,title:c,description:r.description,body:[...r.p,r.codeblock].join(" "),score:l}}).filter(r=>r.score>n.minimumScore||0).filter(r=>o?r.url!==o:!0).sort((r,l)=>l.score-r.score);return Fe("query"),a},[t,e])}function Re(t,e,n){let i={},o=e.includes(":"),a=e.split(":")[0],r=a.length>1?a:"";for(let l in t)mt(l,n).startsWith(r)&&(o&&l.length<=r.length||(i[l]=t[l]));return i}function ne(t,e){let[n,i]=O({}),[o,a]=O("loading"),r=ze(n,t,e),{activeLocale:l}=ct(),u=l?.id;function c(m,d={ignoreScope:!1}){let y=m;e.urlScope&&!d.ignoreScope&&(y=Re(m,e.urlScope,l?.slug),W("Using URL scope",e.urlScope)),i(y)}return j(()=>{async function m(){a("loading");let d=Z===null||Z===void 0?void 0:Z.querySelector('meta[name="framer-search-index"]');if(!d){a("no-meta-tag-found"),c(Gt,{ignoreScope:!0}),W("No meta tag found");return}let y=await Yt(u),T=d.getAttribute("content"),f=T==="limit-reached";if(f&&W("Page limit for plan exceeded"),y&&!f&&(c(y),a("loading-with-cache"),W("Using cached index")),!T||!_e(T)){W("Meta tag exists but URL is not valid yet"),y?W("Continue using cache"):(a("pending-index-generation"),W("No cache to use, page reload required to check for meta tag"));return}let x=De(T,u),S=await fetch(x);if(!S.ok)throw new Error(S.statusText);let w=await S.json();c(w),Xt(u,w),a("success"),W("Using downloaded index")}m().catch(d=>{a("error"),W("Failed to load search index",d)})},[u]),W({status:o,results:r}),{results:r,status:o}}function De(t,e){return dt(e)?t:t.replace(".json",`-${e}.json`)}var P;(function(t){var e=t.isTouch=()=>"ontouchstart"in g||v.maxTouchPoints>0,n=t.isChrome=()=>v.userAgent.toLowerCase().includes("chrome/"),i=t.isWebKit=()=>v.userAgent.toLowerCase().includes("applewebkit/"),o=t.isSafari=()=>i()&&!n(),a=t.isSafariDesktop=()=>o()&&!e(),r=t.isWindows=()=>/Win/.test(v.platform),l=t.isMacOS=()=>/Mac/.test(v.platform)})(P||(P={}));var oe=(t,e)=>{let n=B(null);return X(i=>{if(!P.isSafari())return t(i);let o=e||n,{clientX:a,clientY:r}=i,l=o.current;if(o.current={x:a,y:r},!!l&&(l.x!==a||l.y!==r))return t(i)},[e,t])};function ie(t,e,{offsetTop:n,offsetBottom:i}){let o=t.getBoundingClientRect(),a=e.getBoundingClientRect();if(o.top<a.top){let r=a.top-o.top;e.scrollTop=e.scrollTop-r-n}else if(o.bottom>a.bottom){let r=a.top-o.top,l=e.scrollTop-r-n,u=o.bottom-a.bottom,c=e.scrollTop+u+i;e.scrollTop=Math.min(l,c)}}var Le=120,Ae=496,Ot=.6;function Ee({theme:t,type:e,onClick:n,text:i}){let a=e==="icon"?p(Ht,{style:{color:t.inputIconColor,width:t.inputIconSize,height:t.inputIconSize}}):i;return p("div",{style:{flexShrink:0,fontSize:t&&t.titleFont&&t.titleFont.fontSize?t.titleFont.fontSize:15},children:p("button",{className:"__framer-search-clear-button",onClick:n,style:{fontFamily:"inherit",border:"none",background:"none",cursor:"pointer",display:"flex",textTransform:"uppercase",color:t.inputIconColor,fontSize:"0.75em",padding:0},children:a})})}function je({theme:t,type:e}){let n={background:t.foregroundColor,height:1,flexShrink:0,opacity:.05};return e==="contained"&&t&&(n.marginLeft=t.horizontalSpacing,n.marginRight=t.horizontalSpacing),p("div",{style:n})}var We=st(function(e,n){let{value:i="",status:o,autofocus:a,theme:r,placeholder:l,iconType:u,clearButtonType:c,onChange:m}=e,[d,y]=O(i),[T,f]=O(!1),x=B();Dt(n,()=>x.current),K.useLayoutEffect(()=>()=>{let k=x.current;!k||k!==document.activeElement||k.blur()},[]);let S=()=>{x.current&&x.current.focus()},w=()=>{y("")};j(()=>{m(d)},[d]);let h=d.length>0,I=d.length>0&&c&&c!=="none",b=Math.floor(r?r.horizontalSpacing*Ot:0),F=u==="custom"&&r.inputIconImage?p("img",{alt:"icon alongside the Site Search input",src:r.inputIconImage.src,width:r.inputIconSize,height:r.inputIconSize}):p(ut,{color:r.inputIconColor,width:r.inputIconSize,height:r.inputIconSize});return M("div",{role:"search",style:{...Pe,fontFamily:_t(r),paddingLeft:r&&r.horizontalSpacing,paddingRight:r&&r.horizontalSpacing,gap:12,paddingTop:b,paddingBottom:b,touchAction:"none"},onClick:S,children:[p("div",{style:{flexShrink:0,display:"flex"},children:o==="loading"&&d?p(Ut,{color:r.inputIconColor,backgroundColor:r.backgroundColor,style:{height:r&&r.inputIconSize,width:r&&r.inputIconSize}}):F}),p("input",{ref:x,spellCheck:!1,autoFocus:a,style:{...Be,WebkitTapHighlightColor:"rgba(0,0,0,0)",color:r.foregroundColor,lineHeight:"2em",verticalAlign:"baseline",...r.titleFont,...r.inputFont,fontSize:r.inputFontSize,"--framer-search-placeholder-color":r.placeholderColor},onFocus:()=>{let k=document.documentElement.scrollTop;document.documentElement.scrollTop=k},placeholder:l,value:d,onChange:()=>y(x.current.value)}),I&&p(Ee,{theme:r,type:e.clearButtonType,text:e.clearButtonText,onClick:w})]})}),Pe={display:"inline-flex",alignItems:"center",flexShrink:0},Be={outline:"none",border:"none",background:"transparent",fontWeight:500,height:"2em",padding:0,width:"100%"},Ne=K.memo(K.forwardRef(function(e,n){let{index:i,result:o,prevMousePositionRef:a,type:r="contained",subtitleType:l="path",selected:u=!1,theme:c,localeSlug:m,style:d,onMouseMove:y,onPointerDown:T,onNavigateTo:f}=e,{url:x,title:S,score:w}=o,h=lt(()=>mt(x,m),[x,m]),I=oe(V=>y(V,i),a),b=r==="contained",F=b?G(0,1/0,c.borderRadius-c.spacing):0,k=l==="path"?h:Jt(o.description,Le),A=V=>{V.preventDefault(),f(o.url)},z=V=>{V.preventDefault()};return p("a",{ref:n,style:{textDecoration:"none"},href:o.url,onClick:A,onMouseMove:I,onMouseDown:z,onPointerDown:V=>T(V,i),children:M("li",{style:{...Ze,...d,paddingTop:b?12:16,paddingBottom:b?12:16,color:c.foregroundColor,position:"relative",paddingLeft:c&&c.horizontalSpacing,paddingRight:c&&c.horizontalSpacing},children:[p("div",{style:{backgroundColor:c.foregroundColor,position:"absolute",opacity:u?.06:0,borderRadius:F,left:c&&b?c.spacing:0,right:c&&b?c.spacing:0,top:0,bottom:0}}),M("div",{style:{display:"flex",flexDirection:"column",overflow:"hidden",gap:4},children:[p("h3",{style:{...le,...c.titleFont,lineHeight:"1.4em"},children:S}),M("p",{style:{margin:0,color:c.subtitleColor,...c.subtitleFont,whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis",lineHeight:"1.4em"},children:[pt?w:""," ",k]})]})]},o.url)})}));function He({onClick:t}){return p("div",{style:{width:"100%",flexBasis:"20vh"},onClick:t})}var re={display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"flex-start",gap:15,overflow:"visible"};function Ue({layoutType:t,theme:e,onKeyDown:n,onDismiss:i,children:o,modalOptions:a}){let r=Je(t,e),l={...re,...r,willChange:"transform",marginTop:t==="FixedTop"?e.offsetTop:0,height:t==="Sidebar"?"100%":"auto",maxHeight:t==="QuickMenu"?"100%":"none",justifyContent:t==="Sidebar"?"flex-end":"flex-start",flexDirection:t==="Sidebar"?"column-reverse":"column"},u={...re,...r,height:t==="Sidebar"?"100%":"auto",maxHeight:t==="QuickMenu"?"100%":"none",gap:t==="Sidebar"?0:e.gapBetweenStatusAndSearch,backgroundColor:t==="Sidebar"?e.backgroundColor:"transparent",justifyContent:t==="Sidebar"?"flex-end":"flex-start",flexDirection:t==="Sidebar"?"column-reverse":"column",originX:.5,originY:.5};function c(){switch(t){case"FixedTop":{let d=U("FixedTop"),y=a?a[d]:void 0;return y||{y:-10,opacity:.2,transition:{duration:P.isTouch()?0:.15}}}case"QuickMenu":{let d=U("QuickMenu"),y=a?a[d]:void 0;return y||{scale:.95,opacity:0,y:0,x:0,rotate:0,transition:{type:"spring",stiffness:600,damping:40}}}case"Sidebar":{let d=U("Sidebar"),y=a?a[d]:void 0;return y||{x:-10,opacity:0,transition:{duration:.15}}}}}let m=c();return M("div",{style:l,onKeyDown:n,onClick:d=>d.stopPropagation(),children:[t==="QuickMenu"&&p(He,{onClick:i}),p(J.div,{initial:m,animate:{opacity:1,scale:1,x:0,y:0,rotate:0},transition:m?m.transition:void 0,exit:{opacity:0,transition:{duration:0}},style:u,children:o})]})}function $e({layoutType:t,theme:e,children:n,heightIsStatic:i,heightTransition:o,heightDeps:a}){let r={willChange:"transform",backgroundColor:e.backgroundColor,color:e.foregroundColor,borderRadius:t==="QuickMenu"?e.borderRadius:0,width:"100%",display:"flex",flexDirection:"column",overflow:"hidden",boxShadow:t!=="Sidebar"?e.shadow:void 0,maxHeight:t==="QuickMenu"?`min(${Ae}px, calc(100vh - 30px))`:void 0},[l,u]=Et();return Lt(()=>{if(t!=="QuickMenu"||i)return;let c=l.current.offsetHeight;l.current.style.height="auto";let m=l.current.offsetHeight;l.current.style.height=c+"px",u(l.current,{height:[c,m]},o)},a),p("div",{ref:l,role:"dialog",className:t==="FixedTop"?"__framer-max-height-80dvh":void 0,style:r,children:n})}var Ke=K.forwardRef(function({theme:e,children:n},i){let o=P.isTouch(),[a,r]=K.useState(!0);return K.useEffect(()=>{if(!o)return;let l=i.current;l&&r(l.scrollHeight>l.clientHeight)}),p("div",{ref:i,style:{width:`calc(100% + ${e.scrollBarWidth}px)`,overflowY:"scroll",overflowX:"hidden",overscrollBehavior:"contain",touchAction:a?void 0:"none",marginTop:-1},children:n})}),ae={backgroundColor:"#B5B5B5",color:"#FFF",boxShadow:"0px 20px 40px 0px rgba(0, 0, 0, 0.25)",fontFamily:"inherit",textAlign:"center",fontSize:13,padding:"8px 0"};function Qe({status:t,layoutType:e,theme:n}){let i=Math.floor(n?n.horizontalSpacing*Ot:0),o={...ae,userSelect:"none",fontFamily:_t(n),paddingLeft:n&&n.horizontalSpacing,paddingRight:n&&n.horizontalSpacing,fontWeight:500,lineHeight:`calc(${n.inputFontSize} * 2)`,paddingTop:i,paddingBottom:i,...n.titleFont,zIndex:n.zIndex+1,maxWidth:e==="FixedTop"?"none":n.width,width:e==="FixedTop"?`calc(100% - ${i*2}px`:"100%",boxShadow:e!=="Sidebar"&&ae.boxShadow,borderRadius:e!=="Sidebar"&&n.borderRadius},a=e==="FixedTop"?"Preview Mode":"Preview Mode. Publish your Site to Search.";return t==="no-meta-tag-found"?p("div",{style:o,children:a}):t==="pending-index-generation"?p("div",{style:o,children:"Site is being indexed"}):null}var le={textOverflow:"ellipsis",maxWidth:"100%",overflow:"hidden",fontWeight:500,whiteSpace:"nowrap",flex:1,margin:0},Ze={padding:"16px 20px",listStyle:"none",fontWeight:500},Ye={left:0,width:500},Xe={top:0,width:"100%"},Ge={width:500};function Je(t,e){switch(t){case"Sidebar":return{...Ye,width:e.width};case"FixedTop":return Xe;case"QuickMenu":return{...Ge,width:e.width}}}var Y;(function(t){t.Icon="icon",t.Text="text",t.None="none"})(Y||(Y={}));var tt;(function(t){t.None="none",t.FullWidth="fullWidth",t.Contained="contained"})(tt||(tt={}));var $;(function(t){t.H1="h1",t.Title="title"})($||($={}));var et;(function(t){t.Description="description",t.Path="path"})(et||(et={}));var nt;(function(t){t.FullWidth="fullWidth",t.Contained="contained"})(nt||(nt={}));var C;(function(t){t.Sidebar="Sidebar",t.FixedTop="FixedTop",t.QuickMenu="QuickMenu"})(C||(C={}));var se;(function(t){t.Icon="icon",t.Text="text"})(se||(se={}));var E;(function(t){t.Default="default",t.Custom="custom"})(E||(E={}));function ce(t){let{layoutType:e,theme:n,urlScope:i,inputOptions:o,backdropOptions:a,modalOptions:r,resultOptions:l,onDismiss:u}=t,{activeLocale:c}=ct(),m=c?.id,d=c?.slug,y=B(),T=B(),f=B(),[x,S]=O({index:0,scroll:!0}),w=B(null),[h,I]=O(P.isTouch),[b,F]=O(""),k=Rt(b),{results:A,status:z}=ne(k,{minimumScore:0,urlScope:i,titleType:l.titleType}),V=A[x.index],Mt=Math.floor(n?n.horizontalSpacing*Ot:0);j(()=>{S({index:0,scroll:!0})},[k]);let fe=X((_,R)=>{_.pointerType==="touch"&&(I(!0),S({index:R,scroll:!1}))},[]),he=X((_,R)=>{S(D=>D.index===R?D:{index:R,scroll:!1})},[]),ot=Wt(),zt=X(async _=>{if(z!=="no-meta-tag-found")try{var R,D,at,Ct;let{routeId:Tt,pathVariables:ye}=Pt(ot.routes,_),wt=(R=ot.getRoute)===null||R===void 0?void 0:R.call(ot,Tt);u(),await(wt==null||(at=wt.page)===null||at===void 0||(D=at.preload)===null||D===void 0?void 0:D.call(at)),(Ct=ot.navigate)===null||Ct===void 0||Ct.call(ot,Tt,null,ye,!1)}catch{g.location.href=_}},[z]),me=_=>{let R=A.length-1;switch(_.code){case"ArrowUp":if(_.preventDefault(),h){I(!1);break}S(D=>({index:G(0,R,D.index-1),scroll:!0}));break;case"ArrowDown":if(_.preventDefault(),h){I(!1);break}S(D=>({index:G(0,R,D.index+1),scroll:!0}));break;case"Escape":break;case"Enter":V&&zt(V.url);break;default:_.stopPropagation()}},xt=A.length===0&&k.length>1&&z!=="loading",bt=!!((k.length>0&&A.length>0||xt)&&z!=="loading"&&t.inputOptions&&t.inputOptions.dividerType!=="none"),it=!!(t.resultOptions&&t.resultOptions.itemType==="contained"),St=it?n.spacing:10,vt=bt&&it?St+n.gapBetweenResults*2:0;return j(()=>{if(!x.scroll)return;let _=T.current;_&&ie(_,f.current,{offsetTop:bt&&it?vt:0,offsetBottom:it?St:0})},[x]),M(Ue,{layoutType:e,modalOptions:r,theme:n,onKeyDown:me,onDismiss:u,children:[M($e,{layoutType:e,theme:n,heightIsStatic:r.heightIsStatic,heightTransition:r.heightTransition,heightDeps:[A.length,xt],children:[p(We,{autofocus:!0,ref:y,onChange:F,value:b,theme:n,status:z,iconType:o.iconOptions.iconType,placeholder:o.placeholderOptions.placeholderText,clearButtonType:o?o.clearButtonType:void 0,clearButtonText:o.clearButtonText}),bt&&p(je,{theme:n,type:o.dividerType}),p(Ke,{ref:f,theme:n,children:M("ul",{"aria-live":"polite",style:{display:"flex",flexDirection:"column",width:`calc(100% - ${n.scrollBarWidth}px)`,padding:0,paddingTop:vt,paddingBottom:A.length&&it?St:0,gap:n.gapBetweenResults,margin:0},children:[A.map((_,R)=>{let D=R===x.index;return p(Ne,{ref:D?T:null,index:R,result:_,prevMousePositionRef:w,selected:!h&&D,type:t.resultOptions.itemType,subtitleType:t.resultOptions.subtitleOptions.subtitleType,theme:n,localeSlug:d,onMouseMove:he,onPointerDown:fe,onNavigateTo:zt},_.url)}),xt&&p("li",{style:{paddingTop:Mt-vt,paddingBottom:Mt,lineHeight:"2em",paddingLeft:n&&n.horizontalSpacing,paddingRight:n&&n.horizontalSpacing,height:"100%"},children:p("h3",{style:{...le,textAlign:"center",lineHeight:`calc(${n.inputFontSize} * 2)`,color:n.subtitleColor,...n.titleFont},children:"No results"})})]})})]}),p(Qe,{status:z,layoutType:e,theme:n})]})}function ue(){return typeof g>"u"?{width:0,height:0}:{width:g.innerWidth,height:g.innerHeight}}function de(t){let[e,n]=O(()=>t(ue()));return j(()=>{let i=()=>n(t(ue()));return g.addEventListener("resize",i),()=>{g.removeEventListener("resize",i)}},[]),e}var pe;(function(t){t.icon="Icon",t.input="Input"})(pe||(pe={}));function qe(t,e="none"){if(!t)return e;let{x:n,y:i,blur:o,color:a,spread:r}=t;return`${n}px ${i}px ${o}px ${r}px ${a}`}var tn=st(function(e,n){let{layoutType:i,theme:o,onDismiss:a}=e;return j(()=>{let r=u=>{u.code==="Escape"&&(u.stopPropagation(),a())},l=u=>{u.pointerType!=="touch"||u.target instanceof Element&&u.target.closest("[role=search]")||document.activeElement instanceof HTMLInputElement&&document.activeElement.blur()};return g.addEventListener("keydown",r),g.addEventListener("pointerdown",l,{capture:!0}),document.body.classList.add(kt),()=>{g.removeEventListener("keydown",r),g.removeEventListener("pointerdown",l,{capture:!0}),document.body.classList.remove(kt)}},[]),jt(M("div",{ref:n,className:"__framer-search-modal-container",role:"presentation",style:{...en,zIndex:e.backdropOptions.zIndex,justifyContent:i===C.Sidebar?"flex-start":"center"},onClick:a,children:[p(J.div,{role:"presentation",initial:{opacity:0},animate:{opacity:1},exit:{opacity:0,transition:{duration:0}},transition:o.overlayTransition,style:{top:0,left:0,right:0,bottom:0,width:"100%",height:"100%",boxSizing:"border-box",position:"absolute",touchAction:"none",backgroundColor:e.backdropOptions.backgroundColor}}),p(ce,{urlScope:e.urlScope,layoutType:i,inputOptions:e.inputOptions,resultOptions:e.resultOptions,modalOptions:e.modalOptions,backdropOptions:e.backdropOptions,theme:e.theme,onDismiss:a})]}),document.body)}),en={width:"100%",boxSizing:"border-box",willChange:"transform",position:"fixed",display:"flex",alignItems:"flex-start",top:0,left:0,right:0,bottom:0},nn={height:"100%",display:"flex",borderRadius:10,cursor:"inherit",overflow:"hidden"},kt="__framer-overflow-hidden",Vt=Nt(function(e){var n,i,o,a,r;let l=B(null),[u,c]=O(!1),[m,d]=O(!1),[y,T]=O(!1),[f]=O(()=>It.current()===It.canvas);j(()=>{d(te()),T(P.isSafari()&&P.isTouch())},[]);let x=!((i=e.inputOptions)===null||i===void 0||(n=i.inputFont)===null||n===void 0)&&n.fontSize?e.inputOptions.inputFont.fontSize:"16px",S=y?`max(16px, ${x})`:x,w=de(b=>b.width<e.modalOptions.width+10?C.FixedTop:e.modalOptions.layoutType||e.layoutType),h={subtitleColor:e.resultOptions.subtitleOptions.subtitleColor,backgroundColor:e.modalOptions.backgroundColor,foregroundColor:e.resultOptions.titleColor,placeholderColor:e.inputOptions.placeholderOptions.placeholderColor,titleFont:!((o=e.resultOptions)===null||o===void 0)&&o.titleFont&&!ft(e.resultOptions.titleFont)?e.resultOptions.titleFont:{fontSize:14,fontFamily:rt,fontWeight:500},subtitleFont:!((a=e.resultOptions.subtitleOptions)===null||a===void 0)&&a.subtitleFont&&!ft(e.resultOptions.subtitleOptions.subtitleFont)?e.resultOptions.subtitleOptions.subtitleFont:{fontSize:12,fontFamily:rt,fontWeight:500},inputFont:!((r=e.inputOptions)===null||r===void 0)&&r.inputFont&&!ft(e.inputOptions.inputFont)?e.inputOptions.inputFont:{fontSize:16,fontFamily:rt,fontWeight:500},inputFontSize:S,width:e.modalOptions.width,offsetTop:e.modalOptions.top,borderRadius:e.modalOptions.borderRadius,shadow:qe(e.modalOptions.shadow),entryIconColor:e.iconColor,entryIconSize:e.iconSize,entryIconImage:e.iconImage,inputIconSize:e.inputOptions.iconOptions.iconSize,inputIconColor:e.inputOptions.iconOptions.iconColor,inputIconImage:e.inputOptions.iconOptions.iconImage,gapBetweenStatusAndSearch:16,gapBetweenResults:1,scrollBarWidth:20,margin:10,spacing:8,zIndex:e.backdropOptions.zIndex,horizontalSpacing:20,overlayTransition:e.backdropOptions.transition},I=b=>{b.preventDefault(),b.stopPropagation(),!m&&c(!0)};return M("div",{style:{...nn,...e.style,pointerEvents:m?"none":"auto",opacity:m?.4:1},children:[p("button",{"aria-label":"Search Icon",style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"none",cursor:"inherit",color:"inherit",border:"none",outline:"inherit",padding:0},onClick:I,children:e.iconType===E.Custom&&h.entryIconImage?p("img",{alt:"icon entry point for Site Search",src:h.entryIconImage.src,width:h.entryIconSize,height:h.entryIconSize}):p(ut,{color:h.entryIconColor,width:h.entryIconSize,height:h.entryIconSize})}),p(At,{children:u&&!f&&p(tn,{ref:l,layoutType:w,urlScope:e.urlScope,inputOptions:e.inputOptions,resultOptions:e.resultOptions,backdropOptions:e.backdropOptions,modalOptions:e.modalOptions,theme:h,onDismiss:()=>c(!1)})})]})},[`
        @keyframes __framer-blink-input {
            0% { opacity: 0; }
            100% { opacity: 1; }
        }

        .__framer-search-modal-container input:focus {
            animation: __framer-blink-input 0.01s;
        }
        `,`
         .__framer-search-modal-container input::placeholder, 
         .__framer-search-modal-container input::-webkit-input-placeholder { 
            color: var(--framer-search-placeholder-color, #999999);
            opacity: 1;
        }
        `,`
        .__framer-search-modal-container {
            height: 100vh;
            height: 100dvh;
        }
        .__framer-search-modal-container .__framer-max-height-80dvh {
            max-height: 80vh;
            max-height: 80dvh;
        }
        `,`
        body.${kt} {
            overflow: hidden;
        }`,`
        button.__framer-search-clear-button {
            position: relative;
        }
        button.__framer-search-clear-button::after {
            content: "";
            position: absolute;
            top: -10px;
            right: -10px;
            bottom: -10px;
            left: -10px;
        }`]),po=Vt;Bt(Vt,{urlScope:{title:"Scope",type:s.PageScope},iconType:{title:"Icon",type:s.Enum,options:Object.values(E),optionTitles:Object.values(E).map(H),displaySegmentedControl:!0},iconColor:{title:"Color",type:s.Color,defaultValue:"#333",hidden:t=>t.iconType===E.Custom},iconImage:{title:"File",type:s.ResponsiveImage,allowedFileTypes:["jpg","png","svg"],hidden:t=>t.iconType===E.Default},iconSize:{title:"Size",type:s.Number,displayStepper:!0,defaultValue:24},inputOptions:{title:"Input",type:s.Object,buttonTitle:"Icon, Styles",controls:{iconOptions:{title:"Icon",type:s.Object,buttonTitle:"Color, Size",controls:{iconType:{title:"Icon",type:s.Enum,options:Object.values(E),optionTitles:Object.values(E).map(H),displaySegmentedControl:!0},iconColor:{title:"Color",type:s.Color,defaultValue:"rgba(0, 0, 0, 0.45)",hidden:({iconType:t})=>t===E.Custom},iconImage:{title:"File",type:s.ResponsiveImage,allowedFileTypes:["jpg","png","svg"],hidden:({iconType:t})=>t===E.Default},iconSize:{title:"Icon Size",type:s.Number,displayStepper:!0,defaultValue:18,min:0,max:100}}},inputFont:{title:"Font",type:s.Font,displayFontSize:!0},textColor:{title:"Color",type:s.Color,defaultValue:"#333"},placeholderOptions:{title:"Placeholder",type:s.Object,buttonTitle:"Color, Text",controls:{placeholderText:{title:"Text",type:s.String,defaultValue:"Search..."},placeholderColor:{title:"Color",type:s.Color,defaultValue:"rgba(0,0,0,0.4)"}}},dividerType:{title:"Divider",type:s.Enum,options:Object.values(tt),optionTitles:Object.keys(tt).map(H),defaultValue:tt.FullWidth},clearButtonType:{title:"Clear Type",type:s.Enum,options:Object.values(Y),optionTitles:Object.keys(Y).map(H),defaultValue:Y.Icon},clearButtonText:{title:"Clear Text",type:s.String,defaultValue:"Clear",hidden:t=>t.clearButtonType!==Y.Text}}},modalOptions:{title:"Modal",buttonTitle:"Layout, Width",type:s.Object,controls:{layoutType:{title:"Layout",type:s.Enum,options:Object.keys(C),optionTitles:Object.values(C).map(H),defaultValue:C.QuickMenu},width:{title:"Width",type:s.Number,defaultValue:500,min:200,max:1e3,displayStepper:!0,step:5,hidden:t=>t.layoutType===C.FixedTop},top:{title:"Top",type:s.Number,defaultValue:0,min:0,max:1e3,displayStepper:!0,hidden:t=>t.layoutType!==C.FixedTop},heightIsStatic:{title:"Height",type:s.Boolean,enabledTitle:"Instant",disabledTitle:"Animate",hidden:({layoutType:t})=>t!==C.QuickMenu},heightTransition:{title:"Type",type:s.Transition,defaultValue:{type:"spring",stiffness:800,damping:60},hidden:({heightIsStatic:t,layoutType:e})=>e!==C.QuickMenu||t},borderRadius:{title:"Radius",type:s.Number,defaultValue:16,displayStepper:!0,min:0,hidden:({layoutType:t})=>t!==C.QuickMenu},shadow:{buttonTitle:"Options",type:s.Object,defaultValue:{x:0,y:20,blur:40,spread:0,color:"rgba(0,0,0,0.2)"},controls:{color:{type:s.Color,defaultValue:"rgba(0,0,0,0.2)"},x:{type:s.Number,defaultValue:0},y:{type:s.Number,defaultValue:20},blur:{type:s.Number,defaultValue:40},spread:{type:s.Number,defaultValue:0}}},backgroundColor:{title:"Background",type:s.Color,defaultValue:"#FFF"},[U(C.QuickMenu)]:{title:"Animation",type:s.Object,icon:"effect",hidden:({layoutType:t})=>t!==C.QuickMenu,optional:!0,buttonTitle:"Options",controls:{opacity:{type:s.Number,defaultValue:.5,step:.1,min:0,max:1},scale:{type:s.Number,defaultValue:.75,step:.1,min:0,max:2},x:{type:s.Number,defaultValue:0,min:-500,max:500},y:{type:s.Number,defaultValue:0,min:-500,max:500},transition:{type:s.Transition}}},[U(C.FixedTop)]:{title:"Animation",type:s.Object,icon:"effect",buttonTitle:"Options",hidden:({layoutType:t})=>t!==C.FixedTop,optional:!0,controls:{opacity:{type:s.Number,defaultValue:.8,step:.1,min:0,max:1},y:{type:s.Number,defaultValue:0,min:-100,max:100},transition:{type:s.Transition}}},[U(C.Sidebar)]:{title:"Animation",type:s.Object,icon:"effect",buttonTitle:"Options",hidden:({layoutType:t})=>t!==C.Sidebar,optional:!0,controls:{opacity:{type:s.Number,defaultValue:.8,step:.1,min:0,max:1},x:{type:s.Number,defaultValue:0,min:-1e3,max:1e3},transition:{type:s.Transition}}}}},resultOptions:{title:"Results",buttonTitle:"Fonts, Style",type:s.Object,defaultValue:{},controls:{itemType:{title:"Style",type:s.Enum,options:Object.values(nt),optionTitles:Object.keys(nt).map(H),defaultValue:nt.FullWidth},titleFont:{title:"Title",type:s.Font,defaultValue:{fontSize:15},displayFontSize:!0},titleColor:{title:"Color",type:s.Color,defaultValue:"#333"},titleType:{title:"Content",type:s.Enum,options:Object.values($),optionTitles:Object.keys($).map(H),defaultValue:$.H1,displaySegmentedControl:!0},subtitleOptions:{type:s.Object,title:"Subtitle",buttonTitle:"Font, Content",controls:{subtitleFont:{title:"Font",type:s.Font,defaultValue:{fontSize:13},displayFontSize:!0},subtitleColor:{title:"Color",type:s.Color,defaultValue:"rgba(0, 0, 0, 0.4)"},subtitleType:{title:"Content",type:s.Enum,options:Object.values(et),optionTitles:Object.keys(et).map(H),defaultValue:et.Path}}}}},backdropOptions:{title:"Backdrop",type:s.Object,buttonTitle:"Color, Z Index",controls:{backgroundColor:{title:"Color",type:s.Color,defaultValue:"rgba(0, 0, 0, 0.8)"},zIndex:{title:"Z Index",type:s.Number,defaultValue:10,displayStepper:!0,min:0,max:10},transition:{type:s.Transition}}}});Vt.displayName="Search";export{po as a};
//# sourceMappingURL=chunk-VRVPYJIQ.mjs.map