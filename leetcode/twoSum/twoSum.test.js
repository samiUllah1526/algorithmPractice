const { twoSumOfSortedArray, twoSumRandomArray } = require('./twoSum');


test('Two sum for sorted array', () => {
  expect(twoSumOfSortedArray([1, 2, 4, 5, 8], 7)).toStrictEqual([1, 3]);
  expect(twoSumOfSortedArray([1, 2, 4, 5, 8], 12)).toStrictEqual([2, 4]);
});


test('Two sum for random array', () => {
  expect(twoSumRandomArray([2, 7, 11, 15], 9)).toStrictEqual([0, 1]);
  expect(twoSumRandomArray([4, 5, 2, 8, 1], 7)).toStrictEqual([1, 2]);
  expect(twoSumRandomArray([4, 5, 2, 8, 1], 12)).toStrictEqual([0, 3]);
});