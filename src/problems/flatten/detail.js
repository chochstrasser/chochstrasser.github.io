import SyntaxHighlighter from 'react-syntax-highlighter';
import { atomOneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';

const Detail = () => {
  return (
    <>
      <div className="content__u3I1 question-content__JfgR">
        <div>
          <p>You are given an array to flatten the nesting arbitrary list of values.</p>

          <strong>Example:</strong>

          <SyntaxHighlighter language="javascript" style={atomOneDark} wrapLines={true}>
            {`Input: [[1], 2, [[3, 4], 5], [[[]]], [[[6]]], 7, 8]
Output: [1, 2, 3, 4, 5, 6, 7, 8]`}
          </SyntaxHighlighter>
        </div>
      </div>
    </>
  );
};

export default Detail;
