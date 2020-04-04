import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const PortfolioEducation = () => {
  return (
    <div class="código-container código-card código-white">
      <h2 class="código-text-grey código-padding-16">
        <FontAwesomeIcon
          className="código-margin-right código-xxlarge código-text-teal"
          icon="certificate"
        />
        Education
      </h2>
      <div class="código-container">
        <h5 class="código-opacity">
          <b>University of Utah</b>
        </h5>
        <p>Bachelor Degree / Computer Engineering</p>
        <hr />
      </div>
      <div class="código-container">
        <h5 class="código-opacity">
          <b>Snow College</b>
        </h5>
        <p>General Education</p>
        <br />
      </div>
    </div>
  );
};

export default PortfolioEducation;
