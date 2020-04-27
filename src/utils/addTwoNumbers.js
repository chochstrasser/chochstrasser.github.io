const ListNode = (val = 0) => ({
  val,
  next: null,
});

const AddTwoNumbers = (l1, l2) => {
  let head = null;
  let current = null;
  let sum = 0;
  let carry = 0;

  while (l1 != null || l2 !== null || sum > 0) {
    if (l1 !== null) {
      sum += l1.val;
      l1 = l1.next;
    }
    if (l2 !== null) {
      sum += l2.val;
      l2 = l2.next;
    }
    if (sum > 9) {
      sum = sum - 10;
      carry = 1;
    }
    if (head) {
      current.next = ListNode(sum);
      current = current.next;
    } else {
      head = ListNode(sum);
      current = head;
    }
    sum = carry;
    carry = 0;
  }

  return head;
};

export default AddTwoNumbers;
export { ListNode };
