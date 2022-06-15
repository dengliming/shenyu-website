"use strict";(self.webpackChunkshenyu_website=self.webpackChunkshenyu_website||[]).push([[32205],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function u(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?u(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):u(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},u=Object.keys(e);for(r=0;r<u.length;r++)n=u[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(e);for(r=0;r<u.length;r++)n=u[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var o=r.createContext({}),p=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(o.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,u=e.originalType,o=e.parentName,c=a(e,["components","mdxType","originalType","parentName"]),d=p(n),m=i,f=d["".concat(o,".").concat(m)]||d[m]||s[m]||u;return n?r.createElement(f,l(l({ref:t},c),{},{components:n})):r.createElement(f,l({ref:t},c))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var u=n.length,l=new Array(u);l[0]=d;var a={};for(var o in t)hasOwnProperty.call(t,o)&&(a[o]=t[o]);a.originalType=e,a.mdxType="string"==typeof e?e:i,l[1]=a;for(var p=2;p<u;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},30664:function(e,t,n){n.r(t),n.d(t,{contentTitle:function(){return o},default:function(){return d},frontMatter:function(){return a},metadata:function(){return p},toc:function(){return c}});var r=n(87462),i=n(63366),u=(n(67294),n(3905)),l=["components"],a={title:"Request\u63d2\u4ef6",keywords:["RequestPlugin"],description:"RequestPlugin"},o=void 0,p={unversionedId:"plugin-center/http-process/request-plugin",id:"plugin-center/http-process/request-plugin",isDocsHomePage:!1,title:"Request\u63d2\u4ef6",description:"RequestPlugin",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/plugin-center/http-process/request-plugin.md",sourceDirName:"plugin-center/http-process",slug:"/plugin-center/http-process/request-plugin",permalink:"/zh/docs/next/plugin-center/http-process/request-plugin",editUrl:"https://github.com/apache/incubator-shenyu-website/edit/main/i18n/zh/docusaurus-plugin-content-docs/current/plugin-center/http-process/request-plugin.md",version:"current",frontMatter:{title:"Request\u63d2\u4ef6",keywords:["RequestPlugin"],description:"RequestPlugin"},sidebar:"tutorialSidebar",previous:{title:"Redirect\u63d2\u4ef6",permalink:"/zh/docs/next/plugin-center/http-process/redirect-plugin"},next:{title:"Rewrite\u63d2\u4ef6",permalink:"/zh/docs/next/plugin-center/http-process/rewrite-plugin"}},c=[{value:"\u8bf4\u660e",id:"\u8bf4\u660e",children:[]},{value:"\u63d2\u4ef6\u8bbe\u7f6e",id:"\u63d2\u4ef6\u8bbe\u7f6e",children:[]},{value:"\u573a\u666f",id:"\u573a\u666f",children:[]}],s={toc:c};function d(e){var t=e.components,n=(0,i.Z)(e,l);return(0,u.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,u.kt)("h2",{id:"\u8bf4\u660e"},"\u8bf4\u660e"),(0,u.kt)("ul",null,(0,u.kt)("li",{parentName:"ul"},(0,u.kt)("inlineCode",{parentName:"li"},"Apache ShenYu")," \u7f51\u5173\u5728\u5bf9\u76ee\u6807\u670d\u52a1\u8fdb\u884c\u4ee3\u7406\u8c03\u7528\u7684\u65f6\u5019\uff0c\u5141\u8bb8\u7528\u6237\u4f7f\u7528 ",(0,u.kt)("inlineCode",{parentName:"li"},"request")," \u63d2\u4ef6\u5bf9\u8bf7\u6c42\u53c2\u6570\u3001\u8bf7\u6c42\u5934\u4ee5\u53ca ",(0,u.kt)("inlineCode",{parentName:"li"},"Cookie")," \u6765\u6dfb\u52a0\u3001\u4fee\u6539\u3001\u79fb\u9664\u8bf7\u6c42\u5934\u3002")),(0,u.kt)("h2",{id:"\u63d2\u4ef6\u8bbe\u7f6e"},"\u63d2\u4ef6\u8bbe\u7f6e"),(0,u.kt)("ul",null,(0,u.kt)("li",{parentName:"ul"},"\u5728 ",(0,u.kt)("inlineCode",{parentName:"li"},"shenyu-admin")," --\x3e \u57fa\u7840\u914d\u7f6e --\x3e \u63d2\u4ef6\u7ba1\u7406 --\x3e ",(0,u.kt)("inlineCode",{parentName:"li"},"request"),"\uff0c\u8bbe\u7f6e\u4e3a\u5f00\u542f\u3002")),(0,u.kt)("ul",null,(0,u.kt)("li",{parentName:"ul"},(0,u.kt)("p",{parentName:"li"},"\u5728\u7f51\u5173\u7684 ",(0,u.kt)("inlineCode",{parentName:"p"},"pom.xml")," \u6587\u4ef6\u4e2d\u6dfb\u52a0 ",(0,u.kt)("inlineCode",{parentName:"p"},"request")," \u7684\u652f\u6301\u3002")),(0,u.kt)("li",{parentName:"ul"},(0,u.kt)("p",{parentName:"li"},"\u5982\u679c\u7528\u6237\u4e0d\u9700\u8981\uff0c\u53ef\u4ee5\u628a\u63d2\u4ef6\u7981\u7528\u3002"))),(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-xml"},"  \x3c!-- apache shenyu request plugin start--\x3e\n<dependency>\n    <groupId>org.apache.shenyu</groupId>\n    <artifactId>shenyu-spring-boot-starter-plugin-request</artifactId>\n    <version>${project.version}</version>\n</dependency>\n        \x3c!-- apache shenyu request plugin end--\x3e\n")),(0,u.kt)("ul",null,(0,u.kt)("li",{parentName:"ul"},(0,u.kt)("p",{parentName:"li"},"\u9009\u62e9\u5668\u548c\u89c4\u5219\u8bbe\u7f6e\uff0c\u8bf7\u53c2\u8003\uff1a",(0,u.kt)("a",{parentName:"p",href:"../../user-guide/admin-usage/selector-and-rule"},"\u9009\u62e9\u5668\u548c\u89c4\u5219\u7ba1\u7406"),"\u3002")),(0,u.kt)("li",{parentName:"ul"},(0,u.kt)("p",{parentName:"li"},"\u53ea\u6709\u5339\u914d\u7684\u8bf7\u6c42\uff0c\u624d\u4f1a\u8fdb\u884c\u81ea\u5b9a\u4e49\u8bf7\u6c42\u53c2\u6570\u4fee\u6539\u529f\u80fd\u3002"))),(0,u.kt)("h2",{id:"\u573a\u666f"},"\u573a\u666f"),(0,u.kt)("ul",null,(0,u.kt)("li",{parentName:"ul"},"\u987e\u540d\u601d\u4e49\uff0c\u8bf7\u6c42\u63d2\u4ef6\u5c31\u662f\u5bf9 ",(0,u.kt)("inlineCode",{parentName:"li"},"uri")," \u8bf7\u6c42\u53c2\u6570\u8fdb\u884c\u81ea\u5b9a\u4e49\u4fee\u6539\u3002"),(0,u.kt)("li",{parentName:"ul"},"\u5f53\u5339\u914d\u5230\u8bf7\u6c42\u540e\uff0c\u8bbe\u7f6e\u81ea\u5b9a\u4e49\u4fee\u6539\u89c4\u5219\uff0c\u5c31\u4f1a\u6539\u53d8\u4e0b\u6e38\u670d\u52a1\u63a5\u53d7\u5230\u7684\u53c2\u6570\u3002")))}d.isMDXComponent=!0}}]);