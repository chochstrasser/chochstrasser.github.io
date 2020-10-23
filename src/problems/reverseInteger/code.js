import SyntaxHighlighter from "react-syntax-highlighter";
import { atomOneDark } from "react-syntax-highlighter/dist/esm/styles/hljs";

const IMPLEMENTATION = `const reverse = (x) => {
  let temp = Math.abs(x);
  let reversed = 0;
  while (temp !== 0) {
    const r = temp % 10;
    reversed = reversed * 10 + r;
    temp = Math.floor(temp / 10);
  }
  if (reversed > 2 ** 31 || reversed < 2 ** 31 * -1) return 0;
  return reversed * Math.sign(x);
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
