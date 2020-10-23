import { useState, useContext } from "react";
import Router from "./utils/Router";
import "./App.css";
import { themeContext } from "./context/theme-context";
import { MODAL_ID } from "./const/ids";
import Nav from "./nav";
import { ContentWrapper } from "./app-styles";
import PrimaryRoutes from "./primary-routes";

const App = () => {
  const { themeLight } = useContext(themeContext);
  const [showModal, setShowModal] = useState(false);

  const handleClick = (display) => () => {
    document.getElementById(MODAL_ID).style.display = display;
    setShowModal(display === "block");
  };

  const props = { showModal };

  return (
    <ContentWrapper
      className={themeLight ? "código-light-grey" : "código-dark-grey"}
    >
      <Router>
        <Nav
          handleClick={handleClick}
          elementId={MODAL_ID}
          showModal={showModal}
          setShowModal={setShowModal}
        />
        <PrimaryRoutes {...props} />
      </Router>
    </ContentWrapper>
  );
};

export default App;
