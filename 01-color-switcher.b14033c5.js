const e=document.querySelector("body"),t=document.querySelector("button"),l=t.nextElementSibling;let d=null;l.disabled=!0,t.addEventListener("click",(()=>{d=setInterval((()=>{!function(){let t=`#${Math.floor(16777215*Math.random()).toString(16)}`;e.style.backgroundColor=t}()}),1e3),t.disabled=!0,l.disabled=!1})),l.addEventListener("click",(()=>{clearInterval(d),t.disabled=!1,l.disabled=!0}));
//# sourceMappingURL=01-color-switcher.b14033c5.js.map