function diagonalDifference(arr) {
  let rightDiagonal = 0;
  let leftDiagonal = 0;
  let leftDiagonalIndex = arr.length - 1;
  for (let i = 0; i < arr.length; i++) {
    rightDiagonal += arr[i][i];
    leftDiagonal += arr[i][leftDiagonalIndex];
    leftDiagonalIndex -= 1;
    // console.log("leftDiagonal==>", leftDiagonal);
    // console.log("rightDiagonal per==>", rightDiagonal);
  }
  return Math.abs(rightDiagonal - leftDiagonal);
}

let arr = [
  [11, 2, 4],
  [4, 5, 6],
  [10, 8, -12],
];

console.log(diagonalDifference(arr));
