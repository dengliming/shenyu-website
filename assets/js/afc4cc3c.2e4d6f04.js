"use strict";(self.webpackChunkshenyu_website=self.webpackChunkshenyu_website||[]).push([[69403],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},s="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,c=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),s=p(n),g=i,h=s["".concat(c,".").concat(g)]||s[g]||d[g]||a;return n?r.createElement(h,l(l({ref:t},u),{},{components:n})):r.createElement(h,l({ref:t},u))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,l=new Array(a);l[0]=g;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o[s]="string"==typeof e?e:i,l[1]=o;for(var p=2;p<a;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},51790:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>l,default:()=>s,frontMatter:()=>a,metadata:()=>o,toc:()=>c});var r=n(87462),i=(n(67294),n(3905));const a={title:"Redirect Plugin",keywords:["redirect"],description:"redirect plugin"},l=void 0,o={unversionedId:"plugin-center/http-process/redirect-plugin",id:"version-2.4.2/plugin-center/http-process/redirect-plugin",isDocsHomePage:!1,title:"Redirect Plugin",description:"redirect plugin",source:"@site/versioned_docs/version-2.4.2/plugin-center/http-process/redirect-plugin.md",sourceDirName:"plugin-center/http-process",slug:"/plugin-center/http-process/redirect-plugin",permalink:"/docs/2.4.2/plugin-center/http-process/redirect-plugin",editUrl:"https://github.com/apache/shenyu-website/edit/main/versioned_docs/version-2.4.2/plugin-center/http-process/redirect-plugin.md",version:"2.4.2",frontMatter:{title:"Redirect Plugin",keywords:["redirect"],description:"redirect plugin"},sidebar:"version-2.4.2/tutorialSidebar",previous:{title:"ParamMapping Plugin",permalink:"/docs/2.4.2/plugin-center/http-process/parammapping-plugin"},next:{title:"RequestPlugin",permalink:"/docs/2.4.2/plugin-center/http-process/request-plugin"}},c=[{value:"Explanation",id:"explanation",children:[]},{value:"Plugin Setting",id:"plugin-setting",children:[]},{value:"Maven Dependency",id:"maven-dependency",children:[]},{value:"Situation",id:"situation",children:[{value:"Redirect",id:"redirect",children:[]},{value:"Gateway&#39;s own interface forwarding",id:"gateways-own-interface-forwarding",children:[]}]}],p={toc:c},u="wrapper";function s(e){let{components:t,...n}=e;return(0,i.kt)(u,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"explanation"},"Explanation"),(0,i.kt)("p",null,"When the Apache ShenYu gateway makes proxy calls to the target service, it also allows users to use the ",(0,i.kt)("inlineCode",{parentName:"p"},"redirect")," plugin to redirect requests."),(0,i.kt)("h2",{id:"plugin-setting"},"Plugin Setting"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"In ",(0,i.kt)("inlineCode",{parentName:"li"},"shenyu-admin")," --\x3e BasicConfig --\x3e Plugin --\x3e ",(0,i.kt)("inlineCode",{parentName:"li"},"redirect")," , set to enable."),(0,i.kt)("li",{parentName:"ul"},"If the user don't use, please disable the plugin in the background."),(0,i.kt)("li",{parentName:"ul"},"Selectors and rules, only matching requests will be forwarded and redirected, please see: ",(0,i.kt)("a",{parentName:"li",href:"../../user-guide/admin-usage/selector-and-rule"},"Selector And Rule Config")," .")),(0,i.kt)("img",{src:"/img/shenyu/plugin/redirect/redirect-plugin-enable-en.png",width:"70%",height:"60%"}),(0,i.kt)("h2",{id:"maven-dependency"},"Maven Dependency"),(0,i.kt)("p",null,"Add the plugin dependency in the pom.xml file of the shenyu-bootstrap project."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-xml"},"  \x3c!-- apache shenyu redirect plugin start--\x3e\n  <dependency>\n      <groupId>org.apache.shenyu</groupId>\n      <artifactId>shenyu-spring-boot-starter-plugin-redirect</artifactId>\n     <version>${project.version}</version>\n  </dependency>\n  \x3c!-- apache shenyu redirect plugin end--\x3e\n")),(0,i.kt)("h2",{id:"situation"},"Situation"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"As the name suggests, the ",(0,i.kt)("inlineCode",{parentName:"p"},"redirect")," plugin is to re-forward and redirect ",(0,i.kt)("inlineCode",{parentName:"p"},"uri"),".")),(0,i.kt)("h3",{id:"redirect"},"Redirect"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"When we configure a custom path in ",(0,i.kt)("inlineCode",{parentName:"li"},"Rule"),", it should be a reachable service path."),(0,i.kt)("li",{parentName:"ul"},"When the request is matched, the ",(0,i.kt)("inlineCode",{parentName:"li"},"ShenYu Gateway")," will perform the ",(0,i.kt)("inlineCode",{parentName:"li"},"308")," service jump according to the customized path.")),(0,i.kt)("img",{src:"/img/shenyu/plugin/redirect/redirect-plugin-rule-en.png",width:"70%",height:"60%"}),(0,i.kt)("h3",{id:"gateways-own-interface-forwarding"},"Gateway's own interface forwarding"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"When the matching rules are met, the service will use the ",(0,i.kt)("inlineCode",{parentName:"li"},"DispatcherHandler")," internal interface for forwarding."),(0,i.kt)("li",{parentName:"ul"},"To implement the gateway's own interface forwarding, we need to use ",(0,i.kt)("inlineCode",{parentName:"li"},"/")," as the prefix in the configuration path. The specific configuration is as shown in the figure below.")),(0,i.kt)("img",{src:"/img/shenyu/plugin/redirect/redirect-plugin-forward-rule-en.png",width:"70%",height:"60%"}))}s.isMDXComponent=!0}}]);