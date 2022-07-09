import { reverseString1, reverseString2, reverseString3, reverseString4 } from '../../../utils/reverseString';

describe('Reverse string', () => {
  it('should return test one', () => {
    const result = reverseString1('eno tset');
    expect(result).toBe('test one');
  });

  it('should return test two', () => {
    const result = reverseString2('owt tset');
    expect(result).toBe('test two');
  });

  it('should return test three', () => {
    const result = reverseString3('eerht tset');
    expect(result).toBe('test three');
  });

  it('should return test four', () => {
    const result = reverseString4('ruof tset');
    expect(result).toBe('test four');
  });
});
