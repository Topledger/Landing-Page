(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[888],{1118:function(a,b,c){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return c(2386)}])},6998:function(a,b,c){"use strict";c.d(b,{v:function(){return d}});var d=(0,c(7294).createContext)({isDarkMode:null,setIsDarkMode:function(){return null}})},1210:function(a,b){"use strict";function c(a,b,c,d){return!1}Object.defineProperty(b,"__esModule",{value:!0}),b.getDomainLocale=c,("function"==typeof b.default||"object"==typeof b.default&&null!==b.default)&& void 0===b.default.__esModule&&(Object.defineProperty(b.default,"__esModule",{value:!0}),Object.assign(b.default,b),a.exports=b.default)},8418:function(a,b,c){"use strict";Object.defineProperty(b,"__esModule",{value:!0});var d=c(4941).Z;c(5753).default,Object.defineProperty(b,"__esModule",{value:!0}),b.default=void 0;var e=c(2648).Z,f=c(7273).Z,g=e(c(7294)),h=c(6273),i=c(2725),j=c(3462),k=c(1018),l=c(7190),m=c(1210),n=c(8684),o=void 0!==g.default.useTransition,p={};function q(a,b,c,d){if(a&&h.isLocalURL(b)){a.prefetch(b,c,d).catch(function(a){});var e=d&& void 0!==d.locale?d.locale:a&&a.locale;p[b+"%"+c+(e?"%"+e:"")]=!0}}var r=g.default.forwardRef(function(a,b){var c,e,r=a.href,s=a.as,t=a.children,u=a.prefetch,v=a.passHref,w=a.replace,x=a.soft,y=a.shallow,z=a.scroll,A=a.locale,B=a.onClick,C=a.onMouseEnter,D=a.onTouchStart,E=a.legacyBehavior,F=void 0===E?!0!==Boolean(!1):E,G=f(a,["href","as","children","prefetch","passHref","replace","soft","shallow","scroll","locale","onClick","onMouseEnter","onTouchStart","legacyBehavior"]);c=t,F&&("string"==typeof c||"number"==typeof c)&&(c=g.default.createElement("a",null,c));var H=!1!==u,I=d(o?g.default.useTransition():[],2),J=I[1],K=g.default.useContext(j.RouterContext),L=g.default.useContext(k.AppRouterContext);L&&(K=L);var M=g.default.useMemo(function(){var a=d(h.resolveHref(K,r,!0),2),b=a[0],c=a[1];return{href:b,as:s?h.resolveHref(K,s):c||b}},[K,r,s]),N=M.href,O=M.as,P=g.default.useRef(N),Q=g.default.useRef(O);F&&(e=g.default.Children.only(c));var R=F?e&&"object"==typeof e&&e.ref:b,S=d(l.useIntersection({rootMargin:"200px"}),3),T=S[0],U=S[1],V=S[2],W=g.default.useCallback(function(a){(Q.current!==O||P.current!==N)&&(V(),Q.current=O,P.current=N),T(a),R&&("function"==typeof R?R(a):"object"==typeof R&&(R.current=a))},[O,R,N,V,T]);g.default.useEffect(function(){var a=U&&H&&h.isLocalURL(N),b=void 0!==A?A:K&&K.locale,c=p[N+"%"+O+(b?"%"+b:"")];a&&!c&&q(K,N,O,{locale:b})},[O,N,U,A,H,K]);var X={ref:W,onClick:function(a){F||"function"!=typeof B||B(a),F&&e.props&&"function"==typeof e.props.onClick&&e.props.onClick(a),a.defaultPrevented||function(a,b,c,d,e,f,g,i,j,k){if("A"!==a.currentTarget.nodeName.toUpperCase()||(!(m=(l=a).currentTarget.target)||"_self"===m)&&!l.metaKey&&!l.ctrlKey&&!l.shiftKey&&!l.altKey&&(!l.nativeEvent||2!==l.nativeEvent.which)&&h.isLocalURL(c)){a.preventDefault();var l,m,n=function(){"softPush"in b&&"softReplace"in b?b[f?e?"softReplace":"softPush":e?"replace":"push"](c):b[e?"replace":"push"](c,d,{shallow:g,locale:j,scroll:i})};k?k(n):n()}}(a,K,N,O,w,x,y,z,A,L?J:void 0)},onMouseEnter:function(a){F||"function"!=typeof C||C(a),F&&e.props&&"function"==typeof e.props.onMouseEnter&&e.props.onMouseEnter(a),h.isLocalURL(N)&&q(K,N,O,{priority:!0})},onTouchStart:function(a){F||"function"!=typeof D||D(a),F&&e.props&&"function"==typeof e.props.onTouchStart&&e.props.onTouchStart(a),h.isLocalURL(N)&&q(K,N,O,{priority:!0})}};if(!F||v||"a"===e.type&&!("href"in e.props)){var Y=void 0!==A?A:K&&K.locale,Z=K&&K.isLocaleDomain&&m.getDomainLocale(O,Y,K.locales,K.domainLocales);X.href=Z||n.addBasePath(i.addLocale(O,Y,K&&K.defaultLocale))}return F?g.default.cloneElement(e,X):g.default.createElement("a",Object.assign({},G,X),c)});b.default=r,("function"==typeof b.default||"object"==typeof b.default&&null!==b.default)&& void 0===b.default.__esModule&&(Object.defineProperty(b.default,"__esModule",{value:!0}),Object.assign(b.default,b),a.exports=b.default)},7190:function(a,b,c){"use strict";Object.defineProperty(b,"__esModule",{value:!0});var d=c(4941).Z;Object.defineProperty(b,"__esModule",{value:!0}),b.useIntersection=function(a){var b=a.rootRef,c=a.rootMargin,i=a.disabled||!g,j=e.useRef(),k=d(e.useState(!1),2),l=k[0],m=k[1],n=d(e.useState(null),2),o=n[0],p=n[1];e.useEffect(function(){if(g){if(j.current&&(j.current(),j.current=void 0),!i&&!l)return o&&o.tagName&&(j.current=h(o,function(a){return a&&m(a)},{root:null==b?void 0:b.current,rootMargin:c})),function(){null==j.current||j.current(),j.current=void 0}}else if(!l){var a=f.requestIdleCallback(function(){return m(!0)});return function(){return f.cancelIdleCallback(a)}}},[o,i,c,b,l]);var q=e.useCallback(function(){m(!1)},[]);return[p,l,q]};var e=c(7294),f=c(9311),g="function"==typeof IntersectionObserver;function h(a,b,c){var d=k(c),e=d.id,f=d.observer,g=d.elements;return g.set(a,b),f.observe(a),function(){if(g.delete(a),f.unobserve(a),0===g.size){f.disconnect(),i.delete(e);var b=j.findIndex(function(a){return a.root===e.root&&a.margin===e.margin});b> -1&&j.splice(b,1)}}}var i=new Map,j=[];function k(a){var b,c={root:a.root||null,margin:a.rootMargin||""},d=j.find(function(a){return a.root===c.root&&a.margin===c.margin});if(d&&(b=i.get(d)))return b;var e=new Map,f=new IntersectionObserver(function(a){a.forEach(function(a){var b=e.get(a.target),c=a.isIntersecting||a.intersectionRatio>0;b&&c&&b(c)})},a);return b={id:c,observer:f,elements:e},j.push(c),i.set(c,b),b}("function"==typeof b.default||"object"==typeof b.default&&null!==b.default)&& void 0===b.default.__esModule&&(Object.defineProperty(b.default,"__esModule",{value:!0}),Object.assign(b.default,b),a.exports=b.default)},1018:function(a,b,c){"use strict";Object.defineProperty(b,"__esModule",{value:!0}),b.GlobalLayoutRouterContext=b.LayoutRouterContext=b.AppRouterContext=void 0;var d=(0,c(2648).Z)(c(7294)),e=d.default.createContext(null);b.AppRouterContext=e;var f=d.default.createContext(null);b.LayoutRouterContext=f;var g=d.default.createContext(null);b.GlobalLayoutRouterContext=g},2386:function(a,b,c){"use strict";c.r(b),c.d(b,{default:function(){return r}});var d=c(6042),e=c(5893);c(906);var f=c(7294),g=c(1163),h=c(1664),i=c.n(h),j=c(6998),k=function(){var a=(0,g.useRouter)(),b=(0,f.useState)(!1),c=b[0],d=b[1],h=function(){d(function(a){return!a})};(0,f.useEffect)(function(){d(!1)},[a.asPath]);var k=(0,f.useContext)(j.v).isDarkMode;return(0,e.jsxs)("header",{className:"/dashboards"===a.pathname&&k?"blackBg":"",children:[(0,e.jsxs)("div",{className:"navMain ".concat(c&&"boxNavMain"),children:[(0,e.jsx)("div",{className:"logo",children:(0,e.jsx)(i(),{href:"/",children:"/dashboards"===a.pathname&&k?(0,e.jsx)("img",{src:"assets/images/black-logo.png",alt:"Top Ledger Logo"}):(0,e.jsx)("img",{src:"assets/images/logo.png",alt:"Top Ledger Logo"})})}),(0,e.jsx)("div",{className:"navLink",onClick:function(){return h()},children:c?(0,e.jsx)("img",{src:"assets/images/cross.svg",alt:"cross-icon"}):(0,e.jsx)("img",{src:"assets/images/navIcon.png",alt:"menu-icon"})})]}),c&&(0,e.jsxs)("div",{className:"head-menu",children:[(0,e.jsx)("div",{className:"active ".concat("/dashboards"===a.pathname?"active-link":null),children:(0,e.jsx)(i(),{href:"/dashboards",children:"Dashboards"})}),(0,e.jsx)("div",{className:"active ".concat("https://docs.topledger.xyz/"===a.pathname?"active-link":null),children:(0,e.jsx)(i(),{href:"/dashboards",children:"Docs"})}),(0,e.jsx)("div",{className:"active ".concat("/about-us"===a.pathname?"active-link":null),children:(0,e.jsx)(i(),{href:"/about-us",children:"About"})})]})]})},l=k,m=function(){return(0,e.jsxs)("footer",{className:"footer",children:[(0,e.jsxs)("div",{style:{backgroundColor:"#001C6587"},children:[(0,e.jsxs)("div",{className:"footerGrid",children:[(0,e.jsxs)("div",{className:"footerFlex",children:[(0,e.jsxs)("div",{className:"footerContent",children:[(0,e.jsx)("h1",{children:"Company"}),(0,e.jsxs)("ul",{children:[(0,e.jsx)("li",{children:(0,e.jsx)(i(),{href:"/",children:"Home"})}),(0,e.jsx)("li",{children:(0,e.jsx)(i(),{href:"/about-us",children:"About"})}),(0,e.jsx)("li",{children:(0,e.jsx)(i(),{href:"/about-us/#team",scroll:!1,children:"Team"})})]})]}),(0,e.jsxs)("div",{className:"footerContent",children:[(0,e.jsx)("h1",{children:"Product"}),(0,e.jsx)("ul",{children:(0,e.jsx)("li",{children:(0,e.jsx)(i(),{href:"/dashboards",children:"Dashboards"})})})]})]}),(0,e.jsx)("div",{className:"footerContent"}),(0,e.jsx)("div",{className:"footerContent",children:(0,e.jsx)("div",{className:"gmap",children:(0,e.jsx)("iframe",{src:"https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d3988.792023943601!2d103.85612611409186!3d1.2995912620984944!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1s3%20Fraser%20Street%20%2305-25%20Duo%20Tower%2C%20Singapore!5e0!3m2!1sen!2sin!4v1659891206687!5m2!1sen!2sin",width:"600",height:"450",style:{border:0},allowFullScreen:"",loading:"lazy",referrerPolicy:"no-referrer-when-downgrade"})})}),(0,e.jsxs)("div",{className:"footerContent getTouch",children:[(0,e.jsx)("h1",{children:"Get in Touch"}),(0,e.jsxs)("ul",{className:"address",children:[(0,e.jsxs)("li",{children:[(0,e.jsx)("img",{draggable:"false",src:"assets/images/mail.svg"}),(0,e.jsx)("a",{href:"mailto:nitin@topledger.xyz",children:"nitin@topledger.xyz "})]}),(0,e.jsxs)("li",{children:[(0,e.jsx)("img",{draggable:"false",src:"assets/images/locat.svg"}),"Fraser Street #05-25 ",(0,e.jsx)("br",{}),"Duo Tower, Singapore"]})]}),(0,e.jsxs)("div",{className:"socialIcons",children:[(0,e.jsx)("h1",{children:"Social"}),(0,e.jsxs)("ul",{className:"social",children:[(0,e.jsx)("li",{children:(0,e.jsx)("a",{title:"telegram",draggable:"false",href:"https://telegram.me/ergon50",target:"_blank",rel:"noreferrer",children:(0,e.jsx)("img",{draggable:"false",src:"assets/images/telegram-footer.svg",style:{marginLeft:"-3px"}})})}),(0,e.jsx)("li",{children:(0,e.jsx)("a",{title:"twitter",draggable:"false",href:"https://twitter.com/ledger_top",target:"_blank",rel:"noreferrer",children:(0,e.jsx)("img",{draggable:"false",src:"assets/images/twitter-footer.svg"})})})]})]})]})]}),(0,e.jsx)("div",{className:"footer-border"})]}),(0,e.jsx)("div",{style:{backgroundColor:"#001C65"},children:(0,e.jsx)("div",{className:"last",children:(0,e.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:"5px"},children:[(0,e.jsx)("img",{className:"copy-ican",src:"assets/images/copyright.svg"}),(0,e.jsx)("p",{style:{margin:0,fontSize:"16px",color:"rgba(255, 255, 255, 0.64)",fontWeight:"300"},children:"Copyright, Top Ledger, 2022"})]})})})]})},n=m,o=function(a){var b=a.children,c=(0,f.useState)(!1),d=c[0],g=c[1],h=function(a){console.log(a)};return(0,e.jsx)(j.v.Provider,{value:{isDarkMode:d,setIsDarkMode:g,updateDarkMode:h},children:b})},p=c(9008),q=c.n(p),r=function(a){var b=a.Component,c=a.pageProps,h=(0,g.useRouter)();return(0,f.useEffect)(function(){h.pathname.includes("about-us")&&(document.body.style.background="white")},[]),(0,e.jsxs)(e.Fragment,{children:[(0,e.jsxs)(q(),{children:[(0,e.jsx)("meta",{charSet:"UTF-8"}),(0,e.jsx)("meta",{httpEquiv:"X-UA-Compatible",content:"IE=edge"}),(0,e.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1.0"}),(0,e.jsx)("link",{rel:"icon",type:"image/x-icon",href:"/favicon.png"})]}),(0,e.jsx)(o,{children:h.pathname.includes("get-started")?(0,e.jsx)(b,(0,d.Z)({},c)):(0,e.jsxs)(e.Fragment,{children:[h.pathname.includes("thanks")?null:(0,e.jsx)(l,{}),(0,e.jsx)(b,(0,d.Z)({},c)),h.pathname.includes("thanks")||h.pathname.includes("dashboard")?null:(0,e.jsx)(n,{})]})})]})}},906:function(){},9008:function(a,b,c){a.exports=c(5443)},1664:function(a,b,c){a.exports=c(8418)},1163:function(a,b,c){a.exports=c(387)},4924:function(a,b,c){"use strict";function d(a,b,c){return b in a?Object.defineProperty(a,b,{value:c,enumerable:!0,configurable:!0,writable:!0}):a[b]=c,a}c.d(b,{Z:function(){return d}})},6042:function(a,b,c){"use strict";c.d(b,{Z:function(){return e}});var d=c(4924);function e(a){for(var b=1;b<arguments.length;b++){var c=null!=arguments[b]?arguments[b]:{},e=Object.keys(c);"function"==typeof Object.getOwnPropertySymbols&&(e=e.concat(Object.getOwnPropertySymbols(c).filter(function(a){return Object.getOwnPropertyDescriptor(c,a).enumerable}))),e.forEach(function(b){(0,d.Z)(a,b,c[b])})}return a}}},function(a){var b=function(b){return a(a.s=b)};a.O(0,[774,179],function(){return b(1118),b(387)}),_N_E=a.O()}])