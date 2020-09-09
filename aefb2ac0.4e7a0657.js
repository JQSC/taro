(window.webpackJsonp=window.webpackJsonp||[]).push([[1126],{1265:function(e,t,c){"use strict";c.r(t),c.d(t,"frontMatter",(function(){return b})),c.d(t,"metadata",(function(){return a})),c.d(t,"rightToc",(function(){return i})),c.d(t,"default",(function(){return u}));var n=c(1),r=c(9),l=(c(0),c(1790)),b={title:"Taro.getBLEDeviceServices(option)",sidebar_label:"getBLEDeviceServices"},a={id:"apis/device/ble/getBLEDeviceServices",title:"Taro.getBLEDeviceServices(option)",description:"\u83b7\u53d6\u84dd\u7259\u8bbe\u5907\u6240\u6709\u670d\u52a1(service)\u3002",source:"@site/docs/apis/device/ble/getBLEDeviceServices.md",permalink:"/taro/docs/next/apis/device/ble/getBLEDeviceServices",editUrl:"https://github.com/nervjs/taro/edit/docs/docs/apis/device/ble/getBLEDeviceServices.md",version:"next",sidebar_label:"getBLEDeviceServices",sidebar:"API",previous:{title:"Taro.notifyBLECharacteristicValueChange(option)",permalink:"/taro/docs/next/apis/device/ble/notifyBLECharacteristicValueChange"},next:{title:"Taro.getBLEDeviceCharacteristics(option)",permalink:"/taro/docs/next/apis/device/ble/getBLEDeviceCharacteristics"}},i=[{value:"\u7c7b\u578b",id:"\u7c7b\u578b",children:[]},{value:"\u53c2\u6570",id:"\u53c2\u6570",children:[{value:"Option",id:"option",children:[]},{value:"SuccessCallbackResult",id:"successcallbackresult",children:[]},{value:"BLEService",id:"bleservice",children:[]}]},{value:"\u793a\u4f8b\u4ee3\u7801",id:"\u793a\u4f8b\u4ee3\u7801",children:[]},{value:"API \u652f\u6301\u5ea6",id:"api-\u652f\u6301\u5ea6",children:[]}],o={rightToc:i};function u(e){var t=e.components,c=Object(r.a)(e,["components"]);return Object(l.b)("wrapper",Object(n.a)({},o,c,{components:t,mdxType:"MDXLayout"}),Object(l.b)("p",null,"\u83b7\u53d6\u84dd\u7259\u8bbe\u5907\u6240\u6709\u670d\u52a1(service)\u3002"),Object(l.b)("blockquote",null,Object(l.b)("p",{parentName:"blockquote"},Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/dev/api/device/bluetooth-ble/wx.getBLEDeviceServices.html"}),"\u53c2\u8003\u6587\u6863"))),Object(l.b)("h2",{id:"\u7c7b\u578b"},"\u7c7b\u578b"),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-tsx"}),"(option: Option) => Promise<SuccessCallbackResult>\n")),Object(l.b)("h2",{id:"\u53c2\u6570"},"\u53c2\u6570"),Object(l.b)("h3",{id:"option"},"Option"),Object(l.b)("table",null,Object(l.b)("thead",null,Object(l.b)("tr",null,Object(l.b)("th",null,"\u53c2\u6570"),Object(l.b)("th",null,"\u7c7b\u578b"),Object(l.b)("th",{style:{textAlign:"center"}},"\u5fc5\u586b"),Object(l.b)("th",null,"\u8bf4\u660e"))),Object(l.b)("tbody",null,Object(l.b)("tr",null,Object(l.b)("td",null,"deviceId"),Object(l.b)("td",null,Object(l.b)("code",null,"string")),Object(l.b)("td",{style:{textAlign:"center"}},"\u662f"),Object(l.b)("td",null,"\u84dd\u7259\u8bbe\u5907 id")),Object(l.b)("tr",null,Object(l.b)("td",null,"complete"),Object(l.b)("td",null,Object(l.b)("code",null,"(res: BluetoothError) => void")),Object(l.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(l.b)("td",null,"\u63a5\u53e3\u8c03\u7528\u7ed3\u675f\u7684\u56de\u8c03\u51fd\u6570\uff08\u8c03\u7528\u6210\u529f\u3001\u5931\u8d25\u90fd\u4f1a\u6267\u884c\uff09")),Object(l.b)("tr",null,Object(l.b)("td",null,"fail"),Object(l.b)("td",null,Object(l.b)("code",null,"(res: BluetoothError) => void")),Object(l.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(l.b)("td",null,"\u63a5\u53e3\u8c03\u7528\u5931\u8d25\u7684\u56de\u8c03\u51fd\u6570")),Object(l.b)("tr",null,Object(l.b)("td",null,"success"),Object(l.b)("td",null,Object(l.b)("code",null,"(result: SuccessCallbackResult) => void")),Object(l.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(l.b)("td",null,"\u63a5\u53e3\u8c03\u7528\u6210\u529f\u7684\u56de\u8c03\u51fd\u6570")))),Object(l.b)("h3",{id:"successcallbackresult"},"SuccessCallbackResult"),Object(l.b)("table",null,Object(l.b)("thead",null,Object(l.b)("tr",null,Object(l.b)("th",null,"\u53c2\u6570"),Object(l.b)("th",null,"\u7c7b\u578b"),Object(l.b)("th",null,"\u8bf4\u660e"))),Object(l.b)("tbody",null,Object(l.b)("tr",null,Object(l.b)("td",null,"services"),Object(l.b)("td",null,Object(l.b)("code",null,"BLEService[]")),Object(l.b)("td",null,"\u8bbe\u5907\u670d\u52a1\u5217\u8868")),Object(l.b)("tr",null,Object(l.b)("td",null,"errMsg"),Object(l.b)("td",null,Object(l.b)("code",null,"string")),Object(l.b)("td",null,"\u6210\u529f\uff1aok\uff0c\u9519\u8bef\uff1a\u8be6\u7ec6\u4fe1\u606f")))),Object(l.b)("h3",{id:"bleservice"},"BLEService"),Object(l.b)("p",null,"\u8bbe\u5907\u670d\u52a1\u5217\u8868"),Object(l.b)("table",null,Object(l.b)("thead",null,Object(l.b)("tr",null,Object(l.b)("th",null,"\u53c2\u6570"),Object(l.b)("th",null,"\u7c7b\u578b"),Object(l.b)("th",null,"\u8bf4\u660e"))),Object(l.b)("tbody",null,Object(l.b)("tr",null,Object(l.b)("td",null,"isPrimary"),Object(l.b)("td",null,Object(l.b)("code",null,"boolean")),Object(l.b)("td",null,"\u8be5\u670d\u52a1\u662f\u5426\u4e3a\u4e3b\u670d\u52a1")),Object(l.b)("tr",null,Object(l.b)("td",null,"uuid"),Object(l.b)("td",null,Object(l.b)("code",null,"string")),Object(l.b)("td",null,"\u84dd\u7259\u8bbe\u5907\u670d\u52a1\u7684 uuid")))),Object(l.b)("h2",{id:"\u793a\u4f8b\u4ee3\u7801"},"\u793a\u4f8b\u4ee3\u7801"),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-tsx"}),"Taro.getBLEDeviceServices({\n  // \u8fd9\u91cc\u7684 deviceId \u9700\u8981\u5df2\u7ecf\u901a\u8fc7 createBLEConnection \u4e0e\u5bf9\u5e94\u8bbe\u5907\u5efa\u7acb\u94fe\u63a5\n  deviceId,\n  success: function (res) {\n    console.log('device services:', res.services)\n  }\n})\n")),Object(l.b)("h2",{id:"api-\u652f\u6301\u5ea6"},"API \u652f\u6301\u5ea6"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"API"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"H5"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"React Native"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Taro.getBLEDeviceServices"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"center"})),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}))))))}u.isMDXComponent=!0},1790:function(e,t,c){"use strict";c.d(t,"a",(function(){return O})),c.d(t,"b",(function(){return j}));var n=c(0),r=c.n(n);function l(e,t,c){return t in e?Object.defineProperty(e,t,{value:c,enumerable:!0,configurable:!0,writable:!0}):e[t]=c,e}function b(e,t){var c=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),c.push.apply(c,n)}return c}function a(e){for(var t=1;t<arguments.length;t++){var c=null!=arguments[t]?arguments[t]:{};t%2?b(Object(c),!0).forEach((function(t){l(e,t,c[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(c)):b(Object(c)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(c,t))}))}return e}function i(e,t){if(null==e)return{};var c,n,r=function(e,t){if(null==e)return{};var c,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)c=l[n],t.indexOf(c)>=0||(r[c]=e[c]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)c=l[n],t.indexOf(c)>=0||Object.prototype.propertyIsEnumerable.call(e,c)&&(r[c]=e[c])}return r}var o=r.a.createContext({}),u=function(e){var t=r.a.useContext(o),c=t;return e&&(c="function"==typeof e?e(t):a({},t,{},e)),c},O=function(e){var t=u(e.components);return r.a.createElement(o.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},s=Object(n.forwardRef)((function(e,t){var c=e.components,n=e.mdxType,l=e.originalType,b=e.parentName,o=i(e,["components","mdxType","originalType","parentName"]),O=u(c),s=n,j=O["".concat(b,".").concat(s)]||O[s]||d[s]||l;return c?r.a.createElement(j,a({ref:t},o,{components:c})):r.a.createElement(j,a({ref:t},o))}));function j(e,t){var c=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=c.length,b=new Array(l);b[0]=s;var a={};for(var i in t)hasOwnProperty.call(t,i)&&(a[i]=t[i]);a.originalType=e,a.mdxType="string"==typeof e?e:n,b[1]=a;for(var o=2;o<l;o++)b[o]=c[o];return r.a.createElement.apply(null,b)}return r.a.createElement.apply(null,c)}s.displayName="MDXCreateElement"}}]);