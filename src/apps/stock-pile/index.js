import { useState } from 'react';
import Tabs from './tabs';
import SideBar from './sideBar';
import MainContent from './content';

const StockPile = () => {
  const [tab, setTab] = useState(null);
  const [sideBarLink, setSideBarLink] = useState(null);

  const handleTabChange = (value) => {
    setTab(value);
    setSideBarLink(null);
  };

  const handleSideBarChange = (value) => {
    setSideBarLink(value);
  };

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
