import React, { useState, useContext } from "react";
import { Switch, Route } from "react-router-dom";
import Router from "./utils/Router";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  fab,
  faSlack,
  faGithub,
  faTwitter,
  faFacebookF,
} from "@fortawesome/free-brands-svg-icons";
import {
  faUser,
  faBriefcase,
  faHome,
  faEnvelope,
  faPhone,
  faAsterisk,
  faGlobeAmericas,
  faSuitcase,
  faCalendarAlt,
  faCertificate,
  faCogs,
} from "@fortawesome/free-solid-svg-icons";
import "./App.css";
import { themeContext } from "./context/theme-context";
import ROUTES from "./const/routes";
import { MODAL_ID } from "./const/ids";

import Nav from "./nav";
import FourZeroFour from "./404.js";
import Portfolio from "./portfolio";

// Data Structures
import LinkedList from "./data-structures/linkedList";
import Trie from "./data-structures/trie";

// Problems
import TwoSum from "./problems/twoSum";
import AddTwoNumbers from "./problems/addTwoNumbers";
import LongestSubStringWithoutRepeatingCharacters from "./problems/longestSubStringWithoutRepeatingCharacters";
import MedianOfTwoSortedArrays from "./problems/medianOfTwoSortedArrays";
import ZigZag from "./problems/zigZag";
import ReverseInteger from "./problems/reverseNumber";
import PalindromeNumber from "./problems/palindromeNumber";
import RomanToInteger from "./problems/romanToInteger";
import LongestCommonPrefix from "./problems/longestCommonPrefix";
import ValidParentheses from "./problems/validParentheses";
import MergeTwoSortedLists from "./problems/mergeTwoSortedLists";
import Flatten from "./problems/flatten";
import FloodFill from "./problems/floodFill";

// Games
import TicTacToe from "./games/tic-tac-toe";

library.add(
  fab,
  faUser,
  faBriefcase,
  faHome,
  faEnvelope,
  faPhone,
  faAsterisk,
  faGlobeAmericas,
  faSuitcase,
  faCalendarAlt,
  faCertificate,
  faCogs,
  faSlack,
  faGithub,
  faTwitter,
  faFacebookF
);

const App = () => {
  const { themeLight } = useContext(themeContext);
  const [showModal, setShowModal] = useState(false);

  const handleClick = (display) => () => {
    document.getElementById(MODAL_ID).style.display = display;
    setShowModal(display === "block");
  };

  const props = { showModal };

  return (
    <div className={themeLight ? "código-light-grey" : "código-dark-grey"}>
      <Router>
        <Switch>
          <Route
            exact
            path={ROUTES.default}
            render={() => <Portfolio {...props} />}
          />
          <Route
            path={ROUTES.linkedList}
            render={() => <LinkedList {...props} />}
          />
          <Route path={ROUTES.trie} render={() => <Trie {...props} />} />
          <Route
            path={ROUTES.problems.twoSum}
            render={() => <TwoSum {...props} />}
          />
          <Route
            path={ROUTES.problems.addTwoNumbers}
            render={() => <AddTwoNumbers {...props} />}
          />
          <Route
            path={ROUTES.problems.longestSubstringWithoutRepeatingCharacters}
            render={() => (
              <LongestSubStringWithoutRepeatingCharacters {...props} />
            )}
          />
          <Route
            path={ROUTES.problems["median-of-two-sorted-arrays"]}
            render={() => <MedianOfTwoSortedArrays {...props} />}
          />
          <Route
            path={ROUTES.problems.zigzag}
            render={() => <ZigZag {...props} />}
          />
          <Route
            path={ROUTES.problems["reverse-integer"]}
            render={() => <ReverseInteger {...props} />}
          />
          <Route
            path={ROUTES.problems["palindrome-number"]}
            render={() => <PalindromeNumber {...props} />}
          />
          <Route
            path={ROUTES.problems["roman-to-integer"]}
            render={() => <RomanToInteger {...props} />}
          />
          <Route
            path={ROUTES.problems["longest-common-prefix"]}
            render={() => <LongestCommonPrefix {...props} />}
          />
          <Route
            path={ROUTES.problems["valid-parentheses"]}
            render={() => <ValidParentheses {...props} />}
          />
          <Route
            path={ROUTES.problems["merge-two-sorted-lists"]}
            render={() => <MergeTwoSortedLists {...props} />}
          />
          <Route
            path={ROUTES.problems.flatten}
            render={() => <Flatten {...props} />}
          />
          <Route
            path={ROUTES.problems.floodFill}
            render={() => <FloodFill {...props} />}
          />
          <Route
            path={ROUTES.games["tic-tac-toe"]}
            render={() => <TicTacToe {...props} />}
          />
          <Route component={FourZeroFour} />
        </Switch>
        <Nav
          handleClick={handleClick}
          elementId={MODAL_ID}
          setShowModal={setShowModal}
        />
      </Router>
    </div>
  );
};

export default App;
