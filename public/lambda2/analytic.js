webpackJsonp([16],{8:function(t,e,r){t.exports=r("k3r7")},EVmv:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"analytic"},[r("div",{staticClass:"report-filter"},[r("h4",{staticClass:"header"},[t._v("Мэдээлэл шүүх /Pivot/")]),t._v(" "),r("Form",[r("label",[t._v("Анализын төрөл")]),t._v(" "),r("FormItem",[r("Select",{attrs:{placeholder:"Анализын төрөл"},model:{value:t.pivotModel.analytic_type,callback:function(e){t.$set(t.pivotModel,"analytic_type",e)},expression:"pivotModel.analytic_type"}},t._l(t.analytic_types,function(e){return r("Option",{key:e.index,attrs:{value:e.id}},[t._v("\n                        "+t._s(e.title)+"\n                    ")])}),1)],1),t._v(" "),r("div",{staticClass:"divider"}),t._v(" "),r("label",[t._v("Шүүлтүүр")]),t._v(" "),t._l(t.filters,function(e){return t.pivotModel.analytic_type==e.analytic_id?r("FormItem",{key:e.index},[r("Select",{attrs:{clearable:"",placeholder:e.title},model:{value:e.value,callback:function(r){t.$set(e,"value",r)},expression:"filter.value"}},t._l(t.filterData[e.source],function(a){return t.isShow(e,a)?r("Option",{key:a.index,attrs:{value:a.value}},[t._v("\n                        "+t._s(a.label)+"\n                    ")]):t._e()}),1)],1):t._e()}),t._v(" "),t._l(t.range_filters,function(e){return t.pivotModel.analytic_type==e.analytic_id?r("FormItem",{key:e.index},[r("Label",[t._v(t._s(e.title)+":  "+t._s(e.value[0])+"-"+t._s(e.value[1])+"  "),0!==e.value[0]||0!==e.value[1]?r("Button",{attrs:{size:"small",icon:"md-close",type:"primary",shape:"circle"},on:{click:function(t){e.value=[0,0]}}}):t._e()],1),t._v(" "),r("Slider",{attrs:{step:e.start_value,"show-stops":"",range:"",max:e.end_value},model:{value:e.value,callback:function(r){t.$set(e,"value",r)},expression:"filter.value"}})],1):t._e()}),t._v(" "),r("br"),t._v(" "),r("div",{staticClass:"divider"}),t._v(" "),r("label",[t._v("Мөр")]),t._v(" "),r("FormItem",[r("Select",{attrs:{clearable:"",placeholder:"Мөр"},model:{value:t.pivotModel.row,callback:function(e){t.$set(t.pivotModel,"row",e)},expression:"pivotModel.row"}},t._l(t.pivotFields,function(e){return r("Option",{key:e.index,attrs:{value:e.id}},[t._v("\n                        "+t._s(e.title)+"\n                    ")])}),1)],1),t._v(" "),r("label",[t._v("Багана")]),t._v(" "),r("FormItem",[r("Select",{attrs:{clearable:"",placeholder:"Багана"},model:{value:t.pivotModel.col,callback:function(e){t.$set(t.pivotModel,"col",e)},expression:"pivotModel.col"}},t._l(t.pivotFieldsCol,function(e){return r("Option",{key:e.index,attrs:{value:e.id}},[t._v("\n                        "+t._s(e.title)+"\n                    ")])}),1)],1),t._v(" "),r("label",[t._v("Хөл дүн")]),t._v(" "),r("FormItem",[r("Select",{attrs:{placeholder:"Томьёо"},model:{value:t.pivotModel.aggregation,callback:function(e){t.$set(t.pivotModel,"aggregation",e)},expression:"pivotModel.aggregation"}},t._l(t.aggregations,function(e){return r("Option",{key:e.index,attrs:{value:e.val}},[t._v("\n                        "+t._s(e.label)+"\n                    ")])}),1)],1),t._v(" "),r("FormItem",[r("Button",{attrs:{type:"primary",long:""},on:{click:t.pivot}},[t._v("Анализ хийх")])],1)],2)],1),t._v(" "),r("div",{staticClass:"report-section"},[r("div",{staticClass:"pivot-table"},[r("div",{staticClass:"table-header"},[r("h3",{staticClass:"title"},[t._v("Хүснэгтэн мэдээлэл")]),t._v(" "),r("div",{staticClass:"tool"},[t.header.length>=1?r("a",{attrs:{href:"javascript:void(0)"},on:{click:t.download}},[r("i",{staticClass:"ti ti-download"}),t._v(" Excel-р татах\n                    ")]):t._e()])]),t._v(" "),r("div",{staticClass:"table-wrap"},[t.loading?r("Spin",{attrs:{fix:""}}):t._e(),t._v(" "),0==t.dataList.length?r("div",{staticClass:"data-layer-holder"},[t._v("\n                    Мэдээллээ шүүж харна уу\n                ")]):t._e(),t._v(" "),r("table",{attrs:{cellspacing:"0",cellpadding:"0"}},[t.header.length>1?r("thead",t._l(t.header,function(e){return r("th",{key:e.index},[t._v("\n                        "+t._s(e)+"\n                    ")])}),0):r("thead",t._l(t.header,function(e){return r("th",{key:e.index,attrs:{colspan:"2"}},[t._v("\n                        "+t._s(e)+"\n                    ")])}),0),t._v(" "),r("tbody",[t._l(t.dataList,function(e){return r("tr",{key:e.index},t._l(e,function(e){return r("td",{key:e.index},[t._v("\n                            "+t._s(t.showNumber(e))+"\n                        ")])}),0)}),t._v(" "),t.dataList.length>0?r("tr",[r("td",[r("strong",[t._v(t._s("sum"==t.pivotModel.aggregation?"Нийлбэр дүн":"Дундаж дүн"))])]),t._v(" "),t._l(t.aggVals,function(e){return r("td",{key:e.index},["sum"==t.pivotModel.aggregation?r("strong",[t._v("\n                                "+t._s(t.showNumber(e))+"\n                            ")]):r("strong",[t._v("\n                                "+t._s(parseFloat(e/t.dataList.length).toFixed(2))+"\n                            ")])])})],2):t._e()],2)])],1)]),t._v(" "),r("div",{staticClass:"card",style:{width:t.chart.width}},[t._m(0),t._v(" "),r("div",{staticClass:"card-body"},[t.loading?r("Spin",{attrs:{fix:""}}):t._e(),t._v(" "),0==t.dataList.length?r("div",{staticClass:"data-layer-holder"},[r("p",{staticStyle:{"margin-top":"-120px !important"}},[t._v("Мэдээллээ шүүж харна уу")])]):t._e(),t._v(" "),r("div",{staticStyle:{height:"550px"},attrs:{id:"chart"}})],1)])])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"card-header"},[e("h3",{staticClass:"title"},[this._v("График мэдээлэл")])])}]}},F2oB:function(t,e,r){var a=r("VU/8")(r("d7eZ"),r("EVmv"),!1,null,null,null);t.exports=a.exports},S7rL:function(t,e,r){"use strict";e.a=function(t){return n()(t).format("0,0")};var a=r("ViqS"),n=r.n(a)},"VU/8":function(t,e){t.exports=function(t,e,r,a,n,i){var o,l=t=t||{},s=typeof t.default;"object"!==s&&"function"!==s||(o=t,l=t.default);var c,u="function"==typeof l?l.options:l;if(e&&(u.render=e.render,u.staticRenderFns=e.staticRenderFns,u._compiled=!0),r&&(u.functional=!0),n&&(u._scopeId=n),i?(c=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),a&&a.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(i)},u._ssrRegister=c):a&&(c=a),c){var f=u.functional,d=f?u.render:u.beforeCreate;f?(u._injectStyles=c,u.render=function(t,e){return c.call(e),d(t,e)}):u.beforeCreate=d?[].concat(d,c):[c]}return{esModule:o,exports:l,options:u}}},ViqS:function(t,e,r){var a,n;void 0===(n="function"==typeof(a=function(){var t,e,r,a,n,i={},o={},l={currentLocale:"en",zeroFormat:null,nullFormat:null,defaultFormat:"0,0",scalePercentBy100:!0},s={currentLocale:l.currentLocale,zeroFormat:l.zeroFormat,nullFormat:l.nullFormat,defaultFormat:l.defaultFormat,scalePercentBy100:l.scalePercentBy100};function c(t,e){this._input=t,this._value=e}return(t=function(r){var a,n,o,l;if(t.isNumeral(r))a=r.value();else if(0===r||void 0===r)a=0;else if(null===r||e.isNaN(r))a=null;else if("string"==typeof r)if(s.zeroFormat&&r===s.zeroFormat)a=0;else if(s.nullFormat&&r===s.nullFormat||!r.replace(/[^0-9]+/g,"").length)a=null;else{for(n in i)if((l="function"==typeof i[n].regexps.unformat?i[n].regexps.unformat():i[n].regexps.unformat)&&r.match(l)){o=i[n].unformat;break}a=(o=o||t._.stringToNumber)(r)}else a=Number(r)||null;return new c(r,a)}).version="2.0.6",t.isNumeral=function(t){return t instanceof c},t._=e={numberToFormat:function(e,r,a){var n,i,l,s,c,u,f,d,h=o[t.options.currentLocale],p=!1,m=!1,v="",g="",_=!1;if(e=e||0,l=Math.abs(e),t._.includes(r,"(")?(p=!0,r=r.replace(/[\(|\)]/g,"")):(t._.includes(r,"+")||t._.includes(r,"-"))&&(u=t._.includes(r,"+")?r.indexOf("+"):e<0?r.indexOf("-"):-1,r=r.replace(/[\+|\-]/g,"")),t._.includes(r,"a")&&(i=!!(i=r.match(/a(k|m|b|t)?/))&&i[1],t._.includes(r," a")&&(v=" "),r=r.replace(new RegExp(v+"a[kmbt]?"),""),l>=1e12&&!i||"t"===i?(v+=h.abbreviations.trillion,e/=1e12):l<1e12&&l>=1e9&&!i||"b"===i?(v+=h.abbreviations.billion,e/=1e9):l<1e9&&l>=1e6&&!i||"m"===i?(v+=h.abbreviations.million,e/=1e6):(l<1e6&&l>=1e3&&!i||"k"===i)&&(v+=h.abbreviations.thousand,e/=1e3)),t._.includes(r,"[.]")&&(m=!0,r=r.replace("[.]",".")),s=e.toString().split(".")[0],c=r.split(".")[1],f=r.indexOf(","),n=(r.split(".")[0].split(",")[0].match(/0/g)||[]).length,c?(t._.includes(c,"[")?(c=(c=c.replace("]","")).split("["),g=t._.toFixed(e,c[0].length+c[1].length,a,c[1].length)):g=t._.toFixed(e,c.length,a),s=g.split(".")[0],g=t._.includes(g,".")?h.delimiters.decimal+g.split(".")[1]:"",m&&0===Number(g.slice(1))&&(g="")):s=t._.toFixed(e,0,a),v&&!i&&Number(s)>=1e3&&v!==h.abbreviations.trillion)switch(s=String(Number(s)/1e3),v){case h.abbreviations.thousand:v=h.abbreviations.million;break;case h.abbreviations.million:v=h.abbreviations.billion;break;case h.abbreviations.billion:v=h.abbreviations.trillion}if(t._.includes(s,"-")&&(s=s.slice(1),_=!0),s.length<n)for(var b=n-s.length;b>0;b--)s="0"+s;return f>-1&&(s=s.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g,"$1"+h.delimiters.thousands)),0===r.indexOf(".")&&(s=""),d=s+g+(v||""),p?d=(p&&_?"(":"")+d+(p&&_?")":""):u>=0?d=0===u?(_?"-":"+")+d:d+(_?"-":"+"):_&&(d="-"+d),d},stringToNumber:function(t){var e,r,a,n=o[s.currentLocale],i=t,l={thousand:3,million:6,billion:9,trillion:12};if(s.zeroFormat&&t===s.zeroFormat)r=0;else if(s.nullFormat&&t===s.nullFormat||!t.replace(/[^0-9]+/g,"").length)r=null;else{for(e in r=1,"."!==n.delimiters.decimal&&(t=t.replace(/\./g,"").replace(n.delimiters.decimal,".")),l)if(a=new RegExp("[^a-zA-Z]"+n.abbreviations[e]+"(?:\\)|(\\"+n.currency.symbol+")?(?:\\))?)?$"),i.match(a)){r*=Math.pow(10,l[e]);break}r*=(t.split("-").length+Math.min(t.split("(").length-1,t.split(")").length-1))%2?1:-1,t=t.replace(/[^0-9\.]+/g,""),r*=Number(t)}return r},isNaN:function(t){return"number"==typeof t&&isNaN(t)},includes:function(t,e){return-1!==t.indexOf(e)},insert:function(t,e,r){return t.slice(0,r)+e+t.slice(r)},reduce:function(t,e){if(null===this)throw new TypeError("Array.prototype.reduce called on null or undefined");if("function"!=typeof e)throw new TypeError(e+" is not a function");var r,a=Object(t),n=a.length>>>0,i=0;if(3===arguments.length)r=arguments[2];else{for(;i<n&&!(i in a);)i++;if(i>=n)throw new TypeError("Reduce of empty array with no initial value");r=a[i++]}for(;i<n;i++)i in a&&(r=e(r,a[i],i,a));return r},multiplier:function(t){var e=t.toString().split(".");return e.length<2?1:Math.pow(10,e[1].length)},correctionFactor:function(){return Array.prototype.slice.call(arguments).reduce(function(t,r){var a=e.multiplier(r);return t>a?t:a},1)},toFixed:function(t,e,r,a){var n,i,o,l,s=t.toString().split("."),c=e-(a||0);return n=2===s.length?Math.min(Math.max(s[1].length,c),e):c,o=Math.pow(10,n),l=(r(t+"e+"+n)/o).toFixed(n),a>e-n&&(i=new RegExp("\\.?0{1,"+(a-(e-n))+"}$"),l=l.replace(i,"")),l}},t.options=s,t.formats=i,t.locales=o,t.locale=function(t){return t&&(s.currentLocale=t.toLowerCase()),s.currentLocale},t.localeData=function(t){if(!t)return o[s.currentLocale];if(t=t.toLowerCase(),!o[t])throw new Error("Unknown locale : "+t);return o[t]},t.reset=function(){for(var t in l)s[t]=l[t]},t.zeroFormat=function(t){s.zeroFormat="string"==typeof t?t:null},t.nullFormat=function(t){s.nullFormat="string"==typeof t?t:null},t.defaultFormat=function(t){s.defaultFormat="string"==typeof t?t:"0.0"},t.register=function(t,e,r){if(e=e.toLowerCase(),this[t+"s"][e])throw new TypeError(e+" "+t+" already registered.");return this[t+"s"][e]=r,r},t.validate=function(e,r){var a,n,i,o,l,s,c,u;if("string"!=typeof e&&(e+="",console.warn&&console.warn("Numeral.js: Value is not string. It has been co-erced to: ",e)),(e=e.trim()).match(/^\d+$/))return!0;if(""===e)return!1;try{c=t.localeData(r)}catch(e){c=t.localeData(t.locale())}return i=c.currency.symbol,l=c.abbreviations,a=c.delimiters.decimal,n="."===c.delimiters.thousands?"\\.":c.delimiters.thousands,(null===(u=e.match(/^[^\d]+/))||(e=e.substr(1),u[0]===i))&&((null===(u=e.match(/[^\d]+$/))||(e=e.slice(0,-1),u[0]===l.thousand||u[0]===l.million||u[0]===l.billion||u[0]===l.trillion))&&(s=new RegExp(n+"{2}"),!e.match(/[^\d.,]/g)&&(!((o=e.split(a)).length>2)&&(o.length<2?!!o[0].match(/^\d+.*\d$/)&&!o[0].match(s):1===o[0].length?!!o[0].match(/^\d+$/)&&!o[0].match(s)&&!!o[1].match(/^\d+$/):!!o[0].match(/^\d+.*\d$/)&&!o[0].match(s)&&!!o[1].match(/^\d+$/)))))},t.fn=c.prototype={clone:function(){return t(this)},format:function(e,r){var a,n,o,l=this._value,c=e||s.defaultFormat;if(r=r||Math.round,0===l&&null!==s.zeroFormat)n=s.zeroFormat;else if(null===l&&null!==s.nullFormat)n=s.nullFormat;else{for(a in i)if(c.match(i[a].regexps.format)){o=i[a].format;break}n=(o=o||t._.numberToFormat)(l,c,r)}return n},value:function(){return this._value},input:function(){return this._input},set:function(t){return this._value=Number(t),this},add:function(t){var r=e.correctionFactor.call(null,this._value,t);return this._value=e.reduce([this._value,t],function(t,e,a,n){return t+Math.round(r*e)},0)/r,this},subtract:function(t){var r=e.correctionFactor.call(null,this._value,t);return this._value=e.reduce([t],function(t,e,a,n){return t-Math.round(r*e)},Math.round(this._value*r))/r,this},multiply:function(t){return this._value=e.reduce([this._value,t],function(t,r,a,n){var i=e.correctionFactor(t,r);return Math.round(t*i)*Math.round(r*i)/Math.round(i*i)},1),this},divide:function(t){return this._value=e.reduce([this._value,t],function(t,r,a,n){var i=e.correctionFactor(t,r);return Math.round(t*i)/Math.round(r*i)}),this},difference:function(e){return Math.abs(t(this._value).subtract(e).value())}},t.register("locale","en",{delimiters:{thousands:",",decimal:"."},abbreviations:{thousand:"k",million:"m",billion:"b",trillion:"t"},ordinal:function(t){var e=t%10;return 1==~~(t%100/10)?"th":1===e?"st":2===e?"nd":3===e?"rd":"th"},currency:{symbol:"$"}}),t.register("format","bps",{regexps:{format:/(BPS)/,unformat:/(BPS)/},format:function(e,r,a){var n,i=t._.includes(r," BPS")?" ":"";return e*=1e4,r=r.replace(/\s?BPS/,""),n=t._.numberToFormat(e,r,a),t._.includes(n,")")?((n=n.split("")).splice(-1,0,i+"BPS"),n=n.join("")):n=n+i+"BPS",n},unformat:function(e){return+(1e-4*t._.stringToNumber(e)).toFixed(15)}}),a={base:1024,suffixes:["B","KiB","MiB","GiB","TiB","PiB","EiB","ZiB","YiB"]},n="("+(n=(r={base:1e3,suffixes:["B","KB","MB","GB","TB","PB","EB","ZB","YB"]}).suffixes.concat(a.suffixes.filter(function(t){return r.suffixes.indexOf(t)<0})).join("|")).replace("B","B(?!PS)")+")",t.register("format","bytes",{regexps:{format:/([0\s]i?b)/,unformat:new RegExp(n)},format:function(e,n,i){var o,l,s,c=t._.includes(n,"ib")?a:r,u=t._.includes(n," b")||t._.includes(n," ib")?" ":"";for(n=n.replace(/\s?i?b/,""),o=0;o<=c.suffixes.length;o++)if(l=Math.pow(c.base,o),s=Math.pow(c.base,o+1),null===e||0===e||e>=l&&e<s){u+=c.suffixes[o],l>0&&(e/=l);break}return t._.numberToFormat(e,n,i)+u},unformat:function(e){var n,i,o=t._.stringToNumber(e);if(o){for(n=r.suffixes.length-1;n>=0;n--){if(t._.includes(e,r.suffixes[n])){i=Math.pow(r.base,n);break}if(t._.includes(e,a.suffixes[n])){i=Math.pow(a.base,n);break}}o*=i||1}return o}}),t.register("format","currency",{regexps:{format:/(\$)/},format:function(e,r,a){var n,i,o=t.locales[t.options.currentLocale],l={before:r.match(/^([\+|\-|\(|\s|\$]*)/)[0],after:r.match(/([\+|\-|\)|\s|\$]*)$/)[0]};for(r=r.replace(/\s?\$\s?/,""),n=t._.numberToFormat(e,r,a),e>=0?(l.before=l.before.replace(/[\-\(]/,""),l.after=l.after.replace(/[\-\)]/,"")):e<0&&!t._.includes(l.before,"-")&&!t._.includes(l.before,"(")&&(l.before="-"+l.before),i=0;i<l.before.length;i++)switch(l.before[i]){case"$":n=t._.insert(n,o.currency.symbol,i);break;case" ":n=t._.insert(n," ",i+o.currency.symbol.length-1)}for(i=l.after.length-1;i>=0;i--)switch(l.after[i]){case"$":n=i===l.after.length-1?n+o.currency.symbol:t._.insert(n,o.currency.symbol,-(l.after.length-(1+i)));break;case" ":n=i===l.after.length-1?n+" ":t._.insert(n," ",-(l.after.length-(1+i)+o.currency.symbol.length-1))}return n}}),t.register("format","exponential",{regexps:{format:/(e\+|e-)/,unformat:/(e\+|e-)/},format:function(e,r,a){var n=("number"!=typeof e||t._.isNaN(e)?"0e+0":e.toExponential()).split("e");return r=r.replace(/e[\+|\-]{1}0/,""),t._.numberToFormat(Number(n[0]),r,a)+"e"+n[1]},unformat:function(e){var r=t._.includes(e,"e+")?e.split("e+"):e.split("e-"),a=Number(r[0]),n=Number(r[1]);return n=t._.includes(e,"e-")?n*=-1:n,t._.reduce([a,Math.pow(10,n)],function(e,r,a,n){var i=t._.correctionFactor(e,r);return e*i*(r*i)/(i*i)},1)}}),t.register("format","ordinal",{regexps:{format:/(o)/},format:function(e,r,a){var n=t.locales[t.options.currentLocale],i=t._.includes(r," o")?" ":"";return r=r.replace(/\s?o/,""),i+=n.ordinal(e),t._.numberToFormat(e,r,a)+i}}),t.register("format","percentage",{regexps:{format:/(%)/,unformat:/(%)/},format:function(e,r,a){var n,i=t._.includes(r," %")?" ":"";return t.options.scalePercentBy100&&(e*=100),r=r.replace(/\s?\%/,""),n=t._.numberToFormat(e,r,a),t._.includes(n,")")?((n=n.split("")).splice(-1,0,i+"%"),n=n.join("")):n=n+i+"%",n},unformat:function(e){var r=t._.stringToNumber(e);return t.options.scalePercentBy100?.01*r:r}}),t.register("format","time",{regexps:{format:/(:)/,unformat:/(:)/},format:function(t,e,r){var a=Math.floor(t/60/60),n=Math.floor((t-60*a*60)/60),i=Math.round(t-60*a*60-60*n);return a+":"+(n<10?"0"+n:n)+":"+(i<10?"0"+i:i)},unformat:function(t){var e=t.split(":"),r=0;return 3===e.length?(r+=60*Number(e[0])*60,r+=60*Number(e[1]),r+=Number(e[2])):2===e.length&&(r+=60*Number(e[0]),r+=Number(e[1])),Number(r)}}),t})?a.call(e,r,e,t):a)||(t.exports=n)},d7eZ:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=r("S7rL");function n(t){"@babel/helpers - typeof";return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function i(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),r.push.apply(r,a)}return r}function o(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?i(Object(r),!0).forEach(function(e){l(t,e,r[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))})}return t}function l(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function s(t){return function(t){if(Array.isArray(t))return c(t)}(t)||function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||function(t,e){if(!t)return;if("string"==typeof t)return c(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);"Object"===r&&t.constructor&&(r=t.constructor.name);if("Map"===r||"Set"===r)return Array.from(t);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return c(t,e)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function c(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,a=new Array(e);r<e;r++)a[r]=t[r];return a}e.default={data:function(){return{loading:!1,isUserValid:0,pivotModel:{analytic_type:0,col:null,row:null,aggregation:"sum"},aggVals:[],info:{total:0,currenPage:1,paginate:50},aggregations:[{label:"Нийлбэр дүнгээр харуулах",val:"sum"},{label:"Дунджаар дүнгээр харуулах",val:"avg"}],dataList:[],header:[],barChartHeader:[],barChartData:[],detail:null,chart:{legend:[],data:[],width:300},analytic_types:[],filters:[],range_filters:[],rows:[],columns:[],range_columns:[],range_rows:[],filterData:{}}},computed:{pivotFields:function(){var t=this,e=this.rows.filter(function(e){return e.analytic_id==t.pivotModel.analytic_type}),r=[];return this.range_rows.map(function(e){e.analytic_id==t.pivotModel.analytic_type&&(e.id="range_".concat(e.id),r.push(e))}),[].concat(s(e),r)},pivotFieldsCol:function(){var t=this,e=this.columns.filter(function(e){return e.analytic_id==t.pivotModel.analytic_type}),r=[];return this.range_columns.map(function(e){e.analytic_id==t.pivotModel.analytic_type&&(e.id="range_".concat(e.id),r.push(e))}),[].concat(s(e),r)},pieChartOption:function(){if(this.dataList.length>=21){var t=0;return this.chart.data.map(function(e){t+=e.value}),{toolbox:{feature:{restore:{show:!0},saveAsImage:{show:!0}}},grid:{left:0,right:0,bottom:"3%",containLabel:!0},tooltip:{trigger:"item",formatter:function(e){var r=Math.round(e.data.value/(t/100)*100)/100;return"".concat(e.data.name,": ").concat(r,"% <br> ").concat(Object(a.a)(e.data.value))}},legend:{type:"scroll",orient:"horizontal",data:this.chart.legend,bottom:"bottom"},series:[{name:this.header,type:"treemap",radius:"55%",center:["50%","60%"],data:this.chart.data,itemStyle:{normal:{label:{formatter:function(e){var r=Math.round(e.data.value/(t/100)*100)/100;return"".concat(e.data.name,": ").concat(r,"%, ").concat(Object(a.a)(e.data.value))},textStyle:{baseline:"top"}}}}}]}}return{toolbox:{feature:{restore:{show:!0},saveAsImage:{show:!0}}},grid:{left:0,right:0,bottom:"3%",containLabel:!0},tooltip:{trigger:"item",formatter:"{a} <br/>{b} : {c} ({d}%)"},legend:{type:"scroll",orient:"horizontal",data:this.chart.legend,bottom:"bottom"},series:[{name:this.header,type:"pie",radius:"55%",center:["50%","50%"],data:this.chart.data,itemStyle:{emphasis:{shadowBlur:10,shadowOffsetX:0,shadowColor:"rgba(0, 0, 0, 0.5)"}},label:{normal:{formatter:function(t){return t.name.length>15?t.name.substring(0,12)+"...":t.name},show:!0,position:"top"}}}]}},barChartOption:function(){return{toolbox:{feature:{magicType:{show:!0,type:["line","bar"]},restore:{show:!0},saveAsImage:{show:!0}}},tooltip:{trigger:"axis",axisPointer:{type:"shadow"}},legend:{bottom:"bottom",type:"scroll",orient:"horizontal",data:this.chart.legend},grid:{left:"3%",right:"4%",bottom:"10%",containLabel:!0},xAxis:[{type:"category",data:this.barChartHeader,axisLabel:{interval:0,rotate:70},drawTicks:!0}],yAxis:[{type:"value"}],series:this.chart.data}}},created:function(){this.getData()},methods:{isShow:function(t,e){if(""==e.parent_value||void 0===e.parent_value)return!0;var r=this.filters.findIndex(function(e){return e.filter_field==t.source_parent_felld});return r>=0&&this.filters[r].value==e.parent_value},isNumeric:function(t){return/^\d+$/.test(t)},showNumber:function(t){return this.isNumeric(t)?Object(a.a)(t):t},download:function(){var t=[],e=this.header.join(", ");t.push(e+"\r\n"),this.dataList.forEach(function(e){var r=e.map(function(t){return"number"==typeof t?t:'"'.concat(t,'"')});t.push(r.join(", ")+"\r\n")});var r="\ufeff"+t.join(""),a=document.createElement("a");a.href="data:text/csv;charset=utf-8,"+encodeURI(r),a.target="_blank",a.download="Анализ.csv",a.click()},getData:function(){var t=this;axios({method:"GET",url:"/analytics/data"}).then(function(e){t.analytic_types=e.data.analytics,t.filters=e.data.filters.map(function(t){return t.value=null,t}),t.range_filters=e.data.range_filters.map(function(t){return t.value=[0,0],t}),t.rows=e.data.rows_columns.filter(function(t){return"row"==t.col_or_row}),t.columns=e.data.rows_columns.filter(function(t){return"column"==t.col_or_row}),t.range_rows=e.data.range_rows_columns.filter(function(t){return"row"==t.col_or_row}),t.range_columns=e.data.range_rows_columns.filter(function(t){return"column"==t.col_or_row}),t.analytic_types.length>=1&&(t.pivotModel.analytic_type=t.analytic_types[0].id),t.getFilterData()})},getFilterData:function(){var t=this,e={};this.filters.forEach(function(t){e[t.source]={table:t.source,key:t.value_feild,fields:[t.name_feild],sortField:t.name_feild,sortOrder:"asc",multiple:!1,filter:"",parentFieldOfForm:t.source_parent_felld,parentFieldOfTable:t.parent_feild}}),axios({method:"POST",url:"/lambda/puzzle/get_options",data:{relations:e}}).then(function(e){t.filterData=e.data})},getDuureg:function(){var t=this;axios.get("/analytics/duureg").then(function(e){t.duureg=e.data})},getJil:function(){var t=this;axios.get("/analytics/jil").then(function(e){t.jil=e.data})},getKhoroo:function(t){var e=this;axios.get("/analytics/khoroo/"+t).then(function(t){e.regions=t.data})},getAngilal:function(t){var e=this;axios.get("/analytics/angilal/"+t).then(function(t){e.angilal=t.data})},GetMajor:function(t){var e=this;axios.get("/analytics/tp_name/"+t).then(function(t){e.tp_names=t.data})},getKheseg:function(t){var e=this;axios.get("/analytics/kheseg/"+t).then(function(t){e.kheseg=t.data})},getMineral:function(){var t=this;axios.get("/analytics/mineral").then(function(e){t.mineral=e.data})},get_nohorlol_horshoo:function(){var t=this;axios.get("/analytics/nohorlol_horshoo/").then(function(e){t.nohorlol_horshoo=e.data})},pivot:function(){var t=this;if(this.loading=!0,null==this.pivotModel.row)return this.$Message.error("Pivot мөрийн утгыг сонгоно уу"),!1;axios.post("/analytics/pivot",o(o({},this.pivotModel),{},{filters:this.filters,range_filters:this.range_filters})).then(function(e){e.data.data.length>=21?t.dataList=e.data.data.filter(function(t){return t[1]>=1}):t.dataList=e.data.data,t.header=e.data.header,null==t.pivotModel.col?t.drawPieChart(t.dataList):t.drawBarChart(e.data.data,e.data.header),t.setAggVals(),t.loading=!1})},setAggVals:function(){var t=this;this.aggVals=[],this.dataList.forEach(function(e){for(var r=1;r<e.length;r++)void 0==t.aggVals[r-1]?t.aggVals[r-1]=parseInt(e[r]):t.aggVals[r-1]+=parseInt(e[r])})},drawBarChart:function(t,e){var r=this;this.chart={legend:[],data:[]},this.barChartHeader=[];for(var a=1;a<e.length-1;a++)this.barChartHeader.push(e[a]);t.forEach(function(t){var e=t[0];r.chart.legend.push(e);for(var a=[],n=1;n<t.length-1;n++)a.push(t[n]);var i={name:e,type:"bar",data:a};r.chart.data.push(i)});var i=document.getElementById("chart"),o=echarts.init(i,"macarons");this.barChartOption&&"object"===n(this.barChartOption)&&o.setOption(this.barChartOption,!0)},drawPieChart:function(t){var e=this;this.header.length>10&&(this.chart.width=550),this.chart={legend:[],data:[]},t.forEach(function(t){t[1]>=1&&(e.chart.legend.push(t[0]),e.chart.data.push({value:t[1],name:t[0]}))});var r=document.getElementById("chart"),a=echarts.init(r,"macarons");this.pieChartOption&&"object"===n(this.pieChartOption)&&a.setOption(this.pieChartOption,!0)}}}},k3r7:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=r("I3G/"),n=r.n(a);window.Vue=n.a,n.a.config.productionTip=!1;var i=r("F2oB"),o={Analytic:r.n(i).a},l=function t(e,r){t.installed||Object.keys(o).forEach(function(t){return e.component(t,o[t])})};"undefined"!=typeof window&&window.Vue&&l(window.Vue);e.default=l}},[8]);