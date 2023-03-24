"use strict";(self.webpackChunkshenyu_website=self.webpackChunkshenyu_website||[]).push([[51341],{3905:(e,n,r)=>{r.d(n,{Zo:()=>u,kt:()=>g});var t=r(67294);function a(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function p(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function i(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?p(Object(r),!0).forEach((function(n){a(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function l(e,n){if(null==e)return{};var r,t,a=function(e,n){if(null==e)return{};var r,t,a={},p=Object.keys(e);for(t=0;t<p.length;t++)r=p[t],n.indexOf(r)>=0||(a[r]=e[r]);return a}(e,n);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(t=0;t<p.length;t++)r=p[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var o=t.createContext({}),d=function(e){var n=t.useContext(o),r=n;return e&&(r="function"==typeof e?e(n):i(i({},n),e)),r},u=function(e){var n=d(e.components);return t.createElement(o.Provider,{value:n},e.children)},s="mdxType",c={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},m=t.forwardRef((function(e,n){var r=e.components,a=e.mdxType,p=e.originalType,o=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),s=d(r),m=a,g=s["".concat(o,".").concat(m)]||s[m]||c[m]||p;return r?t.createElement(g,i(i({ref:n},u),{},{components:r})):t.createElement(g,i({ref:n},u))}));function g(e,n){var r=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var p=r.length,i=new Array(p);i[0]=m;var l={};for(var o in n)hasOwnProperty.call(n,o)&&(l[o]=n[o]);l.originalType=e,l[s]="string"==typeof e?e:a,i[1]=l;for(var d=2;d<p;d++)i[d]=r[d];return t.createElement.apply(null,i)}return t.createElement.apply(null,r)}m.displayName="MDXCreateElement"},44074:(e,n,r)=>{r.r(n),r.d(n,{contentTitle:()=>i,default:()=>s,frontMatter:()=>p,metadata:()=>l,toc:()=>o});var t=r(87462),a=(r(67294),r(3905));const p={title:"Spring Cloud\u670d\u52a1\u63a5\u5165",keywords:["Spring Cloud"],description:"SpringCloud\u63a5\u5165ShenYu\u7f51\u5173"},i=void 0,l={unversionedId:"user-guide/proxy/spring-cloud-proxy",id:"version-2.4.1/user-guide/proxy/spring-cloud-proxy",isDocsHomePage:!1,title:"Spring Cloud\u670d\u52a1\u63a5\u5165",description:"SpringCloud\u63a5\u5165ShenYu\u7f51\u5173",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-2.4.1/user-guide/proxy/spring-cloud-proxy.md",sourceDirName:"user-guide/proxy",slug:"/user-guide/proxy/spring-cloud-proxy",permalink:"/zh/docs/2.4.1/user-guide/proxy/spring-cloud-proxy",editUrl:"https://github.com/apache/shenyu-website/edit/main/i18n/zh/docusaurus-plugin-content-docs/version-2.4.1/user-guide/proxy/spring-cloud-proxy.md",version:"2.4.1",frontMatter:{title:"Spring Cloud\u670d\u52a1\u63a5\u5165",keywords:["Spring Cloud"],description:"SpringCloud\u63a5\u5165ShenYu\u7f51\u5173"},sidebar:"version-2.4.1/tutorialSidebar",previous:{title:"Sofa\u670d\u52a1\u63a5\u5165",permalink:"/zh/docs/2.4.1/user-guide/proxy/sofa-rpc-proxy"},next:{title:"Tars\u670d\u52a1\u63a5\u5165",permalink:"/zh/docs/2.4.1/user-guide/proxy/tars-proxy"}},o=[{value:"\u5728\u7f51\u5173\u4e2d\u5f15\u5165 springCloud \u63d2\u4ef6",id:"\u5728\u7f51\u5173\u4e2d\u5f15\u5165-springcloud-\u63d2\u4ef6",children:[]},{value:"SpringCloud\u670d\u52a1\u63a5\u5165\u7f51\u5173",id:"springcloud\u670d\u52a1\u63a5\u5165\u7f51\u5173",children:[]},{value:"\u7528\u6237\u8bf7\u6c42",id:"\u7528\u6237\u8bf7\u6c42",children:[]}],d={toc:o},u="wrapper";function s(e){let{components:n,...r}=e;return(0,a.kt)(u,(0,t.Z)({},d,r,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u6b64\u7bc7\u6587\u7ae0\u662f\u4ecb\u7ecd ",(0,a.kt)("inlineCode",{parentName:"p"},"springCloud")," \u670d\u52a1\u63a5\u5165\u5230 ",(0,a.kt)("inlineCode",{parentName:"p"},"Apache ShenYu")," \u7f51\u5173\uff0c",(0,a.kt)("inlineCode",{parentName:"p"},"Apache ShenYu")," \u7f51\u5173\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"springCloud")," \u63d2\u4ef6\u6765\u63a5\u5165",(0,a.kt)("inlineCode",{parentName:"p"},"Spring Cloud"),"\u670d\u52a1\u3002"),(0,a.kt)("p",null,"\u63a5\u5165\u524d\uff0c\u8bf7\u6b63\u786e\u542f\u52a8 ",(0,a.kt)("inlineCode",{parentName:"p"},"shenyu-admin"),"\uff0c\u5e76\u5f00\u542f",(0,a.kt)("inlineCode",{parentName:"p"},"springCloud"),"\u63d2\u4ef6\uff0c\u5728\u7f51\u5173\u7aef\u548c",(0,a.kt)("inlineCode",{parentName:"p"},"springCloud"),"\u670d\u52a1\u7aef\u5f15\u5165\u76f8\u5173\u4f9d\u8d56\u3002\u53ef\u4ee5\u53c2\u8003\u524d\u9762\u7684 ",(0,a.kt)("a",{parentName:"p",href:"../quick-start/quick-start-springcloud"},"Spring Cloud\u5feb\u901f\u5f00\u59cb"),"\u3002"),(0,a.kt)("p",null,"\u5e94\u7528\u5ba2\u6237\u7aef\u63a5\u5165\u7684\u76f8\u5173\u914d\u7f6e\u8bf7\u53c2\u8003\uff1a",(0,a.kt)("a",{parentName:"p",href:"./register-center-access"},"\u5ba2\u6237\u7aef\u63a5\u5165\u914d\u7f6e"),"\u3002"),(0,a.kt)("p",null,"\u6570\u636e\u540c\u6b65\u7684\u76f8\u5173\u914d\u7f6e\u8bf7\u53c2\u8003\uff1a",(0,a.kt)("a",{parentName:"p",href:"./use-data-sync"},"\u6570\u636e\u540c\u6b65\u914d\u7f6e"),"\u3002"),(0,a.kt)("h2",{id:"\u5728\u7f51\u5173\u4e2d\u5f15\u5165-springcloud-\u63d2\u4ef6"},"\u5728\u7f51\u5173\u4e2d\u5f15\u5165 springCloud \u63d2\u4ef6"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u5728\u7f51\u5173\u7684 ",(0,a.kt)("inlineCode",{parentName:"li"},"pom.xml")," \u6587\u4ef6\u4e2d\u5f15\u5165\u5982\u4e0b\u4f9d\u8d56\u3002")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-xml"},"  \x3c!-- apache shenyu springCloud plugin start--\x3e\n  <dependency>\n       <groupId>org.apache.shenyu</groupId>\n       <artifactId>shenyu-spring-boot-starter-plugin-springcloud</artifactId>\n        <version>${project.version}</version>\n  </dependency>\n\n  <dependency>\n       <groupId>org.apache.shenyu</groupId>\n       <artifactId>shenyu-spring-boot-starter-plugin-httpclient</artifactId>\n       <version>${project.version}</version>\n   </dependency>\n   \x3c!-- apache shenyu springCloud plugin end--\x3e\n\n   <dependency>\n        <groupId>org.springframework.cloud</groupId>\n        <artifactId>spring-cloud-commons</artifactId>\n        <version>2.2.0.RELEASE</version>\n   </dependency>\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u5982\u679c\u4f60\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"eureka")," \u4f5c\u4e3a ",(0,a.kt)("inlineCode",{parentName:"p"},"springCloud"),"\u7684\u6ce8\u518c\u4e2d\u5fc3"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u5728\u7f51\u5173\u7684",(0,a.kt)("inlineCode",{parentName:"li"},"pom.xml"),"\u6587\u4ef6\u4e2d\uff0c\u65b0\u589e\u5982\u4e0b\u4f9d\u8d56\uff1a")),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-xml"},"  <dependency>\n       <groupId>org.springframework.cloud</groupId>\n       <artifactId>spring-cloud-starter-netflix-eureka-client</artifactId>\n       <version>2.2.0.RELEASE</version>\n  </dependency>\n"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u5728\u7f51\u5173\u7684",(0,a.kt)("inlineCode",{parentName:"p"},"yml"),"\u6587\u4ef6\u4e2d\uff0c\u65b0\u589e\u5982\u4e0b\u914d\u7f6e\uff1a"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"   eureka:\n     client:\n       serviceUrl:\n         defaultZone: http://localhost:8761/eureka/ # \u4f60\u7684eureka\u5730\u5740\n     instance:\n       prefer-ip-address: true\n"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u5982\u679c\u4f60\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"nacos")," \u4f5c\u4e3a ",(0,a.kt)("inlineCode",{parentName:"p"},"springCloud"),"\u7684\u6ce8\u518c\u4e2d\u5fc3"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u5728\u7f51\u5173\u7684",(0,a.kt)("inlineCode",{parentName:"li"},"pom.xml"),"\u6587\u4ef6\u4e2d\uff0c\u65b0\u589e\u5982\u4e0b\u4f9d\u8d56\uff1a")),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-xml"}," <dependency>\n       <groupId>com.alibaba.cloud</groupId>\n       <artifactId>spring-cloud-starter-alibaba-nacos-discovery</artifactId>\n       <version>2.1.0.RELEASE</version>\n </dependency>\n"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u5728\u7f51\u5173\u7684",(0,a.kt)("inlineCode",{parentName:"p"},"yml"),"\u6587\u4ef6\u4e2d \u65b0\u589e\u5982\u4e0b\u914d\u7f6e\uff1a"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"  spring:\n     cloud:\n       nacos:\n         discovery:\n            server-addr: 127.0.0.1:8848 # \u4f60\u7684nacos\u5730\u5740\n"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u91cd\u542f\u4f60\u7684\u7f51\u5173\u670d\u52a1\u3002"))),(0,a.kt)("h2",{id:"springcloud\u670d\u52a1\u63a5\u5165\u7f51\u5173"},"SpringCloud\u670d\u52a1\u63a5\u5165\u7f51\u5173"),(0,a.kt)("p",null,"\u53ef\u4ee5\u53c2\u8003\uff1a",(0,a.kt)("a",{parentName:"p",href:"https://github.com/apache/shenyu/tree/v2.4.1/shenyu-examples/shenyu-examples-springcloud"},"shenyu-examples-springcloud")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u5728\u7531",(0,a.kt)("inlineCode",{parentName:"li"},"SpringCloud"),"\u6784\u5efa\u7684\u5fae\u670d\u52a1\u4e2d\uff0c\u5f15\u5165\u5982\u4e0b\u4f9d\u8d56\uff1a")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-xml"}," <dependency>\n      <groupId>org.apache.shenyu</groupId>\n      <artifactId>shenyu-spring-boot-starter-client-springcloud</artifactId>\n      <version>${shenyu.version}</version>\n </dependency>\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u5728 ",(0,a.kt)("inlineCode",{parentName:"p"},"controller"),"\u63a5\u53e3\u4e0a\u52a0\u4e0a ",(0,a.kt)("inlineCode",{parentName:"p"},"@ShenyuSpringCloudClient")," \u6ce8\u89e3\u3002 \u6ce8\u89e3\u53ef\u4ee5\u52a0\u5230\u7c7b\u6216\u65b9\u6cd5\u4e0a\u9762\uff0c",(0,a.kt)("inlineCode",{parentName:"p"},"path"),"\u5c5e\u6027\u4e3a\u524d\u7f00\uff0c\u5982\u679c\u542b\u6709 ",(0,a.kt)("inlineCode",{parentName:"p"},"/**")," \u4ee3\u8868\u4f60\u7684\u6574\u4e2a\u63a5\u53e3\u9700\u8981\u88ab\u7f51\u5173\u4ee3\u7406\u3002")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u793a\u4f8b\u4e00\uff1a\n\u4ee3\u8868 ",(0,a.kt)("inlineCode",{parentName:"p"},"/test/payment"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"/test/findByUserId")," \u90fd\u4f1a\u88ab\u7f51\u5173\u4ee3\u7406\u3002"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-java"},' @RestController\n @RequestMapping("/test")\n @ShenyuSpringCloudClient(path = "/test/**")\n public class HttpTestController {\n\n     @PostMapping("/payment")\n     public UserDTO post(@RequestBody final UserDTO userDTO) {\n         return userDTO;\n     }\n\n     @GetMapping("/findByUserId")\n     public UserDTO findByUserId(@RequestParam("userId") final String userId) {\n         UserDTO userDTO = new UserDTO();\n         userDTO.setUserId(userId);\n         userDTO.setUserName("hello world");\n         return userDTO;\n     }\n  }\n')))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'\n* \u793a\u4f8b\u4e8c\uff1a\n  \u4ee3\u8868 `/order/save`\uff0c\u4f1a\u88ab\u7f51\u5173\u4ee3\u7406\uff0c\u800c`/order/findById` \u5219\u4e0d\u4f1a\u3002\n\n ```java\n  @RestController\n  @RequestMapping("/order")\n  @ShenyuSpringCloudClient(path = "/order")\n  public class OrderController {\n\n      @PostMapping("/save")\n      @ShenyuSpringMvcClient(path = "/save")\n      public OrderDTO save(@RequestBody final OrderDTO orderDTO) {\n          orderDTO.setName("hello world save order");\n          return orderDTO;\n      }\n\n      @GetMapping("/findById")\n      public OrderDTO findById(@RequestParam("id") final String id) {\n          OrderDTO orderDTO = new OrderDTO();\n          orderDTO.setId(id);\n          orderDTO.setName("hello world findById");\n          return orderDTO;\n      }\n  }\n')),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u793a\u4f8b\u4e09\uff1a\n",(0,a.kt)("inlineCode",{parentName:"li"},"isFull"),"\uff1a",(0,a.kt)("inlineCode",{parentName:"li"},"true"),"  \u4ee3\u8868\u6574\u4e2a\u670d\u52a1\u90fd\u4f1a\u88ab\u7f51\u5173\u4ee3\u7406\u3002")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"shenyu:\n  client:\n    registerType: http\n    serverLists: http://localhost:9095\n    props:\n      contextPath: /http\n      appName: http\n      isFull: true\n# registerType : \u670d\u52a1\u6ce8\u518c\u7c7b\u578b\uff0c\u8bf7\u53c2\u8003\u5e94\u7528\u5ba2\u6237\u7aef\u63a5\u5165\u6587\u6863\n# serverList: \u670d\u52a1\u5217\u8868\uff0c\u8bf7\u53c2\u8003\u5e94\u7528\u5ba2\u6237\u7aef\u63a5\u5165\u6587\u6863\n# contextPath: \u4e3a\u4f60\u7684\u9879\u76ee\u5728shenyu\u7f51\u5173\u7684\u8def\u7531\u524d\u7f00\u3002 \u6bd4\u5982/order \uff0c/product \u7b49\u7b49\uff0c\u7f51\u5173\u4f1a\u6839\u636e\u4f60\u7684\u8fd9\u4e2a\u524d\u7f00\u6765\u8fdb\u884c\u8def\u7531\u3002\n# appName\uff1a\u4f60\u7684\u5e94\u7528\u540d\u79f0\uff0c\u4e0d\u914d\u7f6e\u7684\u8bdd\uff0c\u4f1a\u9ed8\u8ba4\u53d6application \u4e2d\u7684\u540d\u79f0\n# isFull: \u8bbe\u7f6etrue \u4ee3\u8868\u4ee3\u7406\u4f60\u7684\u6574\u4e2a\u670d\u52a1\uff0cfalse\u8868\u793a\u4ee3\u7406\u4f60\u5176\u4e2d\u67d0\u51e0\u4e2acontroller\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},' @RestController\n @RequestMapping("/order")\n public class OrderController {\n\n     @PostMapping("/save")\n     @ShenyuSpringMvcClient(path = "/save")\n     public OrderDTO save(@RequestBody final OrderDTO orderDTO) {\n         orderDTO.setName("hello world save order");\n         return orderDTO;\n     }\n\n     @GetMapping("/findById")\n     public OrderDTO findById(@RequestParam("id") final String id) {\n         OrderDTO orderDTO = new OrderDTO();\n         orderDTO.setId(id);\n         orderDTO.setName("hello world findById");\n         return orderDTO;\n     }\n }\n')),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u542f\u52a8\u4f60\u7684\u670d\u52a1\u6210\u529f\u6ce8\u518c\u540e\uff0c\u8fdb\u5165\u540e\u53f0\u7ba1\u7406\u7cfb\u7edf\u7684",(0,a.kt)("inlineCode",{parentName:"li"},"\u63d2\u4ef6\u5217\u8868 -> rpc proxy -> springCloud"),"\uff0c\u4f1a\u770b\u5230\u81ea\u52a8\u6ce8\u518c\u7684\u9009\u62e9\u5668\u548c\u89c4\u5219\u4fe1\u606f\u3002")),(0,a.kt)("h2",{id:"\u7528\u6237\u8bf7\u6c42"},"\u7528\u6237\u8bf7\u6c42"),(0,a.kt)("p",null,"\u548c\u4e4b\u524d\u7684\u8bbf\u95ee\u65b9\u5f0f\u6ca1\u6709\u5927\u7684\u6539\u53d8\uff0c\u9700\u8981\u6ce8\u610f\u7684\u662f\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u4f60\u4e4b\u524d\u8bf7\u6c42\u7684\u57df\u540d\u662f\u4f60\u81ea\u5df1\u7684\u670d\u52a1\uff0c\u73b0\u5728\u8981\u6362\u6210\u7f51\u5173\u7684\u57df\u540d\u3002")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u7f51\u5173\u9700\u8981\u6709\u4e00\u4e2a\u8def\u7531\u524d\u7f00\uff0c\u8fd9\u4e2a\u8def\u7531\u524d\u7f00\u5c31\u662f\u4f60\u63a5\u5165\u9879\u76ee\u8fdb\u884c\u914d\u7f6e ",(0,a.kt)("inlineCode",{parentName:"p"},"contextPath"),"\uff0c\u53ef\u4ee5\u5728 ",(0,a.kt)("inlineCode",{parentName:"p"},"shenyu-admin")," \u4e2d\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"springCloud"),"\u63d2\u4ef6\u8fdb\u884c\u66f4\u6539\u3002"))),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u6bd4\u5982\u4f60\u6709\u4e00\u4e2a ",(0,a.kt)("inlineCode",{parentName:"p"},"order")," \u670d\u52a1 \u5b83\u6709\u4e00\u4e2a\u63a5\u53e3\uff0c\u8bf7\u6c42\u8def\u5f84 ",(0,a.kt)("inlineCode",{parentName:"p"},"http://localhost:8080/test/save")),(0,a.kt)("p",{parentName:"blockquote"},"\u73b0\u5728\u5c31\u9700\u8981\u6362\u6210\uff1a",(0,a.kt)("inlineCode",{parentName:"p"},"http://localhost:9195/order/test/save")),(0,a.kt)("p",{parentName:"blockquote"},"\u5176\u4e2d ",(0,a.kt)("inlineCode",{parentName:"p"},"localhost:9195")," \u4e3a\u7f51\u5173\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"ip")," \u7aef\u53e3\uff0c\u9ed8\u8ba4\u7aef\u53e3\u662f ",(0,a.kt)("inlineCode",{parentName:"p"},"9195")," \uff0c",(0,a.kt)("inlineCode",{parentName:"p"},"/order")," \u662f\u4f60\u63a5\u5165\u7f51\u5173\u914d\u7f6e\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"contextPath")),(0,a.kt)("p",{parentName:"blockquote"},"\u5176\u4ed6\u53c2\u6570\uff0c\u8bf7\u6c42\u65b9\u5f0f\u4e0d\u53d8\u3002\u7136\u540e\u4f60\u5c31\u53ef\u4ee5\u8fdb\u884c\u8bbf\u95ee\u4e86\uff0c\u5982\u6b64\u7684\u65b9\u4fbf\u4e0e\u7b80\u5355\u3002")))}s.isMDXComponent=!0}}]);