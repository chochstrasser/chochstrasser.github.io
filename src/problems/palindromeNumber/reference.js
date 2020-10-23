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
          href="https://leetcode.com/problems/palindrome-number/"
        >
          LeetCode
        </ReferenceButton>
        <ReferenceButton
          className="código-button código-hover-teal código-teal"
          href="https://www.youtube.com/watch?v=ltKBtsrlaA0"
        >
          YouTube
        </ReferenceButton>
        <ReferenceButton
          className="código-button código-hover-teal código-teal"
          href="https://mathworld.wolfram.com/PalindromicNumber.html"
        >
          Math World
        </ReferenceButton>
      </div>
    </>
  );
};

export default Reference;
