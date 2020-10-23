import styled from "styled-components";
import ZigZagCode from "./zigZagCode";
import ZigZagRef from "./zigZagRef";
import { useHistory } from "react-router-dom";
import ZigZagDetail from "./zigZagDetail";
import ROUTES from "../../const/routes";

const Wrapper = styled.div`
  max-width: 1400px;
`;

const ZigZag = ({ showModal }) => {
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
          <b>ZigZag conversion</b>
        </h1>
        <ZigZagDetail />
        <ZigZagRef />
        <ZigZagCode />
      </div>
      <footer className="código-padding-64 código-white">
        <div className="código-bar">
          <button
            className="código-button código-left código-teal código-hover-teal"
            onClick={handleClick(
              ROUTES.problems["median-of-two-sorted-arrays"]
            )}
          >
            ❮ Previous
          </button>
          <button
            className="código-button código-right código-teal código-hover-teal"
            onClick={handleClick(ROUTES.problems["reverse-integer"])}
          >
            Next ❯
          </button>
        </div>
      </footer>
    </Wrapper>
  );
};

export default ZigZag;
