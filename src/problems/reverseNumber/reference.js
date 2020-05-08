import React from "./node_modules/react";
import styled from "./node_modules/styled-components";

const ReferenceButton = styled.a`
  + a {
    margin-left: 0.5rem;
  }
`;

const Reference = () => {
  return (
    <>
      <h3>References</h3>
      <div className="código-section">
        <ReferenceButton
          className="código-button código-hover-teal código-teal"
          href="https://jamesonyu.wordpress.com/2015/05/01/flood-fill-algorithm-javascript/"
        >
          JAMESON YU
        </ReferenceButton>
        <ReferenceButton
          className="código-button código-hover-teal código-teal"
          href="https://en.wikipedia.org/wiki/Flood_fill"
        >
          Wikipedia
        </ReferenceButton>
      </div>
    </>
  );
};

export default Reference;
