;/*FB_PKG_DELIM*/

__d("MAWBridgeLoggingUtils",["ODS"],(function(a,b,c,d,e,f,g){"use strict";function h(a,b,c){d("ODS").bumpEntityKey(3185,"armadillo_worker_runtime",a+"_"+b+"_"+c)}function a(a,b){return h(a,b,"start")}function b(a,b){return h(a,b,"success")}function c(a,b){return h(a,b,"fail")}function e(a,b){return h(a,b,"timeout")}g.routeStart=a;g.routeSuccess=b;g.routeFail=c;g.routeTimeout=e}),98);
__d("WALoadMozjpegWasm",["Promise","WAMozjpegWasm","WAPromiseManagement","WATagsLogger"],(function(a,b,c,d,e,f,g){"use strict";var h;function i(){var a=babelHelpers.taggedTemplateLiteralLoose([" failed to load mozjpeg wasm ",""]);i=function(){return a};return a}function j(){var a=babelHelpers.taggedTemplateLiteralLoose(["fetched mozjpeg wasm"]);j=function(){return a};return a}function k(){var a=babelHelpers.taggedTemplateLiteralLoose(["no cached mozjpeg wasm, start fetching a new one"]);k=function(){return a};return a}function l(){var a=babelHelpers.taggedTemplateLiteralLoose(["loaded cached mozjpeg wasm"]);l=function(){return a};return a}function m(){var a=babelHelpers.taggedTemplateLiteralLoose(["start loading mozjpeg wasm..."]);m=function(){return a};return a}var n=d("WATagsLogger").TAGS(["load-mozjpeg-wasm"]),o=null;function a(a){n.DEV(m());if(o!=null){n.DEV(l());return(h||(h=b("Promise"))).resolve(o)}n.DEV(k());return p(a).then(function(a){o=a;return o})}var p=d("WAPromiseManagement").cacheWhilePending(function(){return"all"},function(a){return c("WAMozjpegWasm")({instantiateWasm:function(b,c){void WebAssembly.instantiateStreaming(self.fetch(a),b).then(function(a){n.DEV(j()),c(a.instance)});return{}}})["catch"](function(a){n.ERROR(i(),a);throw a})});g.loadMozjpegWasm=a}),98);