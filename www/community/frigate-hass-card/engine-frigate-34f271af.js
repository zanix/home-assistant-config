import{d4 as e,d5 as t,d6 as r,d7 as a,l as n,cf as i,cg as s,cu as o,d8 as c,p as u,cc as g,cs as l,co as d,d2 as m,d9 as f,cM as p,ci as h,da as _,db as y,dc as v,cY as w,dd as C,d as D,c_ as b,c$ as T,ck as M,de as S,cl as I,ch as x}from"./card-b71c94d3.js";import{C as F}from"./engine-e412e9a0.js";import{u as $}from"./uniqWith-bb11877e.js";import{a as N,V as R}from"./media-694b9ac5.js";import{g as Y}from"./_commonjsHelpers-1789f0cf.js";import{GenericCameraManagerEngine as E}from"./engine-generic-108d3e01.js";const z=e.object({camera:e.string(),end_time:e.number().nullable(),false_positive:e.boolean().nullable(),has_clip:e.boolean(),has_snapshot:e.boolean(),id:e.string(),label:e.string(),sub_label:e.string().nullable(),start_time:e.number(),top_score:e.number(),zones:e.string().array(),retain_indefinitely:e.boolean().optional()}).array(),j=e.object({hour:e.preprocess((e=>Number(e)),e.number().min(0).max(23)),duration:e.number().min(0),events:e.number().min(0)}),H=e.object({day:e.preprocess((e=>"string"==typeof e?t(e):e),e.date()),events:e.number(),hours:j.array()}).array(),Z=e.object({start_time:e.number(),end_time:e.number(),id:e.string()}).array(),U=e.object({success:e.boolean(),message:e.string()}),P=e.object({camera:e.string(),day:e.string(),label:e.string(),sub_label:e.string().nullable(),zones:e.string().array()}).array();const Q=async(e,t)=>await r(e,z,{type:"frigate/events/get",...t},!0);function W(e){i(1,arguments);var t=o(e);return s(1e3*t)}var q={exports:{}},O={exports:{}},A={exports:{}};!function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){var n=function(e){if(!a[e]){var t=new Intl.DateTimeFormat("en-US",{hour12:!1,timeZone:"America/New_York",year:"numeric",month:"numeric",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit"}).format(new Date("2014-06-25T04:00:00.123Z")),r="06/25/2014, 00:00:00"===t||"‎06‎/‎25‎/‎2014‎ ‎00‎:‎00‎:‎00"===t;a[e]=r?new Intl.DateTimeFormat("en-US",{hour12:!1,timeZone:e,year:"numeric",month:"numeric",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit"}):new Intl.DateTimeFormat("en-US",{hourCycle:"h23",timeZone:e,year:"numeric",month:"numeric",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit"})}return a[e]}(t);return n.formatToParts?function(e,t){try{for(var a=e.formatToParts(t),n=[],i=0;i<a.length;i++){var s=r[a[i].type];s>=0&&(n[s]=parseInt(a[i].value,10))}return n}catch(e){if(e instanceof RangeError)return[NaN];throw e}}(n,e):function(e,t){var r=e.format(t).replace(/\u200E/g,""),a=/(\d+)\/(\d+)\/(\d+),? (\d+):(\d+):(\d+)/.exec(r);return[a[3],a[1],a[2],a[4],a[5],a[6]]}(n,e)};var r={year:0,month:1,day:2,hour:3,minute:4,second:5};var a={};e.exports=t.default}(A,A.exports);var k,L,V={exports:{}};k=V,L=V.exports,Object.defineProperty(L,"__esModule",{value:!0}),L.default=function(e,t,r,a,n,i,s){var o=new Date(0);return o.setUTCFullYear(e,t,r),o.setUTCHours(a,n,i,s),o},k.exports=L.default,function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t,r){var n,l,d;if(!e)return 0;if(n=o.timezoneZ.exec(e))return 0;if(n=o.timezoneHH.exec(e))return u(d=parseInt(n[1],10))?-d*i:NaN;if(n=o.timezoneHHMM.exec(e)){d=parseInt(n[1],10);var m=parseInt(n[2],10);return u(d,m)?(l=Math.abs(d)*i+m*s,d>0?-l:l):NaN}if(function(e){if(g[e])return!0;try{return new Intl.DateTimeFormat(void 0,{timeZone:e}),g[e]=!0,!0}catch(e){return!1}}(e)){t=new Date(t||Date.now());var f=r?t:function(e){return(0,a.default)(e.getFullYear(),e.getMonth(),e.getDate(),e.getHours(),e.getMinutes(),e.getSeconds(),e.getMilliseconds())}(t),p=c(f,e),h=r?p:function(e,t,r){var a=e.getTime(),n=a-t,i=c(new Date(n),r);if(t===i)return t;n-=i-t;var s=c(new Date(n),r);if(i===s)return i;return Math.max(i,s)}(t,p,e);return-h}return NaN};var r=n(A.exports),a=n(V.exports);function n(e){return e&&e.__esModule?e:{default:e}}var i=36e5,s=6e4,o={timezone:/([Z+-].*)$/,timezoneZ:/^(Z)$/,timezoneHH:/^([+-]\d{2})$/,timezoneHHMM:/^([+-]\d{2}):?(\d{2})$/};function c(e,t){var n=(0,r.default)(e,t),i=(0,a.default)(n[0],n[1]-1,n[2],n[3]%24,n[4],n[5],0).getTime(),s=e.getTime(),o=s%1e3;return i-(s-=o>=0?o:1e3+o)}function u(e,t){return-23<=e&&e<=23&&(null==t||0<=t&&t<=59)}var g={};e.exports=t.default}(O,O.exports);var G={exports:{}},B={exports:{}};!function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){if(null===e||!0===e||!1===e)return NaN;var t=Number(e);if(isNaN(t))return t;return t<0?Math.ceil(t):Math.floor(t)},e.exports=t.default}(B,B.exports);var J={exports:{}};!function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t=new Date(Date.UTC(e.getFullYear(),e.getMonth(),e.getDate(),e.getHours(),e.getMinutes(),e.getSeconds(),e.getMilliseconds()));return t.setUTCFullYear(e.getFullYear()),e.getTime()-t.getTime()},e.exports=t.default}(J,J.exports);var K={exports:{}};!function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=/(Z|[+-]\d{2}(?::?\d{2})?| UTC| [a-zA-Z]+\/[a-zA-Z_]+(?:\/[a-zA-Z_]+)?)$/;t.default=r,e.exports=t.default}(K,K.exports),function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){if(arguments.length<1)throw new TypeError("1 argument required, but only "+arguments.length+" present");if(null===e)return new Date(NaN);var i=t||{},s=null==i.additionalDigits?u:(0,r.default)(i.additionalDigits);if(2!==s&&1!==s&&0!==s)throw new RangeError("additionalDigits must be 0, 1 or 2");if(e instanceof Date||"object"==typeof e&&"[object Date]"===Object.prototype.toString.call(e))return new Date(e.getTime());if("number"==typeof e||"[object Number]"===Object.prototype.toString.call(e))return new Date(e);if("string"!=typeof e&&"[object String]"!==Object.prototype.toString.call(e))return new Date(NaN);var d=function(e){var t,r={},a=g.dateTimePattern.exec(e);a?(r.date=a[1],t=a[3]):(a=g.datePattern.exec(e))?(r.date=a[1],t=a[2]):(r.date=null,t=e);if(t){var n=g.timeZone.exec(t);n?(r.time=t.replace(n[1],""),r.timeZone=n[1].trim()):r.time=t}return r}(e),m=function(e,t){var r,a=g.YYY[t],n=g.YYYYY[t];if(r=g.YYYY.exec(e)||n.exec(e)){var i=r[1];return{year:parseInt(i,10),restDateString:e.slice(i.length)}}if(r=g.YY.exec(e)||a.exec(e)){var s=r[1];return{year:100*parseInt(s,10),restDateString:e.slice(s.length)}}return{year:null}}(d.date,s),y=m.year,v=function(e,t){if(null===t)return null;var r,a,n,i;if(0===e.length)return(a=new Date(0)).setUTCFullYear(t),a;if(r=g.MM.exec(e))return a=new Date(0),p(t,n=parseInt(r[1],10)-1)?(a.setUTCFullYear(t,n),a):new Date(NaN);if(r=g.DDD.exec(e)){a=new Date(0);var s=parseInt(r[1],10);return function(e,t){if(t<1)return!1;var r=f(e);if(r&&t>366)return!1;if(!r&&t>365)return!1;return!0}(t,s)?(a.setUTCFullYear(t,0,s),a):new Date(NaN)}if(r=g.MMDD.exec(e)){a=new Date(0),n=parseInt(r[1],10)-1;var o=parseInt(r[2],10);return p(t,n,o)?(a.setUTCFullYear(t,n,o),a):new Date(NaN)}if(r=g.Www.exec(e))return h(t,i=parseInt(r[1],10)-1)?l(t,i):new Date(NaN);if(r=g.WwwD.exec(e)){i=parseInt(r[1],10)-1;var c=parseInt(r[2],10)-1;return h(t,i,c)?l(t,i,c):new Date(NaN)}return null}(m.restDateString,y);if(isNaN(v))return new Date(NaN);if(v){var w,C=v.getTime(),D=0;if(d.time&&(D=function(e){var t,r,a;if(t=g.HH.exec(e))return _(r=parseFloat(t[1].replace(",",".")))?r%24*o:NaN;if(t=g.HHMM.exec(e))return _(r=parseInt(t[1],10),a=parseFloat(t[2].replace(",",".")))?r%24*o+a*c:NaN;if(t=g.HHMMSS.exec(e)){r=parseInt(t[1],10),a=parseInt(t[2],10);var n=parseFloat(t[3].replace(",","."));return _(r,a,n)?r%24*o+a*c+1e3*n:NaN}return null}(d.time),isNaN(D)))return new Date(NaN);if(d.timeZone||i.timeZone){if(w=(0,n.default)(d.timeZone||i.timeZone,new Date(C+D)),isNaN(w))return new Date(NaN)}else w=(0,a.default)(new Date(C+D)),w=(0,a.default)(new Date(C+D+w));return new Date(C+D+w)}return new Date(NaN)};var r=s(B.exports),a=s(J.exports),n=s(O.exports),i=s(K.exports);function s(e){return e&&e.__esModule?e:{default:e}}var o=36e5,c=6e4,u=2,g={dateTimePattern:/^([0-9W+-]+)(T| )(.*)/,datePattern:/^([0-9W+-]+)(.*)/,plainTime:/:/,YY:/^(\d{2})$/,YYY:[/^([+-]\d{2})$/,/^([+-]\d{3})$/,/^([+-]\d{4})$/],YYYY:/^(\d{4})/,YYYYY:[/^([+-]\d{4})/,/^([+-]\d{5})/,/^([+-]\d{6})/],MM:/^-(\d{2})$/,DDD:/^-?(\d{3})$/,MMDD:/^-?(\d{2})-?(\d{2})$/,Www:/^-?W(\d{2})$/,WwwD:/^-?W(\d{2})-?(\d{1})$/,HH:/^(\d{2}([.,]\d*)?)$/,HHMM:/^(\d{2}):?(\d{2}([.,]\d*)?)$/,HHMMSS:/^(\d{2}):?(\d{2}):?(\d{2}([.,]\d*)?)$/,timeZone:i.default};function l(e,t,r){t=t||0,r=r||0;var a=new Date(0);a.setUTCFullYear(e,0,4);var n=7*t+r+1-(a.getUTCDay()||7);return a.setUTCDate(a.getUTCDate()+n),a}var d=[31,28,31,30,31,30,31,31,30,31,30,31],m=[31,29,31,30,31,30,31,31,30,31,30,31];function f(e){return e%400==0||e%4==0&&e%100!=0}function p(e,t,r){if(t<0||t>11)return!1;if(null!=r){if(r<1)return!1;var a=f(e);if(a&&r>m[t])return!1;if(!a&&r>d[t])return!1}return!0}function h(e,t,r){return!(t<0||t>52)&&(null==r||!(r<0||r>6))}function _(e,t,r){return(null==e||!(e<0||e>=25))&&((null==t||!(t<0||t>=60))&&(null==r||!(r<0||r>=60)))}e.exports=t.default}(G,G.exports),function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t,n){var i=(0,a.default)(e,n),s=(0,r.default)(t,i,!0),o=new Date(i.getTime()-s),c=new Date(0);return c.setFullYear(o.getUTCFullYear(),o.getUTCMonth(),o.getUTCDate()),c.setHours(o.getUTCHours(),o.getUTCMinutes(),o.getUTCSeconds(),o.getUTCMilliseconds()),c};var r=n(O.exports),a=n(G.exports);function n(e){return e&&e.__esModule?e:{default:e}}e.exports=t.default}(q,q.exports);var X=Y(q.exports);class ee extends N{constructor(e,t,r,a,n,i){super(e,t),this._event=r,this._contentID=a,this._thumbnail=n,this._subLabels=i??null}getStartTime(){return W(this._event.start_time)}getEndTime(){return this._event.end_time?W(this._event.end_time):null}inProgress(){return!this.getEndTime()}getVideoContentType(){return R.HLS}getID(){return this._event.id}getContentID(){return this._contentID}getTitle(){return(e=>{const t=Intl.DateTimeFormat().resolvedOptions().timeZone,r=Math.round(e.end_time?e.end_time-e.start_time:Date.now()/1e3-e.start_time);return`${c(X(1e3*e.start_time,t))} [${r}s, ${u(e.label)} ${Math.round(100*e.top_score)}%]`})(this._event)}getThumbnail(){return this._thumbnail}isFavorite(){return this._event.retain_indefinitely??null}setFavorite(e){this._event.retain_indefinitely=e}getWhat(){return[this._event.label]}getWhere(){const e=this._event.zones;return e.length?e:null}getScore(){return this._event.top_score}getTags(){return this._subLabels}isGroupableWith(e){return this.getMediaType()===e.getMediaType()&&g(this.getWhere(),e.getWhere())&&g(this.getWhat(),e.getWhat())}}class te extends N{constructor(e,t,r,a,n,i){super(e,t),this._recording=r,this._id=a,this._contentID=n,this._title=i}getID(){return this._id}getStartTime(){return this._recording.startTime}getEndTime(){return this._recording.endTime}inProgress(){return!this.getEndTime()}getContentID(){return this._contentID}getTitle(){return this._title}getEventCount(){return this._recording.events}}class re{static createEventViewMedia(e,t,r,a,n){return"clip"===e&&!a.has_clip||"snapshot"===e&&!a.has_snapshot||!r.frigate.client_id||!r.frigate.camera_name?null:new ee(e,t,a,((e,t,r,a)=>`media-source://frigate/${e}/event/${a}/${t}/${r.id}`)(r.frigate.client_id,r.frigate.camera_name,a,"clip"===e?"clips":"snapshots"),((e,t)=>`/api/frigate/${e}/thumbnail/${t.id}`)(r.frigate.client_id,a),n)}static createRecordingViewMedia(e,t,r,a){return r.frigate.client_id&&r.frigate.camera_name?new te("recording",e,t,((e,t)=>`${e.frigate?.client_id??""}/${e.frigate.camera_name??""}/${t.startTime.getTime()}/${t.endTime.getTime()}}`)(r,t),((e,t,r)=>["media-source://frigate",e,"recordings",t,`${r.startTime.getFullYear()}-${String(r.startTime.getMonth()+1).padStart(2,"0")}-${String(String(r.startTime.getDate()).padStart(2,"0"))}`,String(r.startTime.getHours()).padStart(2,"0")].join("/"))(r.frigate.client_id,r.frigate.camera_name,t),((e,t)=>`${e} ${c(t.startTime)}`)(a,t)):null}}class ae{static isFrigateMedia(e){return this.isFrigateEvent(e)||this.isFrigateRecording(e)}static isFrigateEvent(e){return e instanceof ee}static isFrigateRecording(e){return e instanceof te}}const ne="birdseye";class ie{static isFrigateEventQueryResults(e){return e.engine===m.Frigate&&e.type===v.Event}static isFrigateRecordingQueryResults(e){return e.engine===m.Frigate&&e.type===v.Recording}static isFrigateRecordingSegmentsResults(e){return e.engine===m.Frigate&&e.type===v.RecordingSegments}}class se extends E{constructor(e,t,r){super(),this._throttledSegmentGarbageCollector=d(this._garbageCollectSegments.bind(this),36e5,{leading:!1,trailing:!0}),this._cardWideConfig=e,this._recordingSegmentsCache=t,this._requestCache=r}getEngineType(){return m.Frigate}async initializeCamera(e,t,r){const a=!!r.frigate?.camera_name,i=r.triggers.motion||r.triggers.occupancy;let s=null;if(r.camera_entity&&(!a||i))try{s=await t.getEntity(e,r.camera_entity)}catch(e){throw new f(n("error.no_camera_entity"),r)}if(s&&!a){const e=this._getFrigateCameraNameFromEntity(s);e&&(r.frigate.camera_name=e)}if(i){const a=await t.getMatchingEntities(e,(e=>e.config_entry_id===s?.config_entry_id&&!e.disabled_by&&e.entity_id.startsWith("binary_sensor.")));if(r.triggers.motion){const e=this._getMotionSensor(r,[...a.values()]);e&&r.triggers.entities.push(e)}if(r.triggers.occupancy){const e=this._getOccupancySensor(r,[...a.values()]);e&&r.triggers.entities.push(...e)}r.triggers.entities=(o=r.triggers.entities)&&o.length?l(o):[]}var o;return r}_getFrigateCameraNameFromEntity(e){if("frigate"===e.platform&&e.unique_id&&"string"==typeof e.unique_id){const t=e.unique_id.match(/:camera:(?<camera>[^:]+)$/);if(t&&t.groups)return t.groups.camera}return null}_getMotionSensor(e,t){return e.frigate.camera_name?t.find((t=>"string"==typeof t.unique_id&&!!t.unique_id?.match(new RegExp(`:motion_sensor:${e.frigate.camera_name}`))))?.entity_id??null:null}_getOccupancySensor(e,t){const r=[],a=(e,a)=>{const n=t.find((t=>"string"==typeof t.unique_id&&!!t.unique_id?.match(new RegExp(`:occupancy_sensor:${e}_${a}`))))?.entity_id??null;n&&r.push(n)};if(e.frigate.camera_name){const t=e.frigate.zones?.length?e.frigate.zones:[e.frigate.camera_name],n=e.frigate.labels?.length?e.frigate.labels:["all"];for(const e of t)for(const t of n)a(e,t);if(r.length)return r}return null}async getMediaDownloadPath(e,t,r){return ae.isFrigateEvent(r)?{endpoint:`/api/frigate/${t.frigate.client_id}/notifications/${r.getID()}/`+(p.isClip(r)?"clip.mp4":"snapshot.jpg")+"?download=true",sign:!0}:ae.isFrigateRecording(r)?{endpoint:`/api/frigate/${t.frigate.client_id}/recording/${t.frigate.camera_name}/start/${Math.floor(r.getStartTime().getTime()/1e3)}/end/${Math.floor(r.getEndTime().getTime()/1e3)}}?download=true`,sign:!0}:null}generateDefaultEventQuery(e,t,r){const a=Array.from(t).map((t=>e.get(t))),n=$(a.map((e=>e?.frigate.zones)),g),i=$(a.map((e=>e?.frigate.labels)),g);if(1===n.length&&1===i.length)return[{type:h.Event,cameraIDs:t,...i[0]&&{what:new Set(i[0])},...n[0]&&{where:new Set(n[0])},...r}];const s=[];for(const a of t){const t=e.get(a);t&&s.push({type:h.Event,cameraIDs:new Set([a]),...t.frigate.labels&&{what:new Set(t.frigate.labels)},...t.frigate.zones&&{where:new Set(t.frigate.zones)},...r})}return s.length?s:null}generateDefaultRecordingQuery(e,t,r){return[{type:h.Recording,cameraIDs:t,...r}]}generateDefaultRecordingSegmentsQuery(e,t,r){return r.start&&r.end?[{type:h.RecordingSegments,cameraIDs:t,start:r.start,end:r.end,...r}]:null}async favoriteMedia(e,t,i,s){ae.isFrigateEvent(i)&&(await async function(e,t,i,s){const o={type:"frigate/event/retain",instance_id:t,event_id:i,retain:s},c=await r(e,U,o,!0);if(!c.success)throw new a(n("error.failed_retain"),{request:o,response:c})}(e,t.frigate.client_id,i.getID(),s),i.setFavorite(s))}_buildInstanceToCameraIDMapFromQuery(e,t){const r=new Map;for(const a of t){const t=this._getQueryableCameraConfig(e,a)?.frigate.client_id;t&&(r.has(t)||r.set(t,new Set),r.get(t)?.add(a))}return r}_getFrigateCameraNamesForCameraIDs(e,t){const r=new Set;for(const a of t){const t=this._getQueryableCameraConfig(e,a);t?.frigate.camera_name&&r.add(t.frigate.camera_name)}return r}async getEvents(e,t,r,a){const n=new Map,i=async(i,s)=>{if(!s||!s.size)return;const o={...r,cameraIDs:s},c=a?.useCache??1?this._requestCache.get(o):null;if(c)return void n.set(r,c);const u={instance_id:i,cameras:Array.from(this._getFrigateCameraNamesForCameraIDs(t,s)),...r.what&&{labels:Array.from(r.what)},...r.where&&{zones:Array.from(r.where)},...r.tags&&{sub_labels:Array.from(r.tags)},...r.end&&{before:Math.floor(r.end.getTime()/1e3)},...r.start&&{after:Math.floor(r.start.getTime()/1e3)},...r.limit&&{limit:r.limit},...r.hasClip&&{has_clip:r.hasClip},...r.hasSnapshot&&{has_snapshot:r.hasSnapshot},...r.favorite&&{favorites:r.favorite},limit:r?.limit??F},g={type:v.Event,engine:m.Frigate,instanceID:i,events:await Q(e,u),expiry:w(new Date,{seconds:60}),cached:!1};(a?.useCache??1)&&this._requestCache.set(r,{...g,cached:!0},g.expiry),n.set(o,g)},s=this._buildInstanceToCameraIDMapFromQuery(t,r.cameraIDs);return await Promise.all(Array.from(s.keys()).map((e=>i(e,s.get(e))))),n.size?n:null}async getRecordings(e,t,a,n){const i=new Map,s=async(a,s)=>{const o={...a,cameraIDs:new Set([s])},c=n?.useCache??1?this._requestCache.get(o):null;if(c)return void i.set(o,c);const u=this._getQueryableCameraConfig(t,s);if(!u||!u.frigate.camera_name)return;const g=await(async(e,t,a)=>await r(e,H,{type:"frigate/recordings/summary",instance_id:t,camera:a,timezone:Intl.DateTimeFormat().resolvedOptions().timeZone},!0))(e,u.frigate.client_id,u.frigate.camera_name);let l=[];for(const e of g??[])for(const t of e.hours){const r=w(e.day,{hours:t.hour}),a=b(r),n=T(r);(!o.start||a>=o.start)&&(!o.end||n<=o.end)&&l.push({cameraID:s,startTime:a,endTime:n,events:t.events})}void 0!==o.limit&&(l=M(l,(e=>e.startTime),"desc").slice(0,o.limit));const d={type:v.Recording,engine:m.Frigate,instanceID:u.frigate.client_id,recordings:l,expiry:w(new Date,{seconds:60}),cached:!1};(n?.useCache??1)&&this._requestCache.set(o,{...d,cached:!0},d.expiry),i.set(o,d)};return await Promise.all(Array.from(a.cameraIDs).map((e=>s(a,e)))),i.size?i:null}async getRecordingSegments(e,t,a,n){const i=new Map,s=async(a,s)=>{const o={...a,cameraIDs:new Set([s])},c=this._getQueryableCameraConfig(t,s);if(!c||!c.frigate.camera_name)return;const u={start:o.start,end:o.end},g=n?.useCache??1?this._recordingSegmentsCache.get(s,u):null;if(g)return void i.set(o,{type:v.RecordingSegments,engine:m.Frigate,instanceID:c.frigate.client_id,segments:g,cached:!0});const l={instance_id:c.frigate.client_id,camera:c.frigate.camera_name,after:Math.floor(o.start.getTime()/1e3),before:Math.floor(o.end.getTime()/1e3)},d=await(async(e,t)=>await r(e,Z,{type:"frigate/recordings/get",...t},!0))(e,l);(n?.useCache??1)&&this._recordingSegmentsCache.add(s,u,d),i.set(o,{type:v.RecordingSegments,engine:m.Frigate,instanceID:c.frigate.client_id,segments:d,cached:!1})};return await Promise.all(Array.from(a.cameraIDs).map((e=>s(a,e)))),_((()=>this._throttledSegmentGarbageCollector(e,t))),i.size?i:null}_getCameraIDMatch(e,t,r,a){if(1===t.cameraIDs.size)return[...t.cameraIDs][0];for(const[t,n]of e.entries())if(n.frigate.client_id===r&&n.frigate.camera_name===a)return t;return null}generateMediaFromEvents(e,t,r,a){if(!ie.isFrigateEventQueryResults(a))return null;const n=[];for(const e of a.events){const i=this._getCameraIDMatch(t,r,a.instanceID,e.camera);if(!i)continue;const s=this._getQueryableCameraConfig(t,i);if(!s)continue;let o=null;if(r.hasClip||r.hasSnapshot||!e.has_clip&&!e.has_snapshot?r.hasSnapshot&&e.has_snapshot?o="snapshot":r.hasClip&&e.has_clip&&(o="clip"):o=e.has_clip?"clip":"snapshot",!o)continue;const c=re.createEventViewMedia(o,i,s,e,e.sub_label?this._splitSubLabels(e.sub_label):void 0);c&&n.push(c)}return n}generateMediaFromRecordings(e,t,r,a){if(!ie.isFrigateRecordingQueryResults(a))return null;const n=[];for(const r of a.recordings){const a=this._getQueryableCameraConfig(t,r.cameraID);if(!a)continue;const i=re.createRecordingViewMedia(r.cameraID,r,a,this.getCameraMetadata(e,a).title);i&&n.push(i)}return n}getQueryResultMaxAge(e){return e.type===h.Event||e.type===h.Recording?60:null}async getMediaSeekTime(e,t,r,a,n){const i=r.getStartTime(),s=r.getEndTime();if(!i||!s||a<i||a>s)return null;const o=r.getCameraID(),c={cameraIDs:new Set([o]),start:i,end:s,type:h.RecordingSegments},u=await this.getRecordingSegments(e,t,c,n);return u?this._getSeekTimeInSegments(i,a,Array.from(u.values())[0].segments):null}_getQueryableCameraConfig(e,t){const r=e.get(t);return r&&r.frigate.camera_name!=ne?r:null}_splitSubLabels(e){return e.split(",").map((e=>e.trim()))}async getMediaMetadata(e,t,a,n){const i=new Map;if((n?.useCache??1)&&this._requestCache.has(a)){const e=this._requestCache.get(a);if(e)return i.set(a,e),i}const s=new Set,o=new Set,c=new Set,u=new Set,g=this._buildInstanceToCameraIDMapFromQuery(t,a.cameraIDs),l=async(a,n)=>{const i=this._getFrigateCameraNamesForCameraIDs(t,n);for(const t of await(async(e,t)=>await r(e,P,{type:"frigate/events/summary",instance_id:t,timezone:Intl.DateTimeFormat().resolvedOptions().timeZone},!0))(e,a))i.has(t.camera)&&(t.label&&s.add(t.label),t.zones.length&&t.zones.forEach(o.add,o),t.day&&c.add(t.day),t.sub_label&&this._splitSubLabels(t.sub_label).forEach(u.add,u))},d=async r=>{const a=await this.getRecordings(e,t,{type:h.Recording,cameraIDs:r},n);if(a)for(const e of a.values())if(ie.isFrigateRecordingQueryResults(e))for(const t of e.recordings)c.add(x(t.startTime))};await y([...g.entries()],(([e,t])=>(async()=>{await Promise.all([l(e,t),d(t)])})()));const f={type:v.MediaMetadata,engine:m.Frigate,metadata:{...s.size&&{what:s},...o.size&&{where:o},...c.size&&{days:c},...u.size&&{tags:u}},expiry:w(new Date,{seconds:60}),cached:!1};return(n?.useCache??1)&&this._requestCache.set(a,{...f,cached:!0},f.expiry),i.set(a,f),i}async _garbageCollectSegments(e,t){const r=this._recordingSegmentsCache.getCameraIDs(),a={cameraIDs:new Set(r),type:h.Recording},n=()=>S(r.map((e=>this._recordingSegmentsCache.getCache(e)?.size()??0))),i=n(),s=(e,t)=>`${e}/${t.getDate()}/${t.getHours()}`,o=await this.getRecordings(e,t,a);if(o){for(const[e,t]of o){if(!ie.isFrigateRecordingQueryResults(t))continue;const r=new Set;for(const e of t.recordings)r.add(s(e.cameraID,e.startTime));const a=Array.from(e.cameraIDs)[0];this._recordingSegmentsCache.expireMatches(a,(e=>{const t=s(a,W(e.start_time));return r.has(t)}))}C(this._cardWideConfig,`Frigate Card recording segment garbage collection: Released ${i-n()} segment(s)`)}}_getSeekTimeInSegments(e,t,r){if(!r.length)return null;let a=0;for(const n of r){const r=W(n.start_time);if(r>t)break;const i=W(n.end_time),s=r<e?e:r;a+=(i>t?t:i).getTime()-s.getTime()}return a/1e3}getCameraCapabilities(e){const t=e.frigate.camera_name===ne;return{canFavoriteEvents:!t,canFavoriteRecordings:!t,canSeek:!0,supportsClips:!t,supportsSnapshots:!t,supportsRecordings:!t,supportsTimeline:!t}}getMediaCapabilities(e){return{canFavorite:p.isEvent(e),canDownload:!0}}getCameraMetadata(e,t){const r=super.getCameraMetadata(e,t);return{title:t.title??D(e,t.camera_entity)??D(e,t.webrtc_card?.entity)??u(t.frigate?.camera_name)??t.id??"",icon:r.icon,engineLogo:"data:image/svg+xml,%3csvg width='512' height='512' viewBox='0 0 512 512' fill='none' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M130 446.5C131.6 459.3 145 468 137 470C129 472 94 406.5 86 378.5C78 350.5 73.5 319 75.4999 301C77.4999 283 181 255 181 247.5C181 240 147.5 247 146 241C144.5 235 171.3 238.6 178.5 229C189.75 214 204 216.5 213 208.5C222 200.5 233 170 235 157C237 144 215 129 209 119C203 109 222 102 268 83C314 64 460 22 462 27C464 32 414 53 379 66C344 79 287 104 287 111C287 118 290 123.5 288 139.5C286 155.5 285.76 162.971 282 173.5C279.5 180.5 277 197 282 212C286 224 299 233 305 235C310 235.333 323.8 235.8 339 235C358 234 385 236 385 241C385 246 344 243 344 250C344 257 386 249 385 256C384 263 350 260 332 260C317.6 260 296.333 259.333 287 256L285 263C281.667 263 274.7 265 267.5 265C258.5 265 258 268 241.5 268C225 268 230 267 215 266C200 265 144 308 134 322C124 336 130 370 130 385.5C130 399.428 128 430.5 130 446.5Z' fill='white'/%3e%3c/svg%3e"}}getCameraEndpoints(e,t){const r=(()=>{if(!e.frigate.url)return null;if(!e.frigate.camera_name)return{endpoint:e.frigate.url};const r=`${e.frigate.url}/cameras/`+e.frigate.camera_name;if("live"===t?.view)return{endpoint:r};const a=`${e.frigate.url}/events?camera=`+e.frigate.camera_name,n=`${e.frigate.url}/recording/`+e.frigate.camera_name;switch(t?.media?.getMediaType()){case"clip":case"snapshot":return{endpoint:a};case"recording":const e=t.media.getStartTime();if(e)return{endpoint:n+I(e,"yyyy-MM-dd/HH")}}switch(t?.view){case"clip":case"clips":case"snapshots":case"snapshot":return{endpoint:a};case"recording":case"recordings":return{endpoint:n}}return{endpoint:r}})(),a={endpoint:`/api/frigate/${e.frigate.client_id}/mse/api/ws?src=${e.go2rtc?.stream??e.frigate.camera_name}`,sign:!0},n={endpoint:`/api/frigate/${e.frigate.client_id}/jsmpeg/${e.frigate.camera_name}`,sign:!0},i=(()=>{const t=e.frigate.camera_name?e.frigate.camera_name:null;return t?{endpoint:t}:null})();return{...r&&{ui:r},...a&&{go2rtc:a},...n&&{jsmpeg:n},...i&&{webrtcCard:i}}}}export{se as FrigateCameraManagerEngine};
