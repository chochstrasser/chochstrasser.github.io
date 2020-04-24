import React from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { atomOneDark } from "react-syntax-highlighter/dist/esm/styles/hljs";

const IMPLEMENTATION_ONE = `const ZigZagConversion = (s, numRows) => {
  if (numRows === 1) return s;
  let rows = [];
  for (let i = 0; i < numRows; i++) {
    rows[i] = "";
  }
  let index = 0;
  let isDown = false;
  for (let i = 0; i < s.length; i++) {
    rows[index] += s[i];
    if (index === 0 || index === numRows - 1) {
      isDown = !isDown;
    }
    index += isDown ? 1 : -1;
  }
  return rows.join("");
};`;

const IMPLEMENTATION_TWO = `const ZigZagConversion = (s, numRows) => {
  if (numRows === 1) return s;
  let result = "";
  const n = s.length;
  const cycleLen = 2 * numRows - 2;
  for (let i = 0; i < numRows; i++) {
    for (let j = 0; j + i < n; j += cycleLen) {
      result += s.charAt(j + i);
      if (i !== 0 && i !== numRows - 1 && j + cycleLen - i < n)
        result += s.charAt(j + cycleLen - i);
    }
  }
  return result;
};`;

const LinkedListCode = () => {
  return (
    <>
      <h3>Implementation one</h3>
      <div className="código-row">
        <SyntaxHighlighter
          language="javascript"
          style={atomOneDark}
          wrapLines={true}
        >
          {IMPLEMENTATION_ONE}
        </SyntaxHighlighter>
      </div>

      <h3>Implementation two</h3>
      <div className="código-row">
        <SyntaxHighlighter
          language="javascript"
          style={atomOneDark}
          wrapLines={true}
        >
          {IMPLEMENTATION_TWO}
        </SyntaxHighlighter>
      </div>
    </>
  );
};

export default LinkedListCode;
