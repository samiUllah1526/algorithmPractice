const { stringReverser } = require('./index')

describe("Check if string is reversed", () => {
    it("start and end chars of given string are same", () => {
        expect(stringReverser("samis")).toBe("simas")
    })

    it("start and end chars of given string are same and capital letters", () => {
        expect(stringReverser("SamiS")).toBe("SimaS")
    })
})