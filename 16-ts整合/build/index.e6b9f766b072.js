!function(){"use strict";var t={898:function(t,e){Object.defineProperty(e,"__esModule",{value:!0});e.default=class{constructor(t=10){let e=t<10?10:t;this.length=e,this.array=new Array(e)}get(t){return this.array[t]}size(){return this.length}set(t,e){return!(t>=this.length)&&(this.array[t]=e,!0)}remove(t){if(t>=this.length)return!1;for(let e=t;e<this.length;e++)this.array[t]=t+1>=this.length?null:this.array[t+1];return!0}printAll(){let t=document.createElement("div");this.array.forEach((e=>{let r=document.createElement("span"),n=JSON.stringify(e);r.innerText=n,t.appendChild(r)})),document.body.appendChild(t)}}},0:function(t,e,r){var n=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0});const i=n(r(898));alert("sdssada");let o=new i.default(100);for(let t=0;t<100;t++)o.set(t,t);o.printAll()}},e={};function r(n){var i=e[n];if(void 0!==i)return i.exports;var o=e[n]={exports:{}};return t[n].call(o.exports,o,o.exports,r),o.exports}r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,{a:e}),e},r.d=function(t,e){for(var n in e)r.o(e,n)&&!r.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r(0)}();