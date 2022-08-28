const { vowelCounter } = require('./countVowels')

describe("Count Vowals", () => {
    it("String with all small letters", () => {
        expect(vowelCounter("sami")).toBe(2)
    })

    it("String with all small and one capital letter", () => {
        expect(vowelCounter("Pakistan")).toBe(3)

    })
})