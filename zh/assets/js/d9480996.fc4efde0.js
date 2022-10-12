"use strict";(self.webpackChunkshenyu_website=self.webpackChunkshenyu_website||[]).push([[20917],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>g});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=c(n),g=a,h=d["".concat(s,".").concat(g)]||d[g]||p[g]||i;return n?r.createElement(h,o(o({ref:t},u),{},{components:n})):r.createElement(h,o({ref:t},u))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var c=2;c<i;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},27623:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var r=n(87462),a=(n(67294),n(3905));const i={title:"\u81ea\u5b9a\u4e49Filter",keywords:["soul"],description:"filter\u6269\u5c55"},o=void 0,l={unversionedId:"developer-guide/custom-filter",id:"version-2.3.0-Legacy/developer-guide/custom-filter",isDocsHomePage:!1,title:"\u81ea\u5b9a\u4e49Filter",description:"filter\u6269\u5c55",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-2.3.0-Legacy/developer-guide/custom-filter.md",sourceDirName:"developer-guide",slug:"/developer-guide/custom-filter",permalink:"/zh/docs/2.3.0-Legacy/developer-guide/custom-filter",editUrl:"https://github.com/apache/shenyu-website/edit/main/i18n/zh/docusaurus-plugin-content-docs/version-2.3.0-Legacy/developer-guide/custom-filter.md",version:"2.3.0-Legacy",frontMatter:{title:"\u81ea\u5b9a\u4e49Filter",keywords:["soul"],description:"filter\u6269\u5c55"},sidebar:"version-2.3.0-Legacy/tutorialSidebar",previous:{title:"\u91cd\u5b9a\u5411\u63d2\u4ef6",permalink:"/zh/docs/2.3.0-Legacy/plugins/redirect-plugin"},next:{title:"\u6b63\u786e\u83b7\u53d6Ip\u4e0ehost",permalink:"/zh/docs/2.3.0-Legacy/developer-guide/custom-parsing-ip-and-host"}},s=[{value:"\u8bf4\u660e",id:"\u8bf4\u660e",children:[]},{value:"\u8de8\u57df\u652f\u6301",id:"\u8de8\u57df\u652f\u6301",children:[]},{value:"\u7ee7\u627f <code>org.dromara.soul.web.filter.AbstractWebFilter</code>",id:"\u7ee7\u627f-orgdromarasoulwebfilterabstractwebfilter",children:[]}],c={toc:s};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"\u8bf4\u660e"},"\u8bf4\u660e"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u672c\u6587\u662f\u8bf4\u660e\u5982\u4f55\u8fdb\u884c ",(0,a.kt)("inlineCode",{parentName:"li"},"org.springframework.web.server.WebFliter")," \u7684\u6269\u5c55\u3002")),(0,a.kt)("h2",{id:"\u8de8\u57df\u652f\u6301"},"\u8de8\u57df\u652f\u6301"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u65b0\u589e ",(0,a.kt)("inlineCode",{parentName:"p"},"org.dromara.soul.bootstrap.cors.CrossFilter")," \u5b9e\u73b0 WebFilter\u3002"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-java"},'public class CrossFilter implements WebFilter {\n\n    private static final String ALLOWED_HEADERS = "x-requested-with, authorization, Content-Type, Authorization, credential, X-XSRF-TOKEN,token,username,client";\n\n    private static final String ALLOWED_METHODS = "*";\n\n    private static final String ALLOWED_ORIGIN = "*";\n\n    private static final String ALLOWED_EXPOSE = "*";\n\n    private static final String MAX_AGE = "18000";\n\n    @Override\n    @SuppressWarnings("all")\n    public Mono<Void> filter(final ServerWebExchange exchange, final WebFilterChain chain) {\n        ServerHttpRequest request = exchange.getRequest();\n        if (CorsUtils.isCorsRequest(request)) {\n            ServerHttpResponse response = exchange.getResponse();\n            HttpHeaders headers = response.getHeaders();\n            headers.add("Access-Control-Allow-Origin", ALLOWED_ORIGIN);\n            headers.add("Access-Control-Allow-Methods", ALLOWED_METHODS);\n            headers.add("Access-Control-Max-Age", MAX_AGE);\n            headers.add("Access-Control-Allow-Headers", ALLOWED_HEADERS);\n            headers.add("Access-Control-Expose-Headers", ALLOWED_EXPOSE);\n            headers.add("Access-Control-Allow-Credentials", "true");\n            if (request.getMethod() == HttpMethod.OPTIONS) {\n                response.setStatusCode(HttpStatus.OK);\n                return Mono.empty();\n            }\n        }\n        return chain.filter(exchange);\n    }\n}\n')))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'\n* \u5c06 CrossFilter \u6ce8\u518c\u6210\u4e3a spring\u7684bean\uff0c\u5b8c\u4e8b\u3002\n\n\n## \u7f51\u5173\u8fc7\u6ee4 springboot\u5065\u5eb7\u68c0\u67e5\n\n* \u6ce8\u610f\u987a\u5e8f\uff0c\u4f7f\u7528 `@Order` \u6ce8\u89e3\n\n```java\n@Component\n@Order(-99)\npublic final class HealthFilter implements WebFilter {\n\n    private static final String[] FILTER_TAG = {"/actuator/health", "/health_check"};\n\n    @Override\n    public Mono<Void> filter(@Nullable final ServerWebExchange exchange, @Nullable final WebFilterChain chain) {\n        ServerHttpRequest request = Objects.requireNonNull(exchange).getRequest();\n        String urlPath = request.getURI().getPath();\n        for (String check : FILTER_TAG) {\n            if (check.equals(urlPath)) {\n                String result = JsonUtils.toJson(new Health.Builder().up().build());\n                DataBuffer dataBuffer = exchange.getResponse().bufferFactory().wrap(result.getBytes());\n                return exchange.getResponse().writeWith(Mono.just(dataBuffer));\n            }\n        }\n        return Objects.requireNonNull(chain).filter(exchange);\n    }\n}\n\n')),(0,a.kt)("h2",{id:"\u7ee7\u627f-orgdromarasoulwebfilterabstractwebfilter"},"\u7ee7\u627f ",(0,a.kt)("inlineCode",{parentName:"h2"},"org.dromara.soul.web.filter.AbstractWebFilter")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u65b0\u589e\u4e00\u4e2a\u7c7b\uff0c\u7ee7\u627f\u5b83\u3002")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u5b9e\u73b0\u5b83\u76842\u4e2a\u65b9\u6cd5\u3002"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"   /**\n     * this is Template Method ,children Implement your own filtering logic.\n     *\n     * @param exchange the current server exchange\n     * @param chain    provides a way to delegate to the next filter\n     * @return {@code Mono<Boolean>} result\uff1aTRUE (is pass)\uff0cand flow next filter\uff1bFALSE (is not pass) execute doDenyResponse(ServerWebExchange exchange)\n     */\n    protected abstract Mono<Boolean> doFilter(ServerWebExchange exchange, WebFilterChain chain);\n\n    /**\n     * this is Template Method ,children Implement your own And response client.\n     *\n     * @param exchange the current server exchange.\n     * @return {@code Mono<Void>} response msg.\n     */\n    protected abstract Mono<Void> doDenyResponse(ServerWebExchange exchange);\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"doFilter")," \u65b9\u6cd5\u8fd4\u56de Mono",(0,a.kt)("inlineCode",{parentName:"li"},"true")," \u8868\u793a\u901a\u8fc7\uff0c\u53cd\u4e4b\u5219\u4e0d\u901a\u8fc7\uff0c\u4e0d\u901a\u8fc7\u7684\u65f6\u5019\uff0c\u4f1a\u8c03\u7528 ",(0,a.kt)("inlineCode",{parentName:"li"},"doDenyResponse"),"\u8f93\u51fa\u76f8\u5173\u4fe1\u606f\u5230\u524d\u7aef\u3002")))}u.isMDXComponent=!0}}]);