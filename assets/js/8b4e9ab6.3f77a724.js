"use strict";(self.webpackChunkshenyu_website=self.webpackChunkshenyu_website||[]).push([[90880],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var u=r.createContext({}),c=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,u=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),g=c(n),d=i,m=g["".concat(u,".").concat(d)]||g[d]||s[d]||a;return n?r.createElement(m,o(o({ref:t},p),{},{components:n})):r.createElement(m,o({ref:t},p))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=g;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var c=2;c<a;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},24679:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>o,default:()=>p,frontMatter:()=>a,metadata:()=>l,toc:()=>u});var r=n(87462),i=(n(67294),n(3905));const a={title:"GeneralContext Plugin",keywords:["generalContext"],description:"generalContext plugin"},o=void 0,l={unversionedId:"plugin-center/common/general-context-plugin",id:"plugin-center/common/general-context-plugin",isDocsHomePage:!1,title:"GeneralContext Plugin",description:"generalContext plugin",source:"@site/docs/plugin-center/common/general-context-plugin.md",sourceDirName:"plugin-center/common",slug:"/plugin-center/common/general-context-plugin",permalink:"/docs/next/plugin-center/common/general-context-plugin",editUrl:"https://github.com/apache/shenyu-website/edit/main/docs/plugin-center/common/general-context-plugin.md",version:"current",frontMatter:{title:"GeneralContext Plugin",keywords:["generalContext"],description:"generalContext plugin"},sidebar:"tutorialSidebar",previous:{title:"Metrics Plugin",permalink:"/docs/next/plugin-center/observability/metrics-plugin"},next:{title:"Cache Plugin",permalink:"/docs/next/plugin-center/cache/cache-plugin"}},u=[{value:"Description",id:"description",children:[]},{value:"Plugin Setting",id:"plugin-setting",children:[]},{value:"Situation",id:"situation",children:[]}],c={toc:u};function p(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"description"},"Description"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"When making invokes to the target service, Apache ShenYu gateway also allows users to use the ",(0,i.kt)("inlineCode",{parentName:"li"},"generalContext")," plugin to pass the service context parameters by reading the header in this request.")),(0,i.kt)("h2",{id:"plugin-setting"},"Plugin Setting"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"In ",(0,i.kt)("inlineCode",{parentName:"li"},"shenyu-admin")," --\x3e BasicConfig --\x3e Plugin --\x3e ",(0,i.kt)("inlineCode",{parentName:"li"},"generalContext"),", set to enable."),(0,i.kt)("li",{parentName:"ul"},"If the user don't use, please disable the plugin in the background.")),(0,i.kt)("img",{src:"/img/shenyu/plugin/general-context/general-context-open-en.png",width:"70%",height:"60%"}),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Introduce ",(0,i.kt)("inlineCode",{parentName:"li"},"generalContext")," support in the pox.xml file of the gateway.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-xml"},"        \x3c!-- apache shenyu general context plugin start--\x3e\n        <dependency>\n            <groupId>org.apache.shenyu</groupId>\n            <artifactId>shenyu-spring-boot-starter-plugin-general-context</artifactId>\n            <version>${project.version}</version>\n        </dependency>\n        \x3c!-- apache shenyu general context plugin end--\x3e\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Selectors and rules, please refer to: ",(0,i.kt)("a",{parentName:"li",href:"../../user-guide/admin-usage/selector-and-rule"},"Selector And Rule Config"),"."),(0,i.kt)("li",{parentName:"ul"},"Only those matched requests can print the information about this request.")),(0,i.kt)("h2",{id:"situation"},"Situation"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The parameters in the request header need to be passed to the proxy server."),(0,i.kt)("li",{parentName:"ul"},"Need to replace a key in the request header and pass it to the proxy server.")))}p.isMDXComponent=!0}}]);