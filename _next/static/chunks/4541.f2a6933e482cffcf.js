(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4541,9826],{76929:function(a,b,c){let d=c(16724).W,e=Math.PI/180,f={archimedean:q,rectangular:function(a){var b=4*a[0]/a[1],c=0,d=0;return function(a){var e=a<0?-1:1;switch(Math.sqrt(1+4*e*a)-e&3){case 0:c+=b;break;case 1:d+=4;break;case 2:c-=b;break;default:d-=4}return[c,d]}}};function g(a){return a.text}function h(){return"serif"}function i(){return"normal"}function j(a){return Math.sqrt(a.value)}function k(){return(~~(6*random())-3)*30}function l(){return 1}function m(a,b,c,d){if(!b.sprite){var f=a.context,g=a.ratio;f.clearRect(0,0,2048/g,2048/g);var h=0,i=0,j=0,k=c.length;for(--d;++d<k;){b=c[d],f.save(),f.font=b.style+" "+b.weight+" "+ ~~((b.size+1)/g)+"px "+b.font;let l=f.measureText(b.text),m=-Math.floor(l.width/2),n=(l.width+1)*g,o=b.size<<1;if(b.rotate){var p=Math.sin(b.rotate*e),q=Math.cos(b.rotate*e),r=n*q,s=n*p,t=o*q,u=o*p;n=Math.max(Math.abs(r+u),Math.abs(r-u))+31>>5<<5,o=~~Math.max(Math.abs(s+t),Math.abs(s-t))}else n=n+31>>5<<5;if(o>j&&(j=o),h+n>=2048&&(h=0,i+=j,j=0),i+o>=2048)break;f.translate((h+(n>>1))/g,(i+(o>>1))/g),b.rotate&&f.rotate(b.rotate*e),f.fillText(b.text,m,0),b.padding&&(f.lineWidth=2*b.padding,f.strokeText(b.text,m,0)),f.restore(),b.width=n,b.height=o,b.xoff=h,b.yoff=i,b.x1=n>>1,b.y1=o>>1,b.x0=-b.x1,b.y0=-b.y1,b.hasText=!0,h+=n}for(var v=f.getImageData(0,0,2048/g,2048/g).data,w=[];--d>=0;)if((b=c[d]).hasText){for(var x=b.width,y=x>>5,z=b.y1-b.y0,A=0;A<z*y;A++)w[A]=0;if(null==(h=b.xoff))return;i=b.yoff;for(var B=0,C=-1,D=0;D<z;D++){for(var A=0;A<x;A++){var E=y*D+(A>>5),F=v[(i+D)*2048+(h+A)<<2]?1<<31-A%32:0;w[E]|=F,B|=F}B?C=D:(b.y0++,z--,D--,i++)}b.y1=b.y0+C,b.sprite=w.slice(0,(b.y1-b.y0)*y)}}}function n(a,b,c){c>>=5;for(var d,e=a.sprite,f=a.width>>5,g=a.x-(f<<4),h=127&g,i=32-h,j=a.y1-a.y0,k=(a.y+a.y0)*c+(g>>5),l=0;l<j;l++){d=0;for(var m=0;m<=f;m++)if((d<<i|(m<f?(d=e[l*f+m])>>>h:0))&b[k+m])return!0;k+=c}return!1}function o(a,b){var c=a[0],d=a[1];b.x+b.x0<c.x&&(c.x=b.x+b.x0),b.y+b.y0<c.y&&(c.y=b.y+b.y0),b.x+b.x1>d.x&&(d.x=b.x+b.x1),b.y+b.y1>d.y&&(d.y=b.y+b.y1)}function p(a,b){return a.x+a.x1>b[0].x&&a.x+a.x0<b[1].x&&a.y+a.y1>b[0].y&&a.y+a.y0<b[1].y}function q(a){var b=a[0]/a[1];return function(a){return[b*(a*=.1)*Math.cos(a),a*Math.sin(a)]}}function r(a){for(var b=[],c=-1;++c<a;)b[c]=0;return b}function s(){return document.createElement("canvas")}function t(a){return"function"==typeof a?a:function(){return a}}a.exports=function(){var a=[256,256],b=g,c=h,e=j,u=i,v=i,w=k,x=l,y=q,z=[],A=1/0,B=d("word","end"),C=null,D=Math.random,E={},F=s;function G(b,c,d){a[0],a[1];for(var e,f,g,h=c.x,i=c.y,j=Math.sqrt(a[0]*a[0]+a[1]*a[1]),k=y(a),l=.5>D()?1:-1,m=-l;(e=k(m+=l))&&(f=~~e[0],g=~~e[1],!(Math.min(Math.abs(f),Math.abs(g))>=j));)if(c.x=h+f,c.y=i+g,!(c.x+c.x0<0)&&!(c.y+c.y0<0)&&!(c.x+c.x1>a[0])&&!(c.y+c.y1>a[1])&&(!d||p(c,d))&&!n(c,b,a[0])){for(var o,q=c.sprite,r=c.width>>5,s=a[0]>>5,t=c.x-(r<<4),u=127&t,v=32-u,w=c.y1-c.y0,x=(c.y+c.y0)*s+(t>>5),z=0;z<w;z++){o=0;for(var A=0;A<=r;A++)b[x+A]|=o<<v|(A<r?(o=q[z*r+A])>>>u:0);x+=s}return!0}return!1}return E.canvas=function(a){return arguments.length?(F=t(a),E):F},E.start=function(){var d=function a(b){let c=b.getContext("2d",{willReadFrequently:!0});b.width=b.height=1;let d=Math.sqrt(c.getImageData(0,0,1,1).data.length>>2);return b.width=2048/d,b.height=2048/d,c.fillStyle=c.strokeStyle="red",{context:c,ratio:d}}(F()),f=r((a[0]>>5)*a[1]),g=null,h=z.length,i=-1,j=[],k=z.map(function(a,d){return a.text=b.call(this,a,d),a.font=c.call(this,a,d),a.style=u.call(this,a,d),a.weight=v.call(this,a,d),a.rotate=w.call(this,a,d),a.size=~~e.call(this,a,d),a.padding=x.call(this,a,d),a}).sort(function(a,b){return b.size-a.size});return C&&clearInterval(C),C=setInterval(l,0),l(),E;function l(){for(var b=Date.now();Date.now()-b<A&& ++i<h&&C;){var c=k[i];c.x=a[0]*(D()+.5)>>1,c.y=a[1]*(D()+.5)>>1,m(d,c,k,i),c.hasText&&G(f,c,g)&&(j.push(c),B.call("word",E,c),g?o(g,c):g=[{x:c.x+c.x0,y:c.y+c.y0},{x:c.x+c.x1,y:c.y+c.y1}],c.x-=a[0]>>1,c.y-=a[1]>>1)}i>=h&&(E.stop(),B.call("end",E,j,g))}},E.stop=function(){for(let a of(C&&(clearInterval(C),C=null),z))delete a.sprite;return E},E.timeInterval=function(a){return arguments.length?(A=null==a?1/0:a,E):A},E.words=function(a){return arguments.length?(z=a,E):z},E.size=function(b){return arguments.length?(a=[+b[0],+b[1]],E):a},E.font=function(a){return arguments.length?(c=t(a),E):c},E.fontStyle=function(a){return arguments.length?(u=t(a),E):u},E.fontWeight=function(a){return arguments.length?(v=t(a),E):v},E.rotate=function(a){return arguments.length?(w=t(a),E):w},E.text=function(a){return arguments.length?(b=t(a),E):b},E.spiral=function(a){return arguments.length?(y=f[a]||a,E):y},E.fontSize=function(a){return arguments.length?(e=t(a),E):e},E.padding=function(a){return arguments.length?(x=t(a),E):x},E.random=function(a){return arguments.length?(D=a,E):D},E.on=function(){var a=B.on.apply(B,arguments);return a===B?E:a},E}},16724:function(a,b,c){"use strict";c.d(b,{W:function(){return i}});var d={value:function(){}};function e(){for(var a,b=0,c=arguments.length,d={};b<c;++b){if(!(a=arguments[b]+"")||a in d||/[\s.]/.test(a))throw Error("illegal type: "+a);d[a]=[]}return new f(d)}function f(a){this._=a}function g(a,b){for(var c,d=0,e=a.length;d<e;++d)if((c=a[d]).name===b)return c.value}function h(a,b,c){for(var e=0,f=a.length;e<f;++e)if(a[e].name===b){a[e]=d,a=a.slice(0,e).concat(a.slice(e+1));break}return null!=c&&a.push({name:b,value:c}),a}f.prototype=e.prototype={constructor:f,on:function(a,b){var c,d,e,f=this._,i=(c=a+"",d=f,c.trim().split(/^|\s+/).map(function(a){var b="",c=a.indexOf(".");if(c>=0&&(b=a.slice(c+1),a=a.slice(0,c)),a&&!d.hasOwnProperty(a))throw Error("unknown type: "+a);return{type:a,name:b}})),j=-1,k=i.length;if(arguments.length<2){for(;++j<k;)if((e=(a=i[j]).type)&&(e=g(f[e],a.name)))return e;return}if(null!=b&&"function"!=typeof b)throw Error("invalid callback: "+b);for(;++j<k;)if(e=(a=i[j]).type)f[e]=h(f[e],a.name,b);else if(null==b)for(e in f)f[e]=h(f[e],a.name,null);return this},copy:function(){var a={},b=this._;for(var c in b)a[c]=b[c].slice();return new f(a)},call:function(a,b){if((c=arguments.length-2)>0)for(var c,d,e=Array(c),f=0;f<c;++f)e[f]=arguments[f+2];if(!this._.hasOwnProperty(a))throw Error("unknown type: "+a);for(d=this._[a],f=0,c=d.length;f<c;++f)d[f].value.apply(b,e)},apply:function(a,b,c){if(!this._.hasOwnProperty(a))throw Error("unknown type: "+a);for(var d=this._[a],e=0,f=d.length;e<f;++e)d[e].value.apply(b,c)}};var i=e},74541:function(a,b,c){"use strict";c.r(b),c.d(b,{default:function(){return l}});var d=c(66171),e=c(15078),f=c(76929),g=c.n(f),h=c(67294),i=c(59826);function j(a,b){a.style.transform=null;var c=a.getBoundingClientRect(),d=c.width,e=c.height,f=b.getBoundingClientRect(),g=f.width/d,h=f.height/e;a.style.transform="scale(".concat(Math.min(g,h),")")}function k(){var a=window.getComputedStyle(document.body).fontFamily;return g()().size([5e3,5e3]).padding(3).font(a).rotate(function(a){return a.angle}).fontSize(function(a){return a.size}).random(function(){return .5})}function l(a){var b=a.data,c=a.options,f=(0,h.useState)(null),g=(0,d._)(f,2),l=g[0],m=g[1],n=(0,h.useState)([]),o=(0,d._)(n,2),p=o[0],q=o[1],r=(0,h.useMemo)(k,[]);return(0,h.useEffect)(function(){var a,f,g,h,i,j,k,l,m,n,o,p,s,t,u,v,w;return r.words((a=b.rows,g=[],(f=c).column&&(g=f.frequenciesColumn?(h=a,i=f.column,j=f.frequenciesColumn,k={},d.l.each(h,function(a){var b=parseFloat(a[j]);Number.isFinite(b)&&b>0&&(k[d.l.toString(a[i])]=b)}),k):(l=a,m=f.column,n={},d.l.each(l,function(a){var b=d.l.toString(a[m]).split(/\s/g);d.l.each(b,function(a){n[a]=(n[a]||0)+1})}),n),g=d.l.sortBy(d.l.map(g,function(a,b){return{text:b,count:a}}),[function(a){return-a.count},function(a){return-a.text.length}])),u=d.l.map(g,function(a){return a.count}),v=e.scale.linear().domain([d.l.min(u),d.l.max(u)]).range([10,100]),w=e.scale.category20(),d.l.each(g,function(a,b){a.size=v(a.count),a.color=w(b),a.angle=b%2*90}),o=g,s=(p={wordLength:f.wordLengthLimit,wordCount:f.wordCountLimit}).wordLength,t=p.wordCount,s.min=Number.isFinite(s.min)?s.min:null,s.max=Number.isFinite(s.max)?s.max:null,t.min=Number.isFinite(t.min)?t.min:null,t.max=Number.isFinite(t.max)?t.max:null,d.l.filter(o,function(a){var b=a.text,c=a.count,d=(!s.min||b.length>=s.min)&&(!s.max||b.length<=s.max),e=(!t.min||c>=t.min)&&(!t.max||c<=t.max);return d&&e}))).on("end",function(a){return q(a)}).start(),function(){return r.on("end",null).stop()}},[r,b,c,q]),(0,h.useEffect)(function(){l&&function(a,b){(a=e.select(a)).selectAll("*").remove();var c=a.append("svg"),d=c.append("g");d.selectAll("text").data(b).enter().append("text").style("font-size",function(a){return"".concat(a.size,"px")}).style("font-family",function(a){return a.font}).style("fill",function(a){return a.color}).attr("text-anchor","middle").attr("transform",function(a){return"translate(".concat([a.x,a.y],") rotate(").concat(a.rotate,")")}).text(function(a){return a.text});var f=c.node().getBoundingClientRect(),g=d.node().getBoundingClientRect();c.attr("width",Math.ceil(g.width)).attr("height",Math.ceil(g.height)),d.attr("transform","translate(".concat(f.left-g.left,",").concat(f.top-g.top,")")),j(c.node(),a.node())}(l,p)},[l,p]),(0,h.useEffect)(function(){if(l)return(0,i.o)(l,function(){var a=l.querySelector("svg");a&&j(a,l)})},[l]),h.createElement("div",{className:"word-cloud-visualization-container",ref:m})}c(73935),c(97762),(0,d.s)(".word-cloud-visualization-container {\n  overflow: hidden;\n  height: 400px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.word-cloud-visualization-container svg {\n  transform-origin: center center;\n  flex: 0 0 auto;\n}\n"),l.propTypes=d.R},59826:function(a,b,c){"use strict";c.d(b,{o:function(){return f}});var d=new Map;function e(){d.size>0&&(d.forEach(function(a,b){var c=b.getBoundingClientRect(),d=Math.round(10*c.width),e=Math.round(10*c.height);a.width===d&&a.height===e||(a.width=d,a.height=e,a.callback(b))}),setTimeout(e,100))}function f(a,b){if(a&&!d.has(a)){var c=0===d.size;return d.set(a,{callback:b}),c&&e(),function(){return d.delete(a)}}return function(){}}}}])