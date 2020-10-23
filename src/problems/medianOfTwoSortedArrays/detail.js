import SyntaxHighlighter from 'react-syntax-highlighter';
import { atomOneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';

const Detail = () => {
  return (
    <>
      <div className="content__u3I1 question-content__JfgR">
        <div>
          <p>
            There are two sorted arrays nums1 and nums2 of size m and n respectively. Find the median of the two sorted arrays. The overall
            run time complexity should be O(log (m+n)). You may assume nums1 and nums2 cannot be both empty.
          </p>

          <strong>Example 1:</strong>

          <SyntaxHighlighter language="javascript" style={atomOneDark} wrapLines={true}>
            {`nums1 = [1, 3]
nums2 = [2]

The median is 2.0`}
          </SyntaxHighlighter>
        </div>

        <strong>Example 2:</strong>

        <SyntaxHighlighter language="javascript" style={atomOneDark} wrapLines={true}>
          {`nums1 = [1, 2]
nums2 = [3, 4]

The median is (2 + 3)/2 = 2.5`}
        </SyntaxHighlighter>
      </div>
    </>
  );
};

export default Detail;
