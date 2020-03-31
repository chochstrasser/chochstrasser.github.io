import React from "react";
import PortfolioLeftColumn from "./portfolioLeftColumn";
import Footer from "../footer";

const maxWidthContent = {
  maxWidth: "1400px"
};

const Portfolio = () => (
  <>
    <div className="código-content código-margin-top" style={maxWidthContent}>
      <div className="código-row-padding">
        <PortfolioLeftColumn />
      </div>
    </div>
    <Footer />
  </>
);

export default Portfolio;
