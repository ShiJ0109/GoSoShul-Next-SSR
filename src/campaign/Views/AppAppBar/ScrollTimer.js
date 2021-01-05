import React from 'react';
import ScrollClock from 'components/Accessaries/ScrollClock';

const ScrollTimer = () => {
  return (
    <div id="navigation2">
      <ul className="navigation-menu centralizeElements nav-light">
        <div className=" color-top-padding">
          <div className="text-center">
            <ScrollClock />
          </div>
        </div>
      </ul>
    </div>
  );
};

export default ScrollTimer;
