import React from "react";
import styled from "styled-components";
import TrieCode from "./trieCode";
import TrieReferences from "./trieReferences";
import { useHistory } from "react-router-dom";
import TrieDetail from "./trieDetail";

const Wrapper = styled.div`
  max-width: 1400px;
`;

const Trie = () => {
  const history = useHistory();

  const handleClick = () => {
    history.push("/");
  };

  return (
    <Wrapper className="código-content código-white">
      <div className="código-container">
        <h1 className="código-xxxlarge">
          <b>Trie</b>
        </h1>
        <TrieDetail />
        <TrieReferences />
        <h3>Operations</h3>
        <p>What can a trie do? Three simple operations are as follows:</p>
        <ol>
          <li>add</li>
          <li>remove</li>
          <li>search</li>
        </ol>
        <TrieCode />
      </div>
      <footer className="código-padding-64 código-white">
        <div className="código-bar">
          <button
            className="código-button código-left código-teal código-hover-teal"
            onClick={handleClick}
          >
            ❮ Previous
          </button>
          <button
            className="código-button código-right código-teal código-hover-teal"
            onClick={handleClick}
          >
            Next ❯
          </button>
        </div>
      </footer>
    </Wrapper>
  );
};

export default Trie;
