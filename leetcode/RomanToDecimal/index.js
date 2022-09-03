



const nextCharIsGreater = (lettersPair) => {
    const [firstLetter, secondLetter] = lettersPair.split("");
    return ROMAN_LETTER_TO_DECIMAL_MAP[secondLetter] > ROMAN_LETTER_TO_DECIMAL_MAP[firstLetter]
}


const romanToDecimal = (s) => {

    let sum = 0;
    s = s.toUpperCase();
    const ROMAN_LETTER_TO_DECIMAL_MAP = {
        "I": 1, "V": 5, "X": 10, "L": 50,
        "C": 100, "D": 500, "M": 1000
    };


    for (let i = 0; i < s.length; i++) {
        let lettersPair = s.slice(i, i+2)
        const nextLetterIsGreater = nextCharIsGreater(lettersPair);
        

        if (!nextLetterIsGreater) { 
            sum += ROMAN_LETTER_TO_DECIMAL_MAP[lettersPair[0]];
        } else {
            //skip itenation for a letters pair
            i++; 

            const firstLetterValue = ROMAN_LETTER_TO_DECIMAL_MAP[lettersPair[0]];
            const secondLetterValue = ROMAN_LETTER_TO_DECIMAL_MAP[lettersPair[1]];
            const value = secondLetterValue - firstLetterValue;

            sum += value;
        }
    }

    return sum;
}




module.exports = {
    romanToDecimal,
    nextCharIsGreater,
}


// const s = "LVCIII"; // ==> 148
// const result = romanToDecimal(s);

// console.log({result})
