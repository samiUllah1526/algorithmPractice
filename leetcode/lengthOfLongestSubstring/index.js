

const lengthOfLongestSubstring = (s) => {

    if(s.length == 1) return 1;

    let longestStringLength = 0;
    let longestString = '';
    let lookUp = {};
    let substrStartIndex = 0;

    for (let i = 0; i < s.length; i++) {
        const char = s[i];
        if (!lookUp[char]) {
            lookUp[char] = 1;

        } else {
            let tempString = s.slice(substrStartIndex, i);
            if (tempString.length > longestStringLength) {
                longestString = tempString;
                longestStringLength = tempString.length;
            }

            // reset them.
            lookUp = { [char]: 1 };
            substrStartIndex = i;
        }

    }
    const len = longestString.length;
    return len;
}




// let s = "pwwke";
// let s = "pwpwpwk";
// let s = 'bbbbb'
// // let s = '  '
// const result = lengthOfLongestSubstring(s);
// console.log({ result });

module.exports = { lengthOfLongestSubstring };
