import React from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { atomOneDark } from "react-syntax-highlighter/dist/esm/styles/hljs";
import Trie from "../utils/trie";

const DATA_STRUCTURE = `const emptyNode = () => ({
  children: {},
  items: [],
});`;

const IMPLEMENTATION = `const Trie = ${Trie}`;

const TrieCode = () => {
  return (
    <>
      <h3>Data structure representation</h3>
      <SyntaxHighlighter
        language="javascript"
        style={atomOneDark}
        wrapLines={true}
      >
        {DATA_STRUCTURE}
      </SyntaxHighlighter>

      <h3>Implementation</h3>
      <div className="código-row">
        <SyntaxHighlighter
          language="javascript"
          style={atomOneDark}
          wrapLines={true}
        >
          {IMPLEMENTATION}
        </SyntaxHighlighter>
      </div>
    </>
  );
};

export default TrieCode;
