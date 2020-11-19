import MergeTwoLists from '../../../utils/mergeTwoSortedLists';

function arrayToList(array) {
  var list = null;
  for (var i = array.length - 1; i >= 0; i--) list = { val: array[i], next: list };
  return list;
}

describe('Merge two sorted lists', () => {
  it('should return linked list', () => {
    const l1 = arrayToList([1, 2, 4]);
    const l2 = arrayToList([1, 3, 4]);
    const result = MergeTwoLists(l1, l2);
    expect(result.val).toBe(1);
    expect(result.next.val).toBe(1);
    expect(result.next.next.val).toBe(2);
    expect(result.next.next.next.val).toBe(3);
    expect(result.next.next.next.next.val).toBe(4);
  });
});
