const { lengthOfLongestSubstring } = require('./')
// s = "abcabcbb"
// Output: 3

describe("Find the length of longest substring", () => {

   it("Cases", ()=> {
    expect(lengthOfLongestSubstring("abcabcbb")).toBe(3);
    expect(lengthOfLongestSubstring("bbbbb")).toBe(1);
    expect(lengthOfLongestSubstring("pwwkew")).toBe(3);

    expect(lengthOfLongestSubstring("")).toBe(0);
    expect(lengthOfLongestSubstring(" ")).toBe(1);
    expect(lengthOfLongestSubstring("  ")).toBe(1);

    expect(lengthOfLongestSubstring("a")).toBe(1);
    expect(lengthOfLongestSubstring("aa")).toBe(1);
   })
})