"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[804],{804:function(n,t,e){e.r(t);var r=e(861),c=e(439),a=e(757),u=e.n(a),i=e(791),o=e(689),s=e(87),f=e(66),p=e(184);t.default=function(){var n,t,e=(0,o.UO)().movieId,a=(0,i.useState)({poster_path:null,title:"",overview:""}),v=(0,c.Z)(a,2),h=v[0],l=v[1];(0,i.useEffect)((function(){var n=function(){var n=(0,r.Z)(u().mark((function n(){var t;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,(0,f.Y5)(e);case 2:t=n.sent,l(t);case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();n()}),[e]);var d=(0,o.TH)(),x=(0,i.useRef)(null!==(n=null===(t=d.state)||void 0===t?void 0:t.from)&&void 0!==n?n:"/");return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(s.rU,{to:x.current,children:"\u041d\u0430\u0437\u0430\u0434"}),(0,p.jsx)("h1",{children:h.title}),(0,p.jsx)("img",{src:"https://image.tmdb.org/t/p/w500".concat(h.poster_path),alt:h.title,width:300}),(0,p.jsx)("p",{children:h.overview}),(0,p.jsxs)("ul",{children:[(0,p.jsx)("li",{children:(0,p.jsx)(s.rU,{to:"cast",children:"Cast"})}),(0,p.jsx)("li",{children:(0,p.jsx)(s.rU,{to:"reviews",children:"Reviews"})})]}),(0,p.jsx)(i.Suspense,{fallback:(0,p.jsx)("div",{children:"LOADING SUBPAGE..."}),children:(0,p.jsx)(o.j3,{})})]})}},66:function(n,t,e){e.d(t,{Hx:function(){return h},Y5:function(){return p},bI:function(){return s},uV:function(){return v}});var r=e(861),c=e(757),a=e.n(c),u="https://api.themoviedb.org/3/",i="e5bfb55386b809202657051ad29d231c";function o(){return(o=(0,r.Z)(a().mark((function n(){var t;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("".concat(u,"trending/movie/week?api_key=").concat(i,"&page=1"));case 2:return t=n.sent,n.abrupt("return",t.json());case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function s(n){return f.apply(this,arguments)}function f(){return(f=(0,r.Z)(a().mark((function n(t){var e;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("".concat(u,"search/movie?api_key=").concat(i,"&query=").concat(t));case 2:return e=n.sent,n.abrupt("return",e.json());case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}t.ZP=function(){return o.apply(this,arguments)};var p=function(){var n=(0,r.Z)(a().mark((function n(t){var e;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("".concat(u,"movie/").concat(t,"?api_key=").concat(i));case 2:return e=n.sent,n.abrupt("return",e.json());case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),v=function(){var n=(0,r.Z)(a().mark((function n(t){var e;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("".concat(u,"movie/").concat(t,"/credits?api_key=").concat(i));case 2:return e=n.sent,n.abrupt("return",e.json());case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),h=function(){var n=(0,r.Z)(a().mark((function n(t){var e;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("".concat(u,"movie/").concat(t,"/reviews?api_key=").concat(i));case 2:return e=n.sent,n.abrupt("return",e.json());case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}()},861:function(n,t,e){function r(n,t,e,r,c,a,u){try{var i=n[a](u),o=i.value}catch(s){return void e(s)}i.done?t(o):Promise.resolve(o).then(r,c)}function c(n){return function(){var t=this,e=arguments;return new Promise((function(c,a){var u=n.apply(t,e);function i(n){r(u,c,a,i,o,"next",n)}function o(n){r(u,c,a,i,o,"throw",n)}i(void 0)}))}}e.d(t,{Z:function(){return c}})}}]);
//# sourceMappingURL=804.7c53351b.chunk.js.map