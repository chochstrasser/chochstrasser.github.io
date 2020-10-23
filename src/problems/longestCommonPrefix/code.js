import SyntaxHighlighter from "react-syntax-highlighter";
import { atomOneDark } from "react-syntax-highlighter/dist/esm/styles/hljs";

const IMPLEMENTATION = `const longestCommonPrefix = strs => {
    if (strs.length === 0) return "";
    let prefix = "";
    let first = strs[0];    
    for (let i = 0; i < first.length; i++) {
        for (let j = 1; j < strs.length; j++) {
            if (first[i] !== strs[j][i]) {
                return prefix;
            }
        }
        prefix += first[i];
    }
    return prefix;
};`;

const Code = () => {
  return (
    <>
      <h3>Implementation</h3>
      <div className="código-row">
        <SyntaxHighlighter
          language="javascript"
          style={atomOneDark}
          wrapLines={true}
        >
          {IMPLEMENTATION}
        </SyntaxHighlighter>
      </div>
    </>
  );
};

export default Code;
