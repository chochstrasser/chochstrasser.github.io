import SyntaxHighlighter from 'react-syntax-highlighter';
import { atomOneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';

const ZigZagDetail = () => {
  return (
    <>
      <div className="content__u3I1 question-content__JfgR">
        <div>
          <p>
            The string <code className="código-wide código-gray código-light-gray">"PAYPALISHIRING"</code> is written in a zigzag pattern on
            a given number of rows.
          </p>
          <p>
            And then read line by line: <code className="código-wide código-gray código-light-gray">"PAHNAPLSIIGYIR"</code>
          </p>
          <p>Write the code that will take a string and make this conversion given a number of rows:</p>

          <SyntaxHighlighter language="javascript" style={atomOneDark} wrapLines={true}>
            {`const result = zigZagConversion(s, numRows);`}
          </SyntaxHighlighter>

          <p>
            <strong>Example 1:</strong>
          </p>
          <pre>
            <strong>Input:</strong> s = <code className="código-wide código-gray código-light-gray">"PAYPALISHIRING"</code>
            , numRows = 3
            <br />
            <strong>Output:</strong> <code className="código-wide código-gray código-light-gray">"PAHNAPLSIIGYIR"</code>
          </pre>
          <p>
            <strong>Example 2:</strong>
          </p>
          <pre>
            <strong>Input:</strong> s = <code className="código-wide código-gray código-light-gray">"PAYPALISHIRING"</code>
            , numRows =&nbsp;4
            <br />
            <strong>Output:</strong>&nbsp;
            <code className="código-wide código-gray código-light-gray">"PINALSIGYAHRPI"</code>
          </pre>
        </div>
      </div>
    </>
  );
};

export default ZigZagDetail;
