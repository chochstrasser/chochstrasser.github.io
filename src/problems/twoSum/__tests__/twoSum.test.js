import twoSum from "../../../utils/twoSum";

describe("Two sum", () => {
  it("should return [0,1]", () => {
    const result = twoSum([7, 2, 9, 1, 3, 5], 9);
    expect(result).toStrictEqual([0, 1]);
  });
});
