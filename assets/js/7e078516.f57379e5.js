"use strict";(self.webpackChunkshenyu_website=self.webpackChunkshenyu_website||[]).push([[5565],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return g}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=c(n),g=a,m=d["".concat(s,".").concat(g)]||d[g]||p[g]||i;return n?r.createElement(m,o(o({ref:t},u),{},{components:n})):r.createElement(m,o({ref:t},u))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var c=2;c<i;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},51857:function(e,t,n){n.r(t),n.d(t,{contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return u}});var r=n(87462),a=n(63366),i=(n(67294),n(3905)),o=["components"],l={title:"Observability",keywords:["Observability"],description:"Observability access"},s=void 0,c={unversionedId:"user-guide/observability/observability",id:"version-2.4.2/user-guide/observability/observability",isDocsHomePage:!1,title:"Observability",description:"Observability access",source:"@site/versioned_docs/version-2.4.2/user-guide/observability/observability.md",sourceDirName:"user-guide/observability",slug:"/user-guide/observability/observability",permalink:"/docs/2.4.2/user-guide/observability/observability",editUrl:"https://github.com/apache/incubator-shenyu-website/edit/main/versioned_docs/version-2.4.2/user-guide/observability/observability.md",version:"2.4.2",frontMatter:{title:"Observability",keywords:["Observability"],description:"Observability access"},sidebar:"version-2.4.2/tutorialSidebar",previous:{title:"Gateway Property Config",permalink:"/docs/2.4.2/user-guide/property-config/gateway-property-config"},next:{title:"Tracing",permalink:"/docs/2.4.2/user-guide/observability/tracing"}},u=[{value:"Java agent",id:"java-agent",children:[]},{value:"Tracing",id:"tracing",children:[]},{value:"Metrics",id:"metrics",children:[]},{value:"Logging",id:"logging",children:[]},{value:"Download and compile the code",id:"download-and-compile-the-code",children:[]},{value:"shenyu-agent.yaml",id:"shenyu-agentyaml",children:[]},{value:"For use",id:"for-use",children:[]}],p={toc:u};function d(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"This article introduces the ",(0,i.kt)("inlineCode",{parentName:"p"},"Apache ShenYu Agent")," module."),(0,i.kt)("h2",{id:"java-agent"},"Java agent"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Apache ShenYu")," uses ",(0,i.kt)("inlineCode",{parentName:"p"},"java agent")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"bytecode enhancement")," technology to achieve seamless embedding, so that users can access third-party observability systems without introducing dependencies, and obtain Traces, Metrics and Logging."),(0,i.kt)("h2",{id:"tracing"},"Tracing"),(0,i.kt)("p",null,"Link tracking, call chain data is collected via probes and third party systems (Jaeger, Zipkin) to pull the data and then display it."),(0,i.kt)("h2",{id:"metrics"},"Metrics"),(0,i.kt)("p",null,"System statistics metrics, collected by probes, are written to third-party timing databases such as prometheus and then displayed."),(0,i.kt)("h2",{id:"logging"},"Logging"),(0,i.kt)("p",null,"Take the shenyu gateway log information, write it to elasticSearch (or send it to the messaging middleware), and display it."),(0,i.kt)("h2",{id:"download-and-compile-the-code"},"Download and compile the code"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Download code")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"> git clone https://github.com/apache/incubator-shenyu.git\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Use Maven to compile the code")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"> cd incubator-shenyu\n> mvn clean install -Dmaven.javadoc.skip=true -B -Drat.skip=true -Djacoco.skip=true -DskipITs -DskipTests\n")),(0,i.kt)("p",null,"After the compilation is successful, you can see the compiled jar package and related configuration files of the ",(0,i.kt)("inlineCode",{parentName:"p"},"shenyu-agent")," module in the ",(0,i.kt)("inlineCode",{parentName:"p"},"~/shenyu/shenyu-dist/shenyu-agent-dist/target/shenyu-agent")," directory."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},".\n\u251c\u2500\u2500 conf\n\u2502\xa0\xa0 \u251c\u2500\u2500 logback.xml\n\u2502\xa0\xa0 \u251c\u2500\u2500 shenyu-agent.yaml\n\u2502\xa0\xa0 \u2514\u2500\u2500 tracing-point.yaml\n\u251c\u2500\u2500 plugins\n\u2502\xa0\xa0 \u251c\u2500\u2500 shenyu-agent-plugin-xxx.jar\n\u2514\u2500\u2500 shenyu-agent.jar\n")),(0,i.kt)("h2",{id:"shenyu-agentyaml"},"shenyu-agent.yaml"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"appName: shenyu-agent\nsupports:\n  tracing:\n    - pluginName\n  metrics:\n    - pluginName\n  logging:\n    - pluginName\n  \nplugins:\n  tracing:\n    pluginName:\n      host: \n      port:\n      props:\n  metrics:\n    pluginName:\n      host: \n      port:\n      props:\n  logging:\n    pluginName:\n      host: \n      port:\n      props:\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Select the plugin to be used in ",(0,i.kt)("inlineCode",{parentName:"li"},"supports")),(0,i.kt)("li",{parentName:"ul"},"Configure the parameters of the plug-in in ",(0,i.kt)("inlineCode",{parentName:"li"},"plugins"),". The specific usage of each plug-in props parameter is shown in the following tables:")),(0,i.kt)("h2",{id:"for-use"},"For use"),(0,i.kt)("p",null,"For deployment, please refer to ",(0,i.kt)("a",{parentName:"p",href:"/docs/2.4.2/deployment/deployment-package#start-shenyu-bootstrap-with-shenyu-agent"},"Binary Packages Deployment")," or ",(0,i.kt)("a",{parentName:"p",href:"/docs/2.4.2/deployment/deployment-docker#start-shenyu-bootstrap-with-shenyu-agent"},"Docker Deployment")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Developers can add the ",(0,i.kt)("inlineCode",{parentName:"p"},"-javaagent")," parameter to the JVM parameter of the IDE startup configuration, please refer to ",(0,i.kt)("a",{parentName:"p",href:"/docs/2.4.2/developer/debug-agent"},"Local debug and run agent module"),".")))}d.isMDXComponent=!0}}]);