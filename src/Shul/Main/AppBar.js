import React from 'react';
import { useNavigate } from 'react-router-dom';
import Clock from './Clock';

const AppBar = () => {
  const navigate = useNavigate();
  return (
    <header
      id="topnav"
      className="defaultscroll sticky header-height-chng"
      style={{
        background: 'transparent'
      }}
    >
      <div className="container">

        <div className="web-style-1">
          <a
            className="logo color-top-padding"
            onClick={() => { navigate('/'); }}
            href="#"
          >
            <img src="/images/gososhul/green-logo.png" height={34} alt />
          </a>
        </div>
        <div className="web-Clock-dhm color-top-padding web-style-2 ">
          <div className="text-center">
            <Clock />
          </div>
        </div>

      </div>

    </header>
  );
};

export default AppBar;
