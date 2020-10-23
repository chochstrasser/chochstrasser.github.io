import styled from 'styled-components';
import Code from './code';
import Reference from './reference';
import { useHistory } from 'react-router-dom';
import Detail from './detail';
import ROUTES from '../../const/routes';

const Wrapper = styled.div`
  max-width: 1400px;
`;

const PalindromeNumber = ({ showModal }) => {
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
          <b>Palindrome number</b>
        </h1>
        <Detail />
        <Reference />
        <Code />
      </div>
      <footer className="código-padding-64 código-white">
        <div className="código-bar">
          <button className="código-button código-left código-teal código-hover-teal" onClick={handleClick(ROUTES.problems.zigzag)}>
            ❮ Previous
          </button>
          <button
            className="código-button código-right código-teal código-hover-teal"
            onClick={handleClick(ROUTES.problems['longest-common-prefix'])}
          >
            Next ❯
          </button>
        </div>
      </footer>
    </Wrapper>
  );
};

export default PalindromeNumber;
