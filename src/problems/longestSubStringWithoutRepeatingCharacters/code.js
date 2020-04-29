import React from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { atomOneDark } from "react-syntax-highlighter/dist/esm/styles/hljs";

const IMPLEMENTATION = `const lengthOfLongestSubstring = s => {
    let longest = 0;
    let start = 0;
    let seen = {};
    for (let i = 0; i < s.length; i++) {
        if (s[i] in seen && start <= seen[s[i]]) {
            longest = Math.max(i - start, longest);
            start = seen[s[i]] + 1;
        }
        seen[s[i]] = i;
    };
        
    return Math.max(s.length - start, longest);
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
