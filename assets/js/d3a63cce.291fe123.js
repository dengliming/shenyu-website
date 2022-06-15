"use strict";(self.webpackChunkshenyu_website=self.webpackChunkshenyu_website||[]).push([[79671],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=r.createContext({}),u=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,p=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=u(n),m=i,g=d["".concat(p,".").concat(m)]||d[m]||s[m]||a;return n?r.createElement(g,l(l({ref:t},c),{},{components:n})):r.createElement(g,l({ref:t},c))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,l=new Array(a);l[0]=d;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:i,l[1]=o;for(var u=2;u<a;u++)l[u]=n[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},23106:function(e,t,n){n.r(t),n.d(t,{contentTitle:function(){return p},default:function(){return d},frontMatter:function(){return o},metadata:function(){return u},toc:function(){return c}});var r=n(87462),i=n(63366),a=(n(67294),n(3905)),l=["components"],o={title:"Hystrix Plugin",keywords:["Hystrix"],description:"hystrix plugin"},p=void 0,u={unversionedId:"plugin-center/fault-tolerance/hystrix-plugin",id:"plugin-center/fault-tolerance/hystrix-plugin",isDocsHomePage:!1,title:"Hystrix Plugin",description:"hystrix plugin",source:"@site/docs/plugin-center/fault-tolerance/hystrix-plugin.md",sourceDirName:"plugin-center/fault-tolerance",slug:"/plugin-center/fault-tolerance/hystrix-plugin",permalink:"/docs/next/plugin-center/fault-tolerance/hystrix-plugin",editUrl:"https://github.com/apache/incubator-shenyu-website/edit/main/docs/plugin-center/fault-tolerance/hystrix-plugin.md",version:"current",frontMatter:{title:"Hystrix Plugin",keywords:["Hystrix"],description:"hystrix plugin"},sidebar:"tutorialSidebar",previous:{title:"WebSocket Plugin",permalink:"/docs/next/plugin-center/proxy/websocket-plugin"},next:{title:"RateLimiter Plugin",permalink:"/docs/next/plugin-center/fault-tolerance/rate-limiter-plugin"}},c=[{value:"Description",id:"description",children:[]},{value:"Plugin Setting",id:"plugin-setting",children:[]},{value:"Add hystrix plugin dependency",id:"add-hystrix-plugin-dependency",children:[]},{value:"Hystrix Config",id:"hystrix-config",children:[]}],s={toc:c};function d(e){var t=e.components,n=(0,i.Z)(e,l);return(0,a.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"description"},"Description"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Hystrix")," plugin is the core implementation used by gateway to fuse traffic."),(0,a.kt)("li",{parentName:"ul"},"Support ",(0,a.kt)("inlineCode",{parentName:"li"},"thread")," and ",(0,a.kt)("inlineCode",{parentName:"li"},"semaphore")," .")),(0,a.kt)("h2",{id:"plugin-setting"},"Plugin Setting"),(0,a.kt)("p",null,"Select a mode to start shenyu-admin. For details, see  deployment. For example, with ",(0,a.kt)("a",{parentName:"p",href:"../../deployment/deployment-local"},"Local Deployment")," starts the ",(0,a.kt)("inlineCode",{parentName:"p"},"Apache ShenYu")," background management system."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"In BasicConfig --\x3e Plugin --\x3e hystrix, set to enable."),(0,a.kt)("li",{parentName:"ul"},"If the user don't use, please disable the plugin in the background.")),(0,a.kt)("img",{src:"/img/shenyu/plugin/hystrix/hystrix_open_en.png",width:"80%",height:"80%"}),(0,a.kt)("h2",{id:"add-hystrix-plugin-dependency"},"Add hystrix plugin dependency"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Add ",(0,a.kt)("inlineCode",{parentName:"li"},"hystrix")," dependency in the ",(0,a.kt)("inlineCode",{parentName:"li"},"pom.xml")," file of the gateway.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-xml"},"        \x3c!-- apache shenyu hystrix plugin start--\x3e\n        <dependency>\n            <groupId>org.apache.shenyu</groupId>\n            <artifactId>shenyu-spring-boot-starter-plugin-hystrix</artifactId>\n            <version>${project.version}</version>\n        </dependency>\n        \x3c!-- apache shenyu hystrix plugin end--\x3e\n")),(0,a.kt)("h2",{id:"hystrix-config"},"Hystrix Config"),(0,a.kt)("p",null,"For more information on selectors and rules configuration, see ",(0,a.kt)("a",{parentName:"p",href:"../../user-guide/admin-usage/selector-and-rule"},"Selector And Rule Config")," , only some of the fields are covered here."),(0,a.kt)("h4",{id:"selector-config"},"Selector Config"),(0,a.kt)("p",null,"It is used to filter traffic for the first time and does not require handle fields."),(0,a.kt)("img",{src:"/img/shenyu/plugin/hystrix/selector_en.png",width:"80%",height:"80%"}),(0,a.kt)("h4",{id:"rule-config"},"Rule Config"),(0,a.kt)("p",null,"For the final filtering of traffic, there is a rule handler logic, isolation mode supports ",(0,a.kt)("inlineCode",{parentName:"p"},"thread")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"semaphore"),"."),(0,a.kt)("img",{src:"/img/shenyu/plugin/hystrix/rule_en.png",width:"80%",height:"80%"}),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Hystrix handler details:"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"MinimumRequests"),": the minimum number of requests required to trigger a circuit breaker.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"ErrorThresholdPercentage"),": percentage of exception occurring during that time.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"MaxConcurrentRequests"),": max concurrent requests.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"Sleep"),"(ms): The recovery time after the circuit breaker.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"GroupKey"),": It is generally set to: ",(0,a.kt)("inlineCode",{parentName:"p"},"contextPath"),".")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"CallBackUrl"),": default url ",(0,a.kt)("inlineCode",{parentName:"p"},"/fallback/hystrix"),".")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"CommandKey"),": generally, it is set to a specific path interface."))))))}d.isMDXComponent=!0}}]);