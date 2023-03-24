"use strict";(self.webpackChunkshenyu_website=self.webpackChunkshenyu_website||[]).push([[53043],{3905:(e,n,t)=>{t.d(n,{Zo:()=>o,kt:()=>m});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function p(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var u=r.createContext({}),l=function(e){var n=r.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):p(p({},n),e)),t},o=function(e){var n=l(e.components);return r.createElement(u.Provider,{value:n},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},k=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,u=e.parentName,o=s(e,["components","mdxType","originalType","parentName"]),d=l(t),k=a,m=d["".concat(u,".").concat(k)]||d[k]||c[k]||i;return t?r.createElement(m,p(p({ref:n},o),{},{components:t})):r.createElement(m,p({ref:n},o))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,p=new Array(i);p[0]=k;var s={};for(var u in n)hasOwnProperty.call(n,u)&&(s[u]=n[u]);s.originalType=e,s[d]="string"==typeof e?e:a,p[1]=s;for(var l=2;l<i;l++)p[l]=t[l];return r.createElement.apply(null,p)}return r.createElement.apply(null,t)}k.displayName="MDXCreateElement"},46677:(e,n,t)=>{t.r(n),t.d(n,{contentTitle:()=>p,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>u});var r=t(87462),a=(t(67294),t(3905));const i={title:"\u4f7f\u7528Eureka\u63a5\u5165",keywords:["Sdk \u4f7f\u7528","Eureka"],description:"Sdk\u4f7f\u7528"},p=void 0,s={unversionedId:"user-guide/sdk-usage/shenyu-sdk-eureka",id:"version-2.5.1/user-guide/sdk-usage/shenyu-sdk-eureka",isDocsHomePage:!1,title:"\u4f7f\u7528Eureka\u63a5\u5165",description:"Sdk\u4f7f\u7528",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-2.5.1/user-guide/sdk-usage/shenyu-sdk-eureka.md",sourceDirName:"user-guide/sdk-usage",slug:"/user-guide/sdk-usage/shenyu-sdk-eureka",permalink:"/zh/docs/user-guide/sdk-usage/shenyu-sdk-eureka",editUrl:"https://github.com/apache/shenyu-website/edit/main/i18n/zh/docusaurus-plugin-content-docs/version-2.5.1/user-guide/sdk-usage/shenyu-sdk-eureka.md",version:"2.5.1",frontMatter:{title:"\u4f7f\u7528Eureka\u63a5\u5165",keywords:["Sdk \u4f7f\u7528","Eureka"],description:"Sdk\u4f7f\u7528"},sidebar:"version-2.5.1/tutorialSidebar",previous:{title:"\u4f7f\u7528Etcd\u63a5\u5165",permalink:"/zh/docs/user-guide/sdk-usage/shenyu-sdk-etcd"},next:{title:"\u4f7f\u7528Nacos\u63a5\u5165",permalink:"/zh/docs/user-guide/sdk-usage/shenyu-sdk-nacos"}},u=[{value:"\u80cc\u666f\u8bf4\u660e",id:"\u80cc\u666f\u8bf4\u660e",children:[]},{value:"\u73af\u5883\u51c6\u5907",id:"\u73af\u5883\u51c6\u5907",children:[]},{value:"shenyu-bootstrap",id:"shenyu-bootstrap",children:[{value:"\u6dfb\u52a0Maven\u4f9d\u8d56",id:"\u6dfb\u52a0maven\u4f9d\u8d56",children:[]},{value:"\u914d\u7f6e\u6587\u4ef6\u8c03\u6574",id:"\u914d\u7f6e\u6587\u4ef6\u8c03\u6574",children:[]}]},{value:"\u5e94\u7528\u5ba2\u6237\u7aef",id:"\u5e94\u7528\u5ba2\u6237\u7aef",children:[{value:"\u6dfb\u52a0Maven\u4f9d\u8d56",id:"\u6dfb\u52a0maven\u4f9d\u8d56-1",children:[]},{value:"\u914d\u7f6e\u6587\u4ef6\u8c03\u6574",id:"\u914d\u7f6e\u6587\u4ef6\u8c03\u6574-1",children:[]}]},{value:"\u672c\u5730\u63a5\u53e3\u914d\u7f6e",id:"\u672c\u5730\u63a5\u53e3\u914d\u7f6e",children:[]}],l={toc:u},o="wrapper";function d(e){let{components:n,...t}=e;return(0,a.kt)(o,(0,r.Z)({},l,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"\u80cc\u666f\u8bf4\u660e"},"\u80cc\u666f\u8bf4\u660e"),(0,a.kt)("p",null,"Shenyu\u63d0\u4f9b\u4e86Shenyu-Sdk\u65b9\u4fbf\u8ba9\u670d\u52a1\u80fd\u591f\u5feb\u901f\u63a5\u5165shenyu\u7f51\u5173\uff0c \u5ba2\u6237\u7aef\u670d\u52a1\u53ea\u9700\u8981\u4f9d\u8d56\u8be5sdk\uff0c \u5e76\u505a\u4e9b\u7b80\u5355\u914d\u7f6e\uff0c \u5373\u53ef\u7c7b\u4f3c\u8c03\u7528\u672c\u5730\u63a5\u53e3\u4e00\u6837\u8c03\u7528\u7f51\u5173\u66b4\u9732\u7684API\u3002"),(0,a.kt)("img",{src:"/img/shenyu/sdk/shenyu-sdk_process.png",width:"80%",height:"50%"}),(0,a.kt)("p",null,"\u5ba2\u6237\u7aef\u63a5\u5165\u7f51\u5173\u65f6\u53ef\u4f7f\u7528\u6ce8\u518c\u4e2d\u5fc3\u505a\u670d\u52a1\u53d1\u73b0\uff0c\u652f\u6301\u7684\u6ce8\u518c\u4e2d\u5fc3\u6709",(0,a.kt)("inlineCode",{parentName:"p"},"nacos\u3001eureka\u3001etcd\u3001zookeeper\u3001consul"),", \u4e0b\u9762\u4e3a",(0,a.kt)("inlineCode",{parentName:"p"},"shenyu-bootstrap"),"\u53ca",(0,a.kt)("inlineCode",{parentName:"p"},"\u5e94\u7528\u5ba2\u6237\u7aef"),"\u4f7f\u7528",(0,a.kt)("strong",{parentName:"p"},"eureka"),"\u4e3a\u6ce8\u518c\u4e2d\u5fc3\u65f6\u7684\u76f8\u5173\u6307\u5f15\u3002"),(0,a.kt)("h2",{id:"\u73af\u5883\u51c6\u5907"},"\u73af\u5883\u51c6\u5907"),(0,a.kt)("p",null,"\u9700\u8981\u53c2\u8003 ",(0,a.kt)("inlineCode",{parentName:"p"},"\u8fd0\u7ef4\u90e8\u7f72")," , \u9009\u62e9\u4e00\u79cd\u65b9\u5f0f\u542f\u52a8",(0,a.kt)("inlineCode",{parentName:"p"},"shenyu-admin"),"\u53ca",(0,a.kt)("inlineCode",{parentName:"p"},"shenyu-bootstrap"),"."),(0,a.kt)("h2",{id:"shenyu-bootstrap"},"shenyu-bootstrap"),(0,a.kt)("h3",{id:"\u6dfb\u52a0maven\u4f9d\u8d56"},"\u6dfb\u52a0Maven\u4f9d\u8d56"),(0,a.kt)("p",null,"\u5728\u7f51\u5173\u7684",(0,a.kt)("inlineCode",{parentName:"p"},"pom.xml"),"\u6587\u4ef6\u4e2d\u5f15\u5165\u5982\u4e0b\u4f9d\u8d56."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-xml"},"<dependency>\n    <groupId>org.springframework.cloud</groupId>\n    <artifactId>spring-cloud-starter-netflix-eureka-client</artifactId>\n    <version>${eureka-client.version}</version>\n    <exclusions>\n        <exclusion>\n            <groupId>org.springframework.cloud</groupId>\n            <artifactId>spring-cloud-starter-loadbalancer</artifactId>\n        </exclusion>\n    </exclusions>\n</dependency>\n")),(0,a.kt)("h3",{id:"\u914d\u7f6e\u6587\u4ef6\u8c03\u6574"},"\u914d\u7f6e\u6587\u4ef6\u8c03\u6574"),(0,a.kt)("p",null,"\u5728\u7f51\u5173\u7684",(0,a.kt)("inlineCode",{parentName:"p"},"yml"),"\u914d\u7f6e\u6587\u4ef6\u4e2d\u6dfb\u52a0\u5982\u4e0b\u914d\u7f6e."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"spring:\n  cloud:\n    discovery:\n      enabled: true # \u542f\u7528\u670d\u52a1\u53d1\u73b0\n  \neureka:\n  client:\n    enabled: true\n    serviceUrl:\n      defaultZone: http://localhost:8761/eureka/ # \u6b64\u5904\u586b\u4f60\u7684eureka\u6ce8\u518c\u4e2d\u5fc3\u5730\u5740\n  instance:\n    prefer-ip-address: true\n")),(0,a.kt)("h2",{id:"\u5e94\u7528\u5ba2\u6237\u7aef"},"\u5e94\u7528\u5ba2\u6237\u7aef"),(0,a.kt)("h3",{id:"\u6dfb\u52a0maven\u4f9d\u8d56-1"},"\u6dfb\u52a0Maven\u4f9d\u8d56"),(0,a.kt)("p",null,"\u5728\u5e94\u7528\u5ba2\u6237\u7aef\u7684",(0,a.kt)("inlineCode",{parentName:"p"},"pom.xml"),"\u6587\u4ef6\u4e2d\u5f15\u5165\u5982\u4e0b\u4f9d\u8d56."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Shenyu-Sdk \u6838\u5fc3\u5305")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-xml"},"<dependencies>\n    <dependency>\n        <groupId>org.apache.shenyu</groupId>\n        <artifactId>shenyu-sdk-core</artifactId>\n        <version>2.5.1-SNAPSHOT</version>\n    </dependency>\n\n    <dependency>\n        <groupId>org.apache.shenyu</groupId>\n        <artifactId>shenyu-spring-boot-starter-sdk</artifactId>\n        <version>2.5.1-SNAPSHOT</version>\n    </dependency>\n</dependencies>\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Shenyu-Sdk http\u5b9e\u73b0\u5305")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"http\u5ba2\u6237\u7aef\u5b9e\u73b0\uff0c \u76ee\u524d\u63d0\u4f9b\u5b9e\u73b0okhttp, httpclient. \u5176\u4ed6\u5ba2\u6237\u7aef\u5b9e\u73b0\u53ef\u7ee7\u627f",(0,a.kt)("inlineCode",{parentName:"p"},"AbstractShenyuSdkClient"),"\u5b9e\u73b0\u3002")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-xml"},"\x3c!-- httpclient --\x3e\n<dependency>\n    <groupId>org.apache.shenyu</groupId>\n    <artifactId>shenyu-sdk-httpclient</artifactId>\n    <version>2.5.1-SNAPSHOT</version>\n</dependency>\n\n\x3c!-- okhttp --\x3e\n\x3c!-- \n<dependency>\n    <groupId>org.apache.shenyu</groupId>\n    <artifactId>shenyu-sdk-okhttp</artifactId>\n    <version>2.5.1-SNAPSHOT</version>\n</dependency>\n--\x3e\n")),(0,a.kt)("h3",{id:"\u914d\u7f6e\u6587\u4ef6\u8c03\u6574-1"},"\u914d\u7f6e\u6587\u4ef6\u8c03\u6574"),(0,a.kt)("p",null,"\u5728\u5e94\u7528\u5ba2\u6237\u7aef\u7684",(0,a.kt)("inlineCode",{parentName:"p"},"yml"),"\u914d\u7f6e\u6587\u4ef6\u4e2d\u6dfb\u52a0\u5982\u4e0b\u914d\u7f6e."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"shenyu:\n  sdk:\n    enabled: true\n    register-type: eureka \n    server-lists: http://localhost:8761/eureka/\n    props:\n      retry:\n        enable: true\n        period: 100\n        maxPeriod: 1000\n        maxAttempts: 5\n      algorithm: roundRobin\n      scheme: http\n      \n# registerType : \u670d\u52a1\u6ce8\u518c\u7c7b\u578b\uff0c\u586b\u5199 eureka\n# serverList: \u4e3aeureka\u6ce8\u518c\u7c7b\u578b\u65f6\uff0c\u914d\u7f6e\u6210\u4f60\u7684eureka\u6ce8\u518c\u4e2d\u5fc3\u5730\u5740\uff0c\u96c6\u7fa4\u73af\u5883\u8bf7\u4f7f\u7528\uff08,\uff09\u5206\u9694\n# retry \u5931\u8d25\u91cd\u8bd5\u76f8\u5173\u914d\u7f6e\n# retry.period: \u91cd\u8bd5\u7b49\u5f85\u65f6\u95f4\n# retry.maxPeriod: \u6700\u5927\u91cd\u8bd5\u7b49\u5f85\u65f6\u95f4 \n# retry.maxAttempts: \u6700\u5927\u91cd\u8bd5\u6b21\u6570\n# algorithm: \u8d1f\u8f7d\u5747\u8861\n# scheme: \u8bf7\u6c42\u534f\u8bae\u5934\n")),(0,a.kt)("h2",{id:"\u672c\u5730\u63a5\u53e3\u914d\u7f6e"},"\u672c\u5730\u63a5\u53e3\u914d\u7f6e"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"\u5728\u9879\u76ee\u542f\u52a8\u7c7b\u4e0a\u6807\u6ce8",(0,a.kt)("inlineCode",{parentName:"p"},'@EnableShenyuClients(basePackages = "org.apache.shenyu.examples.sdk.http.api")'),", \u5176\u4e2d",(0,a.kt)("inlineCode",{parentName:"p"},"basePackages"),"\u4e2d\u7ef4\u62a4\u7684\u662fShenyu-Sdk\u5bf9\u5e94\u7ef4\u62a4\u7f51\u5173API\u63a5\u53e3\u7684\u6240\u5728\u5305\u4f4d\u7f6e.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"\u521b\u5efainterface\u5e76\u4f7f\u7528",(0,a.kt)("inlineCode",{parentName:"p"},'@ShenyuClient(name = "xxx", contextId = "ShenyuSdkApiName")'),"\u6ce8\u89e3\u6807\u6ce8, \u5176\u4e2d",(0,a.kt)("inlineCode",{parentName:"p"},"name"),"\u8868\u793a\u7f51\u5173\u670d\u52a1\u540d.\u5047\u5982\u4f60\u9700\u8981\u5b9a\u4e49\u591a\u4e2abean\u6765\u7ef4\u62a4\u7f51\u5173\u7684API, \u53ef\u4ee5\u4f7f\u7528",(0,a.kt)("inlineCode",{parentName:"p"},"contextId"),"\u4f5c\u4e3a\u5bf9\u5e94\u7684bean\u522b\u540d.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"\u5728\u5b9a\u4e49\u63a5\u53e3\u4e2d\u6dfb\u52a0\u6240\u8981\u6620\u5c04shenyu\u7f51\u5173\u4e2d\u7684\u63a5\u53e3\u65b9\u6cd5\uff0c \u5176\u4e2d",(0,a.kt)("inlineCode",{parentName:"p"},"@xxMapping"),"\u4e2d\u7684",(0,a.kt)("inlineCode",{parentName:"p"},"value"),"\u5bf9\u5e94\u503c\u662f\u7f51\u5173\u4e2d\u5bf9\u5e94\u8bf7\u6c42\u7684\u8def\u5f84\u3002"))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u793a\u4f8b")),(0,a.kt)("p",null,"\u9879\u76ee\u542f\u52a8\u7c7b"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},'@SpringBootApplication\n@EnableShenyuClients(basePackages = "org.apache.shenyu.examples.sdk.http.api")\npublic class ShenyuSdkHttpExampleApplication {\n\n    /**\n     * main.\n     *\n     * @param args args\n     */\n    public static void main(final String[] args) {\n        SpringApplication.run(ShenyuSdkHttpExampleApplication.class, args);\n    }\n}\n')),(0,a.kt)("p",null,"\u7f51\u5173API\u63a5\u53e3"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},'@ShenyuClient(name = "shenyu-bootstrap", contextId = "ShenyuSdkApiName")\npublic interface ShenyuHttpClientApi {\n\n    /**\n     * findById.\n     * test Get.\n     *\n     * @param id id\n     * @return SdkTestDto\n     */\n    @GetMapping("/http/shenyu/client/findById")\n    SdkTestDto findById(@RequestParam("id") String id);\n}\n')),(0,a.kt)("p",null,"\u66f4\u591a\u53ef\u53c2\u8003\u793a\u4f8b\u5de5\u7a0b ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/apache/shenyu/tree/master/shenyu-examples/shenyu-examples-sdk"},"shenyu-examples-sdk")))}d.isMDXComponent=!0}}]);