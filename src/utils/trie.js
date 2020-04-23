const Node = () => ({
  children: {},
  items: [],
});

const Trie = () => {
  const root = Node();

  const breakUpWord = (word) => {
    const letter = word.charAt(0);
    const remainder = word.substring(1);
    return { letter, remainder };
  };

  const addNode = (node, word, item) => {
    if (!node || !word) {
      return;
    }
    const { letter, remainder } = breakUpWord(word);
    node.children[letter] = node.children[letter] || Node();
    if (!remainder) {
      node.children[letter].items.push(item);
    }
    addNode(node.children[letter], remainder, item);
  };

  const removeNode = (node, text, item) => {
    if (!text?.length) {
      const content = node.items || [];
      const index = content.findIndex((c) => c === item);
      content.splice(index, 1);
      node.items = [...content];
    }
    const { letter, remainder } = breakUpWord(text);
    if (!node.children[letter]) {
      return;
    }
    removeNode(node.children[letter], remainder, item);
  };

  const collect = (node) => {
    const items = Object.keys(node.children).map((child) => {
      return collect(node.children[child]);
    });
    const values = node.items || [];
    return values.concat(...items);
  };

  const search = (node, text) => {
    if (!text?.length) {
      return collect(node);
    }
    const { letter, remainder } = breakUpWord(text);
    if (!node.children[letter]) {
      return [];
    }
    return search(node.children[letter], remainder);
  };

  return {
    add: (word, item) => {
      addNode(root, (word || "").toLocaleLowerCase(), item);
    },
    remove: (word, item) => {
      removeNode(root, (word || "").toLocaleLowerCase(), item);
    },
    search: (text) => [
      ...new Set(search(root, (text || "").toLocaleLowerCase())),
    ],
  };
};

export default Trie;
