"use strict";(self.webpackChunkshenyu_website=self.webpackChunkshenyu_website||[]).push([[3613],{3905:function(e,n,t){t.d(n,{Zo:function(){return l},kt:function(){return m}});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var p=r.createContext({}),u=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},l=function(e){var n=u(e.components);return r.createElement(p.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},s=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),s=u(t),m=o,y=s["".concat(p,".").concat(m)]||s[m]||d[m]||a;return t?r.createElement(y,i(i({ref:n},l),{},{components:t})):r.createElement(y,i({ref:n},l))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=s;var c={};for(var p in n)hasOwnProperty.call(n,p)&&(c[p]=n[p]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var u=2;u<a;u++)i[u]=t[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}s.displayName="MDXCreateElement"},18866:function(e,n,t){t.r(n),t.d(n,{contentTitle:function(){return p},default:function(){return s},frontMatter:function(){return c},metadata:function(){return u},toc:function(){return l}});var r=t(87462),o=t(63366),a=(t(67294),t(3905)),i=["components"],c={sidebar_position:3,title:"Docker\u90e8\u7f72",keywords:["Docker","\u90e8\u7f72"],description:"docker\u90e8\u7f72"},p=void 0,u={unversionedId:"deployment/deployment-docker",id:"version-2.4.0/deployment/deployment-docker",isDocsHomePage:!1,title:"Docker\u90e8\u7f72",description:"docker\u90e8\u7f72",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-2.4.0/deployment/deployment-docker.md",sourceDirName:"deployment",slug:"/deployment/deployment-docker",permalink:"/zh/docs/2.4.0/deployment/deployment-docker",editUrl:"https://github.com/apache/incubator-shenyu-website/edit/main/i18n/zh/docusaurus-plugin-content-docs/version-2.4.0/deployment/deployment-docker.md",version:"2.4.0",sidebarPosition:3,frontMatter:{sidebar_position:3,title:"Docker\u90e8\u7f72",keywords:["Docker","\u90e8\u7f72"],description:"docker\u90e8\u7f72"},sidebar:"version-2.4.0/tutorialSidebar",previous:{title:"\u4e8c\u8fdb\u5236\u5305\u90e8\u7f72",permalink:"/zh/docs/2.4.0/deployment/deployment-package"},next:{title:"k8s\u90e8\u7f72",permalink:"/zh/docs/2.4.0/deployment/deployment-k8s"}},l=[{value:"\u542f\u52a8Apache ShenYu Admin",id:"\u542f\u52a8apache-shenyu-admin",children:[]},{value:"\u542f\u52a8Apache ShenYu Bootstrap",id:"\u542f\u52a8apache-shenyu-bootstrap",children:[]}],d={toc:l};function s(e){var n=e.components,t=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u672c\u6587\u4ecb\u7ecd\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"docker")," \u6765\u90e8\u7f72 ",(0,a.kt)("inlineCode",{parentName:"p"},"Apache ShenYu")," \u7f51\u5173\u3002"),(0,a.kt)("h3",{id:"\u542f\u52a8apache-shenyu-admin"},"\u542f\u52a8Apache ShenYu Admin"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"> docker pull apache/shenyu-admin:2.4.0\n> docker network create shenyu\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"li"},"h2")," \u6765\u5b58\u50a8\u540e\u53f0\u6570\u636e\uff1a")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"> docker run -d -p 9095:9095 --net shenyu apache/shenyu-admin:2.4.0\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"li"},"MySQL")," \u6765\u5b58\u50a8\u540e\u53f0\u6570\u636e,\u5c06 ",(0,a.kt)("a",{parentName:"li",href:"https://repo1.maven.org/maven2/mysql/mysql-connector-java/8.0.18/mysql-connector-java-8.0.18.jar"},"mysql-connector.jar")," \u62f7\u8d1d\u5230 ",(0,a.kt)("inlineCode",{parentName:"li"},"/${your_work_dir}/ext-lib"),"\uff1a")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'docker run -v /${your_work_dir}/ext-lib:/opt/shenyu-admin/ext-lib -e "SPRING_PROFILES_ACTIVE=mysql" -e "spring.datasource.url=jdbc:mysql://${your_ip_port}/shenyu?useUnicode=true&characterEncoding=utf-8&useSSL=false" -e "spring.datasource.username=${your_username}" -e "spring.datasource.password=${your_password}" -d -p 9095:9095 --net shenyu apache/shenyu-admin:2.4.0\n')),(0,a.kt)("p",null,"\u53e6\u5916\u4e00\u79cd\u65b9\u5f0f\u628a ",(0,a.kt)("inlineCode",{parentName:"p"},"application.yml")," \u914d\u7f6e\u653e\u5230",(0,a.kt)("inlineCode",{parentName:"p"},"${your_work_dir}/conf"),"\uff0c \u7136\u540e\u6267\u884c\u4ee5\u4e0b\u8bed\u53e5\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"docker run -v ${your_work_dir}/conf:/opt/shenyu-admin/conf/ -v /${your_work_dir}/ext-lib:/opt/shenyu-admin/ext-lib -d -p 9095:9095 --net shenyu apache/shenyu-admin:2.4.0\n")),(0,a.kt)("h3",{id:"\u542f\u52a8apache-shenyu-bootstrap"},"\u542f\u52a8Apache ShenYu Bootstrap"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"> docker network create shenyu\n> docker pull apache/shenyu-bootstrap:2.4.0\n> docker run -d -p 9195:9195 --net shenyu apache/shenyu-bootstrap:2.4.0\n")))}s.isMDXComponent=!0}}]);