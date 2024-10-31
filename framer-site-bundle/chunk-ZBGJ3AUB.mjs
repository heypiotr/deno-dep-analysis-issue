import{a as U}from"./chunk-KAGPTXLB.mjs";import{a as de}from"./chunk-RTBS6NVI.mjs";import{d as le,k as se,m as ce}from"./chunk-N5RGE3HL.mjs";import{Ba as oe,Ga as re,H as J,Q as t,Sa as ae,T as S,U as K,Y as G,_a as ie,aa as $,da as ee,ea as E,eb as ne,fb as _,i as z,ia as te,k as p,m as Y}from"./chunk-3QXNLKEC.mjs";import{E as r,F as I,d as j,j as q,o as Z,p as M,t as W,x as X,z as Q}from"./chunk-WFOYFRYZ.mjs";import{b as N}from"./chunk-JXOLF6V7.mjs";function F(e){let{label:a,content:i,fill:o,color:u,style:V,onClick:l,font:w,hoverOptions:s,...x}=e,n=de({fontWeight:500,...x}),y=se(e),g=ce(e),h=Z(()=>{var c;(c=N.clipboard)===null||c===void 0||c.writeText(i),l?.()},[l,i]);return r(p.button,{style:{border:"none",outline:"none",resize:"none",width:"max-content",wordBreak:"break-word",overflowWrap:"break-word",WebkitTapHighlightColor:"rgba(0, 0, 0, 0)",letterSpacing:"-0.2px",display:"flex",justifyContent:"center",alignItems:"center",background:o,borderRadius:y,cursor:"pointer",padding:g,color:u,...n,...w,...V},onClick:h,...x,whileHover:s,transition:s?.transition,children:a})}S(F,{content:{type:t.String,title:"Content",displayTextArea:!0,description:"When clicked, this content will be copied to the clipboard."},label:{type:t.String,title:"Label",defaultValue:"Copy to Clipboard"},fill:{type:t.Color,title:"Fill",defaultValue:"#06F"},color:{type:t.Color,title:"Text",defaultValue:"#fff"},font:{type:t.Font,controls:"extended",defaultValue:{fontSize:16}},hoverOptions:{type:t.Object,title:"Hover",buttonTitle:"Effect",optional:!0,controls:{scale:{type:t.Number,title:"Scale",min:0,max:10,displayStepper:!0,step:.01,defaultValue:1.1},backgroundColor:{type:t.Color,title:"Fill",defaultValue:"#0088FF",optional:!0},color:{type:t.Color,title:"Color",defaultValue:"#FFF",optional:!0},transition:{type:t.Transition,title:"Transition",defaultValue:{type:"spring",stiffness:400,damping:30}}}},padding:{type:t.FusedNumber,toggleKey:"paddingPerSide",toggleTitles:["Padding","Padding per side"],valueKeys:["paddingTop","paddingRight","paddingBottom","paddingLeft"],valueLabels:["T","R","B","L"],min:0,title:"Padding",defaultValue:10},borderRadius:{title:"Radius",type:t.FusedNumber,toggleKey:"isMixedBorderRadius",toggleTitles:["Radius","Radius per corner"],valueKeys:["topLeftRadius","topRightRadius","bottomRightRadius","bottomLeftRadius"],valueLabels:["TL","TR","BR","BL"],min:0,defaultValue:50},...le});var k;(function(e){e.Default="Default",e.Custom="Custom"})(k||(k={}));var f;(function(e){e.Upload="Upload",e.URL="URL"})(f||(f={}));var we='meta[name="framer-search-index"]';function Re(){return typeof document>"u"?!0:!!document.querySelector(we)}function C(e){let{styleOptions:a,hoverOptions:i,iconOptions:o}=e,{backgroundColor:u,color:V,borderRadius:l,padding:w,paddingPerSide:s,paddingTop:x,paddingRight:n,paddingBottom:y,paddingLeft:g,gap:h}=a,c=Re(),v;c&&(e.srcType===f.URL&&(v=e.srcURL),e.srcType===f.Upload&&(v=e.srcFile));let d=s?`${x}px ${n}px ${y}px ${g}px`:`${w}px`,P=()=>{var m,D;if(!o)return;let H={order:o.alignment==="start"?0:2,flexShrink:0};return o.type===k.Custom&&(!((m=o.image)===null||m===void 0)&&m.src)?r("img",{style:H,alt:!((D=o.image)===null||D===void 0)&&D.alt&&o.image.alt.length>0?o.image.alt:"download icon",src:o.image.src,width:o.size,height:o.size}):r("svg",{style:H,xmlns:"http://www.w3.org/2000/svg",width:o.size,height:o.size,fill:o.color,viewBox:"0 0 256 256",children:r("path",{d:"M228 152v56a20 20 0 0 1-20 20H48a20 20 0 0 1-20-20v-56a12 12 0 0 1 24 0v52h152v-52a12 12 0 0 1 24 0Zm-108.49 8.49a12 12 0 0 0 17 0l40-40a12 12 0 0 0-17-17L140 123V40a12 12 0 0 0-24 0v83l-19.51-19.49a12 12 0 0 0-17 17Z"})})},A=()=>e.srcType===f.URL&&e.srcURL||e.srcType===f.Upload&&e.srcFile?"pointer":"auto",O=c?"Download File":"Publish to Download";return I(p.a,{target:"_blank",href:v,download:!0,title:O,style:{gap:h,fontSize:16,lineHeight:1,fontFamily:"Inter",fontWeight:500,width:"max-content",...e.style,...Se,...e.fontControl,padding:d,color:V,backgroundColor:u,borderRadius:l,userSelect:"none",placeContent:Fe(e.fontControl),whiteSpace:"nowrap",cursor:A()},whileHover:i,transition:i?.transition,children:[P(),e.text]})}C.displayName="Download";S(C,{text:{title:"Text",type:t.String,defaultValue:"Download"},srcType:{type:t.Enum,displaySegmentedControl:!0,title:"Source",options:[f.Upload,f.URL]},srcURL:{type:t.String,title:" ",placeholder:"../example.pdf",hidden:e=>e.srcType===f.Upload},srcFile:{type:t.File,title:" ",allowedFileTypes:[],hidden:e=>e.srcType===f.URL},fontControl:{type:t.Font,title:"Font",controls:"extended"},iconOptions:{type:t.Object,optional:!0,title:"Icon",buttonTitle:"Size, Color",controls:{type:{title:"Type",type:t.Enum,options:Object.values(k),optionTitles:Object.values(k),displaySegmentedControl:!0},color:{title:"Color",type:t.Color,defaultValue:"#FFF",hidden:e=>e.type===k.Custom},image:{title:"File",type:t.ResponsiveImage,allowedFileTypes:["jpg","png","svg"],hidden:e=>e.type===k.Default},size:{type:t.Number,displayStepper:!0,min:5,defaultValue:16,max:250},alignment:{title:"Align",type:t.Enum,displaySegmentedControl:!0,options:["start","end"],optionTitles:["Start","End"]}}},styleOptions:{type:t.Object,title:"Styles",buttonTitle:"Button, Font",controls:{backgroundColor:{type:t.Color,title:"Fill",defaultValue:"#111"},color:{type:t.Color,defaultValue:"#FFF"},borderRadius:{type:t.Number,title:"Radius",displayStepper:!0,defaultValue:50},padding:{title:"Padding",type:t.FusedNumber,toggleKey:"paddingPerSide",toggleTitles:["Padding","Padding per side"],defaultValue:10,valueKeys:["paddingTop","paddingRight","paddingBottom","paddingLeft"],valueLabels:["T","R","B","L"],min:0},gap:{title:"Gap",type:t.Number,displayStepper:!0,defaultValue:5}}},hoverOptions:{type:t.Object,title:"Hover",buttonTitle:"Effect",optional:!0,controls:{scale:{type:t.Number,title:"Scale",min:0,max:10,displayStepper:!0,step:.01,defaultValue:1.1},backgroundColor:{type:t.Color,title:"Fill",defaultValue:"#333",optional:!0},color:{type:t.Color,title:"Color",defaultValue:"#FFF",optional:!0},transition:{type:t.Transition,title:"Transition",defaultValue:{type:"spring",stiffness:400,damping:30}}}}});var Se={display:"flex",placeItems:"center",placeContent:"center",textDecoration:"none"},Fe=e=>e?.textAlign?e.textAlign==="left"?"flex-start":e.textAlign==="right"?"flex-end":"center":"left";var Te=_(C),De=_(U),Ne=_(F),Ie=oe($(p.div)),b=K(C),Ee={NqPE0U13b:{hover:!0},NVmSoHgk0:{hover:!0},VFAc0IkZu:{hover:!0}},_e=["VFAc0IkZu","NVmSoHgk0","NqPE0U13b"],Le="framer-84ytD",Pe={NqPE0U13b:"framer-v-1mvgx7d",NVmSoHgk0:"framer-v-1anma7k",VFAc0IkZu:"framer-v-1s76noq"};function L(e,...a){let i={};return a?.forEach(o=>o&&Object.assign(i,e[o])),i}var Oe={damping:60,delay:0,mass:1,stiffness:500,type:"spring"},He=(e,a)=>`translateX(-50%) ${a}`,fe={damping:30,delay:0,mass:1,stiffness:400,type:"spring"},je={opacity:0,rotate:0,rotateX:0,rotateY:0,scale:1,skewX:0,skewY:0,transition:fe,x:0,y:0},ze={opacity:.001,rotate:0,rotateX:0,rotateY:0,scale:1,skewX:0,skewY:0,x:0,y:5},me={opacity:1,rotate:0,rotateX:0,rotateY:0,scale:1,skewX:0,skewY:0,transition:fe,x:0,y:0},Ue=({value:e,children:a})=>{let i=M(z),o=e??i.transition,u=X(()=>({...i,transition:o}),[JSON.stringify(o)]);return r(z.Provider,{value:u,children:a})},Ae=p(j),Be={Copied:"NqPE0U13b",Copy:"NVmSoHgk0",Download:"VFAc0IkZu"},qe=({bg:e,clipboard:a,download:i,downloadURL:o,file:u,height:V,icon:l,id:w,label:s,width:x,...n})=>{var y,g,h,c,v,d;return{...n,f3wTFv908:u??n.f3wTFv908,kAgHDXa3S:(y=l??n.kAgHDXa3S)!==null&&y!==void 0?y:"rgb(255, 255, 255)",kOwl1OfEy:(g=s??n.kOwl1OfEy)!==null&&g!==void 0?g:"Download",pIREzdTt2:a??n.pIREzdTt2,rks9Q99QR:o??n.rks9Q99QR,TDJvu2h1Z:(h=e??n.TDJvu2h1Z)!==null&&h!==void 0?h:"var(--token-6349ba99-bdcc-4940-8c05-b4b832916c95, rgb(34, 34, 34))",variant:(v=(c=Be[n.variant])!==null&&c!==void 0?c:n.variant)!==null&&v!==void 0?v:"VFAc0IkZu",vE41ElpMv:(d=i??n.vE41ElpMv)!==null&&d!==void 0?d:"Upload"}},Ze=(e,a)=>e.layoutDependency?a.join("-")+e.layoutDependency:a.join("-"),Me=q(function(e,a){let{activeLocale:i,setLocale:o}=J(),{style:u,className:V,layoutId:l,variant:w,kOwl1OfEy:s,f3wTFv908:x,pIREzdTt2:n,TDJvu2h1Z:y,kAgHDXa3S:g,vE41ElpMv:h,rks9Q99QR:c,...v}=qe(e),{baseVariant:d,classNames:P,clearLoadingGesture:A,gestureHandlers:O,gestureVariant:m,isLoading:D,setGestureState:H,setVariant:ye,variants:B}=ae({cycleOrder:_e,defaultVariant:"VFAc0IkZu",enabledGestures:Ee,variant:w,variantClassNames:Pe}),R=Ze(e,B),{activeVariantCallback:ge,delay:Xe}=re(d),he=ge(async(...Ye)=>{ye("NqPE0U13b")}),ve=Q(null),be=()=>!(["NVmSoHgk0-hover","NqPE0U13b-hover"].includes(m)||["NVmSoHgk0","NqPE0U13b"].includes(d)),xe=()=>!!(["NVmSoHgk0-hover","NqPE0U13b-hover"].includes(m)||["NVmSoHgk0","NqPE0U13b"].includes(d)),ke=()=>!!["VFAc0IkZu-hover","NVmSoHgk0-hover"].includes(m),Ce=W(),Ve=[],Qe=ee();return r(Y,{id:l??Ce,children:r(Ae,{animate:B,initial:!1,children:r(Ue,{value:Oe,children:I(p.div,{...v,...O,className:G(Le,...Ve,"framer-1s76noq",V,P),"data-framer-name":"Download",layoutDependency:R,layoutId:"VFAc0IkZu",ref:a??ve,style:{backgroundColor:y,borderBottomLeftRadius:6,borderBottomRightRadius:6,borderTopLeftRadius:6,borderTopRightRadius:6,opacity:.98,...u},variants:{"NqPE0U13b-hover":{opacity:.7},"NVmSoHgk0-hover":{opacity:1},"VFAc0IkZu-hover":{backgroundColor:"var(--token-6349ba99-bdcc-4940-8c05-b4b832916c95, rgb(34, 34, 34))",opacity:1}},...L({"NqPE0U13b-hover":{"data-framer-name":void 0},"NVmSoHgk0-hover":{"data-framer-name":void 0},"VFAc0IkZu-hover":{"data-framer-name":void 0},NqPE0U13b:{"data-framer-name":"Copied"},NVmSoHgk0:{"data-framer-name":"Copy"}},d,m),children:[be()&&r(E,{children:r(p.div,{className:"framer-t24he8-container",layoutDependency:R,layoutId:"rolBVjk7M-container",style:{opacity:0},children:r(C,{fontControl:{},height:"100%",hoverOptions:{backgroundColor:"rgb(51, 51, 51)",color:"rgb(255, 255, 255)",scale:1.1,transition:{damping:30,stiffness:400,type:"spring"}},id:"rolBVjk7M",layoutId:"rolBVjk7M",srcFile:x,srcType:h,srcURL:c,style:{height:"100%",width:"100%"},styleOptions:{backgroundColor:"rgb(17, 17, 17)",borderRadius:50,color:"rgb(255, 255, 255)",gap:5,padding:10,paddingBottom:10,paddingLeft:10,paddingPerSide:!1,paddingRight:10,paddingTop:10},text:"",width:"100%"})})}),r(E,{children:r(p.div,{className:"framer-1ccr2rc-container",layoutDependency:R,layoutId:"qR5IaTju8-container",style:{opacity:1},variants:{"VFAc0IkZu-hover":{opacity:.6}},children:r(U,{color:g,height:"100%",iconSearch:"House",iconSelection:"DownloadSimple",id:"qR5IaTju8",layoutId:"qR5IaTju8",mirrored:!1,selectByList:!0,style:{height:"100%",width:"100%"},weight:"bold",width:"100%",...L({NqPE0U13b:{color:"rgb(255, 255, 255)",iconSelection:"CheckCircle"},NVmSoHgk0:{iconSelection:"CopySimple"}},d,m)})})}),xe()&&r(E,{children:r(p.div,{className:"framer-1ojshzh-container",layoutDependency:R,layoutId:"KREb5Ss6m-container",style:{opacity:0},children:r(F,{borderRadius:50,bottomLeftRadius:50,bottomRightRadius:50,color:"rgb(255, 255, 255)",content:n,fill:"rgb(0, 102, 255)",font:{},height:"100%",id:"KREb5Ss6m",isMixedBorderRadius:!1,label:"Copy to Clipboard",layoutId:"KREb5Ss6m",padding:10,paddingBottom:10,paddingLeft:10,paddingPerSide:!1,paddingRight:10,paddingTop:10,style:{height:"100%",width:"100%"},topLeftRadius:50,topRightRadius:50,width:"100%",...L({NVmSoHgk0:{onClick:he}},d,m)})})}),ke()&&r(Ie,{__perspectiveFX:!1,__smartComponentFX:!0,__targetOpacity:0,animate:je,className:"framer-z72eii","data-framer-appear-id":"z72eii","data-framer-name":"Tooltip",initial:ze,layoutDependency:R,layoutId:"o4H_YIi2r",optimized:!0,style:{backgroundColor:"rgb(0, 0, 0)",borderBottomLeftRadius:6,borderBottomRightRadius:6,borderTopLeftRadius:6,borderTopRightRadius:6,boxShadow:"0px 10px 20px 0px rgba(0,0,0,0.05)",opacity:0},transformTemplate:He,variants:{"NVmSoHgk0-hover":{opacity:1},"VFAc0IkZu-hover":{opacity:1}},...L({"NVmSoHgk0-hover":{__targetOpacity:1,animate:me},"VFAc0IkZu-hover":{__targetOpacity:1,animate:me}},d,m),children:r(ie,{__fromCanvasComponent:!0,children:r(j,{children:r(p.p,{style:{"--font-selector":"Q1VTVE9NO0ludGVyIEZyYW1lciBTZW1pQm9sZA==","--framer-font-family":'"Inter Framer SemiBold", "Inter Framer SemiBold Placeholder", sans-serif',"--framer-font-size":"12px","--framer-letter-spacing":"0px","--framer-line-height":"1.6em","--framer-text-alignment":"left","--framer-text-color":"var(--extracted-r6o4lv, rgb(255, 255, 255))"},children:"Download"})}),className:"framer-hdyrve",fonts:["CUSTOM;Inter Framer SemiBold"],layoutDependency:R,layoutId:"bwJLOHdSZ",style:{"--extracted-r6o4lv":"rgb(255, 255, 255)","--framer-link-text-color":"rgb(0, 153, 255)","--framer-link-text-decoration":"underline"},text:s,verticalAlignment:"top",withExternalLayout:!0})})]})})})})}),We=["@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }",".framer-84ytD.framer-sdpy1o, .framer-84ytD .framer-sdpy1o { display: block; }",".framer-84ytD.framer-1s76noq { align-content: center; align-items: center; cursor: pointer; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: visible; padding: 5px; position: relative; width: min-content; }",".framer-84ytD .framer-t24he8-container { bottom: 0px; cursor: pointer; flex: none; left: 0px; position: absolute; right: 0px; top: 0px; z-index: 10; }",".framer-84ytD .framer-1ccr2rc-container { flex: none; height: 16px; pointer-events: none; position: relative; width: 16px; }",".framer-84ytD .framer-1ojshzh-container { bottom: 0px; flex: none; left: 0px; position: absolute; right: 0px; top: 0px; z-index: 10; }",".framer-84ytD .framer-z72eii { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; left: 46%; overflow: hidden; padding: 2px 8px 2px 8px; pointer-events: none; position: absolute; top: -25px; width: min-content; will-change: var(--framer-will-change-override, transform); z-index: 1; }",".framer-84ytD .framer-hdyrve { flex: none; height: auto; pointer-events: none; position: relative; white-space: pre; width: auto; }","@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-84ytD.framer-1s76noq, .framer-84ytD .framer-z72eii { gap: 0px; } .framer-84ytD.framer-1s76noq > *, .framer-84ytD .framer-z72eii > * { margin: 0px; margin-left: calc(10px / 2); margin-right: calc(10px / 2); } .framer-84ytD.framer-1s76noq > :first-child, .framer-84ytD .framer-z72eii > :first-child { margin-left: 0px; } .framer-84ytD.framer-1s76noq > :last-child, .framer-84ytD .framer-z72eii > :last-child { margin-right: 0px; } }",".framer-84ytD.framer-v-1s76noq.hover .framer-z72eii { top: -28px; }",".framer-84ytD.framer-v-1anma7k.hover .framer-1ccr2rc-container { order: 2; }",".framer-84ytD.framer-v-1anma7k.hover .framer-1ojshzh-container { order: 0; }",".framer-84ytD.framer-v-1anma7k.hover .framer-z72eii { order: 3; top: -28px; }"],T=te(Me,We,"framer-84ytD"),yt=T;T.displayName="Brand / Action Button";T.defaultProps={height:26,width:26};S(T,{variant:{options:["VFAc0IkZu","NVmSoHgk0","NqPE0U13b"],optionTitles:["Download","Copy","Copied"],title:"Variant",type:t.Enum},kOwl1OfEy:{defaultValue:"Download",displayTextArea:!1,title:"Label",type:t.String},f3wTFv908:b?.srcFile&&{...b.srcFile,__defaultAssetReference:"",description:void 0,hidden:void 0,title:"File"},pIREzdTt2:{defaultValue:"",displayTextArea:!0,title:"Clipboard",type:t.String},TDJvu2h1Z:{defaultValue:'var(--token-6349ba99-bdcc-4940-8c05-b4b832916c95, rgb(34, 34, 34)) /* {"name":"Surface Night"} */',title:"Bg",type:t.Color},kAgHDXa3S:{defaultValue:"rgb(255, 255, 255)",title:"Icon",type:t.Color},vE41ElpMv:b?.srcType&&{...b.srcType,defaultValue:"Upload",description:void 0,hidden:void 0,title:"Download"},rks9Q99QR:{defaultValue:"",placeholder:"../example.pdf",title:"Download URL",type:t.String}});ne(T,[{explicitInter:!0,fonts:[{family:"Inter Framer SemiBold",source:"custom",url:"https://framerusercontent.com/assets/gVFblhgzMqambFqEuiNjMfNAvyk.woff2"}]},...Te,...De,...Ne],{supportsExplicitInterCodegen:!0});export{yt as a};
//# sourceMappingURL=chunk-ZBGJ3AUB.mjs.map