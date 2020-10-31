import { useState } from 'react';
import Tabs from './tabs';
import SideBar from './sideBar';
import MainContent from './content';
import LoginButton from '../../components/login';

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
      <h1>Stock Piles</h1>
      <LoginButton />
      <Tabs setTab={handleTabChange} currentTab={tab} />
      {tab && <SideBar currentTab={tab} setSideBarLink={handleSideBarChange} />}
      <MainContent currentTab={tab} sideBarLink={sideBarLink} />
    </>
  );
};

export default StockPile;
