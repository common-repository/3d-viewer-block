!function(){"use strict";var e=wp.blocks,t=JSON.parse('{"apiVersion":"1","name":"tdvb/td-viewer","title":"3D Viewer","description":"Display interactive 3D models on the web.","category":"widgets","keywords":["3d","3d model","3d viewer"],"textdomain":"model-viewer","attributes":{"align":{"type":"string","default":""},"cId":{"type":"string","default":""},"alignment":{"type":"string","default":"center"},"sourceType":{"type":"string","default":"upload"},"model":{"type":"object","default":{"id":null,"url":"","title":""}},"modelLink":{"type":"string","default":""},"width":{"type":"string","default":"100%"},"height":{"type":"string","default":"350px"},"isTouchMove":{"type":"boolean","default":true},"isZoom":{"type":"boolean","default":true},"loadingType":{"type":"string","default":"auto"}},"supports":{"align":["wide","full"],"html":false},"example":{"attributes":{"preview":true,"sourceType":"link"}},"editorScript":"file:../dist/editor.js"}'),r=React,n=wp.i18n,o=function(e,t){if(!e)return[];var r=[],n=e.media_details.sizes,o=function(e){var o=t.find((function(t){return t.slug===e}));o&&r.push({label:o.name,value:n[e].source_url})};for(var a in n)o(a);return r},a=wp.blockEditor,l=wp.components,i=function(e){var t=e.className,r=void 0===t?"mt20 mb5":t,n=e.htmlFor,o=e.children;return React.createElement("label",{className:"bPlLabel ".concat(r),htmlFor:n},o)},c=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;return{value:"px",label:"px",default:e}},u=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;return{value:"%",label:"%",default:e}},s=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;return{value:"em",label:"em",default:e}};l.__experimentalGradientPicker||l.GradientPicker;var d=React.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:30,height:30,viewBox:"0 0 448 512"},React.createElement("path",{d:"M96 0C43 0 0 43 0 96V416c0 53 43 96 96 96H384h32c17.7 0 32-14.3 32-32s-14.3-32-32-32V384c17.7 0 32-14.3 32-32V32c0-17.7-14.3-32-32-32H384 96zm0 384H352v64H96c-17.7 0-32-14.3-32-32s14.3-32 32-32zm32-240c0-8.8 7.2-16 16-16H336c8.8 0 16 7.2 16 16s-7.2 16-16 16H144c-8.8 0-16-7.2-16-16zm16 48H336c8.8 0 16 7.2 16 16s-7.2 16-16 16H144c-8.8 0-16-7.2-16-16s7.2-16 16-16z"})),f=React.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:30,height:30,viewBox:"0 0 512 512"},React.createElement("path",{d:"M256 48C141.1 48 48 141.1 48 256v40c0 13.3-10.7 24-24 24s-24-10.7-24-24V256C0 114.6 114.6 0 256 0S512 114.6 512 256V400.1c0 48.6-39.4 88-88.1 88L313.6 488c-8.3 14.3-23.8 24-41.6 24H240c-26.5 0-48-21.5-48-48s21.5-48 48-48h32c17.8 0 33.3 9.7 41.6 24l110.4 .1c22.1 0 40-17.9 40-40V256c0-114.9-93.1-208-208-208zM144 208h16c17.7 0 32 14.3 32 32V352c0 17.7-14.3 32-32 32H144c-35.3 0-64-28.7-64-64V272c0-35.3 28.7-64 64-64zm224 0c35.3 0 64 28.7 64 64v48c0 35.3-28.7 64-64 64H352c-17.7 0-32-14.3-32-32V240c0-17.7 14.3-32 32-32h16z"})),m=React.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:30,height:30,viewBox:"0 0 576 512"},React.createElement("path",{d:"M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"})),p=React.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:30,height:30,viewBox:"0 0 448 512"},React.createElement("path",{d:"M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"}));l.__experimentalGradientPicker||l.GradientPicker;var h=function(e){var t=e.slug,r=e.docsLink;return React.createElement(l.PanelBody,{className:"bPlPanelBody bPlHelpPanel",title:(0,n.__)("Help","bplugins"),initialOpen:!1},React.createElement("div",{className:"helpItems"},r&&React.createElement("a",{href:r,target:"_blank",rel:"noreferrer"},d,React.createElement("p",null,(0,n.__)("Read Documentation","bplugins"))),React.createElement("a",{href:"https://bplugins.com/support",target:"_blank",rel:"noreferrer"},f,React.createElement("p",null,(0,n.__)("Contact Support","bplugins"))),t&&React.createElement("a",{href:"https://wordpress.org/support/plugin/".concat(t,"/reviews/#new-post"),target:"_blank",rel:"noreferrer"},m,React.createElement("p",null,(0,n.__)("Rate Plugin","bplugins"))),React.createElement("a",{href:"https://bplugins.com/products",target:"_blank",rel:"noreferrer"},p,React.createElement("p",null,(0,n.__)("Other Plugins","bplugins")))))};l.__experimentalGradientPicker||l.GradientPicker;var v=wp.data,g=wp.blob;function y(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function b(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?y(Object(r),!0).forEach((function(t){w(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):y(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function w(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}(0,v.withSelect)((function(e,t){var r=t.value;return{image:null!=r&&r.id?e("core").getMedia(null==r?void 0:r.id):null,imageSizes:e("core/block-editor").getSettings().imageSizes}}))((function(e){var t,r=e.className,a=e.value,c=void 0===a?{}:a,u=e.onChange,s=e.image,d=e.imageSizes,f=function(e,t){return u(b(b({},c),{},w({},e,t)))};return React.createElement("div",{className:r},(null==c?void 0:c.url)&&!(0,g.isBlobURL)(null==c?void 0:c.url)&&React.createElement(React.Fragment,null,React.createElement(i,{className:"mb5"},(0,n.__)("Alt Text (Alternative Text):","bplugins")),React.createElement(l.TextControl,{value:null==c?void 0:c.alt,onChange:function(e){return f("alt",e)}})),(null==c?void 0:c.id)&&0!==(null===(t=o(s,d))||void 0===t?void 0:t.length)&&React.createElement(l.PanelRow,null,React.createElement(i,{className:""},(0,n.__)("Select Size:","bplugins")),React.createElement(l.SelectControl,{value:null==c?void 0:c.url,onChange:function(e){return f("url",e)},options:o(s,d)})))})),(0,l.withNotices)((function(e){var t=e.label,r=void 0===t?(0,n.__)(" Image:","bplugins"):t,o=e.icon,l=void 0===o?"format-image":o,i=e.value,c=void 0===i?{}:i,u=e.onChange,s=e.noticeOperations,d=e.noticeUI;return React.createElement(a.MediaPlaceholder,{labels:{title:r},icon:l,allowedTypes:["image"],accept:"image/*",onSelect:function(e){var t=e.id,r=e.url,n=e.alt,o=e.title;return u(b(b({},c),{},{id:t,url:r,alt:n,title:o}))},onSelectURL:function(e){return u(b(b({},c),{},{id:null,url:e,alt:"",title:""}))},onError:function(e){return s.createErrorNotice(e)},notices:d})}));var E=function(e){var t=e.className,r=e.label,o=void 0===r?"":r,c=e.value,u=void 0===c?{}:c,s=e.types,d=void 0===s?["image"]:s,f=e.onChange,m=e.placeholder,p=void 0===m?(0,n.__)("Enter URL","bplugins"):m;return React.createElement("div",{className:t},o&&React.createElement(i,{className:"mb5"},o),React.createElement(l.PanelRow,{className:"bplInlineMediaUpload"},React.createElement(l.TextControl,{value:null==u?void 0:u.url,onChange:function(e){return f({id:null,url:e,alt:"",title:""})},placeholder:p}),React.createElement(a.MediaUploadCheck,null,React.createElement(a.MediaUpload,{allowedTypes:d,onSelect:function(e){var t=e.id,r=e.url,n=e.alt,o=e.title;return f({id:t,url:r,alt:n,title:o})},render:function(e){var t=e.open;return React.createElement(l.Button,{className:"button button-primary",onClick:t,icon:"upload"})}}))))};function _(e){return _="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},_(e)}function R(){/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */R=function(){return e};var e={},t=Object.prototype,r=t.hasOwnProperty,n="function"==typeof Symbol?Symbol:{},o=n.iterator||"@@iterator",a=n.asyncIterator||"@@asyncIterator",l=n.toStringTag||"@@toStringTag";function i(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{i({},"")}catch(e){i=function(e,t,r){return e[t]=r}}function c(e,t,r,n){var o=t&&t.prototype instanceof d?t:d,a=Object.create(o.prototype),l=new x(n||[]);return a._invoke=function(e,t,r){var n="suspendedStart";return function(o,a){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw a;return O()}for(r.method=o,r.arg=a;;){var l=r.delegate;if(l){var i=w(l,r);if(i){if(i===s)continue;return i}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var c=u(e,t,r);if("normal"===c.type){if(n=r.done?"completed":"suspendedYield",c.arg===s)continue;return{value:c.arg,done:r.done}}"throw"===c.type&&(n="completed",r.method="throw",r.arg=c.arg)}}}(e,r,l),a}function u(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(e){return{type:"throw",arg:e}}}e.wrap=c;var s={};function d(){}function f(){}function m(){}var p={};i(p,o,(function(){return this}));var h=Object.getPrototypeOf,v=h&&h(h(L([])));v&&v!==t&&r.call(v,o)&&(p=v);var g=m.prototype=d.prototype=Object.create(p);function y(e){["next","throw","return"].forEach((function(t){i(e,t,(function(e){return this._invoke(t,e)}))}))}function b(e,t){function n(o,a,l,i){var c=u(e[o],e,a);if("throw"!==c.type){var s=c.arg,d=s.value;return d&&"object"==_(d)&&r.call(d,"__await")?t.resolve(d.__await).then((function(e){n("next",e,l,i)}),(function(e){n("throw",e,l,i)})):t.resolve(d).then((function(e){s.value=e,l(s)}),(function(e){return n("throw",e,l,i)}))}i(c.arg)}var o;this._invoke=function(e,r){function a(){return new t((function(t,o){n(e,r,t,o)}))}return o=o?o.then(a,a):a()}}function w(e,t){var r=e.iterator[t.method];if(void 0===r){if(t.delegate=null,"throw"===t.method){if(e.iterator.return&&(t.method="return",t.arg=void 0,w(e,t),"throw"===t.method))return s;t.method="throw",t.arg=new TypeError("The iterator does not provide a 'throw' method")}return s}var n=u(r,e.iterator,t.arg);if("throw"===n.type)return t.method="throw",t.arg=n.arg,t.delegate=null,s;var o=n.arg;return o?o.done?(t[e.resultName]=o.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,s):o:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,s)}function E(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function k(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function x(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(E,this),this.reset(!0)}function L(e){if(e){var t=e[o];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var n=-1,a=function t(){for(;++n<e.length;)if(r.call(e,n))return t.value=e[n],t.done=!1,t;return t.value=void 0,t.done=!0,t};return a.next=a}}return{next:O}}function O(){return{value:void 0,done:!0}}return f.prototype=m,i(g,"constructor",m),i(m,"constructor",f),f.displayName=i(m,l,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===f||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,m):(e.__proto__=m,i(e,l,"GeneratorFunction")),e.prototype=Object.create(g),e},e.awrap=function(e){return{__await:e}},y(b.prototype),i(b.prototype,a,(function(){return this})),e.AsyncIterator=b,e.async=function(t,r,n,o,a){void 0===a&&(a=Promise);var l=new b(c(t,r,n,o),a);return e.isGeneratorFunction(r)?l:l.next().then((function(e){return e.done?e.value:l.next()}))},y(g),i(g,l,"Generator"),i(g,o,(function(){return this})),i(g,"toString",(function(){return"[object Generator]"})),e.keys=function(e){var t=[];for(var r in e)t.push(r);return t.reverse(),function r(){for(;t.length;){var n=t.pop();if(n in e)return r.value=n,r.done=!1,r}return r.done=!0,r}},e.values=L,x.prototype={constructor:x,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(k),!e)for(var t in this)"t"===t.charAt(0)&&r.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function n(r,n){return l.type="throw",l.arg=e,t.next=r,n&&(t.method="next",t.arg=void 0),!!n}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],l=a.completion;if("root"===a.tryLoc)return n("end");if(a.tryLoc<=this.prev){var i=r.call(a,"catchLoc"),c=r.call(a,"finallyLoc");if(i&&c){if(this.prev<a.catchLoc)return n(a.catchLoc,!0);if(this.prev<a.finallyLoc)return n(a.finallyLoc)}else if(i){if(this.prev<a.catchLoc)return n(a.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return n(a.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===e||"continue"===e)&&a.tryLoc<=t&&t<=a.finallyLoc&&(a=null);var l=a?a.completion:{};return l.type=e,l.arg=t,a?(this.method="next",this.next=a.finallyLoc,s):this.complete(l)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),s},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),k(r),s}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var o=n.arg;k(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,r){return this.delegate={iterator:L(e),resultName:t,nextLoc:r},"next"===this.method&&(this.arg=void 0),s}},e}function k(e,t,r,n,o,a,l){try{var i=e[a](l),c=i.value}catch(e){return void r(e)}i.done?t(c):Promise.resolve(c).then(n,o)}function x(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==r)return;var n,o,a=[],l=!0,i=!1;try{for(r=r.call(e);!(l=(n=r.next()).done)&&(a.push(n.value),!t||a.length!==t);l=!0);}catch(e){i=!0,o=e}finally{try{l||null==r.return||r.return()}finally{if(i)throw o}}return a}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return L(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return L(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function L(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var O=function(e,t){var n=x((0,r.useState)(!0),2),o=n[0],a=n[1],l=x((0,r.useState)(!1),2),i=l[0],c=l[1],u=x((0,r.useState)(!1),2),s=u[0],d=u[1],f=x((0,r.useState)(null),2),m=f[0],p=f[1],h=x((0,r.useState)(null),2),v=h[0],g=h[1];(0,r.useEffect)((function(){y()}),[]);var y=function(){var r,n=(r=R().mark((function r(){var n,o,l;return R().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return c(!0),n=Object.keys(t).map((function(e){return"".concat(e,"=").concat(t[e])})).join("&"),r.prev=2,r.next=5,fetch("".concat(e,"?").concat(n));case 5:return o=r.sent,r.next=8,o.json();case 8:l=r.sent;try{g(JSON.parse(null==l?void 0:l.data))}catch(e){g(null==l?void 0:l.data)}a(!1),r.next=18;break;case 13:r.prev=13,r.t0=r.catch(2),d(!0),p(r.t0.message),a(!1);case 18:case"end":return r.stop()}}),r,null,[[2,13]])})),function(){var e=this,t=arguments;return new Promise((function(n,o){var a=r.apply(e,t);function l(e){k(a,n,o,l,i,"next",e)}function i(e){k(a,n,o,l,i,"throw",e)}l(void 0)}))});return function(){return n.apply(this,arguments)}}();return{data:v,isLoading:o,isLoaded:i,isError:s,error:m}},P=((0,n.__)("Upload","model-viewer"),(0,n.__)("Link","model-viewer"),[{label:(0,n.__)("Auto","model-viewer"),value:"auto"},{label:(0,n.__)("Lazy","model-viewer"),value:"lazy"},{label:(0,n.__)("Eager","model-viewer"),value:"eager"}]);function S(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function j(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?S(Object(r),!0).forEach((function(t){N(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):S(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function N(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var T=function(e){var t,r,o=e.attributes,d=e.setAttributes,f=o.alignment,m=o.model,p=o.width,v=o.height,g=o.isTouchMove,y=o.isZoom,b=o.loadingType,w=O(null===(t=bp3dBlock)||void 0===t?void 0:t.ajaxURL,{action:"bp3d_pipe_checker",_wpnonce:null===(r=bp3dBlock)||void 0===r?void 0:r.nonce}),_=w.data,R=!w.isLoading&&(null==_?void 0:_.isPipe);return React.createElement(React.Fragment,null,React.createElement(a.InspectorControls,null,!R&&React.createElement("div",{className:"tdvbInspectorInfo"},"Upgrade to pro version to get more options ➡ ",React.createElement("a",{href:"https://bplugins.com/products/3d-viewer",target:"_blank",rel:"noopener noreferrer"},"Upgrade Now")),React.createElement(h,{slug:"3d-viewer-block",docsLink:"https://bblockswp.com/docs/3d-viewer-block"}),React.createElement(l.PanelBody,{className:"bPlPanelBody",title:(0,n.__)("3D Model Settings","model-viewer")},React.createElement(i,{className:""},(0,n.__)("Model Source (.glb or .gltf)","b-blocks")),React.createElement(E,{types:["model/gltf-binary"],value:m,onChange:function(e){return d({model:e})},placeholder:(0,n.__)("Enter Model URL","b-blocks")}),React.createElement(l.Notice,{className:"mt10",status:"warning",isDismissible:!1},(0,n.__)("File upload issue? Please refresh this page once, if you just install the plugin from Gutenberg editor.")),React.createElement(l.__experimentalUnitControl,{className:"mt20",label:(0,n.__)("Width:","model-viewer"),labelPosition:"left",value:p,onChange:function(e){return d({width:e})},units:[c(),u(),s()]}),React.createElement("small",null,(0,n.__)("Keep width 0, to auto width.","model-viewer")),React.createElement(l.__experimentalUnitControl,{className:"mt20",label:(0,n.__)("Height:","model-viewer"),labelPosition:"left",value:v,onChange:function(e){return d({height:e})},units:[c(),u(),s()]}),React.createElement("small",null,(0,n.__)("Keep height 0, to 350px height.","model-viewer")),React.createElement(l.ToggleControl,{className:"mt20",label:(0,n.__)("Controls via mouse/touch","model-viewer"),checked:g,onChange:function(e){return d({isTouchMove:e})}}),g&&React.createElement(React.Fragment,null,React.createElement(l.ToggleControl,{className:"mt20",label:(0,n.__)("Zoom","model-viewer"),checked:y,onChange:function(e){return d({isZoom:e})}}),React.createElement("small",null,(0,n.__)("Enable 'Controls via mouse/touch' to work Zoom!","model-viewer"))),React.createElement(l.PanelRow,{className:"mt20"},React.createElement(i,{className:""},(0,n.__)("Loading Type:","model-viewer")),React.createElement(l.SelectControl,{value:b,onChange:function(e){return d({loadingType:e})},options:P})))),React.createElement(a.BlockControls,null,(null==m?void 0:m.url)&&React.createElement(l.ToolbarGroup,{className:"bPlToolbar"},React.createElement(a.MediaUploadCheck,null,React.createElement(a.MediaUpload,{allowedTypes:["model/gltf-binary"],value:null==m?void 0:m.id,onSelect:function(e){var t=e.id,r=e.url,n=e.title;return d({model:j(j({},m),{},{id:t,url:r,title:n})})},render:function(e){var t=e.open;return React.createElement(l.ToolbarButton,{label:(0,n.__)("Edit 3D Model:","model-viewer"),icon:"edit",onClick:t})}}))),React.createElement(a.AlignmentToolbar,{value:f,onChange:function(e){return d({alignment:e})},describedBy:(0,n.__)("3D Model Alignment"),alignmentControls:[{title:(0,n.__)("3D Model in left","model-viewer"),align:"left",icon:"align-left"},{title:(0,n.__)("3D Model in center","model-viewer"),align:"center",icon:"align-center"},{title:(0,n.__)("3D Model in right","model-viewer"),align:"right",icon:"align-right"}]})))},C=function(e){var t=e.attributes,r=e.clientId,n=t.alignment,o=t.width,a=t.height;return React.createElement("style",{dangerouslySetInnerHTML:{__html:"\n\t\t#tdvb3DViewerBlock-".concat(r," .tdvb3DViewerBlock{\n\t\t\ttext-align: ").concat(n,";\n\t\t}\n\t\t#tdvb3DViewerBlock-").concat(r," .tdvb3DViewerBlock model-viewer{\n\t\t\twidth: ").concat(["0px","0%","0em"].includes(o)?"auto":o,";\n\t\t\theight: ").concat("0px"===a||"0%"===a||"0em"===a?"350px":a,";\n\t\t}\n\t\t").replace(/\s+/g," ")}})},M=function(e,t){var r=e.attributes,n=r.sourceType,o=r.model,a=r.modelLink,l=r.loadingType;return React.createElement("div",{className:"tdvb3DViewerBlock",ref:t},React.createElement("model-viewer",{src:"upload"===n?null==o?void 0:o.url:a,alt:"upload"===n?null==o?void 0:o.title:"","camera-controls":!0,loading:l,"auto-rotate":!0}))},D=(0,r.forwardRef)(M),B=function(e){var t=e.className,o=e.attributes,a=e.setAttributes,l=e.clientId,i=e.isSelected,c=o.sourceType,u=o.model,s=o.modelLink,d=o.isTouchMove,f=o.isZoom,m=o.loadingType;(0,r.useEffect)((function(){l&&a({cId:l.substring(0,10)})}),[l]),(0,r.useEffect)((function(){setTimeout((function(){var e=document.querySelectorAll(".components-panel__body-title button");function t(){var r=this;this.removeEventListener("click",t),e.forEach((function(e){"true"!==e.getAttribute("aria-expanded")||e.isEqualNode(r)||e.click()})),setTimeout((function(){r.addEventListener("click",t)}),500)}e.forEach((function(e){e.addEventListener("click",t)}))}),500)}),[i]);var p=(0,r.useRef)(null),h=function(e,t,r,n){t&&(null==e||e.setAttribute(r,n)),!t&&(null==e||e.removeAttribute(r,n))};return(0,r.useEffect)((function(){p.current.innerHTML="";var e=document.createElement("model-viewer");h(e,!0,"class","tdvbModel"),h(e,!0,"src","upload"===c?null==u?void 0:u.url:s),h(e,!0,"alt","upload"===c?null==u?void 0:u.title:""),h(e,d,"camera-controls",""),h(e,!f,"disable-zoom",""),h(e,!0,"loading",m),h(e,!0,"auto-rotate",""),p.current.appendChild(e)}),[c,u,s,d,f,m]),React.createElement(React.Fragment,null,React.createElement(T,{attributes:o,setAttributes:a,clientId:l}),React.createElement("div",{className:t,id:"tdvb3DViewerBlock-".concat(l)},React.createElement(C,{attributes:o,clientId:l}),"upload"!==c||u.url?"":React.createElement("p",{className:"noModel"},(0,n.__)("Please, upload Model or enter Model Link first!","model-viewer")),React.createElement(D,{attributes:o,ref:p})))},A=React.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 512 512"},React.createElement("path",{fill:"#4527a4",d:"M68.983,382.642l171.35,98.928a32.082,32.082,0,0,0,32,0l171.352-98.929a32.093,32.093,0,0,0,16-27.713V157.071a32.092,32.092,0,0,0-16-27.713L272.334,30.429a32.086,32.086,0,0,0-32,0L68.983,129.358a32.09,32.09,0,0,0-16,27.713V354.929A32.09,32.09,0,0,0,68.983,382.642ZM272.333,67.38l155.351,89.691V334.449L272.333,246.642ZM256.282,274.327l157.155,88.828-157.1,90.7L99.179,363.125ZM84.983,157.071,240.333,67.38v179.2L84.983,334.39Z"}));(0,e.registerBlockType)(t,{icon:A,edit:B,save:function(){return null}})}();
//# sourceMappingURL=editor.js.map