function e(t,n){return{customHTMLBodyEnd:'<!-- Performance monitoring -->\n<script src="https://cdn.debugbear.com/9uWCuyolIuHX.js" defer="" crossorigin="anonymous"><\/script>\n\n<!-- Anonymous Analytics -->\n<script>\n!function(){console.log("Initializing Framer Analytics Anonymous");const t="visitor_id",e="cookie_consent",n="https://api.framer.com/auth/signin",o="https://events.framer.com/track";function i(t){const e=document.cookie.match(`(^|;) ?${t}=([^;]*)(;|$)`);return e?e[2]:null}function s(){const t=()=>Math.floor(65536*(1+Math.random())).toString(16).substring(1);return`${t()}${t()}-${t()}-${t()}-${t()}-${t()}${t()}${t()}`}function c(t,e){const n=new XMLHttpRequest;n.open("GET",t),n.withCredentials=!0,n.onload=()=>{try{const t=JSON.parse(n.response);e(t.userId||"")}catch{e("")}},n.send()}function r(n,c){const r=new XMLHttpRequest;r.open("POST",o),r.setRequestHeader("Content-Type","application/json");const a=[{source:"framer.site",timestamp:Date.now(),data:{type:"track",uuid:s(),context:{userId:c||null,visitorId:i(t)},event:"site_cookie_consent",cookieConsent:i(e),isInEU:null,eventName:n}}];r.send(JSON.stringify(a))}!function(){if(i(t))c(n,(t=>r("visitor_id_already_set",t)));else{const e=`${Date.now()}${Math.random()}`;!function(t,e,n,o){let i=`${encodeURIComponent(t)}=${encodeURIComponent(e)};path=/;secure;domain=${o}`;if(n){const t=new Date;t.setTime(t.getTime()+864e5*n),i+=`;expires=${t.toUTCString()}`}document.cookie=i}(t,e,365,"framer.com"),c(n,(t=>r("visitor_id_set",t)))}}()}();\n<\/script>\n<!-- yield gtm pushes -->\n<script>\n!function(){const n=new Set;function t(){document.removeEventListener("visibilitychange",t);for(const t of n)t();n.clear()}const e=async function(e){await new Promise((e=>{if(n.add(e),"visible"===document.visibilityState)return document.addEventListener("visibilitychange",t),requestAnimationFrame((()=>setTimeout((()=>{n.delete(e),e()}))));t()})),e()};window.addEventListener("load",(function(){const n=window.dataLayer.push;window.gtag=function(){const t=arguments;e((()=>{n(t)}))},window.dataLayer.push=function(...t){e((()=>{n(...t)}))}}))}();\n<\/script>',customHTMLHeadEnd:`<!-- Google Search Console -->
<meta name="google-site-verification" content="srewg7cpiErKYvspydAuj9hVuvnpDkL6-xS2Zrm0DNY">
<meta name="google-site-verification" content="Hkr9R7Mbf5Msjc0FJoCdSkbCOq5wpvDZMVf70JwRbDY">
<script>!function(){const e=["BE","EL","LT","PT","BG","ES","LU","RO","CZ","FR","RE","GP","MQ","GF","YT","BL","MF","PM","WF","PF","NC","HU","SI","DK","FO","GL","HR","MT","SK","DE","IT","NL","AW","CW","SX","FI","AX","EE","CY","AT","SE","IE","LV","PL","UK","GB","AI","BM","IO","VG","KY","FK","GI","MS","PN","SH","TC","GG","JE","IM"];window.dataLayer=window.dataLayer||[],function(){dataLayer.push(arguments)}("consent","default",function(e){const a="framerCookiesConsentMode",t=localStorage.getItem(a),n=localStorage.getItem("framerCookiesDismissed"),r=localStorage.getItem("framerCookiesAutoAccepted");return{functionality_storage:(o=null!==t&&(null!==n||null!==r)?function(e,a){try{return JSON.parse(e)}catch{a&&a()}}(t,(()=>localStorage.removeItem(a))):e).necessary?"granted":"denied",security_storage:o.necessary?"granted":"denied",ad_storage:o.marketing?"granted":"denied",ad_user_data:o.marketing?"granted":"denied",ad_personalization:o.marketing?"granted":"denied",analytics_storage:o.analytics?"granted":"denied",personalization_storage:o.preferences?"granted":"denied"};var o}(Intl?.DateTimeFormat()?.resolvedOptions()?.timeZone?.startsWith("Europe")||(()=>{const a=navigator.language??navigator.languages?.[0];return e.some((e=>a?.toUpperCase()?.includes(e)))})()?{necessary:!0,analytics:!1,marketing:!1,preferences:!1}:{necessary:!0,analytics:!0,marketing:!0,preferences:!0})),window.dataLayer.push({"gtm.start":(new Date).getTime(),event:"gtm.js"})}();<\/script>
<script src="https://www.googletagmanager.com/gtm.js?id=GTM-KQFN6BX" async="" crossorigin="anonymous"><\/script>
`,description:"Framer is where teams design and publish stunning sites.",favicon:"https://framerusercontent.com/assets/Io89FonxEaWg4nxvQQllVLwPUUI.png",robots:"max-image-preview:large",socialImage:"https://framerusercontent.com/assets/vKxwW8SkJHFjCK7fuyMlAVdNKOI.jpg",title:"Framer \u2014 The internet is your canvas"}}export{e as a};
//# sourceMappingURL=chunk-6SLKK2XE.mjs.map
