/*! For license information please see main.js.LICENSE.txt */
(()=>{"use strict";var t=function(t){return t.ok?t.json():Promise.reject("Ошибка: ".concat(t.status))};function e(t){console.error(t)}function r(t){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},r(t)}function n(){n=function(){return e};var t,e={},o=Object.prototype,i=o.hasOwnProperty,a=Object.defineProperty||function(t,e,r){t[e]=r.value},u="function"==typeof Symbol?Symbol:{},c=u.iterator||"@@iterator",l=u.asyncIterator||"@@asyncIterator",s=u.toStringTag||"@@toStringTag";function f(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{f({},"")}catch(t){f=function(t,e,r){return t[e]=r}}function p(t,e,r,n){var o=e&&e.prototype instanceof b?e:b,i=Object.create(o.prototype),u=new T(n||[]);return a(i,"_invoke",{value:q(t,r,u)}),i}function h(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}e.wrap=p;var d="suspendedStart",v="suspendedYield",y="executing",m="completed",g={};function b(){}function _(){}function w(){}var L={};f(L,c,(function(){return this}));var E=Object.getPrototypeOf,S=E&&E(E(I([])));S&&S!==o&&i.call(S,c)&&(L=S);var x=w.prototype=b.prototype=Object.create(L);function C(t){["next","throw","return"].forEach((function(e){f(t,e,(function(t){return this._invoke(e,t)}))}))}function k(t,e){function n(o,a,u,c){var l=h(t[o],t,a);if("throw"!==l.type){var s=l.arg,f=s.value;return f&&"object"==r(f)&&i.call(f,"__await")?e.resolve(f.__await).then((function(t){n("next",t,u,c)}),(function(t){n("throw",t,u,c)})):e.resolve(f).then((function(t){s.value=t,u(s)}),(function(t){return n("throw",t,u,c)}))}c(l.arg)}var o;a(this,"_invoke",{value:function(t,r){function i(){return new e((function(e,o){n(t,r,e,o)}))}return o=o?o.then(i,i):i()}})}function q(e,r,n){var o=d;return function(i,a){if(o===y)throw Error("Generator is already running");if(o===m){if("throw"===i)throw a;return{value:t,done:!0}}for(n.method=i,n.arg=a;;){var u=n.delegate;if(u){var c=P(u,n);if(c){if(c===g)continue;return c}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(o===d)throw o=m,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);o=y;var l=h(e,r,n);if("normal"===l.type){if(o=n.done?m:v,l.arg===g)continue;return{value:l.arg,done:n.done}}"throw"===l.type&&(o=m,n.method="throw",n.arg=l.arg)}}}function P(e,r){var n=r.method,o=e.iterator[n];if(o===t)return r.delegate=null,"throw"===n&&e.iterator.return&&(r.method="return",r.arg=t,P(e,r),"throw"===r.method)||"return"!==n&&(r.method="throw",r.arg=new TypeError("The iterator does not provide a '"+n+"' method")),g;var i=h(o,e.iterator,r.arg);if("throw"===i.type)return r.method="throw",r.arg=i.arg,r.delegate=null,g;var a=i.arg;return a?a.done?(r[e.resultName]=a.value,r.next=e.nextLoc,"return"!==r.method&&(r.method="next",r.arg=t),r.delegate=null,g):a:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,g)}function j(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function O(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function T(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(j,this),this.reset(!0)}function I(e){if(e||""===e){var n=e[c];if(n)return n.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var o=-1,a=function r(){for(;++o<e.length;)if(i.call(e,o))return r.value=e[o],r.done=!1,r;return r.value=t,r.done=!0,r};return a.next=a}}throw new TypeError(r(e)+" is not iterable")}return _.prototype=w,a(x,"constructor",{value:w,configurable:!0}),a(w,"constructor",{value:_,configurable:!0}),_.displayName=f(w,s,"GeneratorFunction"),e.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===_||"GeneratorFunction"===(e.displayName||e.name))},e.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,w):(t.__proto__=w,f(t,s,"GeneratorFunction")),t.prototype=Object.create(x),t},e.awrap=function(t){return{__await:t}},C(k.prototype),f(k.prototype,l,(function(){return this})),e.AsyncIterator=k,e.async=function(t,r,n,o,i){void 0===i&&(i=Promise);var a=new k(p(t,r,n,o),i);return e.isGeneratorFunction(r)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},C(x),f(x,s,"Generator"),f(x,c,(function(){return this})),f(x,"toString",(function(){return"[object Generator]"})),e.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},e.values=I,T.prototype={constructor:T,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(O),!e)for(var r in this)"t"===r.charAt(0)&&i.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=t)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var r=this;function n(n,o){return u.type="throw",u.arg=e,r.next=n,o&&(r.method="next",r.arg=t),!!o}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],u=a.completion;if("root"===a.tryLoc)return n("end");if(a.tryLoc<=this.prev){var c=i.call(a,"catchLoc"),l=i.call(a,"finallyLoc");if(c&&l){if(this.prev<a.catchLoc)return n(a.catchLoc,!0);if(this.prev<a.finallyLoc)return n(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return n(a.catchLoc,!0)}else{if(!l)throw Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return n(a.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&i.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var o=n;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var a=o?o.completion:{};return a.type=t,a.arg=e,o?(this.method="next",this.next=o.finallyLoc,g):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),g},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),O(r),g}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;O(r)}return o}}throw Error("illegal catch attempt")},delegateYield:function(e,r,n){return this.delegate={iterator:I(e),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=t),g}},e}function o(t,e,r,n,o,i,a){try{var u=t[i](a),c=u.value}catch(t){return void r(t)}u.done?e(c):Promise.resolve(c).then(n,o)}function i(t){return function(){var e=this,r=arguments;return new Promise((function(n,i){var a=t.apply(e,r);function u(t){o(a,n,i,u,c,"next",t)}function c(t){o(a,n,i,u,c,"throw",t)}u(void 0)}))}}function a(t,e,n){return(e=function(t){var e=function(t){if("object"!=r(t)||!t)return t;var e=t[Symbol.toPrimitive];if(void 0!==e){var n=e.call(t,"string");if("object"!=r(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"==r(e)?e:e+""}(e))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var u="564003e5-ae42-4237-b04a-556ce8c54f95",c={baseUrl:"https://nomoreparties.co/v1/wff-cohort-33/",headers:{authorization:u,"Content-Type":"application/json"}},l=a(a(a({cards:"cards/",usersMe:"users/me/"},"usersMe","users/me/"),"likes","likes/"),"avatar","avatar");function s(e,r){return fetch("".concat(c.baseUrl).concat(e),r).then(t)}var f=function(){var t=i(n().mark((function t(e){return n().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s(e,{headers:c.headers});case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),p=function(){var t=i(n().mark((function t(e,r){return n().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",s(e,{method:"PATCH",headers:c.headers,body:JSON.stringify(r)}));case 1:case"end":return t.stop()}}),t)})));return function(e,r){return t.apply(this,arguments)}}(),h=function(){var t=i(n().mark((function t(e,r){return n().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",s(e,{method:"POST",headers:c.headers,body:JSON.stringify(r)}));case 1:case"end":return t.stop()}}),t)})));return function(e,r){return t.apply(this,arguments)}}(),d=function(){var t=i(n().mark((function t(e,r){return n().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",s("".concat(e).concat(r),{method:"DELETE",headers:{authorization:u}}));case 1:case"end":return t.stop()}}),t)})));return function(e,r){return t.apply(this,arguments)}}(),v=function(){var t=i(n().mark((function t(e,r){return n().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",s("".concat(e).concat(r),{method:"PUT",headers:{authorization:u}}));case 1:case"end":return t.stop()}}),t)})));return function(e,r){return t.apply(this,arguments)}}();function y(t){var r,n=t.target.closest(".card");(r=n.getAttribute("data-id"),d(l.cards,r)).then((function(){n&&n.remove()})).catch(e)}function m(t){var e,r,n,o=t.item,i=t.deleteCard,a=t.likeHeart,u=t.handleImageClick,c=t.elementTemplate,l=t.ownerId,s=c.querySelector(".card").cloneNode(!0);s.setAttribute("data-id",o._id);var f=s.querySelector(".card__image"),p=s.querySelector(".card__like-count");p.textContent=(null==o||null===(e=o.likes)||void 0===e?void 0:e.length)||0,f.src=o.link,f.alt=o.name,s.querySelector(".card__title").textContent=o.name;var h=s.querySelector(".card__delete-button"),d=s.querySelector(".card__like-button");return null==o||null===(r=o.likes)||void 0===r||r.forEach((function(t){t._id===l&&d.classList.toggle("card__like-button_is-active")})),l!==(null===(n=o.owner)||void 0===n?void 0:n._id)?h.remove():h.addEventListener("click",(function(t){i(t)})),d.addEventListener("click",(function(){a(d,p,o._id)})),f.addEventListener("click",(function(){return u(o,f)})),s}function g(t,r,n){t.disabled=!0,t.classList.contains("card__like-button_is-active")?function(t){return d("".concat(l.cards).concat(l.likes),t)}(n).then((function(e){var n=e.likes;r.textContent=n.length,t.classList.toggle("card__like-button_is-active")})).catch(e).finally((function(){t.disabled=!1})):function(t){return v("".concat(l.cards).concat(l.likes),t)}(n).then((function(e){var n=e.likes;r.textContent=n.length,t.classList.toggle("card__like-button_is-active")})).catch(e).finally((function(){t.disabled=!1}))}var b=function(t){"Escape"===t.key&&w(document.querySelector(".visible"))};function _(t){t.classList.add("visible"),document.addEventListener("keydown",b)}function w(t){t.classList.remove("visible"),document.removeEventListener("keydown",b)}function L(t,e,r){t.addEventListener("click",(function(){_(e),r&&r()}))}function E(t){var e=t.buttonElement;t.isLoading?(e.disabled=!0,e.textContent="Сохранение..."):(e.disabled=!1,e.textContent="Сохранить")}function S(t,e){var r=arguments.length>2&&void 0!==arguments[2]&&arguments[2],n=Array.from(t.querySelectorAll(e.inputSelector)),o=t.querySelector(e.submitButtonSelector);q({formInputs:n,form:t,popupButton:o,subscribe:r,validationConfig:e})}var x=function(t,e){return e.querySelector(".".concat(t.name,"-input-error"))},C=function(t){var e=t.element,r=t.errorMessage,n=t.formPopup,o=t.inputErrorClass,i=t.errorClass,a=x(e,n);a.textContent=r,e.setCustomValidity(r),e.classList.add(o),a.classList.add(i)},k=function(t){var e=t.element,r=t.formPopup,n=t.inputErrorClass,o=t.errorClass,i=x(e,r);e.classList.remove(n),i.classList.remove(o),i.textContent="",e.setCustomValidity("")},q=function(t){var e=t.formInputs,r=t.form,n=t.popupButton,o=t.subscribe,i=void 0!==o&&o,a=t.validationConfig;e.forEach((function(t){var o=t.classList.contains(a.inputUrlClass),u=function(){!function(t){var e=t.input,r=t.formPopup,n=t.validationConfig,o=t.popupInputTypeUrl,i=n.inputErrorClass,a=n.errorClass;0===e.value.length?C({element:e,errorMessage:"Это поле не заполнено",formPopup:r,inputErrorClass:i,errorClass:a}):e.value.length<2?C({element:e,errorMessage:"Минимальное количество символов 2. Длина текста сейчас ".concat(e.value.length," символов"),formPopup:r,inputErrorClass:i,errorClass:a}):o||/^[a-zA-Zа-яА-Я\s-]{2,}$/.test(e.value)?k({element:e,formPopup:r,inputErrorClass:i,errorClass:a}):C({element:e,errorMessage:e.getAttribute("data-error"),formPopup:r,inputErrorClass:i,errorClass:a}),e.validity.valid?k({element:e,formPopup:r,inputErrorClass:i,errorClass:a}):C({element:e,errorMessage:e.validationMessage,formPopup:r,inputErrorClass:i,errorClass:a})}({input:t,formPopup:r,popupInputTypeUrl:o,validationConfig:a}),P({formInputs:e,popupButton:n,inactiveButtonClass:a.inactiveButtonClass})};k({element:t,formPopup:r,inputErrorClass:a.inputErrorClass,errorClass:a.errorClass}),i&&t.addEventListener("input",(function(t){t.preventDefault(),u()})),u()}))},P=function(t){var e=t.formInputs,r=t.popupButton,n=t.inactiveButtonClass;j(e)?(r.disabled=!0,r.classList.add(n)):(r.disabled=!1,r.classList.remove(n))},j=function(t){return t.some((function(t){return!t.validity.valid&&0!==t.length}))};function O(t){return O="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},O(t)}function T(){T=function(){return e};var t,e={},r=Object.prototype,n=r.hasOwnProperty,o=Object.defineProperty||function(t,e,r){t[e]=r.value},i="function"==typeof Symbol?Symbol:{},a=i.iterator||"@@iterator",u=i.asyncIterator||"@@asyncIterator",c=i.toStringTag||"@@toStringTag";function l(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{l({},"")}catch(t){l=function(t,e,r){return t[e]=r}}function s(t,e,r,n){var i=e&&e.prototype instanceof m?e:m,a=Object.create(i.prototype),u=new j(n||[]);return o(a,"_invoke",{value:C(t,r,u)}),a}function f(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}e.wrap=s;var p="suspendedStart",h="suspendedYield",d="executing",v="completed",y={};function m(){}function g(){}function b(){}var _={};l(_,a,(function(){return this}));var w=Object.getPrototypeOf,L=w&&w(w(I([])));L&&L!==r&&n.call(L,a)&&(_=L);var E=b.prototype=m.prototype=Object.create(_);function S(t){["next","throw","return"].forEach((function(e){l(t,e,(function(t){return this._invoke(e,t)}))}))}function x(t,e){function r(o,i,a,u){var c=f(t[o],t,i);if("throw"!==c.type){var l=c.arg,s=l.value;return s&&"object"==O(s)&&n.call(s,"__await")?e.resolve(s.__await).then((function(t){r("next",t,a,u)}),(function(t){r("throw",t,a,u)})):e.resolve(s).then((function(t){l.value=t,a(l)}),(function(t){return r("throw",t,a,u)}))}u(c.arg)}var i;o(this,"_invoke",{value:function(t,n){function o(){return new e((function(e,o){r(t,n,e,o)}))}return i=i?i.then(o,o):o()}})}function C(e,r,n){var o=p;return function(i,a){if(o===d)throw Error("Generator is already running");if(o===v){if("throw"===i)throw a;return{value:t,done:!0}}for(n.method=i,n.arg=a;;){var u=n.delegate;if(u){var c=k(u,n);if(c){if(c===y)continue;return c}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(o===p)throw o=v,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);o=d;var l=f(e,r,n);if("normal"===l.type){if(o=n.done?v:h,l.arg===y)continue;return{value:l.arg,done:n.done}}"throw"===l.type&&(o=v,n.method="throw",n.arg=l.arg)}}}function k(e,r){var n=r.method,o=e.iterator[n];if(o===t)return r.delegate=null,"throw"===n&&e.iterator.return&&(r.method="return",r.arg=t,k(e,r),"throw"===r.method)||"return"!==n&&(r.method="throw",r.arg=new TypeError("The iterator does not provide a '"+n+"' method")),y;var i=f(o,e.iterator,r.arg);if("throw"===i.type)return r.method="throw",r.arg=i.arg,r.delegate=null,y;var a=i.arg;return a?a.done?(r[e.resultName]=a.value,r.next=e.nextLoc,"return"!==r.method&&(r.method="next",r.arg=t),r.delegate=null,y):a:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,y)}function q(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function P(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function j(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(q,this),this.reset(!0)}function I(e){if(e||""===e){var r=e[a];if(r)return r.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var o=-1,i=function r(){for(;++o<e.length;)if(n.call(e,o))return r.value=e[o],r.done=!1,r;return r.value=t,r.done=!0,r};return i.next=i}}throw new TypeError(O(e)+" is not iterable")}return g.prototype=b,o(E,"constructor",{value:b,configurable:!0}),o(b,"constructor",{value:g,configurable:!0}),g.displayName=l(b,c,"GeneratorFunction"),e.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===g||"GeneratorFunction"===(e.displayName||e.name))},e.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,b):(t.__proto__=b,l(t,c,"GeneratorFunction")),t.prototype=Object.create(E),t},e.awrap=function(t){return{__await:t}},S(x.prototype),l(x.prototype,u,(function(){return this})),e.AsyncIterator=x,e.async=function(t,r,n,o,i){void 0===i&&(i=Promise);var a=new x(s(t,r,n,o),i);return e.isGeneratorFunction(r)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},S(E),l(E,c,"Generator"),l(E,a,(function(){return this})),l(E,"toString",(function(){return"[object Generator]"})),e.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},e.values=I,j.prototype={constructor:j,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(P),!e)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=t)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var r=this;function o(n,o){return u.type="throw",u.arg=e,r.next=n,o&&(r.method="next",r.arg=t),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],u=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var c=n.call(a,"catchLoc"),l=n.call(a,"finallyLoc");if(c&&l){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else{if(!l)throw Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return o(a.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,y):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),y},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),P(r),y}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;P(r)}return o}}throw Error("illegal catch attempt")},delegateYield:function(e,r,n){return this.delegate={iterator:I(e),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=t),y}},e}function I(t,e,r,n,o,i,a){try{var u=t[i](a),c=u.value}catch(t){return void r(t)}u.done?e(c):Promise.resolve(c).then(n,o)}function A(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=Array(e);r<e;r++)n[r]=t[r];return n}var N=document.querySelector("#card-template").content,G=document.querySelector(".places__list"),M=document.querySelector(".profile__add-button"),F=document.querySelector(".popup_type_new-card"),B=document.querySelector(".profile__edit-button"),D=document.querySelectorAll(".popup"),U=document.querySelector(".popup_type_edit"),H=document.querySelector(".popup_type_image"),z=document.querySelector(".popup_type_avatar_edit"),Y=H.querySelector(".popup__caption"),J=document.querySelector(".popup__image"),V=document.querySelector(".profile__info"),$=document.querySelector(".profile__image"),Z=V.querySelector(".profile__title"),K=V.querySelector(".profile__description"),Q=document.querySelectorAll(".popup__form"),R=U.querySelector(".popup__button"),W=U.querySelector(".popup__input_type_name"),X=U.querySelector(".popup__input_type_description"),tt=F.querySelector(".popup__input_type_card-name"),et=F.querySelector(".popup__input_type_url"),rt=document.forms["edit-profile"],nt=rt.querySelector(".popup__input_type_name"),ot=rt.querySelector(".popup__input_type_description"),it=document.forms["new-place"],at=it.querySelector(".popup__button"),ut=document.forms.avatar,ct=ut.querySelector(".popup__input_type_url"),lt=ut.querySelector(".popup__button"),st={formSelector:".popup__form",inputSelector:".popup__input",submitButtonSelector:".popup__button",inactiveButtonClass:"popup__button_disabled",inputErrorClass:"popup__input_type_error",errorClass:"popup__error_visible",inputUrlClass:"popup__input_type_url"};function ft(t){return pt.apply(this,arguments)}function pt(){var t;return t=T().mark((function t(e){var r,n,o,i,a,u,c,l;return T().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:r=e.cards,n=e.deleteCard,o=e.likeHeart,i=e.handleImageClick,a=e.elementTemplate,u=e.placesList,c=e.ownerId,l=document.createDocumentFragment(),r.forEach((function(t){l.prepend(m({item:t,deleteCard:n,likeHeart:o,handleImageClick:i,elementTemplate:a,ownerId:c}))})),u.prepend(l);case 4:case"end":return t.stop()}}),t)})),pt=function(){var e=this,r=arguments;return new Promise((function(n,o){var i=t.apply(e,r);function a(t){I(i,n,o,a,u,"next",t)}function u(t){I(i,n,o,a,u,"throw",t)}a(void 0)}))},pt.apply(this,arguments)}function ht(t){J.src=t.link,J.alt=t.name,Y.textContent=t.name,_(H)}function dt(t){$.style.background="url('".concat(t,"') no-repeat center center"),$.style.backgroundSize="cover"}function vt(t,e){S(t,st),function(t,e){var r=e.inputSelector,n=e.formSelector,o=e.inputErrorClass,i=e.errorClass,a=t.querySelectorAll(r),u=t.querySelector(n);a.forEach((function(t){k({element:t,formPopup:u,inputErrorClass:o,errorClass:i})}))}(e,st)}Promise.all([f(l.cards),f(l.usersMe)]).then((function(t){var e,r,n,o,i=(o=2,function(t){if(Array.isArray(t))return t}(n=t)||function(t,e){var r=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=r){var n,o,i,a,u=[],c=!0,l=!1;try{if(i=(r=r.call(t)).next,0===e){if(Object(r)!==r)return;c=!1}else for(;!(c=(n=i.call(r)).done)&&(u.push(n.value),u.length!==e);c=!0);}catch(t){l=!0,o=t}finally{try{if(!c&&null!=r.return&&(a=r.return(),Object(a)!==a))return}finally{if(l)throw o}}return u}}(n,o)||function(t,e){if(t){if("string"==typeof t)return A(t,e);var r={}.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?A(t,e):void 0}}(n,o)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),a=i[0],u=i[1];e=u,Z.textContent=e.name,K.textContent=e.about,dt(e.avatar),ft({cards:(r=a,r.sort((function(t,e){return new Date(t.createdAt)-new Date(e.createdAt)}))),deleteCard:y,likeHeart:g,handleImageClick:ht,elementTemplate:N,placesList:G,ownerId:u._id})})).catch((function(t){console.error(t)})),L(M,F,(function(){tt.value="",et.value="",vt(it,F)})),L(B,U,(function(){nt.value=Z.textContent,ot.value=K.textContent,vt(rt,U)})),L($,z,(function(){ct.value="",vt(ut,z)})),ut.addEventListener("submit",(function(t){var r;t.preventDefault(),E({buttonElement:lt,isLoading:!0}),(r={avatar:ct.value},p("".concat(l.usersMe).concat(l.avatar),r)).then((function(t){dt(t.avatar),w(z)})).catch(e).finally((function(){E({buttonElement:lt,isLoading:!1})}))})),rt.addEventListener("submit",(function(t){t.preventDefault();var r,n=W.value,o=X.value;E({buttonElement:R,isLoading:!0}),(r={name:n,about:o},p(l.usersMe,r)).then((function(t){Z.textContent=t.name,K.textContent=t.about,w(U)})).catch(e).finally((function(){E({buttonElement:R,isLoading:!1})}))})),it.addEventListener("submit",(function(t){t.preventDefault();var r,n=et.value,o=tt.value;E({buttonElement:at,isLoading:!0}),(r={link:n,name:o},h(l.cards,r)).then((function(t){ft({cards:[t],deleteCard:y,likeHeart:g,handleImageClick:ht,elementTemplate:N,placesList:G,ownerId:t.owner._id}),w(F)})).catch(e).finally((function(){E({buttonElement:at,isLoading:!1}),t.target.reset()}))})),D.forEach((function(t){t.addEventListener("mousedown",(function(e){e.target.classList.contains("visible")&&w(t),e.target.classList.contains("popup__close")&&w(t)}))})),Q.forEach((function(t){!function(t,e){S(t,e,!0)}(t,st)}))})();