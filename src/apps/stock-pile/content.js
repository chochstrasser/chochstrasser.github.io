import styled from "styled-components";
import PushPage from "./push";
import Summary from "./Summary";

const Content = styled.div`
  margin-left: 130px;
`;

const MainContent = ({ currentTab, sideBarLink }) => {
  return (
    <Content>
      {currentTab === "push" && !sideBarLink && <PushPage />}
      {currentTab === "pull" &&
        !sideBarLink &&
        "pull page is temporary out of service"}
      {sideBarLink === "summary" && <Summary />}
    </Content>
  );
};

export default MainContent;
