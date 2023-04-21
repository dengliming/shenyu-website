"use strict";(self.webpackChunkshenyu_website=self.webpackChunkshenyu_website||[]).push([[84318],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>h});var a=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=a.createContext({}),p=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},c=function(e){var n=p(e.components);return a.createElement(s.Provider,{value:n},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),u=p(t),d=r,h=u["".concat(s,".").concat(d)]||u[d]||m[d]||i;return t?a.createElement(h,l(l({ref:n},c),{},{components:t})):a.createElement(h,l({ref:n},c))}));function h(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,l=new Array(i);l[0]=d;var o={};for(var s in n)hasOwnProperty.call(n,s)&&(o[s]=n[s]);o.originalType=e,o[u]="string"==typeof e?e:r,l[1]=o;for(var p=2;p<i;p++)l[p]=t[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},67761:(e,n,t)=>{t.r(n),t.d(n,{contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>s});var a=t(87462),r=(t(67294),t(3905));const i={title:"\u96c6\u6210\u6d4b\u8bd5\u5256\u6790",author:"Kunshuai Zhu",author_title:"Apache ShenYu Committer",author_url:"https://github.com/JooKS-me",author_image_url:"https://avatars1.githubusercontent.com/u/62384022?v=4",tags:["Integration Test","Apache ShenYu"]},l=void 0,o={permalink:"/zh/blog/IntegrationTest-Analysis",editUrl:"https://github.com/apache/shenyu-website/edit/main/i18n/zh/docusaurus-plugin-content-blog/IntegrationTest-Analysis.md",source:"@site/i18n/zh/docusaurus-plugin-content-blog/IntegrationTest-Analysis.md",title:"\u96c6\u6210\u6d4b\u8bd5\u5256\u6790",description:"\u8fd9\u7bc7\u6587\u7ae0\u5c06\u4f1a\u5bf9Apache ShenYu\u7684\u96c6\u6210\u6d4b\u8bd5\u8fdb\u884c\u6df1\u5165\u5256\u6790\u3002",date:"2023-04-21T04:57:24.753Z",formattedDate:"2023\u5e744\u670821\u65e5",tags:[{label:"Integration Test",permalink:"/zh/blog/tags/integration-test"},{label:"Apache ShenYu",permalink:"/zh/blog/tags/apache-shen-yu"}],readingTime:8.345,truncated:!1,prevItem:{title:"ZooKeeper\u6570\u636e\u540c\u6b65\u6e90\u7801\u5206\u6790",permalink:"/zh/blog/DataSync-SourceCode-Analysis-ZooKeeper-Data-Sync"},nextItem:{title:"Divide\u63d2\u4ef6\u6e90\u7801\u5206\u6790",permalink:"/zh/blog/Plugin-SourceCode-Analysis-Divide-Plugin"}},s=[{value:"\u4ec0\u4e48\u662f\u96c6\u6210\u6d4b\u8bd5\uff1f",id:"\u4ec0\u4e48\u662f\u96c6\u6210\u6d4b\u8bd5",children:[]},{value:"\u81ea\u52a8\u5316\u7684\u96c6\u6210\u6d4b\u8bd5\u5982\u4f55\u5b9e\u73b0\uff1f",id:"\u81ea\u52a8\u5316\u7684\u96c6\u6210\u6d4b\u8bd5\u5982\u4f55\u5b9e\u73b0",children:[]},{value:"\u5de5\u4f5c\u6d41\u7684\u89e6\u53d1",id:"\u5de5\u4f5c\u6d41\u7684\u89e6\u53d1",children:[]},{value:"\u521d\u59cb\u5316\u73af\u5883",id:"\u521d\u59cb\u5316\u73af\u5883",children:[]},{value:"\u6784\u5efa\u6574\u4e2a\u9879\u76ee\uff0c\u540c\u65f6\u6784\u5efadocker\u955c\u50cf",id:"\u6784\u5efa\u6574\u4e2a\u9879\u76ee\u540c\u65f6\u6784\u5efadocker\u955c\u50cf",children:[]},{value:"\u6784\u5efaexamples\u6a21\u5757",id:"\u6784\u5efaexamples\u6a21\u5757",children:[]},{value:"\u6784\u5efa\u5b9a\u5236\u5316\u7f51\u5173",id:"\u6784\u5efa\u5b9a\u5236\u5316\u7f51\u5173",children:[]},{value:"\u8fd0\u884cdocker compose",id:"\u8fd0\u884cdocker-compose",children:[]},{value:"\u8fd0\u884c\u5065\u5eb7\u68c0\u67e5\uff0c\u7b49\u5f85docker-compose\u542f\u52a8\u5b8c\u6bd5",id:"\u8fd0\u884c\u5065\u5eb7\u68c0\u67e5\u7b49\u5f85docker-compose\u542f\u52a8\u5b8c\u6bd5",children:[]},{value:"\u8fd0\u884c\u6d4b\u8bd5",id:"\u8fd0\u884c\u6d4b\u8bd5",children:[]},{value:"\u67e5\u770bDocker Compose\u65e5\u5fd7",id:"\u67e5\u770bdocker-compose\u65e5\u5fd7",children:[]}],p={toc:s},c="wrapper";function u(e){let{components:n,...t}=e;return(0,r.kt)(c,(0,a.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"\u8fd9\u7bc7\u6587\u7ae0\u5c06\u4f1a\u5bf9Apache ShenYu\u7684\u96c6\u6210\u6d4b\u8bd5\u8fdb\u884c\u6df1\u5165\u5256\u6790\u3002"),(0,r.kt)("h3",{id:"\u4ec0\u4e48\u662f\u96c6\u6210\u6d4b\u8bd5"},"\u4ec0\u4e48\u662f\u96c6\u6210\u6d4b\u8bd5\uff1f"),(0,r.kt)("p",null,"\u96c6\u6210\u6d4b\u8bd5\u5728\u4e00\u4e9b\u9879\u76ee\u91cc\u4e5f\u53ebE2E (End To End)\u6d4b\u8bd5\uff0c\u4e3b\u8981\u7528\u4e8e\u6d4b\u8bd5\u5404\u4e2a\u6a21\u5757\u7ec4\u88c5\u6210\u4e00\u4e2a\u7cfb\u7edf\u540e\u662f\u5426\u80fd\u7b26\u5408\u9884\u671f\u3002"),(0,r.kt)("p",null,"Apache ShenYu\u5c06\u96c6\u6210\u6d4b\u8bd5\u653e\u5728\u4e86\u6301\u7eed\u96c6\u6210\u4e2d\uff0c\u5229\u7528GitHub Action\uff0c\u5728\u6bcf\u6b21\u5411\u4e3b\u5206\u652f\u63d0\u4ea4Pull Request\u6216\u662fMerge\u65f6\u89e6\u53d1\u3002\u8fd9\u6837\u53ef\u4ee5\u5927\u5927\u964d\u4f4e\u9879\u76ee\u7684\u7ef4\u62a4\u6210\u672c\uff0c\u63d0\u5347Apache ShenYu\u7684\u7a33\u5b9a\u6027\u3002"),(0,r.kt)("h3",{id:"\u81ea\u52a8\u5316\u7684\u96c6\u6210\u6d4b\u8bd5\u5982\u4f55\u5b9e\u73b0"},"\u81ea\u52a8\u5316\u7684\u96c6\u6210\u6d4b\u8bd5\u5982\u4f55\u5b9e\u73b0\uff1f"),(0,r.kt)("p",null,"Apache ShenYu\u4e2d\uff0c\u96c6\u6210\u6d4b\u8bd5\u7684\u4e3b\u8981\u6b65\u9aa4\u4f53\u73b0\u5728GitHub Action\u5de5\u4f5c\u6d41\u7684\u811a\u672c\u4e2d\uff0c\u5982\u4e0b\u6240\u793a\uff0c\u8be5\u811a\u672c\u4f4d\u4e8e ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/apache/incubator-shenyu/tree/master/.github/workflows"},"~/.github/workflows"),"\u76ee\u5f55\u4e0b\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"name: it\non:\n  pull_request:\n  push:\n    branches:\n      - master\njobs:\n  build:\n    strategy:\n      matrix:\n        case:\n          - shenyu-integrated-test-alibaba-dubbo\n          ...\n    runs-on: ubuntu-latest\n    steps:\n      - uses: actions/checkout@v2\n        with:\n          submodules: true\n      ...\n")),(0,r.kt)("p",null,"\u4e0b\u9762\u6211\u5c06\u4ece\u8fd9\u4e2ayaml\u6587\u4ef6\u51fa\u53d1\uff0c\u5e26\u4f60\u5256\u6790\u6574\u4e2a\u81ea\u52a8\u5316\u96c6\u6210\u6d4b\u8bd5\u7684\u6d41\u7a0b\u3002"),(0,r.kt)("h3",{id:"\u5de5\u4f5c\u6d41\u7684\u89e6\u53d1"},"\u5de5\u4f5c\u6d41\u7684\u89e6\u53d1"),(0,r.kt)("p",null,"\u7531\u4e8e\u6211\u4eec\u5728 ",(0,r.kt)("inlineCode",{parentName:"p"},"on")," \u4e2d\u6307\u5b9a\u4e86 ",(0,r.kt)("inlineCode",{parentName:"p"},"pull_request")," \u548c ",(0,r.kt)("inlineCode",{parentName:"p"},"push.branch: master"),"\uff0c\u90a3\u4e48\u5f53\u6211\u4eec\u63d0\u4ea4pull_request\u6216\u662fmerge\u5206\u652f\u5230master\uff08push\uff09\u7684\u65f6\u5019\uff0c\u5c31\u4f1a\u89e6\u53d1\u8fd9\u4e2a\u5de5\u4f5c\u6d41\u3002"),(0,r.kt)("p",null,"\u5173\u4e8e\u66f4\u591aGitHub Action\u7684\u7528\u6cd5\uff0c\u53ef\u4ee5\u53c2\u8003 ",(0,r.kt)("a",{parentName:"p",href:"https://docs.github.com/en/actions"},"GitHub Action")," \u7684\u6587\u6863\uff0c\u8fd9\u91cc\u4e0d\u4f1a\u505a\u8be6\u7ec6\u7684\u4ecb\u7ecd\u3002"),(0,r.kt)("h3",{id:"\u521d\u59cb\u5316\u73af\u5883"},"\u521d\u59cb\u5316\u73af\u5883"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u62c9\u53d6\u4ee3\u7801")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"- uses: actions/checkout@v2\n  with:\n        submodules: true\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u8bbe\u7f6e\u8df3\u8fc7\u6807\u5fd7")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"- name: Set Skip Env Var\n      uses: ./.github/actions/skip-ci\n")),(0,r.kt)("p",null,"\u5f53\u53d1\u751f\u7684\u662f\u4e00\u4e9b\u5bf9\u529f\u80fd\u65e0\u5173\u7684\u6539\u52a8\uff08\u5982\u6539\u52a8\u6587\u6863\uff09\u65f6\uff0c\u4f1a\u8df3\u8fc7\u96c6\u6210\u6d4b\u8bd5\uff0c\u4ee5\u8282\u7ea6\u8d44\u6e90\u3002"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u7f13\u5b58maven\u4f9d\u8d56\u3001\u5b89\u88c5Java")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"- name: Cache Maven Repos\n...\n- uses: actions/setup-java@v1\n")),(0,r.kt)("h3",{id:"\u6784\u5efa\u6574\u4e2a\u9879\u76ee\u540c\u65f6\u6784\u5efadocker\u955c\u50cf"},"\u6784\u5efa\u6574\u4e2a\u9879\u76ee\uff0c\u540c\u65f6\u6784\u5efadocker\u955c\u50cf"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"./mvnw -B clean install -Prelease,docker -Dmaven.javadoc.skip=true -Dmaven.test.skip=true\n")),(0,r.kt)("p",null,"\u4e0a\u9762\u8fd9\u884c\u547d\u4ee4\u4e2d\uff0c-P\u540e\u9762\u8ddf\u7740",(0,r.kt)("inlineCode",{parentName:"p"},"release,docker"),"\uff0c\u8868\u793a\u4f1a\u6fc0\u6d3bpom\u6587\u4ef6\u4e2d\u76f8\u5173\u7684profile\u914d\u7f6e\u3002"),(0,r.kt)("p",null,"\u800crelease\u548cdocker\u8fd9\u4e24\u4e2aprofile\uff0c\u76ee\u524d\u53ea\u5728 ",(0,r.kt)("inlineCode",{parentName:"p"},"shenyu-dist")," \u4e0b\u7684\u51e0\u4e2a\u5b50\u6a21\u5757\u4e2d\u5b58\u5728\u3002\u4e0b\u9762\u5c06\u4ee5 ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/apache/incubator-shenyu/tree/master/shenyu-dist/shenyu-admin-dist"},"shenyu-dist-admin")," \u6a21\u5757\u4e3a\u4f8b\uff0c\u4ecb\u7ecdprofile\u4e3arelease\u548cdocker\u7684\u914d\u7f6e\u7684\u5177\u4f53\u5185\u5bb9\u3002\u53e6\u5916\uff0c\u96c6\u6210\u6d4b\u8bd5\u53ea\u4f7f\u7528\u4e86\u8fd9\u4e00\u6b65\u6784\u5efa\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"shenyu-admin")," \u955c\u50cf\u3002"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u9996\u5148\u662frelease"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-xml"},"<profile>\n    <id>release</id>\n    <activation>\n        <activeByDefault>false</activeByDefault>\n    </activation>\n    <build>\n        <finalName>apache-shenyu-incubating-${project.version}</finalName>\n        <plugins>\n            <plugin>\n                <groupId>org.apache.maven.plugins</groupId>\n                <artifactId>maven-assembly-plugin</artifactId>\n                <executions>\n                    <execution>\n                        <id>admin-bin</id>\n                        <phase>package</phase>\n                        <goals>\n                            <goal>single</goal>\n                        </goals>\n                    </execution>\n                </executions>\n                <configuration>\n                    <descriptors>\n                        <descriptor>${project.basedir}/src/main/assembly/binary.xml</descriptor>\n                    </descriptors>\n                    <tarLongFileMode>posix</tarLongFileMode>\n                </configuration>\n            </plugin>\n        </plugins>\n    </build>\n</profile>\n")),(0,r.kt)("p",{parentName:"li"},"\u5f53-P\u540e\u9762\u8ddf\u7740release\u65f6\uff0c\u5c31\u4f1a\u6fc0\u6d3b\u4e0a\u9762\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"maven-assembly-plugin")," \u63d2\u4ef6\u3002\u800cexecutions\u4e2d\u5c06\u63d2\u4ef6\u7684\u6267\u884c\u65f6\u673a\u7ed1\u5b9a\u5728\u4e86maven\u751f\u547d\u5468\u671fpackage\u4e2d\uff0c\u8fd9\u4e5f\u5c31\u610f\u5473\u7740\uff0c\u5f53\u6211\u4eec\u6267\u884c ",(0,r.kt)("inlineCode",{parentName:"p"},"mvn install")," \u7684\u65f6\u5019\u5c31\u4f1a\u89e6\u53d1\u3002"),(0,r.kt)("p",{parentName:"li"},"configuration\u4e2d\u6307\u5b9a\u4e86\u6211\u4eec\u7f16\u5199\u597d\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"binary.xml"),"\uff0c",(0,r.kt)("inlineCode",{parentName:"p"},"maven-assembly-plugin")," \u63d2\u4ef6\u5c06\u4f1a\u6309\u7167\u8fd9\u4e2a\u6587\u4ef6\uff0c\u5c06\u9700\u8981\u7684\u6587\u4ef6\u590d\u5236\u8fdb\u6765\uff0c\u5e76\u6253\u5305\u3002\u4f60\u53ef\u4ee5\u70b9\u51fb\u94fe\u63a5\u67e5\u770b\u8be5\u6587\u4ef6\uff1a",(0,r.kt)("a",{parentName:"p",href:"https://github.com/apache/incubator-shenyu/blob/master/shenyu-dist/shenyu-admin-dist/src/main/assembly/binary.xml"},"shenyu-dist/shenyu-admin-dist/src/main/assembly/binary.xml")),(0,r.kt)("p",{parentName:"li"},"\u6839\u636e\u8fd9\u4e2a\u6587\u4ef6\uff0c\u63d2\u4ef6\u4f1a\u5c06\u5176\u4ed6\u6a21\u5757\u4e0b\u6253\u5305\u597d\u7684jar\u5305\u3001\u914d\u7f6e\u6587\u4ef6\u3001\u542f\u52a8\u811a\u672c\u7b49\u201c\u590d\u5236\u201d\u8fc7\u6765\uff0c\u6700\u7ec8\u6253\u6210 ",(0,r.kt)("inlineCode",{parentName:"p"},"tar.gz")," \u683c\u5f0f\u7684\u538b\u7f29\u5305\u3002")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u7136\u540e\u662fdocker"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-xml"},"<profile>\n    <id>docker</id>\n    <activation>\n        <activeByDefault>false</activeByDefault>\n    </activation>\n    <build>\n        <plugins>\n            <plugin>\n                <groupId>com.spotify</groupId>\n                <artifactId>dockerfile-maven-plugin</artifactId>\n                <version>${dockerfile-maven-plugin.version}</version>\n                <executions>\n                    <execution>\n                        <id>tag-latest</id>\n                        <goals>\n                            <goal>build</goal>\n                        </goals>\n                        <configuration>\n                            <tag>latest</tag>\n                        </configuration>\n                    </execution>\n                    <execution>\n                        <id>tag-version</id>\n                        <goals>\n                            <goal>build</goal>\n                        </goals>\n                        <configuration>\n                            <tag>${project.version}</tag>\n                        </configuration>\n                    </execution>\n                </executions>\n                <configuration>\n                    <repository>apache/shenyu-admin</repository>\n                    <buildArgs>\n                        <APP_NAME>apache-shenyu-incubating-${project.version}-admin-bin</APP_NAME>\n                    </buildArgs>\n                </configuration>\n            </plugin>\n        </plugins>\n    </build>\n</profile>\n")),(0,r.kt)("p",{parentName:"li"},"\u7c7b\u6bd4\u4e0a\u9762\u7684release\uff0c\u8fd9\u91cc\u662f\u6fc0\u6d3b ",(0,r.kt)("inlineCode",{parentName:"p"},"dockerfile-maven-plugin")," \u63d2\u4ef6\u3002\u5f53 ",(0,r.kt)("inlineCode",{parentName:"p"},"mvn install -Pdocker")," \u65f6\uff0c\u63d2\u4ef6\u5c31\u4f1a\u5229\u7528\u6211\u4eec\u7f16\u5199\u597d\u7684dockerfile\u6784\u5efadocker\u955c\u50cf\u3002"))),(0,r.kt)("p",null,"\u9700\u8981\u6ce8\u610f\u7684\u662f\uff0cdockerfile-maven-plugin\u76ee\u524d\u5bf9aarch64\u67b6\u6784\u7684\u8bbe\u5907\u652f\u6301\u6709\u9650\uff0c\u5728aarch64\u67b6\u6784\u7684\u673a\u5668\u4e0a\u8fd0\u884c\u8be5\u63d2\u4ef6\u65f6\u4f1a\u51fa\u73b0\u5982\u4e0b\u9519\u8bef\u3002\u4e14\u5728\u672c\u4eba\u5199\u8fd9\u7bc7\u6587\u7ae0\u7684\u65f6\u5019\u5df2\u7ecf\u5f88\u4e45\u6ca1\u6709\u7ef4\u62a4\uff0c\u8fd9\u610f\u5473\u7740aarch64\u67b6\u6784\u7684\u8bbe\u5907\u4f7f\u7528\u8fd9\u4e2a\u63d2\u4ef6\u7684\u95ee\u9898\u5728\u77ed\u671f\u5185\u4e0d\u4f1a\u89e3\u51b3\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"[ERROR] Failed to execute goal com.spotify:dockerfile-maven-plugin:1.4.6:build (tag-latest) on project shenyu-admin-dist: Could not build image: java.util.concurrent.ExecutionException: com.spotify.docker.client.shaded.javax.ws.rs.ProcessingException: java.lang.UnsatisfiedLinkError: could not load FFI provider jnr.ffi.provider.jffi.Provider: ExceptionInInitializerError: Can't overwrite cause with java.lang.UnsatisfiedLinkError: java.lang.UnsatisfiedLinkError: /private/var/folders/w2/j27f16yj7cvf_1cxbgqb89vh0000gn/T/jffi4972193792308935312.dylib: dlopen(/private/var/folders/w2/j27f16yj7cvf_1cxbgqb89vh0000gn/T/jffi4972193792308935312.dylib, 1): no suitable image found.  Did find:\n[ERROR]         /private/var/folders/w2/j27f16yj7cvf_1cxbgqb89vh0000gn/T/jffi4972193792308935312.dylib: no matching architecture in universal wrapper\n[ERROR]         /private/var/folders/w2/j27f16yj7cvf_1cxbgqb89vh0000gn/T/jffi4972193792308935312.dylib: no matching architecture in universal wrapper\n...\n")),(0,r.kt)("p",null,"\u8fd9\u91cc\u6709\u4e2a\u4e34\u65f6\u7684\u89e3\u51b3\u65b9\u6848\uff1a"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u6253\u5f00\u4e00\u4e2a\u65b0\u7684shell\uff0c\u8f93\u5165\u5982\u4e0b\u547d\u4ee4\uff0c\u5229\u7528 socat \u5c06 unix socket \u8def\u7531\u5230 tcp \u7aef\u53e3"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"socat TCP-LISTEN:2375,range=127.0.0.1/32,reuseaddr,fork UNIX-CLIENT:/var/run/docker.sock\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u8bbe\u7f6e\u73af\u5883\u53d8\u91cf"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"export DOCKER_HOST=tcp://127.0.0.1:2375\n")))),(0,r.kt)("h3",{id:"\u6784\u5efaexamples\u6a21\u5757"},"\u6784\u5efaexamples\u6a21\u5757"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"- name: Build examples\n  if: env.SKIP_CI != 'true'\n  run: ./mvnw -B clean install -Pexample -Dmaven.javadoc.skip=true -Dmaven.test.skip=true -f ./shenyu-examples/pom.xml\n")),(0,r.kt)("p",null,"\u56e0\u4e3a\u8003\u8651\u5230release\u7684\u9700\u8981\uff0c\u76ee\u524d\u9879\u76ee\u6839\u76ee\u5f55\u4e0b\u7684pom\u6587\u4ef6\u4e2d\u4e0d\u9971\u542bexample\u5b50\u6a21\u5757\uff0c\u6240\u4ee5\u4e0a\u9762\u8fd9\u4e2a\u6b65\u9aa4\u53e6\u5916\u6784\u5efa\u4e86examples\u6a21\u5757\u3002"),(0,r.kt)("p",null,"\u4e0e\u4e0a\u9762\u7c7b\u4f3c\uff0c\u8fd9\u884c\u547d\u4ee4\u4e5f\u4f1a\u5229\u7528maven\u7684\u63d2\u4ef6\u6784\u5efa\u955c\u50cf\uff0c\u4ee5\u4f9b\u6211\u4eec\u540e\u7eeddocker\u7f16\u6392\u4f7f\u7528\u3002"),(0,r.kt)("h3",{id:"\u6784\u5efa\u5b9a\u5236\u5316\u7f51\u5173"},"\u6784\u5efa\u5b9a\u5236\u5316\u7f51\u5173"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"- name: Build integrated tests\n  if: env.SKIP_CI != 'true'\n  run: ./mvnw -B clean install -Pit -DskipTests -f ./shenyu-integrated-test/pom.xml\n")),(0,r.kt)("p",null,"\u4e3a\u4e86\u7ec6\u5206Apache ShenYu\u7684\u4e0d\u540c\u529f\u80fd\u7684\u96c6\u6210\u6d4b\u8bd5\uff0c\u6211\u4eec\u5728\u8fd9\u4e00\u6b65\u5c06\u6784\u5efa\u96c6\u6210\u6d4b\u8bd5\u6a21\u5757\u5b9a\u5236\u7684\u7f51\u5173\u3002\u6240\u8c13\u7684\u201c\u5b9a\u5236\u201d\u5c31\u662f\u5728pom\u6587\u4ef6\u4e2d\u5f15\u5165\u9700\u8981\u7684\u6700\u5c11\u4f9d\u8d56\uff0c\u7136\u540e\u4ee3\u66ff\u9ed8\u8ba4\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"shenyu-bootstrap"),"\u3002\u4e0e\u4e0a\u9762\u4e24\u4e2a\u6b65\u9aa4\u7c7b\u4f3c\uff0c\u8fd9\u4e00\u6b65\u4e5f\u4f1a\u6784\u5efa\u51fadocker\u955c\u50cf\u3002"),(0,r.kt)("p",null,"\u503c\u5f97\u6ce8\u610f\u7684\u662f\uff0c\u8fd9\u91cc\u7684\u6253\u5305\u6784\u5efa\u7684\u65b9\u5f0f\u4e0e ",(0,r.kt)("inlineCode",{parentName:"p"},"shenyu-dist")," \u6a21\u5757\u7684\u6709\u4e00\u4e9b\u4e0d\u540c\uff0c\u4f60\u53ef\u4ee5\u901a\u8fc7\u5bf9\u6bd4pom\u6587\u4ef6\u53d1\u73b0\u3002"),(0,r.kt)("h3",{id:"\u8fd0\u884cdocker-compose"},"\u8fd0\u884cdocker compose"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"- name: Start docker compose\n  if: env.SKIP_CI != 'true'\n  run: docker-compose -f ./shenyu-integrated-test/${{ matrix.case }}/docker-compose.yml up -d\n")),(0,r.kt)("p",null,"\u8fd9\u4e00\u6b65\u5c06\u4f1a\u6839\u636e\u96c6\u6210\u6d4b\u8bd5\u6a21\u5757\u4e0b\u7f16\u5199\u597d\u7684\u4e0d\u540c\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"docker-compose.yml")," \u6587\u4ef6\uff0c\u8fdb\u884cdocker\u7f16\u6392\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'version: "3.9"\nservices:\n  shenyu-zk:\n    container_name: shenyu-zk\n    image: zookeeper:3.5\n    ...\n  shenyu-redis:\n    image: redis:6.0-alpine\n    container_name: shenyu-redis\n    ...\n\n  shenyu-examples-http:\n    deploy:\n      resources:\n        limits:\n          memory: 2048M\n    container_name: shenyu-examples-http\n    image: shenyu-examples-http:latest\n    ...\n\n  shenyu-admin:\n    image: apache/shenyu-admin:latest\n    container_name: shenyu-admin\n    ...\n\n  shenyu-integrated-test-http:\n    container_name: shenyu-integrated-test-http\n    image: apache/shenyu-integrated-test-http:latest\n    ...\n    depends_on:\n      shenyu-admin:\n        condition: service_healthy\n    healthcheck:\n      test: [ "CMD", "wget", "http://shenyu-integrated-test-http:9195/actuator/health" ]\n      timeout: 2s\n      retries: 30\n\nnetworks:\n  shenyu:\n    name: shenyu\n')),(0,r.kt)("p",null,"\u4f8b\u5982 ",(0,r.kt)("inlineCode",{parentName:"p"},"shenyu-integrated-test-http")," \u6a21\u5757\u4e0b\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"docker-compose.yml"),"\uff0c\u6309\u987a\u5e8f\u542f\u52a8\u4e86zookeeper\u3001redis\u3001example\u3001admin\u3001\u7f51\u5173\u7b49\u670d\u52a1\u3002\u5176\u4e2d\uff0cexample\u3001admin\u3001\u7f51\u5173\u7684\u955c\u50cf\u662f\u6211\u4eec\u4e4b\u524d\u6784\u5efa\u7684\u3002"),(0,r.kt)("p",null,"\u5176\u4e2d\uff0cdocker-compose\u5229\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"depends_on")," \u786e\u5b9a\u4e86\u670d\u52a1\u4e4b\u95f4\u7684\u62d3\u6251\u5173\u7cfb\uff0c\u5e76\u4e14\u5927\u90e8\u5206\u670d\u52a1\u90fd\u6709\u76f8\u5e94\u7684\u5065\u5eb7\u68c0\u67e5\uff0c\u5f85\u5065\u5eb7\u68c0\u67e5\u901a\u8fc7\u540e\u624d\u4f1a\u542f\u52a8\u4e0b\u4e00\u4e2a\u670d\u52a1\u3002"),(0,r.kt)("h3",{id:"\u8fd0\u884c\u5065\u5eb7\u68c0\u67e5\u7b49\u5f85docker-compose\u542f\u52a8\u5b8c\u6bd5"},"\u8fd0\u884c\u5065\u5eb7\u68c0\u67e5\uff0c\u7b49\u5f85docker-compose\u542f\u52a8\u5b8c\u6bd5"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"- name: Wait for docker compose start up completely\n  if: env.SKIP_CI != 'true'\n  run: bash ./shenyu-integrated-test/${{ matrix.case }}/script/healthcheck.sh\n")),(0,r.kt)("p",null,"\u5728\u8fd9\u4e00\u6b65\uff0c\u5bbf\u4e3b\u673a\u4f1a\u8fd0\u884c ",(0,r.kt)("inlineCode",{parentName:"p"},"healthcheck.sh")," \u8fd9\u4e2a\u811a\u672c\uff0c\u7136\u540e\u5229\u7528 curl \u547d\u4ee4\u8bbf\u95ee\u5404\u4e2a\u670d\u52a1\u5217\u8868\uff08\u5728services.list\u6587\u4ef6\u4e2d\uff09\u7684\u5065\u5eb7\u72b6\u6001\u63a5\u53e3 ",(0,r.kt)("inlineCode",{parentName:"p"},"/actuator/health"),"\uff0c\u4e00\u76f4\u5230\u670d\u52a1\u72b6\u6001\u90fd\u4e3a\u6b63\u5e38\u624d\u4f1a\u7ee7\u7eed\u3002"),(0,r.kt)("h3",{id:"\u8fd0\u884c\u6d4b\u8bd5"},"\u8fd0\u884c\u6d4b\u8bd5"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"- name: Run test\n  id: test\n  if: env.SKIP_CI != 'true'\n  run: ./mvnw test -Pit -f ./shenyu-integrated-test/${{ matrix.case }}/pom.xml\n  continue-on-error: true\n")),(0,r.kt)("p",null,"\u8fd9\u4e00\u6b65\u5c31\u662f\u5229\u7528maven test\u547d\u4ee4\uff0c\u9010\u4e2a\u6267\u884c ",(0,r.kt)("inlineCode",{parentName:"p"},"/src/test/"),"  \u76ee\u5f55\u4e0b\u7684\u6d4b\u8bd5\u7c7b\u3002"),(0,r.kt)("h3",{id:"\u67e5\u770bdocker-compose\u65e5\u5fd7"},"\u67e5\u770bDocker Compose\u65e5\u5fd7"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'- name: Check test result\n  if: env.SKIP_CI != \'true\'\n  run: |\n    docker-compose -f ./shenyu-integrated-test/${{ matrix.case }}/docker-compose.yml logs --tail="all"\n    if [[ ${{steps.test.outcome}} == "failure" ]]; then\n      echo "Test Failed"\n      exit 1\n    else\n      echo "Test Successful"\n      exit 0\n    fi\n')),(0,r.kt)("p",null,"\u5f53\u5de5\u4f5c\u6d41\u51fa\u73b0\u9519\u8bef\u65f6\uff0cdocker compose\u7684\u65e5\u5fd7\u53ef\u4ee5\u5e2e\u52a9\u6211\u4eec\u66f4\u597d\u7684\u6392\u67e5\u95ee\u9898\uff0c\u6240\u4ee5\u5728\u8fd9\u4e00\u6b65\u6211\u4eec\u5c06docker compose\u7684\u65e5\u5fd7\u6253\u5370\u51fa\u6765\u3002"))}u.isMDXComponent=!0}}]);