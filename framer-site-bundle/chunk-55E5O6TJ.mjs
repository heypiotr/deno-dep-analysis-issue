import{b as ye}from"./chunk-MG7FUK2S.mjs";import{N as G,Q as i,T as ge,a as X,k as se,m as Y,n as pe,o as ue,q as ce,r as fe,s as he,w as me}from"./chunk-3QXNLKEC.mjs";import{A as de,E as p,F as D,b as M,f as F,i as j,o as ae,s as V,x as le,z as s}from"./chunk-WFOYFRYZ.mjs";var Ne=100,Ee={left:n=>`translateX(-${n}px)`,right:n=>`translateX(${n}px)`,top:n=>`translateY(-${n}px)`,bottom:n=>`translateY(${n}px)`},K=typeof Animation<"u"&&typeof Animation.prototype.updatePlaybackRate=="function";function U(n){let{slots:A,gap:S,padding:xe,paddingPerSide:Se,paddingTop:Te,paddingRight:_e,paddingBottom:we,paddingLeft:Ce,speed:T,hoverFactor:R,direction:u,alignment:Ie,sizingOptions:Me,fadeOptions:Ve,style:Ae}=n,{fadeContent:k,overflow:Re,fadeWidth:q,fadeInset:J,fadeAlpha:Q}=Ve,{widthType:$,heightType:W}=Me,ke=Se?`${Te}px ${_e}px ${we}px ${Ce}px`:`${xe}px`,c=G.current()===G.canvas,_=A.filter(Boolean),L=M.count(_),w=L>0;u===!0&&(u="left");let v=u==="left"||u==="right",Z=pe(0),C=Ee[u],$e=ue(Z,C),y=s(null),a=le(()=>[j(),j()],[]),[f,We]=de({parent:null,children:null}),ee=[],z=[],x=0,B=0;c&&(x=L?Math.floor(10/L):0,B=1),!c&&w&&f.parent&&(x=Math.round(f.parent/f.children*2)+1,x=Math.min(x,Ne),B=1);let te=ae(()=>{if(w&&y.current){let e=v?y.current.offsetWidth:y.current.offsetHeight,t=a[0].current?v?a[0].current.offsetLeft:a[0].current.offsetTop:0,r=(a[1].current?v?a[1].current.offsetLeft+a[1].current.offsetWidth:a[1].current.offsetTop+a[1].current.offsetHeight:0)-t+S;We({parent:e,children:r})}},[]),ne=c?{contentVisibility:"auto"}:{};if(w){if(!c){let e=s(!0);V(()=>(X.read(te),ye(y.current,({contentSize:t})=>{!e.current&&(t.width||t.height)&&X.read(te),e.current=!1})),[])}ee=M.map(_,(e,t)=>{var d,r,h,m;let g;t===0&&(g=a[0]),t===_.length-1&&(g=a[1]);let b={width:$?(d=e.props)===null||d===void 0?void 0:d.width:"100%",height:W?(r=e.props)===null||r===void 0?void 0:r.height:"100%"};return p(Y,{inherit:"id",children:p("li",{ref:g,style:b,children:F(e,{style:{...(h=e.props)===null||h===void 0?void 0:h.style,...b,flexShrink:0,...ne},layoutId:e.props.layoutId?e.props.layoutId+"-original-"+t:void 0},(m=e.props)===null||m===void 0?void 0:m.children)})})})}if(!c)for(let e=0;e<x;e++)z=[...z,...M.map(_,(t,d)=>{var r,h,m,g,b,P;let Oe={width:$?(r=t.props)===null||r===void 0?void 0:r.width:"100%",height:W?(h=t.props)===null||h===void 0?void 0:h.height:"100%",willChange:"transform"};return p(Y,{inherit:"id",children:p("li",{style:Oe,"aria-hidden":!0,children:F(t,{key:e+" "+d,style:{...(m=t.props)===null||m===void 0?void 0:m.style,width:$?(g=t.props)===null||g===void 0?void 0:g.width:"100%",height:W?(b=t.props)===null||b===void 0?void 0:b.height:"100%",flexShrink:0,...ne},layoutId:t.props.layoutId?t.props.layoutId+"-dupe-"+e:void 0},(P=t.props)===null||P===void 0?void 0:P.children)},e+"li"+d)},e+"lg"+d)})];let l=f.children+f.children*Math.round(f.parent/f.children),H=s(null),O=s(null),I=s(0),N=s(!1),ie=fe(),re=s(null),o=s(null);if(!c){let e=me(y);K?(V(()=>{if(!(ie||!l||!T))return o.current=re.current.animate({transform:[C(0),C(l)]},{duration:Math.abs(l)/T*1e3,iterations:1/0,easing:"linear"}),()=>o.current.cancel()},[R,l,T]),V(()=>{o.current&&(e&&o.current.playState==="paused"?o.current.play():!e&&o.current.playState==="running"&&o.current.pause())},[e])):ce(t=>{if(!l||ie||K)return;H.current===null&&(H.current=t),t=t-H.current;let r=(O.current===null?0:t-O.current)*(T/1e3);N.current&&(r*=R),I.current+=r,I.current=he(0,l,I.current),O.current=t,e&&Z.set(I.current)})}let Le=v?"to right":"to bottom",oe=q/2,ze=100-q/2,Be=Xe(J,0,oe),He=100-J,E=`linear-gradient(${Le}, rgba(0, 0, 0, ${Q}) ${Be}%, rgba(0, 0, 0, 1) ${oe}%, rgba(0, 0, 0, 1) ${ze}%, rgba(0, 0, 0, ${Q}) ${He}%)`;return w?p("section",{style:{...be,opacity:B,WebkitMaskImage:k?E:void 0,MozMaskImage:k?E:void 0,maskImage:k?E:void 0,overflow:Re?"visible":"hidden",padding:ke},ref:y,children:D(se.ul,{ref:re,style:{...be,gap:S,top:u==="bottom"&&ve(l)?-l:void 0,left:u==="right"&&ve(l)?-l:void 0,placeItems:Ie,position:"relative",flexDirection:v?"row":"column",...Ae,willChange:c?"auto":"transform",transform:K?C(0):$e},onMouseEnter:()=>{N.current=!0,o.current&&(o.current.playbackRate=R)},onMouseLeave:()=>{N.current=!1,o.current&&(o.current.playbackRate=1)},children:[ee,z]})}):D("section",{style:Pe,children:[p("div",{style:Fe,children:"\u2728"}),p("p",{style:je,children:"Connect to Content"}),p("p",{style:De,children:"Add layers or components to infinitely loop on your page."})]})}U.defaultProps={gap:10,padding:10,sizingOptions:{widthType:!0,heightType:!0},fadeOptions:{fadeContent:!0,overflow:!1,fadeWidth:25,fadeAlpha:0,fadeInset:0},direction:!0};ge(U,{slots:{type:i.Array,title:"Children",control:{type:i.ComponentInstance}},speed:{type:i.Number,title:"Speed",min:0,max:1e3,defaultValue:100,unit:"%",displayStepper:!0,step:5},direction:{type:i.Enum,title:"Direction",options:["left","right","top","bottom"],optionIcons:["direction-left","direction-right","direction-up","direction-down"],optionTitles:["Left","Right","Top","Bottom"],defaultValue:"left",displaySegmentedControl:!0},alignment:{type:i.Enum,title:"Align",options:["flex-start","center","flex-end"],optionIcons:{direction:{right:["align-top","align-middle","align-bottom"],left:["align-top","align-middle","align-bottom"],top:["align-left","align-center","align-right"],bottom:["align-left","align-center","align-right"]}},defaultValue:"center",displaySegmentedControl:!0},gap:{type:i.Number,title:"Gap"},padding:{title:"Padding",type:i.FusedNumber,toggleKey:"paddingPerSide",toggleTitles:["Padding","Padding per side"],valueKeys:["paddingTop","paddingRight","paddingBottom","paddingLeft"],valueLabels:["T","R","B","L"],min:0},sizingOptions:{type:i.Object,title:"Sizing",controls:{widthType:{type:i.Boolean,title:"Width",enabledTitle:"Auto",disabledTitle:"Stretch",defaultValue:!0},heightType:{type:i.Boolean,title:"Height",enabledTitle:"Auto",disabledTitle:"Stretch",defaultValue:!0}}},fadeOptions:{type:i.Object,title:"Clipping",controls:{fadeContent:{type:i.Boolean,title:"Fade",defaultValue:!0},overflow:{type:i.Boolean,title:"Overflow",enabledTitle:"Show",disabledTitle:"Hide",defaultValue:!1,hidden(n){return n.fadeContent===!0}},fadeWidth:{type:i.Number,title:"Width",defaultValue:25,min:0,max:100,unit:"%",hidden(n){return n.fadeContent===!1}},fadeInset:{type:i.Number,title:"Inset",defaultValue:0,min:0,max:100,unit:"%",hidden(n){return n.fadeContent===!1}},fadeAlpha:{type:i.Number,title:"Opacity",defaultValue:0,min:0,max:1,step:.05,hidden(n){return n.fadeContent===!1}}}},hoverFactor:{type:i.Number,title:"Hover",min:0,max:1,unit:"x",defaultValue:1,step:.1,displayStepper:!0,description:"Slows down the speed while you are hovering."}});var be={display:"flex",width:"100%",height:"100%",maxWidth:"100%",maxHeight:"100%",placeItems:"center",margin:0,padding:0,listStyleType:"none",textIndent:"none"},Pe={display:"flex",width:"100%",height:"100%",placeContent:"center",placeItems:"center",flexDirection:"column",color:"#96F",background:"rgba(136, 85, 255, 0.1)",fontSize:11,overflow:"hidden",padding:"20px 20px 30px 20px"},Fe={fontSize:32,marginBottom:10},je={margin:0,marginBottom:10,fontWeight:600,textAlign:"center"},De={margin:0,opacity:.7,maxWidth:150,lineHeight:1.5,textAlign:"center"},Xe=(n,A,S)=>Math.min(Math.max(n,A),S),ve=n=>typeof n=="number"&&!isNaN(n);export{U as a};
//# sourceMappingURL=chunk-55E5O6TJ.mjs.map