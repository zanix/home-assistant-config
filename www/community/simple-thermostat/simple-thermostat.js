var e="simple-thermostat";const t="undefined"!=typeof window&&null!=window.customElements&&void 0!==window.customElements.polyfillWrapFlushCallback,i=(e,t,i=null)=>{for(;t!==i;){const i=t.nextSibling;e.removeChild(t),t=i}},n=`{{lit-${String(Math.random()).slice(2)}}}`,s=`\x3c!--${n}--\x3e`,o=new RegExp(`${n}|${s}`);class a{constructor(e,t){this.parts=[],this.element=t;const i=[],s=[],a=document.createTreeWalker(t.content,133,null,!1);let l=0,h=-1,u=0;const{strings:p,values:{length:f}}=e;for(;u<f;){const e=a.nextNode();if(null!==e){if(h++,1===e.nodeType){if(e.hasAttributes()){const t=e.attributes,{length:i}=t;let n=0;for(let e=0;e<i;e++)r(t[e].name,"$lit$")&&n++;for(;n-- >0;){const t=p[u],i=d.exec(t)[2],n=i.toLowerCase()+"$lit$",s=e.getAttribute(n);e.removeAttribute(n);const a=s.split(o);this.parts.push({type:"attribute",index:h,name:i,strings:a}),u+=a.length-1}}"TEMPLATE"===e.tagName&&(s.push(e),a.currentNode=e.content)}else if(3===e.nodeType){const t=e.data;if(t.indexOf(n)>=0){const n=e.parentNode,s=t.split(o),a=s.length-1;for(let t=0;t<a;t++){let i,o=s[t];if(""===o)i=c();else{const e=d.exec(o);null!==e&&r(e[2],"$lit$")&&(o=o.slice(0,e.index)+e[1]+e[2].slice(0,-"$lit$".length)+e[3]),i=document.createTextNode(o)}n.insertBefore(i,e),this.parts.push({type:"node",index:++h})}""===s[a]?(n.insertBefore(c(),e),i.push(e)):e.data=s[a],u+=a}}else if(8===e.nodeType)if(e.data===n){const t=e.parentNode;null!==e.previousSibling&&h!==l||(h++,t.insertBefore(c(),e)),l=h,this.parts.push({type:"node",index:h}),null===e.nextSibling?e.data="":(i.push(e),h--),u++}else{let t=-1;for(;-1!==(t=e.data.indexOf(n,t+1));)this.parts.push({type:"node",index:-1}),u++}}else a.currentNode=s.pop()}for(const e of i)e.parentNode.removeChild(e)}}const r=(e,t)=>{const i=e.length-t.length;return i>=0&&e.slice(i)===t},l=e=>-1!==e.index,c=()=>document.createComment(""),d=/([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F "'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/;function h(e,t){const{element:{content:i},parts:n}=e,s=document.createTreeWalker(i,133,null,!1);let o=p(n),a=n[o],r=-1,l=0;const c=[];let d=null;for(;s.nextNode();){r++;const e=s.currentNode;for(e.previousSibling===d&&(d=null),t.has(e)&&(c.push(e),null===d&&(d=e)),null!==d&&l++;void 0!==a&&a.index===r;)a.index=null!==d?-1:a.index-l,o=p(n,o),a=n[o]}c.forEach((e=>e.parentNode.removeChild(e)))}const u=e=>{let t=11===e.nodeType?0:1;const i=document.createTreeWalker(e,133,null,!1);for(;i.nextNode();)t++;return t},p=(e,t=-1)=>{for(let i=t+1;i<e.length;i++){const t=e[i];if(l(t))return i}return-1};const f=new WeakMap,g=e=>"function"==typeof e&&f.has(e),v={},m={};class y{constructor(e,t,i){this.__parts=[],this.template=e,this.processor=t,this.options=i}update(e){let t=0;for(const i of this.__parts)void 0!==i&&i.setValue(e[t]),t++;for(const e of this.__parts)void 0!==e&&e.commit()}_clone(){const e=t?this.template.element.content.cloneNode(!0):document.importNode(this.template.element.content,!0),i=[],n=this.template.parts,s=document.createTreeWalker(e,133,null,!1);let o,a=0,r=0,c=s.nextNode();for(;a<n.length;)if(o=n[a],l(o)){for(;r<o.index;)r++,"TEMPLATE"===c.nodeName&&(i.push(c),s.currentNode=c.content),null===(c=s.nextNode())&&(s.currentNode=i.pop(),c=s.nextNode());if("node"===o.type){const e=this.processor.handleTextExpression(this.options);e.insertAfterNode(c.previousSibling),this.__parts.push(e)}else this.__parts.push(...this.processor.handleAttributeExpressions(c,o.name,o.strings,this.options));a++}else this.__parts.push(void 0),a++;return t&&(document.adoptNode(e),customElements.upgrade(e)),e}}const _=window.trustedTypes&&trustedTypes.createPolicy("lit-html",{createHTML:e=>e}),b=` ${n} `;class w{constructor(e,t,i,n){this.strings=e,this.values=t,this.type=i,this.processor=n}getHTML(){const e=this.strings.length-1;let t="",i=!1;for(let o=0;o<e;o++){const e=this.strings[o],a=e.lastIndexOf("\x3c!--");i=(a>-1||i)&&-1===e.indexOf("--\x3e",a+1);const r=d.exec(e);t+=null===r?e+(i?b:s):e.substr(0,r.index)+r[1]+r[2]+"$lit$"+r[3]+n}return t+=this.strings[e],t}getTemplateElement(){const e=document.createElement("template");let t=this.getHTML();return void 0!==_&&(t=_.createHTML(t)),e.innerHTML=t,e}}const S=e=>null===e||!("object"==typeof e||"function"==typeof e),x=e=>Array.isArray(e)||!(!e||!e[Symbol.iterator]);class ${constructor(e,t,i){this.dirty=!0,this.element=e,this.name=t,this.strings=i,this.parts=[];for(let e=0;e<i.length-1;e++)this.parts[e]=this._createPart()}_createPart(){return new P(this)}_getValue(){const e=this.strings,t=e.length-1,i=this.parts;if(1===t&&""===e[0]&&""===e[1]){const e=i[0].value;if("symbol"==typeof e)return String(e);if("string"==typeof e||!x(e))return e}let n="";for(let s=0;s<t;s++){n+=e[s];const t=i[s];if(void 0!==t){const e=t.value;if(S(e)||!x(e))n+="string"==typeof e?e:String(e);else for(const t of e)n+="string"==typeof t?t:String(t)}}return n+=e[t],n}commit(){this.dirty&&(this.dirty=!1,this.element.setAttribute(this.name,this._getValue()))}}class P{constructor(e){this.value=void 0,this.committer=e}setValue(e){e===v||S(e)&&e===this.value||(this.value=e,g(e)||(this.committer.dirty=!0))}commit(){for(;g(this.value);){const e=this.value;this.value=v,e(this)}this.value!==v&&this.committer.commit()}}class O{constructor(e){this.value=void 0,this.__pendingValue=void 0,this.options=e}appendInto(e){this.startNode=e.appendChild(c()),this.endNode=e.appendChild(c())}insertAfterNode(e){this.startNode=e,this.endNode=e.nextSibling}appendIntoPart(e){e.__insert(this.startNode=c()),e.__insert(this.endNode=c())}insertAfterPart(e){e.__insert(this.startNode=c()),this.endNode=e.endNode,e.endNode=this.startNode}setValue(e){this.__pendingValue=e}commit(){if(null===this.startNode.parentNode)return;for(;g(this.__pendingValue);){const e=this.__pendingValue;this.__pendingValue=v,e(this)}const e=this.__pendingValue;e!==v&&(S(e)?e!==this.value&&this.__commitText(e):e instanceof w?this.__commitTemplateResult(e):e instanceof Node?this.__commitNode(e):x(e)?this.__commitIterable(e):e===m?(this.value=m,this.clear()):this.__commitText(e))}__insert(e){this.endNode.parentNode.insertBefore(e,this.endNode)}__commitNode(e){this.value!==e&&(this.clear(),this.__insert(e),this.value=e)}__commitText(e){const t=this.startNode.nextSibling,i="string"==typeof(e=null==e?"":e)?e:String(e);t===this.endNode.previousSibling&&3===t.nodeType?t.data=i:this.__commitNode(document.createTextNode(i)),this.value=e}__commitTemplateResult(e){const t=this.options.templateFactory(e);if(this.value instanceof y&&this.value.template===t)this.value.update(e.values);else{const i=new y(t,e.processor,this.options),n=i._clone();i.update(e.values),this.__commitNode(n),this.value=i}}__commitIterable(e){Array.isArray(this.value)||(this.value=[],this.clear());const t=this.value;let i,n=0;for(const s of e)i=t[n],void 0===i&&(i=new O(this.options),t.push(i),0===n?i.appendIntoPart(this):i.insertAfterPart(t[n-1])),i.setValue(s),i.commit(),n++;n<t.length&&(t.length=n,this.clear(i&&i.endNode))}clear(e=this.startNode){i(this.startNode.parentNode,e.nextSibling,this.endNode)}}class C{constructor(e,t,i){if(this.value=void 0,this.__pendingValue=void 0,2!==i.length||""!==i[0]||""!==i[1])throw new Error("Boolean attributes can only contain a single expression");this.element=e,this.name=t,this.strings=i}setValue(e){this.__pendingValue=e}commit(){for(;g(this.__pendingValue);){const e=this.__pendingValue;this.__pendingValue=v,e(this)}if(this.__pendingValue===v)return;const e=!!this.__pendingValue;this.value!==e&&(e?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name),this.value=e),this.__pendingValue=v}}class k extends ${constructor(e,t,i){super(e,t,i),this.single=2===i.length&&""===i[0]&&""===i[1]}_createPart(){return new E(this)}_getValue(){return this.single?this.parts[0].value:super._getValue()}commit(){this.dirty&&(this.dirty=!1,this.element[this.name]=this._getValue())}}class E extends P{}let N=!1;(()=>{try{const e={get capture(){return N=!0,!1}};window.addEventListener("test",e,e),window.removeEventListener("test",e,e)}catch(e){}})();class T{constructor(e,t,i){this.value=void 0,this.__pendingValue=void 0,this.element=e,this.eventName=t,this.eventContext=i,this.__boundHandleEvent=e=>this.handleEvent(e)}setValue(e){this.__pendingValue=e}commit(){for(;g(this.__pendingValue);){const e=this.__pendingValue;this.__pendingValue=v,e(this)}if(this.__pendingValue===v)return;const e=this.__pendingValue,t=this.value,i=null==e||null!=t&&(e.capture!==t.capture||e.once!==t.once||e.passive!==t.passive),n=null!=e&&(null==t||i);i&&this.element.removeEventListener(this.eventName,this.__boundHandleEvent,this.__options),n&&(this.__options=j(e),this.element.addEventListener(this.eventName,this.__boundHandleEvent,this.__options)),this.value=e,this.__pendingValue=v}handleEvent(e){"function"==typeof this.value?this.value.call(this.eventContext||this.element,e):this.value.handleEvent(e)}}const j=e=>e&&(N?{capture:e.capture,passive:e.passive,once:e.once}:e.capture);function z(e){let t=A.get(e.type);void 0===t&&(t={stringsArray:new WeakMap,keyString:new Map},A.set(e.type,t));let i=t.stringsArray.get(e.strings);if(void 0!==i)return i;const s=e.strings.join(n);return i=t.keyString.get(s),void 0===i&&(i=new a(e,e.getTemplateElement()),t.keyString.set(s,i)),t.stringsArray.set(e.strings,i),i}const A=new Map,V=new WeakMap;const U=new class{handleAttributeExpressions(e,t,i,n){const s=t[0];if("."===s){return new k(e,t.slice(1),i).parts}if("@"===s)return[new T(e,t.slice(1),n.eventContext)];if("?"===s)return[new C(e,t.slice(1),i)];return new $(e,t,i).parts}handleTextExpression(e){return new O(e)}};"undefined"!=typeof window&&(window.litHtmlVersions||(window.litHtmlVersions=[])).push("1.3.0");const R=(e,...t)=>new w(e,t,"html",U),M=(e,t)=>`${e}--${t}`;let F=!0;void 0===window.ShadyCSS?F=!1:void 0===window.ShadyCSS.prepareTemplateDom&&(console.warn("Incompatible ShadyCSS version detected. Please update to at least @webcomponents/webcomponentsjs@2.0.2 and @webcomponents/shadycss@1.3.1."),F=!1);const I=e=>t=>{const i=M(t.type,e);let s=A.get(i);void 0===s&&(s={stringsArray:new WeakMap,keyString:new Map},A.set(i,s));let o=s.stringsArray.get(t.strings);if(void 0!==o)return o;const r=t.strings.join(n);if(o=s.keyString.get(r),void 0===o){const i=t.getTemplateElement();F&&window.ShadyCSS.prepareTemplateDom(i,e),o=new a(t,i),s.keyString.set(r,o)}return s.stringsArray.set(t.strings,o),o},L=["html","svg"],H=new Set,q=(e,t,i)=>{H.add(e);const n=i?i.element:document.createElement("template"),s=t.querySelectorAll("style"),{length:o}=s;if(0===o)return void window.ShadyCSS.prepareTemplateStyles(n,e);const a=document.createElement("style");for(let e=0;e<o;e++){const t=s[e];t.parentNode.removeChild(t),a.textContent+=t.textContent}(e=>{L.forEach((t=>{const i=A.get(M(t,e));void 0!==i&&i.keyString.forEach((e=>{const{element:{content:t}}=e,i=new Set;Array.from(t.querySelectorAll("style")).forEach((e=>{i.add(e)})),h(e,i)}))}))})(e);const r=n.content;i?function(e,t,i=null){const{element:{content:n},parts:s}=e;if(null==i)return void n.appendChild(t);const o=document.createTreeWalker(n,133,null,!1);let a=p(s),r=0,l=-1;for(;o.nextNode();)for(l++,o.currentNode===i&&(r=u(t),i.parentNode.insertBefore(t,i));-1!==a&&s[a].index===l;){if(r>0){for(;-1!==a;)s[a].index+=r,a=p(s,a);return}a=p(s,a)}}(i,a,r.firstChild):r.insertBefore(a,r.firstChild),window.ShadyCSS.prepareTemplateStyles(n,e);const l=r.querySelector("style");if(window.ShadyCSS.nativeShadow&&null!==l)t.insertBefore(l.cloneNode(!0),t.firstChild);else if(i){r.insertBefore(a,r.firstChild);const e=new Set;e.add(a),h(i,e)}};window.JSCompiler_renameProperty=(e,t)=>e;const B={toAttribute(e,t){switch(t){case Boolean:return e?"":null;case Object:case Array:return null==e?e:JSON.stringify(e)}return e},fromAttribute(e,t){switch(t){case Boolean:return null!==e;case Number:return null===e?null:Number(e);case Object:case Array:return JSON.parse(e)}return e}},D=(e,t)=>t!==e&&(t==t||e==e),W={attribute:!0,type:String,converter:B,reflect:!1,hasChanged:D};class J extends HTMLElement{constructor(){super(),this.initialize()}static get observedAttributes(){this.finalize();const e=[];return this._classProperties.forEach(((t,i)=>{const n=this._attributeNameForProperty(i,t);void 0!==n&&(this._attributeToPropertyMap.set(n,i),e.push(n))})),e}static _ensureClassProperties(){if(!this.hasOwnProperty(JSCompiler_renameProperty("_classProperties",this))){this._classProperties=new Map;const e=Object.getPrototypeOf(this)._classProperties;void 0!==e&&e.forEach(((e,t)=>this._classProperties.set(t,e)))}}static createProperty(e,t=W){if(this._ensureClassProperties(),this._classProperties.set(e,t),t.noAccessor||this.prototype.hasOwnProperty(e))return;const i="symbol"==typeof e?Symbol():`__${e}`,n=this.getPropertyDescriptor(e,i,t);void 0!==n&&Object.defineProperty(this.prototype,e,n)}static getPropertyDescriptor(e,t,i){return{get(){return this[t]},set(n){const s=this[e];this[t]=n,this.requestUpdateInternal(e,s,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this._classProperties&&this._classProperties.get(e)||W}static finalize(){const e=Object.getPrototypeOf(this);if(e.hasOwnProperty("finalized")||e.finalize(),this.finalized=!0,this._ensureClassProperties(),this._attributeToPropertyMap=new Map,this.hasOwnProperty(JSCompiler_renameProperty("properties",this))){const e=this.properties,t=[...Object.getOwnPropertyNames(e),..."function"==typeof Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(e):[]];for(const i of t)this.createProperty(i,e[i])}}static _attributeNameForProperty(e,t){const i=t.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof e?e.toLowerCase():void 0}static _valueHasChanged(e,t,i=D){return i(e,t)}static _propertyValueFromAttribute(e,t){const i=t.type,n=t.converter||B,s="function"==typeof n?n:n.fromAttribute;return s?s(e,i):e}static _propertyValueToAttribute(e,t){if(void 0===t.reflect)return;const i=t.type,n=t.converter;return(n&&n.toAttribute||B.toAttribute)(e,i)}initialize(){this._updateState=0,this._updatePromise=new Promise((e=>this._enableUpdatingResolver=e)),this._changedProperties=new Map,this._saveInstanceProperties(),this.requestUpdateInternal()}_saveInstanceProperties(){this.constructor._classProperties.forEach(((e,t)=>{if(this.hasOwnProperty(t)){const e=this[t];delete this[t],this._instanceProperties||(this._instanceProperties=new Map),this._instanceProperties.set(t,e)}}))}_applyInstanceProperties(){this._instanceProperties.forEach(((e,t)=>this[t]=e)),this._instanceProperties=void 0}connectedCallback(){this.enableUpdating()}enableUpdating(){void 0!==this._enableUpdatingResolver&&(this._enableUpdatingResolver(),this._enableUpdatingResolver=void 0)}disconnectedCallback(){}attributeChangedCallback(e,t,i){t!==i&&this._attributeToProperty(e,i)}_propertyToAttribute(e,t,i=W){const n=this.constructor,s=n._attributeNameForProperty(e,i);if(void 0!==s){const e=n._propertyValueToAttribute(t,i);if(void 0===e)return;this._updateState=8|this._updateState,null==e?this.removeAttribute(s):this.setAttribute(s,e),this._updateState=-9&this._updateState}}_attributeToProperty(e,t){if(8&this._updateState)return;const i=this.constructor,n=i._attributeToPropertyMap.get(e);if(void 0!==n){const e=i.getPropertyOptions(n);this._updateState=16|this._updateState,this[n]=i._propertyValueFromAttribute(t,e),this._updateState=-17&this._updateState}}requestUpdateInternal(e,t,i){let n=!0;if(void 0!==e){const s=this.constructor;i=i||s.getPropertyOptions(e),s._valueHasChanged(this[e],t,i.hasChanged)?(this._changedProperties.has(e)||this._changedProperties.set(e,t),!0!==i.reflect||16&this._updateState||(void 0===this._reflectingProperties&&(this._reflectingProperties=new Map),this._reflectingProperties.set(e,i))):n=!1}!this._hasRequestedUpdate&&n&&(this._updatePromise=this._enqueueUpdate())}requestUpdate(e,t){return this.requestUpdateInternal(e,t),this.updateComplete}async _enqueueUpdate(){this._updateState=4|this._updateState;try{await this._updatePromise}catch(e){}const e=this.performUpdate();return null!=e&&await e,!this._hasRequestedUpdate}get _hasRequestedUpdate(){return 4&this._updateState}get hasUpdated(){return 1&this._updateState}performUpdate(){if(!this._hasRequestedUpdate)return;this._instanceProperties&&this._applyInstanceProperties();let e=!1;const t=this._changedProperties;try{e=this.shouldUpdate(t),e?this.update(t):this._markUpdated()}catch(t){throw e=!1,this._markUpdated(),t}e&&(1&this._updateState||(this._updateState=1|this._updateState,this.firstUpdated(t)),this.updated(t))}_markUpdated(){this._changedProperties=new Map,this._updateState=-5&this._updateState}get updateComplete(){return this._getUpdateComplete()}_getUpdateComplete(){return this._updatePromise}shouldUpdate(e){return!0}update(e){void 0!==this._reflectingProperties&&this._reflectingProperties.size>0&&(this._reflectingProperties.forEach(((e,t)=>this._propertyToAttribute(t,this[t],e))),this._reflectingProperties=void 0),this._markUpdated()}updated(e){}firstUpdated(e){}}J.finalized=!0;const Y=(e,t)=>"method"===t.kind&&t.descriptor&&!("value"in t.descriptor)?Object.assign(Object.assign({},t),{finisher(i){i.createProperty(t.key,e)}}):{kind:"field",key:Symbol(),placement:"own",descriptor:{},initializer(){"function"==typeof t.initializer&&(this[t.key]=t.initializer.call(this))},finisher(i){i.createProperty(t.key,e)}};function G(e){return(t,i)=>void 0!==i?((e,t,i)=>{t.constructor.createProperty(i,e)})(e,t,i):Y(e,t)}const K=window.ShadowRoot&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Q=Symbol();class X{constructor(e,t){if(t!==Q)throw new Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e}get styleSheet(){return void 0===this._styleSheet&&(K?(this._styleSheet=new CSSStyleSheet,this._styleSheet.replaceSync(this.cssText)):this._styleSheet=null),this._styleSheet}toString(){return this.cssText}}(window.litElementVersions||(window.litElementVersions=[])).push("2.4.0");const Z={};class ee extends J{static getStyles(){return this.styles}static _getUniqueStyles(){if(this.hasOwnProperty(JSCompiler_renameProperty("_styles",this)))return;const e=this.getStyles();if(Array.isArray(e)){const t=(e,i)=>e.reduceRight(((e,i)=>Array.isArray(i)?t(i,e):(e.add(i),e)),i),i=t(e,new Set),n=[];i.forEach((e=>n.unshift(e))),this._styles=n}else this._styles=void 0===e?[]:[e];this._styles=this._styles.map((e=>{if(e instanceof CSSStyleSheet&&!K){const t=Array.prototype.slice.call(e.cssRules).reduce(((e,t)=>e+t.cssText),"");return new X(String(t),Q)}return e}))}initialize(){super.initialize(),this.constructor._getUniqueStyles(),this.renderRoot=this.createRenderRoot(),window.ShadowRoot&&this.renderRoot instanceof window.ShadowRoot&&this.adoptStyles()}createRenderRoot(){return this.attachShadow({mode:"open"})}adoptStyles(){const e=this.constructor._styles;0!==e.length&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow?K?this.renderRoot.adoptedStyleSheets=e.map((e=>e instanceof CSSStyleSheet?e:e.styleSheet)):this._needsShimAdoptedStyleSheets=!0:window.ShadyCSS.ScopingShim.prepareAdoptedCssText(e.map((e=>e.cssText)),this.localName))}connectedCallback(){super.connectedCallback(),this.hasUpdated&&void 0!==window.ShadyCSS&&window.ShadyCSS.styleElement(this)}update(e){const t=this.render();super.update(e),t!==Z&&this.constructor.render(t,this.renderRoot,{scopeName:this.localName,eventContext:this}),this._needsShimAdoptedStyleSheets&&(this._needsShimAdoptedStyleSheets=!1,this.constructor._styles.forEach((e=>{const t=document.createElement("style");t.textContent=e.cssText,this.renderRoot.appendChild(t)})))}render(){return Z}}ee.finalized=!0,ee.render=(e,t,n)=>{if(!n||"object"!=typeof n||!n.scopeName)throw new Error("The `scopeName` option is required.");const s=n.scopeName,o=V.has(t),a=F&&11===t.nodeType&&!!t.host,r=a&&!H.has(s),l=r?document.createDocumentFragment():t;if(((e,t,n)=>{let s=V.get(t);void 0===s&&(i(t,t.firstChild),V.set(t,s=new O(Object.assign({templateFactory:z},n))),s.appendInto(t)),s.setValue(e),s.commit()})(e,l,Object.assign({templateFactory:I(s)},n)),r){const e=V.get(l);V.delete(l);const n=e.value instanceof y?e.value.template:void 0;q(s,l,n),i(t,t.firstChild),t.appendChild(l),V.set(t,e)}!o&&a&&window.ShadyCSS.styleElement(t.host)};var te=((e,...t)=>{const i=t.reduce(((t,i,n)=>t+(e=>{if(e instanceof X)return e.cssText;if("number"==typeof e)return e;throw new Error(`Value passed to 'css' function must be a 'css' function result: ${e}. Use 'unsafeCSS' to pass non-literal values, but\n            take care to ensure page security.`)})(i)+e[n+1]),e[0]);return new X(i,Q)})`:host {
  --st-default-spacing: 4px;
}
ha-card {
  -webkit-font-smoothing: var(--paper-font-body1_-_-webkit-font-smoothing);
  font-size: var(--paper-font-body1_-_font-size);
  font-weight: var(--paper-font-body1_-_font-weight);
  line-height: var(--paper-font-body1_-_line-height);

  padding-bottom: calc(var(--st-default-spacing) * 2);

  padding-bottom: calc(var(--st-spacing, var(--st-default-spacing)) * 2);

  --auto-color: green;
  --heat_cool-color: springgreen;
  --cool-color: #2b9af9;
  --heat-color: #ff8100;
  --manual-color: #44739e;
  --off-color: #8a8a8a;
  --fan_only-color: #8a8a8a;
  --dry-color: #efbd07;
}

ha-card.no-header {
  padding: calc(var(--st-default-spacing) * 4) 0;
  padding: calc(var(--st-spacing, var(--st-default-spacing)) * 4) 0;
}

.body {
  display: grid;
  grid-auto-flow: column;
  grid-auto-columns: minmax(-webkit-min-content, auto);
  grid-auto-columns: minmax(min-content, auto);
  align-items: center;
  justify-items: center;
  place-items: center;
  padding: 0 calc(var(--st-default-spacing) * 4);
  padding: 0 calc(var(--st-spacing, var(--st-default-spacing)) * 4);
  padding-bottom: calc(var(--st-default-spacing) * 2);
  padding-bottom: calc(var(--st-spacing, var(--st-default-spacing)) * 2);
}

.toggle-label {
  color: var(--primary-text-color);
  color: var(--st-toggle-label-color, var(--primary-text-color));
  margin-right: calc(var(--st-default-spacing) * 2);
  margin-right: calc(var(--st-spacing, var(--st-default-spacing)) * 2);
  font-size: 16px;
  font-size: var(
    --st-font-size-toggle-label,
    var(--paper-font-subhead_-_font-size, 16px)
  );
}

.faults {
  display: flex;
  flex-direction: row;
  margin-left: calc(var(--st-default-spacing) * 2);
  margin-left: calc(var(--st-spacing, var(--st-default-spacing)) * 2);
}
.fault-icon {
  padding: 2px;
  cursor: pointer;
  color: var(--secondary-background-color);
  color: var(--st-fault-inactive-color, var(--secondary-background-color))
}
.fault-icon.active {
    color: var(--accent-color);
    color: var(--st-fault-active-color, var(--accent-color));
  }
.fault-icon.hide {
    display: none;
  }

.sensors {
  display: grid;
  grid-gap: var(--st-default-spacing);
  grid-gap: var(--st-spacing, var(--st-default-spacing));
  font-size: 16px;
  font-size: var(
    --st-font-size-sensors,
    var(--paper-font-subhead_-_font-size, 16px)
  );
}
.sensors.as-list {
  grid-auto-flow: column;
  grid-template-columns: -webkit-min-content;
  grid-template-columns: min-content;
}

.sensors.as-table.without-labels {
    grid: auto-flow / 100%;
    align-items: start;
    justify-items: start;
    place-items: start;
  }

.sensors.as-table.with-labels {
    grid: auto-flow / auto auto;
    align-items: start;
    justify-items: start;
    place-items: start;
  }

.sensor-value {
  display: flex;
  align-items: center;
  padding-bottom: 4px;
}
.sensor-heading {
  font-weight: 300;
  padding-right: 8px;
  padding-bottom: 4px;
  white-space: nowrap;
  display: flex;
  align-items: center;
  justify-content: flex-end;
}
.sensors:empty {
  display: none;
}
header {
  display: flex;
  flex-direction: row;
  align-items: center;

  padding: calc(var(--st-default-spacing) * 6)
    calc(var(--st-default-spacing) * 4)
    calc(var(--st-default-spacing) * 4);

  padding: calc(var(--st-spacing, var(--st-default-spacing)) * 6)
    calc(var(--st-spacing, var(--st-default-spacing)) * 4)
    calc(var(--st-spacing, var(--st-default-spacing)) * 4);
}
.header__icon {
  margin-right: calc(var(--st-default-spacing) * 2);
  margin-right: calc(var(--st-spacing, var(--st-default-spacing)) * 2);
  color: #44739e;
  color: var(--paper-item-icon-color, #44739e);
}
.header__title {
  font-size: 24px;
  font-size: var(--st-font-size-title, var(--ha-card-header-font-size, 24px));
  line-height: 24px;
  line-height: var(--st-font-size-title, var(--ha-card-header-font-size, 24px));
  -webkit-font-smoothing: var(--paper-font-headline_-_-webkit-font-smoothing);
  font-weight: normal;
  margin: 0;
  align-self: left;
}
.current-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  overflow: hidden;
  flex-wrap: wrap
}
.current-wrapper.row {
    flex-direction: row-reverse;
  }
.current--value {
  display: flex;
  align-items: center;
  margin: 0;
  font-weight: 400;
  line-height: var(--paper-font-display1_-_font-size);
  line-height: var(--st-font-size-l, var(--paper-font-display1_-_font-size));
  font-size: var(--paper-font-display1_-_font-size);
  font-size: var(--st-font-size-l, var(--paper-font-display1_-_font-size))
}
@media (min-width: 768px) {
.current--value {
    font-size: var(--paper-font-display2_-_font-size);
    font-size: var(--st-font-size-xl, var(--paper-font-display2_-_font-size));
    line-height: var(--paper-font-display2_-_font-size);
    line-height: var(--st-font-size-xl, var(--paper-font-display2_-_font-size))
}
  }
.current--value.updating {
    color: var(--error-color);
  }
.current--unit {
  font-size: var(--paper-font-title_-_font-size);
  font-size: var(--st-font-size-m, var(--paper-font-title_-_font-size));
}
.thermostat-trigger {
  padding: 0px;
}
.clickable {
  cursor: pointer;
}
.modes {
  display: grid;
  grid-template-columns: auto;
  grid-auto-flow: column;
  grid-gap: 2px;
  margin-top: calc(var(--st-default-spacing) * 2);
  margin-top: calc(var(--st-spacing, var(--st-default-spacing)) * 2);
  padding: var(--st-default-spacing);
  padding: var(--st-spacing, var(--st-default-spacing))
}
.modes.heading {
    grid-template-columns: -webkit-min-content;
    grid-template-columns: min-content;
  }
.mode-title {
  padding: 0 16px;
  align-self: center;
  justify-self: center;
  place-self: center;
  font-size: 16px;
  font-size: var(
    --st-font-size-sensors,
    var(--paper-font-subhead_-_font-size, 16px)
  );
  font-weight: 300;
  white-space: nowrap;
}
.mode-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  justify-content: center;
  min-height: 24px;
  padding: var(--st-default-spacing) 0;
  padding: var(--st-spacing, var(--st-default-spacing)) 0;
  background: var(--secondary-background-color);
  background: var(--st-mode-background, var(--secondary-background-color));
  color: var(--secondary-text-color);
  cursor: pointer;
  border-radius: var(--st-default-spacing);
  border-radius: var(--st-spacing, var(--st-default-spacing))
}
.mode-item:hover {
    color: var(--primary-text-color);
    color: var(--st-mode-active-color, var(--primary-text-color));
  }
