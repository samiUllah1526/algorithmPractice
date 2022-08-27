const twoSumOfSortedArray = (numbers, equalTo) => {

  let leftIndex = 0;
  let rightIndex = numbers.length - 1;

  while (leftIndex !== rightIndex) {

    const numbersSum = numbers[leftIndex] + numbers[rightIndex];

    if (equalTo == (numbersSum)) return [leftIndex, rightIndex]
    if (numbersSum > equalTo) rightIndex--;
    else leftIndex++
  }
}



const twoSumRandomArray = (numbers, equalTo) => {

  const tracker = {};
  for (let i = 0; i < numbers.length; i++) {

    const num = numbers[i];
    const complement = equalTo - num;
    const complementIndex = tracker[complement];

    if (tracker[complement] || tracker[complement] == 0) return [complementIndex, i];
    tracker[num] = i;


    console.log({
      num,
      complement,
      complementIndex,
      tracker
    })

  }

}
// const numbers = [4,5,2,8,1] ==> (1,2)7
// const numbers = [4,5,2,8,1] ==> (0,2)12



const log = twoSumRandomArray([2, 7, 11, 15], 9)
console.log({ log })




module.exports = { twoSumOfSortedArray, twoSumRandomArray };
