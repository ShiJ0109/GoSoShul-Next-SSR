import React from 'react';
import Logo from './Logo';
import Login from './Login';
import Timer from './Timer';
import ScrollTimer from './ScrollTimer';

const AppBar = () => {
  return (
    <div className="container">
      <Logo />
      <Login />
      <Timer />
      <ScrollTimer />
    </div>
  );
};

export default AppBar;
