import{a as u}from"./chunk-N5RGE3HL.mjs";import{N as o,Va as f}from"./chunk-3QXNLKEC.mjs";import{s as i,x as c}from"./chunk-WFOYFRYZ.mjs";var v={100:"Thin",200:"Extra-light",300:"Light",400:"Regular",500:"Medium",600:"Semi-bold",700:"Bold",800:"Extra-bold",900:"Black"};function $(r){let{fontFamily:t="Inter",fontSize:a=16,fontWeight:n=400,font:s=!1}=r,e=v[n],m=`"${t} ${e}", "${t}", ${u}`,p=t?{fontSize:a,fontWeight:n,fontFamily:m}:{fontSize:a,fontWeight:n},l=async()=>{await f.loadWebFontsFromSelectors([`CUSTOM;${t}`,`CUSTOM;${t} ${e}`,`GF;${t}-${e.toLowerCase()}`]).catch(C=>console.error(C))};return i(()=>{s&&l()},[s,t,n]),p}function I(){return c(()=>o.current()===o.canvas,[])}export{$ as a,I as b};
//# sourceMappingURL=chunk-RTBS6NVI.mjs.map
