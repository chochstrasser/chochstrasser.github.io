import React from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { atomOneDark } from "react-syntax-highlighter/dist/esm/styles/hljs";

const IMPLEMENTATION = `const TwoSum = (numbers, target) => {
  const ø = {};
  for (let k = 0; k < numbers.length; k++) {
      const comp = target - numbers[k];
      if (ø[comp] !== undefined) {
          return [ø[comp], k];
      }
      ø[numbers[k]] = k;
  }
  return null;
};`;

const TwoSumCode = () => {
  return (
    <>
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

export default TwoSumCode;
