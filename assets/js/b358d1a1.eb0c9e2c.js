"use strict";(self.webpackChunkshenyu_website=self.webpackChunkshenyu_website||[]).push([[26289],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>m});var i=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},l=Object.keys(e);for(i=0;i<l.length;i++)n=l[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(i=0;i<l.length;i++)n=l[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=i.createContext({}),p=function(e){var t=i.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},s=function(e){var t=p(e.components);return i.createElement(o.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},g=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),c=p(n),g=r,m=c["".concat(o,".").concat(g)]||c[g]||d[g]||l;return n?i.createElement(m,a(a({ref:t},s),{},{components:n})):i.createElement(m,a({ref:t},s))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,a=new Array(l);a[0]=g;var u={};for(var o in t)hasOwnProperty.call(t,o)&&(u[o]=t[o]);u.originalType=e,u[c]="string"==typeof e?e:r,a[1]=u;for(var p=2;p<l;p++)a[p]=n[p];return i.createElement.apply(null,a)}return i.createElement.apply(null,n)}g.displayName="MDXCreateElement"},53714:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>a,default:()=>c,frontMatter:()=>l,metadata:()=>u,toc:()=>o});var i=n(87462),r=(n(67294),n(3905));const l={title:"JWT plugin",keywords:["JWT"],description:"JWT plugin"},a=void 0,u={unversionedId:"plugin-center/security/jwt-plugin",id:"version-2.5.1/plugin-center/security/jwt-plugin",isDocsHomePage:!1,title:"JWT plugin",description:"JWT plugin",source:"@site/versioned_docs/version-2.5.1/plugin-center/security/jwt-plugin.md",sourceDirName:"plugin-center/security",slug:"/plugin-center/security/jwt-plugin",permalink:"/docs/plugin-center/security/jwt-plugin",editUrl:"https://github.com/apache/shenyu-website/edit/main/versioned_docs/version-2.5.1/plugin-center/security/jwt-plugin.md",version:"2.5.1",frontMatter:{title:"JWT plugin",keywords:["JWT"],description:"JWT plugin"},sidebar:"version-2.5.1/tutorialSidebar",previous:{title:"CryptorResponse plugin",permalink:"/docs/plugin-center/security/cryptor-response-plugin"},next:{title:"OAuth2 Plugin",permalink:"/docs/plugin-center/security/oauth2-plugin"}},o=[{value:"1.1 Plugin Name",id:"11-plugin-name",children:[]},{value:"1.2 Appropriate Scenario",id:"12-appropriate-scenario",children:[]},{value:"1.3 Plugin functionality",id:"13-plugin-functionality",children:[]},{value:"1.4 Plugin code",id:"14-plugin-code",children:[]},{value:"1.5 Added Since Which shenyu version",id:"15-added-since-which-shenyu-version",children:[]},{value:"2.1 Plugin-use procedure chart",id:"21-plugin-use-procedure-chart",children:[]},{value:"2.2 Import pom",id:"22-import-pom",children:[]},{value:"2.3 Enable plugin",id:"23-enable-plugin",children:[]},{value:"2.4 Config plugin",id:"24-config-plugin",children:[{value:"2.4.1 Config plugin in ShenYu-Admin",id:"241-config-plugin-in-shenyu-admin",children:[]},{value:"2.4.2 Selector config",id:"242-selector-config",children:[]},{value:"2.4.3 Rule Config",id:"243-rule-config",children:[]}]},{value:"2.5 Examples",id:"25-examples",children:[{value:"2.5.1 Use jwt token for authentication judgment",id:"251-use-jwt-token-for-authentication-judgment",children:[]}]}],p={toc:o},s="wrapper";function c(e){let{components:t,...l}=e;return(0,r.kt)(s,(0,i.Z)({},p,l,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("hr",null),(0,r.kt)("h1",{id:"1-overview"},"1. Overview"),(0,r.kt)("h2",{id:"11-plugin-name"},"1.1 Plugin Name"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"jwt")," plugin")),(0,r.kt)("h2",{id:"12-appropriate-scenario"},"1.2 Appropriate Scenario"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Requires unified authentication by jwt at the gateway.")),(0,r.kt)("h2",{id:"13-plugin-functionality"},"1.3 Plugin functionality"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The ",(0,r.kt)("inlineCode",{parentName:"li"},"jwt")," plug-in is for the ",(0,r.kt)("inlineCode",{parentName:"li"},"token")," attribute or ",(0,r.kt)("inlineCode",{parentName:"li"},"authorization")," of the http request header to carry the attribute value for authentication judgment and judge ",(0,r.kt)("inlineCode",{parentName:"li"},"OAuth2.0")," .")),(0,r.kt)("h2",{id:"14-plugin-code"},"1.4 Plugin code"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Core module is ",(0,r.kt)("inlineCode",{parentName:"li"},"shenyu-plugin-jwt"),"."),(0,r.kt)("li",{parentName:"ul"},"Core class is ",(0,r.kt)("inlineCode",{parentName:"li"},"org.apache.shenyu.plugin.jwt.JwtPlugin"),".")),(0,r.kt)("h2",{id:"15-added-since-which-shenyu-version"},"1.5 Added Since Which shenyu version"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Since ShenYu 2.4.0")),(0,r.kt)("h1",{id:"2how-to-use-plugin"},"2.How to use plugin"),(0,r.kt)("h2",{id:"21-plugin-use-procedure-chart"},"2.1 Plugin-use procedure chart"),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(74327).Z})),(0,r.kt)("h2",{id:"22-import-pom"},"2.2 Import pom"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-xml"},"<dependency>\n    <groupId>org.apache.shenyu</groupId>\n    <artifactId>shenyu-spring-boot-starter-plugin-jwt</artifactId>\n    <version>${project.version}</version>\n</dependency>\n")),(0,r.kt)("h2",{id:"23-enable-plugin"},"2.3 Enable plugin"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"In shenyu-admin --\x3e BasicConfig --\x3e Plugin --\x3e jwt set Status enable.")),(0,r.kt)("h2",{id:"24-config-plugin"},"2.4 Config plugin"),(0,r.kt)("h3",{id:"241-config-plugin-in-shenyu-admin"},"2.4.1 Config plugin in ShenYu-Admin"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Config secretKey of jwt-plugin in shenyu-admin, the secretKey must more than 256 bit."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"secretKey"),": The private key when using ",(0,r.kt)("inlineCode",{parentName:"li"},"jwt")," to generate ",(0,r.kt)("inlineCode",{parentName:"li"},"token"),", it is required.")),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(46605).Z})),(0,r.kt)("h3",{id:"242-selector-config"},"2.4.2 Selector config"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Selector and rule Config. Please refer: ",(0,r.kt)("a",{parentName:"li",href:"/docs/user-guide/admin-usage/selector-and-rule"},"Selector and rule config"),".")),(0,r.kt)("h3",{id:"243-rule-config"},"2.4.3 Rule Config"),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(77497).Z})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"convert means jwt converter"),(0,r.kt)("li",{parentName:"ul"},"jwtVal: jwt of body name"),(0,r.kt)("li",{parentName:"ul"},"headerVal: jwt header name")),(0,r.kt)("p",null,"custom covert algorithm\uff1a",(0,r.kt)("a",{parentName:"p",href:"/docs/developer/custom-jwt-covert-algorithm"},"custom-jwt-covert-algorithm")),(0,r.kt)("h2",{id:"25-examples"},"2.5 Examples"),(0,r.kt)("h3",{id:"251-use-jwt-token-for-authentication-judgment"},"2.5.1 Use jwt token for authentication judgment"),(0,r.kt)("h4",{id:"2511-config-jwt-plugin"},"2.5.1.1 Config jwt-plugin"),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(46605).Z})),(0,r.kt)("h4",{id:"2512-config-selector-match-service"},"2.5.1.2 Config selector match service"),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(37210).Z})),(0,r.kt)("h4",{id:"2513-config-rule-match-service"},"2.5.1.3 Config rule match service"),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(77497).Z})),(0,r.kt)("h4",{id:"2514-generate-json-web-tokenjwt-with-website"},"2.5.1.4 Generate json web token(jwt) with website"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"You can open ",(0,r.kt)("inlineCode",{parentName:"li"},"https://jwt.io/")," in your browser and fill in the corresponding parameters."),(0,r.kt)("li",{parentName:"ul"},"Config jwt header ",(0,r.kt)("inlineCode",{parentName:"li"},"HEADER")," in ",(0,r.kt)("inlineCode",{parentName:"li"},"https://jwt.io/")),(0,r.kt)("li",{parentName:"ul"},"Config jwt body ",(0,r.kt)("inlineCode",{parentName:"li"},"PAYLOAD")," in ",(0,r.kt)("inlineCode",{parentName:"li"},"https://jwt.io/")," "),(0,r.kt)("li",{parentName:"ul"},"Config jwt signature ",(0,r.kt)("inlineCode",{parentName:"li"},"VERIFY SIGNATURE")," in ",(0,r.kt)("inlineCode",{parentName:"li"},"https://jwt.io/"))),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(61864).Z})),(0,r.kt)("h4",{id:"2515-generate-json-web-tokenjwt-with-java-code"},"2.5.1.5 Generate json web token(jwt) with java code"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'public final class JwtPluginTest {\n    \n  public void generateJwtCode() {\n    final String secreteKey = "shenyu-test-shenyu-test-shenyu-test";\n    Map<String, String> map = new HashMap<>();\n    map.put("id", "1");\n    map.put("name", "xiaoming");\n    Date date = new Date();\n    date.setTime(1655524800000L);\n    String token = Jwts.builder()\n            .setIssuedAt(date)\n            .setExpiration(new Date())\n            .setClaims(map)\n            .signWith(Keys.hmacShaKeyFor(secreteKey.getBytes(StandardCharsets.UTF_8)), SignatureAlgorithm.HS256)\n            .compact();\n    System.out.println(token);\n  }\n}\n')),(0,r.kt)("h4",{id:"2516-request-service"},"2.5.1.6 Request Service"),(0,r.kt)("h5",{id:"25161-request-service-with-token"},"2.5.1.6.1 Request service with token"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"request your service with jwt token ",(0,r.kt)("inlineCode",{parentName:"li"},"token: eyJhbGciOiJIUzI1NiJ9.eyJuYW1lIjoieGlhb21pbmciLCJpZCI6IjEifQ.LdRzGlB49alhq204chwF7pf3C0z8ZpuowPvoQdJmSRw")," in your request header.")),(0,r.kt)("h5",{id:"25162-request-service-authorization"},"2.5.1.6.2 Request service Authorization"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"request your service with Authorization ",(0,r.kt)("inlineCode",{parentName:"li"},"Authorization: Bearer eyJhbGciOiJIUzI1NiJ9.eyJuYW1lIjoieGlhb21pbmciLCJpZCI6IjEifQ.LdRzGlB49alhq204chwF7pf3C0z8ZpuowPvoQdJmSRw")," in your request header.")),(0,r.kt)("h4",{id:"2517-validate-request-result"},"2.5.1.7 Validate request result"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"error token request result")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'{\n  "code": 401,\n  "message": "Illegal authorization"\n}\n')),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"normal token request result")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'{\n  "id": "123",\n  "name": "hello world save order"\n}\n')),(0,r.kt)("h1",{id:"3-how-to-disable-plugin"},"3. How to disable plugin"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"In ",(0,r.kt)("inlineCode",{parentName:"li"},"shenyu-admin")," --\x3e BasicConfig --\x3e Plugin --\x3e ",(0,r.kt)("inlineCode",{parentName:"li"},"jwt")," set Status disable.")),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(13394).Z})))}c.isMDXComponent=!0},13394:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/jwt-plugin-close_en-47c04e90a85f27746b2a9b3e771de5a9.jpg"},46605:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/jwt-plugin-config-en-41fdb635e52370b6882c09741a0c29aa.jpg"},77497:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/jwt-plugin-rule-handle-en-3efcc377c242e0047edd129a535d50d5.jpg"},37210:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/jwt-plugin-selector-config-en-73506b6e96a35eac7fe268145cebbc3b.jpg"},61864:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/jwt-web-428e7d369c17035e0daa838740150227.jpg"},74327:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/plugin_use_en-8b5661551cdf92fdabc9cb2e7947cffc.jpg"}}]);