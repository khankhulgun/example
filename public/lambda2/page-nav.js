webpackJsonp([17],{16:function(e,n,t){e.exports=t("XW69")},AWOb:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default={data:function(){return{menu:window.init.menu,cruds:window.init.cruds,permissions:window.init.permissions.permissions,extra:window.init.permissions.extra}},methods:{can:function(e){return!!this.permissions[e.id]&&!!this.permissions[e.id].show},getTitle:function(e){if("crud"==e.link_to){var n=this.cruds.findIndex(function(n){return n.id==e.url});return n>=0?this.cruds[n].title:""}return e.title}}}},Soxl:function(e,n){e.exports={render:function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("ul",e._l(e.menu,function(n,i){return e.can(n)?t("li",{key:i},["link"!=n.link_to&&"router-link"!=n.link_to?t("router-link",{attrs:{to:"/p/"+n.id}},[n.icon?t("i",{class:n.icon}):e._e(),e._v(" "),t("span",{domProps:{innerHTML:e._s(e.getTitle(n))}})]):e._e(),e._v(" "),"router-link"==n.link_to?t("router-link",{attrs:{to:n.url}},[n.icon?t("i",{class:n.icon}):e._e(),e._v(" "),t("span",{domProps:{innerHTML:e._s(e.getTitle(n))}})]):e._e(),e._v(" "),"link"==n.link_to?t("a",{attrs:{href:n.url,target:"_blank"}},[n.icon?t("i",{class:n.icon}):e._e(),e._v(" "),t("span",{domProps:{innerHTML:e._s(e.getTitle(n))}})]):e._e()],1):e._e()}),0)},staticRenderFns:[]}},"VU/8":function(e,n){e.exports=function(e,n,t,i,r,o){var s,u=e=e||{},c=typeof e.default;"object"!==c&&"function"!==c||(s=e,u=e.default);var l,d="function"==typeof u?u.options:u;if(n&&(d.render=n.render,d.staticRenderFns=n.staticRenderFns,d._compiled=!0),t&&(d.functional=!0),r&&(d._scopeId=r),o?(l=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),i&&i.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(o)},d._ssrRegister=l):i&&(l=i),l){var a=d.functional,_=a?d.render:d.beforeCreate;a?(d._injectStyles=l,d.render=function(e,n){return l.call(n),_(e,n)}):d.beforeCreate=_?[].concat(_,l):[l]}return{esModule:s,exports:u,options:d}}},XW69:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var i=t("eIqF"),r={"page-nav":t.n(i).a},o=function e(n,t){e.installed||Object.keys(r).forEach(function(e){return n.component(e,r[e])})};"undefined"!=typeof window&&window.Vue&&o(window.Vue),n.default=o},eIqF:function(e,n,t){var i=t("VU/8")(t("AWOb"),t("Soxl"),!1,null,null,null);e.exports=i.exports}},[16]);