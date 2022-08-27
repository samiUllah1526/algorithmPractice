const { findAndReplaceNum } = require('./findAndReplaceNum');


test('Find and Replace', () => {
  expect(findAndReplaceNum(123456, 4, 9)).toEqual(123956);

});