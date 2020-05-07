import FloodFill from "../../../utils/floodfill";

xdescribe("Flood Fill", () => {
  it("should return 10", () => {
    const result = FloodFill([[1], 2, [[3, 4], 5], [[[]]], [[[6]]], 7, 8]);
    expect(result).toBe([1, 2, 3, 4, 5, 6, 7, 8]);
  });
});
