import { useState, useContext } from 'react';
import './App.css';
import { themeContext } from './context/theme-context';
import { MODAL_ID } from './const/ids';
import Nav from './nav';
import { ContentWrapper } from './app-styles';
import PrimaryRoutes from './primary-routes';
import { BrowserRouter } from 'react-router-dom';

const App = () => {
  const { themeLight } = useContext(themeContext);
  const [showModal, setShowModal] = useState(false);

  const handleClick = (display: string) => () => {
    document.getElementById(MODAL_ID)!.style.display = display;
    setShowModal(display === 'block');
  };

  const props = { showModal };

  return (
    <ContentWrapper className={themeLight ? 'código-light-grey' : 'código-dark-grey'}>
      <BrowserRouter>
        <Nav handleClick={handleClick} elementId={MODAL_ID} showModal={showModal} setShowModal={setShowModal} />
        <PrimaryRoutes {...props} />
      </BrowserRouter>
    </ContentWrapper>
  );
};

export default App;
