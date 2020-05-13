import FloodFill from "../../../utils/floodFill";

describe("Merge two sorted lists", () => {
  it("should return linked list", () => {
    const result = FloodFill([[0, 0, 0, 0, 1, 1, 0, 0, 0, 0]], 0, 4);
    expect(result).toBe(2);
  });
});
