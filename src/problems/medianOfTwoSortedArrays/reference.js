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
        <ReferenceButton className="código-button código-hover-teal código-teal" href="https://www.youtube.com/watch?v=HGgdcKbC5ro">
          YouTube
        </ReferenceButton>
        <ReferenceButton
          className="código-button código-hover-teal código-teal"
          href="https://www.programcreek.com/2012/12/leetcode-median-of-two-sorted-arrays-java/"
        >
          Program creek
        </ReferenceButton>
      </div>
    </>
  );
};

export default Reference;
