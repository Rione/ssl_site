(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[922],{592:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/posts/[slug]",function(){return r(2409)}])},3593:function(e,t,r){"use strict";r.d(t,{E:function(){return l}});var n=r(5893),s=r(7294),a=r(1891);function c(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){if(null==e)return{};var r,n,s=function(e,t){if(null==e)return{};var r,n,s={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(s[r]=e[r]);return s}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(s[r]=e[r])}return s}var l=s.forwardRef((function(e,t){var r=e.children,s=e.src,l=e.alt,o=i(e,["children","src","alt"]),u=(0,a.O)()+s;return(0,n.jsx)("img",function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){c(e,t,r[t])}))}return e}({src:u,alt:l},o,{ref:t,children:r}))}));l.displayName="Image"},6965:function(e,t,r){"use strict";r.d(t,{N:function(){return i}});var n=r(5893),s=r(3593),a=r(4929),c=r(4759),i=function(){return(0,n.jsxs)("div",{className:"mb-30 vstack items-center gap-5 p-6 bg-primary-1",children:[(0,n.jsxs)("div",{className:"vstack items-center gap-2",children:[(0,n.jsx)(s.E,{className:"object-cover w-28 h-28 rounded-full",alt:"avatar",src:"/assets/79553411.jpeg"}),(0,n.jsx)("h1",{className:"text-2xl font-semibold text-primary-1",children:"Yuki Ishida"})]}),(0,n.jsx)("p",{className:"text-primary-1 text-center",children:"I am a student at Ritsumeikan University majoring in Information Science and Security."}),(0,n.jsx)("div",{className:"flex gap-4",children:c.e.map((function(e){var t=e.href,r=e.icon,s=e.label;return(0,n.jsx)(a.r,{href:t,passHref:!0,children:(0,n.jsx)("a",{className:"text-primary-1","aria-label":s,children:r})},t)}))})]})}},2409:function(e,t,r){"use strict";r.r(t),r.d(t,{__N_SSG:function(){return L},default:function(){return M}});var n=r(5893),s=r(2962),a=r(8441),c=r(6965),i=r(702),l=r.n(i),o=function(e){var t=e.content;return(0,n.jsx)("div",{className:"post",children:(0,n.jsx)("div",{className:l().markdown,dangerouslySetInnerHTML:{__html:t}})})},u=r(8193),d=r(9352),f=function(e){return new Date(e).toLocaleDateString("ja-JP",{year:"numeric",month:"2-digit",day:"2-digit"})},m=function(e){var t=e.date;return(0,n.jsxs)("div",{className:"",children:[(0,n.jsx)(d.N$g,{}),f(t)]})},p=r(3593),x=r(4929),j=function(e){var t=e.title,r=e.coverImage,s=e.date,a=e.tags;return(0,n.jsxs)("div",{className:"vstack gap-4",children:[(0,n.jsx)("div",{className:"sm:w-full sm:h-64 sm:h-80",children:(0,n.jsx)(p.E,{src:r,alt:"Cover Image for ".concat(t),className:"w-full h-full object-cover"})}),(0,n.jsx)("h1",{className:"text-primary-1 text-3xl md:text-4xl font-bold tracking-tighter leading-tight",children:t}),(0,n.jsxs)("div",{className:"wrap gap-4",children:[(0,n.jsx)(m,{date:s}),(0,n.jsxs)("div",{className:"wrap gap-2",children:[(0,n.jsx)("span",{className:"text-primary-1",children:(0,n.jsx)(u.EhI,{})}),a.map((function(e){return(0,n.jsx)(x.r,{href:"/tags/".concat(e),passHref:!0,children:(0,n.jsx)("a",{className:"badge",children:e})},e)}))]})]})]})},h=function(e){var t=e.post,r=t.title,s=t.coverImage,a=t.date,c=t.tags,i=t.content;return(0,n.jsxs)("div",{className:"p-4 sm:p-8 bg-primary-1",children:[(0,n.jsx)(j,{title:r,coverImage:s,date:a,tags:c}),(0,n.jsx)(o,{content:i})]})},g=r(1366),v=r(4493),b=r(6616),y=r(7385),N=r(6573),w=r(1020),O=r(7074),k=r(859),_=r(1860),P=r(5390),S=r(5434),E=r(6786);function I(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function Z(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){I(e,t,r[t])}))}return e}var D=function(e){var t=e.post,r=t.title,s=t.slug,a=t.ogImage,c="".concat(E.m,"/posts/").concat(s),i={title:r,url:c},l=t.tags.map((function(e){return e.split(" ")[0]}));return(0,n.jsxs)("div",{className:"vstack gap-3 p-6 bg-primary-1",children:[(0,n.jsxs)("div",{className:"center gap-2 py-2 px-3 text-lg font-bold text-primary-1 uppercase",children:[(0,n.jsx)(S.KQY,{}),"share"]}),(0,n.jsxs)("div",{className:"w-full center gap-4",children:[(0,n.jsx)(g.Z,Z({},i,{media:a.url,children:(0,n.jsx)(v.Z,{size:40,round:!0})})),(0,n.jsx)(b.Z,{title:r,url:c,via:E.p,related:[E.p,"Next.js"],hashtags:l,children:(0,n.jsx)(y.Z,{size:40,round:!0})}),(0,n.jsx)(N.Z,Z({},i,{children:(0,n.jsx)(w.Z,{size:40,round:!0})})),(0,n.jsx)(O.Z,Z({},i,{children:(0,n.jsx)(k.Z,{size:40,round:!0})})),(0,n.jsx)(_.Z,Z({},i,{children:(0,n.jsx)(P.Z,{size:40,round:!0})}))]})]})},z=r(7294),C=r(2866),H=r.n(C),K=function(){return(0,z.useEffect)((function(){return H().init({tocSelector:".toc",contentSelector:".post",headingSelector:"h1, h2, h3",scrollSmoothOffset:-80}),function(){return H().destroy()}}),[]),(0,n.jsxs)("div",{className:"vstack gap-3 p-6 bg-primary-1",children:[(0,n.jsx)("div",{className:"center",children:(0,n.jsxs)("div",{className:"center gap-2 py-2 px-3 border-b-2 border-teal-700 dark:border-teal-400 text-base font-bold text-primary-1",children:[(0,n.jsx)(S.twx,{}),"\u76ee\u6b21"]})}),(0,n.jsx)("nav",{className:"toc"})]})},T=r(7377),B=r(2863),G=function(e){var t=e.post,r=(0,T.P)("lg"),i=(0,B.V)(E.m,t.ogImage.url);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.PB,{title:t.title,description:t.excerpt,openGraph:{url:E.m,title:t.title,description:t.excerpt,images:[{url:i}]}}),(0,n.jsx)(a.Z,{main:(0,n.jsx)("article",{className:"mt-n30",children:(0,n.jsx)(h,{post:t})}),aside:(0,n.jsxs)("div",{className:"vstack gap-6 h-full",children:[(0,n.jsx)(c.N,{}),(0,n.jsxs)("div",{className:"vstack gap-10 sticky top-20",children:[r&&(0,n.jsx)(K,{}),(0,n.jsx)(D,{post:t})]})]}),hamburgerMenu:(0,n.jsx)("div",{role:"button",tabIndex:0,onClick:function(){return document.dispatchEvent(new KeyboardEvent("keydown",{key:"Escape"}))},onKeyDown:function(){},className:"overflow-y-auto cursor-default",children:(0,n.jsx)(K,{})})})]})};function J(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var L=!0,M=function(e){return(0,n.jsx)(G,function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){J(e,t,r[t])}))}return e}({},e))}},702:function(e){e.exports={markdown:"markdown-styles_markdown__BegJd"}}},function(e){e.O(0,[228,585,774,888,179],(function(){return t=592,e(e.s=t);var t}));var t=e.O();_N_E=t}]);