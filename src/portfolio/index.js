import PortfolioLeftColumn from "./portfolioLeftColumn";
import PortfolioRightColumn from "./portfolioRightColumn";
import Footer from "../footer";

const maxWidthContent = {
  maxWidth: "1400px",
};

const Portfolio = ({ showModal }) => {
  if (showModal) {
    return null;
  }

  return (
    <>
      <div role="main" className="código-content" style={maxWidthContent}>
        <div className="código-row-padding">
          <PortfolioLeftColumn />
          <PortfolioRightColumn />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Portfolio;
