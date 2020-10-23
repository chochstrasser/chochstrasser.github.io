import { ZigZagConversionOne, ZigZagConversionTwo } from '../../../utils/zigZagConversion';

describe('ZigZag conversion one', () => {
  it('should return PAHNAPLSIIGYIR', () => {
    const result = ZigZagConversionOne('PAYPALISHIRING', 3);
    expect(result).toBe('PAHNAPLSIIGYIR');
  });

  it('should return PINALSIGYAHRPI', () => {
    const result = ZigZagConversionOne('PAYPALISHIRING', 4);
    expect(result).toBe('PINALSIGYAHRPI');
  });

  it('should return AB', () => {
    const result = ZigZagConversionOne('AB', 1);
    expect(result).toBe('AB');
  });

  it('should return ABC', () => {
    const result = ZigZagConversionOne('ABC', 1);
    expect(result).toBe('ABC');
  });
});

describe('ZigZag conversion two', () => {
  it('should return PAHNAPLSIIGYIR', () => {
    const result = ZigZagConversionTwo('PAYPALISHIRING', 3);
    expect(result).toBe('PAHNAPLSIIGYIR');
  });

  it('should return PINALSIGYAHRPI', () => {
    const result = ZigZagConversionTwo('PAYPALISHIRING', 4);
    expect(result).toBe('PINALSIGYAHRPI');
  });

  it('should return AB', () => {
    const result = ZigZagConversionTwo('AB', 1);
    expect(result).toBe('AB');
  });

  it('should return ABC', () => {
    const result = ZigZagConversionTwo('ABC', 1);
    expect(result).toBe('ABC');
  });
});
