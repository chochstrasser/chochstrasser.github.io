import findMedianSortedArrays from "../../../utils/medianOfTwoSortedArrays";

describe("Median of two sorted arrays", () => {
  it("should return 2", () => {
    const result = findMedianSortedArrays([1, 3], [2]);
    expect(result).toBe(2);
  });
});
