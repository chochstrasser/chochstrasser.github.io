import React, { useContext } from "react";
import { useHistory, useLocation } from "react-router-dom";
import ROUTES from "../const/routes";
import NavLink from "./nav-link";
import { FixedButton, FixedButtonBelow } from "./nav-style";
import { themeContext } from "../context/theme-context";

const Nav = ({ handleClick, elementId, setShowModal }) => {
  const { themeLight, onChangeTheme } = useContext(themeContext);
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
        className={`código-button código-round ${
          themeLight
            ? "código-teal código-hover-teal"
            : "código-light-grey código-hover-light-grey"
        }`}
      >
        ☰
      </FixedButton>
      <FixedButtonBelow
        className={`código-button código-round ${
          themeLight
            ? "código-teal código-hover-teal"
            : "código-light-grey código-hover-light-grey"
        }`}
        onClick={() => onChangeTheme(!themeLight)}
      >
        {`${themeLight ? "light" : "dark"}`}
      </FixedButtonBelow>
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
              onClick={handleNavItemClick(ROUTES.addTwoNumbers)}
              isActive={pathname === ROUTES.addTwoNumbers}
              text="Add two numbers"
            />
            <NavLink
              onClick={handleNavItemClick(
                ROUTES.longestSubstringWithoutRepeatingCharacters
              )}
              isActive={
                pathname === ROUTES.longestSubstringWithoutRepeatingCharacters
              }
              text="Longest substring without repeating characters"
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
