
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


const func = (number) => { 
    console.log({ number })
}

func(12345) // logs => 12345
func(012345) // logs => 5349

/*
func(012345) // logs => 5349 

FYI: console.log() by default converts octal number to decimal

octal numbers can start with leading zero.
In given function, ocatal number is passed as a argument and logged as a decimal
*/
