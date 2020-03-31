import React from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  fab,
  faTwitter,
  faFacebookF
} from "@fortawesome/free-brands-svg-icons";
import { faUser, faBriefcase } from "@fortawesome/free-solid-svg-icons";
import "./App.css";
import Portfolio from "./portfolio";

library.add(fab, faUser, faBriefcase, faTwitter, faFacebookF);

const App = () => (
  <>
    <Portfolio />
  </>
);

export default App;
