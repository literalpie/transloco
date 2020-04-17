(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{132:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return o})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return p}));var a=n(1),r=n(6),i=(n(0),n(142)),l={title:"Angular"},o={id:"migration/angular",title:"Angular",description:":::info",source:"@site/docs/migration/angular.mdx",permalink:"/transloco/docs/migration/angular",editUrl:"https://github.com/ngneat/transloco/edit/master/docs/docs/migration/angular.mdx",sidebar:"docs",previous:{title:"ngx-translate",permalink:"/transloco/docs/migration/ngx"},next:{title:"Prefetch the User Language",permalink:"/transloco/docs/recipes/prefetch"}},c=[{value:"The Translation file",id:"the-translation-file",children:[]},{value:"Directives",id:"directives",children:[]}],s={rightToc:c};function p(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("div",{className:"admonition admonition-info alert alert--info"},Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(i.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"info")),Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"some manual changes might still be needed after the script ran."))),Object(i.b)("p",null,"The script will iterate over all your HTML files, build a  translation file and will execute the replacements described below."),Object(i.b)("h3",{id:"the-translation-file"},"The Translation file"),Object(i.b)("p",null,"The script will extract all the translations from the HTML files and will construct a translations JSON file.\nThe script will use the translation string as the key by making the entire string kebab case (",Object(i.b)("inlineCode",{parentName:"p"},"My sample string")," => ",Object(i.b)("inlineCode",{parentName:"p"},"my-sample-string"),") example for the output JSON:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json",metastring:'title="en.json"',title:'"en.json"'}),'{\n  "my-sample-string": "My sample string",\n  "my-title": "My title"\n}\n')),Object(i.b)("p",null,"Here is an example of an ",Object(i.b)("inlineCode",{parentName:"p"},"HTML")," section and the matching ",Object(i.b)("inlineCode",{parentName:"p"},"JSON")," output:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-html"}),'<h1 i18n>translation value</h1>\n<h1 i18n="site header|value 1 sample">Val1</h1>\n<h1 i18n="site header|value 2 sample">Val2</h1>\n<h1 i18n="other context|another comment@@myId">Val3</h1>\n')),Object(i.b)("p",null,"Will output:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json",metastring:'title="en.json"',title:'"en.json"'}),'{\n  "translation-value": "translation value",\n  "site header": {\n     "val1": "Val1",\n     "val1.comment": "value 1 sample",\n     "val2": "Val2",\n     "val2.comment": "value 2 sample",\n  },\n  "other context": {\n     "myId": "Val3",\n     "myId.comment": "another comment"\n  }\n}\n')),Object(i.b)("p",null,"Note: the ",Object(i.b)("inlineCode",{parentName:"p"},".comment")," is the way we support ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"../tools/comments"}),"comments")," in Transloco."),Object(i.b)("h3",{id:"directives"},"Directives"),Object(i.b)("p",null,"The ",Object(i.b)("inlineCode",{parentName:"p"},"i18n")," & ",Object(i.b)("inlineCode",{parentName:"p"},"i18n-<attribute>")," directives will be replaced with the ",Object(i.b)("inlineCode",{parentName:"p"},"transloco")," pipe:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-html",metastring:'title="before.html"',title:'"before.html"'}),'<h1 i18n>Hello World</h1>\n<h1 i18n="other context|another comment@@myId">Some value</h1>\n<img src="..." i18n i18n-title="Wow image">\n')),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-html",metastring:'title="after.html"',title:'"after.html"'}),"<h1>{{ 'hello-world' | transloco }}</h1>\n<h1>{{ 'some-value' | transloco }}</h1>\n<img src=\"...\" title=\"{{ 'wow-image' | transloco }}\">\n")),Object(i.b)("p",null,"If you encounter any issues with the migration script please open a Github issue so we can resolve them and make a better experience for all."))}p.isMDXComponent=!0},142:function(e,t,n){"use strict";n.d(t,"a",(function(){return m})),n.d(t,"b",(function(){return d}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=r.a.createContext({}),p=function(e){var t=r.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o({},t,{},e)),n},m=function(e){var t=p(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=Object(a.forwardRef)((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),m=p(n),u=a,d=m["".concat(l,".").concat(u)]||m[u]||b[u]||i;return n?r.a.createElement(d,o({ref:t},s,{components:n})):r.a.createElement(d,o({ref:t},s))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=u;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var s=2;s<i;s++)l[s]=n[s];return r.a.createElement.apply(null,l)}return r.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);