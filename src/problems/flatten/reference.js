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
          href="https://www.jstips.co/en/javascript/flattening-multidimensional-arrays-in-javascript/"
        >
          JSTips
        </ReferenceButton>
        <ReferenceButton
          className="código-button código-hover-teal código-teal"
          href="https://www.w3resource.com/javascript-exercises/javascript-array-exercise-21.php"
        >
          W3 Resource
        </ReferenceButton>
      </div>
    </>
  );
};

export default Reference;
