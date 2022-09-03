// const s = "abcca";  ==>  s = "accba";


const stringReverser = (s, lastChar = '', reversedString = '') => {

    if(s.length < 1) return reversedString;

    lastChar = s[s.length - 1];
    reversedString = reversedString + lastChar ;
    const newString = s.slice(0, s.length - 1);


    return stringReverser(newString, lastChar, reversedString);
}




module.exports = { stringReverser };
