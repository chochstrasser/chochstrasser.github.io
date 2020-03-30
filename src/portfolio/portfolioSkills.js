import React from "react";

const progressBar90 = {
  width: "90%"
};

const progressBar80 = {
  width: "80%"
};

const progressBar75 = {
  width: "75%"
};

const progressBar50 = {
  width: "50%"
};

const PortfolioSkills = () => (
  <>
    <p class="w3-large">
      <b>
        <i class="fa fa-asterisk fa-fw w3-margin-right w3-text-teal"></i>
        Skills
      </b>
    </p>
    <p>React</p>
    <div class="w3-light-grey w3-round-xlarge w3-small">
      <div
        class="w3-container w3-center w3-round-xlarge w3-teal"
        style={progressBar90}
      >
        90%
      </div>
    </div>
    <p>Javascript</p>
    <div class="w3-light-grey w3-round-xlarge w3-small">
      <div
        class="w3-container w3-center w3-round-xlarge w3-teal"
        style={progressBar80}
      >
        <div class="w3-center w3-text-white">80%</div>
      </div>
    </div>
    <p>WordPress</p>
    <div class="w3-light-grey w3-round-xlarge w3-small">
      <div
        class="w3-container w3-center w3-round-xlarge w3-teal"
        style={progressBar75}
      >
        75%
      </div>
    </div>
    <p>Algorithms</p>
    <div class="w3-light-grey w3-round-xlarge w3-small">
      <div
        class="w3-container w3-center w3-round-xlarge w3-teal"
        style={progressBar50}
      >
        50%
      </div>
    </div>
  </>
);

export default PortfolioSkills;
