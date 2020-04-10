(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{156:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return i})),t.d(n,"metadata",(function(){return c})),t.d(n,"rightToc",(function(){return l})),t.d(n,"default",(function(){return p}));var a=t(1),o=t(9),r=(t(0),t(177)),i={title:"Inline Loaders"},c={id:"inline-loaders",title:"Inline Loaders",description:"When working on a feature module or a library (which is common in a monorepo environment), we may want to have the translation files inside the module folder and ship them together with it.",source:"@site/docs/inline-loaders.mdx",permalink:"/transloco/docs/inline-loaders",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/inline-loaders.mdx",sidebar:"docs",previous:{title:"Scope Configuration",permalink:"/transloco/docs/scope-configuration"},next:{title:"Unit Testing",permalink:"/transloco/docs/unit-testing"}},l=[],s={rightToc:l};function p(e){var n=e.components,t=Object(o.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},s,t,{components:n,mdxType:"MDXLayout"}),Object(r.b)("p",null,"When working on a feature module or a library (which is common in a monorepo environment), we may want to have the translation files inside the module folder and ship them together with it.\nTo enable this feature, Transloco supports ",Object(r.b)("inlineCode",{parentName:"p"},"scope")," with inline loaders. We can pass the scope name and an inline loader that leverages Webpack import function to lazy load the local translation files."),Object(r.b)("p",null,"Let's say we have the following Angular CLI project:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"\ud83d\udce6projects\n \u2517 \ud83d\udcc2feature-module\n \u2503 \u2523 \ud83d\udcc2src\n \u2503 \u2503 \u2523 \ud83d\udcc2lib\n \u2503 \u2503 \u2503 \u2523 \ud83d\udcc2i18n\n \u2503 \u2503 \u2503 \u2503 \u2523 \ud83d\udcdcen.json\n \u2503 \u2503 \u2503 \u2503 \u2517 \ud83d\udcdces.json\n \u2503 \u2503 \u2503 \u2523 \ud83d\udcdcfeature-module.component.ts\n \u2503 \u2503 \u2503 \u2523 \ud83d\udcdcfeature-module.module.ts\n \u2503 \u2503 \u2503 \u2517 \ud83d\udcdcfeature-module.service.ts\n \u2503 \u2503 \u2523 \ud83d\udcdcpublic-api.ts\n\ud83d\udce6src\n \u2523 \ud83d\udcc2app\n \u2503 \u2523 \ud83d\udcdcapp-routing.module.ts\n \u2503 \u2523 \ud83d\udcdcapp.component.css\n \u2503 \u2523 \ud83d\udcdcapp.component.html\n \u2503 \u2523 \ud83d\udcdcapp.component.ts\n \u2503 \u2523 \ud83d\udcdcapp.module.ts\n \u2503 \u2517 \ud83d\udcdctransloco.loader.ts\n \u2523 \ud83d\udcc2assets\n \u2503 \u2523 \ud83d\udcc2i18n\n \u2503 \u2503 \u2523 \ud83d\udcdcen.json\n \u2503 \u2503 \u2517 \ud83d\udcdces.json\n")),Object(r.b)("p",null,"Inside the ",Object(r.b)("inlineCode",{parentName:"p"},"feature")," module, we can define the ",Object(r.b)("inlineCode",{parentName:"p"},"TRANSLOCO_SCOPE")," provider and pass an inline loader:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts",metastring:'{13} title="feature.module.ts"',"{13}":!0,title:'"feature.module.ts"'}),"export const loader = ['en', 'es'].reduce((acc, lang) => {\n  acc[lang] = () => import(`../i18n/${lang}.json`);\n  return acc;\n}, {});\n\n@NgModule({\n  imports: [TranslocoModule],\n  providers: [\n    {\n      provide: TRANSLOCO_SCOPE,\n      useValue: {\n        scope: 'scopeName',\n        loader\n      }\n    }\n  ],\n  declarations: [YourComponent],\n  exports: [YourComponent]\n})\nexport class FeatureModule {}\n")),Object(r.b)("div",{className:"admonition admonition-info alert alert--info"},Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(r.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"info")),Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"Note that when using an inline loader, the ",Object(r.b)("inlineCode",{parentName:"p"},"scope")," key is used as the ",Object(r.b)("inlineCode",{parentName:"p"},"alias"),"."))),Object(r.b)("p",null,"Now we can translate our content using the ",Object(r.b)("inlineCode",{parentName:"p"},"scope")," we define:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts",metastring:'{5} title="my-comp.component.ts"',"{5}":!0,title:'"my-comp.component.ts"'}),"@Component({\n  selector: 'your-comp',\n  template: `\n    <ng-container *transloco=\"let t\">\n      <p>{{ t('scopeName.title') }}</p>\n    </ng-container>\n  `\n})\nexport class YourComponent {}\n")),Object(r.b)("p",null,"And lazy-loaded both the ",Object(r.b)("inlineCode",{parentName:"p"},"feature")," module and its translation files in our application:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts",metastring:'title="app.module.ts"',title:'"app.module.ts"'}),"@NgModule({\n  declarations: [AppComponent],\n  imports: [\n    TranslocoModule,\n    RouterModule.forRoot([\n    {\n       path: 'route-name',\n       loadChildren: () =>\n         import('path/to/feature/module').then( m => m.FeatureModule)\n      }\n    ])\n  ],\n  bootstrap: [AppComponent]\n})\nexport class AppModule {}\n")),Object(r.b)("div",{className:"admonition admonition-info alert alert--info"},Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(r.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"info")),Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"Note that following the Angular DI rules, it can be done either in a feature module that we lazy-loaded or at the component providers level."))),Object(r.b)("p",null,"You can find a complete working example that uses ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/NetanelBasal/transloco-with-nx-libs"}),"nx")," here."))}p.isMDXComponent=!0},177:function(e,n,t){"use strict";t.d(n,"a",(function(){return m})),t.d(n,"b",(function(){return b}));var a=t(0),o=t.n(a);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,o=function(e,n){if(null==e)return{};var t,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=o.a.createContext({}),p=function(e){var n=o.a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):c({},n,{},e)),t},m=function(e){var n=p(e.components);return o.a.createElement(s.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},u=Object(a.forwardRef)((function(e,n){var t=e.components,a=e.mdxType,r=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),m=p(t),u=a,b=m["".concat(i,".").concat(u)]||m[u]||d[u]||r;return t?o.a.createElement(b,c({ref:n},s,{components:t})):o.a.createElement(b,c({ref:n},s))}));function b(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var r=t.length,i=new Array(r);i[0]=u;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var s=2;s<r;s++)i[s]=t[s];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,t)}u.displayName="MDXCreateElement"}}]);