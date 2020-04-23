import React from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { atomOneDark } from "react-syntax-highlighter/dist/esm/styles/hljs";
import LinkedList from "../utils/linkedList";

const DATA_STRUCTURE = `const Node = () => ({
  data: null,
  next: null,
});`;

const IMPLEMENTATION = `const LinkedList = ${LinkedList}`;

const LinkedListCode = () => {
  return (
    <>
      <h3>Data structure representation (Singly)</h3>
      <SyntaxHighlighter
        language="javascript"
        style={atomOneDark}
        wrapLines={true}
      >
        {DATA_STRUCTURE}
      </SyntaxHighlighter>

      <h3>Implementation (Singly)</h3>
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

export default LinkedListCode;
