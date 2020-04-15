import React from "react";
import TrieImage from "../images/trie.svg";

const Trie = () => {
  return (
    <>
      <h2>Trie</h2>
      <div>
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
      </div>
      <img src={TrieImage} alt="trie" />
      <h3>References</h3>
      <ul>
        <li>
          <a href="https://en.wikipedia.org/wiki/Trie">Wikipedia</a>
        </li>
        <li>
          <a href="https://www.youtube.com/watch?v=zIjfhVPRZCg&list=PLLXdhg_r2hKA7DPDsunoDZ-Z769jWn4R8&index=7&t=0s">
            YouTube
          </a>
        </li>
      </ul>
    </>
  );
};

export default Trie;
