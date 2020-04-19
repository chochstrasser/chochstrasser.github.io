import React from "react";
import TrieImage from "../images/trie.svg";

const TrieDetail = () => {
  return (
    <>
      <p>
        In computer science, a <strong>trie</strong>, also called digital tree
        and sometimes radix tree or prefix tree (as they can be searched by
        prefixes), is a kind of search tree—an ordered tree data structure that
        is used to store a dynamic set or associative array where the keys are
        usually strings. Unlike a binary search tree, no node in the tree stores
        the key associated with that node; instead, its position in the tree
        defines the key with which it is associated. All the descendants of a
        node have a common prefix of the string associated with that node, and
        the root is associated with the empty string. Values are not necessarily
        associated with every node. Rather, values tend only to be associated
        with leaves, and with some inner nodes that correspond to keys of
        interest. For the space-optimized presentation of prefix tree, see
        compact prefix tree.
      </p>
      <img className="código-image" src={TrieImage} alt="trie" />
      <p>
        In the example shown, keys are listed in the nodes and values below
        them. Each complete English word has an arbitrary integer value
        associated with it. A trie can be seen as a tree-shaped deterministic
        finite automaton. Each finite language is generated by a trie automaton,
        and each trie can be compressed into a deterministic acyclic finite
        state automaton.
      </p>
      <p>
        Though tries can be keyed by character strings, they need not be. The
        same algorithms can be adapted to serve similar functions on ordered
        lists of any construct; e.g., permutations on a list of digits or
        shapes. In particular, a bitwise trie is keyed on the individual bits
        making up any fixed-length binary datum, such as an integer or memory
        address.
      </p>
    </>
  );
};

export default TrieDetail;
