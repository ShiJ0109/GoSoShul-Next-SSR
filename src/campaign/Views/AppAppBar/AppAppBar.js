import React from 'react';
import AppBar from './AppBar';

const AppAppBar = ({refData, ref}) => {
  return (
    <header id="topnav" className="defaultscroll sticky ">
      <AppBar refData={refData} ref={ref} />
    </header>
  );
};

export default AppAppBar;
