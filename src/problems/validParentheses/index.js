import { useHistory } from "react-router-dom";
import Code from "./code";
import Reference from "./reference";
import Detail from "./detail";
import ROUTES from "../../const/routes";
import { Wrapper } from "./validParentheses-styles";

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
          <b>Valid parentheses</b>
        </h1>
        <Detail />
        <Reference />
        <Code />
      </div>
      <footer className="código-padding-64 código-white">
        <div className="código-bar">
          <button
            className="código-button código-left código-teal código-hover-teal"
            onClick={handleClick(ROUTES.problems["longest-common-prefix"])}
          >
            ❮ Previous
          </button>
          <button
            className="código-button código-right código-teal código-hover-teal"
            onClick={handleClick(ROUTES.problems["merge-two-sorted-lists"])}
          >
            Next ❯
          </button>
        </div>
      </footer>
    </Wrapper>
  );
};

export default Flatten;
