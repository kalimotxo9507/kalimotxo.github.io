(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{355:function(e,t,n){"use strict";n(13),n(9),n(6),n(4),n(10);var r=n(1),o=(n(382),n(356)),l=n(357),c=n(76),d=n(27);function m(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,n)}return t}t.a=Object(d.a)(c.a).extend({name:"v-breadcrumbs",props:{divider:{type:String,default:"/"},items:{type:Array,default:function(){return[]}},large:Boolean},computed:{classes:function(){return function(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?m(Object(source),!0).forEach((function(t){Object(r.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):m(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}({"v-breadcrumbs--large":this.large},this.themeClasses)}},methods:{genDivider:function(){return this.$createElement(o.a,this.$slots.divider?this.$slots.divider:this.divider)},genItems:function(){for(var e=[],t=!!this.$scopedSlots.item,n=[],i=0;i<this.items.length;i++){var r=this.items[i];n.push(r.text),t?e.push(this.$scopedSlots.item({item:r})):e.push(this.$createElement(l.a,{key:n.join("."),props:r},[r.text])),i<this.items.length-1&&e.push(this.genDivider())}return e}},render:function(e){var t=this.$slots.default||this.genItems();return e("ul",{staticClass:"v-breadcrumbs",class:this.classes},t)}})},356:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var r=n(355),o=n(357),l=n(3),c=Object(l.e)("v-breadcrumbs__divider","li");r.a,o.a},357:function(e,t,n){"use strict";n(13),n(9),n(6),n(4),n(10);var r=n(1),o=n(97),l=n(27);function c(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,n)}return t}function d(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(t){Object(r.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}t.a=Object(l.a)(o.a).extend({name:"v-breadcrumbs-item",props:{activeClass:{type:String,default:"v-breadcrumbs__item--disabled"},ripple:{type:[Boolean,Object],default:!1}},computed:{classes:function(){return Object(r.a)({"v-breadcrumbs__item":!0},this.activeClass,this.disabled)}},render:function(e){var t=this.generateRouteLink(),n=t.tag,data=t.data;return e("li",[e(n,d(d({},data),{},{attrs:d(d({},data.attrs),{},{"aria-current":this.isActive&&this.isLink?"page":void 0})}),this.$slots.default)])}})},365:function(e,t,n){(function(t){var n=function(e){var t=/\blang(?:uage)?-([\w-]+)\b/i,n=0,r={manual:e.Prism&&e.Prism.manual,disableWorkerMessageHandler:e.Prism&&e.Prism.disableWorkerMessageHandler,util:{encode:function(e){return e instanceof o?new o(e.type,r.util.encode(e.content),e.alias):Array.isArray(e)?e.map(r.util.encode):e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ")},type:function(e){return Object.prototype.toString.call(e).slice(8,-1)},objId:function(e){return e.__id||Object.defineProperty(e,"__id",{value:++n}),e.__id},clone:function e(t,n){var o,l,c=r.util.type(t);switch(n=n||{},c){case"Object":if(l=r.util.objId(t),n[l])return n[l];for(var d in o={},n[l]=o,t)t.hasOwnProperty(d)&&(o[d]=e(t[d],n));return o;case"Array":return l=r.util.objId(t),n[l]?n[l]:(o=[],n[l]=o,t.forEach((function(t,i){o[i]=e(t,n)})),o);default:return t}}},languages:{extend:function(e,t){var n=r.util.clone(r.languages[e]);for(var o in t)n[o]=t[o];return n},insertBefore:function(e,t,n,o){var l=(o=o||r.languages)[e],c={};for(var d in l)if(l.hasOwnProperty(d)){if(d==t)for(var m in n)n.hasOwnProperty(m)&&(c[m]=n[m]);n.hasOwnProperty(d)||(c[d]=l[d])}var f=o[e];return o[e]=c,r.languages.DFS(r.languages,(function(t,n){n===f&&t!=e&&(this[t]=c)})),c},DFS:function e(t,n,o,l){l=l||{};var c=r.util.objId;for(var i in t)if(t.hasOwnProperty(i)){n.call(t,i,t[i],o||i);var d=t[i],m=r.util.type(d);"Object"!==m||l[c(d)]?"Array"!==m||l[c(d)]||(l[c(d)]=!0,e(d,n,i,l)):(l[c(d)]=!0,e(d,n,null,l))}}},plugins:{},highlightAll:function(e,t){r.highlightAllUnder(document,e,t)},highlightAllUnder:function(e,t,n){var o={callback:n,selector:'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'};r.hooks.run("before-highlightall",o);for(var element,l=e.querySelectorAll(o.selector),i=0;element=l[i++];)r.highlightElement(element,!0===t,o.callback)},highlightElement:function(element,n,o){for(var l,c="none",d=element;d&&!t.test(d.className);)d=d.parentNode;d&&(c=(d.className.match(t)||[,"none"])[1].toLowerCase(),l=r.languages[c]),element.className=element.className.replace(t,"").replace(/\s+/g," ")+" language-"+c,element.parentNode&&(d=element.parentNode,/pre/i.test(d.nodeName)&&(d.className=d.className.replace(t,"").replace(/\s+/g," ")+" language-"+c));var m={element:element,language:c,grammar:l,code:element.textContent},f=function(e){m.highlightedCode=e,r.hooks.run("before-insert",m),m.element.innerHTML=m.highlightedCode,r.hooks.run("after-highlight",m),r.hooks.run("complete",m),o&&o.call(m.element)};if(r.hooks.run("before-sanity-check",m),m.code)if(r.hooks.run("before-highlight",m),m.grammar)if(n&&e.Worker){var h=new Worker(r.filename);h.onmessage=function(e){f(e.data)},h.postMessage(JSON.stringify({language:m.language,code:m.code,immediateClose:!0}))}else f(r.highlight(m.code,m.grammar,m.language));else f(r.util.encode(m.code));else r.hooks.run("complete",m)},highlight:function(text,e,t){var n={code:text,grammar:e,language:t};return r.hooks.run("before-tokenize",n),n.tokens=r.tokenize(n.code,n.grammar),r.hooks.run("after-tokenize",n),o.stringify(r.util.encode(n.tokens),n.language)},matchGrammar:function(text,e,t,n,l,c,d){for(var m in t)if(t.hasOwnProperty(m)&&t[m]){if(m==d)return;var f=t[m];f="Array"===r.util.type(f)?f:[f];for(var h=0;h<f.length;++h){var pattern=f[h],y=pattern.inside,v=!!pattern.lookbehind,k=!!pattern.greedy,w=0,x=pattern.alias;if(k&&!pattern.pattern.global){var F=pattern.pattern.toString().match(/[imuy]*$/)[0];pattern.pattern=RegExp(pattern.pattern.source,F+"g")}pattern=pattern.pattern||pattern;for(var i=n,A=l;i<e.length;A+=e[i].length,++i){var O=e[i];if(e.length>text.length)return;if(!(O instanceof o)){if(k&&i!=e.length-1){if(pattern.lastIndex=A,!(P=pattern.exec(text)))break;for(var j=P.index+(v?P[1].length:0),S=P.index+P[0].length,_=i,p=A,$=e.length;_<$&&(p<S||!e[_].type&&!e[_-1].greedy);++_)j>=(p+=e[_].length)&&(++i,A=p);if(e[i]instanceof o)continue;C=_-i,O=text.slice(A,p),P.index-=A}else{pattern.lastIndex=0;var P=pattern.exec(O),C=1}if(P){v&&(w=P[1]?P[1].length:0);S=(j=P.index+w)+(P=P[0].slice(w)).length;var N=O.slice(0,j),E=O.slice(S),z=[i,C];N&&(++i,A+=N.length,z.push(N));var D=new o(m,y?r.tokenize(P,y):P,x,P,k);if(z.push(D),E&&z.push(E),Array.prototype.splice.apply(e,z),1!=C&&r.matchGrammar(text,e,t,i,A,!0,m),c)break}else if(c)break}}}}},tokenize:function(text,e){var t=[text],n=e.rest;if(n){for(var o in n)e[o]=n[o];delete e.rest}return r.matchGrammar(text,t,e,0,0,!1),t},hooks:{all:{},add:function(e,t){var n=r.hooks.all;n[e]=n[e]||[],n[e].push(t)},run:function(e,t){var n=r.hooks.all[e];if(n&&n.length)for(var o,i=0;o=n[i++];)o(t)}},Token:o};function o(e,content,t,n,r){this.type=e,this.content=content,this.alias=t,this.length=0|(n||"").length,this.greedy=!!r}if(e.Prism=r,o.stringify=function(e,t){if("string"==typeof e)return e;if(Array.isArray(e))return e.map((function(element){return o.stringify(element,t)})).join("");var n={type:e.type,content:o.stringify(e.content,t),tag:"span",classes:["token",e.type],attributes:{},language:t};if(e.alias){var l=Array.isArray(e.alias)?e.alias:[e.alias];Array.prototype.push.apply(n.classes,l)}r.hooks.run("wrap",n);var c=Object.keys(n.attributes).map((function(e){return e+'="'+(n.attributes[e]||"").replace(/"/g,"&quot;")+'"'})).join(" ");return"<"+n.tag+' class="'+n.classes.join(" ")+'"'+(c?" "+c:"")+">"+n.content+"</"+n.tag+">"},!e.document)return e.addEventListener?(r.disableWorkerMessageHandler||e.addEventListener("message",(function(t){var n=JSON.parse(t.data),o=n.language,code=n.code,l=n.immediateClose;e.postMessage(r.highlight(code,r.languages[o],o)),l&&e.close()}),!1),r):r;var script=document.currentScript||[].slice.call(document.getElementsByTagName("script")).pop();return script&&(r.filename=script.src,r.manual||script.hasAttribute("data-manual")||("loading"!==document.readyState?window.requestAnimationFrame?window.requestAnimationFrame(r.highlightAll):window.setTimeout(r.highlightAll,16):document.addEventListener("DOMContentLoaded",r.highlightAll))),r}("undefined"!=typeof window?window:"undefined"!=typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope?self:{});e.exports&&(e.exports=n),void 0!==t&&(t.Prism=n),n.languages.markup={comment:/<!--[\s\S]*?-->/,prolog:/<\?[\s\S]+?\?>/,doctype:/<!DOCTYPE[\s\S]+?>/i,cdata:/<!\[CDATA\[[\s\S]*?]]>/i,tag:{pattern:/<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/i,greedy:!0,inside:{tag:{pattern:/^<\/?[^\s>\/]+/i,inside:{punctuation:/^<\/?/,namespace:/^[^\s>\/:]+:/}},"attr-value":{pattern:/=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/i,inside:{punctuation:[/^=/,{pattern:/^(\s*)["']|["']$/,lookbehind:!0}]}},punctuation:/\/?>/,"attr-name":{pattern:/[^\s>\/]+/,inside:{namespace:/^[^\s>\/:]+:/}}}},entity:/&#?[\da-z]{1,8};/i},n.languages.markup.tag.inside["attr-value"].inside.entity=n.languages.markup.entity,n.hooks.add("wrap",(function(e){"entity"===e.type&&(e.attributes.title=e.content.replace(/&amp;/,"&"))})),Object.defineProperty(n.languages.markup.tag,"addInlined",{value:function(e,t){var r={};r["language-"+t]={pattern:/(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,lookbehind:!0,inside:n.languages[t]},r.cdata=/^<!\[CDATA\[|\]\]>$/i;var o={"included-cdata":{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,inside:r}};o["language-"+t]={pattern:/[\s\S]+/,inside:n.languages[t]};var l={};l[e]={pattern:RegExp(/(<__[\s\S]*?>)(?:<!\[CDATA\[[\s\S]*?\]\]>\s*|[\s\S])*?(?=<\/__>)/.source.replace(/__/g,e),"i"),lookbehind:!0,greedy:!0,inside:o},n.languages.insertBefore("markup","cdata",l)}}),n.languages.xml=n.languages.extend("markup",{}),n.languages.html=n.languages.markup,n.languages.mathml=n.languages.markup,n.languages.svg=n.languages.markup,function(e){var t=/("|')(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/;e.languages.css={comment:/\/\*[\s\S]*?\*\//,atrule:{pattern:/@[\w-]+[\s\S]*?(?:;|(?=\s*\{))/,inside:{rule:/@[\w-]+/}},url:{pattern:RegExp("url\\((?:"+t.source+"|[^\n\r()]*)\\)","i"),inside:{function:/^url/i,punctuation:/^\(|\)$/}},selector:RegExp("[^{}\\s](?:[^{};\"']|"+t.source+")*?(?=\\s*\\{)"),string:{pattern:t,greedy:!0},property:/[-_a-z\xA0-\uFFFF][-\w\xA0-\uFFFF]*(?=\s*:)/i,important:/!important\b/i,function:/[-a-z0-9]+(?=\()/i,punctuation:/[(){};:,]/},e.languages.css.atrule.inside.rest=e.languages.css;var n=e.languages.markup;n&&(n.tag.addInlined("style","css"),e.languages.insertBefore("inside","attr-value",{"style-attr":{pattern:/\s*style=("|')(?:\\[\s\S]|(?!\1)[^\\])*\1/i,inside:{"attr-name":{pattern:/^\s*style/i,inside:n.tag.inside},punctuation:/^\s*=\s*['"]|['"]\s*$/,"attr-value":{pattern:/.+/i,inside:e.languages.css}},alias:"language-css"}},n.tag))}(n),n.languages.clike={comment:[{pattern:/(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,lookbehind:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0,greedy:!0}],string:{pattern:/(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},"class-name":{pattern:/((?:\b(?:class|interface|extends|implements|trait|instanceof|new)\s+)|(?:catch\s+\())[\w.\\]+/i,lookbehind:!0,inside:{punctuation:/[.\\]/}},keyword:/\b(?:if|else|while|do|for|return|in|instanceof|function|new|try|throw|catch|finally|null|break|continue)\b/,boolean:/\b(?:true|false)\b/,function:/\w+(?=\()/,number:/\b0x[\da-f]+\b|(?:\b\d+\.?\d*|\B\.\d+)(?:e[+-]?\d+)?/i,operator:/--?|\+\+?|!=?=?|<=?|>=?|==?=?|&&?|\|\|?|\?|\*|\/|~|\^|%/,punctuation:/[{}[\];(),.:]/},n.languages.javascript=n.languages.extend("clike",{"class-name":[n.languages.clike["class-name"],{pattern:/(^|[^$\w\xA0-\uFFFF])[_$A-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\.(?:prototype|constructor))/,lookbehind:!0}],keyword:[{pattern:/((?:^|})\s*)(?:catch|finally)\b/,lookbehind:!0},{pattern:/(^|[^.])\b(?:as|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,lookbehind:!0}],number:/\b(?:(?:0[xX](?:[\dA-Fa-f](?:_[\dA-Fa-f])?)+|0[bB](?:[01](?:_[01])?)+|0[oO](?:[0-7](?:_[0-7])?)+)n?|(?:\d(?:_\d)?)+n|NaN|Infinity)\b|(?:\b(?:\d(?:_\d)?)+\.?(?:\d(?:_\d)?)*|\B\.(?:\d(?:_\d)?)+)(?:[Ee][+-]?(?:\d(?:_\d)?)+)?/,function:/#?[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,operator:/-[-=]?|\+[+=]?|!=?=?|<<?=?|>>?>?=?|=(?:==?|>)?|&[&=]?|\|[|=]?|\*\*?=?|\/=?|~|\^=?|%=?|\?|\.{3}/}),n.languages.javascript["class-name"][0].pattern=/(\b(?:class|interface|extends|implements|instanceof|new)\s+)[\w.\\]+/,n.languages.insertBefore("javascript","keyword",{regex:{pattern:/((?:^|[^$\w\xA0-\uFFFF."'\])\s])\s*)\/(\[(?:[^\]\\\r\n]|\\.)*]|\\.|[^/\\\[\r\n])+\/[gimyus]{0,6}(?=\s*($|[\r\n,.;})\]]))/,lookbehind:!0,greedy:!0},"function-variable":{pattern:/#?[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*)\s*=>))/,alias:"function"},parameter:[{pattern:/(function(?:\s+[_$A-Za-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*)?\s*\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\))/,lookbehind:!0,inside:n.languages.javascript},{pattern:/[_$a-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*=>)/i,inside:n.languages.javascript},{pattern:/(\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\)\s*=>)/,lookbehind:!0,inside:n.languages.javascript},{pattern:/((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:[_$A-Za-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*\s*)\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\)\s*\{)/,lookbehind:!0,inside:n.languages.javascript}],constant:/\b[A-Z](?:[A-Z_]|\dx?)*\b/}),n.languages.insertBefore("javascript","string",{"template-string":{pattern:/`(?:\\[\s\S]|\${(?:[^{}]|{(?:[^{}]|{[^}]*})*})+}|(?!\${)[^\\`])*`/,greedy:!0,inside:{"template-punctuation":{pattern:/^`|`$/,alias:"string"},interpolation:{pattern:/((?:^|[^\\])(?:\\{2})*)\${(?:[^{}]|{(?:[^{}]|{[^}]*})*})+}/,lookbehind:!0,inside:{"interpolation-punctuation":{pattern:/^\${|}$/,alias:"punctuation"},rest:n.languages.javascript}},string:/[\s\S]+/}}}),n.languages.markup&&n.languages.markup.tag.addInlined("script","javascript"),n.languages.js=n.languages.javascript,"undefined"!=typeof self&&self.Prism&&self.document&&document.querySelector&&(self.Prism.fileHighlight=function(e){e=e||document;var t={js:"javascript",py:"python",rb:"ruby",ps1:"powershell",psm1:"powershell",sh:"bash",bat:"batch",h:"c",tex:"latex"};Array.prototype.slice.call(e.querySelectorAll("pre[data-src]")).forEach((function(pre){if(!pre.hasAttribute("data-src-loaded")){for(var e,r=pre.getAttribute("data-src"),o=pre,l=/\blang(?:uage)?-([\w-]+)\b/i;o&&!l.test(o.className);)o=o.parentNode;if(o&&(e=(pre.className.match(l)||[,""])[1]),!e){var c=(r.match(/\.(\w+)$/)||[,""])[1];e=t[c]||c}var code=document.createElement("code");code.className="language-"+e,pre.textContent="",code.textContent="Loading…",pre.appendChild(code);var d=new XMLHttpRequest;d.open("GET",r,!0),d.onreadystatechange=function(){4==d.readyState&&(d.status<400&&d.responseText?(code.textContent=d.responseText,n.highlightElement(code),pre.setAttribute("data-src-loaded","")):d.status>=400?code.textContent="✖ Error "+d.status+" while fetching file: "+d.statusText:code.textContent="✖ Error: File does not exist or is empty")},d.send(null)}})),n.plugins.toolbar&&n.plugins.toolbar.registerButton("download-file",(function(e){var pre=e.element.parentNode;if(pre&&/pre/i.test(pre.nodeName)&&pre.hasAttribute("data-src")&&pre.hasAttribute("data-download-link")){var t=pre.getAttribute("data-src"),a=document.createElement("a");return a.textContent=pre.getAttribute("data-download-link-label")||"Download",a.setAttribute("download",""),a.href=t,a}}))},document.addEventListener("DOMContentLoaded",(function(){self.Prism.fileHighlight()})))}).call(this,n(57))},366:function(e,t,n){var content=n(367);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(17).default)("1b4296a6",content,!0,{sourceMap:!1})},367:function(e,t,n){(t=n(16)(!1)).push([e.i,'code[class*=language-],pre[class*=language-]{color:#f8f8f2;background:none;text-shadow:0 1px rgba(0,0,0,.3);font-family:Consolas,Monaco,"Andale Mono","Ubuntu Mono",monospace;font-size:1em;text-align:left;white-space:pre;word-spacing:normal;word-break:normal;word-wrap:normal;line-height:1.5;-moz-tab-size:4;-o-tab-size:4;tab-size:4;-webkit-hyphens:none;-ms-hyphens:none;hyphens:none}pre[class*=language-]{padding:1em;margin:.5em 0;overflow:auto;border-radius:.3em}:not(pre)>code[class*=language-],pre[class*=language-]{background:#272822}:not(pre)>code[class*=language-]{padding:.1em;border-radius:.3em;white-space:normal}.token.cdata,.token.comment,.token.doctype,.token.prolog{color:#708090}.token.punctuation{color:#f8f8f2}.namespace{opacity:.7}.token.constant,.token.deleted,.token.property,.token.symbol,.token.tag{color:#f92672}.token.boolean,.token.number{color:#ae81ff}.token.attr-name,.token.builtin,.token.char,.token.inserted,.token.selector,.token.string{color:#a6e22e}.language-css .token.string,.style .token.string,.token.entity,.token.operator,.token.url,.token.variable{color:#f8f8f2}.token.atrule,.token.attr-value,.token.class-name,.token.function{color:#e6db74}.token.keyword{color:#66d9ef}.token.important,.token.regex{color:#fd971f}.token.bold,.token.important{font-weight:700}.token.italic{font-style:italic}.token.entity{cursor:help}',""]),e.exports=t},368:function(e,t){!function(){if("undefined"!=typeof self&&self.Prism&&self.document){var e="line-numbers",t=/\n(?!$)/g,n=function(e){var n=a(e)["white-space"];if("pre-wrap"===n||"pre-line"===n){var r=e.querySelector("code"),o=e.querySelector(".line-numbers-rows"),s=e.querySelector(".line-numbers-sizer"),i=r.textContent.split(t);s||((s=document.createElement("span")).className="line-numbers-sizer",r.appendChild(s)),s.style.display="block",i.forEach((function(e,t){s.textContent=e||"\n";var n=s.getBoundingClientRect().height;o.children[t].style.height=n+"px"})),s.textContent="",s.style.display="none"}},a=function(e){return e?window.getComputedStyle?getComputedStyle(e):e.currentStyle||null:null};window.addEventListener("resize",(function(){Array.prototype.forEach.call(document.querySelectorAll("pre."+e),n)})),Prism.hooks.add("complete",(function(e){if(e.code){var r=e.element,o=r.parentNode;if(o&&/pre/i.test(o.nodeName)&&!r.querySelector(".line-numbers-rows")){for(var l=!1,s=/(?:^|\s)line-numbers(?:\s|$)/,i=r;i;i=i.parentNode)if(s.test(i.className)){l=!0;break}if(l){r.className=r.className.replace(s," "),s.test(o.className)||(o.className+=" line-numbers");var c,a=e.code.match(t),d=a?a.length+1:1,u=new Array(d+1).join("<span></span>");(c=document.createElement("span")).setAttribute("aria-hidden","true"),c.className="line-numbers-rows",c.innerHTML=u,o.hasAttribute("data-start")&&(o.style.counterReset="linenumber "+(parseInt(o.getAttribute("data-start"),10)-1)),e.element.appendChild(c),n(o),Prism.hooks.run("line-numbers",e)}}}})),Prism.hooks.add("line-numbers",(function(e){e.plugins=e.plugins||{},e.plugins.lineNumbers=!0})),Prism.plugins.lineNumbers={getLine:function(t,n){if("PRE"===t.tagName&&t.classList.contains(e)){var r=t.querySelector(".line-numbers-rows"),o=parseInt(t.getAttribute("data-start"),10)||1,s=o+(r.children.length-1);n<o&&(n=o),s<n&&(n=s);var i=n-o;return r.children[i]}}}}}()},369:function(e,t,n){var content=n(370);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(17).default)("2dc2f3ea",content,!0,{sourceMap:!1})},370:function(e,t,n){(t=n(16)(!1)).push([e.i,"pre[class*=language-].line-numbers{position:relative;padding-left:3.8em;counter-reset:linenumber}pre[class*=language-].line-numbers>code{position:relative;white-space:inherit}.line-numbers .line-numbers-rows{position:absolute;pointer-events:none;top:0;font-size:100%;left:-3.8em;width:3em;letter-spacing:-1px;border-right:1px solid #999;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.line-numbers-rows>span{pointer-events:none;display:block;counter-increment:linenumber}.line-numbers-rows>span:before{content:counter(linenumber);color:#999;display:block;padding-right:.8em;text-align:right}",""]),e.exports=t},382:function(e,t,n){var content=n(383);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(17).default)("b1bed018",content,!0,{sourceMap:!1})},383:function(e,t,n){(t=n(16)(!1)).push([e.i,".theme--light.v-breadcrumbs .v-breadcrumbs__divider,.theme--light.v-breadcrumbs .v-breadcrumbs__item--disabled{color:rgba(0,0,0,.38)}.theme--dark.v-breadcrumbs .v-breadcrumbs__divider,.theme--dark.v-breadcrumbs .v-breadcrumbs__item--disabled{color:hsla(0,0%,100%,.5)}.v-breadcrumbs{align-items:center;display:flex;flex-wrap:wrap;flex:0 1 auto;list-style-type:none;margin:0;padding:18px 12px}.v-breadcrumbs li{align-items:center;display:inline-flex;font-size:14px}.v-breadcrumbs li .v-icon{font-size:16px}.v-breadcrumbs li:nth-child(2n){padding:0 12px}.v-breadcrumbs__item{align-items:center;display:inline-flex;text-decoration:none;transition:.3s cubic-bezier(.25,.8,.5,1)}.v-breadcrumbs__item--disabled{pointer-events:none}.v-breadcrumbs--large li,.v-breadcrumbs--large li .v-icon{font-size:16px}",""]),e.exports=t}}]);