import React from "react";
import styled from "styled-components";

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
          href="https://www.geeksforgeeks.org/longest-common-prefix-using-word-by-word-matching/"
        >
          Geeks for Geeks
        </ReferenceButton>
        <ReferenceButton
          className="código-button código-hover-teal código-teal"
          href="https://www.youtube.com/watch?v=gJOgI8TpSgc"
        >
          YouTube
        </ReferenceButton>
      </div>
    </>
  );
};

export default Reference;
