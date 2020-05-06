import React from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { atomOneDark } from "react-syntax-highlighter/dist/esm/styles/hljs";

const Detail = () => {
  return (
    <>
      <div className="content__u3I1 question-content__JfgR">
        <div>
          <p>
            Determine whether an integer is a palindrome. An integer is a
            palindrome when it reads the same backward as forward.
          </p>

          <strong>Example 1:</strong>

          <SyntaxHighlighter
            language="javascript"
            style={atomOneDark}
            wrapLines={true}
          >
            {`Input: 121
Output: true`}
          </SyntaxHighlighter>

          <strong>Example 2:</strong>

          <SyntaxHighlighter
            language="javascript"
            style={atomOneDark}
            wrapLines={true}
          >
            {`Input: -121
Output: false
Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.`}
          </SyntaxHighlighter>

          <strong>Example 3:</strong>

          <SyntaxHighlighter
            language="javascript"
            style={atomOneDark}
            wrapLines={true}
          >
            {`Input: 10
Output: false
Explanation: Reads 01 from right to left. Therefore it is not a palindrome.`}
          </SyntaxHighlighter>
        </div>
      </div>
    </>
  );
};

export default Detail;
