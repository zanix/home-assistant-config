!function(t){var e={};function n(o){if(e[o])return e[o].exports;var i=e[o]={i:o,l:!1,exports:{}};return t[o].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=t,n.c=e,n.d=function(t,e,o){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)n.d(o,i,function(e){return t[e]}.bind(null,i));return o},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=1)}([function(t){t.exports=JSON.parse('{"a":"paper-buttons-row","b":"0.1.0"}')},function(t,e,n){"use strict";n.r(e);const o=customElements.get("home-assistant-main")?Object.getPrototypeOf(customElements.get("home-assistant-main")):Object.getPrototypeOf(customElements.get("hui-view")),i=o.prototype.html,r=o.prototype.css;function a(){return document.querySelector("hc-main")?document.querySelector("hc-main").hass:document.querySelector("home-assistant")?document.querySelector("home-assistant").hass:void 0}function s(t,e,n=null){if((t=new Event(t,{bubbles:!0,cancelable:!1,composed:!0})).detail=e||{},n)n.dispatchEvent(t);else{var o=function(){var t=document.querySelector("hc-main");return t=t?(t=(t=(t=t&&t.shadowRoot)&&t.querySelector("hc-lovelace"))&&t.shadowRoot)&&t.querySelector("hui-view")||t.querySelector("hui-panel-view"):(t=(t=(t=(t=(t=(t=(t=(t=(t=(t=(t=document.querySelector("home-assistant"))&&t.shadowRoot)&&t.querySelector("home-assistant-main"))&&t.shadowRoot)&&t.querySelector("app-drawer-layout partial-panel-resolver"))&&t.shadowRoot||t)&&t.querySelector("ha-panel-lovelace"))&&t.shadowRoot)&&t.querySelector("hui-root"))&&t.shadowRoot)&&t.querySelector("ha-app-layout #view"))&&t.firstElementChild}();o&&o.dispatchEvent(t)}}function c(t){s("haptic",t,window)}function l(t,e,n,o){let i=void 0;if("double_tap"===o&&n.double_tap_action?i=n.double_tap_action:"hold"===o&&n.hold_action?i=n.hold_action:"tap"===o&&n.tap_action&&(i=n.tap_action),i||(i={action:"more-info"}),!i.confirmation||i.confirmation.exemptions&&i.confirmation.exemptions.some(t=>t.user===e.user.id)||(c("warning"),confirm(i.confirmation.text||`Are you sure you want to ${i.action}?`)))switch(i.action){case"more-info":(i.entity||n.entity)&&s("hass-more-info",{entityId:i.entity||n.entity},t);break;case"navigate":i.navigation_path&&function(t,e=!1){e?history.replaceState(null,"",t):history.pushState(null,"",t),s("location-changed",{replace:e},window)}(i.navigation_path);break;case"url":i.url_path&&window.open(i.url_path);break;case"toggle":n.entity&&(e.callService("homeassistant","toggle",{entity_id:n.entity}),c("light"));break;case"call-service":if(!i.service)return void c("failure");const[o,r]=i.service.split(".",2);e.callService(o,r,i.service_data),c("light");break;case"fire-event":if(!i.event_type)return void c("failure");e.callApi("POST",`events/${i.event_type}`,i.event_data);break;case"fire-dom-event":s("ll-custom",i,t)}}function u(t){return void 0!==t&&"none"!==t.action}const h=new Set(["fan","input_boolean","light","switch","group","automation","cover","script","vacuum"]),p=new Set(["open","unlocked","on"]),d=t=>t.substr(0,t.indexOf("."));var f=n(0);function y(t={}){return Array.isArray(t)?t.reduce((t,e)=>({...t,...e}),{}):t}!function(t,e,n,o="white"){console.info(`%c ${t.toUpperCase()} %c ${e} `,`color: ${o}; background: ${n}; font-weight: 700;`,`color: ${n}; background: ${o}; font-weight: 700;`)}(f.a,f.b,"#039be5");customElements.define("paper-buttons-row",class extends o{static get properties(){return{_config:{},_hass:{}}}static get styles(){return r`
      .flex-box {
        display: flex;
        justify-content: space-evenly;
        align-items: center;
      }

      paper-button {
        color: var(--paper-item-icon-color);
        padding: 6px;
        cursor: pointer;
        position: relative;
        display: inline-flex;
        align-items: center;
        user-select: none;
      }

      span {
        padding: 2px;
        text-align: center;
      }

      ha-icon {
        padding: 2px;
      }

      .button-active {
        color: var(--paper-item-icon-active-color);
      }

      .button-unavailable {
        color: var(--state-icon-unavailable-color);
      }
    `}set hass(t){this._hass=t}setConfig(t){if(!t.buttons)throw new Error("Missing buttons.");if(!Array.isArray(t.buttons))throw new Error("Buttons must be an array.");if(t.buttons.length<=0)throw new Error("At least one button required.");this._config=JSON.parse(JSON.stringify(t)),Array.isArray(this._config.buttons[0])||(this._config.buttons=[this._config.buttons]),this._hass=a(),this._entities=[],this._config.buttons=this._config.buttons.map(t=>t.map(t=>("string"==typeof t&&(t={entity:t}),(t=this._defaultConfig(t||{})).entity&&this._entities.push(t.entity),t)))}render(){return i`
      ${this._config.buttons.map(t=>i`
          <div class="flex-box">
            ${t.map(t=>{const e=this._hass.states[t.entity]||{},n=this._config.base_state_styles&&this._config.base_state_styles[e.state]||{},o=t.state_styles&&t.state_styles[e.state]||{},r=!(!1===t.icon||!t.icon&&!t.entity)&&(((t,e)=>e.state_icons&&e.state_icons[t])(e.state,t)||t.icon||(t=>t.attributes&&t.attributes.icon)(e)||(t=>{switch(d(t)){case"light":return"mdi:lightbulb";case"lock":return"mdi:lock";case"switch":return"mdi:flash"}})(t.entity));return i`
                <paper-button
                  @action=${e=>this._handleAction(e,t)}
                  .config=${t}
                  style="${this._getStyle(t,n,o,"button")}${this._getFlexDirection(t)}"
                  class="${this._getClass(e.state)}"
                >
                  ${r?i`
                        <ha-icon
                          style="${this._getStyle(t,n,o,"icon")}"
                          .icon=${r}
                        ></ha-icon>
                      `:""}
                  ${!1!==t.name&&(t.name||t.entity)?i`
                        <span
                          style="${this._getStyle(t,n,o,"text")}"
                        >
                          ${((t,e)=>e.state_text&&e.state_text[t])(e.state,t)||t.name||(t=>{return t.attributes&&t.attributes.friendly_name?t.attributes.friendly_name:t.entity_id?(e=t.entity_id,e.substr(e.indexOf(".")+1)).replace(/_/g," "):"Unknown";var e})(e)}
                        </span>
                      `:""}

                  <paper-ripple
                    center
                    style="${this._getStyle(t,n,o,"ripple")}"
                    class=${!1===t.name||!t.name&&!t.entity?"circle":""}
                  ></paper-ripple>
                </paper-button>
              `})}
          </div>
        `)}
    `}firstUpdated(){this.shadowRoot.querySelectorAll("paper-button").forEach(t=>{!function(t,e={}){customElements.whenDefined("long-press").then(()=>{document.body.querySelector("long-press").bind(t)}),customElements.whenDefined("action-handler").then(()=>{const n=document.body.querySelector("action-handler");n&&n.bind(t,e)})}(t,{hasHold:u(t.config.hold_action),hasDoubleClick:u(t.config.double_tap_action)})})}_handleAction(t,e){l(this,this._hass,e,t.detail.action)}_getClass(t){return p.has(t)?"button-active":"unavailable"===t?"button-unavailable":""}_getFlexDirection(t){return t.align_icon||this._config.align_icons?`flex-direction: ${(t=>{switch(t){case"top":return"column";case"bottom":return"column-reverse";case"right":return"row-reverse";default:return"row"}})(t.align_icon||this._config.align_icons)};`:""}_getStyle(t,e,n,o){return console.log(e),function(t,e=""){return Object.keys(t).reduce((n,o)=>[...n,`${e}${o}: ${t[o]};`],[]).join(" ")}({...y(this._config.base_style&&this._config.base_style[o]||{}),...y(t.style&&t.style[o]||{}),...y(e&&e[o]||{}),...y(n[o]||{})})}_defaultConfig(t){if(t.entity){let e=d(t.entity);if(h.has(e))return{tap_action:{action:"toggle"},...t};if("scene"===e)return{tap_action:{action:"call-service",service:"scene.turn_on",service_data:{entity_id:t.entity}},...t}}return t}shouldUpdate(t){if(t.has("_config"))return!0;const e=t.get("_hass");return!e||this._entities.some(t=>e.states[t]!==this._hass.states[t])}})}]);