import Notiflix from 'notiflix';

const form = document.querySelector('form');
const inputs = document.querySelectorAll('input');

let position = 0;
 

form.addEventListener('submit', createAllPromises);
 

function createAllPromises(event) {
  event.preventDefault;
  let firstDelay = inputs[0].value;
  let delayStep = parseFloat(inputs[1].value);
  let promisedAmount = inputs[2].value;
  let PromiseDelay = delayStep;
  // console.log(
  //   firstDelay
  // );
  console.log(`firstDelay: ${firstDelay},delayStep: ${delayStep},promisedAmount: ${promisedAmount}`);
  console.log(`firstDelay: ${firstDelay},delayStep: ${delayStep},promisedAmount: ${promisedAmount}`);
  for (let position = 1; position <= promisedAmount; position++) {

    // createPromise(position, delayStep);
    createPromise(position, PromiseDelay)
      .then(({ position, PromiseDelay }) => {
        console.log(`✅ Fulfilled promise ${position} in ${PromiseDelay}ms`);
      })
      .catch(({ position, PromiseDelay }) => {
        console.log(`❌ Rejected promise ${position} in ${PromiseDelay}ms`);
      });

  
    // console.log(`position ${position}`);
    PromiseDelay += parseFloat(delayStep);
    console.log(PromiseDelay);
  }
}

 

  function createPromise(position, PromiseDelay) {
   return new Promise((resolve, reject) => {
   
    setTimeout(() => {
      const shouldResolve = Math.random() > 0.3;
      if (shouldResolve) {
        resolve(position, PromiseDelay);
        // console.log(`✅ Fulfilled promise ${position} in ${PromiseDelay}ms`);
        // Fulfill
      } else {
        // console.log(`❌ Rejected promise ${position} in ${PromiseDelay}ms`);
        reject(position, PromiseDelay);
      }
    }, PromiseDelay);
     console.log(PromiseDelay);
 
  })
} ;
 
// // XXXXXXXXXXXXXXXXXXXXXXX

// // Change value of isSuccess variable to call resolve or reject
// const isSuccess = true;

// const promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     if (isSuccess) {
//       resolve("Success! Value passed to resolve function");
//     } else {
//       reject("Error! Error passed to reject function");
//     }
//   }, 2000);
// });

// // Will run first
// console.log("Before promise.then()");

// // Registering promise callbacks
// promise.then(
//   // onResolve will run third or not at all
//   value => {
//     console.log("onResolve call inside promise.then()");
//     console.log(value); // "Success! Value passed to resolve function"
//   },
//   // onReject will run third or not at all
//   error => {
//     console.log("onReject call inside promise.then()");
//     console.log(error); // "Error! Error passed to reject function"
//   }
// );

// // Will run second
// console.log("After promise.then()");