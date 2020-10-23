import styled from 'styled-components';
import LinkedListCode from './linkedListCode';
import LinkedListRef from './linkedListRef';
import { useHistory } from 'react-router-dom';
import LinkedListDetail from './linkedListDetail';
import ROUTES from '../../const/routes';

const Wrapper = styled.div`
  max-width: 1400px;
`;

const LinkedList = ({ showModal }) => {
  const history = useHistory();

  const handleClick = (path) => () => {
    history.push(path);
    window.scrollTo(0, 0);
  };

  if (showModal) {
    return null;
  }

  return (
    <Wrapper className="código-content código-white">
      <div className="código-container">
        <h1 className="código-xxxlarge">
          <b>Linked list</b>
        </h1>
        <LinkedListDetail />
        <LinkedListRef />
        <h3>Operations</h3>
        <p>What can a linked list do?</p>
        <ol>
          <li>insert</li>
          <li>removeFirst</li>
          <li>search</li>
          <li>display</li>
          <li>removeAt</li>
        </ol>
        <h3>Types</h3>
        <p>There are many linked list types. here are a few?</p>
        <ol>
          <li>singly</li>
          <li>doubly</li>
          <li>circular</li>
        </ol>
        <LinkedListCode />
      </div>
      <footer className="código-padding-64 código-white">
        <div className="código-bar">
          <button className="código-button código-left código-teal código-hover-teal" onClick={handleClick(ROUTES.default)}>
            ❮ Previous
          </button>
          <button className="código-button código-right código-teal código-hover-teal" onClick={handleClick(ROUTES.trie)}>
            Next ❯
          </button>
        </div>
      </footer>
    </Wrapper>
  );
};

export default LinkedList;
