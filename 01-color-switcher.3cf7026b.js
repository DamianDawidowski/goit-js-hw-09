!function(){var e=document.querySelector("body"),n=document.querySelector("button"),t=n.nextElementSibling,d=null;t.disabled=!0,n.addEventListener("click",(function(){d=setInterval((function(){var n;n="#".concat(Math.floor(16777215*Math.random()).toString(16)),e.style.backgroundColor=n}),1e3),n.disabled=!0,t.disabled=!1})),t.addEventListener("click",(function(){clearInterval(d),n.disabled=!1,t.disabled=!0}))}();
//# sourceMappingURL=01-color-switcher.3cf7026b.js.map
