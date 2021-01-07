import React from 'react';
import AppBar from './AppBar';

const AppAppBar = ({refData, refs}) => {
  return (
    <header id="topnav" className="defaultscroll sticky ">
      <AppBar refData={refData} refs={refs} />
    </header>
  );
};

export default AppAppBar;
