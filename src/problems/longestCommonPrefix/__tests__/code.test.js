import longestCommonPrefix from "../../../utils/longestCommonPrefix";

describe("Longest Common Prefix", () => {
  it("should return fl", () => {
    const result = longestCommonPrefix(["flower", "flow", "flight"]);
    expect(result).toBe("fl");
  });

  it("should return fl", () => {
    const result = longestCommonPrefix(["dog", "racecar", "car"]);
    expect(result).toBe("");
  });
});
