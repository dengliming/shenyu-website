"use strict";(self.webpackChunkshenyu_website=self.webpackChunkshenyu_website||[]).push([[28602],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),c=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=c(e.components);return a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},s=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),s=c(n),m=r,g=s["".concat(p,".").concat(m)]||s[m]||u[m]||i;return n?a.createElement(g,o(o({ref:t},d),{},{components:n})):a.createElement(g,o({ref:t},d))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=s;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var c=2;c<i;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}s.displayName="MDXCreateElement"},3559:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var a=n(87462),r=(n(67294),n(3905));const i={title:"Custom Predicate Judge",keywords:["PredicateJudge"],description:"Custom Predicate Judge"},o=void 0,l={unversionedId:"developer/spi/custom-predicate-judge",id:"version-2.4.3/developer/spi/custom-predicate-judge",isDocsHomePage:!1,title:"Custom Predicate Judge",description:"Custom Predicate Judge",source:"@site/versioned_docs/version-2.4.3/developer/spi/custom-predicate-judge.md",sourceDirName:"developer/spi",slug:"/developer/spi/custom-predicate-judge",permalink:"/docs/2.4.3/developer/spi/custom-predicate-judge",editUrl:"https://github.com/apache/shenyu-website/edit/main/versioned_docs/version-2.4.3/developer/spi/custom-predicate-judge.md",version:"2.4.3",frontMatter:{title:"Custom Predicate Judge",keywords:["PredicateJudge"],description:"Custom Predicate Judge"},sidebar:"version-2.4.3/tutorialSidebar",previous:{title:"Custom Parameter Data",permalink:"/docs/2.4.3/developer/spi/custom-parameter-data"},next:{title:"Custom Rate Limiter",permalink:"/docs/2.4.3/developer/spi/custom-rate-limiter"}},p=[{value:"Introduction",id:"introduction",children:[]},{value:"Extension",id:"extension",children:[]},{value:"Example",id:"example",children:[]}],c={toc:p};function d(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"introduction"},"Introduction"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"This paper describes how to customize the extension of  ",(0,r.kt)("inlineCode",{parentName:"li"},"org.apache.shenyu.plugin.base.condition.judge.PredicateJudge"),"."),(0,r.kt)("li",{parentName:"ul"},"The conditional predicate is the bridge between data and rules in the selector and serves to filter out requests that match the conditions."),(0,r.kt)("li",{parentName:"ul"},"There are already seven conditional predicates including match, =, regex, contains, TimeBefore, TimeAfter, exclude."),(0,r.kt)("li",{parentName:"ul"},"Please refer to ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/shenyu/tree/v2.4.3/shenyu-plugin/shenyu-plugin-base/src/main/java/org/apache/shenyu/plugin/base/condition/judge"},"judge")," module, add your own conditional predicates, or submit ",(0,r.kt)("inlineCode",{parentName:"li"},"pr")," to the official website if you have a good common plugin.")),(0,r.kt)("h2",{id:"extension"},"Extension"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Create a new project and introduce the following dependencies:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-xml"},"<dependencies>\n    <dependency>\n        <groupId>org.apache.shenyu</groupId>\n        <artifactId>shenyu-plugin-base</artifactId>\n        <version>${project.version}</version>\n    </dependency>\n</dependencies>\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Create a new class ",(0,r.kt)("inlineCode",{parentName:"li"},"CustomPredicateJudge"),", implements ",(0,r.kt)("inlineCode",{parentName:"li"},"org.apache.shenyu.plugin.base.condition.judge.PredicateJudge"),", add annotation ",(0,r.kt)("inlineCode",{parentName:"li"},"org.apache.shenyu.spi.Join"),".")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"/**\n * custom predicate judge.\n */\n@Join\npublic class CustomPredicateJudge implements PredicateJudge {\n\n    @Override\n    public Boolean judge(final ConditionData conditionData, final String realData) {\n        // Custom Predicate Judge\n    }\n}\n\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"In the project's META-INF/services directory, create ",(0,r.kt)("inlineCode",{parentName:"li"},"org.apache.shenyu.plugin.base.condition.judge.PredicateJudge")," file, add key-value as following:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell",metastring:'title="script"',title:'"script"'},"${spi name} = ${custom class path}\n")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"${spi name}")," represents the name of ",(0,r.kt)("inlineCode",{parentName:"p"},"spi")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"${custom class path}")," represents the fully qualified name of the class. Such as:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell",metastring:'title="script"',title:'"script"'},"custom=xxx.xxx.xxx.CustomPredicateJudge\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Package the project and copy it to the ",(0,r.kt)("inlineCode",{parentName:"p"},"lib")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"ext-lib")," directory of the gateway (bootstrap-bin).")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"In the ",(0,r.kt)("inlineCode",{parentName:"p"},"Apache ShenYu")," gateway management system --\x3e BasicConfig --\x3e Dictionary, find the dictionary code as ",(0,r.kt)("inlineCode",{parentName:"p"},"OPERATOR"),", add a new piece of data, pay attention to the dictionary name: ",(0,r.kt)("inlineCode",{parentName:"p"},"${spi name}"),"."))),(0,r.kt)("img",{src:"/img/shenyu/custom/custom_predicate_judge_en.png",width:"70%",height:"60%"}),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"DictionaryType: ",(0,r.kt)("inlineCode",{parentName:"p"},"operator"),";"),(0,r.kt)("p",{parentName:"blockquote"},"DictionaryCode: ",(0,r.kt)("inlineCode",{parentName:"p"},"OPERATOR"),";"),(0,r.kt)("p",{parentName:"blockquote"},"DictionaryName: ",(0,r.kt)("inlineCode",{parentName:"p"},"${spi name}"),", input your custom spi name;"),(0,r.kt)("p",{parentName:"blockquote"},"DictionaryValue: When used, the value of the drop-down box, do not repeat with the existing;"),(0,r.kt)("p",{parentName:"blockquote"},"DictionaryDescribe: desc your custom match strategy;"),(0,r.kt)("p",{parentName:"blockquote"},"Sort: to sort;"),(0,r.kt)("p",{parentName:"blockquote"},"Status: open or close.")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"When adding selectors or rules, you can use custom predicate judge:")),(0,r.kt)("img",{src:"/img/shenyu/custom/use_custom_predicate_judge_en.png",width:"80%",height:"70%"}),(0,r.kt)("h2",{id:"example"},"Example"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Add ",(0,r.kt)("inlineCode",{parentName:"li"},"GroovyPredicateJudge")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"SpELPredicateJudge")," extension.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"/**\n * Groovy predicate judge.\n */\n@Join\npublic class GroovyPredicateJudge implements PredicateJudge {\n    \n    @Override\n    public Boolean judge(final ConditionData conditionData, final String realData) {\n        return (Boolean) Eval.me(conditionData.getParamName(), realData, conditionData.getParamValue());\n    }\n}\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"/**\n * SpEL predicate judge.\n */\n@Join\npublic class SpELPredicateJudge implements PredicateJudge {\n    \n    private static final ExpressionParser EXPRESSION_PARSER = new SpelExpressionParser();\n    \n    @Override\n    public Boolean judge(final ConditionData conditionData, final String realData) {\n        Expression expression = EXPRESSION_PARSER.parseExpression(conditionData.getParamValue().replace('#' + conditionData.getParamName(), realData));\n        return expression.getValue(Boolean.class);\n    }\n}\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Update ",(0,r.kt)("inlineCode",{parentName:"li"},"org.apache.shenyu.plugin.base.condition.judge.PredicateJudge"),":")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell",metastring:'title="script"',title:'"script"'},"Groovy=xxx.xxx.xxx.GroovyPredicateJudge\nSpEL=xxx.xxx.xxx.SpELPredicateJudge\n")))}d.isMDXComponent=!0}}]);