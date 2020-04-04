import React from "react";
import PortfolioWorkExperience from "./portfolioWorkExperience";
import PortfolioEducation from "./portfolioEducation";
import "./portfolio.css";

const PortfolioRightColumn = () => (
  <div className="código-col s12 m6 l8">
    <PortfolioWorkExperience />
    <PortfolioEducation />
  </div>
);

export default PortfolioRightColumn;
