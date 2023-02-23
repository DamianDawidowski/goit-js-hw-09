function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const Body = document.querySelector('body');
const BtnStart = document.querySelector('button');
const BtnStop = BtnStart.nextElementSibling;
 let timerId = null;
BtnStop.disabled = true; 

BtnStart.addEventListener('click', () => {
  timerId = setInterval(() => {
    changeBodyColor();
  }, 1000);
    BtnStart.disabled = true; 
    BtnStop.disabled = false; 
});

BtnStop.addEventListener('click', () => {
  clearInterval(timerId);
    BtnStart.disabled = false; 
    BtnStop.disabled = true; 
});
 
function changeBodyColor() {
      let newColor = getRandomHexColor();
      Body.style.backgroundColor = newColor;
}
 