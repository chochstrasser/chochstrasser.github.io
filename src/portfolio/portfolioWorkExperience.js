import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const PortfolioWorkExperience = () => {
  return (
    <div class="código-container código-card código-white código-margin-bottom">
      <h2 class="código-text-grey código-padding-16">
        <FontAwesomeIcon
          className="código-margin-right código-xxlarge código-text-teal"
          icon="suitcase"
        />
        Work Experience
      </h2>
      <div class="código-container">
        <h5 class="código-opacity">
          <b>Front End Developer / SoFi</b>
        </h5>
        <h6 class="código-text-teal">
          <FontAwesomeIcon
            className="código-margin-right código-text-teal"
            icon="calendar-alt"
          />
          Apr 2019 -{" "}
          <span class="código-tag código-teal código-round">Current</span>
        </h6>
        <p>
          Lorem ipsum dolor sit amet. Praesentium magnam consectetur vel in
          deserunt aspernatur est reprehenderit sunt hic. Nulla tempora soluta
          ea et odio, unde doloremque repellendus iure, iste.
        </p>
        <hr />
      </div>
      <div class="código-container">
        <h5 class="código-opacity">
          <b>Software Engineer / SkyWest</b>
        </h5>
        <h6 class="código-text-teal">
          <FontAwesomeIcon
            className="código-margin-right código-text-teal"
            icon="calendar-alt"
          />
          Apr 2016 - Mar 2019
        </h6>
        <p>
          Consectetur adipisicing elit. Praesentium magnam consectetur vel in
          deserunt aspernatur est reprehenderit sunt hic. Nulla tempora soluta
          ea et odio, unde doloremque repellendus iure, iste.
        </p>
        <hr />
      </div>
      <div class="código-container">
        <h5 class="código-opacity">
          <b>Web Developer / dōTERRA</b>
        </h5>
        <h6 class="código-text-teal">
          <FontAwesomeIcon
            className="código-margin-right código-text-teal"
            icon="calendar-alt"
          />
          Jan 2014 - Apr 2016
        </h6>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. </p>
        <br />
      </div>
      <div class="código-container">
        <h5 class="código-opacity">
          <b>Student Software Engineer / Rocky Mountain Power</b>
        </h5>
        <h6 class="código-text-teal">
          <FontAwesomeIcon
            className="código-margin-right código-text-teal"
            icon="calendar-alt"
          />
          May 2009 - Jan 2014
        </h6>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. </p>
        <br />
      </div>
    </div>
  );
};

export default PortfolioWorkExperience;
