var _____WB$wombat$assign$function_____ = function(name) {return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name)) || self[name]; };
if (!self.__WB_pmw) { self.__WB_pmw = function(obj) { this.__WB_source = obj; return this; } }
{
  let window = _____WB$wombat$assign$function_____("window");
  let self = _____WB$wombat$assign$function_____("self");
  let document = _____WB$wombat$assign$function_____("document");
  let location = _____WB$wombat$assign$function_____("location");
  let top = _____WB$wombat$assign$function_____("top");
  let parent = _____WB$wombat$assign$function_____("parent");
  let frames = _____WB$wombat$assign$function_____("frames");
  let opener = _____WB$wombat$assign$function_____("opener");

!function(e){var r={};function o(n){var t;return(r[n]||(t=r[n]={i:n,l:!1,exports:{}},e[n].call(t.exports,t,t.exports,o),t.l=!0,t)).exports}o.m=e,o.c=r,o.d=function(n,t,e){o.o(n,t)||Object.defineProperty(n,t,{enumerable:!0,get:e})},o.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"u",{value:!0})},o.t=function(t,n){if(1&n&&(t=o(t)),8&n)return t;if(4&n&&"object"==typeof t&&t&&t.u)return t;var e=Object.create(null);if(o.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var r in t)o.d(e,r,function(n){return t[n]}.bind(null,r));return e},o.n=function(n){var t=n&&n.u?function(){return n.default}:function(){return n};return o.d(t,"a",t),t},o.o=function(n,t){return Object.prototype.hasOwnProperty.call(n,t)},o.p="",o(o.s=1)}([function(n,t){function e(n,t){return function(n){if(Array.isArray(n))return n}(n)||function(n,t){var e=null==n?null:"undefined"!=typeof Symbol&&n[Symbol.iterator]||n["@@iterator"];if(null!=e){var r,o,i=[],c=!0,a=!1;try{for(e=e.call(n);!(c=(r=e.next()).done)&&(i.push(r.value),!t||i.length!==t);c=!0);}catch(n){a=!0,o=n}finally{try{c||null==e.return||e.return()}finally{if(a)throw o}}return i}}(n,t)||function(n,t){var e;if(n)return"string"==typeof n?r(n,t):"Map"===(e="Object"===(e=Object.prototype.toString.call(n).slice(8,-1))&&n.constructor?n.constructor.name:e)||"Set"===e?Array.from(n):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?r(n,t):void 0}(n,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function r(n,t){(null==t||t>n.length)&&(t=n.length);for(var e=0,r=new Array(t);e<t;e++)r[e]=n[e];return r}var o={};o.LIST={FP_LOCAL_STORAGE:{chance:100,uri:"fp_localStorage"},DERIVED_EPIK:{chance:100,uri:"pin-derived-epik"},SCRAPE_LISTENERS:{chance:100,uri:"pin-scrape-listeners"},FETCH_API_V3:{chance:0,uri:"pin-fetch-api-v3"},SEND_LOGS:{chance:100,uri:"pin-log-errors"}};for(var i=0,c=Object.entries(o.LIST);i<c.length;i++){var a=e(c[i],2),u=a[0],a=a[1];"true"===new URLSearchParams(window.location.search).get(a.uri)&&(o.LIST[u].chance=100)}o.isInRampPercentage=function(n){return 100*Math.random()<(n||0)},n.exports=o},function(n,t,e){var r,o,i;r=document,o=e(0),i=e(2),(e=r.createElement("script")).async=!0,window.pintrk.mh="b68cecd9",i.setVersion("b68cecd9"),o.isInRampPercentage(o.LIST.SEND_LOGS.chance)&&(e.onerror=function(){i.error("Failed to load ".concat("b68cecd9"),new Error("failed to load main.js"))}),e.src="https://web.archive.org/web/20230601131249/https://s.pinimg.com/ct/lib/main.b68cecd9.js",(o=r.getElementsByTagName("script")[0]).parentNode.insertBefore(e,o)},function(n,t,e){var r=e(0),o={},i="unknown";o.setVersion=function(n){i=n},o.v=function(n){var t=new window.XMLHttpRequest;t.withCredentials=!1,t.onerror=function(){console.error("Error message failed to send")},t.open("POST","https://web.archive.org/web/20230601131249/https://ct.pinterest.com/stats/",!1),t.setRequestHeader("Content-Type","application/json"),t.send(JSON.stringify(n))},o.error=function(n,t){var e={messageType:"ERROR",message:n,log:"[".concat(2<arguments.length&&void 0!==arguments[2]?arguments[2]:"Empty","]")};t.hasOwnProperty("stack")?e.log+="[".concat(t.stack,"]"):e.log+="[".concat(t.message,"]"),e.version=i,100*Math.random()<(r.LIST.SEND_LOGS.chance||0)&&o.v(e)},n.exports=o}]);

}
/*
     FILE ARCHIVED ON 13:12:49 Jun 01, 2023 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 04:51:38 Dec 16, 2024.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 0.491
  exclusion.robots: 0.015
  exclusion.robots.policy: 0.007
  esindex: 0.01
  cdx.remote: 19.366
  LoadShardBlock: 557.289 (6)
  PetaboxLoader3.datanode: 356.401 (7)
  PetaboxLoader3.resolve: 4023.826 (2)
  load_resource: 4002.057
*/