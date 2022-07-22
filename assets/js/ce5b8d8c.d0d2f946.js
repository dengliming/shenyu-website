"use strict";(self.webpackChunkshenyu_website=self.webpackChunkshenyu_website||[]).push([[71258],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>g});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var u=r.createContext({}),p=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,u=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),d=p(n),g=i,m=d["".concat(u,".").concat(g)]||d[g]||c[g]||a;return n?r.createElement(m,l(l({ref:t},s),{},{components:n})):r.createElement(m,l({ref:t},s))}));function g(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,l=new Array(a);l[0]=d;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:i,l[1]=o;for(var p=2;p<a;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},74403:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>l,default:()=>s,frontMatter:()=>a,metadata:()=>o,toc:()=>u});var r=n(87462),i=(n(67294),n(3905));const a={sidebar_position:12,title:"Rewrite Plugin",keywords:["rewrite"],description:"rewrite plugin"},l=void 0,o={unversionedId:"plugins/rewrite-plugin",id:"version-2.3.0-Legacy/plugins/rewrite-plugin",isDocsHomePage:!1,title:"Rewrite Plugin",description:"rewrite plugin",source:"@site/versioned_docs/version-2.3.0-Legacy/plugins/rewrite-plugin.md",sourceDirName:"plugins",slug:"/plugins/rewrite-plugin",permalink:"/docs/2.3.0-Legacy/plugins/rewrite-plugin",editUrl:"https://github.com/apache/incubator-shenyu-website/edit/main/versioned_docs/version-2.3.0-Legacy/plugins/rewrite-plugin.md",version:"2.3.0-Legacy",sidebarPosition:12,frontMatter:{sidebar_position:12,title:"Rewrite Plugin",keywords:["rewrite"],description:"rewrite plugin"},sidebar:"version-2.3.0-Legacy/tutorialSidebar",previous:{title:"Sign Plugin",permalink:"/docs/2.3.0-Legacy/plugins/sign-plugin"},next:{title:"Websocket Plugin",permalink:"/docs/2.3.0-Legacy/plugins/websocket-plugin"}},u=[{value:"Explanation",id:"explanation",children:[]},{value:"Plugin Setting",id:"plugin-setting",children:[]},{value:"Situation",id:"situation",children:[]}],p={toc:u};function s(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"explanation"},"Explanation"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"When making proxy invokes to the target service, soul Gateway also allows users to rewrite the request path using the ",(0,i.kt)("inlineCode",{parentName:"li"},"rewrite")," plugin.")),(0,i.kt)("h2",{id:"plugin-setting"},"Plugin Setting"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"In ",(0,i.kt)("inlineCode",{parentName:"li"},"soul-admin")," --\x3e plugin management --\x3e ",(0,i.kt)("inlineCode",{parentName:"li"},"rewrite")," ,set to enable."),(0,i.kt)("li",{parentName:"ul"},"Introduce ",(0,i.kt)("inlineCode",{parentName:"li"},"rewrite")," support in the pox.xml file of the gateway."),(0,i.kt)("li",{parentName:"ul"},"If the user don't use, please disable the plugin in the background.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-xml"},"  \x3c!-- soul rewrite plugin start--\x3e\n  <dependency>\n      <groupId>org.dromara</groupId>\n      <artifactId>soul-spring-boot-starter-plugin-rewrite</artifactId>\n     <version>${last.version}</version>\n  </dependency>\n  \x3c!-- soul rewrite plugin end--\x3e\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Selectors and rules, please refer to: ",(0,i.kt)("a",{parentName:"li",href:"../admin/selector-and-rule"},"selector"),"."),(0,i.kt)("li",{parentName:"ul"},"Only those matched request will be rewritten.")),(0,i.kt)("h2",{id:"situation"},"Situation"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"As the name suggests, rewrite is a redefinition of URI. ")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"When the request is matched, set the user-defined path, and the user-defined path will overwrite the previous real path.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"When invoking, the user-defined path will be used."))))}s.isMDXComponent=!0}}]);