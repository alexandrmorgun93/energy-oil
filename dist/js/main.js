!function(t){function e(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,e),o.l=!0,o.exports}var n={};e.m=t,e.c=n,e.d=function(t,n,r){e.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:r})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=1)}([function(t,e,n){"use strict";var r,o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};r=function(){return this}();try{r=r||Function("return this")()||(0,eval)("this")}catch(t){"object"===("undefined"==typeof window?"undefined":o(window))&&(r=window)}t.exports=r},function(t,e,n){n(2),t.exports=n(19)},function(t,e,n){"use strict";!function(){var t=document.querySelector(".btn_head"),e=document.querySelector(".menu"),r=document.querySelector(".menu_close");null!==t&&n(3)(t,e,r);var o=document.querySelector(".second_menu"),i=document.querySelector(".first_menu"),c=document.querySelector(".left_news_content");null!==o&&n(4)(o,i,c);var u=n(5),s=new u,a=document.querySelector(".currencies_usd"),l=document.querySelector(".currencies_euro"),f=document.querySelector(".temperature_item");null!==a&&n(18)(null,null,s,a,l,f)}()},function(t,e,n){"use strict";t.exports=function(t,e,n){t.addEventListener("click",function(){e.classList.add("active")}),n.addEventListener("click",function(){e.classList.remove("active")})}},function(t,e,n){"use strict";t.exports=function(t,e,n){t.addEventListener("click",function(){t.classList.add("active"),n.classList.add("active"),e.classList.remove("active")}),e.addEventListener("click",function(){e.classList.add("active"),n.classList.remove("active"),t.classList.remove("active")})}},function(t,e,n){"use strict";t.exports=n(6)},function(t,e,n){"use strict";(function(e){null==e.Promise&&(e.Promise=n(7)),null==Object.assign&&Object.defineProperty(Object,"assign",{enumerable:!1,configurable:!0,writable:!0,value:n(12)}),t.exports=n(13)}).call(e,n(0))},function(t,e,n){"use strict";(function(t,e,n){var r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};!function(t){function o(t){if(t){var e=this;t(function(t){e.resolve(t)},function(t){e.reject(t)})}}function i(t,e){if("function"==typeof t.y)try{var n=t.y.call(s,e);t.p.resolve(n)}catch(e){t.p.reject(e)}else t.p.resolve(e)}function c(t,e){if("function"==typeof t.n)try{var n=t.n.call(s,e);t.p.resolve(n)}catch(e){t.p.reject(e)}else t.p.reject(e)}var u,s,a="fulfilled",l="undefined",f=function(){function n(){for(;o.length-i;){try{o[i]()}catch(e){t.console&&t.console.error(e)}o[i++]=s,i==c&&(o.splice(0,c),i=0)}}var o=[],i=0,c=1024,u=function(){if(("undefined"==typeof MutationObserver?"undefined":r(MutationObserver))!==l){var t=document.createElement("div");return new MutationObserver(n).observe(t,{attributes:!0}),function(){t.setAttribute("a",0)}}return(void 0===e?"undefined":r(e))!==l?function(){e(n)}:function(){setTimeout(n,0)}}();return function(t){o.push(t),o.length-i==1&&u()}}();o.prototype={resolve:function(t){if(this.state===u){if(t===this)return this.reject(new TypeError("Attempt to resolve promise with self"));var e=this;if(t&&("function"==typeof t||"object"==(void 0===t?"undefined":r(t))))try{var n=!0,o=t.then;if("function"==typeof o)return void o.call(t,function(t){n&&(n=!1,e.resolve(t))},function(t){n&&(n=!1,e.reject(t))})}catch(t){return void(n&&this.reject(t))}this.state=a,this.v=t,e.c&&f(function(){for(var n=0,r=e.c.length;r>n;n++)i(e.c[n],t)})}},reject:function(e){if(this.state===u){this.state="rejected",this.v=e;var n=this.c;n?f(function(){for(var t=0,r=n.length;r>t;t++)c(n[t],e)}):!o.suppressUncaughtRejectionError&&t.console&&t.console.log("You upset Zousan. Please catch rejections: ",e,e?e.stack:null)}},then:function(t,e){var n=new o,r={y:t,n:e,p:n};if(this.state===u)this.c?this.c.push(r):this.c=[r];else{var s=this.state,l=this.v;f(function(){s===a?i(r,l):c(r,l)})}return n},catch:function(t){return this.then(null,t)},finally:function(t){return this.then(t,t)},timeout:function(t,e){e=e||"Timeout";var n=this;return new o(function(r,o){setTimeout(function(){o(Error(e))},t),n.then(function(t){r(t)},function(t){o(t)})})}},o.resolve=function(t){var e=new o;return e.resolve(t),e},o.reject=function(t){var e=new o;return e.reject(t),e},o.all=function(t){for(var e=[],n=0,r=new o,i=0;i<t.length;i++)!function(i,c){i&&"function"==typeof i.then||(i=o.resolve(i)),i.then(function(o){e[c]=o,++n==t.length&&r.resolve(e)},function(t){r.reject(t)})}(t[i],i);return t.length||r.resolve(e),r},r(n)!=l&&n.exports&&(n.exports=o),t.define&&t.define.amd&&t.define([],function(){return o}),t.Zousan=o,o.soon=f}(void 0!==t?t:void 0)}).call(e,n(0),n(8).setImmediate,n(11)(t))},function(t,e,n){"use strict";function r(t,e){this._id=t,this._clearFn=e}var o=Function.prototype.apply;e.setTimeout=function(){return new r(o.call(setTimeout,window,arguments),clearTimeout)},e.setInterval=function(){return new r(o.call(setInterval,window,arguments),clearInterval)},e.clearTimeout=e.clearInterval=function(t){t&&t.close()},r.prototype.unref=r.prototype.ref=function(){},r.prototype.close=function(){this._clearFn.call(window,this._id)},e.enroll=function(t,e){clearTimeout(t._idleTimeoutId),t._idleTimeout=e},e.unenroll=function(t){clearTimeout(t._idleTimeoutId),t._idleTimeout=-1},e._unrefActive=e.active=function(t){clearTimeout(t._idleTimeoutId);var e=t._idleTimeout;e>=0&&(t._idleTimeoutId=setTimeout(function(){t._onTimeout&&t._onTimeout()},e))},n(9),e.setImmediate=setImmediate,e.clearImmediate=clearImmediate},function(t,e,n){"use strict";(function(t,e){!function(t,n){function r(t){"function"!=typeof t&&(t=new Function(""+t));for(var e=new Array(arguments.length-1),n=0;n<e.length;n++)e[n]=arguments[n+1];var r={callback:t,args:e};return a[s]=r,u(s),s++}function o(t){delete a[t]}function i(t){var e=t.callback,r=t.args;switch(r.length){case 0:e();break;case 1:e(r[0]);break;case 2:e(r[0],r[1]);break;case 3:e(r[0],r[1],r[2]);break;default:e.apply(n,r)}}function c(t){if(l)setTimeout(c,0,t);else{var e=a[t];if(e){l=!0;try{i(e)}finally{o(t),l=!1}}}}if(!t.setImmediate){var u,s=1,a={},l=!1,f=t.document,d=Object.getPrototypeOf&&Object.getPrototypeOf(t);d=d&&d.setTimeout?d:t,"[object process]"==={}.toString.call(t.process)?function(){u=function(t){e.nextTick(function(){c(t)})}}():function(){if(t.postMessage&&!t.importScripts){var e=!0,n=t.onmessage;return t.onmessage=function(){e=!1},t.postMessage("","*"),t.onmessage=n,e}}()?function(){var e="setImmediate$"+Math.random()+"$",n=function(n){n.source===t&&"string"==typeof n.data&&0===n.data.indexOf(e)&&c(+n.data.slice(e.length))};t.addEventListener?t.addEventListener("message",n,!1):t.attachEvent("onmessage",n),u=function(n){t.postMessage(e+n,"*")}}():t.MessageChannel?function(){var t=new MessageChannel;t.port1.onmessage=function(t){c(t.data)},u=function(e){t.port2.postMessage(e)}}():f&&"onreadystatechange"in f.createElement("script")?function(){var t=f.documentElement;u=function(e){var n=f.createElement("script");n.onreadystatechange=function(){c(e),n.onreadystatechange=null,t.removeChild(n),n=null},t.appendChild(n)}}():function(){u=function(t){setTimeout(c,0,t)}}(),d.setImmediate=r,d.clearImmediate=o}}("undefined"==typeof self?void 0===t?void 0:t:self)}).call(e,n(0),n(10))},function(t,e,n){"use strict";function r(){throw new Error("setTimeout has not been defined")}function o(){throw new Error("clearTimeout has not been defined")}function i(t){if(f===setTimeout)return setTimeout(t,0);if((f===r||!f)&&setTimeout)return f=setTimeout,setTimeout(t,0);try{return f(t,0)}catch(e){try{return f.call(null,t,0)}catch(e){return f.call(this,t,0)}}}function c(t){if(d===clearTimeout)return clearTimeout(t);if((d===o||!d)&&clearTimeout)return d=clearTimeout,clearTimeout(t);try{return d(t)}catch(e){try{return d.call(null,t)}catch(e){return d.call(this,t)}}}function u(){v&&h&&(v=!1,h.length?m=h.concat(m):y=-1,m.length&&s())}function s(){if(!v){var t=i(u);v=!0;for(var e=m.length;e;){for(h=m,m=[];++y<e;)h&&h[y].run();y=-1,e=m.length}h=null,v=!1,c(t)}}function a(t,e){this.fun=t,this.array=e}function l(){}var f,d,p=t.exports={};!function(){try{f="function"==typeof setTimeout?setTimeout:r}catch(t){f=r}try{d="function"==typeof clearTimeout?clearTimeout:o}catch(t){d=o}}();var h,m=[],v=!1,y=-1;p.nextTick=function(t){var e=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)e[n-1]=arguments[n];m.push(new a(t,e)),1!==m.length||v||i(s)},a.prototype.run=function(){this.fun.apply(null,this.array)},p.title="browser",p.browser=!0,p.env={},p.argv=[],p.version="",p.versions={},p.on=l,p.addListener=l,p.once=l,p.off=l,p.removeListener=l,p.removeAllListeners=l,p.emit=l,p.prependListener=l,p.prependOnceListener=l,p.listeners=function(t){return[]},p.binding=function(t){throw new Error("process.binding is not supported")},p.cwd=function(){return"/"},p.chdir=function(t){throw new Error("process.chdir is not supported")},p.umask=function(){return 0}},function(t,e,n){"use strict";t.exports=function(t){return t.webpackPolyfill||(t.deprecate=function(){},t.paths=[],t.children||(t.children=[]),Object.defineProperty(t,"loaded",{enumerable:!0,get:function(){return t.l}}),Object.defineProperty(t,"id",{enumerable:!0,get:function(){return t.i}}),t.webpackPolyfill=1),t}},function(t,e,n){"use strict";function r(t){if(null===t||void 0===t)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(t)}/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var o=Object.getOwnPropertySymbols,i=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable;t.exports=function(){try{if(!Object.assign)return!1;var t=new String("abc");if(t[5]="de","5"===Object.getOwnPropertyNames(t)[0])return!1;for(var e={},n=0;n<10;n++)e["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(e).map(function(t){return e[t]}).join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach(function(t){r[t]=t}),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(t){return!1}}()?Object.assign:function(t,e){for(var n,u,s=r(t),a=1;a<arguments.length;a++){n=Object(arguments[a]);for(var l in n)i.call(n,l)&&(s[l]=n[l]);if(o){u=o(n);for(var f=0;f<u.length;f++)c.call(n,u[f])&&(s[u[f]]=n[u[f]])}}return s}},function(t,e,n){"use strict";var r;r=n(14),t.exports=function(){function t(){}return t.DEFAULT_CONTENT_TYPE="application/x-www-form-urlencoded; charset=UTF-8",t.prototype.send=function(t){var e;return null==t&&(t={}),e={method:"GET",data:null,headers:{},async:!0,username:null,password:null,withCredentials:!1},t=Object.assign({},e,t),new Promise(function(e){return function(n,r){var o,i,c,u,s;if(!XMLHttpRequest)return void e._handleError("browser",r,null,"browser doesn't support XMLHttpRequest");if("string"!=typeof t.url||0===t.url.length)return void e._handleError("url",r,null,"URL is a required parameter");e._xhr=s=new XMLHttpRequest,s.onload=function(){var t;e._detachWindowUnload();try{t=e._getResponseText()}catch(t){return void e._handleError("parse",r,null,"invalid JSON response")}return n({url:e._getResponseUrl(),status:s.status,statusText:s.statusText,responseText:t,headers:e._getHeaders(),xhr:s})},s.onerror=function(){return e._handleError("error",r)},s.ontimeout=function(){return e._handleError("timeout",r)},s.onabort=function(){return e._handleError("abort",r)},e._attachWindowUnload(),s.open(t.method,t.url,t.async,t.username,t.password),t.withCredentials&&(s.withCredentials=!0),null==t.data||t.headers["Content-Type"]||(t.headers["Content-Type"]=e.constructor.DEFAULT_CONTENT_TYPE),c=t.headers;for(i in c)u=c[i],s.setRequestHeader(i,u);try{return s.send(t.data)}catch(t){return o=t,e._handleError("send",r,null,o.toString())}}}(this))},t.prototype.getXHR=function(){return this._xhr},t.prototype._attachWindowUnload=function(){if(this._unloadHandler=this._handleWindowUnload.bind(this),window.attachEvent)return window.attachEvent("onunload",this._unloadHandler)},t.prototype._detachWindowUnload=function(){if(window.detachEvent)return window.detachEvent("onunload",this._unloadHandler)},t.prototype._getHeaders=function(){return r(this._xhr.getAllResponseHeaders())},t.prototype._getResponseText=function(){var t;switch(t="string"==typeof this._xhr.responseText?this._xhr.responseText:"",(this._xhr.getResponseHeader("Content-Type")||"").split(";")[0]){case"application/json":case"text/javascript":t=JSON.parse(t+"")}return t},t.prototype._getResponseUrl=function(){return null!=this._xhr.responseURL?this._xhr.responseURL:/^X-Request-URL:/m.test(this._xhr.getAllResponseHeaders())?this._xhr.getResponseHeader("X-Request-URL"):""},t.prototype._handleError=function(t,e,n,r){return this._detachWindowUnload(),e({reason:t,status:n||this._xhr.status,statusText:r||this._xhr.statusText,xhr:this._xhr})},t.prototype._handleWindowUnload=function(){return this._xhr.abort()},t}()},function(t,e,n){"use strict";var r=n(15),o=n(16),i=function(t){return"[object Array]"===Object.prototype.toString.call(t)};t.exports=function(t){if(!t)return{};var e={};return o(r(t).split("\n"),function(t){var n=t.indexOf(":"),o=r(t.slice(0,n)).toLowerCase(),c=r(t.slice(n+1));void 0===e[o]?e[o]=c:i(e[o])?e[o].push(c):e[o]=[e[o],c]}),e}},function(t,e,n){"use strict";function r(t){return t.replace(/^\s*|\s*$/g,"")}e=t.exports=r,e.left=function(t){return t.replace(/^\s*/,"")},e.right=function(t){return t.replace(/\s*$/,"")}},function(t,e,n){"use strict";function r(t,e,n){if(!u(e))throw new TypeError("iterator must be a function");arguments.length<3&&(n=this),"[object Array]"===s.call(t)?o(t,e,n):"string"==typeof t?i(t,e,n):c(t,e,n)}function o(t,e,n){for(var r=0,o=t.length;r<o;r++)a.call(t,r)&&e.call(n,t[r],r,t)}function i(t,e,n){for(var r=0,o=t.length;r<o;r++)e.call(n,t.charAt(r),r,t)}function c(t,e,n){for(var r in t)a.call(t,r)&&e.call(n,t[r],r,t)}var u=n(17);t.exports=r;var s=Object.prototype.toString,a=Object.prototype.hasOwnProperty},function(t,e,n){"use strict";function r(t){var e=o.call(t);return"[object Function]"===e||"function"==typeof t&&"[object RegExp]"!==e||"undefined"!=typeof window&&(t===window.setTimeout||t===window.alert||t===window.confirm||t===window.prompt)}t.exports=r;var o=Object.prototype.toString},function(t,e,n){"use strict";t.exports=function(t,e,n,r,o,i){function c(n){n.forEach(function(n){"USD"===n.ccy?t=(+n.sale).toFixed(2):"EUR"===n.ccy&&(e=(+n.sale).toFixed(2))}),r.innerHTML=t,o.innerHTML=e}function u(t){i.innerHTML=""+Math.round(t.main.temp-273.15)}n.send({method:"GET",url:"https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5",data:""}).then(function(t){if(200!==t.status)throw new Error("request failed");c(t.responseText),n.send({method:"GET",url:"http://api.openweathermap.org/data/2.5/weather?lat=50.4546600&lon=30.5238000&APPID=eb8183acf2cb85c1351fe1826283fc36",data:""}).then(function(t){if(200!==t.status)throw new Error("request failed");u(t.responseText)}).catch(function(t){console.error("XHR error")})}).catch(function(t){console.error("XHR error")})}},function(t,e){}]);