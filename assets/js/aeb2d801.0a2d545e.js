"use strict";(self.webpackChunkshenyu_website=self.webpackChunkshenyu_website||[]).push([[70638],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>g});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=r.createContext({}),u=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},s=function(e){var t=u(e.components);return r.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,l=e.originalType,p=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),d=u(n),g=i,h=d["".concat(p,".").concat(g)]||d[g]||c[g]||l;return n?r.createElement(h,a(a({ref:t},s),{},{components:n})):r.createElement(h,a({ref:t},s))}));function g(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var l=n.length,a=new Array(l);a[0]=d;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:i,a[1]=o;for(var u=2;u<l;u++)a[u]=n[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},61276:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>a,default:()=>s,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var r=n(87462),i=(n(67294),n(3905));const l={title:"Rewrite Plugin",keywords:["rewrite"],description:"rewrite plugin"},a=void 0,o={unversionedId:"plugin-center/http-process/rewrite-plugin",id:"version-2.4.2/plugin-center/http-process/rewrite-plugin",isDocsHomePage:!1,title:"Rewrite Plugin",description:"rewrite plugin",source:"@site/versioned_docs/version-2.4.2/plugin-center/http-process/rewrite-plugin.md",sourceDirName:"plugin-center/http-process",slug:"/plugin-center/http-process/rewrite-plugin",permalink:"/docs/2.4.2/plugin-center/http-process/rewrite-plugin",editUrl:"https://github.com/apache/incubator-shenyu-website/edit/main/versioned_docs/version-2.4.2/plugin-center/http-process/rewrite-plugin.md",version:"2.4.2",frontMatter:{title:"Rewrite Plugin",keywords:["rewrite"],description:"rewrite plugin"},sidebar:"version-2.4.2/tutorialSidebar",previous:{title:"RequestPlugin",permalink:"/docs/2.4.2/plugin-center/http-process/request-plugin"},next:{title:"Divide Plugin",permalink:"/docs/2.4.2/plugin-center/proxy/divide-plugin"}},p=[{value:"Explanation",id:"explanation",children:[]},{value:"Plugin Setting",id:"plugin-setting",children:[]},{value:"Situation",id:"situation",children:[]}],u={toc:p};function s(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"explanation"},"Explanation"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"When making proxy invokes to the target service, Apache ShenYu gateway also allows users to rewrite the request path using the ",(0,i.kt)("inlineCode",{parentName:"li"},"rewrite")," plugin.")),(0,i.kt)("h2",{id:"plugin-setting"},"Plugin Setting"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"In ",(0,i.kt)("inlineCode",{parentName:"li"},"shenyu-admin")," --\x3e BasicConfig --\x3e Plugin --\x3e ",(0,i.kt)("inlineCode",{parentName:"li"},"rewrite")," , set to enable."),(0,i.kt)("li",{parentName:"ul"},"Add ",(0,i.kt)("inlineCode",{parentName:"li"},"rewrite")," support in the ",(0,i.kt)("inlineCode",{parentName:"li"},"pom.xml")," file of the gateway."),(0,i.kt)("li",{parentName:"ul"},"If the user don't use, please disable the plugin in the background.")),(0,i.kt)("img",{src:"/img/shenyu/plugin/rewrite/rewrite_open_en.png",width:"80%",height:"80%"}),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-xml"},"  \x3c!-- apache shenyu rewrite plugin start--\x3e\n  <dependency>\n      <groupId>org.apache.shenyu</groupId>\n      <artifactId>shenyu-spring-boot-starter-plugin-rewrite</artifactId>\n     <version>${project.version}</version>\n  </dependency>\n  \x3c!-- apache shenyu rewrite plugin end--\x3e\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Selectors and rules, please refer to: ",(0,i.kt)("a",{parentName:"li",href:"../../user-guide/admin-usage/selector-and-rule"},"Selector And Rule Config"),"."),(0,i.kt)("li",{parentName:"ul"},"Only those matched request will be rewritten.")),(0,i.kt)("h2",{id:"situation"},"Situation"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"As the name suggests, rewrite is a redefinition of URI.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"When the request is matched, set the user-defined path, and the user-defined path will overwrite the previous real path.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"When invoking, the user-defined path will be used."))))}s.isMDXComponent=!0}}]);