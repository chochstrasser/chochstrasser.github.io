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
              onClick={handleNavItemClick(ROUTES.problems.twoSum)}
              isActive={pathname === ROUTES.problems.twoSum}
              text="Two sum"
            />
            <NavLink
              onClick={handleNavItemClick(ROUTES.problems.addTwoNumbers)}
              isActive={pathname === ROUTES.problems.addTwoNumbers}
              text="Add two numbers"
            />
            <NavLink
              onClick={handleNavItemClick(
                ROUTES.problems.longestSubstringWithoutRepeatingCharacters
              )}
              isActive={
                pathname ===
                ROUTES.problems.longestSubstringWithoutRepeatingCharacters
              }
              text="Longest substring without repeating characters"
            />
            <NavLink
              onClick={handleNavItemClick(
                ROUTES.problems["median-of-two-sorted-arrays"]
              )}
              isActive={
                pathname === ROUTES.problems["median-of-two-sorted-arrays"]
              }
              text="Median of two sorted arrays"
            />
            <NavLink
              onClick={handleNavItemClick(ROUTES.problems.zigzag)}
              isActive={pathname === ROUTES.problems.zigzag}
              text="ZigZag conversion"
            />
            <NavLink
              onClick={handleNavItemClick(ROUTES.problems["reverse-integer"])}
              isActive={pathname === ROUTES.problems["reverse-integer"]}
              text="Reverse integer"
            />
            <NavLink
              onClick={handleNavItemClick(ROUTES.problems["palindrome-number"])}
              isActive={pathname === ROUTES.problems["palindrome-number"]}
              text="Palindrome number"
            />
            <NavLink
              onClick={handleNavItemClick(ROUTES.problems["roman-to-integer"])}
              isActive={pathname === ROUTES.problems["roman-to-integer"]}
              text="Roman to integer"
            />
            <NavLink
              onClick={handleNavItemClick(
                ROUTES.problems["longest-common-prefix"]
              )}
              isActive={pathname === ROUTES.problems["longest-common-prefix"]}
              text="Longest common prefix"
            />
            <NavLink
              onClick={handleNavItemClick(ROUTES.problems["valid-parentheses"])}
              isActive={pathname === ROUTES.problems["valid-parentheses"]}
              text="Valid parentheses"
            />
            <NavLink
              onClick={handleNavItemClick(
                ROUTES.problems["merge-two-sorted-lists"]
              )}
              isActive={pathname === ROUTES.problems["merge-two-sorted-lists"]}
              text="Merge two sorted lists"
            />
            <NavLink
              onClick={handleNavItemClick(ROUTES.problems.flatten)}
              isActive={pathname === ROUTES.problems.flatten}
              text="Flatten"
            />
            <NavLink
              onClick={handleNavItemClick(ROUTES.problems.floodFill)}
              isActive={pathname === ROUTES.problems.floodFill}
              text="Flood Fill"
            />
            <h4 className="código-center">Game</h4>
            <NavLink
              onClick={handleNavItemClick(ROUTES.games["tic-tac-toe"])}
              isActive={pathname === ROUTES.games["tic-tac-toe"]}
              text="Tic-Tac-Toe"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Nav;
