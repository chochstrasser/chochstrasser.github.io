import React from "react";
import { useHistory, useLocation } from "react-router-dom";
import styled from "styled-components";
import { ROUTES } from "../const/routes";

const FixedButton = styled.button`
  position: fixed;
  top: 2rem;
  right: 2rem;
`;

const NavLink = ({ onClick, isActive, text }) => (
  <button
    className={`código-button código-block ${
      isActive
        ? "código-khaki código-hover-khaki"
        : "código-white código-hover-white"
    }`}
    onClick={onClick}
  >
    {text}
  </button>
);

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
            <NavLink
              onClick={handleNavItemClick(ROUTES.default)}
              isActive={pathname === ROUTES.default}
              text="Portfolio"
            />
            <h4 className="código-center">Data Structures</h4>
            <NavLink
              onClick={handleNavItemClick(ROUTES.linkedList)}
              isActive={pathname === ROUTES.linkedList}
              text="Linked list"
            />
            <NavLink
              onClick={handleNavItemClick(ROUTES.trie)}
              isActive={pathname === ROUTES.trie}
              text="Trie"
            />
            <h4 className="código-center">Problems</h4>
            <NavLink
              onClick={handleNavItemClick(ROUTES.twoSum)}
              isActive={pathname === ROUTES.twoSum}
              text="Two sum"
            />
            <NavLink
              onClick={handleNavItemClick(ROUTES.zigzag)}
              isActive={pathname === ROUTES.zigzag}
              text="ZigZag conversion"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Nav;
