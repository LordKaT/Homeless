import{E as e,V as t,b as i,a as s,c as n,r as o,h as r,W as l,d as a,e as c,f as h,i as d,j as u,m as f,n as m,o as p,k as g}from"./codemirror_view-Bw06hiJi.js";import{StateField as v,StateEffect as x,Prec as b,EditorSelection as w,Facet as y,combineConfig as k,codePointAt as M,fromCodePoint as S,codePointSize as C,CharCategory as A,EditorState as L,RangeSetBuilder as q,findClusterBreak as R}from"./codemirror_state-1UkzIAPK.js";import{k as D,l as W,m as F,n as I,o as P,p as E}from"./codemirror_language-cXJOUjg0.js";import{history as O,defaultKeymap as $,historyKeymap as T}from"./codemirror_commands-DLMwt5oR.js";import{a as z,b as B,d as j,e as _}from"./index-CXAjLJiH.js";function V(){var e=arguments[0];"string"==typeof e&&(e=document.createElement(e));var t=1,i=arguments[1];if(i&&"object"==typeof i&&null==i.nodeType&&!Array.isArray(i)){for(var s in i)if(Object.prototype.hasOwnProperty.call(i,s)){var n=i[s];"string"==typeof n?e.setAttribute(s,n):null!=n&&(e[s]=n)}t++}for(;t<arguments.length;t++)H(e,arguments[t]);return e}function H(e,t){if("string"==typeof t)e.appendChild(document.createTextNode(t));else if(null==t);else if(null!=t.nodeType)e.appendChild(t);else{if(!Array.isArray(t))throw new RangeError("Unsupported child node: "+t);for(var i=0;i<t.length;i++)H(e,t[i])}}const N="function"==typeof String.prototype.normalize?e=>e.normalize("NFKD"):e=>e;class U{constructor(e,t,i=0,s=e.length,n,o){this.test=o,this.value={from:0,to:0},this.done=!1,this.matches=[],this.buffer="",this.bufferPos=0,this.iter=e.iterRange(i,s),this.bufferStart=i,this.normalize=n?e=>n(N(e)):N,this.query=this.normalize(t)}peek(){if(this.bufferPos==this.buffer.length){if(this.bufferStart+=this.buffer.length,this.iter.next(),this.iter.done)return-1;this.bufferPos=0,this.buffer=this.iter.value}return M(this.buffer,this.bufferPos)}next(){for(;this.matches.length;)this.matches.pop();return this.nextOverlapping()}nextOverlapping(){for(;;){let e=this.peek();if(e<0)return this.done=!0,this;let t=S(e),i=this.bufferStart+this.bufferPos;this.bufferPos+=C(e);let s=this.normalize(t);if(s.length)for(let e=0,n=i;;e++){let o=s.charCodeAt(e),r=this.match(o,n,this.bufferPos+this.bufferStart);if(e==s.length-1){if(r)return this.value=r,this;break}n==i&&e<t.length&&t.charCodeAt(e)==o&&n++}}}match(e,t,i){let s=null;for(let t=0;t<this.matches.length;t+=2){let n=this.matches[t],o=!1;this.query.charCodeAt(n)==e&&(n==this.query.length-1?s={from:this.matches[t+1],to:i}:(this.matches[t]++,o=!0)),o||(this.matches.splice(t,2),t-=2)}return this.query.charCodeAt(0)==e&&(1==this.query.length?s={from:t,to:i}:this.matches.push(1,t)),s&&this.test&&!this.test(s.from,s.to,this.buffer,this.bufferStart)&&(s=null),s}}"undefined"!=typeof Symbol&&(U.prototype[Symbol.iterator]=function(){return this});const K={from:-1,to:-1,match:/.*/.exec("")},Q="gm"+(null==/x/.unicode?"":"u");class G{constructor(e,t,i,s=0,n=e.length){if(this.text=e,this.to=n,this.curLine="",this.done=!1,this.value=K,/\\[sWDnr]|\n|\r|\[\^/.test(t))return new J(e,t,i,s,n);this.re=new RegExp(t,Q+((null==i?void 0:i.ignoreCase)?"i":"")),this.test=null==i?void 0:i.test,this.iter=e.iter();let o=e.lineAt(s);this.curLineStart=o.from,this.matchPos=X(e,s),this.getLine(this.curLineStart)}getLine(e){this.iter.next(e),this.iter.lineBreak?this.curLine="":(this.curLine=this.iter.value,this.curLineStart+this.curLine.length>this.to&&(this.curLine=this.curLine.slice(0,this.to-this.curLineStart)),this.iter.next())}nextLine(){this.curLineStart=this.curLineStart+this.curLine.length+1,this.curLineStart>this.to?this.curLine="":this.getLine(0)}next(){for(let e=this.matchPos-this.curLineStart;;){this.re.lastIndex=e;let t=this.matchPos<=this.to&&this.re.exec(this.curLine);if(t){let i=this.curLineStart+t.index,s=i+t[0].length;if(this.matchPos=X(this.text,s+(i==s?1:0)),i==this.curLineStart+this.curLine.length&&this.nextLine(),(i<s||i>this.value.to)&&(!this.test||this.test(i,s,t)))return this.value={from:i,to:s,match:t},this;e=this.matchPos-this.curLineStart}else{if(!(this.curLineStart+this.curLine.length<this.to))return this.done=!0,this;this.nextLine(),e=0}}}}const Y=new WeakMap;class Z{constructor(e,t){this.from=e,this.text=t}get to(){return this.from+this.text.length}static get(e,t,i){let s=Y.get(e);if(!s||s.from>=i||s.to<=t){let s=new Z(t,e.sliceString(t,i));return Y.set(e,s),s}if(s.from==t&&s.to==i)return s;let{text:n,from:o}=s;return o>t&&(n=e.sliceString(t,o)+n,o=t),s.to<i&&(n+=e.sliceString(s.to,i)),Y.set(e,new Z(o,n)),new Z(t,n.slice(t-o,i-o))}}class J{constructor(e,t,i,s,n){this.text=e,this.to=n,this.done=!1,this.value=K,this.matchPos=X(e,s),this.re=new RegExp(t,Q+((null==i?void 0:i.ignoreCase)?"i":"")),this.test=null==i?void 0:i.test,this.flat=Z.get(e,s,this.chunkEnd(s+5e3))}chunkEnd(e){return e>=this.to?this.to:this.text.lineAt(e).to}next(){for(;;){let e=this.re.lastIndex=this.matchPos-this.flat.from,t=this.re.exec(this.flat.text);if(t&&!t[0]&&t.index==e&&(this.re.lastIndex=e+1,t=this.re.exec(this.flat.text)),t){let e=this.flat.from+t.index,i=e+t[0].length;if((this.flat.to>=this.to||t.index+t[0].length<=this.flat.text.length-10)&&(!this.test||this.test(e,i,t)))return this.value={from:e,to:i,match:t},this.matchPos=X(this.text,i+(e==i?1:0)),this}if(this.flat.to==this.to)return this.done=!0,this;this.flat=Z.get(this.text,this.flat.from,this.chunkEnd(this.flat.from+2*this.flat.text.length))}}}function X(e,t){if(t>=e.length)return t;let i,s=e.lineAt(t);for(;t<s.to&&(i=s.text.charCodeAt(t-s.from))>=56320&&i<57344;)t++;return t}function ee(t){let i=V("input",{class:"cm-textfield",name:"line",value:String(t.state.doc.lineAt(t.state.selection.main.head).number)});function s(){let s=/^([+-])?(\d+)?(:\d+)?(%)?$/.exec(i.value);if(!s)return;let{state:n}=t,o=n.doc.lineAt(n.selection.main.head),[,r,l,a,c]=s,h=a?+a.slice(1):0,d=l?+l:o.number;if(l&&c){let e=d/100;r&&(e=e*("-"==r?-1:1)+o.number/n.doc.lines),d=Math.round(n.doc.lines*e)}else l&&r&&(d=d*("-"==r?-1:1)+o.number);let u=n.doc.line(Math.max(1,Math.min(n.doc.lines,d))),f=w.cursor(u.from+Math.max(0,Math.min(h,u.length)));t.dispatch({effects:[te.of(!1),e.scrollIntoView(f.from,{y:"center"})],selection:f}),t.focus()}return{dom:V("form",{class:"cm-gotoLine",onkeydown:e=>{27==e.keyCode?(e.preventDefault(),t.dispatch({effects:te.of(!1)}),t.focus()):13==e.keyCode&&(e.preventDefault(),s())},onsubmit:e=>{e.preventDefault(),s()}},V("label",t.state.phrase("Go to line"),": ",i)," ",V("button",{class:"cm-button",type:"submit"},t.state.phrase("go")),V("button",{name:"close",onclick:()=>{t.dispatch({effects:te.of(!1)}),t.focus()},"aria-label":t.state.phrase("close"),type:"button"},["×"]))}}"undefined"!=typeof Symbol&&(G.prototype[Symbol.iterator]=J.prototype[Symbol.iterator]=function(){return this});const te=x.define(),ie=v.define({create:()=>!0,update(e,t){for(let i of t.effects)i.is(te)&&(e=i.value);return e},provide:e=>n.from(e,(e=>e?ee:null))}),se=e.baseTheme({".cm-panel.cm-gotoLine":{padding:"2px 6px 4px",position:"relative","& label":{fontSize:"80%"},"& [name=close]":{position:"absolute",top:"0",bottom:"0",right:"4px",backgroundColor:"inherit",border:"none",font:"inherit",padding:"0"}}}),ne={highlightWordAroundCursor:!1,minSelectionLength:1,maxMatches:100,wholeWords:!1},oe=y.define({combine:e=>k(e,ne,{highlightWordAroundCursor:(e,t)=>e||t,minSelectionLength:Math.min,maxMatches:Math.min})});const re=s.mark({class:"cm-selectionMatch"}),le=s.mark({class:"cm-selectionMatch cm-selectionMatch-main"});function ae(e,t,i,s){return!(0!=i&&e(t.sliceDoc(i-1,i))==A.Word||s!=t.doc.length&&e(t.sliceDoc(s,s+1))==A.Word)}const ce=t.fromClass(class{constructor(e){this.decorations=this.getDeco(e)}update(e){(e.selectionSet||e.docChanged||e.viewportChanged)&&(this.decorations=this.getDeco(e.view))}getDeco(e){let t=e.state.facet(oe),{state:i}=e,n=i.selection;if(n.ranges.length>1)return s.none;let o,r=n.main,l=null;if(r.empty){if(!t.highlightWordAroundCursor)return s.none;let e=i.wordAt(r.head);if(!e)return s.none;l=i.charCategorizer(r.head),o=i.sliceDoc(e.from,e.to)}else{let e=r.to-r.from;if(e<t.minSelectionLength||e>200)return s.none;if(t.wholeWords){if(o=i.sliceDoc(r.from,r.to),l=i.charCategorizer(r.head),!ae(l,i,r.from,r.to)||!function(e,t,i,s){return e(t.sliceDoc(i,i+1))==A.Word&&e(t.sliceDoc(s-1,s))==A.Word}(l,i,r.from,r.to))return s.none}else if(o=i.sliceDoc(r.from,r.to),!o)return s.none}let a=[];for(let n of e.visibleRanges){let e=new U(i.doc,o,n.from,n.to);for(;!e.next().done;){let{from:n,to:o}=e.value;if((!l||ae(l,i,n,o))&&(r.empty&&n<=r.from&&o>=r.to?a.push(le.range(n,o)):(n>=r.to||o<=r.from)&&a.push(re.range(n,o)),a.length>t.maxMatches))return s.none}}return s.set(a)}},{decorations:e=>e.decorations}),he=e.baseTheme({".cm-selectionMatch":{backgroundColor:"#99ff7780"},".cm-searchMatch .cm-selectionMatch":{backgroundColor:"transparent"}});const de=y.define({combine:t=>k(t,{top:!1,caseSensitive:!1,literal:!1,regexp:!1,wholeWord:!1,createPanel:e=>new Be(e),scrollToMatch:t=>e.scrollIntoView(t)})});class ue{constructor(e){this.search=e.search,this.caseSensitive=!!e.caseSensitive,this.literal=!!e.literal,this.regexp=!!e.regexp,this.replace=e.replace||"",this.valid=!!this.search&&(!this.regexp||function(e){try{return new RegExp(e,Q),!0}catch(e){return!1}}(this.search)),this.unquoted=this.unquote(this.search),this.wholeWord=!!e.wholeWord}unquote(e){return this.literal?e:e.replace(/\\([nrt\\])/g,((e,t)=>"n"==t?"\n":"r"==t?"\r":"t"==t?"\t":"\\"))}eq(e){return this.search==e.search&&this.replace==e.replace&&this.caseSensitive==e.caseSensitive&&this.regexp==e.regexp&&this.wholeWord==e.wholeWord}create(){return this.regexp?new be(this):new pe(this)}getCursor(e,t=0,i){let s=e.doc?e:L.create({doc:e});return null==i&&(i=s.doc.length),this.regexp?ge(this,s,t,i):me(this,s,t,i)}}class fe{constructor(e){this.spec=e}}function me(e,t,i,s){return new U(t.doc,e.unquoted,i,s,e.caseSensitive?void 0:e=>e.toLowerCase(),e.wholeWord?(n=t.doc,o=t.charCategorizer(t.selection.main.head),(e,t,i,s)=>((s>e||s+i.length<t)&&(s=Math.max(0,e-2),i=n.sliceString(s,Math.min(n.length,t+2))),!(o(ve(i,e-s))==A.Word&&o(xe(i,e-s))==A.Word||o(xe(i,t-s))==A.Word&&o(ve(i,t-s))==A.Word))):void 0);var n,o}class pe extends fe{constructor(e){super(e)}nextMatch(e,t,i){let s=me(this.spec,e,i,e.doc.length).nextOverlapping();if(s.done){let i=Math.min(e.doc.length,t+this.spec.unquoted.length);s=me(this.spec,e,0,i).nextOverlapping()}return s.done||s.value.from==t&&s.value.to==i?null:s.value}prevMatchInRange(e,t,i){for(let s=i;;){let i=Math.max(t,s-1e4-this.spec.unquoted.length),n=me(this.spec,e,i,s),o=null;for(;!n.nextOverlapping().done;)o=n.value;if(o)return o;if(i==t)return null;s-=1e4}}prevMatch(e,t,i){let s=this.prevMatchInRange(e,0,t);return s||(s=this.prevMatchInRange(e,Math.max(0,i-this.spec.unquoted.length),e.doc.length)),!s||s.from==t&&s.to==i?null:s}getReplacement(e){return this.spec.unquote(this.spec.replace)}matchAll(e,t){let i=me(this.spec,e,0,e.doc.length),s=[];for(;!i.next().done;){if(s.length>=t)return null;s.push(i.value)}return s}highlight(e,t,i,s){let n=me(this.spec,e,Math.max(0,t-this.spec.unquoted.length),Math.min(i+this.spec.unquoted.length,e.doc.length));for(;!n.next().done;)s(n.value.from,n.value.to)}}function ge(e,t,i,s){return new G(t.doc,e.search,{ignoreCase:!e.caseSensitive,test:e.wholeWord?(n=t.charCategorizer(t.selection.main.head),(e,t,i)=>!i[0].length||(n(ve(i.input,i.index))!=A.Word||n(xe(i.input,i.index))!=A.Word)&&(n(xe(i.input,i.index+i[0].length))!=A.Word||n(ve(i.input,i.index+i[0].length))!=A.Word)):void 0},i,s);var n}function ve(e,t){return e.slice(R(e,t,!1),t)}function xe(e,t){return e.slice(t,R(e,t))}class be extends fe{nextMatch(e,t,i){let s=ge(this.spec,e,i,e.doc.length).next();return s.done&&(s=ge(this.spec,e,0,t).next()),s.done?null:s.value}prevMatchInRange(e,t,i){for(let s=1;;s++){let n=Math.max(t,i-1e4*s),o=ge(this.spec,e,n,i),r=null;for(;!o.next().done;)r=o.value;if(r&&(n==t||r.from>n+10))return r;if(n==t)return null}}prevMatch(e,t,i){return this.prevMatchInRange(e,0,t)||this.prevMatchInRange(e,i,e.doc.length)}getReplacement(e){return this.spec.unquote(this.spec.replace).replace(/\$([$&]|\d+)/g,((t,i)=>{if("&"==i)return e.match[0];if("$"==i)return"$";for(let t=i.length;t>0;t--){let s=+i.slice(0,t);if(s>0&&s<e.match.length)return e.match[s]+i.slice(t)}return t}))}matchAll(e,t){let i=ge(this.spec,e,0,e.doc.length),s=[];for(;!i.next().done;){if(s.length>=t)return null;s.push(i.value)}return s}highlight(e,t,i,s){let n=ge(this.spec,e,Math.max(0,t-250),Math.min(i+250,e.doc.length));for(;!n.next().done;)s(n.value.from,n.value.to)}}const we=x.define(),ye=x.define(),ke=v.define({create:e=>new Me(Pe(e).create(),null),update(e,t){for(let i of t.effects)i.is(we)?e=new Me(i.value.create(),e.panel):i.is(ye)&&(e=new Me(e.query,i.value?Ie:null));return e},provide:e=>n.from(e,(e=>e.panel))});class Me{constructor(e,t){this.query=e,this.panel=t}}const Se=s.mark({class:"cm-searchMatch"}),Ce=s.mark({class:"cm-searchMatch cm-searchMatch-selected"}),Ae=t.fromClass(class{constructor(e){this.view=e,this.decorations=this.highlight(e.state.field(ke))}update(e){let t=e.state.field(ke);(t!=e.startState.field(ke)||e.docChanged||e.selectionSet||e.viewportChanged)&&(this.decorations=this.highlight(t))}highlight({query:e,panel:t}){if(!t||!e.spec.valid)return s.none;let{view:i}=this,n=new q;for(let t=0,s=i.visibleRanges,o=s.length;t<o;t++){let{from:r,to:l}=s[t];for(;t<o-1&&l>s[t+1].from-500;)l=s[++t].to;e.highlight(i.state,r,l,((e,t)=>{let s=i.state.selection.ranges.some((i=>i.from==e&&i.to==t));n.add(e,t,s?Ce:Se)}))}return n.finish()}},{decorations:e=>e.decorations});function Le(e){return t=>{let i=t.state.field(ke,!1);return i&&i.query.spec.valid?e(t,i):$e(t)}}const qe=Le(((e,{query:t})=>{let{to:i}=e.state.selection.main,s=t.nextMatch(e.state,i,i);if(!s)return!1;let n=w.single(s.from,s.to),o=e.state.facet(de);return e.dispatch({selection:n,effects:[He(e,s),o.scrollToMatch(n.main,e)],userEvent:"select.search"}),Oe(e),!0})),Re=Le(((e,{query:t})=>{let{state:i}=e,{from:s}=i.selection.main,n=t.prevMatch(i,s,s);if(!n)return!1;let o=w.single(n.from,n.to),r=e.state.facet(de);return e.dispatch({selection:o,effects:[He(e,n),r.scrollToMatch(o.main,e)],userEvent:"select.search"}),Oe(e),!0})),De=Le(((e,{query:t})=>{let i=t.matchAll(e.state,1e3);return!(!i||!i.length)&&(e.dispatch({selection:w.create(i.map((e=>w.range(e.from,e.to)))),userEvent:"select.search.matches"}),!0)})),We=Le(((t,{query:i})=>{let{state:s}=t,{from:n,to:o}=s.selection.main;if(s.readOnly)return!1;let r=i.nextMatch(s,n,n);if(!r)return!1;let l,a,c=r,h=[],d=[];if(c.from==n&&c.to==o&&(a=s.toText(i.getReplacement(c)),h.push({from:c.from,to:c.to,insert:a}),c=i.nextMatch(s,c.from,c.to),d.push(e.announce.of(s.phrase("replaced match on line $",s.doc.lineAt(n).number)+"."))),c){let e=0==h.length||h[0].from>=r.to?0:r.to-r.from-a.length;l=w.single(c.from-e,c.to-e),d.push(He(t,c)),d.push(s.facet(de).scrollToMatch(l.main,t))}return t.dispatch({changes:h,selection:l,effects:d,userEvent:"input.replace"}),!0})),Fe=Le(((t,{query:i})=>{if(t.state.readOnly)return!1;let s=i.matchAll(t.state,1e9).map((e=>{let{from:t,to:s}=e;return{from:t,to:s,insert:i.getReplacement(e)}}));if(!s.length)return!1;let n=t.state.phrase("replaced $ matches",s.length)+".";return t.dispatch({changes:s,effects:e.announce.of(n),userEvent:"input.replace.all"}),!0}));function Ie(e){return e.state.facet(de).createPanel(e)}function Pe(e,t){var i,s,n,o,r;let l=e.selection.main,a=l.empty||l.to>l.from+100?"":e.sliceDoc(l.from,l.to);if(t&&!a)return t;let c=e.facet(de);return new ue({search:(null!==(i=null==t?void 0:t.literal)&&void 0!==i?i:c.literal)?a:a.replace(/\n/g,"\\n"),caseSensitive:null!==(s=null==t?void 0:t.caseSensitive)&&void 0!==s?s:c.caseSensitive,literal:null!==(n=null==t?void 0:t.literal)&&void 0!==n?n:c.literal,regexp:null!==(o=null==t?void 0:t.regexp)&&void 0!==o?o:c.regexp,wholeWord:null!==(r=null==t?void 0:t.wholeWord)&&void 0!==r?r:c.wholeWord})}function Ee(e){let t=i(e,Ie);return t&&t.dom.querySelector("[main-field]")}function Oe(e){let t=Ee(e);t&&t==e.root.activeElement&&t.select()}const $e=e=>{let t=e.state.field(ke,!1);if(t&&t.panel){let i=Ee(e);if(i&&i!=e.root.activeElement){let s=Pe(e.state,t.query.spec);s.valid&&e.dispatch({effects:we.of(s)}),i.focus(),i.select()}}else e.dispatch({effects:[ye.of(!0),t?we.of(Pe(e.state,t.query.spec)):x.appendConfig.of(Ue)]});return!0},Te=e=>{let t=e.state.field(ke,!1);if(!t||!t.panel)return!1;let s=i(e,Ie);return s&&s.dom.contains(e.root.activeElement)&&e.focus(),e.dispatch({effects:ye.of(!1)}),!0},ze=[{key:"Mod-f",run:$e,scope:"editor search-panel"},{key:"F3",run:qe,shift:Re,scope:"editor search-panel",preventDefault:!0},{key:"Mod-g",run:qe,shift:Re,scope:"editor search-panel",preventDefault:!0},{key:"Escape",run:Te,scope:"editor search-panel"},{key:"Mod-Shift-l",run:({state:e,dispatch:t})=>{let i=e.selection;if(i.ranges.length>1||i.main.empty)return!1;let{from:s,to:n}=i.main,o=[],r=0;for(let t=new U(e.doc,e.sliceDoc(s,n));!t.next().done;){if(o.length>1e3)return!1;t.value.from==s&&(r=o.length),o.push(w.range(t.value.from,t.value.to))}return t(e.update({selection:w.create(o,r),userEvent:"select.search.matches"})),!0}},{key:"Mod-Alt-g",run:e=>{let t=i(e,ee);if(!t){let s=[te.of(!0)];null==e.state.field(ie,!1)&&s.push(x.appendConfig.of([ie,se])),e.dispatch({effects:s}),t=i(e,ee)}return t&&t.dom.querySelector("input").select(),!0}},{key:"Mod-d",run:({state:t,dispatch:i})=>{let{ranges:s}=t.selection;if(s.some((e=>e.from===e.to)))return(({state:e,dispatch:t})=>{let{selection:i}=e,s=w.create(i.ranges.map((t=>e.wordAt(t.head)||w.cursor(t.head))),i.mainIndex);return!s.eq(i)&&(t(e.update({selection:s})),!0)})({state:t,dispatch:i});let n=t.sliceDoc(s[0].from,s[0].to);if(t.selection.ranges.some((e=>t.sliceDoc(e.from,e.to)!=n)))return!1;let o=function(e,t){let{main:i,ranges:s}=e.selection,n=e.wordAt(i.head),o=n&&n.from==i.from&&n.to==i.to;for(let i=!1,n=new U(e.doc,t,s[s.length-1].to);;){if(n.next(),!n.done){if(i&&s.some((e=>e.from==n.value.from)))continue;if(o){let t=e.wordAt(n.value.from);if(!t||t.from!=n.value.from||t.to!=n.value.to)continue}return n.value}if(i)return null;n=new U(e.doc,t,0,Math.max(0,s[s.length-1].from-1)),i=!0}}(t,n);return!!o&&(i(t.update({selection:t.selection.addRange(w.range(o.from,o.to),!1),effects:e.scrollIntoView(o.to)})),!0)},preventDefault:!0}];class Be{constructor(e){this.view=e;let t=this.query=e.state.field(ke).query.spec;function i(e,t,i){return V("button",{class:"cm-button",name:e,onclick:t,type:"button"},i)}this.commit=this.commit.bind(this),this.searchField=V("input",{value:t.search,placeholder:je(e,"Find"),"aria-label":je(e,"Find"),class:"cm-textfield",name:"search",form:"","main-field":"true",onchange:this.commit,onkeyup:this.commit}),this.replaceField=V("input",{value:t.replace,placeholder:je(e,"Replace"),"aria-label":je(e,"Replace"),class:"cm-textfield",name:"replace",form:"",onchange:this.commit,onkeyup:this.commit}),this.caseField=V("input",{type:"checkbox",name:"case",form:"",checked:t.caseSensitive,onchange:this.commit}),this.reField=V("input",{type:"checkbox",name:"re",form:"",checked:t.regexp,onchange:this.commit}),this.wordField=V("input",{type:"checkbox",name:"word",form:"",checked:t.wholeWord,onchange:this.commit}),this.dom=V("div",{onkeydown:e=>this.keydown(e),class:"cm-search"},[this.searchField,i("next",(()=>qe(e)),[je(e,"next")]),i("prev",(()=>Re(e)),[je(e,"previous")]),i("select",(()=>De(e)),[je(e,"all")]),V("label",null,[this.caseField,je(e,"match case")]),V("label",null,[this.reField,je(e,"regexp")]),V("label",null,[this.wordField,je(e,"by word")]),...e.state.readOnly?[]:[V("br"),this.replaceField,i("replace",(()=>We(e)),[je(e,"replace")]),i("replaceAll",(()=>Fe(e)),[je(e,"replace all")])],V("button",{name:"close",onclick:()=>Te(e),"aria-label":je(e,"close"),type:"button"},["×"])])}commit(){let e=new ue({search:this.searchField.value,caseSensitive:this.caseField.checked,regexp:this.reField.checked,wholeWord:this.wordField.checked,replace:this.replaceField.value});e.eq(this.query)||(this.query=e,this.view.dispatch({effects:we.of(e)}))}keydown(e){o(this.view,e,"search-panel")?e.preventDefault():13==e.keyCode&&e.target==this.searchField?(e.preventDefault(),(e.shiftKey?Re:qe)(this.view)):13==e.keyCode&&e.target==this.replaceField&&(e.preventDefault(),We(this.view))}update(e){for(let t of e.transactions)for(let e of t.effects)e.is(we)&&!e.value.eq(this.query)&&this.setQuery(e.value)}setQuery(e){this.query=e,this.searchField.value=e.search,this.replaceField.value=e.replace,this.caseField.checked=e.caseSensitive,this.reField.checked=e.regexp,this.wordField.checked=e.wholeWord}mount(){this.searchField.select()}get pos(){return 80}get top(){return this.view.state.facet(de).top}}function je(e,t){return e.state.phrase(t)}const _e=30,Ve=/[\s\.,:;?!]/;function He(t,{from:i,to:s}){let n=t.state.doc.lineAt(i),o=t.state.doc.lineAt(s).to,r=Math.max(n.from,i-_e),l=Math.min(o,s+_e),a=t.state.sliceDoc(r,l);if(r!=n.from)for(let e=0;e<_e;e++)if(!Ve.test(a[e+1])&&Ve.test(a[e])){a=a.slice(e);break}if(l!=o)for(let e=a.length-1;e>a.length-_e;e--)if(!Ve.test(a[e-1])&&Ve.test(a[e])){a=a.slice(0,e);break}return e.announce.of(`${t.state.phrase("current match")}. ${a} ${t.state.phrase("on line")} ${n.number}.`)}const Ne=e.baseTheme({".cm-panel.cm-search":{padding:"2px 6px 4px",position:"relative","& [name=close]":{position:"absolute",top:"0",right:"4px",backgroundColor:"inherit",border:"none",font:"inherit",padding:0,margin:0},"& input, & button, & label":{margin:".2em .6em .2em 0"},"& input[type=checkbox]":{marginRight:".2em"},"& label":{fontSize:"80%",whiteSpace:"pre"}},"&light .cm-searchMatch":{backgroundColor:"#ffff0054"},"&dark .cm-searchMatch":{backgroundColor:"#00ffff8a"},"&light .cm-searchMatch-selected":{backgroundColor:"#ff6a0054"},"&dark .cm-searchMatch-selected":{backgroundColor:"#ff00ff8a"}}),Ue=[ke,b.low(Ae),Ne];class Ke{constructor(e,t,i){this.from=e,this.to=t,this.diagnostic=i}}class Qe{constructor(e,t,i){this.diagnostics=e,this.panel=t,this.selected=i}static init(e,t,i){let n=e,o=i.facet(ot).markerFilter;o&&(n=o(n,i));let r=e.slice().sort(((e,t)=>e.from-t.from||e.to-t.to)),l=new q,a=[],c=0;for(let e=0;;){let t,n,o=e==r.length?null:r[e];if(!o&&!a.length)break;for(a.length?(t=c,n=a.reduce(((e,t)=>Math.min(e,t.to)),o&&o.from>t?o.from:1e8)):(t=o.from,n=o.to,a.push(o),e++);e<r.length;){let i=r[e];if(i.from!=t||!(i.to>i.from||i.to==t)){n=Math.min(i.from,n);break}a.push(i),e++,n=Math.min(i.to,n)}let h=mt(a);if(a.some((e=>e.from==e.to||e.from==e.to-1&&i.doc.lineAt(e.from).to==e.from)))l.add(t,t,s.widget({widget:new at(h),diagnostics:a.slice()}));else{let e=a.reduce(((e,t)=>t.markClass?e+" "+t.markClass:e),"");l.add(t,n,s.mark({class:"cm-lintRange cm-lintRange-"+h+e,diagnostics:a.slice(),inclusiveEnd:a.some((e=>e.to>n))}))}c=n;for(let e=0;e<a.length;e++)a[e].to<=c&&a.splice(e--,1)}let h=l.finish();return new Qe(h,t,Ge(h))}}function Ge(e,t=null,i=0){let s=null;return e.between(i,1e9,((e,i,{spec:n})=>{if(!(t&&n.diagnostics.indexOf(t)<0))if(s){if(n.diagnostics.indexOf(s.diagnostic)<0)return!1;s=new Ke(s.from,i,s.diagnostic)}else s=new Ke(e,i,t||n.diagnostics[0])})),s}const Ye=x.define(),Ze=x.define(),Je=x.define(),Xe=v.define({create:()=>new Qe(s.none,null,null),update(e,t){if(t.docChanged&&e.diagnostics.size){let i=e.diagnostics.map(t.changes),s=null,n=e.panel;if(e.selected){let n=t.changes.mapPos(e.selected.from,1);s=Ge(i,e.selected.diagnostic,n)||Ge(i,null,n)}!i.size&&n&&t.state.facet(ot).autoPanel&&(n=null),e=new Qe(i,n,s)}for(let i of t.effects)if(i.is(Ye)){let s=t.state.facet(ot).autoPanel?i.value.length?ht.open:null:e.panel;e=Qe.init(i.value,s,t.state)}else i.is(Ze)?e=new Qe(e.diagnostics,i.value?ht.open:null,e.selected):i.is(Je)&&(e=new Qe(e.diagnostics,e.panel,i.value));return e},provide:t=>[n.from(t,(e=>e.panel)),e.decorations.from(t,(e=>e.diagnostics))]}),et=s.mark({class:"cm-lintRange cm-lintRange-active"});function tt(e,t,i){let s,{diagnostics:n}=e.state.field(Xe),o=-1,r=-1;n.between(t-(i<0?1:0),t+(i>0?1:0),((e,n,{spec:l})=>{if(t>=e&&t<=n&&(e==n||(t>e||i>0)&&(t<n||i<0)))return s=l.diagnostics,o=e,r=n,!1}));let l=e.state.facet(ot).tooltipFilter;return s&&l&&(s=l(s,e.state)),s?{pos:o,end:r,above:e.state.doc.lineAt(o).to<r,create:()=>({dom:it(e,s)})}:null}function it(e,t){return V("ul",{class:"cm-tooltip-lint"},t.map((t=>lt(e,t,!1))))}const st=e=>{let t=e.state.field(Xe,!1);return!(!t||!t.panel)&&(e.dispatch({effects:Ze.of(!1)}),!0)},nt=[{key:"Mod-Shift-m",run:e=>{let t=e.state.field(Xe,!1);var s,n;t&&t.panel||e.dispatch({effects:(s=e.state,n=[Ze.of(!0)],s.field(Xe,!1)?n:n.concat(x.appendConfig.of(pt)))});let o=i(e,ht.open);return o&&o.dom.querySelector(".cm-panel-lint ul").focus(),!0},preventDefault:!0},{key:"F8",run:e=>{let t=e.state.field(Xe,!1);if(!t)return!1;let i=e.state.selection.main,s=t.diagnostics.iter(i.to+1);return!(!s.value&&(s=t.diagnostics.iter(0),!s.value||s.from==i.from&&s.to==i.to))&&(e.dispatch({selection:{anchor:s.from,head:s.to},scrollIntoView:!0}),!0)}}],ot=y.define({combine:e=>Object.assign({sources:e.map((e=>e.source)).filter((e=>null!=e))},k(e.map((e=>e.config)),{delay:750,markerFilter:null,tooltipFilter:null,needsRefresh:null,hideOn:()=>null},{needsRefresh:(e,t)=>e?t?i=>e(i)||t(i):e:t}))});function rt(e){let t=[];if(e)e:for(let{name:i}of e){for(let e=0;e<i.length;e++){let s=i[e];if(/[a-zA-Z]/.test(s)&&!t.some((e=>e.toLowerCase()==s.toLowerCase()))){t.push(s);continue e}}t.push("")}return t}function lt(e,t,i){var s;let n=i?rt(t.actions):[];return V("li",{class:"cm-diagnostic cm-diagnostic-"+t.severity},V("span",{class:"cm-diagnosticText"},t.renderMessage?t.renderMessage(e):t.message),null===(s=t.actions)||void 0===s?void 0:s.map(((i,s)=>{let o=!1,r=s=>{if(s.preventDefault(),o)return;o=!0;let n=Ge(e.state.field(Xe).diagnostics,t);n&&i.apply(e,n.from,n.to)},{name:l}=i,a=n[s]?l.indexOf(n[s]):-1,c=a<0?l:[l.slice(0,a),V("u",l.slice(a,a+1)),l.slice(a+1)];return V("button",{type:"button",class:"cm-diagnosticAction",onclick:r,onmousedown:r,"aria-label":` Action: ${l}${a<0?"":` (access key "${n[s]})"`}.`},c)})),t.source&&V("div",{class:"cm-diagnosticSource"},t.source))}class at extends l{constructor(e){super(),this.sev=e}eq(e){return e.sev==this.sev}toDOM(){return V("span",{class:"cm-lintPoint cm-lintPoint-"+this.sev})}}class ct{constructor(e,t){this.diagnostic=t,this.id="item_"+Math.floor(4294967295*Math.random()).toString(16),this.dom=lt(e,t,!0),this.dom.id=this.id,this.dom.setAttribute("role","option")}}class ht{constructor(e){this.view=e,this.items=[];this.list=V("ul",{tabIndex:0,role:"listbox","aria-label":this.view.state.phrase("Diagnostics"),onkeydown:t=>{if(27==t.keyCode)st(this.view),this.view.focus();else if(38==t.keyCode||33==t.keyCode)this.moveSelection((this.selectedIndex-1+this.items.length)%this.items.length);else if(40==t.keyCode||34==t.keyCode)this.moveSelection((this.selectedIndex+1)%this.items.length);else if(36==t.keyCode)this.moveSelection(0);else if(35==t.keyCode)this.moveSelection(this.items.length-1);else if(13==t.keyCode)this.view.focus();else{if(!(t.keyCode>=65&&t.keyCode<=90&&this.selectedIndex>=0))return;{let{diagnostic:i}=this.items[this.selectedIndex],s=rt(i.actions);for(let n=0;n<s.length;n++)if(s[n].toUpperCase().charCodeAt(0)==t.keyCode){let t=Ge(this.view.state.field(Xe).diagnostics,i);t&&i.actions[n].apply(e,t.from,t.to)}}}t.preventDefault()},onclick:e=>{for(let t=0;t<this.items.length;t++)this.items[t].dom.contains(e.target)&&this.moveSelection(t)}}),this.dom=V("div",{class:"cm-panel-lint"},this.list,V("button",{type:"button",name:"close","aria-label":this.view.state.phrase("close"),onclick:()=>st(this.view)},"×")),this.update()}get selectedIndex(){let e=this.view.state.field(Xe).selected;if(!e)return-1;for(let t=0;t<this.items.length;t++)if(this.items[t].diagnostic==e.diagnostic)return t;return-1}update(){let{diagnostics:e,selected:t}=this.view.state.field(Xe),i=0,s=!1,n=null,o=new Set;for(e.between(0,this.view.state.doc.length,((e,r,{spec:l})=>{for(let e of l.diagnostics){if(o.has(e))continue;o.add(e);let r,l=-1;for(let t=i;t<this.items.length;t++)if(this.items[t].diagnostic==e){l=t;break}l<0?(r=new ct(this.view,e),this.items.splice(i,0,r),s=!0):(r=this.items[l],l>i&&(this.items.splice(i,l-i),s=!0)),t&&r.diagnostic==t.diagnostic?r.dom.hasAttribute("aria-selected")||(r.dom.setAttribute("aria-selected","true"),n=r):r.dom.hasAttribute("aria-selected")&&r.dom.removeAttribute("aria-selected"),i++}}));i<this.items.length&&!(1==this.items.length&&this.items[0].diagnostic.from<0);)s=!0,this.items.pop();0==this.items.length&&(this.items.push(new ct(this.view,{from:-1,to:-1,severity:"info",message:this.view.state.phrase("No diagnostics")})),s=!0),n?(this.list.setAttribute("aria-activedescendant",n.id),this.view.requestMeasure({key:this,read:()=>({sel:n.dom.getBoundingClientRect(),panel:this.list.getBoundingClientRect()}),write:({sel:e,panel:t})=>{let i=t.height/this.list.offsetHeight;e.top<t.top?this.list.scrollTop-=(t.top-e.top)/i:e.bottom>t.bottom&&(this.list.scrollTop+=(e.bottom-t.bottom)/i)}})):this.selectedIndex<0&&this.list.removeAttribute("aria-activedescendant"),s&&this.sync()}sync(){let e=this.list.firstChild;function t(){let t=e;e=t.nextSibling,t.remove()}for(let i of this.items)if(i.dom.parentNode==this.list){for(;e!=i.dom;)t();e=i.dom.nextSibling}else this.list.insertBefore(i.dom,e);for(;e;)t()}moveSelection(e){if(this.selectedIndex<0)return;let t=Ge(this.view.state.field(Xe).diagnostics,this.items[e].diagnostic);t&&this.view.dispatch({selection:{anchor:t.from,head:t.to},scrollIntoView:!0,effects:Je.of(t)})}static open(e){return new ht(e)}}function dt(e){return function(e,t='viewBox="0 0 40 40"'){return`url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" ${t}>${encodeURIComponent(e)}</svg>')`}(`<path d="m0 2.5 l2 -1.5 l1 0 l2 1.5 l1 0" stroke="${e}" fill="none" stroke-width=".7"/>`,'width="6" height="3"')}const ut=e.baseTheme({".cm-diagnostic":{padding:"3px 6px 3px 8px",marginLeft:"-1px",display:"block",whiteSpace:"pre-wrap"},".cm-diagnostic-error":{borderLeft:"5px solid #d11"},".cm-diagnostic-warning":{borderLeft:"5px solid orange"},".cm-diagnostic-info":{borderLeft:"5px solid #999"},".cm-diagnostic-hint":{borderLeft:"5px solid #66d"},".cm-diagnosticAction":{font:"inherit",border:"none",padding:"2px 4px",backgroundColor:"#444",color:"white",borderRadius:"3px",marginLeft:"8px",cursor:"pointer"},".cm-diagnosticSource":{fontSize:"70%",opacity:.7},".cm-lintRange":{backgroundPosition:"left bottom",backgroundRepeat:"repeat-x",paddingBottom:"0.7px"},".cm-lintRange-error":{backgroundImage:dt("#d11")},".cm-lintRange-warning":{backgroundImage:dt("orange")},".cm-lintRange-info":{backgroundImage:dt("#999")},".cm-lintRange-hint":{backgroundImage:dt("#66d")},".cm-lintRange-active":{backgroundColor:"#ffdd9980"},".cm-tooltip-lint":{padding:0,margin:0},".cm-lintPoint":{position:"relative","&:after":{content:'""',position:"absolute",bottom:0,left:"-2px",borderLeft:"3px solid transparent",borderRight:"3px solid transparent",borderBottom:"4px solid #d11"}},".cm-lintPoint-warning":{"&:after":{borderBottomColor:"orange"}},".cm-lintPoint-info":{"&:after":{borderBottomColor:"#999"}},".cm-lintPoint-hint":{"&:after":{borderBottomColor:"#66d"}},".cm-panel.cm-panel-lint":{position:"relative","& ul":{maxHeight:"100px",overflowY:"auto","& [aria-selected]":{backgroundColor:"#ddd","& u":{textDecoration:"underline"}},"&:focus [aria-selected]":{background_fallback:"#bdf",backgroundColor:"Highlight",color_fallback:"white",color:"HighlightText"},"& u":{textDecoration:"none"},padding:0,margin:0},"& [name=close]":{position:"absolute",top:"0",right:"2px",background:"inherit",border:"none",font:"inherit",padding:0,margin:0}}});function ft(e){return"error"==e?4:"warning"==e?3:"info"==e?2:1}function mt(e){let t="hint",i=1;for(let s of e){let e=ft(s.severity);e>i&&(i=e,t=s.severity)}return t}const pt=[Xe,e.decorations.compute([Xe],(e=>{let{selected:t,panel:i}=e.field(Xe);return t&&i&&t.from!=t.to?s.set([et.range(t.from,t.to)]):s.none})),r(tt,{hideOn:function(e,t){let i=t.pos,s=t.end||i,n=e.state.facet(ot).hideOn(e,i,s);if(null!=n)return n;let o=e.startState.doc.lineAt(t.pos);return!(!e.effects.some((e=>e.is(Ye)))&&!e.changes.touchesRange(o.from,Math.max(o.to,s)))}}),ut],gt=(()=>[a(),c(),h(),O(),D(),d(),u(),L.allowMultipleSelections.of(!0),W(),F(P,{fallback:!0}),I(),z(),B(),f(),m(),p(),[he,ce],g.of([...j,...$,...ze,...T,...E,..._,...nt])])(),vt=(()=>[h(),O(),d(),F(P,{fallback:!0}),g.of([...$,...T])])();export{e as EditorView,gt as basicSetup,vt as minimalSetup};
//# sourceMappingURL=codemirror-DBZVbTdS.js.map
