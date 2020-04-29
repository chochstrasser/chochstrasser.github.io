import lengthOfLongestSubstring from "../../../utils/longestSubstringWithoutRepeatingCharacters";

describe("Longest substring without repeating characters", () => {
  it("should return 3", () => {
    const result = lengthOfLongestSubstring("abcabcbb");
    expect(result).toBe(3);
  });

  it("should return 1", () => {
    const result = lengthOfLongestSubstring("bbbbb");
    expect(result).toBe(1);
  });

  it("should return 3", () => {
    const result = lengthOfLongestSubstring("pwwkew");
    expect(result).toBe(3);
  });
});
