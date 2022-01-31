import styled from 'styled-components';

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
          href="https://javascript.plainenglish.io/javascript-algorithms-number-of-islands-leetcode-6eff200bdf1"
        >
          MEDIUM
        </ReferenceButton>
      </div>
    </>
  );
};

export default Reference;
