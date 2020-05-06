import isPalindrome, {
  palindromeNumber,
} from "../../../utils/palindromeNumber";

describe("Palindrome Number (string conversion)", () => {
  it("should return true", () => {
    const result = palindromeNumber(121);
    expect(result).toTruthy();
  });

  it("should return false", () => {
    const result = palindromeNumber(-121);
    expect(result).toFalsy();
  });

  it("should return false", () => {
    const result = palindromeNumber(10);
    expect(result).toFalsy();
  });

  it("should return true", () => {
    const result = palindromeNumber(0);
    expect(result).toTruthy();
  });

  it("should return true", () => {
    const result = palindromeNumber();
    expect(result).toTruthy();
  });
});

describe("Palindrome Number (numbers only)", () => {
  it("should return true", () => {
    const result = isPalindrome(121);
    expect(result).toTruthy();
  });

  it("should return false", () => {
    const result = isPalindrome(-121);
    expect(result).toFalsy();
  });

  it("should return false", () => {
    const result = isPalindrome(10);
    expect(result).toFalsy();
  });

  it("should return true", () => {
    const result = isPalindrome(0);
    expect(result).toTruthy();
  });

  it("should return true", () => {
    const result = isPalindrome();
    expect(result).toTruthy();
  });
});
