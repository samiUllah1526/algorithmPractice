const nextCharIsGreater = (ROMAN_LETTER_TO_DECIMAL_MAP, lettersPair) => {

    const [firstLetter, secondLetter] = lettersPair.split("");
    return ROMAN_LETTER_TO_DECIMAL_MAP[secondLetter] > ROMAN_LETTER_TO_DECIMAL_MAP[firstLetter];
    
}


const calSum = (ROMAN_LETTER_TO_DECIMAL_MAP, nextLetterIsGreater, lettersPair) => {

    if (!nextLetterIsGreater) {
        const sum = ROMAN_LETTER_TO_DECIMAL_MAP[lettersPair[0]];
        return sum;
    }

    const firstLetterValue = ROMAN_LETTER_TO_DECIMAL_MAP[lettersPair[0]];
    const secondLetterValue = ROMAN_LETTER_TO_DECIMAL_MAP[lettersPair[1]];
    const sum = (secondLetterValue - firstLetterValue);
    return sum;

}

const romanToDecimal = (s) => {

    let sum = 0;
    s = s.toUpperCase();
    const ROMAN_LETTER_TO_DECIMAL_MAP = {
        "I": 1, "V": 5, "X": 10, "L": 50,
        "C": 100, "D": 500, "M": 1000
    };


    for (let i = 0; i < s.length; i++) {

        let lettersPair = s.slice(i, i + 2)
        const nextLetterIsGreater = nextCharIsGreater(ROMAN_LETTER_TO_DECIMAL_MAP, lettersPair);

        const calulatedSum = calSum(ROMAN_LETTER_TO_DECIMAL_MAP, nextLetterIsGreater, lettersPair, sum);
        sum += calulatedSum

        if (nextLetterIsGreater) i++;
    }

    return sum;
}




module.exports = {
    romanToDecimal,
    nextCharIsGreater,
}


const s = "LVCIII"; // ==> 148
const result = romanToDecimal(s);
console.log({ result })
