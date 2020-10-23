import isPalindrome, { palindromeNumber } from '../../../utils/palindromeNumber';

describe('Palindrome Number (string conversion)', () => {
  it('should return true', () => {
    const result = palindromeNumber(121);
    expect(result).toBeTruthy();
  });

  it('should return false', () => {
    const result = palindromeNumber(-121);
    expect(result).toBeFalsy();
  });

  it('should return false', () => {
    const result = palindromeNumber(10);
    expect(result).toBeFalsy();
  });

  it('should return true', () => {
    const result = palindromeNumber(0);
    expect(result).toBeTruthy();
  });

  it('should return true', () => {
    const result = palindromeNumber();
    expect(result).toBeTruthy();
  });
});

describe('Palindrome Number (numbers only)', () => {
  it('should return true', () => {
    const result = isPalindrome(121);
    expect(result).toBeTruthy();
  });

  it('should return false', () => {
    const result = isPalindrome(-121);
    expect(result).toBeFalsy();
  });

  it('should return false', () => {
    const result = isPalindrome(10);
    expect(result).toBeFalsy();
  });

  it('should return true', () => {
    const result = isPalindrome(0);
    expect(result).toBeTruthy();
  });

  it('should return true', () => {
    const result = isPalindrome();
    expect(result).toBeTruthy();
  });
});
