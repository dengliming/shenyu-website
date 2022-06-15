"use strict";(self.webpackChunkshenyu_website=self.webpackChunkshenyu_website||[]).push([[64534],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var u=r.createContext({}),s=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,l=e.originalType,u=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),m=s(n),d=i,g=m["".concat(u,".").concat(d)]||m[d]||c[d]||l;return n?r.createElement(g,a(a({ref:t},p),{},{components:n})):r.createElement(g,a({ref:t},p))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var l=n.length,a=new Array(l);a[0]=m;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:i,a[1]=o;for(var s=2;s<l;s++)a[s]=n[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},7824:function(e,t,n){n.r(t),n.d(t,{contentTitle:function(){return u},default:function(){return m},frontMatter:function(){return o},metadata:function(){return s},toc:function(){return p}});var r=n(87462),i=n(63366),l=(n(67294),n(3905)),a=["components"],o={sidebar_position:6,title:"Hystrix Plugin",keywords:["soul"],description:"hystrix plugin"},u=void 0,s={unversionedId:"plugins/hystrix-plugin",id:"version-2.3.0/plugins/hystrix-plugin",isDocsHomePage:!1,title:"Hystrix Plugin",description:"hystrix plugin",source:"@site/versioned_docs/version-2.3.0/plugins/hystrix-plugin.md",sourceDirName:"plugins",slug:"/plugins/hystrix-plugin",permalink:"/docs/2.3.0/plugins/hystrix-plugin",editUrl:"https://github.com/apache/incubator-shenyu-website/edit/main/versioned_docs/version-2.3.0/plugins/hystrix-plugin.md",version:"2.3.0",sidebarPosition:6,frontMatter:{sidebar_position:6,title:"Hystrix Plugin",keywords:["soul"],description:"hystrix plugin"},sidebar:"version-2.3.0/tutorialSidebar",previous:{title:"RateLimiter Plugin",permalink:"/docs/2.3.0/plugins/rate-limiter-plugin"},next:{title:"Sentinel Plugin",permalink:"/docs/2.3.0/plugins/sentinel-plugin"}},p=[{value:"Explanation",id:"explanation",children:[]},{value:"Plugin Setting",id:"plugin-setting",children:[]},{value:"Plugin Instruction",id:"plugin-instruction",children:[]}],c={toc:p};function m(e){var t=e.components,n=(0,i.Z)(e,a);return(0,l.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"explanation"},"Explanation"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Hystrix plugin is the core implementation used by gateway to fuse traffic."),(0,l.kt)("li",{parentName:"ul"},"Use semaphores to process requests.")),(0,l.kt)("h2",{id:"plugin-setting"},"Plugin Setting"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"In ",(0,l.kt)("inlineCode",{parentName:"li"},"soul-admin")," --\x3e plugin management --\x3e ",(0,l.kt)("inlineCode",{parentName:"li"},"hystrix"),", set to enable."),(0,l.kt)("li",{parentName:"ul"},"If the user don't use, please disable the plugin in the background.")),(0,l.kt)("h2",{id:"plugin-instruction"},"Plugin Instruction"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Introduce ",(0,l.kt)("inlineCode",{parentName:"li"},"hystrix")," dependency in the pom.xml file of the gateway.")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-xml"},"  \x3c!-- soul hystrix plugin start--\x3e\n  <dependency>\n      <groupId>org.dromara</groupId>\n      <artifactId>soul-spring-boot-starter-plugin-hystrix</artifactId>\n       <version>${last.version}</version>\n  </dependency>\n  \x3c!-- soul hystrix plugin end--\x3e\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Selectors and rules, please refer to: ",(0,l.kt)("a",{parentName:"p",href:"../admin/selector-and-rule"},"selector"),".")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Hystrix processing details:"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Trip minimum request quantity: the minimum request quantity, which must be reached at least before the fuse is triggered"),(0,l.kt)("li",{parentName:"ul"},"Error half-score threshold: the percentage of exceptions in this period of time."),(0,l.kt)("li",{parentName:"ul"},"Maximum concurrency: the maximum concurrency"),(0,l.kt)("li",{parentName:"ul"},"Trip sleep time (ms): the recovery time after fusing."),(0,l.kt)("li",{parentName:"ul"},"Grouping Key: generally set as: contextPath"),(0,l.kt)("li",{parentName:"ul"},"Command Key: generally set to specific path interface."),(0,l.kt)("li",{parentName:"ul"},"CallBackUrl: default url: /fallback/hystrix.")))))}m.isMDXComponent=!0}}]);