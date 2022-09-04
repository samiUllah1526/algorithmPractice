

const lengthOfLongestSubstring = (s) => {

    if (s.length == 1) return 1;
    if (new Set(s).size == s.length) return s.length;

    let longestString = '';
    let lookUp = {};
    let substrStartIndex = 0;
    let substrLastIndex = 0;
    let tempString = '';

    for (let i = 0; i < s.length; i++) {
        const char = s[i];
        if (!lookUp[char] && lookUp[char] !== 0) {
            lookUp[char] = i;
            

        } else {
            if(lookUp[char] >= substrStartIndex) {
                tempString = s.slice(substrStartIndex, i);
                if(tempString.length > longestString.length) longestString = tempString;
                substrStartIndex = lookUp[char] + 1;
            }
            lookUp[char] = i;
        }
        substrLastIndex = i+1;
    }

    tempString = s.slice(substrStartIndex, substrLastIndex);
    if(tempString.length > longestString.length) longestString = tempString;

    return longestString.length;
}


let s = 'tmmzuxt'
const result = lengthOfLongestSubstring(s);
console.log({ result });

module.exports = { lengthOfLongestSubstring };
