import React from "react";
import styled from "styled-components";

const ReferenceButton = styled.a`
  + a {
    margin-left: 0.5rem;
  }
`;

const LinkedListRef = () => {
  return (
    <>
      <h3>References</h3>
      <div className="código-section">
        <ReferenceButton
          className="código-button código-hover-teal código-teal"
          href="https://en.wikipedia.org/wiki/Linked_list"
        >
          Wikipedia
        </ReferenceButton>
        <ReferenceButton
          className="código-button código-hover-teal código-teal"
          href="https://www.youtube.com/watch?v=njTh_OwMljA&list=PLLXdhg_r2hKA7DPDsunoDZ-Z769jWn4R8&index=1"
        >
          YouTube
        </ReferenceButton>
      </div>
    </>
  );
};

export default LinkedListRef;
