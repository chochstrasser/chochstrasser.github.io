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
        <ReferenceButton
          className="código-button código-hover-teal código-teal"
          href="https://leetcode.com/problems/longest-substring-without-repeating-characters/"
        >
          LeetCode
        </ReferenceButton>
        <ReferenceButton className="código-button código-hover-teal código-teal" href="https://www.youtube.com/watch?v=4-LshVFzfLI">
          YouTube
        </ReferenceButton>
      </div>
    </>
  );
};

export default TwoSumRef;
