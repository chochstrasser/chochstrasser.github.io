import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const PortfolioEducation = () => {
  return (
    <div className="código-container código-card código-white código-margin-bottom">
      <h2 className="código-text-grey código-padding-16">
        <FontAwesomeIcon className="código-margin-right código-xxlarge código-text-teal" icon="certificate" />
        Education
      </h2>
      <div className="código-container">
        <h5 className="código-opacity">
          <b>University of Utah</b>
        </h5>
        <p>Bachelor's Degree, Computer Engineering</p>
        <hr />
      </div>
      <div className="código-container">
        <h5 className="código-opacity">
          <b>Salt Lake Community College</b>
        </h5>
        <p>General Education</p>
        <hr />
      </div>
      <div className="código-container">
        <h5 className="código-opacity">
          <b>Snow College</b>
        </h5>
        <p>Associate of Science, General Education</p>
        <br />
      </div>
    </div>
  );
};

export default PortfolioEducation;
