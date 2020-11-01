import { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import { NavBlur, LineWrapper, Line, FlexNavBar, NavBodyContent, FixedButton, FixedButtonBelow } from './nav-style';
import { themeContext } from '../context/theme-context';
import NavLinks from './nav-links';
import LoginButton from '../components/login';
import LogoutButton from '../components/logout';

const Nav = ({ handleClick, elementId, showModal, setShowModal }) => {
  const { themeLight, onChangeTheme } = useContext(themeContext);
  const history = useHistory();
  const { user, isAuthenticated, isLoading } = useAuth0();

  const handleNavItemClick = (path) => () => {
    document.getElementById(elementId).style.display = 'none';
    history.push(path);
    setShowModal(false);
  };

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  console.log(user);

  return (
    <>
      <NavBlur className="código-top">
        <div className="código-bar código-black código-opacity-min">
          <FlexNavBar>
            <button onClick={handleClick(showModal ? 'none' : 'block')} className="código-bar-item código-button código-hover-black">
              <LineWrapper>
                <Line showModal={showModal} />
                <Line showModal={showModal} />
              </LineWrapper>
            </button>
            <div>CH</div>
            {isAuthenticated ? <LogoutButton /> : <LoginButton />}
          </FlexNavBar>
        </div>
      </NavBlur>
      {/* 
      <FixedButtonBelow
        className={`código-button código-round ${
          themeLight
            ? "código-teal código-hover-teal"
            : "código-light-grey código-hover-light-grey"
        }`}
        onClick={() => onChangeTheme(!themeLight)}
      >
        {`${themeLight ? "light" : "dark"}`}
      </FixedButtonBelow> */}
      <NavBodyContent id={elementId} className="código-modal">
        <NavLinks onClick={handleNavItemClick} />
      </NavBodyContent>
    </>
  );
};

export default Nav;