.mode-item.active,
  .mode-item.active:hover {
    background: var(--primary-color);
    background: var(--st-mode-active-background, var(--primary-color));
    color: var(--text-primary-color);
    color: var(--st-mode-active-color, var(--text-primary-color));
  }
.mode-item.active.off {
    background: var(--off-color);
  }
.mode-item.active.heat {
    background: var(--heat-color);
  }
.mode-item.active.cool {
    background: var(--cool-color);
  }
.mode-item.active.heat_cool {
    background: var(--heat_cool-color);
  }
.mode-item.active.auto {
    background: var(--auto-color);
  }
.mode-item.active.dry {
    background: var(--dry-color);
  }
.mode-item.active.fan_only {
    background: var(--fan_only-color);
  }
.mode-icon {
  --iron-icon-width: 24px;
  --iron-icon-height: 24px;
  display: block;
}
ha-switch {
  padding: 16px 6px;
}
.side-by-side {
  display: flex;
  align-items: center;
}
.side-by-side > * {
  flex: 1;
  padding-right: 4px;
}
`;function ie(e,t,i,n={}){n=n||{},i=null==i?{}:i;const s=new Event(t,{bubbles:void 0===n.bubbles||n.bubbles,cancelable:Boolean(n.cancelable),composed:void 0===n.composed||n.composed});return s.detail=i,e.dispatchEvent(s),s}!function(e,t){void 0===t&&(t={});var i=t.insertAt;if(e&&"undefined"!=typeof document){var n=document.head||document.getElementsByTagName("head")[0],s=document.createElement("style");s.type="text/css","top"===i&&n.firstChild?n.insertBefore(s,n.firstChild):n.appendChild(s),s.styleSheet?s.styleSheet.cssText=e:s.appendChild(document.createTextNode(e))}}(te);const ne=["0","1"],se=["0.5","1"],oe=["column","row"],ae=["climate"];function re(e,t){var i={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(i[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var s=0;for(n=Object.getOwnPropertySymbols(e);s<n.length;s++)t.indexOf(n[s])<0&&Object.prototype.propertyIsEnumerable.call(e,n[s])&&(i[n[s]]=e[n[s]])}return i}function le(e,t,i,n){var s,o=arguments.length,a=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,n);else for(var r=e.length-1;r>=0;r--)(s=e[r])&&(a=(o<3?s(a):o>3?s(t,i,a):s(t,i))||a);return o>3&&a&&Object.defineProperty(t,i,a),a}const ce=(e,t,i,n)=>{if("length"===i||"prototype"===i)return;if("arguments"===i||"caller"===i)return;const s=Object.getOwnPropertyDescriptor(e,i),o=Object.getOwnPropertyDescriptor(t,i);!de(s,o)&&n||Object.defineProperty(e,i,o)},de=function(e,t){return void 0===e||e.configurable||e.writable===t.writable&&e.enumerable===t.enumerable&&e.configurable===t.configurable&&(e.writable||e.value===t.value)},he=(e,t)=>`/* Wrapped ${e}*/\n${t}`,ue=Object.getOwnPropertyDescriptor(Function.prototype,"toString"),pe=Object.getOwnPropertyDescriptor(Function.prototype.toString,"name");var fe=(e,t,{ignoreNonConfigurable:i=!1}={})=>{const{name:n}=e;for(const n of Reflect.ownKeys(t))ce(e,t,n,i);return((e,t)=>{const i=Object.getPrototypeOf(t);i!==Object.getPrototypeOf(e)&&Object.setPrototypeOf(e,i)})(e,t),((e,t,i)=>{const n=""===i?"":`with ${i.trim()}() `,s=he.bind(null,n,t.toString());Object.defineProperty(s,"name",pe),Object.defineProperty(e,"toString",{...ue,value:s})})(e,t,n),e};const ge=(e,t={})=>{if("function"!=typeof e)throw new TypeError(`Expected the first argument to be a function, got \`${typeof e}\``);const{wait:i=0,maxWait:n=Number.Infinity,before:s=!1,after:o=!0}=t;if(!s&&!o)throw new Error("Both `before` and `after` are false, function wouldn't be called.");let a,r,l;const c=function(...t){const c=this,d=()=>{r=void 0,a&&(clearTimeout(a),a=void 0),o&&(l=e.apply(c,t))},h=s&&!a;return clearTimeout(a),a=setTimeout((()=>{a=void 0,r&&(clearTimeout(r),r=void 0),o&&(l=e.apply(c,t))}),i),n>0&&n!==Number.Infinity&&!r&&(r=setTimeout(d,n)),h&&(l=e.apply(c,t)),l};return fe(c,e),c.cancel=()=>{a&&(clearTimeout(a),a=void 0),r&&(clearTimeout(r),r=void 0)},c};function ve(e,{decimals:t=1,fallback:i="N/A"}={}){return null===e||""===e||["boolean","undefined"].includes(typeof e)?i:Number(e).toFixed(t)}function me({header:e,toggleEntityChanged:t,entity:i,openEntityPopover:n}){var s,o;if(!1===e)return m;const a=i.attributes.hvac_action||i.state;let r=e.icon;"object"==typeof e.icon&&(r=null!==(s=null==r?void 0:r[a])&&void 0!==s&&s);const l=null!==(o=null==e?void 0:e.name)&&void 0!==o&&o;return R`<header><div style="display:flex" class="clickable" @click="${()=>n()}">${function(e){return e?R`<ha-icon class="header__icon" .icon="${e}"></ha-icon>`:m}(r)} ${function(e){return e?R`<h2 class="header__title">${e}</h2>`:m}(l)}</div>${function(e,t){if(0===e.length)return m;const i=e.map((({icon:e,hide_inactive:i,state:n})=>R`<ha-icon class="fault-icon ${"on"===n.state?"active":i?" hide":""}" icon="${e||n.attributes.icon}" @click="${()=>t(n.entity_id)}"></ha-icon>`));return R`<div class="faults">${i}</div>`}(e.faults,n)} ${function(e,t,i){var n;return e?R`<div style="margin-left:auto"><span class="clickable toggle-label" @click="${()=>i(e.entity)}">${e.label}</span><ha-switch .checked="${"on"===(null===(n=e.entity)||void 0===n?void 0:n.state)}" @change="${t}"></ha-switch></div>`:m}(e.toggle,n,t)}</header>`}function ye({hide:e,state:t,details:i,localize:n,openEntityPopover:s}){var o,a;if(e||!t)return;const{heading:r,icon:l,unit:c}=i;let d;if("object"==typeof t){const[e]=t.entity_id.split("."),i=["component",e,"state",null!==(a=null===(o=t.attributes)||void 0===o?void 0:o.device_class)&&void 0!==a?a:"_",""].join("."),r=n(t.state,i);d=R`<div class="sensor-value clickable" @click="${()=>s(t.entity_id)}">${r} ${c||t.attributes.unit_of_measurement}</div>`}else d=R`<div class="sensor-value">${t}</div>`;if(!1===r)return d;const h=l?R`<ha-icon icon="${l}"></ha-icon>`:R`${r}:`;return R`<div class="sensor-heading">${h}</div>${d}`}var _e;function be({state:e,mode:t,modeOptions:i,localize:n,setMode:s}){var o;const{type:a,hide_when_off:r,mode:l="none",list:c,name:d}=t;if(0===c.length||r&&e===_e.OFF)return null;let h=`state_attributes.climate.${a}_mode.`;"hvac"===a&&(h="component.climate.state._.");const u=d||n(`ui.card.climate.${"hvac"==a?"operation":`${a}_mode`}`),p=null===(o=null==i?void 0:i.headings)||void 0===o||o;return R`<div class="modes ${p?"heading":""}">${p?R`<div class="mode-title">${u}</div>`:""} ${c.map((({value:e,icon:t,name:o})=>R`<div class="mode-item ${e===l?"active "+l:""}" @click="${()=>s(a,e)}">${(e=>e?!1===(null==i?void 0:i.icons)?null:R`<ha-icon class="mode-icon" .icon="${e}"></ha-icon>`:null)(t)} ${(e=>!1===e||!1===(null==i?void 0:i.names)?null:n(e,h))(o)}</div>`))}</div>`}!function(e){e.OFF="off",e.HEAT="heat",e.COOL="cool",e.HEAT_COOL="heat_cool",e.AUTO="auto",e.DRY="dry",e.FAN_ONLY="fan_only"}(_e||(_e={}));const we={auto:"mdi:radiator",cooling:"mdi:snowflake",fan:"mdi:fan",heating:"mdi:radiator",idle:"mdi:radiator-disabled",off:"mdi:radiator-off"},Se={auto:"hass:autorenew",cool:"hass:snowflake",dry:"hass:water-percent",fan_only:"hass:fan",heat_cool:"hass:autorenew",heat:"hass:fire",off:"hass:power"};function xe(e,t){var i;const n=t.states[e.entity];let s="";return s=!0===(null==e?void 0:e.name)?n.attributes.name:null!==(i=null==e?void 0:e.name)&&void 0!==i?i:"",{entity:n,label:s}}function $e(e,t){return Array.isArray(e)?e.map((e=>{var{entity:i}=e,n=re(e,["entity"]);return Object.assign(Object.assign({},n),{state:t.states[i],entity:i})})):[]}var Pe;!function(e){e.HVAC="hvac",e.FAN="fan",e.PRESET="preset",e.SWING="swing"}(Pe||(Pe={}));const Oe=Object.values(Pe),Ce=[Pe.HVAC,Pe.PRESET],ke="hass:chevron-up",Ee="hass:chevron-down",Ne="mdi:plus",Te="mdi:minus",je={temperature:!1,state:!1};function ze(e,t,i={}){return t[`${e}_modes`].filter((e=>function(e,t){if(void 0===t)return!0;if(Array.isArray(t))return t.includes(e);const i=typeof t[e];return"boolean"===i?t[e]:"object"!==i||!1!==t[e].include}(e,i))).map((e=>{const t="object"==typeof i[e]?i[e]:{};return delete t.include,Object.assign({icon:Se[e],value:e,name:e},t)}))}class Ae extends ee{constructor(){super(...arguments),this.modes=[],this._hass={},this.entity={},this.sensors=[],this.showSensors=!0,this.name="",this._stepSize=.5,this._updatingValues=!1,this._hide=je,this._debouncedSetTemperature=ge((e=>{const{domain:t,service:i,data:n={}}=this.service;this._hass.callService(t,i,Object.assign(Object.assign({entity_id:this.config.entity},n),e))}),{wait:1e3}),this.localize=(e,t="")=>{var i;const n=this._hass.selectedLanguage||this._hass.language,s=`${t}${e}`,o=this._hass.resources[n];return null!==(i=null==o?void 0:o[s])&&void 0!==i?i:e},this.setMode=(e,t)=>{e&&t?(this._hass.callService("climate",`set_${e}_mode`,{entity_id:this.config.entity,[`${e}_mode`]:t}),ie(this,"haptic","light")):ie(this,"haptic","failure")},this.openEntityPopover=(e=null)=>{ie(this,"hass-more-info",{entityId:e||this.config.entity})}}static get styles(){return te}static getConfigElement(){return window.document.createElement(`${e}-editor`)}setConfig(e){if(!e.entity)throw new Error("You need to define an entity");this.config=Object.assign({decimals:1},e)}set hass(e){var t,i,n,s;const o=e.states[this.config.entity];if(void 0===typeof o)return;this._hass=e,this.entity!==o&&(this.entity=o),this.header=function(e,t,i){if(!1===e)return!1;let n;n="string"==typeof(null==e?void 0:e.name)?e.name:!1!==(null==e?void 0:e.name)&&t.attributes.friendly_name;let s=t.attributes.hvac_action?we:Se;return void 0!==(null==e?void 0:e.icon)&&(s=e.icon),{name:n,icon:s,toggle:(null==e?void 0:e.toggle)?xe(e.toggle,i):null,faults:$e(null==e?void 0:e.faults,i)}}(this.config.header,o,e),this.service=null!==(i=null===(t=this.config)||void 0===t?void 0:t.service)&&void 0!==i&&i||{domain:"climate",service:"set_temperature"};const a=o.attributes;let r=function(e,t){if(e)return Object.keys(e).reduce(((i,n)=>{const s=e[n];return(null==s?void 0:s.hide)?i:Object.assign(Object.assign({},i),{[n]:null==t?void 0:t[n]})}),{});return"dual"===function(e){return"number"==typeof e.target_temp_high&&"number"==typeof e.target_temp_low?"dual":"single"}(t)?{target_temp_low:t.target_temp_low,target_temp_high:t.target_temp_high}:{temperature:t.temperature}}(null!==(s=null===(n=this.config)||void 0===n?void 0:n.setpoints)&&void 0!==s&&s,a);this._updatingValues&&function(e,t){const i=Object.keys(e);return i.length===Object.keys(t).length&&!i.some((i=>(null==e?void 0:e[i])!==(null==t?void 0:t[i])))}(r,this._values)?this._updatingValues=!1:this._updatingValues||(this._values=r);const l=e=>Oe.includes(e)&&a[`${e}_modes`],c=e=>e.filter(l).map((e=>({type:e,list:ze(e,a,{})})));let d=[];if(!1===this.config.control)d=[];else if(Array.isArray(this.config.control))d=c(this.config.control);else if("object"==typeof this.config.control){const e=Object.entries(this.config.control);d=e.length>0?e.filter((([e])=>l(e))).map((([e,t])=>{const{_name:i,_hide_when_off:n}=t,s=re(t,["_name","_hide_when_off"]);return{type:e,hide_when_off:n,name:i,list:ze(e,a,s)}})):c(Ce)}else d=c(Ce);this.modes=d.map((e=>{if(e.type===Pe.HVAC){const t=[],i=Object.values(_e);return e.list.forEach((e=>{const n=i.indexOf(e.value);t[n]=e})),Object.assign(Object.assign({},e),{list:t,mode:o.state})}const t=a[`${e.type}_mode`];return Object.assign(Object.assign({},e),{mode:t})})),this.config.step_size&&(this._stepSize=+this.config.step_size),this.config.hide&&(this._hide=Object.assign(Object.assign({},this._hide),this.config.hide)),!1===this.config.sensors?this.showSensors=!1:this.config.sensors&&(this.sensors=this.config.sensors.map((t=>{var i,{name:n,entity:s,attribute:o,unit:a=""}=t,r=re(t,["name","entity","attribute","unit"]);let l;const c=[n];return s?(l=e.states[s],c.push(null===(i=null==l?void 0:l.attributes)||void 0===i?void 0:i.friendly_name),o&&(l=l.attributes[o]+a)):o&&o in this.entity.attributes&&(l=this.entity.attributes[o]+a,c.push(o)),c.push(s),Object.assign(Object.assign({},r),{name:c.find((e=>!!e)),state:l,entity:s,unit:a})})))}render({_hide:e,_values:t,_updatingValues:i,config:n,entity:s}=this){var o,a,r;if(!s)return R`<hui-warning>Entity not available: ${n.entity}</hui-warning>`;const{attributes:{min_temp:l=null,max_temp:c=null,hvac_action:d}}=s,h=this.getUnit(),u=null!==(r=null===(a=null===(o=this.config)||void 0===o?void 0:o.layout)||void 0===a?void 0:a.step)&&void 0!==r?r:"column",p="row"===u,f=[!this.header&&"no-header",d].filter((e=>!!e));return R`<ha-card class="${f.join(" ")}">${me({header:this.header,toggleEntityChanged:this.toggleEntityChanged,entity:this.entity,openEntityPopover:this.openEntityPopover})}<section class="body">${this.showSensors?function({_hide:e,entity:t,unit:i,sensors:n,config:s,localize:o,openEntityPopover:a}){var r,l,c,d,h,u;const{attributes:{hvac_action:p,current_temperature:f}}=t,{type:g,labels:v}=null!==(l=null===(r=null==s?void 0:s.layout)||void 0===r?void 0:r.sensors)&&void 0!==l?l:{type:"table",labels:!0},m=[ye({hide:e.temperature,state:`${ve(f,s)}${i||""}`,details:{heading:!!v&&(null!==(d=null===(c=null==s?void 0:s.label)||void 0===c?void 0:c.temperature)&&void 0!==d?d:o("ui.card.climate.currently"))}}),ye({hide:e.state,state:o(p,"state_attributes.climate.hvac_action."),details:{heading:!!v&&(null!==(u=null===(h=null==s?void 0:s.label)||void 0===h?void 0:h.state)&&void 0!==u?u:o("ui.panel.lovelace.editor.card.generic.state"))}}),...n.map((({name:e,icon:t,state:i,unit:n})=>i&&ye({hide:!1,state:i,localize:o,openEntityPopover:a,details:{heading:v&&e,icon:t,unit:n}})))||null].filter((e=>null!==e));return R`<div class="sensors ${[v?"with-labels":"without-labels","list"===g?"as-list":"as-table"].join(" ")}">${m}</div>`}({_hide:this._hide,unit:h,entity:this.entity,sensors:this.sensors,config:this.config,localize:this.localize,openEntityPopover:this.openEntityPopover}):""} ${Object.entries(t).map((([e,t])=>{const s=["string","number"].includes(typeof t),o=!1!==h&&s;return R`<div class="current-wrapper ${u}"><ha-icon-button ?disabled="${c&&t>=c}" class="thermostat-trigger" icon="${p?Ne:ke}" @click="${()=>this.setTemperature(this._stepSize,e)}"></ha-icon-button><h3 @click="${()=>this.openEntityPopover()}" class="current--value ${i?"updating":m}">${ve(t,n)} ${o?R`<span class="current--unit">${h}</span>`:m}</h3><ha-icon-button ?disabled="${l&&t<=l}" class="thermostat-trigger" icon="${p?Te:Ee}" @click="${()=>this.setTemperature(-this._stepSize,e)}"></ha-icon-button></div>`}))}</section>${this.modes.map((e=>{var t,i,n;return be({state:s.state,mode:e,localize:this.localize,modeOptions:null!==(n=null===(i=null===(t=this.config)||void 0===t?void 0:t.layout)||void 0===i?void 0:i.mode)&&void 0!==n?n:{},setMode:this.setMode})}))}</ha-card>`}toggleEntityChanged(e){var t,i;if(!this.header)return;const n=e.target.checked;this._hass.callService("homeassistant",n?"turn_on":"turn_off",{entity_id:null===(i=null===(t=this.header)||void 0===t?void 0:t.toggle)||void 0===i?void 0:i.entity})}setTemperature(e,t){this._updatingValues=!0;const i=this._values[t]+e,{decimals:n}=this.config;this._values[t]=+ve(i,{decimals:n}),this._debouncedSetTemperature(this._values)}getCardSize(){return 3}getUnit(){var e;return["boolean","string"].includes(typeof this.config.unit)?null===(e=this.config)||void 0===e?void 0:e.unit:this._hass.config.unit_system.temperature}}le([G()],Ae.prototype,"config",void 0),le([G()],Ae.prototype,"header",void 0),le([G()],Ae.prototype,"service",void 0),le([G()],Ae.prototype,"modes",void 0),le([G()],Ae.prototype,"_hass",void 0),le([G()],Ae.prototype,"entity",void 0),le([G()],Ae.prototype,"sensors",void 0),le([G()],Ae.prototype,"showSensors",void 0),le([G()],Ae.prototype,"name",void 0),le([G()],Ae.prototype,"_values",void 0),le([G()],Ae.prototype,"_updatingValues",void 0),le([G()],Ae.prototype,"_hide",void 0),customElements.define(e,Ae),customElements.define(`${e}-editor`,class extends ee{static get styles(){return te}static get properties(){return{hass:{},config:{}}}static getStubConfig(){return{header:{}}}setConfig(e){this.config=e}_openLink(){window.open("https://github.com/nervetattoo/simple-thermostat/blob/master/README.md")}get _show_header(){return!1!==this.config.header}set _show_header(e){console.log("set show header",e),this.config.header=!!e&&{}}render(){var e,t,i,n,s,o,a,r,l;return this.hass?R`<div class="card-config"><div class="overall-config"><div class="side-by-side"><ha-entity-picker label="Entity (required)" .hass="${this.hass}" .value="${this.config.entity}" .configValue="${"entity"}" .includeDomains="${ae}" @change="${this.valueChanged}" allow-custom-entity></ha-entity-picker></div><ha-formfield label="Show header?"><ha-switch .checked="${!1!==this.config.header}" .configValue="${"header"}" @change="${this.toggleHeader}"></ha-switch></ha-formfield>${!1!==this.config.header?R`<div class="side-by-side"><paper-input label="Name (optional)" .value="${null===(e=this.config.header)||void 0===e?void 0:e.name}" .configValue="${"header.name"}" @value-changed="${this.valueChanged}"></paper-input><ha-icon-input label="Icon (optional)" .value="${null===(t=this.config.header)||void 0===t?void 0:t.icon}" .configValue="${"header.icon"}" @value-changed="${this.valueChanged}"></ha-icon-input></div><div class="side-by-side"><ha-entity-picker label="Toggle Entity (optional)" .hass="${this.hass}" .value="${null===(s=null===(n=null===(i=this.config)||void 0===i?void 0:i.header)||void 0===n?void 0:n.toggle)||void 0===s?void 0:s.entity}" .configValue="${"header.toggle.entity"}" @change="${this.valueChanged}" allow-custom-entity></ha-entity-picker><paper-input label="Toggle entity label" .value="${null===(r=null===(a=null===(o=this.config)||void 0===o?void 0:o.header)||void 0===a?void 0:a.toggle)||void 0===r?void 0:r.name}" .configValue="${"header.toggle.name"}" @value-changed="${this.valueChanged}"></paper-input></div>`:""}<div class="side-by-side"><paper-input label="Fallback Text (optional)" .value="${this.config.fallback}" .configValue="${"fallback"}" @value-changed="${this.valueChanged}"></paper-input></div><div class="side-by-side"><paper-dropdown-menu label="Decimals (optional)" .configValue="${"decimals"}" @value-changed="${this.valueChanged}" class="dropdown"><paper-listbox slot="dropdown-content" .selected="${Object.values(ne).indexOf(String(this.config.decimals))}">${Object.values(ne).map((e=>R`<paper-item>${e}</paper-item>`))}</paper-listbox></paper-dropdown-menu><paper-input label="Unit (optional)" .value="${this.config.unit}" .configValue="${"unit"}" @value-changed="${this.valueChanged}"></paper-input></div><div class="side-by-side"><paper-dropdown-menu label="Step Layout (optional)" .configValue="${"layout.step"}" @value-changed="${this.valueChanged}" class="dropdown"><paper-listbox slot="dropdown-content" .selected="${Object.values(oe).indexOf(null===(l=this.config.layout)||void 0===l?void 0:l.step)}">${Object.values(oe).map((e=>R`<paper-item>${e}</paper-item>`))}</paper-listbox></paper-dropdown-menu><paper-dropdown-menu label="Step Size (optional)" .configValue="${"step_size"}" @value-changed="${this.valueChanged}" class="dropdown"><paper-listbox slot="dropdown-content" .selected="${Object.values(se).indexOf(String(this.config.step_size))}">${Object.values(se).map((e=>R`<paper-item>${e}</paper-item>`))}</paper-listbox></paper-dropdown-menu></div><div class="side-by-side"><mwc-button @click="${this._openLink}">Configuration Options</mwc-button>Settings for label, control, sensors, faults and hiding UI elements can only be configured in the code editor</div></div></div>`:R``}valueChanged(e){if(!this.config||!this.hass)return;const{target:t}=e;t.configValue&&(""===t.value?delete this.config[t.configValue]:function(e,t,i){const n=t.split(".");let s=e;for(;n.length-1;){var o=n.shift();o in s||(s[o]={}),s=s[o]}s[n[0]]=i}(this.config,t.configValue,void 0!==t.checked?t.checked:t.value)),ie(this,"config-changed",{config:this.config})}toggleHeader(e){this.config.header=!!e.target.checked&&{},ie(this,"config-changed",{config:this.config})}}),console.info(`%c${e}: 1.0.0-development`,"font-weight: bold"),window.customCards=window.customCards||[],window.customCards.push({type:e,name:"Simple Thermostat",preview:!1,description:"A different take on the thermostat card"});
