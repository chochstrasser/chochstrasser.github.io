import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const PortfolioWorkExperience = () => {
  return (
    <div className="código-container código-card código-white código-margin-bottom">
      <h2 className="código-text-grey código-padding-16">
        <FontAwesomeIcon className="código-margin-right código-xxlarge código-text-teal" icon="suitcase" />
        Work Experience
      </h2>
      <div className="código-container">
        <h5 className="código-opacity">
          <b>Senior Engineer, Front End / SoFi</b>
        </h5>
        <h6 className="código-text-teal">
          <FontAwesomeIcon className="código-margin-right código-text-teal" icon="calendar-alt" />
          Sep 2020 - <span className="código-tag código-teal código-round">Current</span>
        </h6>
        <hr />
      </div>
      <div className="código-container">
        <h5 className="código-opacity">
          <b>Engineer, Front End / SoFi</b>
        </h5>
        <h6 className="código-text-teal">
          <FontAwesomeIcon className="código-margin-right código-text-teal" icon="calendar-alt" />
          Apr 2019 - <span className="código-tag código-teal código-round">Current</span>
        </h6>
        <hr />
      </div>
      <div className="código-container">
        <h5 className="código-opacity">
          <b>Engineer, Software / SkyWest</b>
        </h5>
        <h6 className="código-text-teal">
          <FontAwesomeIcon className="código-margin-right código-text-teal" icon="calendar-alt" />
          Apr 2016 - Mar 2019
        </h6>
        <hr />
      </div>
      <div className="código-container">
        <h5 className="código-opacity">
          <b>Developer, Web / dōTERRA</b>
        </h5>
        <h6 className="código-text-teal">
          <FontAwesomeIcon className="código-margin-right código-text-teal" icon="calendar-alt" />
          Jan 2014 - Apr 2016
        </h6>
        <br />
      </div>
      <div className="código-container">
        <h5 className="código-opacity">
          <b>Engineer, Student Software / Rocky Mountain Power</b>
        </h5>
        <h6 className="código-text-teal">
          <FontAwesomeIcon className="código-margin-right código-text-teal" icon="calendar-alt" />
          May 2009 - Jan 2014
        </h6>
        <br />
      </div>
    </div>
  );
};

export default PortfolioWorkExperience;
