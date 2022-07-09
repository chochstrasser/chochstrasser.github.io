import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import Detail from './detail';
import ROUTES from '../../const/routes';
import Code from '../../components/code';

const CODE = `function getCompoundWords(list) {
  const result = [];
  const set = new Set(list);
    
  for (let word of list) {
      set.delete(word);
      let tempList = wordBreak(word, set);
      if (tempList !== null && tempList.length != 0) {
          for (let temp of tempList) {
              result.push(temp.split(' '));
          }
      }
      set.add(word);
  }
  return result;
  }
  
  function wordBreak(s, wordDict) {
    const ans = [];
    dfs(s, 0, new Set(wordDict), ans, "");
    return ans;
  }
  
  function dfs(s, start, wordSet, ans, tmp) {
    if (start === s.length) {
        ans.push(tmp.trim());
        return;
    }
    for (let i = start; i < s.length; i++) {
        if (wordSet.has(s.substring(start, i + 1))) {
            dfs(s, i + 1, wordSet, ans, tmp + " " + s.substring(start, i + 1));
        }
    }
  }`;

const Wrapper = styled.div`
  max-width: 1400px;
`;

const CompoundWords = ({ showModal }) => {
  const history = useHistory();

  const handleClick = (path) => () => {
    history.push(path);
    window.scrollTo(0, 0);
  };

  if (showModal) {
    return null;
  }

  return (
    <Wrapper className="código-content código-white">
      <div className="código-container">
        <h1 className="código-xxxlarge">
          <b>Compound words</b>
        </h1>
        <Detail />
        <Code>{CODE}</Code>
      </div>
      <footer className="código-padding-64 código-white">
        <div className="código-bar">
          <button className="código-button código-left código-teal código-hover-teal" onClick={handleClick(ROUTES.problems.twoSum)}>
            {`< Previous`}
          </button>
          <button
            className="código-button código-right código-teal código-hover-teal"
            onClick={handleClick(ROUTES.problems.longestSubstringWithoutRepeatingCharacters)}
          >
            {`Next >`}
          </button>
        </div>
      </footer>
    </Wrapper>
  );
};

export default CompoundWords;
