import SyntaxHighlighter from 'react-syntax-highlighter';
import { atomOneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';

const Detail = () => {
  return (
    <>
      <div className="content__u3I1 question-content__JfgR">
        <div>
          <p>
            Given an <code>m x n</code> 2D binary grid <code>grid</code> which represents a map of <code>'1'</code>s (land) and{' '}
            <code>'0'</code>s (water), return the number of islands.
          </p>
          <p>
            An <strong>island</strong> is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. You may
            assume all four edges of the grid are all surrounded by water.
          </p>
        </div>
        <strong>Example 1:</strong>
        <SyntaxHighlighter language="javascript" style={atomOneDark} wrapLines={true}>
          {`Input: grid = [
  ["1","1","1","1","0"],
  ["1","1","0","1","0"],
  ["1","1","0","0","0"],
  ["0","0","0","0","0"]
]
Output: 1`}
        </SyntaxHighlighter>
        <strong>Example 2:</strong>
        <SyntaxHighlighter language="javascript" style={atomOneDark} wrapLines={true}>
          {`Input: grid = [
  ["1","1","0","0","0"],
  ["1","1","0","0","0"],
  ["0","0","1","0","0"],
  ["0","0","0","1","1"]
]
Output: 3`}
        </SyntaxHighlighter>
        <strong>Constraints:</strong>
        <SyntaxHighlighter language="javascript" style={atomOneDark} wrapLines={true}>
          {`m == grid.length
n == grid[i].length
1 <= m, n <= 300
grid[i][j] is '0' or '1'.`}
        </SyntaxHighlighter>
      </div>
    </>
  );
};

export default Detail;
