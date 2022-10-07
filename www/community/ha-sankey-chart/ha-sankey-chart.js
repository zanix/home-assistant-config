function t(t,e,s,i){var n,r=arguments.length,o=r<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,s):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(t,e,s,i);else for(var a=t.length-1;a>=0;a--)(n=t[a])&&(o=(r<3?n(o):r>3?n(e,s,o):n(e,s))||o);return r>3&&o&&Object.defineProperty(e,s,o),o}const e=window.ShadowRoot&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,s=Symbol(),i=new Map;class n{constructor(t,e){if(this._$cssResult$=!0,e!==s)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t}get styleSheet(){let t=i.get(this.cssText);return e&&void 0===t&&(i.set(this.cssText,t=new CSSStyleSheet),t.replaceSync(this.cssText)),t}toString(){return this.cssText}}const r=e?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const s of t.cssRules)e+=s.cssText;return(t=>new n("string"==typeof t?t:t+"",s))(e)})(t):t;var o,a;const l={toAttribute(t,e){switch(e){case Boolean:t=t?"":null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let s=t;switch(e){case Boolean:s=null!==t;break;case Number:s=null===t?null:Number(t);break;case Object:case Array:try{s=JSON.parse(t)}catch(t){s=null}}return s}},h=(t,e)=>e!==t&&(e==e||t==t),c={attribute:!0,type:String,converter:l,reflect:!1,hasChanged:h};class d extends HTMLElement{constructor(){super(),this._$Et=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Ei=null,this.o()}static addInitializer(t){var e;null!==(e=this.l)&&void 0!==e||(this.l=[]),this.l.push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach(((e,s)=>{const i=this._$Eh(s,e);void 0!==i&&(this._$Eu.set(i,s),t.push(i))})),t}static createProperty(t,e=c){if(e.state&&(e.attribute=!1),this.finalize(),this.elementProperties.set(t,e),!e.noAccessor&&!this.prototype.hasOwnProperty(t)){const s="symbol"==typeof t?Symbol():"__"+t,i=this.getPropertyDescriptor(t,s,e);void 0!==i&&Object.defineProperty(this.prototype,t,i)}}static getPropertyDescriptor(t,e,s){return{get(){return this[e]},set(i){const n=this[t];this[e]=i,this.requestUpdate(t,n,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||c}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),this.elementProperties=new Map(t.elementProperties),this._$Eu=new Map,this.hasOwnProperty("properties")){const t=this.properties,e=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const s of e)this.createProperty(s,t[s])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const s=new Set(t.flat(1/0).reverse());for(const t of s)e.unshift(r(t))}else void 0!==t&&e.push(r(t));return e}static _$Eh(t,e){const s=e.attribute;return!1===s?void 0:"string"==typeof s?s:"string"==typeof t?t.toLowerCase():void 0}o(){var t;this._$Ev=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$Ep(),this.requestUpdate(),null===(t=this.constructor.l)||void 0===t||t.forEach((t=>t(this)))}addController(t){var e,s;(null!==(e=this._$Em)&&void 0!==e?e:this._$Em=[]).push(t),void 0!==this.renderRoot&&this.isConnected&&(null===(s=t.hostConnected)||void 0===s||s.call(t))}removeController(t){var e;null===(e=this._$Em)||void 0===e||e.splice(this._$Em.indexOf(t)>>>0,1)}_$Ep(){this.constructor.elementProperties.forEach(((t,e)=>{this.hasOwnProperty(e)&&(this._$Et.set(e,this[e]),delete this[e])}))}createRenderRoot(){var t;const s=null!==(t=this.shadowRoot)&&void 0!==t?t:this.attachShadow(this.constructor.shadowRootOptions);return((t,s)=>{e?t.adoptedStyleSheets=s.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet)):s.forEach((e=>{const s=document.createElement("style"),i=window.litNonce;void 0!==i&&s.setAttribute("nonce",i),s.textContent=e.cssText,t.appendChild(s)}))})(s,this.constructor.elementStyles),s}connectedCallback(){var t;void 0===this.renderRoot&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(t=this._$Em)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostConnected)||void 0===e?void 0:e.call(t)}))}enableUpdating(t){}disconnectedCallback(){var t;null===(t=this._$Em)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostDisconnected)||void 0===e?void 0:e.call(t)}))}attributeChangedCallback(t,e,s){this._$AK(t,s)}_$Eg(t,e,s=c){var i,n;const r=this.constructor._$Eh(t,s);if(void 0!==r&&!0===s.reflect){const o=(null!==(n=null===(i=s.converter)||void 0===i?void 0:i.toAttribute)&&void 0!==n?n:l.toAttribute)(e,s.type);this._$Ei=t,null==o?this.removeAttribute(r):this.setAttribute(r,o),this._$Ei=null}}_$AK(t,e){var s,i,n;const r=this.constructor,o=r._$Eu.get(t);if(void 0!==o&&this._$Ei!==o){const t=r.getPropertyOptions(o),a=t.converter,h=null!==(n=null!==(i=null===(s=a)||void 0===s?void 0:s.fromAttribute)&&void 0!==i?i:"function"==typeof a?a:null)&&void 0!==n?n:l.fromAttribute;this._$Ei=o,this[o]=h(e,t.type),this._$Ei=null}}requestUpdate(t,e,s){let i=!0;void 0!==t&&(((s=s||this.constructor.getPropertyOptions(t)).hasChanged||h)(this[t],e)?(this._$AL.has(t)||this._$AL.set(t,e),!0===s.reflect&&this._$Ei!==t&&(void 0===this._$ES&&(this._$ES=new Map),this._$ES.set(t,s))):i=!1),!this.isUpdatePending&&i&&(this._$Ev=this._$EC())}async _$EC(){this.isUpdatePending=!0;try{await this._$Ev}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Et&&(this._$Et.forEach(((t,e)=>this[e]=t)),this._$Et=void 0);let e=!1;const s=this._$AL;try{e=this.shouldUpdate(s),e?(this.willUpdate(s),null===(t=this._$Em)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostUpdate)||void 0===e?void 0:e.call(t)})),this.update(s)):this._$ET()}catch(t){throw e=!1,this._$ET(),t}e&&this._$AE(s)}willUpdate(t){}_$AE(t){var e;null===(e=this._$Em)||void 0===e||e.forEach((t=>{var e;return null===(e=t.hostUpdated)||void 0===e?void 0:e.call(t)})),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$ET(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$Ev}shouldUpdate(t){return!0}update(t){void 0!==this._$ES&&(this._$ES.forEach(((t,e)=>this._$Eg(e,this[e],t))),this._$ES=void 0),this._$ET()}updated(t){}firstUpdated(t){}}var u,p;d.finalized=!0,d.elementProperties=new Map,d.elementStyles=[],d.shadowRootOptions={mode:"open"},null===(o=globalThis.reactiveElementPolyfillSupport)||void 0===o||o.call(globalThis,{ReactiveElement:d}),(null!==(a=globalThis.reactiveElementVersions)&&void 0!==a?a:globalThis.reactiveElementVersions=[]).push("1.0.0");const f=globalThis.trustedTypes,m=f?f.createPolicy("lit-html",{createHTML:t=>t}):void 0,g=`lit$${(Math.random()+"").slice(9)}$`,v="?"+g,_=`<${v}>`,$=document,y=(t="")=>$.createComment(t),b=t=>null===t||"object"!=typeof t&&"function"!=typeof t,w=Array.isArray,A=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,x=/-->/g,S=/>/g,C=/>|[ 	\n\r](?:([^\s"'>=/]+)([ 	\n\r]*=[ 	\n\r]*(?:[^ 	\n\r"'`<>=]|("|')|))|$)/g,E=/'/g,P=/"/g,k=/^(?:script|style|textarea)$/i,O=t=>(e,...s)=>({_$litType$:t,strings:e,values:s}),U=O(1),N=O(2),T=Symbol.for("lit-noChange"),M=Symbol.for("lit-nothing"),z=new WeakMap,H=$.createTreeWalker($,129,null,!1),j=(t,e)=>{const s=t.length-1,i=[];let n,r=2===e?"<svg>":"",o=A;for(let e=0;e<s;e++){const s=t[e];let a,l,h=-1,c=0;for(;c<s.length&&(o.lastIndex=c,l=o.exec(s),null!==l);)c=o.lastIndex,o===A?"!--"===l[1]?o=x:void 0!==l[1]?o=S:void 0!==l[2]?(k.test(l[2])&&(n=RegExp("</"+l[2],"g")),o=C):void 0!==l[3]&&(o=C):o===C?">"===l[0]?(o=null!=n?n:A,h=-1):void 0===l[1]?h=-2:(h=o.lastIndex-l[2].length,a=l[1],o=void 0===l[3]?C:'"'===l[3]?P:E):o===P||o===E?o=C:o===x||o===S?o=A:(o=C,n=void 0);const d=o===C&&t[e+1].startsWith("/>")?" ":"";r+=o===A?s+_:h>=0?(i.push(a),s.slice(0,h)+"$lit$"+s.slice(h)+g+d):s+g+(-2===h?(i.push(void 0),e):d)}const a=r+(t[s]||"<?>")+(2===e?"</svg>":"");return[void 0!==m?m.createHTML(a):a,i]};class R{constructor({strings:t,_$litType$:e},s){let i;this.parts=[];let n=0,r=0;const o=t.length-1,a=this.parts,[l,h]=j(t,e);if(this.el=R.createElement(l,s),H.currentNode=this.el.content,2===e){const t=this.el.content,e=t.firstChild;e.remove(),t.append(...e.childNodes)}for(;null!==(i=H.nextNode())&&a.length<o;){if(1===i.nodeType){if(i.hasAttributes()){const t=[];for(const e of i.getAttributeNames())if(e.endsWith("$lit$")||e.startsWith(g)){const s=h[r++];if(t.push(e),void 0!==s){const t=i.getAttribute(s.toLowerCase()+"$lit$").split(g),e=/([.?@])?(.*)/.exec(s);a.push({type:1,index:n,name:e[2],strings:t,ctor:"."===e[1]?B:"?"===e[1]?q:"@"===e[1]?V:D})}else a.push({type:6,index:n})}for(const e of t)i.removeAttribute(e)}if(k.test(i.tagName)){const t=i.textContent.split(g),e=t.length-1;if(e>0){i.textContent=f?f.emptyScript:"";for(let s=0;s<e;s++)i.append(t[s],y()),H.nextNode(),a.push({type:2,index:++n});i.append(t[e],y())}}}else if(8===i.nodeType)if(i.data===v)a.push({type:2,index:n});else{let t=-1;for(;-1!==(t=i.data.indexOf(g,t+1));)a.push({type:7,index:n}),t+=g.length-1}n++}}static createElement(t,e){const s=$.createElement("template");return s.innerHTML=t,s}}function Y(t,e,s=t,i){var n,r,o,a;if(e===T)return e;let l=void 0!==i?null===(n=s._$Cl)||void 0===n?void 0:n[i]:s._$Cu;const h=b(e)?void 0:e._$litDirective$;return(null==l?void 0:l.constructor)!==h&&(null===(r=null==l?void 0:l._$AO)||void 0===r||r.call(l,!1),void 0===h?l=void 0:(l=new h(t),l._$AT(t,s,i)),void 0!==i?(null!==(o=(a=s)._$Cl)&&void 0!==o?o:a._$Cl=[])[i]=l:s._$Cu=l),void 0!==l&&(e=Y(t,l._$AS(t,e.values),l,i)),e}class L{constructor(t,e){this.v=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}p(t){var e;const{el:{content:s},parts:i}=this._$AD,n=(null!==(e=null==t?void 0:t.creationScope)&&void 0!==e?e:$).importNode(s,!0);H.currentNode=n;let r=H.nextNode(),o=0,a=0,l=i[0];for(;void 0!==l;){if(o===l.index){let e;2===l.type?e=new I(r,r.nextSibling,this,t):1===l.type?e=new l.ctor(r,l.name,l.strings,this,t):6===l.type&&(e=new W(r,this,t)),this.v.push(e),l=i[++a]}o!==(null==l?void 0:l.index)&&(r=H.nextNode(),o++)}return n}m(t){let e=0;for(const s of this.v)void 0!==s&&(void 0!==s.strings?(s._$AI(t,s,e),e+=s.strings.length-2):s._$AI(t[e])),e++}}class I{constructor(t,e,s,i){var n;this.type=2,this._$AH=M,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=s,this.options=i,this._$Cg=null===(n=null==i?void 0:i.isConnected)||void 0===n||n}get _$AU(){var t,e;return null!==(e=null===(t=this._$AM)||void 0===t?void 0:t._$AU)&&void 0!==e?e:this._$Cg}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===t.nodeType&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=Y(this,t,e),b(t)?t===M||null==t||""===t?(this._$AH!==M&&this._$AR(),this._$AH=M):t!==this._$AH&&t!==T&&this.$(t):void 0!==t._$litType$?this.T(t):void 0!==t.nodeType?this.S(t):(t=>{var e;return w(t)||"function"==typeof(null===(e=t)||void 0===e?void 0:e[Symbol.iterator])})(t)?this.M(t):this.$(t)}A(t,e=this._$AB){return this._$AA.parentNode.insertBefore(t,e)}S(t){this._$AH!==t&&(this._$AR(),this._$AH=this.A(t))}$(t){this._$AH!==M&&b(this._$AH)?this._$AA.nextSibling.data=t:this.S($.createTextNode(t)),this._$AH=t}T(t){var e;const{values:s,_$litType$:i}=t,n="number"==typeof i?this._$AC(t):(void 0===i.el&&(i.el=R.createElement(i.h,this.options)),i);if((null===(e=this._$AH)||void 0===e?void 0:e._$AD)===n)this._$AH.m(s);else{const t=new L(n,this),e=t.p(this.options);t.m(s),this.S(e),this._$AH=t}}_$AC(t){let e=z.get(t.strings);return void 0===e&&z.set(t.strings,e=new R(t)),e}M(t){w(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let s,i=0;for(const n of t)i===e.length?e.push(s=new I(this.A(y()),this.A(y()),this,this.options)):s=e[i],s._$AI(n),i++;i<e.length&&(this._$AR(s&&s._$AB.nextSibling,i),e.length=i)}_$AR(t=this._$AA.nextSibling,e){var s;for(null===(s=this._$AP)||void 0===s||s.call(this,!1,!0,e);t&&t!==this._$AB;){const e=t.nextSibling;t.remove(),t=e}}setConnected(t){var e;void 0===this._$AM&&(this._$Cg=t,null===(e=this._$AP)||void 0===e||e.call(this,t))}}class D{constructor(t,e,s,i,n){this.type=1,this._$AH=M,this._$AN=void 0,this.element=t,this.name=e,this._$AM=i,this.options=n,s.length>2||""!==s[0]||""!==s[1]?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=M}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,e=this,s,i){const n=this.strings;let r=!1;if(void 0===n)t=Y(this,t,e,0),r=!b(t)||t!==this._$AH&&t!==T,r&&(this._$AH=t);else{const i=t;let o,a;for(t=n[0],o=0;o<n.length-1;o++)a=Y(this,i[s+o],e,o),a===T&&(a=this._$AH[o]),r||(r=!b(a)||a!==this._$AH[o]),a===M?t=M:t!==M&&(t+=(null!=a?a:"")+n[o+1]),this._$AH[o]=a}r&&!i&&this.k(t)}k(t){t===M?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=t?t:"")}}class B extends D{constructor(){super(...arguments),this.type=3}k(t){this.element[this.name]=t===M?void 0:t}}class q extends D{constructor(){super(...arguments),this.type=4}k(t){t&&t!==M?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name)}}class V extends D{constructor(t,e,s,i,n){super(t,e,s,i,n),this.type=5}_$AI(t,e=this){var s;if((t=null!==(s=Y(this,t,e,0))&&void 0!==s?s:M)===T)return;const i=this._$AH,n=t===M&&i!==M||t.capture!==i.capture||t.once!==i.once||t.passive!==i.passive,r=t!==M&&(i===M||n);n&&this.element.removeEventListener(this.name,this,i),r&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e,s;"function"==typeof this._$AH?this._$AH.call(null!==(s=null===(e=this.options)||void 0===e?void 0:e.host)&&void 0!==s?s:this.element,t):this._$AH.handleEvent(t)}}class W{constructor(t,e,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(t){Y(this,t)}}var F,G,J;null===(u=globalThis.litHtmlPolyfillSupport)||void 0===u||u.call(globalThis,R,I),(null!==(p=globalThis.litHtmlVersions)&&void 0!==p?p:globalThis.litHtmlVersions=[]).push("2.0.0");class K extends d{constructor(){super(...arguments),this.renderOptions={host:this},this._$Dt=void 0}createRenderRoot(){var t,e;const s=super.createRenderRoot();return null!==(t=(e=this.renderOptions).renderBefore)&&void 0!==t||(e.renderBefore=s.firstChild),s}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Dt=((t,e,s)=>{var i,n;const r=null!==(i=null==s?void 0:s.renderBefore)&&void 0!==i?i:e;let o=r._$litPart$;if(void 0===o){const t=null!==(n=null==s?void 0:s.renderBefore)&&void 0!==n?n:null;r._$litPart$=o=new I(e.insertBefore(y(),t),t,void 0,null!=s?s:{})}return o._$AI(t),o})(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),null===(t=this._$Dt)||void 0===t||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),null===(t=this._$Dt)||void 0===t||t.setConnected(!1)}render(){return T}}K.finalized=!0,K._$litElement$=!0,null===(F=globalThis.litElementHydrateSupport)||void 0===F||F.call(globalThis,{LitElement:K}),null===(G=globalThis.litElementPolyfillSupport)||void 0===G||G.call(globalThis,{LitElement:K}),(null!==(J=globalThis.litElementVersions)&&void 0!==J?J:globalThis.litElementVersions=[]).push("3.0.0");const Z=1,Q=2,X=t=>(...e)=>({_$litDirective$:t,values:e});class tt{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,s){this._$Ct=t,this._$AM=e,this._$Ci=s}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}}const et=X(class extends tt{constructor(t){var e;if(super(t),t.type!==Z||"style"!==t.name||(null===(e=t.strings)||void 0===e?void 0:e.length)>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(t){return Object.keys(t).reduce(((e,s)=>{const i=t[s];return null==i?e:e+`${s=s.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${i};`}),"")}update(t,[e]){const{style:s}=t.element;if(void 0===this.ut){this.ut=new Set;for(const t in e)this.ut.add(t);return this.render(e)}this.ut.forEach((t=>{null==e[t]&&(this.ut.delete(t),t.includes("-")?s.removeProperty(t):s[t]="")}));for(const t in e){const i=e[t];null!=i&&(this.ut.add(t),t.includes("-")?s.setProperty(t,i):s[t]=i)}return T}}),st=X(class extends tt{constructor(t){var e;if(super(t),t.type!==Z||"class"!==t.name||(null===(e=t.strings)||void 0===e?void 0:e.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(t){return" "+Object.keys(t).filter((e=>t[e])).join(" ")+" "}update(t,[e]){var s,i;if(void 0===this.st){this.st=new Set,void 0!==t.strings&&(this.et=new Set(t.strings.join(" ").split(/\s/).filter((t=>""!==t))));for(const t in e)e[t]&&!(null===(s=this.et)||void 0===s?void 0:s.has(t))&&this.st.add(t);return this.render(e)}const n=t.element.classList;this.st.forEach((t=>{t in e||(n.remove(t),this.st.delete(t))}));for(const t in e){const s=!!e[t];s===this.st.has(t)||(null===(i=this.et)||void 0===i?void 0:i.has(t))||(s?(n.add(t),this.st.add(t)):(n.remove(t),this.st.delete(t)))}return T}}),it=(t,e)=>{var s,i;const n=t._$AN;if(void 0===n)return!1;for(const t of n)null===(i=(s=t)._$AO)||void 0===i||i.call(s,e,!1),it(t,e);return!0},nt=t=>{let e,s;do{if(void 0===(e=t._$AM))break;s=e._$AN,s.delete(t),t=e}while(0===(null==s?void 0:s.size))},rt=t=>{for(let e;e=t._$AM;t=e){let s=e._$AN;if(void 0===s)e._$AN=s=new Set;else if(s.has(t))break;s.add(t),lt(e)}};function ot(t){void 0!==this._$AN?(nt(this),this._$AM=t,rt(this)):this._$AM=t}function at(t,e=!1,s=0){const i=this._$AH,n=this._$AN;if(void 0!==n&&0!==n.size)if(e)if(Array.isArray(i))for(let t=s;t<i.length;t++)it(i[t],!1),nt(i[t]);else null!=i&&(it(i,!1),nt(i));else it(this,t)}const lt=t=>{var e,s,i,n;t.type==Q&&(null!==(e=(i=t)._$AP)&&void 0!==e||(i._$AP=at),null!==(s=(n=t)._$AQ)&&void 0!==s||(n._$AQ=ot))};class ht extends tt{constructor(){super(...arguments),this._$AN=void 0}_$AT(t,e,s){super._$AT(t,e,s),rt(this),this.isConnected=t._$AU}_$AO(t,e=!0){var s,i;t!==this.isConnected&&(this.isConnected=t,t?null===(s=this.reconnected)||void 0===s||s.call(this):null===(i=this.disconnected)||void 0===i||i.call(this)),e&&(it(this,t),nt(this))}setValue(t){if((t=>void 0===t.strings)(this._$Ct))this._$Ct._$AI(t,this);else{const e=[...this._$Ct._$AH];e[this._$Ci]=t,this._$Ct._$AI(e,this,0)}}disconnected(){}reconnected(){}}class ct{constructor(t){this.U=t}disconnect(){this.U=void 0}reconnect(t){this.U=t}deref(){return this.U}}class dt{constructor(){this.Y=void 0,this.q=void 0}get(){return this.Y}pause(){var t;null!==(t=this.Y)&&void 0!==t||(this.Y=new Promise((t=>this.q=t)))}resume(){var t;null===(t=this.q)||void 0===t||t.call(this),this.Y=this.q=void 0}}const ut=t=>!(t=>null===t||"object"!=typeof t&&"function"!=typeof t)(t)&&"function"==typeof t.then;const pt=X(class extends ht{constructor(){super(...arguments),this._$Cft=1073741823,this._$Cwt=[],this._$CG=new ct(this),this._$CK=new dt}render(...t){var e;return null!==(e=t.find((t=>!ut(t))))&&void 0!==e?e:T}update(t,e){const s=this._$Cwt;let i=s.length;this._$Cwt=e;const n=this._$CG,r=this._$CK;this.isConnected||this.disconnected();for(let t=0;t<e.length&&!(t>this._$Cft);t++){const o=e[t];if(!ut(o))return this._$Cft=t,o;t<i&&o===s[t]||(this._$Cft=1073741823,i=0,Promise.resolve(o).then((async t=>{for(;r.get();)await r.get();const e=n.deref();if(void 0!==e){const s=e._$Cwt.indexOf(o);s>-1&&s<e._$Cft&&(e._$Cft=s,e.setValue(t))}})))}return T}disconnected(){this._$CG.disconnect(),this._$CK.pause()}reconnected(){this._$CG.reconnect(this),this._$CK.resume()}}),ft=(t,e)=>"method"===e.kind&&e.descriptor&&!("value"in e.descriptor)?{...e,finisher(s){s.createProperty(e.key,t)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:e.key,initializer(){"function"==typeof e.initializer&&(this[e.key]=e.initializer.call(this))},finisher(s){s.createProperty(e.key,t)}};function mt(t){return(e,s)=>void 0!==s?((t,e,s)=>{e.constructor.createProperty(s,t)})(t,e,s):ft(t,e)}function gt(t){return mt({...t,state:!0})}var vt="[^\\s]+";function _t(t,e){for(var s=[],i=0,n=t.length;i<n;i++)s.push(t[i].substr(0,e));return s}var $t=function(t){return function(e,s){var i=s[t].map((function(t){return t.toLowerCase()})),n=i.indexOf(e.toLowerCase());return n>-1?n:null}};function yt(t){for(var e=[],s=1;s<arguments.length;s++)e[s-1]=arguments[s];for(var i=0,n=e;i<n.length;i++){var r=n[i];for(var o in r)t[o]=r[o]}return t}var bt=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],wt=["January","February","March","April","May","June","July","August","September","October","November","December"],At=_t(wt,3),xt={dayNamesShort:_t(bt,3),dayNames:bt,monthNamesShort:At,monthNames:wt,amPm:["am","pm"],DoFn:function(t){return t+["th","st","nd","rd"][t%10>3?0:(t-t%10!=10?1:0)*t%10]}},St=(yt({},xt),function(t){return+t-1}),Ct=[null,"[1-9]\\d?"],Et=[null,vt],Pt=["isPm",vt,function(t,e){var s=t.toLowerCase();return s===e.amPm[0]?0:s===e.amPm[1]?1:null}],kt=["timezoneOffset","[^\\s]*?[\\+\\-]\\d\\d:?\\d\\d|[^\\s]*?Z?",function(t){var e=(t+"").match(/([+-]|\d\d)/gi);if(e){var s=60*+e[1]+parseInt(e[2],10);return"+"===e[0]?s:-s}return 0}];$t("monthNamesShort"),$t("monthNames");var Ot,Ut;!function(){try{(new Date).toLocaleDateString("i")}catch(t){return"RangeError"===t.name}}(),function(){try{(new Date).toLocaleString("i")}catch(t){return"RangeError"===t.name}}(),function(){try{(new Date).toLocaleTimeString("i")}catch(t){return"RangeError"===t.name}}(),function(t){t.language="language",t.system="system",t.comma_decimal="comma_decimal",t.decimal_comma="decimal_comma",t.space_comma="space_comma",t.none="none"}(Ot||(Ot={})),function(t){t.language="language",t.system="system",t.am_pm="12",t.twenty_four="24"}(Ut||(Ut={}));var Nt=function(t,e,s,i){i=i||{},s=null==s?{}:s;var n=new Event(e,{bubbles:void 0===i.bubbles||i.bubbles,cancelable:Boolean(i.cancelable),composed:void 0===i.composed||i.composed});return n.detail=s,t.dispatchEvent(n),n},Tt=new Set(["call-service","divider","section","weblink","cast","select"]),Mt={alert:"toggle",automation:"toggle",climate:"climate",cover:"cover",fan:"toggle",group:"group",input_boolean:"toggle",input_number:"input-number",input_select:"input-select",input_text:"input-text",light:"toggle",lock:"lock",media_player:"media-player",remote:"toggle",scene:"scene",script:"script",sensor:"sensor",timer:"timer",switch:"toggle",vacuum:"toggle",water_heater:"climate",input_datetime:"input-datetime"},zt={alert:"hass:alert",automation:"hass:playlist-play",calendar:"hass:calendar",camera:"hass:video",climate:"hass:thermostat",configurator:"hass:settings",conversation:"hass:text-to-speech",device_tracker:"hass:account",fan:"hass:fan",group:"hass:google-circles-communities",history_graph:"hass:chart-line",homeassistant:"hass:home-assistant",homekit:"hass:home-automation",image_processing:"hass:image-filter-frames",input_boolean:"hass:drawing",input_datetime:"hass:calendar-clock",input_number:"hass:ray-vertex",input_select:"hass:format-list-bulleted",input_text:"hass:textbox",light:"hass:lightbulb",mailbox:"hass:mailbox",notify:"hass:comment-alert",person:"hass:account",plant:"hass:flower",proximity:"hass:apple-safari",remote:"hass:remote",scene:"hass:google-pages",script:"hass:file-document",sensor:"hass:eye",simple_alarm:"hass:bell",sun:"hass:white-balance-sunny",switch:"hass:flash",timer:"hass:timer",updater:"hass:cloud-upload",vacuum:"hass:robot-vacuum",water_heater:"hass:thermometer",weblink:"hass:open-in-new"};function Ht(t,e){if(t in zt)return zt[t];switch(t){case"alarm_control_panel":switch(e){case"armed_home":return"hass:bell-plus";case"armed_night":return"hass:bell-sleep";case"disarmed":return"hass:bell-outline";case"triggered":return"hass:bell-ring";default:return"hass:bell"}case"binary_sensor":return e&&"off"===e?"hass:radiobox-blank":"hass:checkbox-marked-circle";case"cover":return"closed"===e?"hass:window-closed":"hass:window-open";case"lock":return e&&"unlocked"===e?"hass:lock-open":"hass:lock";case"media_player":return e&&"off"!==e&&"idle"!==e?"hass:cast-connected":"hass:cast";case"zwave":switch(e){case"dead":return"hass:emoticon-dead";case"sleeping":return"hass:sleep";case"initializing":return"hass:timer-sand";default:return"hass:z-wave"}default:return console.warn("Unable to find icon for domain "+t+" ("+e+")"),"hass:bookmark"}}var jt={humidity:"hass:water-percent",illuminance:"hass:brightness-5",temperature:"hass:thermometer",pressure:"hass:gauge",power:"hass:flash",signal_strength:"hass:wifi"},Rt={binary_sensor:function(t){var e=t.state&&"off"===t.state;switch(t.attributes.device_class){case"battery":return e?"hass:battery":"hass:battery-outline";case"cold":return e?"hass:thermometer":"hass:snowflake";case"connectivity":return e?"hass:server-network-off":"hass:server-network";case"door":return e?"hass:door-closed":"hass:door-open";case"garage_door":return e?"hass:garage":"hass:garage-open";case"gas":case"power":case"problem":case"safety":case"smoke":return e?"hass:shield-check":"hass:alert";case"heat":return e?"hass:thermometer":"hass:fire";case"light":return e?"hass:brightness-5":"hass:brightness-7";case"lock":return e?"hass:lock":"hass:lock-open";case"moisture":return e?"hass:water-off":"hass:water";case"motion":return e?"hass:walk":"hass:run";case"occupancy":case"presence":return e?"hass:home-outline":"hass:home";case"opening":return e?"hass:square":"hass:square-outline";case"plug":return e?"hass:power-plug-off":"hass:power-plug";case"sound":return e?"hass:music-note-off":"hass:music-note";case"vibration":return e?"hass:crop-portrait":"hass:vibrate";case"window":return e?"hass:window-closed":"hass:window-open";default:return e?"hass:radiobox-blank":"hass:checkbox-marked-circle"}},cover:function(t){var e="closed"!==t.state;switch(t.attributes.device_class){case"garage":return e?"hass:garage-open":"hass:garage";case"door":return e?"hass:door-open":"hass:door-closed";case"shutter":return e?"hass:window-shutter-open":"hass:window-shutter";case"blind":return e?"hass:blinds-open":"hass:blinds";case"window":return e?"hass:window-open":"hass:window-closed";default:return Ht("cover",t.state)}},sensor:function(t){var e=t.attributes.device_class;if(e&&e in jt)return jt[e];if("battery"===e){var s=Number(t.state);if(isNaN(s))return"hass:battery-unknown";var i=10*Math.round(s/10);return i>=100?"hass:battery":i<=0?"hass:battery-alert":"hass:battery-"+i}var n=t.attributes.unit_of_measurement;return"°C"===n||"°F"===n?"hass:thermometer":Ht("sensor")},input_datetime:function(t){return t.attributes.has_date?t.attributes.has_time?Ht("input_datetime"):"hass:calendar":"hass:clock"}};const Yt={m:.001,k:1e3,M:1e6,G:1e9,T:1e12},Lt={type:"entity"};var It={version:"Version",invalid_configuration:"Invalid configuration",show_warning:"Show Warning",entity_not_found:"Entity state not found"},Dt={common:It};const Bt={en:Object.freeze({__proto__:null,common:It,default:Dt})};function qt(t,e="",s=""){const i=(localStorage.getItem("selectedLanguage")||"en").replace(/['"]+/g,"").replace("-","_");let n;try{n=t.split(".").reduce(((t,e)=>t[e]),Bt[i])}catch(e){n=t.split(".").reduce(((t,e)=>t[e]),Bt.en)}return void 0===n&&(n=t.split(".").reduce(((t,e)=>t[e]),Bt.en)),""!==e&&""!==s&&(n=n.replace(e,s)),n}var Vt=((t,...e)=>{const i=1===t.length?t[0]:e.reduce(((e,s,i)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+t[i+1]),t[0]);return new n(i,s)})`.container{display:flex;position:relative;padding:16px}.container.with-header{padding-top:0}.section{flex:1;flex-direction:column;position:relative;min-width:0;max-width:50%}.wide .section:last-child{flex:initial}.spacerv{transition:height .2s}.box{display:flex;align-items:center;transition:height .25s}.box div:first-child{display:flex;justify-content:center;align-items:center;overflow:hidden;background-color:var(--primary-color);width:15px;height:100%;cursor:pointer}.box.type-passthrough div:first-child{opacity:.4}.box .label{flex:1;display:flex;align-items:center;padding:0 10px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.box .label span{font-style:italic}.connectors{position:absolute;top:0;left:15px;right:-.1px;height:100%}.connectors svg{width:100%;height:100%}.connectors path{opacity:.4}`;function Wt(t){return"string"==typeof t?t:t.entity_id}function Ft(t){const e=(s=t,JSON.parse(JSON.stringify(s)));var s;const i=e.sections.map(((t,s)=>({entities:t.entities.map((t=>{const i="string"==typeof t?Object.assign(Object.assign({},Lt),{entity_id:t}):Object.assign(Object.assign({},Lt),t);return i.children&&i.children.forEach((t=>{for(let i=s+1;i<e.sections.length;i++){const n=e.sections[i].entities.find((e=>Wt(e)===t));if(n){if(i>s+1)for(let r=s+1;r<i;r++)e.sections[r].entities.push(Object.assign(Object.assign({},"string"==typeof n?{entity_id:n}:n),{type:"passthrough",children:[t]}));break}}})),i}))})));return Object.assign(Object.assign({height:200,unit_prefix:"",round:0,min_box_height:3,min_box_distance:5,show_states:!0,show_units:!0},e),{sections:i})}console.info(`%c sankey-chart %c ${qt("common.version")} 0.11.0 `,"color: orange; font-weight: bold; background: black","color: white; font-weight: bold; background: dimgray"),window.customCards=window.customCards||[],window.customCards.push({type:"sankey-chart",name:"Sankey Chart",description:"A card to display a sankey chart. For example for power consumptionA template custom card for you to create something awesome"});let Gt=class extends K{constructor(){super(...arguments),this.entityIds=[],this.height=200,this.sections=[],this.statePerPixelY=0,this.lastUpdate=0}static getStubConfig(){return{}}setConfig(t){if(!t||!Array.isArray(t.sections))throw new Error(qt("common.invalid_configuration"));this.config=Ft(t),this.height=this.config.height;const e=[];t.sections.forEach((t=>{t.entities.forEach((t=>{e.push(Wt(t))}))})),this.entityIds=e}getCardSize(){return 4}shouldUpdate(t){if(!this.config)return!1;const e=Date.now();if(this.config.throttle&&e-this.lastUpdate<this.config.throttle){const t=this.lastUpdate;return setTimeout((()=>{t===this.lastUpdate&&this.requestUpdate()}),e-this.lastUpdate),!1}if(t.has("config"))return!0;const s=t.get("hass");return!s||this.entityIds.some((t=>s.states[t]!==this.hass.states[t]))}willUpdate(){this.lastUpdate=Date.now()}render(){const t=this.entityIds.find((t=>!this._getEntityState(t)));if(t)return U`${pt(this._showError(qt("common.entity_not_found")+" "+t))}`;this._calcElements();const e=st({container:!0,wide:!!this.config.wide,"with-header":!!this.config.title});return U`<ha-card tabindex="0" label="Sankey Chart" .header="${this.config.title}"><div class="${e}" style="${et({height:this.height+"px"})}">${this.sections.map(((t,e)=>this.renderSection(e)))}</div></ha-card>`}renderSection(t){const{show_names:e,show_icons:s,show_states:i,show_units:n}=this.config,r=this.sections[t],{boxes:o,spacerH:a}=r,l=t<this.sections.length-1&&o.some((t=>t.children.length>0));return U`<div class="section">${l?U`<div class="connectors"><svg viewBox="0 0 100 ${this.height}" preserveAspectRatio="none">${this.renderBranchConnectors(t)}</svg></div>`:null} ${o.map(((t,r)=>{const{entity:o,extraSpacers:l}=t,h=function(t,e){let s,i=e;do{s=t.toFixed(i++)}while(/^[0\.]*$/.test(s));return parseFloat(s).toLocaleString()}(t.state,this.config.round),c="passthrough"!==t.config.type,d=t.config.name||o.attributes.friendly_name||"",u=t.size+a-1,p=u<15?{maxHeight:u+"px",fontSize:u/15+"em"}:{};return U`${r>0?U`<div class="spacerv" style="${et({height:a+"px"})}"></div>`:null} ${l?U`<div class="spacerv" style="${et({height:l+"px"})}"></div>`:null}<div class="${"box type-"+t.config.type}" style="${et({height:t.size+"px"})}"><div style="${et({backgroundColor:t.color})}" @click="${()=>this._handleBoxClick(t)}" title="${d}">${s&&c?U`<ha-icon .icon="${function(t){if(!t)return"hass:bookmark";if(t.attributes.icon)return t.attributes.icon;var e=function(t){return t.substr(0,t.indexOf("."))}(t.entity_id);return e in Rt?Rt[e](t):Ht(e,t.state)}(o)}"></ha-icon>`:null}</div><div class="label" style="${et(p)}">${i&&c?U`<span class="state">${h}</span>${n?U`<span class="unit">${t.unit_of_measurement}</span>`:null}`:null} ${e&&c?U`<span class="name"> ${d}</span>`:null}</div></div>${l?U`<div class="spacerv" style="${et({height:l+"px"})}"></div>`:null}`}))}</div>`}renderBranchConnectors(t){const e=this.sections[t],{boxes:s}=e;return s.filter((t=>t.children.length>0)).map((e=>{const s=this.sections[t+1].boxes.filter((t=>e.children.includes(t.entity_id))),i=function(t,e){let s=0;return e.map((e=>{const i=t.state-s,n=e.connections.parents.reduce(((t,e)=>t+e.state),0),r=e.state-n,o=Math.min(i,r);if(o<=0)return{state:o};const a=s/t.state*t.size+t.top,l=Math.max(o/t.state*t.size,0),h=n/e.state*e.size+e.top,c=Math.max(o/e.state*e.size,0);return s+=o,{startY:a,startSize:l,startColor:t.color,endY:h,endSize:c,endColor:e.color,state:o}}))}(e,s).filter(((t,e)=>{if(t.state>0){if(s[e].connections.parents.push(t),"passthrough"===s[e].config.type&&t.state!==s[e].state){s[e].state=t.state;const i=Math.floor(t.state/this.statePerPixelY);s[e].extraSpacers=(s[e].size-i)/2,t.endY+=s[e].extraSpacers,s[e].top+=s[e].extraSpacers,s[e].size=i}return!0}return!1}));return N`<defs>${i.map(((t,s)=>N`<linearGradient id="gradient${e.entity_id+s}"><stop offset="0%" stop-color="${t.startColor}"></stop><stop offset="100%" stop-color="${t.endColor}"></stop></linearGradient>`))}</defs>${i.map(((t,s)=>N`<path d="M0,${t.startY} C50,${t.startY} 50,${t.endY} 100,${t.endY} L100,${t.endY+t.endSize} C50,${t.endY+t.endSize} 50,${t.startY+t.startSize} 0,${t.startY+t.startSize} Z" fill="url(#gradient${e.entity_id+s})">`))}`}))}_calcElements(){this.statePerPixelY=0;const t=this.config.sections.map((()=>[]));this.sections=this.config.sections.map(((e,s)=>{let i=0;const n=e.entities.reduce(((e,i)=>{const n=t[s].find((t=>{var e,s,n;return!!(null===(e=t.children)||void 0===e?void 0:e.includes(i.entity_id))&&(null===(s=t.foundChildren)||void 0===s||s.push(i.entity_id),(null===(n=t.foundChildren)||void 0===n?void 0:n.length)===t.children.length)}));return n?[...e,i,n]:[...e,i]}),[]);let r=n.filter((t=>{const e=Number(this._getEntityState(t).state);return!isNaN(e)&&e>0})).map((e=>{const n=this._getEntityState(e);let{state:r,unit_of_measurement:o}=function(t,e,s){if(!s)return{state:e,unit_of_measurement:s};const i=Object.keys(Yt).find((t=>0===s.indexOf(t)))||"",n=Yt[i]||1,r=Yt[t]||1;return n===r?{state:e,unit_of_measurement:s}:{state:e*n/r,unit_of_measurement:i?s.replace(i,t):t+s}}(this.config.unit_prefix,Number(n.state),n.attributes.unit_of_measurement);e.accountedState&&(r=Math.max(0,r-e.accountedState)),i+=r,t[s]&&t[s].forEach((t=>{var s;(null===(s=t.children)||void 0===s?void 0:s.includes(e.entity_id))&&(t.accountedState+=r)}));let a=e.children||[];if(e.remaining&&t[s+1]){a=[...a,e.entity_id];const i="string"==typeof e.remaining?{name:e.remaining}:e.remaining;t[s+1].push(Object.assign(Object.assign(Object.assign(Object.assign({},e),{color:void 0}),i),{type:"remaining_parent_state",accountedState:0,foundChildren:[]}))}let l=e.color||"var(--primary-color)";if(void 0!==e.color_on_state&&e.color_on_state){const t=void 0===e.color_limit?1:e.color_limit,s=void 0===e.color_below?"var(--primary-color)":e.color_below,i=void 0===e.color_above?"var(--paper-item-icon-color)":e.color_above;l=r>t?i:s}return{config:e,entity:n,entity_id:Wt(e),state:r,unit_of_measurement:o,color:l,children:a,connections:{parents:[]},top:0,size:0}})).filter((t=>t.state>0));if(!r.length)return{boxes:r,total:i,spacerH:0,statePerPixelY:0};const o=this.height-(r.length-1)*this.config.min_box_distance,a=this._calcBoxHeights(r,o,i);r=a.boxes;const l=r.reduce(((t,e)=>t+e.size),0),h=this.height-l,c=r.length>1?h/(r.length-1):0;let d=0;return r=r.map((t=>{const e=d;return d+=t.size+c,Object.assign(Object.assign({},t),{top:e})})),{boxes:r,total:i,spacerH:c,statePerPixelY:a.statePerPixelY}})).filter((t=>t.boxes.length>0)).map((t=>{let e=0,{boxes:s}=t;t.statePerPixelY!==this.statePerPixelY?s=s.map((t=>{const s=Math.max(this.config.min_box_height,Math.floor(t.state/this.statePerPixelY));return e+=s,Object.assign(Object.assign({},t),{size:s})})):e=s.reduce(((t,e)=>t+e.size),0);const i=this.height-e,n=s.length>1?i/(s.length-1):0;let r=0;return s=s.map((t=>{const e=r;return r+=t.size+n,Object.assign(Object.assign({},t),{top:e})})),Object.assign(Object.assign({},t),{boxes:s,spacerH:n})}))}_calcBoxHeights(t,e,s){const i=s/e;i>this.statePerPixelY&&(this.statePerPixelY=i);let n=0;const r=t.map((t=>{if(t.size===this.config.min_box_height)return t;let e=Math.floor(t.state/this.statePerPixelY);return e<this.config.min_box_height&&(n+=this.config.min_box_height-e,e=this.config.min_box_height),Object.assign(Object.assign({},t),{size:e})}));return n>0?this._calcBoxHeights(r,e-n,s):{boxes:r,statePerPixelY:this.statePerPixelY}}_handleBoxClick(t){Nt(this,"hass-more-info",{entityId:t.entity_id})}async _showError(t){const e={type:"error",error:t,origConfig:this.config};let s;const i=window.loadCardHelpers?window.loadCardHelpers():void 0;return s=i?(await i).createCardElement(e):function(t,e){void 0===e&&(e=!1);var s=function(t,e){return i("hui-error-card",{type:"error",error:t,config:e})},i=function(t,e){var i=window.document.createElement(t);try{i.setConfig(e)}catch(i){return console.error(t,i),s(i.message,e)}return i};if(!t||"object"!=typeof t||!e&&!t.type)return s("No type defined",t);var n=t.type;if(n&&n.startsWith("custom:"))n=n.substr("custom:".length);else if(e)if(Tt.has(n))n="hui-"+n+"-row";else{if(!t.entity)return s("Invalid config given.",t);var r=t.entity.split(".",1)[0];n="hui-"+(Mt[r]||"text")+"-entity-row"}else n="hui-"+n+"-card";if(customElements.get(n))return i(n,t);var o=s("Custom element doesn't exist: "+t.type+".",t);o.style.display="None";var a=setTimeout((function(){o.style.display=""}),2e3);return customElements.whenDefined(t.type).then((function(){clearTimeout(a),Nt(o,"ll-rebuild",{},o)})),o}(e),this.hass&&(s.hass=this.hass),U`${s}`}_getEntityState(t){const e=this.hass.states[Wt(t)];return"object"==typeof t&&t.attribute?Object.assign(Object.assign({},e),{state:e.attributes[t.attribute]}):e}static get styles(){return Vt}};t([mt({attribute:!1})],Gt.prototype,"hass",void 0),t([mt({attribute:!1})],Gt.prototype,"entityIds",void 0),t([gt()],Gt.prototype,"config",void 0),t([gt()],Gt.prototype,"height",void 0),t([gt()],Gt.prototype,"sections",void 0),t([gt()],Gt.prototype,"statePerPixelY",void 0),t([gt()],Gt.prototype,"lastUpdate",void 0),Gt=t([(t=>e=>"function"==typeof e?((t,e)=>(window.customElements.define(t,e),e))(t,e):((t,e)=>{const{kind:s,elements:i}=e;return{kind:s,elements:i,finisher(e){window.customElements.define(t,e)}}})(t,e))("sankey-chart")],Gt);export{Gt as SankeyChart};
