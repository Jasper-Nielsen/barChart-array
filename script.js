"use strict";

window.addEventListener("load", initApp);

const array = [];

function initApp() {
  //   setInterval(putCustomerInArray, 500);
  setInterval(readArraySetBarHeight, 500);
}

//gives us a random number between 1 and 32
function getNumberOfCustormers() {
  return Math.floor(Math.random() * 32);
}

function putCustomerInArray() {
  const queueSize = getNumberOfCustormers();
  array.push(queueSize);
  if (array.length > 40) {
    array.shift();
  }
}

function readArraySetBarHeight() {
  //placer den uden for loopet
  putCustomerInArray();
  for (let i = 1; i < 41; i++) {
    document.querySelector(`#col${i}`).style.height = `${array[i - 1] * 100}%`;
    //i-1 for at få fat i første index i arrayet og matche det til col1.
  }
  console.log(array);
}
