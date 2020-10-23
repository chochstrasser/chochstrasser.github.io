import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const PortfolioCertifications = () => {
  return (
    <div className="código-container código-card código-white">
      <h2 className="código-text-grey código-padding-16">
        <FontAwesomeIcon className="código-margin-right código-xxlarge código-text-teal" icon="cogs" />
        Licenses &amp; Certifications
      </h2>
      <div className="código-container">
        <h5 className="código-opacity">
          <b>Certified ScrumMaster (CSM)</b>
        </h5>
        <h6 className="código-text-teal">
          <FontAwesomeIcon className="código-margin-right código-text-teal" icon="calendar-alt" />
          Oct 2019 - Dec 2021
        </h6>
        <p>
          Scrum Alliance
          <br />
          Credential ID 1129934
          <br />
          <a href="http://bcert.me/szgfbcpjw">See credential</a>
        </p>
        <br />
      </div>
    </div>
  );
};

export default PortfolioCertifications;
