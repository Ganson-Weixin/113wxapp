(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/news-detail/news-detail"],{"06dd":function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var r=u(e("a34a"));function u(t){return t&&t.__esModule?t:{default:t}}function a(t,n,e,r,u,a,i){try{var o=t[a](i),c=o.value}catch(f){return void e(f)}o.done?n(c):Promise.resolve(c).then(r,u)}function i(t){return function(){var n=this,e=arguments;return new Promise((function(r,u){var i=t.apply(n,e);function o(t){a(i,r,u,o,c,"next",t)}function c(t){a(i,r,u,o,c,"throw",t)}o(void 0)}))}}var o={data:function(){return{detail:{},id:""}},onLoad:function(){var t=i(r.default.mark((function t(n){var e;return r.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return this.id=n.id,t.next=3,this.$api.info("news",n.id);case 3:e=t.sent,this.detail=e.data,this.detail.content=this.detail.content.replace(/<img/g,'<img style="width: 100%;"');case 6:case"end":return t.stop()}}),t,this)})));function n(n){return t.apply(this,arguments)}return n}()};n.default=o},3113:function(t,n,e){"use strict";var r=e("864f"),u=e.n(r);u.a},7949:function(t,n,e){"use strict";(function(t){e("ba58"),e("921b");r(e("66fd"));var n=r(e("9a6d"));function r(t){return t&&t.__esModule?t:{default:t}}t(n.default)}).call(this,e("543d")["createPage"])},"864f":function(t,n,e){},"9a6d":function(t,n,e){"use strict";e.r(n);var r=e("bfb8"),u=e("f67f");for(var a in u)"default"!==a&&function(t){e.d(n,t,(function(){return u[t]}))}(a);e("3113");var i,o=e("f0c5"),c=Object(o["a"])(u["default"],r["b"],r["c"],!1,null,"d4644bbe",null,!1,r["a"],i);n["default"]=c.exports},bfb8:function(t,n,e){"use strict";var r,u=function(){var t=this,n=t.$createElement;t._self._c},a=[];e.d(n,"b",(function(){return u})),e.d(n,"c",(function(){return a})),e.d(n,"a",(function(){return r}))},f67f:function(t,n,e){"use strict";e.r(n);var r=e("06dd"),u=e.n(r);for(var a in r)"default"!==a&&function(t){e.d(n,t,(function(){return r[t]}))}(a);n["default"]=u.a}},[["7949","common/runtime","common/vendor"]]]);