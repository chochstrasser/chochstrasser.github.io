import styled from "styled-components";

const ReferenceButton = styled.a`
  + a {
    margin-left: 0.5rem;
  }
`;

const TwoSumRef = () => {
  return (
    <>
      <h3>References</h3>
      <div className="código-section">
        <ReferenceButton
          className="código-button código-hover-teal código-teal"
          href="https://leetcode.com/problems/two-sum/"
        >
          LeetCode
        </ReferenceButton>
        <ReferenceButton
          className="código-button código-hover-teal código-teal"
          href="https://www.youtube.com/watch?v=Aql6zHkONek"
        >
          YouTube
        </ReferenceButton>
      </div>
    </>
  );
};

export default TwoSumRef;
