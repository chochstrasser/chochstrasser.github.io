import SyntaxHighlighter from 'react-syntax-highlighter';
import { atomOneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';

const Detail = () => {
  return (
    <>
      <div className="content__u3I1 question-content__JfgR">
        <div>
          <p>
            Given a large list of words. Some of these are compounds, where all parts are also in the List. Write a method that will find
            all combinations where one word is a composite of two or more words from the same list and return them.
          </p>

          <strong>Example:</strong>

          <SyntaxHighlighter language="javascript" style={atomOneDark} wrapLines={true}>
            {`Input: [rockstar, rock, stars, rocks, tar, star, rockstars, super, highway, high, way, superhighway]
Output: [[rock, star], [rocks, tar], [super, highway], [super, high, way],...]`}
          </SyntaxHighlighter>
        </div>
      </div>
    </>
  );
};

export default Detail;
