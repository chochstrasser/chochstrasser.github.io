import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const PortfolioContact = () => (
  <>
    <p>
      <FontAwesomeIcon
        className="código-margin-right código-large código-text-teal"
        icon="briefcase"
      />
      Web Developer
    </p>
    <p>
      <FontAwesomeIcon
        className="código-margin-right código-large código-text-teal"
        icon="home"
      />
      South Jordan, Utah
    </p>
    <p>
      <FontAwesomeIcon
        className="código-margin-right código-large código-text-teal"
        icon="envelope"
      />
      <a href="mailto:chase.hochstrasser@gmail.com">
        chase.hochstrasser@gmail.com
      </a>
    </p>
    <p>
      <FontAwesomeIcon
        className="código-margin-right código-large código-text-teal"
        icon="phone"
      />
      <a href="tel:+1-435-830-7987">(435)-830-7987</a>
    </p>
    <hr />
  </>
);

export default PortfolioContact;
