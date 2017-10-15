/* Code for WATS 3020 FizzBuzz Assignment */

let isInteger,
  maxNumber,
  fbResults,
  fbText;


// TODO: Initialize a variable `isInteger` to use as a control value for the
// `while` loop. Set the initial value to `false`.

isinteger = false;


// Created 'while' loop
// Checking to see if the user is entering an integer that is over zero
// Prompt user to maxNumber
// Convert to integer, check to see if is a safe integer and maz number is greater than zero
// Stops the while loop from looping again if true

while (!isInteger) {

  maxNumber = prompt('Enter number over zero(must  be an integer):', 40);
  maxNumber = parseInt(maxNumber);
  if (Number.isSafeInteger(maxNumber) && maxNumber > 0) {
    isInteger = true;
  }

}

// Intialize,Empty Array

fbResults = [];

// Create 'for' loop
// executes the 'maxNumber' of times


for (let i = 1; i <= maxNumber; i++) {

  if (i % 15 === 0) {
    fbResults.push('FizzBuzz');
  } else if (i % 3 === 0) {
    fbResults.push('Fizz');
  } else if (i % 5 === 0) {
    fbResults.push('Buzz');
  } else {
    fbResults.push(i)
  }

}


// Output string

fbText = '';


// 'for.... of' loop
for (let result of fbResults) {
  fbText = fbText + result + "\n";
}


///////////////////////////////////////////////////////////////////////
// Do not edit below this line unless you are doing something fancy!
//////////////////////////////////////////////////////////////////////
let numDisplay = document.querySelector("#max-number");
numDisplay.innerHTML = maxNumber;
let output = document.querySelector("#output");
output.innerHTML = fbText;