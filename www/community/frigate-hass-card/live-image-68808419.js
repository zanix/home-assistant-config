import{s as a,y as i,b7 as e,b8 as s,b9 as t,ba as r,bb as o}from"./card-b71c94d3.js";import{getStateObjOrDispatchError as m}from"./live-747fc439.js";import"./image-c77210cd.js";import"./media-ea5fcd89.js";import"./surround-b1c1a8e7.js";import"./media-to-view-e0e2d1f6.js";import"./media-layout-8e0c974f.js";let n=class extends a{constructor(){super(...arguments),this._playing=!0}async play(){this._playing=!0}pause(){this._playing=!1}mute(){}unmute(){}isMuted(){return!0}seek(a){}render(){if(this.hass&&this.cameraConfig)return m(this,this.hass,this.cameraConfig),i` <frigate-card-image
      .imageConfig=${{mode:this.cameraConfig.image.url?"url":"camera",refresh_seconds:this._playing?this.cameraConfig.image.refresh_seconds:0,url:this.cameraConfig.image.url}}
      .hass=${this.hass}
      .cameraConfig=${this.cameraConfig}
    >
    </frigate-card-image>`}static get styles(){return e(":host {\n  width: 100%;\n  height: 100%;\n  display: block;\n}")}};s([t({attribute:!1})],n.prototype,"hass",void 0),s([t({attribute:!1})],n.prototype,"cameraConfig",void 0),s([r()],n.prototype,"_playing",void 0),n=s([o("frigate-card-live-image")],n);export{n as FrigateCardLiveImage};
