(window.webpackJsonp=window.webpackJsonp||[]).push([[384],{1790:function(e,n,t){"use strict";t.d(n,"a",(function(){return i})),t.d(n,"b",(function(){return j}));var r=t(0),a=t.n(r);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function p(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?p(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):p(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=a.a.createContext({}),b=function(e){var n=a.a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):c({},n,{},e)),t},i=function(e){var n=b(e.components);return a.a.createElement(s.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},m=Object(r.forwardRef)((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),i=b(t),m=r,j=i["".concat(p,".").concat(m)]||i[m]||u[m]||o;return t?a.a.createElement(j,c({ref:n},s,{components:t})):a.a.createElement(j,c({ref:n},s))}));function j(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,p=new Array(o);p[0]=m;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,p[1]=c;for(var s=2;s<o;s++)p[s]=t[s];return a.a.createElement.apply(null,p)}return a.a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},524:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return p})),t.d(n,"metadata",(function(){return c})),t.d(n,"rightToc",(function(){return l})),t.d(n,"default",(function(){return b}));var r=t(1),a=t(9),o=(t(0),t(1790)),p={title:"\u7ec4\u4ef6\u5316 & Props"},c={id:"version-1.3.45/props",title:"\u7ec4\u4ef6\u5316 & Props",description:"\u7ec4\u4ef6\u53ef\u4ee5\u5c06 UI \u5207\u5206\u6210\u4e00\u4e9b\u7684\u72ec\u7acb\u7684\u3001\u53ef\u590d\u7528\u7684\u90e8\u4ef6\uff0c\u8fd9\u6837\u4f60\u5c31\u53ea\u9700\u4e13\u6ce8\u4e8e\u6784\u5efa\u6bcf\u4e00\u4e2a\u5355\u72ec\u7684\u90e8\u4ef6\u3002",source:"@site/versioned_docs/version-1.3.45/props.md",permalink:"/taro/docs/1.3.45/props",editUrl:"https://github.com/nervjs/taro/edit/docs/versioned_docs/version-1.3.45/props.md",version:"1.3.45",sidebar:"version-1.3.45/docs",previous:{title:"JSX \u7b80\u4ecb",permalink:"/taro/docs/1.3.45/jsx"},next:{title:"\u751f\u547d\u5468\u671f & State",permalink:"/taro/docs/1.3.45/state"}},l=[{value:"\u7ec4\u4ef6\u6e32\u67d3",id:"\u7ec4\u4ef6\u6e32\u67d3",children:[{value:"Props \u7684\u53ea\u8bfb\u6027",id:"props-\u7684\u53ea\u8bfb\u6027",children:[]},{value:"\u4f7f\u7528 PropTypes \u68c0\u67e5\u7c7b\u578b",id:"\u4f7f\u7528-proptypes-\u68c0\u67e5\u7c7b\u578b",children:[]}]}],s={rightToc:l};function b(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},s,t,{components:n,mdxType:"MDXLayout"}),Object(o.b)("p",null,"\u7ec4\u4ef6\u53ef\u4ee5\u5c06 UI \u5207\u5206\u6210\u4e00\u4e9b\u7684\u72ec\u7acb\u7684\u3001\u53ef\u590d\u7528\u7684\u90e8\u4ef6\uff0c\u8fd9\u6837\u4f60\u5c31\u53ea\u9700\u4e13\u6ce8\u4e8e\u6784\u5efa\u6bcf\u4e00\u4e2a\u5355\u72ec\u7684\u90e8\u4ef6\u3002"),Object(o.b)("p",null,"\u7ec4\u4ef6\u4ece\u6982\u5ff5\u4e0a\u770b\u5c31\u50cf\u662f\u51fd\u6570\uff0c\u5b83\u53ef\u4ee5\u63a5\u6536\u4efb\u610f\u7684\u8f93\u5165\u503c\uff08\u79f0\u4e4b\u4e3a ",Object(o.b)("inlineCode",{parentName:"p"},"props"),"\uff09\uff0c\u5e76\u8fd4\u56de\u4e00\u4e2a\u9700\u8981\u5728\u9875\u9762\u4e0a\u5c55\u793a\u7684 Taro \u5143\u7d20\u3002"),Object(o.b)("p",null,"\u4f60\u4e5f\u53ef\u4ee5\u4f7f\u7528 ES6 Class \u6765\u5b9a\u4e49\u4e00\u4e2a\u7ec4\u4ef6:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-jsx"}),"class Welcome extends Component {\n  render () {\n    return <View>Hello, {this.props.name}</View>\n  }\n}\n")),Object(o.b)("h2",{id:"\u7ec4\u4ef6\u6e32\u67d3"},"\u7ec4\u4ef6\u6e32\u67d3"),Object(o.b)("p",null,"\u5728\u524d\u9762\uff0c\u6211\u4eec\u9047\u5230\u7684 Taro \u5143\u7d20\u90fd\u662f\u5185\u7f6e\u7ec4\u4ef6\uff1a"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-jsx"}),"const element = <View />\n")),Object(o.b)("p",null,"\u7136\u800c\uff0cTaro \u5143\u7d20\u4e5f\u53ef\u4ee5\u662f\u7528\u6237\u81ea\u5b9a\u4e49\u7684\u7ec4\u4ef6\uff1a"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-jsx"}),'const element = <Welcome name="Wallace" />\n')),Object(o.b)("p",null,"\u5f53 React \u9047\u5230\u7684\u5143\u7d20\u662f\u7528\u6237\u81ea\u5b9a\u4e49\u7684\u7ec4\u4ef6\uff0c\u5b83\u4f1a\u5c06 JSX \u5c5e\u6027\u4f5c\u4e3a\u5355\u4e2a\u5bf9\u8c61\u4f20\u9012\u7ed9\u8be5\u7ec4\u4ef6\uff0c\u8fd9\u4e2a\u5bf9\u8c61\u79f0\u4e4b\u4e3a ",Object(o.b)("inlineCode",{parentName:"p"},"props"),"\u3002"),Object(o.b)("p",null,"\u4f8b\u5982,\u8fd9\u6bb5\u4ee3\u7801\u4f1a\u5728\u9875\u9762\u4e0a\u6e32\u67d3\u51fa ",Object(o.b)("inlineCode",{parentName:"p"},"Hello, Wallace"),":"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-jsx"}),'// welcome.js\nclass Welcome extends Component {\n  render () {\n    return <View><Text>Hello, {this.props.name}</Text></View>\n  }\n}\n\n// app.js\nclass App extends Component {\n  render () {\n    return <Welcome name="Wallace" />\n  }\n}\n')),Object(o.b)("h3",{id:"props-\u7684\u53ea\u8bfb\u6027"},"Props \u7684\u53ea\u8bfb\u6027"),Object(o.b)("p",null,"\u4e00\u4e2a\u58f0\u660e\u7684\u7ec4\u4ef6\u51b3\u4e0d\u80fd\u4fee\u6539\u5b83\u81ea\u5df1\u7684 ",Object(o.b)("inlineCode",{parentName:"p"},"props"),"\u3002\u6765\u770b\u8fd9\u4e2a ",Object(o.b)("inlineCode",{parentName:"p"},"sum")," \u51fd\u6570\uff1a"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-jsx"}),"function sum (a, b) {\n  return a + b\n}\n")),Object(o.b)("p",null,"\u7c7b\u4f3c\u4e8e\u4e0a\u9762\u7684\u8fd9\u79cd\u51fd\u6570\u79f0\u4e3a\u300c\u7eaf\u51fd\u6570\u300d\uff0c\u5b83\u6ca1\u6709\u6539\u53d8\u5b83\u81ea\u5df1\u7684\u8f93\u5165\u503c\uff0c\u5f53\u4f20\u5165\u7684\u503c\u76f8\u540c\u65f6\uff0c\u603b\u662f\u4f1a\u8fd4\u56de\u76f8\u540c\u7684\u7ed3\u679c\u3002"),Object(o.b)("p",null,"\u4e0e\u4e4b\u76f8\u5bf9\u7684\u662f\u975e\u7eaf\u51fd\u6570\uff0c\u5b83\u4f1a\u6539\u53d8\u5b83\u81ea\u8eab\u7684\u8f93\u5165\u503c\uff1a"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-jsx"}),"function withdraw (account, amount) {\n  account.total -= amount\n}\n")),Object(o.b)("p",null,"Taro \u548c React \u4e00\u6837\uff0c\u4e5f\u6709\u4e00\u4e2a\u4e25\u683c\u7684\u89c4\u5219\uff1a"),Object(o.b)("p",null,"\u6240\u6709\u7684 Taro \u7ec4\u4ef6\u5fc5\u987b\u50cf\u7eaf\u51fd\u6570\u90a3\u6837\u4f7f\u7528\u5b83\u4eec\u7684 props\u3002"),Object(o.b)("p",null,"\u5f53\u7136\uff0c\u5e94\u7528\u7684\u754c\u9762\u662f\u968f\u65f6\u95f4\u52a8\u6001\u53d8\u5316\u7684\uff0c\u6211\u4eec\u5c06\u5728\u4e0b\u4e00\u8282\u4ecb\u7ecd\u4e00\u79cd\u79f0\u4e3a ",Object(o.b)("inlineCode",{parentName:"p"},"state")," \u7684\u65b0\u6982\u5ff5\uff0cState \u53ef\u4ee5\u5728\u4e0d\u8fdd\u53cd\u4e0a\u8ff0\u89c4\u5219\u7684\u60c5\u51b5\u4e0b\uff0c\u6839\u636e\u7528\u6237\u64cd\u4f5c\u3001\u7f51\u7edc\u54cd\u5e94\u3001\u6216\u8005\u5176\u4ed6\u72b6\u6001\u53d8\u5316\uff0c\u4f7f\u7ec4\u4ef6\u52a8\u6001\u7684\u54cd\u5e94\u5e76\u6539\u53d8\u7ec4\u4ef6\u7684\u8f93\u51fa\u3002"),Object(o.b)("h3",{id:"\u4f7f\u7528-proptypes-\u68c0\u67e5\u7c7b\u578b"},"\u4f7f\u7528 PropTypes \u68c0\u67e5\u7c7b\u578b"),Object(o.b)("p",null,"\u968f\u7740\u5e94\u7528\u65e5\u6e10\u5e9e\u5927\uff0c\u4f60\u53ef\u4ee5\u901a\u8fc7\u7c7b\u578b\u68c0\u67e5\u6355\u83b7\u5927\u91cf\u9519\u8bef\u3002\u8981\u68c0\u67e5\u7ec4\u4ef6\u7684\u5c5e\u6027\uff0c\u4f60\u9700\u8981\u914d\u7f6e\u7279\u6b8a\u7684 ",Object(o.b)("inlineCode",{parentName:"p"},"propTypes")," \u5c5e\u6027\uff1a"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-jsx"}),"import PropTypes from 'prop-types';\n\nclass Greeting extends Component {\n  render() {\n    return (\n      <h1>Hello, {this.props.name}</h1>\n    );\n  }\n}\n\nGreeting.propTypes = {\n  name: PropTypes.string\n};\n")),Object(o.b)("p",null,"\u5982\u4e0a\u4f8b\uff0cTaro \u4e0e React \u4e00\u6837\uff0c\u4e5f\u652f\u6301 ",Object(o.b)("inlineCode",{parentName:"p"},"PropTypes")," \u68c0\u67e5\u7c7b\u578b\uff0c",Object(o.b)("em",{parentName:"p"},"\u76ee\u524d\u5728\u5c0f\u7a0b\u5e8f\u7aef\u8fd8\u6709\u4e9b\u95ee\u9898"),"\uff0c\u4f46\u5728 H5 \u7aef\u53ef\u4ee5\u4f7f\u7528\uff0c\u7528\u6cd5\u548c\u5728 React \u91cc\u4e00\u6837\u3002\n\u66f4\u591a\u53ef\u53c2\u7167 ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://reactjs.org.cn/doc/typechecking-with-proptypes.html"}),"React \u7684\u76f8\u5173\u6587\u6863"),"\u3002"))}b.isMDXComponent=!0}}]);