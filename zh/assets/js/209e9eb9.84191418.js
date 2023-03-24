"use strict";(self.webpackChunkshenyu_website=self.webpackChunkshenyu_website||[]).push([[16497],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>k});var r=n(67294);function p(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){p(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,p=function(e,t){if(null==e)return{};var n,r,p={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(p[n]=e[n]);return p}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(p[n]=e[n])}return p}var c=r.createContext({}),o=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=o(e.components);return r.createElement(c.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,p=e.mdxType,i=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=o(n),s=p,k=m["".concat(c,".").concat(s)]||m[s]||d[s]||i;return n?r.createElement(k,a(a({ref:t},u),{},{components:n})):r.createElement(k,a({ref:t},u))}));function k(e,t){var n=arguments,p=t&&t.mdxType;if("string"==typeof e||p){var i=n.length,a=new Array(i);a[0]=s;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[m]="string"==typeof e?e:p,a[1]=l;for(var o=2;o<i;o++)a[o]=n[o];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},10209:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>a,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var r=n(87462),p=(n(67294),n(3905));const i={title:"Brpc\u63d2\u4ef6",keywords:["Brpc"],description:"Brpc\u63d2\u4ef6"},a="1. \u6982\u8ff0",l={unversionedId:"plugin-center/proxy/brpc-plugin",id:"version-2.5.1/plugin-center/proxy/brpc-plugin",isDocsHomePage:!1,title:"Brpc\u63d2\u4ef6",description:"Brpc\u63d2\u4ef6",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-2.5.1/plugin-center/proxy/brpc-plugin.md",sourceDirName:"plugin-center/proxy",slug:"/plugin-center/proxy/brpc-plugin",permalink:"/zh/docs/plugin-center/proxy/brpc-plugin",editUrl:"https://github.com/apache/shenyu-website/edit/main/i18n/zh/docusaurus-plugin-content-docs/version-2.5.1/plugin-center/proxy/brpc-plugin.md",version:"2.5.1",frontMatter:{title:"Brpc\u63d2\u4ef6",keywords:["Brpc"],description:"Brpc\u63d2\u4ef6"},sidebar:"version-2.5.1/tutorialSidebar",previous:{title:"Rewrite\u63d2\u4ef6",permalink:"/zh/docs/plugin-center/http-process/rewrite-plugin"},next:{title:"Divide\u63d2\u4ef6",permalink:"/zh/docs/plugin-center/proxy/divide-plugin"}},c=[{value:"1.1 \u63d2\u4ef6\u540d\u79f0",id:"11-\u63d2\u4ef6\u540d\u79f0",children:[]},{value:"1.2 \u9002\u7528\u573a\u666f",id:"12-\u9002\u7528\u573a\u666f",children:[]},{value:"1.3 \u63d2\u4ef6\u4ee3\u7801",id:"13-\u63d2\u4ef6\u4ee3\u7801",children:[]},{value:"1.4 \u6dfb\u52a0\u81ea\u54ea\u4e2ashenyu\u7248\u672c",id:"14-\u6dfb\u52a0\u81ea\u54ea\u4e2ashenyu\u7248\u672c",children:[]},{value:"2.1 \u63d2\u4ef6\u8bbe\u7f6e",id:"21-\u63d2\u4ef6\u8bbe\u7f6e",children:[]},{value:"2.2 \u5143\u6570\u636e",id:"22-\u5143\u6570\u636e",children:[]}],o={toc:c},u="wrapper";function m(e){let{components:t,...n}=e;return(0,p.kt)(u,(0,r.Z)({},o,n,{components:t,mdxType:"MDXLayout"}),(0,p.kt)("h1",{id:"1-\u6982\u8ff0"},"1. \u6982\u8ff0"),(0,p.kt)("h2",{id:"11-\u63d2\u4ef6\u540d\u79f0"},"1.1 \u63d2\u4ef6\u540d\u79f0"),(0,p.kt)("ul",null,(0,p.kt)("li",{parentName:"ul"},"Brpc\u63d2\u4ef6")),(0,p.kt)("h2",{id:"12-\u9002\u7528\u573a\u666f"},"1.2 \u9002\u7528\u573a\u666f"),(0,p.kt)("ul",null,(0,p.kt)("li",{parentName:"ul"},"\u7528\u6765\u5c06",(0,p.kt)("inlineCode",{parentName:"li"},"http\u534f\u8bae")," \u8f6c\u6210 ",(0,p.kt)("inlineCode",{parentName:"li"},"Brpc\u534f\u8bae"),"\u3002")),(0,p.kt)("h2",{id:"13-\u63d2\u4ef6\u4ee3\u7801"},"1.3 \u63d2\u4ef6\u4ee3\u7801"),(0,p.kt)("ul",null,(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},"\u6838\u5fc3\u6a21\u5757 ",(0,p.kt)("inlineCode",{parentName:"p"},"shenyu-plugin-brpc"))),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},"\u6838\u5fc3\u7c7b ",(0,p.kt)("inlineCode",{parentName:"p"},"org.apache.shenyu.plugin.brpc.BrpcPlugin")))),(0,p.kt)("h2",{id:"14-\u6dfb\u52a0\u81ea\u54ea\u4e2ashenyu\u7248\u672c"},"1.4 \u6dfb\u52a0\u81ea\u54ea\u4e2ashenyu\u7248\u672c"),(0,p.kt)("ul",null,(0,p.kt)("li",{parentName:"ul"},"Since ShenYu 2.5.1")),(0,p.kt)("h1",{id:"2-brpc\u63d2\u4ef6"},"2. Brpc\u63d2\u4ef6"),(0,p.kt)("h2",{id:"21-\u63d2\u4ef6\u8bbe\u7f6e"},"2.1 \u63d2\u4ef6\u8bbe\u7f6e"),(0,p.kt)("ul",null,(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},"\u5f15\u5165\u76f8\u5173\u4f9d\u8d56\uff0c\u5f00\u542f\u63d2\u4ef6\uff0c\u8bf7\u53c2\u8003\uff1a",(0,p.kt)("a",{parentName:"p",href:"../../quick-start/quick-start-brpc"},"Brpc\u5feb\u901f\u5f00\u59cb")," \u3002")),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},(0,p.kt)("inlineCode",{parentName:"p"},"Brpc"),"\u5e94\u7528\u5ba2\u6237\u7aef\u63a5\u5165\uff0c\u8bf7\u53c2\u8003\uff1a",(0,p.kt)("a",{parentName:"p",href:"/zh/docs/user-guide/proxy/brpc-proxy"},"Brpc\u670d\u52a1\u63a5\u5165")," \u3002"))),(0,p.kt)("h2",{id:"22-\u5143\u6570\u636e"},"2.2 \u5143\u6570\u636e"),(0,p.kt)("p",null,"\u6bcf\u4e00\u4e2a",(0,p.kt)("inlineCode",{parentName:"p"},"Brpc"),"\u63a5\u53e3\u65b9\u6cd5\uff0c\u90fd\u4f1a\u5bf9\u5e94\u4e00\u6761\u5143\u6570\u636e\uff0c\u5f53",(0,p.kt)("inlineCode",{parentName:"p"},"Brpc"),"\u5e94\u7528\u5ba2\u6237\u7aef\u63a5\u5165\u5230",(0,p.kt)("inlineCode",{parentName:"p"},"Apache ShenYu"),"\u7f51\u5173\u65f6\uff0c\u4f1a\u81ea\u52a8\u6ce8\u518c\uff0c\u53ef\u4ee5\u5728 ",(0,p.kt)("inlineCode",{parentName:"p"},"shenyu-admin"),"\u540e\u53f0\u7ba1\u7406\u7cfb\u7edf\u7684\u57fa\u7840\u914d\u7f6e ",(0,p.kt)("inlineCode",{parentName:"p"},"--\x3e")," \u5143\u6570\u636e\u7ba1\u7406\u4e2d\u67e5\u770b\u3002"),(0,p.kt)("img",{src:"/img/shenyu/plugin/brpc/metadata.png",width:"100%",height:"100%"}),(0,p.kt)("ul",null,(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},"\u5e94\u7528\u540d\u79f0\uff1a\u8be5\u6761\u5143\u6570\u636e\u6240\u5c5e\u7684\u5e94\u7528\u540d\u79f0\u3002")),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},"\u65b9\u6cd5\u540d\u79f0\uff1a\u9700\u8981\u8c03\u7528\u7684\u65b9\u6cd5\u540d\u3002")),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},"\u8def\u5f84\uff1a",(0,p.kt)("inlineCode",{parentName:"p"},"Brpc"),"\u8bf7\u6c42\u8def\u5f84\u3002")),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},"\u8def\u5f84\u63cf\u8ff0\uff1a\u5bf9\u8be5\u8def\u5f84\u7684\u8bf4\u660e\uff0c\u65b9\u4fbf\u67e5\u770b\u3002")),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},"\u53c2\u6570\u7c7b\u578b\uff1a",(0,p.kt)("inlineCode",{parentName:"p"},"Brpc"),"\u63a5\u53e3\u7684\u53c2\u6570\u7c7b\u578b\u5217\u8868\uff0c\u6309\u7167\u63a5\u53e3\u7684\u53c2\u6570\u7c7b\u578b\u987a\u5e8f\uff0c\u901a\u8fc7\u534a\u89d2\u9017\u53f7\u5206\u9694\u3002")),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},"Rpc\u6269\u5c55\u53c2\u6570\uff1a\u63cf\u8ff0\u4e86\u4e00\u4e2a",(0,p.kt)("inlineCode",{parentName:"p"},"Brpc"),"\u670d\u52a1\u4e2d\u6bcf\u4e2a\u63a5\u53e3\u4fe1\u606f\u3002\u6bd4\u5982\uff0c\u4e0b\u9762\u662f",(0,p.kt)("inlineCode",{parentName:"p"},"Brpc"),"\u670d\u52a1\u7684\u63a5\u53e3\u4fe1\u606f\uff1a"))),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "methodInfo":[\n        {\n            "methodName":"getUser",\n            "paramTypes":[\n                {\n                    "left":"java.lang.Long",\n                    "right":"userId"\n                }\n            ]\n        }\n    ]\n}\n')),(0,p.kt)("ul",null,(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},"\u670d\u52a1\u63a5\u53e3\uff1a",(0,p.kt)("inlineCode",{parentName:"p"},"Brpc"),"\u670d\u52a1\u63a5\u53e3\u5168\u9650\u5b9a\u540d\u3002")),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},(0,p.kt)("inlineCode",{parentName:"p"},"Rpc"),"\u7c7b\u578b\uff1a\u4e0b\u62c9\u9009\u62e9 ",(0,p.kt)("inlineCode",{parentName:"p"},"Brpc"),"\u3002"))))}m.isMDXComponent=!0}}]);