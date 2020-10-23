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
        <ReferenceButton className="código-button código-hover-teal código-teal" href="https://www.youtube.com/watch?v=j3VMLDg7Tp4">
          YouTube
        </ReferenceButton>
        <ReferenceButton
          className="código-button código-hover-teal código-teal"
          href="https://www.geeksforgeeks.org/write-a-program-to-reverse-digits-of-a-number/"
        >
          Geeks for geeks
        </ReferenceButton>
      </div>
    </>
  );
};

export default Reference;
