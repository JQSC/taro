(window.webpackJsonp=window.webpackJsonp||[]).push([[200],{1790:function(e,t,b){"use strict";b.d(t,"a",(function(){return o})),b.d(t,"b",(function(){return d}));var l=b(0),n=b.n(l);function c(e,t,b){return t in e?Object.defineProperty(e,t,{value:b,enumerable:!0,configurable:!0,writable:!0}):e[t]=b,e}function r(e,t){var b=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),b.push.apply(b,l)}return b}function a(e){for(var t=1;t<arguments.length;t++){var b=null!=arguments[t]?arguments[t]:{};t%2?r(Object(b),!0).forEach((function(t){c(e,t,b[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(b)):r(Object(b)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(b,t))}))}return e}function u(e,t){if(null==e)return{};var b,l,n=function(e,t){if(null==e)return{};var b,l,n={},c=Object.keys(e);for(l=0;l<c.length;l++)b=c[l],t.indexOf(b)>=0||(n[b]=e[b]);return n}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(l=0;l<c.length;l++)b=c[l],t.indexOf(b)>=0||Object.prototype.propertyIsEnumerable.call(e,b)&&(n[b]=e[b])}return n}var i=n.a.createContext({}),s=function(e){var t=n.a.useContext(i),b=t;return e&&(b="function"==typeof e?e(t):a({},t,{},e)),b},o=function(e){var t=s(e.components);return n.a.createElement(i.Provider,{value:t},e.children)},O={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},j=Object(l.forwardRef)((function(e,t){var b=e.components,l=e.mdxType,c=e.originalType,r=e.parentName,i=u(e,["components","mdxType","originalType","parentName"]),o=s(b),j=l,d=o["".concat(r,".").concat(j)]||o[j]||O[j]||c;return b?n.a.createElement(d,a({ref:t},i,{components:b})):n.a.createElement(d,a({ref:t},i))}));function d(e,t){var b=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var c=b.length,r=new Array(c);r[0]=j;var a={};for(var u in t)hasOwnProperty.call(t,u)&&(a[u]=t[u]);a.originalType=e,a.mdxType="string"==typeof e?e:l,r[1]=a;for(var i=2;i<c;i++)r[i]=b[i];return n.a.createElement.apply(null,r)}return n.a.createElement.apply(null,b)}j.displayName="MDXCreateElement"},340:function(e,t,b){"use strict";b.r(t),b.d(t,"frontMatter",(function(){return r})),b.d(t,"metadata",(function(){return a})),b.d(t,"rightToc",(function(){return u})),b.d(t,"default",(function(){return s}));var l=b(1),n=b(9),c=(b(0),b(1790)),r={title:"Taro.requestSubscribeMessage(option)",sidebar_label:"requestSubscribeMessage"},a={id:"apis/open-api/subscribe-message/requestSubscribeMessage",title:"Taro.requestSubscribeMessage(option)",description:"\u8bf7\u6c42\u8ba2\u9605\u6d88\u606f",source:"@site/docs/apis/open-api/subscribe-message/requestSubscribeMessage.md",permalink:"/taro/docs/next/apis/open-api/subscribe-message/requestSubscribeMessage",editUrl:"https://github.com/nervjs/taro/edit/docs/docs/apis/open-api/subscribe-message/requestSubscribeMessage.md",version:"next",sidebar_label:"requestSubscribeMessage",sidebar:"API",previous:{title:"Taro.getWeRunData(option)",permalink:"/taro/docs/next/apis/open-api/werun/getWeRunData"},next:{title:"Taro.stopBeaconDiscovery(option)",permalink:"/taro/docs/next/apis/device/ibeacon/stopBeaconDiscovery"}},u=[{value:"\u7c7b\u578b",id:"\u7c7b\u578b",children:[]},{value:"\u53c2\u6570",id:"\u53c2\u6570",children:[{value:"Option",id:"option",children:[]},{value:"FailCallbackResult",id:"failcallbackresult",children:[]},{value:"SuccessCallbackResult",id:"successcallbackresult",children:[]},{value:"template_reflex",id:"template_reflex",children:[]}]},{value:"\u793a\u4f8b\u4ee3\u7801",id:"\u793a\u4f8b\u4ee3\u7801-1",children:[]},{value:"API \u652f\u6301\u5ea6",id:"api-\u652f\u6301\u5ea6",children:[]}],i={rightToc:u};function s(e){var t=e.components,b=Object(n.a)(e,["components"]);return Object(c.b)("wrapper",Object(l.a)({},i,b,{components:t,mdxType:"MDXLayout"}),Object(c.b)("p",null,"\u8bf7\u6c42\u8ba2\u9605\u6d88\u606f"),Object(c.b)("p",null,"\u6ce8\u610f\uff1a",Object(c.b)("a",Object(l.a)({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/dev/framework/compatibility.html"}),"2.8.2")," \u7248\u672c\u5f00\u59cb\uff0c\u7528\u6237\u53d1\u751f\u70b9\u51fb\u884c\u4e3a\u6216\u8005\u53d1\u8d77\u652f\u4ed8\u56de\u8c03\u540e\uff0c\u624d\u53ef\u4ee5\u8c03\u8d77\u8ba2\u9605\u6d88\u606f\u754c\u9762\u3002"),Object(c.b)("blockquote",null,Object(c.b)("p",{parentName:"blockquote"},Object(c.b)("a",Object(l.a)({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/dev/api/open-api/subscribe-message/wx.requestSubscribeMessage.html"}),"\u53c2\u8003\u6587\u6863"))),Object(c.b)("h2",{id:"\u7c7b\u578b"},"\u7c7b\u578b"),Object(c.b)("pre",null,Object(c.b)("code",Object(l.a)({parentName:"pre"},{className:"language-tsx"}),"(option: Option) => Promise<SuccessCallbackResult | FailCallbackResult>\n")),Object(c.b)("h2",{id:"\u53c2\u6570"},"\u53c2\u6570"),Object(c.b)("h3",{id:"option"},"Option"),Object(c.b)("table",null,Object(c.b)("thead",null,Object(c.b)("tr",null,Object(c.b)("th",null,"\u53c2\u6570"),Object(c.b)("th",null,"\u7c7b\u578b"),Object(c.b)("th",{style:{textAlign:"center"}},"\u5fc5\u586b"),Object(c.b)("th",null,"\u8bf4\u660e"))),Object(c.b)("tbody",null,Object(c.b)("tr",null,Object(c.b)("td",null,"tmplIds"),Object(c.b)("td",null,Object(c.b)("code",null,"any[]")),Object(c.b)("td",{style:{textAlign:"center"}},"\u662f"),Object(c.b)("td",null,"\u9700\u8981\u8ba2\u9605\u7684\u6d88\u606f\u6a21\u677f\u7684id\u7684\u96c6\u5408\uff08\u6ce8\u610f\uff1aiOS\u5ba2\u6237\u7aef7.0.6\u7248\u672c\u3001Android\u5ba2\u6237\u7aef7.0.7\u7248\u672c\u4e4b\u540e\u7684\u4e00\u6b21\u6027\u8ba2\u9605/\u957f\u671f\u8ba2\u9605\u624d\u652f\u6301\u591a\u4e2a\u6a21\u677f\u6d88\u606f\uff0ciOS\u5ba2\u6237\u7aef7.0.5\u7248\u672c\u3001Android\u5ba2\u6237\u7aef7.0.6\u7248\u672c\u4e4b\u524d\u7684\u4e00\u6b21\u8ba2\u9605\u53ea\u652f\u6301\u4e00\u4e2a\u6a21\u677f\u6d88\u606f\uff09\u6d88\u606f\u6a21\u677fid\u5728[\u5fae\u4fe1\u516c\u4f17\u5e73\u53f0(mp.weixin.qq.com)-\u529f\u80fd-\u8ba2\u9605\u6d88\u606f]\u4e2d\u914d\u7f6e")),Object(c.b)("tr",null,Object(c.b)("td",null,"complete"),Object(c.b)("td",null,Object(c.b)("code",null,"(res: CallbackResult) => void")),Object(c.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(c.b)("td",null,"\u63a5\u53e3\u8c03\u7528\u7ed3\u675f\u7684\u56de\u8c03\u51fd\u6570\uff08\u8c03\u7528\u6210\u529f\u3001\u5931\u8d25\u90fd\u4f1a\u6267\u884c\uff09")),Object(c.b)("tr",null,Object(c.b)("td",null,"fail"),Object(c.b)("td",null,Object(c.b)("code",null,"(result: FailCallbackResult) => void")),Object(c.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(c.b)("td",null,"\u63a5\u53e3\u8c03\u7528\u5931\u8d25\u7684\u56de\u8c03\u51fd\u6570")),Object(c.b)("tr",null,Object(c.b)("td",null,"success"),Object(c.b)("td",null,Object(c.b)("code",null,"(result: SuccessCallbackResult) => void")),Object(c.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(c.b)("td",null,"\u63a5\u53e3\u8c03\u7528\u6210\u529f\u7684\u56de\u8c03\u51fd\u6570")))),Object(c.b)("h3",{id:"failcallbackresult"},"FailCallbackResult"),Object(c.b)("table",null,Object(c.b)("thead",null,Object(c.b)("tr",null,Object(c.b)("th",null,"\u53c2\u6570"),Object(c.b)("th",null,"\u7c7b\u578b"),Object(c.b)("th",null,"\u8bf4\u660e"))),Object(c.b)("tbody",null,Object(c.b)("tr",null,Object(c.b)("td",null,"errCode"),Object(c.b)("td",null,Object(c.b)("code",null,"number")),Object(c.b)("td",null,"\u63a5\u53e3\u8c03\u7528\u5931\u8d25\u9519\u8bef\u7801")),Object(c.b)("tr",null,Object(c.b)("td",null,"errMsg"),Object(c.b)("td",null,Object(c.b)("code",null,"string")),Object(c.b)("td",null,"\u63a5\u53e3\u8c03\u7528\u5931\u8d25\u9519\u8bef\u4fe1\u606f")))),Object(c.b)("h3",{id:"successcallbackresult"},"SuccessCallbackResult"),Object(c.b)("table",null,Object(c.b)("thead",null,Object(c.b)("tr",null,Object(c.b)("th",null,"\u53c2\u6570"),Object(c.b)("th",null,"\u7c7b\u578b"),Object(c.b)("th",null,"\u8bf4\u660e"))),Object(c.b)("tbody",null,Object(c.b)("tr",null,Object(c.b)("td",null,"[TEMPLATE_ID]"),Object(c.b)("td",null,Object(c.b)("code",null,'"accept" | "reject" | "ban"')),Object(c.b)("td",null,"\u52a8\u6001\u7684\u952e\uff0c\u5373\u6a21\u677fid")),Object(c.b)("tr",null,Object(c.b)("td",null,"errMsg"),Object(c.b)("td",null,Object(c.b)("code",null,"string")),Object(c.b)("td",null,"\u63a5\u53e3\u8c03\u7528\u6210\u529f\u65f6errMsg\u503c\u4e3a'requestSubscribeMessage:ok'")))),Object(c.b)("h4",{id:"\u793a\u4f8b\u4ee3\u7801"},"\u793a\u4f8b\u4ee3\u7801"),Object(c.b)("p",null,"\u8868\u793a\u7528\u6237\u540c\u610f\u8ba2\u9605 zun-LzcQyW-edafCVvzPkK4de2Rllr1fFpw2A_x0oXE \u8fd9\u6761\u6d88\u606f"),Object(c.b)("pre",null,Object(c.b)("code",Object(l.a)({parentName:"pre"},{className:"language-json"}),'{\n  "errMsg": "requestSubscribeMessage:ok",\n  "zun-LzcQyW-edafCVvzPkK4de2Rllr1fFpw2A_x0oXE": "accept"\n}\n')),Object(c.b)("h3",{id:"template_reflex"},"template_reflex"),Object(c.b)("p",null,"\u6a21\u7248\u6d88\u606f\u8ba2\u9605\u7c7b\u578b"),Object(c.b)("table",null,Object(c.b)("thead",null,Object(c.b)("tr",null,Object(c.b)("th",null,"\u53c2\u6570"),Object(c.b)("th",null,"\u8bf4\u660e"))),Object(c.b)("tbody",null,Object(c.b)("tr",null,Object(c.b)("td",null,"accept"),Object(c.b)("td",null,"\u8868\u793a\u7528\u6237\u540c\u610f\u8ba2\u9605\u8be5\u6761id\u5bf9\u5e94\u7684\u6a21\u677f\u6d88\u606f")),Object(c.b)("tr",null,Object(c.b)("td",null,"reject"),Object(c.b)("td",null,"\u8868\u793a\u7528\u6237\u62d2\u7edd\u8ba2\u9605\u8be5\u6761id\u5bf9\u5e94\u7684\u6a21\u677f\u6d88\u606f")),Object(c.b)("tr",null,Object(c.b)("td",null,"ban"),Object(c.b)("td",null,"\u8868\u793a\u5df2\u88ab\u540e\u53f0\u5c01\u7981")))),Object(c.b)("h2",{id:"\u793a\u4f8b\u4ee3\u7801-1"},"\u793a\u4f8b\u4ee3\u7801"),Object(c.b)("pre",null,Object(c.b)("code",Object(l.a)({parentName:"pre"},{className:"language-tsx"}),"Taro.requestSubscribeMessage({\n  tmplIds: [''],\n  success: function (res) { }\n})\n")),Object(c.b)("h2",{id:"api-\u652f\u6301\u5ea6"},"API \u652f\u6301\u5ea6"),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(l.a)({parentName:"tr"},{align:"center"}),"API"),Object(c.b)("th",Object(l.a)({parentName:"tr"},{align:"center"}),"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),Object(c.b)("th",Object(l.a)({parentName:"tr"},{align:"center"}),"H5"),Object(c.b)("th",Object(l.a)({parentName:"tr"},{align:"center"}),"React Native"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(l.a)({parentName:"tr"},{align:"center"}),"Taro.requestSubscribeMessage"),Object(c.b)("td",Object(l.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(c.b)("td",Object(l.a)({parentName:"tr"},{align:"center"})),Object(c.b)("td",Object(l.a)({parentName:"tr"},{align:"center"}))))))}s.isMDXComponent=!0}}]);