"use strict";(self.webpackChunktaniarascia_com=self.webpackChunktaniarascia_com||[]).push([[480],{2133:function(e,t,n){n.d(t,{k:function(){return c}});var a=n(6540),r=n(3673),o=n(8335);const c=e=>{let t,n,c,{postNode:s,postPath:l,postSEO:i,customDescription:m}=e,u=o.A.siteLogo;if(i){t=s.frontmatter.title,n=s.excerpt,c=`${o.A.siteUrl}${l}`}else t=o.A.siteTitle,n=m||o.A.description;u=`${o.A.siteUrl}${u}`;const d=[{"@context":"http://schema.org","@type":"WebSite",url:o.A.siteUrl,name:t,alternateName:t}];return i&&d.push({"@context":"http://schema.org","@type":"BreadcrumbList",itemListElement:[{"@type":"ListItem",position:1,item:{"@id":c,name:t,image:u}}]},{"@context":"http://schema.org","@type":"BlogPosting",url:o.A.siteUrl,name:t,alternateName:t,headline:t,image:{"@type":"ImageObject",url:u},description:n}),a.createElement(r.A,null,a.createElement("meta",{name:"description",content:n}),a.createElement("meta",{name:"image",content:u}),a.createElement("script",{type:"application/ld+json"},JSON.stringify(d)),a.createElement("meta",{property:"og:url",content:i?c:o.A.siteUrl}),i&&a.createElement("meta",{property:"og:type",content:"article"}),a.createElement("meta",{property:"og:title",content:t}),a.createElement("meta",{property:"og:description",content:n}),a.createElement("meta",{property:"og:image",content:u}),a.createElement("meta",{name:"twitter:card",content:"summary"}),a.createElement("meta",{name:"twitter:title",content:t}),a.createElement("meta",{name:"twitter:description",content:n}),a.createElement("meta",{name:"twitter:image",content:u}))}},2504:function(e,t,n){function a(e,t){return void 0===t&&(t={}),e.map((e=>({id:e.node.id,date:e.node.frontmatter.date,slug:e.node.fields.slug,tags:e.node.frontmatter.tags,categories:e.node.frontmatter.categories,title:e.node.frontmatter.title,description:e.node.frontmatter.description})))}function r(e){return e&&`${e}`.match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g).map((e=>e.toLowerCase())).join("-")}function o(e,t){void 0===t&&(t=2);const n=e.split(" ");return n[1].startsWith("0")?n[1]=n[1].slice(1,2):n[1]=n[1].slice(0,2),1===t||(n[1]+=","),n[0]+" "+n[t]}function c(e){const t=new Date(e),n=new Date,a=Math.abs(n-t);if(Math.floor(a/864e5)<50)return!0}n.d(t,{GQ:function(){return a},Yv:function(){return r},po:function(){return o},vw:function(){return c}})},3474:function(e,t,n){n.r(t),n.d(t,{default:function(){return p}});var a=n(6540),r=n(3673),o=n(6782),c=n(7613),s=n(1015),l=n(2504);const i=e=>{let{thumbnail:t,toc:n,tags:r=[],date:o}=e;const{0:c,1:i}=(0,a.useState)([]);(0,a.useLayoutEffect)((()=>{const e=document.querySelectorAll(".table-of-contents a"),t=[];e.forEach((e=>{t.push(e.hash.replace("#",""))}),[]),console.log(t,"hereids",e),i(t)}),[n]);const m=(e=>{const{0:t,1:n}=(0,a.useState)("");return(0,a.useEffect)((()=>{const t=new IntersectionObserver((e=>{e.forEach((e=>{e.isIntersecting&&n(encodeURI(e.target.id))}))}),{rootMargin:"0% 0% -80% 0%"}),a=[];return e.forEach((e=>{const t=decodeURI(e);document.getElementById(t)&&a.push(document.getElementById(t))})),a.forEach((e=>{t.observe(e)})),()=>{a.forEach((e=>{t.unobserve(e)}))}}),[e]),t})(c);return(0,a.useEffect)((()=>{if(m){document.querySelectorAll(".table-of-contents a").forEach((e=>{e.classList.remove("active")}));const e=document.querySelector(`.table-of-contents a[href$="${"#"+m}"]`);e&&e.classList.add("active")}}),[m]),a.createElement("aside",{className:"post-sidebar"},a.createElement("div",{className:"post-sidebar-content"},a.createElement("section",{className:"post-sidebar-section"},a.createElement("h2",null,"Published"),a.createElement("div",{className:"post-sidebar-offset"},a.createElement("p",null,o),a.createElement("p",null,a.createElement("a",{href:"#comments"},"View comments")))),a.createElement("section",{className:"post-sidebar-section"},a.createElement("h2",null,"Topics"),a.createElement("div",{className:"post-sidebar-offset"},a.createElement("div",{className:"tags"},r.map((e=>a.createElement(s.Link,{key:e,to:`/topics/${(0,l.Yv)(e)}`,className:"button small",activeClassName:"active"},e)))))),n&&a.createElement("section",{className:"post-sidebar-section"},a.createElement("h2",null,"In This Article"),a.createElement("nav",{className:"table-of-contents",dangerouslySetInnerHTML:{__html:n}}))))},m=e=>{let{post:t,children:n}=e;const{tags:r,date:o,thumbnail:c}=t.frontmatter;return a.createElement(a.Fragment,null,a.createElement("main",{className:"main-content"},n),a.createElement(i,{thumbnail:c,date:o,tags:r,toc:t.tableOfContents}))};var u=n(2133),d=n(8335);function p(e){let{data:t}=e;const n=t.markdownRemark,{title:c,comments_off:s,thumbnail:l}=n.frontmatter;return a.createElement(a.Fragment,null,a.createElement(r.A,{title:`${n.frontmatter.title} | ${d.A.siteTitle}`}),a.createElement(u.k,{postPath:n.fields.slug,postNode:n,postSEO:!0}),a.createElement(m,{post:n},a.createElement(o.l,{title:c,type:"post"}),a.createElement("div",{className:"main-article",id:n.fields.slug,dangerouslySetInnerHTML:{__html:n.html}}),!s&&a.createElement("section",{id:"comments",className:"comments"},a.createElement("h3",null,"Comments"))))}p.Layout=c.P}}]);
//# sourceMappingURL=component---src-templates-post-js-80dbb30e593aa97b51a3.js.map