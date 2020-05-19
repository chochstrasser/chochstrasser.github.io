import Reverse from "../../../utils/reverseInteger";

describe("Reverse integer", () => {
  it("should return  321", () => {
    const result = Reverse(123);
    expect(result).toBe(321);
  });

  it("should return  321", () => {
    const result = Reverse(-123);
    expect(result).toBe(-321);
  });

  it("should return  321", () => {
    const result = Reverse(120);
    expect(result).toBe(21);
  });
});
