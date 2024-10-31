import"./chunk-JXOLF6V7.mjs";function k(e){for(var i={},n=0,o=e.length;n<o;++n)i[e[n]]=!0;return i}var v=["alias","and","BEGIN","begin","break","case","class","def","defined?","do","else","elsif","END","end","ensure","false","for","if","in","module","next","not","or","redo","rescue","retry","return","self","super","then","true","undef","unless","until","when","while","yield","nil","raise","throw","catch","fail","loop","callcc","caller","lambda","proc","public","protected","private","require","load","require_relative","extend","autoload","__END__","__FILE__","__LINE__","__dir__"],_=k(v),x=k(["def","class","case","for","while","until","module","catch","loop","proc","begin"]),b=k(["end","until"]),h={"[":"]","{":"}","(":")"},z={"]":"[","}":"{",")":"("},t;function c(e,i,n){return n.tokenize.push(e),e(i,n)}function d(e,i){if(e.sol()&&e.match("=begin")&&e.eol())return i.tokenize.push(w),"comment";if(e.eatSpace())return null;var n=e.next(),o;if(n=="`"||n=="'"||n=='"')return c(a(n,"string",n=='"'||n=="`"),e,i);if(n=="/")return g(e)?c(a(n,"string.special",!0),e,i):"operator";if(n=="%"){var l="string",r=!0;e.eat("s")?l="atom":e.eat(/[WQ]/)?l="string":e.eat(/[r]/)?l="string.special":e.eat(/[wxq]/)&&(l="string",r=!1);var f=e.eat(/[^\w\s=]/);return f?(h.propertyIsEnumerable(f)&&(f=h[f]),c(a(f,l,r,!0),e,i)):"operator"}else{if(n=="#")return e.skipToEnd(),"comment";if(n=="<"&&(o=e.match(/^<([-~])[\`\"\']?([a-zA-Z_?]\w*)[\`\"\']?(?:;|$)/)))return c(s(o[2],o[1]),e,i);if(n=="0")return e.eat("x")?e.eatWhile(/[\da-fA-F]/):e.eat("b")?e.eatWhile(/[01]/):e.eatWhile(/[0-7]/),"number";if(/\d/.test(n))return e.match(/^[\d_]*(?:\.[\d_]+)?(?:[eE][+\-]?[\d_]+)?/),"number";if(n=="?"){for(;e.match(/^\\[CM]-/););return e.eat("\\")?e.eatWhile(/\w/):e.next(),"string"}else{if(n==":")return e.eat("'")?c(a("'","atom",!1),e,i):e.eat('"')?c(a('"',"atom",!0),e,i):e.eat(/[\<\>]/)?(e.eat(/[\<\>]/),"atom"):e.eat(/[\+\-\*\/\&\|\:\!]/)?"atom":e.eat(/[a-zA-Z$@_\xa1-\uffff]/)?(e.eatWhile(/[\w$\xa1-\uffff]/),e.eat(/[\?\!\=]/),"atom"):"operator";if(n=="@"&&e.match(/^@?[a-zA-Z_\xa1-\uffff]/))return e.eat("@"),e.eatWhile(/[\w\xa1-\uffff]/),"propertyName";if(n=="$")return e.eat(/[a-zA-Z_]/)?e.eatWhile(/[\w]/):e.eat(/\d/)?e.eat(/\d/):e.next(),"variableName.special";if(/[a-zA-Z_\xa1-\uffff]/.test(n))return e.eatWhile(/[\w\xa1-\uffff]/),e.eat(/[\?\!]/),e.eat(":")?"atom":"variable";if(n=="|"&&(i.varList||i.lastTok=="{"||i.lastTok=="do"))return t="|",null;if(/[\(\)\[\]{}\\;]/.test(n))return t=n,null;if(n=="-"&&e.eat(">"))return"operator";if(/[=+\-\/*:\.^%<>~|]/.test(n)){var u=e.eatWhile(/[=+\-\/*:\.^%<>~|]/);return n=="."&&!u&&(t="."),"operator"}else return null}}}function g(e){for(var i=e.pos,n=0,o,l=!1,r=!1;(o=e.next())!=null;)if(r)r=!1;else{if("[{(".indexOf(o)>-1)n++;else if("]})".indexOf(o)>-1){if(n--,n<0)break}else if(o=="/"&&n==0){l=!0;break}r=o=="\\"}return e.backUp(e.pos-i),l}function p(e){return e||(e=1),function(i,n){if(i.peek()=="}"){if(e==1)return n.tokenize.pop(),n.tokenize[n.tokenize.length-1](i,n);n.tokenize[n.tokenize.length-1]=p(e-1)}else i.peek()=="{"&&(n.tokenize[n.tokenize.length-1]=p(e+1));return d(i,n)}}function y(){var e=!1;return function(i,n){return e?(n.tokenize.pop(),n.tokenize[n.tokenize.length-1](i,n)):(e=!0,d(i,n))}}function a(e,i,n,o){return function(l,r){var f=!1,u;for(r.context.type==="read-quoted-paused"&&(r.context=r.context.prev,l.eat("}"));(u=l.next())!=null;){if(u==e&&(o||!f)){r.tokenize.pop();break}if(n&&u=="#"&&!f){if(l.eat("{")){e=="}"&&(r.context={prev:r.context,type:"read-quoted-paused"}),r.tokenize.push(p());break}else if(/[@\$]/.test(l.peek())){r.tokenize.push(y());break}}f=!f&&u=="\\"}return i}}function s(e,i){return function(n,o){return i&&n.eatSpace(),n.match(e)?o.tokenize.pop():n.skipToEnd(),"string"}}function w(e,i){return e.sol()&&e.match("=end")&&e.eol()&&i.tokenize.pop(),e.skipToEnd(),"comment"}var L={name:"ruby",startState:function(e){return{tokenize:[d],indented:0,context:{type:"top",indented:-e},continuedLine:!1,lastTok:null,varList:!1}},token:function(e,i){t=null,e.sol()&&(i.indented=e.indentation());var n=i.tokenize[i.tokenize.length-1](e,i),o,l=t;if(n=="variable"){var r=e.current();n=i.lastTok=="."?"property":_.propertyIsEnumerable(e.current())?"keyword":/^[A-Z]/.test(r)?"tag":i.lastTok=="def"||i.lastTok=="class"||i.varList?"def":"variable",n=="keyword"&&(l=r,x.propertyIsEnumerable(r)?o="indent":b.propertyIsEnumerable(r)?o="dedent":((r=="if"||r=="unless")&&e.column()==e.indentation()||r=="do"&&i.context.indented<i.indented)&&(o="indent"))}return(t||n&&n!="comment")&&(i.lastTok=l),t=="|"&&(i.varList=!i.varList),o=="indent"||/[\(\[\{]/.test(t)?i.context={prev:i.context,type:t||n,indented:i.indented}:(o=="dedent"||/[\)\]\}]/.test(t))&&i.context.prev&&(i.context=i.context.prev),e.eol()&&(i.continuedLine=t=="\\"||n=="operator"),n},indent:function(e,i,n){if(e.tokenize[e.tokenize.length-1]!=d)return null;var o=i&&i.charAt(0),l=e.context,r=l.type==z[o]||l.type=="keyword"&&/^(?:end|until|else|elsif|when|rescue)\b/.test(i);return l.indented+(r?0:n.unit)+(e.continuedLine?n.unit:0)},languageData:{indentOnInput:/^\s*(?:end|rescue|elsif|else|\})$/,commentTokens:{line:"#"},autocomplete:v}};var I={exports:{ruby:{type:"variable",annotations:{framerContractVersion:"1"}},__FramerMetadata__:{type:"variable"}}};export{I as __FramerMetadata__,L as ruby};
//# sourceMappingURL=codemirror_legacy_modes_mode_ruby-Q23X3SWW.mjs.map