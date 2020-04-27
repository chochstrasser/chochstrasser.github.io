import React from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { atomOneDark } from "react-syntax-highlighter/dist/esm/styles/hljs";

const TwoSumDetail = () => {
  return (
    <>
      <div className="content__u3I1 question-content__JfgR">
        <div>
          <p>
            You are given two non-empty linked lists representing two
            non-negative integers. The digits are stored in reverse order and
            each of their nodes contain a single digit. Add the two numbers and
            return it as a linked list. You may assume the two numbers do not
            contain any leading zero, except the number 0 itself.
          </p>

          <strong>Example:</strong>

          <SyntaxHighlighter
            language="javascript"
            style={atomOneDark}
            wrapLines={true}
          >
            {`Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
Output: 7 -> 0 -> 8
Explanation: 342 + 465 = 807.`}
          </SyntaxHighlighter>
        </div>
      </div>
    </>
  );
};

export default TwoSumDetail;
