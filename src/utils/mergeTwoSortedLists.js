const ListNode = (val, next) => ({
  val: val === undefined ? 0 : val,
  next: next === undefined ? null : next,
});

const mergeTwoLists = (l1, l2) => {
  let l3 = ListNode();
  let head = l3;
  while (l1 && l2) {
    if (l1.val < l2.val) {
      l3.next = l1;
      l1 = l1.next;
    } else {
      l3.next = l2;
      l2 = l2.next;
    }
    l3 = l3.next;
  }
  l3.next = l1 || l2;
  return head.next;
};

export default mergeTwoLists;
