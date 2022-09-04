const  {lengthOfLongestSubstring}  = require('./')
// const  lengthOfLongestSubstring  = require('./help')

describe("Find the length of longest unique chracters substring", () => {

    it("For repeated substring", () => {
        expect(lengthOfLongestSubstring("abcabcbb")).toBe(3);
        expect(lengthOfLongestSubstring("aaaabcabcbb")).toBe(3);
        expect(lengthOfLongestSubstring("bbbbb")).toBe(1);
        expect(lengthOfLongestSubstring("pwwkew")).toBe(3);
    })


    it("For empty spaces", () => {
        expect(lengthOfLongestSubstring("")).toBe(0);
        expect(lengthOfLongestSubstring(" ")).toBe(1);
        expect(lengthOfLongestSubstring("  ")).toBe(1);
    })


    it("For single character or space", () => {
        expect(lengthOfLongestSubstring("a")).toBe(1);
        expect(lengthOfLongestSubstring(" ")).toBe(1);
    })


    it("For single repeated character", () => {
        expect(lengthOfLongestSubstring("aa")).toBe(1);
    })


    it("For only unique characters", () => {
        expect(lengthOfLongestSubstring("au")).toBe(2);
        expect(lengthOfLongestSubstring("aug")).toBe(3);
        expect(lengthOfLongestSubstring("augh")).toBe(4);
    })


    it("For unique characters at the head", () => {
        expect(lengthOfLongestSubstring("aba")).toBe(2);
        expect(lengthOfLongestSubstring("adfbab")).toBe(4);
    })


    it("For unique characters at the tail", () => {
        expect(lengthOfLongestSubstring("aab")).toBe(2);
    })


    it("Leetcode test case", () => {
        expect(lengthOfLongestSubstring("tmmzuxt")).toBe(5);
    })

})