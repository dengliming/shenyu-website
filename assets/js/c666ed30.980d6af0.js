"use strict";(self.webpackChunkshenyu_website=self.webpackChunkshenyu_website||[]).push([[27067],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>h});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=a.createContext({}),p=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=p(r),u=n,h=m["".concat(l,".").concat(u)]||m[u]||d[u]||i;return r?a.createElement(h,o(o({ref:t},c),{},{components:r})):a.createElement(h,o({ref:t},c))}));function h(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,o=new Array(i);o[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[m]="string"==typeof e?e:n,o[1]=s;for(var p=2;p<i;p++)o[p]=r[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}u.displayName="MDXCreateElement"},39371:(e,t,r)=>{r.r(t),r.d(t,{contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var a=r(87462),n=(r(67294),r(3905));const i={sidebar_position:0,title:"Deployment Prerequisites",keywords:["Deployment Prerequisites"],description:"Deployment Prerequisites"},o=void 0,s={unversionedId:"deployment/deployment-before",id:"version-2.4.3/deployment/deployment-before",isDocsHomePage:!1,title:"Deployment Prerequisites",description:"Deployment Prerequisites",source:"@site/versioned_docs/version-2.4.3/deployment/deployment-before.md",sourceDirName:"deployment",slug:"/deployment/deployment-before",permalink:"/docs/2.4.3/deployment/deployment-before",editUrl:"https://github.com/apache/shenyu-website/edit/main/versioned_docs/version-2.4.3/deployment/deployment-before.md",version:"2.4.3",sidebarPosition:0,frontMatter:{sidebar_position:0,title:"Deployment Prerequisites",keywords:["Deployment Prerequisites"],description:"Deployment Prerequisites"},sidebar:"version-2.4.3/tutorialSidebar",previous:{title:"SPI Design",permalink:"/docs/2.4.3/design/spi-design"},next:{title:"Local Deployment",permalink:"/docs/2.4.3/deployment/deployment-local"}},l=[{value:"Database Initialize",id:"database-initialize",children:[{value:"Mysql",id:"mysql",children:[]},{value:"PostgreSql",id:"postgresql",children:[]},{value:"Oracle",id:"oracle",children:[]}]}],p={toc:l},c="wrapper";function m(e){let{components:t,...r}=e;return(0,n.kt)(c,(0,a.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"This article describes some of the prerequisites you need to prepare before deploying the Apache ShenYu gateway."),(0,n.kt)("h2",{id:"database-initialize"},"Database Initialize"),(0,n.kt)("p",null,"Before deploying the ",(0,n.kt)("inlineCode",{parentName:"p"},"Shenyu-admin")," project, initialize the database it uses (databases currently support: Mysql, PostgreSql, Oracle), which used the script files are stored in db directory ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/apache/shenyu/tree/master/db"},"project root directory"),", The following describes the initial steps for each database."),(0,n.kt)("h3",{id:"mysql"},"Mysql"),(0,n.kt)("p",null,"In ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/apache/shenyu/tree/master/db/init/mysql"},"the mysql initialization scripts directory")," found in the initialization script ",(0,n.kt)("inlineCode",{parentName:"p"},"schema.sql"),", Use the client connection tool to connect to your Mysql service and execute, so you get a database named ",(0,n.kt)("inlineCode",{parentName:"p"},"shenyu"),", which can later be used as the database for the ",(0,n.kt)("inlineCode",{parentName:"p"},"Shenyu-admin")," project."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"sql script: ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/apache/shenyu/tree/master/db/init/mysql"},"https://github.com/apache/shenyu/tree/master/db/init/mysql"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"driver:"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"maven repository: ",(0,n.kt)("a",{parentName:"li",href:"https://repo1.maven.org/maven2/mysql/mysql-connector-java/8.0.30/"},"https://repo1.maven.org/maven2/mysql/mysql-connector-java/8.0.30/")),(0,n.kt)("li",{parentName:"ul"},"homepage: ",(0,n.kt)("a",{parentName:"li",href:"https://www.mysql.com/products/connector/"},"https://www.mysql.com/products/connector/"))))),(0,n.kt)("h3",{id:"postgresql"},"PostgreSql"),(0,n.kt)("p",null,"In ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/apache/shenyu/tree/master/db/init/pg"},"the pg initialization scripts directory")," found in the initialization script ",(0,n.kt)("inlineCode",{parentName:"p"},"create-database.sql"),"\u3001 ",(0,n.kt)("inlineCode",{parentName:"p"},"create-table.sql"),", and use the client connection tool to connect to your PostgreSql service. so you get a database named ",(0,n.kt)("inlineCode",{parentName:"p"},"shenyu"),", which can later be used as a database for the ",(0,n.kt)("inlineCode",{parentName:"p"},"Shenyu-admin")," project."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"sql script: ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/apache/shenyu/tree/master/db/init/pg"},"https://github.com/apache/shenyu/tree/master/db/init/pg"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"driver:"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"maven repository: ",(0,n.kt)("a",{parentName:"li",href:"https://mvnrepository.com/artifact/org.postgresql/postgresql/42.5.0"},"https://mvnrepository.com/artifact/org.postgresql/postgresql/42.5.0")),(0,n.kt)("li",{parentName:"ul"},"homepage: ",(0,n.kt)("a",{parentName:"li",href:"https://jdbc.postgresql.org/download/"},"https://jdbc.postgresql.org/download/"))))),(0,n.kt)("h3",{id:"oracle"},"Oracle"),(0,n.kt)("p",null,"In ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/apache/shenyu/blob/master/db/init/oracle"},"the oracle initialization scripts directory")," found in the initialization script ",(0,n.kt)("inlineCode",{parentName:"p"},"schema.sql"),", Use the client connection tool to connect to your Oracle service to create a database, execute the ",(0,n.kt)("inlineCode",{parentName:"p"},"schema.sql")," script on this database, and initialize the ",(0,n.kt)("inlineCode",{parentName:"p"},"Shenyu-admin")," database. After can be ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/apache/shenyu/blob/master/shenyu-admin/src/main/resources/application-oracle.yml"},"project configuration file")," to adjust your Oracle environment configuration."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"sql script: ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/apache/shenyu/blob/master/db/init/oracle"},"https://github.com/apache/shenyu/blob/master/db/init/oracle"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"driver:"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"maven repository: ",(0,n.kt)("a",{parentName:"li",href:"https://mvnrepository.com/artifact/com.oracle.database.jdbc/ojdbc8/19.3.0.0"},"https://mvnrepository.com/artifact/com.oracle.database.jdbc/ojdbc8/19.3.0.0")),(0,n.kt)("li",{parentName:"ul"},"homepage:  ",(0,n.kt)("a",{parentName:"li",href:"https://www.oracle.com/database/technologies/appdev/jdbc-downloads.html"},"https://www.oracle.com/database/technologies/appdev/jdbc-downloads.html"))))))}m.isMDXComponent=!0}}]);