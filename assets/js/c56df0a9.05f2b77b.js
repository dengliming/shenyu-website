"use strict";(self.webpackChunkshenyu_website=self.webpackChunkshenyu_website||[]).push([[415],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,d=p(e,["components","mdxType","originalType","parentName"]),c=s(n),m=a,h=c["".concat(l,".").concat(m)]||c[m]||u[m]||i;return n?r.createElement(h,o(o({ref:t},d),{},{components:n})):r.createElement(h,o({ref:t},d))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=c;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:a,o[1]=p;for(var s=2;s<i;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},88134:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>p,toc:()=>l});var r=n(87462),a=(n(67294),n(3905));const i={title:"Http Proxy",keywords:["Http"],description:"Integrate Http with shenyu gateway"},o=void 0,p={unversionedId:"user-guide/http-proxy",id:"version-2.4.1/user-guide/http-proxy",isDocsHomePage:!1,title:"Http Proxy",description:"Integrate Http with shenyu gateway",source:"@site/versioned_docs/version-2.4.1/user-guide/http-proxy.md",sourceDirName:"user-guide",slug:"/user-guide/http-proxy",permalink:"/docs/2.4.1/user-guide/http-proxy",editUrl:"https://github.com/apache/shenyu-website/edit/main/versioned_docs/version-2.4.1/user-guide/http-proxy.md",version:"2.4.1",frontMatter:{title:"Http Proxy",keywords:["Http"],description:"Integrate Http with shenyu gateway"},sidebar:"version-2.4.1/tutorialSidebar",previous:{title:"gRPC Proxy",permalink:"/docs/2.4.1/user-guide/grpc-proxy"},next:{title:"Motan Proxy",permalink:"/docs/2.4.1/user-guide/motan-proxy"}},l=[{value:"Add divide plugin in gateway",id:"add-divide-plugin-in-gateway",children:[]},{value:"Http request access gateway (for springMvc)",id:"http-request-access-gateway-for-springmvc",children:[]},{value:"Http request access gateway(other framework)",id:"http-request-access-gatewayother-framework",children:[]},{value:"User request",id:"user-request",children:[]}],s={toc:l};function d(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"This document is intended to help the ",(0,a.kt)("inlineCode",{parentName:"p"},"Http")," service access the ",(0,a.kt)("inlineCode",{parentName:"p"},"Apache ShenYu")," gateway. The ",(0,a.kt)("inlineCode",{parentName:"p"},"Apache ShenYu")," gateway uses the ",(0,a.kt)("inlineCode",{parentName:"p"},"Divide")," plugin to handle ",(0,a.kt)("inlineCode",{parentName:"p"},"Http")," requests."),(0,a.kt)("p",null,"Before the connection, start ",(0,a.kt)("inlineCode",{parentName:"p"},"shenyu-admin")," correctly, start ",(0,a.kt)("inlineCode",{parentName:"p"},"Divide")," plugin, and add related dependencies on the gateway and ",(0,a.kt)("inlineCode",{parentName:"p"},"Http")," application client. Refer to the previous ",(0,a.kt)("a",{parentName:"p",href:"../quick-start/quick-start-http"},"Quick start with Http")," ."),(0,a.kt)("p",null,"For details about client access configuration, see ",(0,a.kt)("a",{parentName:"p",href:"./register-center-access"},"Application Client Access Config")," ."),(0,a.kt)("p",null,"For details about data synchronization configurations, see ",(0,a.kt)("a",{parentName:"p",href:"./use-data-sync"},"Data Synchronization Config")," ."),(0,a.kt)("h2",{id:"add-divide-plugin-in-gateway"},"Add divide plugin in gateway"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Add the following dependencies to the gateway's ",(0,a.kt)("inlineCode",{parentName:"p"},"pom.xml")," file:"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-xml"},"    <dependency>\n        <groupId>org.apache.shenyu</groupId>\n        <artifactId>shenyu-spring-boot-starter-plugin-divide</artifactId>\n        <version>${project.version}</version>\n    </dependency>\n\n    <dependency>\n        <groupId>org.apache.shenyu</groupId>\n        <artifactId>shenyu-spring-boot-starter-plugin-httpclient</artifactId>\n        <version>${project.version}</version>\n    </dependency>\n")))),(0,a.kt)("h2",{id:"http-request-access-gateway-for-springmvc"},"Http request access gateway (for springMvc)"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"SpringBoot"),(0,a.kt)("p",{parentName:"li"},"Please refer this\uff1a",(0,a.kt)("a",{parentName:"p",href:"https://github.com/apache/shenyu/tree/v2.4.1/shenyu-examples/shenyu-examples-http"},"shenyu-examples-http")),(0,a.kt)("ol",{parentName:"li"},(0,a.kt)("li",{parentName:"ol"},"Add the following dependencies to the ",(0,a.kt)("inlineCode",{parentName:"li"},"pom.xml")," file in your ",(0,a.kt)("inlineCode",{parentName:"li"},"Http")," service:")),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-xml"},"    <dependency>\n        <groupId>org.apache.shenyu</groupId>\n        <artifactId>shenyu-spring-boot-starter-client-springmvc</artifactId>\n        <version>${shenyu.version}</version>\n    </dependency>\n")),(0,a.kt)("ol",{parentName:"li",start:2},(0,a.kt)("li",{parentName:"ol"},"Add the following configuration to application.yaml:")),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"shenyu:\n  client:\n    registerType: http #zookeeper #etcd #nacos #consul\n    serverLists: http://localhost:9095 #localhost:2181 #http://localhost:2379 #localhost:8848\n    props:\n      contextPath: /http\n      appName: http\n      port: 8189\n      nacosNameSpace: ShenyuRegisterCenter\n")),(0,a.kt)("ol",{parentName:"li",start:3},(0,a.kt)("li",{parentName:"ol"},"Add this annotation ",(0,a.kt)("inlineCode",{parentName:"li"},"@ShenyuSpringMvcClient")," in your ",(0,a.kt)("inlineCode",{parentName:"li"},"controller")," interface.")),(0,a.kt)("p",{parentName:"li"},"You can apply the annotation to class-level in a controller. The name of the ",(0,a.kt)("inlineCode",{parentName:"p"},"path")," variable is prefix and ",(0,a.kt)("inlineCode",{parentName:"p"},"/**")," will apply proxy for entire interfaces."))),(0,a.kt)("p",null,"Example(1)"),(0,a.kt)("p",null,"The following indicates that ",(0,a.kt)("inlineCode",{parentName:"p"},"/test/payment"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"/test/findByUserId")," will be proxy by the gateway."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},'  @RestController\n  @RequestMapping("/test")\n  @ShenyuSpringMvcClient(path = "/test/**")\n  public class HttpTestController {\n\n      @PostMapping("/payment")\n      public UserDTO post(@RequestBody final UserDTO userDTO) {\n          return userDTO;\n      }\n\n      @GetMapping("/findByUserId")\n      public UserDTO findByUserId(@RequestParam("userId") final String userId) {\n          UserDTO userDTO = new UserDTO();\n          userDTO.setUserId(userId);\n          userDTO.setUserName("hello world");\n          return userDTO;\n      }\n   }\n')),(0,a.kt)("p",null,"Example(2)"),(0,a.kt)("p",null,"The following indicates that ",(0,a.kt)("inlineCode",{parentName:"p"},"/order/save")," is proxied by the gateway, while ",(0,a.kt)("inlineCode",{parentName:"p"},"/order/findById")," is not."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},'  @RestController\n  @RequestMapping("/order")\n  @ShenyuSpringMvcClient(path = "/order")\n  public class OrderController {\n\n      @PostMapping("/save")\n      @ShenyuSpringMvcClient(path = "/save")\n      public OrderDTO save(@RequestBody final OrderDTO orderDTO) {\n          orderDTO.setName("hello world save order");\n          return orderDTO;\n      }\n\n      @GetMapping("/findById")\n      public OrderDTO findById(@RequestParam("id") final String id) {\n          OrderDTO orderDTO = new OrderDTO();\n          orderDTO.setId(id);\n          orderDTO.setName("hello world findById");\n          return orderDTO;\n      }\n  }\n')),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Start your project, your service interface is connected to the gateway, go to the ",(0,a.kt)("inlineCode",{parentName:"li"},"shenyu-admin")," management system plugin list ",(0,a.kt)("inlineCode",{parentName:"li"},"->")," HTTP process ",(0,a.kt)("inlineCode",{parentName:"li"},"->")," Divide, see automatically created selectors and rules.")),(0,a.kt)("h2",{id:"http-request-access-gatewayother-framework"},"Http request access gateway(other framework)"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"First, find ",(0,a.kt)("inlineCode",{parentName:"li"},"divide")," plugin in ",(0,a.kt)("inlineCode",{parentName:"li"},"shenyu-admin"),", add selector, and rules, and filter traffic matching."),(0,a.kt)("li",{parentName:"ul"},"If you don't know how to configure, please refer to ",(0,a.kt)("a",{parentName:"li",href:"../user-guide/admin-usage/selector-and-rule"},"Selector Detailed Explanation"),"."),(0,a.kt)("li",{parentName:"ul"},"You can also develop your customized http-client\uff0crefer to ",(0,a.kt)("a",{parentName:"li",href:"../developer/developer-shenyu-client"},"multi-language Http client development"),"\u3002")),(0,a.kt)("h2",{id:"user-request"},"User request"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Send the request as before, only two points need to notice.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Firstly, the domain name that requested before in your service, now need to replace with gateway's domain name.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Secondly, ",(0,a.kt)("inlineCode",{parentName:"p"},"Apache ShenYu")," Gateway needs a route prefix which comes from ",(0,a.kt)("inlineCode",{parentName:"p"},"contextPath"),", it configured during the integration with gateway, you can change it freely in ",(0,a.kt)("inlineCode",{parentName:"p"},"divide")," plugin of ",(0,a.kt)("inlineCode",{parentName:"p"},"shenyu-admin"),", if you are familiar with it."),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"for example, if you have an ",(0,a.kt)("inlineCode",{parentName:"p"},"order")," service, and it has an interface, the request url: ",(0,a.kt)("inlineCode",{parentName:"p"},"http://localhost:8080/test/save"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Now need to change to:  ",(0,a.kt)("inlineCode",{parentName:"p"},"http://localhost:9195/order/test/save"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"We can see ",(0,a.kt)("inlineCode",{parentName:"p"},"localhost:9195")," is your gateway's ",(0,a.kt)("inlineCode",{parentName:"p"},"ip")," port\uff0cdefault port number is ",(0,a.kt)("inlineCode",{parentName:"p"},"9195")," \uff0c",(0,a.kt)("inlineCode",{parentName:"p"},"/order")," is your ",(0,a.kt)("inlineCode",{parentName:"p"},"contextPath")," which you configured with gateway.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Other parameters doesn't change in request method."))))),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Then you can visit, very easy and simple.")))}d.isMDXComponent=!0}}]);