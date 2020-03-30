import React from "react";
import PortfolioContact from "./portfolioContact";
import PortfolioLanguages from "./PortfolioLanguages";
import PortfolioSkills from "./portfolioSkills";

const fullWidth = {
  width: "100%"
};

const PortfolioLeftColumn = () => (
  <div className="w3-third">
    <div className="w3-white w3-text-grey w3-card-4">
      <div className="w3-display-container">
        <img src="/w3images/avatar_hat.jpg" style={fullWidth} alt="Avatar" />
        <div className="w3-display-bottomleft w3-container w3-text-black">
          <h2>Chase Hochstrasser</h2>
        </div>
      </div>
      <PortfolioContact />
      <PortfolioSkills />
      <PortfolioLanguages />
    </div>
  </div>
);

export default PortfolioLeftColumn;
