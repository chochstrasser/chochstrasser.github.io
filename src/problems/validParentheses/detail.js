import SyntaxHighlighter from 'react-syntax-highlighter';
import { atomOneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';

const Detail = () => {
  return (
    <>
      <div className="content__u3I1 question-content__JfgR">
        <div>
          <p>Given a string containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.</p>
          <p>An input string is valid if:</p>
          <ol>
            <li>Open brackets must be closed by the same type of brackets.</li>
            <li>Open brackets must be closed in the correct order.</li>
          </ol>
          <p>Note that an empty string is also considered valid.</p>
        </div>
        <strong>Example 1:</strong>
        <SyntaxHighlighter language="javascript" style={atomOneDark} wrapLines={true}>
          {`Input: "()"
Output: true`}
        </SyntaxHighlighter>
        <strong>Example 2:</strong>
        <SyntaxHighlighter language="javascript" style={atomOneDark} wrapLines={true}>
          {`Input: "()[]{}"
Output: true`}
        </SyntaxHighlighter>
        <strong>Example 3:</strong>
        <SyntaxHighlighter language="javascript" style={atomOneDark} wrapLines={true}>
          {`Input: "(]"
Output: false`}
        </SyntaxHighlighter>
        <strong>Example 4:</strong>
        <SyntaxHighlighter language="javascript" style={atomOneDark} wrapLines={true}>
          {`Input: "([)]"
Output: false`}
        </SyntaxHighlighter>
        <strong>Example 5:</strong>
        <SyntaxHighlighter language="javascript" style={atomOneDark} wrapLines={true}>
          {`Input: "{[]}"
Output: true`}
        </SyntaxHighlighter>
      </div>
    </>
  );
};

export default Detail;
