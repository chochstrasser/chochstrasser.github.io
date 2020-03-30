import React from "react";

const progressBar = {
  width: "100%",
  height: "24px"
};

const PortfolioLanguages = () => (
  <>
    <p class="w3-large w3-text-theme">
      <b>
        <i class="fa fa-globe fa-fw w3-margin-right w3-text-teal"></i>
        Languages
      </b>
    </p>
    <p>English</p>
    <div class="w3-light-grey w3-round-xlarge">
      <div class="w3-round-xlarge w3-teal" style={progressBar}></div>
    </div>
    <p>Portuguese</p>
    <div class="w3-light-grey w3-round-xlarge">
      <div class="w3-round-xlarge w3-teal" style={progressBar}></div>
    </div>
  </>
);

export default PortfolioLanguages;
