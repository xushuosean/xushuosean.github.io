"use strict";(self.webpackChunktaniarascia_com=self.webpackChunktaniarascia_com||[]).push([[424],{2133:function(e,t,n){n.d(t,{k:function(){return o}});var r=n(6540),a=n(3673),i=n(8335);const o=e=>{let t,n,o,{postNode:c,postPath:s,postSEO:l,customDescription:m}=e,u=i.A.siteLogo;if(l){const e=c.frontmatter;t=e.title,n=c.excerpt,e.thumbnail&&(u=e.thumbnail.childImageSharp.fixed.src),o=`${i.A.siteUrl}${s}`}else t=i.A.siteTitle,n=m||i.A.description;u=`${i.A.siteUrl}${u}`;const p=[{"@context":"http://schema.org","@type":"WebSite",url:i.A.siteUrl,name:t,alternateName:t}];return l&&p.push({"@context":"http://schema.org","@type":"BreadcrumbList",itemListElement:[{"@type":"ListItem",position:1,item:{"@id":o,name:t,image:u}}]},{"@context":"http://schema.org","@type":"BlogPosting",url:i.A.siteUrl,name:t,alternateName:t,headline:t,image:{"@type":"ImageObject",url:u},description:n}),r.createElement(a.A,null,r.createElement("meta",{name:"description",content:n}),r.createElement("meta",{name:"image",content:u}),r.createElement("script",{type:"application/ld+json"},JSON.stringify(p)),r.createElement("meta",{property:"og:url",content:l?o:i.A.siteUrl}),l&&r.createElement("meta",{property:"og:type",content:"article"}),r.createElement("meta",{property:"og:title",content:t}),r.createElement("meta",{property:"og:description",content:n}),r.createElement("meta",{property:"og:image",content:u}),r.createElement("meta",{name:"twitter:card",content:"summary"}),r.createElement("meta",{name:"twitter:title",content:t}),r.createElement("meta",{name:"twitter:description",content:n}),r.createElement("meta",{name:"twitter:image",content:u}))}},2504:function(e,t,n){function r(e,t){return void 0===t&&(t={}),e.map((e=>{var n,r,a;return{id:e.node.id,date:e.node.frontmatter.date,slug:e.node.fields.slug,tags:e.node.frontmatter.tags,categories:e.node.frontmatter.categories,title:e.node.frontmatter.title,description:e.node.frontmatter.description,...t.thumbnails&&{thumbnail:null===(n=e.node.frontmatter)||void 0===n||null===(r=n.thumbnail)||void 0===r||null===(a=r.childImageSharp)||void 0===a?void 0:a.fixed}}}))}function a(e){return e&&`${e}`.match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g).map((e=>e.toLowerCase())).join("-")}function i(){const e=document.getElementById("append-comments-here"),t=document.createElement("script"),n=window.localStorage.getItem("theme");t.async=!0,t.src="https://utteranc.es/client.js",t.setAttribute("repo","taniarascia/comments"),t.setAttribute("issue-term","pathname"),t.setAttribute("id","utterances"),t.setAttribute("theme","light"===n?"github-light":"github-dark"),t.setAttribute("crossorigin","anonymous"),e.firstChild?console.error("Error adding utterances comments"):e.appendChild(t)}function o(e,t){void 0===t&&(t=2);const n=e.split(" ");return n[1].startsWith("0")?n[1]=n[1].slice(1,2):n[1]=n[1].slice(0,2),1===t||(n[1]+=","),n[0]+" "+n[t]}function c(e){const t=new Date(e),n=new Date,r=Math.abs(n-t);if(Math.floor(r/864e5)<50)return!0}n.d(t,{GQ:function(){return r},Yv:function(){return a},po:function(){return o},re:function(){return i},vw:function(){return c}})},5179:function(e,t,n){n.d(t,{M:function(){return a}});var r=n(6540);const a=e=>{let{children:t}=e;return r.createElement("main",{className:"main-content page"},t)}},5661:function(e,t,n){n.r(t),n.d(t,{default:function(){return p}});var r=n(6540),a=n(3673),i=n(6782),o=n(7613),c=n(9699),s=n(2133),l=n(5179),m=n(2504),u=n(8335);function p(e){let{data:t}=e;const n=t.posts.edges,o=(0,r.useMemo)((()=>(0,m.GQ)(n)),[n]),p="Notes",d="Personal notes about life, music, projects, and everything else.";return r.createElement(r.Fragment,null,r.createElement(a.A,{title:`${p} | ${u.A.siteTitle}`}),r.createElement(s.k,{customDescription:d}),r.createElement(l.M,null,r.createElement(i.l,{title:p,description:d}),r.createElement(c.A,{data:o,showYears:!0})))}p.Layout=o.P},9699:function(e,t,n){n.d(t,{A:function(){return s}});var r=n(4506),a=n(6540),i=n(1015),o=n(2504);const c=e=>{let t,{node:n,prefix:r,newspaper:c}=e;n.date&&(t=c?(0,o.po)(n.date):(0,o.po)(n.date,1));const s=(0,a.useMemo)((()=>(0,o.vw)(n.date)),[n.date]);return a.createElement(i.Link,{to:r?`/${r}${n.slug}`:n.slug,key:n.id,className:"post"},a.createElement("p",null,n.title),a.createElement("time",{className:s?"new-post":""},t))},s=e=>{let{data:t=[],showYears:n,query:i,prefix:o,hideDate:s,yearOnly:l,...m}=e;const u=(0,a.useMemo)((()=>{const e={};return t.forEach((t=>{var n;const a=null===(n=t.date)||void 0===n?void 0:n.split(", ")[1];e[a]=[].concat((0,r.A)(e[a]||[]),[t])})),e}),[t]),p=(0,a.useMemo)((()=>Object.keys(u).reverse()),[u]);return n?p.map((e=>a.createElement("section",{className:"year"},a.createElement("h2",null,e),a.createElement("div",{className:"posts"},u[e].map((e=>a.createElement(c,{key:e.id,node:e,query:i,prefix:o}))))))):a.createElement("div",{className:m.newspaper?"posts newspaper":"posts"},t.map((e=>a.createElement(c,Object.assign({key:e.id,node:e,query:i,prefix:o,hideDate:s,yearOnly:l},m)))))}}}]);
//# sourceMappingURL=component---src-pages-notes-js-46d5db5aa38e17958bcc.js.map