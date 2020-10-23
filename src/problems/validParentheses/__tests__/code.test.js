import validParentheses from '../../../utils/validParentheses';

describe('Valid parentheses', () => {
  it('should return true', () => {
    const result = validParentheses('{}[]()');
    expect(result).toBeTruthy();
  });
});
