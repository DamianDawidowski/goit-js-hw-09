import Notiflix from 'notiflix';

const Btn = document.querySelector('button');
const form = document.querySelector('form');
const inputs = document.querySelectorAll('input');

function createPromise(position, firstDelay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const shouldResolve = Math.random() > 0.3;
      if (shouldResolve) {
        resolve({ position, firstDelay });
      } else {
        reject({ position, firstDelay });
      }
    }, firstDelay);
  });
}

function createAllPromises(event) {
  event.preventDefault;
  let firstDelay = inputs[0].valueAsNumber;
  let delayStep = inputs[1].valueAsNumber;
  let amount = inputs[2].valueAsNumber;
  for (let i = 1; i <= amount; i += 1) {
    createPromise(i, firstDelay).then(onSuccess).catch(onError);
    firstDelay += delayStep;
    form.reset();
  }
}

function onError({ position, firstDelay }) {
  Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${firstDelay}ms`);
}

function onSuccess({ position, firstDelay }) {
  Notiflix.Notify.success(
    `✅ Fulfilled promise ${position} in ${firstDelay}ms`
  );
}

Btn.addEventListener('click', createAllPromises);
