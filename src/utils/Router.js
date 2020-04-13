import React from "react";
import { HashRouter, Route, Redirect } from "react-router-dom";

// Normalize all paths to not have trailing slashes even if they
// matched <Route> with one:
const Router = ({ children }) => (
  <HashRouter>
    <Route
      render={({ location: { pathname, search, hash } }) =>
        pathname !== "/" && pathname.slice(-1) === "/" ? (
          <Redirect to={`${pathname.slice(0, -1)}${search}${hash}`} />
        ) : (
          children
        )
      }
    />
  </HashRouter>
);

export default Router;
