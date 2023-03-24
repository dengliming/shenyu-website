"use strict";(self.webpackChunkshenyu_website=self.webpackChunkshenyu_website||[]).push([[70776],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>y});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=c(n),d=a,y=u["".concat(p,".").concat(d)]||u[d]||m[d]||o;return n?r.createElement(y,i(i({ref:t},s),{},{components:n})):r.createElement(y,i({ref:t},s))}));function y(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[u]="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},74610:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var r=n(87462),a=(n(67294),n(3905));const o={sidebar_position:1,title:"\u672c\u5730\u90e8\u7f72",keywords:["Deployment"],description:"\u672c\u5730\u90e8\u7f72"},i=void 0,l={unversionedId:"deployment/deployment-local",id:"version-2.4.0/deployment/deployment-local",isDocsHomePage:!1,title:"\u672c\u5730\u90e8\u7f72",description:"\u672c\u5730\u90e8\u7f72",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-2.4.0/deployment/deployment-local.md",sourceDirName:"deployment",slug:"/deployment/deployment-local",permalink:"/zh/docs/2.4.0/deployment/deployment-local",editUrl:"https://github.com/apache/shenyu-website/edit/main/i18n/zh/docusaurus-plugin-content-docs/version-2.4.0/deployment/deployment-local.md",version:"2.4.0",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"\u672c\u5730\u90e8\u7f72",keywords:["Deployment"],description:"\u672c\u5730\u90e8\u7f72"},sidebar:"version-2.4.0/tutorialSidebar",previous:{title:"SPI\u6269\u5c55",permalink:"/zh/docs/2.4.0/design/spi-design"},next:{title:"\u4e8c\u8fdb\u5236\u5305\u90e8\u7f72",permalink:"/zh/docs/2.4.0/deployment/deployment-package"}},p=[{value:"\u73af\u5883\u51c6\u5907",id:"\u73af\u5883\u51c6\u5907",children:[]},{value:"\u4e0b\u8f7d\u7f16\u8bd1\u4ee3\u7801",id:"\u4e0b\u8f7d\u7f16\u8bd1\u4ee3\u7801",children:[]}],c={toc:p},s="wrapper";function u(e){let{components:t,...n}=e;return(0,a.kt)(s,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u672c\u6587\u4ecb\u7ecd\u672c\u5730\u73af\u5883\u542f\u52a8 ",(0,a.kt)("inlineCode",{parentName:"p"},"Apache ShenYu")," \u7f51\u5173\u3002"),(0,a.kt)("h3",{id:"\u73af\u5883\u51c6\u5907"},"\u73af\u5883\u51c6\u5907"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u672c\u5730\u6b63\u786e\u5b89\u88c5JDK1.8+"),(0,a.kt)("li",{parentName:"ul"},"\u672c\u5730\u6b63\u786e\u5b89\u88c5Git"),(0,a.kt)("li",{parentName:"ul"},"\u672c\u5730\u6b63\u786e\u5b89\u88c5Maven"),(0,a.kt)("li",{parentName:"ul"},"\u9009\u62e9\u4e00\u6b3e\u5f00\u53d1\u5de5\u5177\uff0c\u6bd4\u5982IDEA")),(0,a.kt)("h3",{id:"\u4e0b\u8f7d\u7f16\u8bd1\u4ee3\u7801"},"\u4e0b\u8f7d\u7f16\u8bd1\u4ee3\u7801"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u4e0b\u8f7d\u4ee3\u7801")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"git clone https://github.com/apache/incubator-shenyu.git\ncd incubator-shenyu\nmvn clean install -Dmaven.javadoc.skip=true -B -Drat.skip=true -Djacoco.skip=true -DskipITs -DskipTests\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u4f7f\u7528\u5f00\u53d1\u5de5\u5177\u542f\u52a8 ",(0,a.kt)("inlineCode",{parentName:"p"},"org.apache.shenyu.admin.ShenyuAdminBootstrap"),"\uff0c\u8bbf\u95ee http://localhost:9095 \uff0c \u9ed8\u8ba4\u7528\u6237\u540d\u548c\u5bc6\u7801\u5206\u522b\u4e3a: ",(0,a.kt)("inlineCode",{parentName:"p"},"admin")," \u548c ",(0,a.kt)("inlineCode",{parentName:"p"},"123456"),"\u3002"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u5982\u679c\u4f7f\u7528",(0,a.kt)("inlineCode",{parentName:"p"},"h2"),"\u6765\u5b58\u50a8\uff0c\u8bbe\u7f6e\u53d8\u91cf ",(0,a.kt)("inlineCode",{parentName:"p"},"--spring.profiles.active = h2"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u5982\u679c\u4f7f\u7528",(0,a.kt)("inlineCode",{parentName:"p"},"MySQL"),"\u6765\u5b58\u50a8\uff0c\u4fee\u6539 ",(0,a.kt)("inlineCode",{parentName:"p"},"application.yaml")," \u4e2d\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"mysql")," \u914d\u7f6e\u3002")))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u4f7f\u7528\u5f00\u53d1\u5de5\u5177\u542f\u52a8 ",(0,a.kt)("inlineCode",{parentName:"p"},"org.apache.shenyu.bootstrap.ShenyuBootstrapApplication"),"\u3002")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u4f7f\u7528 Windows \u6765\u8fd0\u884c\u4ee3\u7801\u65f6\uff0c\u53ef\u80fd\u4f1a\u78b0\u5230 ",(0,a.kt)("inlineCode",{parentName:"p"},"filename too long")," \u7684 Git \u62a5\u9519\uff0c\u53ef\u4ee5\u901a\u8fc7\u4f7f\u7528\u7ba1\u7406\u5458\u6743\u9650\u8fd0\u884c ",(0,a.kt)("inlineCode",{parentName:"p"},"git config --system core.longpaths true")," \u547d\u4ee4\u6765\u89e3\u51b3"))))}u.isMDXComponent=!0}}]);