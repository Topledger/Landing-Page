(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1869],{82635:function(a,b,c){"use strict";var d=c(59499),e=c(67294),f=c(69184),g=c(2067),h=c.n(g),i=c(85893);function j(a,b){var c=Object.keys(a);if(Object.getOwnPropertySymbols){var d=Object.getOwnPropertySymbols(a);b&&(d=d.filter(function(b){return Object.getOwnPropertyDescriptor(a,b).enumerable})),c.push.apply(c,d)}return c}function k(a){for(var b=1;b<arguments.length;b++){var c=null!=arguments[b]?arguments[b]:{};b%2?j(Object(c),!0).forEach(function(b){(0,d.Z)(a,b,c[b])}):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(c)):j(Object(c)).forEach(function(b){Object.defineProperty(a,b,Object.getOwnPropertyDescriptor(c,b))})}return a}var l=(0,i.jsx)(f.Z,{className:h().listItemIcon,name:"diamond-bullet",color:"#8692AD",height:16,width:16}),m=(0,i.jsx)("span",{style:{display:"inline-block"},children:"•"}),n=function(a){var b=a.type;return(0,i.jsxs)("span",{style:{display:"inline-block",marginRight:"8px"},children:["dot"===b&&m,"number"==typeof b&&"".concat(b,". "),!b&&l]})},o=function a(b){var c=b.items,d=b.gap;return(0,i.jsx)("ul",{className:h().list,style:{gap:d},children:(void 0===c?[]:c).map(function(b,c){var d,f,g,h,j;return(0,i.jsxs)("li",{style:{flexDirection:"column"},children:[(0,i.jsxs)("span",{style:{display:"flex"},children:[(0,i.jsx)(n,{type:null==b?void 0:b.marker}),(0,i.jsxs)("span",{style:{display:"inline-block"},children:[b.title&&(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("b",{children:b.title}),":"," "]}),null!==(f=null!==(g=null==b?void 0:b.text)&& void 0!==g?g:null==b?void 0:b.definition)&& void 0!==f?f:(0,e.isValidElement)(b)?b:""]})]}),b.list&&(0,i.jsx)("div",{style:{paddingLeft:"32px"},children:(0,i.jsx)(a,k(k({},b.list),{},{items:null!==(h=null===(j=b.list)|| void 0===j?void 0:j.items)&& void 0!==h?h:[]}))})]},null!==(d=b.key)&& void 0!==d?d:c)})})};b.Z=o},64322:function(a,b,c){"use strict";var d=c(75143),e=c(22065),f=c(18493),g=c.n(f),h=c(54938),i=c(94641),j=c(85893),k=function(){return(0,j.jsx)(d.Z,{className:g().trialSection,containerClassName:g().trialSectionContainer,containerStyle:{},background:"/assets/images/landing/bars-background-1.svg",id:(0,i.zv)("Don't just take our word for it"),children:(0,j.jsx)("div",{className:g().trialContainer,children:(0,j.jsxs)("div",{className:g().trialContent,children:[(0,j.jsx)("h2",{className:g().trialTitle,children:"Don't just take our word for it"}),(0,j.jsx)("p",{className:g().trialDescription,children:"Experience it now"}),(0,j.jsx)("div",{className:g().trialButtonContainer,children:(0,j.jsx)(e.Z,{className:g().trialButton,primary:!0,color:"#085ED4",onClick:function(){return h.Z.show()},children:"Start a free trial"})})]})})})};b.Z=k},76358:function(a,b,c){"use strict";c.r(b);var d=c(35634),e=c.n(d),f=c(85893),g=function(){return(0,f.jsx)("div",{className:e().divider})};b.default=g},29245:function(a,b,c){"use strict";c.r(b);var d=c(59499),e=c(4730),f=c(82635),g=c(75143),h=c(81185),i=c.n(h),j=c(76358),k=c(85893),l=["list"],m=["type","title","margin"];function n(a,b){var c=Object.keys(a);if(Object.getOwnPropertySymbols){var d=Object.getOwnPropertySymbols(a);b&&(d=d.filter(function(b){return Object.getOwnPropertyDescriptor(a,b).enumerable})),c.push.apply(c,d)}return c}function o(a){for(var b=1;b<arguments.length;b++){var c=null!=arguments[b]?arguments[b]:{};b%2?n(Object(c),!0).forEach(function(b){(0,d.Z)(a,b,c[b])}):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(c)):n(Object(c)).forEach(function(b){Object.defineProperty(a,b,Object.getOwnPropertyDescriptor(c,b))})}return a}var p={bold:function(a){return a.replace(/\*\*([a-zA-Z0-9 _\-?/@:.\(\)]+)\*\*/g,"<b>$1</b>")},link:function(a){return a.replace(/\[([a-zA-Z0-9 _\-?/@:.]+)\]\(([a-zA-Z0-9 _\-?/@:.]+)\)/g,'<a href="$2" target="_blank">$1</a>')}},q=function(a){var b=a.text,c=p.link(p.bold(b));return console.log("MarkdownSection",b,c),(0,k.jsx)("div",{className:i().markdownText,dangerouslySetInnerHTML:{__html:c}})},r=function(a){var b=a.text,c=Array.isArray(b)?b:[b];return(0,k.jsx)(k.Fragment,{children:c.map(function(a){return(0,k.jsx)("p",{className:i().privacySectionText,children:a},a)})})},s=function(a){var b=a.list,c=(0,e.Z)(a,l);return(0,k.jsx)(f.Z,o({items:b.items},c))},t=function(a){var b=a.type,c=a.title,d=a.margin,f=(0,e.Z)(a,m);return(0,k.jsxs)("div",{className:i().content,style:o({},d&&{marginTop:d}),children:[(0,k.jsx)("h2",{className:i().privacyContentTitle,children:c}),function(){switch(b){case"text":return(0,k.jsx)(r,o({},f));case"list":return(0,k.jsxs)(k.Fragment,{children:[f.text&&(0,k.jsx)(r,o({},f)),(0,k.jsx)(s,o({},f))]});case"markdown":return(0,k.jsx)(q,o({},f));default:return null}}()]})},u=function(a){var b=a.title,c=a.description,d=a.sections;return(0,k.jsxs)(g.Z,{className:i().privacySection,children:[(0,k.jsx)("h1",{className:i().privacySectionTitle,children:b}),(0,k.jsx)("p",{className:i().privacySectionDescription,children:c}),(0,k.jsx)(j.default,{}),d.map(function(a,b){return(0,k.jsxs)(k.Fragment,{children:[(0,k.jsx)(t,o({},a),b),b<d.length-1&&!a.noDivider&&(0,k.jsx)(j.default,{})]})})]})};u.defaultProps={sections:[]},b.default=u},55063:function(a,b,c){"use strict";c.r(b);var d=c(9008),e=c.n(d),f=c(22276),g=c(10775),h=c(64322),i=c(29245),j=c(85893),k="Terms and Conditions",l='These Terms and Conditions ("Terms") govern your access to and use of the TopLedger.xyz website and services (collectively, the "Services"). By accessing or using our Services, you agree to be bound by these Terms. If you do not agree with any part of these Terms, you must not use our Services.',m=[{type:"text",title:"Introduction",text:"Top Ledger is a comprehensive blockchain analytics platform focused on providing insights and data analytics for the Solana blockchain. We aim to deliver reliable data solutions for web3 data teams, institutions, and market intelligence platforms."},{type:"text",title:"User Accounts",text:"Services, you may be required to create an account. You agree to provide accurate, current, and complete information during the registration process and to update such information to keep it accurate, current, and complete. You are responsible for maintaining the confidentiality of your account credentials."},{type:"list",gap:"1rem",title:"Acceptable Use",text:"You agree to use our Services only for lawful purposes. You must not:",list:{items:[{type:"text",definition:"Use the Services in any way that violates any applicable federal, state, local, or international law or regulation."},{type:"text",definition:"Engage in any conduct that restricts or inhibits anyone's use or enjoyment of the Services."},{type:"text",definition:"Transmit any advertising or promotional material without our prior written consent."}]}},{type:"list",gap:"1rem",title:"Access and Delivery of Services",text:"We strive to ensure that access to our online blockchain analytics tool and analytics services is provided promptly upon purchase. Delivery timelines for access credentials or service initiation may vary based on your location, payment confirmation, and the specifics of the service package selected.",list:{items:[{type:"definition",title:"Service activation",definition:"Access to our analytics tool is typically granted immediately upon successful payment confirmation. For customized analytics services, timelines will be communicated during the onboarding process."},{type:"definition",title:"Service delivery",definition:"Estimated timelines for service initiation will be provided at the time of purchase but are not guaranteed. Delays may occur due to unforeseen technical or operational circumstances, and we will make every effort to keep you informed."}]}},{type:"markdown",title:"Cancellations, Refunds, and Returns",text:"**(a) Early Termination**",noDivider:!0},{margin:"16px",type:"list",gap:"1rem",list:{items:[{type:"definition",title:"Mutual termination",definition:"Either party may terminate this Agreement before the end of the Service Period for any reason, provided 15 days' written notice is given to the other party. This termination is separate from the specific rights outlined below."},{type:"definition",title:"Breach of agreement",definition:"If a significant breach of this Agreement occurs, the non-breaching party may terminate the Agreement if the breach is not remedied within 30 days after written notice."},{type:"definition",title:"Top Ledger's right to terminate",definition:"Top Ledger reserves the right to terminate the Agreement immediately with written notice to the Customer in the following situations:",list:{gap:"1rem",items:[{type:"text",text:"If the Customer breaches provisions of the Agreement (e.g., unauthorized use of the analytics tool, data misuse, or service violations) and fails to remedy the breach after being given a reasonable opportunity to do so.",marker:"dot"},{type:"text",text:"If necessary for Top Ledger to comply with relevant laws or regulations.",marker:"dot"},{type:"text",text:"If the Customer defaults on payment obligations under the agreed payment plan for the subscription or service.",marker:"dot"},{type:"text",text:"If the Customer has purchased the subscription or services through a reseller who is no longer an authorized reseller of Top Ledger.",marker:"dot"}]}},{type:"definition",title:"Customer's right to terminate",definition:"The Customer reserves the right to terminate this Agreement immediately with written notice to Top Ledger if termination is necessary for the Customer to comply with relevant laws or regulations."}]},noDivider:!0},{margin:"16px",type:"markdown",text:"**(b) Refunds**",noDivider:!0},{margin:"16px",type:"markdown",text:"**1. Subscriptions (Product)**",noDivider:!0},{margin:"16px",type:"list",gap:"1rem",list:{items:[{type:"definition",title:"Before access",text:"If the subscription is terminated before access to the tool begins, a full refund will be issued."},{type:"definition",title:"Performance issues",text:"If the Customer experiences material deficiencies in the analytics tool, they may request a refund within 15 days of subscription activation. Top Ledger will investigate the issue and, if substantiated, provide a refund or service credit."},{type:"definition",title:"No refund for used periods",text:"Refunds are not provided for any used portion of the subscription."}]},noDivider:!0},{margin:"16px",type:"markdown",text:"**2. Analytics services**",noDivider:!0},{margin:"16px",type:"list",gap:"1rem",list:{items:[{type:"text",title:"Before service commencement",text:"If the Agreement is terminated before the service begins, a full refund will be issued."},{type:"text",title:"Service deficiencies",text:"If material deficiencies are identified during the service delivery, the Customer may request a refund within 15 days of service delivery. Top Ledger will assess the issue and, if appropriate, issue a refund or credit."},{type:"text",title:"Completed services",text:"Refunds will not be issued for services that have been fully rendered."}]},noDivider:!0},{margin:"16px",type:"markdown",text:"**3. Payment defaults**: If the Customer defaults on payment, no refund will be issued for the subscription or services already delivered.",noDivider:!0},{margin:"16px",type:"markdown",text:"**(c) Adjustments and Service Credits**",noDivider:!0},{margin:"16px",type:"markdown",text:"If the Customer is unsatisfied with the analytics tool or services due to performance issues, Top Ledger may offer adjustments or service credits at its discretion. Customers must report issues promptly by contacting [connect@topledger.xyz](connect@topledger.xyz) with detailed information.",noDivider:!0},{margin:"16px",type:"markdown",text:"**(d) Service termination by Top Ledger**",noDivider:!0},{margin:"16px",text:"In cases where Top Ledger exercises its right to terminate the Agreement:",type:"list",gap:"1rem",list:{items:[{type:"definition",definition:"For subscriptions, a prorated refund for the unused portion of the subscription period may be provided, except in cases of payment default or breaches caused by the Customer."},{type:"definition",definition:"For analytics services, a refund or credit for undelivered portions of the service may be issued, subject to Top Ledger's discretion."}]}},{type:"text",title:"Intellectual Property",text:"All content on TopLedger.xyz, including but not limited to text, graphics, logos, and software, is the property of Top Ledger or its licensors and is protected by copyright and other intellectual property laws. You may not reproduce, distribute, modify, or create derivative works from any content without our express written permission."},{type:"text",title:"Limitation of Liability",text:"To the fullest extent permitted by law, Top Ledger shall not be liable for any indirect, incidental, special, consequential damages, or loss of profits arising out of or in connection with your use of the Services. Our total liability shall not exceed the amount paid by you for the Services in the last twelve months."},{type:"text",title:"Dispute Resolution",text:"Any disputes arising out of or related to these Terms shall be resolved through binding arbitration in accordance with the rules of Singapore International Arbitration Center (SIAC). The arbitration shall take place in Singapore, and you waive any right to a jury trial."},{type:"text",title:"Governing Law",text:"These Terms shall be governed by and construed in accordance with the laws of Singapore, without regard to its conflict of law principles."},{type:"text",title:"Changes to Terms",text:"We reserve the right to modify these Terms at any time. We will notify you of any changes by posting the new Terms on our website. Your continued use of the Services after such changes constitutes your acceptance of the new Terms."},{type:"text",title:"Termination",text:"We may terminate or suspend your access to our Services immediately, without prior notice or liability, if you breach these Terms."},{type:"text",text:"By using our Services, you acknowledge that you have read these Terms and agree to be bound by them."},{type:"markdown",text:"**Questions or Concerns?** For any inquiries, please email [connect@topledger.xyz](mailto:connect@topledger.xyz)."}],n=function(){return(0,j.jsxs)(g.Z,{children:[(0,j.jsxs)(e(),{children:[(0,j.jsxs)("title",{children:["Top Ledger - ",k]}),(0,j.jsx)("meta",{name:"description",content:l}),(0,j.jsx)("meta",{name:"keywords",content:"Top Ledger privacy policy, data privacy, personal data handling, service data, SaaS privacy, data retention policy, data security, global data compliance, privacy rights, blockchain privacy, data sharing policy, GDPR compliance, data protection, cookie policies"}),(0,j.jsx)("meta",{name:"author",content:"Top Ledger Team"}),(0,j.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),(0,j.jsx)("meta",{property:"og:title",content:"Top Ledger - ".concat(k)}),(0,j.jsx)("meta",{property:"og:description",content:"Understand how Top Ledger collects, uses, and protects your data. Learn about our commitment to data privacy, security, and compliance with international standards."}),(0,j.jsx)("meta",{property:"og:image",content:"/assets/images/privacy-policy/og-image.jpg"}),(0,j.jsx)("meta",{property:"og:url",content:"https://www.topledger.xyz/privacy-policy"}),(0,j.jsx)("meta",{property:"og:type",content:"website"}),(0,j.jsx)("meta",{name:"twitter:card",content:"summary_large_image"}),(0,j.jsx)("meta",{name:"twitter:title",content:"Top Ledger - Privacy Policy"}),(0,j.jsx)("meta",{name:"twitter:description",content:"Explore how Top Ledger manages your data securely and transparently. Learn about our data collection, retention, and sharing practices."}),(0,j.jsx)("meta",{name:"twitter:image",content:"/assets/images/privacy-policy/twitter-card-image.jpg"}),(0,j.jsx)("meta",{name:"twitter:site",content:"@TopLedger"}),(0,j.jsx)("meta",{name:"robots",content:"index, follow"}),(0,j.jsx)("meta",{name:"rating",content:"General"}),(0,j.jsx)("meta",{name:"distribution",content:"global"}),(0,j.jsx)("meta",{name:"application-name",content:"Top Ledger"}),(0,j.jsx)("meta",{name:"theme-color",content:"#FFFFFF"}),(0,j.jsx)("link",{rel:"canonical",href:"https://www.topledger.xyz/privacy-policy"})]}),(0,j.jsx)(f.Z,{}),(0,j.jsx)(i.default,{title:k,description:l,sections:m}),(0,j.jsx)(h.Z,{})]})};b.default=n},45237:function(a,b,c){(window.__NEXT_P=window.__NEXT_P||[]).push(["/tnc",function(){return c(55063)}])},2067:function(a){a.exports={list:"List_list__v8C9C",listItemIcon:"List_listItemIcon__5_7t5"}},18493:function(a){a.exports={trialSection:"TrialSection_trialSection__3jacO",trialSectionContainer:"TrialSection_trialSectionContainer__svTfT",trialContainer:"TrialSection_trialContainer__fz0_H",trialContent:"TrialSection_trialContent__EHxLM",trialTitle:"TrialSection_trialTitle__LMOpw",trialDescription:"TrialSection_trialDescription__nBi23",trialButtonContainer:"TrialSection_trialButtonContainer__ca70M",trialButton:"TrialSection_trialButton__c0Oqb"}},35634:function(a){a.exports={divider:"Divider_divider__JqFSr"}},81185:function(a){a.exports={privacySection:"PrivacySection_privacySection__I9aXF",privacySectionDescription:"PrivacySection_privacySectionDescription__JIUn0",privacySectionTitle:"PrivacySection_privacySectionTitle__86M_0",privacyContentTitle:"PrivacySection_privacyContentTitle__pIF0m",privacySectionText:"PrivacySection_privacySectionText__p7L_U",listItem:"PrivacySection_listItem__lpUdm",markdownText:"PrivacySection_markdownText__p0RKZ"}}},function(a){a.O(0,[5675,646,4067,2065,923,775,9774,2888,179],function(){var b;return a(a.s=45237)}),_N_E=a.O()}])