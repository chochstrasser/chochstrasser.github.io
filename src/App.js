import React from "react";
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
import Portfolio from "./portfolio";
// import ContextApi from "./contextApi";

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
      <Route exact path="/" component={Portfolio} />
      <Route path="/auth" component={() => <div>Auth file</div>} />
      {/* <Route path="/contextApi" component={ContextApi} /> */}
      {/* <AuthorizedRoute path="/projects" component={AuthorizedLayout} /> */}
      {/* <Route component={() => <div>404 File Not Found</div>} /> */}
    </Switch>
  </Router>
);

export default App;
