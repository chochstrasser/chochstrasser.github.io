import styled from "styled-components";

const ReferenceButton = styled.a`
  + a {
    margin-left: 0.5rem;
  }
`;

const TrieRef = () => {
  return (
    <>
      <h3>References</h3>
      <div className="código-section">
        <ReferenceButton
          className="código-button código-hover-teal código-teal"
          href="https://en.wikipedia.org/wiki/Trie"
        >
          Wikipedia
        </ReferenceButton>
        <ReferenceButton
          className="código-button código-hover-teal código-teal"
          href="https://www.youtube.com/watch?v=zIjfhVPRZCg&list=PLLXdhg_r2hKA7DPDsunoDZ-Z769jWn4R8&index=7&t=0s"
        >
          YouTube
        </ReferenceButton>
      </div>
    </>
  );
};

export default TrieRef;
