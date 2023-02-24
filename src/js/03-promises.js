import Notiflix from 'notiflix';

const form = document.querySelector('form');
const inputs = document.querySelectorAll('input');
const firstDelay = inputs[0];
const delayStep = inputs[1];
const promisedAmount = inputs[2];
let position = 0;
  // firstDelay.value = 1000;
// console.log(firstDelay);


form.addEventListener('submit', createAllPromises);




function createAllPromises(event)  {
  event.preventDefault;
  console.log(`firstDelay: ${firstDelay.value},delayStep: ${delayStep},promisedAmount: ${promisedAmount}`);
  console.log(`firstDelay: ${firstDelay.value},delayStep: ${delayStep},promisedAmount: ${promisedAmount}`);
  for (let i = 1; i <= promisedAmount; i++) {
    createPromise(i, delayStep);
    console.log(createPromise);
    delayStep += delayStep;
  }
};







function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  if (shouldResolve) {
     console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
    // Fulfill
  } else {
     console.log(`❌ Rejected promise ${position} in ${delay}ms`);
    // Reject
  }

}
 

