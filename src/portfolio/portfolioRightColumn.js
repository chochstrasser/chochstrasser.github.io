import React from "react";
import PortfolioWorkExperience from "./portfolioWorkExperience";
import PortfolioEducation from "./portfolioEducation";
import PortfolioCertifications from "./portfolioCertifications";
import "./portfolio.css";

const PortfolioRightColumn = () => (
  <div className="código-col s12 m6 l8">
    <PortfolioWorkExperience />
    <PortfolioEducation />
    <PortfolioCertifications />
  </div>
);

export default PortfolioRightColumn;
