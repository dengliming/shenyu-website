"use strict";(self.webpackChunkshenyu_website=self.webpackChunkshenyu_website||[]).push([[66572],{3905:(e,t,i)=>{i.d(t,{Zo:()=>p,kt:()=>m});var n=i(67294);function r(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function a(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function l(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?a(Object(i),!0).forEach((function(t){r(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):a(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function o(e,t){if(null==e)return{};var i,n,r=function(e,t){if(null==e)return{};var i,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)i=a[n],t.indexOf(i)>=0||(r[i]=e[i]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)i=a[n],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(r[i]=e[i])}return r}var s=n.createContext({}),u=function(e){var t=n.useContext(s),i=t;return e&&(i="function"==typeof e?e(t):l(l({},t),e)),i},p=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var i=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),c=u(i),m=r,h=c["".concat(s,".").concat(m)]||c[m]||d[m]||a;return i?n.createElement(h,l(l({ref:t},p),{},{components:i})):n.createElement(h,l({ref:t},p))}));function m(e,t){var i=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=i.length,l=new Array(a);l[0]=c;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var u=2;u<a;u++)l[u]=i[u];return n.createElement.apply(null,l)}return n.createElement.apply(null,i)}c.displayName="MDXCreateElement"},97268:(e,t,i)=>{i.r(t),i.d(t,{contentTitle:()=>l,default:()=>p,frontMatter:()=>a,metadata:()=>o,toc:()=>s});var n=i(87462),r=(i(67294),i(3905));const a={title:"Divide Plugin",keywords:["divide"],description:"divide plugin"},l="1. Overview",o={unversionedId:"plugin-center/proxy/divide-plugin",id:"version-2.4.2/plugin-center/proxy/divide-plugin",isDocsHomePage:!1,title:"Divide Plugin",description:"divide plugin",source:"@site/versioned_docs/version-2.4.2/plugin-center/proxy/divide-plugin.md",sourceDirName:"plugin-center/proxy",slug:"/plugin-center/proxy/divide-plugin",permalink:"/docs/2.4.2/plugin-center/proxy/divide-plugin",editUrl:"https://github.com/apache/incubator-shenyu-website/edit/main/versioned_docs/version-2.4.2/plugin-center/proxy/divide-plugin.md",version:"2.4.2",frontMatter:{title:"Divide Plugin",keywords:["divide"],description:"divide plugin"},sidebar:"version-2.4.2/tutorialSidebar",previous:{title:"Rewrite Plugin",permalink:"/docs/2.4.2/plugin-center/http-process/rewrite-plugin"},next:{title:"Dubbo Plugin",permalink:"/docs/2.4.2/plugin-center/proxy/dubbo-plugin"}},s=[{value:"1.1 Plugin Name",id:"11-plugin-name",children:[]},{value:"1.2 Appropriate Scenario",id:"12-appropriate-scenario",children:[]},{value:"1.3 Plugin functionality",id:"13-plugin-functionality",children:[]},{value:"1.4 Plugin Code",id:"14-plugin-code",children:[]},{value:"2.1 Plugin-use procedure chart",id:"21-plugin-use-procedure-chart",children:[]},{value:"2.2 Import pom",id:"22-import-pom",children:[]},{value:"2.3 Enable plugin",id:"23-enable-plugin",children:[]},{value:"2.4 Config plugin",id:"24-config-plugin",children:[{value:"2.4.1 Configure access parameters in the client project configuration file",id:"241-configure-access-parameters-in-the-client-project-configuration-file",children:[]},{value:"2.4.2 Configure upstream validity detection parameters in the shenyu-admin configuration file",id:"242-configure-upstream-validity-detection-parameters-in-the-shenyu-admin-configuration-file",children:[]},{value:"2.4.3 Configure the selector and rule information of the divide plugin in shenyu-admin",id:"243-configure-the-selector-and-rule-information-of-the-divide-plugin-in-shenyu-admin",children:[]}]},{value:"2.5 Examples",id:"25-examples",children:[{value:"2.5.1 Example A/B Test",id:"251-example-ab-test",children:[]},{value:"2.5.2 Example Grayscale Test",id:"252-example-grayscale-test",children:[]}]}],u={toc:s};function p(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"1-overview"},"1. Overview"),(0,r.kt)("h2",{id:"11-plugin-name"},"1.1 Plugin Name"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"divide")," Plugin")),(0,r.kt)("h2",{id:"12-appropriate-scenario"},"1.2 Appropriate Scenario"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Handling ",(0,r.kt)("inlineCode",{parentName:"li"},"http protocol")," requests."),(0,r.kt)("li",{parentName:"ul"},"Support traffic management, such as a/b test, grayscale test."),(0,r.kt)("li",{parentName:"ul"},"Service Load Balancing."),(0,r.kt)("li",{parentName:"ul"},"Set request timeout.")),(0,r.kt)("h2",{id:"13-plugin-functionality"},"1.3 Plugin functionality"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Supports traffic management based on request information such as uri, header, and query."),(0,r.kt)("li",{parentName:"ul"},"Supports setting the load balancing strategy for requests, and supports service warm-up. Currently, three strategies are supported: ip hash (consistent hash with virtual nodes), round-robbin (weighted polling), random (weighted random)."),(0,r.kt)("li",{parentName:"ul"},"Supports setting the maximum value of the request header, the maximum value of the request body, and the request level timeout."),(0,r.kt)("li",{parentName:"ul"},"Supports setting the timeout retry policy and the number of retries. Currently, the retry policy supports: current (retrying the server that failed before) and failover (retrying other servers).")),(0,r.kt)("h2",{id:"14-plugin-code"},"1.4 Plugin Code"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Core module is ",(0,r.kt)("inlineCode",{parentName:"li"},"shenyu-plugin-divide"),"."),(0,r.kt)("li",{parentName:"ul"},"Core class is ",(0,r.kt)("inlineCode",{parentName:"li"},"org.apache.shenyu.plugin.divide.DividePlugin"),".")),(0,r.kt)("h1",{id:"2-how-to-use-plugin"},"2. How to use plugin"),(0,r.kt)("h2",{id:"21-plugin-use-procedure-chart"},"2.1 Plugin-use procedure chart"),(0,r.kt)("p",null,(0,r.kt)("img",{src:i(94404).Z})),(0,r.kt)("h2",{id:"22-import-pom"},"2.2 Import pom"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Import maven in shenyu-bootstrap project's ",(0,r.kt)("inlineCode",{parentName:"li"},"pom.xml")," file.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-xml"},"  <dependency>\n      <groupId>org.apache.shenyu</groupId>\n      <artifactId>shenyu-spring-boot-starter-gateway</artifactId>\n     <version>${project.version}</version>\n  </dependency>\n")),(0,r.kt)("h2",{id:"23-enable-plugin"},"2.3 Enable plugin"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"In ",(0,r.kt)("inlineCode",{parentName:"li"},"shenyu-admin")," --\x3e BasicConfig --\x3e Plugin --\x3e ",(0,r.kt)("inlineCode",{parentName:"li"},"divide")," set Status enable.")),(0,r.kt)("p",null,(0,r.kt)("img",{src:i(58417).Z})),(0,r.kt)("h2",{id:"24-config-plugin"},"2.4 Config plugin"),(0,r.kt)("h3",{id:"241-configure-access-parameters-in-the-client-project-configuration-file"},"2.4.1 Configure access parameters in the client project configuration file"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Client access method and server address. The following example uses the http access method. Currently, the client supports the following access methods: http, zookeeper, etcd, nacos, consul. For detailed access configuration parameters, please refer to ",(0,r.kt)("a",{parentName:"li",href:"../../user-guide/register-center-access"},"Client Access Configuration"),"."),(0,r.kt)("li",{parentName:"ul"},"Client configuration, including the protocol name and the routing address of the service, please use the http protocol here, and the value of contextPath must be configured as the routing address of each service.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"  shenyu:\n    register:\n      registerType: http\n      serverLists: http://localhost:9095\n      props:\n        username: admin\n        password: 123456\n    client:\n      http: # http protocol\n        props:\n          contextPath: /http # routing address for each service\n")),(0,r.kt)("h3",{id:"242-configure-upstream-validity-detection-parameters-in-the-shenyu-admin-configuration-file"},"2.4.2 Configure upstream validity detection parameters in the shenyu-admin configuration file"),(0,r.kt)("p",null,"The following example uses the http access method. Currently, the client supports the following access methods: http, zookeeper, etcd, nacos, consul. For detailed access configuration parameters, please refer to ",(0,r.kt)("a",{parentName:"p",href:"../../user-guide/register-center-access"},"Client Access Configuration"),"."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Only http-type registries support upstream detection.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"  shenyu:\n    register:\n      registerType: http # Only http-type register center support upstream detection.\n      serverLists: \n      props:\n        checked: true # The default is true, set to false, do not detect.\n        zombieCheckTimes: 5 # The maximum number of zombie upstream detections. If it exceeds 5 times, its validity will no longer be detected. The default value is 5.\n        scheduledTime: 10 # Timing detection interval, the default is 10 seconds.\n        zombieRemovalTimes: 60 # How many seconds the upstream is offline to be considered as a zombie upstream, the default is 60 seconds.\n")),(0,r.kt)("h3",{id:"243-configure-the-selector-and-rule-information-of-the-divide-plugin-in-shenyu-admin"},"2.4.3 Configure the selector and rule information of the divide plugin in shenyu-admin"),(0,r.kt)("p",null,"After the client is started, the ",(0,r.kt)("a",{parentName:"p",href:"../../user-guide/admin-usage/selector-and-rule"},"selector and rule")," information will be automatically registered in shenyu-admin -> Plugin List -> Proxy -> Divide."),(0,r.kt)("p",null,(0,r.kt)("img",{src:i(41433).Z})),(0,r.kt)("h4",{id:"2431-selector-configuration"},"2.4.3.1 Selector configuration"),(0,r.kt)("p",null,"Example of divide selector. For general selector configuration, please refer to ",(0,r.kt)("a",{parentName:"p",href:"../../user-guide/admin-usage/selector-and-rule"},"Selectors and Rules"),"."),(0,r.kt)("p",null,(0,r.kt)("img",{src:i(85464).Z})),(0,r.kt)("h5",{id:"24311-selector-handling-information-configuration"},"2.4.3.1.1 Selector handling information configuration"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"host"),": fill in ",(0,r.kt)("inlineCode",{parentName:"li"},"localhost"),", this field is not used currently."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"ip:port"),": ",(0,r.kt)("inlineCode",{parentName:"li"},"ip")," and port, fill in the ",(0,r.kt)("inlineCode",{parentName:"li"},"ip")," + port of your real service here."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"protocol"),": ",(0,r.kt)("inlineCode",{parentName:"li"},"http")," protocol, fill in ",(0,r.kt)("inlineCode",{parentName:"li"},"http:")," or ",(0,r.kt)("inlineCode",{parentName:"li"},"https:"),", if not fill in, the default is: ",(0,r.kt)("inlineCode",{parentName:"li"},"http:"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"startupTime"),": Startup time in milliseconds."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"weight"),": load balancing weight, the default value of service startup automatic registration is 50."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"warmupTime"),": Warmup time, in milliseconds. The server during warmup will calculate the instantaneous weight, and the calculated value will be smaller than the actual configured weight to protect the server just started. The default value of service startup registration is 10. For example, the warm-up time is 100 milliseconds, the current startup is 50 milliseconds, the configured weight is 50, and the actual weight is 25."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"status"),": On or off, this selector is valid only in the on state.")),(0,r.kt)("h4",{id:"2432-processing-information-configuration-of-rules"},"2.4.3.2 Processing information configuration of rules"),(0,r.kt)("p",null,"Example of divide rule. For general rule configuration, please refer to ",(0,r.kt)("a",{parentName:"p",href:"../../user-guide/admin-usage/selector-and-rule"},"selectors and rules"),"."),(0,r.kt)("p",null,(0,r.kt)("img",{src:i(60341).Z})),(0,r.kt)("h5",{id:"24321-rule-processing-information-configuration"},"2.4.3.2.1 Rule processing information configuration"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"loadStrategy"),": If the ",(0,r.kt)("inlineCode",{parentName:"li"},"http")," client is a cluster, which load balancing strategy is used when the ",(0,r.kt)("inlineCode",{parentName:"li"},"Apache ShenYu")," gateway is called, currently supports ",(0,r.kt)("inlineCode",{parentName:"li"},"roundRobin"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"random")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"hash"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"timeout"),": The timeout for calling the ",(0,r.kt)("inlineCode",{parentName:"li"},"http")," client."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"retry Count"),": The number of retries that failed to call the ",(0,r.kt)("inlineCode",{parentName:"li"},"http")," client timeout."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"headerMaxSize"),": The maximum value of the requested ",(0,r.kt)("inlineCode",{parentName:"li"},"header"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"requestMaxSize"),": The maximum value of the request body."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"retryStrategy"),": Supported since ",(0,r.kt)("inlineCode",{parentName:"li"},"2.4.3"),", retry strategy after failure, default ",(0,r.kt)("inlineCode",{parentName:"li"},"current")," to maintain compatibility with lower versions. For example, there are 3 downstream services ",(0,r.kt)("inlineCode",{parentName:"li"},"http:localhost:1111"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"http:localhost:1112")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"http:localhost:1113"),", assuming the first load balancing to ",(0,r.kt)("inlineCode",{parentName:"li"},"http:localhost:1111")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"call failed"),". Using the ",(0,r.kt)("inlineCode",{parentName:"li"},"current")," strategy will continue to retry calling ",(0,r.kt)("inlineCode",{parentName:"li"},"http:localhost:1111"),"; using the ",(0,r.kt)("inlineCode",{parentName:"li"},"failover")," strategy will retry calling other services such as ",(0,r.kt)("inlineCode",{parentName:"li"},"http:localhost:1112")," through the ",(0,r.kt)("inlineCode",{parentName:"li"},"load balancing"),", if it fails again at this time , call to ",(0,r.kt)("inlineCode",{parentName:"li"},"http:localhost:1113")," until no service is available.")),(0,r.kt)("h2",{id:"25-examples"},"2.5 Examples"),(0,r.kt)("h3",{id:"251-example-ab-test"},"2.5.1 Example A/B Test"),(0,r.kt)("p",null,"To be added, welcome contribute."),(0,r.kt)("h3",{id:"252-example-grayscale-test"},"2.5.2 Example Grayscale Test"),(0,r.kt)("p",null,"To be added, welcome contribute."),(0,r.kt)("h1",{id:"3-how-to-disable-plugin"},"3. How to disable plugin"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"In ",(0,r.kt)("inlineCode",{parentName:"li"},"shenyu-admin")," --\x3e BasicConfig --\x3e Plugin --\x3e ",(0,r.kt)("inlineCode",{parentName:"li"},"divide")," set Status disable.")),(0,r.kt)("p",null,(0,r.kt)("img",{src:i(53124).Z})))}p.isMDXComponent=!0},53124:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/disable-en-8ae0fcbf271bbccd293931cc20f3dfa1.png"},58417:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/enable-en-d6ddedc0d79f6f071df86d262a7cda03.png"},94404:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/procedure-en-5b17e369f9d6c12d70118a29f5b7bd30.png"},60341:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/rule-en-0b219597a708404400981a3a9d6a89c0.png"},41433:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/select-and-rule-en-3a62f8cb06cf350e1f7e48daaa601978.png"},85464:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/selector-en-0b99d7a7e1ce0334e5dadc04ba8611c8.png"}}]);