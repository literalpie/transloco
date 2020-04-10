(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{172:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return o})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return u}));var r=n(1),a=n(9),i=(n(0),n(177)),c={title:"FAQ"},o={id:"faq",title:"FAQ",description:"A collection of common questions and their answers.",source:"@site/docs/faq.mdx",permalink:"/docs/faq",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/faq.mdx",sidebar:"docs",previous:{title:"Hack The Library",permalink:"/docs/hack"},next:{title:"Validation Translation files",permalink:"/docs/tools/validator"}},l=[{value:"Can I use HTML markings inside a translation?",id:"can-i-use-html-markings-inside-a-translation",children:[]},{value:"I want to use the structural directive in my app, but isn&#39;t calling a function from the template a bad practice?",id:"i-want-to-use-the-structural-directive-in-my-app-but-isnt-calling-a-function-from-the-template-a-bad-practice",children:[]}],s={rightToc:l};function u(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"A collection of common questions and their answers."),Object(i.b)("h3",{id:"can-i-use-html-markings-inside-a-translation"},"Can I use HTML markings inside a translation?"),Object(i.b)("p",null,"Yes, you can! Pass the translated string in an ",Object(i.b)("inlineCode",{parentName:"p"},"innerHTML")," binding."),Object(i.b)("h3",{id:"i-want-to-use-the-structural-directive-in-my-app-but-isnt-calling-a-function-from-the-template-a-bad-practice"},"I want to use the structural directive in my app, but isn't calling a function from the template a bad practice?"),Object(i.b)("p",null,"Using a structural directive is the recommended approach. It\u2019s DRY and efficient, as it creates one subscription per template."),Object(i.b)("p",null,"Moreover, the t function is ",Object(i.b)("inlineCode",{parentName:"p"},"memoized"),", It means that given the same key, it will return the result directly from the cache."),Object(i.b)("p",null,"Furthermore, when using on push change detection strategy (which is recommended) the change detection cycles should greatly reduce."))}u.isMDXComponent=!0},177:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return f}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a.a.createContext({}),u=function(e){var t=a.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o({},t,{},e)),n},p=function(e){var t=u(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=u(n),m=r,f=p["".concat(c,".").concat(m)]||p[m]||d[m]||i;return n?a.a.createElement(f,o({ref:t},s,{components:n})):a.a.createElement(f,o({ref:t},s))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,c=new Array(i);c[0]=m;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:r,c[1]=o;for(var s=2;s<i;s++)c[s]=n[s];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);