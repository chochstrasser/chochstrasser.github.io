import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import Code from './code';
import Reference from './reference';
import Detail from './detail';
import ROUTES from '../../const/routes';

const Wrapper = styled.div`
  max-width: 1400px;
`;

const FloodFill = ({ showModal }) => {
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
          <b>FloodFill</b>
        </h1>
        <Detail />
        <Reference />
        <Code />
      </div>
      <footer className="código-padding-64 código-white">
        <div className="código-bar">
          <button className="código-button código-left código-teal código-hover-teal" onClick={handleClick(ROUTES.problems.flatten)}>
            ❮ Previous
          </button>
          <button className="código-button código-right código-teal código-hover-teal" onClick={handleClick(ROUTES.default)}>
            Next ❯
          </button>
        </div>
      </footer>
    </Wrapper>
  );
};

export default FloodFill;
