import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import Detail from './detail';
import ROUTES from '../../const/routes';
import Code from '../../components/code';

const CODE = `function reverseString1(str) {
  return str.split("").reverse().join("");
}

function reverseString2(str) {
  let ary = str.split("");
  let temp = "";
  let len = ary.length;
  let middle = Math.floor(len / 2);

  for (let index = 0; index < middle; index++) {
    temp = ary[index];
    ary[index] = ary[len - 1 - index];
    ary[len - 1 - index] = temp;
  }
  return ary.join("");
}

function reverseString3(str) {
  let newStr = "";
  for (let index = str.length - 1; index >= 0; index--) {
    newStr += str[index];
  }
  return newStr;
}

function reverseString4(str) {
  return str === "" ? "" : reverseString4(str.slice(1)) + str.charAt(0);
}`;

const Wrapper = styled.div`
  max-width: 1400px;
`;

const CompoundWords = ({ showModal }) => {
  const navigate = useNavigate();

  const handleClick = (path) => () => {
    navigate(path);
    window.scrollTo(0, 0);
  };

  if (showModal) {
    return null;
  }

  return (
    <Wrapper className="código-content código-white">
      <div className="código-container">
        <h1 className="código-xxxlarge">
          <b>Reverse string</b>
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
