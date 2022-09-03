// const s = "abcca";  ==>  s = "accba";
const stringReverser = (s) => {

    if(s.length < 1) return '';

    const lastChar = s[s.length - 1];
    const newString = s.slice(0, s.length - 1);

    return lastChar + stringReverser(newString);
}




module.exports = { stringReverser };
