"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[314],{314:function(n,t,e){e.r(t),e.d(t,{default:function(){return h}});var r=e(861),c=e(439),u=e(757),a=e.n(u),o=e(791),i=e(87),s=e(689),f=e(66),p=e(184),v=function(n){var t=n.value,e=n.onChange,r=n.onSubmit;return(0,p.jsx)("form",{onSubmit:r,children:(0,p.jsx)("input",{placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043d\u0430\u0437\u0432\u0430\u043d\u0438\u0435",type:"text",value:t,onChange:e})})},h=function(){var n,t,e=(0,o.useState)([]),u=(0,c.Z)(e,2),h=u[0],l=u[1],d=(0,i.lr)(),m=(0,c.Z)(d,2),x=m[0],w=m[1],y=(0,o.useState)(null!==(n=x.get("query"))&&void 0!==n?n:""),k=(0,c.Z)(y,2),b=k[0],g=k[1],j=null!==(t=x.get("query"))&&void 0!==t?t:"",_=(0,s.TH)();(0,o.useEffect)((function(){if(""!==b){var n=function(){var n=(0,r.Z)(a().mark((function n(){var t;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,(0,f.bI)(b);case 3:t=n.sent,l(t.results),n.next=10;break;case 7:n.prev=7,n.t0=n.catch(0),console.log(n.t0);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(){return n.apply(this,arguments)}}();n()}}),[b]);var Z=function(){var n=(0,r.Z)(a().mark((function n(t){return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:t.preventDefault(),g(j);case 2:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),C=0===h.length&&b===j&&""!==b;return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(v,{onSubmit:Z,value:j,onChange:function(n){if(""===n.target.value)return w({});w({query:n.target.value})}}),h&&(0,p.jsx)("ul",{children:h.map((function(n){var t=n.title,e=n.id;return(0,p.jsx)("li",{children:(0,p.jsx)(i.rU,{to:"/movies/".concat(e),state:{from:_},children:t})},e)}))}),C&&(0,p.jsx)("p",{children:"\u0422\u0430\u043a\u043e\u0433\u043e \u0444\u0438\u043b\u044c\u043c\u0430 \u043d\u0435\u0442"})]})}},66:function(n,t,e){e.d(t,{Hx:function(){return h},Y5:function(){return p},bI:function(){return s},uV:function(){return v}});var r=e(861),c=e(757),u=e.n(c),a="https://api.themoviedb.org/3/",o="e5bfb55386b809202657051ad29d231c";function i(){return(i=(0,r.Z)(u().mark((function n(){var t;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("".concat(a,"trending/movie/week?api_key=").concat(o,"&page=1"));case 2:return t=n.sent,n.abrupt("return",t.json());case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function s(n){return f.apply(this,arguments)}function f(){return(f=(0,r.Z)(u().mark((function n(t){var e;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("".concat(a,"search/movie?api_key=").concat(o,"&query=").concat(t));case 2:return e=n.sent,n.abrupt("return",e.json());case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}t.ZP=function(){return i.apply(this,arguments)};var p=function(){var n=(0,r.Z)(u().mark((function n(t){var e;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("".concat(a,"movie/").concat(t,"?api_key=").concat(o));case 2:return e=n.sent,n.abrupt("return",e.json());case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),v=function(){var n=(0,r.Z)(u().mark((function n(t){var e;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("".concat(a,"movie/").concat(t,"/credits?api_key=").concat(o));case 2:return e=n.sent,n.abrupt("return",e.json());case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),h=function(){var n=(0,r.Z)(u().mark((function n(t){var e;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("".concat(a,"movie/").concat(t,"/reviews?api_key=").concat(o));case 2:return e=n.sent,n.abrupt("return",e.json());case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}()},861:function(n,t,e){function r(n,t,e,r,c,u,a){try{var o=n[u](a),i=o.value}catch(s){return void e(s)}o.done?t(i):Promise.resolve(i).then(r,c)}function c(n){return function(){var t=this,e=arguments;return new Promise((function(c,u){var a=n.apply(t,e);function o(n){r(a,c,u,o,i,"next",n)}function i(n){r(a,c,u,o,i,"throw",n)}o(void 0)}))}}e.d(t,{Z:function(){return c}})}}]);
//# sourceMappingURL=314.8344c62d.chunk.js.map