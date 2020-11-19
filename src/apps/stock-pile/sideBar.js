import styled from 'styled-components';

const SideLinks = styled.div`
  width: 130px;
`;

const menuLinks = {
  push: ['Summary', 'dropdown'],
  pull: ['All', 'dropdown'],
};

const SideBar = ({ currentTab, setSideBarLink }) => {
  return (
    <>
      <SideLinks className="código-sidebar código-bar-block código-light-grey código-card">
        {menuLinks[currentTab].map((link) => {
          return (
            <button key={link} className="código-bar-item código-button tablink" onClick={() => setSideBarLink(link.toLowerCase())}>
              {link}
            </button>
          );
        })}
      </SideLinks>
    </>
  );
};

export default SideBar;
