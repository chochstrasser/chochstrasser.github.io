import React from "react";
import PortfolioContact from "./portfolioContact";
import PortfolioLanguages from "./PortfolioLanguages";
import PortfolioSkills from "./portfolioSkills";
import PortfolioImage from "../images/portfolio.jpg";
import "./portfolio.css";

const fullWidth = {
  width: "100%",
};

const PortfolioLeftColumn = () => (
  <div className="código-col s12 m6 l4">
    <div className="código-white código-text-grey código-card-4">
      <div className="código-display-container">
        <img src={PortfolioImage} style={fullWidth} alt="Avatar" />
        <div className="código-container código-text-black full-width background-white-transparent">
          <h1>Chase Hochstrasser</h1>
        </div>
      </div>
      <div className="código-container código-margin-bottom">
        <PortfolioContact />
        <PortfolioSkills />
        <PortfolioLanguages />
        <br />
      </div>
    </div>
  </div>
);

export default PortfolioLeftColumn;
