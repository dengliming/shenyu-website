"use strict";(self.webpackChunkshenyu_website=self.webpackChunkshenyu_website||[]).push([[33528],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return d}});var r=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var c=r.createContext({}),p=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},u=function(e){var n=p(e.components);return r.createElement(c.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,a=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=p(t),d=i,g=m["".concat(c,".").concat(d)]||m[d]||s[d]||a;return t?r.createElement(g,o(o({ref:n},u),{},{components:t})):r.createElement(g,o({ref:n},u))}));function d(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var a=t.length,o=new Array(a);o[0]=m;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var p=2;p<a;p++)o[p]=t[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},85039:function(e,n,t){t.r(n),t.d(n,{contentTitle:function(){return c},default:function(){return m},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return u}});var r=t(87462),i=t(63366),a=(t(67294),t(3905)),o=["components"],l={title:"\u81ea\u5b9a\u4e49sign\u63d2\u4ef6\u68c0\u9a8c\u7b97\u6cd5",description:"\u81ea\u5b9a\u4e49sign\u63d2\u4ef6\u68c0\u9a8c"},c=void 0,p={unversionedId:"developer/custom-sign-algorithm",id:"version-2.4.0/developer/custom-sign-algorithm",isDocsHomePage:!1,title:"\u81ea\u5b9a\u4e49sign\u63d2\u4ef6\u68c0\u9a8c\u7b97\u6cd5",description:"\u81ea\u5b9a\u4e49sign\u63d2\u4ef6\u68c0\u9a8c",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-2.4.0/developer/custom-sign-algorithm.md",sourceDirName:"developer",slug:"/developer/custom-sign-algorithm",permalink:"/zh/docs/2.4.0/developer/custom-sign-algorithm",editUrl:"https://github.com/apache/incubator-shenyu-website/edit/main/i18n/zh/docusaurus-plugin-content-docs/version-2.4.0/developer/custom-sign-algorithm.md",version:"2.4.0",frontMatter:{title:"\u81ea\u5b9a\u4e49sign\u63d2\u4ef6\u68c0\u9a8c\u7b97\u6cd5",description:"\u81ea\u5b9a\u4e49sign\u63d2\u4ef6\u68c0\u9a8c"},sidebar:"version-2.4.0/tutorialSidebar",previous:{title:"\u81ea\u5b9a\u4e49\u8fd4\u56de\u7ed3\u679c",permalink:"/zh/docs/2.4.0/developer/custom-result"},next:{title:"\u591a\u8bed\u8a00Http\u5ba2\u6237\u7aef",permalink:"/zh/docs/2.4.0/developer/developer-shenyu-client"}},u=[{value:"\u8bf4\u660e",id:"\u8bf4\u660e",children:[]},{value:"\u6269\u5c55",id:"\u6269\u5c55",children:[]}],s={toc:u};function m(e){var n=e.components,t=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,r.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"\u8bf4\u660e"},"\u8bf4\u660e"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u7528\u6237\u53ef\u4ee5\u81ea\u5b9a\u4e49\u7b7e\u540d\u8ba4\u8bc1\u7b97\u6cd5\u6765\u5b9e\u73b0\u9a8c\u8bc1\u3002")),(0,a.kt)("h2",{id:"\u6269\u5c55"},"\u6269\u5c55"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u9ed8\u8ba4\u7684\u5b9e\u73b0\u4e3a ",(0,a.kt)("inlineCode",{parentName:"p"},"org.apache.shenyu.plugin.sign.service.DefaultSignService"),"\u3002")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u65b0\u589e\u4e00\u4e2a\u7c7b ",(0,a.kt)("inlineCode",{parentName:"p"},"CustomSignService")," \u5b9e\u73b0  ",(0,a.kt)("inlineCode",{parentName:"p"},"org.apache.shenyu.plugin.api.SignService"),"\u3002"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"}," public interface SignService {\n \n     /**\n      * Sign verify pair.\n      *\n      * @param exchange   the exchange\n      * @return the pair\n      */\n     Pair<Boolean, String> signVerify(ServerWebExchange exchange);\n }\n\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"Pair"),"\u4e2d\u8fd4\u56de",(0,a.kt)("inlineCode",{parentName:"p"},"true"),"\uff0c\u8868\u793a\u9a8c\u8bc1\u901a\u8fc7\uff0c\u4e3a",(0,a.kt)("inlineCode",{parentName:"p"},"false"),"\u7684\u65f6\u5019\uff0c\u4f1a\u628a",(0,a.kt)("inlineCode",{parentName:"p"},"String"),"\u4e2d\u7684\u4fe1\u606f\u8f93\u51fa\u5230\u524d\u7aef\u3002")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u628a\u65b0\u589e\u7684\u5b9e\u73b0\u7c7b\u6ce8\u518c\u6210\u4e3a",(0,a.kt)("inlineCode",{parentName:"p"},"Spring"),"\u7684",(0,a.kt)("inlineCode",{parentName:"p"},"bean"),"\uff0c\u5982\u4e0b"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"@Bean\npublic SignService customSignService() {\n      return new CustomSignService();\n}\n")))}m.isMDXComponent=!0}}]);