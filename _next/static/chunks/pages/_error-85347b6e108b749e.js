(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4820],{9651:function(a,b,c){"use strict";var d=c(3227),e=c(8361),f=c(5971),g=c(2715),h=c(1193);Object.defineProperty(b,"__esModule",{value:!0}),b.default=void 0;var i=c(2648).Z,j=i(c(7294)),k=i(c(2717)),l={400:"Bad Request",404:"This page could not be found",405:"Method Not Allowed",500:"Internal Server Error"};function m(a){var b=a.res,c=a.err;return{statusCode:b&&b.statusCode?b.statusCode:c?c.statusCode:404}}var n=function(a){f(m,a);var b,c,i=(b=m,c=function a(){if("undefined"==typeof Reflect||!Reflect.construct||Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(b){return!1}}(),function(){var a,d=h(b);if(c){var e=h(this).constructor;a=Reflect.construct(d,arguments,e)}else a=d.apply(this,arguments);return g(this,a)});function m(){return d(this,m),i.apply(this,arguments)}return e(m,[{key:"render",value:function(){var a=this.props,b=a.statusCode,c=a.withDarkMode,d=this.props.title||l[b]||"An unexpected error has occurred";return j.default.createElement("div",{style:o.error},j.default.createElement(k.default,null,j.default.createElement("title",null,b?"".concat(b,": ").concat(d):"Application error: a client-side exception has occurred")),j.default.createElement("div",null,j.default.createElement("style",{dangerouslySetInnerHTML:{__html:"\n                body { margin: 0; color: #000; background: #fff; }\n                .next-error-h1 {\n                  border-right: 1px solid rgba(0, 0, 0, .3);\n                }\n                \n                ".concat(void 0===c||c?"@media (prefers-color-scheme: dark) {\n                  body { color: #fff; background: #000; }\n                  .next-error-h1 {\n                    border-right: 1px solid rgba(255, 255, 255, .3);\n                  }\n                }":"")}}),b?j.default.createElement("h1",{className:"next-error-h1",style:o.h1},b):null,j.default.createElement("div",{style:o.desc},j.default.createElement("h2",{style:o.h2},this.props.title||b?d:j.default.createElement(j.default.Fragment,null,"Application error: a client-side exception has occurred (see the browser console for more information)"),"."))))}}]),m}(j.default.Component);n.displayName="ErrorPage",n.getInitialProps=m,n.origGetInitialProps=m;var o={error:{fontFamily:'-apple-system, BlinkMacSystemFont, Roboto, "Segoe UI", "Fira Sans", Avenir, "Helvetica Neue", "Lucida Grande", sans-serif',height:"100vh",textAlign:"center",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"},desc:{display:"inline-block",textAlign:"left",lineHeight:"49px",height:"49px",verticalAlign:"middle"},h1:{display:"inline-block",margin:0,marginRight:"20px",padding:"0 23px 0 0",fontSize:"24px",fontWeight:500,verticalAlign:"top",lineHeight:"49px"},h2:{fontSize:"14px",fontWeight:"normal",lineHeight:"49px",margin:0,padding:0}};b.default=n},1981:function(a,b,c){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_error",function(){return c(9651)}])}},function(a){a.O(0,[9774,2888,179],function(){var b;return a(a.s=1981)}),_N_E=a.O()}])