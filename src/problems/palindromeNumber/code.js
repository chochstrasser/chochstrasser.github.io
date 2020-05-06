import React from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { atomOneDark } from "react-syntax-highlighter/dist/esm/styles/hljs";

const IMPLEMENTATIONS = [
  `const isPalindrome = (x) => {
  if (x.length === 1) return true;
  const strArray = [...(x.toString())];
  while (strArray.length >= 2) {
    if (strArray.shift() !== strArray.pop()) {
      return false;
    }
  }
  return true;
};`,
  `const palindromeNumber = (x) => {
  if (x < 0) return false;
  let temp = x;
  let reversed = 0;
  while (temp !== 0) {
    const r = temp % 10;
    reversed = reversed * 10 + r;
    temp = Math.floor(temp / 10);
  }
  return x === reversed;
};`,
];

const Code = () => {
  return (
    <>
      <h3>Implementation one</h3>
      <div className="código-row">
        <SyntaxHighlighter
          language="javascript"
          style={atomOneDark}
          wrapLines={true}
        >
          {IMPLEMENTATIONS[0]}
        </SyntaxHighlighter>
      </div>
      <h3>Implementation two</h3>
      <div className="código-row">
        <SyntaxHighlighter
          language="javascript"
          style={atomOneDark}
          wrapLines={true}
        >
          {IMPLEMENTATIONS[1]}
        </SyntaxHighlighter>
      </div>
    </>
  );
};

export default Code;
