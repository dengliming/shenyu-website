"use strict";(self.webpackChunkshenyu_website=self.webpackChunkshenyu_website||[]).push([[17160],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),p=c(n),f=o,h=p["".concat(s,".").concat(f)]||p[f]||d[f]||i;return n?r.createElement(h,l(l({ref:t},u),{},{components:n})):r.createElement(h,l({ref:t},u))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,l=new Array(i);l[0]=p;var a={};for(var s in t)hasOwnProperty.call(t,s)&&(a[s]=t[s]);a.originalType=e,a.mdxType="string"==typeof e?e:o,l[1]=a;for(var c=2;c<i;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},67612:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>a,toc:()=>s});var r=n(87462),o=(n(67294),n(3905));const i={title:"Flow Control",keywords:["flow-control"],description:"flow-control"},l=void 0,a={unversionedId:"design/flow-control",id:"version-2.4.1/design/flow-control",isDocsHomePage:!1,title:"Flow Control",description:"flow-control",source:"@site/versioned_docs/version-2.4.1/design/flow-control.md",sourceDirName:"design",slug:"/design/flow-control",permalink:"/docs/2.4.1/design/flow-control",editUrl:"https://github.com/apache/shenyu-website/edit/main/versioned_docs/version-2.4.1/design/flow-control.md",version:"2.4.1",frontMatter:{title:"Flow Control",keywords:["flow-control"],description:"flow-control"},sidebar:"version-2.4.1/tutorialSidebar",previous:{title:"Data Synchronization Design",permalink:"/docs/2.4.1/design/data-sync"},next:{title:"Application Client Access",permalink:"/docs/2.4.1/design/register-center-design"}},s=[{value:"Plugin",id:"plugin",children:[]},{value:"Selector And Rule",id:"selector-and-rule",children:[]},{value:"Traffic filtering",id:"traffic-filtering",children:[]}],c={toc:s};function u(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"ShenYu gateway realizes flow control through plugins, selectors and rules. For related data structure, please refer to the previous ",(0,o.kt)("a",{parentName:"p",href:"./database-design"},"Apache ShenYu Admin Database Design")," ."),(0,o.kt)("h3",{id:"plugin"},"Plugin"),(0,o.kt)("p",null,"In Apache ShenYu Admin System, each plugin uses Handle (JSON format) fields to represent different processing, and the plugin processing is used to manage and edit the custom processing fields in the JSON."),(0,o.kt)("p",null,"The main purpose of this feature is to enable plugins to handle templated configurations."),(0,o.kt)("h3",{id:"selector-and-rule"},"Selector And Rule"),(0,o.kt)("p",null,"Selector and rule are the most soul of Apache ShenYu Gateway. Master it and you can manage any traffic."),(0,o.kt)("p",null,"A plugin has multiple selectors, and one selector corresponds to multiple rules. The selector is the first level filter of traffic, and the rule is the final filter. For a plugin, we want to meet the traffic criteria based on our configuration before the plugin will be executed. Selectors and rules are designed to allow traffic to perform what we want under certain conditions. The rules need to be understood first."),(0,o.kt)("p",null,"The execution logic of plugin, selector and rule is as follows. When the traffic enters into ShenYu gateway, it will first judge whether there is a corresponding plugin and whether the plugin is turned on. Then determine whether the traffic matches the selector of the plugin. It then determines whether the traffic matches the rules of the selector. If the request traffic meets the matching criteria, the plugin will be executed. Otherwise, the plugin will not be executed. Process the next one. ShenYu gateway is so through layers of screening to complete the flow control."),(0,o.kt)("img",{src:"/img/shenyu/dataSync/flow-control-en.png",width:"40%",height:"30%"}),(0,o.kt)("h3",{id:"traffic-filtering"},"Traffic filtering"),(0,o.kt)("img",{src:"/img/shenyu/design/flow-condition.png",width:"30%",height:"30%"}),(0,o.kt)("p",null,"Traffic filtering is the soul of the selector and the rule, corresponding to the matching conditions in the selector and the rule. According to different traffic filtering rules, we can deal with various complex scenes. Traffic filtering can fetch data from Http requests such as ",(0,o.kt)("inlineCode",{parentName:"p"},"Header"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"URI"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"Query"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"Cookie"),", etc."),(0,o.kt)("p",null,"You can then use ",(0,o.kt)("inlineCode",{parentName:"p"},"Match"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"="),", ",(0,o.kt)("inlineCode",{parentName:"p"},"SpEL"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"Regex"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"Groovy"),", etc, to Match the desired data. Multi-group matching Adds matching policies that can use And/Or."),(0,o.kt)("p",null,"please refre to ",(0,o.kt)("a",{parentName:"p",href:"../user-guide/admin-usage/selector-and-rule"},"Selector And Rule Config")," for details."))}u.isMDXComponent=!0}}]);