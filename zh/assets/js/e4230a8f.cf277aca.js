"use strict";(self.webpackChunkshenyu_website=self.webpackChunkshenyu_website||[]).push([[47113],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return d}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),m=p(n),d=a,h=m["".concat(l,".").concat(d)]||m[d]||u[d]||o;return n?r.createElement(h,i(i({ref:t},s),{},{components:n})):r.createElement(h,i({ref:t},s))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},50494:function(e,t,n){n.r(t),n.d(t,{contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return c},metadata:function(){return p},toc:function(){return s}});var r=n(87462),a=n(63366),o=(n(67294),n(3905)),i=["components"],c={title:"\u81ea\u5b9a\u4e49\u5339\u914d\u65b9\u5f0f",keywords:["MatchStrategy"],description:"\u81ea\u5b9a\u4e49\u5339\u914d\u65b9\u5f0f"},l=void 0,p={unversionedId:"developer/spi/custom-match-mode",id:"version-2.4.0/developer/spi/custom-match-mode",isDocsHomePage:!1,title:"\u81ea\u5b9a\u4e49\u5339\u914d\u65b9\u5f0f",description:"\u81ea\u5b9a\u4e49\u5339\u914d\u65b9\u5f0f",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-2.4.0/developer/spi/custom-match-mode.md",sourceDirName:"developer/spi",slug:"/developer/spi/custom-match-mode",permalink:"/zh/docs/2.4.0/developer/spi/custom-match-mode",editUrl:"https://github.com/apache/incubator-shenyu-website/edit/main/i18n/zh/docusaurus-plugin-content-docs/version-2.4.0/developer/spi/custom-match-mode.md",version:"2.4.0",frontMatter:{title:"\u81ea\u5b9a\u4e49\u5339\u914d\u65b9\u5f0f",keywords:["MatchStrategy"],description:"\u81ea\u5b9a\u4e49\u5339\u914d\u65b9\u5f0f"},sidebar:"version-2.4.0/tutorialSidebar",previous:{title:"\u81ea\u5b9a\u4e49\u8d1f\u8f7d\u5747\u8861\u7b56\u7565",permalink:"/zh/docs/2.4.0/developer/spi/custom-load-balance"},next:{title:"\u81ea\u5b9a\u4e49\u6307\u6807\u76d1\u63a7",permalink:"/zh/docs/2.4.0/developer/spi/custom-metrics-monitor"}},s=[],u={toc:s};function m(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"\u672c\u6587\u4ecb\u7ecd\u5982\u4f55\u5bf9 ",(0,o.kt)("inlineCode",{parentName:"p"},"org.apache.shenyu.plugin.base.condition.strategy.MatchStrategy")," \u8fdb\u884c\u81ea\u5b9a\u4e49\u6269\u5c55\u3002"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u65b0\u589e\u4e00\u4e2a\u7c7b ",(0,o.kt)("inlineCode",{parentName:"li"},"CustomMatchStrategy"),"\uff0c\u7ee7\u627f",(0,o.kt)("inlineCode",{parentName:"li"},"org.apache.shenyu.plugin.base.condition.strategy.AbstractMatchStrategy"),"\uff0c\u5b9e\u73b0 ",(0,o.kt)("inlineCode",{parentName:"li"},"org.apache.shenyu.plugin.base.condition.strategy.MatchStrategy")," \uff0c\u6dfb\u52a0\u6ce8\u89e3",(0,o.kt)("inlineCode",{parentName:"li"},"org.apache.shenyu.spi.Join"),"\u3002")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"/**\n * This is custom match strategy.\n */\n@Join\npublic class CustomMatchStrategy extends AbstractMatchStrategy implements MatchStrategy {\n\n    @Override\n    public Boolean match(final List<ConditionData> conditionDataList, final ServerWebExchange exchange) {\n        // \u5339\u914d\u903b\u8f91\u5b9e\u73b0\n    }\n}\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u5728",(0,o.kt)("inlineCode",{parentName:"li"},"org.apache.shenyu.plugin.base.condition.strategy.MatchStrategy"),"\u6587\u4ef6\u4e2d\u6dfb\u52a0\u5982\u4e0b\u5185\u5bb9\uff1a")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"${spi name}=${custom class path}\n")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"${spi name}"),"\u8868\u793a",(0,o.kt)("inlineCode",{parentName:"p"},"spi"),"\u7684\u540d\u79f0\uff0c",(0,o.kt)("inlineCode",{parentName:"p"},"${custom class path}"),"\u8868\u793a\u8be5\u7c7b\u7684\u5168\u9650\u5b9a\u540d\u3002\u6bd4\u5982\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"custom=org.apache.shenyu.examples.http.strategy.CustomMatchStrategy\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u5728 ",(0,o.kt)("inlineCode",{parentName:"li"},"org.apache.shenyu.common.enums.MatchModeEnum")," \u7c7b\u4e2d\u6dfb\u52a0\u679a\u4e3e\u7c7b\u578b\uff1a")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'\n    /**\n     * And custom mode enum.\n     */\n    CUSTOM(2, "custom"),\n')),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u5728",(0,o.kt)("inlineCode",{parentName:"li"},"Apache ShenYu"),"\u7f51\u5173\u7ba1\u7406\u7cfb\u7edf --\x3e \u57fa\u7840\u914d\u7f6e --\x3e \u5b57\u5178\u7ba1\u7406\uff0c \u627e\u5230\u5b57\u5178\u7f16\u7801\u4e3a ",(0,o.kt)("inlineCode",{parentName:"li"},"MATCH_MODE"),"\uff0c\u65b0\u589e\u4e00\u6761\u6570\u636e\uff0c\u6ce8\u610f\u5b57\u5178\u540d\u79f0\u8981\u4e3a: ",(0,o.kt)("inlineCode",{parentName:"li"},"${spi name}"),"\uff0c\u56fe\u4e2d\u7684\u793a\u4f8b\u662f",(0,o.kt)("inlineCode",{parentName:"li"},"custom"),"\u3002")),(0,o.kt)("img",{src:"/img/shenyu/custom/custom_match_strategy_zh.png",width:"70%",height:"60%"}),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"\u5b57\u5178\u7c7b\u578b\uff1a",(0,o.kt)("inlineCode",{parentName:"p"},"matchMode"),"\uff1b"),(0,o.kt)("p",{parentName:"blockquote"},"\u5b57\u5178\u7f16\u7801\uff1a",(0,o.kt)("inlineCode",{parentName:"p"},"MATCH_MODE"),"\uff1b"),(0,o.kt)("p",{parentName:"blockquote"},"\u5b57\u5178\u540d\u79f0\uff1a",(0,o.kt)("inlineCode",{parentName:"p"},"${spi name}"),"\uff0c\u586b\u5199\u81ea\u5b9a\u4e49",(0,o.kt)("inlineCode",{parentName:"p"},"spi"),"\u7684\u540d\u79f0\uff1b"),(0,o.kt)("p",{parentName:"blockquote"},"\u5b57\u5178\u503c\uff1a\u4f7f\u7528\u65f6\uff0c\u4e0b\u62c9\u6846\u7684\u503c\uff0c\u4e0d\u8981\u548c\u73b0\u6709\u7684\u91cd\u590d\uff1b"),(0,o.kt)("p",{parentName:"blockquote"},"\u5b57\u5178\u63cf\u8ff0\u6216\u5907\u6ce8\u4fe1\u606f\uff1a\u63cf\u8ff0\u4fe1\u606f\uff1b"),(0,o.kt)("p",{parentName:"blockquote"},"\u6392\u5e8f\uff1a \u6392\u5e8f\uff1b"),(0,o.kt)("p",{parentName:"blockquote"},"\u72b6\u6001\uff1a\u6253\u5f00\u6216\u5173\u95ed\u3002")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u5728\u6dfb\u52a0\u9009\u62e9\u5668\u6216\u89c4\u5219\u65f6\uff0c\u5c31\u53ef\u4ee5\u4f7f\u7528\u81ea\u5b9a\u4e49\u7684\u5339\u914d\u65b9\u5f0f\uff1a")),(0,o.kt)("img",{src:"/img/shenyu/custom/use_custom_match_strategy_zh.png",width:"80%",height:"70%"}))}m.isMDXComponent=!0}}]);