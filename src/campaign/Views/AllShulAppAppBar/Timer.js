import React from 'react';
import Clock from 'components/Accessaries/Clock';

const Timer = () => {
  return (
    <div id="navigation1">
      {}
      <ul className="navigation-menu nav-light">
        <div className=" color-top-padding">
          <div className="text-center">
            <Clock />
          </div>
        </div>
      </ul>
    </div>
  );
};

export default Timer;
