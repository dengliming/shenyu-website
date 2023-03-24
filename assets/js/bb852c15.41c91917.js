"use strict";(self.webpackChunkshenyu_website=self.webpackChunkshenyu_website||[]).push([[22092],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>y});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),l=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),u=l(a),m=r,y=u["".concat(s,".").concat(m)]||u[m]||d[m]||o;return a?n.createElement(y,i(i({ref:t},c),{},{components:a})):n.createElement(y,i({ref:t},c))}));function y(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=m;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p[u]="string"==typeof e?e:r,i[1]=p;for(var l=2;l<o;l++)i[l]=a[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},83222:(e,t,a)=>{a.r(t),a.d(t,{contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>p,toc:()=>s});var n=a(87462),r=(a(67294),a(3905));const o={title:"Sofa Proxy",keywords:["Sofa"],description:"sofa access shenyu gateway"},i=void 0,p={unversionedId:"user-guide/proxy/sofa-rpc-proxy",id:"version-2.4.2/user-guide/proxy/sofa-rpc-proxy",isDocsHomePage:!1,title:"Sofa Proxy",description:"sofa access shenyu gateway",source:"@site/versioned_docs/version-2.4.2/user-guide/proxy/sofa-rpc-proxy.md",sourceDirName:"user-guide/proxy",slug:"/user-guide/proxy/sofa-rpc-proxy",permalink:"/docs/2.4.2/user-guide/proxy/sofa-rpc-proxy",editUrl:"https://github.com/apache/shenyu-website/edit/main/versioned_docs/version-2.4.2/user-guide/proxy/sofa-rpc-proxy.md",version:"2.4.2",frontMatter:{title:"Sofa Proxy",keywords:["Sofa"],description:"sofa access shenyu gateway"},sidebar:"version-2.4.2/tutorialSidebar",previous:{title:"Motan Proxy",permalink:"/docs/2.4.2/user-guide/proxy/motan-proxy"},next:{title:"Spring Cloud Proxy",permalink:"/docs/2.4.2/user-guide/proxy/spring-cloud-proxy"}},s=[{value:"Add sofa plugin in gateway",id:"add-sofa-plugin-in-gateway",children:[]},{value:"Plugin Settings",id:"plugin-settings",children:[]},{value:"Interface registered to the gateway",id:"interface-registered-to-the-gateway",children:[]},{value:"User request and parameter description",id:"user-request-and-parameter-description",children:[]}],l={toc:s},c="wrapper";function u(e){let{components:t,...a}=e;return(0,r.kt)(c,(0,n.Z)({},l,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"This document is intended to help the ",(0,r.kt)("inlineCode",{parentName:"p"},"Sofa")," service access the ",(0,r.kt)("inlineCode",{parentName:"p"},"Apache ShenYu")," gateway. The ",(0,r.kt)("inlineCode",{parentName:"p"},"Apache ShenYu")," gateway uses the ",(0,r.kt)("inlineCode",{parentName:"p"},"Sofa")," plugin to handle ",(0,r.kt)("inlineCode",{parentName:"p"},"sofa")," service."),(0,r.kt)("p",null,"Before the connection, start ",(0,r.kt)("inlineCode",{parentName:"p"},"shenyu-admin")," correctly, start ",(0,r.kt)("inlineCode",{parentName:"p"},"Sofa")," plugin, and add related dependencies on the gateway and ",(0,r.kt)("inlineCode",{parentName:"p"},"Sofa")," application client. Refer to the previous ",(0,r.kt)("a",{parentName:"p",href:"../quick-start/quick-start-sofa"},"Quick start with Sofa")," ."),(0,r.kt)("p",null,"For details about client access configuration, see ",(0,r.kt)("a",{parentName:"p",href:"./register-center-access"},"Application Client Access Config")," ."),(0,r.kt)("p",null,"For details about data synchronization configurations, see ",(0,r.kt)("a",{parentName:"p",href:"./use-data-sync"},"Data Synchronization Config")," ."),(0,r.kt)("h2",{id:"add-sofa-plugin-in-gateway"},"Add sofa plugin in gateway"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Add the following dependencies in the gateway's ",(0,r.kt)("inlineCode",{parentName:"p"},"pom.xml")," file\uff1a")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Replace the sofa version with yours, and replace the jar package in the registry with yours, The following is a reference\u3002"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-xml"},"\n       <dependency>\n           <groupId>com.alipay.sofa</groupId>\n           <artifactId>sofa-rpc-all</artifactId>\n           <version>5.7.6</version>\n           <exclusions>\n               <exclusion>\n                   <groupId>net.jcip</groupId>\n                   <artifactId>jcip-annotations</artifactId>\n               </exclusion>\n           </exclusions>\n       </dependency>\n       <dependency>\n           <groupId>org.apache.curator</groupId>\n           <artifactId>curator-client</artifactId>\n           <version>4.0.1</version>\n       </dependency>\n       <dependency>\n           <groupId>org.apache.curator</groupId>\n           <artifactId>curator-framework</artifactId>\n           <version>4.0.1</version>\n       </dependency>\n       <dependency>\n           <groupId>org.apache.curator</groupId>\n           <artifactId>curator-recipes</artifactId>\n           <version>4.0.1</version>\n       </dependency>\n       <dependency>\n           <groupId>org.apache.shenyu</groupId>\n           <artifactId>shenyu-spring-boot-starter-plugin-sofa</artifactId>\n           <version>${project.version}</version>\n       </dependency>\n")))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"\n* Restart the gateway service.\n\n## Sofa service access gateway\n\nyou can refer to\uff1a[shenyu-examples-sofa](https://github.com/apache/incubator-shenyu/tree/v2.4.2/shenyu-examples/shenyu-examples-sofa)\n\n* SpringBoot\n\n  Add the following dependencies :\n\n ```xml\n        <dependency>\n            <groupId>org.apache.shenyu</groupId>\n            <artifactId>shenyu-spring-boot-starter-client-sofa</artifactId>\n            <version>${shenyu.version}</version>\n        </dependency>\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Spring"),(0,r.kt)("p",{parentName:"li"}," Add the following dependencies:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-xml"},"       <dependency>\n           <groupId>org.apache.shenyu</groupId>\n           <artifactId>shenyu-client-sofa</artifactId>\n           <version>${shenyu.version}</version>\n       </dependency>\n")))),(0,r.kt)("p",null,"Add the following in the xml file of your bean definition:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-xml"},'      <bean id ="sofaServiceBeanPostProcessor" class ="org.apache.shenyu.client.sofa.SofaServiceBeanPostProcessor">\n           <constructor-arg  ref="shenyuRegisterCenterConfig"/>\n      </bean>\n\n   <bean id="shenyuRegisterCenterConfig" class="org.apache.shenyu.register.common.config.ShenyuRegisterCenterConfig">\n     <property name="registerType" value="http"/>\n     <property name="serverList" value="http://localhost:9095"/>\n     <property name="props">\n          <map>\n               <entry key="contextPath" value="/your contextPath"/>\n               <entry key="appName" value="your name"/>\n               <entry key="isFull" value="false"/>\n          </map>\n     </property>\n  </bean>\n')),(0,r.kt)("h2",{id:"plugin-settings"},"Plugin Settings"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"First in the ",(0,r.kt)("inlineCode",{parentName:"p"},"shenyu-admin")," plugin management, set the ",(0,r.kt)("inlineCode",{parentName:"p"},"sofa")," plugin to open.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Secondly, configure your registered address in the ",(0,r.kt)("inlineCode",{parentName:"p"},"sofa")," plugin, or the address of other registry."))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'{"protocol":"zookeeper","register":"127.0.0.1:2181"}\n')),(0,r.kt)("h2",{id:"interface-registered-to-the-gateway"},"Interface registered to the gateway"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"For your sofa service implementation class, add ",(0,r.kt)("inlineCode",{parentName:"p"},"@ShenyuSofaClient")," annotation to the method\uff0cIndicates that the interface method is registered to the gateway.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Start the sofa service provider, after successful registration, enter the pluginList -> rpc proxy -> sofa in the background management system, you will see the automatic registration of selectors and rules information."))),(0,r.kt)("h2",{id:"user-request-and-parameter-description"},"User request and parameter description"),(0,r.kt)("p",null,"ShenYu gateway needs to have a routing prefix, this routing prefix is for you to access the project for configuration ",(0,r.kt)("inlineCode",{parentName:"p"},"contextPath")," ."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"For example, if you have an ",(0,r.kt)("inlineCode",{parentName:"p"},"order")," service, it has an interface and its registration path ",(0,r.kt)("inlineCode",{parentName:"p"},"/order/test/save")),(0,r.kt)("p",{parentName:"blockquote"},"Now it's to request the gateway via post\uff1a",(0,r.kt)("inlineCode",{parentName:"p"},"http://localhost:9195/order/test/save")),(0,r.kt)("p",{parentName:"blockquote"},"Where ",(0,r.kt)("inlineCode",{parentName:"p"},"localhost:9195")," is the IP port of the gateway, default port is ",(0,r.kt)("inlineCode",{parentName:"p"},"9195"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"/order")," is the ",(0,r.kt)("inlineCode",{parentName:"p"},"contextPath")," of your sofa access gateway configuration")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Parameter passing\uff1a"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Access the gateway through http post\uff0cand pass through body and json."),(0,r.kt)("li",{parentName:"ul"},"For more parameter type transfer, please refer to the interface definition in ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/shenyu/tree/v2.4.2/shenyu-examples/shenyu-examples-sofa"},"shenyu-examples-sofa")," and the parameter transfer method."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Single java bean parameter type (default)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Customize multi-parameter support:")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"In the gateway project you built, add a new class ",(0,r.kt)("inlineCode",{parentName:"p"},"MySofaParamResolveService"),", implements ",(0,r.kt)("inlineCode",{parentName:"p"},"org.apache.shenyu.plugin.api.sofa.SofaParamResolveService")," ."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-java"},"   public interface SofaParamResolveService {\n   \n       /**\n        * Build parameter pair.\n        * this is Resolve http body to get sofa param.\n        *\n        * @param body           the body\n        * @param parameterTypes the parameter types\n        * @return the pair\n        */\n       Pair<String[], Object[]> buildParameter(String body, String parameterTypes);\n   }\n"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"body")," is the json string passed by body in http.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"parameterTypes"),": list of matched method parameter types, If there are multiple, use ",(0,r.kt)("inlineCode",{parentName:"p"},",")," to separate.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"In Pair\uff0cleft is the parameter type\uff0cand right is the parameter value. This is the standard for sofa generalization calls.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Register your class as a String bean and override the default implementation."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-java"},"@Bean\npublic SofaParamResolveService mySofaParamResolveService() {\n   return new MySofaParamResolveService();\n}\n")))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"")))}u.isMDXComponent=!0}}]);