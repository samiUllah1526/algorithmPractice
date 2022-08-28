const vowelCounter = (str) => {
    const vowel = { "a": 1, "i": 1, "o": 1, "u": 1, "e": 1, }
    const characters = str.split("");

    let count = 0
    for (let character of characters) {
        if (vowel[character.toLowerCase()]) count++
    }

    return count
}

// const str = "Pakistan"
// console.log(vowelCheck(str));

module.exports = { vowelCounter }