import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const progressBar90 = {
  width: '90%',
};

const progressBar80 = {
  width: '80%',
};

const progressBar27 = {
  width: '27%',
};

const progressBar30 = {
  width: '30%',
};

const progressBar20 = {
  width: '20%',
};

const PortfolioSkills = () => (
  <>
    <p className="código-large">
      <b>
        <FontAwesomeIcon className="código-margin-right código-large código-text-teal" icon="asterisk" />
        Skills
      </b>
    </p>
    <p>React</p>
    <div className="código-light-grey código-round-xlarge código-small">
      <div className="código-container código-center código-round-xlarge código-teal" style={progressBar90}>
        90%
      </div>
    </div>
    <p>Javascript</p>
    <div className="código-light-grey código-round-xlarge código-small">
      <div className="código-container código-center código-round-xlarge código-teal" style={progressBar80}>
        <div className="código-center código-text-white">80%</div>
      </div>
    </div>
    <p>Flutter</p>
    <div className="código-light-grey código-round-xlarge código-small">
      <div className="código-container código-center código-round-xlarge código-teal" style={progressBar30}>
        30%
      </div>
    </div>
    <p>Android</p>
    <div className="código-light-grey código-round-xlarge código-small">
      <div className="código-container código-center código-round-xlarge código-teal" style={progressBar27}>
        27%
      </div>
    </div>
    <p>Swift</p>
    <div className="código-light-grey código-round-xlarge código-small">
      <div className="código-container código-center código-round-xlarge código-teal" style={progressBar20}>
        20%
      </div>
    </div>
  </>
);

export default PortfolioSkills;
