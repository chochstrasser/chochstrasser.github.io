import React from "react";
import styled from "styled-components";

const ReferenceButton = styled.a`
  + a {
    margin-left: 0.5rem;
  }
`;

const ZigZagRef = () => {
  return (
    <>
      <h3>References</h3>
      <div className="código-section">
        <ReferenceButton
          className="código-button código-hover-teal código-teal"
          href="https://leetcode.com/problems/zigzag-conversion/"
        >
          LeetCode
        </ReferenceButton>
        <ReferenceButton
          className="código-button código-hover-teal código-teal"
          href="https://www.youtube.com/watch?v=8zXTAn7i5rU"
        >
          YouTube
        </ReferenceButton>
      </div>
    </>
  );
};

export default ZigZagRef;
