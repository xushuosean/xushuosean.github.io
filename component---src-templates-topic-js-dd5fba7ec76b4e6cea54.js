"use strict";(self.webpackChunktaniarascia_com=self.webpackChunktaniarascia_com||[]).push([[357],{2133:function(e,t,n){n.d(t,{k:function(){return i}});var a=n(6540),r=n(3673),o=n(8335);const i=e=>{let t,n,i,{postNode:c,postPath:s,postSEO:l,customDescription:m}=e,p=o.A.siteLogo;if(l){t=c.frontmatter.title,n=c.excerpt,i=`${o.A.siteUrl}${s}`}else t=o.A.siteTitle,n=m||o.A.description;p=`${o.A.siteUrl}${p}`;const u=[{"@context":"http://schema.org","@type":"WebSite",url:o.A.siteUrl,name:t,alternateName:t}];return l&&u.push({"@context":"http://schema.org","@type":"BreadcrumbList",itemListElement:[{"@type":"ListItem",position:1,item:{"@id":i,name:t,image:p}}]},{"@context":"http://schema.org","@type":"BlogPosting",url:o.A.siteUrl,name:t,alternateName:t,headline:t,image:{"@type":"ImageObject",url:p},description:n}),a.createElement(r.A,null,a.createElement("meta",{name:"description",content:n}),a.createElement("meta",{name:"image",content:p}),a.createElement("script",{type:"application/ld+json"},JSON.stringify(u)),a.createElement("meta",{property:"og:url",content:l?i:o.A.siteUrl}),l&&a.createElement("meta",{property:"og:type",content:"article"}),a.createElement("meta",{property:"og:title",content:t}),a.createElement("meta",{property:"og:description",content:n}),a.createElement("meta",{property:"og:image",content:p}),a.createElement("meta",{name:"twitter:card",content:"summary"}),a.createElement("meta",{name:"twitter:title",content:t}),a.createElement("meta",{name:"twitter:description",content:n}),a.createElement("meta",{name:"twitter:image",content:p}))}},2504:function(e,t,n){function a(e,t){return void 0===t&&(t={}),e.map((e=>({id:e.node.id,date:e.node.frontmatter.date,slug:e.node.fields.slug,tags:e.node.frontmatter.tags,categories:e.node.frontmatter.categories,title:e.node.frontmatter.title,description:e.node.frontmatter.description})))}function r(e){return e&&`${e}`.match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g).map((e=>e.toLowerCase())).join("-")}function o(e,t){void 0===t&&(t=2);const n=e.split(" ");return n[1].startsWith("0")?n[1]=n[1].slice(1,2):n[1]=n[1].slice(0,2),1===t||(n[1]+=","),n[0]+" "+n[t]}function i(e){const t=new Date(e),n=new Date,a=Math.abs(n-t);if(Math.floor(a/864e5)<50)return!0}n.d(t,{GQ:function(){return a},Yv:function(){return r},po:function(){return o},vw:function(){return i}})},4632:function(e,t,n){n.r(t),n.d(t,{default:function(){return u}});var a=n(6540),r=n(3673),o=n(7613),i=n(2133),c=n(9699),s=n(6782),l=n(5179),m=n(2504),p=n(8335);function u(e){let{data:t,pageContext:n}=e;const{tag:o}=n,{totalCount:u}=t.allMarkdownRemark,d=t.allMarkdownRemark.edges,f=(0,a.useMemo)((()=>(0,m.GQ)(d)),[d]),g=1===u?" post":" posts";return a.createElement(a.Fragment,null,a.createElement(r.A,{title:`Topic: ${o} | ${p.A.siteTitle}`}),a.createElement(i.k,null),a.createElement(l.M,null,a.createElement(s.l,{highlight:u,subTitle:g,title:o,type:"taxonomy"}),a.createElement(c.A,{data:f,showYears:!0})))}u.Layout=o.P},5179:function(e,t,n){n.d(t,{M:function(){return r}});var a=n(6540);const r=e=>{let{children:t}=e;return a.createElement("main",{className:"main-content page"},t)}},9699:function(e,t,n){n.d(t,{A:function(){return s}});var a=n(4506),r=n(6540),o=n(1015),i=n(2504);const c=e=>{let t,{node:n,prefix:a,newspaper:c}=e;n.date&&(t=c?(0,i.po)(n.date):(0,i.po)(n.date,1));const s=(0,r.useMemo)((()=>(0,i.vw)(n.date)),[n.date]);return r.createElement(o.Link,{to:a?`/${a}${n.slug}`:n.slug,key:n.id,className:"post"},r.createElement("p",null,n.title),r.createElement("time",{className:s?"new-post":""},t))},s=e=>{let{data:t=[],showYears:n,query:o,prefix:i,hideDate:s,yearOnly:l,...m}=e;const p=(0,r.useMemo)((()=>{const e={};return t.forEach((t=>{var n;const r=null===(n=t.date)||void 0===n?void 0:n.split(", ")[1];e[r]=[].concat((0,a.A)(e[r]||[]),[t])})),e}),[t]),u=(0,r.useMemo)((()=>Object.keys(p).reverse()),[p]);return n?u.map((e=>r.createElement("section",{className:"year"},r.createElement("h2",null,e),r.createElement("div",{className:"posts"},p[e].map((e=>r.createElement(c,{key:e.id,node:e,query:o,prefix:i}))))))):r.createElement("div",{className:m.newspaper?"posts newspaper":"posts"},t.map((e=>r.createElement(c,Object.assign({key:e.id,node:e,query:o,prefix:i,hideDate:s,yearOnly:l},m)))))}}}]);
//# sourceMappingURL=component---src-templates-topic-js-dd5fba7ec76b4e6cea54.js.map