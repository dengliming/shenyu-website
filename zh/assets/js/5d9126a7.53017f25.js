"use strict";(self.webpackChunkshenyu_website=self.webpackChunkshenyu_website||[]).push([[6277],{3905:function(e,n,t){t.d(n,{Zo:function(){return l},kt:function(){return m}});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var u=r.createContext({}),c=function(e){var n=r.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},l=function(e){var n=c(e.components);return r.createElement(u.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},s=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),s=c(t),m=a,y=s["".concat(u,".").concat(m)]||s[m]||d[m]||o;return t?r.createElement(y,i(i({ref:n},l),{},{components:t})):r.createElement(y,i({ref:n},l))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=s;var p={};for(var u in n)hasOwnProperty.call(n,u)&&(p[u]=n[u]);p.originalType=e,p.mdxType="string"==typeof e?e:a,i[1]=p;for(var c=2;c<o;c++)i[c]=t[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}s.displayName="MDXCreateElement"},7043:function(e,n,t){t.r(n),t.d(n,{contentTitle:function(){return u},default:function(){return s},frontMatter:function(){return p},metadata:function(){return c},toc:function(){return l}});var r=t(87462),a=t(63366),o=(t(67294),t(3905)),i=["components"],p={title:"Motan\u670d\u52a1\u63a5\u5165",description:"Motan\u670d\u52a1\u63a5\u5165"},u=void 0,c={unversionedId:"user-guide/motan-proxy",id:"user-guide/motan-proxy",isDocsHomePage:!1,title:"Motan\u670d\u52a1\u63a5\u5165",description:"Motan\u670d\u52a1\u63a5\u5165",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/user-guide/motan-proxy.md",sourceDirName:"user-guide",slug:"/user-guide/motan-proxy",permalink:"/zh/docs/next/user-guide/motan-proxy",editUrl:"https://github.com/apache/incubator-shenyu-website/edit/main/i18n/zh/docusaurus-plugin-content-docs/current/user-guide/motan-proxy.md",version:"current",frontMatter:{title:"Motan\u670d\u52a1\u63a5\u5165",description:"Motan\u670d\u52a1\u63a5\u5165"},sidebar:"tutorialSidebar",previous:{title:"Http\u670d\u52a1\u63a5\u5165",permalink:"/zh/docs/next/user-guide/http-proxy"},next:{title:"\u5ba2\u6237\u7aef\u63a5\u5165\u914d\u7f6e",permalink:"/zh/docs/next/user-guide/register-center-access"}},l=[{value:"\u5728\u7f51\u5173\u4e2d\u5f15\u5165 motan \u63d2\u4ef6",id:"\u5728\u7f51\u5173\u4e2d\u5f15\u5165-motan-\u63d2\u4ef6",children:[]},{value:"Motan\u670d\u52a1\u63a5\u5165\u7f51\u5173",id:"motan\u670d\u52a1\u63a5\u5165\u7f51\u5173",children:[]},{value:"\u7528\u6237\u8bf7\u6c42",id:"\u7528\u6237\u8bf7\u6c42",children:[]}],d={toc:l};function s(e){var n=e.components,t=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"\u6b64\u7bc7\u6587\u4ecb\u7ecd\u5982\u4f55\u5c06 ",(0,o.kt)("inlineCode",{parentName:"p"},"Motan")," \u670d\u52a1\u63a5\u5165\u5230 ",(0,o.kt)("inlineCode",{parentName:"p"},"Apache ShenYu")," \u7f51\u5173\uff0c",(0,o.kt)("inlineCode",{parentName:"p"},"Apache ShenYu")," \u7f51\u5173\u4f7f\u7528 ",(0,o.kt)("inlineCode",{parentName:"p"},"motan")," \u63d2\u4ef6\u6765\u63a5\u5165",(0,o.kt)("inlineCode",{parentName:"p"},"Motan"),"\u670d\u52a1\u3002"),(0,o.kt)("p",null,"\u63a5\u5165\u524d\uff0c\u8bf7\u6b63\u786e\u542f\u52a8 ",(0,o.kt)("inlineCode",{parentName:"p"},"shenyu-admin"),"\uff0c\u5e76\u5f00\u542f",(0,o.kt)("inlineCode",{parentName:"p"},"motan"),"\u63d2\u4ef6\uff0c\u5728\u7f51\u5173\u7aef\u548c",(0,o.kt)("inlineCode",{parentName:"p"},"motan"),"\u670d\u52a1\u7aef\u5f15\u5165\u76f8\u5173\u4f9d\u8d56\u3002\u53ef\u4ee5\u53c2\u8003\u524d\u9762\u7684 ",(0,o.kt)("a",{parentName:"p",href:"../quick-start/quick-start-motan"},"Motan\u5feb\u901f\u5f00\u59cb")," \u3002"),(0,o.kt)("p",null,"\u5e94\u7528\u5ba2\u6237\u7aef\u63a5\u5165\u7684\u76f8\u5173\u914d\u7f6e\u8bf7\u53c2\u8003\uff1a",(0,o.kt)("a",{parentName:"p",href:"./register-center-access"},"\u5ba2\u6237\u7aef\u63a5\u5165\u914d\u7f6e"),"\u3002"),(0,o.kt)("p",null,"\u6570\u636e\u540c\u6b65\u7684\u76f8\u5173\u914d\u7f6e\u8bf7\u53c2\u8003\uff1a",(0,o.kt)("a",{parentName:"p",href:"./use-data-sync"},"\u6570\u636e\u540c\u6b65\u914d\u7f6e"),"\u3002"),(0,o.kt)("h2",{id:"\u5728\u7f51\u5173\u4e2d\u5f15\u5165-motan-\u63d2\u4ef6"},"\u5728\u7f51\u5173\u4e2d\u5f15\u5165 motan \u63d2\u4ef6"),(0,o.kt)("p",null,"\u5f15\u5165\u7f51\u5173\u5bf9",(0,o.kt)("inlineCode",{parentName:"p"},"Motan"),"\u7684\u4ee3\u7406\u63d2\u4ef6\uff0c\u5728\u7f51\u5173\u7684 ",(0,o.kt)("inlineCode",{parentName:"p"},"pom.xml")," \u6587\u4ef6\u4e2d\u589e\u52a0\u5982\u4e0b\u4f9d\u8d56\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-xml"},"  \x3c!-- apache shenyu motan plugin --\x3e\n<dependency>\n    <groupId>org.apache.shenyu</groupId>\n    <artifactId>shenyu-spring-boot-starter-plugin-motan</artifactId>\n    <version>${project.version}</version>\n</dependency>\n\n<dependency>\n<groupId>com.weibo</groupId>\n<artifactId>motan-core</artifactId>\n<version>1.1.9</version>\n</dependency>\n\n<dependency>\n<groupId>com.weibo</groupId>\n<artifactId>motan-registry-zookeeper</artifactId>\n<version>1.1.9</version>\n</dependency>\n\n<dependency>\n<groupId>com.weibo</groupId>\n<artifactId>motan-transport-netty4</artifactId>\n<version>1.1.9</version>\n</dependency>\n\n<dependency>\n<groupId>com.weibo</groupId>\n<artifactId>motan-springsupport</artifactId>\n<version>1.1.9</version>\n</dependency>\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u91cd\u542f\u4f60\u7684\u7f51\u5173\u670d\u52a1\u3002")),(0,o.kt)("h2",{id:"motan\u670d\u52a1\u63a5\u5165\u7f51\u5173"},"Motan\u670d\u52a1\u63a5\u5165\u7f51\u5173"),(0,o.kt)("p",null,"\u53ef\u4ee5\u53c2\u8003\uff1a ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/apache/incubator-shenyu/tree/v2.4.0/shenyu-examples/shenyu-examples-motan"},"shenyu-examples-motan")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u5728\u7531",(0,o.kt)("inlineCode",{parentName:"li"},"Motan"),"\u6784\u5efa\u7684\u5fae\u670d\u52a1\u4e2d\uff0c\u5f15\u5165\u5982\u4e0b\u4f9d\u8d56\uff1a")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-xml"},"        <dependency>\n    <groupId>org.apache.shenyu</groupId>\n    <artifactId>shenyu-spring-boot-starter-client-motan</artifactId>\n    <version>${shenyu.version}</version>\n</dependency>\n")),(0,o.kt)("p",null,"\u5728",(0,o.kt)("inlineCode",{parentName:"p"},"Motan"),"\u670d\u52a1\u63a5\u53e3\u5b9e\u73b0\u7c7b\u7684\u65b9\u6cd5\u4e0a\u52a0\u4e0a\u6ce8\u89e3",(0,o.kt)("inlineCode",{parentName:"p"},"@ShenyuMotanClient"),"\uff0c\u542f\u52a8\u4f60\u7684\u670d\u52a1\u63d0\u4f9b\u8005\uff0c\u6210\u529f\u6ce8\u518c\u540e\uff0c\u5728\u540e\u53f0\u7ba1\u7406\u7cfb\u7edf\u8fdb\u5165",(0,o.kt)("inlineCode",{parentName:"p"},"\u63d2\u4ef6\u5217\u8868 -> rpc proxy -> motan"),"\uff0c\u4f1a\u770b\u5230\u81ea\u52a8\u6ce8\u518c\u7684\u9009\u62e9\u5668\u548c\u89c4\u5219\u4fe1\u606f\u3002"),(0,o.kt)("p",null,"\u793a\u4f8b\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'    @MotanService(export = "demoMotan:8002")\npublic class MotanDemoServiceImpl implements MotanDemoService {\n    @Override\n    @ShenyuMotanClient(path = "/hello")\n    public String hello(String name) {\n        return "hello " + name;\n    }\n}\n')),(0,o.kt)("h2",{id:"\u7528\u6237\u8bf7\u6c42"},"\u7528\u6237\u8bf7\u6c42"),(0,o.kt)("p",null,"\u53ef\u4ee5\u901a\u8fc7 ",(0,o.kt)("inlineCode",{parentName:"p"},"http")," \u7684\u65b9\u5f0f\u6765\u8bf7\u6c42\u4f60\u7684",(0,o.kt)("inlineCode",{parentName:"p"},"motan"),"\u670d\u52a1\u3002",(0,o.kt)("inlineCode",{parentName:"p"},"Apache ShenYu"),"\u7f51\u5173\u9700\u8981\u6709\u4e00\u4e2a\u8def\u7531\u524d\u7f00\uff0c\u8fd9\u4e2a\u8def\u7531\u524d\u7f00\u5c31\u662f\u63a5\u5165\u7f51\u5173\u914d\u7f6e\u7684 ",(0,o.kt)("inlineCode",{parentName:"p"},"contextPath"),"\u3002\u6bd4\u5982\uff1a ",(0,o.kt)("inlineCode",{parentName:"p"},"http://localhost:9195/motan/hello")," \u3002"))}s.isMDXComponent=!0}}]);