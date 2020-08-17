import React from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { atomOneDark } from "react-syntax-highlighter/dist/esm/styles/hljs";

const Detail = () => {
  return (
    <>
      <div className="content__u3I1 question-content__JfgR">
        <div>
          <p>
            Roman numerals are represented by seven different symbols: I, V, X,
            L, C, D and M.
          </p>
          <SyntaxHighlighter
            language="javascript"
            style={atomOneDark}
            wrapLines={true}
          >
            {`Symbol       Value
I             1
V             5
X             10
L             50
C             100
D             500
M             1000`}
          </SyntaxHighlighter>
          <p>
            For example, two is written as II in Roman numeral, just two one's
            added together. Twelve is written as, XII, which is simply X + II.
            The number twenty seven is written as XXVII, which is XX + V + II.
          </p>
          <p>
            Roman numerals are usually written largest to smallest from left to
            right. However, the numeral for four is not IIII. Instead, the
            number four is written as IV. Because the one is before the five we
            subtract it making four. The same principle applies to the number
            nine, which is written as IX. There are six instances where
            subtraction is used:
          </p>
          <ul>
            <li>I can be placed before V (5) and X (10) to make 4 and 9.</li>
            <li>
              X can be placed before L (50) and C (100) to make 40 and 90.
            </li>
            <li>
              C can be placed before D (500) and M (1000) to make 400 and 900.
            </li>
          </ul>
          <p>
            Given a roman numeral, convert it to an integer. Input is guaranteed
            to be within the range from 1 to 3999.
          </p>
        </div>
        <strong>Example 1:</strong>
        <SyntaxHighlighter
          language="javascript"
          style={atomOneDark}
          wrapLines={true}
        >
          {`Input: "III"
Output: 3`}
        </SyntaxHighlighter>
        <strong>Example 2:</strong>
        <SyntaxHighlighter
          language="javascript"
          style={atomOneDark}
          wrapLines={true}
        >
          {`Input: "IV"
Output: 4`}
        </SyntaxHighlighter>
        <strong>Example 3:</strong>
        <SyntaxHighlighter
          language="javascript"
          style={atomOneDark}
          wrapLines={true}
        >
          {`Input: "IX"
Output: 9`}
        </SyntaxHighlighter>
        <strong>Example 4:</strong>
        <SyntaxHighlighter
          language="javascript"
          style={atomOneDark}
          wrapLines={true}
        >
          {`Input: "LVIII"
Output: 58
Explanation: L = 50, V= 5, III = 3.`}
        </SyntaxHighlighter>
        <strong>Example 5:</strong>
        <SyntaxHighlighter
          language="javascript"
          style={atomOneDark}
          wrapLines={true}
        >
          {`Input: "MCMXCIV"
Output: 1994
Explanation: M = 1000, CM = 900, XC = 90 and IV = 4.`}
        </SyntaxHighlighter>
      </div>
    </>
  );
};

export default Detail;
