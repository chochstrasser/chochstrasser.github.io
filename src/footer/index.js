import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./footer.css";

const Footer = () => (
  <footer className="código-container código-teal código-center código-margin-top">
    <p>Find me on social media.</p>
    <FontAwesomeIcon
      className="código-hover-opacity space-around"
      icon={["fab", "facebook-square"]}
    />
    <FontAwesomeIcon
      className="código-hover-opacity space-around"
      icon={["fab", "linkedin"]}
    />
    <br />
    <br />
  </footer>
);

export default Footer;
