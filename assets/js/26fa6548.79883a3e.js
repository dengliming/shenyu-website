"use strict";(self.webpackChunkshenyu_website=self.webpackChunkshenyu_website||[]).push([[32704],{3905:(e,n,t)=>{t.d(n,{Zo:()=>m,kt:()=>d});var i=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,i,r=function(e,n){if(null==e)return{};var t,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)t=a[i],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)t=a[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var p=i.createContext({}),u=function(e){var n=i.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},m=function(e){var n=u(e.components);return i.createElement(p.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},c=i.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,p=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),c=u(t),d=r,k=c["".concat(p,".").concat(d)]||c[d]||s[d]||a;return t?i.createElement(k,l(l({ref:n},m),{},{components:t})):i.createElement(k,l({ref:n},m))}));function d(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,l=new Array(a);l[0]=c;var o={};for(var p in n)hasOwnProperty.call(n,p)&&(o[p]=n[p]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var u=2;u<a;u++)l[u]=t[u];return i.createElement.apply(null,l)}return i.createElement.apply(null,t)}c.displayName="MDXCreateElement"},74647:(e,n,t)=>{t.r(n),t.d(n,{contentTitle:()=>l,default:()=>m,frontMatter:()=>a,metadata:()=>o,toc:()=>p});var i=t(87462),r=(t(67294),t(3905));const a={title:"Mock Plugin",keywords:["mock"],description:"mock plugin"},l="1. Overview",o={unversionedId:"plugin-center/mock/mock-plugin",id:"plugin-center/mock/mock-plugin",isDocsHomePage:!1,title:"Mock Plugin",description:"mock plugin",source:"@site/docs/plugin-center/mock/mock-plugin.md",sourceDirName:"plugin-center/mock",slug:"/plugin-center/mock/mock-plugin",permalink:"/docs/next/plugin-center/mock/mock-plugin",editUrl:"https://github.com/apache/incubator-shenyu-website/edit/main/docs/plugin-center/mock/mock-plugin.md",version:"current",frontMatter:{title:"Mock Plugin",keywords:["mock"],description:"mock plugin"},sidebar:"tutorialSidebar",previous:{title:"Cache Plugin",permalink:"/docs/next/plugin-center/cache/cache-plugin"},next:{title:"Custom Load Balancer",permalink:"/docs/next/developer/spi/custom-load-balance"}},p=[{value:"1.1 Plugin Name",id:"11-plugin-name",children:[]},{value:"1.2 Appropriate Scenario",id:"12-appropriate-scenario",children:[]},{value:"1.3 Plugin functionality",id:"13-plugin-functionality",children:[]},{value:"1.4 Plugin Code",id:"14-plugin-code",children:[]},{value:"1.5 Added since which shenyu version",id:"15-added-since-which-shenyu-version",children:[]},{value:"2.1 Import pom",id:"21-import-pom",children:[]},{value:"2.2 Enable plugin",id:"22-enable-plugin",children:[]},{value:"2.3 Config plugin",id:"23-config-plugin",children:[]},{value:"2.4 <code>${}</code> supported syntax",id:"24--supported-syntax",children:[]}],u={toc:p};function m(e){let{components:n,...a}=e;return(0,r.kt)("wrapper",(0,i.Z)({},u,a,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"1-overview"},"1. Overview"),(0,r.kt)("h2",{id:"11-plugin-name"},"1.1 Plugin Name"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Mock Plugin")),(0,r.kt)("h2",{id:"12-appropriate-scenario"},"1.2 Appropriate Scenario"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Specify the status code and response body for the request to facilitate testing.")),(0,r.kt)("h2",{id:"13-plugin-functionality"},"1.3 Plugin functionality"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Set the status code and body of the request."),(0,r.kt)("li",{parentName:"ul"},"Support configuration ",(0,r.kt)("inlineCode",{parentName:"li"},"${}")," placeholder to automatically generate data.")),(0,r.kt)("h2",{id:"14-plugin-code"},"1.4 Plugin Code"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Core module ",(0,r.kt)("inlineCode",{parentName:"li"},"shenyu-plugin-mock")),(0,r.kt)("li",{parentName:"ul"},"Core class ",(0,r.kt)("inlineCode",{parentName:"li"},"org.apache.shenyu.plugin.mock.MockPlugin"))),(0,r.kt)("h2",{id:"15-added-since-which-shenyu-version"},"1.5 Added since which shenyu version"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"2.5.0")),(0,r.kt)("h1",{id:"2-how-to-use-plugin"},"2. How to use plugin"),(0,r.kt)("h2",{id:"21-import-pom"},"2.1 Import pom"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"import maven config in shenyu-bootstrap project's ",(0,r.kt)("inlineCode",{parentName:"li"},"pom.xml")," file.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-xml"},"<dependency>\n    <groupId>org.apache.shenyu</groupId>\n    <artifactId>shenyu-spring-boot-starter-plugin-mock</artifactId>\n    <version>${project.version}</version>\n</dependency>\n")),(0,r.kt)("h2",{id:"22-enable-plugin"},"2.2 Enable plugin"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"In ",(0,r.kt)("inlineCode",{parentName:"li"},"shenyu-admin")," --\x3e BasicConfig --\x3e Plugin --\x3e ",(0,r.kt)("inlineCode",{parentName:"li"},"mock")," set Status enable.")),(0,r.kt)("p",null,(0,r.kt)("img",{src:t(9623).Z})),(0,r.kt)("h2",{id:"23-config-plugin"},"2.3 Config plugin"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Selector and rule config, please refer: ",(0,r.kt)("a",{parentName:"li",href:"../../user-guide/admin-usage/selector-and-rule"},"Selector and rule config"),"."),(0,r.kt)("li",{parentName:"ul"},"shenyu-admin mock plugin configuration, supports configuring httpStatusCode and responseContent",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"httpStatusCode:the status code of the request."),(0,r.kt)("li",{parentName:"ul"},"responseContent:the response body of the request,support configuring ",(0,r.kt)("inlineCode",{parentName:"li"},"${}")," placeholders to generate random data.")))),(0,r.kt)("p",null,(0,r.kt)("img",{src:t(91754).Z})),(0,r.kt)("h2",{id:"24--supported-syntax"},"2.4 ",(0,r.kt)("inlineCode",{parentName:"h2"},"${}")," supported syntax"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"${int|min-max}"))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Description:")," Generate random integers from ",(0,r.kt)("inlineCode",{parentName:"li"},"min")," to ",(0,r.kt)("inlineCode",{parentName:"li"},"max"),", inclusive of ",(0,r.kt)("inlineCode",{parentName:"li"},"min")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"max"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Example:")," ",(0,r.kt)("inlineCode",{parentName:"li"},"${int|10-20}"))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"${double|min-max|format}"))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Description:")," Generate random floating point numbers from ",(0,r.kt)("inlineCode",{parentName:"li"},"min")," to ",(0,r.kt)("inlineCode",{parentName:"li"},"max"),", formatted according to ",(0,r.kt)("inlineCode",{parentName:"li"},"format"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Example:")," ",(0,r.kt)("inlineCode",{parentName:"li"},"${double|10-20}")," , ",(0,r.kt)("inlineCode",{parentName:"li"},"${double|10-20.5|%.2f}"))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"${email}"))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Description:")," Generate random email addresses.")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"${phone}"))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Description:")," Generate random 13-digit mobile number.")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"${zh|min-max}"))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Description:")," Generate random Chinese strings of length ",(0,r.kt)("inlineCode",{parentName:"li"},"min")," to ",(0,r.kt)("inlineCode",{parentName:"li"},"max"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Example:")," ",(0,r.kt)("inlineCode",{parentName:"li"},"${zh|10-20}"))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"${en|min-max}"))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Description:")," Generate random English strings of length ",(0,r.kt)("inlineCode",{parentName:"li"},"min")," to ",(0,r.kt)("inlineCode",{parentName:"li"},"max"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Example:")," ",(0,r.kt)("inlineCode",{parentName:"li"},"${en|10-20}"))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"${bool}"))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Description:")," Generate a random ",(0,r.kt)("inlineCode",{parentName:"li"},"boolean")," value i.e. ",(0,r.kt)("inlineCode",{parentName:"li"},"true")," or ",(0,r.kt)("inlineCode",{parentName:"li"},"false"),".")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"${list|[arg1,arg2...]}"))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Description:")," Randomly returns any value in a list as a string."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Example:")," ",(0,r.kt)("inlineCode",{parentName:"li"},"${list|[gril,boy]}")," will return ",(0,r.kt)("inlineCode",{parentName:"li"},"boy")," or ",(0,r.kt)("inlineCode",{parentName:"li"},"girl"))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"${current|format}"))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Description:")," Returns the current time and uses ",(0,r.kt)("inlineCode",{parentName:"li"},"format")," to format, ",(0,r.kt)("inlineCode",{parentName:"li"},"format")," can be default, the default is ",(0,r.kt)("inlineCode",{parentName:"li"},"YYYY-MM-dd HH:mm:ss"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Example:")," ",(0,r.kt)("inlineCode",{parentName:"li"},"${current}"),"\uff0c",(0,r.kt)("inlineCode",{parentName:"li"},"${current|YYYY-MM-dd}"))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Try not to use ",(0,r.kt)("inlineCode",{parentName:"strong"},'""')," to wrap ",(0,r.kt)("inlineCode",{parentName:"strong"},"${}")," , the mock plugin will decide whether to add ",(0,r.kt)("inlineCode",{parentName:"strong"},'""')," according to the content generated by ",(0,r.kt)("inlineCode",{parentName:"strong"},"${}"))))}m.isMDXComponent=!0},9623:(e,n,t)=>{t.d(n,{Z:()=>i});const i=t.p+"assets/images/enable-mock-plugin-en-4c1452eb346e287d11b94f8cdf4cbec7.png"},91754:(e,n,t)=>{t.d(n,{Z:()=>i});const i=t.p+"assets/images/mock-rule-configuration-en-f71ebf28e7338971afc9136819d32277.png"}}]);