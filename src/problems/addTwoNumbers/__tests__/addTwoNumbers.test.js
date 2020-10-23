import AddTwoNumbers, { ListNode } from '../../../utils/addTwoNumbers';

describe('Add two numbers', () => {
  it('should return [0,1]', () => {
    const l1 = ListNode(5);
    const l2 = ListNode(5);
    const result = AddTwoNumbers(l1, l2);
    expect(result.val).toBe(0);
    expect(result.next.val).toBe(1);
  });

  it('should return [7,0,8]', () => {
    let l1 = ListNode(2);
    l1.next = ListNode(4);
    l1.next.next = ListNode(3);
    let l2 = ListNode(5);
    l2.next = ListNode(6);
    l2.next.next = ListNode(4);
    const result = AddTwoNumbers(l1, l2);
    expect(result.val).toBe(7);
    expect(result.next.val).toBe(0);
    expect(result.next.next.val).toBe(8);
  });

  it('should return [0,0,1]', () => {
    let l1 = ListNode(9);
    l1.next = ListNode(9);
    let l2 = ListNode(1);
    const result = AddTwoNumbers(l1, l2);
    expect(result.val).toBe(0);
    expect(result.next.val).toBe(0);
    expect(result.next.next.val).toBe(1);
  });

  it('should return [0]', () => {
    let l1 = ListNode();
    let l2 = ListNode();
    const result = AddTwoNumbers(l1, l2);
    expect(result.val).toBe(0);
  });
});
