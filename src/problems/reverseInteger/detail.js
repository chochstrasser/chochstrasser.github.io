import SyntaxHighlighter from "react-syntax-highlighter";
import { atomOneDark } from "react-syntax-highlighter/dist/esm/styles/hljs";

const Detail = () => {
  return (
    <>
      <div className="content__u3I1 question-content__JfgR">
        <div>
          <p>Given a 32-bit signed integer, reverse digits of an integer.</p>
        </div>
        <strong>Example 1:</strong>
        <SyntaxHighlighter
          language="javascript"
          style={atomOneDark}
          wrapLines={true}
        >
          {`Input: 123
Output: 321`}
        </SyntaxHighlighter>
        <strong>Example 2:</strong>
        <SyntaxHighlighter
          language="javascript"
          style={atomOneDark}
          wrapLines={true}
        >
          {`Input: -123
Output: -321`}
        </SyntaxHighlighter>
        <strong>Example 3:</strong>
        <SyntaxHighlighter
          language="javascript"
          style={atomOneDark}
          wrapLines={true}
        >
          {`Input: 120
Output: 21`}
        </SyntaxHighlighter>
        <p>
          <strong>Note:</strong>
        </p>
        <p>
          Assume we are dealing with an environment which could only store
          integers within the 32-bit signed integer range: [−231, 231 − 1]. For
          the purpose of this problem, assume that your function returns 0 when
          the reversed integer overflows.
        </p>
      </div>
    </>
  );
};

export default Detail;
