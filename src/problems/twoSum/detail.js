import SyntaxHighlighter from "react-syntax-highlighter";
import { atomOneDark } from "react-syntax-highlighter/dist/esm/styles/hljs";

const TwoSumDetail = () => {
  return (
    <>
      <div className="content__u3I1 question-content__JfgR">
        <div>
          <p>
            Given an array of integers, return indices of the two numbers such
            that they add up to a specific target. You may assume that each
            input would have exactly one solution, and you may not use the same
            element twice.
          </p>

          <strong>Example:</strong>

          <SyntaxHighlighter
            language="javascript"
            style={atomOneDark}
            wrapLines={true}
          >
            {`Given nums = [2, 7, 11, 15], target = 9,

Because nums[0] + nums[1] = 2 + 7 = 9,
return [0, 1].`}
          </SyntaxHighlighter>
        </div>
      </div>
    </>
  );
};

export default TwoSumDetail;
