// find_and_replace(number, find, replace) => a replaced number

// Example
//find_and_replace(12345, 4, 9) => 12395




const find_and_replace = (numbers, swapper, replacer) => {
  const digits = [];
  while (numbers > 0) {
      digits.push(numbers % 10);
      numbers = Math.trunc(numbers / 10);
  }
  
  const index = digits.reverse().indexOf(swapper)
  digits.splice(index, 1, replacer)
  
  return +digits.join('')
}
