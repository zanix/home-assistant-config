/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
function e(e,t,n,r){var o,i=arguments.length,s=i<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(s=(i<3?o(s):i>3?o(t,n,s):o(t,n))||s);return i>3&&s&&Object.defineProperty(t,n,s),s}var t=/d{1,4}|M{1,4}|YY(?:YY)?|S{1,3}|Do|ZZ|Z|([HhMsDm])\1?|[aA]|"[^"]*"|'[^']*'/g,n="[^\\s]+",r=/\[([^]*?)\]/gm;function o(e,t){for(var n=[],r=0,o=e.length;r<o;r++)n.push(e[r].substr(0,t));return n}var i=function(e){return function(t,n){var r=n[e].map((function(e){return e.toLowerCase()})).indexOf(t.toLowerCase());return r>-1?r:null}};function s(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];for(var r=0,o=t;r<o.length;r++){var i=o[r];for(var s in i)e[s]=i[s]}return e}var a=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],c=["January","February","March","April","May","June","July","August","September","October","November","December"],l=o(c,3),u={dayNamesShort:o(a,3),dayNames:a,monthNamesShort:l,monthNames:c,amPm:["am","pm"],DoFn:function(e){return e+["th","st","nd","rd"][e%10>3?0:(e-e%10!=10?1:0)*e%10]}},d=s({},u),h=function(e,t){for(void 0===t&&(t=2),e=String(e);e.length<t;)e="0"+e;return e},f={D:function(e){return String(e.getDate())},DD:function(e){return h(e.getDate())},Do:function(e,t){return t.DoFn(e.getDate())},d:function(e){return String(e.getDay())},dd:function(e){return h(e.getDay())},ddd:function(e,t){return t.dayNamesShort[e.getDay()]},dddd:function(e,t){return t.dayNames[e.getDay()]},M:function(e){return String(e.getMonth()+1)},MM:function(e){return h(e.getMonth()+1)},MMM:function(e,t){return t.monthNamesShort[e.getMonth()]},MMMM:function(e,t){return t.monthNames[e.getMonth()]},YY:function(e){return h(String(e.getFullYear()),4).substr(2)},YYYY:function(e){return h(e.getFullYear(),4)},h:function(e){return String(e.getHours()%12||12)},hh:function(e){return h(e.getHours()%12||12)},H:function(e){return String(e.getHours())},HH:function(e){return h(e.getHours())},m:function(e){return String(e.getMinutes())},mm:function(e){return h(e.getMinutes())},s:function(e){return String(e.getSeconds())},ss:function(e){return h(e.getSeconds())},S:function(e){return String(Math.round(e.getMilliseconds()/100))},SS:function(e){return h(Math.round(e.getMilliseconds()/10),2)},SSS:function(e){return h(e.getMilliseconds(),3)},a:function(e,t){return e.getHours()<12?t.amPm[0]:t.amPm[1]},A:function(e,t){return e.getHours()<12?t.amPm[0].toUpperCase():t.amPm[1].toUpperCase()},ZZ:function(e){var t=e.getTimezoneOffset();return(t>0?"-":"+")+h(100*Math.floor(Math.abs(t)/60)+Math.abs(t)%60,4)},Z:function(e){var t=e.getTimezoneOffset();return(t>0?"-":"+")+h(Math.floor(Math.abs(t)/60),2)+":"+h(Math.abs(t)%60,2)}},p=function(e){return+e-1},m=[null,"[1-9]\\d?"],g=[null,n],v=["isPm",n,function(e,t){var n=e.toLowerCase();return n===t.amPm[0]?0:n===t.amPm[1]?1:null}],y=["timezoneOffset","[^\\s]*?[\\+\\-]\\d\\d:?\\d\\d|[^\\s]*?Z?",function(e){var t=(e+"").match(/([+-]|\d\d)/gi);if(t){var n=60*+t[1]+parseInt(t[2],10);return"+"===t[0]?n:-n}return 0}],b=(i("monthNamesShort"),i("monthNames"),{default:"ddd MMM DD YYYY HH:mm:ss",shortDate:"M/D/YY",mediumDate:"MMM D, YYYY",longDate:"MMMM D, YYYY",fullDate:"dddd, MMMM D, YYYY",isoDate:"YYYY-MM-DD",isoDateTime:"YYYY-MM-DDTHH:mm:ssZ",shortTime:"HH:mm",mediumTime:"HH:mm:ss",longTime:"HH:mm:ss.SSS"});var _=function(e,n,o){if(void 0===n&&(n=b.default),void 0===o&&(o={}),"number"==typeof e&&(e=new Date(e)),"[object Date]"!==Object.prototype.toString.call(e)||isNaN(e.getTime()))throw new Error("Invalid Date pass to format");var i=[];n=(n=b[n]||n).replace(r,(function(e,t){return i.push(t),"@@@"}));var a=s(s({},d),o);return(n=n.replace(t,(function(t){return f[t](e,a)}))).replace(/@@@/g,(function(){return i.shift()}))};(function(){try{(new Date).toLocaleDateString("i")}catch(e){return"RangeError"===e.name}})(),function(){try{(new Date).toLocaleString("i")}catch(e){return"RangeError"===e.name}}(),function(){try{(new Date).toLocaleTimeString("i")}catch(e){return"RangeError"===e.name}}();var w=["closed","locked","off"],S=function(e,t,n,r){r=r||{},n=null==n?{}:n;var o=new Event(t,{bubbles:void 0===r.bubbles||r.bubbles,cancelable:Boolean(r.cancelable),composed:void 0===r.composed||r.composed});return o.detail=n,e.dispatchEvent(o),o},x=function(e){S(window,"haptic",e)},k=function(e,t,n,r,o){var i;if(o&&n.double_tap_action?i=n.double_tap_action:r&&n.hold_action?i=n.hold_action:!r&&n.tap_action&&(i=n.tap_action),i||(i={action:"more-info"}),!i.confirmation||i.confirmation.exemptions&&i.confirmation.exemptions.some((function(e){return e.user===t.user.id}))||confirm(i.confirmation.text||"Are you sure you want to "+i.action+"?"))switch(i.action){case"more-info":(i.entity||n.entity||n.camera_image)&&(S(e,"hass-more-info",{entityId:i.entity?i.entity:n.entity?n.entity:n.camera_image}),i.haptic&&x(i.haptic));break;case"navigate":i.navigation_path&&(function(e,t,n){void 0===n&&(n=!1),n?history.replaceState(null,"",t):history.pushState(null,"",t),S(window,"location-changed",{replace:n})}(0,i.navigation_path),i.haptic&&x(i.haptic));break;case"url":i.url_path&&window.open(i.url_path),i.haptic&&x(i.haptic);break;case"toggle":n.entity&&(function(e,t){(function(e,t,n){void 0===n&&(n=!0);var r,o=function(e){return e.substr(0,e.indexOf("."))}(t),i="group"===o?"homeassistant":o;switch(o){case"lock":r=n?"unlock":"lock";break;case"cover":r=n?"open_cover":"close_cover";break;default:r=n?"turn_on":"turn_off"}e.callService(i,r,{entity_id:t})})(e,t,w.includes(e.states[t].state))}(t,n.entity),i.haptic&&x(i.haptic));break;case"call-service":if(!i.service)return;var s=i.service.split(".",2),a=s[0],c=s[1],l=Object.assign({},i.service_data);"entity"===l.entity_id&&(l.entity_id=n.entity),t.callService(a,c,l),i.haptic&&x(i.haptic);break;case"fire-dom-event":S(e,"ll-custom",i),i.haptic&&x(i.haptic)}};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const P="undefined"!=typeof window&&null!=window.customElements&&void 0!==window.customElements.polyfillWrapFlushCallback,N=(e,t,n=null)=>{for(;t!==n;){const n=t.nextSibling;e.removeChild(t),t=n}},C=`{{lit-${String(Math.random()).slice(2)}}}`,O=`\x3c!--${C}--\x3e`,I=new RegExp(`${C}|${O}`);class T{constructor(e,t){this.parts=[],this.element=t;const n=[],r=[],o=document.createTreeWalker(t.content,133,null,!1);let i=0,s=-1,a=0;const{strings:c,values:{length:l}}=e;for(;a<l;){const e=o.nextNode();if(null!==e){if(s++,1===e.nodeType){if(e.hasAttributes()){const t=e.attributes,{length:n}=t;let r=0;for(let e=0;e<n;e++)E(t[e].name,"$lit$")&&r++;for(;r-- >0;){const t=c[a],n=D.exec(t)[2],r=n.toLowerCase()+"$lit$",o=e.getAttribute(r);e.removeAttribute(r);const i=o.split(I);this.parts.push({type:"attribute",index:s,name:n,strings:i}),a+=i.length-1}}"TEMPLATE"===e.tagName&&(r.push(e),o.currentNode=e.content)}else if(3===e.nodeType){const t=e.data;if(t.indexOf(C)>=0){const r=e.parentNode,o=t.split(I),i=o.length-1;for(let t=0;t<i;t++){let n,i=o[t];if(""===i)n=$();else{const e=D.exec(i);null!==e&&E(e[2],"$lit$")&&(i=i.slice(0,e.index)+e[1]+e[2].slice(0,-"$lit$".length)+e[3]),n=document.createTextNode(i)}r.insertBefore(n,e),this.parts.push({type:"node",index:++s})}""===o[i]?(r.insertBefore($(),e),n.push(e)):e.data=o[i],a+=i}}else if(8===e.nodeType)if(e.data===C){const t=e.parentNode;null!==e.previousSibling&&s!==i||(s++,t.insertBefore($(),e)),i=s,this.parts.push({type:"node",index:s}),null===e.nextSibling?e.data="":(n.push(e),s--),a++}else{let t=-1;for(;-1!==(t=e.data.indexOf(C,t+1));)this.parts.push({type:"node",index:-1}),a++}}else o.currentNode=r.pop()}for(const e of n)e.parentNode.removeChild(e)}}const E=(e,t)=>{const n=e.length-t.length;return n>=0&&e.slice(n)===t},A=e=>-1!==e.index,$=()=>document.createComment(""),D=/([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F "'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/;function M(e,t){const{element:{content:n},parts:r}=e,o=document.createTreeWalker(n,133,null,!1);let i=R(r),s=r[i],a=-1,c=0;const l=[];let u=null;for(;o.nextNode();){a++;const e=o.currentNode;for(e.previousSibling===u&&(u=null),t.has(e)&&(l.push(e),null===u&&(u=e)),null!==u&&c++;void 0!==s&&s.index===a;)s.index=null!==u?-1:s.index-c,i=R(r,i),s=r[i]}l.forEach(e=>e.parentNode.removeChild(e))}const j=e=>{let t=11===e.nodeType?0:1;const n=document.createTreeWalker(e,133,null,!1);for(;n.nextNode();)t++;return t},R=(e,t=-1)=>{for(let n=t+1;n<e.length;n++){const t=e[n];if(A(t))return n}return-1};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const B=new WeakMap,U=e=>"function"==typeof e&&B.has(e),z={},V={};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
class L{constructor(e,t,n){this.__parts=[],this.template=e,this.processor=t,this.options=n}update(e){let t=0;for(const n of this.__parts)void 0!==n&&n.setValue(e[t]),t++;for(const e of this.__parts)void 0!==e&&e.commit()}_clone(){const e=P?this.template.element.content.cloneNode(!0):document.importNode(this.template.element.content,!0),t=[],n=this.template.parts,r=document.createTreeWalker(e,133,null,!1);let o,i=0,s=0,a=r.nextNode();for(;i<n.length;)if(o=n[i],A(o)){for(;s<o.index;)s++,"TEMPLATE"===a.nodeName&&(t.push(a),r.currentNode=a.content),null===(a=r.nextNode())&&(r.currentNode=t.pop(),a=r.nextNode());if("node"===o.type){const e=this.processor.handleTextExpression(this.options);e.insertAfterNode(a.previousSibling),this.__parts.push(e)}else this.__parts.push(...this.processor.handleAttributeExpressions(a,o.name,o.strings,this.options));i++}else this.__parts.push(void 0),i++;return P&&(document.adoptNode(e),customElements.upgrade(e)),e}}
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */const H=window.trustedTypes&&trustedTypes.createPolicy("lit-html",{createHTML:e=>e}),F=` ${C} `;class Y{constructor(e,t,n,r){this.strings=e,this.values=t,this.type=n,this.processor=r}getHTML(){const e=this.strings.length-1;let t="",n=!1;for(let r=0;r<e;r++){const e=this.strings[r],o=e.lastIndexOf("\x3c!--");n=(o>-1||n)&&-1===e.indexOf("--\x3e",o+1);const i=D.exec(e);t+=null===i?e+(n?F:O):e.substr(0,i.index)+i[1]+i[2]+"$lit$"+i[3]+C}return t+=this.strings[e],t}getTemplateElement(){const e=document.createElement("template");let t=this.getHTML();return void 0!==H&&(t=H.createHTML(t)),e.innerHTML=t,e}}class q extends Y{getHTML(){return`<svg>${super.getHTML()}</svg>`}getTemplateElement(){const e=super.getTemplateElement(),t=e.content,n=t.firstChild;return t.removeChild(n),((e,t,n=null,r=null)=>{for(;t!==n;){const n=t.nextSibling;e.insertBefore(t,r),t=n}})(t,n.firstChild),e}}
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */const W=e=>null===e||!("object"==typeof e||"function"==typeof e),J=e=>Array.isArray(e)||!(!e||!e[Symbol.iterator]);class K{constructor(e,t,n){this.dirty=!0,this.element=e,this.name=t,this.strings=n,this.parts=[];for(let e=0;e<n.length-1;e++)this.parts[e]=this._createPart()}_createPart(){return new Z(this)}_getValue(){const e=this.strings,t=e.length-1,n=this.parts;if(1===t&&""===e[0]&&""===e[1]){const e=n[0].value;if("symbol"==typeof e)return String(e);if("string"==typeof e||!J(e))return e}let r="";for(let o=0;o<t;o++){r+=e[o];const t=n[o];if(void 0!==t){const e=t.value;if(W(e)||!J(e))r+="string"==typeof e?e:String(e);else for(const t of e)r+="string"==typeof t?t:String(t)}}return r+=e[t],r}commit(){this.dirty&&(this.dirty=!1,this.element.setAttribute(this.name,this._getValue()))}}class Z{constructor(e){this.value=void 0,this.committer=e}setValue(e){e===z||W(e)&&e===this.value||(this.value=e,U(e)||(this.committer.dirty=!0))}commit(){for(;U(this.value);){const e=this.value;this.value=z,e(this)}this.value!==z&&this.committer.commit()}}class Q{constructor(e){this.value=void 0,this.__pendingValue=void 0,this.options=e}appendInto(e){this.startNode=e.appendChild($()),this.endNode=e.appendChild($())}insertAfterNode(e){this.startNode=e,this.endNode=e.nextSibling}appendIntoPart(e){e.__insert(this.startNode=$()),e.__insert(this.endNode=$())}insertAfterPart(e){e.__insert(this.startNode=$()),this.endNode=e.endNode,e.endNode=this.startNode}setValue(e){this.__pendingValue=e}commit(){if(null===this.startNode.parentNode)return;for(;U(this.__pendingValue);){const e=this.__pendingValue;this.__pendingValue=z,e(this)}const e=this.__pendingValue;e!==z&&(W(e)?e!==this.value&&this.__commitText(e):e instanceof Y?this.__commitTemplateResult(e):e instanceof Node?this.__commitNode(e):J(e)?this.__commitIterable(e):e===V?(this.value=V,this.clear()):this.__commitText(e))}__insert(e){this.endNode.parentNode.insertBefore(e,this.endNode)}__commitNode(e){this.value!==e&&(this.clear(),this.__insert(e),this.value=e)}__commitText(e){const t=this.startNode.nextSibling,n="string"==typeof(e=null==e?"":e)?e:String(e);t===this.endNode.previousSibling&&3===t.nodeType?t.data=n:this.__commitNode(document.createTextNode(n)),this.value=e}__commitTemplateResult(e){const t=this.options.templateFactory(e);if(this.value instanceof L&&this.value.template===t)this.value.update(e.values);else{const n=new L(t,e.processor,this.options),r=n._clone();n.update(e.values),this.__commitNode(r),this.value=n}}__commitIterable(e){Array.isArray(this.value)||(this.value=[],this.clear());const t=this.value;let n,r=0;for(const o of e)n=t[r],void 0===n&&(n=new Q(this.options),t.push(n),0===r?n.appendIntoPart(this):n.insertAfterPart(t[r-1])),n.setValue(o),n.commit(),r++;r<t.length&&(t.length=r,this.clear(n&&n.endNode))}clear(e=this.startNode){N(this.startNode.parentNode,e.nextSibling,this.endNode)}}class G{constructor(e,t,n){if(this.value=void 0,this.__pendingValue=void 0,2!==n.length||""!==n[0]||""!==n[1])throw new Error("Boolean attributes can only contain a single expression");this.element=e,this.name=t,this.strings=n}setValue(e){this.__pendingValue=e}commit(){for(;U(this.__pendingValue);){const e=this.__pendingValue;this.__pendingValue=z,e(this)}if(this.__pendingValue===z)return;const e=!!this.__pendingValue;this.value!==e&&(e?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name),this.value=e),this.__pendingValue=z}}class X extends K{constructor(e,t,n){super(e,t,n),this.single=2===n.length&&""===n[0]&&""===n[1]}_createPart(){return new ee(this)}_getValue(){return this.single?this.parts[0].value:super._getValue()}commit(){this.dirty&&(this.dirty=!1,this.element[this.name]=this._getValue())}}class ee extends Z{}let te=!1;(()=>{try{const e={get capture(){return te=!0,!1}};window.addEventListener("test",e,e),window.removeEventListener("test",e,e)}catch(e){}})();class ne{constructor(e,t,n){this.value=void 0,this.__pendingValue=void 0,this.element=e,this.eventName=t,this.eventContext=n,this.__boundHandleEvent=e=>this.handleEvent(e)}setValue(e){this.__pendingValue=e}commit(){for(;U(this.__pendingValue);){const e=this.__pendingValue;this.__pendingValue=z,e(this)}if(this.__pendingValue===z)return;const e=this.__pendingValue,t=this.value,n=null==e||null!=t&&(e.capture!==t.capture||e.once!==t.once||e.passive!==t.passive),r=null!=e&&(null==t||n);n&&this.element.removeEventListener(this.eventName,this.__boundHandleEvent,this.__options),r&&(this.__options=re(e),this.element.addEventListener(this.eventName,this.__boundHandleEvent,this.__options)),this.value=e,this.__pendingValue=z}handleEvent(e){"function"==typeof this.value?this.value.call(this.eventContext||this.element,e):this.value.handleEvent(e)}}const re=e=>e&&(te?{capture:e.capture,passive:e.passive,once:e.once}:e.capture)
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */;function oe(e){let t=ie.get(e.type);void 0===t&&(t={stringsArray:new WeakMap,keyString:new Map},ie.set(e.type,t));let n=t.stringsArray.get(e.strings);if(void 0!==n)return n;const r=e.strings.join(C);return n=t.keyString.get(r),void 0===n&&(n=new T(e,e.getTemplateElement()),t.keyString.set(r,n)),t.stringsArray.set(e.strings,n),n}const ie=new Map,se=new WeakMap;
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */const ae=new
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
class{handleAttributeExpressions(e,t,n,r){const o=t[0];if("."===o){return new X(e,t.slice(1),n).parts}if("@"===o)return[new ne(e,t.slice(1),r.eventContext)];if("?"===o)return[new G(e,t.slice(1),n)];return new K(e,t,n).parts}handleTextExpression(e){return new Q(e)}};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */"undefined"!=typeof window&&(window.litHtmlVersions||(window.litHtmlVersions=[])).push("1.3.0");const ce=(e,...t)=>new Y(e,t,"html",ae),le=(e,...t)=>new q(e,t,"svg",ae)
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */,ue=(e,t)=>`${e}--${t}`;let de=!0;void 0===window.ShadyCSS?de=!1:void 0===window.ShadyCSS.prepareTemplateDom&&(console.warn("Incompatible ShadyCSS version detected. Please update to at least @webcomponents/webcomponentsjs@2.0.2 and @webcomponents/shadycss@1.3.1."),de=!1);const he=e=>t=>{const n=ue(t.type,e);let r=ie.get(n);void 0===r&&(r={stringsArray:new WeakMap,keyString:new Map},ie.set(n,r));let o=r.stringsArray.get(t.strings);if(void 0!==o)return o;const i=t.strings.join(C);if(o=r.keyString.get(i),void 0===o){const n=t.getTemplateElement();de&&window.ShadyCSS.prepareTemplateDom(n,e),o=new T(t,n),r.keyString.set(i,o)}return r.stringsArray.set(t.strings,o),o},fe=["html","svg"],pe=new Set,me=(e,t,n)=>{pe.add(e);const r=n?n.element:document.createElement("template"),o=t.querySelectorAll("style"),{length:i}=o;if(0===i)return void window.ShadyCSS.prepareTemplateStyles(r,e);const s=document.createElement("style");for(let e=0;e<i;e++){const t=o[e];t.parentNode.removeChild(t),s.textContent+=t.textContent}(e=>{fe.forEach(t=>{const n=ie.get(ue(t,e));void 0!==n&&n.keyString.forEach(e=>{const{element:{content:t}}=e,n=new Set;Array.from(t.querySelectorAll("style")).forEach(e=>{n.add(e)}),M(e,n)})})})(e);const a=r.content;n?function(e,t,n=null){const{element:{content:r},parts:o}=e;if(null==n)return void r.appendChild(t);const i=document.createTreeWalker(r,133,null,!1);let s=R(o),a=0,c=-1;for(;i.nextNode();){c++;for(i.currentNode===n&&(a=j(t),n.parentNode.insertBefore(t,n));-1!==s&&o[s].index===c;){if(a>0){for(;-1!==s;)o[s].index+=a,s=R(o,s);return}s=R(o,s)}}}(n,s,a.firstChild):a.insertBefore(s,a.firstChild),window.ShadyCSS.prepareTemplateStyles(r,e);const c=a.querySelector("style");if(window.ShadyCSS.nativeShadow&&null!==c)t.insertBefore(c.cloneNode(!0),t.firstChild);else if(n){a.insertBefore(s,a.firstChild);const e=new Set;e.add(s),M(n,e)}};window.JSCompiler_renameProperty=(e,t)=>e;const ge={toAttribute(e,t){switch(t){case Boolean:return e?"":null;case Object:case Array:return null==e?e:JSON.stringify(e)}return e},fromAttribute(e,t){switch(t){case Boolean:return null!==e;case Number:return null===e?null:Number(e);case Object:case Array:return JSON.parse(e)}return e}},ve=(e,t)=>t!==e&&(t==t||e==e),ye={attribute:!0,type:String,converter:ge,reflect:!1,hasChanged:ve};class be extends HTMLElement{constructor(){super(),this.initialize()}static get observedAttributes(){this.finalize();const e=[];return this._classProperties.forEach((t,n)=>{const r=this._attributeNameForProperty(n,t);void 0!==r&&(this._attributeToPropertyMap.set(r,n),e.push(r))}),e}static _ensureClassProperties(){if(!this.hasOwnProperty(JSCompiler_renameProperty("_classProperties",this))){this._classProperties=new Map;const e=Object.getPrototypeOf(this)._classProperties;void 0!==e&&e.forEach((e,t)=>this._classProperties.set(t,e))}}static createProperty(e,t=ye){if(this._ensureClassProperties(),this._classProperties.set(e,t),t.noAccessor||this.prototype.hasOwnProperty(e))return;const n="symbol"==typeof e?Symbol():"__"+e,r=this.getPropertyDescriptor(e,n,t);void 0!==r&&Object.defineProperty(this.prototype,e,r)}static getPropertyDescriptor(e,t,n){return{get(){return this[t]},set(r){const o=this[e];this[t]=r,this.requestUpdateInternal(e,o,n)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this._classProperties&&this._classProperties.get(e)||ye}static finalize(){const e=Object.getPrototypeOf(this);if(e.hasOwnProperty("finalized")||e.finalize(),this.finalized=!0,this._ensureClassProperties(),this._attributeToPropertyMap=new Map,this.hasOwnProperty(JSCompiler_renameProperty("properties",this))){const e=this.properties,t=[...Object.getOwnPropertyNames(e),..."function"==typeof Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(e):[]];for(const n of t)this.createProperty(n,e[n])}}static _attributeNameForProperty(e,t){const n=t.attribute;return!1===n?void 0:"string"==typeof n?n:"string"==typeof e?e.toLowerCase():void 0}static _valueHasChanged(e,t,n=ve){return n(e,t)}static _propertyValueFromAttribute(e,t){const n=t.type,r=t.converter||ge,o="function"==typeof r?r:r.fromAttribute;return o?o(e,n):e}static _propertyValueToAttribute(e,t){if(void 0===t.reflect)return;const n=t.type,r=t.converter;return(r&&r.toAttribute||ge.toAttribute)(e,n)}initialize(){this._updateState=0,this._updatePromise=new Promise(e=>this._enableUpdatingResolver=e),this._changedProperties=new Map,this._saveInstanceProperties(),this.requestUpdateInternal()}_saveInstanceProperties(){this.constructor._classProperties.forEach((e,t)=>{if(this.hasOwnProperty(t)){const e=this[t];delete this[t],this._instanceProperties||(this._instanceProperties=new Map),this._instanceProperties.set(t,e)}})}_applyInstanceProperties(){this._instanceProperties.forEach((e,t)=>this[t]=e),this._instanceProperties=void 0}connectedCallback(){this.enableUpdating()}enableUpdating(){void 0!==this._enableUpdatingResolver&&(this._enableUpdatingResolver(),this._enableUpdatingResolver=void 0)}disconnectedCallback(){}attributeChangedCallback(e,t,n){t!==n&&this._attributeToProperty(e,n)}_propertyToAttribute(e,t,n=ye){const r=this.constructor,o=r._attributeNameForProperty(e,n);if(void 0!==o){const e=r._propertyValueToAttribute(t,n);if(void 0===e)return;this._updateState=8|this._updateState,null==e?this.removeAttribute(o):this.setAttribute(o,e),this._updateState=-9&this._updateState}}_attributeToProperty(e,t){if(8&this._updateState)return;const n=this.constructor,r=n._attributeToPropertyMap.get(e);if(void 0!==r){const e=n.getPropertyOptions(r);this._updateState=16|this._updateState,this[r]=n._propertyValueFromAttribute(t,e),this._updateState=-17&this._updateState}}requestUpdateInternal(e,t,n){let r=!0;if(void 0!==e){const o=this.constructor;n=n||o.getPropertyOptions(e),o._valueHasChanged(this[e],t,n.hasChanged)?(this._changedProperties.has(e)||this._changedProperties.set(e,t),!0!==n.reflect||16&this._updateState||(void 0===this._reflectingProperties&&(this._reflectingProperties=new Map),this._reflectingProperties.set(e,n))):r=!1}!this._hasRequestedUpdate&&r&&(this._updatePromise=this._enqueueUpdate())}requestUpdate(e,t){return this.requestUpdateInternal(e,t),this.updateComplete}async _enqueueUpdate(){this._updateState=4|this._updateState;try{await this._updatePromise}catch(e){}const e=this.performUpdate();return null!=e&&await e,!this._hasRequestedUpdate}get _hasRequestedUpdate(){return 4&this._updateState}get hasUpdated(){return 1&this._updateState}performUpdate(){if(!this._hasRequestedUpdate)return;this._instanceProperties&&this._applyInstanceProperties();let e=!1;const t=this._changedProperties;try{e=this.shouldUpdate(t),e?this.update(t):this._markUpdated()}catch(t){throw e=!1,this._markUpdated(),t}e&&(1&this._updateState||(this._updateState=1|this._updateState,this.firstUpdated(t)),this.updated(t))}_markUpdated(){this._changedProperties=new Map,this._updateState=-5&this._updateState}get updateComplete(){return this._getUpdateComplete()}_getUpdateComplete(){return this._updatePromise}shouldUpdate(e){return!0}update(e){void 0!==this._reflectingProperties&&this._reflectingProperties.size>0&&(this._reflectingProperties.forEach((e,t)=>this._propertyToAttribute(t,this[t],e)),this._reflectingProperties=void 0),this._markUpdated()}updated(e){}firstUpdated(e){}}be.finalized=!0;
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const _e=e=>t=>"function"==typeof t?((e,t)=>(window.customElements.define(e,t),t))(e,t):((e,t)=>{const{kind:n,elements:r}=t;return{kind:n,elements:r,finisher(t){window.customElements.define(e,t)}}})(e,t),we=(e,t)=>"method"===t.kind&&t.descriptor&&!("value"in t.descriptor)?Object.assign(Object.assign({},t),{finisher(n){n.createProperty(t.key,e)}}):{kind:"field",key:Symbol(),placement:"own",descriptor:{},initializer(){"function"==typeof t.initializer&&(this[t.key]=t.initializer.call(this))},finisher(n){n.createProperty(t.key,e)}};function Se(e){return(t,n)=>void 0!==n?((e,t,n)=>{t.constructor.createProperty(n,e)})(e,t,n):we(e,t)}function xe(e){return Se({attribute:!1,hasChanged:null==e?void 0:e.hasChanged})}
/**
@license
Copyright (c) 2019 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/const ke=window.ShadowRoot&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Pe=Symbol();class Ne{constructor(e,t){if(t!==Pe)throw new Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e}get styleSheet(){return void 0===this._styleSheet&&(ke?(this._styleSheet=new CSSStyleSheet,this._styleSheet.replaceSync(this.cssText)):this._styleSheet=null),this._styleSheet}toString(){return this.cssText}}const Ce=(e,...t)=>{const n=t.reduce((t,n,r)=>t+(e=>{if(e instanceof Ne)return e.cssText;if("number"==typeof e)return e;throw new Error(`Value passed to 'css' function must be a 'css' function result: ${e}. Use 'unsafeCSS' to pass non-literal values, but\n            take care to ensure page security.`)})(n)+e[r+1],e[0]);return new Ne(n,Pe)};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
(window.litElementVersions||(window.litElementVersions=[])).push("2.4.0");const Oe={};class Ie extends be{static getStyles(){return this.styles}static _getUniqueStyles(){if(this.hasOwnProperty(JSCompiler_renameProperty("_styles",this)))return;const e=this.getStyles();if(Array.isArray(e)){const t=(e,n)=>e.reduceRight((e,n)=>Array.isArray(n)?t(n,e):(e.add(n),e),n),n=t(e,new Set),r=[];n.forEach(e=>r.unshift(e)),this._styles=r}else this._styles=void 0===e?[]:[e];this._styles=this._styles.map(e=>{if(e instanceof CSSStyleSheet&&!ke){const t=Array.prototype.slice.call(e.cssRules).reduce((e,t)=>e+t.cssText,"");return new Ne(String(t),Pe)}return e})}initialize(){super.initialize(),this.constructor._getUniqueStyles(),this.renderRoot=this.createRenderRoot(),window.ShadowRoot&&this.renderRoot instanceof window.ShadowRoot&&this.adoptStyles()}createRenderRoot(){return this.attachShadow({mode:"open"})}adoptStyles(){const e=this.constructor._styles;0!==e.length&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow?ke?this.renderRoot.adoptedStyleSheets=e.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet):this._needsShimAdoptedStyleSheets=!0:window.ShadyCSS.ScopingShim.prepareAdoptedCssText(e.map(e=>e.cssText),this.localName))}connectedCallback(){super.connectedCallback(),this.hasUpdated&&void 0!==window.ShadyCSS&&window.ShadyCSS.styleElement(this)}update(e){const t=this.render();super.update(e),t!==Oe&&this.constructor.render(t,this.renderRoot,{scopeName:this.localName,eventContext:this}),this._needsShimAdoptedStyleSheets&&(this._needsShimAdoptedStyleSheets=!1,this.constructor._styles.forEach(e=>{const t=document.createElement("style");t.textContent=e.cssText,this.renderRoot.appendChild(t)}))}render(){return Oe}}Ie.finalized=!0,Ie.render=(e,t,n)=>{if(!n||"object"!=typeof n||!n.scopeName)throw new Error("The `scopeName` option is required.");const r=n.scopeName,o=se.has(t),i=de&&11===t.nodeType&&!!t.host,s=i&&!pe.has(r),a=s?document.createDocumentFragment():t;if(((e,t,n)=>{let r=se.get(t);void 0===r&&(N(t,t.firstChild),se.set(t,r=new Q(Object.assign({templateFactory:oe},n))),r.appendInto(t)),r.setValue(e),r.commit()})(e,a,Object.assign({templateFactory:he(r)},n)),s){const e=se.get(a);se.delete(a);const n=e.value instanceof L?e.value.template:void 0;me(r,a,n),N(t,t.firstChild),t.appendChild(a),se.set(t,e)}!o&&i&&window.ShadyCSS.styleElement(t.host)};const Te={hours_to_show:24,severity:100,average_template:"[[[ return variables.uptime.toFixed(2); ]]]%",status_template:"[[[ return variables.current; ]]]",title_adaptive_color:!1,status_adaptive_color:!1,icon_adaptive_color:!1,tooltip_adaptive_color:!1},Ee={ok:"#45C669",ko:"#C66445",half:"#C6B145",none:"#C9C9C9",title:"grey",status:"grey",tooltip:"grey"},Ae={header:!0,title:!0,icon:!0,status:!0,timeline:!0,footer:!0,average:!0},$e={height:46,round:1,spacing:4,amount:36},De={hour24:!1,template:"[[[ return variables.from_date; ]]] -         [[[ return variables.to_date; ]]] |         [[[ return variables.average; ]]]%",animation:!0},Me={action:"more-info"},je={header:"spaced",icon_first:!1,status:"spaced",tooltip_first:!1};let Re=class extends Ie{constructor(){super(...arguments),this._initialized=!1}setConfig(e){this._config=e,this.loadCardHelpers()}shouldUpdate(){return this._initialized||this._initialize(),!0}render(){return this.hass&&this._helpers&&this.options?(this._helpers.importMoreInfoControl("climate"),ce`
            <div class="card-config">
                ${Object.entries(this.options).map(e=>this.renderOption(e[0],e[1]))}
            </div>
        `):ce``}renderOption(e,t){return ce`
            <div class="option" @click=${this._toggleOption} .option=${e}>
                <div class="row">
                    <ha-icon .icon=${"mdi:"+t.icon}></ha-icon>
                    <div class="title">${t.name}</div>
                </div>
                <div class="secondary">${t.description}</div>
            </div>

            ${t.show?ce`
                      <div class="values">
                          ${t.properties.map(e=>this.renderProperty(e))}
                      </div>
                  `:""}
        `}renderProperty(e){return"input"==e.type?this.renderInputProperty(e):"number"==e.type?this.renderNumberProperty(e):"dropdown"==e.type?this.renderDropdownProperty(e):"switch"==e.type?this.renderSwitchProperty(e):ce``}renderInputProperty(e){return ce`
            <paper-input
                label=${e.label}
                placeholder=${e.default||""}
                .value=${this.getPropertyValue(e)}
                .configValue=${e.name}
                .configSection=${e.section}
                @value-changed=${this._valueChanged}
            ></paper-input>
        `}renderNumberProperty(e){return ce`
            <paper-input
                label=${e.label}
                placeholder=${e.default||""}
                .value=${this.getPropertyValue(e)}
                .configValue=${e.name}
                .configSection=${e.section}
                .number=${!0}
                @value-changed=${this._valueChanged}
                min=${e.min}
                max=${e.max}
                prevent-invalid-input
                allowed-pattern="^[0-9]+$"
            ></paper-input>
        `}renderSwitchProperty(e){const t=this.getPropertyValue(e);return ce`
            <br />
            <ha-formfield .label=${e.label}>
                <ha-switch
                    .checked=${null!=t?t:null!=e.default&&e.default}
                    .configValue=${e.name}
                    .configSection=${e.section}
                    @change=${this._valueChanged}
                ></ha-switch>
            </ha-formfield>
        `}renderDropdownProperty(e){return ce`
            <paper-dropdown-menu
                label=${e.label}
                .value=${this.getPropertyValue(e)||e.default||""}
                @value-changed=${this._valueChanged}
                .configValue=${e.name}
                .configSection=${e.section}
            >
                <paper-listbox slot="dropdown-content" .selected=${e.selected}>
                    ${e.items.map(e=>ce`
                            <paper-item>${e}</paper-item>
                        `)}
                </paper-listbox>
            </paper-dropdown-menu>
        `}getPropertyValue(e){if(null==this._config)return;const t=e.section?this._config[e.section]:this._config;return null!=t?t[e.name]:void 0}_initialize(){var e,t,n,r,o,i,s,a,c,l,u,d,h;if(void 0===this.hass)return;if(void 0===this._config)return;if(void 0===this._helpers)return;this._initialized=!0;const f=Object.keys(this.hass.states),p=["more-info","url","navigate","toggle","call-service","fire-dom-event"],m=["center","right","left","spaced"],g=["fade","shadow"],v=["card","status","title","icon"];this.options={mandatory:{icon:"tune",name:"Mandatory",description:"Required options for this card to function",show:!0,properties:[{type:"dropdown",items:f,name:"entity",label:"Entity",selected:f.indexOf((null===(e=this._config)||void 0===e?void 0:e.entity)||"")}]},customization:{icon:"cog",name:"Global customization",description:"Customize the name, icon, etc",show:!1,properties:[{type:"input",name:"attribute",label:"Attribute"},{type:"input",name:"name",label:"Name"},{type:"input",name:"icon",label:"Icon"},{type:"input",name:"ko_icon",label:"KO Icon"},{type:"number",name:"severity",label:"Severity",min:0,max:100,default:Te.severity},{type:"number",name:"hours_to_show",label:"Hours to show",min:1/60,max:8760,default:Te.hours_to_show},{type:"input",name:"ok",label:"Ok status name"},{type:"input",name:"ko",label:"Ko status name"},{type:"input",name:"status_template",label:"The template of the status",default:Te.status_template},{type:"input",name:"average_template",label:"Average template",default:Te.average_template},{type:"switch",name:"title_adaptive_color",label:"Adaptive color for title",default:Te.title_adaptive_color},{type:"switch",name:"status_adaptive_color",label:"Adaptive color for status",default:Te.status_adaptive_color},{type:"switch",name:"icon_adaptive_color",label:"Adaptive color for icon",default:Te.icon_adaptive_color},{type:"switch",name:"tooltip_adaptive_color",label:"Adaptive color for tooltip",default:Te.tooltip_adaptive_color}]},bar:{icon:"chart-bar",name:"Bar customization",description:"Customize the bar style",show:!1,properties:[{type:"number",name:"height",section:"bar",label:"Height",min:4,max:200,default:$e.height},{type:"number",name:"round",section:"bar",label:"Round corner ratio",min:0,max:100,default:$e.round},{type:"number",name:"spacing",section:"bar",label:"Spacing",min:0,max:10,default:$e.spacing},{type:"number",name:"amount",section:"bar",label:"Amount",min:1,max:100,default:$e.amount}]},color:{icon:"palette",name:"Color customization",description:"Customize the color palette",show:!1,properties:[{type:"input",name:"ok",section:"color",label:"Ok's element color",default:Ee.ok},{type:"input",name:"ko",section:"color",label:"Ko's element color",default:Ee.ko},{type:"input",name:"none",section:"color",label:"Unknown's element color",default:Ee.none},{type:"input",name:"half",section:"color",label:"Half's element color",default:Ee.half},{type:"input",name:"title",section:"color",label:"Title text color",default:Ee.title},{type:"input",name:"status",section:"color",label:"Status text color",default:Ee.status},{type:"input",name:"icon",section:"color",label:"Icon color"},{type:"input",name:"tooltip",section:"color",label:"Tooltip text color",default:Ee.tooltip}]},show:{icon:"eye",name:"Toggle elements",description:"Show or hide uptime card elements",show:!1,properties:[{type:"switch",name:"header",section:"show",label:"Toggle header",default:Ae.header},{type:"switch",name:"title",section:"show",label:"Toggle title",default:Ae.title},{type:"switch",name:"icon",section:"show",label:"Toggle icon",default:Ae.icon},{type:"switch",name:"status",section:"show",label:"Toggle status",default:Ae.status},{type:"switch",name:"timeline",section:"show",label:"Toggle timeline",default:Ae.timeline},{type:"switch",name:"footer",section:"show",label:"Toggle footer",default:Ae.footer},{type:"switch",name:"average",section:"show",label:"Toggle average",default:Ae.average}]},alias:{icon:"reload",name:"Alias",description:"Replace status name by alias",show:!1,properties:[{type:"input",name:"ok",section:"alias",label:"Alias for Ok status"},{type:"input",name:"ko",section:"alias",label:"Alias for Ko status"}]},tooltip:{icon:"tooltip-text",name:"Tooltip elements",description:"Handle tooltip information",show:!1,properties:[{type:"switch",name:"hour24",section:"tooltip",label:"Set to true to display times in 24-hour format.",default:De.hour24},{type:"switch",name:"animation",section:"tooltip",label:"Set to true to show the animation.",default:De.animation},{type:"input",name:"template",section:"tooltip",label:"Template of the tooltip.",default:De.template}]},tap_action:{icon:"gesture-tap",name:"Tap action elements",description:"Handle tap action information",show:!1,properties:[{type:"dropdown",items:p,name:"action",section:"tap_action",label:"Action to perform.",selected:p.indexOf((null===(n=null===(t=this._config)||void 0===t?void 0:t.tap_action)||void 0===n?void 0:n.action)||Me.action)},{type:"input",name:"entity",section:"tap_action",label:"(Only for more-info) Override the entity for more information."},{type:"input",name:"navigation_path",section:"tap_action",label:"(Only for navigate) Path to navigate to (e.g. `/lovelace/0/`)."},{type:"input",name:"url_path",section:"tap_action",label:"(Only for url) URL to open."},{type:"input",name:"service",section:"tap_action",label:"(Only for call-service) Service to call."},{type:"input",name:"service-data",section:"tap_action",label:"(Only for call-service) Service data to include."},{type:"dropdown",items:["success","warning","failure","light","medium","heavy","selection"],name:"haptic",section:"tap_action",label:"Haptic feedback.",selected:p.indexOf((null===(o=null===(r=this._config)||void 0===r?void 0:r.tap_action)||void 0===o?void 0:o.haptic)||"")}]},alignment:{icon:"ruler",name:"Alignment",description:"Align elements from the card",show:!1,properties:[{type:"dropdown",items:m,name:"header",section:"alignment",label:"Alignment of the header.",selected:m.indexOf((null===(s=null===(i=this._config)||void 0===i?void 0:i.alignment)||void 0===s?void 0:s.header)||je.header)},{type:"switch",name:"icon_first",section:"alignment",label:"Set to true if the icon should be placed before the title.",default:je.icon_first},{type:"dropdown",items:m,name:"status",section:"alignment",label:"Alignment of the status.",selected:m.indexOf((null===(c=null===(a=this._config)||void 0===a?void 0:a.alignment)||void 0===c?void 0:c.status)||je.status)},{type:"switch",name:"tooltip_first",section:"alignment",label:"Set to true if the tooltip should be placed before the state.",default:je.tooltip_first}]},blink:{icon:"alert",name:"Blink customization",description:"Customize blink",show:!1,properties:[{type:"dropdown",items:g,name:"effect",section:"blink",label:"The blink effect.",selected:g.indexOf(null===(u=null===(l=this._config)||void 0===l?void 0:l.blink)||void 0===u?void 0:u.effect)},{type:"dropdown",items:v,name:"target",section:"blink",label:"Set the component to blink.",selected:v.indexOf(null===(h=null===(d=this._config)||void 0===d?void 0:d.blink)||void 0===h?void 0:h.target)},{type:"number",name:"speed",label:"The animation speed.",section:"blink",min:0,max:100}]}}}async loadCardHelpers(){this._helpers=await window.loadCardHelpers()}_toggleOption(e){if(null==this.options)return;const t=!this.options[e.target.option].show;for(const[e]of Object.entries(this.options))this.options[e].show=!1;this.options[e.target.option].show=t,this._toggle=!this._toggle}_valueChanged(e){if(!this._config||!this.hass)return;const t=e.target,n=t.configSection,r=Object.assign({},this._config),o=(n?Object.assign({},r[n]):r)||{};if(t.configValue)if(void 0===t.value&&void 0===t.checked||""===t.value)delete o[t.configValue],this._config=n?Object.assign(Object.assign({},r),{[n]:o}):Object.assign({},o);else{const e=t.configValue,o=void 0!==t.checked?t.checked:t.value,i=t.number?parseFloat(o):o;this._config=n?Object.assign(Object.assign({},r),{[n]:Object.assign(Object.assign({},r[n]),{[e]:i})}):Object.assign(Object.assign({},r),{[e]:i})}S(this,"config-changed",{config:this._config})}static get styles(){return Ce`
            .option {
                padding: 4px 0px;
                cursor: pointer;
            }
            .row {
                display: flex;
                margin-bottom: -14px;
                pointer-events: none;
            }
            .title {
                padding-left: 16px;
                margin-top: -6px;
                pointer-events: none;
            }
            .secondary {
                padding-left: 40px;
                color: var(--secondary-text-color);
                pointer-events: none;
            }
            .values {
                padding-left: 16px;
                background: var(--secondary-background-color);
                display: grid;
            }
            ha-formfield {
                padding-bottom: 8px;
            }
        `}};e([Se({attribute:!1})],Re.prototype,"hass",void 0),e([xe()],Re.prototype,"_config",void 0),e([xe()],Re.prototype,"_toggle",void 0),e([xe()],Re.prototype,"_helpers",void 0),e([xe()],Re.prototype,"options",void 0),Re=e([_e("uptime-card-editor")],Re);var Be=function(){try{if("undefined"!=typeof indexedDB)return indexedDB;if("undefined"!=typeof webkitIndexedDB)return webkitIndexedDB;if("undefined"!=typeof mozIndexedDB)return mozIndexedDB;if("undefined"!=typeof OIndexedDB)return OIndexedDB;if("undefined"!=typeof msIndexedDB)return msIndexedDB}catch(e){return}}();function Ue(e,t){e=e||[],t=t||{};try{return new Blob(e,t)}catch(o){if("TypeError"!==o.name)throw o;for(var n=new("undefined"!=typeof BlobBuilder?BlobBuilder:"undefined"!=typeof MSBlobBuilder?MSBlobBuilder:"undefined"!=typeof MozBlobBuilder?MozBlobBuilder:WebKitBlobBuilder),r=0;r<e.length;r+=1)n.append(e[r]);return n.getBlob(t.type)}}function ze(e,t){t&&e.then((function(e){t(null,e)}),(function(e){t(e)}))}function Ve(e,t,n){"function"==typeof t&&e.then(t),"function"==typeof n&&e.catch(n)}function Le(e){return"string"!=typeof e&&(console.warn(e+" used as a key, but it is not a string."),e=String(e)),e}function He(){if(arguments.length&&"function"==typeof arguments[arguments.length-1])return arguments[arguments.length-1]}"undefined"==typeof Promise&&require("lie/polyfill");let Fe;const Ye={},qe=Object.prototype.toString;function We(e){return"boolean"==typeof Fe?Promise.resolve(Fe):function(e){return new Promise((function(t){var n=e.transaction("local-forage-detect-blob-support","readwrite"),r=Ue([""]);n.objectStore("local-forage-detect-blob-support").put(r,"key"),n.onabort=function(e){e.preventDefault(),e.stopPropagation(),t(!1)},n.oncomplete=function(){var e=navigator.userAgent.match(/Chrome\/(\d+)/),n=navigator.userAgent.match(/Edge\//);t(n||!e||parseInt(e[1],10)>=43)}})).catch((function(){return!1}))}(e).then((function(e){return Fe=e,Fe}))}function Je(e){var t=Ye[e.name],n={};n.promise=new Promise((function(e,t){n.resolve=e,n.reject=t})),t.deferredOperations.push(n),t.dbReady?t.dbReady=t.dbReady.then((function(){return n.promise})):t.dbReady=n.promise}function Ke(e){var t=Ye[e.name].deferredOperations.pop();if(t)return t.resolve(),t.promise}function Ze(e,t){var n=Ye[e.name].deferredOperations.pop();if(n)return n.reject(t),n.promise}function Qe(e,t){return new Promise((function(n,r){if(Ye[e.name]=Ye[e.name]||{forages:[],db:null,dbReady:null,deferredOperations:[]},e.db){if(!t)return n(e.db);Je(e),e.db.close()}var o=[e.name];t&&o.push(e.version);var i=Be.open.apply(Be,o);t&&(i.onupgradeneeded=function(t){var n=i.result;try{n.createObjectStore(e.storeName),t.oldVersion<=1&&n.createObjectStore("local-forage-detect-blob-support")}catch(n){if("ConstraintError"!==n.name)throw n;console.warn('The database "'+e.name+'" has been upgraded from version '+t.oldVersion+" to version "+t.newVersion+', but the storage "'+e.storeName+'" already exists.')}}),i.onerror=function(e){e.preventDefault(),r(i.error)},i.onsuccess=function(){n(i.result),Ke(e)}}))}function Ge(e){return Qe(e,!1)}function Xe(e){return Qe(e,!0)}function et(e,t){if(!e.db)return!0;var n=!e.db.objectStoreNames.contains(e.storeName),r=e.version<e.db.version,o=e.version>e.db.version;if(r&&(e.version!==t&&console.warn('The database "'+e.name+"\" can't be downgraded from version "+e.db.version+" to version "+e.version+"."),e.version=e.db.version),o||n){if(n){var i=e.db.version+1;i>e.version&&(e.version=i)}return!0}return!1}function tt(e){return Ue([function(e){for(var t=e.length,n=new ArrayBuffer(t),r=new Uint8Array(n),o=0;o<t;o++)r[o]=e.charCodeAt(o);return n}(atob(e.data))],{type:e.type})}function nt(e){return e&&e.__local_forage_encoded_blob}function rt(e){var t=this,n=t._initReady().then((function(){var e=Ye[t._dbInfo.name];if(e&&e.dbReady)return e.dbReady}));return Ve(n,e,e),n}function ot(e,t,n,r){void 0===r&&(r=1);try{var o=e.db.transaction(e.storeName,t);n(null,o)}catch(o){if(r>0&&(!e.db||"InvalidStateError"===o.name||"NotFoundError"===o.name))return Promise.resolve().then(()=>{if(!e.db||"NotFoundError"===o.name&&!e.db.objectStoreNames.contains(e.storeName)&&e.version<=e.db.version)return e.db&&(e.version=e.db.version+1),Xe(e)}).then(()=>function(e){Je(e);for(var t=Ye[e.name],n=t.forages,r=0;r<n.length;r++){const e=n[r];e._dbInfo.db&&(e._dbInfo.db.close(),e._dbInfo.db=null)}return e.db=null,Ge(e).then(t=>(e.db=t,et(e)?Xe(e):t)).then(r=>{e.db=t.db=r;for(var o=0;o<n.length;o++)n[o]._dbInfo.db=r}).catch(t=>{throw Ze(e,t),t})}(e).then((function(){ot(e,t,n,r-1)}))).catch(n);n(o)}}var it={_driver:"asyncStorage",_initStorage:function(e){var t=this,n={db:null};if(e)for(var r in e)n[r]=e[r];var o=Ye[n.name];o||(o={forages:[],db:null,dbReady:null,deferredOperations:[]},Ye[n.name]=o),o.forages.push(t),t._initReady||(t._initReady=t.ready,t.ready=rt);var i=[];function s(){return Promise.resolve()}for(var a=0;a<o.forages.length;a++){var c=o.forages[a];c!==t&&i.push(c._initReady().catch(s))}var l=o.forages.slice(0);return Promise.all(i).then((function(){return n.db=o.db,Ge(n)})).then((function(e){return n.db=e,et(n,t._defaultConfig.version)?Xe(n):e})).then((function(e){n.db=o.db=e,t._dbInfo=n;for(var r=0;r<l.length;r++){var i=l[r];i!==t&&(i._dbInfo.db=n.db,i._dbInfo.version=n.version)}}))},_support:function(){try{if(!Be||!Be.open)return!1;var e="undefined"!=typeof openDatabase&&/(Safari|iPhone|iPad|iPod)/.test(navigator.userAgent)&&!/Chrome/.test(navigator.userAgent)&&!/BlackBerry/.test(navigator.platform),t="function"==typeof fetch&&-1!==fetch.toString().indexOf("[native code");return(!e||t)&&"undefined"!=typeof indexedDB&&"undefined"!=typeof IDBKeyRange}catch(e){return!1}}(),iterate:function(e,t){var n=this,r=new Promise((function(t,r){n.ready().then((function(){ot(n._dbInfo,"readonly",(function(o,i){if(o)return r(o);try{var s=i.objectStore(n._dbInfo.storeName).openCursor(),a=1;s.onsuccess=function(){var n=s.result;if(n){var r=n.value;nt(r)&&(r=tt(r));var o=e(r,n.key,a++);void 0!==o?t(o):n.continue()}else t()},s.onerror=function(){r(s.error)}}catch(e){r(e)}}))})).catch(r)}));return ze(r,t),r},getItem:function(e,t){var n=this;e=Le(e);var r=new Promise((function(t,r){n.ready().then((function(){ot(n._dbInfo,"readonly",(function(o,i){if(o)return r(o);try{var s=i.objectStore(n._dbInfo.storeName).get(e);s.onsuccess=function(){var e=s.result;void 0===e&&(e=null),nt(e)&&(e=tt(e)),t(e)},s.onerror=function(){r(s.error)}}catch(e){r(e)}}))})).catch(r)}));return ze(r,t),r},setItem:function(e,t,n){var r=this;e=Le(e);var o=new Promise((function(n,o){var i;r.ready().then((function(){return i=r._dbInfo,"[object Blob]"===qe.call(t)?We(i.db).then((function(e){return e?t:(n=t,new Promise((function(e,t){var r=new FileReader;r.onerror=t,r.onloadend=function(t){var r=btoa(t.target.result||"");e({__local_forage_encoded_blob:!0,data:r,type:n.type})},r.readAsBinaryString(n)})));var n})):t})).then((function(t){ot(r._dbInfo,"readwrite",(function(i,s){if(i)return o(i);try{var a=s.objectStore(r._dbInfo.storeName);null===t&&(t=void 0);var c=a.put(t,e);s.oncomplete=function(){void 0===t&&(t=null),n(t)},s.onabort=s.onerror=function(){var e=c.error?c.error:c.transaction.error;o(e)}}catch(e){o(e)}}))})).catch(o)}));return ze(o,n),o},removeItem:function(e,t){var n=this;e=Le(e);var r=new Promise((function(t,r){n.ready().then((function(){ot(n._dbInfo,"readwrite",(function(o,i){if(o)return r(o);try{var s=i.objectStore(n._dbInfo.storeName).delete(e);i.oncomplete=function(){t()},i.onerror=function(){r(s.error)},i.onabort=function(){var e=s.error?s.error:s.transaction.error;r(e)}}catch(e){r(e)}}))})).catch(r)}));return ze(r,t),r},clear:function(e){var t=this,n=new Promise((function(e,n){t.ready().then((function(){ot(t._dbInfo,"readwrite",(function(r,o){if(r)return n(r);try{var i=o.objectStore(t._dbInfo.storeName).clear();o.oncomplete=function(){e()},o.onabort=o.onerror=function(){var e=i.error?i.error:i.transaction.error;n(e)}}catch(e){n(e)}}))})).catch(n)}));return ze(n,e),n},length:function(e){var t=this,n=new Promise((function(e,n){t.ready().then((function(){ot(t._dbInfo,"readonly",(function(r,o){if(r)return n(r);try{var i=o.objectStore(t._dbInfo.storeName).count();i.onsuccess=function(){e(i.result)},i.onerror=function(){n(i.error)}}catch(e){n(e)}}))})).catch(n)}));return ze(n,e),n},key:function(e,t){var n=this,r=new Promise((function(t,r){e<0?t(null):n.ready().then((function(){ot(n._dbInfo,"readonly",(function(o,i){if(o)return r(o);try{var s=i.objectStore(n._dbInfo.storeName),a=!1,c=s.openKeyCursor();c.onsuccess=function(){var n=c.result;n?0===e||a?t(n.key):(a=!0,n.advance(e)):t(null)},c.onerror=function(){r(c.error)}}catch(e){r(e)}}))})).catch(r)}));return ze(r,t),r},keys:function(e){var t=this,n=new Promise((function(e,n){t.ready().then((function(){ot(t._dbInfo,"readonly",(function(r,o){if(r)return n(r);try{var i=o.objectStore(t._dbInfo.storeName).openKeyCursor(),s=[];i.onsuccess=function(){var t=i.result;t?(s.push(t.key),t.continue()):e(s)},i.onerror=function(){n(i.error)}}catch(e){n(e)}}))})).catch(n)}));return ze(n,e),n},dropInstance:function(e,t){t=He.apply(this,arguments);var n=this.config();(e="function"!=typeof e&&e||{}).name||(e.name=e.name||n.name,e.storeName=e.storeName||n.storeName);var r,o=this;if(e.name){const t=e.name===n.name&&o._dbInfo.db?Promise.resolve(o._dbInfo.db):Ge(e).then(t=>{const n=Ye[e.name],r=n.forages;n.db=t;for(var o=0;o<r.length;o++)r[o]._dbInfo.db=t;return t});r=e.storeName?t.then(t=>{if(!t.objectStoreNames.contains(e.storeName))return;const n=t.version+1;Je(e);const r=Ye[e.name],o=r.forages;t.close();for(let e=0;e<o.length;e++){const t=o[e];t._dbInfo.db=null,t._dbInfo.version=n}return new Promise((t,r)=>{const o=Be.open(e.name,n);o.onerror=e=>{o.result.close(),r(e)},o.onupgradeneeded=()=>{o.result.deleteObjectStore(e.storeName)},o.onsuccess=()=>{const e=o.result;e.close(),t(e)}}).then(e=>{r.db=e;for(let t=0;t<o.length;t++){const n=o[t];n._dbInfo.db=e,Ke(n._dbInfo)}}).catch(t=>{throw(Ze(e,t)||Promise.resolve()).catch(()=>{}),t})}):t.then(t=>{Je(e);const n=Ye[e.name],r=n.forages;t.close();for(var o=0;o<r.length;o++){r[o]._dbInfo.db=null}return new Promise((t,n)=>{var r=Be.deleteDatabase(e.name);r.onerror=r.onblocked=e=>{const t=r.result;t&&t.close(),n(e)},r.onsuccess=()=>{const e=r.result;e&&e.close(),t(e)}}).then(e=>{n.db=e;for(var t=0;t<r.length;t++){Ke(r[t]._dbInfo)}}).catch(t=>{throw(Ze(e,t)||Promise.resolve()).catch(()=>{}),t})})}else r=Promise.reject("Invalid arguments");return ze(r,t),r}};var st="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",at=/^~~local_forage_type~([^~]+)~/,ct="__lfsc__:".length,lt=ct+"arbf".length,ut=Object.prototype.toString;function dt(e){var t,n,r,o,i,s=.75*e.length,a=e.length,c=0;"="===e[e.length-1]&&(s--,"="===e[e.length-2]&&s--);var l=new ArrayBuffer(s),u=new Uint8Array(l);for(t=0;t<a;t+=4)n=st.indexOf(e[t]),r=st.indexOf(e[t+1]),o=st.indexOf(e[t+2]),i=st.indexOf(e[t+3]),u[c++]=n<<2|r>>4,u[c++]=(15&r)<<4|o>>2,u[c++]=(3&o)<<6|63&i;return l}function ht(e){var t,n=new Uint8Array(e),r="";for(t=0;t<n.length;t+=3)r+=st[n[t]>>2],r+=st[(3&n[t])<<4|n[t+1]>>4],r+=st[(15&n[t+1])<<2|n[t+2]>>6],r+=st[63&n[t+2]];return n.length%3==2?r=r.substring(0,r.length-1)+"=":n.length%3==1&&(r=r.substring(0,r.length-2)+"=="),r}var ft={serialize:function(e,t){var n="";if(e&&(n=ut.call(e)),e&&("[object ArrayBuffer]"===n||e.buffer&&"[object ArrayBuffer]"===ut.call(e.buffer))){var r,o="__lfsc__:";e instanceof ArrayBuffer?(r=e,o+="arbf"):(r=e.buffer,"[object Int8Array]"===n?o+="si08":"[object Uint8Array]"===n?o+="ui08":"[object Uint8ClampedArray]"===n?o+="uic8":"[object Int16Array]"===n?o+="si16":"[object Uint16Array]"===n?o+="ur16":"[object Int32Array]"===n?o+="si32":"[object Uint32Array]"===n?o+="ui32":"[object Float32Array]"===n?o+="fl32":"[object Float64Array]"===n?o+="fl64":t(new Error("Failed to get type for BinaryArray"))),t(o+ht(r))}else if("[object Blob]"===n){var i=new FileReader;i.onload=function(){var n="~~local_forage_type~"+e.type+"~"+ht(this.result);t("__lfsc__:blob"+n)},i.readAsArrayBuffer(e)}else try{t(JSON.stringify(e))}catch(n){console.error("Couldn't convert value into a JSON string: ",e),t(null,n)}},deserialize:function(e){if("__lfsc__:"!==e.substring(0,ct))return JSON.parse(e);var t,n=e.substring(lt),r=e.substring(ct,lt);if("blob"===r&&at.test(n)){var o=n.match(at);t=o[1],n=n.substring(o[0].length)}var i=dt(n);switch(r){case"arbf":return i;case"blob":return Ue([i],{type:t});case"si08":return new Int8Array(i);case"ui08":return new Uint8Array(i);case"uic8":return new Uint8ClampedArray(i);case"si16":return new Int16Array(i);case"ur16":return new Uint16Array(i);case"si32":return new Int32Array(i);case"ui32":return new Uint32Array(i);case"fl32":return new Float32Array(i);case"fl64":return new Float64Array(i);default:throw new Error("Unkown type: "+r)}},stringToBuffer:dt,bufferToString:ht};function pt(e,t,n,r){e.executeSql(`CREATE TABLE IF NOT EXISTS ${t.storeName} (id INTEGER PRIMARY KEY, key unique, value)`,[],n,r)}function mt(e,t,n,r,o,i){e.executeSql(n,r,o,(function(e,s){s.code===s.SYNTAX_ERR?e.executeSql("SELECT name FROM sqlite_master WHERE type='table' AND name = ?",[t.storeName],(function(e,a){a.rows.length?i(e,s):pt(e,t,(function(){e.executeSql(n,r,o,i)}),i)}),i):i(e,s)}),i)}function gt(e,t,n,r){var o=this;e=Le(e);var i=new Promise((function(i,s){o.ready().then((function(){void 0===t&&(t=null);var a=t,c=o._dbInfo;c.serializer.serialize(t,(function(t,l){l?s(l):c.db.transaction((function(n){mt(n,c,`INSERT OR REPLACE INTO ${c.storeName} (key, value) VALUES (?, ?)`,[e,t],(function(){i(a)}),(function(e,t){s(t)}))}),(function(t){if(t.code===t.QUOTA_ERR){if(r>0)return void i(gt.apply(o,[e,a,n,r-1]));s(t)}}))}))})).catch(s)}));return ze(i,n),i}function vt(e){return new Promise((function(t,n){e.transaction((function(r){r.executeSql("SELECT name FROM sqlite_master WHERE type='table' AND name <> '__WebKitDatabaseInfoTable__'",[],(function(n,r){for(var o=[],i=0;i<r.rows.length;i++)o.push(r.rows.item(i).name);t({db:e,storeNames:o})}),(function(e,t){n(t)}))}),(function(e){n(e)}))}))}var yt={_driver:"webSQLStorage",_initStorage:function(e){var t=this,n={db:null};if(e)for(var r in e)n[r]="string"!=typeof e[r]?e[r].toString():e[r];var o=new Promise((function(e,r){try{n.db=openDatabase(n.name,String(n.version),n.description,n.size)}catch(e){return r(e)}n.db.transaction((function(o){pt(o,n,(function(){t._dbInfo=n,e()}),(function(e,t){r(t)}))}),r)}));return n.serializer=ft,o},_support:"function"==typeof openDatabase,iterate:function(e,t){var n=this,r=new Promise((function(t,r){n.ready().then((function(){var o=n._dbInfo;o.db.transaction((function(n){mt(n,o,"SELECT * FROM "+o.storeName,[],(function(n,r){for(var i=r.rows,s=i.length,a=0;a<s;a++){var c=i.item(a),l=c.value;if(l&&(l=o.serializer.deserialize(l)),void 0!==(l=e(l,c.key,a+1)))return void t(l)}t()}),(function(e,t){r(t)}))}))})).catch(r)}));return ze(r,t),r},getItem:function(e,t){var n=this;e=Le(e);var r=new Promise((function(t,r){n.ready().then((function(){var o=n._dbInfo;o.db.transaction((function(n){mt(n,o,`SELECT * FROM ${o.storeName} WHERE key = ? LIMIT 1`,[e],(function(e,n){var r=n.rows.length?n.rows.item(0).value:null;r&&(r=o.serializer.deserialize(r)),t(r)}),(function(e,t){r(t)}))}))})).catch(r)}));return ze(r,t),r},setItem:function(e,t,n){return gt.apply(this,[e,t,n,1])},removeItem:function(e,t){var n=this;e=Le(e);var r=new Promise((function(t,r){n.ready().then((function(){var o=n._dbInfo;o.db.transaction((function(n){mt(n,o,`DELETE FROM ${o.storeName} WHERE key = ?`,[e],(function(){t()}),(function(e,t){r(t)}))}))})).catch(r)}));return ze(r,t),r},clear:function(e){var t=this,n=new Promise((function(e,n){t.ready().then((function(){var r=t._dbInfo;r.db.transaction((function(t){mt(t,r,"DELETE FROM "+r.storeName,[],(function(){e()}),(function(e,t){n(t)}))}))})).catch(n)}));return ze(n,e),n},length:function(e){var t=this,n=new Promise((function(e,n){t.ready().then((function(){var r=t._dbInfo;r.db.transaction((function(t){mt(t,r,"SELECT COUNT(key) as c FROM "+r.storeName,[],(function(t,n){var r=n.rows.item(0).c;e(r)}),(function(e,t){n(t)}))}))})).catch(n)}));return ze(n,e),n},key:function(e,t){var n=this,r=new Promise((function(t,r){n.ready().then((function(){var o=n._dbInfo;o.db.transaction((function(n){mt(n,o,`SELECT key FROM ${o.storeName} WHERE id = ? LIMIT 1`,[e+1],(function(e,n){var r=n.rows.length?n.rows.item(0).key:null;t(r)}),(function(e,t){r(t)}))}))})).catch(r)}));return ze(r,t),r},keys:function(e){var t=this,n=new Promise((function(e,n){t.ready().then((function(){var r=t._dbInfo;r.db.transaction((function(t){mt(t,r,"SELECT key FROM "+r.storeName,[],(function(t,n){for(var r=[],o=0;o<n.rows.length;o++)r.push(n.rows.item(o).key);e(r)}),(function(e,t){n(t)}))}))})).catch(n)}));return ze(n,e),n},dropInstance:function(e,t){t=He.apply(this,arguments);var n=this.config();(e="function"!=typeof e&&e||{}).name||(e.name=e.name||n.name,e.storeName=e.storeName||n.storeName);var r,o=this;return ze(r=e.name?new Promise((function(t){var r;r=e.name===n.name?o._dbInfo.db:openDatabase(e.name,"","",0),e.storeName?t({db:r,storeNames:[e.storeName]}):t(vt(r))})).then((function(e){return new Promise((function(t,n){e.db.transaction((function(r){function o(e){return new Promise((function(t,n){r.executeSql("DROP TABLE IF EXISTS "+e,[],(function(){t()}),(function(e,t){n(t)}))}))}for(var i=[],s=0,a=e.storeNames.length;s<a;s++)i.push(o(e.storeNames[s]));Promise.all(i).then((function(){t()})).catch((function(e){n(e)}))}),(function(e){n(e)}))}))})):Promise.reject("Invalid arguments"),t),r}};function bt(e,t){var n=e.name+"/";return e.storeName!==t.storeName&&(n+=e.storeName+"/"),n}function _t(){return!function(){try{return localStorage.setItem("_localforage_support_test",!0),localStorage.removeItem("_localforage_support_test"),!1}catch(e){return!0}}()||localStorage.length>0}var wt={_driver:"localStorageWrapper",_initStorage:function(e){var t={};if(e)for(var n in e)t[n]=e[n];return t.keyPrefix=bt(e,this._defaultConfig),_t()?(this._dbInfo=t,t.serializer=ft,Promise.resolve()):Promise.reject()},_support:function(){try{return"undefined"!=typeof localStorage&&"setItem"in localStorage&&!!localStorage.setItem}catch(e){return!1}}(),iterate:function(e,t){var n=this,r=n.ready().then((function(){for(var t=n._dbInfo,r=t.keyPrefix,o=r.length,i=localStorage.length,s=1,a=0;a<i;a++){var c=localStorage.key(a);if(0===c.indexOf(r)){var l=localStorage.getItem(c);if(l&&(l=t.serializer.deserialize(l)),void 0!==(l=e(l,c.substring(o),s++)))return l}}}));return ze(r,t),r},getItem:function(e,t){var n=this;e=Le(e);var r=n.ready().then((function(){var t=n._dbInfo,r=localStorage.getItem(t.keyPrefix+e);return r&&(r=t.serializer.deserialize(r)),r}));return ze(r,t),r},setItem:function(e,t,n){var r=this;e=Le(e);var o=r.ready().then((function(){void 0===t&&(t=null);var n=t;return new Promise((function(o,i){var s=r._dbInfo;s.serializer.serialize(t,(function(t,r){if(r)i(r);else try{localStorage.setItem(s.keyPrefix+e,t),o(n)}catch(e){"QuotaExceededError"!==e.name&&"NS_ERROR_DOM_QUOTA_REACHED"!==e.name||i(e),i(e)}}))}))}));return ze(o,n),o},removeItem:function(e,t){var n=this;e=Le(e);var r=n.ready().then((function(){var t=n._dbInfo;localStorage.removeItem(t.keyPrefix+e)}));return ze(r,t),r},clear:function(e){var t=this,n=t.ready().then((function(){for(var e=t._dbInfo.keyPrefix,n=localStorage.length-1;n>=0;n--){var r=localStorage.key(n);0===r.indexOf(e)&&localStorage.removeItem(r)}}));return ze(n,e),n},length:function(e){var t=this.keys().then((function(e){return e.length}));return ze(t,e),t},key:function(e,t){var n=this,r=n.ready().then((function(){var t,r=n._dbInfo;try{t=localStorage.key(e)}catch(e){t=null}return t&&(t=t.substring(r.keyPrefix.length)),t}));return ze(r,t),r},keys:function(e){var t=this,n=t.ready().then((function(){for(var e=t._dbInfo,n=localStorage.length,r=[],o=0;o<n;o++){var i=localStorage.key(o);0===i.indexOf(e.keyPrefix)&&r.push(i.substring(e.keyPrefix.length))}return r}));return ze(n,e),n},dropInstance:function(e,t){if(t=He.apply(this,arguments),!(e="function"!=typeof e&&e||{}).name){var n=this.config();e.name=e.name||n.name,e.storeName=e.storeName||n.storeName}var r,o=this;return ze(r=e.name?new Promise((function(t){e.storeName?t(bt(e,o._defaultConfig)):t(e.name+"/")})).then((function(e){for(var t=localStorage.length-1;t>=0;t--){var n=localStorage.key(t);0===n.indexOf(e)&&localStorage.removeItem(n)}})):Promise.reject("Invalid arguments"),t),r}};const St=(e,t)=>{const n=e.length;let r=0;for(;r<n;){if((o=e[r])===(i=t)||"number"==typeof o&&"number"==typeof i&&isNaN(o)&&isNaN(i))return!0;r++}var o,i;return!1},xt=Array.isArray||function(e){return"[object Array]"===Object.prototype.toString.call(e)},kt={},Pt={},Nt={INDEXEDDB:it,WEBSQL:yt,LOCALSTORAGE:wt},Ct=[Nt.INDEXEDDB._driver,Nt.WEBSQL._driver,Nt.LOCALSTORAGE._driver],Ot=["dropInstance"],It=["clear","getItem","iterate","key","keys","length","removeItem","setItem"].concat(Ot),Tt={description:"",driver:Ct.slice(),name:"localforage",size:4980736,storeName:"keyvaluepairs",version:1};function Et(e,t){e[t]=function(){const n=arguments;return e.ready().then((function(){return e[t].apply(e,n)}))}}function At(){for(let e=1;e<arguments.length;e++){const t=arguments[e];if(t)for(let e in t)t.hasOwnProperty(e)&&(xt(t[e])?arguments[0][e]=t[e].slice():arguments[0][e]=t[e])}return arguments[0]}class $t{constructor(e){for(let e in Nt)if(Nt.hasOwnProperty(e)){const t=Nt[e],n=t._driver;this[e]=n,kt[n]||this.defineDriver(t)}this._defaultConfig=At({},Tt),this._config=At({},this._defaultConfig,e),this._driverSet=null,this._initDriver=null,this._ready=!1,this._dbInfo=null,this._wrapLibraryMethodsWithReady(),this.setDriver(this._config.driver).catch(()=>{})}config(e){if("object"==typeof e){if(this._ready)return new Error("Can't call config() after localforage has been used.");for(let t in e){if("storeName"===t&&(e[t]=e[t].replace(/\W/g,"_")),"version"===t&&"number"!=typeof e[t])return new Error("Database version must be a number.");this._config[t]=e[t]}return!("driver"in e)||!e.driver||this.setDriver(this._config.driver)}return"string"==typeof e?this._config[e]:this._config}defineDriver(e,t,n){const r=new Promise((function(t,n){try{const r=e._driver,o=new Error("Custom driver not compliant; see https://mozilla.github.io/localForage/#definedriver");if(!e._driver)return void n(o);const i=It.concat("_initStorage");for(let t=0,r=i.length;t<r;t++){const r=i[t];if((!St(Ot,r)||e[r])&&"function"!=typeof e[r])return void n(o)}(function(){const t=function(e){return function(){const t=new Error(`Method ${e} is not implemented by the current driver`),n=Promise.reject(t);return ze(n,arguments[arguments.length-1]),n}};for(let n=0,r=Ot.length;n<r;n++){const r=Ot[n];e[r]||(e[r]=t(r))}})();const s=function(n){kt[r]&&console.info("Redefining LocalForage driver: "+r),kt[r]=e,Pt[r]=n,t()};"_support"in e?e._support&&"function"==typeof e._support?e._support().then(s,n):s(!!e._support):s(!0)}catch(e){n(e)}}));return Ve(r,t,n),r}driver(){return this._driver||null}getDriver(e,t,n){const r=kt[e]?Promise.resolve(kt[e]):Promise.reject(new Error("Driver not found."));return Ve(r,t,n),r}getSerializer(e){const t=Promise.resolve(ft);return Ve(t,e),t}ready(e){const t=this,n=t._driverSet.then(()=>(null===t._ready&&(t._ready=t._initDriver()),t._ready));return Ve(n,e,e),n}setDriver(e,t,n){const r=this;xt(e)||(e=[e]);const o=this._getSupportedDrivers(e);function i(){r._config.driver=r.driver()}function s(e){return r._extend(e),i(),r._ready=r._initStorage(r._config),r._ready}const a=null!==this._driverSet?this._driverSet.catch(()=>Promise.resolve()):Promise.resolve();return this._driverSet=a.then(()=>{const e=o[0];return r._dbInfo=null,r._ready=null,r.getDriver(e).then(e=>{r._driver=e._driver,i(),r._wrapLibraryMethodsWithReady(),r._initDriver=function(e){return function(){let t=0;return function n(){for(;t<e.length;){let o=e[t];return t++,r._dbInfo=null,r._ready=null,r.getDriver(o).then(s).catch(n)}i();const o=new Error("No available storage method found.");return r._driverSet=Promise.reject(o),r._driverSet}()}}(o)})}).catch(()=>{i();const e=new Error("No available storage method found.");return r._driverSet=Promise.reject(e),r._driverSet}),Ve(this._driverSet,t,n),this._driverSet}supports(e){return!!Pt[e]}_extend(e){At(this,e)}_getSupportedDrivers(e){const t=[];for(let n=0,r=e.length;n<r;n++){const r=e[n];this.supports(r)&&t.push(r)}return t}_wrapLibraryMethodsWithReady(){for(let e=0,t=It.length;e<t;e++)Et(this,It[e])}createInstance(e){return new $t(e)}}var Dt=new $t;const Mt=Ce`
    @keyframes blink-fade {
        50% {
            opacity: 0;
        }
    }

    @keyframes blink-shadow {
        50% {
            box-shadow: 0 0 20px red;
        }
    }

    :host {
        display: flex;
        flex-direction: column;
    }

    ha-card {
        flex-direction: column;
        flex: 1;
        padding: 16px 0;
        position: relative;
        overflow: hidden;
    }

    ha-card > div {
        padding: 0px 16px;
    }

    .flex {
        display: flex;
        display: -webkit-flex;
        min-width: 0;
    }

    .information[hover] {
        cursor: pointer;
    }

    .header {
        justify-content: space-between;
        flex-direction: row;
        align-items: center;
        gap: 4px;
    }

    .header[alignment='center'] {
        justify-content: center;
    }

    .header[alignment='left'] {
        align-self: flex-start;
    }

    .header[alignment='right'] {
        align-self: flex-end;
    }
    .header[reverse] {
        flex-direction: row-reverse;
    }

    .name > span {
        font-size: 1.2em;
        font-weight: var(--mcg-title-font-weight, 500);
    }

    .icon {
        display: inline-block;
        flex: 0 0 1.7em;
        text-align: center;
    }

    .icon > * {
        height: 1.7em;
        width: 1.7em;
    }

    .status {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        gap: 4px;
    }

    .status[alignment='center'] {
        justify-content: center;
    }

    .status[alignment='left'] {
        align-self: flex-start;
    }

    .status[alignment='right'] {
        align-self: flex-end;
    }
    .status[reverse] {
        flex-direction: row-reverse;
    }

    .status > span {
        font-size: 1em;
        font-weight: var(--mcg-title-font-weight, 500);
        max-height: 1em;
        min-height: 1em;
    }

    .status > .tooltip {
        font-size: 0.8em;
    }

    .bar {
        transition-property: height y;
        transition-duration: 0.3s;
        transition-timing-function: ease;
    }

    .timeline {
        padding-top: 6px;
        padding-bottom: 0px;
    }

    .footer {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }

    .footer-text {
        color: #aaaaaa;
        opacity: 0.6;
    }

    .line {
        background: #aaaaaa;
        opacity: 0.3;
        flex: 1;
        margin: 0.75rem 1rem 0 1rem;
        height: 1px;
    }
`,jt=(e,t)=>e.length>t?e.slice(0,t)+"...":e,Rt=(e,t,n)=>([...e.matchAll(/\[\[\[ (.*?) \]\]\]/g)].map(e=>e[1]).forEach(r=>{const o=`[[[ ${r} ]]]`;try{const i=new Function("entity","variables",r);e=e.replace(o,i(n,t))}catch(t){e=e.replace(o,"error")}}),e);console.info("%c uptime-card \n    0.5.0    ","color: white; background-color: #C6B145; font-weight: 700;"),window.customCards=window.customCards||[],window.customCards.push({type:"uptime-card",name:"Uptime Card",description:"The uptime card show you the history of your binary sensors in a cool way."});let Bt=class extends Ie{static async getConfigElement(){return document.createElement("uptime-card-editor")}static getStubConfig(){return{}}set hass(e){this._hass=e,this.sensor=e.states[this.config.entity],this.updateData()}get actions(){return["more-info","url","navigate","toggle","call-service","fire-dom-event"]}setConfig(e){if(!e)throw new Error("Invalid configuration !");this.config=Object.assign(Object.assign(Object.assign({},Te),e),{color:Object.assign(Object.assign({},Ee),e.color),alias:Object.assign({},e.alias),show:Object.assign(Object.assign({},Ae),e.show),bar:Object.assign(Object.assign({},$e),e.bar),tooltip:Object.assign(Object.assign({},De),e.tooltip),tap_action:Object.assign(Object.assign({},Me),e.tap_action),alignment:Object.assign(Object.assign({},je),e.alignment)}),this.updateData()}shouldUpdate(e){return!!this.config&&function(e,t,n){if(t.has("config")||n)return!0;if(e.config.entity){var r=t.get("hass");return!r||r.states[e.config.entity]!==e.hass.states[e.config.entity]}return!1}(this,e,!1)}firstUpdated(e){this.updateData()}connectedCallback(){super.connectedCallback(),this.config.update_interval&&(this.interval=setInterval(()=>this.updateData(),1e3*this.config.update_interval))}disconnectedCallback(){this.interval&&clearInterval(this.interval),super.disconnectedCallback()}async updateData(){if(null==this.config||null==this._hass)return;const{entity:e,hours_to_show:t,attribute:n}=this.config;if(this.sensor=this._hass.states[this.config.entity],null==this.sensor)return;const r=this.getStatus();if(null==r)return void(this.cache={points:[],lastFetched:-1,lastChanged:-1,hoursToShow:t});const o=n?`${e}#${n}`:e,i=await this.getCache(o);null!=i&&(this.cache=i);const s=(new Date).getTime();let a;const c=null==i||i.hoursToShow<t,l=c?this.getMinimumDate():i.lastFetched,u=new Date(l),d=new Date;if(d.getTime()-u.getTime()<1e4)return;const h=await this.fetchRecent(o,u,d),f=c?h:[...i.points,...h],p=f.findIndex(e=>e.x>this.getMinimumDate()),m=0==p?f:f.slice(p-1),g=this.cleanPoints(m);if(g.length>0)a={points:g,lastFetched:s,lastChanged:g[g.length-1].x,hoursToShow:t};else{const e=new Date(this.sensor.last_changed).getTime();a={points:[{x:e,y:r}],lastFetched:s,lastChanged:e,hoursToShow:t}}await this.setCache(o,a),this.cache=a}async getCache(e){const t=await Dt.getItem(e);return null==t?(console.warn(`Can't load the key ${e} from cache.`),null):(n=t,JSON.parse(n));var n}async setCache(e,t){return Dt.setItem(e,(n=t,JSON.stringify(n)));var n}isOk(e){const{ok:t,ko:n,entity:r}=this.config;return null==e?void 0:t==e||n!=e&&(null==t&&null==n?null!=r&&r.startsWith("binary_sensor")?"on"==e||"off"!=e&&void 0:void 0:null==t)}findBarPeriod(e){const{bar:t}=this.config,n=this.getUptimeSize()/t.amount,r=(new Date).getTime()-(t.amount-1-e)*n;return{from:r-n+1,to:r}}findBarRepartition(e){const t={ok:0,ko:0,none:100};if(null==this.cache)return t;const n=this.cache.points.findIndex(t=>t.x>=e.from),r=this.cache.points.findIndex(t=>t.x>e.to);let o;if(0==this.cache.points.length)return t;if(-1==n)o=[this.cache.points[this.cache.points.length-1]];else{if(0==n&&0==r)return t;{const e=0==n?0:1,t=-1==r?this.cache.points.length:r;o=this.cache.points.slice(n-e,t)}}const i={ok:0,ko:0,none:0},s=e.to-e.from;for(let t=0;t<o.length;t++){const n=(o[t+1]?o[t+1].x:e.to)-Math.max(o[t].x,e.from);1==this.isOk(o[t].y)?i.ok+=n:0==this.isOk(o[t].y)?i.ko+=n:i.none+=n}const a=i.ok/s*100,c=i.ko/s*100;return{ok:a,ko:c,none:100-(a+c)}}getUptimeSize(){const{hours_to_show:e}=this.config;return 36e5*e}getMinimumDate(){return(new Date).getTime()-this.getUptimeSize()}getColor(e){const{color:t}=this.config;return 1==this.isOk(e)?t.ok:0==this.isOk(e)?t.ko:t.none}getCssColor(e,t){const n=1==e?this.getColor(this.getStatus()):t||void 0;return n?`color: ${n};`:""}getStatus(){var e,t;const{attribute:n}=this.config,r=n?null===(e=this.sensor)||void 0===e?void 0:e.attributes[n]:null===(t=this.sensor)||void 0===t?void 0:t.state;return null!=r?String(r):void 0}async fetchRecent(e,t,n){const{attribute:r}=this.config;let o="history/period";t&&(o+="/"+t.toISOString()),o+="?filter_entity_id="+e,n&&(o+="&end_time="+n.toISOString()),null==r&&(o+="&minimal_response");const i=await this._hass.callApi("GET",o);return i[0]?i[0].map(e=>{const t=r?e.attributes[r]:e.state;return{x:new Date(e.last_changed).getTime(),y:t}}):[]}cleanPoints(e){const t=[];let n=void 0;for(const r of e)r.y!=n&&(t.push(r),n=r.y);return t}handleClick(e){e.stopPropagation(),this.config&&this._hass&&k(this,this._hass,this.config,!1,!1)}computeBarColor(e){const{severity:t,color:n,color_thresholds:r}=this.config;if(100==e.none)return n.none;if(r){const t=r.slice().sort((e,t)=>e.value-t.value).find(t=>t.value>=e.ok);return t?t.color:n.none}return 100==e.ok?n.ok:e.ko>=t?n.ko:n.half}attachBlink(e){const t=this.config.blink;return this.isOk(this.getStatus())||!t||e!=t.target||"card"!=t.target&&"shadow"==t.effect?"":`animation: blink-${t.effect} ${t.speed}s infinite;`}render(){const{bar:e}=this.config,t=[...Array(e.amount).keys()].map((e,t)=>{const n=this.findBarPeriod(t);return{period:n,repartition:this.findBarRepartition(n),index:t}});return ce`
            <ha-card class="flex" style="${this.attachBlink("card")}">
                ${this.renderInformation()} ${this.renderTimeline(t)}
                ${this.renderFooter(t.map(e=>e.repartition))}
            </ha-card>
        `}renderInformation(){const{tap_action:e}=this.config;return ce`
            <div class="information" @click=${this.handleClick} ?hover=${this.actions.includes(e.action)}>
                ${this.renderHeader()} ${this.renderStatus()}
            </div>
        `}renderHeader(){const{show:e,alignment:t}=this.config;return e.header?ce`
                  <div class="header flex" alignment="${t.header}" ?reverse="${t.icon_first}">
                      ${this.renderTitle()} ${this.renderIcon()}
                  </div>
              `:ce``}renderTitle(){var e;const{name:t,color:n,title_adaptive_color:r,show:o}=this.config;let i=t;return null==i&&(i=(null===(e=this.sensor)||void 0===e?void 0:e.entity_id)||""),o.title?ce`
                  <div class="name" style="${this.attachBlink("title")}">
                      <span style=${this.getCssColor(r,n.title)}>${jt(i,25)}</span>
                  </div>
              `:ce``}renderStatus(){const{show:e,alignment:t}=this.config;return e.status?ce`
                  <div class="status" alignment="${t.status}" ?reverse="${t.tooltip_first}">
                      ${this.renderState()} ${this.renderTooltip()}
                  </div>
              `:ce``}renderState(){const{alias:e,color:t,status_adaptive_color:n,status_template:r,ok:o,ko:i}=this.config;let s;s=null==this.sensor?"Unknown":1==this.isOk(this.getStatus())&&e.ok?e.ok:0==this.isOk(this.getStatus())&&e.ko?e.ko:null==this.isOk(this.getStatus())?"Unknown":this.getStatus()||"Unknown";const a=Rt(r,{current:s,ok:e.ok||o||"[[[ return variables.ok ]]]",ko:e.ko||i||"[[[ return variables.ko ]]]"},this.sensor);return ce`
            <span style="${this.getCssColor(n,t.status)} ${this.attachBlink("status")}"
                >${jt(a,25)}</span
            >
        `}renderTooltip(){const{hours_to_show:e,tooltip:t,tooltip_adaptive_color:n,color:r}=this.config;if(null==this.tooltip)return ce``;const o=this._hass.language||"en-US",i={hour:"numeric",minute:"numeric",hour12:0==t.hour24},s=Object.assign(Object.assign({},i),{weekday:"short",day:"numeric"}),a=e<=24?i:s,c=new Date(this.tooltip.period.from).toLocaleString(o,a),l=new Date(this.tooltip.period.to).toLocaleString(o,i),u=this.tooltip.repartition.ok.toFixed(2),d=Rt(t.template,{from_date:c,to_date:l,average:u},this.sensor);let h=r.tooltip;return n&&(h=100==this.tooltip.repartition.ok?r.ok:100==this.tooltip.repartition.ko?r.ko:100==this.tooltip.repartition.none?r.none:r.half),ce`
            <span class="tooltip" style="color: ${h};">${d}</span>
        `}renderIcon(){var e;const{icon:t,ko_icon:n,show:r,icon_adaptive_color:o,color:i}=this.config,s=(0==this.isOk(this.getStatus())&&n?n:t)||(null===(e=this.sensor)||void 0===e?void 0:e.attributes.icon)||"mdi:heart",a=(null==s?void 0:s.startsWith("/local"))||(null==s?void 0:s.startsWith("http"))?ce`
                      <div
                          class="icon-image"
                          style="background-image: url(${s}); background-size: cover; style=${this.attachBlink("icon")}"
                      ></div>
                  `:ce`
                      <ha-icon .icon=${s}></ha-icon>
                  `;return r.icon?ce`
                  <div
                      class="icon"
                      style="${this.getCssColor(o,i.icon)} ${this.attachBlink("icon")}"
                  >
                      ${a}
                  </div>
              `:""}renderTimeline(e){const{show:t,bar:n,tooltip:r}=this.config,o=0==t.status||0==r.animation,i=o?n.height:n.height+5,s=n.spacing*(n.amount-1),a=Math.floor((500-s)/n.amount),c=500-s-a*n.amount;if(0==t.timeline)return"";const l=e.map((e,t)=>{var r;const i=this.computeBarColor(e.repartition),s=(null===(r=this.tooltip)||void 0===r?void 0:r.index)!=t||o,l=s?n.height:n.height+5,u=o?0:s?5:0;return this.renderBar(t*(a+n.spacing)+c/2,u,a,l,i,n.round,e)});return ce`
            <div class="timeline">
                <svg width="100%" height="100%" } viewBox="0 0 ${500} ${i}">
                    ${l}
                </svg>
            </div>
        `}renderBar(e,t,n,r,o,i,s){return le`
        <rect
            class='bar'
            x=${e}
            y=${t}
            rx=${i}
            ry=${i}
            height=${r}
            width=${n}
            fill=${o}
            @mouseover=${()=>this.tooltip=s}
            @mouseout=${()=>this.tooltip=void 0}>
        ></rect>`}renderFooter(e){const{show:t}=this.config;return t.footer&&t.timeline?ce`
                  <div class="footer">
                      <div class="footer-text">${this.generateMinimalDate()}</div>
                      ${t.average?this.renderLine():ce``} ${this.renderAverage(e)}
                      ${this.renderLine()}
                      <div class="footer-text">Now</div>
                  </div>
              `:ce``}renderAverage(e){const{show:t,average_template:n}=this.config,r=e.reduce((e,t)=>e+t.ok,0)/e.length,o=Rt(n,{uptime:r},this.sensor);return t.average?ce`
                  <div class="footer-text">${o}</div>
              `:ce``}generateMinimalDate(){const{hours_to_show:e}=this.config;if(0==e)return"Now";if(e%168==0){const t=e/168;return 1==t?t+" week ago":t+" weeks ago"}if(e%24==0){const t=e/24;return 1==t?t+" day ago":t+" days ago"}return 1==e?e+" hour ago":e+" hours ago"}renderLine(){return ce`
            <div class="line"></div>
        `}static get styles(){return Mt}};e([Se({attribute:!1})],Bt.prototype,"_hass",void 0),e([xe()],Bt.prototype,"config",void 0),e([xe()],Bt.prototype,"sensor",void 0),e([xe()],Bt.prototype,"interval",void 0),e([xe()],Bt.prototype,"cache",void 0),e([xe()],Bt.prototype,"tooltip",void 0),Bt=e([_e("uptime-card")],Bt);export{Bt as UptimeCard};
