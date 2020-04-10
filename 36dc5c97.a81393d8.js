(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{153:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return i})),r.d(t,"rightToc",(function(){return s})),r.d(t,"default",(function(){return l}));var n=r(1),a=r(9),o=(r(0),r(177)),c={title:"Prefetch the User Language"},i={id:"recipes/prefetch",title:"Prefetch the User Language",description:"## Prefetch the User Language",source:"@site/docs/recipes/prefetch.mdx",permalink:"/docs/recipes/prefetch",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/recipes/prefetch.mdx",sidebar:"docs",previous:{title:"Angular",permalink:"/docs/migration/angular"},next:{title:"Using xliff",permalink:"/docs/recipes/xliff"}},s=[{value:"Prefetch the User Language",id:"prefetch-the-user-language",children:[]}],u={rightToc:s};function l(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},u,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"prefetch-the-user-language"},"Prefetch the User Language"),Object(o.b)("p",null,"We recommend pre-emptively fetching the user\u2019s data from the server, including internationalization settings, and making it available to the components, before we allow the user to interact with them."),Object(o.b)("p",null,"We want to ensure the data is available, because we don\u2019t want to incur a bad user experience, such as jumpy content or flickering CSS."),Object(o.b)("p",null,"Here's how you can achieve this using the ",Object(o.b)("inlineCode",{parentName:"p"},"APP_INITIALIZER")," token:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-ts"}),"import { APP_INITIALIZER } from '@angular/core';\nimport { UserService } from './user.service';\nimport { TranslocoService } from '@ngneat/transloco';\n\nexport function preloadUser(userService: UserService, transloco: TranslocoService) {\n  return function() {\n    return userService.getUser().then(({ lang }) => {\n      transloco.setActiveLang(lang);\n      return transloco.load(lang).toPromise();\n    }\n  };\n}\n\nexport const preLoad = {\n  provide: APP_INITIALIZER,\n  multi: true,\n  useFactory: preloadUser,\n  deps: [UserService, TranslocoService]\n};\n")),Object(o.b)("p",null,"This will make sure the application doesn't bootstrap before Transloco loads the translation file based on the current user's language."),Object(o.b)("p",null,"You can read more about it in ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://netbasal.com/optimize-user-experience-while-your-angular-app-loads-7e982a67ff1a"}),"this article"),"."))}l.isMDXComponent=!0},177:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return d}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=a.a.createContext({}),l=function(e){var t=a.a.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):i({},t,{},e)),r},p=function(e){var t=l(e.components);return a.a.createElement(u.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=Object(n.forwardRef)((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=l(r),b=n,d=p["".concat(c,".").concat(b)]||p[b]||f[b]||o;return r?a.a.createElement(d,i({ref:t},u,{components:r})):a.a.createElement(d,i({ref:t},u))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,c=new Array(o);c[0]=b;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:n,c[1]=i;for(var u=2;u<o;u++)c[u]=r[u];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,r)}b.displayName="MDXCreateElement"}}]);