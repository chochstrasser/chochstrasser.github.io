import React from "react";
import { useHistory, useLocation } from "react-router-dom";
import styled from "styled-components";
import { ROUTES } from "../const/routes";

const FixedButton = styled.button`
  position: fixed;
  top: 2rem;
  right: 2rem;
`;

const Nav = ({ handleClick, elementId, setShowModal }) => {
  const history = useHistory();
  const location = useLocation();
  const { pathname } = location;

  const handleNavItemClick = (path) => () => {
    document.getElementById(elementId).style.display = "none";
    history.push(path);
    setShowModal(false);
  };

  return (
    <>
      <FixedButton
        onClick={handleClick("block")}
        className="código-button código-round código-teal código-hover-teal"
      >
        ☰
      </FixedButton>
      <div
        id={elementId}
        className="código-modal código-margin-none código-padding-none"
      >
        <div className="código-animate-right código-card-4 código-white">
          <header className="código-container código-teal">
            <span
              onClick={handleClick("none")}
              className="código-button código-hover-teal código-display-top-right código-xlarge"
            >
              &times;
            </span>
            <h3>Where do you want to go?</h3>
          </header>
          <div>
            <button
              className={`código-button código-block ${
                pathname === ROUTES.default
                  ? "código-khaki código-hover-khaki"
                  : "código-white código-hover-white"
              }`}
              onClick={handleNavItemClick(ROUTES.default)}
            >
              Portfolio
            </button>
            <h4 className="código-center">Data Structures</h4>
            <button
              className={`código-button código-block ${
                pathname === ROUTES.linkedList
                  ? "código-khaki código-hover-khaki"
                  : "código-white código-hover-white"
              }`}
              onClick={handleNavItemClick(ROUTES.linkedList)}
            >
              Linked List
            </button>
            <button
              className={`código-button código-block ${
                pathname === ROUTES.trie
                  ? "código-khaki código-hover-khaki"
                  : "código-white código-hover-white"
              }`}
              onClick={handleNavItemClick(ROUTES.trie)}
            >
              Trie
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Nav;
