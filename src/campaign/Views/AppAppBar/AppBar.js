import React from 'react';
import Logo from './Logo';
import Login from './Login';
import TagLogin from './TagLogin';
import Timer from './Timer';
import ScrollTimer from './ScrollTimer';

const AppBar = ({refData, refs}) => {
  return (
    <div className="container">
      <Logo />
      {refData === false ? <Login /> : <TagLogin refData={refData} refs={refs} />}
      <Timer />
      <ScrollTimer />
    </div>
  );
};

export default AppBar;
