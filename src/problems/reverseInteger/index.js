import { useNavigate } from 'react-router-dom';
import Code from './code';
import Reference from './reference';
import Detail from './detail';
import ROUTES from '../../const/routes';
import FlowChart from '../../images/flowchart-to-find-reverse-of-a-number.jpg';
import { Wrapper, Image } from './reverseInteger-styles';

const Flatten = ({ showModal }) => {
  const navigate = useNavigate();

  const handleClick = (path) => () => {
    navigate(path);
    window.scrollTo(0, 0);
  };

  if (showModal) {
    return null;
  }

  return (
    <Wrapper className="código-content código-white">
      <div className="código-container">
        <h1 className="código-xxxlarge">
          <b>Reverse integer</b>
        </h1>
        <Detail />
        <Image src={FlowChart} alt="flow chart to find reverse of a number" />
        <Reference />
        <Code />
      </div>
      <footer className="código-padding-64 código-white">
        <div className="código-bar">
          <button className="código-button código-left código-teal código-hover-teal" onClick={handleClick(ROUTES.problems.zigzag)}>
            ❮ Previous
          </button>
          <button
            className="código-button código-right código-teal código-hover-teal"
            onClick={handleClick(ROUTES.problems['palindrome-number'])}
          >
            Next ❯
          </button>
        </div>
      </footer>
    </Wrapper>
  );
};

export default Flatten;
