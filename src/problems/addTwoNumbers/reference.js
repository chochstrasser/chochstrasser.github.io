import styled from 'styled-components';

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
        <ReferenceButton className="código-button código-hover-teal código-teal" href="https://leetcode.com/problems/add-two-numbers/">
          LeetCode
        </ReferenceButton>
        <ReferenceButton className="código-button código-hover-teal código-teal" href="https://www.youtube.com/watch?v=aM4Iv7eEr2o">
          YouTube
        </ReferenceButton>
      </div>
    </>
  );
};

export default TwoSumRef;
