import { findMedianSortedArrays, findMedianSortedArraysBinarySearch } from '../../../utils/medianOfTwoSortedArrays';

describe('Median of two sorted arrays', () => {
  it('should return 2', () => {
    const result = findMedianSortedArrays([1, 3], [2]);
    expect(result).toBe(2);
  });
});

describe('Median of two sorted arrays w/ binary search', () => {
  it('should return 2', () => {
    const result = findMedianSortedArraysBinarySearch([1, 3], [2]);
    expect(result).toBe(2);
  });
});
