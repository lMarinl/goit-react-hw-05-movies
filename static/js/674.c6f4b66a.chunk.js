"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[674],{674:function(e,t,n){n.r(t),n.d(t,{default:function(){return Z}});var r=n(861),a=n(439),c=n(757),o=n.n(c),u=n(791),i=n(689),s=n(87),f=n(94),p=n(874),m=n(137),d=n(784),h="HomePage_homePageContainer__TbjDn",l="HomePage_moviesList__8MbkQ",v="HomePage_moviePoster__XM9e7",g="HomePage_title__UFLA3",x="HomePage_movieItem__aRKUY",_="HomePage_linkMovie__plWPB",k=n(184),Z=function(){var e=(0,u.useState)([]),t=(0,a.Z)(e,2),n=t[0],c=t[1],Z=(0,u.useState)(m.n.idle),w=(0,a.Z)(Z,2),b=w[0],y=w[1],N=(0,i.TH)();return(0,u.useEffect)((function(){var e=function(){var e=(0,r.Z)(o().mark((function e(){var t;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,y(m.n.pending),e.next=4,(0,p.Z$)();case 4:t=e.sent,c(t),y(m.n.success),e.next=13;break;case 9:e.prev=9,e.t0=e.catch(0),y(m.n.error),(0,f.Am)("error");case 13:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(){return e.apply(this,arguments)}}();e()}),[]),(0,k.jsxs)("div",{className:h,children:[(0,k.jsx)("h1",{className:g,children:"Trending today"}),b===m.n.pending&&(0,k.jsx)(d.a,{}),b===m.n.success&&(0,k.jsx)("ul",{className:l,children:null===n||void 0===n?void 0:n.map((function(e){return(0,k.jsxs)("li",{className:x,children:[(0,k.jsx)(s.rU,{state:{from:N},to:"/movies/".concat(e.id),children:(0,k.jsx)("img",{className:v,alt:e.title||e.name,src:(0,p.Qk)(e.poster_path),width:"280",height:"420"})}),(0,k.jsx)(s.rU,{className:_,state:{from:N},to:"/movies/".concat(e.id),children:e.title})]},e.id)}))}),b===m.n.error&&f.Am.error("Something")]})}},874:function(e,t,n){n.d(t,{Ge:function(){return p},NL:function(){return l},Qk:function(){return h},Re:function(){return m},Z$:function(){return s},cZ:function(){return f},h7:function(){return d}});var r=n(861),a=n(757),c=n.n(a),o=n(294),u="https://api.themoviedb.org/3",i="Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0ZTFmMzU4YmQ2M2EyYmU3NWE4YWQyMjkyYWY2YzZhNyIsInN1YiI6IjY1YjJjZGRmYTE5OWE2MDEzMDlkODI0NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.gKuoVXR1zDkeNXO0X4Y2B4kmtoFve3Fd86OxTgvUEzk";o.Z.defaults.headers.common.Authorization=i;var s=function(){var e=(0,r.Z)(c().mark((function e(){var t,n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.Z.get("".concat(u,"/trending/movie/day"));case 2:return t=e.sent,n=t.data,e.abrupt("return",n.results);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),f=function(){var e=(0,r.Z)(c().mark((function e(t){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.Z.get("".concat(u,"/search/movie?query=").concat(t));case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),p=function(){var e=(0,r.Z)(c().mark((function e(t){var n,r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.Z.get("".concat(u,"/movie/").concat(t));case 2:return n=e.sent,r=n.data,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),m=function(){var e=(0,r.Z)(c().mark((function e(t){var n,r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.Z.get("".concat(u,"/movie/").concat(t,"/credits"));case 2:return n=e.sent,r=n.data,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),d=function(){var e=(0,r.Z)(c().mark((function e(t){var n,r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.Z.get("".concat(u,"/movie/").concat(t,"/reviews"));case 2:return n=e.sent,r=n.data,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),h=function(e){return e?"https://media.themoviedb.org/t/p/w440_and_h660_face/".concat(e):"https://fakeimg.pl/400x600?text=No+image&font=bebas"},l=function(e){return e?"https://image.tmdb.org/t/p/w200".concat(e):"https://fakeimg.pl/400x600?text=No+image&font=bebas"}},137:function(e,t,n){n.d(t,{n:function(){return r}});var r={idle:"idle",pending:"pending",success:"success",error:"error"}}}]);
//# sourceMappingURL=674.c6f4b66a.chunk.js.map