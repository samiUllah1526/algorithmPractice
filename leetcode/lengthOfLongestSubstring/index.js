

const lengthOfLongestSubstring = (s) => {

    if (s.length == 1) return 1;
    if (new Set(s).size == s.length) return s.length;

    let longestStringLength = 0;
    let longestString = '';
    let lookUp = {};
    let substrStartIndex = 0;
    let substrLastIndex = 0;

    for (let i = 0; i < s.length; i++) {
        const char = s[i];
        if (!lookUp[char] && lookUp[char] !== 0) {
            lookUp[char] = i;
            substrLastIndex = i+1;

        } else {
            if(lookUp[char] >= substrStartIndex) {
                let tempString = s.slice(substrStartIndex, i);
                if(tempString.length > longestString.length) longestString = tempString;
                substrStartIndex = lookUp[char] + 1;
                // substrLastIndex++
            }
            lookUp[char] = i;
        }

        console.log(`\n\n\n ${i}-Each==>`, {  longestStringLength, charOfInteration: char, lookUp, substrStartIndex, s, })
    }


    tempString = s.slice(substrStartIndex, substrLastIndex);
    if(tempString.length > longestString.length) longestString = tempString;

    return longestString.length;
}


let s = 'aab'
const result = lengthOfLongestSubstring(s);
console.log({ result });

module.exports = { lengthOfLongestSubstring };
