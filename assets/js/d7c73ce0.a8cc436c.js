"use strict";(self.webpackChunkshenyu_website=self.webpackChunkshenyu_website||[]).push([[36240],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,c=a(e,["components","mdxType","originalType","parentName"]),d=u(n),m=o,f=d["".concat(l,".").concat(m)]||d[m]||p[m]||i;return n?r.createElement(f,s(s({ref:t},c),{},{components:n})):r.createElement(f,s({ref:t},c))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,s=new Array(i);s[0]=d;var a={};for(var l in t)hasOwnProperty.call(t,l)&&(a[l]=t[l]);a.originalType=e,a.mdxType="string"==typeof e?e:o,s[1]=a;for(var u=2;u<i;u++)s[u]=n[u];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},39924:function(e,t,n){n.r(t),n.d(t,{contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return a},metadata:function(){return u},toc:function(){return c}});var r=n(87462),o=n(63366),i=(n(67294),n(3905)),s=["components"],a={sidebar_position:5,title:"Custom Response",keywords:["soul"],description:"customising response structure"},l=void 0,u={unversionedId:"developer-guide/custom-result",id:"version-2.3.0/developer-guide/custom-result",isDocsHomePage:!1,title:"Custom Response",description:"customising response structure",source:"@site/versioned_docs/version-2.3.0/developer-guide/custom-result.md",sourceDirName:"developer-guide",slug:"/developer-guide/custom-result",permalink:"/docs/2.3.0/developer-guide/custom-result",editUrl:"https://github.com/apache/incubator-shenyu-website/edit/main/versioned_docs/version-2.3.0/developer-guide/custom-result.md",version:"2.3.0",sidebarPosition:5,frontMatter:{sidebar_position:5,title:"Custom Response",keywords:["soul"],description:"customising response structure"},sidebar:"version-2.3.0/tutorialSidebar",previous:{title:"Fetching Correct IP Address And Host",permalink:"/docs/2.3.0/developer-guide/custom-parsing-ip-and-host"},next:{title:"Custom Sign Algorithm",permalink:"/docs/2.3.0/developer-guide/custom-sign-algorithm"}},c=[{value:"Description",id:"description",children:[]},{value:"Default Implementation",id:"default-implementation",children:[]},{value:"Extensions",id:"extensions",children:[]}],p={toc:c};function d(e){var t=e.components,n=(0,o.Z)(e,s);return(0,i.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"description"},"Description"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"This doc offers examples for customising response structure."),(0,i.kt)("li",{parentName:"ul"},"The response body structure in gateways should be unified, it is recommended for specify yours. ")),(0,i.kt)("h2",{id:"default-implementation"},"Default Implementation"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The default implementation class is ",(0,i.kt)("inlineCode",{parentName:"li"},"org.dromara.soul.plugin.api.result.DefaultSoulResult"),"."),(0,i.kt)("li",{parentName:"ul"},"Following is the response structure.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"public class SoulDefaultEntity implements Serializable {\n\n    private static final long serialVersionUID = -2792556188993845048L;\n\n    private Integer code;\n\n    private String message;\n\n    private Object data;\n\n}\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The returned json as follows:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "code": -100, //response code,\n    "message": "\u60a8\u7684\u53c2\u6570\u9519\u8bef,\u8bf7\u68c0\u67e5\u76f8\u5173\u6587\u6863!", //hint messages\n    "data": null  // business data\n}\n')),(0,i.kt)("h2",{id:"extensions"},"Extensions"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},'Declare a new class named "A" and implements ',(0,i.kt)("inlineCode",{parentName:"li"},"org.dromara.soul.plugin.api.result.SoulResult"))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"}," public interface SoulResult<T> {\n \n     /**\n      * Success t.\n      *\n      * @param code    the code\n      * @param message the message\n      * @param object  the object\n      * @return the t\n      */\n     T success(int code, String message, Object object);\n\n     /**\n      * Error t.\n      *\n      * @param code    the code\n      * @param message the message\n      * @param object  the object\n      * @return the t\n      */\n     T error(int code, String message, Object object);\n }\n\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"T")," is a generic parameter for your response data."),(0,i.kt)("li",{parentName:"ul"},"Register defined class as a Spring Bean.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"    @Bean\n    public SoulResult a() {\n          return new A();\n    }\n")))}d.isMDXComponent=!0}}]);