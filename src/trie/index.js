import React from "react";
import styled from "styled-components";
import TrieCode from "./trieCode";
import TrieRef from "./trieRef";
import { useHistory } from "react-router-dom";
import TrieDetail from "./trieDetail";
import { ROUTES } from "../const/routes";

const Wrapper = styled.div`
  max-width: 1400px;
`;

const Trie = ({ showModal }) => {
  const history = useHistory();

  const handleClick = (path) => () => {
    history.push(path);
    window.scrollTo(0, 0);
  };

  if (showModal) {
    return null;
  }

  return (
    <Wrapper className="código-content código-white">
      <div className="código-container">
        <h1 className="código-xxxlarge">
          <b>Trie</b>
        </h1>
        <TrieDetail />
        <TrieRef />
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
            onClick={handleClick(ROUTES.linkedList)}
          >
            ❮ Previous
          </button>
          <button
            className="código-button código-right código-teal código-hover-teal"
            onClick={handleClick(ROUTES.default)}
          >
            Next ❯
          </button>
        </div>
      </footer>
    </Wrapper>
  );
};

export default Trie;
