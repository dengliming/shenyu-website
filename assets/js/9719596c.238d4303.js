"use strict";(self.webpackChunkshenyu_website=self.webpackChunkshenyu_website||[]).push([[82210],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>h});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),c=p(n),m=o,h=c["".concat(l,".").concat(m)]||c[m]||u[m]||a;return n?r.createElement(h,i(i({ref:t},d),{},{components:n})):r.createElement(h,i({ref:t},d))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[c]="string"==typeof e?e:o,i[1]=s;for(var p=2;p<a;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},89996:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>i,default:()=>c,frontMatter:()=>a,metadata:()=>s,toc:()=>l});var r=n(87462),o=(n(67294),n(3905));const a={title:"Fetching Correct IP Address And Host",keywords:["Apache ShenYu"],description:"Fetching correct IP address and host"},i=void 0,s={unversionedId:"developer/custom-parsing-ip-and-host",id:"version-2.5.1/developer/custom-parsing-ip-and-host",isDocsHomePage:!1,title:"Fetching Correct IP Address And Host",description:"Fetching correct IP address and host",source:"@site/versioned_docs/version-2.5.1/developer/custom-parsing-ip-and-host.md",sourceDirName:"developer",slug:"/developer/custom-parsing-ip-and-host",permalink:"/docs/developer/custom-parsing-ip-and-host",editUrl:"https://github.com/apache/shenyu-website/edit/main/versioned_docs/version-2.5.1/developer/custom-parsing-ip-and-host.md",version:"2.5.1",frontMatter:{title:"Fetching Correct IP Address And Host",keywords:["Apache ShenYu"],description:"Fetching correct IP address and host"},sidebar:"version-2.5.1/tutorialSidebar",previous:{title:"Custom Jwt convert Algorithm",permalink:"/docs/developer/custom-jwt-covert-algorithm"},next:{title:"Custom Plugin",permalink:"/docs/developer/custom-plugin"}},l=[{value:"Description",id:"description",children:[]},{value:"Default Implementation",id:"default-implementation",children:[]},{value:"Implement through a Plugin",id:"implement-through-a-plugin",children:[]}],p={toc:l},d="wrapper";function c(e){let{components:t,...n}=e;return(0,o.kt)(d,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"description"},"Description"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"This doc demonstrates how to get correct IP address and host when ",(0,o.kt)("inlineCode",{parentName:"li"},"Apache ShenYu")," serves behind ",(0,o.kt)("inlineCode",{parentName:"li"},"nginx")," reverse proxy."),(0,o.kt)("li",{parentName:"ul"},"After fetched real ",(0,o.kt)("inlineCode",{parentName:"li"},"IP")," and ",(0,o.kt)("inlineCode",{parentName:"li"},"host"),", you can match them with plugins and selectors.")),(0,o.kt)("h2",{id:"default-implementation"},"Default Implementation"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"The embedded implementation in ",(0,o.kt)("inlineCode",{parentName:"p"},"Apache ShenYu")," is :",(0,o.kt)("inlineCode",{parentName:"p"},"org.apache.shenyu.web.forward.ForwardedRemoteAddressResolver"),".")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"You need to config ",(0,o.kt)("inlineCode",{parentName:"p"},"X-Forwarded-For")," in ",(0,o.kt)("inlineCode",{parentName:"p"},"nginx")," first to get correct ",(0,o.kt)("inlineCode",{parentName:"p"},"IP address")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"host"),"."))),(0,o.kt)("h2",{id:"implement-through-a-plugin"},"Implement through a Plugin"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Declare a new class named ",(0,o.kt)("inlineCode",{parentName:"li"},"CustomRemoteAddressResolver")," and implements ",(0,o.kt)("inlineCode",{parentName:"li"},"org.apache.shenyu.plugin.api.RemoteAddressResolver"),".")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"public interface RemoteAddressResolver {\n\n    /**\n     * Resolve inet socket address.\n     *\n     * @param exchange the exchange\n     * @return the inet socket address\n     */\n    default InetSocketAddress resolve(ServerWebExchange exchange) {\n        return exchange.getRequest().getRemoteAddress();\n    }\n\n}\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Register defined class as a ",(0,o.kt)("inlineCode",{parentName:"li"},"Spring Bean"),".")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"   @Bean\n   public SignService customRemoteAddressResolver() {\n         return new CustomRemoteAddressResolver();\n   }\n")))}c.isMDXComponent=!0}}]);