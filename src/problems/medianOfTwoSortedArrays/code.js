import React from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { atomOneDark } from "react-syntax-highlighter/dist/esm/styles/hljs";

const IMPLEMENTATION = `const findMedianSortedArrays = (nums1, nums2) => {
  const nums3 = [...nums1, ...nums2].sort((a, b) => a - b);
  const isOdd = nums3.length % 2 === 1;
  const firstNum = nums3[Math.floor((nums3.length - 1) / 2)];
  const secondNum = nums3[Math.floor(nums3.length / 2)];
  return isOdd ? firstNum : (firstNum + secondNum) / 2;
};`;

const Code = () => {
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

export default Code;
