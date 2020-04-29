import React from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { atomOneDark } from "react-syntax-highlighter/dist/esm/styles/hljs";

const TwoSumDetail = () => {
  return (
    <>
      <div className="content__u3I1 question-content__JfgR">
        <div>
          <p>
            Given a string, find the length of the longest substring without
            repeating characters.
          </p>

          <strong>Example 1:</strong>

          <SyntaxHighlighter
            language="javascript"
            style={atomOneDark}
            wrapLines={true}
          >
            {`Input: "abcabcbb"
Output: 3 
Explanation: The answer is "abc", with the length of 3.`}
          </SyntaxHighlighter>

          <strong>Example 2:</strong>

          <SyntaxHighlighter
            language="javascript"
            style={atomOneDark}
            wrapLines={true}
          >
            {`Input: "bbbbb"
Output: 1
Explanation: The answer is "b", with the length of 1.`}
          </SyntaxHighlighter>

          <strong>Example 3:</strong>

          <SyntaxHighlighter
            language="javascript"
            style={atomOneDark}
            wrapLines={true}
          >
            {`Input: "pwwkew"
Output: 3
Explanation: The answer is "wke", with the length of 3. 
             Note that the answer must be a substring, "pwke" is a subsequence and not a substring.`}
          </SyntaxHighlighter>
        </div>
      </div>
    </>
  );
};

export default TwoSumDetail;
