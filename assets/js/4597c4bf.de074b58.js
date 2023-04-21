"use strict";(self.webpackChunkshenyu_website=self.webpackChunkshenyu_website||[]).push([[90688],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>g});var i=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=i.createContext({}),s=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=s(e.components);return i.createElement(l.Provider,{value:t},e.children)},c="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},d=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,p=u(e,["components","mdxType","originalType","parentName"]),c=s(n),d=r,g=c["".concat(l,".").concat(d)]||c[d]||h[d]||o;return n?i.createElement(g,a(a({ref:t},p),{},{components:n})):i.createElement(g,a({ref:t},p))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,a=new Array(o);a[0]=d;var u={};for(var l in t)hasOwnProperty.call(t,l)&&(u[l]=t[l]);u.originalType=e,u[c]="string"==typeof e?e:r,a[1]=u;for(var s=2;s<o;s++)a[s]=n[s];return i.createElement.apply(null,a)}return i.createElement.apply(null,n)}d.displayName="MDXCreateElement"},99905:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>a,default:()=>c,frontMatter:()=>o,metadata:()=>u,toc:()=>l});var i=n(87462),r=(n(67294),n(3905));const o={title:"OAuth2 Plugin",keywords:["OAuth2"],description:"OAuth2 plugin"},a=void 0,u={unversionedId:"plugin-center/security/oauth2-plugin",id:"plugin-center/security/oauth2-plugin",isDocsHomePage:!1,title:"OAuth2 Plugin",description:"OAuth2 plugin",source:"@site/docs/plugin-center/security/oauth2-plugin.md",sourceDirName:"plugin-center/security",slug:"/plugin-center/security/oauth2-plugin",permalink:"/docs/next/plugin-center/security/oauth2-plugin",editUrl:"https://github.com/apache/shenyu-website/edit/main/docs/plugin-center/security/oauth2-plugin.md",version:"current",frontMatter:{title:"OAuth2 Plugin",keywords:["OAuth2"],description:"OAuth2 plugin"},sidebar:"tutorialSidebar",previous:{title:"JWT plugin",permalink:"/docs/next/plugin-center/security/jwt-plugin"},next:{title:"Sign Plugin",permalink:"/docs/next/plugin-center/security/sign-plugin"}},l=[{value:"Description",id:"description",children:[]},{value:"How Does It Works?",id:"how-does-it-works",children:[]},{value:"Plugin Setting",id:"plugin-setting",children:[]}],s={toc:l},p="wrapper";function c(e){let{components:t,...n}=e;return(0,r.kt)(p,(0,i.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"description"},"Description"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"OAuth2")," plugin in Apache Shenyu is implemented using the OAuth2 standard. It allows for secure and authorized access to protected resources on a web server by using a token-based authentication method."),(0,r.kt)("h2",{id:"how-does-it-works"},"How Does It Works?"),(0,r.kt)("p",null,"In Apache Shenyu, the OAuth2 plugin acts as the client application, while the authorization server and resource server are typically provided by external services like GitHub, Google, or Facebook. When a user attempts to access a protected resource on the Apache Shenyu server, the OAuth2 plugin redirects the user to the authorization server to request permission to access the resource. The user then logs in to the authorization server and grants permission for the client application (OAuth2 plugin) to access the requested resource on their behalf. The authorization server then sends a token to the client application, which it can use to access the resource server and retrieve the protected resource."),(0,r.kt)("h2",{id:"plugin-setting"},"Plugin Setting"),(0,r.kt)("p",null,"Setting up the OAuth2 Plugin in Apache Shenyu"),(0,r.kt)("p",null,"To configure the OAuth2 plugin in Apache Shenyu, you will need to follow these steps:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Step 1: Install the OAuth2 Plugin"),(0,r.kt)("p",{parentName:"li"},"First, you need to ensure that the OAuth2 plugin is installed and enabled in Apache Shenyu. If it is not already installed, you can download it from the Shenyu GitHub repository and follow the installation instructions.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Step 2: Register an OAuth2 Application with the Authorization Server"),(0,r.kt)("p",{parentName:"li"},"Before you can use the OAuth2 plugin in Apache Shenyu, you need to register an OAuth2 application with the authorization server you plan to use (e.g., GitHub, Google, etc.). The registration process typically involves providing basic information about your application, such as the application name, website URL, and redirect URI."),(0,r.kt)("p",{parentName:"li"},"Once you have registered your OAuth2 application with the authorization server, you will receive a client ID and client secret, which you will need to use in the next step.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Step 3: Configure the OAuth2 Plugin"),(0,r.kt)("p",{parentName:"li"},"To configure the OAuth2 plugin in Apache Shenyu, you will need to modify the shenyu-server.yaml configuration file. Here's an example of what the configuration might look like:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"plugins:\noauth2:\n  enabled: true\n  client_id: <your_client_id>\n  client_secret: <your_client_secret>\n  authorization_url: <authorization_server_url>\n  token_url: <token_endpoint_url>\n  user_info_url: <user_info_endpoint_url>\n")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"enabled"),": Set this to ",(0,r.kt)("inlineCode",{parentName:"li"},"true")," to enable the OAuth2 plugin in Shenyu."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"client_id")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"client_secret"),": These are the client credentials you received when you registered your OAuth2 application with the authorization server."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"authorization_url"),": This is the URL of the authorization server's authorization endpoint."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"token_url"),": This is the URL of the authorization server's token endpoint."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"user_info_url"),": This is the URL of the authorization server's user info endpoint, which is used to retrieve information about the authenticated user."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Step 4: Test the OAuth2 Plugin"),(0,r.kt)("p",{parentName:"li"},"To test the OAuth2 plugin in Apache Shenyu, you can try to access a protected resource on the Shenyu server that requires authentication. When you attempt to access the resource, the OAuth2 plugin should redirect you to the authorization server's login page. After you log in and grant permission to the client application (OAuth2 plugin), the plugin should be able to retrieve an access token and use it to access the protected resource on your behalf."))))}c.isMDXComponent=!0}}]);