// let counter = (str) => {
//   let counter = {};
//   for (let c of str) {
//     counter[c] ? (counter[c] += 1) : (counter[c] = 1);
//   }
//   console.log(counter);
//   return counter;
// };

// // ##############################################
// let consectives = (str) => {
//   let consectives = "";
//   let prevChar = "";
//   let currentChar = "";
//   for (let c of str) {
//     currentChar = c;
//     if (currentChar == prevChar) {
//       consectives += c;
//     }
//     prevChar = currentChar;
//   }

//   return consectives;
// };

// let charRemover = (str, counter, consectives) => {
//   let filterdString = "";

//   for (let c of str) {
//     counter[c] !== 1 && !consectives.includes(c) ? (filterdString += c) : "";
//   }
//   console.log("filterdString", filterdString);
//   return filterdString;
// };
// // ##############################################

// let filteredStringLen = (str) => {
//   let countChars = counter(str);
//   let consectivesChars = consectives(str);
//   let filterdChars = charRemover(str, countChars, consectivesChars);

// //   return filterdChars.length;

//   for (let i=0; i+=2; filterdChars.length){
//     filterdChars[1+2]
//   }
// };

// // let str = "abaacdabd";
// let str = "beabeefeab";
// console.log(filteredStringLen(str));
function diagonalDifference(arr) {
  let rightDiagonal = 0;
  let leftDiagonal = 0;
  let leftDiagonalIndex = arr.length - 1;
  for (let i = 0; i < arr.length; i++) {
    rightDiagonal += arr[i][i];
    leftDiagonal += arr[i][leftDiagonalIndex];
    leftDiagonalIndex -= 1;
    console.log("leftDiagonal==>", leftDiagonal);
    console.log("rightDiagonal per==>", rightDiagonal);
  }
}

let arr = [
  [11, 2, 4],
  [4, 5, 6],
  [10, 8, -12],
];
diagonalDifference(arr);
