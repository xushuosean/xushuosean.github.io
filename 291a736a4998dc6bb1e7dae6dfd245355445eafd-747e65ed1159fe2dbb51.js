"use strict";(self.webpackChunktaniarascia_com=self.webpackChunktaniarascia_com||[]).push([[738],{2133:function(e,t,a){a.d(t,{k:function(){return s}});var r=a(6540),i=a(3673),n=a(8335);const s=e=>{let t,a,s,{postNode:o,postPath:d,postSEO:l,customDescription:c}=e,u=n.A.siteLogo;if(l){const e=o.frontmatter;t=e.title,a=o.excerpt,e.thumbnail&&(u=e.thumbnail.childImageSharp.fixed.src),s=`${n.A.siteUrl}${d}`}else t=n.A.siteTitle,a=c||n.A.description;u=`${n.A.siteUrl}${u}`;const f=[{"@context":"http://schema.org","@type":"WebSite",url:n.A.siteUrl,name:t,alternateName:t}];return l&&f.push({"@context":"http://schema.org","@type":"BreadcrumbList",itemListElement:[{"@type":"ListItem",position:1,item:{"@id":s,name:t,image:u}}]},{"@context":"http://schema.org","@type":"BlogPosting",url:n.A.siteUrl,name:t,alternateName:t,headline:t,image:{"@type":"ImageObject",url:u},description:a}),r.createElement(i.A,null,r.createElement("meta",{name:"description",content:a}),r.createElement("meta",{name:"image",content:u}),r.createElement("script",{type:"application/ld+json"},JSON.stringify(f)),r.createElement("meta",{property:"og:url",content:l?s:n.A.siteUrl}),l&&r.createElement("meta",{property:"og:type",content:"article"}),r.createElement("meta",{property:"og:title",content:t}),r.createElement("meta",{property:"og:description",content:a}),r.createElement("meta",{property:"og:image",content:u}),r.createElement("meta",{name:"twitter:card",content:"summary"}),r.createElement("meta",{name:"twitter:title",content:t}),r.createElement("meta",{name:"twitter:description",content:a}),r.createElement("meta",{name:"twitter:image",content:u}))}},2504:function(e,t,a){function r(e,t){return void 0===t&&(t={}),e.map((e=>{var a,r,i;return{id:e.node.id,date:e.node.frontmatter.date,slug:e.node.fields.slug,tags:e.node.frontmatter.tags,categories:e.node.frontmatter.categories,title:e.node.frontmatter.title,description:e.node.frontmatter.description,...t.thumbnails&&{thumbnail:null===(a=e.node.frontmatter)||void 0===a||null===(r=a.thumbnail)||void 0===r||null===(i=r.childImageSharp)||void 0===i?void 0:i.fixed}}}))}function i(e){return e&&`${e}`.match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g).map((e=>e.toLowerCase())).join("-")}function n(e,t){void 0===t&&(t=2);const a=e.split(" ");return a[1].startsWith("0")?a[1]=a[1].slice(1,2):a[1]=a[1].slice(0,2),1===t||(a[1]+=","),a[0]+" "+a[t]}function s(e){const t=new Date(e),a=new Date,r=Math.abs(a-t);if(Math.floor(r/864e5)<50)return!0}a.d(t,{GQ:function(){return r},Yv:function(){return i},po:function(){return n},vw:function(){return s}})},8342:function(e,t,a){var r=a(4994);t.A=void 0;var i,n=r(a(2475)),s=r(a(6221)),o=r(a(4893)),d=r(a(4634)),l=r(a(6540)),c=r(a(5556)),u=["sizes","srcSet","src","style","onLoad","onError","loading","draggable","ariaHidden"],f=function(e){var t=(0,d.default)({},e),a=t.resolutions,r=t.sizes,i=t.critical;return a&&(t.fixed=a,delete t.resolutions),r&&(t.fluid=r,delete t.sizes),i&&(t.loading="eager"),t.fluid&&(t.fluid=L([].concat(t.fluid))),t.fixed&&(t.fixed=L([].concat(t.fixed))),t},m=function(e){var t=e.media;return!!t&&(S&&!!window.matchMedia(t).matches)},p=function(e){var t=e.fluid,a=e.fixed,r=g(t||a||[]);return r&&r.src},g=function(e){if(S&&function(e){return!!e&&Array.isArray(e)&&e.some((function(e){return void 0!==e.media}))}(e)){var t=e.findIndex(m);if(-1!==t)return e[t];var a=e.findIndex((function(e){return void 0===e.media}));if(-1!==a)return e[a]}return e[0]},h=Object.create({}),b=function(e){var t=f(e),a=p(t);return h[a]||!1},y="undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype,S="undefined"!=typeof window,v=S&&window.IntersectionObserver,E=new WeakMap;function w(e){return e.map((function(e){var t=e.src,a=e.srcSet,r=e.srcSetWebp,i=e.media,n=e.sizes;return l.default.createElement(l.default.Fragment,{key:t},r&&l.default.createElement("source",{type:"image/webp",media:i,srcSet:r,sizes:n}),a&&l.default.createElement("source",{media:i,srcSet:a,sizes:n}))}))}function L(e){var t=[],a=[];return e.forEach((function(e){return(e.media?t:a).push(e)})),[].concat(t,a)}function I(e){return e.map((function(e){var t=e.src,a=e.media,r=e.tracedSVG;return l.default.createElement("source",{key:t,media:a,srcSet:r})}))}function R(e){return e.map((function(e){var t=e.src,a=e.media,r=e.base64;return l.default.createElement("source",{key:t,media:a,srcSet:r})}))}function x(e,t){var a=e.srcSet,r=e.srcSetWebp,i=e.media,n=e.sizes;return"<source "+(t?"type='image/webp' ":"")+(i?'media="'+i+'" ':"")+'srcset="'+(t?r:a)+'" '+(n?'sizes="'+n+'" ':"")+"/>"}var O=function(e,t){var a=(void 0===i&&"undefined"!=typeof window&&window.IntersectionObserver&&(i=new window.IntersectionObserver((function(e){e.forEach((function(e){if(E.has(e.target)){var t=E.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(i.unobserve(e.target),E.delete(e.target),t())}}))}),{rootMargin:"200px"})),i);return a&&(a.observe(e),E.set(e,t)),function(){a.unobserve(e),E.delete(e)}},z=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',a=e.sizes?'sizes="'+e.sizes+'" ':"",r=e.srcSet?'srcset="'+e.srcSet+'" ':"",i=e.title?'title="'+e.title+'" ':"",n=e.alt?'alt="'+e.alt+'" ':'alt="" ',s=e.width?'width="'+e.width+'" ':"",o=e.height?'height="'+e.height+'" ':"",d=e.crossOrigin?'crossorigin="'+e.crossOrigin+'" ':"",l=e.loading?'loading="'+e.loading+'" ':"",c=e.draggable?'draggable="'+e.draggable+'" ':"";return"<picture>"+e.imageVariants.map((function(e){return(e.srcSetWebp?x(e,!0):"")+x(e)})).join("")+"<img "+l+s+o+a+r+t+n+i+d+c+'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},V=l.default.forwardRef((function(e,t){var a=e.src,r=e.imageVariants,i=e.generateSources,n=e.spreadProps,s=e.ariaHidden,o=l.default.createElement(C,(0,d.default)({ref:t,src:a},n,{ariaHidden:s}));return r.length>1?l.default.createElement("picture",null,i(r),o):o})),C=l.default.forwardRef((function(e,t){var a=e.sizes,r=e.srcSet,i=e.src,n=e.style,s=e.onLoad,c=e.onError,f=e.loading,m=e.draggable,p=e.ariaHidden,g=(0,o.default)(e,u);return l.default.createElement("img",(0,d.default)({"aria-hidden":p,sizes:a,srcSet:r,src:i},g,{onLoad:s,onError:c,ref:t,loading:f,draggable:m,style:(0,d.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},n)}))}));C.propTypes={style:c.default.object,onError:c.default.func,onLoad:c.default.func};var H=function(e){function t(t){var a;(a=e.call(this,t)||this).seenBefore=S&&b(t),a.isCritical="eager"===t.loading||t.critical,a.addNoScript=!(a.isCritical&&!t.fadeIn),a.useIOSupport=!y&&v&&!a.isCritical&&!a.seenBefore;var r=a.isCritical||S&&(y||!a.useIOSupport);return a.state={isVisible:r,imgLoaded:!1,imgCached:!1,fadeIn:!a.seenBefore&&t.fadeIn,isHydrated:!1},a.imageRef=l.default.createRef(),a.placeholderRef=t.placeholderRef||l.default.createRef(),a.handleImageLoaded=a.handleImageLoaded.bind((0,n.default)(a)),a.handleRef=a.handleRef.bind((0,n.default)(a)),a}(0,s.default)(t,e);var a=t.prototype;return a.componentDidMount=function(){if(this.setState({isHydrated:S}),this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:b(this.props)}),this.isCritical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},a.componentWillUnmount=function(){this.cleanUpListeners&&this.cleanUpListeners()},a.handleRef=function(e){var t=this;this.useIOSupport&&e&&(this.cleanUpListeners=O(e,(function(){var e=b(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0},(function(){t.setState({imgLoaded:e,imgCached:!(!t.imageRef.current||!t.imageRef.current.currentSrc)})}))})))},a.handleImageLoaded=function(){var e,t,a;e=this.props,t=f(e),(a=p(t))&&(h[a]=!0),this.setState({imgLoaded:!0}),this.props.onLoad&&this.props.onLoad()},a.render=function(){var e=f(this.props),t=e.title,a=e.alt,r=e.className,i=e.style,n=void 0===i?{}:i,s=e.imgStyle,o=void 0===s?{}:s,c=e.placeholderStyle,u=void 0===c?{}:c,m=e.placeholderClassName,p=e.fluid,h=e.fixed,b=e.backgroundColor,y=e.durationFadeIn,S=e.Tag,v=e.itemProp,E=e.loading,L=e.draggable,x=p||h;if(!x)return null;var O=!1===this.state.fadeIn||this.state.imgLoaded,H=!0===this.state.fadeIn&&!this.state.imgCached,k=(0,d.default)({opacity:O?1:0,transition:H?"opacity "+y+"ms":"none"},o),A="boolean"==typeof b?"lightgray":b,T={transitionDelay:y+"ms"},N=(0,d.default)({opacity:this.state.imgLoaded?0:1},H&&T,o,u),P={title:t,alt:this.state.isVisible?"":a,style:N,className:m,itemProp:v},W=this.state.isHydrated?g(x):x[0];if(p)return l.default.createElement(S,{className:(r||"")+" gatsby-image-wrapper",style:(0,d.default)({position:"relative",overflow:"hidden",maxWidth:W.maxWidth?W.maxWidth+"px":null,maxHeight:W.maxHeight?W.maxHeight+"px":null},n),ref:this.handleRef,key:"fluid-"+JSON.stringify(W.srcSet)},l.default.createElement(S,{"aria-hidden":!0,style:{width:"100%",paddingBottom:100/W.aspectRatio+"%"}}),A&&l.default.createElement(S,{"aria-hidden":!0,title:t,style:(0,d.default)({backgroundColor:A,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,right:0,left:0},H&&T)}),W.base64&&l.default.createElement(V,{ariaHidden:!0,ref:this.placeholderRef,src:W.base64,spreadProps:P,imageVariants:x,generateSources:R}),W.tracedSVG&&l.default.createElement(V,{ariaHidden:!0,ref:this.placeholderRef,src:W.tracedSVG,spreadProps:P,imageVariants:x,generateSources:I}),this.state.isVisible&&l.default.createElement("picture",null,w(x),l.default.createElement(C,{alt:a,title:t,sizes:W.sizes,src:W.src,crossOrigin:this.props.crossOrigin,srcSet:W.srcSet,style:k,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:v,loading:E,draggable:L})),this.addNoScript&&l.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:z((0,d.default)({alt:a,title:t,loading:E},W,{imageVariants:x}))}}));if(h){var j=(0,d.default)({position:"relative",overflow:"hidden",display:"inline-block",width:W.width,height:W.height},n);return"inherit"===n.display&&delete j.display,l.default.createElement(S,{className:(r||"")+" gatsby-image-wrapper",style:j,ref:this.handleRef,key:"fixed-"+JSON.stringify(W.srcSet)},A&&l.default.createElement(S,{"aria-hidden":!0,title:t,style:(0,d.default)({backgroundColor:A,width:W.width,opacity:this.state.imgLoaded?0:1,height:W.height},H&&T)}),W.base64&&l.default.createElement(V,{ariaHidden:!0,ref:this.placeholderRef,src:W.base64,spreadProps:P,imageVariants:x,generateSources:R}),W.tracedSVG&&l.default.createElement(V,{ariaHidden:!0,ref:this.placeholderRef,src:W.tracedSVG,spreadProps:P,imageVariants:x,generateSources:I}),this.state.isVisible&&l.default.createElement("picture",null,w(x),l.default.createElement(C,{alt:a,title:t,width:W.width,height:W.height,sizes:W.sizes,src:W.src,crossOrigin:this.props.crossOrigin,srcSet:W.srcSet,style:k,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:v,loading:E,draggable:L})),this.addNoScript&&l.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:z((0,d.default)({alt:a,title:t,loading:E},W,{imageVariants:x}))}}))}return null},t}(l.default.Component);H.defaultProps={fadeIn:!0,durationFadeIn:500,alt:"",Tag:"div",loading:"lazy"};var k=c.default.shape({width:c.default.number.isRequired,height:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string,media:c.default.string}),A=c.default.shape({aspectRatio:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,sizes:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string,media:c.default.string,maxWidth:c.default.number,maxHeight:c.default.number});function T(e){return function(t,a,r){var i;if(!t.fixed&&!t.fluid)throw new Error("The prop `fluid` or `fixed` is marked as required in `"+r+"`, but their values are both `undefined`.");c.default.checkPropTypes(((i={})[a]=e,i),t,"prop",r)}}H.propTypes={resolutions:k,sizes:A,fixed:T(c.default.oneOfType([k,c.default.arrayOf(k)])),fluid:T(c.default.oneOfType([A,c.default.arrayOf(A)])),fadeIn:c.default.bool,durationFadeIn:c.default.number,title:c.default.string,alt:c.default.string,className:c.default.oneOfType([c.default.string,c.default.object]),critical:c.default.bool,crossOrigin:c.default.oneOfType([c.default.string,c.default.bool]),style:c.default.object,imgStyle:c.default.object,placeholderStyle:c.default.object,placeholderClassName:c.default.string,backgroundColor:c.default.oneOfType([c.default.string,c.default.bool]),onLoad:c.default.func,onError:c.default.func,onStartLoad:c.default.func,Tag:c.default.string,itemProp:c.default.string,loading:c.default.oneOf(["auto","lazy","eager"]),draggable:c.default.bool};var N=H;t.A=N}}]);
//# sourceMappingURL=291a736a4998dc6bb1e7dae6dfd245355445eafd-747e65ed1159fe2dbb51.js.map