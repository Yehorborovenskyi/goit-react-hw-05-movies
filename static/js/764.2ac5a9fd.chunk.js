"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[764],{764:function(n,t,r){r.r(t);var e=r(861),c=r(439),u=r(757),a=r.n(u),o=r(791),i=r(87),s=r(689),f=r(66),p=r(184);t.default=function(){var n,t=(0,o.useState)([]),r=(0,c.Z)(t,2),u=r[0],v=r[1],h=(0,i.lr)(),l=(0,c.Z)(h,2),d=l[0],m=l[1],x=null!==(n=d.get("query"))&&void 0!==n?n:"",y=(0,s.TH)(),w=function(){var n=(0,e.Z)(a().mark((function n(t){var r;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t.preventDefault(),n.next=3,(0,f.bI)(x);case 3:r=n.sent,v(r.results);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}();return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsxs)("form",{onSubmit:function(n){return w(n)},children:[(0,p.jsx)("input",{type:"text",name:"query",value:x,placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043d\u0430\u0437\u0432\u0430\u043d\u0438\u0435",onChange:function(n){return function(n){if(""===n.target.value)return m({});m({query:n.target.value})}(n)}}),(0,p.jsx)("button",{type:"sumbit",children:"Search"})]}),u&&(0,p.jsx)("ul",{children:u.map((function(n){var t=n.title,r=n.id;return(0,p.jsx)("li",{children:(0,p.jsx)(i.rU,{to:"/movies/".concat(r),state:{from:y},children:t})},r)}))})]})}},66:function(n,t,r){r.d(t,{Hx:function(){return h},Y5:function(){return p},bI:function(){return s},uV:function(){return v}});var e=r(861),c=r(757),u=r.n(c),a="https://api.themoviedb.org/3/",o="e5bfb55386b809202657051ad29d231c";function i(){return(i=(0,e.Z)(u().mark((function n(){var t;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("".concat(a,"trending/movie/week?api_key=").concat(o,"&page=1"));case 2:return t=n.sent,n.abrupt("return",t.json());case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function s(n){return f.apply(this,arguments)}function f(){return(f=(0,e.Z)(u().mark((function n(t){var r;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("".concat(a,"search/movie?api_key=").concat(o,"&query=").concat(t));case 2:return r=n.sent,n.abrupt("return",r.json());case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}t.ZP=function(){return i.apply(this,arguments)};var p=function(){var n=(0,e.Z)(u().mark((function n(t){var r;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("".concat(a,"movie/").concat(t,"?api_key=").concat(o));case 2:return r=n.sent,n.abrupt("return",r.json());case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),v=function(){var n=(0,e.Z)(u().mark((function n(t){var r;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("".concat(a,"movie/").concat(t,"/credits?api_key=").concat(o));case 2:return r=n.sent,n.abrupt("return",r.json());case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),h=function(){var n=(0,e.Z)(u().mark((function n(t){var r;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("".concat(a,"movie/").concat(t,"/reviews?api_key=").concat(o));case 2:return r=n.sent,n.abrupt("return",r.json());case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}()},861:function(n,t,r){function e(n,t,r,e,c,u,a){try{var o=n[u](a),i=o.value}catch(s){return void r(s)}o.done?t(i):Promise.resolve(i).then(e,c)}function c(n){return function(){var t=this,r=arguments;return new Promise((function(c,u){var a=n.apply(t,r);function o(n){e(a,c,u,o,i,"next",n)}function i(n){e(a,c,u,o,i,"throw",n)}o(void 0)}))}}r.d(t,{Z:function(){return c}})}}]);
//# sourceMappingURL=764.2ac5a9fd.chunk.js.map