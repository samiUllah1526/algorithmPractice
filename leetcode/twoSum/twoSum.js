const twoSumOfSortedArray = (numbers, equalTo) => {

  let leftIndex = 0;
  let rightIndex = numbers.length - 1;

  while (leftIndex !== rightIndex) {

    const numbersSum = numbers[leftIndex] + numbers[rightIndex];

    if (equalTo == (numbersSum)) break;
    // if (equalTo == (numbersSum)) return [leftIndex, rightIndex]
    if (numbersSum > equalTo) rightIndex--;
    else leftIndex++
  }

  return [leftIndex, rightIndex]
}



const twoSumRandomArray = (numbers, equalTo) => {

  const tracker = {};
  for (let i = 0; i < numbers.length; i++) {

    const num = numbers[i];
    const complement = equalTo - num;
    const complementIndex = tracker[complement];

    if (tracker[complement] || tracker[complement] == 0) return [complementIndex, i];
    tracker[num] = i;

  }

}

module.exports = { twoSumOfSortedArray, twoSumRandomArray };
