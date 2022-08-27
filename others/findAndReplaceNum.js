
const findAndReplaceNum = (number, toFind, toReplace) => {

    const numbers = []
    while(number > 0) {
        const num = number % 10;
        numbers.push(num);
        number = Math.trunc((number / 10))
    }

    const index = numbers.indexOf(toFind);
    numbers[index] = toReplace;

    const newNum = numbers.reverse().join('')
    return +newNum

}

module.exports = {
    findAndReplaceNum,
}