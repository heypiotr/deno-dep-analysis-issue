import{I as H,N as T,Q as t,T as k}from"./chunk-3QXNLKEC.mjs";import{A as I,E as x,n as M,o as y,s as V,z as D}from"./chunk-WFOYFRYZ.mjs";var L='"Inter", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"';function R(e,{showYear:s,showMonth:i,showWeekday:r,showMinutes:u,showSeconds:l},d,m,n){let a=new Date,p=!r&&!i&&s;switch(e){case"date":return new Intl.DateTimeFormat(n,{weekday:r?"long":void 0,day:p?void 0:"numeric",month:i?m:void 0,year:s?"numeric":void 0}).format(a);case"time":return new Intl.DateTimeFormat(n,{hour:"numeric",minute:u?"numeric":void 0,second:l&&u?"numeric":void 0,hour12:d==="12h"}).format(a);default:return new Intl.DateTimeFormat(n).format(a)}}var o={height:20,width:140,outputType:"time",color:"#999",timeFormat:"24h",showYear:!0,showMonth:!0,showWeekday:!0,showMinutes:!0,showSeconds:!0,monthFormat:"long",alignment:"center"};function _(e){let s={...o,...e},{outputType:i,timeFormat:r,showYear:u,showMonth:l,showWeekday:d,showMinutes:m,showSeconds:n,monthFormat:a,color:p,font:v,tabularFont:B}=s,w=H(),h=y(()=>R(i,{showYear:u,showMonth:l,showWeekday:d,showMinutes:m,showSeconds:n},r,a,w),[w,a,i,m,l,n,d,u,r]),S=D(),W=y(b=>{if(b===null){clearTimeout(S.current);return}let g,F=()=>{let C=new Date,j=new Date().setSeconds(C.getSeconds()+1,0)-+C;S.current=setTimeout(F,j);let f=h();g!==f&&(b.textContent=f,g=f)};F()},[h]),[E,Y]=I(!1),c=T.current()===T.canvas;return V(()=>{M(()=>Y(!0))},[c]),x("p",{suppressHydrationWarning:!0,style:{margin:0,padding:0,color:p,fontFamily:L,fontWeight:500,fontSize:16,lineHeight:1,visibility:E?"visible":"hidden",...v,fontVariantNumeric:B?"tabular-nums":"normal",whiteSpace:"nowrap"},ref:c?void 0:W,children:h()})}_.displayName="Time & Date";k(_,{outputType:{title:"Type",type:t.Enum,displaySegmentedControl:!0,options:["date","time"],optionTitles:["Date","Time"],defaultValue:o.outputType},showWeekday:{title:"Day",type:t.Boolean,enabledTitle:"Show",disabledTitle:"Hide",defaultValue:o.showWeekday,hidden:e=>e.outputType!=="date"},showMonth:{title:"Month",type:t.Boolean,enabledTitle:"Show",disabledTitle:"Hide",defaultValue:o.showMonth,hidden:e=>e.outputType!=="date"},monthFormat:{title:"Format",type:t.Enum,options:["short","long","numeric"],optionTitles:["Short","Long","Numeric"],defaultValue:o.monthFormat,hidden:e=>e.outputType!=="date"||!e.showMonth},showYear:{title:"Year",type:t.Boolean,enabledTitle:"Show",disabledTitle:"Hide",defaultValue:o.showYear,hidden:e=>e.outputType!=="date"},timeFormat:{title:"Format",type:t.Enum,options:["12h","24h"],optionTitles:["12h","24h"],displaySegmentedControl:!0,defaultValue:o.timeFormat,hidden:e=>e.outputType!=="time"},showMinutes:{title:"Minutes",type:t.Boolean,enabledTitle:"Show",disabledTitle:"Hide",defaultValue:o.showMinutes,hidden:e=>e.outputType!=="time"},showSeconds:{title:"Seconds",type:t.Boolean,enabledTitle:"Show",disabledTitle:"Hide",defaultValue:o.showSeconds,hidden:e=>e.outputType!=="time"||!e.showMinutes},font:{type:t.Font,controls:"extended"},tabularFont:{title:"Tabular",type:t.Boolean,defaultValue:!0},color:{type:t.Color,defaultValue:o.color}});export{_ as a};
//# sourceMappingURL=chunk-TAAB2DYP.mjs.map
