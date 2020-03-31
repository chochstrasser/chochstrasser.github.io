import React from "react";

const progressBar90 = {
  width: "90%"
};

const progressBar80 = {
  width: "80%"
};

const progressBar47 = {
  width: "47%"
};

const progressBar50 = {
  width: "50%"
};

const progressBar20 = {
  width: "20%"
};

const progressBar60 = {
  width: "60%"
};

const PortfolioSkills = () => (
  <>
    <p className="código-large">
      <b>
        <i className="fa fa-asterisk fa-fw código-margin-right código-text-teal"></i>
        Skills
      </b>
    </p>
    <p>React</p>
    <div className="código-light-grey código-round-xlarge código-small">
      <div
        className="código-container código-center código-round-xlarge código-teal"
        style={progressBar80}
      >
        90%
      </div>
    </div>
    <p>Javascript</p>
    <div className="código-light-grey código-round-xlarge código-small">
      <div
        className="código-container código-center código-round-xlarge código-teal"
        style={progressBar90}
      >
        <div className="código-center código-text-white">80%</div>
      </div>
    </div>
    <p>WordPress</p>
    <div className="código-light-grey código-round-xlarge código-small">
      <div
        className="código-container código-center código-round-xlarge código-teal"
        style={progressBar47}
      >
        47%
      </div>
    </div>
    <p>Algorithms</p>
    <div className="código-light-grey código-round-xlarge código-small">
      <div
        className="código-container código-center código-round-xlarge código-teal"
        style={progressBar50}
      >
        50%
      </div>
    </div>
    <p>Angular</p>
    <div className="código-light-grey código-round-xlarge código-small">
      <div
        className="código-container código-center código-round-xlarge código-teal"
        style={progressBar20}
      >
        20%
      </div>
    </div>
    <p>C#</p>
    <div className="código-light-grey código-round-xlarge código-small">
      <div
        className="código-container código-center código-round-xlarge código-teal"
        style={progressBar60}
      >
        60%
      </div>
    </div>
  </>
);

export default PortfolioSkills;
