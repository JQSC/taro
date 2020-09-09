(window.webpackJsonp=window.webpackJsonp||[]).push([[1158],{1296:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return p})),n.d(t,"rightToc",(function(){return i})),n.d(t,"default",(function(){return l}));var r=n(1),a=n(9),o=(n(0),n(1790)),c={title:"OpenData",sidebar_label:"OpenData"},p={id:"version-1.3.45/components/open/open-data",title:"OpenData",description:"##### \u7528\u4e8e\u5c55\u793a\u5c0f\u7a0b\u5e8f\u5f00\u653e\u7684\u6570\u636e\u3002",source:"@site/versioned_docs/version-1.3.45/components/open/open-data.md",permalink:"/taro/docs/1.3.45/components/open/open-data",editUrl:"https://github.com/nervjs/taro/edit/docs/versioned_docs/version-1.3.45/components/open/open-data.md",version:"1.3.45",sidebar_label:"OpenData",sidebar:"version-1.3.45/components",previous:{title:"OfficialAccount",permalink:"/taro/docs/1.3.45/components/open/official-account"},next:{title:"WebView",permalink:"/taro/docs/1.3.45/components/open/web-view"}},i=[],b={rightToc:i};function l(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h5",{id:"\u7528\u4e8e\u5c55\u793a\u5c0f\u7a0b\u5e8f\u5f00\u653e\u7684\u6570\u636e\u3002"},"\u7528\u4e8e\u5c55\u793a\u5c0f\u7a0b\u5e8f\u5f00\u653e\u7684\u6570\u636e\u3002"),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"\u7ec4\u4ef6 \u652f\u6301\u5ea6")),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",Object(r.a)({parentName:"tr"},{align:"center"}),"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),Object(o.b)("th",Object(r.a)({parentName:"tr"},{align:"center"}),"\u767e\u5ea6\u5c0f\u7a0b\u5e8f"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"\u2714"),Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"\u2714")))),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"\u5177\u4f53\u7528\u6cd5\u8bf7\u770b\u5c0f\u7a0b\u5e8f\u5b98\u65b9\u6587\u6863")),Object(o.b)("p",null,Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/dev/component/open-data.html"}),"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f OpenData"),"\u3002"),Object(o.b)("p",null,Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://smartprogram.baidu.com/docs/develop/component/open/#open-data/"}),"\u767e\u5ea6\u5c0f\u7a0b\u5e8f OpenData"),"\u3002"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-jsx"}),"import Taro, { Component } from '@tarojs/taro'\n// \u5f15\u5165 OpenData \u7ec4\u4ef6\nimport { OpenData } from '@tarojs/components'\n\nclass App extends Component {\n  render () {\n    return (\n      <OpenData type=''/>\n    )\n  }\n}\n")))}l.isMDXComponent=!0},1790:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return O}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var b=a.a.createContext({}),l=function(e){var t=a.a.useContext(b),n=t;return e&&(n="function"==typeof e?e(t):p({},t,{},e)),n},u=function(e){var t=l(e.components);return a.a.createElement(b.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,b=i(e,["components","mdxType","originalType","parentName"]),u=l(n),m=r,O=u["".concat(c,".").concat(m)]||u[m]||s[m]||o;return n?a.a.createElement(O,p({ref:t},b,{components:n})):a.a.createElement(O,p({ref:t},b))}));function O(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,c=new Array(o);c[0]=m;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p.mdxType="string"==typeof e?e:r,c[1]=p;for(var b=2;b<o;b++)c[b]=n[b];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);