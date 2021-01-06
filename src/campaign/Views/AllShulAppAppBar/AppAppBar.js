import React from 'react';
import AppBar from './AppBar';
import useScrollPosition from '@react-hook/window-scroll';

const AppAppBar = () => {
  const scrollY = useScrollPosition(60);
  // if(scrollY > 100)
  //   return (
  //     <header id="topnav" className="defaultscroll sticky nav-sticky ">
  //       <AppBar />
  //       {}
  //     </header>
  //   );
  return (
    <header id="topnav" className="defaultscroll sticky ">
      <AppBar />
      {}
    </header>
  );
};

export default AppAppBar;
