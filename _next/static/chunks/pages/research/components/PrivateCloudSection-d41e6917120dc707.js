(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5709],{41970:function(a,b,c){"use strict";var d=c(59499),e=c(4730),f=c(94184),g=c.n(f),h=c(99570),i=c.n(h),j=c(85893),k=["className"];function l(a,b){var c=Object.keys(a);if(Object.getOwnPropertySymbols){var d=Object.getOwnPropertySymbols(a);b&&(d=d.filter(function(b){return Object.getOwnPropertyDescriptor(a,b).enumerable})),c.push.apply(c,d)}return c}function m(a){for(var b=1;b<arguments.length;b++){var c=null!=arguments[b]?arguments[b]:{};b%2?l(Object(c),!0).forEach(function(b){(0,d.Z)(a,b,c[b])}):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(c)):l(Object(c)).forEach(function(b){Object.defineProperty(a,b,Object.getOwnPropertyDescriptor(c,b))})}return a}var n=function(a){var b=a.className,c=(0,e.Z)(a,k);return(0,j.jsx)("span",m(m({},c),{},{className:g()(b,i().underlinedText)}))};b.Z=n},94641:function(a,b,c){"use strict";c.d(b,{XX:function(){return f},zv:function(){return h}});var d=c(11163),e=c(67294);function f(){var a,b,c,f,g,h,i=(c=(0,d.useRouter)(),g=(f=(0,e.useState)(new URLSearchParams(null===(a=window)|| void 0===a?void 0:null===(b=a.location)|| void 0===b?void 0:b.search)))[0],h=f[1],console.log("router.asPath",c.asPath),(0,e.useEffect)(function(){var a=function(a){h(new URLSearchParams(a.split("?")[1]))};return c.events.on("routeChangeComplete",a),function(){c.events.off("routeChangeComplete",a)}},[]),g);return(0,e.useMemo)(function(){return Object.fromEntries(i.entries())},[i])}var g=/^[a-z0-9\s\-]$/,h=function(a){return null==a?void 0:a.toLowerCase().replace(/./g,function(a){return g.test(a)?a:""}).replace(/\s+/g,"-")}},65485:function(a,b,c){"use strict";c.r(b);var d=c(25675),e=c.n(d),f=c(94184),g=c.n(f),h=c(75143),i=c(22065),j=c(41970),k=c(97248);c(54938);var l=c(17543),m=c.n(l),n=c(94641),o=c(85893),p=function(a){var b,c,d,e=a.section,f=void 0===e?[]:e,h=null!==(b=f.cta)&& void 0!==b?b:{};return(0,o.jsxs)("div",{className:m().cloudSection,children:[(0,o.jsx)("h3",{className:g()(m().cloudSectionTitle,f.customClass),children:f.title}),(0,o.jsx)("h3",{className:g()(m().cloudSectionTitleMobile,m().cloudSectionTitle,f.customClass),children:null!==(c=f.titleMobile)&& void 0!==c?c:f.title}),(0,o.jsxs)("div",{className:m().cloudSectionFeatures,style:{gridTemplateColumns:"repeat(".concat(f.columns,", 1fr)")},children:[null===(d=f.features)|| void 0===d?void 0:d.map(function(a,b){return(0,o.jsxs)("div",{className:m().cloudSectionFeature,children:[(0,o.jsx)("h4",{className:m().cloudSectionFeatureTitle,children:a.title}),(0,o.jsx)("p",{className:m().cloudSectionFeatureDescription,children:a.description})]},b)}),f.cta&&(0,o.jsx)("div",{className:m().cloudSectionCTA,children:(0,o.jsxs)(i.Z.Link,{tertiary:!0,color:"#374151",href:h.href,target:"_blank",noArrow:!0,children:[h.text," ",h.icon&&(0,o.jsx)(k.Z,{name:h.icon})]})})]})]})},q=function(a){var b=a.image,c=a.sections,d=void 0===c?[]:c;return(0,o.jsx)("div",{className:m().cloudSectionContainer,children:null==d?void 0:d.map(function(a,c){return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(p,{section:a}),c!==d.length-1&&(0,o.jsx)("div",{className:m().cloudSectionDivider,children:b})]})})})},r=function(a){var b=a.sections;return(0,o.jsxs)(h.Z,{className:m().privateCloudSection,containerClassName:m().privateCloudSectionContainer,id:(0,n.zv)("Fast, reliable and decoded Solana data in your private cloud"),children:[(0,o.jsxs)("div",{className:m().sectionHead,children:[(0,o.jsx)("div",{children:(0,o.jsxs)("h2",{className:m().sectionTitle,children:[(0,o.jsx)(j.Z,{children:"Fast, reliable and decoded"})," Solana data in your private cloud"]})}),(0,o.jsx)("p",{className:m().sectionDescription,children:"Seamless integration of decoded data into your existing systems, empowering you to enhance your market research and advanced analytics"}),(0,o.jsx)("div",{className:m().chartIcons,children:["#F1F5FF","#F8F0FF","#EDFAF2","#FCF4EF","#F2EFFF"].map(function(a,b){return(0,o.jsx)("span",{className:m().chartIcon,style:{backgroundColor:a},children:(0,o.jsx)(e(),{src:"/assets/images/landing/pc-icon-".concat(b+1,".svg"),width:100,height:100,alt:"culture-icon-".concat(b+1)})},a)})})]}),(0,o.jsxs)("div",{className:m().sectionBody,children:[(0,o.jsx)("div",{className:m().cultureContainer,children:(0,o.jsx)(q,{sections:void 0===b?[]:b,image:(0,o.jsx)(e(),{src:"/assets/images/research/private-cloud.svg",width:328,height:511,alt:"Private Cloud"})})}),(0,o.jsxs)("div",{className:m().sectionAction,children:[(0,o.jsx)("span",{className:m().scheduleMessage,children:"We collaborate closely with you to gain a thorough understanding of your specific needs and offer comprehensive enterprise support throughout the entire process"}),(0,o.jsx)(i.Z.Link,{primary:!0,color:"#085ED4",href:"https://calendly.com/nitin_topledger/30min",target:"_blank",noArrow:!0,children:"Schedule a call"})]})]})]})};b.default=r},38058:function(a,b,c){(window.__NEXT_P=window.__NEXT_P||[]).push(["/research/components/PrivateCloudSection",function(){return c(65485)}])},99570:function(a){a.exports={underlinedText:"UnderlinedText_underlinedText__Jnxbn"}},17543:function(a){a.exports={privateCloudSection:"PrivateCloudSection_privateCloudSection__YYotR",sectionHead:"PrivateCloudSection_sectionHead__YGY_m",sectionTitle:"PrivateCloudSection_sectionTitle__po_kZ",sectionDescription:"PrivateCloudSection_sectionDescription__jBUA2",chartIcons:"PrivateCloudSection_chartIcons__3dOrC",chartIcon:"PrivateCloudSection_chartIcon__7RdvD",cultureContainer:"PrivateCloudSection_cultureContainer__p5yQr",culture:"PrivateCloudSection_culture__tnO__",cultureContent:"PrivateCloudSection_cultureContent__o3bHr",cultureTitle:"PrivateCloudSection_cultureTitle__ZGXvT",cultureDescription:"PrivateCloudSection_cultureDescription__YLSu_",cultureAction:"PrivateCloudSection_cultureAction__wT8TH",ideaSection:"PrivateCloudSection_ideaSection__9j1on",sectionBody:"PrivateCloudSection_sectionBody__l_mnE",cloudSectionContainer:"PrivateCloudSection_cloudSectionContainer__vIhpJ",cloudSection:"PrivateCloudSection_cloudSection__vnFOW",cloudSectionTitle:"PrivateCloudSection_cloudSectionTitle__SOLhA",cloudSectionTitleMobile:"PrivateCloudSection_cloudSectionTitleMobile__ANoP9",cloudSectionFeatures:"PrivateCloudSection_cloudSectionFeatures__b3AgE",cloudSectionFeature:"PrivateCloudSection_cloudSectionFeature__E_tIu",cloudSectionFeatureTitle:"PrivateCloudSection_cloudSectionFeatureTitle__lPR11",cloudSectionFeatureDescription:"PrivateCloudSection_cloudSectionFeatureDescription__LB2RI",cloudSectionDivider:"PrivateCloudSection_cloudSectionDivider__r0_fz",sectionAction:"PrivateCloudSection_sectionAction__LzBe0",scheduleMessage:"PrivateCloudSection_scheduleMessage__XDCDY",cloudSectionCTA:"PrivateCloudSection_cloudSectionCTA__WRO3v"}}},function(a){a.O(0,[5675,646,2065,923,9774,2888,179],function(){var b;return a(a.s=38058)}),_N_E=a.O()}])