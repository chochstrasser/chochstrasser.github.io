import romanToInt from '../../../utils/romanToInteger';

describe('Roman to integer', () => {
  it('should return 3', () => {
    const result = romanToInt('III');
    expect(result).toBe(3);
  });

  it('should return 4', () => {
    const result = romanToInt('IV');
    expect(result).toBe(4);
  });

  it('should return 9', () => {
    const result = romanToInt('IX');
    expect(result).toBe(9);
  });

  it('should return 58', () => {
    const result = romanToInt('LVIII');
    expect(result).toBe(58);
  });

  it('should return 1994', () => {
    const result = romanToInt('MCMXCIV');
    expect(result).toBe(1994);
  });
});
