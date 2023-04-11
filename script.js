"use strict";

window.addEventListener("load", initApp);

const array = [];

let queueSize;


function initApp() {
//   setInterval(putCustomerInArray, 500);
 setInterval(readArraySetBarHeight, 2000);
// readArraySetBarHeight();

}

//gives us a random number between 1 and 32
function getNumberOfCUstormers() {
  return Math.floor(Math.random() * 32);
}

function putCustomerInArray() {
  queueSize = getNumberOfCUstormers();
  array.push(queueSize);
  if (array.length > 40) {
    array.shift();
  }
  
// return array;
//   console.log(array);
}

function readArraySetBarHeight() {


    for (let i = 1; i < 41; i++) {
      const myHeight = queueSize * 40;
      document.querySelector(`#col${i}`).style.height = `${myHeight}%`;
      putCustomerInArray(); 
      console.log(`#col${i}`);
      console.log(array);
    }
  }

