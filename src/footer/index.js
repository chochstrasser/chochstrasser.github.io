import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./footer.css";

const Footer = () => (
  <footer
    role="contentinfo"
    className="código-container código-teal código-center código-margin-top"
  >
    <p>Find me on social media.</p>
    <a
      href="https://www.facebook.com/chase.hochstrasser"
      className="space-around"
      aria-label="facebook"
    >
      <FontAwesomeIcon
        className="código-hover-opacity"
        icon={["fab", "facebook-square"]}
      />
    </a>
    <a
      href="https://www.linkedin.com/in/chase-hochstrasser/"
      className="space-around"
      aria-label="linked in"
    >
      <FontAwesomeIcon
        className="código-hover-opacity"
        icon={["fab", "linkedin"]}
      />
    </a>
    <a
      href="https://github.com/chochstrasser"
      className="space-around"
      aria-label="github"
    >
      <FontAwesomeIcon
        className="código-hover-opacity"
        icon={["fab", "github"]}
      />
    </a>
    <a
      href="https://mentors.codingcoach.io/?name=Chase+Hochstrasser"
      className="space-around"
      aria-label="coding coach"
    >
      <FontAwesomeIcon className="código-hover-opacity" icon="globe-americas" />
    </a>
    <a
      href="https://coding-coach.slack.com/team/UM3PPF90D"
      className="space-around"
      aria-label="slack"
    >
      <FontAwesomeIcon
        className="código-hover-opacity"
        icon={["fab", "slack"]}
      />
    </a>
    <br />
    <br />
  </footer>
);

export default Footer;
