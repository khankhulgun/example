webpackJsonp([17],{1:function(e,t,n){e.exports=n("fJ4Y")},EJro:function(e,t,n){var r=n("bGab");"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);n("po5z")("77579391",r,!0,{})},O0yT:function(e,t){e.exports=function(e,t){for(var n=[],r={},o=0;o<t.length;o++){var i=t[o],a=i[0],s={id:e+":"+o,css:i[1],media:i[2],sourceMap:i[3]};r[a]?r[a].parts.push(s):n.push(r[a]={id:a,parts:[s]})}return n}},Txj0:function(e,t){e.exports={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"form-preview-page"},[t("dataform",{ref:"form",attrs:{schemaID:this.schema_id,editMode:this.editMode,onSuccess:this.onSuccess,do_render:!0,permissions:{c:!0,r:!1,u:!1,d:!1},user_condition:null,onError:this.onError}})],1)},staticRenderFns:[]}},"VU/8":function(e,t){e.exports=function(e,t,n,r,o,i){var a,s=e=e||{},d=typeof e.default;"object"!==d&&"function"!==d||(a=e,s=e.default);var p,l="function"==typeof s?s.options:s;if(t&&(l.render=t.render,l.staticRenderFns=t.staticRenderFns,l._compiled=!0),n&&(l.functional=!0),o&&(l._scopeId=o),i?(p=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),r&&r.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(i)},l._ssrRegister=p):r&&(p=r),p){var c=l.functional,f=c?l.render:l.beforeCreate;c?(l._injectStyles=p,l.render=function(e,t){return p.call(t),f(e,t)}):l.beforeCreate=f?[].concat(f,p):[p]}return{esModule:a,exports:s,options:l}}},ZX7y:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={components:{},methods:{onSuccess:function(){},onError:function(){},getData:function(){this.editMode=!0,this.$refs.form.editModel(this.id)}},mounted:function(){this.getData()},data:function(){return{schema_id:window.init.schema_id,id:window.init.id,editMode:!1,formId:null}}}},"a+Ai":function(e,t,n){var r=n("VU/8")(n("ZX7y"),n("Txj0"),!1,function(e){n("EJro")},null,null);e.exports=r.exports},bGab:function(e,t,n){(e.exports=n("FZ+f")(!1)).push([e.i,".form-preview-page .dataform-body{padding:15px}.form-preview-page .clear-container,.form-preview-page .dataform-footer,.form-preview-page .dataform-header,.form-preview-page .leaflet-draw,.form-preview-page .sub-form-add-btn,.form-preview-page .subform-grid .action,.form-preview-page .subform-header{display:none}.form-preview-page .ivu-input-inner-container,.form-preview-page .multiselect{pointer-events:none}.form-preview-page textarea{max-height:52px!important}.form-preview-page .ivu-form-item-label{background:#ccc;width:100%;padding:7px 15px;color:#333;text-align:left;font-weight:500}.form-preview-page .ivu-input,.form-preview-page .multiselect__tags{border-radius:0}.form-preview-page .with-info-caller{width:calc(100% - 30px);display:inline-block}.form-preview-page .info-caller{width:30px;display:inline-block;vertical-align:top;padding-top:2px;padding-left:2px;height:20px;position:absolute}",""])},fJ4Y:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n("I3G/"),o=n.n(r),i=n("mtWM"),a=n.n(i),s=n("M4fF"),d=n.n(s),p=n("BTaQ"),l=n.n(p),c=o.a.prototype.$isServer,f={i:{locale:"mn-MN",select:{placeholder:"Сонгох",noMatch:"Таарах өгөгдөл байхгүй байна",loading:"Ачааллаж байна"},table:{noDataText:"Өгөгдөл алга",noFilteredDataText:"No filter data",confirmFilter:"Батлах",resetFilter:"Шинээр тохируулах",clearFilter:"Бүгд"},datepicker:{selectDate:"Огноо сонгох",selectTime:"Цаг сонгох",startTime:"Эхлэх Цаг",endTime:"Дуусах Цаг",clear:"Цэвэрлэх",ok:"OK",datePanelLabel:"[mmmm] [yyyy]",month:"Сар",month1:"1-р сар",month2:"2-р сар",month3:"3-р сар",month4:"4-р сар",month5:"5-р сар",month6:"6-р сар",month7:"7-р сар",month8:"8-р сар",month9:"9-р сар",month10:"10-р сар",month11:"11-р сар",month12:"12-р сар",year:"Жил",weekStartDay:"0",weeks:{sun:"Ням",mon:"Дав",tue:"Мяг",wed:"Лха",thu:"Пүр",fri:"Баа",sat:"Бяа"},months:{m1:"1-р сар",m2:"2-р сар",m3:"3-р сар",m4:"4-р сар",m5:"5-р сар",m6:"6-р сар",m7:"7-р сар",m8:"8-р сар",m9:"9-р сар",m10:"10-р сар",m11:"11-р сар",m12:"12-р сар"}},transfer:{titles:{source:"Эх сурвалж",target:"Оноох бай"},filterPlaceholder:"Эндээс хайх",notFoundText:"Олдсонгүй"},modal:{okText:"OK",cancelText:"Болих"},poptip:{okText:"OK",cancelText:"Болих"},page:{prev:"Өмнөх хуудас",next:"Дараах хуудас",total:"Нийт",item:"",items:" мета дата",prev5:"Өмнөх 5 хуудас",next5:"Дараагийн 5 хуудас",page:"/хуудсанд",goto:"Очих хуудас",p:""},rate:{star:"Од",stars:"Одууд"},tree:{emptyText:"Өгөгдөл алга"}}};!function(e){c||void 0!==window.iview&&("langs"in iview||(iview.langs={}),iview.langs[e.i.locale]=e)}(f);var u=f;o.a.config.productionTip=!1,window.Vue=o.a,window._=d.a,window.axios=a.a,o.a.config.productionTip=!1,o.a.use(l.a,{locale:u});var m=n("a+Ai");new Vue({extends:n.n(m).a,el:"#app"})},po5z:function(e,t,n){var r="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!r)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var o=n("O0yT"),i={},a=r&&(document.head||document.getElementsByTagName("head")[0]),s=null,d=0,p=!1,l=function(){},c=null,f="data-vue-ssr-id",u="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());function m(e){for(var t=0;t<e.length;t++){var n=e[t],r=i[n.id];if(r){r.refs++;for(var o=0;o<r.parts.length;o++)r.parts[o](n.parts[o]);for(;o<n.parts.length;o++)r.parts.push(v(n.parts[o]));r.parts.length>n.parts.length&&(r.parts.length=n.parts.length)}else{var a=[];for(o=0;o<n.parts.length;o++)a.push(v(n.parts[o]));i[n.id]={id:n.id,refs:1,parts:a}}}}function h(){var e=document.createElement("style");return e.type="text/css",a.appendChild(e),e}function v(e){var t,n,r=document.querySelector("style["+f+'~="'+e.id+'"]');if(r){if(p)return l;r.parentNode.removeChild(r)}if(u){var o=d++;r=s||(s=h()),t=x.bind(null,r,o,!1),n=x.bind(null,r,o,!0)}else r=h(),t=function(e,t){var n=t.css,r=t.media,o=t.sourceMap;r&&e.setAttribute("media",r);c.ssrId&&e.setAttribute(f,t.id);o&&(n+="\n/*# sourceURL="+o.sources[0]+" */",n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */");if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}.bind(null,r),n=function(){r.parentNode.removeChild(r)};return t(e),function(r){if(r){if(r.css===e.css&&r.media===e.media&&r.sourceMap===e.sourceMap)return;t(e=r)}else n()}}e.exports=function(e,t,n,r){p=n,c=r||{};var a=o(e,t);return m(a),function(t){for(var n=[],r=0;r<a.length;r++){var s=a[r];(d=i[s.id]).refs--,n.push(d)}t?m(a=o(e,t)):a=[];for(r=0;r<n.length;r++){var d;if(0===(d=n[r]).refs){for(var p=0;p<d.parts.length;p++)d.parts[p]();delete i[d.id]}}}};var g,w=(g=[],function(e,t){return g[e]=t,g.filter(Boolean).join("\n")});function x(e,t,n,r){var o=n?"":r.css;if(e.styleSheet)e.styleSheet.cssText=w(t,o);else{var i=document.createTextNode(o),a=e.childNodes;a[t]&&e.removeChild(a[t]),a.length?e.insertBefore(i,a[t]):e.appendChild(i)}}}},[1]);