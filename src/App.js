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
import LinkedList from "./data-structures/linkedList";
import Trie from "./data-structures/trie";
import TwoSum from "./problems/twoSum";
import AddTwoNumbers from "./problems/addTwoNumbers";
import LongestSubStringWithoutRepeatingCharacters from "./problems/longestSubStringWithoutRepeatingCharacters";
import ZigZag from "./problems/zigZag";
import PalindromeNumber from "./problems/palindromeNumber";
import LongestCommonPrefix from "./problems/longestCommonPrefix";
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
          <Route path={ROUTES.twoSum} render={() => <TwoSum {...props} />} />
          <Route
            path={ROUTES.addTwoNumbers}
            render={() => <AddTwoNumbers {...props} />}
          />
          <Route
            path={ROUTES.longestSubstringWithoutRepeatingCharacters}
            render={() => (
              <LongestSubStringWithoutRepeatingCharacters {...props} />
            )}
          />
          <Route path={ROUTES.zigzag} render={() => <ZigZag {...props} />} />
          <Route
            path={ROUTES["palindrome-number"]}
            render={() => <PalindromeNumber {...props} />}
          />
          <Route
            path={ROUTES["longest-common-prefix"]}
            render={() => <LongestCommonPrefix {...props} />}
          />
          <Route
            path={ROUTES["tic-tac-toe"]}
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
