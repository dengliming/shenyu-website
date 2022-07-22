"use strict";(self.webpackChunkshenyu_website=self.webpackChunkshenyu_website||[]).push([[89737],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var i=n(67294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,i,l=function(e,t){if(null==e)return{};var n,i,l={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var o=i.createContext({}),p=function(e){var t=i.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=p(e.components);return i.createElement(o.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},s=i.forwardRef((function(e,t){var n=e.components,l=e.mdxType,r=e.originalType,o=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),s=p(n),m=l,k=s["".concat(o,".").concat(m)]||s[m]||d[m]||r;return n?i.createElement(k,a(a({ref:t},c),{},{components:n})):i.createElement(k,a({ref:t},c))}));function m(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=n.length,a=new Array(r);a[0]=s;var u={};for(var o in t)hasOwnProperty.call(t,o)&&(u[o]=t[o]);u.originalType=e,u.mdxType="string"==typeof e?e:l,a[1]=u;for(var p=2;p<r;p++)a[p]=n[p];return i.createElement.apply(null,a)}return i.createElement.apply(null,n)}s.displayName="MDXCreateElement"},11985:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>a,default:()=>c,frontMatter:()=>r,metadata:()=>u,toc:()=>o});var i=n(87462),l=(n(67294),n(3905));const r={title:"JWT\u63d2\u4ef6",keywords:["JWT"],description:"JWT\u63d2\u4ef6"},a=void 0,u={unversionedId:"plugin-center/authority-and-certification/jwt-plugin",id:"plugin-center/authority-and-certification/jwt-plugin",isDocsHomePage:!1,title:"JWT\u63d2\u4ef6",description:"JWT\u63d2\u4ef6",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/plugin-center/authority-and-certification/jwt-plugin.md",sourceDirName:"plugin-center/authority-and-certification",slug:"/plugin-center/authority-and-certification/jwt-plugin",permalink:"/zh/docs/next/plugin-center/authority-and-certification/jwt-plugin",editUrl:"https://github.com/apache/incubator-shenyu-website/edit/main/i18n/zh/docusaurus-plugin-content-docs/current/plugin-center/authority-and-certification/jwt-plugin.md",version:"current",frontMatter:{title:"JWT\u63d2\u4ef6",keywords:["JWT"],description:"JWT\u63d2\u4ef6"},sidebar:"tutorialSidebar",previous:{title:"CryptorResponse \u63d2\u4ef6",permalink:"/zh/docs/next/plugin-center/authority-and-certification/cryptor-response-plugin"},next:{title:"OAuth2\u63d2\u4ef6",permalink:"/zh/docs/next/plugin-center/authority-and-certification/oauth2-plugin"}},o=[{value:"1.1 \u63d2\u4ef6\u540d\u79f0",id:"11-\u63d2\u4ef6\u540d\u79f0",children:[]},{value:"1.2 \u9002\u7528\u573a\u666f",id:"12-\u9002\u7528\u573a\u666f",children:[]},{value:"1.3 \u63d2\u4ef6\u529f\u80fd",id:"13-\u63d2\u4ef6\u529f\u80fd",children:[]},{value:"1.4 \u63d2\u4ef6\u4ee3\u7801",id:"14-\u63d2\u4ef6\u4ee3\u7801",children:[]},{value:"1.5 \u6dfb\u52a0\u81ea\u54ea\u4e2aShenYu\u7248\u672c",id:"15-\u6dfb\u52a0\u81ea\u54ea\u4e2ashenyu\u7248\u672c",children:[]},{value:"2.1 \u63d2\u4ef6\u4f7f\u7528\u6d41\u7a0b\u56fe",id:"21-\u63d2\u4ef6\u4f7f\u7528\u6d41\u7a0b\u56fe",children:[]},{value:"2.2 \u5bfc\u5165pom",id:"22-\u5bfc\u5165pom",children:[]},{value:"2.3 \u542f\u7528\u63d2\u4ef6",id:"23-\u542f\u7528\u63d2\u4ef6",children:[]},{value:"2.4 \u914d\u7f6e\u63d2\u4ef6",id:"24-\u914d\u7f6e\u63d2\u4ef6",children:[{value:"2.4.1 Config plugin in ShenYu-Admin",id:"241-config-plugin-in-shenyu-admin",children:[]},{value:"2.4.2 Selector config",id:"242-selector-config",children:[]},{value:"2.4.3 Rule Config",id:"243-rule-config",children:[]}]},{value:"2.5 \u793a\u4f8b",id:"25-\u793a\u4f8b",children:[{value:"2.5.1 \u4f7f\u7528jwt\u63d2\u4ef6\u8fdb\u884c\u6743\u9650\u8ba4\u8bc1",id:"251-\u4f7f\u7528jwt\u63d2\u4ef6\u8fdb\u884c\u6743\u9650\u8ba4\u8bc1",children:[]}]}],p={toc:o};function c(e){let{components:t,...r}=e;return(0,l.kt)("wrapper",(0,i.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("hr",null),(0,l.kt)("h1",{id:"1\u6982\u8ff0"},"1.\u6982\u8ff0"),(0,l.kt)("h2",{id:"11-\u63d2\u4ef6\u540d\u79f0"},"1.1 \u63d2\u4ef6\u540d\u79f0"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"jwt")," \u63d2\u4ef6")),(0,l.kt)("h2",{id:"12-\u9002\u7528\u573a\u666f"},"1.2 \u9002\u7528\u573a\u666f"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u9700\u8981\u5728\u7f51\u5173\u7edf\u4e00\u9274\u6743\u3002")),(0,l.kt)("h2",{id:"13-\u63d2\u4ef6\u529f\u80fd"},"1.3 \u63d2\u4ef6\u529f\u80fd"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"jwt")," \u63d2\u4ef6\uff0c\u662f\u9488\u5bf9 ",(0,l.kt)("inlineCode",{parentName:"li"},"http")," \u8bf7\u6c42\u5934\u7684 ",(0,l.kt)("inlineCode",{parentName:"li"},"token"),"\u5c5e\u6027\u6216\u8005\u662f ",(0,l.kt)("inlineCode",{parentName:"li"},"authorization")," \u5c5e\u6027\u643a\u5e26\u503c\u8fdb\u884c\u9274\u6743\u5224\u65ad\uff0c\u517c\u5bb9 ",(0,l.kt)("inlineCode",{parentName:"li"},"OAuth2.0")," \u3002")),(0,l.kt)("h2",{id:"14-\u63d2\u4ef6\u4ee3\u7801"},"1.4 \u63d2\u4ef6\u4ee3\u7801"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u6838\u5fc3\u6a21\u5757\u4e3a ",(0,l.kt)("inlineCode",{parentName:"li"},"shenyu-plugin-jwt"),"."),(0,l.kt)("li",{parentName:"ul"},"\u6838\u5fc3\u7c7b\u4e3a ",(0,l.kt)("inlineCode",{parentName:"li"},"org.apache.shenyu.plugin.jwt.JwtPlugin"),".")),(0,l.kt)("h2",{id:"15-\u6dfb\u52a0\u81ea\u54ea\u4e2ashenyu\u7248\u672c"},"1.5 \u6dfb\u52a0\u81ea\u54ea\u4e2aShenYu\u7248\u672c"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u81ea\u4ece ShenYu 2.4.0")),(0,l.kt)("h1",{id:"2\u5982\u4f55\u4f7f\u7528\u63d2\u4ef6"},"2.\u5982\u4f55\u4f7f\u7528\u63d2\u4ef6"),(0,l.kt)("h2",{id:"21-\u63d2\u4ef6\u4f7f\u7528\u6d41\u7a0b\u56fe"},"2.1 \u63d2\u4ef6\u4f7f\u7528\u6d41\u7a0b\u56fe"),(0,l.kt)("p",null,(0,l.kt)("img",{src:n(36522).Z})),(0,l.kt)("h2",{id:"22-\u5bfc\u5165pom"},"2.2 \u5bfc\u5165pom"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-xml"},"<dependency>\n    <groupId>org.apache.shenyu</groupId>\n    <artifactId>shenyu-spring-boot-starter-plugin-jwt</artifactId>\n    <version>${project.version}</version>\n</dependency>\n")),(0,l.kt)("h2",{id:"23-\u542f\u7528\u63d2\u4ef6"},"2.3 \u542f\u7528\u63d2\u4ef6"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u5728 ",(0,l.kt)("inlineCode",{parentName:"li"},"shenyu-admin")," \u57fa\u7840\u914d\u7f6e --\x3e \u63d2\u4ef6\u7ba1\u7406 --\x3e ",(0,l.kt)("inlineCode",{parentName:"li"},"jwt")," \uff0c\u8bbe\u7f6e\u4e3a\u5f00\u542f\u3002")),(0,l.kt)("h2",{id:"24-\u914d\u7f6e\u63d2\u4ef6"},"2.4 \u914d\u7f6e\u63d2\u4ef6"),(0,l.kt)("h3",{id:"241-config-plugin-in-shenyu-admin"},"2.4.1 Config plugin in ShenYu-Admin"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u5728ShenYu-Admin\u914d\u7f6ejwt\u63d2\u4ef6\u7684\u79c1\u94a5\uff0c\u8be5\u79c1\u94a5\u5fc5\u987b\u5927\u4e8e256\u4f4d \u3002"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"secretKey")," : \u8be5\u79c1\u94a5\u4e3a\u4f7f\u7528jwt\u65f6\u751f\u6210token\uff0c\u5e76\u4e14\u4ed6\u662f\u5fc5\u987b\u7684\u3002")),(0,l.kt)("p",null,(0,l.kt)("img",{src:n(75067).Z})),(0,l.kt)("h3",{id:"242-selector-config"},"2.4.2 Selector config"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u63d2\u4ef6\u9009\u62e9\u5668\u548c\u89c4\u5219\u7684\u914d\u7f6e\u8bf7\u67e5\u770b: ",(0,l.kt)("a",{parentName:"li",href:"/zh/docs/next/user-guide/admin-usage/selector-and-rule"},"\u63d2\u4ef6\u548c\u89c4\u5219\u914d\u7f6e"),".")),(0,l.kt)("h3",{id:"243-rule-config"},"2.4.3 Rule Config"),(0,l.kt)("p",null,(0,l.kt)("img",{src:n(40194).Z})),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"convert\u662fjwt\u7684\u8f6c\u5316"),(0,l.kt)("li",{parentName:"ul"},"jwtVal: jwt \u8bf7\u6c42\u4f53\u7684\u540d\u79f0"),(0,l.kt)("li",{parentName:"ul"},"headerVal: jwt\u8bf7\u6c42\u5934\u7684\u540d\u79f0")),(0,l.kt)("h2",{id:"25-\u793a\u4f8b"},"2.5 \u793a\u4f8b"),(0,l.kt)("h3",{id:"251-\u4f7f\u7528jwt\u63d2\u4ef6\u8fdb\u884c\u6743\u9650\u8ba4\u8bc1"},"2.5.1 \u4f7f\u7528jwt\u63d2\u4ef6\u8fdb\u884c\u6743\u9650\u8ba4\u8bc1"),(0,l.kt)("h4",{id:"2511-\u914d\u7f6ejwt\u63d2\u4ef6"},"2.5.1.1 \u914d\u7f6ejwt\u63d2\u4ef6"),(0,l.kt)("p",null,(0,l.kt)("img",{src:n(75067).Z})),(0,l.kt)("h4",{id:"2512-\u914d\u7f6e\u9009\u62e9\u5668"},"2.5.1.2 \u914d\u7f6e\u9009\u62e9\u5668"),(0,l.kt)("p",null,(0,l.kt)("img",{src:n(10536).Z})),(0,l.kt)("h4",{id:"2513-\u914d\u7f6e\u89c4\u5219"},"2.5.1.3 \u914d\u7f6e\u89c4\u5219"),(0,l.kt)("p",null,(0,l.kt)("img",{src:n(40194).Z})),(0,l.kt)("h4",{id:"2514-\u5728\u7f51\u9875\u4e2d\u751f\u6210jwt-token"},"2.5.1.4 \u5728\u7f51\u9875\u4e2d\u751f\u6210jwt token"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u5728\u4f60\u7684\u6d4f\u89c8\u5668\u4e2d\u6253\u5f00 ",(0,l.kt)("inlineCode",{parentName:"li"},"https://jwt.io/")," \uff0c \u5e76\u4e14\u586b\u5145\u5bf9\u5e94\u7684\u53c2\u6570 \u3002"),(0,l.kt)("li",{parentName:"ul"},"\u5728 ",(0,l.kt)("inlineCode",{parentName:"li"},"https://jwt.io/")," \u7684\u9875\u9762\u914d\u7f6ejwt\u8bf7\u6c42\u5934\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u5728 ",(0,l.kt)("inlineCode",{parentName:"li"},"https://jwt.io/")," \u7684\u9875\u9762\u914d\u7f6ejwt\u53c2\u6570\u4f53\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u5728 ",(0,l.kt)("inlineCode",{parentName:"li"},"https://jwt.io/")," \u7684\u9875\u9762\u914d\u7f6ejwt\u7b7e\u540d\u53c2\u6570\u3002")),(0,l.kt)("p",null,(0,l.kt)("img",{src:n(61864).Z})),(0,l.kt)("h4",{id:"2515-\u4f7f\u7528java\u4ee3\u7801\u751f\u6210jwt-token"},"2.5.1.5 \u4f7f\u7528Java\u4ee3\u7801\u751f\u6210jwt token"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},'public final class JwtPluginTest {\n    \n  public void generateJwtCode() {\n    final String secreteKey = "shenyu-test-shenyu-test-shenyu-test";\n    Map<String, String> map = new HashMap<>();\n    map.put("id", "1");\n    map.put("name", "xiaoming");\n    Date date = new Date();\n    date.setTime(1655524800000L);\n    String token = Jwts.builder()\n            .setIssuedAt(date)\n            .setExpiration(new Date())\n            .setClaims(map)\n            .signWith(Keys.hmacShaKeyFor(secreteKey.getBytes(StandardCharsets.UTF_8)), SignatureAlgorithm.HS256)\n            .compact();\n    System.out.println(token);\n  }\n}\n')),(0,l.kt)("h4",{id:"2516-\u8bf7\u6c42\u670d\u52a1"},"2.5.1.6 \u8bf7\u6c42\u670d\u52a1"),(0,l.kt)("h5",{id:"25161-\u4f7f\u7528token\u65b9\u5f0f\u8bf7\u6c42\u670d\u52a1"},"2.5.1.6.1 \u4f7f\u7528token\u65b9\u5f0f\u8bf7\u6c42\u670d\u52a1"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u5728\u4f60\u7684\u8bf7\u6c42\u5934\u4e2d\u9644\u5e26 ",(0,l.kt)("inlineCode",{parentName:"li"},"token: eyJhbGciOiJIUzI1NiJ9.eyJuYW1lIjoieGlhb21pbmciLCJpZCI6IjEifQ.LdRzGlB49alhq204chwF7pf3C0z8ZpuowPvoQdJmSRw")," \u5b57\u6bb5\u5e76\u53d1\u8d77\u8bf7\u6c42\u3002")),(0,l.kt)("h5",{id:"25162-\u4f7f\u7528\u8ba4\u8bc1\u65b9\u5f0f\u8bf7\u6c42\u670d\u52a1"},"2.5.1.6.2 \u4f7f\u7528\u8ba4\u8bc1\u65b9\u5f0f\u8bf7\u6c42\u670d\u52a1"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u5728\u4f60\u7684\u8bf7\u6c42\u5934\u4e2d\u9644\u5e26 ",(0,l.kt)("inlineCode",{parentName:"li"},"Authorization: Bearer eyJhbGciOiJIUzI1NiJ9.eyJuYW1lIjoieGlhb21pbmciLCJpZCI6IjEifQ.LdRzGlB49alhq204chwF7pf3C0z8ZpuowPvoQdJmSRw")," \u5e76\u53d1\u8d77\u8bf7\u6c42\u3002")),(0,l.kt)("h4",{id:"2517-\u9a8c\u8bc1\u8bf7\u6c42\u7ed3\u679c"},"2.5.1.7 \u9a8c\u8bc1\u8bf7\u6c42\u7ed3\u679c"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u9519\u8bef\u7684\u7b7e\u540d")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'{\n  "code": 401,\n  "message": "Illegal authorization"\n}\n')),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u6b63\u786e\u7684\u7b7e\u540d")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'{\n  "id": "123",\n  "name": "hello world save order"\n}\n')),(0,l.kt)("h1",{id:"3\u5982\u4f55\u7981\u7528\u63d2\u4ef6"},"3.\u5982\u4f55\u7981\u7528\u63d2\u4ef6"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u5728 ",(0,l.kt)("inlineCode",{parentName:"li"},"shenyu-admin")," \u57fa\u7840\u914d\u7f6e --\x3e \u63d2\u4ef6\u7ba1\u7406 --\x3e ",(0,l.kt)("inlineCode",{parentName:"li"},"jwt")," \uff0c\u8bbe\u7f6e\u4e3a\u5173\u95ed\u3002")),(0,l.kt)("p",null,(0,l.kt)("img",{src:n(86710).Z})))}c.isMDXComponent=!0},86710:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/jwt-plugin-close_zh-09625cd1385e03717b29bd8a024de3b4.jpg"},75067:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/jwt-plugin-config-zh-f77209aec1ded1e1745a2ffef014e44e.jpg"},40194:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/jwt-plugin-rule-handle-zh-e8d40c60cf5983defb2df663ae232169.jpg"},10536:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/jwt-plugin-selector-config-zh-aecfd911948d5d06a0003f1dfc0cdda2.jpg"},61864:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/jwt-web-428e7d369c17035e0daa838740150227.jpg"},36522:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/loggingConsole-use-zh-b21975c5aa67461d23b1ff0831805352.jpg"}}]);