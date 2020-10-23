import SyntaxHighlighter from 'react-syntax-highlighter';
import { atomOneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';

const IMPLEMENTATION = [
  `const FlattenIterative = (array) => {
  for (let i = 0; i <= array.length; i++) {
    while (true) {
      if (array[i] !== undefined && array[i].constructor === Array) {
        array.splice(i, 1, ...array[i]);
      } else break;
    }
  }
};`,
  `const FlattenRecursion = (array) => {
  const reducedArray = array.reduce((acc, curr) => {
    const temp = curr.constructor === Array ? FlattenRecursion(curr) : curr;
    const value = acc.concat(temp);
    return value;
  }, []);
  return reducedArray;
};`,
  `const FlattenShortest = (a) =>
  Array.isArray(a) ? [].concat(...a.map(FlattenShortest)) : a;`,
];

const Code = () => {
  return (
    <>
      <h3>Implementation one</h3>
      <div className="código-row">
        <SyntaxHighlighter language="javascript" style={atomOneDark} wrapLines={true}>
          {IMPLEMENTATION[0]}
        </SyntaxHighlighter>
      </div>
      <h3>Implementation one</h3>
      <div className="código-row">
        <SyntaxHighlighter language="javascript" style={atomOneDark} wrapLines={true}>
          {IMPLEMENTATION[1]}
        </SyntaxHighlighter>
      </div>
      <h3>Implementation one</h3>
      <div className="código-row">
        <SyntaxHighlighter language="javascript" style={atomOneDark} wrapLines={true}>
          {IMPLEMENTATION[2]}
        </SyntaxHighlighter>
      </div>
    </>
  );
};

export default Code;
