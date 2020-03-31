import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const PortfolioContact = () => (
  <>
    <p>
      <FontAwesomeIcon
        className="código-margin-right código-large código-text-teal"
        icon="briefcase"
      />
      {/* <i className="fa fa-briefcase fa-fw código-margin-right código-large código-text-teal"></i> */}
      Web Developer
    </p>
    <p>
      <i className="fa fa-home fa-fw código-margin-right código-large código-text-teal"></i>
      South Jordan, Utah
    </p>
    <p>
      <i className="fa fa-envelope fa-fw código-margin-right código-large código-text-teal"></i>
      <a href="mailto:chase.hochstrasser@gmail.com">
        chase.hochstrasser@gmail.com
      </a>
    </p>
    <p>
      <i className="fa fa-phone fa-fw código-margin-right código-large código-text-teal"></i>
      <a href="tel:+1-435-830-7987">(435)-830-7987</a>
    </p>
  </>
);

export default PortfolioContact;
