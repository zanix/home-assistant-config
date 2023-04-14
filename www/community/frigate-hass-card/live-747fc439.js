import{bG as e,bH as i,bI as t,bJ as a,bK as r,l as s,bL as o,s as n,bM as d,bN as l,y as c,b7 as h,b8 as g,b9 as u,bO as v,ba as f,bb as m,bP as p,bE as _,bQ as b,bR as C,bS as $,bT as y,bU as M,o as w}from"./card-b71c94d3.js";import{L as k,A as S,i as P,w as x,a as L,p as I}from"./media-ea5fcd89.js";import"./surround-b1c1a8e7.js";import{u as O}from"./media-layout-8e0c974f.js";import"./media-to-view-e0e2d1f6.js";
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const j=e(class extends i{constructor(){super(...arguments),this.key=t}render(e,i){return this.key=e,i}update(e,[i,t]){return i!==this.key&&(a(e),this.key=i),t}});const B="frigate-card-live-provider",R=(e,i,t)=>{if(!t?.camera_entity)return r(e,s("error.no_live_camera"),{context:t}),null;const a=i.states[t.camera_entity];return a?"unavailable"===a.state?(o(e,s("error.live_camera_unavailable"),"info",{icon:"mdi:connection",context:t}),null):a:(r(e,s("error.live_camera_not_found"),{context:t}),null)};let V=class extends n{constructor(){super(),this._inBackground=!1,this._backgroundMediaLoadedInfo=null,this._messageReceivedPostRender=!1,this._renderKey=0,this._intersectionObserver=new IntersectionObserver(this._intersectionHandler.bind(this))}_intersectionHandler(e){this._inBackground=!e.some((e=>e.isIntersecting)),this._inBackground||this._messageReceivedPostRender||!this._backgroundMediaLoadedInfo||(d(this,this._backgroundMediaLoadedInfo),this._backgroundMediaLoadedInfo=null),this._messageReceivedPostRender&&!this._inBackground&&this.requestUpdate()}shouldUpdate(e){return!this._inBackground||!this._messageReceivedPostRender}connectedCallback(){this._intersectionObserver.observe(this),super.connectedCallback()}disconnectedCallback(){super.disconnectedCallback(),this._intersectionObserver.disconnect()}render(){if(!(this.hass&&this.liveConfig&&this.cameraManager&&this.view))return;const e=l(this.liveConfig,this.liveOverrides,this.conditionState),i=c`${j(this._renderKey,c`<frigate-card-surround
        .hass=${this.hass}
        .view=${this.view}
        .fetchMedia=${e.controls.thumbnails.media}
        .thumbnailConfig=${e.controls.thumbnails}
        .timelineConfig=${e.controls.timeline}
        .cameraManager=${this.cameraManager}
        .inBackground=${this._inBackground}
        .cardWideConfig=${this.cardWideConfig}
        @frigate-card:message=${e=>{this._renderKey++,this._messageReceivedPostRender=!0,this._inBackground&&e.stopPropagation()}}
        @frigate-card:media:loaded=${e=>{this._inBackground&&(this._backgroundMediaLoadedInfo=e.detail,e.stopPropagation())}}
        @frigate-card:view:change=${e=>{this._inBackground&&e.stopPropagation()}}
      >
        <frigate-card-live-carousel
          .hass=${this.hass}
          .view=${this.view}
          .liveConfig=${this.liveConfig}
          .inBackground=${this._inBackground}
          .conditionState=${this.conditionState}
          .liveOverrides=${this.liveOverrides}
          .cardWideConfig=${this.cardWideConfig}
          .cameraManager=${this.cameraManager}
        >
        </frigate-card-live-carousel>
      </frigate-card-surround>`)}`;return this._messageReceivedPostRender=!1,i}static get styles(){return h(":host {\n  width: 100%;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  gap: 5px;\n}\n\nfrigate-card-live-carousel {\n  flex: 1;\n  min-height: 0;\n}")}};g([u({attribute:!1})],V.prototype,"conditionState",void 0),g([u({attribute:!1})],V.prototype,"hass",void 0),g([u({attribute:!1})],V.prototype,"view",void 0),g([u({attribute:!1})],V.prototype,"liveConfig",void 0),g([u({attribute:!1,hasChanged:v})],V.prototype,"liveOverrides",void 0),g([u({attribute:!1})],V.prototype,"cameraManager",void 0),g([u({attribute:!1})],V.prototype,"cardWideConfig",void 0),g([f()],V.prototype,"_inBackground",void 0),V=g([m("frigate-card-live")],V);let E=class extends n{constructor(){super(...arguments),this._cameraToSlide={},this._refMediaCarousel=p()}updated(e){super.updated(e);const i=this._refMediaCarousel.value;i&&e.has("inBackground")&&(this.inBackground?(i.autoPause(),i.autoMute()):(i.autoPlay(),i.autoUnmute()))}_getTransitionEffect(){return this.liveConfig?.transition_effect??_.live.transition_effect}_getSelectedCameraIndex(){const e=this.cameraManager?.getStore().getVisibleCameraIDs();return e&&this.view?Math.max(0,Array.from(e).indexOf(this.view.camera)):0}_getOptions(){return{draggable:this.liveConfig?.draggable,loop:!0}}_getPlugins(){const e=this.cameraManager?.getStore().getVisibleCameraIDs();return[...e&&e.size>1?[b({forceWheelAxis:"y"})]:[],k({...this.liveConfig?.lazy_load&&{lazyLoadCallback:(e,i)=>this._lazyloadOrUnloadSlide("load",e,i)},lazyUnloadCondition:this.liveConfig?.lazy_unload,lazyUnloadCallback:(e,i)=>this._lazyloadOrUnloadSlide("unload",e,i)}),S({playerSelector:B,...this.liveConfig?.auto_play&&{autoPlayCondition:this.liveConfig.auto_play},...this.liveConfig?.auto_pause&&{autoPauseCondition:this.liveConfig.auto_pause},...this.liveConfig?.auto_mute&&{autoMuteCondition:this.liveConfig.auto_mute},...this.liveConfig?.auto_unmute&&{autoUnmuteCondition:this.liveConfig.auto_unmute}})]}_getLazyLoadCount(){return!1===this.liveConfig?.lazy_load?null:0}_getSlides(){const e=this.cameraManager?.getStore().getVisibleCameras();if(!e)return[[],{}];const i=[],t={};for(const[a,r]of e){const e=this.view?.context?.live?.overrides?.get(a)??a,s=a===e?r:this.cameraManager?.getStore().getCameraConfig(e),o=s?this._renderLive(e,s,i.length):null;o&&(t[a]=i.length,i.push(o))}return[i,t]}_setViewHandler(e){const i=this.cameraManager?.getStore().getVisibleCameras();i&&e.detail.index!==this._getSelectedCameraIndex()&&this._setViewCameraID(Array.from(i.keys())[e.detail.index])}_setViewCameraID(e){e&&this.view?.evolve({camera:e,query:null,queryResults:null}).mergeInContext({thumbnails:{fetch:!1}}).dispatchChangeEvent(this)}_lazyloadOrUnloadSlide(e,i,t){t instanceof HTMLSlotElement&&(t=t.assignedElements({flatten:!0})[0]);const a=t?.querySelector(B);a&&(a.disabled="load"!==e)}_renderLive(e,i,t){if(!this.liveConfig||!this.hass||!this.cameraManager)return;const a={...this.conditionState,camera:e},r=l(this.liveConfig,this.liveOverrides,a),s=this.cameraManager.getCameraMetadata(this.hass,e);return c`
      <div class="embla__slide">
        <frigate-card-live-provider
          ?disabled=${this.liveConfig.lazy_load}
          .cameraConfig=${i}
          .cameraEndpoints=${P([this.cameraManager,e],(()=>this.cameraManager?.getCameraEndpoints(e)??void 0))}
          .label=${s?.title??""}
          .liveConfig=${r}
          .hass=${this.hass}
          .cardWideConfig=${this.cardWideConfig}
          @frigate-card:media:loaded=${e=>{x(t,e)}}
          @frigate-card:media:unloaded=${e=>{L(t,e)}}
        >
        </frigate-card-live-provider>
      </div>
    `}_getCameraIDsOfNeighbors(){const e=this.cameraManager?.getStore().getVisibleCameras();if(!e||!this.view||!this.hass)return[null,null];const i=Array.from(e.keys()),t=i.indexOf(this.view.camera);return t<0||e.size<=1?[null,null]:[i[t>0?t-1:e.size-1],i[t+1<e.size?t+1:0]]}render(){if(!(this.liveConfig&&this.view&&this.hass&&this.cameraManager))return;const[e,i]=this._getSlides();if(this._cameraToSlide=i,!e.length)return;const t=l(this.liveConfig,this.liveOverrides,this.conditionState),[a,r]=this._getCameraIDsOfNeighbors(),o=e=>this.view?.context?.live?.overrides?.get(e)??e,n=a?this.cameraManager.getCameraMetadata(this.hass,o(a)):null,d=this.cameraManager.getCameraMetadata(this.hass,o(this.view.camera)),h=r?this.cameraManager.getCameraMetadata(this.hass,o(r)):null;return c`
      <frigate-card-media-carousel
        ${C(this._refMediaCarousel)}
        .carouselOptions=${P([this.cameraManager,this.liveConfig],this._getOptions.bind(this))}
        .carouselPlugins=${P([this.cameraManager,this.liveConfig],this._getPlugins.bind(this))}
        .label="${d?`${s("common.live")}: ${d.title}`:""}"
        .logo="${d?.engineLogo}"
        .titlePopupConfig=${t.controls.title}
        .selected=${this._getSelectedCameraIndex()}
        transitionEffect=${this._getTransitionEffect()}
        @frigate-card:media-carousel:select=${this._setViewHandler.bind(this)}
        @frigate-card:carousel:settle=${()=>{$(this,{thumbnails:{fetch:!0}})}}
      >
        <frigate-card-next-previous-control
          slot="previous"
          .hass=${this.hass}
          .direction=${"previous"}
          .controlConfig=${t.controls.next_previous}
          .label=${n?.title??""}
          .icon=${n?.icon}
          ?disabled=${null===a}
          @click=${e=>{this._setViewCameraID(a),y(e)}}
        >
        </frigate-card-next-previous-control>
        ${e}
        <frigate-card-next-previous-control
          slot="next"
          .hass=${this.hass}
          .direction=${"next"}
          .controlConfig=${t.controls.next_previous}
          .label=${h?.title??""}
          .icon=${h?.icon}
          ?disabled=${null===r}
          @click=${e=>{this._setViewCameraID(r),y(e)}}
        >
        </frigate-card-next-previous-control>
      </frigate-card-media-carousel>
    `}static get styles(){return h(".embla__slide {\n  height: 100%;\n  flex: 0 0 100%;\n}")}};g([u({attribute:!1})],E.prototype,"hass",void 0),g([u({attribute:!1})],E.prototype,"view",void 0),g([u({attribute:!1})],E.prototype,"liveConfig",void 0),g([u({attribute:!1,hasChanged:v})],E.prototype,"liveOverrides",void 0),g([u({attribute:!1})],E.prototype,"inBackground",void 0),g([u({attribute:!1})],E.prototype,"conditionState",void 0),g([u({attribute:!1})],E.prototype,"cardWideConfig",void 0),g([u({attribute:!1})],E.prototype,"cameraManager",void 0),E=g([m("frigate-card-live-carousel")],E);let z=class extends n{constructor(){super(...arguments),this.disabled=!1,this.label="",this._isVideoMediaLoaded=!1,this._refProvider=p()}async play(){I(this,this._refProvider.value)}pause(){this._refProvider.value?.pause()}mute(){this._refProvider.value?.mute()}unmute(){this._refProvider.value?.unmute()}isMuted(){return this._refProvider.value?.isMuted()??!0}seek(e){this._refProvider.value?.seek(e)}_getResolvedProvider(){return"auto"===this.cameraConfig?.live_provider?this.cameraConfig?.webrtc_card?.entity||this.cameraConfig?.webrtc_card?.url?"webrtc-card":this.cameraConfig?.camera_entity?"low"===this.cardWideConfig?.performance?.profile?"image":"ha":this.cameraConfig?.frigate.camera_name?"jsmpeg":_.cameras.live_provider:this.cameraConfig?.live_provider||"image"}_shouldShowImageDuringLoading(){return!!this.cameraConfig?.camera_entity&&!!this.hass&&!!this.liveConfig?.show_image_during_load}disconnectedCallback(){this._isVideoMediaLoaded=!1}_videoMediaShowHandler(){this._isVideoMediaLoaded=!0}willUpdate(e){if(e.has("disabled")&&this.disabled&&(this._isVideoMediaLoaded=!1,M(this)),e.has("liveConfig")&&(O(this,this.liveConfig?.layout),this.liveConfig?.show_image_during_load&&import("./live-image-68808419.js")),e.has("cameraConfig")){const e=this._getResolvedProvider();"jsmpeg"===e?import("./live-jsmpeg-7e3f1254.js"):"ha"===e?import("./live-ha-35053159.js"):"webrtc-card"===e?import("./live-webrtc-card-961c5e22.js"):"image"===e?import("./live-image-68808419.js"):"go2rtc"===e&&import("./live-go2rtc-061e1363.js")}}render(){if(this.disabled||!this.hass||!this.liveConfig||!this.cameraConfig)return;this.title=this.label,this.ariaLabel=this.label;const e=this._getResolvedProvider(),i=!this._isVideoMediaLoaded&&this._shouldShowImageDuringLoading(),t={hidden:i};return c`
      ${i||"image"===e?c`<frigate-card-live-image
            ${C(this._refProvider)}
            .hass=${this.hass}
            .cameraConfig=${this.cameraConfig}
            @frigate-card:media:loaded=${i=>{"image"===e?this._videoMediaShowHandler():i.stopPropagation()}}
          >
          </frigate-card-live-image>`:c``}
      ${"ha"===e?c` <frigate-card-live-ha
            ${C(this._refProvider)}
            class=${w(t)}
            .hass=${this.hass}
            .cameraConfig=${this.cameraConfig}
            @frigate-card:media:loaded=${this._videoMediaShowHandler.bind(this)}
          >
          </frigate-card-live-ha>`:"go2rtc"===e?c`<frigate-card-live-go2rtc
              ${C(this._refProvider)}
              class=${w(t)}
              .hass=${this.hass}
              .cameraConfig=${this.cameraConfig}
              .cameraEndpoints=${this.cameraEndpoints}
              @frigate-card:media:loaded=${this._videoMediaShowHandler.bind(this)}
            >
            </frigate-card-live-webrtc-card>`:"webrtc-card"===e?c`<frigate-card-live-webrtc-card
            ${C(this._refProvider)}
            class=${w(t)}
            .hass=${this.hass}
            .cameraConfig=${this.cameraConfig}
            .cameraEndpoints=${this.cameraEndpoints}
            .cardWideConfig=${this.cardWideConfig}
            @frigate-card:media:loaded=${this._videoMediaShowHandler.bind(this)}
          >
          </frigate-card-live-webrtc-card>`:"jsmpeg"===e?c` <frigate-card-live-jsmpeg
            ${C(this._refProvider)}
            class=${w(t)}
            .hass=${this.hass}
            .cameraConfig=${this.cameraConfig}
            .cameraEndpoints=${this.cameraEndpoints}
            .cardWideConfig=${this.cardWideConfig}
            @frigate-card:media:loaded=${this._videoMediaShowHandler.bind(this)}
          >
          </frigate-card-live-jsmpeg>`:c``}
    `}static get styles(){return h(".hidden {\n  display: none;\n}")}};g([u({attribute:!1})],z.prototype,"hass",void 0),g([u({attribute:!1})],z.prototype,"cameraConfig",void 0),g([u({attribute:!1})],z.prototype,"cameraEndpoints",void 0),g([u({attribute:!1})],z.prototype,"liveConfig",void 0),g([u({attribute:!0,type:Boolean})],z.prototype,"disabled",void 0),g([u({attribute:!1})],z.prototype,"label",void 0),g([u({attribute:!1})],z.prototype,"cardWideConfig",void 0),g([f()],z.prototype,"_isVideoMediaLoaded",void 0),z=g([m(B)],z);export{V as FrigateCardLive,E as FrigateCardLiveCarousel,z as FrigateCardLiveProvider,R as getStateObjOrDispatchError};
