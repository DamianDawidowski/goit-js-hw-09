function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const Body = document.querySelector('body');
let BtnStart = document.querySelector('button');
const BtnStop = BtnStart.nextElementSibling;
 
// console.log(BtnStop);

BtnStart.addEventListener('click', setInterval(changeBodyColor, 1000));






BtnStop.addEventListener('click', clearTimeout(id););

function changeBodyColor() {
      let newColor = getRandomHexColor();
      Body.style.backgroundColor = newColor;
}


clearTimeout(id);