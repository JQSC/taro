(window.webpackJsonp=window.webpackJsonp||[]).push([[667],{1790:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return h}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=o.a.createContext({}),u=function(e){var t=o.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c({},t,{},e)),n},d=function(e){var t=u(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},b=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),d=u(n),b=r,h=d["".concat(i,".").concat(b)]||d[b]||s[b]||a;return n?o.a.createElement(h,c({ref:t},l,{components:n})):o.a.createElement(h,c({ref:t},l))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=b;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var l=2;l<a;l++)i[l]=n[l];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},807:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return p})),n.d(t,"default",(function(){return u}));var r=n(1),o=n(9),a=(n(0),n(1790)),i={title:"Taro.onBluetoothAdapterStateChange(CALLBACK)",sidebar_label:"onBluetoothAdapterStateChange"},c={id:"version-1.3.45/apis/device/bluetooth/onBluetoothAdapterStateChange",title:"Taro.onBluetoothAdapterStateChange(CALLBACK)",description:"\u4f7f\u7528\u65b9\u5f0f\u540c [`wx.onBluetoothAdapterStateChange`](https://developers.weixin.qq.com/miniprogram/dev/api/wx.onBluetoothAdapterStateChange.html)\u3002\r",source:"@site/versioned_docs/version-1.3.45/apis/device/bluetooth/onBluetoothAdapterStateChange.md",permalink:"/taro/docs/1.3.45/apis/device/bluetooth/onBluetoothAdapterStateChange",editUrl:"https://github.com/nervjs/taro/edit/docs/versioned_docs/version-1.3.45/apis/device/bluetooth/onBluetoothAdapterStateChange.md",version:"1.3.45",sidebar_label:"onBluetoothAdapterStateChange",sidebar:"version-1.3.45/API",previous:{title:"Taro.getConnectedBluetoothDevices(OBJECT)",permalink:"/taro/docs/1.3.45/apis/device/bluetooth/getConnectedBluetoothDevices"},next:{title:"Taro.onBluetoothDeviceFound(CALLBACK)",permalink:"/taro/docs/1.3.45/apis/device/bluetooth/onBluetoothDeviceFound"}},p=[{value:"\u793a\u4f8b\u4ee3\u7801",id:"\u793a\u4f8b\u4ee3\u7801",children:[]}],l={rightToc:p};function u(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"\u4f7f\u7528\u65b9\u5f0f\u540c ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/dev/api/wx.onBluetoothAdapterStateChange.html"}),Object(a.b)("inlineCode",{parentName:"a"},"wx.onBluetoothAdapterStateChange")),"\u3002"),Object(a.b)("h2",{id:"\u793a\u4f8b\u4ee3\u7801"},"\u793a\u4f8b\u4ee3\u7801"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-jsx"}),"import Taro from '@tarojs/taro'\n\nTaro.onBluetoothAdapterStateChange(res => {\n  console.log(`adapterState changed, now is`, res)\n})\n")))}u.isMDXComponent=!0}}]);