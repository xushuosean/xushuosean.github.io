"use strict";(self.webpackChunktaniarascia_com=self.webpackChunktaniarascia_com||[]).push([[711],{2133:function(e,t,n){n.d(t,{k:function(){return i}});var r=n(6540),a=n(3673),o=n(8335);const i=e=>{let t,n,i,{postNode:c,postPath:s,postSEO:l,customDescription:m}=e,p=o.A.siteLogo;if(l){t=c.frontmatter.title,n=c.excerpt,i=`${o.A.siteUrl}${s}`}else t=o.A.siteTitle,n=m||o.A.description;p=`${o.A.siteUrl}${p}`;const u=[{"@context":"http://schema.org","@type":"WebSite",url:o.A.siteUrl,name:t,alternateName:t}];return l&&u.push({"@context":"http://schema.org","@type":"BreadcrumbList",itemListElement:[{"@type":"ListItem",position:1,item:{"@id":i,name:t,image:p}}]},{"@context":"http://schema.org","@type":"BlogPosting",url:o.A.siteUrl,name:t,alternateName:t,headline:t,image:{"@type":"ImageObject",url:p},description:n}),r.createElement(a.A,null,r.createElement("meta",{name:"description",content:n}),r.createElement("meta",{name:"image",content:p}),r.createElement("script",{type:"application/ld+json"},JSON.stringify(u)),r.createElement("meta",{property:"og:url",content:l?i:o.A.siteUrl}),l&&r.createElement("meta",{property:"og:type",content:"article"}),r.createElement("meta",{property:"og:title",content:t}),r.createElement("meta",{property:"og:description",content:n}),r.createElement("meta",{property:"og:image",content:p}),r.createElement("meta",{name:"twitter:card",content:"summary"}),r.createElement("meta",{name:"twitter:title",content:t}),r.createElement("meta",{name:"twitter:description",content:n}),r.createElement("meta",{name:"twitter:image",content:p}))}},2504:function(e,t,n){function r(e,t){return void 0===t&&(t={}),e.map((e=>({id:e.node.id,date:e.node.frontmatter.date,slug:e.node.fields.slug,tags:e.node.frontmatter.tags,categories:e.node.frontmatter.categories,title:e.node.frontmatter.title,description:e.node.frontmatter.description})))}function a(e){return e&&`${e}`.match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g).map((e=>e.toLowerCase())).join("-")}function o(e,t){void 0===t&&(t=2);const n=e.split(" ");return n[1].startsWith("0")?n[1]=n[1].slice(1,2):n[1]=n[1].slice(0,2),1===t||(n[1]+=","),n[0]+" "+n[t]}function i(e){const t=new Date(e),n=new Date,r=Math.abs(n-t);if(Math.floor(r/864e5)<50)return!0}n.d(t,{GQ:function(){return r},Yv:function(){return a},po:function(){return o},vw:function(){return i}})},5179:function(e,t,n){n.d(t,{M:function(){return a}});var r=n(6540);const a=e=>{let{children:t}=e;return r.createElement("main",{className:"main-content page"},t)}},6058:function(e,t,n){n.r(t),n.d(t,{default:function(){return d}});var r=n(6540),a=n(1015),o=n(3673),i=n(6782),c=n(7613),s=n(9699),l=n(2133),m=n(5179),p=n(2504),u=n(8335);function d(e){let{data:t}=e;const n=t.posts.edges,c=(0,r.useMemo)((()=>(0,p.GQ)(n)),[n]),d="Articles",f="Guides, references, and tutorials on programming, web development, and design.";return r.createElement(r.Fragment,null,r.createElement(o.A,{title:`${d} | ${u.A.siteTitle}`}),r.createElement(l.k,{customDescription:f}),r.createElement(m.M,null,r.createElement(i.l,{title:d,description:r.createElement(r.Fragment,null,r.createElement("div",{className:"hero-description"},f),r.createElement("p",null,r.createElement(a.Link,{to:"/topics",className:"button"},"Explore Topics")))}),r.createElement(s.A,{data:c,showYears:!0})))}d.Layout=c.P},9699:function(e,t,n){n.d(t,{A:function(){return s}});var r=n(4506),a=n(6540),o=n(1015),i=n(2504);const c=e=>{let t,{node:n,prefix:r,newspaper:c}=e;n.date&&(t=c?(0,i.po)(n.date):(0,i.po)(n.date,1));const s=(0,a.useMemo)((()=>(0,i.vw)(n.date)),[n.date]);return a.createElement(o.Link,{to:r?`/${r}${n.slug}`:n.slug,key:n.id,className:"post"},a.createElement("p",null,n.title),a.createElement("time",{className:s?"new-post":""},t))},s=e=>{let{data:t=[],showYears:n,query:o,prefix:i,hideDate:s,yearOnly:l,...m}=e;const p=(0,a.useMemo)((()=>{const e={};return t.forEach((t=>{var n;const a=null===(n=t.date)||void 0===n?void 0:n.split(", ")[1];e[a]=[].concat((0,r.A)(e[a]||[]),[t])})),e}),[t]),u=(0,a.useMemo)((()=>Object.keys(p).reverse()),[p]);return n?u.map((e=>a.createElement("section",{className:"year"},a.createElement("h2",null,e),a.createElement("div",{className:"posts"},p[e].map((e=>a.createElement(c,{key:e.id,node:e,query:o,prefix:i}))))))):a.createElement("div",{className:m.newspaper?"posts newspaper":"posts"},t.map((e=>a.createElement(c,Object.assign({key:e.id,node:e,query:o,prefix:i,hideDate:s,yearOnly:l},m)))))}}}]);
//# sourceMappingURL=component---src-pages-blog-js-680db4d3bb551d2e7b6f.js.map