import { useNavigate } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import { NavBlur, LineWrapper, Line, FlexNavBar, NavBodyContent } from './nav-style';
import NavLinks from './nav-links';
import LoginButton from '../components/login';
import LogoutButton from '../components/logout';
import styled from 'styled-components';

const Flex = styled.div`
  display: flex;
  flex: 1;
`;

const Nav = ({ handleClick, elementId, showModal, setShowModal }) => {
  const navigate = useNavigate();
  const { isAuthenticated, isLoading } = useAuth0();

  const handleNavItemClick = (path) => () => {
    document.getElementById(elementId).style.display = 'none';
    navigate(path);
    setShowModal(false);
  };

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  return (
    <>
      <NavBlur className="código-top">
        <div className="código-bar código-black código-opacity-min">
          <FlexNavBar>
            <Flex>
              <button onClick={handleClick(showModal ? 'none' : 'block')} className="código-bar-item código-button código-hover-black">
                <LineWrapper>
                  <Line showModal={showModal} />
                  <Line showModal={showModal} />
                </LineWrapper>
              </button>
            </Flex>
            <div>CH</div>
            {isAuthenticated ? <LogoutButton /> : <LoginButton />}
          </FlexNavBar>
        </div>
      </NavBlur>
      <NavBodyContent id={elementId} className="código-modal">
        <NavLinks onClick={handleNavItemClick} />
      </NavBodyContent>
    </>
  );
};

export default Nav;
