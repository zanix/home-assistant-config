function t(t,i,e,o){var n,r=arguments.length,s=r<3?i:null===o?o=Object.getOwnPropertyDescriptor(i,e):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,i,e,o);else for(var l=t.length-1;l>=0;l--)(n=t[l])&&(s=(r<3?n(s):r>3?n(i,e,s):n(i,e))||s);return r>3&&s&&Object.defineProperty(i,e,s),s}var i,e;function o(){return(o=Object.assign||function(t){for(var i=1;i<arguments.length;i++){var e=arguments[i];for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o])}return t}).apply(this,arguments)}!function(t){t.language="language",t.system="system",t.comma_decimal="comma_decimal",t.decimal_comma="decimal_comma",t.space_comma="space_comma",t.none="none"}(i||(i={})),function(t){t.language="language",t.system="system",t.am_pm="12",t.twenty_four="24"}(e||(e={}));var n=function(t,e,o){var n=e?function(t){switch(t.number_format){case i.comma_decimal:return["en-US","en"];case i.decimal_comma:return["de","es","it"];case i.space_comma:return["fr","sv","cs"];case i.system:return;default:return t.language}}(e):void 0;if(Number.isNaN=Number.isNaN||function t(i){return"number"==typeof i&&t(i)},(null==e?void 0:e.number_format)!==i.none&&!Number.isNaN(Number(t))&&Intl)try{return new Intl.NumberFormat(n,r(t,o)).format(Number(t))}catch(i){return console.error(i),new Intl.NumberFormat(void 0,r(t,o)).format(Number(t))}return"string"==typeof t?t:function(t,i){return void 0===i&&(i=2),Math.round(t*Math.pow(10,i))/Math.pow(10,i)}(t,null==o?void 0:o.maximumFractionDigits).toString()+("currency"===(null==o?void 0:o.style)?" "+o.currency:"")},r=function(t,i){var e=o({maximumFractionDigits:2},i);if("string"!=typeof t)return e;if(!i||!i.minimumFractionDigits&&!i.maximumFractionDigits){var n=t.indexOf(".")>-1?t.split(".")[1].length:0;e.minimumFractionDigits=n,e.maximumFractionDigits=n}return e};
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const s=window,l=s.ShadowRoot&&(void 0===s.ShadyCSS||s.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,a=Symbol(),d=new WeakMap;class c{constructor(t,i,e){if(this._$cssResult$=!0,e!==a)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=i}get styleSheet(){let t=this.o;const i=this.t;if(l&&void 0===t){const e=void 0!==i&&1===i.length;e&&(t=d.get(i)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),e&&d.set(i,t))}return t}toString(){return this.cssText}}const v=l?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let i="";for(const e of t.cssRules)i+=e.cssText;return(t=>new c("string"==typeof t?t:t+"",void 0,a))(i)})(t):t
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */;var h;const u=window,p=u.trustedTypes,y=p?p.emptyScript:"",g=u.reactiveElementPolyfillSupport,f={toAttribute(t,i){switch(i){case Boolean:t=t?y:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,i){let e=t;switch(i){case Boolean:e=null!==t;break;case Number:e=null===t?null:Number(t);break;case Object:case Array:try{e=JSON.parse(t)}catch(t){e=null}}return e}},m=(t,i)=>i!==t&&(i==i||t==t),_={attribute:!0,type:String,converter:f,reflect:!1,hasChanged:m};class b extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this.u()}static addInitializer(t){var i;this.finalize(),(null!==(i=this.h)&&void 0!==i?i:this.h=[]).push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach(((i,e)=>{const o=this._$Ep(e,i);void 0!==o&&(this._$Ev.set(o,e),t.push(o))})),t}static createProperty(t,i=_){if(i.state&&(i.attribute=!1),this.finalize(),this.elementProperties.set(t,i),!i.noAccessor&&!this.prototype.hasOwnProperty(t)){const e="symbol"==typeof t?Symbol():"__"+t,o=this.getPropertyDescriptor(t,e,i);void 0!==o&&Object.defineProperty(this.prototype,t,o)}}static getPropertyDescriptor(t,i,e){return{get(){return this[i]},set(o){const n=this[t];this[i]=o,this.requestUpdate(t,n,e)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||_}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),void 0!==t.h&&(this.h=[...t.h]),this.elementProperties=new Map(t.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const t=this.properties,i=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const e of i)this.createProperty(e,t[e])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const i=[];if(Array.isArray(t)){const e=new Set(t.flat(1/0).reverse());for(const t of e)i.unshift(v(t))}else void 0!==t&&i.push(v(t));return i}static _$Ep(t,i){const e=i.attribute;return!1===e?void 0:"string"==typeof e?e:"string"==typeof t?t.toLowerCase():void 0}u(){var t;this._$E_=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$Eg(),this.requestUpdate(),null===(t=this.constructor.h)||void 0===t||t.forEach((t=>t(this)))}addController(t){var i,e;(null!==(i=this._$ES)&&void 0!==i?i:this._$ES=[]).push(t),void 0!==this.renderRoot&&this.isConnected&&(null===(e=t.hostConnected)||void 0===e||e.call(t))}removeController(t){var i;null===(i=this._$ES)||void 0===i||i.splice(this._$ES.indexOf(t)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach(((t,i)=>{this.hasOwnProperty(i)&&(this._$Ei.set(i,this[i]),delete this[i])}))}createRenderRoot(){var t;const i=null!==(t=this.shadowRoot)&&void 0!==t?t:this.attachShadow(this.constructor.shadowRootOptions);return((t,i)=>{l?t.adoptedStyleSheets=i.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet)):i.forEach((i=>{const e=document.createElement("style"),o=s.litNonce;void 0!==o&&e.setAttribute("nonce",o),e.textContent=i.cssText,t.appendChild(e)}))})(i,this.constructor.elementStyles),i}connectedCallback(){var t;void 0===this.renderRoot&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(t=this._$ES)||void 0===t||t.forEach((t=>{var i;return null===(i=t.hostConnected)||void 0===i?void 0:i.call(t)}))}enableUpdating(t){}disconnectedCallback(){var t;null===(t=this._$ES)||void 0===t||t.forEach((t=>{var i;return null===(i=t.hostDisconnected)||void 0===i?void 0:i.call(t)}))}attributeChangedCallback(t,i,e){this._$AK(t,e)}_$EO(t,i,e=_){var o;const n=this.constructor._$Ep(t,e);if(void 0!==n&&!0===e.reflect){const r=(void 0!==(null===(o=e.converter)||void 0===o?void 0:o.toAttribute)?e.converter:f).toAttribute(i,e.type);this._$El=t,null==r?this.removeAttribute(n):this.setAttribute(n,r),this._$El=null}}_$AK(t,i){var e;const o=this.constructor,n=o._$Ev.get(t);if(void 0!==n&&this._$El!==n){const t=o.getPropertyOptions(n),r="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==(null===(e=t.converter)||void 0===e?void 0:e.fromAttribute)?t.converter:f;this._$El=n,this[n]=r.fromAttribute(i,t.type),this._$El=null}}requestUpdate(t,i,e){let o=!0;void 0!==t&&(((e=e||this.constructor.getPropertyOptions(t)).hasChanged||m)(this[t],i)?(this._$AL.has(t)||this._$AL.set(t,i),!0===e.reflect&&this._$El!==t&&(void 0===this._$EC&&(this._$EC=new Map),this._$EC.set(t,e))):o=!1),!this.isUpdatePending&&o&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach(((t,i)=>this[i]=t)),this._$Ei=void 0);let i=!1;const e=this._$AL;try{i=this.shouldUpdate(e),i?(this.willUpdate(e),null===(t=this._$ES)||void 0===t||t.forEach((t=>{var i;return null===(i=t.hostUpdate)||void 0===i?void 0:i.call(t)})),this.update(e)):this._$Ek()}catch(t){throw i=!1,this._$Ek(),t}i&&this._$AE(e)}willUpdate(t){}_$AE(t){var i;null===(i=this._$ES)||void 0===i||i.forEach((t=>{var i;return null===(i=t.hostUpdated)||void 0===i?void 0:i.call(t)})),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(t){return!0}update(t){void 0!==this._$EC&&(this._$EC.forEach(((t,i)=>this._$EO(i,this[i],t))),this._$EC=void 0),this._$Ek()}updated(t){}firstUpdated(t){}}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var $;b.finalized=!0,b.elementProperties=new Map,b.elementStyles=[],b.shadowRootOptions={mode:"open"},null==g||g({ReactiveElement:b}),(null!==(h=u.reactiveElementVersions)&&void 0!==h?h:u.reactiveElementVersions=[]).push("1.6.1");const w=window,x=w.trustedTypes,k=x?x.createPolicy("lit-html",{createHTML:t=>t}):void 0,A="$lit$",E=`lit$${(Math.random()+"").slice(9)}$`,M="?"+E,S=`<${M}>`,P=document,C=()=>P.createComment(""),D=t=>null===t||"object"!=typeof t&&"function"!=typeof t,T=Array.isArray,N="[ \t\n\f\r]",H=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,O=/-->/g,R=/>/g,U=RegExp(`>|${N}(?:([^\\s"'>=/]+)(${N}*=${N}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),z=/'/g,W=/"/g,j=/^(?:script|style|textarea|title)$/i,B=t=>(i,...e)=>({_$litType$:t,strings:i,values:e}),I=B(1),F=B(2),V=Symbol.for("lit-noChange"),L=Symbol.for("lit-nothing"),G=new WeakMap,Y=P.createTreeWalker(P,129,null,!1),q=(t,i)=>{const e=t.length-1,o=[];let n,r=2===i?"<svg>":"",s=H;for(let i=0;i<e;i++){const e=t[i];let l,a,d=-1,c=0;for(;c<e.length&&(s.lastIndex=c,a=s.exec(e),null!==a);)c=s.lastIndex,s===H?"!--"===a[1]?s=O:void 0!==a[1]?s=R:void 0!==a[2]?(j.test(a[2])&&(n=RegExp("</"+a[2],"g")),s=U):void 0!==a[3]&&(s=U):s===U?">"===a[0]?(s=null!=n?n:H,d=-1):void 0===a[1]?d=-2:(d=s.lastIndex-a[2].length,l=a[1],s=void 0===a[3]?U:'"'===a[3]?W:z):s===W||s===z?s=U:s===O||s===R?s=H:(s=U,n=void 0);const v=s===U&&t[i+1].startsWith("/>")?" ":"";r+=s===H?e+S:d>=0?(o.push(l),e.slice(0,d)+A+e.slice(d)+E+v):e+E+(-2===d?(o.push(void 0),i):v)}const l=r+(t[e]||"<?>")+(2===i?"</svg>":"");if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return[void 0!==k?k.createHTML(l):l,o]};class K{constructor({strings:t,_$litType$:i},e){let o;this.parts=[];let n=0,r=0;const s=t.length-1,l=this.parts,[a,d]=q(t,i);if(this.el=K.createElement(a,e),Y.currentNode=this.el.content,2===i){const t=this.el.content,i=t.firstChild;i.remove(),t.append(...i.childNodes)}for(;null!==(o=Y.nextNode())&&l.length<s;){if(1===o.nodeType){if(o.hasAttributes()){const t=[];for(const i of o.getAttributeNames())if(i.endsWith(A)||i.startsWith(E)){const e=d[r++];if(t.push(i),void 0!==e){const t=o.getAttribute(e.toLowerCase()+A).split(E),i=/([.?@])?(.*)/.exec(e);l.push({type:1,index:n,name:i[2],strings:t,ctor:"."===i[1]?tt:"?"===i[1]?et:"@"===i[1]?ot:X})}else l.push({type:6,index:n})}for(const i of t)o.removeAttribute(i)}if(j.test(o.tagName)){const t=o.textContent.split(E),i=t.length-1;if(i>0){o.textContent=x?x.emptyScript:"";for(let e=0;e<i;e++)o.append(t[e],C()),Y.nextNode(),l.push({type:2,index:++n});o.append(t[i],C())}}}else if(8===o.nodeType)if(o.data===M)l.push({type:2,index:n});else{let t=-1;for(;-1!==(t=o.data.indexOf(E,t+1));)l.push({type:7,index:n}),t+=E.length-1}n++}}static createElement(t,i){const e=P.createElement("template");return e.innerHTML=t,e}}function J(t,i,e=t,o){var n,r,s,l;if(i===V)return i;let a=void 0!==o?null===(n=e._$Co)||void 0===n?void 0:n[o]:e._$Cl;const d=D(i)?void 0:i._$litDirective$;return(null==a?void 0:a.constructor)!==d&&(null===(r=null==a?void 0:a._$AO)||void 0===r||r.call(a,!1),void 0===d?a=void 0:(a=new d(t),a._$AT(t,e,o)),void 0!==o?(null!==(s=(l=e)._$Co)&&void 0!==s?s:l._$Co=[])[o]=a:e._$Cl=a),void 0!==a&&(i=J(t,a._$AS(t,i.values),a,o)),i}class Z{constructor(t,i){this.u=[],this._$AN=void 0,this._$AD=t,this._$AM=i}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}v(t){var i;const{el:{content:e},parts:o}=this._$AD,n=(null!==(i=null==t?void 0:t.creationScope)&&void 0!==i?i:P).importNode(e,!0);Y.currentNode=n;let r=Y.nextNode(),s=0,l=0,a=o[0];for(;void 0!==a;){if(s===a.index){let i;2===a.type?i=new Q(r,r.nextSibling,this,t):1===a.type?i=new a.ctor(r,a.name,a.strings,this,t):6===a.type&&(i=new nt(r,this,t)),this.u.push(i),a=o[++l]}s!==(null==a?void 0:a.index)&&(r=Y.nextNode(),s++)}return n}p(t){let i=0;for(const e of this.u)void 0!==e&&(void 0!==e.strings?(e._$AI(t,e,i),i+=e.strings.length-2):e._$AI(t[i])),i++}}class Q{constructor(t,i,e,o){var n;this.type=2,this._$AH=L,this._$AN=void 0,this._$AA=t,this._$AB=i,this._$AM=e,this.options=o,this._$Cm=null===(n=null==o?void 0:o.isConnected)||void 0===n||n}get _$AU(){var t,i;return null!==(i=null===(t=this._$AM)||void 0===t?void 0:t._$AU)&&void 0!==i?i:this._$Cm}get parentNode(){let t=this._$AA.parentNode;const i=this._$AM;return void 0!==i&&11===(null==t?void 0:t.nodeType)&&(t=i.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,i=this){t=J(this,t,i),D(t)?t===L||null==t||""===t?(this._$AH!==L&&this._$AR(),this._$AH=L):t!==this._$AH&&t!==V&&this.g(t):void 0!==t._$litType$?this.$(t):void 0!==t.nodeType?this.T(t):(t=>T(t)||"function"==typeof(null==t?void 0:t[Symbol.iterator]))(t)?this.k(t):this.g(t)}S(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.S(t))}g(t){this._$AH!==L&&D(this._$AH)?this._$AA.nextSibling.data=t:this.T(P.createTextNode(t)),this._$AH=t}$(t){var i;const{values:e,_$litType$:o}=t,n="number"==typeof o?this._$AC(t):(void 0===o.el&&(o.el=K.createElement(o.h,this.options)),o);if((null===(i=this._$AH)||void 0===i?void 0:i._$AD)===n)this._$AH.p(e);else{const t=new Z(n,this),i=t.v(this.options);t.p(e),this.T(i),this._$AH=t}}_$AC(t){let i=G.get(t.strings);return void 0===i&&G.set(t.strings,i=new K(t)),i}k(t){T(this._$AH)||(this._$AH=[],this._$AR());const i=this._$AH;let e,o=0;for(const n of t)o===i.length?i.push(e=new Q(this.S(C()),this.S(C()),this,this.options)):e=i[o],e._$AI(n),o++;o<i.length&&(this._$AR(e&&e._$AB.nextSibling,o),i.length=o)}_$AR(t=this._$AA.nextSibling,i){var e;for(null===(e=this._$AP)||void 0===e||e.call(this,!1,!0,i);t&&t!==this._$AB;){const i=t.nextSibling;t.remove(),t=i}}setConnected(t){var i;void 0===this._$AM&&(this._$Cm=t,null===(i=this._$AP)||void 0===i||i.call(this,t))}}class X{constructor(t,i,e,o,n){this.type=1,this._$AH=L,this._$AN=void 0,this.element=t,this.name=i,this._$AM=o,this.options=n,e.length>2||""!==e[0]||""!==e[1]?(this._$AH=Array(e.length-1).fill(new String),this.strings=e):this._$AH=L}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,i=this,e,o){const n=this.strings;let r=!1;if(void 0===n)t=J(this,t,i,0),r=!D(t)||t!==this._$AH&&t!==V,r&&(this._$AH=t);else{const o=t;let s,l;for(t=n[0],s=0;s<n.length-1;s++)l=J(this,o[e+s],i,s),l===V&&(l=this._$AH[s]),r||(r=!D(l)||l!==this._$AH[s]),l===L?t=L:t!==L&&(t+=(null!=l?l:"")+n[s+1]),this._$AH[s]=l}r&&!o&&this.j(t)}j(t){t===L?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=t?t:"")}}class tt extends X{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===L?void 0:t}}const it=x?x.emptyScript:"";class et extends X{constructor(){super(...arguments),this.type=4}j(t){t&&t!==L?this.element.setAttribute(this.name,it):this.element.removeAttribute(this.name)}}class ot extends X{constructor(t,i,e,o,n){super(t,i,e,o,n),this.type=5}_$AI(t,i=this){var e;if((t=null!==(e=J(this,t,i,0))&&void 0!==e?e:L)===V)return;const o=this._$AH,n=t===L&&o!==L||t.capture!==o.capture||t.once!==o.once||t.passive!==o.passive,r=t!==L&&(o===L||n);n&&this.element.removeEventListener(this.name,this,o),r&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var i,e;"function"==typeof this._$AH?this._$AH.call(null!==(e=null===(i=this.options)||void 0===i?void 0:i.host)&&void 0!==e?e:this.element,t):this._$AH.handleEvent(t)}}class nt{constructor(t,i,e){this.element=t,this.type=6,this._$AN=void 0,this._$AM=i,this.options=e}get _$AU(){return this._$AM._$AU}_$AI(t){J(this,t)}}const rt=w.litHtmlPolyfillSupport;null==rt||rt(K,Q),(null!==($=w.litHtmlVersions)&&void 0!==$?$:w.litHtmlVersions=[]).push("2.7.0");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var st,lt;class at extends b{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t,i;const e=super.createRenderRoot();return null!==(t=(i=this.renderOptions).renderBefore)&&void 0!==t||(i.renderBefore=e.firstChild),e}update(t){const i=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=((t,i,e)=>{var o,n;const r=null!==(o=null==e?void 0:e.renderBefore)&&void 0!==o?o:i;let s=r._$litPart$;if(void 0===s){const t=null!==(n=null==e?void 0:e.renderBefore)&&void 0!==n?n:null;r._$litPart$=s=new Q(i.insertBefore(C(),t),t,void 0,null!=e?e:{})}return s._$AI(t),s})(i,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),null===(t=this._$Do)||void 0===t||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),null===(t=this._$Do)||void 0===t||t.setConnected(!1)}render(){return V}}at.finalized=!0,at._$litElement$=!0,null===(st=globalThis.litElementHydrateSupport)||void 0===st||st.call(globalThis,{LitElement:at});const dt=globalThis.litElementPolyfillSupport;null==dt||dt({LitElement:at}),(null!==(lt=globalThis.litElementVersions)&&void 0!==lt?lt:globalThis.litElementVersions=[]).push("3.3.0");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const ct=(t,i)=>"method"===i.kind&&i.descriptor&&!("value"in i.descriptor)?{...i,finisher(e){e.createProperty(i.key,t)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:i.key,initializer(){"function"==typeof i.initializer&&(this[i.key]=i.initializer.call(this))},finisher(e){e.createProperty(i.key,t)}};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function vt(t){return(i,e)=>void 0!==e?((t,i,e)=>{i.constructor.createProperty(e,t)})(t,i,e):ct(t,i)
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const ht=({finisher:t,descriptor:i})=>(e,o)=>{var n;if(void 0===o){const o=null!==(n=e.originalKey)&&void 0!==n?n:e.key,r=null!=i?{kind:"method",placement:"prototype",key:o,descriptor:i(e.key)}:{...e,key:o};return null!=t&&(r.finisher=function(i){t(i,o)}),r}{const n=e.constructor;void 0!==i&&Object.defineProperty(e,o,i(o)),null==t||t(n,o)}}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */;function ut(t,i){return ht({descriptor:e=>{const o={get(){var i,e;return null!==(e=null===(i=this.renderRoot)||void 0===i?void 0:i.querySelector(t))&&void 0!==e?e:null},enumerable:!0,configurable:!0};if(i){const i="symbol"==typeof e?Symbol():"__"+e;o.get=function(){var e,o;return void 0===this[i]&&(this[i]=null!==(o=null===(e=this.renderRoot)||void 0===e?void 0:e.querySelector(t))&&void 0!==o?o:null),this[i]}}return o}})}
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var pt;null===(pt=window.HTMLSlotElement)||void 0===pt||pt.prototype.assignedElements;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const yt=1;class gt{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,i,e){this._$Ct=t,this._$AM=i,this._$Ci=e}_$AS(t,i){return this.update(t,i)}update(t,i){return this.render(...i)}}
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ft=(t=>(...i)=>({_$litDirective$:t,values:i}))(class extends gt{constructor(t){var i;if(super(t),t.type!==yt||"class"!==t.name||(null===(i=t.strings)||void 0===i?void 0:i.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(t){return" "+Object.keys(t).filter((i=>t[i])).join(" ")+" "}update(t,[i]){var e,o;if(void 0===this.nt){this.nt=new Set,void 0!==t.strings&&(this.st=new Set(t.strings.join(" ").split(/\s/).filter((t=>""!==t))));for(const t in i)i[t]&&!(null===(e=this.st)||void 0===e?void 0:e.has(t))&&this.nt.add(t);return this.render(i)}const n=t.element.classList;this.nt.forEach((t=>{t in i||(n.remove(t),this.nt.delete(t))}));for(const t in i){const e=!!i[t];e===this.nt.has(t)||(null===(o=this.st)||void 0===o?void 0:o.has(t))||(e?(n.add(t),this.nt.add(t)):(n.remove(t),this.nt.delete(t)))}return V}}),mt=(t,i)=>Number(`${Math.round(Number(`${t}e${i}`))}e-${i}`)
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */;function _t(t){return!isNaN(parseFloat(t))&&!isNaN(Number(t))}function bt(t,i=0){return _t(t)?Number(t):i}function $t(t,i=/\s+/){const e=[];if(null!=t){const o=Array.isArray(t)?t:`${t}`.split(i);for(const t of o){const i=`${t}`.trim();i&&e.push(i)}}return e}var wt="0.0.8";console.groupCollapsed(`%c⚡ Power Flow Card Plus v${wt} is installed`,"color: #488fc2; font-weight: bold"),console.log("Readme:","https://github.com/flixlix/power-flow-card-plus"),console.groupEnd();const xt=function(t,i,e){var o;return void 0===e&&(e=!1),function(){var n=[].slice.call(arguments),r=this,s=e&&!o;clearTimeout(o),o=setTimeout((function(){o=null,e||t.apply(r,n)}),i),s&&t.apply(r,n)}}((t=>{console.log(`%c⚡ Power Flow Card Plus v${wt} %cError: ${t}`,"color: #488fc2; font-weight: bold","color: #b33a3a; font-weight: normal")}),6e4),kt=238.76104;let At=class extends at{constructor(){super(...arguments),this._config={},this.unavailableOrMisconfiguredError=t=>xt(`entity "${null!=t?t:"Unknown"}" is not available or misconfigured`),this.entityExists=t=>t in this.hass.states,this.entityAvailable=t=>{var i;return _t(null===(i=this.hass.states[t])||void 0===i?void 0:i.state)},this.entityInverted=t=>this._config.inverted_entities.includes(t),this.previousDur={},this.circleRate=(t,i)=>{var e,o;const n=null===(e=this._config)||void 0===e?void 0:e.min_flow_rate,r=null===(o=this._config)||void 0===o?void 0:o.max_flow_rate;return r-t/i*(r-n)},this.getEntityState=t=>t&&this.entityAvailable(t)?bt(this.hass.states[t].state):(this.unavailableOrMisconfiguredError(t),0),this.getEntityStateWatts=t=>{if(!t||!this.entityAvailable(t))return this.unavailableOrMisconfiguredError(t),0;const i=this.hass.states[t],e=bt(i.state);return"W"===i.attributes.unit_of_measurement?e:1e3*e},this.displayNonFossilState=t=>{var i;if(!t||!this.entityAvailable(t))return this.unavailableOrMisconfiguredError(t),"NaN";const e="percentage"===(null===(i=this._config.entities.fossil_fuel_percentage)||void 0===i?void 0:i.state_type)?"%":"W",o=1-this.getEntityState(t)/100;let n,r;if(n="string"==typeof this._config.entities.grid.entity?this.getEntityStateWatts(this._config.entities.grid.entity)>0?this.getEntityStateWatts(this._config.entities.grid.entity):0:this.getEntityStateWatts(this._config.entities.grid.entity.consumption)||0,"W"===e){const t=n*o;r=this.displayValue(t)}else{r=(100-this.getEntityState(t)).toFixed(0).toString().concat(e)}return r},this.displayValue=(t,i)=>{if(null===t)return"0";const e=void 0===i&&t>=this._config.watt_threshold;return`${n(e?mt(t/1e3,this._config.kw_decimals):mt(t,this._config.w_decimals),this.hass.locale)} ${i||(e?"kW":"W")}`}}setConfig(t){if(!t.entities||!t.entities.battery&&!t.entities.grid&&!t.entities.solar)throw new Error("At least one entity for battery, grid or solar must be defined");this._config=Object.assign(Object.assign({},t),{inverted_entities:$t(t.inverted_entities,","),kw_decimals:bt(t.kw_decimals,1),min_flow_rate:bt(t.min_flow_rate,.75),max_flow_rate:bt(t.max_flow_rate,6),w_decimals:bt(t.w_decimals,1),watt_threshold:bt(t.watt_threshold)})}getCardSize(){return 3}openDetails(t){if(!t||!this._config.clickable_entities)return;if(!this.entityExists(t))return;const i=new CustomEvent("hass-more-info",{composed:!0,detail:{entityId:t}});this.dispatchEvent(i)}render(){var t,i,e,o,r,s,l,a,d,c,v,h,u,p,y,g,f,m,_,b,$,w,x,k,A,E,M,S,P,C,D,T,N,H,O,R,U,z,W,j,B,V,L,G,Y,q,K,J,Z,Q,X,tt,it,et,ot,nt,rt,st,lt,at,dt,ct,vt,ht,ut,pt,yt,gt,mt,_t,bt,$t,wt,xt,At,Et,Mt,St,Pt,Ct,Dt,Tt,Nt,Ht,Ot,Rt,Ut,zt,Wt,jt,Bt,It,Ft,Vt,Lt,Gt,Yt,qt,Kt,Jt,Zt,Qt,Xt,ti,ii,ei,oi,ni,ri,si,li,ai,di,ci,vi,hi,ui,pi,yi,gi,fi,mi,_i,bi;if(!this._config||!this.hass)return I``;const{entities:$i}=this._config;this.style.setProperty("--clickable-cursor",this._config.clickable_entities?"pointer":"default");const wi=void 0!==$i.grid,xi=void 0!==$i.battery,ki=void 0!==$i.individual2&&!0===(null===(t=$i.individual2)||void 0===t?void 0:t.display_zero)||this.getEntityStateWatts(null===(i=$i.individual2)||void 0===i?void 0:i.entity)>0&&this.entityAvailable(null===(e=$i.individual2)||void 0===e?void 0:e.entity),Ai=void 0!==(null===(r=null===(o=$i.individual2)||void 0===o?void 0:o.secondary_info)||void 0===r?void 0:r.entity)&&(this.getEntityState(null===(l=null===(s=$i.individual2)||void 0===s?void 0:s.secondary_info)||void 0===l?void 0:l.entity)>0||!0===$i.individual2.secondary_info.display_zero),Ei=void 0!==$i.individual1&&!0===(null===(a=$i.individual1)||void 0===a?void 0:a.display_zero)||this.getEntityStateWatts(null===(d=$i.individual1)||void 0===d?void 0:d.entity)>0&&this.entityAvailable(null===(c=$i.individual1)||void 0===c?void 0:c.entity),Mi=void 0!==(null===(h=null===(v=$i.individual1)||void 0===v?void 0:v.secondary_info)||void 0===h?void 0:h.entity)&&(this.getEntityState(null===(p=null===(u=$i.individual1)||void 0===u?void 0:u.secondary_info)||void 0===p?void 0:p.entity)>0||!0===$i.individual1.secondary_info.display_zero),Si=void 0!==$i.solar,Pi=wi&&("string"==typeof $i.grid.entity||$i.grid.entity.production);let Ci=0,Di=0;void 0!==(null===(g=null===(y=this._config.entities.grid)||void 0===y?void 0:y.color)||void 0===g?void 0:g.consumption)&&this.style.setProperty("--energy-grid-consumption-color",(null===(m=null===(f=this._config.entities.grid)||void 0===f?void 0:f.color)||void 0===m?void 0:m.consumption)||"var(--energy-grid-consumption-color)"),wi&&(Ci="string"==typeof $i.grid.entity?this.entityInverted("grid")?Math.abs(Math.min(this.getEntityStateWatts(null===(_=$i.grid)||void 0===_?void 0:_.entity),0)):Math.max(this.getEntityStateWatts(null===(b=$i.grid)||void 0===b?void 0:b.entity),0):this.getEntityStateWatts($i.grid.entity.consumption)),void 0!==(null===(w=null===($=this._config.entities.grid)||void 0===$?void 0:$.color)||void 0===w?void 0:w.production)&&this.style.setProperty("--energy-grid-return-color",(null===(k=null===(x=this._config.entities.grid)||void 0===x?void 0:x.color)||void 0===k?void 0:k.production)||"#a280db"),Pi&&(Di="string"==typeof $i.grid.entity?this.entityInverted("grid")?Math.max(this.getEntityStateWatts($i.grid.entity),0):Math.abs(Math.min(this.getEntityStateWatts($i.grid.entity),0)):this.getEntityStateWatts(null===(A=$i.grid)||void 0===A?void 0:A.entity.production));const Ti=null===(E=this._config.entities.grid)||void 0===E?void 0:E.color_icon;this.style.setProperty("--icon-grid-color","consumption"===Ti?"var(--energy-grid-consumption-color)":"production"===Ti?"var(--energy-grid-return-color)":!0===Ti?Ci>=Di?"var(--energy-grid-consumption-color)":"var(--energy-grid-return-color)":"var(--primary-text-color)");let Ni=null,Hi=null;const Oi=(null===(M=this._config.entities.individual1)||void 0===M?void 0:M.name)||"Car",Ri=(null===(S=this._config.entities.individual1)||void 0===S?void 0:S.icon)||"mdi:car-electric",Ui=(null===(P=this._config.entities.individual1)||void 0===P?void 0:P.color)||"#D0CC5B";if(this.style.setProperty("--individualone-color",Ui),this.style.setProperty("--icon-individualone-color",(null===(C=this._config.entities.individual1)||void 0===C?void 0:C.color_icon)?"var(--individualone-color)":"var(--primary-text-color)"),Ei){const t=this.hass.states[null===(D=this._config.entities.individual1)||void 0===D?void 0:D.entity],i=Number(t.state);Ni=this.entityInverted("individual1")?Math.abs(Math.min(i,0)):Math.max(i,0)}if(Mi){const t=this.hass.states[null===(N=null===(T=this._config.entities.individual1)||void 0===T?void 0:T.secondary_info)||void 0===N?void 0:N.entity],i=Number(t.state);Hi=this.entityInverted("individual1Secondary")?Math.abs(Math.min(i,0)):Math.max(i,0)}let zi=null,Wi=null;const ji=(null===(H=this._config.entities.individual2)||void 0===H?void 0:H.name)||"Motorcycle",Bi=(null===(O=this._config.entities.individual2)||void 0===O?void 0:O.icon)||"mdi:motorbike-electric",Ii=(null===(R=this._config.entities.individual2)||void 0===R?void 0:R.color)||"#964CB5";if(this.style.setProperty("--individualtwo-color",Ii),this.style.setProperty("--icon-individualtwo-color",(null===(U=this._config.entities.individual2)||void 0===U?void 0:U.color_icon)?"var(--individualtwo-color)":"var(--primary-text-color)"),ki){const t=this.hass.states[null===(z=this._config.entities.individual2)||void 0===z?void 0:z.entity],i=Number(t.state);zi=this.entityInverted("individual2")?Math.abs(Math.min(i,0)):Math.max(i,0)}if(Ai){const t=this.hass.states[null===(j=null===(W=this._config.entities.individual2)||void 0===W?void 0:W.secondary_info)||void 0===j?void 0:j.entity],i=Number(t.state);Wi=this.entityInverted("individual2Secondary")?Math.abs(Math.min(i,0)):Math.max(i,0)}let Fi=0;void 0!==(null===(B=this._config.entities.solar)||void 0===B?void 0:B.color)&&this.style.setProperty("--energy-solar-color",(null===(V=this._config.entities.solar)||void 0===V?void 0:V.color)||"#ff9800"),this.style.setProperty("--icon-solar-color",(null===(L=this._config.entities.solar)||void 0===L?void 0:L.color_icon)?"var(--energy-solar-color)":"var(--primary-text-color)"),Si&&(Fi=this.entityInverted("solar")?Math.abs(Math.min(this.getEntityStateWatts(null===(G=$i.solar)||void 0===G?void 0:G.entity),0)):Math.max(this.getEntityStateWatts(null===(Y=$i.solar)||void 0===Y?void 0:Y.entity),0));let Vi=0,Li=0;xi&&("string"==typeof(null===(q=$i.battery)||void 0===q?void 0:q.entity)?(Vi=this.entityInverted("battery")?Math.max(this.getEntityStateWatts($i.battery.entity),0):Math.abs(Math.min(this.getEntityStateWatts($i.battery.entity),0)),Li=this.entityInverted("battery")?Math.abs(Math.min(this.getEntityStateWatts($i.battery.entity),0)):Math.max(this.getEntityStateWatts($i.battery.entity),0)):(Vi=this.getEntityStateWatts(null===(J=null===(K=$i.battery)||void 0===K?void 0:K.entity)||void 0===J?void 0:J.production),Li=this.getEntityStateWatts(null===(Q=null===(Z=$i.battery)||void 0===Z?void 0:Z.entity)||void 0===Q?void 0:Q.consumption)));let Gi=null;Si&&(Gi=Fi-(null!=Di?Di:0)-(null!=Vi?Vi:0));let Yi=null,qi=null;null!==Gi&&Gi<0&&(xi&&(Yi=Math.abs(Gi),Yi>Ci&&(qi=Math.min(Yi-Ci,0),Yi=Ci)),Gi=0);let Ki=null;Si&&xi?(qi||(qi=Math.max(0,(Di||0)-(Fi||0)-(Vi||0)-(Yi||0))),Ki=Vi-(Yi||0)):!Si&&xi&&(qi=Di);let Ji=0;Si&&Di&&(Ji=Di-(null!=qi?qi:0));let Zi=0;xi&&(Zi=(null!=Li?Li:0)-(null!=qi?qi:0)),void 0!==(null===(tt=null===(X=this._config.entities.battery)||void 0===X?void 0:X.color)||void 0===tt?void 0:tt.consumption)&&this.style.setProperty("--energy-battery-out-color",(null===(et=null===(it=this._config.entities.battery)||void 0===it?void 0:it.color)||void 0===et?void 0:et.consumption)||"#4db6ac"),void 0!==(null===(nt=null===(ot=this._config.entities.battery)||void 0===ot?void 0:ot.color)||void 0===nt?void 0:nt.production)&&this.style.setProperty("--energy-battery-in-color",(null===(st=null===(rt=this._config.entities.battery)||void 0===rt?void 0:rt.color)||void 0===st?void 0:st.production)||"#a280db");const Qi=null===(lt=this._config.entities.battery)||void 0===lt?void 0:lt.color_icon;this.style.setProperty("--icon-battery-color","consumption"===Qi?"var(--energy-battery-in-color)":"production"===Qi?"var(--energy-battery-out-color)":!0===Qi?Vi>=Li?"var(--energy-battery-in-color)":"var(--energy-battery-out-color)":"var(--primary-text-color)");const Xi=Math.max(Ci-(null!=Yi?Yi:0),0),te=Math.max(Xi+(null!=Gi?Gi:0)+(null!=Zi?Zi:0),0);let ie=0;Zi&&(ie=kt*(Zi/te));let ee=0;Si&&(ee=kt*(Gi/te));const oe=kt*((te-(null!=Zi?Zi:0)-(null!=Gi?Gi:0))/te),ne=Xi+(null!=Gi?Gi:0)+Ji+(null!=Ki?Ki:0)+(null!=Zi?Zi:0)+(null!=Yi?Yi:0)+(null!=qi?qi:0),re=(null===(dt=null===(at=$i.battery)||void 0===at?void 0:at.state_of_charge)||void 0===dt?void 0:dt.length)?this.getEntityState(null===(ct=$i.battery)||void 0===ct?void 0:ct.state_of_charge):null;let se="mdi:battery-high";null===re?se="mdi:battery":re<=72&&re>44?se="mdi:battery-medium":re<=44&&re>16?se="mdi:battery-low":re<=16&&(se="mdi:battery-outline"),void 0!==(null===(vt=$i.battery)||void 0===vt?void 0:vt.icon)&&(se=null===(ht=$i.battery)||void 0===ht?void 0:ht.icon);const le={batteryGrid:this.circleRate(null!==(ut=null!=Yi?Yi:qi)&&void 0!==ut?ut:0,ne),batteryToHome:this.circleRate(null!=Zi?Zi:0,ne),gridToHome:this.circleRate(Xi,ne),solarToBattery:this.circleRate(null!=Ki?Ki:0,ne),solarToGrid:this.circleRate(Ji,ne),solarToHome:this.circleRate(null!=Gi?Gi:0,ne)};["batteryGrid","batteryToHome","gridToHome","solarToBattery","solarToGrid","solarToHome"].forEach((t=>{const i=this[`${t}Flow`];i&&this.previousDur[t]&&this.previousDur[t]!==le[t]&&(i.pauseAnimations(),i.setCurrentTime(i.getCurrentTime()*(le[t]/this.previousDur[t])),i.unpauseAnimations()),this.previousDur[t]=le[t]}));const ae=1*Xi-this.getEntityState(null===(pt=$i.fossil_fuel_percentage)||void 0===pt?void 0:pt.entity)/100>0&&void 0!==(null===(yt=$i.fossil_fuel_percentage)||void 0===yt?void 0:yt.entity)&&this.entityAvailable(null===(gt=$i.fossil_fuel_percentage)||void 0===gt?void 0:gt.entity),de=void 0!==(null===(mt=$i.fossil_fuel_percentage)||void 0===mt?void 0:mt.entity)&&!0===(null===(_t=$i.fossil_fuel_percentage)||void 0===_t?void 0:_t.display_zero)||ae;this.style.setProperty("--non-fossil-color",(null===(bt=this._config.entities.fossil_fuel_percentage)||void 0===bt?void 0:bt.color)||"var(--energy-non-fossil-color)"),this.style.setProperty("--icon-non-fossil-color",(null===($t=this._config.entities.fossil_fuel_percentage)||void 0===$t?void 0:$t.color_icon)?"var(--non-fossil-color)":"var(--primary-text-color)");const ce=null===(wt=this._config.entities.home)||void 0===wt?void 0:wt.color_icon;let ve="var(--primary-text-color)";return"solar"===ce?ve="var(--energy-solar-color)":"battery"===ce?ve="var(--energy-battery-out-color)":"grid"===ce?ve="var(--energy-grid-consumption-color)":!0===ce&&(ve=ee>=ie&&ee>=oe?"var(--energy-solar-color)":ie>=ee&&ie>=oe?"var(--energy-battery-out-color)":"var(--energy-grid-consumption-color)"),this.style.setProperty("--icon-home-color",ve),I`
      <ha-card .header=${this._config.title}>
        <div class="card-content">
          ${Si||ki||Ei?I`<div class="row">
                ${de?I`<div class="circle-container low-carbon">
                      <span class="label"
                        >${(null===(xt=$i.fossil_fuel_percentage)||void 0===xt?void 0:xt.name)?null===(At=$i.fossil_fuel_percentage)||void 0===At?void 0:At.name:this.hass.localize("ui.panel.lovelace.cards.energy.energy_distribution.low_carbon")}</span
                      >
                      <div
                        class="circle"
                        @click=${t=>{var i;t.stopPropagation(),this.openDetails(null===(i=$i.fossil_fuel_percentage)||void 0===i?void 0:i.entity)}}
                        @keyDown=${t=>{var i;"Enter"===t.key&&(t.stopPropagation(),this.openDetails(null===(i=$i.fossil_fuel_percentage)||void 0===i?void 0:i.entity))}}
                      >
                        <ha-icon
                          .icon=${(null===(Et=$i.fossil_fuel_percentage)||void 0===Et?void 0:Et.icon)?null===(Mt=$i.fossil_fuel_percentage)||void 0===Mt?void 0:Mt.icon:"mdi:leaf"}
                          class="low-carbon"
                        ></ha-icon>
                        <span class="low-carbon"
                          >${this.displayNonFossilState($i.fossil_fuel_percentage.entity)}</span
                        >
                      </div>
                      <svg width="80" height="30">
                        <path
                          d="M40 -10 v40"
                          class="low-carbon"
                          id="low-carbon"
                        />
                        ${ae?F`<circle
                              r="2.4"
                              class="low-carbon"
                              vector-effect="non-scaling-stroke"
                            >
                                <animateMotion
                                  dur="1.66s"
                                  repeatCount="indefinite"
                                  calcMode="linear"
                                >
                                  <mpath xlink:href="#low-carbon" />
                                </animateMotion>
                            </circle>`:""}
                      </svg>
                    </div>`:I`<div class="spacer"></div>`}
                ${Si?I`<div class="circle-container solar">
                      <span class="label"
                        >${$i.solar.name||this.hass.localize("ui.panel.lovelace.cards.energy.energy_distribution.solar")}</span
                      >
                      <div
                        class="circle"
                        @click=${t=>{t.stopPropagation(),this.openDetails($i.solar.entity)}}
                        @keyDown=${t=>{"Enter"===t.key&&(t.stopPropagation(),this.openDetails($i.solar.entity))}}
                      >
                        <ha-icon
                          .icon=${$i.solar.icon||"mdi:solar-power"}
                        ></ha-icon>
                        <span class="solar">
                          ${this.displayValue(Fi)}</span
                        >
                      </div>
                    </div>`:ki||Ei?I`<div class="spacer"></div>`:""}
                ${ki?I`<div class="circle-container individual2">
                      <span class="label">${ji}</span>
                      <div
                        class="circle"
                        @click=${t=>{var i;t.stopPropagation(),this.openDetails(null===(i=$i.individual2)||void 0===i?void 0:i.entity)}}
                        @keyDown=${t=>{var i;"Enter"===t.key&&(t.stopPropagation(),this.openDetails(null===(i=$i.individual2)||void 0===i?void 0:i.entity))}}
                      >
                        ${Ai?I`
                              <span class="secondary-info individual2">
                                ${(null===(Pt=null===(St=$i.individual2)||void 0===St?void 0:St.secondary_info)||void 0===Pt?void 0:Pt.icon)?I`<ha-icon
                                      class="secondary-info small"
                                      .icon=${null===(Dt=null===(Ct=$i.individual2)||void 0===Ct?void 0:Ct.secondary_info)||void 0===Dt?void 0:Dt.icon}
                                    ></ha-icon>`:""}
                                ${this.displayValue(Wi,null===(Nt=null===(Tt=$i.individual2)||void 0===Tt?void 0:Tt.secondary_info)||void 0===Nt?void 0:Nt.unit_of_measurement)}
                              </span>
                            `:""}
                        <ha-icon
                          id="individual2-icon"
                          .icon=${Bi}
                          style=${Ai?"padding-top: 2px;":"padding-top: 0px;"}
                        ></ha-icon>
                        ${this.displayValue(zi,null===(Ht=this._config.entities.individual2)||void 0===Ht?void 0:Ht.unit_of_measurement)}
                      </div>
                      <svg width="80" height="30">
                        <path d="M40 -10 v50" id="individual2" />
                        ${zi?F`<circle
                              r="2.4"
                              class="individual2"
                              vector-effect="non-scaling-stroke"
                            >
                              <animateMotion
                                dur="1.66s"
                                repeatCount="indefinite"
                                calcMode="linear"
                                keyPoints=${(null===(Ot=$i.individual2)||void 0===Ot?void 0:Ot.inverted_animation)?"0;1":"1;0"}
                                keyTimes="0;1"
                              >
                                <mpath xlink:href="#individual2" />
                              </animateMotion>
                            </circle>`:""}
                      </svg>
                    </div>`:Ei?I`<div class="circle-container individual1">
                      <span class="label">${Oi}</span>
                      <div
                        class="circle"
                        @click=${t=>{var i;t.stopPropagation(),this.openDetails(null===(i=$i.individual1)||void 0===i?void 0:i.entity)}}
                        @keyDown=${t=>{var i;"Enter"===t.key&&(t.stopPropagation(),this.openDetails(null===(i=$i.individual1)||void 0===i?void 0:i.entity))}}
                      >
                        ${Mi?I`
                              <span class="secondary-info individual1">
                                ${(null===(Ut=null===(Rt=$i.individual1)||void 0===Rt?void 0:Rt.secondary_info)||void 0===Ut?void 0:Ut.icon)?I`<ha-icon
                                      class="secondary-info small"
                                      .icon=${null===(Wt=null===(zt=$i.individual1)||void 0===zt?void 0:zt.secondary_info)||void 0===Wt?void 0:Wt.icon}
                                    ></ha-icon>`:""}
                                ${this.displayValue(Hi,null===(Bt=null===(jt=$i.individual1)||void 0===jt?void 0:jt.secondary_info)||void 0===Bt?void 0:Bt.unit_of_measurement)}
                              </span>
                            `:""}
                        <ha-icon
                          id="individual1-icon"
                          .icon=${Ri}
                          style=${Mi?"padding-top: 2px;":"padding-top: 0px;"}
                        ></ha-icon>
                        ${(null===(It=this._config.entities.individual1)||void 0===It?void 0:It.unit_of_measurement)?this.displayValue(Ni,null===(Ft=this._config.entities.individual1)||void 0===Ft?void 0:Ft.unit_of_measurement):this.displayValue(Ni)}
                      </div>
                      <svg width="80" height="30">
                        <path d="M40 -10 v40" id="individual1" />
                        ${Ni?F`<circle
                                r="2.4"
                                class="individual1"
                                vector-effect="non-scaling-stroke"
                              >
                                <animateMotion
                                  dur="1.66s"
                                  repeatCount="indefinite"
                                  keyPoints=${(null===(Vt=$i.individual1)||void 0===Vt?void 0:Vt.inverted_animation)?"0;1":"1;0"}
                                  keyTimes="0;1"
                                  
                                >
                                  <mpath xlink:href="#individual1" />
                                </animateMotion>
                              </circle>`:""}
                      </svg>
                    </div> `:I`<div class="spacer"></div>`}
              </div>`:I``}
          <div class="row">
            ${wi?I` <div class="circle-container grid">
                  <div
                    class="circle"
                    @click=${t=>{const i="string"==typeof $i.grid.entity?$i.grid.entity:$i.grid.entity.consumption||$i.grid.entity.production;t.stopPropagation(),this.openDetails(i)}}
                    @keyDown=${t=>{if("Enter"===t.key){const i="string"==typeof $i.grid.entity?$i.grid.entity:$i.grid.entity.consumption||$i.grid.entity.production;t.stopPropagation(),this.openDetails(i)}}}
                  >
                    <ha-icon
                      .icon=${(null===(Lt=$i.grid)||void 0===Lt?void 0:Lt.icon)||"mdi:transmission-tower"}
                    ></ha-icon>
                    ${("two_way"===(null===(Gt=$i.grid)||void 0===Gt?void 0:Gt.display_state)||void 0===(null===(Yt=$i.grid)||void 0===Yt?void 0:Yt.display_state)||"one_way"===(null===(qt=$i.grid)||void 0===qt?void 0:qt.display_state)&&Di>0||"one_way_no_zero"===(null===(Kt=$i.grid)||void 0===Kt?void 0:Kt.display_state)&&(null===Ci||0===Ci)&&0!==Di)&&null!==Di?I`<span
                          class="return"
                          @click=${t=>{const i="string"==typeof $i.grid.entity?$i.grid.entity:$i.grid.entity.production;t.stopPropagation(),this.openDetails(i)}}
                          @keyDown=${t=>{if("Enter"===t.key){const i="string"==typeof $i.grid.entity?$i.grid.entity:$i.grid.entity.production;t.stopPropagation(),this.openDetails(i)}}}
                        >
                          <ha-icon
                            class="small"
                            .icon=${"mdi:arrow-left"}
                          ></ha-icon>
                          ${this.displayValue(Di)}
                        </span>`:null}
                    ${("two_way"===(null===(Jt=$i.grid)||void 0===Jt?void 0:Jt.display_state)||void 0===(null===(Zt=$i.grid)||void 0===Zt?void 0:Zt.display_state)||"one_way"===(null===(Qt=$i.grid)||void 0===Qt?void 0:Qt.display_state)&&Ci>0||"one_way_no_zero"===(null===(Xt=$i.grid)||void 0===Xt?void 0:Xt.display_state)&&(null===Di||0===Di))&&null!==Ci?I` <span class="consumption">
                          <ha-icon
                            class="small"
                            .icon=${"mdi:arrow-right"}
                          ></ha-icon
                          >${this.displayValue(Ci)}
                        </span>`:""}
                  </div>
                  <span class="label"
                    >${$i.grid.name||this.hass.localize("ui.panel.lovelace.cards.energy.energy_distribution.grid")}</span
                  >
                </div>`:I`<div class="spacer"></div>`}
            <div class="circle-container home">
              <div
                class="circle"
                id="home-circle"
                @click=${t=>{var i;t.stopPropagation(),this.openDetails(null===(i=$i.home)||void 0===i?void 0:i.entity)}}
                @keyDown=${t=>{var i;"Enter"===t.key&&(t.stopPropagation(),this.openDetails(null===(i=$i.home)||void 0===i?void 0:i.entity))}}
              >
                <ha-icon .icon=${(null===(ti=$i.home)||void 0===ti?void 0:ti.icon)||"mdi:home"}></ha-icon>
                ${this.displayValue(te)}
                <svg>
                  ${void 0!==ee?F`<circle
                            class="solar"
                            cx="40"
                            cy="40"
                            r="38"
                            stroke-dasharray="${ee} ${kt-ee}"
                            shape-rendering="geometricPrecision"
                            stroke-dashoffset="-${kt-ee}"
                          />`:""}
                  ${ie?F`<circle
                            class="battery"
                            cx="40"
                            cy="40"
                            r="38"
                            stroke-dasharray="${ie} ${kt-ie}"
                            stroke-dashoffset="-${kt-ie-(ee||0)}"
                            shape-rendering="geometricPrecision"
                          />`:""}
                  <circle
                    class="grid"
                    cx="40"
                    cy="40"
                    r="38"
                    stroke-dasharray="${null!=oe?oe:kt-ee-(ie||0)} ${void 0!==oe?kt-oe:ee+(ie||0)}"
                    stroke-dashoffset="0"
                    shape-rendering="geometricPrecision"
                  />
                </svg>
              </div>
              ${ki&&Ei?"":I` <span class="label"
                    >${(null===(ii=$i.home)||void 0===ii?void 0:ii.name)||this.hass.localize("ui.panel.lovelace.cards.energy.energy_distribution.home")}</span
                  >`}
            </div>
          </div>
          ${xi||Ei&&ki?I`<div class="row">
                <div class="spacer"></div>
                ${xi?I` <div class="circle-container battery">
                      <div
                        class="circle"
                        @click=${t=>{var i,e,o,n,r;const s=(null===(i=$i.battery)||void 0===i?void 0:i.state_of_charge)?null===(e=$i.battery)||void 0===e?void 0:e.state_of_charge:"string"==typeof(null===(o=$i.battery)||void 0===o?void 0:o.entity)?null===(n=$i.battery)||void 0===n?void 0:n.entity:null===(r=$i.battery)||void 0===r?void 0:r.entity.production;t.stopPropagation(),this.openDetails(s)}}
                        @keyDown=${t=>{var i,e;if("Enter"===t.key){const o=(null===(i=$i.battery)||void 0===i?void 0:i.state_of_charge)?null===(e=$i.battery)||void 0===e?void 0:e.state_of_charge:"string"==typeof $i.battery.entity?$i.battery.entity:$i.battery.entity.production;t.stopPropagation(),this.openDetails(o)}}}
                      >
                        ${null!==re?I` <span
                              @click=${t=>{var i;t.stopPropagation(),this.openDetails(null===(i=$i.battery)||void 0===i?void 0:i.state_of_charge)}}
                              @keyDown=${t=>{var i;"Enter"===t.key&&(t.stopPropagation(),this.openDetails(null===(i=$i.battery)||void 0===i?void 0:i.state_of_charge))}}
                            >
                              ${n(re,this.hass.locale,{maximumFractionDigits:0,minimumFractionDigits:0})}%
                            </span>`:null}
                        <ha-icon
                          .icon=${se}
                          style=${"two_way"===(null===(ei=$i.battery)||void 0===ei?void 0:ei.display_state)?"padding-top: 0px; padding-bottom: 2px;":"one_way"===(null===(oi=$i.battery)||void 0===oi?void 0:oi.display_state)&&0===Vi&&0===Li?"padding-top: 2px; padding-bottom: 0px;":"padding-top: 2px; padding-bottom: 2px;"}
                          @click=${t=>{var i;t.stopPropagation(),this.openDetails(null===(i=$i.battery)||void 0===i?void 0:i.state_of_charge)}}
                          @keyDown=${t=>{var i;"Enter"===t.key&&(t.stopPropagation(),this.openDetails(null===(i=$i.battery)||void 0===i?void 0:i.state_of_charge))}}
                        ></ha-icon>
                        ${"two_way"===(null===(ni=$i.battery)||void 0===ni?void 0:ni.display_state)||void 0===(null===(ri=$i.battery)||void 0===ri?void 0:ri.display_state)||"one_way"===(null===(si=$i.battery)||void 0===si?void 0:si.display_state)&&Vi>0||"one_way_no_zero"===(null===(li=$i.battery)||void 0===li?void 0:li.display_state)&&0!==Vi?I`<span
                              class="battery-in"
                              @click=${t=>{const i="string"==typeof $i.battery.entity?$i.battery.entity:$i.battery.entity.production;t.stopPropagation(),this.openDetails(i)}}
                              @keyDown=${t=>{if("Enter"===t.key){const i="string"==typeof $i.battery.entity?$i.battery.entity:$i.battery.entity.production;t.stopPropagation(),this.openDetails(i)}}}
                            >
                              <ha-icon
                                class="small"
                                .icon=${"mdi:arrow-down"}
                              ></ha-icon>
                              ${this.displayValue(Vi)}</span
                            >`:""}
                        ${"two_way"===(null===(ai=$i.battery)||void 0===ai?void 0:ai.display_state)||void 0===(null===(di=$i.battery)||void 0===di?void 0:di.display_state)||"one_way"===(null===(ci=$i.battery)||void 0===ci?void 0:ci.display_state)&&Li>0||"one_way_no_zero"===(null===(vi=$i.battery)||void 0===vi?void 0:vi.display_state)&&(0===Vi||0!==Li)?I`<span
                              class="battery-out"
                              @click=${t=>{const i="string"==typeof $i.battery.entity?$i.battery.entity:$i.battery.entity.consumption;t.stopPropagation(),this.openDetails(i)}}
                              @keyDown=${t=>{if("Enter"===t.key){const i="string"==typeof $i.battery.entity?$i.battery.entity:$i.battery.entity.consumption;t.stopPropagation(),this.openDetails(i)}}}
                            >
                              <ha-icon
                                class="small"
                                .icon=${"mdi:arrow-up"}
                              ></ha-icon>
                              ${this.displayValue(Li)}</span
                            >`:""}
                      </div>
                      <span class="label"
                        >${$i.battery.name||this.hass.localize("ui.panel.lovelace.cards.energy.energy_distribution.battery")}</span
                      >
                    </div>`:I`<div class="spacer"></div>`}
                ${ki&&Ei?I`<div class="circle-container individual1 bottom">
                      <svg width="80" height="30">
                        <path d="M40 40 v-40" id="individual1" />
                        ${Ni?F`<circle
                                r="2.4"
                                class="individual1"
                                vector-effect="non-scaling-stroke"                              
                              >
                                <animateMotion
                                  dur="1.66s"
                                  repeatCount="indefinite"
                                  calcMode="linear"
                                  keyPoints=${(null===(hi=$i.individual1)||void 0===hi?void 0:hi.inverted_animation)?"0;1":"1;0"}
                                  keyTimes="0;1" 
                                >
                                  <mpath xlink:href="#individual1" />
                                </animateMotion>
                              </circle>`:""}
                      </svg>
                      <div
                        class="circle"
                        @click=${t=>{var i;t.stopPropagation(),this.openDetails(null===(i=$i.individual1)||void 0===i?void 0:i.entity)}}
                        @keyDown=${t=>{var i;"Enter"===t.key&&(t.stopPropagation(),this.openDetails(null===(i=$i.individual1)||void 0===i?void 0:i.entity))}}
                      >
                        ${Mi?I`
                              <span class="secondary-info individual1">
                                ${(null===(pi=null===(ui=$i.individual1)||void 0===ui?void 0:ui.secondary_info)||void 0===pi?void 0:pi.icon)?I`<ha-icon
                                      class="secondary-info small"
                                      .icon=${null===(gi=null===(yi=$i.individual1)||void 0===yi?void 0:yi.secondary_info)||void 0===gi?void 0:gi.icon}
                                    ></ha-icon>`:""}
                                ${this.displayValue(Hi,null===(mi=null===(fi=$i.individual1)||void 0===fi?void 0:fi.secondary_info)||void 0===mi?void 0:mi.unit_of_measurement)}
                              </span>
                            `:""}
                        <ha-icon
                          id="individual1-icon"
                          .icon=${Ri}
                          style=${Mi?"padding-top: 2px;":"padding-top: 0px;"}
                        ></ha-icon>
                        ${(null===(_i=this._config.entities.individual1)||void 0===_i?void 0:_i.unit_of_measurement)?this.displayValue(Ni,null===(bi=this._config.entities.individual1)||void 0===bi?void 0:bi.unit_of_measurement):this.displayValue(Ni)}
                      </div>
                      <span class="label">${Oi}</span>
                    </div>`:I`<div class="spacer"></div>`}
              </div>`:I`<div class="spacer"></div>`}
          ${Si?I`<div
                class="lines ${ft({high:xi,"individual1-individual2":!xi&&ki&&Ei})}"
              >
                <svg
                  viewBox="0 0 100 100"
                  xmlns="http://www.w3.org/2000/svg"
                  preserveAspectRatio="xMidYMid slice"
                  id="solar-home-flow"
                >
                  <path
                    id="solar"
                    class="solar"
                    d="M${xi?55:53},0 v${wi?15:17} c0,${xi?"30 10,30 30,30":"35 10,35 30,35"} h25"
                    vector-effect="non-scaling-stroke"
                  ></path>
                  ${Gi?F`<circle
                            r="1"
                            class="solar"
                            vector-effect="non-scaling-stroke"
                          >
                            <animateMotion
                              dur="${le.solarToHome}s"
                              repeatCount="indefinite"
                              calcMode="linear"
                            >
                              <mpath xlink:href="#solar" />
                            </animateMotion>
                          </circle>`:""}
                </svg>
              </div>`:""}
          ${Pi&&Si?I`<div
                class="lines ${ft({high:xi,"individual1-individual2":!xi&&ki&&Ei})}"
              >
                <svg
                  viewBox="0 0 100 100"
                  xmlns="http://www.w3.org/2000/svg"
                  preserveAspectRatio="xMidYMid slice"
                  id="solar-grid-flow"
                >
                  <path
                    id="return"
                    class="return"
                    d="M${xi?45:47},0 v15 c0,${xi?"30 -10,30 -30,30":"35 -10,35 -30,35"} h-20"
                    vector-effect="non-scaling-stroke"
                  ></path>
                  ${Ji&&Si?F`<circle
                        r="1"
                        class="return"
                        vector-effect="non-scaling-stroke"
                      >
                        <animateMotion
                          dur="${le.solarToGrid}s"
                          repeatCount="indefinite"
                          calcMode="linear"
                        >
                          <mpath xlink:href="#return" />
                        </animateMotion>
                      </circle>`:""}
                </svg>
              </div>`:""}
          ${xi&&Si?I`<div
                class="lines ${ft({high:xi,"individual1-individual2":!xi&&ki&&Ei})}"
              >
                <svg
                  viewBox="0 0 100 100"
                  xmlns="http://www.w3.org/2000/svg"
                  preserveAspectRatio="xMidYMid slice"
                  id="solar-battery-flow"
                >
                  <path
                    id="battery-solar"
                    class="battery-solar"
                    d="M50,0 V100"
                    vector-effect="non-scaling-stroke"
                  ></path>
                  ${Ki?F`<circle
                            r="1"
                            class="battery-solar"
                            vector-effect="non-scaling-stroke"
                          >
                            <animateMotion
                              dur="${le.solarToBattery}s"
                              repeatCount="indefinite"
                              calcMode="linear"
                            >
                              <mpath xlink:href="#battery-solar" />
                            </animateMotion>
                          </circle>`:""}
                </svg>
              </div>`:""}
          ${wi?I`<div
                class="lines ${ft({high:xi,"individual1-individual2":!xi&&ki&&Ei})}"
              >
                <svg
                  viewBox="0 0 100 100"
                  xmlns="http://www.w3.org/2000/svg"
                  preserveAspectRatio="xMidYMid slice"
                  id="grid-home-flow"
                >
                  <path
                    class="grid"
                    id="grid"
                    d="M0,${xi?50:Si?56:53} H100"
                    vector-effect="non-scaling-stroke"
                  ></path>
                  ${Xi?F`<circle
                    r="1"
                    class="grid"
                    vector-effect="non-scaling-stroke"
                  >
                    <animateMotion
                      dur="${le.gridToHome}s"
                      repeatCount="indefinite"
                      calcMode="linear"
                    >
                      <mpath xlink:href="#grid" />
                    </animateMotion>
                  </circle>`:""}
                </svg>
              </div>`:null}
          ${xi?I`<div
                class="lines ${ft({high:xi,"individual1-individual2":!xi&&ki&&Ei})}"
              >
                <svg
                  viewBox="0 0 100 100"
                  xmlns="http://www.w3.org/2000/svg"
                  preserveAspectRatio="xMidYMid slice"
                  id="battery-home-flow"
                >
                  <path
                    id="battery-home"
                    class="battery-home"
                    d="M55,100 v-${wi?15:17} c0,-30 10,-30 30,-30 h20"
                    vector-effect="non-scaling-stroke"
                  ></path>
                  ${Zi?F`<circle
                        r="1"
                        class="battery-home"
                        vector-effect="non-scaling-stroke"
                      >
                        <animateMotion
                          dur="${le.batteryToHome}s"
                          repeatCount="indefinite"
                          calcMode="linear"
                        >
                          <mpath xlink:href="#battery-home" />
                        </animateMotion>
                      </circle>`:""}
                </svg>
              </div>`:""}
          ${wi&&xi?I`<div
                class="lines ${ft({high:xi,"individual1-individual2":!xi&&ki&&Ei})}"
              >
                <svg
                  viewBox="0 0 100 100"
                  xmlns="http://www.w3.org/2000/svg"
                  preserveAspectRatio="xMidYMid slice"
                  id="battery-grid-flow"
                >
                  <path
                    id="battery-grid"
                    class=${ft({"battery-from-grid":Boolean(Yi),"battery-to-grid":Boolean(qi)})}
                    d="M45,100 v-15 c0,-30 -10,-30 -30,-30 h-20"
                    vector-effect="non-scaling-stroke"
                  ></path>
                  ${Yi?F`<circle
                    r="1"
                    class="battery-from-grid"
                    vector-effect="non-scaling-stroke"
                  >
                    <animateMotion
                      dur="${le.batteryGrid}s"
                      repeatCount="indefinite"
                      keyPoints="1;0" keyTimes="0;1"
                      calcMode="linear"
                    >
                      <mpath xlink:href="#battery-grid" />
                    </animateMotion>
                  </circle>`:""}
                  ${qi?F`<circle
                        r="1"
                        class="battery-to-grid"
                        vector-effect="non-scaling-stroke"
                      >
                        <animateMotion
                          dur="${le.batteryGrid}s"
                          repeatCount="indefinite"
                          calcMode="linear"
                        >
                          <mpath xlink:href="#battery-grid" />
                        </animateMotion>
                      </circle>`:""}
                </svg>
              </div>`:""}
        </div>
        ${this._config.dashboard_link?I`
              <div class="card-actions">
                <a href=${this._config.dashboard_link}
                  ><mwc-button>
                    ${this.hass.localize("ui.panel.lovelace.cards.energy.energy_distribution.go_to_energy_dashboard")}
                  </mwc-button></a
                >
              </div>
            `:""}
      </ha-card>
    `}};At.styles=((t,...i)=>{const e=1===t.length?t[0]:i.reduce(((i,e,o)=>i+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(e)+t[o+1]),t[0]);return new c(e,t,a)})`
    :host {
      --mdc-icon-size: 24px;
      --clickable-cursor: pointer;
      --individualone-color: #d0cc5b;
      --individualtwo-color: #964cb5;
      --non-fossil-color: var(--energy-non-fossil-color, #0f9d58);
      --icon-non-fossil-color: var(--non-fossil-color, #0f9d58);
      --icon-solar-color: var(--energy-solar-color, #ff9800);
      --icon-individualone-color: var(--individualone-color, #d0cc5b);
      --icon-individualtwo-color: var(--individualtwo-color, #964cb5);
      --icon-grid-color: var(--energy-grid-consumption-color, #488fc2);
      --icon-battery-color: var(--energy-battery-in-color, #f06292);
      --icon-home-color: var(--energy-grid-consumption-color, #488fc2);
    }
    :root {
    }
    .card-content {
      position: relative;
    }
    .lines {
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 146px;
      display: flex;
      justify-content: center;
      padding: 0 16px 16px;
      box-sizing: border-box;
    }
    .lines.individual1-individual2 {
      bottom: 110px;
    }
    .lines.high {
      bottom: 100px;
      height: 156px;
    }
    .lines svg {
      width: calc(100% - 160px);
      height: 100%;
      max-width: 340px;
    }
    .row {
      display: flex;
      justify-content: space-between;
      max-width: 500px;
      margin: 0 auto;
    }
    .circle-container {
      display: flex;
      flex-direction: column;
      align-items: center;
      z-index: 2;
    }
    .circle-container.solar {
      margin: 0 4px;
      height: 130px;
    }
    .circle-container.individual2 {
      margin-left: 4px;
      height: 130px;
    }
    .circle-container.individual1 {
      margin-left: 4px;
      height: 130px;
    }
    .circle-container.individual1.bottom {
      position: relative;
      top: -20px;
      margin-bottom: -20px;
    }
    .circle-container.battery {
      height: 110px;
      justify-content: flex-end;
    }
    .spacer {
      width: 84px;
    }
    .circle {
      width: 80px;
      height: 80px;
      border-radius: 50%;
      box-sizing: border-box;
      border: 2px solid;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      text-align: center;
      font-size: 12px;
      line-height: 12px;
      position: relative;
      text-decoration: none;
      color: var(--primary-text-color);
    }
    .circle-container .circle {
      cursor: var(--clickable-cursor);
    }
    #battery-grid {
      stroke: var(--energy-grid-return-color);
    }
    ha-icon {
      padding-bottom: 2px;
    }
    ha-icon.small {
      --mdc-icon-size: 12px;
    }
    .label {
      color: var(--secondary-text-color);
      font-size: 12px;
    }
    line,
    path {
      stroke: var(--disabled-text-color);
      stroke-width: 1;
      fill: none;
    }
    .circle svg {
      position: absolute;
      fill: none;
      stroke-width: 4px;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
    }

    span.secondary-info {
      color: var(--secondary-text-color);
      font-size: 10px;
    }

    .individual2 path,
    .individual2 circle {
      stroke: var(--individualtwo-color);
    }

    #individual1-icon {
      color: var(--icon-individualone-color);
    }
    #individual2-icon {
      color: var(--icon-individualtwo-color);
    }
    circle.individual2 {
      stroke-width: 4;
      fill: var(--individualtwo-color);
    }
    .individual2 .circle {
      border-color: var(--individualtwo-color);
    }
    .individual1 path,
    .individual1 circle {
      stroke: var(--individualone-color);
    }
    circle.individual1 {
      stroke-width: 4;
      fill: var(--individualone-color);
    }
    .individual1 .circle {
      border-color: var(--individualone-color);
    }
    .low-carbon path {
      stroke: var(--non-fossil-color);
    }
    .low-carbon .circle {
      border-color: var(--non-fossil-color);
    }
    .low-carbon ha-icon {
      color: var(--icon-non-fossil-color);
    }
    circle.low-carbon {
      stroke-width: 4;
      fill: var(--non-fossil-color);
      stroke: var(--non-fossil-color);
    }
    .solar {
      color: var(--primary-text-color);
    }
    .solar .circle {
      border-color: var(--energy-solar-color);
    }
    .solar ha-icon {
      color: var(--icon-solar-color);
    }
    circle.solar,
    path.solar {
      stroke: var(--energy-solar-color);
    }
    circle.solar {
      stroke-width: 4;
      fill: var(--energy-solar-color);
    }
    .battery .circle {
      border-color: var(--energy-battery-in-color);
    }
    circle.battery,
    path.battery {
      stroke: var(--energy-battery-out-color);
    }
    path.battery-home,
    circle.battery-home {
      stroke: var(--energy-battery-out-color);
    }
    circle.battery-home {
      stroke-width: 4;
      fill: var(--energy-battery-out-color);
    }
    path.battery-solar,
    circle.battery-solar {
      stroke: var(--energy-battery-in-color);
    }
    circle.battery-solar {
      stroke-width: 4;
      fill: var(--energy-battery-in-color);
    }
    .battery-in {
      color: var(--energy-battery-in-color);
    }
    .battery-out {
      color: var(--energy-battery-out-color);
    }
    path.battery-from-grid {
      stroke: var(--energy-grid-consumption-color);
    }
    path.battery-to-grid {
      stroke: var(--energy-grid-return-color);
    }
    .battery ha-icon:not(.small) {
      color: var(--icon-battery-color);
    }
    path.return,
    circle.return,
    circle.battery-to-grid {
      stroke: var(--energy-grid-return-color);
    }
    circle.return,
    circle.battery-to-grid {
      stroke-width: 4;
      fill: var(--energy-grid-return-color);
    }
    .return {
      color: var(--energy-grid-return-color);
    }
    .grid .circle {
      border-color: var(--energy-grid-consumption-color);
    }
    .consumption {
      color: var(--energy-grid-consumption-color);
    }
    circle.grid,
    circle.battery-from-grid,
    path.grid {
      stroke: var(--energy-grid-consumption-color);
    }
    circle.grid,
    circle.battery-from-grid {
      stroke-width: 4;
      fill: var(--energy-grid-consumption-color);
    }
    .grid ha-icon:not(.small) {
      color: var(--icon-grid-color);
    }
    .home .circle {
      border-width: 0;
      border-color: var(--primary-color);
    }
    .home .circle.border {
      border-width: 2px;
    }
    .home ha-icon {
      color: var(--icon-home-color);
    }
    .circle svg circle {
      animation: rotate-in 0.6s ease-in;
      transition: stroke-dashoffset 0.4s, stroke-dasharray 0.4s;
      fill: none;
    }

    // TODO fix this
    /* fixes lines not connecting fully to circles */
    /*     #solar-home-flow {
      width: calc(100% - 150px);
      transform: translate(-3px, -3px);
      height: calc(100% + 10px);
    }

    #solar-grid-flow {
      width: calc(100% - 150px);
      transform: translate(3px, -3px);
      height: calc(100% + 10px);
    }

    #battery-home-flow {
      width: calc(100% - 150px);
      transform: translate(-3px, -7px);
      height: calc(100% + 10px);
    }

    #battery-grid-flow {
      width: calc(100% - 150px);
      transform: translate(3px, -7px);
      height: calc(100% + 10px);
    } */

    @keyframes rotate-in {
      from {
        stroke-dashoffset: 238.76104;
        stroke-dasharray: 238.76104;
      }
    }
    .card-actions a {
      text-decoration: none;
    }
  `,t([vt({attribute:!1})],At.prototype,"hass",void 0),t([function(t){return vt({...t,state:!0})}()],At.prototype,"_config",void 0),t([ut("#battery-grid-flow")],At.prototype,"batteryGridFlow",void 0),t([ut("#battery-home-flow")],At.prototype,"batteryToHomeFlow",void 0),t([ut("#grid-home-flow")],At.prototype,"gridToHomeFlow",void 0),t([ut("#solar-battery-flow")],At.prototype,"solarToBatteryFlow",void 0),t([ut("#solar-grid-flow")],At.prototype,"solarToGridFlow",void 0),t([ut("#solar-home-flow")],At.prototype,"solarToHomeFlow",void 0),At=t([(t=>i=>"function"==typeof i?((t,i)=>(customElements.define(t,i),i))(t,i):((t,i)=>{const{kind:e,elements:o}=i;return{kind:e,elements:o,finisher(i){customElements.define(t,i)}}})(t,i))("power-flow-card-plus")],At);const Et=window;Et.customCards=Et.customCards||[],Et.customCards.push({type:"power-flow-card-plus",name:"Power Flow Card Plus",description:"An extended version of the power flow card with richer options, advanced features and a few small enhancements. Inspired by the Energy Dashboard."});export{At as PowerFlowCard};