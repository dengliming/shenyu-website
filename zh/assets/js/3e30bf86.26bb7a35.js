"use strict";(self.webpackChunkshenyu_website=self.webpackChunkshenyu_website||[]).push([[2074,79039],{13022:(e,t,a)=>{a.r(t),a.d(t,{default:()=>c});var n=a(67294),o=a(64926);const r={container:"container_tWpt",content:"content_XVLC",categray:"categray_u3Ut",darkAnchor:"darkAnchor_Os7F",title:"title_rVKQ",card:"card_7uDe",cardImage:"cardImage_R6LG",postTitle:"postTitle_PNgZ",postAbs:"postAbs_3e9+",authorInfo:"authorInfo_e3mn",authorImg:"authorImg_Df79",authorName:"authorName_24yP",authorDate:"authorDate_t7VH",read:"read_OgJe",catalogue:"catalogue_quox",catalogueBox:"catalogueBox_2qDB",catalogueBoxUl:"catalogueBoxUl_10CC",catalogueBoxLi:"catalogueBoxLi_4QVA",catalogueBoxA:"catalogueBoxA_mY3I",link:"link_SrQ0"};var i=a(24973);const s=[{categray:"SPI",posts:[{title:n.createElement(i.Z,null,"SPI Source Code Analysis"),author:"Throwable (Contributor)",autPage:"https://github.com/zjcscut/",autImg:"/img/blog/throwable.jpeg",src:"SPI-SourceCode-Analysis-SPI",cover:"/img/blog/4-1.png",date:"2022-09-12",abs:n.createElement(i.Z,null,"Recently,when I read the source code of open source project Apache Shenyu API gateway,I find and many core components of the gateway are loaded with the SPI module. Here I will analyzes the source code of SPI module in Shenyu gateway.")},{title:n.createElement(i.Z,null,"MatchStrategy -- analyze the design based on SPI"),author:"Huihui Yin (Contributor)",autPage:"https://github.com/changanjennifer",autImg:"/img/blog/jennifer.png",src:"SPI-SourceCode-Analysis-MatchStrategy-SPI",cover:"/img/blog/4-1.png",date:"2021-07-2",abs:n.createElement(i.Z,null,"Gateway applications need to support a variety of load balancing strategies, including random,Hashing, RoundRobin and so on. In Apache Shenyu gateway, it not only realizes such traditional algorithms, but also makes smoother traffic processing for the entry of server nodes through detailed processing such as traffic warm-up, so as to obtain better overall stability. In this article, let's walk through how Apache Shenyu is designed and implemented this part of the function.")},{title:n.createElement(i.Z,null,"PredicateJudge -- analyze the design based on SPI"),author:"Huihui Yin (Contributor)",autPage:"https://github.com/changanjennifer",autImg:"/img/blog/jennifer.png",src:"SPI-SourceCode-Analysis-PredicateJudge-SPI",cover:"/img/blog/4-2.png",date:"2021-07-2",abs:n.createElement(i.Z,null,"In most of the plugins ( such as Dubbo, gRPC,Spring-cloud, etc) of Apache Shenyu, the routingparameters are designed to support the combination of multiple conditions. In order to realize such requirements, the parameters and behaviors are abstracted to three parts according to its SPI mechanism, and implemented in shenyu-plugin-base module.")},{title:n.createElement(i.Z,null,"LoadBalance SPI Source Code Analysis"),author:"Huihui Yin (Contributor)",autPage:"https://github.com/changanjennifer",autImg:"/img/blog/jennifer.png",src:"SPI-SourceCode-Analysis-LoadBalance-SPI",cover:"/img/blog/4-3.png",date:"2021-07-2",abs:n.createElement(i.Z,null,"Apache Shenyu has been identified as a gateway application which supports a variety of protocols and microservice frameworks such as Dubbo, gRPC, Spring-Cloud, etc. To do this, the product has accomplished an elegant SPI (Service Provider Interface) as its foundation, and make the Rule data parsing and predicting program very simple , resiliency and security. As to rule data parsing processing, the SPI design increases the product's scalability. When appending new plugin, in most cases, the existing module is enough for rule data parsing , otherwise it can be rapidly carry out with tiny effort.")},{title:n.createElement(i.Z,null,"RateLimiter SPI code analysis"),author:"Huihui Yin (Contributor)",autPage:"https://github.com/changanjennifer",autImg:"/img/blog/jennifer.png",src:"SPI-SourceCode-Analysis-RateLimiter-SPI",cover:"/img/blog/4-4.png",date:"2021-07-2",abs:n.createElement(i.Z,null,"Rate limiter is a very important integral of gateway application, to deal with high traffic. When the system is attacked abnormally by a large number of traffic gathered in a short time; When there are a large number of lower priority request need to be slow down or else it will effect your high priority transactions; Or sometimes your system can not afford the regular traffic; in these scenarios, we need to start rate limiter component to protect our system, through rejection, wait, load shedding,etc, limit the requests to an acceptable quantities, or only certain domains (or services) requests can get through.")}]},{categray:"RegisterCenter",posts:[{title:n.createElement(i.Z,null,"Register Center Source Code Analysis of Http Register"),author:"midnight2104 (PMC)",autImg:"/img/blog/midnight2104.png",autPage:"https://github.com/midnight2104",src:"RegisterCenter-SourceCode-Analysis-Http-Register",cover:"/img/blog/5-1.png",date:"2021-07-2",abs:n.createElement(i.Z,null,"In ShenYu gateway, the registration center is used to register the client information to shenyu-admin, admin then synchronizes this information to the gateway through data synchronization, and the gateway completes traffic filtering through these data. The client information mainly includes interface information and URI information.")}]},{categray:"Start",posts:[{title:n.createElement(i.Z,null,"Apache ShenYu Start Demo"),author:"Kunshuai Zhu (PMC)",autImg:"/img/blog/zhukunshuai.png",autPage:"https://github.com/JooKS-me",src:"Start-SourceCode-Analysis-Start-Demo",cover:"/img/blog/6-1.png",date:"2021-07-2",abs:n.createElement(i.Z,null,"Apache ShenYu Start Demo")},{title:n.createElement(i.Z,null,"Guide for New Contributors to Start avoid Pitfalls"),author:"Yuxuan Zhang (Contributor)",autImg:"/img/blog/zhangyuxuan.png",autPage:"https://github.com/zuobiao-zhou",src:"Start-SourceCode-Analysis-Start-Demo-for-Contributor",cover:"/img/blog/7-1.png",date:"2023-04-18",abs:n.createElement(i.Z,null,'As a first-time developer in the `Shenyu` community, I encountered some "Pitfalls" that were not mentioned in the tutorials I followed to start and develop the project. I have documented the detailed steps I took to start `shenyu`, `shenyu-dashboard`, `shenyu-website` in this blog, hoping to help more new contributors in the community.')}]},{categray:"DataSync",posts:[{title:n.createElement(i.Z,null,"Etcd Data Synchronization Source Code Analysis"),author:"4zd (Contributor)",autImg:"/img/blog/4zd.png",autPage:"https://github.com/4zd",src:"DataSync-SourceCode-Analysis-Etcd-Data-Sync",cover:"/img/blog/1-1.png",date:"2021-07-2",abs:n.createElement(i.Z,null,"In ShenYu gateway, data synchronization refers to how to synchronize the updated data to the gateway after the data is sent in the background management system. The Apache ShenYu gateway currently supports data synchronization for ZooKeeper, WebSocket, http long poll, Nacos, Etcd and Consul. The main content of this article is based on Etcd data synchronization source code analysis.")},{title:n.createElement(i.Z,null,"Http Long Polling Data Synchronization Source Code Analysis"),author:"midnight2104 (PMC)",autImg:"/img/blog/midnight2104.png",autPage:"https://github.com/midnight2104",src:"DataSync-SourceCode-Analysis-Http-Data-Sync",cover:"/img/blog/1-2.png",date:"2022-07-2",abs:n.createElement(i.Z,null,"In ShenYu gateway, data synchronization refers to how to synchronize the updated data to the gateway after the data is sent in the background management system. The Apache ShenYu gateway currently supports data synchronization for ZooKeeper, WebSocket, http long poll, Nacos, etcd and Consul. The main content of this article is based on http long poll data synchronization source code analysis.")},{title:n.createElement(i.Z,null,"Nacos Data Synchronization Source Code Analysis"),author:"4zd (Contributor)",autImg:"/img/blog/4zd.png",autPage:"https://github.com/4zd",src:"DataSync-SourceCode-Analysis-Nacos-Data-Sync",cover:"/img/blog/1-3.png",date:"2022-07-2",abs:n.createElement(i.Z,null,"In ShenYu gateway, data synchronization refers to how to synchronize the updated data to the gateway after the data is sent in the background management system. The Apache ShenYu gateway currently supports data synchronization for ZooKeeper, WebSocket, http long poll, Nacos, etcd and Consul. The main content of this article is based on Nacos data synchronization source code analysis.")},{title:n.createElement(i.Z,null,"WebSocket Data Synchronization Source Code Analysis"),author:"midnight2104 (PMC)",autImg:"/img/blog/midnight2104.png",autPage:"https://github.com/midnight2104",src:"DataSync-SourceCode-Analysis-WebSocket-Data-Sync",cover:"/img/blog/1-4.png",date:"2022-07-2",abs:n.createElement(i.Z,null,"In ShenYu gateway, data synchronization refers to how to synchronize the updated data to the gateway after the data is sent in the background management system. The Apache ShenYu gateway currently supports data synchronization for ZooKeeper, WebSocket, http long poll, Nacos, etcd and Consul. The main content of this article is based on WebSocket data synchronization source code analysis.")},{title:n.createElement(i.Z,null,"ZooKeeper Data Synchronization Source Code Analysis"),author:"midnight2104 (PMC)",autImg:"/img/blog/midnight2104.png",autPage:"https://github.com/midnight2104",src:"DataSync-SourceCode-Analysis-ZooKeeper-Data-Sync",cover:"/img/blog/1-5.png",date:"2022-07-2",abs:n.createElement(i.Z,null,"In ShenYu gateway, data synchronization refers to how to synchronize the updated data to the gateway after the data is sent in the background management system. The Apache ShenYu gateway currently supports data synchronization for ZooKeeper, WebSocket, http long poll, Nacos, etcd and Consul. The main content of this article is based on WebSocket data synchronization source code analysis.")}]},{categray:"Integration Test",posts:[{title:n.createElement(i.Z,null,"Integration Test Analysis"),author:"Kunshuai Zhu (PMC)",autImg:"/img/blog/zhukunshuai.png",autPage:"https://github.com/JooKS-me",src:"IntegrationTest-Analysis",cover:"/img/logo.svg",date:"2022-07-2",abs:n.createElement(i.Z,null,"This article will provide an in-depth analysis of Apache ShenYu's integration tests.")}]},{categray:"Plugin",posts:[{title:n.createElement(i.Z,null,"Code Analysis For Context-Path Plugin"),author:"Kunshuai Zhu (PMC)",autImg:"/img/blog/zhukunshuai.png",autPage:"https://github.com/JooKS-me",src:"Plugin-SourceCode-Analysis-Context-Path-Plugin",cover:"/img/logo.svg",date:"2021-07-2",abs:n.createElement(i.Z,null,"Code Analysis For Context-Path Plugin")},{title:n.createElement(i.Z,null,"Code Analysis For Dubbo Plugin"),author:"midnight2104 (PMC)",autImg:"/img/blog/midnight2104.png",autPage:"https://github.com/midnight2104",src:"Plugin-SourceCode-Analysis-Dubbo-Plugin",cover:"/img/blog/3-2.png",date:"2021-07-2",abs:n.createElement(i.Z,null,"The ShenYu gateway uses the divide plugin to handle http requests. You can see the official documentation Quick start with Http to learn how to use this plugin.")},{title:n.createElement(i.Z,null,"Code Analysis For Param-Mapping Plugin"),author:"Kunshuai Zhu (PMC)",autImg:"/img/blog/zhukunshuai.png",autPage:"https://github.com/JooKS-me",src:"Plugin-SourceCode-Analysis-Param-Mapping-Plugin",cover:"/img/blog/3-3.jpg",date:"2021-07-2",abs:n.createElement(i.Z,null,"The Apache ShenYu gateway uses the dubbo plugin to make calls to the dubbo service. You can see the official documentation Dubbo Quick Start to learn how to use the plugin.")},{title:n.createElement(i.Z,null,"Code Analysis For Divide Plugin"),author:"midnight2104 (PMC)",autImg:"/img/blog/midnight2104.png",autPage:"https://github.com/midnight2104",src:"Plugin-SourceCode-Analysis-Divide-Plugin",cover:"/img/blog/3-4.png",date:"2021-07-2",abs:n.createElement(i.Z,null,"Code Analysis For Divide Plugin")}]}];var l=a(73727);const c=function(){const[e,t]=(0,n.useState)(0),[a,c]=(0,n.useState)(!0);let u=(0,n.useRef)([n.createRef(),n.createRef(),n.createRef(),n.createRef(),n.createRef(),n.createRef()]),h=(0,n.useRef)([n.createRef(),n.createRef(),n.createRef(),n.createRef(),n.createRef(),n.createRef()]);return(0,n.useEffect)((()=>{let e=window.location.href;"/"==e[e.length-1]?c(!1):c(!0);let a=()=>{for(let e=0;e<h.current.length;e++){let a=h.current[e].current.getBoundingClientRect().y;a>=90&&a<=300&&t(e)}};return window.addEventListener("scroll",a),()=>window.removeEventListener("scroll",a)}),[]),n.createElement(o.Z,{title:"Blog"},n.createElement("div",{className:r.container},n.createElement("div",{className:r.content},s.map(((e,t)=>n.createElement("div",{className:r.categray,key:t},n.createElement("div",{className:r.darkAnchor,id:e.categray}),n.createElement("div",{ref:h.current[t],className:r.title},e.categray," "),e.posts.map(((e,t)=>n.createElement("div",{className:r.card,key:t},n.createElement("div",{className:r.postTitle},a?n.createElement(l.rU,{className:r.link,to:"blog/"+e.src},e.title):n.createElement(l.rU,{className:r.link,to:e.src},e.title)),n.createElement("div",{className:r.authorInfo},n.createElement("a",{className:r.authorA,href:e.autPage},n.createElement("img",{className:r.authorImg,width:38,src:e.autImg})),n.createElement("div",null,n.createElement("a",{className:r.authorName,href:e.autPage},n.createElement("div",null," ",e.author," ")," "),n.createElement("div",{className:r.authorDate}," ",e.date," "))),n.createElement("div",{className:r.postAbs},e.abs),n.createElement("div",{className:r.read},a?n.createElement(l.rU,{className:r.link,to:"blog/"+e.src},n.createElement(i.Z,null,"Read More")):n.createElement(l.rU,{className:r.link,to:e.src},n.createElement(i.Z,null,"Read More")))))))))),n.createElement("div",{className:r.catalogue},n.createElement("div",{className:r.catalogueBox},n.createElement("ul",{className:r.catalogueBoxUl},s.map(((a,o)=>{const i="#"+a.categray,s="Cata"+a.categray;return n.createElement("li",{key:o,className:r.catalogueBoxLi,id:s},n.createElement("a",{ref:u.current[o],href:i,id:"catalogueBoxA",className:r.catalogueBoxA,style:{color:e==o?"var(--ifm-color-primary)":"var(--ifm-toc-link-color)"},onClick:()=>t(o)},a.categray))})))))))}},42086:(e,t,a)=>{a.d(t,{Z:()=>r});var n=a(87462),o=a(67294);const r=e=>{let{width:t=40,height:a=20,...r}=e;return o.createElement("svg",(0,n.Z)({t:"1631348384596",className:"icon",viewBox:"0 0 1024 1024",version:"1.1"},r,{"p-id":"557",width:"20",height:"20"}),o.createElement("path",{d:"M547.797333 638.208l-104.405333-103.168 1.237333-1.28a720.170667 720.170667 0 0 0 152.490667-268.373333h120.448V183.082667h-287.744V100.906667H347.605333v82.218666H59.818667V265.386667h459.178666a648.234667 648.234667 0 0 1-130.304 219.946666 643.242667 643.242667 0 0 1-94.976-137.728H211.541333a722.048 722.048 0 0 0 122.453334 187.434667l-209.194667 206.378667 58.368 58.368 205.525333-205.525334 127.872 127.829334 31.232-83.84m231.424-208.426667h-82.218666l-184.96 493.312h82.218666l46.037334-123.306667h195.242666l46.464 123.306667h82.218667l-185.002667-493.312m-107.690666 287.744l66.56-178.005333 66.602666 178.005333z",fill:"currentColor","p-id":"558"}))}}}]);