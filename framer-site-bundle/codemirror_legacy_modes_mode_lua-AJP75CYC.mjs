import"./chunk-JXOLF6V7.mjs";function c(e){return new RegExp("^(?:"+e.join("|")+")","i")}function o(e){return new RegExp("^(?:"+e.join("|")+")$","i")}var d=o(["_G","_VERSION","assert","collectgarbage","dofile","error","getfenv","getmetatable","ipairs","load","loadfile","loadstring","module","next","pairs","pcall","print","rawequal","rawget","rawset","require","select","setfenv","setmetatable","tonumber","tostring","type","unpack","xpcall","coroutine.create","coroutine.resume","coroutine.running","coroutine.status","coroutine.wrap","coroutine.yield","debug.debug","debug.getfenv","debug.gethook","debug.getinfo","debug.getlocal","debug.getmetatable","debug.getregistry","debug.getupvalue","debug.setfenv","debug.sethook","debug.setlocal","debug.setmetatable","debug.setupvalue","debug.traceback","close","flush","lines","read","seek","setvbuf","write","io.close","io.flush","io.input","io.lines","io.open","io.output","io.popen","io.read","io.stderr","io.stdin","io.stdout","io.tmpfile","io.type","io.write","math.abs","math.acos","math.asin","math.atan","math.atan2","math.ceil","math.cos","math.cosh","math.deg","math.exp","math.floor","math.fmod","math.frexp","math.huge","math.ldexp","math.log","math.log10","math.max","math.min","math.modf","math.pi","math.pow","math.rad","math.random","math.randomseed","math.sin","math.sinh","math.sqrt","math.tan","math.tanh","os.clock","os.date","os.difftime","os.execute","os.exit","os.getenv","os.remove","os.rename","os.setlocale","os.time","os.tmpname","package.cpath","package.loaded","package.loaders","package.loadlib","package.path","package.preload","package.seeall","string.byte","string.char","string.dump","string.find","string.format","string.gmatch","string.gsub","string.len","string.lower","string.match","string.rep","string.reverse","string.sub","string.upper","table.concat","table.insert","table.maxn","table.remove","table.sort"]),g=o(["and","break","elseif","false","nil","not","or","return","true","function","end","if","then","else","do","while","repeat","until","for","in","local"]),f=o(["function","if","repeat","do","\\(","{"]),h=o(["end","until","\\)","}"]),p=c(["end","until","\\)","}","else","elseif"]);function u(e){for(var t=0;e.eat("=");)++t;return e.eat("["),t}function l(e,t){var n=e.next();return n=="-"&&e.eat("-")?e.eat("[")&&e.eat("[")?(t.cur=s(u(e),"comment"))(e,t):(e.skipToEnd(),"comment"):n=='"'||n=="'"?(t.cur=m(n))(e,t):n=="["&&/[\[=]/.test(e.peek())?(t.cur=s(u(e),"string"))(e,t):/\d/.test(n)?(e.eatWhile(/[\w.%]/),"number"):/[\w_]/.test(n)?(e.eatWhile(/[\w\\\-_.]/),"variable"):null}function s(e,t){return function(n,a){for(var r=null,i;(i=n.next())!=null;)if(r==null)i=="]"&&(r=0);else if(i=="=")++r;else if(i=="]"&&r==e){a.cur=l;break}else r=null;return t}}function m(e){return function(t,n){for(var a=!1,r;(r=t.next())!=null&&!(r==e&&!a);)a=!a&&r=="\\";return a||(n.cur=l),"string"}}var w={name:"lua",startState:function(){return{basecol:0,indentDepth:0,cur:l}},token:function(e,t){if(e.eatSpace())return null;var n=t.cur(e,t),a=e.current();return n=="variable"&&(g.test(a)?n="keyword":d.test(a)&&(n="builtin")),n!="comment"&&n!="string"&&(f.test(a)?++t.indentDepth:h.test(a)&&--t.indentDepth),n},indent:function(e,t,n){var a=p.test(t);return e.basecol+n.unit*(e.indentDepth-(a?1:0))},languageData:{indentOnInput:/^\s*(?:end|until|else|\)|\})$/,commentTokens:{line:"--",block:{open:"--[[",close:"]]--"}}}};var x={exports:{lua:{type:"variable",annotations:{framerContractVersion:"1"}},__FramerMetadata__:{type:"variable"}}};export{x as __FramerMetadata__,w as lua};
//# sourceMappingURL=codemirror_legacy_modes_mode_lua-AJP75CYC.mjs.map
