"use strict";(self.webpackChunkshenyu_website=self.webpackChunkshenyu_website||[]).push([[99282],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>u});var o=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=o.createContext({}),d=function(e){var t=o.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=d(e.components);return o.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=d(n),u=a,y=m["".concat(p,".").concat(u)]||m[u]||s[u]||r;return n?o.createElement(y,l(l({ref:t},c),{},{components:n})):o.createElement(y,l({ref:t},c))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,l=new Array(r);l[0]=m;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var d=2;d<r;d++)l[d]=n[d];return o.createElement.apply(null,l)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},3850:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>l,default:()=>c,frontMatter:()=>r,metadata:()=>i,toc:()=>p});var o=n(87462),a=(n(67294),n(3905));const r={sidebar_position:1,title:"Local Deployment",keywords:["Deployment"],description:"Local Deployment"},l=void 0,i={unversionedId:"deployment/deployment-local",id:"version-2.4.3/deployment/deployment-local",isDocsHomePage:!1,title:"Local Deployment",description:"Local Deployment",source:"@site/versioned_docs/version-2.4.3/deployment/deployment-local.md",sourceDirName:"deployment",slug:"/deployment/deployment-local",permalink:"/docs/2.4.3/deployment/deployment-local",editUrl:"https://github.com/apache/shenyu-website/edit/main/versioned_docs/version-2.4.3/deployment/deployment-local.md",version:"2.4.3",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"Local Deployment",keywords:["Deployment"],description:"Local Deployment"},sidebar:"version-2.4.3/tutorialSidebar",previous:{title:"Deployment Prerequisites",permalink:"/docs/2.4.3/deployment/deployment-before"},next:{title:"Local Quick Deployment",permalink:"/docs/2.4.3/deployment/deployment-quick"}},p=[{value:"Environmental preparation",id:"environmental-preparation",children:[]},{value:"Download the compiled code",id:"download-the-compiled-code",children:[]}],d={toc:p};function c(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,o.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"This article introduces how to start the ",(0,a.kt)("inlineCode",{parentName:"p"},"Apache ShenYu")," gateway in the local environment."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Before you read this document, you need to complete some preparations before deploying Shenyu according to the ",(0,a.kt)("a",{parentName:"p",href:"/docs/2.4.3/deployment/deployment-before"},"Deployment Prerequisites document"),".")),(0,a.kt)("h3",{id:"environmental-preparation"},"Environmental preparation"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Install JDK1.8+ locally"),(0,a.kt)("li",{parentName:"ul"},"Install Git locally"),(0,a.kt)("li",{parentName:"ul"},"Install Maven locally"),(0,a.kt)("li",{parentName:"ul"},"Choose a development tool, such as IDEA")),(0,a.kt)("h3",{id:"download-the-compiled-code"},"Download the compiled code"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Download")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"> git clone https://github.com/apache/incubator-shenyu.git\n> cd shenyu\n> mvn clean install -Dmaven.javadoc.skip=true -B -Drat.skip=true -Djacoco.skip=true -DskipITs -DskipTests\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"use the development tool to start ",(0,a.kt)("inlineCode",{parentName:"p"},"org.apache.shenyu.admin.ShenyuAdminBootstrap"),"\uff0cVisit http://localhost:9095, the default username and password are: ",(0,a.kt)("inlineCode",{parentName:"p"},"admin")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"123456")," respectively."),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"If you use ",(0,a.kt)("inlineCode",{parentName:"p"},"h2")," for storage, set the variable ",(0,a.kt)("inlineCode",{parentName:"p"},"--spring.profiles.active = h2")," and start the server.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"If you use ",(0,a.kt)("inlineCode",{parentName:"p"},"MySQL")," for storage, need to follow the ",(0,a.kt)("a",{parentName:"p",href:"/docs/2.4.3/deployment/deployment-before#mysql"},"guide document")," to initialize the database and modify the ",(0,a.kt)("inlineCode",{parentName:"p"},"JDBC")," configuration in ",(0,a.kt)("inlineCode",{parentName:"p"},"application-mysql.yml"),", set the variable ",(0,a.kt)("inlineCode",{parentName:"p"},"--spring.profiles.active = mysql")," and start the server.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"If you use ",(0,a.kt)("inlineCode",{parentName:"p"},"PostgreSql")," for storage, need to follow the ",(0,a.kt)("a",{parentName:"p",href:"/docs/2.4.3/deployment/deployment-before#postgresql"},"guide document")," to initialize the database and modify the ",(0,a.kt)("inlineCode",{parentName:"p"},"JDBC")," configuration in ",(0,a.kt)("inlineCode",{parentName:"p"},"application-pg.yml"),", set the variable ",(0,a.kt)("inlineCode",{parentName:"p"},"--spring.profiles.active = pg")," and start the server.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"If you use ",(0,a.kt)("inlineCode",{parentName:"p"},"Oracle")," for storage, need to follow the ",(0,a.kt)("a",{parentName:"p",href:"/docs/2.4.3/deployment/deployment-before#oracle"},"guide document")," to initialize the database and modify the ",(0,a.kt)("inlineCode",{parentName:"p"},"JDBC")," configuration in ",(0,a.kt)("inlineCode",{parentName:"p"},"application-oracle.yml"),", set the variable ",(0,a.kt)("inlineCode",{parentName:"p"},"--spring.profiles.active = oracle")," and start the server.")))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"use the development tool to start ",(0,a.kt)("inlineCode",{parentName:"p"},"org.apache.shenyu.bootstrap.ShenyuBootstrapApplication"),"."))))}c.isMDXComponent=!0}}]);