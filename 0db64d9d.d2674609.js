(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{101:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return p}));var o=n(1),a=n(6),r=(n(0),n(142)),c={title:"Scoped Library Extractor"},l={id:"tools/scope-lib-extractor",title:"Scoped Library Extractor",description:"There are cases where we need to use translations in our npm libraries (which is common in a monorepo environment). In these cases, we probably want to have the translation files inside the library's folder and ship them together with it.",source:"@site/docs/tools/scope-lib-extractor.mdx",permalink:"/transloco/docs/tools/scope-lib-extractor",editUrl:"https://github.com/ngneat/transloco/edit/master/docs/docs/tools/scope-lib-extractor.mdx",sidebar:"docs",previous:{title:"Comments for Translators",permalink:"/transloco/docs/tools/comments"},next:{title:"Message Format",permalink:"/transloco/docs/plugins/message-format"}},s=[{value:"Join Strategies",id:"join-strategies",children:[]},{value:"Use the Webpack Plugin",id:"use-the-webpack-plugin",children:[]}],i={rightToc:s};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(r.b)("wrapper",Object(o.a)({},i,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"There are cases where we need to use translations in our npm libraries (which is common in a monorepo environment). In these cases, we probably want to have the translation files inside the library's folder and ship them together with it."),Object(r.b)("p",null,"Unfortunately, we won't be able to load our translation files from the library for two reasons:"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"We can't access the application's public directory"),Object(r.b)("li",{parentName:"ol"},"Webpack dynamic imports don't work with libraries")),Object(r.b)("p",null,"The only option we've got is to load the library translation files from our application ",Object(r.b)("inlineCode",{parentName:"p"},"public")," folder."),Object(r.b)("p",null,"So if we want our translation files to be under the library's folder, we'll need to copy and paste the translation files repeatedly."),Object(r.b)("p",null,"Well, this is why we've created the Scoped Library Extractor tool, which will do the work for you."),Object(r.b)("p",null,"For example, here we have created a new CLI project, with the main application (app), and another library with translations (core):"),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-bash"}),"\ud83d\udce6projects\n \u2523 \ud83d\udcc2core\n \u2503 \u2523 \ud83d\udcc2src\n \u2503 \u2503 \u2523 \ud83d\udcc2lib\n \u2503 \u2503 \u2503 \u2523 \ud83d\udcdccore.component.ts\n \u2503 \u2503 \u2503 \u2523 \ud83d\udcdccore.module.ts\n \u2503 \u2503 \u2503 \u2523 \ud83d\udcc2i18n\n \u2503 \u2503 \u2503 \u2503 \u2523 \ud83d\udcdcen.json\n \u2503 \u2503 \u2503 \u2503 \u2517 \ud83d\udcdces.json\n \u2503 \u2503 \u2523 \ud83d\udcdcpublic-api.ts\n \u2523 \ud83d\udcdcng-package.json\n \u2523 \ud83d\udcdcpackage.json\n\ud83d\udce6src\n \u2523 \ud83d\udcc2app\n \u2503 \u2523 \ud83d\udcdcapp.component.html\n \u2503 \u2523 \ud83d\udcdcapp.component.ts\n \u2503 \u2523 \ud83d\udcdcapp.module.ts\n \u2503 \u2517 \ud83d\udcdctransloco.loader.ts\n \u2523 \ud83d\udcc2assets\n \u2503 \u2523 \ud83d\udcc2i18n\n \u2503 \u2503 \u2523 \ud83d\udcdcen.json\n \u2503 \u2503 \u2517 \ud83d\udcdces.json\n")),Object(r.b)("p",null,"Now we need to declare the ",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"../scope-configuration"}),"scope")," in the ",Object(r.b)("inlineCode",{parentName:"p"},"CoreModule"),":"),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-ts",metastring:'title="core.module.ts"',title:'"core.module.ts"'}),"@NgModule({\n  declarations: [CoreComponent],\n  providers: [{\n    provide: TRANSLOCO_SCOPE,\n    useValue: 'core'\n  }],\n  imports: [TranslocoModule]\n})\nexport class CoreModule {}\n")),Object(r.b)("p",null,"Now, we can use the scope in our component:"),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-ts",metastring:'title="lib-core.component.html"',title:'"lib-core.component.html"'}),"@Component({\n  selector: 'lib-core',\n  template: `\n   <ng-container *transloco=\"let t\">\n     {{ t('core.title') }}\n  </ng-container>\n  `\n})\nexport class CoreComponent {\n}\n")),Object(r.b)("p",null,"Now, let's install ",Object(r.b)("inlineCode",{parentName:"p"},"transloco-scoped-libs")," package:"),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-bash"}),"$ npm install @ngneat/transloco-scoped-libs --save-dev\n")),Object(r.b)("p",null,"The first thing we need to do is to add i18n configuration with the path to the translation folder in the library's ",Object(r.b)("inlineCode",{parentName:"p"},"package.json"),":"),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-json",metastring:'title="projects/core/package.json"',title:'"projects/core/package.json"'}),'{\n  "name": "@app/core",\n  "i18n": [\n    {\n      "scope": "core",\n      "path": "src/lib/i18n"\n    }\n  ]\n}\n')),Object(r.b)("p",null,"Next, we need to add the library's path into ",Object(r.b)("inlineCode",{parentName:"p"},"transloco.config.js")," as following (we can also pass ",Object(r.b)("inlineCode",{parentName:"p"},"npm")," package ):"),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-js",metastring:'title="transloco.config.js"',title:'"transloco.config.js"'}),"module.exports = {\n  scopedLibs: ['./projects/core/', '@lib/name']\n};\u200b\n")),Object(r.b)("p",null,"If ",Object(r.b)("strong",{parentName:"p"},"multiple")," destination is needed you could also pass ",Object(r.b)("inlineCode",{parentName:"p"},"scopedLibs")," as an object:"),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-js",metastring:'title="transloco.config.js"',title:'"transloco.config.js"'}),"module.exports = {\n  scopedLibs: [\n    {\n      src: './projects/core',\n      dist: ['./projects/spa/src/assets/i18n', './src/assets/i18n/']\n    }\n  ]\n};\u200b\n")),Object(r.b)("p",null,"Note that the path should refer to the location of the library's ",Object(r.b)("inlineCode",{parentName:"p"},"package.json")," file.\nFinally, we need to add the following script to the main ",Object(r.b)("inlineCode",{parentName:"p"},"package.json"),":"),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-json",metastring:'title="package.json"',title:'"package.json"'}),'"scripts": {\n  "transloco:extract-scoped-libs": "transloco-scoped-libs"\n}\n')),Object(r.b)("p",null,'It also support "watch mode" by passing ',Object(r.b)("inlineCode",{parentName:"p"},"--watch")," flag:"),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-json",metastring:'title="package.json"',title:'"package.json"'}),'"scripts": {\n  "transloco:extract-scoped-libs": "transloco-scoped-libs --watch"\n}\n')),Object(r.b)("p",null,"Now, if we run the script, the following things will happen:"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"The script will extract the translation files from our library and copy them to the main project's translation root folder (e.g., ",Object(r.b)("inlineCode",{parentName:"p"},"src/assets/i18n"),").")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"It will add the library's translation files to the ",Object(r.b)("inlineCode",{parentName:"p"},".gitignore")," ( if you don't want to modify the ",Object(r.b)("inlineCode",{parentName:"p"},".gitignore")," use the ",Object(r.b)("inlineCode",{parentName:"p"},"--skip-gitignore")," flag)."))),Object(r.b)("img",{class:"gif",src:"../../img/extractor.gif"}),Object(r.b)("h3",{id:"join-strategies"},"Join Strategies"),Object(r.b)("p",null,"This tool supports two different strategies. The default option, the one we used above, and ",Object(r.b)("inlineCode",{parentName:"p"},"join"),"."),Object(r.b)("p",null,"The ",Object(r.b)("inlineCode",{parentName:"p"},"join")," strategy will combine all the translation files into one file under the root translation path for each language (e.g., ",Object(r.b)("inlineCode",{parentName:"p"},"en.vendor.json"),")."),Object(r.b)("p",null,"We can set the strategy in our library's ",Object(r.b)("inlineCode",{parentName:"p"},"package.json"),":"),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-json",metastring:'title="projects/core/package.json"',title:'"projects/core/package.json"'}),'{\n  "name": "@app/core",\n  "i18n": [\n    {\n      "scope": "core",\n      "path": "src/lib/i18n",\n      "strategy": "join"\n    }\n  ]\n}\n')),Object(r.b)("p",null,"Then, we can use it in our application loader:"),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-ts",metastring:'title="transloco-loader.ts"',title:'"transloco-loader.ts"'}),"@Injectable({ providedIn: 'root' })\nexport class HttpLoader implements TranslocoLoader {\n\n  contructor(private http: HttpClient) {}\n\n  getTranslation(lang: string, { scope }) {\n    const base = this.http.get(`/assets/i18n/${lang}.json`);\n\n    if(scope) {\n      return base;\n    }\n\n    return forkJoin([\n       base,\n       this.http.get(`/assets/i18n/${lang}.vendor.json`)\n    ]).pipe(map(([translation, vendor]) => {\n       return { ...translation, ...vendor }\n    }))\n  }\n}\n\nexport const httpLoader = { provide: TRANSLOCO_LOADER, useClass: HttpLoader };\n")),Object(r.b)("h3",{id:"use-the-webpack-plugin"},"Use the Webpack Plugin"),Object(r.b)("p",null,"Add custom Webpack support by using a tool such as ",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"https://github.com/manfredsteyer/ngx-build-plus"}),"ngx-build-plus"),", and add the plugin to ",Object(r.b)("inlineCode",{parentName:"p"},"webpack.config")," file:"),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-js",metastring:'title="webpack.config.js"',title:'"webpack.config.js"'}),"const { TranslocoScopedLibsWebpackPlugin } =\nrequire('@ngneat/transloco-scoped-libs/webpack');\n\nmodule.exports = {\n  plugins: [new TranslocoScopedLibsWebpackPlugin()]\n};\n")))}p.isMDXComponent=!0},142:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return m}));var o=n(0),a=n.n(o);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=a.a.createContext({}),p=function(e){var t=a.a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l({},t,{},e)),n},b=function(e){var t=p(e.components);return a.a.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=Object(o.forwardRef)((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,c=e.parentName,i=s(e,["components","mdxType","originalType","parentName"]),b=p(n),d=o,m=b["".concat(c,".").concat(d)]||b[d]||u[d]||r;return n?a.a.createElement(m,l({ref:t},i,{components:n})):a.a.createElement(m,l({ref:t},i))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,c=new Array(r);c[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,c[1]=l;for(var i=2;i<r;i++)c[i]=n[i];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);