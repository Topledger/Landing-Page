"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6372],{6372:function(a,b,c){c.r(b),c.d(b,{default:function(){return p}});var d=c(7294),e=c(9191);c(3935),c(5078),c(7762);var f={weekly:"weeks",daily:"days",monthly:"months"};function g(a){var b={};return e.q.each(a,function(a){var c=(0,e.d)(a.date),d=c.valueOf();b[d]=b[d]||{date:c,total:parseInt(a.total,10)||0,values:{}},b[d].values[a.stage]=parseInt(a.value,10)||null}),e.q.values(b)}(0,e.s)("/* --------------------------------------------------------\n    Colors\n-----------------------------------------------------------*/\n/* --------------------------------------------------------\n    Font\n-----------------------------------------------------------*/\n/* --------------------------------------------------------\n    Borders\n-----------------------------------------------------------*/\n/* --------------------------------------------------------\n    Typography\n-----------------------------------------------------------*/\n/* --------------------------------------------------------\n    Table\n-----------------------------------------------------------*/\n.cohort-visualization-container .cornelius-table {\n  width: 100%;\n}\n.cohort-visualization-container .cornelius-table,\n.cohort-visualization-container .cornelius-table tr,\n.cohort-visualization-container .cornelius-table th,\n.cohort-visualization-container .cornelius-table td {\n  border-color: #f0f0f0;\n}\n.cohort-visualization-container .cornelius-table .cornelius-time,\n.cohort-visualization-container .cornelius-table .cornelius-label,\n.cohort-visualization-container .cornelius-table .cornelius-stage,\n.cohort-visualization-container .cornelius-table .cornelius-people {\n  background-color: rgba(102, 136, 153, 0.03);\n}\n"),(0,e.s)("/* --------------------------------------------------------\n    Colors\n-----------------------------------------------------------*/\n/* --------------------------------------------------------\n    Font\n-----------------------------------------------------------*/\n/* --------------------------------------------------------\n    Borders\n-----------------------------------------------------------*/\n/* --------------------------------------------------------\n    Typography\n-----------------------------------------------------------*/\n/* --------------------------------------------------------\n    Table\n-----------------------------------------------------------*/\n.cornelius-container .cornelius-title {\n  text-align: center;\n  padding-bottom: 10px;\n  font-weight: bold;\n  font-size: 14pt;\n  color: #333;\n  border-collapse: collapse;\n}\n.cornelius-container .cornelius-table {\n  font-size: 9pt;\n  border-spacing: 0;\n  border: 1px solid #e4e4e4;\n  border-collapse: collapse;\n}\n.cornelius-container .cornelius-table th,\n.cornelius-container .cornelius-table td {\n  text-align: center;\n  padding: 10px;\n  border: 1px solid #e4e4e4;\n  color: #333;\n  font-weight: bold;\n}\n.cornelius-container .cornelius-table .cornelius-label {\n  text-align: left;\n}\n.cornelius-container .cornelius-table .cornelius-empty,\n.cornelius-container .cornelius-table .cornelius-percentage,\n.cornelius-container .cornelius-table .cornelius-absolute {\n  font-weight: normal;\n  border: none;\n}\n.cornelius-container .cornelius-table .cornelius-label,\n.cornelius-container .cornelius-table .cornelius-people,\n.cornelius-container .cornelius-table .cornelius-stage {\n  font-weight: bold;\n  color: #333;\n}\n.cornelius-container .cornelius-table .cornelius-percentage.cornelius-white-text,\n.cornelius-container .cornelius-table .cornelius-absolute.cornelius-white-text {\n  text-shadow: 1px 1px 1px #000000;\n}\n");var h={daily:"days",weekly:"weeks",monthly:"months",yearly:"years"},i={daily:"MMMM D, YYYY",weekly:"[Week of] MMM D, YYYY",monthly:"MMMM YYYY",yearly:"YYYY"},j={initialDate:null,timeInterval:"monthly",noValuePlaceholder:"-",rawNumberOnHover:!0,displayAbsoluteValues:!1,initialIntervalNumber:1,maxColumns:1/0,title:null,timeColumnTitle:"Time",peopleColumnTitle:"People",stageColumnTitle:"{{ @ }}",numberFormat:"0,0[.]00",percentFormat:"0.00%",timeLabelFormat:i.monthly,colors:{min:"#ffffff",max:"#041d66",steps:7}};function k(a){return a=(0,e.n)(a),e.n.contrast(a,"#ffffff")<e.n.contrast(a,"#000000")}function l(a,b){return(0,e.i)(a.stageColumnTitle,{"@":a.initialIntervalNumber-1+b})}function m(a){for(var b=a.options,c=a.maxRowLength,e=[],f=1;f<c;f+=1)e.push(d.createElement("th",{key:"col".concat(f),className:"cornelius-stage"},l(b,f)));return d.createElement("tr",null,d.createElement("th",{className:"cornelius-time"},b.timeColumnTitle),d.createElement("th",{className:"cornelius-people"},b.peopleColumnTitle),e)}function n(a){for(var b,c,f,g=a.options,i=a.data,j=a.index,l=a.maxRowLength,m=i[0]||0,n=[],o=1;o<l;o+=1){var p=i[o],q=e.l.isFinite(p/m)?p/m*100:null,r={key:"col".concat(o)};if(e.l.isNil(q))r.className="cornelius-empty",r.children=g.noValuePlaceholder;else{r.className=g.displayAbsoluteValues?"cornelius-absolute":"cornelius-percentage",r.children=g.displayAbsoluteValues?g.formatNumber(p):g.formatPercent(q);var s=g.getColorForValue(q);r.style={backgroundColor:s,color:(0,e.f)(s)},k(r.style.color)&&(r.className+=" cornelius-white-text"),g.rawNumberOnHover&&!g.displayAbsoluteValues&&(r.children=d.createElement(e.r,{title:g.formatNumber(p),mouseEnterDelay:0,mouseLeaveDelay:0},d.createElement("div",null,r.children)))}n.push(d.createElement("td",(0,e.b)({},r)))}return d.createElement("tr",null,d.createElement("td",{className:"cornelius-label"},(b=g,c=j,f=h[b.timeInterval],b.initialDate.clone().add(c,f).format(b.timeLabelFormat))),d.createElement("td",{className:"cornelius-people"},g.formatNumber(m)),n)}function o(a){var b=a.data,c=a.options;c=(0,d.useMemo)(function(){var a;return a=c,a=e.l.extend({},j,a,{initialDate:(0,e.d)(a.initialDate),colors:e.l.extend({},j.colors,a.colors)}),e.l.extend(a,{timeLabelFormat:i[a.timeInterval],formatNumber:(0,e.h)(a.numberFormat),formatPercent:(0,e.h)(a.percentFormat),getColorForValue:e.n.scale([a.colors.min,a.colors.max]).mode("hsl").domain([0,100]).classes(a.colors.steps)})},[c]);var f=(0,d.useMemo)(function(){return e.l.min([e.l.max(e.l.map(b,function(a){return a.length}))||0,c.maxColumns+1])},[b,c.maxColumns]);return 0===b.length?null:d.createElement("div",{className:"cornelius-container"},c.title&&d.createElement("div",{className:"cornelius-title"},c.title),d.createElement("table",{className:"cornelius-table"},d.createElement("thead",null,d.createElement(m,{options:c,maxRowLength:f})),d.createElement("tbody",null,e.l.map(b,function(a,b){return d.createElement(n,{key:"row".concat(b),options:c,data:a,index:b,maxRowLength:f})}))))}function p(a){var b=a.data,c=a.options,h=(0,d.useMemo)(function(){return function(a,b){if(x=a,y=b,z=e.q.map(x.columns,function(a){return a.name}),!(x.rows.length>0&&e.q.includes(z,y.dateColumn)&&e.q.includes(z,y.stageColumn)&&e.q.includes(z,y.totalColumn)&&e.q.includes(z,y.valueColumn)))return{data:[],initialDate:null};a=e.q.map(a.rows,function(a){return{date:a[b.dateColumn],stage:parseInt(a[b.stageColumn],10),total:parseFloat(a[b.totalColumn]),value:parseFloat(a[b.valueColumn])}});var c,d,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B=e.q.sortBy(a,function(a){return a.date+a.stage}),C=(0,e.d)(B[0].date).toDate();return A="simple"===b.mode?(c=B,h=(d=b).timeInterval,i=g(c),j=e.q.map(c,function(a){return a.stage}),k=e.q.min(j),l=e.q.max(j),m=null,n=[],e.q.each(i,function(a){if(null!==m)for(var b=Math.abs(m.diff(a.date,f[h]));b>1;)n.push([0]),b-=1;m=a.date;for(var c=[a.total],d=k;d<=l;d+=1)c.push(a.values[d]);n.push(c)}),n):(o=B,q=(p=b).timeInterval,r=g(o),s=e.q.min(e.q.map(o,function(a){return a.stage})),t=(0,e.d)(e.q.last(r).date).diff(e.q.first(r).date,f[q]),u=s+t,v=null,w=[],e.q.each(r,function(a){if(null!==v)for(var b=Math.abs(v.diff(a.date,f[q]));b>1;){for(var c=[0],d=s;d<=u;d+=1)c.push(a.values[d]||0);w.push(c),u-=1,b-=1}v=a.date;for(var e=[a.total],g=s;g<=u;g+=1)e.push(a.values[g]||0);u-=1,w.push(e)}),w),{data:A,initialDate:C}}(b,c)},[b,c]),i=h.data,j=h.initialDate,k=(0,d.useMemo)(function(){return{initialDate:j,timeInterval:c.timeInterval,noValuePlaceholder:c.noValuePlaceholder,rawNumberOnHover:c.showTooltips,displayAbsoluteValues:!c.percentValues,timeColumnTitle:c.timeColumnTitle,peopleColumnTitle:c.peopleColumnTitle,stageColumnTitle:c.stageColumnTitle,numberFormat:c.numberFormat,percentFormat:c.percentFormat,colors:c.colors}},[c,j]);return 0===i.length?null:d.createElement("div",{className:"cohort-visualization-container"},d.createElement(o,{data:i,options:k}))}o.defaultProps={data:[],options:{}},p.propTypes=e.R}}])