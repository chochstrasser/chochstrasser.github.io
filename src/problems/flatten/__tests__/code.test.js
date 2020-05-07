import {
  FlattenIterative,
  FlattenRecursion,
  FlattenShortest,
} from "../../../utils/flatten";

describe("Flatten", () => {
  it("should iterative flatten return [1,2,3,4,5,6,7,8]", () => {
    const result = FlattenIterative([
      [1],
      2,
      [[3, 4], 5],
      [[[]]],
      [[[6]]],
      7,
      8,
    ]);
    expect(result).toStrictEqual([1, 2, 3, 4, 5, 6, 7, 8]);
  });

  it("should recursion flatten return [1,2,3,4,5,6,7,8]", () => {
    const result = FlattenRecursion([
      [1],
      2,
      [[3, 4], 5],
      [[[]]],
      [[[6]]],
      7,
      8,
    ]);
    expect(result).toStrictEqual([1, 2, 3, 4, 5, 6, 7, 8]);
  });

  it("should shortest flatten return [1,2,3,4,5,6,7,8]", () => {
    const result = FlattenShortest([
      [1],
      2,
      [[3, 4], 5],
      [[[]]],
      [[[6]]],
      7,
      8,
    ]);
    expect(result).toStrictEqual([1, 2, 3, 4, 5, 6, 7, 8]);
  });
});
