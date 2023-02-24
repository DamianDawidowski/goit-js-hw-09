import Notiflix from 'notiflix';

const form = document.querySelector('form');
const inputs = document.querySelectorAll('input');

let position = 0;
  // firstDelay.value = 1000;
// console.log(firstDelay);


form.addEventListener('submit', createAllPromises);




function createAllPromises(event) {
  event.preventDefault;
  let firstDelay = inputs[0].value;
  let delayStep = parseFloat(inputs[1].value);
  let promisedAmount = inputs[2].value;
  // console.log(
  //   firstDelay
  // );
  console.log(`firstDelay: ${firstDelay},delayStep: ${delayStep},promisedAmount: ${promisedAmount}`);
  console.log(`firstDelay: ${firstDelay},delayStep: ${delayStep},promisedAmount: ${promisedAmount}`);
  for (let position = 1; position <= promisedAmount; position++) {
    setTimeout(() => {
      console.log('done');
      createPromise(position, delayStep);
    }, delayStep);
    
    delayStep = parseFloat(delayStep) + parseFloat(delayStep);
  }



  // function createPromise(position, delay) {
  //   // setTimeout(() => {
  //     const shouldResolve = Math.random() > 0.3;
  //     if (shouldResolve) {
  //       console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
  //       // Fulfill
  //     } else {
  //       console.log(`❌ Rejected promise ${position} in ${delay}ms`);
  //       // Reject
  //     }
  //   // }, 1000);
  
  // };

function createPromise(position, delayStep) {
  const shouldResolve = Math.random() > 0.3;
  if (shouldResolve) {
     console.log(`✅ Fulfilled promise ${position} in ${delayStep}ms`);
    // Fulfill
  } else {
    console.log(`❌ Rejected promise ${position} in ${delayStep}ms`);
    // Reject
  }
}

// createPromise(position, delayStep)
//   .then(({ position, delayStep }) => {
//     console.log(`✅ Fulfilled promise ${position} in ${delayStep}ms`);
//   })
// //   .catch(({ position, delayStep }) => {
// //     console.log(`❌ Rejected promise ${position} in ${delayStep}ms`);
// //   });












}






// function createPromise(position, delay) {
//   const shouldResolve = Math.random() > 0.3;
//   if (shouldResolve) {
//      console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
//     // Fulfill
//   } else {
//      console.log(`❌ Rejected promise ${position} in ${delay}ms`);
//     // Reject
//   }
// }
 











// XXXXXXXXXXXXXXX


// const isSuccess = false;

// const promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     if (isSuccess) {
//       resolve('Success! Value passed to resolve function');
//     } else {
//       reject('Error! Error passed to reject function');
//     }
//   }, 2000);
// });

// // Will run first
// console.log('Before promise.then()');

// // Registering promise callbacks
// promise.then(
//   // onResolve will run third or not at all
//   value => {
//     console.log('onResolve call inside promise.then()');
//     console.log(value); // "Success! Value passed to resolve function"
//   },
//   // onReject will run third or not at all
//   error => {
//     console.log('onReject call inside promise.then()');
//     console.log(error); // "Error! Error passed to reject function"
//   }
// );

// // Will run second
// console.log('After promise.then()');