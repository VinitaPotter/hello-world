(function(e){function t(t){for(var r,a,i=t[0],c=t[1],l=t[2],d=0,p=[];d<i.length;d++)a=i[d],Object.prototype.hasOwnProperty.call(s,a)&&s[a]&&p.push(s[a][0]),s[a]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);u&&u(t);while(p.length)p.shift()();return o.push.apply(o,l||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],r=!0,i=1;i<n.length;i++){var c=n[i];0!==s[c]&&(r=!1)}r&&(o.splice(t--,1),e=a(a.s=n[0]))}return e}var r={},s={app:0},o=[];function a(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=e,a.c=r,a.d=function(e,t,n){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)a.d(n,r,function(t){return e[t]}.bind(null,r));return n},a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],c=i.push.bind(i);i.push=t,i=i.slice();for(var l=0;l<i.length;l++)t(i[l]);var u=c;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"07ee":function(e,t,n){e.exports=n.p+"img/02n.70978314.svg"},1355:function(e,t,n){},"29d8":function(e,t,n){e.exports=n.p+"img/04n.c9b16560.svg"},"2d31":function(e,t,n){e.exports=n.p+"img/09d.d7746b88.svg"},"31e8":function(e,t,n){var r={"./01d.svg":"6b64","./01n.svg":"7fee","./02d.svg":"7c5a","./02n.svg":"07ee","./03d.svg":"469e","./03n.svg":"b655","./04d.svg":"fbc8","./04n.svg":"29d8","./09d.svg":"2d31","./10d.svg":"c7bb","./11d.svg":"d043","./13d.svg":"60c6","./50d.svg":"b30d"};function s(e){var t=o(e);return n(t)}function o(e){if(!n.o(r,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return r[e]}s.keys=function(){return Object.keys(r)},s.resolve=o,e.exports=s,s.id="31e8"},"469e":function(e,t,n){e.exports=n.p+"img/03d.14139fd6.svg"},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r,s=n("2b0e"),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("HelloWorld")],1)},a=[],i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"hello"},[e.latest_weather?n("div",{staticClass:"weather-card"},[n("img",{staticClass:"weather-card-icon",attrs:{src:e.icon,alt:""}}),n("div",{staticClass:"weather-card-text"},[n("div",{staticClass:"heading"},[e._v(e._s(e.city))]),n("div",{staticClass:"is_capitalized"},[e._v(e._s(e.latest_weather.description))]),n("div",{staticClass:"temprature"},[n("p",[e._v(" Temprature: "),n("span",[e._v(e._s(e.latest_temp.temp)+"°C")])]),n("p",[e._v(" Feels like: "),n("span",[e._v(e._s(e.latest_temp.feels_like)+"°C")])])])])]):e._e(),n("div",{staticClass:"heading-news"},[e._v("Latest in Tech for you")]),n("div",{staticClass:"news-card has-slimscroll"},[e._l(e.latest_news,(function(t){return n("div",{key:t.id,staticClass:"news"},[n("a",{staticClass:"headline",attrs:{href:"news.url"}},[e._v(e._s(t.title))]),n("p",{staticClass:"author"},[e._v(" By "+e._s(t.author)+" "),n("span",{staticClass:"date"},[e._v("On "+e._s(new Date(t.publishedAt).toLocaleDateString()))])]),n("img",{staticClass:"image",attrs:{src:t.urlToImage,alt:""}}),n("p",{staticClass:"source"},[e._v(e._s(t.source.name))]),n("p",{staticClass:"content"},[e._v(e._s(t.description?t.description:t.content))])])})),n("div",{staticClass:"heading"},[e._v("That's all for now")])],2)])},c=[],l=(n("b0c0"),n("bc3a")),u=n.n(l),d={data:function(){return{latest_news:null,latest_weather:null,city:null,latest_temp:null,weather_icon:null}},created:function(){this.getNews(),this.getWeather()},computed:{icon:function(){return this.weather_icon?n("31e8")("./".concat(this.weather_icon,".svg")):n("e9e7")}},methods:{getNews:function(){var e=this,t="https://newsapi.org/v2/everything?q=tech&apiKey=".concat("2b7517120b1544848ff22874dfb1e09c");u.a.get(t).then((function(t){return e.latest_news=t.data.articles}))},getWeather:function(){var e=this,t="http://api.openweathermap.org/data/2.5/weather?q=Pune,in&units=metric&APPID=".concat("616d78d136fdd9d7fa8b7e1a97546e2e");u.a.get(t).then((function(t){e.city=t.data.name,e.latest_weather=t.data.weather[0],e.latest_temp=t.data.main,e.weather_icon=e.latest_weather.icon}))}}},p=d,f=(n("7d5b"),n("2877")),g=Object(f["a"])(p,i,c,!1,null,null,null),v=g.exports,h={name:"App",components:{HelloWorld:v}},b=h,_=(n("5c0b"),Object(f["a"])(b,o,a,!1,null,null,null)),w=_.exports,m=n("9483"),y=n("a543"),x=n.n(y),C=function(e){x.a.confirm("New content!",(function(){e.postMessage({action:"skipWaiting"})}))};Object(m["a"])("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh."),C(m["a"].waiting)},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}}),navigator.serviceWorker.addEventListener("controllerchange",(function(){r||(window.location.reload(),r=!0)})),s["a"].config.productionTip=!1,new s["a"]({render:function(e){return e(w)}}).$mount("#app")},"5c0b":function(e,t,n){"use strict";var r=n("9c0c"),s=n.n(r);s.a},"60c6":function(e,t,n){e.exports=n.p+"img/13d.1b183801.svg"},"6b64":function(e,t,n){e.exports=n.p+"img/01d.cd050a35.svg"},"7c5a":function(e,t,n){e.exports=n.p+"img/02d.c5f4ea6c.svg"},"7d5b":function(e,t,n){"use strict";var r=n("1355"),s=n.n(r);s.a},"7fee":function(e,t,n){e.exports=n.p+"img/01n.7dd8472d.svg"},"9c0c":function(e,t,n){},b30d:function(e,t,n){e.exports=n.p+"img/50d.727bb27e.svg"},b655:function(e,t,n){e.exports=n.p+"img/03n.030023d3.svg"},c7bb:function(e,t,n){e.exports=n.p+"img/10d.3b9abaf2.svg"},d043:function(e,t,n){e.exports=n.p+"img/11d.9e7b8f8e.svg"},e9e7:function(e,t,n){e.exports=n.p+"img/sun.12e578c7.png"},fbc8:function(e,t,n){e.exports=n.p+"img/04d.f68bda5c.svg"}});
//# sourceMappingURL=app.99326117.js.map