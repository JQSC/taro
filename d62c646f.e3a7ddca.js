(window.webpackJsonp=window.webpackJsonp||[]).push([[1382],{1519:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return a})),n.d(t,"rightToc",(function(){return o})),n.d(t,"default",(function(){return O}));var r=n(1),b=n(9),c=(n(0),n(1790)),l={title:"Form",sidebar_label:"Form"},a={id:"version-3.0.9/components/forms/form",title:"Form",description:"\u8868\u5355\u3002\u5c06\u7ec4\u4ef6\u5185\u7684\u7528\u6237\u8f93\u5165\u7684 switch input checkbox slider radio picker \u63d0\u4ea4\u3002",source:"@site/versioned_docs/version-3.0.9/components/forms/form.md",permalink:"/taro/docs/components/forms/form",editUrl:"https://github.com/nervjs/taro/edit/docs/versioned_docs/version-3.0.9/components/forms/form.md",version:"3.0.9",sidebar_label:"Form",sidebar:"version-3.0.9/components",previous:{title:"Checkbox",permalink:"/taro/docs/components/forms/checkbox"},next:{title:"Input",permalink:"/taro/docs/components/forms/input"}},o=[{value:"\u7c7b\u578b",id:"\u7c7b\u578b",children:[]},{value:"\u793a\u4f8b\u4ee3\u7801",id:"\u793a\u4f8b\u4ee3\u7801",children:[]},{value:"FormProps",id:"formprops",children:[{value:"API \u652f\u6301\u5ea6",id:"api-\u652f\u6301\u5ea6",children:[]},{value:"onSubmitEventDetail",id:"onsubmiteventdetail",children:[]}]},{value:"API \u652f\u6301\u5ea6",id:"api-\u652f\u6301\u5ea6-1",children:[]}],i={rightToc:o};function O(e){var t=e.components,n=Object(b.a)(e,["components"]);return Object(c.b)("wrapper",Object(r.a)({},i,n,{components:t,mdxType:"MDXLayout"}),Object(c.b)("p",null,"\u8868\u5355\u3002\u5c06\u7ec4\u4ef6\u5185\u7684\u7528\u6237\u8f93\u5165\u7684 switch input checkbox slider radio picker \u63d0\u4ea4\u3002"),Object(c.b)("p",null,"\u5f53\u70b9\u51fb form \u8868\u5355\u4e2d form-type \u4e3a submit \u7684 button \u7ec4\u4ef6\u65f6\uff0c\u4f1a\u5c06\u8868\u5355\u7ec4\u4ef6\u4e2d\u7684 value \u503c\u8fdb\u884c\u63d0\u4ea4\uff0c\u9700\u8981\u5728\u8868\u5355\u7ec4\u4ef6\u4e2d\u52a0\u4e0a name \u6765\u4f5c\u4e3a key\u3002"),Object(c.b)("blockquote",null,Object(c.b)("p",{parentName:"blockquote"},Object(c.b)("a",Object(r.a)({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/dev/component/form.html"}),"\u53c2\u8003\u6587\u6863"))),Object(c.b)("h2",{id:"\u7c7b\u578b"},"\u7c7b\u578b"),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-tsx"}),"ComponentType<FormProps>\n")),Object(c.b)("h2",{id:"\u793a\u4f8b\u4ee3\u7801"},"\u793a\u4f8b\u4ee3\u7801"),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-tsx"}),"class App extends Component {\n\n  formSubmit = e => {\n    console.log(e)\n  }\n\n  formReset = e => {\n    console.log(e)\n  }\n\n  render () {\n    return (\n      <Form onSubmit={this.formSubmit} onReset={this.formReset} >\n        <View className='example-body'>\n          <Switch name='switch' className='form-switch'></Switch>\n        </View>\n      </Form>\n    )\n  }\n}\n")),Object(c.b)("h2",{id:"formprops"},"FormProps"),Object(c.b)("table",null,Object(c.b)("thead",null,Object(c.b)("tr",null,Object(c.b)("th",null,"\u53c2\u6570"),Object(c.b)("th",null,"\u7c7b\u578b"),Object(c.b)("th",{style:{textAlign:"center"}},"\u9ed8\u8ba4\u503c"),Object(c.b)("th",{style:{textAlign:"center"}},"\u5fc5\u586b"),Object(c.b)("th",null,"\u8bf4\u660e"))),Object(c.b)("tbody",null,Object(c.b)("tr",null,Object(c.b)("td",null,"reportSubmit"),Object(c.b)("td",null,Object(c.b)("code",null,"boolean")),Object(c.b)("td",{style:{textAlign:"center"}},Object(c.b)("code",null,"false")),Object(c.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(c.b)("td",null,"\u662f\u5426\u8fd4\u56de ",Object(c.b)("code",null,"formId")," \u7528\u4e8e\u53d1\u9001\u6a21\u677f\u6d88\u606f\u3002")),Object(c.b)("tr",null,Object(c.b)("td",null,"reportSubmitTimeout"),Object(c.b)("td",null,Object(c.b)("code",null,"number")),Object(c.b)("td",{style:{textAlign:"center"}},Object(c.b)("code",null,"0")),Object(c.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(c.b)("td",null,"\u7b49\u5f85\u4e00\u6bb5\u65f6\u95f4\uff08\u6beb\u79d2\u6570\uff09\u4ee5\u786e\u8ba4 ",Object(c.b)("code",null,"formId")," \u662f\u5426\u751f\u6548\u3002",Object(c.b)("br",null),"\u5982\u679c\u672a\u6307\u5b9a\u8fd9\u4e2a\u53c2\u6570\uff0c",Object(c.b)("code",null,"formId")," \u6709\u5f88\u5c0f\u7684\u6982\u7387\u662f\u65e0\u6548\u7684\uff08\u5982\u9047\u5230\u7f51\u7edc\u5931\u8d25\u7684\u60c5\u51b5\uff09\u3002",Object(c.b)("br",null),"\u6307\u5b9a\u8fd9\u4e2a\u53c2\u6570\u5c06\u53ef\u4ee5\u68c0\u6d4b ",Object(c.b)("code",null,"formId")," \u662f\u5426\u6709\u6548\uff0c",Object(c.b)("br",null),"\u4ee5\u8fd9\u4e2a\u53c2\u6570\u7684\u65f6\u95f4\u4f5c\u4e3a\u8fd9\u9879\u68c0\u6d4b\u7684\u8d85\u65f6\u65f6\u95f4\u3002",Object(c.b)("br",null),"\u5982\u679c\u5931\u8d25\uff0c\u5c06\u8fd4\u56de ",Object(c.b)("code",null,"requestFormId:fail")," \u5f00\u5934\u7684 ",Object(c.b)("code",null,"formId"),"\u3002")),Object(c.b)("tr",null,Object(c.b)("td",null,"onSubmit"),Object(c.b)("td",null,Object(c.b)("code",null,"BaseEventOrigFunction<onSubmitEventDetail>")),Object(c.b)("td",{style:{textAlign:"center"}}),Object(c.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(c.b)("td",null,"\u643a\u5e26 form \u4e2d\u7684\u6570\u636e\u89e6\u53d1 submit \u4e8b\u4ef6",Object(c.b)("br",null),"event.detail = ","{ value : { name': 'value'}, formId: '' }")),Object(c.b)("tr",null,Object(c.b)("td",null,"onReset"),Object(c.b)("td",null,Object(c.b)("code",null,"BaseEventOrigFunction<any>")),Object(c.b)("td",{style:{textAlign:"center"}}),Object(c.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(c.b)("td",null,"\u8868\u5355\u91cd\u7f6e\u65f6\u4f1a\u89e6\u53d1 reset \u4e8b\u4ef6")))),Object(c.b)("h3",{id:"api-\u652f\u6301\u5ea6"},"API \u652f\u6301\u5ea6"),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(r.a)({parentName:"tr"},{align:"center"}),"API"),Object(c.b)("th",Object(r.a)({parentName:"tr"},{align:"center"}),"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),Object(c.b)("th",Object(r.a)({parentName:"tr"},{align:"center"}),"H5"),Object(c.b)("th",Object(r.a)({parentName:"tr"},{align:"center"}),"React Native"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"FormProps.reportSubmit"),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}))),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"FormProps.reportSubmitTimeout"),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:"center"})),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}))),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"FormProps.onSubmit"),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:"center"})),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}))),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"FormProps.onReset"),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f")))),Object(c.b)("h3",{id:"onsubmiteventdetail"},"onSubmitEventDetail"),Object(c.b)("table",null,Object(c.b)("thead",null,Object(c.b)("tr",null,Object(c.b)("th",null,"\u53c2\u6570"),Object(c.b)("th",null,"\u7c7b\u578b"),Object(c.b)("th",{style:{textAlign:"center"}},"\u5fc5\u586b"),Object(c.b)("th",null,"\u8bf4\u660e"))),Object(c.b)("tbody",null,Object(c.b)("tr",null,Object(c.b)("td",null,"value"),Object(c.b)("td",null,Object(c.b)("code",null,"{ [formItemName: string]: any; }")),Object(c.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(c.b)("td",null,"\u5f53\u70b9\u51fb ",Object(c.b)("code",null,"<form>")," \u8868\u5355\u4e2d ",Object(c.b)("code",null,"form-type")," \u4e3a ",Object(c.b)("code",null,"submit")," \u7684 ",Object(c.b)("code",null,"<button>")," \u7ec4\u4ef6\u65f6\uff0c",Object(c.b)("br",null),"\u4f1a\u5c06\u8868\u5355\u7ec4\u4ef6\u4e2d\u7684 ",Object(c.b)("code",null,"value")," \u503c\u8fdb\u884c\u63d0\u4ea4\uff0c",Object(c.b)("br",null),"\u9700\u8981\u5728\u8868\u5355\u7ec4\u4ef6\u4e2d\u52a0\u4e0a ",Object(c.b)("code",null,"name")," \u6765\u4f5c\u4e3a ",Object(c.b)("code",null,"key"),"\u3002")),Object(c.b)("tr",null,Object(c.b)("td",null,"formId"),Object(c.b)("td",null,Object(c.b)("code",null,"string")),Object(c.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(c.b)("td",null,"\u5f53 ",Object(c.b)("code",null,"reportSubmit")," \u4e3a ",Object(c.b)("code",null,"true")," \u65f6\uff0c\u8fd4\u56de ",Object(c.b)("code",null,"formId")," \u7528\u4e8e\u53d1\u9001\u6a21\u677f\u6d88\u606f\u3002")))),Object(c.b)("h2",{id:"api-\u652f\u6301\u5ea6-1"},"API \u652f\u6301\u5ea6"),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(r.a)({parentName:"tr"},{align:"center"}),"API"),Object(c.b)("th",Object(r.a)({parentName:"tr"},{align:"center"}),"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),Object(c.b)("th",Object(r.a)({parentName:"tr"},{align:"center"}),"H5"),Object(c.b)("th",Object(r.a)({parentName:"tr"},{align:"center"}),"React Native"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"Form"),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f")))))}O.isMDXComponent=!0},1790:function(e,t,n){"use strict";n.d(t,"a",(function(){return j})),n.d(t,"b",(function(){return d}));var r=n(0),b=n.n(r);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,b=function(e,t){if(null==e)return{};var n,r,b={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(b[n]=e[n]);return b}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(b[n]=e[n])}return b}var i=b.a.createContext({}),O=function(e){var t=b.a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):a({},t,{},e)),n},j=function(e){var t=O(e.components);return b.a.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return b.a.createElement(b.a.Fragment,{},t)}},m=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,c=e.originalType,l=e.parentName,i=o(e,["components","mdxType","originalType","parentName"]),j=O(n),m=r,d=j["".concat(l,".").concat(m)]||j[m]||u[m]||c;return n?b.a.createElement(d,a({ref:t},i,{components:n})):b.a.createElement(d,a({ref:t},i))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var c=n.length,l=new Array(c);l[0]=m;var a={};for(var o in t)hasOwnProperty.call(t,o)&&(a[o]=t[o]);a.originalType=e,a.mdxType="string"==typeof e?e:r,l[1]=a;for(var i=2;i<c;i++)l[i]=n[i];return b.a.createElement.apply(null,l)}return b.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);