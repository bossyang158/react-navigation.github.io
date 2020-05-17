(window.webpackJsonp=window.webpackJsonp||[]).push([[117],{240:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return r})),t.d(n,"metadata",(function(){return p})),t.d(n,"rightToc",(function(){return c})),t.d(n,"default",(function(){return u}));var a=t(1),o=t(9),i=(t(0),t(480)),r={id:"navigating-without-navigation-prop",title:"Navigating without the navigation prop",sidebar_label:"Navigating without the navigation prop"},p={id:"version-1.x/navigating-without-navigation-prop",title:"Navigating without the navigation prop",description:"Calling functions such as `navigate` or `popToTop` on the `navigation` prop is not the only way to navigate around your app. As an alternative, you can dispatch navigation actions on your top-level navigator, provided you aren't passing your own `navigation` prop as you would with a redux integration. The presented approach is useful in situations when you want to trigger a navigation action from places where you do not have access to the `navigation` prop, or if you're looking for an alternative to using the `navigation` prop.",source:"@site/versioned_docs/version-1.x/navigating-without-navigation-prop.md",permalink:"/docs/1.x/navigating-without-navigation-prop",editUrl:"https://github.com/react-navigation/react-navigation.github.io/edit/source/versioned_docs/version-1.x/navigating-without-navigation-prop.md",version:"1.x",sidebar_label:"Navigating without the navigation prop",sidebar:"version-1.x/docs",previous:{title:"Access the navigation prop from any component",permalink:"/docs/1.x/connecting-navigation-prop"},next:{title:"Deep linking",permalink:"/docs/1.x/deep-linking"}},c=[],s={rightToc:c};function u(e){var n=e.components,t=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},s,t,{components:n,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Calling functions such as ",Object(i.b)("inlineCode",{parentName:"p"},"navigate")," or ",Object(i.b)("inlineCode",{parentName:"p"},"popToTop")," on the ",Object(i.b)("inlineCode",{parentName:"p"},"navigation")," prop is not the only way to navigate around your app. As an alternative, you can dispatch navigation actions on your top-level navigator, provided you aren't passing your own ",Object(i.b)("inlineCode",{parentName:"p"},"navigation")," prop as you would with a redux integration. The presented approach is useful in situations when you want to trigger a navigation action from places where you do not have access to the ",Object(i.b)("inlineCode",{parentName:"p"},"navigation")," prop, or if you're looking for an alternative to using the ",Object(i.b)("inlineCode",{parentName:"p"},"navigation")," prop."),Object(i.b)("p",null,"You can get access to a navigator through a ",Object(i.b)("inlineCode",{parentName:"p"},"ref")," and pass it to the ",Object(i.b)("inlineCode",{parentName:"p"},"NavigationService")," which we will later use to navigate. Use this only with the top-level (root) navigator of your app."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),"// App.js\n\nimport NavigationService from './NavigationService';\n\nconst TopLevelNavigator = StackNavigator({ /* ... */ })\n\nclass App extends React.Component {\n  // ...\n\n  render(): {\n    return (\n      <TopLevelNavigator\n        ref={navigatorRef => {\n          NavigationService.setTopLevelNavigator(navigatorRef);\n        }}\n      />\n    );\n  }\n}\n")),Object(i.b)("p",null,"In the next step, we define ",Object(i.b)("inlineCode",{parentName:"p"},"NavigationService")," which is a simple module with functions that dispatch user-defined navigation actions."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),"// NavigationService.js\n\nimport { NavigationActions } from 'react-navigation';\n\nlet _navigator;\n\nfunction setTopLevelNavigator(navigatorRef) {\n  _navigator = navigatorRef;\n}\n\nfunction navigate(routeName, params) {\n  _navigator.dispatch(\n    NavigationActions.navigate({\n      type: NavigationActions.NAVIGATE,\n      routeName,\n      params,\n    })\n  );\n}\n\n// add other navigation functions that you need and export them\n\nexport default {\n  navigate,\n  setTopLevelNavigator,\n};\n")),Object(i.b)("p",null,"Then, in any of your javascript modules, just import the ",Object(i.b)("inlineCode",{parentName:"p"},"NavigationService")," and call functions which you exported from it. You may use this approach outside of your React components and, in fact, it works just as well when used from within them."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),"// any js module\nimport NavigationService from 'path-to-NavigationService.js';\n\n// ...\n\nNavigationService.navigate('ChatScreen', { userName: 'Lucy' });\n")),Object(i.b)("p",null,"In ",Object(i.b)("inlineCode",{parentName:"p"},"NavigationService"),", you can create your own navigation actions, or compose multiple navigation actions into one, and then easily reuse them throughout your application. When writing tests, you may mock the navigation functions, and make assertions on whether the correct functions are called, with the correct parameters."))}u.isMDXComponent=!0},480:function(e,n,t){"use strict";t.d(n,"a",(function(){return l})),t.d(n,"b",(function(){return d}));var a=t(0),o=t.n(a);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function p(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,a,o=function(e,n){if(null==e)return{};var t,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=o.a.createContext({}),u=function(e){var n=o.a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):p({},n,{},e)),t},l=function(e){var n=u(e.components);return o.a.createElement(s.Provider,{value:n},e.children)},v={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},g=Object(a.forwardRef)((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,r=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),l=u(t),g=a,d=l["".concat(r,".").concat(g)]||l[g]||v[g]||i;return t?o.a.createElement(d,p({ref:n},s,{components:t})):o.a.createElement(d,p({ref:n},s))}));function d(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,r=new Array(i);r[0]=g;var p={};for(var c in n)hasOwnProperty.call(n,c)&&(p[c]=n[c]);p.originalType=e,p.mdxType="string"==typeof e?e:a,r[1]=p;for(var s=2;s<i;s++)r[s]=t[s];return o.a.createElement.apply(null,r)}return o.a.createElement.apply(null,t)}g.displayName="MDXCreateElement"}}]);