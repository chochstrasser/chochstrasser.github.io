import Trie from '../../../utils/trie';
import { TrieDataStrings } from '../__test_data__/trieTestData';

describe('Trie', () => {
  it('should return a defined trie from an array of strings with a found value of two strings in array when searching empty string', () => {
    const trie = Trie();
    TrieDataStrings.forEach((item) => {
      trie.add(item, item);
    });
    const found = trie.search('');
    expect(trie).toBeDefined();
    expect(found.length).toBe(2);
    expect(found[0]).toBe('123');
    expect(found[1]).toBe('abc');
  });

  it('should return a defined trie from an array of strings with a found value of abc when searching abc', () => {
    const trie = Trie();
    TrieDataStrings.forEach((item) => {
      trie.add(item, item);
    });
    const found = trie.search('abc');
    expect(trie).toBeDefined();
    expect(found.length).toBe(1);
    expect(found[0]).toBe('abc');
  });

  it('should return a defined trie from an array of strings with a found value of 123 when searching 12', () => {
    const trie = Trie();
    TrieDataStrings.forEach((item) => {
      trie.add(item, item);
    });
    const found = trie.search('12');
    expect(trie).toBeDefined();
    expect(found.length).toBe(1);
    expect(found[0]).toBe('123');
  });

  it('should return a defined trie from an array of strings with a found empty array when searching NAN', () => {
    const trie = Trie();
    TrieDataStrings.forEach((item) => {
      trie.add(item, item);
    });
    const found = trie.search('NAN');
    expect(trie).toBeDefined();
    expect(found.length).toBe(0);
  });
});
