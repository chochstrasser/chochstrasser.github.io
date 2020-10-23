import SyntaxHighlighter from "react-syntax-highlighter";
import { atomOneDark } from "react-syntax-highlighter/dist/esm/styles/hljs";

const Detail = () => {
  return (
    <>
      <div className="content__u3I1 question-content__JfgR">
        <div>
          <p>
            Write a function to find the longest common prefix string amongst an
            array of strings. If there is no common prefix, return an empty
            string "".
          </p>

          <strong>Example 1:</strong>

          <SyntaxHighlighter
            language="javascript"
            style={atomOneDark}
            wrapLines={true}
          >
            {`Input: ["flower","flow","flight"]
Output: "fl"`}
          </SyntaxHighlighter>

          <strong>Example 2:</strong>

          <SyntaxHighlighter
            language="javascript"
            style={atomOneDark}
            wrapLines={true}
          >
            {`Input: ["dog","racecar","car"]
Output: ""
Explanation: There is no common prefix among the input strings.`}
          </SyntaxHighlighter>
        </div>
      </div>
    </>
  );
};

export default Detail;
