"use strict";(self.webpackChunkkotestdocs=self.webpackChunkkotestdocs||[]).push([[48240],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>m});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=n.createContext({}),a=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},c=function(e){var t=a(e.components);return n.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=a(r),m=o,f=d["".concat(p,".").concat(m)]||d[m]||u[m]||i;return r?n.createElement(f,s(s({ref:t},c),{},{components:r})):n.createElement(f,s({ref:t},c))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,s=new Array(i);s[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:o,s[1]=l;for(var a=2;a<i;a++)s[a]=r[a];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},7434:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>a});var n=r(87462),o=(r(67294),r(3905));const i={id:"props",title:"Properties",slug:"intellij-properties.html"},s=void 0,l={unversionedId:"intellij/props",id:"version-5.9/intellij/props",title:"Properties",description:"When running tests via the intellij runner, properties set using gradle.properties or in a gradle build file won't be",source:"@site/versioned_docs/version-5.9/intellij/props.md",sourceDirName:"intellij",slug:"/intellij/intellij-properties.html",permalink:"/docs/intellij/intellij-properties.html",draft:!1,editUrl:"https://github.com/kotest/kotest/blob/master/documentation/versioned_docs/version-5.9/intellij/props.md",tags:[],version:"5.9",frontMatter:{id:"props",title:"Properties",slug:"intellij-properties.html"},sidebar:"intellij",previous:{title:"Test Explorer",permalink:"/docs/intellij/intellij-test-explorer.html"}},p={},a=[{value:"Common use case",id:"common-use-case",level:3},{value:"Specifying the properties filename",id:"specifying-the-properties-filename",level:3}],c={toc:a};function u(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"When running tests via the intellij runner, properties set using ",(0,o.kt)("inlineCode",{parentName:"p"},"gradle.properties")," or in a gradle build file won't be\npicked up because the runner is not set to use Gradle."),(0,o.kt)("p",null,"To support runtime system properties, the Kotest framework will always look for key value pairs inside\na ",(0,o.kt)("inlineCode",{parentName:"p"},"kotest.properties")," file located on the classpath (eg, in src/main/resources)."),(0,o.kt)("p",null,"Any key value pairs located in this file will be set as a system property before any tests execute."),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"Any properties specified in the ",(0,o.kt)("inlineCode",{parentName:"p"},"kotest.properties")," file work for both command line via Gradle, and tests executed via the Intellij plugin.")),(0,o.kt)("p",null,"For example, after adding this file to your classpath as ",(0,o.kt)("inlineCode",{parentName:"p"},"kotest.properties"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"foo=bar\n")),(0,o.kt)("p",null,"The following test would pass:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin"},'class FooTest : DescribeSpec() {\n  init {\n    describe("after adding kotest.properties") {\n      it("foo should be set") {\n         System.getProperty("foo") shouldBe "bar"\n      }\n    }\n  }\n}\n')),(0,o.kt)("h3",{id:"common-use-case"},"Common use case"),(0,o.kt)("p",null,"It is common to disable the classpath scanning capabilities of Kotest to save some startup time, if those features are not used.\nTo do this place, the following lines into the ",(0,o.kt)("inlineCode",{parentName:"p"},"kotest.properties")," file:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"kotest.framework.classpath.scanning.config.disable=true\nkotest.framework.classpath.scanning.autoscan.disable=true\n")),(0,o.kt)("h3",{id:"specifying-the-properties-filename"},"Specifying the properties filename"),(0,o.kt)("p",null,"If you don't wish to name the file ",(0,o.kt)("inlineCode",{parentName:"p"},"kotest.properties"),", or perhaps you want to support different files based on an environment,\nthen you can use the system property ",(0,o.kt)("inlineCode",{parentName:"p"},"kotest.properties.filename")," to set the properties filename."),(0,o.kt)("p",null,"For example, you could launch tests with ",(0,o.kt)("inlineCode",{parentName:"p"},"kotest.properties.filename=cluster.prd.properties")," then the key value file named\n",(0,o.kt)("inlineCode",{parentName:"p"},"cluster.prd.properties")," would be loaded before any tests are executed."))}u.isMDXComponent=!0}}]);