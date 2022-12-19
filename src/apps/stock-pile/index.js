import * as React from 'react';
import Tabs from './tabs';
import SideBar from './sideBar';
import MainContent from './mainContent';

const StockPile = ({ showModal }) => {
  const [tab, setTab] = React.useState(null);
  const [sideBarLink, setSideBarLink] = React.useState(null);

  const handleTabChange = (value) => {
    setTab(value);
    setSideBarLink(null);
  };

  const handleSideBarChange = (value) => {
    setSideBarLink(value);
  };

  if (showModal) {
    return null;
  }

  return (
    <>
      <h1>Stock Pile</h1>
      <Tabs setTab={handleTabChange} currentTab={tab} />
      {tab && <SideBar currentTab={tab} setSideBarLink={handleSideBarChange} />}
      <MainContent currentTab={tab} sideBarLink={sideBarLink} />
    </>
  );
};

export default StockPile;
