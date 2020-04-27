import React from "react";
import styled from "styled-components";
import TwoSumCode from "./twoSumCode";
import TwoSumRef from "./twoSumRef";
import { useHistory } from "react-router-dom";
import TwoSumDetail from "./twoSumDetail";
import { ROUTES } from "../const/routes";

const Wrapper = styled.div`
  max-width: 1400px;
`;

const TwoSum = ({ showModal }) => {
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
          <b>Two sum</b>
        </h1>
        <TwoSumDetail />
        <TwoSumRef />
        <TwoSumCode />
      </div>
      <footer className="código-padding-64 código-white">
        <div className="código-bar">
          <button
            className="código-button código-left código-teal código-hover-teal"
            onClick={handleClick(ROUTES.default)}
          >
            ❮ Previous
          </button>
          <button
            className="código-button código-right código-teal código-hover-teal"
            onClick={handleClick(ROUTES.zigzag)}
          >
            Next ❯
          </button>
        </div>
      </footer>
    </Wrapper>
  );
};

export default TwoSum;
