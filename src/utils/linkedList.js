const Node = () => ({
  data: null,
  next: null,
});

const LinkedList = () => {
  const head = Node();

  const insertNode = (node, value) => {
    if (!node || !value) {
      return;
    }
    if (!node.data) {
      node.data = value;
      return;
    }
    node.next = node.next || Node();
    insertNode(node.next, value);
  };

  return {
    insert: (value) => {
      insertNode(head, value);
    },
  };
};

export default LinkedList;
