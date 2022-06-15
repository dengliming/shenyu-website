"use strict";(self.webpackChunkshenyu_website=self.webpackChunkshenyu_website||[]).push([[94210],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return d}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},p=Object.keys(e);for(a=0;a<p.length;a++)n=p[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(a=0;a<p.length;a++)n=p[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),u=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=u(e.components);return a.createElement(o.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,p=e.originalType,o=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),m=u(n),d=r,h=m["".concat(o,".").concat(d)]||m[d]||c[d]||p;return n?a.createElement(h,i(i({ref:t},s),{},{components:n})):a.createElement(h,i({ref:t},s))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var p=n.length,i=new Array(p);i[0]=m;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var u=2;u<p;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},98138:function(e,t,n){n.r(t),n.d(t,{contentTitle:function(){return o},default:function(){return m},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return s}});var a=n(87462),r=n(63366),p=(n(67294),n(3905)),i=["components"],l={title:"Apache ShenYu \u542f\u52a8\u793a\u4f8b",author:"Kunshuai Zhu",author_title:"Apache ShenYu Contributor",author_url:"https://github.com/JooKS-me",author_image_url:"https://avatars1.githubusercontent.com/u/62384022?v=4",tags:["Apache ShenYu"]},o=void 0,u={permalink:"/zh/blog/Start-SourceCode-Analysis-Start-Demo",editUrl:"https://github.com/apache/incubator-shenyu-website/edit/main/i18n/zh/docusaurus-plugin-content-blog/Start-SourceCode-Analysis-Start-Demo.md",source:"@site/i18n/zh/docusaurus-plugin-content-blog/Start-SourceCode-Analysis-Start-Demo.md",title:"Apache ShenYu \u542f\u52a8\u793a\u4f8b",description:"\u73af\u5883\u51c6\u5907",date:"2022-06-15T14:45:18.489Z",formattedDate:"2022\u5e746\u670815\u65e5",tags:[{label:"Apache ShenYu",permalink:"/zh/blog/tags/apache-shen-yu"}],readingTime:1.88,truncated:!1,prevItem:{title:"RateLimiter SPI \u4ee3\u7801\u5206\u6790",permalink:"/zh/blog/SPI-SourceCode-Analysis-RateLimiter-SPI"},nextItem:{title:"Etcd\u6570\u636e\u540c\u6b65\u6e90\u7801\u5206\u6790",permalink:"/zh/blog/DataSync-SourceCode-Analysis-Etcd-Data-Sync"}},s=[{value:"\u73af\u5883\u51c6\u5907",id:"\u73af\u5883\u51c6\u5907",children:[]},{value:"\u62c9\u53d6ShenYu\u4ee3\u7801",id:"\u62c9\u53d6shenyu\u4ee3\u7801",children:[]},{value:"\u7f16\u8bd1\u4ee3\u7801",id:"\u7f16\u8bd1\u4ee3\u7801",children:[]},{value:"\u542f\u52a8\u7f51\u5173\u670d\u52a1",id:"\u542f\u52a8\u7f51\u5173\u670d\u52a1",children:[]},{value:"\u542f\u52a8\u5e94\u7528\u670d\u52a1",id:"\u542f\u52a8\u5e94\u7528\u670d\u52a1",children:[]},{value:"\u6d4b\u8bd5Http\u8bf7\u6c42",id:"\u6d4b\u8bd5http\u8bf7\u6c42",children:[]},{value:"\u4f7f\u7528\u66f4\u591a\u63d2\u4ef6",id:"\u4f7f\u7528\u66f4\u591a\u63d2\u4ef6",children:[]}],c={toc:s};function m(e){var t=e.components,l=(0,r.Z)(e,i);return(0,p.kt)("wrapper",(0,a.Z)({},c,l,{components:t,mdxType:"MDXLayout"}),(0,p.kt)("h3",{id:"\u73af\u5883\u51c6\u5907"},"\u73af\u5883\u51c6\u5907"),(0,p.kt)("ul",null,(0,p.kt)("li",{parentName:"ul"},"\u672c\u5730\u6b63\u786e\u5b89\u88c5JDK1.8+"),(0,p.kt)("li",{parentName:"ul"},"\u672c\u5730\u6b63\u786e\u5b89\u88c5Git"),(0,p.kt)("li",{parentName:"ul"},"\u672c\u5730\u6b63\u786e\u5b89\u88c5Maven"),(0,p.kt)("li",{parentName:"ul"},"\u9009\u62e9\u4e00\u6b3e\u5f00\u53d1\u5de5\u5177\uff0c\u6bd4\u5982IDEA")),(0,p.kt)("h3",{id:"\u62c9\u53d6shenyu\u4ee3\u7801"},"\u62c9\u53d6ShenYu\u4ee3\u7801"),(0,p.kt)("p",null,"\u4f7f\u7528Git\u62c9\u53d6\u4ee3\u7801"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-shell"},"> git clone https://github.com/apache/incubator-shenyu.git\n")),(0,p.kt)("h3",{id:"\u7f16\u8bd1\u4ee3\u7801"},"\u7f16\u8bd1\u4ee3\u7801"),(0,p.kt)("p",null,"\u4f7f\u7528Maven\u8fdb\u884c\u7f16\u8bd1"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-shell"},"> cd incubator-shenyu\n> mvn clean install -Dmaven.javadoc.skip=true -B -Drat.skip=true -Djacoco.skip=true -DskipITs -DskipTests\n")),(0,p.kt)("h3",{id:"\u542f\u52a8\u7f51\u5173\u670d\u52a1"},"\u542f\u52a8\u7f51\u5173\u670d\u52a1"),(0,p.kt)("p",null,"\u4f7f\u7528\u5f00\u53d1\u5de5\u5177\uff0c\u4ee5IDEA\u4e3a\u4f8b\u3002"),(0,p.kt)("p",null,"\u542f\u52a8 ",(0,p.kt)("inlineCode",{parentName:"p"},"shenyu-admin")," \u63a7\u5236\u53f0\uff08\u9ed8\u8ba4\u4f7f\u7528H2\u6570\u636e\u5e93\uff09"),(0,p.kt)("p",null,(0,p.kt)("img",{alt:"start-demo-admin",src:n(57150).Z})),(0,p.kt)("p",null,"\u542f\u52a8 ",(0,p.kt)("inlineCode",{parentName:"p"},"shenyu-bootstrap")),(0,p.kt)("p",null,(0,p.kt)("img",{alt:"start-demo-bootstrap",src:n(77274).Z})),(0,p.kt)("blockquote",null,(0,p.kt)("p",{parentName:"blockquote"},"\u5230\u8fd9\u4e00\u6b65\uff0cshenyu\u7f51\u5173\u5df2\u7ecf\u542f\u52a8\u3002"),(0,p.kt)("p",{parentName:"blockquote"},"\u6211\u4eec\u53ef\u4ee5\u6253\u5f00\u6d4f\u89c8\u5668\uff0c\u8bbf\u95eeadmin\u63a7\u5236\u53f0\uff1a",(0,p.kt)("a",{parentName:"p",href:"http://localhost:9095/"},"http://localhost:9095/"))),(0,p.kt)("h3",{id:"\u542f\u52a8\u5e94\u7528\u670d\u52a1"},"\u542f\u52a8\u5e94\u7528\u670d\u52a1"),(0,p.kt)("p",null,"Apache ShenYu\u63d0\u4f9b\u4e86Http\u3001Dubbo\u3001SpringCloud\u7b49\u5e94\u7528\u63a5\u5165shenyu\u7f51\u5173\u7684\u6837\u4f8b\uff0c\u4f4d\u4e8e ",(0,p.kt)("inlineCode",{parentName:"p"},"shenyu-example")," \u6a21\u5757\uff0c\u8fd9\u91cc\u4ee5Http\u670d\u52a1\u4e3a\u4f8b\u3002"),(0,p.kt)("p",null,"\u82e5 ",(0,p.kt)("inlineCode",{parentName:"p"},"shenyu-example")," \u672a\u88abIDEA\u6807\u8bb0\u4e3aMaven\u9879\u76ee\uff0c\u53ef\u4ee5\u53f3\u952e\u70b9\u51fb ",(0,p.kt)("inlineCode",{parentName:"p"},"shenyu-example")," \u76ee\u5f55\u4e0b\u7684 ",(0,p.kt)("inlineCode",{parentName:"p"},"pom.xml")," \u6587\u4ef6\uff0c\u5c06\u5176\u6dfb\u52a0\u4e3aMaven\u9879\u76ee\u3002"),(0,p.kt)("p",null,(0,p.kt)("img",{alt:"start-demo-maven",src:n(75382).Z})),(0,p.kt)("p",null,"\u542f\u52a8 ",(0,p.kt)("inlineCode",{parentName:"p"},"shenyu-examples-http"),"\u3002"),(0,p.kt)("p",null,(0,p.kt)("img",{alt:"start-demo-examples-http",src:n(37509).Z})),(0,p.kt)("p",null,"\u8fd9\u65f6\uff0c",(0,p.kt)("inlineCode",{parentName:"p"},"shenyu-examples-http")," \u4f1a\u81ea\u52a8\u628a\u52a0 ",(0,p.kt)("inlineCode",{parentName:"p"},"@ShenyuSpringMvcClient")," \u6ce8\u89e3\u7684\u63a5\u53e3\u65b9\u6cd5\uff0c\u4ee5\u53caapplication.yml\u4e2d\u7684\u76f8\u5173\u914d\u7f6e\u6ce8\u518c\u5230\u7f51\u5173\u3002\u6211\u4eec\u6253\u5f00admin\u63a7\u5236\u53f0\uff0c\u5373\u53ef\u5728divide\u3001context_path\u4e2d\u770b\u5230\u76f8\u5173\u914d\u7f6e\u3002"),(0,p.kt)("h3",{id:"\u6d4b\u8bd5http\u8bf7\u6c42"},"\u6d4b\u8bd5Http\u8bf7\u6c42"),(0,p.kt)("p",null,"\u4e0b\u9762\u4f7f\u7528",(0,p.kt)("inlineCode",{parentName:"p"},"postman"),"\u6a21\u62df",(0,p.kt)("inlineCode",{parentName:"p"},"http"),"\u7684\u65b9\u5f0f\u6765\u8bf7\u6c42\u4f60\u7684",(0,p.kt)("inlineCode",{parentName:"p"},"http"),"\u670d\u52a1\uff1a"),(0,p.kt)("p",null,(0,p.kt)("img",{alt:"start-demo-post-http",src:n(19680).Z})),(0,p.kt)("h3",{id:"\u4f7f\u7528\u66f4\u591a\u63d2\u4ef6"},"\u4f7f\u7528\u66f4\u591a\u63d2\u4ef6"),(0,p.kt)("p",null,"\u6211\u4eec\u53ef\u4ee5\u53c2\u8003 ",(0,p.kt)("a",{parentName:"p",href:"../docs/index"},"\u5b98\u65b9\u6587\u6863"),"\uff0c\u6765\u4f7f\u7528\u5176\u4ed6\u7684\u63d2\u4ef6\u3002"),(0,p.kt)("p",null,"\u8fd9\u91cc\u4ee5\u4f7f\u7528 param-mapping \u63d2\u4ef6\u4e3a\u4f8b\u3002"),(0,p.kt)("p",null,"\u5728 ",(0,p.kt)("inlineCode",{parentName:"p"},"BasicConfig -> Plugin")," \u7f16\u8f91 param-mapping \u63d2\u4ef6\uff0c\u8bbe\u7f6e ",(0,p.kt)("inlineCode",{parentName:"p"},"status"),"\u3002"),(0,p.kt)("p",null,(0,p.kt)("img",{alt:"start-demo-plugin",src:n(36475).Z})),(0,p.kt)("p",null,"\u5728 ",(0,p.kt)("inlineCode",{parentName:"p"},"PluginList -> http process")," \u914d\u7f6e\u9009\u62e9\u5668\u548c\u89c4\u5219\u3002"),(0,p.kt)("p",null,(0,p.kt)("img",{alt:"start-demo-selector",src:n(51608).Z})),(0,p.kt)("p",null,(0,p.kt)("img",{alt:"start-demo-rules",src:n(35896).Z})),(0,p.kt)("p",null,"\u7136\u540e\u4f7f\u7528 ",(0,p.kt)("inlineCode",{parentName:"p"},"postman")," \u5411 ",(0,p.kt)("inlineCode",{parentName:"p"},"/http/test/payment")," \u53d1\u8d77http\u8bf7\u6c42\u3002"),(0,p.kt)("p",null,(0,p.kt)("img",{alt:"start-demo-post-param-mapping",src:n(20693).Z})))}m.isMDXComponent=!0},57150:function(e,t,n){t.Z=n.p+"assets/images/start-demo-admin-debdd1ee5e979a4892f26e4d54572ead.png"},77274:function(e,t,n){t.Z=n.p+"assets/images/start-demo-bootstrap-cafa4d22b0d69bb6ee82c01e7b45d239.png"},37509:function(e,t,n){t.Z=n.p+"assets/images/start-demo-examples-http-a42235638d82a4be8aeefbb819d419be.png"},75382:function(e,t,n){t.Z=n.p+"assets/images/start-demo-maven-a52eeb99414c79d32a127312a5d22d6f.png"},36475:function(e,t,n){t.Z=n.p+"assets/images/start-demo-plugin-8525f3812e42bed70e28ce23540069b7.png"},19680:function(e,t,n){t.Z=n.p+"assets/images/start-demo-post-http-a7e95883d3147d67e6080236d980d72b.png"},20693:function(e,t,n){t.Z=n.p+"assets/images/start-demo-post-param-mapping-d5d632dc96eb1f0080c451820e8f7df4.png"},35896:function(e,t,n){t.Z=n.p+"assets/images/start-demo-rules-581013f9d7f0f9996b01aab85efcc8e7.png"},51608:function(e,t,n){t.Z=n.p+"assets/images/start-demo-selector-98b0b1ae460bdbed17edc40ab730a182.png"}}]);