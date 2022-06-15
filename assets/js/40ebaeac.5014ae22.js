"use strict";(self.webpackChunkshenyu_website=self.webpackChunkshenyu_website||[]).push([[31486],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return m}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),p=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=p(e.components);return a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=p(n),m=r,y=d["".concat(c,".").concat(m)]||d[m]||u[m]||o;return n?a.createElement(y,i(i({ref:t},s),{},{components:n})):a.createElement(y,i({ref:t},s))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},23935:function(e,t,n){n.r(t),n.d(t,{contentTitle:function(){return c},default:function(){return d},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return s}});var a=n(87462),r=n(63366),o=(n(67294),n(3905)),i=["components"],l={title:"Custom Load Balancer",keywords:["LoadBalance"],description:"Custom Load Balance"},c=void 0,p={unversionedId:"developer/spi/custom-load-balance",id:"version-2.4.2/developer/spi/custom-load-balance",isDocsHomePage:!1,title:"Custom Load Balancer",description:"Custom Load Balance",source:"@site/versioned_docs/version-2.4.2/developer/spi/custom-load-balance.md",sourceDirName:"developer/spi",slug:"/developer/spi/custom-load-balance",permalink:"/docs/2.4.2/developer/spi/custom-load-balance",editUrl:"https://github.com/apache/incubator-shenyu-website/edit/main/versioned_docs/version-2.4.2/developer/spi/custom-load-balance.md",version:"2.4.2",frontMatter:{title:"Custom Load Balancer",keywords:["LoadBalance"],description:"Custom Load Balance"},sidebar:"version-2.4.2/tutorialSidebar",previous:{title:"GeneralContext Plugin",permalink:"/docs/2.4.2/plugin-center/common/general-context-plugin"},next:{title:"Custom Match Mode",permalink:"/docs/2.4.2/developer/spi/custom-match-mode"}},s=[],u={toc:s};function d(e){var t=e.components,n=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"This paper describes how to customize the extension of  ",(0,o.kt)("inlineCode",{parentName:"p"},"org.apache.shenyu.loadbalancer.spi.LoadBalancer"),".")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Create a new project and introduce the following dependencies:"))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-xml"},"<dependencies>\n    <dependency>\n        <groupId>org.apache.shenyu</groupId>\n        <artifactId>shenyu-plugin-base</artifactId>\n        <version>${project.version}</version>\n    </dependency>\n</dependencies>\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Create a new class  ",(0,o.kt)("inlineCode",{parentName:"li"},"CustomLoadBalancer"),", extends ",(0,o.kt)("inlineCode",{parentName:"li"},"org.apache.shenyu.loadbalancer.spi.AbstractLoadBalancer"),".")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"public class CustomLoadBalancer extends AbstractLoadBalancer {\n\n    @Override\n    public Upstream doSelect(final List<Upstream> upstreamList, final String ip) {\n        // custom load balancer\n    }\n}\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"In the project's META-INF/services directory, create key-value as following in ",(0,o.kt)("inlineCode",{parentName:"li"},"org.apache.shenyu.loadbalancer.spi.LoadBalancer")," file.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"${spi name}=${custom class path}\n")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"${spi name}")," represents the name of ",(0,o.kt)("inlineCode",{parentName:"p"},"spi")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"${custom class path}")," represents the fully qualified name of the class. Such as:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"custom=xxx.xxx.xxx.CustomLoadBalancer\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Package the project and copy it to the ",(0,o.kt)("inlineCode",{parentName:"p"},"lib")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"ext-lib")," directory of the gateway (bootstrap-bin).")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"In the ",(0,o.kt)("inlineCode",{parentName:"p"},"Apache ShenYu")," gateway management system --\x3e BasicConfig --\x3e Dictionary,  find the dictionary code as ",(0,o.kt)("inlineCode",{parentName:"p"},"LOAD_BALANCE"),", add a new piece of data, pay attention to the dictionary name: ",(0,o.kt)("inlineCode",{parentName:"p"},"${spi name}"),"."))),(0,o.kt)("img",{src:"/img/shenyu/custom/custom_load_balancer_en.png",width:"80%",height:"70%"}),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"DictionaryType: ",(0,o.kt)("inlineCode",{parentName:"p"},"loadBalance"),";"),(0,o.kt)("p",{parentName:"blockquote"},"DictionaryCode: ",(0,o.kt)("inlineCode",{parentName:"p"},"LOAD_BALANCE"),";"),(0,o.kt)("p",{parentName:"blockquote"},"DictionaryName: ",(0,o.kt)("inlineCode",{parentName:"p"},"${spi name}"),", input your custom spi name;"),(0,o.kt)("p",{parentName:"blockquote"},"DictionaryValue: When used, the value of the drop-down box, do not repeat with the existing;"),(0,o.kt)("p",{parentName:"blockquote"},"DictionaryDescribe: desc your custom match strategy;"),(0,o.kt)("p",{parentName:"blockquote"},"Sort: to sort;")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"When adding selectors or rules, you can use custom MatchType:")),(0,o.kt)("img",{src:"/img/shenyu/custom/use_custom_load_balancer_en.png",width:"90%",height:"80%"}))}d.isMDXComponent=!0}}]);