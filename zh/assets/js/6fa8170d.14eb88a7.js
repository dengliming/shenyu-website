"use strict";(self.webpackChunkshenyu_website=self.webpackChunkshenyu_website||[]).push([[31701],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>s});var i=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},l=Object.keys(e);for(i=0;i<l.length;i++)n=l[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(i=0;i<l.length;i++)n=l[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var d=i.createContext({}),o=function(e){var t=i.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},m=function(e){var t=o(e.components);return i.createElement(d.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},k=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,d=e.parentName,m=p(e,["components","mdxType","originalType","parentName"]),k=o(n),s=a,c=k["".concat(d,".").concat(s)]||k[s]||u[s]||l;return n?i.createElement(c,r(r({ref:t},m),{},{components:n})):i.createElement(c,r({ref:t},m))}));function s(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,r=new Array(l);r[0]=k;var p={};for(var d in t)hasOwnProperty.call(t,d)&&(p[d]=t[d]);p.originalType=e,p.mdxType="string"==typeof e?e:a,r[1]=p;for(var o=2;o<l;o++)r[o]=n[o];return i.createElement.apply(null,r)}return i.createElement.apply(null,n)}k.displayName="MDXCreateElement"},99092:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>r,default:()=>m,frontMatter:()=>l,metadata:()=>p,toc:()=>d});var i=n(87462),a=(n(67294),n(3905));const l={sidebar_position:1,title:"\u7ba1\u7406\u540e\u53f0\u6570\u636e\u7ed3\u6784\u8bbe\u8ba1",keywords:["db"],description:"ShenYu Admin\u6570\u636e\u7ed3\u6784"},r=void 0,p={unversionedId:"design/database-design",id:"design/database-design",isDocsHomePage:!1,title:"\u7ba1\u7406\u540e\u53f0\u6570\u636e\u7ed3\u6784\u8bbe\u8ba1",description:"ShenYu Admin\u6570\u636e\u7ed3\u6784",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/design/database-design.md",sourceDirName:"design",slug:"/design/database-design",permalink:"/zh/docs/next/design/database-design",editUrl:"https://github.com/apache/shenyu-website/edit/main/i18n/zh/docusaurus-plugin-content-docs/current/design/database-design.md",version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"\u7ba1\u7406\u540e\u53f0\u6570\u636e\u7ed3\u6784\u8bbe\u8ba1",keywords:["db"],description:"ShenYu Admin\u6570\u636e\u7ed3\u6784"},sidebar:"tutorialSidebar",previous:{title:"Apache ShenYu \u4ecb\u7ecd",permalink:"/zh/docs/next/index"},next:{title:"\u6570\u636e\u540c\u6b65\u8bbe\u8ba1",permalink:"/zh/docs/next/design/data-sync"}},d=[{value:"\u63d2\u4ef6\u3001\u9009\u62e9\u5668\u548c\u89c4\u5219",id:"\u63d2\u4ef6\u9009\u62e9\u5668\u548c\u89c4\u5219",children:[]},{value:"\u8d44\u6e90\u6743\u9650",id:"\u8d44\u6e90\u6743\u9650",children:[]},{value:"\u6570\u636e\u6743\u9650",id:"\u6570\u636e\u6743\u9650",children:[]},{value:"\u5143\u6570\u636e",id:"\u5143\u6570\u636e",children:[]},{value:"\u5b57\u5178\u7ba1\u7406",id:"\u5b57\u5178\u7ba1\u7406",children:[]},{value:"API\u6587\u6863",id:"api\u6587\u6863",children:[]}],o={toc:d};function m(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,i.Z)({},o,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Apache ShenYu Admin")," \u662f\u7f51\u5173\u7684\u540e\u53f0\u7ba1\u7406\u7cfb\u7edf\uff0c\u80fd\u591f\u53ef\u89c6\u5316\u7ba1\u7406\u6240\u6709\u63d2\u4ef6\u3001\u9009\u62e9\u5668\u548c\u89c4\u5219\uff0c\u8bbe\u7f6e\u7528\u6237\u3001\u89d2\u8272\uff0c\u63a7\u5236\u8d44\u6e90\u3002"),(0,a.kt)("h2",{id:"\u63d2\u4ef6\u9009\u62e9\u5668\u548c\u89c4\u5219"},"\u63d2\u4ef6\u3001\u9009\u62e9\u5668\u548c\u89c4\u5219"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u63d2\u4ef6\uff1a",(0,a.kt)("inlineCode",{parentName:"li"},"Apache ShenYu")," \u4f7f\u7528\u63d2\u4ef6\u5316\u8bbe\u8ba1\u601d\u60f3\uff0c\u5b9e\u73b0\u63d2\u4ef6\u7684\u70ed\u63d2\u62d4\uff0c\u6781\u6613\u6269\u5c55\u3002\u5185\u7f6e\u4e30\u5bcc\u7684\u63d2\u4ef6\uff0c\u5305\u62ec ",(0,a.kt)("inlineCode",{parentName:"li"},"RPC")," \u4ee3\u7406\u3001\u7194\u65ad\u548c\u9650\u6d41\u3001\u6743\u9650\u8ba4\u8bc1\u3001\u76d1\u63a7\u7b49\u7b49\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u9009\u62e9\u5668\uff1a\u6bcf\u4e2a\u63d2\u4ef6\u53ef\u8bbe\u7f6e\u591a\u4e2a\u9009\u62e9\u5668\uff0c\u5bf9\u6d41\u91cf\u8fdb\u884c\u521d\u6b65\u7b5b\u9009\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u89c4\u5219\uff1a\u6bcf\u4e2a\u9009\u62e9\u5668\u53ef\u8bbe\u7f6e\u591a\u4e2a\u89c4\u5219\uff0c\u5bf9\u6d41\u91cf\u8fdb\u884c\u66f4\u7ec6\u7c92\u5ea6\u7684\u63a7\u5236\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u6570\u636e\u5e93 ",(0,a.kt)("inlineCode",{parentName:"li"},"UML")," \u7c7b\u56fe:")),(0,a.kt)("img",{src:"/img/shenyu/db/shenyu-plugin-table.png",width:"80%",height:"60%"}),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u8bbe\u8ba1\u8be6\u89e3:"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u4e00\u4e2a\u63d2\u4ef6\u5bf9\u5e94\u591a\u4e2a\u9009\u62e9\u5668\uff0c\u4e00\u4e2a\u9009\u62e9\u5668\u5bf9\u5e94\u591a\u4e2a\u89c4\u5219\u3002")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u4e00\u4e2a\u9009\u62e9\u5668\u5bf9\u5e94\u591a\u4e2a\u5339\u914d\u6761\u4ef6\uff0c\u4e00\u4e2a\u89c4\u5219\u5bf9\u5e94\u591a\u4e2a\u5339\u914d\u6761\u4ef6\u3002")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u6bcf\u4e2a\u89c4\u5219\u5728\u5bf9\u5e94\u63d2\u4ef6\u4e0b\uff0c\u6709\u4e0d\u540c\u7684\u5904\u7406\u80fd\u529b\u3002"))))),(0,a.kt)("h2",{id:"\u8d44\u6e90\u6743\u9650"},"\u8d44\u6e90\u6743\u9650"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u8d44\u6e90\u4ee3\u8868\u7684\u662f ",(0,a.kt)("inlineCode",{parentName:"p"},"shenyu-admin")," \u7528\u6237\u540e\u53f0\u4e2d\u7684\u83dc\u5355\u6216\u8005\u6309\u94ae\u3002")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u8d44\u6e90\u6743\u9650\u6570\u636e\u8868\u7528\u6765\u5b58\u50a8\u7528\u6237\u540d\u79f0\u3001\u89d2\u8272\u3001\u8d44\u6e90\u6570\u636e\u4ee5\u53ca\u5bf9\u5e94\u5173\u7cfb\u3002\n")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u6570\u636e\u5e93 ",(0,a.kt)("inlineCode",{parentName:"p"},"UML")," \u7c7b\u56fe\uff1a"))),(0,a.kt)("img",{src:"/img/shenyu/db/shenyu-permission-table.png",width:"80%",height:"60%"}),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u8bbe\u8ba1\u8be6\u89e3:",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u4e00\u4e2a\u7528\u6237\u5bf9\u5e94\u591a\u4e2a\u89d2\u8272\uff0c\u4e00\u4e2a\u89d2\u8272\u5bf9\u5e94\u591a\u4e2a\u8d44\u6e90\u3002")))),(0,a.kt)("h2",{id:"\u6570\u636e\u6743\u9650"},"\u6570\u636e\u6743\u9650"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u6570\u636e\u6743\u9650\u8868\u7528\u6765\u5b58\u50a8\u7528\u6237\uff0c\u9009\u62e9\u5668\u3001\u89c4\u5219\u5bf9\u5e94\u5173\u7cfb\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u6570\u636e\u5e93 ",(0,a.kt)("inlineCode",{parentName:"li"},"UML")," \u7c7b\u56fe\uff1a")),(0,a.kt)("img",{src:"/img/shenyu/db/shenyu-data_permission-table.png",width:"80%",height:"60%"}),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u8bbe\u8ba1\u8be6\u89e3\uff1a",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u6570\u636e\u6743\u9650\u7684\u8868\u4e3a\uff1a ",(0,a.kt)("inlineCode",{parentName:"li"},"data_permission"),"\uff0c\u4e00\u4e2a\u7528\u6237\u5bf9\u5e94\u591a\u6761\u6570\u636e\u6743\u9650\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u6570\u636e\u6743\u9650\u8868\u4e2d\u5b57\u6bb5 ",(0,a.kt)("inlineCode",{parentName:"li"},"data_type")," \u533a\u5206\u4e0d\u540c\u7684\u7c7b\u578b\u6570\u636e\uff0c \u5177\u4f53\u5bf9\u5e94\u5173\u7cfb\u5982\u4e0b\uff1a",(0,a.kt)("inlineCode",{parentName:"li"},"0 -> \u9009\u62e9\u5668, 1 -> \u89c4\u5219"),"\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u6570\u636e\u6743\u9650\u8868\u4e2d\u5b57\u6bb5 ",(0,a.kt)("inlineCode",{parentName:"li"},"data_id")," \u5b58\u653e\u76f8\u5e94\u7c7b\u578b\u7684\u4e3b\u952e",(0,a.kt)("inlineCode",{parentName:"li"},"id"),"\u3002")))),(0,a.kt)("h2",{id:"\u5143\u6570\u636e"},"\u5143\u6570\u636e"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u5143\u6570\u636e\u4e3b\u8981\u662f\u7528\u4e8e\u7f51\u5173\u7684\u6cdb\u5316\u8c03\u7528\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u6bcf\u4e2a\u63a5\u53e3\u65b9\u6cd5\uff0c\u5bf9\u5e94\u4e00\u6761\u5143\u6570\u636e\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u6570\u636e\u5e93 ",(0,a.kt)("inlineCode",{parentName:"li"},"UML")," \u7c7b\u56fe\uff1a")),(0,a.kt)("img",{src:"/img/shenyu/db/mata_data_table.png",width:"30%",height:"30%"}),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u8bbe\u8ba1\u8be6\u89e3\uff1a"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"path"),"\uff1a\u5728\u8bf7\u6c42\u7f51\u5173\u7684\u65f6\u5019\uff0c\u4f1a\u6839\u636e ",(0,a.kt)("inlineCode",{parentName:"p"},"path")," \u6765\u5339\u914d\u5230\u4e00\u6761\u6570\u636e\uff0c\u7136\u540e\u8fdb\u884c\u540e\u7eed\u7684\u6d41\u7a0b\u3002")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"rpc_ext"),"\uff1a\u7528\u4e8e\u4fdd\u5b58",(0,a.kt)("inlineCode",{parentName:"p"},"RPC"),"\u4ee3\u7406\u4e2d\u7684\u6269\u5c55\u4fe1\u606f\u3002"))))),(0,a.kt)("h2",{id:"\u5b57\u5178\u7ba1\u7406"},"\u5b57\u5178\u7ba1\u7406"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u5b57\u5178\u7ba1\u7406\u4e3b\u8981\u7528\u6765\u7ef4\u62a4\u548c\u7ba1\u7406\u516c\u7528\u6570\u636e\u5b57\u5178\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u6570\u636e\u5e93 ",(0,a.kt)("inlineCode",{parentName:"li"},"UML")," \u7c7b\u56fe\uff1a")),(0,a.kt)("img",{src:"/img/shenyu/db/shenyu_dict.png",width:"30%",height:"30%"}),(0,a.kt)("h2",{id:"api\u6587\u6863"},"API\u6587\u6863"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"API\u6587\u6863\u8868\u7528\u6765\u7ef4\u62a4\u548c\u7ba1\u7406API\u6587\u6863\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u5e38\u89c1\u89c4\u8303(\u5982OpenApi3.0\u89c4\u8303\u3001yapi\u89c4\u8303)\u7684api doc(\u5982json\u3001md\u3001html\u7b49)\u53ef\u4ee5\u5bfc\u5165",(0,a.kt)("inlineCode",{parentName:"li"},"shenyu-admin"),"\uff0c\u5e76\u6700\u7ec8\u5b58\u50a8\u5230API\u6587\u6863\u8868\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u901a\u8fc7API\u6587\u6863\u8868\u53ef\u4ee5\u751f\u6210\u5176\u4ed6\u5e38\u89c1\u89c4\u8303\u7684api doc\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u6570\u636e\u5e93 ",(0,a.kt)("inlineCode",{parentName:"li"},"UML")," \u7c7b\u56fe\uff1a")),(0,a.kt)("img",{src:"/img/shenyu/db/shenyu-api-doc-table.png",width:"105%",height:"105%"}),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u8bbe\u8ba1\u8be6\u89e3\uff1a",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u4e00\u4e2atag\u53ef\u4ee5\u6709\u591a\u4e2a\u5b50tag\uff0ctag\u7684\u5c42\u7ea7\u65e0\u9650\uff0c\u6700\u4e0b\u9762\u7684\u53f6\u5b50\u8282\u70b9\u662fAPI\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u76f8\u540cpath\u3001\u652f\u6301\u591a\u79cdhttp_method\u7684\u63a5\u53e3\uff0c\u7b97\u591a\u4e2aAPI\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u4e00\u4e2aAPI\u6709\u591a\u4e2a\u8bf7\u6c42\u53c2\u6570\u3001\u591a\u4e2a\u54cd\u5e94\u5b57\u6bb5\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u4e00\u4e2a\u53c2\u6570/\u5b57\u6bb5\u6709\u5b83\u81ea\u5df1\u7684\u7c7b\u578b(\u4e5f\u5c31\u662fmodel)\uff0c\u6bcf\u4e2a\u7c7b\u578b\u7531\u591a\u4e2a\u5b57\u6bb5\u6784\u6210\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u4e00\u4e2a\u5b57\u6bb5\u6709\u5b83\u81ea\u5df1\u7684\u7c7b\u578b\uff0c\u5bf9\u5e94\u591a\u4e2a\u503c\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u4e00\u4e2a\u503c\u65e2\u53ef\u4ee5\u4f5c\u4e3a\u8bf7\u6c42\u793a\u4f8b\u503c\uff0c\u4e5f\u53ef\u4ee5\u63cf\u8ff0\u54cd\u5e94\u793a\u4f8b\u503c(\u6bd4\u5982200\u8868\u793aOK\u3001400\u8868\u793a\u975e\u6cd5\u53c2\u6570)\u3002"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"mock_request_record"),"\u8868\u7684",(0,a.kt)("inlineCode",{parentName:"li"},"query"),"\u3001",(0,a.kt)("inlineCode",{parentName:"li"},"header"),"\u3001",(0,a.kt)("inlineCode",{parentName:"li"},"body"),"\u90fd\u5b58\u50a8json\uff0c\u4f46\u662f",(0,a.kt)("inlineCode",{parentName:"li"},"body"),"\u4e0d\u652f\u6301\u5b58\u50a8\u7279\u6b8a\u7c7b\u578b(\u6bd4\u5982\u6587\u4ef6)\u3002"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"tag"),"\u8868\u7684",(0,a.kt)("inlineCode",{parentName:"li"},"ext"),"\u5b58\u50a8\u5b83\u7236tag(\u5305\u62ec\u7236tag\u7684\u7236tag\uff0c\u4ee5\u6b64\u7c7b\u63a8)\u7684\u5168\u91cfjson\u6570\u636e\u3002"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"api"),"\u8868\u7684",(0,a.kt)("inlineCode",{parentName:"li"},"ext"),"\u53ef\u80fd\u5b58\u50a8ip\u5217\u8868\u3001SpringCloud\u7684service name\u3002"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"parameter"),"\u8868\u7684",(0,a.kt)("inlineCode",{parentName:"li"},"type"),"\u4e3b\u8981\u5305\u62ec",(0,a.kt)("inlineCode",{parentName:"li"},"requestUrlParam"),"\u3001",(0,a.kt)("inlineCode",{parentName:"li"},"requestHeader"),"\u3001",(0,a.kt)("inlineCode",{parentName:"li"},"requestBody"),"\u3001",(0,a.kt)("inlineCode",{parentName:"li"},"requestPathVariable"),"\u3001",(0,a.kt)("inlineCode",{parentName:"li"},"responseHeader"),"\u548c",(0,a.kt)("inlineCode",{parentName:"li"},"responseBody"),"\uff1b\u5982\u679c\u8fd4\u56de\u7684\u7c7b\u578b\u662f\u7279\u6b8a\u7c7b\u578b(\u5982\u6587\u4ef6)\uff0c\u5219\u4e0d\u7528\u5173\u8054",(0,a.kt)("inlineCode",{parentName:"li"},"model_id"),"\u3002"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"field"),"\u8868\u7684",(0,a.kt)("inlineCode",{parentName:"li"},"ext"),"\u4ee5json\u683c\u5f0f(\u65b9\u4fbf\u540e\u7eed\u6269\u5c55)\u5b58\u50a8\u6cdb\u578b\uff0c\u5982",(0,a.kt)("inlineCode",{parentName:"li"},'{"genericTypes":[model_id1,model_id2]}'),"\uff1b",(0,a.kt)("inlineCode",{parentName:"li"},"model_id"),"\u8868\u793a\u8be5\u5b57\u6bb5\u5c5e\u4e8e\u54ea\u4e2a\u7c7b\u578b\uff0c",(0,a.kt)("inlineCode",{parentName:"li"},"self_model_id"),"\u8868\u793a\u8be5\u5b57\u6bb5\u81ea\u8eab\u662f\u4ec0\u4e48\u7c7b\u578b\u3002"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"detail"),"\u8868\u7684",(0,a.kt)("inlineCode",{parentName:"li"},"is_example"),"\u8868\u793a\u4e00\u4e2a\u503c\u662f\u5426\u662f\u8bf7\u6c42\u793a\u4f8b\u503c\uff0ctrue\u662f\u8bf7\u6c42\u793a\u4f8b\u503c\uff0cfalse\u662f\u54cd\u5e94\u503c\u3002")))))}m.isMDXComponent=!0}}]);