"use strict";(self.webpackChunktaniarascia_com=self.webpackChunktaniarascia_com||[]).push([[187],{2382:function(e,t,n){n.r(t),n.d(t,{default:function(){return d}});var a=n(4506),r=n(6540),c=n(3673),o=n(1015),i=n(8335),s=n(2504),l=n(5179),u=n(7613),m=n(6782);function d(e){let{data:t}=e;const n=t.tags.group,u="Topics",d=(0,r.useMemo)((()=>n.reduce(((e,t)=>{const n=t.name.charAt(0),r=e[n]?[].concat((0,a.A)(e[n]),[t]):[t];return{...e,[n]:r}}),{})),[n]);return r.createElement(r.Fragment,null,r.createElement(c.m,{title:`${u} | ${i.A.siteTitle}`}),r.createElement(l.M,null,r.createElement(m.l,{title:u}),Object.entries(d).map((e=>{let[t,n]=e;return r.createElement("div",{key:t,className:"alphabetical-tags"},r.createElement("h3",null,t.toUpperCase()),r.createElement("div",{className:"tags"},n.map((e=>r.createElement(o.Link,{key:e.name,to:`/topics/${(0,s.Yv)(e.name)}`,className:"button small",activeClassName:"active"},r.createElement("span",null,e.name),r.createElement("span",{className:"tag-count"},e.totalCount))))))}))))}d.Layout=u.P},2504:function(e,t,n){function a(e,t){return void 0===t&&(t={}),e.map((e=>({id:e.node.id,date:e.node.frontmatter.date,slug:e.node.fields.slug,tags:e.node.frontmatter.tags,categories:e.node.frontmatter.categories,title:e.node.frontmatter.title,description:e.node.frontmatter.description})))}function r(e){return e&&`${e}`.match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g).map((e=>e.toLowerCase())).join("-")}function c(e,t){void 0===t&&(t=2);const n=e.split(" ");return n[1].startsWith("0")?n[1]=n[1].slice(1,2):n[1]=n[1].slice(0,2),1===t||(n[1]+=","),n[0]+" "+n[t]}function o(e){const t=new Date(e),n=new Date,a=Math.abs(n-t);if(Math.floor(a/864e5)<50)return!0}n.d(t,{GQ:function(){return a},Yv:function(){return r},po:function(){return c},vw:function(){return o}})},5179:function(e,t,n){n.d(t,{M:function(){return r}});var a=n(6540);const r=e=>{let{children:t}=e;return a.createElement("main",{className:"main-content page"},t)}}}]);
//# sourceMappingURL=component---src-pages-topics-js-20fe7789c5122f3e3b28.js.map