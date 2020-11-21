import SyntaxHighlighter from 'react-syntax-highlighter';
import { atomOneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';

const Detail = () => {
  return (
    <>
      <div className="content__u3I1 question-content__JfgR">
        <div>
          <p>You are given an array either 1D or 2D. You are to determine the area connected to a given node.</p>

          <strong>Example 1:</strong>

          <SyntaxHighlighter language="javascript" style={atomOneDark} wrapLines={true}>
            {`Input: 2D array: [[0, 0, 0, 0, 1, 1, 0, 0, 0, 0]], x: 0, y: 4
Output: 2`}
          </SyntaxHighlighter>
        </div>

        <strong>Example 2:</strong>

        <SyntaxHighlighter language="javascript" style={atomOneDark} wrapLines={true}>
          {`Input: 2D array:  [
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 1, 1, 0, 0, 0, 0],
  [0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
], x: 2, y: 6
Output: 5`}
        </SyntaxHighlighter>
      </div>
    </>
  );
};

export default Detail;
