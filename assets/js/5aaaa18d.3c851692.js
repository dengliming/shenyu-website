"use strict";(self.webpackChunkshenyu_website=self.webpackChunkshenyu_website||[]).push([[69188],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=u(n),h=o,m=d["".concat(s,".").concat(h)]||d[h]||c[h]||r;return n?a.createElement(m,i(i({ref:t},p),{},{components:n})):a.createElement(m,i({ref:t},p))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var u=2;u<r;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},38050:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>i,default:()=>p,frontMatter:()=>r,metadata:()=>l,toc:()=>s});var a=n(87462),o=(n(67294),n(3905));const r={title:"\u3010Soul gateway release milestone version 2.3.0\u3011New support for grpc, tars and sofa protocols!",author:"xiaoyu",description:"Soul gateway release milestone version 2.3.0 New support for grpc, tars and sofa protocols",categories:"Apache ShenYu",tags:["Apache ShenYu"],date:new Date("2020-07-05T00:00:00.000Z"),cover:"/img/architecture/shenyu-framework.png"},i=void 0,l={permalink:"/news/Soul-gateway-release-milestone-version-2.3.0",source:"@site/news/Soul-gateway-release-milestone-version-2.3.0.md",title:"\u3010Soul gateway release milestone version 2.3.0\u3011New support for grpc, tars and sofa protocols!",description:"Soul gateway release milestone version 2.3.0 New support for grpc, tars and sofa protocols",date:"2020-07-05T00:00:00.000Z",formattedDate:"July 5, 2020",tags:[{label:"Apache ShenYu",permalink:"/news/tags/apache-shen-yu"}],readingTime:3.365,truncated:!1,prevItem:{title:"[The Open Source Path for Tech Veterans]",permalink:"/news/Apache-ShenYu-Committer-2022-02-28"}},s=[{value:"soul-admin\uff08dashboard\uff09",id:"soul-admindashboard",children:[]},{value:"Soul gateway plugin",id:"soul-gateway-plugin",children:[{value:"New plugins",id:"new-plugins",children:[]},{value:"plugins optimization",id:"plugins-optimization",children:[]}]},{value:"Soul Client",id:"soul-client",children:[]},{value:"Soul data synchronization",id:"soul-data-synchronization",children:[]},{value:"Thanks",id:"thanks",children:[]},{value:"Join us",id:"join-us",children:[]}],u={toc:s};function p(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"It's half a year since the last release. In this half a year, our community friends and I have done too much. Completed nearly 200 PR, published nearly 300 articles of source code analysis, added more than 120 contributors, promoted 7 members of the commiter who  won the legitimate JetBrains. We have completed many, many functions  With their help. Thank you very much."),(0,o.kt)("h2",{id:"soul-admindashboard"},"soul-admin\uff08dashboard\uff09"),(0,o.kt)("p",null,"Admin is the control panel of the whole gateway, which is in charge of all traffic and rules matching."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"The Shiro framework is integrated into admin to complete the  permission control in user button level. "),(0,o.kt)("li",{parentName:"ul"},"Templated plug-ins allow users to focus on data configuration without perceiving front-end pages."),(0,o.kt)("li",{parentName:"ul"},"The internationalization of the whole backend of admin , supports switching between Chinese and English. "),(0,o.kt)("li",{parentName:"ul"},"New support for H2 to store data."),(0,o.kt)("li",{parentName:"ul"},"Beautiful optimization of admin interface (table, button)."),(0,o.kt)("li",{parentName:"ul"},"New unit tests have been added, with a coverage rate of 70%.")),(0,o.kt)("h2",{id:"soul-gateway-plugin"},"Soul gateway plugin"),(0,o.kt)("h3",{id:"new-plugins"},"New plugins"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Add Grpc plugin to fully support grpc protocol."),(0,o.kt)("li",{parentName:"ul"},"Add Tars plugin to support Tencent tars RPC Protocol."),(0,o.kt)("li",{parentName:"ul"},"Add sofa plugin supports the sofa RPC Protocol."),(0,o.kt)("li",{parentName:"ul"},"Add sentinel plugin to integrate the fusing and current limiting function of sentinel framework."),(0,o.kt)("li",{parentName:"ul"},"Add The resilience4j plugin to integrate the fusing and current limiting function of resilience4j framework."),(0,o.kt)("li",{parentName:"ul"},"Add the redisect plugin to support user redirection."),(0,o.kt)("li",{parentName:"ul"},"Add context path plugin to support user-defined context path")),(0,o.kt)("h3",{id:"plugins-optimization"},"plugins optimization"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Divide plugin: optimization of node detection mode and flow preheating mode."),(0,o.kt)("li",{parentName:"ul"},"Ratelimit plugin: add some different current limiting algorithms  such as concurrent, leaky bucket and other for users to choose ."),(0,o.kt)("li",{parentName:"ul"},"Sign plugin: fix the bug that URL must be set; add whether to verify flag, which can be used for URI authentication of open platform."),(0,o.kt)("li",{parentName:"ul"},"Dubbo plugin: add form, URI parameter request, direct connection to registration center , parameter verification and other functions.")),(0,o.kt)("h2",{id:"soul-client"},"Soul Client"),(0,o.kt)("p",null,"Soul client only provides a client to access the soul gateway with a quick way, which is not necessary. you can configure the rules in Soul admin If you don't use Soul Client. "),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Spring MVC client optimization, support spring, spring boot all versions."),(0,o.kt)("li",{parentName:"ul"},"Spring cloud client optimization, support spring, spring boot all versions."),(0,o.kt)("li",{parentName:"ul"},"Dubbo client optimization, support spring, spring boot all versions."),(0,o.kt)("li",{parentName:"ul"},"Soul grpc client is added to support grpc Java user access."),(0,o.kt)("li",{parentName:"ul"},"Soul tars client is added to support tars Java user access."),(0,o.kt)("li",{parentName:"ul"},"Soul sofa client is added to support sofa Java user access.")),(0,o.kt)("p",null,"In the previous version, only HTTP access is supported, but  the registry access is added this time."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Zookeeper is added as the registration center to access Soul gateway."),(0,o.kt)("li",{parentName:"ul"},"Nacos is added as the registration center to access Soul gateway."),(0,o.kt)("li",{parentName:"ul"},"Consul is added as the registration center to access Soul gateway."),(0,o.kt)("li",{parentName:"ul"},"Etcd is added as the registration center to access Soul gateway."),(0,o.kt)("li",{parentName:"ul"},"Please refer to ",(0,o.kt)("a",{parentName:"li",href:"https://shenyu.apache.org/en/projects/shenyu/register-center-design/"},"https://shenyu.apache.org/en/projects/shenyu/register-center-design/"))),(0,o.kt)("h2",{id:"soul-data-synchronization"},"Soul data synchronization"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Fix bugs in Nacos configuration center that do not have namespace set."),(0,o.kt)("li",{parentName:"ul"},"Optimize websocket synchronization mode."),(0,o.kt)("li",{parentName:"ul"},"Solve the HTTP long polling synchronous data bug when  the soul admin in deployed in cluster")),(0,o.kt)("h2",{id:"thanks"},"Thanks"),(0,o.kt)("p",null,"This is a milestone release and a formal change of Soul gateway. Our dashboard, code, documents, issue and PR are all internationalized in English, and the unit test coverage of the whole project has reached 70%.Thank you again for your hard work. Although we have completed a lot of functions (I did not fully list them above), we will have more challenges in the future. I believe that with you, this is not our end, but our starting point."),(0,o.kt)("h2",{id:"join-us"},"Join us"),(0,o.kt)("p",null,"At present, Soul is in the stage of rapid development. If you want to write high-quality code, or want to deeply understand the API gateway, or enjoy the fun of open source, you are welcome to join our community"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"github : ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-shenyu"},"https://github.com/apache/incubator-shenyu")," "),(0,o.kt)("li",{parentName:"ul"},"gitee : ",(0,o.kt)("a",{parentName:"li",href:"https://gitee.com/Apache-ShenYu/incubator-shenyu"},"https://gitee.com/Apache-ShenYu/incubator-shenyu")," "),(0,o.kt)("li",{parentName:"ul"},"QQ group\uff1a429951241")))}p.isMDXComponent=!0}}]);