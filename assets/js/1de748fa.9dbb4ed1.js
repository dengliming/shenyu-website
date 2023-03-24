"use strict";(self.webpackChunkshenyu_website=self.webpackChunkshenyu_website||[]).push([[57949],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>f});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),s=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=s(a),d=r,f=u["".concat(p,".").concat(d)]||u[d]||m[d]||i;return a?n.createElement(f,o(o({ref:t},c),{},{components:a})):n.createElement(f,o({ref:t},c))}));function f(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[u]="string"==typeof e?e:r,o[1]=l;for(var s=2;s<i;s++)o[s]=a[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},7667:(e,t,a)=>{a.r(t),a.d(t,{contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var n=a(87462),r=(a(67294),a(3905));const i={title:"Sofa Plugin",keywords:["sofa"],description:"sofa access shenyu gateway"},o=void 0,l={unversionedId:"plugin-center/proxy/sofa-plugin",id:"version-2.4.1/plugin-center/proxy/sofa-plugin",isDocsHomePage:!1,title:"Sofa Plugin",description:"sofa access shenyu gateway",source:"@site/versioned_docs/version-2.4.1/plugin-center/proxy/sofa-plugin.md",sourceDirName:"plugin-center/proxy",slug:"/plugin-center/proxy/sofa-plugin",permalink:"/docs/2.4.1/plugin-center/proxy/sofa-plugin",editUrl:"https://github.com/apache/shenyu-website/edit/main/versioned_docs/version-2.4.1/plugin-center/proxy/sofa-plugin.md",version:"2.4.1",frontMatter:{title:"Sofa Plugin",keywords:["sofa"],description:"sofa access shenyu gateway"},sidebar:"version-2.4.1/tutorialSidebar",previous:{title:"Motan Plugin",permalink:"/docs/2.4.1/plugin-center/proxy/motan-plugin"},next:{title:"Spring Cloud Plugin",permalink:"/docs/2.4.1/plugin-center/proxy/spring-cloud-plugin"}},p=[{value:"Description",id:"description",children:[]},{value:"Plugin Setting",id:"plugin-setting",children:[]},{value:"Metadata",id:"metadata",children:[]}],s={toc:p},c="wrapper";function u(e){let{components:t,...a}=e;return(0,r.kt)(c,(0,n.Z)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"description"},"Description"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The sofa plugin is a plugin that converts the Http protocol into the sofa protocol, and it is also the key to the gateway to realize the sofa generalization call."),(0,r.kt)("li",{parentName:"ul"},"The sofa plugin needs to cooperate with metadata to realize the call of Sofa.")),(0,r.kt)("h2",{id:"plugin-setting"},"Plugin Setting"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Add related dependencies and enable plugin, please refer to: ",(0,r.kt)("a",{parentName:"p",href:"../../quick-start/quick-start-sofa"},"Quick start with Sofa")," .")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"Sofa")," client access, please refer to: ",(0,r.kt)("a",{parentName:"p",href:"../../user-guide/sofa-proxy"},"Sofa Proxy")," .")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Set selector and rule, please refer to: ",(0,r.kt)("a",{parentName:"p",href:"../../user-guide/admin-usage/selector-and-rule"},"Selector And Rule Config")," ."))),(0,r.kt)("h2",{id:"metadata"},"Metadata"),(0,r.kt)("p",null,"Each ",(0,r.kt)("inlineCode",{parentName:"p"},"sofa")," interface method, will correspond to a metadata, when the ",(0,r.kt)("inlineCode",{parentName:"p"},"sofa")," application client access to the ",(0,r.kt)("inlineCode",{parentName:"p"},"ShenYu")," gateway, will be automatically registered, can be viewed in the ",(0,r.kt)("inlineCode",{parentName:"p"},"shenyu-admin")," background management system of the BasicConfig --\x3e Metadata management."),(0,r.kt)("img",{src:"/img/shenyu/plugin/sofa/metadata_en.png",width:"80%"}),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"AppName: specifies the name of the application to which the metadata belongs.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"MethodName: the name of the method to call.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Path: http request path.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"PathDescribe: the description of the path is easy to view.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"ParamsType: the parameters are separated by commas (,) in the order of interface parameter types.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"RpcExpand: other configurations of the ",(0,r.kt)("inlineCode",{parentName:"p"},"sofa")," interface, which support the ",(0,r.kt)("inlineCode",{parentName:"p"},"JSON")," format, are as follows:"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'{"loadbalance":"hash","retries":3,"timeout":-1}\n')),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Interface: The fully qualified class name of the ",(0,r.kt)("inlineCode",{parentName:"p"},"sofa")," interface.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"RpcType\uff1achoose ",(0,r.kt)("inlineCode",{parentName:"p"},"sofa"),"."))))}u.isMDXComponent=!0}}]);