(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{173:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return p}));var a=n(1),r=n(9),o=(n(0),n(177)),i={title:"Message Format"},l={id:"plugins/message-format",title:"Message Format",description:"Transpiler for `@ngneat/transloco` that uses `messageformat.js` to compile translations using ICU syntax for handling pluralization and gender.",source:"@site/docs/plugins/message-format.mdx",permalink:"/docs/plugins/message-format",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/plugins/message-format.mdx",sidebar:"docs",previous:{title:"Scoped Library Extractor",permalink:"/docs/tools/scope-lib-extractor"},next:{title:"Persist Translations",permalink:"/docs/plugins/persist"}},s=[{value:"Installation",id:"installation",children:[]},{value:"Usage",id:"usage",children:[]},{value:"Locale initialization",id:"locale-initialization",children:[]},{value:"Advanced configuration",id:"advanced-configuration",children:[]}],c={rightToc:s};function p(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Transpiler for ",Object(o.b)("inlineCode",{parentName:"p"},"@ngneat/transloco")," that uses ",Object(o.b)("inlineCode",{parentName:"p"},"messageformat.js")," to compile translations using ICU syntax for handling pluralization and gender."),Object(o.b)("p",null,"Messageformat is a mechanism for handling both pluralization and gender in your app."),Object(o.b)("p",null,"You can see its format guide ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://messageformat.github.io/messageformat/page-guide"}),"here"),"."),Object(o.b)("h2",{id:"installation"},"Installation"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"npm i messageformat @ngneat/transloco-messageformat\n")),Object(o.b)("h2",{id:"usage"},"Usage"),Object(o.b)("p",null,"The ",Object(o.b)("inlineCode",{parentName:"p"},"MessageFormatTranspiler")," is compatible with the DefaultTranspiler and therefore you can switch without worry that it will break your current translations."),Object(o.b)("p",null,"It then enables support for the following within youIt enables support for the following within your i18n translation files:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json",metastring:'title="en.json"',title:'"en.json"'}),'{\n  "mySelectRule": "{myVar, select, val1 {Value 1} val2 {Value 2} other {Other Value}}",\n  "myPluralRule": "{myCount, plural, =0 {no results} one {1 result} other {# results}}"\n}\n')),Object(o.b)("p",null,"To enable this plugin, add the following to the imports array in your ",Object(o.b)("inlineCode",{parentName:"p"},"app.module.ts"),":"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts",metastring:'title="app.module.ts"',title:'"app.module.ts"'}),"import { TranslocoMessageFormatModule } from '@ngneat/transloco-messageformat';\n\n@NgModule({\n  imports: [\n    TranslocoMessageFormatModule.init()\n  ]\n})\n")),Object(o.b)("h2",{id:"locale-initialization"},"Locale initialization"),Object(o.b)("p",null,"By default, messageformat initializes ",Object(o.b)("em",{parentName:"p"},"all")," locales. You could also provide the locales you will need:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts",metastring:'title="app.module.ts"',title:'"app.module.ts"'}),"@NgModule({\n  imports: [\n    TranslocoMessageFormatModule.init(\n      {\n        locales: 'en-GB'\n      }\n    )\n  ]\n})\n")),Object(o.b)("p",null,"The value for ",Object(o.b)("inlineCode",{parentName:"p"},"locales")," is either a string or an array of strings. The first locale is used as the default locale by messageformat. More info ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://messageformat.github.io/messageformat/MessageFormat"}),"here"),"."),Object(o.b)("h2",{id:"advanced-configuration"},"Advanced configuration"),Object(o.b)("p",null,"MessageFormat instances provide some methods to influence its behaviour, among them ",Object(o.b)("inlineCode",{parentName:"p"},"addFormatters"),", ",Object(o.b)("inlineCode",{parentName:"p"},"setBiDiSupport"),", and ",Object(o.b)("inlineCode",{parentName:"p"},"setStrictNumberSign"),". Learn about their meaning ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://messageformat.github.io/messageformat/MessageFormat"}),"here")),Object(o.b)("p",null,"This is how you would enable bi-directional support and add a custom formatter, for example:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts",metastring:'title="app.module.ts"',title:'"app.module.ts"'}),"@NgModule({\n  imports: [\n    TranslocoMessageFormatModule.init(\n      {\n        biDiSupport: true,\n        customFormatters: { upcase: v => v.toUpperCase() }\n      }\n    )\n  ]\n})\n")))}p.isMDXComponent=!0},177:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return d}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=r.a.createContext({}),p=function(e){var t=r.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l({},t,{},e)),n},u=function(e){var t=p(e.components);return r.a.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},b=Object(a.forwardRef)((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(n),b=a,d=u["".concat(i,".").concat(b)]||u[b]||m[b]||o;return n?r.a.createElement(d,l({ref:t},c,{components:n})):r.a.createElement(d,l({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=b;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);