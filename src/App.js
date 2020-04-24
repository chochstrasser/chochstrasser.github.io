import React, { useState } from "react";
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

import { ROUTES } from "./const/routes";
import { MODAL_ID } from "./const/ids";

import Nav from "./nav";
import Portfolio from "./portfolio";
import ContextApi from "./contextApi";
import Trie from "./trie";
import LinkedList from "./linkedList";
import ZigZag from "./zigZag";

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
  const [showModal, setShowModal] = useState(false);

  const handleClick = (display) => () => {
    document.getElementById(MODAL_ID).style.display = display;
    setShowModal(display === "block");
  };

  const props = { showModal };

  return (
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
        <Route path={ROUTES.zigzag} render={() => <ZigZag {...props} />} />
        <Route path="/auth" component={() => <div>Auth file</div>} />
        <Route path="/contextApi" component={ContextApi} />
        {/* <AuthorizedRoute path="/projects" component={AuthorizedLayout} /> */}
        <Route component={() => <div>404 File Not Found</div>} />
      </Switch>
      <Nav
        handleClick={handleClick}
        elementId={MODAL_ID}
        setShowModal={setShowModal}
      />
    </Router>
  );
};

export default App;
