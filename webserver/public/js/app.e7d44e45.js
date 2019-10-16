(function(t){function e(e){for(var r,s,u=e[0],c=e[1],a=e[2],l=0,h=[];l<u.length;l++)s=u[l],Object.prototype.hasOwnProperty.call(o,s)&&o[s]&&h.push(o[s][0]),o[s]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(t[r]=c[r]);f&&f(e);while(h.length)h.shift()();return i.push.apply(i,a||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],r=!0,u=1;u<n.length;u++){var c=n[u];0!==o[c]&&(r=!1)}r&&(i.splice(e--,1),t=s(s.s=n[0]))}return t}var r={},o={app:0},i=[];function s(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=t,s.c=r,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)s.d(n,r,function(e){return t[e]}.bind(null,r));return n},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/";var u=window["webpackJsonp"]=window["webpackJsonp"]||[],c=u.push.bind(u);u.push=e,u=u.slice();for(var a=0;a<u.length;a++)e(u[a]);var f=c;i.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"4bc2":function(t,e,n){"use strict";n.r(e);n("c5f6"),n("6b54"),n("34ef");
/*!
 * C-Like Data Structure for JavaScript.
 *
 */
(function(t,e){
/**
   * @public
   * @constructs Struct
   * @classdesc C-Like Data Structure for JavaScript.
   *
   * @author Joon Kyoung <firejune@gmail.com>
   * @license MIT
   * @version 0.9.1
   * @see Struct.js on GitHub <https://github.com/firejune/struct.js>
   *
   * @param {object} struct
   * @param {*} value
   * @param {boolean} endianness
   *
   */
var n=function t(n,r,o){this.endianness=o===e||o,this.defaultValue=r||0,this.struct=y(n,this.defaultValue),this.byteLength=v(this.struct),this.emptyBuffer=new ArrayBuffer(this.byteLength),this.constructor=t,this._debug=!1,this._struct={},this._debug&&console.log("STRUCT.CREATE","defaultValue:",this.defaultValue,"byteLength:",this.byteLength,"endianness:",this.endianness,"struct:",this.struct)};n.prototype={update:function(t){return this.struct=d(this.struct,t||{}),this.byteLength=v(this.struct),this.emptyBuffer=new ArrayBuffer(this.byteLength),b(this.struct)},read:function(t,n){if(t===e&&n===e)return g(this.struct,(function(t,e,n){n[e]=t[1]}));var s=this,u=this.endianness,a=t instanceof DataView&&t||new DataView(t);if(0===t.byteLength)return new Error("Uncaught IndexSizeError: Buffer size was zero byte.");this.offset=n||0,this._debug&&console.info("STRUCT.READ","byteLength:",t.byteLength,"readOffset:",this.offset);var l=g(this.struct,(function(e,n,l){var g=[],d=e[0],b=e[1],y=e[2],v=e[3],w=r[d]||1,S="uint8",_=0;if(f(y)&&(S=y,y=b.byteLength||b.length),t.byteLength<=s.offset)return new Error("Uncaught IndexSizeError: Index or size was negative.");if(!0===v){try{y=a["get"+p(S)](s.offset,u)/w}catch(E){return console.error(E,s.offset,s.offset+w,t.byteLength),new Error(E)}s.offset+=r[S],s._struct[n+"Size"]=[S,y*w],s._debug&&console.log(n+"Size",s._struct[n+"Size"],s.offset)}if(h(b)){var O=s.offset+y*w;if(t.byteLength<O)return new Error("Uncaught IndexSizeError: Index or size was negative.");g=t.slice(s.offset,O),s.offset+=y*w}else while(_<y){if(o(d)){var L=t.slice(s.offset);g[_]=d.read(L),w=d.byteLength}else s.offset+w>t.byteLength?g[_]=new Error("Uncaught IndexSizeError: Index or size was negative."):g[_]=a["get"+p(d)](s.offset,u);if(i(g[_]))return g[_];s.offset+=w,_++}h(b)||f(b)||c(b)||y>1?l[n]=f(b)?m(g):g:l[n]=g[0],s._struct[n]=[d,l[n]],s._debug&&console.log(n,s._struct[n],s.offset)}));return i(l)||(this.byteLength=this.offset,this.offset!=t.byteLength&&l.type>=200&&6!=this.offset&&console.warn("Incorrect buffer size readed",this.offset,t.byteLength,l)),i(l)&&l||b(l)},write:function(t){var n=this,i=0,s=this.endianness;t!==e&&this.update(t);var u=new DataView(this.emptyBuffer);return this._debug&&console.info("STRUCT.WRITE","byteLength:",this.byteLength),g(this.struct,(function(t,a){var g=[],d=t[0],b=t[1],y=t[2],v=t[3],m=r[d],_="uint8",O=0;m===e&&o(d)&&(_=y,y=b.length,m=1),(f(y)||f(b))&&(_=y,y=b.length),h(b)&&(y=b.byteLength),!0===v&&(u["set"+p(_)](i,y*m,s),i+=r[_],n._struct[a+"Size"]=[_,y*m],n._debug&&console.log(a+"Size",n._struct[a+"Size"],i)),n._struct[a]=[d,b],h(b)||f(b)||c(b)||y>1?(h(b)&&(g=S(b,d)),l(b)&&(g=[n.defaultValue]),c(b)&&(g=b),g=b&&f(b)&&w(b)||g):g=[b];while(O<y){if(o(d)){var L=d.write(g[O]),E=new Uint8Array(L),V=0;while(V<E.length)u.setUint8(i+V,E[V]),V++;i+=E.length}else u["set"+p(d)](i,g[O],s),i+=m;O++}n._debug&&console.log(a,n._struct[a],i)})),i!=this.emptyBuffer.byteLength&&console.warn("Incorrect buffer size writed"),u.buffer}};var r={int8:1,uint8:1,int16:2,uint16:2,int32:4,uint32:4,float32:4,int64:8,uint64:8,float64:8};function o(t){return!!t&&t.constructor===n}function i(t){return!!t&&t.constructor===Error}function s(t){return t===e}function u(t){return null===t}function c(t){return!!t&&(t===Array||t.constructor===Array)}function a(t){return!!t&&(t===Object||t.constructor===Object)}function f(t){return!!t&&(t===String||t.constructor===String)}function l(t){return!!t&&(t===Function||t.constructor===Function)}function h(t){return!!t&&(t===ArrayBuffer||t.constructor===ArrayBuffer)}function p(t){return t.charAt(0).toUpperCase()+t.slice(1)}function g(t,e){var n={},r=null;for(var o in t)if(t.hasOwnProperty(o)){var i=t[o];if(a(i))n[o]=g(i,e);else if(r=e(i,o,n),r){n=r;break}}return n}function d(t,e){for(var n in e)t.hasOwnProperty(n)&&(a(t[n])?t[n]=d(t[n],e[n]):t[n][1]=e[n]);return t}function b(t){var e={};for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n]);return e}function y(t,n){return g(t,(function(t,r,i){var a=c(t)&&t[0]||t,l=o(a)&&a||a.toLowerCase(),p=f(t)?n:t[1],g=c(t)&&t.length>=3&&t[2]||(f(p)||c(p)||h(p))&&p.length||h(p)&&p.byteLength||1,d=!(!c(t)||!(f(g)||g>1))&&(!(!f(g)||t[3]!==e)||t[3]);(s(p)||u(p))&&(p=""),i[r]=[l,p,g,d]}))}function v(t){var n=0;return g(t,(function(t){var i=t[0],s=t[1],u=t[2],c=t[3],a=r[i],l="uint8";a===e&&o(i)&&(a=i.byteLength),(f(u)||f(s))&&(l=u,u=s&&s.length||0),h(s)&&(u=s.byteLength||0),!0===c&&(n+=r[l]),n+=u*a})),n}function w(t){var e=[],n=t.length,r=0;while(r<n)e[r]=t.charCodeAt(r),r++;return e}function m(t){var e=[],n=t.length,r=0;while(r<n)e[r]=String.fromCharCode(t[r]),r++;return e.join("")}function S(e,n){return Array.prototype.slice.call(new(t[p(n)+"Array"])(e))}if(DataView.prototype.getUint64===e&&DataView.prototype.setUint64===e&&DataView.prototype.getInt64===e&&DataView.prototype.setInt64===e){var _=function t(e){return e>=0&&e<31?1<<e:t[e]||(t[e]=Math.pow(2,e)-1)},O=function(t,e){this.lo=t,this.hi=e};O.prototype={valueOf:function(){return this.lo+_(32)*this.hi},toString:function(){return Number.prototype.toString.apply(this.valueOf(),arguments)}},O.fromNumber=function(t){var e=Math.floor(t/_(32)),n=t-e*_(32);return new O(n,e)};var L=function(){O.apply(this,arguments)};L.prototype="create"in Object?Object.create(O.prototype):new O,L.prototype.valueOf=function(){return this.hi<_(31)?O.prototype.valueOf.apply(this,arguments):-(_(32)-this.lo+_(32)*(_(32)-1-this.hi))},L.fromNumber=function(t){var e,n;if(t>=0){var r=O.fromNumber(t);e=r.lo,n=r.hi}else n=Math.floor(t/_(32)),e=t-n*_(32),n+=_(32);return new L(e,n)},DataView.prototype.getUint64=function(t,e){for(var n=e?[0,4]:[4,0],r=0;r<2;r++)n[r]=this.getUint32(t+n[r],e);return new O(n[0],n[1]).valueOf()},DataView.prototype.setUint64=function(t,e,n){e=O.fromNumber(e);var r=n?{lo:0,hi:4}:{lo:4,hi:0};for(var o in r)this.setUint32(t+r[o],e[o],n)},DataView.prototype.getInt64=function(t,e){for(var n=e?[0,4]:[4,0],r=0;r<2;r++)n[r]=this.getUint32(t+n[r],e);return new L(n[0],n[1]).valueOf()},DataView.prototype.setInt64=function(t,e,n){e=L.fromNumber(e);var r=n?{lo:0,hi:4}:{lo:4,hi:0};for(var o in r)this.setUint32(t+r[o],e[o],n)}}t.Struct=n})(window)},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("f751"),n("097d");var r=n("2b0e"),o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}})},i=[];n("4bc2");var s={name:"app",data:function(){return{inMsg:{},inMsgRaw:void 0,inMsgAsArrayBuffer:void 0,structParser:void 0}},methods:{runP5:function(){var t=this,e=function(e){var n=2,r=0;e.setup=function(){e.createCanvas(500,500),e.ellipse(e.width/2,e.height/2,500,500)},e.draw=function(){e.background(0);var o=3*e.frameCount,i=50*e.sin(e.radians(o));e.push(),e.translate(0,e.height/2),e.ellipse(r,i,e.constrain(t.inMsg.touchValues[0]/5,5,350),e.constrain(t.inMsg.touchValues[1]/5,5,350)),e.pop(),r+=n,(r>e.width||r<0)&&(n*=-1)}},r=n("237d");new r(e)},initWebSocket:function(){var t,e=this;t="production"==Object({NODE_ENV:"production",BASE_URL:"/"}).MODE_ENV?"ws://"+location.host:Object({NODE_ENV:"production",BASE_URL:"/"}).VUE_APP_WS_SERVER_URL;var n=new WebSocket(t);n.addEventListener("open",(function(t){console.log("socket opened",t),n.send("socket open")})),n.onmessage=function(t){e.inMsgRaw=t.data},n.onclose=function(t){console.log("socket closed",t),e.initWebSocket()},n.onerror=function(t){console.log("socket error",t)},console.log("socket state: ",n.readyState)}},watch:{inMsgRaw:function(t){var e=this;t instanceof Blob?t.arrayBuffer().then((function(t){e.inMsg=e.structParser.read(t),console.log("touchValues:",e.inMsg.touchValues)})):console.log("no binary message: ",t)}},mounted:function(){console.log("App mounted"),this.initWebSocket(),this.structParser=new window.Struct({startChar:["uint8","####",4],touchValues:["int32",[-1,-1,-1,-1]],loadCellValues:["int32",[-1,-1,-1,-1]],endChar:["uint8","!!!!",4]}),this.runP5()},components:{}},u=s,c=(n("5c0b"),n("2877")),a=Object(c["a"])(u,o,i,!1,null,null,null),f=a.exports,l=n("9483");Object(l["a"])("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(t){console.error("Error during service worker registration:",t)}}),r["a"].config.productionTip=!1,new r["a"]({render:function(t){return t(f)}}).$mount("#app")},"5c0b":function(t,e,n){"use strict";var r=n("e332"),o=n.n(r);o.a},e332:function(t,e,n){}});
//# sourceMappingURL=app.e7d44e45.js.map