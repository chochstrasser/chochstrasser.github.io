import FloodFill from "../../../utils/floodFill";

describe("Flood Fill", () => {
  it("should return 2", () => {
    const result = FloodFill([[0, 0, 0, 0, 1, 1, 0, 0, 0, 0]], 0, 4);
    expect(result).toBe(2);
  });

  it("should return 5", () => {
    const result = FloodFill(
      [
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 1, 1, 0, 0, 0, 0],
        [0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      ],
      2,
      6
    );
    expect(result).toBe(5);
  });
});
