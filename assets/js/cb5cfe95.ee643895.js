"use strict";(self.webpackChunkshenyu_website=self.webpackChunkshenyu_website||[]).push([[42606],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=p(n),m=a,h=u["".concat(s,".").concat(m)]||u[m]||c[m]||o;return n?r.createElement(h,i(i({ref:t},d),{},{components:n})):r.createElement(h,i({ref:t},d))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},72090:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var r=n(87462),a=(n(67294),n(3905));const o={title:"Fetching Correct IP Address And Host",keywords:["Apache ShenYu"],description:"Fetching correct IP address and host"},i=void 0,l={unversionedId:"developer/custom-parsing-ip-and-host",id:"developer/custom-parsing-ip-and-host",isDocsHomePage:!1,title:"Fetching Correct IP Address And Host",description:"Fetching correct IP address and host",source:"@site/docs/developer/custom-parsing-ip-and-host.md",sourceDirName:"developer",slug:"/developer/custom-parsing-ip-and-host",permalink:"/docs/next/developer/custom-parsing-ip-and-host",editUrl:"https://github.com/apache/shenyu-website/edit/main/docs/developer/custom-parsing-ip-and-host.md",version:"current",frontMatter:{title:"Fetching Correct IP Address And Host",keywords:["Apache ShenYu"],description:"Fetching correct IP address and host"},sidebar:"tutorialSidebar",previous:{title:"Custom Filter",permalink:"/docs/next/developer/custom-filter"},next:{title:"Custom Plugin",permalink:"/docs/next/developer/custom-plugin"}},s=[{value:"Description",id:"description",children:[]},{value:"Default Implementation",id:"default-implementation",children:[]},{value:"Implement through a Plugin",id:"implement-through-a-plugin",children:[]}],p={toc:s};function d(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"description"},"Description"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"This doc demonstrates how to get correct IP address and host when ",(0,a.kt)("inlineCode",{parentName:"li"},"Apache ShenYu")," serves behind ",(0,a.kt)("inlineCode",{parentName:"li"},"nginx")," reverse proxy."),(0,a.kt)("li",{parentName:"ul"},"After fetched real ",(0,a.kt)("inlineCode",{parentName:"li"},"IP")," and ",(0,a.kt)("inlineCode",{parentName:"li"},"host"),", you can match them with plugins and selectors.")),(0,a.kt)("h2",{id:"default-implementation"},"Default Implementation"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"The embedded implementation in ",(0,a.kt)("inlineCode",{parentName:"p"},"Apache ShenYu")," is :",(0,a.kt)("inlineCode",{parentName:"p"},"org.apache.shenyu.web.forward.ForwardedRemoteAddressResolver"),".")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"You need to config ",(0,a.kt)("inlineCode",{parentName:"p"},"X-Forwarded-For")," in ",(0,a.kt)("inlineCode",{parentName:"p"},"nginx")," first to get correct ",(0,a.kt)("inlineCode",{parentName:"p"},"IP address")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"host"),"."))),(0,a.kt)("h2",{id:"implement-through-a-plugin"},"Implement through a Plugin"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Declare a new class named ",(0,a.kt)("inlineCode",{parentName:"li"},"CustomRemoteAddressResolver")," and implements ",(0,a.kt)("inlineCode",{parentName:"li"},"org.apache.shenyu.plugin.api.RemoteAddressResolver"),".")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"public interface RemoteAddressResolver {\n\n    /**\n     * Resolve inet socket address.\n     *\n     * @param exchange the exchange\n     * @return the inet socket address\n     */\n    default InetSocketAddress resolve(ServerWebExchange exchange) {\n        return exchange.getRequest().getRemoteAddress();\n    }\n\n}\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Register defined class as a ",(0,a.kt)("inlineCode",{parentName:"li"},"Spring Bean"),".")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"   @Bean\n   public SignService customRemoteAddressResolver() {\n         return new CustomRemoteAddressResolver();\n   }\n")))}d.isMDXComponent=!0}}]);