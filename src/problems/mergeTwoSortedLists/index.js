import styled from "styled-components";
import { useHistory } from "react-router-dom";
import Code from "./code";
import Reference from "./reference";
import Detail from "./detail";
import ROUTES from "../../const/routes";

const Wrapper = styled.div`
  max-width: 1400px;
`;

const Flatten = ({ showModal }) => {
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
          <b>Merge two sorted lists</b>
        </h1>
        <Detail />
        <Reference />
        <Code />
      </div>
      <footer className="código-padding-64 código-white">
        <div className="código-bar">
          <button
            className="código-button código-left código-teal código-hover-teal"
            onClick={handleClick(ROUTES.problems["valid-parentheses"])}
          >
            ❮ Previous
          </button>
          <button
            className="código-button código-right código-teal código-hover-teal"
            onClick={handleClick(ROUTES.problems.flatten)}
          >
            Next ❯
          </button>
        </div>
      </footer>
    </Wrapper>
  );
};

export default Flatten;
