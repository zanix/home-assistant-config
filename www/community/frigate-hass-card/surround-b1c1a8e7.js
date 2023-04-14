import{b8 as e,b9 as i,bO as t,bb as a,s,c1 as r,c2 as n,y as o,b7 as h,c0 as d}from"./card-b71c94d3.js";import{c as m}from"./media-to-view-e0e2d1f6.js";let c=class extends s{async _fetchMedia(){this.cameraManager&&this.cardWideConfig&&this.fetchMedia&&!this.inBackground&&this.hass&&this.view&&!this.view.query&&this.thumbnailConfig&&"none"!==this.thumbnailConfig.mode&&(this.view.context?.thumbnails?.fetch??1)&&await m(this,this.hass,this.cameraManager,this.cardWideConfig,this.view,{targetView:this.view.view,mediaType:this.fetchMedia,select:"latest"})}_hasDrawer(){return!!this.thumbnailConfig&&["left","right"].includes(this.thumbnailConfig.mode)}willUpdate(e){this.timelineConfig?.mode&&"none"!==this.timelineConfig.mode&&import("./timeline-b513ca0a.js"),e.has("view")&&r.isMajorMediaChange(e.get("view"),this.view)&&(this._cameraIDsForTimeline=this._getCameraIDsForTimeline()??void 0),["view","fetch","browseMediaParams","inBackground"].some((i=>e.has(i)))&&this._fetchMedia()}_getCameraIDsForTimeline(){return this.view?this.view?.is("live")?n(this.cameraManager,this.view.camera):this.view.isViewerView()?new Set(this.view.query?.getQueries()?.map((e=>[...e.cameraIDs])).flat()):null:null}render(){if(!this.hass||!this.view||!this.thumbnailConfig)return;const e=(e,i)=>{this.thumbnailConfig&&this._hasDrawer()&&d(e.composedPath()[0],"drawer:"+i,{drawer:this.thumbnailConfig.mode})};return o` <frigate-card-surround-basic
      @frigate-card:thumbnails:open=${i=>e(i,"open")}
      @frigate-card:thumbnails:close=${i=>e(i,"close")}
    >
      ${this.thumbnailConfig&&"none"!==this.thumbnailConfig.mode&&!this.inBackground?o` <frigate-card-thumbnail-carousel
            slot=${this.thumbnailConfig.mode}
            .hass=${this.hass}
            .config=${this.thumbnailConfig}
            .cameraManager=${this.cameraManager}
            .view=${this.view}
            .selected=${this.view.queryResults?.getSelectedIndex()??void 0}
            @frigate-card:view:change=${i=>e(i,"close")}
            @frigate-card:thumbnail-carousel:tap=${e=>{const i=e.detail.queryResults.getSelectedResult();i&&this.view?.evolve({view:"media",queryResults:e.detail.queryResults,...i.getCameraID()&&{camera:i.getCameraID()}}).removeContext("timeline").dispatchChangeEvent(e.composedPath()[0])}}
          >
          </frigate-card-thumbnail-carousel>`:""}
      ${this.timelineConfig?.mode&&"none"!==this.timelineConfig.mode&&!this.inBackground?o` <frigate-card-timeline-core
            slot=${this.timelineConfig.mode}
            .hass=${this.hass}
            .view=${this.view}
            .cameraIDs=${this._cameraIDsForTimeline}
            .mini=${!0}
            .timelineConfig=${this.timelineConfig}
            .thumbnailConfig=${this.thumbnailConfig}
            .cameraManager=${this.cameraManager}
            .cardWideConfig=${this.cardWideConfig}
          >
          </frigate-card-timeline-core>`:""}
      <slot></slot>
    </frigate-card-surround-basic>`}static get styles(){return h(":host {\n  width: 100%;\n  height: 100%;\n  display: block;\n}")}};e([i({attribute:!1})],c.prototype,"hass",void 0),e([i({attribute:!1})],c.prototype,"view",void 0),e([i({attribute:!1,hasChanged:t})],c.prototype,"thumbnailConfig",void 0),e([i({attribute:!1,hasChanged:t})],c.prototype,"timelineConfig",void 0),e([i({attribute:!1})],c.prototype,"inBackground",void 0),e([i({attribute:!1,hasChanged:t})],c.prototype,"fetchMedia",void 0),e([i({attribute:!1})],c.prototype,"cameraManager",void 0),e([i({attribute:!1})],c.prototype,"cardWideConfig",void 0),c=e([a("frigate-card-surround")],c);
