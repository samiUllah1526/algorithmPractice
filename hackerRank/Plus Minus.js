/*
Given an array of integers, calculate the ratios of its elements that are positive, negative, and zero. Print the decimal value of each fraction on a new line with  places after the decimal.


 */

let counter = (arr) => {
  let counter = {
    positives: 0,
    negitives: 0,
    zeros: 0,
  };

  for (let i of arr) {
    if (i > 0) {
      counter["positives"] += 1;
    } else if (i < 0) {
      counter["negitives"] += 1;
    } else {
      counter["zeros"] += 1;
    }
  }

  return counter;
};

function plusMinus(arr) {
  // Write your code here
  let numOccurance = counter(arr);
  let totalNum = arr.length;

  for (let key in numOccurance) {
    console.log((numOccurance[key] / totalNum).toFixed(6));
  }
}

let arr = [-4, 3, -9, 0, 4, 1];
plusMinus(arr);
// console.log(counter(arr));
