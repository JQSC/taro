(window.webpackJsonp=window.webpackJsonp||[]).push([[458],{1790:function(e,t,r){"use strict";r.d(t,"a",(function(){return l})),r.d(t,"b",(function(){return O}));var a=r(0),n=r.n(a);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function b(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var p=n.a.createContext({}),s=function(e){var t=n.a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):b({},t,{},e)),r},l=function(e){var t=s(e.components);return n.a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},f=Object(a.forwardRef)((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),l=s(r),f=a,O=l["".concat(c,".").concat(f)]||l[f]||u[f]||o;return r?n.a.createElement(O,b({ref:t},p,{components:r})):n.a.createElement(O,b({ref:t},p))}));function O(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,c=new Array(o);c[0]=f;var b={};for(var i in t)hasOwnProperty.call(t,i)&&(b[i]=t[i]);b.originalType=e,b.mdxType="string"==typeof e?e:a,c[1]=b;for(var p=2;p<o;p++)c[p]=r[p];return n.a.createElement.apply(null,c)}return n.a.createElement.apply(null,r)}f.displayName="MDXCreateElement"},598:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return b})),r.d(t,"rightToc",(function(){return i})),r.d(t,"default",(function(){return s}));var a=r(1),n=r(9),o=(r(0),r(1790)),c={title:"base64ToArrayBuffer",sidebar_label:"base64ToArrayBuffer"},b={id:"version-1.3.45/apis/extend-apis/base64ToArrayBuffer",title:"base64ToArrayBuffer",description:"\u5c06 Base64 \u5b57\u7b26\u4e32\u8f6c\u6210 ArrayBuffer \u6570\u636e\u3002(\u5c0f\u7a0b\u5e8f\u7aef\u57fa\u7840\u5e93 1.1.0 \u5f00\u59cb\u652f\u6301\uff0c\u4f4e\u7248\u672c\u9700\u505a\u517c\u5bb9\u5904\u7406)",source:"@site/versioned_docs/version-1.3.45/apis/extend-apis/base64ToArrayBuffer.md",permalink:"/taro/docs/1.3.45/apis/extend-apis/base64ToArrayBuffer",editUrl:"https://github.com/nervjs/taro/edit/docs/versioned_docs/version-1.3.45/apis/extend-apis/base64ToArrayBuffer.md",version:"1.3.45",sidebar_label:"base64ToArrayBuffer",sidebar:"version-1.3.45/API",previous:{title:"arrayBufferToBase64",permalink:"/taro/docs/1.3.45/apis/extend-apis/arrayBufferToBase64"},next:{title:"Taro.getFileInfo(OBJECT)",permalink:"/taro/docs/1.3.45/apis/files/getFileInfo"}},i=[],p={rightToc:i};function s(e){var t=e.components,r=Object(n.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},p,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"\u5c06 Base64 \u5b57\u7b26\u4e32\u8f6c\u6210 ArrayBuffer \u6570\u636e\u3002(\u5c0f\u7a0b\u5e8f\u7aef\u57fa\u7840\u5e93 1.1.0 \u5f00\u59cb\u652f\u6301\uff0c\u4f4e\u7248\u672c\u9700\u505a\u517c\u5bb9\u5904\u7406)"),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"\u793a\u4f8b\u4ee3\u7801\uff1a")),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx"}),"import Taro from '@tarojs/taro'\n\nconst base64 = 'CxYh'\nconst arrayBuffer = Taro.base64ToArrayBuffer(base64)\n")),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"API \u652f\u6301\u5ea6")),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",Object(a.a)({parentName:"tr"},{align:"center"}),"API"),Object(o.b)("th",Object(a.a)({parentName:"tr"},{align:"center"}),"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),Object(o.b)("th",Object(a.a)({parentName:"tr"},{align:"center"}),"H5"),Object(o.b)("th",Object(a.a)({parentName:"tr"},{align:"center"}),"React Native"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"Taro.arrayBufferToBase64"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}))),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"Taro.base64ToArrayBuffer"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}))))))}s.isMDXComponent=!0}}]);