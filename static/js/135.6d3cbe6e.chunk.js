"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[135],{135:function(e,n,t){t.r(n),t.d(n,{default:function(){return j}});var r=t(861),c=t(439),a=t(757),i=t.n(a),s=t(791),u=t(689),o=t(87),f=t(874),d=t(94),l=t(137),p=t(784),h={},v=t(184),m=(0,s.lazy)((function(){return t.e(76).then(t.bind(t,76))})),x=(0,s.lazy)((function(){return t.e(186).then(t.bind(t,186))})),j=function(){var e,n,t=(0,u.TH)(),a=(0,u.UO)().id,j=(0,s.useState)(null),k=(0,c.Z)(j,2),w=k[0],g=k[1],Z=(0,s.useState)(l.n.idle),b=(0,c.Z)(Z,2),y=b[0],N=b[1],I=(0,s.useRef)(null!==(e=null===(n=t.state)||void 0===n?void 0:n.from)&&void 0!==e?e:"/movies");return(0,s.useEffect)((function(){var e=function(){var e=(0,r.Z)(i().mark((function e(){var n;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,N(l.n.pending),e.next=4,(0,f.Ge)(a);case 4:n=e.sent,g(n),N(l.n.success),e.next=13;break;case 9:e.prev=9,e.t0=e.catch(0),N(l.n.error),(0,d.Am)("MovieDetails");case 13:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(){return e.apply(this,arguments)}}();e()}),[a]),(0,v.jsxs)("div",{children:[y===l.n.pending&&(0,v.jsx)(p.a,{}),y===l.n.success&&(0,v.jsxs)("div",{children:[(0,v.jsx)(o.rU,{className:h.linkGoBack,to:I.current,children:"Go back"}),(0,v.jsx)("img",{alt:w.title||w.name,src:(0,f.Qk)(w.poster_path),width:"200",height:"300"}),(0,v.jsx)("h3",{children:w.title||w.name}),(0,v.jsxs)("p",{children:["User Score: ",Math.round(10*w.vote_average),"%"]}),(0,v.jsx)("h4",{children:"Overview"}),(0,v.jsx)("p",{children:w.overview}),(0,v.jsx)("h4",{children:"Genres"}),(0,v.jsx)("p",{children:w.genres.map((function(e){return e.name})).join(", ")}),(0,v.jsx)("div",{className:h.line})]}),(0,v.jsx)("h3",{children:"Additional information"}),(0,v.jsx)(o.OL,{className:function(e){var n=e.isActive;return"".concat(h.navlink," ").concat(n?h.active:"")},to:"cast",children:"Cast"}),(0,v.jsx)(o.OL,{className:function(e){var n=e.isActive;return"".concat(h.navlink," ").concat(n?h.active:"")},to:"reviews",children:"Reviews"}),(0,v.jsxs)("div",{children:[(0,v.jsx)("div",{className:h.line}),(0,v.jsx)(s.Suspense,{fallback:(0,v.jsx)(p.a,{}),children:(0,v.jsxs)(u.Z5,{children:[(0,v.jsx)(u.AW,{path:"cast",element:(0,v.jsx)(m,{})}),(0,v.jsx)(u.AW,{path:"reviews",element:(0,v.jsx)(x,{})})]})})]})]})}},874:function(e,n,t){t.d(n,{Ge:function(){return d},NL:function(){return v},Qk:function(){return h},Re:function(){return l},Z$:function(){return o},cZ:function(){return f},h7:function(){return p}});var r=t(861),c=t(757),a=t.n(c),i=t(294),s="https://api.themoviedb.org/3",u="Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0ZTFmMzU4YmQ2M2EyYmU3NWE4YWQyMjkyYWY2YzZhNyIsInN1YiI6IjY1YjJjZGRmYTE5OWE2MDEzMDlkODI0NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.gKuoVXR1zDkeNXO0X4Y2B4kmtoFve3Fd86OxTgvUEzk";i.Z.defaults.headers.common.Authorization=u;var o=function(){var e=(0,r.Z)(a().mark((function e(){var n,t;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.Z.get("".concat(s,"/trending/movie/day"));case 2:return n=e.sent,t=n.data,e.abrupt("return",t.results);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),f=function(){var e=(0,r.Z)(a().mark((function e(n){var t;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.Z.get("".concat(s,"/search/movie?query=").concat(n));case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),d=function(){var e=(0,r.Z)(a().mark((function e(n){var t,r;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.Z.get("".concat(s,"/movie/").concat(n));case 2:return t=e.sent,r=t.data,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),l=function(){var e=(0,r.Z)(a().mark((function e(n){var t,r;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.Z.get("".concat(s,"/movie/").concat(n,"/credits"));case 2:return t=e.sent,r=t.data,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),p=function(){var e=(0,r.Z)(a().mark((function e(n){var t,r;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.Z.get("".concat(s,"/movie/").concat(n,"/reviews"));case 2:return t=e.sent,r=t.data,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),h=function(e){return e?"https://media.themoviedb.org/t/p/w440_and_h660_face/".concat(e):"https://fakeimg.pl/400x600?text=No+image&font=bebas"},v=function(e){return e?"https://image.tmdb.org/t/p/w200".concat(e):"https://fakeimg.pl/400x600?text=No+image&font=bebas"}},137:function(e,n,t){t.d(n,{n:function(){return r}});var r={idle:"idle",pending:"pending",success:"success",error:"error"}}}]);
//# sourceMappingURL=135.6d3cbe6e.chunk.js.map