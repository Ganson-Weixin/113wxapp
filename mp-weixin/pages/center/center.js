(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/center/center"],{"0882":function(t,e,n){},"19a0":function(t,e,n){"use strict";n.r(e);var a=n("95c2"),r=n.n(a);for(var u in a)"default"!==u&&function(t){n.d(e,t,(function(){return a[t]}))}(u);e["default"]=r.a},"260f":function(t,e,n){"use strict";(function(t){n("ba58"),n("921b");a(n("66fd"));var e=a(n("762a"));function a(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("543d")["createPage"])},"762a":function(t,e,n){"use strict";n.r(e);var a=n("e869"),r=n("19a0");for(var u in r)"default"!==u&&function(t){n.d(e,t,(function(){return r[t]}))}(u);n("b41a");var i,o=n("f0c5"),c=Object(o["a"])(r["default"],a["b"],a["c"],!1,null,null,null,!1,a["a"],i);e["default"]=c.exports},"95c2":function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=u(n("a34a")),r=u(n("9ceb"));function u(t){return t&&t.__esModule?t:{default:t}}function i(t,e,n,a,r,u,i){try{var o=t[u](i),c=o.value}catch(s){return void n(s)}o.done?e(c):Promise.resolve(c).then(a,r)}function o(t){return function(){var e=this,n=arguments;return new Promise((function(a,r){var u=t.apply(e,n);function o(t){i(u,a,r,o,c,"next",t)}function c(t){i(u,a,r,o,c,"throw",t)}o(void 0)}))}}var c={data:function(){return{isH5Plus:!0,user:{},tableName:"",role:"",menuList:[]}},onLoad:function(){var e=o(a.default.mark((function e(){var n,u,i;return a.default.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return this.role=t.getStorageSync("role"),n=t.getStorageSync("nowTable"),e.next=4,this.$api.session(n);case 4:u=e.sent,this.user=u.data,this.tableName=n,i=r.default.list(),this.menuList=i;case 9:case"end":return e.stop()}}),e,this)})));function n(){return e.apply(this,arguments)}return n}(),onShow:function(){var e=o(a.default.mark((function e(){var n,u,i;return a.default.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return this.role=t.getStorageSync("role"),n=t.getStorageSync("nowTable"),e.next=4,this.$api.session(n);case 4:u=e.sent,this.user=u.data,this.tableName=n,i=r.default.list(),this.menuList=i;case 9:case"end":return e.stop()}}),e,this)})));function n(){return e.apply(this,arguments)}return n}(),methods:{onPageTap:function(e){t.navigateTo({url:e,fail:function(){t.switchTab({url:e})}})}}};e.default=c}).call(this,n("543d")["default"])},b41a:function(t,e,n){"use strict";var a=n("0882"),r=n.n(a);r.a},e869:function(t,e,n){"use strict";var a,r=function(){var t=this,e=t.$createElement;t._self._c},u=[];n.d(e,"b",(function(){return r})),n.d(e,"c",(function(){return u})),n.d(e,"a",(function(){return a}))}},[["260f","common/runtime","common/vendor"]]]);