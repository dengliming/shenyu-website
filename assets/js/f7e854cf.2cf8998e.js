"use strict";(self.webpackChunkshenyu_website=self.webpackChunkshenyu_website||[]).push([[4879],{3905:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>g});var a=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var l=a.createContext({}),c=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},d=function(e){var n=c(e.components);return a.createElement(l.Provider,{value:n},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},h=a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=c(t),h=i,g=p["".concat(l,".").concat(h)]||p[h]||u[h]||r;return t?a.createElement(g,o(o({ref:n},d),{},{components:t})):a.createElement(g,o({ref:n},d))}));function g(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var r=t.length,o=new Array(r);o[0]=h;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s[p]="string"==typeof e?e:i,o[1]=s;for(var c=2;c<r;c++)o[c]=t[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}h.displayName="MDXCreateElement"},21038:(e,n,t)=>{t.r(n),t.d(n,{contentTitle:()=>o,default:()=>p,frontMatter:()=>r,metadata:()=>s,toc:()=>l});var a=t(87462),i=(t(67294),t(3905));const r={title:"Using Consul with Shenyu-SDK",keywords:["Using Shenyu-Sdk","Consul"],description:"Using Shenyu-Sdk"},o=void 0,s={unversionedId:"user-guide/sdk-usage/shenyu-sdk-consul",id:"version-2.5.1/user-guide/sdk-usage/shenyu-sdk-consul",isDocsHomePage:!1,title:"Using Consul with Shenyu-SDK",description:"Using Shenyu-Sdk",source:"@site/versioned_docs/version-2.5.1/user-guide/sdk-usage/shenyu-sdk-consul.md",sourceDirName:"user-guide/sdk-usage",slug:"/user-guide/sdk-usage/shenyu-sdk-consul",permalink:"/docs/user-guide/sdk-usage/shenyu-sdk-consul",editUrl:"https://github.com/apache/shenyu-website/edit/main/versioned_docs/version-2.5.1/user-guide/sdk-usage/shenyu-sdk-consul.md",version:"2.5.1",frontMatter:{title:"Using Consul with Shenyu-SDK",keywords:["Using Shenyu-Sdk","Consul"],description:"Using Shenyu-Sdk"},sidebar:"version-2.5.1/tutorialSidebar",previous:{title:"Data Synchronization Config",permalink:"/docs/user-guide/property-config/use-data-sync"},next:{title:"Using Etcd with Shenyu-SDK",permalink:"/docs/user-guide/sdk-usage/shenyu-sdk-etcd"}},l=[{value:"Background explanation",id:"background-explanation",children:[]},{value:"Environment preparation",id:"environment-preparation",children:[]},{value:"shenyu-bootstrap",id:"shenyu-bootstrap",children:[{value:"Maven dependency",id:"maven-dependency",children:[]},{value:"Edit the configuration file",id:"edit-the-configuration-file",children:[]}]},{value:"Client Application",id:"client-application",children:[{value:"Maven dependency",id:"maven-dependency-1",children:[]},{value:"Edit the configuration file",id:"edit-the-configuration-file-1",children:[]}]},{value:"Writing the local interface for the SDK",id:"writing-the-local-interface-for-the-sdk",children:[]}],c={toc:l},d="wrapper";function p(e){let{components:n,...t}=e;return(0,i.kt)(d,(0,a.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"background-explanation"},"Background explanation"),(0,i.kt)("p",null,"Shenyu offers Shenyu-Sdk to make it easy for services to quickly integrate with the Shenyu gateway. By simply depending on the SDK and doing some simple configuration, client services can call the gateway's exposed APIs as if they were calling local interfaces."),(0,i.kt)("img",{src:"/img/shenyu/sdk/shenyu-sdk_process.png",width:"80%",height:"50%"}),(0,i.kt)("p",null,"The registration center supported by the gateway for client access includes (nacos, eureka, etcd, zookeeper, consul), and the following is the relevant guide for using ",(0,i.kt)("strong",{parentName:"p"},"Zookeeper")," registration center when ",(0,i.kt)("inlineCode",{parentName:"p"},"shenyu-bootstrap")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"application client")," are used."),(0,i.kt)("h2",{id:"environment-preparation"},"Environment preparation"),(0,i.kt)("p",null,"Refer to ",(0,i.kt)("inlineCode",{parentName:"p"},"Deployment")," guide, and choose a way to start ",(0,i.kt)("inlineCode",{parentName:"p"},"shenyu-admin")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"shenyu-bootstrap"),"."),(0,i.kt)("h2",{id:"shenyu-bootstrap"},"shenyu-bootstrap"),(0,i.kt)("h3",{id:"maven-dependency"},"Maven dependency"),(0,i.kt)("p",null,"In the gateway's ",(0,i.kt)("inlineCode",{parentName:"p"},"pom.xml")," file, introduce the following dependencies."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-xml"},"<dependency>\n    <groupId>org.apache.shenyu</groupId>\n    <artifactId>shenyu-spring-boot-starter-instance</artifactId>\n    <version>${project.version}</version>\n</dependency>\n")),(0,i.kt)("h3",{id:"edit-the-configuration-file"},"Edit the configuration file"),(0,i.kt)("p",null,"Add the following configuration to the gateway's ",(0,i.kt)("inlineCode",{parentName:"p"},"yml")," configuration file."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"shenyu:\n  register:\n    enabled: true\n    registerType: consul\n    serverLists: localhost\n    props:\n      delay: 1\n      wait-time: 55\n      instanceId: shenyu-gateway\n      hostName: localhost\n      tags: test1,test2\n      preferAgentAddress: false\n      enableTagOverride: false\n\n# registerType: service registration type, fill in consul\n# serverLists: consul client agent address (sidecar deployment mode (single machine or cluster), can also be the address of consul server agent (can only connect to one consul server agent node, if it is a cluster, then there will be a single point of failure problem))\n# delay: the polling interval of each metadata monitoring, unit: second, default 1 second\n# wait-time: the waiting time of a single request for metadata monitoring (long polling mechanism), unit: second, default 55 seconds\n# instanceId: required for consul service, consul needs to find specific services through instance-id\n# name: the group name where the service is registered to consul\n# hostName: for consul registration type, fill in the address of the registered service instance, the address of the registered service instance in this registration center will not be used for client calls, so this configuration can be omitted, port, preferAgentAddress similarly\n# port: for consul registration type, fill in the port of the registered service instance\n# tags: corresponding to the tags configuration in consul configuration\n# preferAgentAddress: use the address of the agent on the consul client side as the address of the registered service instance, which will override the manual configuration of hostName\n# enableTagOverride: corresponding to the enableTagOverride configuration in consul configuration for detailed reference, please see the user guide> attribute configuration> client access configuration document\n\n# for detailed reference, please see the `user-guide> Property Config> Register Center Instance Config` configuration document.\n")),(0,i.kt)("h2",{id:"client-application"},"Client Application"),(0,i.kt)("h3",{id:"maven-dependency-1"},"Maven dependency"),(0,i.kt)("p",null,"In the ",(0,i.kt)("inlineCode",{parentName:"p"},"pom.xml")," file of the application client, introduce the following dependencies."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Shenyu-Sdk Core")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-xml"},"<dependencies>\n    <dependency>\n        <groupId>org.apache.shenyu</groupId>\n        <artifactId>shenyu-sdk-core</artifactId>\n        <version>2.5.1-SNAPSHOT</version>\n    </dependency>\n\n    <dependency>\n        <groupId>org.apache.shenyu</groupId>\n        <artifactId>shenyu-spring-boot-starter-sdk</artifactId>\n        <version>2.5.1-SNAPSHOT</version>\n    </dependency>\n</dependencies>\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Shenyu-Sdk http implementation")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"HTTP client implementation, offering okhttp and httpclient as implementation options. Other implementations can be created by extending the ",(0,i.kt)("inlineCode",{parentName:"p"},"AbstractShenyuSdkClient")," class.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-xml"},"\x3c!-- httpclient --\x3e\n<dependency>\n    <groupId>org.apache.shenyu</groupId>\n    <artifactId>shenyu-sdk-httpclient</artifactId>\n    <version>2.5.1-SNAPSHOT</version>\n</dependency>\n\n\x3c!-- okhttp --\x3e\n\x3c!-- \n<dependency>\n    <groupId>org.apache.shenyu</groupId>\n    <artifactId>shenyu-sdk-okhttp</artifactId>\n    <version>2.5.1-SNAPSHOT</version>\n</dependency>\n--\x3e\n")),(0,i.kt)("h3",{id:"edit-the-configuration-file-1"},"Edit the configuration file"),(0,i.kt)("p",null,"Add the following configuration in the application client's ",(0,i.kt)("inlineCode",{parentName:"p"},"yml")," configuration file."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},'shenyu:\n  sdk:\n    enabled: true\n    register-type: consul\n    server-lists: localhost\n    props:\n      checkTtl: 5\n      token: ""\n      waitTime: 30\n      watchDelay: 5\n      tags: ""\n      port: 8500\n      retry:\n        enable: true\n        period: 100\n        maxPeriod: 1000\n        maxAttempts: 5\n      algorithm: roundRobin\n      scheme: http\n      \n# registerType: service registration type, fill in consul.\n# serverLists: consul client agent address (sidecar deployment mode (single machine or cluster), can also be the address of consul server agent (can only connect to one consul server agent node, if it is a cluster, then there will be a single point of failure problem)).\n# checkTtl: TTL, Default 5 seconds.\n# token: ""\n# waitTime: The waiting time for a single request for monitoring metadata (long polling mechanism), in seconds, with a default value of 55 seconds.\n# watchDelay: The interval duration for each polling of metadata monitoring, in seconds, with a default value of 1 second.\n# tags: tags for consul configure.\n# port: consul server port.\n# scheme: Request protocol.\n\n# retry Configuration related to failure retries\n# retry.period: Retry waiting time.\n# retry.maxPeriod: Maximum retry waiting time .\n# retry.maxAttempts: Maximum retry count.\n')),(0,i.kt)("h2",{id:"writing-the-local-interface-for-the-sdk"},"Writing the local interface for the SDK"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"In the project startup class, annotate ",(0,i.kt)("inlineCode",{parentName:"p"},'@EnableShenyuClients(basePackages = "org.apache.shenyu.examples.sdk.http.api")'),", where ",(0,i.kt)("inlineCode",{parentName:"p"},"basePackages")," maintains the package location of Shenyu-Sdk's corresponding maintained gateway API interface.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Create an interface and use the ",(0,i.kt)("inlineCode",{parentName:"p"},'@ShenyuClient(name = "xxx", contextId = "ShenyuSdkApiName")')," annotation to mark it, where ",(0,i.kt)("inlineCode",{parentName:"p"},"name")," represents the gateway service name. If you need to define multiple beans to maintain the gateway's API, you can use ",(0,i.kt)("inlineCode",{parentName:"p"},"contextId")," as the corresponding bean alias.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"In the defined interface, add the methods of the interface to be mapped to the shenyu gateway, where the ",(0,i.kt)("inlineCode",{parentName:"p"},"value")," of ",(0,i.kt)("inlineCode",{parentName:"p"},"@xxMapping")," corresponds to the path of the corresponding request in the gateway."))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Example")),(0,i.kt)("p",null,"Project startup class"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'@SpringBootApplication\n@EnableShenyuClients(basePackages = "org.apache.shenyu.examples.sdk.http.api")\npublic class ShenyuSdkHttpExampleApplication {\n\n    /**\n     * main.\n     *\n     * @param args args\n     */\n    public static void main(final String[] args) {\n        SpringApplication.run(ShenyuSdkHttpExampleApplication.class, args);\n    }\n}\n')),(0,i.kt)("p",null,"Shenyu-SDK interface"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'@ShenyuClient(name = "shenyu-gateway", contextId = "ShenyuSdkApiName")\npublic interface ShenyuHttpClientApi {\n\n    /**\n     * findById.\n     * test Get.\n     *\n     * @param id id\n     * @return SdkTestDto\n     */\n    @GetMapping("/http/shenyu/client/findById")\n    SdkTestDto findById(@RequestParam("id") String id);\n}\n')),(0,i.kt)("p",null,"For more information, refer to the sample project ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/apache/shenyu/tree/master/shenyu-examples/shenyu-examples-sdk"},"shenyu-examples-sdk")))}p.isMDXComponent=!0}}]);