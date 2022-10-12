"use strict";(self.webpackChunkshenyu_website=self.webpackChunkshenyu_website||[]).push([[75623],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>d});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},l=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),u=p(n),d=i,y=u["".concat(s,".").concat(d)]||u[d]||m[d]||o;return n?r.createElement(y,a(a({ref:t},l),{},{components:n})):r.createElement(y,a({ref:t},l))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=u;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:i,a[1]=c;for(var p=2;p<o;p++)a[p]=n[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},86677:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>a,default:()=>l,frontMatter:()=>o,metadata:()=>c,toc:()=>s});var r=n(87462),i=(n(67294),n(3905));const o={title:"Custom Metrics Monitor",keywords:["MetricsMonitor"],description:"custom Metrics Monitor"},a=void 0,c={unversionedId:"developer/spi/custom-metrics-monitor",id:"developer/spi/custom-metrics-monitor",isDocsHomePage:!1,title:"Custom Metrics Monitor",description:"custom Metrics Monitor",source:"@site/docs/developer/spi/custom-metrics-monitor.md",sourceDirName:"developer/spi",slug:"/developer/spi/custom-metrics-monitor",permalink:"/docs/next/developer/spi/custom-metrics-monitor",editUrl:"https://github.com/apache/shenyu-website/edit/main/docs/developer/spi/custom-metrics-monitor.md",version:"current",frontMatter:{title:"Custom Metrics Monitor",keywords:["MetricsMonitor"],description:"custom Metrics Monitor"},sidebar:"tutorialSidebar",previous:{title:"Custom Match Mode",permalink:"/docs/next/developer/spi/custom-match-mode"},next:{title:"Custom Mock Data Generator",permalink:"/docs/next/developer/spi/custom-mock-generator"}},s=[{value:"Explanation",id:"explanation",children:[]},{value:"Extension",id:"extension",children:[]}],p={toc:s};function l(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"explanation"},"Explanation"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Before custom development, please customize and build the gateway environment first, please refer to: ",(0,i.kt)("a",{parentName:"p",href:"../deployment-custom"},"custom deployment"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"This article describes how to customize the extension of  ",(0,i.kt)("inlineCode",{parentName:"p"},"org.apache.shenyu.plugin.metrics.spi.MetricsService"),"."))),(0,i.kt)("h2",{id:"extension"},"Extension"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Create a new project and introduce the following dependencies:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-xml"},"<dependencies>\n    <dependency>\n        <groupId>org.apache.shenyu</groupId>\n        <artifactId>shenyu-plugin-base</artifactId>\n        <version>${project.version}</version>\n    </dependency>\n</dependencies>\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Create a new class ",(0,i.kt)("inlineCode",{parentName:"li"},"${you class}"),"\uff0cimplements ",(0,i.kt)("inlineCode",{parentName:"li"},"org.apache.shenyu.plugin.metrics.spi.MetricsService"))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"public class ${you class} implements MetricsService {\n   \n    /**\n     * Start metrics tracker.\n     *\n     * @param metricsConfig metrics config\n     * @param metricsRegister the metrics register\n     */\n    public void start(MetricsConfig metricsConfig, MetricsRegister metricsRegister){\n                //your code\n    }\n    \n    /**\n     * Stop metrics tracker.\n     */\n    public void stop() {\n        //your code\n    }\n}\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"In the project  ",(0,i.kt)("inlineCode",{parentName:"li"},"resources")," directory\uff0cCreate a new ",(0,i.kt)("inlineCode",{parentName:"li"},"META-INF/shenyu")," directory\uff0c and the new file name is : ",(0,i.kt)("inlineCode",{parentName:"li"},"org.apache.shenyu.plugin.metrics.spi.MetricsService"),".\nadd ",(0,i.kt)("inlineCode",{parentName:"li"},"${you spi name}")," = ",(0,i.kt)("inlineCode",{parentName:"li"},"${you class path}"),":")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"${you spi name} = ${you class path}\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Package the project and copy it to the ",(0,i.kt)("inlineCode",{parentName:"p"},"lib")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"ext-lib")," directory of the gateway (bootstrap-bin).")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"In the ",(0,i.kt)("inlineCode",{parentName:"p"},"Admin")," service ---\x3e BasicConfig ---\x3e Plugin ,  Find the ",(0,i.kt)("inlineCode",{parentName:"p"},"Monitor")," plugin,  edit config, pay attention to the ",(0,i.kt)("inlineCode",{parentName:"p"},"metricsName")," name: ",(0,i.kt)("inlineCode",{parentName:"p"},"${you spi name}"),"."))),(0,i.kt)("img",{src:"/img/shenyu/custom/custom-metrics-monitor-en.jpg",width:"40%",height:"30%"}))}l.isMDXComponent=!0}}]);