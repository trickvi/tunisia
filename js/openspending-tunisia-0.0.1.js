// ┌─────────────────────────────────────────────────────────────────────┐ \\
// │ Raphaël 2.0.1 - JavaScript Vector Library                           │ \\
// ├─────────────────────────────────────────────────────────────────────┤ \\
// │ Copyright (c) 2008-2011 Dmitry Baranovskiy (http://raphaeljs.com)   │ \\
// │ Copyright (c) 2008-2011 Sencha Labs (http://sencha.com)             │ \\
// │ Licensed under the MIT (http://raphaeljs.com/license.html) license. │ \\
// └─────────────────────────────────────────────────────────────────────┘ \\
(function(a){var b="0.4.0",c="hasOwnProperty",d=/[\.\/]/,e="*",f=function(){},g=function(a,b){return a-b},h,i,j={n:{}},k=function(a,b){var c=j,d=i,e=Array.prototype.slice.call(arguments,2),f=k.listeners(a),l=0,m=!1,n,o=[],p={},q=[],r=[];h=a,i=0;for(var s=0,t=f.length;s<t;s++)"zIndex"in f[s]&&(o.push(f[s].zIndex),f[s].zIndex<0&&(p[f[s].zIndex]=f[s]));o.sort(g);while(o[l]<0){n=p[o[l++]],q.push(n.apply(b,e));if(i){i=d;return q}}for(s=0;s<t;s++){n=f[s];if("zIndex"in n)if(n.zIndex==o[l]){q.push(n.apply(b,e));if(i){i=d;return q}do{l++,n=p[o[l]],n&&q.push(n.apply(b,e));if(i){i=d;return q}}while(n)}else p[n.zIndex]=n;else{q.push(n.apply(b,e));if(i){i=d;return q}}}i=d;return q.length?q:null};k.listeners=function(a){var b=a.split(d),c=j,f,g,h,i,k,l,m,n,o=[c],p=[];for(i=0,k=b.length;i<k;i++){n=[];for(l=0,m=o.length;l<m;l++){c=o[l].n,g=[c[b[i]],c[e]],h=2;while(h--)f=g[h],f&&(n.push(f),p=p.concat(f.f||[]))}o=n}return p},k.on=function(a,b){var c=a.split(d),e=j;for(var g=0,h=c.length;g<h;g++)e=e.n,!e[c[g]]&&(e[c[g]]={n:{}}),e=e[c[g]];e.f=e.f||[];for(g=0,h=e.f.length;g<h;g++)if(e.f[g]==b)return f;e.f.push(b);return function(a){+a==+a&&(b.zIndex=+a)}},k.stop=function(){i=1},k.nt=function(a){if(a)return(new RegExp("(?:\\.|\\/|^)"+a+"(?:\\.|\\/|$)")).test(h);return h},k.unbind=function(a,b){var f=a.split(d),g,h,i,k,l,m,n,o=[j];for(k=0,l=f.length;k<l;k++)for(m=0;m<o.length;m+=i.length-2){i=[m,1],g=o[m].n;if(f[k]!=e)g[f[k]]&&i.push(g[f[k]]);else for(h in g)g[c](h)&&i.push(g[h]);o.splice.apply(o,i)}for(k=0,l=o.length;k<l;k++){g=o[k];while(g.n){if(b){if(g.f){for(m=0,n=g.f.length;m<n;m++)if(g.f[m]==b){g.f.splice(m,1);break}!g.f.length&&delete g.f}for(h in g.n)if(g.n[c](h)&&g.n[h].f){var p=g.n[h].f;for(m=0,n=p.length;m<n;m++)if(p[m]==b){p.splice(m,1);break}!p.length&&delete g.n[h].f}}else{delete g.f;for(h in g.n)g.n[c](h)&&g.n[h].f&&delete g.n[h].f}g=g.n}}},k.once=function(a,b){var c=function(){b.apply(this,arguments),k.unbind(a,c)};return k.on(a,c)},k.version=b,k.toString=function(){return"You are running Eve "+b},typeof module!="undefined"&&module.exports?module.exports=k:a.eve=k})(this),function(){function cr(b,d,e,f,h,i){e=Q(e);var j,k,l,m=[],o,p,q,t=b.ms,u={},v={},w={};if(f)for(y=0,z=cl.length;y<z;y++){var x=cl[y];if(x.el.id==d.id&&x.anim==b){x.percent!=e?(cl.splice(y,1),l=1):k=x,d.attr(x.totalOrigin);break}}else f=+v;for(var y=0,z=b.percents.length;y<z;y++){if(b.percents[y]==e||b.percents[y]>f*b.top){e=b.percents[y],p=b.percents[y-1]||0,t=t/b.top*(e-p),o=b.percents[y+1],j=b.anim[e];break}f&&d.attr(b.anim[b.percents[y]])}if(!!j){if(!k){for(var A in j)if(j[g](A))if(U[g](A)||d.paper.customAttributes[g](A)){u[A]=d.attr(A),u[A]==null&&(u[A]=T[A]),v[A]=j[A];switch(U[A]){case C:w[A]=(v[A]-u[A])/t;break;case"colour":u[A]=a.getRGB(u[A]);var B=a.getRGB(v[A]);w[A]={r:(B.r-u[A].r)/t,g:(B.g-u[A].g)/t,b:(B.b-u[A].b)/t};break;case"path":var D=bG(u[A],v[A]),E=D[1];u[A]=D[0],w[A]=[];for(y=0,z=u[A].length;y<z;y++){w[A][y]=[0];for(var F=1,G=u[A][y].length;F<G;F++)w[A][y][F]=(E[y][F]-u[A][y][F])/t}break;case"transform":var H=d._,I=bP(H[A],v[A]);if(I){u[A]=I.from,v[A]=I.to,w[A]=[],w[A].real=!0;for(y=0,z=u[A].length;y<z;y++){w[A][y]=[u[A][y][0]];for(F=1,G=u[A][y].length;F<G;F++)w[A][y][F]=(v[A][y][F]-u[A][y][F])/t}}else{var J=d.matrix||new bQ,K={_:{transform:H.transform},getBBox:function(){return d.getBBox(1)}};u[A]=[J.a,J.b,J.c,J.d,J.e,J.f],bN(K,v[A]),v[A]=K._.transform,w[A]=[(K.matrix.a-J.a)/t,(K.matrix.b-J.b)/t,(K.matrix.c-J.c)/t,(K.matrix.d-J.d)/t,(K.matrix.e-J.e)/t,(K.matrix.e-J.f)/t]}break;case"csv":var L=r(j[A])[s](c),M=r(u[A])[s](c);if(A=="clip-rect"){u[A]=M,w[A]=[],y=M.length;while(y--)w[A][y]=(L[y]-u[A][y])/t}v[A]=L;break;default:L=[][n](j[A]),M=[][n](u[A]),w[A]=[],y=d.paper.customAttributes[A].length;while(y--)w[A][y]=((L[y]||0)-(M[y]||0))/t}}var O=j.easing,P=a.easing_formulas[O];if(!P){P=r(O).match(N);if(P&&P.length==5){var R=P;P=function(a){return cp(a,+R[1],+R[2],+R[3],+R[4],t)}}else P=be}q=j.start||b.start||+(new Date),x={anim:b,percent:e,timestamp:q,start:q+(b.del||0),status:0,initstatus:f||0,stop:!1,ms:t,easing:P,from:u,diff:w,to:v,el:d,callback:j.callback,prev:p,next:o,repeat:i||b.times,origin:d.attr(),totalOrigin:h},cl.push(x);if(f&&!k&&!l){x.stop=!0,x.start=new Date-t*f;if(cl.length==1)return cn()}l&&(x.start=new Date-x.ms*f),cl.length==1&&cm(cn)}else k.initstatus=f,k.start=new Date-k.ms*f;eve("anim.start."+d.id,d,b)}}function cq(a,b){var c=[],d={};this.ms=b,this.times=1;if(a){for(var e in a)a[g](e)&&(d[Q(e)]=a[e],c.push(Q(e)));c.sort(bc)}this.anim=d,this.top=c[c.length-1],this.percents=c}function cp(a,b,c,d,e,f){function o(a,b){var c,d,e,f,j,k;for(e=a,k=0;k<8;k++){f=m(e)-a;if(z(f)<b)return e;j=(3*i*e+2*h)*e+g;if(z(j)<1e-6)break;e=e-f/j}c=0,d=1,e=a;if(e<c)return c;if(e>d)return d;while(c<d){f=m(e);if(z(f-a)<b)return e;a>f?c=e:d=e,e=(d-c)/2+c}return e}function n(a,b){var c=o(a,b);return((l*c+k)*c+j)*c}function m(a){return((i*a+h)*a+g)*a}var g=3*b,h=3*(d-b)-g,i=1-g-h,j=3*c,k=3*(e-c)-j,l=1-j-k;return n(a,1/(200*f))}function cd(){return this.x+q+this.y+q+this.width+" × "+this.height}function cc(){return this.x+q+this.y}function bQ(a,b,c,d,e,f){a!=null?(this.a=+a,this.b=+b,this.c=+c,this.d=+d,this.e=+e,this.f=+f):(this.a=1,this.b=0,this.c=0,this.d=1,this.e=0,this.f=0)}function bw(a){var b=[];for(var c=0,d=a.length;d-2>c;c+=2){var e=[{x:+a[c],y:+a[c+1]},{x:+a[c],y:+a[c+1]},{x:+a[c+2],y:+a[c+3]},{x:+a[c+4],y:+a[c+5]}];d-4==c?(e[0]={x:+a[c-2],y:+a[c-1]},e[3]=e[2]):c&&(e[0]={x:+a[c-2],y:+a[c-1]}),b.push(["C",(-e[0].x+6*e[1].x+e[2].x)/6,(-e[0].y+6*e[1].y+e[2].y)/6,(e[1].x+6*e[2].x-e[3].x)/6,(e[1].y+6*e[2].y-e[3].y)/6,e[2].x,e[2].y])}return b}function bv(){return this.hex}function bt(a,b,c){function d(){var e=Array.prototype.slice.call(arguments,0),f=e.join("␀"),h=d.cache=d.cache||{},i=d.count=d.count||[];if(h[g](f)){bs(i,f);return c?c(h[f]):h[f]}i.length>=1e3&&delete h[i.shift()],i.push(f),h[f]=a[m](b,e);return c?c(h[f]):h[f]}return d}function bs(a,b){for(var c=0,d=a.length;c<d;c++)if(a[c]===b)return a.push(a.splice(c,1)[0])}function a(c){if(a.is(c,"function"))return b?c():eve.on("DOMload",c);if(a.is(c,E))return a._engine.create[m](a,c.splice(0,3+a.is(c[0],C))).add(c);var d=Array.prototype.slice.call(arguments,0);if(a.is(d[d.length-1],"function")){var e=d.pop();return b?e.call(a._engine.create[m](a,d)):eve.on("DOMload",function(){e.call(a._engine.create[m](a,d))})}return a._engine.create[m](a,arguments)}a.version="2.0.1",a.eve=eve;var b,c=/[, ]+/,d={circle:1,rect:1,path:1,ellipse:1,text:1,image:1},e=/\{(\d+)\}/g,f="prototype",g="hasOwnProperty",h={doc:document,win:window},i={was:Object.prototype[g].call(h.win,"Raphael"),is:h.win.Raphael},j=function(){this.ca=this.customAttributes={}},k,l="appendChild",m="apply",n="concat",o="createTouch"in h.doc,p="",q=" ",r=String,s="split",t="click dblclick mousedown mousemove mouseout mouseover mouseup touchstart touchmove touchend touchcancel"[s](q),u={mousedown:"touchstart",mousemove:"touchmove",mouseup:"touchend"},v=r.prototype.toLowerCase,w=Math,x=w.max,y=w.min,z=w.abs,A=w.pow,B=w.PI,C="number",D="string",E="array",F="toString",G="fill",H=Object.prototype.toString,I={},J="push",K=a._ISURL=/^url\(['"]?([^\)]+?)['"]?\)$/i,L=/^\s*((#[a-f\d]{6})|(#[a-f\d]{3})|rgba?\(\s*([\d\.]+%?\s*,\s*[\d\.]+%?\s*,\s*[\d\.]+%?(?:\s*,\s*[\d\.]+%?)?)\s*\)|hsba?\(\s*([\d\.]+(?:deg|\xb0|%)?\s*,\s*[\d\.]+%?\s*,\s*[\d\.]+(?:%?\s*,\s*[\d\.]+)?)%?\s*\)|hsla?\(\s*([\d\.]+(?:deg|\xb0|%)?\s*,\s*[\d\.]+%?\s*,\s*[\d\.]+(?:%?\s*,\s*[\d\.]+)?)%?\s*\))\s*$/i,M={NaN:1,Infinity:1,"-Infinity":1},N=/^(?:cubic-)?bezier\(([^,]+),([^,]+),([^,]+),([^\)]+)\)/,O=w.round,P="setAttribute",Q=parseFloat,R=parseInt,S=r.prototype.toUpperCase,T=a._availableAttrs={"arrow-end":"none","arrow-start":"none",blur:0,"clip-rect":"0 0 1e9 1e9",cursor:"default",cx:0,cy:0,fill:"#fff","fill-opacity":1,font:'10px "Arial"',"font-family":'"Arial"',"font-size":"10","font-style":"normal","font-weight":400,gradient:0,height:0,href:"http://raphaeljs.com/","letter-spacing":0,opacity:1,path:"M0,0",r:0,rx:0,ry:0,src:"",stroke:"#000","stroke-dasharray":"","stroke-linecap":"butt","stroke-linejoin":"butt","stroke-miterlimit":0,"stroke-opacity":1,"stroke-width":1,target:"_blank","text-anchor":"middle",title:"Raphael",transform:"",width:0,x:0,y:0},U=a._availableAnimAttrs={blur:C,"clip-rect":"csv",cx:C,cy:C,fill:"colour","fill-opacity":C,"font-size":C,height:C,opacity:C,path:"path",r:C,rx:C,ry:C,stroke:"colour","stroke-opacity":C,"stroke-width":C,transform:"transform",width:C,x:C,y:C},V=/\s*,\s*/,W={hs:1,rg:1},X=/,?([achlmqrstvxz]),?/gi,Y=/([achlmrqstvz])[\s,]*((-?\d*\.?\d*(?:e[\-+]?\d+)?\s*,?\s*)+)/ig,Z=/([rstm])[\s,]*((-?\d*\.?\d*(?:e[\-+]?\d+)?\s*,?\s*)+)/ig,$=/(-?\d*\.?\d*(?:e[\-+]?\d+)?)\s*,?\s*/ig,_=a._radial_gradient=/^r(?:\(([^,]+?)\s*,\s*([^\)]+?)\))?/,ba={},bb=function(a,b){return a.key-b.key},bc=function(a,b){return Q(a)-Q(b)},bd=function(){},be=function(a){return a},bf=a._rectPath=function(a,b,c,d,e){if(e)return[["M",a+e,b],["l",c-e*2,0],["a",e,e,0,0,1,e,e],["l",0,d-e*2],["a",e,e,0,0,1,-e,e],["l",e*2-c,0],["a",e,e,0,0,1,-e,-e],["l",0,e*2-d],["a",e,e,0,0,1,e,-e],["z"]];return[["M",a,b],["l",c,0],["l",0,d],["l",-c,0],["z"]]},bg=function(a,b,c,d){d==null&&(d=c);return[["M",a,b],["m",0,-d],["a",c,d,0,1,1,0,2*d],["a",c,d,0,1,1,0,-2*d],["z"]]},bh=a._getPath={path:function(a){return a.attr("path")},circle:function(a){var b=a.attrs;return bg(b.cx,b.cy,b.r)},ellipse:function(a){var b=a.attrs;return bg(b.cx,b.cy,b.rx,b.ry)},rect:function(a){var b=a.attrs;return bf(b.x,b.y,b.width,b.height,b.r)},image:function(a){var b=a.attrs;return bf(b.x,b.y,b.width,b.height)},text:function(a){var b=a._getBBox();return bf(b.x,b.y,b.width,b.height)}},bi=a.mapPath=function(a,b){if(!b)return a;var c,d,e,f,g,h,i;a=bG(a);for(e=0,g=a.length;e<g;e++){i=a[e];for(f=1,h=i.length;f<h;f+=2)c=b.x(i[f],i[f+1]),d=b.y(i[f],i[f+1]),i[f]=c,i[f+1]=d}return a};a._g=h,a.type=h.win.SVGAngle||h.doc.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#BasicStructure","1.1")?"SVG":"VML";if(a.type=="VML"){var bj=h.doc.createElement("div"),bk;bj.innerHTML='<v:shape adj="1"/>',bk=bj.firstChild,bk.style.behavior="url(#default#VML)";if(!bk||typeof bk.adj!="object")return a.type=p;bj=null}a.svg=!(a.vml=a.type=="VML"),a._Paper=j,a.fn=k=j.prototype=a.prototype,a._id=0,a._oid=0,a.is=function(a,b){b=v.call(b);if(b=="finite")return!M[g](+a);if(b=="array")return a instanceof Array;return b=="null"&&a===null||b==typeof a&&a!==null||b=="object"&&a===Object(a)||b=="array"&&Array.isArray&&Array.isArray(a)||H.call(a).slice(8,-1).toLowerCase()==b},a.angle=function(b,c,d,e,f,g){if(f==null){var h=b-d,i=c-e;if(!h&&!i)return 0;return(180+w.atan2(-i,-h)*180/B+360)%360}return a.angle(b,c,f,g)-a.angle(d,e,f,g)},a.rad=function(a){return a%360*B/180},a.deg=function(a){return a*180/B%360},a.snapTo=function(b,c,d){d=a.is(d,"finite")?d:10;if(a.is(b,E)){var e=b.length;while(e--)if(z(b[e]-c)<=d)return b[e]}else{b=+b;var f=c%b;if(f<d)return c-f;if(f>b-d)return c-f+b}return c};var bl=a.createUUID=function(a,b){return function(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(a,b).toUpperCase()}}(/[xy]/g,function(a){var b=w.random()*16|0,c=a=="x"?b:b&3|8;return c.toString(16)});a.setWindow=function(b){eve("setWindow",a,h.win,b),h.win=b,h.doc=h.win.document,a._engine.initWin&&a._engine.initWin(h.win)};var bm=function(b){if(a.vml){var c=/^\s+|\s+$/g,d;try{var e=new ActiveXObject("htmlfile");e.write("<body>"),e.close(),d=e.body}catch(f){d=createPopup().document.body}var g=d.createTextRange();bm=bt(function(a){try{d.style.color=r(a).replace(c,p);var b=g.queryCommandValue("ForeColor");b=(b&255)<<16|b&65280|(b&16711680)>>>16;return"#"+("000000"+b.toString(16)).slice(-6)}catch(e){return"none"}})}else{var i=h.doc.createElement("i");i.title="Raphaël Colour Picker",i.style.display="none",h.doc.body.appendChild(i),bm=bt(function(a){i.style.color=a;return h.doc.defaultView.getComputedStyle(i,p).getPropertyValue("color")})}return bm(b)},bn=function(){return"hsb("+[this.h,this.s,this.b]+")"},bo=function(){return"hsl("+[this.h,this.s,this.l]+")"},bp=function(){return this.hex},bq=function(b,c,d){c==null&&a.is(b,"object")&&"r"in b&&"g"in b&&"b"in b&&(d=b.b,c=b.g,b=b.r);if(c==null&&a.is(b,D)){var e=a.getRGB(b);b=e.r,c=e.g,d=e.b}if(b>1||c>1||d>1)b/=255,c/=255,d/=255;return[b,c,d]},br=function(b,c,d,e){b*=255,c*=255,d*=255;var f={r:b,g:c,b:d,hex:a.rgb(b,c,d),toString:bp};a.is(e,"finite")&&(f.opacity=e);return f};a.color=function(b){var c;a.is(b,"object")&&"h"in b&&"s"in b&&"b"in b?(c=a.hsb2rgb(b),b.r=c.r,b.g=c.g,b.b=c.b,b.hex=c.hex):a.is(b,"object")&&"h"in b&&"s"in b&&"l"in b?(c=a.hsl2rgb(b),b.r=c.r,b.g=c.g,b.b=c.b,b.hex=c.hex):(a.is(b,"string")&&(b=a.getRGB(b)),a.is(b,"object")&&"r"in b&&"g"in b&&"b"in b?(c=a.rgb2hsl(b),b.h=c.h,b.s=c.s,b.l=c.l,c=a.rgb2hsb(b),b.v=c.b):(b={hex:"none"},b.r=b.g=b.b=b.h=b.s=b.v=b.l=-1)),b.toString=bp;return b},a.hsb2rgb=function(a,b,c,d){this.is(a,"object")&&"h"in a&&"s"in a&&"b"in a&&(c=a.b,b=a.s,a=a.h,d=a.o),a*=360;var e,f,g,h,i;a=a%360/60,i=c*b,h=i*(1-z(a%2-1)),e=f=g=c-i,a=~~a,e+=[i,h,0,0,h,i][a],f+=[h,i,i,h,0,0][a],g+=[0,0,h,i,i,h][a];return br(e,f,g,d)},a.hsl2rgb=function(a,b,c,d){this.is(a,"object")&&"h"in a&&"s"in a&&"l"in a&&(c=a.l,b=a.s,a=a.h);if(a>1||b>1||c>1)a/=360,b/=100,c/=100;a*=360;var e,f,g,h,i;a=a%360/60,i=2*b*(c<.5?c:1-c),h=i*(1-z(a%2-1)),e=f=g=c-i/2,a=~~a,e+=[i,h,0,0,h,i][a],f+=[h,i,i,h,0,0][a],g+=[0,0,h,i,i,h][a];return br(e,f,g,d)},a.rgb2hsb=function(a,b,c){c=bq(a,b,c),a=c[0],b=c[1],c=c[2];var d,e,f,g;f=x(a,b,c),g=f-y(a,b,c),d=g==0?null:f==a?(b-c)/g:f==b?(c-a)/g+2:(a-b)/g+4,d=(d+360)%6*60/360,e=g==0?0:g/f;return{h:d,s:e,b:f,toString:bn}},a.rgb2hsl=function(a,b,c){c=bq(a,b,c),a=c[0],b=c[1],c=c[2];var d,e,f,g,h,i;g=x(a,b,c),h=y(a,b,c),i=g-h,d=i==0?null:g==a?(b-c)/i:g==b?(c-a)/i+2:(a-b)/i+4,d=(d+360)%6*60/360,f=(g+h)/2,e=i==0?0:f<.5?i/(2*f):i/(2-2*f);return{h:d,s:e,l:f,toString:bo}},a._path2string=function(){return this.join(",").replace(X,"$1")};var bu=a._preload=function(a,b){var c=h.doc.createElement("img");c.style.cssText="position:absolute;left:-9999em;top:-9999em",c.onload=function(){b.call(this),this.onload=null,h.doc.body.removeChild(this)},c.onerror=function(){h.doc.body.removeChild(this)},h.doc.body.appendChild(c),c.src=a};a.getRGB=bt(function(b){if(!b||!!((b=r(b)).indexOf("-")+1))return{r:-1,g:-1,b:-1,hex:"none",error:1,toString:bv};if(b=="none")return{r:-1,g:-1,b:-1,hex:"none",toString:bv};!W[g](b.toLowerCase().substring(0,2))&&b.charAt()!="#"&&(b=bm(b));var c,d,e,f,h,i,j,k=b.match(L);if(k){k[2]&&(f=R(k[2].substring(5),16),e=R(k[2].substring(3,5),16),d=R(k[2].substring(1,3),16)),k[3]&&(f=R((i=k[3].charAt(3))+i,16),e=R((i=k[3].charAt(2))+i,16),d=R((i=k[3].charAt(1))+i,16)),k[4]&&(j=k[4][s](V),d=Q(j[0]),j[0].slice(-1)=="%"&&(d*=2.55),e=Q(j[1]),j[1].slice(-1)=="%"&&(e*=2.55),f=Q(j[2]),j[2].slice(-1)=="%"&&(f*=2.55),k[1].toLowerCase().slice(0,4)=="rgba"&&(h=Q(j[3])),j[3]&&j[3].slice(-1)=="%"&&(h/=100));if(k[5]){j=k[5][s](V),d=Q(j[0]),j[0].slice(-1)=="%"&&(d*=2.55),e=Q(j[1]),j[1].slice(-1)=="%"&&(e*=2.55),f=Q(j[2]),j[2].slice(-1)=="%"&&(f*=2.55),(j[0].slice(-3)=="deg"||j[0].slice(-1)=="°")&&(d/=360),k[1].toLowerCase().slice(0,4)=="hsba"&&(h=Q(j[3])),j[3]&&j[3].slice(-1)=="%"&&(h/=100);return a.hsb2rgb(d,e,f,h)}if(k[6]){j=k[6][s](V),d=Q(j[0]),j[0].slice(-1)=="%"&&(d*=2.55),e=Q(j[1]),j[1].slice(-1)=="%"&&(e*=2.55),f=Q(j[2]),j[2].slice(-1)=="%"&&(f*=2.55),(j[0].slice(-3)=="deg"||j[0].slice(-1)=="°")&&(d/=360),k[1].toLowerCase().slice(0,4)=="hsla"&&(h=Q(j[3])),j[3]&&j[3].slice(-1)=="%"&&(h/=100);return a.hsl2rgb(d,e,f,h)}k={r:d,g:e,b:f,toString:bv},k.hex="#"+(16777216|f|e<<8|d<<16).toString(16).slice(1),a.is(h,"finite")&&(k.opacity=h);return k}return{r:-1,g:-1,b:-1,hex:"none",error:1,toString:bv}},a),a.hsb=bt(function(b,c,d){return a.hsb2rgb(b,c,d).hex}),a.hsl=bt(function(b,c,d){return a.hsl2rgb(b,c,d).hex}),a.rgb=bt(function(a,b,c){return"#"+(16777216|c|b<<8|a<<16).toString(16).slice(1)}),a.getColor=function(a){var b=this.getColor.start=this.getColor.start||{h:0,s:1,b:a||.75},c=this.hsb2rgb(b.h,b.s,b.b);b.h+=.075,b.h>1&&(b.h=0,b.s-=.2,b.s<=0&&(this.getColor.start={h:0,s:1,b:b.b}));return c.hex},a.getColor.reset=function(){delete this.start},a.parsePathString=bt(function(b){if(!b)return null;var c={a:7,c:6,h:1,l:2,m:2,r:4,q:4,s:4,t:2,v:1,z:0},d=[];a.is(b,E)&&a.is(b[0],E)&&(d=by(b)),d.length||r(b).replace(Y,function(a,b,e){var f=[],g=b.toLowerCase();e.replace($,function(a,b){b&&f.push(+b)}),g=="m"&&f.length>2&&(d.push([b][n](f.splice(0,2))),g="l",b=b=="m"?"l":"L");if(g=="r")d.push([b][n](f));else while(f.length>=c[g]){d.push([b][n](f.splice(0,c[g])));if(!c[g])break}}),d.toString=a._path2string;return d}),a.parseTransformString=bt(function(b){if(!b)return null;var c={r:3,s:4,t:2,m:6},d=[];a.is(b,E)&&a.is(b[0],E)&&(d=by(b)),d.length||r(b).replace(Z,function(a,b,c){var e=[],f=v.call(b);c.replace($,function(a,b){b&&e.push(+b)}),d.push([b][n](e))}),d.toString=a._path2string;return d}),a.findDotsAtSegment=function(a,b,c,d,e,f,g,h,i){var j=1-i,k=A(j,3),l=A(j,2),m=i*i,n=m*i,o=k*a+l*3*i*c+j*3*i*i*e+n*g,p=k*b+l*3*i*d+j*3*i*i*f+n*h,q=a+2*i*(c-a)+m*(e-2*c+a),r=b+2*i*(d-b)+m*(f-2*d+b),s=c+2*i*(e-c)+m*(g-2*e+c),t=d+2*i*(f-d)+m*(h-2*f+d),u=j*a+i*c,v=j*b+i*d,x=j*e+i*g,y=j*f+i*h,z=90-w.atan2(q-s,r-t)*180/B;(q>s||r<t)&&(z+=180);return{x:o,y:p,m:{x:q,y:r},n:{x:s,y:t},start:{x:u,y:v},end:{x:x,y:y},alpha:z}},a._removedFactory=function(a){return function(){throw new Error("Raphaël: you are calling to method “"+a+"” of removed object")}};var bx=bt(function(a){if(!a)return{x:0,y:0,width:0,height:0};a=bG(a);var b=0,c=0,d=[],e=[],f;for(var g=0,h=a.length;g<h;g++){f=a[g];if(f[0]=="M")b=f[1],c=f[2],d.push(b),e.push(c);else{var i=bF(b,c,f[1],f[2],f[3],f[4],f[5],f[6]);d=d[n](i.min.x,i.max.x),e=e[n](i.min.y,i.max.y),b=f[5],c=f[6]}}var j=y[m](0,d),k=y[m](0,e);return{x:j,y:k,width:x[m](0,d)-j,height:x[m](0,e)-k}},null,function(a){return{x:a.x,y:a.y,width:a.width,height:a.height}}),by=function(b){var c=[];if(!a.is(b,E)||!a.is(b&&b[0],E))b=a.parsePathString(b);for(var d=0,e=b.length;d<e;d++){c[d]=[];for(var f=0,g=b[d].length;f<g;f++)c[d][f]=b[d][f]}c.toString=a._path2string;return c},bz=a._pathToRelative=bt(function(b){if(!a.is(b,E)||!a.is(b&&b[0],E))b=a.parsePathString(b);var c=[],d=0,e=0,f=0,g=0,h=0;b[0][0]=="M"&&(d=b[0][1],e=b[0][2],f=d,g=e,h++,c.push(["M",d,e]));for(var i=h,j=b.length;i<j;i++){var k=c[i]=[],l=b[i];if(l[0]!=v.call(l[0])){k[0]=v.call(l[0]);switch(k[0]){case"a":k[1]=l[1],k[2]=l[2],k[3]=l[3],k[4]=l[4],k[5]=l[5],k[6]=+(l[6]-d).toFixed(3),k[7]=+(l[7]-e).toFixed(3);break;case"v":k[1]=+(l[1]-e).toFixed(3);break;case"m":f=l[1],g=l[2];default:for(var m=1,n=l.length;m<n;m++)k[m]=+(l[m]-(m%2?d:e)).toFixed(3)}}else{k=c[i]=[],l[0]=="m"&&(f=l[1]+d,g=l[2]+e);for(var o=0,p=l.length;o<p;o++)c[i][o]=l[o]}var q=c[i].length;switch(c[i][0]){case"z":d=f,e=g;break;case"h":d+=+c[i][q-1];break;case"v":e+=+c[i][q-1];break;default:d+=+c[i][q-2],e+=+c[i][q-1]}}c.toString=a._path2string;return c},0,by),bA=a._pathToAbsolute=bt(function(b){if(!a.is(b,E)||!a.is(b&&b[0],E))b=a.parsePathString(b);if(!b||!b.length)return[["M",0,0]];var c=[],d=0,e=0,f=0,g=0,h=0;b[0][0]=="M"&&(d=+b[0][1],e=+b[0][2],f=d,g=e,h++,c[0]=["M",d,e]);for(var i,j,k=h,l=b.length;k<l;k++){c.push(i=[]),j=b[k];if(j[0]!=S.call(j[0])){i[0]=S.call(j[0]);switch(i[0]){case"A":i[1]=j[1],i[2]=j[2],i[3]=j[3],i[4]=j[4],i[5]=j[5],i[6]=+(j[6]+d),i[7]=+(j[7]+e);break;case"V":i[1]=+j[1]+e;break;case"H":i[1]=+j[1]+d;break;case"R":var m=[d,e][n](j.slice(1));for(var o=2,p=m.length;o<p;o++)m[o]=+m[o]+d,m[++o]=+m[o]+e;c.pop(),c=c[n](bw(m));break;case"M":f=+j[1]+d,g=+j[2]+e;default:for(o=1,p=j.length;o<p;o++)i[o]=+j[o]+(o%2?d:e)}}else if(j[0]=="R")m=[d,e][n](j.slice(1)),c.pop(),c=c[n](bw(m)),i=["R"][n](j.slice(-2));else for(var q=0,r=j.length;q<r;q++)i[q]=j[q];switch(i[0]){case"Z":d=f,e=g;break;case"H":d=i[1];break;case"V":e=i[1];break;case"M":f=i[i.length-2],g=i[i.length-1];default:d=i[i.length-2],e=i[i.length-1]}}c.toString=a._path2string;return c},null,by),bB=function(a,b,c,d){return[a,b,c,d,c,d]},bC=function(a,b,c,d,e,f){var g=1/3,h=2/3;return[g*a+h*c,g*b+h*d,g*e+h*c,g*f+h*d,e,f]},bD=function(a,b,c,d,e,f,g,h,i,j){var k=B*120/180,l=B/180*(+e||0),m=[],o,p=bt(function(a,b,c){var d=a*w.cos(c)-b*w.sin(c),e=a*w.sin(c)+b*w.cos(c);return{x:d,y:e}});if(!j){o=p(a,b,-l),a=o.x,b=o.y,o=p(h,i,-l),h=o.x,i=o.y;var q=w.cos(B/180*e),r=w.sin(B/180*e),t=(a-h)/2,u=(b-i)/2,v=t*t/(c*c)+u*u/(d*d);v>1&&(v=w.sqrt(v),c=v*c,d=v*d);var x=c*c,y=d*d,A=(f==g?-1:1)*w.sqrt(z((x*y-x*u*u-y*t*t)/(x*u*u+y*t*t))),C=A*c*u/d+(a+h)/2,D=A*-d*t/c+(b+i)/2,E=w.asin(((b-D)/d).toFixed(9)),F=w.asin(((i-D)/d).toFixed(9));E=a<C?B-E:E,F=h<C?B-F:F,E<0&&(E=B*2+E),F<0&&(F=B*2+F),g&&E>F&&(E=E-B*2),!g&&F>E&&(F=F-B*2)}else E=j[0],F=j[1],C=j[2],D=j[3];var G=F-E;if(z(G)>k){var H=F,I=h,J=i;F=E+k*(g&&F>E?1:-1),h=C+c*w.cos(F),i=D+d*w.sin(F),m=bD(h,i,c,d,e,0,g,I,J,[F,H,C,D])}G=F-E;var K=w.cos(E),L=w.sin(E),M=w.cos(F),N=w.sin(F),O=w.tan(G/4),P=4/3*c*O,Q=4/3*d*O,R=[a,b],S=[a+P*L,b-Q*K],T=[h+P*N,i-Q*M],U=[h,i];S[0]=2*R[0]-S[0],S[1]=2*R[1]-S[1];if(j)return[S,T,U][n](m);m=[S,T,U][n](m).join()[s](",");var V=[];for(var W=0,X=m.length;W<X;W++)V[W]=W%2?p(m[W-1],m[W],l).y:p(m[W],m[W+1],l).x;return V},bE=function(a,b,c,d,e,f,g,h,i){var j=1-i;return{x:A(j,3)*a+A(j,2)*3*i*c+j*3*i*i*e+A(i,3)*g,y:A(j,3)*b+A(j,2)*3*i*d+j*3*i*i*f+A(i,3)*h}},bF=bt(function(a,b,c,d,e,f,g,h){var i=e-2*c+a-(g-2*e+c),j=2*(c-a)-2*(e-c),k=a-c,l=(-j+w.sqrt(j*j-4*i*k))/2/i,n=(-j-w.sqrt(j*j-4*i*k))/2/i,o=[b,h],p=[a,g],q;z(l)>"1e12"&&(l=.5),z(n)>"1e12"&&(n=.5),l>0&&l<1&&(q=bE(a,b,c,d,e,f,g,h,l),p.push(q.x),o.push(q.y)),n>0&&n<1&&(q=bE(a,b,c,d,e,f,g,h,n),p.push(q.x),o.push(q.y)),i=f-2*d+b-(h-2*f+d),j=2*(d-b)-2*(f-d),k=b-d,l=(-j+w.sqrt(j*j-4*i*k))/2/i,n=(-j-w.sqrt(j*j-4*i*k))/2/i,z(l)>"1e12"&&(l=.5),z(n)>"1e12"&&(n=.5),l>0&&l<1&&(q=bE(a,b,c,d,e,f,g,h,l),p.push(q.x),o.push(q.y)),n>0&&n<1&&(q=bE(a,b,c,d,e,f,g,h,n),p.push(q.x),o.push(q.y));return{min:{x:y[m](0,p),y:y[m](0,o)},max:{x:x[m](0,p),y:x[m](0,o)}}}),bG=a._path2curve=bt(function(a,b){var c=bA(a),d=b&&bA(b),e={x:0,y:0,bx:0,by:0,X:0,Y:0,qx:null,qy:null},f={x:0,y:0,bx:0,by:0,X:0,Y:0,qx:null,qy:null},g=function(a,b){var c,d;if(!a)return["C",b.x,b.y,b.x,b.y,b.x,b.y];!(a[0]in{T:1,Q:1})&&(b.qx=b.qy=null);switch(a[0]){case"M":b.X=a[1],b.Y=a[2];break;case"A":a=["C"][n](bD[m](0,[b.x,b.y][n](a.slice(1))));break;case"S":c=b.x+(b.x-(b.bx||b.x)),d=b.y+(b.y-(b.by||b.y)),a=["C",c,d][n](a.slice(1));break;case"T":b.qx=b.x+(b.x-(b.qx||b.x)),b.qy=b.y+(b.y-(b.qy||b.y)),a=["C"][n](bC(b.x,b.y,b.qx,b.qy,a[1],a[2]));break;case"Q":b.qx=a[1],b.qy=a[2],a=["C"][n](bC(b.x,b.y,a[1],a[2],a[3],a[4]));break;case"L":a=["C"][n](bB(b.x,b.y,a[1],a[2]));break;case"H":a=["C"][n](bB(b.x,b.y,a[1],b.y));break;case"V":a=["C"][n](bB(b.x,b.y,b.x,a[1]));break;case"Z":a=["C"][n](bB(b.x,b.y,b.X,b.Y))}return a},h=function(a,b){if(a[b].length>7){a[b].shift();var e=a[b];while(e.length)a.splice(b++,0,["C"][n](e.splice(0,6)));a.splice(b,1),k=x(c.length,d&&d.length||0)}},i=function(a,b,e,f,g){a&&b&&a[g][0]=="M"&&b[g][0]!="M"&&(b.splice(g,0,["M",f.x,f.y]),e.bx=0,e.by=0,e.x=a[g][1],e.y=a[g][2],k=x(c.length,d&&d.length||0))};for(var j=0,k=x(c.length,d&&d.length||0);j<k;j++){c[j]=g(c[j],e),h(c,j),d&&(d[j]=g(d[j],f)),d&&h(d,j),i(c,d,e,f,j),i(d,c,f,e,j);var l=c[j],o=d&&d[j],p=l.length,q=d&&o.length;e.x=l[p-2],e.y=l[p-1],e.bx=Q(l[p-4])||e.x,e.by=Q(l[p-3])||e.y,f.bx=d&&(Q(o[q-4])||f.x),f.by=d&&(Q(o[q-3])||f.y),f.x=d&&o[q-2],f.y=d&&o[q-1]}return d?[c,d]:c},null,by),bH=a._parseDots=bt(function(b){var c=[];for(var d=0,e=b.length;d<e;d++){var f={},g=b[d].match(/^([^:]*):?([\d\.]*)/);f.color=a.getRGB(g[1]);if(f.color.error)return null;f.color=f.color.hex,g[2]&&(f.offset=g[2]+"%"),c.push(f)}for(d=1,e=c.length-1;d<e;d++)if(!c[d].offset){var h=Q(c[d-1].offset||0),i=0;for(var j=d+1;j<e;j++)if(c[j].offset){i=c[j].offset;break}i||(i=100,j=e),i=Q(i);var k=(i-h)/(j-d+1);for(;d<j;d++)h+=k,c[d].offset=h+"%"}return c}),bI=a._tear=function(a,b){a==b.top&&(b.top=a.prev),a==b.bottom&&(b.bottom=a.next),a.next&&(a.next.prev=a.prev),a.prev&&(a.prev.next=a.next)},bJ=a._tofront=function(a,b){b.top!==a&&(bI(a,b),a.next=null,a.prev=b.top,b.top.next=a,b.top=a)},bK=a._toback=function(a,b){b.bottom!==a&&(bI(a,b),a.next=b.bottom,a.prev=null,b.bottom.prev=a,b.bottom=a)},bL=a._insertafter=function(a,b,c){bI(a,c),b==c.top&&(c.top=a),b.next&&(b.next.prev=a),a.next=b.next,a.prev=b,b.next=a},bM=a._insertbefore=function(a,b,c){bI(a,c),b==c.bottom&&(c.bottom=a),b.prev&&(b.prev.next=a),a.prev=b.prev,b.prev=a,a.next=b},bN=a._extractTransform=function(b,c){if(c==null)return b._.transform;c=r(c).replace(/\.{3}|\u2026/g,b._.transform||p);var d=a.parseTransformString(c),e=0,f=0,g=0,h=1,i=1,j=b._,k=new bQ;j.transform=d||[];if(d)for(var l=0,m=d.length;l<m;l++){var n=d[l],o=n.length,q=r(n[0]).toLowerCase(),s=n[0]!=q,t=s?k.invert():0,u,v,w,x,y;q=="t"&&o==3?s?(u=t.x(0,0),v=t.y(0,0),w=t.x(n[1],n[2]),x=t.y(n[1],n[2]),k.translate(w-u,x-v)):k.translate(n[1],n[2]):q=="r"?o==2?(y=y||b.getBBox(1),k.rotate(n[1],y.x+y.width/2,y.y+y.height/2),e+=n[1]):o==4&&(s?(w=t.x(n[2],n[3]),x=t.y(n[2],n[3]),k.rotate(n[1],w,x)):k.rotate(n[1],n[2],n[3]),e+=n[1]):q=="s"?o==2||o==3?(y=y||b.getBBox(1),k.scale(n[1],n[o-1],y.x+y.width/2,y.y+y.height/2),h*=n[1],i*=n[o-1]):o==5&&(s?(w=t.x(n[3],n[4]),x=t.y(n[3],n[4]),k.scale(n[1],n[2],w,x)):k.scale(n[1],n[2],n[3],n[4]),h*=n[1],i*=n[2]):q=="m"&&o==7&&k.add(n[1],n[2],n[3],n[4],n[5],n[6]),j.dirtyT=1,b.matrix=k}b.matrix=k,j.sx=h,j.sy=i,j.deg=e,j.dx=f=k.e,j.dy=g=k.f,h==1&&i==1&&!e&&j.bbox?(j.bbox.x+=+f,j.bbox.y+=+g):j.dirtyT=1},bO=function(a){var b=a[0];switch(b.toLowerCase()){case"t":return[b,0,0];case"m":return[b,1,0,0,1,0,0];case"r":return a.length==4?[b,0,a[2],a[3]]:[b,0];case"s":return a.length==5?[b,1,1,a[3],a[4]]:a.length==3?[b,1,1]:[b,1]}},bP=a._equaliseTransform=function(b,c){c=r(c).replace(/\.{3}|\u2026/g,b),b=a.parseTransformString(b)||[],c=a.parseTransformString(c)||[];var d=x(b.length,c.length),e=[],f=[],g=0,h,i,j,k;for(;g<d;g++){j=b[g]||bO(c[g]),k=c[g]||bO(j);if(j[0]!=k[0]||j[0].toLowerCase()=="r"&&(j[2]!=k[2]||j[3]!=k[3])||j[0].toLowerCase()=="s"&&(j[3]!=k[3]||j[4]!=k[4]))return;e[g]=[],f[g]=[];for(h=0,i=x(j.length,k.length);h<i;h++)h in j&&(e[g][h]=j[h]),h in k&&(f[g][h]=k[h])}return{from:e,to:f}};a._getContainer=function(b,c,d,e){var f;f=e==null&&!a.is(b,"object")?h.doc.getElementById(b):b;if(f!=null){if(f.tagName)return c==null?{container:f,width:f.style.pixelWidth||f.offsetWidth,height:f.style.pixelHeight||f.offsetHeight}:{container:f,width:c,height:d};return{container:1,x:b,y:c,width:d,height:e}}},a.pathToRelative=bz,a._engine={},a.path2curve=bG,a.matrix=function(a,b,c,d,e,f){return new bQ(a,b,c,d,e,f)},function(b){function d(a){var b=w.sqrt(c(a));a[0]&&(a[0]/=b),a[1]&&(a[1]/=b)}function c(a){return a[0]*a[0]+a[1]*a[1]}b.add=function(a,b,c,d,e,f){var g=[[],[],[]],h=[[this.a,this.c,this.e],[this.b,this.d,this.f],[0,0,1]],i=[[a,c,e],[b,d,f],[0,0,1]],j,k,l,m;a&&a instanceof bQ&&(i=[[a.a,a.c,a.e],[a.b,a.d,a.f],[0,0,1]]);for(j=0;j<3;j++)for(k=0;k<3;k++){m=0;for(l=0;l<3;l++)m+=h[j][l]*i[l][k];g[j][k]=m}this.a=g[0][0],this.b=g[1][0],this.c=g[0][1],this.d=g[1][1],this.e=g[0][2],this.f=g[1][2]},b.invert=function(){var a=this,b=a.a*a.d-a.b*a.c;return new bQ(a.d/b,-a.b/b,-a.c/b,a.a/b,(a.c*a.f-a.d*a.e)/b,(a.b*a.e-a.a*a.f)/b)},b.clone=function(){return new bQ(this.a,this.b,this.c,this.d,this.e,this.f)},b.translate=function(a,b){this.add(1,0,0,1,a,b)},b.scale=function(a,b,c,d){b==null&&(b=a),(c||d)&&this.add(1,0,0,1,c,d),this.add(a,0,0,b,0,0),(c||d)&&this.add(1,0,0,1,-c,-d)},b.rotate=function(b,c,d){b=a.rad(b),c=c||0,d=d||0;var e=+w.cos(b).toFixed(9),f=+w.sin(b).toFixed(9);this.add(e,f,-f,e,c,d),this.add(1,0,0,1,-c,-d)},b.x=function(a,b){return a*this.a+b*this.c+this.e},b.y=function(a,b){return a*this.b+b*this.d+this.f},b.get=function(a){return+this[r.fromCharCode(97+a)].toFixed(4)},b.toString=function(){return a.svg?"matrix("+[this.get(0),this.get(1),this.get(2),this.get(3),this.get(4),this.get(5)].join()+")":[this.get(0),this.get(2),this.get(1),this.get(3),0,0].join()},b.toFilter=function(){return"progid:DXImageTransform.Microsoft.Matrix(M11="+this.get(0)+", M12="+this.get(2)+", M21="+this.get(1)+", M22="+this.get(3)+", Dx="+this.get(4)+", Dy="+this.get(5)+", sizingmethod='auto expand')"},b.offset=function(){return[this.e.toFixed(4),this.f.toFixed(4)]},b.split=function(){var b={};b.dx=this.e,b.dy=this.f;var e=[[this.a,this.c],[this.b,this.d]];b.scalex=w.sqrt(c(e[0])),d(e[0]),b.shear=e[0][0]*e[1][0]+e[0][1]*e[1][1],e[1]=[e[1][0]-e[0][0]*b.shear,e[1][1]-e[0][1]*b.shear],b.scaley=w.sqrt(c(e[1])),d(e[1]),b.shear/=b.scaley;var f=-e[0][1],g=e[1][1];g<0?(b.rotate=a.deg(w.acos(g)),f<0&&(b.rotate=360-b.rotate)):b.rotate=a.deg(w.asin(f)),b.isSimple=!+b.shear.toFixed(9)&&(b.scalex.toFixed(9)==b.scaley.toFixed(9)||!b.rotate),b.isSuperSimple=!+b.shear.toFixed(9)&&b.scalex.toFixed(9)==b.scaley.toFixed(9)&&!b.rotate,b.noRotation=!+b.shear.toFixed(9)&&!b.rotate;return b},b.toTransformString=function(a){var b=a||this[s]();if(b.isSimple){b.scalex=+b.scalex.toFixed(4),b.scaley=+b.scaley.toFixed(4),b.rotate=+b.rotate.toFixed(4);return(b.dx&&b.dy?"t"+[b.dx,b.dy]:p)+(b.scalex!=1||b.scaley!=1?"s"+[b.scalex,b.scaley,0,0]:p)+(b.rotate?"r"+[b.rotate,0,0]:p)}return"m"+[this.get(0),this.get(1),this.get(2),this.get(3),this.get(4),this.get(5)]}}(bQ.prototype);var bR=navigator.userAgent.match(/Version\/(.*?)\s/)||navigator.userAgent.match(/Chrome\/(\d+)/);navigator.vendor=="Apple Computer, Inc."&&(bR&&bR[1]<4||navigator.platform.slice(0,2)=="iP")||navigator.vendor=="Google Inc."&&bR&&bR[1]<8?k.safari=function(){var a=this.rect(-99,-99,this.width+99,this.height+99).attr({stroke:"none"});setTimeout(function(){a.remove()})}:k.safari=bd;var bS=function(){this.returnValue=!1},bT=function(){return this.originalEvent.preventDefault()},bU=function(){this.cancelBubble=!0},bV=function(){return this.originalEvent.stopPropagation()},bW=function(){if(h.doc.addEventListener)return function(a,b,c,d){var e=o&&u[b]?u[b]:b,f=function(e){var f=h.doc.documentElement.scrollTop||h.doc.body.scrollTop,i=h.doc.documentElement.scrollLeft||h.doc.body.scrollLeft,j=e.clientX+i,k=e.clientY+f;if(o&&u[g](b))for(var l=0,m=e.targetTouches&&e.targetTouches.length;l<m;l++)if(e.targetTouches[l].target==a){var n=e;e=e.targetTouches[l],e.originalEvent=n,e.preventDefault=bT,e.stopPropagation=bV;break}return c.call(d,e,j,k)};a.addEventListener(e,f,!1);return function(){a.removeEventListener(e,f,!1);return!0}};if(h.doc.attachEvent)return function(a,b,c,d){var e=function(a){a=a||h.win.event;var b=h.doc.documentElement.scrollTop||h.doc.body.scrollTop,e=h.doc.documentElement.scrollLeft||h.doc.body.scrollLeft,f=a.clientX+e,g=a.clientY+b;a.preventDefault=a.preventDefault||bS,a.stopPropagation=a.stopPropagation||bU;return c.call(d,a,f,g)};a.attachEvent("on"+b,e);var f=function(){a.detachEvent("on"+b,e);return!0};return f}}(),bX=[],bY=function(a){var b=a.clientX,c=a.clientY,d=h.doc.documentElement.scrollTop||h.doc.body.scrollTop,e=h.doc.documentElement.scrollLeft||h.doc.body.scrollLeft,f,g=bX.length;while(g--){f=bX[g];if(o){var i=a.touches.length,j;while(i--){j=a.touches[i];if(j.identifier==f.el._drag.id){b=j.clientX,c=j.clientY,(a.originalEvent?a.originalEvent:a).preventDefault();break}}}else a.preventDefault();var k=f.el.node,l,m=k.nextSibling,n=k.parentNode,p=k.style.display;h.win.opera&&n.removeChild(k),k.style.display="none",l=f.el.paper.getElementByPoint(b,c),k.style.display=p,h.win.opera&&(m?n.insertBefore(k,m):n.appendChild(k)),l&&eve("drag.over."+f.el.id,f.el,l),b+=e,c+=d,eve("drag.move."+f.el.id,f.move_scope||f.el,b-f.el._drag.x,c-f.el._drag.y,b,c,a)}},bZ=function(b){a.unmousemove(bY).unmouseup(bZ);var c=bX.length,d;while(c--)d=bX[c],d.el._drag={},eve("drag.end."+d.el.id,d.end_scope||d.start_scope||d.move_scope||d.el,b);bX=[]},b$=a.el={};for(var b_=t.length;b_--;)(function(b){a[b]=b$[b]=function(c,d){a.is(c,"function")&&(this.events=this.events||[],this.events.push({name:b,f:c,unbind:bW(this.shape||this.node||h.doc,b,c,d||this)}));return this},a["un"+b]=b$["un"+b]=function(a){var c=this.events,d=c.length;while(d--)if(c[d].name==b&&c[d].f==a){c[d].unbind(),c.splice(d,1),!c.length&&delete this.events;return this}return this}})(t[b_]);b$.data=function(b,c){var d=ba[this.id]=ba[this.id]||{};if(arguments.length==1){if(a.is(b,"object")){for(var e in b)b[g](e)&&this.data(e,b[e]);return this}eve("data.get."+this.id,this,d[b],b);return d[b]}d[b]=c,eve("data.set."+this.id,this,c,b);return this},b$.removeData=function(a){a==null?ba[this.id]={}:ba[this.id]&&delete ba[this.id][a];return this},b$.hover=function(a,b,c,d){return this.mouseover(a,c).mouseout(b,d||c)},b$.unhover=function(a,b){return this.unmouseover(a).unmouseout(b)};var ca=[];b$.drag=function(b,c,d,e,f,g){function i(i){(i.originalEvent||i).preventDefault();var j=h.doc.documentElement.scrollTop||h.doc.body.scrollTop,k=h.doc.documentElement.scrollLeft||h.doc.body.scrollLeft;this._drag.x=i.clientX+k,this._drag.y=i.clientY+j,this._drag.id=i.identifier,!bX.length&&a.mousemove(bY).mouseup(bZ),bX.push({el:this,move_scope:e,start_scope:f,end_scope:g}),c&&eve.on("drag.start."+this.id,c),b&&eve.on("drag.move."+this.id,b),d&&eve.on("drag.end."+this.id,d),eve("drag.start."+this.id,f||e||this,i.clientX+k,i.clientY+j,i)}this._drag={},ca.push({el:this,start:i}),this.mousedown(i);return this},b$.onDragOver=function(a){a?eve.on("drag.over."+this.id,a):eve.unbind("drag.over."+this.id)},b$.undrag=function(){var b=ca.length;while(b--)ca[b].el==this&&(this.unmousedown(ca[b].start),ca.splice(b,1),eve.unbind("drag.*."+this.id));!ca.length&&a.unmousemove(bY).unmouseup(bZ)},k.circle=function(b,c,d){var e=a._engine.circle(this,b||0,c||0,d||0);this.__set__&&this.__set__.push(e);return e},k.rect=function(b,c,d,e,f){var g=a._engine.rect(this,b||0,c||0,d||0,e||0,f||0);this.__set__&&this.__set__.push(g);return g},k.ellipse=function(b,c,d,e){var f=a._engine.ellipse(this,b||0,c||0,d||0,e||0);this.__set__&&this.__set__.push(f);return f},k.path=function(b){b&&!a.is(b,D)&&!a.is(b[0],E)&&(b+=p);var c=a._engine.path(a.format[m](a,arguments),this);this.__set__&&this.__set__.push(c);return c},k.image=function(b,c,d,e,f){var g=a._engine.image(this,b||"about:blank",c||0,d||0,e||0,f||0);this.__set__&&this.__set__.push(g);return g},k.text=function(b,c,d){var e=a._engine.text(this,b||0,c||0,r(d));this.__set__&&this.__set__.push(e);return e},k.set=function(b){!a.is(b,"array")&&(b=Array.prototype.splice.call(arguments,0,arguments.length));var c=new cs(b);this.__set__&&this.__set__.push(c);return c},k.setStart=function(a){this.__set__=a||this.set()},k.setFinish=function(a){var b=this.__set__;delete this.__set__;return b},k.setSize=function(b,c){return a._engine.setSize.call(this,b,c)},k.setViewBox=function(b,c,d,e,f){return a._engine.setViewBox.call(this,b,c,d,e,f)},k.top=k.bottom=null,k.raphael=a;var cb=function(a){var b=a.getBoundingClientRect(),c=a.ownerDocument,d=c.body,e=c.documentElement,f=e.clientTop||d.clientTop||0,g=e.clientLeft||d.clientLeft||0,i=b.top+(h.win.pageYOffset||e.scrollTop||d.scrollTop)-f,j=b.left+(h.win.pageXOffset||e.scrollLeft||d.scrollLeft)-g;return{y:i,x:j}};k.getElementByPoint=function(a,b){var c=this,d=c.canvas,e=h.doc.elementFromPoint(a,b);if(h.win.opera&&e.tagName=="svg"){var f=cb(d),g=d.createSVGRect();g.x=a-f.x,g.y=b-f.y,g.width=g.height=1;var i=d.getIntersectionList(g,null);i.length&&(e=i[i.length-1])}if(!e)return null;while(e.parentNode&&e!=d.parentNode&&!e.raphael)e=e.parentNode;e==c.canvas.parentNode&&(e=d),e=e&&e.raphael?c.getById(e.raphaelid):null;return e},k.getById=function(a){var b=this.bottom;while(b){if(b.id==a)return b;b=b.next}return null},k.forEach=function(a,b){var c=this.bottom;while(c){if(a.call(b,c)===!1)return this;c=c.next}return this},b$.getBBox=function(a){if(this.removed)return{};var b=this._;if(a){if(b.dirty||!b.bboxwt)this.realPath=bh[this.type](this),b.bboxwt=bx(this.realPath),b.bboxwt.toString=cd,b.dirty=0;return b.bboxwt}if(b.dirty||b.dirtyT||!b.bbox){if(b.dirty||!this.realPath)b.bboxwt=0,this.realPath=bh[this.type](this);b.bbox=bx(bi(this.realPath,this.matrix)),b.bbox.toString=cd,b.dirty=b.dirtyT=0}return b.bbox},b$.clone=function(){if(this.removed)return null;var a=this.paper[this.type]().attr(this.attr());this.__set__&&this.__set__.push(a);return a},b$.glow=function(a){if(this.type=="text")return null;a=a||{};var b={width:(a.width||10)+(+this.attr("stroke-width")||1),fill:a.fill||!1,opacity:a.opacity||.5,offsetx:a.offsetx||0,offsety:a.offsety||0,color:a.color||"#000"},c=b.width/2,d=this.paper,e=d.set(),f=this.realPath||bh[this.type](this);f=this.matrix?bi(f,this.matrix):f;for(var g=1;g<c+1;g++)e.push(d.path(f).attr({stroke:b.color,fill:b.fill?b.color:"none","stroke-linejoin":"round","stroke-linecap":"round","stroke-width":+(b.width/c*g).toFixed(3),opacity:+(b.opacity/c).toFixed(3)}));return e.insertBefore(this).translate(b.offsetx,b.offsety)};var ce={},cf=function(b,c,d,e,f,g,h,i,j){var k=0,l=100,m=[b,c,d,e,f,g,h,i].join(),n=ce[m],o,p;!n&&(ce[m]=n={data:[]}),n.timer&&clearTimeout(n.timer),n.timer=setTimeout(function(){delete ce[m]},2e3);if(j!=null&&!n.precision){var q=cf(b,c,d,e,f,g,h,i);n.precision=~~q*10,n.data=[]}l=n.precision||l;for(var r=0;r<l+1;r++){n.data[r*l]?p=n.data[r*l]:(p=a.findDotsAtSegment(b,c,d,e,f,g,h,i,r/l),n.data[r*l]=p),r&&(k+=A(A(o.x-p.x,2)+A(o.y-p.y,2),.5));if(j!=null&&k>=j)return p;o=p}if(j==null)return k},cg=function(b,c){return function(d,e,f){d=bG(d);var g,h,i,j,k="",l={},m,n=0;for(var o=0,p=d.length;o<p;o++){i=d[o];if(i[0]=="M")g=+i[1],h=+i[2];else{j=cf(g,h,i[1],i[2],i[3],i[4],i[5],i[6]);if(n+j>e){if(c&&!l.start){m=cf(g,h,i[1],i[2],i[3],i[4],i[5],i[6],e-n),k+=["C"+m.start.x,m.start.y,m.m.x,m.m.y,m.x,m.y];if(f)return k;l.start=k,k=["M"+m.x,m.y+"C"+m.n.x,m.n.y,m.end.x,m.end.y,i[5],i[6]].join(),n+=j,g=+i[5],h=+i[6];continue}if(!b&&!c){m=cf(g,h,i[1],i[2],i[3],i[4],i[5],i[6],e-n);return{x:m.x,y:m.y,alpha:m.alpha}}}n+=j,g=+i[5],h=+i[6]}k+=i.shift()+i}l.end=k,m=b?n:c?l:a.findDotsAtSegment(g,h,i[0],i[1],i[2],i[3],i[4],i[5],1),m.alpha&&(m={x:m.x,y:m.y,alpha:m.alpha});return m}},ch=cg(1),ci=cg(),cj=cg(0,1);a.getTotalLength=ch,a.getPointAtLength=ci,a.getSubpath=function(a,b,c){if(this.getTotalLength(a)-c<1e-6)return cj(a,b).end;var d=cj(a,c,1);return b?cj(d,b).end:d},b$.getTotalLength=function(){if(this.type=="path"){if(this.node.getTotalLength)return this.node.getTotalLength();return ch(this.attrs.path)}},b$.getPointAtLength=function(a){if(this.type=="path")return ci(this.attrs.path,a)},b$.getSubpath=function(b,c){if(this.type=="path")return a.getSubpath(this.attrs.path,b,c)};var ck=a.easing_formulas={linear:function(a){return a},"<":function(a){return A(a,1.7)},">":function(a){return A(a,.48)},"<>":function(a){var b=.48-a/1.04,c=w.sqrt(.1734+b*b),d=c-b,e=A(z(d),1/3)*(d<0?-1:1),f=-c-b,g=A(z(f),1/3)*(f<0?-1:1),h=e+g+.5;return(1-h)*3*h*h+h*h*h},backIn:function(a){var b=1.70158;return a*a*((b+1)*a-b)},backOut:function(a){a=a-1;var b=1.70158;return a*a*((b+1)*a+b)+1},elastic:function(a){if(a==!!a)return a;return A(2,-10*a)*w.sin((a-.075)*2*B/.3)+1},bounce:function(a){var b=7.5625,c=2.75,d;a<1/c?d=b*a*a:a<2/c?(a-=1.5/c,d=b*a*a+.75):a<2.5/c?(a-=2.25/c,d=b*a*a+.9375):(a-=2.625/c,d=b*a*a+.984375);return d}};ck.easeIn=ck["ease-in"]=ck["<"],ck.easeOut=ck["ease-out"]=ck[">"],ck.easeInOut=ck["ease-in-out"]=ck["<>"],ck["back-in"]=ck.backIn,ck["back-out"]=ck.backOut;var cl=[],cm=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||function(a){setTimeout(a,16)},cn=function(){var b=+(new Date),c=0;for(;c<cl.length;c++){var d=cl[c];if(d.el.removed||d.paused)continue;var e=b-d.start,f=d.ms,h=d.easing,i=d.from,j=d.diff,k=d.to,l=d.t,m=d.el,o={},p,r={},s;d.initstatus?(e=(d.initstatus*d.anim.top-d.prev)/(d.percent-d.prev)*f,d.status=d.initstatus,delete d.initstatus,d.stop&&cl.splice(c--,1)):d.status=(d.prev+(d.percent-d.prev)*(e/f))/d.anim.top;if(e<0)continue;if(e<f){var t=h(e/f);for(var u in i)if(i[g](u)){switch(U[u]){case C:p=+i[u]+t*f*j[u];break;case"colour":p="rgb("+[co(O(i[u].r+t*f*j[u].r)),co(O(i[u].g+t*f*j[u].g)),co(O(i[u].b+t*f*j[u].b))].join(",")+")";break;case"path":p=[];for(var v=0,w=i[u].length;v<w;v++){p[v]=[i[u][v][0]];for(var x=1,y=i[u][v].length;x<y;x++)p[v][x]=+i[u][v][x]+t*f*j[u][v][x];p[v]=p[v].join(q)}p=p.join(q);break;case"transform":if(j[u].real){p=[];for(v=0,w=i[u].length;v<w;v++){p[v]=[i[u][v][0]];for(x=1,y=i[u][v].length;x<y;x++)p[v][x]=i[u][v][x]+t*f*j[u][v][x]}}else{var z=function(a){return+i[u][a]+t*f*j[u][a]};p=[["m",z(0),z(1),z(2),z(3),z(4),z(5)]]}break;case"csv":if(u=="clip-rect"){p=[],v=4;while(v--)p[v]=+i[u][v]+t*f*j[u][v]}break;default:var A=[][n](i[u]);p=[],v=m.paper.customAttributes[u].length;while(v--)p[v]=+A[v]+t*f*j[u][v]}o[u]=p}m.attr(o),function(a,b,c){setTimeout(function(){eve("anim.frame."+a,b,c)})}(m.id,m,d.anim)}else{(function(b,c,d){setTimeout(function(){eve("anim.frame."+c.id,c,d),eve("anim.finish."+c.id,c,d),a.is(b,"function")&&b.call(c)})})(d.callback,m,d.anim),m.attr(k),cl.splice(c--,1);if(d.repeat>1&&!d.next){for(s in k)k[g](s)&&(r[s]=d.totalOrigin[s]);d.el.attr(r),cr(d.anim,d.el,d.anim.percents[0],null,d.totalOrigin,d.repeat-1)}d.next&&!d.stop&&cr(d.anim,d.el,d.next,null,d.totalOrigin,d.repeat)}}a.svg&&m&&m.paper&&m.paper.safari(),cl.length&&cm(cn)},co=function(a){return a>255?255:a<0?0:a};b$.animateWith=function(b,c,d,e,f,g){var h=d?a.animation(d,e,f,g):c,i=b.status(c);return this.animate(h).status(h,i*c.ms/h.ms)},b$.onAnimation=function(a){a?eve.on("anim.frame."+this.id,a):eve.unbind("anim.frame."+this.id);return this},cq.prototype.delay=function(a){var b=new cq(this.anim,this.ms);b.times=this.times,b.del=+a||0;return b},cq.prototype.repeat=function(a){var b=new cq(this.anim,this.ms);b.del=this.del,b.times=w.floor(x(a,0))||1;return b},a.animation=function(b,c,d,e){if(b instanceof cq)return b;if(a.is(d,"function")||!d)e=e||d||null,d=null;b=Object(b),c=+c||0;var f={},h,i;for(i in b)b[g](i)&&Q(i)!=i&&Q(i)+"%"!=i&&(h=!0,f[i]=b[i]);if(!h)return new cq(b,c);d&&(f.easing=d),e&&(f.callback=e);return new cq({100:f},c)},b$.animate=function(b,c,d,e){var f=this;if(f.removed){e&&e.call(f);return f}var g=b instanceof cq?b:a.animation(b,c,d,e);cr(g,f,g.percents[0],null,f.attr());return f},b$.setTime=function(a,b){a&&b!=null&&this.status(a,y(b,a.ms)/a.ms);return this},b$.status=function(a,b){var c=[],d=0,e,f;if(b!=null){cr(a,this,-1,y(b,1));return this}e=cl.length;for(;d<e;d++){f=cl[d];if(f.el.id==this.id&&(!a||f.anim==a)){if(a)return f.status;c.push({anim:f.anim,status:f.status})}}if(a)return 0;return c},b$.pause=function(a){for(var b=0;b<cl.length;b++)cl[b].el.id==this.id&&(!a||cl[b].anim==a)&&eve("anim.pause."+this.id,this,cl[b].anim)!==!1&&(cl[b].paused=!0);return this},b$.resume=function(a){for(var b=0;b<cl.length;b++)if(cl[b].el.id==this.id&&(!a||cl[b].anim==a)){var c=cl[b];eve("anim.resume."+this.id,this,c.anim)!==!1&&(delete c.paused,this.status(c.anim,c.status))}return this},b$.stop=function(a){for(var b=0;b<cl.length;b++)cl[b].el.id==this.id&&(!a||cl[b].anim==a)&&eve("anim.stop."+this.id,this,cl[b].anim)!==!1&&cl.splice(b--,1);return this},b$.toString=function(){return"Raphaël’s object"};var cs=function(a){this.items=[],this.length=0,this.type="set";if(a)for(var b=0,c=a.length;b<c;b++)a[b]&&(a[b].constructor==b$.constructor||a[b].constructor==cs)&&(this[this.items.length]=this.items[this.items.length]=a[b],this.length++)},ct=cs.prototype;ct.push=function(){var a,b;for(var c=0,d=arguments.length;c<d;c++)a=arguments[c],a&&(a.constructor==b$.constructor||a.constructor==cs)&&(b=this.items.length,this[b]=this.items[b]=a,this.length++);return this},ct.pop=function(){this.length&&delete this[this.length--];return this.items.pop()},ct.forEach=function(a,b){for(var c=0,d=this.items.length;c<d;c++)if(a.call(b,this.items[c],c)===!1)return this;return this};for(var cu in b$)b$[g](cu)&&(ct[cu]=function(a){return function(){var b=arguments;return this.forEach(function(c){c[a][m](c,b)})}}(cu));ct.attr=function(b,c){if(b&&a.is(b,E)&&a.is(b[0],"object"))for(var d=0,e=b.length;d<e;d++)this.items[d].attr(b[d]);else for(var f=0,g=this.items.length;f<g;f++)this.items[f].attr(b,c);return this},ct.clear=function(){while(this.length)this.pop()},ct.splice=function(a,b,c){a=a<0?x(this.length+a,0):a,b=x(0,y(this.length-a,b));var d=[],e=[],f=[],g;for(g=2;g<arguments.length;g++)f.push(arguments[g]);for(g=0;g<b;g++)e.push(this[a+g]);for(;g<this.length-a;g++)d.push(this[a+g]);var h=f.length;for(g=0;g<h+d.length;g++)this.items[a+g]=this[a+g]=g<h?f[g]:d[g-h];g=this.items.length=this.length-=b-h;while(this[g])delete this[g++];return new cs(e)},ct.exclude=function(a){for(var b=0,c=this.length;b<c;b++)if(this[b]==a){this.splice(b,1);return!0}},ct.animate=function(b,c,d,e){(a.is(d,"function")||!d)&&(e=d||null);var f=this.items.length,g=f,h,i=this,j;if(!f)return this;e&&(j=function(){!--f&&e.call(i)}),d=a.is(d,D)?d:j;var k=a.animation(b,c,d,j);h=this.items[--g].animate(k);while(g--)this.items[g]&&!this.items[g].removed&&this.items[g].animateWith(h,k);return this},ct.insertAfter=function(a){var b=this.items.length;while(b--)this.items[b].insertAfter(a);return this},ct.getBBox=function(){var a=[],b=[],c=[],d=[];for(var e=this.items.length;e--;)if(!this.items[e].removed){var f=this.items[e].getBBox();a.push(f.x),b.push(f.y),c.push(f.x+f.width),d.push(f.y+f.height)}a=y[m](0,a),b=y[m](0,b);return{x:a,y:b,width:x[m](0,c)-a,height:x[m](0,d)-b}},ct.clone=function(a){a=new cs;for(var b=0,c=this.items.length;b<c;b++)a.push(this.items[b].clone());return a},ct.toString=function(){return"Raphaël‘s set"},a.registerFont=function(a){if(!a.face)return a;this.fonts=this.fonts||{};var b={w:a.w,face:{},glyphs:{}},c=a.face["font-family"];for(var d in a.face)a.face[g](d)&&(b.face[d]=a.face[d]);this.fonts[c]?this.fonts[c].push(b):this.fonts[c]=[b];if(!a.svg){b.face["units-per-em"]=R(a.face["units-per-em"],10);for(var e in a.glyphs)if(a.glyphs[g](e)){var f=a.glyphs[e];b.glyphs[e]={w:f.w,k:{},d:f.d&&"M"+f.d.replace(/[mlcxtrv]/g,function(a){return{l:"L",c:"C",x:"z",t:"m",r:"l",v:"c"}[a]||"M"})+"z"};if(f.k)for(var h in f.k)f[g](h)&&(b.glyphs[e].k[h]=f.k[h])}}return a},k.getFont=function(b,c,d,e){e=e||"normal",d=d||"normal",c=+c||{normal:400,bold:700,lighter:300,bolder:800}[c]||400;if(!!a.fonts){var f=a.fonts[b];if(!f){var h=new RegExp("(^|\\s)"+b.replace(/[^\w\d\s+!~.:_-]/g,p)+"(\\s|$)","i");for(var i in a.fonts)if(a.fonts[g](i)&&h.test(i)){f=a.fonts[i];break}}var j;if(f)for(var k=0,l=f.length;k<l;k++){j=f[k];if(j.face["font-weight"]==c&&(j.face["font-style"]==d||!j.face["font-style"])&&j.face["font-stretch"]==e)break}return j}},k.print=function(b,d,e,f,g,h,i){h=h||"middle",i=x(y(i||0,1),-1);var j=this.set(),k=r(e)[s](p),l=0,m=p,n;a.is(f,e)&&(f=this.getFont(f));if(f){n=(g||16)/f.face["units-per-em"];var o=f.face.bbox[s](c),q=+o[0],t=+o[1]+(h=="baseline"?o[3]-o[1]+ +f.face.descent:(o[3]-o[1])/2);for(var u=0,v=k.length;u<v;u++){var w=u&&f.glyphs[k[u-1]]||{},z=f.glyphs[k[u]];l+=u?(w.w||f.w)+(w.k&&w.k[k[u]]||0)+f.w*i:0,z&&z.d&&j.push(this.path(z.d).attr({fill:"#000",stroke:"none",transform:[["t",l*n,0]]}))}j.transform(["...s",n,n,q,t,"t",(b-q)/n,(d-t)/n])}return j},k.add=function(b){if(a.is(b,"array")){var c=this.set(),e=0,f=b.length,h;for(;e<f;e++)h=b[e]||{},d[g](h.type)&&c.push(this[h.type]().attr(h))}return c},a.format=function(b,c){var d=a.is(c,E)?[0][n](c):arguments;b&&a.is(b,D)&&d.length-1&&(b=b.replace(e,function(a,b){return d[++b]==null?p:d[b]}));return b||p},a.fullfill=function(){var a=/\{([^\}]+)\}/g,b=/(?:(?:^|\.)(.+?)(?=\[|\.|$|\()|\[('|")(.+?)\2\])(\(\))?/g,c=function(a,c,d){var e=d;c.replace(b,function(a,b,c,d,f){b=b||d,e&&(b in e&&(e=e[b]),typeof e=="function"&&f&&(e=e()))}),e=(e==null||e==d?a:e)+"";return e};return function(b,d){return String(b).replace(a,function(a,b){return c(a,b,d)})}}(),a.ninja=function(){i.was?h.win.Raphael=i.is:delete Raphael;return a},a.st=ct,function(b,c,d){function e(){/in/.test(b.readyState)?setTimeout(e,9):a.eve("DOMload")}b.readyState==null&&b.addEventListener&&(b.addEventListener(c,d=function(){b.removeEventListener(c,d,!1),b.readyState="complete"},!1),b.readyState="loading"),e()}(document,"DOMContentLoaded"),i.was?h.win.Raphael=a:Raphael=a,eve.on("DOMload",function(){b=!0})}(),window.Raphael.svg&&function(a){var b="hasOwnProperty",c=String,d=parseFloat,e=parseInt,f=Math,g=f.max,h=f.abs,i=f.pow,j=/[, ]+/,k=a.eve,l="",m=" ",n="http://www.w3.org/1999/xlink",o={block:"M5,0 0,2.5 5,5z",classic:"M5,0 0,2.5 5,5 3.5,3 3.5,2z",diamond:"M2.5,0 5,2.5 2.5,5 0,2.5z",open:"M6,1 1,3.5 6,6",oval:"M2.5,0A2.5,2.5,0,0,1,2.5,5 2.5,2.5,0,0,1,2.5,0z"},p={};a.toString=function(){return"Your browser supports SVG.\nYou are running Raphaël "+this.version};var q=function(d,e){if(e){typeof d=="string"&&(d=q(d));for(var f in e)e[b](f)&&(f.substring(0,6)=="xlink:"?d.setAttributeNS(n,f.substring(6),c(e[f])):d.setAttribute(f,c(e[f])))}else d=a._g.doc.createElementNS("http://www.w3.org/2000/svg",d),d.style&&(d.style.webkitTapHighlightColor="rgba(0,0,0,0)");return d},r=function(b,e){var j="linear",k=b.id+e,m=.5,n=.5,o=b.node,p=b.paper,r=o.style,s=a._g.doc.getElementById(k);if(!s){e=c(e).replace(a._radial_gradient,function(a,b,c){j="radial";if(b&&c){m=d(b),n=d(c);var e=(n>.5)*2-1;i(m-.5,2)+i(n-.5,2)>.25&&(n=f.sqrt(.25-i(m-.5,2))*e+.5)&&n!=.5&&(n=n.toFixed(5)-1e-5*e)}return l}),e=e.split(/\s*\-\s*/);if(j=="linear"){var t=e.shift();t=-d(t);if(isNaN(t))return null;var u=[0,0,f.cos(a.rad(t)),f.sin(a.rad(t))],v=1/(g(h(u[2]),h(u[3]))||1);u[2]*=v,u[3]*=v,u[2]<0&&(u[0]=-u[2],u[2]=0),u[3]<0&&(u[1]=-u[3],u[3]=0)}var w=a._parseDots(e);if(!w)return null;k=k.replace(/[\(\)\s,\xb0#]/g,"_"),b.gradient&&k!=b.gradient.id&&(p.defs.removeChild(b.gradient),delete b.gradient);if(!b.gradient){s=q(j+"Gradient",{id:k}),b.gradient=s,q(s,j=="radial"?{fx:m,fy:n}:{x1:u[0],y1:u[1],x2:u[2],y2:u[3],gradientTransform:b.matrix.invert()}),p.defs.appendChild(s);for(var x=0,y=w.length;x<y;x++)s.appendChild(q("stop",{offset:w[x].offset?w[x].offset:x?"100%":"0%","stop-color":w[x].color||"#fff"}))}}q(o,{fill:"url(#"+k+")",opacity:1,"fill-opacity":1}),r.fill=l,r.opacity=1,r.fillOpacity=1;return 1},s=function(a){var b=a.getBBox(1);q(a.pattern,{patternTransform:a.matrix.invert()+" translate("+b.x+","+b.y+")"})},t=function(d,e,f){if(d.type=="path"){var g=c(e).toLowerCase().split("-"),h=d.paper,i=f?"end":"start",j=d.node,k=d.attrs,l=k["stroke-width"],n=g.length,r="classic",s,t,u,v,w,x=3,y=3,z=5;while(n--)switch(g[n]){case"block":case"classic":case"oval":case"diamond":case"open":case"none":r=g[n];break;case"wide":y=5;break;case"narrow":y=2;break;case"long":x=5;break;case"short":x=2}r=="open"?(x+=2,y+=2,z+=2,u=1,v=f?4:1,w={fill:"none",stroke:k.stroke}):(v=u=x/2,w={fill:k.stroke,stroke:"none"}),d._.arrows?f?(d._.arrows.endPath&&p[d._.arrows.endPath]--,d._.arrows.endMarker&&p[d._.arrows.endMarker]--):(d._.arrows.startPath&&p[d._.arrows.startPath]--,d._.arrows.startMarker&&p[d._.arrows.startMarker]--):d._.arrows={};if(r!="none"){var A="raphael-marker-"+r,B="raphael-marker-"+i+r+x+y;a._g.doc.getElementById(A)?p[A]++:(h.defs.appendChild(q(q("path"),{"stroke-linecap":"round",d:o[r],id:A})),p[A]=1);var C=a._g.doc.getElementById(B),D;C?(p[B]++,D=C.getElementsByTagName("use")[0]):(C=q(q("marker"),{id:B,markerHeight:y,markerWidth:x,orient:"auto",refX:v,refY:y/2}),D=q(q("use"),{"xlink:href":"#"+A,transform:(f?" rotate(180 "+x/2+" "+y/2+") ":m)+"scale("+x/z+","+y/z+")","stroke-width":1/((x/z+y/z)/2)}),C.appendChild(D),h.defs.appendChild(C),p[B]=1),q(D,w);var E=u*(r!="diamond"&&r!="oval");f?(s=d._.arrows.startdx*l||0,t=a.getTotalLength(k.path)-E*l):(s=E*l,t=a.getTotalLength(k.path)-(d._.arrows.enddx*l||0)),w={},w["marker-"+i]="url(#"+B+")";if(t||s)w.d=Raphael.getSubpath(k.path,s,t);q(j,w),d._.arrows[i+"Path"]=A,d._.arrows[i+"Marker"]=B,d._.arrows[i+"dx"]=E,d._.arrows[i+"Type"]=r,d._.arrows[i+"String"]=e}else f?(s=d._.arrows.startdx*l||0,t=a.getTotalLength(k.path)-s):(s=0,t=a.getTotalLength(k.path)-(d._.arrows.enddx*l||0)),d._.arrows[i+"Path"]&&q(j,{d:Raphael.getSubpath(k.path,s,t)}),delete d._.arrows[i+"Path"],delete d._.arrows[i+"Marker"],delete d._.arrows[i+"dx"],delete d._.arrows[i+"Type"],delete d._.arrows[i+"String"];for(w in p)if(p[b](w)&&!p[w]){var F=a._g.doc.getElementById(w);F&&F.parentNode.removeChild(F)}}},u={"":[0],none:[0],"-":[3,1],".":[1,1],"-.":[3,1,1,1],"-..":[3,1,1,1,1,1],". ":[1,3],"- ":[4,3],"--":[8,3],"- .":[4,3,1,3],"--.":[8,3,1,3],"--..":[8,3,1,3,1,3]},v=function(a,b,d){b=u[c(b).toLowerCase()];if(b){var e=a.attrs["stroke-width"]||"1",f={round:e,square:e,butt:0}[a.attrs["stroke-linecap"]||d["stroke-linecap"]]||0,g=[],h=b.length;while(h--)g[h]=b[h]*e+(h%2?1:-1)*f;q(a.node,{"stroke-dasharray":g.join(",")})}},w=function(d,f){var i=d.node,k=d.attrs,m=i.style.visibility;i.style.visibility="hidden";for(var o in f)if(f[b](o)){if(!a._availableAttrs[b](o))continue;var p=f[o];k[o]=p;switch(o){case"blur":d.blur(p);break;case"href":case"title":case"target":var u=i.parentNode;if(u.tagName.toLowerCase()!="a"){var w=q("a");u.insertBefore(w,i),w.appendChild(i),u=w}o=="target"&&p=="blank"?u.setAttributeNS(n,"show","new"):u.setAttributeNS(n,o,p);break;case"cursor":i.style.cursor=p;break;case"transform":d.transform(p);break;case"arrow-start":t(d,p);break;case"arrow-end":t(d,p,1);break;case"clip-rect":var x=c(p).split(j);if(x.length==4){d.clip&&d.clip.parentNode.parentNode.removeChild(d.clip.parentNode);var z=q("clipPath"),A=q("rect");z.id=a.createUUID(),q(A,{x:x[0],y:x[1],width:x[2],height:x[3]}),z.appendChild(A),d.paper.defs.appendChild(z),q(i,{"clip-path":"url(#"+z.id+")"}),d.clip=A}if(!p){var B=i.getAttribute("clip-path");if(B){var C=a._g.doc.getElementById(B.replace(/(^url\(#|\)$)/g,l));C&&C.parentNode.removeChild(C),q(i,{"clip-path":l}),delete d.clip}}break;case"path":d.type=="path"&&(q(i,{d:p?k.path=a._pathToAbsolute(p):"M0,0"}),d._.dirty=1,d._.arrows&&("startString"in d._.arrows&&t(d,d._.arrows.startString),"endString"in d._.arrows&&t(d,d._.arrows.endString,1)));break;case"width":i.setAttribute(o,p),d._.dirty=1;if(k.fx)o="x",p=k.x;else break;case"x":k.fx&&(p=-k.x-(k.width||0));case"rx":if(o=="rx"&&d.type=="rect")break;case"cx":i.setAttribute(o,p),d.pattern&&s(d),d._.dirty=1;break;case"height":i.setAttribute(o,p),d._.dirty=1;if(k.fy)o="y",p=k.y;else break;case"y":k.fy&&(p=-k.y-(k.height||0));case"ry":if(o=="ry"&&d.type=="rect")break;case"cy":i.setAttribute(o,p),d.pattern&&s(d),d._.dirty=1;break;case"r":d.type=="rect"?q(i,{rx:p,ry:p}):i.setAttribute(o,p),d._.dirty=1;break;case"src":d.type=="image"&&i.setAttributeNS(n,"href",p);break;case"stroke-width":if(d._.sx!=1||d._.sy!=1)p/=g(h(d._.sx),h(d._.sy))||1;d.paper._vbSize&&(p*=d.paper._vbSize),i.setAttribute(o,p),k["stroke-dasharray"]&&v(d,k["stroke-dasharray"],f),d._.arrows&&("startString"in d._.arrows&&t(d,d._.arrows.startString),"endString"in d._.arrows&&t(d,d._.arrows.endString,1));break;case"stroke-dasharray":v(d,p,f);break;case"fill":var D=c(p).match(a._ISURL);if(D){z=q("pattern");var F=q("image");z.id=a.createUUID(),q(z,{x:0,y:0,patternUnits:"userSpaceOnUse",height:1,width:1}),q(F,{x:0,y:0,"xlink:href":D[1]}),z.appendChild(F),function(b){a._preload(D[1],function(){var a=this.offsetWidth,c=this.offsetHeight;q(b,{width:a,height:c}),q(F,{width:a,height:c}),d.paper.safari()})}(z),d.paper.defs.appendChild(z),i.style.fill="url(#"+z.id+")",q(i,{fill:"url(#"+z.id+")"}),d.pattern=z,d.pattern&&s(d);break}var G=a.getRGB(p);if(!G.error)delete f.gradient,delete k.gradient,!a.is(k.opacity,"undefined")&&a.is(f.opacity,"undefined")&&q(i,{opacity:k.opacity}),!a.is(k["fill-opacity"],"undefined")&&a.is(f["fill-opacity"],"undefined")&&q(i,{"fill-opacity":k["fill-opacity"]});else if((d.type=="circle"||d.type=="ellipse"||c(p).charAt()!="r")&&r(d,p)){if("opacity"in k||"fill-opacity"in k){var H=a._g.doc.getElementById(i.getAttribute("fill").replace(/^url\(#|\)$/g,l));if(H){var I=H.getElementsByTagName("stop");q(I[I.length-1],{"stop-opacity":("opacity"in k?k.opacity:1)*("fill-opacity"in k?k["fill-opacity"]:1)})}}k.gradient=p,k.fill="none";break}G[b]("opacity")&&q(i,{"fill-opacity":G.opacity>1?G.opacity/100:G.opacity});case"stroke":G=a.getRGB(p),i.setAttribute(o,G.hex),o=="stroke"&&G[b]("opacity")&&q(i,{"stroke-opacity":G.opacity>1?G.opacity/100:G.opacity}),o=="stroke"&&d._.arrows&&("startString"in d._.arrows&&t(d,d._.arrows.startString),"endString"in d._.arrows&&t(d,d._.arrows.endString,1));break;case"gradient":(d.type=="circle"||d.type=="ellipse"||c(p).charAt()!="r")&&r(d,p);break;case"opacity":k.gradient&&!k[b]("stroke-opacity")&&q(i,{"stroke-opacity":p>1?p/100:p});case"fill-opacity":if(k.gradient){H=a._g.doc.getElementById(i.getAttribute("fill").replace(/^url\(#|\)$/g,l)),H&&(I=H.getElementsByTagName("stop"),q(I[I.length-1],{"stop-opacity":p}));break};default:o=="font-size"&&(p=e(p,10)+"px");var J=o.replace(/(\-.)/g,function(a){return a.substring(1).toUpperCase()});i.style[J]=p,d._.dirty=1,i.setAttribute(o,p)}}y(d,f),i.style.visibility=m},x=1.2,y=function(d,f){if(d.type=="text"&&!!(f[b]("text")||f[b]("font")||f[b]("font-size")||f[b]("x")||f[b]("y"))){var g=d.attrs,h=d.node,i=h.firstChild?e(a._g.doc.defaultView.getComputedStyle(h.firstChild,l).getPropertyValue("font-size"),10):10;if(f[b]("text")){g.text=f.text;while(h.firstChild)h.removeChild(h.firstChild);var j=c(f.text).split("\n"),k=[],m;for(var n=0,o=j.length;n<o;n++)m=q("tspan"),n&&q(m,{dy:i*x,x:g.x}),m.appendChild(a._g.doc.createTextNode(j[n])),h.appendChild(m),k[n]=m}else{k=h.getElementsByTagName("tspan");for(n=0,o=k.length;n<o;n++)n?q(k[n],{dy:i*x,x:g.x}):q(k[0],{dy:0})}q(h,{x:g.x,y:g.y}),d._.dirty=1;var p=d._getBBox(),r=g.y-(p.y+p.height/2);r&&a.is(r,"finite")&&q(k[0],{dy:r})}},z=function(b,c){var d=0,e=0;this[0]=this.node=b,b.raphael=!0,this.id=a._oid++,b.raphaelid=this.id,this.matrix=a.matrix(),this.realPath=null,this.paper=c,this.attrs=this.attrs||{},this._={transform:[],sx:1,sy:1,deg:0,dx:0,dy:0,dirty:1},!c.bottom&&(c.bottom=this),this.prev=c.top,c.top&&(c.top.next=this),c.top=this,this.next=null},A=a.el;z.prototype=A,A.constructor=z,a._engine.path=function(a,b){var c=q("path");b.canvas&&b.canvas.appendChild(c);var d=new z(c,b);d.type="path",w(d,{fill:"none",stroke:"#000",path:a});return d},A.rotate=function(a,b,e){if(this.removed)return this;a=c(a).split(j),a.length-1&&(b=d(a[1]),e=d(a[2])),a=d(a[0]),e==null&&(b=e);if(b==null||e==null){var f=this.getBBox(1);b=f.x+f.width/2,e=f.y+f.height/2}this.transform(this._.transform.concat([["r",a,b,e]]));return this},A.scale=function(a,b,e,f){if(this.removed)return this;a=c(a).split(j),a.length-1&&(b=d(a[1]),e=d(a[2]),f=d(a[3])),a=d(a[0]),b==null&&(b=a),f==null&&(e=f);if(e==null||f==null)var g=this.getBBox(1);e=e==null?g.x+g.width/2:e,f=f==null?g.y+g.height/2:f,this.transform(this._.transform.concat([["s",a,b,e,f]]));return this},A.translate=function(a,b){if(this.removed)return this;a=c(a).split(j),a.length-1&&(b=d(a[1])),a=d(a[0])||0,b=+b||0,this.transform(this._.transform.concat([["t",a,b]]));return this},A.transform=function(c){var d=this._;if(c==null)return d.transform;a._extractTransform(this,c),this.clip&&q(this.clip,{transform:this.matrix.invert()}),this.pattern&&s(this),this.node&&q(this.node,{transform:this.matrix});if(d.sx!=1||d.sy!=1){var e=this.attrs[b]("stroke-width")?this.attrs["stroke-width"]:1;this.attr({"stroke-width":e})}return this},A.hide=function(){!this.removed&&this.paper.safari(this.node.style.display="none");return this},A.show=function(){!this.removed&&this.paper.safari(this.node.style.display="");return this},A.remove=function(){if(!this.removed){var b=this.paper;b.__set__&&b.__set__.exclude(this),k.unbind("*.*."+this.id),this.gradient&&b.defs.removeChild(this.gradient),a._tear(this,b),this.node.parentNode.removeChild(this.node);for(var c in this)this[c]=typeof this[c]=="function"?a._removedFactory(c):null;this.removed=!0}},A._getBBox=function(){if(this.node.style.display=="none"){this.show();var a=!0}var b={};try{b=this.node.getBBox()}catch(c){}finally{b=b||{}}a&&this.hide();return b},A.attr=function(c,d){if(this.removed)return this;if(c==null){var e={};for(var f in this.attrs)this.attrs[b](f)&&(e[f]=this.attrs[f]);e.gradient&&e.fill=="none"&&(e.fill=e.gradient)&&delete e.gradient,e.transform=this._.transform;return e}if(d==null&&a.is(c,"string")){if(c=="fill"&&this.attrs.fill=="none"&&this.attrs.gradient)return this.attrs.gradient;if(c=="transform")return this._.transform;var g=c.split(j),h={};for(var i=0,l=g.length;i<l;i++)c=g[i],c in this.attrs?h[c]=this.attrs[c]:a.is(this.paper.customAttributes[c],"function")?h[c]=this.paper.customAttributes[c].def:h[c]=a._availableAttrs[c];return l-1?h:h[g[0]]}if(d==null&&a.is(c,"array")){h={};for(i=0,l=c.length;i<l;i++)h[c[i]]=this.attr(c[i]);return h}if(d!=null){var m={};m[c]=d}else c!=null&&a.is(c,"object")&&(m=c);for(var n in m)k("attr."+n+"."+this.id,this,m[n]);for(n in this.paper.customAttributes)if(this.paper.customAttributes[b](n)&&m[b](n)&&a.is(this.paper.customAttributes[n],"function")){var o=this.paper.customAttributes[n].apply(this,[].concat(m[n]));this.attrs[n]=m[n];for(var p in o)o[b](p)&&(m[p]=o[p])}w(this,m);return this},A.toFront=function(){if(this.removed)return this;this.node.parentNode.tagName.toLowerCase()=="a"?this.node.parentNode.parentNode.appendChild(this.node.parentNode):this.node.parentNode.appendChild(this.node);var b=this.paper;b.top!=this&&a._tofront(this,b);return this},A.toBack=function(){if(this.removed)return this;var b=this.node.parentNode;b.tagName.toLowerCase()=="a"?b.parentNode.insertBefore(this.node.parentNode,this.node.parentNode.parentNode.firstChild):b.firstChild!=this.node&&b.insertBefore(this.node,this.node.parentNode.firstChild),a._toback(this,this.paper);var c=this.paper;return this},A.insertAfter=function(b){if(this.removed)return this;var c=b.node||b[b.length-1].node;c.nextSibling?c.parentNode.insertBefore(this.node,c.nextSibling):c.parentNode.appendChild(this.node),a._insertafter(this,b,this.paper);return this},A.insertBefore=function(b){if(this.removed)return this;var c=b.node||b[0].node;c.parentNode.insertBefore(this.node,c),a._insertbefore(this,b,this.paper);return this},A.blur=function(b){var c=this;if(+b!==0){var d=q("filter"),e=q("feGaussianBlur");c.attrs.blur=b,d.id=a.createUUID(),q(e,{stdDeviation:+b||1.5}),d.appendChild(e),c.paper.defs.appendChild(d),c._blur=d,q(c.node,{filter:"url(#"+d.id+")"})}else c._blur&&(c._blur.parentNode.removeChild(c._blur),delete c._blur,delete c.attrs.blur),c.node.removeAttribute("filter")},a._engine.circle=function(a,b,c,d){var e=q("circle");a.canvas&&a.canvas.appendChild(e);var f=new z(e,a);f.attrs={cx:b,cy:c,r:d,fill:"none",stroke:"#000"},f.type="circle",q(e,f.attrs);return f},a._engine.rect=function(a,b,c,d,e,f){var g=q("rect");a.canvas&&a.canvas.appendChild(g);var h=new z(g,a);h.attrs={x:b,y:c,width:d,height:e,r:f||0,rx:f||0,ry:f||0,fill:"none",stroke:"#000"},h.type="rect",q(g,h.attrs);return h},a._engine.ellipse=function(a,b,c,d,e){var f=q("ellipse");a.canvas&&a.canvas.appendChild(f);var g=new z(f,a);g.attrs={cx:b,cy:c,rx:d,ry:e,fill:"none",stroke:"#000"},g.type="ellipse",q(f,g.attrs);return g},a._engine.image=function(a,b,c,d,e,f){var g=q("image");q(g,{x:c,y:d,width:e,height:f,preserveAspectRatio:"none"}),g.setAttributeNS(n,"href",b),a.canvas&&a.canvas.appendChild(g);var h=new z(g,a);h.attrs={x:c,y:d,width:e,height:f,src:b},h.type="image";return h},a._engine.text=function(b,c,d,e){var f=q("text");b.canvas&&b.canvas.appendChild(f);var g=new z(f,b);g.attrs={x:c,y:d,"text-anchor":"middle",text:e,font:a._availableAttrs.font,stroke:"none",fill:"#000"},g.type="text",w(g,g.attrs);return g},a._engine.setSize=function(a,b){this.width=a||this.width,this.height=b||this.height,this.canvas.setAttribute("width",this.width),this.canvas.setAttribute("height",this.height),this._viewBox&&this.setViewBox.apply(this,this._viewBox);return this},a._engine.create=function(){var b=a._getContainer.apply(0,arguments),c=b&&b.container,d=b.x,e=b.y,f=b.width,g=b.height;if(!c)throw new Error("SVG container not found.");var h=q("svg"),i="overflow:hidden;",j;d=d||0,e=e||0,f=f||512,g=g||342,q(h,{height:g,version:1.1,width:f,xmlns:"http://www.w3.org/2000/svg"}),c==1?(h.style.cssText=i+"position:absolute;left:"+d+"px;top:"+e+"px",a._g.doc.body.appendChild(h),j=1):(h.style.cssText=i+"position:relative",c.firstChild?c.insertBefore(h,c.firstChild):c.appendChild(h)),c=new a._Paper,c.width=f,c.height=g,c.canvas=h,c.clear(),c._left=c._top=0,j&&(c.renderfix=function(){}),c.renderfix();return c},a._engine.setViewBox=function(a,b,c,d,e){k("setViewBox",this,this._viewBox,[a,b,c,d,e]);var f=g(c/this.width,d/this.height),h=this.top,i=e?"meet":"xMinYMin",j,l;a==null?(this._vbSize&&(f=1),delete this._vbSize,j="0 0 "+this.width+m+this.height):(this._vbSize=f,j=a+m+b+m+c+m+d),q(this.canvas,{viewBox:j,preserveAspectRatio:i});while(f&&h)l="stroke-width"in h.attrs?h.attrs["stroke-width"]:1,h.attr({"stroke-width":l}),h._.dirty=1,h._.dirtyT=1,h=h.prev;this._viewBox=[a,b,c,d,!!e];return this},a.prototype.renderfix=function(){var a=this.canvas,b=a.style,c=a.getScreenCTM()||a.createSVGMatrix(),d=-c.e%1,e=-c.f%1;if(d||e)d&&(this._left=(this._left+d)%1,b.left=this._left+"px"),e&&(this._top=(this._top+e)%1,b.top=this._top+"px")},a.prototype.clear=function(){a.eve("clear",this);var b=this.canvas;while(b.firstChild)b.removeChild(b.firstChild);this.bottom=this.top=null,(this.desc=q("desc")).appendChild(a._g.doc.createTextNode("Created with Raphaël "+a.version)),b.appendChild(this.desc),b.appendChild(this.defs=q("defs"))},a.prototype.remove=function(){k("remove",this),this.canvas.parentNode&&this.canvas.parentNode.removeChild(this.canvas);for(var b in this)this[b]=typeof this[b]=="function"?a._removedFactory(b):null};var B=a.st;for(var C in A)A[b](C)&&!B[b](C)&&(B[C]=function(a){return function(){var b=arguments;return this.forEach(function(c){c[a].apply(c,b)})}}(C))}(window.Raphael),window.Raphael.vml&&function(a){var b="hasOwnProperty",c=String,d=parseFloat,e=Math,f=e.round,g=e.max,h=e.min,i=e.abs,j="fill",k=/[, ]+/,l=a.eve,m=" progid:DXImageTransform.Microsoft",n=" ",o="",p={M:"m",L:"l",C:"c",Z:"x",m:"t",l:"r",c:"v",z:"x"},q=/([clmz]),?([^clmz]*)/gi,r=/ progid:\S+Blur\([^\)]+\)/g,s=/-?[^,\s-]+/g,t="position:absolute;left:0;top:0;width:1px;height:1px",u=21600,v={path:1,rect:1,image:1},w={circle:1,ellipse:1},x=function(b){var d=/[ahqstv]/ig,e=a._pathToAbsolute;c(b).match(d)&&(e=a._path2curve),d=/[clmz]/g;if(e==a._pathToAbsolute&&!c(b).match(d)){var g=c(b).replace(q,function(a,b,c){var d=[],e=b.toLowerCase()=="m",g=p[b];c.replace(s,function(a){e&&d.length==2&&(g+=d+p[b=="m"?"l":"L"],d=[]),d.push(f(a*u))});return g+d});return g}var h=e(b),i,j;g=[];for(var k=0,l=h.length;k<l;k++){i=h[k],j=h[k][0].toLowerCase(),j=="z"&&(j="x");for(var m=1,r=i.length;m<r;m++)j+=f(i[m]*u)+(m!=r-1?",":o);g.push(j)}return g.join(n)},y=function(b,c,d){var e=a.matrix();e.rotate(-b,.5,.5);return{dx:e.x(c,d),dy:e.y(c,d)}},z=function(a,b,c,d,e,f){var g=a._,h=a.matrix,k=g.fillpos,l=a.node,m=l.style,o=1,p="",q,r=u/b,s=u/c;m.visibility="hidden";if(!!b&&!!c){l.coordsize=i(r)+n+i(s),m.rotation=f*(b*c<0?-1:1);if(f){var t=y(f,d,e);d=t.dx,e=t.dy}b<0&&(p+="x"),c<0&&(p+=" y")&&(o=-1),m.flip=p,l.coordorigin=d*-r+n+e*-s;if(k||g.fillsize){var v=l.getElementsByTagName(j);v=v&&v[0],l.removeChild(v),k&&(t=y(f,h.x(k[0],k[1]),h.y(k[0],k[1])),v.position=t.dx*o+n+t.dy*o),g.fillsize&&(v.size=g.fillsize[0]*i(b)+n+g.fillsize[1]*i(c)),l.appendChild(v)}m.visibility="visible"}};a.toString=function(){return"Your browser doesn’t support SVG. Falling down to VML.\nYou are running Raphaël "+this.version};var A=function(a,b,d){var e=c(b).toLowerCase().split("-"),f=d?"end":"start",g=e.length,h="classic",i="medium",j="medium";while(g--)switch(e[g]){case"block":case"classic":case"oval":case"diamond":case"open":case"none":h=e[g];break;case"wide":case"narrow":j=e[g];break;case"long":case"short":i=e[g]}var k=a.node.getElementsByTagName("stroke")[0];k[f+"arrow"]=h,k[f+"arrowlength"]=i,k[f+"arrowwidth"]=j},B=function(e,i){e.attrs=e.attrs||{};var l=e.node,m=e.attrs,p=l.style,q,r=v[e.type]&&(i.x!=m.x||i.y!=m.y||i.width!=m.width||i.height!=m.height||i.cx!=m.cx||i.cy!=m.cy||i.rx!=m.rx||i.ry!=m.ry||i.r!=m.r),s=w[e.type]&&(m.cx!=i.cx||m.cy!=i.cy||m.r!=i.r||m.rx!=i.rx||m.ry!=i.ry),t=e;for(var y in i)i[b](y)&&(m[y]=i[y]);r&&(m.path=a._getPath[e.type](e),e._.dirty=1),i.href&&(l.href=i.href),i.title&&(l.title=i.title),i.target&&(l.target=i.target),i.cursor&&(p.cursor=i.cursor),"blur"in i&&e.blur(i.blur);if(i.path&&e.type=="path"||r)l.path=x(~c(m.path).toLowerCase().indexOf("r")?a._pathToAbsolute(m.path):m.path),e.type=="image"&&(e._.fillpos=[m.x,m.y],e._.fillsize=[m.width,m.height],z(e,1,1,0,0,0));"transform"in i&&e.transform(i.transform);if(s){var B=+m.cx,D=+m.cy,E=+m.rx||+m.r||0,G=+m.ry||+m.r||0;l.path=a.format("ar{0},{1},{2},{3},{4},{1},{4},{1}x",f((B-E)*u),f((D-G)*u),f((B+E)*u),f((D+G)*u),f(B*u))}if("clip-rect"in i){var H=c(i["clip-rect"]).split(k);if(H.length==4){H[2]=+H[2]+ +H[0],H[3]=+H[3]+ +H[1];var I=l.clipRect||a._g.doc.createElement("div"),J=I.style;J.clip=a.format("rect({1}px {2}px {3}px {0}px)",H),l.clipRect||(J.position="absolute",J.top=0,J.left=0,J.width=e.paper.width+"px",J.height=e.paper.height+"px",l.parentNode.insertBefore(I,l),I.appendChild(l),l.clipRect=I)}i["clip-rect"]||l.clipRect&&(l.clipRect.style.clip="auto")}if(e.textpath){var K=e.textpath.style;i.font&&(K.font=i.font),i["font-family"]&&(K.fontFamily='"'+i["font-family"].split(",")[0].replace(/^['"]+|['"]+$/g,o)+'"'),i["font-size"]&&(K.fontSize=i["font-size"]),i["font-weight"]&&(K.fontWeight=i["font-weight"]),i["font-style"]&&(K.fontStyle=i["font-style"])}"arrow-start"in i&&A(t,i["arrow-start"]),"arrow-end"in i&&A(t,i["arrow-end"],1);if(i.opacity!=null||i["stroke-width"]!=null||i.fill!=null||i.src!=null||i.stroke!=null||i["stroke-width"]!=null||i["stroke-opacity"]!=null||i["fill-opacity"]!=null||i["stroke-dasharray"]!=null||i["stroke-miterlimit"]!=null||i["stroke-linejoin"]!=null||i["stroke-linecap"]!=null){var L=l.getElementsByTagName(j),M=!1;L=L&&L[0],!L&&(M=L=F(j)),e.type=="image"&&i.src&&(L.src=i.src),i.fill&&(L.on=!0);if(L.on==null||i.fill=="none"||i.fill===null)L.on=!1;if(L.on&&i.fill){var N=c(i.fill).match(a._ISURL);if(N){L.parentNode==l&&l.removeChild(L),L.rotate=!0,L.src=N[1],L.type="tile";var O=e.getBBox(1);L.position=O.x+n+O.y,e._.fillpos=[O.x,O.y],a._preload(N[1],function(){e._.fillsize=[this.offsetWidth,this.offsetHeight]})}else L.color=a.getRGB(i.fill).hex,L.src=o,L.type="solid",a.getRGB(i.fill).error&&(t.type in{circle:1,ellipse:1}||c(i.fill).charAt()!="r")&&C(t,i.fill,L)&&(m.fill="none",m.gradient=i.fill,L.rotate=!1)}if("fill-opacity"in i||"opacity"in i){var P=((+m["fill-opacity"]+1||2)-1)*((+m.opacity+1||2)-1)*((+a.getRGB(i.fill).o+1||2)-1);P=h(g(P,0),1),L.opacity=P,L.src&&(L.color="none")}l.appendChild(L);var Q=l.getElementsByTagName("stroke")&&l.getElementsByTagName("stroke")[0],T=!1;!Q&&(T=Q=F("stroke"));if(i.stroke&&i.stroke!="none"||i["stroke-width"]||i["stroke-opacity"]!=null||i["stroke-dasharray"]||i["stroke-miterlimit"]||i["stroke-linejoin"]||i["stroke-linecap"])Q.on=!0;(i.stroke=="none"||i.stroke===null||Q.on==null||i.stroke==0||i["stroke-width"]==0)&&(Q.on=!1);var U=a.getRGB(i.stroke);Q.on&&i.stroke&&(Q.color=U.hex),P=((+m["stroke-opacity"]+1||2)-1)*((+m.opacity+1||2)-1)*((+U.o+1||2)-1);var V=(d(i["stroke-width"])||1)*.75;P=h(g(P,0),1),i["stroke-width"]==null&&(V=m["stroke-width"]),i["stroke-width"]&&(Q.weight=V),V&&V<1&&(P*=V)&&(Q.weight=1),Q.opacity=P,i["stroke-linejoin"]&&(Q.joinstyle=i["stroke-linejoin"]||"miter"),Q.miterlimit=i["stroke-miterlimit"]||8,i["stroke-linecap"]&&(Q.endcap=i["stroke-linecap"]=="butt"?"flat":i["stroke-linecap"]=="square"?"square":"round");if(i["stroke-dasharray"]){var W={"-":"shortdash",".":"shortdot","-.":"shortdashdot","-..":"shortdashdotdot",". ":"dot","- ":"dash","--":"longdash","- .":"dashdot","--.":"longdashdot","--..":"longdashdotdot"};Q.dashstyle=W[b](i["stroke-dasharray"])?W[i["stroke-dasharray"]]:o}T&&l.appendChild(Q)}if(t.type=="text"){t.paper.canvas.style.display=o;var X=t.paper.span,Y=100,Z=m.font&&m.font.match(/\d+(?:\.\d*)?(?=px)/);p=X.style,m.font&&(p.font=m.font),m["font-family"]&&(p.fontFamily=m["font-family"]),m["font-weight"]&&(p.fontWeight=m["font-weight"]),m["font-style"]&&(p.fontStyle=m["font-style"]),Z=d(m["font-size"]||Z&&Z[0])||10,p.fontSize=Z*Y+"px",t.textpath.string&&(X.innerHTML=c(t.textpath.string).replace(/</g,"&#60;").replace(/&/g,"&#38;").replace(/\n/g,"<br>"));var $=X.getBoundingClientRect();t.W=m.w=($.right-$.left)/Y,t.H=m.h=($.bottom-$.top)/Y,t.X=m.x,t.Y=m.y+t.H/2,("x"in i||"y"in i)&&(t.path.v=a.format("m{0},{1}l{2},{1}",f(m.x*u),f(m.y*u),f(m.x*u)+1));var _=["x","y","text","font","font-family","font-weight","font-style","font-size"];for(var ba=0,bb=_.length;ba<bb;ba++)if(_[ba]in i){t._.dirty=1;break}switch(m["text-anchor"]){case"start":t.textpath.style["v-text-align"]="left",t.bbx=t.W/2;break;case"end":t.textpath.style["v-text-align"]="right",t.bbx=-t.W/2;break;default:t.textpath.style["v-text-align"]="center",t.bbx=0}t.textpath.style["v-text-kern"]=!0}},C=function(b,f,g){b.attrs=b.attrs||{};var h=b.attrs,i=Math.pow,j,k,l="linear",m=".5 .5";b.attrs.gradient=f,f=c(f).replace(a._radial_gradient,function(a,b,c){l="radial",b&&c&&(b=d(b),c=d(c),i(b-.5,2)+i(c-.5,2)>.25&&(c=e.sqrt(.25-i(b-.5,2))*((c>.5)*2-1)+.5),m=b+n+c);return o}),f=f.split(/\s*\-\s*/);if(l=="linear"){var p=f.shift();p=-d(p);if(isNaN(p))return null}var q=a._parseDots(f);if(!q)return null;b=b.shape||b.node;if(q.length){b.removeChild(g),g.on=!0,g.method="none",g.color=q[0].color,g.color2=q[q.length-1].color;var r=[];for(var s=0,t=q.length;s<t;s++)q[s].offset&&r.push(q[s].offset+n+q[s].color);g.colors=r.length?r.join():"0% "+g.color,l=="radial"?(g.type="gradientTitle",g.focus="100%",g.focussize="0 0",g.focusposition=m,g.angle=0):(g.type="gradient",g.angle=(270-p)%360),b.appendChild(g)}return 1},D=function(b,c){this[0]=this.node=b,b.raphael=!0,this.id=a._oid++,b.raphaelid=this.id,this.X=0,this.Y=0,this.attrs={},this.paper=c,this.matrix=a.matrix(),this._={transform:[],sx:1,sy:1,dx:0,dy:0,deg:0,dirty:1,dirtyT:1},!c.bottom&&(c.bottom=this),this.prev=c.top,c.top&&(c.top.next=this),c.top=this,this.next=null},E=a.el;D.prototype=E,E.constructor=D,E.transform=function(b){if(b==null)return this._.transform;var d=this.paper._viewBoxShift,e=d?"s"+[d.scale,d.scale]+"-1-1t"+[d.dx,d.dy]:o,f;d&&(f=b=c(b).replace(/\.{3}|\u2026/g,this._.transform||o)),a._extractTransform(this,e+b);var g=this.matrix.clone(),h=this.skew,i=this.node,j,k=~c(this.attrs.fill).indexOf("-"),l=!c(this.attrs.fill).indexOf("url(");g.translate(-0.5,-0.5);if(l||k||this.type=="image"){h.matrix="1 0 0 1",h.offset="0 0",j=g.split();if(k&&j.noRotation||!j.isSimple){i.style.filter=g.toFilter();var m=this.getBBox(),p=this.getBBox(1),q=m.x-p.x,r=m.y-p.y;i.coordorigin=q*-u+n+r*-u,z(this,1,1,q,r,0)}else i.style.filter=o,z(this,j.scalex,j.scaley,j.dx,j.dy,j.rotate)}else i.style.filter=o,h.matrix=c(g),h.offset=g.offset();f&&(this._.transform=f);return this},E.rotate=function(a,b,e){if(this.removed)return this;if(a!=null){a=c(a).split(k),a.length-1&&(b=d(a[1]),e=d(a[2])),a=d(a[0]),e==null&&(b=e);if(b==null||e==null){var f=this.getBBox(1);b=f.x+f.width/2,e=f.y+f.height/2}this._.dirtyT=1,this.transform(this._.transform.concat([["r",a,b,e]]));return this}},E.translate=function(a,b){if(this.removed)return this;a=c(a).split(k),a.length-1&&(b=d(a[1])),a=d(a[0])||0,b=+b||0,this._.bbox&&(this._.bbox.x+=a,this._.bbox.y+=b),this.transform(this._.transform.concat([["t",a,b]]));return this},E.scale=function(a,b,e,f){if(this.removed)return this;a=c(a).split(k),a.length-1&&(b=d(a[1]),e=d(a[2]),f=d(a[3]),isNaN(e)&&(e=null),isNaN(f)&&(f=null)),a=d(a[0]),b==null&&(b=a),f==null&&(e=f);if(e==null||f==null)var g=this.getBBox(1);e=e==null?g.x+g.width/2:e,f=f==null?g.y+g.height/2:f,this.transform(this._.transform.concat([["s",a,b,e,f]])),this._.dirtyT=1;return this},E.hide=function(){!this.removed&&(this.node.style.display="none");return this},E.show=function(){!this.removed&&(this.node.style.display=o);return this},E._getBBox=function(){if(this.removed)return{};return{x:this.X+(this.bbx||0)-this.W/2,y:this.Y-this.H,width:this.W,height:this.H}},E.remove=function(){if(!this.removed){this.paper.__set__&&this.paper.__set__.exclude(this),a.eve.unbind("*.*."+this.id),a._tear(this,this.paper),this.node.parentNode.removeChild(this.node),this.shape&&this.shape.parentNode.removeChild(this.shape);for(var b in this)this[b]=typeof this[b]=="function"?a._removedFactory(b):null;this.removed=!0}},E.attr=function(c,d){if(this.removed)return this;if(c==null){var e={};for(var f in this.attrs)this.attrs[b](f)&&(e[f]=this.attrs[f]);e.gradient&&e.fill=="none"&&(e.fill=e.gradient)&&delete e.gradient,e.transform=this._.transform;return e}if(d==null&&a.is(c,"string")){if(c==j&&this.attrs.fill=="none"&&this.attrs.gradient)return this.attrs.gradient;var g=c.split(k),h={};for(var i=0,m=g.length;i<m;i++)c=g[i],c in this.attrs?h[c]=this.attrs[c]:a.is(this.paper.customAttributes[c],"function")?h[c]=this.paper.customAttributes[c].def:h[c]=a._availableAttrs[c];return m-1?h:h[g[0]]}if(this.attrs&&d==null&&a.is(c,"array")){h={};for(i=0,m=c.length;i<m;i++)h[c[i]]=this.attr(c[i]);return h}var n;d!=null&&(n={},n[c]=d),d==null&&a.is(c,"object")&&(n=c);for(var o in n)l("attr."+o+"."+this.id,this,n[o]);if(n){for(o in this.paper.customAttributes)if(this.paper.customAttributes[b](o)&&n[b](o)&&a.is(this.paper.customAttributes[o],"function")){var p=this.paper.customAttributes[o].apply(this,[].concat(n[o]));this.attrs[o]=n[o];for(var q in p)p[b](q)&&(n[q]=p[q])}n.text&&this.type=="text"&&(this.textpath.string=n.text),B(this,n)}return this},E.toFront=function(){!this.removed&&this.node.parentNode.appendChild(this.node),this.paper&&this.paper.top!=this&&a._tofront(this,this.paper);return this},E.toBack=function(){if(this.removed)return this;this.node.parentNode.firstChild!=this.node&&(this.node.parentNode.insertBefore(this.node,this.node.parentNode.firstChild),a._toback(this,this.paper));return this},E.insertAfter=function(b){if(this.removed)return this;b.constructor==a.st.constructor&&(b=b[b.length-1]),b.node.nextSibling?b.node.parentNode.insertBefore(this.node,b.node.nextSibling):b.node.parentNode.appendChild(this.node),a._insertafter(this,b,this.paper);return this},E.insertBefore=function(b){if(this.removed)return this;b.constructor==a.st.constructor&&(b=b[0]),b.node.parentNode.insertBefore(this.node,b.node),a._insertbefore(this,b,this.paper);return this},E.blur=function(b){var c=this.node.runtimeStyle,d=c.filter;d=d.replace(r,o),+b!==0?(this.attrs.blur=b,c.filter=d+n+m+".Blur(pixelradius="+(+b||1.5)+")",c.margin=a.format("-{0}px 0 0 -{0}px",f(+b||1.5))):(c.filter=d,c.margin=0,delete this.attrs.blur)},a._engine.path=function(a,b){var c=F("shape");c.style.cssText=t,c.coordsize=u+n+u,c.coordorigin=b.coordorigin;var d=new D(c,b),e={fill:"none",stroke:"#000"};a&&(e.path=a),d.type="path",d.path=[],d.Path=o,B(d,e),b.canvas.appendChild(c);var f=F("skew");f.on=!0,c.appendChild(f),d.skew=f,d.transform(o);return d},a._engine.rect=function(b,c,d,e,f,g){var h=a._rectPath(c,d,e,f,g),i=b.path(h),j=i.attrs;i.X=j.x=c,i.Y=j.y=d,i.W=j.width=e,i.H=j.height=f,j.r=g,j.path=h,i.type="rect";return i},a._engine.ellipse=function(a,b,c,d,e){var f=a.path(),g=f.attrs;f.X=b-d,f.Y=c-e,f.W=d*2,f.H=e*2,f.type="ellipse",B(f,{cx:b,cy:c,rx:d,ry:e});return f},a._engine.circle=function(a,b,c,d){var e=a.path(),f=e.attrs;e.X=b-d,e.Y=c-d,e.W=e.H=d*2,e.type="circle",B(e,{cx:b,cy:c,r:d});return e},a._engine.image=function(b,c,d,e,f,g){var h=a._rectPath(d,e,f,g),i=b.path(h).attr({stroke:"none"}),k=i.attrs,l=i.node,m=l.getElementsByTagName(j)[0];k.src=c,i.X=k.x=d,i.Y=k.y=e,i.W=k.width=f,i.H=k.height=g,k.path=h,i.type="image",m.parentNode==l&&l.removeChild(m),m.rotate=!0,m.src=c,m.type="tile",i._.fillpos=[d,e],i._.fillsize=[f,g],l.appendChild(m),z(i,1,1,0,0,0);return i},a._engine.text=function(b,d,e,g){var h=F("shape"),i=F("path"),j=F("textpath");d=d||0,e=e||0,g=g||"",i.v=a.format("m{0},{1}l{2},{1}",f(d*u),f(e*u),f(d*u)+1),i.textpathok=!0,j.string=c(g),j.on=!0,h.style.cssText=t,h.coordsize=u+n+u,h.coordorigin="0 0";var k=new D(h,b),l={fill:"#000",stroke:"none",font:a._availableAttrs.font,text:g};k.shape=h,k.path=i,k.textpath=j,k.type="text",k.attrs.text=c(g),k.attrs.x=d,k.attrs.y=e,k.attrs.w=1,k.attrs.h=1,B(k,l),h.appendChild(j),h.appendChild(i),b.canvas.appendChild(h);var m=F("skew");m.on=!0,h.appendChild(m),k.skew=m,k.transform(o);return k},a._engine.setSize=function(b,c){var d=this.canvas.style;this.width=b,this.height=c,b==+b&&(b+="px"),c==+c&&(c+="px"),d.width=b,d.height=c,d.clip="rect(0 "+b+" "+c+" 0)",this._viewBox&&a._engine.setViewBox.apply(this,this._viewBox);return this},a._engine.setViewBox=function(b,c,d,e,f){a.eve("setViewBox",this,this._viewBox,[b,c,d,e,f]);var h=this.width,i=this.height,j=1/g(d/h,e/i),k,l;f&&(k=i/e,l=h/d,d*k<h&&(b-=(h-d*k)/2/k),e*l<i&&(c-=(i-e*l)/2/l)),this._viewBox=[b,c,d,e,!!f],this._viewBoxShift={dx:-b,dy:-c,scale:j},this.forEach(function(a){a.transform("...")});return this};var F;a._engine.initWin=function(a){var b=a.document;b.createStyleSheet().addRule(".rvml","behavior:url(#default#VML)");try{!b.namespaces.rvml&&b.namespaces.add("rvml","urn:schemas-microsoft-com:vml"),F=function(a){return b.createElement("<rvml:"+a+' class="rvml">')}}catch(c){F=function(a){return b.createElement("<"+a+' xmlns="urn:schemas-microsoft.com:vml" class="rvml">')}}},a._engine.initWin(a._g.win),a._engine.create=function(){var b=a._getContainer.apply(0,arguments),c=b.container,d=b.height,e,f=b.width,g=b.x,h=b.y;if(!c)throw new Error("VML container not found.");var i=new a._Paper,j=i.canvas=a._g.doc.createElement("div"),k=j.style;g=g||0,h=h||0,f=f||512,d=d||342,i.width=f,i.height=d,f==+f&&(f+="px"),d==+d&&(d+="px"),i.coordsize=u*1e3+n+u*1e3,i.coordorigin="0 0",i.span=a._g.doc.createElement("span"),i.span.style.cssText="position:absolute;left:-9999em;top:-9999em;padding:0;margin:0;line-height:1;",j.appendChild(i.span),k.cssText=a.format("top:0;left:0;width:{0};height:{1};display:inline-block;position:relative;clip:rect(0 {0} {1} 0);overflow:hidden",f,d),c==1?(a._g.doc.body.appendChild(j),k.left=g+"px",k.top=h+"px",k.position="absolute"):c.firstChild?c.insertBefore(j,c.firstChild):c.appendChild(j),i.renderfix=function(){};return i},a.prototype.clear=function(){a.eve("clear",this),this.canvas.innerHTML=o,this.span=a._g.doc.createElement("span"),this.span.style.cssText="position:absolute;left:-9999em;top:-9999em;padding:0;margin:0;line-height:1;display:inline;",this.canvas.appendChild(this.span),this.bottom=this.top=null},a.prototype.remove=function(){a.eve("remove",this),this.canvas.parentNode.removeChild(this.canvas);for(var b in this)this[b]=typeof this[b]=="function"?a._removedFactory(b):null;return!0};var G=a.st;for(var H in E)E[b](H)&&!G[b](H)&&(G[H]=function(a){return function(){var b=arguments;return this.forEach(function(c){c[a].apply(c,b)})}}(H))}(window.Raphael);//     Underscore.js 1.2.0
//     (c) 2011 Jeremy Ashkenas, DocumentCloud Inc.
//     Underscore is freely distributable under the MIT license.
//     Portions of Underscore are inspired or borrowed from Prototype,
//     Oliver Steele's Functional, and John Resig's Micro-Templating.
//     For all details and documentation:
//     http://documentcloud.github.com/underscore

(function() {

  // Baseline setup
  // --------------

  // Establish the root object, `window` in the browser, or `global` on the server.
  var root = this;

  // Save the previous value of the `_` variable.
  var previousUnderscore = root._;

  // Establish the object that gets returned to break out of a loop iteration.
  var breaker = {};

  // Save bytes in the minified (but not gzipped) version:
  var ArrayProto = Array.prototype, ObjProto = Object.prototype, FuncProto = Function.prototype;

  // Create quick reference variables for speed access to core prototypes.
  var slice            = ArrayProto.slice,
      unshift          = ArrayProto.unshift,
      toString         = ObjProto.toString,
      hasOwnProperty   = ObjProto.hasOwnProperty;

  // All **ECMAScript 5** native function implementations that we hope to use
  // are declared here.
  var
    nativeForEach      = ArrayProto.forEach,
    nativeMap          = ArrayProto.map,
    nativeReduce       = ArrayProto.reduce,
    nativeReduceRight  = ArrayProto.reduceRight,
    nativeFilter       = ArrayProto.filter,
    nativeEvery        = ArrayProto.every,
    nativeSome         = ArrayProto.some,
    nativeIndexOf      = ArrayProto.indexOf,
    nativeLastIndexOf  = ArrayProto.lastIndexOf,
    nativeIsArray      = Array.isArray,
    nativeKeys         = Object.keys,
    nativeBind         = FuncProto.bind;

  // Create a safe reference to the Underscore object for use below.
  var _ = function(obj) { return new wrapper(obj); };

  // Export the Underscore object for **CommonJS**, with backwards-compatibility
  // for the old `require()` API. If we're not in CommonJS, add `_` to the
  // global object.
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = _;
    _._ = _;
  } else {
    // Exported as a string, for Closure Compiler "advanced" mode.
    root['_'] = _;
  }

  // Current version.
  _.VERSION = '1.2.0';

  // Collection Functions
  // --------------------

  // The cornerstone, an `each` implementation, aka `forEach`.
  // Handles objects with the built-in `forEach`, arrays, and raw objects.
  // Delegates to **ECMAScript 5**'s native `forEach` if available.
  var each = _.each = _.forEach = function(obj, iterator, context) {
    if (obj == null) return;
    if (nativeForEach && obj.forEach === nativeForEach) {
      obj.forEach(iterator, context);
    } else if (obj.length === +obj.length) {
      for (var i = 0, l = obj.length; i < l; i++) {
        if (i in obj && iterator.call(context, obj[i], i, obj) === breaker) return;
      }
    } else {
      for (var key in obj) {
        if (hasOwnProperty.call(obj, key)) {
          if (iterator.call(context, obj[key], key, obj) === breaker) return;
        }
      }
    }
  };

  // Return the results of applying the iterator to each element.
  // Delegates to **ECMAScript 5**'s native `map` if available.
  _.map = function(obj, iterator, context) {
    var results = [];
    if (obj == null) return results;
    if (nativeMap && obj.map === nativeMap) return obj.map(iterator, context);
    each(obj, function(value, index, list) {
      results[results.length] = iterator.call(context, value, index, list);
    });
    return results;
  };

  // **Reduce** builds up a single result from a list of values, aka `inject`,
  // or `foldl`. Delegates to **ECMAScript 5**'s native `reduce` if available.
  _.reduce = _.foldl = _.inject = function(obj, iterator, memo, context) {
    var initial = memo !== void 0;
    if (obj == null) obj = [];
    if (nativeReduce && obj.reduce === nativeReduce) {
      if (context) iterator = _.bind(iterator, context);
      return initial ? obj.reduce(iterator, memo) : obj.reduce(iterator);
    }
    each(obj, function(value, index, list) {
      if (!initial) {
        memo = value;
        initial = true;
      } else {
        memo = iterator.call(context, memo, value, index, list);
      }
    });
    if (!initial) throw new TypeError("Reduce of empty array with no initial value");
    return memo;
  };

  // The right-associative version of reduce, also known as `foldr`.
  // Delegates to **ECMAScript 5**'s native `reduceRight` if available.
  _.reduceRight = _.foldr = function(obj, iterator, memo, context) {
    if (obj == null) obj = [];
    if (nativeReduceRight && obj.reduceRight === nativeReduceRight) {
      if (context) iterator = _.bind(iterator, context);
      return memo !== void 0 ? obj.reduceRight(iterator, memo) : obj.reduceRight(iterator);
    }
    var reversed = (_.isArray(obj) ? obj.slice() : _.toArray(obj)).reverse();
    return _.reduce(reversed, iterator, memo, context);
  };

  // Return the first value which passes a truth test. Aliased as `detect`.
  _.find = _.detect = function(obj, iterator, context) {
    var result;
    any(obj, function(value, index, list) {
      if (iterator.call(context, value, index, list)) {
        result = value;
        return true;
      }
    });
    return result;
  };

  // Return all the elements that pass a truth test.
  // Delegates to **ECMAScript 5**'s native `filter` if available.
  // Aliased as `select`.
  _.filter = _.select = function(obj, iterator, context) {
    var results = [];
    if (obj == null) return results;
    if (nativeFilter && obj.filter === nativeFilter) return obj.filter(iterator, context);
    each(obj, function(value, index, list) {
      if (iterator.call(context, value, index, list)) results[results.length] = value;
    });
    return results;
  };

  // Return all the elements for which a truth test fails.
  _.reject = function(obj, iterator, context) {
    var results = [];
    if (obj == null) return results;
    each(obj, function(value, index, list) {
      if (!iterator.call(context, value, index, list)) results[results.length] = value;
    });
    return results;
  };

  // Determine whether all of the elements match a truth test.
  // Delegates to **ECMAScript 5**'s native `every` if available.
  // Aliased as `all`.
  _.every = _.all = function(obj, iterator, context) {
    var result = true;
    if (obj == null) return result;
    if (nativeEvery && obj.every === nativeEvery) return obj.every(iterator, context);
    each(obj, function(value, index, list) {
      if (!(result = result && iterator.call(context, value, index, list))) return breaker;
    });
    return result;
  };

  // Determine if at least one element in the object matches a truth test.
  // Delegates to **ECMAScript 5**'s native `some` if available.
  // Aliased as `any`.
  var any = _.some = _.any = function(obj, iterator, context) {
    iterator = iterator || _.identity;
    var result = false;
    if (obj == null) return result;
    if (nativeSome && obj.some === nativeSome) return obj.some(iterator, context);
    each(obj, function(value, index, list) {
      if (result |= iterator.call(context, value, index, list)) return breaker;
    });
    return !!result;
  };

  // Determine if a given value is included in the array or object using `===`.
  // Aliased as `contains`.
  _.include = _.contains = function(obj, target) {
    var found = false;
    if (obj == null) return found;
    if (nativeIndexOf && obj.indexOf === nativeIndexOf) return obj.indexOf(target) != -1;
    any(obj, function(value) {
      if (found = value === target) return true;
    });
    return found;
  };

  // Invoke a method (with arguments) on every item in a collection.
  _.invoke = function(obj, method) {
    var args = slice.call(arguments, 2);
    return _.map(obj, function(value) {
      return (method.call ? method || value : value[method]).apply(value, args);
    });
  };

  // Convenience version of a common use case of `map`: fetching a property.
  _.pluck = function(obj, key) {
    return _.map(obj, function(value){ return value[key]; });
  };

  // Return the maximum element or (element-based computation).
  _.max = function(obj, iterator, context) {
    if (!iterator && _.isArray(obj)) return Math.max.apply(Math, obj);
    if (!iterator && _.isEmpty(obj)) return -Infinity;
    var result = {computed : -Infinity};
    each(obj, function(value, index, list) {
      var computed = iterator ? iterator.call(context, value, index, list) : value;
      computed >= result.computed && (result = {value : value, computed : computed});
    });
    return result.value;
  };

  // Return the minimum element (or element-based computation).
  _.min = function(obj, iterator, context) {
    if (!iterator && _.isArray(obj)) return Math.min.apply(Math, obj);
    if (!iterator && _.isEmpty(obj)) return Infinity;
    var result = {computed : Infinity};
    each(obj, function(value, index, list) {
      var computed = iterator ? iterator.call(context, value, index, list) : value;
      computed < result.computed && (result = {value : value, computed : computed});
    });
    return result.value;
  };

  // Shuffle an array.
  _.shuffle = function(obj) {
    var shuffled = [], rand;
    each(obj, function(value, index, list) {
      if (index == 0) {
        shuffled[0] = value;
      } else {
        rand = Math.floor(Math.random() * (index + 1));
        shuffled[index] = shuffled[rand];
        shuffled[rand] = value;
      }
    });
    return shuffled;
  };

  // Sort the object's values by a criterion produced by an iterator.
  _.sortBy = function(obj, iterator, context) {
    return _.pluck(_.map(obj, function(value, index, list) {
      return {
        value : value,
        criteria : iterator.call(context, value, index, list)
      };
    }).sort(function(left, right) {
      var a = left.criteria, b = right.criteria;
      return a < b ? -1 : a > b ? 1 : 0;
    }), 'value');
  };

  // Groups the object's values by a criterion produced by an iterator
  _.groupBy = function(obj, iterator) {
    var result = {};
    each(obj, function(value, index) {
      var key = iterator(value, index);
      (result[key] || (result[key] = [])).push(value);
    });
    return result;
  };

  // Use a comparator function to figure out at what index an object should
  // be inserted so as to maintain order. Uses binary search.
  _.sortedIndex = function(array, obj, iterator) {
    iterator || (iterator = _.identity);
    var low = 0, high = array.length;
    while (low < high) {
      var mid = (low + high) >> 1;
      iterator(array[mid]) < iterator(obj) ? low = mid + 1 : high = mid;
    }
    return low;
  };

  // Safely convert anything iterable into a real, live array.
  _.toArray = function(iterable) {
    if (!iterable)                return [];
    if (iterable.toArray)         return iterable.toArray();
    if (_.isArray(iterable))      return slice.call(iterable);
    if (_.isArguments(iterable))  return slice.call(iterable);
    return _.values(iterable);
  };

  // Return the number of elements in an object.
  _.size = function(obj) {
    return _.toArray(obj).length;
  };

  // Array Functions
  // ---------------

  // Get the first element of an array. Passing **n** will return the first N
  // values in the array. Aliased as `head`. The **guard** check allows it to work
  // with `_.map`.
  _.first = _.head = function(array, n, guard) {
    return (n != null) && !guard ? slice.call(array, 0, n) : array[0];
  };

  // Returns everything but the last entry of the array. Especcialy useful on
  // the arguments object. Passing **n** will return all the values in
  // the array, excluding the last N. The **guard** check allows it to work with
  // `_.map`.
  _.initial = function(array, n, guard) {
    return slice.call(array, 0, array.length - ((n == null) || guard ? 1 : n));
  };

  // Get the last element of an array. Passing **n** will return the last N
  // values in the array. The **guard** check allows it to work with `_.map`.
  _.last = function(array, n, guard) {
    return (n != null) && !guard ? slice.call(array, array.length - n) : array[array.length - 1];
  };

  // Returns everything but the first entry of the array. Aliased as `tail`.
  // Especially useful on the arguments object. Passing an **index** will return
  // the rest of the values in the array from that index onward. The **guard**
  // check allows it to work with `_.map`.
  _.rest = _.tail = function(array, index, guard) {
    return slice.call(array, (index == null) || guard ? 1 : index);
  };

  // Trim out all falsy values from an array.
  _.compact = function(array) {
    return _.filter(array, function(value){ return !!value; });
  };

  // Return a completely flattened version of an array.
  _.flatten = function(array) {
    return _.reduce(array, function(memo, value) {
      if (_.isArray(value)) return memo.concat(_.flatten(value));
      memo[memo.length] = value;
      return memo;
    }, []);
  };

  // Return a version of the array that does not contain the specified value(s).
  _.without = function(array) {
    return _.difference(array, slice.call(arguments, 1));
  };

  // Produce a duplicate-free version of the array. If the array has already
  // been sorted, you have the option of using a faster algorithm.
  // Aliased as `unique`.
  _.uniq = _.unique = function(array, isSorted, iterator) {
    var initial = iterator ? _.map(array, iterator) : array;
    var result = [];
    _.reduce(initial, function(memo, el, i) {
      if (0 == i || (isSorted === true ? _.last(memo) != el : !_.include(memo, el))) {
        memo[memo.length] = el;
        result[result.length] = array[i];
      }
      return memo;
    }, []);
    return result;
  };

  // Produce an array that contains the union: each distinct element from all of
  // the passed-in arrays.
  _.union = function() {
    return _.uniq(_.flatten(arguments));
  };

  // Produce an array that contains every item shared between all the
  // passed-in arrays. (Aliased as "intersect" for back-compat.)
  _.intersection = _.intersect = function(array) {
    var rest = slice.call(arguments, 1);
    return _.filter(_.uniq(array), function(item) {
      return _.every(rest, function(other) {
        return _.indexOf(other, item) >= 0;
      });
    });
  };

  // Take the difference between one array and another.
  // Only the elements present in just the first array will remain.
  _.difference = function(array, other) {
    return _.filter(array, function(value){ return !_.include(other, value); });
  };

  // Zip together multiple lists into a single array -- elements that share
  // an index go together.
  _.zip = function() {
    var args = slice.call(arguments);
    var length = _.max(_.pluck(args, 'length'));
    var results = new Array(length);
    for (var i = 0; i < length; i++) results[i] = _.pluck(args, "" + i);
    return results;
  };

  // If the browser doesn't supply us with indexOf (I'm looking at you, **MSIE**),
  // we need this function. Return the position of the first occurrence of an
  // item in an array, or -1 if the item is not included in the array.
  // Delegates to **ECMAScript 5**'s native `indexOf` if available.
  // If the array is large and already in sort order, pass `true`
  // for **isSorted** to use binary search.
  _.indexOf = function(array, item, isSorted) {
    if (array == null) return -1;
    var i, l;
    if (isSorted) {
      i = _.sortedIndex(array, item);
      return array[i] === item ? i : -1;
    }
    if (nativeIndexOf && array.indexOf === nativeIndexOf) return array.indexOf(item);
    for (i = 0, l = array.length; i < l; i++) if (array[i] === item) return i;
    return -1;
  };

  // Delegates to **ECMAScript 5**'s native `lastIndexOf` if available.
  _.lastIndexOf = function(array, item) {
    if (array == null) return -1;
    if (nativeLastIndexOf && array.lastIndexOf === nativeLastIndexOf) return array.lastIndexOf(item);
    var i = array.length;
    while (i--) if (array[i] === item) return i;
    return -1;
  };

  // Generate an integer Array containing an arithmetic progression. A port of
  // the native Python `range()` function. See
  // [the Python documentation](http://docs.python.org/library/functions.html#range).
  _.range = function(start, stop, step) {
    if (arguments.length <= 1) {
      stop = start || 0;
      start = 0;
    }
    step = arguments[2] || 1;

    var len = Math.max(Math.ceil((stop - start) / step), 0);
    var idx = 0;
    var range = new Array(len);

    while(idx < len) {
      range[idx++] = start;
      start += step;
    }

    return range;
  };

  // Function (ahem) Functions
  // ------------------

  // Create a function bound to a given object (assigning `this`, and arguments,
  // optionally). Binding with arguments is also known as `curry`.
  // Delegates to **ECMAScript 5**'s native `Function.bind` if available.
  // We check for `func.bind` first, to fail fast when `func` is undefined.
  _.bind = function(func, obj) {
    if (func.bind === nativeBind && nativeBind) return nativeBind.apply(func, slice.call(arguments, 1));
    var args = slice.call(arguments, 2);
    return function() {
      return func.apply(obj, args.concat(slice.call(arguments)));
    };
  };

  // Bind all of an object's methods to that object. Useful for ensuring that
  // all callbacks defined on an object belong to it.
  _.bindAll = function(obj) {
    var funcs = slice.call(arguments, 1);
    if (funcs.length == 0) funcs = _.functions(obj);
    each(funcs, function(f) { obj[f] = _.bind(obj[f], obj); });
    return obj;
  };

  // Memoize an expensive function by storing its results.
  _.memoize = function(func, hasher) {
    var memo = {};
    hasher || (hasher = _.identity);
    return function() {
      var key = hasher.apply(this, arguments);
      return hasOwnProperty.call(memo, key) ? memo[key] : (memo[key] = func.apply(this, arguments));
    };
  };

  // Delays a function for the given number of milliseconds, and then calls
  // it with the arguments supplied.
  _.delay = function(func, wait) {
    var args = slice.call(arguments, 2);
    return setTimeout(function(){ return func.apply(func, args); }, wait);
  };

  // Defers a function, scheduling it to run after the current call stack has
  // cleared.
  _.defer = function(func) {
    return _.delay.apply(_, [func, 1].concat(slice.call(arguments, 1)));
  };

  // Internal function used to implement `_.throttle` and `_.debounce`.
  var limit = function(func, wait, debounce) {
    var timeout;
    return function() {
      var context = this, args = arguments;
      var throttler = function() {
        timeout = null;
        func.apply(context, args);
      };
      if (debounce) clearTimeout(timeout);
      if (debounce || !timeout) timeout = setTimeout(throttler, wait);
    };
  };

  // Returns a function, that, when invoked, will only be triggered at most once
  // during a given window of time.
  _.throttle = function(func, wait) {
    return limit(func, wait, false);
  };

  // Returns a function, that, as long as it continues to be invoked, will not
  // be triggered. The function will be called after it stops being called for
  // N milliseconds.
  _.debounce = function(func, wait) {
    return limit(func, wait, true);
  };

  // Returns a function that will be executed at most one time, no matter how
  // often you call it. Useful for lazy initialization.
  _.once = function(func) {
    var ran = false, memo;
    return function() {
      if (ran) return memo;
      ran = true;
      return memo = func.apply(this, arguments);
    };
  };

  // Returns the first function passed as an argument to the second,
  // allowing you to adjust arguments, run code before and after, and
  // conditionally execute the original function.
  _.wrap = function(func, wrapper) {
    return function() {
      var args = [func].concat(slice.call(arguments));
      return wrapper.apply(this, args);
    };
  };

  // Returns a function that is the composition of a list of functions, each
  // consuming the return value of the function that follows.
  _.compose = function() {
    var funcs = slice.call(arguments);
    return function() {
      var args = slice.call(arguments);
      for (var i = funcs.length - 1; i >= 0; i--) {
        args = [funcs[i].apply(this, args)];
      }
      return args[0];
    };
  };

  // Returns a function that will only be executed after being called N times.
  _.after = function(times, func) {
    return function() {
      if (--times < 1) { return func.apply(this, arguments); }
    };
  };

  // Object Functions
  // ----------------

  // Retrieve the names of an object's properties.
  // Delegates to **ECMAScript 5**'s native `Object.keys`
  _.keys = nativeKeys || function(obj) {
    if (obj !== Object(obj)) throw new TypeError('Invalid object');
    var keys = [];
    for (var key in obj) if (hasOwnProperty.call(obj, key)) keys[keys.length] = key;
    return keys;
  };

  // Retrieve the values of an object's properties.
  _.values = function(obj) {
    return _.map(obj, _.identity);
  };

  // Return a sorted list of the function names available on the object.
  // Aliased as `methods`
  _.functions = _.methods = function(obj) {
    var names = [];
    for (var key in obj) {
      if (_.isFunction(obj[key])) names.push(key);
    }
    return names.sort();
  };

  // Extend a given object with all the properties in passed-in object(s).
  _.extend = function(obj) {
    each(slice.call(arguments, 1), function(source) {
      for (var prop in source) {
        if (source[prop] !== void 0) obj[prop] = source[prop];
      }
    });
    return obj;
  };

  // Fill in a given object with default properties.
  _.defaults = function(obj) {
    each(slice.call(arguments, 1), function(source) {
      for (var prop in source) {
        if (obj[prop] == null) obj[prop] = source[prop];
      }
    });
    return obj;
  };

  // Create a (shallow-cloned) duplicate of an object.
  _.clone = function(obj) {
    return _.isArray(obj) ? obj.slice() : _.extend({}, obj);
  };

  // Invokes interceptor with the obj, and then returns obj.
  // The primary purpose of this method is to "tap into" a method chain, in
  // order to perform operations on intermediate results within the chain.
  _.tap = function(obj, interceptor) {
    interceptor(obj);
    return obj;
  };

  // Internal recursive comparison function.
  function eq(a, b, stack) {
    // Identical objects are equal. `0 === -0`, but they aren't identical.
    // See the Harmony `egal` proposal: http://wiki.ecmascript.org/doku.php?id=harmony:egal.
    if (a === b) return a !== 0 || 1 / a == 1 / b;
    // A strict comparison is necessary because `null == undefined`.
    if (a == null) return a === b;
    // Compare object types.
    var typeA = typeof a;
    if (typeA != typeof b) return false;
    // Optimization; ensure that both values are truthy or falsy.
    if (!a != !b) return false;
    // `NaN` values are equal.
    if (_.isNaN(a)) return _.isNaN(b);
    // Compare string objects by value.
    var isStringA = _.isString(a), isStringB = _.isString(b);
    if (isStringA || isStringB) return isStringA && isStringB && String(a) == String(b);
    // Compare number objects by value.
    var isNumberA = _.isNumber(a), isNumberB = _.isNumber(b);
    if (isNumberA || isNumberB) return isNumberA && isNumberB && +a == +b;
    // Compare boolean objects by value. The value of `true` is 1; the value of `false` is 0.
    var isBooleanA = _.isBoolean(a), isBooleanB = _.isBoolean(b);
    if (isBooleanA || isBooleanB) return isBooleanA && isBooleanB && +a == +b;
    // Compare dates by their millisecond values.
    var isDateA = _.isDate(a), isDateB = _.isDate(b);
    if (isDateA || isDateB) return isDateA && isDateB && a.getTime() == b.getTime();
    // Compare RegExps by their source patterns and flags.
    var isRegExpA = _.isRegExp(a), isRegExpB = _.isRegExp(b);
    if (isRegExpA || isRegExpB) {
      // Ensure commutative equality for RegExps.
      return isRegExpA && isRegExpB &&
             a.source == b.source &&
             a.global == b.global &&
             a.multiline == b.multiline &&
             a.ignoreCase == b.ignoreCase;
    }
    // Ensure that both values are objects.
    if (typeA != 'object') return false;
    // Unwrap any wrapped objects.
    if (a._chain) a = a._wrapped;
    if (b._chain) b = b._wrapped;
    // Invoke a custom `isEqual` method if one is provided.
    if (_.isFunction(a.isEqual)) return a.isEqual(b);
    // Assume equality for cyclic structures. The algorithm for detecting cyclic structures is
    // adapted from ES 5.1 section 15.12.3, abstract operation `JO`.
    var length = stack.length;
    while (length--) {
      // Linear search. Performance is inversely proportional to the number of unique nested
      // structures.
      if (stack[length] == a) return true;
    }
    // Add the first object to the stack of traversed objects.
    stack.push(a);
    var size = 0, result = true;
    if (a.length === +a.length || b.length === +b.length) {
      // Compare object lengths to determine if a deep comparison is necessary.
      size = a.length;
      result = size == b.length;
      if (result) {
        // Deep compare array-like object contents, ignoring non-numeric properties.
        while (size--) {
          // Ensure commutative equality for sparse arrays.
          if (!(result = size in a == size in b && eq(a[size], b[size], stack))) break;
        }
      }
    } else {
      // Deep compare objects.
      for (var key in a) {
        if (hasOwnProperty.call(a, key)) {
          // Count the expected number of properties.
          size++;
          // Deep compare each member.
          if (!(result = hasOwnProperty.call(b, key) && eq(a[key], b[key], stack))) break;
        }
      }
      // Ensure that both objects contain the same number of properties.
      if (result) {
        for (key in b) {
          if (hasOwnProperty.call(b, key) && !size--) break;
        }
        result = !size;
      }
    }
    // Remove the first object from the stack of traversed objects.
    stack.pop();
    return result;
  }

  // Perform a deep comparison to check if two objects are equal.
  _.isEqual = function(a, b) {
    return eq(a, b, []);
  };

  // Is a given array or object empty?
  _.isEmpty = function(obj) {
    if (_.isArray(obj) || _.isString(obj)) return obj.length === 0;
    for (var key in obj) if (hasOwnProperty.call(obj, key)) return false;
    return true;
  };

  // Is a given value a DOM element?
  _.isElement = function(obj) {
    return !!(obj && obj.nodeType == 1);
  };

  // Is a given value an array?
  // Delegates to ECMA5's native Array.isArray
  _.isArray = nativeIsArray || function(obj) {
    return toString.call(obj) === '[object Array]';
  };

  // Is a given variable an object?
  _.isObject = function(obj) {
    return obj === Object(obj);
  };

  // Is a given variable an arguments object?
  _.isArguments = function(obj) {
    return !!(obj && hasOwnProperty.call(obj, 'callee'));
  };

  // Is a given value a function?
  _.isFunction = function(obj) {
    return !!(obj && obj.constructor && obj.call && obj.apply);
  };

  // Is a given value a string?
  _.isString = function(obj) {
    return !!(obj === '' || (obj && obj.charCodeAt && obj.substr));
  };

  // Is a given value a number?
  _.isNumber = function(obj) {
    return !!(obj === 0 || (obj && obj.toExponential && obj.toFixed));
  };

  // Is the given value `NaN`? `NaN` happens to be the only value in JavaScript
  // that does not equal itself.
  _.isNaN = function(obj) {
    return obj !== obj;
  };

  // Is a given value a boolean?
  _.isBoolean = function(obj) {
    return obj === true || obj === false || toString.call(obj) == '[object Boolean]';
  };

  // Is a given value a date?
  _.isDate = function(obj) {
    return !!(obj && obj.getTimezoneOffset && obj.setUTCFullYear);
  };

  // Is the given value a regular expression?
  _.isRegExp = function(obj) {
    return !!(obj && obj.test && obj.exec && (obj.ignoreCase || obj.ignoreCase === false));
  };

  // Is a given value equal to null?
  _.isNull = function(obj) {
    return obj === null;
  };

  // Is a given variable undefined?
  _.isUndefined = function(obj) {
    return obj === void 0;
  };

  // Utility Functions
  // -----------------

  // Run Underscore.js in *noConflict* mode, returning the `_` variable to its
  // previous owner. Returns a reference to the Underscore object.
  _.noConflict = function() {
    root._ = previousUnderscore;
    return this;
  };

  // Keep the identity function around for default iterators.
  _.identity = function(value) {
    return value;
  };

  // Run a function **n** times.
  _.times = function (n, iterator, context) {
    for (var i = 0; i < n; i++) iterator.call(context, i);
  };

  // Escape a string for HTML interpolation.
  _.escape = function(string) {
    return (''+string).replace(/&(?!\w+;|#\d+;|#x[\da-f]+;)/gi, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#x27;').replace(/\//g,'&#x2F;');
  };

  // Add your own custom functions to the Underscore object, ensuring that
  // they're correctly added to the OOP wrapper as well.
  _.mixin = function(obj) {
    each(_.functions(obj), function(name){
      addToWrapper(name, _[name] = obj[name]);
    });
  };

  // Generate a unique integer id (unique within the entire client session).
  // Useful for temporary DOM ids.
  var idCounter = 0;
  _.uniqueId = function(prefix) {
    var id = idCounter++;
    return prefix ? prefix + id : id;
  };

  // By default, Underscore uses ERB-style template delimiters, change the
  // following template settings to use alternative delimiters.
  _.templateSettings = {
    evaluate    : /<%([\s\S]+?)%>/g,
    interpolate : /<%=([\s\S]+?)%>/g,
    escape      : /<%-([\s\S]+?)%>/g
  };

  // JavaScript micro-templating, similar to John Resig's implementation.
  // Underscore templating handles arbitrary delimiters, preserves whitespace,
  // and correctly escapes quotes within interpolated code.
  _.template = function(str, data) {
    var c  = _.templateSettings;
    var tmpl = 'var __p=[],print=function(){__p.push.apply(__p,arguments);};' +
      'with(obj||{}){__p.push(\'' +
      str.replace(/\\/g, '\\\\')
         .replace(/'/g, "\\'")
         .replace(c.escape, function(match, code) {
           return "',_.escape(" + code.replace(/\\'/g, "'") + "),'";
         })
         .replace(c.interpolate, function(match, code) {
           return "'," + code.replace(/\\'/g, "'") + ",'";
         })
         .replace(c.evaluate || null, function(match, code) {
           return "');" + code.replace(/\\'/g, "'")
                              .replace(/[\r\n\t]/g, ' ') + "__p.push('";
         })
         .replace(/\r/g, '\\r')
         .replace(/\n/g, '\\n')
         .replace(/\t/g, '\\t')
         + "');}return __p.join('');";
    var func = new Function('obj', tmpl);
    return data ? func(data) : func;
  };

  // The OOP Wrapper
  // ---------------

  // If Underscore is called as a function, it returns a wrapped object that
  // can be used OO-style. This wrapper holds altered versions of all the
  // underscore functions. Wrapped objects may be chained.
  var wrapper = function(obj) { this._wrapped = obj; };

  // Expose `wrapper.prototype` as `_.prototype`
  _.prototype = wrapper.prototype;

  // Helper function to continue chaining intermediate results.
  var result = function(obj, chain) {
    return chain ? _(obj).chain() : obj;
  };

  // A method to easily add functions to the OOP wrapper.
  var addToWrapper = function(name, func) {
    wrapper.prototype[name] = function() {
      var args = slice.call(arguments);
      unshift.call(args, this._wrapped);
      return result(func.apply(_, args), this._chain);
    };
  };

  // Add all of the Underscore functions to the wrapper object.
  _.mixin(_);

  // Add all mutator Array functions to the wrapper.
  each(['pop', 'push', 'reverse', 'shift', 'sort', 'splice', 'unshift'], function(name) {
    var method = ArrayProto[name];
    wrapper.prototype[name] = function() {
      method.apply(this._wrapped, arguments);
      return result(this._wrapped, this._chain);
    };
  });

  // Add all accessor Array functions to the wrapper.
  each(['concat', 'join', 'slice'], function(name) {
    var method = ArrayProto[name];
    wrapper.prototype[name] = function() {
      return result(method.apply(this._wrapped, arguments), this._chain);
    };
  });

  // Start chaining a wrapped Underscore object.
  wrapper.prototype.chain = function() {
    this._chain = true;
    return this;
  };

  // Extracts the result from a wrapped and chained object.
  wrapper.prototype.value = function() {
    return this._wrapped;
  };

})();
;/*!
 * accounting.js v0.3.2
 * Copyright 2011, Joss Crowcroft
 *
 * Freely distributable under the MIT license.
 * Portions of accounting.js are inspired or borrowed from underscore.js
 *
 * Full details and documentation:
 * http://josscrowcroft.github.com/accounting.js/
 */

(function(root, undefined) {

	/* --- Setup --- */

	// Create the local library object, to be exported or referenced globally later
	var lib = {};

	// Current version
	lib.version = '0.3.2';


	/* --- Exposed settings --- */

	// The library's settings configuration object. Contains default parameters for
	// currency and number formatting
	lib.settings = {
		currency: {
			symbol : "$",		// default currency symbol is '$'
			format : "%s%v",	// controls output: %s = symbol, %v = value (can be object, see docs)
			decimal : ".",		// decimal point separator
			thousand : ",",		// thousands separator
			precision : 2,		// decimal places
			grouping : 3		// digit grouping (not implemented yet)
		},
		number: {
			precision : 0,		// default precision on numbers is 0
			grouping : 3,		// digit grouping (not implemented yet)
			thousand : ",",
			decimal : "."
		}
	};


	/* --- Internal Helper Methods --- */

	// Store reference to possibly-available ECMAScript 5 methods for later
	var nativeMap = Array.prototype.map,
		nativeIsArray = Array.isArray,
		toString = Object.prototype.toString;

	/**
	 * Tests whether supplied parameter is a string
	 * from underscore.js
	 */
	function isString(obj) {
		return !!(obj === '' || (obj && obj.charCodeAt && obj.substr));
	}

	/**
	 * Tests whether supplied parameter is a string
	 * from underscore.js, delegates to ECMA5's native Array.isArray
	 */
	function isArray(obj) {
		return nativeIsArray ? nativeIsArray(obj) : toString.call(obj) === '[object Array]';
	}

	/**
	 * Tests whether supplied parameter is a true object
	 */
	function isObject(obj) {
		return toString.call(obj) === '[object Object]';
	}

	/**
	 * Extends an object with a defaults object, similar to underscore's _.defaults
	 *
	 * Used for abstracting parameter handling from API methods
	 */
	function defaults(object, defs) {
		var key;
		object = object || {};
		defs = defs || {};
		// Iterate over object non-prototype properties:
		for (key in defs) {
			if (defs.hasOwnProperty(key)) {
				// Replace values with defaults only if undefined (allow empty/zero values):
				if (object[key] == null) object[key] = defs[key];
			}
		}
		return object;
	}

	/**
	 * Implementation of `Array.map()` for iteration loops
	 *
	 * Returns a new Array as a result of calling `iterator` on each array value.
	 * Defers to native Array.map if available
	 */
	function map(obj, iterator, context) {
		var results = [], i, j;

		if (!obj) return results;

		// Use native .map method if it exists:
		if (nativeMap && obj.map === nativeMap) return obj.map(iterator, context);

		// Fallback for native .map:
		for (i = 0, j = obj.length; i < j; i++ ) {
			results[i] = iterator.call(context, obj[i], i, obj);
		}
		return results;
	}

	/**
	 * Check and normalise the value of precision (must be positive integer)
	 */
	function checkPrecision(val, base) {
		val = Math.round(Math.abs(val));
		return isNaN(val)? base : val;
	}


	/**
	 * Parses a format string or object and returns format obj for use in rendering
	 *
	 * `format` is either a string with the default (positive) format, or object
	 * containing `pos` (required), `neg` and `zero` values (or a function returning
	 * either a string or object)
	 *
	 * Either string or format.pos must contain "%v" (value) to be valid
	 */
	function checkCurrencyFormat(format) {
		var defaults = lib.settings.currency.format;

		// Allow function as format parameter (should return string or object):
		if ( typeof format === "function" ) format = format();

		// Format can be a string, in which case `value` ("%v") must be present:
		if ( isString( format ) && format.match("%v") ) {

			// Create and return positive, negative and zero formats:
			return {
				pos : format,
				neg : format.replace("-", "").replace("%v", "-%v"),
				zero : format
			};

		// If no format, or object is missing valid positive value, use defaults:
		} else if ( !format || !format.pos || !format.pos.match("%v") ) {

			// If defaults is a string, casts it to an object for faster checking next time:
			return ( !isString( defaults ) ) ? defaults : lib.settings.currency.format = {
				pos : defaults,
				neg : defaults.replace("%v", "-%v"),
				zero : defaults
			};

		}
		// Otherwise, assume format was fine:
		return format;
	}


	/* --- API Methods --- */

	/**
	 * Takes a string/array of strings, removes all formatting/cruft and returns the raw float value
	 * alias: accounting.`parse(string)`
	 *
	 * Decimal must be included in the regular expression to match floats (default: "."), so if the number
	 * uses a non-standard decimal separator, provide it as the second argument.
	 *
	 * Also matches bracketed negatives (eg. "$ (1.99)" => -1.99)
	 *
	 * Doesn't throw any errors (`NaN`s become 0) but this may change in future
	 */
	var unformat = lib.unformat = lib.parse = function(value, decimal) {
		// Recursively unformat arrays:
		if (isArray(value)) {
			return map(value, function(val) {
				return unformat(val, decimal);
			});
		}

		// Fails silently (need decent errors):
		value = value || 0;

		// Return the value as-is if it's already a number:
		if (typeof value === "number") return value;

		// Default decimal point is "." but could be set to eg. "," in opts:
		decimal = decimal || ".";

		 // Build regex to strip out everything except digits, decimal point and minus sign:
		var regex = new RegExp("[^0-9-" + decimal + "]", ["g"]),
			unformatted = parseFloat(
				("" + value)
				.replace(/\((.*)\)/, "-$1") // replace bracketed values with negatives
				.replace(regex, '')         // strip out any cruft
				.replace(decimal, '.')      // make sure decimal point is standard
			);

		// This will fail silently which may cause trouble, let's wait and see:
		return !isNaN(unformatted) ? unformatted : 0;
	};


	/**
	 * Implementation of toFixed() that treats floats more like decimals
	 *
	 * Fixes binary rounding issues (eg. (0.615).toFixed(2) === "0.61") that present
	 * problems for accounting- and finance-related software.
	 */
	var toFixed = lib.toFixed = function(value, precision) {
		precision = checkPrecision(precision, lib.settings.number.precision);
		var power = Math.pow(10, precision);

		// Multiply up by precision, round accurately, then divide and use native toFixed():
		return (Math.round(lib.unformat(value) * power) / power).toFixed(precision);
	};


	/**
	 * Format a number, with comma-separated thousands and custom precision/decimal places
	 *
	 * Localise by overriding the precision and thousand / decimal separators
	 * 2nd parameter `precision` can be an object matching `settings.number`
	 */
	var formatNumber = lib.formatNumber = function(number, precision, thousand, decimal) {
		// Resursively format arrays:
		if (isArray(number)) {
			return map(number, function(val) {
				return formatNumber(val, precision, thousand, decimal);
			});
		}

		// Clean up number:
		number = unformat(number);

		// Build options object from second param (if object) or all params, extending defaults:
		var opts = defaults(
				(isObject(precision) ? precision : {
					precision : precision,
					thousand : thousand,
					decimal : decimal
				}),
				lib.settings.number
			),

			// Clean up precision
			usePrecision = checkPrecision(opts.precision),

			// Do some calc:
			negative = number < 0 ? "-" : "",
			base = parseInt(toFixed(Math.abs(number || 0), usePrecision), 10) + "",
			mod = base.length > 3 ? base.length % 3 : 0;

		// Format the number:
		return negative + (mod ? base.substr(0, mod) + opts.thousand : "") + base.substr(mod).replace(/(\d{3})(?=\d)/g, "$1" + opts.thousand) + (usePrecision ? opts.decimal + toFixed(Math.abs(number), usePrecision).split('.')[1] : "");
	};


	/**
	 * Format a number into currency
	 *
	 * Usage: accounting.formatMoney(number, symbol, precision, thousandsSep, decimalSep, format)
	 * defaults: (0, "$", 2, ",", ".", "%s%v")
	 *
	 * Localise by overriding the symbol, precision, thousand / decimal separators and format
	 * Second param can be an object matching `settings.currency` which is the easiest way.
	 *
	 * To do: tidy up the parameters
	 */
	var formatMoney = lib.formatMoney = function(number, symbol, precision, thousand, decimal, format) {
		// Resursively format arrays:
		if (isArray(number)) {
			return map(number, function(val){
				return formatMoney(val, symbol, precision, thousand, decimal, format);
			});
		}

		// Clean up number:
		number = unformat(number);

		// Build options object from second param (if object) or all params, extending defaults:
		var opts = defaults(
				(isObject(symbol) ? symbol : {
					symbol : symbol,
					precision : precision,
					thousand : thousand,
					decimal : decimal,
					format : format
				}),
				lib.settings.currency
			),

			// Check format (returns object with pos, neg and zero):
			formats = checkCurrencyFormat(opts.format),

			// Choose which format to use for this value:
			useFormat = number > 0 ? formats.pos : number < 0 ? formats.neg : formats.zero;

		// Return with currency symbol added:
		return useFormat.replace('%s', opts.symbol).replace('%v', formatNumber(Math.abs(number), checkPrecision(opts.precision), opts.thousand, opts.decimal));
	};


	/**
	 * Format a list of numbers into an accounting column, padding with whitespace
	 * to line up currency symbols, thousand separators and decimals places
	 *
	 * List should be an array of numbers
	 * Second parameter can be an object containing keys that match the params
	 *
	 * Returns array of accouting-formatted number strings of same length
	 *
	 * NB: `white-space:pre` CSS rule is required on the list container to prevent
	 * browsers from collapsing the whitespace in the output strings.
	 */
	lib.formatColumn = function(list, symbol, precision, thousand, decimal, format) {
		if (!list) return [];

		// Build options object from second param (if object) or all params, extending defaults:
		var opts = defaults(
				(isObject(symbol) ? symbol : {
					symbol : symbol,
					precision : precision,
					thousand : thousand,
					decimal : decimal,
					format : format
				}),
				lib.settings.currency
			),

			// Check format (returns object with pos, neg and zero), only need pos for now:
			formats = checkCurrencyFormat(opts.format),

			// Whether to pad at start of string or after currency symbol:
			padAfterSymbol = formats.pos.indexOf("%s") < formats.pos.indexOf("%v") ? true : false,

			// Store value for the length of the longest string in the column:
			maxLength = 0,

			// Format the list according to options, store the length of the longest string:
			formatted = map(list, function(val, i) {
				if (isArray(val)) {
					// Recursively format columns if list is a multi-dimensional array:
					return lib.formatColumn(val, opts);
				} else {
					// Clean up the value
					val = unformat(val);

					// Choose which format to use for this value (pos, neg or zero):
					var useFormat = val > 0 ? formats.pos : val < 0 ? formats.neg : formats.zero,

						// Format this value, push into formatted list and save the length:
						fVal = useFormat.replace('%s', opts.symbol).replace('%v', formatNumber(Math.abs(val), checkPrecision(opts.precision), opts.thousand, opts.decimal));

					if (fVal.length > maxLength) maxLength = fVal.length;
					return fVal;
				}
			});

		// Pad each number in the list and send back the column of numbers:
		return map(formatted, function(val, i) {
			// Only if this is a string (not a nested array, which would have already been padded):
			if (isString(val) && val.length < maxLength) {
				// Depending on symbol position, pad after symbol or at index 0:
				return padAfterSymbol ? val.replace(opts.symbol, opts.symbol+(new Array(maxLength - val.length + 1).join(" "))) : (new Array(maxLength - val.length + 1).join(" ")) + val;
			}
			return val;
		});
	};


	/* --- Module Definition --- */

	// Export accounting for CommonJS. If being loaded as an AMD module, define it as such.
	// Otherwise, just add `accounting` to the global object
	if (typeof exports !== 'undefined') {
		if (typeof module !== 'undefined' && module.exports) {
			exports = module.exports = lib;
		}
		exports.accounting = lib;
	} else if (typeof define === 'function' && define.amd) {
		// Return the library as an AMD module:
		define([], function() {
			return lib;
		});
	} else {
		// Use accounting.noConflict to restore `accounting` back to its original value.
		// Returns a reference to the library's `accounting` object;
		// e.g. `var numbers = accounting.noConflict();`
		lib.noConflict = (function(oldAccounting) {
			return function() {
				// Reset the value of the root's `accounting` variable:
				root.accounting = oldAccounting;
				// Delete the noConflict method:
				lib.noConflict = undefined;
				// Return reference to the library to re-assign it:
				return lib;
			};
		})(root.accounting);

		// Declare `fx` on the root (global/window) object:
		root['accounting'] = lib;
	}

	// Root will be `window` in browser or `global` on the server:
}(this));
;/*
Copyright (c) 2013 Sencha Inc. - Author: Nicolas Garcia Belmonte (http://philogb.github.com/)

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.

 */
 
(function () { 

/*
  File: Core.js

 */

/*
 Object: $jit

 Defines the namespace for all library Classes and Objects.
 This variable is the *only* global variable defined in the Toolkit.
 There are also other interesting properties attached to this variable described below.
 */
this.$jit = function(w) {
  w = w || window;
  for(var k in $jit) {
    if($jit[k].$extend) {
      w[k] = $jit[k];
    }
  }
};

$jit.version = '2.0.1';
/*
  Object: $jit.id

  Works just like *document.getElementById*

  Example:
  (start code js)
  var element = $jit.id('elementId');
  (end code)

*/

/*
 Object: $jit.util

 Contains utility functions.

 Some of the utility functions and the Class system were based in the MooTools Framework
 <http://mootools.net>. Copyright (c) 2006-2010 Valerio Proietti, <http://mad4milk.net/>.
 MIT license <http://mootools.net/license.txt>.

 These methods are generally also implemented in DOM manipulation frameworks like JQuery, MooTools and Prototype.
 I'd suggest you to use the functions from those libraries instead of using these, since their functions
 are widely used and tested in many different platforms/browsers. Use these functions only if you have to.

 */
var $ = function(d) {
  return document.getElementById(d);
};

$.empty = function() {
};

/*
  Method: extend

  Augment an object by appending another object's properties.

  Parameters:

  original - (object) The object to be extended.
  extended - (object) An object which properties are going to be appended to the original object.

  Example:
  (start code js)
  $jit.util.extend({ 'a': 1, 'b': 2 }, { 'b': 3, 'c': 4 }); //{ 'a':1, 'b': 3, 'c': 4 }
  (end code)
*/
$.extend = function(original, extended) {
  for ( var key in (extended || {}))
    original[key] = extended[key];
  return original;
};

$.lambda = function(value) {
  return (typeof value == 'function') ? value : function() {
    return value;
  };
};

$.time = Date.now || function() {
  return +new Date;
};

/*
  Method: splat

  Returns an array wrapping *obj* if *obj* is not an array. Returns *obj* otherwise.

  Parameters:

  obj - (mixed) The object to be wrapped in an array.

  Example:
  (start code js)
  $jit.util.splat(3);   //[3]
  $jit.util.splat([3]); //[3]
  (end code)
*/
$.splat = function(obj) {
  var type = $.type(obj);
  return type ? ((type != 'array') ? [ obj ] : obj) : [];
};

$.type = function(elem) {
  var type = $.type.s.call(elem).match(/^\[object\s(.*)\]$/)[1].toLowerCase();
  if(type != 'object') return type;
  if(elem && elem.$$family) return elem.$$family;
  if(elem && elem.nodeType == 9) return 'htmldocument';
  return (elem && elem.nodeName && elem.nodeType == 1)? 'element' : type;
};
$.type.s = Object.prototype.toString;

/*
  Method: each

  Iterates through an iterable applying *f*.

  Parameters:

  iterable - (array) The original array.
  fn - (function) The function to apply to the array elements.

  Example:
  (start code js)
  $jit.util.each([3, 4, 5], function(n) { alert('number ' + n); });
  (end code)
*/
$.each = function(iterable, fn) {
  var type = $.type(iterable);
  if (type == 'object') {
    for ( var key in iterable)
      fn(iterable[key], key);
  } else {
    for ( var i = 0, l = iterable.length; i < l; i++)
      fn(iterable[i], i);
  }
};

$.indexOf = function(array, item) {
  if(array.indexOf) return array.indexOf(item);
  for(var i=0,l=array.length; i<l; i++) {
    if(array[i] === item) return i;
  }
  return -1;
};

/*
  Method: map

  Maps or collects an array by applying *f*.

  Parameters:

  array - (array) The original array.
  f - (function) The function to apply to the array elements.

  Example:
  (start code js)
  $jit.util.map([3, 4, 5], function(n) { return n*n; }); //[9, 16, 25]
  (end code)
*/
$.map = function(array, f) {
  var ans = [];
  $.each(array, function(elem, i) {
    ans.push(f(elem, i));
  });
  return ans;
};

/*
  Method: reduce

  Iteratively applies the binary function *f* storing the result in an accumulator.

  Parameters:

  array - (array) The original array.
  f - (function) The function to apply to the array elements.
  opt - (optional|mixed) The starting value for the acumulator.

  Example:
  (start code js)
  $jit.util.reduce([3, 4, 5], function(x, y) { return x + y; }, 0); //12
  (end code)
*/
$.reduce = function(array, f, opt) {
  var l = array.length;
  if(l==0) return opt;
  var acum = arguments.length == 3? opt : array[--l];
  while(l--) {
    acum = f(acum, array[l]);
  }
  return acum;
};

/*
  Method: merge

  Merges n-objects and their sub-objects creating a new, fresh object.

  Parameters:

  An arbitrary number of objects.

  Example:
  (start code js)
  $jit.util.merge({ 'a': 1, 'b': 2 }, { 'b': 3, 'c': 4 }); //{ 'a':1, 'b': 3, 'c': 4 }
  (end code)
*/
$.merge = function() {
  var mix = {};
  for ( var i = 0, l = arguments.length; i < l; i++) {
    var object = arguments[i];
    if ($.type(object) != 'object')
      continue;
    for ( var key in object) {
      var op = object[key], mp = mix[key];
      mix[key] = (mp && $.type(op) == 'object' && $.type(mp) == 'object') ? $
          .merge(mp, op) : $.unlink(op);
    }
  }
  return mix;
};

$.unlink = function(object) {
  var unlinked;
  switch ($.type(object)) {
  case 'object':
    unlinked = {};
    for ( var p in object)
      unlinked[p] = $.unlink(object[p]);
    break;
  case 'array':
    unlinked = [];
    for ( var i = 0, l = object.length; i < l; i++)
      unlinked[i] = $.unlink(object[i]);
    break;
  default:
    return object;
  }
  return unlinked;
};

$.zip = function() {
  if(arguments.length === 0) return [];
  for(var j=0, ans=[], l=arguments.length, ml=arguments[0].length; j<ml; j++) {
    for(var i=0, row=[]; i<l; i++) {
      row.push(arguments[i][j]);
    }
    ans.push(row);
  }
  return ans;
};

/*
  Method: rgbToHex

  Converts an RGB array into a Hex string.

  Parameters:

  srcArray - (array) An array with R, G and B values

  Example:
  (start code js)
  $jit.util.rgbToHex([255, 255, 255]); //'#ffffff'
  (end code)
*/
$.rgbToHex = function(srcArray, array) {
  if (srcArray.length < 3)
    return null;
  if (srcArray.length == 4 && srcArray[3] == 0 && !array)
    return 'transparent';
  var hex = [];
  for ( var i = 0; i < 3; i++) {
    var bit = (srcArray[i] - 0).toString(16);
    hex.push(bit.length == 1 ? '0' + bit : bit);
  }
  return array ? hex : '#' + hex.join('');
};

/*
  Method: hexToRgb

  Converts an Hex color string into an RGB array.

  Parameters:

  hex - (string) A color hex string.

  Example:
  (start code js)
  $jit.util.hexToRgb('#fff'); //[255, 255, 255]
  (end code)
*/
$.hexToRgb = function(hex) {
  if (hex.length != 7) {
    hex = hex.match(/^#?(\w{1,2})(\w{1,2})(\w{1,2})$/);
    hex.shift();
    if (hex.length != 3)
      return null;
    var rgb = [];
    for ( var i = 0; i < 3; i++) {
      var value = hex[i];
      if (value.length == 1)
        value += value;
      rgb.push(parseInt(value, 16));
    }
    return rgb;
  } else {
    hex = parseInt(hex.slice(1), 16);
    return [ hex >> 16, hex >> 8 & 0xff, hex & 0xff ];
  }
};

$.destroy = function(elem) {
  $.clean(elem);
  if (elem.parentNode)
    elem.parentNode.removeChild(elem);
  if (elem.clearAttributes)
    elem.clearAttributes();
};

$.clean = function(elem) {
  for (var ch = elem.childNodes, i = 0, l = ch.length; i < l; i++) {
    $.destroy(ch[i]);
  }
};

/*
  Method: addEvent

  Cross-browser add event listener.

  Parameters:

  obj - (obj) The Element to attach the listener to.
  type - (string) The listener type. For example 'click', or 'mousemove'.
  fn - (function) The callback function to be used when the event is fired.

  Example:
  (start code js)
  $jit.util.addEvent(elem, 'click', function(){ alert('hello'); });
  (end code)
*/
$.addEvent = function(obj, type, fn) {
  if (obj.addEventListener)
    obj.addEventListener(type, fn, false);
  else
    obj.attachEvent('on' + type, fn);
};

$.addEvents = function(obj, typeObj) {
  for(var type in typeObj) {
    $.addEvent(obj, type, typeObj[type]);
  }
};

$.hasClass = function(obj, klass) {
  return (' ' + obj.className + ' ').indexOf(' ' + klass + ' ') > -1;
};

$.addClass = function(obj, klass) {
  if (!$.hasClass(obj, klass))
    obj.className = (obj.className + " " + klass);
};

$.removeClass = function(obj, klass) {
  obj.className = obj.className.replace(new RegExp(
      '(^|\\s)' + klass + '(?:\\s|$)'), '$1');
};

$.getPos = function(elem) {
  var offset = getOffsets(elem);
  var scroll = getScrolls(elem);
  return {
    x: offset.x - scroll.x,
    y: offset.y - scroll.y
  };

  function getOffsets(elem) {
    var position = {
      x: 0,
      y: 0
    };
    while (elem && !isBody(elem)) {
      position.x += elem.offsetLeft;
      position.y += elem.offsetTop;
      elem = elem.offsetParent;
    }
    return position;
  }

  function getScrolls(elem) {
    var position = {
      x: 0,
      y: 0
    };
    while (elem && !isBody(elem)) {
      position.x += elem.scrollLeft;
      position.y += elem.scrollTop;
      elem = elem.parentNode;
    }
    return position;
  }

  function isBody(element) {
    return (/^(?:body|html)$/i).test(element.tagName);
  }
};

/*
  Method: $.getDir

  Get or compute the direction style (right-to-left or left-to-right) of an element (or document body by default if no element is provided). Returns the direction as a string "rtl" / "ltr".

  Parameters:

  elem - (optional) The element to check direction of (document.body if undefined).
*/
$.getDir = function(elem) {
    var element = document.getElementById(elem) || document.body;
    if (element.currentStyle)
	var dir = element.currentStyle.direction;
    else if (window.getComputedStyle)
	var dir = document.defaultView.getComputedStyle(element, null)
	              .getPropertyValue('direction');
    return dir;
};

$.event = {
  get: function(e, win) {
    win = win || window;
    return e || win.event;
  },
  getWheel: function(e) {
    return e.wheelDelta? e.wheelDelta / 120 : -(e.detail || 0) / 3;
  },
  isRightClick: function(e) {
    return (e.which == 3 || e.button == 2);
  },
  getPos: function(e, win) {
    // get mouse position
    win = win || window;
    e = e || win.event;
    var doc = win.document;
    doc = doc.documentElement || doc.body;
    //TODO(nico): make touch event handling better
    if(e.touches && e.touches.length) {
      e = e.touches[0];
    }
    var page = {
      x: e.pageX || (e.clientX + doc.scrollLeft),
      y: e.pageY || (e.clientY + doc.scrollTop)
    };
    return page;
  },
  stop: function(e) {
    if (e.stopPropagation) e.stopPropagation();
    e.cancelBubble = true;
    if (e.preventDefault) e.preventDefault();
    else e.returnValue = false;
  }
};

$jit.util = $jit.id = $;

var Class = function(properties) {
  properties = properties || {};
  var klass = function() {
    for ( var key in this) {
      if (typeof this[key] != 'function')
        this[key] = $.unlink(this[key]);
    }
    this.constructor = klass;
    if (Class.prototyping)
      return this;
    var instance = this.initialize ? this.initialize.apply(this, arguments)
        : this;
    //typize
    this.$$family = 'class';
    return instance;
  };

  for ( var mutator in Class.Mutators) {
    if (!properties[mutator])
      continue;
    properties = Class.Mutators[mutator](properties, properties[mutator]);
    delete properties[mutator];
  }

  $.extend(klass, this);
  klass.constructor = Class;
  klass.prototype = properties;
  return klass;
};

Class.Mutators = {

  Implements: function(self, klasses) {
    $.each($.splat(klasses), function(klass) {
      Class.prototyping = klass;
      var instance = (typeof klass == 'function') ? new klass : klass;
      for ( var prop in instance) {
        if (!(prop in self)) {
          self[prop] = instance[prop];
        }
      }
      delete Class.prototyping;
    });
    return self;
  }

};

$.extend(Class, {

  inherit: function(object, properties) {
    for ( var key in properties) {
      var override = properties[key];
      var previous = object[key];
      var type = $.type(override);
      if (previous && type == 'function') {
        if (override != previous) {
          Class.override(object, key, override);
        }
      } else if (type == 'object') {
        object[key] = $.merge(previous, override);
      } else {
        object[key] = override;
      }
    }
    return object;
  },

  override: function(object, name, method) {
    var parent = Class.prototyping;
    if (parent && object[name] != parent[name])
      parent = null;
    var override = function() {
      var previous = this.parent;
      this.parent = parent ? parent[name] : object[name];
      var value = method.apply(this, arguments);
      this.parent = previous;
      return value;
    };
    object[name] = override;
  }

});

Class.prototype.implement = function() {
  var proto = this.prototype;
  $.each(Array.prototype.slice.call(arguments || []), function(properties) {
    Class.inherit(proto, properties);
  });
  return this;
};

$jit.Class = Class;

/*
  Object: $jit.json

  Provides JSON utility functions.

  Most of these functions are JSON-tree traversal and manipulation functions.
*/
$jit.json = {
  /*
     Method: prune

     Clears all tree nodes having depth greater than maxLevel.

     Parameters:

        tree - (object) A JSON tree object. For more information please see <Loader.loadJSON>.
        maxLevel - (number) An integer specifying the maximum level allowed for this tree. All nodes having depth greater than max level will be deleted.

  */
  prune: function(tree, maxLevel) {
    this.each(tree, function(elem, i) {
      if (i == maxLevel && elem.children) {
        delete elem.children;
        elem.children = [];
      }
    });
  },
  /*
     Method: getParent

     Returns the parent node of the node having _id_ as id.

     Parameters:

        tree - (object) A JSON tree object. See also <Loader.loadJSON>.
        id - (string) The _id_ of the child node whose parent will be returned.

    Returns:

        A tree JSON node if any, or false otherwise.

  */
  getParent: function(tree, id) {
    if (tree.id == id)
      return false;
    var ch = tree.children;
    if (ch && ch.length > 0) {
      for ( var i = 0; i < ch.length; i++) {
        if (ch[i].id == id)
          return tree;
        else {
          var ans = this.getParent(ch[i], id);
          if (ans)
            return ans;
        }
      }
    }
    return false;
  },
  /*
     Method: getSubtree

     Returns the subtree that matches the given id.

     Parameters:

        tree - (object) A JSON tree object. See also <Loader.loadJSON>.
        id - (string) A node *unique* identifier.

     Returns:

        A subtree having a root node matching the given id. Returns null if no subtree matching the id is found.

  */
  getSubtree: function(tree, id) {
    if (tree.id == id)
      return tree;
    for ( var i = 0, ch = tree.children; ch && i < ch.length; i++) {
      var t = this.getSubtree(ch[i], id);
      if (t != null)
        return t;
    }
    return null;
  },
  /*
     Method: eachLevel

      Iterates on tree nodes with relative depth less or equal than a specified level.

     Parameters:

        tree - (object) A JSON tree or subtree. See also <Loader.loadJSON>.
        initLevel - (number) An integer specifying the initial relative level. Usually zero.
        toLevel - (number) An integer specifying a top level. This method will iterate only through nodes with depth less than or equal this number.
        action - (function) A function that receives a node and an integer specifying the actual level of the node.

    Example:
   (start code js)
     $jit.json.eachLevel(tree, 0, 3, function(node, depth) {
        alert(node.name + ' ' + depth);
     });
   (end code)
  */
  eachLevel: function(tree, initLevel, toLevel, action) {
    if (initLevel <= toLevel) {
      action(tree, initLevel);
      if(!tree.children) return;
      for ( var i = 0, ch = tree.children; i < ch.length; i++) {
        this.eachLevel(ch[i], initLevel + 1, toLevel, action);
      }
    }
  },
  /*
     Method: each

      A JSON tree iterator.

     Parameters:

        tree - (object) A JSON tree or subtree. See also <Loader.loadJSON>.
        action - (function) A function that receives a node.

    Example:
    (start code js)
      $jit.json.each(tree, function(node) {
        alert(node.name);
      });
    (end code)

  */
  each: function(tree, action) {
    this.eachLevel(tree, 0, Number.MAX_VALUE, action);
  }
};


/*
     An object containing multiple type of transformations. 
*/

$jit.Trans = {
  $extend: true,
  
  linear: function(p){
    return p;
  }
};

var Trans = $jit.Trans;

(function(){

  var makeTrans = function(transition, params){
    params = $.splat(params);
    return $.extend(transition, {
      easeIn: function(pos){
        return transition(pos, params);
      },
      easeOut: function(pos){
        return 1 - transition(1 - pos, params);
      },
      easeInOut: function(pos){
        return (pos <= 0.5)? transition(2 * pos, params) / 2 : (2 - transition(
            2 * (1 - pos), params)) / 2;
      }
    });
  };

  var transitions = {

    Pow: function(p, x){
      return Math.pow(p, x[0] || 6);
    },

    Expo: function(p){
      return Math.pow(2, 8 * (p - 1));
    },

    Circ: function(p){
      return 1 - Math.sin(Math.acos(p));
    },

    Sine: function(p){
      return 1 - Math.sin((1 - p) * Math.PI / 2);
    },

    Back: function(p, x){
      x = x[0] || 1.618;
      return Math.pow(p, 2) * ((x + 1) * p - x);
    },

    Bounce: function(p){
      var value;
      for ( var a = 0, b = 1; 1; a += b, b /= 2) {
        if (p >= (7 - 4 * a) / 11) {
          value = b * b - Math.pow((11 - 6 * a - 11 * p) / 4, 2);
          break;
        }
      }
      return value;
    },

    Elastic: function(p, x){
      return Math.pow(2, 10 * --p)
          * Math.cos(20 * p * Math.PI * (x[0] || 1) / 3);
    }

  };

  $.each(transitions, function(val, key){
    Trans[key] = makeTrans(val);
  });

  $.each( [
      'Quad', 'Cubic', 'Quart', 'Quint'
  ], function(elem, i){
    Trans[elem] = makeTrans(function(p){
      return Math.pow(p, [
        i + 2
      ]);
    });
  });

})();

/*
   A Class that can perform animations for generic objects.

   If you are looking for animation transitions please take a look at the <Trans> object.

   Used by:

   <Graph.Plot>
   
   Based on:
   
   The Animation class is based in the MooTools Framework <http://mootools.net>. Copyright (c) 2006-2009 Valerio Proietti, <http://mad4milk.net/>. MIT license <http://mootools.net/license.txt>.

*/

var Animation = new Class( {

  initialize: function(options){
    this.setOptions(options);
  },

  setOptions: function(options){
    var opt = {
      duration: 2500,
      fps: 40,
      transition: Trans.Quart.easeInOut,
      compute: $.empty,
      complete: $.empty,
      link: 'ignore'
    };
    this.opt = $.merge(opt, options || {});
    return this;
  },

  step: function(){
    var time = $.time(), opt = this.opt;
    if (time < this.time + opt.duration) {
      var delta = opt.transition((time - this.time) / opt.duration);
      opt.compute(delta);
    } else {
      this.timer = clearInterval(this.timer);
      opt.compute(1);
      opt.complete();
    }
  },

  start: function(){
    if (!this.check())
      return this;
    this.time = 0;
    this.startTimer();
    return this;
  },

  startTimer: function(){
    var that = this, fps = this.opt.fps;
    if (this.timer)
      return false;
    this.time = $.time() - this.time;
    this.timer = setInterval((function(){
      that.step();
    }), Math.round(1000 / fps));
    return true;
  },

  pause: function(){
    this.stopTimer();
    return this;
  },

  resume: function(){
    this.startTimer();
    return this;
  },

  stopTimer: function(){
    if (!this.timer)
      return false;
    this.time = $.time() - this.time;
    this.timer = clearInterval(this.timer);
    return true;
  },

  check: function(){
    if (!this.timer)
      return true;
    if (this.opt.link == 'cancel') {
      this.stopTimer();
      return true;
    }
    return false;
  }
});


var Options = function() {
  var args = arguments;
  for(var i=0, l=args.length, ans={}; i<l; i++) {
    var opt = Options[args[i]];
    if(opt.$extend) {
      $.extend(ans, opt);
    } else {
      ans[args[i]] = opt;  
    }
  }
  return ans;
};

/*
 * File: Options.AreaChart.js
 *
*/

/*
  Object: Options.AreaChart
  
  <AreaChart> options. 
  Other options included in the AreaChart are <Options.Canvas>, <Options.Label>, <Options.Margin>, <Options.Tips> and <Options.Events>.
  
  Syntax:
  
  (start code js)

  Options.AreaChart = {
    animate: true,
    labelOffset: 3,
    type: 'stacked',
    selectOnHover: true,
    showAggregates: true,
    showLabels: true,
    filterOnClick: false,
    restoreOnRightClick: false
  };
  
  (end code)
  
  Example:
  
  (start code js)

  var areaChart = new $jit.AreaChart({
    animate: true,
    type: 'stacked:gradient',
    selectOnHover: true,
    filterOnClick: true,
    restoreOnRightClick: true
  });
  
  (end code)

  Parameters:
  
  animate - (boolean) Default's *true*. Whether to add animated transitions when filtering/restoring stacks.
  labelOffset - (number) Default's *3*. Adds margin between the label and the default place where it should be drawn.
  type - (string) Default's *'stacked'*. Stack style. Posible values are 'stacked', 'stacked:gradient' to add gradients.
  selectOnHover - (boolean) Default's *true*. If true, it will add a mark to the hovered stack.
  showAggregates - (boolean, function) Default's *true*. Display the values of the stacks. Can also be a function that returns *true* or *false* to display or filter some values. That same function can also return a string with the formatted value.
  showLabels - (boolean, function) Default's *true*. Display the name of the slots. Can also be a function that returns *true* or *false* to display or not each label.
  filterOnClick - (boolean) Default's *true*. Select the clicked stack by hiding all other stacks.
  restoreOnRightClick - (boolean) Default's *true*. Show all stacks by right clicking.
  
*/
  
Options.AreaChart = {
  $extend: true,

  animate: true,
  labelOffset: 3, // label offset
  type: 'stacked', // gradient
  Tips: {
    enable: false,
    onShow: $.empty,
    onHide: $.empty
  },
  Events: {
    enable: false,
    onClick: $.empty
  },
  selectOnHover: true,
  showAggregates: true,
  showLabels: true,
  filterOnClick: false,
  restoreOnRightClick: false
};

/*
 * File: Options.Margin.js
 *
*/

/*
  Object: Options.Margin
  
  Canvas drawing margins. 
  
  Syntax:
  
  (start code js)

  Options.Margin = {
    top: 0,
    left: 0,
    right: 0,
    bottom: 0
  };
  
  (end code)
  
  Example:
  
  (start code js)

  var viz = new $jit.Viz({
    Margin: {
      right: 10,
      bottom: 20
    }
  });
  
  (end code)

  Parameters:
  
  top - (number) Default's *0*. Top margin.
  left - (number) Default's *0*. Left margin.
  right - (number) Default's *0*. Right margin.
  bottom - (number) Default's *0*. Bottom margin.
  
*/

Options.Margin = {
  $extend: false,
  
  top: 0,
  left: 0,
  right: 0,
  bottom: 0
};

/*
 * File: Options.Canvas.js
 *
*/

/*
  Object: Options.Canvas
  
  These are Canvas general options, like where to append it in the DOM, its dimensions, background, 
  and other more advanced options.
  
  Syntax:
  
  (start code js)

  Options.Canvas = {
    injectInto: 'id',
    type: '2D', //'3D'
    width: false,
    height: false,
    useCanvas: false,
    withLabels: true,
    background: false
  };  
  (end code)
  
  Example:
  
  (start code js)
  var viz = new $jit.Viz({
    injectInto: 'someContainerId',
    width: 500,
    height: 700
  });
  (end code)
  
  Parameters:
  
  injectInto - *required* (string|element) The id of the DOM container for the visualization. It can also be an Element provided that it has an id.
  type - (string) Context type. Default's 2D but can be 3D for webGL enabled browsers.
  width - (number) Default's to the *container's offsetWidth*. The width of the canvas.
  height - (number) Default's to the *container's offsetHeight*. The height of the canvas.
  useCanvas - (boolean|object) Default's *false*. You can pass another <Canvas> instance to be used by the visualization.
  withLabels - (boolean) Default's *true*. Whether to use a label container for the visualization.
  background - (boolean|object) Default's *false*. An object containing information about the rendering of a background canvas.
*/

Options.Canvas = {
    $extend: true,
    
    injectInto: 'id',
    type: '2D',
    width: false,
    height: false,
    useCanvas: false,
    withLabels: true,
    background: false,
    
    Scene: {
      Lighting: {
        enable: false,
        ambient: [1, 1, 1],
        directional: {
          direction: { x: -100, y: -100, z: -100 },
          color: [0.5, 0.3, 0.1]
        }
      }
    }
};

/*
 * File: Options.Tree.js
 *
*/

/*
  Object: Options.Tree

  Options related to (strict) Tree layout algorithms. These options are used by the <ST> visualization.

  Syntax:

  (start code js)
  Options.Tree = {
    orientation: "left",
    subtreeOffset: 8,
    siblingOffset: 5,
    indent:10,
    multitree: false,
    align:"center"
  };
  (end code)

  Example:

  (start code js)
  var st = new $jit.ST({
    orientation: 'left',
    subtreeOffset: 1,
    siblingOFfset: 5,
    multitree: true
  });
  (end code)

  Parameters:

  subtreeOffset - (number) Default's 8. Separation offset between subtrees.
  siblingOffset - (number) Default's 5. Separation offset between siblings.
  orientation - (string) Default's 'left'. Tree orientation layout. Possible values are 'left', 'top', 'right', 'bottom'.
  align - (string) Default's *center*. Whether the tree alignment is 'left', 'center' or 'right'.
  indent - (number) Default's 10. Used when *align* is left or right and shows an indentation between parent and children.
  multitree - (boolean) Default's *false*. Used with the node $orn data property for creating multitrees.
  levelSpacing - (string) Whether each level is evenly spaced or level spacing is relative tothe size of the parent node. The former (which is the default) is 'even', the latter is 'parent'.

*/
Options.Tree = {
    $extend: true,

    orientation: "left",
    subtreeOffset: 8,
    siblingOffset: 5,
    indent:10,
    multitree: false,
    align:"center",
    levelSpacing: "even"
};


/*
 * File: Options.Node.js
 *
*/

/*
  Object: Options.Node

  Provides Node rendering options for Tree and Graph based visualizations.

  Syntax:
    
  (start code js)
  Options.Node = {
    overridable: false,
    type: 'circle',
    color: '#ccb',
    alpha: 1,
    dim: 3,
    height: 20,
    width: 90,
    autoHeight: false,
    autoWidth: false,
    lineWidth: 1,
    transform: true,
    align: "center",
    angularWidth:1,
    span:1,
    CanvasStyles: {}
  };
  (end code)
  
  Example:
  
  (start code js)
  var viz = new $jit.Viz({
    Node: {
      overridable: true,
      width: 30,
      autoHeight: true,
      type: 'rectangle'
    }
  });
  (end code)
  
  Parameters:

  overridable - (boolean) Default's *false*. Determine whether or not general node properties can be overridden by a particular <Graph.Node>.
  type - (string) Default's *circle*. Node's shape. Node built-in types include 'circle', 'rectangle', 'square', 'ellipse', 'triangle', 'star'. The default Node type might vary in each visualization. You can also implement (non built-in) custom Node types into your visualizations.
  color - (string) Default's *#ccb*. Node color.
  alpha - (number) Default's *1*. The Node's alpha value. *1* is for full opacity.
  dim - (number) Default's *3*. An extra parameter used by 'circle', 'square', 'triangle' and 'star' node types. Depending on each shape, this parameter can set the radius of a circle, half the length of the side of a square, half the base and half the height of a triangle or the length of a side of a star (concave decagon).
  height - (number) Default's *20*. Used by 'rectangle' and 'ellipse' node types. The height of the node shape.
  width - (number) Default's *90*. Used by 'rectangle' and 'ellipse' node types. The width of the node shape.
  autoHeight - (boolean) Default's *false*. Whether to set an auto height for the node depending on the content of the Node's label.
  autoWidth - (boolean) Default's *false*. Whether to set an auto width for the node depending on the content of the Node's label.
  lineWidth - (number) Default's *1*. Used only by some Node shapes. The line width of the strokes of a node.
  transform - (boolean) Default's *true*. Only used by the <Hypertree> visualization. Whether to scale the nodes according to the moebius transformation.
  align - (string) Default's *center*. Possible values are 'center', 'left' or 'right'. Used only by the <ST> visualization, these parameters are used for aligning nodes when some of they dimensions vary.
  angularWidth - (number) Default's *1*. Used in radial layouts (like <RGraph> or <Sunburst> visualizations). The amount of relative 'space' set for a node.
  span - (number) Default's *1*. Used in radial layouts (like <RGraph> or <Sunburst> visualizations). The angle span amount set for a node.
  CanvasStyles - (object) Default's an empty object (i.e. {}). Attach any other canvas specific property that you'd set to the canvas context before plotting a Node.

*/
Options.Node = {
  $extend: false,
  
  overridable: false,
  type: 'circle',
  color: '#ccb',
  alpha: 1,
  dim: 3,
  height: 20,
  width: 90,
  autoHeight: false,
  autoWidth: false,
  lineWidth: 1,
  transform: true,
  align: "center",
  angularWidth:1,
  span:1,
  //Raw canvas styles to be
  //applied to the context instance
  //before plotting a node
  CanvasStyles: {}
};


/*
 * File: Options.Edge.js
 *
*/

/*
  Object: Options.Edge

  Provides Edge rendering options for Tree and Graph based visualizations.

  Syntax:
    
  (start code js)
  Options.Edge = {
    overridable: false,
    type: 'line',
    color: '#ccb',
    lineWidth: 1,
    dim:15,
    alpha: 1,
    CanvasStyles: {}
  };
  (end code)
  
  Example:
  
  (start code js)
  var viz = new $jit.Viz({
    Edge: {
      overridable: true,
      type: 'line',
      color: '#fff',
      CanvasStyles: {
        shadowColor: '#ccc',
        shadowBlur: 10
      }
    }
  });
  (end code)
  
  Parameters:
    
   overridable - (boolean) Default's *false*. Determine whether or not general edges properties can be overridden by a particular <Graph.Adjacence>.
   type - (string) Default's 'line'. Edge styles include 'line', 'hyperline', 'arrow'. The default Edge type might vary in each visualization. You can also implement custom Edge types.
   color - (string) Default's '#ccb'. Edge color.
   lineWidth - (number) Default's *1*. Line/Edge width.
   alpha - (number) Default's *1*. The Edge's alpha value. *1* is for full opacity.
   dim - (number) Default's *15*. An extra parameter used by other complex shapes such as quadratic, bezier or arrow, to determine the shape's diameter.
   epsilon - (number) Default's *7*. Only used when using *enableForEdges* in <Options.Events>. This dimension is used to create an area for the line where the contains method for the edge returns *true*.
   CanvasStyles - (object) Default's an empty object (i.e. {}). Attach any other canvas specific property that you'd set to the canvas context before plotting an Edge.

  See also:
   
   If you want to know more about how to customize Node/Edge data per element, in the JSON or programmatically, take a look at this article.
*/
Options.Edge = {
  $extend: false,
  
  overridable: false,
  type: 'line',
  color: '#ccb',
  lineWidth: 1,
  dim:15,
  alpha: 1,
  epsilon: 7,

  //Raw canvas styles to be
  //applied to the context instance
  //before plotting an edge
  CanvasStyles: {}
};


/*
 * File: Options.Fx.js
 *
*/

/*
  Object: Options.Fx

  Provides animation options like duration of the animations, frames per second and animation transitions.  

  Syntax:
  
  (start code js)
    Options.Fx = {
      fps:40,
      duration: 2500,
      transition: $jit.Trans.Quart.easeInOut,
      clearCanvas: true
    };
  (end code)
  
  Example:
  
  (start code js)
  var viz = new $jit.Viz({
    duration: 1000,
    fps: 35,
    transition: $jit.Trans.linear
  });
  (end code)
  
  Parameters:
  
  clearCanvas - (boolean) Default's *true*. Whether to clear the frame/canvas when the viz is plotted or animated.
  duration - (number) Default's *2500*. Duration of the animation in milliseconds.
  fps - (number) Default's *40*. Frames per second.
  transition - (object) Default's *$jit.Trans.Quart.easeInOut*. The transition used for the animations. See below for a more detailed explanation.
  
  Object: $jit.Trans
  
  This object is used for specifying different animation transitions in all visualizations.

  There are many different type of animation transitions.

  linear:

  Displays a linear transition

  >Trans.linear
  
  (see Linear.png)

  Quad:

  Displays a Quadratic transition.

  >Trans.Quad.easeIn
  >Trans.Quad.easeOut
  >Trans.Quad.easeInOut
  
 (see Quad.png)

 Cubic:

 Displays a Cubic transition.

 >Trans.Cubic.easeIn
 >Trans.Cubic.easeOut
 >Trans.Cubic.easeInOut

 (see Cubic.png)

 Quart:

 Displays a Quartetic transition.

 >Trans.Quart.easeIn
 >Trans.Quart.easeOut
 >Trans.Quart.easeInOut

 (see Quart.png)

 Quint:

 Displays a Quintic transition.

 >Trans.Quint.easeIn
 >Trans.Quint.easeOut
 >Trans.Quint.easeInOut

 (see Quint.png)

 Expo:

 Displays an Exponential transition.

 >Trans.Expo.easeIn
 >Trans.Expo.easeOut
 >Trans.Expo.easeInOut

 (see Expo.png)

 Circ:

 Displays a Circular transition.

 >Trans.Circ.easeIn
 >Trans.Circ.easeOut
 >Trans.Circ.easeInOut

 (see Circ.png)

 Sine:

 Displays a Sineousidal transition.

 >Trans.Sine.easeIn
 >Trans.Sine.easeOut
 >Trans.Sine.easeInOut

 (see Sine.png)

 Back:

 >Trans.Back.easeIn
 >Trans.Back.easeOut
 >Trans.Back.easeInOut

 (see Back.png)

 Bounce:

 Bouncy transition.

 >Trans.Bounce.easeIn
 >Trans.Bounce.easeOut
 >Trans.Bounce.easeInOut

 (see Bounce.png)

 Elastic:

 Elastic curve.

 >Trans.Elastic.easeIn
 >Trans.Elastic.easeOut
 >Trans.Elastic.easeInOut

 (see Elastic.png)
 
 Based on:
     
 Easing and Transition animation methods are based in the MooTools Framework <http://mootools.net>. Copyright (c) 2006-2010 Valerio Proietti, <http://mad4milk.net/>. MIT license <http://mootools.net/license.txt>.


*/
Options.Fx = {
  $extend: true,
  
  fps:40,
  duration: 2500,
  transition: $jit.Trans.Quart.easeInOut,
  clearCanvas: true
};

/*
 * File: Options.Label.js
 *
*/
/*
  Object: Options.Label

  Provides styling for Labels such as font size, family, etc. Also sets Node labels as HTML, SVG or Native canvas elements.  

  Syntax:
  
  (start code js)
    Options.Label = {
      overridable: false,
      type: 'HTML', //'SVG', 'Native'
      style: ' ',
      size: 10,
      family: 'sans-serif',
      textAlign: 'center',
      textBaseline: 'alphabetic',
      color: '#fff'
    };
  (end code)
  
  Example:
  
  (start code js)
  var viz = new $jit.Viz({
    Label: {
      type: 'Native',
      size: 11,
      color: '#ccc'
    }
  });
  (end code)
  
  Parameters:
    
  overridable - (boolean) Default's *false*. Determine whether or not general label properties can be overridden by a particular <Graph.Node>.
  type - (string) Default's *HTML*. The type for the labels. Can be 'HTML', 'SVG' or 'Native' canvas labels.
  style - (string) Default's *empty string*. Can be 'italic' or 'bold'. This parameter is only taken into account when using 'Native' canvas labels. For DOM based labels the className *node* is added to the DOM element for styling via CSS. You can also use <Options.Controller> methods to style individual labels.
  size - (number) Default's *10*. The font's size. This parameter is only taken into account when using 'Native' canvas labels. For DOM based labels the className *node* is added to the DOM element for styling via CSS. You can also use <Options.Controller> methods to style individual labels.
  family - (string) Default's *sans-serif*. The font's family. This parameter is only taken into account when using 'Native' canvas labels. For DOM based labels the className *node* is added to the DOM element for styling via CSS. You can also use <Options.Controller> methods to style individual labels.
  color - (string) Default's *#fff*. The font's color. This parameter is only taken into account when using 'Native' canvas labels. For DOM based labels the className *node* is added to the DOM element for styling via CSS. You can also use <Options.Controller> methods to style individual labels.
*/
Options.Label = {
  $extend: false,
  
  overridable: false,
  type: 'HTML', //'SVG', 'Native'
  style: ' ',
  size: 10,
  family: 'sans-serif',
  textAlign: 'center',
  textBaseline: 'alphabetic',
  color: '#fff'
};


/*
 * File: Options.Tips.js
 *
 */

/*
  Object: Options.Tips
  
  Tips options
  
  Syntax:
    
  (start code js)
  Options.Tips = {
    enable: false,
    type: 'auto',
    offsetX: 20,
    offsetY: 20,
    onShow: $.empty,
    onHide: $.empty
  };
  (end code)
  
  Example:
  
  (start code js)
  var viz = new $jit.Viz({
    Tips: {
      enable: true,
      type: 'Native',
      offsetX: 10,
      offsetY: 10,
      onShow: function(tip, node) {
        tip.innerHTML = node.name;
      }
    }
  });
  (end code)

  Parameters:

  enable - (boolean) Default's *false*. If *true*, a tooltip will be shown when a node is hovered. The tooltip is a div DOM element having "tip" as CSS class. 
  type - (string) Default's *auto*. Defines where to attach the MouseEnter/Leave tooltip events. Possible values are 'Native' to attach them to the canvas or 'HTML' to attach them to DOM label elements (if defined). 'auto' sets this property to the value of <Options.Label>'s *type* property.
  offsetX - (number) Default's *20*. An offset added to the current tooltip x-position (which is the same as the current mouse position). Default's 20.
  offsetY - (number) Default's *20*. An offset added to the current tooltip y-position (which is the same as the current mouse position). Default's 20.
  onShow(tip, node) - This callack is used right before displaying a tooltip. The first formal parameter is the tip itself (which is a DivElement). The second parameter may be a <Graph.Node> for graph based visualizations or an object with label, value properties for charts.
  onHide() - This callack is used when hiding a tooltip.

*/
Options.Tips = {
  $extend: false,
  
  enable: false,
  type: 'auto',
  offsetX: 20,
  offsetY: 20,
  force: false,
  onShow: $.empty,
  onHide: $.empty
};


/*
 * File: Options.NodeStyles.js
 *
 */

/*
  Object: Options.NodeStyles
  
  Apply different styles when a node is hovered or selected.
  
  Syntax:
    
  (start code js)
  Options.NodeStyles = {
    enable: false,
    type: 'auto',
    stylesHover: false,
    stylesClick: false
  };
  (end code)
  
  Example:
  
  (start code js)
  var viz = new $jit.Viz({
    NodeStyles: {
      enable: true,
      type: 'Native',
      stylesHover: {
        dim: 30,
        color: '#fcc'
      },
      duration: 600
    }
  });
  (end code)

  Parameters:
  
  enable - (boolean) Default's *false*. Whether to enable this option.
  type - (string) Default's *auto*. Use this to attach the hover/click events in the nodes or the nodes labels (if they have been defined as DOM elements: 'HTML' or 'SVG', see <Options.Label> for more details). The default 'auto' value will set NodeStyles to the same type defined for <Options.Label>.
  stylesHover - (boolean|object) Default's *false*. An object with node styles just like the ones defined for <Options.Node> or *false* otherwise.
  stylesClick - (boolean|object) Default's *false*. An object with node styles just like the ones defined for <Options.Node> or *false* otherwise.
*/

Options.NodeStyles = {
  $extend: false,
  
  enable: false,
  type: 'auto',
  stylesHover: false,
  stylesClick: false
};


/*
 * File: Options.Events.js
 *
*/

/*
  Object: Options.Events
  
  Configuration for adding mouse/touch event handlers to Nodes.
  
  Syntax:
  
  (start code js)
  Options.Events = {
    enable: false,
    enableForEdges: false,
    type: 'auto',
    onClick: $.empty,
    onRightClick: $.empty,
    onMouseMove: $.empty,
    onMouseEnter: $.empty,
    onMouseLeave: $.empty,
    onDragStart: $.empty,
    onDragMove: $.empty,
    onDragCancel: $.empty,
    onDragEnd: $.empty,
    onTouchStart: $.empty,
    onTouchMove: $.empty,
    onTouchEnd: $.empty,
    onTouchCancel: $.empty,
    onMouseWheel: $.empty
  };
  (end code)
  
  Example:
  
  (start code js)
  var viz = new $jit.Viz({
    Events: {
      enable: true,
      onClick: function(node, eventInfo, e) {
        viz.doSomething();
      },
      onMouseEnter: function(node, eventInfo, e) {
        viz.canvas.getElement().style.cursor = 'pointer';
      },
      onMouseLeave: function(node, eventInfo, e) {
        viz.canvas.getElement().style.cursor = '';
      }
    }
  });
  (end code)
  
  Parameters:
  
  enable - (boolean) Default's *false*. Whether to enable the Event system.
  enableForEdges - (boolean) Default's *false*. Whether to track events also in arcs. If *true* the same callbacks -described below- are used for nodes *and* edges. A simple duck type check for edges is to check for *node.nodeFrom*.
  type - (string) Default's 'auto'. Whether to attach the events onto the HTML labels (via event delegation) or to use the custom 'Native' canvas Event System of the library. 'auto' is set when you let the <Options.Label> *type* parameter decide this.
  onClick(node, eventInfo, e) - Triggered when a user performs a click in the canvas. *node* is the <Graph.Node> clicked or false if no node has been clicked. *e* is the grabbed event (should return the native event in a cross-browser manner). *eventInfo* is an object containing useful methods like *getPos* to get the mouse position relative to the canvas. 
  onRightClick(node, eventInfo, e) - Triggered when a user performs a right click in the canvas. *node* is the <Graph.Node> right clicked or false if no node has been clicked. *e* is the grabbed event (should return the native event in a cross-browser manner). *eventInfo* is an object containing useful methods like *getPos* to get the mouse position relative to the canvas. 
  onMouseMove(node, eventInfo, e) - Triggered when the user moves the mouse. *node* is the <Graph.Node> under the cursor as it's moving over the canvas or false if no node has been clicked. *e* is the grabbed event (should return the native event in a cross-browser manner).  *eventInfo* is an object containing useful methods like *getPos* to get the mouse position relative to the canvas.
  onMouseEnter(node, eventInfo, e) - Triggered when a user moves the mouse over a node. *node* is the <Graph.Node> that the mouse just entered. *e* is the grabbed event (should return the native event in a cross-browser manner). *eventInfo* is an object containing useful methods like *getPos* to get the mouse position relative to the canvas. 
  onMouseLeave(node, eventInfo, e) - Triggered when the user mouse-outs a node. *node* is the <Graph.Node> 'mouse-outed'. *e* is the grabbed event (should return the native event in a cross-browser manner). *eventInfo* is an object containing useful methods like *getPos* to get the mouse position relative to the canvas. 
  onDragStart(node, eventInfo, e) - Triggered when the user mouse-downs over a node. *node* is the <Graph.Node> being pressed. *e* is the grabbed event (should return the native event in a cross-browser manner). *eventInfo* is an object containing useful methods like *getPos* to get the mouse position relative to the canvas. 
  onDragMove(node, eventInfo, e) - Triggered when a user, after pressing the mouse button over a node, moves the mouse around. *node* is the <Graph.Node> being dragged. *e* is the grabbed event (should return the native event in a cross-browser manner). *eventInfo* is an object containing useful methods like *getPos* to get the mouse position relative to the canvas. 
  onDragEnd(node, eventInfo, e) - Triggered when a user finished dragging a node. *node* is the <Graph.Node> being dragged. *e* is the grabbed event (should return the native event in a cross-browser manner). *eventInfo* is an object containing useful methods like *getPos* to get the mouse position relative to the canvas. 
  onDragCancel(node, eventInfo, e) - Triggered when the user releases the mouse button over a <Graph.Node> that wasn't dragged (i.e. the user didn't perform any mouse movement after pressing the mouse button). *node* is the <Graph.Node> being dragged. *e* is the grabbed event (should return the native event in a cross-browser manner). *eventInfo* is an object containing useful methods like *getPos* to get the mouse position relative to the canvas. 
  onTouchStart(node, eventInfo, e) - Behaves just like onDragStart. 
  onTouchMove(node, eventInfo, e) - Behaves just like onDragMove. 
  onTouchEnd(node, eventInfo, e) - Behaves just like onDragEnd. 
  onTouchCancel(node, eventInfo, e) - Behaves just like onDragCancel.
  onMouseWheel(delta, e) - Triggered when the user uses the mouse scroll over the canvas. *delta* is 1 or -1 depending on the sense of the mouse scroll.
*/

Options.Events = {
  $extend: false,
  
  enable: false,
  enableForEdges: false,
  type: 'auto',
  onClick: $.empty,
  onRightClick: $.empty,
  onMouseMove: $.empty,
  onMouseEnter: $.empty,
  onMouseLeave: $.empty,
  onDragStart: $.empty,
  onDragMove: $.empty,
  onDragCancel: $.empty,
  onDragEnd: $.empty,
  onTouchStart: $.empty,
  onTouchMove: $.empty,
  onTouchEnd: $.empty,
  onTouchCancel: $.empty,
  onMouseWheel: $.empty
};


/*
 * File: Options.Navigation.js
 *
*/

/*
  Object: Options.Navigation
  
  Panning and zooming options for Graph/Tree based visualizations. These options are implemented 
  by all visualizations except charts (<AreaChart>, <BarChart> and <PieChart>).
  
  Syntax:
  
  (start code js)

  Options.Navigation = {
    enable: false,
    type: 'auto',
    panning: false, //true, 'avoid nodes'
    zooming: false
  };
  
  (end code)
  
  Example:
    
  (start code js)
  var viz = new $jit.Viz({
    Navigation: {
      enable: true,
      panning: 'avoid nodes',
      zooming: 20
    }
  });
  (end code)
  
  Parameters:
  
  enable - (boolean) Default's *false*. Whether to enable Navigation capabilities.
  type - (string) Default's 'auto'. Whether to attach the navigation events onto the HTML labels (via event delegation) or to use the custom 'Native' canvas Event System of the library. When 'auto' set when you let the <Options.Label> *type* parameter decide this.
  panning - (boolean|string) Default's *false*. Set this property to *true* if you want to add Drag and Drop panning support to the visualization. You can also set this parameter to 'avoid nodes' to enable DnD panning but disable it if the DnD is taking place over a node. This is useful when some other events like Drag & Drop for nodes are added to <Graph.Nodes>.
  zooming - (boolean|number) Default's *false*. Set this property to a numeric value to turn mouse-scroll zooming on. The number will be proportional to the mouse-scroll sensitivity.
  
*/

Options.Navigation = {
  $extend: false,
  
  enable: false,
  type: 'auto',
  panning: false, //true | 'avoid nodes'
  zooming: false
};

/*
 * File: Options.Controller.js
 *
*/

/*
  Object: Options.Controller
  
  Provides controller methods. Controller methods are callback functions that get called at different stages 
  of the animation, computing or plotting of the visualization.
  
  Implemented by:
    
  All visualizations except charts (<AreaChart>, <BarChart> and <PieChart>).
  
  Syntax:
  
  (start code js)

  Options.Controller = {
    onBeforeCompute: $.empty,
    onAfterCompute:  $.empty,
    onCreateLabel:   $.empty,
    onPlaceLabel:    $.empty,
    onComplete:      $.empty,
    onBeforePlotLine:$.empty,
    onAfterPlotLine: $.empty,
    onBeforePlotNode:$.empty,
    onAfterPlotNode: $.empty,
    request:         false
  };
  
  (end code)
  
  Example:
    
  (start code js)
  var viz = new $jit.Viz({
    onBeforePlotNode: function(node) {
      if(node.selected) {
        node.setData('color', '#ffc');
      } else {
        node.removeData('color');
      }
    },
    onBeforePlotLine: function(adj) {
      if(adj.nodeFrom.selected && adj.nodeTo.selected) {
        adj.setData('color', '#ffc');
      } else {
        adj.removeData('color');
      }
    },
    onAfterCompute: function() {
      alert("computed!");
    }
  });
  (end code)
  
  Parameters:

   onBeforeCompute(node) - This method is called right before performing all computations and animations. The selected <Graph.Node> is passed as parameter.
   onAfterCompute() - This method is triggered after all animations or computations ended.
   onCreateLabel(domElement, node) - This method receives a new label DIV element as first parameter, and the corresponding <Graph.Node> as second parameter. This method will only be called once for each label. This method is useful when adding events or styles to the labels used by the JIT.
   onPlaceLabel(domElement, node) - This method receives a label DIV element as first parameter and the corresponding <Graph.Node> as second parameter. This method is called each time a label has been placed in the visualization, for example at each step of an animation, and thus it allows you to update the labels properties, such as size or position. Note that onPlaceLabel will be triggered after updating the labels positions. That means that, for example, the left and top css properties are already updated to match the nodes positions. Width and height properties are not set however.
   onBeforePlotNode(node) - This method is triggered right before plotting each <Graph.Node>. This method is useful for changing a node style right before plotting it.
   onAfterPlotNode(node) - This method is triggered right after plotting each <Graph.Node>.
   onBeforePlotLine(adj) - This method is triggered right before plotting a <Graph.Adjacence>. This method is useful for adding some styles to a particular edge before being plotted.
   onAfterPlotLine(adj) - This method is triggered right after plotting a <Graph.Adjacence>.
   onBeforeRemoveNode(node) - This method is triggered right before removing each <Graph.Node>.
   
    *Used in <ST>, <TM.Base> and <Icicle> visualizations*
    
    request(nodeId, level, onComplete) - This method is used for buffering information into the visualization. When clicking on an empty node, the visualization will make a request for this node's subtrees, specifying a given level for this subtree (defined by _levelsToShow_). Once the request is completed, the onComplete callback should be called with the given result. This is useful to provide on-demand information into the visualizations withought having to load the entire information from start. The parameters used by this method are _nodeId_, which is the id of the root of the subtree to request, _level_ which is the depth of the subtree to be requested (0 would mean just the root node). _onComplete_ is an object having the callback method _onComplete.onComplete(json)_ that should be called once the json has been retrieved.  
 
 */
Options.Controller = {
  $extend: true,
  
  onBeforeCompute:   $.empty,
  onAfterCompute:    $.empty,
  onCreateLabel:     $.empty,
  onPlaceLabel:      $.empty,
  onComplete:        $.empty,
  onBeforePlotLine:  $.empty,
  onAfterPlotLine:   $.empty,
  onBeforePlotNode:  $.empty,
  onAfterPlotNode:   $.empty,
  onBeforeRemoveNode:$.empty,
  request:         false
};


/*
 * File: Extras.js
 * 
 * Provides Extras such as Tips and Style Effects.
 * 
 * Description:
 * 
 * Provides the <Tips> and <NodeStyles> classes and functions.
 *
 */

/*
 * Manager for mouse events (clicking and mouse moving).
 * 
 * This class is used for registering objects implementing onClick
 * and onMousemove methods. These methods are called when clicking or
 * moving the mouse around  the Canvas.
 * For now, <Tips> and <NodeStyles> are classes implementing these methods.
 * 
 */
var ExtrasInitializer = {
  initialize: function(className, viz) {
    this.viz = viz;
    this.canvas = viz.canvas;
    this.config = viz.config[className];
    this.nodeTypes = viz.fx.nodeTypes;
    var type = this.config.type;
    this.dom = type == 'auto'? (viz.config.Label.type != 'Native') : (type != 'Native');
    this.labelContainer = this.dom && viz.labels.getLabelContainer();
    this.isEnabled() && this.initializePost();
  },
  initializePost: $.empty,
  setAsProperty: $.lambda(false),
  isEnabled: function() {
    return this.config.enable;
  },
  isLabel: function(e, win, group) {
    e = $.event.get(e, win);
    var labelContainer = this.labelContainer,
        target = e.target || e.srcElement,
        related = e.relatedTarget;
    if(group) {
      return related && related == this.viz.canvas.getCtx().canvas 
          && !!target && this.isDescendantOf(target, labelContainer);
    } else {
      return this.isDescendantOf(target, labelContainer);
    }
  },
  isDescendantOf: function(elem, par) {
    while(elem && elem.parentNode) {
      if(elem.parentNode == par)
        return elem;
      elem = elem.parentNode;
    }
    return false;
  }
};

var EventsInterface = {
  onMouseUp: $.empty,
  onMouseDown: $.empty,
  onMouseMove: $.empty,
  onMouseOver: $.empty,
  onMouseOut: $.empty,
  onMouseWheel: $.empty,
  onTouchStart: $.empty,
  onTouchMove: $.empty,
  onTouchEnd: $.empty,
  onTouchCancel: $.empty
};

var MouseEventsManager = new Class({
  initialize: function(viz) {
    this.viz = viz;
    this.canvas = viz.canvas;
    this.node = false;
    this.edge = false;
    this.registeredObjects = [];
    this.attachEvents();
  },
  
  attachEvents: function() {
    var htmlCanvas = this.canvas.getElement(), 
        that = this;
    htmlCanvas.oncontextmenu = $.lambda(false);
    $.addEvents(htmlCanvas, {
      'mouseup': function(e, win) {
        var event = $.event.get(e, win);
        that.handleEvent('MouseUp', e, win, 
            that.makeEventObject(e, win), 
            $.event.isRightClick(event));
      },
      'mousedown': function(e, win) {
        var event = $.event.get(e, win);
        that.handleEvent('MouseDown', e, win, that.makeEventObject(e, win), 
            $.event.isRightClick(event));
      },
      'mousemove': function(e, win) {
        that.handleEvent('MouseMove', e, win, that.makeEventObject(e, win));
      },
      'mouseover': function(e, win) {
        that.handleEvent('MouseOver', e, win, that.makeEventObject(e, win));
      },
      'mouseout': function(e, win) {
        that.handleEvent('MouseOut', e, win, that.makeEventObject(e, win));
      },
      'touchstart': function(e, win) {
        that.handleEvent('TouchStart', e, win, that.makeEventObject(e, win));
      },
      'touchmove': function(e, win) {
        that.handleEvent('TouchMove', e, win, that.makeEventObject(e, win));
      },
      'touchend': function(e, win) {
        that.handleEvent('TouchEnd', e, win, that.makeEventObject(e, win));
      }
    });
    //attach mousewheel event
    var handleMouseWheel = function(e, win) {
      var event = $.event.get(e, win);
      var wheel = $.event.getWheel(event);
      that.handleEvent('MouseWheel', e, win, wheel);
    };
    //TODO(nico): this is a horrible check for non-gecko browsers!
    if(!document.getBoxObjectFor && window.mozInnerScreenX == null) {
      $.addEvent(htmlCanvas, 'mousewheel', handleMouseWheel);
    } else {
      htmlCanvas.addEventListener('DOMMouseScroll', handleMouseWheel, false);
    }
  },
  
  register: function(obj) {
    this.registeredObjects.push(obj);
  },
  
  handleEvent: function() {
    var args = Array.prototype.slice.call(arguments),
        type = args.shift();
    for(var i=0, regs=this.registeredObjects, l=regs.length; i<l; i++) {
      regs[i]['on' + type].apply(regs[i], args);
    }
  },
  
  makeEventObject: function(e, win) {
    var that = this,
        graph = this.viz.graph,
        fx = this.viz.fx,
        ntypes = fx.nodeTypes,
        etypes = fx.edgeTypes;
    return {
      pos: false,
      node: false,
      edge: false,
      contains: false,
      getNodeCalled: false,
      getEdgeCalled: false,
      getPos: function() {
        //TODO(nico): check why this can't be cache anymore when using edge detection
        //if(this.pos) return this.pos;
        var canvas = that.viz.canvas,
            s = canvas.getSize(),
            p = canvas.getPos(),
            ox = canvas.translateOffsetX,
            oy = canvas.translateOffsetY,
            sx = canvas.scaleOffsetX,
            sy = canvas.scaleOffsetY,
            pos = $.event.getPos(e, win);
        this.pos = {
          x: (pos.x - p.x - s.width/2 - ox) * 1/sx,
          y: (pos.y - p.y - s.height/2 - oy) * 1/sy
        };
        return this.pos;
      },
      getNode: function() {
        if(this.getNodeCalled) return this.node;
        this.getNodeCalled = true;
        for(var id in graph.nodes) {
          var n = graph.nodes[id],
              geom = n && ntypes[n.getData('type')],
              contains = geom && geom.contains && geom.contains.call(fx, n, this.getPos());
          if(contains) {
            this.contains = contains;
            return that.node = this.node = n;
          }
        }
        return that.node = this.node = false;
      },
      getEdge: function() {
        if(this.getEdgeCalled) return this.edge;
        this.getEdgeCalled = true;
        var hashset = {};
        for(var id in graph.edges) {
          var edgeFrom = graph.edges[id];
          hashset[id] = true;
          for(var edgeId in edgeFrom) {
            if(edgeId in hashset) continue;
            var e = edgeFrom[edgeId],
                geom = e && etypes[e.getData('type')],
                contains = geom && geom.contains && geom.contains.call(fx, e, this.getPos());
            if(contains) {
              this.contains = contains;
              return that.edge = this.edge = e;
            }
          }
        }
        return that.edge = this.edge = false;
      },
      getContains: function() {
        if(this.getNodeCalled) return this.contains;
        this.getNode();
        return this.contains;
      }
    };
  }
});

/* 
 * Provides the initialization function for <NodeStyles> and <Tips> implemented 
 * by all main visualizations.
 *
 */
var Extras = {
  initializeExtras: function() {
    var mem = new MouseEventsManager(this), that = this;
    $.each(['NodeStyles', 'Tips', 'Navigation', 'Events'], function(k) {
      var obj = new Extras.Classes[k](k, that);
      if(obj.isEnabled()) {
        mem.register(obj);
      }
      if(obj.setAsProperty()) {
        that[k.toLowerCase()] = obj;
      }
    });
  }   
};

Extras.Classes = {};
/*
  Class: Events
   
  This class defines an Event API to be accessed by the user.
  The methods implemented are the ones defined in the <Options.Events> object.
*/

Extras.Classes.Events = new Class({
  Implements: [ExtrasInitializer, EventsInterface],
  
  initializePost: function() {
    this.fx = this.viz.fx;
    this.ntypes = this.viz.fx.nodeTypes;
    this.etypes = this.viz.fx.edgeTypes;
    
    this.hovered = false;
    this.pressed = false;
    this.touched = false;

    this.touchMoved = false;
    this.moved = false;
    
  },
  
  setAsProperty: $.lambda(true),
  
  onMouseUp: function(e, win, event, isRightClick) {
    var evt = $.event.get(e, win);
    if(!this.moved) {
      if(isRightClick) {
        this.config.onRightClick(this.hovered, event, evt);
      } else {
        this.config.onClick(this.pressed, event, evt);
      }
    }
    if(this.pressed) {
      if(this.moved) {
        this.config.onDragEnd(this.pressed, event, evt);
      } else {
        this.config.onDragCancel(this.pressed, event, evt);
      }
      this.pressed = this.moved = false;
    }
  },

  onMouseOut: function(e, win, event) {
   //mouseout a label
   var evt = $.event.get(e, win), label;
   if(this.dom && (label = this.isLabel(e, win, true))) {
     this.config.onMouseLeave(this.viz.graph.getNode(label.id),
                              event, evt);
     this.hovered = false;
     return;
   }
   //mouseout canvas
   var rt = evt.relatedTarget,
       canvasWidget = this.canvas.getElement();
   while(rt && rt.parentNode) {
     if(canvasWidget == rt.parentNode) return;
     rt = rt.parentNode;
   }
   if(this.hovered) {
     this.config.onMouseLeave(this.hovered,
         event, evt);
     this.hovered = false;
   }
  },
  
  onMouseOver: function(e, win, event) {
    //mouseover a label
    var evt = $.event.get(e, win), label;
    if(this.dom && (label = this.isLabel(e, win, true))) {
      this.hovered = this.viz.graph.getNode(label.id);
      this.config.onMouseEnter(this.hovered,
                               event, evt);
    }
  },
  
  onMouseMove: function(e, win, event) {
   var label, evt = $.event.get(e, win);
   if(this.pressed) {
     this.moved = true;
     this.config.onDragMove(this.pressed, event, evt);
     return;
   }
   if(this.dom) {
     this.config.onMouseMove(this.hovered,
         event, evt);
   } else {
     if(this.hovered) {
       var hn = this.hovered;
       var geom = hn.nodeFrom? this.etypes[hn.getData('type')] : this.ntypes[hn.getData('type')];
       var contains = geom && geom.contains 
         && geom.contains.call(this.fx, hn, event.getPos());
       if(contains) {
         this.config.onMouseMove(hn, event, evt);
         return;
       } else {
         this.config.onMouseLeave(hn, event, evt);
         this.hovered = false;
       }
     }
     if(this.hovered = (event.getNode() || (this.config.enableForEdges && event.getEdge()))) {
       this.config.onMouseEnter(this.hovered, event, evt);
     } else {
       this.config.onMouseMove(false, event, evt);
     }
   }
  },
  
  onMouseWheel: function(e, win, delta) {
    this.config.onMouseWheel(delta, $.event.get(e, win));
  },
  
  onMouseDown: function(e, win, event) {
    var evt = $.event.get(e, win), label;
    if(this.dom) {
      if(label = this.isLabel(e, win)) {
        this.pressed = this.viz.graph.getNode(label.id);
      }
    } else {
      this.pressed = event.getNode() || (this.config.enableForEdges && event.getEdge());
    }
    this.pressed && this.config.onDragStart(this.pressed, event, evt);
  },
  
  onTouchStart: function(e, win, event) {
    var evt = $.event.get(e, win), label;
    if(this.dom && (label = this.isLabel(e, win))) {
      this.touched = this.viz.graph.getNode(label.id);
    } else {
      this.touched = event.getNode() || (this.config.enableForEdges && event.getEdge());
    }
    this.touched && this.config.onTouchStart(this.touched, event, evt);
  },
  
  onTouchMove: function(e, win, event) {
    var evt = $.event.get(e, win);
    if(this.touched) {
      this.touchMoved = true;
      this.config.onTouchMove(this.touched, event, evt);
    }
  },
  
  onTouchEnd: function(e, win, event) {
    var evt = $.event.get(e, win);
    if(this.touched) {
      if(this.touchMoved) {
        this.config.onTouchEnd(this.touched, event, evt);
      } else {
        this.config.onTouchCancel(this.touched, event, evt);
      }
      this.touched = this.touchMoved = false;
    }
  }
});

/*
   Class: Tips
    
   A class containing tip related functions. This class is used internally.
   
   Used by:
   
   <ST>, <Sunburst>, <Hypertree>, <RGraph>, <TM>, <ForceDirected>, <Icicle>
   
   See also:
   
   <Options.Tips>
*/

Extras.Classes.Tips = new Class({
  Implements: [ExtrasInitializer, EventsInterface],
  
  initializePost: function() {
    //add DOM tooltip
    if(document.body) {
      var tip = $('_tooltip') || document.createElement('div');
      tip.id = '_tooltip';
      tip.className = 'tip';
      $.extend(tip.style, {
        position: 'absolute',
        display: 'none',
        zIndex: 13000
      });
      document.body.appendChild(tip);
      this.tip = tip;
      this.node = false;
    }
  },
  
  setAsProperty: $.lambda(true),
  
  onMouseOut: function(e, win) {
    //mouseout a label
    var evt = $.event.get(e, win);
    if(this.dom && this.isLabel(e, win, true)) {
      this.hide(true);
      return;
    }
    //mouseout canvas
    var rt = e.relatedTarget,
        canvasWidget = this.canvas.getElement();
    while(rt && rt.parentNode) {
      if(canvasWidget == rt.parentNode) return;
      rt = rt.parentNode;
    }
    this.hide(false);
  },
  
  onMouseOver: function(e, win) {
    //mouseover a label
    var label;
    if(this.dom && (label = this.isLabel(e, win, false))) {
      this.node = this.viz.graph.getNode(label.id);
      this.config.onShow(this.tip, this.node, label);
    }
  },
  
  onMouseMove: function(e, win, opt) {
    if(this.dom && this.isLabel(e, win)) {
      this.setTooltipPosition($.event.getPos(e, win));
    }
    if(!this.dom) {
      var node = opt.getNode();
      if(!node) {
        this.hide(true);
        return;
      }
      if(this.config.force || !this.node || this.node.id != node.id) {
        this.node = node;
        this.config.onShow(this.tip, node, opt.getContains());
      }
      this.setTooltipPosition($.event.getPos(e, win));
    }
  },
  
  setTooltipPosition: function(pos) {
    var tip = this.tip, 
        style = tip.style, 
        cont = this.config;
    style.display = '';
    //get viewport dimensions
    var elem = document.compatMode === "CSS1Compat" && document.documentElement ||
               document.body ||
               document.documentElement;
    var view = {
      'width': elem.clientWidth,
      'height': elem.clientHeight,
      'x': window.pageXOffset ||
           document.documentElement && document.documentElement.scrollLeft ||
           document.body && document.body.scrollLeft ||
           0,
      'y': window.pageYOffset ||
           document.documentElement && document.documentElement.scrollTop ||
           document.body && document.body.scrollTop ||
           0
    };
    //get tooltip dimensions
    var obj = {
      'width': tip.offsetWidth,
      'height': tip.offsetHeight  
    };
    //set tooltip position
    var x = cont.offsetX, y = cont.offsetY;
    style.top = ((pos.y + obj.height + y > view.height + view.y)?
        (pos.y - obj.height - y) : pos.y + y) + 'px';
    style.left = ((pos.x + obj.width + x > view.width + view.x)?
        (pos.x - obj.width - x) : pos.x + x) + 'px';
  },
  
  hide: function(triggerCallback) {
    this.tip.style.display = 'none';
    triggerCallback && this.config.onHide();
  }
});

/*
  Class: NodeStyles
   
  Change node styles when clicking or hovering a node. This class is used internally.
  
  Used by:
  
  <ST>, <Sunburst>, <Hypertree>, <RGraph>, <TM>, <ForceDirected>, <Icicle>
  
  See also:
  
  <Options.NodeStyles>
*/
Extras.Classes.NodeStyles = new Class({
  Implements: [ExtrasInitializer, EventsInterface],
  
  initializePost: function() {
    this.fx = this.viz.fx;
    this.types = this.viz.fx.nodeTypes;
    this.nStyles = this.config;
    this.nodeStylesOnHover = this.nStyles.stylesHover;
    this.nodeStylesOnClick = this.nStyles.stylesClick;
    this.hoveredNode = false;
    this.fx.nodeFxAnimation = new Animation();
    
    this.down = false;
    this.move = false;
  },
  
  onMouseOut: function(e, win) {
    this.down = this.move = false;
    if(!this.hoveredNode) return;
    //mouseout a label
    if(this.dom && this.isLabel(e, win, true)) {
      this.toggleStylesOnHover(this.hoveredNode, false);
    }
    //mouseout canvas
    var rt = e.relatedTarget,
        canvasWidget = this.canvas.getElement();
    while(rt && rt.parentNode) {
      if(canvasWidget == rt.parentNode) return;
      rt = rt.parentNode;
    }
    this.toggleStylesOnHover(this.hoveredNode, false);
    this.hoveredNode = false;
  },
  
  onMouseOver: function(e, win) {
    //mouseover a label
    var label;
    if(this.dom && (label = this.isLabel(e, win, true))) {
      var node = this.viz.graph.getNode(label.id);
      if(node.selected) return;
      this.hoveredNode = node;
      this.toggleStylesOnHover(this.hoveredNode, true);
    }
  },
  
  onMouseDown: function(e, win, event, isRightClick) {
    if(isRightClick) return;
    var label;
    if(this.dom && (label = this.isLabel(e, win))) {
      this.down = this.viz.graph.getNode(label.id);
    } else if(!this.dom) {
      this.down = event.getNode();
    }
    this.move = false;
  },
  
  onMouseUp: function(e, win, event, isRightClick) {
    if(isRightClick) return;
    if(!this.move) {
      this.onClick(event.getNode());
    }
    this.down = this.move = false;
  },
  
  getRestoredStyles: function(node, type) {
    var restoredStyles = {}, 
        nStyles = this['nodeStylesOn' + type];
    for(var prop in nStyles) {
      restoredStyles[prop] = node.styles['$' + prop];
    }
    return restoredStyles;
  },
  
  toggleStylesOnHover: function(node, set) {
    if(this.nodeStylesOnHover) {
      this.toggleStylesOn('Hover', node, set);
    }
  },

  toggleStylesOnClick: function(node, set) {
    if(this.nodeStylesOnClick) {
      this.toggleStylesOn('Click', node, set);
    }
  },
  
  toggleStylesOn: function(type, node, set) {
    var viz = this.viz;
    var nStyles = this.nStyles;
    if(set) {
      var that = this;
      if(!node.styles) {
        node.styles = $.merge(node.data, {});
      }
      for(var s in this['nodeStylesOn' + type]) {
        var $s = '$' + s;
        if(!($s in node.styles)) {
            node.styles[$s] = node.getData(s); 
        }
      }
      viz.fx.nodeFx($.extend({
        'elements': {
          'id': node.id,
          'properties': that['nodeStylesOn' + type]
         },
         transition: Trans.Quart.easeOut,
         duration:300,
         fps:40
      }, this.config));
    } else {
      var restoredStyles = this.getRestoredStyles(node, type);
      viz.fx.nodeFx($.extend({
        'elements': {
          'id': node.id,
          'properties': restoredStyles
         },
         transition: Trans.Quart.easeOut,
         duration:300,
         fps:40
      }, this.config));
    }
  },

  onClick: function(node) {
    if(!node) return;
    var nStyles = this.nodeStylesOnClick;
    if(!nStyles) return;
    //if the node is selected then unselect it
    if(node.selected) {
      this.toggleStylesOnClick(node, false);
      delete node.selected;
    } else {
      //unselect all selected nodes...
      this.viz.graph.eachNode(function(n) {
        if(n.selected) {
          for(var s in nStyles) {
            n.setData(s, n.styles['$' + s], 'end');
          }
          delete n.selected;
        }
      });
      //select clicked node
      this.toggleStylesOnClick(node, true);
      node.selected = true;
      delete node.hovered;
      this.hoveredNode = false;
    }
  },
  
  onMouseMove: function(e, win, event) {
    //if mouse button is down and moving set move=true
    if(this.down) this.move = true;
    //already handled by mouseover/out
    if(this.dom && this.isLabel(e, win)) return;
    var nStyles = this.nodeStylesOnHover;
    if(!nStyles) return;
    
    if(!this.dom) {
      if(this.hoveredNode) {
        var geom = this.types[this.hoveredNode.getData('type')];
        var contains = geom && geom.contains && geom.contains.call(this.fx, 
            this.hoveredNode, event.getPos());
        if(contains) return;
      }
      var node = event.getNode();
      //if no node is being hovered then just exit
      if(!this.hoveredNode && !node) return;
      //if the node is hovered then exit
      if(node.hovered) return;
      //select hovered node
      if(node && !node.selected) {
        //check if an animation is running and exit it
        this.fx.nodeFxAnimation.stopTimer();
        //unselect all hovered nodes...
        this.viz.graph.eachNode(function(n) {
          if(n.hovered && !n.selected) {
            for(var s in nStyles) {
              n.setData(s, n.styles['$' + s], 'end');
            }
            delete n.hovered;
          }
        });
        //select hovered node
        node.hovered = true;
        this.hoveredNode = node;
        this.toggleStylesOnHover(node, true);
      } else if(this.hoveredNode && !this.hoveredNode.selected) {
        //check if an animation is running and exit it
        this.fx.nodeFxAnimation.stopTimer();
        //unselect hovered node
        this.toggleStylesOnHover(this.hoveredNode, false);
        delete this.hoveredNode.hovered;
        this.hoveredNode = false;
      }
    }
  }
});

Extras.Classes.Navigation = new Class({
  Implements: [ExtrasInitializer, EventsInterface],
  
  initializePost: function() {
    this.pos = false;
    this.pressed = false;
  },
  
  onMouseWheel: function(e, win, scroll) {
    if(!this.config.zooming) return;
    $.event.stop($.event.get(e, win));
    var val = this.config.zooming / 1000,
        ans = 1 + scroll * val;
    this.canvas.scale(ans, ans);
  },
  
  onMouseDown: function(e, win, eventInfo) {
    if(!this.config.panning) return;
    e.preventDefault ? e.preventDefault() : e.returnValue = false;
    $.addClass(this.canvas.getElement(), 'grabbing');
    if(this.config.panning == 'avoid nodes' && (this.dom? this.isLabel(e, win) : (eventInfo.getNode() || eventInfo.getEdge()))) return;
    this.pressed = true;
    this.pos = eventInfo.getPos();
    var canvas = this.canvas,
        ox = canvas.translateOffsetX,
        oy = canvas.translateOffsetY,
        sx = canvas.scaleOffsetX,
        sy = canvas.scaleOffsetY;
    this.pos.x *= sx;
    this.pos.x += ox;
    this.pos.y *= sy;
    this.pos.y += oy;
  },
  
  onMouseMove: function(e, win, eventInfo) {
    if(!this.config.panning) return;
    if(!this.pressed) return;
    if(this.config.panning == 'avoid nodes' && (this.dom? this.isLabel(e, win) : eventInfo.getNode())) return;
    var thispos = this.pos, 
        currentPos = eventInfo.getPos(),
        canvas = this.canvas,
        ox = canvas.translateOffsetX,
        oy = canvas.translateOffsetY,
        sx = canvas.scaleOffsetX,
        sy = canvas.scaleOffsetY;
    currentPos.x *= sx;
    currentPos.y *= sy;
    currentPos.x += ox;
    currentPos.y += oy;
    var x = currentPos.x - thispos.x,
        y = currentPos.y - thispos.y;
    this.pos = currentPos;
    this.canvas.translate(x * 1/sx, y * 1/sy);
  },
  
  onMouseUp: function(e, win, eventInfo, isRightClick) {
    if(!this.config.panning) return;
    $.removeClass(this.canvas.getElement(), 'grabbing');
    this.pressed = false;
  }
});


/*
 * File: Canvas.js
 *
 */

/*
 Class: Canvas
 
 	A canvas widget used by all visualizations. The canvas object can be accessed by doing *viz.canvas*. If you want to 
 	know more about <Canvas> options take a look at <Options.Canvas>.
 
 A canvas widget is a set of DOM elements that wrap the native canvas DOM Element providing a consistent API and behavior 
 across all browsers. It can also include Elements to add DOM (SVG or HTML) label support to all visualizations.
 
 Example:
 
 Suppose we have this HTML
 
 (start code xml)
 	<div id="infovis"></div>
 (end code)
 
 Now we create a new Visualization
 
 (start code js)
 	var viz = new $jit.Viz({
 		//Where to inject the canvas. Any div container will do.
 		'injectInto':'infovis',
		 //width and height for canvas. 
		 //Default's to the container offsetWidth and Height.
		 'width': 900,
		 'height':500
	 });
 (end code)

 The generated HTML will look like this
 
 (start code xml)
 <div id="infovis">
 	<div id="infovis-canvaswidget" style="position:relative;">
 	<canvas id="infovis-canvas" width=900 height=500
 	style="position:absolute; top:0; left:0; width:900px; height:500px;" />
 	<div id="infovis-label"
 	style="overflow:visible; position:absolute; top:0; left:0; width:900px; height:0px">
 	</div>
 	</div>
 </div>
 (end code)
 
 As you can see, the generated HTML consists of a canvas DOM Element of id *infovis-canvas* and a div label container
 of id *infovis-label*, wrapped in a main div container of id *infovis-canvaswidget*.
 */

var Canvas;
(function() {
  //check for native canvas support
  var canvasType = typeof HTMLCanvasElement,
      supportsCanvas = (canvasType == 'object' || canvasType == 'function');
  //create element function
  function $E(tag, props) {
    var elem = document.createElement(tag);
    for(var p in props) {
      if(typeof props[p] == "object") {
        $.extend(elem[p], props[p]);
      } else {
        elem[p] = props[p];
      }
    }
    if (tag == "canvas" && !supportsCanvas && G_vmlCanvasManager) {
      elem = G_vmlCanvasManager.initElement(document.body.appendChild(elem));
    }
    return elem;
  }
  //canvas widget which we will call just Canvas
  $jit.Canvas = Canvas = new Class({
    canvases: [],
    pos: false,
    element: false,
    labelContainer: false,
    translateOffsetX: 0,
    translateOffsetY: 0,
    scaleOffsetX: 1,
    scaleOffsetY: 1,
    
    initialize: function(viz, opt) {
      this.viz = viz;
      this.opt = this.config = opt;
      var id = $.type(opt.injectInto) == 'string'? 
          opt.injectInto:opt.injectInto.id,
          type = opt.type,
          idLabel = id + "-label", 
          wrapper = $(id),
          width = opt.width || wrapper.offsetWidth,
          height = opt.height || wrapper.offsetHeight;
      this.id = id;
      //canvas options
      var canvasOptions = {
        injectInto: id,
        width: width,
        height: height
      };
      //create main wrapper
      this.element = $E('div', {
        'id': id + '-canvaswidget',
        'style': {
          'position': 'relative',
          'width': width + 'px',
          'height': height + 'px'
        }
      });
      //create label container
      this.labelContainer = this.createLabelContainer(opt.Label.type, 
          idLabel, canvasOptions);
      //create primary canvas
      this.canvases.push(new Canvas.Base[type]({
        config: $.extend({idSuffix: '-canvas'}, canvasOptions),
        plot: function(base) {
          viz.fx.plot();
        },
        resize: function() {
          viz.refresh();
        }
      }));
      //create secondary canvas
      var back = opt.background;
      if(back) {
        var backCanvas = new Canvas.Background[back.type](viz, $.extend(back, canvasOptions));
        this.canvases.push(new Canvas.Base[type](backCanvas));
      }
      //insert canvases
      var len = this.canvases.length;
      while(len--) {
        this.element.appendChild(this.canvases[len].canvas);
        if(len > 0) {
          this.canvases[len].plot();
        }
      }
      this.element.appendChild(this.labelContainer);
      wrapper.appendChild(this.element);
      //Update canvas position when the page is scrolled.
      var timer = null, that = this;
      $.addEvent(window, 'scroll', function() {
        clearTimeout(timer);
        timer = setTimeout(function() {
          that.getPos(true); //update canvas position
        }, 500);
      });
    },
    /*
      Method: getCtx
      
      Returns the main canvas context object
      
      Example:
      
      (start code js)
       var ctx = canvas.getCtx();
       //Now I can use the native canvas context
       //and for example change some canvas styles
       ctx.globalAlpha = 1;
      (end code)
    */
    getCtx: function(i) {
      return this.canvases[i || 0].getCtx();
    },
    /*
      Method: getConfig
      
      Returns the current Configuration for this Canvas Widget.
      
      Example:
      
      (start code js)
       var config = canvas.getConfig();
      (end code)
    */
    getConfig: function() {
      return this.opt;
    },
    /*
      Method: getElement

      Returns the main Canvas DOM wrapper
      
      Example:
      
      (start code js)
       var wrapper = canvas.getElement();
       //Returns <div id="infovis-canvaswidget" ... >...</div> as element
      (end code)
    */
    getElement: function() {
      return this.element;
    },
    /*
      Method: getSize
      
      Returns canvas dimensions.
      
      Returns:
      
      An object with *width* and *height* properties.
      
      Example:
      (start code js)
      canvas.getSize(); //returns { width: 900, height: 500 }
      (end code)
    */
    getSize: function(i) {
      return this.canvases[i || 0].getSize();
    },
    /*
      Method: resize
      
      Resizes the canvas.
      
      Parameters:
      
      width - New canvas width.
      height - New canvas height.
      
      Example:
      
      (start code js)
       canvas.resize(width, height);
      (end code)
    
    */
    resize: function(width, height) {
      this.getPos(true);
      this.translateOffsetX = this.translateOffsetY = 0;
      this.scaleOffsetX = this.scaleOffsetY = 1;
      for(var i=0, l=this.canvases.length; i<l; i++) {
        this.canvases[i].resize(width, height);
      }
      var style = this.element.style;
      style.width = width + 'px';
      style.height = height + 'px';
      if(this.labelContainer)
        this.labelContainer.style.width = width + 'px';
    },
    /*
      Method: translate
      
      Applies a translation to the canvas.
      
      Parameters:
      
      x - (number) x offset.
      y - (number) y offset.
      disablePlot - (boolean) Default's *false*. Set this to *true* if you don't want to refresh the visualization.
      
      Example:
      
      (start code js)
       canvas.translate(30, 30);
      (end code)
    
    */
    translate: function(x, y, disablePlot) {
      this.translateOffsetX += x*this.scaleOffsetX;
      this.translateOffsetY += y*this.scaleOffsetY;
      for(var i=0, l=this.canvases.length; i<l; i++) {
        this.canvases[i].translate(x, y, disablePlot);
      }
    },
    /*
      Method: scale
      
      Scales the canvas.
      
      Parameters:
      
      x - (number) scale value.
      y - (number) scale value.
      disablePlot - (boolean) Default's *false*. Set this to *true* if you don't want to refresh the visualization.
      
      Example:
      
      (start code js)
       canvas.scale(0.5, 0.5);
      (end code)
    
    */
    scale: function(x, y, disablePlot) {
      var px = this.scaleOffsetX * x,
          py = this.scaleOffsetY * y;
      var dx = this.translateOffsetX * (x -1) / px,
          dy = this.translateOffsetY * (y -1) / py;
      this.scaleOffsetX = px;
      this.scaleOffsetY = py;
      for(var i=0, l=this.canvases.length; i<l; i++) {
        this.canvases[i].scale(x, y, true);
      }
      this.translate(dx, dy, false);
    },
    /*
      Method: getZoom

      Returns canvas zooming factors. *1* means initial zoom.

      Returns:

      An object with *x* and *y* properties.
    */
    getZoom: function() {
      return new Complex(this.scaleOffsetX, this.scaleOffsetY);
    },
    /*
      Method: setZoom

      Sets the zoom to given factors. *1* means initial zoom.

      Parameters:

      x - (number) zooming factor
      y - (number) zooming factor
      disablePlot - (boolean) Default's *false*. Set this to *true* if you don't want to refresh the visualization.

      Example:
      (start code js)
      canvas.setZoom(2, 2); //sets 2x zoom
      (end code)
    */
    setZoom: function(x, y, disablePlot) {
      var cur = this.getZoom(),
          px = x / cur.x,
          py = y / cur.y;
      this.scale(px, py, disablePlot);
    },
    /*
      Method: getPos
      
      Returns the canvas position as an *x, y* object.
      
      Parameters:
      
      force - (boolean) Default's *false*. Set this to *true* if you want to recalculate the position without using any cache information.
      
      Returns:
      
      An object with *x* and *y* properties.
      
      Example:
      (start code js)
      canvas.getPos(true); //returns { x: 900, y: 500 }
      (end code)
    */
    getPos: function(force){
      if(force || !this.pos) {
        return this.pos = $.getPos(this.getElement());
      }
      return this.pos;
    },
    /*
       Method: clear
       
       Clears the canvas.
    */
    clear: function(i){
      this.canvases[i||0].clear();
    },
    
    path: function(type, action){
      var ctx = this.canvases[0].getCtx();
      ctx.beginPath();
      action(ctx);
      ctx[type]();
      ctx.closePath();
    },
    
    createLabelContainer: function(type, idLabel, dim) {
      var NS = 'http://www.w3.org/2000/svg';
      if(type == 'HTML' || type == 'Native') {
        return $E('div', {
          'id': idLabel,
          'style': {
            'overflow': 'visible',
            'position': 'absolute',
            'top': 0,
            'left': 0,
            'width': dim.width + 'px',
            'height': 0
          }
        });
      } else if(type == 'SVG') {
        var svgContainer = document.createElementNS(NS, 'svg:svg');
        svgContainer.setAttribute("width", dim.width);
        svgContainer.setAttribute('height', dim.height);
        var style = svgContainer.style;
        style.position = 'absolute';
        style.left = style.top = '0px';
        var labelContainer = document.createElementNS(NS, 'svg:g');
        labelContainer.setAttribute('width', dim.width);
        labelContainer.setAttribute('height', dim.height);
        labelContainer.setAttribute('x', 0);
        labelContainer.setAttribute('y', 0);
        labelContainer.setAttribute('id', idLabel);
        svgContainer.appendChild(labelContainer);
        return svgContainer;
      }
    }
  });
  //base canvas wrapper
  Canvas.Base = {};
  Canvas.Base['2D'] = new Class({
    translateOffsetX: 0,
    translateOffsetY: 0,
    scaleOffsetX: 1,
    scaleOffsetY: 1,

    initialize: function(viz) {
      this.viz = viz;
      this.opt = viz.config;
      this.size = false;
      this.createCanvas();
      this.translateToCenter();
    },
    createCanvas: function() {
      var opt = this.opt,
          width = opt.width,
          height = opt.height;
      this.canvas = $E('canvas', {
        'id': opt.injectInto + opt.idSuffix,
        'width': width,
        'height': height,
        'style': {
          'position': 'absolute',
          'top': 0,
          'left': 0,
          'width': width + 'px',
          'height': height + 'px'
        }
      });
    },
    getCtx: function() {
      if(!this.ctx) 
        return this.ctx = this.canvas.getContext('2d');
      return this.ctx;
    },
    getSize: function() {
      if(this.size) return this.size;
      var canvas = this.canvas;
      return this.size = {
        width: canvas.width,
        height: canvas.height
      };
    },
    translateToCenter: function(ps) {
      var size = this.getSize(),
          width = ps? (size.width - ps.width - this.translateOffsetX*2) : size.width;
          height = ps? (size.height - ps.height - this.translateOffsetY*2) : size.height;
      var ctx = this.getCtx();
      ps && ctx.scale(1/this.scaleOffsetX, 1/this.scaleOffsetY);
      ctx.translate(width/2, height/2);
    },
    resize: function(width, height) {
      var size = this.getSize(),
          canvas = this.canvas,
          styles = canvas.style;
      this.size = false;
      canvas.width = width;
      canvas.height = height;
      styles.width = width + "px";
      styles.height = height + "px";
      //small ExCanvas fix
      if(!supportsCanvas) {
        this.translateToCenter(size);
      } else {
        this.translateToCenter();
      }
      this.translateOffsetX =
        this.translateOffsetY = 0;
      this.scaleOffsetX = 
        this.scaleOffsetY = 1;
      this.clear();
      this.viz.resize(width, height, this);
    },
    translate: function(x, y, disablePlot) {
      var sx = this.scaleOffsetX,
          sy = this.scaleOffsetY;
      this.translateOffsetX += x*sx;
      this.translateOffsetY += y*sy;
      this.getCtx().translate(x, y);
      !disablePlot && this.plot();
    },
    scale: function(x, y, disablePlot) {
      this.scaleOffsetX *= x;
      this.scaleOffsetY *= y;
      this.getCtx().scale(x, y);
      !disablePlot && this.plot();
    },
    clear: function(){
      var size = this.getSize(),
          ox = this.translateOffsetX,
          oy = this.translateOffsetY,
          sx = this.scaleOffsetX,
          sy = this.scaleOffsetY;
      this.getCtx().clearRect((-size.width / 2 - ox) * 1/sx, 
                              (-size.height / 2 - oy) * 1/sy, 
                              size.width * 1/sx, size.height * 1/sy);
    },
    plot: function() {
      this.clear();
      this.viz.plot(this);
    }
  });
  //background canvases
  //TODO(nico): document this!
  Canvas.Background = {};
  Canvas.Background.Circles = new Class({
    initialize: function(viz, options) {
      this.viz = viz;
      this.config = $.merge({
        idSuffix: '-bkcanvas',
        levelDistance: 100,
        numberOfCircles: 6,
        CanvasStyles: {},
        offset: 0
      }, options);
    },
    resize: function(width, height, base) {
      this.plot(base);
    },
    plot: function(base) {
      var canvas = base.canvas,
          ctx = base.getCtx(),
          conf = this.config,
          styles = conf.CanvasStyles;
      //set canvas styles
      for(var s in styles) ctx[s] = styles[s];
      var n = conf.numberOfCircles,
          rho = conf.levelDistance;
      for(var i=1; i<=n; i++) {
        ctx.beginPath();
        ctx.arc(0, 0, rho * i, 0, 2 * Math.PI, false);
        ctx.stroke();
        ctx.closePath();
      }
      //TODO(nico): print labels too!
    }
  });
})();


/*
 * File: Polar.js
 * 
 * Defines the <Polar> class.
 *
 * Description:
 *
 * The <Polar> class, just like the <Complex> class, is used by the <Hypertree>, <ST> and <RGraph> as a 2D point representation.
 *
 * See also:
 *
 * <http://en.wikipedia.org/wiki/Polar_coordinates>
 *
*/

/*
   Class: Polar

   A multi purpose polar representation.

   Description:
 
   The <Polar> class, just like the <Complex> class, is used by the <Hypertree>, <ST> and <RGraph> as a 2D point representation.
 
   See also:
 
   <http://en.wikipedia.org/wiki/Polar_coordinates>
 
   Parameters:

      theta - An angle.
      rho - The norm.
*/

var Polar = function(theta, rho) {
  this.theta = theta || 0;
  this.rho = rho || 0;
};

$jit.Polar = Polar;

Polar.prototype = {
    /*
       Method: getc
    
       Returns a complex number.
    
       Parameters:

       simple - _optional_ If *true*, this method will return only an object holding x and y properties and not a <Complex> instance. Default's *false*.

      Returns:
    
          A complex number.
    */
    getc: function(simple) {
        return this.toComplex(simple);
    },

    /*
       Method: getp
    
       Returns a <Polar> representation.
    
       Returns:
    
          A variable in polar coordinates.
    */
    getp: function() {
        return this;
    },


    /*
       Method: set
    
       Sets a number.

       Parameters:

       v - A <Complex> or <Polar> instance.
    
    */
    set: function(v) {
        v = v.getp();
        this.theta = v.theta; this.rho = v.rho;
    },

    /*
       Method: setc
    
       Sets a <Complex> number.

       Parameters:

       x - A <Complex> number real part.
       y - A <Complex> number imaginary part.
    
    */
    setc: function(x, y) {
        this.rho = Math.sqrt(x * x + y * y);
        this.theta = Math.atan2(y, x);
        if(this.theta < 0) this.theta += Math.PI * 2;
    },

    /*
       Method: setp
    
       Sets a polar number.

       Parameters:

       theta - A <Polar> number angle property.
       rho - A <Polar> number rho property.
    
    */
    setp: function(theta, rho) {
        this.theta = theta; 
        this.rho = rho;
    },

    /*
       Method: clone
    
       Returns a copy of the current object.
    
       Returns:
    
          A copy of the real object.
    */
    clone: function() {
        return new Polar(this.theta, this.rho);
    },

    /*
       Method: toComplex
    
        Translates from polar to cartesian coordinates and returns a new <Complex> instance.
    
        Parameters:

        simple - _optional_ If *true* this method will only return an object with x and y properties (and not the whole <Complex> instance). Default's *false*.
 
        Returns:
    
          A new <Complex> instance.
    */
    toComplex: function(simple) {
        var x = Math.cos(this.theta) * this.rho;
        var y = Math.sin(this.theta) * this.rho;
        if(simple) return { 'x': x, 'y': y};
        return new Complex(x, y);
    },

    /*
       Method: add
    
        Adds two <Polar> instances.
    
       Parameters:

       polar - A <Polar> number.

       Returns:
    
          A new Polar instance.
    */
    add: function(polar) {
        return new Polar(this.theta + polar.theta, this.rho + polar.rho);
    },
    
    /*
       Method: scale
    
        Scales a polar norm.
    
        Parameters:

        number - A scale factor.
        
        Returns:
    
          A new Polar instance.
    */
    scale: function(number) {
        return new Polar(this.theta, this.rho * number);
    },
    
    /*
       Method: equals
    
       Comparison method.

       Returns *true* if the theta and rho properties are equal.

       Parameters:

       c - A <Polar> number.

       Returns:

       *true* if the theta and rho parameters for these objects are equal. *false* otherwise.
    */
    equals: function(c) {
        return this.theta == c.theta && this.rho == c.rho;
    },
    
    /*
       Method: $add
    
        Adds two <Polar> instances affecting the current object.
    
       Paramters:

       polar - A <Polar> instance.

       Returns:
    
          The changed object.
    */
    $add: function(polar) {
        this.theta = this.theta + polar.theta; this.rho += polar.rho;
        return this;
    },

    /*
       Method: $madd
    
        Adds two <Polar> instances affecting the current object. The resulting theta angle is modulo 2pi.
    
       Parameters:

       polar - A <Polar> instance.

       Returns:
    
          The changed object.
    */
    $madd: function(polar) {
        this.theta = (this.theta + polar.theta) % (Math.PI * 2); this.rho += polar.rho;
        return this;
    },

    
    /*
       Method: $scale
    
        Scales a polar instance affecting the object.
    
      Parameters:

      number - A scaling factor.

      Returns:
    
          The changed object.
    */
    $scale: function(number) {
        this.rho *= number;
        return this;
    },
    
    /*
      Method: isZero
   
      Returns *true* if the number is zero.
   
   */
    isZero: function () {
      var almostZero = 0.0001, abs = Math.abs;
      return abs(this.theta) < almostZero && abs(this.rho) < almostZero;
    },

    /*
       Method: interpolate
    
        Calculates a polar interpolation between two points at a given delta moment.

        Parameters:
      
        elem - A <Polar> instance.
        delta - A delta factor ranging [0, 1].
    
       Returns:
    
          A new <Polar> instance representing an interpolation between _this_ and _elem_
    */
    interpolate: function(elem, delta) {
        var pi = Math.PI, pi2 = pi * 2;
        var ch = function(t) {
            var a =  (t < 0)? (t % pi2) + pi2 : t % pi2;
            return a;
        };
        var tt = this.theta, et = elem.theta;
        var sum, diff = Math.abs(tt - et);
        if(diff == pi) {
          if(tt > et) {
            sum = ch((et + ((tt - pi2) - et) * delta)) ;
          } else {
            sum = ch((et - pi2 + (tt - (et)) * delta));
          }
        } else if(diff >= pi) {
          if(tt > et) {
            sum = ch((et + ((tt - pi2) - et) * delta)) ;
          } else {
            sum = ch((et - pi2 + (tt - (et - pi2)) * delta));
          }
        } else {  
          sum = ch((et + (tt - et) * delta)) ;
        }
        var r = (this.rho - elem.rho) * delta + elem.rho;
        return {
          'theta': sum,
          'rho': r
        };
    }
};


var $P = function(a, b) { return new Polar(a, b); };

Polar.KER = $P(0, 0);



/*
 * File: Complex.js
 * 
 * Defines the <Complex> class.
 *
 * Description:
 *
 * The <Complex> class, just like the <Polar> class, is used by the <Hypertree>, <ST> and <RGraph> as a 2D point representation.
 *
 * See also:
 *
 * <http://en.wikipedia.org/wiki/Complex_number>
 *
*/

/*
   Class: Complex
    
   A multi-purpose Complex Class with common methods.
 
   Description:
 
   The <Complex> class, just like the <Polar> class, is used by the <Hypertree>, <ST> and <RGraph> as a 2D point representation.
 
   See also:
 
   <http://en.wikipedia.org/wiki/Complex_number>

   Parameters:

   x - _optional_ A Complex number real part.
   y - _optional_ A Complex number imaginary part.
 
*/

var Complex = function(x, y) {
  this.x = x || 0;
  this.y = y || 0;
};

$jit.Complex = Complex;

Complex.prototype = {
    /*
       Method: getc
    
       Returns a complex number.
    
       Returns:
    
          A complex number.
    */
    getc: function() {
        return this;
    },

    /*
       Method: getp
    
       Returns a <Polar> representation of this number.
    
       Parameters:

       simple - _optional_ If *true*, this method will return only an object holding theta and rho properties and not a <Polar> instance. Default's *false*.

       Returns:
    
          A variable in <Polar> coordinates.
    */
    getp: function(simple) {
        return this.toPolar(simple);
    },


    /*
       Method: set
    
       Sets a number.

       Parameters:

       c - A <Complex> or <Polar> instance.
    
    */
    set: function(c) {
      c = c.getc(true);
      this.x = c.x; 
      this.y = c.y;
    },

    /*
       Method: setc
    
       Sets a complex number.

       Parameters:

       x - A <Complex> number Real part.
       y - A <Complex> number Imaginary part.
    
    */
    setc: function(x, y) {
        this.x = x; 
        this.y = y;
    },

    /*
       Method: setp
    
       Sets a polar number.

       Parameters:

       theta - A <Polar> number theta property.
       rho - A <Polar> number rho property.
    
    */
    setp: function(theta, rho) {
        this.x = Math.cos(theta) * rho;
        this.y = Math.sin(theta) * rho;
    },

    /*
       Method: clone
    
       Returns a copy of the current object.
    
       Returns:
    
          A copy of the real object.
    */
    clone: function() {
        return new Complex(this.x, this.y);
    },

    /*
       Method: toPolar
    
       Transforms cartesian to polar coordinates.
    
       Parameters:

       simple - _optional_ If *true* this method will only return an object with theta and rho properties (and not the whole <Polar> instance). Default's *false*.
       
       Returns:
    
          A new <Polar> instance.
    */
    
    toPolar: function(simple) {
        var rho = this.norm();
        var atan = Math.atan2(this.y, this.x);
        if(atan < 0) atan += Math.PI * 2;
        if(simple) return { 'theta': atan, 'rho': rho };
        return new Polar(atan, rho);
    },
    /*
       Method: norm
    
       Calculates a <Complex> number norm.
    
       Returns:
    
          A real number representing the complex norm.
    */
    norm: function () {
        return Math.sqrt(this.squaredNorm());
    },
    
    /*
       Method: squaredNorm
    
       Calculates a <Complex> number squared norm.
    
       Returns:
    
          A real number representing the complex squared norm.
    */
    squaredNorm: function () {
        return this.x*this.x + this.y*this.y;
    },

    /*
       Method: add
    
       Returns the result of adding two complex numbers.
       
       Does not alter the original object.

       Parameters:
    
          pos - A <Complex> instance.
    
       Returns:
    
         The result of adding two complex numbers.
    */
    add: function(pos) {
        return new Complex(this.x + pos.x, this.y + pos.y);
    },

    /*
       Method: prod
    
       Returns the result of multiplying two <Complex> numbers.
       
       Does not alter the original object.

       Parameters:
    
          pos - A <Complex> instance.
    
       Returns:
    
         The result of multiplying two complex numbers.
    */
    prod: function(pos) {
        return new Complex(this.x*pos.x - this.y*pos.y, this.y*pos.x + this.x*pos.y);
    },

    /*
       Method: conjugate
    
       Returns the conjugate of this <Complex> number.

       Does not alter the original object.

       Returns:
    
         The conjugate of this <Complex> number.
    */
    conjugate: function() {
        return new Complex(this.x, -this.y);
    },


    /*
       Method: scale
    
       Returns the result of scaling a <Complex> instance.
       
       Does not alter the original object.

       Parameters:
    
          factor - A scale factor.
    
       Returns:
    
         The result of scaling this complex to a factor.
    */
    scale: function(factor) {
        return new Complex(this.x * factor, this.y * factor);
    },

    /*
       Method: equals
    
       Comparison method.

       Returns *true* if both real and imaginary parts are equal.

       Parameters:

       c - A <Complex> instance.

       Returns:

       A boolean instance indicating if both <Complex> numbers are equal.
    */
    equals: function(c) {
        return this.x == c.x && this.y == c.y;
    },

    /*
       Method: $add
    
       Returns the result of adding two <Complex> numbers.
       
       Alters the original object.

       Parameters:
    
          pos - A <Complex> instance.
    
       Returns:
    
         The result of adding two complex numbers.
    */
    $add: function(pos) {
        this.x += pos.x; this.y += pos.y;
        return this;    
    },
    
    /*
       Method: $prod
    
       Returns the result of multiplying two <Complex> numbers.
       
       Alters the original object.

       Parameters:
    
          pos - A <Complex> instance.
    
       Returns:
    
         The result of multiplying two complex numbers.
    */
    $prod:function(pos) {
        var x = this.x, y = this.y;
        this.x = x*pos.x - y*pos.y;
        this.y = y*pos.x + x*pos.y;
        return this;
    },
    
    /*
       Method: $conjugate
    
       Returns the conjugate for this <Complex>.
       
       Alters the original object.

       Returns:
    
         The conjugate for this complex.
    */
    $conjugate: function() {
        this.y = -this.y;
        return this;
    },
    
    /*
       Method: $scale
    
       Returns the result of scaling a <Complex> instance.
       
       Alters the original object.

       Parameters:
    
          factor - A scale factor.
    
       Returns:
    
         The result of scaling this complex to a factor.
    */
    $scale: function(factor) {
        this.x *= factor; this.y *= factor;
        return this;
    },
    
    /*
       Method: $div
    
       Returns the division of two <Complex> numbers.
       
       Alters the original object.

       Parameters:
    
          pos - A <Complex> number.
    
       Returns:
    
         The result of scaling this complex to a factor.
    */
    $div: function(pos) {
        var x = this.x, y = this.y;
        var sq = pos.squaredNorm();
        this.x = x * pos.x + y * pos.y; this.y = y * pos.x - x * pos.y;
        return this.$scale(1 / sq);
    },

    /*
      Method: isZero
   
      Returns *true* if the number is zero.
   
   */
    isZero: function () {
      var almostZero = 0.0001, abs = Math.abs;
      return abs(this.x) < almostZero && abs(this.y) < almostZero;
    }
};

var $C = function(a, b) { return new Complex(a, b); };

Complex.KER = $C(0, 0);
Complex.IM = $C(0, 1);



/*
 * File: Graph.js
 *
*/

/*
 Class: Graph

 A Graph Class that provides useful manipulation functions. You can find more manipulation methods in the <Graph.Util> object.

 An instance of this class can be accessed by using the *graph* parameter of any tree or graph visualization.
 
 Example:

 (start code js)
   //create new visualization
   var viz = new $jit.Viz(options);
   //load JSON data
   viz.loadJSON(json);
   //access model
   viz.graph; //<Graph> instance
 (end code)
 
 Implements:
 
 The following <Graph.Util> methods are implemented in <Graph>
 
  - <Graph.Util.getNode>
  - <Graph.Util.eachNode>
  - <Graph.Util.computeLevels>
  - <Graph.Util.eachBFS>
  - <Graph.Util.clean>
  - <Graph.Util.getClosestNodeToPos>
  - <Graph.Util.getClosestNodeToOrigin>
 
*/  

$jit.Graph = new Class({

  initialize: function(opt, Node, Edge, Label) {
    var innerOptions = {
    'klass': Complex,
    'Node': {}
    };
    this.Node = Node;
    this.Edge = Edge;
    this.Label = Label;
    this.opt = $.merge(innerOptions, opt || {});
    this.nodes = {};
    this.edges = {};
    
    //add nodeList methods
    var that = this;
    this.nodeList = {};
    for(var p in Accessors) {
      that.nodeList[p] = (function(p) {
        return function() {
          var args = Array.prototype.slice.call(arguments);
          that.eachNode(function(n) {
            n[p].apply(n, args);
          });
        };
      })(p);
    }

 },

/*
     Method: getNode
    
     Returns a <Graph.Node> by *id*.

     Parameters:

     id - (string) A <Graph.Node> id.

     Example:

     (start code js)
       var node = graph.getNode('nodeId');
     (end code)
*/  
 getNode: function(id) {
    if(this.hasNode(id)) return this.nodes[id];
    return false;
 },

 /*
     Method: get
    
     An alias for <Graph.Util.getNode>. Returns a node by *id*.
    
     Parameters:
    
     id - (string) A <Graph.Node> id.
    
     Example:
    
     (start code js)
       var node = graph.get('nodeId');
     (end code)
*/  
  get: function(id) {
    return this.getNode(id);
  },

 /*
   Method: getByName
  
   Returns a <Graph.Node> by *name*.
  
   Parameters:
  
   name - (string) A <Graph.Node> name.
  
   Example:
  
   (start code js)
     var node = graph.getByName('someName');
   (end code)
  */  
  getByName: function(name) {
    for(var id in this.nodes) {
      var n = this.nodes[id];
      if(n.name == name) return n;
    }
    return false;
  },

/*
   Method: getAdjacence
  
   Returns a <Graph.Adjacence> object connecting nodes with ids *id* and *id2*.

   Parameters:

   id - (string) A <Graph.Node> id.
   id2 - (string) A <Graph.Node> id.
*/  
  getAdjacence: function (id, id2) {
    if(id in this.edges) {
      return this.edges[id][id2];
    }
    return false;
 },

    /*
     Method: addNode
    
     Adds a node.
     
     Parameters:
    
      obj - An object with the properties described below

      id - (string) A node id
      name - (string) A node's name
      data - (object) A node's data hash

    See also:
    <Graph.Node>

  */  
  addNode: function(obj) { 
   if(!this.nodes[obj.id]) {  
     var edges = this.edges[obj.id] = {};
     this.nodes[obj.id] = new Graph.Node($.extend({
        'id': obj.id,
        'name': obj.name,
        'data': $.merge(obj.data || {}, {}),
        'adjacencies': edges 
      }, this.opt.Node), 
      this.opt.klass, 
      this.Node, 
      this.Edge,
      this.Label);
    }
    return this.nodes[obj.id];
  },
  
    /*
     Method: addAdjacence
    
     Connects nodes specified by *obj* and *obj2*. If not found, nodes are created.
     
     Parameters:
    
      obj - (object) A <Graph.Node> object.
      obj2 - (object) Another <Graph.Node> object.
      data - (object) A data object. Used to store some extra information in the <Graph.Adjacence> object created.

    See also:

    <Graph.Node>, <Graph.Adjacence>
    */  
  addAdjacence: function (obj, obj2, data) {
    if(!this.hasNode(obj.id)) { this.addNode(obj); }
    if(!this.hasNode(obj2.id)) { this.addNode(obj2); }
    obj = this.nodes[obj.id]; obj2 = this.nodes[obj2.id];
    if(!obj.adjacentTo(obj2)) {
      var adjsObj = this.edges[obj.id] = this.edges[obj.id] || {};
      var adjsObj2 = this.edges[obj2.id] = this.edges[obj2.id] || {};
      adjsObj[obj2.id] = adjsObj2[obj.id] = new Graph.Adjacence(obj, obj2, data, this.Edge, this.Label);
      return adjsObj[obj2.id];
    }
    return this.edges[obj.id][obj2.id];
 },

    /*
     Method: removeNode
    
     Removes a <Graph.Node> matching the specified *id*.

     Parameters:

     id - (string) A node's id.

    */  
  removeNode: function(id) {
    if(this.hasNode(id)) {
      delete this.nodes[id];
      var adjs = this.edges[id];
      for(var to in adjs) {
        delete this.edges[to][id];
      }
      delete this.edges[id];
    }
  },
  
/*
     Method: removeAdjacence
    
     Removes a <Graph.Adjacence> matching *id1* and *id2*.

     Parameters:

     id1 - (string) A <Graph.Node> id.
     id2 - (string) A <Graph.Node> id.
*/  
  removeAdjacence: function(id1, id2) {
    delete this.edges[id1][id2];
    delete this.edges[id2][id1];
  },

   /*
     Method: hasNode
    
     Returns a boolean indicating if the node belongs to the <Graph> or not.
     
     Parameters:
    
        id - (string) Node id.
   */  
  hasNode: function(id) {
    return id in this.nodes;
  },
  
  /*
    Method: empty

    Empties the Graph

  */
  empty: function() { this.nodes = {}; this.edges = {};}

});

var Graph = $jit.Graph;

/*
 Object: Accessors
 
 Defines a set of methods for data, canvas and label styles manipulation implemented by <Graph.Node> and <Graph.Adjacence> instances.
 
 */
var Accessors;

(function () {
  var getDataInternal = function(prefix, prop, type, force, prefixConfig) {
    var data;
    type = type || 'current';
    prefix = "$" + (prefix ? prefix + "-" : "");

    if(type == 'current') {
      data = this.data;
    } else if(type == 'start') {
      data = this.startData;
    } else if(type == 'end') {
      data = this.endData;
    }

    var dollar = prefix + prop;

    if(force) {
      return data[dollar];
    }

    if(!this.Config.overridable)
      return prefixConfig[prop] || 0;

    return (dollar in data) ?
      data[dollar] : ((dollar in this.data) ? this.data[dollar] : (prefixConfig[prop] || 0));
  }

  var setDataInternal = function(prefix, prop, value, type) {
    type = type || 'current';
    prefix = '$' + (prefix ? prefix + '-' : '');

    var data;

    if(type == 'current') {
      data = this.data;
    } else if(type == 'start') {
      data = this.startData;
    } else if(type == 'end') {
      data = this.endData;
    }

    data[prefix + prop] = value;
  }

  var removeDataInternal = function(prefix, properties) {
    prefix = '$' + (prefix ? prefix + '-' : '');
    var that = this;
    $.each(properties, function(prop) {
      var pref = prefix + prop;
      delete that.data[pref];
      delete that.endData[pref];
      delete that.startData[pref];
    });
  }

  Accessors = {
    /*
    Method: getData

    Returns the specified data value property.
    This is useful for querying special/reserved <Graph.Node> data properties
    (i.e dollar prefixed properties).

    Parameters:

      prop  - (string) The name of the property. The dollar sign is not needed. For
              example *getData(width)* will return *data.$width*.
      type  - (string) The type of the data property queried. Default's "current". You can access *start* and *end* 
              data properties also. These properties are used when making animations.
      force - (boolean) Whether to obtain the true value of the property (equivalent to
              *data.$prop*) or to check for *node.overridable = true* first.

    Returns:

      The value of the dollar prefixed property or the global Node/Edge property
      value if *overridable=false*

    Example:
    (start code js)
     node.getData('width'); //will return node.data.$width if Node.overridable=true;
    (end code)
    */
    getData: function(prop, type, force) {
      return getDataInternal.call(this, "", prop, type, force, this.Config);
    },


    /*
    Method: setData

    Sets the current data property with some specific value.
    This method is only useful for reserved (dollar prefixed) properties.

    Parameters:

      prop  - (string) The name of the property. The dollar sign is not necessary. For
              example *setData(width)* will set *data.$width*.
      value - (mixed) The value to store.
      type  - (string) The type of the data property to store. Default's "current" but
              can also be "start" or "end".

    Example:
    
    (start code js)
     node.setData('width', 30);
    (end code)
    
    If we were to make an animation of a node/edge width then we could do
    
    (start code js)
      var node = viz.getNode('nodeId');
      //set start and end values
      node.setData('width', 10, 'start');
      node.setData('width', 30, 'end');
      //will animate nodes width property
      viz.fx.animate({
        modes: ['node-property:width'],
        duration: 1000
      });
    (end code)
    */
    setData: function(prop, value, type) {
      setDataInternal.call(this, "", prop, value, type);
    },

    /*
    Method: setDataset

    Convenience method to set multiple data values at once.
    
    Parameters:
    
    types - (array|string) A set of 'current', 'end' or 'start' values.
    obj - (object) A hash containing the names and values of the properties to be altered.

    Example:
    (start code js)
      node.setDataset(['current', 'end'], {
        'width': [100, 5],
        'color': ['#fff', '#ccc']
      });
      //...or also
      node.setDataset('end', {
        'width': 5,
        'color': '#ccc'
      });
    (end code)
    
    See also: 
    
    <Accessors.setData>
    
    */
    setDataset: function(types, obj) {
      types = $.splat(types);
      for(var attr in obj) {
        for(var i=0, val = $.splat(obj[attr]), l=types.length; i<l; i++) {
          this.setData(attr, val[i], types[i]);
        }
      }
    },
    
    /*
    Method: removeData

    Remove data properties.

    Parameters:

    One or more property names as arguments. The dollar sign is not needed.

    Example:
    (start code js)
    node.removeData('width'); //now the default width value is returned
    (end code)
    */
    removeData: function() {
      removeDataInternal.call(this, "", Array.prototype.slice.call(arguments));
    },

    /*
    Method: getCanvasStyle

    Returns the specified canvas style data value property. This is useful for
    querying special/reserved <Graph.Node> canvas style data properties (i.e.
    dollar prefixed properties that match with $canvas-<name of canvas style>).

    Parameters:

      prop  - (string) The name of the property. The dollar sign is not needed. For
              example *getCanvasStyle(shadowBlur)* will return *data[$canvas-shadowBlur]*.
      type  - (string) The type of the data property queried. Default's *current*. You can access *start* and *end* 
              data properties also.
              
    Example:
    (start code js)
      node.getCanvasStyle('shadowBlur');
    (end code)
    
    See also:
    
    <Accessors.getData>
    */
    getCanvasStyle: function(prop, type, force) {
      return getDataInternal.call(
          this, 'canvas', prop, type, force, this.Config.CanvasStyles);
    },

    /*
    Method: setCanvasStyle

    Sets the canvas style data property with some specific value.
    This method is only useful for reserved (dollar prefixed) properties.
    
    Parameters:
    
    prop - (string) Name of the property. Can be any canvas property like 'shadowBlur', 'shadowColor', 'strokeStyle', etc.
    value - (mixed) The value to set to the property.
    type - (string) Default's *current*. Whether to set *start*, *current* or *end* type properties.
    
    Example:
    
    (start code js)
     node.setCanvasStyle('shadowBlur', 30);
    (end code)
    
    If we were to make an animation of a node/edge shadowBlur canvas style then we could do
    
    (start code js)
      var node = viz.getNode('nodeId');
      //set start and end values
      node.setCanvasStyle('shadowBlur', 10, 'start');
      node.setCanvasStyle('shadowBlur', 30, 'end');
      //will animate nodes canvas style property for nodes
      viz.fx.animate({
        modes: ['node-style:shadowBlur'],
        duration: 1000
      });
    (end code)
    
    See also:
    
    <Accessors.setData>.
    */
    setCanvasStyle: function(prop, value, type) {
      setDataInternal.call(this, 'canvas', prop, value, type);
    },

    /*
    Method: setCanvasStyles

    Convenience method to set multiple styles at once.

    Parameters:
    
    types - (array|string) A set of 'current', 'end' or 'start' values.
    obj - (object) A hash containing the names and values of the properties to be altered.

    See also:
    
    <Accessors.setDataset>.
    */
    setCanvasStyles: function(types, obj) {
      types = $.splat(types);
      for(var attr in obj) {
        for(var i=0, val = $.splat(obj[attr]), l=types.length; i<l; i++) {
          this.setCanvasStyle(attr, val[i], types[i]);
        }
      }
    },

    /*
    Method: removeCanvasStyle

    Remove canvas style properties from data.

    Parameters:
    
    A variable number of canvas style strings.

    See also:
    
    <Accessors.removeData>.
    */
    removeCanvasStyle: function() {
      removeDataInternal.call(this, 'canvas', Array.prototype.slice.call(arguments));
    },

    /*
    Method: getLabelData

    Returns the specified label data value property. This is useful for
    querying special/reserved <Graph.Node> label options (i.e.
    dollar prefixed properties that match with $label-<name of label style>).

    Parameters:

      prop  - (string) The name of the property. The dollar sign prefix is not needed. For
              example *getLabelData(size)* will return *data[$label-size]*.
      type  - (string) The type of the data property queried. Default's *current*. You can access *start* and *end* 
              data properties also.
              
    See also:
    
    <Accessors.getData>.
    */
    getLabelData: function(prop, type, force) {
      return getDataInternal.call(
          this, 'label', prop, type, force, this.Label);
    },

    /*
    Method: setLabelData

    Sets the current label data with some specific value.
    This method is only useful for reserved (dollar prefixed) properties.

    Parameters:
    
    prop - (string) Name of the property. Can be any canvas property like 'shadowBlur', 'shadowColor', 'strokeStyle', etc.
    value - (mixed) The value to set to the property.
    type - (string) Default's *current*. Whether to set *start*, *current* or *end* type properties.
    
    Example:
    
    (start code js)
     node.setLabelData('size', 30);
    (end code)
    
    If we were to make an animation of a node label size then we could do
    
    (start code js)
      var node = viz.getNode('nodeId');
      //set start and end values
      node.setLabelData('size', 10, 'start');
      node.setLabelData('size', 30, 'end');
      //will animate nodes label size
      viz.fx.animate({
        modes: ['label-property:size'],
        duration: 1000
      });
    (end code)
    
    See also:
    
    <Accessors.setData>.
    */
    setLabelData: function(prop, value, type) {
      setDataInternal.call(this, 'label', prop, value, type);
    },

    /*
    Method: setLabelDataset

    Convenience function to set multiple label data at once.

    Parameters:
    
    types - (array|string) A set of 'current', 'end' or 'start' values.
    obj - (object) A hash containing the names and values of the properties to be altered.

    See also:
    
    <Accessors.setDataset>.
    */
    setLabelDataset: function(types, obj) {
      types = $.splat(types);
      for(var attr in obj) {
        for(var i=0, val = $.splat(obj[attr]), l=types.length; i<l; i++) {
          this.setLabelData(attr, val[i], types[i]);
        }
      }
    },

    /*
    Method: removeLabelData

    Remove label properties from data.
    
    Parameters:
    
    A variable number of label property strings.

    See also:
    
    <Accessors.removeData>.
    */
    removeLabelData: function() {
      removeDataInternal.call(this, 'label', Array.prototype.slice.call(arguments));
    }
  };
})();

/*
     Class: Graph.Node

     A <Graph> node.
     
     Implements:
     
     <Accessors> methods.
     
     The following <Graph.Util> methods are implemented by <Graph.Node>
     
    - <Graph.Util.eachAdjacency>
    - <Graph.Util.eachLevel>
    - <Graph.Util.eachSubgraph>
    - <Graph.Util.eachSubnode>
    - <Graph.Util.anySubnode>
    - <Graph.Util.getSubnodes>
    - <Graph.Util.getParents>
    - <Graph.Util.isDescendantOf>     
*/
Graph.Node = new Class({
    
  initialize: function(opt, klass, Node, Edge, Label) {
    var innerOptions = {
      'id': '',
      'name': '',
      'data': {},
      'startData': {},
      'endData': {},
      'adjacencies': {},

      'selected': false,
      'drawn': false,
      'exist': false,

      'angleSpan': {
        'begin': 0,
        'end' : 0
      },

      'pos': new klass,
      'startPos': new klass,
      'endPos': new klass
    };
    
    $.extend(this, $.extend(innerOptions, opt));
    this.Config = this.Node = Node;
    this.Edge = Edge;
    this.Label = Label;
  },

    /*
       Method: adjacentTo
    
       Indicates if the node is adjacent to the node specified by id

       Parameters:
    
          id - (string) A node id.
    
       Example:
       (start code js)
        node.adjacentTo('nodeId') == true;
       (end code)
    */
    adjacentTo: function(node) {
        return node.id in this.adjacencies;
    },

    /*
     Method: adjacentWithDirectionTo

     Indicates if the node has a directed edge to the node specified by id

     Parameters:

     id - (string) A node id.

     Example:
     (start code js)
     node.adjacentWithDirectionTo('nodeId') == true;
     (end code)
     */
    adjacentWithDirectionTo: function(node) {
        var areNeighbors = node.id in this.adjacencies;
        if (!areNeighbors) {
            return false;
        }

        var direction = this.adjacencies[node.id].data.$direction;
        return direction[0] === this.id ;
    },

    /*
       Method: getAdjacency
    
       Returns a <Graph.Adjacence> object connecting the current <Graph.Node> and the node having *id* as id.

       Parameters:
    
          id - (string) A node id.
    */  
    getAdjacency: function(id) {
        return this.adjacencies[id];
    },

    /*
      Method: getPos
   
      Returns the position of the node.
  
      Parameters:
   
         type - (string) Default's *current*. Possible values are "start", "end" or "current".
   
      Returns:
   
        A <Complex> or <Polar> instance.
  
      Example:
      (start code js)
       var pos = node.getPos('end');
      (end code)
   */
   getPos: function(type) {
       type = type || "current";
       if(type == "current") {
         return this.pos;
       } else if(type == "end") {
         return this.endPos;
       } else if(type == "start") {
         return this.startPos;
       }
   },
   /*
     Method: setPos
  
     Sets the node's position.
  
     Parameters:
  
        value - (object) A <Complex> or <Polar> instance.
        type - (string) Default's *current*. Possible values are "start", "end" or "current".
  
     Example:
     (start code js)
      node.setPos(new $jit.Complex(0, 0), 'end');
     (end code)
  */
  setPos: function(value, type) {
      type = type || "current";
      var pos;
      if(type == "current") {
        pos = this.pos;
      } else if(type == "end") {
        pos = this.endPos;
      } else if(type == "start") {
        pos = this.startPos;
      }
      pos.set(value);
  }
});

Graph.Node.implement(Accessors);

/*
     Class: Graph.Adjacence

     A <Graph> adjacence (or edge) connecting two <Graph.Nodes>.
     
     Implements:
     
     <Accessors> methods.

     See also:

     <Graph>, <Graph.Node>

     Properties:
     
      nodeFrom - A <Graph.Node> connected by this edge.
      nodeTo - Another  <Graph.Node> connected by this edge.
      data - Node data property containing a hash (i.e {}) with custom options.
*/
Graph.Adjacence = new Class({
  
  initialize: function(nodeFrom, nodeTo, data, Edge, Label) {
    this.nodeFrom = nodeFrom;
    this.nodeTo = nodeTo;
    this.data = data || {};
    this.startData = {};
    this.endData = {};
    this.Config = this.Edge = Edge;
    this.Label = Label;
  }
});

Graph.Adjacence.implement(Accessors);

/*
   Object: Graph.Util

   <Graph> traversal and processing utility object.
   
   Note:
   
   For your convenience some of these methods have also been appended to <Graph> and <Graph.Node> classes.
*/
Graph.Util = {
    /*
       filter
    
       For internal use only. Provides a filtering function based on flags.
    */
    filter: function(param) {
        if(!param || !($.type(param) == 'string')) return function() { return true; };
        var props = param.split(" ");
        return function(elem) {
            for(var i=0; i<props.length; i++) { 
              if(elem[props[i]]) { 
                return false; 
              }
            }
            return true;
        };
    },
    /*
       Method: getNode
    
       Returns a <Graph.Node> by *id*.
       
       Also implemented by:
       
       <Graph>

       Parameters:

       graph - (object) A <Graph> instance.
       id - (string) A <Graph.Node> id.

       Example:

       (start code js)
         $jit.Graph.Util.getNode(graph, 'nodeid');
         //or...
         graph.getNode('nodeid');
       (end code)
    */
    getNode: function(graph, id) {
        return graph.nodes[id];
    },
    
    /*
       Method: eachNode
    
       Iterates over <Graph> nodes performing an *action*.
       
       Also implemented by:
       
       <Graph>.

       Parameters:

       graph - (object) A <Graph> instance.
       action - (function) A callback function having a <Graph.Node> as first formal parameter.

       Example:
       (start code js)
         $jit.Graph.Util.eachNode(graph, function(node) {
          alert(node.name);
         });
         //or...
         graph.eachNode(function(node) {
           alert(node.name);
         });
       (end code)
    */
    eachNode: function(graph, action, flags) {
        var filter = this.filter(flags);
        for(var i in graph.nodes) {
          if(filter(graph.nodes[i])) action(graph.nodes[i]);
        } 
    },
    
    /*
      Method: each
   
      Iterates over <Graph> nodes performing an *action*. It's an alias for <Graph.Util.eachNode>.
      
      Also implemented by:
      
      <Graph>.
  
      Parameters:
  
      graph - (object) A <Graph> instance.
      action - (function) A callback function having a <Graph.Node> as first formal parameter.
  
      Example:
      (start code js)
        $jit.Graph.Util.each(graph, function(node) {
         alert(node.name);
        });
        //or...
        graph.each(function(node) {
          alert(node.name);
        });
      (end code)
   */
   each: function(graph, action, flags) {
      this.eachNode(graph, action, flags); 
   },

 /*
       Method: eachAdjacency
    
       Iterates over <Graph.Node> adjacencies applying the *action* function.
       
       Also implemented by:
       
       <Graph.Node>.

       Parameters:

       node - (object) A <Graph.Node>.
       action - (function) A callback function having <Graph.Adjacence> as first formal parameter.

       Example:
       (start code js)
         $jit.Graph.Util.eachAdjacency(node, function(adj) {
          alert(adj.nodeTo.name);
         });
         //or...
         node.eachAdjacency(function(adj) {
           alert(adj.nodeTo.name);
         });
       (end code)
    */
    eachAdjacency: function(node, action, flags) {
        var adj = node.adjacencies, filter = this.filter(flags);
        for(var id in adj) {
          var a = adj[id];
          if(filter(a)) {
            if(a.nodeFrom != node) {
              var tmp = a.nodeFrom;
              a.nodeFrom = a.nodeTo;
              a.nodeTo = tmp;
            }
            action(a, id);
          }
        }
    },

     /*
       Method: computeLevels
    
       Performs a BFS traversal setting the correct depth for each node.
        
       Also implemented by:
       
       <Graph>.
       
       Note:
       
       The depth of each node can then be accessed by 
       >node._depth

       Parameters:

       graph - (object) A <Graph>.
       id - (string) A starting node id for the BFS traversal.
       startDepth - (optional|number) A minimum depth value. Default's 0.

    */
    computeLevels: function(graph, id, startDepth, flags) {
        startDepth = startDepth || 0;
        var filter = this.filter(flags);
        this.eachNode(graph, function(elem) {
            elem._flag = false;
            elem._depth = -1;
        }, flags);
        var root = graph.getNode(id);
        root._depth = startDepth;
        var queue = [root];
        while(queue.length != 0) {
            var node = queue.pop();
            node._flag = true;
            this.eachAdjacency(node, function(adj) {
                var n = adj.nodeTo;
                if(n._flag == false && filter(n) && !adj._hiding) {
                    if(n._depth < 0) n._depth = node._depth + 1 + startDepth;
                    queue.unshift(n);
                }
            }, flags);
        }
    },

    /*
       Method: eachBFS
    
       Performs a BFS traversal applying *action* to each <Graph.Node>.
       
       Also implemented by:
       
       <Graph>.

       Parameters:

       graph - (object) A <Graph>.
       id - (string) A starting node id for the BFS traversal.
       action - (function) A callback function having a <Graph.Node> as first formal parameter.

       Example:
       (start code js)
         $jit.Graph.Util.eachBFS(graph, 'mynodeid', function(node) {
          alert(node.name);
         });
         //or...
         graph.eachBFS('mynodeid', function(node) {
           alert(node.name);
         });
       (end code)
    */
    eachBFS: function(graph, id, action, flags) {
        var filter = this.filter(flags);
        this.clean(graph);
        var queue = [graph.getNode(id)];
        while(queue.length != 0) {
            var node = queue.pop();
            if (!node) return;
            node._flag = true;
            action(node, node._depth);
            this.eachAdjacency(node, function(adj) {
                var n = adj.nodeTo;
                if(n._flag == false && filter(n) && !adj._hiding) {
                    n._flag = true;
                    queue.unshift(n);
                }
            }, flags);
        }
    },
    
    /*
       Method: eachLevel
    
       Iterates over a node's subgraph applying *action* to the nodes of relative depth between *levelBegin* and *levelEnd*.
       In case you need to break the iteration, *action* should return false.
       
       Also implemented by:
       
       <Graph.Node>.

       Parameters:
       
       node - (object) A <Graph.Node>.
       levelBegin - (number) A relative level value.
       levelEnd - (number) A relative level value.
       action - (function) A callback function having a <Graph.Node> as first formal parameter.

    */
    eachLevel: function(node, levelBegin, levelEnd, action, flags) {
        var d = node._depth, filter = this.filter(flags), that = this, shouldContinue = true;
        levelEnd = levelEnd === false? Number.MAX_VALUE -d : levelEnd;
        (function loopLevel(node, levelBegin, levelEnd) {
            if(!shouldContinue) return;
            var d = node._depth, ret;
            if(d >= levelBegin && d <= levelEnd && filter(node)) ret = action(node, d);
            if(typeof ret !== "undefined") shouldContinue = ret;
            if(shouldContinue && d < levelEnd) {
                that.eachAdjacency(node, function(adj) {
                    var n = adj.nodeTo;
                    if(n._depth > d) loopLevel(n, levelBegin, levelEnd);
                });
            }
        })(node, levelBegin + d, levelEnd + d);
    },

    /*
       Method: eachSubgraph
    
       Iterates over a node's children recursively.
       
       Also implemented by:
       
       <Graph.Node>.

       Parameters:
       node - (object) A <Graph.Node>.
       action - (function) A callback function having a <Graph.Node> as first formal parameter.

       Example:
       (start code js)
         $jit.Graph.Util.eachSubgraph(node, function(node) {
           alert(node.name);
         });
         //or...
         node.eachSubgraph(function(node) {
           alert(node.name);
         });
       (end code)
    */
    eachSubgraph: function(node, action, flags) {
      this.eachLevel(node, 0, false, action, flags);
    },

    /*
       Method: eachSubnode
    
       Iterates over a node's children (without deeper recursion).
       
       Also implemented by:
       
       <Graph.Node>.
       
       Parameters:
       node - (object) A <Graph.Node>.
       action - (function) A callback function having a <Graph.Node> as first formal parameter.

       Example:
       (start code js)
         $jit.Graph.Util.eachSubnode(node, function(node) {
          alert(node.name);
         });
         //or...
         node.eachSubnode(function(node) {
           alert(node.name);
         });
       (end code)
    */
    eachSubnode: function(node, action, flags) {
        this.eachLevel(node, 1, 1, action, flags);
    },

    /*
       Method: anySubnode
    
       Returns *true* if any subnode matches the given condition.
       
       Also implemented by:
       
       <Graph.Node>.

       Parameters:
       node - (object) A <Graph.Node>.
       cond - (function) A callback function returning a Boolean instance. This function has as first formal parameter a <Graph.Node>.

       Example:
       (start code js)
         $jit.Graph.Util.anySubnode(node, function(node) { return node.name == "mynodename"; });
         //or...
         node.anySubnode(function(node) { return node.name == 'mynodename'; });
       (end code)
    */
    anySubnode: function(node, cond, flags) {
      var flag = false;
      cond = cond || $.lambda(true);
      var c = $.type(cond) == 'string'? function(n) { return n[cond]; } : cond;
      this.eachSubnode(node, function(elem) {
        if(c(elem)) flag = true;
      }, flags);
      return flag;
    },
  
    /*
       Method: getSubnodes
    
       Collects all subnodes for a specified node. 
       The *level* parameter filters nodes having relative depth of *level* from the root node. 
       
       Also implemented by:
       
       <Graph.Node>.

       Parameters:
       node - (object) A <Graph.Node>.
       level - (optional|number) Default's *0*. A starting relative depth for collecting nodes.

       Returns:
       An array of nodes.

    */
    getSubnodes: function(node, level, flags) {
        var ans = [], that = this;
        level = level || 0;
        var levelStart, levelEnd;
        if($.type(level) == 'array') {
            levelStart = level[0];
            levelEnd = level[1];
        } else {
            levelStart = level;
            levelEnd = Number.MAX_VALUE - node._depth;
        }
        this.eachLevel(node, levelStart, levelEnd, function(n) {
            ans.push(n);
        }, flags);
        return ans;
    },
  
  
    /*
       Method: getParents
    
       Returns an Array of <Graph.Nodes> which are parents of the given node.
       
       Also implemented by:
       
       <Graph.Node>.

       Parameters:
       node - (object) A <Graph.Node>.

       Returns:
       An Array of <Graph.Nodes>.

       Example:
       (start code js)
         var pars = $jit.Graph.Util.getParents(node);
         //or...
         var pars = node.getParents();
         
         if(pars.length > 0) {
           //do stuff with parents
         }
       (end code)
    */
    getParents: function(node) {
        var ans = [];
        this.eachAdjacency(node, function(adj) {
            var n = adj.nodeTo;
            if(n._depth < node._depth) ans.push(n);
        });
        return ans;
    },
    
    /*
    Method: isDescendantOf
 
    Returns a boolean indicating if some node is descendant of the node with the given id. 

    Also implemented by:
    
    <Graph.Node>.
    
    
    Parameters:
    node - (object) A <Graph.Node>.
    id - (string) A <Graph.Node> id.

    Example:
    (start code js)
      $jit.Graph.Util.isDescendantOf(node, "nodeid"); //true|false
      //or...
      node.isDescendantOf('nodeid');//true|false
    (end code)
 */
 isDescendantOf: function(node, id) {
    if(node.id == id) return true;
    var pars = this.getParents(node), ans = false;
    for ( var i = 0; !ans && i < pars.length; i++) {
    ans = ans || this.isDescendantOf(pars[i], id);
  }
    return ans;
 },

 /*
     Method: clean
  
     Cleans flags from nodes.

     Also implemented by:
     
     <Graph>.
     
     Parameters:
     graph - A <Graph> instance.
  */
  clean: function(graph) { this.eachNode(graph, function(elem) { elem._flag = false; }); },
  
  /* 
    Method: getClosestNodeToOrigin 
  
    Returns the closest node to the center of canvas.
  
    Also implemented by:
    
    <Graph>.
    
    Parameters:
   
     graph - (object) A <Graph> instance.
     prop - (optional|string) Default's 'current'. A <Graph.Node> position property. Possible properties are 'start', 'current' or 'end'.
  
  */
  getClosestNodeToOrigin: function(graph, prop, flags) {
   return this.getClosestNodeToPos(graph, Polar.KER, prop, flags);
  },
  
  /* 
    Method: getClosestNodeToPos
  
    Returns the closest node to the given position.
  
    Also implemented by:
    
    <Graph>.
    
    Parameters:
   
     graph - (object) A <Graph> instance.
     pos - (object) A <Complex> or <Polar> instance.
     prop - (optional|string) Default's *current*. A <Graph.Node> position property. Possible properties are 'start', 'current' or 'end'.
  
  */
  getClosestNodeToPos: function(graph, pos, prop, flags) {
   var node = null;
   prop = prop || 'current';
   pos = pos && pos.getc(true) || Complex.KER;
   var distance = function(a, b) {
     var d1 = a.x - b.x, d2 = a.y - b.y;
     return d1 * d1 + d2 * d2;
   };
   this.eachNode(graph, function(elem) {
     node = (node == null || distance(elem.getPos(prop).getc(true), pos) < distance(
         node.getPos(prop).getc(true), pos)) ? elem : node;
   }, flags);
   return node;
  } 
};

//Append graph methods to <Graph>
$.each(['get', 'getNode', 'each', 'eachNode', 'computeLevels', 'eachBFS', 'clean', 'getClosestNodeToPos', 'getClosestNodeToOrigin'], function(m) {
  Graph.prototype[m] = function() {
    return Graph.Util[m].apply(Graph.Util, [this].concat(Array.prototype.slice.call(arguments)));
  };
});

//Append node methods to <Graph.Node>
$.each(['eachAdjacency', 'eachLevel', 'eachSubgraph', 'eachSubnode', 'anySubnode', 'getSubnodes', 'getParents', 'isDescendantOf'], function(m) {
  Graph.Node.prototype[m] = function() {
    return Graph.Util[m].apply(Graph.Util, [this].concat(Array.prototype.slice.call(arguments)));
  };
});

/*
 * File: Graph.Op.js
 *
*/

/*
   Object: Graph.Op

   Perform <Graph> operations like adding/removing <Graph.Nodes> or <Graph.Adjacences>, 
   morphing a <Graph> into another <Graph>, contracting or expanding subtrees, etc.

*/
Graph.Op = {

    options: {
      type: 'nothing',
      duration: 2000,
      hideLabels: true,
      fps:30
    },
    
    initialize: function(viz) {
      this.viz = viz;
    },

    /*
       Method: removeNode
    
       Removes one or more <Graph.Nodes> from the visualization. 
       It can also perform several animations like fading sequentially, fading concurrently, iterating or replotting.

       Parameters:
    
        node - (string|array) The node's id. Can also be an array having many ids.
        opt - (object) Animation options. It's an object with optional properties described below
        type - (string) Default's *nothing*. Type of the animation. Can be "nothing", "replot", "fade:seq",  "fade:con" or "iter".
        duration - Described in <Options.Fx>.
        fps - Described in <Options.Fx>.
        transition - Described in <Options.Fx>.
        hideLabels - (boolean) Default's *true*. Hide labels during the animation.
   
      Example:
      (start code js)
        var viz = new $jit.Viz(options);
        viz.op.removeNode('nodeId', {
          type: 'fade:seq',
          duration: 1000,
          hideLabels: false,
          transition: $jit.Trans.Quart.easeOut
        });
        //or also
        viz.op.removeNode(['someId', 'otherId'], {
          type: 'fade:con',
          duration: 1500
        });
      (end code)
    */
  
    removeNode: function(node, opt) {
        var viz = this.viz;
        var options = $.merge(this.options, viz.controller, opt);
        var n = $.splat(node);
        var i, that, nodeObj;
        switch(options.type) {
            case 'nothing':
                for(i=0; i<n.length; i++) {
                    options.onBeforeRemoveNode(viz.graph.getNode(n[i]));
                    viz.graph.removeNode(n[i]);
                }
                break;
            
            case 'replot':
                this.removeNode(n, { type: 'nothing' });
                viz.labels.clearLabels();
                viz.refresh(true);
                break;
            
            case 'fade:seq': case 'fade':
                that = this;
                //set alpha to 0 for nodes to remove.
                for(i=0; i<n.length; i++) {
                    nodeObj = viz.graph.getNode(n[i]);
                    nodeObj.setData('alpha', 0, 'end');
                }
                viz.fx.animate($.merge(options, {
                    modes: ['node-property:alpha'],
                    onComplete: function() {
                        that.removeNode(n, { type: 'nothing' });
                        viz.labels.clearLabels();
                        viz.reposition();
                        viz.fx.animate($.merge(options, {
                            modes: ['linear']
                        }));
                    }
                }));
                break;
            
            case 'fade:con':
                that = this;
                //set alpha to 0 for nodes to remove. Tag them for being ignored on computing positions.
                for(i=0; i<n.length; i++) {
                    nodeObj = viz.graph.getNode(n[i]);
                    nodeObj.setData('alpha', 0, 'end');
                    nodeObj.ignore = true;
                }
                viz.reposition();
                viz.fx.animate($.merge(options, {
                    modes: ['node-property:alpha', 'linear'],
                    onComplete: function() {
                        that.removeNode(n, { type: 'nothing' });
                        options.onComplete && options.onComplete();
                    }
                }));
                break;
            
            case 'iter':
                that = this;
                viz.fx.sequence({
                    condition: function() { return n.length != 0; },
                    step: function() { that.removeNode(n.shift(), { type: 'nothing' });  viz.labels.clearLabels(); },
                    onComplete: function() { options.onComplete && options.onComplete(); },
                    duration: Math.ceil(options.duration / n.length)
                });
                break;
                
            default: this.doError();
        }
    },
    
    /*
       Method: removeEdge
    
       Removes one or more <Graph.Adjacences> from the visualization. 
       It can also perform several animations like fading sequentially, fading concurrently, iterating or replotting.

       Parameters:
    
       vertex - (array) An array having two strings which are the ids of the nodes connected by this edge (i.e ['id1', 'id2']). Can also be a two dimensional array holding many edges (i.e [['id1', 'id2'], ['id3', 'id4'], ...]).
       opt - (object) Animation options. It's an object with optional properties described below
       type - (string) Default's *nothing*. Type of the animation. Can be "nothing", "replot", "fade:seq",  "fade:con" or "iter".
       duration - Described in <Options.Fx>.
       fps - Described in <Options.Fx>.
       transition - Described in <Options.Fx>.
       hideLabels - (boolean) Default's *true*. Hide labels during the animation.
   
      Example:
      (start code js)
        var viz = new $jit.Viz(options);
        viz.op.removeEdge(['nodeId', 'otherId'], {
          type: 'fade:seq',
          duration: 1000,
          hideLabels: false,
          transition: $jit.Trans.Quart.easeOut
        });
        //or also
        viz.op.removeEdge([['someId', 'otherId'], ['id3', 'id4']], {
          type: 'fade:con',
          duration: 1500
        });
      (end code)
    
    */
    removeEdge: function(vertex, opt) {
        var viz = this.viz;
        var options = $.merge(this.options, viz.controller, opt);
        var v = ($.type(vertex[0]) == 'string')? [vertex] : vertex;
        var i, that, adj;
        switch(options.type) {
            case 'nothing':
                for(i=0; i<v.length; i++)   viz.graph.removeAdjacence(v[i][0], v[i][1]);
                break;
            
            case 'replot':
                this.removeEdge(v, { type: 'nothing' });
                viz.refresh(true);
                break;
            
            case 'fade:seq': case 'fade':
                that = this;
                //set alpha to 0 for edges to remove.
                for(i=0; i<v.length; i++) {
                    adj = viz.graph.getAdjacence(v[i][0], v[i][1]);
                    if(adj) {
                        adj.setData('alpha', 0,'end');
                    }
                }
                viz.fx.animate($.merge(options, {
                    modes: ['edge-property:alpha'],
                    onComplete: function() {
                        that.removeEdge(v, { type: 'nothing' });
                        viz.reposition();
                        viz.fx.animate($.merge(options, {
                            modes: ['linear']
                        }));
                    }
                }));
                break;
            
            case 'fade:con':
                that = this;
                //set alpha to 0 for nodes to remove. Tag them for being ignored when computing positions.
                for(i=0; i<v.length; i++) {
                    adj = viz.graph.getAdjacence(v[i][0], v[i][1]);
                    if(adj) {
                        adj.setData('alpha',0 ,'end');
                        adj.ignore = true;
                    }
                }
                viz.reposition();
                viz.fx.animate($.merge(options, {
                    modes: ['edge-property:alpha', 'linear'],
                    onComplete: function() {
                        that.removeEdge(v, { type: 'nothing' });
                        options.onComplete && options.onComplete();
                    }
                }));
                break;
            
            case 'iter':
                that = this;
                viz.fx.sequence({
                    condition: function() { return v.length != 0; },
                    step: function() { that.removeEdge(v.shift(), { type: 'nothing' }); viz.labels.clearLabels(); },
                    onComplete: function() { options.onComplete(); },
                    duration: Math.ceil(options.duration / v.length)
                });
                break;
                
            default: this.doError();
        }
    },
    
    /*
       Method: sum
    
       Adds a new graph to the visualization. 
       The JSON graph (or tree) must at least have a common node with the current graph plotted by the visualization. 
       The resulting graph can be defined as follows <http://mathworld.wolfram.com/GraphSum.html>

       Parameters:
    
       json - (object) A json tree or graph structure. See also <Loader.loadJSON>.
       opt - (object) Animation options. It's an object with optional properties described below
       type - (string) Default's *nothing*. Type of the animation. Can be "nothing", "replot", "fade:seq",  "fade:con".
       duration - Described in <Options.Fx>.
       fps - Described in <Options.Fx>.
       transition - Described in <Options.Fx>.
       hideLabels - (boolean) Default's *true*. Hide labels during the animation.
   
      Example:
      (start code js)
        //...json contains a tree or graph structure...

        var viz = new $jit.Viz(options);
        viz.op.sum(json, {
          type: 'fade:seq',
          duration: 1000,
          hideLabels: false,
          transition: $jit.Trans.Quart.easeOut
        });
        //or also
        viz.op.sum(json, {
          type: 'fade:con',
          duration: 1500
        });
      (end code)
    
    */
    sum: function(json, opt) {
        var viz = this.viz;
        var options = $.merge(this.options, viz.controller, opt), root = viz.root;
        var graph;
        viz.root = opt.id || viz.root;
        switch(options.type) {
            case 'nothing':
                graph = viz.construct(json);
                graph.eachNode(function(elem) {
                    elem.eachAdjacency(function(adj) {
                        viz.graph.addAdjacence(adj.nodeFrom, adj.nodeTo, adj.data);
                    });
                });
                break;
            
            case 'replot':
                viz.refresh(true);
                this.sum(json, { type: 'nothing' });
                viz.refresh(true);
                break;
            
            case 'fade:seq': case 'fade': case 'fade:con':
                that = this;
                graph = viz.construct(json);

                //set alpha to 0 for nodes to add.
                var fadeEdges = this.preprocessSum(graph);
                var modes = !fadeEdges? ['node-property:alpha'] : ['node-property:alpha', 'edge-property:alpha'];
                viz.reposition();
                if(options.type != 'fade:con') {
                    viz.fx.animate($.merge(options, {
                        modes: ['linear'],
                        onComplete: function() {
                            viz.fx.animate($.merge(options, {
                                modes: modes,
                                onComplete: function() {
                                    options.onComplete();
                                }
                            }));
                        }
                    }));
                } else {
                    viz.graph.eachNode(function(elem) {
                        if (elem.id != root && elem.pos.isZero()) {
                          elem.pos.set(elem.endPos); 
                          elem.startPos.set(elem.endPos);
                        }
                    });
                    viz.fx.animate($.merge(options, {
                        modes: ['linear'].concat(modes)
                    }));
                }
                break;

            default: this.doError();
        }
    },
    
    /*
       Method: morph
    
       This method will transform the current visualized graph into the new JSON representation passed in the method. 
       The JSON object must at least have the root node in common with the current visualized graph.

       Parameters:
    
       json - (object) A json tree or graph structure. See also <Loader.loadJSON>.
       opt - (object) Animation options. It's an object with optional properties described below
       type - (string) Default's *nothing*. Type of the animation. Can be "nothing", "replot", "fade:con".
       duration - Described in <Options.Fx>.
       fps - Described in <Options.Fx>.
       transition - Described in <Options.Fx>.
       hideLabels - (boolean) Default's *true*. Hide labels during the animation.
       id - (string) The shared <Graph.Node> id between both graphs.
       
       extraModes - (optional|object) When morphing with an animation, dollar prefixed data parameters are added to 
                    *endData* and not *data* itself. This way you can animate dollar prefixed parameters during your morphing operation. 
                    For animating these extra-parameters you have to specify an object that has animation groups as keys and animation 
                    properties as values, just like specified in <Graph.Plot.animate>.
   
      Example:
      (start code js)
        //...json contains a tree or graph structure...

        var viz = new $jit.Viz(options);
        viz.op.morph(json, {
          type: 'fade',
          duration: 1000,
          hideLabels: false,
          transition: $jit.Trans.Quart.easeOut
        });
        //or also
        viz.op.morph(json, {
          type: 'fade',
          duration: 1500
        });
        //if the json data contains dollar prefixed params
        //like $width or $height these too can be animated
        viz.op.morph(json, {
          type: 'fade',
          duration: 1500
        }, {
          'node-property': ['width', 'height']
        });
      (end code)
    
    */
    morph: function(json, opt, extraModes) {
        extraModes = extraModes || {};
        var viz = this.viz;
        var options = $.merge(this.options, viz.controller, opt), root = viz.root;
        var graph;
        //TODO(nico) this hack makes morphing work with the Hypertree. 
        //Need to check if it has been solved and this can be removed.
        viz.root = opt.id || viz.root;
        switch(options.type) {
            case 'nothing':
                graph = viz.construct(json);
                graph.eachNode(function(elem) {
                  var nodeExists = viz.graph.hasNode(elem.id);  
                  elem.eachAdjacency(function(adj) {
                    var adjExists = !!viz.graph.getAdjacence(adj.nodeFrom.id, adj.nodeTo.id);
                    viz.graph.addAdjacence(adj.nodeFrom, adj.nodeTo, adj.data);
                    //Update data properties if the node existed
                    if(adjExists) {
                      var addedAdj = viz.graph.getAdjacence(adj.nodeFrom.id, adj.nodeTo.id);
                      for(var prop in (adj.data || {})) {
                        addedAdj.data[prop] = adj.data[prop];
                      }
                    }
                  });
                  //Update data properties if the node existed
                  if(nodeExists) {
                    var addedNode = viz.graph.getNode(elem.id);
                    for(var prop in (elem.data || {})) {
                      addedNode.data[prop] = elem.data[prop];
                    }
                  }
                });
                viz.graph.eachNode(function(elem) {
                    elem.eachAdjacency(function(adj) {
                        if(!graph.getAdjacence(adj.nodeFrom.id, adj.nodeTo.id)) {
                            viz.graph.removeAdjacence(adj.nodeFrom.id, adj.nodeTo.id);
                        }
                    });
                    if(!graph.hasNode(elem.id)) viz.graph.removeNode(elem.id);
                });
                
                break;
            
            case 'replot':
                viz.labels.clearLabels(true);
                this.morph(json, { type: 'nothing' });
                viz.refresh(true);
                viz.refresh(true);
                break;
                
            case 'fade:seq': case 'fade': case 'fade:con':
                that = this;
                graph = viz.construct(json);
                //preprocessing for nodes to delete.
                //get node property modes to interpolate
                var nodeModes = ('node-property' in extraModes) 
                  && $.map($.splat(extraModes['node-property']), 
                      function(n) { return '$' + n; });
                viz.graph.eachNode(function(elem) {
                  var graphNode = graph.getNode(elem.id);   
                  if(!graphNode) {
                      elem.setData('alpha', 1);
                      elem.setData('alpha', 1, 'start');
                      elem.setData('alpha', 0, 'end');
                      elem.ignore = true;
                    } else {
                      //Update node data information
                      var graphNodeData = graphNode.data;
                      for(var prop in graphNodeData) {
                        if(nodeModes && ($.indexOf(nodeModes, prop) > -1)) {
                          elem.endData[prop] = graphNodeData[prop];
                        } else {
                          elem.data[prop] = graphNodeData[prop];
                        }
                      }
                    }
                }); 
                viz.graph.eachNode(function(elem) {
                    if(elem.ignore) return;
                    elem.eachAdjacency(function(adj) {
                        if(adj.nodeFrom.ignore || adj.nodeTo.ignore) return;
                        var nodeFrom = graph.getNode(adj.nodeFrom.id);
                        var nodeTo = graph.getNode(adj.nodeTo.id);
                        if(!nodeFrom.adjacentTo(nodeTo)) {
                            var adj = viz.graph.getAdjacence(nodeFrom.id, nodeTo.id);
                            fadeEdges = true;
                            adj.setData('alpha', 1);
                            adj.setData('alpha', 1, 'start');
                            adj.setData('alpha', 0, 'end');
                            adj._hiding = true;
                        } else if (adj.data.$direction && adj.data.$direction[0] === nodeFrom.id) {
                            // only check one direction (from -> to)
                            if (!nodeFrom.adjacentWithDirectionTo(nodeTo)) {
                                adj._reversing = true;
                            }
                        }
                    });
                }); 
                //preprocessing for adding nodes.
                var fadeEdges = this.preprocessSum(graph);

                var modes = !fadeEdges? ['node-property:alpha'] : 
                                        ['node-property:alpha', 
                                         'edge-property:alpha'];
                //Append extra node-property animations (if any)
                modes[0] = modes[0] + (('node-property' in extraModes)? 
                    (':' + $.splat(extraModes['node-property']).join(':')) : '');
                //Append extra edge-property animations (if any)
                modes[1] = (modes[1] || 'edge-property:alpha') + (('edge-property' in extraModes)? 
                    (':' + $.splat(extraModes['edge-property']).join(':')) : '');
                //Add label-property animations (if any)
                if('label-property' in extraModes) {
                  modes.push('label-property:' + $.splat(extraModes['label-property']).join(':'))
                }
                //only use reposition if its implemented.
                if (viz.reposition) {
                  viz.reposition();
                } else {
                  viz.compute('end');
                }
                this._updateDirectedEdges();

                viz.graph.eachNode(function(elem) {
                    if (elem.id != root && elem.pos.getp().equals(Polar.KER)) {
                      elem.pos.set(elem.endPos); elem.startPos.set(elem.endPos);
                    }
                });
                viz.fx.animate($.merge(options, {
                    modes: [extraModes.position || 'polar'].concat(modes),
                    onComplete: function() {
                        viz.graph.eachNode(function(elem) {
                            if(elem.ignore) viz.graph.removeNode(elem.id);
                        });
                        viz.graph.eachNode(function(elem) {
                            elem.eachAdjacency(function(adj) {
                                if(adj.ignore) viz.graph.removeAdjacence(adj.nodeFrom.id, adj.nodeTo.id);
                            });
                        });
                        options.onComplete();
                    }
                }));
                break;

            default:;
        }
    },

    _updateDirectedEdges: function () {
        var graph = this.viz.graph;
        graph.eachNode(function(node) {
            node.eachAdjacency(function (adj) {

                var isDirectedEdge = adj.data.$direction;
                if (isDirectedEdge && adj.nodeFrom.id !== adj.data.$direction[0]) {
                    return;
                }

                if (adj._hiding) {
                    graph.removeAdjacence(adj.nodeFrom.id, adj.nodeTo.id);
                }

                if (adj._reversing) {
                    var from = adj.nodeFrom.id;
                    var to = adj.nodeTo.id;
//
//                    // swap instead of adding and removing
                    var edge1 = graph.edges[from][to];
                    var edge2 = graph.edges[to][from];

                    edge1.data.$direction = [to, from];
                    edge2.data.$direction = [to, from];

                    adj._reversing = undefined;
                }
            });
        });
    },
    
  /*
    Method: contract
 
    Collapses the subtree of the given node. The node will have a _collapsed=true_ property.
    
    Parameters:
 
    node - (object) A <Graph.Node>.
    opt - (object) An object containing options described below
    type - (string) Whether to 'replot' or 'animate' the contraction.
   
    There are also a number of Animation options. For more information see <Options.Fx>.

    Example:
    (start code js)
     var viz = new $jit.Viz(options);
     viz.op.contract(node, {
       type: 'animate',
       duration: 1000,
       hideLabels: true,
       transition: $jit.Trans.Quart.easeOut
     });
   (end code)
 
   */
    contract: function(node, opt) {
      var viz = this.viz;
      if(node.collapsed || !node.anySubnode($.lambda(true))) return;
      opt = $.merge(this.options, viz.config, opt || {}, {
        'modes': ['node-property:alpha:span', 'linear']
      });
      node.collapsed = true;
      (function subn(n) {
        n.eachSubnode(function(ch) {
          ch.ignore = true;
          ch.setData('alpha', 0, opt.type == 'animate'? 'end' : 'current');
          subn(ch);
        });
      })(node);
      if(opt.type == 'animate') {
        viz.compute('end');
        if(viz.rotated) {
          viz.rotate(viz.rotated, 'none', {
            'property':'end'
          });
        }
        (function subn(n) {
          n.eachSubnode(function(ch) {
            ch.setPos(node.getPos('end'), 'end');
            subn(ch);
          });
        })(node);
        viz.fx.animate(opt);
      } else if(opt.type == 'replot'){
        viz.refresh();
      }
    },
    
    /*
    Method: expand
 
    Expands the previously contracted subtree. The given node must have the _collapsed=true_ property.
    
    Parameters:
 
    node - (object) A <Graph.Node>.
    opt - (object) An object containing options described below
    type - (string) Whether to 'replot' or 'animate'.
     
    There are also a number of Animation options. For more information see <Options.Fx>.

    Example:
    (start code js)
      var viz = new $jit.Viz(options);
      viz.op.expand(node, {
        type: 'animate',
        duration: 1000,
        hideLabels: true,
        transition: $jit.Trans.Quart.easeOut
      });
    (end code)
 
   */
    expand: function(node, opt) {
      if(!('collapsed' in node)) return;
      var viz = this.viz;
      opt = $.merge(this.options, viz.config, opt || {}, {
        'modes': ['node-property:alpha:span', 'linear']
      });
      delete node.collapsed;
      (function subn(n) {
        n.eachSubnode(function(ch) {
          delete ch.ignore;
          ch.setData('alpha', 1, opt.type == 'animate'? 'end' : 'current');
          subn(ch);
        });
      })(node);
      if(opt.type == 'animate') {
        viz.compute('end');
        if(viz.rotated) {
          viz.rotate(viz.rotated, 'none', {
            'property':'end'
          });
        }
        viz.fx.animate(opt);
      } else if(opt.type == 'replot'){
        viz.refresh();
      }
    },

    preprocessSum: function(graph) {
        var viz = this.viz;
        graph.eachNode(function(elem) {
            if(!viz.graph.hasNode(elem.id)) {
                viz.graph.addNode(elem);
                var n = viz.graph.getNode(elem.id);
                n.setData('alpha', 0);
                n.setData('alpha', 0, 'start');
                n.setData('alpha', 1, 'end');
            }
        }); 
        var fadeEdges = false;
        graph.eachNode(function(elem) {
            elem.eachAdjacency(function(adj) {
                var nodeFrom = viz.graph.getNode(adj.nodeFrom.id);
                var nodeTo = viz.graph.getNode(adj.nodeTo.id);
                if(!nodeFrom.adjacentTo(nodeTo)) {
                    var adj = viz.graph.addAdjacence(nodeFrom, nodeTo, adj.data);
                    if(nodeFrom.startAlpha == nodeFrom.endAlpha 
                    && nodeTo.startAlpha == nodeTo.endAlpha) {
                        fadeEdges = true;
                        adj.setData('alpha', 0);
                        adj.setData('alpha', 0, 'start');
                        adj.setData('alpha', 1, 'end');
                    } 
                }
            });
        }); 
        return fadeEdges;
    }
};



/*
 File: Helpers.js

 Helpers are objects that contain rendering primitives (like rectangles, ellipses, etc), for plotting nodes and edges.
 Helpers also contain implementations of the *contains* method, a method returning a boolean indicating whether the mouse
 position is over the rendered shape.

 Helpers are very useful when implementing new NodeTypes, since you can access them through *this.nodeHelper* and
 *this.edgeHelper* <Graph.Plot> properties, providing you with simple primitives and mouse-position check functions.

 Example:
 (start code js)
 //implement a new node type
 $jit.Viz.Plot.NodeTypes.implement({
 'customNodeType': {
 'render': function(node, canvas) {
 this.nodeHelper.circle.render ...
 },
 'contains': function(node, pos) {
 this.nodeHelper.circle.contains ...
 }
 }
 });
 //implement an edge type
 $jit.Viz.Plot.EdgeTypes.implement({
 'customNodeType': {
 'render': function(node, canvas) {
 this.edgeHelper.circle.render ...
 },
 //optional
 'contains': function(node, pos) {
 this.edgeHelper.circle.contains ...
 }
 }
 });
 (end code)

 */

/*
 Object: NodeHelper

 Contains rendering and other type of primitives for simple shapes.
 */
var NodeHelper = {
    'none': {
        'render': $.empty,
        'contains': $.lambda(false)
    },
    /*
     Object: NodeHelper.circle
     */
    'circle': {
        /*
         Method: render

         Renders a circle into the canvas.

         Parameters:

         type - (string) Possible options are 'fill' or 'stroke'.
         pos - (object) An *x*, *y* object with the position of the center of the circle.
         radius - (number) The radius of the circle to be rendered.
         canvas - (object) A <Canvas> instance.

         Example:
         (start code js)
         NodeHelper.circle.render('fill', { x: 10, y: 30 }, 30, viz.canvas);
         (end code)
         */
        'render': function(type, pos, radius, canvas){
            var ctx = canvas.getCtx();
            ctx.beginPath();
            ctx.arc(pos.x, pos.y, radius, 0, Math.PI * 2, true);
            ctx.closePath();
            ctx[type]();
        },
        /*
         Method: contains

         Returns *true* if *pos* is contained in the area of the shape. Returns *false* otherwise.

         Parameters:

         npos - (object) An *x*, *y* object with the <Graph.Node> position.
         pos - (object) An *x*, *y* object with the position to check.
         radius - (number) The radius of the rendered circle.

         Example:
         (start code js)
         NodeHelper.circle.contains({ x: 10, y: 30 }, { x: 15, y: 35 }, 30); //true
         (end code)
         */
        'contains': function(npos, pos, radius){
            var diffx = npos.x - pos.x,
                diffy = npos.y - pos.y,
                diff = diffx * diffx + diffy * diffy;
            return diff <= radius * radius;
        }
    },
    /*
     Object: NodeHelper.ellipse
     */
    'ellipse': {
        /*
         Method: render

         Renders an ellipse into the canvas.

         Parameters:

         type - (string) Possible options are 'fill' or 'stroke'.
         pos - (object) An *x*, *y* object with the position of the center of the ellipse.
         width - (number) The width of the ellipse.
         height - (number) The height of the ellipse.
         canvas - (object) A <Canvas> instance.

         Example:
         (start code js)
         NodeHelper.ellipse.render('fill', { x: 10, y: 30 }, 30, 40, viz.canvas);
         (end code)
         */
        'render': function(type, pos, width, height, canvas){
            var ctx = canvas.getCtx(),
                scalex = 1,
                scaley = 1,
                scaleposx = 1,
                scaleposy = 1,
                radius = 0;

            if (width > height) {
                radius = width / 2;
                scaley = height / width;
                scaleposy = width / height;
            } else {
                radius = height / 2;
                scalex = width / height;
                scaleposx = height / width;
            }

            ctx.save();
            ctx.scale(scalex, scaley);
            ctx.beginPath();
            ctx.arc(pos.x * scaleposx, pos.y * scaleposy, radius, 0, Math.PI * 2, true);
            ctx.closePath();
            ctx[type]();
            ctx.restore();
        },
        /*
         Method: contains

         Returns *true* if *pos* is contained in the area of the shape. Returns *false* otherwise.

         Parameters:

         npos - (object) An *x*, *y* object with the <Graph.Node> position.
         pos - (object) An *x*, *y* object with the position to check.
         width - (number) The width of the rendered ellipse.
         height - (number) The height of the rendered ellipse.

         Example:
         (start code js)
         NodeHelper.ellipse.contains({ x: 10, y: 30 }, { x: 15, y: 35 }, 30, 40);
         (end code)
         */
        'contains': function(npos, pos, width, height){
            var radius = 0,
                scalex = 1,
                scaley = 1,
                diffx = 0,
                diffy = 0,
                diff = 0;

            if (width > height) {
                radius = width / 2;
                scaley = height / width;
            } else {
                radius = height / 2;
                scalex = width / height;
            }

            diffx = (npos.x - pos.x) * (1 / scalex);
            diffy = (npos.y - pos.y) * (1 / scaley);
            diff = diffx * diffx + diffy * diffy;
            return diff <= radius * radius;
        }
    },
    /*
     Object: NodeHelper.square
     */
    'square': {
        /*
         Method: render

         Renders a square into the canvas.

         Parameters:

         type - (string) Possible options are 'fill' or 'stroke'.
         pos - (object) An *x*, *y* object with the position of the center of the square.
         dim - (number) The radius (or half-diameter) of the square.
         canvas - (object) A <Canvas> instance.

         Example:
         (start code js)
         NodeHelper.square.render('stroke', { x: 10, y: 30 }, 40, viz.canvas);
         (end code)
         */
        'render': function(type, pos, dim, canvas){
            canvas.getCtx()[type + "Rect"](pos.x - dim, pos.y - dim, 2*dim, 2*dim);
        },
        /*
         Method: contains

         Returns *true* if *pos* is contained in the area of the shape. Returns *false* otherwise.

         Parameters:

         npos - (object) An *x*, *y* object with the <Graph.Node> position.
         pos - (object) An *x*, *y* object with the position to check.
         dim - (number) The radius (or half-diameter) of the square.

         Example:
         (start code js)
         NodeHelper.square.contains({ x: 10, y: 30 }, { x: 15, y: 35 }, 30);
         (end code)
         */
        'contains': function(npos, pos, dim){
            return Math.abs(pos.x - npos.x) <= dim && Math.abs(pos.y - npos.y) <= dim;
        }
    },
    /*
     Object: NodeHelper.rectangle
     */
    'rectangle': {
        /*
         Method: render

         Renders a rectangle into the canvas.

         Parameters:

         type - (string) Possible options are 'fill' or 'stroke'.
         pos - (object) An *x*, *y* object with the position of the center of the rectangle.
         width - (number) The width of the rectangle.
         height - (number) The height of the rectangle.
         canvas - (object) A <Canvas> instance.

         Example:
         (start code js)
         NodeHelper.rectangle.render('fill', { x: 10, y: 30 }, 30, 40, viz.canvas);
         (end code)
         */
        'render': function(type, pos, width, height, canvas){
            canvas.getCtx()[type + "Rect"](pos.x - width / 2, pos.y - height / 2,
                width, height);
        },
        /*
         Method: contains

         Returns *true* if *pos* is contained in the area of the shape. Returns *false* otherwise.

         Parameters:

         npos - (object) An *x*, *y* object with the <Graph.Node> position.
         pos - (object) An *x*, *y* object with the position to check.
         width - (number) The width of the rendered rectangle.
         height - (number) The height of the rendered rectangle.

         Example:
         (start code js)
         NodeHelper.rectangle.contains({ x: 10, y: 30 }, { x: 15, y: 35 }, 30, 40);
         (end code)
         */
        'contains': function(npos, pos, width, height){
            return Math.abs(pos.x - npos.x) <= width / 2
                && Math.abs(pos.y - npos.y) <= height / 2;
        }
    },
    /*
     Object: NodeHelper.triangle
     */
    'triangle': {
        /*
         Method: render

         Renders a triangle into the canvas.

         Parameters:

         type - (string) Possible options are 'fill' or 'stroke'.
         pos - (object) An *x*, *y* object with the position of the center of the triangle.
         dim - (number) Half the base and half the height of the triangle.
         canvas - (object) A <Canvas> instance.

         Example:
         (start code js)
         NodeHelper.triangle.render('stroke', { x: 10, y: 30 }, 40, viz.canvas);
         (end code)
         */
        'render': function(type, pos, dim, canvas){
            var ctx = canvas.getCtx(),
                c1x = pos.x,
                c1y = pos.y - dim,
                c2x = c1x - dim,
                c2y = pos.y + dim,
                c3x = c1x + dim,
                c3y = c2y;
            ctx.beginPath();
            ctx.moveTo(c1x, c1y);
            ctx.lineTo(c2x, c2y);
            ctx.lineTo(c3x, c3y);
            ctx.closePath();
            ctx[type]();
        },
        /*
         Method: contains

         Returns *true* if *pos* is contained in the area of the shape. Returns *false* otherwise.

         Parameters:

         npos - (object) An *x*, *y* object with the <Graph.Node> position.
         pos - (object) An *x*, *y* object with the position to check.
         dim - (number) Half the base and half the height of the triangle.

         Example:
         (start code js)
         NodeHelper.triangle.contains({ x: 10, y: 30 }, { x: 15, y: 35 }, 30);
         (end code)
         */
        'contains': function(npos, pos, dim) {
            return NodeHelper.circle.contains(npos, pos, dim);
        }
    },
    /*
     Object: NodeHelper.star
     */
    'star': {
        /*
         Method: render

         Renders a star (concave decagon) into the canvas.

         Parameters:

         type - (string) Possible options are 'fill' or 'stroke'.
         pos - (object) An *x*, *y* object with the position of the center of the star.
         dim - (number) The length of a side of a concave decagon.
         canvas - (object) A <Canvas> instance.

         Example:
         (start code js)
         NodeHelper.star.render('stroke', { x: 10, y: 30 }, 40, viz.canvas);
         (end code)
         */
        'render': function(type, pos, dim, canvas){
            var ctx = canvas.getCtx(),
                pi5 = Math.PI / 5;
            ctx.save();
            ctx.translate(pos.x, pos.y);
            ctx.beginPath();
            ctx.moveTo(dim, 0);
            for (var i = 0; i < 9; i++) {
                ctx.rotate(pi5);
                if (i % 2 == 0) {
                    ctx.lineTo((dim / 0.525731) * 0.200811, 0);
                } else {
                    ctx.lineTo(dim, 0);
                }
            }
            ctx.closePath();
            ctx[type]();
            ctx.restore();
        },
        /*
         Method: contains

         Returns *true* if *pos* is contained in the area of the shape. Returns *false* otherwise.

         Parameters:

         npos - (object) An *x*, *y* object with the <Graph.Node> position.
         pos - (object) An *x*, *y* object with the position to check.
         dim - (number) The length of a side of a concave decagon.

         Example:
         (start code js)
         NodeHelper.star.contains({ x: 10, y: 30 }, { x: 15, y: 35 }, 30);
         (end code)
         */
        'contains': function(npos, pos, dim) {
            return NodeHelper.circle.contains(npos, pos, dim);
        }
    }
};

/*
 Object: EdgeHelper

 Contains rendering primitives for simple edge shapes.
 */
var EdgeHelper = {
    /*
     Object: EdgeHelper.line
     */
    'line': {
        /*
         Method: render

         Renders a line into the canvas.

         Parameters:

         from - (object) An *x*, *y* object with the starting position of the line.
         to - (object) An *x*, *y* object with the ending position of the line.
         canvas - (object) A <Canvas> instance.

         Example:
         (start code js)
         EdgeHelper.line.render({ x: 10, y: 30 }, { x: 10, y: 50 }, viz.canvas);
         (end code)
         */
        'render': function(from, to, canvas){
            var ctx = canvas.getCtx();
            ctx.beginPath();
            ctx.moveTo(from.x, from.y);
            ctx.lineTo(to.x, to.y);
            ctx.stroke();
        },
        /*
         Method: contains

         Returns *true* if *pos* is contained in the area of the shape. Returns *false* otherwise.

         Parameters:

         posFrom - (object) An *x*, *y* object with a <Graph.Node> position.
         posTo - (object) An *x*, *y* object with a <Graph.Node> position.
         pos - (object) An *x*, *y* object with the position to check.
         epsilon - (number) The dimension of the shape.

         Example:
         (start code js)
         EdgeHelper.line.contains({ x: 10, y: 30 }, { x: 15, y: 35 }, { x: 15, y: 35 }, 30);
         (end code)
         */
        'contains': function(posFrom, posTo, pos, epsilon) {
            var min = Math.min,
                max = Math.max,
                minPosX = min(posFrom.x, posTo.x) - epsilon,
                maxPosX = max(posFrom.x, posTo.x) + epsilon,
                minPosY = min(posFrom.y, posTo.y) - epsilon,
                maxPosY = max(posFrom.y, posTo.y) + epsilon;

            if(pos.x >= minPosX && pos.x <= maxPosX
                && pos.y >= minPosY && pos.y <= maxPosY) {
                if(Math.abs(posTo.x - posFrom.x) <= epsilon) {
                    return true;
                }
                var dist = (posTo.y - posFrom.y) / (posTo.x - posFrom.x) * (pos.x - posFrom.x) + posFrom.y;
                return Math.abs(dist - pos.y) <= epsilon;
            }
            return false;
        }
    },
    /*
     Object: EdgeHelper.arrow
     */
    'arrow': {
        /*
         Method: render

         Renders an arrow into the canvas.

         Parameters:

         from - (object) An *x*, *y* object with the starting position of the arrow.
         to - (object) An *x*, *y* object with the ending position of the arrow.
         dim - (number) The dimension of the arrow.
         swap - (boolean) Whether to set the arrow pointing to the starting position or the ending position.
         canvas - (object) A <Canvas> instance.

         Example:
         (start code js)
         EdgeHelper.arrow.render({ x: 10, y: 30 }, { x: 10, y: 50 }, 13, false, viz.canvas);
         (end code)
         */
        'render': function(from, to, dim, swap, canvas, arrowPosition){
            var ctx = canvas.getCtx();
            // invert edge direction
            if (swap) {
                var tmp = from;
                from = to;
                to = tmp;
            }
            var vect = new Complex(to.x - from.x, to.y - from.y);
            vect.$scale(dim / vect.norm());
            var posVect;
            switch (arrowPosition) {
                case 'end':    posVect = vect; break;
                case 'center': posVect = new Complex((to.x - from.x)/2, (to.y - from.y)/2); break;
            }
            var intermediatePoint = new Complex(to.x - posVect.x, to.y - posVect.y),
                normal = new Complex(-vect.y / 2, vect.x / 2),
                endPoint = intermediatePoint.add(vect),
                v1 = intermediatePoint.add(normal),
                v2 = intermediatePoint.$add(normal.$scale(-1));

            ctx.beginPath();
            ctx.moveTo(from.x, from.y);
            ctx.lineTo(to.x, to.y);
            ctx.stroke();
            ctx.beginPath();
            ctx.moveTo(v1.x, v1.y);
            ctx.moveTo(v1.x, v1.y);
            ctx.lineTo(v2.x, v2.y);
            ctx.lineTo(endPoint.x, endPoint.y);
            ctx.closePath();
            ctx.fill();
        },
        /*
         Method: contains

         Returns *true* if *pos* is contained in the area of the shape. Returns *false* otherwise.

         Parameters:

         posFrom - (object) An *x*, *y* object with a <Graph.Node> position.
         posTo - (object) An *x*, *y* object with a <Graph.Node> position.
         pos - (object) An *x*, *y* object with the position to check.
         epsilon - (number) The dimension of the shape.

         Example:
         (start code js)
         EdgeHelper.arrow.contains({ x: 10, y: 30 }, { x: 15, y: 35 }, { x: 15, y: 35 }, 30);
         (end code)
         */
        'contains': function(posFrom, posTo, pos, epsilon) {
            return EdgeHelper.line.contains(posFrom, posTo, pos, epsilon);
        }
    },
    /*
     Object: EdgeHelper.hyperline
     */
    'hyperline': {
        /*
         Method: render

         Renders a hyperline into the canvas. A hyperline are the lines drawn for the <Hypertree> visualization.

         Parameters:

         from - (object) An *x*, *y* object with the starting position of the hyperline. *x* and *y* must belong to [0, 1).
         to - (object) An *x*, *y* object with the ending position of the hyperline. *x* and *y* must belong to [0, 1).
         r - (number) The scaling factor.
         canvas - (object) A <Canvas> instance.

         Example:
         (start code js)
         EdgeHelper.hyperline.render({ x: 10, y: 30 }, { x: 10, y: 50 }, 100, viz.canvas);
         (end code)
         */
        'render': function(from, to, r, canvas){
            var ctx = canvas.getCtx();
            var centerOfCircle = computeArcThroughTwoPoints(from, to);
            if (centerOfCircle.a > 1000 || centerOfCircle.b > 1000
                || centerOfCircle.ratio < 0) {
                ctx.beginPath();
                ctx.moveTo(from.x * r, from.y * r);
                ctx.lineTo(to.x * r, to.y * r);
                ctx.stroke();
            } else {
                var angleBegin = Math.atan2(to.y - centerOfCircle.y, to.x
                    - centerOfCircle.x);
                var angleEnd = Math.atan2(from.y - centerOfCircle.y, from.x
                    - centerOfCircle.x);
                var sense = sense(angleBegin, angleEnd);
                ctx.beginPath();
                ctx.arc(centerOfCircle.x * r, centerOfCircle.y * r, centerOfCircle.ratio
                    * r, angleBegin, angleEnd, sense);
                ctx.stroke();
            }
            /*
             Calculates the arc parameters through two points.

             More information in <http://en.wikipedia.org/wiki/Poincar%C3%A9_disc_model#Analytic_geometry_constructions_in_the_hyperbolic_plane>

             Parameters:

             p1 - A <Complex> instance.
             p2 - A <Complex> instance.
             scale - The Disk's diameter.

             Returns:

             An object containing some arc properties.
             */
            function computeArcThroughTwoPoints(p1, p2){
                var aDen = (p1.x * p2.y - p1.y * p2.x), bDen = aDen;
                var sq1 = p1.squaredNorm(), sq2 = p2.squaredNorm();
                // Fall back to a straight line
                if (aDen == 0)
                    return {
                        x: 0,
                        y: 0,
                        ratio: -1
                    };

                var a = (p1.y * sq2 - p2.y * sq1 + p1.y - p2.y) / aDen;
                var b = (p2.x * sq1 - p1.x * sq2 + p2.x - p1.x) / bDen;
                var x = -a / 2;
                var y = -b / 2;
                var squaredRatio = (a * a + b * b) / 4 - 1;
                // Fall back to a straight line
                if (squaredRatio < 0)
                    return {
                        x: 0,
                        y: 0,
                        ratio: -1
                    };
                var ratio = Math.sqrt(squaredRatio);
                var out = {
                    x: x,
                    y: y,
                    ratio: ratio > 1000? -1 : ratio,
                    a: a,
                    b: b
                };

                return out;
            }
            /*
             Sets angle direction to clockwise (true) or counterclockwise (false).

             Parameters:

             angleBegin - Starting angle for drawing the arc.
             angleEnd - The HyperLine will be drawn from angleBegin to angleEnd.

             Returns:

             A Boolean instance describing the sense for drawing the HyperLine.
             */
            function sense(angleBegin, angleEnd){
                return (angleBegin < angleEnd)? ((angleBegin + Math.PI > angleEnd)? false
                    : true) : ((angleEnd + Math.PI > angleBegin)? true : false);
            }
        },
        /*
         Method: contains

         Not Implemented

         Returns *true* if *pos* is contained in the area of the shape. Returns *false* otherwise.

         Parameters:

         posFrom - (object) An *x*, *y* object with a <Graph.Node> position.
         posTo - (object) An *x*, *y* object with a <Graph.Node> position.
         pos - (object) An *x*, *y* object with the position to check.
         epsilon - (number) The dimension of the shape.

         Example:
         (start code js)
         EdgeHelper.hyperline.contains({ x: 10, y: 30 }, { x: 15, y: 35 }, { x: 15, y: 35 }, 30);
         (end code)
         */
        'contains': $.lambda(false)
    }
};


	/*
 * File: Graph.Plot.js
 */

/*
   Object: Graph.Plot

   <Graph> rendering and animation methods.
   
   Properties:
   
   nodeHelper - <NodeHelper> object.
   edgeHelper - <EdgeHelper> object.
*/
Graph.Plot = {
    //Default initializer
    initialize: function(viz, klass){
      this.viz = viz;
      this.config = viz.config;
      this.node = viz.config.Node;
      this.edge = viz.config.Edge;
      this.animation = new Animation;
      this.nodeTypes = new klass.Plot.NodeTypes;
      this.edgeTypes = new klass.Plot.EdgeTypes;
      this.labels = viz.labels;
   },

    //Add helpers
    nodeHelper: NodeHelper,
    edgeHelper: EdgeHelper,
    
    Interpolator: {
        //node/edge property parsers
        'map': {
          'border': 'color',
          'color': 'color',
          'width': 'number',
          'height': 'number',
          'dim': 'number',
          'alpha': 'number',
          'lineWidth': 'number',
          'angularWidth':'number',
          'span':'number',
          'valueArray':'array-number',
          'dimArray':'array-number',
          'vertices':'polygon'
          //'colorArray':'array-color'
        },

        //canvas specific parsers
        'canvas': {
          'globalAlpha': 'number',
          'fillStyle': 'color',
          'strokeStyle': 'color',
          'lineWidth': 'number',
          'shadowBlur': 'number',
          'shadowColor': 'color',
          'shadowOffsetX': 'number',
          'shadowOffsetY': 'number',
          'miterLimit': 'number'
        },

        //label parsers
        'label': {
          'size': 'number',
          'color': 'color'
        },

        //Number interpolator
        'compute': function(from, to, delta) {
          return from + (to - from) * delta;
        },

        //Position interpolators
        'moebius': function(elem, props, delta, vector) {
          var v = vector.scale(-delta);
          if(v.norm() < 1) {
              var x = v.x, y = v.y;
              var ans = elem.startPos
                .getc().moebiusTransformation(v);
              elem.pos.setc(ans.x, ans.y);
              v.x = x; v.y = y;
            }
        },

        'linear': function(elem, props, delta) {
            var from = elem.startPos.getc(true);
            var to = elem.endPos.getc(true);
            elem.pos.setc(this.compute(from.x, to.x, delta),
                          this.compute(from.y, to.y, delta));
        },

        'polar': function(elem, props, delta) {
          var from = elem.startPos.getp(true);
          var to = elem.endPos.getp();
          var ans = to.interpolate(from, delta);
          elem.pos.setp(ans.theta, ans.rho);
        },

        //Graph's Node/Edge interpolators
        'number': function(elem, prop, delta, getter, setter) {
          var from = elem[getter](prop, 'start');
          var to = elem[getter](prop, 'end');
          elem[setter](prop, this.compute(from, to, delta));
        },

        'color': function(elem, prop, delta, getter, setter) {
          var from = $.hexToRgb(elem[getter](prop, 'start'));
          var to = $.hexToRgb(elem[getter](prop, 'end'));
          var comp = this.compute;
          var val = $.rgbToHex([parseInt(comp(from[0], to[0], delta)),
                                parseInt(comp(from[1], to[1], delta)),
                                parseInt(comp(from[2], to[2], delta))]);

          elem[setter](prop, val);
        },

        'array-number': function(elem, prop, delta, getter, setter) {
          var from = elem[getter](prop, 'start'),
              to = elem[getter](prop, 'end'),
              cur = [];
          for(var i=0, l=from.length; i<l; i++) {
            var fromi = from[i], toi = to[i];
            if(fromi.length) {
              for(var j=0, len=fromi.length, curi=[]; j<len; j++) {
                curi.push(this.compute(fromi[j], toi[j], delta));
              }
              cur.push(curi);
            } else {
              cur.push(this.compute(fromi, toi, delta));
            }
          }
          elem[setter](prop, cur);
        },

        'node': function(elem, props, delta, map, getter, setter) {
          map = this[map];
          if(props) {
            var len = props.length;
            for(var i=0; i<len; i++) {
              var pi = props[i];
              this[map[pi]](elem, pi, delta, getter, setter);
            }
          } else {
            for(var pi in map) {
              this[map[pi]](elem, pi, delta, getter, setter);
            }
          }
        },

        'edge': function(elem, props, delta, mapKey, getter, setter) {
            var adjs = elem.adjacencies;
            for(var id in adjs) this['node'](adjs[id], props, delta, mapKey, getter, setter);
        },

        'node-property': function(elem, props, delta) {
          this['node'](elem, props, delta, 'map', 'getData', 'setData');
        },

        'edge-property': function(elem, props, delta) {
          this['edge'](elem, props, delta, 'map', 'getData', 'setData');
        },

        'label-property': function(elem, props, delta) {
          this['node'](elem, props, delta, 'label', 'getLabelData', 'setLabelData');
        },

        'node-style': function(elem, props, delta) {
          this['node'](elem, props, delta, 'canvas', 'getCanvasStyle', 'setCanvasStyle');
        },

        'edge-style': function(elem, props, delta) {
          this['edge'](elem, props, delta, 'canvas', 'getCanvasStyle', 'setCanvasStyle');
        },

        'polygon': function(elem, prop, delta, getter, setter) {
          var from = elem[getter](prop, 'start'),
              to = elem[getter](prop, 'end'),
              cur = [];
          if (typeof from.offset == 'undefined') {
            if (from === 0) {
              from = $.map(to, function() {
                return new $jit.Complex(0, 0);
              });
              from.offset = 0;
            }
            else {
              if (from.length == 0) {
                from.push(new $jit.Complex(0, 0));
              }
              while (from.length < to.length) {
                from.push(from[0]);
              }
              while (from.length > to.length) {
                to.push(to[0] || new $jit.Complex(0, 0));
              }
              if (from.length == 0) return;
              var l = from.length;
              var minDist = 1e300;
              for (var offset = 0; offset < l; offset ++) {
                var d = 0;
                for (var i = 0; i < l; i++) {
                  d +=Geometry.dist2(from[(offset + i) % l], to[i]);
                }
                if (d < minDist) {
                  from.offset = offset;
                  minDist = d;
                }
              }
            }
          }

          for (var i = 0, l = from.length; i < l; i++) {
            var fromi = from[(i + from.offset) % l], toi = to[i];
            cur.push(new $jit.Complex(
                this.compute(fromi.x, toi.x, delta),
                this.compute(fromi.y, toi.y, delta)
            ));
          }
          elem[setter](prop, cur);
        }
    },
    
  
    /*
       sequence
    
       Iteratively performs an action while refreshing the state of the visualization.

       Parameters:

       options - (object) An object containing some sequence options described below
       condition - (function) A function returning a boolean instance in order to stop iterations.
       step - (function) A function to execute on each step of the iteration.
       onComplete - (function) A function to execute when the sequence finishes.
       duration - (number) Duration (in milliseconds) of each step.

      Example:
       (start code js)
        var rg = new $jit.RGraph(options);
        var i = 0;
        rg.fx.sequence({
          condition: function() {
           return i == 10;
          },
          step: function() {
            alert(i++);
          },
          onComplete: function() {
           alert('done!');
          }
        });
       (end code)

    */
    sequence: function(options) {
        var that = this;
        options = $.merge({
          condition: $.lambda(false),
          step: $.empty,
          onComplete: $.empty,
          duration: 200
        }, options || {});

        var interval = setInterval(function() {
          if(options.condition()) {
            options.step();
          } else {
            clearInterval(interval);
            options.onComplete();
          }
          that.viz.refresh(true);
        }, options.duration);
    },
    
    /*
      prepare
 
      Prepare graph position and other attribute values before performing an Animation. 
      This method is used internally by the Toolkit.
      
      See also:
       
       <Animation>, <Graph.Plot.animate>

    */
    prepare: function(modes) {
      var graph = this.viz.graph,
          accessors = {
            'node-property': {
              'getter': 'getData',
              'setter': 'setData'
            },
            'edge-property': {
              'getter': 'getData',
              'setter': 'setData'
            },
            'node-style': {
              'getter': 'getCanvasStyle',
              'setter': 'setCanvasStyle'
            },
            'edge-style': {
              'getter': 'getCanvasStyle',
              'setter': 'setCanvasStyle'
            }
          };

      //parse modes
      var m = {};
      if($.type(modes) == 'array') {
        for(var i=0, len=modes.length; i < len; i++) {
          var elems = modes[i].split(':');
          m[elems.shift()] = elems;
        }
      } else {
        for(var p in modes) {
          if(p == 'position') {
            m[modes.position] = [];
          } else {
            m[p] = $.splat(modes[p]);
          }
        }
      }
      
      graph.eachNode(function(node) { 
        node.startPos.set(node.pos);
        $.each(['node-property', 'node-style'], function(p) {
          if(p in m) {
            var prop = m[p];
            for(var i=0, l=prop.length; i < l; i++) {
              node[accessors[p].setter](prop[i], node[accessors[p].getter](prop[i]), 'start');
            }
          }
        });
        $.each(['edge-property', 'edge-style'], function(p) {
          if(p in m) {
            var prop = m[p];
            node.eachAdjacency(function(adj) {
              for(var i=0, l=prop.length; i < l; i++) {
                adj[accessors[p].setter](prop[i], adj[accessors[p].getter](prop[i]), 'start');
              }
            });
          }
        });
      });
      return m;
    },
    
    /*
       Method: animate
    
       Animates a <Graph> by interpolating some <Graph.Node>, <Graph.Adjacence> or <Graph.Label> properties.

       Parameters:

       opt - (object) Animation options. The object properties are described below
       duration - (optional) Described in <Options.Fx>.
       fps - (optional) Described in <Options.Fx>.
       hideLabels - (optional|boolean) Whether to hide labels during the animation.
       modes - (required|object) An object with animation modes (described below).

       Animation modes:
       
       Animation modes are strings representing different node/edge and graph properties that you'd like to animate. 
       They are represented by an object that has as keys main categories of properties to animate and as values a list 
       of these specific properties. The properties are described below
       
       position - Describes the way nodes' positions must be interpolated. Possible values are 'linear', 'polar' or 'moebius'.
       node-property - Describes which Node properties will be interpolated. These properties can be any of the ones defined in <Options.Node>.
       edge-property - Describes which Edge properties will be interpolated. These properties can be any the ones defined in <Options.Edge>.
       label-property - Describes which Label properties will be interpolated. These properties can be any of the ones defined in <Options.Label> like color or size.
       node-style - Describes which Node Canvas Styles will be interpolated. These are specific canvas properties like fillStyle, strokeStyle, lineWidth, shadowBlur, shadowColor, shadowOffsetX, shadowOffsetY, etc.
       edge-style - Describes which Edge Canvas Styles will be interpolated. These are specific canvas properties like fillStyle, strokeStyle, lineWidth, shadowBlur, shadowColor, shadowOffsetX, shadowOffsetY, etc.

       Example:
       (start code js)
       var viz = new $jit.Viz(options);
       //...tweak some Data, CanvasStyles or LabelData properties...
       viz.fx.animate({
         modes: {
           'position': 'linear',
           'node-property': ['width', 'height'],
           'node-style': 'shadowColor',
           'label-property': 'size'
         },
         hideLabels: false
       });
       //...can also be written like this...
       viz.fx.animate({
         modes: ['linear',
                 'node-property:width:height',
                 'node-style:shadowColor',
                 'label-property:size'],
         hideLabels: false
       });
       (end code)
    */
    animate: function(opt, versor) {
      opt = $.merge(this.viz.config, opt || {});
      var that = this,
          viz = this.viz,
          graph  = viz.graph,
          interp = this.Interpolator,
          animation =  opt.type === 'nodefx'? this.nodeFxAnimation : this.animation;
      //prepare graph values
      var m = this.prepare(opt.modes);
      
      //animate
      if(opt.hideLabels) this.labels.hideLabels(true);
      animation.setOptions($.extend(opt, {
        $animating: false,
        compute: function(delta) {
          graph.eachNode(function(node) { 
            for(var p in m) {
              interp[p](node, m[p], delta, versor);
            }
          });
          that.plot(opt, this.$animating, delta);
          this.$animating = true;
        },
        complete: function() {
          if(opt.hideLabels) that.labels.hideLabels(false);
          that.plot(opt);
          opt.onComplete();
          //TODO(nico): This shouldn't be here!
          //opt.onAfterCompute();
        }       
      })).start();
    },
    
    /*
      nodeFx
   
      Apply animation to node properties like color, width, height, dim, etc.
  
      Parameters:
  
      options - Animation options. This object properties is described below
      elements - The Elements to be transformed. This is an object that has a properties
      
      (start code js)
      'elements': {
        //can also be an array of ids
        'id': 'id-of-node-to-transform',
        //properties to be modified. All properties are optional.
        'properties': {
          'color': '#ccc', //some color
          'width': 10, //some width
          'height': 10, //some height
          'dim': 20, //some dim
          'lineWidth': 10 //some line width
        } 
      }
      (end code)
      
      - _reposition_ Whether to recalculate positions and add a motion animation. 
      This might be used when changing _width_ or _height_ properties in a <Layouts.Tree> like layout. Default's *false*.
      
      - _onComplete_ A method that is called when the animation completes.
      
      ...and all other <Graph.Plot.animate> options like _duration_, _fps_, _transition_, etc.
  
      Example:
      (start code js)
       var rg = new RGraph(canvas, config); //can be also Hypertree or ST
       rg.fx.nodeFx({
         'elements': {
           'id':'mynodeid',
           'properties': {
             'color':'#ccf'
           },
           'transition': Trans.Quart.easeOut
         }
       });
      (end code)    
   */
   nodeFx: function(opt) {
     if (this.nodeFxAnimation == undefined) {
       this.nodeFxAnimation = new Animation();
     }

     var viz = this.viz,
         graph  = viz.graph,
         animation = this.nodeFxAnimation,
         options = $.merge(this.viz.config, {
           'elements': {
             'id': false,
             'properties': {}
           },
           'reposition': false
         });
     opt = $.merge(options, opt || {}, {
       onBeforeCompute: $.empty,
       onAfterCompute: $.empty
     });
     //check if an animation is running
     animation.stopTimer();
     var props = opt.elements.properties;
     //set end values for nodes
     if(!opt.elements.id) {
       graph.eachNode(function(n) {
         for(var prop in props) {
           n.setData(prop, props[prop], 'end');
         }
       });
     } else {
       var ids = $.splat(opt.elements.id);
       $.each(ids, function(id) {
         var n = graph.getNode(id);
         if(n) {
           for(var prop in props) {
             n.setData(prop, props[prop], 'end');
           }
         }
       });
     }
     //get keys
     var propnames = [];
     for(var prop in props) propnames.push(prop);
     //add node properties modes
     var modes = ['node-property:' + propnames.join(':')];
     //set new node positions
     if(opt.reposition) {
       modes.push('linear');
       viz.compute('end');
     }
     //animate
     this.animate($.merge(opt, {
       modes: modes,
       type: 'nodefx'
     }));
   },

    
    /*
       Method: plot
    
       Plots a <Graph>.

       Parameters:

       opt - (optional) Plotting options. Most of them are described in <Options.Fx>.

       Example:

       (start code js)
       var viz = new $jit.Viz(options);
       viz.fx.plot(); 
       (end code)

    */
   plot: function(opt, animating) {
     var viz = this.viz, 
         aGraph = viz.graph, 
         canvas = viz.canvas, 
         id = viz.root, 
         that = this, 
         ctx = canvas.getCtx(), 
         min = Math.min,
         opt = opt || this.viz.controller;
     
     opt.clearCanvas && canvas.clear();
       
     var root = aGraph.getNode(id);
     if(!root) return;
     
     var T = !!root.visited;
     aGraph.eachNode(function(node) {
       var nodeAlpha = node.getData('alpha');
       node.eachAdjacency(function(adj) {
         var nodeTo = adj.nodeTo;
         if(!!nodeTo.visited === T && node.drawn && nodeTo.drawn) {
           !animating && opt.onBeforePlotLine(adj);
           that.plotLine(adj, canvas, animating);
           !animating && opt.onAfterPlotLine(adj);
         }
       });
       if(node.drawn) {
         !animating && opt.onBeforePlotNode(node);
         that.plotNode(node, canvas, animating);
         !animating && opt.onAfterPlotNode(node);
       }
       if(!that.labelsHidden && opt.withLabels) {
         if(node.drawn && nodeAlpha >= 0.95) {
           that.labels.plotLabel(canvas, node, opt);
         } else {
           that.labels.hideLabel(node, false);
         }
       }
       node.visited = !T;
     });
    },

  /*
      Plots a Subtree.
   */
   plotTree: function(node, opt, animating) {
       var that = this, 
           viz = this.viz, 
           canvas = viz.canvas,
           config = this.config,
           ctx = canvas.getCtx();
       var nodeAlpha = node.getData('alpha');
       node.eachSubnode(function(elem) {
         if(opt.plotSubtree(node, elem) && elem.exist && elem.drawn) {
             var adj = node.getAdjacency(elem.id);
             !animating && opt.onBeforePlotLine(adj);
             that.plotLine(adj, canvas, animating);
             !animating && opt.onAfterPlotLine(adj);
             that.plotTree(elem, opt, animating);
         }
       });
       if(node.drawn) {
           !animating && opt.onBeforePlotNode(node);
           this.plotNode(node, canvas, animating);
           !animating && opt.onAfterPlotNode(node);
           if(!opt.hideLabels && opt.withLabels && nodeAlpha >= 0.95) 
               this.labels.plotLabel(canvas, node, opt);
           else 
               this.labels.hideLabel(node, false);
       } else {
           this.labels.hideLabel(node, true);
       }
   },

  /*
       Method: plotNode
    
       Plots a <Graph.Node>.

       Parameters:
       
       node - (object) A <Graph.Node>.
       canvas - (object) A <Canvas> element.

    */
    plotNode: function(node, canvas, animating) {
        var f = node.getData('type'), 
            ctxObj = this.node.CanvasStyles;
        if(f != 'none') {
          var width = node.getData('lineWidth'),
              color = node.getData('color'),
              alpha = node.getData('alpha'),
              ctx = canvas.getCtx();
          ctx.save();
          ctx.lineWidth = width;
          ctx.fillStyle = ctx.strokeStyle = color;
          ctx.globalAlpha = alpha;
          
          for(var s in ctxObj) {
            ctx[s] = node.getCanvasStyle(s);
          }

          this.nodeTypes[f].render.call(this, node, canvas, animating);
          ctx.restore();
        }
    },
    
    /*
       Method: plotLine
    
       Plots a <Graph.Adjacence>.

       Parameters:

       adj - (object) A <Graph.Adjacence>.
       canvas - (object) A <Canvas> instance.

    */
    plotLine: function(adj, canvas, animating) {
      var f = adj.getData('type'),
          ctxObj = this.edge.CanvasStyles;
      if(f != 'none') {
        var width = adj.getData('lineWidth'),
            color = adj.getData('color'),
            ctx = canvas.getCtx(),
            nodeFrom = adj.nodeFrom,
            nodeTo = adj.nodeTo;
        
        ctx.save();
        ctx.lineWidth = width;
        ctx.fillStyle = ctx.strokeStyle = color;
        ctx.globalAlpha = Math.min(nodeFrom.getData('alpha'), 
            nodeTo.getData('alpha'), 
            adj.getData('alpha'));
        
        for(var s in ctxObj) {
          ctx[s] = adj.getCanvasStyle(s);
        }

        this.edgeTypes[f].render.call(this, adj, canvas, animating);
        ctx.restore();
      }
    }    
  
};

/*
  Object: Graph.Plot3D
  
  <Graph> 3D rendering and animation methods.
  
  Properties:
  
  nodeHelper - <NodeHelper> object.
  edgeHelper - <EdgeHelper> object.

*/
Graph.Plot3D = $.merge(Graph.Plot, {
  Interpolator: {
    'linear': function(elem, props, delta) {
      var from = elem.startPos.getc(true);
      var to = elem.endPos.getc(true);
      elem.pos.setc(this.compute(from.x, to.x, delta), 
                    this.compute(from.y, to.y, delta),
                    this.compute(from.z, to.z, delta));
    }
  },
  
  plotNode: function(node, canvas) {
    if(node.getData('type') == 'none') return;
    this.plotElement(node, canvas, {
      getAlpha: function() {
        return node.getData('alpha');
      }
    });
  },
  
  plotLine: function(adj, canvas) {
    if(adj.getData('type') == 'none') return;
    this.plotElement(adj, canvas, {
      getAlpha: function() {
        return Math.min(adj.nodeFrom.getData('alpha'),
                        adj.nodeTo.getData('alpha'),
                        adj.getData('alpha'));
      }
    });
  },
  
  plotElement: function(elem, canvas, opt) {
    var gl = canvas.getCtx(),
        viewMatrix = new Matrix4,
        lighting = canvas.config.Scene.Lighting,
        wcanvas = canvas.canvases[0],
        program = wcanvas.program,
        camera = wcanvas.camera;
    
    if(!elem.geometry) {
      elem.geometry = new O3D[elem.getData('type')];
    }
    elem.geometry.update(elem);
    if(!elem.webGLVertexBuffer) {
      var vertices = [],
          faces = [],
          normals = [],
          vertexIndex = 0,
          geom = elem.geometry;
      
      for(var i=0, vs=geom.vertices, fs=geom.faces, fsl=fs.length; i<fsl; i++) {
        var face = fs[i],
            v1 = vs[face.a],
            v2 = vs[face.b],
            v3 = vs[face.c],
            v4 = face.d? vs[face.d] : false,
            n = face.normal;
        
        vertices.push(v1.x, v1.y, v1.z);
        vertices.push(v2.x, v2.y, v2.z);
        vertices.push(v3.x, v3.y, v3.z);
        if(v4) vertices.push(v4.x, v4.y, v4.z);
            
        normals.push(n.x, n.y, n.z);
        normals.push(n.x, n.y, n.z);
        normals.push(n.x, n.y, n.z);
        if(v4) normals.push(n.x, n.y, n.z);
            
        faces.push(vertexIndex, vertexIndex +1, vertexIndex +2);
        if(v4) {
          faces.push(vertexIndex, vertexIndex +2, vertexIndex +3);
          vertexIndex += 4;
        } else {
          vertexIndex += 3;
        }
      }
      //create and store vertex data
      elem.webGLVertexBuffer = gl.createBuffer();
      gl.bindBuffer(gl.ARRAY_BUFFER, elem.webGLVertexBuffer);
      gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
      //create and store faces index data
      elem.webGLFaceBuffer = gl.createBuffer();
      gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, elem.webGLFaceBuffer);
      gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, new Uint16Array(faces), gl.STATIC_DRAW);
      elem.webGLFaceCount = faces.length;
      //calculate vertex normals and store them
      elem.webGLNormalBuffer = gl.createBuffer();
      gl.bindBuffer(gl.ARRAY_BUFFER, elem.webGLNormalBuffer);
      gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(normals), gl.STATIC_DRAW);
    }
    viewMatrix.multiply(camera.matrix, elem.geometry.matrix);
    //send matrix data
    gl.uniformMatrix4fv(program.viewMatrix, false, viewMatrix.flatten());
    gl.uniformMatrix4fv(program.projectionMatrix, false, camera.projectionMatrix.flatten());
    //send normal matrix for lighting
    var normalMatrix = Matrix4.makeInvert(viewMatrix);
    normalMatrix.$transpose();
    gl.uniformMatrix4fv(program.normalMatrix, false, normalMatrix.flatten());
    //send color data
    var color = $.hexToRgb(elem.getData('color'));
    color.push(opt.getAlpha());
    gl.uniform4f(program.color, color[0] / 255, color[1] / 255, color[2] / 255, color[3]);
    //send lighting data
    gl.uniform1i(program.enableLighting, lighting.enable);
    if(lighting.enable) {
      //set ambient light color
      if(lighting.ambient) {
        var acolor = lighting.ambient;
        gl.uniform3f(program.ambientColor, acolor[0], acolor[1], acolor[2]);
      }
      //set directional light
      if(lighting.directional) {
        var dir = lighting.directional,
            color = dir.color,
            pos = dir.direction,
            vd = new Vector3(pos.x, pos.y, pos.z).normalize().$scale(-1);
        gl.uniform3f(program.lightingDirection, vd.x, vd.y, vd.z);
        gl.uniform3f(program.directionalColor, color[0], color[1], color[2]);
      }
    }
    //send vertices data
    gl.bindBuffer(gl.ARRAY_BUFFER, elem.webGLVertexBuffer);
    gl.vertexAttribPointer(program.position, 3, gl.FLOAT, false, 0, 0);
    //send normals data
    gl.bindBuffer(gl.ARRAY_BUFFER, elem.webGLNormalBuffer);
    gl.vertexAttribPointer(program.normal, 3, gl.FLOAT, false, 0, 0);
    //draw!
    gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, elem.webGLFaceBuffer );
    gl.drawElements(gl.TRIANGLES, elem.webGLFaceCount, gl.UNSIGNED_SHORT, 0);
  }
});


/*
 * File: Graph.Label.js
 *
*/

/*
   Object: Graph.Label

   An interface for plotting/hiding/showing labels.

   Description:

   This is a generic interface for plotting/hiding/showing labels.
   The <Graph.Label> interface is implemented in multiple ways to provide
   different label types.

   For example, the Graph.Label interface is implemented as <Graph.Label.HTML> to provide
   HTML label elements. Also we provide the <Graph.Label.SVG> interface for SVG type labels. 
   The <Graph.Label.Native> interface implements these methods with the native Canvas text rendering functions.
   
   All subclasses (<Graph.Label.HTML>, <Graph.Label.SVG> and <Graph.Label.Native>) implement the method plotLabel.
*/

Graph.Label = {};

/*
   Class: Graph.Label.Native

   Implements labels natively, using the Canvas text API.
*/
Graph.Label.Native = new Class({
    initialize: function(viz) {
      this.viz = viz;
    },

    /*
       Method: plotLabel

       Plots a label for a given node.

       Parameters:

       canvas - (object) A <Canvas> instance.
       node - (object) A <Graph.Node>.
       controller - (object) A configuration object.
       
       Example:
       
       (start code js)
       var viz = new $jit.Viz(options);
       var node = viz.graph.getNode('nodeId');
       viz.labels.plotLabel(viz.canvas, node, viz.config);
       (end code)
    */
    plotLabel: function(canvas, node, controller) {
      var ctx = canvas.getCtx();
      var pos = node.pos.getc(true);

      ctx.font = node.getLabelData('style') + ' ' + node.getLabelData('size') + 'px ' + node.getLabelData('family');
      ctx.textAlign = node.getLabelData('textAlign');
      ctx.fillStyle = ctx.strokeStyle = node.getLabelData('color');
      ctx.textBaseline = node.getLabelData('textBaseline');

      this.renderLabel(canvas, node, controller);
    },

    /*
       renderLabel

       Does the actual rendering of the label in the canvas. The default
       implementation renders the label close to the position of the node, this
       method should be overriden to position the labels differently.

       Parameters:

       canvas - A <Canvas> instance.
       node - A <Graph.Node>.
       controller - A configuration object. See also <Hypertree>, <RGraph>, <ST>.
    */
    renderLabel: function(canvas, node, controller) {
      var ctx = canvas.getCtx();
      var pos = node.pos.getc(true);
      ctx.fillText(node.name, pos.x, pos.y + node.getData("height") / 2);
    },

    /*
       Method: hideLabel
   
       Hides the corresponding <Graph.Node> label.
    
       Parameters:
   
       node - (object) A <Graph.Node>. Can also be an array of <Graph.Nodes>.
       show - (boolean) If *true*, nodes will be shown. Otherwise nodes will be hidden.
   
       Example:
       (start code js)
        var rg = new $jit.Viz(options);
        viz.labels.hideLabel(viz.graph.getNode('someid'), false);
       (end code)
    */
    hideLabel: function(node, show) {
      node = $.splat(node);
      var al = show ? false : true;
      $.each(node, function(n) {
        n._hideLabel = al;
      });
    },
    hideLabels: $.empty
});

/*
   Class: Graph.Label.DOM

   Abstract Class implementing some DOM label methods.

   Implemented by:

   <Graph.Label.HTML> and <Graph.Label.SVG>.

*/
Graph.Label.DOM = new Class({
    //A flag value indicating if node labels are being displayed or not.
    labelsHidden: false,
    //Label container
    labelContainer: false,
    //Label elements hash.
    labels: {},

    /*
       Method: getLabelContainer

       Lazy fetcher for the label container.

       Returns:

       The label container DOM element.

       Example:

      (start code js)
        var viz = new $jit.Viz(options);
        var labelContainer = viz.labels.getLabelContainer();
        alert(labelContainer.innerHTML);
      (end code)
    */
    getLabelContainer: function() {
      return this.labelContainer ?
        this.labelContainer :
        this.labelContainer = document.getElementById(this.viz.config.labelContainer);
    },

    /*
       Method: getLabel

       Lazy fetcher for the label element.

       Parameters:

       id - (string) The label id (which is also a <Graph.Node> id).

       Returns:

       The label element.

       Example:

      (start code js)
        var viz = new $jit.Viz(options);
        var label = viz.labels.getLabel('someid');
        alert(label.innerHTML);
      (end code)

    */
    getLabel: function(id) {
      return (id in this.labels && this.labels[id] != null) ?
        this.labels[id] :
        this.labels[id] = document.getElementById(id);
    },

    /*
       Method: hideLabels

       Hides all labels (by hiding the label container).

       Parameters:

       hide - (boolean) A boolean value indicating if the label container must be hidden or not.

       Example:
       (start code js)
        var viz = new $jit.Viz(options);
        rg.labels.hideLabels(true);
       (end code)

    */
    hideLabels: function (hide) {
      var container = this.getLabelContainer();
      if(hide)
        container.style.display = 'none';
      else
        container.style.display = '';
      this.labelsHidden = hide;
    },

    /*
       Method: clearLabels

       Clears the label container.

       Useful when using a new visualization with the same canvas element/widget.

       Parameters:

       force - (boolean) Forces deletion of all labels.

       Example:
       (start code js)
        var viz = new $jit.Viz(options);
        viz.labels.clearLabels();
        (end code)
    */
    clearLabels: function(force) {
      for(var id in this.labels) {
        if (force || !this.viz.graph.hasNode(id)) {
          this.disposeLabel(id);
          delete this.labels[id];
        }
      }
    },

    /*
       Method: disposeLabel

       Removes a label.

       Parameters:

       id - (string) A label id (which generally is also a <Graph.Node> id).

       Example:
       (start code js)
        var viz = new $jit.Viz(options);
        viz.labels.disposeLabel('labelid');
       (end code)
    */
    disposeLabel: function(id) {
      var elem = this.getLabel(id);
      if(elem && elem.parentNode) {
        elem.parentNode.removeChild(elem);
      }
    },

    /*
       Method: hideLabel

       Hides the corresponding <Graph.Node> label.

       Parameters:

       node - (object) A <Graph.Node>. Can also be an array of <Graph.Nodes>.
       show - (boolean) If *true*, nodes will be shown. Otherwise nodes will be hidden.

       Example:
       (start code js)
        var rg = new $jit.Viz(options);
        viz.labels.hideLabel(viz.graph.getNode('someid'), false);
       (end code)
    */
    hideLabel: function(node, show) {
      node = $.splat(node);
      var st = show ? "" : "none", lab, that = this;
      $.each(node, function(n) {
        lab = that.getLabel(n.id);
        if (lab) {
          lab.style.display = st;
        }
      });
    },

    /*
       fitsInCanvas

       Returns _true_ or _false_ if the label for the node is contained in the canvas dom element or not.

       Parameters:

       pos - A <Complex> instance (I'm doing duck typing here so any object with _x_ and _y_ parameters will do).
       canvas - A <Canvas> instance.

       Returns:

       A boolean value specifying if the label is contained in the <Canvas> DOM element or not.

    */
    fitsInCanvas: function(pos, canvas) {
      var size = canvas.getSize();
      if (pos.w && pos.h) {
      	if (pos.x >= size.width || pos.x < -pos.w
         || pos.y >= size.height || pos.y < -pos.h) return false;      	
      }
      else {
      	if (pos.x >= size.width || pos.x < 0
         || pos.y >= size.height || pos.y < 0) return false;
      }
       return true;
    }
});

/*
   Class: Graph.Label.HTML

   Implements HTML labels.

   Extends:

   All <Graph.Label.DOM> methods.

*/
Graph.Label.HTML = new Class({
    Implements: Graph.Label.DOM,

    /*
       Method: plotLabel

       Plots a label for a given node.

       Parameters:

       canvas - (object) A <Canvas> instance.
       node - (object) A <Graph.Node>.
       controller - (object) A configuration object.
       
      Example:
       
       (start code js)
       var viz = new $jit.Viz(options);
       var node = viz.graph.getNode('nodeId');
       viz.labels.plotLabel(viz.canvas, node, viz.config);
       (end code)


    */
    plotLabel: function(canvas, node, controller) {
      var id = node.id, tag = this.getLabel(id);

      if(!tag && !(tag = document.getElementById(id))) {
        tag = document.createElement('div');
        var container = this.getLabelContainer();
        tag.id = id;
        tag.className = 'node';
        tag.style.position = 'absolute';
        controller.onCreateLabel(tag, node);
        container.appendChild(tag);
        this.labels[node.id] = tag;
      }

      this.placeLabel(tag, node, controller);
    }
});

/*
   Class: Graph.Label.SVG

   Implements SVG labels.

   Extends:

   All <Graph.Label.DOM> methods.
*/
Graph.Label.SVG = new Class({
    Implements: Graph.Label.DOM,

    /*
       Method: plotLabel

       Plots a label for a given node.

       Parameters:

       canvas - (object) A <Canvas> instance.
       node - (object) A <Graph.Node>.
       controller - (object) A configuration object.
       
       Example:
       
       (start code js)
       var viz = new $jit.Viz(options);
       var node = viz.graph.getNode('nodeId');
       viz.labels.plotLabel(viz.canvas, node, viz.config);
       (end code)


    */
    plotLabel: function(canvas, node, controller) {
      var id = node.id, tag = this.getLabel(id);
      if(!tag && !(tag = document.getElementById(id))) {
        var ns = 'http://www.w3.org/2000/svg';
          tag = document.createElementNS(ns, 'svg:text');
        var tspan = document.createElementNS(ns, 'svg:tspan');
        tag.appendChild(tspan);
        var container = this.getLabelContainer();
        tag.setAttribute('id', id);
        tag.setAttribute('class', 'node');
        container.appendChild(tag);
        controller.onCreateLabel(tag, node);
        this.labels[node.id] = tag;
      }
      this.placeLabel(tag, node, controller);
    }
});



Graph.Geom = new Class({

  initialize: function(viz) {
    this.viz = viz;
    this.config = viz.config;
    this.node = viz.config.Node;
    this.edge = viz.config.Edge;
  },
  /*
    Applies a translation to the tree.
  
    Parameters:
  
    pos - A <Complex> number specifying translation vector.
    prop - A <Graph.Node> position property ('pos', 'start' or 'end').
  
    Example:
  
    (start code js)
      st.geom.translate(new Complex(300, 100), 'end');
    (end code)
  */  
  translate: function(pos, prop) {
     prop = $.splat(prop);
     this.viz.graph.eachNode(function(elem) {
         $.each(prop, function(p) { elem.getPos(p).$add(pos); });
     });
  },
  /*
    Hides levels of the tree until it properly fits in canvas.
  */  
  setRightLevelToShow: function(node, canvas, callback) {
     var level = this.getRightLevelToShow(node, canvas), 
         fx = this.viz.labels,
         opt = $.merge({
           execShow:true,
           execHide:true,
           onHide: $.empty,
           onShow: $.empty
         }, callback || {});
     node.eachLevel(0, this.config.levelsToShow, function(n) {
         var d = n._depth - node._depth;
         if(d > level) {
             opt.onHide(n);
             if(opt.execHide) {
               n.drawn = false; 
               n.exist = false;
               fx.hideLabel(n, false);
             }
         } else {
             opt.onShow(n);
             if(opt.execShow) {
               n.exist = true;
             }
         }
     });
     node.drawn= true;
  },
  /*
    Returns the right level to show for the current tree in order to fit in canvas.
  */  
  getRightLevelToShow: function(node, canvas) {
     var config = this.config;
     var level = config.levelsToShow;
     var constrained = config.constrained;
     if(!constrained) return level;
     while(!this.treeFitsInCanvas(node, canvas, level) && level > 1) { level-- ; }
     return level;
  }
});

/*
 * File: Loader.js
 * 
 */

/*
   Object: Loader

   Provides methods for loading and serving JSON data.
*/
var Loader = {
     construct: function(json) {
        var isGraph = ($.type(json) == 'array');
        var ans = new Graph(this.graphOptions, this.config.Node, this.config.Edge, this.config.Label);
        if(!isGraph) 
            //make tree
            (function (ans, json) {
                ans.addNode(json);
                if(json.children) {
                  for(var i=0, ch = json.children; i<ch.length; i++) {
                    ans.addAdjacence(json, ch[i]);
                    arguments.callee(ans, ch[i]);
                  }
                }
            })(ans, json);
        else
            //make graph
            (function (ans, json) {
                var getNode = function(id) {
                  for(var i=0, l=json.length; i<l; i++) {
                    if(json[i].id == id) {
                      return json[i];
                    }
                  }
                  // The node was not defined in the JSON
                  // Let's create it
                  var newNode = {
                		"id" : id,
                		"name" : id
                	};
                  return ans.addNode(newNode);
                };

                for(var i=0, l=json.length; i<l; i++) {
                  ans.addNode(json[i]);
                  var adj = json[i].adjacencies;
                  if (adj) {
                    for(var j=0, lj=adj.length; j<lj; j++) {
                      var node = adj[j], data = {};
                      if(typeof adj[j] != 'string') {
                        data = $.merge(node.data, {});
                        node = node.nodeTo;
                      }
                      ans.addAdjacence(json[i], getNode(node), data);
                    }
                  }
                }
            })(ans, json);

        return ans;
    },

    /*
     Method: loadJSON
    
     Loads a JSON structure to the visualization. The JSON structure can be a JSON *tree* or *graph* structure.
     
      A JSON tree or graph structure consists of nodes, each having as properties
       
       id - (string) A unique identifier for the node
       name - (string) A node's name
       data - (object) The data optional property contains a hash (i.e {}) 
       where you can store all the information you want about this node.
        
      For JSON *Tree* structures, there's an extra optional property *children* of type Array which contains the node's children.
      
      Example:

      (start code js)
        var json = {  
          "id": "aUniqueIdentifier",  
          "name": "usually a nodes name",  
          "data": {
            "some key": "some value",
            "some other key": "some other value"
           },  
          "children": [ *other nodes or empty* ]  
        };  
      (end code)
        
        JSON *Graph* structures consist of an array of nodes, each specifying the nodes to which the current node is connected. 
        For JSON *Graph* structures, the *children* property is replaced by the *adjacencies* property.
        
        There are two types of *Graph* structures, *simple* and *extended* graph structures.
        
        For *simple* Graph structures, the adjacencies property contains an array of strings, each specifying the 
        id of the node connected to the main node.
        
        Example:
        
        (start code js)
        var json = [  
          {  
            "id": "aUniqueIdentifier",  
            "name": "usually a nodes name",  
            "data": {
              "some key": "some value",
              "some other key": "some other value"
             },  
            "adjacencies": ["anotherUniqueIdentifier", "yetAnotherUniqueIdentifier", 'etc']  
          },

          'other nodes go here...' 
        ];          
        (end code)
        
        For *extended Graph structures*, the adjacencies property contains an array of Adjacency objects that have as properties
        
        nodeTo - (string) The other node connected by this adjacency.
        data - (object) A data property, where we can store custom key/value information.
        
        Example:
        
        (start code js)
        var json = [  
          {  
            "id": "aUniqueIdentifier",  
            "name": "usually a nodes name",  
            "data": {
              "some key": "some value",
              "some other key": "some other value"
             },  
            "adjacencies": [  
            {  
              nodeTo:"aNodeId",  
              data: {} //put whatever you want here  
            },
            'other adjacencies go here...'  
          },

          'other nodes go here...' 
        ];          
        (end code)
       
       About the data property:
       
       As described before, you can store custom data in the *data* property of JSON *nodes* and *adjacencies*. 
       You can use almost any string as key for the data object. Some keys though are reserved by the toolkit, and 
       have special meanings. This is the case for keys starting with a dollar sign, for example, *$width*.
       
       For JSON *node* objects, adding dollar prefixed properties that match the names of the options defined in 
       <Options.Node> will override the general value for that option with that particular value. For this to work 
       however, you do have to set *overridable = true* in <Options.Node>.
       
       The same thing is true for JSON adjacencies. Dollar prefixed data properties will alter values set in <Options.Edge> 
       if <Options.Edge> has *overridable = true*.
       
       When loading JSON data into TreeMaps, the *data* property must contain a value for the *$area* key, 
       since this is the value which will be taken into account when creating the layout. 
       The same thing goes for the *$color* parameter.
       
       In JSON Nodes you can use also *$label-* prefixed properties to refer to <Options.Label> properties. For example, 
       *$label-size* will refer to <Options.Label> size property. Also, in JSON nodes and adjacencies you can set 
       canvas specific properties individually by using the *$canvas-* prefix. For example, *$canvas-shadowBlur* will refer 
       to the *shadowBlur* property.
       
       These properties can also be accessed after loading the JSON data from <Graph.Nodes> and <Graph.Adjacences> 
       by using <Accessors>. For more information take a look at the <Graph> and <Accessors> documentation.
       
       Finally, these properties can also be used to create advanced animations like with <Options.NodeStyles>. For more 
       information about creating animations please take a look at the <Graph.Plot> and <Graph.Plot.animate> documentation.
       
       loadJSON Parameters:
    
        json - A JSON Tree or Graph structure.
        i - For Graph structures only. Sets the indexed node as root for the visualization.

    */
    loadJSON: function(json, i) {
      this.json = json;
      //if they're canvas labels erase them.
      if(this.labels && this.labels.clearLabels) {
        this.labels.clearLabels(true);
      }
      this.graph = this.construct(json);
      if($.type(json) != 'array'){
        this.root = json.id;
      } else {
        this.root = json[i? i : 0].id;
      }
    },
    
    /*
      Method: toJSON
   
      Returns a JSON tree/graph structure from the visualization's <Graph>. 
      See <Loader.loadJSON> for the graph formats available.
      
      See also:
      
      <Loader.loadJSON>
      
      Parameters:
      
      type - (string) Default's "tree". The type of the JSON structure to be returned. 
      Possible options are "tree" or "graph".
    */    
    toJSON: function(type) {
      type = type || "tree";
      if(type == 'tree') {
        var ans = {};
        var rootNode = this.graph.getNode(this.root);
        var ans = (function recTree(node) {
          var ans = {};
          ans.id = node.id;
          ans.name = node.name;
          ans.data = node.data;
          var ch =[];
          node.eachSubnode(function(n) {
            ch.push(recTree(n));
          });
          ans.children = ch;
          return ans;
        })(rootNode);
        return ans;
      } else {
        var ans = [];
        var T = !!this.graph.getNode(this.root).visited;
        this.graph.eachNode(function(node) {
          var ansNode = {};
          ansNode.id = node.id;
          ansNode.name = node.name;
          ansNode.data = node.data;
          var adjs = [];
          node.eachAdjacency(function(adj) {
            var nodeTo = adj.nodeTo;
            if(!!nodeTo.visited === T) {
              var ansAdj = {};
              ansAdj.nodeTo = nodeTo.id;
              ansAdj.data = adj.data;
              adjs.push(ansAdj);
            }
          });
          ansNode.adjacencies = adjs;
          ans.push(ansNode);
          node.visited = !T;
        });
        return ans;
      }
    }
};



/*
 * File: Layouts.js
 * 
 * Implements base Tree and Graph layouts.
 *
 * Description:
 *
 * Implements base Tree and Graph layouts like Radial, Tree, etc.
 * 
 */

/*
 * Object: Layouts
 * 
 * Parent object for common layouts.
 *
 */
var Layouts = $jit.Layouts = {};


//Some util shared layout functions are defined here.
var NodeDim = {
  label: null,
  
  compute: function(graph, prop, opt) {
    this.initializeLabel(opt);
    var label = this.label, style = label.style;
    graph.eachNode(function(n) {
      var autoWidth  = n.getData('autoWidth'),
          autoHeight = n.getData('autoHeight');
      if(autoWidth || autoHeight) {
        //delete dimensions since these are
        //going to be overridden now.
        delete n.data.$width;
        delete n.data.$height;
        delete n.data.$dim;
        
        var width  = n.getData('width'),
            height = n.getData('height');
        //reset label dimensions
        style.width  = autoWidth? 'auto' : width + 'px';
        style.height = autoHeight? 'auto' : height + 'px';
        
        //TODO(nico) should let the user choose what to insert here.
        label.innerHTML = n.name;
        
        var offsetWidth  = label.offsetWidth,
            offsetHeight = label.offsetHeight;
        var type = n.getData('type');
        if($.indexOf(['circle', 'square', 'triangle', 'star'], type) === -1) {
          n.setData('width', offsetWidth);
          n.setData('height', offsetHeight);
        } else {
          var dim = offsetWidth > offsetHeight? offsetWidth : offsetHeight;
          n.setData('width', dim);
          n.setData('height', dim);
          n.setData('dim', dim); 
        }
      }
    });
  },
  
  initializeLabel: function(opt) {
    if(!this.label) {
      this.label = document.createElement('div');
      document.body.appendChild(this.label);
    }
    this.setLabelStyles(opt);
  },
  
  setLabelStyles: function(opt) {
    $.extend(this.label.style, {
      'visibility': 'hidden',
      'position': 'absolute',
      'width': 'auto',
      'height': 'auto'
    });
    this.label.className = 'jit-autoadjust-label';
  }
};


/*
 * Class: Layouts.Tree
 *
 * Implements a Tree Layout.
 *
 * Implemented By:
 *
 * <ST>
 *
 * Inspired by:
 *
 * Drawing Trees (Andrew J. Kennedy) <http://research.microsoft.com/en-us/um/people/akenn/fun/drawingtrees.pdf>
 *
 */
Layouts.Tree = (function() {
  //Layout functions
  var slice = Array.prototype.slice;

  /*
     Calculates the max width and height nodes for a tree level
  */
  function getBoundaries(graph, config, level, orn, prop) {
    var dim = config.Node;
    var multitree = config.multitree;
    if (dim.overridable) {
      var w = -1, h = -1;
      graph.eachNode(function(n) {
        if (n._depth == level
            && (!multitree || ('$orn' in n.data) && n.data.$orn == orn)) {
          var dw = n.getData('width', prop);
          var dh = n.getData('height', prop);
          w = (w < dw) ? dw : w;
          h = (h < dh) ? dh : h;
        }
      });
      return {
        'width' : w < 0 ? dim.width : w,
        'height' : h < 0 ? dim.height : h
      };
    } else {
      return dim;
    }
  }


  function movetree(node, prop, val, orn) {
    var p = (orn == "left" || orn == "right") ? "y" : "x";
    node.getPos(prop)[p] += val;
  }


  function moveextent(extent, val) {
    var ans = [];
    $.each(extent, function(elem) {
      elem = slice.call(elem);
      elem[0] += val;
      elem[1] += val;
      ans.push(elem);
    });
    return ans;
  }


  function merge(ps, qs) {
    if (ps.length == 0)
      return qs;
    if (qs.length == 0)
      return ps;
    var p = ps.shift(), q = qs.shift();
    return [ [ p[0], q[1] ] ].concat(merge(ps, qs));
  }


  function mergelist(ls, def) {
    def = def || [];
    if (ls.length == 0)
      return def;
    var ps = ls.pop();
    return mergelist(ls, merge(ps, def));
  }


  function fit(ext1, ext2, subtreeOffset, siblingOffset, i) {
    if (ext1.length <= i || ext2.length <= i)
      return 0;

    var p = ext1[i][1], q = ext2[i][0];
    return Math.max(fit(ext1, ext2, subtreeOffset, siblingOffset, ++i)
        + subtreeOffset, p - q + siblingOffset);
  }


  function fitlistl(es, subtreeOffset, siblingOffset) {
    function $fitlistl(acc, es, i) {
      if (es.length <= i)
        return [];
      var e = es[i], ans = fit(acc, e, subtreeOffset, siblingOffset, 0);
      return [ ans ].concat($fitlistl(merge(acc, moveextent(e, ans)), es, ++i));
    }
    ;
    return $fitlistl( [], es, 0);
  }


  function fitlistr(es, subtreeOffset, siblingOffset) {
    function $fitlistr(acc, es, i) {
      if (es.length <= i)
        return [];
      var e = es[i], ans = -fit(e, acc, subtreeOffset, siblingOffset, 0);
      return [ ans ].concat($fitlistr(merge(moveextent(e, ans), acc), es, ++i));
    }
    ;
    es = slice.call(es);
    var ans = $fitlistr( [], es.reverse(), 0);
    return ans.reverse();
  }


  function fitlist(es, subtreeOffset, siblingOffset, align) {
    var esl = fitlistl(es, subtreeOffset, siblingOffset), esr = fitlistr(es,
        subtreeOffset, siblingOffset);

    if (align == "left")
      esr = esl;
    else if (align == "right")
      esl = esr;

    for ( var i = 0, ans = []; i < esl.length; i++) {
      ans[i] = (esl[i] + esr[i]) / 2;
    }
    return ans;
  }


  function design(graph, node, prop, config, orn) {
    var multitree = config.multitree;
    var auxp = [ 'x', 'y' ], auxs = [ 'width', 'height' ];
    var ind = +(orn == "left" || orn == "right");
    var p = auxp[ind], notp = auxp[1 - ind];

    var cnode = config.Node;
    var s = auxs[ind], nots = auxs[1 - ind];

    var siblingOffset = config.siblingOffset;
    var subtreeOffset = config.subtreeOffset;
    var align = config.align;

    function $design(node, maxsize, acum) {
      var sval = node.getData(s, prop);
      var notsval = maxsize
          || (node.getData(nots, prop));

      var trees = [], extents = [], chmaxsize = false;
      var chacum = notsval + config.levelDistance;
      node.eachSubnode(function(n) {
            if (n.exist
                && (!multitree || ('$orn' in n.data) && n.data.$orn == orn)) {

              if (config.levelSpacing == 'even') {
                if (!chmaxsize) {
                  chmaxsize = getBoundaries(graph, config, n._depth, orn, prop);
                }
              } else {
                chmaxsize = { width: n.getData('width'), height: n.getData('height') };
              }


              var s = $design(n, chmaxsize[nots], acum + chacum);
              trees.push(s.tree);
              extents.push(s.extent);
            }
          });
      var positions = fitlist(extents, subtreeOffset, siblingOffset, align);
      for ( var i = 0, ptrees = [], pextents = []; i < trees.length; i++) {
        movetree(trees[i], prop, positions[i], orn);
        pextents.push(moveextent(extents[i], positions[i]));
      }
      var resultextent = [ [ -sval / 2, sval / 2 ] ]
          .concat(mergelist(pextents));
      node.getPos(prop)[p] = 0;

      if (orn == "top" || orn == "left") {
        node.getPos(prop)[notp] = acum;
      } else {
        node.getPos(prop)[notp] = -acum;
      }

      return {
        tree : node,
        extent : resultextent
      };
    }

    $design(node, false, 0);
  }


  return new Class({
    /*
    Method: compute

    Computes nodes' positions.

     */
    compute : function(property, computeLevels) {
      var prop = property || 'start';
      var node = this.graph.getNode(this.root);
      $.extend(node, {
        'drawn' : true,
        'exist' : true,
        'selected' : true
      });
      NodeDim.compute(this.graph, prop, this.config);
      if (!!computeLevels || !("_depth" in node)) {
        this.graph.computeLevels(this.root, 0, "ignore");
      }

      this.computePositions(node, prop);
    },

    computePositions : function(node, prop) {
      var config = this.config;
      var multitree = config.multitree;
      var align = config.align;
      var indent = align !== 'center' && config.indent;
      var orn = config.orientation;
      var orns = multitree ? [ 'top', 'right', 'bottom', 'left' ] : [ orn ];
      var that = this;
      $.each(orns, function(orn) {
        //calculate layout
          design(that.graph, node, prop, that.config, orn, prop);
          var i = [ 'x', 'y' ][+(orn == "left" || orn == "right")];
          //absolutize
          (function red(node) {
            node.eachSubnode(function(n) {
              if (n.exist
                  && (!multitree || ('$orn' in n.data) && n.data.$orn == orn)) {

                n.getPos(prop)[i] += node.getPos(prop)[i];
                if (indent) {
                  n.getPos(prop)[i] += align == 'left' ? indent : -indent;
                }
                red(n);
              }
            });
          })(node);
        });
    }
  });

})();


/*
 * File: Spacetree.js
 */

/*
   Class: ST

  A Tree layout with advanced contraction and expansion animations.

  Inspired by:

  SpaceTree: Supporting Exploration in Large Node Link Tree, Design Evolution and Empirical Evaluation (Catherine Plaisant, Jesse Grosjean, Benjamin B. Bederson)
  <http://hcil.cs.umd.edu/trs/2002-05/2002-05.pdf>

  Drawing Trees (Andrew J. Kennedy) <http://research.microsoft.com/en-us/um/people/akenn/fun/drawingtrees.pdf>

  Note:

  This visualization was built and engineered from scratch, taking only the papers as inspiration, and only shares some features with the visualization described in those papers.

  Implements:

  All <Loader> methods

  Constructor Options:

  Inherits options from

  - <Options.Canvas>
  - <Options.Controller>
  - <Options.Tree>
  - <Options.Node>
  - <Options.Edge>
  - <Options.Label>
  - <Options.Events>
  - <Options.Tips>
  - <Options.NodeStyles>
  - <Options.Navigation>

  Additionally, there are other parameters and some default values changed

  constrained - (boolean) Default's *true*. Whether to show the entire tree when loaded or just the number of levels specified by _levelsToShow_.
  levelsToShow - (number) Default's *2*. The number of levels to show for a subtree. This number is relative to the selected node.
  levelDistance - (number) Default's *30*. The distance between two consecutive levels of the tree.
  Node.type - Described in <Options.Node>. Default's set to *rectangle*.
  offsetX - (number) Default's *0*. The x-offset distance from the selected node to the center of the canvas.
  offsetY - (number) Default's *0*. The y-offset distance from the selected node to the center of the canvas.
  duration - Described in <Options.Fx>. It's default value has been changed to *700*.

  Instance Properties:

  canvas - Access a <Canvas> instance.
  graph - Access a <Graph> instance.
  op - Access a <ST.Op> instance.
  fx - Access a <ST.Plot> instance.
  labels - Access a <ST.Label> interface implementation.

 */

$jit.ST= (function() {
    // Define some private methods first...
    // Nodes in path
    var nodesInPath = [];
    // Nodes to contract
    function getNodesToHide(node) {
      node = node || this.clickedNode;
      if(!this.config.constrained) {
        return [];
      }
      var Geom = this.geom;
      var graph = this.graph;
      var canvas = this.canvas;
      var level = node._depth, nodeArray = [];
  	  graph.eachNode(function(n) {
          if(n.exist && !n.selected) {
              if(n.isDescendantOf(node.id)) {
                if(n._depth <= level) nodeArray.push(n);
              } else {
                nodeArray.push(n);
              }
          }
  	  });
  	  var leafLevel = Geom.getRightLevelToShow(node, canvas);
  	  node.eachLevel(leafLevel, leafLevel, function(n) {
          if(n.exist && !n.selected) nodeArray.push(n);
  	  });

  	  for (var i = 0; i < nodesInPath.length; i++) {
  	    var n = this.graph.getNode(nodesInPath[i]);
  	    if(!n.isDescendantOf(node.id)) {
  	      nodeArray.push(n);
  	    }
  	  }
  	  return nodeArray;
    };
    // Nodes to expand
     function getNodesToShow(node) {
        var nodeArray = [], config = this.config;
        node = node || this.clickedNode;
        this.clickedNode.eachLevel(0, config.levelsToShow, function(n) {
            if(config.multitree && !('$orn' in n.data)
            		&& n.anySubnode(function(ch){ return ch.exist && !ch.drawn; })) {
            	nodeArray.push(n);
            } else if(n.drawn && !n.anySubnode("drawn")) {
              nodeArray.push(n);
            }
        });
        return nodeArray;
     };
    // Now define the actual class.
    return new Class({

        Implements: [Loader, Extras, Layouts.Tree],

        initialize: function(controller) {
          var $ST = $jit.ST;

          var config= {
                levelsToShow: 2,
                levelDistance: 30,
                constrained: true,
                Node: {
                  type: 'rectangle'
                },
                duration: 700,
                offsetX: 0,
                offsetY: 0
            };

            this.controller = this.config = $.merge(
                Options("Canvas", "Fx", "Tree", "Node", "Edge", "Controller",
                    "Tips", "NodeStyles", "Events", "Navigation", "Label"), config, controller);

            var canvasConfig = this.config;
            if(canvasConfig.useCanvas) {
              this.canvas = canvasConfig.useCanvas;
              this.config.labelContainer = this.canvas.id + '-label';
            } else {
              if(canvasConfig.background) {
                canvasConfig.background = $.merge({
                  type: 'Circles'
                }, canvasConfig.background);
              }
              this.canvas = new Canvas(this, canvasConfig);
              this.config.labelContainer = (typeof canvasConfig.injectInto == 'string'? canvasConfig.injectInto : canvasConfig.injectInto.id) + '-label';
            }

            this.graphOptions = {
                'klass': Complex
            };
            this.graph = new Graph(this.graphOptions, this.config.Node, this.config.Edge);
            this.labels = new $ST.Label[canvasConfig.Label.type](this);
            this.fx = new $ST.Plot(this, $ST);
            this.op = new $ST.Op(this);
            this.group = new $ST.Group(this);
            this.geom = new $ST.Geom(this);
            this.clickedNode=  null;
            // initialize extras
            this.initializeExtras();
        },

        /*
         Method: plot

         Plots the <ST>. This is a shortcut to *fx.plot*.

        */
        plot: function() { this.fx.plot(this.controller); },


        /*
         Method: switchPosition

         Switches the tree orientation.

         Parameters:

        pos - (string) The new tree orientation. Possible values are "top", "left", "right" and "bottom".
        method - (string) Set this to "animate" if you want to animate the tree when switching its position. You can also set this parameter to "replot" to just replot the subtree.
        onComplete - (optional|object) This callback is called once the "switching" animation is complete.

         Example:

         (start code js)
           st.switchPosition("right", "animate", {
            onComplete: function() {
              alert('completed!');
            }
           });
         (end code)
        */
        switchPosition: function(pos, method, onComplete) {
          var Geom = this.geom, Plot = this.fx, that = this;
          if(!Plot.busy) {
              Plot.busy = true;
              this.contract({
                  onComplete: function() {
                      Geom.switchOrientation(pos);
                      that.compute('end', false);
                      Plot.busy = false;
                      if(method == 'animate') {
                    	  that.onClick(that.clickedNode.id, onComplete);
                      } else if(method == 'replot') {
                    	  that.select(that.clickedNode.id, onComplete);
                      }
                  }
              }, pos);
          }
        },

        /*
        Method: switchAlignment

        Switches the tree alignment.

        Parameters:

       align - (string) The new tree alignment. Possible values are "left", "center" and "right".
       method - (string) Set this to "animate" if you want to animate the tree after aligning its position. You can also set this parameter to "replot" to just replot the subtree.
       onComplete - (optional|object) This callback is called once the "switching" animation is complete.

        Example:

        (start code js)
          st.switchAlignment("right", "animate", {
           onComplete: function() {
             alert('completed!');
           }
          });
        (end code)
       */
       switchAlignment: function(align, method, onComplete) {
        this.config.align = align;
        if(method == 'animate') {
        	this.select(this.clickedNode.id, onComplete);
        } else if(method == 'replot') {
        	this.onClick(this.clickedNode.id, onComplete);
        }
       },

       /*
        Method: addNodeInPath

        Adds a node to the current path as selected node. The selected node will be visible (as in non-collapsed) at all times.


        Parameters:

       id - (string) A <Graph.Node> id.

        Example:

        (start code js)
          st.addNodeInPath("nodeId");
        (end code)
       */
       addNodeInPath: function(id) {
           nodesInPath.push(id);
           this.select((this.clickedNode && this.clickedNode.id) || this.root);
       },

       /*
       Method: clearNodesInPath

       Removes all nodes tagged as selected by the <ST.addNodeInPath> method.

       See also:

       <ST.addNodeInPath>

       Example:

       (start code js)
         st.clearNodesInPath();
       (end code)
      */
       clearNodesInPath: function(id) {
           nodesInPath.length = 0;
           this.select((this.clickedNode && this.clickedNode.id) || this.root);
       },

       /*
         Method: refresh

         Computes positions and plots the tree.

       */
       refresh: function() {
           this.reposition();
           this.select((this.clickedNode && this.clickedNode.id) || this.root);
       },

       reposition: function() {
            this.graph.computeLevels(this.root, 0, "ignore");
            this.geom.setRightLevelToShow(this.clickedNode, this.canvas);
            this.graph.eachNode(function(n) {
                if(n.exist) n.drawn = true;
            });
            this.compute('end');
            if (this.clickedNode) {
              var offset = {
                  x: this.canvas.translateOffsetX + this.config.offsetX || 0, 
                  y: this.canvas.translateOffsetY + this.config.offsetY || 0
              };
              this.geom.translate(this.clickedNode.endPos.add(offset).$scale(-1), 'end');
            }
        },

        requestNodes: function(node, onComplete) {
          var handler = $.merge(this.controller, onComplete),
          lev = this.config.levelsToShow;
          if(handler.request) {
              var leaves = [], d = node._depth;
              node.eachLevel(0, lev, function(n) {
                  if(n.drawn &&
                   !n.anySubnode()) {
                   leaves.push(n);
                   n._level = lev - (n._depth - d);
                  }
              });
              this.group.requestNodes(leaves, handler);
          }
            else
              handler.onComplete();
        },

        contract: function(onComplete, switched) {
          var orn  = this.config.orientation;
          var Geom = this.geom, Group = this.group;
          if(switched) Geom.switchOrientation(switched);
          var nodes = getNodesToHide.call(this);
          if(switched) Geom.switchOrientation(orn);
          Group.contract(nodes, $.merge(this.controller, onComplete));
        },

         move: function(node, onComplete) {
            this.compute('end', false);
            var move = onComplete.Move, offset = {
                'x': move.offsetX,
                'y': move.offsetY
            };
            if(move.enable) {
                this.geom.translate(node.endPos.add(offset).$scale(-1), "end");
            } else {
                this.geom.translate($C(offset.x, offset.y).$scale(-1), "end");
            }
            this.fx.animate($.merge(this.controller, { modes: ['linear'] }, onComplete));
         },

        expand: function (node, onComplete) {
            var nodeArray = getNodesToShow.call(this, node);
            this.group.expand(nodeArray, $.merge(this.controller, onComplete));
        },

        selectPath: function(node) {
          var that = this;
          this.graph.eachNode(function(n) { n.selected = false; });
          function path(node) {
              if(node == null || node.selected) return;
              node.selected = true;
              $.each(that.group.getSiblings([node])[node.id],
              function(n) {
                   n.exist = true;
                   n.drawn = true;
              });
              var parents = node.getParents();
              parents = (parents.length > 0)? parents[0] : null;
              path(parents);
          };
          for(var i=0, ns = [node.id].concat(nodesInPath); i < ns.length; i++) {
              path(this.graph.getNode(ns[i]));
          }
        },

        /*
        Method: setRoot

         Switches the current root node. Changes the topology of the Tree.

        Parameters:
           id - (string) The id of the node to be set as root.
           method - (string) Set this to "animate" if you want to animate the tree after adding the subtree. You can also set this parameter to "replot" to just replot the subtree.
           onComplete - (optional|object) An action to perform after the animation (if any).

        Example:

        (start code js)
          st.setRoot('nodeId', 'animate', {
             onComplete: function() {
               alert('complete!');
             }
          });
        (end code)
     */
     setRoot: function(id, method, onComplete) {
        	if(this.busy) return;
        	this.busy = true;
          var that = this, canvas = this.canvas;
        	var rootNode = this.graph.getNode(this.root);
        	var clickedNode = this.graph.getNode(id);
        	function $setRoot() {
            	if(this.config.multitree && clickedNode.data.$orn) {
            		var orn = clickedNode.data.$orn;
            		var opp = {
            				'left': 'right',
            				'right': 'left',
            				'top': 'bottom',
            				'bottom': 'top'
            		}[orn];
            		rootNode.data.$orn = opp;
            		(function tag(rootNode) {
                		rootNode.eachSubnode(function(n) {
                			if(n.id != id) {
                				n.data.$orn = opp;
                				tag(n);
                			}
                		});
            		})(rootNode);
            		delete clickedNode.data.$orn;
            	}
            	this.root = id;
            	this.clickedNode = clickedNode;
            	this.graph.computeLevels(this.root, 0, "ignore");
            	this.geom.setRightLevelToShow(clickedNode, canvas, {
            	  execHide: false,
            	  onShow: function(node) {
            	    if(!node.drawn) {
                    node.drawn = true;
                    node.setData('alpha', 1, 'end');
                    node.setData('alpha', 0);
                    node.pos.setc(clickedNode.pos.x, clickedNode.pos.y);
            	    }
            	  }
            	});
              this.compute('end');
              this.busy = true;
              this.fx.animate({
                modes: ['linear', 'node-property:alpha'],
                onComplete: function() {
                  that.busy = false;
                  that.onClick(id, {
                    onComplete: function() {
                      onComplete && onComplete.onComplete();
                    }
                  });
                }
              });
        	}

        	// delete previous orientations (if any)
        	delete rootNode.data.$orns;

        	if(method == 'animate') {
        	  $setRoot.call(this);
        	  that.selectPath(clickedNode);
        	} else if(method == 'replot') {
        		$setRoot.call(this);
        		this.select(this.root);
        	}
     },

     /*
           Method: addSubtree

            Adds a subtree.

           Parameters:
              subtree - (object) A JSON Tree object. See also <Loader.loadJSON>.
              method - (string) Set this to "animate" if you want to animate the tree after adding the subtree. You can also set this parameter to "replot" to just replot the subtree.
              onComplete - (optional|object) An action to perform after the animation (if any).

           Example:

           (start code js)
             st.addSubtree(json, 'animate', {
                onComplete: function() {
                  alert('complete!');
                }
             });
           (end code)
        */
        addSubtree: function(subtree, method, onComplete) {
            if(method == 'replot') {
                this.op.sum(subtree, $.extend({ type: 'replot' }, onComplete || {}));
            } else if (method == 'animate') {
                this.op.sum(subtree, $.extend({ type: 'fade:seq' }, onComplete || {}));
            }
        },

        /*
           Method: removeSubtree

            Removes a subtree.

           Parameters:
              id - (string) The _id_ of the subtree to be removed.
              removeRoot - (boolean) Default's *false*. Remove the root of the subtree or only its subnodes.
              method - (string) Set this to "animate" if you want to animate the tree after removing the subtree. You can also set this parameter to "replot" to just replot the subtree.
              onComplete - (optional|object) An action to perform after the animation (if any).

          Example:

          (start code js)
            st.removeSubtree('idOfSubtreeToBeRemoved', false, 'animate', {
              onComplete: function() {
                alert('complete!');
              }
            });
          (end code)

        */
        removeSubtree: function(id, removeRoot, method, onComplete) {
            var node = this.graph.getNode(id), subids = [];
            node.eachLevel(+!removeRoot, false, function(n) {
                subids.push(n.id);
            });
            if(method == 'replot') {
                this.op.removeNode(subids, $.extend({ type: 'replot' }, onComplete || {}));
            } else if (method == 'animate') {
                this.op.removeNode(subids, $.extend({ type: 'fade:seq'}, onComplete || {}));
            }
        },

        /*
           Method: select

            Selects a node in the <ST> without performing an animation. Useful when selecting
            nodes which are currently hidden or deep inside the tree.

          Parameters:
            id - (string) The id of the node to select.
            onComplete - (optional|object) an onComplete callback.

          Example:
          (start code js)
            st.select('mynodeid', {
              onComplete: function() {
                alert('complete!');
              }
            });
          (end code)
        */
        select: function(id, onComplete) {
            var group = this.group, geom = this.geom;
            var node=  this.graph.getNode(id), canvas = this.canvas;
            var root  = this.graph.getNode(this.root);
            var complete = $.merge(this.controller, onComplete);
            var that = this;

            complete.onBeforeCompute(node);
            this.selectPath(node);
            this.clickedNode= node;
            this.requestNodes(node, {
                onComplete: function(){
                    group.hide(group.prepare(getNodesToHide.call(that)), complete);
                    geom.setRightLevelToShow(node, canvas);
                    that.compute("current");
                    that.graph.eachNode(function(n) {
                        var pos = n.pos.getc(true);
                        n.startPos.setc(pos.x, pos.y);
                        n.endPos.setc(pos.x, pos.y);
                        n.visited = false;
                    });
                    var offset = { x: complete.offsetX, y: complete.offsetY };
                    that.geom.translate(node.endPos.add(offset).$scale(-1), ["start", "current", "end"]);
                    group.show(getNodesToShow.call(that));
                    that.plot();
                    complete.onAfterCompute(that.clickedNode);
                    complete.onComplete();
                }
            });
        },

      /*
         Method: onClick

        Animates the <ST> to center the node specified by *id*.

        Parameters:

        id - (string) A node id.
        options - (optional|object) A group of options and callbacks described below.
        onComplete - (object) An object callback called when the animation finishes.
        Move - (object) An object that has as properties _offsetX_ or _offsetY_ for adding some offset position to the centered node.

        Example:

        (start code js)
          st.onClick('mynodeid', {
	          Move: {
	          	enable: true,
	            offsetX: 30,
	            offsetY: 5
	          },
	          onComplete: function() {
	              alert('yay!');
	          }
          });
        (end code)

        */
      onClick: function (id, options) {
        var canvas = this.canvas, that = this, Geom = this.geom, config = this.config;
        var innerController = {
            Move: {
        	    enable: true,
              offsetX: canvas.translateOffsetX + config.offsetX || 0,
              offsetY: canvas.translateOffsetY + config.offsetY || 0
            },
            setRightLevelToShowConfig: false,
            onBeforeRequest: $.empty,
            onBeforeContract: $.empty,
            onBeforeMove: $.empty,
            onBeforeExpand: $.empty
        };
        var complete = $.merge(this.controller, innerController, options);

        if(!this.busy) {
            this.busy = true;
            var node = this.graph.getNode(id);
            this.selectPath(node, this.clickedNode);
           	this.clickedNode = node;
            complete.onBeforeCompute(node);
            complete.onBeforeRequest(node);
            this.requestNodes(node, {
                onComplete: function() {
                    complete.onBeforeContract(node);
                    that.contract({
                        onComplete: function() {
                            Geom.setRightLevelToShow(node, canvas, complete.setRightLevelToShowConfig);
                            complete.onBeforeMove(node);
                            that.move(node, {
                                Move: complete.Move,
                                onComplete: function() {
                                    complete.onBeforeExpand(node);
                                    that.expand(node, {
                                        onComplete: function() {
                                            that.busy = false;
                                            complete.onAfterCompute(id);
                                            complete.onComplete();
                                        }
                                    }); // expand
                                }
                            }); // move
                        }
                    });// contract
                }
            });// request
        }
      }
    });

})();

$jit.ST.$extend = true;

/*
   Class: ST.Op

   Custom extension of <Graph.Op>.

   Extends:

   All <Graph.Op> methods

   See also:

   <Graph.Op>

*/
$jit.ST.Op = new Class({

  Implements: Graph.Op

});

/*

     Performs operations on group of nodes.

*/
$jit.ST.Group = new Class({

    initialize: function(viz) {
        this.viz = viz;
        this.canvas = viz.canvas;
        this.config = viz.config;
        this.animation = new Animation;
        this.nodes = null;
    },

    /*

       Calls the request method on the controller to request a subtree for each node.
    */
    requestNodes: function(nodes, controller) {
        var counter = 0, len = nodes.length, nodeSelected = {};
        var complete = function() { controller.onComplete(); };
        var viz = this.viz;
        if(len == 0) complete();
        for(var i=0; i<len; i++) {
            nodeSelected[nodes[i].id] = nodes[i];
            controller.request(nodes[i].id, nodes[i]._level, {
                onComplete: function(nodeId, data) {
                    if(data && data.children) {
                        data.id = nodeId;
                        viz.op.sum(data, { type: 'nothing' });
                    }
                    if(++counter == len) {
                        viz.graph.computeLevels(viz.root, 0);
                        complete();
                    }
                }
            });
        }
    },

    /*

       Collapses group of nodes.
    */
    contract: function(nodes, controller) {
        var viz = this.viz;
        var that = this;

        nodes = this.prepare(nodes);
        this.animation.setOptions($.merge(controller, {
            $animating: false,
            compute: function(delta) {
              if(delta == 1) delta = 0.99;
              that.plotStep(1 - delta, controller, this.$animating);
              this.$animating = 'contract';
            },

            complete: function() {
                that.hide(nodes, controller);
            }
        })).start();
    },

    hide: function(nodes, controller) {
        var viz = this.viz;
        for(var i=0; i<nodes.length; i++) {
            // TODO nodes are requested on demand, but not
            // deleted when hidden. Would that be a good feature?
            // Currently that feature is buggy, so I'll turn it off
            // Actually this feature is buggy because trimming should take
            // place onAfterCompute and not right after collapsing nodes.
            if (true || !controller || !controller.request) {
                nodes[i].eachLevel(1, false, function(elem){
                    if (elem.exist) {
                        $.extend(elem, {
                            'drawn': false,
                            'exist': false
                        });
                    }
                });
            } else {
                var ids = [];
                nodes[i].eachLevel(1, false, function(n) {
                    ids.push(n.id);
                });
                viz.op.removeNode(ids, { 'type': 'nothing' });
                viz.labels.clearLabels();
            }
        }
        controller.onComplete();
    },


    /*
       Expands group of nodes.
    */
    expand: function(nodes, controller) {
        var that = this;
        this.show(nodes);
        this.animation.setOptions($.merge(controller, {
            $animating: false,
            compute: function(delta) {
                that.plotStep(delta, controller, this.$animating);
                this.$animating = 'expand';
            },

            complete: function() {
                that.plotStep(undefined, controller, false);
                controller.onComplete();
            }
        })).start();

    },

    show: function(nodes) {
        var config = this.config;
        this.prepare(nodes);
        $.each(nodes, function(n) {
        	// check for root nodes if multitree
        	if(config.multitree && !('$orn' in n.data)) {
        		delete n.data.$orns;
        		var orns = ' ';
        		n.eachSubnode(function(ch) {
        			if(('$orn' in ch.data)
        					&& orns.indexOf(ch.data.$orn) < 0
        					&& ch.exist && !ch.drawn) {
        				orns += ch.data.$orn + ' ';
        			}
        		});
        		n.data.$orns = orns;
        	}
            n.eachLevel(0, config.levelsToShow, function(n) {
            	if(n.exist) n.drawn = true;
            });
        });
    },

    prepare: function(nodes) {
        this.nodes = this.getNodesWithChildren(nodes);
        return this.nodes;
    },

    /*
       Filters an array of nodes leaving only nodes with children.
    */
    getNodesWithChildren: function(nodes) {
        var ans = [], config = this.config, root = this.viz.root;
        nodes.sort(function(a, b) { return (a._depth <= b._depth) - (a._depth >= b._depth); });
        for(var i=0; i<nodes.length; i++) {
            if(nodes[i].anySubnode("exist")) {
            	for (var j = i+1, desc = false; !desc && j < nodes.length; j++) {
                    if(!config.multitree || '$orn' in nodes[j].data) {
                		desc = desc || nodes[i].isDescendantOf(nodes[j].id);
                    }
                }
                if(!desc) ans.push(nodes[i]);
            }
        }
        return ans;
    },

    plotStep: function(delta, controller, animating) {
        var viz = this.viz,
        config = this.config,
        canvas = viz.canvas,
        ctx = canvas.getCtx(),
        nodes = this.nodes;
        var i, node;
        // hide nodes that are meant to be collapsed/expanded
        var nds = {};
        for(i=0; i<nodes.length; i++) {
          node = nodes[i];
          nds[node.id] = [];
          var root = config.multitree && !('$orn' in node.data);
          var orns = root && node.data.$orns;
          node.eachSubgraph(function(n) {
            // TODO(nico): Cleanup
        	  // special check for root node subnodes when
        	  // multitree is checked.
        	  if(root && orns && orns.indexOf(n.data.$orn) > 0
        			  && n.drawn) {
        		  n.drawn = false;
                  nds[node.id].push(n);
              } else if((!root || !orns) && n.drawn) {
                n.drawn = false;
                nds[node.id].push(n);
              }
            });
            node.drawn = true;
        }
        // plot the whole (non-scaled) tree
        if(nodes.length > 0) viz.fx.plot();
        // show nodes that were previously hidden
        for(i in nds) {
          $.each(nds[i], function(n) { n.drawn = true; });
        }
        // plot each scaled subtree
        for(i=0; i<nodes.length; i++) {
          node = nodes[i];
          ctx.save();
          viz.fx.plotSubtree(node, controller, delta, animating);
          ctx.restore();
        }
      },

      getSiblings: function(nodes) {
        var siblings = {};
        $.each(nodes, function(n) {
            var par = n.getParents();
            if (par.length == 0) {
                siblings[n.id] = [n];
            } else {
                var ans = [];
                par[0].eachSubnode(function(sn) {
                    ans.push(sn);
                });
                siblings[n.id] = ans;
            }
        });
        return siblings;
    }
});

/*
   ST.Geom

   Performs low level geometrical computations.

   Access:

   This instance can be accessed with the _geom_ parameter of the st instance created.

   Example:

   (start code js)
    var st = new ST(canvas, config);
    st.geom.translate //or can also call any other <ST.Geom> method
   (end code)

*/

$jit.ST.Geom = new Class({
    Implements: Graph.Geom,
    /*
       Changes the tree current orientation to the one specified.

       You should usually use <ST.switchPosition> instead.
    */
    switchOrientation: function(orn) {
    	this.config.orientation = orn;
    },

    /*
       Makes a value dispatch according to the current layout
       Works like a CSS property, either _top-right-bottom-left_ or _top|bottom - left|right_.
     */
    dispatch: function() {
    	  // TODO(nico) should store Array.prototype.slice.call somewhere.
        var args = Array.prototype.slice.call(arguments);
        var s = args.shift(), len = args.length;
        var val = function(a) { return typeof a == 'function'? a() : a; };
        if(len == 2) {
            return (s == "top" || s == "bottom")? val(args[0]) : val(args[1]);
        } else if(len == 4) {
            switch(s) {
                case "top": return val(args[0]);
                case "right": return val(args[1]);
                case "bottom": return val(args[2]);
                case "left": return val(args[3]);
            }
        }
        return undefined;
    },

    /*
       Returns label height or with, depending on the tree current orientation.
    */
    getSize: function(n, invert) {
        var data = n.data, config = this.config;
        var siblingOffset = config.siblingOffset;
        var s = (config.multitree
        		&& ('$orn' in data)
        		&& data.$orn) || config.orientation;
        var w = n.getData('width') + siblingOffset;
        var h = n.getData('height') + siblingOffset;
        if(!invert)
            return this.dispatch(s, h, w);
        else
            return this.dispatch(s, w, h);
    },

    /*
       Calculates a subtree base size. This is an utility function used by _getBaseSize_
    */
    getTreeBaseSize: function(node, level, leaf) {
        var size = this.getSize(node, true), baseHeight = 0, that = this;
        if(leaf(level, node)) return size;
        if(level === 0) return 0;
        node.eachSubnode(function(elem) {
            baseHeight += that.getTreeBaseSize(elem, level -1, leaf);
        });
        return (size > baseHeight? size : baseHeight) + this.config.subtreeOffset;
    },


    /*
       getEdge

       Returns a Complex instance with the begin or end position of the edge to be plotted.

       Parameters:

       node - A <Graph.Node> that is connected to this edge.
       type - Returns the begin or end edge position. Possible values are 'begin' or 'end'.

       Returns:

       A <Complex> number specifying the begin or end position.
    */
    getEdge: function(node, type, s) {
    	var $C = function(a, b) {
          return function(){
            return node.pos.add(new Complex(a, b));
          };
        };
        var dim = this.node;
        var w = node.getData('width');
        var h = node.getData('height');

        if(type == 'begin') {
            if(dim.align == "center") {
                return this.dispatch(s, $C(0, h/2), $C(-w/2, 0),
                                     $C(0, -h/2),$C(w/2, 0));
            } else if(dim.align == "left") {
                return this.dispatch(s, $C(0, h), $C(0, 0),
                                     $C(0, 0), $C(w, 0));
            } else if(dim.align == "right") {
                return this.dispatch(s, $C(0, 0), $C(-w, 0),
                                     $C(0, -h),$C(0, 0));
            } else throw "align: not implemented";


        } else if(type == 'end') {
            if(dim.align == "center") {
                return this.dispatch(s, $C(0, -h/2), $C(w/2, 0),
                                     $C(0, h/2),  $C(-w/2, 0));
            } else if(dim.align == "left") {
                return this.dispatch(s, $C(0, 0), $C(w, 0),
                                     $C(0, h), $C(0, 0));
            } else if(dim.align == "right") {
                return this.dispatch(s, $C(0, -h),$C(0, 0),
                                     $C(0, 0), $C(-w, 0));
            } else throw "align: not implemented";
        }
    },

    /*
       Adjusts the tree position due to canvas scaling or translation.
    */
    getScaledTreePosition: function(node, scale) {
        var dim = this.node;
        var w = node.getData('width');
        var h = node.getData('height');
        var s = (this.config.multitree
        		&& ('$orn' in node.data)
        		&& node.data.$orn) || this.config.orientation;

        var $C = function(a, b) {
          return function(){
            return node.pos.add(new Complex(a, b)).$scale(1 - scale);
          };
        };
        if(dim.align == "left") {
            return this.dispatch(s, $C(0, h), $C(0, 0),
                                 $C(0, 0), $C(w, 0));
        } else if(dim.align == "center") {
            return this.dispatch(s, $C(0, h / 2), $C(-w / 2, 0),
                                 $C(0, -h / 2),$C(w / 2, 0));
        } else if(dim.align == "right") {
            return this.dispatch(s, $C(0, 0), $C(-w, 0),
                                 $C(0, -h),$C(0, 0));
        } else throw "align: not implemented";
    },

    /*
       treeFitsInCanvas

       Returns a Boolean if the current subtree fits in canvas.

       Parameters:

       node - A <Graph.Node> which is the current root of the subtree.
       canvas - The <Canvas> object.
       level - The depth of the subtree to be considered.
    */
    treeFitsInCanvas: function(node, canvas, level) {
        var csize = canvas.getSize();
        var s = (this.config.multitree
        		&& ('$orn' in node.data)
        		&& node.data.$orn) || this.config.orientation;

        var size = this.dispatch(s, csize.width, csize.height);
        var baseSize = this.getTreeBaseSize(node, level, function(level, node) {
          return level === 0 || !node.anySubnode();
        });
        return (baseSize < size);
    }
});

/*
  Class: ST.Plot

  Custom extension of <Graph.Plot>.

  Extends:

  All <Graph.Plot> methods

  See also:

  <Graph.Plot>

*/
$jit.ST.Plot = new Class({

    Implements: Graph.Plot,

    /*
       Plots a subtree from the spacetree.
    */
    plotSubtree: function(node, opt, scale, animating) {
        var viz = this.viz, canvas = viz.canvas, config = viz.config;
        scale = Math.min(Math.max(0.001, scale), 1);
        if(scale >= 0) {
            node.drawn = false;
            var ctx = canvas.getCtx();
            var diff = viz.geom.getScaledTreePosition(node, scale);
            ctx.translate(diff.x, diff.y);
            ctx.scale(scale, scale);
        }
        this.plotTree(node, $.merge(opt, {
          'withLabels': true,
          'hideLabels': !!scale,
          'plotSubtree': function(n, ch) {
            var root = config.multitree && !('$orn' in node.data);
            var orns = root && node.getData('orns');
            return !root || orns.indexOf(node.getData('orn')) > -1;
          }
        }), animating);
        if(scale >= 0) node.drawn = true;
    },

    /*
        Method: getAlignedPos

        Returns a *x, y* object with the position of the top/left corner of a <ST> node.

        Parameters:

        pos - (object) A <Graph.Node> position.
        width - (number) The width of the node.
        height - (number) The height of the node.

     */
    getAlignedPos: function(pos, width, height) {
        var nconfig = this.node;
        var square, orn;
        if(nconfig.align == "center") {
            square = {
                x: pos.x - width / 2,
                y: pos.y - height / 2
            };
        } else if (nconfig.align == "left") {
            orn = this.config.orientation;
            if(orn == "bottom" || orn == "top") {
                square = {
                    x: pos.x - width / 2,
                    y: pos.y
                };
            } else {
                square = {
                    x: pos.x,
                    y: pos.y - height / 2
                };
            }
        } else if(nconfig.align == "right") {
            orn = this.config.orientation;
            if(orn == "bottom" || orn == "top") {
                square = {
                    x: pos.x - width / 2,
                    y: pos.y - height
                };
            } else {
                square = {
                    x: pos.x - width,
                    y: pos.y - height / 2
                };
            }
        } else throw "align: not implemented";

        return square;
    },

    getOrientation: function(adj) {
    	var config = this.config;
    	var orn = config.orientation;

    	if(config.multitree) {
        	var nodeFrom = adj.nodeFrom;
        	var nodeTo = adj.nodeTo;
    		orn = (('$orn' in nodeFrom.data)
        		&& nodeFrom.data.$orn)
        		|| (('$orn' in nodeTo.data)
        		&& nodeTo.data.$orn);
    	}

    	return orn;
    }
});

/*
  Class: ST.Label

  Custom extension of <Graph.Label>.
  Contains custom <Graph.Label.SVG>, <Graph.Label.HTML> and <Graph.Label.Native> extensions.

  Extends:

  All <Graph.Label> methods and subclasses.

  See also:

  <Graph.Label>, <Graph.Label.Native>, <Graph.Label.HTML>, <Graph.Label.SVG>.
 */
$jit.ST.Label = {};

/*
   ST.Label.Native

   Custom extension of <Graph.Label.Native>.

   Extends:

   All <Graph.Label.Native> methods

   See also:

   <Graph.Label.Native>
*/
$jit.ST.Label.Native = new Class({
  Implements: Graph.Label.Native,

  renderLabel: function(canvas, node, controller) {
    var ctx = canvas.getCtx(),
        coord = node.pos.getc(true),
        width = node.getData('width'),
        height = node.getData('height'),
        pos = this.viz.fx.getAlignedPos(coord, width, height);
    ctx.fillText(node.name, pos.x + width / 2, pos.y + height / 2);
  }
});

$jit.ST.Label.DOM = new Class({
  Implements: Graph.Label.DOM,

  /*
      placeLabel

      Overrides abstract method placeLabel in <Graph.Plot>.

      Parameters:

      tag - A DOM label element.
      node - A <Graph.Node>.
      controller - A configuration/controller object passed to the visualization.

    */
    placeLabel: function(tag, node, controller) {
        var pos = node.pos.getc(true),
            config = this.viz.config,
            dim = config.Node,
            canvas = this.viz.canvas,
            w = node.getData('width'),
            h = node.getData('height'),
            radius = canvas.getSize(),
            labelPos, orn;

        var ox = canvas.translateOffsetX,
            oy = canvas.translateOffsetY,
            sx = canvas.scaleOffsetX,
            sy = canvas.scaleOffsetY,
            posx = pos.x * sx + ox,
            posy = pos.y * sy + oy;

        if(dim.align == "center") {
            labelPos= {
                x: Math.round(posx - w / 2 + radius.width/2),
                y: Math.round(posy - h / 2 + radius.height/2)
            };
        } else if (dim.align == "left") {
            orn = config.orientation;
            if(orn == "bottom" || orn == "top") {
                labelPos= {
                    x: Math.round(posx - w / 2 + radius.width/2),
                    y: Math.round(posy + radius.height/2)
                };
            } else {
                labelPos= {
                    x: Math.round(posx + radius.width/2),
                    y: Math.round(posy - h / 2 + radius.height/2)
                };
            }
        } else if(dim.align == "right") {
            orn = config.orientation;
            if(orn == "bottom" || orn == "top") {
                labelPos= {
                    x: Math.round(posx - w / 2 + radius.width/2),
                    y: Math.round(posy - h + radius.height/2)
                };
            } else {
                labelPos= {
                    x: Math.round(posx - w + radius.width/2),
                    y: Math.round(posy - h / 2 + radius.height/2)
                };
            }
        } else throw "align: not implemented";

		labelPos.w=w;
		labelPos.h=h;

        var style = tag.style;
        style.left = labelPos.x + 'px';
        style.top  = labelPos.y + 'px';
        style.display = this.fitsInCanvas(labelPos, canvas)? '' : 'none';
        controller.onPlaceLabel(tag, node);
    }
});

/*
  ST.Label.SVG

  Custom extension of <Graph.Label.SVG>.

  Extends:

  All <Graph.Label.SVG> methods

  See also:

  <Graph.Label.SVG>
*/
$jit.ST.Label.SVG = new Class({
  Implements: [$jit.ST.Label.DOM, Graph.Label.SVG],

  initialize: function(viz) {
    this.viz = viz;
  }
});

/*
   ST.Label.HTML

   Custom extension of <Graph.Label.HTML>.

   Extends:

   All <Graph.Label.HTML> methods.

   See also:

   <Graph.Label.HTML>

*/
$jit.ST.Label.HTML = new Class({
  Implements: [$jit.ST.Label.DOM, Graph.Label.HTML],

  initialize: function(viz) {
    this.viz = viz;
  }
});


/*
  Class: ST.Plot.NodeTypes

  This class contains a list of <Graph.Node> built-in types.
  Node types implemented are 'none', 'circle', 'rectangle', 'ellipse' and 'square'.

  You can add your custom node types, customizing your visualization to the extreme.

  Example:

  (start code js)
    ST.Plot.NodeTypes.implement({
      'mySpecialType': {
        'render': function(node, canvas) {
          //print your custom node to canvas
        },
        //optional
        'contains': function(node, pos) {
          //return true if pos is inside the node or false otherwise
        }
      }
    });
  (end code)

*/
$jit.ST.Plot.NodeTypes = new Class({
  'none': {
    'render': $.empty,
    'contains': $.lambda(false)
  },
  'circle': {
    'render': function(node, canvas) {
      var dim  = node.getData('dim'),
          pos = this.getAlignedPos(node.pos.getc(true), dim, dim),
          dim2 = dim/2;
      this.nodeHelper.circle.render('fill', {x:pos.x+dim2, y:pos.y+dim2}, dim2, canvas);
    },
    'contains': function(node, pos) {
      var dim  = node.getData('dim'),
          npos = this.getAlignedPos(node.pos.getc(true), dim, dim),
          dim2 = dim/2;
      return this.nodeHelper.circle.contains({x:npos.x+dim2, y:npos.y+dim2}, pos, dim2);
    }
  },
  'square': {
    'render': function(node, canvas) {
      var dim  = node.getData('dim'),
          dim2 = dim/2,
          pos = this.getAlignedPos(node.pos.getc(true), dim, dim);
      this.nodeHelper.square.render('fill', {x:pos.x+dim2, y:pos.y+dim2}, dim2, canvas);
    },
    'contains': function(node, pos) {
      var dim  = node.getData('dim'),
          npos = this.getAlignedPos(node.pos.getc(true), dim, dim),
          dim2 = dim/2;
      return this.nodeHelper.square.contains({x:npos.x+dim2, y:npos.y+dim2}, pos, dim2);
    }
  },
  'ellipse': {
    'render': function(node, canvas) {
      var width = node.getData('width'),
          height = node.getData('height'),
          pos = this.getAlignedPos(node.pos.getc(true), width, height);
      this.nodeHelper.ellipse.render('fill', {x:pos.x+width/2, y:pos.y+height/2}, width, height, canvas);
    },
    'contains': function(node, pos) {
      var width = node.getData('width'),
          height = node.getData('height'),
          npos = this.getAlignedPos(node.pos.getc(true), width, height);
      return this.nodeHelper.ellipse.contains({x:npos.x+width/2, y:npos.y+height/2}, pos, width, height);
    }
  },
  'rectangle': {
    'render': function(node, canvas) {
      var width = node.getData('width'),
          height = node.getData('height'),
          pos = this.getAlignedPos(node.pos.getc(true), width, height);
      this.nodeHelper.rectangle.render('fill', {x:pos.x+width/2, y:pos.y+height/2}, width, height, canvas);
    },
    'contains': function(node, pos) {
      var width = node.getData('width'),
          height = node.getData('height'),
          npos = this.getAlignedPos(node.pos.getc(true), width, height);
      return this.nodeHelper.rectangle.contains({x:npos.x+width/2, y:npos.y+height/2}, pos, width, height);
    }
  }
});

/*
  Class: ST.Plot.EdgeTypes

  This class contains a list of <Graph.Adjacence> built-in types.
  Edge types implemented are 'none', 'line', 'arrow', 'quadratic:begin', 'quadratic:end', 'bezier'.

  You can add your custom edge types, customizing your visualization to the extreme.

  Example:

  (start code js)
    ST.Plot.EdgeTypes.implement({
      'mySpecialType': {
        'render': function(adj, canvas) {
          //print your custom edge to canvas
        },
        //optional
        'contains': function(adj, pos) {
          //return true if pos is inside the arc or false otherwise
        }
      }
    });
  (end code)

*/
$jit.ST.Plot.EdgeTypes = new Class({
    'none': $.empty,
    'line': {
      'render': function(adj, canvas) {
        var orn = this.getOrientation(adj),
            nodeFrom = adj.nodeFrom,
            nodeTo = adj.nodeTo,
            rel = nodeFrom._depth < nodeTo._depth,
            from = this.viz.geom.getEdge(rel? nodeFrom:nodeTo, 'begin', orn),
            to =  this.viz.geom.getEdge(rel? nodeTo:nodeFrom, 'end', orn);
        this.edgeHelper.line.render(from, to, canvas);
      },
      'contains': function(adj, pos) {
        var orn = this.getOrientation(adj),
            nodeFrom = adj.nodeFrom,
            nodeTo = adj.nodeTo,
            rel = nodeFrom._depth < nodeTo._depth,
            from = this.viz.geom.getEdge(rel? nodeFrom:nodeTo, 'begin', orn),
            to =  this.viz.geom.getEdge(rel? nodeTo:nodeFrom, 'end', orn);
        return this.edgeHelper.line.contains(from, to, pos, this.edge.epsilon);
      }
    },
     'arrow': {
       'render': function(adj, canvas) {
         var orn = this.getOrientation(adj),
             node = adj.nodeFrom,
             child = adj.nodeTo,
             rel = (node._depth < child._depth),
             dim = adj.getData('dim'),
             from = this.viz.geom.getEdge((rel?node:child), 'begin', orn),
             to = this.viz.geom.getEdge((rel?child:node), 'end', orn),
             direction = adj.data.$direction,
             inv = (direction && direction.length>1 && direction[0] != node.id);
         this.edgeHelper.arrow.render(from, to, dim, inv, canvas);
       },
       'contains': function(adj, pos) {
         var orn = this.getOrientation(adj),
             nodeFrom = adj.nodeFrom,
             nodeTo = adj.nodeTo,
             rel = nodeFrom._depth < nodeTo._depth,
             from = this.viz.geom.getEdge(rel? nodeFrom:nodeTo, 'begin', orn),
             to =  this.viz.geom.getEdge(rel? nodeTo:nodeFrom, 'end', orn);
         return this.edgeHelper.arrow.contains(from, to, pos, this.edge.epsilon);
       }
     },
    'quadratic:begin': {
       'render': function(adj, canvas) {
          var orn = this.getOrientation(adj);
          var nodeFrom = adj.nodeFrom,
              nodeTo = adj.nodeTo,
              rel = nodeFrom._depth < nodeTo._depth,
              begin = this.viz.geom.getEdge(rel? nodeFrom:nodeTo, 'begin', orn),
              end =  this.viz.geom.getEdge(rel? nodeTo:nodeFrom, 'end', orn),
              dim = adj.getData('dim'),
              ctx = canvas.getCtx();
          ctx.beginPath();
          ctx.moveTo(begin.x, begin.y);
          switch(orn) {
            case "left":
              ctx.quadraticCurveTo(begin.x + dim, begin.y, end.x, end.y);
              break;
            case "right":
              ctx.quadraticCurveTo(begin.x - dim, begin.y, end.x, end.y);
              break;
            case "top":
              ctx.quadraticCurveTo(begin.x, begin.y + dim, end.x, end.y);
              break;
            case "bottom":
              ctx.quadraticCurveTo(begin.x, begin.y - dim, end.x, end.y);
              break;
          }
          ctx.stroke();
        }
     },
    'quadratic:end': {
       'render': function(adj, canvas) {
          var orn = this.getOrientation(adj);
          var nodeFrom = adj.nodeFrom,
              nodeTo = adj.nodeTo,
              rel = nodeFrom._depth < nodeTo._depth,
              begin = this.viz.geom.getEdge(rel? nodeFrom:nodeTo, 'begin', orn),
              end =  this.viz.geom.getEdge(rel? nodeTo:nodeFrom, 'end', orn),
              dim = adj.getData('dim'),
              ctx = canvas.getCtx();
          ctx.beginPath();
          ctx.moveTo(begin.x, begin.y);
          switch(orn) {
            case "left":
              ctx.quadraticCurveTo(end.x - dim, end.y, end.x, end.y);
              break;
            case "right":
              ctx.quadraticCurveTo(end.x + dim, end.y, end.x, end.y);
              break;
            case "top":
              ctx.quadraticCurveTo(end.x, end.y - dim, end.x, end.y);
              break;
            case "bottom":
              ctx.quadraticCurveTo(end.x, end.y + dim, end.x, end.y);
              break;
          }
          ctx.stroke();
       }
     },
    'bezier': {
       'render': function(adj, canvas) {
         var orn = this.getOrientation(adj),
             nodeFrom = adj.nodeFrom,
             nodeTo = adj.nodeTo,
             rel = nodeFrom._depth < nodeTo._depth,
             begin = this.viz.geom.getEdge(rel? nodeFrom:nodeTo, 'begin', orn),
             end =  this.viz.geom.getEdge(rel? nodeTo:nodeFrom, 'end', orn),
             dim = adj.getData('dim'),
             ctx = canvas.getCtx();
         ctx.beginPath();
         ctx.moveTo(begin.x, begin.y);
         switch(orn) {
           case "left":
             ctx.bezierCurveTo(begin.x + dim, begin.y, end.x - dim, end.y, end.x, end.y);
             break;
           case "right":
             ctx.bezierCurveTo(begin.x - dim, begin.y, end.x + dim, end.y, end.x, end.y);
             break;
           case "top":
             ctx.bezierCurveTo(begin.x, begin.y + dim, end.x, end.y - dim, end.x, end.y);
             break;
           case "bottom":
             ctx.bezierCurveTo(begin.x, begin.y - dim, end.x, end.y + dim, end.x, end.y);
             break;
         }
         ctx.stroke();
       }
    }
});



/*
 * File: AreaChart.js
 *
*/

$jit.ST.Plot.NodeTypes.implement({
  'areachart-stacked' : {
    'render' : function(node, canvas) {
      var pos = node.pos.getc(true), 
          width = node.getData('width'),
          height = node.getData('height'),
          algnPos = this.getAlignedPos(pos, width, height),
          x = algnPos.x, y = algnPos.y,
          stringArray = node.getData('stringArray'),
          dimArray = node.getData('dimArray'),
          valArray = node.getData('valueArray'),
          valLeft = $.reduce(valArray, function(x, y) { return x + y[0]; }, 0),
          valRight = $.reduce(valArray, function(x, y) { return x + y[1]; }, 0),
          colorArray = node.getData('colorArray'),
          colorLength = colorArray.length,
          config = node.getData('config'),
          gradient = node.getData('gradient'),
          showLabels = config.showLabels,
          aggregates = config.showAggregates,
          label = config.Label,
          prev = node.getData('prev');

      var ctx = canvas.getCtx(), border = node.getData('border');
      if (colorArray && dimArray && stringArray) {
        for (var i=0, l=dimArray.length, acumLeft=0, acumRight=0, valAcum=0; i<l; i++) {
          ctx.fillStyle = ctx.strokeStyle = colorArray[i % colorLength];
          ctx.save();
          if(gradient && (dimArray[i][0] > 0 || dimArray[i][1] > 0)) {
            var h1 = acumLeft + dimArray[i][0],
                h2 = acumRight + dimArray[i][1],
                alpha = Math.atan((h2 - h1) / width),
                delta = 55;
            var linear = ctx.createLinearGradient(x + width/2, 
                y - (h1 + h2)/2,
                x + width/2 + delta * Math.sin(alpha),
                y - (h1 + h2)/2 + delta * Math.cos(alpha));
            var color = $.rgbToHex($.map($.hexToRgb(colorArray[i % colorLength].slice(1)), 
                function(v) { return (v * 0.85) >> 0; }));
            linear.addColorStop(0, colorArray[i % colorLength]);
            linear.addColorStop(1, color);
            ctx.fillStyle = linear;
          }
          ctx.beginPath();
          ctx.moveTo(x, y - acumLeft);
          ctx.lineTo(x + width, y - acumRight);
          ctx.lineTo(x + width, y - acumRight - dimArray[i][1]);
          ctx.lineTo(x, y - acumLeft - dimArray[i][0]);
          ctx.lineTo(x, y - acumLeft);
          ctx.fill();
          ctx.restore();
          if(border) {
            var strong = border.name == stringArray[i];
            var perc = strong? 0.7 : 0.8;
            var color = $.rgbToHex($.map($.hexToRgb(colorArray[i % colorLength].slice(1)), 
                function(v) { return (v * perc) >> 0; }));
            ctx.strokeStyle = color;
            ctx.lineWidth = strong? 4 : 1;
            ctx.save();
            ctx.beginPath();
            if(border.index === 0) {
              ctx.moveTo(x, y - acumLeft);
              ctx.lineTo(x, y - acumLeft - dimArray[i][0]);
            } else {
              ctx.moveTo(x + width, y - acumRight);
              ctx.lineTo(x + width, y - acumRight - dimArray[i][1]);
            }
            ctx.stroke();
            ctx.restore();
          }
          acumLeft += (dimArray[i][0] || 0);
          acumRight += (dimArray[i][1] || 0);
          
          if(dimArray[i][0] > 0)
            valAcum += (valArray[i][0] || 0);
        }
        if(prev && label.type == 'Native') {
          ctx.save();
          ctx.beginPath();
          ctx.fillStyle = ctx.strokeStyle = label.color;
          ctx.font = label.style + ' ' + label.size + 'px ' + label.family;
          ctx.textAlign = 'center';
          ctx.textBaseline = 'middle';
          var aggValue = aggregates(node.name, valLeft, valRight, node, valAcum);
          if(aggValue !== false) {
            ctx.fillText(aggValue !== true? aggValue : valAcum, x, y - acumLeft - config.labelOffset - label.size/2, width);
          }
          var labValue = showLabels(node.name, valLeft, valRight, node)
          if(labValue !== false) {
            ctx.fillText(labValue !== true? labValue : node.name, x, y + label.size/2 + config.labelOffset);
          }
          ctx.restore();
        }
      }
    },
    'contains': function(node, mpos) {
      var pos = node.pos.getc(true), 
          width = node.getData('width'),
          height = node.getData('height'),
          algnPos = this.getAlignedPos(pos, width, height),
          x = algnPos.x, y = algnPos.y,
          dimArray = node.getData('dimArray'),
          rx = mpos.x - x;
      //bounding box check
      if(mpos.x < x || mpos.x > x + width
        || mpos.y > y || mpos.y < y - height) {
        return false;
      }
      //deep check
      for(var i=0, l=dimArray.length, lAcum=y, rAcum=y; i<l; i++) {
        var dimi = dimArray[i];
        lAcum -= dimi[0];
        rAcum -= dimi[1];
        var intersec = lAcum + (rAcum - lAcum) * rx / width;
        if(mpos.y >= intersec) {
          var index = +(rx > width/2);
          return {
            'name': node.getData('stringArray')[i],
            'color': node.getData('colorArray')[i],
            'value': node.getData('valueArray')[i][index],
            'index': index
          };
        }
      }
      return false;
    }
  }
});

/*
  Class: AreaChart
  
  A visualization that displays stacked area charts.
  
  Constructor Options:
  
  See <Options.AreaChart>.

*/
$jit.AreaChart = new Class({
  st: null,
  colors: ["#416D9C", "#70A35E", "#EBB056", "#C74243", "#83548B", "#909291", "#557EAA"],
  selected: {},
  busy: false,
  
  initialize: function(opt) {
    this.controller = this.config = 
      $.merge(Options("Canvas", "Margin", "Label", "AreaChart"), {
        Label: { type: 'Native' }
      }, opt);
    //set functions for showLabels and showAggregates
    var showLabels = this.config.showLabels,
        typeLabels = $.type(showLabels),
        showAggregates = this.config.showAggregates,
        typeAggregates = $.type(showAggregates);
    this.config.showLabels = typeLabels == 'function'? showLabels : $.lambda(showLabels);
    this.config.showAggregates = typeAggregates == 'function'? showAggregates : $.lambda(showAggregates);
    
    this.initializeViz();
  },
  
  initializeViz: function() {
    var config = this.config,
        that = this,
        nodeType = config.type.split(":")[0],
        nodeLabels = {};

    var delegate = new $jit.ST({
      injectInto: config.injectInto,
      width: config.width,
      height: config.height,
      orientation: "bottom",
      levelDistance: 0,
      siblingOffset: 0,
      subtreeOffset: 0,
      withLabels: config.Label.type != 'Native',
      useCanvas: config.useCanvas,
      Label: {
        type: config.Label.type
      },
      Node: {
        overridable: true,
        type: 'areachart-' + nodeType,
        align: 'left',
        width: 1,
        height: 1
      },
      Edge: {
        type: 'none'
      },
      Tips: {
        enable: config.Tips.enable,
        type: 'Native',
        force: true,
        onShow: function(tip, node, contains) {
          var elem = contains;
          config.Tips.onShow(tip, elem, node);
        }
      },
      Events: {
        enable: true,
        type: 'Native',
        onClick: function(node, eventInfo, evt) {
          if(!config.filterOnClick && !config.Events.enable) return;
          var elem = eventInfo.getContains();
          if(elem) config.filterOnClick && that.filter(elem.name);
          config.Events.enable && config.Events.onClick(elem, eventInfo, evt);
        },
        onRightClick: function(node, eventInfo, evt) {
          if(!config.restoreOnRightClick) return;
          that.restore();
        },
        onMouseMove: function(node, eventInfo, evt) {
          if(!config.selectOnHover) return;
          if(node) {
            var elem = eventInfo.getContains();
            that.select(node.id, elem.name, elem.index);
          } else {
            that.select(false, false, false);
          }
        }
      },
      onCreateLabel: function(domElement, node) {
        var labelConf = config.Label,
            valueArray = node.getData('valueArray'),
            acumLeft = $.reduce(valueArray, function(x, y) { return x + y[0]; }, 0),
            acumRight = $.reduce(valueArray, function(x, y) { return x + y[1]; }, 0);
        if(node.getData('prev')) {
          var nlbs = {
            wrapper: document.createElement('div'),
            aggregate: document.createElement('div'),
            label: document.createElement('div')
          };
          var wrapper = nlbs.wrapper,
              label = nlbs.label,
              aggregate = nlbs.aggregate,
              wrapperStyle = wrapper.style,
              labelStyle = label.style,
              aggregateStyle = aggregate.style;
          //store node labels
          nodeLabels[node.id] = nlbs;
          //append labels
          wrapper.appendChild(label);
          wrapper.appendChild(aggregate);
          if(!config.showLabels(node.name, acumLeft, acumRight, node)) {
            label.style.display = 'none';
          }
          if(!config.showAggregates(node.name, acumLeft, acumRight, node)) {
            aggregate.style.display = 'none';
          }
          wrapperStyle.position = 'relative';
          wrapperStyle.overflow = 'visible';
          wrapperStyle.fontSize = labelConf.size + 'px';
          wrapperStyle.fontFamily = labelConf.family;
          wrapperStyle.color = labelConf.color;
          wrapperStyle.textAlign = 'center';
          aggregateStyle.position = labelStyle.position = 'absolute';
          
          domElement.style.width = node.getData('width') + 'px';
          domElement.style.height = node.getData('height') + 'px';
          label.innerHTML = node.name;
          
          domElement.appendChild(wrapper);
        }
      },
      onPlaceLabel: function(domElement, node) {
        if(!node.getData('prev')) return;
        var labels = nodeLabels[node.id],
            wrapperStyle = labels.wrapper.style,
            labelStyle = labels.label.style,
            aggregateStyle = labels.aggregate.style,
            width = node.getData('width'),
            height = node.getData('height'),
            dimArray = node.getData('dimArray'),
            valArray = node.getData('valueArray'),
            acumLeft = $.reduce(valArray, function(x, y) { return x + y[0]; }, 0),
            acumRight = $.reduce(valArray, function(x, y) { return x + y[1]; }, 0),
            font = parseInt(wrapperStyle.fontSize, 10),
            domStyle = domElement.style;
        
        if(dimArray && valArray) {
          if(config.showLabels(node.name, acumLeft, acumRight, node)) {
            labelStyle.display = '';
          } else {
            labelStyle.display = 'none';
          }
          var aggValue = config.showAggregates(node.name, acumLeft, acumRight, node);
          if(aggValue !== false) {
            aggregateStyle.display = '';
          } else {
            aggregateStyle.display = 'none';
          }
          wrapperStyle.width = aggregateStyle.width = labelStyle.width = domElement.style.width = width + 'px';
          aggregateStyle.left = labelStyle.left = -width/2 + 'px';
          for(var i=0, l=valArray.length, acum=0, leftAcum=0; i<l; i++) {
            if(dimArray[i][0] > 0) {
              acum+= valArray[i][0];
              leftAcum+= dimArray[i][0];
            }
          }
          aggregateStyle.top = (-font - config.labelOffset) + 'px';
          labelStyle.top = (config.labelOffset + leftAcum) + 'px';
          domElement.style.top = parseInt(domElement.style.top, 10) - leftAcum + 'px';
          domElement.style.height = wrapperStyle.height = leftAcum + 'px';
          labels.aggregate.innerHTML = aggValue !== true? aggValue : acum;
        }
      }
    });
    
    var size = delegate.canvas.getSize(),
        margin = config.Margin;
    delegate.config.offsetY = -size.height/2 + margin.bottom 
      + (config.showLabels && (config.labelOffset + config.Label.size));
    delegate.config.offsetX = (margin.right - margin.left)/2;
    this.delegate = delegate;
    this.canvas = this.delegate.canvas;
  },
  
 /*
  Method: loadJSON
 
  Loads JSON data into the visualization. 
  
  Parameters:
  
  json - The JSON data format. This format is described in <http://blog.thejit.org/2010/04/24/new-javascript-infovis-toolkit-visualizations/#json-data-format>.
  
  Example:
  (start code js)
  var areaChart = new $jit.AreaChart(options);
  areaChart.loadJSON(json);
  (end code)
 */  
  loadJSON: function(json) {
    var prefix = $.time(), 
        ch = [], 
        delegate = this.delegate,
        name = $.splat(json.label), 
        color = $.splat(json.color || this.colors),
        config = this.config,
        gradient = !!config.type.split(":")[1],
        animate = config.animate;
    
    for(var i=0, values=json.values, l=values.length; i<l-1; i++) {
      var val = values[i], prev = values[i-1], next = values[i+1];
      var valLeft = $.splat(values[i].values), valRight = $.splat(values[i+1].values);
      var valArray = $.zip(valLeft, valRight);
      var acumLeft = 0, acumRight = 0;
      ch.push({
        'id': prefix + val.label,
        'name': val.label,
        'data': {
          'value': valArray,
          '$valueArray': valArray,
          '$colorArray': color,
          '$stringArray': name,
          '$next': next.label,
          '$prev': prev? prev.label:false,
          '$config': config,
          '$gradient': gradient
        },
        'children': []
      });
    }
    var root = {
      'id': prefix + '$root',
      'name': '',
      'data': {
        '$type': 'none',
        '$width': 1,
        '$height': 1
      },
      'children': ch
    };
    delegate.loadJSON(root);
    
    this.normalizeDims();
    delegate.compute();
    delegate.select(delegate.root);
    if(animate) {
      delegate.fx.animate({
        modes: ['node-property:height:dimArray'],
        duration:1500
      });
    }
  },
  
 /*
  Method: updateJSON
 
  Use this method when updating values for the current JSON data. If the items specified by the JSON data already exist in the graph then their values will be updated.
  
  Parameters:
  
  json - (object) JSON data to be updated. The JSON format corresponds to the one described in <AreaChart.loadJSON>.
  onComplete - (object) A callback object to be called when the animation transition when updating the data end.
  
  Example:
  
  (start code js)
  areaChart.updateJSON(json, {
    onComplete: function() {
      alert('update complete!');
    }
  });
  (end code)
 */  
  updateJSON: function(json, onComplete) {
    if(this.busy) return;
    this.busy = true;
    
    var delegate = this.delegate,
        graph = delegate.graph,
        labels = json.label && $.splat(json.label),
        values = json.values,
        animate = this.config.animate,
        that = this,
        hashValues = {};

    //convert the whole thing into a hash
    for (var i = 0, l = values.length; i < l; i++) {
      hashValues[values[i].label] = values[i];
    }
  
    graph.eachNode(function(n) {
      var v = hashValues[n.name],
          stringArray = n.getData('stringArray'),
          valArray = n.getData('valueArray'),
          next = n.getData('next');
      
      if (v) {
        v.values = $.splat(v.values);
        $.each(valArray, function(a, i) {
          a[0] = v.values[i];
          if(labels) stringArray[i] = labels[i];
        });
        n.setData('valueArray', valArray);
      }
     
      if(next) {
        v = hashValues[next];
        if(v) {
          $.each(valArray, function(a, i) {
            a[1] = v.values[i];
          });
        }
      }
    });
    this.normalizeDims();
    delegate.compute();
    delegate.select(delegate.root);
    if(animate) {
      delegate.fx.animate({
        modes: ['node-property:height:dimArray'],
        duration:1500,
        onComplete: function() {
          that.busy = false;
          onComplete && onComplete.onComplete();
        }
      });
    }
  },
  
/*
  Method: filter
 
  Filter selected stacks, collapsing all other stacks. You can filter multiple stacks at the same time.
  
  Parameters:
  
  filters - (array) An array of strings with the name of the stacks to be filtered.
  callback - (object) An object with an *onComplete* callback method. 
  
  Example:
  
  (start code js)
  areaChart.filter(['label A', 'label C'], {
      onComplete: function() {
          console.log('done!');
      }
  });
  (end code)
  
  See also:
  
  <AreaChart.restore>.
 */  
  filter: function(filters, callback) {
    if(this.busy) return;
    this.busy = true;
    if(this.config.Tips.enable) this.delegate.tips.hide();
    this.select(false, false, false);
    var args = $.splat(filters);
    var rt = this.delegate.graph.getNode(this.delegate.root);
    var that = this;
    this.normalizeDims();
    rt.eachAdjacency(function(adj) {
      var n = adj.nodeTo, 
          dimArray = n.getData('dimArray', 'end'),
          stringArray = n.getData('stringArray');
      n.setData('dimArray', $.map(dimArray, function(d, i) {
        return ($.indexOf(args, stringArray[i]) > -1)? d:[0, 0];
      }), 'end');
    });
    this.delegate.fx.animate({
      modes: ['node-property:dimArray'],
      duration:1500,
      onComplete: function() {
        that.busy = false;
        callback && callback.onComplete();
      }
    });
  },
  
  /*
  Method: restore
 
  Sets all stacks that could have been filtered visible.
  
  Example:
  
  (start code js)
  areaChart.restore();
  (end code)
  
  See also:
  
  <AreaChart.filter>.
 */  
  restore: function(callback) {
    if(this.busy) return;
    this.busy = true;
    if(this.config.Tips.enable) this.delegate.tips.hide();
    this.select(false, false, false);
    this.normalizeDims();
    var that = this;
    this.delegate.fx.animate({
      modes: ['node-property:height:dimArray'],
      duration:1500,
      onComplete: function() {
        that.busy = false;
        callback && callback.onComplete();
      }
    });
  },
  //adds the little brown bar when hovering the node
  select: function(id, name, index) {
    if(!this.config.selectOnHover) return;
    var s = this.selected;
    if(s.id != id || s.name != name 
        || s.index != index) {
      s.id = id;
      s.name = name;
      s.index = index;
      this.delegate.graph.eachNode(function(n) {
        n.setData('border', false);
      });
      if(id) {
        var n = this.delegate.graph.getNode(id);
        n.setData('border', s);
        var link = index === 0? 'prev':'next';
        link = n.getData(link);
        if(link) {
          n = this.delegate.graph.getByName(link);
          if(n) {
            n.setData('border', {
              name: name,
              index: 1-index
            });
          }
        }
      }
      this.delegate.plot();
    }
  },
  
  /*
    Method: getLegend
   
    Returns an object containing as keys the legend names and as values hex strings with color values.
    
    Example:
    
    (start code js)
    var legend = areaChart.getLegend();
    (end code)
 */  
  getLegend: function() {
    var legend = {};
    var n;
    this.delegate.graph.getNode(this.delegate.root).eachAdjacency(function(adj) {
      n = adj.nodeTo;
    });
    var colors = n.getData('colorArray'),
        len = colors.length;
    $.each(n.getData('stringArray'), function(s, i) {
      legend[s] = colors[i % len];
    });
    return legend;
  },
  
  /*
    Method: getMaxValue
   
    Returns the maximum accumulated value for the stacks. This method is used for normalizing the graph heights according to the canvas height.
    
    Example:
    
    (start code js)
    var ans = areaChart.getMaxValue();
    (end code)
    
    In some cases it could be useful to override this method to normalize heights for a group of AreaCharts, like when doing small multiples.
    
    Example:
    
    (start code js)
    //will return 100 for all AreaChart instances,
    //displaying all of them with the same scale
    $jit.AreaChart.implement({
      'getMaxValue': function() {
        return 100;
      }
    });
    (end code)
    
*/  
  getMaxValue: function() {
    var maxValue = 0;
    this.delegate.graph.eachNode(function(n) {
      var valArray = n.getData('valueArray'),
          acumLeft = 0, acumRight = 0;
      $.each(valArray, function(v) { 
        acumLeft += +v[0];
        acumRight += +v[1];
      });
      var acum = acumRight>acumLeft? acumRight:acumLeft;
      maxValue = maxValue>acum? maxValue:acum;
    });
    return maxValue;
  },
  
  normalizeDims: function() {
    //number of elements
    var root = this.delegate.graph.getNode(this.delegate.root), l=0;
    root.eachAdjacency(function() {
      l++;
    });
    var maxValue = this.getMaxValue() || 1,
        size = this.delegate.canvas.getSize(),
        config = this.config,
        margin = config.Margin,
        labelOffset = config.labelOffset + config.Label.size,
        fixedDim = (size.width - (margin.left + margin.right)) / l,
        animate = config.animate,
        height = size.height - (margin.top + margin.bottom) - (config.showAggregates && labelOffset) 
          - (config.showLabels && labelOffset);
    this.delegate.graph.eachNode(function(n) {
      var acumLeft = 0, acumRight = 0, animateValue = [];
      $.each(n.getData('valueArray'), function(v) {
        acumLeft += +v[0];
        acumRight += +v[1];
        animateValue.push([0, 0]);
      });
      var acum = acumRight>acumLeft? acumRight:acumLeft;
      n.setData('width', fixedDim);
      if(animate) {
        n.setData('height', acum * height / maxValue, 'end');
        n.setData('dimArray', $.map(n.getData('valueArray'), function(n) { 
          return [n[0] * height / maxValue, n[1] * height / maxValue]; 
        }), 'end');
        var dimArray = n.getData('dimArray');
        if(!dimArray) {
          n.setData('dimArray', animateValue);
        }
      } else {
        n.setData('height', acum * height / maxValue);
        n.setData('dimArray', $.map(n.getData('valueArray'), function(n) { 
          return [n[0] * height / maxValue, n[1] * height / maxValue]; 
        }));
      }
    });
  }
});


/*
 * File: Options.BarChart.js
 *
*/

/*
  Object: Options.BarChart
  
  <BarChart> options. 
  Other options included in the BarChart are <Options.Canvas>, <Options.Label>, <Options.Margin>, <Options.Tips> and <Options.Events>.
  
  Syntax:
  
  (start code js)

  Options.BarChart = {
    animate: true,
    labelOffset: 3,
    barsOffset: 0,
    type: 'stacked',
    hoveredColor: '#9fd4ff',
    orientation: 'horizontal',
    showAggregates: true,
    showLabels: true
  };
  
  (end code)
  
  Example:
  
  (start code js)

  var barChart = new $jit.BarChart({
    animate: true,
    barsOffset: 10,
    type: 'stacked:gradient'
  });
  
  (end code)

  Parameters:
  
  animate - (boolean) Default's *true*. Whether to add animated transitions when filtering/restoring stacks.
  offset - (number) Default's *25*. Adds margin between the visualization and the canvas.
  labelOffset - (number) Default's *3*. Adds margin between the label and the default place where it should be drawn.
  barsOffset - (number) Default's *0*. Separation between bars.
  type - (string) Default's *'stacked'*. Stack or grouped styles. Posible values are 'stacked', 'grouped', 'stacked:gradient', 'grouped:gradient' to add gradients.
  hoveredColor - (boolean|string) Default's *'#9fd4ff'*. Sets the selected color for a hovered bar stack.
  orientation - (string) Default's 'horizontal'. Sets the direction of the bars. Possible options are 'vertical' or 'horizontal'.
  showAggregates - (boolean, function) Default's *true*. Display the sum the values of each bar. Can also be a function that returns *true* or *false* to display the value of the bar or not. That same function can also return a string with the formatted data to be added.
  showLabels - (boolean, function) Default's *true*. Display the name of the slots. Can also be a function that returns *true* or *false* for each bar to decide whether to show the label or not.
  
*/

Options.BarChart = {
  $extend: true,
  
  animate: true,
  type: 'stacked', //stacked, grouped, : gradient
  labelOffset: 3, //label offset
  barsOffset: 0, //distance between bars
  hoveredColor: '#9fd4ff',
  orientation: 'horizontal',
  showAggregates: true,
  showLabels: true,
  Tips: {
    enable: false,
    onShow: $.empty,
    onHide: $.empty
  },
  Events: {
    enable: false,
    onClick: $.empty
  }
};

/*
 * File: BarChart.js
 *
*/

$jit.ST.Plot.NodeTypes.implement({
  'barchart-stacked' : {
    'render' : function(node, canvas) {
      var pos = node.pos.getc(true), 
          width = node.getData('width'),
          height = node.getData('height'),
          algnPos = this.getAlignedPos(pos, width, height),
          x = algnPos.x, y = algnPos.y,
          dimArray = node.getData('dimArray'),
          valueArray = node.getData('valueArray'),
          colorArray = node.getData('colorArray'),
          colorLength = colorArray.length,
          stringArray = node.getData('stringArray');

      var ctx = canvas.getCtx(),
          opt = {},
          border = node.getData('border'),
          gradient = node.getData('gradient'),
          config = node.getData('config'),
          horz = config.orientation == 'horizontal',
          aggregates = config.showAggregates,
          showLabels = config.showLabels,
          label = config.Label;
      
      if (colorArray && dimArray && stringArray) {
        for (var i=0, l=dimArray.length, acum=0, valAcum=0; i<l; i++) {
          ctx.fillStyle = ctx.strokeStyle = colorArray[i % colorLength];
          if(gradient) {
            var linear;
            if(horz) {
              linear = ctx.createLinearGradient(x + acum + dimArray[i]/2, y, 
                  x + acum + dimArray[i]/2, y + height);
            } else {
              linear = ctx.createLinearGradient(x, y - acum - dimArray[i]/2, 
                  x + width, y - acum- dimArray[i]/2);
            }
            var color = $.rgbToHex($.map($.hexToRgb(colorArray[i % colorLength].slice(1)), 
                function(v) { return (v * 0.5) >> 0; }));
            linear.addColorStop(0, color);
            linear.addColorStop(0.5, colorArray[i % colorLength]);
            linear.addColorStop(1, color);
            ctx.fillStyle = linear;
          }
          if(horz) {
            ctx.fillRect(x + acum, y, dimArray[i], height);
          } else {
            ctx.fillRect(x, y - acum - dimArray[i], width, dimArray[i]);
          }
          if(border && border.name == stringArray[i]) {
            opt.acum = acum;
            opt.dimValue = dimArray[i];
          }
          acum += (dimArray[i] || 0);
          valAcum += (valueArray[i] || 0);
        }
        if(border) {
          ctx.save();
          ctx.lineWidth = 2;
          ctx.strokeStyle = border.color;
          if(horz) {
            ctx.strokeRect(x + opt.acum + 1, y + 1, opt.dimValue -2, height - 2);
          } else {
            ctx.strokeRect(x + 1, y - opt.acum - opt.dimValue + 1, width -2, opt.dimValue -2);
          }
          ctx.restore();
        }
        if(label.type == 'Native') {
          ctx.save();
          ctx.fillStyle = ctx.strokeStyle = label.color;
          ctx.font = label.style + ' ' + label.size + 'px ' + label.family;
          ctx.textBaseline = 'middle';
          var aggValue = aggregates(node.name, valAcum, node);
          if(aggValue !== false) {
            aggValue = aggValue !== true? aggValue : valAcum;
            if(horz) {
              ctx.textAlign = 'right';
              ctx.fillText(aggValue, x + acum - config.labelOffset, y + height/2);
            } else {
              ctx.textAlign = 'center';
              ctx.fillText(aggValue, x + width/2, y - height - label.size/2 - config.labelOffset);
            }
          }
          if(showLabels(node.name, valAcum, node)) {
            if(horz) {
              ctx.textAlign = 'center';
              ctx.translate(x - config.labelOffset - label.size/2, y + height/2);
              ctx.rotate(Math.PI / 2);
              ctx.fillText(node.name, 0, 0);
            } else {
              ctx.textAlign = 'center';
              ctx.fillText(node.name, x + width/2, y + label.size/2 + config.labelOffset);
            }
          }
          ctx.restore();
        }
      }
    },
    'contains': function(node, mpos) {
      var pos = node.pos.getc(true), 
          width = node.getData('width'),
          height = node.getData('height'),
          algnPos = this.getAlignedPos(pos, width, height),
          x = algnPos.x, y = algnPos.y,
          dimArray = node.getData('dimArray'),
          config = node.getData('config'),
          rx = mpos.x - x,
          horz = config.orientation == 'horizontal';
      //bounding box check
      if(horz) {
        if(mpos.x < x || mpos.x > x + width
            || mpos.y > y + height || mpos.y < y) {
            return false;
          }
      } else {
        if(mpos.x < x || mpos.x > x + width
            || mpos.y > y || mpos.y < y - height) {
            return false;
          }
      }
      //deep check
      for(var i=0, l=dimArray.length, acum=(horz? x:y); i<l; i++) {
        var dimi = dimArray[i];
        if(horz) {
          acum += dimi;
          var intersec = acum;
          if(mpos.x <= intersec) {
            return {
              'name': node.getData('stringArray')[i],
              'color': node.getData('colorArray')[i],
              'value': node.getData('valueArray')[i],
              'label': node.name
            };
          }
        } else {
          acum -= dimi;
          var intersec = acum;
          if(mpos.y >= intersec) {
            return {
              'name': node.getData('stringArray')[i],
              'color': node.getData('colorArray')[i],
              'value': node.getData('valueArray')[i],
              'label': node.name
            };
          }
        }
      }
      return false;
    }
  },
  'barchart-grouped' : {
    'render' : function(node, canvas) {
      var pos = node.pos.getc(true), 
          width = node.getData('width'),
          height = node.getData('height'),
          algnPos = this.getAlignedPos(pos, width, height),
          x = algnPos.x, y = algnPos.y,
          dimArray = node.getData('dimArray'),
          valueArray = node.getData('valueArray'),
          valueLength = valueArray.length,
          colorArray = node.getData('colorArray'),
          colorLength = colorArray.length,
          stringArray = node.getData('stringArray'); 

      var ctx = canvas.getCtx(),
          opt = {},
          border = node.getData('border'),
          gradient = node.getData('gradient'),
          config = node.getData('config'),
          horz = config.orientation == 'horizontal',
          aggregates = config.showAggregates,
          showLabels = config.showLabels,
          label = config.Label,
          fixedDim = (horz? height : width) / valueLength;
      
      if (colorArray && dimArray && stringArray) {
        for (var i=0, l=valueLength, acum=0, valAcum=0; i<l; i++) {
          ctx.fillStyle = ctx.strokeStyle = colorArray[i % colorLength];
          if(gradient) {
            var linear;
            if(horz) {
              linear = ctx.createLinearGradient(x + dimArray[i]/2, y + fixedDim * i, 
                  x + dimArray[i]/2, y + fixedDim * (i + 1));
            } else {
              linear = ctx.createLinearGradient(x + fixedDim * i, y - dimArray[i]/2, 
                  x + fixedDim * (i + 1), y - dimArray[i]/2);
            }
            var color = $.rgbToHex($.map($.hexToRgb(colorArray[i % colorLength].slice(1)), 
                function(v) { return (v * 0.5) >> 0; }));
            linear.addColorStop(0, color);
            linear.addColorStop(0.5, colorArray[i % colorLength]);
            linear.addColorStop(1, color);
            ctx.fillStyle = linear;
          }
          if(horz) {
            ctx.fillRect(x, y + fixedDim * i, dimArray[i], fixedDim);
          } else {
            ctx.fillRect(x + fixedDim * i, y - dimArray[i], fixedDim, dimArray[i]);
          }
          if(border && border.name == stringArray[i]) {
            opt.acum = fixedDim * i;
            opt.dimValue = dimArray[i];
          }
          acum += (dimArray[i] || 0);
          valAcum += (valueArray[i] || 0);
        }
        if(border) {
          ctx.save();
          ctx.lineWidth = 2;
          ctx.strokeStyle = border.color;
          if(horz) {
            ctx.strokeRect(x + 1, y + opt.acum + 1, opt.dimValue -2, fixedDim - 2);
          } else {
            ctx.strokeRect(x + opt.acum + 1, y - opt.dimValue + 1, fixedDim -2, opt.dimValue -2);
          }
          ctx.restore();
        }
        if(label.type == 'Native') {
          ctx.save();
          ctx.fillStyle = ctx.strokeStyle = label.color;
          ctx.font = label.style + ' ' + label.size + 'px ' + label.family;
          ctx.textBaseline = 'middle';
          var aggValue = aggregates(node.name, valAcum, node);
          if(aggValue !== false) {
            aggValue = aggValue !== true? aggValue : valAcum;
            if(horz) {
              ctx.textAlign = 'right';
              ctx.fillText(aggValue, x + Math.max.apply(null, dimArray) - config.labelOffset, y + height/2);
            } else {
              ctx.textAlign = 'center';
              ctx.fillText(aggValue, x + width/2, y - Math.max.apply(null, dimArray) - label.size/2 - config.labelOffset);
            }
          }
          var labValue = showLabels(node.name, valAcum, node);
          if(labValue !== false) {
            labValue = labValue !== true? labValue : node.name;
            if(horz) {
              ctx.textAlign = 'center';
              ctx.translate(x - config.labelOffset - label.size/2, y + height/2);
              ctx.rotate(Math.PI / 2);
              ctx.fillText(labValue, 0, 0);
            } else {
              ctx.textAlign = 'center';
              ctx.fillText(labValue, x + width/2, y + label.size/2 + config.labelOffset);
            }
          }
          ctx.restore();
        }
      }
    },
    'contains': function(node, mpos) {
      var pos = node.pos.getc(true), 
          width = node.getData('width'),
          height = node.getData('height'),
          algnPos = this.getAlignedPos(pos, width, height),
          x = algnPos.x, y = algnPos.y,
          dimArray = node.getData('dimArray'),
          len = dimArray.length,
          config = node.getData('config'),
          rx = mpos.x - x,
          horz = config.orientation == 'horizontal',
          fixedDim = (horz? height : width) / len;
      //bounding box check
      if(horz) {
        if(mpos.x < x || mpos.x > x + width
            || mpos.y > y + height || mpos.y < y) {
            return false;
          }
      } else {
        if(mpos.x < x || mpos.x > x + width
            || mpos.y > y || mpos.y < y - height) {
            return false;
          }
      }
      //deep check
      for(var i=0, l=dimArray.length; i<l; i++) {
        var dimi = dimArray[i];
        if(horz) {
          var limit = y + fixedDim * i;
          if(mpos.x <= x+ dimi && mpos.y >= limit && mpos.y <= limit + fixedDim) {
            return {
              'name': node.getData('stringArray')[i],
              'color': node.getData('colorArray')[i],
              'value': node.getData('valueArray')[i],
              'label': node.name
            };
          }
        } else {
          var limit = x + fixedDim * i;
          if(mpos.x >= limit && mpos.x <= limit + fixedDim && mpos.y >= y - dimi) {
            return {
              'name': node.getData('stringArray')[i],
              'color': node.getData('colorArray')[i],
              'value': node.getData('valueArray')[i],
              'label': node.name
            };
          }
        }
      }
      return false;
    }
  }
});

/*
  Class: BarChart
  
  A visualization that displays stacked bar charts.
  
  Constructor Options:
  
  See <Options.BarChart>.

*/
$jit.BarChart = new Class({
  st: null,
  colors: ["#416D9C", "#70A35E", "#EBB056", "#C74243", "#83548B", "#909291", "#557EAA"],
  selected: {},
  busy: false,
  
  initialize: function(opt) {
    this.controller = this.config = 
      $.merge(Options("Canvas", "Margin", "Label", "BarChart"), {
        Label: { type: 'Native' }
      }, opt);
    //set functions for showLabels and showAggregates
    var showLabels = this.config.showLabels,
        typeLabels = $.type(showLabels),
        showAggregates = this.config.showAggregates,
        typeAggregates = $.type(showAggregates);
    this.config.showLabels = typeLabels == 'function'? showLabels : $.lambda(showLabels);
    this.config.showAggregates = typeAggregates == 'function'? showAggregates : $.lambda(showAggregates);
    
    this.initializeViz();
  },
  
  initializeViz: function() {
    var config = this.config, that = this;
    var nodeType = config.type.split(":")[0],
        horz = config.orientation == 'horizontal',
        nodeLabels = {};
    
    var delegate = new $jit.ST({
      injectInto: config.injectInto,
      width: config.width,
      height: config.height,
      orientation: horz? 'left' : 'bottom',
      levelDistance: 0,
      siblingOffset: config.barsOffset,
      subtreeOffset: 0,
      withLabels: config.Label.type != 'Native',      
      useCanvas: config.useCanvas,
      Label: {
        type: config.Label.type
      },
      Node: {
        overridable: true,
        type: 'barchart-' + nodeType,
        align: 'left',
        width: 1,
        height: 1
      },
      Edge: {
        type: 'none'
      },
      Tips: {
        enable: config.Tips.enable,
        type: 'Native',
        force: true,
        onShow: function(tip, node, contains) {
          var elem = contains;
          config.Tips.onShow(tip, elem, node);
        }
      },
      Events: {
        enable: true,
        type: 'Native',
        onClick: function(node, eventInfo, evt) {
          if(!config.Events.enable) return;
          var elem = eventInfo.getContains();
          config.Events.onClick(elem, eventInfo, evt);
        },
        onMouseMove: function(node, eventInfo, evt) {
          if(!config.hoveredColor) return;
          if(node) {
            var elem = eventInfo.getContains();
            that.select(node.id, elem.name, elem.index);
          } else {
            that.select(false, false, false);
          }
        }
      },
      onCreateLabel: function(domElement, node) {
        var labelConf = config.Label,
            valueArray = node.getData('valueArray'),
            acum = $.reduce(valueArray, function(x, y) { return x + y; }, 0);
        var nlbs = {
          wrapper: document.createElement('div'),
          aggregate: document.createElement('div'),
          label: document.createElement('div')
        };
        var wrapper = nlbs.wrapper,
            label = nlbs.label,
            aggregate = nlbs.aggregate,
            wrapperStyle = wrapper.style,
            labelStyle = label.style,
            aggregateStyle = aggregate.style;
        //store node labels
        nodeLabels[node.id] = nlbs;
        //append labels
        wrapper.appendChild(label);
        wrapper.appendChild(aggregate);
        if(!config.showLabels(node.name, acum, node)) {
          labelStyle.display = 'none';
        }
        if(!config.showAggregates(node.name, acum, node)) {
          aggregateStyle.display = 'none';
        }
        wrapperStyle.position = 'relative';
        wrapperStyle.overflow = 'visible';
        wrapperStyle.fontSize = labelConf.size + 'px';
        wrapperStyle.fontFamily = labelConf.family;
        wrapperStyle.color = labelConf.color;
        wrapperStyle.textAlign = 'center';
        aggregateStyle.position = labelStyle.position = 'absolute';
        
        domElement.style.width = node.getData('width') + 'px';
        domElement.style.height = node.getData('height') + 'px';
        aggregateStyle.left = labelStyle.left =  '0px';

        label.innerHTML = node.name;
        
        domElement.appendChild(wrapper);
      },
      onPlaceLabel: function(domElement, node) {
        if(!nodeLabels[node.id]) return;
        var labels = nodeLabels[node.id],
            wrapperStyle = labels.wrapper.style,
            labelStyle = labels.label.style,
            aggregateStyle = labels.aggregate.style,
            grouped = config.type.split(':')[0] == 'grouped',
            horz = config.orientation == 'horizontal',
            dimArray = node.getData('dimArray'),
            valArray = node.getData('valueArray'),
            width = (grouped && horz)? Math.max.apply(null, dimArray) : node.getData('width'),
            height = (grouped && !horz)? Math.max.apply(null, dimArray) : node.getData('height'),
            font = parseInt(wrapperStyle.fontSize, 10),
            domStyle = domElement.style;
            
        
        if(dimArray && valArray) {
          wrapperStyle.width = aggregateStyle.width = labelStyle.width = domElement.style.width = width + 'px';
          for(var i=0, l=valArray.length, acum=0; i<l; i++) {
            if(dimArray[i] > 0) {
              acum+= valArray[i];
            }
          }
          if(config.showLabels(node.name, acum, node)) {
            labelStyle.display = '';
          } else {
            labelStyle.display = 'none';
          }
          var aggValue = config.showAggregates(node.name, acum, node);
          if(aggValue !== false) {
            aggregateStyle.display = '';
          } else {
            aggregateStyle.display = 'none';
          }
          if(config.orientation == 'horizontal') {
            aggregateStyle.textAlign = 'right';
            labelStyle.textAlign = 'left';
            labelStyle.textIndex = aggregateStyle.textIndent = config.labelOffset + 'px';
            aggregateStyle.top = labelStyle.top = (height-font)/2 + 'px';
            domElement.style.height = wrapperStyle.height = height + 'px';
          } else {
            aggregateStyle.top = (-font - config.labelOffset) + 'px';
            labelStyle.top = (config.labelOffset + height) + 'px';
            domElement.style.top = parseInt(domElement.style.top, 10) - height + 'px';
            domElement.style.height = wrapperStyle.height = height + 'px';
          }
          labels.aggregate.innerHTML = aggValue !== true? aggValue : acum;
        }
      }
    });
    
    var size = delegate.canvas.getSize(),
        margin = config.Margin;
    if(horz) {
      delegate.config.offsetX = size.width/2 - margin.left
        - (config.showLabels && (config.labelOffset + config.Label.size));    
      delegate.config.offsetY = (margin.bottom - margin.top)/2;
    } else {
      delegate.config.offsetY = -size.height/2 + margin.bottom 
        + (config.showLabels && (config.labelOffset + config.Label.size));
      delegate.config.offsetX = (margin.right - margin.left)/2;
    }
    this.delegate = delegate;
    this.canvas = this.delegate.canvas;
  },
  
  /*
    Method: loadJSON
   
    Loads JSON data into the visualization. 
    
    Parameters:
    
    json - The JSON data format. This format is described in <http://blog.thejit.org/2010/04/24/new-javascript-infovis-toolkit-visualizations/#json-data-format>.
    
    Example:
    (start code js)
    var barChart = new $jit.BarChart(options);
    barChart.loadJSON(json);
    (end code)
 */  
  loadJSON: function(json) {
    if(this.busy) return;
    this.busy = true;
    
    var prefix = $.time(), 
        ch = [], 
        delegate = this.delegate,
        name = $.splat(json.label), 
        color = $.splat(json.color || this.colors),
        config = this.config,
        gradient = !!config.type.split(":")[1],
        animate = config.animate,
        horz = config.orientation == 'horizontal',
        that = this;
    
    for(var i=0, values=json.values, l=values.length; i<l; i++) {
      var val = values[i]
      var valArray = $.splat(values[i].values);
      var acum = 0;
      if (typeof val.id == 'undefined') {
        val.id = val.label;
      } 
      ch.push({
        'id': prefix + val.id,
        'name': val.label,
        'data': {
          'value': valArray,
          '$valueArray': valArray,
          '$colorArray': color,
          '$stringArray': name,
          '$gradient': gradient,
          '$config': config
        },
        'children': []
      });
    }
    var root = {
      'id': prefix + '$root',
      'name': '',
      'data': {
        '$type': 'none',
        '$width': 1,
        '$height': 1
      },
      'children': ch
    };
    delegate.loadJSON(root);
    
    this.normalizeDims();
    delegate.compute();
    delegate.select(delegate.root);
    if(animate) {
      if(horz) {
        delegate.fx.animate({
          modes: ['node-property:width:dimArray'],
          duration:1500,
          onComplete: function() {
            that.busy = false;
          }
        });
      } else {
        delegate.fx.animate({
          modes: ['node-property:height:dimArray'],
          duration:1500,
          onComplete: function() {
            that.busy = false;
          }
        });
      }
    } else {
      this.busy = false;
    }
  },
  
  /*
    Method: updateJSON
   
    Use this method when updating values for the current JSON data. If the items specified by the JSON data already exist in the graph then their values will be updated.
    
    Parameters:
    
    json - (object) JSON data to be updated. The JSON format corresponds to the one described in <BarChart.loadJSON>.
    onComplete - (object) A callback object to be called when the animation transition when updating the data end.
    
    Example:
    
    (start code js)
    barChart.updateJSON(json, {
      onComplete: function() {
        alert('update complete!');
      }
    });
    (end code)
 */  
  updateJSON: function(json, onComplete) {
    if(this.busy) return;
    this.busy = true;
    this.select(false, false, false);
    var delegate = this.delegate;
    var graph = delegate.graph;
    var values = json.values;
    var animate = this.config.animate;
    var that = this;
    var horz = this.config.orientation == 'horizontal';
    $.each(values, function(v) {
      var n = graph.getByName(v.label);
      if(n) {
        n.setData('valueArray', $.splat(v.values));
        if(json.label) {
          n.setData('stringArray', $.splat(json.label));
        }
      }
    });
    this.normalizeDims();
    delegate.compute();
    delegate.select(delegate.root);
    if(animate) {
      if(horz) {
        delegate.fx.animate({
          modes: ['node-property:width:dimArray'],
          duration:1500,
          onComplete: function() {
            that.busy = false;
            onComplete && onComplete.onComplete();
          }
        });
      } else {
        delegate.fx.animate({
          modes: ['node-property:height:dimArray'],
          duration:1500,
          onComplete: function() {
            that.busy = false;
            onComplete && onComplete.onComplete();
          }
        });
      }
    }
  },
  
  //adds the little brown bar when hovering the node
  select: function(id, name) {
    if(!this.config.hoveredColor) return;
    var s = this.selected;
    if(s.id != id || s.name != name) {
      s.id = id;
      s.name = name;
      s.color = this.config.hoveredColor;
      this.delegate.graph.eachNode(function(n) {
        if(id == n.id) {
          n.setData('border', s);
        } else {
          n.setData('border', false);
        }
      });
      this.delegate.plot();
    }
  },
  
  /*
    Method: getLegend
   
    Returns an object containing as keys the legend names and as values hex strings with color values.
    
    Example:
    
    (start code js)
    var legend = barChart.getLegend();
    (end code)
  */  
  getLegend: function() {
    var legend = {};
    var n;
    this.delegate.graph.getNode(this.delegate.root).eachAdjacency(function(adj) {
      n = adj.nodeTo;
    });
    var colors = n.getData('colorArray'),
        len = colors.length;
    $.each(n.getData('stringArray'), function(s, i) {
      legend[s] = colors[i % len];
    });
    return legend;
  },
  
  /*
    Method: getMaxValue
   
    Returns the maximum accumulated value for the stacks. This method is used for normalizing the graph heights according to the canvas height.
    
    Example:
    
    (start code js)
    var ans = barChart.getMaxValue();
    (end code)
    
    In some cases it could be useful to override this method to normalize heights for a group of BarCharts, like when doing small multiples.
    
    Example:
    
    (start code js)
    //will return 100 for all BarChart instances,
    //displaying all of them with the same scale
    $jit.BarChart.implement({
      'getMaxValue': function() {
        return 100;
      }
    });
    (end code)
    
  */  
  getMaxValue: function() {
    var maxValue = 0, stacked = this.config.type.split(':')[0] == 'stacked';
    this.delegate.graph.eachNode(function(n) {
      var valArray = n.getData('valueArray'),
          acum = 0;
      if(!valArray) return;
      if(stacked) {
        $.each(valArray, function(v) { 
          acum += +v;
        });
      } else {
        acum = Math.max.apply(null, valArray);
      }
      maxValue = maxValue>acum? maxValue:acum;
    });
    return maxValue;
  },
  
  setBarType: function(type) {
    this.config.type = type;
    this.delegate.config.Node.type = 'barchart-' + type.split(':')[0];
  },
  
  normalizeDims: function() {
    //number of elements
    var root = this.delegate.graph.getNode(this.delegate.root), l=0;
    root.eachAdjacency(function() {
      l++;
    });
    var maxValue = this.getMaxValue() || 1,
        size = this.delegate.canvas.getSize(),
        config = this.config,
        margin = config.Margin,
        marginWidth = margin.left + margin.right,
        marginHeight = margin.top + margin.bottom,
        horz = config.orientation == 'horizontal',
        fixedDim = (size[horz? 'height':'width'] - (horz? marginHeight:marginWidth) - (l -1) * config.barsOffset) / l,
        animate = config.animate,
        height = size[horz? 'width':'height'] - (horz? marginWidth:marginHeight) 
          - (!horz && config.showAggregates && (config.Label.size + config.labelOffset))
          - (config.showLabels && (config.Label.size + config.labelOffset)),
        dim1 = horz? 'height':'width',
        dim2 = horz? 'width':'height';
    this.delegate.graph.eachNode(function(n) {
      var acum = 0, animateValue = [];
      $.each(n.getData('valueArray'), function(v) {
        acum += +v;
        animateValue.push(0);
      });
      n.setData(dim1, fixedDim);
      if(animate) {
        n.setData(dim2, acum * height / maxValue, 'end');
        n.setData('dimArray', $.map(n.getData('valueArray'), function(n) { 
          return n * height / maxValue; 
        }), 'end');
        var dimArray = n.getData('dimArray');
        if(!dimArray) {
          n.setData('dimArray', animateValue);
        }
      } else {
        n.setData(dim2, acum * height / maxValue);
        n.setData('dimArray', $.map(n.getData('valueArray'), function(n) { 
          return n * height / maxValue; 
        }));
      }
    });
  }
});


/*
 * File: Options.PieChart.js
 *
*/
/*
  Object: Options.PieChart
  
  <PieChart> options. 
  Other options included in the PieChart are <Options.Canvas>, <Options.Label>, <Options.Tips> and <Options.Events>.
  
  Syntax:
  
  (start code js)

  Options.PieChart = {
    animate: true,
    offset: 25,
    sliceOffset:0,
    labelOffset: 3,
    type: 'stacked',
    hoveredColor: '#9fd4ff',
    showLabels: true,
    resizeLabels: false,
    updateHeights: false
  };  

  (end code)
  
  Example:
  
  (start code js)

  var pie = new $jit.PieChart({
    animate: true,
    sliceOffset: 5,
    type: 'stacked:gradient'
  });  

  (end code)
  
  Parameters:
  
  animate - (boolean) Default's *true*. Whether to add animated transitions when plotting/updating the visualization.
  offset - (number) Default's *25*. Adds margin between the visualization and the canvas.
  sliceOffset - (number) Default's *0*. Separation between the center of the canvas and each pie slice.
  labelOffset - (number) Default's *3*. Adds margin between the label and the default place where it should be drawn.
  type - (string) Default's *'stacked'*. Stack style. Posible values are 'stacked', 'stacked:gradient' to add gradients.
  hoveredColor - (boolean|string) Default's *'#9fd4ff'*. Sets the selected color for a hovered pie stack.
  showLabels - (boolean) Default's *true*. Display the name of the slots.
  resizeLabels - (boolean|number) Default's *false*. Resize the pie labels according to their stacked values. Set a number for *resizeLabels* to set a font size minimum.
  updateHeights - (boolean) Default's *false*. Only for mono-valued (most common) pie charts. Resize the height of the pie slices according to their current values.

*/
Options.PieChart = {
  $extend: true,

  animate: true,
  offset: 25, // page offset
  sliceOffset:0,
  labelOffset: 3, // label offset
  type: 'stacked', // gradient
  hoveredColor: '#9fd4ff',
  Events: {
    enable: false,
    onClick: $.empty
  },
  Tips: {
    enable: false,
    onShow: $.empty,
    onHide: $.empty
  },
  showLabels: true,
  resizeLabels: false,
  
  //only valid for mono-valued datasets
  updateHeights: false
};

/*
 * Class: Layouts.Radial
 * 
 * Implements a Radial Layout.
 * 
 * Implemented By:
 * 
 * <RGraph>, <Hypertree>
 * 
 */
Layouts.Radial = new Class({

  /*
   * Method: compute
   * 
   * Computes nodes' positions.
   * 
   * Parameters:
   * 
   * property - _optional_ A <Graph.Node> position property to store the new
   * positions. Possible values are 'pos', 'end' or 'start'.
   * 
   */
  compute : function(property) {
    var prop = $.splat(property || [ 'current', 'start', 'end' ]);
    NodeDim.compute(this.graph, prop, this.config);
    this.graph.computeLevels(this.root, 0, "ignore");
    var lengthFunc = this.createLevelDistanceFunc(); 
    this.computeAngularWidths(prop);
    this.computePositions(prop, lengthFunc);
  },

  /*
   * computePositions
   * 
   * Performs the main algorithm for computing node positions.
   */
  computePositions : function(property, getLength) {
    var propArray = property;
    var graph = this.graph;
    var root = graph.getNode(this.root);
    var parent = this.parent;
    var config = this.config;

    for ( var i=0, l=propArray.length; i < l; i++) {
      var pi = propArray[i];
      root.setPos($P(0, 0), pi);
      root.setData('span', Math.PI * 2, pi);
    }

    root.angleSpan = {
      begin : 0,
      end : 2 * Math.PI
    };

    graph.eachBFS(this.root, function(elem) {
      var angleSpan = elem.angleSpan.end - elem.angleSpan.begin;
      var angleInit = elem.angleSpan.begin;
      var len = getLength(elem);
      //Calculate the sum of all angular widths
      var totalAngularWidths = 0, subnodes = [], maxDim = {};
      elem.eachSubnode(function(sib) {
        totalAngularWidths += sib._treeAngularWidth;
        //get max dim
        for ( var i=0, l=propArray.length; i < l; i++) {
          var pi = propArray[i], dim = sib.getData('dim', pi);
          maxDim[pi] = (pi in maxDim)? (dim > maxDim[pi]? dim : maxDim[pi]) : dim;
        }
        subnodes.push(sib);
      }, "ignore");
      //Maintain children order
      //Second constraint for <http://bailando.sims.berkeley.edu/papers/infovis01.htm>
      if (parent && parent.id == elem.id && subnodes.length > 0
          && subnodes[0].dist) {
        subnodes.sort(function(a, b) {
          return (a.dist >= b.dist) - (a.dist <= b.dist);
        });
      }
      //Calculate nodes positions.
      for (var k = 0, ls=subnodes.length; k < ls; k++) {
        var child = subnodes[k];
        if (!child._flag) {
          var angleProportion = child._treeAngularWidth / totalAngularWidths * angleSpan;
          var theta = angleInit + angleProportion / 2;

          for ( var i=0, l=propArray.length; i < l; i++) {
            var pi = propArray[i];
            child.setPos($P(theta, len), pi);
            child.setData('span', angleProportion, pi);
            child.setData('dim-quotient', child.getData('dim', pi) / maxDim[pi], pi);
          }

          child.angleSpan = {
            begin : angleInit,
            end : angleInit + angleProportion
          };
          angleInit += angleProportion;
        }
      }
    }, "ignore");
  },

  /*
   * Method: setAngularWidthForNodes
   * 
   * Sets nodes angular widths.
   */
  setAngularWidthForNodes : function(prop) {
    this.graph.eachBFS(this.root, function(elem, i) {
      var diamValue = elem.getData('angularWidth', prop[0]) || 5;
      elem._angularWidth = diamValue / i;
    }, "ignore");
  },

  /*
   * Method: setSubtreesAngularWidth
   * 
   * Sets subtrees angular widths.
   */
  setSubtreesAngularWidth : function() {
    var that = this;
    this.graph.eachNode(function(elem) {
      that.setSubtreeAngularWidth(elem);
    }, "ignore");
  },

  /*
   * Method: setSubtreeAngularWidth
   * 
   * Sets the angular width for a subtree.
   */
  setSubtreeAngularWidth : function(elem) {
    var that = this, nodeAW = elem._angularWidth, sumAW = 0;
    elem.eachSubnode(function(child) {
      that.setSubtreeAngularWidth(child);
      sumAW += child._treeAngularWidth;
    }, "ignore");
    elem._treeAngularWidth = Math.max(nodeAW, sumAW);
  },

  /*
   * Method: computeAngularWidths
   * 
   * Computes nodes and subtrees angular widths.
   */
  computeAngularWidths : function(prop) {
    this.setAngularWidthForNodes(prop);
    this.setSubtreesAngularWidth();
  }

});


/*
 * File: Sunburst.js
 */

/*
   Class: Sunburst
      
   A radial space filling tree visualization.
   
   Inspired by:
 
   Sunburst <http://www.cc.gatech.edu/gvu/ii/sunburst/>.
   
   Note:
   
   This visualization was built and engineered from scratch, taking only the paper as inspiration, and only shares some features with the visualization described in the paper.
   
  Implements:
  
  All <Loader> methods
  
   Constructor Options:
   
   Inherits options from
   
   - <Options.Canvas>
   - <Options.Controller>
   - <Options.Node>
   - <Options.Edge>
   - <Options.Label>
   - <Options.Events>
   - <Options.Tips>
   - <Options.NodeStyles>
   - <Options.Navigation>
   
   Additionally, there are other parameters and some default values changed
   
   interpolation - (string) Default's *linear*. Describes the way nodes are interpolated. Possible values are 'linear' and 'polar'.
   levelDistance - (number) Default's *100*. The distance between levels of the tree. 
   Node.type - Described in <Options.Node>. Default's to *multipie*.
   Node.height - Described in <Options.Node>. Default's *0*.
   Edge.type - Described in <Options.Edge>. Default's *none*.
   Label.textAlign - Described in <Options.Label>. Default's *start*.
   Label.textBaseline - Described in <Options.Label>. Default's *middle*.
     
   Instance Properties:

   canvas - Access a <Canvas> instance.
   graph - Access a <Graph> instance.
   op - Access a <Sunburst.Op> instance.
   fx - Access a <Sunburst.Plot> instance.
   labels - Access a <Sunburst.Label> interface implementation.   

*/

$jit.Sunburst = new Class({

  Implements: [ Loader, Extras, Layouts.Radial ],

  initialize: function(controller) {
    var $Sunburst = $jit.Sunburst;

    var config = {
      interpolation: 'linear',
      levelDistance: 100,
      Node: {
        'type': 'multipie',
        'height':0
      },
      Edge: {
        'type': 'none'
      },
      Label: {
        textAlign: 'start',
        textBaseline: 'middle'
      }
    };

    this.controller = this.config = $.merge(Options("Canvas", "Node", "Edge",
        "Fx", "Tips", "NodeStyles", "Events", "Navigation", "Controller", "Label"), config, controller);

    var canvasConfig = this.config;
    if(canvasConfig.useCanvas) {
      this.canvas = canvasConfig.useCanvas;
      this.config.labelContainer = this.canvas.id + '-label';
    } else {
      if(canvasConfig.background) {
        canvasConfig.background = $.merge({
          type: 'Circles'
        }, canvasConfig.background);
      }
      this.canvas = new Canvas(this, canvasConfig);
      this.config.labelContainer = (typeof canvasConfig.injectInto == 'string'? canvasConfig.injectInto : canvasConfig.injectInto.id) + '-label';
    }

    this.graphOptions = {
      'klass': Polar,
      'Node': {
        'selected': false,
        'exist': true,
        'drawn': true
      }
    };
    this.graph = new Graph(this.graphOptions, this.config.Node,
        this.config.Edge);
    this.labels = new $Sunburst.Label[canvasConfig.Label.type](this);
    this.fx = new $Sunburst.Plot(this, $Sunburst);
    this.op = new $Sunburst.Op(this);
    this.json = null;
    this.root = null;
    this.rotated = null;
    this.busy = false;
    // initialize extras
    this.initializeExtras();
  },

  /* 
  
    createLevelDistanceFunc 
  
    Returns the levelDistance function used for calculating a node distance 
    to its origin. This function returns a function that is computed 
    per level and not per node, such that all nodes with the same depth will have the 
    same distance to the origin. The resulting function gets the 
    parent node as parameter and returns a float.

   */
  createLevelDistanceFunc: function() {
    var ld = this.config.levelDistance;
    return function(elem) {
      return (elem._depth + 1) * ld;
    };
  },

  /* 
     Method: refresh 
     
     Computes positions and plots the tree.

   */
  refresh: function() {
    this.compute();
    this.plot();
  },

  /*
   reposition
  
   An alias for computing new positions to _endPos_

   See also:

   <Sunburst.compute>
   
  */
  reposition: function() {
    this.compute('end');
  },

  /*
  Method: rotate
  
  Rotates the graph so that the selected node is horizontal on the right.

  Parameters:
  
  node - (object) A <Graph.Node>.
  method - (string) Whether to perform an animation or just replot the graph. Possible values are "replot" or "animate".
  opt - (object) Configuration options merged with this visualization configuration options.
  
  See also:

  <Sunburst.rotateAngle>
  
  */
  rotate: function(node, method, opt) {
    var theta = node.getPos(opt.property || 'current').getp(true).theta;
    this.rotated = node;
    this.rotateAngle(-theta, method, opt);
  },

  /*
  Method: rotateAngle
  
  Rotates the graph of an angle theta.
  
   Parameters:
   
   node - (object) A <Graph.Node>.
   method - (string) Whether to perform an animation or just replot the graph. Possible values are "replot" or "animate".
   opt - (object) Configuration options merged with this visualization configuration options.
   
   See also:

   <Sunburst.rotate>
  
  */
  rotateAngle: function(theta, method, opt) {
    var that = this;
    var options = $.merge(this.config, opt || {}, {
      modes: [ 'polar' ]
    });
    var prop = opt.property || (method === "animate" ? 'end' : 'current');
    if(method === 'animate') {
      this.fx.animation.pause();
    }
    this.graph.eachNode(function(n) {
      var p = n.getPos(prop);
      p.theta += theta;
      if (p.theta < 0) {
        p.theta += Math.PI * 2;
      }
    });
    if (method == 'animate') {
      this.fx.animate(options);
    } else if (method == 'replot') {
      this.fx.plot();
      this.busy = false;
    }
  },

  /*
   Method: plot
  
   Plots the Sunburst. This is a shortcut to *fx.plot*.
  */
  plot: function() {
    this.fx.plot();
  }
});

$jit.Sunburst.$extend = true;

(function(Sunburst) {

  /*
     Class: Sunburst.Op

     Custom extension of <Graph.Op>.

     Extends:

     All <Graph.Op> methods
     
     See also:
     
     <Graph.Op>

  */
  Sunburst.Op = new Class( {

    Implements: Graph.Op

  });

  /*
     Class: Sunburst.Plot

    Custom extension of <Graph.Plot>.
  
    Extends:
  
    All <Graph.Plot> methods
    
    See also:
    
    <Graph.Plot>
  
  */
  Sunburst.Plot = new Class( {

    Implements: Graph.Plot

  });

  /*
    Class: Sunburst.Label

    Custom extension of <Graph.Label>. 
    Contains custom <Graph.Label.SVG>, <Graph.Label.HTML> and <Graph.Label.Native> extensions.
  
    Extends:
  
    All <Graph.Label> methods and subclasses.
  
    See also:
  
    <Graph.Label>, <Graph.Label.Native>, <Graph.Label.HTML>, <Graph.Label.SVG>.
  
   */
  Sunburst.Label = {};

  /*
     Sunburst.Label.Native

     Custom extension of <Graph.Label.Native>.

     Extends:

     All <Graph.Label.Native> methods

     See also:

     <Graph.Label.Native>
  */
  Sunburst.Label.Native = new Class( {
    Implements: Graph.Label.Native,

    initialize: function(viz) {
      this.viz = viz;
      this.label = viz.config.Label;
      this.config = viz.config;
    },

    renderLabel: function(canvas, node, controller) {
      var span = node.getData('span');
      if(span < Math.PI /2 && Math.tan(span) * 
          this.config.levelDistance * node._depth < 10) {
        return;
      }
      var ctx = canvas.getCtx();
      var measure = ctx.measureText(node.name);
      if (node.id == this.viz.root) {
        var x = -measure.width / 2, y = 0, thetap = 0;
        var ld = 0;
      } else {
        var indent = 5;
        var ld = controller.levelDistance - indent;
        var clone = node.pos.clone();
        clone.rho += indent;
        var p = clone.getp(true);
        var ct = clone.getc(true);
        var x = ct.x, y = ct.y;
        // get angle in degrees
        var pi = Math.PI;
        var cond = (p.theta > pi / 2 && p.theta < 3 * pi / 2);
        var thetap = cond ? p.theta + pi : p.theta;
        if (cond) {
          x -= Math.abs(Math.cos(p.theta) * measure.width);
          y += Math.sin(p.theta) * measure.width;
        } else if (node.id == this.viz.root) {
          x -= measure.width / 2;
        }
      }
      ctx.save();
      ctx.translate(x, y);
      ctx.rotate(thetap);
      ctx.fillText(node.name, 0, 0);
      ctx.restore();
    }
  });

  /*
     Sunburst.Label.SVG

    Custom extension of <Graph.Label.SVG>.
  
    Extends:
  
    All <Graph.Label.SVG> methods
  
    See also:
  
    <Graph.Label.SVG>
  
  */
  Sunburst.Label.SVG = new Class( {
    Implements: Graph.Label.SVG,

    initialize: function(viz) {
      this.viz = viz;
    },

    /* 
       placeLabel

       Overrides abstract method placeLabel in <Graph.Plot>.

       Parameters:

       tag - A DOM label element.
       node - A <Graph.Node>.
       controller - A configuration/controller object passed to the visualization.
      
     */
    placeLabel: function(tag, node, controller) {
      var pos = node.pos.getc(true), viz = this.viz, canvas = this.viz.canvas;
      var radius = canvas.getSize();
      var labelPos = {
        x: Math.round(pos.x + radius.width / 2),
        y: Math.round(pos.y + radius.height / 2)
      };
      tag.setAttribute('x', labelPos.x);
      tag.setAttribute('y', labelPos.y);

      var bb = tag.getBBox();
      if (bb) {
        // center the label
    var x = tag.getAttribute('x');
    var y = tag.getAttribute('y');
    // get polar coordinates
    var p = node.pos.getp(true);
    // get angle in degrees
    var pi = Math.PI;
    var cond = (p.theta > pi / 2 && p.theta < 3 * pi / 2);
    if (cond) {
      tag.setAttribute('x', x - bb.width);
      tag.setAttribute('y', y - bb.height);
    } else if (node.id == viz.root) {
      tag.setAttribute('x', x - bb.width / 2);
    }

    var thetap = cond ? p.theta + pi : p.theta;
    if(node._depth)
      tag.setAttribute('transform', 'rotate(' + thetap * 360 / (2 * pi) + ' ' + x
          + ' ' + y + ')');
  }

  controller.onPlaceLabel(tag, node);
}
  });

  /*
     Sunburst.Label.HTML

     Custom extension of <Graph.Label.HTML>.

     Extends:

     All <Graph.Label.HTML> methods.

     See also:

     <Graph.Label.HTML>

  */
  Sunburst.Label.HTML = new Class( {
    Implements: Graph.Label.HTML,

    initialize: function(viz) {
      this.viz = viz;
    },
    /* 
       placeLabel

       Overrides abstract method placeLabel in <Graph.Plot>.

       Parameters:

       tag - A DOM label element.
       node - A <Graph.Node>.
       controller - A configuration/controller object passed to the visualization.
      
     */
    placeLabel: function(tag, node, controller) {
      var pos = node.pos.clone(), 
          canvas = this.viz.canvas,
          height = node.getData('height'),
          ldist = ((height || node._depth == 0)? height : this.viz.config.levelDistance) /2,
          radius = canvas.getSize();
      pos.rho += ldist;
      pos = pos.getc(true);
      
      var labelPos = {
        x: Math.round(pos.x + radius.width / 2),
        y: Math.round(pos.y + radius.height / 2)
      };

      var style = tag.style;
      style.left = labelPos.x + 'px';
      style.top = labelPos.y + 'px';
      style.display = this.fitsInCanvas(labelPos, canvas) ? '' : 'none';

      controller.onPlaceLabel(tag, node);
    }
  });

  /*
    Class: Sunburst.Plot.NodeTypes

    This class contains a list of <Graph.Node> built-in types. 
    Node types implemented are 'none', 'pie', 'multipie', 'gradient-pie' and 'gradient-multipie'.

    You can add your custom node types, customizing your visualization to the extreme.

    Example:

    (start code js)
      Sunburst.Plot.NodeTypes.implement({
        'mySpecialType': {
          'render': function(node, canvas) {
            //print your custom node to canvas
          },
          //optional
          'contains': function(node, pos) {
            //return true if pos is inside the node or false otherwise
          }
        }
      });
    (end code)

  */
  Sunburst.Plot.NodeTypes = new Class( {
    'none': {
      'render': $.empty,
      'contains': $.lambda(false),
      'anglecontains': function(node, pos) {
        var span = node.getData('span') / 2, theta = node.pos.theta;
        var begin = theta - span, end = theta + span;
        if (begin < 0)
          begin += Math.PI * 2;
        var atan = Math.atan2(pos.y, pos.x);
        if (atan < 0)
          atan += Math.PI * 2;
        if (begin > end) {
          return (atan > begin && atan <= Math.PI * 2) || atan < end;
        } else {
          return atan > begin && atan < end;
        }
      }
    },

    'pie': {
      'render': function(node, canvas) {
        var span = node.getData('span') / 2, theta = node.pos.theta;
        var begin = theta - span, end = theta + span;
        var polarNode = node.pos.getp(true);
        var polar = new Polar(polarNode.rho, begin);
        var p1coord = polar.getc(true);
        polar.theta = end;
        var p2coord = polar.getc(true);

        var ctx = canvas.getCtx();
        ctx.beginPath();
        ctx.moveTo(0, 0);
        ctx.lineTo(p1coord.x, p1coord.y);
        ctx.moveTo(0, 0);
        ctx.lineTo(p2coord.x, p2coord.y);
        ctx.moveTo(0, 0);
        ctx.arc(0, 0, polarNode.rho * node.getData('dim-quotient'), begin, end,
            false);
        ctx.fill();
      },
      'contains': function(node, pos) {
        if (this.nodeTypes['none'].anglecontains.call(this, node, pos)) {
          var rho = Math.sqrt(pos.x * pos.x + pos.y * pos.y);
          var ld = this.config.levelDistance, d = node._depth;
          return (rho <= ld * d);
        }
        return false;
      }
    },
    'multipie': {
      'render': function(node, canvas) {
        var height = node.getData('height');
        var ldist = height? height : this.config.levelDistance;
        var span = node.getData('span') / 2, theta = node.pos.theta;
        var begin = theta - span, end = theta + span;
        var polarNode = node.pos.getp(true);

        var polar = new Polar(polarNode.rho, begin);
        var p1coord = polar.getc(true);

        polar.theta = end;
        var p2coord = polar.getc(true);

        polar.rho += ldist;
        var p3coord = polar.getc(true);

        polar.theta = begin;
        var p4coord = polar.getc(true);

        var ctx = canvas.getCtx();
        ctx.moveTo(0, 0);
        ctx.beginPath();
        ctx.arc(0, 0, polarNode.rho, begin, end, false);
        ctx.arc(0, 0, polarNode.rho + ldist, end, begin, true);
        ctx.moveTo(p1coord.x, p1coord.y);
        ctx.lineTo(p4coord.x, p4coord.y);
        ctx.moveTo(p2coord.x, p2coord.y);
        ctx.lineTo(p3coord.x, p3coord.y);
        ctx.fill();

        if (node.collapsed) {
          ctx.save();
          ctx.lineWidth = 2;
          ctx.moveTo(0, 0);
          ctx.beginPath();
          ctx.arc(0, 0, polarNode.rho + ldist + 5, end - 0.01, begin + 0.01,
              true);
          ctx.stroke();
          ctx.restore();
        }
      },
      'contains': function(node, pos) {
        if (this.nodeTypes['none'].anglecontains.call(this, node, pos)) {
          var rho = Math.sqrt(pos.x * pos.x + pos.y * pos.y);
          var height = node.getData('height');
          var ldist = height? height : this.config.levelDistance;
          var ld = this.config.levelDistance, d = node._depth;
          return (rho >= ld * d) && (rho <= (ld * d + ldist));
        }
        return false;
      }
    },

    'gradient-multipie': {
      'render': function(node, canvas) {
        var ctx = canvas.getCtx();
        var height = node.getData('height');
        var ldist = height? height : this.config.levelDistance;
        var radialGradient = ctx.createRadialGradient(0, 0, node.getPos().rho,
            0, 0, node.getPos().rho + ldist);

        var colorArray = $.hexToRgb(node.getData('color')), ans = [];
        $.each(colorArray, function(i) {
          ans.push(parseInt(i * 0.5, 10));
        });
        var endColor = $.rgbToHex(ans);
        radialGradient.addColorStop(0, endColor);
        radialGradient.addColorStop(1, node.getData('color'));
        ctx.fillStyle = radialGradient;
        this.nodeTypes['multipie'].render.call(this, node, canvas);
      },
      'contains': function(node, pos) {
        return this.nodeTypes['multipie'].contains.call(this, node, pos);
      }
    },

    'gradient-pie': {
      'render': function(node, canvas) {
        var ctx = canvas.getCtx();
        var radialGradient = ctx.createRadialGradient(0, 0, 0, 0, 0, node
            .getPos().rho);

        var colorArray = $.hexToRgb(node.getData('color')), ans = [];
        $.each(colorArray, function(i) {
          ans.push(parseInt(i * 0.5, 10));
        });
        var endColor = $.rgbToHex(ans);
        radialGradient.addColorStop(1, endColor);
        radialGradient.addColorStop(0, node.getData('color'));
        ctx.fillStyle = radialGradient;
        this.nodeTypes['pie'].render.call(this, node, canvas);
      },
      'contains': function(node, pos) {
        return this.nodeTypes['pie'].contains.call(this, node, pos);
      }
    }
  });

  /*
    Class: Sunburst.Plot.EdgeTypes

    This class contains a list of <Graph.Adjacence> built-in types. 
    Edge types implemented are 'none', 'line' and 'arrow'.
  
    You can add your custom edge types, customizing your visualization to the extreme.
  
    Example:
  
    (start code js)
      Sunburst.Plot.EdgeTypes.implement({
        'mySpecialType': {
          'render': function(adj, canvas) {
            //print your custom edge to canvas
          },
          //optional
          'contains': function(adj, pos) {
            //return true if pos is inside the arc or false otherwise
          }
        }
      });
    (end code)
  
  */
  Sunburst.Plot.EdgeTypes = new Class({
    'none': $.empty,
    'line': {
      'render': function(adj, canvas) {
        var from = adj.nodeFrom.pos.getc(true),
            to = adj.nodeTo.pos.getc(true);
        this.edgeHelper.line.render(from, to, canvas);
      },
      'contains': function(adj, pos) {
        var from = adj.nodeFrom.pos.getc(true),
            to = adj.nodeTo.pos.getc(true);
        return this.edgeHelper.line.contains(from, to, pos, this.edge.epsilon);
      }
    },
    'arrow': {
      'render': function(adj, canvas) {
        var from = adj.nodeFrom.pos.getc(true),
            to = adj.nodeTo.pos.getc(true),
            dim = adj.getData('dim'),
            direction = adj.data.$direction,
            inv = (direction && direction.length>1 && direction[0] != adj.nodeFrom.id);
        this.edgeHelper.arrow.render(from, to, dim, inv, canvas);
      },
      'contains': function(adj, pos) {
        var from = adj.nodeFrom.pos.getc(true),
            to = adj.nodeTo.pos.getc(true);
        return this.edgeHelper.arrow.contains(from, to, pos, this.edge.epsilon);
      }
    },
    'hyperline': {
      'render': function(adj, canvas) {
        var from = adj.nodeFrom.pos.getc(),
            to = adj.nodeTo.pos.getc(),
            dim = Math.max(from.norm(), to.norm());
        this.edgeHelper.hyperline.render(from.$scale(1/dim), to.$scale(1/dim), dim, canvas);
      },
      'contains': $.lambda(false) //TODO(nico): Implement this!
    }
  });

})($jit.Sunburst);


/*
 * File: PieChart.js
 *
*/

$jit.Sunburst.Plot.NodeTypes.implement({
  'piechart-stacked' : {
    'render' : function(node, canvas) {
      var pos = node.pos.getp(true),
          dimArray = node.getData('dimArray'),
          valueArray = node.getData('valueArray'),
          colorArray = node.getData('colorArray'),
          colorLength = colorArray.length,
          stringArray = node.getData('stringArray'),
          span = node.getData('span') / 2,
          theta = node.pos.theta,
          begin = theta - span,
          end = theta + span,
          polar = new Polar;
    
      var ctx = canvas.getCtx(), 
          opt = {},
          gradient = node.getData('gradient'),
          border = node.getData('border'),
          config = node.getData('config'),
          showLabels = config.showLabels,
          resizeLabels = config.resizeLabels,
          label = config.Label;

      var xpos = config.sliceOffset * Math.cos((begin + end) /2);
      var ypos = config.sliceOffset * Math.sin((begin + end) /2);

      if (colorArray && dimArray && stringArray) {
        for (var i=0, l=dimArray.length, acum=0, valAcum=0; i<l; i++) {
          var dimi = dimArray[i], colori = colorArray[i % colorLength];
          if(dimi <= 0) continue;
          ctx.fillStyle = ctx.strokeStyle = colori;
          if(gradient && dimi) {
            var radialGradient = ctx.createRadialGradient(xpos, ypos, acum + config.sliceOffset,
                xpos, ypos, acum + dimi + config.sliceOffset);
            var colorRgb = $.hexToRgb(colori), 
                ans = $.map(colorRgb, function(i) { return (i * 0.8) >> 0; }),
                endColor = $.rgbToHex(ans);

            radialGradient.addColorStop(0, colori);
            radialGradient.addColorStop(0.5, colori);
            radialGradient.addColorStop(1, endColor);
            ctx.fillStyle = radialGradient;
          }
          
          polar.rho = acum + config.sliceOffset;
          polar.theta = begin;
          var p1coord = polar.getc(true);
          polar.theta = end;
          var p2coord = polar.getc(true);
          polar.rho += dimi;
          var p3coord = polar.getc(true);
          polar.theta = begin;
          var p4coord = polar.getc(true);

          ctx.beginPath();
          //fixing FF arc method + fill
          ctx.arc(xpos, ypos, acum + .01, begin, end, false);
          ctx.arc(xpos, ypos, acum + dimi + .01, end, begin, true);
          ctx.fill();
          if(border && border.name == stringArray[i]) {
            opt.acum = acum;
            opt.dimValue = dimArray[i];
            opt.begin = begin;
            opt.end = end;
          }
          acum += (dimi || 0);
          valAcum += (valueArray[i] || 0);
        }
        if(border) {
          ctx.save();
          ctx.globalCompositeOperation = "source-over";
          ctx.lineWidth = 2;
          ctx.strokeStyle = border.color;
          var s = begin < end? 1 : -1;
          ctx.beginPath();
          //fixing FF arc method + fill
          ctx.arc(xpos, ypos, opt.acum + .01 + 1, opt.begin, opt.end, false);
          ctx.arc(xpos, ypos, opt.acum + opt.dimValue + .01 - 1, opt.end, opt.begin, true);
          ctx.closePath();
          ctx.stroke();
          ctx.restore();
        }
        if(showLabels && label.type == 'Native') {
          ctx.save();
          ctx.fillStyle = ctx.strokeStyle = label.color;
          var scale = resizeLabels? node.getData('normalizedDim') : 1,
              fontSize = (label.size * scale) >> 0;
          fontSize = fontSize < +resizeLabels? +resizeLabels : fontSize;
          
          ctx.font = label.style + ' ' + fontSize + 'px ' + label.family;
          ctx.textBaseline = 'middle';
          ctx.textAlign = 'center';
          
          polar.rho = acum + config.labelOffset + config.sliceOffset;
          polar.theta = node.pos.theta;
          var cart = polar.getc(true);
          
          ctx.fillText(node.name, cart.x, cart.y);
          ctx.restore();
        }
      }
    },
    'contains': function(node, pos) {
      if (this.nodeTypes['none'].anglecontains.call(this, node, pos)) {
        var rho = Math.sqrt(pos.x * pos.x + pos.y * pos.y);
        var ld = this.config.levelDistance, d = node._depth;
        var config = node.getData('config');
        if(rho <=ld * d + config.sliceOffset) {
          var dimArray = node.getData('dimArray');
          for(var i=0,l=dimArray.length,acum=config.sliceOffset; i<l; i++) {
            var dimi = dimArray[i];
            if(rho >= acum && rho <= acum + dimi) {
              return {
                name: node.getData('stringArray')[i],
                color: node.getData('colorArray')[i],
                value: node.getData('valueArray')[i],
                label: node.name
              };
            }
            acum += dimi;
          }
        }
        return false;
        
      }
      return false;
    }
  }
});

/*
  Class: PieChart
  
  A visualization that displays stacked bar charts.
  
  Constructor Options:
  
  See <Options.PieChart>.

*/
$jit.PieChart = new Class({
  sb: null,
  colors: ["#416D9C", "#70A35E", "#EBB056", "#C74243", "#83548B", "#909291", "#557EAA"],
  selected: {},
  busy: false,
  
  initialize: function(opt) {
    this.controller = this.config = 
      $.merge(Options("Canvas", "PieChart", "Label"), {
        Label: { type: 'Native' }
      }, opt);
    this.initializeViz();
  },
  
  initializeViz: function() {
    var config = this.config, that = this;
    var nodeType = config.type.split(":")[0];
    var delegate = new $jit.Sunburst({
      injectInto: config.injectInto,
      width: config.width,
      height: config.height,
      useCanvas: config.useCanvas,
      withLabels: config.Label.type != 'Native',
      Label: {
        type: config.Label.type
      },
      Node: {
        overridable: true,
        type: 'piechart-' + nodeType,
        width: 1,
        height: 1
      },
      Edge: {
        type: 'none'
      },
      Tips: {
        enable: config.Tips.enable,
        type: 'Native',
        force: true,
        onShow: function(tip, node, contains) {
          var elem = contains;
          config.Tips.onShow(tip, elem, node);
        }
      },
      Events: {
        enable: true,
        type: 'Native',
        onClick: function(node, eventInfo, evt) {
          if(!config.Events.enable) return;
          var elem = eventInfo.getContains();
          config.Events.onClick(elem, eventInfo, evt);
        },
        onMouseMove: function(node, eventInfo, evt) {
          if(!config.hoveredColor) return;
          if(node) {
            var elem = eventInfo.getContains();
            that.select(node.id, elem.name, elem.index);
          } else {
            that.select(false, false, false);
          }
        }
      },
      onCreateLabel: function(domElement, node) {
        var labelConf = config.Label;
        if(config.showLabels) {
          var style = domElement.style;
          style.fontSize = labelConf.size + 'px';
          style.fontFamily = labelConf.family;
          style.color = labelConf.color;
          style.textAlign = 'center';
          domElement.innerHTML = node.name;
        }
      },
      onPlaceLabel: function(domElement, node) {
        if(!config.showLabels) return;
        var pos = node.pos.getp(true),
            dimArray = node.getData('dimArray'),
            span = node.getData('span') / 2,
            theta = node.pos.theta,
            begin = theta - span,
            end = theta + span,
            polar = new Polar;
      
        var showLabels = config.showLabels,
            resizeLabels = config.resizeLabels,
            label = config.Label;
        
        if (dimArray) {
          for (var i=0, l=dimArray.length, acum=0; i<l; i++) {
            acum += dimArray[i];
          }
          var scale = resizeLabels? node.getData('normalizedDim') : 1,
              fontSize = (label.size * scale) >> 0;
          fontSize = fontSize < +resizeLabels? +resizeLabels : fontSize;
          domElement.style.fontSize = fontSize + 'px';
          polar.rho = acum + config.labelOffset + config.sliceOffset;
          polar.theta = (begin + end) / 2;
          var pos = polar.getc(true);
          var radius = that.canvas.getSize();
          var labelPos = {
            x: Math.round(pos.x + radius.width / 2),
            y: Math.round(pos.y + radius.height / 2)
          };
          domElement.style.left = labelPos.x + 'px';
          domElement.style.top = labelPos.y + 'px';
        }
      }
    });
    
    var size = delegate.canvas.getSize(),
        min = Math.min;
    delegate.config.levelDistance = min(size.width, size.height)/2 
      - config.offset - config.sliceOffset;
    this.delegate = delegate;
    this.canvas = this.delegate.canvas;
    this.canvas.getCtx().globalCompositeOperation = 'lighter';
  },
  
  /*
    Method: loadJSON
   
    Loads JSON data into the visualization. 
    
    Parameters:
    
    json - The JSON data format. This format is described in <http://blog.thejit.org/2010/04/24/new-javascript-infovis-toolkit-visualizations/#json-data-format>.
    
    Example:
    (start code js)
    var pieChart = new $jit.PieChart(options);
    pieChart.loadJSON(json);
    (end code)
  */  
  loadJSON: function(json) {
    var prefix = $.time(), 
        ch = [], 
        delegate = this.delegate,
        name = $.splat(json.label),
        nameLength = name.length,
        color = $.splat(json.color || this.colors),
        colorLength = color.length,
        config = this.config,
        gradient = !!config.type.split(":")[1],
        animate = config.animate,
        mono = nameLength == 1;
    
    for(var i=0, values=json.values, l=values.length; i<l; i++) {
      var val = values[i];
      var valArray = $.splat(val.values);
      ch.push({
        'id': prefix + val.label,
        'name': val.label,
        'data': {
          'value': valArray,
          '$valueArray': valArray,
          '$colorArray': mono? $.splat(color[i % colorLength]) : color,
          '$stringArray': name,
          '$gradient': gradient,
          '$config': config,
          '$angularWidth': $.reduce(valArray, function(x,y){return x+y;})
        },
        'children': []
      });
    }
    var root = {
      'id': prefix + '$root',
      'name': '',
      'data': {
        '$type': 'none',
        '$width': 1,
        '$height': 1
      },
      'children': ch
    };
    delegate.loadJSON(root);
    
    this.normalizeDims();
    delegate.refresh();
    if(animate) {
      delegate.fx.animate({
        modes: ['node-property:dimArray'],
        duration:1500
      });
    }
  },
  
  /*
    Method: updateJSON
   
    Use this method when updating values for the current JSON data. If the items specified by the JSON data already exist in the graph then their values will be updated.
    
    Parameters:
    
    json - (object) JSON data to be updated. The JSON format corresponds to the one described in <PieChart.loadJSON>.
    onComplete - (object) A callback object to be called when the animation transition when updating the data end.
    
    Example:
    
    (start code js)
    pieChart.updateJSON(json, {
      onComplete: function() {
        alert('update complete!');
      }
    });
    (end code)
  */  
  updateJSON: function(json, onComplete) {
    if(this.busy) return;
    this.busy = true;
    
    var delegate = this.delegate;
    var graph = delegate.graph;
    var values = json.values;
    var animate = this.config.animate;
    var that = this;
    $.each(values, function(v) {
      var n = graph.getByName(v.label),
          vals = $.splat(v.values);
      if(n) {
        n.setData('valueArray', vals);
        n.setData('angularWidth', $.reduce(vals, function(x,y){return x+y;}));
        if(json.label) {
          n.setData('stringArray', $.splat(json.label));
        }
      }
    });
    this.normalizeDims();
    if(animate) {
      delegate.compute('end');
      delegate.fx.animate({
        modes: ['node-property:dimArray:span', 'linear'],
        duration:1500,
        onComplete: function() {
          that.busy = false;
          onComplete && onComplete.onComplete();
        }
      });
    } else {
      delegate.refresh();
    }
  },
    
  //adds the little brown bar when hovering the node
  select: function(id, name) {
    if(!this.config.hoveredColor) return;
    var s = this.selected;
    if(s.id != id || s.name != name) {
      s.id = id;
      s.name = name;
      s.color = this.config.hoveredColor;
      this.delegate.graph.eachNode(function(n) {
        if(id == n.id) {
          n.setData('border', s);
        } else {
          n.setData('border', false);
        }
      });
      this.delegate.plot();
    }
  },
  
  /*
    Method: getLegend
   
    Returns an object containing as keys the legend names and as values hex strings with color values.
    
    Example:
    
    (start code js)
    var legend = pieChart.getLegend();
    (end code)
  */  
  getLegend: function() {
    var legend = {};
    var n;
    this.delegate.graph.getNode(this.delegate.root).eachAdjacency(function(adj) {
      n = adj.nodeTo;
    });
    var colors = n.getData('colorArray'),
        len = colors.length;
    $.each(n.getData('stringArray'), function(s, i) {
      legend[s] = colors[i % len];
    });
    return legend;
  },
  
  /*
    Method: getMaxValue
   
    Returns the maximum accumulated value for the stacks. This method is used for normalizing the graph heights according to the canvas height.
    
    Example:
    
    (start code js)
    var ans = pieChart.getMaxValue();
    (end code)
    
    In some cases it could be useful to override this method to normalize heights for a group of PieCharts, like when doing small multiples.
    
    Example:
    
    (start code js)
    //will return 100 for all PieChart instances,
    //displaying all of them with the same scale
    $jit.PieChart.implement({
      'getMaxValue': function() {
        return 100;
      }
    });
    (end code)
    
  */  
  getMaxValue: function() {
    var maxValue = 0;
    this.delegate.graph.eachNode(function(n) {
      var valArray = n.getData('valueArray'),
          acum = 0;
      $.each(valArray, function(v) { 
        acum += +v;
      });
      maxValue = maxValue>acum? maxValue:acum;
    });
    return maxValue;
  },
  
  normalizeDims: function() {
    //number of elements
    var root = this.delegate.graph.getNode(this.delegate.root), l=0;
    root.eachAdjacency(function() {
      l++;
    });
    var maxValue = this.getMaxValue() || 1,
        config = this.config,
        animate = config.animate,
        rho = this.delegate.config.levelDistance;
    this.delegate.graph.eachNode(function(n) {
      var acum = 0, animateValue = [];
      $.each(n.getData('valueArray'), function(v) {
        acum += +v;
        animateValue.push(1);
      });
      var stat = (animateValue.length == 1) && !config.updateHeights;
      if(animate) {
        n.setData('dimArray', $.map(n.getData('valueArray'), function(n) { 
          return stat? rho: (n * rho / maxValue); 
        }), 'end');
        var dimArray = n.getData('dimArray');
        if(!dimArray) {
          n.setData('dimArray', animateValue);
        }
      } else {
        n.setData('dimArray', $.map(n.getData('valueArray'), function(n) { 
          return stat? rho : (n * rho / maxValue); 
        }));
      }
      n.setData('normalizedDim', acum / maxValue);
    });
  }
});


/*
 * Class: Layouts.TM
 * 
 * Implements TreeMaps layouts (SliceAndDice, Squarified, Strip).
 * 
 * Implemented By:
 * 
 * <TM>
 * 
 */
Layouts.TM = {};

Layouts.TM.SliceAndDice = new Class({
  compute: function(prop) {
    var root = this.graph.getNode(this.clickedNode && this.clickedNode.id || this.root);
    this.controller.onBeforeCompute(root);
    var size = this.canvas.getSize(),
        config = this.config,
        width = size.width,
        height = size.height;
    this.graph.computeLevels(this.root, 0, "ignore");
    //set root position and dimensions
    root.getPos(prop).setc(-width/2, -height/2);
    root.setData('width', width, prop);
    root.setData('height', height + config.titleHeight, prop);
    this.computePositions(root, root, this.layout.orientation, prop);
    this.controller.onAfterCompute(root);
  },
  
  computePositions: function(par, ch, orn, prop) {
    //compute children areas
    var totalArea = 0;
    par.eachSubnode(function(n) {
      totalArea += n.getData('area', prop);
    });
    
    var config = this.config,
        offset = config.offset,
        width  = par.getData('width', prop),
        height = Math.max(par.getData('height', prop) - config.titleHeight, 0),
        fact = par == ch? 1 : (ch.getData('area', prop) / totalArea);

    var otherSize, size, dim, pos, pos2, posth, pos2th;
    var horizontal = (orn == "h");
    if(horizontal) {
      orn = 'v';
      otherSize = height;
      size = width * fact;
      dim = 'height';
      pos = 'y';
      pos2 = 'x';
      posth = config.titleHeight;
      pos2th = 0;
    } else {
      orn = 'h';    
      otherSize = height * fact;
      size = width;
      dim = 'width';
      pos = 'x';
      pos2 = 'y';
      posth = 0;
      pos2th = config.titleHeight;
    }
    var cpos = ch.getPos(prop);
    ch.setData('width', size, prop);
    ch.setData('height', otherSize, prop);
    var offsetSize = 0, tm = this;
    ch.eachSubnode(function(n) {
      var p = n.getPos(prop);
      p[pos] = offsetSize + cpos[pos] + posth;
      p[pos2] = cpos[pos2] + pos2th;
      tm.computePositions(ch, n, orn, prop);
      offsetSize += n.getData(dim, prop);
    });
  }

});

Layouts.TM.Area = {
 /*
    Method: compute
 
   Called by loadJSON to calculate recursively all node positions and lay out the tree.
 
    Parameters:

       json - A JSON tree. See also <Loader.loadJSON>.
       coord - A coordinates object specifying width, height, left and top style properties.
 */
 compute: function(prop) {
    prop = prop || "current";
    var root = this.graph.getNode(this.clickedNode && this.clickedNode.id || this.root);
    this.controller.onBeforeCompute(root);
    var config = this.config,
        size = this.canvas.getSize(),
        width = size.width,
        height = size.height,
        offst = config.offset,
        offwdth = width - offst,
        offhght = height - offst;
    this.graph.computeLevels(this.root, 0, "ignore");
    //set root position and dimensions
    root.getPos(prop).setc(-width/2, -height/2);
    root.setData('width', width, prop);
    root.setData('height', height, prop);
    //create a coordinates object
    var coord = {
        'top': -height/2 + config.titleHeight + offst / 2,
        'left': -width/2 + offst / 2,
        'width': offwdth,
        'height': offhght - config.titleHeight
    };
    this.computePositions(root, coord, prop);
    this.controller.onAfterCompute(root);
 }, 
 
 /*
    Method: computeDim
 
   Computes dimensions and positions of a group of nodes
   according to a custom layout row condition. 
 
    Parameters:

       tail - An array of nodes.  
       initElem - An array of nodes (containing the initial node to be laid).
       w - A fixed dimension where nodes will be layed out.
       coord - A coordinates object specifying width, height, left and top style properties.
       comp - A custom comparison function
 */
 computeDim: function(tail, initElem, w, coord, comp, prop) {
   if(tail.length + initElem.length == 1) {
     var l = (tail.length == 1)? tail : initElem;
     this.layoutLast(l, w, coord, prop);
     return;
   }
   if(tail.length >= 2 && initElem.length == 0) {
     initElem = [tail.shift()];
   }
   if(tail.length == 0) {
     if(initElem.length > 0) this.layoutRow(initElem, w, coord, prop);
     return;
   }
   var c = tail[0];
   if(comp(initElem, w) >= comp([c].concat(initElem), w)) {
     this.computeDim(tail.slice(1), initElem.concat([c]), w, coord, comp, prop);
   } else {
     var newCoords = this.layoutRow(initElem, w, coord, prop);
     this.computeDim(tail, [], newCoords.dim, newCoords, comp, prop);
   }
 },

 
 /*
    Method: worstAspectRatio
 
   Calculates the worst aspect ratio of a group of rectangles. 
       
    See also:
       
       <http://en.wikipedia.org/wiki/Aspect_ratio>
   
    Parameters:

     ch - An array of nodes.  
     w  - The fixed dimension where rectangles are being laid out.

    Returns:
 
        The worst aspect ratio.


 */
 worstAspectRatio: function(ch, w) {
   if(!ch || ch.length == 0) return Number.MAX_VALUE;
   var areaSum = 0, maxArea = 0, minArea = Number.MAX_VALUE;
   for(var i=0, l=ch.length; i<l; i++) {
     var area = ch[i]._area;
     areaSum += area; 
     minArea = minArea < area? minArea : area;
     maxArea = maxArea > area? maxArea : area; 
   }
   var sqw = w * w, sqAreaSum = areaSum * areaSum;
   return Math.max(sqw * maxArea / sqAreaSum,
           sqAreaSum / (sqw * minArea));
 },
 
 /*
    Method: avgAspectRatio
 
   Calculates the average aspect ratio of a group of rectangles. 
       
       See also:
       
       <http://en.wikipedia.org/wiki/Aspect_ratio>
   
    Parameters:

     ch - An array of nodes.  
       w - The fixed dimension where rectangles are being laid out.

    Returns:
 
        The average aspect ratio.


 */
 avgAspectRatio: function(ch, w) {
   if(!ch || ch.length == 0) return Number.MAX_VALUE;
   var arSum = 0;
   for(var i=0, l=ch.length; i<l; i++) {
     var area = ch[i]._area;
     var h = area / w;
     arSum += w > h? w / h : h / w;
   }
   return arSum / l;
 },

 /*
    layoutLast
 
   Performs the layout of the last computed sibling.
 
    Parameters:

       ch - An array of nodes.  
       w - A fixed dimension where nodes will be layed out.
     coord - A coordinates object specifying width, height, left and top style properties.
 */
 layoutLast: function(ch, w, coord, prop) {
   var child = ch[0];
   child.getPos(prop).setc(coord.left, coord.top);
   child.setData('width', coord.width, prop);
   child.setData('height', coord.height, prop);
 }
};


Layouts.TM.Squarified = new Class({
 Implements: Layouts.TM.Area,
 
 computePositions: function(node, coord, prop) {
   var config = this.config, 
       max = Math.max;
   
   if (coord.width >= coord.height) 
     this.layout.orientation = 'h';
   else
     this.layout.orientation = 'v';
   
   var ch = node.getSubnodes([1, 1], "ignore");
   if(ch.length > 0) {
     this.processChildrenLayout(node, ch, coord, prop);
     for(var i=0, l=ch.length; i<l; i++) {
       var chi = ch[i], 
           offst = config.offset,
           height = max(chi.getData('height', prop) - offst - config.titleHeight, 0),
           width = max(chi.getData('width', prop) - offst, 0),
           chipos = chi.getPos(prop);

       coord = {
         'width': width,
         'height': height,
         'top': chipos.y + config.titleHeight + offst / 2,
         'left': chipos.x + offst / 2
       };
       this.computePositions(chi, coord, prop);
     }
   }
 },

 /*
    Method: processChildrenLayout
 
   Computes children real areas and other useful parameters for performing the Squarified algorithm.
 
    Parameters:

       par - The parent node of the json subtree.  
       ch - An Array of nodes
     coord - A coordinates object specifying width, height, left and top style properties.
 */
 processChildrenLayout: function(par, ch, coord, prop) {
   //compute children real areas
   var parentArea = coord.width * coord.height;
   var i, l=ch.length, totalChArea=0, chArea = [];
   for(i=0; i<l; i++) {
     chArea[i] = parseFloat(ch[i].getData('area', prop));
     totalChArea += chArea[i];
   }
   for(i=0; i<l; i++) {
     ch[i]._area = parentArea * chArea[i] / totalChArea;
   }
   var minimumSideValue = this.layout.horizontal()? coord.height : coord.width;
   ch.sort(function(a, b) { 
     var diff = b._area - a._area; 
     return diff? diff : (b.id == a.id? 0 : (b.id < a.id? 1 : -1)); 
   });
   var initElem = [ch[0]];
   var tail = ch.slice(1);
   this.squarify(tail, initElem, minimumSideValue, coord, prop);
 },

 /*
   Method: squarify
 
   Performs an heuristic method to calculate div elements sizes in order to have a good aspect ratio.
 
    Parameters:

       tail - An array of nodes.  
       initElem - An array of nodes, containing the initial node to be laid out.
       w - A fixed dimension where nodes will be laid out.
       coord - A coordinates object specifying width, height, left and top style properties.
 */
 squarify: function(tail, initElem, w, coord, prop) {
   this.computeDim(tail, initElem, w, coord, this.worstAspectRatio, prop);
 },
 
 /*
    Method: layoutRow
 
   Performs the layout of an array of nodes.
 
    Parameters:

       ch - An array of nodes.  
       w - A fixed dimension where nodes will be laid out.
       coord - A coordinates object specifying width, height, left and top style properties.
 */
 layoutRow: function(ch, w, coord, prop) {
   if(this.layout.horizontal()) {
     return this.layoutV(ch, w, coord, prop);
   } else {
     return this.layoutH(ch, w, coord, prop);
   }
 },
 
layoutV: function(ch, w, coord, prop) {
   var totalArea = 0, rnd = function(x) { return x; };
   $.each(ch, function(elem) { totalArea += elem._area; });
   var width = rnd(totalArea / w) || 0, top =  0;
   for(var i=0, l=ch.length; i<l; i++) {
     var h = rnd(ch[i]._area / width) || 0;
     var chi = ch[i];

     var posx = $.getDir() === 'rtl' ? (-1 * coord.left)-width : coord.left;

     chi.getPos(prop).setc(posx, coord.top + top);
     chi.setData('width', width, prop);
     chi.setData('height', h, prop);
     top += h;
   }
   var ans = {
     'height': coord.height,
     'width': coord.width - width,
     'top': coord.top,
     'left': coord.left + width
   };
   //take minimum side value.
   ans.dim = Math.min(ans.width, ans.height);
   if(ans.dim != ans.height) this.layout.change();
   return ans;
 },

 layoutH: function(ch, w, coord, prop) {
   var totalArea = 0;
   $.each(ch, function(elem) { totalArea += elem._area; });
   var height = totalArea / w || 0,
       top = coord.top,
       left = 0;

   for(var i=0, l=ch.length; i<l; i++) {
     var chi = ch[i];
     var w = chi._area / height || 0;

     var posx = $.getDir() === 'rtl' ? 
	   (-1 * (coord.left + left)) - w : coord.left + left;

     chi.getPos(prop).setc(posx, top);
     chi.setData('width', w, prop);
     chi.setData('height', height, prop);
     left += w;
   }
   var ans = {
     'height': coord.height - height,
     'width': coord.width,
     'top': coord.top + height,
     'left': coord.left
   };
   ans.dim = Math.min(ans.width, ans.height);
   if(ans.dim != ans.width) this.layout.change();
   return ans;
 },

 /*
    layoutLast
 
   Performs the layout of the last computed sibling with respect to direction
 
    Parameters:

       ch - An array of nodes.  
       w - A fixed dimension where nodes will be layed out.
     coord - A coordinates object specifying width, height, left and top style properties (assumes ltr direction).
 */
 layoutLast: function(ch, w, coord, prop) {
   var child = ch[0];

   var posx = $.getDir() === 'rtl' ? -1*coord.left-coord.width: coord.left;

   child.getPos(prop).setc(posx, coord.top);
   child.setData('width', coord.width, prop);
   child.setData('height', coord.height, prop);
 }

});

Layouts.TM.Strip = new Class({
  Implements: Layouts.TM.Area,

    /*
      Method: compute
    
     Called by loadJSON to calculate recursively all node positions and lay out the tree.
    
      Parameters:
    
         json - A JSON subtree. See also <Loader.loadJSON>. 
       coord - A coordinates object specifying width, height, left and top style properties.
    */
    computePositions: function(node, coord, prop) {
     var  ch = node.getSubnodes([1, 1], "ignore"), 
          config = this.config,
          max = Math.max;
     if(ch.length > 0) {
       this.processChildrenLayout(node, ch, coord, prop);
       for(var i=0, l=ch.length; i<l; i++) {
         var chi = ch[i];
         var offst = config.offset,
             height = max(chi.getData('height', prop) - offst - config.titleHeight, 0),
             width  = max(chi.getData('width', prop)  - offst, 0);
         var chipos = chi.getPos(prop);
         coord = {
           'width': width,
           'height': height,
           'top': chipos.y + config.titleHeight + offst / 2,
           'left': chipos.x + offst / 2
         };
         this.computePositions(chi, coord, prop);
       }
     }
    },
    
    /*
      Method: processChildrenLayout
    
     Computes children real areas and other useful parameters for performing the Strip algorithm.
    
      Parameters:
    
         par - The parent node of the json subtree.  
         ch - An Array of nodes
         coord - A coordinates object specifying width, height, left and top style properties.
    */
    processChildrenLayout: function(par, ch, coord, prop) {
     //compute children real areas
      var parentArea = coord.width * coord.height;
      var i, l=ch.length, totalChArea=0, chArea = [];
      for(i=0; i<l; i++) {
        chArea[i] = +ch[i].getData('area', prop);
        totalChArea += chArea[i];
      }
      for(i=0; i<l; i++) {
        ch[i]._area = parentArea * chArea[i] / totalChArea;
      }
     var side = this.layout.horizontal()? coord.width : coord.height;
     var initElem = [ch[0]];
     var tail = ch.slice(1);
     this.stripify(tail, initElem, side, coord, prop);
    },
    
    /*
      Method: stripify
    
     Performs an heuristic method to calculate div elements sizes in order to have 
     a good compromise between aspect ratio and order.
    
      Parameters:
    
         tail - An array of nodes.  
         initElem - An array of nodes.
         w - A fixed dimension where nodes will be layed out.
       coord - A coordinates object specifying width, height, left and top style properties.
    */
    stripify: function(tail, initElem, w, coord, prop) {
     this.computeDim(tail, initElem, w, coord, this.avgAspectRatio, prop);
    },
    
    /*
      Method: layoutRow
    
     Performs the layout of an array of nodes.
    
      Parameters:
    
         ch - An array of nodes.  
         w - A fixed dimension where nodes will be laid out.
         coord - A coordinates object specifying width, height, left and top style properties.
    */
    layoutRow: function(ch, w, coord, prop) {
     if(this.layout.horizontal()) {
       return this.layoutH(ch, w, coord, prop);
     } else {
       return this.layoutV(ch, w, coord, prop);
     }
    },
    
    layoutV: function(ch, w, coord, prop) {
     var totalArea = 0; 
     $.each(ch, function(elem) { totalArea += elem._area; });
     var width = totalArea / w || 0, top =  0;
     for(var i=0, l=ch.length; i<l; i++) {
       var chi = ch[i];
       var h = chi._area / width || 0;
       chi.getPos(prop).setc(coord.left, 
           coord.top + (w - h - top));
       chi.setData('width', width, prop);
       chi.setData('height', h, prop);
       top += h;
     }
    
     return {
       'height': coord.height,
       'width': coord.width - width,
       'top': coord.top,
       'left': coord.left + width,
       'dim': w
     };
    },
    
    layoutH: function(ch, w, coord, prop) {
     var totalArea = 0; 
     $.each(ch, function(elem) { totalArea += elem._area; });
     var height = totalArea / w || 0,
         top = coord.height - height, 
         left = 0;
     
     for(var i=0, l=ch.length; i<l; i++) {
       var chi = ch[i];
       var s = chi._area / height || 0;
       chi.getPos(prop).setc(coord.left + left, coord.top + top);
       chi.setData('width', s, prop);
       chi.setData('height', height, prop);
       left += s;
     }
     return {
       'height': coord.height - height,
       'width': coord.width,
       'top': coord.top,
       'left': coord.left,
       'dim': w
     };
    }
 });


Layouts.TM.Voronoi = new Class({
  Implements : Layouts.TM.Area,
  compute : function(prop) {
    this.controller.onBeforeCompute(root);
    var root = this.graph.getNode(this.clickedNode && this.clickedNode.id || this.root),
        size = this.canvas.getSize(),
        config = this.config,
        offset = config.offset,
        width = size.width,
        height = size.height;

    this.graph.computeLevels(this.root, 0, 0);

    // set root position and dimensions
    root.getPos(prop).setc(-5, -5);
    if (!root.histoPos) {
      root.histoPos = [];
    }
    root.histoPos[0] = $C(0, 0);
    var bound = [
      $C(-width * 0.5, -height * 0.5),
      $C(width * 0.5, -height * 0.5),
      $C(width * 0.5, height * 0.5),
      $C(-width * 0.5, height * 0.5)
    ];
    bound = Geometry.offsetConvex(bound, -offset * 0.5);
    root.setData('vertices', bound, prop);
    root.setData('width', 0, prop);
    root.setData('height', 0, prop);

    bound = Geometry.offsetConvex(bound, -offset * 1.5);
    this.computePositions(root, bound, prop, 0);
    this.controller.onAfterCompute(root);
  },


  computePositions : function(node, bound, prop, level) {
    var me = this,
        chs = node.getSubnodes([ 1, 1 ], "ignore"),
        config = this.config,
        offset = config.offset,
        historyPosition = node.histoPos[level] || c(0, 0),
        sites,
        polygons;

    node.setData('width', 0, prop);
    node.setData('height', 0, prop);
    node.getPos(prop).setc(historyPosition.x, historyPosition.y);

    if (chs.length > 0) {
      if (!chs[0].histoPos || !chs[0].histoPos[level + 1]) {
        sites = $jit.util.map(chs, function(ch) {
          var pt = Geometry.randPointInPolygon(bound);
          if (ch.data && ch.data.$area)
            pt.area = ch.data.$area;
          return pt;
        });
        sites = me[me.config.centroidType](sites, bound);
        $jit.util.each(sites, function(p, i) {
          if (!chs[i].histoPos) {
            chs[i].histoPos = [];
          }
          chs[i].histoPos[level + 1] = p;
        });
      }
      sites = $jit.util.map(chs, function(ch) {
        return ch.histoPos[level + 1];
      });
      polygons = Geometry.voronoi(sites, bound);

      $jit.util.each(chs, function(ch, i) {
        var vertices = polygons[i];
        var newBoundary = vertices.slice(0);
        if (Geometry.area(vertices) < 0) {
          vertices.reverse();
        }
        if (offset) {
          newBoundary = Geometry.offsetConvex(vertices, -offset * 2);
          vertices = Geometry.offsetConvex(vertices, -offset * 0.5);
          ch.offset = offset;
        }
        ch.setData('vertices', vertices, prop);
        me.computePositions(ch, newBoundary, prop, level + 1);
      });
    }
  },

  centroid : function(sites, bound) {
    var tdist = 2, polygons;
    while (tdist > 1e-3) {
      polygons = Geometry.voronoi(sites, bound);
      tdist = 0;
      sites = polygons.map(function(p, j) {
        var c = Geometry.centroid(p);
        tdist += Geometry.dist2(c, sites[j]);
        return c;
      });
    }
    return sites;
  },

  doLayoutPressure: function () {
    var me = this,
        root = me.graph.getNode(me.clickedNode && me.clickedNode.id || me.root);
    root.eachNode(function() {

    });
  },
  
  weightedCentroid : function(sites, bound) {
    // sites = this.centroid(sites, bound);
    var pascal = [];
    var tdist = 2, polygons, totalArea = Geometry.area(bound), totalWeight = 0, adjust;
    $.each(sites, function(site, i) {
      totalWeight += site.area;
    });
    adjust = totalArea / totalWeight;
    polygons = Geometry.voronoi(sites, bound);
    $.each(polygons, function(p, i) {
        pascal[i] = sites[i].area * adjust / Geometry.area(p);
      });
    var s = 0, s2 = 0;
    $.each(pascal, function(p, i) {
      s += p;
      s2 += p * p;
    });
    console.log('from ' + (s2 - s * s / pascal.length) / pascal.length);
    while (tdist > 1e-3) {
      polygons = Geometry.voronoi(sites, bound);
      $.each(polygons, function(p, i) {
        pascal[i] = sites[i].area * adjust / Geometry.area(p);
      });
      tdist = 0;
      sites = polygons.map(function(p, j) {
        var c = $C(0, 0), totalW = 0;
        $.each(p, function(v, i) {
          var poly = [sites[j], v, p[i + 1] || p[0]],
              targetPascal = (v.attached) ? pascal[v.attached[0]] : 1,
              w = Geometry.area(poly) * Math.exp((pascal[j] - targetPascal) * 2);
          totalW += w;
          c.$add(v.add(poly[2]).scale(0.5 * w));
        });
        c.$scale(1 / totalW);
        c.area = sites[j].area;
        tdist += Geometry.dist(c, sites[j]);
        return c;
      });
    }
    var s = 0, s2 = 0;
    $.each(pascal, function(p, i) {
      s += p;
      s2 += p * p;
    });
    console.log('to ' + (s2 - s * s / pascal.length) / pascal.length);
    return sites;
  },

  byArea : function(sites, bound) {
    sites = this.centroid(sites, bound);
    var tw = 0, iter = 0, polygons, pressure, polygons;
    $jit.util.each(sites, function(s) {
      tw += s.area;
    });
    tw = Geometry.area(bound) / tw;
    for (; iter < 100; iter++) {
      polygons = Geometry.voronoi(sites, bound);
      for (var j = 0; j < sites.length; j++) {
        if (polygons[j].length == 0) {
          sites = polygons.map(function(p, j) {
            return Geometry.centroid(p);
          });
          // iter = 1;
          break;
        }
      }
      pressure = polygons.map(function(p, ind) {
        return p.area * tw / (Geometry.area(p) + 1e-10);
      });
      polygons = Geometry.voronoi(sites, bound);
      sites = polygons.map(function(p, ind) {
        var po = $C(sites[ind].x, sites[ind].y), totalPressure, i;
        po.area = sites[ind].area;
        totalPressure = $C(0, 0);
        $jit.util.each(p, function(v, i) {
          var target = (v.attached) ? v.attached : -1,
              targetPressure = (v.attached) ? pressure[v.attached[0]] : 1,
              start = v,
              stop = p[i + 1] || p[0],
              pr = (pressure[ind] - targetPressure),
              dx = stop.x - start.x,
              dy = stop.y - start.y;
          totalPressure.x += dy * pr;
          totalPressure.y -= dx * pr;
        });
        po.x += totalPressure.x / 10;
        po.y += totalPressure.y / 10;
        po.tp = totalPressure;
        return po;
      });
    }
    return sites;
  }
});


/*
 * Class: Layouts.Icicle
 *
 * Implements the icicle tree layout.
 *
 * Implemented By:
 *
 * <Icicle>
 *
 */

Layouts.Icicle = new Class({
 /*
  * Method: compute
  *
  * Called by loadJSON to calculate all node positions.
  *
  * Parameters:
  *
  * posType - The nodes' position to compute. Either "start", "end" or
  *            "current". Defaults to "current".
  */
  compute: function(posType) {
    posType = posType || "current";

    var root = this.graph.getNode(this.root),
        config = this.config,
        size = this.canvas.getSize(),
        width = size.width,
        height = size.height,
        offset = config.offset,
        levelsToShow = config.constrained ? config.levelsToShow : Number.MAX_VALUE;

    this.controller.onBeforeCompute(root);

    Graph.Util.computeLevels(this.graph, root.id, 0, "ignore");

    var treeDepth = 0;

    Graph.Util.eachLevel(root, 0, false, function (n, d) { if(d > treeDepth) treeDepth = d; });

    var startNode = this.graph.getNode(this.clickedNode && this.clickedNode.id || root.id);
    var maxDepth = Math.min(treeDepth, levelsToShow-1);
    var initialDepth = startNode._depth;
    if(this.layout.horizontal()) {
      this.computeSubtree(startNode, -width/2, -height/2, width/(maxDepth+1), height, initialDepth, maxDepth, posType);
    } else {
      this.computeSubtree(startNode, -width/2, -height/2, width, height/(maxDepth+1), initialDepth, maxDepth, posType);
    }
  },

  computeSubtree: function (root, x, y, width, height, initialDepth, maxDepth, posType) {
    root.getPos(posType).setc(x, y);
    root.setData('width', width, posType);
    root.setData('height', height, posType);

    var nodeLength, prevNodeLength = 0, totalDim = 0;
    var children = Graph.Util.getSubnodes(root, [1, 1], 'ignore'); // next level from this node

    if(!children.length)
      return;

    $.each(children, function(e) { totalDim += e.getData('dim'); });

    for(var i=0, l=children.length; i < l; i++) {
      if(this.layout.horizontal()) {
        nodeLength = height * children[i].getData('dim') / totalDim;
        this.computeSubtree(children[i], x+width, y, width, nodeLength, initialDepth, maxDepth, posType);
        y += nodeLength;
      } else {
        nodeLength = width * children[i].getData('dim') / totalDim;
        this.computeSubtree(children[i], x, y+height, nodeLength, height, initialDepth, maxDepth, posType);
        x += nodeLength;
      }
    }
  }
});



/*
 * File: Icicle.js
 *
*/

/*
  Class: Icicle
  
  Icicle space filling visualization.
  
  Implements:
  
  All <Loader> methods
  
  Constructor Options:
  
  Inherits options from
  
  - <Options.Canvas>
  - <Options.Controller>
  - <Options.Node>
  - <Options.Edge>
  - <Options.Label>
  - <Options.Events>
  - <Options.Tips>
  - <Options.NodeStyles>
  - <Options.Navigation>
  
  Additionally, there are other parameters and some default values changed

  orientation - (string) Default's *h*. Whether to set horizontal or vertical layouts. Possible values are 'h' and 'v'.
  offset - (number) Default's *2*. Boxes offset.
  constrained - (boolean) Default's *false*. Whether to show the entire tree when loaded or just the number of levels specified by _levelsToShow_.
  levelsToShow - (number) Default's *3*. The number of levels to show for a subtree. This number is relative to the selected node.
  animate - (boolean) Default's *false*. Whether to animate transitions.
  Node.type - Described in <Options.Node>. Default's *rectangle*.
  Label.type - Described in <Options.Label>. Default's *Native*.
  duration - Described in <Options.Fx>. Default's *700*.
  fps - Described in <Options.Fx>. Default's *45*.
  
  Instance Properties:
  
  canvas - Access a <Canvas> instance.
  graph - Access a <Graph> instance.
  op - Access a <Icicle.Op> instance.
  fx - Access a <Icicle.Plot> instance.
  labels - Access a <Icicle.Label> interface implementation.

*/

$jit.Icicle = new Class({
  Implements: [ Loader, Extras, Layouts.Icicle ],

  layout: {
    orientation: "h",
    vertical: function(){
      return this.orientation == "v";
    },
    horizontal: function(){
      return this.orientation == "h";
    },
    change: function(){
      this.orientation = this.vertical()? "h" : "v";
    }
  },

  initialize: function(controller) {
    var config = {
      animate: false,
      orientation: "h",
      offset: 2,
      levelsToShow: Number.MAX_VALUE,
      constrained: false,
      Node: {
        type: 'rectangle',
        overridable: true
      },
      Edge: {
        type: 'none'
      },
      Label: {
        type: 'Native'
      },
      duration: 700,
      fps: 45
    };

    var opts = Options("Canvas", "Node", "Edge", "Fx", "Tips", "NodeStyles",
                       "Events", "Navigation", "Controller", "Label");
    this.controller = this.config = $.merge(opts, config, controller);
    this.layout.orientation = this.config.orientation;

    var canvasConfig = this.config;
    if (canvasConfig.useCanvas) {
      this.canvas = canvasConfig.useCanvas;
      this.config.labelContainer = this.canvas.id + '-label';
    } else {
      this.canvas = new Canvas(this, canvasConfig);
      this.config.labelContainer = (typeof canvasConfig.injectInto == 'string'? canvasConfig.injectInto : canvasConfig.injectInto.id) + '-label';
    }

    this.graphOptions = {
      'klass': Complex,
      'Node': {
        'selected': false,
        'exist': true,
        'drawn': true
      }
    };

    this.graph = new Graph(
      this.graphOptions, this.config.Node, this.config.Edge, this.config.Label);

    this.labels = new $jit.Icicle.Label[this.config.Label.type](this);
    this.fx = new $jit.Icicle.Plot(this, $jit.Icicle);
    this.op = new $jit.Icicle.Op(this);
    this.group = new $jit.Icicle.Group(this);
    this.clickedNode = null;

    this.initializeExtras();
  },

  /* 
    Method: refresh 
    
    Computes positions and plots the tree.
  */
  refresh: function(){
    var labelType = this.config.Label.type;
    if(labelType != 'Native') {
      var that = this;
      this.graph.eachNode(function(n) { that.labels.hideLabel(n, false); });
    }
    this.compute();
    this.plot();
  },

  /* 
    Method: plot 
    
    Plots the Icicle visualization. This is a shortcut to *fx.plot*. 
  
   */
  plot: function(){
    this.fx.plot(this.config);
  },

  /* 
    Method: enter 
    
    Sets the node as root.
    
     Parameters:
     
     node - (object) A <Graph.Node>.
  
   */
  enter: function (node) {
    if (this.busy)
      return;
    this.busy = true;

    var that = this,
        config = this.config,
        clickedNode = node;

    var callback = {
      onComplete: function() {
        //compute positions of newly inserted nodes
        if(config.request)
          that.compute();

        if(config.animate) {
          that.graph.nodeList.setDataset(['current', 'end'], {
            'alpha': [1, 0] //fade nodes
          });

          Graph.Util.eachSubgraph(node, function(n) {
            n.setData('alpha', 1, 'end');
          }, "ignore");

          that.fx.animate({
            duration: 500,
            modes:['node-property:alpha'],
            onComplete: function() {
              that.clickedNode = node;
              that.compute('end');

              that.fx.animate({
                modes:['linear', 'node-property:width:height'],
                duration: 1000,
                onComplete: function() {
                  that.busy = false;
                  that.clickedNode = node;
                }
              });
            }
          });
        } else {
          that.clickedNode = node;
          that.busy = false;
          that.refresh();
        }
      }
    };

    if(config.request) {
      this.requestNodes(node, callback);
    } else {
      callback.onComplete();
    }
  },

  /* 
    Method: out 
    
    Sets the parent node of the current selected node as root.
  
   */
  out: function(){
    if(this.busy)
      return;

    var that = this,
        GUtil = Graph.Util,
        config = this.config,
        graph = this.graph,
        parents = GUtil.getParents(graph.getNode(this.clickedNode && this.clickedNode.id || this.root)),
        parent = parents[0],
        clickedNode = parent,
        previousClickedNode = this.clickedNode,
        callback;

    this.busy = true;
    this.events.hoveredNode = false;

    if(!parent) {
      this.busy = false;
      return;
    }

    //final plot callback
    callback = {
      onComplete: function() {
        that.clickedNode = parent;
        if(config.request) {
          that.requestNodes(parent, {
            onComplete: function() {
              that.compute();
              that.plot();
              that.busy = false;
            }
          });
        } else {
          that.compute();
          that.plot();
          that.busy = false;
        }
      }
    };

    //animate node positions
    if(config.animate) {
      this.clickedNode = clickedNode;
      this.compute('end');
      //animate the visible subtree only
      this.clickedNode = previousClickedNode;
      this.fx.animate({
        modes:['linear', 'node-property:width:height'],
        duration: 1000,
        onComplete: function() {
          //animate the parent subtree
          that.clickedNode = clickedNode;
          //change nodes alpha
          graph.nodeList.setDataset(['current', 'end'], {
            'alpha': [0, 1]
          });
          GUtil.eachSubgraph(previousClickedNode, function(node) {
            node.setData('alpha', 1);
          }, "ignore");
          that.fx.animate({
            duration: 500,
            modes:['node-property:alpha'],
            onComplete: function() {
              callback.onComplete();
            }
          });
        }
      });
    } else {
      callback.onComplete();
    }
  },
  requestNodes: function(node, onComplete){
    var handler = $.merge(this.controller, onComplete),
        levelsToShow = this.config.constrained ? this.config.levelsToShow : Number.MAX_VALUE;

    if (handler.request) {
      var leaves = [], d = node._depth;
      Graph.Util.eachLevel(node, 0, levelsToShow, function(n){
        if (n.drawn && !Graph.Util.anySubnode(n)) {
          leaves.push(n);
          n._level = n._depth - d;

        }
      });
      this.group.requestNodes(leaves, handler);
    } else {
      handler.onComplete();
    }
  }
});

/*
  Class: Icicle.Op
  
  Custom extension of <Graph.Op>.
  
  Extends:
  
  All <Graph.Op> methods
  
  See also:
  
  <Graph.Op>
  
  */
$jit.Icicle.Op = new Class({

  Implements: Graph.Op

});

/*
 * Performs operations on group of nodes.
 */
$jit.Icicle.Group = new Class({

  initialize: function(viz){
    this.viz = viz;
    this.canvas = viz.canvas;
    this.config = viz.config;
  },

  /*
   * Calls the request method on the controller to request a subtree for each node.
   */
  requestNodes: function(nodes, controller){
    var counter = 0, len = nodes.length, nodeSelected = {};
    var complete = function(){
      controller.onComplete();
    };
    var viz = this.viz;
    if (len == 0)
      complete();
    for(var i = 0; i < len; i++) {
      nodeSelected[nodes[i].id] = nodes[i];
      controller.request(nodes[i].id, nodes[i]._level, {
        onComplete: function(nodeId, data){
          if (data && data.children) {
            data.id = nodeId;
            viz.op.sum(data, {
              type: 'nothing'
            });
          }
          if (++counter == len) {
            Graph.Util.computeLevels(viz.graph, viz.root, 0);
            complete();
          }
        }
      });
    }
  }
});

/*
  Class: Icicle.Plot
  
  Custom extension of <Graph.Plot>.
  
  Extends:
  
  All <Graph.Plot> methods
  
  See also:
  
  <Graph.Plot>
  
  */
$jit.Icicle.Plot = new Class({
  Implements: Graph.Plot,

  plot: function(opt, animating){
    opt = opt || this.viz.controller;
    var viz = this.viz,
        graph = viz.graph,
        root = graph.getNode(viz.clickedNode && viz.clickedNode.id || viz.root),
        initialDepth = root._depth;

    viz.canvas.clear();
    this.plotTree(root, $.merge(opt, {
      'withLabels': true,
      'hideLabels': false,
      'plotSubtree': function(root, node) {
        return !viz.config.constrained ||
               (node._depth - initialDepth < viz.config.levelsToShow);
      }
    }), animating);
  }
});

/*
  Class: Icicle.Label
  
  Custom extension of <Graph.Label>. 
  Contains custom <Graph.Label.SVG>, <Graph.Label.HTML> and <Graph.Label.Native> extensions.
  
  Extends:
  
  All <Graph.Label> methods and subclasses.
  
  See also:
  
  <Graph.Label>, <Graph.Label.Native>, <Graph.Label.HTML>, <Graph.Label.SVG>.
  
  */
$jit.Icicle.Label = {};

/*
  Icicle.Label.Native
  
  Custom extension of <Graph.Label.Native>.
  
  Extends:
  
  All <Graph.Label.Native> methods
  
  See also:
  
  <Graph.Label.Native>

  */
$jit.Icicle.Label.Native = new Class({
  Implements: Graph.Label.Native,

  renderLabel: function(canvas, node, controller) {
    var ctx = canvas.getCtx(),
        width = node.getData('width'),
        height = node.getData('height'),
        size = node.getLabelData('size'),
        m = ctx.measureText(node.name);

    // Guess as much as possible if the label will fit in the node
    if(height < (size * 1.5) || width < m.width)
      return;

    var pos = node.pos.getc(true);
    ctx.fillText(node.name,
                 pos.x + width / 2,
                 pos.y + height / 2);
  }
});

/*
  Icicle.Label.SVG
  
  Custom extension of <Graph.Label.SVG>.
  
  Extends:
  
  All <Graph.Label.SVG> methods
  
  See also:
  
  <Graph.Label.SVG>
*/
$jit.Icicle.Label.SVG = new Class( {
  Implements: Graph.Label.SVG,

  initialize: function(viz){
    this.viz = viz;
  },

  /*
    placeLabel
   
    Overrides abstract method placeLabel in <Graph.Plot>.
   
    Parameters:
   
    tag - A DOM label element.
    node - A <Graph.Node>.
    controller - A configuration/controller object passed to the visualization.
   */
  placeLabel: function(tag, node, controller){
    var pos = node.pos.getc(true), canvas = this.viz.canvas;
    var radius = canvas.getSize();
    var labelPos = {
      x: Math.round(pos.x + radius.width / 2),
      y: Math.round(pos.y + radius.height / 2)
    };
    tag.setAttribute('x', labelPos.x);
    tag.setAttribute('y', labelPos.y);

    controller.onPlaceLabel(tag, node);
  }
});

/*
  Icicle.Label.HTML
  
  Custom extension of <Graph.Label.HTML>.
  
  Extends:
  
  All <Graph.Label.HTML> methods.
  
  See also:
  
  <Graph.Label.HTML>
  
  */
$jit.Icicle.Label.HTML = new Class( {
  Implements: Graph.Label.HTML,

  initialize: function(viz){
    this.viz = viz;
  },

  /*
    placeLabel
   
    Overrides abstract method placeLabel in <Graph.Plot>.
   
    Parameters:
   
    tag - A DOM label element.
    node - A <Graph.Node>.
    controller - A configuration/controller object passed to the visualization.
   */
  placeLabel: function(tag, node, controller){
    var pos = node.pos.getc(true), canvas = this.viz.canvas;
    var radius = canvas.getSize();
    var labelPos = {
      x: Math.round(pos.x + radius.width / 2),
      y: Math.round(pos.y + radius.height / 2)
    };

    var style = tag.style;
    style.left = labelPos.x + 'px';
    style.top = labelPos.y + 'px';
    style.display = '';

    controller.onPlaceLabel(tag, node);
  }
});

/*
  Class: Icicle.Plot.NodeTypes
  
  This class contains a list of <Graph.Node> built-in types. 
  Node types implemented are 'none', 'rectangle'.
  
  You can add your custom node types, customizing your visualization to the extreme.
  
  Example:
  
  (start code js)
    Icicle.Plot.NodeTypes.implement({
      'mySpecialType': {
        'render': function(node, canvas) {
          //print your custom node to canvas
        },
        //optional
        'contains': function(node, pos) {
          //return true if pos is inside the node or false otherwise
        }
      }
    });
  (end code)
  
  */
$jit.Icicle.Plot.NodeTypes = new Class( {
  'none': {
    'render': $.empty
  },

  'rectangle': {
    'render': function(node, canvas, animating) {
      var config = this.viz.config;
      var offset = config.offset;
      var width = node.getData('width');
      var height = node.getData('height');
      var border = node.getData('border');
      var pos = node.pos.getc(true);
      var posx = pos.x + offset / 2, posy = pos.y + offset / 2;
      var ctx = canvas.getCtx();
      
      if(width - offset < 2 || height - offset < 2) return;
      
      if(config.cushion) {
        var color = node.getData('color');
        var lg = ctx.createRadialGradient(posx + (width - offset)/2, 
                                          posy + (height - offset)/2, 1, 
                                          posx + (width-offset)/2, posy + (height-offset)/2, 
                                          width < height? height : width);
        var colorGrad = $.rgbToHex($.map($.hexToRgb(color), 
            function(r) { return r * 0.3 >> 0; }));
        lg.addColorStop(0, color);
        lg.addColorStop(1, colorGrad);
        ctx.fillStyle = lg;
      }

      if (border) {
        ctx.strokeStyle = border;
        ctx.lineWidth = 3;
      }

      ctx.fillRect(posx, posy, Math.max(0, width - offset), Math.max(0, height - offset));
      border && ctx.strokeRect(pos.x, pos.y, width, height);
    },

    'contains': function(node, pos) {
      if(this.viz.clickedNode && !$jit.Graph.Util.isDescendantOf(node, this.viz.clickedNode.id)) return false;
      var npos = node.pos.getc(true),
          width = node.getData('width'),
          height = node.getData('height');
      return this.nodeHelper.rectangle.contains({x: npos.x + width/2, y: npos.y + height/2}, pos, width, height);
    }
  }
});

$jit.Icicle.Plot.EdgeTypes = new Class( {
  'none': $.empty
});



/*
 * File: Layouts.ForceDirected.js
 *
*/

/** Prefuse have been ported and adapted to Javascript from the Prefuse Java
 * distribution (https://github.com/prefuse/Prefuse).
 *
 * Many original comments from the Prefuse code have been retained in the Javascript as
 * well as original author credit.
 *
 * Prefuse javascript written by Scott Yeadon at the Australian National University.
 */
 
/**
 * Class: QuadTreeNode
 *
 * Represents a node in the quadtree.
 *
 * Java source: <https://github.com/prefuse/Prefuse/blob/master/src/prefuse/util/force/NBodyForce.java>
 *
 * jeffrey heer <http://jheer.org">
 */
QuadTreeNode = new Class({
	com: [0.0, 0.0],
	children: [null, null, null, null],
	hasChildren: false,
	mass: null,
	fItem: null
});

/**
 * Class: QuadTreeNodeFactory
 *
 * Helper object to minimize number of object creations across multiple
 * uses of the quadtree.
 *
 * Java source: <https://github.com/prefuse/Prefuse/blob/master/src/prefuse/util/force/NBodyForce.java>
 *
 * jeffrey heer <http://jheer.org">
 */
QuadTreeNodeFactory = new Class({
	maxNodes: 50000,
	nodes: null,
	
	setup: function() {
		this.nodes = new Array();
	},
	
	getQuadTreeNode: function() {
		if (this.nodes.length > 0)
		{
			return this.nodes.pop();
		}
		else
		{
			return new QuadTreeNode();
		}
	},
	
	// n is a QuadTreeNode
	reclaim: function(n){
		n.mass = 0;
		n.com[0] = 0.0;
		n.com[1] = 0.0;
		n.fItem = null;
		n.hasChildren = false;
		n.children = [null, null, null, null];
		if (this.nodes.length < this.maxNodes)
		{
			this.nodes.push(n);
		}
	}
});

/**
 * Class: NBodyForce
 *
 * Force function which computes an n-body force such as gravity,
 * anti-gravity, or the results of electric charges. This function implements
 * the the Barnes-Hut algorithm for efficient n-body force simulations,
 * using a quad-tree with aggregated mass values to compute the n-body
 * force in O(N log N) time, where N is the number of ForceItems.
 * 
 * The algorithm used is that of J. Barnes and P. Hut, in their research
 * paper A Hierarchical O(n log n) force calculation algorithm, Nature, 
 * v.324, December 1986. For more details on the algorithm, see one of
 *  the following links --
 * 
 *   James Demmel's UC Berkeley lecture notes:
 * <http://www.cs.berkeley.edu/~demmel/cs267/lecture26/lecture26.html>
 *   Description of the Barnes-Hut algorithm:
 * <http://www.physics.gmu.edu/~large/lr_forces/desc/bh/bhdesc.html>
 *   Joshua Barnes' recent implementation
 * <href="http://www.ifa.hawaii.edu/~barnes/treecode/treeguide.html">
 * 
 * Java source: <https://github.com/prefuse/Prefuse/blob/master/src/prefuse/util/force/NBodyForce.java>
 *
 * jeffrey heer <http://jheer.org">
 */
NBodyForce = new Class({
	pnames: ["GravitationalConstant", "Distance", "BarnesHutTheta" ],

	DEFAULT_GRAV_CONSTANT: -1.0,
	DEFAULT_MIN_GRAV_CONSTANT: -10.0,
	DEFAULT_MAX_GRAV_CONSTANT: 10.0,

	DEFAULT_DISTANCE: -1.0,
	DEFAULT_MIN_DISTANCE: -1.0,
	DEFAULT_MAX_DISTANCE: 500.0,

	DEFAULT_THETA: 0.9,
	DEFAULT_MIN_THETA: 0.0,
	DEFAULT_MAX_THETA: 1.0,

	GRAVITATIONAL_CONST: 0,
	MIN_DISTANCE: 1,
	BARNES_HUT_THETA: 2,

	xMin: null, 
	xMax: null, 
	yMin: null, 
	yMax: null,
	
	params: null,
	minValues: null,
	maxValues: null,
	
	factory: null,
	root: null,
	
	setup: function(){
		this.params = [this.DEFAULT_GRAV_CONSTANT, this.DEFAULT_DISTANCE, this.DEFAULT_THETA]
		this.minValues = [this.DEFAULT_MIN_GRAV_CONSTANT, this.DEFAULT_MIN_DISTANCE, this.DEFAULT_MIN_THETA];
		this.maxValues = [this.DEFAULT_MAX_GRAV_CONSTANT, this.DEFAULT_MAX_DISTANCE, this.DEFAULT_MAX_THETA];

		this.factory = new QuadTreeNodeFactory();
		this.factory.setup();
		this.root = this.factory.getQuadTreeNode();
	},


	/**
	* Set the bounds of the region for which to compute the n-body simulation
	* xMin - the minimum x-coordinate
	* yMin - the minimum y-coordinate
	* xMax - the maximum x-coordinate
	* yMax - the maximum y-coordinate
	*/
	setBounds: function(xMin, yMin, xMax, yMax){
		this.xMin = xMin;
		this.yMin = yMin;
		this.xMax = xMax;
		this.yMax = yMax;
	},
	
	insertHelper: function(p, n, x1, y1, x2, y2){
		var x = p.location[0];
		var y = p.location[1];
		var splitx = (x1+x2)/2;
		var splity = (y1+y2)/2;
		var	i = (x>=splitx ? 1 : 0) + (y>=splity ? 2 : 0);
		// create new child node, if necessary
		if (n.children[i] == null)
		{
			n.children[i] = this.factory.getQuadTreeNode();
			n.hasChildren = true;
		}
		// update bounds
		if (i == 1 || i == 3)
		{
			x1 = splitx;
		}
		else
		{
			x2 = splitx;
		}
		
		if (i > 1)
		{
			y1 = splity;
		}
		else
		{
			y2 = splity;
		}
		
		// recurse
		this.insert(p, n.children[i], x1, y1, x2, y2);
	},
	
	isSameLocation: function(fItem1, fItem2){
		var dx = Math.abs(fItem1.location[0]-fItem2.location[0]);
		var dy = Math.abs(fItem1.location[1]-fItem2.location[1]);
		return (dx < 0.01 && dy < 0.01);
	},

	insert: function(p, n, x1, y1, x2, y2){
		// try to insert particle p at node n in the quadtree
		// by construction, each leaf will contain either 1 or 0 particles
		if (n.hasChildren)
		{
			// n contains more than 1 particle
			this.insertHelper(p, n, x1, y1, x2, y2);
		}
		else if (n.fItem != null)
		{
			// n contains 1 particle
			if (this.isSameLocation(n.fItem, p))
			{
				this.insertHelper(p, n, x1, y1, x2, y2);
			}
			else
			{
				var v = n.fItem;
				n.fItem = null;
				this.insertHelper(v, n, x1, y1, x2, y2);
				this.insertHelper(p, n, x1, y1, x2, y2);			
			}
		}
		else // n is empty, so is a leaf
		{
			n.fItem = p;
		}
	},

	calcMass: function(n){
		var xcom = 0;
		var ycom = 0;
		n.mass = 0;
		if (n.hasChildren)
		{
			for (var i=0; i < n.children.length; i++)
			{
				if (n.children[i] != null)
				{
					this.calcMass(n.children[i]);
					n.mass += n.children[i].mass;
					xcom += n.children[i].mass * n.children[i].com[0];
					ycom += n.children[i].mass * n.children[i].com[1];
				}
			}
		}
		
		if (n.fItem != null)
		{
			n.mass += n.fItem.mass;
			xcom += n.fItem.mass * n.fItem.location[0];
			ycom += n.fItem.mass * n.fItem.location[1];
		}
		
		n.com[0] = xcom / n.mass;
		n.com[1] = ycom / n.mass;
	},


	insertRoot: function(fItem){
		this.insert(fItem, this.root, this.xMin, this.yMin, this.xMax, this.yMax);
	},

	clearHelper: function(n){
		for (var i = 0; i < n.children.length; i++)
		{
			if (n.children[i] != null)
			{
				this.clearHelper(n.children[i]);
			}
		}
		this.factory.reclaim(n);
	},
		
	clear: function(){
		this.clearHelper(this.root);
		this.root = this.factory.getQuadTreeNode();
	},

	init: function(fSim){
		this.clear();
		
		var x1 = Number.MAX_VALUE;
		var y1 = Number.MAX_VALUE;
		var x2 = Number.MIN_VALUE;
		var y2 = Number.MIN_VALUE;
		
		for (var i = 0; i < fSim.items.length; i++)
		{
			var x = fSim.items[i].location[0];
			var y = fSim.items[i].location[1];

			if (x < x1) x1 = x;
			if (y < y1) y1 = y;
			if (x > x2) x2 = x;
			if (y > y2) y2 = y;
		}
		var dx = x2-x1;
		var dy = y2-y1;
		if (dx > dy)
		{
			y2 = y1 + dx;
		}
		else
		{
			x2 = x1 + dy;
		}
		this.setBounds(x1, y1, x2, y2);

		for (var i = 0; i < fSim.items.length; i++)
		{
			this.insertRoot(fSim.items[i]);
		}

		// calculate magnitudes and centers of mass
		this.calcMass(this.root);
	},

 	/**
	* Updates the force calculation on the given ForceItem.
 	*/	
	getForce: function(fItem){
		this.forceHelper(fItem, this.root, this.xMin, this.yMin, this.xMax, this.yMax);
	},
	
	forceHelper: function(item, n, x1, y1, x2, y2){
		var dx = n.com[0] - item.location[0];
		var dy = n.com[1] - item.location[1];
		var r = Math.sqrt(dx*dx+dy*dy);
		var same = false;
		
		if (r == 0.0)
		{
			dx = (Math.random()-0.5) / 50.0;
			dy = (Math.random()-0.5) / 50.0;
			r = Math.sqrt(dx*dx+dy*dy);
			same = true;
		}
		
		var minDist = this.params[this.MIN_DISTANCE] > 0 && r > this.params[this.MIN_DISTANCE];
		
		// the Barnes-Hut approximation criteria is if the ratio of the
		// size of the quadtree box to the distance between the point and
		// the box's center of mass is beneath some threshold theta.
		if ((!n.hasChildren && n.fItem != item) || (!same && (x2 - x1)/r < this.params[this.BARNES_HUT_THETA]))
		{
			if (minDist)
			{
				return;
			}
			var v = this.params[this.GRAVITATIONAL_CONST]*item.mass*n.mass / (r*r*r);
			item.force[0] += v*dx;
			item.force[1] += v*dy;
		}
 		else if (n.hasChildren)
 		{
 			// recurse for more accurate calculation
 			var splitx = (x1+x2)/2;
 			var splity = (y1+y2)/2;
 			for (var i = 0; i < n.children.length; i++)
 			{
 				if (n.children[i] != null)
 				{
 					this.forceHelper(item, n.children[i], (i==1||i==3?splitx:x1), (i>1?splity:y1), (i==1||i==3?x2:splitx), (i>1?y2:splity));
 				}
 			}
 			
 			if (minDist)
 			{
 				return;
 			}
 			
 			if (n.fItem != null && n.fItem != item)
 			{
 				var v = this.params[this.GRAVITATIONAL_CONST]*item.mass*n.fItem.mass / (r*r*r);
 				item.force[0] += v*dx;
 				item.force[1] += v*dy;
 			}
 		}
 	}
});

/**
 * Class: SpringForce
 *
 * Force function that computes the force acting on ForceItems due to a
 * given Spring.
 * 
 * Java source: 
<https://github.com/prefuse/Prefuse/blob/master/src/prefuse/util/force/SpringForce.java>
 *
 * jeffrey heer <http://jheer.org">
 */
SpringForce = new Class({
	pnames: ["SpringCoefficient", "DefaultSpringLength"],
	
	DEFAULT_SPRING_COEFF: 1e-4,
	DEFAULT_MAX_SPRING_COEFF: 1e-3,
	DEFAULT_MIN_SPRING_COEFF: 1e-5,
	DEFAULT_SPRING_LENGTH: 50,
	DEFAULT_MIN_SPRING_LENGTH: 0,
	DEFAULT_MAX_SPRING_LENGTH: 200,
	SPRING_COEFF: 0,
	SPRING_LENGTH: 1,
	
	params: null,
	minValues: null,
	maxValues: null,
	
	setup: function(){
		this.params = [this.DEFAULT_SPRING_COEFF, this.DEFAULT_SPRING_LENGTH];
		this.minValues = [this.DEFAULT_MIN_SPRING_COEFF, this.DEFAULT_MIN_SPRING_LENGTH];
		this.maxValues = [this.DEFAULT_MAX_SPRING_COEFF, this.DEFAULT_MAX_SPRING_LENGTH];
	},
	
	/**
	* Calculates the force vector acting on the items due to the given spring.
	* Updates the force calculation on the given Spring. The ForceItems attached to
	* Spring will have their force values updated appropriately.
	* s - the Spring on which to compute updated forces
	*/
	getForce: function(s){
		var fItem1 = s.item1;
		var fItem2 = s.item2;
		var length = (s.length < 0 ? this.params[this.SPRING_LENGTH] : s.length);
		var x1 = fItem1.location[0];
		var y1 = fItem1.location[1];
		var x2 = fItem2.location[0];
		var y2 = fItem2.location[1];
		var dx = x2-x1;
		var dy = y2-y1;
		var r = Math.sqrt(dx*dx+dy*dy);
		if (r == 0.0)
		{
			dx = (Math.random()-0.5) / 50.0;
			dy = (Math.random()-0.5) / 50.0;
			r = Math.sqrt(dx*dx+dy*dy);
		}
		var d = r - length;
		var coeff = (s.coeff < 0 ? this.params[this.SPRING_COEFF] : s.coeff)*d/r;
		fItem1.force[0] += coeff*dx;
		fItem1.force[1] += coeff*dy;
		fItem2.force[0] += -coeff*dx;
		fItem2.force[1] += -coeff*dy;
	},
	
	init: function(){
	}
});

/**
 * Class: DragForce
 *
 * Implements a viscosity/drag force to help stabilize items.
 *
 * Java source: 
<https://github.com/prefuse/Prefuse/blob/master/src/prefuse/util/force/DragForce.java>
 * 
 * jeffrey heer <http://jheer.org">
 */
DragForce = new Class({
	pnames: ["DragCoefficient"],
	
	DEFAULT_DRAG_COEFF: 0.01,
	DEFAULT_MIN_DRAG_COEFF: 0.0,
	DEFAULT_MAX_DRAG_COEFF: 0.1,
	DRAG_COEFF: 0,
	
	params: null,
	minValues: null,
	maxValues: null,
	
	setup: function(){
		this.params = [this.DEFAULT_DRAG_COEFF];
		this.minValues = [this.DEFAULT_MIN_DRAG_COEFF];
		this.maxValues = [this.DEFAULT_MAX_DRAG_COEFF];
	},
	
	getForce: function(fItem){
		fItem.force[0] -= this.params[this.DRAG_COEFF]*fItem.velocity[0];
		fItem.force[1] -= this.params[this.DRAG_COEFF]*fItem.velocity[1];
	},
	
	init: function(){
	}
});

/**
 * Class: RungeKuttaIntegrator
 *
 * Updates velocity and position data using the 4th-Order Runge-Kutta method.
 * It is slower but more accurate than other techniques such as Euler's Method.
 * The technique requires re-evaluating forces 4 times for a given timestep.
 *
 * Java source: 
<https://github.com/prefuse/Prefuse/blob/master/src/prefuse/util/force/RungeKuttaIntegrator.java>
 *
 * jeffrey heer <http://jheer.org">
 */
RungeKuttaIntegrator = new Class({
	integrate: function(sim, timestep){
		var speedLimit = sim.speedLimit;
		var vx, vy, v, coeff;
		var k, l

		for (var i = 0; i < sim.items.length; i++)
		{
			var item = sim.items[i];
			coeff = timestep / item.mass;
			k = item.k;
			l = item.l;
			item.plocation[0] = item.location[0];
			item.plocation[1] = item.location[1];
			k[0][0] = timestep*item.velocity[0];
			k[0][1] = timestep*item.velocity[1];
			l[0][0] = coeff*item.force[0];
			l[0][1] = coeff*item.force[1];
		
			// Set the position to the new predicted position
			item.location[0] += 0.5*k[0][0];
			item.location[1] += 0.5*k[0][1];
		}
		
		// recalculate forces
		sim.accumulate();

		for (var i = 0; i < sim.items.length; i++)
		{
			var item = sim.items[i];
			coeff = timestep / item.mass;
			k = item.k;
			l = item.l;
			vx = item.velocity[0] + 0.5*l[0][0];
			vy = item.velocity[1] + 0.5*l[0][1];
			v = Math.sqrt(vx*vx+vy*vy);
			if (v > speedLimit)
			{
				vx = speedLimit * vx / v;
				vy = speedLimit * vy / v;
			}

			k[1][0] = timestep*vx;
			k[1][1] = timestep*vy;
			l[1][0] = coeff*item.force[0];
			l[1][1] = coeff*item.force[1];
		
			// Set the position to the new predicted position
			item.location[0] = item.plocation[0] + 0.5*k[1][0];
			item.location[1] = item.plocation[1] + 0.5*k[1][1];
		}

		// recalculate forces
		sim.accumulate();

		for (var i = 0; i < sim.items.length; i++)
		{
			var item = sim.items[i];
			coeff = timestep / item.mass;
			k = item.k;
			l = item.l;
			vx = item.velocity[0] + 0.5*l[1][0];
			vy = item.velocity[1] + 0.5*l[1][1];
			v = Math.sqrt(vx*vx+vy*vy);
			if (v > speedLimit)
			{
				vx = speedLimit * vx / v;
				vy = speedLimit * vy / v;
			}
			k[2][0] = timestep*vx;
			k[2][1] = timestep*vy;
			l[2][0] = coeff*item.force[0];
			l[2][1] = coeff*item.force[1];
	
			// Set the position to the new predicted position
			item.location[0] = item.plocation[0] + 0.5*k[2][0];
			item.location[1] = item.plocation[1] + 0.5*k[2][1];
		}
		
		// recalculate forces
		sim.accumulate();

		for (var i = 0; i < sim.items.length; i++)
		{
			var item = sim.items[i];
			coeff = timestep / item.mass;
			k = item.k;
			l = item.l;
			var p = item.plocation;
			vx = item.velocity[0] + l[2][0];
			vy = item.velocity[1] + l[2][1];
			v = Math.sqrt(vx*vx+vy*vy);
			if (v > speedLimit)
			{
				vx = speedLimit * vx / v;
				vy = speedLimit * vy / v;
			}
			k[3][0] = timestep*vx;
			k[3][1] = timestep*vy;
			l[3][0] = coeff*item.force[0];
			l[3][1] = coeff*item.force[1];
			item.location[0] = p[0] + (k[0][0]+k[3][0])/6.0 + (k[1][0]+k[2][0])/3.0;
			item.location[1] = p[1] + (k[0][1]+k[3][1])/6.0 + (k[1][1]+k[2][1])/3.0;
			
			vx = (l[0][0]+l[3][0])/6.0 + (l[1][0]+l[2][0])/3.0;
			vy = (l[0][1]+l[3][1])/6.0 + (l[1][1]+l[2][1])/3.0;
			v = Math.sqrt(vx*vx+vy*vy);
			if (v > speedLimit)
			{
				vx = speedLimit * vx / v;
				vy = speedLimit * vy / v;
			}
			item.velocity[0] += vx;
			item.velocity[1] += vy;
		}
	}
});

/**
 * Class: ForceSimulator
 *
 * Manages a simulation of physical forces acting on bodies using N-body, Drag and 
 * Spring forces with a Runge-Kutta integrator.
 *
 * Java source: <https://github.com/prefuse/Prefuse/blob/master/src/prefuse/util/force/ForceSimulator.java>
 *
 * jeffrey heer <http://jheer.org">
 */
ForceSimulator = new Class({
	speedLimit: 1.0,
	iflen: 0,
	sflen: 0,
	integrator: null,
	items: null,
	springs: null,
	iforces: null,
	sforces: null,
	
	setup: function(){
		this.items = new Array();
		this.springs = new Array();
		this.iforces = new Array();
		this.sforces = new Array();
		this.integrator = new RungeKuttaIntegrator();
	},
	
	accumulate: function(){
		for (var i = 0; i < this.iforces.length; i++)
		{
			this.iforces[i].init(this);
		}
		
		for (var i = 0; i < this.sforces.length; i++)
		{
			this.sforces[i].init(this);
		}
		
		for (var i = 0; i < this.items.length; i++)
		{
			this.items[i].force[0] = 0.0;
			this.items[i].force[1] = 0.0;
			for (var j = 0; j < this.iforces.length; j++)
			{
				this.iforces[j].getForce(this.items[i]);
			}
		}
		
		for (var i = 0; i < this.springs.length; i++)
		{
			for (var j = 0; j < this.sforces.length; j++)
			{
				this.sforces[j].getForce(this.springs[i]);
			}
		}
	},
	
	runSimulator: function(timestep){
		this.accumulate();
		this.integrator.integrate(this, timestep);
	},
	
	addForce: function(f, itemForce){
		if (itemForce)
		{
			this.iforces.push(f);
			this.iflen++;
		}
		else
		{
			this.sforces.push(f);
			this.sflen++;
		}
	},
	
	addItem: function(fItem){
		this.items.push(fItem);
	},
	
	addSpring: function(spring){
		this.springs.push(spring);
	},
});

/**
 * Class: Spring
 *
 * Represents a spring in a force simulation.
 *
 * Java source: <https://github.com/prefuse/Prefuse/blob/master/src/prefuse/util/force/Spring.java>
 *
 * jeffrey heer <http://jheer.org">
 */
Spring = new Class({
	item1: null,
	item2: null,
	coeff: null,
	length: null,
	
	setup: function(fItem1, fItem2, coeff, len){
		this.item1 = fItem1;
		this.item2 = fItem2;
		this.coeff = coeff;
		this.length = len;
	}
});

/**
 * Class: ForceItem
 *
 * Represents a point particle in a force simulation, maintaining values for
 * mass, forces, velocity, and position.
 *
 * Java source: <https://github.com/prefuse/Prefuse/blob/master/src/prefuse/util/force/ForceItem.java>
 *
 * jeffrey heer <http://jheer.org">
 */
ForceItem = new Class({
	mass: 1.0,
	force: null,
	velocity: null,
	location: null,
	plocation: null,
	k: [[0,0], [0,0], [0,0], [0,0]],
	l: [[0,0], [0,0], [0,0], [0,0]],
	
	setup: function(){
		this.force = new Array();
		this.velocity = new Array();
		this.location = new Array();
		this.plocation = new Array();
	},

	init: function(xLoc, yLoc){
		this.force[0] = 0;
		this.force[1] = 0;
		this.velocity[0] = 0;
		this.velocity[1] = 0;
		this.location[0] = xLoc;
		this.location[1] = yLoc;
		this.plocation[0] = 0;
		this.plocation[1] = 0;
	}
});

/*
 * Class: Layouts.ForceDirected
 * 
 * Implements a Force Directed Layout.
 * 
 * Implemented By:
 * 
 * <ForceDirected>
 * 
 * Credits:
 * 
 * Marcus Cobden <http://marcuscobden.co.uk>
 * 
 */
Layouts.ForceDirected = new Class({

  getOptions: function(random) {
    var s = this.canvas.getSize();
    var w = s.width, h = s.height;
    //count nodes
    var count = 0;
    this.graph.eachNode(function(n) { 
      count++;
    });
    var k2 = w * h / count, k = Math.sqrt(k2);
    var l = this.config.levelDistance;
    
    return {
      width: w - l,
      height: h - l,
      tstart: w * 0.1,
      nodef: function(x) { return k2 / (x || 1); },
      edgef: function(x) { return /* x * x / k; */ k * (x - l); }
    };
  },
  
  compute: function(property, incremental) {
    var prop = $.splat(property || ['current', 'start', 'end']);
    var opt = this.getOptions();
    NodeDim.compute(this.graph, prop, this.config);
    this.graph.computeLevels(this.root, 0, "ignore");
    this.graph.eachNode(function(n) {
      $.each(prop, function(p) {
        var pos = n.getPos(p);
        if(pos.equals(Complex.KER)) {
          pos.x = opt.width/5 * (Math.random() - 0.5);
          pos.y = opt.height/5 * (Math.random() - 0.5);
        }
        //initialize disp vector
        n.disp = {};
        $.each(prop, function(p) {
          n.disp[p] = $C(0, 0);
        });
      });
    });
    this.computePositions(prop, opt, incremental);
  },
  
  computePositions: function(property, opt, incremental) {
    var times = this.config.iterations, i = 0, that = this;
    if(incremental) {
      (function iter() {
        for(var total=incremental.iter, j=0; j<total; j++) {
          opt.t = opt.tstart;
          if(times) opt.t *= (1 - i++/(times -1));
          that.computePositionStep(property, opt);
          if(times && i >= times) {
            incremental.onComplete();
            return;
          }
        }
        incremental.onStep(Math.round(i / (times -1) * 100));
        setTimeout(iter, 1);
      })();
    } else {
      for(; i < times; i++) {
        opt.t = opt.tstart * (1 - i/(times -1));
        this.computePositionStep(property, opt);
      }
    }
  },
  
  computePositionStep: function(property, opt) {
    var graph = this.graph;
    var min = Math.min, max = Math.max;
    var dpos = $C(0, 0);
    //calculate repulsive forces
    graph.eachNode(function(v) {
      //initialize disp
      $.each(property, function(p) {
        v.disp[p].x = 0; v.disp[p].y = 0;
      });
      graph.eachNode(function(u) {
        if(u.id != v.id) {
          $.each(property, function(p) {
            var vp = v.getPos(p), up = u.getPos(p);
            dpos.x = vp.x - up.x;
            dpos.y = vp.y - up.y;
            var norm = dpos.norm() || 1;
            v.disp[p].$add(dpos
                .$scale(opt.nodef(norm) / norm));
          });
        }
      });
    });
    //calculate attractive forces
    var T = !!graph.getNode(this.root).visited;
    graph.eachNode(function(node) {
      node.eachAdjacency(function(adj) {
        var nodeTo = adj.nodeTo;
        if(!!nodeTo.visited === T) {
          $.each(property, function(p) {
            var vp = node.getPos(p), up = nodeTo.getPos(p);
            dpos.x = vp.x - up.x;
            dpos.y = vp.y - up.y;
            var norm = dpos.norm() || 1;
            node.disp[p].$add(dpos.$scale(-opt.edgef(norm) / norm));
            nodeTo.disp[p].$add(dpos.$scale(-1));
          });
        }
      });
      node.visited = !T;
    });
    //arrange positions to fit the canvas
    var t = opt.t, w2 = opt.width / 2, h2 = opt.height / 2;
    graph.eachNode(function(u) {
      $.each(property, function(p) {
        var disp = u.disp[p];
        var norm = disp.norm() || 1;
        var p = u.getPos(p);
        p.$add($C(disp.x * min(Math.abs(disp.x), t) / norm, 
            disp.y * min(Math.abs(disp.y), t) / norm));
        p.x = min(w2, max(-w2, p.x));
        p.y = min(h2, max(-h2, p.y));
      });
    });
  },
  
  // Prefuse layout computation
  computeFast: function(property, incremental){
  	var sim = new ForceSimulator();
  	sim.setup();
  	var nbody = new NBodyForce();
  	nbody.setup();
  	var spring =  new SpringForce();
  	spring.setup();
  	var drag = new DragForce();
  	drag.setup();
  	sim.addForce(nbody, true);
  	sim.addForce(spring, false);
  	sim.addForce(drag, true);
    var timestep = 1000;
    var prop = $.splat(property || ['current', 'start', 'end']);
    var opt = this.getOptions();
    var adjDone = [];
    NodeDim.compute(this.graph, prop, this.config);
    this.graph.computeLevels(this.root, 0, "ignore");
    this.graph.eachNode(function(n) {
      $.each(prop, function(p) {
        var pos = n.getPos(p);
        pos.x = opt.width/2;
        pos.y = opt.height/2;
		n.forceItem = new ForceItem();
		n.forceItem.setup();
		n.forceItem.init(pos.x, pos.y);
		sim.addItem(n.forceItem);
		
        //initialize disp vector
        n.disp = {};
        $.each(prop, function(p) {
          n.disp[p] = $C(0, 0);
        });
	  });
	});

    this.graph.eachNode(function(n) {
      	n.eachAdjacency(function(adj){
			if (adjDone[adj.nodeTo.id] === undefined)
			{
				var s = new Spring();
				s.setup(adj.nodeFrom.forceItem, adj.nodeTo.forceItem, -1, -1);
				sim.addSpring(s);
				adjDone[adj.nodeFrom.id] = [];
				adjDone[adj.nodeFrom.id][adj.nodeTo.id] = true;
			}
		});
	});

	var numTimes = Math.ceil(this.config.iterations/incremental.iter);
	var iterCount = 0;
	var timesCount = 0;
	var times = this.config.iterations;
	var i = 0;
	var graph = this.graph;
	
   (function iter(){
        for(var total=incremental.iter, j=0; j<total; j++)
		{
			opt.t = opt.tstart;
			if (times) opt.t *= (1 - i++/(times -1));
			timestep *= (1.0 - i/times);
			var step = timestep+50;
			sim.runSimulator(step);
			if(times && i >= times)
			{
				var x1 = 0;
				var y1 = 0;
				var x2 = opt.width/2;
				var y2 = opt.height/2;
 
				graph.eachNode(function(n){
				  $.each(prop, function(p) {
					var x = n.forceItem.location[0];
					var y = n.forceItem.location[1];
					var hw = n.getData("dim") * 2;
					var hh = n.getData("dim") * 2;
					var disp = n.disp[p];
					var norm = disp.norm() || 1;
					var pos = n.getPos(p);
					pos.x = x;
					pos.y = y;
				   	 });
    			});

				incremental.onComplete();
				var maxX = -Number.MAX_VALUE;
				var minX = Number.MAX_VALUE;
				var maxY = -Number.MAX_VALUE;
				var minY = Number.MAX_VALUE;

			   	graph.eachNode(function(n){
			   		$.each(prop, function(p) {
						var l = n.getPos(p);
						if (l.x > maxX) maxX = l.x;
						if (l.x < minX) minX = l.x;
						if (l.y > maxY) maxY = l.y;
						if (l.y < minY) minY = l.y;
					});
				});
			   // determine height and width of fd layout
			   var lh;
			   var lw;
			   if (maxX < 0)
			   {
			   		lw = Math.ceil(Math.floor(Math.abs(minX)) - Math.floor(Math.abs(maxX)));
			   }
			   else
			   {
			   		if (minX >=0)
			   		{
			   			lw = Math.ceil(maxX - minX);
			   		}
			   		else
			   		{
			   			lw = Math.ceil(maxX + Math.abs(minX));
			   		}
			   }

			   if (maxY < 0)
			   {
			   		lh = Math.ceil(Math.floor(Math.abs(minY)) - Math.floor(Math.abs(maxY)));
			   }
			   else
			   {
			   		if (minY >=0)
			   		{
			   			lh = Math.ceil(maxY - minY);
			   		}
			   		else
			   		{
			   			lh = Math.ceil(maxY + Math.abs(minY));
			   		}
			   }

				var x2 = opt.width/2;
				var y2 = opt.height/2;

				// adjust each Node's position based on canvas dims
				graph.eachNode(function(n){
					$.each(prop, function(p) {
					var l = n.getPos(p);
					var pad = n.getData("dim");
					if (minX < 0)
					{
						l.x = ((l.x + Math.abs(minX))*(opt.width/lw))-(opt.width/2);
					}
					else
					{
						l.x = ((l.x - minX)*(opt.width/lw))-(opt.width/2);
					}
					if (l.x <= -x2 + pad) l.x = -x2 + (pad*2);
					if (l.x >= x2 - pad) l.x = x2 - (pad*2);
					
					if (minY < 0)
					{
						l.y = ((l.y + Math.abs(minY))*(opt.height/lh))-(opt.height/2);
					}
					else
					{
						l.y = ((l.y - minY)*(opt.height/lh))-(opt.height/2);
					}
					if (l.y <= -y2 + pad) l.y = -y2 + (pad*2);
					if (l.y >= y2 - pad) l.y = y2 - (pad*2);
					});
				});

				return;
        	}
		}
        incremental.onStep(Math.round(i / (times -1) * 100));
        setTimeout(iter, 1);
    })();
  }
});

/*
 * File: ForceDirected.js
 */

/*
   Class: ForceDirected
      
   A visualization that lays graphs using a Force-Directed layout algorithm.
   
   Inspired by:
  
   Force-Directed Drawing Algorithms (Stephen G. Kobourov) <http://www.cs.brown.edu/~rt/gdhandbook/chapters/force-directed.pdf>
   
  Implements:
  
  All <Loader> methods
  
   Constructor Options:
   
   Inherits options from
   
   - <Options.Canvas>
   - <Options.Controller>
   - <Options.Node>
   - <Options.Edge>
   - <Options.Label>
   - <Options.Events>
   - <Options.Tips>
   - <Options.NodeStyles>
   - <Options.Navigation>
   
   Additionally, there are two parameters
   
   levelDistance - (number) Default's *50*. The natural length desired for the edges.
   iterations - (number) Default's *50*. The number of iterations for the spring layout simulation. Depending on the browser's speed you could set this to a more 'interesting' number, like *200*. 
     
   Instance Properties:

   canvas - Access a <Canvas> instance.
   graph - Access a <Graph> instance.
   op - Access a <ForceDirected.Op> instance.
   fx - Access a <ForceDirected.Plot> instance.
   labels - Access a <ForceDirected.Label> interface implementation.

*/

$jit.ForceDirected = new Class( {

  Implements: [ Loader, Extras, Layouts.ForceDirected ],

  initialize: function(controller) {
    var $ForceDirected = $jit.ForceDirected;

    var config = {
      iterations: 50,
      levelDistance: 50
    };

    this.controller = this.config = $.merge(Options("Canvas", "Node", "Edge",
        "Fx", "Tips", "NodeStyles", "Events", "Navigation", "Controller", "Label"), config, controller);

    var canvasConfig = this.config;
    if(canvasConfig.useCanvas) {
      this.canvas = canvasConfig.useCanvas;
      this.config.labelContainer = this.canvas.id + '-label';
    } else {
      if(canvasConfig.background) {
        canvasConfig.background = $.merge({
          type: 'Circles'
        }, canvasConfig.background);
      }
      this.canvas = new Canvas(this, canvasConfig);
      this.config.labelContainer = (typeof canvasConfig.injectInto == 'string'? canvasConfig.injectInto : canvasConfig.injectInto.id) + '-label';
    }

    this.graphOptions = {
      'klass': Complex,
      'Node': {
        'selected': false,
        'exist': true,
        'drawn': true
      }
    };
    this.graph = new Graph(this.graphOptions, this.config.Node,
        this.config.Edge);
    this.labels = new $ForceDirected.Label[canvasConfig.Label.type](this);
    this.fx = new $ForceDirected.Plot(this, $ForceDirected);
    this.op = new $ForceDirected.Op(this);
    this.json = null;
    this.busy = false;
    // initialize extras
    this.initializeExtras();
  },

  /* 
    Method: refresh 
    
    Computes positions and plots the tree.
  */
  refresh: function() {
    this.compute();
    this.plot();
  },

  reposition: function() {
    this.compute('end');
  },

/*
  Method: computeIncremental
  
  Performs the Force Directed algorithm incrementally.
  
  Description:
  
  ForceDirected algorithms can perform many computations and lead to JavaScript taking too much time to complete. 
  This method splits the algorithm into smaller parts allowing the user to track the evolution of the algorithm and 
  avoiding browser messages such as "This script is taking too long to complete".
  
  Parameters:
  
  opt - (object) The object properties are described below
  
  iter - (number) Default's *20*. Split the algorithm into pieces of _iter_ iterations. For example, if the _iterations_ configuration property 
  of your <ForceDirected> class is 100, then you could set _iter_ to 20 to split the main algorithm into 5 smaller pieces.
  
  property - (string) Default's *end*. Whether to update starting, current or ending node positions. Possible values are 'end', 'start', 'current'. 
  You can also set an array of these properties. If you'd like to keep the current node positions but to perform these 
  computations for final animation positions then you can just choose 'end'.
  
  onStep - (function) A callback function called when each "small part" of the algorithm completed. This function gets as first formal 
  parameter a percentage value.
  
  onComplete - A callback function called when the algorithm completed.
  
  Example:
  
  In this example I calculate the end positions and then animate the graph to those positions
  
  (start code js)
  var fd = new $jit.ForceDirected(...);
  fd.computeIncremental({
    iter: 20,
    property: 'end',
    onStep: function(perc) {
      Log.write("loading " + perc + "%");
    },
    onComplete: function() {
      Log.write("done");
      fd.animate();
    }
  });
  (end code)
  
  In this example I calculate all positions and (re)plot the graph
  
  (start code js)
  var fd = new ForceDirected(...);
  fd.computeIncremental({
    iter: 20,
    property: ['end', 'start', 'current'],
    onStep: function(perc) {
      Log.write("loading " + perc + "%");
    },
    onComplete: function() {
      Log.write("done");
      fd.plot();
    }
  });
  (end code)
  
  */
  computeIncremental: function(opt) {
    opt = $.merge( {
      iter: 20,
      property: 'end',
      onStep: $.empty,
      onComplete: $.empty
    }, opt || {});

    this.config.onBeforeCompute(this.graph.getNode(this.root));
    this.compute(opt.property, opt);
  },

  /*
    Method: computePrefuse
  
    Exactly the same as computeIncremental except it applies the Prefuse
    Force Directed algorithm ((http://prefuse.cvs.sourceforge.net/) as opposed
    to the default JIT algorithm making it better suited for larger graphs (200+ nodes).
    Best results are obtained using Chrome, Safari or Opera. Firefox and IE 9+ only
    provide marginal speed improvement (presumably due to inefficiencies in their
    Javascript engines).
    
    Regarding the algorithm, the code is a Javascript port of the key classes of the 
    Prefuse Java distribution, namely NBodyForce.java, SpringForce.java, DragForce.java, 
    RungeKuttaIntegrator.java, ForceSimulator.java, Spring.java, ForceItem.java.

	This method should be treated as experimental.
  */  
  computePrefuse: function(opt) {
    opt = $.merge( {
      iter: 20,
      property: 'end',
      onStep: $.empty,
      onComplete: $.empty
    }, opt || {});

    this.config.onBeforeCompute(this.graph.getNode(this.root));
    this.computeFast(opt.property, opt);
  },

  /*
    Method: plot
   
    Plots the ForceDirected graph. This is a shortcut to *fx.plot*.
   */
  plot: function() {
    this.fx.plot();
  },

  /*
     Method: animate
    
     Animates the graph from the current positions to the 'end' node positions.
  */
  animate: function(opt) {
    this.fx.animate($.merge( {
      modes: [ 'linear' ]
    }, opt || {}));
  }
});

$jit.ForceDirected.$extend = true;

(function(ForceDirected) {

  /*
     Class: ForceDirected.Op
     
     Custom extension of <Graph.Op>.

     Extends:

     All <Graph.Op> methods
     
     See also:
     
     <Graph.Op>

  */
  ForceDirected.Op = new Class( {

    Implements: Graph.Op

  });

  /*
    Class: ForceDirected.Plot
    
    Custom extension of <Graph.Plot>.
  
    Extends:
  
    All <Graph.Plot> methods
    
    See also:
    
    <Graph.Plot>
  
  */
  ForceDirected.Plot = new Class( {

    Implements: Graph.Plot

  });

  /*
    Class: ForceDirected.Label
    
    Custom extension of <Graph.Label>. 
    Contains custom <Graph.Label.SVG>, <Graph.Label.HTML> and <Graph.Label.Native> extensions.
  
    Extends:
  
    All <Graph.Label> methods and subclasses.
  
    See also:
  
    <Graph.Label>, <Graph.Label.Native>, <Graph.Label.HTML>, <Graph.Label.SVG>.
  
  */
  ForceDirected.Label = {};

  /*
     ForceDirected.Label.Native
     
     Custom extension of <Graph.Label.Native>.

     Extends:

     All <Graph.Label.Native> methods

     See also:

     <Graph.Label.Native>

  */
  ForceDirected.Label.Native = new Class( {
    Implements: Graph.Label.Native
  });

  /*
    ForceDirected.Label.SVG
    
    Custom extension of <Graph.Label.SVG>.
  
    Extends:
  
    All <Graph.Label.SVG> methods
  
    See also:
  
    <Graph.Label.SVG>
  
  */
  ForceDirected.Label.SVG = new Class( {
    Implements: Graph.Label.SVG,

    initialize: function(viz) {
      this.viz = viz;
    },

    /* 
       placeLabel

       Overrides abstract method placeLabel in <Graph.Label>.

       Parameters:

       tag - A DOM label element.
       node - A <Graph.Node>.
       controller - A configuration/controller object passed to the visualization.
      
     */
    placeLabel: function(tag, node, controller) {
      var pos = node.pos.getc(true), 
          canvas = this.viz.canvas,
          ox = canvas.translateOffsetX,
          oy = canvas.translateOffsetY,
          sx = canvas.scaleOffsetX,
          sy = canvas.scaleOffsetY,
          radius = canvas.getSize();
      var labelPos = {
        x: Math.round(pos.x * sx + ox + radius.width / 2),
        y: Math.round(pos.y * sy + oy + radius.height / 2)
      };
      tag.setAttribute('x', labelPos.x);
      tag.setAttribute('y', labelPos.y);

      controller.onPlaceLabel(tag, node);
    }
  });

  /*
     ForceDirected.Label.HTML
     
     Custom extension of <Graph.Label.HTML>.

     Extends:

     All <Graph.Label.HTML> methods.

     See also:

     <Graph.Label.HTML>

  */
  ForceDirected.Label.HTML = new Class( {
    Implements: Graph.Label.HTML,

    initialize: function(viz) {
      this.viz = viz;
    },
    /* 
       placeLabel

       Overrides abstract method placeLabel in <Graph.Plot>.

       Parameters:

       tag - A DOM label element.
       node - A <Graph.Node>.
       controller - A configuration/controller object passed to the visualization.
      
     */
    placeLabel: function(tag, node, controller) {
      var pos = node.pos.getc(true), 
          canvas = this.viz.canvas,
          ox = canvas.translateOffsetX,
          oy = canvas.translateOffsetY,
          sx = canvas.scaleOffsetX,
          sy = canvas.scaleOffsetY,
          radius = canvas.getSize();
      var labelPos = {
        x: Math.round(pos.x * sx + ox + radius.width / 2),
        y: Math.round(pos.y * sy + oy + radius.height / 2)
      };
      var style = tag.style;
      style.left = labelPos.x + 'px';
      style.top = labelPos.y + 'px';
      style.display = this.fitsInCanvas(labelPos, canvas) ? '' : 'none';

      controller.onPlaceLabel(tag, node);
    }
  });

  /*
    Class: ForceDirected.Plot.NodeTypes

    This class contains a list of <Graph.Node> built-in types. 
    Node types implemented are 'none', 'circle', 'triangle', 'rectangle', 'star', 'ellipse' and 'square'.

    You can add your custom node types, customizing your visualization to the extreme.

    Example:

    (start code js)
      ForceDirected.Plot.NodeTypes.implement({
        'mySpecialType': {
          'render': function(node, canvas) {
            //print your custom node to canvas
          },
          //optional
          'contains': function(node, pos) {
            //return true if pos is inside the node or false otherwise
          }
        }
      });
    (end code)

  */
  ForceDirected.Plot.NodeTypes = new Class({
    'none': {
      'render': $.empty,
      'contains': $.lambda(false)
    },
    'circle': {
      'render': function(node, canvas){
        var pos = node.pos.getc(true), 
            dim = node.getData('dim');
        this.nodeHelper.circle.render('fill', pos, dim, canvas);
      },
      'contains': function(node, pos){
        var npos = node.pos.getc(true), 
            dim = node.getData('dim');
        return this.nodeHelper.circle.contains(npos, pos, dim);
      }
    },
    'ellipse': {
      'render': function(node, canvas){
        var pos = node.pos.getc(true), 
            width = node.getData('width'), 
            height = node.getData('height');
        this.nodeHelper.ellipse.render('fill', pos, width, height, canvas);
        },
      'contains': function(node, pos){
        var npos = node.pos.getc(true), 
            width = node.getData('width'), 
            height = node.getData('height');
        return this.nodeHelper.ellipse.contains(npos, pos, width, height);
      }
    },
    'square': {
      'render': function(node, canvas){
        var pos = node.pos.getc(true), 
            dim = node.getData('dim');
        this.nodeHelper.square.render('fill', pos, dim, canvas);
      },
      'contains': function(node, pos){
        var npos = node.pos.getc(true), 
            dim = node.getData('dim');
        return this.nodeHelper.square.contains(npos, pos, dim);
      }
    },
    'rectangle': {
      'render': function(node, canvas){
        var pos = node.pos.getc(true), 
            width = node.getData('width'), 
            height = node.getData('height');
        this.nodeHelper.rectangle.render('fill', pos, width, height, canvas);
      },
      'contains': function(node, pos){
        var npos = node.pos.getc(true), 
            width = node.getData('width'), 
            height = node.getData('height');
        return this.nodeHelper.rectangle.contains(npos, pos, width, height);
      }
    },
    'triangle': {
      'render': function(node, canvas){
        var pos = node.pos.getc(true), 
            dim = node.getData('dim');
        this.nodeHelper.triangle.render('fill', pos, dim, canvas);
      },
      'contains': function(node, pos) {
        var npos = node.pos.getc(true), 
            dim = node.getData('dim');
        return this.nodeHelper.triangle.contains(npos, pos, dim);
      }
    },
    'star': {
      'render': function(node, canvas){
        var pos = node.pos.getc(true),
            dim = node.getData('dim');
        this.nodeHelper.star.render('fill', pos, dim, canvas);
      },
      'contains': function(node, pos) {
        var npos = node.pos.getc(true),
            dim = node.getData('dim');
        return this.nodeHelper.star.contains(npos, pos, dim);
      }
    }
  });

  /*
    Class: ForceDirected.Plot.EdgeTypes
  
    This class contains a list of <Graph.Adjacence> built-in types. 
    Edge types implemented are 'none', 'line' and 'arrow'.
  
    You can add your custom edge types, customizing your visualization to the extreme.
  
    Example:
  
    (start code js)
      ForceDirected.Plot.EdgeTypes.implement({
        'mySpecialType': {
          'render': function(adj, canvas) {
            //print your custom edge to canvas
          },
          //optional
          'contains': function(adj, pos) {
            //return true if pos is inside the arc or false otherwise
          }
        }
      });
    (end code)
  
  */
  ForceDirected.Plot.EdgeTypes = new Class({
    'none': $.empty,
    'line': {
      'render': function(adj, canvas) {
        var from = adj.nodeFrom.pos.getc(true),
            to = adj.nodeTo.pos.getc(true);
        this.edgeHelper.line.render(from, to, canvas);
      },
      'contains': function(adj, pos) {
        var from = adj.nodeFrom.pos.getc(true),
            to = adj.nodeTo.pos.getc(true);
        return this.edgeHelper.line.contains(from, to, pos, this.edge.epsilon);
      }
    },
    'arrow': {
      'render': function(adj, canvas) {
        var from = adj.nodeFrom.pos.getc(true),
            to = adj.nodeTo.pos.getc(true),
            dim = adj.getData('dim'),
            direction = adj.data.$direction,
            inv = (direction && direction.length>1 && direction[0] != adj.nodeFrom.id);
        this.edgeHelper.arrow.render(from, to, dim, inv, canvas);
      },
      'contains': function(adj, pos) {
        var from = adj.nodeFrom.pos.getc(true),
            to = adj.nodeTo.pos.getc(true);
        return this.edgeHelper.arrow.contains(from, to, pos, this.edge.epsilon);
      }
    }
  });

})($jit.ForceDirected);


/*
 * File: Treemap.js
 *
*/

$jit.TM = {};

var TM = $jit.TM;

$jit.TM.$extend = true;

/*
  Class: TM.Base
  
  Abstract class providing base functionality for <TM.Squarified>, <TM.Strip> and <TM.SliceAndDice> visualizations.
  
  Implements:
  
  All <Loader> methods
  
  Constructor Options:
  
  Inherits options from
  
  - <Options.Canvas>
  - <Options.Controller>
  - <Options.Node>
  - <Options.Edge>
  - <Options.Label>
  - <Options.Events>
  - <Options.Tips>
  - <Options.NodeStyles>
  - <Options.Navigation>
  
  Additionally, there are other parameters and some default values changed

  orientation - (string) Default's *h*. Whether to set horizontal or vertical layouts. Possible values are 'h' and 'v'.
  titleHeight - (number) Default's *13*. The height of the title rectangle for inner (non-leaf) nodes.
  offset - (number) Default's *2*. Boxes offset.
  constrained - (boolean) Default's *false*. Whether to show the entire tree when loaded or just the number of levels specified by _levelsToShow_.
  levelsToShow - (number) Default's *3*. The number of levels to show for a subtree. This number is relative to the selected node.
  labelsToShow - describe the range of levels to show for labels of sub tree. Default's [0, -1].
  animate - (boolean) Default's *false*. Whether to animate transitions.
  Node.type - Described in <Options.Node>. Default's *rectangle*.
  duration - Described in <Options.Fx>. Default's *700*.
  fps - Described in <Options.Fx>. Default's *45*.
  
  
  Instance Properties:
  
  canvas - Access a <Canvas> instance.
  graph - Access a <Graph> instance.
  op - Access a <TM.Op> instance.
  fx - Access a <TM.Plot> instance.
  labels - Access a <TM.Label> interface implementation.

  Inspired by:
  
  Squarified Treemaps (Mark Bruls, Kees Huizing, and Jarke J. van Wijk) <http://www.win.tue.nl/~vanwijk/stm.pdf>
  
  Tree visualization with tree-maps: 2-d space-filling approach (Ben Shneiderman) <http://hcil.cs.umd.edu/trs/91-03/91-03.html>
  
   Note:
   
   This visualization was built and engineered from scratch, taking only the paper as inspiration, and only shares some features with the visualization described in the paper.

*/
TM.Base = {
  layout: {
    orientation: "h",
    vertical: function(){
      return this.orientation == "v";
    },
    horizontal: function(){
      return this.orientation == "h";
    },
    change: function(){
      this.orientation = this.vertical()? "h" : "v";
    }
  },

  initialize: function(controller){
    var config = {
      orientation: "h",
      titleHeight: 13,
      offset: 2,
      levelsToShow: 0,
      labelsToShow: [0, -1],
      constrained: false,
      animate: false,
      Node: {
        type: 'rectangle',
        overridable: true,
        //we all know why this is not zero,
        //right, Firefox?
        width: 3,
        height: 3,
        color: '#444',
        props: 'node-property:width:height'
      },
      Label: {
        textAlign: 'center',
        textBaseline: 'top'
      },
      Edge: {
        type: 'none'
      },
      duration: 700,
      fps: 45
    };

    this.controller = this.config = $.merge(Options("Canvas", "Node", "Edge",
        "Fx", "Controller", "Tips", "NodeStyles", "Events", "Navigation", "Label"), config, controller);
    this.layout.orientation = this.config.orientation;

    var canvasConfig = this.config;
    if (canvasConfig.useCanvas) {
      this.canvas = canvasConfig.useCanvas;
      this.config.labelContainer = this.canvas.id + '-label';
    } else {
      if(canvasConfig.background) {
        canvasConfig.background = $.merge({
          type: 'Circles'
        }, canvasConfig.background);
      }
      this.canvas = new Canvas(this, canvasConfig);
      this.config.labelContainer = (
        typeof canvasConfig.injectInto == 'string'? 
        canvasConfig.injectInto : 
        canvasConfig.injectInto.id) + '-label';
    }

    this.graphOptions = {
      'klass': Complex,
      'Node': {
        'selected': false,
        'exist': true,
        'drawn': true
      }
    };
    this.graph = new Graph(this.graphOptions, this.config.Node,
        this.config.Edge);
    this.labels = new TM.Label[canvasConfig.Label.type](this);
    this.fx = new TM.Plot(this);
    this.op = new TM.Op(this);
    this.group = new TM.Group(this);
    this.geom = new TM.Geom(this);
    this.clickedNode = null;
    this.busy = false;
    // initialize extras
    this.initializeExtras();
  },

  /* 
    Method: refresh 
    
    Computes positions and plots the tree.
  */
  refresh: function(){
    if(this.busy) return;
    this.busy = true;
    var that = this;
    if(this.config.animate) {
      this.compute('end');
      this.geom.setRightLevelToShow(this.graph.getNode(this.clickedNode
          && this.clickedNode.id || this.root));
      this.fx.animate($.merge(this.config, {
        modes: ['linear', this.config.Node.props],
        onComplete: function() {
          that.busy = false;
        }
      }));
    } else {
      var labelType = this.config.Label.type;
      if(labelType != 'Native') {
        this.graph.eachNode(function(n) { that.labels.hideLabel(n, false); });
      }
      this.busy = false;
      this.compute();
      this.geom.setRightLevelToShow(this.graph.getNode(this.clickedNode 
          && this.clickedNode.id || this.root));
      this.plot();
    }
  },

  /* 
    Method: plot 
    
    Plots the TreeMap. This is a shortcut to *fx.plot*. 
  
   */
  plot: function(){
    this.fx.plot();
  },

  /* 
  Method: leaf 
  
  Returns whether the node is a leaf.
  
   Parameters:
   
   n - (object) A <Graph.Node>.

 */
  leaf: function(n){
    return n.getSubnodes([
        1, 1
    ], "ignore").length == 0;
  },
  
  /* 
  Method: enter 
  
  Sets the node as root.
  
   Parameters:
   
   n - (object) A <Graph.Node>.

 */
  enter: function(n){
    if(this.busy) return;
    this.busy = true;
    var that = this,
        config = this.config,
        graph = this.graph,
        clickedNode = n,
        previousClickedNode = this.clickedNode;

    var callback = {
      onComplete: function() {
        //ensure that nodes are shown for that level
        that.geom.setRightLevelToShow(n);
        
        //compute positions of newly inserted nodes
        if(config.request) that.compute();
        if(config.animate) {
          //fade nodes
          graph.nodeList.setData('alpha', 0, 'end');
          n.eachSubgraph(function(n) {
            n.setData('alpha', 1, 'end');
            n.selected = false;
          }, "ignore");
          clickedNode.selected = true;
          that.fx.animate({
            duration: that.config.duration / 3,
            modes:['node-property:alpha'],
            onComplete: function() {
              //compute end positions
              that.clickedNode = clickedNode;
              that.compute('end');
              //animate positions
              //TODO(nico) commenting this line didn't seem to throw errors...
              that.clickedNode = previousClickedNode;
              that.fx.animate({
                duration: 2 * that.config.duration / 3,
                modes:['linear', that.config.Node.props],
                onComplete: function() { 
                  that.busy = false;
                  //TODO(nico) check comment above
                  that.clickedNode = clickedNode;
                  that.geom.setRightLevelToShow(clickedNode);
                }
              });
            }
          });
        } else {
          that.busy = false;
          that.clickedNode = n;
          that.refresh();
        }
      }
    };
    this.geom.setRightLevelToShow(n);
    if(config.request) {
      this.requestNodes(clickedNode, callback);
    } else {
      callback.onComplete();
    }
  },

  /* 
  Method: out 
  
  Sets the parent node of the current selected node as root.

 */
  out: function(){
    if(this.busy) return;
    this.busy = true;
    this.events.hoveredNode = false;
    var that = this,
        config = this.config,
        graph = this.graph,
        parents = graph.getNode(this.clickedNode 
            && this.clickedNode.id || this.root).getParents(),
        parent = parents[0],
        clickedNode = parent,
        previousClickedNode = this.clickedNode;
    
    //if no parents return
    if(!parent) {
      this.busy = false;
      return;
    }
    parent.selected = true;
    
    //final plot callback
    var callback = {
      onComplete: function() {
        previousClickedNode.selected = false;
        that.clickedNode = parent;
        if(config.request) {
          that.requestNodes(parent, {
            onComplete: function() {
              that.compute();
              that.plot();
              that.busy = false;
            }
          });
        } else {
          that.compute();
          that.plot();
          that.busy = false;
        }
        that.geom.setRightLevelToShow(parent);
        that.plot();
      }
    };
    //prune tree
    this.geom.setRightLevelToShow(parent);
    //animate node positions
    if(config.animate) {
      this.clickedNode = clickedNode;
      this.compute('end');
      //animate the visible subtree only
      this.clickedNode = previousClickedNode;
      this.fx.animate({
        duration: 2 * this.config.duration / 3,
        modes:['linear', this.config.Node.props],
        onComplete: function() {
          //animate the parent subtree
          that.clickedNode = clickedNode;
          //change nodes alpha
          clickedNode.eachSubgraph(function(n) {
            n.setDataset(['current', 'end'], {
              'alpha': [0, 1]
            });
          }, "ignore");
          previousClickedNode.eachSubgraph(function(node) {
            node.setData('alpha', 1);
          }, "ignore");
          that.geom.setRightLevelToShow(parent);
          that.fx.animate({
            duration: that.config.duration / 3,
            modes:['node-property:alpha'],
            onComplete: function() {
              callback.onComplete();
            }
          });
        }
      });
    } else {
      callback.onComplete();
    }
  },

  requestNodes: function(node, onComplete){
    var handler = $.merge(this.controller, onComplete), 
        lev = this.config.levelsToShow;
    if (handler.request) {
      var leaves = [], d = node._depth;
      node.eachLevel(0, lev, function(n){
        var nodeLevel = lev - (n._depth - d);
        if (n.drawn && !n.anySubnode() && nodeLevel > 0) {
          leaves.push(n);
          n._level = nodeLevel;
        }
      });
      this.group.requestNodes(leaves, handler);
    } else {
      handler.onComplete();
    }
  },
  
  reposition: function() {
    this.compute('end');
  }
};


/*
  Class: TM.Op
  
  Custom extension of <Graph.Op>.
  
  Extends:
  
  All <Graph.Op> methods
  
  See also:
  
  <Graph.Op>
  
  */
TM.Op = new Class({
  Implements: Graph.Op,

  initialize: function(viz){
    this.viz = viz;
  }
});

//extend level methods of Graph.Geom
TM.Geom = new Class({
  Implements: Graph.Geom,
  
  getRightLevelToShow: function() {
    return this.viz.config.levelsToShow;
  },
  
  setRightLevelToShow: function(node) {
    var level = this.getRightLevelToShow(),
        labelRange = this.viz.config.labelsToShow,
        fx = this.viz.labels;
    var dump = {};
    node.eachLevel(0, false, function(n) {
      var d = n._depth - node._depth;
      n._hideLabel = labelRange[0] >= 0 && d < labelRange[0] || labelRange[1] >= 0 && d > labelRange[1];
      if(level > 0 && d > level) {
        n.drawn = false; 
        n.exist = false;
        n.ignore = true;
        fx.hideLabel(n, false);
      } else {
        n.drawn = true;
        n.exist = true;
        delete n.ignore;
      }
      dump[n.name] = n._hideLabel;
    });
    node.drawn = true;
    delete node.ignore;
  }
});

/*

Performs operations on group of nodes.

*/
TM.Group = new Class( {

  initialize: function(viz){
    this.viz = viz;
    this.canvas = viz.canvas;
    this.config = viz.config;
  },

  /*
  
    Calls the request method on the controller to request a subtree for each node. 
  */
  requestNodes: function(nodes, controller){
    var counter = 0, len = nodes.length, nodeSelected = {};
    var complete = function(){
      controller.onComplete();
    };
    var viz = this.viz;
    if (len == 0)
      complete();
    for ( var i = 0; i < len; i++) {
      nodeSelected[nodes[i].id] = nodes[i];
      controller.request(nodes[i].id, nodes[i]._level, {
        onComplete: function(nodeId, data){
          if (data && data.children) {
            data.id = nodeId;
            viz.op.sum(data, {
              type: 'nothing'
            });
          }
          if (++counter == len) {
            viz.graph.computeLevels(viz.root, 0);
            complete();
          }
        }
      });
    }
  }
});

/*
  Class: TM.Plot
  
  Custom extension of <Graph.Plot>.
  
  Extends:
  
  All <Graph.Plot> methods
  
  See also:
  
  <Graph.Plot>
  
  */
TM.Plot = new Class({

  Implements: Graph.Plot,

  initialize: function(viz){
    this.viz = viz;
    this.config = viz.config;
    this.node = this.config.Node;
    this.edge = this.config.Edge;
    this.animation = new Animation;
    this.nodeTypes = new TM.Plot.NodeTypes;
    this.edgeTypes = new TM.Plot.EdgeTypes;
    this.labels = viz.labels;
  },

  plot: function(opt, animating){
    var viz = this.viz, 
        graph = viz.graph;
    viz.canvas.clear();
    this.plotTree(graph.getNode(viz.clickedNode && viz.clickedNode.id || viz.root), $.merge(viz.config, opt || {}, {
      'withLabels': true,
      'hideLabels': false,
      'plotSubtree': function(n, ch){
        return n.anySubnode("exist");
      }
    }), animating);
  }
});

/*
  Class: TM.Label
  
  Custom extension of <Graph.Label>. 
  Contains custom <Graph.Label.SVG>, <Graph.Label.HTML> and <Graph.Label.Native> extensions.

  Extends:

  All <Graph.Label> methods and subclasses.

  See also:

  <Graph.Label>, <Graph.Label.Native>, <Graph.Label.HTML>, <Graph.Label.SVG>.
  
*/
TM.Label = {};

/*
 TM.Label.Native

 Custom extension of <Graph.Label.Native>.

 Extends:

 All <Graph.Label.Native> methods

 See also:

 <Graph.Label.Native>
*/
TM.Label.Native = new Class({
  Implements: Graph.Label.Native,

  initialize: function(viz) {
    this.config = viz.config;
    this.leaf = viz.leaf;
  },
  
  renderLabel: function(canvas, node, controller){
    if(node._hideLabel || !this.leaf(node) && !this.config.titleHeight) return;
    var pos = node.pos.getc(true), 
        ctx = canvas.getCtx(),
        width = node.getData('width'),
        height = node.getData('height'),
        x = pos.x + width / 2,
        y = pos.y;
      if (isNaN(width) || width === 0) {
        ctx.fillText(node.name, x, y);
      } else {
        ctx.fillText(node.name, x, y, width);  
      }
  }
});

/*
 TM.Label.SVG

  Custom extension of <Graph.Label.SVG>.

  Extends:

  All <Graph.Label.SVG> methods

  See also:

  <Graph.Label.SVG>
*/
TM.Label.SVG = new Class( {
  Implements: Graph.Label.SVG,

  initialize: function(viz){
    this.viz = viz;
    this.leaf = viz.leaf;
    this.config = viz.config;
  },

  /* 
  placeLabel

  Overrides abstract method placeLabel in <Graph.Plot>.

  Parameters:

  tag - A DOM label element.
  node - A <Graph.Node>.
  controller - A configuration/controller object passed to the visualization.
  
  */
  placeLabel: function(tag, node, controller){
  	controller = controller || this.viz.controller;
    var pos = node.pos.getc(true), 
        canvas = this.viz.canvas,
        ox = canvas.translateOffsetX,
        oy = canvas.translateOffsetY,
        sx = canvas.scaleOffsetX,
        sy = canvas.scaleOffsetY,
        radius = canvas.getSize();
    var labelPos = {
      x: Math.round(pos.x * sx + ox + radius.width / 2),
      y: Math.round(pos.y * sy + oy + radius.height / 2)
    };
    tag.setAttribute('x', labelPos.x);
    tag.setAttribute('y', labelPos.y);

    if(node._hideLabel || !this.leaf(node) && !this.config.titleHeight) {
      tag.style.display = 'none';
    }
    controller.onPlaceLabel(tag, node);
  }
});

/*
 TM.Label.HTML

 Custom extension of <Graph.Label.HTML>.

 Extends:

 All <Graph.Label.HTML> methods.

 See also:

 <Graph.Label.HTML>

*/
TM.Label.HTML = new Class( {
  Implements: Graph.Label.HTML,

  initialize: function(viz){
    this.viz = viz;
    this.leaf = viz.leaf;
    this.config = viz.config;
  },

  /* 
    placeLabel
  
    Overrides abstract method placeLabel in <Graph.Plot>.
  
    Parameters:
  
    tag - A DOM label element.
    node - A <Graph.Node>.
    controller - A configuration/controller object passed to the visualization.
  
  */
  placeLabel: function(tag, node, controller){
    controller = controller || this.viz.controller;
    var pos = node.pos.getc(true), 
        canvas = this.viz.canvas,
        ox = canvas.translateOffsetX,
        oy = canvas.translateOffsetY,
        sx = canvas.scaleOffsetX,
        sy = canvas.scaleOffsetY,
        radius = canvas.getSize();
    var labelPos = {
      x: Math.round(pos.x * sx + ox + radius.width / 2),
      y: Math.round(pos.y * sy + oy + radius.height / 2)
    };

    var style = tag.style;
    style.left = labelPos.x + 'px';
    style.top = labelPos.y + 'px';
    style.width = Math.max(0, node.getData('width') * sx) + 'px';
    style.height = Math.max(0, node.getData('height') * sy) + 'px';
    style.zIndex = node._depth * 100;
    style.display = '';

    if(node._hideLabel || !this.leaf(node) && !this.config.titleHeight) {
      tag.style.display = 'none';
    }
    controller.onPlaceLabel(tag, node);
  }
});

/*
  Class: TM.Plot.NodeTypes

  This class contains a list of <Graph.Node> built-in types. 
  Node types implemented are 'none', 'rectangle'.

  You can add your custom node types, customizing your visualization to the extreme.

  Example:

  (start code js)
    TM.Plot.NodeTypes.implement({
      'mySpecialType': {
        'render': function(node, canvas) {
          //print your custom node to canvas
        },
        //optional
        'contains': function(node, pos) {
          //return true if pos is inside the node or false otherwise
        }
      }
    });
  (end code)

*/
TM.Plot.NodeTypes = new Class( {
  'none': {
    'render': $.empty
  },

  'rectangle': {
    'render': function(node, canvas, animating){
      var leaf = this.viz.leaf(node),
          config = this.config,
          offst = config.offset,
          titleHeight = config.titleHeight,
          pos = node.pos.getc(true),
          width = node.getData('width'),
          height = node.getData('height'),
          border = node.getData('border'),
          ctx = canvas.getCtx(),
          posx = pos.x + offst / 2, 
          posy = pos.y + offst / 2;
      if(width <= offst || height <= offst) return;
      if (leaf) {
        if(config.cushion) {
          var lg = ctx.createRadialGradient(posx + (width-offst)/2, posy + (height-offst)/2, 1, 
              posx + (width-offst)/2, posy + (height-offst)/2, width < height? height : width);
          var color = node.getData('color');
          var colorGrad = $.rgbToHex($.map($.hexToRgb(color), 
              function(r) { return r * 0.2 >> 0; }));
          lg.addColorStop(0, color);
          lg.addColorStop(1, colorGrad);
          ctx.fillStyle = lg;
        }
        ctx.fillRect(posx, posy, width - offst, height - offst);
        if(border) {
          ctx.save();
          ctx.strokeStyle = border;
          ctx.strokeRect(posx, posy, width - offst, height - offst);
          ctx.restore();
        }
      } else if(titleHeight > 0){
        ctx.fillRect(pos.x + offst / 2, pos.y + offst / 2, width - offst,
            titleHeight - offst);
        if(border) {
          ctx.save();
          ctx.strokeStyle = border;
          ctx.strokeRect(pos.x + offst / 2, pos.y + offst / 2, width - offst,
              height - offst);
          ctx.restore();
        }
      }
    },
    'contains': function(node, pos) {
      if(this.viz.clickedNode && !node.isDescendantOf(this.viz.clickedNode.id) || node.ignore) return false;
      var npos = node.pos.getc(true),
          width = node.getData('width'), 
          leaf = this.viz.leaf(node),
          height = leaf? node.getData('height') : this.config.titleHeight;
      return this.nodeHelper.rectangle.contains({x: npos.x + width/2, y: npos.y + height/2}, pos, width, height);
    }
  }
});

TM.Plot.EdgeTypes = new Class( {
  'none': $.empty
});

/*
  Class: TM.SliceAndDice
  
  A slice and dice TreeMap visualization.
  
  Implements:
  
  All <TM.Base> methods and properties.
*/
TM.SliceAndDice = new Class( {
  Implements: [
      Loader, Extras, TM.Base, Layouts.TM.SliceAndDice
  ]
});

/*
  Class: TM.Squarified
  
  A squarified TreeMap visualization.

  Implements:
  
  All <TM.Base> methods and properties.
*/
TM.Squarified = new Class( {
  Implements: [
      Loader, Extras, TM.Base, Layouts.TM.Squarified
  ]
});

/*
  Class: TM.Strip
  
  A strip TreeMap visualization.

  Implements:
  
  All <TM.Base> methods and properties.
*/
TM.Strip = new Class( {
  Implements: [
      Loader, Extras, TM.Base, Layouts.TM.Strip
  ]
});


/*
 * File: RGraph.js
 *
 */

/*
 Class: RGraph

 A radial graph visualization with advanced animations.

 Inspired by:

 Animated Exploration of Dynamic Graphs with Radial Layout (Ka-Ping Yee, Danyel Fisher, Rachna Dhamija, Marti Hearst) <http://bailando.sims.berkeley.edu/papers/infovis01.htm>

 Note:

 This visualization was built and engineered from scratch, taking only the paper as inspiration, and only shares some features with the visualization described in the paper.

 Implements:

 All <Loader> methods

 Constructor Options:

 Inherits options from

 - <Options.Canvas>
 - <Options.Controller>
 - <Options.Node>
 - <Options.Edge>
 - <Options.Label>
 - <Options.Events>
 - <Options.Tips>
 - <Options.NodeStyles>
 - <Options.Navigation>

 Additionally, there are other parameters and some default values changed

 interpolation - (string) Default's *linear*. Describes the way nodes are interpolated. Possible values are 'linear' and 'polar'.
 levelDistance - (number) Default's *100*. The distance between levels of the tree.

 Instance Properties:

 canvas - Access a <Canvas> instance.
 graph - Access a <Graph> instance.
 op - Access a <RGraph.Op> instance.
 fx - Access a <RGraph.Plot> instance.
 labels - Access a <RGraph.Label> interface implementation.
 */

$jit.RGraph = new Class( {

    Implements: [
        Loader, Extras, Layouts.Radial
    ],

    initialize: function(controller){
        var $RGraph = $jit.RGraph;

        var config = {
            interpolation: 'linear',
            levelDistance: 100
        };

        this.controller = this.config = $.merge(Options("Canvas", "Node", "Edge",
            "Fx", "Controller", "Tips", "NodeStyles", "Events", "Navigation", "Label"), config, controller);

        var canvasConfig = this.config;
        if(canvasConfig.useCanvas) {
            this.canvas = canvasConfig.useCanvas;
            this.config.labelContainer = this.canvas.id + '-label';
        } else {
            if(canvasConfig.background) {
                canvasConfig.background = $.merge({
                    type: 'Circles'
                }, canvasConfig.background);
            }
            this.canvas = new Canvas(this, canvasConfig);
            this.config.labelContainer = (typeof canvasConfig.injectInto == 'string'? canvasConfig.injectInto : canvasConfig.injectInto.id) + '-label';
        }

        this.graphOptions = {
            'klass': Polar,
            'Node': {
                'selected': false,
                'exist': true,
                'drawn': true
            }
        };
        this.graph = new Graph(this.graphOptions, this.config.Node,
            this.config.Edge);
        this.labels = new $RGraph.Label[canvasConfig.Label.type](this);
        this.fx = new $RGraph.Plot(this, $RGraph);
        this.op = new $RGraph.Op(this);
        this.json = null;
        this.root = null;
        this.busy = false;
        this.parent = false;
        // initialize extras
        this.initializeExtras();
    },

    /*

     createLevelDistanceFunc

     Returns the levelDistance function used for calculating a node distance
     to its origin. This function returns a function that is computed
     per level and not per node, such that all nodes with the same depth will have the
     same distance to the origin. The resulting function gets the
     parent node as parameter and returns a float.

     */
    createLevelDistanceFunc: function(){
        var ld = this.config.levelDistance;
        return function(elem){
            return (elem._depth + 1) * ld;
        };
    },

    /*
     Method: refresh 

     Computes positions and plots the tree.

     */
    refresh: function(){
        this.compute();
        this.plot();
    },

    reposition: function(){
        this.compute('end');
    },

    /*
     Method: plot

     Plots the RGraph. This is a shortcut to *fx.plot*.
     */
    plot: function(){
        this.fx.plot();
    },
    /*
     getNodeAndParentAngle

     Returns the _parent_ of the given node, also calculating its angle span.
     */
    getNodeAndParentAngle: function(id){
        var theta = false;
        var n = this.graph.getNode(id);
        var ps = n.getParents();
        var p = (ps.length > 0)? ps[0] : false;
        if (p) {
            var posParent = p.pos.getc(), posChild = n.pos.getc();
            var newPos = posParent.add(posChild.scale(-1));
            theta = Math.atan2(newPos.y, newPos.x);
            if (theta < 0)
                theta += 2 * Math.PI;
        }
        return {
            parent: p,
            theta: theta
        };
    },
    /*
     tagChildren

     Enumerates the children in order to maintain child ordering (second constraint of the paper).
     */
    tagChildren: function(par, id){
        if (par.angleSpan) {
            var adjs = [];
            par.eachAdjacency(function(elem){
                adjs.push(elem.nodeTo);
            }, "ignore");
            var len = adjs.length;
            for ( var i = 0; i < len && id != adjs[i].id; i++)
                ;
            for ( var j = (i + 1) % len, k = 0; id != adjs[j].id; j = (j + 1) % len) {
                adjs[j].dist = k++;
            }
        }
    },
    /*
     Method: onClick

     Animates the <RGraph> to center the node specified by *id*.

     Parameters:

     id - A <Graph.Node> id.
     opt - (optional|object) An object containing some extra properties described below
     hideLabels - (boolean) Default's *true*. Hide labels when performing the animation.

     Example:

     (start code js)
     rgraph.onClick('someid');
     //or also...
     rgraph.onClick('someid', {
     hideLabels: false
     });
     (end code)

     */
    onClick: function(id, opt){
        if (this.root != id && !this.busy) {
            this.busy = true;
            this.root = id;
            var that = this;
            this.controller.onBeforeCompute(this.graph.getNode(id));
            var obj = this.getNodeAndParentAngle(id);

            // second constraint
            this.tagChildren(obj.parent, id);
            this.parent = obj.parent;
            this.compute('end');

            // first constraint
            var thetaDiff = obj.theta - obj.parent.endPos.theta;
            this.graph.eachNode(function(elem){
                elem.endPos.set(elem.endPos.getp().add($P(thetaDiff, 0)));
            });

            var mode = this.config.interpolation;
            opt = $.merge( {
                onComplete: $.empty
            }, opt || {});

            this.fx.animate($.merge( {
                hideLabels: true,
                modes: [
                    mode
                ]
            }, opt, {
                onComplete: function(){
                    that.busy = false;
                    opt.onComplete();
                }
            }));
        }
    }
});

$jit.RGraph.$extend = true;

(function(RGraph){

    /*
     Class: RGraph.Op

     Custom extension of <Graph.Op>.

     Extends:

     All <Graph.Op> methods

     See also:

     <Graph.Op>

     */
    RGraph.Op = new Class( {

        Implements: Graph.Op

    });

    /*
     Class: RGraph.Plot

     Custom extension of <Graph.Plot>.

     Extends:

     All <Graph.Plot> methods

     See also:

     <Graph.Plot>

     */
    RGraph.Plot = new Class( {

        Implements: Graph.Plot

    });

    /*
     Object: RGraph.Label

     Custom extension of <Graph.Label>.
     Contains custom <Graph.Label.SVG>, <Graph.Label.HTML> and <Graph.Label.Native> extensions.

     Extends:

     All <Graph.Label> methods and subclasses.

     See also:

     <Graph.Label>, <Graph.Label.Native>, <Graph.Label.HTML>, <Graph.Label.SVG>.

     */
    RGraph.Label = {};

    /*
     RGraph.Label.Native

     Custom extension of <Graph.Label.Native>.

     Extends:

     All <Graph.Label.Native> methods

     See also:

     <Graph.Label.Native>

     */
    RGraph.Label.Native = new Class( {
        Implements: Graph.Label.Native
    });

    /*
     RGraph.Label.SVG

     Custom extension of <Graph.Label.SVG>.

     Extends:

     All <Graph.Label.SVG> methods

     See also:

     <Graph.Label.SVG>

     */
    RGraph.Label.SVG = new Class( {
        Implements: Graph.Label.SVG,

        initialize: function(viz){
            this.viz = viz;
        },

        /*
         placeLabel

         Overrides abstract method placeLabel in <Graph.Plot>.

         Parameters:

         tag - A DOM label element.
         node - A <Graph.Node>.
         controller - A configuration/controller object passed to the visualization.

         */
        placeLabel: function(tag, node, controller){
            var pos = node.pos.getc(true),
                canvas = this.viz.canvas,
                ox = canvas.translateOffsetX,
                oy = canvas.translateOffsetY,
                sx = canvas.scaleOffsetX,
                sy = canvas.scaleOffsetY,
                radius = canvas.getSize();
            var labelPos = {
                x: Math.round(pos.x * sx + ox + radius.width / 2),
                y: Math.round(pos.y * sy + oy + radius.height / 2)
            };
            tag.setAttribute('x', labelPos.x);
            tag.setAttribute('y', labelPos.y);

            controller.onPlaceLabel(tag, node);
        }
    });

    /*
     RGraph.Label.HTML

     Custom extension of <Graph.Label.HTML>.

     Extends:

     All <Graph.Label.HTML> methods.

     See also:

     <Graph.Label.HTML>

     */
    RGraph.Label.HTML = new Class( {
        Implements: Graph.Label.HTML,

        initialize: function(viz){
            this.viz = viz;
        },
        /*
         placeLabel

         Overrides abstract method placeLabel in <Graph.Plot>.

         Parameters:

         tag - A DOM label element.
         node - A <Graph.Node>.
         controller - A configuration/controller object passed to the visualization.

         */
        placeLabel: function(tag, node, controller){
            var pos = node.pos.getc(true),
                canvas = this.viz.canvas,
                ox = canvas.translateOffsetX,
                oy = canvas.translateOffsetY,
                sx = canvas.scaleOffsetX,
                sy = canvas.scaleOffsetY,
                radius = canvas.getSize();
            var labelPos = {
                x: Math.round(pos.x * sx + ox + radius.width / 2),
                y: Math.round(pos.y * sy + oy + radius.height / 2)
            };

            var style = tag.style;
            style.left = labelPos.x + 'px';
            style.top = labelPos.y + 'px';
            style.display = this.fitsInCanvas(labelPos, canvas)? '' : 'none';

            controller.onPlaceLabel(tag, node);
        }
    });

    /*
     Class: RGraph.Plot.NodeTypes

     This class contains a list of <Graph.Node> built-in types.
     Node types implemented are 'none', 'circle', 'triangle', 'rectangle', 'star', 'ellipse' and 'square'.

     You can add your custom node types, customizing your visualization to the extreme.

     Example:

     (start code js)
     RGraph.Plot.NodeTypes.implement({
     'mySpecialType': {
     'render': function(node, canvas) {
     //print your custom node to canvas
     },
     //optional
     'contains': function(node, pos) {
     //return true if pos is inside the node or false otherwise
     }
     }
     });
     (end code)

     */
    RGraph.Plot.NodeTypes = new Class({
        'none': {
            'render': $.empty,
            'contains': $.lambda(false)
        },
        'circle': {
            'render': function(node, canvas){
                var pos = node.pos.getc(true),
                    dim = node.getData('dim');
                this.nodeHelper.circle.render('fill', pos, dim, canvas);
            },
            'contains': function(node, pos){
                var npos = node.pos.getc(true),
                    dim = node.getData('dim');
                return this.nodeHelper.circle.contains(npos, pos, dim);
            }
        },
        'ellipse': {
            'render': function(node, canvas){
                var pos = node.pos.getc(true),
                    width = node.getData('width'),
                    height = node.getData('height');
                this.nodeHelper.ellipse.render('fill', pos, width, height, canvas);
            },
            'contains': function(node, pos){
                var npos = node.pos.getc(true),
                    width = node.getData('width'),
                    height = node.getData('height');
                return this.nodeHelper.ellipse.contains(npos, pos, width, height);
            }
        },
        'square': {
            'render': function(node, canvas){
                var pos = node.pos.getc(true),
                    dim = node.getData('dim');
                this.nodeHelper.square.render('fill', pos, dim, canvas);
            },
            'contains': function(node, pos){
                var npos = node.pos.getc(true),
                    dim = node.getData('dim');
                return this.nodeHelper.square.contains(npos, pos, dim);
            }
        },
        'rectangle': {
            'render': function(node, canvas){
                var pos = node.pos.getc(true),
                    width = node.getData('width'),
                    height = node.getData('height');
                this.nodeHelper.rectangle.render('fill', pos, width, height, canvas);
            },
            'contains': function(node, pos){
                var npos = node.pos.getc(true),
                    width = node.getData('width'),
                    height = node.getData('height');
                return this.nodeHelper.rectangle.contains(npos, pos, width, height);
            }
        },
        'triangle': {
            'render': function(node, canvas){
                var pos = node.pos.getc(true),
                    dim = node.getData('dim');
                this.nodeHelper.triangle.render('fill', pos, dim, canvas);
            },
            'contains': function(node, pos) {
                var npos = node.pos.getc(true),
                    dim = node.getData('dim');
                return this.nodeHelper.triangle.contains(npos, pos, dim);
            }
        },
        'star': {
            'render': function(node, canvas){
                var pos = node.pos.getc(true),
                    dim = node.getData('dim');
                this.nodeHelper.star.render('fill', pos, dim, canvas);
            },
            'contains': function(node, pos) {
                var npos = node.pos.getc(true),
                    dim = node.getData('dim');
                return this.nodeHelper.star.contains(npos, pos, dim);
            }
        }
    });

    /*
     Class: RGraph.Plot.EdgeTypes

     This class contains a list of <Graph.Adjacence> built-in types.
     Edge types implemented are 'none', 'line' and 'arrow'.

     You can add your custom edge types, customizing your visualization to the extreme.

     Example:

     (start code js)
     RGraph.Plot.EdgeTypes.implement({
     'mySpecialType': {
     'render': function(adj, canvas) {
     //print your custom edge to canvas
     },
     //optional
     'contains': function(adj, pos) {
     //return true if pos is inside the arc or false otherwise
     }
     }
     });
     (end code)

     */
    RGraph.Plot.EdgeTypes = new Class({
        'none': $.empty,
        'line': {
            'render': function(adj, canvas) {
                var from = adj.nodeFrom.pos.getc(true),
                    to = adj.nodeTo.pos.getc(true);
                this.edgeHelper.line.render(from, to, canvas);
            },
            'contains': function(adj, pos) {
                var from = adj.nodeFrom.pos.getc(true),
                    to = adj.nodeTo.pos.getc(true);
                return this.edgeHelper.line.contains(from, to, pos, this.edge.epsilon);
            }
        },
        'arrow': {
            'render': function(adj, canvas) {
                var from = adj.nodeFrom.pos.getc(true),
                    to = adj.nodeTo.pos.getc(true),
                    dim = adj.getData('dim'),
                    direction = adj.data.$direction,
                    inv = (direction && direction.length>1 && direction[0] != adj.nodeFrom.id),
                    arrowPosition = this.edge.arrowPosition || 'end';
                this.edgeHelper.arrow.render(from, to, dim, inv, canvas, arrowPosition);
            },
            'contains': function(adj, pos) {
                var from = adj.nodeFrom.pos.getc(true),
                    to = adj.nodeTo.pos.getc(true);
                return this.edgeHelper.arrow.contains(from, to, pos, this.edge.epsilon);
            }
        }
    });

})($jit.RGraph);


/*
 * File: Hypertree.js
 * 
*/

/* 
     Complex 
     
     A multi-purpose Complex Class with common methods. Extended for the Hypertree. 
 
*/
/* 
   moebiusTransformation 
 
   Calculates a moebius transformation for this point / complex. 
    For more information go to: 
        http://en.wikipedia.org/wiki/Moebius_transformation. 
 
   Parameters: 
 
      c - An initialized Complex instance representing a translation Vector. 
*/

Complex.prototype.moebiusTransformation = function(c) {
  var num = this.add(c);
  var den = c.$conjugate().$prod(this);
  den.x++;
  return num.$div(den);
};

/* 
    moebiusTransformation 
     
    Calculates a moebius transformation for the hyperbolic tree. 
     
    <http://en.wikipedia.org/wiki/Moebius_transformation> 
      
     Parameters: 
     
        graph - A <Graph> instance.
        pos - A <Complex>.
        prop - A property array.
        theta - Rotation angle. 
        startPos - _optional_ start position. 
*/
Graph.Util.moebiusTransformation = function(graph, pos, prop, startPos, flags) {
  this.eachNode(graph, function(elem) {
    for ( var i = 0; i < prop.length; i++) {
      var p = pos[i].scale(-1), property = startPos ? startPos : prop[i];
      elem.getPos(prop[i]).set(elem.getPos(property).getc().moebiusTransformation(p));
    }
  }, flags);
};

/* 
   Class: Hypertree 
   
   A Hyperbolic Tree/Graph visualization.
   
   Inspired by:
 
   A Focus+Context Technique Based on Hyperbolic Geometry for Visualizing Large Hierarchies (John Lamping, Ramana Rao, and Peter Pirolli). 
   <http://www.cs.tau.ac.il/~asharf/shrek/Projects/HypBrowser/startree-chi95.pdf>
 
  Note:
 
  This visualization was built and engineered from scratch, taking only the paper as inspiration, and only shares some features with the Hypertree described in the paper.

  Implements:
  
  All <Loader> methods
  
  Constructor Options:
  
  Inherits options from
  
  - <Options.Canvas>
  - <Options.Controller>
  - <Options.Node>
  - <Options.Edge>
  - <Options.Label>
  - <Options.Events>
  - <Options.Tips>
  - <Options.NodeStyles>
  - <Options.Navigation>
  
  Additionally, there are other parameters and some default values changed
  
  radius - (string|number) Default's *auto*. The radius of the disc to plot the <Hypertree> in. 'auto' will take the smaller value from the width and height canvas dimensions. You can also set this to a custom value, for example *250*.
  offset - (number) Default's *0*. A number in the range [0, 1) that will be substracted to each node position to make a more compact <Hypertree>. This will avoid placing nodes too far from each other when a there's a selected node.
  fps - Described in <Options.Fx>. It's default value has been changed to *35*.
  duration - Described in <Options.Fx>. It's default value has been changed to *1500*.
  Edge.type - Described in <Options.Edge>. It's default value has been changed to *hyperline*. 
  
  Instance Properties:
  
  canvas - Access a <Canvas> instance.
  graph - Access a <Graph> instance.
  op - Access a <Hypertree.Op> instance.
  fx - Access a <Hypertree.Plot> instance.
  labels - Access a <Hypertree.Label> interface implementation.

*/

$jit.Hypertree = new Class( {

  Implements: [ Loader, Extras, Layouts.Radial ],

  initialize: function(controller) {
    var $Hypertree = $jit.Hypertree;

    var config = {
      radius: "auto",
      offset: 0,
      Edge: {
        type: 'hyperline'
      },
      duration: 1500,
      fps: 35
    };
    this.controller = this.config = $.merge(Options("Canvas", "Node", "Edge",
        "Fx", "Tips", "NodeStyles", "Events", "Navigation", "Controller", "Label"), config, controller);

    var canvasConfig = this.config;
    if(canvasConfig.useCanvas) {
      this.canvas = canvasConfig.useCanvas;
      this.config.labelContainer = this.canvas.id + '-label';
    } else {
      if(canvasConfig.background) {
        canvasConfig.background = $.merge({
          type: 'Circles'
        }, canvasConfig.background);
      }
      this.canvas = new Canvas(this, canvasConfig);
      this.config.labelContainer = (typeof canvasConfig.injectInto == 'string'? canvasConfig.injectInto : canvasConfig.injectInto.id) + '-label';
    }

    this.graphOptions = {
      'klass': Polar,
      'Node': {
        'selected': false,
        'exist': true,
        'drawn': true
      }
    };
    this.graph = new Graph(this.graphOptions, this.config.Node,
        this.config.Edge);
    this.labels = new $Hypertree.Label[canvasConfig.Label.type](this);
    this.fx = new $Hypertree.Plot(this, $Hypertree);
    this.op = new $Hypertree.Op(this);
    this.json = null;
    this.root = null;
    this.busy = false;
    // initialize extras
    this.initializeExtras();
  },

  /* 
  
  createLevelDistanceFunc 

  Returns the levelDistance function used for calculating a node distance 
  to its origin. This function returns a function that is computed 
  per level and not per node, such that all nodes with the same depth will have the 
  same distance to the origin. The resulting function gets the 
  parent node as parameter and returns a float.

  */
  createLevelDistanceFunc: function() {
    // get max viz. length.
    var r = this.getRadius();
    // get max depth.
    var depth = 0, max = Math.max, config = this.config;
    this.graph.eachNode(function(node) {
      depth = max(node._depth, depth);
    }, "ignore");
    depth++;
    // node distance generator
    var genDistFunc = function(a) {
      return function(node) {
        node.scale = r;
        var d = node._depth + 1;
        var acum = 0, pow = Math.pow;
        while (d) {
          acum += pow(a, d--);
        }
        return acum - config.offset;
      };
    };
    // estimate better edge length.
    for ( var i = 0.51; i <= 1; i += 0.01) {
      var valSeries = (1 - Math.pow(i, depth)) / (1 - i);
      if (valSeries >= 2) { return genDistFunc(i - 0.01); }
    }
    return genDistFunc(0.75);
  },

  /* 
    Method: getRadius 
    
    Returns the current radius of the visualization. If *config.radius* is *auto* then it 
    calculates the radius by taking the smaller size of the <Canvas> widget.
    
    See also:
    
    <Canvas.getSize>
   
  */
  getRadius: function() {
    var rad = this.config.radius;
    if (rad !== "auto") { return rad; }
    var s = this.canvas.getSize();
    return Math.min(s.width, s.height) / 2;
  },

  /* 
    Method: refresh 
    
    Computes positions and plots the tree.

    Parameters:

    reposition - (optional|boolean) Set this to *true* to force all positions (current, start, end) to match.

   */
  refresh: function(reposition) {
    if (reposition) {
      this.reposition();
      this.graph.eachNode(function(node) {
        node.startPos.rho = node.pos.rho = node.endPos.rho;
        node.startPos.theta = node.pos.theta = node.endPos.theta;
      });
    } else {
      this.compute();
    }
    this.plot();
  },

  /* 
   reposition 
   
   Computes nodes' positions and restores the tree to its previous position.

   For calculating nodes' positions the root must be placed on its origin. This method does this 
     and then attemps to restore the hypertree to its previous position.
    
  */
  reposition: function() {
    this.compute('end');
    var vector = this.graph.getNode(this.root).pos.getc().scale(-1);
    Graph.Util.moebiusTransformation(this.graph, [ vector ], [ 'end' ],
        'end', "ignore");
    this.graph.eachNode(function(node) {
      if (node.ignore) {
        node.endPos.rho = node.pos.rho;
        node.endPos.theta = node.pos.theta;
      }
    });
  },

  /* 
   Method: plot 
   
   Plots the <Hypertree>. This is a shortcut to *fx.plot*. 

  */
  plot: function() {
    this.fx.plot();
  },

  /* 
   Method: onClick 
   
   Animates the <Hypertree> to center the node specified by *id*.

   Parameters:

   id - A <Graph.Node> id.
   opt - (optional|object) An object containing some extra properties described below
   hideLabels - (boolean) Default's *true*. Hide labels when performing the animation.

   Example:

   (start code js)
     ht.onClick('someid');
     //or also...
     ht.onClick('someid', {
      hideLabels: false
     });
    (end code)
    
  */
  onClick: function(id, opt) {
    var pos = this.graph.getNode(id).pos.getc(true);
    this.move(pos, opt);
  },

  /* 
   Method: move 

   Translates the tree to the given position. 

   Parameters:

   pos - (object) A *x, y* coordinate object where x, y in [0, 1), to move the tree to.
   opt - This object has been defined in <Hypertree.onClick>
   
   Example:
   
   (start code js)
     ht.move({ x: 0, y: 0.7 }, {
       hideLabels: false
     });
   (end code)

  */
  move: function(pos, opt) {
    var versor = $C(pos.x, pos.y);
    if (this.busy === false && versor.norm() < 1) {
      this.busy = true;
      var root = this.graph.getClosestNodeToPos(versor), that = this;
      this.graph.computeLevels(root.id, 0);
      this.controller.onBeforeCompute(root);
      opt = $.merge( {
        onComplete: $.empty
      }, opt || {});
      this.fx.animate($.merge( {
        modes: [ 'moebius' ],
        hideLabels: true
      }, opt, {
        onComplete: function() {
          that.busy = false;
          opt.onComplete();
        }
      }), versor);
    }
  }
});

$jit.Hypertree.$extend = true;

(function(Hypertree) {

  /* 
     Class: Hypertree.Op 
   
     Custom extension of <Graph.Op>.

     Extends:

     All <Graph.Op> methods
     
     See also:
     
     <Graph.Op>

  */
  Hypertree.Op = new Class( {

    Implements: Graph.Op

  });

  /* 
     Class: Hypertree.Plot 
   
    Custom extension of <Graph.Plot>.
  
    Extends:
  
    All <Graph.Plot> methods
    
    See also:
    
    <Graph.Plot>
  
  */
  Hypertree.Plot = new Class( {

    Implements: Graph.Plot

  });

  /*
    Object: Hypertree.Label

    Custom extension of <Graph.Label>. 
    Contains custom <Graph.Label.SVG>, <Graph.Label.HTML> and <Graph.Label.Native> extensions.
  
    Extends:
  
    All <Graph.Label> methods and subclasses.
  
    See also:
  
    <Graph.Label>, <Graph.Label.Native>, <Graph.Label.HTML>, <Graph.Label.SVG>.

   */
  Hypertree.Label = {};

  /*
     Hypertree.Label.Native

     Custom extension of <Graph.Label.Native>.

     Extends:

     All <Graph.Label.Native> methods

     See also:

     <Graph.Label.Native>

  */
  Hypertree.Label.Native = new Class( {
    Implements: Graph.Label.Native,

    initialize: function(viz) {
      this.viz = viz;
    },

    renderLabel: function(canvas, node, controller) {
      var ctx = canvas.getCtx();
      var coord = node.pos.getc(true);
      var s = this.viz.getRadius();
      ctx.fillText(node.name, coord.x * s, coord.y * s);
    }
  });

  /*
     Hypertree.Label.SVG

    Custom extension of <Graph.Label.SVG>.
  
    Extends:
  
    All <Graph.Label.SVG> methods
  
    See also:
  
    <Graph.Label.SVG>
  
  */
  Hypertree.Label.SVG = new Class( {
    Implements: Graph.Label.SVG,

    initialize: function(viz) {
      this.viz = viz;
    },

    /* 
       placeLabel

       Overrides abstract method placeLabel in <Graph.Plot>.

       Parameters:

       tag - A DOM label element.
       node - A <Graph.Node>.
       controller - A configuration/controller object passed to the visualization.
      
     */
    placeLabel: function(tag, node, controller) {
      var pos = node.pos.getc(true), 
          canvas = this.viz.canvas,
          ox = canvas.translateOffsetX,
          oy = canvas.translateOffsetY,
          sx = canvas.scaleOffsetX,
          sy = canvas.scaleOffsetY,
          radius = canvas.getSize(),
          r = this.viz.getRadius();
      var labelPos = {
        x: Math.round((pos.x * sx) * r + ox + radius.width / 2),
        y: Math.round((pos.y * sy) * r + oy + radius.height / 2)
      };
      tag.setAttribute('x', labelPos.x);
      tag.setAttribute('y', labelPos.y);
      controller.onPlaceLabel(tag, node);
    }
  });

  /*
     Hypertree.Label.HTML

     Custom extension of <Graph.Label.HTML>.

     Extends:

     All <Graph.Label.HTML> methods.

     See also:

     <Graph.Label.HTML>

  */
  Hypertree.Label.HTML = new Class( {
    Implements: Graph.Label.HTML,

    initialize: function(viz) {
      this.viz = viz;
    },
    /* 
       placeLabel

       Overrides abstract method placeLabel in <Graph.Plot>.

       Parameters:

       tag - A DOM label element.
       node - A <Graph.Node>.
       controller - A configuration/controller object passed to the visualization.
      
     */
    placeLabel: function(tag, node, controller) {
      var pos = node.pos.getc(true), 
          canvas = this.viz.canvas,
          ox = canvas.translateOffsetX,
          oy = canvas.translateOffsetY,
          sx = canvas.scaleOffsetX,
          sy = canvas.scaleOffsetY,
          radius = canvas.getSize(),
          r = this.viz.getRadius();
      var labelPos = {
        x: Math.round((pos.x * sx) * r + ox + radius.width / 2),
        y: Math.round((pos.y * sy) * r + oy + radius.height / 2)
      };
      var style = tag.style;
      style.left = labelPos.x + 'px';
      style.top = labelPos.y + 'px';
      style.display = this.fitsInCanvas(labelPos, canvas) ? '' : 'none';

      controller.onPlaceLabel(tag, node);
    }
  });

  /*
    Class: Hypertree.Plot.NodeTypes

    This class contains a list of <Graph.Node> built-in types. 
    Node types implemented are 'none', 'circle', 'triangle', 'rectangle', 'star', 'ellipse' and 'square'.

    You can add your custom node types, customizing your visualization to the extreme.

    Example:

    (start code js)
      Hypertree.Plot.NodeTypes.implement({
        'mySpecialType': {
          'render': function(node, canvas) {
            //print your custom node to canvas
          },
          //optional
          'contains': function(node, pos) {
            //return true if pos is inside the node or false otherwise
          }
        }
      });
    (end code)

  */
  Hypertree.Plot.NodeTypes = new Class({
    'none': {
      'render': $.empty,
      'contains': $.lambda(false)
    },
    'circle': {
      'render': function(node, canvas) {
        var nconfig = this.node,
            dim = node.getData('dim'),
            p = node.pos.getc();
        dim = nconfig.transform? dim * (1 - p.squaredNorm()) : dim;
        p.$scale(node.scale);
        if (dim > 0.2) {
          this.nodeHelper.circle.render('fill', p, dim, canvas);
        }
      },
      'contains': function(node, pos) {
        var dim = node.getData('dim'),
            npos = node.pos.getc().$scale(node.scale);
        return this.nodeHelper.circle.contains(npos, pos, dim);
      }
    },
    'ellipse': {
      'render': function(node, canvas) {
        var pos = node.pos.getc().$scale(node.scale),
            width = node.getData('width'),
            height = node.getData('height');
        this.nodeHelper.ellipse.render('fill', pos, width, height, canvas);
      },
      'contains': function(node, pos) {
        var width = node.getData('width'),
            height = node.getData('height'),
            npos = node.pos.getc().$scale(node.scale);
        return this.nodeHelper.circle.contains(npos, pos, width, height);
      }
    },
    'square': {
      'render': function(node, canvas) {
        var nconfig = this.node,
            dim = node.getData('dim'),
            p = node.pos.getc();
        dim = nconfig.transform? dim * (1 - p.squaredNorm()) : dim;
        p.$scale(node.scale);
        if (dim > 0.2) {
          this.nodeHelper.square.render('fill', p, dim, canvas);
        }
      },
      'contains': function(node, pos) {
        var dim = node.getData('dim'),
            npos = node.pos.getc().$scale(node.scale);
        return this.nodeHelper.square.contains(npos, pos, dim);
      }
    },
    'rectangle': {
      'render': function(node, canvas) {
        var nconfig = this.node,
            width = node.getData('width'),
            height = node.getData('height'),
            pos = node.pos.getc();
        width = nconfig.transform? width * (1 - pos.squaredNorm()) : width;
        height = nconfig.transform? height * (1 - pos.squaredNorm()) : height;
        pos.$scale(node.scale);
        if (width > 0.2 && height > 0.2) {
          this.nodeHelper.rectangle.render('fill', pos, width, height, canvas);
        }
      },
      'contains': function(node, pos) {
        var width = node.getData('width'),
            height = node.getData('height'),
            npos = node.pos.getc().$scale(node.scale);
        return this.nodeHelper.rectangle.contains(npos, pos, width, height);
      }
    },
    'triangle': {
      'render': function(node, canvas) {
        var nconfig = this.node,
            dim = node.getData('dim'),
            p = node.pos.getc();
        dim = nconfig.transform? dim * (1 - p.squaredNorm()) : dim;
        p.$scale(node.scale);
        if (dim > 0.2) {
          this.nodeHelper.triangle.render('fill', p, dim, canvas);
        }
      },
      'contains': function(node, pos) {
        var dim = node.getData('dim'),
            npos = node.pos.getc().$scale(node.scale);
        return this.nodeHelper.triangle.contains(npos, pos, dim);
      }
    },
    'star': {
      'render': function(node, canvas) {
        var nconfig = this.node,
            dim = node.getData('dim'),
            p = node.pos.getc();
        dim = nconfig.transform? dim * (1 - p.squaredNorm()) : dim;
        p.$scale(node.scale);
        if (dim > 0.2) {
          this.nodeHelper.star.render('fill', p, dim, canvas);
        }
      },
      'contains': function(node, pos) {
        var dim = node.getData('dim'),
            npos = node.pos.getc().$scale(node.scale);
        return this.nodeHelper.star.contains(npos, pos, dim);
      }
    }
  });

  /*
   Class: Hypertree.Plot.EdgeTypes

    This class contains a list of <Graph.Adjacence> built-in types. 
    Edge types implemented are 'none', 'line', 'arrow' and 'hyperline'.
  
    You can add your custom edge types, customizing your visualization to the extreme.
  
    Example:
  
    (start code js)
      Hypertree.Plot.EdgeTypes.implement({
        'mySpecialType': {
          'render': function(adj, canvas) {
            //print your custom edge to canvas
          },
          //optional
          'contains': function(adj, pos) {
            //return true if pos is inside the arc or false otherwise
          }
        }
      });
    (end code)
  
  */
  Hypertree.Plot.EdgeTypes = new Class({
    'none': $.empty,
    'line': {
      'render': function(adj, canvas) {
        var from = adj.nodeFrom.pos.getc(true),
          to = adj.nodeTo.pos.getc(true),
          r = adj.nodeFrom.scale;
          this.edgeHelper.line.render({x:from.x*r, y:from.y*r}, {x:to.x*r, y:to.y*r}, canvas);
      },
      'contains': function(adj, pos) {
        var from = adj.nodeFrom.pos.getc(true),
            to = adj.nodeTo.pos.getc(true),
            r = adj.nodeFrom.scale;
            this.edgeHelper.line.contains({x:from.x*r, y:from.y*r}, {x:to.x*r, y:to.y*r}, pos, this.edge.epsilon);
      }
    },
    'arrow': {
      'render': function(adj, canvas) {
        var from = adj.nodeFrom.pos.getc(true),
            to = adj.nodeTo.pos.getc(true),
            r = adj.nodeFrom.scale,
            dim = adj.getData('dim'),
            direction = adj.data.$direction,
            inv = (direction && direction.length>1 && direction[0] != adj.nodeFrom.id);
        this.edgeHelper.arrow.render({x:from.x*r, y:from.y*r}, {x:to.x*r, y:to.y*r}, dim, inv, canvas);
      },
      'contains': function(adj, pos) {
        var from = adj.nodeFrom.pos.getc(true),
            to = adj.nodeTo.pos.getc(true),
            r = adj.nodeFrom.scale;
        this.edgeHelper.arrow.contains({x:from.x*r, y:from.y*r}, {x:to.x*r, y:to.y*r}, pos, this.edge.epsilon);
      }
    },
    'hyperline': {
      'render': function(adj, canvas) {
        var from = adj.nodeFrom.pos.getc(),
            to = adj.nodeTo.pos.getc(),
            dim = this.viz.getRadius();
        this.edgeHelper.hyperline.render(from, to, dim, canvas);
      },
      'contains': $.lambda(false)
    }
  });

})($jit.Hypertree);




 })();;/*! openspending.aggregator.js - Aggregation API tools
 * ------------------------------------------------------------------------
 *
 * Copyright 2013 Open Knowledge Foundation
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/* REQUIREMENTS
 * Underscore
 */

var OpenSpending = OpenSpending || {};
OpenSpending.Aggregator = OpenSpending.Aggregator || {};

// Get the aggregator config based on a query string
OpenSpending.Aggregator.configFromQueryString = function(queryString) {
    // Parse the query string into an object
    var parts = OpenSpending.Common.parseQueryString(queryString);

    // Create the object we'll fill in an return
    var out = {};

    // Loop over the object with underscore's each which hands in
    // value and key. Based on key we fill in the output object
    _.each(parts, function(value, key) {
	if (key == 'breakdown') {
            out.breakdown = value;
	} else if (key == 'drilldown') {
            out.drilldowns = value.split('|');
	} else if (key == 'cut') {
            out.cuts = value.split('|');
	}
    });

    // Return the output
    return out;
};

// Aggregate the data (get data via the api)
OpenSpending.Aggregator.get = function (config) {
    var self = this;
    self.config = config;
    if (!self.config.processEntry) {
	self.config.processEntry = function(e) { return e; }
    }
    if (!self.config.measure) {
	self.config.measure = 'amount';
    }
    self.queryData = function () {
        var data = {}, config = self.config;
	
        data.dataset = config.dataset;
        data.drilldown = config.drilldowns.join('|');
	
        data.order = config.order;
        data.page = config.page;
        data.pagesize = config.pagesize;
	
        if (config.cuts !== undefined) {
            data.cut = config.cuts.join('|');
        }
	
        // add an optional breakdown to drilldowns to query the api
        var drilldowns = config.drilldowns.slice(); //copy
        if (config.breakdown !== undefined && config.breakdown.length) {
            drilldowns.push(config.breakdown);
        }
        drilldowns = jQuery.unique(drilldowns);
        data.drilldown = drilldowns.join('|');
        return data;
    };
    
    self.queryUrl = function() {
        var url, config = self.config;
        if (config.localApiCache !== undefined) {
            return config.localApiCache;
        }
        apiUrl = config.apiUrl || config.siteUrl + '/api';
        return apiUrl + '/2/aggregate';
    };
    
    /**
     * Call the OpenSpending aggregate api function (/api/aggregate)
     * and build a tree that can be used by for the bubble charts
     *
     * @public getTree
     *
     * @param {string} api_url The url to the api,
     * e.g. 'http://openspending.org/api'
     * @param {string} dataset The name of the dataset, e.g. 'cra'
     * @param {array} drilldowns the dimensions to drill down to, e.g.
     * ['cofog1', 'cofog2', 'cofog3']
     * @param {array} cuts (optional) The array with cuts, each element in the
     * format 'key:value', e.g. ['time.from.year:2010']
     * @param {function} callback A function that will accept the root node
     * and builds the bubble chart.
     * @param {object} testDataPath (optional) An object with json (not jsonp)
     * test data. For testing only.
     **/
    
    self.getTree = function () {
        var data = self.queryData();
        var key = window.btoa(jQuery.param(data)).replace(/\=/g, '');

        jQuery.ajax({
            url: self.queryUrl(),
            cache: true,
            data: data,
            jsonpCallback: 'aggregate_' + key,
            dataType: self.config.localApiCache !== undefined ? 'json' : 'jsonp',
            context: self,
            success: self.onJSONTreeLoaded
        });
    };
    
    self.getCSVURL = function() {
        var url = self.queryUrl();
        var data = self.queryData();
        data['format'] = 'csv';
        return url + '?' + jQuery.param(data);
    };
    /**
     *
     *
     */
    self.onJSONTreeLoaded = function (data) {
        var tree = self.buildTree(data);
        if (jQuery.isFunction(self.config.callback)) {
            self.config.callback(tree);
        }
    };
    
    /**
     * Build a tree form the drill down entries
     *
     * @public buildTree
     *
     * @param {object} data The json object responded from the
     * aggregate api.
     * @param {array} drilldowns List of drilldown criteria (strings)
     * @param {object} rootNode (optional) Pass an object with properties
     * for the root node. Maybe you want to set 'color' (default: #555) or
     * the 'label' (default: 'Total')
     **/
    self.buildTree = function (data) {
        var entries = data.drilldown,
        config = self.config,
        drilldowns = config.drilldowns,
        breakdown = config.breakdown,
          rootNode = {
              label: config.rootNodeLabel
          },
        nodes = {},
        root = {
            id: 'root',
            label: 'Total',
            color: '#555',
            currency: data.summary.currency[self.config.measure],
            children: [],
            level: 0,
            breakdowns: {}
        };
	
        root[self.config.measure] = 0.0;
	
        if (rootNode !== undefined) {
            // extend root with the properties of rootNode
            jQuery.extend(true, root, rootNode);
        }
        nodes.root = root;
	
        for (var i in drilldowns) {
            var drilldown = drilldowns[i];
            nodes[drilldown] = {};
        }
        if (data.errors !== undefined) {
            throw "Error";
        }
	
        for (var index = 0; index < entries.length; index++ ) {
            var entry = self.config.processEntry(entries[index], data);
            self.processEntry(entry, nodes);
        }
	
        return nodes.root;
	
    };
    
    self.processEntry = function (entry, nodes) {
        var parent = nodes.root,
        level = 0,
        drilldown, drilldowns = self.config.drilldowns,
        current, node, node_template;
	
	
        for (var index in drilldowns) {
            drilldown = drilldowns[index];
	    
            level = level + 1;
            current = entry[drilldown];
            node_template = self.toNode(current, parent);
            node = nodes[node_template.id];
            if (node === undefined) {
		// Initialize a new node and add it to the parent node
		node = node_template;
		node.children = [];
		node[self.config.measure] = 0.0;
		node.color = current ? current.color : undefined;
		node.level = level;
		node.breakdowns = {};
		node.currency = parent.currency;
		parent.children.push(node);
		nodes[node.id] = node;
            }
	    
            node[self.config.measure] = node[self.config.measure] + entry[self.config.measure];
	    
            // Add the current amount and the breakdown to the root node
            // to have a total.
            if (level === 1) {
		nodes.root[self.config.measure] = nodes.root[self.config.measure] + entry[self.config.measure];
		self.addBreakdown(nodes.root, entry);
            }
	    
            // update the breakdown for the current node
            self.addBreakdown(node, entry);
            parent = node;
        }
    };
    /**
     *  Add a node for each drilldown to the 'nodes' object
     *  Process the nodes to have:
     *  * The summed up measure
     *  * A children array
     *  * A color property
     *  * An unique id
     *
     *  @method processEntry
     *  @param {object} entry The entry in the list of drill downs
     *  @param {object} node The node to which we save the breakdown
     *  @return {undefined}
     */
    self.addBreakdown = function (node, entry) {
        var breakdown = self.config.breakdown;
        if (breakdown === undefined) {
	    
            return;
        }
	
        var breakdown_value, breakdown_node, node_template, nodes = {},
        id;
        breakdown_value = entry[breakdown];
        node_template = self.toNode(breakdown_value);
        id = node_template.id;
        breakdown_node = node.breakdowns[id];
        if (breakdown_node === undefined) {
            breakdown_node = node_template;
            node.breakdowns[id] = breakdown_node;
        }
        breakdown_node[self.config.measure] = breakdown_node[self.config.measure] + entry[self.config.measure];
	
	
    };
    
    self.toNode = function (value, parent) {
        var type = typeof (value);
	
        var node = {};
        prefix = parent ? parent.id + '__' : '';
        if (value === undefined || value === null) {
            node.id = 'others';
            node.label = 'Others';
            node.name = 'others';
        } else if (type === 'object') {
            if (value.id === undefined) {
		node.id = 'others';
		node.label = 'Others';
		node.name = 'others';
            } else {
		jQuery.extend(true, node, value);
		if (!node.name) {
		    if (node.label) {
			node.name = node.label.toLowerCase().replace(/\W/g, "-");
		    } else {
			node.name = node.id;
		    }
		}
            }
        } else if (type === 'boolean') {
            if (value) {
		node.id = 'yes';
		node.label = 'Yes';
		node.name = 'yes';
            } else {
		node.id = 'no';
		node.label = 'No';
		node.name = 'no';
            }
        } else if (type === 'string' || type === 'number') {
            node.id = value + '';
            node.label = value + '';
            node.name = node.id.toLowerCase().replace(/\W/g, "-");
        } else {
            throw 'unsupported type: ' + type;
        }
        node.id = prefix + node.id;
        node[self.config.measure] = 0.0;
        return node;
    };
    
    self.getTree();
};

;/*! openspending.amounts.js - Amount formatting for OpenSpending
 * ------------------------------------------------------------------------
 *
 * Copyright 2013 Open Knowledge Foundation
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/* REQUIREMENTS
 * accounting.js
 */

// Define OpenSpending object (if used as a separate module)
var OpenSpending = OpenSpending || {};
// Define Amounts property
OpenSpending.Amounts = OpenSpending.Amounts || {};

// Give a short hand version of the amount (with bn, m, k abbreviations)
OpenSpending.Amounts.shorthand = function (amount) {
    // Define supported amounts
    var billion = 1000000000;
    var million = 1000000;
    var thousand = 1000;

    // Get the absolute value (since negative numbers should work as well
    var absolute_amount = Math.abs(amount);

    // Billions get 'bn'
    if (absolute_amount > billion) {
	return OpenSpending.Amounts.format(amount / billion) + 'bn';
    }
    // Millions get 'm'
    else if (absolute_amount > million) {
	return OpenSpending.Amounts.format(amount / million) + 'm';
    }
    // Thousands get 'k'
    else if (absolute_amount > thousand) {
	return OpenSpending.Amounts.format(amount / thousand) + 'k';
    }
    // Anything less just returns the amount with two decimal places
    else {
	return OpenSpending.Amounts.format(amount, 2);
    }
};

// Format amount using accounting
OpenSpending.Amounts.format = function (amount, precision, currency) {
    // Get the currency symbol
    currency = OpenSpending.Amounts.currencySymbol(currency);
    // Use accounting.js to format the amount (default precision is 0)
    return accounting.formatMoney(amount, currency, precision||0,
				  OpenSpending.localeGroupSeparator,
				  OpenSpending.localeDecimalSeparator);
};

// Get the currency symbol
OpenSpending.Amounts.currencySymbol = function (currency) {
    // If currency is defined return currency symbol or currency
    if(currency) {
	return OpenSpending.Amounts.currencySymbols[currency] || currency;
    } else { // If not we just return an empty string
	return '';
    }
};

// All known currency symbols in openspendingjs
OpenSpending.Amounts.currencySymbols = {
    "AED": "د.إ", 
    "AFN": "؋",
    "ALL": "L",
    "AMD": "դր.",
    "ANG": "ƒ",
    "AOA": "Kz",
    "ARS": "$",
    "AUD": "$",
    "AWG": "ƒ",
    "AZN": "m",
    "BAM": "KM",
    "BBD": "$",
    "BDT": "৳",
    "BGN": "лв",
    "BHD": "ب.د",
    "BIF": "Fr",
    "BMD": "$",
    "BND": "$",
    "BOB": "Bs.",
    "BRL": "R$",
    "BSD": "$",
    "BTN": "Nu",
    "BWP": "P",
    "BYR": "Br",
    "BZD": "$",
    "CAD": "$",
    "CDF": "Fr",
    "CHF": "Fr",
    "CLP": "$",
    "CNY": "¥",
    "COP": "$",
    "CRC": "₡",
    "CUP": "$",
    "CVE": "$, Esc",
    "CZK": "Kč",
    "DJF": "Fr",
    "DKK": "kr",
    "DOP": "$",
    "DZD": "د.ج",
    "EEK": "KR",
    "EGP": "£,ج.م",
    "ERN": "Nfk",
    "ETB": "Br",
    "EUR": "€",
    "FJD": "$",
    "FKP": "£",
    "GBP": "£",
    "GEL": "ლ",
    "GHS": "₵",
    "GIP": "£",
    "GMD": "D",
    "GNF": "Fr",
    "GTQ": "Q",
    "GYD": "$",
    "HKD": "$",
    "HNL": "L",
    "HRK": "kn",
    "HTG": "G",
    "HUF": "Ft",
    "IDR": "Rp",
    "ILS": "₪",
    "INR": "₨",
    "IQD": "ع.د",
    "IRR": "﷼",
    "ISK": "kr",
    "JMD": "$",
    "JOD": "د.ا",
    "JPY": "¥",
    "KES": "KSh",
    "KGS": "лв",
    "KHR": "៛",
    "KMF": "Fr",
    "KPW": "₩",
    "KRW": "₩",
    "KWD": "د.ك",
    "KYD": "$",
    "KZT": "Т",
    "LAK": "₭",
    "LBP": "ل.ل",
    "LKR": "ரூ",
    "LRD": "$",
    "LSL": "L",
    "LTL": "Lt",
    "LVL": "Ls",
    "LYD": "ل.د",
    "MAD": "د.م.",
    "MDL": "MDL",
    "MGA": "Ar",
    "MKD": "ден",
    "MMK": "K",
    "MNT": "₮",
    "MOP": "P",
    "MRO": "UM",
    "MUR": "₨",
    "MVR": "ރ.",
    "MWK": "MK",
    "MXN": "$",
    "MYR": "RM",
    "MZN": "MT",
    "NAD": "$",
    "NGN": "₦",
    "NIO": "C$",
    "NOK": "kr",
    "NPR": "₨",
    "NZD": "$",
    "OMR": "ر.ع.",
    "PAB": "B/.",
    "PEN": "S/.",
    "PGK": "K",
    "PHP": "₱",
    "PKR": "₨",
    "PLN": "zł",
    "PYG": "₲",
    "QAR": "ر.ق",
    "RON": "RON",
    "RSD": "RSD",
    "RUB": "р.",
    "RWF": "Fr",
    "SAR": "ر.س",
    "SBD": "$",
    "SCR": "₨",
    "SDG": "S$",
    "SEK": "kr",
    "SGD": "$",
    "SHP": "£",
    "SLL": "Le",
    "SOS": "Sh",
    "SRD": "$",
    "STD": "Db",
    "SYP": "£, ل.س",
    "SZL": "L",
    "THB": "฿",
    "TJS": "ЅМ",
    "TMT": "m",
    "TND": "د.ت",
    "TOP": "T$",
    "TRY": "₤",
    "TTD": "$",
    "TWD": "$",
    "TZS": "Sh",
    "UAH": "₴",
    "UGX": "Sh",
    "USD": "$",
    "UYU": "$",
    "UZS": "лв",
    "VEF": "Bs",
    "VND": "₫",
    "VUV": "Vt",
    "WST": "T",
    "XAF": "Fr",
    "XCD": "$",
    "XOF": "Fr",
    "XPF": "Fr",
    "YER": "﷼",
    "ZAR": "R",
    "ZMK": "ZK",
    "ZWL": "$"
};

;/*! openspending.colors.js - Color palettes for OpenSpending
 * ------------------------------------------------------------------------
 *
 * Copyright 2013 Open Knowledge Foundation
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

// Define OpenSpending object (if used as a separate module)
var OpenSpending = OpenSpending || {};
// Define Colors property
OpenSpending.Colors = OpenSpending.Colors || {};

// Default color palette for openspendingjs
OpenSpending.Colors.DefaultPalette = ["#CA221D", "#C22769", "#3F93E1", 
				      "#481B79", "#6AAC32", "#42928F",
				      "#D32645", "#CD531C", "#EDC92D",
				      "#A5B425", "#211D79", "#449256",
				      "#7A2077", "#CA221D", "#E29826",
				      "#44913D", "#2458A3", "#2458A3",
				      "#14388C"];

OpenSpending.Colors.DefaultPalette.getColor = function (index, skip) {
    // getColor fetches the color of the index from an wrap around version
    // of the default palette (using modulo)
    var palette = this.slice(0);

    if (skip) {
	var idx = palette.indexOf(skip.toUpperCase()); // Find the index
	if(idx !== -1) palette.splice(idx, 1); // Remove it if really found!
    }

    return palette[index % (palette.length)];
};
;/*! openspending.common.js - Common javascript utils for openspendingjs
 * ------------------------------------------------------------------------
 *
 * Copyright 2013 Open Knowledge Foundation
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */


var OpenSpending = OpenSpending || {};
OpenSpending.Common = OpenSpending.Common || {};

// Parse a URL query string (?xyz=abc...) into a javascript object.
OpenSpending.Common.parseQueryString = function(querystring) {
    // Get query string (either provided or we get it from the current window
    var query = querystring || window.location.search.substring(1);

    // The javascript object we'll fill in and return
    var urlParams = {};

    // Tiny cleanup function
    var clean = function (param) {
	// We replace all + with whitespace and return in unescaped
	return unescape(param.replace(/\+/g, " "));
    };

    // Parameter regular expression (even though they're not cool with urls
    var regexp = /([^&=]+)=?([^&]*)/g;
    // Object to hold the regexp matches
    var matches = undefined;

    // While the regular expression finds matches
    while (matches = regexp.exec(query)) {
	// Create a property in urlParams with the key and set the
	// parameter value as its value
	urlParams[clean(matches[1])] = clean(matches[2]);
    }

    // Return the parameter object
    return urlParams;
};
;/* jquery.treemap.js - Treemap creator
 * ------------------------------------------------------------------------
 *
 * Copyright 2013 Open Knowledge Foundation
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/* REQUIREMENTS
 * thejit
 */

!function ($) {

    // Treemap function to create the treemap in the given dom element with
    // the given options
    $.treemap  = function ( element, options ) {
	// Create a jQuery object out of our element
	var $element = $(element);
	
	// The element has to have an id in order for it to be drawn
	// Therefore we give it a random one if it doesn't have and id
	if (!$element.attr('id')) {
	    $element.attr('id', Math.random().toString().substr(2));
	}

	// Get the configuration
	var config = $.extend(true, {}, $.treemap.defaults,
			      $.treemap.domopts(element), options);

	// Initial state of treemap (based on configuration)
	var state = {
	    drilldowns: config.data.drilldowns,
	    cuts: config.data.cuts,
	    year: config.data.year
	};

	// Draw the treemap from the given data
	var draw = function (data) {
	    // Empty the element (e.g. if there was another treemap there)
	    $element.empty();
	    // If there are no children we can't draw anything so we hide
	    // and stop any drawing
	    if (!data.children.length) {
		$element.hide();
		return;
	    }
	    // If the element is hidden, we show it
	    $element.show();
	    
	    // Here's the biggie! We use Javascript Infovis Toolkit to draw
	    // the treemap for us and provide a whole lot of configurations
	    var tm = new $jit.TM.Squarified({
		// We inject it into our element
		injectInto: element,
		// Width and height come from the configs
		width: config.width,
		height: config.height,
		// We don't show any sublevels (that's just confusing)
		levelsToShow: 1,
		// We don't show a title (we use label)
		titleHeight: 0,
		// Animations come from the transition config
		animate: config.transition.animate,
		transition: config.transition.type,
		duration: config.transition.duration,
		// The offset of the tiles
		offset: 2,
		// Label styles
		Label: {
		    type: 'HTML',
		    size: 12,
		    family: 'Tahoma, Verdana, Arial',
		    color: '#DDE7F0'
		},
		//Add the name of the node in the corresponding label
		//This method is called once, on label creation and only for
		//DOM labels.
		onCreateLabel: function(domElement, node){
		    config.node.label(domElement, node);
		},
		// Tooltip options
		Tips: {
		    enable: true,
		    type: 'Native',
		    offsetX: 20,
		    offsetY: 20,
		    onShow: function(tip, node) {
			tip.innerHTML = config.node.tooltip(node);
		    }  
		},
		// Node styles
		Node: {
		    color: '#243448',
		    CanvasStyles: {
			shadowBlur: 0,
			shadowColor: '#000'
		    }
		},
		// User interaction
		Events: {
		    // We have to enable event handling
		    enable: true,
		    // User clicks a node (we call it tile to avoid confusion)
		    onClick: function(tile) {
			if(tile) {
			    // Perform a click from the config
			    var continue_click = config.click(tile);
			    // If the configurable click function returns a
			    // true value we continue with default behaviour
			    if (continue_click) {
				// If the node has children we set it as primary
				// node
				if (tile.data.node.children.length) {
				    makeRoot(tile.data.node);
				}
				// If the node doesn't have children we visit the
				// html url for that node on OpenSpending
				else {
				    if (tile.data.link) {
					var link = this.embed ? tile.data.link + '?embed=true' : tile.data.link;
					document.location.href = link
				    }
				    // If there isn't an html url we just let the
				    // user know
				    else {
					alert("Not able to go any further");
				    }
				}
			    }
			}
		    },
		    // When the user hovers over the node we change it's color
		    onMouseEnter: function(node, eventInfo, e) {
			if(node) {
			    if (node.data.link === undefined) {
				$element
				    .find('#'+node.id)
				    .css('cursor', 'default');
			    }
			    node.setCanvasStyle('shadowBlur', 8);
			    node.orig_color = node.getData('color');
			    node.setData('color', '#A3B3C7');
			    tm.fx.plotNode(node, tm.canvas);
			}
		    },
		    // Change the color back when the user quits hovering around
		    onMouseLeave: function(node) {
			if(node) {
			    node.removeData('color');
			    node.removeCanvasStyle('shadowBlur');
			    node.setData('color', node.orig_color);
			    tm.plot();
			}
		    }
		},
		//Implement this method for retrieving a requested  
		//subtree that has as root a node with id = nodeId,  
		//and level as depth. This method could also make a 
		//server-side call for the requested subtree.
		request: function(nodeId, level, onComplete){  
		    var tree = json;  
		    var subtree = $jit.json.getSubtree(tree, nodeId);  
		    $jit.json.prune(subtree, 1);
		    onComplete.onComplete(nodeId, subtree);
		}
	    });
	    // Load the data into the treemap and refresh it
	    tm.loadJSON(data);
	    tm.refresh();
	};

	// Set a node as the root node
	var makeRoot = function(node) {
	    // Create the representation (we need information about the node's
	    // children which we'll draw
	    var data = {children: _.map(node.children, function(item, index) {
		// For every child we return the following data
		return {
		    id: item.id, // Id of the node
		    name: item.label || item.name, // Name of the node
		    data: {
			node: item, // The node itself
			value: item.amount, // The value of the node
			currency: item.currency, // The currency of the amount
			percentage: (item.amount / node.amount)*100, // % total
			$area: item.amount, // Size of the tile
			link: item.html_url, // Link to data
			// Color is either set in the item or we get it using
			// the configured colorscale (that has getColor)
			$color: item.color || config.colorscale.getColor(index)
		    }
		};
	    })};

	    // After creating the node data we draw it
	    draw(data);
	};

	// Initialization function (interprets the state, fetches the data
	//and create the root node (via a callback)
	var initialize = function() {
	    // Set drilldowns
	    state.drilldowns = state.drilldowns || [state.drilldown];
	    // Set cuts (or non if empty)
	    state.cuts = state.cuts || {};
	    // Initialize cut array
	    var cuts = [];
	    
	    // For each cut we push it to the cuts array with a semicolon in
	    // between because that's how OpenSpending reads the cuts
	    for (var field in state.cuts) {
		cuts.push(field + ':' + state.cuts[field]);
	    }

	    // If there's a year set in the state we add that as a special cut
	    // which is identified by 'time.year'
	    if (state.year) {
		cuts.push('time.year:' + state.year);
	    }

	    // If there are any drilldowns we fetch the dataset of the config
	    // using OpenSpending's Aggregator and send the output to the
	    // makeRoot function (to set the root node)
	    if (state.drilldowns) {
		OpenSpending.Aggregator.get({
		    siteUrl: config.data.site,
		    dataset: config.data.dataset,
		    drilldowns: state.drilldowns,
		    cuts: cuts,
		    rootNodeLabel: 'Total',
		    callback: makeRoot
		});
	    }
	};	
	
	// After defining all the functions we add a treemap-widget class
	// (which is used in the css)
	$element.addClass("treemap-widget");
	// Call the initialisation function
	initialize();
    };


    // Define the treemp defaults
    $.treemap.defaults = {
	// Define the data, drilldowns, year, cuts (almost no default here 
	// except the url to the central openspending platform (and drilldowns)
	data: {
	    site: 'http://openspending.org',
	    dataset: undefined,
	    // We put from and to as default values because they are common
	    drilldowns: ['from', 'to'],
	    year: undefined,
	    cuts: {}
	},
	click: function(tile) { return true; },
	// Visualisation defaults, height, width and embed (which is important
	// when linking to the original data after drilling down far enough)
	width: 600,
	height: 400,
	embed: false,
	// Default colorscale to use (round robin of nice colors)
	colorscale: OpenSpending.Colors.DefaultPalette,
	// Animation/transition settings
	transition: {
	    animate: true, // Should it be animated?
	    // We use Javascript Infovis Toolkit's built in transition
	    type: $jit.Trans.Expo.easeOut,
	    duration: 1000 // Take one second to show the treemap
	},
	// Node settings
	node: {
	    // Define the label
	    label: function(domElement, node) {
		if (node.data.percentage > 3) {
		    domElement.innerHTML = 
			['<div class="desc"><div class="amount">',
			 // We format the amount using OpenSpending's Amounts
			 // and we include the currency
			 OpenSpending.Amounts.format(node.data.value, 0, node.data.currency),
			 '</div><div class="lbl">',
			 node.name,
			 '</div></div>'].join('')
		}
	    },
	    // Define the tooltip
	    tooltip: function(node) {
		return [node.name, ' (', 
			// We format the percentage of total with two decimals
			OpenSpending.Amounts.format(node.data.percentage, 2),
			'%)'].join('')
	    }
	}
    };

    // HTML5 data configurations. The dom element is passed into the function
    // and returns an object with properties that can overwrite the default
    // ones (defined above). All javascript functions in the defaults cannot
    // be overwritten with data attributes).
    $.treemap.domopts = function(element) {
	// Get the jQuery object for our element
	var $element = $(element);
	return {
	    data: {
		site: $element.attr('data-site'),
		dataset: $element.attr('data-dataset'),
		// If drilldowns are defined we split them on commas
		drilldowns: $(element).attr('data-drilldowns') ?
		    $element.attr('data-drilldowns').split(',') : undefined,
		year: $element.attr('data-year'),
		// If cuts are defined they should be defined as a json string
		// i.e. a key value object
		cuts: $(element).attr('data-cuts') ?
		    JSON.parse($element.attr('data-cuts')) : undefined
	    },
	    // Height and width of the treemap
	    width: $element.attr('data-width'),
	    height: $element.attr('data-height'),
	    // Only animation configuration we allow to set is duration
	    transition: {
		duration: $element.attr('data-duration')
	    }
	};
    };

    // Extend jquery's prototype with the treemap function that runs through
    // all dom elements and passes them, along with the options to the
    // treemap function
    $.fn.extend({
	treemap: function(options) {
	    if(options == undefined) options = {};
	    this.each(function() {
		$.treemap( this, options);
	    });
	}
    });

    // On load we automatically create a treemap for all dom elments that have
    // the 'treemap' class and a dataset attribute set
    $('.treemap[data-dataset]').treemap();

}(jQuery);
