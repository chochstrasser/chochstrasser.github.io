import LinkedList from "../../utils/linkedList";
import { LinkedListDataStrings } from "../__test_data__/linkedListTestData";

describe("Linked List", () => {
  it("should return a defined linked list", () => {
    const linkedList = LinkedList();
    LinkedListDataStrings.forEach((item) => {
      linkedList.insert(item);
    });
    expect(linkedList).toBeDefined();
  });
});
