!function(){function e(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},o={},r=n.parcelRequired7c6;null==r&&((r=function(e){if(e in t)return t[e].exports;if(e in o){var n=o[e];delete o[e];var r={id:e,exports:{}};return t[e]=r,n.call(r.exports,r,r.exports),r.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,n){o[e]=n},n.parcelRequired7c6=r);var i=r("6JpON"),u=document.querySelector("button"),l=document.querySelector("form"),c=document.querySelectorAll("input");function f(e,n){return new Promise((function(t,o){setTimeout((function(){Math.random()>.3?t({position:e,firstDelay:n}):o({position:e,firstDelay:n})}),n)}))}function a(n){var t=n.position,o=n.firstDelay;e(i).Notify.failure("❌ Rejected promise ".concat(t," in ").concat(o,"ms"))}function s(n){var t=n.position,o=n.firstDelay;e(i).Notify.success("✅ Fulfilled promise ".concat(t," in ").concat(o,"ms"))}u.addEventListener("click",(function(e){e.preventDefault;for(var n=c[0].valueAsNumber,t=c[1].valueAsNumber,o=c[2].valueAsNumber,r=1;r<=o;r+=1)f(r,n).then(s).catch(a),n+=t,l.reset()}))}();
//# sourceMappingURL=03-promises.8fa4b00a.js.map
