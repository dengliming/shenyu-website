"use strict";(self.webpackChunkshenyu_website=self.webpackChunkshenyu_website||[]).push([[45982],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>h});var n=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var d=n.createContext({}),s=function(e){var t=n.useContext(d),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(d.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,d=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=s(r),h=i,m=p["".concat(d,".").concat(h)]||p[h]||c[h]||o;return r?n.createElement(m,a(a({ref:t},u),{},{components:r})):n.createElement(m,a({ref:t},u))}));function h(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,a=new Array(o);a[0]=p;var l={};for(var d in t)hasOwnProperty.call(t,d)&&(l[d]=t[d]);l.originalType=e,l.mdxType="string"==typeof e?e:i,a[1]=l;for(var s=2;s<o;s++)a[s]=r[s];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},33219:(e,t,r)=>{r.r(t),r.d(t,{contentTitle:()=>a,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>d});var n=r(87462),i=(r(67294),r(3905));const o={title:"Thread Model",keywords:["Thread"],description:"thread model"},a=void 0,l={unversionedId:"developer/thread-model",id:"version-2.5.0/developer/thread-model",isDocsHomePage:!1,title:"Thread Model",description:"thread model",source:"@site/versioned_docs/version-2.5.0/developer/thread-model.md",sourceDirName:"developer",slug:"/developer/thread-model",permalink:"/docs/developer/thread-model",editUrl:"https://github.com/apache/shenyu-website/edit/main/versioned_docs/version-2.5.0/developer/thread-model.md",version:"2.5.0",frontMatter:{title:"Thread Model",keywords:["Thread"],description:"thread model"},sidebar:"version-2.5.0/tutorialSidebar",previous:{title:"ShenYu Optimize",permalink:"/docs/developer/shenyu-optimize"}},d=[{value:"Description",id:"description",children:[]},{value:"IO And Work Thread",id:"io-and-work-thread",children:[]},{value:"Business Thread",id:"business-thread",children:[]},{value:"Type Switching",id:"type-switching",children:[]}],s={toc:d};function u(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"description"},"Description"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"This article gives an introduction to thread models in ShenYu and usage in various scenarios.")),(0,i.kt)("h2",{id:"io-and-work-thread"},"IO And Work Thread"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"spring-webflux")," is one of dependencies of ShenYu, and it uses Netty thread model in lower layer.")),(0,i.kt)("h2",{id:"business-thread"},"Business Thread"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Use scheduling thread to execute by default."),(0,i.kt)("li",{parentName:"ul"},"A fixed thread pool manages business threads, the number of threads is count in this formula: cpu * 2 + 1.")),(0,i.kt)("h2",{id:"type-switching"},"Type Switching"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"reactor.core.scheduler.Schedulers"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"-Dshenyu.scheduler.type=fixed")," is a default config. If set to other value, a flexible thread pool will take place it.",(0,i.kt)("inlineCode",{parentName:"li"},"Schedulers.elastic()"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"-Dshenyu.work.threads = xx")," is for configuring number of threads, the default value calculates in following formula ",(0,i.kt)("inlineCode",{parentName:"li"},"cpu * 2 + 1")," with a minimum of 16 threads.")))}u.isMDXComponent=!0}}]);