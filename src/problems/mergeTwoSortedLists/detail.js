import SyntaxHighlighter from 'react-syntax-highlighter';
import { atomOneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';

const Detail = () => {
  return (
    <>
      <div className="content__u3I1 question-content__JfgR">
        <div>
          <p>
            Merge two sorted linked lists and return it as a new <strong>sorted</strong> list. The new list should be made by splicing
            together the nodes of the first two lists.
          </p>
        </div>
        <strong>Example 1:</strong>
        <SyntaxHighlighter language="javascript" style={atomOneDark} wrapLines={true}>
          {`Input: 1->2->4, 1->3->4
Output: 1->1->2->3->4->4`}
        </SyntaxHighlighter>
      </div>
    </>
  );
};

export default Detail;
