import SyntaxHighlighter from 'react-syntax-highlighter';
import { atomOneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';

const Detail = () => {
  return (
    <>
      <div className="content__u3I1 question-content__JfgR">
        <div>
          <p>Given a string reverse the order of the given string as your output.</p>

          <strong>Example:</strong>

          <SyntaxHighlighter language="javascript" style={atomOneDark} wrapLines={true}>
            {`Input: ratskcor
Output: rockstar`}
          </SyntaxHighlighter>
        </div>
      </div>
    </>
  );
};

export default Detail;
