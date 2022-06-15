"use strict";(self.webpackChunkshenyu_website=self.webpackChunkshenyu_website||[]).push([[84720],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return f}});var i=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=i.createContext({}),p=function(e){var t=i.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=p(e.components);return i.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},d=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,u=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),d=p(n),f=r,m=d["".concat(u,".").concat(f)]||d[f]||c[f]||a;return n?i.createElement(m,l(l({ref:t},s),{},{components:n})):i.createElement(m,l({ref:t},s))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,l=new Array(a);l[0]=d;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var p=2;p<a;p++)l[p]=n[p];return i.createElement.apply(null,l)}return i.createElement.apply(null,n)}d.displayName="MDXCreateElement"},47475:function(e,t,n){n.r(t),n.d(t,{contentTitle:function(){return u},default:function(){return d},frontMatter:function(){return o},metadata:function(){return p},toc:function(){return s}});var i=n(87462),r=n(63366),a=(n(67294),n(3905)),l=["components"],o={sidebar_position:10,title:"Waf Plugin",keywords:["waf"],description:"waf plugin"},u=void 0,p={unversionedId:"plugins/waf-plugin",id:"version-2.3.0/plugins/waf-plugin",isDocsHomePage:!1,title:"Waf Plugin",description:"waf plugin",source:"@site/versioned_docs/version-2.3.0/plugins/waf-plugin.md",sourceDirName:"plugins",slug:"/plugins/waf-plugin",permalink:"/docs/2.3.0/plugins/waf-plugin",editUrl:"https://github.com/apache/incubator-shenyu-website/edit/main/versioned_docs/version-2.3.0/plugins/waf-plugin.md",version:"2.3.0",sidebarPosition:10,frontMatter:{sidebar_position:10,title:"Waf Plugin",keywords:["waf"],description:"waf plugin"},sidebar:"version-2.3.0/tutorialSidebar",previous:{title:"Monitor Plugin",permalink:"/docs/2.3.0/plugins/monitor-plugin"},next:{title:"Sign Plugin",permalink:"/docs/2.3.0/plugins/sign-plugin"}},s=[{value:"Explanation",id:"explanation",children:[]},{value:"Plugin Setting",id:"plugin-setting",children:[]},{value:"Plugin Detail",id:"plugin-detail",children:[]},{value:"Situation",id:"situation",children:[]}],c={toc:s};function d(e){var t=e.components,n=(0,r.Z)(e,l);return(0,a.kt)("wrapper",(0,i.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"explanation"},"Explanation"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Waf is the core implementation of gateway to realize firewall function for network traffic.")),(0,a.kt)("h2",{id:"plugin-setting"},"Plugin Setting"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"In ",(0,a.kt)("inlineCode",{parentName:"li"},"soul-admin")," --\x3e plugin management-> ",(0,a.kt)("inlineCode",{parentName:"li"},"waf")," set to enable."),(0,a.kt)("li",{parentName:"ul"},"If the user don't use, please disable the plugin in the background."),(0,a.kt)("li",{parentName:"ul"},"Add configuration mode in plugin editing.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},'{"model":"black"}  \n# The default mode is blacklist mode; If setting is mixed, it will be mixed mode. We will explain it specifically below.\n')),(0,a.kt)("h2",{id:"plugin-detail"},"Plugin Detail"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Introducing ",(0,a.kt)("inlineCode",{parentName:"li"},"waf")," dependency in the pom.xml of the gateway.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-xml"},"  \x3c!-- soul waf plugin start--\x3e\n  <dependency>\n      <groupId>org.dromara</groupId>\n      <artifactId>soul-spring-boot-starter-plugin-waf</artifactId>\n      <version>${last.version}</version>\n  </dependency>\n  \x3c!-- soul waf plugin end--\x3e\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Selectors and rules, please refer to : ",(0,a.kt)("a",{parentName:"li",href:"../admin/selector-and-rule"},"selector")),(0,a.kt)("li",{parentName:"ul"},"When ",(0,a.kt)("inlineCode",{parentName:"li"},"model")," is set to ",(0,a.kt)("inlineCode",{parentName:"li"},"black")," mode, only the matched traffic will execute the rejection policy, and the unmatched traffic will be skipped directly."),(0,a.kt)("li",{parentName:"ul"},"When ",(0,a.kt)("inlineCode",{parentName:"li"},"model")," is set to ",(0,a.kt)("inlineCode",{parentName:"li"},"mixed")," mode, all traffic will pass through waf plugin. For different matching traffic, users can set whether to reject or pass.")),(0,a.kt)("h2",{id:"situation"},"Situation"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Waf is also the pre-plugin of soul, which is mainly used to intercept illegal requests or exception requests and give relevant rejection policies."),(0,a.kt)("li",{parentName:"ul"},"When faced with replay attacks, you can intercept illegal ip and host, and set reject strategy according to matched ip or host."),(0,a.kt)("li",{parentName:"ul"},"How to determine ip and host, please refer to: ",(0,a.kt)("a",{parentName:"li",href:"../developer-guide/custom-parsing-ip-and-host"},"parsing-ip-and-host"))))}d.isMDXComponent=!0}}]);