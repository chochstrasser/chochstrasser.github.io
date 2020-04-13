import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Router from "./utils/Router";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  fab,
  faSlack,
  faGithub,
  faTwitter,
  faFacebookF
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
  faCogs
} from "@fortawesome/free-solid-svg-icons";
import "./App.css";
import Portfolio from "./portfolio";

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

const App = () => (
  <Router>
    <Switch>
      <Route path="/" component={Portfolio} />
      {/* <Route path="/auth" component={UnauthorizedLayout} /> */}
      {/* <AuthorizedRoute path="/projects" component={AuthorizedLayout} /> */}
      <Redirect to="/" />
    </Switch>
  </Router>
);

export default App;
