function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},o={},r=t.parcelRequired7c6;null==r&&((r=function(e){if(e in n)return n[e].exports;if(e in o){var t=o[e];delete o[e];var r={id:e,exports:{}};return n[e]=r,t.call(r.exports,r,r.exports),r.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){o[e]=t},t.parcelRequired7c6=r);var i=r("7Y9D8");const l=document.querySelector("button"),u=document.querySelector("form"),s=document.querySelectorAll("input");function f(e,t){return new Promise(((n,o)=>{setTimeout((()=>{Math.random()>.3?n({position:e,firstDelay:t}):o({position:e,firstDelay:t})}),t)}))}function a({position:t,firstDelay:n}){e(i).Notify.failure(`❌ Rejected promise ${t} in ${n}ms`)}function c({position:t,firstDelay:n}){e(i).Notify.success(`✅ Fulfilled promise ${t} in ${n}ms`)}l.addEventListener("click",(function(e){e.preventDefault;let t=s[0].valueAsNumber,n=s[1].valueAsNumber,o=s[2].valueAsNumber;for(let e=1;e<=o;e+=1)f(e,t).then(c).catch(a),t+=n,u.reset()}));
//# sourceMappingURL=03-promises.e7bfe7a0.js.map