import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const progressBar95 = {
  width: "95%",
  height: "24px",
};

const progressBar3 = {
  width: "3%",
  height: "24px",
};

const progressBar30 = {
  width: "30%",
  height: "24px",
};

const PortfolioLanguages = () => (
  <>
    <p className="código-large código-text-theme">
      <b>
        <FontAwesomeIcon
          className="código-margin-right código-large código-text-teal"
          icon="globe-americas"
        />
        Languages
      </b>
    </p>
    <p>English</p>
    <div className="código-light-grey código-round-xlarge">
      <div
        className="código-round-xlarge código-teal"
        style={progressBar95}
      ></div>
    </div>
    <p>ASL</p>
    <div className="código-light-grey código-round-xlarge">
      <div
        className="código-round-xlarge código-teal"
        style={progressBar30}
      ></div>
    </div>
    <p>Portuguese</p>
    <div className="código-light-grey código-round-xlarge">
      <div
        className="código-round-xlarge código-teal"
        style={progressBar3}
      ></div>
    </div>
  </>
);

export default PortfolioLanguages;
