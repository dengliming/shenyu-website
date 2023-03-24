"use strict";(self.webpackChunkshenyu_website=self.webpackChunkshenyu_website||[]).push([[5303],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},h="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),h=u(n),d=a,m=h["".concat(l,".").concat(d)]||h[d]||p[d]||o;return n?r.createElement(m,i(i({ref:t},c),{},{components:n})):r.createElement(m,i({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[h]="string"==typeof e?e:a,i[1]=s;for(var u=2;u<o;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},78417:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>i,default:()=>h,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var r=n(87462),a=(n(67294),n(3905));const o={sidebar_position:1,title:"Overview",keywords:["Apache shenyu"],description:"This is an asynchronous, high-performance, cross-language, responsive API gateway.",aliases:"/shenyu/docs/Home"},i="Architecture",s={unversionedId:"index",id:"version-2.5.0/index",isDocsHomePage:!1,title:"Overview",description:"This is an asynchronous, high-performance, cross-language, responsive API gateway.",source:"@site/versioned_docs/version-2.5.0/index.md",sourceDirName:".",slug:"/index",permalink:"/docs/2.5.0/index",editUrl:"https://github.com/apache/shenyu-website/edit/main/versioned_docs/version-2.5.0/index.md",version:"2.5.0",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"Overview",keywords:["Apache shenyu"],description:"This is an asynchronous, high-performance, cross-language, responsive API gateway.",aliases:"/shenyu/docs/Home"},sidebar:"version-2.5.0/tutorialSidebar",next:{title:"Admin Database Design",permalink:"/docs/2.5.0/design/database-design"}},l=[{value:"Run Apache ShenYu Admin",id:"run-apache-shenyu-admin",children:[]},{value:"Run Apache ShenYu Bootstrap",id:"run-apache-shenyu-bootstrap",children:[]},{value:"Set router",id:"set-router",children:[]}],u={toc:l},c="wrapper";function h(e){let{components:t,...o}=e;return(0,a.kt)(c,(0,r.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"architecture"},"Architecture"),(0,a.kt)("p",null," ",(0,a.kt)("img",{src:n(28749).Z}),"  "),(0,a.kt)("h1",{id:"what-is-the-apache-shenyu"},"What is the Apache ShenYu?"),(0,a.kt)("p",null,"This is an asynchronous, high-performance, cross-language, responsive API gateway."),(0,a.kt)("h1",{id:"why-named-apache-shenyu"},"Why named Apache ShenYu"),(0,a.kt)("p",null,"ShenYu (\u795e\u79b9) is the honorific name of Chinese ancient monarch Xia Yu (also known in later times as Da Yu), who left behind the touching story of the three times he crossed the Yellow River for the benefit of the people and successfully managed the flooding of the river. He is known as one of the three greatest kings of ancient China, along with Yao and Shun."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Firstly, the name ShenYu is to promote the traditional virtues of our Chinese civilisation."),(0,a.kt)("li",{parentName:"ul"},"Secondly, the most important thing about the gateway is the governance of the traffic."),(0,a.kt)("li",{parentName:"ul"},"Finally, the community will do things in a fair, just, open and meritocratic way, paying tribute to ShenYu while also conforming to the Apache Way.")),(0,a.kt)("hr",null),(0,a.kt)("h1",{id:"features"},"Features"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Proxy: Support for Apache\xae Dubbo\u2122, Spring Cloud, gRPC, Motan, SOFA, TARS, WebSocket, MQTT"),(0,a.kt)("li",{parentName:"ul"},"Security: Sign, OAuth 2.0, JSON Web Tokens, WAF plugin"),(0,a.kt)("li",{parentName:"ul"},"API governance: Request, response, parameter mapping, Hystrix, RateLimiter plugin"),(0,a.kt)("li",{parentName:"ul"},"Observability: Tracing, metrics, logging plugin"),(0,a.kt)("li",{parentName:"ul"},"Dashboard: Dynamic traffic control, visual backend for user menu permissions"),(0,a.kt)("li",{parentName:"ul"},"Extensions: Plugin hot-swapping, dynamic loading"),(0,a.kt)("li",{parentName:"ul"},"Cluster: NGINX, Docker, Kubernetes"),(0,a.kt)("li",{parentName:"ul"},"Language: provides .NET, Python, Go, Java client for API register")),(0,a.kt)("hr",null),(0,a.kt)("h1",{id:"mind-map"},"Mind map"),(0,a.kt)("p",null," ",(0,a.kt)("img",{src:n(20460).Z})),(0,a.kt)("hr",null),(0,a.kt)("h1",{id:"quick-start-docker"},"Quick Start (docker)"),(0,a.kt)("h3",{id:"run-apache-shenyu-admin"},"Run Apache ShenYu Admin"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"docker pull apache/shenyu-admin\ndocker network create shenyu\ndocker run -d -p 9095:9095 --net shenyu apache/shenyu-admin\n")),(0,a.kt)("h3",{id:"run-apache-shenyu-bootstrap"},"Run Apache ShenYu Bootstrap"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"docker pull apache/shenyu-bootstrap\ndocker run -d -p 9195:9195 --net shenyu apache/shenyu-bootstrap\n")),(0,a.kt)("h3",{id:"set-router"},"Set router"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Real requests  \uff1a",(0,a.kt)("a",{parentName:"li",href:"http://127.0.0.1:8080/helloworld"},"http://127.0.0.1:8080/helloworld"),",")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "name" : "Shenyu",\n  "data" : "hello world"\n}\n')),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Set routing rules (Standalone)")),(0,a.kt)("p",null,"Add ",(0,a.kt)("inlineCode",{parentName:"p"},"localKey: 123456")," to Headers. If you need to customize the localKey, you can use the sha512 tool to generate the key based on plaintext and update the ",(0,a.kt)("inlineCode",{parentName:"p"},"shenyu.local.sha512Key")," property."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'curl --location --request POST \'http://localhost:9195/shenyu/plugin/selectorAndRules\' \\\n--header \'Content-Type: application/json\' \\\n--header \'localKey: 123456\' \\\n--data-raw \'{\n    "pluginName": "divide",\n    "selectorHandler": "[{\\"upstreamUrl\\":\\"127.0.0.1:8080\\"}]",\n    "conditionDataList": [{\n        "paramType": "uri",\n        "operator": "match",\n        "paramValue": "/**"\n    }],\n    "ruleDataList": [{\n        "ruleHandler": "{\\"loadBalance\\":\\"random\\"}",\n        "conditionDataList": [{\n            "paramType": "uri",\n            "operator": "match",\n            "paramValue": "/**"\n        }]\n    }]\n}\'\n')),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Proxy request \uff1a",(0,a.kt)("a",{parentName:"li",href:"http://localhost:9195/helloworld"},"http://localhost:9195/helloworld"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "name" : "Shenyu",\n  "data" : "hello world"\n}\n')),(0,a.kt)("hr",null),(0,a.kt)("h1",{id:"plugin"},"Plugin"),(0,a.kt)("p",null," Whenever a request comes in, Apache ShenYu will execute it by all enabled plugins through the chain of responsibility."),(0,a.kt)("p",null," As the heart of Apache ShenYu, plugins are extensible and hot-pluggable."),(0,a.kt)("p",null," Different plugins do different things."),(0,a.kt)("p",null," Of course, users can also customize plugins to meet their own needs."),(0,a.kt)("p",null," If you want to customize, see ",(0,a.kt)("a",{parentName:"p",href:"https://shenyu.apache.org/docs/developer/custom-plugin/"},"custom-plugin")," ."),(0,a.kt)("hr",null),(0,a.kt)("h1",{id:"selector--rule"},"Selector & Rule"),(0,a.kt)("p",null,"  According to your HTTP request headers, selectors and rules are used to route your requests."),(0,a.kt)("p",null,"  Selector is your first route, It is coarser grained, for example, at the module level."),(0,a.kt)("p",null,"  Rule is your second route and what do you think your request should do. For example a method level in a module."),(0,a.kt)("p",null,"  The selector and the rule match only once, and the match is returned. So the coarsest granularity should be sorted last."),(0,a.kt)("hr",null),(0,a.kt)("h1",{id:"data-caching--data-sync"},"Data Caching & Data Sync"),(0,a.kt)("p",null,"  Since all data have been cached using ConcurrentHashMap in the JVM, it's very fast."),(0,a.kt)("p",null,"  Apache ShenYu dynamically updates the cache by listening to the ZooKeeper node (or WebSocket push, HTTP long polling) when the user changes configuration information in the background management."),(0,a.kt)("p",null,"  ",(0,a.kt)("img",{src:n(9372).Z})),(0,a.kt)("p",null,"  ",(0,a.kt)("img",{src:n(49595).Z})),(0,a.kt)("hr",null),(0,a.kt)("h1",{id:"prerequisite"},"Prerequisite"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"JDK 1.8+")),(0,a.kt)("hr",null),(0,a.kt)("h1",{id:"stargazers-over-time"},"Stargazers over time"),(0,a.kt)("a",{href:"https://starchart.cc/apache/shenyu.svg"},(0,a.kt)("img",{src:"https://starchart.cc/apache/shenyu.svg"})),(0,a.kt)("hr",null),(0,a.kt)("h1",{id:"contributor-and-support"},"Contributor and Support"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://shenyu.apache.org/community/contributor-guide"},"How to Contribute")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"mailto:dev@shenyu.apache.org"},"Mailing Lists"))),(0,a.kt)("hr",null),(0,a.kt)("h1",{id:"known-users"},"Known Users"),(0,a.kt)("p",null,"In order of registration, More access companies are welcome to register at ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/apache/shenyu/issues/68"},"https://github.com/apache/shenyu/issues/68")," (For open source users only) ."),(0,a.kt)("p",null,"All Users : ",(0,a.kt)("a",{parentName:"p",href:"https://shenyu.apache.org/community/user-registration"},"Known Users")),(0,a.kt)("hr",null))}h.isMDXComponent=!0},28749:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/shenyu-architecture-3d-2b673fe8dfd0ef6a14223ffd00bfe824.png"},20460:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/shenyu-xmind-1e9e293ec1650cd3d74beaf7b48464c1.png"},49595:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/config-strategy-processor-en-444a26ebaffbb5cba994880b2487541f.png"},9372:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/shenyu-config-processor-en-170fb1137ef0f931707f12aecd38c455.png"}}]);