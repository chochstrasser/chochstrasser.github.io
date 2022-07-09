import getCompoundWords from '../../../utils/getCompoundWords';

describe('Compound words', () => {
  it('should return [0,1]', () => {
    const input = ['rockstar', 'rock', 'stars', 'rocks', 'tar', 'star', 'rockstars', 'super', 'highway', 'high', 'way', 'superhighway'];
    const result = getCompoundWords(input);
    expect(result[0][0]).toBe('rock');
    expect(result[0][1]).toBe('star');
    expect(result[1][0]).toBe('rocks');
    expect(result[1][1]).toBe('tar');
    expect(result[2][0]).toBe('rock');
    expect(result[2][1]).toBe('stars');
    expect(result[3][0]).toBe('high');
    expect(result[3][1]).toBe('way');
    expect(result[4][0]).toBe('super');
    expect(result[4][1]).toBe('high');
    expect(result[4][2]).toBe('way');
    expect(result[5][0]).toBe('super');
    expect(result[5][1]).toBe('highway');
  });
});
