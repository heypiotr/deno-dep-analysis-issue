import"./chunk-JXOLF6V7.mjs";var c={};function s(n,e){for(var r=0;r<e.length;r++)c[e[r]]=n}var a=["true","false"],k=["if","then","do","else","elif","while","until","for","in","esac","fi","fin","fil","done","exit","set","unset","export","function"],h=["ab","awk","bash","beep","cat","cc","cd","chown","chmod","chroot","clear","cp","curl","cut","diff","echo","find","gawk","gcc","get","git","grep","hg","kill","killall","ln","ls","make","mkdir","openssl","mv","nc","nl","node","npm","ping","ps","restart","rm","rmdir","sed","service","sh","shopt","shred","source","sort","sleep","ssh","start","stop","su","sudo","svn","tee","telnet","top","touch","vi","vim","wall","wc","wget","who","write","yes","zsh"];s("atom",a);s("keyword",k);s("builtin",h);function d(n,e){if(n.eatSpace())return null;var r=n.sol(),t=n.next();if(t==="\\")return n.next(),null;if(t==="'"||t==='"'||t==="`")return e.tokens.unshift(u(t,t==="`"?"quote":"string")),f(n,e);if(t==="#")return r&&n.eat("!")?(n.skipToEnd(),"meta"):(n.skipToEnd(),"comment");if(t==="$")return e.tokens.unshift(p),f(n,e);if(t==="+"||t==="=")return"operator";if(t==="-")return n.eat("-"),n.eatWhile(/\w/),"attribute";if(t=="<"){if(n.match("<<"))return"operator";var o=n.match(/^<-?\s*['"]?([^'"]*)['"]?/);if(o)return e.tokens.unshift(g(o[1])),"string.special"}if(/\d/.test(t)&&(n.eatWhile(/\d/),n.eol()||!/\w/.test(n.peek())))return"number";n.eatWhile(/[\w-]/);var i=n.current();return n.peek()==="="&&/\w+/.test(i)?"def":c.hasOwnProperty(i)?c[i]:null}function u(n,e){var r=n=="("?")":n=="{"?"}":n;return function(t,o){for(var i,l=!1;(i=t.next())!=null;){if(i===r&&!l){o.tokens.shift();break}else if(i==="$"&&!l&&n!=="'"&&t.peek()!=r){l=!0,t.backUp(1),o.tokens.unshift(p);break}else{if(!l&&n!==r&&i===n)return o.tokens.unshift(u(n,e)),f(t,o);if(!l&&/['"]/.test(i)&&!/['"]/.test(n)){o.tokens.unshift(v(i,"string")),t.backUp(1);break}}l=!l&&i==="\\"}return e}}function v(n,e){return function(r,t){return t.tokens[0]=u(n,e),r.next(),f(r,t)}}var p=function(n,e){e.tokens.length>1&&n.eat("$");var r=n.next();return/['"({]/.test(r)?(e.tokens[0]=u(r,r=="("?"quote":r=="{"?"def":"string"),f(n,e)):(/\d/.test(r)||n.eatWhile(/\w/),e.tokens.shift(),"def")};function g(n){return function(e,r){return e.sol()&&e.string==n&&r.tokens.shift(),e.skipToEnd(),"string.special"}}function f(n,e){return(e.tokens[0]||d)(n,e)}var _={name:"shell",startState:function(){return{tokens:[]}},token:function(n,e){return f(n,e)},languageData:{autocomplete:a.concat(k,h),closeBrackets:{brackets:["(","[","{","'",'"',"`"]},commentTokens:{line:"#"}}};var y={exports:{shell:{type:"variable",annotations:{framerContractVersion:"1"}},__FramerMetadata__:{type:"variable"}}};export{y as __FramerMetadata__,_ as shell};
//# sourceMappingURL=codemirror_legacy_modes_mode_shell-4HANPHHX.mjs.map