import LinkedList from '../../../utils/linkedList';
import { LinkedListDataStrings } from '../__test_data__/linkedListTestData';

describe('Linked List', () => {
  it('should return a defined linked list', () => {
    const linkedList = LinkedList();
    LinkedListDataStrings.forEach((item) => {
      linkedList.insert(item);
    });
    const list = linkedList.display();
    expect(list).toBeDefined();
    expect(list.data).toBe('abc');
    expect(list.next).toBeDefined();
    expect(list.next.data).toBe('123');
    expect(list.next.next).toBeNull();
  });
});
