"use strict";(self.webpackChunkshenyu_website=self.webpackChunkshenyu_website||[]).push([[27048],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>h});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),u=c(n),d=r,h=u["".concat(l,".").concat(d)]||u[d]||m[d]||o;return n?a.createElement(h,i(i({ref:t},s),{},{components:n})):a.createElement(h,i({ref:t},s))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p[u]="string"==typeof e?e:r,i[1]=p;for(var c=2;c<o;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},25287:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>p,toc:()=>l});var a=n(87462),r=(n(67294),n(3905));const o={title:"Motan\u5feb\u901f\u5f00\u59cb",description:"Motan\u5feb\u901f\u5f00\u59cb"},i=void 0,p={unversionedId:"quick-start/quick-start-motan",id:"quick-start/quick-start-motan",isDocsHomePage:!1,title:"Motan\u5feb\u901f\u5f00\u59cb",description:"Motan\u5feb\u901f\u5f00\u59cb",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/quick-start/quick-start-motan.md",sourceDirName:"quick-start",slug:"/quick-start/quick-start-motan",permalink:"/zh/docs/next/quick-start/quick-start-motan",editUrl:"https://github.com/apache/shenyu-website/edit/main/i18n/zh/docusaurus-plugin-content-docs/current/quick-start/quick-start-motan.md",version:"current",frontMatter:{title:"Motan\u5feb\u901f\u5f00\u59cb",description:"Motan\u5feb\u901f\u5f00\u59cb"},sidebar:"tutorialSidebar",previous:{title:"Http\u5feb\u901f\u5f00\u59cb",permalink:"/zh/docs/next/quick-start/quick-start-http"},next:{title:"Sofa\u5feb\u901f\u5f00\u59cb",permalink:"/zh/docs/next/quick-start/quick-start-sofa"}},l=[{value:"\u73af\u5883\u51c6\u5907",id:"\u73af\u5883\u51c6\u5907",children:[]},{value:"\u8fd0\u884cshenyu-examples-motan\u9879\u76ee",id:"\u8fd0\u884cshenyu-examples-motan\u9879\u76ee",children:[]},{value:"\u6d4b\u8bd5Http\u8bf7\u6c42",id:"\u6d4b\u8bd5http\u8bf7\u6c42",children:[]}],c={toc:l},s="wrapper";function u(e){let{components:t,...n}=e;return(0,r.kt)(s,(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"\u672c\u6587\u6863\u6f14\u793a\u5982\u4f55\u5c06",(0,r.kt)("inlineCode",{parentName:"p"},"Motan"),"\u670d\u52a1\u63a5\u5165\u5230",(0,r.kt)("inlineCode",{parentName:"p"},"Apache ShenYu"),"\u7f51\u5173\u3002\u60a8\u53ef\u4ee5\u76f4\u63a5\u5728\u5de5\u7a0b\u4e0b\u627e\u5230\u672c\u6587\u6863\u7684",(0,r.kt)("a",{parentName:"p",href:"https://github.com/apache/shenyu/tree/master/shenyu-examples/shenyu-examples-motan"},"\u793a\u4f8b\u4ee3\u7801")," \u3002"),(0,r.kt)("h2",{id:"\u73af\u5883\u51c6\u5907"},"\u73af\u5883\u51c6\u5907"),(0,r.kt)("p",null,"\u8bf7\u53c2\u8003\u8fd0\u7ef4\u90e8\u7f72\u7684\u5185\u5bb9\uff0c\u9009\u62e9\u4e00\u79cd\u65b9\u5f0f\u542f\u52a8",(0,r.kt)("inlineCode",{parentName:"p"},"shenyu-admin"),"\u3002\u6bd4\u5982\uff0c\u901a\u8fc7 ",(0,r.kt)("a",{parentName:"p",href:"../deployment/deployment-local"},"\u672c\u5730\u90e8\u7f72")," \u542f\u52a8",(0,r.kt)("inlineCode",{parentName:"p"},"Apache ShenYu"),"\u540e\u53f0\u7ba1\u7406\u7cfb\u7edf\u3002"),(0,r.kt)("p",null,"\u542f\u52a8\u6210\u529f\u540e\uff0c\u9700\u8981\u5728\u57fa\u7840\u914d\u7f6e",(0,r.kt)("inlineCode",{parentName:"p"},"->"),"\u63d2\u4ef6\u7ba1\u7406\u4e2d\uff0c\u628a",(0,r.kt)("inlineCode",{parentName:"p"},"motan")," \u63d2\u4ef6\u8bbe\u7f6e\u4e3a\u5f00\u542f\u3002"),(0,r.kt)("img",{src:"/img/shenyu/plugin/motan/motan_open.png",width:"60%",height:"50%"}),(0,r.kt)("p",null,"\u542f\u52a8\u7f51\u5173\uff0c\u5982\u679c\u662f\u901a\u8fc7\u6e90\u7801\u7684\u65b9\u5f0f\uff0c\u76f4\u63a5\u8fd0\u884c",(0,r.kt)("inlineCode",{parentName:"p"},"shenyu-bootstrap"),"\u4e2d\u7684",(0,r.kt)("inlineCode",{parentName:"p"},"ShenyuBootstrapApplication"),"\u3002"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u6ce8\u610f\uff0c\u5728\u542f\u52a8\u524d\uff0c\u8bf7\u786e\u4fdd\u7f51\u5173\u5df2\u7ecf\u5f15\u5165\u76f8\u5173\u4f9d\u8d56\u3002\n\u672c\u5730\u5df2\u7ecf\u6210\u529f\u542f\u52a8zookeeper\u3002")),(0,r.kt)("p",null,"\u5f15\u5165\u7f51\u5173\u5bf9",(0,r.kt)("inlineCode",{parentName:"p"},"Motan"),"\u7684\u4ee3\u7406\u63d2\u4ef6\uff0c\u5728\u7f51\u5173\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"pom.xml")," \u6587\u4ef6\u4e2d\u589e\u52a0\u5982\u4e0b\u4f9d\u8d56\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-xml"},"        \x3c!-- apache shenyu motan plugin --\x3e\n        <dependency>\n            <groupId>org.apache.shenyu</groupId>\n            <artifactId>shenyu-spring-boot-starter-plugin-motan</artifactId>\n            <version>${project.version}</version>\n        </dependency>\n\n        <dependency>\n            <groupId>com.weibo</groupId>\n            <artifactId>motan-core</artifactId>\n            <version>1.1.9</version>\n        </dependency>\n\n        <dependency>\n            <groupId>com.weibo</groupId>\n            <artifactId>motan-registry-zookeeper</artifactId>\n            <version>1.1.9</version>\n        </dependency>\n\n        <dependency>\n            <groupId>com.weibo</groupId>\n            <artifactId>motan-transport-netty4</artifactId>\n            <version>1.1.9</version>\n        </dependency>\n\n        <dependency>\n            <groupId>com.weibo</groupId>\n            <artifactId>motan-springsupport</artifactId>\n            <version>1.1.9</version>\n        </dependency>\n")),(0,r.kt)("h2",{id:"\u8fd0\u884cshenyu-examples-motan\u9879\u76ee"},"\u8fd0\u884cshenyu-examples-motan\u9879\u76ee"),(0,r.kt)("p",null,"\u4e0b\u8f7d ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/apache/shenyu/tree/master/shenyu-examples/shenyu-examples-motan"},"shenyu-examples-motan")," \u3002"),(0,r.kt)("p",null,"\u8fd0\u884c",(0,r.kt)("inlineCode",{parentName:"p"},"org.apache.shenyu.examples.motan.service.TestMotanApplication"),"main\u65b9\u6cd5\u542f\u52a8\u9879\u76ee\u3002"),(0,r.kt)("p",null,"\u6210\u529f\u542f\u52a8\u4f1a\u6709\u5982\u4e0b\u65e5\u5fd7\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'2021-07-18 16:46:25.388  INFO 96 --- [           main] o.s.b.w.embedded.tomcat.TomcatWebServer  : Tomcat started on port(s): 8081 (http) with context path \'\'\n2021-07-18 16:46:25.393  INFO 96 --- [           main] o.a.s.e.m.service.TestMotanApplication   : Started TestMotanApplication in 3.89 seconds (JVM running for 4.514)\n2021-07-18 16:46:25.396  INFO 96 --- [           main] info                                     : [ZookeeperRegistry] Url (null) will set to available to Registry [zookeeper://localhost:2181/default_rpc/com.weibo.api.motan.registry.RegistryService/1.0/service]\n2021-07-18 16:46:25.399  INFO 96 --- [       Thread-6] o.a.s.c.c.s.ShenyuClientShutdownHook     : hook Thread-0 will sleep 3000ms when it start\n2021-07-18 16:46:25.399  INFO 96 --- [       Thread-6] o.a.s.c.c.s.ShenyuClientShutdownHook     : hook SpringContextShutdownHook will sleep 3000ms when it start\n2021-07-18 16:46:25.445  INFO 96 --- [ntLoopGroup-3-2] info                                     : NettyChannelHandler channelActive: remote=/192.168.1.8:49740 local=/192.168.1.8:8002\n2021-07-18 16:46:25.445  INFO 96 --- [ntLoopGroup-3-1] info                                     : NettyChannelHandler channelActive: remote=/192.168.1.8:49739 local=/192.168.1.8:8002\n2021-07-18 16:46:25.925  INFO 96 --- [or_consumer_-17] o.a.s.r.client.http.utils.RegisterUtils  : motan client register success: {"appName":"motan","contextPath":"/motan","path":"/motan/hello","pathDesc":"","rpcType":"motan","serviceName":"org.apache.shenyu.examples.motan.service.MotanDemoService","methodName":"hello","ruleName":"/motan/hello","parameterTypes":"java.lang.String","rpcExt":"{\\"methodInfo\\":[{\\"methodName\\":\\"hello\\",\\"params\\":[{\\"left\\":\\"java.lang.String\\",\\"right\\":\\"name\\"}]}],\\"group\\":\\"motan-shenyu-rpc\\"}","enabled":true,"host":"192.168.220.1","port":8081,"registerMetaData":false} \n\n')),(0,r.kt)("h2",{id:"\u6d4b\u8bd5http\u8bf7\u6c42"},"\u6d4b\u8bd5Http\u8bf7\u6c42"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"shenyu-examples-motan"),"\u9879\u76ee\u6210\u529f\u542f\u52a8\u4e4b\u540e\u4f1a\u81ea\u52a8\u628a\u52a0 ",(0,r.kt)("inlineCode",{parentName:"p"},"@ShenyuMotanClient")," \u6ce8\u89e3\u7684\u63a5\u53e3\u65b9\u6cd5\u6ce8\u518c\u5230\u7f51\u5173\uff0c\u5e76\u6dfb\u52a0\u9009\u62e9\u5668\u548c\u89c4\u5219\uff0c\u5982\u679c\u6ca1\u6709\uff0c\u53ef\u4ee5\u624b\u52a8\u6dfb\u52a0\u3002"),(0,r.kt)("p",null,"\u6253\u5f00",(0,r.kt)("inlineCode",{parentName:"p"},"\u63d2\u4ef6\u5217\u8868 -> rpc proxy -> motan"),"\u53ef\u4ee5\u770b\u5230\u63d2\u4ef6\u89c4\u5219\u914d\u7f6e\u5217\u8868\uff1a"),(0,r.kt)("img",{src:"/img/shenyu/plugin/motan/selector_rule_list.png",width:"60%",height:"50%"}),(0,r.kt)("p",null,"\u4e0b\u9762\u4f7f\u7528",(0,r.kt)("inlineCode",{parentName:"p"},"postman"),"\u6a21\u62df",(0,r.kt)("inlineCode",{parentName:"p"},"http"),"\u7684\u65b9\u5f0f\u6765\u8bf7\u6c42\u4f60\u7684",(0,r.kt)("inlineCode",{parentName:"p"},"motan"),"\u670d\u52a1\uff1a"),(0,r.kt)("img",{src:"/img/shenyu/plugin/motan/motan_service.png",width:"60%",height:"50%"}))}u.isMDXComponent=!0}}]);